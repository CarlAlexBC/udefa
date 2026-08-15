# Matemáticas · Capítulo 2 · Fundamentos de trigonometría

**Plantel:** Escuela Militar de Especialistas de Fuerza Aérea (EMEFA) · **Materia:** `MATE-03-2026`
**Aplica a:** Controlador de Vuelo (Lic. en Aeronáutica Mil.) y Meteorólogo (Lic. en Meteorología Mil.) — los dos temarios piden exactamente lo mismo de este libro.

> El reactivo pertenece al **libro** (`larson-precalculo`), no al plantel: cualquier temario que llame a este capítulo de Larson lo reutiliza.

## Libro

Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, **primera edición**.

**Edición verificada** contra la página legal (hoja 3 del PDF); el detalle está en el archivo del capítulo 1 (`matematicas-01-fundamentos-algebra.md`), que es donde se hizo la verificación.

## Alcance del temario

El temario `MATE-03-2026` de la EMEFA **no pide este capítulo completo**. De sus dieciséis subtemas sólo pide **cinco**:

| Subtema que sí entra | Páginas impresas | Teoría |
|---|---|---|
| 2.6 Gráficas de las funciones seno y coseno | 171–181 | 171–177 |
| 2.9 Aplicaciones y modelos | 202–211 | 202–207 |
| 2.10 Uso de identidades fundamentales | 212–218 | 212–216 |
| 2.15 Ley de senos | 254–262 | 254–259 |
| 2.16 Ley de cosenos | 263–270 | 263–266 |

**Quedan fuera** los subtemas **2.1, 2.2, 2.3, 2.4, 2.5, 2.7, 2.8, 2.11, 2.12, 2.13 y 2.14**: el temario no los pide y no llevan reactivos. En cada subtema, las páginas que no aparecen en la columna "Teoría" son el bloque de `Ejercicios`.

Los otros dos capítulos que pide el temario van en sus propios archivos: el **1** (`matematicas-01-fundamentos-algebra.md`, cerrado en 284 reactivos) y el **3 · Fundamentos de geometría analítica**, que se pide **completo**.

## Método y desfase

El PDF **trae capa de texto y la prosa sale limpia**, pero **las matemáticas se aplanan al extraerlas** y en algunos párrafos **los signos desaparecen**. En un capítulo de trigonometría eso es especialmente peligroso, así que aquí la regla se aplica sin excepción: **la prosa se toma del extractor y toda fórmula, signo, intervalo o valor de ángulo se lee de la hoja renderizada** (`render.py`).

**Desfase:** **hoja del PDF = página impresa + 9**, el mismo del capítulo 1, releído aquí (hoja 180 = p. 171).

## Criterio de este capítulo

Recuerdo literal (Anexo "H"): la correcta y la justificación son cita del libro. Se caza el **dato olvidable** —la condición exacta, el nombre de la curva, el valor del periodo—, no lo obvio. Los mejores distractores salen del mismo recuadro. La correcta se escribe siempre en **A**; el importador baraja.

**Teoría sí, ejercicios no**: entran los recuadros de definiciones y de propiedades y la prosa que las explica. **No llevan reactivos** los bloques `EJEMPLO`, `Punto de repaso`, `Ejercicios`, `¿Cómo lo ve?`, `Proyecto`, `TECNOLOGÍA`, el `Resumen` de cada sección ni los pies de foto que remiten a un ejercicio.

**El dato olvidable tiene que ser DEL TEMA** (regla de Carlo, 14 ago 2026): quedan fuera las notas de lengua, los consejos de estudio y los comentarios sobre el propio libro, aunque sean cita textual. Los `COMENTARIO` entran **sólo si traen matemáticas**. Detalle en `docs/examen-cultural/README.md`.

## Erratas del libro — no se escriben reactivos sobre ellas

- **p. 171, segundo párrafo: falta el intervalo del rango.** El libro imprime "el rango de cada función es el intervalo y cada función tiene un periodo de 2π": **el intervalo nunca se imprimió**, se cayó en la composición. El dato sí aparece en las figuras 2.45 y 2.46, que rotulan "Rango: −1 ≤ y ≤ 1". El reactivo del rango se escribe con el valor de las figuras, que es el que el aspirante puede leer.
- **p. 176, párrafo de la constante d: falta la ecuación de la recta.** El libro imprime "la gráfica oscila alrededor de la recta horizontal en lugar de alrededor del eje x": **nunca dice cuál recta** (debería ser `y = d`). Es el mismo tipo de hueco de composición que el del rango en la p. 171. El reactivo 28 pregunta sólo lo que sí está impreso.
- **p. 176, `EJEMPLO 5`:** el enunciado dice "Trace la gráfica de **y = −3 cos(2x + 4)**", pero la solución resuelve `2πx + 4π = 0` y la figura 2.49 rotula **y = −3 cos(2πx + 4π)**: al enunciado se le cayeron las dos π.
- **p. 176, `EJEMPLO 6`:** el enunciado dice "Trace la gráfica de **y = 2 = 3 cos 2x**", con un signo igual donde va un **más**; la figura 2.50 rotula `y = 2 + 3 cos 2x`.

Los dos últimos están dentro de bloques `EJEMPLO`, que de todos modos quedan fuera por norma.

## Cobertura actual

**EN CURSO.** El **2.6 · Gráficas de las funciones seno y coseno está CERRADO** (pp. 171–176):

- Cubiertas las páginas impresas **171 y 172**: la curva senoidal y el ciclo, el dominio, el rango y el periodo de las funciones seno y coseno, sus simetrías y el hecho de que el seno es impar y el coseno par, y los cinco puntos clave de un periodo. El `TECNOLOGÍA` de las graficadoras no lleva reactivos.
- Cubiertas las páginas impresas **173, 174 y 175**: *Amplitud y periodo* (las formas generales `y = d + a sen(bx − c)` y `y = d + a cos(bx − c)`, el factor de escala, qué pasa según el valor de |a|, la *Definición de amplitud de curvas seno y coseno* y el rango para a > 0), el efecto de b sobre el periodo (el ciclo de 0 a 2π/b, el estiramiento y la contracción horizontales) con el `COMENTARIO` de dividir el periodo-intervalo, la reflexión en el eje x, y las *Traslaciones de curvas seno y coseno* (la constante c, el periodo 2π/b, el **corrimiento de fase** c/b y las ecuaciones `bx − c = 0` y `bx − c = 2π` para los puntos finales). Los `EJEMPLO 2` a `EJEMPLO 4` no llevan reactivos.
- Cubierta la página impresa **176**, con la que **cierra el 2.6**: las *traslaciones verticales* que produce la constante d (hacia arriba para d > 0 y hacia abajo para d < 0) y que la gráfica pasa a oscilar alrededor de una recta horizontal en lugar del eje x. Los `EJEMPLO 5` y `EJEMPLO 6` no llevan reactivos. La **p. 177 tampoco**: es el `EJEMPLO 7` (profundidades del agua en un muelle) más el `Resumen (sección 2.6)`. Las **pp. 178–181 son el bloque `2.6 Ejercicios`**.

**Pendiente:** EN CURSO. El **2.6 está CERRADO**. Sigue el **2.9 · Aplicaciones y modelos**, que arranca en la página impresa **202** y cuya teoría llega hasta la **p. 207**. Después faltan **2.10** (p. 212), **2.15** (p. 254) y **2.16** (p. 263). **Matemáticas (Larson) no está cerrada:** falta además el **capítulo 3** completo, en su propio archivo.

---

## Sub-lote 1 · Curvas básicas de seno y coseno (2.6, pp. 171–172)

### 1

De acuerdo con el libro de Matemáticas, ¿cómo se llama la gráfica de la función seno?

- A. Curva senoidal
- B. Curva cosenoidal
- C. Curva periódica
- D. Curva unitaria

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · curva senoidal

La gráfica de la función seno es una curva senoidal.

---

### 2

De conformidad con el libro de Matemáticas, ¿cómo se denomina la parte de la gráfica que representa un periodo de la función?

- A. Un ciclo de la curva senoidal
- B. Una amplitud de la curva senoidal
- C. Una traslación de la curva senoidal
- D. Un rango de la curva senoidal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · ciclo

La parte negra de la gráfica representa un periodo de la función y se denomina un ciclo de la curva senoidal.

---

### 3

En relación con el libro de Matemáticas, ¿cuál es el dominio de las funciones seno y coseno?

- A. El conjunto de todos los números reales
- B. El conjunto de todos los números reales positivos
- C. El intervalo de −1 a 1
- D. El intervalo de 0 a 2π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · dominio y rango

El dominio de las funciones seno y coseno es el conjunto de todos los números reales.

---

### 4

De acuerdo con el libro de Matemáticas, ¿cuál es el rango de las funciones seno y coseno?

- A. De −1 a 1
- B. De 0 a 1
- C. De −2π a 2π
- D. Todos los números reales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · dominio y rango

Rango: −1 ≤ y ≤ 1 (figuras 2.45 y 2.46).

---

### 5

De conformidad con el libro de Matemáticas, ¿cuál es el periodo de las funciones seno y coseno?

- A. 2π
- B. π
- C. π/2
- D. 4π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · periodo

Cada función tiene un periodo de 2π.

---

### 6

En relación con el libro de Matemáticas, ¿respecto a qué es simétrica la curva senoidal?

- A. Respecto al origen
- B. Respecto al eje y
- C. Respecto al eje x
- D. Respecto a la recta y = x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · simetría

La curva senoidal es simétrica respecto al origen.

---

### 7

De acuerdo con el libro de Matemáticas, ¿respecto a qué es simétrica la curva cosenoidal?

- A. Respecto al eje y
- B. Respecto al origen
- C. Respecto al eje x
- D. Respecto a la recta y = −x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · simetría

La curva cosenoidal es simétrica respecto al eje y.

---

### 8

De conformidad con el libro de Matemáticas, ¿de qué hecho se siguen esas propiedades de simetría?

- A. De que la función seno es impar y la función coseno es par
- B. De que la función seno es par y la función coseno es impar
- C. De que las dos funciones son impares
- D. De que las dos funciones son pares

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · simetría

Estas propiedades de simetría se siguen del hecho de que la función seno es impar y la función coseno es par.

---

### 9

En relación con el libro de Matemáticas, ¿cuáles son los cinco puntos clave que conviene observar en un periodo de cada gráfica?

- A. Las intersecciones con los ejes, los puntos máximos y los puntos mínimos
- B. Los puntos de inflexión, los máximos y los mínimos
- C. Las asíntotas, los máximos y los mínimos
- D. Los extremos del dominio y los del rango

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 172
**Subtema:** gráficas de seno y coseno · puntos clave

Para trazar manualmente las gráficas de las funciones básicas seno y coseno, ayuda observar cinco puntos clave en un periodo de cada gráfica: las intersecciones con los ejes, puntos máximos y puntos mínimos.

---

### 10

De acuerdo con el libro de Matemáticas, ¿en cuántas partes se divide el periodo para obtener los puntos clave?

- A. En cuatro partes iguales
- B. En dos partes iguales
- C. En cinco partes iguales
- D. En tres partes iguales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 172
**Subtema:** gráficas de seno y coseno · puntos clave

Divida el periodo en cuatro partes iguales para obtener los puntos clave.

---

## Sub-lote 2 · Amplitud, periodo y traslaciones (2.6, pp. 173–175)

### 11

De conformidad con el libro de Matemáticas, ¿qué formas tienen las ecuaciones cuyo efecto gráfico se estudia en el resto de la sección?

- A. y = d + a sen(bx − c) y y = d + a cos(bx − c)
- B. y = d + a sen(bx) y y = d + a cos(bx)
- C. y = a sen(x − c) y y = a cos(x − c)
- D. y = d + sen(bx − c) y y = d + cos(bx − c)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 173
**Subtema:** gráficas de seno y coseno · amplitud y periodo

En el resto de esta sección estudiaremos el efecto gráfico de cada una de las constantes a, b, c y d, en las gráficas de las ecuaciones de las formas y = d + a sen(bx − c) y y = d + a cos(bx − c).

---

### 12

En relación con el libro de Matemáticas, ¿cómo actúa el factor constante a en y = a sen x y y = a cos x?

- A. Como factor de escala, es decir, un estiramiento o una contracción vertical de la curva básica
- B. Como factor de escala, es decir, un estiramiento o una contracción horizontal de la curva básica
- C. Como una traslación vertical de la curva básica
- D. Como una reflexión de la curva básica en el eje x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 173
**Subtema:** gráficas de seno y coseno · amplitud

El factor constante a en y = a sen x y y = a cos x actúa como factor de escala, esto es, un estiramiento vertical o contracción vertical de la curva básica.

---

### 13

De acuerdo con el libro de Matemáticas, ¿qué le ocurre a la curva básica según el valor de |a|?

- A. Si |a| > 1 la curva se estira, y si 0 < |a| < 1 la curva se contrae
- B. Si |a| > 1 la curva se contrae, y si 0 < |a| < 1 la curva se estira
- C. La curva se estira en los dos casos
- D. La curva se contrae en los dos casos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 173
**Subtema:** gráficas de seno y coseno · amplitud

Si |a| > 1 la curva básica se estira, y si 0 < |a| < 1, la curva básica se contrae.

---

### 14

De conformidad con el libro de Matemáticas, ¿qué es el valor absoluto de a?

- A. La amplitud de la función
- B. El periodo de la función
- C. El corrimiento de fase de la función
- D. El rango de la función

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 173
**Subtema:** gráficas de seno y coseno · amplitud

El valor absoluto de a es la amplitud de la función.

---

### 15

En relación con el libro de Matemáticas, ¿cuál es el rango de la función para a > 0?

- A. De −a a a
- B. De 0 a a
- C. De −1 a 1
- D. De −2a a 2a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 173
**Subtema:** gráficas de seno y coseno · amplitud

El rango de la función para a > 0 es −a ≤ y ≤ a.

---

### 16

De acuerdo con el libro de Matemáticas, ¿qué representa la amplitud de y = a sen x y y = a cos x?

- A. La mitad de la distancia entre los valores máximo y mínimo de la función
- B. La distancia completa entre los valores máximo y mínimo de la función
- C. El doble de la distancia entre los valores máximo y mínimo de la función
- D. La distancia entre dos ciclos consecutivos de la función

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 173
**Subtema:** gráficas de seno y coseno · amplitud

La amplitud de y = a sen x y y = a cos x representa la mitad de la distancia entre los valores máximo y mínimo de la función y está dada por Amplitud = |a|.

---

### 17

De conformidad con el libro de Matemáticas, ¿qué es la gráfica de y = −f(x) respecto de la gráfica de y = f(x)?

- A. Una reflexión en el eje x
- B. Una reflexión en el eje y
- C. Una traslación horizontal
- D. Una contracción vertical

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 174
**Subtema:** gráficas de seno y coseno · reflexión

La gráfica de y = −f(x) es una reflexión en el eje x de la gráfica de y = f(x).

---

### 18

En relación con el libro de Matemáticas, ¿de qué valor a qué valor de x completa un ciclo la gráfica de y = a sen bx?

- A. De x = 0 a x = 2π/b
- B. De x = 0 a x = 2π
- C. De x = 0 a x = b/2π
- D. De x = b a x = 2π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 174
**Subtema:** gráficas de seno y coseno · periodo

La gráfica de y = a sen bx completa un ciclo de x = 0 a x = 2π/b.

---

### 19

De acuerdo con el libro de Matemáticas, si el periodo de y = a sen bx es mayor que 2π, ¿qué representa?

- A. Un estiramiento horizontal de la curva básica
- B. Una contracción horizontal de la curva básica
- C. Un estiramiento vertical de la curva básica
- D. Una contracción vertical de la curva básica

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 174
**Subtema:** gráficas de seno y coseno · periodo

Si 0 < b < 1 el periodo de y = a sen bx es mayor que 2π y representa un estiramiento horizontal de la curva básica.

---

### 20

De conformidad con el libro de Matemáticas, si el periodo de y = a sen bx es menor que 2π, ¿qué representa?

- A. Una contracción horizontal de la curva básica
- B. Un estiramiento horizontal de la curva básica
- C. Una contracción vertical de la curva básica
- D. Un estiramiento vertical de la curva básica

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 174
**Subtema:** gráficas de seno y coseno · periodo

El periodo de y = a sen bx es menor que 2π y representa una contracción horizontal de la curva básica.

---

### 21

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cómo se divide un periodo-intervalo en cuatro partes iguales?

- A. Sumando sucesivamente el periodo entre cuatro, empezando por el punto extremo izquierdo del intervalo
- B. Sumando sucesivamente el periodo entre dos, empezando por el punto extremo izquierdo del intervalo
- C. Restando sucesivamente el periodo entre cuatro, empezando por el punto extremo derecho
- D. Multiplicando sucesivamente el periodo por cuatro

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 174
**Subtema:** gráficas de seno y coseno · puntos clave

En general, para dividir un periodo-intervalo en cuatro partes iguales, sucesivamente sume "periodo/4", empezando con el punto extremo izquierdo del intervalo.

---

### 22

De acuerdo con el libro de Matemáticas, ¿qué crea la constante c en las ecuaciones generales?

- A. Una traslación o desplazamiento horizontal de las curvas básicas
- B. Una traslación o desplazamiento vertical de las curvas básicas
- C. Un estiramiento vertical de las curvas básicas
- D. Una reflexión de las curvas básicas en el eje y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 175
**Subtema:** gráficas de seno y coseno · traslaciones

La constante c en las ecuaciones generales y = a sen(bx − c) y y = a cos(bx − c) crea una traslación (desplazamiento) horizontal de las curvas básicas.

---

### 23

De conformidad con el libro de Matemáticas, ¿cuál es el periodo de y = a sen(bx − c)?

- A. 2π/b
- B. 2π
- C. c/b
- D. 2πb

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 175
**Subtema:** gráficas de seno y coseno · periodo

Esto implica que el periodo de y = a sen(bx − c) es 2π/b.

---

### 24

En relación con el libro de Matemáticas, ¿cómo se llama el número c/b?

- A. El corrimiento de fase
- B. La amplitud
- C. El periodo
- D. El factor de escala

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 175
**Subtema:** gráficas de seno y coseno · corrimiento de fase

La gráfica de y = a sen bx está desplazada una cantidad c/b. El número c/b es el corrimiento de fase.

---

### 25

De acuerdo con el libro de Matemáticas, ¿cómo se determinan los puntos finales izquierdo y derecho de un intervalo de un ciclo?

- A. Resolviendo las ecuaciones bx − c = 0 y bx − c = 2π
- B. Resolviendo las ecuaciones bx + c = 0 y bx + c = 2π
- C. Resolviendo las ecuaciones bx = 0 y bx = 2π
- D. Resolviendo las ecuaciones x − c = 0 y x − c = 2π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 175
**Subtema:** gráficas de seno y coseno · traslaciones

Los puntos finales izquierdo y derecho de un intervalo de un ciclo se pueden determinar si se resuelven las ecuaciones bx − c = 0 y bx − c = 2π.

---

## Sub-lote 3 · Traslaciones verticales — cierra el 2.6 (p. 176)

### 26

De conformidad con el libro de Matemáticas, ¿en qué resulta la constante d de las ecuaciones y = d + a sen(bx − c) y y = d + a cos(bx − c)?

- A. En traslaciones verticales de las curvas básicas
- B. En traslaciones horizontales de las curvas básicas
- C. En un estiramiento vertical de las curvas básicas
- D. En una reflexión de las curvas básicas en el eje x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 176
**Subtema:** gráficas de seno y coseno · traslaciones verticales

La constante d en las ecuaciones y = d + a sen(bx − c) y y = d + a cos(bx − c) resulta en traslaciones verticales de las curvas básicas.

---

### 27

En relación con el libro de Matemáticas, ¿hacia dónde es el desplazamiento según el signo de d?

- A. d unidades hacia arriba para d > 0 y d unidades hacia abajo para d < 0
- B. d unidades hacia abajo para d > 0 y d unidades hacia arriba para d < 0
- C. d unidades hacia la derecha para d > 0 y hacia la izquierda para d < 0
- D. d unidades hacia arriba en los dos casos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 176
**Subtema:** gráficas de seno y coseno · traslaciones verticales

El desplazamiento es d unidades hacia arriba para d > 0 y d unidades hacia abajo para d < 0.

---

### 28

De acuerdo con el libro de Matemáticas, con una traslación vertical, ¿alrededor de qué oscila la gráfica?

- A. Alrededor de una recta horizontal, en lugar de alrededor del eje x
- B. Alrededor del eje x, como la curva básica
- C. Alrededor de una recta vertical, en lugar de alrededor del eje y
- D. Alrededor del origen

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 176
**Subtema:** gráficas de seno y coseno · traslaciones verticales

En otras palabras, la gráfica oscila alrededor de la recta horizontal en lugar de alrededor del eje x.

---
