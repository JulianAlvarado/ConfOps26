import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const read = file => readFileSync(new URL(file, import.meta.url), "utf8");
const html = read("index.html");
const css = read("styles.css");
const js = read("app.js");
const catalogSource = read("spanish.js");
assert(!/\balta\b/i.test(catalogSource), "Spanish slide and runtime terminology uses setup");
const languageSource = read("language.js");
const prefix = js.slice(0, js.indexOf("const slides ="));
const data = vm.runInNewContext(`${prefix}; ({ keynoteCount, notes, metrics, lifecycle, pairLabels, pairEvidence, metricValue, metricDelta, metricChange });`);
const catalog = vm.runInNewContext(`${catalogSource}; spanish;`);
const spanishData = vm.runInNewContext(`${catalogSource}
${languageSource.slice(0, languageSource.indexOf("const translatedElements"))}
${prefix}
language = "es";
translateData({ keynoteCount, notes, metrics, lifecycle, pairLabels, pairEvidence, metricValue, metricDelta, metricChange });`);
const titles = [...html.matchAll(/<section class="slide[^"]*" id="slide-(\d+)"[^>]*data-title="([^"]+)"/g)].map(match => match[2].replaceAll("&amp;", "&").replaceAll("&quot;", '"'));
const spanishTitles = titles.map((_, index) => catalog.copy.find(item => item.selector === `#slide-${index + 1}`).attributes["data-title"][1]);
const clock = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

function notesDocument(data, titles, es) {
  let elapsed = 0;
  const sections = data.notes.map((note, index) => {
    const timing = index < data.keynoteCount ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} (${note.seconds} ${es ? "segundos" : "seconds"})`
      : index === data.keynoteCount ? es ? "10 minutos de preguntas, fuera de la conferencia" : "10-minute Q&A, outside keynote timing"
      : es ? "Apéndice opcional, fuera de la conferencia" : "Optional appendix, outside keynote timing";
    if (index < data.keynoteCount) elapsed += note.seconds;
    const labels = es ? ["Idea clave", "Concepto visual", "Interacción", "Notas del ponente", "Transición"] : ["Takeaway", "Visual concept", "Interaction", "Speaker notes", "Transition"];
    return `## ${index + 1}. ${titles[index]}\n\n**${es ? "Tiempo" : "Timing"}:** ${timing}\n\n` +
      ["takeaway", "visual", "interaction", "body", "transition"].map((key, i) => `**${labels[i]}:** ${note[key]}`).join("\n\n");
  });
  const metricTable = data.metrics.map(metric => `| ${metric.name} | ${data.metricValue(metric, "baseline")} | ${data.metricValue(metric, "pilot")} | ${data.metricChange(metric)}${Array.isArray(metric.baseline) ? es ? " (estimación por puntos medios)" : " (midpoint estimate)" : ""} | ${metric.unit} |`).join("\n");
  return `# ${es ? "DesignOps como infraestructura de IA" : "DesignOps as AI Infrastructure"}

**${es ? "Presentación bilingüe aprobada (V3), versión principal que sustituye a V2." : "Approved bilingual presentation (V3), the canonical version replacing V2."}**

${es ? "Basada en V2 bilingüe congelada" : "Based on frozen bilingual V2"} \`e39ef62f1729553773fa4a4f097f5c8cdf33d138\`.
${es ? "15 diapositivas principales + Preguntas + 8 apéndices = 24. Inter local, bajo licencia OFL. Biografía restaurada en la posición 3 con placeholders neutrales." : "15 keynote slides + Q&A + 8 appendices = 24. Local Inter under OFL. About me restored at position 3 with neutral placeholders."}

${es ? "Generado desde app.js y spanish.js mediante" : "Generated from app.js and spanish.js with"} \`node check.mjs --write-notes\`.

## ${es ? "Ritmo" : "Pacing"}

| ${es ? "Diapositivas" : "Slides"} | ${es ? "Intervalo" : "Window"} |
| --- | --- |
| 1–4 | 0:00–3:00 |
| 5–8 | 3:00–10:40 |
| 9–10 | 10:40–12:20 |
| 11 (${es ? "antes" : "before"}) | 12:20–13:50 |
| 12 (${es ? "después" : "after"}) | 13:50–15:35 |
| 13–14 | 15:35–18:30 |
| 15 | 18:30–20:00 |
| 16 | 20:00–30:00 |
| 17–24 | ${es ? "Opcionales" : "Optional"} |

${es ? "La demo conserva 270 segundos; cierre, 90; preguntas, 600. El piloto está en el apéndice 24. El recorrido dividido conserva 90 segundos antes + 105 después. La biografía recupera sus 30 segundos: total de conferencia, 1.200 segundos." : "The demo retains 270 seconds; closing, 90; Q&A, 600. The pilot is in appendix 24. The split journey retains 90 seconds before + 105 after. The biography restores its 30 seconds: total keynote, 1,200 seconds."}

## ${es ? "Escenario y revisión" : "Stage delivery and rehearsal"}

${es ? "S abre Escenario; F activa pantalla completa opcional; Escape o S restaura revisión. Las flechas avanzan o retroceden la cadena y la alineación de la diapositiva 4, la demo y el cierre antes de cambiar de diapositiva, tanto en revisión como en Escenario. Las seis pestañas muestran el recorrido completo; no hay Reiniciar ni Siguiente duplicado. Las teclas nativas del formulario no navegan. Inicio/Fin y flechas dentro de las pestañas seleccionan estados. El botón principal Siguiente recorre la demo. Cambiar de idioma con ES/EN o L conserva el estado y los datos locales; L no intercepta escritura, notas ni diálogos. Al salir de Escenario se restaura el estado de revisión. La presentación se escala en pantallas pequeñas. Nada se guarda ni envía." : "S enters Stage; F optionally enters fullscreen; Escape or S restores review. Arrow keys advance or reverse slide 4's chain and alignment, demo and closing builds before changing slides, in both review and Stage. Six tabs expose the whole journey; no Reset or duplicate Next. Native form keys never navigate. Home/End and arrows inside the tabs select states. Main Next advances the demo. ES/EN or L switches language without losing local input or state; L does not intercept typing, notes, or dialogs. Exiting Stage restores review's snapshot. The presentation scales on small screens. Nothing is saved or sent."}

${es ? "La referencia en la 12 abre el piloto 24 y vuelve a su origen. Definiciones desde la 14 vuelve al panel; desde Preguntas vuelve a Preguntas. El ciclo completo no requiere clics. Se conserva el icono de evaluación ◎." : "The reference on 12 opens pilot 24 and returns to its origin. Definitions from 14 returns to the dashboard; from Q&A it returns to Q&A. The full learning cycle requires no clicks. Evaluation icon ◎ is retained."}

${sections.join("\n\n---\n\n")}

## ${es ? "Experimentación inicial · valores aproximados" : "Early experimentation · approximate values"}

${es ? "No son mediciones validadas, referencias del sector ni evidencia causal. No se han facilitado registros, muestras ni métodos. La tasa de producción disminuye y el esfuerzo de revisión aumenta; no se presentan como mejoras. El cambio de tasa usa puntos medios; semanas y ciclo E2E de ocho semanas no son el mismo denominador. Porcentajes: cambios en puntos porcentuales. No se inventan resultados de usuarios." : "These are not validated measurements, benchmarks, or causal evidence. Records, samples, and methods were not supplied. Production rate declines and review effort increases; neither is presented as an improvement. Rate change uses midpoints; weekly rate and the eight-week E2E cycle are different denominators. Percentage changes use percentage points. No user outcomes are invented."}

| ${es ? "Medida | Base | Piloto | Cambio | Unidad / contexto" : "Metric | Baseline | Pilot | Change | Unit / context"} |
| --- | --- | --- | --- | --- |
${metricTable}

${es ? "Las definiciones y métodos de recogida están en el apéndice 21. Igualar alcance, personal y criterios; registrar tamaño de muestra y dispersión; acordar adoptar/revisar/detener antes de ver resultados. El ejemplo del formulario es ficticio, preparado y pendiente de validación con usuarios. El contexto no se aplica por sí solo: requiere integración, permisos, validación y revisión humana." : "Definitions and collection methods are in appendix 21. Match scope, staffing and criteria; record sample size and spread; agree adopt/revise/stop thresholds before seeing results. The form example is fictional, pre-authored, and pending user validation. Context does not enforce itself: integration, permissions, validation and human review are required."}
`;
}

for (const [locale, localizedData, localizedTitles] of [["en", data, titles], ["es", spanishData, spanishTitles]]) {
  const file = locale === "en" ? "speaker-notes.md" : "speaker-notes-es.md";
  const expected = notesDocument(localizedData, localizedTitles, locale === "es");
  if (process.argv.includes("--write-notes")) writeFileSync(new URL(file, import.meta.url), expected);
  assert.equal(read(file), expected, `${locale} generated notes match all source fields and timings`);
}
assert.equal(titles.length, 24);
assert.deepEqual([...html.matchAll(/<section[^>]+id="slide-(\d+)"/g)].map(match => +match[1]), Array.from({ length: 24 }, (_, i) => i + 1));
assert.equal((html.match(/class="slide backup/g) || []).length, 8);
assert.equal(data.keynoteCount, 15);
assert.equal(data.notes.length, 24);
assert.equal(data.notes.slice(0, 15).reduce((total, note) => total + note.seconds, 0), 1200);
for (const [index, seconds] of [[2, 30], [5, 270], [10, 90], [11, 105], [14, 90], [15, 600], [23, 0]]) assert.equal(data.notes[index].seconds, seconds);
assert(data.notes.slice(16).every(note => note.seconds === 0));
assert.match(titles[2], /About me/);
assert.match(titles[3], /acceleration paradox/);
assert.match(titles[10], /Before AI/);
assert.match(titles[11], /With AI/);
assert.match(titles[12], /documentation/);
assert.match(titles[13], /Measure/);
assert.match(titles[14], /Who designs/);
assert.match(titles[15], /Q&A/);
assert.match(titles[23], /30 days/);
for (let i = 0; i < 24; i++) for (const key of ["takeaway", "visual", "interaction", "body", "transition"]) {
  assert(data.notes[i][key].length > 10);
  assert(Object.hasOwn(catalog.messages, data.notes[i][key]), `Spanish note ${i + 1}/${key}`);
}
assert.equal(new Set(catalog.copy.map(item => item.selector)).size, catalog.copy.length);
for (const [key, value] of Object.entries(catalog.messages)) assert.equal([...key.matchAll(/\{\d+\}/g)].map(m => m[0]).sort().join(), [...value.matchAll(/\{\d+\}/g)].map(m => m[0]).sort().join());
for (const match of js.matchAll(/\bt\(("(?:[^"\\]|\\.)*")\)/g)) assert(Object.hasOwn(catalog.messages, JSON.parse(match[1])), `Runtime translation ${match[1]}`);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length);
for (const match of html.matchAll(/\baria-(?:controls|labelledby|describedby)="([^"]+)"/g)) for (const id of match[1].split(/\s+/)) assert(ids.includes(id), `ARIA target ${id}`);
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(+match[1] >= 1 && +match[1] <= 24, `Slide link ${match[1]}`);
assert(html.includes('id="pilot-reference" href="#24"'));
assert(html.includes('id="pilot-return" href="#12"'));
assert(html.includes('id="definitions-return" href="#14"'));
assert(/<progress\b[^>]*max="15"/.test(html));
assert(!/data-action="(?:pair|pair-reset|loop|closing)"/.test(html));
assert(!/presentation-qr|<img\b|reading-toggle/.test(html), "No restored photos, QR or Reading control");
assert.match(html, /class="slide about-slide" id="slide-3"/);
assert.equal((html.match(/class="photo-placeholder /g) || []).length, 3);
assert(!html.includes("Possibility is abundant."), "Removed only the evaluation-pile caption");
assert(!/setReadingView|readingPreference|smallScreen/.test(js), "No Reading preference or automatic activation");
assert.match(html, /class="human-symbol" aria-hidden="true">◎/);
assert.match(catalogSource, /No te enfoques<br>en el output,<br><em>Aceleras el aprendizaje\.<\/em>/);
assert.equal(data.metrics.length, 10);
assert.equal(JSON.stringify(data.metrics.map(m => [m.baseline, m.pilot])), "[[18,11],[4,6],[78,90],[25,70],[1,2],[9,6],[[3,4],[1,2]],[35,24],[6,4],[28,18]]");
for (let i = 0; i < 10; i++) for (const key of ["baseline", "pilot", "group", "better", "max"]) assert.equal(JSON.stringify(spanishData.metrics[i][key]), JSON.stringify(data.metrics[i][key]));
assert.equal(data.metricChange(data.metrics[6]), "≈−2/wk");
assert.equal(spanishData.metricChange(spanishData.metrics[6]), "≈−2/sem");
assert.equal(data.metrics[6].unit, "accepted artifacts / in a team with 8w E2E Cycle");
assert.equal(data.metrics[6].better, "higher");
assert.equal(data.pairLabels.length, 6);
assert.equal(data.pairEvidence.length, 6);
assert.equal(data.pairEvidence[3], null);
assert.match(JSON.stringify(data.pairEvidence[4]), /version 1.*from the brief.*product lead.*after the pilot/);
assert.match(data.pairEvidence[4].verdict, /user validation pending/);
assert.equal(spanishData.pairEvidence[4].verdict, "Design Ops gestiona la guía operacional (Evals)");
assert.match(JSON.stringify(spanishData.notes), /validación con usuarios está pendiente/, "Notes retain the validation caveat");
assert.match(data.pairEvidence[5].verdict, /review is not over/);
assert.equal(data.lifecycle.length, 5);
const roleLists = [...html.matchAll(/<ul class="role-output">([\s\S]*?)<\/ul>/g)];
assert.equal(roleLists.length, 4, "All four roles use semantic output lists");
assert.deepEqual(roleLists.map(match => [...match[1].matchAll(/<li>([^<]+)<\/li>/g)].map(item => item[1])),
  [["Brief", "Requirements", "Hypotheses"], ["Synthesis", "Insights", "Questions"], ["Concepts", "Prototypes", "Patterns"], ["Components", "Code", "Tests"]]);
assert(!html.includes('<div class="role-output">') && !css.includes(".role-output span"), "No obsolete output-tag markup or selectors");
for (const stage of data.lifecycle) assert.equal(stage.length, 6);
for (const phrase of ["At team level", "At product-area level", "At enterprise level"]) assert(data.notes[23].body.includes(phrase));
assert(css.includes('font-family: "Inter"') && css.includes("font-weight: 100 900") && css.includes("prefers-reduced-motion"));
assert(read("fonts/LICENSE.txt").includes("SIL OPEN FONT LICENSE Version 1.1"));
assert.equal(readFileSync(new URL("fonts/InterVariable.woff2", import.meta.url)).subarray(0, 4).toString(), "wOF2");
assert(!/\b(?:src|href)="https?:\/\//.test(html.replace(/<a\b[^>]*>/gi, "")));
assert(!/class="version"/.test(html));
for (const source of [catalogSource, languageSource, js]) {
  assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage|setInterval)\b/.test(source));
  new vm.Script(source);
}
assert(html.indexOf('src="spanish.js"') < html.indexOf('src="language.js"') && html.indexOf('src="language.js"') < html.indexOf('src="app.js"'));
console.log("PASS: V3 24-slide mapping, bilingual notes, exact timing, frozen metric values, six-state evidence, local Inter/OFL, offline and accessible source contracts.");
