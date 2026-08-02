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
- **§10.3 Ley de los senos** ← este archivo lo cubre.
- **§10.4 Ley de los cosenos** ← este archivo lo cubre.
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
