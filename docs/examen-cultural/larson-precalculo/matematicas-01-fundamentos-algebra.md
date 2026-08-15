# Matemáticas · Capítulo 1 · Fundamentos de álgebra

**Plantel:** Escuela Militar de Especialistas de Fuerza Aérea (EMEFA) · **Materia:** `MATE-03-2026`
**Aplica a:** Controlador de Vuelo (Lic. en Aeronáutica Mil.) y Meteorólogo (Lic. en Meteorología Mil.) — los dos temarios piden exactamente lo mismo de este libro.

> El reactivo pertenece al **libro** (`larson-precalculo`), no al plantel: cualquier temario que llame a este capítulo de Larson lo reutiliza.

## Libro

Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, **primera edición**.

**Edición verificada** contra la página legal (hoja 3 del PDF): "Precálculo. Introducción a las matemáticas universitarias. **Primera edición**. Ron Larson", Cengage Learning Editores, S.A. de C.V. La línea de impresión termina en "…20 21 19 18", de donde sale el **2018**. Coincide con lo que declara el temario (`Ron Larson, Edit. Cengage Learning, 1/a. Edición 2018`).

## Alcance del temario

El temario `MATE-03-2026` de la EMEFA pide de este libro:

- **Capítulo 1 · Fundamentos de álgebra** — sólo **1.3, 1.4, 1.6, 1.8, 1.9, 1.10 y 1.11** (este archivo).
- **Capítulo 2 · Fundamentos de trigonometría** — sólo **2.6, 2.9, 2.10, 2.15 y 2.16** (otro archivo).
- **Capítulo 3 · Fundamentos de geometría analítica — COMPLETO** (§3.1 a §3.6, pp. 271–328; otro archivo).

**Quedan fuera del capítulo 1** los subtemas **1.1, 1.2, 1.5, 1.7, 1.12 y 1.13**: el temario no los pide y no llevan reactivos.

| Subtema que sí entra | Páginas impresas |
|---|---|
| 1.3 Exponentes y radicales | 18–29 |
| 1.4 Polinomios y factorización | 30–39 |
| 1.6 Resolución de ecuaciones | 50–62 |
| 1.8 Propiedades de los logaritmos | 72–78 |
| 1.9 Ecuaciones exponenciales y logarítmicas | 79–88 |
| 1.10 Sistemas de ecuaciones lineales y no lineales | 89–98 |
| 1.11 Sistemas lineales de dos variables | 99–110 |

## Método y desfase

El PDF **sí trae capa de texto y la prosa sale limpia**, pero **las matemáticas se aplanan al extraerlas**: los exponentes pierden la altura (`a⁵` sale como `a5`), las fracciones se parten en dos renglones y, en algunos párrafos, **los signos desaparecen** (la p. 19 sale como "(2)4 y 24" donde el libro imprime `(−2)⁴` y `−2⁴`). Además, los bloques en tipografía de display —portada, página legal, títulos de crédito— salen **cifrados con un corrimiento fijo** (`3ULPHUDHGLFLµQ` = "Primera edición") y **ahí los dígitos se pierden por completo**.

Por eso, en este libro: **la prosa se toma del extractor y toda fórmula, signo o exponente se lee de la hoja renderizada** (`render.py`), nunca de la extracción directa. Es el mismo trato que se le dio al Zill.

**Desfase:** **hoja del PDF = página impresa + 9**. Leído de la hoja en cuatro puntos, **nunca calculado**: hoja 27 = p. 18 (arranque de 1.3), hoja 141 = p. 132 (arranque de 2.1), hoja 281 = p. 272 (arranque de 3.1) y hoja 337 = p. 328 (última página impresa del libro).

## Criterio de este capítulo

Recuerdo literal (Anexo "H"): la correcta y la justificación son cita del libro. Se caza el **dato olvidable** —la condición exacta, el nombre de la propiedad, cómo se lee una notación—, no lo obvio. Los mejores distractores salen del mismo recuadro. La correcta se escribe siempre en **A**; el importador baraja.

**Teoría sí, ejercicios no** (misma norma que Baldor y Zill): entran los recuadros de definiciones y de propiedades y la prosa que las explica. **No llevan reactivos** los bloques `EJEMPLO`, `Punto de repaso`, `Ejercicios`, `¿Cómo lo ve?`, `Proyecto`, `TECNOLOGÍA` ni los pies de foto que remiten a un ejercicio.

**El dato olvidable tiene que ser DEL TEMA — regla de Carlo, 14 ago 2026.** Que un dato esté escondido en la página no basta para merecer un reactivo: además tiene que enseñar algo de la materia. **Quedan fuera los datos insignificantes o ajenos al tema del capítulo**, aunque sean cita textual del libro: notas de redacción o de lengua (el plural de una palabra), consejos de estudio y comentarios sobre cómo abordar un problema. Un reactivo así mide si el aspirante leyó un paréntesis, no si sabe matemáticas, y en el examen real nadie lo preguntaría. **Aplicado el 14 ago 2026:** se retiraron de este archivo tres reactivos —el plural de "índice" (p. 22) y dos del recuadro `COMENTARIO` de la p. 20 sobre cuántas maneras hay de resolver un problema y qué pasos conviene seguir—, y se renumeró de corrido. Sí entran los `COMENTARIO` que traen matemáticas de verdad (la forma fraccionaria de la propiedad 3, o que la expresión original y la simplificada deben estar definidas para los mismos valores de la variable).

## Erratas del libro — no se escriben reactivos sobre ellas

- **p. 19, recuadro `TECNOLOGÍA`:** el texto dice "he aquí cómo se evaluaría **(−2)²** en una graficadora", pero enseguida imprime la secuencia de teclas `( (−) 2 ) ^ 4 ENTER` y afirma que "el resultado exhibido será 16". Con exponente 2 el resultado sería 4: el enunciado debía decir **(−2)⁴**. Verificado sobre la hoja renderizada, no es suciedad de la extracción. El recuadro `TECNOLOGÍA` de todos modos queda fuera por norma.
- **p. 21, arranque de "Notación científica":** el libro dice que "hay alrededor de **1 385 miles de millones** de litros de agua en la Tierra, es decir **1 385 seguido por 18 ceros**". Las dos cifras no coinciden: 1 385 miles de millones es 1 385 seguido de **9** ceros. La que cuadra con los 18 ceros es la que el propio libro escribe enseguida, **1.385 × 10²¹**, así que el desliz está en el nombre del número (se perdió un "miles de millones" al traducir). **No se escribe ningún reactivo que empareje las dos cifras**; el reactivo 24 pregunta sólo por la notación científica, que sí es consistente.

## Cobertura actual

**EN CURSO.** Escritas las páginas impresas **18 a 22** de **1.3 · Exponentes y radicales**:

- Cubierta la página impresa **18**: la multiplicación repetida en forma exponencial, el recuadro *Notación exponencial* y el recuadro *Propiedades de los exponentes* con sus ocho propiedades. Los objetivos de la sección y el pie de foto que remite al ejercicio 69 no llevan reactivos.
- Cubiertas las páginas impresas **19 y 20**: el alcance de las propiedades a todos los enteros, la distinción entre `(−2)⁴` y `−2⁴`, y del recuadro *COMENTARIO* **sólo la forma fraccionaria de la propiedad 3** (su consejo de estudio queda fuera por la regla del dato del tema). Los `EJEMPLO 1` a `EJEMPLO 4`, los `Punto de repaso` y el recuadro `TECNOLOGÍA` no llevan reactivos por norma.
- Cubierta la página impresa **21**: el apartado *Notación científica* completo (la forma `±c × 10ⁿ`, lo que indican el exponente positivo y el negativo, y la masa del electrón). Los `EJEMPLO 5` a `EJEMPLO 7` y el `TECNOLOGÍA` de las calculadoras no llevan reactivos.
- Cubierta la página impresa **22**: el apartado *Radicales y sus propiedades* —raíz cuadrada y cúbica, el recuadro *Definición de la raíz enésima de un número*, el recuadro *Principal raíz enésima de un número* (índice y radicando; **el plural de "índice" queda fuera** por la regla del dato del tema) y el malentendido del signo de raíz cuadrada—. El `EJEMPLO 8` no lleva reactivos.
- Cubierta la página impresa **23**: la tabla *Generalizaciones sobre raíces enésimas de números reales* (sus cuatro casos), los cuadrados y cubos perfectos, y el recuadro *Propiedades de los radicales* con sus seis propiedades y el uso común de la 6. El `EJEMPLO 9` no lleva reactivos.
- Cubierta la página impresa **24**: *Simplificación de expresiones radicales* (las tres condiciones de la forma más simple, la racionalización del denominador y cómo se factoriza el radicando), la combinación de radicales iguales y el recuadro *COMENTARIO*. Los `EJEMPLO 10` y `EJEMPLO 11` no llevan reactivos.

**Pendiente:** EN CURSO. Sigue desde la página impresa **25**, con la racionalización de denominadores y numeradores y los exponentes racionales, hasta cerrar el **1.3** en la **p. 29**. Después faltan los otros seis subtemas que pide el temario —**1.4** (p. 30), **1.6** (p. 50), **1.8** (p. 72), **1.9** (p. 79), **1.10** (p. 89) y **1.11** (p. 99)—, y luego los otros dos capítulos del temario, cada uno en su archivo: el **2** (2.6, 2.9, 2.10, 2.15 y 2.16) y el **3** completo.

---

## Sub-lote 1 · Notación exponencial y propiedades de los exponentes (1.3, p. 18)

### 1

De acuerdo con el libro de Matemáticas, ¿qué es lo que puede escribirse en forma exponencial?

- A. La multiplicación repetida
- B. La suma repetida
- C. La división repetida
- D. La resta repetida

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · forma exponencial

La multiplicación repetida puede escribirse en forma exponencial.

---

### 2

De conformidad con el libro de Matemáticas, ¿cuál es la forma exponencial del producto a · a · a · a · a?

- A. a⁵
- B. a⁴
- C. a⁶
- D. a¹⁰

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · forma exponencial

Multiplicación repetida: a · a · a · a · a. Forma exponencial: a⁵.

---

### 3

En relación con el libro de Matemáticas, ¿cuál es la forma exponencial del producto (−4)(−4)(−4)?

- A. (−4)³
- B. (−4)⁴
- C. (−4)²
- D. (−4)⁶

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · forma exponencial

Multiplicación repetida: (−4)(−4)(−4). Forma exponencial: (−4)³.

---

### 4

De acuerdo con el libro de Matemáticas, en el recuadro de la notación exponencial, ¿qué debe ser n?

- A. Un entero positivo
- B. Un entero negativo
- C. Un número real cualquiera
- D. Un número racional positivo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · notación exponencial

Si a es un número real y n es un entero positivo, entonces: aⁿ = a · a · a · · · a.

---

### 5

De conformidad con el libro de Matemáticas, en el recuadro de la notación exponencial, ¿qué debe ser a?

- A. Un número real
- B. Un entero positivo
- C. Un número natural
- D. Un número irracional

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · notación exponencial

Si a es un número real y n es un entero positivo, entonces: aⁿ = a · a · a · · · a.

---

### 6

En relación con el libro de Matemáticas, en la expresión aⁿ, ¿cómo se llaman n y a, respectivamente?

- A. n es el exponente y a es la base
- B. n es la base y a es el exponente
- C. n es el coeficiente y a es la potencia
- D. n es el factor y a es el índice

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · notación exponencial

Donde n es el exponente y a es la base.

---

### 7

De acuerdo con el libro de Matemáticas, ¿cómo se lee aⁿ?

- A. Como "a a la enésima potencia"
- B. Como "a a la enésima raíz"
- C. Como "a multiplicado por n"
- D. Como "a en la enésima base"

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · notación exponencial

Se lee aⁿ como "a a la enésima potencia".

---

### 8

De conformidad con el libro de Matemáticas, en la notación exponencial aⁿ = a · a · a · · · a, ¿cuántos factores tiene el producto?

- A. n factores
- B. n − 1 factores
- C. n + 1 factores
- D. a factores

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · notación exponencial

aⁿ = a · a · a · · · a, n factores.

---

### 9

En relación con el libro de Matemáticas, además de positivo, ¿qué otra cosa puede ser un exponente?

- A. Negativo o igual a cero
- B. Únicamente fraccionario
- C. Sólo un número irracional
- D. Sólo mayor que uno

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · exponentes negativos y de cero

Un exponente también puede ser negativo o igual a cero.

---

### 10

De acuerdo con el libro de Matemáticas, ¿cuáles de las propiedades de los exponentes muestran cómo usar exponentes negativos y de cero?

- A. Las propiedades 3 y 4
- B. Las propiedades 1 y 2
- C. Las propiedades 5 y 6
- D. Las propiedades 7 y 8

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · exponentes negativos y de cero

Las propiedades 3 y 4 de abajo muestran cómo usar exponentes negativos y de cero.

---

### 11

De conformidad con el libro de Matemáticas, en el recuadro de las propiedades de los exponentes, ¿qué pueden ser a y b?

- A. Números reales, variables o expresiones algebraicas
- B. Sólo números reales
- C. Sólo enteros positivos
- D. Únicamente variables

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · propiedades de los exponentes

Sean a y b números reales, variables o expresiones algebraicas y sean m y n enteros.

---

### 12

En relación con el libro de Matemáticas, en el recuadro de las propiedades de los exponentes, ¿qué deben ser m y n?

- A. Enteros
- B. Números reales
- C. Enteros positivos
- D. Números racionales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · propiedades de los exponentes

Sean a y b números reales, variables o expresiones algebraicas y sean m y n enteros.

---

### 13

De acuerdo con el libro de Matemáticas, ¿qué condición pone el recuadro de las propiedades de los exponentes sobre los denominadores y las bases?

- A. Que todos los denominadores y bases son diferentes de cero
- B. Que todos los denominadores y bases son positivos
- C. Que todos los denominadores y bases son enteros
- D. Que todos los denominadores y bases son iguales entre sí

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · propiedades de los exponentes

(Todos los denominadores y bases son diferentes de cero.)

---

### 14

De conformidad con el libro de Matemáticas, según la propiedad 3 de los exponentes, ¿a qué es igual a⁻ⁿ?

- A. A 1/aⁿ, que a su vez es igual a (1/a)ⁿ
- B. A −aⁿ, que a su vez es igual a (−a)ⁿ
- C. A aⁿ⁻¹, que a su vez es igual a (a/1)ⁿ
- D. A n/a, que a su vez es igual a (n/a)ⁿ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · propiedades de los exponentes

3. a⁻ⁿ = 1/aⁿ = (1/a)ⁿ.

---

### 15

En relación con el libro de Matemáticas, según la propiedad 6 de los exponentes, ¿a qué es igual (aᵐ)ⁿ?

- A. A aᵐⁿ
- B. A aᵐ⁺ⁿ
- C. A aᵐ⁻ⁿ
- D. A aᵐ + aⁿ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · propiedades de los exponentes

6. (aᵐ)ⁿ = aᵐⁿ.

---

### 16

De acuerdo con el libro de Matemáticas, según la propiedad 8 de los exponentes, ¿a qué es igual |a²|?

- A. A |a|², que a su vez es igual a a²
- B. A |a|, que a su vez es igual a a
- C. A 2|a|, que a su vez es igual a 2a
- D. A |a|⁻², que a su vez es igual a 1/a²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 18
**Subtema:** exponentes y radicales · propiedades de los exponentes

8. |a²| = |a|² = a².

---

## Sub-lote 2 · Alcance de las propiedades y el signo en la base (1.3, pp. 19–20)

### 17

De conformidad con el libro de Matemáticas, ¿a qué enteros se aplican las propiedades de los exponentes enlistadas?

- A. A todos los enteros m y n, no sólo a los enteros positivos
- B. Sólo a los enteros positivos
- C. Sólo a los enteros negativos
- D. Sólo a los enteros distintos de cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 19
**Subtema:** exponentes y radicales · alcance de las propiedades

Las propiedades de los exponentes enlistadas anteriormente se aplican a todos los enteros m y n, no sólo a los enteros positivos.

---

### 18

En relación con el libro de Matemáticas, en la expresión (−2)⁴, ¿qué indica el paréntesis?

- A. Que el exponente se aplica al signo negativo tanto como al 2
- B. Que el exponente se aplica sólo al 2
- C. Que el exponente se aplica sólo al signo negativo
- D. Que el exponente debe multiplicarse por el signo negativo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 19
**Subtema:** exponentes y radicales · el signo en la base

En (−2)⁴, el paréntesis indica que el exponente se aplica al signo negativo tanto como al 2.

---

### 19

De acuerdo con el libro de Matemáticas, en la expresión −2⁴, ¿a qué se aplica el exponente?

- A. Sólo al 2
- B. Sólo al signo negativo
- C. Al signo negativo tanto como al 2
- D. Al resultado de la operación completa

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 19
**Subtema:** exponentes y radicales · el signo en la base

Mientras que en −2⁴ = −(2)⁴ el exponente se aplica sólo al 2.

---

### 20

De conformidad con el libro de Matemáticas, ¿cuánto valen (−2)⁴ y −2⁴, respectivamente?

- A. 16 y −16
- B. −16 y 16
- C. 16 y 16
- D. −16 y −16

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 19
**Subtema:** exponentes y radicales · el signo en la base

Así, (−2)⁴ = 16 y −2⁴ = −16.

---

### 21

En relación con el libro de Matemáticas, ¿cuál es la forma fraccionaria de la propiedad 3 de los exponentes?

- A. (a/b)⁻ᵐ = (b/a)ᵐ
- B. (a/b)⁻ᵐ = (a/b)ᵐ
- C. (a/b)⁻ᵐ = −(b/a)ᵐ
- D. (a/b)⁻ᵐ = (b/a)⁻ᵐ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 20
**Subtema:** exponentes y radicales · propiedades de los exponentes

Por ejemplo, la forma fraccionaria de la propiedad 3 es: (a/b)⁻ᵐ = (b/a)ᵐ.

---

## Sub-lote 3 · Notación científica (1.3, p. 21)

### 22

De acuerdo con el libro de Matemáticas, ¿qué brindan los exponentes?

- A. Una forma eficiente de escribir y calcular con números muy grandes o muy pequeños
- B. Una forma abreviada de escribir sumas muy largas
- C. Una forma de convertir números decimales en fracciones
- D. Una forma de comparar números enteros con números racionales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

Los exponentes brindan una forma eficiente de escribir y calcular con números muy grandes (o muy pequeños).

---

### 23

De conformidad con el libro de Matemáticas, ¿qué forma tiene la notación científica?

- A. ±c × 10ⁿ
- B. ±c × nⁿ
- C. ±10 × cⁿ
- D. ±c ÷ 10ⁿ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

Esta notación tiene la forma ±c × 10ⁿ, donde 1 ≤ c < 10 y n es un entero.

---

### 24

En relación con el libro de Matemáticas, ¿cómo se escribe en notación científica el número de litros de agua que hay en la Tierra?

- A. 1.385 × 10²¹
- B. 1.385 × 10¹⁸
- C. 1.385 × 10²⁴
- D. 1.385 × 10¹²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

El número de litros de agua en la Tierra, escrito en notación científica, es: 1.385 × 1,000,000,000,000,000,000,000 = 1.385 × 10²¹.

---

### 25

De acuerdo con el libro de Matemáticas, en la notación científica ±c × 10ⁿ, ¿entre qué valores debe estar c?

- A. 1 ≤ c < 10
- B. 0 < c ≤ 1
- C. 1 < c ≤ 100
- D. 0 ≤ c < 9

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

Esta notación tiene la forma ±c × 10ⁿ, donde 1 ≤ c < 10 y n es un entero.

---

### 26

De conformidad con el libro de Matemáticas, en la notación científica ±c × 10ⁿ, ¿qué debe ser n?

- A. Un entero
- B. Un entero positivo
- C. Un número real
- D. Un número racional

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

Esta notación tiene la forma ±c × 10ⁿ, donde 1 ≤ c < 10 y n es un entero.

---

### 27

En relación con el libro de Matemáticas, en notación científica, ¿qué indica un exponente positivo?

- A. Que el número es grande, de 10 o más
- B. Que el número es pequeño, menor que 1
- C. Que el número es negativo
- D. Que el número es un entero exacto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

El exponente positivo 21 indica que el número es grande (de 10 o más) y que el punto decimal se ha movido 21 lugares.

---

### 28

De acuerdo con el libro de Matemáticas, en notación científica, ¿qué indica un exponente negativo?

- A. Que el número es pequeño, menor que 1
- B. Que el número es grande, de 10 o más
- C. Que el número es negativo
- D. Que el número no es real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

Un exponente negativo indica que el número es pequeño (menor que 1).

---

### 29

De conformidad con el libro de Matemáticas, ¿cuál es aproximadamente la masa de un electrón, en gramos?

- A. 9.1 × 10⁻²⁸
- B. 9.1 × 10⁻²¹
- C. 9.1 × 10⁻¹⁸
- D. 9.1 × 10⁻³¹

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

Por ejemplo, la masa (en gramos) de un electrón es aproximadamente: 9.1 × 10⁻²⁸.

---

### 30

En relación con el libro de Matemáticas, al escribir en forma decimal la masa de un electrón, ¿cuántos lugares decimales se recorren?

- A. 28 lugares decimales
- B. 21 lugares decimales
- C. 18 lugares decimales
- D. 31 lugares decimales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 21
**Subtema:** exponentes y radicales · notación científica

9.1 × 10⁻²⁸ = 0.00000000000000000000000000091, 28 lugares decimales.

---

## Sub-lote 4 · Radicales y sus propiedades (1.3, p. 22)

### 31

De acuerdo con el libro de Matemáticas, ¿qué es la raíz cuadrada de un número?

- A. Uno de sus dos factores iguales
- B. Uno de sus tres factores iguales
- C. La mitad de ese número
- D. El número multiplicado por sí mismo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · radicales

La raíz cuadrada de un número es uno de sus dos factores iguales.

---

### 32

De conformidad con el libro de Matemáticas, ¿por qué 5 es una raíz cuadrada de 25?

- A. Porque 5 es uno de los dos factores iguales de 25
- B. Porque 5 es uno de los tres factores iguales de 25
- C. Porque 5 es la quinta parte de 25
- D. Porque 5 es el único divisor primo de 25

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · radicales

Por ejemplo, 5 es una raíz cuadrada de 25, porque 5 es uno de los dos factores iguales de 25.

---

### 33

En relación con el libro de Matemáticas, ¿qué es una raíz cúbica de un número?

- A. Uno de sus tres factores iguales
- B. Uno de sus dos factores iguales
- C. La tercera parte de ese número
- D. El número elevado al cubo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · radicales

En forma similar, una raíz cúbica de un número es uno de sus tres factores iguales, como en 125 = 5³.

---

### 34

De acuerdo con el libro de Matemáticas, en la definición de la raíz enésima de un número, ¿qué debe cumplir n?

- A. Ser un entero positivo mayor o igual que 2
- B. Ser un entero positivo mayor o igual que 1
- C. Ser cualquier número real distinto de cero
- D. Ser un entero positivo menor o igual que 10

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz enésima

Sean a y b números reales y sea n ≥ 2 un entero positivo.

---

### 35

De conformidad con el libro de Matemáticas, si a = bⁿ, ¿qué es b?

- A. Una raíz enésima de a
- B. El radicando de a
- C. El índice de a
- D. La potencia enésima de a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz enésima

Si a = bⁿ, entonces b es una raíz enésima de a.

---

### 36

En relación con el libro de Matemáticas, en la definición de la raíz enésima, ¿qué nombre recibe la raíz cuando n = 2 y cuando n = 3, respectivamente?

- A. Raíz cuadrada y raíz cúbica
- B. Raíz cúbica y raíz cuadrada
- C. Raíz principal y raíz secundaria
- D. Raíz par y raíz impar

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz enésima

Si n = 2, la raíz es una raíz cuadrada. Si n = 3, la raíz es una raíz cúbica.

---

### 37

De acuerdo con el libro de Matemáticas, ¿cuáles son las dos raíces cuadradas de 25?

- A. Tanto 5 como −5
- B. Tanto 5 como 1/5
- C. Tanto 25 como −25
- D. Tanto 5 como 0

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz principal

Algunos números tienen más de una raíz enésima. Por ejemplo, tanto 5 como −5 son raíces cuadradas de 25.

---

### 38

De conformidad con el libro de Matemáticas, ¿cuál es la raíz cuadrada principal de 25?

- A. La raíz positiva 5
- B. La raíz negativa −5
- C. Las dos raíces, 5 y −5
- D. La raíz 25

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz principal

La raíz cuadrada principal de 25, escrita como √25, es la raíz positiva 5.

---

### 39

En relación con el libro de Matemáticas, ¿qué signo tiene la principal raíz enésima de a?

- A. El mismo signo que a
- B. Siempre el signo positivo
- C. Siempre el signo negativo
- D. El signo contrario al de a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz principal

La principal raíz enésima de a es la raíz enésima que tiene el mismo signo que a.

---

### 40

De acuerdo con el libro de Matemáticas, ¿cómo se denota la principal raíz enésima?

- A. Con un símbolo radical
- B. Con un exponente negativo
- C. Con una barra horizontal
- D. Con un par de barras verticales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · raíz principal

Se denota con un símbolo radical.

---

### 41

De conformidad con el libro de Matemáticas, en un radical, ¿cómo se llama el entero positivo n ≥ 2?

- A. El índice del radical
- B. El radicando
- C. El exponente del radical
- D. El coeficiente del radical

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · índice y radicando

El entero positivo n ≥ 2 es el índice del radical y el número a es el radicando.

---

### 42

En relación con el libro de Matemáticas, en un radical, ¿cómo se llama el número a?

- A. El radicando
- B. El índice
- C. La base
- D. El exponente

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · índice y radicando

El entero positivo n ≥ 2 es el índice del radical y el número a es el radicando.

---

### 43

De acuerdo con el libro de Matemáticas, ¿qué se hace con el índice cuando n = 2?

- A. Se omite
- B. Se escribe siempre
- C. Se sustituye por un signo negativo
- D. Se escribe entre paréntesis

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · índice y radicando

Cuando n = 2, omita el índice y escriba √a en lugar de ²√a.

---

### 44

De conformidad con el libro de Matemáticas, ¿cuál es un malentendido frecuente sobre el signo de raíz cuadrada?

- A. Que implica raíces tanto negativas como positivas
- B. Que implica sólo raíces negativas
- C. Que sólo puede aplicarse a números enteros
- D. Que su índice siempre debe escribirse

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · signo de raíz cuadrada

Un frecuente malentendido es que el signo de raíz cuadrada implica raíces tanto negativas como positivas. Esto no es correcto.

---

### 45

En relación con el libro de Matemáticas, ¿qué implica realmente el signo de la raíz cuadrada?

- A. Sólo una raíz positiva
- B. Sólo una raíz negativa
- C. Dos raíces, una positiva y una negativa
- D. Tantas raíces como indique el radicando

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · signo de raíz cuadrada

El signo de la raíz cuadrada implica sólo una raíz positiva.

---

### 46

De acuerdo con el libro de Matemáticas, ¿qué se debe hacer cuando se necesita una raíz negativa?

- A. Usar el signo negativo con el signo de raíz cuadrada
- B. Escribir el índice 2 delante del radical
- C. Encerrar el radicando entre barras verticales
- D. Elevar el radicando a un exponente negativo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 22
**Subtema:** exponentes y radicales · signo de raíz cuadrada

Cuando se necesita una raíz negativa, se debe usar el signo negativo con el signo de raíz cuadrada.

---

## Sub-lote 5 · Generalizaciones y propiedades de los radicales (1.3, p. 23)

### 47

De conformidad con el libro de Matemáticas, según las generalizaciones sobre raíces enésimas, ¿qué raíces tiene un número real a mayor que cero cuando n es par?

- A. Dos: ⁿ√a y −ⁿ√a
- B. Una sola: ⁿ√a
- C. Una sola: −ⁿ√a
- D. Ninguna raíz real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · generalizaciones sobre raíces enésimas

Número real a: a > 0. Entero n > 0: n es par. Raíz o raíces de a: ⁿ√a, −ⁿ√a.

---

### 48

En relación con el libro de Matemáticas, según las generalizaciones sobre raíces enésimas, ¿qué raíz tiene un número real a cuando n es impar?

- A. Una sola: ⁿ√a
- B. Dos: ⁿ√a y −ⁿ√a
- C. Ninguna raíz real
- D. Tantas raíces como indique n

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · generalizaciones sobre raíces enésimas

Número real a: a > 0 o a < 0. Entero n > 0: n es impar. Raíz o raíces de a: ⁿ√a.

---

### 49

De acuerdo con el libro de Matemáticas, según las generalizaciones sobre raíces enésimas, ¿qué ocurre cuando a es menor que cero y n es par?

- A. No hay ninguna raíz real
- B. Hay dos raíces reales
- C. Hay una sola raíz real
- D. La raíz siempre es cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · generalizaciones sobre raíces enésimas

Número real a: a < 0. Entero n > 0: n es par. Raíz o raíces de a: ninguna raíz real.

---

### 50

De conformidad con el libro de Matemáticas, ¿qué ejemplo da la tabla de generalizaciones para el caso en que no hay ninguna raíz real?

- A. Que √−4 no es un número real
- B. Que ⁴√81 no es un número real
- C. Que ³√−8 no es un número real
- D. Que ⁵√0 no es un número real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · generalizaciones sobre raíces enésimas

Ejemplo: √−4 no es un número real.

---

### 51

En relación con el libro de Matemáticas, según las generalizaciones sobre raíces enésimas, ¿cuánto vale ⁿ√0?

- A. Cero, sea n par o impar
- B. Uno, sea n par o impar
- C. Cero sólo cuando n es par
- D. No tiene raíz real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · generalizaciones sobre raíces enésimas

Número real a: a = 0. Entero n > 0: n es par o impar. Raíz o raíces de a: ⁿ√0 = 0.

---

### 52

De acuerdo con el libro de Matemáticas, ¿por qué enteros como 1, 4, 9, 16, 25 y 36 son cuadrados perfectos?

- A. Porque tienen raíces cuadradas enteras
- B. Porque tienen raíces cúbicas enteras
- C. Porque son múltiplos de un cuadrado
- D. Porque se obtienen al elevar al cuadrado un número par

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · cuadrados y cubos perfectos

Enteros como 1, 4, 9, 16, 25 y 36 son cuadrados perfectos porque tienen raíces cuadradas enteras.

---

### 53

De conformidad con el libro de Matemáticas, ¿qué son enteros como 1, 8, 27, 64 y 125?

- A. Cubos perfectos, porque tienen raíces cúbicas enteras
- B. Cuadrados perfectos, porque tienen raíces cuadradas enteras
- C. Números primos, porque no tienen divisores enteros
- D. Radicales iguales, porque comparten el mismo índice

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · cuadrados y cubos perfectos

De igual forma, enteros como 1, 8, 27, 64 y 125 son cubos perfectos, porque tienen raíces cúbicas enteras.

---

### 54

En relación con el libro de Matemáticas, en el recuadro de las propiedades de los radicales, ¿qué deben ser m y n?

- A. Enteros positivos
- B. Enteros cualesquiera
- C. Números reales
- D. Números racionales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · propiedades de los radicales

Sean a y b números reales, variables o expresiones algebraicas, tales que las siguientes raíces son números reales y sean m y n enteros positivos.

---

### 55

De acuerdo con el libro de Matemáticas, según la propiedad 2 de los radicales, ¿a qué es igual ⁿ√a · ⁿ√b?

- A. A ⁿ√(ab)
- B. A ⁿ√(a + b)
- C. A ᵐⁿ√(ab)
- D. A ⁿ√(a/b)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · propiedades de los radicales

2. ⁿ√a · ⁿ√b = ⁿ√(ab).

---

### 56

De conformidad con el libro de Matemáticas, ¿qué condición acompaña a la propiedad 3 de los radicales?

- A. Que b sea distinto de cero
- B. Que a sea distinto de cero
- C. Que a y b sean positivos
- D. Que n sea par

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · propiedades de los radicales

3. ⁿ√a / ⁿ√b = ⁿ√(a/b), b ≠ 0.

---

### 57

En relación con el libro de Matemáticas, según la propiedad 5 de los radicales, ¿a qué es igual (ⁿ√a)ⁿ?

- A. A a
- B. A |a|
- C. A aⁿ
- D. A ⁿ√a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · propiedades de los radicales

5. (ⁿ√a)ⁿ = a.

---

### 58

De acuerdo con el libro de Matemáticas, según la propiedad 6 de los radicales, ¿a qué es igual ⁿ√(aⁿ) cuando n es par y cuando n es impar, respectivamente?

- A. A |a| y a a
- B. A a y a |a|
- C. A |a| en los dos casos
- D. A a en los dos casos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · propiedades de los radicales

6. Para n par, ⁿ√(aⁿ) = |a|. Para n impar, ⁿ√(aⁿ) = a.

---

### 59

De conformidad con el libro de Matemáticas, ¿cuál es un uso común de la propiedad 6 de los radicales?

- A. Que √(a²) = |a|
- B. Que √(a²) = a
- C. Que √(a²) = a²
- D. Que √(a²) = −a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 23
**Subtema:** exponentes y radicales · propiedades de los radicales

Un uso común de la propiedad 6 es √(a²) = |a|.

---

## Sub-lote 6 · Simplificación y combinación de expresiones radicales (1.3, p. 24)

### 60

En relación con el libro de Matemáticas, ¿cuántas condiciones debe satisfacer una expresión con radicales para estar en su forma más simple?

- A. Tres condiciones
- B. Dos condiciones
- C. Cuatro condiciones
- D. Seis condiciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · forma más simple

Una expresión que implica radicales está en su forma más simple cuando se satisfacen las tres condiciones siguientes.

---

### 61

De acuerdo con el libro de Matemáticas, ¿cuál es la primera condición para que una expresión con radicales esté en su forma más simple?

- A. Que todos los factores posibles hayan sido eliminados del radical
- B. Que todas las fracciones tengan denominadores sin radicales
- C. Que el índice del radical esté reducido
- D. Que el radicando sea un cuadrado perfecto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · forma más simple

1. Todos los factores posibles han sido eliminados del radical.

---

### 62

De conformidad con el libro de Matemáticas, ¿cuál es la segunda condición para que una expresión con radicales esté en su forma más simple?

- A. Que todas las fracciones tengan denominadores sin radicales
- B. Que todos los factores posibles hayan sido eliminados del radical
- C. Que el índice del radical esté reducido
- D. Que el radicando no sea negativo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · forma más simple

2. Todas las fracciones tienen denominadores sin radicales.

---

### 63

En relación con el libro de Matemáticas, ¿cómo se llama el proceso que logra que las fracciones tengan denominadores sin radicales?

- A. Racionalización del denominador
- B. Reducción del índice
- C. Factorización del radicando
- D. Combinación de radicales iguales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · forma más simple

Todas las fracciones tienen denominadores sin radicales (un proceso llamado racionalización del denominador logra esto).

---

### 64

De acuerdo con el libro de Matemáticas, ¿cuál es la tercera condición para que una expresión con radicales esté en su forma más simple?

- A. Que el índice del radical esté reducido
- B. Que el radicando esté reducido
- C. Que el coeficiente del radical esté reducido
- D. Que el exponente del radicando esté reducido

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · forma más simple

3. El índice del radical es reducido.

---

### 65

De conformidad con el libro de Matemáticas, para simplificar un radical, ¿en qué factores se debe factorizar el radicando?

- A. En factores cuyos exponentes sean múltiplos del índice
- B. En factores cuyos exponentes sean divisores del índice
- C. En factores cuyos exponentes sean números primos
- D. En factores cuyos exponentes sean iguales al radicando

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · simplificación de radicales

Para simplificar un radical, factorice el radicando en factores cuyos exponentes sean múltiplos del índice.

---

### 66

En relación con el libro de Matemáticas, al simplificar un radical, ¿dónde se escriben las raíces de los factores encontrados?

- A. Afuera del radical
- B. Adentro del radical
- C. En el índice del radical
- D. En el denominador de la expresión

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · simplificación de radicales

Escriba las raíces de estos factores afuera del radical.

---

### 67

De acuerdo con el libro de Matemáticas, al simplificar un radical, ¿qué componen los factores "sobrantes"?

- A. El nuevo radicando
- B. El nuevo índice
- C. El coeficiente que va afuera del radical
- D. El denominador de la fracción

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · simplificación de radicales

Los factores "sobrantes" componen el nuevo radicando.

---

### 68

De conformidad con el libro de Matemáticas, ¿cuándo pueden combinarse, sumándose o restándose, las expresiones radicales?

- A. Cuando son radicales iguales
- B. Cuando tienen el mismo coeficiente
- C. Cuando el radicando es un cuadrado perfecto
- D. Cuando su índice es par

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · combinación de radicales

Expresiones radicales pueden combinarse (sumarse o restarse) cuando son radicales iguales.

---

### 69

En relación con el libro de Matemáticas, ¿qué tienen en común dos radicales iguales?

- A. El mismo índice y el mismo radicando
- B. El mismo índice y el mismo coeficiente
- C. El mismo radicando y el mismo coeficiente
- D. El mismo valor numérico

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · combinación de radicales

Es decir, cuando tienen el mismo índice y radicando.

---

### 70

De acuerdo con el libro de Matemáticas, ¿qué debe hacerse para determinar si dos radicales pueden combinarse?

- A. Simplificar primero cada radical
- B. Igualar primero sus coeficientes
- C. Elevar primero cada radical a su índice
- D. Racionalizar primero el denominador

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · combinación de radicales

Para determinar si dos radicales pueden combinarse, simplifique primero cada radical.

---

### 71

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué es importante cuidar cuando se simplifica un radical?

- A. Que la expresión original y la simplificada estén definidas para los mismos valores de la variable
- B. Que la expresión simplificada tenga menos términos que la original
- C. Que el índice de la expresión simplificada sea par
- D. Que la expresión simplificada no contenga fracciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 24
**Subtema:** exponentes y radicales · simplificación de radicales

Cuando se simplifica un radical, es importante que las expresiones tanto original como simplificada sean definidas para los mismos valores de la variable.

---
