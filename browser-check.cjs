const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { mkdirSync, readFileSync, writeFileSync } = require("node:fs");

(async () => {
  const browser = await chromium.launch({ headless: !process.env.HEADED });
  try {
    const page = await browser.newPage({ viewport: { width: 1680, height: 1080 }, reducedMotion: "reduce" });
    const errors = [];
    const failures = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("request", request => { if (/^https?:/.test(request.url())) errors.push(`Remote request: ${request.url()}`); });
    await page.goto(pathToFileURL(path.join(__dirname, "index.html")).href);
    await page.evaluate(() => document.fonts.ready);
    const go = async number => {
      await page.evaluate(number => navigate(number - 1), number);
      await page.waitForFunction(number => state.index === number - 1 && !document.getElementById(`slide-${number}`).hidden, number);
    };
    const click = selector => page.locator(selector).click();
    const step = () => page.locator("#prototype-scene").getAttribute("data-step");
    const current = () => page.evaluate(() => state.index + 1);
    const capture = async name => {
      if (!process.env.SNAPSHOT_DIR) return;
      mkdirSync(process.env.SNAPSHOT_DIR, { recursive: true });
      await page.screenshot({ path: path.join(process.env.SNAPSHOT_DIR, `${name}.png`) });
    };
    for (const hash of ["", "#3", "#5"]) {
      await page.goto(`${pathToFileURL(path.join(__dirname, "index.html")).href}${hash}`);
      assert.equal(await page.locator("html").getAttribute("lang"), "es");
      assert.equal(await page.locator("#language-toggle").textContent(), "EN");
      assert.equal(await page.locator("#language-toggle").getAttribute("aria-label"), "Idioma: español. Cambiar a inglés");
      assert.equal(await page.locator("#notes-toggle").textContent(), "Notas N");
      assert((await page.locator("#notes-content").textContent()).includes("IDEA CLAVE"));
      assert.equal(await step(), "0");
      await page.evaluate(() => setLanguage("en"));
      await page.reload();
      assert.equal(await page.locator("html").getAttribute("lang"), "es", "Reload returns to Spanish without storing preferences");
    }
    await page.evaluate(() => setLanguage("en"));
    assert.equal(await page.locator(".slide").count(), 23);
    assert.equal(await page.locator("[role=tab]").count(), 6);
    assert.equal(await page.locator('[data-action="pair-reset"], [data-action="pair"], [data-action="loop"]').count(), 0);
    assert.deepEqual(await page.evaluate(() => ({
      total: notes.slice(0, 14).reduce((sum, note) => sum + note.seconds, 0),
      demo: notes[4].seconds, before: notes[9].seconds,
      after: notes[10].seconds, closing: notes[13].seconds, qa: notes[14].seconds,
      backups: notes.slice(15).map(note => note.seconds)
    })), { total: 1170, demo: 270, before: 90, after: 105, closing: 90, qa: 600, backups: [0, 0, 0, 0, 0, 0, 0, 0] });
    assert.equal(await page.locator(".human-symbol").textContent(), "◎");
    assert.equal(await page.locator(".network-node").count(), 5);
    assert(!(await page.locator(".network-node").allTextContents()).some(text => text.includes("+ AI")));
    assert.equal(await page.locator(".shift-group").count(), 3);
    assert.equal(await page.locator(".shift-rows > div").count(), 6);
    assert.equal(await page.locator("#slide-10 .journey").count(), 1);
    assert.equal(await page.locator("#slide-11 .journey").count(), 1);
    assert.equal(await page.locator("#metric-dashboard thead th").count(), 4);
    assert.equal(await page.locator("#metric-dashboard .metric-category").count(), 2);
    assert.equal(await page.locator("#metric-tables tbody tr").count(), 10);
    for (const [locale, copy] of [
      ["es", ["¿Qué debemos usar y cómo debemos usarlo?", "La capa de inteligencia para tomar las decisiones correctas.", "¿Qué lo hace suficientemente bueno?"]],
      ["en", ["What should we use and how should we use it?", "The intelligence layer for the right choices.", "What makes it good enough?"]]
    ]) {
      await page.evaluate(locale => setLanguage(locale), locale);
      assert.equal(await page.locator("#slide-1 p.subtitle").innerHTML(), locale === "es"
        ? "Gestión, sistemas y el nuevo papel<br>de DesignOps en los equipos de producto"
        : "Governance, systems, and the new role<br>of DesignOps in product teams");
      assert.deepEqual(await page.locator("#slide-4 .framework p").allTextContents(), copy);
      assert.equal(await page.locator("#slide-4 .framework h3").first().textContent(), locale === "es" ? "GESTIONAR" : "GOVERN");
      const frameworkTitle = locale === "es" ? "Gestionar. Contexto. Evaluar." : "Govern. Context. Evaluate.";
      assert.equal(await page.locator("#slide-4").getAttribute("data-title"), frameworkTitle);
      assert((await page.locator('#slide-index a[href="#4"]').textContent()).includes(frameworkTitle));
      assert((await page.locator("#slide-4").getAttribute("aria-label")).includes(frameworkTitle));
      const takeaway = await page.evaluate(() => notes[3].takeaway);
      for (const text of copy) assert(takeaway.includes(text), "Framework summary quotes the current supporting copy");
    }
    const roleOutputs = {
      en: [["Brief", "Requirements", "Hypotheses"], ["Synthesis", "Insights", "Questions"], ["Concepts", "Prototypes", "Patterns"], ["Components", "Code", "Tests"]],
      es: [["Encargo", "Requisitos", "Hipótesis"], ["Síntesis", "Hallazgos", "Preguntas"], ["Conceptos", "Prototipos", "Patrones"], ["Componentes", "Código", "Pruebas"]]
    };
    await go(2);
    for (const locale of ["es", "en"]) {
      await click("#language-toggle");
      assert.equal(await page.locator("html").getAttribute("lang"), locale);
      assert.equal(await page.locator("#roles > article.role > ul.role-output").count(), 4);
      assert.deepEqual(await page.locator("#roles .role-output").evaluateAll(lists => lists.map(list => [...list.children].map(item => {
        if (item.tagName !== "LI") throw new Error("Role outputs must be semantic list items");
        return item.textContent;
      }))), roleOutputs[locale]);
      assert(await page.locator(".role-output li").evaluateAll(items => items.every(item => getComputedStyle(item).color === "rgb(241, 240, 232)" && getComputedStyle(item).animationName === "none")), "Reduced motion resolves all output lists immediately");
    }
    assert.equal(await page.locator('[data-action="generate"]').count(), 0);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(`${pathToFileURL(path.join(__dirname, "index.html")).href}#2`);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await current(), 2, "Direct hash load starts on slide 2");
    assert.deepEqual(await page.locator(".role-output li:first-child").evaluateAll(items => items.map(item => getComputedStyle(item).animationDelay)), ["0s", "0.65s", "1.3s", "1.95s"]);
    await page.locator(".role-output li").evaluateAll(items => Promise.all(items.flatMap(item => item.getAnimations().map(animation => animation.ready))));
    for (const locale of ["es", "en"]) {
      const starts = await page.locator(".role-output li").evaluateAll(items => items.flatMap(item => item.getAnimations().map(animation => animation.startTime)));
      await page.evaluate(locale => setLanguage(locale), locale);
      assert.deepEqual(await page.locator(".role-output li").evaluateAll(items => items.flatMap(item => item.getAnimations().map(animation => animation.startTime))), starts, "Language changes do not restart or duplicate generation");
    }
    await page.waitForFunction(() => [...document.querySelectorAll(".role-output li")].every(item => getComputedStyle(item).color === "rgb(241, 240, 232)" && getComputedStyle(item, "::marker").color === "rgb(255, 151, 127)"));
    assert.equal(await current(), 2, "Generation never advances the slide");
    for (let visit = 0; visit < 2; visit++) {
      await go(1);
      assert.equal(await page.locator("#roles").evaluate(node => node.getAnimations({ subtree: true }).length), 0, "Leaving cancels native generation animations");
      await go(2);
      assert.equal(await page.locator("#roles").evaluate(node => node.getAnimations({ subtree: true }).length), 24, "One output and one bullet animation per item");
      await page.evaluate(() => setStageMode(true));
      assert.equal(await page.locator("#roles").evaluate(node => node.getAnimations({ subtree: true }).length), 0);
      await page.evaluate(() => setStageMode(false));
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.deepEqual(await page.locator(".contact-links a").evaluateAll(links => links.map(link => link.href)),
      ["https://www.linkedin.com/in/alvaradolj1/", "https://github.com/JulianAlvarado"]);
    assert.deepEqual(await page.evaluate(source => {
      const doc = new DOMParser().parseFromString(source, "text/html");
      return spanish.copy.flatMap(copy => {
        const element = doc.querySelector(copy.selector);
        if (!element) return [`Missing ${copy.selector}`];
        const issues = [];
        if (copy.html && element.innerHTML !== copy.html[0]) issues.push(`Stale HTML ${copy.selector}`);
        for (const [index, values] of Object.entries(copy.text)) if (element.childNodes[index]?.textContent !== values[0]) issues.push(`Stale text ${copy.selector}/${index}`);
        for (const [name, values] of Object.entries(copy.attributes)) if (element.getAttribute(name) !== values[0]) issues.push(`Stale attribute ${copy.selector}/${name}`);
        return issues;
      });
    }, readFileSync(path.join(__dirname, "index.html"), "utf8")), []);

    for (const locale of ["en", "es"]) {
      await page.evaluate(locale => setLanguage(locale), locale);
      for (const width of [1680, 1201, 1200, 1100, 1000, 901, 900, 701, 700, 390, 320]) {
        await page.setViewportSize({ width, height: 1000 });
        const issues = await page.evaluate(() => {
          const brand = document.querySelector(".wordmark").getBoundingClientRect();
          const buttons = [...document.querySelectorAll(".toolbar button")];
          const centers = [];
          const issues = [];
          for (const button of buttons) {
            const box = button.getBoundingClientRect();
            centers.push((box.top + box.bottom) / 2);
            if (box.right > innerWidth || box.left < 0 || !box.width) issues.push("Clipped action");
            if (innerWidth > 700 && box.left < brand.right + 8) issues.push("Brand overlap");
            if (innerWidth <= 700 && box.height < 44) issues.push("Small target");
            const range = document.createRange();
            range.selectNodeContents(button);
            const text = [...range.getClientRects()].filter(r => r.width && r.height);
            if (text.some(r => r.left < box.left - 1 || r.right > box.right + 1)) issues.push("Clipped text");
            if (text.length && Math.max(...text.map(r => r.top)) >= Math.min(...text.map(r => r.bottom))) issues.push("Wrapped label/shortcut");
          }
          if (buttons.length !== 5 || document.querySelector(".version")) issues.push("Toolbar shape");
          if (innerWidth > 700 && Math.max(...centers) - Math.min(...centers) > 1) issues.push("Multiple toolbar rows");
          if (document.documentElement.scrollWidth > innerWidth) issues.push("Horizontal overflow");
          return issues;
        });
        assert.deepEqual(issues, [], `${locale} toolbar ${width}`);
      }
    }
    await page.setViewportSize({ width: 1680, height: 1080 });
    for (const stage of [false, true]) {
      await page.evaluate(stage => { setStageMode(stage); setPair(0, true); }, stage);
      await go(5);
      for (let i = 0; i < 6; i++) {
        assert.equal(await step(), String(i));
        assert.equal(await page.locator('[role=tab][aria-selected=true]').count(), 1);
        assert.equal(await page.locator('[role=tab][tabindex="0"]').count(), 1);
        assert.equal(await page.locator("#pair-panel").getAttribute("aria-labelledby"), `pair-tab-${i}`);
        for (const locale of ["es", "en"]) {
          if (stage) {
            await page.locator("#presentation").focus();
            const lang = await page.locator("html").getAttribute("lang");
            if (lang !== locale) await page.keyboard.press("l");
          } else if (await page.locator("html").getAttribute("lang") !== locale) await click("#language-toggle");
          assert.equal(await step(), String(i), "Language preserves every state");
          assert.equal(await page.locator("#pair-label").innerText(), await page.evaluate(i => pairLabels[i], i));
          assert.equal(await page.locator("#prototype-form").isVisible(), i === 3);
          if (i === 3) {
            await page.evaluate(() => setPair(3, true));
            assert.equal(await page.locator("#prototype-result").textContent(), "");
            assert.equal(await page.locator("#prototype-result").getAttribute("role"), "status");
            assert.deepEqual(await page.locator("#prototype-result").evaluate(node => [node.getBoundingClientRect().height, getComputedStyle(node).marginTop]), [0, "0px"], "Idle status must not reserve blank space");
            await page.evaluate(() => setLanguage(language === "es" ? "en" : "es"));
            assert.equal(await page.locator("#prototype-result").textContent(), "", "Language switching preserves an empty idle status");
            await page.evaluate(locale => setLanguage(locale), locale);
            await page.locator("#workspace-name").fill("");
            await click("#prototype-form button");
            assert(await page.locator("#workspace-name").evaluate(input => !input.checkValidity()));
            await page.locator("#workspace-name").fill(" ");
            await click("#prototype-form button");
            assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
            assert((await page.locator("#prototype-result").textContent()).length > 0, "Invalid input retains visible status feedback");
            await page.locator("#workspace-name").fill("<b>Diseño ñ</b>");
            await page.keyboard.press("Enter");
            assert.equal(await page.locator("#prototype-result b").count(), 0);
            assert.equal(await page.evaluate(() => state.formResult), "success");
            for (const key of ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]) {
              await page.locator("#workspace-name").focus();
              await page.keyboard.press(key);
              assert.equal(await current(), 5);
              assert.equal(await step(), "3");
            }
            await page.locator("#workspace-name").fill("Diseño de ejemplo");
            await click("#prototype-form button");
            for (const key of ["ArrowRight", "ArrowLeft", " ", "Enter"]) {
              await page.locator("#prototype-form button").focus();
              await page.keyboard.press(key);
              assert.equal(await step(), "3", "Native submit control never advances");
            }
            const target = locale === "es" ? "en" : "es";
            await page.evaluate(target => setLanguage(target), target);
            assert.equal(await page.locator("#workspace-name").inputValue(), "Diseño de ejemplo");
            assert.equal(await page.evaluate(() => state.formResult), "success");
            await page.evaluate(locale => setLanguage(locale), locale);
          }
          if (i === 4) assert.match(await page.locator("#evidence-verdict").innerText(), locale === "es" ? /validación con usuarios pendiente/ : /user validation pending/);
          if (i === 5) assert.match(await page.locator("#evidence-verdict").innerText(), locale === "es" ? /revisión continúa/ : /review is not over/);
        }
        if (stage) {
          await page.locator("#presentation").focus();
          await page.keyboard.press("ArrowRight");
        } else await click("#next");
      }
      await page.waitForFunction(() => state.index === 5);
      await go(5);
      for (let i = 5; i > 0; i--) {
        if (stage) {
          await page.locator("#presentation").focus();
          await page.keyboard.press("ArrowLeft");
        } else await click("#previous");
        assert.equal(await step(), String(i - 1));
      }
      assert.equal(await page.locator("#workspace-name").inputValue(), "Diseño de ejemplo", "Returning to state zero does not erase the form");
      await click("#pair-tab-3");
      assert.equal(await step(), "3");
      await page.locator("#pair-tab-3").focus();
      await page.keyboard.press("End");
      assert.equal(await step(), "5");
      await page.keyboard.press("ArrowRight");
      assert.equal(await step(), "0", "Tab roving wraps without leaving slide");
      await page.keyboard.press("Home");
      await page.keyboard.press("ArrowLeft");
      assert.equal(await step(), "5");
      for (let i = 0; i < 6; i++) {
        await click(`#pair-tab-${i}`);
        assert.equal(await step(), String(i), "Every tab directly selects its state");
      }
      for (const key of ["ArrowRight", "ArrowDown", "PageDown", " "]) {
        await page.evaluate(() => setPair(0));
        await page.locator("#presentation").focus();
        await page.keyboard.press(key);
        assert.equal(await step(), "1");
      }
      for (const key of ["ArrowLeft", "ArrowUp", "PageUp"]) {
        await page.evaluate(() => setPair(5));
        await page.locator("#presentation").focus();
        await page.keyboard.press(key);
        assert.equal(await step(), "4");
      }
      await page.evaluate(() => setPair(0));
      await page.locator("#presentation").focus();
      await page.keyboard.press("ArrowLeft");
      await page.waitForFunction(() => state.index === 3);
    }
    await page.evaluate(() => { setStageMode(false); setPair(4); setClosing(true); });
    await go(5);
    await page.evaluate(() => { $("#workspace-name").value = "Review snapshot"; state.formName = "Review snapshot"; state.formResult = "success"; renderFormResult(); });
    await click("#stage-toggle");
    assert.equal(await step(), "0");
    await click("#pair-tab-3");
    await page.locator("#workspace-name").fill("Stage input");
    await click("#prototype-form button");
    await page.locator("#workspace-name").focus();
    await page.keyboard.press("Escape");
    assert.equal(await step(), "4");
    assert.equal(await page.locator("#workspace-name").inputValue(), "Review snapshot");
    assert.equal(await page.evaluate(() => state.formName), "Review snapshot");
    assert.equal(await page.locator("#closing-reveal").getAttribute("hidden"), null);
    for (const stage of [false, true]) {
      await page.evaluate(stage => { setStageMode(stage); setClosing(false); }, stage);
      for (const locale of ["es", "en"]) {
        await page.evaluate(locale => setLanguage(locale), locale);
        await go(14);
        await page.evaluate(() => setClosing(false));
        if (stage) { await page.locator("#presentation").focus(); await page.keyboard.press("ArrowRight"); }
        else await click("#next");
        assert(await page.locator("#closing-reveal").isVisible());
        assert.equal(await current(), 14);
        await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
        assert(await page.locator("#closing-reveal").isVisible());
        if (stage) { await page.locator("#presentation").focus(); await page.keyboard.press("ArrowLeft"); }
        else await click("#previous");
        assert(!(await page.locator("#closing-reveal").isVisible()));
        await page.locator("#presentation").focus();
        for (const key of ["ArrowRight", "PageDown"]) await page.keyboard.press(key);
        await page.waitForFunction(() => state.index === 14);
        await page.keyboard.press("ArrowLeft");
        await page.waitForFunction(() => state.index === 13);
        assert(await page.locator("#closing-reveal").isVisible(), "Revisiting closing retains reveal");
      }
    }
    await page.evaluate(() => setStageMode(false));
    await go(13);
    await click("#metrics-open");
    assert(await page.locator("#metrics-detail").isVisible());
    await page.keyboard.press("Escape");
    assert.equal(await current(), 13);
    assert.equal(await page.evaluate(() => document.activeElement.id), "metrics-open");
    await click("#metrics-open");
    await click("#metrics-close");
    assert.equal(await current(), 13);
    for (const locale of ["en", "es"]) for (const stage of [false, true]) {
      await page.evaluate(({ locale, stage }) => { setStageMode(stage); setLanguage(locale); }, { locale, stage });
      for (const [origin, target, link, back] of [[11, 23, "#pilot-reference", "#pilot-return"], [15, 23, '.qa-links a[href="#23"]', "#pilot-return"], [15, 20, '.qa-links a[href="#20"]', "#definitions-return"]]) {
        await go(origin);
        await click(link);
        await page.waitForFunction(target => state.index === target - 1, target);
        await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
        assert.equal(await page.locator(back).getAttribute("href"), `#${origin}`);
        await click(back);
        await page.waitForFunction(origin => state.index === origin - 1, origin);
      }
      if (!stage) {
        await go(13);
        await click('[data-action="metric-definitions"]');
        await page.waitForFunction(() => state.index === 19);
        assert.equal(await page.locator("#definitions-return").getAttribute("href"), "#13");
        await click("#previous");
        await page.waitForFunction(() => state.index === 12);
      }
    }
    await page.evaluate(() => { setStageMode(false); setLanguage("es"); });
    assert.equal((await page.locator("#title-5").textContent()).trim(), "Ejemplo: Corrige el formulario. Conserva lo aprendido.");
    assert.equal(await page.locator("#title-7").textContent(), "No te enfoquesen el output,Aceleras el aprendizaje.");
    assert.equal(await page.locator("#title-8").textContent(), "Las mismas bases,un alcance actualizado.");
    assert.equal(await page.locator("#title-6 em").textContent(), "Una decisión informada");
    await go(2);
    assert.equal(await page.locator("#roles .role-output li").count(), 12);
    await page.goto(`${pathToFileURL(path.join(__dirname, "index.html")).href}#3`);
    await page.evaluate(() => document.fonts.ready);
    const paradoxState = () => page.evaluate(() => [state.cause, document.querySelector("#fragmentation").classList.contains("aligned")]);
    assert.deepEqual(await paradoxState(), [0, false], "Direct #3 starts with all patterns inactive");
    assert.equal(await page.locator('[data-action="cause"], [data-action="align"]').count(), 0);
    for (const locale of ["en", "es"]) for (const stage of [false, true]) {
      await page.evaluate(({ locale, stage }) => { setStageMode(stage); setLanguage(locale); state.cause = 0; setAligned(false); }, { locale, stage });
      await go(3);
      const advance = async direction => {
        if (stage) {
          await page.locator("#presentation").focus();
          await page.keyboard.press(direction > 0 ? "ArrowRight" : "ArrowLeft");
        } else await click(direction > 0 ? "#next" : "#previous");
      };
      for (let build = 0; build <= 2; build++) {
        assert.deepEqual(await paradoxState(), [Math.min(build, 1), build === 2]);
        assert.equal(await page.locator("#causal-chain .current").count(), build ? 4 : 0);
        assert.equal(await page.locator(".branch-lines .lit").count(), build ? 5 : 0);
        assert.equal(await page.locator(".branch-outputs .lit").count(), build ? 5 : 0);
        assert.equal(await page.locator("#causal-chain [aria-current=step]").count(), build ? 1 : 0);
        assert.equal(await page.locator("#causal-chain li").evaluateAll(nodes => nodes.filter(node => getComputedStyle(node).borderTopColor === "rgb(255, 151, 127)").length), build ? 4 : 0, "First press visibly activates the complete chain");
        const statuses = locale === "es"
          ? ["Patrones listos para activar.", "Todos los patrones activados. Contexto y evaluación pendientes.", "Criterios comunes aplicados. La cadena está completa."]
          : ["Patterns ready to activate.", "All patterns activated. Context and evaluation pending.", "Shared standards applied. The chain is complete."];
        assert.equal(await page.locator("#cause-status").textContent(), statuses[build]);
        const label = await page.locator("#next").getAttribute("aria-label");
        assert.equal(label, build === 0
          ? (locale === "es" ? "Activar todos los patrones" : "Activate all patterns")
          : build === 1 ? (locale === "es" ? "Aplicar criterios comunes" : "Apply shared standards")
          : (locale === "es" ? "Siguiente diapositiva" : "Next slide"));
        assert.equal(await page.locator("#next").evaluate(node => node.classList.contains("build-action")), build < 2);
        await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
        assert.deepEqual(await paradoxState(), [Math.min(build, 1), build === 2]);
        await page.evaluate(locale => setLanguage(locale), locale);
        await go(2);
        await go(3);
        assert.deepEqual(await paradoxState(), [Math.min(build, 1), build === 2], "Revisits retain the exact build");
        await advance(1);
        if (build < 2) assert.equal(await current(), 3, "Neither interaction click may advance the slide");
      }
      await page.waitForFunction(() => state.index === 3);
      await advance(-1);
      await page.waitForFunction(() => state.index === 2);
      for (const expected of [[1, false], [0, false]]) {
        await advance(-1);
        assert.deepEqual(await paradoxState(), expected);
      }
      await advance(-1);
      await page.waitForFunction(() => state.index === 1);
      await go(3);
      for (const key of ["ArrowRight", "ArrowDown", "PageDown", " "]) {
        await page.evaluate(() => { state.cause = 0; setAligned(false); });
        await page.locator("#presentation").focus();
        await page.keyboard.down(key);
        await page.keyboard.down(key);
        await page.keyboard.up(key);
        assert.deepEqual(await paradoxState(), [1, false], "A held forward key advances only once");
      }
      for (const key of ["ArrowLeft", "ArrowUp", "PageUp"]) {
        await page.evaluate(() => { state.cause = 1; setAligned(false); });
        await page.locator("#presentation").focus();
        await page.keyboard.down(key);
        await page.keyboard.down(key);
        await page.keyboard.up(key);
        assert.deepEqual(await paradoxState(), [0, false], "A held reverse key retreats only once");
      }
      await page.evaluate(() => setStageMode(false));
      for (const saved of [[1, false], [1, true]]) {
        await page.evaluate(([cause, aligned]) => { state.cause = cause; setAligned(aligned); setStageMode(true); }, saved);
        assert.deepEqual(await paradoxState(), [0, false], "Stage resets the whole explanatory sequence");
        await page.evaluate(() => { advanceReview(); setLanguage(language === "en" ? "es" : "en"); setStageMode(false); });
        assert.deepEqual(await paradoxState(), saved, "Review restores both chain and alignment");
      }
    }
    await go(10);
    assert.equal(await page.locator('[data-action="journey"]').count(), 0);
    assert(await page.locator("#journeys").evaluate(node => node.classList.contains("running")));
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(`${pathToFileURL(path.join(__dirname, "index.html")).href}#10`);
    for (const locale of ["en", "es"]) {
      await page.evaluate(locale => setLanguage(locale), locale);
      await go(9);
      await go(10);
      assert.deepEqual(await page.locator("#journeys .workflow-track span").evaluateAll(nodes => nodes.map(node => getComputedStyle(node).animationDelay)), ["0s", "0.75s", "1.5s", "2.25s", "3s"]);
      await page.locator("#journeys").evaluate(node => Promise.all(node.getAnimations({ subtree: true }).map(animation => animation.ready)));
      const starts = await page.locator("#journeys").evaluate(node => node.getAnimations({ subtree: true }).map(animation => animation.startTime));
      await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
      assert.deepEqual(await page.locator("#journeys").evaluate(node => node.getAnimations({ subtree: true }).map(animation => animation.startTime)), starts);
      await page.waitForFunction(() => [...document.querySelectorAll("#journeys .workflow-track span")].every(node => getComputedStyle(node).backgroundColor === "rgb(52, 42, 38)"));
      assert.equal(await current(), 10, "Handoffs never advance the slide");
      await go(9);
      assert.equal(await page.locator("#journeys").evaluate(node => node.getAnimations({ subtree: true }).length), 0);
      await go(10);
      assert.equal(await page.locator("#journeys").evaluate(node => node.getAnimations({ subtree: true }).length), 5);
      await page.evaluate(() => setStageMode(true));
      assert.equal(await page.locator("#journeys").evaluate(node => node.getAnimations({ subtree: true }).length), 0);
      await page.evaluate(() => setStageMode(false));
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(await page.locator("#journeys").evaluate(node => node.getAnimations({ subtree: true }).length), 0);
    await go(11);
    assert(await page.locator("#journeys-after").evaluate(node => node.classList.contains("running")));
    assert.equal(await page.locator('#slide-11 [data-action="journey"], #slide-11 .journey-label .tag').count(), 0);
    assert.equal(await page.locator('#slide-13 .scenario-label, #slide-13 .metric-foot > p').count(), 0);
    assert.equal(await page.locator("#metrics-detail .scenario-label").count(), 1, "Detail evidence badge remains");
    await page.emulateMedia({ reducedMotion: "no-preference" });
    for (const locale of ["en", "es"]) {
      await page.evaluate(locale => setLanguage(locale), locale);
      assert((await page.locator(".wordmark").textContent()).includes("Julian Alvarado"));
      assert.equal(await page.locator("#slide-12 aside.context-package > p").count(), 0);
      assert.equal(await page.locator("#slide-10 .bottom-line, #loop-status").count(), 0);
      await go(10);
      await go(11);
      assert.equal(await page.locator("#slide-11 .bottom-line > p").textContent(), locale === "en"
        ? "Hypothesis: production can shrink; experimentation can expand. Validate it."
        : "Hipótesis: producir puede llevar menos; experimentar, más. Valídalo.");
      assert.equal(await page.locator("#slide-11 .bottom-line br").count(), 0);
      assert.deepEqual(await page.locator("#journeys-after .workflow-track span").evaluateAll(nodes => nodes.map(node => ({
        name: getComputedStyle(node).animationName,
        delay: getComputedStyle(node).animationDelay
      }))), [{ name: "teamwork", delay: "0s" }, { name: "teamwork", delay: "0s" }, { name: "teamwork", delay: "1.6s" }]);
      await page.waitForFunction(() => [...document.querySelectorAll("#journeys-after .workflow-track span")].every(node => getComputedStyle(node).backgroundColor === "rgb(40, 56, 31)"));
      await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
      assert(await page.locator("#journeys-after .workflow-track span").evaluateAll(nodes => nodes.every(node => getComputedStyle(node).backgroundColor === "rgb(40, 56, 31)")), "Language switching preserves completed green animation");
      await page.evaluate(() => setStageMode(true));
      assert(await page.locator("#journeys-after .workflow-track span").evaluateAll(nodes => nodes.every(node => getComputedStyle(node).animationName === "none")), "Stage stays static");
      await page.evaluate(() => setStageMode(false));
    }
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(`${pathToFileURL(path.join(__dirname, "index.html")).href}#9`);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await current(), 9);
    assert.equal(await page.locator('[data-action="connect"]').count(), 0);
    for (const locale of ["en", "es"]) {
      await page.evaluate(locale => setLanguage(locale), locale);
      await go(8);
      assert.equal(await page.locator(".network-links").evaluate(node => node.getAnimations().length), 0);
      await go(9);
      assert.equal(await page.locator(".network-links").evaluate(node => getComputedStyle(node).animationName), "illuminate");
      await page.locator(".network-links").evaluate(node => Promise.all(node.getAnimations().map(animation => animation.finished)));
      assert.equal(await page.locator(".network-links").evaluate(node => getComputedStyle(node).opacity), "1");
      await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
      assert.equal(await page.locator(".network-links").evaluate(node => node.getAnimations().length), 0, "Language changes must not replay connections");
      assert.equal(await current(), 9);
      await page.evaluate(() => setStageMode(true));
      assert.equal(await page.locator(".network-links").evaluate(node => getComputedStyle(node).animationName), "none");
      await page.evaluate(() => setStageMode(false));
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(await page.locator(".network-links").evaluate(node => node.getAnimations().length), 0);
    await go(21);
    for (let i = 0; i < 4; i++) await click('[data-action="stack"]');
    assert.equal(await page.locator(".stack-layer.revealed").count(), 5);
    await go(22);
    for (let i = 0; i < 5; i++) {
      await click(`[data-life="${i}"]`);
      assert.equal(await page.locator("#life-detail > div").count(), 3);
    }
    await go(5);
    await click("#notes-toggle");
    await page.locator("#notes").focus();
    for (const key of ["ArrowRight", "ArrowDown", "PageDown", " ", "Home", "End"]) {
      await page.keyboard.press(key);
      assert.equal(await current(), 5);
    }
    await page.keyboard.press("Escape");
    await click("#overview-toggle");
    assert.equal(await page.locator("#slide-index a").count(), 23);
    await page.keyboard.press("Escape");
    const fullscreenPage = await browser.newPage({ viewport: null, reducedMotion: "reduce" });
    try {
      await fullscreenPage.goto(`${pathToFileURL(path.join(__dirname, "index.html")).href}#5`);
      const fullscreenFits = async active => {
        await fullscreenPage.waitForFunction(active => {
          const viewport = document.querySelector("#viewport").getBoundingClientRect();
          const stage = document.querySelector("#stage").getBoundingClientRect();
          const scale = Math.min(viewport.width / 1600, viewport.height / 900);
          return Boolean(document.fullscreenElement) === active
            && Math.abs(stage.width - 1600 * scale) < 1
            && Math.abs(stage.height - 900 * scale) < 1
            && Math.abs(stage.left - viewport.left - (viewport.width - stage.width) / 2) < 1
            && Math.abs(stage.top - viewport.top - (viewport.height - stage.height) / 2) < 1;
        }, active);
      };
      await fullscreenPage.click("#fullscreen");
      await fullscreenFits(true);
      const fullSize = await fullscreenPage.evaluate(() => [innerWidth, innerHeight]);
      for (let i = 1; i <= 6; i++) {
        await fullscreenPage.click("#next");
        await fullscreenFits(true);
        await fullscreenPage.waitForFunction(i => state.index === (i < 6 ? 4 : 5) && state.pair === Math.min(i, 5), i);
        assert.deepEqual(await fullscreenPage.evaluate(() => [innerWidth, innerHeight]), fullSize, "Next must not shrink the fullscreen viewport");
      }
      await fullscreenPage.click("#previous");
      await fullscreenPage.waitForFunction(() => state.index === 4);
      await fullscreenFits(true);
      await fullscreenPage.click("#language-toggle");
      await fullscreenFits(true);
      await fullscreenPage.click("#stage-toggle");
      await fullscreenFits(true);
      for (let i = 1; i <= 6; i++) {
        await fullscreenPage.keyboard.press("ArrowRight");
        await fullscreenPage.waitForFunction(i => state.index === (i < 6 ? 4 : 5) && state.pair === Math.min(i, 5), i);
        await fullscreenFits(true);
      }
      await fullscreenPage.keyboard.press("ArrowLeft");
      await fullscreenPage.waitForFunction(() => state.index === 4);
      await fullscreenPage.keyboard.press("l");
      await fullscreenFits(true);
      await fullscreenPage.keyboard.press("Escape");
      await fullscreenFits(false);
      assert.equal(await fullscreenPage.locator("body.stage-mode").count(), 0);
      assert.equal(await fullscreenPage.evaluate(() => state.pair), 5, "Fullscreen Stage exit restores Review's demo state");
    } finally {
      await fullscreenPage.close();
    }
    const checkLayout = async (label) => {
      const issues = await page.evaluate(() => {
        const slide = document.querySelector(".slide:not([hidden])");
        const bounds = slide.getBoundingClientRect();
        const footer = slide.querySelector(".slide-footer").getBoundingClientRect();
        const issues = [];
        if (language === "es" && /\balta\b/i.test(slide.outerHTML + document.querySelector("#notes-content").textContent)) issues.push("Spanish setup terminology regressed");
        if (slide.id === "slide-5" && state.pair === 2) {
          const decisionLabel = language === "es" ? "Diseño + ingeniería deciden en pair programming" : "Designer + engineer decide";
          if (![...slide.querySelectorAll("#evidence-details dt")].some(node => node.textContent === decisionLabel)) issues.push("Team-decision evidence label changed");
        }
        if (slide.id === "slide-5" && state.pair === 4) {
          const lessonTitle = language === "es" ? "No te repitas (DRY: Don't repeat yourself)" : "Do not fix this twice.";
          if (slide.querySelector("#evidence-title").textContent !== lessonTitle) issues.push("Saved-lesson heading changed");
        }
        const viewport = document.querySelector("#viewport").getBoundingClientRect();
        if (bounds.left < viewport.left - 1 || bounds.right > viewport.right + 1 || bounds.top < viewport.top - 1 || bounds.bottom > viewport.bottom + 1) issues.push("Scaled slide exceeds viewport");
        const eyebrowNumber = slide.querySelector(".eyebrow > span")?.textContent.match(/^(\d\d) —/);
        if (eyebrowNumber && Number(eyebrowNumber[1]) !== Number(slide.id.slice(6))) issues.push("Stale visible slide number");
        if (slide.id === "slide-11" && slide.querySelector(".journey-label")) issues.push("Removed journey heading remains");
        if (slide.id === "slide-4") {
          const headings = [...slide.querySelectorAll(".framework h3")];
          if (headings.length !== 3 || headings.some(node => getComputedStyle(node).color !== "rgb(255, 151, 127)")) issues.push("All framework headings must use existing coral");
          for (const paragraph of slide.querySelectorAll(".framework p")) {
            if (parseFloat(getComputedStyle(paragraph).fontSize) < 35) issues.push("Framework supporting copy lost its readable size");
            const parent = paragraph.parentElement.getBoundingClientRect();
            const rect = paragraph.getBoundingClientRect();
            if (rect.bottom > parent.bottom + 1 || rect.right > parent.right + 1) issues.push("Framework copy clips within its column");
          }
        }
        if (slide.id === "slide-5") {
          const counter = getComputedStyle(slide.querySelector("#pair-count"));
          if (parseFloat(counter.fontSize) !== 19) issues.push("Demo counter must be secondary metadata");
          const rgb = counter.color.match(/[\d.]+/g).slice(0, 3).map(Number).map(value => counter.color.startsWith("color(srgb") ? value : value / 255);
          const luminance = values => values.map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4).reduce((sum, value, i) => sum + value * [.2126, .7152, .0722][i], 0);
          if ((luminance(rgb) + .05) / (luminance([17, 21, 22].map(value => value / 255)) + .05) < 4.5 || counter.color !== "rgb(166, 178, 180)") issues.push("Counter must use the readable secondary grey");
        }
        if (slide.id === "slide-5") {
          const label = slide.querySelector("#pair-label").getBoundingClientRect();
          const content = slide.querySelector("#decision-evidence:not([hidden]), #prototype-form:not([hidden])");
          for (const node of [content, content.querySelector("h3")]) {
            if (Math.abs(label.top - node.getBoundingClientRect().top) > 1) issues.push("Demo current-step heading and visible content are not top-aligned");
          }
        }
        if (slide.id === "slide-6") {
          const rubric = getComputedStyle(slide.querySelector(".rubric"));
          if (rubric.borderTopWidth !== "1px" || rubric.backgroundColor !== "rgb(21, 33, 35)") issues.push("V2 enclosed rubric must remain restored");
          const concepts = [...slide.querySelectorAll(".output-pile > span")];
          if (concepts.length !== 4) issues.push("All four original concepts must remain");
          for (const concept of concepts) {
            const style = getComputedStyle(concept);
            if (style.backgroundColor !== "rgb(34, 43, 45)" || style.borderTopWidth !== "1px") issues.push("V2 concept surfaces must remain restored");
            if (style.transform === "none") issues.push("Concept rotation follows V2 desktop behavior");
          }
        }
        if (slide.id === "slide-7") {
          const textMode = document.body.classList.contains("stage-mode");
          if (slide.querySelector(".learning-loop svg").checkVisibility() === textMode) issues.push("V2 learning-loop diagram belongs in desktop review");
          if (slide.querySelector("#loop-summary").checkVisibility() !== textMode) issues.push("Stage must retain the complete textual cycle");
          if (slide.querySelectorAll(".loop-node").length !== 5 || slide.querySelectorAll("#loop-summary li").length !== 5) issues.push("All five learning-cycle stages must remain");
          if (slide.querySelector('button[data-action="loop"]')) issues.push("No cycle-progress button");
        }
        if (slide.id === "slide-9") {
          const ring = slide.querySelector("circle.ai-ring");
          if (!ring || slide.querySelector(".ai-ring-label").textContent !== (document.documentElement.lang === "es" ? "IA" : "AI")) issues.push("Shared circle must be labeled in the active language");
          if (ring) {
            const { cx, cy, r } = ring;
            const bounds = ring.getBoundingClientRect();
            if (Math.abs(bounds.width - bounds.height) > 1) issues.push("AI ring must render as a true circle");
            for (const selector of [".ai-ring-label", ".ai-ring-label-bg"]) {
              const box = slide.querySelector(selector).getBoundingClientRect();
              if (Math.abs(box.left + box.width / 2 - bounds.left - bounds.width / 2) > 1 || Math.abs(box.top + box.height / 2 - bounds.top) > 1) issues.push("AI label and gap must be centered on the ring top");
            }
            for (const node of slide.querySelectorAll(".network-node rect")) {
              const { x, y, width, height } = node.getBBox();
              const distances = [];
              for (const px of [x, x + width]) for (const py of [y, y + height]) {
                distances.push(Math.hypot(px - cx.baseVal.value, py - cy.baseVal.value));
              }
              const nearest = Math.hypot(Math.max(x - cx.baseVal.value, 0, cx.baseVal.value - x - width), Math.max(y - cy.baseVal.value, 0, cy.baseVal.value - y - height));
              if (nearest >= r.baseVal.value || Math.max(...distances) <= r.baseVal.value) issues.push("AI circle must pass behind each role card, not enclose them");
              if (getComputedStyle(node).fill !== "rgb(27, 34, 36)" || !(ring.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING)) issues.push("Opaque role cards must paint in front of the ring");
            }
            const expected = document.documentElement.lang === "es"
              ? [[50, 45, 190, 80], [463, 45, 270, 80], [30, 355, 190, 80], [500, 355, 250, 80], [260, 485, 230, 80]]
              : [[50, 45, 190, 80], [495, 45, 205, 80], [30, 355, 190, 80], [510, 355, 230, 80], [260, 485, 230, 80]];
            const actual = [...slide.querySelectorAll(".network-node rect")].map(node => ["x", "y", "width", "height"].map(name => Number(node.getAttribute(name))));
            if (JSON.stringify(actual) !== JSON.stringify(expected) || slide.querySelector(".network svg").getAttribute("viewBox") !== "0 0 750 580") issues.push("Original V2 role geometry must remain");
          }
        }
        if (slide.id === "slide-3") {
          const band = slide.querySelector(".alignment-band");
          const style = getComputedStyle(band);
          const stage = document.body.classList.contains("stage-mode");
          if (style.writingMode !== "vertical-rl") issues.push("V2 alignment-band orientation");
          if (style.right !== (stage ? "240px" : "190px") || style.top !== (stage ? "-30px" : "2px")) issues.push("V2 alignment-band anchoring");
          const edge = band.getBoundingClientRect().right;
          for (const output of slide.querySelectorAll(".branch-outputs span")) if (edge > output.getBoundingClientRect().left) issues.push("Alignment band overlaps pattern labels");
        }
        if (slide.id === "slide-13") {
          const heading = slide.querySelector(".metrics-heading");
          const scale = slide.getBoundingClientRect().width / slide.offsetWidth;
          const contentGap = (slide.querySelector("#metric-dashboard").getBoundingClientRect().top - heading.getBoundingClientRect().bottom) / scale + parseFloat(getComputedStyle(heading).paddingBottom);
          if (contentGap < 61) issues.push("Metric content must have at least 62px separation below the heading content");
          if (!document.body.classList.contains("stage-mode")) {
            const title = slide.querySelector("h2").getBoundingClientRect();
            for (const button of slide.querySelectorAll(".metrics-heading button")) {
              const box = button.getBoundingClientRect();
              if (Math.abs(box.top - title.top) > 1 || box.left < title.right + 10) issues.push("Metric controls must sit top-right of the title without overlap");
            }
          }
        }
        if (slide.id === "slide-2") {
          for (const list of slide.querySelectorAll("ul.role-output")) {
            const items = [...list.children];
            if (items.length !== 3 || getComputedStyle(list).listStyleType !== "disc") issues.push("Expected three visible bullet items");
            const listBounds = list.getBoundingClientRect();
            const scale = bounds.width / 1600;
            items.forEach((item, index) => {
              const rect = item.getBoundingClientRect();
              if (getComputedStyle(item).display !== "list-item") issues.push("Missing native bullet marker");
              if (rect.left - listBounds.left < 20 * scale) issues.push("No space for bullet marker");
              if (index && rect.top < items[index - 1].getBoundingClientRect().bottom - 1) issues.push("Outputs not vertically stacked");
              if (parseFloat(getComputedStyle(item).fontSize) < 23) issues.push("Output list text too small");
            });
          }
        }
        if (slide.id === "slide-1") {
          const textBounds = node => {
            const range = document.createRange();
            range.selectNodeContents([...node.childNodes].find(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim()));
            return range.getBoundingClientRect();
          };
          const capacity = textBounds(slide.querySelector(".opening-labels span:first-child"));
          const coherence = textBounds(slide.querySelector(".opening-labels span:last-child"));
          const possibility = textBounds(slide.querySelector(".caption-item:first-child"));
          const responsibility = textBounds(slide.querySelector(".caption-item:last-child"));
          const art = slide.querySelector(".opening-art svg").getBoundingClientRect();
          if (Math.abs(capacity.left - possibility.left) > 1 || Math.abs(coherence.right - responsibility.right) > 1 || Math.abs(coherence.right - art.right) > 1) issues.push("Opening alignment");
          const dot = slide.querySelector(".caption-item:last-child .dot").getBoundingClientRect();
          if (possibility.right + 4 > dot.left) issues.push("Opening captions overlap");
        }
        for (const node of slide.querySelectorAll("*")) {
          if (node.closest(".sr-only, svg") || !node.checkVisibility()) continue;
          const rect = node.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1) issues.push(`${node.className || node.tagName}: horizontal bounds`);
          if (!node.closest(".slide-footer") && rect.bottom > footer.top - 4 * bounds.width / 1600) issues.push(`${node.className || node.tagName}: footer overlap`);
          for (const child of node.childNodes) {
            if (child.nodeType !== Node.TEXT_NODE || !child.textContent.trim()) continue;
            const range = document.createRange();
            range.selectNodeContents(child);
            for (const text of range.getClientRects()) if (text.width && (text.right > rect.right + 1 || text.left < rect.left - 1)) issues.push(`${node.className || node.tagName}: text overflows`);
          }
          if (node.matches(".prototype-form, .decision-evidence")) {
            const scene = node.closest(".prototype-scene").getBoundingClientRect();
            if (rect.top < scene.top - 1 || rect.bottom > scene.bottom + 1) issues.push("Demo exceeds content surface");
          }
          if (!getComputedStyle(node).fontFamily.includes("Inter")) issues.push(`${node.className || node.tagName}: not Inter`);
        }
        for (const text of slide.querySelectorAll(".network-node text, .loop-node text")) {
          if (!text.checkVisibility()) continue;
          const frame = text.parentElement.querySelector("rect").getBBox();
          const box = text.getBBox();
          if (box.x < frame.x || box.x + box.width > frame.x + frame.width || box.y < frame.y || box.y + box.height > frame.y + frame.height) issues.push(`SVG overflow: ${text.textContent}`);
          if (!getComputedStyle(text).fontFamily.includes("Inter")) issues.push("SVG not Inter");
        }
        if (document.documentElement.scrollWidth > innerWidth) issues.push("Page horizontal overflow");
        return [...new Set(issues)];
      });
      if (issues.length) failures.push({ label, issues });
    };
    for (const locale of ["en", "es"]) {
      for (const [mode, width, height] of [["review", 1680, 1080], ["review", 1000, 750], ["stage", 1280, 720], ["stage", 1680, 1080], ["review", 900, 1000], ["review", 390, 844], ["review", 320, 800], ["stage", 390, 844], ["review", 844, 390]]) {
        await page.setViewportSize({ width, height });
        await page.evaluate(({ locale, mode }) => {
          setStageMode(false);
          setLanguage(locale);
          if (mode === "stage") setStageMode(true);
          setClosing(true);
        }, { locale, mode });
        await page.waitForFunction(() => {
          const viewport = document.querySelector("#viewport");
          const stage = document.querySelector("#stage").getBoundingClientRect();
          return Math.abs(stage.width - 1600 * Math.min(viewport.clientWidth / 1600, viewport.clientHeight / 900)) < 1;
        });
        assert.equal(await page.locator("#reading-toggle, body.reading").count(), 0, "No manual or automatic Reading view at any viewport");
        assert.equal(await page.locator("#stage").evaluate(node => getComputedStyle(node).width), "1600px", "Small viewports keep the scaled presentation canvas");
        for (let number = 1; number <= 23; number++) {
          await go(number);
          await checkLayout(`${locale}/${mode}/${width}/slide-${number}`);
          if (width === 1680) await capture(`${locale}-${mode}-${String(number).padStart(2, "0")}`);
          if (width === 390 && [3, 5, 15].includes(number)) await capture(`${locale}-${mode}-390-${number}`);
        }
        await go(5);
        for (let i = 0; i < 6; i++) {
          await click(`#pair-tab-${i}`);
          if (i === 3) {
            await page.locator("#workspace-name").fill("W".repeat(48));
            await click("#prototype-form button");
          }
          await checkLayout(`${locale}/${mode}/${width}/demo-${i}`);
          if (width === 1680) await capture(`${locale}-${mode}-demo-${i}`);
        }
        if (mode === "stage") {
          await go(5);
          assert(await page.locator("#pair-tabs button").first().isVisible(), "Tabs remain visible in Stage");
          const sizes = await page.locator("#pair-tabs button, .decision-evidence dd").evaluateAll(nodes => nodes.map(node => parseFloat(getComputedStyle(node).fontSize)));
          assert(sizes.every(size => size >= 23), "Primary demo text remains projection-sized");
        }
      }
    }
    const duplicateIds = await page.evaluate(() => {
      const ids = [...document.querySelectorAll("[id]")].map(node => node.id);
      return ids.filter((id, i) => ids.indexOf(id) !== i);
    });
    assert.deepEqual(duplicateIds, []);
    assert.deepEqual(errors, []);
    if (process.env.SNAPSHOT_DIR) writeFileSync(path.join(process.env.SNAPSHOT_DIR, "layout-results.json"), JSON.stringify(failures, null, 2));
    assert.deepEqual(failures, [], "Both locales: all review/Stage layouts and all demo states");
    console.log("PASS: 23 bilingual slides; six-tab navigation, native forms, reverse/Stage restoration, origin links, notes, toolbar, offline Inter and layouts.");
    if (process.argv.includes("--export-pdfs")) {
      await page.setViewportSize({ width: 1600, height: 900 });
      await page.evaluate(() => {
        setStageMode(false);
        setStageMode(true);
        state.cause = 1;
        setAligned(true);
        setPair(5, true);
        setClosing(true);
        appendixOrigins[20] = 13;
        appendixOrigins[23] = 11;
      });
      await go(1);
      await page.addStyleTag({ content: readFileSync(path.join(__dirname, "styles.css"), "utf8").replaceAll("@media screen {", "@media all {") });
      await page.addStyleTag({ content: "@media print { @page { size: 1600px 900px; margin: 0; } .slide, .slide[hidden] { zoom: 1 !important; } }" });
      for (const locale of ["en", "es"]) {
        await page.evaluate(locale => {
          setLanguage(locale);
          // PDF links target actual slide anchors, not the runtime's numeric hashes.
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            const number = link.getAttribute("href").slice(1);
            if (/^\d+$/.test(number)) link.href = `#slide-${number}`;
          });
        }, locale);
        await page.evaluate(() => document.fonts.ready);
        const file = `ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_${locale}.pdf`;
        await page.pdf({ path: path.join(__dirname, file), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
        console.log(`Exported ${file}`);
      }
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
