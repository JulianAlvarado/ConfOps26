const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { mkdirSync } = require("node:fs");

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1680, height: 1080 }, reducedMotion: "reduce", locale: "es" });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("request", request => { if (/^https?:/.test(request.url())) errors.push(`Remote request: ${request.url()}`); });
    await page.goto(pathToFileURL(path.join(__dirname, "index.html")).href);
    await page.waitForFunction(() => document.querySelectorAll(".metric-card").length === 4);
    assert.equal(await page.locator("html").getAttribute("lang"), "es");
    const checkSpanish = async () => {
      const english = await page.evaluate(() => {
        const forbidden = /\b(?:AI|the|with|without|your|this|next|previous|workspace|required|baseline|outcomes|guidance|shared|govern|evaluate|fullscreen|stage|reading|backup|handoffs|mocks|release|pending|learn|review|seconds)\b/i;
        const copy = [];
        for (const node of document.querySelectorAll("body *")) {
          if (!node.checkVisibility() && !node.matches('[role="status"], #stage-help')) continue;
          for (const child of node.childNodes) {
            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) copy.push(child.textContent.trim());
          }
          for (const attribute of ["aria-label", "aria-valuetext", "title", "placeholder", "data-label"]) {
            if (node.hasAttribute(attribute)) copy.push(node.getAttribute(attribute));
          }
        }
        return copy.filter(text => forbidden.test(text));
      });
      assert.deepEqual(english, [], "Visible runtime copy and accessibility announcements are Spanish");
    };
    const go = async number => {
      await page.evaluate(number => { location.hash = String(number); }, number);
      await page.waitForFunction(number => !document.getElementById(`slide-${number}`).hidden, number);
    };
    const click = selector => page.locator(selector).click();
    const slideNumber = () => page.locator(".slide:not([hidden])").getAttribute("id");
    const snapshotDir = process.env.SNAPSHOT_DIR;
    if (snapshotDir) mkdirSync(snapshotDir, { recursive: true });
    const capture = async label => {
      if (snapshotDir) await page.screenshot({ path: path.join(snapshotDir, `${label}.png`) });
    };
    for (const width of [1680, 1201, 1200, 1100, 1000, 901, 900, 701, 700, 390, 320]) {
      await page.setViewportSize({ width, height: 844 });
      const toolbarIssues = await page.locator(".toolbar").evaluate(toolbar => {
        const issues = [];
        const actions = toolbar.querySelector(".toolbar-actions");
        const buttons = [...actions.querySelectorAll("button")];
        if (buttons.length !== 5) issues.push("Expected all five toolbar actions");
        const children = [...actions.children].filter(node => node.checkVisibility());
        const boxes = children.map(node => node.getBoundingClientRect());
        for (const [index, node] of children.entries()) {
          const box = boxes[index];
          if (box.left < 0 || box.right > innerWidth) issues.push(`${node.id || node.className}: outside viewport`);
          if (innerWidth > 700 && Math.abs(box.top + box.height / 2 - (boxes[0].top + boxes[0].height / 2)) > 1) issues.push("Desktop actions must share one centered row");
          if (innerWidth <= 700 && node.matches("button") && box.height < 44) issues.push(`${node.id}: mobile target under 44px`);
          const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
          const textCenters = [];
          while (walker.nextNode()) {
            const text = walker.currentNode;
            if (!text.textContent.trim() || !text.parentElement.checkVisibility()) continue;
            const range = document.createRange();
            range.selectNodeContents(text);
            const rects = [...range.getClientRects()].filter(rect => rect.width > 0);
            if (rects.length !== 1) issues.push(`${node.id || node.className}: wrapped label`);
            for (const rect of rects) {
              textCenters.push(rect.top + rect.height / 2);
              if (rect.left < box.left - 1 || rect.right > box.right + 1) issues.push(`${node.id}: clipped label`);
            }
          }
          if (!textCenters.length || Math.max(...textCenters) - Math.min(...textCenters) > 6) issues.push(`${node.id || node.className}: shortcut on a separate line`);
          for (const other of boxes.slice(index + 1)) {
            if (box.left < other.right && box.right > other.left && box.top < other.bottom && box.bottom > other.top) issues.push("Toolbar controls overlap");
          }
        }
        const brand = toolbar.querySelector(".wordmark").getBoundingClientRect();
        if (boxes.some(box => box.left < brand.right && box.right > brand.left && box.top < brand.bottom && box.bottom > brand.top)) issues.push("Actions overlap brand");
        if (document.documentElement.scrollWidth > innerWidth) issues.push("Toolbar causes page overflow");
        if (innerWidth > 900 && !toolbar.querySelector(".version").checkVisibility()) issues.push("Desktop version must remain visible");
        return issues;
      });
      assert.deepEqual(toolbarIssues, [], `Toolbar at ${width}px`);
      for (const control of await page.locator(".toolbar-actions button").all()) {
        await control.focus();
        assert(await control.evaluate(node => node === document.activeElement && node.getBoundingClientRect().right <= innerWidth), "Every toolbar action remains focusable onscreen");
      }
      if ([1000, 390, 320].includes(width)) await capture(`toolbar-${width}`);
    }
    await page.setViewportSize({ width: 1680, height: 1080 });
    for (const control of await page.locator(".toolbar-actions button, .toolbar-actions kbd").all()) {
      assert.equal(await control.evaluate(node => getComputedStyle(node).borderTopWidth), "0px", "Toolbar actions and shortcuts have no outlined boxes");
    }
    await page.locator("#notes-toggle").hover();
    assert.equal(await page.locator("#notes-toggle").evaluate(node => getComputedStyle(node).textDecorationLine), "underline");
    await click("#notes-toggle");
    assert.equal(await page.locator("#notes-toggle").evaluate(node => getComputedStyle(node).color), "rgb(118, 227, 227)");
    await click("#notes-toggle");
    await page.keyboard.press("Tab");
    assert.equal(await page.locator("#fullscreen").evaluate(node => getComputedStyle(node).outlineWidth), "3px", "Keyboard focus stays visible");
    await page.locator("#presentation").focus();
    assert.equal(await page.locator(".slide").count(), 23);
    assert.deepEqual(await page.locator(".opening-labels span").allTextContents(), ["CAPACIDAD ↑", "COHERENCIA ?"]);
    assert.equal(await page.locator(".opening-art svg text").count(), 0);
    assert.deepEqual(await page.evaluate(() => ({
      keynoteCount,
      duration: notes.slice(0, keynoteCount).reduce((sum, note) => sum + note.seconds, 0),
      bio: notes[2].seconds,
      closing: notes[14].seconds,
      demo: notes[5].seconds,
      qa: notes[keynoteCount].seconds,
      backups: notes.slice(keynoteCount + 1).map(note => note.seconds)
    })), { keynoteCount: 15, duration: 1200, bio: 30, closing: 90, demo: 270, qa: 600, backups: [0, 0, 0, 0, 0, 0, 0] });
    assert.equal(await page.locator(".conflict-slide").count(), 0);
    for (const label of await page.locator(".scenario-label").allTextContents()) {
      assert.equal(label.trim(), "EXPERIMENTACIÓN INICIAL · VALORES APROXIMADOS");
    }
    await go(2);
    assert.equal(await page.locator(".ai-label").count(), 0);
    assert.equal(await page.locator("#title-2").innerText(), "Con IA se produce\nen todas partes.");
    assert.deepEqual(await page.locator("#roles h3").allTextContents(), ["Producto", "Investigación", "Diseño", "Ingeniería"]);
    assert.deepEqual(await page.locator(".role-output").evaluateAll(groups => groups.map(group => [...group.children].map(item => item.textContent))),
      [["Encargo", "Requisitos", "Hipótesis"], ["Síntesis", "Hallazgos", "Preguntas"], ["Conceptos", "Prototipos", "Patrones"], ["Componentes", "Código", "Pruebas"]]);
    await page.locator("#presentation").focus();
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-3").hidden);
    assert.equal(await page.locator("#title-3").innerText(), "Julian Alvarado");
    assert.equal(await page.locator(".about-role").innerText(), "Xbox Design Ops");
    assert.equal(await page.locator(".about-bio p").count(), 3);
    assert.match(await page.locator(".about-bio").innerText(), /gerente sénior de programas y líder de operaciones de diseño en Microsoft/);
    assert.match(await page.locator(".about-bio").innerText(), /mejores sistemas, procesos más claros y un uso responsable de la IA/);
    assert.match(await page.locator(".about-bio").innerText(), /organizaciones creativas resilientes y centradas en las personas/);
    assert.equal(await page.locator(".about-bio p").last().innerText(), "Fuera del trabajo, practica CrossFit a diario y se define como un «eterno cinturón azul» de jiu-jitsu. Músico retirado, sigue disfrutando de los conciertos y de dibujar en casa. Ahora escucha a Radiohead, Lenny Kravitz, Oasis y Crosses.");
    assert.equal(await page.locator(".about-slide button, .about-slide input, .about-slide img").count(), 0);
    assert.match(await page.locator(".note-time").innerText(), /1:30–2:00 · 30 segundos/);
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-4").hidden);
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-5").hidden);
    assert.equal(await page.locator(".slide:not([hidden])").getAttribute("data-title"), "Gobernar. Contexto. Evaluar.");
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-6").hidden);
    assert.equal(await page.locator(".slide:not([hidden])").getAttribute("data-title"), "Corrige el formulario. Conserva lo aprendido.");
    assert.match(await page.locator(".note-time").innerText(), /4:00–8:30 · 270 segundos/);
    assert.match(await page.locator("#slide-9").textContent(), /Ampliar sistemas de diseño/);
    assert.equal(await page.locator(".fundamentals p").count(), 0);
    assert.match(await page.locator("#slide-22 .lead").textContent(), /que sepa el modelo/);
    for (const number of [1, 7, 9, 10, 11]) {
      assert.equal(await page.locator(`#slide-${number} .slide-footer span`).count(), 1, "Removed footer taglines remain absent");
      assert.equal(await page.locator(`#slide-${number} .slide-footer`).evaluate(node => getComputedStyle(node).justifyContent), "flex-end");
    }
    for (const action of ["generate", "cause", "align", "journey", "connect", "stack"]) {
      assert.deepEqual(await page.locator(`[data-action="${action}"]`).evaluate(node => {
        const style = getComputedStyle(node);
        return [style.fontSize, style.paddingTop, style.paddingLeft];
      }), ["16px", "9px", "14px"], `${action} retains compact sizing after relocation`);
    }
    const failures = [];
    assert.equal(await page.locator("#slide-6 > .eyebrow > span").evaluate(node => getComputedStyle(node).fontSize), "14px", "Demo caption uses shared review eyebrow sizing");
    const checkLayout = async (reading, label) => {
      await checkSpanish();
      const issues = await page.evaluate(reading => {
        const slide = document.querySelector(".slide:not([hidden])");
        const bounds = slide.getBoundingClientRect();
        const footer = slide.querySelector(".slide-footer").getBoundingClientRect();
        const stageMode = document.body.classList.contains("stage-mode");
        const exit = document.getElementById("stage-exit").getBoundingClientRect();
        const issues = [];
        for (const diagram of slide.querySelectorAll(".network svg, .learning-loop svg")) {
          if (!diagram.checkVisibility()) continue;
          const texts = [...diagram.querySelectorAll("text")];
          if (!texts.length) issues.push("Visible diagram has no labels to inspect");
          for (const text of texts) {
            const group = text.closest(".network-node, .loop-node");
            const frame = group ? group.querySelector("rect").getBBox() : diagram.closest(".network") ? diagram.querySelector(".network-hub").getBBox() : diagram.viewBox.baseVal;
            const box = text.getBBox();
            if (box.x < frame.x + 2 || box.x + box.width > frame.x + frame.width - 2 ||
                box.y < frame.y || box.y + box.height > frame.y + frame.height) issues.push(`${text.textContent}: outside diagram frame`);
          }
        }
        if (!reading && slide.id === "slide-1") {
          const labels = slide.querySelector(".opening-labels").getBoundingClientRect();
          const title = slide.querySelector("h1").getBoundingClientRect();
          const art = slide.querySelector(".opening-art svg").getBoundingClientRect();
          const scale = bounds.width / 1600;
          const coherence = document.createRange();
          coherence.selectNodeContents(slide.querySelector(".opening-labels span:last-child"));
          if (Math.abs(coherence.getBoundingClientRect().right - art.right) > 1) issues.push("Coherence text must align to animation's right edge");
          const textBounds = node => {
            const range = document.createRange();
            range.selectNodeContents([...node.childNodes].find(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim()));
            return range.getBoundingClientRect();
          };
          const capacity = textBounds(slide.querySelector(".opening-labels span:first-child"));
          const possibility = textBounds(slide.querySelector(".caption-item:first-child"));
          const responsibility = textBounds(slide.querySelector(".caption-item:last-child"));
          if (Math.abs(possibility.left - capacity.left) > 1) issues.push("Possibility text must align with Capacity text");
          if (Math.abs(responsibility.right - coherence.getBoundingClientRect().right) > 1) issues.push("Responsibility text must align with Coherence text");
          const responsibilityDot = slide.querySelector(".caption-item:last-child .dot").getBoundingClientRect();
          if (possibility.right + 8 * scale > responsibilityDot.left) issues.push("Opening caption columns overlap");
          if (Math.abs(labels.top - title.top) > 1) issues.push("Opening label row must align with title top");
          if (art.top - labels.bottom < 24 * scale - 1) issues.push("Opening labels need 24px of space above artwork");
        }
        if (!reading && slide.id === "slide-13") {
          const range = document.createRange();
          range.selectNodeContents(slide.querySelector(".metric-foot strong"));
          if (range.getClientRects().length !== 1) issues.push("Metric question must fit on one line");
        }
        if (/\b(?:BRIEF|AC|DEC|RULE)[-\u2010-\u2015]\d+\b/.test(slide.textContent)) issues.push("Obsolete example identifier in slide copy");
        for (const node of slide.querySelectorAll("*")) {
          if (node.closest(".sr-only, svg") || !node.checkVisibility()) continue;
          if (reading && node.closest(".definitions thead")) continue;
          const rect = node.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1) issues.push(`${node.className || node.tagName}: outside horizontal slide bounds`);
          if (!reading && !node.closest(".slide-footer") && rect.bottom > footer.top - 4) issues.push(`${node.className || node.tagName}: overlaps footer`);
          if (!node.closest(".slide-footer") && node.childNodes.length && [...node.childNodes].some(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim())) {
            if (stageMode && rect.left < exit.right && rect.right > exit.left && rect.top < exit.bottom && rect.bottom > exit.top) issues.push(`${node.className || node.tagName}: overlaps stage exit`);
            for (const child of node.childNodes) {
              if (child.nodeType !== Node.TEXT_NODE || !child.textContent.trim()) continue;
              const range = document.createRange();
              range.selectNodeContents(child);
              for (const text of range.getClientRects()) {
                if (text.right > rect.right + 2 || text.left < rect.left - 2) issues.push(`${node.className || node.tagName}: text overflows its container`);
                if (!reading && text.bottom > footer.top - 2) issues.push(`${node.className || node.tagName}: text crosses footer`);
              }
              const style = getComputedStyle(node);
              if (["hidden", "clip"].includes(style.overflowY) && node.scrollHeight > node.clientHeight + 1) issues.push(`${node.className || node.tagName}: vertically clipped content`);
              if (["hidden", "clip"].includes(style.overflowX) && node.scrollWidth > node.clientWidth + 1) issues.push(`${node.className || node.tagName}: horizontally clipped content`);
            }
          }
          if (reading && node.matches("button:not(:disabled), input") && rect.height < 44) issues.push(`${node.tagName}: target under 44px`);
          if (reading && node.matches("p:not(.kicker), li, td, input") && parseFloat(getComputedStyle(node).fontSize) < 16) issues.push(`${node.className || node.tagName}: text under 16px`);
          if (node.matches(".prototype-form, .decision-evidence")) {
            const scene = node.closest(".prototype-scene").getBoundingClientRect();
            if (rect.top < scene.top - 1 || rect.bottom > scene.bottom + 1) issues.push("Demo content exceeds its focal surface");
          }
        }
        const main = document.getElementById("presentation");
        if (reading && main.scrollWidth > main.clientWidth + 1) issues.push("Reading pane horizontal overflow");
        if (document.documentElement.scrollWidth > innerWidth) issues.push("Page horizontal overflow");
        return [...new Set(issues)];
      }, reading);
      if (issues.length) failures.push({ label, issues });
    };
    const exerciseDemo = async (reading, label) => {
      await go(6);
      await click('[data-action="pair-reset"]');
      const expected = [/empezar por mi cuenta/, /exige otra persona/, /Crear primero/, null, /No resuelvas esto dos veces/, /siguiente persona puede empezar sola/];
      for (let i = 0; i < 6; i++) {
        if (i) await click('[data-action="pair"]');
        assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), String(i));
        assert.equal(await page.locator("#pair-count").innerText(), `PASO ${i + 1} DE 6`);
        assert.equal(await page.locator("#pair-label").innerText(), await page.evaluate(i => pairLabels[i], i));
        assert.equal(await page.locator("#pair-step").getAttribute("aria-atomic"), "true");
        assert.equal(await page.locator("#prototype-form").isVisible(), i === 3);
        if (expected[i]) assert.match(await page.locator("#evidence-title").innerText(), expected[i]);
        if (i === 0) assert.match(await page.locator("#evidence-details").innerText(), /no tengo a quién invitar[\s\S]*empezar a trabajar/);
        if (i === 1) assert.match(await page.locator("#evidence-verdict").innerText(), /No puedo continuar/);
        if (i === 2) {
          assert.match(await page.locator("#evidence-details").innerText(), /Diseño \+ ingeniería/);
          await go(7);
          await go(6);
          assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "2", "Navigating preserves demo state");
        }
        if (i === 3) {
          assert.equal(await page.locator("#prototype-form input").count(), 1, "Solo setup: no invitation field");
          await page.locator("#workspace-name").fill("");
          await click("#prototype-form button");
          assert(await page.locator("#workspace-name").evaluate(node => node.matches(":invalid")), "Empty name remains required");
          assert.equal(await page.locator("#workspace-name").evaluate(node => node.validationMessage), "Escribe un nombre para el espacio de trabajo.");
          await page.evaluate(() => { setStageMode(true); setStageMode(false); });
          assert.equal(await page.locator("#workspace-name").evaluate(node => node.validationMessage), "Escribe un nombre para el espacio de trabajo.", "Stage restores Spanish native validation");
          await page.locator("#workspace-name").fill(" ");
          await click("#prototype-form button");
          assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
          await page.locator("#workspace-name").fill("<b>Team</b>" + "W".repeat(38));
          await click("#prototype-form button");
          assert.equal(await page.locator("#prototype-result b").count(), 0);
          assert.match(await page.locator("#prototype-result").innerText(), /No se ha guardado ni enviado nada/);
          assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), null);
          assert.equal(await page.locator("#workspace-name").evaluate(node => node.validity.customError), false, "Editing clears custom validity");
          assert.equal((await page.locator("#workspace-name").inputValue()).length, 48);
          await page.locator("#workspace-name").focus();
          await page.keyboard.press("ArrowRight");
          assert.equal(await slideNumber(), "slide-6");
        }
        if (i === 4) {
          assert.match(await page.locator("#evidence-details").innerText(), /según el encargo[\s\S]*líder de producto[\s\S]*tras el piloto/);
          assert.match(await page.locator("#evidence-verdict").innerText(), /validación con usuarios pendiente/);
        }
        if (i === 5) {
          assert.match(await page.locator("#evidence-details").innerText(), /sin el correo de otra persona[\s\S]*usuarios reales/);
          assert(await page.locator('[data-action="pair"]').isDisabled());
        }
        await checkLayout(reading, `${label}/pair-${i}`);
        if (label === "1200" || label === "390") {
          if (reading) await page.locator("#prototype-scene").scrollIntoViewIfNeeded();
          await capture(`${label}-demo-${i + 1}`);
        }
      }
      await click('[data-action="pair-reset"]');
      assert.equal(await page.locator("#workspace-name").inputValue(), "");
      assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), null);
      assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "0");
      assert(!(await page.locator('[data-action="pair"]').isDisabled()));
    };
    for (const width of [1680, 1200]) {
      await page.setViewportSize({ width, height: 1000 });
      for (let i = 1; i <= 23; i++) {
        await go(i);
        await checkLayout(false, `${width}/slide-${i}`);
        assert.match(await page.locator("#notes-content h3").innerText(), new RegExp(`^${i}\\. `));
        assert.equal(await page.locator("#act-label").innerText(), await page.locator(`#slide-${i}`).getAttribute("data-act"));
        if (i <= 15) {
          assert.match(await page.locator(`#slide-${i} .slide-footer span:last-child`).innerText(), new RegExp(`^${String(i).padStart(2, "0")} / 15`));
          assert.equal(await page.locator("#counter").innerText(), `${String(i).padStart(2, "0")} / 15`);
        }
        if (width === 1200) await capture(`1200-slide-${i}`);
      }
      await exerciseDemo(false, String(width));
    }
    await go(13);
    assert.equal(await page.locator(".metric-foot > p").innerText(), "¿Más revisión, mejores resultados?");
    assert.deepEqual(await page.locator(".metric-comparison > div:last-child dd").allTextContents(), ["−3 d", "≈−2/sem", "+2 h", "+12 pp"]);
    assert.equal(await page.locator('.metric-card[data-metric="1"] .metric-comparison dd').nth(1).innerText(), "6h");
    const productionCard = page.locator(".metric-card").filter({ has: page.getByRole("heading", { name: "Ritmo de producción de diseño", exact: true }) });
    assert.equal(await productionCard.locator(".metric-category").innerText(), "RESULTADO DEL FLUJO");
    assert.deepEqual(await productionCard.locator(".metric-comparison dd").allTextContents(), ["~3–4/sem", "~1–2/sem", "≈−2/sem"]);
    assert.equal(await productionCard.locator(".metric-unit").innerText(), "entregables aceptados / equipo con ciclo integral de 8 semanas");
    assert.equal(await productionCard.locator(".metric-estimate").innerText(), "Cambio: estimación por puntos medios");
    assert(await productionCard.evaluate(node => node.classList.contains("warning")));
    assert.equal(await productionCard.locator(".metric-comparison > div:last-child dd").evaluate(node => getComputedStyle(node).color),
      await page.locator('.metric-card[data-metric="1"] .metric-comparison > div:last-child dd').evaluate(node => getComputedStyle(node).color), "Production decrease uses the warning color");
    await click("#metrics-open");
    await checkSpanish();
    assert.equal(await page.locator(".metric-table tbody tr").count(), 10);
    const productionRow = page.locator(".metric-table tr").filter({ has: page.getByRole("rowheader", { name: /Ritmo de producción de diseño/ }) });
    assert.deepEqual(await productionRow.locator("td").allTextContents(), ["~3–4/sem", "~1–2/sem", "≈−2/semEstimación por puntos medios"]);
    assert.match(await productionRow.locator("th").innerText(), /entregables aceptados \/ equipo con ciclo integral de 8 semanas/);
    await capture("metrics-detail-ranges");
    assert.deepEqual(await page.evaluate(() => {
      const metric = metrics.find(item => item.name === "Ritmo de producción de diseño");
      return { baseline: metric.baseline, pilot: metric.pilot, delta: metricDelta(metric) };
    }), { baseline: [3, 4], pilot: [1, 2], delta: -2 });
    await page.keyboard.press("ArrowRight");
    assert.equal(await slideNumber(), "slide-13");
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#metrics-open").evaluate(node => node === document.activeElement), true);
    await click("#notes-toggle");
    assert.equal(await page.locator("#notes").evaluate(node => node === document.activeElement), true);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(250);
    assert.equal(await slideNumber(), "slide-13");
    assert(await page.locator("#notes").evaluate(node => node.scrollTop > 0));
    await page.keyboard.press("Home");
    await page.waitForTimeout(250);
    assert.equal(await page.locator("#notes").evaluate(node => node.scrollTop), 0);
    await page.keyboard.press("n");
    assert(!(await page.locator("#notes").isVisible()));
    await go(2);
    for (let i = 1; i <= 4; i++) {
      await click('[data-action="generate"]');
      assert.equal(await page.locator(".role.generated").count(), i);
      assert.equal(await page.locator(".role[aria-current='step']").count(), 1);
      assert.match(await page.locator("#generation-status").innerText(), new RegExp(`${i} de 4`));
    }
    await click('[data-action="generate"]');
    assert.equal(await page.locator(".role.generated").count(), 0);
    await go(4);
    const causes = ["Más producción", "Más variación", "Más decisiones", "Más incoherencia"];
    assert.deepEqual(await page.locator("#causal-chain li").allTextContents(), causes);
    for (let i = 0; i < 8; i++) {
      if (i) await click('[data-action="cause"]');
      const step = i % 4;
      assert.equal(await page.locator("#causal-chain .current").count(), step + 1);
      assert.equal(await page.locator("#causal-chain [aria-current='step']").count(), 1);
      assert.equal(await page.locator("#causal-chain [aria-current='step']").innerText(), causes[step]);
      assert.equal(await page.locator("#cause-status").innerText(), `Paso ${step + 1} de 4: ${causes[step]}.`);
      assert.equal(await page.locator(".branch-outputs .lit").count(), step === 3 ? 5 : step + 1);
      assert.equal(await page.locator(".branch-lines .lit").count(), step === 3 ? 5 : step + 1);
      assert.equal(await page.locator('[data-action="cause"]').innerText(), step === 3 ? "Reiniciar la cadena" : "Seguir la cadena");
    }
    await click('[data-action="align"]');
    assert.equal(await page.locator('[data-action="align"]').getAttribute("aria-pressed"), "true");
    await checkLayout(false, "aligned");
    await go(11);
    await click('[data-action="journey"]');
    assert.match(await page.locator("#journey-status").innerText(), /Recorrido 1:/);
    await go(10);
    const contrast = await page.evaluate(() => {
      const luminance = color => {
        const channels = color.match(/[\d.]+/g).slice(0, 3).map(n => {
          const c = Number(n) / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return channels.reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0);
      };
      const ratio = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);
      const background = getComputedStyle(document.getElementById("slide-10")).backgroundColor;
      return {
        network: ratio(getComputedStyle(document.querySelector(".network-links")).stroke, background),
        button: ratio(getComputedStyle(document.querySelector('[data-action="connect"]')).borderTopColor, background)
      };
    });
    assert(contrast.network >= 3 && contrast.button >= 3, "Inactive links and control boundaries meet 3:1");
    await click('[data-action="connect"]');
    assert.equal(await page.locator('[data-action="connect"]').getAttribute("aria-pressed"), "true");
    await go(22);
    const before = await page.locator("#stack").ariaSnapshot();
    for (let i = 0; i < 4; i++) await click('[data-action="stack"]');
    assert.notEqual(await page.locator("#stack").ariaSnapshot(), before);
    assert.equal(await page.locator(".stack-layer.revealed").count(), 5);
    assert.match(await page.locator("#stack-status").innerText(), /Capa 5 de 5/);
    await go(23);
    for (let i = 0; i < 5; i++) {
      await click(`[data-life="${i}"]`);
      assert.equal(await page.locator(`[data-life="${i}"]`).getAttribute("aria-pressed"), "true");
      await checkLayout(false, `lifecycle-${i}`);
    }
    await go(6);
    assert.deepEqual(await page.locator('[data-action="pair-reset"]').evaluate(node => {
      const style = getComputedStyle(node);
      return [style.fontSize, style.paddingTop, style.paddingLeft];
    }), ["19px", "14px", "22px"]);
    await go(8);
    assert.equal(await page.locator("#slide-8 .lead").innerText(), "Conserva la decisión y su razón.\nCompártelas con el siguiente equipo.");
    const loopLabels = ["La IA propone", "El equipo revisa", "Guardar la lección", "Actualizar la guía", "Revisar el resultado"];
    for (let i = 0; i < 6; i++) {
      await click('[data-action="loop"]');
      assert((await page.locator("#loop-status").innerText()).startsWith(loopLabels[i % 5]));
      assert((await page.locator("#loop-reading [aria-current='step']").innerText()).startsWith(loopLabels[i % 5]));
    }
    assert.equal(await page.locator(".loop-node.current").count(), 1);
    assert.equal(await page.locator("#loop-reading [aria-current='step']").count(), 1);
    await go(14);
    assert.deepEqual(await page.locator(".thirty-days h3").allTextContents(), ["Mapear", "Elegir", "Definir", "Piloto"]);
    assert.deepEqual(await page.locator(".pilot-decision strong").allTextContents(), ["Adoptar", "Revisar", "Detener"]);
    assert.equal(await page.locator("#slide-14 button, .thirty-days b").count(), 0);
    assert.match(await page.locator("#notes-content").innerText(), /En el equipo[\s\S]*En el área de producto[\s\S]*En la empresa/);
    await go(15);
    assert.equal(await page.locator("#progress").evaluate(node => node.value / node.max), 1);
    assert.equal(await page.locator("#slide-15 button").count(), 0);
    assert.equal(await page.locator("#next").getAttribute("aria-label"), "Mostrar la respuesta");
    assert.equal(await page.locator("#next").getAttribute("aria-expanded"), "false");
    await click("#next");
    assert.equal(await slideNumber(), "slide-15");
    assert(await page.locator("#closing-reveal").isVisible());
    assert.equal(await page.locator("#next").getAttribute("aria-expanded"), "true");
    assert.equal(await page.locator("#next").getAttribute("aria-label"), "Siguiente diapositiva: Preguntas");
    assert(await page.locator("#next").evaluate(node => node === document.activeElement));
    assert.match(await page.locator("#announcement").innerText(), /DesignOps.*infraestructura/);
    await checkLayout(false, "closing");
    await capture("review-closing-next");
    await click("#next");
    await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
    assert.equal(await page.locator("#next").getAttribute("aria-label"), "Siguiente diapositiva");
    assert.equal(await page.locator("#next").getAttribute("aria-expanded"), null);
    for (const key of ["ArrowRight", "ArrowDown", "PageDown", "Space", "Enter"]) {
      await go(15);
      await page.evaluate(() => setClosing(false));
      await page.locator(key === "Enter" ? "#next" : "#presentation").focus();
      await page.keyboard.press(key);
      assert.equal(await slideNumber(), "slide-15", `${key} reveals before advancing`);
      assert(await page.locator("#closing-reveal").isVisible());
      await page.evaluate(() => document.getElementById("presentation").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", repeat: true, bubbles: true })));
      assert.equal(await slideNumber(), "slide-15", "Held forward key cannot skip the closing pause");
      await page.keyboard.press(key);
      await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
    }
    // Both review answer states survive a complete Stage reveal/reverse rehearsal.
    for (const revealed of [false, true]) {
      await go(15);
      await page.evaluate(revealed => setClosing(revealed), revealed);
      await click("#stage-toggle");
      assert(!(await page.locator("#closing-reveal").isVisible()));
      await page.keyboard.press("ArrowRight");
      assert(await page.locator("#closing-reveal").isVisible());
      await page.keyboard.press("ArrowLeft");
      assert(!(await page.locator("#closing-reveal").isVisible()));
      await page.keyboard.press("Escape");
      assert.equal(await page.locator("#closing-reveal").isVisible(), revealed);
      assert.equal(await page.locator("#next").getAttribute("aria-expanded"), String(revealed));
    }
    await go(16);
    assert(!(await page.locator("#progress").isVisible()));
    assert.equal(await page.locator(".qa-links a").count(), 7);
    assert.equal(await page.locator("#slide-16 .lead").count(), 0, "Selected Preguntas prompt stays removed");
    assert.equal(await page.locator("#title-16").innerText(), "Hablemos.");
    for (let number = 17; number <= 23; number++) {
      await click(`.qa-links a[href="#${number}"]`);
      await page.waitForFunction(number => !document.getElementById(`slide-${number}`).hidden, number);
      assert.equal(await page.locator("#counter").innerText(), `B${number - 16} / 7`);
      await click(`#slide-${number} .eyebrow a[href="#16"]`);
      await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
    }
    assert.deepEqual(await page.locator(".contact-links a").evaluateAll(links => links.map(link => [link.href, link.target, link.rel])),
      [["https://www.linkedin.com/in/alvaradolj1/", "_blank", "noopener noreferrer"], ["https://github.com/JulianAlvarado", "_blank", "noopener noreferrer"]]);
    await go(13);
    await click('[data-action="metric-definitions"]');
    await page.waitForFunction(() => !document.getElementById("slide-21").hidden);
    await click('#slide-21 a[href="#13"]');
    await page.waitForFunction(() => !document.getElementById("slide-13").hidden);
    await click("#fullscreen");
    await page.waitForFunction(() => Boolean(document.fullscreenElement));
    await click("#fullscreen");
    await page.waitForFunction(() => !document.fullscreenElement);
    const reviewState = () => page.evaluate(() => ({
      state: { ...state },
      reading: document.body.classList.contains("reading"),
      aligned: document.querySelector("#fragmentation").className,
      connected: document.querySelector("#network").className,
      closing: document.querySelector("#closing-reveal").hidden,
      name: document.querySelector("#workspace-name").value,
      invalid: document.querySelector("#workspace-name").getAttribute("aria-invalid"),
      result: document.querySelector("#prototype-result").textContent,
      resultClass: document.querySelector("#prototype-result").className,
      life: document.querySelector("[data-life][aria-pressed='true']").dataset.life
    }));
    const stageFonts = [];
    for (const size of [{ width: 1280, height: 720 }, { width: 1680, height: 1080 }]) {
      await page.setViewportSize(size);
      await go(6);
      await click('[data-action="pair-reset"]');
      for (let i = 0; i < 3; i++) await click('[data-action="pair"]');
      await page.locator("#workspace-name").fill("Revisión guardada");
      await click("#prototype-form button");
      const beforeStage = await reviewState();
      await click("#notes-toggle");
      await click("#stage-toggle");
      assert(await page.locator("body").evaluate(node => node.classList.contains("stage-mode")));
      for (const selector of [".toolbar", ".navigation", "#notes"]) assert(!(await page.locator(selector).isVisible()));
      assert(await page.locator("#stage-exit").isVisible());
      for (const key of ["n", "g"]) await page.keyboard.press(key);
      assert.equal(await page.locator("dialog[open]").count(), 0);
      assert(!(await page.locator("#notes").isVisible()));
      const fontResults = await page.evaluate(() => {
        const selectors = [
          ".about-role", ".about-bio p",
          ".framework h3", ".framework p", ".standards-table > div", ".stage-rule dt", ".stage-rule dd",
          ".role-output span", ".causal-chain li", ".branch-outputs span", ".source-node", ".alignment-band",
          "#slide-6 > .eyebrow > span", "#pair-count", "#pair-label", ".decision-evidence h3", ".decision-evidence dt", ".decision-evidence dd",
          "#evidence-verdict", ".prototype-form label", ".prototype-form input",
          ".prototype-form button", ".field-hint", ".prototype-result", ".rubric > div", ".rubric p",
          "#loop-reading li", ".workflow-track span",
          ".journey p", ".metric-unit", ".metric-estimate", ".metric-comparison dt", ".slide .scenario-label", ".thirty-days p",
          ".thirty-days article > span", ".thirty-days h3", ".pilot-decision", ".pilot-decision > span", ".stack-layer p", ".lifecycle button > span"
        ];
        const scale = document.getElementById("stage").getBoundingClientRect().width / 1600;
        // Hidden slides still inherit stage type; omit deliberately reduced review-only details.
        return selectors.map(selector => {
          const nodes = [...document.querySelectorAll(selector)].filter(node => !node.classList.contains("review-detail"));
          return { selector, count: nodes.length, pixels: Math.min(...nodes.map(node => parseFloat(getComputedStyle(node).fontSize) * scale)) };
        });
      });
      stageFonts.push({ viewport: size, minimum: Math.min(...fontResults.map(item => item.pixels)) });
      for (const result of fontResults) {
        assert(result.count > 0 && Number.isFinite(result.pixels), `Font selector must match: ${result.selector}`);
        assert(result.pixels >= 18.4 - 0.001, `${size.width}: ${result.selector} projects at ${result.pixels}px`);
      }
      for (let i = 1; i <= 23; i++) {
        await go(i);
        await checkLayout(false, `stage-${size.width}/slide-${i}`);
        const controls = await page.locator(".slide:not([hidden]) button").evaluateAll(nodes => nodes.filter(node => node.checkVisibility() && !node.disabled).map(node => node.dataset.action || node.type));
        if (![4, 6, 15].includes(i)) assert.deepEqual(controls, [], `No extra stage builds on slide ${i}`);
        if (i === 10) {
          assert(await page.locator("#network svg").isVisible(), "Stage retains the hub-and-spoke diagram");
          assert(!(await page.locator(".network-summary").isVisible()), "Stage does not substitute the Reading summary");
          const diagramIssues = await page.locator("#network").evaluate(network => {
            const issues = [];
            const links = getComputedStyle(network.querySelector(".network-links"));
            if (links.strokeDasharray !== "none") issues.push("Stage connections must all be resolved");
            for (const text of network.querySelectorAll("svg text")) {
              const box = text.getBBox();
              const node = text.closest(".network-node");
              const frame = (node ? node.querySelector("rect") : network.querySelector(".network-hub")).getBBox();
              const transform = text.getScreenCTM();
              const pixels = parseFloat(getComputedStyle(text).fontSize) * Math.hypot(transform.a, transform.b);
              if (pixels < 18.4) issues.push(`${text.textContent}: projects at ${pixels}px`);
              if (box.x < frame.x + 4 || box.x + box.width > frame.x + frame.width - 4 ||
                  box.y < frame.y || box.y + box.height > frame.y + frame.height) issues.push(`${text.textContent}: outside node`);
            }
            return issues;
          });
          if (diagramIssues.length) failures.push({ label: `stage-${size.width}/network`, issues: diagramIssues });
        }
        await capture(`stage-${size.width}-slide-${i}`);
      }
      await go(2);
      await page.locator("#presentation").focus();
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.getElementById("slide-3").hidden);
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.getElementById("slide-4").hidden);
      await page.keyboard.press("ArrowLeft");
      await page.waitForFunction(() => !document.getElementById("slide-3").hidden);
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.getElementById("slide-4").hidden);
      await page.locator("#presentation").focus();
      await page.keyboard.press("ArrowRight");
      assert.equal(await slideNumber(), "slide-4");
      assert.equal(await page.locator('[data-action="align"]').getAttribute("aria-pressed"), "true");
      await page.keyboard.down("ArrowRight");
      await page.keyboard.up("ArrowRight");
      await page.waitForFunction(() => !document.querySelector("#slide-5").hidden);
      await page.evaluate(() => document.getElementById("presentation").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", repeat: true, bubbles: true })));
      assert.equal(await slideNumber(), "slide-5", "Held advance keys do not skip builds/slides");
      await page.keyboard.press("ArrowLeft");
      await page.waitForFunction(() => !document.querySelector("#slide-4").hidden);
      await page.keyboard.press("ArrowLeft");
      assert.equal(await page.locator('[data-action="align"]').getAttribute("aria-pressed"), "false");
      await page.keyboard.press("PageDown");
      await page.keyboard.press("PageDown");
      await page.waitForFunction(() => !document.querySelector("#slide-5").hidden);
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.querySelector("#slide-6").hidden);
      for (let i = 0; i < 6; i++) {
        if (i) await page.keyboard.press("ArrowRight");
        assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), String(i));
        if (i === 3) {
          await page.locator("#workspace-name").focus();
          for (const key of ["ArrowRight", "ArrowLeft", "PageDown", " ", "n", "g", "f", "s"]) await page.keyboard.press(key);
          assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "3");
          assert.equal(await slideNumber(), "slide-6");
          assert.equal(await page.locator("dialog[open]").count(), 0);
          await page.locator("#workspace-name").fill(" ");
          await page.keyboard.press("Enter");
          assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
          await page.locator("#workspace-name").fill("<b>Team</b>" + "W".repeat(38));
          await page.keyboard.press("Tab");
          await page.keyboard.press("Enter");
          assert.match(await page.locator("#prototype-result").innerText(), /No se ha guardado ni enviado nada/);
          assert.equal(await page.locator("#prototype-result b").count(), 0);
          await page.keyboard.press("ArrowRight");
          assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "3", "Form buttons keep native keys");
          await page.keyboard.press("Tab");
          assert(await page.locator("#stage-exit").evaluate(node => node === document.activeElement), "Tab beyond submit restores access to slide keys and exit");
        }
        await checkLayout(false, `stage-${size.width}/demo-${i}`);
        await capture(`stage-${size.width}-demo-${i + 1}`);
      }
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.querySelector("#slide-7").hidden);
      await page.keyboard.press("ArrowLeft");
      await page.waitForFunction(() => !document.querySelector("#slide-6").hidden);
      assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "5", "Back navigation keeps builds");
      await page.keyboard.press("ArrowLeft");
      assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "4");
      await go(15);
      await page.locator("#presentation").focus();
      await page.keyboard.press("Space");
      assert(await page.locator("#closing-reveal").isVisible());
      await checkLayout(false, `stage-${size.width}/closing-revealed`);
      await capture(`stage-${size.width}-closing`);
      await page.keyboard.press("ArrowLeft");
      assert(!(await page.locator("#closing-reveal").isVisible()));
      await page.keyboard.press("ArrowRight");
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.querySelector("#slide-16").hidden);
      for (let number = 17; number <= 23; number++) {
        await click(`.qa-links a[href="#${number}"]`);
        await page.waitForFunction(number => !document.getElementById(`slide-${number}`).hidden, number);
        await click(`#slide-${number} .eyebrow a[href="#16"]`);
        await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
      }
      await go(6);
      await page.keyboard.press("Escape");
      assert.deepEqual(await reviewState(), beforeStage, "Stage restores every review state, including form and builds");
      assert(!(await page.locator("#notes").isVisible()), "Never reopen notes on the shared display");
      assert(await page.locator("#stage-toggle").evaluate(node => node === document.activeElement));
    }
    console.log("Projected stage body/diagram minima:", JSON.stringify(stageFonts));
    // Closing a native fullscreen session also leaves stage, even without a page key event.
    await page.keyboard.press("s");
    await page.keyboard.press("f");
    await page.waitForFunction(() => Boolean(document.fullscreenElement));
    await page.evaluate(() => document.exitFullscreen());
    await page.waitForFunction(() => !document.body.classList.contains("stage-mode"));
    await page.keyboard.press("s");
    await page.keyboard.press("f");
    await page.waitForFunction(() => Boolean(document.fullscreenElement));
    await page.keyboard.press("Escape");
    await page.waitForFunction(() => !document.fullscreenElement && !document.body.classList.contains("stage-mode"));
    await page.evaluate(() => {
      document.querySelector("#overview").showModal();
      document.querySelector("#metrics-detail").showModal();
      setStageMode(true);
    });
    assert.equal(await page.locator("dialog[open]").count(), 0, "Stage closes every top-layer dialog");
    await click("#stage-exit");
    await page.keyboard.press("s");
    await page.evaluate(() => Object.defineProperty(document, "fullscreenEnabled", { configurable: true, value: false }));
    await page.keyboard.press("f");
    assert.match(await page.locator("#stage-exit").innerText(), /Pantalla completa no disponible/);
    await page.evaluate(() => { delete document.fullscreenEnabled; });
    await page.keyboard.press("Escape");
    const errorCount = errors.length;
    await page.evaluate(async () => {
      const original = document.documentElement.requestFullscreen;
      document.documentElement.requestFullscreen = async () => { throw new Error("Permission denied"); };
      try { await fullscreen(); } finally { document.documentElement.requestFullscreen = original; }
    });
    assert.equal(await page.locator("#announcement").innerText(), "No se pudo activar la pantalla completa. Puedes continuar en Escenario dentro de la ventana.");
    assert.equal(errors.length, errorCount + 1, "Fullscreen failures are logged, not silently ignored");
    assert.match(errors.pop(), /Error al solicitar pantalla completa/);
    await click("#fullscreen");
    await page.waitForFunction(() => Boolean(document.fullscreenElement));
    await click("#fullscreen");
    await page.waitForFunction(() => !document.fullscreenElement);
    for (const size of [{ width: 900, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 700 }, { width: 844, height: 390 }]) {
      await page.setViewportSize(size);
      await page.waitForFunction(() => document.body.classList.contains("reading"));
      assert.equal(await page.locator("#slide-6 > .eyebrow > span").evaluate(node => getComputedStyle(node).fontSize), "14px", "Demo caption uses shared Reading eyebrow sizing");
      for (let i = 1; i <= 23; i++) {
        await go(i);
        await checkLayout(true, `${size.width}/slide-${i}`);
        if (size.width === 390 && [3, 5, 12, 13, 14, 16].includes(i)) {
          if (i === 13) await page.locator('.metric-card[data-metric="6"]').scrollIntoViewIfNeeded();
          await capture(`390-slide-${i}`);
        }
      }
      await exerciseDemo(true, String(size.width));
      await go(15);
      await page.evaluate(() => setClosing(false));
      await click("#next");
      assert.equal(await slideNumber(), "slide-15", "Reading Next reveals the closing answer");
      assert(await page.locator("#closing-reveal").isVisible());
      await click("#next");
      await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
      await go(15);
      await page.evaluate(() => setClosing(false));
      await page.locator("#presentation").focus();
      await page.keyboard.press("ArrowRight");
      assert.equal(await slideNumber(), "slide-15", "Reading Right reveals the closing answer");
      assert(await page.locator("#closing-reveal").isVisible());
      await page.keyboard.press("ArrowRight");
      await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
      await go(13);
      await click("#metrics-open");
      assert(await page.locator("#metrics-detail").evaluate(node => node.scrollWidth <= node.clientWidth + 1));
      await page.keyboard.press("Escape");
      await click("#notes-toggle");
      assert(await page.locator("#notes").evaluate(node => node.getBoundingClientRect().top > document.querySelector(".toolbar").getBoundingClientRect().bottom));
      await page.keyboard.press("Escape");
    }
    await go(21);
    await page.locator("#presentation").focus();
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(250);
    assert.equal(await slideNumber(), "slide-21");
    assert(await page.locator("#presentation").evaluate(node => node.scrollTop > 0));
    await page.keyboard.press("ArrowLeft");
    await page.waitForFunction(() => !document.getElementById("slide-20").hidden);
    await click("#reading-toggle");
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.locator("body").evaluate(node => node.classList.contains("reading")), false);
    await click("#reading-toggle");
    await page.setViewportSize({ width: 1200, height: 1000 });
    assert.equal(await page.locator("body").evaluate(node => node.classList.contains("reading")), true);
    await click("#stage-toggle");
    assert.equal(await page.locator("body").evaluate(node => node.classList.contains("reading")), false);
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.keyboard.press("s");
    assert.equal(await page.locator("body").evaluate(node => node.classList.contains("reading")), true, "Explicit Reading preference survives stage and resizing");
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".slide:visible").count(), 23);
    assert.deepEqual(errors, [], "No browser errors or remote requests");
    if (failures.length) console.error(JSON.stringify(failures, null, 2));
    assert.deepEqual(failures, [], "Layout and legibility regressions");
    console.log("PASS: all 23 slides, six review viewports plus two stage sizes, every demo state, preserved review edits, stage builds/back/exit/fullscreen, form key isolation, review restoration, projected type/overflow, reading/notes, accessibility, metrics, backup links, and print.");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
