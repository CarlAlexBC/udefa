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

## Erratas del libro — no se escriben reactivos sobre ellas

- **p. 19, recuadro `TECNOLOGÍA`:** el texto dice "he aquí cómo se evaluaría **(−2)²** en una graficadora", pero enseguida imprime la secuencia de teclas `( (−) 2 ) ^ 4 ENTER` y afirma que "el resultado exhibido será 16". Con exponente 2 el resultado sería 4: el enunciado debía decir **(−2)⁴**. Verificado sobre la hoja renderizada, no es suciedad de la extracción. El recuadro `TECNOLOGÍA` de todos modos queda fuera por norma.

## Cobertura actual

**EN CURSO.** Escrita la página impresa **18**: el arranque de **1.3 · Exponentes y radicales** —la multiplicación repetida en forma exponencial, el recuadro *Notación exponencial* y el recuadro *Propiedades de los exponentes* con sus ocho propiedades—. Los objetivos de la sección y el pie de foto que remite al ejercicio 69 no llevan reactivos.

**Pendiente:** EN CURSO. Sigue la **p. 19** con la distinción entre `(−2)⁴` y `−2⁴`, y de ahí hasta cerrar el **1.3** en la **p. 29**. Después faltan los otros seis subtemas que pide el temario —**1.4** (p. 30), **1.6** (p. 50), **1.8** (p. 72), **1.9** (p. 79), **1.10** (p. 89) y **1.11** (p. 99)—, y luego los otros dos capítulos del temario, cada uno en su archivo: el **2** (2.6, 2.9, 2.10, 2.15 y 2.16) y el **3** completo.

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
