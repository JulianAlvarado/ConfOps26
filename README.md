# DesignOps as AI Infrastructure

**V3 — independent bilingual review candidate, awaiting user approval.** Based on frozen bilingual V2 commit `e39ef62f1729553773fa4a4f097f5c8cdf33d138`. This branch is not integrated into V2 or `main`. Do not merge, push, or open a PR until explicitly authorized.

The local, offline vanilla HTML/CSS/JavaScript presentation contains **24 slides: 15 keynote + Q&A + 8 appendices**. The keynote remains 20 minutes; Q&A remains 10 minutes. V1 and both inherited V2 PDFs are preserved unchanged. The frozen V2 and standalone Spanish branches are not edited.

## Open V3

Open `index.html` directly in a modern desktop browser. No build, package installation, CDN, API key, AI service, or network connection is needed. Alternatively, run `python3 -m http.server 8080 --bind 127.0.0.1` here and open `http://127.0.0.1:8080`.

English starts on reload. The single **ES / EN** toolbar button displays the target language; **L** also switches languages outside form fields, notes and dialogs, including in Stage. All slides, notes, menus, evidence, form feedback and accessible labels switch in place. Input, selected tabs, diagram states, the closing reveal and the Stage review snapshot survive switching. No language preference or user data is stored or sent.

Outbound LinkedIn and GitHub contact links are the only intended network use, when explicitly followed. No photos have been retrieved: slide 3 contains three deliberately neutral, localized placeholders for the photos the speaker will supply.

## Review changes

Inter is used for both primary and secondary typography, including diagrams and context labels. Existing **coral/orange** highlights action changes and the selected demo tab; **cyan** carries shared structure. Existing green success/acceptance states retain their meaning. There is no toolbar version badge; all six toolbar controls remain on one row at 1000px in both languages.

| Slide | V3 treatment |
| --- | --- |
| 1 | Inter and existing palette; aligned capacity/coherence labels, matching captions and opening animation retained |
| 2 | Four disciplines separated by vertical rules, meaningful line icons and horizontal deliverable tags |
| 3 | 50/50 neutral collage placeholders and condensed supplied biography; full biography retained in notes |
| 4 | Cleaner branching diagram with a horizontal shared-context boundary; fragmentation and alignment remain distinct |
| 5 | Three equal questions, separated rather than boxed; not a sequential dependency model |
| 6 | Six persistent, accessible tabs, one content surface, and main Next progression; no Reset or duplicate Next |
| 7 | Alternatives at equal visual weight, shared rubric and original evaluation icon **◎**; judgment stays human |
| 8 | Entire cycle visible without a progress button, including return to shared guidance |
| 9 | People / Process / Systems explicitly connect current responsibilities with expanded AI scope |
| 10 | AI-assisted work appears once as a shared layer; distinct actors keep responsibility and DesignOps connects them |
| 11 | Before: simplified sequential handoffs |
| 12 | After: proposed shared purpose, synchronized collaboration and AI-assisted production; link to pilot appendix 24 |
| 13 | Documentation inputs → reusable guidance outputs → packaged AI context, with provenance and caveats |
| 14 | Shared Baseline / Pilot / Change headings, grouped categories; all ten measures and definitions remain accessible |
| 15 | Main Next reveals the answer; next advance opens Q&A; reverse hides before moving back |
| 16 | Topic hierarchy, eight appendix links and coral contact actions; removed lead question stays removed |
| 17–23 | Existing backup content retained, with Inter and related consistency adjustments |
| 24 | Original 30-day pilot moved intact to appendix; separated stages and return to the originating slide |

The recent Spanish headings are retained, including **“Ejemplo: Corrige el formulario. Conserva lo aprendido.”**, **“Una decisión informada”**, **“No te enfoques en el output, Aceleras el aprendizaje.”**, and **“Las mismas bases, un alcance actualizado.”** The after-journey heading retains the speaker's latest Spanish wording.

## Pacing and mapping

Slides 1–10, closing 15, Q&A 16 and backups 17–23 keep their identifiers. Original 11 becomes 11/12; original documentation 12 becomes 13; metrics 13 becomes 14; pilot 14 becomes appendix 24. Menus, notes, hashes and return links use the new mapping.

| Slides | Narrative | Window |
| --- | --- | --- |
| 1–4 | Opening, distributed generation, biography, paradox | 0:00–3:00 |
| 5–8 | Operating model, demo, evaluation, learning | 3:00–10:40 |
| 9–10 | Expanded responsibilities and control plane | 10:40–12:20 |
| 11 | Before: handoffs — 90 seconds | 12:20–13:50 |
| 12 | After: synchronized production — 105 seconds | 13:50–15:35 |
| 13–14 | Reusable guidance and measurement | 15:35–18:30 |
| 15 | Closing — 90 seconds | 18:30–20:00 |
| 16 | Q&A — 600 seconds | 20:00–30:00 |
| 17–24 | Optional appendices | Outside keynote |

The removed keynote pilot's 135 seconds join the original journey's 60 seconds, giving 195 seconds across the split. The demo retains **270 seconds**, biography **30**, closing **90**, and keynote total **1,200**. These are rehearsal allocations, not automatic advancement.

## Presentation controls

| Control | Behavior |
| --- | --- |
| Main Next / Previous | Advance or reverse the demo/closing state before changing slides |
| Right / Down / Page Down / Space | Same forward action; held keys do not skip builds |
| Left / Up / Page Up | Reverse a build before leaving the slide |
| Six demo tabs | Click to select; Left/Right wrap; Home/End select first/last; selected tab is bold, underlined and `aria-selected` |
| Reading view | Reflowed, scrollable version; native vertical/Page/Home/End/Space keys scroll; Right and main Next still advance |
| S / Stage | Hide review chrome, start a fresh rehearsal, retain a review snapshot |
| Escape / S / Exit stage | Restore review input, feedback, selected state, reveal and Reading preference |
| F | Native fullscreen when supported; denied/unavailable requests are announced |
| N / Notes | Read notes on the same display; close before audience screen sharing |
| G / Slides | Open the 24-slide index |
| ES / EN, or L | In-place language switching |

Stage has only three builds: slide 4 fragmentation/alignment, slide 6's six states, and slide 15's answer. Other diagrams are complete without extra clicks. Optional generation, connection and journey replay controls remain in review. Animations are finite and respect reduced-motion preferences.

The form's native input, validation and submit keys never advance the presentation. Tab outside the form to resume presentation keys. Revisiting the first demo tab does not erase entered input. Reload resets the demo; entering Stage starts its own clean rehearsal, and exiting restores review. Use fictional input only.

The pilot reference on 12 returns from 24 to 12; entering from Q&A returns to Q&A. Definitions from 14 returns to 14, not prematurely to Q&A; Q&A entry returns to Q&A. Direct appendix entry defaults to the related keynote slide. The previous control also respects these appendix origins. Closing the ten-metric dialog restores the opener and stays on the dashboard.

## Evidence boundaries

The form, six states, saved lesson and proposed workflow are pre-authored illustrations, not live AI, research findings or universal organizational history. Source, reason, scope, owner, version and review trigger remain visible; **user validation is pending**. A context package still requires integration, permissions, validation and human review.

All ten approximate comparisons remain unchanged. Design production rate is **~3–4/wk → ~1–2/wk**, a decline; **≈−2/wk** is a midpoint estimate, not an observed delta. The eight-week E2E cycle is team context, not the weekly denominator. Review effort increases **4h → 6h**. Neither is colored as an improvement. Records, sample sizes and methods have not been supplied; these are not validated outcomes, benchmarks or causal ROI. Definitions and collection caveats are in appendix 21 and the bilingual notes.

## Local font and license

Inter 4.1 variable upright WOFF2 supports weights 100–900, including the real intermediate weights used in the deck and Spanish accents. Italic styling is not used; synthesis is disabled. Primary and secondary text share Inter rather than falling back to the earlier system sans/monospace pairing.

- Official source: [rsms/inter v4.1](https://github.com/rsms/inter/tree/v4.1)
- Font: `fonts/InterVariable.woff2`, from `https://raw.githubusercontent.com/rsms/inter/v4.1/docs/font-files/InterVariable.woff2`
- License: `fonts/LICENSE.txt`, [SIL Open Font License 1.1](https://github.com/rsms/inter/blob/v4.1/LICENSE.txt)
- Font SHA-256: `693b77d4f32ee9b8bfc995589b5fad5e99adf2832738661f5402f9978429a8e3`

No runtime font download occurs. The 1600×900 slide hierarchy retains projection-sized content; reference metadata is smaller. Reading view is the accessible reference surface for small screens.

## Editing and validation

`index.html` owns English markup; `styles.css` owns presentation/Reading/Stage/print layout; `app.js` owns notes, evidence and interaction state. `spanish.js` contains matching static bindings and runtime translations; `language.js` switches them without remounting the form. When editing markup, update its translation targets and both language values. The checks reject stale bindings.

`speaker-notes.md` and `speaker-notes-es.md` are generated, not hand-edited:

```sh
node check.mjs --write-notes
node check.mjs
PLAYWRIGHT_MODULE=/path/to/existing/playwright node browser-check.cjs
```

The presentation has no package dependencies. Playwright is optional validation/export tooling, supplied externally. `SNAPSHOT_DIR=/absolute/artifact/path` captures screenshots and layout findings. Browser checks cover every slide in both languages at review, Reading and Stage sizes; the 1000px toolbar; all six tabs; native form validation; forward/reverse navigation; language switching; Stage restoration; origin links; notes and duplicate IDs.

## V3 review PDFs

Separate resolved-state exports, **24 widescreen pages each**:

- `ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v3_review_en.pdf`
- `ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v3_review_es.pdf`

Reproduce both only after passing the same browser checks:

```sh
PLAYWRIGHT_MODULE=/path/to/existing/playwright node browser-check.cjs --export-pdfs
```

The exporter reuses the established Stage print recipe, waits for local fonts, resolves diagrams, selects the demo's final reviewed state and reveals the closing answer. Interactive behavior remains in HTML. PDF links target actual slide anchors; the default pilot return is slide 12 and measurement return is slide 14. V1/V2 filenames are never overwritten.

Chromium may output a 675.12pt height rather than 675pt. The delivered files normalize that fractional page edge to exact **1200×675pt (16:9)** without scaling/rasterizing content. PDFKit on macOS can apply `.mediaBox` and `.cropBox` = `CGRect(x: 0, y: 0, width: 1200, height: 675)` to each page. Inspect rendered output after export or normalization, including embedded font weights, Spanish accents, dense definitions and all disclaimers.

The delivered exports were rendered and inspected across all 48 pages. Each has 17 internal links. Chromium embeds Inter's variable-font instances as Type 3 glyph subsets with Unicode mappings; their glyph programs are included, so the PDFs do not require Inter to be installed. The retained evaluation symbol also has an embedded fallback glyph. These are static review PDFs, not an interactive replacement for the HTML demo.

**Approval boundary:** these assets are a local V3 review candidate. Photos and final design approval remain pending. Do not automatically integrate this candidate into the principal version.
