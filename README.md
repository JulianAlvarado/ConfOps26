# DesignOps como infraestructura de IA

**Conferencia V2 · edición independiente en español estándar.** Presentación local en HTML/CSS/JavaScript, sin dependencias de ejecución: **15 diapositivas principales (20 minutos), Preguntas (10 minutos) y 7 apoyos**, 23 en total. Conserva los diseños, la biografía solo con texto, la navegación y las interacciones de la V2 inglesa; no incorpora un selector de idioma.

Los PDF ingleses heredados `ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v1.pdf` y `ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v2.pdf` permanecen intactos. La exportación española es **`ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v2_es.pdf`**, con 23 páginas de 1200×675 puntos, 16:9.

## Relato y tiempos

| Diapositivas | Recorrido | Tiempo |
| --- | --- | --- |
| 1–4 | Apertura → generación distribuida → Sobre mí → paradoja de la aceleración | 0:00–3:00 |
| 5–8 | Gobernar / Contexto / Evaluar → demo → evaluación responsable → aprendizaje | 3:00–10:40 |
| 9–14 | Papel ampliado → plano de control → colaboración → criterios → métricas → piloto | 10:40–18:30 |
| 15 | ¿Quién diseña el sistema? | 18:30–20:00 |
| 16 | Preguntas y contactos | 20:00–30:00 |
| 17–23 | Responsables, papel, sistema, modelos, medición, contexto y ciclo de vida | Apoyos opcionales |

La presentación personal de Julian Alvarado, Xbox Design Ops, ocupa **30 segundos** (1:30–2:00). Resume su papel y relación con la charla, sin leer toda la biografía. El cierre ocupa **90 segundos**. Edita la biografía en `.about-slide` de `index.html` y mantén sus notas sincronizadas en `app.js`; es solo texto.

La demo **«Corrige el formulario. Conserva lo aprendido.»** empieza en 4:00 y dura **270 segundos (4:30)**. Sus seis pasos son **necesidad → error de IA → decisión → solución funcional → lección guardada → siguiente revisión**. Los 90 segundos de la antigua diapositiva de resumen se mantienen como pausas de explicación, lectura, validación y revisión; no hay pasos nuevos. La conferencia suma exactamente **1.200 segundos** y Preguntas, **600**.

V2 reduce contenido que compite: la diapositiva 5 contiene tres palabras y tres preguntas; la 6, un indicador y una superficie grande; la 14, cuatro resultados y **adoptar / revisar / detener**. Las bases operativas y responsabilidades de equipo, área de producto y empresa permanecen en las notas. Se conserva la alineación de etiquetas y leyendas de la apertura.

## Abrir

Abre `index.html` en un navegador moderno. No requiere compilación, instalación, fuentes externas, claves, red ni servicio de IA. Los contactos de LinkedIn y GitHub se abren en otra pestaña y solo necesitan internet al seguirlos.

También puedes servir esta carpeta:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8080`; Ctrl+C detiene el servidor.

**Revisión** mantiene un lienzo de 1600×900. **Lectura** reorganiza la diapositiva en una página desplazable, con texto legible, controles de al menos 44 px y equivalentes textuales para diagramas complejos. Se activa automáticamente con ancho ≤900 px o alto ≤560 px. El botón permite elegir cualquier modo; la preferencia dura hasta recargar. Para leer texto mayor en un portátil, usa Lectura en vez de reducir la tipografía de proyección.

## Presentar en Escenario

Pulsa **Escenario** o **S** antes de compartir. Oculta barra de revisión, versión, navegación, notas y diálogos. **F** activa pantalla completa si el navegador lo permite; Escenario también funciona en una ventana. **Salir de Escenario · Esc** queda en el pie inferior izquierdo.

Solo tres diapositivas requieren pasos:

| Diapositiva | Secuencia |
| --- | --- |
| 4 | Fragmentación completa → criterios comunes → siguiente |
| 6 | Seis estados de la demo → siguiente |
| 15 | Pregunta → respuesta → Preguntas |

**Derecha / Abajo / Av Pág / Espacio** avanza un paso antes de cambiar de diapositiva. **Izquierda / Arriba / Re Pág** retrocede un paso y luego una diapositiva. Al regresar se conserva el paso. **Inicio / Fin** salta a primera / última. Mantener pulsada una tecla no salta pasos.

**Tab** llega al campo y al botón del formulario. Escritura, flechas, Espacio e Intro conservan su comportamiento dentro del formulario; sal con Tab o enfoca el fondo para volver a navegar. **Escape** sale incluso desde el campo. También salen S, el botón de salida o abandonar pantalla completa. La diapositiva actual no cambia.

Entrar en Escenario inicia de nuevo sus tres secuencias y guarda los estados de revisión y formulario. Salir los restaura, junto con selecciones y preferencia de Lectura. Las notas y los diálogos siguen cerrados. **N/G no funcionan en Escenario**, para no exponerlos por accidente. Si falla pantalla completa, se anuncia el error y se puede seguir en ventana.

Los demás diagramas se muestran completos y estáticos: funciones, ciclo de aprendizaje, red de control, recorridos, capas y ciclo de vida. La diapositiva 10 conserva el diagrama radial y etiquetas grandes; Lectura usa su equivalente textual. Los detalles del ciclo y las diez métricas siguen disponibles en revisión.

### Tipografía de proyección

Escenario usa toda el área 16:9 disponible. Conserva las fuentes de sistema, la jerarquía y el mínimo de **23 px de diseño** para el texto principal de decisión y diagramas: **18,4 px efectivos a 1280×720** y **24,15 px a 1680×1080**. Las palabras y preguntas del marco mantienen 62/34 px; títulos y detalles de la demo, 42/29 px; transformaciones y reglas, 29/27 px.

Las etiquetas de referencia, números, ordinales decorativos y metadatos de apoyos son menores. La tabla de medición es material de consulta. Las advertencias sobre aproximaciones y alcance siguen visibles. Usa Lectura para consultar en pantallas pequeñas; Escenario está pensado para proyección desde 1280×720, no para teléfonos.

## Controles de revisión

| Control | Acción |
| --- | --- |
| S / Escenario | Iniciar presentación sin herramientas de revisión |
| Anterior / Siguiente, Izquierda / Derecha | Navegar; en 15, el primer avance revela y el segundo abre Preguntas |
| Arriba / Abajo, Re Pág / Av Pág, Espacio | Navegar en revisión; desplazar en Lectura |
| Inicio / Fin | Primera / última en revisión; desplazar en Lectura |
| Lectura | Cambiar al diseño adaptable |
| N / Notas | Abrir o cerrar las notas |
| G / Diapositivas | Abrir el índice |
| F / Pantalla completa | Alternar pantalla completa |
| Escape | Cerrar índice o notas; el navegador también gestiona pantalla completa |
| Temas de Preguntas | Abrir el apoyo correspondiente |
| `#13` | Enlace directo a una diapositiva |

Las animaciones son finitas y respetan `prefers-reduced-motion`. No hay avance automático. En revisión, Tab e Intro/Espacio operan los botones internos por separado de la navegación. Los estados se conservan al navegar y se reinician al recargar. El progreso llega al 100% en 15; Preguntas y apoyos no muestran esa barra.

Las notas reciben el foco al abrirse y sus teclas desplazan el panel, no la charla. N o Escape lo cierra. **No son una ventana privada del ponente**: ciérralas antes de compartir pantalla.

## Interacciones

- **2:** distribuir generación entre cuatro funciones.
- **4:** recorrer la cadena y activar criterios comunes.
- **6:** seis pasos; formulario local en el cuarto; Reiniciar borra el campo y vuelve al inicio.
- **8:** recorrer el ciclo de aprendizaje.
- **10:** conectar o desconectar el plano de control.
- **11:** animar traspasos frente a colaboración.
- **13:** cuatro comparaciones aproximadas; detalle de diez métricas y enlace a definiciones.
- **14:** línea temporal estática; responsabilidades por ámbito en las notas.
- **15:** Siguiente revela la respuesta y otro avance abre Preguntas. Su nombre accesible y ayuda describen la acción actual. Se anuncia sin mover el foco. No hay botón de revelado aparte. Lectura conserva desplazamiento nativo; Derecha avanza. Escenario mantiene reversión y restauración.
- **22:** construir capas de contexto.
- **23:** consultar aporte de IA, infraestructura y control humano por etapa.

Los contactos y los siete apoyos conservan navegación de ida y vuelta.

## Archivos y comprobaciones

`index.html` contiene texto y SVG; `styles.css`, diseño, tipografía, adaptación e impresión; `app.js`, comportamiento local, métricas y notas. `speaker-notes.md` es el guion generado, con tiempos, transiciones, supuestos y trazabilidad.

Los ID numéricos son consecutivos y coinciden con las notas. `keynoteCount` delimita la conferencia. Los valores y escalas están en `metrics`. No hay analítica, recogida externa, persistencia de entradas ni llamadas a IA.

Después de editar notas:

```sh
node check.mjs --write-notes
node --check app.js
node check.mjs
```

La regresión de navegador cubre las 23 diapositivas, seis estados de demo, seis tamaños en revisión/Lectura y Escenario a 1280×720 y 1680×1080. Comprueba teclas, foco, restauración, formulario seguro, métricas, contactos, apoyos, tipografía, traducción visible y recortes. Requiere una instalación existente de Playwright:

```sh
PLAYWRIGHT_MODULE=/ruta/a/playwright \
SNAPSHOT_DIR=/ruta/a/capturas \
node browser-check.cjs
```

`SNAPSHOT_DIR` es opcional. No instales dependencias para abrir la presentación.

## Supuestos y límites

La fuente principal es el esquema facilitado y sus observaciones. Esta edición usa español neutro, conserva nombres propios y DesignOps, y emplea IA en la prosa. No añade fuentes externas sin verificar.

Las diez comparaciones se identifican como **«Experimentación inicial · valores aproximados»**. El ponente facilitó **~3–4/sem → ~1–2/sem** para producción de diseño. **≈−2/sem** es una estimación por puntos medios (1,5 − 3,5), no un cambio observado aparte. Son entregables aceptados por semana en un equipo con **ciclo integral de 8 semanas**; no una tasa por ciclo. El descenso usa el color de advertencia, no el de mejora.

Las otras nueve comparaciones sintéticas no cambian; el ponente las considera cercanas a su experimentación informal. No hay registros, muestras ni métodos facilitados. No son resultados validados, referencias de rendimiento, evidencia causal ni previsiones. Los porcentajes cambian en puntos porcentuales. La revisión aumenta; generar más rápido no garantiza revisar menos. Los indicadores anticipados/de proceso y los resultados del flujo son categorías operativas, no universales. Los resultados reales de usuarios necesitan evidencia aparte; no se inventan aquí.

El recorrido anterior es simplificado; el nuevo modelo es una hipótesis. La animación no mide plazos y los 30 días no prometen una fecha de entrega. El ejemplo y sus atribuciones a IA son ficticios y están preparados, **sin IA en directo**. El alta individual es un supuesto, no investigación; las invitaciones opcionales no son una regla universal. La lección conserva razón, fuente, alcance, versión, responsable y revisión tras piloto o cambios. **Validación con usuarios pendiente**: cumplir el requisito no prueba accesibilidad ni beneficio.

El formulario no crea cuentas ni guarda o envía datos. No hay generación de código en directo ni integraciones inventadas con Paper/Figma. La gestión responsable sostiene Gobernar; los sistemas, Contexto; la habilitación activa las tres funciones con flujos, prompts, formación y criterios. Evaluar sigue siendo una capacidad experta compartida, no una puntuación de IA.

## PDF y futura conversión

El entregable es HTML y PDF, no `.pptx`. La impresión muestra el estado preparado de cada interacción y no incluye notas. El PDF español utiliza el último estado de la demo, explícitamente revisado; el HTML y las notas conservan los seis.

Para una futura conversión a PowerPoint, conserva texto editable, relación 16:9 y vectores. Recrea diagramas con formas, pasos con apariciones nativas y métricas con sus escenarios, unidades y advertencias. Para la demo usa seis fotogramas y un enlace al HTML: una diapositiva no reproduce el formulario local. Mantén las notas como texto separado.

### Reproducir el PDF V2 español

Ejecuta desde esta carpeta con Playwright ya instalado. La hoja de exportación reutiliza la tipografía de Escenario sin cambiar los modos en pantalla; resuelve los diagramas, la respuesta final y el último estado ilustrativo de la demo.

```sh
PLAYWRIGHT_MODULE=/ruta/a/playwright node --input-type=commonjs <<'NODE'
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);
const { readFileSync } = require("node:fs");
const { pathToFileURL } = require("node:url");
const path = require("node:path");
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, reducedMotion: "reduce" });
    await page.goto(pathToFileURL(path.resolve("index.html")).href);
    await page.evaluate(() => {
      setStageMode(true);
      setAligned(true);
      setPair(5);
      setClosing(true);
      document.querySelector("#network").classList.add("connected");
    });
    await page.addStyleTag({ content: readFileSync("styles.css", "utf8").replaceAll("@media screen {", "@media all {") });
    await page.addStyleTag({ content: "@media print { @page { size: 1600px 900px; margin: 0; } .slide, .slide[hidden] { zoom: 1 !important; } }" });
    await page.pdf({
      path: "ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v2_es.pdf",
      preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false
    });
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
NODE

# macOS: normalizar el redondeo de Chromium (675,12 pt) a 675 pt exactos.
# PDFKit y Swift ya están disponibles en el entorno de exportación.
swift -sdk /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX26.0.sdk - ConfOps26_Julian-Alvarado_DesignOps-as-AI-Infrastructure_v2_es.pdf <<'SWIFT'
import PDFKit
import Foundation
let url = URL(fileURLWithPath: CommandLine.arguments[1])
guard let pdf = PDFDocument(url: url), pdf.pageCount == 23 else {
    fatalError("Se esperaban 23 páginas")
}
for index in 0..<pdf.pageCount {
    guard let page = pdf.page(at: index) else { fatalError("Página no disponible") }
    let box = page.bounds(for: .mediaBox)
    guard abs(box.width - 1200) < 0.2, abs(box.height - 675) < 0.2 else {
        fatalError("Tamaño de página inesperado")
    }
    let exact = CGRect(x: 0, y: 0, width: 1200, height: 675)
    page.setBounds(exact, for: .mediaBox)
    page.setBounds(exact, for: .cropBox)
}
guard pdf.write(to: url) else { fatalError("No se pudo guardar el PDF") }
SWIFT
```

Comprueba el PDF renderizado: **23 páginas, 1200×675 puntos**, textos y avisos completos, sin recortes. No sobrescribas los PDF ingleses. Para imprimir manualmente usa orientación horizontal, fondos, sin cabeceras ni pies del navegador y escala 100%; la impresión varía según el navegador.
