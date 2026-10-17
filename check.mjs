import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const data = vm.runInNewContext(`${js.slice(0, js.indexOf("const slides ="))}; ({ keynoteCount, notes, metrics, lifecycle, pairLabels, pairEvidence, metricValue, metricDelta, metricChange });`);
const titles = [...html.matchAll(/<section class="slide[^"]*" id="slide-(\d+)"[^>]*data-title="([^"]+)"/g)];
const catalogSource = readFileSync(new URL("./spanish.js", import.meta.url), "utf8");
const languageSource = readFileSync(new URL("./language.js", import.meta.url), "utf8");
const catalog = vm.runInNewContext(`${catalogSource}; spanish;`);
const spanishData = vm.runInNewContext(`${catalogSource}
${languageSource.slice(0, languageSource.indexOf("const translatedElements"))}
${js.slice(0, js.indexOf("const slides ="))}
language = "es";
translateData({ keynoteCount, notes, metrics, lifecycle, pairLabels, pairEvidence, metricValue, metricDelta, metricChange });`);
const spanishTitles = titles.map(match => [match[0], match[1], catalog.copy.find(item => item.selector === `#slide-${match[1]}`).attributes["data-title"][1]]);
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

The same index.html includes English and Spanish. Use the toolbar's Español / English button, or L outside forms, notes, and dialogs (including on Stage), to switch without losing the current slide or demo progress. English starts on reload. Spanish notes are in speaker-notes-es.md; update their translations in spanish.js before generating both documents with the command above.

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
  exportSpanishNotes(spanishData, spanishTitles);
}
function exportSpanishNotes(data, titles) {
  let elapsed = 0;
  const clock = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  const sections = data.notes.map((note, index) => {
    const timing = index < data.keynoteCount ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} (${note.seconds} segundos)` : index === data.keynoteCount ? "10 minutos de preguntas, fuera del tiempo de conferencia" : "Apoyo opcional, fuera del tiempo de conferencia";
    if (index < data.keynoteCount) elapsed += note.seconds;
    return `## ${index + 1}. ${titles[index][2]}

**Tiempo:** ${timing}

**Idea clave:** ${note.takeaway}

**Concepto visual:** ${note.visual}

**Interacción / revelado:** ${note.interaction}

**Notas del ponente:** ${note.body}

**Transición:** ${note.transition}`;
  });
  const metricTable = data.metrics.map(metric => `| ${metric.name} | ${data.metricValue(metric, "baseline")} | ${data.metricValue(metric, "pilot")} | ${data.metricChange(metric)}${Array.isArray(metric.baseline) ? " (estimación por puntos medios)" : ""} | ${metric.unit} | ${metric.group === 0 ? "Anticipado / proceso" : "Resultado del flujo"} |`).join("\n");
  const document = `# DesignOps como infraestructura de IA

Gobernanza, sistemas y el nuevo papel de DesignOps en los equipos de producto

**Conferencia v2 · versión española de la presentación bilingüe.** Fuente principal: el esquema facilitado «DesignOps as AI Infrastructure Presentation Outline ConfOps 2026», con el encargo, marcos, observaciones de revisión y preguntas frecuentes. Esta edición conserva el relato y el diseño de V2; no añade evidencia externa ni integraciones. Son 15 diapositivas principales, Preguntas y 7 apoyos: 23 en total.

Documento generado a partir de app.js y spanish.js. Edita allí las notas y ejecuta \`node check.mjs --write-notes\`; no edites este archivo generado.

El mismo index.html reúne inglés y español. El botón Español / English de la barra, o L fuera del formulario, las notas y los diálogos (también en Escenario), cambia el idioma sin perder la diapositiva ni el paso de la demo. Al recargar se inicia en inglés. Las notas inglesas están en speaker-notes.md. El comando anterior genera ambos documentos.

## Ritmo

| Acto | Diapositivas | Intervalo | Duración |
| --- | --- | --- | --- |
| I: Presentación y paradoja de la aceleración | 1–4 | 0:00–3:00 | 3 minutos |
| II: La solución y la lección guardada | 5–8 | 3:00–10:40 | 7 minutos 40 segundos |
| III: Hacer repetible el modelo operativo | 9–14 | 10:40–18:30 | 7 minutos 50 segundos |
| IV: Cierre | 15 | 18:30–20:00 | 1 minuto 30 segundos |
| Preguntas | 16, con 17–23 opcionales | 20:00–30:00 | 10 minutos |

El tiempo orienta el ensayo; no hay avance automático. Sobre mí ocupa 1:30–2:00 (30 segundos); resume el papel del ponente sin leer toda la biografía. El cierre conserva 90 segundos. La demo de seis pasos ocupa 4:00–8:30 (270 segundos). Los 90 segundos de la antigua diapositiva de resumen se dedican a pausas: 30 para comprender la necesidad bloqueada, 30 para validación y teclado, y 30 para responsable y revisión de la lección. No se añaden pasos ni ejercicios. Total: 1.200 segundos de conferencia y 600 de preguntas.

## Presentación en Escenario y ensayo

Pulsa **Escenario** o **S** antes de compartir. Se cierran notas y diálogos y se ocultan las herramientas de revisión. **F** activa pantalla completa, opcional. Solo hay tres secuencias: diapositiva 4, fragmentación y alineación; 6, seis pasos; 15, pregunta y respuesta. Los demás diagramas se muestran completos.

**Derecha / Abajo / Av Pág / Espacio** avanza un paso antes de cambiar de diapositiva. **Izquierda / Arriba / Re Pág** retrocede un paso antes de volver. Los pasos se conservan al regresar. Inicio / Fin salta a primera / última. Tab entra en el formulario; las teclas del campo y del botón conservan su comportamiento. Sal con Tab para navegar. Escape, S, **Salir de Escenario · Esc** o salir de pantalla completa devuelve a revisión sin cambiar la diapositiva. Escape funciona dentro del formulario; N/G no abren notas ni índice en Escenario.

Al salir se restauran pasos de revisión, datos y respuesta del formulario, selecciones y preferencia de Lectura. Notas y diálogos permanecen cerrados. Entrar otra vez inicia un ensayo nuevo. Usa solo datos ficticios: el formulario no guarda ni envía nada.

Escenario mantiene la jerarquía para proyección: texto principal y diagramas comprobados desde 18,4 px efectivos a 1280×720 y 24,15 px a 1680×1080. Etiquetas de referencia, números y metadatos pueden ser menores. Usa Lectura para consultar en pantallas pequeñas. Las diapositivas 5, 6 y 14 conservan la limpieza de V2: tres preguntas, una superficie por paso y cuatro resultados de piloto. Las bases operativas y responsabilidades por ámbito permanecen en estas notas.

## Decisión ilustrativa y límites

El alta individual es un supuesto, no un hallazgo de investigación. El formulario exige inicialmente una invitación; diseño e ingeniería la trasladan después del alta. DesignOps conserva la razón, fuente, alcance, versión, responsable de producto y revisión tras el piloto o cambio del encargo. El siguiente formulario cumple el requisito, pero aún requiere comprobar accesibilidad y resultados con usuarios.

Todos los estados, decisiones y atribuciones a IA están preparados de antemano. No son IA en directo, políticas reales ni mejoras medidas. La validación con usuarios está pendiente. Los expertos de producto siguen decidiendo si la guía y cada resultado son adecuados.

${sections.join("\n\n---\n\n")}

## Experimentación inicial: valores aproximados

**Experimentación inicial · valores aproximados.** No son mediciones exactas, resultados validados, referencias de rendimiento, evidencia causal ni previsiones. Se muestran referencia, piloto y cambio juntos; los porcentajes usan puntos porcentuales.

| Métrica | Referencia | Piloto | Cambio | Unidad / contexto | Categoría |
| --- | --- | --- | --- | --- | --- |
${metricTable}

El ritmo de producción pasa de **~3–4/sem a ~1–2/sem**. **≈−2/sem** se calcula con puntos medios (1,5 − 3,5), no como observación independiente. Disminuye y no se presenta como mejora. Son entregables aceptados por semana en un equipo cuyo ciclo integral dura 8 semanas: no se divide por ocho ni se infiere un total del ciclo.

Las otras nueve comparaciones conservan los valores sintéticos que el ponente considera próximos a su experimentación informal. No se han facilitado registros, muestras ni métodos. La revisión aumenta. Las categorías anticipado/proceso y resultado son operativas para este flujo, no universales. No se aportan resultados reales de clientes.

## Definiciones y recogida

- **Encargo → concepto validado:** mediana de días desde el encargo registrado hasta la aceptación del revisor y el umbral acordado de evidencia de usuarios. Un prototipo visualmente terminado no basta.
- **Producción:** entregables aceptados por equipo y semana, con tipo, alcance, dotación y criterios comparables.
- **Esfuerzo:** horas-persona por concepto aceptado; producción y revisión por separado, incluidas crítica, reevaluación y validación. No equivale a días transcurridos.
- **Retrabajo:** porcentaje de entregables revisados que requieren cambios importantes. Define «importante» antes y registra las razones.
- **Cumplimiento:** comprobaciones aplicables de tokens, componentes y patrones superadas entre todas las aplicables. Registra exclusiones y muestreo.
- **Defectos:** defectos abiertos sin duplicados por 10 pantallas revisadas y su gravedad. Combina pruebas manuales y automáticas; el recuento no demuestra conformidad de accesibilidad.
- **Divergencia:** instancias auditadas que incumplen el diseño aprobado entre todas las de la muestra definida.
- **Experimentación:** experimentos terminados por semana con interpretación y decisión registradas, no solo lanzamientos.
- **Reutilización:** entregables que citan contexto vigente y aprobado entre todos los revisados. Citar no demuestra uso adecuado.
- **Resultados de clientes:** recoger aparte éxito en tareas y fricciones observadas en tareas comparables. Esta presentación no los inventa.

Documenta muestra, dispersión, dotación, complejidad, exclusiones y límites de recogida. Un piloto observacional pequeño no establece causalidad. Fija criterios de adoptar, revisar y detener antes de ver resultados. Aplica las políticas de privacidad y acceso.

## Cobertura y decisiones editoriales

La tesis se conserva en 1–2, 4 y 15; la biografía en 3; la decisión en 6; los criterios de evaluación en 7; la memoria en 8 y 22; fundamentos y funciones en 9, 14 y 18; plano de control y responsables en 10 y 17; recorrido del cliente y MMM en 11; siete transformaciones y prompts canónicos en 12 y 20; medición en 13 y 21; sistema preparado para IA en 19; ciclo de vida en 23. Gobernar / Contexto / Evaluar sigue siendo el modelo central de 5. Gestión responsable, sistemas y habilitación lo sostienen, no lo sustituyen.

El trabajo tradicional se amplía, no desaparece. El flujo propuesto es una hipótesis. Las menciones de herramientas no implican integraciones: la demo usa HTML/CSS local. No se reproduce como hecho una atribución externa sin verificar ni se transforman recursos retóricos en estadísticas. Las capas y el ciclo quedan en apoyos. Se mantiene la presentación del ponente solo con texto.

## Exportación y entrega

El README contiene el comando reproducible del PDF español, con 23 páginas de 1200×675 puntos, 16:9, usando Escenario y estados resueltos. Los PDF ingleses heredados no se modifican. El PDF no sustituye las seis interacciones ni estas notas. Para una futura conversión a PowerPoint, conserva texto editable y vectores, pasos nativos de aparición, nombres de escenarios y límites de la evidencia. Sustituye el formulario por seis fotogramas y un enlace al HTML; no atribuyas al PDF ni a PowerPoint un formulario funcional.
`;
  writeFileSync(new URL("./speaker-notes-es.md", import.meta.url), document);
}


const markdown = readFileSync(new URL("./speaker-notes.md", import.meta.url), "utf8");
const spanishMarkdown = readFileSync(new URL("./speaker-notes-es.md", import.meta.url), "utf8");
for (const [index, note] of spanishData.notes.entries()) {
  assert.equal(note.seconds, data.notes[index].seconds, "Language never changes timing");
  for (const key of ["takeaway", "visual", "interaction", "body", "transition"]) {
    assert.notEqual(note[key], data.notes[index][key], `Spanish notes translated: ${index + 1} ${key}`);
    assert(spanishMarkdown.includes(note[key]), `Spanish export synchronized: ${index + 1} ${key}`);
  }
  assert(spanishMarkdown.includes(`## ${index + 1}. ${spanishTitles[index][2]}`));
}
for (const [index, metric] of spanishData.metrics.entries()) {
  for (const key of ["baseline", "pilot", "group", "max", "better"]) {
    assert.equal(JSON.stringify(metric[key]), JSON.stringify(data.metrics[index][key]), `Unchanged metric ${index} ${key}`);
  }
}
assert.equal(spanishData.metricChange(spanishData.metrics[6]), "≈−2/sem");
assert.match(spanishData.pairEvidence[4].verdict, /validación con usuarios pendiente/);
assert.match(spanishData.pairEvidence[5].verdict, /revisión continúa/);
assert.equal(new Set(catalog.copy.map(item => item.selector)).size, catalog.copy.length, "Static translations have unique targets");
for (const [key, value] of Object.entries(catalog.messages)) {
  assert.equal([...key.matchAll(/\{\d+\}/g)].map(match => match[0]).sort().join(), [...value.matchAll(/\{\d+\}/g)].map(match => match[0]).sort().join(), `Matching template slots: ${key}`);
}
for (const match of js.matchAll(/\bt\(("(?:[^"\\]|\\.)*")\)/g)) {
  const key = JSON.parse(match[1]);
  assert(Object.hasOwn(catalog.messages, key), `Runtime translation exists: ${key}`);
}
for (const source of [catalogSource, languageSource, js]) {
  assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage)\b/.test(source), "Offline localization never persists personal data");
  new vm.Script(source);
}
assert(html.indexOf('src="spanish.js"') < html.indexOf('src="language.js"') && html.indexOf('src="language.js"') < html.indexOf('src="app.js"'), "Ordered classic scripts work on file://");
assert.equal(data.keynoteCount, 15);
assert.equal(titles.length, 23, "15 keynote slides + Q&A + 7 backups");
assert.deepEqual(titles.map(match => Number(match[1])), Array.from({ length: 23 }, (_, i) => i + 1), "Contiguous IDs match DOM order");
assert.equal((html.match(/class="slide backup/g) || []).length, 7);
assert.equal(titles[2][2], "About me");
assert(!html.includes('class="ai-label"') && !css.includes(".ai-label"), "Removed role AI labels and their styles stay absent");
assert(html.includes('The AI production floor<br>is <em>everywhere.</em>'), "Slide 2 names AI in its heading");
assert.equal((html.match(/class="role"/g) || []).length, 4, "Four role groups remain");
assert.equal((html.match(/class="role-output"/g) || []).length, 4, "Four output groups remain");
const chain = html.match(/<ol class="causal-chain"[^>]*>([\s\S]*?)<\/ol>/)[1];
assert.deepEqual([...chain.matchAll(/<li[^>]*>(.*?)<\/li>/g)].map(match => match[1]), ["More output", "More variation", "More decisions", "More inconsistency"]);
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
