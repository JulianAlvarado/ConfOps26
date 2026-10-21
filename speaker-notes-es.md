# DesignOps como infraestructura de IA

**Presentación bilingüe aprobada (V3), versión principal que sustituye a V2.**

Basada en V2 bilingüe congelada `e39ef62f1729553773fa4a4f097f5c8cdf33d138`.
15 diapositivas principales + Preguntas + 8 apéndices = 24. Inter local, bajo licencia OFL. Biografía restaurada en la posición 3 con placeholders neutrales.

Generado desde app.js y spanish.js mediante `node check.mjs --write-notes`.

## Ritmo

| Diapositivas | Intervalo |
| --- | --- |
| 1–4 | 0:00–3:00 |
| 5–8 | 3:00–10:40 |
| 9–10 | 10:40–12:20 |
| 11 (antes) | 12:20–13:50 |
| 12 (después) | 13:50–15:35 |
| 13–14 | 15:35–18:30 |
| 15 | 18:30–20:00 |
| 16 | 20:00–30:00 |
| 17–24 | Opcionales |

La demo conserva 270 segundos; cierre, 90; preguntas, 600. El piloto está en el apéndice 24. El recorrido dividido conserva 90 segundos antes + 105 después. La biografía recupera sus 30 segundos: total de conferencia, 1.200 segundos.

## Escenario y revisión

S abre Escenario; F activa pantalla completa opcional; Escape o S restaura revisión. Las flechas avanzan o retroceden la cadena y la alineación de la diapositiva 4, la demo y el cierre antes de cambiar de diapositiva, tanto en revisión como en Escenario. Las seis pestañas muestran el recorrido completo; no hay Reiniciar ni Siguiente duplicado. Las teclas nativas del formulario no navegan. Inicio/Fin y flechas dentro de las pestañas seleccionan estados. El botón principal Siguiente recorre la demo. Cambiar de idioma con ES/EN o L conserva el estado y los datos locales; L no intercepta escritura, notas ni diálogos. Al salir de Escenario se restaura el estado de revisión. La presentación se escala en pantallas pequeñas. Nada se guarda ni envía.

La referencia en la 12 abre el piloto 24 y vuelve a su origen. Definiciones desde la 14 vuelve al panel; desde Preguntas vuelve a Preguntas. El ciclo completo no requiere clics. Se conserva el icono de evaluación ◎.

## 1. La IA nos acelera. ¿Quién mantiene la coherencia?

**Tiempo:** 0:00–0:45 (45 segundos)

**Idea clave:** La IA aumenta la capacidad de producción. DesignOps mantiene la coherencia de la organización.

**Concepto visual:** Una fuente común se ramifica en formas distintas: más producción, menos uniformidad.

**Interacción:** Un breve trazado inicial presenta el motivo del flujo. Las diapositivas nunca avanzan solas.

**Notas del ponente:** Abre con la tensión, no con una lista de herramientas. Los equipos generan encargos, conceptos, resúmenes de investigación y código más rápido. Crear más deprisa no garantiza una experiencia coherente para el cliente. Seguiremos un problema ilustrativo de incorporación: un formulario funcional impide empezar a una persona que está sola. Veremos cómo el equipo lo corrige, guarda la lección en una guía compartida y comprueba el siguiente resultado. Después plantearemos qué debe mantener DesignOps alrededor de ese trabajo y cómo un piloto acotado podría comprobar su valor. El ejemplo está preparado de antemano; no informa de resultados de una organización.

**Transición:** ¿Qué cambia cuando la producción se distribuye por todo el equipo?

---

## 2. Todos podemos generar

**Tiempo:** 0:45–1:30 (45 segundos)

**Idea clave:** La generación distribuida desplaza el cuello de botella hacia la alineación, la calidad y la gobernanza.

**Concepto visual:** Cuatro carriles paralelos: producto, investigación, diseño e ingeniería.

**Interacción:** Revisión: las cuatro funciones se activan al entrar en la diapositiva, con cambios de color escalonados en los entregables y las viñetas. Sin control de generación ni avance automático. Escenario y movimiento reducido muestran el estado completo y estático.

**Notas del ponente:** Cada disciplina gana capacidad de producción. Producto genera encargos e hipótesis; investigación sintetiza evidencia; diseño explora conceptos; ingeniería genera componentes y pruebas. La generación se distribuye, pero la experiencia no es intercambiable. El mismo modelo de lenguaje puede interpretar el producto de forma distinta en cada carril. Son categorías de apoyo, no garantías de exactitud. Invita al público a imaginar los cuatro carriles produciendo a la vez. El nuevo límite es acordar qué producir, qué encaja en el sistema y quién lo evalúa.

**Transición:** Veamos cómo la producción distribuida puede crear más variación.

---

## 3. Sobre mí

**Tiempo:** 1:30–2:00 (30 segundos)

**Idea clave:** Preséntate y explica la perspectiva que aportas sobre DesignOps e IA.

**Concepto visual:** Espacios neutros para fotos en la mitad izquierda; biografía breve en la derecha. Las fotos del ponente están pendientes.

**Interacción:** Sin pasos ni controles.

**Notas del ponente:** Julian Alvarado es gerente sénior de programas y líder de operaciones de diseño en Microsoft. Ayuda a Xbox Design a crecer con mejores sistemas, procesos más claros y un uso responsable de la IA. Colabora con equipos y estudios para mejorar cómo los diseñadores planifican, aprenden y entregan su trabajo, y construir organizaciones creativas resilientes y centradas en las personas. Fuera del trabajo, practica CrossFit a diario y se define como un «eterno cinturón azul» de jiu-jitsu. Músico retirado, sigue disfrutando de los conciertos y de dibujar en casa. Ahora escucha a Radiohead, Lenny Kravitz, Oasis y Crosses. Esta edición en español conserva la biografía y los intereses facilitados por el ponente. Resume tu función y su relación con la charla en 30 segundos, sin leer la biografía completa. La conferencia conserva 1.200 segundos; la demo, 270; el cierre, 90; y las preguntas, 600.

**Transición:** Volvamos al reto común: sin condiciones compartidas, producir más puede generar más variación.

---

## 4. La paradoja de la aceleración

**Tiempo:** 2:00–3:00 (60 segundos)

**Idea clave:** El contexto y la evaluación compartidos gobiernan la variación sin eliminar la exploración útil.

**Concepto visual:** Una cadena causal sobre ramas divergentes; una banda de criterios comunes alinea su tratamiento.

**Interacción:** Revisión y Escenario empiezan con los patrones inactivos. La primera pulsación de Siguiente activa todos los patrones y la cadena causal completa. La segunda aplica contexto y evaluación juntos. La tercera avanza a la diapositiva 5. Anterior retira la alineación y después desactiva todos los patrones antes de salir de la 3. Las teclas siguen los mismos dos pasos, sin repetir al mantenerlas pulsadas. No hay controles locales. Volver o cambiar de idioma conserva el progreso; Escenario empieza de cero y restaura la revisión al salir.

**Notas del ponente:** Lee la cadena con calma: más producción, más variación, más decisiones, más oportunidades de incoherencia. Es un mecanismo conceptual, no una previsión estadística. La variación ayuda a explorar; sin gestión, encarece las conexiones entre sistemas. Puede generar términos contradictorios, investigación duplicada, patrones inaccesibles, decisiones de IA sin documentar y desviaciones del sistema de diseño. Las «17 versiones de un patrón» de la fuente son un recurso retórico, no una estadística; por eso no se representan como datos. Aplica contexto y evaluación comunes: las opciones pueden ser distintas y respetar los mismos límites. El verde es una metáfora explicativa, no una garantía de que los criterios eliminen todos los defectos.

**Transición:** Tres preguntas nos ayudan a gobernar esa variación. Las aplicaremos al setup de un espacio de trabajo.

---

## 5. Gestionar. Contexto. Evaluar.

**Tiempo:** 3:00–4:00 (60 segundos)

**Idea clave:** GESTIONAR: ¿Qué debemos usar y cómo debemos usarlo? CONTEXTO: La capa de inteligencia para tomar las decisiones correctas. EVALUAR: ¿Qué lo hace suficientemente bueno?

**Concepto visual:** Tres encabezados en coral con texto de apoyo, con espacio para asimilar cada diferencia.

**Interacción:** Estática en Escenario y revisión. Los ejemplos del setup individual y las bases operativas se explican con estas notas, sin listas que compitan en pantalla.

**Notas del ponente:** Mantén un único modelo. La demo sigue a alguien que crea un espacio de trabajo por su cuenta: usa esa necesidad para concretar las tres responsabilidades. Gobernar pregunta qué debemos usar y cómo debemos usarlo: en este caso ilustrativo no se introducen datos reales de contacto; diseño e ingeniería revisan; y un líder de producto responde por la regla acotada. El contexto es la capa de inteligencia para tomar las decisiones correctas: reúne el encargo de setup individual, las invitaciones opcionales y el patrón de formulario admitido. Evaluar pregunta qué lo hace suficientemente bueno: si el setup termina sin correo, y comprueba etiquetas, errores, foco y viabilidad. Cumplir ese requisito no demuestra valor para el usuario. Estas pruebas se enmarcan en límites de herramientas, datos, privacidad, riesgo y lanzamiento. La gestión responsable sostiene la gobernanza; los sistemas transportan el contexto; la habilitación pone las tres funciones en práctica mediante flujos, prompts, criterios y formación. Este es el modelo central, no otro marco que memorizar.

**Transición:** Sigamos esas tres responsabilidades a través de una decisión concreta.

---

## 6. Conserva lo aprendido. (Evals en pequeña escala)

**Tiempo:** 4:00–8:30 (270 segundos)

**Idea clave:** El equipo corrige el formulario. DesignOps pone lo aprendido a disposición del siguiente equipo y sus herramientas de IA.

**Concepto visual:** Seis pestañas visibles muestran el recorrido completo; una sola superficie seleccionada deja espacio al formulario y la lección guardada.

**Interacción:** Momento de Escenario 2: Siguiente y las teclas de avance recorren las seis pestañas antes de cambiar de diapositiva; Anterior y las teclas inversas retroceden un estado. Las pestañas admiten flechas, Inicio y Fin. El formulario conserva sus teclas nativas. Sin Reiniciar ni Siguiente duplicado. Cambiar de idioma conserva datos y progreso.

**Notas del ponente:** Presenta aquí el ejemplo ficticio: una persona quiere crear un espacio de trabajo sola. Dedica 270 segundos, 4 minutos y 30 segundos, a los seis pasos. Los 90 segundos recuperados de la diapositiva de resumen eliminada son pausas de explicación e interacción, no más interfaz ni un ejercicio: 30 segundos para comprender la necesidad bloqueada, 30 para la validación y la respuesta del teclado, y 30 para explicar por qué la lección necesita responsable y condición de revisión. Primero: la persona quiere empezar sola. Segundo: el formulario atribuido a la IA exige el correo de otra persona y la bloquea. Tercero: diseño e ingeniería trasladan las invitaciones a después de crear el espacio. Cuarto: prueba el formulario local revisado solo con un nombre; muestra validación y teclado si resulta útil. No se guarda ni envía nada. Quinto: corregir una pantalla no basta. DesignOps registra la lección con el supuesto de setup individual, la razón del equipo, un líder de producto responsable y revisión tras el piloto. La guía debe estar donde el siguiente equipo y sus herramientas de IA puedan usarla. Sexto: el siguiente formulario propuesto permite el setup sin invitar a nadie. Una persona verifica ese comportamiento y sigue revisando accesibilidad y resultados para usuarios. No afirmes que la regla garantiza resultados futuros ni que es un estudio real. Todos los estados son ilustrativos y están preparados de antemano. Los expertos de producto deciden cómo debe funcionar la experiencia; DesignOps ayuda a que la decisión sobreviva a esta pantalla.

**Transición:** La persona ya puede completar el setup sola. ¿Qué más debe comprobar el equipo?

---

## 7. Cuando generar cuesta poco, evaluar es estratégico

**Tiempo:** 8:30–9:30 (60 segundos)

**Idea clave:** Las pruebas automáticas apoyan el juicio humano responsable; no demuestran la calidad del diseño.

**Concepto visual:** Varios candidatos atraviesan seis criterios hasta llegar a una decisión humana explícita.

**Interacción:** Flujo estático, sin puntuaciones de IA inventadas ni aprobación automática.

**Notas del ponente:** Recorre los criterios: componentes y tokens aprobados; necesidades identificadas sin complejidad innecesaria; accesibilidad; principios de marca y contenido; estrategia de producto; y viabilidad técnica. Los expertos definen juntos el estándar. Las pruebas automáticas detectan incumplimientos concretos, pero superarlas no demuestra utilidad, coherencia ni éxito del usuario. Una persona acepta, revisa o rechaza y registra sus razones. Mantén la evidencia vinculada a las decisiones. Los diseñadores dirigen y evalúan cada vez más alternativas, pero el oficio y el conocimiento del área siguen siendo indispensables.

**Transición:** Una vez registrado el juicio, ¿cómo lo mantenemos útil sin enterrarlo en un archivo?

---

## 8. El ciclo de aprendizaje de la organización

**Tiempo:** 9:30–10:40 (70 segundos)

**Idea clave:** Conserva la decisión y su razón en una guía común; después comprueba el siguiente resultado.

**Concepto visual:** El ciclo completo se ve sin interacción, incluida la comprobación final y el regreso a la guía compartida.

**Interacción:** Sin control de avance del ciclo. El ciclo completo se lee en revisión o Escenario.

**Notas del ponente:** Retoma la decisión de ofrecer invitaciones después del setup. No guardes solo el formulario corregido: guarda por qué cambió y quién revisará la guía. Sigue la secuencia: la IA propone con la guía común; el equipo revisa según la necesidad del usuario; guarda la decisión, la razón y el responsable; DesignOps actualiza la guía para el siguiente equipo y su IA; una persona comprueba el siguiente resultado. El ejemplo no demuestra que un único campo sea siempre mejor ni que la guía evite errores automáticamente. Es ficticio y la validación con usuarios está pendiente. Si cambia el supuesto del setup individual, el líder de producto revisa la guía. DesignOps mantiene fuente, versión, acceso y fecha de revisión. Retira las lecciones que ya no sirven, en vez de convertir cada observación en una política universal.

**Transición:** Ese mantenimiento es trabajo reconocible de DesignOps, con un alcance mayor.

---

## 9. El papel se amplía; las bases permanecen

**Tiempo:** 10:40–11:30 (50 segundos)

**Idea clave:** Personas, procesos y sistemas siguen siendo las bases; lo que se amplía es su alcance.

**Concepto visual:** Personas, Procesos y Sistemas agrupan responsabilidades actuales y las conectan con su alcance ampliado con IA.

**Interacción:** Comparación estática; el alcance ampliado está visible desde el principio.

**Notas del ponente:** Recuerda los fundamentos. DesignOps mejora las condiciones para diseñar mediante personas, procesos y sistemas. Dotación, incorporación, rituales, herramientas y colaboración no desaparecen. La IA amplía el alcance: de apoyar a diseñadores a apoyar al ecosistema de producto; de documentar procedimientos a hacer utilizable el conocimiento al generar; de medir solo eficiencia a medir calidad y resultados. Es una ampliación, no un rechazo de las operaciones tradicionales ni un mandato de reorganización.

**Transición:** Una metáfora útil para ese papel ampliado es el plano de control.

---

## 10. DesignOps como plano de control

**Tiempo:** 11:30–12:20 (50 segundos)

**Idea clave:** DesignOps conecta actores distribuidos mediante reglas, contexto y evaluación compartidos.

**Concepto visual:** El trabajo con IA es una sola capa compartida entre actores distintos; DesignOps sigue siendo la capa operativa que conecta, no la IA.

**Interacción:** Se conserva la geometría radial original, con un único círculo compartido de IA que pasa por detrás de las tarjetas opacas de las funciones. Las conexiones se iluminan una vez al entrar, sin botón ni avance automático de diapositiva. Escenario y movimiento reducido muestran todas las conexiones. Un resumen textual accesible describe la capa compartida de IA.

**Notas del ponente:** El plano de control distingue definir las condiciones del trabajo de hacer el trabajo de todos. Producto, investigación, diseño, prototipado e ingeniería conservan sus responsabilidades. DesignOps coordina contexto reutilizable, límites según el riesgo, criterios de evaluación, responsables y habilitación. No debe convertirse en una cola central de aprobaciones. Seguridad, Legal, TI, plataformas y expertos siguen siendo socios esenciales. Unos límites claros permiten avanzar sin pedir repetidamente permiso para tareas conocidas y seguras.

**Transición:** La guía compartida también cambia cómo pasa el trabajo entre estas personas.

---

## 11. Antes de la IA: traspasos secuenciales

**Tiempo:** 12:20–13:50 (90 segundos)

**Idea clave:** Los traspasos secuenciales pueden retrasar la opinión del usuario aunque cada disciplina haga bien su trabajo.

**Concepto visual:** Un recorrido anterior: investigación → encargo → maquetas → construcción → lanzamiento, entre necesidad y opinión del cliente.

**Interacción:** La animación secuencial de traspasos se inicia una vez al entrar, sin control de repetición ni avance automático. Escenario y movimiento reducido muestran todo de forma estática; la animación no representa una duración medida.

**Notas del ponente:** Este recorrido anterior es un patrón explicativo deliberadamente simplificado, no una afirmación de que todos los equipos anteriores a la IA trabajaran de forma secuencial. Investigación informa el encargo, diseño crea maquetas, ingeniería construye y los clientes responden. Cada disciplina puede hacer un gran trabajo mientras la espera y la opinión tardía limitan el aprendizaje. Usa los 90 segundos para distinguir producción y espera, y explicar cuándo se comparte una decisión. La siguiente diapositiva propone trabajo sincronizado, no una historia universal ni una mejora medida. Ambos recorridos suman 195 segundos: los 60 originales más los 135 del piloto trasladado al apéndice.

**Transición:** ¿Qué cambia cuando el propósito común conecta producción y aprendizaje?

---

## 12. Con IA: propósito común y trabajo sincronizado

**Tiempo:** 13:50–15:35 (105 segundos)

**Idea clave:** Prueba la producción colaborativa y dedica la capacidad que ganes a aprender del cliente.

**Concepto visual:** Un recorrido posterior propuesto: propósito común, trabajo colaborativo sincronizado, producción con IA y experimentos con opinión del cliente.

**Interacción:** La animación verde de colaboración se inicia al entrar, sin control de repetición. Escenario y movimiento reducido mantienen todo legible sin animación. La referencia al piloto de 30 días abre el apéndice 24; su enlace de regreso vuelve aquí. El piloto queda fuera del tiempo de conferencia.

**Notas del ponente:** El recorrido anterior es una simplificación deliberada, no una afirmación de que todos los equipos trabajaban secuencialmente antes de la IA. La investigación informa el encargo, diseño crea propuestas, ingeniería construye y el cliente responde al final. La alternativa propuesta parte de Misión, Metas y Métricas: las MMM de la fuente, donde Metas recoge los hitos. PM, investigación, diseño e ingeniería comparten propósito; especificación, conceptos, viabilidad y prototipos HTML/CSS evolucionan juntos. Los lanzamientos pueden convertirse en experimentos que informan otra iteración. La IA puede reducir producción, pero siguen contando revisión, integración y dependencias. No prometas lanzamientos en una semana ni aceleración universal. Mide tiempo transcurrido, horas-persona, esperas, validación con clientes y ritmo experimental. La animación compara secuencias, no velocidades numéricas. Un prototipo no es un lanzamiento de producción; la evidencia de usuarios sigue siendo necesaria.

**Transición:** La guía compartida puede partir de la documentación que el equipo ya tiene.

---

## 13. De la documentación a los criterios ejecutables

**Tiempo:** 15:35–16:50 (75 segundos)

**Idea clave:** Convierte el conocimiento del área en contexto versionado y reutilizable, con criterios verificables.

**Concepto visual:** Tres recorridos de documentación a guías convergen en contexto avanzado para un sprint de producción. Una banda común de métricas evalúa rapidez, calidad y resultados en todo el flujo.

**Interacción:** Flujo convergente estático en revisión, Escenario e impresión. Explica las siete relaciones detalladas, la procedencia del ejemplo y la validación pendiente con usuarios desde estas notas; el destino resume contexto, no código ejecutable.

**Notas del ponente:** Usa la lección del setup individual como artefacto concreto, no como excusa para narrar siete marcos nuevos. Explica su fuente supuesta, el requisito de setup individual y la decisión sobre invitaciones, el líder de producto responsable, la versión 1 y la revisión tras el piloto o un cambio de encargo. La evidencia de usuarios sigue pendiente. Las siete transformaciones conservan la fuente: guías a reglas legibles por máquinas; sistemas de diseño a sistemas utilizables por IA; plantillas a prompts canónicos; documentación a paquetes de contexto; crítica a criterios de evaluación; procedimientos a flujos de personas e IA; métricas de eficiencia a rapidez, calidad y resultados. Un paquete parecido a YAML no se aplica solo. Siguen siendo necesarias integración, permisos, validación y revisión humana. DesignOps mantiene el paquete; los expertos lo redactan, aprueban y revisan su validez.

**Transición:** Mantener esta guía cuesta tiempo. ¿Cómo sabríamos si conviene adoptar el flujo?

---

## 14. Medir rapidez y coherencia

**Tiempo:** 16:50–18:30 (100 segundos)

**Idea clave:** Evalúa el flujo completo: rapidez, coste de revisión, calidad, coherencia y resultados para el cliente.

**Concepto visual:** Una tabla compartida muestra una sola vez Base, Piloto y Cambio; los grupos separan resultados del flujo de indicadores anticipados y de proceso.

**Interacción:** Las 10 medidas abre el diálogo completo. Definiciones abre el apéndice 21 y regresa aquí; al entrar desde Preguntas regresa a Preguntas. Cerrar el diálogo devuelve el foco al control que lo abrió.

**Notas del ponente:** Son valores aproximados orientados por la experimentación inicial del ponente, no mediciones exactas, referencias de rendimiento ni previsiones. El ponente facilitó los rangos de producción de diseño; las otras nueve comparaciones conservan los valores sintéticos anteriores, que considera próximos a observaciones informales. No se han facilitado registros, tamaños de muestra ni métodos: no afirmes resultados validados ni retorno causal de la inversión. De referencia a piloto: mediana del encargo al concepto validado, 9 a 6 días; producción de diseño, ~3–4/sem a ~1–2/sem, entregables aceptados en un equipo con ciclo integral de 8 semanas. El cambio ≈−2/sem es una estimación por puntos medios: 1,5 menos 3,5, no un cambio observado de forma independiente. La tasa semanal y el ciclo integral de ocho semanas son conceptos distintos: no dividas por ocho ni infieras un total de ocho semanas. La producción disminuye: no la presentes como mejora. Esfuerzo de producción, 18 a 11 horas por concepto; revisión, 4 a 6 horas; retrabajo, 35% a 24%; comprobaciones aplicables superadas, 78% a 90%; defectos abiertos de accesibilidad/calidad, 6 a 4 por 10 pantallas; divergencia diseño-código, 28% a 18%; experimentos, 1 a 2 por semana; reutilización de contexto aprobado, 25% a 70%. La revisión aumenta: generar más rápido no implica revisar menos. Los indicadores anticipados y de proceso reflejan comportamiento y preparación; los de resultado comprueban lo que entrega el flujo. El cumplimiento es una señal anticipada de calidad, no prueba de beneficio para el usuario. Se muestran ambos valores aproximados y sus cambios, sin escalas de barras que compitan. Los porcentajes cambian en puntos porcentuales, no en porcentajes relativos. Iguala alcance, dotación, definición de entregable y criterios; incluye muestra y dispersión antes de presentar una comparación validada. Registra por separado el éxito del cliente en sus tareas. No se aportan datos de resultados de clientes.

**Transición:** Vuelve a la pregunta central. La referencia al piloto del flujo propuesto sigue disponible en el apéndice 24.

---

## 15. ¿Quién diseña el sistema?

**Tiempo:** 18:30–20:00 (90 segundos)

**Idea clave:** La IA no elimina la necesidad de DesignOps. Lo convierte en infraestructura.

**Concepto visual:** Una pregunta con espacio, una respuesta que se revela con intención y tres afirmaciones finales.

**Interacción:** Momento de Escenario 3: pausa, Derecha revela DesignOps y otra Derecha abre Preguntas. Izquierda oculta la respuesta antes de retroceder. En revisión, Siguiente o una tecla de avance revela primero y luego avanza. No hay botón aparte para revelar.

**Notas del ponente:** Dedica 90 segundos al cierre. Baja el ritmo. Lee la pregunta y deja espacio: si la IA forma parte de cómo diseñamos productos, ¿quién diseña el sistema en el que opera? Revela DesignOps. No es una reivindicación de control de toda la IA por una función. Es una invitación a conectar experiencia, gobernanza, conocimiento, flujos y evaluación. La IA crea capacidad. Los sistemas crean coherencia. La gestión responsable crea confianza. DesignOps conecta las tres. El futuro no consiste solo en gestionar trabajo alrededor del diseño, sino en diseñar la infraestructura con la que personas e IA crean productos juntas. El reto práctico es un flujo, una referencia, un paquete de contexto mantenido, controles humanos con responsable y evidencia de que no se ha cambiado calidad por rapidez. Termina con la tesis y una pausa, no con más herramientas.

**Transición:** Conversemos. ¿Dónde genera tu equipo más rápido de lo que puede mantener la coherencia?

---

## 16. Conversemos — Preguntas

**Tiempo:** 10 minutos de preguntas, fuera de la conferencia

**Idea clave:** Usa la conversación para relacionar el modelo operativo con las limitaciones del público.

**Concepto visual:** Siete temas de apoyo y enlaces a LinkedIn y GitHub junto a la invitación a conversar.

**Interacción:** Selecciona un tema para abrir su apoyo; todos permiten volver a Preguntas.

**Notas del ponente:** Reserva diez minutos para conversar. Invita a compartir flujos concretos, no predicciones abstractas. Los siete apoyos cubren responsables de gobernanza, evolución del papel, sistemas preparados para IA, flujos independientes del modelo, medición, capas de contexto y ciclo de vida. Las capas y el ciclo son perspectivas complementarias, no nuevos modelos que memorizar durante la charla. Si preguntan si esto es solo gobernanza de IA, vuelve a la decisión: la gobernanza es una parte; contexto, flujos, evaluación y habilitación la hacen útil en el ecosistema de producto. Si preguntan qué hacer mañana: mapear, identificar, codificar, estandarizar y medir.

**Transición:** Abre un apoyo solo si ayuda a responder una pregunta.

---

## 17. Apoyo: responsabilidad compartida de gobernanza

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** Los límites de riesgo, el acceso, el modelo operativo y el criterio de producto necesitan responsables explícitos.

**Concepto visual:** Cuatro ámbitos de responsabilidad; ninguno reclama todo el modelo operativo de IA.

**Interacción:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** Seguridad y Legal fijan los límites de riesgo; TI y plataformas gestionan tecnología y acceso. DesignOps traduce políticas en condiciones útiles de trabajo con los expertos. Producto, investigación, diseño e ingeniería responden por sus decisiones y la calidad del lanzamiento. Una buena gobernanza elimina ambigüedades repetitivas mediante rutas aprobadas, controles humanos según el riesgo, escalado y excepciones documentadas. Una mala gobernanza crea una cola innecesaria de aprobaciones. Las responsabilidades concretas se acuerdan localmente: la diapositiva es un modelo de conversación, no una matriz RACI universal.

**Transición:** Volver a Preguntas.

---

## 18. Apoyo: diseñar el entorno, no ser una fábrica de IA

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** DesignOps diseña el entorno operativo, en lugar de construir las herramientas de IA de todos.

**Concepto visual:** Seis responsabilidades y cinco tipos de trabajo de producto.

**Interacción:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** El papel emergente incluye gobernanza, inteligencia de diseño, arquitectura de flujos con expertos, sistemas de calidad, habilitación y medición. «Arquitecto de sistemas operativos de IA» es una posible dirección, no un cargo prescrito. Los arquetipos de la fuente se conservan como tipos de trabajo: prototipar, construir, simplificar o mejorar, crecer y mantener. Sus riesgos y necesidades de evaluación son distintos. La fuente incluye una atribución externa no verificada; esta edición no atribuye autoría a esos arquetipos. No conviertas el modelo en la obligación de que DesignOps sea un equipo de ingeniería de IA.

**Transición:** Volver a Preguntas.

---

## 19. Apoyo: un sistema de diseño preparado para IA

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** Prepararse para IA añade significado, límites, ejemplos y evaluación al sistema de diseño existente.

**Concepto visual:** Las bases más razones utilizables por máquinas, con responsabilidad sobre el contexto común.

**Interacción:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** Conserva tokens, componentes, patrones y guías. Añade metadatos semánticos, reglas de uso, ejemplos, límites, requisitos de accesibilidad, relaciones, equivalentes de código y criterios. Empieza por un patrón, no por toda la biblioteca. Incluye ejemplos válidos e inválidos, acceso permitido a datos, origen, versión, vigencia y responsable. Legible para IA no significa público, recuperable sin restricciones ni automáticamente correcto. La investigación y las experiencias existentes siguen siendo contexto importante más allá de la biblioteca.

**Transición:** Volver a Preguntas.

---

## 20. Apoyo: flujos independientes del modelo y prompts canónicos

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** Construye conocimiento, reglas, flujos y evaluación duraderos alrededor de modelos sustituibles.

**Concepto visual:** Conocimiento, reglas, flujos y evaluación compartidos permanecen mientras cambian los modelos.

**Interacción:** Volver a Preguntas regresa al menú de temas.

**Notas del ponente:** Modelos y herramientas cambiarán. Conserva conocimiento institucional, permisos, flujos, ejemplos y criterios de aceptación. Independencia del modelo no significa adaptación cero: capacidades, límites de contexto, privacidad y comportamiento varían. Repite una evaluación representativa antes de cambiar de modelo. Los expertos crean juntos los prompts canónicos y los gestionan como conocimiento versionado; DesignOps no los elige en solitario. Estandarizar ofrece un punto de partida informado, no prohíbe explorar.

**Transición:** Volver a Preguntas.

---

## 21. Apoyo: definiciones de métricas y plan de medición

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** Definiciones operativas, trabajo comparable y límites de la evidencia importan más que el acabado del panel.

**Concepto visual:** Definiciones, unidades y métodos junto a un protocolo breve de piloto.

**Interacción:** Volver regresa al panel o a Preguntas según el origen, también en Escenario. La entrada directa vuelve al panel por defecto.

**Notas del ponente:** Define «concepto validado» antes de medir tiempo: aceptación del revisor más el umbral acordado de evidencia de usuarios. Cuenta entregables aceptados, no generaciones en bruto. Separa días transcurridos de horas-persona, producción de revisión, y número de defectos de gravedad. Define denominadores de cumplimiento, retrabajo, reutilización y divergencia. Un experimento completo registra aprendizaje y decisión, no solo un lanzamiento. Compara tareas y dotaciones similares; documenta muestra, dispersión, exclusiones y complejidad. Usa recogida de datos aprobada con controles de privacidad. La revisión puede aumentar aunque baje el esfuerzo total, pero un pequeño piloto observacional no establece causalidad. Fija umbrales de decisión antes de ver resultados y mide éxito en tareas u otros resultados relevantes. Los valores del panel son aproximaciones preliminares de experimentación inicial, no mediciones validadas.

**Transición:** Volver al panel o a Preguntas.

---

## 22. Apoyo: la ventaja es la memoria de la organización

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** La diferencia está en el conocimiento de la organización bien gobernado, no en la fidelidad a un modelo.

**Concepto visual:** Cinco capas de diseño con IA, desde modelos hasta la infraestructura conectiva de DesignOps.

**Interacción:** Escenario: las cinco capas completas. Revisión: Construir las capas de contexto destaca una capa por clic; al completarlas vuelve a la base.

**Notas del ponente:** Los modelos aportan capacidades. Agentes y herramientas las conectan con tareas. El contexto aporta lo que el modelo no sabe por sí mismo: tokens, componentes, investigación, producto, marca, accesibilidad, terminología, flujos, repositorios, solicitudes de cambios, experiencias y decisiones previas. La gestión responsable añade límites, exclusiones, evaluación y controles humanos. DesignOps conecta las capas. Es un modelo de responsabilidades, no una arquitectura de software obligatoria. No introduzcas todos los datos de la organización en un modelo: permisos, privacidad, origen, calidad de fuentes, vigencia y responsables determinan qué contexto puede usarse. El sistema de diseño es parte de la memoria, no toda ella.

**Transición:** Volver a Preguntas o usar el apoyo del ciclo de vida para situar las responsabilidades.

---

## 23. Apoyo: DesignOps en el ciclo de vida del producto

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** Gobernanza, contexto y evaluación acompañan al trabajo en cada etapa del ciclo de vida.

**Concepto visual:** Cinco fases sobre una banda persistente de infraestructura común; revisión conserva los paneles por fase.

**Interacción:** Escenario: resumen estático de cinco fases. Revisión: selecciona una para ver aporte de IA, infraestructura de DesignOps y control humano.

**Notas del ponente:** Descubrir: la IA puede agrupar y recuperar investigación; DesignOps apoya consentimiento, trazabilidad, calidad de fuentes y reutilización. Definir: la IA redacta encargos e identifica carencias; estructura, vocabulario y fuentes compartidas fundamentan el problema. Diseñar: alternativas y prototipos se apoyan en reglas, prompts, accesibilidad y crítica. Construir: el código generado necesita metadatos de componentes, patrones admitidos, tokens, validación y revisión conjunta. Medir: la IA resume observaciones, pero las personas interpretan resultados, registran límites y deciden qué cambiar. No lo conviertas en un catálogo de herramientas. Comenta una o dos fases con la banda persistente; usa revisión solo si necesitas el detalle.

**Transición:** Volver a Preguntas. La decisión de setup de la charla ejemplifica la conexión entre diseño y construcción.

---

## 24. Apoyo: tus primeros 30 días

**Tiempo:** Apéndice opcional, fuera de la conferencia

**Idea clave:** Un piloto de 30 días puede empezar en un equipo, un área de producto o la empresa, con responsables claros.

**Concepto visual:** Cuatro verbos en una línea temporal, un resultado por semana y una decisión explícita: adoptar, revisar o detener.

**Interacción:** El enlace de regreso vuelve a producción compartida (diapositiva 12), o a Preguntas si se abrió desde ese menú. La entrada directa vuelve a producción compartida por defecto.

**Notas del ponente:** Días 1–7: mapea el uso real de IA e identifica incoherencias, carencias de calidad y riesgos. Días 8–14: elige un flujo útil y acotado y reúne conocimiento pertinente. Días 15–21: nombra responsables, define controles humanos y criterios de evaluación, y establece la referencia antes del piloto. Días 22–30: realiza trabajo comparable y decide adoptar, revisar o detener. Evita empezar con datos sensibles o alto riesgo salvo que exista la gobernanza adecuada. En el equipo, los líderes de diseño e ingeniería pueden asumir un flujo con facilitación de DesignOps. En el área de producto, PM, investigación, diseño, ingeniería y un responsable del sistema coordinan patrones y resultados entre equipos. En la empresa, la responsabilidad federada de producto opera dentro de los límites de Seguridad, Legal, TI y plataformas. DesignOps conecta esos ámbitos; no decide unilateralmente políticas ni producto. Las ventanas de calendario son una propuesta inicial, no fechas de entrega prometidas.

**Transición:** Volvamos a la pregunta central: si la IA participa en el diseño, ¿quién diseña su entorno operativo?

## Experimentación inicial · valores aproximados

No son mediciones validadas, referencias del sector ni evidencia causal. No se han facilitado registros, muestras ni métodos. La tasa de producción disminuye y el esfuerzo de revisión aumenta; no se presentan como mejoras. El cambio de tasa usa puntos medios; semanas y ciclo E2E de ocho semanas no son el mismo denominador. Porcentajes: cambios en puntos porcentuales. No se inventan resultados de usuarios.

| Medida | Base | Piloto | Cambio | Unidad / contexto |
| --- | --- | --- | --- | --- |
| Esfuerzo de producción | 18h | 11h | −7 h | horas-persona / concepto aceptado |
| Esfuerzo de revisión | 4h | 6h | +2 h | horas-persona / concepto aceptado |
| Cumplimiento del sistema de diseño | 78% | 90% | +12 pp | % de comprobaciones aplicables superadas |
| Reutilización de contexto aprobado | 25% | 70% | +45 pp | % de entregables que citan contexto aprobado |
| Ritmo de experimentación | 1/sem | 2/sem | +1 /sem | experimentos terminados / semana |
| Encargo → concepto validado | 9d | 6d | −3 d | mediana de días transcurridos |
| Ritmo de producción de diseño | ~3–4/sem | ~1–2/sem | ≈−2/sem (estimación por puntos medios) | entregables aceptados / equipo con ciclo integral de 8 semanas |
| Tasa de retrabajo / revisión | 35% | 24% | −11 pp | % de entregables que requieren cambios importantes |
| Defectos de accesibilidad / calidad | 6/10 | 4/10 | −2 /10 | defectos abiertos / 10 pantallas revisadas |
| Divergencia entre diseño y código | 28% | 18% | −10 pp | % de instancias de interfaz auditadas divergentes |

Las definiciones y métodos de recogida están en el apéndice 21. Igualar alcance, personal y criterios; registrar tamaño de muestra y dispersión; acordar adoptar/revisar/detener antes de ver resultados. El ejemplo del formulario es ficticio, preparado y pendiente de validación con usuarios. El contexto no se aplica por sí solo: requiere integración, permisos, validación y revisión humana.
