const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { mkdirSync, readFileSync, writeFileSync } = require("node:fs");

(async () => {
  const browser = await chromium.launch();
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
    assert.equal(await page.locator("#language-toggle").textContent(), "ES");
    assert.equal(await page.locator(".slide").count(), 24);
    assert.equal(await page.locator("[role=tab]").count(), 6);
    assert.equal(await page.locator('[data-action="pair-reset"], [data-action="pair"], [data-action="loop"]').count(), 0);
    assert.deepEqual(await page.evaluate(() => ({
      total: notes.slice(0, 15).reduce((sum, note) => sum + note.seconds, 0),
      bio: notes[2].seconds, demo: notes[5].seconds, before: notes[10].seconds,
      after: notes[11].seconds, closing: notes[14].seconds, qa: notes[15].seconds,
      backups: notes.slice(16).map(note => note.seconds)
    })), { total: 1200, bio: 30, demo: 270, before: 90, after: 105, closing: 90, qa: 600, backups: [0, 0, 0, 0, 0, 0, 0, 0] });
    assert.equal(await page.locator(".human-symbol").textContent(), "◎");
    assert.equal(await page.locator(".photo-placeholder").count(), 3);
    assert.equal(await page.locator(".about-slide img").count(), 0);
    assert.equal(await page.locator(".network-node").count(), 5);
    assert(!(await page.locator(".network-node").allTextContents()).some(text => text.includes("+ AI")));
    assert.equal(await page.locator(".shift-group").count(), 3);
    assert.equal(await page.locator(".shift-rows > div").count(), 6);
    assert.equal(await page.locator("#slide-11 .journey").count(), 1);
    assert.equal(await page.locator("#slide-12 .journey").count(), 1);
    assert.equal(await page.locator("#metric-dashboard thead th").count(), 4);
    assert.equal(await page.locator("#metric-dashboard .metric-category").count(), 2);
    assert.equal(await page.locator("#metric-tables tbody tr").count(), 10);
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
        await page.waitForFunction(() => document.body.classList.contains("reading") === smallScreen.matches);
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
          if (buttons.length !== 6 || document.querySelector(".version")) issues.push("Toolbar shape");
          if (innerWidth > 700 && Math.max(...centers) - Math.min(...centers) > 1) issues.push("Multiple toolbar rows");
          if (document.documentElement.scrollWidth > innerWidth) issues.push("Horizontal overflow");
          return issues;
        });
        assert.deepEqual(issues, [], `${locale} toolbar ${width}`);
      }
    }
    await page.setViewportSize({ width: 1680, height: 1080 });
    await page.evaluate(() => { readingPreference = false; setReadingView(false); });
    for (const stage of [false, true]) {
      await page.evaluate(stage => { setStageMode(stage); setPair(0, true); }, stage);
      await go(6);
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
            await page.locator("#workspace-name").fill("");
            await click("#prototype-form button");
            assert(await page.locator("#workspace-name").evaluate(input => !input.checkValidity()));
            await page.locator("#workspace-name").fill(" ");
            await click("#prototype-form button");
            assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
            await page.locator("#workspace-name").fill("<b>Diseño ñ</b>");
            await page.keyboard.press("Enter");
            assert.equal(await page.locator("#prototype-result b").count(), 0);
            assert.equal(await page.evaluate(() => state.formResult), "success");
            for (const key of ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]) {
              await page.locator("#workspace-name").focus();
              await page.keyboard.press(key);
              assert.equal(await current(), 6);
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
      await page.waitForFunction(() => state.index === 6);
      await go(6);
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
      await page.waitForFunction(() => state.index === 4);
    }
    await page.evaluate(() => { setStageMode(false); setPair(4); setClosing(true); });
    await go(6);
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
        await go(15);
        await page.evaluate(() => setClosing(false));
        if (stage) { await page.locator("#presentation").focus(); await page.keyboard.press("ArrowRight"); }
        else await click("#next");
        assert(await page.locator("#closing-reveal").isVisible());
        assert.equal(await current(), 15);
        await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
        assert(await page.locator("#closing-reveal").isVisible());
        if (stage) { await page.locator("#presentation").focus(); await page.keyboard.press("ArrowLeft"); }
        else await click("#previous");
        assert(!(await page.locator("#closing-reveal").isVisible()));
        await page.locator("#presentation").focus();
        for (const key of ["ArrowRight", "PageDown"]) await page.keyboard.press(key);
        await page.waitForFunction(() => state.index === 15);
        await page.keyboard.press("ArrowLeft");
        await page.waitForFunction(() => state.index === 14);
        assert(await page.locator("#closing-reveal").isVisible(), "Revisiting closing retains reveal");
      }
    }
    await page.evaluate(() => setStageMode(false));
    await go(14);
    await click("#metrics-open");
    assert(await page.locator("#metrics-detail").isVisible());
    await page.keyboard.press("Escape");
    assert.equal(await current(), 14);
    assert.equal(await page.evaluate(() => document.activeElement.id), "metrics-open");
    await click("#metrics-open");
    await click("#metrics-close");
    assert.equal(await current(), 14);
    for (const locale of ["en", "es"]) for (const stage of [false, true]) {
      await page.evaluate(({ locale, stage }) => { setStageMode(stage); setLanguage(locale); }, { locale, stage });
      for (const [origin, target, link, back] of [[12, 24, "#pilot-reference", "#pilot-return"], [16, 24, '.qa-links a[href="#24"]', "#pilot-return"], [16, 21, '.qa-links a[href="#21"]', "#definitions-return"]]) {
        await go(origin);
        await click(link);
        await page.waitForFunction(target => state.index === target - 1, target);
        await page.evaluate(() => setLanguage(language === "en" ? "es" : "en"));
        assert.equal(await page.locator(back).getAttribute("href"), `#${origin}`);
        await click(back);
        await page.waitForFunction(origin => state.index === origin - 1, origin);
      }
      if (!stage) {
        await go(14);
        await click('[data-action="metric-definitions"]');
        await page.waitForFunction(() => state.index === 20);
        assert.equal(await page.locator("#definitions-return").getAttribute("href"), "#14");
        await click("#previous");
        await page.waitForFunction(() => state.index === 13);
      }
    }
    await page.evaluate(() => { setStageMode(false); setLanguage("es"); });
    assert.equal((await page.locator("#title-6").textContent()).trim(), "Ejemplo: Corrige el formulario. Conserva lo aprendido.");
    assert.equal(await page.locator("#title-8").textContent(), "No te enfoquesen el output,Aceleras el aprendizaje.");
    assert.equal(await page.locator("#title-9").textContent(), "Las mismas bases,un alcance actualizado.");
    assert.equal(await page.locator("#title-7 em").textContent(), "Una decisión informada");
    await go(2);
    for (let i = 0; i < 5; i++) await click('[data-action="generate"]');
    assert.equal(await page.locator(".role.generated").count(), 0);
    await go(4);
    await click('[data-action="align"]');
    assert(await page.locator("#fragmentation").evaluate(node => node.classList.contains("aligned")));
    await page.evaluate(() => setStageMode(true));
    assert(!(await page.locator("#fragmentation").evaluate(node => node.classList.contains("aligned"))));
    await page.locator("#presentation").focus();
    await page.keyboard.press("ArrowRight");
    assert.equal(await current(), 4);
    assert(await page.locator("#fragmentation").evaluate(node => node.classList.contains("aligned")));
    await page.keyboard.press("ArrowLeft");
    assert(!(await page.locator("#fragmentation").evaluate(node => node.classList.contains("aligned"))));
    await page.keyboard.press("Escape");
    assert(await page.locator("#fragmentation").evaluate(node => node.classList.contains("aligned")));
    await go(11);
    await click('#slide-11 [data-action="journey"]');
    assert(await page.locator("#journeys").evaluate(node => node.classList.contains("running")));
    await go(12);
    await click('#slide-12 [data-action="journey"]');
    assert(await page.locator("#journeys-after").evaluate(node => node.classList.contains("running")));
    await go(10);
    await click('[data-action="connect"]');
    assert.equal(await page.locator('[data-action="connect"]').getAttribute("aria-pressed"), "true");
    await go(22);
    for (let i = 0; i < 4; i++) await click('[data-action="stack"]');
    assert.equal(await page.locator(".stack-layer.revealed").count(), 5);
    await go(23);
    for (let i = 0; i < 5; i++) {
      await click(`[data-life="${i}"]`);
      assert.equal(await page.locator("#life-detail > div").count(), 3);
    }
    await go(6);
    await click("#notes-toggle");
    await page.locator("#notes").focus();
    for (const key of ["ArrowRight", "ArrowDown", "PageDown", " ", "Home", "End"]) {
      await page.keyboard.press(key);
      assert.equal(await current(), 6);
    }
    await page.keyboard.press("Escape");
    await click("#overview-toggle");
    assert.equal(await page.locator("#slide-index a").count(), 24);
    await page.keyboard.press("Escape");
    await page.evaluate(() => { readingPreference = true; setReadingView(true); });
    await page.locator("#presentation").focus();
    for (const key of ["ArrowDown", "PageDown", " ", "Home", "End"]) {
      await page.keyboard.press(key);
      assert.equal(await current(), 6, "Reading preserves native scroll keys");
    }
    await page.evaluate(() => { setPair(0); });
    await click("#next");
    assert.equal(await step(), "1", "Main Next also progresses in Reading");
    await click("#stage-toggle");
    await page.locator("#presentation").focus();
    await page.keyboard.press("l");
    await page.keyboard.press("Escape");
    assert(await page.locator("body").evaluate(node => node.classList.contains("reading")), "Stage restores Reading preference");

    const checkLayout = async (reading, label) => {
      const issues = await page.evaluate(reading => {
        const slide = document.querySelector(".slide:not([hidden])");
        const bounds = slide.getBoundingClientRect();
        const footer = slide.querySelector(".slide-footer").getBoundingClientRect();
        const issues = [];
        if (!reading && slide.id === "slide-1") {
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
          if (reading && node.closest("thead")) continue;
          const rect = node.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1) issues.push(`${node.className || node.tagName}: horizontal bounds`);
          if (!reading && !node.closest(".slide-footer") && rect.bottom > footer.top - 4) issues.push(`${node.className || node.tagName}: footer overlap`);
          for (const child of node.childNodes) {
            if (child.nodeType !== Node.TEXT_NODE || !child.textContent.trim()) continue;
            const range = document.createRange();
            range.selectNodeContents(child);
            for (const text of range.getClientRects()) if (text.width && (text.right > rect.right + 1 || text.left < rect.left - 1)) issues.push(`${node.className || node.tagName}: text overflows`);
          }
          if (reading && node.matches("button:not(:disabled), input, a") && rect.height < 44) issues.push(`${node.tagName}: target under 44px`);
          if (reading && node.matches("p:not(.kicker), li, td, input") && parseFloat(getComputedStyle(node).fontSize) < 16) issues.push(`${node.className || node.tagName}: text under 16px`);
          if (node.matches(".prototype-form, .decision-evidence")) {
            const scene = node.closest(".prototype-scene").getBoundingClientRect();
            if (rect.top < scene.top - 1 || rect.bottom > scene.bottom + 1) issues.push("Demo exceeds content surface");
          }
          if (!getComputedStyle(node).fontFamily.includes("Inter")) issues.push(`${node.className || node.tagName}: not Inter`);
        }
        for (const text of slide.querySelectorAll(".network-node text")) {
          if (!text.checkVisibility() || reading) continue;
          const frame = text.parentElement.querySelector("rect").getBBox();
          const box = text.getBBox();
          if (box.x < frame.x || box.x + box.width > frame.x + frame.width) issues.push(`SVG overflow: ${text.textContent}`);
          if (!getComputedStyle(text).fontFamily.includes("Inter")) issues.push("SVG not Inter");
        }
        if (document.querySelector("#presentation").scrollWidth > document.querySelector("#presentation").clientWidth + 1 && reading) issues.push("Reading horizontal overflow");
        if (document.documentElement.scrollWidth > innerWidth) issues.push("Page horizontal overflow");
        return [...new Set(issues)];
      }, reading);
      if (issues.length) failures.push({ label, issues });
    };
    for (const locale of ["en", "es"]) {
      for (const [mode, width, height] of [["review", 1680, 1080], ["review", 1000, 750], ["stage", 1280, 720], ["stage", 1680, 1080], ["reading", 900, 1000], ["reading", 390, 844], ["reading", 320, 800]]) {
        await page.setViewportSize({ width, height });
        await page.evaluate(({ locale, mode }) => {
          setStageMode(false);
          readingPreference = mode === "reading";
          setReadingView(readingPreference);
          setLanguage(locale);
          if (mode === "stage") setStageMode(true);
          setClosing(true);
        }, { locale, mode });
        for (let number = 1; number <= 24; number++) {
          await go(number);
          await checkLayout(mode === "reading", `${locale}/${mode}/${width}/slide-${number}`);
          if (width === 1680) await capture(`${locale}-${mode}-${String(number).padStart(2, "0")}`);
        }
        await go(6);
        for (let i = 0; i < 6; i++) {
          await click(`#pair-tab-${i}`);
          if (i === 3) {
            await page.locator("#workspace-name").fill("W".repeat(48));
            await click("#prototype-form button");
          }
          await checkLayout(mode === "reading", `${locale}/${mode}/${width}/demo-${i}`);
          if (width === 1680) await capture(`${locale}-${mode}-demo-${i}`);
        }
        if (mode === "stage") {
          await go(6);
          assert(await page.locator("#pair-tabs button").first().isVisible(), "Tabs remain visible in Stage");
          const sizes = await page.locator("#pair-tabs button, #pair-count, .decision-evidence dd").evaluateAll(nodes => nodes.map(node => parseFloat(getComputedStyle(node).fontSize)));
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
    assert.deepEqual(failures, [], "Both locales: all review/Stage/Reading layouts and all demo states");
    console.log("PASS: 24 bilingual slides; six-tab navigation, native forms, reverse/Stage restoration, origin links, notes, Reading, toolbar, offline Inter and layouts.");
    if (process.argv.includes("--export-pdfs")) {
      await page.setViewportSize({ width: 1600, height: 900 });
      await page.evaluate(() => {
        setStageMode(false);
        readingPreference = false;
        setReadingView(false);
        setStageMode(true);
        setAligned(true);
        setPair(5, true);
        setClosing(true);
        $("#network").classList.add("connected");
        appendixOrigins[21] = 14;
        appendixOrigins[24] = 12;
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
        const file = `ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v3_review_${locale}.pdf`;
        await page.pdf({ path: path.join(__dirname, file), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
        console.log(`Exported ${file}`);
      }
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
