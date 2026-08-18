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

_(Los defectos del capítulo 1 y del capítulo 2 están documentados en sus propios archivos.)_

## Cobertura actual

**EN CURSO.** La **§3.1 · Coordenadas rectangulares está CERRADA** (pp. 272–277):

- Cubiertas las páginas impresas **272 y 273**: el plano cartesiano y a quién honra su nombre, cómo se forma y sus elementos (ejes, origen y cuadrantes), las coordenadas de un punto y qué distancia representa cada una, la doble lectura de la notación (x, y) y la importancia de la aportación de Descartes. Los `EJEMPLO 1` y `EJEMPLO 2` (gráficas de dispersión de telefonía celular) y el `TECNOLOGÍA` no llevan reactivos.
- Cubiertas las páginas impresas **274 a 277**, con las que **cierra la §3.1**: el recuadro *Teorema de Pitágoras* con su recíproco, las longitudes de los lados del triángulo auxiliar, la *Fórmula de la distancia*, la *Fórmula del punto medio* y cómo se obtiene, la libertad de colocar el sistema de coordenadas en las aplicaciones, y las **transformaciones** (la traslación y los otros tres tipos). Los `EJEMPLO 3` a `EJEMPLO 8` no llevan reactivos, ni el `Resumen (sección 3.1)`. Las **pp. 278–280 son el bloque `3.1 Ejercicios`**.

- Cubiertas las páginas impresas **281, 282 y 283**, arranque de la **§3.2 · Ecuaciones lineales con dos variables**: el modelo `y = mx + b` y por qué se llama lineal, la *forma pendiente-intersección* y qué son m y (0, b), qué es la pendiente de una recta no vertical, la recta vertical `x = a` y por qué su pendiente no está definida, lo que implican una pendiente cero y una negativa, la **elevación** y el **corrimiento**, el recuadro *Pendiente de una recta que pasa por dos puntos* con su condición x₁ ≠ x₂, y la importancia del **orden de sustracción**. Los `EJEMPLO 1` y `EJEMPLO 2` no llevan reactivos.

- Cubiertas las páginas impresas **284, 285 y 286**: el `COMENTARIO` que relaciona el signo de la pendiente con la orientación de la recta, la *forma punto-pendiente* y para qué es más útil, el `COMENTARIO` de que da igual cuál de los dos puntos se sustituya, y el recuadro *Rectas paralelas y perpendiculares* (pendientes iguales, y la fórmula m₁ = −1/m₂). Los `EJEMPLO 3` y `EJEMPLO 4` y el `TECNOLOGÍA` no llevan reactivos.
- Cubiertas las páginas impresas **287, 288 y 289**, con las que **cierra la §3.2**: la pendiente como razón o tasa según las unidades de los ejes, la depreciación lineal y el valor en libros, la extrapolación y la interpolación lineal, la forma general Ax + By + C = 0, y el recuadro *Resumen de ecuaciones de rectas* con sus seis formas. Los `EJEMPLO 5` a `EJEMPLO 8` y el `Resumen (sección 3.2)` no llevan reactivos. Las **pp. 290–293 son el bloque `3.2 Ejercicios`**.

**Pendiente:** EN CURSO. La **§3.1 y la §3.2 están CERRADAS**. Sigue la **§3.3 · Rectas**, que arranca en la página impresa **294** y cuya teoría llega hasta la **p. 297**. Después faltan **§3.4** (p. 301), **§3.5** (p. 310) y **§3.6** (p. 319). **Matemáticas (Larson) no está cerrada** mientras este capítulo siga abierto: es el último de los tres que pide el temario.

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

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué indica una pendiente positiva?

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

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué indica una pendiente no definida?

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

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, al hallar la ecuación de la recta que pasa por dos puntos, ¿cuál de ellos debe sustituirse en la forma punto-pendiente?

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
