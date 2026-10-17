# DesignOps como infraestructura de IA

Gobernanza, sistemas y el nuevo papel de DesignOps en los equipos de producto

**Conferencia v2 · edición independiente en español estándar.** Fuente principal: el esquema facilitado «DesignOps as AI Infrastructure Presentation Outline ConfOps 2026», con el encargo, marcos, observaciones de revisión y preguntas frecuentes. Esta edición conserva el relato y el diseño de V2; no añade evidencia externa ni integraciones. Son 15 diapositivas principales, Preguntas y 7 apoyos: 23 en total.

Documento generado a partir de app.js. Edita allí las notas y ejecuta `node check.mjs --write-notes`; no edites este archivo generado.

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

## 1. La IA nos acelera. ¿Quién mantiene la coherencia?

**Tiempo:** 0:00–0:45 (45 segundos)

**Idea clave:** La IA aumenta la capacidad de producción. DesignOps mantiene la coherencia de la organización.

**Concepto visual:** Una fuente común se ramifica en formas distintas: más producción, menos uniformidad.

**Interacción / revelado:** Un breve trazado inicial presenta el motivo del flujo. Las diapositivas nunca avanzan solas.

**Notas del ponente:** Abre con la tensión, no con una lista de herramientas. Los equipos generan encargos, conceptos, resúmenes de investigación y código más rápido. Crear más deprisa no garantiza una experiencia coherente para el cliente. Seguiremos un problema ilustrativo de incorporación: un formulario funcional impide empezar a una persona que está sola. Veremos cómo el equipo lo corrige, guarda la lección en una guía compartida y comprueba el siguiente resultado. Después plantearemos qué debe mantener DesignOps alrededor de ese trabajo y cómo un piloto acotado podría comprobar su valor. El ejemplo está preparado de antemano; no informa de resultados de una organización.

**Transición:** ¿Qué cambia cuando la producción se distribuye por todo el equipo?

---

## 2. Todos podemos generar

**Tiempo:** 0:45–1:30 (45 segundos)

**Idea clave:** La generación distribuida desplaza el cuello de botella hacia la alineación, la calidad y la gobernanza.

**Concepto visual:** Cuatro carriles paralelos: producto, investigación, diseño e ingeniería.

**Interacción / revelado:** Escenario: las cuatro funciones están visibles y completas. Revisión: Distribuir la generación activa una función por clic; el quinto clic reinicia el ejemplo.

**Notas del ponente:** Cada disciplina gana capacidad de producción. Producto genera encargos e hipótesis; investigación sintetiza evidencia; diseño explora conceptos; ingeniería genera componentes y pruebas. La generación se distribuye, pero la experiencia no es intercambiable. El mismo modelo de lenguaje puede interpretar el producto de forma distinta en cada carril. Son categorías de apoyo, no garantías de exactitud. Invita al público a imaginar los cuatro carriles produciendo a la vez. El nuevo límite es acordar qué producir, qué encaja en el sistema y quién lo evalúa.

**Transición:** Antes de explorar esa variación, una breve presentación de quien comparte esta perspectiva.

---

## 3. Sobre mí

**Tiempo:** 1:30–2:00 (30 segundos)

**Idea clave:** Preséntate y explica la perspectiva que aportas sobre DesignOps e IA.

**Concepto visual:** Presentación solo con texto de Julian Alvarado, Xbox Design Ops, con la biografía y los intereses personales facilitados.

**Interacción / revelado:** Sin pasos ni controles.

**Notas del ponente:** Julian Alvarado es gerente sénior de programas y líder de operaciones de diseño en Microsoft. Ayuda a Xbox Design a crecer con mejores sistemas, procesos más claros y un uso responsable de la IA. Colabora con equipos y estudios para mejorar cómo los diseñadores planifican, aprenden y entregan su trabajo, y construir organizaciones creativas resilientes y centradas en las personas. Fuera del trabajo, practica CrossFit a diario y se define como un «eterno cinturón azul» de jiu-jitsu. Músico retirado, sigue disfrutando de los conciertos y de dibujar en casa. Ahora escucha a Radiohead, Lenny Kravitz, Oasis y Crosses. Esta edición en español conserva la biografía y los intereses facilitados por el ponente. Resume tu función y su relación con la charla en 30 segundos, sin leer la biografía completa. La conferencia conserva 1.200 segundos; la demo, 270; el cierre, 90; y las preguntas, 600.

**Transición:** Volvamos al reto común: sin condiciones compartidas, producir más puede generar más variación.

---

## 4. La paradoja de la aceleración

**Tiempo:** 2:00–3:00 (60 segundos)

**Idea clave:** El contexto y la evaluación compartidos gobiernan la variación sin eliminar la exploración útil.

**Concepto visual:** Una cadena causal sobre ramas divergentes; una banda de criterios comunes alinea su tratamiento.

**Interacción / revelado:** Momento de Escenario 1: la cadena completa empieza fragmentada. Derecha aplica criterios comunes y después avanza; Izquierda los retira. Revisión conserva los cuatro pasos y el control de alineación.

**Notas del ponente:** Lee la cadena con calma: más producción, más variación, más decisiones, más oportunidades de incoherencia. Es un mecanismo conceptual, no una previsión estadística. La variación ayuda a explorar; sin gestión, encarece las conexiones entre sistemas. Puede generar términos contradictorios, investigación duplicada, patrones inaccesibles, decisiones de IA sin documentar y desviaciones del sistema de diseño. Las «17 versiones de un patrón» de la fuente son un recurso retórico, no una estadística; por eso no se representan como datos. Aplica contexto y evaluación comunes: las opciones pueden ser distintas y respetar los mismos límites. El verde es una metáfora explicativa, no una garantía de que los criterios eliminen todos los defectos.

**Transición:** Tres preguntas nos ayudan a gobernar esa variación. Las aplicaremos al alta de un espacio de trabajo.

---

## 5. Gobernar. Contexto. Evaluar.

**Tiempo:** 3:00–4:00 (60 segundos)

**Idea clave:** GOBERNAR: ¿qué puede hacer la IA? CONTEXTO: ¿qué sabe? EVALUAR: ¿qué consideramos aceptable?

**Concepto visual:** Tres palabras con peso y tres preguntas, con espacio para asimilar cada diferencia.

**Interacción / revelado:** Estática en Escenario y revisión. Los ejemplos del alta individual y las bases operativas se explican con estas notas, sin listas que compitan en pantalla.

**Notas del ponente:** Mantén un único modelo. La demo sigue a alguien que crea un espacio de trabajo por su cuenta: usa esa necesidad para concretar las tres preguntas. Gobernar pregunta qué puede hacer la IA y quién puede aceptarlo: en este caso ilustrativo no se introducen datos reales de contacto; diseño e ingeniería revisan; y un líder de producto responde por la regla acotada. El contexto reúne el encargo de alta individual, las invitaciones opcionales y el patrón de formulario admitido. Evaluar pregunta si el alta termina sin correo, y comprueba etiquetas, errores, foco y viabilidad. Cumplir ese requisito no demuestra valor para el usuario. Estas pruebas se enmarcan en límites de herramientas, datos, privacidad, riesgo y lanzamiento. La gestión responsable sostiene la gobernanza; los sistemas transportan el contexto; la habilitación pone las tres funciones en práctica mediante flujos, prompts, criterios y formación. Este es el modelo central, no otro marco que memorizar.

**Transición:** Sigamos esas tres responsabilidades a través de una decisión concreta.

---

## 6. Corrige el formulario. Conserva lo aprendido.

**Tiempo:** 4:00–8:30 (270 segundos)

**Idea clave:** El equipo corrige el formulario. DesignOps pone lo aprendido a disposición del siguiente equipo y sus herramientas de IA.

**Concepto visual:** Un indicador del paso actual y una superficie grande. Seis estados: necesidad, error de IA, decisión del equipo, formulario funcional, lección guardada y siguiente revisión.

**Interacción / revelado:** Momento de Escenario 2: Derecha avanza los seis pasos y luego la diapositiva; Izquierda retrocede. En el paso 4, Tab entra en el formulario de nombre; las teclas del campo y del envío no avanzan la charla. Sal con Tab para volver a navegar. Revisión conserva sus botones; Reiniciar borra el formulario en ambos modos.

**Notas del ponente:** Presenta aquí el ejemplo ficticio: una persona quiere crear un espacio de trabajo sola. Dedica 270 segundos, 4 minutos y 30 segundos, a los seis pasos. Los 90 segundos recuperados de la diapositiva de resumen eliminada son pausas de explicación e interacción, no más interfaz ni un ejercicio: 30 segundos para comprender la necesidad bloqueada, 30 para la validación y la respuesta del teclado, y 30 para explicar por qué la lección necesita responsable y condición de revisión. Primero: la persona quiere empezar sola. Segundo: el formulario atribuido a la IA exige el correo de otra persona y la bloquea. Tercero: diseño e ingeniería trasladan las invitaciones a después de crear el espacio. Cuarto: prueba el formulario local revisado solo con un nombre; muestra validación y teclado si resulta útil. No se guarda ni envía nada. Quinto: corregir una pantalla no basta. DesignOps registra la lección con el supuesto de alta individual, la razón del equipo, un líder de producto responsable y revisión tras el piloto. La guía debe estar donde el siguiente equipo y sus herramientas de IA puedan usarla. Sexto: el siguiente formulario propuesto permite el alta sin invitar a nadie. Una persona verifica ese comportamiento y sigue revisando accesibilidad y resultados para usuarios. No afirmes que la regla garantiza resultados futuros ni que es un estudio real. Todos los estados son ilustrativos y están preparados de antemano. Los expertos de producto deciden cómo debe funcionar la experiencia; DesignOps ayuda a que la decisión sobreviva a esta pantalla.

**Transición:** La persona ya puede completar el alta sola. ¿Qué más debe comprobar el equipo?

---

## 7. Cuando generar cuesta poco, evaluar es estratégico

**Tiempo:** 8:30–9:30 (60 segundos)

**Idea clave:** Las pruebas automáticas apoyan el juicio humano responsable; no demuestran la calidad del diseño.

**Concepto visual:** Varios candidatos atraviesan seis criterios hasta llegar a una decisión humana explícita.

**Interacción / revelado:** Flujo estático, sin puntuaciones de IA inventadas ni aprobación automática.

**Notas del ponente:** Recorre los criterios: componentes y tokens aprobados; necesidades identificadas sin complejidad innecesaria; accesibilidad; principios de marca y contenido; estrategia de producto; y viabilidad técnica. Los expertos definen juntos el estándar. Las pruebas automáticas detectan incumplimientos concretos, pero superarlas no demuestra utilidad, coherencia ni éxito del usuario. Una persona acepta, revisa o rechaza y registra sus razones. Mantén la evidencia vinculada a las decisiones. Los diseñadores dirigen y evalúan cada vez más alternativas, pero el oficio y el conocimiento del área siguen siendo indispensables.

**Transición:** Una vez registrado el juicio, ¿cómo lo mantenemos útil sin enterrarlo en un archivo?

---

## 8. El ciclo de aprendizaje de la organización

**Tiempo:** 9:30–10:40 (70 segundos)

**Idea clave:** Conserva la decisión y su razón en una guía común; después comprueba el siguiente resultado.

**Concepto visual:** En Escenario, secuencia completa de cinco pasos; en revisión, ciclo cerrado alrededor de la memoria de la organización.

**Interacción / revelado:** Escenario: secuencia estática completa que termina en reevaluación. Revisión: Seguir un ciclo de aprendizaje destaca una etapa por clic y vuelve a la generación.

**Notas del ponente:** Retoma la decisión de ofrecer invitaciones después del alta. No guardes solo el formulario corregido: guarda por qué cambió y quién revisará la guía. Sigue la secuencia: la IA propone con la guía común; el equipo revisa según la necesidad del usuario; guarda la decisión, la razón y el responsable; DesignOps actualiza la guía para el siguiente equipo y su IA; una persona comprueba el siguiente resultado. El ejemplo no demuestra que un único campo sea siempre mejor ni que la guía evite errores automáticamente. Es ficticio y la validación con usuarios está pendiente. Si cambia el supuesto del alta individual, el líder de producto revisa la guía. DesignOps mantiene fuente, versión, acceso y fecha de revisión. Retira las lecciones que ya no sirven, en vez de convertir cada observación en una política universal.

**Transición:** Ese mantenimiento es trabajo reconocible de DesignOps, con un alcance mayor.

---

## 9. El papel se amplía; las bases permanecen

**Tiempo:** 10:40–11:30 (50 segundos)

**Idea clave:** Personas, procesos y sistemas siguen siendo las bases; lo que se amplía es su alcance.

**Concepto visual:** Las bases conocidas junto a seis responsabilidades tradicionales y su ampliación.

**Interacción / revelado:** Comparación estática; el alcance ampliado está visible desde el principio.

**Notas del ponente:** Recuerda los fundamentos. DesignOps mejora las condiciones para diseñar mediante personas, procesos y sistemas. Dotación, incorporación, rituales, herramientas y colaboración no desaparecen. La IA amplía el alcance: de apoyar a diseñadores a apoyar al ecosistema de producto; de documentar procedimientos a hacer utilizable el conocimiento al generar; de medir solo eficiencia a medir calidad y resultados. Es una ampliación, no un rechazo de las operaciones tradicionales ni un mandato de reorganización.

**Transición:** Una metáfora útil para ese papel ampliado es el plano de control.

---

## 10. DesignOps como plano de control

**Tiempo:** 11:30–12:20 (50 segundos)

**Idea clave:** DesignOps conecta actores distribuidos mediante reglas, contexto y evaluación compartidos.

**Concepto visual:** Cinco actores que usan IA se conectan mediante una capa operativa común.

**Interacción / revelado:** Escenario: se conserva el diagrama radial, conectado, con etiquetas grandes y sin otro control. Revisión: Conectar el plano de control activa o desactiva enlaces. Lectura conserva el resumen textual accesible.

**Notas del ponente:** El plano de control distingue definir las condiciones del trabajo de hacer el trabajo de todos. Producto, investigación, diseño, prototipado e ingeniería conservan sus responsabilidades. DesignOps coordina contexto reutilizable, límites según el riesgo, criterios de evaluación, responsables y habilitación. No debe convertirse en una cola central de aprobaciones. Seguridad, Legal, TI, plataformas y expertos siguen siendo socios esenciales. Unos límites claros permiten avanzar sin pedir repetidamente permiso para tareas conocidas y seguras.

**Transición:** La guía compartida también cambia cómo pasa el trabajo entre estas personas.

---

## 11. Antes de la IA / una propuesta de trabajo con IA

**Tiempo:** 12:20–13:20 (60 segundos)

**Idea clave:** Prueba la producción colaborativa y dedica la capacidad que ganes a aprender del cliente.

**Concepto visual:** Dos recorridos unen necesidad y opinión del cliente: traspasos secuenciales y un ciclo colaborativo de experimentación.

**Interacción / revelado:** Escenario: ambos recorridos completos y estáticos. Revisión permite animar secuencia y colaboración; el movimiento es ilustrativo, no una duración medida.

**Notas del ponente:** El recorrido anterior es una simplificación deliberada, no una afirmación de que todos los equipos trabajaban secuencialmente antes de la IA. La investigación informa el encargo, diseño crea propuestas, ingeniería construye y el cliente responde al final. La alternativa propuesta parte de Misión, Metas y Métricas: las MMM de la fuente, donde Metas recoge los hitos. PM, investigación, diseño e ingeniería comparten propósito; especificación, conceptos, viabilidad y prototipos HTML/CSS evolucionan juntos. Los lanzamientos pueden convertirse en experimentos que informan otra iteración. La IA puede reducir producción, pero siguen contando revisión, integración y dependencias. No prometas lanzamientos en una semana ni aceleración universal. Mide tiempo transcurrido, horas-persona, esperas, validación con clientes y ritmo experimental. La animación compara secuencias, no velocidades numéricas. Un prototipo no es un lanzamiento de producción; la evidencia de usuarios sigue siendo necesaria.

**Transición:** La guía compartida puede partir de la documentación que el equipo ya tiene.

---

## 12. De la documentación a los criterios ejecutables

**Tiempo:** 13:20–14:35 (75 segundos)

**Idea clave:** Convierte el conocimiento del área en contexto versionado y reutilizable, con criterios verificables.

**Concepto visual:** Escenario muestra cuatro transformaciones y la lección del alta individual; revisión conserva las siete y la guía completa.

**Interacción / revelado:** Transformación estática. Escenario destaca lección, razón, responsable y versión, revisión y evidencia pendiente; revisión y notas conservan el detalle.

**Notas del ponente:** Usa la lección del alta individual como artefacto concreto, no como excusa para narrar siete marcos nuevos. Su fuente se declara como supuesto; requisito y decisión se pueden leer; alcance, responsable y condición de revisión son visibles. La evidencia de usuarios sigue pendiente. Las siete transformaciones conservan la fuente: guías a reglas legibles por máquinas; sistemas de diseño a sistemas utilizables por IA; plantillas a prompts canónicos; documentación a paquetes de contexto; crítica a criterios de evaluación; procedimientos a flujos de personas e IA; métricas de eficiencia a rapidez, calidad y resultados. Un paquete parecido a YAML no se aplica solo. Siguen siendo necesarias integración, permisos, validación y revisión humana. DesignOps mantiene el paquete; los expertos lo redactan, aprueban y revisan su validez.

**Transición:** Mantener esta guía cuesta tiempo. ¿Cómo sabríamos si conviene adoptar el flujo?

---

## 13. Medir rapidez y coherencia

**Tiempo:** 14:35–16:15 (100 segundos)

**Idea clave:** Evalúa el flujo completo: rapidez, coste de revisión, calidad, coherencia y resultados para el cliente.

**Concepto visual:** Cuatro comparaciones grandes muestran referencia, piloto y cambio: tiempo de concepto, ritmo de producción, revisión y cumplimiento.

**Interacción / revelado:** Escenario: cuatro comparaciones estáticas. Revisión: Las 10 métricas abre el detalle; Definiciones enlaza al apoyo de medición, también accesible desde Preguntas.

**Notas del ponente:** Son valores aproximados orientados por la experimentación inicial del ponente, no mediciones exactas, referencias de rendimiento ni previsiones. El ponente facilitó los rangos de producción de diseño; las otras nueve comparaciones conservan los valores sintéticos anteriores, que considera próximos a observaciones informales. No se han facilitado registros, tamaños de muestra ni métodos: no afirmes resultados validados ni retorno causal de la inversión. De referencia a piloto: mediana del encargo al concepto validado, 9 a 6 días; producción de diseño, ~3–4/sem a ~1–2/sem, entregables aceptados en un equipo con ciclo integral de 8 semanas. El cambio ≈−2/sem es una estimación por puntos medios: 1,5 menos 3,5, no un cambio observado de forma independiente. La tasa semanal y el ciclo integral de ocho semanas son conceptos distintos: no dividas por ocho ni infieras un total de ocho semanas. La producción disminuye: no la presentes como mejora. Esfuerzo de producción, 18 a 11 horas por concepto; revisión, 4 a 6 horas; retrabajo, 35% a 24%; comprobaciones aplicables superadas, 78% a 90%; defectos abiertos de accesibilidad/calidad, 6 a 4 por 10 pantallas; divergencia diseño-código, 28% a 18%; experimentos, 1 a 2 por semana; reutilización de contexto aprobado, 25% a 70%. La revisión aumenta: generar más rápido no implica revisar menos. Los indicadores anticipados y de proceso reflejan comportamiento y preparación; los de resultado comprueban lo que entrega el flujo. El cumplimiento es una señal anticipada de calidad, no prueba de beneficio para el usuario. Se muestran ambos valores aproximados y sus cambios, sin escalas de barras que compitan. Los porcentajes cambian en puntos porcentuales, no en porcentajes relativos. Iguala alcance, dotación, definición de entregable y criterios; incluye muestra y dispersión antes de presentar una comparación validada. Registra por separado el éxito del cliente en sus tareas. No se aportan datos de resultados de clientes.

**Transición:** Usa esas métricas en un piloto acotado antes de ampliar el modelo operativo.

---

## 14. Tus primeros 30 días

**Tiempo:** 16:15–18:30 (135 segundos)

**Idea clave:** Un piloto de 30 días puede empezar en un equipo, un área de producto o la empresa, con responsables claros.

**Concepto visual:** Cuatro verbos en una línea temporal, un resultado por semana y una decisión explícita: adoptar, revisar o detener.

**Interacción / revelado:** Estática en Escenario y revisión, sin clics extra. Estas notas conservan las responsabilidades de equipo, área de producto y empresa.

**Notas del ponente:** Días 1–7: mapea el uso real de IA e identifica incoherencias, carencias de calidad y riesgos. Días 8–14: elige un flujo útil y acotado y reúne conocimiento pertinente. Días 15–21: nombra responsables, define controles humanos y criterios de evaluación, y establece la referencia antes del piloto. Días 22–30: realiza trabajo comparable y decide adoptar, revisar o detener. Evita empezar con datos sensibles o alto riesgo salvo que exista la gobernanza adecuada. En el equipo, los líderes de diseño e ingeniería pueden asumir un flujo con facilitación de DesignOps. En el área de producto, PM, investigación, diseño, ingeniería y un responsable del sistema coordinan patrones y resultados entre equipos. En la empresa, la responsabilidad federada de producto opera dentro de los límites de Seguridad, Legal, TI y plataformas. DesignOps conecta esos ámbitos; no decide unilateralmente políticas ni producto. Las ventanas de calendario son una propuesta inicial, no fechas de entrega prometidas.

**Transición:** Volvamos a la pregunta central: si la IA participa en el diseño, ¿quién diseña su entorno operativo?

---

## 15. ¿Quién diseña el sistema?

**Tiempo:** 18:30–20:00 (90 segundos)

**Idea clave:** La IA no elimina la necesidad de DesignOps. Lo convierte en infraestructura.

**Concepto visual:** Una pregunta con espacio, una respuesta que se revela con intención y tres afirmaciones finales.

**Interacción / revelado:** Momento de Escenario 3: pausa, Derecha revela DesignOps y otra Derecha abre Preguntas. Izquierda oculta la respuesta antes de retroceder. En revisión, Siguiente o una tecla de avance revela primero y luego avanza. Lectura conserva sus teclas de desplazamiento. No hay botón aparte para revelar.

**Notas del ponente:** Dedica 90 segundos al cierre; los otros 30 presentan al ponente en la diapositiva 3. Baja el ritmo. Lee la pregunta y deja espacio: si la IA forma parte de cómo diseñamos productos, ¿quién diseña el sistema en el que opera? Revela DesignOps. No es una reivindicación de control de toda la IA por una función. Es una invitación a conectar experiencia, gobernanza, conocimiento, flujos y evaluación. La IA crea capacidad. Los sistemas crean coherencia. La gestión responsable crea confianza. DesignOps conecta las tres. El futuro no consiste solo en gestionar trabajo alrededor del diseño, sino en diseñar la infraestructura con la que personas e IA crean productos juntas. El reto práctico es un flujo, una referencia, un paquete de contexto mantenido, controles humanos con responsable y evidencia de que no se ha cambiado calidad por rapidez. Termina con la tesis y una pausa, no con más herramientas.

**Transición:** Conversemos. ¿Dónde genera tu equipo más rápido de lo que puede mantener la coherencia?

---

## 16. Conversemos — Preguntas

**Tiempo:** 10 minutos de preguntas, fuera del tiempo de conferencia

**Idea clave:** Usa la conversación para relacionar el modelo operativo con las limitaciones del público.

**Concepto visual:** Siete temas de apoyo y enlaces a LinkedIn y GitHub junto a la invitación a conversar.

**Interacción / revelado:** Selecciona un tema para abrir su apoyo; todos permiten volver a Preguntas.

**Notas del ponente:** Reserva diez minutos para conversar. Invita a compartir flujos concretos, no predicciones abstractas. Los siete apoyos cubren responsables de gobernanza, evolución del papel, sistemas preparados para IA, flujos independientes del modelo, medición, capas de contexto y ciclo de vida. Las capas y el ciclo son perspectivas complementarias, no nuevos modelos que memorizar durante la charla. Si preguntan si esto es solo gobernanza de IA, vuelve a la decisión: la gobernanza es una parte; contexto, flujos, evaluación y habilitación la hacen útil en el ecosistema de producto. Si preguntan qué hacer mañana: mapear, identificar, codificar, estandarizar y medir.

**Transición:** Abre un apoyo solo si ayuda a responder una pregunta.

---

## 17. Apoyo: responsabilidad compartida de gobernanza

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** Los límites de riesgo, el acceso, el modelo operativo y el criterio de producto necesitan responsables explícitos.

**Concepto visual:** Cuatro ámbitos de responsabilidad; ninguno reclama todo el modelo operativo de IA.

**Interacción / revelado:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** Seguridad y Legal fijan los límites de riesgo; TI y plataformas gestionan tecnología y acceso. DesignOps traduce políticas en condiciones útiles de trabajo con los expertos. Producto, investigación, diseño e ingeniería responden por sus decisiones y la calidad del lanzamiento. Una buena gobernanza elimina ambigüedades repetitivas mediante rutas aprobadas, controles humanos según el riesgo, escalado y excepciones documentadas. Una mala gobernanza crea una cola innecesaria de aprobaciones. Las responsabilidades concretas se acuerdan localmente: la diapositiva es un modelo de conversación, no una matriz RACI universal.

**Transición:** Volver a Preguntas.

---

## 18. Apoyo: diseñar el entorno, no ser una fábrica de IA

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** DesignOps diseña el entorno operativo, en lugar de construir las herramientas de IA de todos.

**Concepto visual:** Seis responsabilidades y cinco tipos de trabajo de producto.

**Interacción / revelado:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** El papel emergente incluye gobernanza, inteligencia de diseño, arquitectura de flujos con expertos, sistemas de calidad, habilitación y medición. «Arquitecto de sistemas operativos de IA» es una posible dirección, no un cargo prescrito. Los arquetipos de la fuente se conservan como tipos de trabajo: prototipar, construir, simplificar o mejorar, crecer y mantener. Sus riesgos y necesidades de evaluación son distintos. La fuente incluye una atribución externa no verificada; esta edición no atribuye autoría a esos arquetipos. No conviertas el modelo en la obligación de que DesignOps sea un equipo de ingeniería de IA.

**Transición:** Volver a Preguntas.

---

## 19. Apoyo: un sistema de diseño preparado para IA

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** Prepararse para IA añade significado, límites, ejemplos y evaluación al sistema de diseño existente.

**Concepto visual:** Las bases más razones utilizables por máquinas, con responsabilidad sobre el contexto común.

**Interacción / revelado:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** Conserva tokens, componentes, patrones y guías. Añade metadatos semánticos, reglas de uso, ejemplos, límites, requisitos de accesibilidad, relaciones, equivalentes de código y criterios. Empieza por un patrón, no por toda la biblioteca. Incluye ejemplos válidos e inválidos, acceso permitido a datos, origen, versión, vigencia y responsable. Legible para IA no significa público, recuperable sin restricciones ni automáticamente correcto. La investigación y las experiencias existentes siguen siendo contexto importante más allá de la biblioteca.

**Transición:** Volver a Preguntas.

---

## 20. Apoyo: flujos independientes del modelo y prompts canónicos

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** Construye conocimiento, reglas, flujos y evaluación duraderos alrededor de modelos sustituibles.

**Concepto visual:** Conocimiento, reglas, flujos y evaluación compartidos permanecen mientras cambian los modelos.

**Interacción / revelado:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** Modelos y herramientas cambiarán. Conserva conocimiento institucional, permisos, flujos, ejemplos y criterios de aceptación. Independencia del modelo no significa adaptación cero: capacidades, límites de contexto, privacidad y comportamiento varían. Repite una evaluación representativa antes de cambiar de modelo. Los expertos crean juntos los prompts canónicos y los gestionan como conocimiento versionado; DesignOps no los elige en solitario. Estandarizar ofrece un punto de partida informado, no prohíbe explorar.

**Transición:** Volver a Preguntas.

---

## 21. Apoyo: definiciones de métricas y plan de medición

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** Definiciones operativas, trabajo comparable y límites de la evidencia importan más que el acabado del panel.

**Concepto visual:** Definiciones, unidades y métodos junto a un protocolo breve de piloto.

**Interacción / revelado:** Panel vuelve a la diapositiva 13 con referencia y piloto juntos. Preguntas regresa al menú de temas.

**Notas del ponente:** Define «concepto validado» antes de medir tiempo: aceptación del revisor más el umbral acordado de evidencia de usuarios. Cuenta entregables aceptados, no generaciones en bruto. Separa días transcurridos de horas-persona, producción de revisión, y número de defectos de gravedad. Define denominadores de cumplimiento, retrabajo, reutilización y divergencia. Un experimento completo registra aprendizaje y decisión, no solo un lanzamiento. Compara tareas y dotaciones similares; documenta muestra, dispersión, exclusiones y complejidad. Usa recogida de datos aprobada con controles de privacidad. La revisión puede aumentar aunque baje el esfuerzo total, pero un pequeño piloto observacional no establece causalidad. Fija umbrales de decisión antes de ver resultados y mide éxito en tareas u otros resultados relevantes. Los valores del panel son aproximaciones preliminares de experimentación inicial, no mediciones validadas.

**Transición:** Volver al panel o a Preguntas.

---

## 22. Apoyo: la ventaja es la memoria de la organización

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** La diferencia está en el conocimiento de la organización bien gobernado, no en la fidelidad a un modelo.

**Concepto visual:** Cinco capas de diseño con IA, desde modelos hasta la infraestructura conectiva de DesignOps.

**Interacción / revelado:** Escenario: las cinco capas completas. Revisión: Construir las capas de contexto destaca una capa por clic; al completarlas vuelve a la base.

**Notas del ponente:** Los modelos aportan capacidades. Agentes y herramientas las conectan con tareas. El contexto aporta lo que el modelo no sabe por sí mismo: tokens, componentes, investigación, producto, marca, accesibilidad, terminología, flujos, repositorios, solicitudes de cambios, experiencias y decisiones previas. La gestión responsable añade límites, exclusiones, evaluación y controles humanos. DesignOps conecta las capas. Es un modelo de responsabilidades, no una arquitectura de software obligatoria. No introduzcas todos los datos de la organización en un modelo: permisos, privacidad, origen, calidad de fuentes, vigencia y responsables determinan qué contexto puede usarse. El sistema de diseño es parte de la memoria, no toda ella.

**Transición:** Volver a Preguntas o usar el apoyo del ciclo de vida para situar las responsabilidades.

---

## 23. Apoyo: DesignOps en el ciclo de vida del producto

**Tiempo:** Apoyo opcional, fuera del tiempo de conferencia

**Idea clave:** Gobernanza, contexto y evaluación acompañan al trabajo en cada etapa del ciclo de vida.

**Concepto visual:** Cinco fases sobre una banda persistente de infraestructura común; revisión conserva los paneles por fase.

**Interacción / revelado:** Escenario: resumen estático de cinco fases. Revisión: selecciona una para ver aporte de IA, infraestructura de DesignOps y control humano.

**Notas del ponente:** Descubrir: la IA puede agrupar y recuperar investigación; DesignOps apoya consentimiento, trazabilidad, calidad de fuentes y reutilización. Definir: la IA redacta encargos e identifica carencias; estructura, vocabulario y fuentes compartidas fundamentan el problema. Diseñar: alternativas y prototipos se apoyan en reglas, prompts, accesibilidad y crítica. Construir: el código generado necesita metadatos de componentes, patrones admitidos, tokens, validación y revisión conjunta. Medir: la IA resume observaciones, pero las personas interpretan resultados, registran límites y deciden qué cambiar. No lo conviertas en un catálogo de herramientas. Comenta una o dos fases con la banda persistente; usa revisión solo si necesitas el detalle.

**Transición:** Volver a Preguntas. La decisión de alta de la charla ejemplifica la conexión entre diseño y construcción.

## Experimentación inicial: valores aproximados

**Experimentación inicial · valores aproximados.** No son mediciones exactas, resultados validados, referencias de rendimiento, evidencia causal ni previsiones. Se muestran referencia, piloto y cambio juntos; los porcentajes usan puntos porcentuales.

| Métrica | Referencia | Piloto | Cambio | Unidad / contexto | Categoría |
| --- | --- | --- | --- | --- | --- |
| Esfuerzo de producción | 18h | 11h | −7 h | horas-persona / concepto aceptado | Anticipado / proceso |
| Esfuerzo de revisión | 4h | 6h | +2 h | horas-persona / concepto aceptado | Anticipado / proceso |
| Cumplimiento del sistema de diseño | 78% | 90% | +12 pp | % de comprobaciones aplicables superadas | Anticipado / proceso |
| Reutilización de contexto aprobado | 25% | 70% | +45 pp | % de entregables que citan contexto aprobado | Anticipado / proceso |
| Ritmo de experimentación | 1/sem | 2/sem | +1 /sem | experimentos terminados / semana | Anticipado / proceso |
| Encargo → concepto validado | 9d | 6d | −3 d | mediana de días transcurridos | Resultado del flujo |
| Ritmo de producción de diseño | ~3–4/sem | ~1–2/sem | ≈−2/sem (estimación por puntos medios) | entregables aceptados / equipo con ciclo integral de 8 semanas | Resultado del flujo |
| Tasa de retrabajo / revisión | 35% | 24% | −11 pp | % de entregables que requieren cambios importantes | Resultado del flujo |
| Defectos de accesibilidad / calidad | 6/10 | 4/10 | −2 /10 | defectos abiertos / 10 pantallas revisadas | Resultado del flujo |
| Divergencia entre diseño y código | 28% | 18% | −10 pp | % de instancias de interfaz auditadas divergentes | Resultado del flujo |

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
