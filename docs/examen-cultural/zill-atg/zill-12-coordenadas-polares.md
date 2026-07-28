# Geometría Analítica · Zill · Capítulo 12 · Coordenadas polares

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 12 → EN CURSO (§12.1–§12.2 hechos)**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Este Zill 3.ª ed. lo comparten **varios planteles**
> (EMA, EMEFA, EMMA, EMMG, EMI), cada uno pidiendo capítulos distintos. La **EMI**
> (Escuela Militar de Ingeniería), dentro de su materia *Geometría Analítica*
> (`GA-03-2026`), pide **Completo** los capítulos **4, 8, 9 y 12**. Las líneas
> `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con que el temario
> los manda a llamar.

## Libro

Zill, Dennis G.; Dewar, Jacqueline M. *Álgebra, Trigonometría y Geometría Analítica*.
**McGraw-Hill/Interamericana Editores**, **tercera edición, 2012**. ISBN 978-607-15-0714-3.
**Edición verificada** en el archivo del capítulo 4 (`zill-04-coordenadas-rectangulares.md`).
El `temarios.json` (código `GA-03-2026`) nombra el capítulo por su **título**: *"Cap. 12
Coordenadas Polares — Completo."* — que coincide **exacto** con el título del capítulo 12 en
el libro (la portadilla, p. 521, dice literalmente **COORDENADAS POLARES**). Como el capítulo
se titula así y el temario pide "Completo", **entran las cinco secciones §12.1–§12.5**,
incluidas §12.4 (Vectores en el plano) y §12.5 (Producto punto), que son parte del capítulo.

**Desfase de páginas (esta copia, la de la EMI):** para el **capítulo 12** la hoja del PDF va
**17 adelante** de la página impresa (portadilla del cap. 12, p. 521 = hoja 538; p. 522 =
hoja 539). **Se leyó de la hoja, no se calculó.**

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (mismo problema de los capítulos 4, 8 y
9): las fuentes subconjuntadas convierten los dígitos y símbolos al copiar el texto. Por eso
se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, español) sobre la hoja renderizada.
- **Fórmulas en 2D** (fracciones, raíces, subíndices): se **leen de la hoja renderizada a
  imagen** y se transcriben a mano.

Toda cita se corroboró por OCR y/o imagen; **ninguna se tomó de la extracción directa.**
Detalle del método en el encabezado del capítulo 4 y en `docs/examen-cultural/ocr.py`.

## Alcance

El **capítulo 12** completo tiene cinco secciones:

- **§12.1 Coordenadas polares** (pp. 522–525) ← este archivo lo cubre.
- **§12.2 Gráficas de ecuaciones polares** (pp. 526–535) ← este archivo lo cubre.
- §12.3 Secciones cónicas en coordenadas polares (pp. 536–541).
- §12.4 Vectores en el plano (pp. 542–549).
- §12.5 Producto punto (pp. 550–556).

Los *Ejercicios de repaso* (p. 557 en adelante) quedan fuera por la norma de teoría sobre
práctica. La reseña histórica de la portadilla (p. 521) sí entra: es dato de recuerdo.

## Cobertura actual

**§12.1 · COMPLETO** en 8 reactivos (reactivos 1–8), toda la teoría de la sección
(pp. 521–524): la reseña histórica de la portadilla (qué es el sistema polar, Gregorio
Fontana acuñó el término); la **terminología** (polo/origen, eje polar, coordenadas polares
`(r, θ)`); las **convenciones de la Definición 12.1.1** (signo del ángulo, cómo graficar
`(−r, θ)`, coordenadas del polo); la **no unicidad** de la representación polar
(`(r, θ)=(r, θ+2nπ)`); y las **conversiones** polar→rectangular (`x=r cos θ`, `y=r sen θ`) y
rectangular→polar (`r²=x²+y²`, `tan θ=y/x`). Fórmulas verificadas contra las hojas
renderizadas 539 y 541; prosa por OCR.

**§12.2 · COMPLETO** en 10 reactivos (reactivos 9–18), toda la teoría de la sección
(pp. 526–533): la definición de **gráfica de una ecuación polar** `r=f(θ)`; las gráficas
básicas (**círculo** `r=a`, **recta por el origen** `θ=a`, **espiral de Arquímedes** `r=aθ`);
el **Teorema 12.2.1** (pruebas de simetría respecto al eje y, al eje x y al origen); y las
familias de curvas con nombre —**cardioide** `r=a±a sen θ`/`r=a±a cos θ`, **caracol**
`r=a±b sen θ`/`r=a±b cos θ` (clasificado por `a/b`: bucle interno, cardioide, aplanado,
convexo), **curvas de rosas** `r=a sen nθ`/`r=a cos nθ` (n impar → n pétalos, n par → 2n),
**lemniscatas** `r²=a cos 2θ`/`r²=a sen 2θ`— y la **rotación** de gráficas polares
(`r=f(θ−γ)` antihorario, `r=f(θ+γ)` horario). Los ejemplos de graficado quedan fuera por la
norma de teoría sobre práctica. Fórmulas verificadas contra las hojas renderizadas 545, 546,
547 y 548; prosa por OCR.

**Pendiente:** faltan las secciones **§12.3, §12.4 y §12.5** para cerrar el capítulo
12. Con el capítulo 12 cerrado, **Geometría Analítica quedaría cerrada para la EMI** (ya
están cerrados los capítulos 4, 8 y 9). Este archivo (capítulo 12) sostiene el pendiente de
la materia.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico, no práctico. Se
privilegian las definiciones, teoremas y reglas sobre los procedimientos de cálculo. Los
ejemplos numéricos y los bloques de ejercicios no se convierten en reactivos de
procedimiento; las definiciones, teoremas y fórmulas sí.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación son cita
textual del libro, sin parafrasear. Cuatro opciones del mismo tipo y magnitud. Notación
verificada por OCR + imagen. La opción correcta SIEMPRE en A (el importador baraja).

---

## Sub-lote 1 · Introducción e historia (portadilla p. 521; p. 522)

### 1

En relación con el libro de Geometría Analítica, ¿qué es el sistema de coordenadas polares?

- A. Un sistema de coordenadas bidimensionales en el que los puntos se especifican por medio de la distancia respecto al origen y un ángulo medido desde el eje x positivo
- B. Un sistema tridimensional que usa tres distancias perpendiculares
- C. Un sistema en el que los puntos se especifican sólo por su distancia al origen
- D. Un sistema de rectas horizontales y verticales que se intersecan

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 521
**Subtema:** Coordenadas polares · Definición del sistema polar

El sistema de coordenadas polares es un sistema de coordenadas bidimensionales en el que los puntos se especifican por medio de la distancia respecto al origen y un ángulo medido desde el eje x positivo.

### 2

En relación con el libro de Geometría Analítica, según la reseña histórica, ¿quién acuñó el término "coordenadas polares"?

- A. El matemático italiano Gregorio Fontana (1735-1803)
- B. El matemático griego Hiparco
- C. El sacerdote jesuita Grégoire de Saint-Vincent
- D. El matemático inglés George Peacock

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 521
**Subtema:** Coordenadas polares · Historia

Fue el matemático italiano Gregorio Fontana (1735-1803) quien acuñó el término coordenadas polares.

---

## Sub-lote 2 · Terminología del sistema polar (p. 522)

### 3

En relación con el libro de Geometría Analítica, en el sistema de coordenadas polares, ¿cómo se llaman el punto O y el eje de referencia, y qué es el par ordenado (r, θ)?

- A. O es el polo u origen; el eje de referencia es el eje polar (semirrecta horizontal dirigida a la derecha del polo); (r, θ) son las coordenadas polares de P, con r la distancia dirigida y θ el ángulo cuyo lado terminal es el rayo OP
- B. O es el foco; el eje de referencia es el eje mayor; (r, θ) son la abscisa y la ordenada
- C. O es el vértice; el eje de referencia es la directriz; (r, θ) son dos distancias perpendiculares
- D. O es el centro; el eje de referencia es el radio; (r, θ) son dos ángulos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 522
**Subtema:** Coordenadas polares · Terminología

El punto O se llama polo u origen. Como eje de referencia se toma una semirrecta horizontal dirigida hacia la derecha del polo, que se llama eje polar. Si se especifica desde O una distancia dirigida r y un ángulo θ cuyo lado inicial sea el eje polar y cuyo lado terminal sea el rayo OP, el punto P queda identificado por (r, θ), las coordenadas polares de P.

---

## Sub-lote 3 · Convenciones (Definición 12.1.1) (p. 522)

### 4

En relación con el libro de Geometría Analítica, según la Definición 12.1.1, ¿en qué sentido se miden los ángulos positivos y los negativos?

- A. Los ángulos θ > 0 se miden en sentido contrario al de las manecillas del reloj, a partir del eje polar; los ángulos θ < 0 se miden en sentido de las manecillas del reloj
- B. Los ángulos θ > 0 se miden en sentido de las manecillas del reloj; los θ < 0 en sentido contrario
- C. Todos los ángulos se miden en sentido de las manecillas del reloj
- D. Los ángulos se miden a partir del eje y positivo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 522
**Subtema:** Coordenadas polares · Definición 12.1.1 signo del ángulo

Los ángulos θ > 0 se miden en sentido contrario al de las manecillas del reloj, a partir del eje polar, mientras que los ángulos θ < 0 se miden en sentido de las manecillas del reloj.

### 5

En relación con el libro de Geometría Analítica, según la Definición 12.1.1, ¿cómo se grafica un punto (−r, θ) con −r < 0, y cuáles son las coordenadas del polo O?

- A. Se miden |r| unidades a lo largo del rayo θ + π; las coordenadas del polo O son (0, θ), donde θ es cualquier ángulo
- B. Se miden |r| unidades a lo largo del rayo θ; las coordenadas del polo O son (r, 0)
- C. Se miden r unidades a lo largo del rayo −θ; las coordenadas del polo O son (0, 0) únicamente
- D. Se miden |r| unidades a lo largo del eje polar; las coordenadas del polo O son (1, θ)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 522
**Subtema:** Coordenadas polares · Definición 12.1.1 punto (−r, θ) y el polo

Para graficar un punto (−r, θ), donde −r < 0, se miden |r| unidades a lo largo del rayo θ + π. Las coordenadas del polo O son (0, θ), donde θ es cualquier ángulo.

### 6

En relación con el libro de Geometría Analítica, ¿es única la descripción de un punto en coordenadas polares?

- A. No es única; (r, θ) y (r, θ + 2nπ), con n un entero, son equivalentes (y además se pueden usar valores negativos de r)
- B. Sí, es única, como en las coordenadas rectangulares
- C. Sí, salvo por el signo del ángulo
- D. No es única sólo cuando r = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 523
**Subtema:** Coordenadas polares · No unicidad de la representación

En contraste con el sistema de coordenadas rectangulares, la descripción de un punto en coordenadas polares no es única. Es una consecuencia inmediata de que (r, θ) y (r, θ + 2nπ), con n un entero, son equivalentes; además, se pueden usar valores negativos de r.

---

## Sub-lote 4 · Conversión entre coordenadas polares y rectangulares (pp. 523–524)

### 7

En relación con el libro de Geometría Analítica, ¿con qué fórmulas se convierte una descripción polar (r, θ) de un punto en coordenadas rectangulares (x, y)?

- A. x = r cos θ y y = r sen θ
- B. x = r sen θ y y = r cos θ
- C. x = r/cos θ y y = r/sen θ
- D. x = cos θ y y = sen θ

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 523
**Subtema:** Coordenadas polares · Conversión de polares a rectangulares

Se puede convertir una descripción polar de un punto en coordenadas rectangulares mediante x = r cos θ y y = r sen θ.

### 8

En relación con el libro de Geometría Analítica, ¿con qué ecuaciones se convierten las coordenadas rectangulares (x, y) en coordenadas polares (r, θ)?

- A. r² = x² + y² y tan θ = y/x
- B. r = x + y y tan θ = x/y
- C. r² = x² − y² y tan θ = x/y
- D. r = x² + y² y θ = x/y

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 524
**Subtema:** Coordenadas polares · Conversión de rectangulares a polares

Las coordenadas rectangulares (x, y) se convierten en coordenadas polares (r, θ) mediante r² = x² + y² y tan θ = y/x.

> Dato olvidable: en polares un mismo punto tiene infinitas representaciones (se suma `2π` al ángulo, o se usa `r` negativo con `θ+π`). Para ir de polares a rectangulares: `x=r cos θ`, `y=r sen θ`; de vuelta: `r²=x²+y²`, `tan θ=y/x`.

---

## Sub-lote 5 · Gráficas polares básicas (pp. 526–528)

### 9

En relación con el libro de Geometría Analítica, ¿qué es la gráfica de una ecuación polar r = f(θ)?

- A. El conjunto de puntos P con cuando menos un conjunto de coordenadas polares que satisface la ecuación
- B. El conjunto de puntos cuyas coordenadas rectangulares satisfacen la ecuación
- C. Únicamente el punto correspondiente a θ = 0
- D. La recta que une el polo con el punto (1, 0)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 526
**Subtema:** Gráficas polares · Gráfica de una ecuación polar

La gráfica de una ecuación polar r = f(θ) es el conjunto de puntos P con cuando menos un conjunto de coordenadas polares que satisface la ecuación.

### 10

En relación con el libro de Geometría Analítica, si a es cualquier constante distinta de cero, ¿qué representa la gráfica polar de r = a?

- A. Un círculo de radio |a| con centro en el origen
- B. Una recta que pasa por el origen
- C. Una espiral
- D. Una parábola con vértice en el polo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 527
**Subtema:** Gráficas polares · Círculo r = a

En general, si a es cualquier constante distinta de cero, la gráfica polar de r = a es un círculo de radio |a| con centro en el origen.

### 11

En relación con el libro de Geometría Analítica, si a es cualquier constante real distinta de cero, ¿qué representa la gráfica polar de θ = a?

- A. Una recta que pasa por el origen y forma un ángulo de a radianes con el eje polar
- B. Un círculo de radio a con centro en el origen
- C. Una semirrecta que no pasa por el origen
- D. Una lemniscata

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 527
**Subtema:** Gráficas polares · Recta θ = a

En general, si a es cualquier constante real distinta de cero, la gráfica polar de θ = a es una recta que pasa por el origen y forma un ángulo de a radianes con el eje polar.

### 12

En relación con el libro de Geometría Analítica, ¿cómo se llama la gráfica de la ecuación polar r = aθ (con a constante)?

- A. Espiral de Arquímedes
- B. Cardioide
- C. Lemniscata
- D. Caracol convexo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 528
**Subtema:** Gráficas polares · Espiral de Arquímedes

Una gráfica de la ecuación r = aθ, donde a es una constante, se llama espiral de Arquímedes.

---

## Sub-lote 6 · Pruebas de simetría (p. 528)

### 13

En relación con el libro de Geometría Analítica, según el Teorema 12.2.1, ¿cuáles son las pruebas de simetría en coordenadas polares?

- A. Es simétrica respecto al eje y si al sustituir (r, θ) por (r, π − θ) se obtiene la misma ecuación; respecto al eje x si al sustituir (r, θ) por (r, −θ); y respecto al origen si al sustituir (r, θ) por (−r, θ)
- B. Es simétrica respecto al eje y si al sustituir (r, θ) por (r, −θ); respecto al eje x si al sustituir (r, θ) por (r, π − θ); y respecto al origen si al sustituir (r, θ) por (r, θ + π)
- C. Es simétrica respecto a cualquier eje si su gráfica es un círculo
- D. Es simétrica sólo si a es positivo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 528
**Subtema:** Gráficas polares · Teorema 12.2.1 pruebas de simetría

La gráfica de una ecuación polar es: i) simétrica con respecto al eje y, si al sustituir (r, θ) por (r, π − θ) se obtiene la misma ecuación; ii) simétrica con respecto al eje x si al sustituir (r, θ) por (r, −θ) se obtiene la misma ecuación; iii) simétrica con respecto al origen si al sustituir (r, θ) por (−r, θ) se obtiene la misma ecuación.

---

## Sub-lote 7 · Familias de curvas polares con nombre (pp. 529–532)

### 14

En relación con el libro de Geometría Analítica, ¿qué forma tiene la ecuación polar de una cardioide y cómo es su gráfica?

- A. r = a ± a sen θ o r = a ± a cos θ; su gráfica tiene "forma de corazón" y pasa por el origen
- B. r = a ± b sen θ con a ≠ b; su gráfica es un círculo
- C. r = aθ; su gráfica es una espiral
- D. r² = a cos 2θ; su gráfica tiene forma de ocho

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 529
**Subtema:** Gráficas polares · Cardioide

Una gráfica de cualquier ecuación polar que tenga la forma r = a ± a sen θ o r = a ± a cos θ se llama cardioide; tiene una gráfica "en forma de corazón" y que pasa por el origen.

### 15

En relación con el libro de Geometría Analítica, ¿qué forma tienen las ecuaciones polares llamadas caracoles, y cómo se clasifica su gráfica (con a > 0, b > 0)?

- A. r = a ± b sen θ o r = a ± b cos θ; para a/b < 1 hay un caracol con bucle interno, a/b = 1 es una cardioide, 1 < a/b < 2 un caracol aplanado y a/b ≥ 2 un caracol convexo
- B. r = a ± a sen θ; siempre es una cardioide
- C. r = a sen nθ; su forma depende del número de pétalos
- D. r = aθ; su forma es siempre una espiral

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 530
**Subtema:** Gráficas polares · Caracoles

Las cardioides son casos especiales de curvas llamadas caracoles: r = a ± b sen θ o r = a ± b cos θ. Con a > 0 y b > 0: para a/b < 1 se obtiene un caracol con bucle interno; cuando a/b = 1, una cardioide; para 1 < a/b < 2, un caracol aplanado; y cuando a/b ≥ 2, un caracol convexo.

### 16

En relación con el libro de Geometría Analítica, ¿qué forma tienen las curvas de rosas y cuántos pétalos tienen?

- A. r = a sen nθ o r = a cos nθ (n entero positivo, n ≥ 2); cuando n es impar la curva tiene n pétalos, y cuando n es par tiene 2n pétalos
- B. r = a ± a cos θ; siempre tienen 4 pétalos
- C. r² = a sen 2θ; tienen n/2 pétalos
- D. r = aθ; el número de pétalos es infinito

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 531
**Subtema:** Gráficas polares · Curvas de rosas

Si n es un entero positivo, las gráficas de r = a sen nθ o r = a cos nθ (n ≥ 2) se llaman curvas de rosas. Cuando n es impar, la cantidad de pétalos de la curva es n; si n es par, la curva tiene 2n pétalos.

### 17

En relación con el libro de Geometría Analítica, ¿qué forma tienen las ecuaciones polares llamadas lemniscatas?

- A. r² = a cos 2θ o r² = a sen 2θ, con a > 0
- B. r = a cos 2θ o r = a sen 2θ, con a > 0
- C. r = a ± a cos θ
- D. r = aθ²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 532
**Subtema:** Gráficas polares · Lemniscatas

Si n es un entero positivo, las gráficas de r² = a cos 2θ o r² = a sen 2θ, en donde a > 0, se llaman lemniscatas.

---

## Sub-lote 8 · Rotación de gráficas polares (p. 533)

### 18

En relación con el libro de Geometría Analítica, si r = f(θ) es una ecuación polar y γ > 0, ¿cómo se obtienen las gráficas de r = f(θ − γ) y r = f(θ + γ)?

- A. La de r = f(θ − γ) es la de r = f(θ) rotada, alrededor del origen, en el sentido opuesto al de las manecillas del reloj una cantidad γ; la de r = f(θ + γ) es la de r = f(θ) rotada en el sentido de las manecillas del reloj una cantidad γ
- B. La de r = f(θ − γ) se rota en el sentido de las manecillas del reloj; la de r = f(θ + γ) en sentido opuesto
- C. Ambas se desplazan horizontalmente γ unidades, sin rotar
- D. Ambas se reflejan respecto al eje polar

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 533
**Subtema:** Gráficas polares · Rotación de gráficas polares

La gráfica de r = f(θ − γ) es la gráfica de r = f(θ) rotada en el sentido opuesto al de las manecillas del reloj alrededor del origen por una cantidad γ. La gráfica de r = f(θ + γ) es la gráfica de r = f(θ) rotada en el sentido de las manecillas del reloj alrededor del origen por una cantidad γ.

> Dato olvidable: el `cos` orienta las curvas (cardioide, caracol, rosa) hacia el **eje x**; el `sen`, hacia el **eje y**. En las rosas, `n` impar da `n` pétalos y `n` par da `2n`. Las lemniscatas usan `r²` (no `r`) y `2θ`.
