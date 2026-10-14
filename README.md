# DesignOps as AI Infrastructure

**Presentation review prototype, version 0.1.** A local, dependency-free HTML/CSS/JavaScript keynote: 16 main slides (20 minutes), a Q&A menu (10 minutes), and five optional backups.

## Run

Open `index.html` directly in a modern desktop browser. No build, installation, external fonts, API keys, network access, or AI service is required.

Alternatively, from this folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080`. Stop the server with Ctrl+C.

The preview is most legible on a desktop or landscape display. The 1600 × 900 composition scales uniformly to the available viewport, preserving 16:9 without clipping. On a small phone, use landscape; the notes and slide index use independently readable, responsive layouts.

## Present

| Control | Action |
| --- | --- |
| Next / previous, arrow keys, Page Up / Down | Navigate slides |
| Space | Next slide, unless focused on a control or text input |
| Home / End | First / last slide, including backups |
| N / Notes | Toggle the readable notes panel |
| G / Slides | Open the slide index |
| F / Fullscreen | Toggle native fullscreen when supported |
| Escape | Close index or notes; browser also handles fullscreen exit |
| Topic links on Q&A | Open the relevant backup |
| `#13`, for example | Link directly to a slide |

All animations are finite and respect `prefers-reduced-motion`. Slides never advance automatically. In-slide buttons are intentionally separate from slide navigation; press Tab and Enter/Space to operate them. Interaction state is preserved while navigating within the page and resets on reload. The notes panel is part of the same display, **not a private presenter window**; close it before audience screen sharing.

## Interactive moments

- **2:** distribute generation across four roles.
- **3:** trace the acceleration chain and toggle shared standards.
- **4:** replay sequential handoffs versus collaborative production.
- **6:** connect/disconnect the shared control plane.
- **8:** build the organizational-memory stack.
- **10:** inspect AI assistance, infrastructure, and review at each lifecycle stage.
- **11:** walk through six designer–engineer–AI steps and try the local HTML/CSS form.
- **12:** follow the closed organizational learning loop.
- **13:** compare illustrative baseline and pilot metrics; open operational definitions.
- **15:** compare team, product-area, and enterprise ownership.
- **16:** pause, then reveal the answer.

## Files and editing

- `index.html`: discrete semantic slide sections, editable content, inline SVG diagrams.
- `styles.css`: shared palette, typography, 16:9 layouts, transitions, responsive chrome, reduced-motion and print rules.
- `app.js`: navigation, local interactions, metric dataset, and presenter notes displayed in the UI.
- `speaker-notes.md`: standalone rehearsal script, timings, takeaways, visuals, transitions, assumptions, and source traceability.
- `check.mjs`: zero-dependency source consistency check and notes exporter. Run `node check.mjs`.

Each slide has a stable numeric ID and a descriptive `data-title`. Edit presenter notes in `app.js`, then run `node check.mjs --write-notes` to regenerate `speaker-notes.md` and verify consistency. Shared colors are CSS custom properties. Metric values and axis bounds live in the `metrics` array. There is no external data collection, analytics, persistence, or live AI call.

## Assumptions and qualifications

1. English is the presentation language. The supplied outline, including Spanish review notes, is the primary narrative source. No outside evidence or unverified source attribution is added.
2. All ten dashboard comparisons are **“Illustrative scenario — not measured results.”** They are neither industry benchmarks nor actual organizational performance. Review effort intentionally increases. Bars have independent labeled scales; compare scenarios within a row, not bar lengths across metrics.
3. Leading/process signals: production effort, review effort, system compliance, context reuse, experimentation cadence. Workflow outcomes: concept cycle time, accepted production rate, major rework, open accessibility/quality defects, and design-to-code divergence. These categories are an operational framing, not universal classifications. Actual user outcomes require separate evidence.
4. The before/after journey is a simplified comparison and a proposed operating model to validate. Animation durations are not delivery-time measurements. The first-30-days plan is a suggested sequence, not a delivery promise.
5. The pairing example is self-contained and pre-authored. It demonstrates a real local form, not live code generation, a production service, or an invented Paper/Figma integration. It performs no account creation and sends or stores no user input.
6. Stewardship grounds GOVERN; Systems carry CONTEXT; Enablement activates GOVERN, CONTEXT, and EVALUATE through prompts, training, workflows, and rubrics. Evaluation remains a shared expert capability, not an AI score.
7. Graphite, warm off-white, cyan, lime, and coral distinguish shared systems, alignment, and drift. System fonts keep the deck offline. A consistent branching/connecting motif ties output to coherence without stock AI imagery.

Metric definitions, denominators, collection methods, and pilot caveats are on backup 5 and in the notes. No fabricated citations or performance claims are used.

## PowerPoint readiness

This is the HTML deliverable, not a `.pptx`. The content uses fixed-ratio sections, selectable text, CSS primitives, and inline vectors with stable layouts. A future conversion can map each section to a 16:9 slide and recreate text, lines, nodes, and tables as native PowerPoint objects.

- **Branch/network/loop diagrams:** preserve inline SVG as vectors, or recreate nodes and connectors as editable shapes.
- **Interactions:** export initial and resolved states as separate slides or use native Appear/Fade builds. Preserve the labels and explicit human checkpoints.
- **Metrics:** recreate native bars or tables from `metrics`; retain scenario labels, denominators, independent scales, and the increased review effort.
- **Pair-programming demo:** use static concept → context → code → critique frames and a link to the HTML prototype. PowerPoint cannot reproduce the live form as editable slide content.
- **Lifecycle/altitude selectors:** use static summary layouts or duplicate slides for each state.
- **Closing:** retain the question and answer as two builds. Speaker notes remain separate editable text.

Print CSS provides a browser handout of all 22 slides, including the closing answer. Use landscape, background graphics on, no browser headers/footers, and 100% scale; PDF print behavior varies by browser. Printing is not a PowerPoint conversion. A printout uses current interaction states; prepare those before printing if a particular state is desired.
