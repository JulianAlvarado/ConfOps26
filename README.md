# DesignOps as AI Infrastructure

**Presentation review prototype, version 0.1.** A local, dependency-free HTML/CSS/JavaScript keynote: 15 main slides (20 minutes), a Q&A menu (10 minutes), and seven optional backups.

## Conference story

Govern / Context / Evaluate follows the acceleration paradox at **3:00**. The retained interactive demonstration, **“Fix the form. Keep the lesson.”**, is now slide **6**, beginning at **4:00**. Its **270 seconds (4 minutes 30 seconds)** include the removed overview slide's 90 seconds as explanation, audience-reading, form-interaction, and review pauses—not new steps or an extra exercise. The keynote remains exactly **1,200 seconds**. The detailed stack and lifecycle remain available in backups.

| Slides | Story | Timing |
| --- | --- | --- |
| 1–4 | Opening → distributed generation → About me → acceleration paradox | 0:00–3:00 |
| 5–8 | Govern / Context / Evaluate → decision demo → accountable evaluation → learning loop | 3:00–10:40 |
| 9–14 | Expanded role → control plane → collaborative journey → reusable standards → measures → 30-day pilot | 10:40–18:30 |
| 15 | Who designs the system? | 18:30–20:00 |
| 16 | Q&A and contact links | 20:00–30:00 |
| 17–23 | Ownership, role, AI-ready system, model changes, measurement, context stack, lifecycle | Optional backups |

The six demo steps tell one story: **user need → AI mistake → team decision → working fix → saved lesson → next result**. Someone needs to start alone, but the first form requires an invitation. The team moves invitations after setup; DesignOps keeps the reason in shared guidance for the next team and its AI tools. The lesson retains a source, scope, version, owner, and review trigger without document codes on the slide. All examples are pre-authored and illustrative; no actual research, organizational policy, or measured improvement is implied.

The same vocabulary continues through the learning loop and documentation slides: **decision** is what the team changed, **saved lesson** includes why, and **shared guidance** makes it available for reuse. The next result still needs review. Stage, review, Reading view, live announcements, and speaker notes use these terms rather than invented document identifiers.

## Speaker template

Slide **3**, **About me**, is a static template with `[Your name]`, `[Role · Organization]`, two short paragraph prompts, and `[Your photo]`. It contains no invented biography or portrait and adds no controls. Its **30 seconds (1:30–2:00)** come from the closing, now **90 seconds** rather than 120; the keynote remains 1,200 seconds, demo 270 seconds, and Q&A 600 seconds.

Replace the bracketed text directly in `index.html` under `.about-slide`. Keep each bio paragraph to one or two short sentences. To add a portrait later, put the image beside the deck (for example `portrait.jpg`) and replace the `.photo-placeholder` element inside `.about-photo` with `<img src="portrait.jpg" alt="Portrait of [your name]" width="800" height="1000">`, using the actual image dimensions and name. The existing frame fits a 4:5 local portrait with `object-fit: cover`; adjust `object-position` if needed. No upload UI, external image request, or new dependency is required.

## Run

Open `index.html` directly in a modern desktop browser. No build, installation, external fonts, API keys, network access, or AI service is required.

The Q&A slide includes LinkedIn and personal GitHub links. They open in a new tab and require internet access only when followed.

Alternatively, from this folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080`. Stop the server with Ctrl+C.

**Presentation view** preserves the 1600 × 900 (16:9) stage. **Reading view** reflows the same slide into a scrollable layout with readable text, 44px-minimum controls, and text equivalents for complex SVG diagrams. Reading view starts automatically at widths of 900px or less, or heights of 560px or less. The toolbar toggle lets you choose either view at any size; your choice lasts until reload. For larger text on a laptop, turn Reading view on rather than shrinking the stage.

The review toolbar uses borderless, text-style controls with understated shortcut hints. Hover underlines the action; active Reading view and open Notes use a cyan underline. Keyboard focus retains its visible outline, and mobile controls retain their 44px minimum height.

## Stage delivery

Choose **Stage** or press **S** before sharing the screen. Stage removes the review toolbar, version label, navigation hints, notes, and open dialogs. **F** optionally enters native fullscreen; Stage also works in a window. The visible **Exit stage · Esc** control stays in the bottom-left footer area.

Only three slides have builds:

| Slide | Stage build sequence |
| --- | --- |
| 4 | Fully visible fragmentation → apply shared standards → next slide |
| 6 | Six unchanged plain-language demo steps → next slide |
| 15 | Question → answer → Q&A |

**Right / Down / Page Down / Space** advances the current build before moving to the next slide. **Left / Up / Page Up** reverses a build, then moves to the previous slide. Returning to a slide retains its stage build. Home / End jumps to the first / last slide. Keys never auto-repeat through builds.

The demo's buttons and form remain keyboard accessible. **Tab** reaches its labeled input and submit button; native typing, arrows, Space, and Enter remain native within the form. Tab beyond the form (or focus the slide background) to resume presentation keys. **Escape** exits Stage even from the input. **S**, the exit button, or leaving browser fullscreen also returns to review. The current slide stays selected.

Entering Stage starts its three build sequences afresh but snapshots the review builds and form. Exiting restores those states, diagram selections, and the manual Reading view preference. Notes and dialogs stay closed on exit; **N/G are inactive on stage**, so they cannot accidentally appear to the audience. Fullscreen permission failures are announced and leave windowed Stage usable.

Other diagrams are resolved and static: all roles generating; the complete learning loop; the original control-plane hub-and-spoke diagram with every connection visible; both journey paths; all stack layers; the lifecycle overview; and a team-level pilot. Slide 10 keeps its diagram in Stage and desktop review, with larger stage labels and no stage connection toggle; Reading view retains the text equivalent. All detailed interactions, lifecycle/altitude choices, and the ten-measure dialog remain available in review.

### Projection typography

Stage uses the full available 16:9 area, not the smaller review viewport. The established system sans and semantic monospace stay unchanged. Decision-bearing body/diagram text uses a minimum **23px design-space size**: measured **18.4px at 1280×720** and **24.15px at 1680×1080** after the actual stage transform. Framework questions/list items are 32/28px; documentation mappings and rule content are 29/27px. The framework shows two supporting points per question; the documentation model shows four mappings and a concise rule summary. Complete lists, provenance, and the other three mappings remain in review and notes.

Small reference-only text remains in act/topic eyebrows, slide numbers, decorative output labels, role/step ordinals, and demo window chrome. The dense measurement appendix remains a reference table (18.4px cells at 1280×720); its captions/column labels and some backup category labels are smaller, not the primary spoken argument. Approximate-value and rule-scope qualifications remain visible. Use Reading view for reference reading or smaller displays; Stage is intended for projection at 1280×720 or larger, not phone-scale delivery.

## Review controls

| Control | Action |
| --- | --- |
| S / Stage | Start clean stage delivery |
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

All animations are finite and respect `prefers-reduced-motion`. Slides never advance automatically. In review, in-slide buttons are separate from slide navigation; press Tab and Enter/Space to operate them. Reveal steps expose their current state and announce updates. Interaction state is preserved while navigating within the page and resets on reload. Keynote progress reaches 100% at slide 15; Q&A and backups have separate labels and no keynote progress bar.

Opening Notes focuses its scrollable panel. Arrow, Page Up/Down, Home/End, and Space keys operate the panel instead of advancing slides; N or Escape closes it. Text-input controls retain their native keyboard behavior. The notes panel is part of the same display, **not a private presenter window**; close it before audience screen sharing.

## Review interactions

- **2:** distribute generation across four roles.
- **4:** trace the acceleration chain and toggle shared standards.
- **6:** follow the user's need, AI mistake, team decision, working fix, saved lesson, and next result. The form is interactive at step 4; Reset clears it and restarts the example.
- **8:** follow the closed organizational learning loop.
- **10:** connect/disconnect the shared control plane.
- **11:** replay sequential handoffs versus collaborative production.
- **13:** compare four approximate baseline/pilot measures informed by early experimentation; open all ten in a detail dialog or jump to operational definitions.
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
- `browser-check.cjs`: optional browser regression checks for all slides and six demo states across six review viewports, plus Stage at 1280×720 and 1680×1080. Covers build/slide keys, form isolation, clean entry/exit, fullscreen, review restoration, effective font thresholds, and overflow. With Playwright available, run `node browser-check.cjs`. If Playwright is installed outside this folder, set `PLAYWRIGHT_MODULE` to its module path. Set `SNAPSHOT_DIR` to an artifact directory to capture stage/desktop/mobile screenshots during the same run. The presentation itself still has no dependencies.

Each slide has a contiguous numeric ID, descriptive `data-title`, and `data-act`. IDs follow the revised DOM order, so old numeric links may now point to different content. The `notes` array uses that same order; `keynoteCount` defines the talk boundary. Edit presenter notes in `app.js`, then run `node check.mjs --write-notes` to regenerate `speaker-notes.md` and verify consistency. Shared colors are CSS custom properties. Metric values and axis bounds live in the `metrics` array. There is no external data collection, analytics, persistence, or live AI call.

## Assumptions and qualifications

1. English is the presentation language. The supplied outline, including Spanish review notes, is the primary narrative source. No outside evidence or unverified source attribution is added.
2. All ten dashboard comparisons are labeled **“Early experimentation · approximate values.”** The presenter supplied **Design production rate: ~3–4/wk baseline → ~1–2/wk pilot**, with **≈−2/wk** explicitly a **midpoint estimate** (1.5 − 3.5), not a separately observed change. Its context is **accepted artifacts / in a team with 8w E2E Cycle**: a weekly rate, not a rate per eight-week cycle. The decrease uses the warning color, not an improvement indication. The other nine synthetic comparisons are unchanged; the presenter reports they are close to informal experimentation data. Underlying records, sample sizes, and methods have not been supplied. Do not present these as validated results, benchmarks, causal evidence, or forecasts. The slide highlights four measures; the dialog and notes preserve all ten. Percentage changes use percentage points (pp), not relative percentages.
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
- **Decision demo:** preserve user need → AI mistake → team decision → working fix → saved lesson → next result as six frames and link to the HTML prototype. Keep the reason, source, owner, and illustrative qualification visible. PowerPoint cannot reproduce the live form as editable slide content.
- **Lifecycle/altitude selectors:** use static summary layouts or duplicate slides for each state.
- **Closing:** retain the question and answer as two builds. Speaker notes remain separate editable text.

Print CSS provides a browser handout of all 23 slides, including the closing answer. Use landscape, background graphics on, no browser headers/footers, and 100% scale; PDF print behavior varies by browser. Printing is not a PowerPoint conversion. A printout uses current interaction states; prepare those before printing if a particular state is desired.
