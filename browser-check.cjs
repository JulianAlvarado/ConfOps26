const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { mkdirSync, readFileSync } = require("node:fs");

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1680, height: 1080 }, reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("request", request => { if (/^https?:/.test(request.url())) errors.push(`Remote request: ${request.url()}`); });
    await page.goto(pathToFileURL(path.join(__dirname, "index.html")).href);
    await page.waitForFunction(() => document.querySelectorAll(".metric-card").length === 4);
    assert.equal(await page.locator("#language-toggle").textContent(), "ES", "English starts with Spanish target abbreviation");
    for (const language of ["es", "en"]) {
      await page.evaluate(language => setLanguage(language), language);
      for (const width of [1680, 1201, 1200, 1100, 1000, 901, 900, 701, 700, 390, 320]) {
        await page.setViewportSize({ width, height: 1000 });
        await page.waitForFunction(() => document.body.classList.contains("reading") === smallScreen.matches);
        const issues = await page.evaluate(() => {
          const issues = [];
          const toolbar = document.querySelector(".toolbar");
          const brand = toolbar.querySelector(".wordmark").getBoundingClientRect();
          const buttons = [...toolbar.querySelectorAll("button")];
          if (buttons.length !== 6) issues.push("Expected all six actions");
          if (document.querySelector(".version")) issues.push("Version badge must be removed");
          const centers = [];
          for (const button of buttons) {
            const rect = button.getBoundingClientRect();
            centers.push((rect.top + rect.bottom) / 2);
            if (rect.left < 0 || rect.right > innerWidth || rect.width === 0) issues.push("Action clipped");
            if (innerWidth > 700 && rect.left < brand.right + 8) issues.push("Brand overlaps menu");
            if (innerWidth <= 700 && rect.height < 44) issues.push("Mobile target too small");
            const text = [];
            const walker = document.createTreeWalker(button, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              if (!walker.currentNode.textContent.trim()) continue;
              const range = document.createRange();
              range.selectNodeContents(walker.currentNode);
              text.push(...[...range.getClientRects()].filter(box => box.width > 0 && box.height > 0));
            }
            if (!text.length) issues.push("Missing action text");
            if (text.some(box => box.left < rect.left || box.right > rect.right || box.top < rect.top || box.bottom > rect.bottom)) issues.push("Action text clipped");
            if (text.length && Math.max(...text.map(box => box.top)) >= Math.min(...text.map(box => box.bottom))) issues.push("Label and shortcut wrap onto different lines");
          }
          if (innerWidth > 700 && Math.max(...centers) - Math.min(...centers) > 1) issues.push("Desktop menu has multiple rows");
          if (document.documentElement.scrollWidth > innerWidth) issues.push("Page horizontal overflow");
          return issues;
        });
        assert.deepEqual(issues, [], `${language} toolbar at ${width}px`);
      }
    }
    await page.setViewportSize({ width: 1680, height: 1080 });
    await page.waitForFunction(() => !document.body.classList.contains("reading"));
    assert.deepEqual(await page.evaluate(html => {
      const source = new DOMParser().parseFromString(html, "text/html");
      const errors = [];
      for (const copy of spanish.copy) {
        const element = source.querySelector(copy.selector);
        if (!element) { errors.push(`Missing translation: ${copy.selector}`); continue; }
        if (copy.html && element.innerHTML !== copy.html[0]) errors.push(`Stale heading: ${copy.selector}`);
        for (const [index, values] of Object.entries(copy.text)) {
          if (element.childNodes[index]?.textContent !== values[0]) errors.push(`Stale text: ${copy.selector}/${index}`);
        }
        for (const [name, values] of Object.entries(copy.attributes)) {
          if (element.getAttribute(name) !== values[0]) errors.push(`Stale attribute: ${copy.selector}/${name}`);
        }
      }
      return errors;
    }, readFileSync(path.join(__dirname, "index.html"), "utf8")), [], "Translation catalog matches the editable English source");
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
    assert.deepEqual(await page.locator(".opening-labels span").allTextContents(), ["CAPACITY ↑", "COHERENCE ?"]);
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
      assert.equal(label.trim(), "EARLY EXPERIMENTATION · APPROXIMATE VALUES");
    }
    await go(2);
    assert.equal(await page.locator(".ai-label").count(), 0);
    assert.equal(await page.locator("#title-2").innerText(), "The AI production floor\nis everywhere.");
    assert.deepEqual(await page.locator("#roles h3").allTextContents(), ["Product", "Research", "Design", "Engineering"]);
    assert.deepEqual(await page.locator(".role-output").evaluateAll(groups => groups.map(group => [...group.children].map(item => item.textContent))),
      [["Brief", "Requirements", "Hypotheses"], ["Synthesis", "Insights", "Questions"], ["Concepts", "Prototypes", "Patterns"], ["Components", "Code", "Tests"]]);
    await page.locator("#presentation").focus();
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-3").hidden);
    assert.equal(await page.locator("#title-3").innerText(), "Julian Alvarado");
    assert.equal(await page.locator(".about-role").innerText(), "Xbox Design Ops");
    assert.equal(await page.locator(".about-bio p").count(), 3);
    assert.match(await page.locator(".about-bio").innerText(), /Senior Program Manager and Design Operations leader at Microsoft/);
    assert.match(await page.locator(".about-bio").innerText(), /better systems, clearer processes, and responsible AI/);
    assert.match(await page.locator(".about-bio").innerText(), /deliver—building resilient, people-centered creative organizations/);
    assert.equal(await page.locator(".about-bio p").last().innerText(), "Outside work, Julian is a daily CrossFit devotee and a “forever blue belt” in jiu-jitsu. A retired musician, he still loves live shows and enjoys drawing at home. Currently in rotation: Radiohead, Lenny Kravitz, Oasis, and Crosses.");
    assert.equal(await page.locator(".about-slide button, .about-slide input, .about-slide img").count(), 0);
    assert.match(await page.locator(".note-time").innerText(), /1:30–2:00 · 30 seconds/);
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-4").hidden);
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-5").hidden);
    assert.equal(await page.locator(".slide:not([hidden])").getAttribute("data-title"), "Govern. Context. Evaluate.");
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-6").hidden);
    assert.equal(await page.locator(".slide:not([hidden])").getAttribute("data-title"), "Fix the form. Keep the lesson.");
    assert.match(await page.locator(".note-time").innerText(), /4:00–8:30 · 270 seconds/);
    assert.match(await page.locator("#slide-9").textContent(), /Scale design systems/);
    assert.equal(await page.locator(".fundamentals p").count(), 0);
    assert.match(await page.locator("#slide-22 .lead").textContent(), /allow the model to know/);
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
      const issues = await page.evaluate(reading => {
        const slide = document.querySelector(".slide:not([hidden])");
        const bounds = slide.getBoundingClientRect();
        const footer = slide.querySelector(".slide-footer").getBoundingClientRect();
        const stageMode = document.body.classList.contains("stage-mode");
        const exit = document.getElementById("stage-exit").getBoundingClientRect();
        const issues = [];
        for (const diagram of slide.querySelectorAll(".network svg, .learning-loop svg")) {
          if (!diagram.checkVisibility()) continue;
          for (const text of diagram.querySelectorAll("text")) {
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
          if (stageMode && !node.closest(".slide-footer") && node.childNodes.length && [...node.childNodes].some(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim())) {
            if (rect.left < exit.right && rect.right > exit.left && rect.top < exit.bottom && rect.bottom > exit.top) issues.push(`${node.className || node.tagName}: overlaps stage exit`);
            for (const child of node.childNodes) {
              if (child.nodeType !== Node.TEXT_NODE || !child.textContent.trim()) continue;
              const range = document.createRange();
              range.selectNodeContents(child);
              for (const text of range.getClientRects()) {
                if (text.right > rect.right + 1 || text.left < rect.left - 1) issues.push(`${node.className || node.tagName}: text overflows its container`);
              }
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
      const expected = [/start on my own/, /asks for someone else/, /Create first/, null, /Do not fix this twice/, /next person start alone/];
      for (let i = 0; i < 6; i++) {
        if (i) await click('[data-action="pair"]');
        assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), String(i));
        assert.equal(await page.locator("#pair-count").innerText(), `STEP ${i + 1} OF 6`);
        assert.equal(await page.locator("#pair-label").innerText(), await page.evaluate(i => pairLabels[i], i));
        assert.equal(await page.locator("#pair-step").getAttribute("aria-atomic"), "true");
        assert.equal(await page.locator("#prototype-form").isVisible(), i === 3);
        if (expected[i]) assert.match(await page.locator("#evidence-title").innerText(), expected[i]);
        if (i === 0) assert.match(await page.locator("#evidence-details").innerText(), /do not have a teammate[\s\S]*start working/);
        if (i === 1) assert.match(await page.locator("#evidence-verdict").innerText(), /I am stuck/);
        if (i === 2) {
          assert.match(await page.locator("#evidence-details").innerText(), /Designer \+ engineer/);
          await go(7);
          await go(6);
          assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "2", "Navigating preserves demo state");
        }
        if (i === 3) {
          assert.equal(await page.locator("#prototype-form input").count(), 1, "Solo setup: no invitation field");
          await page.locator("#workspace-name").fill("");
          await click("#prototype-form button");
          assert(await page.locator("#workspace-name").evaluate(node => node.matches(":invalid")), "Empty name remains required");
          await page.locator("#workspace-name").fill(" ");
          await click("#prototype-form button");
          assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
          await page.locator("#workspace-name").fill("<b>Team</b>" + "W".repeat(38));
          await click("#prototype-form button");
          assert.equal(await page.locator("#prototype-result b").count(), 0);
          assert.match(await page.locator("#prototype-result").innerText(), /Nothing was saved or sent/);
          assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), null);
          assert.equal((await page.locator("#workspace-name").inputValue()).length, 48);
          await page.locator("#workspace-name").focus();
          await page.keyboard.press("ArrowRight");
          assert.equal(await slideNumber(), "slide-6");
        }
        if (i === 4) {
          assert.match(await page.locator("#evidence-details").innerText(), /from the brief[\s\S]*product lead[\s\S]*after the pilot/);
          assert.match(await page.locator("#evidence-verdict").innerText(), /user validation pending/);
        }
        if (i === 5) {
          assert.match(await page.locator("#evidence-details").innerText(), /without a teammate email[\s\S]*real users/);
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
        if (width === 1200 && [3, 5, 8, 12, 13, 14, 16, 22, 23].includes(i)) await capture(`1200-slide-${i}`);
      }
      await exerciseDemo(false, String(width));
    }
    await go(13);
    assert.equal(await page.locator(".metric-foot > p").innerText(), "More review—better outcomes?");
    assert.deepEqual(await page.locator(".metric-comparison > div:last-child dd").allTextContents(), ["−3 d", "≈−2/wk", "+2 h", "+12 pp"]);
    assert.equal(await page.locator('.metric-card[data-metric="1"] .metric-comparison dd').nth(1).innerText(), "6h");
    const productionCard = page.locator(".metric-card").filter({ has: page.getByRole("heading", { name: "Design production rate", exact: true }) });
    assert.equal(await productionCard.locator(".metric-category").innerText(), "WORKFLOW OUTCOME");
    assert.deepEqual(await productionCard.locator(".metric-comparison dd").allTextContents(), ["~3–4/wk", "~1–2/wk", "≈−2/wk"]);
    assert.equal(await productionCard.locator(".metric-unit").innerText(), "accepted artifacts / in a team with 8w E2E Cycle");
    assert.equal(await productionCard.locator(".metric-estimate").innerText(), "Change: midpoint estimate");
    assert(await productionCard.evaluate(node => node.classList.contains("warning")));
    assert.equal(await productionCard.locator(".metric-comparison > div:last-child dd").evaluate(node => getComputedStyle(node).color),
      await page.locator('.metric-card[data-metric="1"] .metric-comparison > div:last-child dd').evaluate(node => getComputedStyle(node).color), "Production decrease uses the warning color");
    await click("#metrics-open");
    assert.equal(await page.locator(".metric-table tbody tr").count(), 10);
    const productionRow = page.locator(".metric-table tr").filter({ has: page.getByRole("rowheader", { name: /Design production rate/ }) });
    assert.deepEqual(await productionRow.locator("td").allTextContents(), ["~3–4/wk", "~1–2/wk", "≈−2/wkMidpoint estimate"]);
    assert.match(await productionRow.locator("th").innerText(), /accepted artifacts \/ in a team with 8w E2E Cycle/);
    await capture("metrics-detail-ranges");
    assert.deepEqual(await page.evaluate(() => {
      const metric = metrics.find(item => item.name === "Design production rate");
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
      assert.match(await page.locator("#generation-status").innerText(), new RegExp(`${i} of 4`));
    }
    await click('[data-action="generate"]');
    assert.equal(await page.locator(".role.generated").count(), 0);
    await go(4);
    const causes = ["More output", "More variation", "More decisions", "More inconsistency"];
    assert.deepEqual(await page.locator("#causal-chain li").allTextContents(), causes);
    for (let i = 0; i < 8; i++) {
      if (i) await click('[data-action="cause"]');
      const step = i % 4;
      assert.equal(await page.locator("#causal-chain .current").count(), step + 1);
      assert.equal(await page.locator("#causal-chain [aria-current='step']").count(), 1);
      assert.equal(await page.locator("#causal-chain [aria-current='step']").innerText(), causes[step]);
      assert.equal(await page.locator("#cause-status").innerText(), `Stage ${step + 1} of 4: ${causes[step]}.`);
      assert.equal(await page.locator(".branch-outputs .lit").count(), step === 3 ? 5 : step + 1);
      assert.equal(await page.locator(".branch-lines .lit").count(), step === 3 ? 5 : step + 1);
      assert.equal(await page.locator('[data-action="cause"]').innerText(), step === 3 ? "Restart the chain" : "Trace the chain");
    }
    await click('[data-action="align"]');
    assert.equal(await page.locator('[data-action="align"]').getAttribute("aria-pressed"), "true");
    await checkLayout(false, "aligned");
    await go(11);
    await click('[data-action="journey"]');
    assert.match(await page.locator("#journey-status").innerText(), /Run 1:/);
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
    assert.match(await page.locator("#stack-status").innerText(), /Layer 5 of 5/);
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
    assert.equal(await page.locator("#slide-8 .lead").innerText(), "Keep the decision and its reason.\nShare them with the next team.");
    const loopLabels = ["AI proposes a design", "The team reviews it", "Save the lesson", "Update the guidance", "Check the next result"];
    for (let i = 0; i < 6; i++) {
      await click('[data-action="loop"]');
      assert((await page.locator("#loop-status").innerText()).startsWith(loopLabels[i % 5]));
      assert((await page.locator("#loop-reading [aria-current='step']").innerText()).startsWith(loopLabels[i % 5]));
    }
    assert.equal(await page.locator(".loop-node.current").count(), 1);
    assert.equal(await page.locator("#loop-reading [aria-current='step']").count(), 1);
    await go(14);
    assert.deepEqual(await page.locator(".thirty-days h3").allTextContents(), ["Map", "Select", "Define", "Pilot"]);
    assert.deepEqual(await page.locator(".pilot-decision strong").allTextContents(), ["Adopt", "Revise", "Stop"]);
    assert.equal(await page.locator("#slide-14 button, .thirty-days b").count(), 0);
    assert.match(await page.locator("#notes-content").innerText(), /At team level[\s\S]*At product-area level[\s\S]*At enterprise level/);
    await go(15);
    assert.equal(await page.locator("#progress").evaluate(node => node.value / node.max), 1);
    assert.equal(await page.locator("#slide-15 button").count(), 0);
    assert.equal(await page.locator("#next").getAttribute("aria-label"), "Reveal the answer");
    assert.equal(await page.locator("#next").getAttribute("aria-expanded"), "false");
    await click("#next");
    assert.equal(await slideNumber(), "slide-15");
    assert(await page.locator("#closing-reveal").isVisible());
    assert.equal(await page.locator("#next").getAttribute("aria-expanded"), "true");
    assert.equal(await page.locator("#next").getAttribute("aria-label"), "Next slide: Q&A");
    assert(await page.locator("#next").evaluate(node => node === document.activeElement));
    assert.match(await page.locator("#announcement").innerText(), /DesignOps.*infrastructure/);
    await checkLayout(false, "closing");
    await capture("review-closing-next");
    await click("#next");
    await page.waitForFunction(() => !document.getElementById("slide-16").hidden);
    assert.equal(await page.locator("#next").getAttribute("aria-label"), "Next slide");
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
    assert.equal(await page.locator("#slide-16 .lead").count(), 0, "Selected Q&A prompt stays removed");
    assert.equal(await page.locator("#title-16").innerText(), "Let's\ntalk.");
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
      await page.locator("#workspace-name").fill("Saved review");
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
        return selectors.map(selector => ({
          selector,
          pixels: Math.min(...[...document.querySelectorAll(selector)].filter(node => !node.classList.contains("review-detail")).map(node => parseFloat(getComputedStyle(node).fontSize) * scale))
        }));
      });
      stageFonts.push({ viewport: size, minimum: Math.min(...fontResults.map(item => item.pixels)) });
      for (const result of fontResults) assert(result.pixels >= 18.4 - 0.001, `${size.width}: ${result.selector} projects at ${result.pixels}px`);
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
          assert.deepEqual(diagramIssues, [], `Stage diagram labels at ${size.width}`);
        }
        if ([3, 4, 5, 8, 10, 12, 13, 14, 22, 23].includes(i)) await capture(`stage-${size.width}-slide-${i}`);
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
          assert.match(await page.locator("#prototype-result").innerText(), /Nothing was saved or sent/);
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
    assert.match(await page.locator("#stage-exit").innerText(), /Fullscreen unavailable/);
    await page.evaluate(() => { delete document.fullscreenEnabled; });
    await page.keyboard.press("Escape");
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
    // Exercise the same mounted deck in both directions; switching must not replay actions.
    await page.reload();
    await page.setViewportSize({ width: 1680, height: 1080 });
    await page.waitForFunction(() => document.querySelectorAll(".metric-card").length === 4);
    assert.equal(await page.locator("html").getAttribute("lang"), "en", "Every fresh load starts in English");
    const interactionState = () => ({
      state: { ...state }, review: stageReview, hash: location.hash,
      classes: document.body.className, notes: !$("#notes").hidden,
      dialogs: [...document.querySelectorAll("dialog[open]")].map(node => node.id),
      name: $("#workspace-name").value, invalid: $("#workspace-name").getAttribute("aria-invalid"),
      customError: $("#workspace-name").validity.customError,
      closing: !$("#closing-reveal").hidden, aligned: $("#fragmentation").classList.contains("aligned"),
      connected: $("#network").classList.contains("connected"),
      diagrams: [...document.querySelectorAll(".role, #causal-chain li, .branch-lines path, .branch-outputs span, .loop-node, [data-layer]")].map(node => [node.getAttribute("class"), node.getAttribute("aria-current")]),
      replays: $("#journey-status").dataset.replays
    });
    const switchTo = async language => {
      const before = await page.evaluate(interactionState);
      await page.evaluate(language => setLanguage(language), language);
      assert.deepEqual(await page.evaluate(interactionState), before, "Language changes copy, not state");
      assert.equal(await page.locator("html").getAttribute("lang"), language);
      assert.equal(await page.locator("#language-toggle").textContent(), language === "en" ? "ES" : "EN");
      assert.equal(await page.locator("#language-toggle").getAttribute("lang"), language === "en" ? "es" : "en");
      assert.equal(await page.locator("#language-toggle").getAttribute("aria-keyshortcuts"), "L");
      assert.equal(await page.locator("#language-toggle").getAttribute("aria-label"), language === "en" ? "Language: English. Switch to Spanish" : "Idioma: español. Cambiar a inglés");
      assert.equal(await page.locator("#title-7 > em").textContent(), language === "en" ? "One accountable judgment." : "Una decisión informada");
      assert.equal(await page.locator("#title-8").innerHTML(), language === "en" ? "Don't just<br>save the output.<br><em>Capture<br>the learning.</em>" : "No te enfoques<br>en el output,<br><em>Aceleras el aprendizaje.</em>");
      assert.equal(await page.locator("#title-8 > em").textContent(), language === "en" ? "Capturethe learning." : "Aceleras el aprendizaje.");
      assert.equal(await page.locator("#title-9").innerHTML(), language === "en" ? "Same foundations.<br><em>A larger operating system.</em>" : "Las mismas bases,<br><em>un alcance actualizado.</em>");
      assert.equal(await page.locator("#title-11").innerHTML(), language === "en" ? "Less waiting.<br><em>More learning, together.</em>" : "Menos tiempo de espera y menos dependencias.<br><em>Aprendizaje sincronizado con el usuario.</em>");
      assert.equal(await page.locator("#title-6").innerHTML(), language === "en" ? "Fix the form. <em>Keep the lesson.</em>" : "Ejemplo: Corrige el formulario. <em>Conserva lo aprendido.</em>");
      assert.equal(await page.locator(".slide").count(), 23);
      assert.equal(await page.locator("#slide-index a").count(), 23);
      assert.equal(await page.locator("#loop-reading li").count(), 5);
      assert.equal(await page.locator(".metric-card").count(), 4);
      assert.equal(await page.locator(".metric-table tbody tr").count(), 10);
      assert.equal(await page.locator("[id]").evaluateAll(nodes => new Set(nodes.map(node => node.id)).size === nodes.length), true);
      assert.equal(await page.title(), await page.evaluate(() => `${state.index + 1}. ${slides[state.index].dataset.title} — DesignOps`));
    };
    await switchTo("es");
    await switchTo("en");
    await go(6);
    await page.evaluate(() => {
      for (let i = 0; i < 2; i++) { actions.generate(); actions.cause(); actions.stack(); actions.loop(); }
      actions.connect(); actions.journey(); selectLife(3);
      setAligned(true); setClosing(true); setPair(3);
      $("#workspace-name").value = "<b>Equipo</b>";
      $("#prototype-form").requestSubmit();
      $("#workspace-name").value = "Unsubmitted draft";
      toggleNotes(true);
    });
    const inputHandle = await page.locator("#workspace-name").elementHandle();
    for (const language of ["es", "en", "es", "en"]) {
      await switchTo(language);
      assert(await inputHandle.evaluate(node => node === document.querySelector("#workspace-name")), "Input is never remounted");
      assert.equal(await page.locator("#prototype-result b").count(), 0, "Translated feedback treats submitted input as text");
      assert.match(await page.locator("#prototype-result").textContent(), /<b>Equipo<\/b>/, "Feedback retains submitted value, not the edited draft");
      assert.match(await page.locator("#notes-content").textContent(), language === "es" ? /270 segundos/ : /270 seconds/);
      assert.match(await page.locator("#generation-status").textContent(), language === "es" ? /2 de 4/ : /2 of 4/);
      assert.match(await page.locator("#cause-status").textContent(), language === "es" ? /Paso 3 de 4/ : /Stage 3 of 4/);
      assert.match(await page.locator("#stack-status").textContent(), language === "es" ? /Capa 3 de 5/ : /Layer 3 of 5/);
    }
    await page.evaluate(() => toggleNotes(false));
    for (const language of ["es", "en"]) {
      await switchTo(language);
      await page.locator("#workspace-name").fill("");
      await click("#prototype-form button");
      assert.equal(await page.locator("#workspace-name").evaluate(node => node.validationMessage),
        language === "es" ? "Escribe un nombre para el espacio de trabajo." : "Enter a workspace name.");
      await page.evaluate(() => setStageMode(true));
      await switchTo(language === "es" ? "en" : "es");
      await page.evaluate(() => setStageMode(false));
      assert.equal(await page.locator("#workspace-name").evaluate(node => node.validationMessage),
        language === "es" ? "Enter a workspace name." : "Escribe un nombre para el espacio de trabajo.", "Saved native validity restores in the current language");
      await page.locator("#workspace-name").fill(" ");
      await click("#prototype-form button");
      await switchTo(language);
      assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
      assert.match(await page.locator("#prototype-result").textContent(), language === "es" ? /2–48 caracteres/ : /2–48 non-padding/);
      await page.locator("#workspace-name").fill("Review workspace");
      await click("#prototype-form button");
    }
    await page.evaluate(() => setStageMode(true));
    await go(6);
    await page.evaluate(() => {
      setPair(3);
      $("#workspace-name").value = "Stage workspace";
      $("#prototype-form").requestSubmit();
    });
    await page.locator("#workspace-name").focus();
    const currentLanguage = await page.locator("html").getAttribute("lang");
    await page.keyboard.press("l");
    assert.equal(await page.locator("html").getAttribute("lang"), currentLanguage, "L remains native typing inside the form");
    await page.locator("#presentation").focus();
    await page.keyboard.press("l");
    assert.notEqual(await page.locator("html").getAttribute("lang"), currentLanguage, "Stage can switch without exiting");
    assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "3");
    await page.keyboard.press("ArrowLeft");
    assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "2");
    await page.keyboard.press("ArrowRight");
    assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), "3");
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#workspace-name").inputValue(), "Review workspace");
    for (const language of ["es", "en"]) {
      await switchTo(language);
      await go(15);
      await page.evaluate(() => setClosing(false));
      await click("#next");
      assert.equal(await slideNumber(), "slide-15");
      assert.equal(await page.locator("#next").getAttribute("aria-expanded"), "true");
      await click("#next");
      await page.waitForFunction(() => state.index === 15);
      await page.evaluate(() => { setStageMode(true); renderSlide(14); setClosing(true); });
      await switchTo(language === "es" ? "en" : "es");
      await page.locator("#presentation").focus();
      await page.keyboard.press("ArrowLeft");
      assert.equal(await page.locator("#closing-reveal").isVisible(), false);
      await page.keyboard.press("s");
    }
    await go(13);
    await click("#metrics-open");
    await switchTo("es");
    assert.match(await page.locator("#metrics-title").textContent(), /10 métricas/);
    assert.deepEqual(await page.locator('.metric-card[data-metric="6"] dd').allTextContents(), ["~3–4/sem", "~1–2/sem", "≈−2/sem"]);
    await page.keyboard.press("Escape");
    await click("#overview-toggle");
    await switchTo("en");
    await page.keyboard.press("ArrowRight");
    assert.equal(await slideNumber(), "slide-13", "Open dialog retains native navigation after switching");
    await page.keyboard.press("Escape");
    await click("#language-toggle");
    assert.equal(await page.locator("html").getAttribute("lang"), "es", "One click has one handler");
    for (const language of ["es", "en"]) {
      await switchTo(language);
      const errorCount = errors.length;
      await page.evaluate(async () => {
        const original = document.documentElement.requestFullscreen;
        document.documentElement.requestFullscreen = async () => { throw new Error("Permission denied"); };
        try { await fullscreen(); } finally { document.documentElement.requestFullscreen = original; }
      });
      assert.equal(errors.length, errorCount + 1, "Fullscreen failure remains explicitly logged");
      assert.match(errors.pop(), language === "es" ? /Error al solicitar pantalla completa/ : /Fullscreen request failed/);
      assert.match(await page.locator("#announcement").textContent(), language === "es" ? /No se pudo activar/ : /Could not enter/);
      await switchTo(language === "es" ? "en" : "es");
      assert.match(await page.locator("#fullscreen").textContent(), language === "es" ? /Fullscreen blocked/ : /Pantalla completa bloqueada/);
    }
    await page.evaluate(() => { state.fullscreen = ""; renderFullscreen(); });
    const checkSpanish = async () => {
      const stale = await page.evaluate(() => {
        const forbidden = /\b(?:AI|the|with|without|your|this|next|previous|workspace|required|baseline|outcomes|guidance|shared|govern|evaluate|fullscreen|stage|reading|backup|handoffs|mocks|release|pending|learn|review|seconds)\b/i;
        const copy = [];
        for (const node of document.querySelectorAll("body *")) {
          if (node.closest("#language-toggle") || (!node.checkVisibility() && !node.matches('[role="status"], #stage-help'))) continue;
          for (const child of node.childNodes) {
            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) copy.push(child.textContent.trim());
          }
          for (const name of ["aria-label", "aria-valuetext", "title", "placeholder", "data-label"]) {
            if (node.hasAttribute(name)) copy.push(node.getAttribute(name));
          }
        }
        return copy.filter(text => forbidden.test(text));
      });
      assert.deepEqual(stale, [], "Visible copy and accessible dynamic states have no stale English");
    };
    // Fresh example values avoid mistaking deliberately untranslated user input for UI copy.
    await page.evaluate(() => setPair(0));
    for (const size of [
      { width: 1680, height: 1000 }, { width: 1200, height: 1000 },
      { width: 900, height: 900 }, { width: 390, height: 844 },
      { width: 320, height: 700 }, { width: 844, height: 390 },
      { width: 1280, height: 720, stage: true }, { width: 1680, height: 1080, stage: true }
    ]) {
      await page.setViewportSize({ width: size.width, height: size.height });
      await page.evaluate(stage => setStageMode(stage), Boolean(size.stage));
      await page.waitForFunction(() => document.body.classList.contains("reading") === (!stageReview && smallScreen.matches));
      const reading = await page.locator("body").evaluate(node => node.classList.contains("reading"));
      await page.evaluate(() => { setAligned(true); setClosing(true); setPair(5); });
      for (let i = 1; i <= 23; i++) {
        await go(i);
        await checkLayout(reading, `es-${size.stage ? "stage" : "review"}-${size.width}/${i}`);
        await checkSpanish();
        if ([1, 5, 10, 13, 14, 16, 21].includes(i)) await capture(`es-${size.stage ? "stage" : "review"}-${size.width}-slide-${i}`);
      }
      await go(6);
      for (let step = 0; step < 6; step++) {
        await page.evaluate(step => setPair(step), step);
        await switchTo("en");
        await switchTo("es");
        assert.equal(await page.locator("#pair-count").textContent(), `PASO ${step + 1} DE 6`);
        if (step !== 3) assert.equal(await page.locator("#evidence-title").textContent(), await page.evaluate(step => pairEvidence[step].title, step));
        if (step === 4) assert.match(await page.locator("#evidence-verdict").textContent(), /validación con usuarios pendiente/);
        if (step === 5) assert.match(await page.locator("#evidence-verdict").textContent(), /revisión continúa/);
        await checkLayout(reading, `es-${size.width}/demo-${step}`);
        await checkSpanish();
        if (size.stage) {
          const sizes = await page.locator("#pair-label, .prototype-scene h3, .prototype-scene dd").evaluateAll(nodes => nodes.filter(node => node.checkVisibility()).map(node => parseFloat(getComputedStyle(node).fontSize) * document.querySelector(".slide.active").getBoundingClientRect().width / 1600));
          assert(sizes.length > 0 && Math.min(...sizes) >= 18.4 - 0.001, "Translated decision text preserves projected minimum");
        }
        await capture(`es-${size.stage ? "stage" : "review"}-${size.width}-demo-${step}`);
      }
    }
    await page.reload();
    assert.equal(await page.locator("html").getAttribute("lang"), "en", "Language and form data are not persisted");
    assert.equal(await page.locator("#workspace-name").inputValue(), "");
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".slide:visible").count(), 23);
    assert.deepEqual(errors, [], "No browser errors or remote requests");
    assert.deepEqual(failures, [], "Layout and legibility regressions");
    console.log("PASS: English and Spanish in one offline deck; all 23 slides, six review viewports plus two stage sizes, every demo state, in-place switches, preserved form/build/mode state, native keys/validation, fullscreen failures, projected type/overflow, notes, accessibility, metrics, links, and print.");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
