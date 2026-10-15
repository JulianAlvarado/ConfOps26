# DesignOps as AI Infrastructure

**Presentation review prototype, version 0.1.** A local, dependency-free HTML/CSS/JavaScript keynote: 16 main slides (20 minutes), a Q&A menu (10 minutes), and five optional backups.

## Run

Open `index.html` directly in a modern desktop browser. No build, installation, external fonts, API keys, network access, or AI service is required.

The Q&A slide includes LinkedIn and personal GitHub links. They open in a new tab and require internet access only when followed.

Alternatively, from this folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080`. Stop the server with Ctrl+C.

**Presentation view** preserves the 1600 × 900 (16:9) stage. **Reading view** reflows the same slide into a scrollable layout with readable text, 44px-minimum controls, and text equivalents for complex SVG diagrams. Reading view starts automatically at widths of 900px or less, or heights of 560px or less. The toolbar toggle lets you choose either view at any size; your choice lasts until reload. For larger text on a laptop, turn Reading view on rather than shrinking the stage.

## Present

| Control | Action |
| --- | --- |
| Next / previous, Left / Right arrows | Navigate slides in either view |
| Up / Down, Page Up / Down, Space | Navigate in presentation view; scroll in reading view |
| Home / End | First / last slide in presentation view; scroll in reading view |
| Reading view | Toggle the reflowed reading layout |
| N / Notes | Toggle the readable notes panel |
| G / Slides | Open the slide index |
| F / Fullscreen | Toggle native fullscreen when supported |
| Escape | Close index or notes; browser also handles fullscreen exit |
| Topic links on Q&A | Open the relevant backup |
| `#13`, for example | Link directly to a slide |

All animations are finite and respect `prefers-reduced-motion`. Slides never advance automatically. In-slide buttons are intentionally separate from slide navigation; press Tab and Enter/Space to operate them. Reveal steps expose their current state and announce updates. Interaction state is preserved while navigating within the page and resets on reload. Keynote progress reaches 100% at slide 16; Q&A and backups have separate labels and no keynote progress bar.

Opening Notes focuses its scrollable panel. Arrow, Page Up/Down, Home/End, and Space keys operate the panel instead of advancing slides; N or Escape closes it. Text-input controls retain their native keyboard behavior. The notes panel is part of the same display, **not a private presenter window**; close it before audience screen sharing.

## Interactive moments

- **2:** distribute generation across four roles.
- **3:** trace the acceleration chain and toggle shared standards.
- **4:** replay sequential handoffs versus collaborative production.
- **6:** connect/disconnect the shared control plane.
- **8:** build the organizational-memory stack.
- **10:** inspect AI assistance, infrastructure, and review at each lifecycle stage.
- **11:** walk through six designer–engineer–AI steps and try the local HTML/CSS form.
- **12:** follow the closed organizational learning loop.
- **13:** compare four illustrative baseline/pilot measures side by side; open all ten in a detail dialog or jump to operational definitions.
- **15:** compare team, product-area, and enterprise ownership.
- **16:** pause, then reveal the answer.

## Files and editing

- `index.html`: discrete semantic slide sections, editable content, inline SVG diagrams.
- `styles.css`: shared palette, typography, 16:9 layouts, transitions, responsive chrome, reduced-motion and print rules.
- `app.js`: navigation, local interactions, metric dataset, and presenter notes displayed in the UI.
- `speaker-notes.md`: standalone rehearsal script, timings, takeaways, visuals, transitions, assumptions, and source traceability.
- `check.mjs`: zero-dependency source consistency check and notes exporter. Run `node check.mjs`.
- `browser-check.cjs`: optional browser regression checks for audit fixes. With Playwright available, run `node browser-check.cjs`. If Playwright is installed outside this folder, set `PLAYWRIGHT_MODULE` to its module path. The presentation itself still has no dependencies.

Each slide has a stable numeric ID and a descriptive `data-title`. Edit presenter notes in `app.js`, then run `node check.mjs --write-notes` to regenerate `speaker-notes.md` and verify consistency. Shared colors are CSS custom properties. Metric values and axis bounds live in the `metrics` array. There is no external data collection, analytics, persistence, or live AI call.

## Assumptions and qualifications

1. English is the presentation language. The supplied outline, including Spanish review notes, is the primary narrative source. No outside evidence or unverified source attribution is added.
2. All ten dashboard comparisons are **“Illustrative scenario — not measured results.”** They are neither industry benchmarks nor actual organizational performance. Review effort intentionally increases. The slide highlights four measures; the detail dialog preserves all ten. Baseline, pilot, and absolute change appear together. Percentage measures show percentage-point changes (pp), not relative percentage changes.
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
- **Metrics:** recreate native comparison cards/tables from `metrics`; retain both scenarios, units, percentage-point changes, and the increased review effort. Use the full ten-measure comparison as a backup.
- **Pair-programming demo:** use static concept → context → code → critique frames and a link to the HTML prototype. PowerPoint cannot reproduce the live form as editable slide content.
- **Lifecycle/altitude selectors:** use static summary layouts or duplicate slides for each state.
- **Closing:** retain the question and answer as two builds. Speaker notes remain separate editable text.

Print CSS provides a browser handout of all 22 slides, including the closing answer. Use landscape, background graphics on, no browser headers/footers, and 100% scale; PDF print behavior varies by browser. Printing is not a PowerPoint conversion. A printout uses current interaction states; prepare those before printing if a particular state is desired.
