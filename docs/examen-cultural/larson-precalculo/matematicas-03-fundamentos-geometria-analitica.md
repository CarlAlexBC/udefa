# Matemáticas · Capítulo 3 · Fundamentos de geometría analítica

**Plantel:** Escuela Militar de Especialistas de Fuerza Aérea (EMEFA) · **Materia:** `MATE-03-2026`
**Aplica a:** Controlador de Vuelo (Lic. en Aeronáutica Mil.) y Meteorólogo (Lic. en Meteorología Mil.) — los dos temarios piden exactamente lo mismo de este libro.

> El reactivo pertenece al **libro** (`larson-precalculo`), no al plantel: cualquier temario que llame a este capítulo de Larson lo reutiliza.

## Libro

Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, **primera edición**.

**Edición verificada** contra la página legal (hoja 3 del PDF); el detalle está en el archivo del capítulo 1 (`matematicas-01-fundamentos-algebra.md`), que es donde se hizo la verificación.

## Alcance del temario

De este capítulo el temario `MATE-03-2026` pide **COMPLETO**: las seis secciones, §3.1 a §3.6, páginas impresas **271 a 328**. Es el único de los tres capítulos que se pide entero.

| Sección | Páginas impresas | Teoría | Ejercicios |
|---|---|---|---|
| 3.1 Coordenadas rectangulares | 272–280 | 272–277 | 278–280 |
| 3.2 Ecuaciones lineales con dos variables | 281–293 | 281–289 | 290–293 |
| 3.3 Rectas | 294–300 | 294–297 | 298–300 |
| 3.4 Introducción a las cónicas: parábolas | 301–309 | 301–305 | 306–309 |
| 3.5 Elipses | 310–318 | 310–315 | 316–318 |
| 3.6 Hipérbolas | 319–328 | 319–325 | 326–328 |

La **p. 271 es la portadilla del capítulo** (sólo título y créditos de las fotografías): no lleva reactivos. El libro **termina en la p. 328**, en pleno §3.6; el apéndice sólo existe en línea.

Los otros dos capítulos que pide el temario van en sus propios archivos, los dos ya cerrados: el **1** (`matematicas-01-fundamentos-algebra.md`, 284 reactivos) y el **2** (`matematicas-02-fundamentos-trigonometria.md`, 82 reactivos).

## Método y desfase

El PDF **trae capa de texto y la prosa sale limpia**, pero **las matemáticas se aplanan al extraerlas** y en varios párrafos **los signos y los operadores desaparecen**. En un capítulo de geometría analítica —lleno de fórmulas de distancia, ecuaciones de cónicas y desigualdades— eso es especialmente peligroso, así que la regla se aplica sin excepción: **la prosa se toma del extractor y toda fórmula, signo, coordenada o desigualdad se lee de la hoja renderizada** (`render.py`).

**Desfase:** **hoja del PDF = página impresa + 9**, el mismo de los capítulos 1 y 2.

## Criterio de este capítulo

Recuerdo literal (Anexo "H"): la correcta y la justificación son cita del libro. Se caza el **dato olvidable** —la condición exacta, el nombre de cada elemento de una cónica, qué eje mide cada coordenada—, no lo obvio. Los mejores distractores salen del mismo recuadro. La correcta se escribe siempre en **A**; el importador baraja.

**Teoría sí, ejercicios no**: entran los recuadros de definiciones y de propiedades y la prosa que las explica. **No llevan reactivos** los bloques `EJEMPLO`, `Punto de repaso`, `Ejercicios`, `¿Cómo lo ve?`, `Proyecto`, `TECNOLOGÍA`, el `Resumen` de cada sección ni los pies de foto que remiten a un ejercicio.

**El dato olvidable tiene que ser DEL TEMA** (regla de Carlo, 14 ago 2026): quedan fuera las notas de lengua, los consejos de estudio y los comentarios sobre el propio libro, aunque sean cita textual. Los `COMENTARIO` entran **sólo si traen matemáticas** —y sólo si lo que dicen es correcto: en el capítulo 2 hubo uno con matemáticas que quedó fuera por estar mal. Detalle en `docs/examen-cultural/README.md`.

## Erratas del libro — no se escriben reactivos sobre ellas

_(Sin hallazgos todavía en este capítulo. Los del capítulo 1 y del capítulo 2 están en sus propios archivos.)_

## Cobertura actual

**EN CURSO.** Escritas las páginas impresas **272 y 273** de la **§3.1 · Coordenadas rectangulares**: el plano cartesiano y a quién honra su nombre, cómo se forma y sus elementos (ejes, origen y cuadrantes), las coordenadas de un punto y qué distancia representa cada una, la doble lectura de la notación (x, y) y la importancia de la aportación de Descartes. Los `EJEMPLO 1` y `EJEMPLO 2` (gráficas de dispersión de suscriptores de telefonía celular) y el `TECNOLOGÍA` no llevan reactivos.

**Pendiente:** EN CURSO. Sigue desde la página impresa **274** hasta cerrar la **§3.1** en la **p. 277**. Después faltan las otras cinco secciones, todas en este mismo archivo: **§3.2** (p. 281), **§3.3** (p. 294), **§3.4** (p. 301), **§3.5** (p. 310) y **§3.6** (p. 319). **Matemáticas (Larson) no está cerrada** mientras este capítulo siga abierto: es el último de los tres que pide el temario.

---

## Sub-lote 1 · El plano cartesiano (§3.1, pp. 272–273)

### 1

De acuerdo con el libro de Matemáticas, ¿en honor a quién se llama plano cartesiano al sistema de coordenadas rectangulares?

- A. Del matemático francés René Descartes (1596-1650)
- B. Del matemático francés René Descartes (1650-1716)
- C. Del matemático inglés René Descartes (1596-1650)
- D. Del matemático francés Pierre de Fermat (1601-1665)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · plano cartesiano

Un plano llamado sistema de coordenadas rectangulares, o plano cartesiano, nombrado así en honor al matemático francés René Descartes (1596-1650).

---

### 2

De conformidad con el libro de Matemáticas, ¿cómo se forma el plano cartesiano?

- A. Por dos rectas numéricas que se intersecan en ángulos rectos
- B. Por dos rectas numéricas paralelas entre sí
- C. Por tres rectas numéricas que se cortan en un punto
- D. Por una recta numérica y una circunferencia

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · plano cartesiano

El plano cartesiano se forma por dos rectas numéricas que se intersecan en ángulos rectos.

---

### 3

En relación con el libro de Matemáticas, ¿cómo se llaman la recta horizontal y la recta vertical del plano cartesiano?

- A. La horizontal es el eje x y la vertical es el eje y
- B. La horizontal es el eje y y la vertical es el eje x
- C. Las dos se llaman ejes de coordenadas, sin distinción
- D. La horizontal es el eje de abscisas y la vertical es el eje polar

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · ejes

La recta horizontal recibe el nombre de eje x, y la vertical se denomina eje y.

---

### 4

De acuerdo con el libro de Matemáticas, ¿cómo se llama el punto de intersección de los dos ejes y en cuántas partes dividen el plano?

- A. Se llama origen, y lo dividen en cuatro partes llamadas cuadrantes
- B. Se llama vértice, y lo dividen en cuatro partes llamadas cuadrantes
- C. Se llama origen, y lo dividen en dos partes llamadas semiplanos
- D. Se llama centro, y lo dividen en ocho partes llamadas octantes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · origen y cuadrantes

El punto de intersección de estos dos ejes es el origen y dividen el plano en cuatro partes llamadas cuadrantes.

---

### 5

De conformidad con el libro de Matemáticas, ¿a qué corresponde cada punto del plano?

- A. A un par ordenado de números reales x y y, llamados coordenadas del punto
- B. A un solo número real, llamado coordenada del punto
- C. A un par ordenado de números enteros, llamados índices del punto
- D. A una terna de números reales, llamados coordenadas del punto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · coordenadas

Cada punto del plano corresponde a un par ordenado de números reales x y y, llamados coordenadas del punto.

---

### 6

En relación con el libro de Matemáticas, ¿qué representa la coordenada x de un punto?

- A. La distancia dirigida desde el eje y al punto
- B. La distancia dirigida desde el eje x al punto
- C. La distancia desde el origen al punto
- D. La distancia dirigida desde el punto al origen

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · coordenadas

La coordenada x representa la distancia dirigida desde el eje y al punto.

---

### 7

De acuerdo con el libro de Matemáticas, ¿qué representa la coordenada y de un punto?

- A. La distancia dirigida desde el eje x al punto
- B. La distancia dirigida desde el eje y al punto
- C. La distancia desde el origen al punto
- D. La distancia dirigida desde el punto al eje y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · coordenadas

La coordenada y representa la distancia dirigida desde el eje x al punto.

---

### 8

De conformidad con el libro de Matemáticas, ¿qué dos cosas puede denotar la notación (x, y)?

- A. Un punto en el plano y un intervalo abierto en la recta numérica real
- B. Un punto en el plano y un intervalo cerrado en la recta numérica real
- C. Un par de coordenadas y un cociente de dos números
- D. Un punto en el plano y un vector con origen en el punto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 272
**Subtema:** coordenadas rectangulares · notación

La notación (x, y) denota un punto en el plano y un intervalo abierto en la recta numérica real. El contexto indicará cuál es el significado que se busca.

---

### 9

En relación con el libro de Matemáticas, ¿dónde se usan hoy en día las ideas de Descartes sobre las coordenadas en el plano?

- A. En prácticamente todos los campos científicos y los relacionados con negocios
- B. Únicamente en la geometría y el álgebra
- C. Únicamente en la astronomía y la navegación
- D. Sólo en los campos científicos, no en los relacionados con negocios

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 273
**Subtema:** coordenadas rectangulares · aportación de Descartes

Hoy en día, sus ideas se usan con frecuencia en, prácticamente, todos los campos científicos y los relacionados con negocios.

---
