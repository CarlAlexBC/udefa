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

- **p. 207, punto 1 del `Resumen (sección 2.9)`:** dice "aplicaciones de la vida real de **triángulos correctos**"; son **triángulos rectángulos** (*right triangles* mal traducido). El `Resumen` queda fuera por norma.
- **Nota de consistencia, p. 204:** el libro escribe el Oeste de dos maneras en la misma sección, "N 80° **W**" en la prosa y las figuras, y "N 54° **O**" en el ejemplo 5. No es un error de contenido, pero conviene saberlo: el reactivo 33 usa la grafía de la prosa, que es la que el aspirante lee al estudiar la definición.

- **p. 254, párrafo de los cuatro casos: frase que no cierra.** El libro imprime "es necesario saber la medida de al menos un lado y cualesquiera otras dos medidas del triángulo, **ya sean dos lados, dos ángulos y un ángulo**". La enumeración está rota: debería decir "dos lados, dos ángulos, **o un lado y un ángulo**". **No se escribe reactivo sobre esa frase**; los cuatro casos sí llevan reactivos porque la lista numerada que sigue está bien.

- **p. 264, recuadro `COMENTARIO`: dice "ángulos" donde debe decir "lados", dos veces.** El libro imprime: *"Cuando resuelva un triángulo oblicuángulo, dados **tres ángulos**, use la forma alternativa de la Ley de cosenos […]. Cuando resuelva un triángulo oblicuángulo, dados **dos ángulos y su ángulo incluido**, use la forma estándar […]"*. Los dos casos de la Ley de cosenos son **LLL (tres lados)** y **LAL (dos lados y su ángulo incluido)**, como la propia introducción de la p. 263 dice bien. Con tres ángulos un triángulo ni siquiera queda determinado. **Verificado con recorte de la hoja renderizada**, no es basura de la extracción. **Este `COMENTARIO` no lleva reactivo**, aunque sea uno de los que traen matemáticas, precisamente porque lo que dice es falso.

Los `EJEMPLO` y el `Resumen` quedan fuera por norma, así que ninguno de estos defectos afecta a un reactivo.

## Cobertura actual

**CERRADO.** El **capítulo 2 está completo** en **82 reactivos**, con los cinco subtemas que pide el temario:

- Cubiertas las páginas impresas **171 y 172**: la curva senoidal y el ciclo, el dominio, el rango y el periodo de las funciones seno y coseno, sus simetrías y el hecho de que el seno es impar y el coseno par, y los cinco puntos clave de un periodo. El `TECNOLOGÍA` de las graficadoras no lleva reactivos.
- Cubiertas las páginas impresas **173, 174 y 175**: *Amplitud y periodo* (las formas generales `y = d + a sen(bx − c)` y `y = d + a cos(bx − c)`, el factor de escala, qué pasa según el valor de |a|, la *Definición de amplitud de curvas seno y coseno* y el rango para a > 0), el efecto de b sobre el periodo (el ciclo de 0 a 2π/b, el estiramiento y la contracción horizontales) con el `COMENTARIO` de dividir el periodo-intervalo, la reflexión en el eje x, y las *Traslaciones de curvas seno y coseno* (la constante c, el periodo 2π/b, el **corrimiento de fase** c/b y las ecuaciones `bx − c = 0` y `bx − c = 2π` para los puntos finales). Los `EJEMPLO 2` a `EJEMPLO 4` no llevan reactivos.
- Cubierta la página impresa **176**, con la que **cierra el 2.6**: las *traslaciones verticales* que produce la constante d (hacia arriba para d > 0 y hacia abajo para d < 0) y que la gráfica pasa a oscilar alrededor de una recta horizontal en lugar del eje x. Los `EJEMPLO 5` y `EJEMPLO 6` no llevan reactivos. La **p. 177 tampoco**: es el `EJEMPLO 7` (profundidades del agua en un muelle) más el `Resumen (sección 2.6)`. Las **pp. 178–181 son el bloque `2.6 Ejercicios`**.

- Cubiertas las páginas impresas **202, 204 y 205**, con las que **cierra el 2.9 · Aplicaciones y modelos**: cómo se denotan ángulos y lados del triángulo rectángulo en la sección, *Trigonometría y rumbo* (qué mide un rumbo, cómo se leen S 35° E y N 80° W, y el `COMENTARIO` de que en **navegación aérea** los rumbos se miden en el sentido de las manecillas del reloj desde el Norte) y *Movimiento armónico* (periodo, amplitud y frecuencia, y la *Definición de movimiento armónico simple* con ω > 0, amplitud |a|, periodo 2π/ω y frecuencia ω/2π). La **p. 203 no lleva reactivos** (es íntegramente `EJEMPLO 3` y `EJEMPLO 4`), ni las **pp. 206–207** (`EJEMPLO 6`, `EJEMPLO 7` y el `Resumen`). Las **pp. 208–211 son el bloque `2.9 Ejercicios`**.

- Cubierta la página impresa **212**, arranque del **2.10 · Uso de identidades fundamentales**: los cuatro usos que se le darán a las identidades, el recuadro *Identidades trigonométricas fundamentales* completo —recíprocas, cociente, pitagóricas, de cofunción y par/impar—, la forma de radical de las pitagóricas y el `COMENTARIO` de que u puede ser un ángulo, un número real o una variable. Es la página más densa del capítulo y se leyó **renderizada**: la extracción destruye todo el recuadro.

- Cubiertas las páginas impresas **213 y 214**, con las que **cierra el 2.10**: que una aplicación común de las identidades es evaluar unas funciones a partir de otras, y las dos estrategias de trabajo (buscar una forma especial de factorización que se ajuste a la expresión, y reescribirla primero en términos de una sola función o sólo de seno y coseno). Las **pp. 215 y 216 no llevan reactivos**: son `EJEMPLO 6` a `EJEMPLO 9` (incluida la sustitución trigonométrica) más el `Resumen (sección 2.10)`. Las **pp. 217–218 son el bloque `2.10 Ejercicios`**.

- Cubiertas las páginas impresas **254, 255, 256 y 258**, con las que **cierra la 2.15 · Ley de senos**: qué es un triángulo oblicuángulo y la notación estándar, los **cuatro casos** (AAL o ALA, LLA, LLL y LAL) y cuáles resuelve cada ley, el recuadro *Ley de senos* y su **forma recíproca**, la nota histórica del **Monte Everest**, el **caso ambiguo** LLA con sus tres situaciones posibles, y el **área de un triángulo oblicuángulo** con lo que ocurre cuando el ángulo es de 90°. La **p. 257 no lleva reactivos** (es íntegramente `EJEMPLO 4` y `EJEMPLO 5`) ni la **p. 259** (`EJEMPLO 7` del curso del bote más el `Resumen`). Las **pp. 260–262 son el bloque `2.15 Ejercicios`**.

- Cubiertas las páginas impresas **263, 264 y 266**, con las que **cierra la 2.16 · Ley de cosenos y con ella el capítulo 2**: por qué los casos LLL y LAL necesitan esta ley, el recuadro *Ley de cosenos* en sus **dos formas** (estándar y alternativa), la estrategia de buscar primero el ángulo opuesto al lado más largo, lo que el signo del coseno dice sobre el ángulo, y la *Fórmula del área de Herón* con su semiperímetro y la `NOTA HISTÓRICA` de Herón de Alejandría. La **p. 265 no lleva reactivos** (`EJEMPLO 3` del softbol y `EJEMPLO 4` del barco). Las **pp. 267–270 son el bloque `2.16 Ejercicios`**.

**Pendiente:** ninguno; el **capítulo 2 está CERRADO** en **82 reactivos**, con los cinco subtemas que pide el temario `MATE-03-2026`: **2.6**, **2.9**, **2.10**, **2.15** y **2.16**. **Matemáticas (Larson) NO está cerrada:** falta el **capítulo 3 · Fundamentos de geometría analítica**, que el temario pide **completo** (§3.1–§3.6, pp. 271–328), en su propio archivo.

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

## Sub-lote 4 · Rumbos y movimiento armónico — cierra el 2.9 (pp. 202–205)

### 29

De conformidad con el libro de Matemáticas, en esta sección, ¿cómo se denotan los ángulos y los lados de un triángulo rectángulo?

- A. Los ángulos con A, B y C, donde C es el ángulo recto; los lados con a, b y c, donde c es la hipotenusa
- B. Los ángulos con A, B y C, donde A es el ángulo recto; los lados con a, b y c, donde a es la hipotenusa
- C. Los ángulos con a, b y c; los lados con A, B y C
- D. Los ángulos con A, B y C, donde B es el ángulo recto; los lados con a, b y c, donde b es la hipotenusa

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 202
**Subtema:** aplicaciones y modelos · triángulos rectángulos

En esta sección, los tres ángulos de un triángulo rectángulo están denotados por las letras A, B y C (donde C es el ángulo recto), y las longitudes de los lados opuestos a estos ángulos, por las letras a, b y c (donde c es la hipotenusa).

---

### 30

En relación con el libro de Matemáticas, en topografía y navegación, ¿en qué términos pueden darse las direcciones?

- A. En términos de rumbo
- B. En términos de amplitud
- C. En términos de frecuencia
- D. En términos de corrimiento de fase

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 204
**Subtema:** aplicaciones y modelos · rumbo

En topografía y navegación, las direcciones pueden darse en términos de rumbo.

---

### 31

De acuerdo con el libro de Matemáticas, ¿qué mide un rumbo?

- A. El ángulo agudo que forma una trayectoria o línea recta de Norte-Sur
- B. El ángulo obtuso que forma una trayectoria o línea recta de Norte-Sur
- C. El ángulo recto que forma una trayectoria con la línea Este-Oeste
- D. La distancia recorrida a lo largo de la línea Norte-Sur

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 204
**Subtema:** aplicaciones y modelos · rumbo

Un rumbo mide el ángulo agudo que forma una trayectoria o línea recta de Norte-Sur.

---

### 32

De conformidad con el libro de Matemáticas, ¿qué significa el rumbo S 35° E?

- A. 35 grados al Este del Sur
- B. 35 grados al Sur del Este
- C. 35 grados al Oeste del Sur
- D. 35 grados al Este del Norte

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 204
**Subtema:** aplicaciones y modelos · rumbo

Por ejemplo, el rumbo S 35° E significa 35 grados al Este del Sur.

---

### 33

En relación con el libro de Matemáticas, ¿qué significa el rumbo N 80° W?

- A. 80 grados al Oeste del Norte
- B. 80 grados al Norte del Oeste
- C. 80 grados al Este del Norte
- D. 80 grados al Oeste del Sur

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 204
**Subtema:** aplicaciones y modelos · rumbo

N 80° W significa 80 grados al Oeste del Norte.

---

### 34

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cómo se miden los rumbos en navegación aérea?

- A. En grados en el sentido de las manecillas del reloj desde el Norte
- B. En grados en sentido contrario a las manecillas del reloj desde el Norte
- C. En grados en el sentido de las manecillas del reloj desde el Sur
- D. En grados agudos respecto de la línea Norte-Sur

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 204
**Subtema:** aplicaciones y modelos · rumbo en navegación aérea

En navegación aérea, los rumbos se miden en grados en el sentido de las manecillas del reloj desde el Norte.

---

### 35

De conformidad con el libro de Matemáticas, ¿para qué es útil la naturaleza periódica de las funciones trigonométricas?

- A. Para describir el movimiento de un punto en un objeto que vibra, oscila, gira o es desplazado por un movimiento ondulatorio
- B. Para describir el movimiento rectilíneo uniforme de cualquier objeto
- C. Para medir la distancia entre dos puntos de una recta
- D. Para calcular el área de figuras planas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

La naturaleza periódica de las funciones trigonométricas es útil para describir el movimiento de un punto en un objeto que vibra, oscila, gira o es desplazado por un movimiento ondulatorio.

---

### 36

En relación con el libro de Matemáticas, ¿qué es el periodo de un movimiento?

- A. El tiempo para un ciclo completo
- B. El desplazamiento máximo desde el equilibrio
- C. El número de ciclos por segundo
- D. La distancia entre dos máximos consecutivos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

El periodo (tiempo para un ciclo completo) del movimiento.

---

### 37

De acuerdo con el libro de Matemáticas, ¿qué es la amplitud de un movimiento?

- A. El desplazamiento máximo desde el equilibrio
- B. El tiempo para un ciclo completo
- C. El número de ciclos por segundo
- D. La mitad del periodo del movimiento

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

Su amplitud (desplazamiento máximo desde el equilibrio).

---

### 38

De conformidad con el libro de Matemáticas, ¿qué es la frecuencia de un movimiento?

- A. El número de ciclos por segundo
- B. El tiempo para un ciclo completo
- C. El desplazamiento máximo desde el equilibrio
- D. El número de segundos por ciclo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

Y su frecuencia (número de ciclos por segundo).

---

### 39

En relación con el libro de Matemáticas, ¿cómo se denomina el movimiento que puede ser descrito por una función seno o coseno?

- A. Movimiento armónico simple
- B. Movimiento ondulatorio compuesto
- C. Movimiento periódico uniforme
- D. Movimiento senoidal amortiguado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

El movimiento de esta naturaleza puede ser descrito por una función seno o coseno, y se denomina movimiento armónico simple.

---

### 40

De acuerdo con el libro de Matemáticas, en la definición de movimiento armónico simple, ¿qué condición debe cumplir ω?

- A. Que sea mayor que cero
- B. Que sea distinto de uno
- C. Que sea un número entero
- D. Que sea menor que cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

Donde a y ω son números reales, tales que ω > 0.

---

### 41

De conformidad con el libro de Matemáticas, en el movimiento armónico simple, ¿cuáles son la amplitud, el periodo y la frecuencia?

- A. Amplitud |a|, periodo 2π/ω y frecuencia ω/2π
- B. Amplitud |a|, periodo ω/2π y frecuencia 2π/ω
- C. Amplitud a², periodo 2π/ω y frecuencia ω/2π
- D. Amplitud |a|, periodo 2πω y frecuencia 1/2πω

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 205
**Subtema:** aplicaciones y modelos · movimiento armónico

El movimiento tiene amplitud |a|, periodo 2π/ω y frecuencia ω/2π.

---

## Sub-lote 5 · Identidades trigonométricas fundamentales (2.10, p. 212)

### 42

En relación con el libro de Matemáticas, ¿para qué cuatro cosas se aprenderá a usar las identidades fundamentales?

- A. Evaluar funciones trigonométricas, simplificar expresiones trigonométricas, desarrollar identidades adicionales y resolver ecuaciones trigonométricas
- B. Evaluar funciones trigonométricas, graficarlas, medir ángulos y resolver triángulos
- C. Simplificar expresiones, racionalizar denominadores, factorizar polinomios y resolver sistemas
- D. Desarrollar identidades adicionales, medir rumbos, calcular frecuencias y trazar curvas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · introducción

Aprenderemos a usar las identidades fundamentales para hacer lo siguiente. 1. Evaluar funciones trigonométricas. 2. Simplificar expresiones trigonométricas. 3. Desarrollar identidades trigonométricas adicionales. 4. Resolver ecuaciones trigonométricas.

---

### 43

De acuerdo con el libro de Matemáticas, según las identidades recíprocas, ¿a qué es igual sen u?

- A. A 1/csc u
- B. A 1/sec u
- C. A 1/cot u
- D. A 1/cos u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades recíprocas

Identidades recíprocas: sen u = 1/csc u.

---

### 44

De conformidad con el libro de Matemáticas, según las identidades recíprocas, ¿a qué es igual cot u?

- A. A 1/tan u
- B. A 1/sen u
- C. A 1/cos u
- D. A 1/sec u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades recíprocas

Identidades recíprocas: cot u = 1/tan u.

---

### 45

En relación con el libro de Matemáticas, según las identidades cociente, ¿a qué es igual tan u?

- A. A sen u / cos u
- B. A cos u / sen u
- C. A 1 / cos u
- D. A sen u · cos u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades cociente

Identidades cociente: tan u = sen u / cos u.

---

### 46

De acuerdo con el libro de Matemáticas, según las identidades cociente, ¿a qué es igual cot u?

- A. A cos u / sen u
- B. A sen u / cos u
- C. A 1 / sen u
- D. A cos u · sen u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades cociente

Identidades cociente: cot u = cos u / sen u.

---

### 47

De conformidad con el libro de Matemáticas, ¿cuál es la primera de las identidades pitagóricas?

- A. sen² u + cos² u = 1
- B. sen² u − cos² u = 1
- C. sen u + cos u = 1
- D. sen² u · cos² u = 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades pitagóricas

Identidades pitagóricas: sen² u + cos² u = 1.

---

### 48

En relación con el libro de Matemáticas, según las identidades pitagóricas, ¿a qué es igual 1 + tan² u?

- A. A sec² u
- B. A csc² u
- C. A cot² u
- D. A cos² u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades pitagóricas

Identidades pitagóricas: 1 + tan² u = sec² u.

---

### 49

De acuerdo con el libro de Matemáticas, según las identidades pitagóricas, ¿a qué es igual 1 + cot² u?

- A. A csc² u
- B. A sec² u
- C. A tan² u
- D. A sen² u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades pitagóricas

Identidades pitagóricas: 1 + cot² u = csc² u.

---

### 50

De conformidad con el libro de Matemáticas, según las identidades de cofunción, ¿a qué es igual sen(π/2 − u)?

- A. A cos u
- B. A sen u
- C. A cot u
- D. A csc u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades de cofunción

Identidades de cofunción: sen(π/2 − u) = cos u.

---

### 51

En relación con el libro de Matemáticas, según las identidades de cofunción, ¿a qué es igual tan(π/2 − u)?

- A. A cot u
- B. A tan u
- C. A sec u
- D. A cos u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades de cofunción

Identidades de cofunción: tan(π/2 − u) = cot u.

---

### 52

De acuerdo con el libro de Matemáticas, según las identidades par/impar, ¿a qué son iguales sen(−u) y cos(−u)?

- A. sen(−u) = −sen u y cos(−u) = cos u
- B. sen(−u) = sen u y cos(−u) = −cos u
- C. sen(−u) = −sen u y cos(−u) = −cos u
- D. sen(−u) = sen u y cos(−u) = cos u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades par/impar

Identidades par/impar: sen(−u) = −sen u; cos(−u) = cos u.

---

### 53

De conformidad con el libro de Matemáticas, ¿cómo se escriben a veces las identidades pitagóricas en forma de radical?

- A. sen u = ±√(1 − cos² u) o tan u = ±√(sec² u − 1), donde el signo depende de la elección de u
- B. sen u = √(1 + cos² u) o tan u = √(sec² u + 1), siempre con signo positivo
- C. sen u = ±√(1 + cos² u) o tan u = ±√(sec² u + 1), donde el signo depende de la elección de u
- D. sen u = ±√(cos² u − 1) o tan u = ±√(1 − sec² u), donde el signo depende de la elección de u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · identidades pitagóricas

Las identidades pitagóricas a veces se usan en forma de radical como sen u = ±√(1 − cos² u) o tan u = ±√(sec² u − 1), donde el signo depende de la elección de u.

---

### 54

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué puede ser u en las identidades trigonométricas fundamentales?

- A. Un ángulo, un número real o una variable
- B. Únicamente un ángulo
- C. Únicamente un número real
- D. Únicamente un ángulo agudo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 212
**Subtema:** identidades fundamentales · alcance de u

Observe que u puede ser un ángulo, un número real o una variable.

---

## Sub-lote 6 · Estrategias para evaluar, factorizar y simplificar — cierra el 2.10 (pp. 213–214)

### 55

De acuerdo con el libro de Matemáticas, ¿cuál es una aplicación común de las identidades trigonométricas?

- A. Usar valores dados de funciones trigonométricas para evaluar otras funciones trigonométricas
- B. Trazar la gráfica de cualquier función trigonométrica
- C. Medir el rumbo de una trayectoria
- D. Calcular el periodo de un movimiento armónico

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 213
**Subtema:** identidades fundamentales · evaluación de funciones

Una aplicación común de identidades trigonométricas es usar valores dados de funciones trigonométricas para evaluar otras funciones trigonométricas.

---

### 56

De conformidad con el libro de Matemáticas, al factorizar expresiones trigonométricas, ¿qué resulta útil?

- A. Encontrar una forma especial para factorizar polinomios que se ajuste a la expresión
- B. Convertir primero la expresión a grados
- C. Elevar al cuadrado los dos miembros de la expresión
- D. Sustituir la variable por un ángulo agudo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 214
**Subtema:** identidades fundamentales · factorización de expresiones

Cuando factorice expresiones trigonométricas, es útil encontrar una forma especial para factorizar polinomios que se ajuste a la expresión.

---

### 57

En relación con el libro de Matemáticas, ¿cómo puede hacerse mejor, en ocasiones, la operación de factorizar o de simplificar?

- A. Reescribiendo primero la expresión en términos de sólo una función trigonométrica, o sólo de seno y coseno
- B. Reescribiendo primero la expresión en términos de las seis funciones trigonométricas
- C. Sustituyendo primero la variable por su valor numérico
- D. Multiplicando primero la expresión por su conjugado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 214
**Subtema:** identidades fundamentales · simplificación de expresiones

En ocasiones, la operación de factorizar o de simplificar puede hacerse mejor si primero se reescribe la expresión en términos de sólo una función trigonométrica o en términos sólo de seno y coseno.

---

## Sub-lote 7 · Ley de senos — cierra el 2.15 (pp. 254–258)

### 58

De acuerdo con el libro de Matemáticas, ¿qué es un triángulo oblicuángulo?

- A. Aquel que no tiene ángulos rectos
- B. Aquel que tiene un ángulo recto
- C. Aquel que tiene dos ángulos rectos
- D. Aquel que tiene todos sus ángulos iguales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · triángulos oblicuángulos

En esta sección resolverá triángulos oblicuángulos, es decir, aquellos que no tienen ángulos rectos.

---

### 59

De conformidad con el libro de Matemáticas, ¿cuál es la notación estándar para los ángulos y los lados de un triángulo?

- A. Los ángulos se marcan como A, B y C, y sus lados opuestos como a, b y c
- B. Los ángulos se marcan como a, b y c, y sus lados opuestos como A, B y C
- C. Los ángulos se marcan como A, B y C, y sus lados adyacentes como a, b y c
- D. Los ángulos se marcan como α, β y γ, y sus lados opuestos como A, B y C

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · notación estándar

Como notación estándar, los ángulos de un triángulo se marcan como A, B y C, y sus lados opuestos como a, b y c.

---

### 60

En relación con el libro de Matemáticas, ¿en qué consiste el primer caso para resolver un triángulo oblicuángulo, llamado AAL o ALA?

- A. Dos ángulos y cualquier lado
- B. Dos lados y un ángulo opuesto a uno de ellos
- C. Tres lados
- D. Dos lados y su ángulo incluido

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · casos

1. Dos ángulos y cualquier lado (AAL o ALA).

---

### 61

De acuerdo con el libro de Matemáticas, ¿en qué consiste el segundo caso, llamado LLA?

- A. Dos lados y un ángulo opuesto a uno de ellos
- B. Dos lados y su ángulo incluido
- C. Dos ángulos y cualquier lado
- D. Tres lados

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · casos

2. Dos lados y un ángulo opuesto a uno de ellos (LLA).

---

### 62

De conformidad con el libro de Matemáticas, ¿en qué consiste el tercer caso, llamado LLL?

- A. Tres lados
- B. Tres ángulos
- C. Dos lados y su ángulo incluido
- D. Dos ángulos y cualquier lado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · casos

3. Tres lados (LLL).

---

### 63

En relación con el libro de Matemáticas, ¿en qué consiste el cuarto caso, llamado LAL?

- A. Dos lados y su ángulo incluido
- B. Dos lados y un ángulo opuesto a uno de ellos
- C. Dos ángulos y el lado entre ellos
- D. Tres lados

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · casos

4. Dos lados y su ángulo incluido (LAL).

---

### 64

De acuerdo con el libro de Matemáticas, ¿qué casos se resuelven con la Ley de senos y cuáles con la Ley de cosenos?

- A. Los dos primeros con la Ley de senos y los dos últimos con la Ley de cosenos
- B. Los dos primeros con la Ley de cosenos y los dos últimos con la Ley de senos
- C. Los cuatro con la Ley de senos
- D. El primero con la Ley de senos y los otros tres con la Ley de cosenos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · casos

Los primeros dos casos se pueden resolver usando la Ley de senos, mientras que los últimos dos requieren la Ley de cosenos.

---

### 65

De conformidad con el libro de Matemáticas, ¿qué establece la Ley de senos?

- A. a/sen A = b/sen B = c/sen C
- B. sen A/a = b/sen B = sen C/c
- C. a·sen A = b·sen B = c·sen C
- D. a/sen B = b/sen C = c/sen A

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · enunciado

Si ABC es un triángulo con lados a, b y c, entonces a/sen A = b/sen B = c/sen C.

---

### 66

En relación con el libro de Matemáticas, ¿cómo se escribe la Ley de senos en su forma recíproca?

- A. sen A/a = sen B/b = sen C/c
- B. a/sen A = b/sen B = c/sen C
- C. sen A·a = sen B·b = sen C·c
- D. sen A/b = sen B/c = sen C/a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 254
**Subtema:** ley de senos · forma recíproca

La Ley de senos también se puede escribir en la forma recíproca: sen A/a = sen B/b = sen C/c.

---

### 67

De acuerdo con el libro de Matemáticas, ¿en qué década usaron los topógrafos la Ley de senos para calcular la altura del Monte Everest, y con qué precisión?

- A. En la década de 1850, y su cálculo se encontraba a 10 m del valor actualmente aceptado
- B. En la década de 1750, y su cálculo se encontraba a 10 m del valor actualmente aceptado
- C. En la década de 1850, y su cálculo se encontraba a 100 m del valor actualmente aceptado
- D. En la década de 1950, y su cálculo se encontraba a 1 m del valor actualmente aceptado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 255
**Subtema:** ley de senos · nota histórica

En la década de 1850, los topógrafos utilizaron la Ley de senos para calcular la altura del Monte Everest. Su cálculo se encontraba a 10 m del valor actualmente aceptado.

---

### 68

De conformidad con el libro de Matemáticas, cuando se dan dos lados y un ángulo opuesto, ¿qué tres situaciones pueden ocurrir?

- A. Que no exista ese triángulo, que exista un triángulo, o que dos triángulos distintos satisfagan las condiciones
- B. Que no exista ese triángulo, que exista un triángulo, o que existan infinitos triángulos
- C. Que exista siempre un solo triángulo, uno rectángulo o uno equilátero
- D. Que exista un triángulo, dos triángulos o tres triángulos distintos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 256
**Subtema:** ley de senos · caso ambiguo

Si se dan dos lados y un ángulo opuesto pueden ocurrir tres posibles situaciones: 1) no existe ese triángulo, 2) existe un triángulo, o 3) dos triángulos distintos pueden satisfacer las condiciones.

---

### 69

En relación con el libro de Matemáticas, ¿cuál es el área de cualquier triángulo?

- A. La mitad del producto de las longitudes de dos lados por el seno del ángulo entre ellos
- B. El producto de las longitudes de dos lados por el seno del ángulo entre ellos
- C. La mitad del producto de las longitudes de dos lados por el coseno del ángulo entre ellos
- D. La mitad de la suma de las longitudes de dos lados por el seno del ángulo entre ellos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 258
**Subtema:** ley de senos · área de un triángulo oblicuángulo

El área de cualquier triángulo es la mitad del producto de las longitudes de dos lados por el seno del ángulo entre ellos.

---

### 70

De acuerdo con el libro de Matemáticas, ¿qué ocurre con esa fórmula del área cuando el ángulo A es de 90°?

- A. Que da el área de un triángulo rectángulo
- B. Que se vuelve igual a cero
- C. Que deja de ser aplicable
- D. Que da el doble del área real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 258
**Subtema:** ley de senos · área de un triángulo oblicuángulo

Observe que cuando el ángulo A es 90°, la fórmula da el área de un triángulo rectángulo.

---

## Sub-lote 8 · Ley de cosenos y fórmula de Herón — cierra el capítulo 2 (pp. 263–266)

### 71

De conformidad con el libro de Matemáticas, ¿en qué casos se usa la Ley de cosenos y por qué?

- A. En LLL y LAL, porque en ellos ninguna de las relaciones de la Ley de senos estaría completa
- B. En AAL y ALA, porque en ellos la Ley de senos no es exacta
- C. En LLA, porque es el único caso ambiguo
- D. En los cuatro casos, porque siempre es más precisa que la Ley de senos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 263
**Subtema:** ley de cosenos · casos

Si nos dan tres lados (LLL), o dos lados y un ángulo incluido (LAL), ninguna de las relaciones de la Ley de senos estaría completa. En tales casos se puede usar la Ley de cosenos.

---

### 72

En relación con el libro de Matemáticas, según la forma estándar de la Ley de cosenos, ¿a qué es igual a²?

- A. A b² + c² − 2bc cos A
- B. A b² + c² + 2bc cos A
- C. A b² − c² − 2bc cos A
- D. A b² + c² − 2bc sen A

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 263
**Subtema:** ley de cosenos · forma estándar

Forma estándar: a² = b² + c² − 2bc cos A.

---

### 73

De acuerdo con el libro de Matemáticas, según la forma estándar de la Ley de cosenos, ¿a qué es igual c²?

- A. A a² + b² − 2ab cos C
- B. A a² + b² − 2ab cos A
- C. A a² + c² − 2ac cos C
- D. A a² + b² + 2ab cos C

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 263
**Subtema:** ley de cosenos · forma estándar

Forma estándar: c² = a² + b² − 2ab cos C.

---

### 74

De conformidad con el libro de Matemáticas, según la forma alternativa de la Ley de cosenos, ¿a qué es igual cos A?

- A. A (b² + c² − a²) / 2bc
- B. A (a² + c² − b²) / 2ac
- C. A (a² + b² − c²) / 2ab
- D. A (b² + c² + a²) / 2bc

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 263
**Subtema:** ley de cosenos · forma alternativa

Forma alternativa: cos A = (b² + c² − a²) / 2bc.

---

### 75

En relación con el libro de Matemáticas, según la forma alternativa de la Ley de cosenos, ¿a qué es igual cos B?

- A. A (a² + c² − b²) / 2ac
- B. A (b² + c² − a²) / 2bc
- C. A (a² + b² − c²) / 2ab
- D. A (a² + c² − b²) / 2ab

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 263
**Subtema:** ley de cosenos · forma alternativa

Forma alternativa: cos B = (a² + c² − b²) / 2ac.

---

### 76

De acuerdo con el libro de Matemáticas, al resolver un triángulo del que se conocen los tres lados, ¿qué ángulo conviene encontrar primero?

- A. El ángulo opuesto al lado más largo
- B. El ángulo opuesto al lado más corto
- C. El ángulo formado por los dos lados mayores
- D. Cualquiera de los tres, es indistinto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 263
**Subtema:** ley de cosenos · estrategia

Es buena idea primero encontrar el ángulo opuesto al lado más largo.

---

### 77

De conformidad con el libro de Matemáticas, ¿qué se puede determinar si se conoce el coseno de un ángulo?

- A. Si el ángulo es agudo u obtuso
- B. Si el ángulo es recto o llano
- C. La longitud del lado opuesto
- D. El área del triángulo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 264
**Subtema:** ley de cosenos · signo del coseno

Si se conoce el coseno de un ángulo se puede determinar si éste es agudo u obtuso.

---

### 78

En relación con el libro de Matemáticas, si el ángulo mayor de un triángulo es agudo, ¿qué ocurre con los dos ángulos restantes?

- A. Que también son agudos
- B. Que uno es obtuso y el otro agudo
- C. Que los dos son obtusos
- D. Que uno de ellos es recto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 264
**Subtema:** ley de cosenos · signo del coseno

Además, si el ángulo mayor es agudo, entonces los dos ángulos restantes también lo son.

---

### 79

De acuerdo con el libro de Matemáticas, ¿en honor a quién recibe su nombre la fórmula del área de Herón?

- A. Del matemático griego Herón (10-75 a.C.)
- B. Del matemático griego Herón (10-75 d.C.)
- C. Del matemático romano Herón (10-75 a.C.)
- D. Del matemático griego Hierón (100-175 a.C.)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 266
**Subtema:** ley de cosenos · fórmula de Herón

Esta fórmula recibe el nombre de fórmula del área de Herón en honor al matemático griego Herón (10-75 a.C.).

---

### 80

De conformidad con el libro de Matemáticas, ¿cuál es la fórmula del área de Herón?

- A. Área = √(s(s − a)(s − b)(s − c))
- B. Área = √(s(s + a)(s + b)(s + c))
- C. Área = s(s − a)(s − b)(s − c)
- D. Área = √((s − a)(s − b)(s − c))

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 266
**Subtema:** ley de cosenos · fórmula de Herón

Dado cualquier triángulo con lados de longitudes a, b y c, área del triángulo es Área = √(s(s − a)(s − b)(s − c)).

---

### 81

En relación con el libro de Matemáticas, en la fórmula del área de Herón, ¿a qué es igual s?

- A. A (a + b + c) / 2
- B. A (a + b + c) / 3
- C. A a + b + c
- D. A (a · b · c) / 2

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 266
**Subtema:** ley de cosenos · fórmula de Herón

Donde s = (a + b + c) / 2.

---

### 82

De acuerdo con el libro de Matemáticas, ¿qué describen las obras de Herón de Alejandría?

- A. La forma de encontrar áreas de triángulos, cuadriláteros, polígonos regulares con 3 a 12 lados y círculos, y las áreas superficiales y volúmenes de objetos tridimensionales
- B. La forma de encontrar únicamente el área de triángulos y círculos
- C. La forma de resolver ecuaciones de segundo grado y sistemas lineales
- D. La forma de medir ángulos con instrumentos de topografía

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 266
**Subtema:** ley de cosenos · nota histórica

Sus obras describen la forma de encontrar las áreas de triángulos, cuadriláteros, polígonos regulares con 3 a 12 lados y círculos, así como las áreas superficiales y volúmenes de objetos tridimensionales.

---
