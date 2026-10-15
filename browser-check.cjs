const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { mkdirSync } = require("node:fs");

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
    assert.equal(await page.locator(".slide").count(), 22);
    assert.deepEqual(await page.evaluate(() => ({
      keynoteCount,
      duration: notes.slice(0, keynoteCount).reduce((sum, note) => sum + note.seconds, 0),
      demo: notes[4].seconds,
      qa: notes[keynoteCount].seconds,
      backups: notes.slice(keynoteCount + 1).map(note => note.seconds)
    })), { keynoteCount: 14, duration: 1200, demo: 270, qa: 600, backups: [0, 0, 0, 0, 0, 0, 0] });
    assert.equal(await page.locator(".conflict-slide").count(), 0);
    await go(3);
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-4").hidden);
    assert.equal(await page.locator(".slide:not([hidden])").getAttribute("data-title"), "Govern. Context. Evaluate.");
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => !document.getElementById("slide-5").hidden);
    assert.equal(await page.locator(".slide:not([hidden])").getAttribute("data-title"), "Fix the form. Keep the lesson.");
    assert.match(await page.locator(".note-time").innerText(), /3:30–8:00 · 270 seconds/);
    assert.match(await page.locator("#slide-8").textContent(), /Scale design systems/);
    assert.equal(await page.locator(".fundamentals p").count(), 0);
    assert.match(await page.locator("#slide-21 .lead").textContent(), /allow the model to know/);
    for (const number of [1, 6, 8, 9, 10]) {
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
    const checkLayout = async (reading, label) => {
      const issues = await page.evaluate(reading => {
        const slide = document.querySelector(".slide:not([hidden])");
        const bounds = slide.getBoundingClientRect();
        const footer = slide.querySelector(".slide-footer").getBoundingClientRect();
        const issues = [];
        for (const node of slide.querySelectorAll("*")) {
          if (node.closest(".sr-only, svg") || !node.checkVisibility()) continue;
          if (reading && node.closest(".definitions thead")) continue;
          const rect = node.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1) issues.push(`${node.className || node.tagName}: outside horizontal slide bounds`);
          if (!reading && !node.closest(".slide-footer") && rect.bottom > footer.top - 4) issues.push(`${node.className || node.tagName}: overlaps footer`);
          if (reading && node.matches("button:not(:disabled), input") && rect.height < 44) issues.push(`${node.tagName}: target under 44px`);
          if (reading && node.matches("p:not(.kicker), li, td, input") && parseFloat(getComputedStyle(node).fontSize) < 16) issues.push(`${node.className || node.tagName}: text under 16px`);
          if (node.matches(".prototype-form, .decision-evidence")) {
            const scene = node.closest(".prototype-scene").getBoundingClientRect();
            if (rect.top < scene.top - 1 || rect.bottom > scene.bottom + 1) issues.push("Demo content overlaps prototype chrome/code");
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
      await go(5);
      await click('[data-action="pair-reset"]');
      const expected = [/start on my own/, /asks for someone else/, /Create first/, null, /Do not fix this twice/, /next person start alone/];
      for (let i = 0; i < 6; i++) {
        if (i) await click('[data-action="pair"]');
        assert.equal(await page.locator("#prototype-scene").getAttribute("data-step"), String(i));
        assert.equal(await page.locator("#pair-steps [aria-current='step']").count(), 1);
        assert.equal(await page.locator("#pair-steps li").nth(i).getAttribute("aria-current"), "step");
        assert.equal(await page.locator("#prototype-form").isVisible(), i === 3);
        if (expected[i]) assert.match(await page.locator("#evidence-title").innerText(), expected[i]);
        if (i === 0) assert.match(await page.locator("#evidence-details").innerText(), /do not have a teammate[\s\S]*start working/);
        if (i === 1) assert.match(await page.locator("#evidence-verdict").innerText(), /I am stuck/);
        if (i === 2) {
          assert.match(await page.locator("#evidence-details").innerText(), /Designer \+ engineer/);
          await go(6);
          await go(5);
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
          assert.equal(await slideNumber(), "slide-5");
        }
        if (i === 4) {
          assert.match(await page.locator("#prototype-code").innerText(), /allow solo setup.*reason and owner/);
          assert.match(await page.locator("#evidence-details").innerText(), /from the brief[\s\S]*product lead[\s\S]*after the pilot/);
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
      for (let i = 1; i <= 22; i++) {
        await go(i);
        await checkLayout(false, `${width}/slide-${i}`);
        assert.match(await page.locator("#notes-content h3").innerText(), new RegExp(`^${i}\\. `));
        assert.equal(await page.locator("#act-label").innerText(), await page.locator(`#slide-${i}`).getAttribute("data-act"));
        if (i <= 14) {
          assert.match(await page.locator(`#slide-${i} .slide-footer span:last-child`).innerText(), new RegExp(`^${String(i).padStart(2, "0")} / 14`));
          assert.equal(await page.locator("#counter").innerText(), `${String(i).padStart(2, "0")} / 14`);
        }
        if (width === 1200 && [4, 7, 11, 15, 21, 22].includes(i)) await capture(`1200-slide-${i}`);
      }
      await exerciseDemo(false, String(width));
    }
    await go(12);
    assert.deepEqual(await page.locator(".metric-comparison > div:last-child dd").allTextContents(), ["−3 d", "+1 /wk", "+2 h", "+12 pp"]);
    assert.equal(await page.locator(".metric-card.warning .metric-comparison dd").nth(1).innerText(), "6h");
    await click("#metrics-open");
    assert.equal(await page.locator(".metric-table tbody tr").count(), 10);
    await page.keyboard.press("ArrowRight");
    assert.equal(await slideNumber(), "slide-12");
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#metrics-open").evaluate(node => node === document.activeElement), true);
    await click("#notes-toggle");
    assert.equal(await page.locator("#notes").evaluate(node => node === document.activeElement), true);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(250);
    assert.equal(await slideNumber(), "slide-12");
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
    await go(3);
    for (let i = 0; i < 4; i++) await click('[data-action="cause"]');
    assert.equal(await page.locator("#causal-chain .current").count(), 5);
    assert.equal(await page.locator("#causal-chain [aria-current='step']").count(), 1);
    await click('[data-action="align"]');
    assert.equal(await page.locator('[data-action="align"]').getAttribute("aria-pressed"), "true");
    await checkLayout(false, "aligned");
    await go(10);
    await click('[data-action="journey"]');
    assert.match(await page.locator("#journey-status").innerText(), /Run 1:/);
    await go(9);
    const contrast = await page.evaluate(() => {
      const luminance = color => {
        const channels = color.match(/[\d.]+/g).slice(0, 3).map(n => {
          const c = Number(n) / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return channels.reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0);
      };
      const ratio = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);
      const background = getComputedStyle(document.getElementById("slide-9")).backgroundColor;
      return {
        network: ratio(getComputedStyle(document.querySelector(".network-links")).stroke, background),
        button: ratio(getComputedStyle(document.querySelector('[data-action="connect"]')).borderTopColor, background)
      };
    });
    assert(contrast.network >= 3 && contrast.button >= 3, "Inactive links and control boundaries meet 3:1");
    await click('[data-action="connect"]');
    assert.equal(await page.locator('[data-action="connect"]').getAttribute("aria-pressed"), "true");
    await go(21);
    const before = await page.locator("#stack").ariaSnapshot();
    for (let i = 0; i < 4; i++) await click('[data-action="stack"]');
    assert.notEqual(await page.locator("#stack").ariaSnapshot(), before);
    assert.equal(await page.locator(".stack-layer.revealed").count(), 5);
    assert.match(await page.locator("#stack-status").innerText(), /Layer 5 of 5/);
    await go(22);
    for (let i = 0; i < 5; i++) {
      await click(`[data-life="${i}"]`);
      assert.equal(await page.locator(`[data-life="${i}"]`).getAttribute("aria-pressed"), "true");
      await checkLayout(false, `lifecycle-${i}`);
    }
    await go(5);
    assert.deepEqual(await page.locator('[data-action="pair-reset"]').evaluate(node => {
      const style = getComputedStyle(node);
      return [style.fontSize, style.paddingTop, style.paddingLeft];
    }), ["19px", "14px", "22px"]);
    await go(7);
    for (let i = 0; i < 6; i++) await click('[data-action="loop"]');
    assert.equal(await page.locator(".loop-node.current").count(), 1);
    assert.equal(await page.locator("#loop-reading [aria-current='step']").count(), 1);
    await go(13);
    await click('[data-altitude="enterprise"]');
    assert.match(await page.locator("#altitude-detail").innerText(), /Security, Legal/);
    await go(14);
    assert.equal(await page.locator("#progress").evaluate(node => node.value / node.max), 1);
    await click('[data-action="closing"]');
    await checkLayout(false, "closing");
    await go(15);
    assert(!(await page.locator("#progress").isVisible()));
    assert.equal(await page.locator(".qa-links a").count(), 7);
    for (let number = 16; number <= 22; number++) {
      await click(`.qa-links a[href="#${number}"]`);
      await page.waitForFunction(number => !document.getElementById(`slide-${number}`).hidden, number);
      assert.equal(await page.locator("#counter").innerText(), `B${number - 15} / 7`);
      await click(`#slide-${number} .eyebrow a[href="#15"]`);
      await page.waitForFunction(() => !document.getElementById("slide-15").hidden);
    }
    assert.deepEqual(await page.locator(".contact-links a").evaluateAll(links => links.map(link => [link.href, link.target, link.rel])),
      [["https://www.linkedin.com/in/alvaradolj1/", "_blank", "noopener noreferrer"], ["https://github.com/JulianAlvarado", "_blank", "noopener noreferrer"]]);
    await go(12);
    await click('[data-action="metric-definitions"]');
    await page.waitForFunction(() => !document.getElementById("slide-20").hidden);
    await click('#slide-20 a[href="#12"]');
    await page.waitForFunction(() => !document.getElementById("slide-12").hidden);
    await click("#fullscreen");
    await page.waitForFunction(() => Boolean(document.fullscreenElement));
    await click("#fullscreen");
    await page.waitForFunction(() => !document.fullscreenElement);
    for (const size of [{ width: 900, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 700 }, { width: 844, height: 390 }]) {
      await page.setViewportSize(size);
      await page.waitForFunction(() => document.body.classList.contains("reading"));
      for (let i = 1; i <= 22; i++) {
        await go(i);
        await checkLayout(true, `${size.width}/slide-${i}`);
        if (size.width === 390 && [4, 11, 15].includes(i)) await capture(`390-slide-${i}`);
      }
      await exerciseDemo(true, String(size.width));
      await go(12);
      await click("#metrics-open");
      assert(await page.locator("#metrics-detail").evaluate(node => node.scrollWidth <= node.clientWidth + 1));
      await page.keyboard.press("Escape");
      await click("#notes-toggle");
      assert(await page.locator("#notes").evaluate(node => node.getBoundingClientRect().top > document.querySelector(".toolbar").getBoundingClientRect().bottom));
      await page.keyboard.press("Escape");
    }
    await go(20);
    await page.locator("#presentation").focus();
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(250);
    assert.equal(await slideNumber(), "slide-20");
    assert(await page.locator("#presentation").evaluate(node => node.scrollTop > 0));
    await page.keyboard.press("ArrowLeft");
    await page.waitForFunction(() => !document.getElementById("slide-19").hidden);
    await click("#reading-toggle");
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.locator("body").evaluate(node => node.classList.contains("reading")), false);
    await click("#reading-toggle");
    await page.setViewportSize({ width: 1200, height: 1000 });
    assert.equal(await page.locator("body").evaluate(node => node.classList.contains("reading")), true);
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".slide:visible").count(), 22);
    assert.deepEqual(errors, [], "No browser errors or remote requests");
    assert.deepEqual(failures, [], "Layout and legibility regressions");
    console.log("PASS: all 22 slides, six viewports, every decision-demo state, preserved copy/control edits, reading mode, keyboard/notes, progressive accessibility, metrics, forms, backup links, fullscreen, and print.");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
