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

**EN CURSO.** Cubiertas las pp. 778–783: la definición de sensación y percepción,
la organización jerárquica del sistema nervioso, la adaptación sensorial, la
transducción y la codificación de la información sensorial (tanda 1); los cinco
tipos de receptores, las vías nerviosas, el sistema visual, los sistemas sensoriales
y la anatomía del ojo humano de la figura 33-2 (tanda 2); y el cuadro 33-1 de
modalidades sensoriales, la visión estereoscópica y el procesamiento en la retina
(conos y bastones) (tanda 3).

**Pendiente:** el capítulo 33 está **EN CURSO**. Sigue desde la página impresa
**784** en adelante: las estructuras accesorias del ojo y la formación de la imagen,
la fototransducción, los demás sistemas sensoriales (audición y equilibrio, gusto y
olfato, tacto), el procesamiento en los centros nerviosos superiores y la respuesta
motora, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los
ejercicios. Este capítulo lo pide **sólo la EMO**; mientras no se cierre, este
archivo sostiene su propio pendiente. **Recordatorio de coordinación:** los
capítulos 14, 15 y 37 son de otras sesiones.

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

---

**Pendiente:** el capítulo 33 está **EN CURSO** (ver la sección "Cobertura actual").
Las tandas cubren pp. 778–783: introducción, tipos de receptores, sistema visual,
anatomía del ojo, el cuadro 33-1 de modalidades sensoriales y el procesamiento en la
retina (conos y bastones). Falta desde la p. 784: las estructuras accesorias del ojo
y la formación de la imagen, la fototransducción, los demás sistemas sensoriales
(audición y equilibrio, gusto y olfato, tacto), el procesamiento en los centros
nerviosos superiores y la respuesta motora, hasta antes del ensayo de cierre
"Retomando la problemática inicial" y los ejercicios. Lo pide **sólo la EMO**. Los
capítulos 14, 15 y 37 son de otras sesiones.

**Reactivos en este archivo:** 46
