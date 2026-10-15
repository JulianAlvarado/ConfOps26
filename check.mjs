import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const data = vm.runInNewContext(`${js.slice(0, js.indexOf("const slides ="))}; ({ notes, metrics, lifecycle, pairDescriptions, pairCode, pairLabels });`);
const titles = [...html.matchAll(/<section class="slide[^"]*" id="slide-(\d+)"[^>]*data-title="([^"]+)"/g)];
if (process.argv.includes("--write-notes")) {
  let elapsed = 0;
  const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  const sections = data.notes.map((note, index) => {
    const timing = index < 16 ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} (${note.seconds} seconds)` : index === 16 ? "10-minute Q&A, outside keynote timing" : "Optional backup, outside keynote timing";
    if (index < 16) elapsed += note.seconds;
    return `## ${index + 1}. ${titles[index][2]}

**Timing:** ${timing}

**Takeaway:** ${note.takeaway}

**Visual concept:** ${note.visual}

**Interaction / reveal:** ${note.interaction}

**Speaker notes:** ${note.body}

**Transition:** ${note.transition}`;
  });
  const metricTable = data.metrics.map((metric) => `| ${metric.name} | ${metric.baseline}${metric.short} | ${metric.pilot}${metric.short} | ${metric.unit} | ${metric.group === 0 ? "Leading / process" : "Workflow outcome"} |`).join("\n");
  const document = `# DesignOps as AI Infrastructure

Governance, systems, and the new role of DesignOps in product teams

Presentation review prototype 0.1. Primary source: the supplied **DesignOps as AI Infrastructure Presentation Outline ConfOps 2026**, including the original brief, frameworks, review notes, and FAQ. The accompanying build brief supplies the 16-slide narrative and implementation requirements.

Generated from the presenter-note data in app.js. To update this document after editing those notes: \`node check.mjs --write-notes\`.

## Pacing

| Act | Slides | Window | Duration |
| --- | --- | --- | --- |
| I: The acceleration paradox | 1–4 | 0:00–5:00 | 5 minutes |
| II: The new role of DesignOps | 5–11 | 5:00–12:00 | 7 minutes |
| III: Making the operating model real | 12–15 | 12:00–18:00 | 6 minutes |
| IV: Closing | 16 | 18:00–20:00 | 2 minutes |
| Q&A | 17, with optional 18–22 | 20:00–30:00 | 10 minutes |

The timing is a rehearsal guide, not an auto-advance schedule. Keep on-screen examples short enough to preserve discussion time. Read the full notes before presenting; the slides intentionally omit nuance that belongs in the spoken narrative.

${sections.join("\n\n---\n\n")}

## Illustrative metric dataset

**Illustrative scenario — not measured results.** These numbers are not benchmarks, actual performance, causal evidence, or a forecast. Baseline, pilot, and change are shown together. Changes use each metric's units; percentage measures use percentage points.

| Metric | Baseline | Pilot | Unit / denominator | Category |
| --- | --- | --- | --- | --- |
${metricTable}

Baseline and pilot are synthetic teaching scenarios. They deliberately include an increase in review effort. Leading/process classifications are useful for this workflow, not universal definitions. No actual customer-outcome evidence has been supplied.

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
| Core thesis, central question, capacity versus coherence | 1–3, 16 |
| Product/customer journey before and after AI; Mission, Milestones, Metrics | 4 |
| DesignOps fundamentals and expanding responsibilities | 5, 15, 19 |
| AI control plane; domain ownership | 6, 18 |
| Stewardship × Systems × Enablement reconciled with Govern / Context / Evaluate | 7 and its notes |
| Organizational memory and five-layer AI design stack | 8, 20 |
| Evaluation scarcity and six-part quality rubric | 9 |
| Discover → Define → Design → Build → Measure | 10 and its notes |
| Designer–engineer pairing; early concept to HTML/CSS prototype | 11 |
| Learning captured into context and standards | 12 |
| Production time, rate, review, rework, consistency, and measurement | 13, 22 |
| Canonical prompts and seven artifact transformations | 14, 21 |
| Team, product-area, and enterprise altitudes | 15 |
| Evolving role and work archetypes | 19 |
| Risks if infrastructure is absent | 3 and its notes |
| Shared governance, AI-team concern, AI-ready systems, model change, prompt ownership | 17–22 |
| Tomorrow's actions: map, identify, codify, standardize, measure | 15, 17 |

The Spanish review notes are implemented in English. Traditional DesignOps work is expanded, not erased. The proposed workflow is explicitly a hypothesis to validate. The source's tool mentions do not imply integrations; the pair-programming demonstration uses local HTML/CSS. The source's unverified external archetype attribution is not reproduced as a factual attribution. Rhetorical counts are not converted into statistical claims. The original longer outline is condensed to 16 main slides, with meaningful detail moved into notes and backups rather than discarded.

## Conversion and delivery notes

Keep slide text editable and vector diagrams separate from surrounding copy when recreating in PowerPoint. Use static before/after states or native appearance builds for branches, networks, stacks, and learning loops. Replace the live pair-programming form with concept-to-prototype frames and a link to this HTML presentation. Keep metric scenario labels and human-review qualifications visible in every exported state. The README documents full conversion assumptions and local navigation.
`;
  writeFileSync(new URL("./speaker-notes.md", import.meta.url), document);
}
const markdown = readFileSync(new URL("./speaker-notes.md", import.meta.url), "utf8");
assert.equal(titles.length, 22, "16 main slides + Q&A + 5 backups");
assert.equal(data.notes.length, titles.length, "Every slide has presenter notes");
assert.equal(data.notes.slice(0, 16).reduce((total, note) => total + note.seconds, 0), 1200, "Main talk is exactly 20 minutes");
assert.equal(data.notes[16].seconds, 600, "Q&A is 10 minutes");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML IDs are unique");
for (const match of html.matchAll(/\baria-(?:controls|labelledby|describedby)="([^"]+)"/g)) {
  for (const id of match[1].split(/\s+/)) assert(ids.includes(id), `Resolvable accessibility reference ${id}`);
}
assert(/<progress\b[^>]*max="16"/.test(html), "Progress covers only the 16-slide keynote");
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  const hash = match[1];
  assert(/^\d+$/.test(hash) ? +hash >= 1 && +hash <= 22 : ids.includes(hash), `Resolvable link #${hash}`);
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
    assert(metric[scenario] >= 0 && metric[scenario] <= metric.max, `${metric.name} fits its chart scale`);
  }
  assert(metric.unit && metric.scale, `${metric.name} has units and a scale`);
}
assert(data.metrics.find((metric) => metric.name === "Review effort").pilot > data.metrics.find((metric) => metric.name === "Review effort").baseline, "Review-cost trade-off remains visible");
assert.equal(data.lifecycle.length, 5);
for (const stage of data.lifecycle) assert.equal(stage.length, 6);
assert.equal(data.pairDescriptions.length, 6);
assert.equal(data.pairLabels.length, 6);
assert.equal(data.pairCode.length, 6);
assert(css.includes("prefers-reduced-motion"));
assert(html.includes("ILLUSTRATIVE SCENARIO — NOT MEASURED RESULTS"));
assert(!/\b(?:src|href)="https?:\/\//.test(html), "No remote assets");
assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|setInterval)\s*\(/.test(js), "No network or repeating timers");
new vm.Script(js, { filename: "app.js" });
console.log("PASS: 22 slides, 20-minute keynote + 10-minute Q&A, synchronized notes, metrics, links, offline and motion contracts.");
