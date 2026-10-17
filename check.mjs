import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const data = vm.runInNewContext(`${js.slice(0, js.indexOf("const slides ="))}; ({ keynoteCount, notes, metrics, lifecycle, pairLabels, pairEvidence, metricValue, metricDelta, metricChange });`);
const titles = [...html.matchAll(/<section class="slide[^"]*" id="slide-(\d+)"[^>]*data-title="([^"]+)"/g)];
if (process.argv.includes("--write-notes")) {
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

**Conferencia v2 · edición independiente en español estándar.** Fuente principal: el esquema facilitado «DesignOps as AI Infrastructure Presentation Outline ConfOps 2026», con el encargo, marcos, observaciones de revisión y preguntas frecuentes. Esta edición conserva el relato y el diseño de V2; no añade evidencia externa ni integraciones. Son 15 diapositivas principales, Preguntas y 7 apoyos: 23 en total.

Documento generado a partir de app.js. Edita allí las notas y ejecuta \`node check.mjs --write-notes\`; no edites este archivo generado.

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
  writeFileSync(new URL("./speaker-notes.md", import.meta.url), document);
}

const markdown = readFileSync(new URL("./speaker-notes.md", import.meta.url), "utf8");
assert.equal(data.keynoteCount, 15);
assert.equal(titles.length, 23, "15 keynote slides + Preguntas + 7 backups");
assert.deepEqual(titles.map(match => Number(match[1])), Array.from({ length: 23 }, (_, i) => i + 1), "Contiguous IDs match DOM order");
assert.equal((html.match(/class="slide backup/g) || []).length, 7);
assert.equal(titles[2][2], "Sobre mí");
assert(!html.includes('class="ai-label"') && !css.includes(".ai-label"), "Removed role AI labels and their styles stay absent");
assert(html.includes('Con IA se produce<br>en <em>todas partes.</em>'), "Slide 2 names AI in its heading");
assert.equal((html.match(/class="role"/g) || []).length, 4, "Four role groups remain");
assert.equal((html.match(/class="role-output"/g) || []).length, 4, "Four output groups remain");
const chain = html.match(/<ol class="causal-chain"[^>]*>([\s\S]*?)<\/ol>/)[1];
assert.deepEqual([...chain.matchAll(/<li[^>]*>(.*?)<\/li>/g)].map(match => match[1]), ["Más producción", "Más variación", "Más decisiones", "Más incoherencia"]);
assert.equal(data.notes[2].seconds, 30, "Speaker introduction has 30 seconds");
assert.equal(data.notes[14].seconds, 90, "Closing contributes 30 seconds to the speaker introduction");
const about = html.match(/<section class="slide about-slide"[\s\S]*?<\/section>/)?.[0];
assert(about, "Speaker introduction exists");
for (const text of ["Julian Alvarado", "Xbox Design Ops", "gerente sénior de programas", "uso responsable de la IA", "organizaciones creativas resilientes y centradas en las personas"]) {
  assert(about.includes(text), `Speaker content: ${text}`);
}
assert(!about.includes("[Your name]") && !about.includes("SPEAKER TEMPLATE"), "Supplied biography replaces text placeholders");
assert(!/<button|data-action|<input|<img/.test(about), "Speaker introduction stays static and text-only");
assert.match(titles[4][2], /Gobernar/);
assert.equal(titles[5][2], "Corrige el formulario. Conserva lo aprendido.");
assert(!html.includes("conflict-slide") && !css.includes("conflict-layout"), "Redundant slide and its styles are removed");
assert.equal(data.notes[5].seconds, 270, "Removed 90 seconds are assigned to the retained demo");
assert(!js.includes("example from slide 4"), "Demo introduces its own example");
assert.match(titles[15][2], /Preguntas/);
assert.match(titles[21][2], /memoria de la organización/);
assert.match(titles[22][2], /ciclo de vida del producto/);
assert.equal(data.notes.length, titles.length, "Every slide has presenter notes");
assert.equal(data.notes.slice(0, data.keynoteCount).reduce((total, note) => total + note.seconds, 0), 1200, "Main talk is exactly 20 minutes");
assert.equal(data.notes[data.keynoteCount].seconds, 600, "Preguntas is 10 minutes");
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
assert(data.metrics.find((metric) => metric.name === "Esfuerzo de revisión").pilot > data.metrics.find((metric) => metric.name === "Esfuerzo de revisión").baseline, "Review-cost trade-off remains visible");
const production = data.metrics.find(metric => metric.name === "Ritmo de producción de diseño");
assert.equal(JSON.stringify(production.baseline), "[3,4]");
assert.equal(JSON.stringify(production.pilot), "[1,2]");
assert.equal(data.metricValue(production, "baseline"), "~3–4/sem");
assert.equal(data.metricValue(production, "pilot"), "~1–2/sem");
assert.equal(data.metricDelta(production), -2);
assert.equal(data.metricChange(production), "≈−2/sem");
assert.equal(production.better, "higher", "A production-rate decline is not an improvement");
assert.equal(production.unit, "entregables aceptados / equipo con ciclo integral de 8 semanas");
assert(markdown.includes("≈−2/sem (estimación por puntos medios)"), "Exported comparison qualifies midpoint arithmetic");
assert.equal(data.lifecycle.length, 5);
for (const stage of data.lifecycle) assert.equal(stage.length, 6);
assert.equal(data.pairLabels.length, 6);
assert.equal(data.pairEvidence.length, 6);
assert.equal(data.pairEvidence[3], null, "Step 4 is the interactive revised form");
for (const step of [0, 1, 2, 4, 5]) {
  assert.equal(data.pairEvidence[step].entries.length, step < 3 ? 2 : 3);
  assert(data.pairEvidence[step].title && data.pairEvidence[step].verdict);
}
assert.match(JSON.stringify(data.pairEvidence[4]), /versión 1.*según el encargo.*líder de producto.*tras el piloto/, "Saved lesson retains version, source, owner, and review trigger");
assert.match(data.pairEvidence[4].verdict, /validación con usuarios pendiente/, "Saved lesson stays provisional at point of use");
const framework = html.match(/<section class="slide framework-slide"[\s\S]*?<\/section>/)[0];
assert.equal((framework.match(/<h3>/g) || []).length, 3);
assert.equal((framework.match(/<p>/g) || []).length, 3);
assert(!/<ul|pillar-number|framework-foundation/.test(framework), "Three questions, without competing lists");
assert(!/pair-steps|pair-people|pair-explanation|prototype-code|window-chrome/.test(html), "One demo surface, no permanent checklist or duplicate captions");
assert.match(html, /id="pair-step" role="status" aria-live="polite" aria-atomic="true"/, "Current step is announced atomically");
const pilot = html.match(/<section class="slide" id="slide-14"[\s\S]*?<\/section>/)[0];
assert.equal((pilot.match(/<article>/g) || []).length, 4);
assert.match(pilot, /<strong>Adoptar<\/strong>.*<strong>Revisar<\/strong>.*<strong>Detener<\/strong>/);
assert(!/<button|<b>|altitude-bar/.test(pilot), "Pilot timeline has no extra clicks or decorative counters");
for (const phrase of ["En el equipo", "En el área de producto", "En la empresa", "controles humanos", "antes del piloto"]) {
  assert(data.notes[13].body.includes(phrase), `Pilot operating guidance retained: ${phrase}`);
}
assert.match(data.pairEvidence[5].verdict, /La revisión continúa/, "Reuse never replaces evaluation");
for (const id of ["stage-toggle", "stage-exit", "stage-help"]) assert(ids.includes(id), `Stage control ${id} exists`);
assert.equal(data.notes.filter(note => /Momento de Escenario [123]:/.test(note.interaction)).length, 3, "Only three intentional stage build moments");
assert(!/closing-answer|data-action="closing"/.test(html + css + js), "Closing uses navigation, not a dedicated reveal control");
assert(markdown.includes("Presentación en Escenario y ensayo"), "Export includes stage instructions");
assert.match(html, /<html lang="es">/);
assert.deepEqual(JSON.parse(JSON.stringify(data.metrics.map(metric => [metric.baseline, metric.pilot, metric.max, metric.better]))), [
  [18, 11, 24, "lower"], [4, 6, 8, "context"], [78, 90, 100, "higher"], [25, 70, 100, "higher"],
  [1, 2, 4, "context"], [9, 6, 12, "lower"], [[3, 4], [1, 2], 4, "higher"], [35, 24, 100, "lower"],
  [6, 4, 10, "lower"], [28, 18, 100, "lower"]
], "All original metric values and interpretations are preserved");
for (const [name, content] of [["slides", html], ["notes and dynamic copy", js], ["exported notes", markdown], ["README", readFileSync(new URL("./README.md", import.meta.url), "utf8")]]) {
  assert(!/\b(?:BRIEF|AC|DEC|RULE)[-\u2010-\u2015]\d+\b/.test(content), `${name} explains the example without obsolete document identifiers`);
}
assert(css.includes("prefers-reduced-motion"));
assert.equal((html.match(/EXPERIMENTACIÓN INICIAL · VALORES APROXIMADOS/g) || []).length, 2, "Slide and detailed metrics retain the approximate-value qualification");
assert(!/\b(?:src|href)="https?:\/\//.test(html.replace(/<a\b[^>]*>/gi, "")), "No remote assets; outbound links are allowed");
assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|setInterval)\s*\(/.test(js), "No network or repeating timers");
new vm.Script(js, { filename: "app.js" });
console.log("PASS: 23 slides (15 keynote + Preguntas + 7 backups), 270-second demo, exact 20-minute keynote + 10-minute Preguntas, decision trace, synchronized notes, metrics, links, offline and motion contracts.");
