# DesignOps as AI Infrastructure

**Presentation review prototype, version 0.1.** A local, dependency-free HTML/CSS/JavaScript keynote: 15 main slides (20 minutes), a Q&A menu (10 minutes), and seven optional backups.

## Conference story

The onboarding conflict follows the acceleration paradox at **2:30**. Govern / Context / Evaluate provides the central model at **4:00**, followed by a three-minute operational demonstration at **5:00**. The detailed stack and lifecycle remain available in backups rather than competing with the keynote.

| Slides | Story | Timing |
| --- | --- | --- |
| 1–4 | Opening → distributed generation → acceleration paradox → onboarding conflict | 0:00–4:00 |
| 5–8 | Govern / Context / Evaluate → decision demo → accountable evaluation → learning loop | 4:00–10:10 |
| 9–14 | Expanded role → control plane → collaborative journey → reusable standards → measures → 30-day pilot | 10:10–18:00 |
| 15 | Who designs the system? | 18:00–20:00 |
| 16 | Q&A and contact links | 20:00–30:00 |
| 17–23 | Ownership, role, AI-ready system, model changes, measurement, context stack, lifecycle | Optional backups |

The six demo steps tell one story: **user need → AI mistake → team decision → working fix → saved lesson → next result**. Someone needs to start alone, but the first form requires an invitation. The team moves invitations after setup; DesignOps keeps the reason in shared guidance for the next team and its AI tools. The lesson retains a source, scope, version, owner, and review trigger without document codes on the slide. All examples are pre-authored and illustrative; no actual research, organizational policy, or measured improvement is implied.

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

All animations are finite and respect `prefers-reduced-motion`. Slides never advance automatically. In-slide buttons are intentionally separate from slide navigation; press Tab and Enter/Space to operate them. Reveal steps expose their current state and announce updates. Interaction state is preserved while navigating within the page and resets on reload. Keynote progress reaches 100% at slide 15; Q&A and backups have separate labels and no keynote progress bar.

Opening Notes focuses its scrollable panel. Arrow, Page Up/Down, Home/End, and Space keys operate the panel instead of advancing slides; N or Escape closes it. Text-input controls retain their native keyboard behavior. The notes panel is part of the same display, **not a private presenter window**; close it before audience screen sharing.

## Interactive moments

- **2:** distribute generation across four roles.
- **3:** trace the acceleration chain and toggle shared standards.
- **6:** inspect shared context, conflicting choice, human decision, revised form, reusable rule, and next candidate. The form is interactive at step 4; Reset clears it and restarts the trace.
- **8:** follow the closed organizational learning loop.
- **10:** connect/disconnect the shared control plane.
- **11:** replay sequential handoffs versus collaborative production.
- **13:** compare four illustrative baseline/pilot measures side by side; open all ten in a detail dialog or jump to operational definitions.
- **14:** compare team, product-area, and enterprise ownership.
- **15:** pause, then reveal the answer.
- **22 (backup):** build the organizational-memory stack.
- **23 (backup):** inspect AI assistance, infrastructure, and review at each lifecycle stage.

## Files and editing

- `index.html`: discrete semantic slide sections, editable content, inline SVG diagrams.
- `styles.css`: shared palette, typography, 16:9 layouts, transitions, responsive chrome, reduced-motion and print rules.
- `app.js`: navigation, local interactions, metric dataset, and presenter notes displayed in the UI.
- `speaker-notes.md`: standalone rehearsal script, timings, takeaways, visuals, transitions, assumptions, and source traceability.
- `check.mjs`: zero-dependency source consistency check and notes exporter. Run `node check.mjs`.
- `browser-check.cjs`: optional browser regression checks for all slides and six demo states across six viewports. With Playwright available, run `node browser-check.cjs`. If Playwright is installed outside this folder, set `PLAYWRIGHT_MODULE` to its module path. Set `SNAPSHOT_DIR` to an artifact directory to capture desktop/mobile screenshots during the same run. The presentation itself still has no dependencies.

Each slide has a contiguous numeric ID, descriptive `data-title`, and `data-act`. IDs follow the revised DOM order, so old numeric links may now point to different content. The `notes` array uses that same order; `keynoteCount` defines the talk boundary. Edit presenter notes in `app.js`, then run `node check.mjs --write-notes` to regenerate `speaker-notes.md` and verify consistency. Shared colors are CSS custom properties. Metric values and axis bounds live in the `metrics` array. There is no external data collection, analytics, persistence, or live AI call.

## Assumptions and qualifications

1. English is the presentation language. The supplied outline, including Spanish review notes, is the primary narrative source. No outside evidence or unverified source attribution is added.
2. All ten dashboard comparisons are **“Illustrative scenario — not measured results.”** They are neither industry benchmarks nor actual organizational performance. Review effort intentionally increases. The slide highlights four measures; the detail dialog preserves all ten. Baseline, pilot, and absolute change appear together. Percentage measures show percentage-point changes (pp), not relative percentage changes.
3. Leading/process signals: production effort, review effort, system compliance, context reuse, experimentation cadence. Workflow outcomes: concept cycle time, accepted production rate, major rework, open accessibility/quality defects, and design-to-code divergence. These categories are an operational framing, not universal classifications. Actual user outcomes require separate evidence.
4. The before/after journey is a simplified comparison and a proposed operating model to validate. Animation durations are not delivery-time measurements. The first-30-days plan is a suggested sequence, not a delivery promise.
5. The decision example is self-contained and pre-authored. Solo setup is an assumed scenario, not research; optional invitations are an illustrative requirement, not a universal onboarding rule. The saved lesson illustrates accountable judgment, source, scope, ownership, and review after the pilot or source change. Meeting that requirement does not prove accessibility or user benefit. The real local form performs no account creation and sends or stores no user input; there is no live code generation or invented Paper/Figma integration.
6. Stewardship grounds GOVERN; Systems carry CONTEXT; Enablement activates GOVERN, CONTEXT, and EVALUATE through prompts, training, workflows, and rubrics. Evaluation remains a shared expert capability, not an AI score.
7. Graphite, warm off-white, cyan, lime, and coral distinguish shared systems, alignment, and drift. System fonts keep the deck offline. A consistent branching/connecting motif ties output to coherence without stock AI imagery.

Metric definitions, denominators, collection methods, and pilot caveats are on backup 5 and in the notes. No fabricated citations or performance claims are used.

## PowerPoint readiness

This is the HTML deliverable, not a `.pptx`. The content uses fixed-ratio sections, selectable text, CSS primitives, and inline vectors with stable layouts. A future conversion can map each section to a 16:9 slide and recreate text, lines, nodes, and tables as native PowerPoint objects.

- **Branch/network/loop diagrams:** preserve inline SVG as vectors, or recreate nodes and connectors as editable shapes.
- **Interactions:** export initial and resolved states as separate slides or use native Appear/Fade builds. Preserve the labels and explicit human checkpoints.
- **Metrics:** recreate native comparison cards/tables from `metrics`; retain both scenarios, units, percentage-point changes, and the increased review effort. Use the full ten-measure comparison as a backup.
- **Decision demo:** preserve context → conflicting choice → human decision → revised form → reusable rule → next-candidate check as six frames and link to the HTML prototype. Keep provenance and the illustrative qualification visible. PowerPoint cannot reproduce the live form as editable slide content.
- **Lifecycle/altitude selectors:** use static summary layouts or duplicate slides for each state.
- **Closing:** retain the question and answer as two builds. Speaker notes remain separate editable text.

Print CSS provides a browser handout of all 23 slides, including the closing answer. Use landscape, background graphics on, no browser headers/footers, and 100% scale; PDF print behavior varies by browser. Printing is not a PowerPoint conversion. A printout uses current interaction states; prepare those before printing if a particular state is desired.
