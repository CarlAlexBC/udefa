# Biología · Capítulo 33 · Percepción sensorial, procesamiento de la información y respuesta motora

## Libro — a quién pertenece este material

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Los reactivos pertenecen al libro, no a un plantel.** El orden es
`Libro → Capítulo → Tema → Reactivo`. Por el otro lado va la demanda
(`Plantel → Carrera → Temario por año → selecciona Temas`), y un examen se arma
cruzando ambos. Los campos **Referencia:** (libro, edición, página) y **Subtema:**
son la llave con la que el temario los manda a llamar.

**Quién lo pide hoy:** **Escuela Militar de Odontología (EMO)**, Curso de Formación
de Cirujano Dentista Militar (clave `BIO-01-2026`). **Ojo:** el capítulo 33 lo pide
la **EMO**, no la EMM: el temario de Medicina (EMM) salta del capítulo 32 al 35 y
**no incluye el 33**. Si mañana otra escuela lo pide, se trae de aquí sin duplicar.

> **Carpeta pendiente de migrar.** Este archivo nace en `docs/examen-cultural/EMM/`
> por consistencia con los demás capítulos de Biología, aunque su plantel sea la EMO.
> Cuando se migre, la carpeta se nombra por el **libro** (`biologia-curtis`), no por
> la escuela; los capítulos de Biología se mueven todos juntos, en un solo paso.

> **Coordinación entre chats (decisión de Carlo, 24 jul 2026):** este capítulo se
> asignó a **esta** sesión, reasignándolo de la sesión que lo tenía listado como
> "en curso" en el encabezado de `biologia-14-epigenetica.md`. Se hizo para no
> duplicar trabajo: el 33 es el tema más lejano del capítulo 14, que esa otra
> sesión está expandiendo. **El cap 14, 15 y 37 NO se tocan desde aquí.**

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro trae
capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de texto es
lorem ipsum). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMO/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado.** El capítulo 33 pertenece a la
**Sección VI · Biología de los animales**. La portadilla está en la **hoja 823**
(página impresa **777**): trae el apartado de apertura "Biología en contexto social ·
Modelo social de discapacidad", el título del capítulo y el epígrafe de Richard
Lewontin. **El cuerpo empieza en la hoja 824** (página impresa **778**), con la
introducción al procesamiento de la información sensorial. El desfase +46 se
verificó aquí (hoja 824 = p. 778), no se calculó.

**El apartado de apertura "Modelo social de discapacidad" queda FUERA** (los modelos
de prescindencia, rehabilitación, etc.): es discusión social y ética, no recuerdo
literal de biología —mismo criterio que los ensayos de cierre "Retomando la
problemática inicial"—.

## Cobertura actual

**EN CURSO.** Cubiertas las pp. 778–797: sensación y percepción y la organización
jerárquica del sistema nervioso; adaptación sensorial, transducción y codificación;
los cinco tipos de receptores y las vías nerviosas; el sistema visual completo
(anatomía del ojo, cuadro 33-1 de modalidades sensoriales, visión estereoscópica,
retina —conos y bastones—, nervio óptico, punto ciego, fóvea y espectro visible); la
audición (oído externo, medio e interno, la cóclea y el equilibrio); el gusto, el
olfato y el sistema somatosensorial; el procesamiento de la información (Broca,
localizacionistas/globalistas, plasticidad) y los sabores; el recuadro 33-1 de
comunicación química (feromonas y órgano vomeronasal); el encéfalo de los vertebrados
(sustancia blanca y gris, tronco cerebral, cerebelo, diencéfalo —tálamo, hipotálamo,
glándula pineal—, telencéfalo, cuerpo calloso y la corteza cerebral hasta sus
lóbulos); el recuadro 33-2 (la neurociencia y sus métodos: EEG, TC, RM, TEP y RMf);
las áreas funcionales de la corteza (motora, somatosensorial, auditiva, visual), los
homúnculos y las cortezas de asociación; la lateralización de los hemisferios (con la
formación reticular); la memoria y el procesamiento de la información (memoria de
corto y largo plazo, el hipocampo, los tipos de memoria, la amígdala); el aprendizaje
(plasticidad neuronal, *Aplysia* y Kandel, habituación y sensibilización,
condicionamiento clásico de Pavlov, aprendizaje social e imitativo y las neuronas
espejo); la regeneración del sistema nervioso; y la respuesta motora (los sistemas
sensoriales, el músculo esquelético como efector somático, el cardíaco y el liso como
efectores autónomos, y las tres clases de movimientos —reflejos, patrones rítmicos y
voluntarios—). Las páginas de ENSAYO (recuadros 33-x y "Biología en contexto social",
pp. 796 y 798) quedan fuera por no ser recuerdo literal.

**Pendiente:** el capítulo 33 está **EN CURSO**. Sigue desde la página impresa
**801** en adelante: la estructura del músculo esquelético y el mecanismo de la
contracción muscular (el sarcómero, la actina y la miosina, las líneas Z y los puentes
cruzados, pp. 802–810), hasta antes del ensayo de cierre "Retomando la problemática
inicial" y los ejercicios. El capítulo 33 termina en la p. 810; el capítulo 34 (El
sistema endocrino) empieza en la p. 811. Este capítulo lo pide **sólo la EMO**;
mientras no se cierre, este archivo sostiene su propio pendiente. **Recordatorio de
coordinación:** los capítulos 14, 15 y 37 son de otras sesiones.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación son
cita textual del libro, sin parafrasear. Cuatro opciones del mismo tipo y magnitud.
Los mejores distractores salen del mismo párrafo o cuadro.

---

## Sub-lote 1 · Introducción: sensación y percepción (p. 778)

### 1

De acuerdo con el libro de Biología, ¿qué capacidad es fundamental para cualquier organismo?

- A. La capacidad para procesar la información sensorial
- B. La capacidad para almacenar energía química
- C. La capacidad para desplazarse por el ambiente
- D. La capacidad para reproducirse sexualmente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 778
**Subtema:** Percepción sensorial · procesamiento de la información sensorial

La capacidad para procesar la información sensorial es fundamental para cualquier organismo.

### 2

En relación con el libro de Biología, ¿cómo se interpreta a los procesos sensoriales?

- A. Como "filtros" entre el organismo y el ambiente que lo rodea
- B. Como barreras impenetrables entre el organismo y el ambiente
- C. Como amplificadores que aumentan todos los estímulos por igual
- D. Como espejos que reflejan el ambiente sin modificarlo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 778
**Subtema:** Percepción sensorial · procesamiento de la información sensorial

Diversas investigaciones han confirmado que los procesos sensoriales son sumamente complejos, y que se los interpreta como "filtros" entre el organismo y el ambiente que los rodea.

### 3

De acuerdo con el libro de Biología, ¿por qué tipo de organización se caracteriza el sistema nervioso de los vertebrados?

- A. Por una organización jerárquica
- B. Por una organización aleatoria
- C. Por una organización lineal
- D. Por una organización circular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 778
**Subtema:** Percepción sensorial · procesamiento de la información sensorial

El sistema nervioso de los vertebrados se caracteriza por una organización jerárquica, cuyo nivel más básico lo constituyen las células especializadas en la conducción y la transmisión de señales electroquímicas, es decir, las neuronas.

### 4

En relación con el libro de Biología, ¿qué constituye el nivel más básico de la organización jerárquica del sistema nervioso de los vertebrados?

- A. Las neuronas, células especializadas en la conducción y transmisión de señales electroquímicas
- B. Las glándulas, órganos especializados en la secreción hormonal
- C. Los músculos, órganos especializados en la contracción
- D. Los centros de procesamiento de la médula espinal y el encéfalo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 778
**Subtema:** Percepción sensorial · procesamiento de la información sensorial

El nivel más básico lo constituyen las células especializadas en la conducción y la transmisión de señales electroquímicas, es decir, las neuronas.

### 5

De acuerdo con el libro de Biología, ¿qué es la sensación?

- A. La respuesta de los receptores sensoriales a estímulos específicos y su posterior procesamiento neurofisiológico
- B. El resultado de la integración y el procesamiento de las sensaciones por los centros nerviosos superiores
- C. La conversión de la energía de un estímulo en energía eléctrica de un potencial nervioso
- D. La pérdida de respuesta de un receptor ante una estimulación constante

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 778
**Subtema:** Percepción sensorial · sensación y percepción

La sensación es la respuesta de los receptores sensoriales a estímulos específicos y su posterior procesamiento neurofisiológico.

### 6

En relación con el libro de Biología, ¿qué es la percepción?

- A. El resultado de la integración y el procesamiento de las sensaciones por los centros nerviosos superiores, sobre la base de experiencias pasadas, lo que constituye un todo explicable y consciente
- B. La respuesta de los receptores sensoriales a estímulos específicos y su procesamiento neurofisiológico
- C. La conversión de la energía de un estímulo en energía eléctrica de un potencial nervioso
- D. La pérdida de respuesta de un receptor ante una estimulación constante

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 778
**Subtema:** Percepción sensorial · sensación y percepción

La percepción es el resultado de la integración y el procesamiento de las sensaciones por los centros nerviosos superiores, sobre la base de experiencias pasadas, lo que constituye un todo explicable y consciente.

## Sub-lote 2 · Adaptación sensorial y codificación de la información (p. 779)

### 7

De acuerdo con el libro de Biología, ¿cómo se conoce el fenómeno por el cual algunos receptores dejan de responder cuando la estimulación que reciben es constante?

- A. Adaptación sensorial
- B. Transducción sensorial
- C. Codificación sensorial
- D. Percepción sensorial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · adaptación sensorial

En los distintos sistemas sensoriales hay receptores que dejan de responder si la estimulación que reciben es constante. Este fenómeno se conoce como adaptación sensorial.

### 8

En relación con el libro de Biología, ¿en qué radican las diferencias entre los sentidos?

- A. En la especificidad del receptor, las vías sensoriales y su recepción e interpretación en zonas especiales del sistema nervioso central
- B. En la forma en la que se codifican y se transmiten las señales
- C. En la cantidad de neuronas que posee cada receptor
- D. En la velocidad con que viaja el impulso nervioso en cada vía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

Las diferencias entre los sentidos no radican en la forma en la que se codifican y se transmiten las señales, sino en la especificidad del receptor, las vías sensoriales y en su recepción e interpretación en zonas especiales del sistema nervioso central.

### 9

De acuerdo con el libro de Biología, ¿qué son los colores, los sonidos, los olores y los sabores?

- A. Construcciones mentales creadas en el cerebro como resultado del procesamiento sensorial, que fuera del cerebro no existen como tales
- B. Propiedades físicas de los objetos, independientes del sistema nervioso que los percibe
- C. Formas de energía que viajan sin cambios desde el estímulo hasta el cerebro
- D. Estímulos que todos los animales perciben de la misma manera

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

Colores, sonidos, olores y sabores son construcciones mentales creadas en el cerebro como resultado del procesamiento sensorial. Fuera del cerebro, no existen como tales.

### 10

En relación con el libro de Biología, ¿qué es la transducción, con la que comienza el procesamiento sensorial?

- A. La conversión de la energía de un estímulo en energía eléctrica de un potencial nervioso
- B. La integración de las sensaciones por los centros nerviosos superiores
- C. La pérdida de respuesta de un receptor ante una estimulación constante
- D. El transporte del impulso nervioso desde el encéfalo hacia los músculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · transducción

El procesamiento sensorial comienza con la transducción, es decir, con la conversión de la energía de un estímulo en energía eléctrica de un potencial nervioso.

### 11

De acuerdo con el libro de Biología, ¿según qué características se codifican los estímulos?

- A. Según su modalidad, intensidad, duración y localización
- B. Según su color, sabor, olor y sonido
- C. Según la especie y el individuo que los percibe
- D. Según la región del encéfalo que los procesa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

Las características del estímulo se codifican según su modalidad, intensidad, duración y localización.

### 12

En relación con el libro de Biología, las diversas formas de energía de los estímulos (presión, calor, vibraciones y fotones), ¿qué definen?

- A. La modalidad de la sensación (tacto, audición o visión)
- B. La intensidad del potencial de acción
- C. La velocidad de la adaptación sensorial
- D. El umbral de percepción del individuo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

Los diversos estímulos comprenden muchas formas de energía: presión, calor, vibraciones y fotones (luz), y definen la modalidad de la sensación (tacto, audición o visión).

### 13

De acuerdo con el libro de Biología, ¿qué ocurre con los potenciales de acción cuanto más intenso es el estímulo?

- A. Mayor es la frecuencia de los potenciales de acción que se desencadenan
- B. Menor es la frecuencia de los potenciales de acción que se desencadenan
- C. Los potenciales de acción dejan de desencadenarse
- D. La frecuencia de los potenciales de acción no cambia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

Cuanto más intenso es el estímulo, mayor es la frecuencia de los potenciales de acción que se desencadenan.

### 14

En relación con el libro de Biología, según la figura 33-1, ¿a qué porción del espectro electromagnético responde el ojo humano?

- A. A la porción visible, entre los 400 y 700 nanómetros, del violeta al rojo
- B. A la porción ultravioleta del espectro
- C. A la porción infrarroja del espectro
- D. A todo el espectro electromagnético, sin límites

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

El ojo humano responde a la porción visible del espectro electromagnético entre los 400 y 700 nanómetros –del violeta al rojo–.

### 15

De acuerdo con el libro de Biología, según la figura 33-1, ¿qué colores no puede distinguir la abeja melífera?

- A. No puede distinguir el rojo del gris
- B. No puede distinguir el violeta del azul
- C. No puede distinguir el verde del amarillo
- D. No puede distinguir el naranja del ultravioleta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 779
**Subtema:** Percepción sensorial · codificación de la información sensorial

La abeja melífera no puede distinguir el rojo del gris.

## Sub-lote 3 · Tipos de receptores sensoriales y vías nerviosas (p. 781)

### 16

De acuerdo con el libro de Biología, ¿qué receptores responden a la presión, el grado de contracción muscular, la posición de las articulaciones y el estímulo de las ondas sonoras?

- A. Los mecanorreceptores
- B. Los quimiorreceptores
- C. Los fotorreceptores
- D. Los termorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · tipos de receptores

La presión, el grado de contracción muscular, la posición de las articulaciones del cuerpo y el estímulo de las ondas sonoras: mecanorreceptores, que originan sensaciones somáticas, como el tacto, propioceptivas o la audición.

### 17

En relación con el libro de Biología, ¿qué sensaciones originan los quimiorreceptores, que responden a la presencia de sustancias químicas?

- A. Sensaciones olfativas o gustativas
- B. Sensaciones visuales
- C. Sensaciones somáticas de frío o calor
- D. Sensaciones auditivas o propioceptivas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · tipos de receptores

La presencia de sustancias químicas: quimiorreceptores, que originan sensaciones olfativas o gustativas.

### 18

De acuerdo con el libro de Biología, ¿qué receptores responden a la luz (fotones u ondas electromagnéticas) y originan sensaciones visuales?

- A. Los fotorreceptores
- B. Los mecanorreceptores
- C. Los quimiorreceptores
- D. Los termorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · tipos de receptores

La luz (fotones u ondas electromagnéticas): fotorreceptores, que originan sensaciones visuales.

### 19

En relación con el libro de Biología, ¿qué receptores responden a la temperatura y originan sensaciones somáticas como el frío o el calor?

- A. Los termorreceptores
- B. Los fotorreceptores
- C. Los mecanorreceptores
- D. Los quimiorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · tipos de receptores

La temperatura: termorreceptores, que originan sensaciones somáticas, como el frío o el calor.

### 20

De acuerdo con el libro de Biología, ¿cómo denominan algunos autores a los receptores especializados en captar estímulos químicos, mecánicos y térmicos nocivos para los tejidos?

- A. Nociceptores
- B. Mecanorreceptores
- C. Termorreceptores
- D. Electrorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · tipos de receptores

Existen receptores especializados para captar estímulos químicos, mecánicos y térmicos nocivos para los tejidos, denominados por algunos autores como nociceptores.

### 21

En relación con el libro de Biología, ¿cómo se denominan comúnmente las rutas neuronales a través de las cuales ocurre la transmisión de un impulso dentro del sistema nervioso?

- A. Vías nerviosas
- B. Centros de relevo
- C. Modalidades sensoriales
- D. Órganos efectores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · vías nerviosas

La transmisión de un impulso dentro del sistema nervioso ocurre a través de rutas neuronales comúnmente denominadas vías nerviosas.

## Sub-lote 4 · El sistema visual y los sistemas sensoriales (p. 781)

### 22

De acuerdo con el libro de Biología, en su forma más simple, ¿qué es la visión, como ocurre en muchos invertebrados?

- A. Solo el registro de la intensidad de la luz y cierta reacción a ella
- B. La formación de un mapa detallado del patrón espacial sobre la retina
- C. La distinción precisa de todos los colores del espectro
- D. La percepción tridimensional de los objetos del ambiente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · sistema visual

En su forma más simple, la visión es solo el registro de la intensidad de la luz y cierta reacción a ella, como ocurre en muchos invertebrados.

### 23

En relación con el libro de Biología, ¿cuál es el trabajo fundamental del ojo de los vertebrados, comparable al de una cámara fotográfica?

- A. Hacer un mapa del patrón espacial de la ordenación óptica sobre la retina
- B. Registrar solamente la intensidad de la luz
- C. Convertir los sonidos en imágenes
- D. Regular la temperatura del interior del ojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · sistema visual

El trabajo fundamental del ojo de los vertebrados –como una cámara fotográfica– es hacer un mapa del patrón espacial en la ordenación óptica sobre la retina.

### 24

De acuerdo con el libro de Biología, ¿cuáles se encuentran entre los sistemas fotorreceptores más desarrollados?

- A. El ojo compuesto de los artrópodos, el ojo del pulpo y el de los vertebrados
- B. Los ojos de todos los invertebrados por igual
- C. Los mecanorreceptores de los mamíferos
- D. Los termorreceptores de los reptiles

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · sistema visual

El ojo compuesto de los artrópodos, el ojo del pulpo y el de los vertebrados se encuentran entre los sistemas fotorreceptores más desarrollados.

### 25

En relación con el libro de Biología, la información que ingresa por los sistemas sensoriales participa de forma principal en la percepción, el control del movimiento, el mantenimiento de la activación nerviosa y, además, ¿en qué otra función?

- A. En la regulación de las funciones de los órganos internos
- B. En la síntesis de las hormonas sexuales
- C. En la reparación de los tejidos dañados
- D. En la producción de las células sanguíneas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · sistemas sensoriales

La información participa de forma principal en: a) la percepción; b) el control del movimiento; c) la regulación de las funciones de los órganos internos; y d) el mantenimiento de la activación nerviosa.

## Sub-lote 5 · Anatomía del ojo humano (figura 33-2, p. 781)

### 26

De acuerdo con el libro de Biología, según la figura 33-2, ¿cómo está compuesto el ojo humano?

- A. Por tres capas de tejido que forman una esfera llena de líquido
- B. Por dos capas de tejido que forman un disco plano
- C. Por una sola capa de tejido transparente
- D. Por cuatro capas de músculo liso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

El ojo humano es un órgano complejo compuesto por tres capas de tejido que forman una esfera llena de líquido.

### 27

En relación con el libro de Biología, según la figura 33-2, ¿qué es la esclerótica, la capa externa del ojo?

- A. Tejido conectivo blanco y fibroso que cumple una función protectora
- B. Una capa media que contiene vasos sanguíneos
- C. La capa más interna que contiene los fotorreceptores
- D. Un orificio en el centro del iris

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La capa externa –la esclerótica– es tejido conectivo blanco y fibroso, que cumple una función protectora.

### 28

De acuerdo con el libro de Biología, según la figura 33-2, ¿qué es la córnea?

- A. La porción anterior de la esclerótica, que es transparente
- B. La capa media del ojo, que contiene vasos sanguíneos
- C. La zona de la retina de mayor agudeza visual
- D. La parte coloreada del ojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La porción anterior de la esclerótica –la córnea– es transparente.

### 29

En relación con el libro de Biología, según la figura 33-2, ¿qué contiene la coroides, la capa media del ojo?

- A. Vasos sanguíneos
- B. Las células fotorreceptoras
- C. Tejido conectivo blanco y fibroso
- D. Líquido transparente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La capa media –la coroides– contiene vasos sanguíneos.

### 30

De acuerdo con el libro de Biología, según la figura 33-2, ¿qué células contiene la retina, la capa más interna del ojo?

- A. Las células fotorreceptoras: los bastones y los conos
- B. Las células del músculo ciliar
- C. Los vasos sanguíneos de la coroides
- D. Las fibras de la esclerótica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La capa más interna del ojo –la retina– contiene las células fotorreceptoras: los bastones y los conos.

### 31

En relación con el libro de Biología, según la figura 33-2, ¿qué es la fóvea?

- A. La zona de la retina, cerca de su centro, de mayor agudeza visual
- B. La porción transparente anterior de la esclerótica
- C. El orificio central del iris
- D. El círculo de músculo liso que sostiene el cristalino

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La fóvea, cerca del centro de la retina, es la zona de mayor agudeza visual.

### 32

De acuerdo con el libro de Biología, según la figura 33-2, ¿qué es la pupila?

- A. Un orificio en el centro del iris, cuyo tamaño regulan los músculos circulares del iris
- B. La parte coloreada del ojo
- C. La capa externa protectora del ojo
- D. La zona de mayor agudeza visual de la retina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La pupila es un orificio en el centro del iris, cuyo tamaño está regulado por el control de los músculos circulares del iris.

### 33

En relación con el libro de Biología, según la figura 33-2, ¿qué es el iris?

- A. La parte coloreada del ojo, una estructura circular unida al cuerpo ciliar
- B. La capa más interna del ojo, que contiene los fotorreceptores
- C. El tejido conectivo blanco y fibroso de la capa externa
- D. La porción transparente anterior de la esclerótica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

La parte coloreada del ojo –el iris– es una estructura circular unida al cuerpo ciliar.

### 34

De acuerdo con el libro de Biología, según la figura 33-2, ¿qué es el músculo ciliar?

- A. Un círculo de músculo liso desde el cual se extienden los ligamentos suspensores que mantienen al cristalino en posición
- B. La parte coloreada del ojo, unida a la pupila
- C. La capa media del ojo, que contiene los vasos sanguíneos
- D. El orificio central por donde entra la luz

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 781
**Subtema:** Percepción sensorial · anatomía del ojo humano

El músculo ciliar es un círculo de músculo liso, desde el cual se extienden los ligamentos suspensores que mantienen al cristalino en posición.

## Sub-lote 6 · Cuadro 33-1 · Modalidades sensoriales en los mamíferos (p. 782)

### 35

De acuerdo con el libro de Biología, según el cuadro 33-1, ¿cuál es la célula receptora del gusto?

- A. Las papilas gustativas
- B. Los neurorreceptores olfatorios
- C. Las células ciliadas
- D. Los fotorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 782
**Subtema:** Percepción sensorial · modalidades sensoriales

Gusto: estímulo, iones y moléculas disueltas en agua; localización, lengua y faringe; célula receptora, papilas gustativas.

### 36

En relación con el libro de Biología, según el cuadro 33-1, ¿dónde se localizan los receptores del olfato?

- A. En la mucosa olfatoria en la cavidad nasal
- B. En las papilas gustativas de la lengua
- C. En la cóclea del oído interno
- D. En la retina del ojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 782
**Subtema:** Percepción sensorial · modalidades sensoriales

Olfato: estímulo, moléculas disueltas en aire o en agua; localización, mucosa olfatoria en la cavidad nasal; célula receptora, neurorreceptores olfatorios.

### 37

De acuerdo con el libro de Biología, según el cuadro 33-1, ¿dónde se localiza el receptor de la audición?

- A. En la cóclea (órgano de Corti), en el oído interno
- B. En el aparato vestibular del oído interno
- C. En la mucosa olfatoria de la cavidad nasal
- D. En la retina del ojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 782
**Subtema:** Percepción sensorial · modalidades sensoriales

Audición: estímulo, estimulación mecánica (vibraciones sonoras); localización, cóclea (órgano de Corti) en el oído interno; célula receptora, células ciliadas.

### 38

En relación con el libro de Biología, según el cuadro 33-1, ¿dónde se localiza el receptor del equilibrio?

- A. En el aparato vestibular, en el oído interno
- B. En la cóclea (órgano de Corti) del oído interno
- C. En los husos musculares
- D. En las papilas gustativas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 782
**Subtema:** Percepción sensorial · modalidades sensoriales

Equilibrio: estímulo, aceleración angular y lineal (estimulación mecánica); localización, aparato vestibular en el oído interno; célula receptora, células ciliadas.

### 39

De acuerdo con el libro de Biología, según el cuadro 33-1, ¿cuáles son las células receptoras de la visión?

- A. Los fotorreceptores (conos y bastones)
- B. Las células ciliadas
- C. Las papilas gustativas
- D. Los husos musculares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 782
**Subtema:** Percepción sensorial · modalidades sensoriales

Visión: estímulo, luz (fotones); localización, retina en el ojo; célula receptora, fotorreceptores (conos y bastones).

### 40

En relación con el libro de Biología, según el cuadro 33-1, ¿cuál es la célula receptora de la propiocepción por estiramiento muscular?

- A. El huso muscular con terminaciones nerviosas
- B. Las células ciliadas
- C. Las papilas gustativas
- D. Los barorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 782
**Subtema:** Percepción sensorial · modalidades sensoriales

Propiocepción: estímulo, estiramiento muscular (estimulación mecánica); localización, músculos; célula receptora, huso muscular con terminaciones nerviosas.

## Sub-lote 7 · Visión estereoscópica y procesamiento en la retina (p. 783)

### 41

De acuerdo con el libro de Biología, ¿qué tipo de visión tienen muchos animales depredadores, a diferencia de los que suelen ser presa y tienen los ojos a los lados de la cabeza?

- A. Visión estereoscópica
- B. Visión en blanco y negro
- C. Visión ultravioleta
- D. Visión nula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 783
**Subtema:** Percepción sensorial · sistema visual

Muchos animales depredadores tienen visión estereoscópica, mientras que aquellos que con más frecuencia tienen el papel de presa suelen tener los ojos a los lados de la cabeza.

### 42

En relación con el libro de Biología, ¿cuántos tipos de fotorreceptores contiene la retina del ojo de los vertebrados, que capturan la energía lumínica e inician la transducción?

- A. Dos: los conos y los bastones
- B. Uno solo: los conos
- C. Tres: conos, bastones y células ciliadas
- D. Cuatro, uno por cada color primario

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 783
**Subtema:** Percepción sensorial · procesamiento en la retina

La retina del ojo de los vertebrados contiene dos tipos de fotorreceptores que capturan la energía lumínica y comienzan el proceso de transducción: los conos y los bastones.

### 43

De acuerdo con el libro de Biología, ¿de qué visión son responsables los bastones y de cuál los conos?

- A. Los bastones, de la visión en blanco y negro; los conos, de la visión en color
- B. Los bastones, de la visión en color; los conos, de la visión en blanco y negro
- C. Ambos, de la visión en color por igual
- D. Ambos, de la visión en blanco y negro por igual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 783
**Subtema:** Percepción sensorial · procesamiento en la retina

Los bastones son responsables de la visión en blanco y negro y los conos, de la visión en color.

### 44

En relación con el libro de Biología, ¿qué fotorreceptores son más sensibles a la luz y se utilizan en la visión con poca luz, aunque den menos resolución?

- A. Los bastones
- B. Los conos
- C. Las células ciliadas
- D. Los neurorreceptores olfatorios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 783
**Subtema:** Percepción sensorial · procesamiento en la retina

Los bastones no proporcionan un grado de resolución tan grande como los conos, aunque son más sensibles a la luz (se utilizan en la visión con poca luz).

### 45

De acuerdo con el libro de Biología, ¿por qué durante la noche o en penumbras los humanos vemos un mundo descolorido?

- A. Porque la luz tenue no estimula los conos
- B. Porque la luz tenue no estimula los bastones
- C. Porque la retina deja de funcionar en la oscuridad
- D. Porque los bastones dejan de ser sensibles a la luz

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 783
**Subtema:** Percepción sensorial · procesamiento en la retina

La luz tenue no estimula los conos, razón por la cual durante la noche o en penumbras los humanos vemos un mundo descolorido.

### 46

En relación con el libro de Biología, ¿por qué los animales nocturnos no tienen visión en color?

- A. Porque tienen retinas constituidas, casi por completo, por bastones
- B. Porque tienen retinas constituidas, casi por completo, por conos
- C. Porque carecen por completo de retina
- D. Porque sus conos solo perciben el color rojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 783
**Subtema:** Percepción sensorial · procesamiento en la retina

Los animales nocturnos tienen retinas constituidas, casi por completo, por bastones y, por lo tanto, no tienen visión en color.

## Sub-lote 8 · Conclusión del sistema visual: nervio óptico, punto ciego y fóvea (p. 784)

### 47

De acuerdo con el libro de Biología, ¿qué forman los axones de todas las células ganglionares de la retina al converger en la parte posterior del globo ocular?

- A. El nervio óptico, que conecta la retina con el encéfalo
- B. La fóvea, zona de mayor agudeza visual
- C. El músculo ciliar, que sostiene el cristalino
- D. La coroides, capa media del ojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · nervio óptico

Los axones de todas las células ganglionares de la retina convergen en la parte posterior del globo ocular y forman el nervio óptico, que conecta la retina con el encéfalo.

### 48

En relación con el libro de Biología, ¿por qué el punto de la retina por donde pasa el nervio óptico es un punto ciego?

- A. Porque carece de fotorreceptores
- B. Porque está formado exclusivamente por conos
- C. Porque en él se forma la imagen más definida
- D. Porque está cubierto por el cristalino

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · nervio óptico

El punto de la retina por donde pasa el nervio óptico carece de fotorreceptores y es, por lo tanto, un punto ciego.

### 49

De acuerdo con el libro de Biología, ¿por qué de modo habitual no percibimos el punto ciego de la retina?

- A. Porque las "porciones faltantes" de la imagen son suministradas por el otro ojo
- B. Porque el punto ciego se desplaza constantemente
- C. Porque los conos de la fóvea lo compensan
- D. Porque el cristalino corrige la imagen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · nervio óptico

Como de modo habitual vemos el mismo objeto con ambos ojos, las "porciones faltantes" de una imagen son suministradas por el otro ojo.

### 50

En relación con el libro de Biología, ¿cuál es el área de la retina en la cual se forma la imagen más definida?

- A. La fóvea, que tiene una gran cantidad de conos fuertemente compactados
- B. El punto ciego, por donde sale el nervio óptico
- C. La coroides, capa media rica en vasos sanguíneos
- D. La esclerótica, capa externa protectora

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · fóvea

El área de la retina en la cual se forma la imagen más definida es la fóvea, que tiene una gran cantidad de células fotorreceptoras formadas, casi por completo, por conos fuertemente compactados.

### 51

De acuerdo con el libro de Biología, ¿cuántas fóveas tienen las aves, que dependen de la visión por sobre todos los demás sentidos?

- A. Dos o hasta tres fóveas
- B. Una sola fóvea, como los mamíferos
- C. Ninguna fóvea
- D. Una fóvea por cada color primario

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · fóvea

Las aves, que dependen de la visión por sobre todos los demás sentidos, tienen dos o hasta tres fóveas y sus fotorreceptores tienden a estar más apretados.

### 52

En relación con el libro de Biología, para el ojo humano, ¿entre qué colores se extiende el espectro visible?

- A. Desde la luz violeta, de ondas comparativamente cortas, hasta la luz roja, la onda más larga que podemos ver
- B. Desde la luz roja, de ondas cortas, hasta la luz violeta, la onda más larga que podemos ver
- C. Desde el ultravioleta hasta el infrarrojo
- D. Desde la luz verde hasta la luz azul

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · espectro visible

Para el ojo humano, el espectro visible va desde la luz violeta, constituida por ondas de luz comparativamente cortas, hasta la luz roja, la onda más larga que podemos ver.

## Sub-lote 9 · La audición: el oído (p. 784)

### 53

De acuerdo con el libro de Biología, ¿en qué tres partes se divide el oído de los mamíferos, un sistema de cámaras?

- A. Oído externo, medio e interno
- B. Oído anterior, central y posterior
- C. Oído superior, medio e inferior
- D. Oído izquierdo, central y derecho

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

El oído de los mamíferos es un sistema de cámaras. Comprende el oído externo, medio e interno, y cada uno de ellos tiene una función específica en la detección del sonido.

### 54

En relación con el libro de Biología, ¿de qué consta el oído externo, y cuál es su función?

- A. De un pabellón y un canal auditivo que colectan y encauzan las vibraciones hacia el oído medio
- B. De tres huesecillos que amplifican las ondas sonoras
- C. De la cóclea, un tubo enrollado con mecanorreceptores
- D. De la trompa auditiva que lo conecta con la faringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

El oído externo consta de un pabellón y un canal auditivo en los que circula el aire. Ambos colectan y encauzan las vibraciones hacia el oído medio.

### 55

De acuerdo con el libro de Biología, el oído medio es una cavidad llena de aire limitada por dos membranas; ¿cuáles son?

- A. El tímpano y la membrana que cubre la ventana oval
- B. La córnea y la esclerótica
- C. La cóclea y el pabellón auditivo
- D. La retina y la coroides

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

El oído medio es una cavidad llena de aire limitada por dos membranas: el tímpano y la membrana que cubre la ventana oval.

### 56

En relación con el libro de Biología, ¿cuáles son los tres huesecillos que conectan las dos membranas del oído medio?

- A. El martillo, el yunque y el estribo
- B. El martillo, el estribo y la cóclea
- C. El tímpano, el yunque y la ventana oval
- D. El pabellón, el canal auditivo y el estribo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

Ambas están conectadas por medio de tres huesecillos: martillo, yunque y estribo.

### 57

De acuerdo con el libro de Biología, ¿qué función cumplen los tres huesecillos del oído medio?

- A. Amplifican notablemente las ondas sonoras mediante la percusión sobre la ventana oval
- B. Colectan y encauzan las vibraciones desde el ambiente
- C. Traducen los estímulos mecánicos en impulsos nerviosos
- D. Conectan el oído medio con la faringe superior

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

Estos pequeños huesos amplifican notablemente las ondas sonoras mediante la percusión sobre la ventana oval.

### 58

En relación con el libro de Biología, ¿qué estructura conecta el oído medio con la faringe superior?

- A. La trompa auditiva (o trompa de Eustaquio)
- B. El canal auditivo del oído externo
- C. La ventana oval
- D. El nervio óptico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

El oído medio está conectado con la faringe superior por la trompa auditiva (o trompa de Eustaquio).

### 59

De acuerdo con el libro de Biología, ¿qué estructura en forma de tubo enrollado está situada en el oído interno?

- A. La cóclea
- B. El tímpano
- C. El estribo
- D. El pabellón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

En el oído interno está situada la cóclea, una estructura en forma de tubo enrollado.

### 60

En relación con el libro de Biología, ¿qué mecanorreceptores se sitúan sobre una de las membranas internas de la cóclea y traducen en impulsos los estímulos mecánicos que llegan en forma de ondas?

- A. Células pilosas con estereocilios
- B. Conos y bastones
- C. Papilas gustativas
- D. Neurorreceptores olfatorios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 784
**Subtema:** Percepción sensorial · audición

Sobre una de las membranas internas de la cóclea se sitúan los mecanorreceptores, células pilosas con estereocilios, que traducen los estímulos mecánicos que llegan a su superficie en forma de ondas en impulsos.

## Sub-lote 10 · El equilibrio y la cóclea (p. 785)

### 61

De acuerdo con el libro de Biología, los canales semicirculares, el utrículo y el sáculo del oído interno, que forman el aparato vestibular, ¿con qué sentido están relacionados?

- A. Con el sentido del equilibrio y de la posición del cuerpo en el espacio
- B. Con el sentido de la audición
- C. Con el sentido del gusto
- D. Con el sentido del olfato

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · equilibrio

Los canales semicirculares y otros órganos, como el utrículo y el sáculo (que forman parte del aparato vestibular), no están relacionados con la audición, sino con el sentido del equilibrio y de la posición del cuerpo en el espacio.

### 62

En relación con el libro de Biología, ¿a qué responden las células ciliadas del aparato vestibular, inmersas en un líquido viscoso?

- A. A cambios en la posición de la cabeza respecto de la gravedad y la aceleración
- B. A las variaciones en la intensidad de la luz
- C. A la presencia de sustancias químicas disueltas
- D. A los cambios de temperatura de la piel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · equilibrio

Dentro de estos órganos existen células ciliadas inmersas en un líquido viscoso, que responden a cambios en la posición de la cabeza respecto de la gravedad y la aceleración.

### 63

De acuerdo con el libro de Biología, ¿cómo se denominan los pequeños cuerpos de carbonato de calcio que deforman y estimulan los receptores del aparato vestibular?

- A. Otolitos
- B. Estereocilios
- C. Estribos
- D. Ampollas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · equilibrio

El movimiento vertical u horizontal produce la estimulación del sáculo y el utrículo, debido a la acción de pequeños cuerpos de carbonato de calcio denominados otolitos, que pueden deformar y estimular los receptores del aparato vestibular.

### 64

En relación con el libro de Biología, según la figura 33-5, ¿qué ocurre cuando las ondas de sonido entran por el oído externo?

- A. Chocan con la membrana timpánica y la hacen vibrar
- B. Estimulan directamente la fóvea de la retina
- C. Deforman los otolitos del aparato vestibular
- D. Se transforman en luz dentro de la cóclea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · audición

Las ondas de sonido entran por el oído externo, chocan con la membrana timpánica y la hacen vibrar.

### 65

De acuerdo con el libro de Biología, según la figura 33-5, ¿por qué se amplifica el sonido que entró por el oído externo?

- A. Porque la ventana oval es más pequeña que el tímpano, así que la presión se distribuye en un área menor y resulta mayor
- B. Porque la ventana oval es más grande que el tímpano y reparte la presión en un área mayor
- C. Porque los otolitos aumentan la energía de las ondas sonoras
- D. Porque el líquido de la cóclea multiplica las vibraciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · audición

Como esta última membrana [la ventana oval] es más pequeña que el tímpano, la presión se distribuye en un área menor y da como resultado una presión (fuerza por unidad de área) mayor. Así, el sonido que entró por el oído externo se amplifica.

### 66

En relación con el libro de Biología, según la figura 33-5, ¿cómo es la cóclea?

- A. Un canal espiralado dividido en dos cámaras, con un canal timpánico entre ellas, y las tres cámaras contienen líquido
- B. Una cavidad única llena de aire limitada por el tímpano
- C. Un tubo recto conectado a la faringe superior
- D. Un conjunto de tres huesecillos articulados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · audición

La cóclea es un canal espiralado, dividido en dos cámaras –una superior y otra inferior– con un canal timpánico entre ellas. Las tres cámaras contienen líquido.

### 67

De acuerdo con el libro de Biología, según la figura 33-5, ¿qué estructura forma el piso del canal timpánico de la cóclea, y qué órgano yace sobre ella?

- A. La membrana basilar, sobre la cual yace el órgano de Corti
- B. La ventana oval, sobre la cual yace el estribo
- C. La membrana tectorial, sobre la cual yacen los otolitos
- D. La membrana timpánica, sobre la cual yace el martillo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · audición

El piso del canal timpánico está formado por la membrana basilar, sobre la cual yace el órgano de Corti, el verdadero órgano sensorial.

### 68

En relación con el libro de Biología, según la figura 33-5, ¿cuál es el verdadero órgano sensorial de la audición, que yace sobre la membrana basilar?

- A. El órgano de Corti
- B. El aparato vestibular
- C. La ventana oval
- D. El pabellón auditivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 785
**Subtema:** Percepción sensorial · audición

El piso del canal timpánico está formado por la membrana basilar, sobre la cual yace el órgano de Corti, el verdadero órgano sensorial.

## Sub-lote 11 · Olfato, gusto y sistema somatosensorial (p. 786)

### 69

De acuerdo con el libro de Biología, ¿para qué animales es el sentido del olfato su "ventana al mundo", a diferencia de los seres humanos?

- A. Para muchos animales, mientras que los seres humanos centran su percepción básicamente en la visión
- B. Para los seres humanos, más que para cualquier otro animal
- C. Para todos los animales por igual, incluidos los humanos
- D. Para ningún animal, pues todos se guían por la visión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · olfato

Para muchos animales, el sentido del olfato es su "ventana al mundo". No es el caso de los seres humanos, que centramos nuestra percepción del medio externo básicamente en la visión.

### 70

En relación con el libro de Biología, en muchos animales, ¿qué comportamientos rige el olfato?

- A. El comportamiento alimentario, la localización y selección de la pareja, la delimitación territorial y de senderos, y la recepción de señales de alarma
- B. Únicamente la búsqueda de alimento
- C. Solamente la localización de la pareja
- D. Exclusivamente la orientación visual en el espacio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · olfato

En muchos animales, el olfato rige el comportamiento alimentario, la localización y selección de la pareja, la delimitación territorial y de senderos, y la recepción de señales de alarma.

### 71

De acuerdo con el libro de Biología, en los vertebrados terrestres, ¿dónde se encuentran las células gustativas, y qué constituyen junto con las células de soporte que las rodean?

- A. Dentro de la boca; constituyen las papilas gustativas
- B. En la mucosa nasal; constituyen los neurorreceptores olfatorios
- C. Sobre la superficie del cuerpo; constituyen los exterorreceptores
- D. En el oído interno; constituyen las células ciliadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · gusto

En los vertebrados terrestres, las células gustativas se encuentran dentro de la boca. Los receptores gustativos y las células de soporte que los rodean constituyen las papilas gustativas.

### 72

En relación con el libro de Biología, en el sistema somatosensorial, ¿qué provoca la estimulación mecánica de la superficie corporal?

- A. La sensación táctil
- B. Las sensaciones térmicas
- C. La propiocepción
- D. La nocicepción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistema somatosensorial

La estimulación mecánica de la superficie corporal provoca la sensación táctil.

### 73

De acuerdo con el libro de Biología, ¿cómo se denomina el fenómeno que provocan los desplazamientos mecánicos de los músculos y las articulaciones, y que ayuda a mantener la posición y controlar el movimiento?

- A. La propiocepción
- B. La nocicepción
- C. La estereognosia
- D. La quimiotaxis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistema somatosensorial

Los desplazamientos mecánicos de los músculos y las articulaciones constituyen estímulos que provocan el fenómeno denominado propiocepción. Con este término se agrupa a un conjunto de funciones del sistema nervioso que conducen a mantener la posición, controlar el movimiento de la cabeza, de los miembros y del cuerpo, y –junto con el sistema vestibular–, a la sensación de equilibrio.

### 74

En relación con el libro de Biología, ¿por qué es importante la nocicepción, provocada por estímulos químicos, mecánicos o térmicos nocivos?

- A. Porque constituye una señal de alerta y una información significativa para la protección del organismo
- B. Porque permite mantener la posición y el equilibrio del cuerpo
- C. Porque produce la percepción de tridimensionalidad de los objetos
- D. Porque orienta al animal hacia la fuente de un estímulo químico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistema somatosensorial

Los estímulos químicos, mecánicos o térmicos nocivos [provocan la] nocicepción. Este tipo de sensación, que puede provocar emociones fuertes, es importante porque constituye una señal de alerta y se convierte en una información significativa para la protección del organismo.

### 75

De acuerdo con el libro de Biología, ¿de qué tipo es la mayor parte de los receptores que constituyen el sistema somatosensorial, como los de la piel?

- A. Del tipo mecanorreceptores
- B. Del tipo fotorreceptores
- C. Del tipo quimiorreceptores
- D. Del tipo termorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistema somatosensorial

La mayor parte de los receptores que constituyen el sistema somatosensorial son del tipo mecanorreceptores, como los de la piel, que proveen información acerca del ambiente externo.

### 76

En relación con el libro de Biología, ¿cómo se denomina la percepción de tridimensionalidad que producen, combinados, el tacto y la propiocepción de la mano al manipular un objeto?

- A. Estereognosia
- B. Propiocepción
- C. Quimiotaxis
- D. Nocicepción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistema somatosensorial

El tacto y la propiocepción de la mano, combinados, producen la percepción de tridimensionalidad (estereognosia) cuando manipulamos un objeto. Esta capacidad sensorial nos permite, por ejemplo, distinguir un cuerpo esférico de uno cúbico al manipularlo a ciegas.

### 77

De acuerdo con el libro de Biología, ¿qué son los corpúsculos de Pacini, situados en la piel o debajo de ella?

- A. Receptores rodeados de tejido conectivo, lo que modifica su respuesta a los estímulos táctiles
- B. Células gustativas rodeadas de células de soporte
- C. Cuerpos de carbonato de calcio que estimulan el aparato vestibular
- D. Fotorreceptores compactados de la fóvea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistema somatosensorial

Otros receptores situados en la piel o debajo de ella (como los corpúsculos de Pacini) están rodeados de tejido conectivo, lo que modifica su respuesta a los estímulos táctiles.

### 78

En relación con el libro de Biología, ¿qué es la quimiorrecepción?

- A. La detección de ciertas sustancias químicas
- B. La detección de la intensidad de la luz
- C. La detección de las ondas de presión del aire
- D. La detección de los cambios de temperatura

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistemas químicos

La quimiorrecepción –es decir, la detección de ciertas sustancias químicas– puede extenderse de manera amplia en el cuerpo de los animales.

### 79

De acuerdo con el libro de Biología, ¿cómo se denomina el mecanismo por el cual un animal se orienta, se aleja o se acerca a la fuente de un estímulo químico?

- A. Quimiotaxis
- B. Quimiorrecepción
- C. Propiocepción
- D. Estereognosia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistemas químicos

Los quimiorreceptores obtienen información sobre el tipo, la intensidad y la proximidad o lejanía de ciertas sustancias; esto le permite al animal orientarse, alejarse o acercarse a la fuente de estímulo químico (este mecanismo se denomina quimiotaxis).

### 80

En relación con el libro de Biología, ¿cómo se denominan los receptores químicos que detectan sustancias que se encuentran a una cierta distancia?

- A. Exterorreceptores
- B. Interorreceptores
- C. Mecanorreceptores
- D. Termorreceptores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 786
**Subtema:** Percepción sensorial · sistemas químicos

La mayor parte de los animales tiene receptores químicos que detectan sustancias químicas que se encuentran a una cierta distancia (exterorreceptores).

## Sub-lote 12 · Procesamiento de la información; los sabores y el epitelio olfatorio (p. 787)

### 81

De acuerdo con el libro de Biología, ¿qué propuso en 1864 el cirujano y antropólogo francés Paul Broca sobre el hemisferio izquierdo del cerebro humano?

- A. Que estaba relacionado con el habla
- B. Que estaba relacionado con la visión
- C. Que estaba relacionado con el equilibrio
- D. Que estaba relacionado con el olfato

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · procesamiento de la información

En 1864, el cirujano y antropólogo francés Paul Broca (1824-1880) propuso que el hemisferio izquierdo del cerebro humano estaba relacionado con el habla.

### 82

En relación con el libro de Biología, ¿qué sostenían los localizacionistas en la controversia sobre las funciones mentales?

- A. Que las funciones mentales estaban localizadas en áreas determinadas de la corteza cerebral
- B. Que las funciones mentales eran el producto de la actividad de toda la corteza
- C. Que las funciones mentales no dependían del cerebro
- D. Que las funciones mentales residían en el hemisferio derecho

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · procesamiento de la información

Se estableció una discusión entre quienes proponían que las funciones mentales estaban localizadas en áreas determinadas de la corteza cerebral –localizacionistas– y quienes sostenían que estas funciones eran el producto de la actividad de toda la corteza –globalistas–.

### 83

De acuerdo con el libro de Biología, ¿qué es la plasticidad que exhiben las redes nerviosas, a diferencia de los circuitos eléctricos?

- A. La capacidad para experimentar modificaciones funcionales y, hasta cierto punto, anatómicas, en respuesta a la experiencia
- B. La capacidad para conducir la electricidad sin resistencia
- C. La incapacidad de modificarse una vez formadas
- D. La capacidad para regenerarse tras cualquier lesión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · procesamiento de la información

A diferencia de los circuitos eléctricos, las redes nerviosas no son simples conexiones de cables, sino que exhiben plasticidad, es decir, tienen la capacidad para experimentar modificaciones funcionales y, hasta cierto punto, incluso anatómicas, en respuesta a la experiencia.

### 84

En relación con el libro de Biología, ¿qué tienen de particular los receptores olfatorios respecto del resto del sistema nervioso?

- A. Son las únicas neuronas que están en contacto directo con el ambiente
- B. Son las únicas neuronas que no conducen impulsos nerviosos
- C. Son las únicas neuronas que carecen de núcleo
- D. Son las únicas neuronas incapaces de regenerarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · olfato

Los receptores olfatorios son las únicas neuronas que están en contacto directo con el ambiente.

### 85

De acuerdo con el libro de Biología, ¿por qué el gusto y el olfato se confunden con facilidad?

- A. Porque el sabor de los alimentos depende en gran medida de los estímulos que llegan al epitelio olfatorio a través de la garganta (faringe)
- B. Porque los receptores del gusto y del olfato son la misma célula
- C. Porque ambos sentidos se procesan en el oído interno
- D. Porque los dos dependen exclusivamente de las papilas gustativas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · gusto y olfato

El sabor de los alimentos depende, en gran medida, de los estímulos que llegan hasta el epitelio olfatorio a través de la garganta (faringe) y, por ello, es que el gusto y el olfato se confunden con facilidad.

### 86

En relación con el libro de Biología, ¿cuáles son los cuatro "gustos" básicos que captan los receptores gustativos?

- A. Dulce, ácido, amargo y salado
- B. Dulce, ácido, picante y salado
- C. Dulce, amargo, umami y picante
- D. Ácido, salado, astringente y metálico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · gusto

Los "gustos" que captan los receptores gustativos son básicamente cuatro: dulce, ácido, amargo y salado.

### 87

De acuerdo con el libro de Biología, ¿cuál es el quinto sabor reconocido actualmente, que significa "delicioso" en japonés y corresponde al glutamato?

- A. El umami
- B. El picante
- C. El astringente
- D. El mentolado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · gusto

Actualmente se reconoce un quinto sabor: umami, que significa "delicioso" en japonés y que corresponde al glutamato.

### 88

En relación con el libro de Biología, según la figura 33-7, ¿qué es el epitelio olfatorio?

- A. Un tejido especializado que recubre el techo de cada cavidad nasal y es responsable de nuestro sentido del olfato
- B. La capa más interna del ojo que contiene los fotorreceptores
- C. La membrana que forma el piso del canal timpánico de la cóclea
- D. El conjunto de papilas gustativas de la lengua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · olfato

El epitelio olfatorio, un tejido especializado que recubre el techo de cada cavidad nasal, es responsable de nuestro sentido del olfato.

### 89

De acuerdo con el libro de Biología, según la figura 33-7, ¿por qué tres tipos de células está compuesto el epitelio olfatorio?

- A. Células de soporte, células basales y neurorreceptores olfatorios
- B. Conos, bastones y células ganglionares
- C. Células ciliadas, otolitos y células de soporte
- D. Papilas gustativas, células de soporte y células basales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · olfato

El epitelio olfatorio está compuesto por tres tipos de células: células de soporte, células basales y neurorreceptores olfatorios, que son los receptores sensoriales.

### 90

En relación con el libro de Biología, ¿por qué la mucosa olfatoria es uno de los pocos lugares del sistema nervioso con una característica particular?

- A. Porque en ella existe una regeneración neuronal activa
- B. Porque en ella no hay ninguna neurona
- C. Porque en ella el impulso nervioso viaja más lento
- D. Porque en ella se procesa la visión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 787
**Subtema:** Percepción sensorial · olfato

La mucosa olfatoria es uno de los pocos lugares del sistema nervioso en donde existe una regeneración neuronal activa.

## Sub-lote 13 · Recuadro 33-1 · Comunicación química: feromonas y órgano vomeronasal (p. 788)

### 91

En relación con el libro de Biología, según el recuadro 33-1, ¿cómo se llaman las señales químicas enviadas y recibidas por individuos de la misma especie?

- A. Feromonas
- B. Hormonas
- C. Neurotransmisores
- D. Enzimas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 788
**Subtema:** Percepción sensorial · comunicación química

Las señales químicas enviadas y recibidas por individuos de la misma especie se llaman feromonas.

### 92

De acuerdo con el libro de Biología, según el recuadro 33-1, ¿qué son las feromonas?

- A. Moléculas que pueden contener mensajes muy específicos, con una gran cantidad de información, y que afectan al comportamiento o a los procesos fisiológicos del otro
- B. Células especializadas que captan la luz y la transforman en impulsos nerviosos
- C. Prolongaciones de las neuronas que conducen el impulso hacia el cuerpo celular
- D. Glándulas que vierten sus productos hacia el interior de la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 788
**Subtema:** Percepción sensorial · comunicación química

La mayoría de las especies se comunican mediante feromonas: moléculas que pueden contener mensajes muy específicos, con una gran cantidad de información, y que afectan al comportamiento o a los procesos fisiológicos del otro.

### 93

Según el libro de Biología, según el recuadro 33-1, ¿en qué se diferencian las feromonas de otras señales?

- A. En que pueden persistir en el ambiente durante mucho tiempo
- B. En que se destruyen apenas son liberadas al ambiente
- C. En que sólo actúan por contacto directo entre dos individuos
- D. En que viajan exclusivamente por la sangre del receptor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 788
**Subtema:** Percepción sensorial · comunicación química

A diferencia de otras señales, las feromonas pueden persistir en el ambiente durante mucho tiempo.

### 94

De acuerdo con el libro de Biología, según el recuadro 33-1, ¿por qué se afirma que las feromonas son muy poderosas?

- A. Porque unas cuantas moléculas liberadas en el aire o en el agua a través de la orina, el sudor u otras secreciones corporales bastan para influir en el comportamiento de otro animal
- B. Porque cada molécula transporta la totalidad del código genético del individuo
- C. Porque son las moléculas más grandes y pesadas del organismo
- D. Porque sólo pueden ser producidas por los mamíferos de gran tamaño

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 788
**Subtema:** Percepción sensorial · comunicación química

Son muy poderosas: unas cuantas moléculas de feromonas liberadas en el aire o en el agua a través de la orina, el sudor u otras secreciones corporales bastan para influir en el comportamiento de otro animal.

### 95

En relación con el libro de Biología, según el recuadro 33-1, ¿cuál sería la función del órgano vomeronasal?

- A. Responder a los estímulos provistos por las feromonas y enviar señales a diversas zonas del cerebro
- B. Regular la temperatura del aire que ingresa por la nariz
- C. Producir las lágrimas que lubrican la superficie del ojo
- D. Amplificar las ondas sonoras que llegan al oído interno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 788
**Subtema:** Percepción sensorial · comunicación química

Un pequeño órgano del sistema nasal, el órgano vomeronasal, presente en mamíferos, reptiles y anfibios, sería el encargado de responder a los estímulos provistos por las feromonas y de enviar señales a diversas zonas del cerebro.

### 96

De acuerdo con el libro de Biología, según el recuadro 33-1, ¿qué se concluye hoy acerca del órgano vomeronasal humano?

- A. Que no se trata de un vestigio, sino de un órgano funcional
- B. Que es un órgano vestigial sin ninguna importancia fisiológica
- C. Que no existe en la especie humana
- D. Que sólo aparece durante el desarrollo embrionario y luego desaparece

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 788
**Subtema:** Percepción sensorial · comunicación química

No se trata, pues, de un vestigio, sino de un órgano funcional.

## Sub-lote 14 · El encéfalo de los vertebrados: sustancia blanca y gris, y el tronco cerebral (p. 789)

### 97

De acuerdo con el libro de Biología, ¿por qué está formada la sustancia blanca del encéfalo?

- A. Por los axones revestidos de mielina
- B. Por los somas y las dendritas de las neuronas
- C. Por los huesos del cráneo y las meninges
- D. Por el líquido cefalorraquídeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 789
**Subtema:** Percepción sensorial · el encéfalo de los vertebrados

Al igual que la médula espinal, está formado por sustancia blanca (los axones revestidos de mielina) y su sustancia gris (los somas y las dendritas de un enorme número de neuronas y las células de la glía).

### 98

En relación con el libro de Biología, ¿por qué está formada la sustancia gris del encéfalo?

- A. Por los somas y las dendritas de un enorme número de neuronas y las células de la glía
- B. Por los axones revestidos de mielina
- C. Por las tres protuberancias del tubo neural
- D. Por las meninges y el líquido cefalorraquídeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 789
**Subtema:** Percepción sensorial · el encéfalo de los vertebrados

Al igual que la médula espinal, está formado por sustancia blanca (los axones revestidos de mielina) y su sustancia gris (los somas y las dendritas de un enorme número de neuronas y las células de la glía).

### 99

Según el libro de Biología, ¿dónde puede rastrearse el origen evolutivo del encéfalo de los vertebrados?

- A. En una serie de tres protuberancias situadas en el extremo anterior del tubo neural hueco
- B. En los huesos del cráneo que protegen el encéfalo
- C. En las meninges y el líquido cefalorraquídeo
- D. En los núcleos del bulbo raquídeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 789
**Subtema:** Percepción sensorial · el encéfalo de los vertebrados

Podemos rastrear el origen evolutivo del encéfalo de los vertebrados en una serie de tres protuberancias situadas en el extremo anterior del tubo neural hueco.

### 100

De acuerdo con el libro de Biología, en peces, anfibios y reptiles, ¿qué tres regiones constituyen las tres protuberancias del tubo neural?

- A. El "cerebro posterior" o rombencéfalo, el "cerebro medio" o mesencéfalo y el "cerebro anterior" o prosencéfalo
- B. El bulbo raquídeo, la protuberancia y el cerebelo
- C. El tálamo, el hipotálamo y la glándula pineal
- D. Los lóbulos frontal, parietal y occipital

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 789
**Subtema:** Percepción sensorial · el encéfalo de los vertebrados

En peces, anfibios y reptiles, las tres protuberancias mencionadas con anterioridad conservan su disposición lineal y constituyen: el "cerebro posterior" o rombencéfalo, el "cerebro medio" o mesencéfalo y el "cerebro anterior" o prosencéfalo.

### 101

En relación con el libro de Biología, ¿por qué estructuras está formado el tronco o tallo cerebral de los vertebrados?

- A. Por el bulbo raquídeo, la protuberancia y el mesencéfalo
- B. Por el diencéfalo y el telencéfalo
- C. Por los dos hemisferios cerebrales y el cuerpo calloso
- D. Por el tálamo, el hipotálamo y la glándula pineal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 789
**Subtema:** Percepción sensorial · el tronco cerebral

En los vertebrados, el tronco o tallo cerebral está formado por el bulbo raquídeo, la protuberancia (que corresponden al rombencéfalo) y el mesencéfalo (cerebro medio).

### 102

Según el libro de Biología, ¿qué se afirma del tronco cerebral respecto de la información nerviosa?

- A. Que toda la información que entra en el cerebro o sale de él, desde la periferia o hacia ella, pasa por esta estructura
- B. Que ninguna información sensorial lo atraviesa
- C. Que sólo procesa la información olfatoria
- D. Que únicamente conduce las órdenes motoras voluntarias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 789
**Subtema:** Percepción sensorial · el tronco cerebral

Toda la información que entra en el cerebro o sale de él, desde la periferia o hacia ella, pasa por esta estructura.

## Sub-lote 15 · Bulbo, cerebelo y diencéfalo: el tálamo (p. 790)

### 103

De acuerdo con el libro de Biología, ¿qué controlan los centros nerviosos del bulbo?

- A. El latido cardíaco, la presión arterial y la respiración
- B. La visión, la audición y el equilibrio
- C. El pensamiento abstracto y el lenguaje
- D. La producción de las hormonas del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 790
**Subtema:** Percepción sensorial · el tronco cerebral

Los centros nerviosos del bulbo controlan el latido cardíaco, la presión arterial y la respiración, razón por la cual un golpe asestado en la base del cráneo puede ser fatal.

### 104

En relación con el libro de Biología, ¿cuántos pares de nervios craneales surgen de la superficie inferior del encéfalo?

- A. 13 pares
- B. 10 pares
- C. 12 pares
- D. 31 pares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 790
**Subtema:** Percepción sensorial · el tronco cerebral

De la superficie inferior del encéfalo surgen 13 pares de nervios craneales.

### 105

Según el libro de Biología, ¿cuáles son las funciones del cerebelo?

- A. Coordina el movimiento voluntario de los músculos, regula el tono muscular y realiza un ajuste fino del equilibrio corporal
- B. Controla el latido cardíaco, la presión arterial y la respiración
- C. Redirige la información sensorial a los centros correspondientes del cerebro
- D. Produce la hormona melatonina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 790
**Subtema:** Percepción sensorial · el tronco cerebral

El cerebelo (que corresponde al rombencéfalo), ubicado dorsalmente al tronco cerebral, coordina el movimiento voluntario de los músculos, regula el tono muscular y realiza un ajuste fino del equilibrio corporal.

### 106

De acuerdo con el libro de Biología, ¿en qué dos porciones se divide el prosencéfalo en el embrión?

- A. En el diencéfalo y el telencéfalo
- B. En el rombencéfalo y el mesencéfalo
- C. En el bulbo raquídeo y la protuberancia
- D. En la sustancia blanca y la sustancia gris

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 790
**Subtema:** Percepción sensorial · el diencéfalo

En el embrión, el prosencéfalo se divide en el diencéfalo y el telencéfalo.

### 107

En relación con el libro de Biología, ¿qué es el tálamo?

- A. Dos masas ovoides de materia gris que constituyen el principal centro de comunicación entre el tronco cerebral y los centros superiores del cerebro
- B. Un pequeño órgano del sistema nasal que responde a las feromonas
- C. La masa de fibras mielínicas que une los dos hemisferios cerebrales
- D. La capa más externa de los hemisferios cerebrales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 790
**Subtema:** Percepción sensorial · el diencéfalo

El tálamo, dos masas ovoides de materia gris dentro del encéfalo, constituye el principal centro de comunicación entre el tronco cerebral y los centros superiores del cerebro.

### 108

Según el libro de Biología, la información proveniente de todos los sentidos es redirigida por el tálamo a los centros del cerebro, ¿con la excepción de cuál?

- A. Con excepción del olfato
- B. Con excepción de la visión
- C. Con excepción de la audición
- D. Con excepción del tacto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 790
**Subtema:** Percepción sensorial · el diencéfalo

La información proveniente de todos los sentidos (con excepción del olfato) es redirigida por el tálamo a los centros correspondientes del cerebro.

## Sub-lote 16 · Hipotálamo, glándula pineal, telencéfalo y corteza cerebral (p. 791)

### 109

De acuerdo con el libro de Biología, ¿qué se afirma del hipotálamo a pesar de su pequeño tamaño?

- A. Que es uno de los centros de regulación homeostática más importantes del encéfalo
- B. Que es la estructura que más cambios ha experimentado en la evolución
- C. Que carece de importancia fisiológica
- D. Que produce la hormona melatonina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 791
**Subtema:** Percepción sensorial · el diencéfalo

El hipotálamo, a pesar de su pequeño tamaño, es uno de los centros de regulación homeostática más importantes del encéfalo.

### 110

En relación con el libro de Biología, ¿de la integración de qué sistemas es el hipotálamo el centro principal?

- A. De los sistemas nervioso y endocrino
- B. De los sistemas circulatorio y respiratorio
- C. De los sistemas digestivo y excretor
- D. De los sistemas muscular y esquelético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 791
**Subtema:** Percepción sensorial · el diencéfalo

Esta región del cerebro es el centro principal para la integración de los sistemas nervioso y endocrino y, al mismo tiempo, controla la expresión de los ritmos circadianos.

### 111

Según el libro de Biología, ¿qué hormona produce la glándula pineal?

- A. La melatonina
- B. La prolactina
- C. La somatotrofina
- D. La adrenalina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 791
**Subtema:** Percepción sensorial · el diencéfalo

La glándula pineal también forma parte del diencéfalo, se ubica dorsal al tálamo y produce la hormona melatonina.

### 112

De acuerdo con el libro de Biología, ¿mediante qué estructura se conectan entre sí los hemisferios cerebrales?

- A. Mediante una masa de fibras mielínicas muy compacta: el cuerpo calloso
- B. Mediante el tálamo
- C. Mediante el tronco cerebral
- D. Mediante los núcleos de la base

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 791
**Subtema:** Percepción sensorial · el telencéfalo

Los hemisferios cerebrales se conectan entre sí mediante una masa de fibras mielínicas muy compacta: el cuerpo calloso.

### 113

En relación con el libro de Biología, ¿dónde se localizan unos 10 000 millones de las células nerviosas del encéfalo humano?

- A. En la corteza cerebral o córtex
- B. En el cerebelo
- C. En el bulbo raquídeo
- D. En la médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 791
**Subtema:** Percepción sensorial · la corteza cerebral

De los aproximadamente 100 000 millones de células nerviosas que se encuentran en el encéfalo humano, unos 10 000 millones se localizan en la corteza cerebral o córtex.

### 114

Según el libro de Biología, ¿en qué cuatro lóbulos está subdividido de manera externa el córtex de cada hemisferio cerebral?

- A. Frontal, parietal, temporal y occipital
- B. Frontal, parietal, temporal y límbico
- C. Rombencéfalo, mesencéfalo, prosencéfalo y diencéfalo
- D. Central, lateral, dorsal y ventral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 791
**Subtema:** Percepción sensorial · la corteza cerebral

El córtex en cada hemisferio cerebral está subdividido de manera externa en cuatro lóbulos por dos profundas cisuras o surcos en la superficie: los lóbulos frontal, parietal, temporal y occipital.

## Sub-lote 17 · La neocorteza y el recuadro 33-2 · La neurociencia y sus métodos (p. 792)

### 115

De acuerdo con el libro de Biología, además de la arquicorteza y la paleocorteza, ¿qué tercer tipo de corteza se agrega en los mamíferos?

- A. La neocorteza
- B. La sustancia blanca
- C. El cuerpo calloso
- D. La corteza visual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 792
**Subtema:** Percepción sensorial · la corteza cerebral

En todos los vertebrados se pueden reconocer dos tipos de cortezas: la arquicorteza y la paleocorteza; en los mamíferos se agrega un tercer tipo: la neocorteza.

### 116

En relación con el libro de Biología, ¿cuál es la causa del gran tamaño de los hemisferios cerebrales de los mamíferos?

- A. El crecimiento y el desarrollo de la neocorteza
- B. El aumento del líquido cefalorraquídeo
- C. El engrosamiento de los huesos del cráneo
- D. La multiplicación de las glándulas pineales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 792
**Subtema:** Percepción sensorial · la corteza cerebral

La causa del gran tamaño de los hemisferios cerebrales de los mamíferos es precisamente el crecimiento y el desarrollo de la neocorteza, la cual desplazó a las otras cortezas hacia las regiones basales del cerebro.

### 117

Según el libro de Biología, según el recuadro 33-2, ¿qué es el electroencefalograma (EEG)?

- A. El registro de la actividad bioeléctrica en distintos puntos de la corteza cerebral, registrada sobre el cuero cabelludo
- B. La representación detallada de los tejidos blandos obtenida con rayos X
- C. El estudio del encéfalo mediante microelectrodos insertados en el cerebro
- D. La medición del latido cardíaco y la presión arterial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 792
**Subtema:** Percepción sensorial · la neurociencia y sus métodos

El electroencefalograma (EEG) es el registro de la actividad bioeléctrica en distintos puntos de la corteza cerebral, registrada sobre el cuero cabelludo (no invasivo).

### 118

De acuerdo con el libro de Biología, según el recuadro 33-2, ¿para qué es una herramienta útil la electroencefalografía?

- A. Para el estudio del sueño y sus patologías, y para el diagnóstico y el registro de enfermedades, como la epilepsia y los tumores cerebrales
- B. Para medir la cantidad de feromonas presentes en el ambiente
- C. Para regenerar las neuronas dañadas del sistema nervioso central
- D. Para producir la hormona melatonina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 792
**Subtema:** Percepción sensorial · la neurociencia y sus métodos

La electroencefalografía es una herramienta útil para el estudio del sueño y sus patologías, y para el diagnóstico y el registro de enfermedades, como la epilepsia y los tumores cerebrales.

### 119

En relación con el libro de Biología, según el recuadro 33-2, ¿qué brindan la tomografía computarizada (TC) y las imágenes por resonancia magnética (RM)?

- A. Una representación detallada de los tejidos blandos
- B. Un registro de la actividad bioeléctrica del cuero cabelludo
- C. La medición de la propiocepción y el dolor
- D. La secreción de las hormonas del hipotálamo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 792
**Subtema:** Percepción sensorial · la neurociencia y sus métodos

Al igual que la tomografía computarizada (TC), las imágenes por resonancia magnética (RM) brindan una representación detallada de los tejidos blandos.

### 120

Según el libro de Biología, según el recuadro 33-2, ¿qué son la tomografía por emisión de positrones (TEP) y la resonancia magnética funcional (RMf)?

- A. Estudios funcionales del encéfalo in vivo, que se utilizan tanto para la evaluación clínica de pacientes como para la investigación del funcionamiento cerebral
- B. Registros de la actividad bioeléctrica sobre el cuero cabelludo
- C. Técnicas para medir el latido cardíaco y la respiración
- D. Métodos para teñir la sustancia blanca y la sustancia gris

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 792
**Subtema:** Percepción sensorial · la neurociencia y sus métodos

La tomografía por emisión de positrones (TEP) y la resonancia magnética funcional (RMf) son estudios funcionales del encéfalo in vivo, que se utilizan tanto para la evaluación clínica de pacientes como para la investigación del funcionamiento cerebral.

## Sub-lote 18 · Áreas funcionales de la corteza y los homúnculos (p. 793)

### 121

De acuerdo con el libro de Biología, ¿qué función cumple la corteza motora, ubicada delante de la cisura central en el lóbulo frontal?

- A. Planifica y controla la actividad voluntaria de los músculos esqueléticos
- B. Recibe las señales táctiles y la información sobre la temperatura y el dolor
- C. Procesa las señales enviadas por las neuronas sensoriales del oído
- D. Procesa la información visual proveniente de la retina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 793
**Subtema:** Percepción sensorial · la corteza cerebral

La corteza motora, ubicada delante de la cisura central en el lóbulo frontal, planifica y controla la actividad voluntaria de los músculos esqueléticos.

### 122

En relación con el libro de Biología, ¿qué recibe la corteza somatosensorial, que forma parte del lóbulo parietal?

- A. Señales táctiles y estímulos relacionados con la propiocepción, la temperatura y el dolor
- B. Las órdenes para la actividad voluntaria de los músculos esqueléticos
- C. Las señales del oído sobre las características del sonido
- D. La información visual proveniente de la fóvea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 793
**Subtema:** Percepción sensorial · la corteza cerebral

La corteza somatosensorial, ubicada por detrás de la cisura central, forma parte del lóbulo parietal y recibe señales táctiles y estímulos relacionados con la propiocepción (percepción del propio cuerpo), la temperatura y el dolor.

### 123

Según el libro de Biología, ¿dónde se localiza la corteza auditiva y qué procesa?

- A. En el lóbulo temporal superior, y procesa señales enviadas por las neuronas sensoriales del oído que responden a diferentes características del sonido
- B. En el lóbulo occipital, y procesa la información visual de la retina
- C. En el lóbulo frontal, y controla la actividad voluntaria de los músculos
- D. En el lóbulo parietal, y recibe las señales táctiles del cuerpo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 793
**Subtema:** Percepción sensorial · la corteza cerebral

La corteza auditiva, localizada en el lóbulo temporal superior, procesa señales enviadas por las neuronas sensoriales del oído que responden a diferentes características del sonido.

### 124

De acuerdo con el libro de Biología, ¿qué lóbulo ocupa la corteza visual?

- A. El lóbulo occipital
- B. El lóbulo frontal
- C. El lóbulo parietal
- D. El lóbulo temporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 793
**Subtema:** Percepción sensorial · la corteza cerebral

La corteza visual ocupa el lóbulo occipital.

### 125

En relación con el libro de Biología, ¿por qué se denominaron "homúnculo sensorial" y "homúnculo motor" a ciertas regiones del cerebro?

- A. Porque las áreas del cuerpo se representaban sobre la corteza, superponiendo el dibujo de un humanoide con las áreas cerebrales involucradas
- B. Porque tienen forma de un pequeño oído dentro del cerebro
- C. Porque son las únicas regiones del cerebro que carecen de neuronas
- D. Porque sólo existen en el hemisferio derecho

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 793
**Subtema:** Percepción sensorial · la corteza cerebral

En un origen, estas regiones del cerebro se denominaron "homúnculo sensorial" y "homúnculo motor", debido a que las áreas del cuerpo se representaban sobre la corteza, superponiendo el dibujo de un humanoide con las áreas cerebrales involucradas.

### 126

Según el libro de Biología, ¿qué hacen las cortezas de asociación o áreas de procesamiento intrínseco?

- A. Asocian e integran diversa información motora y sensorial
- B. Controlan exclusivamente el latido cardíaco y la respiración
- C. Producen las hormonas del sistema endocrino
- D. Conducen los impulsos desde la médula espinal hacia los músculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 793
**Subtema:** Percepción sensorial · la corteza cerebral

Las denominadas cortezas de asociación o áreas de procesamiento intrínseco (véase fig. 33-11c) asocian e integran diversa información motora y sensorial.

## Sub-lote 19 · Lateralización de los hemisferios y la formación reticular (p. 794)

### 127

De acuerdo con el libro de Biología, ¿qué significa que los hemisferios cerebrales sean funcionalmente diferentes?

- A. Que existe una lateralización funcional
- B. Que uno de ellos carece por completo de neuronas
- C. Que ambos controlan el mismo lado del cuerpo
- D. Que ninguno de los dos interviene en el lenguaje

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 794
**Subtema:** Percepción sensorial · lateralización de los hemisferios

Los hemisferios cerebrales son funcionalmente diferentes, es decir, existe una lateralización funcional.

### 128

En relación con el libro de Biología, ¿en qué se especializa el hemisferio izquierdo?

- A. En los procesos de pensamiento lógico y analítico secuenciales, en especial en las funciones verbales (lenguaje) y matemáticas
- B. En el pensamiento sintético y en las relaciones visuales y espaciales
- C. En el reconocimiento de rostros y de temas musicales
- D. En la construcción de la imagen corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 794
**Subtema:** Percepción sensorial · lateralización de los hemisferios

Hemisferio izquierdo: se especializa en los procesos de pensamiento lógico y analítico secuenciales, es decir, en descomponer las cosas en sus partes integrantes, en especial en las funciones verbales (lenguaje) y matemáticas; procesa la información de un componente a la vez.

### 129

Según el libro de Biología, ¿en qué se especializa el hemisferio derecho?

- A. En el pensamiento sintético y en las relaciones visuales y espaciales, la identificación de objetos por su forma, las actividades artísticas y el reconocimiento de rostros
- B. En el pensamiento lógico y analítico secuencial
- C. En las funciones verbales (lenguaje) y matemáticas
- D. En descomponer las cosas en sus partes integrantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 794
**Subtema:** Percepción sensorial · lateralización de los hemisferios

Hemisferio derecho: se especializa en el pensamiento sintético y en las relaciones visuales y espaciales, es decir, en unir componentes diferentes y formar un todo (en particular, en tareas espaciales), en la identificación de objetos por su forma, en las actividades artísticas, en el reconocimiento de temas musicales, en la construcción de la imagen corporal y en el reconocimiento de rostros.

### 130

De acuerdo con el libro de Biología, ¿por qué es necesario el cuerpo calloso?

- A. Para que ambos hemisferios funcionen en forma cooperativa
- B. Para producir la hormona melatonina
- C. Para filtrar la información entrante irrelevante
- D. Para conducir el sonido hasta el oído interno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 794
**Subtema:** Percepción sensorial · lateralización de los hemisferios

El cuerpo calloso es necesario para que ambos hemisferios funcionen en forma cooperativa.

### 131

En relación con el libro de Biología, ¿con qué se relaciona la formación reticular?

- A. Con el estado de alerta y de conciencia
- B. Con la producción de las hormonas sexuales
- C. Con la contracción de los músculos esqueléticos
- D. Con la transducción del sonido en la cóclea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 794
**Subtema:** Percepción sensorial · redes integradoras del encéfalo

Un conjunto de estas redes, la formación reticular, se relaciona con el estado de alerta y de conciencia.

### 132

Según el libro de Biología, ¿qué hace la red laxa de neuronas de la formación reticular con la información entrante?

- A. La filtra y diferencia la importante de la irrelevante
- B. La convierte en hormonas del sistema endocrino
- C. La bloquea por completo durante la vigilia
- D. La envía únicamente al epitelio olfatorio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 794
**Subtema:** Percepción sensorial · redes integradoras del encéfalo

Esta red laxa de neuronas filtra la información entrante y diferencia la importante de la irrelevante.

## Sub-lote 20 · Memoria, almacenamiento y procesamiento de la información (p. 795)

### 133

De acuerdo con el libro de Biología, ¿qué es la memoria?

- A. La habilidad para almacenar y recuperar información sobre experiencias pasadas, propias o ajenas
- B. La conversión de la energía de un estímulo en un impulso nervioso
- C. La capacidad de los músculos esqueléticos para contraerse ante una orden
- D. La pérdida de respuesta de un receptor ante una estimulación constante

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · memoria y procesamiento de la información

La memoria, más específicamente, es la habilidad para almacenar y recuperar información sobre experiencias pasadas, propias o ajenas, y se consolida en dos etapas.

### 134

En relación con el libro de Biología, ¿qué caracteriza a la memoria de corto plazo?

- A. Se establece de forma inmediata luego de adquirir la información, y dura entre segundos y minutos
- B. Es de carácter estable en el tiempo y requiere un proceso de consolidación
- C. Sólo almacena la memoria motora, como andar en bicicleta
- D. Depende exclusivamente de la amígdala

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · memoria y procesamiento de la información

La memoria de corto plazo es la que se establece de forma inmediata luego de adquirir la información, y dura entre segundos y minutos.

### 135

Según el libro de Biología, ¿cómo se establece la memoria de largo plazo?

- A. Luego de un proceso de consolidación, y es de carácter estable en el tiempo
- B. De forma inmediata, y dura entre segundos y minutos
- C. Sólo mediante la repetición de un estímulo neutro
- D. Por la descarga de las neuronas sensoriales de la branquia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · memoria y procesamiento de la información

Luego de un proceso de consolidación se establece una memoria de largo plazo, de carácter estable en el tiempo.

### 136

De acuerdo con el libro de Biología, ¿qué estructura, una corteza del lóbulo temporal, es crucial en el proceso de consolidación de la memoria de largo plazo?

- A. El hipocampo
- B. El cerebelo
- C. El bulbo raquídeo
- D. La glándula pineal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · memoria y procesamiento de la información

La información se transfiere a la memoria de largo plazo mediante un proceso de consolidación, en el cual una corteza del lóbulo temporal, el hipocampo, es crucial.

### 137

En relación con el libro de Biología, ¿cómo se clasifican las memorias según su contenido?

- A. En declarativas o explícitas y de procedimiento o implícitas
- B. En retrógradas y anterógradas
- C. En asociativas y no asociativas
- D. En habituación y sensibilización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · memoria y procesamiento de la información

En cuanto al contenido, las memorias se pueden clasificar en declarativas o explícitas (el recuerdo de hechos que pueden ser narrados) o de procedimiento o implícitas (memoria motora, el recuerdo de cómo andar en bicicleta).

### 138

Según el libro de Biología, ¿cómo puede definirse el aprendizaje?

- A. En términos de los cambios relativamente permanentes debidos a la experiencia pasada
- B. Como la habilidad para almacenar y recuperar información
- C. Como la contracción coordinada de los músculos esqueléticos
- D. Como la pérdida de respuesta ante un estímulo constante

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · aprendizaje

El aprendizaje puede definirse en términos de los cambios relativamente permanentes debidos a la experiencia pasada, así, la memoria es una parte crucial del proceso de aprendizaje, ya que sin ella las experiencias se "perderían".

### 139

De acuerdo con el libro de Biología, ¿qué es la amígdala?

- A. Un importante centro de convergencia de la información sensorial y regulador de los estados emocionales
- B. La corteza del lóbulo temporal crucial en la consolidación de la memoria
- C. La masa de fibras mielínicas que une los dos hemisferios cerebrales
- D. El órgano del sistema nasal que responde a las feromonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 795
**Subtema:** Percepción sensorial · memoria y procesamiento de la información

Entre otras estructuras, se destacan la amígdala, un importante centro de convergencia de la información sensorial y regulador de los estados emocionales, y el hipotálamo, que procesa y transmite las sensaciones de hambre, sed y deseo.

## Sub-lote 21 · Plasticidad neuronal y el aprendizaje en Aplysia (p. 797)

### 140

Según el libro de Biología, ¿cómo se conocen los cambios en las conexiones y los circuitos entre las neuronas?

- A. Como procesos de plasticidad neuronal
- B. Como procesos de habituación
- C. Como reflejos condicionados
- D. Como memoria de corto plazo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · plasticidad neuronal

Estos cambios en las conexiones y los circuitos entre las neuronas se conocen como procesos de plasticidad neuronal.

### 141

En relación con el libro de Biología, ¿qué incluyen principalmente los procesos de plasticidad neuronal?

- A. Modificaciones en la comunicación entre las neuronas que fortalecen o debilitan ciertas conexiones sinápticas
- B. El aumento del número de huesos que protegen el encéfalo
- C. La producción de melatonina por la glándula pineal
- D. La contracción de los filamentos de actina y miosina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · plasticidad neuronal

Estos procesos incluyen, principalmente, modificaciones en la comunicación entre las neuronas que fortalecen o debilitan ciertas conexiones sinápticas, como aquellas vinculadas con los mecanismos que subyacen a la memoria y el aprendizaje.

### 142

De acuerdo con el libro de Biología, ¿qué invertebrado, estudiado por el fisiólogo Eric Kandel, arrojó nueva luz sobre la memoria?

- A. La babosa de mar Aplysia
- B. La mosca Drosophila
- C. El calamar gigante
- D. El caracol de jardín

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

Un invertebrado que arrojó nueva luz sobre la memoria es la babosa de mar Aplysia. El fisiólogo austríaco-estadounidense Eric Kandel y sus colaboradores en los Estados Unidos estudiaron el reflejo de retracción branquial en Aplysia.

### 143

En relación con el libro de Biología, ¿qué hace la babosa Aplysia cuando se toca con suavidad su región ventral?

- A. Rápidamente retrae su sifón y sus delicadas branquias en una reacción protectora
- B. Libera feromonas al agua para atraer a otros individuos
- C. Aumenta la producción de melatonina
- D. Deja de responder de inmediato desde el primer contacto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

Cuando se toca con suavidad su región ventral, este molusco rápidamente retrae su sifón y sus delicadas branquias en una reacción protectora.

## Sub-lote 22 · Los tipos de aprendizaje (p. 797)

### 144

Según el libro de Biología, ¿de qué tipo de aprendizaje son ejemplos la habituación y la sensibilización?

- A. Del aprendizaje no asociativo
- B. Del aprendizaje asociativo
- C. Del aprendizaje social
- D. Del aprendizaje imitativo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

La habituación y la sensibilización son dos ejemplos del aprendizaje no asociativo, en el que la respuesta comportamental es consecuencia de la respuesta a un solo tipo de estímulo.

### 145

De acuerdo con el libro de Biología, ¿qué es la habituación?

- A. Una forma simple de aprendizaje, en la cual un estímulo neutro se repite muchas veces y provoca cada vez menos respuesta
- B. El aprendizaje de la relación de un estímulo con otro
- C. La adquisición de un comportamiento al observar a otro individuo
- D. La habilidad para almacenar y recuperar información pasada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

La habituación es una forma simple de aprendizaje, en la cual un estímulo neutro se repite muchas veces. Sin embargo, a medida que se repite, este estímulo provoca cada vez menos respuesta. Luego de un tiempo, el sujeto se ha habituado al estímulo y lo ignora.

### 146

En relación con el libro de Biología, ¿qué ocurre en el aprendizaje asociativo?

- A. El organismo aprende acerca de la relación de un estímulo con otro o de un estímulo con una respuesta
- B. El organismo deja de responder a un estímulo neutro que se repite
- C. El organismo adquiere un comportamiento al imitar a otro
- D. El organismo almacena la información de forma inmediata durante segundos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

En el aprendizaje asociativo, el organismo aprende acerca de la relación de un estímulo con otro o de un estímulo con una respuesta (asocia dos sucesos).

### 147

Según el libro de Biología, ¿cómo se denominó el tipo de aprendizaje asociativo que describió Iván Pavlov, en 1927, con perros que asociaron el sonido de una campana con el alimento?

- A. Condicionamiento clásico
- B. Habituación
- C. Aprendizaje imitativo
- D. Sensibilización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

A este tipo de aprendizaje asociativo se lo denominó condicionamiento clásico.

### 148

De acuerdo con el libro de Biología, ¿cuándo se denomina aprendizaje social?

- A. Cuando la presencia de un individuo puede influir de manera significativa en el conocimiento adquirido por otro individuo
- B. Cuando un estímulo neutro se repite muchas veces hasta ignorarlo
- C. Cuando el organismo asocia el sonido de una campana con el alimento
- D. Cuando se pierde la capacidad de establecer nuevas memorias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

Se denomina aprendizaje social cuando la presencia de un individuo puede influir de manera significativa en el conocimiento adquirido por otro individuo.

### 149

En relación con el libro de Biología, ¿cuándo ocurre el aprendizaje imitativo o imitación?

- A. Cuando un comportamiento novedoso es adquirido por un individuo luego de observar a otro realizar ese comportamiento
- B. Cuando un estímulo se repite hasta provocar cada vez menos respuesta
- C. Cuando dos estímulos se asocian entre sí
- D. Cuando la información se transfiere a la memoria de largo plazo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

Una de las formas más complejas de aprendizaje social es la imitación o aprendizaje imitativo. Este aprendizaje ocurre cuando un comportamiento novedoso es adquirido por un individuo luego de observar a otro realizar ese comportamiento.

### 150

Según el libro de Biología, ¿en qué participan las neuronas espejo de las cortezas frontal y parietal de los primates?

- A. En la comprensión de las conductas de los demás, el aprendizaje por imitación y el procesamiento del lenguaje
- B. En la producción de las hormonas del sistema endocrino
- C. En la transducción del sonido en el oído interno
- D. En la contracción de los músculos esqueléticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 797
**Subtema:** Percepción sensorial · aprendizaje

En los primates –incluidos los humanos– se ha encontrado que las neuronas espejo de las cortezas frontal y parietal participan directamente en la comprensión de las conductas de los demás, intervienen en el aprendizaje por imitación y en el procesamiento del lenguaje.

## Sub-lote 23 · Regeneración del sistema nervioso y el mecanismo de la habituación y la sensibilización (p. 799)

### 151

De acuerdo con el libro de Biología, ¿qué efectos puede tener una lesión o enfermedad en el sistema nervioso?

- A. Efectos devastadores al limitar enormemente, distorsionar o aun impedir la percepción sensorial, la respuesta motora o el desempeño cognitivo
- B. Un aumento inmediato de la capacidad regenerativa de todas las neuronas
- C. La producción excesiva de feromonas
- D. La sustitución de la sustancia gris por sustancia blanca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 799
**Subtema:** Percepción sensorial · regeneración del sistema nervioso

Una lesión o enfermedad en el sistema nervioso puede tener efectos devastadores al limitar enormemente, distorsionar o aun impedir la percepción sensorial, la respuesta motora o el desempeño cognitivo.

### 152

En relación con el libro de Biología, ¿qué axones mantienen cierta capacidad regenerativa?

- A. Los del sistema nervioso periférico
- B. Los del encéfalo humano adulto
- C. Los de la médula espinal
- D. Los de la corteza cerebral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 799
**Subtema:** Percepción sensorial · regeneración del sistema nervioso

Estos daños no siempre son irreversibles, ya que, en ocasiones, los axones, en especial los del sistema nervioso periférico, mantienen cierta capacidad regenerativa.

### 153

Según el libro de Biología, ¿por qué las lesiones cerebrales o en la médula espinal, por lo general, son irreversibles?

- A. Porque las células nerviosas maduras no se regeneran y el proceso de regeneración prácticamente no ocurre en el sistema nervioso central
- B. Porque el sistema nervioso central regenera sus neuronas con demasiada rapidez
- C. Porque los axones periféricos invaden el cerebro
- D. Porque las neuronas maduras se dividen sin control

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 799
**Subtema:** Percepción sensorial · regeneración del sistema nervioso

Las células nerviosas maduras no se regeneran, de modo que el proceso de regeneración prácticamente no ocurre en el sistema nervioso central, razón por la cual las lesiones cerebrales o en la médula espinal, por lo general, son irreversibles.

### 154

De acuerdo con el libro de Biología, ¿qué ocurre con la babosa si se la toca en forma repetida?

- A. Se habitúa al estímulo y deja de retraerse ante nuevos toques
- B. Se vuelve cada vez más sensible al estímulo
- C. Libera feromonas al agua
- D. Pierde por completo sus branquias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 799
**Subtema:** Percepción sensorial · aprendizaje

Si se la toca en forma repetida, la babosa se habitúa al estímulo y deja de retraerse ante nuevos toques.

### 155

En relación con el libro de Biología, ¿con qué está asociada la habituación?

- A. Con una disminución gradual en la cantidad de neurotransmisor liberado por las neuronas sensoriales que se estimulan de forma repetida
- B. Con un incremento gradual en la cantidad de neurotransmisor liberado
- C. Con la destrucción de las neuronas motoras de la branquia
- D. Con la producción de melatonina en la sinapsis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 799
**Subtema:** Percepción sensorial · aprendizaje

La habituación, que se considera una forma muy simple de aprendizaje, está asociada con una disminución gradual en la cantidad de neurotransmisor liberado por las neuronas sensoriales que se estimulan de forma repetida.

### 156

Según el libro de Biología, ¿qué es la sensibilización en la sinapsis?

- A. Un fenómeno que tiene un efecto opuesto al de la habituación y en el cual existe un incremento gradual en la cantidad de neurotransmisor liberado por las neuronas sensoriales
- B. Una disminución gradual en la cantidad de neurotransmisor liberado
- C. La pérdida definitiva de la capacidad de respuesta de la branquia
- D. La transferencia de la información a la memoria de largo plazo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 799
**Subtema:** Percepción sensorial · aprendizaje

En la sinapsis, esto se denomina sensibilización, un fenómeno que tiene un efecto opuesto al de la habituación y en el cual existe un incremento gradual en la cantidad de neurotransmisor liberado por las neuronas sensoriales.

## Sub-lote 24 · La respuesta a la información: la contracción muscular (p. 800)

### 157

De acuerdo con el libro de Biología, ¿qué proporcionan los sistemas sensoriales?

- A. Una representación interna del mundo exterior y de la situación del cuerpo en el espacio
- B. La energía química necesaria para la contracción muscular
- C. Las hormonas del sistema endocrino
- D. La regeneración de las neuronas dañadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

Los sistemas sensoriales proporcionan una representación interna del mundo exterior y de la situación del cuerpo en el espacio.

### 158

En relación con el libro de Biología, ¿de qué depende la respuesta comportamental de un organismo a la información sensorial?

- A. Del músculo esquelético, el efector del sistema nervioso somático
- B. De la glándula pineal, el efector del sistema endocrino
- C. Del epitelio olfatorio, el efector del sistema sensorial
- D. Del hipocampo, el efector de la memoria

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

La respuesta comportamental de un organismo a la información sensorial depende del músculo esquelético, el efector del sistema nervioso somático.

### 159

Según el libro de Biología, ¿de qué sistema son efectores los músculos cardíaco y liso?

- A. Del sistema nervioso autónomo
- B. Del sistema nervioso somático
- C. Del sistema endocrino
- D. Del sistema límbico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

Gran parte de las respuestas emocionales y muchos otros ajustes en el ambiente interno también dependen de músculos como el cardíaco y el liso, dos de los efectores del sistema nervioso autónomo.

### 160

De acuerdo con el libro de Biología, ¿en cuántas grandes clases pueden dividirse los movimientos?

- A. En tres grandes clases
- B. En dos grandes clases
- C. En cuatro grandes clases
- D. En cinco grandes clases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

Los movimientos pueden dividirse en tres grandes clases, que se superponen y pueden distinguirse tanto por su complejidad como por el grado del control que el organismo ejerce sobre ellos.

### 161

En relación con el libro de Biología, ¿cómo son las respuestas reflejas, como el reflejo de retirada de un miembro frente a un estímulo doloroso?

- A. Innatas e involuntarias
- B. Aprendidas y voluntarias
- C. Rítmicas y repetitivas
- D. Dirigidas hacia un objetivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

Respuestas reflejas, innatas e involuntarias, como el reflejo de retirada de un miembro frente a un estímulo doloroso.

### 162

Según el libro de Biología, ¿qué son ejemplos de patrones motores rítmicos?

- A. Caminar o masticar
- B. El reflejo de retirada de un miembro
- C. Resolver un problema matemático
- D. El latido del corazón y la respiración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

Patrones motores rítmicos, como caminar o masticar, que combinan tanto características de los actos reflejos como de acciones voluntarias.

### 163

De acuerdo con el libro de Biología, ¿qué caracteriza a los movimientos voluntarios?

- A. Representan el mayor grado de complejidad, tienen un propósito, están dirigidos hacia un objetivo y pueden ser aprendidos
- B. Son innatos e involuntarios
- C. Son rítmicos, como caminar o masticar
- D. No requieren ningún control por parte del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 800
**Subtema:** Percepción sensorial · respuesta motora

Movimientos voluntarios, que representan el mayor grado de complejidad. Estos movimientos tienen un propósito, están dirigidos hacia un objetivo y pueden ser aprendidos.

---

**Pendiente:** el capítulo 33 está **EN CURSO** (ver la sección "Cobertura actual").
Las tandas cubren pp. 778–800: introducción, receptores, sistema visual, audición y
equilibrio, sentidos químicos y somatosensorial, el procesamiento de la información,
los sabores y el epitelio olfatorio, el recuadro 33-1 (comunicación química), el
encéfalo de los vertebrados, el recuadro 33-2 (la neurociencia y sus métodos), las
áreas funcionales de la corteza, los homúnculos, las cortezas de asociación, la
lateralización de los hemisferios, la memoria y el procesamiento de la información, el
aprendizaje (plasticidad neuronal, Aplysia, habituación y sensibilización,
condicionamiento clásico, aprendizaje social e imitativo, neuronas espejo), la
regeneración del sistema nervioso y la respuesta motora (los sistemas sensoriales, los
efectores muscular esquelético/cardíaco/liso y las tres clases de movimientos). Falta
desde la p. 801: la estructura del músculo esquelético y el mecanismo de la contracción
muscular (el sarcómero, la actina y la miosina, las líneas Z y los puentes cruzados,
pp. 802–810), hasta antes del ensayo de cierre "Retomando la problemática inicial" y
los ejercicios. Las páginas de ENSAYO (recuadros 33-x y "Biología en contexto social")
quedan fuera por no ser recuerdo literal. **El capítulo 33 termina en la p. 810; el
capítulo 34 (El sistema endocrino) empieza en la p. 811** (hoja 857, verificado de la
hoja). Lo pide **sólo la EMO**. Los capítulos 14, 15 y 37 son de otras sesiones.

**Reactivos en este archivo:** 163
