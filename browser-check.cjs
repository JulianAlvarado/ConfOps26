const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

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
          if (node.matches(".prototype-form")) {
            const scene = node.closest(".prototype-scene").getBoundingClientRect();
            if (rect.top < scene.top || rect.bottom > scene.bottom) issues.push("Form overlaps prototype chrome/code");
          }
        }
        const main = document.getElementById("presentation");
        if (reading && main.scrollWidth > main.clientWidth + 1) issues.push("Reading pane horizontal overflow");
        if (document.documentElement.scrollWidth > innerWidth) issues.push("Page horizontal overflow");
        return [...new Set(issues)];
      }, reading);
      if (issues.length) failures.push({ label, issues });
    };
    for (const width of [1680, 1200]) {
      await page.setViewportSize({ width, height: 1000 });
      for (let i = 1; i <= 22; i++) { await go(i); await checkLayout(false, `${width}/slide-${i}`); }
    }
    await go(13);
    assert.deepEqual(await page.locator(".metric-comparison > div:last-child dd").allTextContents(), ["−3 d", "+1 /wk", "+2 h", "+12 pp"]);
    assert.equal(await page.locator(".metric-card.warning .metric-comparison dd").nth(1).innerText(), "6h");
    await click("#metrics-open");
    assert.equal(await page.locator(".metric-table tbody tr").count(), 10);
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
    await go(3);
    for (let i = 0; i < 4; i++) await click('[data-action="cause"]');
    assert.equal(await page.locator("#causal-chain .current").count(), 5);
    assert.equal(await page.locator("#causal-chain [aria-current='step']").count(), 1);
    await click('[data-action="align"]');
    assert.equal(await page.locator('[data-action="align"]').getAttribute("aria-pressed"), "true");
    await checkLayout(false, "aligned");
    await go(4);
    await click('[data-action="journey"]');
    assert.match(await page.locator("#journey-status").innerText(), /Run 1:/);
    await go(6);
    const contrast = await page.evaluate(() => {
      const luminance = color => {
        const channels = color.match(/[\d.]+/g).slice(0, 3).map(n => {
          const c = Number(n) / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return channels.reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0);
      };
      const ratio = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);
      const background = getComputedStyle(document.getElementById("slide-6")).backgroundColor;
      return {
        network: ratio(getComputedStyle(document.querySelector(".network-links")).stroke, background),
        button: ratio(getComputedStyle(document.querySelector('[data-action="connect"]')).borderTopColor, background)
      };
    });
    assert(contrast.network >= 3 && contrast.button >= 3, "Inactive links and control boundaries meet 3:1");
    await click('[data-action="connect"]');
    assert.equal(await page.locator('[data-action="connect"]').getAttribute("aria-pressed"), "true");
    await go(8);
    const before = await page.locator("#stack").ariaSnapshot();
    for (let i = 0; i < 4; i++) await click('[data-action="stack"]');
    assert.notEqual(await page.locator("#stack").ariaSnapshot(), before);
    assert.equal(await page.locator(".stack-layer.revealed").count(), 5);
    assert.match(await page.locator("#stack-status").innerText(), /Layer 5 of 5/);
    await go(10);
    for (let i = 0; i < 5; i++) {
      await click(`[data-life="${i}"]`);
      assert.equal(await page.locator(`[data-life="${i}"]`).getAttribute("aria-pressed"), "true");
      await checkLayout(false, `lifecycle-${i}`);
    }
    await go(11);
    assert.equal(await page.locator('[data-action="pair-reset"]').evaluate(node => getComputedStyle(node).fontSize), "19px");
    for (let i = 0; i <= 5; i++) {
      if (i) await click('[data-action="pair"]');
      assert.equal(await page.locator("#pair-steps [aria-current='step']").count(), 1);
      if (i === 3) {
        await page.locator("#workspace-name").fill(" ");
        await click("#prototype-form button");
        assert.equal(await page.locator("#workspace-name").getAttribute("aria-invalid"), "true");
        await page.locator("#workspace-name").fill("<b>Team</b>" + "W".repeat(38));
        await click("#prototype-form button");
        assert.equal(await page.locator("#prototype-result b").count(), 0);
        assert.match(await page.locator("#prototype-result").innerText(), /Nothing was saved or sent/);
        await page.locator("#workspace-name").focus();
        await page.keyboard.press("ArrowRight");
        assert.equal(await slideNumber(), "slide-11");
      }
      await checkLayout(false, `pair-${i}`);
    }
    await go(12);
    for (let i = 0; i < 6; i++) await click('[data-action="loop"]');
    assert.equal(await page.locator(".loop-node.current").count(), 1);
    assert.equal(await page.locator("#loop-reading [aria-current='step']").count(), 1);
    await go(15);
    await click('[data-altitude="enterprise"]');
    assert.match(await page.locator("#altitude-detail").innerText(), /Security, Legal/);
    await go(16);
    assert.equal(await page.locator("#progress").evaluate(node => node.value / node.max), 1);
    await click('[data-action="closing"]');
    await checkLayout(false, "closing");
    await go(17);
    assert(!(await page.locator("#progress").isVisible()));
    await click("#fullscreen");
    await page.waitForFunction(() => Boolean(document.fullscreenElement));
    await click("#fullscreen");
    await page.waitForFunction(() => !document.fullscreenElement);
    for (const size of [{ width: 900, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 700 }, { width: 844, height: 390 }]) {
      await page.setViewportSize(size);
      await page.waitForFunction(() => document.body.classList.contains("reading"));
      for (let i = 1; i <= 22; i++) { await go(i); await checkLayout(true, `${size.width}/slide-${i}`); }
      await go(13);
      await click("#metrics-open");
      assert(await page.locator("#metrics-detail").evaluate(node => node.scrollWidth <= node.clientWidth + 1));
      await page.keyboard.press("Escape");
      await click("#notes-toggle");
      assert(await page.locator("#notes").evaluate(node => node.getBoundingClientRect().top > document.querySelector(".toolbar").getBoundingClientRect().bottom));
      await page.keyboard.press("Escape");
    }
    await go(22);
    await page.locator("#presentation").focus();
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(250);
    assert.equal(await slideNumber(), "slide-22");
    assert(await page.locator("#presentation").evaluate(node => node.scrollTop > 0));
    await page.keyboard.press("ArrowLeft");
    await page.waitForFunction(() => !document.getElementById("slide-21").hidden);
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
    console.log("PASS: all 22 slides, six viewports, reading mode, keyboard/notes, progressive accessibility, metrics, forms, fullscreen, and print.");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
