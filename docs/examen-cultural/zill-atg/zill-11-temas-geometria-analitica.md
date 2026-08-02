# Geometría Analítica · Capítulo 11 · Temas de geometría analítica

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 11 → CERRADO (§11.1–§11.5, reactivos 1–75)**

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
- **§11.2 La elipse** (pp. 489–493) ← este archivo lo cubre.
- **§11.3 La hipérbola** (pp. 495–500) ← este archivo lo cubre.
- **§11.4 Rotación de ejes** (pp. 504–508) ← este archivo lo cubre.
- **§11.5 Ecuaciones paramétricas** (pp. 509–513) ← este archivo lo cubre.

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

**§11.2 · CERRADO** en 17 reactivos (reactivos 18–34): la **Definición 11.2.1** (elipse, focos,
centro), las formas normales con centro en (0,0) (`x²/a²+y²/b²=1`) y la relación `c²=a²−b²`, el
eje mayor y el eje menor, los vértices, las longitudes 2a y 2b (el eje mayor siempre más largo),
la forma normal con centro en (h,k), el significado de a, b y c (distancias del centro al
vértice, al extremo del eje menor y al foco), la **excentricidad** `e=c/a` (con 0<e<1) y su
interpretación, la propiedad reflectora (de foco a foco) y la primera ley de Kepler.

**§11.3 · CERRADO** en 17 reactivos (reactivos 35–51): la **Definición 11.3.1** (hipérbola por
diferencia de distancias; focos; centro), la relación con la elipse (suma→diferencia), las dos
ramas, las formas normales con centro en (0,0) (`x²/a²−y²/b²=1`) y la relación `b²=c²−a²`, la
precaución (a² siempre bajo el término positivo), el eje transversal y los vértices (longitud
2a), el eje conjugado, las asíntotas (`y=±(b/a)x`) con su método nemotécnico y el rectángulo
auxiliar, la forma normal con centro en (h,k), y la **excentricidad** `e=c/a` (con `c=√(a²+b²)`,
`e>1`). Ver aviso de errata abajo.

**§11.4 · CERRADO** en 12 reactivos (reactivos 52–63): la forma sin término xy cuando B=0, los
**casos degenerados**, la eliminación del término xy por **rotación de ejes** (cuando B≠0), la
definición de rotación y las **ecuaciones de rotación** (4) y (5), el **Teorema 11.4.1**
(`cot 2θ=(A−C)/B`) y el valor θ=45° cuando cot 2θ=0, el **discriminante** `B²−4AC` y el
**Teorema 11.4.2** (parábola si =0, elipse si <0, hipérbola si >0).

**§11.5 · CERRADO** en 12 reactivos (reactivos 64–75): el **movimiento curvilíneo**, la
**Definición 11.5.1** (curva plana, ecuaciones paramétricas, parámetro), la parametrización, la
**orientación** de la curva, el punto inicial y terminal, la **curva cerrada** y la **curva
cerrada simple**, la **eliminación del parámetro** (obtener la ecuación rectangular; sin método
bien definido), las parametrizaciones múltiples de una curva y el **cicloide**.

**CAPÍTULO 11 · COMPLETO para la EMMA** (§11.1 a §11.5, reactivos 1–75). **Pendiente:** ninguno.
El capítulo 11 está CERRADO. Con este capítulo y los capítulos 8 (`zill-08`, 58 react.), 9
(`zill-09`, 53 react.) y 10 (`zill-10`, 69 react.), **la materia *Trigonometría y Geometría
Analítica* (`TGA-02-2026`) de la EMMA queda CERRADA al nivel de reactivos**: los cuatro capítulos
que pide su temario (8, 9, 10 y 11), todos "Completo".

## Avisos al aspirante (erratas del libro)

- **§11.3, p. 500 (excentricidad de la hipérbola).** El libro escribe: "Ya que 0 < a < √(a²+b²),
  la excentricidad de una **elipse** satisface e > 1." Es una **errata**: debe decir
  **hipérbola**. Una elipse tiene 0 < e < 1; es la hipérbola la que satisface e > 1, y todo el
  párrafo está definiendo la excentricidad de la hipérbola (con c = √(a²+b²)). Verificado por
  recorte a 600 dpi de la hoja 517. En el reactivo 51 se usa la forma **correcta** (la
  excentricidad de una **hipérbola** satisface e > 1), igual que se hizo con la errata del
  capítulo 2 (suma/diferencia de cubos).

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

---

## Sub-lote 2 · §11.2 La elipse (pp. 489–493)

### 18

Según la Definición 11.2.1 del libro de Geometría Analítica, ¿qué es una elipse?

- A. El conjunto de puntos P(x, y) en un plano tales que la suma de las distancias de P a dos puntos fijos F₁ y F₂ es constante
- B. El conjunto de puntos cuya diferencia de distancias a dos puntos fijos es constante
- C. El conjunto de puntos equidistantes a una recta fija y a un punto fijo
- D. El conjunto de puntos que equidistan de un punto fijo llamado centro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 489
**Subtema:** La elipse · Definición 11.2.1

Una elipse es el conjunto de puntos P(x, y) en un plano, tales que la suma de las distancias de P a dos puntos fijos F₁ y F₂ es constante.

### 19

De acuerdo con la Definición 11.2.1 del libro de Geometría Analítica, ¿cómo se llaman los dos puntos fijos F₁ y F₂ de una elipse?

- A. Focos
- B. Vértices
- C. Directrices
- D. Centros

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 489
**Subtema:** La elipse · focos

Los puntos fijos F₁ y F₂ se llaman focos.

### 20

De conformidad con la Definición 11.2.1 del libro de Geometría Analítica, ¿cómo se llama el punto medio del segmento de recta que une a los focos F₁ y F₂?

- A. Centro de la elipse
- B. Vértice de la elipse
- C. Foco principal
- D. Eje mayor

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 489
**Subtema:** La elipse · centro

El punto medio del segmento de recta que une a los puntos F₁ y F₂ se llama centro de la elipse.

### 21

Según el libro de Geometría Analítica, ¿cuál es la forma normal de la ecuación de una elipse con centro en (0, 0) y focos en (−c, 0) y (c, 0)?

- A. x²/a² + y²/b² = 1
- B. x²/b² + y²/a² = 1
- C. x²/a² − y²/b² = 1
- D. x²/a² + y²/b² = c²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · forma normal (focos en eje x)

La ecuación x²/a² + y²/b² = 1 se llama forma normal de la ecuación de una elipse con centro en (0, 0) y focos en (−c, 0) y (c, 0), donde c se define por b² = a² − c², y a > b > 0.

### 22

De acuerdo con el libro de Geometría Analítica, en la forma normal de la elipse, ¿cómo se define c en función de a y b?

- A. c² = a² − b²
- B. c² = a² + b²
- C. c² = b² − a²
- D. c = a − b

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · relación entre a, b y c

Cuando se iguala b² = a² − c²; es decir, c² = a² − b², donde a > b > 0.

### 23

Según el libro de Geometría Analítica, ¿qué es el eje mayor de una elipse?

- A. El segmento de recta que pasa por su centro, que contiene a los focos y cuyos extremos están en la elipse
- B. El segmento de recta que pasa por el centro, perpendicular a la recta que contiene a los focos
- C. La recta que pasa por un foco perpendicular a la directriz
- D. El segmento que une los dos focos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · eje mayor

El eje mayor de una elipse es el segmento de recta que pasa por su centro, que contiene a los focos y cuyos extremos están en la elipse.

### 24

De conformidad con el libro de Geometría Analítica, ¿qué es el eje menor de una elipse?

- A. El segmento de recta que pasa por el centro, es perpendicular al eje mayor, y cuyos extremos están en la elipse
- B. El segmento de recta que contiene a los focos
- C. El segmento de recta que une los dos vértices
- D. La recta que pasa por el centro paralela al eje mayor

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · eje menor

El segmento de recta que pasa por el centro, es perpendicular al eje mayor, y cuyos extremos están en la elipse, se llama eje menor.

### 25

De acuerdo con el libro de Geometría Analítica, ¿cómo se llaman los dos extremos del eje mayor de una elipse?

- A. Vértices
- B. Focos
- C. Centros
- D. Extremos menores

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · vértices

Los dos extremos del eje mayor se llaman vértices.

### 26

Según el libro de Geometría Analítica, en las formas normales de la elipse, ¿cuál es la longitud del eje mayor y la del eje menor?

- A. La longitud del eje mayor es 2a y la del eje menor es 2b
- B. La longitud del eje mayor es 2b y la del eje menor es 2a
- C. La longitud del eje mayor es a y la del eje menor es b
- D. La longitud del eje mayor es 4a y la del eje menor es 4b

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · longitudes de los ejes

En las ecuaciones (4) o (5), la longitud del eje mayor es a − (−a) = 2a; la longitud del eje menor es 2b.

### 27

De conformidad con el libro de Geometría Analítica, al comparar el eje mayor y el eje menor de una elipse, ¿qué se cumple siempre?

- A. El eje mayor siempre es más largo que el eje menor (porque a > b)
- B. Ambos ejes tienen siempre la misma longitud
- C. El eje menor siempre es más largo que el eje mayor
- D. La relación depende de la posición de los focos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 490
**Subtema:** La elipse · comparación de los ejes

Como a > b, el eje mayor de una elipse siempre es más largo que su eje menor.

### 28

Según el libro de Geometría Analítica, cuando el centro de la elipse está en (h, k), ¿cuál es una de las formas normales de su ecuación?

- A. (x − h)²/a² + (y − k)²/b² = 1
- B. (x − h)²/a² − (y − k)²/b² = 1
- C. (x + h)²/a² + (y + k)²/b² = 1
- D. (x − h)/a² + (y − k)/b² = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 491
**Subtema:** La elipse · centro en (h,k)

Cuando el centro está en (h, k), la forma normal de la ecuación de la elipse puede ser (x − h)²/a² + (y − k)²/b² = 1.

### 29

De acuerdo con el libro de Geometría Analítica, en una elipse, ¿qué representan a, b y c respecto al centro?

- A. a es la distancia del centro a un vértice, b la distancia del centro a un extremo del eje menor y c la distancia del centro a un foco
- B. a es la distancia entre los dos focos, b la distancia entre los vértices y c la distancia al centro
- C. a es la distancia del centro a un foco, b la distancia entre focos y c la distancia a un vértice
- D. a, b y c representan siempre las longitudes de los tres ejes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 491
**Subtema:** La elipse · significado de a, b y c

a es la distancia del centro a un vértice, b es la distancia del centro a un extremo del eje menor y c es la distancia del centro a un foco.

### 30

Según el libro de Geometría Analítica, ¿cómo se define la excentricidad e de una elipse?

- A. e = c/a
- B. e = a/c
- C. e = b/a
- D. e = c/b

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 492
**Subtema:** La elipse · excentricidad

La excentricidad de una elipse se define mediante e = c/a, donde c = √(a² − b²).

### 31

De conformidad con el libro de Geometría Analítica, ¿qué valores puede tomar la excentricidad e de una elipse?

- A. 0 < e < 1
- B. e > 1
- C. e = 1
- D. e < 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 492
**Subtema:** La elipse · rango de la excentricidad

Como 0 < √(a² − b²) < a, la excentricidad de una elipse satisface 0 < e < 1.

### 32

De acuerdo con el libro de Geometría Analítica, ¿qué indica la excentricidad sobre la forma de una elipse?

- A. Cuando e es cercana a cero la elipse es casi circular, y cuando e es cercana a 1 la elipse es aplanada, alargada o elongada
- B. Cuando e es cercana a cero la elipse es aplanada, y cuando e es cercana a 1 es casi circular
- C. La excentricidad no tiene relación con la forma de la elipse
- D. Cuanto mayor es e, más circular es la elipse

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 492
**Subtema:** La elipse · interpretación de la excentricidad

La excentricidad es un indicador de la forma de una elipse. Cuando e es cercana a cero, la elipse es casi circular, y cuando e ≈ 1, la elipse es aplanada, alargada o elongada.

### 33

Según el libro de Geometría Analítica, ¿en qué consiste la propiedad reflectora de la elipse?

- A. Si una fuente luminosa o sonora se coloca en un foco, todos sus rayos u ondas se reflejarán en la superficie y llegarán al otro foco
- B. Todos los rayos que salen de un foco se reflejan en rectas paralelas al eje mayor
- C. Los rayos que entran paralelos al eje se concentran en el centro
- D. La elipse no tiene ninguna propiedad reflectora

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 493
**Subtema:** La elipse · propiedad reflectora

Si una fuente luminosa o sonora se coloca en un foco de una elipse, todos sus rayos u ondas se reflejarán en la superficie de la elipse y llegarán al otro foco.

### 34

De conformidad con el libro de Geometría Analítica, según la primera ley de Kepler del movimiento planetario, ¿cómo es la órbita de cada planeta alrededor del Sol?

- A. Es una elipse con el Sol en uno de sus focos
- B. Es un círculo perfecto con el Sol en el centro
- C. Es una parábola con el Sol en el foco
- D. Es una hipérbola con el Sol en un foco

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 493
**Subtema:** La elipse · primera ley de Kepler

Usando su ley de la gravitación universal, Isaac Newton demostró por primera vez la primera ley de Kepler del movimiento planetario. La órbita de cada planeta alrededor del Sol es una elipse con el Sol en uno de sus focos.

---

## Sub-lote 3 · §11.3 La hipérbola (pp. 495–500)

### 35

Según la Definición 11.3.1 del libro de Geometría Analítica, ¿qué es una hipérbola?

- A. El conjunto de puntos P(x, y) en el plano tal que la diferencia de las distancias entre P y dos puntos fijos F₁ y F₂ es constante
- B. El conjunto de puntos cuya suma de distancias a dos puntos fijos es constante
- C. El conjunto de puntos equidistantes a una recta fija y a un punto fijo
- D. El conjunto de puntos que equidistan de un punto fijo llamado centro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 495
**Subtema:** La hipérbola · Definición 11.3.1

Una hipérbola es el conjunto de puntos P(x, y) en el plano, tal que la diferencia de las distancias entre P y dos puntos fijos F₁ y F₂ es constante.

### 36

De acuerdo con el libro de Geometría Analítica, ¿en qué se diferencia la definición de la hipérbola de la definición de la elipse?

- A. La palabra "suma" se cambia a la palabra "diferencia"
- B. La palabra "diferencia" se cambia a la palabra "suma"
- C. Se cambia "punto fijo" por "recta fija"
- D. No hay ninguna diferencia entre ambas definiciones

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 495
**Subtema:** La hipérbola · relación con la elipse

La definición de la hipérbola es básicamente igual que la definición de la elipse, y la única excepción es que la palabra suma se cambia a la palabra diferencia.

### 37

De conformidad con la Definición 11.3.1 del libro de Geometría Analítica, ¿cómo se llaman los dos puntos fijos F₁ y F₂ de una hipérbola?

- A. Focos
- B. Vértices
- C. Directrices
- D. Asíntotas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 495
**Subtema:** La hipérbola · focos

Los puntos fijos F₁ y F₂ se llaman focos.

### 38

Según la Definición 11.3.1 del libro de Geometría Analítica, ¿cómo se llama el punto medio del segmento de la recta que une los focos F₁ y F₂ de una hipérbola?

- A. Centro
- B. Vértice
- C. Foco principal
- D. Origen del eje transversal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 495
**Subtema:** La hipérbola · centro

El punto medio del segmento de la recta que une los puntos F₁ y F₂ se llama centro.

### 39

De acuerdo con el libro de Geometría Analítica, ¿de cuántas ramas consta una hipérbola?

- A. Dos ramas
- B. Una rama
- C. Tres ramas
- D. Cuatro ramas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 495
**Subtema:** La hipérbola · ramas

Como se ve en la Figura 11.3.1, una hipérbola consta de dos ramas.

### 40

Según el libro de Geometría Analítica, ¿cuál es la forma normal de la ecuación de una hipérbola con centro en (0, 0) y focos en (−c, 0) y (c, 0)?

- A. x²/a² − y²/b² = 1
- B. x²/a² + y²/b² = 1
- C. y²/a² − x²/b² = 1
- D. x²/b² − y²/a² = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 496
**Subtema:** La hipérbola · forma normal (focos en eje x)

La ecuación x²/a² − y²/b² = 1 se llama forma normal de la ecuación de una hipérbola con centro en (0, 0) y focos en (−c, 0) y (c, 0), y c se define por b² = c² − a².

### 41

De conformidad con el libro de Geometría Analítica, en la forma normal de la hipérbola, ¿cómo se relacionan a, b y c?

- A. b² = c² − a²
- B. b² = a² − c²
- C. c² = a² − b²
- D. b² = a² + c²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 496
**Subtema:** La hipérbola · relación entre a, b y c

Si se hace que b² = c² − a², la ecuación se transforma en la forma normal. Aquí c > a.

### 42

De acuerdo con la precaución del libro de Geometría Analítica, en la forma normal de la hipérbola (a diferencia de la elipse), ¿qué se cumple respecto a a² y b²?

- A. No hay relación entre los tamaños de a y b; a² siempre es el denominador del término positivo
- B. Siempre a² es mayor que b²
- C. Siempre b² es mayor que a²
- D. a² y b² siempre son iguales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 496
**Subtema:** La hipérbola · precaución (a² y b²)

En el caso de la hipérbola, a diferencia de la elipse, no hay relación entre los tamaños relativos de a y b; más bien a² siempre es el denominador del término positivo, y las intersecciones con los ejes coordenados siempre tienen ±a como una coordenada.

### 43

Según el libro de Geometría Analítica, ¿cómo se llama el segmento de recta con los extremos en la hipérbola y que está en la línea que pasa por los focos?

- A. Eje transversal
- B. Eje conjugado
- C. Directriz
- D. Cuerda focal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 496
**Subtema:** La hipérbola · eje transversal

El segmento de recta con los extremos en la hipérbola, y que está en la línea que pasa por los focos, se llama eje transversal; sus extremos se llaman vértices de la hipérbola.

### 44

De conformidad con el libro de Geometría Analítica, ¿cómo se llaman los extremos del eje transversal de una hipérbola y cuál es su longitud?

- A. Se llaman vértices y la longitud del eje transversal es 2a
- B. Se llaman focos y la longitud del eje transversal es 2c
- C. Se llaman vértices y la longitud del eje transversal es 2b
- D. Se llaman centros y la longitud del eje transversal es a

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 496
**Subtema:** La hipérbola · vértices y longitud del eje transversal

Sus extremos se llaman vértices de la hipérbola; la longitud del eje transversal es 2a.

### 45

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama el segmento de recta que pasa por el centro de la hipérbola, es perpendicular al eje transversal y cuyos extremos están en (0, −b) y (0, b)?

- A. Eje conjugado
- B. Eje transversal
- C. Asíntota
- D. Directriz

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 497
**Subtema:** La hipérbola · eje conjugado

El segmento de recta que pasa por el centro de la hipérbola y es perpendicular al eje transversal, cuyos extremos están en (0, −b) y (0, b) se llama eje conjugado.

### 46

Según el libro de Geometría Analítica, ¿qué posee toda hipérbola y por dónde pasan?

- A. Un par de asíntotas oblicuas que pasan por su centro
- B. Un par de directrices que pasan por sus focos
- C. Una sola asíntota que pasa por un vértice
- D. Un par de ejes de simetría que no pasan por el centro

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 497
**Subtema:** La hipérbola · asíntotas

Toda hipérbola posee un par de asíntotas oblicuas, que pasan por su centro.

### 47

De conformidad con el libro de Geometría Analítica, ¿cuáles son las asíntotas oblicuas de la hipérbola x²/a² − y²/b² = 1?

- A. y = (b/a)x y y = −(b/a)x
- B. y = (a/b)x y y = −(a/b)x
- C. y = (b/a)x + c y y = −(b/a)x − c
- D. y = ax y y = −ax

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 497
**Subtema:** La hipérbola · asíntotas de la forma (4)

Para grandes valores de |x|, los puntos en la gráfica de la hipérbola se acercan a los puntos en las rectas y = (b/a)x y y = −(b/a)x.

### 48

Según el libro de Geometría Analítica, ¿cuál es el método nemotécnico para obtener las asíntotas de una hipérbola?

- A. Sustituir 1 por 0 en la forma normal de la ecuación, factorizar y despejar y
- B. Sustituir 0 por 1 en la forma normal y despejar x
- C. Igualar la ecuación al doble del término positivo
- D. Derivar la ecuación de la hipérbola

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 498
**Subtema:** La hipérbola · método nemotécnico de las asíntotas

Las asíntotas de la hipérbola (4) se obtienen con una sola ecuación x²/a² − y²/b² = 0; al igualar cada factor a cero y despejar y se obtiene la ecuación de una asíntota.

### 49

De acuerdo con el libro de Geometría Analítica, ¿cómo se denomina el rectángulo cuyas diagonales prolongadas son las asíntotas de la hipérbola, con 2a de ancho (el eje transversal) y 2b de altura (el eje conjugado)?

- A. Rectángulo auxiliar
- B. Rectángulo focal
- C. Rectángulo director
- D. Rectángulo conjugado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 497
**Subtema:** La hipérbola · rectángulo auxiliar

Las asíntotas sólo son las diagonales prolongadas de un rectángulo de 2a de ancho (la longitud del eje transversal) y 2b de altura (la longitud del eje conjugado). Este rectángulo se denomina rectángulo auxiliar.

### 50

Según el libro de Geometría Analítica, cuando el centro de la hipérbola está en (h, k), ¿cuál es una de las formas normales de su ecuación?

- A. (x − h)²/a² − (y − k)²/b² = 1
- B. (x − h)²/a² + (y − k)²/b² = 1
- C. (x + h)²/a² − (y + k)²/b² = 1
- D. (x − h)/a² − (y − k)/b² = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 499
**Subtema:** La hipérbola · centro en (h,k)

Cuando el centro de la hipérbola está en (h, k), los análogos de la forma normal son (x − h)²/a² − (y − k)²/b² = 1.

### 51

De conformidad con el libro de Geometría Analítica, la excentricidad de una hipérbola se define por e = c/a (con c = √(a² + b²)). ¿Qué valores satisface?

- A. e > 1
- B. 0 < e < 1
- C. e = 1
- D. e = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 500
**Subtema:** La hipérbola · excentricidad

La ecuación que define la excentricidad de una hipérbola es e = c/a; en este caso, el número c se define como c = √(a² + b²). Ya que 0 < a < √(a² + b²), la excentricidad de una hipérbola satisface e > 1. (Véase el aviso al aspirante: el libro escribe por errata "elipse" donde debe decir "hipérbola".)

---

## Sub-lote 4 · §11.4 Rotación de ejes (pp. 504–508)

### 52

De acuerdo con el libro de Geometría Analítica, cuando B = 0 en la ecuación general de segundo grado, ¿a qué forma se reduce para obtener las formas estándar de las cónicas?

- A. Ax² + Cy² + Dx + Ey + F = 0
- B. Ax² + Bxy + Cy² = 0
- C. Bxy + Dx + Ey + F = 0
- D. Ax² + Bxy + F = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 504
**Subtema:** Rotación de ejes · forma sin término xy

Cuando B = 0, obtenemos las formas estándares de las ecuaciones de los círculos, parábolas, elipses e hipérbolas a partir de ecuaciones de la forma Ax² + Cy² + Dx + Ey + F = 0.

### 53

Según el libro de Geometría Analítica, además de las secciones cónicas conocidas, ¿qué puede representar la ecuación general de segundo grado en sus "casos degenerados"?

- A. La intersección de dos rectas, una recta, un solo punto, dos rectas paralelas o ninguna gráfica en absoluto
- B. Únicamente un círculo o una recta
- C. Siempre una parábola desplazada
- D. Un plano en el espacio tridimensional

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 504
**Subtema:** Rotación de ejes · casos degenerados

La ecuación (1) también puede representar la intersección de dos rectas, una recta, un solo punto, dos rectas paralelas o ninguna gráfica en absoluto. Éstos se conocen como casos degenerados de la ecuación (1).

### 54

De conformidad con el libro de Geometría Analítica, cuando B ≠ 0, ¿cómo es posible eliminar el término xy de la ecuación general de segundo grado?

- A. Por medio de una rotación de ejes
- B. Por medio de una traslación de ejes
- C. Completando el cuadrado en x y en y
- D. Dividiendo toda la ecuación entre B

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 504
**Subtema:** Rotación de ejes · eliminación del término xy

Cuando B ≠ 0, es posible eliminar el término xy de la ecuación (1) por medio de una rotación de ejes.

### 55

Según el libro de Geometría Analítica, ¿en qué consiste una rotación de ejes?

- A. En girar los ejes x y y alrededor del origen O a lo largo de un ángulo θ, denotando los nuevos ejes con x' y y'
- B. En desplazar los ejes paralelamente sin girarlos
- C. En intercambiar el eje x por el eje y
- D. En reflejar los ejes respecto a la recta y = x

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 505
**Subtema:** Rotación de ejes · definición

Comenzamos con un sistema de coordenadas xy con origen O y giramos los ejes x y y alrededor de O a lo largo de un ángulo θ. En la posición que ocupan después de la rotación, denotamos los ejes con los símbolos x' y y'.

### 56

De acuerdo con las ecuaciones de rotación (4) del libro de Geometría Analítica, ¿cómo se convierten las coordenadas xy de un punto P en las nuevas coordenadas x'y'?

- A. x' = x cos θ + y sen θ, y' = −x sen θ + y cos θ
- B. x' = x cos θ − y sen θ, y' = x sen θ + y cos θ
- C. x' = x sen θ + y cos θ, y' = x cos θ − y sen θ
- D. x' = x + y, y' = x − y

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 505
**Subtema:** Rotación de ejes · ecuaciones de rotación (4)

Las coordenadas xy de P pueden convertirse en las nuevas coordenadas x'y' por x' = x cos θ + y sen θ, y' = −x sen θ + y cos θ.

### 57

Según las ecuaciones de rotación (5) del libro de Geometría Analítica, ¿cómo se convierten las coordenadas x'y' de un punto P en coordenadas xy?

- A. x = x' cos θ − y' sen θ, y = x' sen θ + y' cos θ
- B. x = x' cos θ + y' sen θ, y = x' sen θ − y' cos θ
- C. x = x' sen θ − y' cos θ, y = x' cos θ + y' sen θ
- D. x = x' + y', y = x' − y'

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 505
**Subtema:** Rotación de ejes · ecuaciones de rotación (5)

x = x' cos θ − y' sen θ, y = x' sen θ + y' cos θ.

### 58

De conformidad con el Teorema 11.4.1 del libro de Geometría Analítica, el término xy se puede eliminar de la ecuación general de segundo grado (con B ≠ 0) mediante una rotación de ejes a través de un ángulo θ que satisface:

- A. cot 2θ = (A − C)/B
- B. tan 2θ = (A − C)/B
- C. cot 2θ = B/(A − C)
- D. cot 2θ = (A + C)/B

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 506
**Subtema:** Rotación de ejes · Teorema 11.4.1

El término xy se puede eliminar de la ecuación general de segundo grado, donde B ≠ 0, por medio de la rotación de ejes a través de un ángulo θ que satisface cot 2θ = (A − C)/B.

### 59

Según el libro de Geometría Analítica, al resolver cot 2θ = (A − C)/B se toma una solución con 0° < θ < 90°. Si cot 2θ = 0, ¿cuánto vale θ?

- A. θ = 45°
- B. θ = 30°
- C. θ = 60°
- D. θ = 90°

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 506
**Subtema:** Rotación de ejes · ángulo cuando cot 2θ=0

Si cot 2θ = 0, entonces 2θ = 90° y, por tanto, θ = 45°.

### 60

De acuerdo con el libro de Geometría Analítica, para identificar una sección cónica definida por Ax² + Bxy + Cy² + Dx + Ey + F = 0 sin necesidad de rotar, ¿qué cantidad se calcula a partir de los coeficientes?

- A. El discriminante B² − 4AC
- B. La suma A + B + C
- C. El producto ABC
- D. El cociente A/C

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 508
**Subtema:** Rotación de ejes · discriminante

Lo único que necesitamos calcular es el discriminante B² − 4AC de la ecuación.

### 61

Según el Teorema 11.4.2 del libro de Geometría Analítica (excluyendo los casos degenerados), la gráfica de la ecuación de segundo grado es una parábola cuando:

- A. B² − 4AC = 0
- B. B² − 4AC < 0
- C. B² − 4AC > 0
- D. B² − 4AC = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 508
**Subtema:** Rotación de ejes · Teorema 11.4.2 · parábola

Excluyendo los casos degenerados, la gráfica de la ecuación de segundo grado (1) es una parábola cuando B² − 4AC = 0.

### 62

De conformidad con el Teorema 11.4.2 del libro de Geometría Analítica (excluyendo los casos degenerados), la gráfica de la ecuación de segundo grado es una elipse cuando:

- A. B² − 4AC < 0
- B. B² − 4AC = 0
- C. B² − 4AC > 0
- D. B² − 4AC = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 508
**Subtema:** Rotación de ejes · Teorema 11.4.2 · elipse

Excluyendo los casos degenerados, la gráfica de la ecuación de segundo grado (1) es una elipse cuando B² − 4AC < 0.

### 63

Según el Teorema 11.4.2 del libro de Geometría Analítica (excluyendo los casos degenerados), la gráfica de la ecuación de segundo grado es una hipérbola cuando:

- A. B² − 4AC > 0
- B. B² − 4AC = 0
- C. B² − 4AC < 0
- D. B² − 4AC = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 508
**Subtema:** Rotación de ejes · Teorema 11.4.2 · hipérbola

Excluyendo los casos degenerados, la gráfica de la ecuación de segundo grado (1) es una hipérbola cuando B² − 4AC > 0.

---

## Sub-lote 5 · §11.5 Ecuaciones paramétricas (pp. 509–513)

### 64

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama el movimiento de una partícula a lo largo de una curva, en contraste con a lo largo de una recta?

- A. Movimiento curvilíneo
- B. Movimiento rectilíneo
- C. Movimiento armónico simple
- D. Movimiento paramétrico

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 510
**Subtema:** Ecuaciones paramétricas · movimiento curvilíneo

El movimiento de una partícula a lo largo de una curva, en contraste con a lo largo de una recta, se llama movimiento curvilíneo.

### 65

Según la Definición 11.5.1 del libro de Geometría Analítica, ¿qué es una curva plana (o curva en el plano)?

- A. Un conjunto C de pares ordenados (f(t), g(t)), donde f y g son funciones definidas en un intervalo común I
- B. El conjunto de puntos equidistantes a un punto fijo
- C. Una recta definida por dos puntos
- D. El conjunto de soluciones de una ecuación de segundo grado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 510
**Subtema:** Ecuaciones paramétricas · Definición 11.5.1

Una curva plana, o curva en el plano, es un conjunto C de pares ordenados (f(t), g(t)), donde f y g son funciones definidas en un intervalo común I.

### 66

De conformidad con la Definición 11.5.1 del libro de Geometría Analítica, ¿cómo se llaman las ecuaciones x = f(t), y = g(t) (para t en I) de una curva C?

- A. Ecuaciones paramétricas de C
- B. Ecuaciones normales de C
- C. Ecuaciones de rotación de C
- D. Ecuaciones polares de C

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 510
**Subtema:** Ecuaciones paramétricas · definición

Las ecuaciones x = f(t), y = g(t), para t en I, se llaman ecuaciones paramétricas de C.

### 67

Según la Definición 11.5.1 del libro de Geometría Analítica, ¿cómo se llama la variable t en las ecuaciones paramétricas?

- A. Parámetro
- B. Argumento
- C. Discriminante
- D. Coeficiente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 510
**Subtema:** Ecuaciones paramétricas · parámetro

La variable t se llama parámetro.

### 68

De acuerdo con el libro de Geometría Analítica, a las ecuaciones x = f(t), y = g(t) para t en I también se les acostumbra llamar:

- A. Parametrización de C
- B. Discriminante de C
- C. Excentricidad de C
- D. Directriz de C

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 510
**Subtema:** Ecuaciones paramétricas · parametrización

También se acostumbra llamar parametrización de C a x = f(t), y = g(t) para t en I.

### 69

Según el libro de Geometría Analítica, cuando se grafican puntos correspondientes a valores crecientes del parámetro, la curva se recorre en cierta dirección. ¿Cómo se llama esa dirección?

- A. Orientación de la curva
- B. Excentricidad de la curva
- C. Pendiente de la curva
- D. Amplitud de la curva

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 510
**Subtema:** Ecuaciones paramétricas · orientación

Al graficar puntos correspondientes a valores crecientes del parámetro, la curva C es recorrida en cierta dirección; a esta dirección se le llama orientación de la curva C.

### 70

De conformidad con el libro de Geometría Analítica, cuando el intervalo I es un intervalo cerrado [a, b], ¿cómo se llaman los puntos (f(a), g(a)) y (f(b), g(b))?

- A. Punto inicial y punto terminal, respectivamente
- B. Foco y directriz, respectivamente
- C. Vértice y centro, respectivamente
- D. Ambos son el centro de la curva

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 511
**Subtema:** Ecuaciones paramétricas · punto inicial y terminal

Cuando el intervalo I dentro del cual f y g están definidos es un intervalo cerrado [a, b], (f(a), g(a)) es el punto inicial de la curva C, y (f(b), g(b)) es el punto terminal.

### 71

Según el libro de Geometría Analítica, ¿cuándo una curva C es una curva cerrada?

- A. Cuando el punto terminal es el mismo que el punto inicial
- B. Cuando no tiene punto inicial ni terminal
- C. Cuando el parámetro es negativo
- D. Cuando f y g son constantes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 511
**Subtema:** Ecuaciones paramétricas · curva cerrada

Si el punto terminal es el mismo que el punto inicial, entonces C es una curva cerrada.

### 72

De acuerdo con el libro de Geometría Analítica, ¿qué es una curva cerrada simple?

- A. Una curva cerrada que no se interseca consigo misma
- B. Una curva que no tiene punto inicial
- C. Una curva que se interseca consigo misma en un punto
- D. Una curva abierta con un solo extremo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 511
**Subtema:** Ecuaciones paramétricas · curva cerrada simple

Si C es cerrada pero no se interseca consigo mismo se llama curva cerrada simple.

### 73

Según el libro de Geometría Analítica, dado un conjunto de ecuaciones paramétricas, ¿en qué consiste la eliminación del parámetro?

- A. En eliminar o simplificar el parámetro para obtener la ecuación rectangular de la curva
- B. En sustituir el parámetro por su valor máximo
- C. En derivar las ecuaciones respecto al parámetro
- D. En girar los ejes para eliminar el término xy

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 511
**Subtema:** Ecuaciones paramétricas · eliminación del parámetro

Dado un conjunto de ecuaciones paramétricas, a veces se desea eliminar o simplificar el parámetro para obtener la ecuación rectangular de la curva. No hay un método bien definido para eliminar el parámetro.

### 74

De conformidad con el libro de Geometría Analítica, respecto a las parametrizaciones de una curva C, ¿qué se cumple?

- A. Una curva C puede tener muchas parametrizaciones diferentes
- B. Cada curva C tiene una única parametrización posible
- C. Una curva C no puede parametrizarse si es cerrada
- D. Sólo las rectas pueden parametrizarse

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 512
**Subtema:** Ecuaciones paramétricas · parametrizaciones múltiples

Una curva C puede tener más de una parametrización; una curva C puede tener muchas parametrizaciones diferentes.

### 75

Según el libro de Geometría Analítica, ¿qué curva describe un punto P marcado en un círculo de radio a cuando el círculo rueda por el eje x?

- A. Un cicloide
- B. Una parábola
- C. Una elipse
- D. Una hipérbola

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 513
**Subtema:** Ecuaciones paramétricas · cicloide

Cuando el círculo rueda por el eje x, el punto P describe una curva C llamada cicloide.
