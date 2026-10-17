"use strict";

const keynoteCount = 15;
const notes = [
  {
    "seconds": 45,
    "takeaway": "La IA aumenta la capacidad de producción. DesignOps mantiene la coherencia de la organización.",
    "visual": "Una fuente común se ramifica en formas distintas: más producción, menos uniformidad.",
    "interaction": "Un breve trazado inicial presenta el motivo del flujo. Las diapositivas nunca avanzan solas.",
    "body": "Abre con la tensión, no con una lista de herramientas. Los equipos generan encargos, conceptos, resúmenes de investigación y código más rápido. Crear más deprisa no garantiza una experiencia coherente para el cliente. Seguiremos un problema ilustrativo de incorporación: un formulario funcional impide empezar a una persona que está sola. Veremos cómo el equipo lo corrige, guarda la lección en una guía compartida y comprueba el siguiente resultado. Después plantearemos qué debe mantener DesignOps alrededor de ese trabajo y cómo un piloto acotado podría comprobar su valor. El ejemplo está preparado de antemano; no informa de resultados de una organización.",
    "transition": "¿Qué cambia cuando la producción se distribuye por todo el equipo?"
  },
  {
    "seconds": 45,
    "takeaway": "La generación distribuida desplaza el cuello de botella hacia la alineación, la calidad y la gobernanza.",
    "visual": "Cuatro carriles paralelos: producto, investigación, diseño e ingeniería.",
    "interaction": "Escenario: las cuatro funciones están visibles y completas. Revisión: Distribuir la generación activa una función por clic; el quinto clic reinicia el ejemplo.",
    "body": "Cada disciplina gana capacidad de producción. Producto genera encargos e hipótesis; investigación sintetiza evidencia; diseño explora conceptos; ingeniería genera componentes y pruebas. La generación se distribuye, pero la experiencia no es intercambiable. El mismo modelo de lenguaje puede interpretar el producto de forma distinta en cada carril. Son categorías de apoyo, no garantías de exactitud. Invita al público a imaginar los cuatro carriles produciendo a la vez. El nuevo límite es acordar qué producir, qué encaja en el sistema y quién lo evalúa.",
    "transition": "Antes de explorar esa variación, una breve presentación de quien comparte esta perspectiva."
  },
  {
    "seconds": 30,
    "takeaway": "Preséntate y explica la perspectiva que aportas sobre DesignOps e IA.",
    "visual": "Presentación solo con texto de Julian Alvarado, Xbox Design Ops, con la biografía y los intereses personales facilitados.",
    "interaction": "Sin pasos ni controles.",
    "body": "Julian Alvarado es gerente sénior de programas y líder de operaciones de diseño en Microsoft. Ayuda a Xbox Design a crecer con mejores sistemas, procesos más claros y un uso responsable de la IA. Colabora con equipos y estudios para mejorar cómo los diseñadores planifican, aprenden y entregan su trabajo, y construir organizaciones creativas resilientes y centradas en las personas. Fuera del trabajo, practica CrossFit a diario y se define como un «eterno cinturón azul» de jiu-jitsu. Músico retirado, sigue disfrutando de los conciertos y de dibujar en casa. Ahora escucha a Radiohead, Lenny Kravitz, Oasis y Crosses. Esta edición en español conserva la biografía y los intereses facilitados por el ponente. Resume tu función y su relación con la charla en 30 segundos, sin leer la biografía completa. La conferencia conserva 1.200 segundos; la demo, 270; el cierre, 90; y las preguntas, 600.",
    "transition": "Volvamos al reto común: sin condiciones compartidas, producir más puede generar más variación."
  },
  {
    "seconds": 60,
    "takeaway": "El contexto y la evaluación compartidos gobiernan la variación sin eliminar la exploración útil.",
    "visual": "Una cadena causal sobre ramas divergentes; una banda de criterios comunes alinea su tratamiento.",
    "interaction": "Momento de Escenario 1: la cadena completa empieza fragmentada. Derecha aplica criterios comunes y después avanza; Izquierda los retira. Revisión conserva los cuatro pasos y el control de alineación.",
    "body": "Lee la cadena con calma: más producción, más variación, más decisiones, más oportunidades de incoherencia. Es un mecanismo conceptual, no una previsión estadística. La variación ayuda a explorar; sin gestión, encarece las conexiones entre sistemas. Puede generar términos contradictorios, investigación duplicada, patrones inaccesibles, decisiones de IA sin documentar y desviaciones del sistema de diseño. Las «17 versiones de un patrón» de la fuente son un recurso retórico, no una estadística; por eso no se representan como datos. Aplica contexto y evaluación comunes: las opciones pueden ser distintas y respetar los mismos límites. El verde es una metáfora explicativa, no una garantía de que los criterios eliminen todos los defectos.",
    "transition": "Tres preguntas nos ayudan a gobernar esa variación. Las aplicaremos al alta de un espacio de trabajo."
  },
  {
    "seconds": 60,
    "takeaway": "GOBERNAR: ¿qué puede hacer la IA? CONTEXTO: ¿qué sabe? EVALUAR: ¿qué consideramos aceptable?",
    "visual": "Tres palabras con peso y tres preguntas, con espacio para asimilar cada diferencia.",
    "interaction": "Estática en Escenario y revisión. Los ejemplos del alta individual y las bases operativas se explican con estas notas, sin listas que compitan en pantalla.",
    "body": "Mantén un único modelo. La demo sigue a alguien que crea un espacio de trabajo por su cuenta: usa esa necesidad para concretar las tres preguntas. Gobernar pregunta qué puede hacer la IA y quién puede aceptarlo: en este caso ilustrativo no se introducen datos reales de contacto; diseño e ingeniería revisan; y un líder de producto responde por la regla acotada. El contexto reúne el encargo de alta individual, las invitaciones opcionales y el patrón de formulario admitido. Evaluar pregunta si el alta termina sin correo, y comprueba etiquetas, errores, foco y viabilidad. Cumplir ese requisito no demuestra valor para el usuario. Estas pruebas se enmarcan en límites de herramientas, datos, privacidad, riesgo y lanzamiento. La gestión responsable sostiene la gobernanza; los sistemas transportan el contexto; la habilitación pone las tres funciones en práctica mediante flujos, prompts, criterios y formación. Este es el modelo central, no otro marco que memorizar.",
    "transition": "Sigamos esas tres responsabilidades a través de una decisión concreta."
  },
  {
    "seconds": 270,
    "takeaway": "El equipo corrige el formulario. DesignOps pone lo aprendido a disposición del siguiente equipo y sus herramientas de IA.",
    "visual": "Un indicador del paso actual y una superficie grande. Seis estados: necesidad, error de IA, decisión del equipo, formulario funcional, lección guardada y siguiente revisión.",
    "interaction": "Momento de Escenario 2: Derecha avanza los seis pasos y luego la diapositiva; Izquierda retrocede. En el paso 4, Tab entra en el formulario de nombre; las teclas del campo y del envío no avanzan la charla. Sal con Tab para volver a navegar. Revisión conserva sus botones; Reiniciar borra el formulario en ambos modos.",
    "body": "Presenta aquí el ejemplo ficticio: una persona quiere crear un espacio de trabajo sola. Dedica 270 segundos, 4 minutos y 30 segundos, a los seis pasos. Los 90 segundos recuperados de la diapositiva de resumen eliminada son pausas de explicación e interacción, no más interfaz ni un ejercicio: 30 segundos para comprender la necesidad bloqueada, 30 para la validación y la respuesta del teclado, y 30 para explicar por qué la lección necesita responsable y condición de revisión. Primero: la persona quiere empezar sola. Segundo: el formulario atribuido a la IA exige el correo de otra persona y la bloquea. Tercero: diseño e ingeniería trasladan las invitaciones a después de crear el espacio. Cuarto: prueba el formulario local revisado solo con un nombre; muestra validación y teclado si resulta útil. No se guarda ni envía nada. Quinto: corregir una pantalla no basta. DesignOps registra la lección con el supuesto de alta individual, la razón del equipo, un líder de producto responsable y revisión tras el piloto. La guía debe estar donde el siguiente equipo y sus herramientas de IA puedan usarla. Sexto: el siguiente formulario propuesto permite el alta sin invitar a nadie. Una persona verifica ese comportamiento y sigue revisando accesibilidad y resultados para usuarios. No afirmes que la regla garantiza resultados futuros ni que es un estudio real. Todos los estados son ilustrativos y están preparados de antemano. Los expertos de producto deciden cómo debe funcionar la experiencia; DesignOps ayuda a que la decisión sobreviva a esta pantalla.",
    "transition": "La persona ya puede completar el alta sola. ¿Qué más debe comprobar el equipo?"
  },
  {
    "seconds": 60,
    "takeaway": "Las pruebas automáticas apoyan el juicio humano responsable; no demuestran la calidad del diseño.",
    "visual": "Varios candidatos atraviesan seis criterios hasta llegar a una decisión humana explícita.",
    "interaction": "Flujo estático, sin puntuaciones de IA inventadas ni aprobación automática.",
    "body": "Recorre los criterios: componentes y tokens aprobados; necesidades identificadas sin complejidad innecesaria; accesibilidad; principios de marca y contenido; estrategia de producto; y viabilidad técnica. Los expertos definen juntos el estándar. Las pruebas automáticas detectan incumplimientos concretos, pero superarlas no demuestra utilidad, coherencia ni éxito del usuario. Una persona acepta, revisa o rechaza y registra sus razones. Mantén la evidencia vinculada a las decisiones. Los diseñadores dirigen y evalúan cada vez más alternativas, pero el oficio y el conocimiento del área siguen siendo indispensables.",
    "transition": "Una vez registrado el juicio, ¿cómo lo mantenemos útil sin enterrarlo en un archivo?"
  },
  {
    "seconds": 70,
    "takeaway": "Conserva la decisión y su razón en una guía común; después comprueba el siguiente resultado.",
    "visual": "En Escenario, secuencia completa de cinco pasos; en revisión, ciclo cerrado alrededor de la memoria de la organización.",
    "interaction": "Escenario: secuencia estática completa que termina en reevaluación. Revisión: Seguir un ciclo de aprendizaje destaca una etapa por clic y vuelve a la generación.",
    "body": "Retoma la decisión de ofrecer invitaciones después del alta. No guardes solo el formulario corregido: guarda por qué cambió y quién revisará la guía. Sigue la secuencia: la IA propone con la guía común; el equipo revisa según la necesidad del usuario; guarda la decisión, la razón y el responsable; DesignOps actualiza la guía para el siguiente equipo y su IA; una persona comprueba el siguiente resultado. El ejemplo no demuestra que un único campo sea siempre mejor ni que la guía evite errores automáticamente. Es ficticio y la validación con usuarios está pendiente. Si cambia el supuesto del alta individual, el líder de producto revisa la guía. DesignOps mantiene fuente, versión, acceso y fecha de revisión. Retira las lecciones que ya no sirven, en vez de convertir cada observación en una política universal.",
    "transition": "Ese mantenimiento es trabajo reconocible de DesignOps, con un alcance mayor."
  },
  {
    "seconds": 50,
    "takeaway": "Personas, procesos y sistemas siguen siendo las bases; lo que se amplía es su alcance.",
    "visual": "Las bases conocidas junto a seis responsabilidades tradicionales y su ampliación.",
    "interaction": "Comparación estática; el alcance ampliado está visible desde el principio.",
    "body": "Recuerda los fundamentos. DesignOps mejora las condiciones para diseñar mediante personas, procesos y sistemas. Dotación, incorporación, rituales, herramientas y colaboración no desaparecen. La IA amplía el alcance: de apoyar a diseñadores a apoyar al ecosistema de producto; de documentar procedimientos a hacer utilizable el conocimiento al generar; de medir solo eficiencia a medir calidad y resultados. Es una ampliación, no un rechazo de las operaciones tradicionales ni un mandato de reorganización.",
    "transition": "Una metáfora útil para ese papel ampliado es el plano de control."
  },
  {
    "seconds": 50,
    "takeaway": "DesignOps conecta actores distribuidos mediante reglas, contexto y evaluación compartidos.",
    "visual": "Cinco actores que usan IA se conectan mediante una capa operativa común.",
    "interaction": "Escenario: se conserva el diagrama radial, conectado, con etiquetas grandes y sin otro control. Revisión: Conectar el plano de control activa o desactiva enlaces. Lectura conserva el resumen textual accesible.",
    "body": "El plano de control distingue definir las condiciones del trabajo de hacer el trabajo de todos. Producto, investigación, diseño, prototipado e ingeniería conservan sus responsabilidades. DesignOps coordina contexto reutilizable, límites según el riesgo, criterios de evaluación, responsables y habilitación. No debe convertirse en una cola central de aprobaciones. Seguridad, Legal, TI, plataformas y expertos siguen siendo socios esenciales. Unos límites claros permiten avanzar sin pedir repetidamente permiso para tareas conocidas y seguras.",
    "transition": "La guía compartida también cambia cómo pasa el trabajo entre estas personas."
  },
  {
    "seconds": 60,
    "takeaway": "Prueba la producción colaborativa y dedica la capacidad que ganes a aprender del cliente.",
    "visual": "Dos recorridos unen necesidad y opinión del cliente: traspasos secuenciales y un ciclo colaborativo de experimentación.",
    "interaction": "Escenario: ambos recorridos completos y estáticos. Revisión permite animar secuencia y colaboración; el movimiento es ilustrativo, no una duración medida.",
    "body": "El recorrido anterior es una simplificación deliberada, no una afirmación de que todos los equipos trabajaban secuencialmente antes de la IA. La investigación informa el encargo, diseño crea propuestas, ingeniería construye y el cliente responde al final. La alternativa propuesta parte de Misión, Metas y Métricas: las MMM de la fuente, donde Metas recoge los hitos. PM, investigación, diseño e ingeniería comparten propósito; especificación, conceptos, viabilidad y prototipos HTML/CSS evolucionan juntos. Los lanzamientos pueden convertirse en experimentos que informan otra iteración. La IA puede reducir producción, pero siguen contando revisión, integración y dependencias. No prometas lanzamientos en una semana ni aceleración universal. Mide tiempo transcurrido, horas-persona, esperas, validación con clientes y ritmo experimental. La animación compara secuencias, no velocidades numéricas. Un prototipo no es un lanzamiento de producción; la evidencia de usuarios sigue siendo necesaria.",
    "transition": "La guía compartida puede partir de la documentación que el equipo ya tiene."
  },
  {
    "seconds": 75,
    "takeaway": "Convierte el conocimiento del área en contexto versionado y reutilizable, con criterios verificables.",
    "visual": "Escenario muestra cuatro transformaciones y la lección del alta individual; revisión conserva las siete y la guía completa.",
    "interaction": "Transformación estática. Escenario destaca lección, razón, responsable y versión, revisión y evidencia pendiente; revisión y notas conservan el detalle.",
    "body": "Usa la lección del alta individual como artefacto concreto, no como excusa para narrar siete marcos nuevos. Su fuente se declara como supuesto; requisito y decisión se pueden leer; alcance, responsable y condición de revisión son visibles. La evidencia de usuarios sigue pendiente. Las siete transformaciones conservan la fuente: guías a reglas legibles por máquinas; sistemas de diseño a sistemas utilizables por IA; plantillas a prompts canónicos; documentación a paquetes de contexto; crítica a criterios de evaluación; procedimientos a flujos de personas e IA; métricas de eficiencia a rapidez, calidad y resultados. Un paquete parecido a YAML no se aplica solo. Siguen siendo necesarias integración, permisos, validación y revisión humana. DesignOps mantiene el paquete; los expertos lo redactan, aprueban y revisan su validez.",
    "transition": "Mantener esta guía cuesta tiempo. ¿Cómo sabríamos si conviene adoptar el flujo?"
  },
  {
    "seconds": 100,
    "takeaway": "Evalúa el flujo completo: rapidez, coste de revisión, calidad, coherencia y resultados para el cliente.",
    "visual": "Cuatro comparaciones grandes muestran referencia, piloto y cambio: tiempo de concepto, ritmo de producción, revisión y cumplimiento.",
    "interaction": "Escenario: cuatro comparaciones estáticas. Revisión: Las 10 métricas abre el detalle; Definiciones enlaza al apoyo de medición, también accesible desde Preguntas.",
    "body": "Son valores aproximados orientados por la experimentación inicial del ponente, no mediciones exactas, referencias de rendimiento ni previsiones. El ponente facilitó los rangos de producción de diseño; las otras nueve comparaciones conservan los valores sintéticos anteriores, que considera próximos a observaciones informales. No se han facilitado registros, tamaños de muestra ni métodos: no afirmes resultados validados ni retorno causal de la inversión. De referencia a piloto: mediana del encargo al concepto validado, 9 a 6 días; producción de diseño, ~3–4/sem a ~1–2/sem, entregables aceptados en un equipo con ciclo integral de 8 semanas. El cambio ≈−2/sem es una estimación por puntos medios: 1,5 menos 3,5, no un cambio observado de forma independiente. La tasa semanal y el ciclo integral de ocho semanas son conceptos distintos: no dividas por ocho ni infieras un total de ocho semanas. La producción disminuye: no la presentes como mejora. Esfuerzo de producción, 18 a 11 horas por concepto; revisión, 4 a 6 horas; retrabajo, 35% a 24%; comprobaciones aplicables superadas, 78% a 90%; defectos abiertos de accesibilidad/calidad, 6 a 4 por 10 pantallas; divergencia diseño-código, 28% a 18%; experimentos, 1 a 2 por semana; reutilización de contexto aprobado, 25% a 70%. La revisión aumenta: generar más rápido no implica revisar menos. Los indicadores anticipados y de proceso reflejan comportamiento y preparación; los de resultado comprueban lo que entrega el flujo. El cumplimiento es una señal anticipada de calidad, no prueba de beneficio para el usuario. Se muestran ambos valores aproximados y sus cambios, sin escalas de barras que compitan. Los porcentajes cambian en puntos porcentuales, no en porcentajes relativos. Iguala alcance, dotación, definición de entregable y criterios; incluye muestra y dispersión antes de presentar una comparación validada. Registra por separado el éxito del cliente en sus tareas. No se aportan datos de resultados de clientes.",
    "transition": "Usa esas métricas en un piloto acotado antes de ampliar el modelo operativo."
  },
  {
    "seconds": 135,
    "takeaway": "Un piloto de 30 días puede empezar en un equipo, un área de producto o la empresa, con responsables claros.",
    "visual": "Cuatro verbos en una línea temporal, un resultado por semana y una decisión explícita: adoptar, revisar o detener.",
    "interaction": "Estática en Escenario y revisión, sin clics extra. Estas notas conservan las responsabilidades de equipo, área de producto y empresa.",
    "body": "Días 1–7: mapea el uso real de IA e identifica incoherencias, carencias de calidad y riesgos. Días 8–14: elige un flujo útil y acotado y reúne conocimiento pertinente. Días 15–21: nombra responsables, define controles humanos y criterios de evaluación, y establece la referencia antes del piloto. Días 22–30: realiza trabajo comparable y decide adoptar, revisar o detener. Evita empezar con datos sensibles o alto riesgo salvo que exista la gobernanza adecuada. En el equipo, los líderes de diseño e ingeniería pueden asumir un flujo con facilitación de DesignOps. En el área de producto, PM, investigación, diseño, ingeniería y un responsable del sistema coordinan patrones y resultados entre equipos. En la empresa, la responsabilidad federada de producto opera dentro de los límites de Seguridad, Legal, TI y plataformas. DesignOps conecta esos ámbitos; no decide unilateralmente políticas ni producto. Las ventanas de calendario son una propuesta inicial, no fechas de entrega prometidas.",
    "transition": "Volvamos a la pregunta central: si la IA participa en el diseño, ¿quién diseña su entorno operativo?"
  },
  {
    "seconds": 90,
    "takeaway": "La IA no elimina la necesidad de DesignOps. Lo convierte en infraestructura.",
    "visual": "Una pregunta con espacio, una respuesta que se revela con intención y tres afirmaciones finales.",
    "interaction": "Momento de Escenario 3: pausa, Derecha revela DesignOps y otra Derecha abre Preguntas. Izquierda oculta la respuesta antes de retroceder. En revisión, Siguiente o una tecla de avance revela primero y luego avanza. Lectura conserva sus teclas de desplazamiento. No hay botón aparte para revelar.",
    "body": "Dedica 90 segundos al cierre; los otros 30 presentan al ponente en la diapositiva 3. Baja el ritmo. Lee la pregunta y deja espacio: si la IA forma parte de cómo diseñamos productos, ¿quién diseña el sistema en el que opera? Revela DesignOps. No es una reivindicación de control de toda la IA por una función. Es una invitación a conectar experiencia, gobernanza, conocimiento, flujos y evaluación. La IA crea capacidad. Los sistemas crean coherencia. La gestión responsable crea confianza. DesignOps conecta las tres. El futuro no consiste solo en gestionar trabajo alrededor del diseño, sino en diseñar la infraestructura con la que personas e IA crean productos juntas. El reto práctico es un flujo, una referencia, un paquete de contexto mantenido, controles humanos con responsable y evidencia de que no se ha cambiado calidad por rapidez. Termina con la tesis y una pausa, no con más herramientas.",
    "transition": "Conversemos. ¿Dónde genera tu equipo más rápido de lo que puede mantener la coherencia?"
  },
  {
    "seconds": 600,
    "takeaway": "Usa la conversación para relacionar el modelo operativo con las limitaciones del público.",
    "visual": "Siete temas de apoyo y enlaces a LinkedIn y GitHub junto a la invitación a conversar.",
    "interaction": "Selecciona un tema para abrir su apoyo; todos permiten volver a Preguntas.",
    "body": "Reserva diez minutos para conversar. Invita a compartir flujos concretos, no predicciones abstractas. Los siete apoyos cubren responsables de gobernanza, evolución del papel, sistemas preparados para IA, flujos independientes del modelo, medición, capas de contexto y ciclo de vida. Las capas y el ciclo son perspectivas complementarias, no nuevos modelos que memorizar durante la charla. Si preguntan si esto es solo gobernanza de IA, vuelve a la decisión: la gobernanza es una parte; contexto, flujos, evaluación y habilitación la hacen útil en el ecosistema de producto. Si preguntan qué hacer mañana: mapear, identificar, codificar, estandarizar y medir.",
    "transition": "Abre un apoyo solo si ayuda a responder una pregunta."
  },
  {
    "seconds": 0,
    "takeaway": "Los límites de riesgo, el acceso, el modelo operativo y el criterio de producto necesitan responsables explícitos.",
    "visual": "Cuatro ámbitos de responsabilidad; ninguno reclama todo el modelo operativo de IA.",
    "interaction": "Volver a Preguntas regresa al menú de temas.",
    "body": "Seguridad y Legal fijan los límites de riesgo; TI y plataformas gestionan tecnología y acceso. DesignOps traduce políticas en condiciones útiles de trabajo con los expertos. Producto, investigación, diseño e ingeniería responden por sus decisiones y la calidad del lanzamiento. Una buena gobernanza elimina ambigüedades repetitivas mediante rutas aprobadas, controles humanos según el riesgo, escalado y excepciones documentadas. Una mala gobernanza crea una cola innecesaria de aprobaciones. Las responsabilidades concretas se acuerdan localmente: la diapositiva es un modelo de conversación, no una matriz RACI universal.",
    "transition": "Volver a Preguntas."
  },
  {
    "seconds": 0,
    "takeaway": "DesignOps diseña el entorno operativo, en lugar de construir las herramientas de IA de todos.",
    "visual": "Seis responsabilidades y cinco tipos de trabajo de producto.",
    "interaction": "Volver a Preguntas regresa al menú de temas.",
    "body": "El papel emergente incluye gobernanza, inteligencia de diseño, arquitectura de flujos con expertos, sistemas de calidad, habilitación y medición. «Arquitecto de sistemas operativos de IA» es una posible dirección, no un cargo prescrito. Los arquetipos de la fuente se conservan como tipos de trabajo: prototipar, construir, simplificar o mejorar, crecer y mantener. Sus riesgos y necesidades de evaluación son distintos. La fuente incluye una atribución externa no verificada; esta edición no atribuye autoría a esos arquetipos. No conviertas el modelo en la obligación de que DesignOps sea un equipo de ingeniería de IA.",
    "transition": "Volver a Preguntas."
  },
  {
    "seconds": 0,
    "takeaway": "Prepararse para IA añade significado, límites, ejemplos y evaluación al sistema de diseño existente.",
    "visual": "Las bases más razones utilizables por máquinas, con responsabilidad sobre el contexto común.",
    "interaction": "Volver a Preguntas regresa al menú de temas.",
    "body": "Conserva tokens, componentes, patrones y guías. Añade metadatos semánticos, reglas de uso, ejemplos, límites, requisitos de accesibilidad, relaciones, equivalentes de código y criterios. Empieza por un patrón, no por toda la biblioteca. Incluye ejemplos válidos e inválidos, acceso permitido a datos, origen, versión, vigencia y responsable. Legible para IA no significa público, recuperable sin restricciones ni automáticamente correcto. La investigación y las experiencias existentes siguen siendo contexto importante más allá de la biblioteca.",
    "transition": "Volver a Preguntas."
  },
  {
    "seconds": 0,
    "takeaway": "Construye conocimiento, reglas, flujos y evaluación duraderos alrededor de modelos sustituibles.",
    "visual": "Conocimiento, reglas, flujos y evaluación compartidos permanecen mientras cambian los modelos.",
    "interaction": "Volver a Preguntas regresa al menú de temas.",
    "body": "Modelos y herramientas cambiarán. Conserva conocimiento institucional, permisos, flujos, ejemplos y criterios de aceptación. Independencia del modelo no significa adaptación cero: capacidades, límites de contexto, privacidad y comportamiento varían. Repite una evaluación representativa antes de cambiar de modelo. Los expertos crean juntos los prompts canónicos y los gestionan como conocimiento versionado; DesignOps no los elige en solitario. Estandarizar ofrece un punto de partida informado, no prohíbe explorar.",
    "transition": "Volver a Preguntas."
  },
  {
    "seconds": 0,
    "takeaway": "Definiciones operativas, trabajo comparable y límites de la evidencia importan más que el acabado del panel.",
    "visual": "Definiciones, unidades y métodos junto a un protocolo breve de piloto.",
    "interaction": "Panel vuelve a la diapositiva 13 con referencia y piloto juntos. Preguntas regresa al menú de temas.",
    "body": "Define «concepto validado» antes de medir tiempo: aceptación del revisor más el umbral acordado de evidencia de usuarios. Cuenta entregables aceptados, no generaciones en bruto. Separa días transcurridos de horas-persona, producción de revisión, y número de defectos de gravedad. Define denominadores de cumplimiento, retrabajo, reutilización y divergencia. Un experimento completo registra aprendizaje y decisión, no solo un lanzamiento. Compara tareas y dotaciones similares; documenta muestra, dispersión, exclusiones y complejidad. Usa recogida de datos aprobada con controles de privacidad. La revisión puede aumentar aunque baje el esfuerzo total, pero un pequeño piloto observacional no establece causalidad. Fija umbrales de decisión antes de ver resultados y mide éxito en tareas u otros resultados relevantes. Los valores del panel son aproximaciones preliminares de experimentación inicial, no mediciones validadas.",
    "transition": "Volver al panel o a Preguntas."
  },
  {
    "seconds": 0,
    "takeaway": "La diferencia está en el conocimiento de la organización bien gobernado, no en la fidelidad a un modelo.",
    "visual": "Cinco capas de diseño con IA, desde modelos hasta la infraestructura conectiva de DesignOps.",
    "interaction": "Escenario: las cinco capas completas. Revisión: Construir las capas de contexto destaca una capa por clic; al completarlas vuelve a la base.",
    "body": "Los modelos aportan capacidades. Agentes y herramientas las conectan con tareas. El contexto aporta lo que el modelo no sabe por sí mismo: tokens, componentes, investigación, producto, marca, accesibilidad, terminología, flujos, repositorios, solicitudes de cambios, experiencias y decisiones previas. La gestión responsable añade límites, exclusiones, evaluación y controles humanos. DesignOps conecta las capas. Es un modelo de responsabilidades, no una arquitectura de software obligatoria. No introduzcas todos los datos de la organización en un modelo: permisos, privacidad, origen, calidad de fuentes, vigencia y responsables determinan qué contexto puede usarse. El sistema de diseño es parte de la memoria, no toda ella.",
    "transition": "Volver a Preguntas o usar el apoyo del ciclo de vida para situar las responsabilidades."
  },
  {
    "seconds": 0,
    "takeaway": "Gobernanza, contexto y evaluación acompañan al trabajo en cada etapa del ciclo de vida.",
    "visual": "Cinco fases sobre una banda persistente de infraestructura común; revisión conserva los paneles por fase.",
    "interaction": "Escenario: resumen estático de cinco fases. Revisión: selecciona una para ver aporte de IA, infraestructura de DesignOps y control humano.",
    "body": "Descubrir: la IA puede agrupar y recuperar investigación; DesignOps apoya consentimiento, trazabilidad, calidad de fuentes y reutilización. Definir: la IA redacta encargos e identifica carencias; estructura, vocabulario y fuentes compartidas fundamentan el problema. Diseñar: alternativas y prototipos se apoyan en reglas, prompts, accesibilidad y crítica. Construir: el código generado necesita metadatos de componentes, patrones admitidos, tokens, validación y revisión conjunta. Medir: la IA resume observaciones, pero las personas interpretan resultados, registran límites y deciden qué cambiar. No lo conviertas en un catálogo de herramientas. Comenta una o dos fases con la banda persistente; usa revisión solo si necesitas el detalle.",
    "transition": "Volver a Preguntas. La decisión de alta de la charla ejemplifica la conexión entre diseño y construcción."
  }
];

const lifecycle = [
  ["APORTE DE IA", "Agrupar hallazgos, sintetizar evidencia y recuperar estudios previos.", "INFRAESTRUCTURA DE DESIGNOPS", "Consentimiento, calidad de fuentes, trazabilidad e investigación reutilizable.", "CONTROL HUMANO", "Investigación verifica fuentes, incertidumbre e interpretación."],
  ["APORTE DE IA", "Redactar encargos, resumir requisitos e identificar carencias.", "INFRAESTRUCTURA DE DESIGNOPS", "Encargo canónico, vocabulario de producto, misión y métricas comunes.", "CONTROL HUMANO", "PM y expertos acuerdan el problema y los criterios de éxito."],
  ["APORTE DE IA", "Explorar alternativas, generar conceptos y prototipar interacciones.", "INFRAESTRUCTURA DE DESIGNOPS", "Contexto del sistema, prompts canónicos, accesibilidad y criterios de revisión.", "CONTROL HUMANO", "Diseño evalúa necesidad, ejecución, coherencia y evidencia."],
  ["APORTE DE IA", "Generar componentes, modificar código y proponer casos de prueba.", "INFRAESTRUCTURA DE DESIGNOPS", "Tokens, metadatos, guías de código y validación de diseño y código.", "CONTROL HUMANO", "Diseño e ingeniería comprueban viabilidad, comportamiento y acceso."],
  ["APORTE DE IA", "Resumir resultados, identificar patrones y comparar observaciones.", "INFRAESTRUCTURA DE DESIGNOPS", "Definiciones de métricas, registros de decisiones y lecciones versionadas.", "CONTROL HUMANO", "El equipo interpreta resultados y decide qué contexto cambiar."]
];

const metrics = [
  { name: "Esfuerzo de producción", group: 0, baseline: 18, pilot: 11, max: 24, unit: "horas-persona / concepto aceptado", short: "h", better: "lower", scale: "0–24 h" },
  { name: "Esfuerzo de revisión", group: 0, baseline: 4, pilot: 6, max: 8, unit: "horas-persona / concepto aceptado", short: "h", better: "context", scale: "0–8 h" },
  { name: "Cumplimiento del sistema de diseño", group: 0, baseline: 78, pilot: 90, max: 100, unit: "% de comprobaciones aplicables superadas", short: "%", better: "higher", scale: "0–100%" },
  { name: "Reutilización de contexto aprobado", group: 0, baseline: 25, pilot: 70, max: 100, unit: "% de entregables que citan contexto aprobado", short: "%", better: "higher", scale: "0–100%" },
  { name: "Ritmo de experimentación", group: 0, baseline: 1, pilot: 2, max: 4, unit: "experimentos terminados / semana", short: "/sem", better: "context", scale: "0–4 /sem" },
  { name: "Encargo → concepto validado", group: 1, baseline: 9, pilot: 6, max: 12, unit: "mediana de días transcurridos", short: "d", better: "lower", scale: "0–12 d" },
  { name: "Ritmo de producción de diseño", group: 1, baseline: [3, 4], pilot: [1, 2], max: 4, unit: "entregables aceptados / equipo con ciclo integral de 8 semanas", short: "/sem", better: "higher", scale: "0–4 /sem" },
  { name: "Tasa de retrabajo / revisión", group: 1, baseline: 35, pilot: 24, max: 100, unit: "% de entregables que requieren cambios importantes", short: "%", better: "lower", scale: "0–100%" },
  { name: "Defectos de accesibilidad / calidad", group: 1, baseline: 6, pilot: 4, max: 10, unit: "defectos abiertos / 10 pantallas revisadas", short: "/10", better: "lower", scale: "0–10 /10" },
  { name: "Divergencia entre diseño y código", group: 1, baseline: 28, pilot: 18, max: 100, unit: "% de instancias de interfaz auditadas divergentes", short: "%", better: "lower", scale: "0–100%" }
];

const pairLabels = ["Qué necesita el usuario", "En qué falló la IA", "Qué cambia el equipo", "Probar la solución", "Guardar la lección", "Revisar el resultado"];
const pairEvidence = [
  { title: "Quiero empezar por mi cuenta.", entries: [
    ["La situación", "Aún no tengo a quién invitar."],
    ["Qué necesito", "Nombrar mi espacio y empezar a trabajar."]
  ], verdict: "Las invitaciones deberían llegar después." },
  { title: "El formulario exige otra persona.", entries: [
    ["Nombre del espacio", "Obligatorio"],
    ["Correo de otra persona", "También obligatorio para continuar."]
  ], verdict: "No tengo a quién invitar. No puedo continuar." },
  { title: "Crear primero. Invitar después.", entries: [
    ["Diseño + ingeniería deciden", "Quitar la invitación obligatoria del alta."],
    ["Por qué", "Quien empieza solo debe poder terminar."]
  ], verdict: "El equipo cambia el flujo, no el objetivo del usuario." },
  null,
  { title: "No resuelvas esto dos veces.", entries: [
    ["Guía común · versión 1", "En el alta individual, invitar después de crear."],
    ["Razón · según el encargo", "La persona puede no tener a quién invitar aún."],
    ["Responsable · líder de producto", "Revisar tras el piloto o si cambia el encargo."]
  ], verdict: "Guardado por DesignOps · validación con usuarios pendiente." },
  { title: "¿La siguiente persona puede empezar sola?", entries: [
    ["El siguiente formulario propuesto", "Primero el nombre. Invitaciones opcionales."],
    ["La revisión", "El alta funciona sin el correo de otra persona."],
    ["Pendiente de comprobar", "Accesibilidad y utilidad para usuarios reales."]
  ], verdict: "Se cumple este requisito. La revisión continúa." }
];

function metricValue(metric, scenario) {
  const value = metric[scenario];
  return `${Array.isArray(value) ? `~${value.join("–")}` : value}${metric.short}`;
}

function metricDelta(metric) {
  const midpoint = value => Array.isArray(value) ? (value[0] + value[1]) / 2 : value;
  return midpoint(metric.pilot) - midpoint(metric.baseline);
}

function metricChange(metric) {
  const delta = metricDelta(metric);
  const approximate = Array.isArray(metric.baseline) || Array.isArray(metric.pilot);
  const units = metric.short === "%" ? " pp" : `${approximate ? "" : " "}${metric.short}`;
  return `${approximate ? "≈" : ""}${delta > 0 ? "+" : "−"}${Math.abs(delta)}${units}`;
}

const slides = [...document.querySelectorAll(".slide")];
const $ = (selector) => document.querySelector(selector);
const state = { index: 0, generation: 0, cause: 0, stack: 0, pair: 0, loop: -1 };
const smallScreen = matchMedia("(max-width: 900px), (max-height: 560px)");
let readingPreference;
let stageReview;

function clock(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function fitStage() {
  if (document.body.classList.contains("reading")) {
    $("#stage").style.transform = "none";
    $("#stage").style.left = "0";
    $("#stage").style.top = "0";
    return;
  }
  const viewport = $("#viewport");
  const scale = Math.min(viewport.clientWidth / 1600, viewport.clientHeight / 900);
  $("#stage").style.transform = `scale(${scale})`;
  $("#stage").style.left = `${(viewport.clientWidth - 1600 * scale) / 2}px`;
  $("#stage").style.top = `${(viewport.clientHeight - 900 * scale) / 2}px`;
}

function setReadingView(reading) {
  const active = reading && !stageReview;
  document.body.classList.toggle("reading", active);
  $("#reading-toggle").setAttribute("aria-pressed", String(active));
  $("#presentation").scrollTop = 0;
  fitStage();
}

function markCurrent(selector, index) {
  document.querySelectorAll(selector).forEach((item, i) => {
    if (i === index) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });
}

function renderStack() {
  document.querySelectorAll("[data-layer]").forEach((layer) => {
    const index = Number(layer.dataset.layer);
    const current = !stageReview && index === state.stack;
    const built = Boolean(stageReview) || index <= state.stack;
    layer.classList.toggle("revealed", built);
    if (current) layer.setAttribute("aria-current", "step");
    else layer.removeAttribute("aria-current");
    layer.setAttribute("role", "group");
    layer.setAttribute("aria-label", `Capa ${index + 1} de 5: ${layer.querySelector("h3").textContent}. ${current ? "Capa actual" : built ? "Construida" : "Aún no construida"}.`);
  });
}

function updateNotes() {
  const note = notes[state.index];
  const elapsed = notes.slice(0, Math.min(state.index, keynoteCount)).reduce((sum, item) => sum + item.seconds, 0);
  const timing = state.index < keynoteCount ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} · ${note.seconds} segundos` : state.index === keynoteCount ? "10 minutos de preguntas · fuera de los 20 de conferencia" : "Apoyo opcional · fuera del tiempo de conferencia";
  const content = $("#notes-content");
  content.replaceChildren();
  const add = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    content.append(element);
  };
  add("p", timing, "note-time");
  add("h3", `${state.index + 1}. ${slides[state.index].dataset.title}`);
  for (const [label, text] of [
    ["IDEA CLAVE", note.takeaway], ["VISUAL", note.visual], ["INTERACCIÓN", note.interaction],
    ["NOTAS DEL PONENTE", note.body], ["TRANSICIÓN", note.transition]
  ]) {
    add("h4", label);
    add("p", text);
  }
  $("#notes").scrollTop = 0;
}

function renderSlide(index) {
  const oldSlide = slides[state.index];
  const focusWasInSlide = oldSlide.contains(document.activeElement);
  state.index = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => {
    slide.hidden = i !== state.index;
    slide.classList.toggle("active", i === state.index);
    slide.setAttribute("aria-label", `${i + 1} de ${slides.length}: ${slide.dataset.title}`);
  });
  const slide = slides[state.index];
  $("#counter").textContent = state.index < keynoteCount ? `${String(state.index + 1).padStart(2, "0")} / ${keynoteCount}` : state.index === keynoteCount ? "Preguntas" : `B${state.index - keynoteCount} / ${slides.length - keynoteCount - 1}`;
  $("#slide-title").textContent = slide.dataset.title;
  $("#act-label").textContent = slide.dataset.act;
  $("#progress").value = Math.min(state.index + 1, keynoteCount);
  $("#progress").hidden = state.index >= keynoteCount;
  $("#progress").setAttribute("aria-valuetext", `Diapositiva ${Math.min(state.index + 1, keynoteCount)} de ${keynoteCount}`);
  $("#previous").disabled = state.index === 0;
  $("#next").disabled = state.index === slides.length - 1;
  updateNext();
  document.querySelectorAll("#slide-index a").forEach((link, i) => link.setAttribute("aria-current", String(i === state.index)));
  document.title = `${state.index + 1}. ${slide.dataset.title} — DesignOps`;
  $("#announcement").textContent = `${$("#counter").textContent}: ${slide.dataset.title}`;
  $("#presentation").scrollTop = 0;
  updateNotes();
  if (focusWasInSlide && oldSlide !== slide) {
    const heading = slide.querySelector("h1, h2");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}

function navigate(index) {
  const target = Math.max(0, Math.min(slides.length - 1, index));
  if (location.hash === `#${target + 1}`) renderSlide(target);
  else location.hash = String(target + 1);
}

function readHash() {
  const hash = location.hash.slice(1);
  return /^\d+$/.test(hash) ? Math.max(0, Math.min(slides.length - 1, Number(hash) - 1)) : 0;
}

function toggleNotes(force) {
  if (stageReview) return;
  const open = force === undefined ? $("#notes").hidden : force;
  $("#notes").hidden = !open;
  $("#notes-toggle").setAttribute("aria-expanded", String(open));
  if (open) $("#notes").focus();
  else $("#notes-toggle").focus();
}

function setStageMode(active) {
  if (active === Boolean(stageReview)) return;
  if (active) {
    // Stage builds are temporary; review's diagram and form states survive a rehearsal.
    stageReview = {
      pair: state.pair,
      aligned: $("#fragmentation").classList.contains("aligned"),
      closing: !$("#closing-reveal").hidden,
      name: $("#workspace-name").value,
      validity: $("#workspace-name").validity.customError ? $("#workspace-name").validationMessage : "",
      invalid: $("#workspace-name").getAttribute("aria-invalid"),
      result: $("#prototype-result").textContent,
      resultClass: $("#prototype-result").className
    };
    document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
    $("#notes").hidden = true;
    $("#notes-toggle").setAttribute("aria-expanded", "false");
    setAligned(false);
    setPair(0);
    setClosing(false);
  } else {
    const saved = stageReview;
    stageReview = undefined;
    setAligned(saved.aligned);
    setPair(saved.pair);
    setClosing(saved.closing);
    $("#workspace-name").value = saved.name;
    $("#workspace-name").setCustomValidity(saved.validity);
    if (saved.invalid === null) $("#workspace-name").removeAttribute("aria-invalid");
    else $("#workspace-name").setAttribute("aria-invalid", saved.invalid);
    $("#prototype-result").textContent = saved.result;
    $("#prototype-result").className = saved.resultClass;
  }
  document.body.classList.toggle("stage-mode", active);
  $("#stage-toggle").setAttribute("aria-pressed", String(active));
  $("#stage-exit").hidden = !active;
  $("#stage-exit").textContent = "Salir de Escenario · Esc";
  document.querySelectorAll("[data-life]").forEach(button => { button.disabled = active; });
  renderStack();
  markCurrent(".role", active ? -1 : state.generation - 1);
  markCurrent("#causal-chain li", active ? -1 : state.cause);
  markCurrent("#loop-reading li", active ? -1 : state.loop);
  setReadingView(readingPreference ?? smallScreen.matches);
  (active ? $("#presentation") : $("#stage-toggle")).focus({ preventScroll: true });
  $("#announcement").textContent = active ? $("#stage-help").textContent : "Revisión restaurada. Las notas siguen cerradas.";
}

async function exitStage() {
  setStageMode(false);
  if (document.fullscreenElement) await fullscreen();
}

function setAligned(aligned) {
  $("#fragmentation").classList.toggle("aligned", aligned);
  const button = $('[data-action="align"]');
  button.setAttribute("aria-pressed", String(aligned));
  button.textContent = aligned ? "Quitar criterios comunes" : "Aplicar criterios comunes";
  $("#fragment-caption").textContent = aligned ? "Ideas distintas. Límites comunes. Decisiones con responsable." : "Patrones dispares. Términos en conflicto. Decisiones sin responsable.";
}

function updateNext() {
  const next = $("#next");
  const closing = state.index === 14;
  const revealed = !$("#closing-reveal").hidden;
  const label = closing ? (revealed ? "Siguiente diapositiva: Preguntas" : "Mostrar la respuesta") : "Siguiente diapositiva";
  next.setAttribute("aria-label", label);
  next.title = label;
  if (closing) {
    next.setAttribute("aria-controls", "closing-reveal");
    next.setAttribute("aria-expanded", String(revealed));
  } else {
    next.removeAttribute("aria-controls");
    next.removeAttribute("aria-expanded");
  }
}

function setClosing(revealed) {
  $("#closing-reveal").hidden = !revealed;
  updateNext();
  if (state.index === 14) $("#announcement").textContent = revealed ? "DesignOps. La IA no elimina la necesidad de DesignOps. Lo convierte en infraestructura." : "¿Quién diseña el sistema en el que opera la IA?";
}

function advanceReview() {
  if (state.index === 14 && $("#closing-reveal").hidden) setClosing(true);
  else navigate(state.index + 1);
}

function stageAdvance(direction) {
  if (state.index === 3) {
    const aligned = $("#fragmentation").classList.contains("aligned");
    if (aligned !== (direction > 0)) {
      setAligned(direction > 0);
      return;
    }
  }
  if (state.index === 5 && (direction > 0 ? state.pair < 5 : state.pair > 0)) {
    setPair(state.pair + direction);
    return;
  }
  if (state.index === 14 && $("#closing-reveal").hidden === (direction > 0)) {
    setClosing(direction > 0);
    return;
  }
  navigate(state.index + direction);
}

async function fullscreen() {
  if (!document.fullscreenEnabled) {
    $("#announcement").textContent = "La pantalla completa no está disponible en este navegador. Abre index.html en un navegador de escritorio.";
    $("#fullscreen").textContent = "Pantalla completa no disponible";
    if (stageReview) $("#stage-exit").textContent = "Pantalla completa no disponible · Salir de Escenario (Esc)";
    return;
  }
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    $("#announcement").textContent = "No se pudo activar la pantalla completa. Puedes continuar en Escenario dentro de la ventana.";
    $("#fullscreen").textContent = "Pantalla completa bloqueada";
    if (stageReview) $("#stage-exit").textContent = "Pantalla completa bloqueada · Salir de Escenario (Esc)";
    console.error("Error al solicitar pantalla completa", error);
  }
}

function selectLife(index) {
  document.querySelectorAll("[data-life]").forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
  const detail = $("#life-detail");
  detail.replaceChildren();
  for (let i = 0; i < 6; i += 2) {
    const cell = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = lifecycle[index][i];
    const body = document.createElement("p");
    body.textContent = lifecycle[index][i + 1];
    cell.append(title, body);
    detail.append(cell);
  }
}

function buildMetrics() {
  const make = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  // Four talk-level comparisons; the complete dataset remains in the detail dialog.
  for (const index of [5, 6, 1, 2]) {
    const metric = metrics[index];
    const card = document.createElement("article");
    card.className = `metric-card${index === 1 || (metric.better === "higher" && metricDelta(metric) < 0) ? " warning" : ""}`;
    card.dataset.metric = String(index);
    card.append(make("p", metric.group === 0 ? "ANTICIPADO / PROCESO" : "RESULTADO DEL FLUJO", "metric-category"));
    card.append(make("h3", metric.name, "metric-name"));
    const comparison = document.createElement("dl");
    comparison.className = "metric-comparison";
    for (const [label, value] of [["Referencia", metricValue(metric, "baseline")], ["Piloto", metricValue(metric, "pilot")], ["Cambio", metricChange(metric)]]) {
      const entry = document.createElement("div");
      entry.append(make("dt", label), make("dd", value));
      comparison.append(entry);
    }
    card.append(comparison, make("p", metric.unit, "metric-unit"));
    if (Array.isArray(metric.baseline) || Array.isArray(metric.pilot)) {
      card.append(make("p", "Cambio: estimación por puntos medios", "metric-estimate"));
    }
    $("#metric-dashboard").append(card);
  }
  ["INDICADORES ANTICIPADOS / DE PROCESO", "MÉTRICAS DE RESULTADO DEL FLUJO"].forEach((label, group) => {
    const table = document.createElement("table");
    table.className = "metric-table";
    table.append(make("caption", label));
    const head = table.createTHead().insertRow();
    const headers = ["Métrica / unidad", "Referencia", "Piloto", "Cambio"];
    for (const label of headers) {
      const th = make("th", label);
      th.scope = "col";
      head.append(th);
    }
    const body = table.createTBody();
    metrics.forEach((metric) => {
      if (metric.group !== group) return;
      const row = body.insertRow();
      const name = make("th", metric.name);
      name.scope = "row";
      name.append(make("small", metric.unit));
      row.append(name);
      for (const [i, value] of [metricValue(metric, "baseline"), metricValue(metric, "pilot"), metricChange(metric)].entries()) {
        const cell = row.insertCell();
        cell.textContent = value;
        cell.dataset.label = headers[i + 1];
        if (i === 2 && (Array.isArray(metric.baseline) || Array.isArray(metric.pilot))) {
          cell.append(make("small", "Estimación por puntos medios"));
        }
      }
    });
    $("#metric-tables").append(table);
  });
}

function setPair(step) {
  state.pair = step;
  $("#prototype-scene").dataset.step = String(step);
  $("#decision-evidence").hidden = step === 3;
  $("#prototype-form").hidden = step !== 3;
  const evidence = pairEvidence[step];
  if (evidence) {
    $("#evidence-title").textContent = evidence.title;
    $("#evidence-details").replaceChildren();
    for (const [label, text] of evidence.entries) {
      const term = document.createElement("dt");
      term.textContent = label;
      const detail = document.createElement("dd");
      detail.textContent = text;
      $("#evidence-details").append(term, detail);
    }
    $("#evidence-verdict").textContent = evidence.verdict;
  }
  $("#pair-count").textContent = `PASO ${step + 1} DE 6`;
  $("#pair-label").textContent = pairLabels[step];
  const next = $('[data-action="pair"]');
  next.textContent = ["Ver el problema →", "Ver la decisión →", "Probar la solución →", "Guardar la lección →", "Revisar el resultado →", "Ejemplo completado ✓"][step];
  next.disabled = step === 5;
  if (step === 0) {
    $("#prototype-form").reset();
    $("#workspace-name").setCustomValidity("");
    $("#workspace-name").removeAttribute("aria-invalid");
    $("#prototype-result").textContent = "Solo un prototipo. No crea cuentas ni envía datos.";
    $("#prototype-result").className = "prototype-result";
  }
}

const actions = {
  generate(button) {
    state.generation = (state.generation + 1) % 5;
    document.querySelectorAll(".role").forEach((role, i) => role.classList.toggle("generated", i < state.generation));
    button.textContent = state.generation === 4 ? "Reiniciar generación ↺" : `Distribuir la generación · ${state.generation}/4 ↗`;
    markCurrent(".role", state.generation - 1);
    $("#generation-status").textContent = state.generation === 0 ? "Generación reiniciada. Ninguna función activa." : `${state.generation} de 4 funciones generando. Última: ${document.querySelectorAll(".role h3")[state.generation - 1].textContent}.`;
  },
  cause(button) {
    const steps = [...document.querySelectorAll("#causal-chain li")];
    state.cause = (state.cause + 1) % steps.length;
    const complete = state.cause === steps.length - 1;
    steps.forEach((item, i) => item.classList.toggle("current", i <= state.cause));
    for (const selector of [".branch-lines path", ".branch-outputs span"]) {
      document.querySelectorAll(selector).forEach((item, i) => item.classList.toggle("lit", complete || i <= state.cause));
    }
    button.textContent = complete ? "Reiniciar la cadena" : "Seguir la cadena";
    markCurrent("#causal-chain li", state.cause);
    $("#cause-status").textContent = `Paso ${state.cause + 1} de ${steps.length}: ${steps[state.cause].textContent}.`;
  },
  align() {
    setAligned(!$("#fragmentation").classList.contains("aligned"));
  },
  journey(button) {
    const journeys = $("#journeys");
    journeys.classList.remove("running");
    // Restart a finite explanatory animation; there is no slide-advance timer.
    void journeys.offsetWidth;
    journeys.classList.add("running");
    button.textContent = "Repetir ambos recorridos ↺";
    const status = $("#journey-status");
    status.dataset.replays = String(Number(status.dataset.replays || 0) + 1);
    status.textContent = `Recorrido ${status.dataset.replays}: los traspasos llevan de investigación a lanzamiento; el modelo colaborativo propuesto une propósito y producción con experimentos y aprendizaje.`;
  },
  connect(button) {
    const connected = $("#network").classList.toggle("connected");
    button.setAttribute("aria-pressed", String(connected));
    button.textContent = connected ? "Desconectar el plano de control" : "Conectar el plano de control";
    $("#network-status").textContent = connected ? "Reglas comunes. Contexto reutilizable. Evaluación humana." : "Herramientas aisladas. Reglas locales. Contexto fragmentado.";
  },
  stack(button) {
    state.stack = (state.stack + 1) % 5;
    renderStack();
    $("#stack-status").textContent = `Capa ${state.stack + 1} de 5: ${$(`[data-layer="${state.stack}"] h3`).textContent}. ${state.stack === 4 ? "Capas completas." : "Construye desde la base."}`;
    button.textContent = state.stack === 4 ? "Reconstruir desde la base" : "Construir las capas de contexto";
  },
  pair() { setPair(Math.min(5, state.pair + 1)); },
  "pair-reset"() { setPair(0); },
  loop(button) {
    state.loop = (state.loop + 1) % 5;
    document.querySelectorAll(".loop-node").forEach((node, i) => node.classList.toggle("current", i === state.loop));
    markCurrent("#loop-reading li", state.loop);
    const stages = ["La IA propone un diseño con la guía común.", "El equipo revisa según la necesidad del usuario.", "Guardar la lección: decisión, razón y responsable.", "Actualizar la guía para el siguiente equipo y sus herramientas de IA.", "Revisar el resultado. No dar el éxito por hecho."];
    $("#loop-status").textContent = stages[state.loop];
    button.textContent = state.loop === 4 ? "Iniciar el siguiente ciclo ↺" : "Seguir un ciclo de aprendizaje →";
  },
  "metric-definitions"() { navigate(slides.indexOf($(".measurement-backup"))); }
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.action) actions[button.dataset.action](button);
  if (button.dataset.life !== undefined) selectLife(Number(button.dataset.life));
});

$("#prototype-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#workspace-name");
  const value = input.value.trim();
  const result = $("#prototype-result");
  if (value.length < 2 || value.length > 48) {
    input.setAttribute("aria-invalid", "true");
    result.textContent = "Escribe un nombre de 2–48 caracteres, sin contar los espacios en los extremos.";
    result.className = "prototype-result error";
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  result.textContent = `«${value}» está listo en esta demo local. No se ha guardado ni enviado nada.`;
  result.className = "prototype-result success";
});
$("#workspace-name").setAttribute("aria-describedby", "workspace-hint prototype-result");
$("#workspace-name").addEventListener("invalid", (event) => {
  if (event.target.validity.valueMissing) event.target.setCustomValidity("Escribe un nombre para el espacio de trabajo.");
});
$("#workspace-name").addEventListener("input", (event) => event.target.setCustomValidity(""));

$("#previous").addEventListener("click", () => navigate(state.index - 1));
$("#next").addEventListener("click", advanceReview);
$("#notes-toggle").addEventListener("click", () => toggleNotes());
$("#notes-close").addEventListener("click", () => toggleNotes(false));
$("#fullscreen").addEventListener("click", fullscreen);
$("#stage-toggle").addEventListener("click", () => setStageMode(true));
$("#stage-exit").addEventListener("click", exitStage);
$("#reading-toggle").addEventListener("click", () => {
  readingPreference = !document.body.classList.contains("reading");
  setReadingView(readingPreference);
});
smallScreen.addEventListener("change", () => {
  if (readingPreference === undefined) setReadingView(smallScreen.matches);
});
$("#metrics-open").addEventListener("click", () => $("#metrics-detail").showModal());
$("#metrics-close").addEventListener("click", () => $("#metrics-detail").close());
$("#overview-toggle").addEventListener("click", () => $("#overview").showModal());
$("#overview-close").addEventListener("click", () => $("#overview").close());
$("#slide-index").addEventListener("click", (event) => {
  if (event.target.closest("a")) $("#overview").close();
});

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
  if (stageReview && event.key === "Escape") {
    event.preventDefault();
    exitStage();
    return;
  }
  if (document.querySelector("dialog[open]")) return;
  if (event.target.closest("#notes")) {
    if (["Escape", "n", "N"].includes(event.key)) {
      event.preventDefault();
      toggleNotes(false);
    }
    return;
  }
  if (event.target.closest("input, textarea, select, [contenteditable='true']")) return;
  if (event.key.toLowerCase() === "s") {
    event.preventDefault();
    if (event.repeat) return;
    if (stageReview) exitStage();
    else setStageMode(true);
    return;
  }
  if (stageReview) {
    // Native form/button activation wins over the presentation's build keys.
    if (event.target.closest("form") || (event.code === "Space" && event.target.closest("button, a"))) return;
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      if (!event.repeat) stageAdvance(["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key) ? -1 : 1);
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      fullscreen();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      navigate(event.key === "Home" ? 0 : slides.length - 1);
    }
    return;
  }
  if (document.body.classList.contains("reading") && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) return;
  if (event.code === "Space" && event.target.closest("button, a")) return;
  switch (event.key) {
    case "ArrowRight": case "ArrowDown": case "PageDown": case " ":
      event.preventDefault();
      if (!event.repeat || state.index !== 14) advanceReview();
      break;
    case "ArrowLeft": case "ArrowUp": case "PageUp":
      event.preventDefault(); navigate(state.index - 1); break;
    case "Home": event.preventDefault(); navigate(0); break;
    case "End": event.preventDefault(); navigate(slides.length - 1); break;
    case "n": case "N": event.preventDefault(); toggleNotes(); break;
    case "g": case "G": event.preventDefault(); $("#overview").showModal(); break;
    case "f": case "F": event.preventDefault(); fullscreen(); break;
    case "Escape": if (!$("#notes").hidden) toggleNotes(false); break;
  }
});

document.addEventListener("fullscreenchange", () => {
  const active = Boolean(document.fullscreenElement);
  if (!active && stageReview) setStageMode(false);
  $("#fullscreen").textContent = active ? "Salir de pantalla completa" : "Pantalla completa";
  $("#fullscreen").setAttribute("aria-label", active ? "Salir de pantalla completa" : "Activar pantalla completa");
});
window.addEventListener("hashchange", () => renderSlide(readHash()));
new ResizeObserver(fitStage).observe($("#viewport"));
new ResizeObserver(() => {
  document.body.style.setProperty("--toolbar-height", `${$(".toolbar").getBoundingClientRect().height}px`);
}).observe($(".toolbar"));
document.querySelectorAll(".sequential .workflow-track span").forEach((item, i) => item.style.setProperty("--i", i));
slides.forEach((slide, index) => {
  const link = document.createElement("a");
  link.href = `#${index + 1}`;
  const number = document.createElement("span");
  number.textContent = String(index + 1).padStart(2, "0");
  link.append(number, document.createTextNode(slide.dataset.title));
  $("#slide-index").append(link);
});
selectLife(0);
buildMetrics();
document.querySelectorAll(".loop-node").forEach((node) => {
  const item = document.createElement("li");
  item.textContent = [...node.querySelectorAll("text")].map((text) => text.textContent).join(" — ");
  $("#loop-reading").append(item);
});
document.querySelectorAll(".definitions tbody tr").forEach((row) => {
  [...row.cells].forEach((cell, index) => {
    cell.dataset.label = ["Métrica", "Definición / unidad", "Método de recogida"][index];
  });
});
markCurrent("#causal-chain li", 0);
renderStack();
setPair(0);
setReadingView(smallScreen.matches);
renderSlide(readHash());
fitStage();
