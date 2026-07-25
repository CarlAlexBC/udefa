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

**EN CURSO.** Primera tanda: la introducción al capítulo (pp. 778–779) —la
definición de sensación y percepción, la organización jerárquica del sistema
nervioso, la adaptación sensorial, la transducción y la codificación de la
información sensorial—.

**Pendiente:** el capítulo 33 está **EN CURSO**. Sigue desde la página impresa
**780** en adelante: los tipos de receptores sensoriales (mecanorreceptores,
quimiorreceptores, termorreceptores, fotorreceptores, etc.), los sistemas
sensoriales (tacto, gusto, olfato, audición, equilibrio y visión), el procesamiento
en los centros nerviosos superiores y la respuesta motora, hasta antes del ensayo de
cierre "Retomando la problemática inicial" y los ejercicios. Este capítulo lo pide
**sólo la EMO**; mientras no se cierre, este archivo sostiene su propio pendiente.
**Recordatorio de coordinación:** los capítulos 14, 15 y 37 son de otras sesiones.

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

---

**Pendiente:** el capítulo 33 está **EN CURSO** (ver la sección "Cobertura actual").
Esta primera tanda cubre la introducción, pp. 778–779. Falta desde la p. 780: los
tipos de receptores, los sistemas sensoriales (tacto, gusto, olfato, audición,
equilibrio y visión), el procesamiento superior y la respuesta motora. Lo pide
**sólo la EMO**. Los capítulos 14, 15 y 37 son de otras sesiones.

**Reactivos en este archivo:** 15
