# DesignOps as AI Infrastructure

**Approved bilingual presentation (V3).** User-approved to replace V2 as the canonical presentation. Open `index.html`; use the English and Spanish PDFs linked below. Based on frozen bilingual V2 commit `e39ef62f1729553773fa4a4f097f5c8cdf33d138`, with its history and historical exports preserved.

The local, offline vanilla HTML/CSS/JavaScript presentation contains **23 slides: 14 keynote + Q&A + 8 appendices**. The keynote is 19 minutes 30 seconds after removing the 30-second About me slide; Q&A remains 10 minutes. V1 and both inherited V2 PDFs are preserved unchanged. The frozen V2 and standalone Spanish branches are not edited.

## Open the presentation

Open `index.html` directly in a modern desktop browser. No build, package installation, CDN, API key, AI service, or network connection is needed. Alternatively, run `python3 -m http.server 8080 --bind 127.0.0.1` here and open `http://127.0.0.1:8080`.

Spanish starts on fresh load and reload, including direct slide hashes. The single **ES / EN** toolbar button displays the target language; **L** also switches languages outside form fields, notes and dialogs, including in Stage. All slides, notes, menus, evidence, form feedback and accessible labels switch in place. Input, selected tabs, diagram states, the closing reveal and the Stage review snapshot survive switching. No language preference or user data is stored or sent.

Outbound LinkedIn and GitHub contact links are the only intended network use, when explicitly followed. The About me slide and its photos have been removed, along with the Q&A QR code.

## Approved V3 changes

Inter is used for both primary and secondary typography, including diagrams and context labels. Existing **coral/orange** highlights action changes and the selected demo tab; **cyan** carries shared structure. Existing green success/acceptance states retain their meaning. There is no toolbar version badge; all five toolbar controls remain on one row at 1000px in both languages.

| Slide | V3 treatment |
| --- | --- |
| 1 | Inter and existing palette; aligned capacity/coherence labels, matching captions and opening animation retained |
| 2 | Four disciplines separated by vertical rules, meaningful line icons and vertical semantic bullet lists; generation activates automatically on entry without a button |
| 3 | Cleaner branching diagram with V2's vertical context/evaluation band placement restored; fragmentation and alignment remain distinct |
| 4 | Three equal coral headings: what to use and how, context as the intelligence layer for right choices, and what is good enough; separated rather than boxed, not a sequential dependency model |
| 5 | Six persistent, accessible tabs, one content surface, and main Next progression; top-aligned headings, roomier vertical rhythm and a smaller neutral-grey counter across every tab; no Reset or duplicate Next |
| 6 | V2's stacked-concept composition and enclosed rubric restored by request, retaining V3 Inter, approved wording and original evaluation icon **◎**; judgment stays human |
| 7 | V2's learning-loop diagram restored without its progress button; complete cycle visible, with V2 Stage/print text equivalents and V3 Inter |
| 8 | People / Process / Systems explicitly connect current responsibilities with expanded AI scope |
| 9 | V2's original hub/spoke geometry and role-card positions, with one true AI/IA circle passing behind opaque role cards; accessible shared-layer summary |
| 10 | Before: simplified sequential handoffs, animated once on entry without a replay control |
| 11 | After: proposed shared purpose, synchronized collaboration and AI-assisted production; existing green animation starts on entry, without a replay control or pilot badge; link to pilot appendix 23 |
| 12 | Documentation inputs → reusable guidance outputs → packaged AI context, with provenance and caveats |
| 13 | Shared Baseline / Pilot / Change headings, grouped categories; detail/definition controls top-aligned beside the title; heading badge and footer question removed, while approximate values and evidence caveats remain |
| 14 | Main Next reveals the answer; next advance opens Q&A; reverse hides before moving back |
| 15 | Topic hierarchy, eight appendix links and coral contact actions; removed lead question stays removed |
| 16–22 | Existing backup content retained, with Inter and related consistency adjustments |
| 23 | Original 30-day pilot moved intact to appendix; separated stages and return to the originating slide |

The recent Spanish headings are retained, including **“Ejemplo: Conserva lo aprendido. (Evals en pequeña escala)”**, **“Una decisión informada”**, **“No te enfoques en el output, Aceleras el aprendizaje.”**, and **“Las mismas bases, un alcance actualizado.”** The after-journey heading retains the speaker's latest Spanish wording.

## Pacing and mapping

The former About me slide 3 is removed entirely. Former slides 4–24 shift down by one: paradox 3, demo 5, control plane 9, journeys 10/11, documentation 12, metrics 13, closing 14, Q&A 15 and appendices 16–23. Menus, notes, hashes and return links use this mapping; old numeric bookmarks now refer to the newly numbered slides.

| Slides | Narrative | Window |
| --- | --- | --- |
| 1–3 | Opening, distributed generation, paradox | 0:00–2:30 |
| 4–7 | Operating model, demo, evaluation, learning | 2:30–10:10 |
| 8–9 | Expanded responsibilities and control plane | 10:10–11:50 |
| 10 | Before: handoffs — 90 seconds | 11:50–13:20 |
| 11 | After: synchronized production — 105 seconds | 13:20–15:05 |
| 12–13 | Reusable guidance and measurement | 15:05–18:00 |
| 14 | Closing — 90 seconds | 18:00–19:30 |
| 15 | Q&A — 600 seconds | 19:30–29:30 |
| 16–23 | Optional appendices | Outside keynote |

The demo retains **270 seconds**, closing **90**, and the split journey **195**. Removing About me subtracts **30 seconds** without reallocating them; keynote total is **1,170 seconds**. These are rehearsal allocations, not automatic advancement.

## Presentation controls

| Control | Behavior |
| --- | --- |
| Main Next / Previous | Advance or reverse slide 3's chain/alignment, demo and closing states before changing slides |
| Right / Down / Page Down / Space | Same forward action; held keys do not skip builds |
| Left / Up / Page Up | Reverse a build before leaving the slide |
| Six demo tabs | Click to select; Left/Right wrap; Home/End select first/last; selected tab is bold, underlined and `aria-selected` |
| S / Stage | Hide review chrome, start a fresh rehearsal, retain a review snapshot |
| Escape / S / Exit stage | Restore review input, feedback, selected state, reveal and diagram state |
| F | Native fullscreen when supported; denied/unavailable requests are announced |
| N / Notes | Read notes on the same display; close before audience screen sharing |
| G / Slides | Open the 23-slide index |
| ES / EN, or L | In-place language switching |

Review and Stage share slide 3's exact progression: **inactive → all patterns and causal-chain stages active → context and evaluation applied → slide 4**. This takes exactly two interaction clicks; the third advances the slide. Previous reverses alignment, then deactivates the patterns before leaving; revisits and language switches retain progress. Stage resets both chain and alignment for rehearsal and restores both on exit. There are no dedicated slide 3 controls. Other diagrams are complete without extra clicks. Slide 2's generation sequence and slide 11's green collaboration animation start on entry, without controls or automatic slide advancement. Slide 2 uses native CSS animations, with no timers/listeners to accumulate on revisits; Stage and reduced-motion views show all four outputs complete. Slide 9's control-plane connections illuminate once on entry without a button; Stage, print and reduced-motion views show the connected final state. Slide 10's sequential handoffs also animate once on entry, without a replay control. Animations are finite and respect reduced-motion preferences. Slide 3's context/evaluation band retains its V2 vertical placement in review/Stage and unchanged Stage placement.

Reading view is removed, including automatic activation. Small viewports keep the normal scaled slide presentation and full-size toolbar/navigation controls. Stage exits back to the same presentation mode; notes and dialogs retain native scrolling.

For reliable fullscreen, open the presentation in a standalone browser. An embedded preview host can shrink its webview back to panel dimensions while the Fullscreen API still reports active; the deck correctly scales to that smaller viewport but cannot enlarge the host window. Native fullscreen navigation is covered by the browser checks, including all demo steps, slide changes, reverse, language switching and Stage restoration.

The form's native input, validation and submit keys never advance the presentation. Tab outside the form to resume presentation keys. Revisiting the first demo tab does not erase entered input. Reload resets the demo; entering Stage starts its own clean rehearsal, and exiting restores review. Use fictional input only.

The pilot reference on 11 returns from 23 to 11; entering from Q&A returns to Q&A. Definitions from 13 returns to 13, not prematurely to Q&A; Q&A entry returns to Q&A. Direct appendix entry defaults to the related keynote slide. The previous control also respects these appendix origins. Closing the ten-metric dialog restores the opener and stays on the dashboard.

## Evidence boundaries

The form, six states, saved lesson and proposed workflow are pre-authored illustrations, not live AI, research findings or universal organizational history. Source, reason, scope, owner, version and review trigger remain visible; **user validation is pending**. A context package still requires integration, permissions, validation and human review.

All ten approximate comparisons remain unchanged. Design production rate is **~3–4/wk → ~1–2/wk**, a decline; **≈−2/wk** is a midpoint estimate, not an observed delta. The eight-week E2E cycle is team context, not the weekly denominator. Review effort increases **4h → 6h**. Neither is colored as an improvement. Records, sample sizes and methods have not been supplied; these are not validated outcomes, benchmarks or causal ROI. Definitions and collection caveats are in appendix 20 and the bilingual notes.

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

Separate resolved-state exports, **23 widescreen pages each**:

- [English PDF](ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_en.pdf)
- [Spanish PDF](ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_es.pdf)

Reproduce both only after passing the same browser checks:

```sh
PLAYWRIGHT_MODULE=/path/to/existing/playwright node browser-check.cjs --export-pdfs
```

The exporter reuses the established Stage print recipe, waits for local fonts, resolves diagrams, selects the demo's final reviewed state and reveals the closing answer. Interactive behavior remains in HTML. PDF links target actual slide anchors; the default pilot return is slide 11 and measurement return is slide 13. V1/V2 filenames are never overwritten.

Chromium may output a 675.12pt height rather than 675pt. The delivered files normalize that fractional page edge to exact **1200×675pt (16:9)** without scaling/rasterizing content. PDFKit on macOS can apply `.mediaBox` and `.cropBox` = `CGRect(x: 0, y: 0, width: 1200, height: 675)` to each page. Inspect rendered output after export or normalization, including embedded font weights, Spanish accents, dense definitions and all disclaimers.

The delivered exports contain 46 pages in total and 17 internal links per locale. Chromium embeds Inter's variable-font instances as Type 3 glyph subsets with Unicode mappings; their glyph programs are included, so the PDFs do not require Inter to be installed. The retained evaluation symbol also has an embedded fallback glyph. These are static presentation PDFs, not an interactive replacement for the HTML demo.

**Approved promotion:** V3 is the current presentation, not a pending review candidate. V1/V2 PDFs remain historical references; previous V3 review exports remain in Git history. Local promotion does not authorize a push or PR.
