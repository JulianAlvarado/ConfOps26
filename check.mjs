import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const data = vm.runInNewContext(`${js.slice(0, js.indexOf("const slides ="))}; ({ keynoteCount, notes, metrics, lifecycle, pairLabels, pairEvidence, metricValue, metricDelta, metricChange });`);
const titles = [...html.matchAll(/<section class="slide[^"]*" id="slide-(\d+)"[^>]*data-title="([^"]+)"/g)];
if (process.argv.includes("--write-notes")) {
  let elapsed = 0;
  const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  const sections = data.notes.map((note, index) => {
    const timing = index < data.keynoteCount ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} (${note.seconds} seconds)` : index === data.keynoteCount ? "10-minute Q&A, outside keynote timing" : "Optional backup, outside keynote timing";
    if (index < data.keynoteCount) elapsed += note.seconds;
    return `## ${index + 1}. ${titles[index][2]}

**Timing:** ${timing}

**Takeaway:** ${note.takeaway}

**Visual concept:** ${note.visual}

**Interaction / reveal:** ${note.interaction}

**Speaker notes:** ${note.body}

**Transition:** ${note.transition}`;
  });
  const metricTable = data.metrics.map((metric) => `| ${metric.name} | ${data.metricValue(metric, "baseline")} | ${data.metricValue(metric, "pilot")} | ${data.metricChange(metric)}${Array.isArray(metric.baseline) ? " (midpoint estimate)" : ""} | ${metric.unit} | ${metric.group === 0 ? "Leading / process" : "Workflow outcome"} |`).join("\n");
  const document = `# DesignOps as AI Infrastructure

Governance, systems, and the new role of DesignOps in product teams

Keynote v2. Primary source: the supplied **DesignOps as AI Infrastructure Presentation Outline ConfOps 2026**, including the original brief, frameworks, review notes, and FAQ. The conference revision keeps the interactive onboarding demo instead of a redundant conflict overview, keeps Govern / Context / Evaluate central, and moves the detailed stack and lifecycle to backups. V2 simplifies slides 5, 6, and 14 in both Stage and review: three questions, one demo surface per step, and a four-part pilot timeline. Supporting operational detail remains in these notes. There are 15 keynote slides, Q&A, and 7 backups (23 slides total).

Generated from the presenter-note data in app.js. To update this document after editing those notes: \`node check.mjs --write-notes\`.

## Pacing

| Act | Slides | Window | Duration |
| --- | --- | --- | --- |
| I: Introduction and the acceleration paradox | 1–4 | 0:00–3:00 | 3 minutes |
| II: The fix and the saved lesson | 5–8 | 3:00–10:40 | 7 minutes 40 seconds |
| III: Make the operating model repeatable | 9–14 | 10:40–18:30 | 7 minutes 50 seconds |
| IV: Closing | 15 | 18:30–20:00 | 1 minute 30 seconds |
| Q&A | 16, with optional 17–23 | 20:00–30:00 | 10 minutes |

The timing is a rehearsal guide, not an auto-advance schedule. Keep on-screen examples short enough to preserve discussion time. Read the full notes before presenting; the slides intentionally omit nuance that belongs in the spoken narrative.

Slide 3's text-only **About me** introduction occupies **1:30–2:00 (30 seconds)**. It presents Julian Alvarado's supplied biography in English and personal interests, with Xbox Design Ops as the role line. Summarize the role and connection to the talk instead of reading the full biography aloud. The closing on slide 15 is shortened from 120 to **90 seconds**, preserving the 20-minute slot.

Slide 6's retained six-step demo runs from **4:00–8:30**, for **270 seconds**. The removed overview's 90 seconds are reassigned to explanation and interaction pauses: 30 seconds for the audience to absorb the blocked need, 30 seconds for form validation/keyboard feedback, and 30 seconds to review the saved lesson's owner and review trigger. No steps or exercises were added. The keynote remains exactly 1,200 seconds; Q&A remains 600 seconds.

## Stage delivery and rehearsal

Choose **Stage** or press **S** before sharing. Stage closes notes and dialogs and hides review chrome; **F** optionally enters fullscreen. Only three moments need builds: slide 4 fragmentation → alignment, slide 6's six existing demo steps, and slide 15 question → answer. All other diagrams are resolved static summaries. This changes delivery, not slide order or timing.

**Right / Down / Page Down / Space** advances a build before the next slide; **Left / Up / Page Up** reverses a build before the previous slide. Builds are retained when revisiting slides. Home / End jumps to the first / last slide. Tab into the demo to type and submit; input and form-button keys retain native behavior. Tab beyond the form to resume slide keys. **Escape**, **S**, **Exit stage · Esc**, or leaving native fullscreen returns to review on the current slide. Escape works from the form too. N/G cannot open notes or the index on stage.

Review's build states, form value/feedback, diagram selections, and manual Reading preference are restored on exit; notes and dialogs remain closed. Entering Stage again starts a new rehearsal of the three build moments. Use the form only for fictional input: it sends and saves nothing.

Stage prioritizes projected labels: the tested decision-bearing body and diagram text is at least 18.4px effective at 1280×720, and 24.15px at 1680×1080. The framework shows only its three questions; the documentation model shows four mappings and a concise scoped rule. Framework examples and team/product-area/enterprise operating guidance remain in these notes. Seven transformations, detailed rule provenance, lifecycle panels, and all ten measures remain in review and these notes. Act/topic labels, counters, decorative ordinals, and reference-appendix metadata remain smaller. Reading view remains the appropriate reference-reading surface on small screens.

## Illustrative decision trail

The assumed user needs to start a workspace alone. The first generated form requires a teammate email and blocks that task. Designer and engineer move invitations after setup. DesignOps saves the lesson and its reason in shared guidance, scoped to solo workspace setup, with a product lead owner and review after the pilot or a source change. The next proposed form meets that requirement, but still needs accessibility and user-outcome review.

The example, AI-produced forms, team decisions, and ownership are all pre-authored and illustrative. They are not research findings, actual organizational policy, live model output, or measured improvements. User validation is pending. DesignOps keeps the user's need, the team's decision, its reason, and its owner together in shared guidance. Product experts still decide whether the guidance and each new result are appropriate.

${sections.join("\n\n---\n\n")}

## Early experimentation: approximate values

**Early experimentation · approximate values.** The presenter reports that the comparison values are close to informal experimentation data and has supplied approximate ranges for design production rate. They are approximations, not exact measurements, benchmarks, validated results, causal evidence, or a forecast. Baseline, pilot, and change are shown together. Changes use each metric's units; percentage measures use percentage points.

| Metric | Baseline | Pilot | Change | Unit / context | Category |
| --- | --- | --- | --- | --- | --- |
${metricTable}

Design production rate is **~3–4/wk baseline → ~1–2/wk pilot**, with **≈−2/wk** computed from the range midpoints (1.5 − 3.5), not a separately observed change. The rate decreases; it is not colored as an improvement. The context is **accepted artifacts / in a team with 8w E2E Cycle**. The rate is per week; the team's eight-week end-to-end cycle is context, not a replacement denominator.

The other nine synthetic comparisons remain unchanged as approximations informed by the presenter's early experimentation. Underlying records, sample sizes, and methods have not been supplied. Review effort increases in the comparison. Leading/process classifications are useful for this workflow, not universal definitions. No actual customer-outcome evidence has been supplied.

## Operational definitions and collection

- **Brief → validated concept:** median elapsed days from a time-stamped brief to agreed reviewer acceptance and user-evidence criteria. Define the validation threshold first; do not count only a visually completed prototype.
- **Production rate:** accepted artifacts per team-week, holding artifact class, scope, staffing, and acceptance criteria comparable.
- **Production and review effort:** person-hours per accepted concept, reported separately. Include critique, re-evaluation, and validation. These are not elapsed days.
- **Rework:** percentage of reviewed artifacts requiring major revision. Agree on the definition of major and log revision reasons.
- **Design-system compliance:** passed applicable token, component, and interaction-pattern checks divided by all applicable checks. Track exclusions and sampling.
- **Accessibility and quality defects:** deduplicated open defects per 10 reviewed screens, accompanied by severity. Combine manual and automated assessment; a count does not establish accessibility conformance.
- **Design-to-code divergence:** audited UI instances that violate approved design intent divided by all audited instances in the defined sample.
- **Experimentation cadence:** completed experiments per week, each with a recorded interpretation and decision, not simply releases.
- **Context reuse:** artifacts citing a current, approved context package divided by all reviewed artifacts. A citation alone does not prove appropriate use.
- **Customer outcomes:** collect separately, for example task success and observed friction on comparable tasks. None is fabricated in this deck.

Record sample size, spread, staffing, complexity, exclusions, and data-collection limitations. A small observational pilot cannot establish causality. Set adoption, revision, and stop criteria before inspecting results. Apply organizational privacy and access policies to measurement.

## Source coverage and editorial decisions

| Source idea / review request | Where preserved |
| --- | --- |
| Core thesis, central question, capacity versus coherence | 1–2, 4, 15 |
| Speaker introduction: supplied name, role, translated biography, personal interests | 3 |
| Illustrative onboarding problem and user requirement, within the interactive demo | 6 |
| Product/customer journey before and after AI; Mission, Milestones, Metrics | 11 |
| DesignOps fundamentals and expanding responsibilities | 9, 14, 18 |
| AI control plane; domain ownership | 10, 17 |
| Stewardship × Systems × Enablement reconciled with Govern / Context / Evaluate | 5 and its notes |
| Organizational memory and five-layer AI design stack | 8, 19, 22 (backup) |
| Evaluation scarcity and six-part quality rubric | 7 |
| Discover → Define → Design → Build → Measure | 23 (backup) and its notes |
| Designer–engineer pairing; user need → fix → saved lesson, with local HTML/CSS | 6 |
| Learning captured into context and standards | 8, 12 |
| Production time, rate, review, rework, consistency, and measurement | 13, 21 |
| Canonical prompts and seven artifact transformations | 12 (four on stage; all seven in review and notes), 20 |
| Team, product-area, and enterprise altitudes | 14 speaker notes (all three); the timeline stays static in Stage and review |
| Evolving role and work archetypes | 18 |
| Risks if infrastructure is absent | 4, 6 and their notes |
| Shared governance, AI-team concern, AI-ready systems, model change, prompt ownership | 16–23 |
| Tomorrow's actions: map, identify, codify, standardize, measure | 14, 16 |

The Spanish review notes are implemented in English. Traditional DesignOps work is expanded, not erased. The proposed workflow is explicitly a hypothesis to validate. The source's tool mentions do not imply integrations; the demonstration uses local HTML/CSS. The source's unverified external archetype attribution is not reproduced as a factual attribution. Rhetorical counts are not converted into statistical claims. The stack and lifecycle walkthroughs are preserved in backups to avoid competing with the central operating model. The keynote now has 15 slides. The standalone conflict overview was removed at the user's request; its 90 seconds now support explanation and interaction pauses within the retained demo, without changing the six-step behavior or plain-language copy.

## Conversion and delivery notes

Keep slide text editable and vector diagrams separate from surrounding copy when recreating in PowerPoint. Use static before/after states or native appearance builds for branches, networks, stacks, and learning loops. Replace the live pair-programming form with concept-to-prototype frames and a link to this HTML presentation. Keep metric scenario labels and human-review qualifications visible in every exported state. The README documents full conversion assumptions and local navigation.
`;
  writeFileSync(new URL("./speaker-notes.md", import.meta.url), document);
}
const markdown = readFileSync(new URL("./speaker-notes.md", import.meta.url), "utf8");
assert.equal(data.keynoteCount, 15);
assert.equal(titles.length, 23, "15 keynote slides + Q&A + 7 backups");
assert.deepEqual(titles.map(match => Number(match[1])), Array.from({ length: 23 }, (_, i) => i + 1), "Contiguous IDs match DOM order");
assert.equal((html.match(/class="slide backup/g) || []).length, 7);
assert.equal(titles[2][2], "About me");
assert.equal(data.notes[2].seconds, 30, "Speaker introduction has 30 seconds");
assert.equal(data.notes[14].seconds, 90, "Closing contributes 30 seconds to the speaker introduction");
const about = html.match(/<section class="slide about-slide"[\s\S]*?<\/section>/)?.[0];
assert(about, "Speaker introduction exists");
for (const text of ["Julian Alvarado", "Xbox Design Ops", "Senior Program Manager", "responsible AI", "people-centered creative organizations"]) {
  assert(about.includes(text), `Speaker content: ${text}`);
}
assert(!about.includes("[Your name]") && !about.includes("SPEAKER TEMPLATE"), "Supplied biography replaces text placeholders");
assert(!/<button|data-action|<input|<img/.test(about), "Speaker introduction stays static and text-only");
assert.match(titles[4][2], /Govern/);
assert.equal(titles[5][2], "Fix the form. Keep the lesson.");
assert(!html.includes("conflict-slide") && !css.includes("conflict-layout"), "Redundant slide and its styles are removed");
assert.equal(data.notes[5].seconds, 270, "Removed 90 seconds are assigned to the retained demo");
assert(!js.includes("example from slide 4"), "Demo introduces its own example");
assert.match(titles[15][2], /Q&A/);
assert.match(titles[21][2], /Organizational memory/);
assert.match(titles[22][2], /product lifecycle/);
assert.equal(data.notes.length, titles.length, "Every slide has presenter notes");
assert.equal(data.notes.slice(0, data.keynoteCount).reduce((total, note) => total + note.seconds, 0), 1200, "Main talk is exactly 20 minutes");
assert.equal(data.notes[data.keynoteCount].seconds, 600, "Q&A is 10 minutes");
assert(data.notes.slice(data.keynoteCount + 1).every(note => note.seconds === 0), "Backups do not consume keynote time");
for (const [start, end, seconds] of [[0, 4, 180], [4, 8, 460], [8, 14, 470], [14, 15, 90]]) {
  assert.equal(data.notes.slice(start, end).reduce((total, note) => total + note.seconds, 0), seconds, "Act timing matches the rehearsal plan");
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML IDs are unique");
for (const match of html.matchAll(/\baria-(?:controls|labelledby|describedby)="([^"]+)"/g)) {
  for (const id of match[1].split(/\s+/)) assert(ids.includes(id), `Resolvable accessibility reference ${id}`);
}
assert(/<progress\b[^>]*max="15"/.test(html), "Progress covers only the 15-slide keynote");
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  const hash = match[1];
  assert(/^\d+$/.test(hash) ? +hash >= 1 && +hash <= titles.length : ids.includes(hash), `Resolvable link #${hash}`);
}
for (const [index, note] of data.notes.entries()) {
  for (const key of ["takeaway", "visual", "interaction", "body", "transition"]) {
    assert(note[key]?.length > 10, `Slide ${index + 1} has ${key}`);
    assert(markdown.includes(note[key]), `Standalone notes match slide ${index + 1} ${key}`);
  }
  assert(markdown.includes(`## ${index + 1}. ${titles[index][2]}`), `Standalone title for slide ${index + 1}`);
}
assert.equal(data.metrics.length, 10);
for (const metric of data.metrics) {
  for (const scenario of ["baseline", "pilot"]) {
    const value = metric[scenario];
    const values = Array.isArray(value) ? value : [value];
    assert(values.every(number => Number.isFinite(number) && number >= 0 && number <= metric.max), `${metric.name} fits its chart scale`);
    if (Array.isArray(value)) assert(value.length === 2 && value[0] <= value[1], `${metric.name} has an ordered range`);
  }
  assert(metric.unit && metric.scale, `${metric.name} has units and a scale`);
}
assert(data.metrics.find((metric) => metric.name === "Review effort").pilot > data.metrics.find((metric) => metric.name === "Review effort").baseline, "Review-cost trade-off remains visible");
const production = data.metrics.find(metric => metric.name === "Design production rate");
assert.equal(JSON.stringify(production.baseline), "[3,4]");
assert.equal(JSON.stringify(production.pilot), "[1,2]");
assert.equal(data.metricValue(production, "baseline"), "~3–4/wk");
assert.equal(data.metricValue(production, "pilot"), "~1–2/wk");
assert.equal(data.metricDelta(production), -2);
assert.equal(data.metricChange(production), "≈−2/wk");
assert.equal(production.better, "higher", "A production-rate decline is not an improvement");
assert.equal(production.unit, "accepted artifacts / in a team with 8w E2E Cycle");
assert(markdown.includes("≈−2/wk (midpoint estimate)"), "Exported comparison qualifies midpoint arithmetic");
assert.equal(data.lifecycle.length, 5);
for (const stage of data.lifecycle) assert.equal(stage.length, 6);
assert.equal(data.pairLabels.length, 6);
assert.equal(data.pairEvidence.length, 6);
assert.equal(data.pairEvidence[3], null, "Step 4 is the interactive revised form");
for (const step of [0, 1, 2, 4, 5]) {
  assert.equal(data.pairEvidence[step].entries.length, step < 3 ? 2 : 3);
  assert(data.pairEvidence[step].title && data.pairEvidence[step].verdict);
}
assert.match(JSON.stringify(data.pairEvidence[4]), /version 1.*from the brief.*product lead.*after the pilot/, "Saved lesson retains version, source, owner, and review trigger");
assert.match(data.pairEvidence[4].verdict, /user validation pending/, "Saved lesson stays provisional at point of use");
const framework = html.match(/<section class="slide framework-slide"[\s\S]*?<\/section>/)[0];
assert.equal((framework.match(/<h3>/g) || []).length, 3);
assert.equal((framework.match(/<p>/g) || []).length, 3);
assert(!/<ul|pillar-number|framework-foundation/.test(framework), "Three questions, without competing lists");
assert(!/pair-steps|pair-people|pair-explanation|prototype-code|window-chrome/.test(html), "One demo surface, no permanent checklist or duplicate captions");
assert.match(html, /id="pair-step" role="status" aria-live="polite" aria-atomic="true"/, "Current step is announced atomically");
const pilot = html.match(/<section class="slide" id="slide-14"[\s\S]*?<\/section>/)[0];
assert.equal((pilot.match(/<article>/g) || []).length, 4);
assert.match(pilot, /<strong>Adopt<\/strong>.*<strong>Revise<\/strong>.*<strong>Stop<\/strong>/);
assert(!/<button|<b>|altitude-bar/.test(pilot), "Pilot timeline has no extra clicks or decorative counters");
for (const phrase of ["At team level", "At product-area level", "At enterprise level", "human checkpoints", "before the pilot"]) {
  assert(data.notes[13].body.includes(phrase), `Pilot operating guidance retained: ${phrase}`);
}
assert.match(data.pairEvidence[5].verdict, /review is not over/, "Reuse never replaces evaluation");
for (const id of ["stage-toggle", "stage-exit", "stage-help"]) assert(ids.includes(id), `Stage control ${id} exists`);
assert.equal(data.notes.filter(note => /Stage moment [123]:/.test(note.interaction)).length, 3, "Only three intentional stage build moments");
assert(!/closing-answer|data-action="closing"/.test(html + css + js), "Closing uses navigation, not a dedicated reveal control");
assert(markdown.includes("Stage delivery and rehearsal"), "Export includes stage instructions");
for (const [name, content] of [["slides", html], ["notes and dynamic copy", js], ["exported notes", markdown], ["README", readFileSync(new URL("./README.md", import.meta.url), "utf8")]]) {
  assert(!/\b(?:BRIEF|AC|DEC|RULE)[-\u2010-\u2015]\d+\b/.test(content), `${name} explains the example without obsolete document identifiers`);
}
assert(css.includes("prefers-reduced-motion"));
assert.equal((html.match(/EARLY EXPERIMENTATION · APPROXIMATE VALUES/g) || []).length, 2, "Slide and detailed metrics retain the approximate-value qualification");
assert(!/\b(?:src|href)="https?:\/\//.test(html.replace(/<a\b[^>]*>/gi, "")), "No remote assets; outbound links are allowed");
assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|setInterval)\s*\(/.test(js), "No network or repeating timers");
new vm.Script(js, { filename: "app.js" });
console.log("PASS: 23 slides (15 keynote + Q&A + 7 backups), 270-second demo, exact 20-minute keynote + 10-minute Q&A, decision trace, synchronized notes, metrics, links, offline and motion contracts.");
