import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const data = vm.runInNewContext(`${js.slice(0, js.indexOf("const slides ="))}; ({ keynoteCount, notes, metrics, lifecycle, pairDescriptions, pairCode, pairLabels, pairEvidence });`);
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
  const metricTable = data.metrics.map((metric) => `| ${metric.name} | ${metric.baseline}${metric.short} | ${metric.pilot}${metric.short} | ${metric.unit} | ${metric.group === 0 ? "Leading / process" : "Workflow outcome"} |`).join("\n");
  const document = `# DesignOps as AI Infrastructure

Governance, systems, and the new role of DesignOps in product teams

Presentation review prototype 0.1. Primary source: the supplied **DesignOps as AI Infrastructure Presentation Outline ConfOps 2026**, including the original brief, frameworks, review notes, and FAQ. The approved conference revision brings an illustrative operational conflict forward, keeps Govern / Context / Evaluate central, and moves the detailed stack and lifecycle to backups. There are 15 keynote slides, Q&A, and 7 backups (23 slides total).

Generated from the presenter-note data in app.js. To update this document after editing those notes: \`node check.mjs --write-notes\`.

## Pacing

| Act | Slides | Window | Duration |
| --- | --- | --- | --- |
| I: From acceleration to conflict | 1–4 | 0:00–4:00 | 4 minutes |
| II: The decision and its reusable rule | 5–8 | 4:00–10:10 | 6 minutes 10 seconds |
| III: Make the operating model repeatable | 9–14 | 10:10–18:00 | 7 minutes 50 seconds |
| IV: Closing | 15 | 18:00–20:00 | 2 minutes |
| Q&A | 16, with optional 17–23 | 20:00–30:00 | 10 minutes |

The timing is a rehearsal guide, not an auto-advance schedule. Keep on-screen examples short enough to preserve discussion time. Read the full notes before presenting; the slides intentionally omit nuance that belongs in the spoken narrative.

## Illustrative decision trail

The assumed user needs to start a workspace alone. The first generated form requires a teammate email and blocks that task. Designer and engineer move invitations after setup. DesignOps saves the lesson and its reason in shared guidance, scoped to solo workspace setup, with a product lead owner and review after the pilot or a source change. The next proposed form meets that requirement, but still needs accessibility and user-outcome review.

All scenario artifacts, generated choices, reviewer decisions, and ownership examples are pre-authored and illustrative. They are not research findings, actual organizational policy, live model output, or measured improvements. User validation is pending. DesignOps maintains the source/criterion/decision/rule contract and the review path; domain experts retain product judgment.

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
| Core thesis, central question, capacity versus coherence | 1–3, 15 |
| Early illustrative onboarding conflict and criterion | 4 |
| Product/customer journey before and after AI; Mission, Milestones, Metrics | 11 |
| DesignOps fundamentals and expanding responsibilities | 9, 14, 18 |
| AI control plane; domain ownership | 10, 17 |
| Stewardship × Systems × Enablement reconciled with Govern / Context / Evaluate | 5 and its notes |
| Organizational memory and five-layer AI design stack | 8, 19, 22 (backup) |
| Evaluation scarcity and six-part quality rubric | 7 |
| Discover → Define → Design → Build → Measure | 23 (backup) and its notes |
| Designer–engineer pairing; context → conflict → decision → rule, with local HTML/CSS | 6 |
| Learning captured into context and standards | 8, 12 |
| Production time, rate, review, rework, consistency, and measurement | 13, 21 |
| Canonical prompts and seven artifact transformations | 12, 20 |
| Team, product-area, and enterprise altitudes | 14 |
| Evolving role and work archetypes | 18 |
| Risks if infrastructure is absent | 3–4 and their notes |
| Shared governance, AI-team concern, AI-ready systems, model change, prompt ownership | 16–23 |
| Tomorrow's actions: map, identify, codify, standardize, measure | 14, 16 |

The Spanish review notes are implemented in English. Traditional DesignOps work is expanded, not erased. The proposed workflow is explicitly a hypothesis to validate. The source's tool mentions do not imply integrations; the demonstration uses local HTML/CSS. The source's unverified external archetype attribution is not reproduced as a factual attribution. Rhetorical counts are not converted into statistical claims. The stack and lifecycle walkthroughs are preserved in backups to avoid competing with the central operating model. The keynote now has 15 slides; the added conflict and expanded demo use time recovered from those supporting walkthroughs.

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
assert.equal(titles[3][2], "The form works. But the user can't finish.");
assert.match(titles[4][2], /Govern/);
assert.equal(titles[5][2], "Fix the form. Keep the lesson.");
assert.match(titles[15][2], /Q&A/);
assert.match(titles[21][2], /Organizational memory/);
assert.match(titles[22][2], /product lifecycle/);
assert.equal(data.notes.length, titles.length, "Every slide has presenter notes");
assert.equal(data.notes.slice(0, data.keynoteCount).reduce((total, note) => total + note.seconds, 0), 1200, "Main talk is exactly 20 minutes");
assert.equal(data.notes[data.keynoteCount].seconds, 600, "Q&A is 10 minutes");
assert(data.notes.slice(data.keynoteCount + 1).every(note => note.seconds === 0), "Backups do not consume keynote time");
for (const [start, end, seconds] of [[0, 4, 240], [4, 8, 370], [8, 14, 470], [14, 15, 120]]) {
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
assert.equal(data.pairEvidence.length, 6);
assert.equal(data.pairEvidence[3], null, "Step 4 is the interactive revised form");
for (const step of [0, 1, 2, 4, 5]) {
  assert.equal(data.pairEvidence[step].entries.length, step < 3 ? 2 : 3);
  assert(data.pairEvidence[step].title && data.pairEvidence[step].verdict);
}
assert.match(JSON.stringify(data.pairEvidence[4]), /version 1.*from the brief.*product lead.*after the pilot/, "Saved lesson retains version, source, owner, and review trigger");
assert.match(data.pairEvidence[5].verdict, /review is not over/, "Reuse never replaces evaluation");
assert(!/BRIEF-01|AC-01|DEC-01|RULE-01/.test(JSON.stringify([data.pairDescriptions, data.pairCode, data.pairLabels, data.pairEvidence])), "Demo explains the example without document codes");
assert(css.includes("prefers-reduced-motion"));
assert(html.includes("ILLUSTRATIVE SCENARIO — NOT MEASURED RESULTS"));
assert(!/\b(?:src|href)="https?:\/\//.test(html.replace(/<a\b[^>]*>/gi, "")), "No remote assets; outbound links are allowed");
assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|setInterval)\s*\(/.test(js), "No network or repeating timers");
new vm.Script(js, { filename: "app.js" });
console.log("PASS: 23 slides (15 keynote + Q&A + 7 backups), exact 20-minute keynote + 10-minute Q&A, decision trace, synchronized notes, metrics, links, offline and motion contracts.");
