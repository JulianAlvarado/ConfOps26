# DesignOps as AI Infrastructure

**Approved bilingual presentation (V3).** User-approved to replace V2 as the canonical presentation. Open `index.html`; use the English and Spanish PDFs linked below. Based on frozen bilingual V2 commit `e39ef62f1729553773fa4a4f097f5c8cdf33d138`, with its history and historical exports preserved.

The local, offline vanilla HTML/CSS/JavaScript presentation contains **26 slides: 17 numbered main slides (16 keynote + Let's talk), FAQ + 8 appendices**. Main-slide indicators use a denominator of 17, ending with **17/17** on Hablemos / Let's talk; FAQ and appendix answers remain outside that count. The keynote is 20 minutes, including the 30-second About me slide and 30-second recap; Let's talk and FAQ share one 10-minute discussion segment. V1 and both inherited V2 PDFs are preserved unchanged. The frozen V2 and standalone Spanish branches are not edited.

## Open the presentation

Open `index.html` directly in a modern desktop browser. No build, package installation, CDN, API key, AI service, or network connection is needed. Alternatively, run `python3 -m http.server 8080 --bind 127.0.0.1` here and open `http://127.0.0.1:8080`.

Spanish starts on fresh load and reload, including direct slide hashes. **L** switches languages outside form fields, notes and dialogs, including in Stage; there is no language toolbar button. All slides, notes, menus, evidence, form feedback and accessible labels switch in place. Input, selected tabs, diagram states, the closing reveal and the Stage review snapshot survive switching. No language preference or user data is stored or sent.

Outbound LinkedIn and GitHub contact links are the only intended network use, when explicitly followed. About me uses five newly supplied photos bundled locally in `images/`, without retrieving deleted photo assets: beach handstand, gym/barbell, Microsoft campus, live performance, then cafe portrait on top. The photos fall sequentially into a slightly rotated stack over 2.9 seconds once per slide entry in Review and Stage, without consuming navigation clicks. Language and mode switches preserve the animation; reduced motion and print show the deterministic final stack. Natural image proportions, localized alt text and unobstructed biography copy are preserved, without captions or placeholder slots. The Q&A QR stays removed.

## Approved V3 changes

Inter is used for both primary and secondary typography, including diagrams and context labels. Existing **coral/orange** highlights action changes and the selected demo tab; **cyan** carries shared structure. Existing green success/acceptance states retain their meaning. There is no toolbar version badge; the three toolbar controls (Stage, Notes and Fullscreen) remain on one row at 1000px in both languages. The slide index has no toolbar button; **G** still opens it in Review, and closing it returns keyboard focus to the presentation.

| Slide | V3 treatment |
| --- | --- |
| 1 | Inter and existing palette; aligned capacity/coherence labels, matching captions and opening animation retained |
| 2 | Four disciplines separated by vertical rules, meaningful line icons and vertical semantic bullet lists; generation activates automatically on entry without a button |
| 3 | 50/50 five-photo falling stack and concise approved bilingual biography |
| 4 | Cleaner branching diagram with V2's vertical context/evaluation band placement restored; fragmentation and alignment remain distinct |
| 5 | Three equal coral headings: what to use and how, context as the intelligence layer for right choices, and what is good enough; separated rather than boxed, not a sequential dependency model |
| 6 | Six persistent, accessible tabs, one content surface, and main Next progression; top-aligned headings, roomier vertical rhythm and a smaller neutral-grey counter across every tab; no Reset or duplicate Next |
| 7 | V2's stacked-concept composition and enclosed rubric, without the output-pile caption; approved wording and original evaluation icon **◎** retained; judgment stays human |
| 8 | V2's learning-loop diagram restored without its progress button; complete cycle visible, with V2 Stage/print text equivalents and V3 Inter |
| 9 | People / Process / Systems explicitly connect current responsibilities with expanded AI scope |
| 10 | V2's original hub/spoke geometry and role-card positions, with one true AI/IA circle passing behind opaque role cards; accessible shared-layer summary |
| 11 | Before: simplified sequential handoffs, animated once on entry without a replay control |
| 12 | After: proposed shared purpose, synchronized collaboration and AI-assisted production; existing green animation starts on entry, without a replay control, pilot badge or pilot link |
| 13 | Three documentation-to-guidance tracks converge on advanced sprint context; a shared metrics band evaluates the whole flow, with the seven detailed relationships and evidence caveats retained in notes |
| 14 | Semantic table with stronger metric/unit hierarchy, right-aligned tabular values, readable group labels and balanced midpoint annotation; controls remain top-aligned beside the title; approximate values and evidence caveats retained |
| 15 | Main Next reveals the answer; next advance opens the recap; reverse hides before moving back |
| 16 | Three takeaways: govern the system (responsibilities, rules, criteria and stacks), preserve context through reusable guides and Evals, and evaluate quality and outcomes |
| 17 | Let's talk / Hablemos: conversation invitation and coral LinkedIn/GitHub contact actions, without questions or QR |
| 18 | FAQ: all eight original question links, leading to appendix answers that return here |
| 19–25 | Existing backup content retained, with Inter and related consistency adjustments |
| 26 | Original 30-day pilot moved intact to appendix; separated stages and return to the originating slide |

The recent Spanish headings are retained, including **“Ejemplo: Conserva lo aprendido. (Evals en pequeña escala)”**, **“Una decisión informada”**, **“No te enfoques en el output, Aceleras el aprendizaje.”**, and **“Las mismas bases, un alcance actualizado.”** The after-journey heading retains the speaker's latest Spanish wording.

## Pacing and mapping

About me is in position 3: paradox 4, demo 6, control plane 10, journeys 11/12, documentation 13, metrics 14, closing 15, recap 16, Let's talk / Hablemos 17, FAQ 18 and appendices 19–26. Menus, notes, hashes and return links use this mapping; old numeric bookmarks now refer to the newly numbered slides.

| Slides | Narrative | Window |
| --- | --- | --- |
| 1–4 | Opening, distributed generation, biography, paradox | 0:00–3:00 |
| 5–8 | Operating model, demo, evaluation, learning | 3:00–10:40 |
| 9–10 | Expanded responsibilities and control plane | 10:40–12:20 |
| 11 | Before: handoffs — 90 seconds | 12:20–13:50 |
| 12 | After: synchronized production — 105 seconds | 13:50–15:35 |
| 13–14 | Reusable guidance and measurement | 15:35–18:30 |
| 15 | Closing — 60 seconds | 18:30–19:30 |
| 16 | Three takeaways — 30 seconds | 19:30–20:00 |
| 17–18 | Let's talk + FAQ — 600 seconds shared | 20:00–30:00 |
| 19–26 | Optional appendices | Outside keynote |

The demo retains **270 seconds** and the split journey **195**. The closing's former 90 seconds are redistributed into **60 seconds for the closing + 30 for the recap**. About me retains **30 seconds**; keynote total stays **1,200 seconds**. These are rehearsal allocations, not automatic advancement.

## Presentation controls

| Control | Behavior |
| --- | --- |
| Main Next / Previous | Advance or reverse slide 4's chain/alignment, demo and closing states before changing slides |
| Right / Down / Page Down / Space | Same forward action; held keys do not skip builds |
| Left / Up / Page Up | Reverse a build before leaving the slide |
| Six demo tabs | Click to select; Left/Right wrap; Home/End select first/last; selected tab is bold, underlined and `aria-selected` |
| S / Stage | Hide review chrome, start a fresh rehearsal, retain a review snapshot |
| Escape / S / Exit stage | Restore review input, feedback, selected state, reveal and diagram state |
| F | Native fullscreen when supported; denied/unavailable requests are announced |
| N / Notes | Read notes on the same display; close before audience screen sharing |
| G | Open the 26-slide index in Review; Escape or Close returns focus to the presentation |
| L | In-place language switching |

Native fullscreen hides only the Stage and Notes toolbar buttons, removing their layout space and tab stops; they return on exit. The Fullscreen exit button remains available in Review, and **S** / **N** retain their existing behavior. Focus moves to the presentation if fullscreen hides the focused control. Stage continues to hide the entire toolbar as before.

Review and Stage share slide 4's exact progression: **inactive → all patterns and causal-chain stages active → context and evaluation applied → slide 5**. This takes exactly two interaction clicks; the third advances the slide. Previous reverses alignment, then deactivates the patterns before leaving; revisits and language switches retain progress. Stage resets both chain and alignment for rehearsal and restores both on exit. There are no dedicated slide 4 controls. Other diagrams are complete without extra clicks. Slide 2's generation sequence and slide 12's green collaboration animation start on entry, without controls or automatic slide advancement. Slide 2 uses native CSS animations, with no timers/listeners to accumulate on revisits; Stage and reduced-motion views show all four outputs complete. Slide 10's control-plane connections illuminate once on entry without a button; Stage, print and reduced-motion views show the connected final state. Slide 11's sequential handoffs also animate once on entry, without a replay control. Animations are finite and respect reduced-motion preferences. Slide 4's context/evaluation band retains its V2 vertical placement in review/Stage and unchanged Stage placement.

Reading view is removed, including automatic activation. Small viewports keep the normal scaled slide presentation and full-size toolbar/navigation controls. Stage exits back to the same presentation mode; notes and dialogs retain native scrolling.

For reliable fullscreen, open the presentation in a standalone browser. An embedded preview host can shrink its webview back to panel dimensions while the Fullscreen API still reports active; the deck correctly scales to that smaller viewport but cannot enlarge the host window. Native fullscreen navigation is covered by the browser checks, including all demo steps, slide changes, reverse, language switching and Stage restoration.

Slides 11 and 12 animate in both Review and Stage, including native fullscreen. Entering Stage or native fullscreen replays only the visible journey; navigating into either slide starts its normal finite sequence. Reduced motion and print show the completed coral/green states without animation. This uses the existing CSS animations and native animation playback, without timers, automatic navigation or viewport overrides. Spanish journey and context copy consistently uses **requerimientos** and **prototipos**; existing singular **Requerimiento** metric labels remain unchanged.

The form's native input, validation and submit keys never advance the presentation. Tab outside the form to resume presentation keys. Revisiting the first demo tab does not erase entered input. Reload resets the demo; entering Stage starts its own clean rehearsal, and exiting restores review. Use fictional input only.

Pilot 26 remains accessible from FAQ and the slide index; slide 12 has no pilot link. Entering from FAQ returns to FAQ (18). Definitions from 14 returns from 23 to 14; FAQ entry returns to FAQ. All eight FAQ answers have return links to FAQ, and Previous respects those origins. Direct definitions/pilot entry defaults to the related keynote slide; other answers default to FAQ. Closing the ten-metric dialog restores the opener and stays on the dashboard. Let's talk records the shared discussion's 600 seconds once; FAQ adds no extra allocation.

## Evidence boundaries

The form, six states, saved lesson and proposed workflow are pre-authored illustrations, not live AI, research findings or universal organizational history. Source, reason, scope, owner, version and review trigger remain visible; **user validation is pending**. A context package still requires integration, permissions, validation and human review.

All ten approximate comparisons remain unchanged. Design production rate is **~3–4/wk → ~1–2/wk**, a decline; **≈−2/wk** is a midpoint estimate, not an observed delta. The eight-week E2E cycle is team context, not the weekly denominator. Review effort increases **4h → 6h**. Neither is colored as an improvement. Records, sample sizes and methods have not been supplied; these are not validated outcomes, benchmarks or causal ROI. Definitions and collection caveats are in appendix 23 and the bilingual notes.

## Local font and license

Inter 4.1 variable upright WOFF2 supports weights 100–900, including the real intermediate weights used in the deck and Spanish accents. Italic styling is not used; synthesis is disabled. Primary and secondary text share Inter rather than falling back to the earlier system sans/monospace pairing.

- Official source: [rsms/inter v4.1](https://github.com/rsms/inter/tree/v4.1)
- Font: `fonts/InterVariable.woff2`, from `https://raw.githubusercontent.com/rsms/inter/v4.1/docs/font-files/InterVariable.woff2`
- License: `fonts/LICENSE.txt`, [SIL Open Font License 1.1](https://github.com/rsms/inter/blob/v4.1/LICENSE.txt)
- Font SHA-256: `693b77d4f32ee9b8bfc995589b5fad5e99adf2832738661f5402f9978429a8e3`

No runtime font download occurs. The 1600×900 slide hierarchy retains projection-sized content; reference metadata is smaller. Small screens scale the same slide canvas.

## Editing and validation

`index.html` owns English markup; `styles.css` owns presentation/Stage/print layout; `app.js` owns notes, evidence and interaction state. `spanish.js` contains matching static bindings and runtime translations; `language.js` switches them without remounting the form. When editing markup, update its translation targets and both language values. The checks reject stale bindings.

`speaker-notes.md` and `speaker-notes-es.md` are generated, not hand-edited:

```sh
node check.mjs --write-notes
node check.mjs
PLAYWRIGHT_MODULE=/path/to/existing/playwright node browser-check.cjs
```

The presentation has no package dependencies. Playwright is optional validation/export tooling, supplied externally. `SNAPSHOT_DIR=/absolute/artifact/path` captures screenshots and layout findings. Browser checks cover every slide in both languages at desktop and small-screen Review/Stage sizes; the 1000px toolbar; all six tabs; native form validation; forward/reverse navigation; language switching; Stage restoration; origin links; notes and duplicate IDs.

## Canonical PDFs

Separate resolved-state exports, **26 widescreen pages each**:

- [English PDF](ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_en.pdf)
- [Spanish PDF](ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_es.pdf)

Reproduce both only after passing the same browser checks:

```sh
PLAYWRIGHT_MODULE=/path/to/existing/playwright node browser-check.cjs --export-pdfs
```

The exporter reuses the established Stage print recipe, waits for local fonts, resolves diagrams, selects the demo's final reviewed state and reveals the closing answer. Interactive behavior remains in HTML. PDF links target actual slide anchors; the default pilot return is slide 12 and measurement return is slide 14. V1/V2 filenames are never overwritten.

Chromium may output a 675.12pt height rather than 675pt. The delivered files normalize that fractional page edge to exact **1200×675pt (16:9)** without scaling/rasterizing content. PDFKit on macOS can apply `.mediaBox` and `.cropBox` = `CGRect(x: 0, y: 0, width: 1200, height: 675)` to each page. Inspect rendered output after export or normalization, including embedded font weights, Spanish accents, dense definitions and all disclaimers.

The delivered exports contain 52 pages in total and 16 internal links per locale. Chromium embeds Inter's variable-font instances as Type 3 glyph subsets with Unicode mappings; their glyph programs are included, so the PDFs do not require Inter to be installed. The retained evaluation symbol also has an embedded fallback glyph. These are static presentation PDFs, not an interactive replacement for the HTML demo.

**Approved promotion:** V3 is the current presentation, not a pending review candidate. V1/V2 PDFs remain historical references; previous V3 review exports remain in Git history. Local promotion does not authorize a push or PR.
