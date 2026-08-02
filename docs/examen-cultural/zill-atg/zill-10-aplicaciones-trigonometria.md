# Geometría Analítica · Capítulo 10 · Aplicaciones de trigonometría

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 10 → EN CURSO**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Este Zill 3.ª ed. lo comparten **varios planteles**
> (EMA, EMEFA, EMMA, EMMG, EMI), cada uno pidiendo capítulos distintos. El
> **capítulo 10** lo pide la **EMMA** (Escuela Militar de Mantenimiento y
> Abastecimiento), dentro de su materia *Trigonometría y Geometría Analítica*
> (`TGA-02-2026`), **Completo**, junto con los capítulos 8, 9 y 11. Las líneas
> `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con que el
> temario los manda a llamar.

## Libro

Zill, Dennis G.; Dewar, Jacqueline M. *Álgebra, Trigonometría y Geometría Analítica*.
**McGraw-Hill/Interamericana Editores**, **tercera edición, 2012**. ISBN 978-607-15-0714-3.
**Edición verificada** en el archivo del capítulo 4 (`zill-04-coordenadas-rectangulares.md`).
El escaneo de la EMMA es **byte-idéntico** al de la EMI (mismo archivo, 15 537 197 bytes), así
que es la misma edición verificada. El temario de la **EMMA** (`temarios.json`, código
`TGA-02-2026`) nombra por título los capítulos 8 *Trigonometría del triángulo rectángulo*
(Completo), 9 *Trigonometría del círculo unitario* (Completo), **10 *Aplicaciones de
trigonometría* (Completo)** y 11 *Temas de geometría analítica* (Completo).

**Desfase de páginas (esta copia):** para el **capítulo 10** la hoja del PDF va **17 adelante**
de la página impresa (portadilla del cap. 10, p. 443 = hoja 460; §10.1 en p. 444 = hoja 461).
**Se leyó de la hoja, no se calculó.** OJO: el desfase NO es constante en este libro; se releerá
de la hoja al avanzar por el capítulo.

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (mismo problema documentado en los
capítulos 4, 8, 9 y 12): las fuentes subconjuntadas convierten los dígitos y símbolos al
copiar el texto. Por eso se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, español) sobre la hoja renderizada.
- **Fórmulas en 2D** (fracciones, raíces, subíndices, exponentes): se **leen de la hoja
  renderizada a imagen** y se transcriben a mano.

Toda cita de este archivo se corroboró por OCR y/o imagen; **ninguna se tomó de la extracción
directa.** Detalle completo del método en el encabezado del capítulo 4 y en
`docs/examen-cultural/ocr.py`.

## Alcance

El **capítulo 10** completo tiene siete secciones:

- **§10.1 Resolución de triángulos rectángulos** (pp. 444–445) ← este archivo lo cubre.
- **§10.2 Aplicaciones del triángulo rectángulo** (pp. 446–449) ← este archivo lo cubre.
- **§10.3 Ley de los senos** (pp. 453–456) ← este archivo lo cubre.
- **§10.4 Ley de los cosenos** (pp. 457–460) ← este archivo lo cubre.
- **§10.5 Movimiento armónico simple** ← este archivo lo cubre.
- **§10.6 Forma trigonométrica de los números complejos** ← este archivo lo cubre.
- **§10.7 Potencias y raíces de números complejos** ← este archivo lo cubre.

Los *Ejercicios de repaso* quedan fuera por la norma de teoría sobre práctica. Las reseñas
históricas de las portadillas sí entran: son datos de recuerdo. Por regla de Carlo, los
**ejemplos numéricos y los bloques de ejercicios NO llevan reactivos**; sí las definiciones,
teoremas y fórmulas.

**Nota sobre §10.6 y §10.7 (números complejos):** el capítulo 3 (`zill-03-ecuaciones-desigualdades.md`,
§3.4) ya cubrió la aritmética básica de los complejos (unidad imaginaria, forma estándar,
operaciones, conjugado, división). En este capítulo sólo se escriben reactivos de lo
**genuinamente nuevo** de §10.6/§10.7 —la forma trigonométrica (polar), el argumento y el
módulo, la fórmula del producto y cociente en forma polar, el teorema de De Moivre y las raíces
n-ésimas— evitando repetir lo ya keyeado en §3.4 (decisión de Carlo, 2 ago 2026).

## Cobertura actual

**§10.1 · CERRADO** en 6 reactivos (reactivos 1–6): la definición de *resolver un triángulo*,
la condición para poder resolver un triángulo rectángulo, la convención de identificación
(Fig. 10.1.1: vértice del ángulo recto en C, ángulos α y β en A y B, lados opuestos a y b,
hipotenusa c) y la notación de las funciones trigonométricas inversas.

**§10.2 · CERRADO** en 4 reactivos (reactivos 7–10): para qué sirve la trigonometría del
triángulo rectángulo (longitudes, alturas y distancias) y la definición de los ángulos de
elevación y de depresión (Fig. 10.2.3). El resto de la sección son ejemplos numéricos, que no
llevan reactivos.

**§10.3 · CERRADO** en 8 reactivos (reactivos 11–18): la introducción (dos técnicas para
resolver triángulos en general), la condición de la ley de los senos, el **Teorema 10.3.1**
(`sen α/a = sen β/b = sen γ/c`), su validez para cualquier triángulo, la definición del **caso
ambiguo** (dos lados y un ángulo opuesto a uno de ellos) y los cuatro resultados posibles de su
construcción (Fig. 10.3.7). Los ejemplos y la comprobación numérica no llevan reactivos.

**§10.4 · CERRADO** en 15 reactivos (reactivos 19–33): la introducción (qué triángulos no se
resuelven directo con la ley de los senos), el ángulo incluido, el teorema de Pitágoras como
caso especial, el **Teorema 10.4.1** (las tres formas de la ley de los cosenos) y su validez
para cualquier triángulo, su reducción a Pitágoras cuando γ=90°, la definición de **rumbo**
(navegación) y la notación S40°O, y las **Notas del aula**: la definición de triángulo
*oblicuo*, la tabla de método más apropiado por tipo de dato, y los consejos sobre cuándo un
problema no tiene solución. Los ejemplos numéricos no llevan reactivos.

## Avisos al aspirante (erratas del libro)

_Ninguno detectado por ahora en este capítulo._

---

## Sub-lote 1 · §10.1 Resolución de triángulos rectángulos (pp. 444–445)

### 1

De acuerdo con el libro de Geometría Analítica, la expresión "resolver un triángulo" quiere decir que se desea:

- A. Determinar la longitud de cada lado y la medida de cada ángulo del triángulo
- B. Determinar únicamente la longitud de la hipotenusa
- C. Determinar únicamente la medida de los ángulos agudos
- D. Determinar el área y el perímetro del triángulo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 444
**Subtema:** Resolución de triángulos rectángulos · qué significa resolver un triángulo

La expresión "resolver un triángulo" quiere decir que se desea determinar la longitud de cada lado y la medida de cada ángulo del triángulo.

### 2

De conformidad con el libro de Geometría Analítica, ¿en qué caso se puede resolver cualquier triángulo rectángulo?

- A. Si se conocen dos lados o un ángulo agudo y un lado
- B. Sólo si se conocen los tres lados
- C. Sólo si se conocen los dos ángulos agudos
- D. Si se conoce únicamente la hipotenusa

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 444
**Subtema:** Resolución de triángulos rectángulos · datos suficientes

Se puede resolver cualquier triángulo rectángulo si se conocen dos lados o un ángulo agudo y un lado.

### 3

En relación con la identificación normal de un triángulo rectángulo (Figura 10.1.1), ¿en qué vértice se sitúa el ángulo recto?

- A. En el vértice C
- B. En el vértice A
- C. En el vértice B
- D. En el vértice opuesto a la hipotenusa

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 444
**Subtema:** Resolución de triángulos rectángulos · convención de identificación

Los tres vértices se denominarán A, B y C, donde C es el vértice del ángulo recto.

### 4

De acuerdo con el libro de Geometría Analítica, en la identificación normal de un triángulo rectángulo (Figura 10.1.1), los ángulos en los vértices A y B se representan, respectivamente, por:

- A. α y β
- B. a y b
- C. β y α
- D. A y B

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 444
**Subtema:** Resolución de triángulos rectángulos · convención de identificación

Representaremos los ángulos en A y B por α y β, y las longitudes de los lados opuestos a esos ángulos por a y b, respectivamente.

### 5

Según el libro de Geometría Analítica, en la identificación normal de un triángulo rectángulo (Figura 10.1.1), ¿cómo se denomina la longitud del lado opuesto al ángulo recto en C?

- A. c
- B. a
- C. b
- D. α

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 444
**Subtema:** Resolución de triángulos rectángulos · convención de identificación

La longitud del lado opuesto al ángulo recto en C se denomina c.

### 6

De conformidad con el libro de Geometría Analítica, ¿con qué símbolos se denotan las funciones trigonométricas inversas?

- A. sen⁻¹ o arcoseno, cos⁻¹ o arcocoseno, tan⁻¹ o arcotangente
- B. sen², cos², tan²
- C. 1/sen, 1/cos, 1/tan
- D. sec, csc, cot

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 445
**Subtema:** Resolución de triángulos rectángulos · funciones trigonométricas inversas

Las funciones trigonométricas inversas se denotan con sen⁻¹ o arcoseno, cos⁻¹ o arcocoseno, tan⁻¹ o arcotangente, y así sucesivamente.

---

## Sub-lote 2 · §10.2 Aplicaciones del triángulo rectángulo (pp. 446–449)

### 7

De acuerdo con el libro de Geometría Analítica, ¿para qué sirve la trigonometría del triángulo rectángulo?

- A. Para resolver muchos problemas prácticos, en particular los que se relacionan con longitudes, alturas y distancias
- B. Únicamente para calcular el área de figuras planas
- C. Únicamente para estudiar el movimiento de los planetas
- D. Para resolver ecuaciones de segundo grado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 446
**Subtema:** Aplicaciones del triángulo rectángulo · introducción

La trigonometría del triángulo rectángulo sirve para resolver muchos problemas prácticos, en particular los que se relacionan con longitudes, alturas y distancias.

### 8

Según el libro de Geometría Analítica, ¿qué ángulo tiene un nombre especial en las aplicaciones del triángulo rectángulo?

- A. El ángulo entre la visual del observador a un objeto y la horizontal
- B. El ángulo entre dos visuales del observador a dos objetos distintos
- C. El ángulo entre la visual del observador y la vertical
- D. El ángulo entre el objeto y su sombra

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 447
**Subtema:** Aplicaciones del triángulo rectángulo · ángulos de elevación y de depresión

El ángulo entre la visual del observador a un objeto, y la horizontal, tiene un nombre especial.

### 9

De conformidad con el libro de Geometría Analítica, cuando la visual del observador es hacia un objeto arriba de la horizontal, ¿cómo se llama el ángulo (en el caso general)?

- A. Ángulo de elevación
- B. Ángulo de depresión
- C. Ángulo de refracción
- D. Ángulo de incidencia

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 447
**Subtema:** Aplicaciones del triángulo rectángulo · ángulo de elevación

Si la visual es hacia un objeto arriba de la horizontal, el ángulo se llama ángulo de nivel, y en el caso general se llama ángulo de elevación.

### 10

En relación con el libro de Geometría Analítica, cuando la visual del observador es hacia un objeto abajo de la horizontal, ¿cómo se llama el ángulo?

- A. Ángulo de depresión
- B. Ángulo de elevación
- C. Ángulo de nivel
- D. Ángulo llano

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 447
**Subtema:** Aplicaciones del triángulo rectángulo · ángulo de depresión

Si la visual es hacia un objeto abajo de la horizontal, el ángulo se llama ángulo de depresión.

---

## Sub-lote 3 · §10.3 Ley de los senos (pp. 453–456)

### 11

De acuerdo con el libro de Geometría Analítica, ¿qué se describe en la sección 10.3?

- A. Dos técnicas para resolver triángulos en general
- B. Una técnica para resolver únicamente triángulos rectángulos
- C. El método para calcular el área de un triángulo
- D. La forma de graficar funciones trigonométricas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 453
**Subtema:** Ley de los senos · introducción

En la sección 10.1 se explicó cómo resolver triángulos rectángulos. En esta sección describiremos dos técnicas para resolver triángulos en general.

### 12

Según el libro de Geometría Analítica, en un triángulo general, si se conoce la longitud de un lado y otras dos partes del triángulo, ¿qué se puede hacer con la ley de los senos?

- A. Determinar las tres partes que restan
- B. Determinar únicamente el área del triángulo
- C. Determinar solamente uno de los ángulos
- D. Determinar solamente la longitud de la hipotenusa

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 453
**Subtema:** Ley de los senos · para qué sirve

Si se conoce la longitud de un lado y otras dos partes del triángulo, se pueden determinar las tres partes que restan. Una forma de hacerlo es con la ley de los senos.

### 13

De conformidad con el Teorema 10.3.1 (ley de los senos), si los ángulos de un triángulo son α, β y γ, y los lados opuestos de longitud a, b y c, ¿qué igualdad se cumple?

- A. sen α/a = sen β/b = sen γ/c
- B. a/sen α = sen β/b = sen γ/c
- C. sen α·a = sen β·b = sen γ·c
- D. cos α/a = cos β/b = cos γ/c

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 453
**Subtema:** Ley de los senos · Teorema 10.3.1

Ley de los senos: sen α/a = sen β/b = sen γ/c.

### 14

En relación con el libro de Geometría Analítica, ¿para qué triángulos es válida la ley de los senos?

- A. Para cualquier triángulo
- B. Sólo para triángulos rectángulos
- C. Sólo para triángulos acutángulos o agudos
- D. Sólo para triángulos equiláteros

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 454
**Subtema:** Ley de los senos · validez

Aunque la ley de los senos es válida para cualquier triángulo, sólo la deduciremos aquí para triángulos acutángulos o agudos, esto es, en los que los tres ángulos, α, β y γ son menores de 90°.

### 15

De acuerdo con el libro de Geometría Analítica, cuando se resuelven triángulos, ¿a qué caso se le llama "caso ambiguo"?

- A. Al caso en el que los datos son dos lados y un ángulo opuesto a uno de ellos
- B. Al caso en el que los datos son dos ángulos y un lado
- C. Al caso en el que los datos son los tres lados
- D. Al caso en el que los datos son los tres ángulos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 455
**Subtema:** Ley de los senos · caso ambiguo

Cuando se resuelven triángulos, al caso en el que los datos son dos lados y un ángulo opuesto a uno de ellos se le llama caso ambiguo.

### 16

Según el libro de Geometría Analítica, en la construcción del caso ambiguo (Figura 10.3.7), ¿cuántos resultados posibles hay?

- A. Cuatro
- B. Dos
- C. Tres
- D. Uno

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 455
**Subtema:** Ley de los senos · caso ambiguo · resultados posibles

Como se ve en la Figura 10.3.7, hay cuatro resultados posibles en esta construcción.

### 17

De conformidad con el libro de Geometría Analítica, en el caso ambiguo, ¿qué ocurre cuando el arco no interseca la base?

- A. No se forma un triángulo
- B. Se forman dos triángulos
- C. Se forma un solo triángulo rectángulo
- D. Se forma un triángulo equilátero

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 455
**Subtema:** Ley de los senos · caso ambiguo · sin solución

El arco no interseca la base y no se forma un triángulo.

### 18

En relación con el libro de Geometría Analítica, en el caso ambiguo, ¿qué ocurre cuando el arco es tangente a la base?

- A. Se forma un solo triángulo rectángulo
- B. No se forma un triángulo
- C. Se forman dos triángulos distintos
- D. Se forma un triángulo obtusángulo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 456
**Subtema:** Ley de los senos · caso ambiguo · triángulo rectángulo

El arco es tangente a la base, y se forma un solo triángulo rectángulo.

---

## Sub-lote 4 · §10.4 Ley de los cosenos (pp. 457–460)

### 19

De acuerdo con el libro de Geometría Analítica, ¿qué triángulos NO se pueden resolver en forma directa usando la ley de los senos?

- A. Los triángulos para los que se conocen tres lados, o dos lados y el ángulo incluido
- B. Los triángulos para los que se conocen dos ángulos y un lado
- C. Los triángulos rectángulos con un ángulo agudo conocido
- D. Los triángulos para los que se conoce un lado y un ángulo opuesto

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 457
**Subtema:** Ley de los cosenos · introducción

Los triángulos para los que se conocen tres lados o dos lados y el ángulo incluido (esto es, el ángulo formado por los lados indicados) no se puede resolver en forma directa usando la ley de los senos.

### 20

Según el libro de Geometría Analítica, ¿qué es el "ángulo incluido"?

- A. El ángulo formado por los lados indicados
- B. El ángulo opuesto al lado más largo
- C. El ángulo recto del triángulo
- D. El ángulo entre un lado y la línea norte-sur

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 457
**Subtema:** Ley de los cosenos · ángulo incluido

Dos lados y el ángulo incluido (esto es, el ángulo formado por los lados indicados).

### 21

De conformidad con el libro de Geometría Analítica, la ecuación del teorema de Pitágoras (c² = a² + b²), ¿de qué es un caso especial?

- A. De una fórmula general para relacionar las longitudes de los lados de cualquier triángulo
- B. De la ley de los senos
- C. De la fórmula del área de un triángulo
- D. De la ecuación de una circunferencia

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 457
**Subtema:** Ley de los cosenos · teorema de Pitágoras como caso especial

Esta última ecuación (c² = a² + b²) es un caso especial de una fórmula general para relacionar las longitudes de los lados de cualquier triángulo.

### 22

En relación con el libro de Geometría Analítica, ¿de qué es la generalización la ley de los cosenos?

- A. Del teorema de Pitágoras
- B. De la ley de los senos
- C. De la definición de tangente
- D. Del teorema del ángulo inscrito

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 458
**Subtema:** Ley de los cosenos · generalización de Pitágoras

La generalización de (1) —el teorema de Pitágoras— se llama ley de los cosenos.

### 23

De acuerdo con el libro de Geometría Analítica, ¿para qué triángulos es válida la ley de los cosenos?

- A. Para cualquier triángulo
- B. Sólo para triángulos rectángulos
- C. Sólo para triángulos oblicuos
- D. Sólo para triángulos acutángulos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 458
**Subtema:** Ley de los cosenos · validez

Como la ley de los senos (1) de la sección 10.3, la ley de los cosenos es válida para cualquier triángulo.

### 24

De conformidad con el Teorema 10.4.1 (ley de los cosenos), si los ángulos son α, β y γ y los lados opuestos a ellos son a, b y c, ¿qué igualdad se cumple para a²?

- A. a² = b² + c² − 2bc cos α
- B. a² = b² + c² + 2bc cos α
- C. a² = b² − c² − 2bc cos α
- D. a² = b² + c² − 2bc sen α

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 458
**Subtema:** Ley de los cosenos · Teorema 10.4.1

Ley de los cosenos: a² = b² + c² − 2bc cos α, b² = a² + c² − 2ac cos β, c² = a² + b² − 2ab cos γ.

### 25

Según el libro de Geometría Analítica, ¿a qué se reduce la ley de los cosenos (c² = a² + b² − 2ab cos γ) cuando γ = 90°?

- A. Al teorema de Pitágoras
- B. A la ley de los senos
- C. A la definición de coseno
- D. A la fórmula del área

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 458
**Subtema:** Ley de los cosenos · reducción a Pitágoras

Note que la ecuación (7) se reduce al teorema de Pitágoras (1) cuando γ = 90°.

### 26

De acuerdo con el libro de Geometría Analítica, en navegación, ¿qué designa un "rumbo"?

- A. El ángulo agudo que forma una línea con la línea norte-sur
- B. El ángulo agudo que forma una línea con la línea este-oeste
- C. La distancia recorrida en una hora
- D. El ángulo recto entre dos trayectorias

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 459
**Subtema:** Ley de los cosenos · rumbo

Un rumbo (o curso, derrotero o trayectoria) designa el ángulo agudo que forma una línea con la línea norte-sur.

### 27

En relación con el libro de Geometría Analítica, ¿con qué otros nombres se designa un "rumbo"?

- A. Curso, derrotero o trayectoria
- B. Elevación, depresión o nivel
- C. Latitud, longitud o meridiano
- D. Azimut, cenit o nadir

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 459
**Subtema:** Ley de los cosenos · rumbo · sinónimos

Un rumbo (o curso, derrotero o trayectoria) designa el ángulo agudo que forma una línea con la línea norte-sur.

### 28

Según el libro de Geometría Analítica, un rumbo de S40°O quiere decir que la dirección es:

- A. Hacia los 40 grados al oeste del sur
- B. Hacia los 40 grados al sur del oeste
- C. Hacia los 40 grados al este del sur
- D. Hacia los 40 grados al norte del oeste

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 459
**Subtema:** Ley de los cosenos · rumbo · notación

La figura 10.4.5a) ilustra un rumbo de S40°O, lo que quiere decir que es hacia los 40 grados al oeste del sur.

### 29

De conformidad con las Notas del aula del libro de Geometría Analítica, ¿qué indica el término "oblicuo"?

- A. Cualquier triángulo que no sea triángulo rectángulo
- B. Únicamente el triángulo equilátero
- C. Únicamente el triángulo rectángulo
- D. El triángulo que tiene un ángulo de 90°

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 460
**Subtema:** Ley de los cosenos · Notas del aula · triángulo oblicuo

El término oblicuo indica cualquier triángulo que no sea triángulo rectángulo.

### 30

De acuerdo con la tabla de las Notas del aula del libro de Geometría Analítica, para un triángulo oblicuo del que se conocen los tres lados, ¿cuál es la técnica más apropiada?

- A. La ley de los cosenos
- B. La ley de los senos
- C. El teorema de Pitágoras
- D. Las definiciones básicas de seno, coseno y tangente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 460
**Subtema:** Ley de los cosenos · Notas del aula · método por tipo de dato

Oblicuo · Tres lados · Ley de los cosenos.

### 31

Según la tabla de las Notas del aula del libro de Geometría Analítica, para un triángulo oblicuo del que se conocen dos ángulos y un lado, ¿cuál es la técnica más apropiada?

- A. La ley de los senos
- B. La ley de los cosenos
- C. El teorema de Pitágoras
- D. La definición de tangente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 460
**Subtema:** Ley de los cosenos · Notas del aula · método por tipo de dato

Oblicuo · Dos ángulos y un lado · Ley de los senos.

### 32

En relación con las Notas del aula del libro de Geometría Analítica, cuando se dan los tres lados y la longitud del lado más largo es mayor o igual a la suma de las longitudes de los otros dos lados, ¿qué ocurre?

- A. No puede haber solución alguna
- B. Siempre hay dos soluciones
- C. Siempre hay una solución única
- D. El triángulo es rectángulo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 460
**Subtema:** Ley de los cosenos · Notas del aula · sin solución

Cuando se dan los tres lados, verifique primero si la longitud del lado más largo es mayor o igual a la suma de las longitudes de los otros dos lados. Si lo es, no puede haber solución alguna. Esto se debe a que la distancia más corta entre dos puntos es la longitud del segmento de recta que los une.

### 33

De conformidad con las Notas del aula del libro de Geometría Analítica, si al aplicar la ley de los senos se obtiene un valor mayor que 1 para el seno de un ángulo, ¿qué significa?

- A. El problema no tiene solución
- B. El triángulo es rectángulo
- C. Hay que usar la ley de los cosenos
- D. Existen dos soluciones posibles

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 460
**Subtema:** Ley de los cosenos · Notas del aula · sin solución

Si obtiene usted un valor mayor que 1 para el seno de un ángulo al aplicar la ley de los senos, el problema no tiene solución.
