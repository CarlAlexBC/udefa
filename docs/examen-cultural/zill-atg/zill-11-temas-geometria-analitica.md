# Geometría Analítica · Capítulo 11 · Temas de geometría analítica

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 11 → EN CURSO**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Este Zill 3.ª ed. lo comparten **varios planteles**
> (EMA, EMEFA, EMMA, EMMG, EMI), cada uno pidiendo capítulos distintos. El
> **capítulo 11** lo pide la **EMMA** (Escuela Militar de Mantenimiento y
> Abastecimiento), dentro de su materia *Trigonometría y Geometría Analítica*
> (`TGA-02-2026`), **Completo**, junto con los capítulos 8, 9 y 10. **Ojo:** la
> **EMI** (`GA-03-2026`) **NO** pide este capítulo 11 (lo deja fuera a propósito),
> por eso los encabezados de `zill-08/09/12` dicen que "el temario deja fuera el
> cap. 11 (cónicas)": eso vale para la EMI, no para la EMMA, que sí lo pide
> Completo. Las líneas `**Referencia:**` y `**Subtema:**` de cada reactivo son la
> llave con que el temario los manda a llamar.

## Libro

Zill, Dennis G.; Dewar, Jacqueline M. *Álgebra, Trigonometría y Geometría Analítica*.
**McGraw-Hill/Interamericana Editores**, **tercera edición, 2012**. ISBN 978-607-15-0714-3.
**Edición verificada** en el archivo del capítulo 4 (`zill-04-coordenadas-rectangulares.md`).
El escaneo de la EMMA es **byte-idéntico** al de la EMI (mismo archivo, 15 537 197 bytes), así
que es la misma edición verificada. El temario de la **EMMA** (`temarios.json`, código
`TGA-02-2026`) nombra por título los capítulos 8 *Trigonometría del triángulo rectángulo*
(Completo), 9 *Trigonometría del círculo unitario* (Completo), 10 *Aplicaciones de trigonometría*
(Completo) y **11 *Temas de geometría analítica* (Completo)** —título verificado en la portadilla
y en el pie de página del libro.

**Desfase de páginas (esta copia):** para el **capítulo 11** la hoja del PDF va **17 adelante**
de la página impresa (portadilla del cap. 11, p. 481 = hoja 498; §11.1 en p. 482 = hoja 499).
**Se leyó de la hoja, no se calculó.** OJO: el desfase NO es constante en este libro; se releerá
de la hoja al avanzar por el capítulo.

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (mismo problema documentado en los
capítulos 4, 8, 9, 10 y 12): las fuentes subconjuntadas convierten los dígitos y símbolos al
copiar el texto. Por eso se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, español) sobre la hoja renderizada.
- **Fórmulas en 2D** (fracciones, raíces, subíndices, exponentes): se **leen de la hoja
  renderizada a imagen** y se transcriben a mano.

Toda cita de este archivo se corroboró por OCR y/o imagen; **ninguna se tomó de la extracción
directa.** Detalle completo del método en el encabezado del capítulo 4 y en
`docs/examen-cultural/ocr.py`.

## Alcance

El **capítulo 11** completo tiene cinco secciones:

- **§11.1 La parábola** (pp. 482–486) ← este archivo lo cubre.
- **§11.2 La elipse** ← este archivo lo cubre.
- **§11.3 La hipérbola** ← este archivo lo cubre.
- **§11.4 Rotación de ejes** ← este archivo lo cubre.
- **§11.5 Ecuaciones paramétricas** ← este archivo lo cubre.

Los *Ejercicios de repaso* quedan fuera por la norma de teoría sobre práctica. La reseña
histórica de la portadilla (p. 481, Hipatia) sí entra: es dato de recuerdo. Por regla de Carlo,
los **ejemplos numéricos y los bloques de ejercicios NO llevan reactivos**; sí las definiciones,
teoremas y fórmulas.

## Cobertura actual

**§11.1 · CERRADO** en 17 reactivos (reactivos 1–17): las secciones cónicas y Apolonio, la
ecuación general de segundo grado, la **Definición 11.1.1** (parábola, directriz, foco), el eje
y el vértice, las formas normales con vértice en (0,0) (`x²=4cy` e `y²=4cx`) con sus focos,
directrices y direcciones de apertura, la cuerda focal o diámetro, las formas normales con
vértice en (h,k) (`(x−h)²=4c(y−k)` e `(y−k)²=4c(x−h)`), la distancia del vértice al foco y a la
directriz (|c|), y las aplicaciones (paraboloide y propiedad de reflexión).

## Avisos al aspirante (erratas del libro)

_Ninguno detectado por ahora en este capítulo._

---

## Sub-lote 1 · §11.1 La parábola (pp. 482–486)

### 1

De acuerdo con el libro de Geometría Analítica, ¿cuáles son las secciones cónicas que se obtienen al cortar un cono doble invertido con un plano?

- A. El círculo, la parábola, la elipse y la hipérbola
- B. El triángulo, el cuadrado, el círculo y la elipse
- C. La recta, la parábola, la elipse y la circunferencia
- D. El círculo, la esfera, el cono y el cilindro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · secciones cónicas

Las cónicas se pueden obtener cortando un cono doble invertido con un plano. Son el círculo, la parábola, la elipse y la hipérbola.

### 2

Según el libro de Geometría Analítica, ¿qué matemático de la antigüedad (200 a.C.) escribió sobre las secciones cónicas?

- A. Apolonio
- B. Pitágoras
- C. Euclides
- D. Arquímedes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · historia · Apolonio

Entre sus escritos se destaca *Sobre las cónicas de Apolonio*, que popularizó el trabajo de Apolonio (200 a.C.) sobre cónicas.

### 3

De conformidad con el libro de Geometría Analítica, cada una de las cónicas se puede expresar en forma de una ecuación cuadrática de las variables x y y. ¿Cuál es esa ecuación general?

- A. Ax² + Bxy + Cy² + Dx + Ey + F = 0
- B. Ax + By + C = 0
- C. Ax² + Bx + C = 0
- D. x² + y² = r²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · ecuación general de segundo grado

Cada una de ellas estará en forma de una ecuación cuadrática de las variables x y y: Ax² + Bxy + Cy² + Dx + Ey + F = 0, en donde A, B, C, D, E y F son constantes.

### 4

Según la Definición 11.1.1 del libro de Geometría Analítica, ¿qué es una parábola?

- A. El conjunto de puntos P(x, y) en el plano que son equidistantes a una recta fija L (directriz) y a un punto fijo F (foco)
- B. El conjunto de puntos cuya suma de distancias a dos puntos fijos es constante
- C. El conjunto de puntos cuya diferencia de distancias a dos puntos fijos es constante
- D. El conjunto de puntos que equidistan de un punto fijo llamado centro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · Definición 11.1.1

Una parábola es el conjunto de puntos P(x, y) en el plano que son equidistantes a una recta fija L, llamada directriz, y a un punto fijo F, llamado foco.

### 5

De acuerdo con el libro de Geometría Analítica, en la definición de la parábola, ¿cómo se llama la recta fija L?

- A. Directriz
- B. Eje
- C. Foco
- D. Vértice

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · directriz

Una parábola es el conjunto de puntos equidistantes a una recta fija L, llamada directriz, y a un punto fijo F, llamado foco.

### 6

Según el libro de Geometría Analítica, en la definición de la parábola, ¿cómo se llama el punto fijo F?

- A. Foco
- B. Directriz
- C. Vértice
- D. Centro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · foco

Una parábola es el conjunto de puntos equidistantes a una recta fija L, llamada directriz, y a un punto fijo F, llamado foco.

### 7

De conformidad con el libro de Geometría Analítica, ¿cómo se llama la recta que pasa por el foco perpendicular a la directriz?

- A. Eje de la parábola
- B. Directriz
- C. Cuerda focal
- D. Asíntota

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · eje

La recta que pasa por el foco perpendicular a la directriz se llama eje de la parábola.

### 8

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama el punto de intersección de la parábola con el eje?

- A. Vértice
- B. Foco
- C. Directriz
- D. Centro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 482
**Subtema:** La parábola · vértice

El punto de intersección de la parábola con el eje se llama vértice y se indica con V.

### 9

Según el libro de Geometría Analítica, ¿cuál es la forma normal de la ecuación de una parábola con foco en (0, c), directriz y = −c y vértice en (0, 0)?

- A. x² = 4cy
- B. y² = 4cx
- C. x² = 4c²y
- D. y = 4cx²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 483
**Subtema:** La parábola · forma normal x²=4cy

La ecuación x² = 4cy se conoce como la forma normal de la ecuación de una parábola con foco en (0, c), directriz y = −c, c > 0 y vértice en (0, 0). La gráfica es simétrica con respecto al eje y.

### 10

De conformidad con el libro de Geometría Analítica, en la parábola x² = 4cy, ¿hacia dónde se abre según el signo de c?

- A. Si c > 0 se abre hacia arriba; si c < 0 se abre hacia abajo
- B. Si c > 0 se abre hacia abajo; si c < 0 se abre hacia arriba
- C. Si c > 0 se abre hacia la derecha; si c < 0 hacia la izquierda
- D. Siempre se abre hacia arriba, sin importar el signo de c

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 483
**Subtema:** La parábola · dirección de apertura (eje y)

La dirección hacia la que se abre la parábola sí depende del signo de c. En forma específica, si c > 0, la parábola se abre hacia arriba; si c < 0, la parábola se abre hacia abajo.

### 11

De acuerdo con el libro de Geometría Analítica, ¿cuál es la forma normal de la ecuación de una parábola con foco en F(c, 0), directriz x = −c y vértice en (0, 0)?

- A. y² = 4cx
- B. x² = 4cy
- C. y² = 4c²x
- D. x = 4cy²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 483
**Subtema:** La parábola · forma normal y²=4cx

Si el foco de la parábola está en el eje x, en F(c, 0), y la ecuación de la directriz es x = −c, la forma normal de la ecuación es y² = 4cx. La gráfica es simétrica con respecto al eje x.

### 12

Según el libro de Geometría Analítica, en la parábola y² = 4cx, ¿hacia dónde se abre según el signo de c?

- A. Si c > 0 se abre hacia la derecha; si c < 0 hacia la izquierda
- B. Si c > 0 se abre hacia la izquierda; si c < 0 hacia la derecha
- C. Si c > 0 se abre hacia arriba; si c < 0 hacia abajo
- D. Siempre se abre hacia la derecha, sin importar el signo de c

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 483
**Subtema:** La parábola · dirección de apertura (eje x)

Si c > 0, la parábola se abre hacia la derecha; si c < 0, se abre hacia la izquierda.

### 13

De conformidad con el libro de Geometría Analítica, ¿cómo se llama el segmento de recta que pasa por el foco de la parábola y cuyos extremos están en la parábola?

- A. Cuerda focal o diámetro
- B. Directriz
- C. Eje
- D. Lado terminal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 484
**Subtema:** La parábola · cuerda focal

El segmento de recta que pasa por el foco y cuyos extremos están en la parábola se llama cuerda focal o diámetro.

### 14

De acuerdo con el libro de Geometría Analítica, ¿cuál es la forma normal de la ecuación de una parábola con vértice en (h, k) y eje la recta vertical x = h?

- A. (x − h)² = 4c(y − k)
- B. (y − k)² = 4c(x − h)
- C. (x − h)² = 4c(y + k)
- D. (x + h)² = 4c(y − k)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 484
**Subtema:** La parábola · vértice en (h,k) · eje vertical

Si la parábola tiene su vértice en el punto (h, k) y su eje es la recta vertical x = h, la forma normal de la ecuación es (x − h)² = 4c(y − k).

### 15

Según el libro de Geometría Analítica, ¿cuál es la forma normal de la ecuación de una parábola con vértice en (h, k) y eje la recta horizontal y = k?

- A. (y − k)² = 4c(x − h)
- B. (x − h)² = 4c(y − k)
- C. (y − k)² = 4c(x + h)
- D. (y + k)² = 4c(x − h)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 484
**Subtema:** La parábola · vértice en (h,k) · eje horizontal

Si su eje es la recta horizontal y = k, la forma normal de la ecuación de la parábola con vértice en (h, k) es (y − k)² = 4c(x − h).

### 16

De conformidad con el libro de Geometría Analítica, en las formas normales de la parábola, ¿a qué es igual la distancia del vértice al foco (así como la distancia del vértice a la directriz)?

- A. |c|
- B. 4c
- C. c²
- D. 2|c|

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 485
**Subtema:** La parábola · distancia vértice-foco

Para cada una de las ecuaciones (1) y (2) o (3) y (4), la distancia del vértice al foco, así como la distancia del vértice a la directriz, es |c|.

### 17

De acuerdo con el libro de Geometría Analítica, ¿cómo se forman las superficies reflectoras llamadas paraboloides?

- A. Haciendo girar una parábola en torno a su eje
- B. Haciendo girar una recta en torno a un punto
- C. Cortando un cono con un plano paralelo a la base
- D. Uniendo dos parábolas por sus vértices

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 485
**Subtema:** La parábola · aplicaciones · paraboloide

Esas superficies, llamadas paraboloides, son tridimensionales y se forman haciendo girar una parábola en torno a su eje.
