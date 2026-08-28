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

- **p. 274, párrafo bajo el Teorema de Pitágoras: dice "vertical" dos veces.** El libro imprime "La longitud del **lado vertical** del triángulo es la distancia d entre los dos puntos. La longitud del **lado vertical** del triángulo es |y₂ − y₁|". La primera debería referirse a la **hipotenusa** (es la que mide d, como muestra la figura 3.5); el lado vertical es el que mide |y₂ − y₁|, que es lo que dice la segunda. El reactivo 12 pregunta sólo por los lados vertical y horizontal, que la segunda frase da bien.
- **p. 275, nota al pie del recuadro del punto medio:** escribe "**Ápendice** A.4" (acento en la primera A) en lugar de *Apéndice*. Es sólo una remisión al propio libro, que queda fuera por norma.

- **p. 286, recuadro *Rectas paralelas y perpendiculares*: el texto se contradice con su propia fórmula.** El libro imprime "sus pendientes son **recíprocas no negativas** entre sí", pero enseguida escribe **m₁ = −1/m₂**, que es la recíproca **negativa** —lo correcto—, y el `EJEMPLO 4` de esa misma página lo confirma al decir "porque 3/2 es el **recíproco negativo** de 2/3". El "no" sobra. **Verificado con recorte de la hoja renderizada.** El reactivo 37 pregunta por la **fórmula**, que sí es correcta, y su justificación cita la frase ya sin el "no".
- **p. 286, frase de entrada del apartado:** imprime "Se puede llamar pendiente si dos rectas no verticales en un plano son paralelas, perpendiculares o ninguna", que no cierra; debería decir algo como "se puede **usar la pendiente para decidir** si…". No lleva reactivo.

- **p. 301, párrafo bajo la figura 3.30: la condición de la cónica degenerada está invertida.** El libro imprime "en la formación de las cuatro cónicas básicas el plano de intersección **no pasa** por el vértice del cono. Cuando el plano **no pasa** por el vértice, la figura resultante es una **cónica degenerada**". Repite "no pasa" las dos veces, cuando lo correcto (y lo que muestra la propia figura 3.31, con el plano cruzando justo por el vértice) es que la degenerada ocurre cuando el plano **sí pasa** por el vértice. **Verificado con recorte de la hoja renderizada a 600 dpi.** No se escribe reactivo sobre esta condición; sí se preguntan, por separado, los nombres de las cuatro cónicas básicas y de las tres degeneradas, que la figura da bien.

_(Los defectos del capítulo 1 y del capítulo 2 están documentados en sus propios archivos.)_

## Cobertura actual

**CERRADO.** El capítulo 3 está **completo, en 113 reactivos**, con sus seis secciones §3.1 a §3.6.

La **§3.1 · Coordenadas rectangulares está CERRADA** (pp. 272–277):

- Cubiertas las páginas impresas **272 y 273**: el plano cartesiano y a quién honra su nombre, cómo se forma y sus elementos (ejes, origen y cuadrantes), las coordenadas de un punto y qué distancia representa cada una, la doble lectura de la notación (x, y) y la importancia de la aportación de Descartes. Los `EJEMPLO 1` y `EJEMPLO 2` (gráficas de dispersión de telefonía celular) y el `TECNOLOGÍA` no llevan reactivos.
- Cubiertas las páginas impresas **274 a 277**, con las que **cierra la §3.1**: el recuadro *Teorema de Pitágoras* con su recíproco, las longitudes de los lados del triángulo auxiliar, la *Fórmula de la distancia*, la *Fórmula del punto medio* y cómo se obtiene, la libertad de colocar el sistema de coordenadas en las aplicaciones, y las **transformaciones** (la traslación y los otros tres tipos). Los `EJEMPLO 3` a `EJEMPLO 8` no llevan reactivos, ni el `Resumen (sección 3.1)`. Las **pp. 278–280 son el bloque `3.1 Ejercicios`**.

- Cubiertas las páginas impresas **281, 282 y 283**, arranque de la **§3.2 · Ecuaciones lineales con dos variables**: el modelo `y = mx + b` y por qué se llama lineal, la *forma pendiente-intersección* y qué son m y (0, b), qué es la pendiente de una recta no vertical, la recta vertical `x = a` y por qué su pendiente no está definida, lo que implican una pendiente cero y una negativa, la **elevación** y el **corrimiento**, el recuadro *Pendiente de una recta que pasa por dos puntos* con su condición x₁ ≠ x₂, y la importancia del **orden de sustracción**. Los `EJEMPLO 1` y `EJEMPLO 2` no llevan reactivos.

- Cubiertas las páginas impresas **284, 285 y 286**: el `COMENTARIO` que relaciona el signo de la pendiente con la orientación de la recta, la *forma punto-pendiente* y para qué es más útil, el `COMENTARIO` de que da igual cuál de los dos puntos se sustituya, y el recuadro *Rectas paralelas y perpendiculares* (pendientes iguales, y la fórmula m₁ = −1/m₂). Los `EJEMPLO 3` y `EJEMPLO 4` y el `TECNOLOGÍA` no llevan reactivos.
- Cubiertas las páginas impresas **287, 288 y 289**, con las que **cierra la §3.2**: la pendiente como razón o tasa según las unidades de los ejes, la depreciación lineal y el valor en libros, la extrapolación y la interpolación lineal, la forma general Ax + By + C = 0, y el recuadro *Resumen de ecuaciones de rectas* con sus seis formas. Los `EJEMPLO 5` a `EJEMPLO 8` y el `Resumen (sección 3.2)` no llevan reactivos. Las **pp. 290–293 son el bloque `3.2 Ejercicios`**.

- Cubiertas las páginas impresas **294, 295 y 296**, arranque de la **§3.3 · Rectas** (Sub-lote 6): la **inclinación** de una recta no horizontal (definición, los casos horizontal/vertical, la relación m = tan θ y cómo se obtiene θ según el signo de m), el **ángulo entre dos rectas** (los dos pares de ángulos opuestos que forma una intersección no perpendicular, cuál de ellos es "el" ángulo, y la fórmula tan θ = |(m₂ − m₁)/(1 + m₁m₂)|), y el arranque de la **distancia de un punto a una recta** (que es una aplicación de rectas perpendiculares, y la fórmula d = |Ax₁ + By₁ + C| / √(A² + B²)).
- Revisada la página impresa **297, con la que cierra la §3.3**: sólo trae el `EJEMPLO 5` y el `Resumen (sección 3.3)`, ninguno de los dos con reactivo. **La §3.3 queda CERRADA** sin reactivos nuevos en esta página.
- Cubiertas las páginas impresas **301, 302 y 304**, con las que **cierra la §3.4 · Introducción a las cónicas: parábolas** (Sub-lote 7): la definición de **sección cónica** (intersección de un plano y un cono de doble hoja), los nombres de las **cuatro cónicas básicas** y de las **tres cónicas degeneradas** (figuras 3.30 y 3.31), la ecuación general de segundo grado y la ecuación de un círculo, el recuadro *Definición de una parábola* (directriz, foco, vértice, eje), el recuadro *Ecuación estándar de una parábola* (las dos formas con su directriz, y el caso con vértice en el origen), y la **propiedad de reflexión de la parábola**: cuerda focal, *latus rectum*, el principio del reflector parabólico, la definición de recta tangente y el recuadro *Propiedad de reflexión de una parábola*. Las pp. **303 y 305 son sólo `EJEMPLO`s, `TECNOLOGÍA`, `AYUDA ALGEBRAICA` y el `Resumen (sección 3.4)`**, sin reactivos; las **pp. 306–309 son el bloque `3.4 Ejercicios`**.
- Cubiertas las páginas impresas **310, 311, 314 y 315**, con las que **cierra la §3.5 · Elipses** (Sub-lote 8): el recuadro *Definición de elipse* (focos, suma de distancias constante), los vértices, el eje mayor y el eje menor, la suma constante (a + c) + (a − c) = 2a con base en la figura 3.37, el `COMENTARIO` de que cuando a = b la elipse se vuelve un círculo, el recuadro *Ecuación estándar de una elipse* (las dos orientaciones, la ubicación de los focos con c² = a² − b², y el caso con centro en el origen), la aplicación (engranajes, arcos de soporte, diseños acústicos, órbitas), y la sección *Excentricidad*: por qué era difícil detectarla en los planetas antiguos, el recuadro *Definición de excentricidad* (e = c/a, 0 < e < 1), qué significa que la razón c/a se acerque a 0 o a 1, y las excentricidades de la Luna y de los ocho planetas. Las pp. **312 y 313 son sólo `EJEMPLO`s** (1 a 4), sin reactivos; las **pp. 316–318 son el bloque `3.5 Ejercicios`**.
- Cubiertas las páginas impresas **319, 320, 321, 323, 324 y 325**, con las que **cierra la §3.6 · Hipérbolas y con ella el capítulo 3 completo** (Sub-lote 9): la comparación de la definición de hipérbola con la de la elipse, el recuadro *Definición de hipérbola*, las ramas, el eje transversal y el centro, la relación entre a, b y c (distinta a la de la elipse), el recuadro *Ecuación estándar de una hipérbola* (vértices y focos, c² = a² + b², y el eje conjugado), las asíntotas (cuántas son, el rectángulo por el que pasan, y el recuadro con sus ecuaciones), la *excentricidad* de la hipérbola (e = c/a, e > 1, y qué forma toman las ramas), la aplicación en radares durante la Segunda Guerra Mundial, las órbitas de los cometas (elípticas, parabólicas e hiperbólicas, y cuáles permanecen en el Sistema Solar), el criterio de velocidad v vs. √(2GM/p), el recuadro *Clasificación de una cónica a partir de su ecuación general* (círculo, parábola, elipse e hipérbola con las condiciones A = C, AC = 0, AC > 0 y AC < 0) con su nota de validez, y la `NOTA HISTÓRICA` de **Caroline Herschel**. La p. **322 es sólo `EJEMPLO 3` y `TECNOLOGÍA`**, sin reactivos; las **pp. 326–328 son el bloque `3.6 Ejercicios`**, con las que termina el libro.

**Pendiente:** ninguno. El **capítulo 3 está CERRADO** en **113 reactivos**, con sus seis secciones completas (§3.1 a §3.6, pp. 271–328), tal como lo pide el temario `MATE-03-2026`. Con este capítulo **se cierra Matemáticas (Larson) completa para la EMEFA**: los capítulos 1 (284 reactivos), 2 (82 reactivos) y 3 (113 reactivos) están los tres CERRADOS.

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

## Sub-lote 2 · Distancia, punto medio y traslaciones — cierra la §3.1 (pp. 274–277)

### 10

De acuerdo con el libro de Matemáticas, ¿qué establece el Teorema de Pitágoras?

- A. Que para un triángulo rectángulo con hipotenusa de longitud c y lados de longitudes a y b, se cumple a² + b² = c²
- B. Que para un triángulo rectángulo con hipotenusa de longitud a y lados b y c, se cumple a² + b² = c²
- C. Que para cualquier triángulo con lados a, b y c, se cumple a² + b² = c²
- D. Que para un triángulo rectángulo con hipotenusa c, se cumple a + b = c

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 274
**Subtema:** coordenadas rectangulares · teorema de Pitágoras

Para un triángulo rectángulo con hipotenusa de longitud c y lados de longitudes a y b, tenemos que a² + b² = c².

---

### 11

De conformidad con el libro de Matemáticas, además de la relación entre los lados, ¿qué significa el Teorema de Pitágoras?

- A. Que si a² + b² = c², entonces el triángulo es rectángulo
- B. Que si a² + b² = c², entonces el triángulo es equilátero
- C. Que si a + b = c, entonces el triángulo es rectángulo
- D. Que si a² + b² > c², entonces el triángulo es rectángulo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 274
**Subtema:** coordenadas rectangulares · teorema de Pitágoras

(Lo que significa que, si a² + b² = c², entonces el triángulo es rectángulo.)

---

### 12

En relación con el libro de Matemáticas, en el triángulo rectángulo que se forma con los puntos (x₁, y₁) y (x₂, y₂), ¿cuáles son las longitudes de los lados vertical y horizontal?

- A. El vertical mide |y₂ − y₁| y el horizontal mide |x₂ − x₁|
- B. El vertical mide |x₂ − x₁| y el horizontal mide |y₂ − y₁|
- C. Los dos miden |x₂ − x₁|
- D. El vertical mide y₂ + y₁ y el horizontal mide x₂ + x₁

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 274
**Subtema:** coordenadas rectangulares · fórmula de la distancia

La longitud del lado vertical del triángulo es |y₂ − y₁|, y la longitud del lado horizontal es |x₂ − x₁|.

---

### 13

De acuerdo con el libro de Matemáticas, ¿cuál es la fórmula de la distancia entre los puntos (x₁, y₁) y (x₂, y₂) en el plano?

- A. d = √((x₂ − x₁)² + (y₂ − y₁)²)
- B. d = √((x₂ − x₁)² − (y₂ − y₁)²)
- C. d = (x₂ − x₁)² + (y₂ − y₁)²
- D. d = √((x₂ + x₁)² + (y₂ + y₁)²)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 274
**Subtema:** coordenadas rectangulares · fórmula de la distancia

La distancia d entre los puntos (x₁, y₁) y (x₂, y₂) en el plano es: d = √((x₂ − x₁)² + (y₂ − y₁)²).

---

### 14

De conformidad con el libro de Matemáticas, ¿cómo se encuentra el punto medio del segmento de recta que une dos puntos?

- A. Obteniendo los valores promedio de las respectivas coordenadas de los dos puntos de extremo
- B. Restando las respectivas coordenadas de los dos puntos de extremo
- C. Multiplicando las respectivas coordenadas de los dos puntos de extremo
- D. Sumando las respectivas coordenadas de los dos puntos de extremo, sin dividirlas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 275
**Subtema:** coordenadas rectangulares · punto medio

Para encontrar el punto medio del segmento de recta que une dos puntos en un plano de coordenadas, se obtienen los valores promedio de las respectivas coordenadas de los dos puntos de extremo, usando la fórmula del punto medio.

---

### 15

En relación con el libro de Matemáticas, ¿cuál es la fórmula del punto medio?

- A. Punto medio = ((x₁ + x₂)/2, (y₁ + y₂)/2)
- B. Punto medio = ((x₂ − x₁)/2, (y₂ − y₁)/2)
- C. Punto medio = ((x₁ + y₁)/2, (x₂ + y₂)/2)
- D. Punto medio = ((x₁ + x₂), (y₁ + y₂))

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 275
**Subtema:** coordenadas rectangulares · punto medio

El punto medio del segmento de recta que une los puntos (x₁, y₁) y (x₂, y₂) está dado por la fórmula del punto medio: Punto medio = ((x₁ + x₂)/2, (y₁ + y₂)/2).

---

### 16

De acuerdo con el libro de Matemáticas, al usar geometría de coordenadas para resolver problemas de la vida real, ¿qué libertad se tiene?

- A. La de poner el sistema de coordenadas en cualquier forma que sea cómoda para la resolución
- B. La de cambiar las unidades de medida a mitad del problema
- C. La de omitir una de las dos coordenadas
- D. La de trazar los ejes sin que se corten en ángulo recto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 276
**Subtema:** coordenadas rectangulares · aplicaciones

Cuando se usa geometría de coordenadas para resolver problemas de la vida real, tenemos libertad de poner el sistema de coordenadas en cualquier forma que sea cómoda para su resolución.

---

### 17

De conformidad con el libro de Matemáticas, ¿cómo se llama el tipo de transformación que consiste en desplazar una figura en el plano de coordenadas?

- A. Traslación
- B. Reflexión
- C. Rotación
- D. Estiramiento

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 277
**Subtema:** coordenadas rectangulares · transformaciones

El ejemplo 8 ilustra un tipo de transformación llamada traslación.

---

### 18

En relación con el libro de Matemáticas, además de la traslación, ¿qué otros tipos de transformación de puntos en un plano de coordenadas menciona el libro?

- A. Reflexiones, rotaciones y estiramientos
- B. Reflexiones, rotaciones y contracciones
- C. Rotaciones, proyecciones y simetrías
- D. Reflexiones, inversiones y dilataciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 277
**Subtema:** coordenadas rectangulares · transformaciones

Otros tipos incluyen reflexiones, rotaciones y estiramientos.

---

## Sub-lote 3 · Pendiente y forma pendiente-intersección (§3.2, pp. 281–283)

### 19

De acuerdo con el libro de Matemáticas, ¿cuál es el modelo matemático más sencillo para relacionar dos variables?

- A. La ecuación lineal con dos variables y = mx + b
- B. La ecuación cuadrática con dos variables y = ax² + bx + c
- C. La ecuación racional con dos variables y = a/x
- D. La ecuación exponencial con dos variables y = aˣ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · modelo lineal

El modelo matemático más sencillo para relacionar dos variables, es la ecuación lineal con dos variables y = mx + b.

---

### 20

De conformidad con el libro de Matemáticas, ¿por qué se llama lineal a esa ecuación?

- A. Porque su gráfica es una recta
- B. Porque sus dos variables son de primer grado
- C. Porque sus coeficientes son enteros
- D. Porque pasa siempre por el origen

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · modelo lineal

La ecuación se llama lineal porque su gráfica es una recta.

---

### 21

En relación con el libro de Matemáticas, en matemáticas, ¿qué quiere decir el término línea?

- A. Línea recta
- B. Cualquier trazo continuo
- C. Línea curva
- D. Segmento de longitud finita

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · modelo lineal

(En matemáticas, el término línea quiere decir línea recta.)

---

### 22

De acuerdo con el libro de Matemáticas, en la ecuación y = mx + b, ¿cuál es la intersección con el eje y y cuál es la pendiente?

- A. La intersección con el eje y es (0, b) y la pendiente es m
- B. La intersección con el eje y es (0, m) y la pendiente es b
- C. La intersección con el eje y es (b, 0) y la pendiente es m
- D. La intersección con el eje y es (0, b) y la pendiente es b

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · forma pendiente-intersección

La gráfica de la ecuación y = mx + b es una recta cuya pendiente es m y cuya intersección con el eje y es (0, b).

---

### 23

De conformidad con el libro de Matemáticas, ¿qué es la pendiente de una recta no vertical?

- A. El número de unidades que la recta sube o baja verticalmente por cada unidad de cambio horizontal, de izquierda a derecha
- B. El número de unidades que la recta avanza horizontalmente por cada unidad de cambio vertical
- C. La distancia del origen al punto donde la recta corta el eje y
- D. El ángulo que la recta forma con el eje y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · pendiente

La pendiente de una recta no vertical es el número de unidades que la recta sube (o baja) verticalmente por cada unidad de cambio horizontal de izquierda a derecha.

---

### 24

En relación con el libro de Matemáticas, ¿cómo se llama la forma y = mx + b de una ecuación lineal?

- A. Forma pendiente-intersección
- B. Forma general
- C. Forma punto-pendiente
- D. Forma estándar

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · forma pendiente-intersección

Una ecuación lineal en la forma y = mx + b, está escrita en forma pendiente-intersección.

---

### 25

De acuerdo con el libro de Matemáticas, ¿qué forma tiene la ecuación de una recta vertical y por qué no puede escribirse como y = mx + b?

- A. Tiene la forma x = a, y no puede escribirse así porque su pendiente no está definida
- B. Tiene la forma y = a, y no puede escribirse así porque su pendiente es cero
- C. Tiene la forma x = a, y no puede escribirse así porque su pendiente es cero
- D. Tiene la forma x = my, y no puede escribirse así porque no corta el eje y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 281
**Subtema:** ecuaciones lineales · recta vertical

Una recta vertical tiene una ecuación de la forma x = a. La ecuación de una recta vertical no se puede escribir en la forma y = mx + b, porque su pendiente no está definida.

---

### 26

De conformidad con el libro de Matemáticas, ¿qué implica una pendiente igual a cero?

- A. Que la recta es horizontal, es decir, no sube ni baja
- B. Que la recta es vertical
- C. Que la recta pasa por el origen
- D. Que la recta no corta el eje y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 282
**Subtema:** ecuaciones lineales · pendiente

Una pendiente cero implica que la recta es horizontal, es decir, no sube ni baja.

---

### 27

En relación con el libro de Matemáticas, ¿qué ocurre con la recta cuando m es negativa?

- A. Que la recta baja
- B. Que la recta sube
- C. Que la recta se vuelve horizontal
- D. Que la recta se vuelve vertical

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 282
**Subtema:** ecuaciones lineales · pendiente

Cuando m es negativa, la recta baja.

---

### 28

De acuerdo con el libro de Matemáticas, ¿cómo se llaman el cambio en y y el cambio en x al calcular la pendiente?

- A. El cambio en y es la elevación y el cambio en x es el corrimiento
- B. El cambio en y es el corrimiento y el cambio en x es la elevación
- C. Los dos se llaman desplazamiento
- D. El cambio en y es la altura y el cambio en x es la base

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 283
**Subtema:** ecuaciones lineales · elevación y corrimiento

y₂ − y₁ = cambio en y = elevación, y x₂ − x₁ = cambio en x = corrimiento.

---

### 29

De conformidad con el libro de Matemáticas, ¿cuál es la pendiente m de la recta no vertical que pasa por (x₁, y₁) y (x₂, y₂), y qué condición debe cumplirse?

- A. m = (y₂ − y₁)/(x₂ − x₁), donde x₁ ≠ x₂
- B. m = (x₂ − x₁)/(y₂ − y₁), donde y₁ ≠ y₂
- C. m = (y₂ + y₁)/(x₂ + x₁), donde x₁ ≠ x₂
- D. m = (y₂ − y₁)/(x₂ − x₁), donde y₁ ≠ y₂

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 283
**Subtema:** ecuaciones lineales · pendiente entre dos puntos

La pendiente m de la recta no vertical que pasa por (x₁, y₁) y (x₂, y₂) es m = (y₂ − y₁)/(x₂ − x₁), donde x₁ ≠ x₂.

---

### 30

En relación con el libro de Matemáticas, al usar la fórmula de la pendiente, ¿qué resulta importante?

- A. El orden de sustracción: el numerador y el denominador deben formarse usando el mismo orden
- B. El orden de sustracción: el numerador y el denominador deben formarse en orden contrario
- C. Que el punto marcado como (x₁, y₁) sea siempre el de la izquierda
- D. Que las dos coordenadas sean positivas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 283
**Subtema:** ecuaciones lineales · pendiente entre dos puntos

Cuando esta fórmula se usa para la pendiente, el orden de sustracción es importante. Una vez hecho esto, se debe formar el numerador y el denominador usando el mismo orden de sustracción.

---

## Sub-lote 4 · Punto-pendiente, rectas paralelas y perpendiculares (§3.2, pp. 284–286)

### 31
De acuerdo con el libro de Matemáticas, ¿qué indica una pendiente positiva?
- A. Que la recta sube de izquierda a derecha
- B. Que la recta baja de izquierda a derecha
- C. Que la recta es horizontal
- D. Que la recta es vertical

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 284
**Subtema:** ecuaciones lineales · pendiente y orientación

Pendiente positiva: la recta sube de izquierda a derecha.

---

### 32
De conformidad con el libro de Matemáticas, ¿qué indica una pendiente no definida?
- A. Que la recta es vertical
- B. Que la recta es horizontal
- C. Que la recta sube de izquierda a derecha
- D. Que la recta baja de izquierda a derecha

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 284
**Subtema:** ecuaciones lineales · pendiente y orientación

Pendiente no definida: la recta es vertical.

---

### 33

En relación con el libro de Matemáticas, ¿cuál es la forma punto-pendiente de la ecuación de una recta?

- A. y − y₁ = m(x − x₁)
- B. y + y₁ = m(x + x₁)
- C. y − y₁ = m(x + x₁)
- D. x − x₁ = m(y − y₁)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 285
**Subtema:** ecuaciones lineales · forma punto-pendiente

La ecuación de la recta con pendiente m que pasa por el punto (x₁, y₁) es: y − y₁ = m(x − x₁).

---

### 34

De acuerdo con el libro de Matemáticas, ¿para qué es más útil la forma punto-pendiente?

- A. Para determinar la ecuación de una recta
- B. Para determinar la pendiente de una recta ya conocida
- C. Para hallar la intersección con el eje y
- D. Para comprobar si dos rectas son paralelas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 285
**Subtema:** ecuaciones lineales · forma punto-pendiente

La forma punto-pendiente es más útil para determinar la ecuación de una recta.

---

### 35
De conformidad con el libro de Matemáticas, al hallar la ecuación de la recta que pasa por dos puntos, ¿cuál de ellos debe sustituirse en la forma punto-pendiente?
- A. Cualquiera de los dos, porque ambos darán el mismo resultado
- B. Siempre el de menor coordenada x
- C. Siempre el de mayor coordenada y
- D. Los dos a la vez, uno en cada miembro

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 285
**Subtema:** ecuaciones lineales · forma punto-pendiente

Sólo necesita sustituir las coordenadas de uno de los puntos en la forma punto-pendiente. No importa cuál punto se escoja porque ambos darán el mismo resultado.

---

### 36

En relación con el libro de Matemáticas, ¿cuándo son paralelas dos rectas no verticales?

- A. Si y sólo si sus pendientes son iguales, es decir, m₁ = m₂
- B. Si y sólo si sus pendientes son opuestas, es decir, m₁ = −m₂
- C. Si y sólo si el producto de sus pendientes es 1
- D. Si y sólo si una de sus pendientes es cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 286
**Subtema:** ecuaciones lineales · rectas paralelas

Dos rectas no verticales son paralelas si y sólo si sus pendientes son iguales. Esto es, m₁ = m₂.

---

### 37

De acuerdo con el libro de Matemáticas, ¿qué relación guardan las pendientes de dos rectas no verticales perpendiculares?

- A. m₁ = −1/m₂
- B. m₁ = 1/m₂
- C. m₁ = m₂
- D. m₁ = −m₂

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 286
**Subtema:** ecuaciones lineales · rectas perpendiculares

Dos rectas no verticales son perpendiculares si y sólo si sus pendientes son recíprocas negativas entre sí. Esto es, m₁ = −1/m₂.

---

## Sub-lote 5 · Pendiente como tasa, depreciación y formas de la recta — cierra la §3.2 (pp. 287–289)

### 38

De conformidad con el libro de Matemáticas, en problemas de la vida real, ¿cómo se puede interpretar la pendiente de una recta?

- A. Como una razón o una tasa
- B. Como una distancia
- C. Como un área
- D. Como un promedio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 287
**Subtema:** ecuaciones lineales · pendiente como razón o tasa

En problemas de la vida real, la pendiente de una recta se puede interpretar como una razón o tasa.

---

### 39

En relación con el libro de Matemáticas, si el eje x y el eje y tienen la misma unidad de medida, ¿qué ocurre con la pendiente?

- A. Que no tiene unidades y es una razón
- B. Que no tiene unidades y es una tasa
- C. Que hereda la unidad del eje x
- D. Que hereda la unidad del eje y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 287
**Subtema:** ecuaciones lineales · pendiente como razón o tasa

Si el eje x y el eje y tienen la misma unidad de medida, entonces la pendiente no tiene unidades y es una razón.

---

### 40

De acuerdo con el libro de Matemáticas, si el eje x y el eje y tienen diferentes unidades de medida, ¿qué es la pendiente?

- A. Una tasa o razón de cambio
- B. Una razón sin unidades
- C. Una constante de proporcionalidad
- D. Una distancia dirigida

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 287
**Subtema:** ecuaciones lineales · pendiente como razón o tasa

Si el eje x y el eje y tienen diferentes unidades de medida, entonces la pendiente es una tasa o razón de cambio.

---

### 41

De conformidad con el libro de Matemáticas, ¿cómo se llama el procedimiento en el que se deprecia la misma cantidad cada año?

- A. Depreciación lineal o en línea recta
- B. Depreciación acumulada
- C. Depreciación proporcional
- D. Depreciación por valor recuperado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 288
**Subtema:** ecuaciones lineales · depreciación lineal

Si la misma cantidad se deprecia cada año, el procedimiento recibe el nombre de depreciación lineal o en línea recta.

---

### 42

En relación con el libro de Matemáticas, ¿qué es el valor en libros?

- A. La diferencia entre el valor original y la cantidad total de depreciación acumulada a la fecha
- B. La suma del valor original y la depreciación acumulada a la fecha
- C. El valor original dividido entre los años de vida útil
- D. El valor recuperado al término de la vida útil

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 288
**Subtema:** ecuaciones lineales · depreciación lineal

El valor en libros es la diferencia entre el valor original y la cantidad total de depreciación acumulada a la fecha.

---

### 43

De acuerdo con el libro de Matemáticas, ¿cómo se denomina el método de predicción en el que el punto estimado no se sitúa entre los puntos dados?

- A. Extrapolación lineal
- B. Interpolación lineal
- C. Depreciación lineal
- D. Regresión lineal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 289
**Subtema:** ecuaciones lineales · extrapolación e interpolación

El método de predicción ilustrado en el ejemplo 8 se denomina extrapolación lineal. Un punto extrapolado no se sitúa entre los puntos dados.

---

### 44

De conformidad con el libro de Matemáticas, ¿cómo se denomina el procedimiento cuando el punto estimado sí se sitúa entre dos puntos dados?

- A. Interpolación lineal
- B. Extrapolación lineal
- C. Aproximación lineal
- D. Proyección lineal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 289
**Subtema:** ecuaciones lineales · extrapolación e interpolación

Cuando el punto estimado se sitúa entre dos puntos dados, el procedimiento se denomina interpolación lineal.

---

### 45

En relación con el libro de Matemáticas, ¿cuál es la forma general de la ecuación de una recta y qué condición debe cumplirse?

- A. Ax + By + C = 0, donde A y B no son ambos cero
- B. Ax + By + C = 0, donde C no es cero
- C. Ax + By = C, donde A y B no son ambos cero
- D. Ax + By + C = 0, donde A, B y C son todos distintos de cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 289
**Subtema:** ecuaciones lineales · forma general

Cada recta tiene una ecuación que se puede escribir en la forma general Ax + By + C = 0, donde A y B no son ambos cero.

---

### 46

De acuerdo con el libro de Matemáticas, según el *Resumen de ecuaciones de rectas*, ¿cuál es la forma dos puntos?

- A. y − y₁ = ((y₂ − y₁)/(x₂ − x₁))(x − x₁)
- B. y − y₁ = ((x₂ − x₁)/(y₂ − y₁))(x − x₁)
- C. y − y₁ = ((y₂ − y₁)/(x₂ − x₁))(x + x₁)
- D. y + y₁ = ((y₂ − y₁)/(x₂ − x₁))(x − x₁)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 289
**Subtema:** ecuaciones lineales · formas de la ecuación de una recta

6. Forma dos puntos: y − y₁ = ((y₂ − y₁)/(x₂ − x₁))(x − x₁).

---

## Sub-lote 6 · Inclinación, ángulo entre rectas y distancia punto-recta (pp. 294–296)

### 47

De acuerdo con el libro de Matemáticas, ¿qué es la inclinación de una recta no horizontal?

- A. El ángulo positivo θ (menor que π) medido en sentido contrahorario del eje x a la recta
- B. El ángulo positivo θ (menor que π/2) medido en sentido horario del eje x a la recta
- C. El ángulo que forma la recta con el eje y
- D. El ángulo agudo entre la recta y el origen

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 294
**Subtema:** rectas · inclinación

La inclinación de una recta no horizontal es el ángulo positivo θ (menor que π) medido en sentido contrahorario del eje x a la recta.

---

### 48

De conformidad con el libro de Matemáticas, ¿cuál es la inclinación de una recta horizontal y cuál la de una recta vertical?

- A. θ = 0 para la horizontal y θ = π/2 para la vertical
- B. θ = π/2 para la horizontal y θ = 0 para la vertical
- C. θ = 0 para las dos
- D. θ = π para la horizontal y θ = π/2 para la vertical

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 294
**Subtema:** rectas · inclinación

Recta horizontal: θ = 0. Recta vertical: θ = π/2.

---

### 49

En relación con el libro de Matemáticas, si una recta no vertical tiene inclinación θ y pendiente m, ¿qué relación se cumple?

- A. m = tan θ
- B. m = sen θ
- C. θ = tan m
- D. m = cos θ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 294
**Subtema:** rectas · inclinación y pendiente

Si una recta no vertical tiene inclinación θ y pendiente m, entonces m = tan θ.

---

### 50

De acuerdo con el libro de Matemáticas, si m ≥ 0, ¿cómo se obtiene θ y por qué?

- A. θ = arctan m, porque 0 ≤ θ < π/2
- B. θ = π + arctan m, porque π/2 < θ < π
- C. θ = arctan m, porque π/2 < θ < π
- D. θ = −arctan m, porque 0 ≤ θ < π/2

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 294
**Subtema:** rectas · inclinación y pendiente

Si m ≥ 0, entonces θ = arctan m porque 0 ≤ θ < π/2.

---

### 51

De conformidad con el libro de Matemáticas, si m < 0, ¿cómo se obtiene θ y por qué?

- A. θ = π + arctan m, porque π/2 < θ < π
- B. θ = arctan m, porque 0 ≤ θ < π/2
- C. θ = π − arctan m, porque π/2 < θ < π
- D. θ = −π + arctan m, porque π/2 < θ < π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 294
**Subtema:** rectas · inclinación y pendiente

Si m < 0, entonces θ = π + arctan m, porque π/2 < θ < π.

---

### 52

En relación con el libro de Matemáticas, cuando dos rectas distintas no perpendiculares se intersecan, ¿qué forma su intersección?

- A. Dos pares de ángulos opuestos
- B. Un solo par de ángulos opuestos
- C. Cuatro ángulos iguales
- D. Tres pares de ángulos opuestos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 295
**Subtema:** rectas · ángulo entre dos rectas

Cuando dos rectas distintas intersecan y son no perpendiculares, su intersección forma dos pares de ángulos opuestos.

---

### 53

De acuerdo con el libro de Matemáticas, de esos dos pares de ángulos, ¿cómo son entre sí?

- A. Un par es agudo y el otro par es obtuso
- B. Los dos pares son agudos
- C. Los dos pares son obtusos
- D. Un par es recto y el otro agudo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 295
**Subtema:** rectas · ángulo entre dos rectas

Un par es agudo y el otro par es obtuso.

---

### 54

De conformidad con el libro de Matemáticas, ¿cuál de esos ángulos es el ángulo entre dos rectas?

- A. El menor de éstos
- B. El mayor de éstos
- C. El promedio de los dos
- D. El ángulo recto más cercano

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 295
**Subtema:** rectas · ángulo entre dos rectas

El menor de éstos es el ángulo entre dos rectas.

---

### 55

En relación con el libro de Matemáticas, si dos rectas no perpendiculares tienen pendientes m₁ y m₂, ¿cuál es la tangente del ángulo entre ellas?

- A. tan θ = |(m₂ − m₁)/(1 + m₁m₂)|
- B. tan θ = |(m₁ − m₂)/(1 − m₁m₂)|
- C. tan θ = (m₂ − m₁)/(1 + m₁m₂)
- D. tan θ = |(m₂ + m₁)/(1 + m₁m₂)|

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 295
**Subtema:** rectas · ángulo entre dos rectas

Si dos rectas no perpendiculares tienen pendientes m₁ y m₂, la tangente del ángulo entre las dos rectas es tan θ = |(m₂ − m₁)/(1 + m₁m₂)|.

---

### 56

De acuerdo con el libro de Matemáticas, ¿de qué es una aplicación determinar la distancia entre una recta y un punto que no está en la recta?

- A. De rectas perpendiculares
- B. De rectas paralelas
- C. Del ángulo entre dos rectas
- D. De la forma punto-pendiente

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 296
**Subtema:** rectas · distancia de un punto a una recta

Determinar la distancia entre una recta y un punto, que no está en la recta, es una aplicación de rectas perpendiculares.

---

### 57

De conformidad con el libro de Matemáticas, ¿cuál es la distancia entre el punto (x₁, y₁) y la recta Ax + By + C = 0?

- A. d = |Ax₁ + By₁ + C| / √(A² + B²)
- B. d = |Ax₁ + By₁ + C| / (A² + B²)
- C. d = (Ax₁ + By₁ + C) / √(A² + B²)
- D. d = |Ax₁ + By₁ − C| / √(A² + B²)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 296
**Subtema:** rectas · distancia de un punto a una recta

La distancia entre el punto (x₁, y₁) y la recta Ax + By + C = 0 es d = |Ax₁ + By₁ + C| / √(A² + B²).

---

## Sub-lote 7 · Cónicas, definición de parábola y propiedad de reflexión — cierra la §3.4 (pp. 301, 302, 304)

### 58

De acuerdo con el libro de Matemáticas, ¿qué es una sección cónica?

- A. La intersección de un plano y un cono de doble hoja
- B. La intersección de dos planos perpendiculares
- C. La intersección de un plano y una esfera
- D. La intersección de dos conos de doble hoja

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 301
**Subtema:** cónicas · sección cónica

Una sección cónica (o simplemente cónica) es la intersección de un plano y un cono de doble hoja.

---

### 59

De conformidad con el libro de Matemáticas, según la figura 3.30, ¿cuáles son las cuatro cónicas básicas?

- A. Círculo, elipse, parábola e hipérbola
- B. Círculo, elipse, parábola y recta
- C. Punto, recta, parábola e hipérbola
- D. Círculo, punto, elipse y parábola

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 301
**Subtema:** cónicas · cónicas básicas

La figura 3.30 muestra las cónicas básicas: círculo, elipse, parábola e hipérbola.

---

### 60

En relación con el libro de Matemáticas, según la figura 3.31, ¿cuáles son las cónicas degeneradas?

- A. Punto, recta y dos rectas intersecantes
- B. Punto, círculo y recta
- C. Recta, elipse y dos rectas paralelas
- D. Punto, parábola y dos rectas intersecantes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 301
**Subtema:** cónicas · cónicas degeneradas

La figura 3.31 muestra las cónicas degeneradas: punto, recta y dos rectas intersecantes.

---

### 61

De acuerdo con el libro de Matemáticas, ¿cuál es la ecuación general de segundo grado en términos de la cual pueden definirse las cónicas algebraicamente?

- A. Ax² + Bxy + Cy² + Dx + Ey + F = 0
- B. Ax² + By² + C = 0
- C. Ax² + Bxy + Cy² = 0
- D. Ax + By + C = 0

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 301
**Subtema:** cónicas · ecuación general de segundo grado

Podría definirlas algebraicamente, en términos de la ecuación general de segundo grado Ax² + Bxy + Cy² + Dx + Ey + F = 0.

---

### 62

De conformidad con el libro de Matemáticas, ¿cuál es la ecuación de un círculo con centro (h, k) y radio r?

- A. (x − h)² + (y − k)² = r²
- B. (x − h)² + (y − k)² = r
- C. (x + h)² + (y + k)² = r²
- D. (x − h) + (y − k) = r²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 301
**Subtema:** cónicas · ecuación del círculo

La ecuación de un círculo es (x − h)² + (y − k)² = r².

---

### 63

En relación con el libro de Matemáticas, ¿cuál es la definición de una parábola?

- A. El conjunto de todos los puntos (x, y) en un plano equidistantes de una recta fija, la directriz, y un punto fijo, el foco, que no está en la recta
- B. El conjunto de todos los puntos equidistantes de un punto fijo llamado centro
- C. El conjunto de todos los puntos cuya suma de distancias a dos puntos fijos es constante
- D. El conjunto de todos los puntos (x, y) equidistantes de dos rectas fijas paralelas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · definición

Una parábola es el conjunto de todos los puntos (x, y) en un plano equidistantes de una recta fija, la directriz, y un punto fijo, el foco, que no está en la recta.

---

### 64

De acuerdo con el libro de Matemáticas, según la definición de parábola, ¿qué es el vértice?

- A. El punto medio entre el foco y la directriz
- B. El punto donde la parábola cruza el eje x
- C. El punto fijo llamado foco
- D. El punto de intersección entre la directriz y el eje

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · vértice

El vértice es el punto medio entre el foco y la directriz.

---

### 65

De conformidad con el libro de Matemáticas, ¿qué es el eje de la parábola?

- A. La recta que pasa por el foco y el vértice
- B. La recta paralela a la directriz que pasa por el foco
- C. La recta perpendicular a la directriz que pasa por el origen
- D. La recta que pasa por el foco y es paralela al eje x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · eje

El eje de la parábola es la recta que pasa por el foco y el vértice.

---

### 66

En relación con el libro de Matemáticas, ¿cuál es la forma estándar de la ecuación de una parábola con vértice en (h, k) y eje vertical, y cuál es su directriz?

- A. (x − h)² = 4p(y − k), p ≠ 0, con directriz y = k − p
- B. (y − k)² = 4p(x − h), p ≠ 0, con directriz x = h − p
- C. (x − h)² = 4p(y − k), p = 0, con directriz y = k − p
- D. (x + h)² = 4p(y + k), p ≠ 0, con directriz y = k + p

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · ecuación estándar

(x − h)² = 4p(y − k), p ≠ 0. Eje vertical; directriz: y = k − p.

---

### 67

De acuerdo con el libro de Matemáticas, ¿cuál es la forma estándar de la ecuación de una parábola con vértice en (h, k) y eje horizontal, y cuál es su directriz?

- A. (y − k)² = 4p(x − h), p ≠ 0, con directriz x = h − p
- B. (x − h)² = 4p(y − k), p ≠ 0, con directriz y = k − p
- C. (y − k)² = 4p(x − h), p ≠ 0, con directriz x = h + p
- D. (y + k)² = 4p(x + h), p ≠ 0, con directriz x = h − p

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · ecuación estándar

(y − k)² = 4p(x − h), p ≠ 0. Eje horizontal; directriz: x = h − p.

---

### 68

De conformidad con el libro de Matemáticas, si el vértice de la parábola está en el origen, ¿qué forma adopta la ecuación?

- A. x² = 4py (eje vertical) o y² = 4px (eje horizontal)
- B. x² = 4py (eje horizontal) o y² = 4px (eje vertical)
- C. x² = py² (eje vertical) o y² = px² (eje horizontal)
- D. x² = 4p (eje vertical) o y² = 4p (eje horizontal)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · ecuación con vértice en el origen

Si el vértice está en el origen, la ecuación adopta una de dos formas: x² = 4py (eje vertical) o y² = 4px (eje horizontal).

---

### 69

En relación con el libro de Matemáticas, ¿dónde se ubica el foco de una parábola respecto al vértice?

- A. En el eje, a p unidades (distancia dirigida) del vértice
- B. En la directriz, a p unidades del vértice
- C. En el eje, a 2p unidades del vértice
- D. En el punto medio entre el vértice y la directriz

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 302
**Subtema:** parábolas · ubicación del foco

El foco se ubica en el eje a p unidades (distancia dirigida) del vértice.

---

### 70

De acuerdo con el libro de Matemáticas, ¿qué es una cuerda focal de una parábola?

- A. Un segmento de recta que pasa por el foco de una parábola y tiene puntos terminales en la parábola
- B. Un segmento de recta que pasa por el vértice y es perpendicular al eje
- C. La recta tangente a la parábola en el foco
- D. Un segmento de recta que une el foco con la directriz

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 304
**Subtema:** parábolas · cuerda focal

Un segmento de recta que pasa por el foco de una parábola y tiene puntos terminales en la parábola es una cuerda focal.

---

### 71

De conformidad con el libro de Matemáticas, ¿cómo se llama la cuerda focal perpendicular al eje de la parábola?

- A. Latus rectum (lado recto)
- B. Directriz
- C. Cuerda principal
- D. Eje focal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 304
**Subtema:** parábolas · latus rectum

La cuerda focal perpendicular al eje de la parábola se llama latus rectum (lado recto).

---

### 72

En relación con el libro de Matemáticas, ¿qué propiedad tiene la superficie de un reflector parabólico respecto a los rayos entrantes paralelos al eje?

- A. Todos los rayos entrantes paralelos al eje se reflejan por el foco de la parábola
- B. Todos los rayos entrantes paralelos al eje se reflejan por el vértice de la parábola
- C. Todos los rayos entrantes paralelos al eje se dispersan sin converger
- D. Todos los rayos entrantes paralelos al eje se reflejan por la directriz

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 304
**Subtema:** parábolas · reflector parabólico

La superficie resultante tiene la propiedad de que todos los rayos entrantes paralelos al eje se reflejan por el foco de la parábola.

---

### 73

De acuerdo con el libro de Matemáticas, ¿cuándo una recta es tangente a una parábola en un punto?

- A. Cuando la recta interseca, pero no cruza, la parábola en ese punto
- B. Cuando la recta cruza la parábola exactamente en dos puntos
- C. Cuando la recta es paralela al eje de la parábola
- D. Cuando la recta pasa por el foco y el vértice a la vez

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 304
**Subtema:** parábolas · recta tangente

Una recta es tangente a una parábola en un punto cuando la recta interseca, pero no cruza, la parábola en ese punto.

---

### 74

De conformidad con el libro de Matemáticas, según la propiedad de reflexión de una parábola, ¿con qué dos rectas hace ángulos iguales la tangente en el punto P?

- A. La recta que pasa por P y el foco, y el eje de la parábola
- B. La recta que pasa por P y el vértice, y la directriz
- C. La recta que pasa por P y el foco, y la directriz
- D. El eje de la parábola y la directriz

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 304
**Subtema:** parábolas · propiedad de reflexión

La tangente de una parábola en el punto P hace ángulos iguales con las dos rectas siguientes: la recta que pasa por P y el foco, y el eje de la parábola.

---

## Sub-lote 8 · Elipses: definición, ecuación estándar y excentricidad — cierra la §3.5 (pp. 310, 311, 314, 315)

### 75

De acuerdo con el libro de Matemáticas, ¿cuál es la definición de una elipse?

- A. El conjunto de todos los puntos (x, y) en un plano, la suma de cuyas distancias desde dos puntos fijos distintos (focos) es constante
- B. El conjunto de todos los puntos (x, y) equidistantes de un punto fijo llamado centro
- C. El conjunto de todos los puntos (x, y) cuya diferencia de distancias a dos puntos fijos es constante
- D. El conjunto de todos los puntos (x, y) equidistantes de una recta fija y un punto fijo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 310
**Subtema:** elipses · definición

Una elipse es el conjunto de todos los puntos (x, y) en un plano, la suma de cuyas distancias desde dos puntos fijos distintos (focos) es constante.

---

### 76

De conformidad con el libro de Matemáticas, ¿qué son los vértices de una elipse?

- A. Los dos puntos donde la recta que pasa por los focos interseca la elipse
- B. Los puntos donde el eje menor interseca la elipse
- C. Los puntos donde la elipse cruza el eje y
- D. Los puntos medios entre cada foco y el centro

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 310
**Subtema:** elipses · vértices

La recta que pasa por los focos interseca la elipse en dos puntos (vértices).

---

### 77

En relación con el libro de Matemáticas, ¿qué es el eje mayor de una elipse?

- A. La cuerda que une los vértices, cuyo punto medio es el centro de la elipse
- B. La cuerda perpendicular al eje menor que pasa por un foco
- C. La recta que une los dos focos
- D. La cuerda más corta que puede trazarse en la elipse

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 310
**Subtema:** elipses · eje mayor

La cuerda que une los vértices es el eje mayor y su punto medio es el centro de la elipse.

---

### 78

De acuerdo con el libro de Matemáticas, ¿qué es el eje menor de una elipse?

- A. La cuerda perpendicular al eje mayor en el centro
- B. La cuerda que une los dos focos
- C. La cuerda que une los vértices
- D. La recta tangente a la elipse en el centro

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 310
**Subtema:** elipses · eje menor

La cuerda perpendicular al eje mayor en el centro es el eje menor de la elipse.

---

### 79

De conformidad con el libro de Matemáticas, con base en la figura 3.37 y usando un punto como vértice, ¿a qué es igual la suma constante de las distancias desde cualquier punto de la elipse a los dos focos?

- A. (a + c) + (a − c) = 2a, la longitud del eje mayor
- B. (a + c) + (a − c) = 2c, la longitud del eje menor
- C. (a − c) − (a + c) = 2a
- D. (a + c) + (a − c) = a², el área de la elipse

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 310
**Subtema:** elipses · suma constante de distancias

Usando un punto como vértice, esa suma constante es (a + c) + (a − c) = 2a, la cual es la longitud del eje mayor.

---

### 80
En relación con el libro de Matemáticas, geométricamente, ¿qué ocurre cuando a = b en la ecuación de una elipse?
- A. Los ejes mayor y menor son de igual longitud y la gráfica es un círculo
- B. La elipse se convierte en una parábola
- C. La elipse pierde uno de sus dos focos
- D. Los ejes mayor y menor se vuelven perpendiculares al eje x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 311
**Subtema:** elipses · caso especial del círculo

Geométricamente, cuando a = b para una elipse, los ejes mayor y menor son de igual longitud y por lo tanto la gráfica es un círculo.

---

### 81

De acuerdo con el libro de Matemáticas, ¿cuál es la forma estándar de la ecuación de una elipse con centro (h, k), eje mayor horizontal de longitud 2a y eje menor de longitud 2b, donde 0 < b < a?

- A. (x − h)²/a² + (y − k)²/b² = 1
- B. (x − h)²/b² + (y − k)²/a² = 1
- C. (x − h)²/a² + (y − k)²/b² = 0
- D. (x − h)²/a + (y − k)²/b = 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 311
**Subtema:** elipses · ecuación estándar

(x − h)²/a² + (y − k)²/b² = 1. El eje mayor es horizontal.

---

### 82

De conformidad con el libro de Matemáticas, ¿dónde se ubican los focos de una elipse y qué relación cumplen?

- A. Se ubican en el eje mayor, a c unidades del centro, con c² = a² − b²
- B. Se ubican en el eje menor, a c unidades del centro, con c² = a² − b²
- C. Se ubican en el eje mayor, a c unidades del centro, con c² = a² + b²
- D. Se ubican en el centro mismo de la elipse

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 311
**Subtema:** elipses · focos

Los focos se ubican en el eje mayor, a c unidades del centro, con c² = a² − b².

---

### 83

En relación con el libro de Matemáticas, si el centro de la elipse está en el origen, ¿qué forma adopta su ecuación?

- A. x²/a² + y²/b² = 1 (eje mayor horizontal) o x²/b² + y²/a² = 1 (eje mayor vertical)
- B. x²/a² + y²/b² = 1 (eje mayor vertical) o x²/b² + y²/a² = 1 (eje mayor horizontal)
- C. x²/a + y²/b = 1 en ambos casos
- D. x² + y² = a²b² en ambos casos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 311
**Subtema:** elipses · ecuación con centro en el origen

Si el centro está en el origen, la ecuación adopta una de estas formas: x²/a² + y²/b² = 1 (el eje mayor es horizontal) o x²/b² + y²/a² = 1 (el eje mayor es vertical).

---

### 84

De acuerdo con el libro de Matemáticas, además de las órbitas de los satélites y planetas, ¿qué otras aplicaciones prácticas y estéticas suelen implicar formas elípticas?

- A. Los engranajes de máquinas, los arcos de soporte y los diseños acústicos
- B. Los circuitos eléctricos y las antenas parabólicas
- C. Las columnas de los edificios y los puentes colgantes
- D. Los relojes de sol y las brújulas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 314
**Subtema:** elipses · aplicaciones

Las elipses tienen muchos usos prácticos y estéticos. Por ejemplo, los engranajes de máquinas, los arcos de soporte y los diseños acústicos suelen implicar formas elípticas.

---

### 85

De conformidad con el libro de Matemáticas, ¿por qué era difícil para los astrónomos antiguos detectar que las órbitas de los planetas son elípticas?

- A. Porque los focos de las órbitas planetarias están relativamente cerca de sus centros, así que éstas son casi circulares
- B. Porque no contaban con instrumentos para medir distancias astronómicas
- C. Porque las órbitas de los planetas cambian de forma con el tiempo
- D. Porque los focos de las órbitas planetarias están muy alejados entre sí

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 315
**Subtema:** elipses · excentricidad

Era difícil para los astrónomos antiguos detectar que las órbitas de los planetas son elípticas, porque los focos de las órbitas planetarias están relativamente cerca de sus centros, así que éstas son casi circulares.

---

### 86

En relación con el libro de Matemáticas, ¿cuál es la definición de la excentricidad e de una elipse?

- A. La razón e = c/a
- B. La razón e = a/c
- C. La razón e = b/a
- D. La razón e = c/b

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 315
**Subtema:** elipses · definición de excentricidad

La excentricidad e de una elipse es la razón e = c/a.

---

### 87

De acuerdo con el libro de Matemáticas, ¿qué rango de valores tiene la excentricidad de cualquier elipse?

- A. 0 < e < 1
- B. 0 < e < 2
- C. −1 < e < 1
- D. 1 < e < 2

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 315
**Subtema:** elipses · rango de la excentricidad

Obsérvese que 0 < e < 1 para cada elipse.

---

### 88

De conformidad con el libro de Matemáticas, ¿qué ocurre con la razón c/a en una elipse casi circular y en una elipse alargada?

- A. En una casi circular la razón se aproxima a 0; en una alargada se aproxima a 1
- B. En una casi circular la razón se aproxima a 1; en una alargada se aproxima a 0
- C. En ambos casos la razón se aproxima a 0
- D. En ambos casos la razón se aproxima a 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 315
**Subtema:** elipses · excentricidad y forma

En el caso de una elipse casi circular, los focos están cerca del centro y la razón c/a se aproxima a 0. En el caso de una elipse alargada, los focos están cerca de los vértices y la razón c/a se aproxima a 1.

---

### 89

En relación con el libro de Matemáticas, ¿cuál es la excentricidad de la órbita de la Luna?

- A. e ≈ 0.0549
- B. e ≈ 0.2056
- C. e ≈ 0.4900
- D. e ≈ 0.9500

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 315
**Subtema:** elipses · excentricidad de la órbita lunar

La órbita de la luna tiene una excentricidad de e ≈ 0.0549.

---

### 90

De acuerdo con el libro de Matemáticas, de las ocho excentricidades planetarias que enlista, ¿cuál planeta tiene la excentricidad más alta?

- A. Mercurio, con e ≈ 0.2056
- B. Venus, con e ≈ 0.0067
- C. Marte, con e ≈ 0.0935
- D. Neptuno, con e ≈ 0.0113

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 315
**Subtema:** elipses · excentricidades planetarias

Las excentricidades de las ocho órbitas planetarias se enlistan a continuación: Mercurio: e ≈ 0.2056, Venus: e ≈ 0.0067, Tierra: e ≈ 0.0167, Marte: e ≈ 0.0935, Júpiter: e ≈ 0.0489, Saturno: e ≈ 0.0565, Urano: e ≈ 0.0457, Neptuno: e ≈ 0.0113.

---

## Sub-lote 9 · Hipérbolas, asíntotas, excentricidad y clasificación de cónicas — cierra la §3.6 y el capítulo 3 (pp. 319, 320, 321, 323, 324, 325)

### 91

De acuerdo con el libro de Matemáticas, ¿en qué se diferencia la definición de hipérbola de la de una elipse?

- A. Para la elipse la suma de las distancias a los focos es constante; para la hipérbola es el valor absoluto de la diferencia
- B. Para la elipse es la diferencia; para la hipérbola es la suma
- C. Ambas usan la suma de las distancias a los focos
- D. Ambas usan el valor absoluto de la diferencia de las distancias a los focos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 319
**Subtema:** hipérbolas · comparación con la elipse

Para una elipse, la suma de las distancias entre los focos y un punto en la elipse es constante. Para una hipérbola, el valor absoluto de la diferencia de las distancias entre los focos y un punto en la hipérbola es constante.

---

### 92

De conformidad con el libro de Matemáticas, ¿cuál es la definición de una hipérbola?

- A. El conjunto de todos los puntos (x, y) en un plano, para los cuales el valor absoluto de la diferencia de las distancias desde dos puntos fijos distintos (focos) es constante
- B. El conjunto de todos los puntos (x, y) equidistantes de un punto fijo
- C. El conjunto de todos los puntos (x, y) cuya suma de distancias a dos focos es constante
- D. El conjunto de todos los puntos (x, y) equidistantes de una recta fija

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 319
**Subtema:** hipérbolas · definición

Una hipérbola es el conjunto de todos los puntos (x, y) en un plano, para los cuales el valor absoluto de la diferencia de las distancias desde dos puntos fijos distintos (focos) es constante.

---

### 93

En relación con el libro de Matemáticas, ¿cómo se llaman las dos partes separadas de la gráfica de una hipérbola?

- A. Ramas
- B. Vértices
- C. Focos
- D. Asíntotas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 319
**Subtema:** hipérbolas · ramas

La gráfica de una hipérbola tiene dos partes separadas (ramas).

---

### 94

De acuerdo con el libro de Matemáticas, ¿qué es el eje transversal de una hipérbola?

- A. El segmento de recta que une los vértices, cuyo punto medio es el centro de la hipérbola
- B. El segmento de recta que une los focos
- C. La recta perpendicular al eje conjugado que pasa por un foco
- D. La recta tangente a una de las ramas en el vértice

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 319
**Subtema:** hipérbolas · eje transversal

El segmento de recta que une los vértices es el eje transversal y su punto medio es el centro de la hipérbola.

---

### 95

De conformidad con el libro de Matemáticas, ¿cómo se relacionan a, b y c en una hipérbola, a diferencia de una elipse?

- A. La distancia entre los focos y el centro es mayor que la distancia entre los vértices y el centro
- B. La distancia entre los focos y el centro es menor que la distancia entre los vértices y el centro
- C. La distancia entre los focos y el centro es igual a la distancia entre los vértices y el centro
- D. No existe relación entre estas distancias en una hipérbola

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 319
**Subtema:** hipérbolas · relación entre a, b y c

En el caso de una hipérbola, la distancia entre los focos y el centro es mayor que la distancia entre los vértices y el centro.

---

### 96

En relación con el libro de Matemáticas, ¿cuál es la forma estándar de la ecuación de una hipérbola con centro (h, k) y eje transversal horizontal?

- A. (x − h)²/a² − (y − k)²/b² = 1
- B. (y − k)²/a² − (x − h)²/b² = 1
- C. (x − h)²/a² + (y − k)²/b² = 1
- D. (x − h)²/b² − (y − k)²/a² = 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 320
**Subtema:** hipérbolas · ecuación estándar

(x − h)²/a² − (y − k)²/b² = 1. El eje transversal es horizontal.

---

### 97

De acuerdo con el libro de Matemáticas, según la ecuación estándar de una hipérbola, ¿a qué distancia del centro están los vértices y los focos?

- A. Los vértices están a a unidades del centro y los focos a c unidades del centro
- B. Los vértices están a c unidades del centro y los focos a a unidades del centro
- C. Los vértices y los focos están ambos a b unidades del centro
- D. Los vértices están a b unidades del centro y los focos a a unidades del centro

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 320
**Subtema:** hipérbolas · vértices y focos

Los vértices están a unidades del centro y los focos están a c unidades del centro.

---

### 98

De conformidad con el libro de Matemáticas, ¿cuál es la relación entre a, b y c en una hipérbola?

- A. c² = a² + b²
- B. c² = a² − b²
- C. c² = a² · b²
- D. c = a + b

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 320
**Subtema:** hipérbolas · relación entre a, b y c

Además, c² = a² + b².

---

### 99

En relación con el libro de Matemáticas, ¿qué es el eje conjugado de una hipérbola con eje transversal horizontal?

- A. El segmento de recta de longitud 2b que une a (h, k+b) y (h, k−b)
- B. El segmento de recta que une los dos focos
- C. El segmento de recta que une los dos vértices
- D. La recta tangente en el vértice

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 321
**Subtema:** hipérbolas · eje conjugado

El eje conjugado de una hipérbola es el segmento de recta de longitud 2b que une a (h, k+b) y (h, k−b) cuando el eje transversal es horizontal.

---

### 100

De acuerdo con el libro de Matemáticas, ¿cuántas asíntotas tiene cada hipérbola y dónde intersecan?

- A. Dos, que intersecan en el centro de la hipérbola
- B. Una, que pasa por ambos focos
- C. Cuatro, que intersecan en los vértices
- D. Dos, que intersecan en cada foco

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 321
**Subtema:** hipérbolas · asíntotas

Cada hipérbola tiene dos asíntotas que intersecan en el centro de la hipérbola.

---

### 101

De conformidad con el libro de Matemáticas, ¿por dónde pasan las asíntotas de una hipérbola?

- A. Por los vértices de un rectángulo de dimensiones 2a por 2b con su centro en (h, k)
- B. Por los focos de la hipérbola
- C. Por el punto medio del eje conjugado únicamente
- D. Por los vértices de la hipérbola únicamente

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 321
**Subtema:** hipérbolas · asíntotas

Las asíntotas pasan por los vértices de un rectángulo de dimensiones 2a por 2b con su centro en (h, k).

---

### 102

En relación con el libro de Matemáticas, ¿cuáles son las ecuaciones de las asíntotas de una hipérbola con eje transversal horizontal?

- A. y = k ± (b/a)(x − h)
- B. y = k ± (a/b)(x − h)
- C. y = h ± (b/a)(x − k)
- D. y = k ± (a/b)(x + h)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 321
**Subtema:** hipérbolas · ecuaciones de las asíntotas

y = k ± (b/a)(x − h). Asíntotas para un eje transversal horizontal.

---

### 103

De acuerdo con el libro de Matemáticas, ¿cuál es la excentricidad de una hipérbola y qué rango de valores tiene?

- A. e = c/a, y como c > a, se sigue que e > 1
- B. e = a/c, y como c > a, se sigue que 0 < e < 1
- C. e = c/a, y como c < a, se sigue que 0 < e < 1
- D. e = b/a, y como b > a, se sigue que e > 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 323
**Subtema:** hipérbolas · excentricidad

La excentricidad de una hipérbola es e = c/a. Usted sabe que c > a para una hipérbola y lo que sigue es que e > 1.

---

### 104

De conformidad con el libro de Matemáticas, ¿qué ocurre con las ramas de una hipérbola cuando la excentricidad es grande y cuando se aproxima a 1?

- A. Cuando es grande, las ramas son casi planas; cuando se aproxima a 1, las ramas son más estrechas
- B. Cuando es grande, las ramas son más estrechas; cuando se aproxima a 1, son casi planas
- C. En ambos casos las ramas son casi planas
- D. En ambos casos las ramas son más estrechas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 323
**Subtema:** hipérbolas · excentricidad y forma

Cuando la excentricidad es grande, las ramas de la hipérbola son casi planas. Cuando la excentricidad se aproxima a 1, las ramas de la hipérbola son más estrechas.

---

### 105

En relación con el libro de Matemáticas, ¿qué países desarrollaron, durante la Segunda Guerra Mundial, la aplicación de las propiedades de las hipérbolas en radares y otros sistemas de detección?

- A. Estados Unidos y Gran Bretaña
- B. Alemania y Japón
- C. Francia y la Unión Soviética
- D. Estados Unidos y la Unión Soviética

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 324
**Subtema:** hipérbolas · aplicación en radares

Las propiedades de las hipérbolas se usan en radares y otros sistemas de detección. Estados Unidos y Gran Bretaña desarrollaron esta aplicación durante la II Guerra Mundial.

---

### 106

De acuerdo con el libro de Matemáticas, ¿qué tipo de órbitas pueden tener los cometas en el Sistema Solar y qué es el centro del Sol respecto a cada una?

- A. Órbitas elípticas, parabólicas o hiperbólicas, y el centro del Sol es un foco de cada una de esas órbitas
- B. Sólo órbitas elípticas, y el centro del Sol es el centro de cada órbita
- C. Órbitas elípticas, parabólicas o hiperbólicas, y el centro del Sol es el vértice de cada órbita
- D. Órbitas circulares únicamente

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 324
**Subtema:** hipérbolas · órbitas de cometas

Los cometas pueden tener órbitas elípticas, parabólicas o hiperbólicas. El centro del Sol es un foco de cada una de esas órbitas, y cada órbita tiene un vértice en el punto donde el cometa está más cerca del Sol.

---

### 107

De conformidad con el libro de Matemáticas, ¿qué diferencia hay entre los cometas de órbita elíptica y los de órbita parabólica o hiperbólica?

- A. Los de órbita elíptica, como el Halley, son los únicos que permanecen en el Sistema Solar; los de las otras dos se ven sólo una vez
- B. Los de órbita parabólica son los únicos que permanecen en el Sistema Solar
- C. Todos los cometas, sin importar su órbita, permanecen en el Sistema Solar
- D. Los de órbita hiperbólica son los únicos que se pueden observar más de una vez

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 324
**Subtema:** hipérbolas · órbitas de cometas

Muchos cometas con órbitas parabólicas o hiperbólicas no han sido identificados. Usted logra ver esos cometas sólo una vez. Cometas con órbitas elípticas, como el Halley, son los únicos que permanecen en nuestro Sistema Solar.

---

### 108

En relación con el libro de Matemáticas, si p es la distancia entre el vértice y el foco, y v es la rapidez del cometa en el vértice, ¿qué condición determina que la órbita del cometa sea hiperbólica?

- A. v > √(2GM/p)
- B. v < √(2GM/p)
- C. v = √(2GM/p)
- D. v ≥ 2√(GM/p)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 324
**Subtema:** hipérbolas · criterio de velocidad orbital

El tipo de órbita se determina como sigue: hiperbólica cuando v > √(2GM/p).

---

### 109

De acuerdo con el libro de Matemáticas, dada la ecuación Ax² + Cy² + Dx + Ey + F = 0, ¿qué condiciones determinan que su gráfica sea un círculo y cuáles que sea una parábola?

- A. Círculo: A = C (A ≠ 0); Parábola: AC = 0 (A = 0 o C = 0, pero no ambas)
- B. Círculo: AC = 0; Parábola: A = C (A ≠ 0)
- C. Círculo: A = C (A = 0); Parábola: AC > 0
- D. Círculo: AC < 0; Parábola: A = C

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 325
**Subtema:** cónicas · clasificación por ecuación general

Círculo: A = C, A ≠ 0. Parábola: AC = 0, A = 0 o C = 0, pero no ambas.

---

### 110

De conformidad con el libro de Matemáticas, dada la ecuación Ax² + Cy² + Dx + Ey + F = 0, ¿qué condiciones determinan que su gráfica sea una elipse y cuáles que sea una hipérbola?

- A. Elipse: AC > 0 (A ≠ C y A y C tienen signos iguales); Hipérbola: AC < 0 (A y C tienen signos desiguales)
- B. Elipse: AC < 0; Hipérbola: AC > 0
- C. Elipse: A = C; Hipérbola: AC = 0
- D. Elipse: AC > 0 (A y C tienen signos desiguales); Hipérbola: AC < 0 (A y C tienen signos iguales)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 325
**Subtema:** cónicas · clasificación por ecuación general

Elipse: AC > 0, A ≠ C y A y C tienen signos iguales. Hipérbola: AC < 0, A y C tienen signos desiguales.

---

### 111

En relación con el libro de Matemáticas, ¿cuándo es válida la prueba de clasificación de una cónica a partir de su ecuación general?

- A. Cuando la gráfica es una cónica; no se aplica a ecuaciones cuya gráfica no es una cónica, como x² + y² = −1
- B. Siempre, sin excepción, para cualquier ecuación de segundo grado
- C. Sólo cuando A y C son ambos positivos
- D. Sólo cuando la ecuación no tiene término independiente F

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 325
**Subtema:** cónicas · clasificación por ecuación general

La prueba de arriba es válida cuando la gráfica es una cónica. No se aplica a ecuaciones como x² + y² = −1, cuya gráfica no es una cónica.

---

### 112

De acuerdo con el libro de Matemáticas, según la `NOTA HISTÓRICA`, ¿qué logro se le acredita a Caroline Herschel?

- A. Fue la primera mujer a la que se le acreditó el descubrimiento de un cometa
- B. Fue la primera mujer en calcular la órbita de un planeta
- C. Fue la primera mujer en publicar una tabla de logaritmos
- D. Fue la primera mujer en observar los anillos de Saturno

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 325
**Subtema:** hipérbolas · nota histórica

Caroline Herschel (1750-1848) fue la primera mujer a la que se le acreditó el descubrimiento de un cometa.

---

### 113

De conformidad con el libro de Matemáticas, según la `NOTA HISTÓRICA`, ¿cuántos cometas descubrió Caroline Herschel durante su vida?

- A. Un total de ocho cometas
- B. Un total de tres cometas
- C. Un total de quince cometas
- D. Un total de un cometa

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 325
**Subtema:** hipérbolas · nota histórica

Durante su larga vida, esta astrónoma alemana descubrió un total de ocho cometas.

---
