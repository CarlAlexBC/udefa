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
- **p. 30, recuadro "Definición de un polinomio con x": ES FALSA COMO ESTÁ IMPRESA.** El libro dice "Sean a₀, a₁, a₂, . . ., aₙ números reales y **n un entero no positivo**". Tiene que ser **no negativo** (n ≥ 0): si n fuera no positivo, la expresión aₙxⁿ + aₙ₋₁xⁿ⁻¹ + . . . no describiría ningún polinomio, y el propio libro contradice esa frase dos párrafos después al dar un polinomio de grado 7 y otro de grado 11. Es un desliz de la traducción (el original dice *nonnegative integer*). **Verificado sobre la hoja renderizada**, no es basura de la extracción. **No se escribe ningún reactivo que pregunte qué debe ser n en esa definición.** El resto del recuadro (que aₙ ≠ 0, que aₙ es el coeficiente principal y a₀ el término constante) sí es correcto y sí lleva reactivos.
- **p. 36, ejemplo del trinomio 6x² + 17x + 5:** la prosa dice "La factorización correcta es **(2x + 5)(3x − 1)**", pero el signo está mal. La lista de factorizaciones posibles que el propio libro imprime tres renglones antes incluye **(2x + 5)(3x + 1)**, y la comprobación de abajo desarrolla `(2x + 5)(3x + 1) = 6x² + 2x + 15x + 5 = 6x² + 17x + 5`. Con el −1 no saldría 17x. **No se escribe reactivo sobre esa factorización**; el bloque de ejemplos de todos modos queda fuera por norma.
- **p. 37, punto 7 del "Resumen (sección 1.4)":** dice "cómo factorizar un trinomio de la forma **ax² + bx + c = 0**". Un trinomio no se iguala a cero — eso sería una ecuación. El `= 0` sobra. El `Resumen` queda fuera por norma, así que no afecta a ningún reactivo.

## Cobertura actual

**EN CURSO.** El subtema **1.3 · Exponentes y radicales quedó CERRADO** (pp. 18–27) y está arrancado el **1.4 · Polinomios y factorización** (pp. 30–31):

- Cubierta la página impresa **18**: la multiplicación repetida en forma exponencial, el recuadro *Notación exponencial* y el recuadro *Propiedades de los exponentes* con sus ocho propiedades. Los objetivos de la sección y el pie de foto que remite al ejercicio 69 no llevan reactivos.
- Cubiertas las páginas impresas **19 y 20**: el alcance de las propiedades a todos los enteros, la distinción entre `(−2)⁴` y `−2⁴`, y del recuadro *COMENTARIO* **sólo la forma fraccionaria de la propiedad 3** (su consejo de estudio queda fuera por la regla del dato del tema). Los `EJEMPLO 1` a `EJEMPLO 4`, los `Punto de repaso` y el recuadro `TECNOLOGÍA` no llevan reactivos por norma.
- Cubierta la página impresa **21**: el apartado *Notación científica* completo (la forma `±c × 10ⁿ`, lo que indican el exponente positivo y el negativo, y la masa del electrón). Los `EJEMPLO 5` a `EJEMPLO 7` y el `TECNOLOGÍA` de las calculadoras no llevan reactivos.
- Cubierta la página impresa **22**: el apartado *Radicales y sus propiedades* —raíz cuadrada y cúbica, el recuadro *Definición de la raíz enésima de un número*, el recuadro *Principal raíz enésima de un número* (índice y radicando; **el plural de "índice" queda fuera** por la regla del dato del tema) y el malentendido del signo de raíz cuadrada—. El `EJEMPLO 8` no lleva reactivos.
- Cubierta la página impresa **23**: la tabla *Generalizaciones sobre raíces enésimas de números reales* (sus cuatro casos), los cuadrados y cubos perfectos, y el recuadro *Propiedades de los radicales* con sus seis propiedades y el uso común de la 6. El `EJEMPLO 9` no lleva reactivos.
- Cubierta la página impresa **24**: *Simplificación de expresiones radicales* (las tres condiciones de la forma más simple, la racionalización del denominador y cómo se factoriza el radicando), la combinación de radicales iguales y el recuadro *COMENTARIO*. Los `EJEMPLO 10` y `EJEMPLO 11` no llevan reactivos.
- Cubiertas las páginas impresas **25 y 26**: *Racionalización de denominadores y numeradores* (el conjugado, el caso a = 0 y las raíces cúbicas) y *Exponentes racionales y sus propiedades* (la definición, qué denotan numerador y denominador, y los dos recuadros `COMENTARIO`, que aquí sí traen matemáticas). Los `EJEMPLO 12` a `EJEMPLO 15` no llevan reactivos.
- Cubierta la página impresa **27**, con la que **cierra el 1.3**: para qué son útiles los exponentes racionales y el `COMENTARIO` del caso no definido. El `Resumen (sección 1.3)` **no lleva reactivos**: es una lista de indicaciones de estudio que remite a los ejemplos, y cae por la regla del dato del tema. Los `EJEMPLO 16` y `17` y el `TECNOLOGÍA` de las graficadoras tampoco. **Las pp. 28 y 29 son íntegramente el bloque `1.3 Ejercicios`** —incluidos el "Vocabulario", el "Modelado matemático", el "¿CÓMO LO VE?" y la "Exploración"—, así que no llevan un solo reactivo.
- Cubiertas las páginas impresas **30 y 31**, arranque del **1.4 · Polinomios y factorización**: qué es un polinomio y la forma axᵏ de sus términos, el recuadro *Definición de un polinomio con x* (salvo su errata de "n no positivo"), monomios/binomios/trinomios, la forma estándar, el polinomio cero, el grado y el coeficiente principal con más de una variable, el `COMENTARIO` de qué expresiones no son polinomios, los términos semejantes, el producto por las propiedades distributivas y el método PEIU. Los `EJEMPLO 1` a `EJEMPLO 3` no llevan reactivos.
- Cubiertas las páginas impresas **32 y 33**: el recuadro *Productos especiales* completo (binomios conjugados, cuadrado y cubo de un binomio) y *Polinomios con factores comunes* (qué es factorizar, el polinomio primo o irreducible en enteros, la factorización completa, el tipo más simple y la propiedad distributiva en dirección inversa). Del `EJEMPLO 4` se tomó **sólo la regla general** de que el producto de binomios conjugados no tiene término medio, no el ejercicio; el `EJEMPLO 5` no lleva reactivos.
- Cubiertas las páginas impresas **34 y 35**: el recuadro *Factorización de formas polinomiales especiales* completo (diferencia de dos cuadrados, trinomio cuadrado perfecto en sus dos formas, suma y diferencia de dos cubos), los pares conjugados, cómo reconocer términos cuadrados perfectos, el `COMENTARIO` de buscar factores comunes primero, y la descripción del trinomio cuadrado perfecto (primero y último términos cuadrados, término medio igual a dos veces el producto de u y v). Los `EJEMPLO 6` a `EJEMPLO 10` no llevan reactivos.
- Cubiertas las páginas impresas **36 y 37**, con las que **cierra el 1.4**: *Trinomios con factores binomiales* (el patrón de factores de a y de c, la meta de que la suma de los productos externos e internos sea bx, y el `COMENTARIO` de la prueba y error y de cómo comprobar multiplicando) y *Factorización por agrupación* (qué polinomios la admiten, qué prueba y error elimina, elegir factores de ac que sumen b para reescribir el término medio, y el `COMENTARIO` de que más de una agrupación puede dar resultado). El `Resumen (sección 1.4)` **no lleva reactivos**, igual que el del 1.3. Los `EJEMPLO 11` a `EJEMPLO 14` tampoco. **Las pp. 38 y 39 son íntegramente el bloque `1.4 Ejercicios`.**

- Cubiertas las páginas impresas **50 y 51**, arranque del **1.6 · Resolución de ecuaciones**: qué es una ecuación y qué es resolverla, las soluciones y de qué dependen, los tres tipos de ecuación (identidad, condicional y contradicción), la *Definición de una ecuación lineal con una variable*, que ésta tiene exactamente una solución, las ecuaciones equivalentes y los cuatro pasos del recuadro *Generación de ecuaciones equivalentes*, y el `COMENTARIO` de comprobar cada solución. El `EJEMPLO 1` no lleva reactivos.

- Cubiertas las páginas impresas **52 y 53**: las *ecuaciones racionales* (multiplicar por el MCD), el `COMENTARIO` de la multiplicación cruzada, la *solución extraña*, y las *Ecuaciones cuadráticas* con el recuadro *Resolución de una ecuación cuadrática* completo (los cuatro métodos: factorización con la propiedad de factor cero, extracción de raíces cuadradas con el principio de raíz cuadrada, completación del cuadrado y fórmula cuadrática). Los `EJEMPLO 2` y `EJEMPLO 3` no llevan reactivos.

- Cubiertas las páginas impresas **54, 55 y 57**: los párrafos de regla que acompañan a los ejemplos —a qué ecuaciones se aplica la propiedad de factor cero y que hay que reunir los términos en un miembro antes de factorizar (p. 54); por qué se suma (b/2)² a cada miembro y qué hacer cuando el coeficiente principal no es 1 (p. 55)— y las *Ecuaciones polinomiales de grado superior* con su `COMENTARIO` (p. 57). La **p. 56** es íntegramente `EJEMPLO 8` y `EJEMPLO 9`, así que no lleva reactivos.

- Cubiertas las páginas impresas **58, 59 y 60**, con las que **cierra el 1.6**: las *Ecuaciones radicales* con sus dos `COMENTARIO` (las operaciones que introducen soluciones extrañas y el caso de dos radicales), las *Ecuaciones de valor absoluto* (por qué resultan en dos ecuaciones aparte) y el recuadro *Fórmulas comunes del área A, perímetro P, circunferencia C y volumen V* con sus siete fórmulas. El `Resumen (sección 1.6)` **no lleva reactivos**, igual que los del 1.3 y el 1.4; los `EJEMPLO 12` a `EJEMPLO 15` tampoco. **Las pp. 61 y 62 son íntegramente el bloque `1.6 Ejercicios`.**

- Cubiertas las páginas impresas **72 y 73**, arranque del **1.8 · Propiedades de los logaritmos**: el *Cambio de base* (qué base tienen los logaritmos comunes y los naturales, cuándo hace falta la fórmula y sus tres versiones —base b, base 10 y base e—, y el multiplicador constante), las *Propiedades de los logaritmos* (producto, cociente y potencia) con su `COMENTARIO` de que no existe propiedad para log_a(u ± v), y la `NOTA HISTÓRICA` de **John Napier**. Los `EJEMPLO 1` a `EJEMPLO 4` no llevan reactivos.

- Cubiertas las páginas impresas **74 y 75**, con las que **cierra el 1.8**: *Reescritura de expresiones logarítmicas* (para qué sirven las propiedades y en qué convierten productos, cocientes y exponenciales; expandir frente a condensar) y la *Aplicación* (tomar el logaritmo natural de datos no lineales y la ecuación ln y = m ln x). Los `EJEMPLO 5` a `EJEMPLO 7` no llevan reactivos —el 7 es además una aplicación astronómica, ajena al tema— y las **pp. 76–78 son íntegramente el bloque `1.8 Ejercicios`**.

- Cubiertas las páginas impresas **79 y 80**, arranque del **1.9 · Ecuaciones exponenciales y logarítmicas**: la *Introducción* con las dos estrategias básicas, las condiciones sobre a, las *Propiedades biunívocas* y las *Propiedades inversas*, el recuadro *Estrategias para resolver ecuaciones exponenciales y logarítmicas* con sus tres pasos, y cuándo conviene una respuesta exacta y cuándo una aproximada. Los `EJEMPLO 1` a `EJEMPLO 3` no llevan reactivos.

- Cubiertas las páginas impresas **81, 82 y 83**, con las que **cierra el 1.9**: qué pasa cuando una ecuación implica dos o más expresiones exponenciales, la *exponenciación de cada lado de una ecuación*, el `COMENTARIO` de comprobar en la ecuación original (respuesta correcta **y** dentro del dominio) y por qué hay que vigilar las soluciones extrañas en las ecuaciones logarítmicas. Las **pp. 84 y 85 no llevan reactivos**: son aplicaciones resueltas (`EJEMPLO 10` de interés compuesto y `EJEMPLO 11` de ventas al menudeo) más el `Resumen (sección 1.9)`. Las **pp. 86–88 son el bloque `1.9 Ejercicios`**.

- Cubiertas las páginas impresas **89 y 90**, arranque del **1.10 · Sistemas de ecuaciones lineales y no lineales**: qué es una solución de un sistema y qué es resolverlo, el recuadro *Método de sustitución* con sus cinco pasos, qué significa *sustitución hacia atrás* y el `COMENTARIO` de comprobar la solución en cada ecuación del sistema original. Los ejemplos no llevan reactivos.

- Cubiertas las páginas impresas **91 a 94**, con las que **cierra el 1.10**: la fórmula del interés simple (I = Prt, con r en decimales), que el método de sustitución también sirve con ecuaciones no lineales, cuántas soluciones puede tener un sistema de dos ecuaciones con dos variables, el método gráfico (las soluciones son los puntos de intersección) y el *punto de equilibrio* (sus dos componentes de costo, cuándo se alcanza y a qué punto corresponde). La **p. 95 no lleva reactivos** (`EJEMPLO 7` de taquilla y el `Resumen`), y las **pp. 96–98 son el bloque `1.10 Ejercicios`**. Los recuadros `TECNOLOGÍA` quedan fuera por norma.

**Pendiente:** EN CURSO. El **1.3, el 1.4, el 1.6, el 1.8, el 1.9 y el 1.10 están CERRADOS**. Sólo falta el **1.11 · Sistemas lineales de dos variables**, que arranca en la página impresa **99** y cuya teoría llega hasta la **p. 106** (las pp. 107–110 son el bloque de `Ejercicios`); con él se cierra el **capítulo 1** y este archivo. La teoría del 1.6 llega hasta la **p. 60** (las pp. 61–62 son el bloque de `Ejercicios`). Después faltan los otros cuatro subtemas que pide el temario —**1.8** (p. 72), **1.9** (p. 79), **1.10** (p. 89) y **1.11** (p. 99)—, y luego los otros dos capítulos del temario, cada uno en su archivo: el **2** (2.6, 2.9, 2.10, 2.15 y 2.16) y el **3** completo.

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

## Sub-lote 7 · Racionalización y exponentes racionales (1.3, pp. 25–26)

### 72

En relación con el libro de Matemáticas, para racionalizar un denominador o numerador de la forma a − b√m o a + b√m, ¿por qué se multiplican tanto el numerador como el denominador?

- A. Por un conjugado
- B. Por el radicando
- C. Por el índice del radical
- D. Por un cubo perfecto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 25
**Subtema:** exponentes y radicales · racionalización

Para racionalizar un denominador o numerador de la forma a − b√m o a + b√m, multiplique tanto el numerador como el denominador por un conjugado.

---

### 73

De acuerdo con el libro de Matemáticas, ¿qué son entre sí a + b√m y a − b√m?

- A. Conjugados
- B. Radicales iguales
- C. Cubos perfectos
- D. Factores sobrantes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 25
**Subtema:** exponentes y radicales · racionalización

a + b√m y a − b√m son conjugados entre sí.

---

### 74

De conformidad con el libro de Matemáticas, si a = 0, ¿cuál es el factor de racionalización para √m?

- A. Él mismo, √m
- B. Su conjugado, −√m
- C. El radicando m
- D. La unidad

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 25
**Subtema:** exponentes y radicales · racionalización

Si a = 0, el factor de racionalización para √m es él mismo, √m.

---

### 75

En relación con el libro de Matemáticas, para las raíces cúbicas, ¿qué factor de racionalización debe elegirse?

- A. Uno que produzca un radicando de cubo perfecto
- B. Uno que produzca un radicando de cuadrado perfecto
- C. El conjugado del denominador
- D. El mismo radical, sin cambio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 25
**Subtema:** exponentes y radicales · racionalización

Para las raíces cúbicas, elija un factor de racionalización que produzca un radicando de cubo perfecto.

---

### 76

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿a qué no es igual √(x + y) en general?

- A. A √x + √y
- B. A √x · √y
- C. A √(x · y)
- D. A x + y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · racionalización

En general, √(x + y) no es igual a √x + √y.

---

### 77

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿a qué no es igual √(x² + y²)?

- A. A x + y
- B. A x · y
- C. A x² + y²
- D. A √x + √y

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · racionalización

De igual forma, √(x² + y²) no es igual a x + y.

---

### 78

En relación con el libro de Matemáticas, en la definición de exponentes racionales, ¿qué condición debe cumplirse además de que a sea real y n un entero positivo?

- A. Que la raíz enésima principal de a exista
- B. Que a sea distinto de cero
- C. Que n sea par
- D. Que a sea un cuadrado perfecto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

Si a es un número real y n es un entero positivo, tal que la raíz enésima principal de a existe, entonces a^(1/n) se define como a^(1/n) = ⁿ√a.

---

### 79

De acuerdo con el libro de Matemáticas, ¿cómo se define a^(1/n)?

- A. Como ⁿ√a
- B. Como aⁿ
- C. Como 1/aⁿ
- D. Como n·a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

Entonces a^(1/n) se define como a^(1/n) = ⁿ√a.

---

### 80

De conformidad con el libro de Matemáticas, si m es un entero positivo, ¿a qué es igual a^(m/n)?

- A. A (a^(1/n))ᵐ
- B. A (a^(1/m))ⁿ
- C. A aᵐⁿ
- D. A a^(m+n)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

Además, si m es un entero positivo, entonces a^(m/n) = (a^(1/n))ᵐ.

---

### 81

En relación con el libro de Matemáticas, ¿cómo se llaman 1/n y m/n?

- A. Exponentes racionales de a
- B. Índices radicales de a
- C. Radicandos de a
- D. Factores de racionalización de a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

1/n y m/n se llaman exponentes racionales de a.

---

### 82

De acuerdo con el libro de Matemáticas, ¿qué denota el numerador de un exponente racional?

- A. La potencia a la que se eleva la base
- B. El índice de la raíz
- C. El radicando de la raíz
- D. El signo de la base

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

El numerador de un exponente racional denota la potencia a la que se eleva la base.

---

### 83

De conformidad con el libro de Matemáticas, ¿qué denota el denominador de un exponente racional?

- A. El índice de la raíz
- B. La potencia a la que se eleva la base
- C. El radicando de la raíz
- D. El conjugado de la base

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

El denominador denota el índice de la raíz para obtener.

---

### 84

En relación con el libro de Matemáticas, cuando se trabaja con exponentes racionales, ¿qué ocurre con las propiedades de los exponentes enteros?

- A. Se aplican de todas las formas
- B. Sólo se aplican si el exponente es positivo
- C. Dejan de aplicarse por completo
- D. Sólo se aplican si el índice es par

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

Cuando se trabaja con exponentes racionales, las propiedades de los exponentes enteros se aplican de todas las formas.

---

### 85

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué también es cierto si m y n no tienen factores comunes?

- A. Que a^(m/n) = (aᵐ)^(1/n)
- B. Que a^(m/n) = (a^(1/m))ⁿ
- C. Que a^(m/n) = aᵐ · aⁿ
- D. Que a^(m/n) = ᵐⁿ√a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 26
**Subtema:** exponentes y radicales · exponentes racionales

Si m y n no tienen factores comunes, también es cierto que a^(m/n) = (aᵐ)^(1/n).

---

## Sub-lote 8 · Utilidad de los exponentes racionales — cierra el 1.3 (p. 27)

### 86

De conformidad con el libro de Matemáticas, ¿para qué son útiles los exponentes racionales?

- A. Para evaluar raíces en una calculadora, reducir el índice de un radical y simplificar expresiones en cálculo
- B. Para eliminar los denominadores, ordenar los términos y comprobar las raíces
- C. Para convertir fracciones en decimales, redondear cifras y estimar resultados
- D. Para factorizar polinomios, resolver ecuaciones y graficar funciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 27
**Subtema:** exponentes y radicales · exponentes racionales

Los exponentes racionales son útiles para evaluar raíces de números en una calculadora, para reducir el índice de un radical y para simplificar expresiones en cálculo.

---

### 87

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿por qué una expresión que contiene x^(−3/4) no está definida cuando x = 0?

- A. Porque 0^(−3/4) no es un número real
- B. Porque 0^(−3/4) es igual a cero
- C. Porque 0^(−3/4) es igual a uno
- D. Porque el exponente racional exige que x sea negativo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 27
**Subtema:** exponentes y radicales · exponentes racionales

La expresión en el ejemplo 17b) no está definida cuando x = 0 porque 0^(−3/4) no es un número real.

---

## Sub-lote 9 · Polinomios: definición, grado y coeficiente principal (1.4, p. 30)

### 88

De acuerdo con el libro de Matemáticas, ¿cuál es uno de los tipos más comunes de expresiones algebraicas?

- A. El polinomio
- B. El radical
- C. La fracción algebraica
- D. El exponente racional

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · polinomios

Uno de los tipos más comunes de expresiones algebraicas es el polinomio.

---

### 89

De conformidad con el libro de Matemáticas, ¿qué forma tienen los términos de un polinomio con x?

- A. La forma axᵏ
- B. La forma aˣ + k
- C. La forma xᵃᵏ
- D. La forma a + xᵏ

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · polinomios

Los términos de un polinomio con x tienen la forma axᵏ.

---

### 90

En relación con el libro de Matemáticas, en un término de la forma axᵏ, ¿qué son a y k, respectivamente?

- A. a es el coeficiente y k es el grado del término
- B. a es el grado y k es el coeficiente del término
- C. a es la base y k es el índice del término
- D. a es el término constante y k es el coeficiente principal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · polinomios

Los términos de un polinomio con x tienen la forma axᵏ, donde a es el coeficiente y k es el grado del término.

---

### 91

De acuerdo con el libro de Matemáticas, en la definición de un polinomio con x, ¿qué condición debe cumplir aₙ?

- A. Que sea distinto de cero
- B. Que sea igual a cero
- C. Que sea un número positivo
- D. Que sea un número entero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · definición de polinomio

Un polinomio con x es una expresión de la forma aₙxⁿ + aₙ₋₁xⁿ⁻¹ + . . . + a₁x + a₀ donde aₙ ≠ 0.

---

### 92

De conformidad con el libro de Matemáticas, en la definición de un polinomio con x, ¿cómo se llama aₙ?

- A. El coeficiente principal
- B. El término constante
- C. El grado del polinomio
- D. El coeficiente secundario

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · definición de polinomio

El polinomio es de grado n, aₙ es el coeficiente principal y a₀ es el término constante.

---

### 93

En relación con el libro de Matemáticas, en la definición de un polinomio con x, ¿cómo se llama a₀?

- A. El término constante
- B. El coeficiente principal
- C. El grado del polinomio
- D. El término semejante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · definición de polinomio

El polinomio es de grado n, aₙ es el coeficiente principal y a₀ es el término constante.

---

### 94

De acuerdo con el libro de Matemáticas, ¿cómo se llaman los polinomios con uno, dos y tres términos, respectivamente?

- A. Monomios, binomios y trinomios
- B. Binomios, trinomios y polinomios
- C. Unimonios, bimonios y trimonios
- D. Términos, binomios y multinomios

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · monomios, binomios y trinomios

Los polinomios con uno, dos y tres términos son monomios, binomios y trinomios, respectivamente.

---

### 95

De conformidad con el libro de Matemáticas, ¿cuándo está un polinomio en forma estándar?

- A. Cuando está escrito con potencias descendentes de x
- B. Cuando está escrito con potencias ascendentes de x
- C. Cuando su coeficiente principal es 1
- D. Cuando no tiene término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · forma estándar

Un polinomio escrito con potencias descendentes de x está en forma estándar.

---

### 96

En relación con el libro de Matemáticas, ¿cómo se llama el polinomio que tiene sólo coeficientes de cero y cómo se denota?

- A. Polinomio cero, denotado por 0
- B. Polinomio nulo, denotado por Ø
- C. Polinomio constante, denotado por a₀
- D. Polinomio neutro, denotado por 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · polinomio cero

Un polinomio que tiene sólo coeficientes de cero se llama polinomio cero, denotado por 0.

---

### 97

De acuerdo con el libro de Matemáticas, ¿qué grado se le asigna al polinomio cero?

- A. Ninguno
- B. El grado cero
- C. El grado uno
- D. El grado de su término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · polinomio cero

Ningún grado se asigna al polinomio cero.

---

### 98

De conformidad con el libro de Matemáticas, en un polinomio con más de una variable, ¿cómo se obtiene el grado de un término?

- A. Sumando los exponentes de las variables del término
- B. Multiplicando los exponentes de las variables del término
- C. Tomando el mayor de los exponentes del término
- D. Contando cuántas variables tiene el término

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · grado

Para polinomios con más de una variable, el grado de un término es la suma de los exponentes de las variables en el término.

---

### 99

En relación con el libro de Matemáticas, en un polinomio con más de una variable, ¿cuál es el grado del polinomio?

- A. El más alto de los grados de sus términos
- B. La suma de los grados de sus términos
- C. El más bajo de los grados de sus términos
- D. El grado de su término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · grado

El grado del polinomio es el más alto de sus términos.

---

### 100

De acuerdo con el libro de Matemáticas, en un polinomio con más de una variable, ¿cuál es el coeficiente principal?

- A. El coeficiente del término de más alto grado
- B. El coeficiente del primer término escrito
- C. El coeficiente del término de más bajo grado
- D. El mayor de todos los coeficientes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · coeficiente principal

El coeficiente principal del polinomio es el coeficiente del término de más alto grado.

---

### 101

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿en qué dos casos una expresión no es un polinomio?

- A. Cuando una variable está bajo un radical y cuando una expresión polinomial de grado mayor que cero está en el denominador de un término
- B. Cuando tiene más de una variable y cuando su coeficiente principal es cero
- C. Cuando tiene exponentes pares y cuando su término constante es negativo
- D. Cuando está escrito en forma estándar y cuando tiene más de tres términos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 30
**Subtema:** polinomios y factorización · qué no es un polinomio

Las expresiones no son polinomios cuando una variable está bajo un radical o cuando una expresión polinomial (con grado mayor que 0) está en el denominador de un término.

---

## Sub-lote 10 · Operaciones con polinomios y método PEIU (1.4, p. 31)

### 102

En relación con el libro de Matemáticas, ¿qué son los términos semejantes?

- A. Los que tienen las mismas variables elevadas a las mismas potencias
- B. Los que tienen el mismo coeficiente
- C. Los que tienen el mismo número de variables
- D. Los que tienen el mismo signo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 31
**Subtema:** polinomios y factorización · términos semejantes

Sume o reste los términos semejantes (términos que tienen las mismas variables elevadas a las mismas potencias).

---

### 103

De acuerdo con el libro de Matemáticas, ¿cómo se suman o se restan los términos semejantes?

- A. Sumando o restando sus coeficientes
- B. Sumando o restando sus exponentes
- C. Multiplicando sus coeficientes
- D. Igualando primero sus variables

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 31
**Subtema:** polinomios y factorización · términos semejantes

Sume o reste los términos semejantes sumando o restando sus coeficientes.

---

### 104

De conformidad con el libro de Matemáticas, ¿qué se usa para determinar el producto de dos polinomios?

- A. Las propiedades distributivas derecha e izquierda
- B. Las propiedades de los exponentes racionales
- C. La racionalización del denominador
- D. La forma estándar del polinomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 31
**Subtema:** polinomios y factorización · producto de polinomios

Para determinar el producto de dos polinomios, use las propiedades distributivas derecha e izquierda.

---

### 105

En relación con el libro de Matemáticas, en el método PEIU, ¿qué cuatro productos nombran sus letras?

- A. Los de los términos primeros, externos, internos y últimos
- B. Los de los términos principales, exponenciales, internos y únicos
- C. Los de los términos pares, enteros, impares y unitarios
- D. Los de los términos primeros, exteriores, iniciales y unidos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 31
**Subtema:** polinomios y factorización · método PEIU

Producto de los términos primeros, producto de los términos externos, producto de los términos internos, producto de los términos últimos.

---

### 106

De acuerdo con el libro de Matemáticas, ¿para qué puede usarse únicamente el método PEIU?

- A. Sólo para multiplicar dos binomios
- B. Sólo para multiplicar dos trinomios
- C. Sólo para sumar dos polinomios
- D. Sólo para factorizar un trinomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 31
**Subtema:** polinomios y factorización · método PEIU

El método PEIU de arriba sólo puede usarse para multiplicar dos binomios.

---

### 107

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué debe recordarse cuando un signo negativo precede a una expresión dentro de un paréntesis?

- A. Distribuir el signo negativo a cada término, es decir, multiplicar cada término por −1
- B. Aplicar el signo negativo sólo al primer término del paréntesis
- C. Suprimir el paréntesis sin cambiar ningún signo
- D. Cambiar el signo únicamente del término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 31
**Subtema:** polinomios y factorización · signo negativo ante paréntesis

Cuando un signo negativo precede a una expresión dentro de paréntesis, recuerde distribuir el signo negativo a cada término dentro del paréntesis. En otras palabras, multiplique cada término por −1.

---

## Sub-lote 11 · Productos especiales (1.4, p. 32)

### 108

En relación con el libro de Matemáticas, ¿qué tienen algunos productos de binomios?

- A. Formas especiales que ocurren con frecuencia en álgebra
- B. Un número impar de términos
- C. Siempre un término medio
- D. Coeficientes que son siempre enteros

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · productos especiales

Algunos productos de binomios tienen formas especiales que ocurren con frecuencia en álgebra.

---

### 109

De acuerdo con el libro de Matemáticas, en el recuadro de los productos especiales, ¿qué pueden ser u y v?

- A. Números reales, variables o expresiones algebraicas
- B. Únicamente números reales
- C. Únicamente variables
- D. Únicamente enteros positivos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · productos especiales

Sean u y v números reales, variables o expresiones algebraicas.

---

### 110

De conformidad con el libro de Matemáticas, ¿cómo se llama el producto especial (u + v)(u − v)?

- A. Producto de binomios conjugados
- B. Cuadrado de un binomio
- C. Cubo de un binomio
- D. Producto de términos semejantes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · productos especiales

Producto de binomios conjugados: (u + v)(u − v) = u² − v².

---

### 111

En relación con el libro de Matemáticas, ¿a qué es igual (u + v)(u − v)?

- A. A u² − v²
- B. A u² + v²
- C. A u² − 2uv + v²
- D. A u² + 2uv + v²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · productos especiales

Producto de binomios conjugados: (u + v)(u − v) = u² − v².

---

### 112

De acuerdo con el libro de Matemáticas, ¿a qué es igual (u + v)²?

- A. A u² + 2uv + v²
- B. A u² − 2uv + v²
- C. A u² + v²
- D. A u² − v²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · cuadrado de un binomio

Cuadrado de un binomio: (u + v)² = u² + 2uv + v².

---

### 113

De conformidad con el libro de Matemáticas, ¿a qué es igual (u − v)²?

- A. A u² − 2uv + v²
- B. A u² + 2uv + v²
- C. A u² − v²
- D. A u² − 2uv − v²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · cuadrado de un binomio

Cuadrado de un binomio: (u − v)² = u² − 2uv + v².

---

### 114

En relación con el libro de Matemáticas, ¿a qué es igual (u + v)³?

- A. A u³ + 3u²v + 3uv² + v³
- B. A u³ − 3u²v + 3uv² − v³
- C. A u³ + 3u²v − 3uv² + v³
- D. A u³ + v³

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · cubo de un binomio

Cubo de un binomio: (u + v)³ = u³ + 3u²v + 3uv² + v³.

---

### 115

De acuerdo con el libro de Matemáticas, ¿a qué es igual (u − v)³?

- A. A u³ − 3u²v + 3uv² − v³
- B. A u³ + 3u²v + 3uv² + v³
- C. A u³ − 3u²v − 3uv² − v³
- D. A u³ − v³

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · cubo de un binomio

Cubo de un binomio: (u − v)³ = u³ − 3u²v + 3uv² − v³.

---

### 116

De conformidad con el libro de Matemáticas, ¿qué le falta al producto de binomios conjugados?

- A. El término medio
- B. El término constante
- C. El coeficiente principal
- D. El exponente del segundo término

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 32
**Subtema:** polinomios y factorización · productos especiales

El producto de binomios conjugados no tiene término medio y adopta la forma (u + v)(u − v) = u² − v².

---

## Sub-lote 12 · Factorización y factores comunes (1.4, p. 33)

### 117

En relación con el libro de Matemáticas, ¿cómo se llama el proceso de escribir polinomios como un producto?

- A. Factorización
- B. Racionalización
- C. Simplificación
- D. Agrupación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factorización

El proceso de escribir polinomios como un producto se llama factorización.

---

### 118

De acuerdo con el libro de Matemáticas, ¿para qué es una herramienta importante la factorización?

- A. Para resolver ecuaciones y para simplificar expresiones racionales
- B. Para evaluar raíces en una calculadora y reducir índices
- C. Para escribir números en notación científica y compararlos
- D. Para racionalizar denominadores y numeradores

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factorización

Esta es una herramienta importante para resolver ecuaciones y para simplificar expresiones racionales.

---

### 119

De conformidad con el libro de Matemáticas, a menos que se indique otra cosa, ¿qué clase de factores se supone que se buscan al factorizar un polinomio?

- A. Factores con coeficientes enteros
- B. Factores con coeficientes reales
- C. Factores con coeficientes racionales
- D. Factores con coeficientes positivos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factorización

A menos que se indique otra cosa, cuando se le pida factorizar un polinomio suponga que busca factores con coeficientes enteros.

---

### 120

En relación con el libro de Matemáticas, ¿cómo se llama un polinomio que no se factoriza con el uso de coeficientes enteros?

- A. Primo o irreducible en enteros
- B. Completamente factorizado
- C. Polinomio cero
- D. Binomio conjugado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · polinomio primo

Si un polinomio no se factoriza con el uso de coeficientes enteros, es primo o irreducible en enteros.

---

### 121

De acuerdo con el libro de Matemáticas, ¿cuándo está un polinomio completamente factorizado?

- A. Cuando cada uno de sus factores es primo
- B. Cuando tiene exactamente dos factores
- C. Cuando todos sus factores tienen coeficientes enteros
- D. Cuando ninguno de sus factores es un monomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factorización completa

Un polinomio está completamente factorizado cuando cada uno de sus factores es primo.

---

### 122

De conformidad con el libro de Matemáticas, ¿cuál es el tipo más simple de factorización?

- A. El que implica un polinomio que puede escribirse como el producto de un monomio y otro polinomio
- B. El que implica un polinomio que puede escribirse como el producto de dos binomios
- C. El que implica un polinomio que puede escribirse como el cuadrado de un binomio
- D. El que implica un polinomio que puede escribirse como el producto de dos trinomios

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factores comunes

El tipo más simple de factorización implica un polinomio que puede escribirse como el producto de un monomio y otro polinomio.

---

### 123

En relación con el libro de Matemáticas, ¿qué técnica se usa para factorizar en factores comunes?

- A. La propiedad distributiva en dirección inversa
- B. El método PEIU
- C. La racionalización del denominador
- D. La factorización por agrupación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factores comunes

La técnica usada aquí es la propiedad distributiva, a(b + c) = ab + ac, en dirección inversa.

---

### 124

De acuerdo con el libro de Matemáticas, ¿cuál es el primer paso para factorizar completamente un polinomio?

- A. La factorización en cualesquiera factores comunes
- B. La escritura del polinomio en forma estándar
- C. La aplicación del método PEIU
- D. La agrupación de los términos semejantes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 33
**Subtema:** polinomios y factorización · factores comunes

La factorización en cualesquiera factores comunes es el primer paso para factorizar completamente un polinomio.

---

## Sub-lote 13 · Factorización de formas polinomiales especiales (1.4, p. 34)

### 125

De conformidad con el libro de Matemáticas, ¿de dónde surgen las formas especiales que tienen algunos polinomios?

- A. De las formas de productos especiales
- B. De la propiedad distributiva en dirección inversa
- C. De las propiedades de los radicales
- D. De la forma estándar del polinomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · formas polinomiales especiales

Algunos polinomios tienen formas especiales que surgen de las formas de productos especiales.

---

### 126

En relación con el libro de Matemáticas, ¿cuál es la forma factorizada de u² − v²?

- A. (u + v)(u − v)
- B. (u − v)(u − v)
- C. (u + v)(u + v)
- D. (u + v)²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · diferencia de dos cuadrados

Diferencia de dos cuadrados: u² − v² = (u + v)(u − v).

---

### 127

De acuerdo con el libro de Matemáticas, ¿cuál es la forma factorizada de u² + 2uv + v²?

- A. (u + v)²
- B. (u − v)²
- C. (u + v)(u − v)
- D. (u + v)³

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · trinomio cuadrado perfecto

Trinomio cuadrado perfecto: u² + 2uv + v² = (u + v)².

---

### 128

De conformidad con el libro de Matemáticas, ¿cuál es la forma factorizada de u³ + v³?

- A. (u + v)(u² − uv + v²)
- B. (u − v)(u² + uv + v²)
- C. (u + v)(u² + uv + v²)
- D. (u + v)(u² − 2uv + v²)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · suma de dos cubos

Suma o diferencia de dos cubos: u³ + v³ = (u + v)(u² − uv + v²).

---

### 129

En relación con el libro de Matemáticas, ¿cuál es la forma factorizada de u³ − v³?

- A. (u − v)(u² + uv + v²)
- B. (u + v)(u² − uv + v²)
- C. (u − v)(u² − uv + v²)
- D. (u − v)(u² + 2uv + v²)

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · diferencia de dos cubos

Suma o diferencia de dos cubos: u³ − v³ = (u − v)(u² + uv + v²).

---

### 130

De acuerdo con el libro de Matemáticas, ¿qué es siempre la forma factorizada de una diferencia de dos cuadrados?

- A. Un conjunto de pares conjugados
- B. Un trinomio cuadrado perfecto
- C. El cuadrado de un binomio
- D. El producto de un monomio y un binomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · diferencia de dos cuadrados

La forma factorizada de una diferencia de dos cuadrados es siempre un conjunto de pares conjugados.

---

### 131

De conformidad con el libro de Matemáticas, para reconocer términos cuadrados perfectos, ¿qué se debe buscar?

- A. Coeficientes que sean cuadrados de enteros y variables elevadas a potencias pares
- B. Coeficientes que sean cubos de enteros y variables elevadas a potencias impares
- C. Coeficientes que sean números primos y variables sin exponente
- D. Coeficientes negativos y variables elevadas al cuadrado

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · términos cuadrados perfectos

Para reconocer términos cuadrados perfectos, busque coeficientes que sean cuadrados de enteros y variables elevadas a potencias pares.

---

### 132

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cuál es el primer paso de la factorización de un polinomio?

- A. Buscar factores comunes
- B. Reconocer un trinomio cuadrado perfecto
- C. Aplicar la diferencia de dos cuadrados
- D. Escribirlo en forma estándar

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · factores comunes

Nótese que el primer paso de la factorización de un polinomio es buscar factores comunes.

---

### 133

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué ocurre una vez que se han eliminado todos los factores comunes?

- A. A menudo es posible reconocer patrones que no fueron obvios de inmediato
- B. El polinomio queda siempre completamente factorizado
- C. El polinomio se vuelve irreducible en enteros
- D. Ya no es necesario aplicar ninguna otra fórmula

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 34
**Subtema:** polinomios y factorización · factores comunes

Una vez que usted ha eliminado todos los factores comunes, a menudo es posible reconocer patrones que no fueron obvios de inmediato.

---

## Sub-lote 14 · Trinomio cuadrado perfecto y los signos de los cubos (1.4, p. 35)

### 134

De conformidad con el libro de Matemáticas, ¿qué es un trinomio cuadrado perfecto?

- A. El cuadrado de un binomio
- B. El cubo de un binomio
- C. El producto de dos binomios conjugados
- D. El producto de un monomio y un binomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 35
**Subtema:** polinomios y factorización · trinomio cuadrado perfecto

Un trinomio cuadrado perfecto es el cuadrado de un binomio.

---

### 135

En relación con el libro de Matemáticas, en un trinomio cuadrado perfecto, ¿qué son el primero y el último términos?

- A. Cuadrados
- B. Cubos
- C. Pares conjugados
- D. Factores comunes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 35
**Subtema:** polinomios y factorización · trinomio cuadrado perfecto

Adviértase que el primero y último términos son cuadrados.

---

### 136

De acuerdo con el libro de Matemáticas, en un trinomio cuadrado perfecto, ¿qué es el término medio?

- A. Dos veces el producto de u y v
- B. La mitad del producto de u y v
- C. El cuadrado del producto de u y v
- D. Tres veces el producto de u y v

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 35
**Subtema:** polinomios y factorización · trinomio cuadrado perfecto

El término medio es dos veces el producto de u y v.

---

### 137

De conformidad con el libro de Matemáticas, ¿cuál es la forma factorizada de u² − 2uv + v²?

- A. (u − v)²
- B. (u + v)²
- C. (u + v)(u − v)
- D. (u − v)³

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 35
**Subtema:** polinomios y factorización · trinomio cuadrado perfecto

Un trinomio cuadrado perfecto es el cuadrado de un binomio y tiene la forma u² + 2uv + v² = (u + v)² o u² − 2uv + v² = (u − v)².

---

### 138

En relación con el libro de Matemáticas, en las fórmulas de la suma y la diferencia de dos cubos, ¿a qué se debe prestar especial atención?

- A. A los signos de los términos
- B. Al orden de los factores
- C. A los exponentes de las variables
- D. Al valor de los coeficientes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 35
**Subtema:** polinomios y factorización · suma y diferencia de dos cubos

Las dos fórmulas siguientes muestran la suma y diferencia de dos cubos. Preste especial atención a los signos de los términos.

---

## Sub-lote 15 · Trinomios con factores binomiales (1.4, p. 36)

### 139

De acuerdo con el libro de Matemáticas, en el patrón para factorizar un trinomio de la forma ax² + bx + c, ¿de qué son factores los números que acompañan a x y los términos constantes de los dos binomios?

- A. Los que acompañan a x son factores de a y los constantes son factores de c
- B. Los que acompañan a x son factores de c y los constantes son factores de a
- C. Los cuatro son factores de b
- D. Los cuatro son factores del producto ac

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 36
**Subtema:** polinomios y factorización · trinomios con factores binomiales

Para factorizar un trinomio de la forma ax² + bx + c, use el siguiente patrón: factores de a y factores de c.

---

### 140

De conformidad con el libro de Matemáticas, al factorizar un trinomio de la forma ax² + bx + c, ¿cuál es la meta?

- A. Hallar una combinación de factores de a y c tal que la suma de los productos externos e internos sea el término medio bx
- B. Hallar una combinación de factores de a y c cuyo producto sea el término medio bx
- C. Hallar dos factores de b cuya suma sea el producto ac
- D. Hallar dos factores de c cuya diferencia sea el término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 36
**Subtema:** polinomios y factorización · trinomios con factores binomiales

La meta es hallar una combinación de factores de a y c tal que la suma de los productos externos e internos sea el término medio bx.

---

### 141

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué puede implicar factorizar un trinomio?

- A. Prueba y error
- B. Racionalizar el denominador
- C. Reducir el índice del radical
- D. Escribirlo en notación científica

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 36
**Subtema:** polinomios y factorización · trinomios con factores binomiales

Factorizar un trinomio puede implicar prueba y error.

---

### 142

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cómo se comprueba la respuesta de una factorización?

- A. Multiplicando los factores: el producto debería ser el trinomio original
- B. Sumando los factores: la suma debería ser el término medio
- C. Dividiendo el trinomio entre uno de sus factores
- D. Sustituyendo x por cero en los dos binomios

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 36
**Subtema:** polinomios y factorización · trinomios con factores binomiales

Es relativamente fácil comprobar su respuesta multiplicando los factores. El producto debería ser el trinomio original.

---

## Sub-lote 16 · Factorización por agrupación — cierra el 1.4 (p. 37)

### 143

De conformidad con el libro de Matemáticas, ¿qué polinomios pueden factorizarse por agrupación?

- A. Los que tienen más de tres términos
- B. Los que tienen exactamente dos términos
- C. Los que tienen exactamente tres términos
- D. Los que tienen un solo término

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 37
**Subtema:** polinomios y factorización · factorización por agrupación

A veces, polinomios con más de tres términos pueden factorizarse por agrupación.

---

### 144

En relación con el libro de Matemáticas, ¿qué puede eliminar la factorización por agrupación?

- A. Parte de la prueba y error implicada en la factorización de un trinomio
- B. La necesidad de buscar factores comunes
- C. La necesidad de escribir el polinomio en forma estándar
- D. Los términos semejantes del polinomio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 37
**Subtema:** polinomios y factorización · factorización por agrupación

La factorización por agrupación puede eliminar parte de la prueba y error implicada en la factorización de un trinomio.

---

### 145

De acuerdo con el libro de Matemáticas, para factorizar por agrupación un trinomio de la forma ax² + bx + c, ¿qué factores deben elegirse?

- A. Factores del producto ac que sumen b
- B. Factores del producto ab que sumen c
- C. Factores de b cuyo producto sea ac
- D. Factores de c cuya diferencia sea a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 37
**Subtema:** polinomios y factorización · factorización por agrupación

Para factorizar un trinomio de la forma ax² + bx + c por agrupación, elija factores del producto ac que sumen b.

---

### 146

De conformidad con el libro de Matemáticas, al factorizar un trinomio por agrupación, ¿para qué se usan los factores elegidos?

- A. Para reescribir el término medio
- B. Para reescribir el término constante
- C. Para eliminar el coeficiente principal
- D. Para comprobar el resultado final

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 37
**Subtema:** polinomios y factorización · factorización por agrupación

Elija factores del producto ac que sumen b y use esos factores para reescribir el término medio.

---

### 147

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué ocurre a veces al factorizar por agrupación?

- A. Que más de una agrupación dará resultado
- B. Que ninguna agrupación dará resultado
- C. Que la agrupación cambia el valor del polinomio
- D. Que sólo funciona con polinomios de tres términos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 37
**Subtema:** polinomios y factorización · factorización por agrupación

A veces, más de una agrupación dará resultado.

---

## Sub-lote 17 · Ecuaciones, soluciones y tipos de ecuación (1.6, p. 50)

### 148

De acuerdo con el libro de Matemáticas, ¿qué es una ecuación con x?

- A. Un enunciado de que dos expresiones algebraicas son iguales
- B. Un enunciado de que dos expresiones algebraicas son distintas
- C. Una expresión algebraica escrita en forma estándar
- D. Un polinomio igualado a su coeficiente principal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuaciones y soluciones

Una ecuación con x es un enunciado de que dos expresiones algebraicas son iguales.

---

### 149

De conformidad con el libro de Matemáticas, ¿qué significa resolver una ecuación con x?

- A. Determinar todos los valores de x para los cuales la ecuación es cierta
- B. Escribir la ecuación en su forma estándar
- C. Factorizar por completo los dos miembros de la ecuación
- D. Comprobar que la ecuación es una identidad

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuaciones y soluciones

Resolver una ecuación con x significa determinar todos los valores de x para los cuales la ecuación es cierta.

---

### 150

En relación con el libro de Matemáticas, ¿cómo se llaman los valores de x para los cuales una ecuación es cierta?

- A. Soluciones
- B. Identidades
- C. Coeficientes
- D. Equivalencias

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuaciones y soluciones

Tales valores son soluciones.

---

### 151

De acuerdo con el libro de Matemáticas, ¿de qué dependen las soluciones de una ecuación?

- A. Del tipo de números en consideración
- B. Del grado del polinomio
- C. Del número de términos de la ecuación
- D. Del signo del coeficiente principal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuaciones y soluciones

Las soluciones de una ecuación dependen del tipo de números en consideración.

---

### 152

De conformidad con el libro de Matemáticas, ¿qué es una identidad?

- A. Una ecuación que es cierta para todos los números reales en el dominio de la variable
- B. Una ecuación que es cierta para sólo algunos de los números reales en el dominio de la variable
- C. Una ecuación que es falsa para todos los números reales en el dominio de la variable
- D. Una ecuación que no tiene ninguna solución real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · identidad

Una ecuación que es cierta para todos los números reales en el dominio de la variable es una identidad.

---

### 153

En relación con el libro de Matemáticas, ¿qué es una ecuación condicional?

- A. Una ecuación que es cierta para sólo algunos de los números reales del dominio de la variable, pero no todos
- B. Una ecuación que es cierta para todos los números reales del dominio de la variable
- C. Una ecuación que es falsa para todos los números reales del dominio de la variable
- D. Una ecuación que sólo es cierta cuando la variable vale cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuación condicional

Una ecuación que es cierta para sólo algunos de los números reales (pero no todos) en el dominio de la variable, es una ecuación condicional.

---

### 154

De acuerdo con el libro de Matemáticas, ¿qué es una contradicción?

- A. Una ecuación que es falsa para todos los números reales en el dominio de la variable
- B. Una ecuación que es cierta para todos los números reales en el dominio de la variable
- C. Una ecuación que es cierta sólo para algunos números reales del dominio
- D. Una ecuación que tiene exactamente dos soluciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · contradicción

Una contradicción es una ecuación que es falsa para todos los números reales en el dominio de la variable.

---

### 155

De conformidad con el libro de Matemáticas, ¿cuál es la forma estándar de una ecuación lineal con una variable x?

- A. ax + b = 0
- B. ax² + bx + c = 0
- C. ax + b = c
- D. ax = b

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuación lineal

Una ecuación lineal con una variable x es una ecuación que puede escribirse en la forma estándar ax + b = 0.

---

### 156

En relación con el libro de Matemáticas, en la forma estándar de una ecuación lineal con una variable, ¿qué deben cumplir a y b?

- A. Ser números reales con a distinto de cero
- B. Ser números reales con b distinto de cero
- C. Ser números enteros positivos
- D. Ser números reales cualesquiera

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 50
**Subtema:** resolución de ecuaciones · ecuación lineal

Donde a y b son números reales con a ≠ 0.

---

## Sub-lote 18 · Ecuaciones equivalentes (1.6, p. 51)

### 157

De acuerdo con el libro de Matemáticas, ¿cuántas soluciones tiene una ecuación lineal con una variable?

- A. Exactamente una
- B. Exactamente dos
- C. Ninguna
- D. Una infinidad

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuación lineal

Una ecuación lineal con una variable tiene exactamente una solución.

---

### 158

De conformidad con el libro de Matemáticas, ¿qué tienen en común las ecuaciones de una sucesión de ecuaciones equivalentes?

- A. Que cada una tiene la misma solución que la ecuación original
- B. Que cada una tiene el mismo número de términos
- C. Que cada una está escrita en forma estándar
- D. Que cada una tiene el mismo coeficiente principal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuaciones equivalentes

Usted despeja x en un miembro de la ecuación con el uso de una sucesión de ecuaciones equivalentes, cada una de las cuales tiene la misma solución que la ecuación original.

---

### 159

En relación con el libro de Matemáticas, ¿de dónde proceden las operaciones que rinden ecuaciones equivalentes?

- A. De las propiedades de la igualdad
- B. De las propiedades de los exponentes
- C. De las propiedades de los radicales
- D. De los productos especiales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuaciones equivalentes

Las operaciones que rinden ecuaciones equivalentes proceden de las propiedades de la igualdad.

---

### 160

De acuerdo con el libro de Matemáticas, ¿cuál es el primer paso que enlista el libro para generar una ecuación equivalente?

- A. Eliminar los símbolos de agrupación, combinar términos iguales o simplificar fracciones en uno o ambos miembros
- B. Sumar o restar la misma cantidad a cada miembro
- C. Multiplicar o dividir cada miembro por la misma cantidad diferente de cero
- D. Intercambiar los dos miembros de la ecuación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuaciones equivalentes

1. Elimine los símbolos de agrupación, combine términos iguales o simplifique fracciones en uno o ambos miembros de la ecuación.

---

### 161

De conformidad con el libro de Matemáticas, en el segundo paso para generar una ecuación equivalente, ¿qué se hace?

- A. Sumar o restar la misma cantidad a cada miembro de la ecuación
- B. Sumar o restar cantidades distintas a cada miembro de la ecuación
- C. Multiplicar cada miembro por la misma cantidad
- D. Eliminar los símbolos de agrupación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuaciones equivalentes

2. Sume (o reste) la misma cantidad a (de) cada miembro de la ecuación.

---

### 162

En relación con el libro de Matemáticas, en el tercer paso para generar una ecuación equivalente, ¿por qué cantidad puede multiplicarse o dividirse cada miembro?

- A. Por la misma cantidad, siempre que sea diferente de cero
- B. Por la misma cantidad, aunque sea cero
- C. Por cantidades distintas en cada miembro
- D. Únicamente por el coeficiente principal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuaciones equivalentes

3. Multiplique (o divida) cada miembro de la ecuación por (entre) la misma cantidad diferente de cero.

---

### 163

De acuerdo con el libro de Matemáticas, ¿cuál es el cuarto paso que enlista el libro para generar una ecuación equivalente?

- A. Intercambiar los dos miembros de la ecuación
- B. Elevar al cuadrado los dos miembros de la ecuación
- C. Igualar a cero los dos miembros de la ecuación
- D. Factorizar los dos miembros de la ecuación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · ecuaciones equivalentes

4. Intercambie los dos miembros de la ecuación.

---

### 164

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué debe hacerse después de resolver una ecuación?

- A. Comprobar cada solución en la ecuación original
- B. Escribir la ecuación en forma estándar
- C. Factorizar el resultado obtenido
- D. Verificar que la ecuación sea una identidad

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 51
**Subtema:** resolución de ecuaciones · comprobación de soluciones

Después de resolver una ecuación, usted debe comprobar cada solución en la ecuación original.

---

## Sub-lote 19 · Ecuaciones racionales y soluciones extrañas (1.6, p. 52)

### 165

En relación con el libro de Matemáticas, ¿qué implica una ecuación racional?

- A. Una o más expresiones racionales
- B. Uno o más radicales
- C. Uno o más exponentes racionales
- D. Uno o más valores absolutos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · ecuación racional

Una ecuación racional implica una o más expresiones racionales.

---

### 166

De acuerdo con el libro de Matemáticas, para resolver una ecuación racional, ¿por qué cantidad se multiplica cada término?

- A. Por el mínimo común denominador de todos los términos
- B. Por el máximo común divisor de todos los términos
- C. Por el denominador del primer término
- D. Por el coeficiente principal de la ecuación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · ecuación racional

Para resolver una ecuación de este tipo, multiplique cada término por el mínimo común denominador (MCD) de todos los términos.

---

### 167

De conformidad con el libro de Matemáticas, ¿qué logra multiplicar cada término por el mínimo común denominador?

- A. Deja sin fracciones a la ecuación original y produce una más simple
- B. Elimina las soluciones extrañas de la ecuación
- C. Convierte la ecuación en una identidad
- D. Reduce el grado de la ecuación a uno

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · ecuación racional

Esto deja sin fracciones a la ecuación original y produce una más simple.

---

### 168

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué ecuación puede deshacerse de los denominadores mediante multiplicación cruzada?

- A. Una ecuación con una sola fracción en cada miembro
- B. Una ecuación con dos o más fracciones en cada miembro
- C. Cualquier ecuación racional, sin importar cuántas fracciones tenga
- D. Una ecuación sin fracciones en ninguno de sus miembros

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · multiplicación cruzada

Una ecuación con una sola fracción en cada miembro puede deshacerse de los denominadores mediante multiplicación cruzada.

---

### 169

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cómo se hace la multiplicación cruzada?

- A. Multiplicando el numerador izquierdo por el denominador derecho y el numerador derecho por el denominador izquierdo
- B. Multiplicando los dos numeradores entre sí y los dos denominadores entre sí
- C. Multiplicando cada numerador por su propio denominador
- D. Multiplicando los dos miembros por el numerador izquierdo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · multiplicación cruzada

Para hacer esto, multiplique el numerador izquierdo por el denominador derecho y el numerador derecho por el denominador izquierdo.

---

### 170

De conformidad con el libro de Matemáticas, ¿cuándo es posible introducir una solución extraña?

- A. Cuando se multiplica o divide una ecuación por una expresión variable
- B. Cuando se suma o resta la misma cantidad a cada miembro
- C. Cuando se intercambian los dos miembros de la ecuación
- D. Cuando se combinan los términos semejantes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · solución extraña

Cuando se multiplica o divide una ecuación por (entre) una expresión variable, es posible introducir una solución extraña.

---

### 171

En relación con el libro de Matemáticas, ¿qué es una solución extraña?

- A. Una solución que no satisface la ecuación original
- B. Una solución que satisface la ecuación original más de una vez
- C. Una solución que no es un número real
- D. Una solución que hace cero al coeficiente principal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 52
**Subtema:** resolución de ecuaciones · solución extraña

Una solución extraña es una solución que no satisface la ecuación original.

---

## Sub-lote 20 · Ecuaciones cuadráticas y sus cuatro métodos (1.6, p. 53)

### 172

De acuerdo con el libro de Matemáticas, ¿cuál es la forma general de una ecuación cuadrática con x?

- A. ax² + bx + c = 0
- B. ax + b = 0
- C. ax³ + bx² + cx = 0
- D. ax² + bx = c

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · ecuación cuadrática

Una ecuación cuadrática con x es una ecuación que puede escribirse en la forma general: ax² + bx + c = 0.

---

### 173

De conformidad con el libro de Matemáticas, en la forma general de una ecuación cuadrática, ¿qué deben cumplir a, b y c?

- A. Ser números reales con a distinto de cero
- B. Ser números reales con c distinto de cero
- C. Ser números enteros con a distinto de cero
- D. Ser números reales cualesquiera

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · ecuación cuadrática

Donde a, b y c son números reales con a ≠ 0.

---

### 174

En relación con el libro de Matemáticas, ¿cómo se llama también una ecuación cuadrática con x?

- A. Ecuación polinomial de segundo grado con x
- B. Ecuación polinomial de tercer grado con x
- C. Ecuación lineal de segundo orden con x
- D. Ecuación racional de segundo grado con x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · ecuación cuadrática

Una ecuación cuadrática con x también se llama ecuación polinomial de segundo grado con x.

---

### 175

De acuerdo con el libro de Matemáticas, ¿cuántos métodos de resolución de ecuaciones cuadráticas enlista el libro?

- A. Cuatro
- B. Dos
- C. Tres
- D. Cinco

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · métodos de resolución

Usted debería familiarizarse con los cuatro métodos de resolución de ecuaciones cuadráticas que se enlistan en seguida.

---

### 176

De conformidad con el libro de Matemáticas, ¿cómo se llama la propiedad que afirma que si ab = 0, entonces a = 0 o b = 0?

- A. Propiedad de factor cero
- B. Principio de raíz cuadrada
- C. Propiedad distributiva
- D. Propiedad de la igualdad

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · factorización

Factorización: Si ab = 0, entonces a = 0 o b = 0. Propiedad de factor cero.

---

### 177

En relación con el libro de Matemáticas, ¿qué establece el principio de raíz cuadrada?

- A. Que si u² = c, donde c > 0, entonces u = ±√c
- B. Que si u² = c, donde c > 0, entonces u = √c únicamente
- C. Que si u² = c, para cualquier c, entonces u = ±√c
- D. Que si u = √c, entonces u² = ±c

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · extracción de raíces cuadradas

Extracción de raíces cuadradas: Si u² = c, donde c > 0, entonces u = ±√c. Principio de raíz cuadrada.

---

### 178

De acuerdo con el libro de Matemáticas, al completar el cuadrado en la ecuación x² + bx = c, ¿qué cantidad se suma a cada miembro?

- A. (b/2)²
- B. (b/2)
- C. (b²/2)
- D. (2b)²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · completación del cuadrado

Completación del cuadrado: Si x² + bx = c, entonces x² + bx + (b/2)² = c + (b/2)². Sume (b/2)² a cada miembro.

---

### 179

De conformidad con el libro de Matemáticas, ¿cuál es la fórmula cuadrática?

- A. x = (−b ± √(b² − 4ac)) / 2a
- B. x = (−b ± √(b² + 4ac)) / 2a
- C. x = (b ± √(b² − 4ac)) / 2a
- D. x = (−b ± √(b² − 4ac)) / 2c

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · fórmula cuadrática

Fórmula cuadrática: Si ax² + bx + c = 0, entonces x = (−b ± √(b² − 4ac)) / 2a.

---

### 180

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿con qué dos métodos es posible resolver todas las ecuaciones cuadráticas?

- A. Completando el cuadrado o usando la fórmula cuadrática
- B. Por factorización o por extracción de raíces cuadradas
- C. Por factorización o completando el cuadrado
- D. Por extracción de raíces cuadradas o usando la fórmula cuadrática

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 53
**Subtema:** resolución de ecuaciones · métodos de resolución

Es posible resolver todas las ecuaciones cuadráticas completando el cuadrado o usando la fórmula cuadrática.

---

## Sub-lote 21 · Condiciones del factor cero y de la completación del cuadrado (1.6, pp. 54–55)

### 181

De acuerdo con el libro de Matemáticas, ¿a qué ecuaciones se aplica la propiedad de factor cero?

- A. Sólo a las escritas en forma general, en la que el miembro derecho es igual a cero
- B. A cualquier ecuación cuadrática, sin importar cómo esté escrita
- C. Sólo a las ecuaciones cuyo coeficiente principal es 1
- D. Sólo a las ecuaciones racionales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 54
**Subtema:** resolución de ecuaciones · propiedad de factor cero

Esta propiedad se aplica sólo a ecuaciones escritas en forma general (en la que el miembro derecho de la ecuación es igual a cero).

---

### 182

De conformidad con el libro de Matemáticas, ¿qué debe hacerse con los términos antes de factorizar?

- A. Reunirlos todos en un miembro
- B. Repartirlos por igual entre los dos miembros
- C. Dividirlos entre el coeficiente principal
- D. Ordenarlos en potencias ascendentes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 54
**Subtema:** resolución de ecuaciones · propiedad de factor cero

Así, reúna todos los términos en un miembro antes de factorizar.

---

### 183

En relación con el libro de Matemáticas, al resolver una ecuación cuadrática completando el cuadrado, ¿con qué fin debe sumarse (b/2)² a cada miembro?

- A. A fin de mantener la igualdad
- B. A fin de eliminar el término constante
- C. A fin de reducir el grado de la ecuación
- D. A fin de evitar las soluciones extrañas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 55
**Subtema:** resolución de ecuaciones · completación del cuadrado

Cuando resuelve ecuaciones cuadráticas completando el cuadrado, debe sumar (b/2)² a cada miembro, a fin de mantener la igualdad.

---

### 184

De acuerdo con el libro de Matemáticas, cuando el coeficiente principal no es 1, ¿qué debe hacerse antes de completar el cuadrado?

- A. Dividir cada miembro de la ecuación entre el coeficiente principal
- B. Multiplicar cada miembro por el coeficiente principal
- C. Restar el coeficiente principal a cada miembro
- D. Igualar el coeficiente principal a cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 55
**Subtema:** resolución de ecuaciones · completación del cuadrado

Cuando el coeficiente principal no es 1, divida cada miembro de la ecuación entre el coeficiente principal antes de completar el cuadrado.

---

## Sub-lote 22 · Ecuaciones polinomiales de grado superior (1.6, p. 57)

### 185

De conformidad con el libro de Matemáticas, ¿qué método puede extenderse para resolver ecuaciones polinomiales de grados superiores?

- A. El usado para resolver ecuaciones cuadráticas
- B. El usado para resolver ecuaciones racionales
- C. El usado para racionalizar denominadores
- D. El usado para resolver ecuaciones de valor absoluto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 57
**Subtema:** resolución de ecuaciones · ecuaciones polinomiales de grado superior

A veces, el método usado para resolver ecuaciones cuadráticas puede extenderse para resolver ecuaciones polinomiales de grados superiores.

---

### 186

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cuál es un error común al resolver una ecuación polinomial?

- A. Dividir cada miembro de la ecuación entre el factor variable
- B. Escribir la ecuación en forma general antes de factorizar
- C. Igualar cada factor a cero
- D. Comprobar las soluciones en la ecuación original

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 57
**Subtema:** resolución de ecuaciones · ecuaciones polinomiales de grado superior

Un error común al resolver una ecuación polinomial es dividir cada miembro de la ecuación entre el factor variable.

---

### 187

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué se pierde al dividir cada miembro entre el factor variable?

- A. La solución x = 0
- B. Todas las soluciones negativas
- C. El coeficiente principal
- D. El término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 57
**Subtema:** resolución de ecuaciones · ecuaciones polinomiales de grado superior

Esto pierde la solución x = 0.

---

### 188

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cuál es el procedimiento correcto para resolver una ecuación polinomial?

- A. Escribirla siempre en forma general, factorizar el polinomio e igualar cada factor a cero
- B. Dividirla entre el factor variable y después factorizar
- C. Completar el cuadrado y después extraer raíces
- D. Multiplicar cada término por el mínimo común denominador

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 57
**Subtema:** resolución de ecuaciones · ecuaciones polinomiales de grado superior

Cuando resuelva una ecuación polinomial, escriba siempre la ecuación en forma general, factorice después el polinomio e iguale cada factor a cero. No divida cada miembro de una ecuación entre un factor variable en un intento de simplificar la ecuación.

---

## Sub-lote 23 · Ecuaciones radicales y de valor absoluto (1.6, pp. 58–59)

### 189

En relación con el libro de Matemáticas, ¿qué es una ecuación radical?

- A. Una ecuación que implica una o más expresiones radicales
- B. Una ecuación que implica una o más expresiones racionales
- C. Una ecuación que implica una o más expresiones de valor absoluto
- D. Una ecuación cuyo grado es mayor que dos

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 58
**Subtema:** resolución de ecuaciones · ecuación radical

Una ecuación radical es una ecuación que implica una o más expresiones radicales.

---

### 190

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué operaciones pueden introducir soluciones extrañas?

- A. Elevar al cuadrado cada miembro o elevar cada miembro a una potencia racional
- B. Sumar o restar la misma cantidad a cada miembro
- C. Intercambiar los dos miembros de la ecuación
- D. Combinar los términos semejantes de cada miembro

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 58
**Subtema:** resolución de ecuaciones · solución extraña

Cuando se eleva al cuadrado cada miembro de una ecuación o se eleva cada miembro de una ecuación a una potencia racional, es posible introducir soluciones extrañas.

---

### 191

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué resulta crucial cuando se usan esas operaciones?

- A. La comprobación de las soluciones
- B. La factorización previa del polinomio
- C. El uso de la fórmula cuadrática
- D. La eliminación de los denominadores

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 58
**Subtema:** resolución de ecuaciones · solución extraña

Así, cuando use tales operaciones, la comprobación de sus soluciones es crucial.

---

### 192

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿qué ocurre cuando una ecuación contiene dos expresiones radicales?

- A. Que podría no ser posible despejar ambas en el primer paso, y haya que despejarlas en dos etapas diferentes
- B. Que siempre pueden despejarse ambas en el primer paso
- C. Que la ecuación deja de tener solución real
- D. Que debe resolverse por la fórmula cuadrática

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 58
**Subtema:** resolución de ecuaciones · ecuación radical

Cuando una ecuación contiene dos expresiones radicales, podría no ser posible despejar ambas en el primer paso. En tal caso, quizá usted deba despejar las expresiones radicales en dos etapas diferentes de la solución.

---

### 193

De acuerdo con el libro de Matemáticas, ¿qué es una ecuación de valor absoluto?

- A. Una ecuación que implica una o más expresiones de valor absoluto
- B. Una ecuación que implica una o más expresiones radicales
- C. Una ecuación cuyas soluciones son siempre positivas
- D. Una ecuación que carece de término constante

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 59
**Subtema:** resolución de ecuaciones · ecuación de valor absoluto

Una ecuación de valor absoluto es una ecuación que implica una o más expresiones de valor absoluto.

---

### 194

De conformidad con el libro de Matemáticas, para resolver una ecuación de valor absoluto, ¿qué debe recordarse sobre la expresión que está dentro de las barras?

- A. Que puede ser positiva o negativa
- B. Que siempre es positiva
- C. Que siempre es negativa
- D. Que siempre vale cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 59
**Subtema:** resolución de ecuaciones · ecuación de valor absoluto

Para resolver una ecuación de este tipo, recuerde que la expresión dentro de las barras de valor absoluto puede ser positiva o negativa.

---

### 195

En relación con el libro de Matemáticas, ¿en qué resulta el hecho de que la expresión dentro de las barras pueda ser positiva o negativa?

- A. En dos ecuaciones aparte, cada una de las cuales debe resolverse
- B. En una sola ecuación con dos soluciones inmediatas
- C. En tres ecuaciones aparte, una por cada signo posible
- D. En una ecuación sin solución real

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 59
**Subtema:** resolución de ecuaciones · ecuación de valor absoluto

Esto resulta en dos ecuaciones aparte, cada una de las cuales debe resolverse.

---

## Sub-lote 24 · Fórmulas comunes — cierra el 1.6 (p. 60)

### 196

De acuerdo con el libro de Matemáticas, ¿cuál es la fórmula del área de un rectángulo?

- A. A = lw
- B. A = 2l + 2w
- C. A = lwh
- D. A = πr²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Rectángulo: A = lw.

---

### 197

De conformidad con el libro de Matemáticas, ¿cuál es la fórmula del perímetro de un rectángulo?

- A. P = 2l + 2w
- B. P = lw
- C. P = l + w
- D. P = 2πr

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Rectángulo: P = 2l + 2w.

---

### 198

En relación con el libro de Matemáticas, ¿cuál es la fórmula del área de un círculo?

- A. A = πr²
- B. A = 2πr
- C. A = πr³
- D. A = (4/3)πr²

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Círculo: A = πr².

---

### 199

De acuerdo con el libro de Matemáticas, ¿cuál es la fórmula de la circunferencia de un círculo?

- A. C = 2πr
- B. C = πr²
- C. C = πr
- D. C = 2l + 2w

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Círculo: C = 2πr.

---

### 200

De conformidad con el libro de Matemáticas, ¿cuál es la fórmula del volumen de un rectángulo sólido?

- A. V = lwh
- B. V = lw
- C. V = πr²h
- D. V = (4/3)πr³

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Rectángulo sólido: V = lwh.

---

### 201

En relación con el libro de Matemáticas, ¿cuál es la fórmula del volumen de un cilindro circular?

- A. V = πr²h
- B. V = πrh
- C. V = (4/3)πr³
- D. V = lwh

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Cilindro circular: V = πr²h.

---

### 202

De acuerdo con el libro de Matemáticas, ¿cuál es la fórmula del volumen de una esfera?

- A. V = (4/3)πr³
- B. V = (3/4)πr³
- C. V = 4πr²
- D. V = πr²h

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 60
**Subtema:** resolución de ecuaciones · fórmulas comunes

Esfera: V = (4/3)πr³.

---

## Sub-lote 25 · Cambio de base (1.8, p. 72)

### 203

De conformidad con el libro de Matemáticas, ¿qué base tienen los logaritmos comunes y cuál los logaritmos naturales?

- A. Los comunes, base 10; los naturales, base e
- B. Los comunes, base e; los naturales, base 10
- C. Los comunes, base 2; los naturales, base 10
- D. Los comunes, base 10; los naturales, base 2

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Casi todas las calculadoras tienen sólo dos tipos de teclas de logaritmos, LOG para logaritmos comunes (base 10) y LN para logaritmos naturales (base e).

---

### 204

En relación con el libro de Matemáticas, ¿en qué caso es necesario usar la fórmula de cambio de base?

- A. Cuando es necesario evaluar logaritmos con bases distintas de la común y la natural
- B. Cuando el logaritmo tiene base 10
- C. Cuando el logaritmo tiene base e
- D. Cuando el argumento del logaritmo es negativo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Aun cuando los logaritmos comunes y los naturales son los que se usan con más frecuencia, ocasionalmente es necesario evaluar logaritmos con otras bases. Para hacer esto se puede usar la fórmula de cambio de base.

---

### 205

De acuerdo con el libro de Matemáticas, en la fórmula de cambio de base, ¿qué condiciones deben cumplir a, b y x?

- A. Ser números reales positivos, con a distinto de 1 y b distinto de 1
- B. Ser números reales cualesquiera, con a distinto de 0 y b distinto de 0
- C. Ser números enteros positivos, con a distinto de 1
- D. Ser números reales positivos, sin ninguna otra restricción

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Sean a, b y x números reales positivos tales que a ≠ 1 y b ≠ 1.

---

### 206

De conformidad con el libro de Matemáticas, ¿cuál es la fórmula de cambio de base a una base b?

- A. log_a x = (log_b x) / (log_b a)
- B. log_a x = (log_b a) / (log_b x)
- C. log_a x = (log_b x) · (log_b a)
- D. log_a x = log_b x − log_b a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Base b: log_a x = (log_b x) / (log_b a).

---

### 207

En relación con el libro de Matemáticas, ¿cuál es la fórmula de cambio de base a base 10?

- A. log_a x = (log x) / (log a)
- B. log_a x = (log a) / (log x)
- C. log_a x = (ln x) / (ln a)
- D. log_a x = log x − log a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Base 10: log_a x = (log x) / (log a).

---

### 208

De acuerdo con el libro de Matemáticas, ¿cuál es la fórmula de cambio de base a base e?

- A. log_a x = (ln x) / (ln a)
- B. log_a x = (ln a) / (ln x)
- C. log_a x = (log x) / (log a)
- D. log_a x = ln x − ln a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Base e: log_a x = (ln x) / (ln a).

---

### 209

De conformidad con el libro de Matemáticas, ¿qué son los logaritmos de base a respecto de los logaritmos con base b?

- A. Múltiplos constantes
- B. Divisores exactos
- C. Potencias sucesivas
- D. Raíces enésimas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

Una forma de ver la fórmula de cambio de base es que los logaritmos de base a son múltiplos constantes de logaritmos con base b.

---

### 210

En relación con el libro de Matemáticas, ¿cuál es ese multiplicador constante?

- A. 1 / (log_b a)
- B. log_b a
- C. 1 / (log_b x)
- D. log_b x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 72
**Subtema:** propiedades de los logaritmos · cambio de base

El multiplicador constante es 1 / (log_b a).

---

## Sub-lote 26 · Propiedades de los logaritmos y John Napier (1.8, p. 73)

### 211

De acuerdo con el libro de Matemáticas, ¿de qué función es función inversa la función logarítmica con base a?

- A. De la función exponencial con base a
- B. De la función radical con índice a
- C. De la función racional con denominador a
- D. De la función polinomial de grado a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · función inversa

Usted ya sabe que la función logarítmica con base a es la función inversa de la función exponencial con base a.

---

### 212

De conformidad con el libro de Matemáticas, en el recuadro de las propiedades de los logaritmos, ¿qué deben ser u y v?

- A. Números reales positivos
- B. Números reales cualesquiera
- C. Números enteros positivos
- D. Números reales distintos de 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · propiedades

Sea a un número positivo tal que a ≠ 1, sea n un número real y sean u y v números reales positivos.

---

### 213

En relación con el libro de Matemáticas, ¿qué establece la propiedad del producto de los logaritmos?

- A. Que log_a(uv) = log_a u + log_a v
- B. Que log_a(uv) = log_a u · log_a v
- C. Que log_a(uv) = log_a u − log_a v
- D. Que log_a(uv) = n log_a u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · propiedad del producto

1. Propiedad del producto: log_a(uv) = log_a u + log_a v; ln(uv) = ln u + ln v.

---

### 214

De acuerdo con el libro de Matemáticas, ¿qué establece la propiedad del cociente de los logaritmos?

- A. Que log_a(u/v) = log_a u − log_a v
- B. Que log_a(u/v) = log_a u + log_a v
- C. Que log_a(u/v) = (log_a u) / (log_a v)
- D. Que log_a(u/v) = log_a v − log_a u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · propiedad del cociente

2. Propiedad del cociente: log_a(u/v) = log_a u − log_a v; ln(u/v) = ln u − ln v.

---

### 215

De conformidad con el libro de Matemáticas, ¿qué establece la propiedad de la potencia de los logaritmos?

- A. Que log_a uⁿ = n log_a u
- B. Que log_a uⁿ = (log_a u)ⁿ
- C. Que log_a uⁿ = log_a u + n
- D. Que log_a uⁿ = n + log_a u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · propiedad de la potencia

3. Propiedad de la potencia: log_a uⁿ = n log_a u; ln uⁿ = n ln u.

---

### 216

En relación con el libro de Matemáticas, según el recuadro COMENTARIO, ¿existe alguna propiedad general para reescribir log_a(u ± v)?

- A. No existe ninguna propiedad general para ese caso
- B. Sí, es la propiedad del producto
- C. Sí, es la propiedad del cociente
- D. Sí, es la propiedad de la potencia

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · propiedades

No hay una propiedad general que se pueda usar para reescribir log_a(u ± v).

---

### 217

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿a qué no es igual log_a(u + v)?

- A. A log_a u + log_a v
- B. A log_a u − log_a v
- C. A log_a u · log_a v
- D. A n log_a u

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · propiedades

Específicamente, log_a(u + v) no es igual a log_a u + log_a v.

---

### 218

De conformidad con el libro de Matemáticas, ¿quién inventó los logaritmos y de qué nacionalidad era?

- A. John Napier, matemático escocés
- B. John Napier, matemático inglés
- C. John Napier, matemático irlandés
- D. John Napier, matemático galés

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · nota histórica

John Napier, matemático escocés, inventó los logaritmos.

---

### 219

En relación con el libro de Matemáticas, ¿con qué propósito inventó Napier los logaritmos?

- A. Como medio para simplificar cálculos tediosos
- B. Como medio para resolver ecuaciones cuadráticas
- C. Como medio para medir la intensidad del sonido
- D. Como medio para representar números muy grandes

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · nota histórica

John Napier, matemático escocés, inventó los logaritmos como medio para simplificar cálculos tediosos.

---

### 220

De acuerdo con el libro de Matemáticas, ¿cuánto tiempo trabajó Napier en el desarrollo de los logaritmos y en qué año publicó su trabajo?

- A. 20 años, y publicó en 1614
- B. 20 años, y publicó en 1641
- C. 10 años, y publicó en 1614
- D. 30 años, y publicó en 1604

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 73
**Subtema:** propiedades de los logaritmos · nota histórica

Napier trabajó durante 20 años en el desarrollo de los logaritmos antes de publicar su trabajo en 1614.

---

## Sub-lote 27 · Reescritura de expresiones logarítmicas — cierra el 1.8 (pp. 74–75)

### 221

De conformidad con el libro de Matemáticas, ¿para qué son útiles las propiedades de los logaritmos?

- A. Para reescribir expresiones logarítmicas en formas que simplifican las operaciones de álgebra
- B. Para determinar la base de cualquier logaritmo
- C. Para convertir cualquier ecuación en una identidad
- D. Para eliminar las soluciones extrañas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 74
**Subtema:** propiedades de los logaritmos · reescritura de expresiones

Las propiedades de los logaritmos son útiles para reescribir expresiones logarítmicas en formas que simplifican las operaciones de álgebra.

---

### 222

En relación con el libro de Matemáticas, ¿en qué convierten las propiedades de los logaritmos las formas complicadas de productos, cocientes y exponenciales?

- A. En más sencillas sumas, diferencias y productos, respectivamente
- B. En más sencillos productos, cocientes y potencias, respectivamente
- C. En más sencillas diferencias, sumas y cocientes, respectivamente
- D. En más sencillas raíces, potencias y sumas, respectivamente

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 74
**Subtema:** propiedades de los logaritmos · reescritura de expresiones

Esto es cierto porque estas propiedades convierten formas complicadas de productos, cocientes y exponenciales en más sencillas sumas, diferencias y productos, respectivamente.

---

### 223

De acuerdo con el libro de Matemáticas, ¿cómo se llama el procedimiento inverso al de expandir expresiones logarítmicas?

- A. Condensar expresiones logarítmicas
- B. Racionalizar expresiones logarítmicas
- C. Factorizar expresiones logarítmicas
- D. Simplificar el índice de la expresión

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 74
**Subtema:** propiedades de los logaritmos · condensar y expandir

Las propiedades de los logaritmos se usaron para expandir expresiones logarítmicas. Este procedimiento se invierte y las propiedades de los logaritmos se usan para condensar expresiones logarítmicas.

---

### 224

De conformidad con el libro de Matemáticas, ¿qué método sirve para determinar cómo están relacionados los valores de x y y de un conjunto de datos no lineales?

- A. Tomar el logaritmo natural de cada uno de esos valores
- B. Tomar el logaritmo común de cada uno de esos valores
- C. Elevar al cuadrado cada uno de esos valores
- D. Sacar la raíz cúbica de cada uno de esos valores

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 75
**Subtema:** propiedades de los logaritmos · aplicación

Un método para determinar la forma en que los valores de x y y para un conjunto de datos no lineales están relacionados es tomar el logaritmo natural de cada uno de esos valores de x y y.

---

### 225

En relación con el libro de Matemáticas, si los puntos (ln x, ln y) se grafican y caen sobre una recta, ¿qué ecuación relaciona los valores de x y y?

- A. ln y = m ln x, donde m es la pendiente de la recta
- B. ln y = m + ln x, donde m es la pendiente de la recta
- C. ln y = ln x, sin importar la pendiente
- D. ln y = m ln x, donde m es la ordenada al origen

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 75
**Subtema:** propiedades de los logaritmos · aplicación

Si los puntos (ln x, ln y) se grafican y caen sobre una recta, entonces se puede determinar que los valores de x y y están relacionados por la ecuación ln y = m ln x, donde m es la pendiente de la recta.

---

## Sub-lote 28 · Estrategias, propiedades biunívocas e inversas (1.9, pp. 79–80)

### 226

De acuerdo con el libro de Matemáticas, ¿cuántas estrategias básicas hay para resolver ecuaciones exponenciales o logarítmicas?

- A. Dos
- B. Tres
- C. Cuatro
- D. Una

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · estrategias

Hay dos estrategias básicas para resolver ecuaciones exponenciales o logarítmicas.

---

### 227

De conformidad con el libro de Matemáticas, ¿en qué está basada la primera estrategia y para qué se usa?

- A. En las propiedades biunívocas, y se usa para resolver ecuaciones exponenciales y logarítmicas sencillas
- B. En las propiedades inversas, y se usa para resolver ecuaciones exponenciales y logarítmicas sencillas
- C. En las propiedades biunívocas, y se usa sólo para ecuaciones logarítmicas complicadas
- D. En la fórmula de cambio de base, y se usa para cualquier ecuación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · estrategias

La primera está basada en las propiedades biunívocas y se usa para resolver ecuaciones exponenciales y logarítmicas sencillas.

---

### 228

En relación con el libro de Matemáticas, ¿en qué está basada la segunda estrategia?

- A. En las propiedades inversas
- B. En las propiedades biunívocas
- C. En la propiedad de factor cero
- D. En el principio de raíz cuadrada

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · estrategias

La segunda está basada en las propiedades inversas.

---

### 229

De acuerdo con el libro de Matemáticas, ¿qué condiciones debe cumplir a para que valgan las propiedades biunívocas e inversas?

- A. Que a sea mayor que cero y distinto de 1
- B. Que a sea mayor que 1
- C. Que a sea distinto de cero
- D. Que a sea un número entero positivo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · propiedades

Para a > 0 y a ≠ 1, las siguientes propiedades son verdaderas para toda x y toda y para las cuales log_a x y log_a y están definidos.

---

### 230

De conformidad con el libro de Matemáticas, ¿qué establece la propiedad biunívoca de las funciones exponenciales?

- A. Que aˣ = aʸ si y sólo si x = y
- B. Que aˣ = aʸ si y sólo si x = −y
- C. Que aˣ = aʸ siempre, para cualesquiera x y y
- D. Que aˣ = aʸ si y sólo si a = 1

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · propiedades biunívocas

Propiedades biunívocas: aˣ = aʸ si y sólo si x = y.

---

### 231

En relación con el libro de Matemáticas, ¿qué establece la propiedad biunívoca de las funciones logarítmicas?

- A. Que log_a x = log_a y si y sólo si x = y
- B. Que log_a x = log_a y si y sólo si x = 1/y
- C. Que log_a x = log_a y sólo cuando a = 10
- D. Que log_a x = log_a y si y sólo si a = x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · propiedades biunívocas

Propiedades biunívocas: log_a x = log_a y si y sólo si x = y.

---

### 232

De acuerdo con el libro de Matemáticas, ¿cuáles son las dos propiedades inversas?

- A. a^(log_a x) = x y log_a aˣ = x
- B. a^(log_a x) = a y log_a aˣ = a
- C. a^(log_a x) = 1 y log_a aˣ = 1
- D. a^(log_a x) = x y log_a aˣ = a

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · propiedades inversas

Propiedades inversas: a^(log_a x) = x; log_a aˣ = x.

---

### 233

De conformidad con el libro de Matemáticas, ¿cuál es la primera de las estrategias para resolver ecuaciones exponenciales y logarítmicas?

- A. Reescribir la ecuación original en una forma que permita usar las propiedades biunívocas
- B. Reescribir una ecuación exponencial en forma logarítmica
- C. Reescribir una ecuación logarítmica en forma exponencial
- D. Aplicar la fórmula de cambio de base a los dos miembros

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · estrategias

1. Reescriba la ecuación original en una forma que permita usar las propiedades biunívocas de funciones exponenciales o logarítmicas.

---

### 234

En relación con el libro de Matemáticas, ¿cuál es la segunda de las estrategias para resolver ecuaciones exponenciales y logarítmicas?

- A. Reescribir una ecuación exponencial en forma logarítmica y aplicar la propiedad inversa de las funciones logarítmicas
- B. Reescribir una ecuación logarítmica en forma exponencial y aplicar la propiedad inversa de las funciones exponenciales
- C. Reescribir la ecuación original para usar las propiedades biunívocas
- D. Elevar al cuadrado cada miembro de la ecuación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · estrategias

2. Reescriba una ecuación exponencial en forma logarítmica y aplique la propiedad inversa de las funciones logarítmicas.

---

### 235

De acuerdo con el libro de Matemáticas, ¿cuál es la tercera de las estrategias para resolver ecuaciones exponenciales y logarítmicas?

- A. Reescribir una ecuación logarítmica en forma exponencial y aplicar la propiedad inversa de las funciones exponenciales
- B. Reescribir una ecuación exponencial en forma logarítmica y aplicar la propiedad inversa de las funciones logarítmicas
- C. Reescribir la ecuación original para usar las propiedades biunívocas
- D. Multiplicar cada término por el mínimo común denominador

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 79
**Subtema:** ecuaciones exponenciales y logarítmicas · estrategias

3. Reescriba una ecuación logarítmica en forma exponencial y aplique la propiedad inversa de las funciones exponenciales.

---

### 236

De conformidad con el libro de Matemáticas, ¿cuándo se prefiere una respuesta exacta?

- A. Cuando la solución es un paso intermedio en un problema más grande
- B. Cuando la solución es la respuesta final del problema
- C. Cuando la solución es un número irracional
- D. Cuando la solución se obtiene con calculadora

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 80
**Subtema:** ecuaciones exponenciales y logarítmicas · solución exacta y aproximada

Se prefiere una respuesta exacta cuando la solución es un paso intermedio en un problema más grande.

---

### 237

En relación con el libro de Matemáticas, para una respuesta final, ¿qué ventaja tiene una solución aproximada?

- A. Que es más fácil de entender
- B. Que es siempre más precisa
- C. Que no requiere calculadora
- D. Que evita las soluciones extrañas

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 80
**Subtema:** ecuaciones exponenciales y logarítmicas · solución exacta y aproximada

Para una respuesta final, una solución aproximada es más fácil de entender.

---

## Sub-lote 29 · Exponenciación y dominio — cierra el 1.9 (pp. 81–83)

### 238

De acuerdo con el libro de Matemáticas, cuando una ecuación implica dos o más expresiones exponenciales, ¿qué ocurre con el procedimiento de solución?

- A. Que aún puede usarse un procedimiento similar, aunque puede incluir técnicas algebraicas adicionales
- B. Que el procedimiento deja de servir por completo
- C. Que sólo puede resolverse con calculadora
- D. Que debe aplicarse la fórmula cuadrática

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 81
**Subtema:** ecuaciones exponenciales y logarítmicas · ecuaciones exponenciales

Cuando una ecuación implica dos o más expresiones exponenciales, aún se puede utilizar un procedimiento similar. Sin embargo, puede incluir técnicas algebraicas adicionales.

---

### 239

De conformidad con el libro de Matemáticas, para resolver una ecuación logarítmica, ¿en qué forma puede escribirse?

- A. En forma exponencial
- B. En forma radical
- C. En forma racional
- D. En forma de valor absoluto

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 82
**Subtema:** ecuaciones exponenciales y logarítmicas · ecuaciones logarítmicas

Para resolver una ecuación logarítmica puede escribirla en forma exponencial.

---

### 240

En relación con el libro de Matemáticas, ¿cómo se denomina el procedimiento de escribir en forma exponencial cada lado de una ecuación logarítmica?

- A. Exponenciación de cada lado de una ecuación
- B. Racionalización de cada lado de una ecuación
- C. Condensación de cada lado de una ecuación
- D. Cambio de base de cada lado de una ecuación

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 82
**Subtema:** ecuaciones exponenciales y logarítmicas · exponenciación

Este procedimiento se denomina exponenciación de cada lado de una ecuación.

---

### 241

De acuerdo con el libro de Matemáticas, según el recuadro COMENTARIO, ¿para qué debe comprobarse cada solución en la ecuación original?

- A. Para verificar que la respuesta es correcta y asegurarse de que está en el dominio de la ecuación original
- B. Únicamente para verificar que la respuesta es correcta
- C. Únicamente para asegurarse de que la respuesta es un número entero
- D. Para determinar la base del logaritmo

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 82
**Subtema:** ecuaciones exponenciales y logarítmicas · comprobación de soluciones

Al resolver las ecuaciones, recuerde comprobar sus soluciones en la ecuación original para verificar que la respuesta es correcta y asegurarse de que la respuesta está en el dominio de la ecuación original.

---

### 242

De conformidad con el libro de Matemáticas, ¿por qué debe asegurarse de comprobar las soluciones extrañas de las ecuaciones logarítmicas?

- A. Porque el dominio de una función logarítmica generalmente no incluye todos los números reales
- B. Porque las funciones logarítmicas nunca tienen soluciones reales
- C. Porque el dominio de una función logarítmica siempre son los números negativos
- D. Porque las ecuaciones logarítmicas tienen siempre dos soluciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 83
**Subtema:** ecuaciones exponenciales y logarítmicas · dominio y soluciones extrañas

El dominio de una función logarítmica generalmente no incluye todos los números reales, por lo que debe asegurarse de comprobar las soluciones extrañas de las ecuaciones logarítmicas.

---

## Sub-lote 30 · Sistemas de ecuaciones y método de sustitución (1.10, pp. 89–90)

### 243

En relación con el libro de Matemáticas, ¿qué es una solución de un sistema de ecuaciones?

- A. Un par ordenado que satisface cada ecuación del sistema
- B. Un par ordenado que satisface al menos una ecuación del sistema
- C. Un número real que satisface la primera ecuación del sistema
- D. El conjunto de los coeficientes de las dos ecuaciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · solución de un sistema

Una solución de este sistema es un par ordenado que satisface cada ecuación del mismo.

---

### 244

De acuerdo con el libro de Matemáticas, ¿cómo se llama determinar el conjunto de todas las soluciones de un sistema?

- A. Resolver el sistema de ecuaciones
- B. Comprobar el sistema de ecuaciones
- C. Sustituir hacia atrás en el sistema
- D. Graficar el sistema de ecuaciones

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · solución de un sistema

Determinar el conjunto de todas las soluciones se llama resolver el sistema de ecuaciones.

---

### 245

De conformidad con el libro de Matemáticas, ¿cuál es el primer paso del método de sustitución?

- A. Despejar en una de las ecuaciones una variable en términos de la otra
- B. Sustituir la expresión hallada en la otra ecuación
- C. Comprobar que la solución satisface las ecuaciones originales
- D. Graficar las dos ecuaciones del sistema

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · método de sustitución

1. Despeje en una de las ecuaciones una variable en términos de la otra.

---

### 246

En relación con el libro de Matemáticas, ¿cuál es el segundo paso del método de sustitución?

- A. Sustituir la expresión hallada en el paso 1 en la otra ecuación, para obtener una ecuación de una variable
- B. Sustituir la expresión hallada en el paso 1 en la misma ecuación de la que se despejó
- C. Resolver la ecuación obtenida en el paso 1
- D. Comprobar la solución en las ecuaciones originales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · método de sustitución

2. Sustituya la expresión hallada en el paso 1 en la otra ecuación para obtener una ecuación de una variable.

---

### 247

De acuerdo con el libro de Matemáticas, ¿cuál es el tercer paso del método de sustitución?

- A. Resolver la ecuación obtenida en el paso 2
- B. Despejar la segunda variable
- C. Graficar la ecuación obtenida
- D. Comprobar la solución en las ecuaciones originales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · método de sustitución

3. Resuelva la ecuación obtenida en el paso 2.

---

### 248

De conformidad con el libro de Matemáticas, ¿cuál es el cuarto paso del método de sustitución?

- A. Sustituir hacia atrás el valor obtenido en el paso 3 en la expresión obtenida en el paso 1, para determinar el valor de la otra variable
- B. Sustituir hacia atrás el valor obtenido en el paso 3 en la ecuación obtenida en el paso 2
- C. Volver a despejar la primera variable
- D. Comprobar la solución en las ecuaciones originales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · método de sustitución

4. Sustituya hacia atrás el valor obtenido en el paso 3 en la expresión obtenida en el paso 1, para determinar el valor de la otra variable.

---

### 249

En relación con el libro de Matemáticas, ¿cuál es el quinto paso del método de sustitución?

- A. Comprobar que la solución satisface cada una de las ecuaciones originales
- B. Comprobar que la solución satisface al menos una de las ecuaciones originales
- C. Graficar el sistema para confirmar el resultado
- D. Volver a despejar la segunda variable

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 89
**Subtema:** sistemas de ecuaciones · método de sustitución

5. Compruebe que la solución satisface cada una de las ecuaciones originales.

---

### 250

De acuerdo con el libro de Matemáticas, ¿qué implica el término sustitución hacia atrás?

- A. Trabajar hacia atrás: despejar primero una de las variables y después sustituir ese valor en una de las ecuaciones del sistema para determinar la otra
- B. Resolver el sistema empezando por la segunda ecuación
- C. Escribir las ecuaciones del sistema en orden inverso
- D. Comprobar la solución antes de calcularla

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 90
**Subtema:** sistemas de ecuaciones · sustitución hacia atrás

El término sustitución hacia atrás implica que trabaje hacia atrás. Primero despeja una de las variables y después sustituya ese valor hacia atrás en una de las ecuaciones del sistema para determinar el valor de la otra variable.

---

### 251

De conformidad con el libro de Matemáticas, según el recuadro COMENTARIO, ¿cómo debe comprobarse siempre la solución de un sistema?

- A. Sustituyéndola en cada ecuación del sistema original
- B. Sustituyéndola en la primera ecuación del sistema original
- C. Graficando las dos ecuaciones del sistema
- D. Repitiendo el método de sustitución en orden inverso

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 90
**Subtema:** sistemas de ecuaciones · comprobación de soluciones

Se requieren muchos pasos para resolver un sistema de ecuaciones, así que hay muchas posibles maneras de cometer errores aritméticos. Compruebe siempre su solución sustituyéndola en cada ecuación del sistema original.

---

## Sub-lote 31 · Sistemas no lineales, método gráfico y punto de equilibrio — cierra el 1.10 (pp. 91–94)

### 252

En relación con el libro de Matemáticas, ¿cuál es la fórmula del interés simple?

- A. I = Prt
- B. I = P + rt
- C. I = Pr/t
- D. I = Pt/r

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 91
**Subtema:** sistemas de ecuaciones · interés simple

Recuerde que la fórmula de interés simple es I = Prt, donde P es el principal, r es la tasa de interés anual y t es el tiempo.

---

### 253

De acuerdo con el libro de Matemáticas, en la fórmula del interés simple, ¿cómo se expresa la tasa de interés anual?

- A. En decimales
- B. En porcentajes
- C. En fracciones
- D. En notación científica

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 91
**Subtema:** sistemas de ecuaciones · interés simple

Donde P es el principal, r es la tasa de interés anual (en decimales) y t es el tiempo.

---

### 254

De conformidad con el libro de Matemáticas, ¿puede usarse el método de sustitución cuando una o las dos ecuaciones del sistema son no lineales?

- A. Sí, también puede usarse en ese caso
- B. No, sólo sirve para sistemas lineales
- C. Sólo si las dos ecuaciones son no lineales
- D. Sólo si el sistema tiene una única solución

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 92
**Subtema:** sistemas de ecuaciones · sistemas no lineales

El método de sustitución también puede usarse para resolver sistemas en los que una o las dos ecuaciones son no lineales.

---

### 255

En relación con el libro de Matemáticas, ¿cuántas soluciones puede tener un sistema de dos ecuaciones con dos variables?

- A. Exactamente una, más de una, o ninguna
- B. Exactamente una o ninguna
- C. Siempre exactamente una
- D. Siempre dos o más

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 93
**Subtema:** sistemas de ecuaciones · número de soluciones

Un sistema de dos ecuaciones con dos variables puede tener exactamente una solución, más de una solución o ninguna solución.

---

### 256

De acuerdo con el libro de Matemáticas, cuando se traza cada una de las ecuaciones en el mismo plano de coordenadas, ¿a qué corresponden las soluciones del sistema?

- A. A los puntos de intersección de las gráficas
- B. A los puntos donde cada gráfica corta el eje x
- C. A los puntos donde cada gráfica corta el eje y
- D. A los puntos más altos de cada gráfica

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 93
**Subtema:** sistemas de ecuaciones · método gráfico

Cuando usted traza cada una de las ecuaciones en el mismo plano de coordenadas, las soluciones del sistema corresponden a los puntos de intersección de las gráficas.

---

### 257

De conformidad con el libro de Matemáticas, ¿para qué ayuda el método gráfico?

- A. Para hacerse una idea del número y las ubicaciones de las soluciones del sistema
- B. Para eliminar las soluciones extrañas del sistema
- C. Para convertir el sistema en uno lineal
- D. Para comprobar que el sistema no tiene solución

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 93
**Subtema:** sistemas de ecuaciones · método gráfico

Un método gráfico le ayudará a hacerse una idea del número y ubicación(es) de la(s) solución(es) de un sistema de ecuaciones.

---

### 258

En relación con el libro de Matemáticas, ¿cuáles son los dos componentes que por lo general tiene el costo total C de generar x unidades de un producto?

- A. El costo inicial y el costo por unidad
- B. El costo inicial y el ingreso por unidad
- C. El costo por unidad y el precio de venta
- D. El costo fijo y el punto de equilibrio

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 94
**Subtema:** sistemas de ecuaciones · punto de equilibrio

El costo total C de generar x unidades de un producto tiene por lo general dos componentes: el costo inicial y el costo por unidad.

---

### 259

De acuerdo con el libro de Matemáticas, ¿cuándo se dice que las ventas han llegado al punto de equilibrio?

- A. Cuando el ingreso total R es igual al costo total C
- B. Cuando el ingreso total R supera al doble del costo total C
- C. Cuando el costo por unidad es igual al costo inicial
- D. Cuando el costo total C llega a cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 94
**Subtema:** sistemas de ecuaciones · punto de equilibrio

Cuando se han vendido suficientes unidades para que el ingreso total R sea igual al costo total C, se dice que las ventas han llegado al punto de equilibrio.

---

### 260

De conformidad con el libro de Matemáticas, ¿a qué corresponde el punto de equilibrio?

- A. Al punto de intersección de las curvas de costo e ingreso
- B. Al punto donde la curva de costo corta el eje x
- C. Al punto donde la curva de ingreso alcanza su máximo
- D. Al punto donde el costo por unidad se vuelve cero

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 94
**Subtema:** sistemas de ecuaciones · punto de equilibrio

El punto de equilibrio corresponde al punto de intersección de las curvas de costo e ingreso.

---
