# Geometría Analítica · Zill · Capítulo 9 · Trigonometría del círculo unitario

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 9 → EN CURSO (§9.1–§9.2 hechos)**

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
Coincide con el temario de la EMI: el `temarios.json` (código `GA-03-2026`) nombra los
capítulos por **título**, y todos calzan con este libro —Cap. 4, Cap. 8 *Trigonometría del
Triángulo Rectángulo*, **Cap. 9 *Trigonometría del Círculo Unitario*** y Cap. 12
*Coordenadas Polares*—, "Completo" cada uno. El temario **deja fuera a propósito** el
capítulo 11 (cónicas).

**Desfase de páginas (esta copia, la de la EMI):** para el **capítulo 9** la hoja del PDF va
**17 adelante** de la página impresa (portadilla del cap. 9, p. 389 = hoja 406; p. 390 =
hoja 407). **Se leyó de la hoja, no se calculó.** OJO: el desfase NO es constante en este
libro; se releerá de la hoja al llegar al capítulo 12.

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (mismo problema documentado en los
capítulos 4 y 8): las fuentes subconjuntadas convierten los dígitos y símbolos al copiar el
texto. Por eso se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, español) sobre la hoja renderizada.
- **Fórmulas en 2D** (fracciones, raíces, subíndices): se **leen de la hoja renderizada a
  imagen** y se transcriben a mano.

Toda cita se corroboró por OCR y/o imagen; **ninguna se tomó de la extracción directa.**
Detalle del método en el encabezado del capítulo 4 y en `docs/examen-cultural/ocr.py`.

## Alcance

El **capítulo 9** completo tiene seis secciones:

- **§9.1 Las funciones circulares** (pp. 390–396) ← este archivo lo cubre.
- **§9.2 Gráficas de las funciones seno y coseno** (pp. 397–406) ← este archivo lo cubre.
- §9.3 Gráficas de otras funciones trigonométricas (pp. 407–413).
- §9.4 Identidades especiales (pp. 414–423).
- §9.5 Funciones trigonométricas inversas (pp. 424–432).
- §9.6 Ecuaciones trigonométricas (pp. 433–439).

Los *Ejercicios de repaso* (p. 440 en adelante) quedan fuera por la norma de teoría sobre
práctica. La reseña histórica de la portadilla (p. 389) sí entra: es dato de recuerdo.

## Cobertura actual

**§9.1 · COMPLETO** en 17 reactivos (reactivos 1–17), toda la teoría de la sección
(pp. 389–394): la reseña histórica de la portadilla; el **círculo unitario** `x²+y²=1` y la
igualdad de la medida en radianes con el arco subtendido; la **Definición 9.1.1** (funciones
de un número real) y la **Definición 9.1.2** (`sen t=y`, `cos t=x`, `tan t=y/x`, `cot t=x/y`,
`sec t=1/x`, `csc t=1/y`, con `P(t)=(cos t, sen t)`) y el nombre de **funciones circulares**;
el **Teorema 9.1.1** (identidad pitagórica `sen²t+cos²t=1`); los **límites** `−1≤sen t≤1`,
`−1≤cos t≤1` y el **dominio** `R` y **rango** `[−1,1]`; la **periodicidad** (`sen(t+2π)=sen t`)
y la **Definición 9.1.3** (función periódica y periodo), con periodo `2π`; el **Teorema
9.1.2** (seno impar, coseno par); el **Teorema 9.1.3** (seis propiedades adicionales); y el
**ángulo de referencia** (segunda parte). Fórmulas verificadas contra las hojas renderizadas
408, 410 y 411; prosa por OCR.

**§9.2 · COMPLETO** en 8 reactivos (reactivos 18–25), la teoría de la sección (pp. 398–402):
la definición de **ciclo**; las **propiedades de las gráficas de seno y coseno** (ceros
`sen x=nπ` y `cos x=(2n+1)π/2`, simetría respecto al origen/eje y, continuidad); la
**amplitud** `|A|` (distancia máxima al eje x, `amplitud=½(M−m)`); el **desplazamiento
vertical** `D`; el **periodo** `2π/B` de `y=A sen Bx` e `y=A cos Bx`; el **desplazamiento de
fase** `|C|/B` (derecha si `C<0`, izquierda si `C>0`) de `y=A sen(Bx+C)`; y las
**identidades** de desplazamiento `cos(x−π/2)=sen x`, `sen(x+π/2)=cos x`, `sen(x−π/2)=−cos
x`. Los ejemplos de graficado quedan fuera por la norma de teoría sobre práctica. Fórmulas
verificadas contra las hojas renderizadas 416 y 419; prosa por OCR.

**Pendiente:** faltan las secciones **§9.3, §9.4, §9.5 y §9.6** para cerrar el
capítulo 9; y después el capítulo **12**, que el temario de la EMI (`GA-03-2026`) pide
completo. **Geometría Analítica NO está cerrada para la EMI.** Los capítulos 4 y 8 ya están
cerrados; este archivo (capítulo 9) sostiene el pendiente de la materia hasta que exista el
archivo del capítulo 12.

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

## Sub-lote 1 · Introducción y el círculo unitario (portadilla p. 389; pp. 390–391)

### 1

En relación con el libro de Geometría Analítica, según la reseña histórica del capítulo 9, ¿qué se sabe sobre quién realizó el avance de los senos y cosenos de ángulos a los de números reales?

- A. Se desconoce quién realizó ese importante avance
- B. Fue Hiparco, en el siglo II antes de Cristo
- C. Fue René Descartes, en 1637
- D. Fue Georg Joachim Rheticus, en el siglo XVI

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 389
**Subtema:** Funciones circulares · Historia

Desde el punto de vista histórico, se desconoce quién realizó este importante avance de los senos y cosenos de ángulos a los de números reales.

### 2

En relación con el libro de Geometría Analítica, ¿qué es el círculo unitario y cuál es su ecuación?

- A. Un círculo de radio 1 y centro en el origen, cuya ecuación es x² + y² = 1
- B. Un círculo de radio 2 y centro en el origen, cuya ecuación es x² + y² = 2
- C. Un círculo de radio 1 y centro en (1, 1), cuya ecuación es (x − 1)² + (y − 1)² = 1
- D. Un círculo de diámetro 1 y centro en el origen, cuya ecuación es x² + y² = 1/2

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 390
**Subtema:** Funciones circulares · Círculo unitario

La correspondencia entre números reales y ángulos se representa con un círculo de radio 1 y centro en el origen; este círculo se conoce como círculo unitario, y su ecuación es x² + y² = 1.

### 3

En relación con el libro de Geometría Analítica, en un círculo unitario, ¿con qué coincide la medida en radianes de un ángulo de t radianes?

- A. Es igual a la medida t del arco subtendido
- B. Es igual al doble del arco subtendido
- C. Es igual al radio del círculo
- D. Es igual al área del sector subtendido

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 390
**Subtema:** Funciones circulares · Radianes y arco en el círculo unitario

En un círculo unitario la medida en radianes de un ángulo de t radianes es igual a la medida t del arco subtendido (porque r = 1 y t = s/1 = s).

---

## Sub-lote 2 · Definición de las funciones circulares (pp. 390–391)

### 4

En relación con el libro de Geometría Analítica, según la Definición 9.1.1, ¿cómo se define el valor de una función trigonométrica de un número real t?

- A. Como el valor de esa función del ángulo de t radianes, siempre que ese valor exista
- B. Como el valor de esa función del ángulo de t grados
- C. Como el producto de t por el radio del círculo
- D. Como el arco subtendido dividido entre 2π

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 390
**Subtema:** Funciones circulares · Definición 9.1.1

El valor de una función trigonométrica de un número real t se define como el valor del ángulo de t radianes, siempre que ese valor exista.

### 5

En relación con el libro de Geometría Analítica, según la Definición 9.1.2, si P(t) = P(x, y) es el punto de intersección del lado terminal del ángulo de t radianes con el círculo unitario, ¿cómo se definen el seno y el coseno del número real t?

- A. sen t = y y cos t = x; es decir, P(t) = (cos t, sen t)
- B. sen t = x y cos t = y; es decir, P(t) = (sen t, cos t)
- C. sen t = x/y y cos t = y/x
- D. sen t = 1/y y cos t = 1/x

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 391
**Subtema:** Funciones circulares · Definición 9.1.2 seno y coseno

Para cualquier número real t, el coseno y el seno de t son las coordenadas x y y, respectivamente, del punto P de intersección del lado terminal del ángulo de t radianes con el círculo unitario: sen t = y, cos t = x, y P(t) = (cos t, sen t).

### 6

En relación con el libro de Geometría Analítica, según la Definición 9.1.2, ¿cómo se definen la tangente, cotangente, secante y cosecante del número real t (con P(t) = P(x, y))?

- A. tan t = y/x, cot t = x/y, sec t = 1/x y csc t = 1/y
- B. tan t = x/y, cot t = y/x, sec t = 1/y y csc t = 1/x
- C. tan t = y, cot t = x, sec t = x y csc t = y
- D. tan t = 1/y, cot t = 1/x, sec t = x/y y csc t = y/x

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 391
**Subtema:** Funciones circulares · Definición 9.1.2 tangente, cotangente, secante y cosecante

Para el número real t con P(t) = P(x, y): tan t = y/x, cot t = x/y, sec t = 1/x y csc t = 1/y.

### 7

En relación con el libro de Geometría Analítica, ¿por qué a las funciones trigonométricas definidas mediante el punto P(t) del círculo unitario se les conoce a menudo como funciones circulares?

- A. Debido a la importancia que tiene el círculo unitario en esta exposición
- B. Porque sólo se aplican a los círculos
- C. Porque su gráfica es siempre un círculo
- D. Porque se miden en grados y no en radianes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 391
**Subtema:** Funciones circulares · Nombre de funciones circulares

Debido a la importancia que tiene el círculo unitario en esta exposición, las funciones trigonométricas a menudo se conocen como funciones circulares.

---

## Sub-lote 3 · Identidad pitagórica, límites, dominio y rango (pp. 391–392)

### 8

En relación con el libro de Geometría Analítica, según el Teorema 9.1.1 (identidad pitagórica), ¿qué relación cumplen el seno y el coseno para todos los números reales t?

- A. sen² t + cos² t = 1
- B. sen² t − cos² t = 1
- C. sen t + cos t = 1
- D. sen² t · cos² t = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 391
**Subtema:** Funciones circulares · Teorema 9.1.1 identidad pitagórica

Para todos los números reales t, sen² t + cos² t = 1. Esta relación es la más importante de las identidades trigonométricas y se conoce como identidad pitagórica.

### 9

En relación con el libro de Geometría Analítica, ¿cuáles son los límites de los valores del seno y el coseno, y cuál es el dominio y el rango de las funciones f(t) = sen t y g(t) = cos t?

- A. −1 ≤ sen t ≤ 1 y −1 ≤ cos t ≤ 1; el dominio es el conjunto R de todos los números reales y el rango es el intervalo [−1, 1]
- B. 0 ≤ sen t ≤ 1 y 0 ≤ cos t ≤ 1; el dominio es [0, 2π] y el rango es [0, 1]
- C. −2 ≤ sen t ≤ 2 y −2 ≤ cos t ≤ 2; el dominio es R y el rango es [−2, 2]
- D. sen t y cos t no tienen límites; el dominio y el rango son todo R

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 392
**Subtema:** Funciones circulares · Límites, dominio y rango

Se cumple −1 ≤ cos t ≤ 1 y −1 ≤ sen t ≤ 1. El dominio de la función seno y de la función coseno es el conjunto R de todos los números reales, y el rango es el intervalo [−1, 1].

---

## Sub-lote 4 · Periodicidad (pp. 392–393)

### 10

En relación con el libro de Geometría Analítica, dado que los ángulos de t radianes y t + 2π radianes son coterminales, ¿qué igualdades cumplen el seno y el coseno?

- A. sen(t + 2π) = sen t y cos(t + 2π) = cos t
- B. sen(t + 2π) = −sen t y cos(t + 2π) = −cos t
- C. sen(t + π) = sen t y cos(t + π) = cos t
- D. sen(t + 2π) = cos t y cos(t + 2π) = sen t

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 392
**Subtema:** Funciones circulares · Periodicidad

Como los ángulos de t y t + 2π radianes determinan el mismo punto P(x, y) en el círculo unitario, se cumple sen(t + 2π) = sen t y cos(t + 2π) = cos t; es decir, las funciones seno y coseno repiten sus valores cada 2π unidades.

### 11

En relación con el libro de Geometría Analítica, según la Definición 9.1.3, ¿cuándo se dice que una función no constante f es periódica, y qué es su periodo?

- A. Es periódica si hay un número positivo p tal que f(t) = f(t + p) para cada t del dominio; el periodo es el p positivo más pequeño para el cual eso es verdadero
- B. Es periódica si f(t) = 0 para algún t; el periodo es ese valor de t
- C. Es periódica si f(t) = f(−t); el periodo es 2t
- D. Es periódica si su gráfica es una recta; el periodo es su pendiente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 392
**Subtema:** Funciones circulares · Definición 9.1.3 función periódica

Se dice que una función no constante f es periódica si hay un número positivo p tal que f(t) = f(t + p) para cada t en el dominio de f. Si p es el número positivo más pequeño para el cual esto es verdadero, entonces p se llama periodo de la función f.

### 12

En relación con el libro de Geometría Analítica, ¿cuál es el periodo de la función seno y de la función coseno?

- A. 2π
- B. π
- C. π/2
- D. 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 393
**Subtema:** Funciones circulares · Periodo de seno y coseno

La función seno f(t) = sen t y la función coseno g(t) = cos t son periódicas con periodo 2π.

---

## Sub-lote 5 · Funciones impares y pares; propiedades adicionales (pp. 393–394)

### 13

En relación con el libro de Geometría Analítica, según el Teorema 9.1.2, ¿cuál función es impar y cuál es par, y qué igualdades las expresan?

- A. La función seno es impar, sen(−t) = −sen t; la función coseno es par, cos(−t) = cos t
- B. La función seno es par, sen(−t) = sen t; la función coseno es impar, cos(−t) = −cos t
- C. Ambas son impares: sen(−t) = −sen t y cos(−t) = −cos t
- D. Ambas son pares: sen(−t) = sen t y cos(−t) = cos t

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 393
**Subtema:** Funciones circulares · Teorema 9.1.2 funciones impares y pares

La función seno f(t) = sen t es impar y la función coseno g(t) = cos t es par; es decir, para cada número real t, sen(−t) = −sen t y cos(−t) = cos t.

### 14

En relación con el libro de Geometría Analítica, según los incisos i) y ii) del Teorema 9.1.3, ¿qué igualdades relacionan al seno y al coseno con el complemento π/2 − t?

- A. cos(π/2 − t) = sen t y sen(π/2 − t) = cos t
- B. cos(π/2 − t) = −sen t y sen(π/2 − t) = −cos t
- C. cos(π/2 − t) = cos t y sen(π/2 − t) = sen t
- D. cos(π/2 − t) = tan t y sen(π/2 − t) = cot t

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 394
**Subtema:** Funciones circulares · Teorema 9.1.3 incisos i) y ii)

Para todos los números reales t: i) cos(π/2 − t) = sen t y ii) sen(π/2 − t) = cos t.

### 15

En relación con el libro de Geometría Analítica, según los incisos iii) y iv) del Teorema 9.1.3, ¿qué valen cos(t + π) y sen(t + π)?

- A. cos(t + π) = −cos t y sen(t + π) = −sen t
- B. cos(t + π) = cos t y sen(t + π) = sen t
- C. cos(t + π) = sen t y sen(t + π) = cos t
- D. cos(t + π) = −sen t y sen(t + π) = −cos t

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 394
**Subtema:** Funciones circulares · Teorema 9.1.3 incisos iii) y iv)

Para todos los números reales t: iii) cos(t + π) = −cos t y iv) sen(t + π) = −sen t.

### 16

En relación con el libro de Geometría Analítica, según los incisos v) y vi) del Teorema 9.1.3, ¿qué valen cos(π − t) y sen(π − t)?

- A. cos(π − t) = −cos t y sen(π − t) = sen t
- B. cos(π − t) = cos t y sen(π − t) = −sen t
- C. cos(π − t) = −cos t y sen(π − t) = −sen t
- D. cos(π − t) = sen t y sen(π − t) = cos t

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 394
**Subtema:** Funciones circulares · Teorema 9.1.3 incisos v) y vi)

Para todos los números reales t: v) cos(π − t) = −cos t y vi) sen(π − t) = sen t.

---

## Sub-lote 6 · Ángulo de referencia, segunda parte (pp. 394–395)

### 17

En relación con el libro de Geometría Analítica, para un número real t cuyo punto P(t) no está sobre un eje, ¿qué es el ángulo de referencia t' y qué relación hay entre las coordenadas de P(t') y las de P(t)?

- A. t' es el ángulo agudo (del primer cuadrante) congruente con el que forma el lado terminal con el eje x; las coordenadas de P(t') son iguales en valor absoluto a las de P(t), de modo que sen t = ±sen t' y cos t = ±cos t'
- B. t' es el ángulo suplementario de t; sus coordenadas son las opuestas de las de P(t)
- C. t' es el ángulo coterminal con t; sus coordenadas son idénticas a las de P(t)
- D. t' es siempre π/2; sus coordenadas son (0, 1)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 394
**Subtema:** Funciones circulares · Ángulo de referencia

El lado terminal de todo ángulo de t radianes (donde P(t) no está sobre un eje) forma un ángulo agudo con el eje x; el ángulo de t' radianes congruente con él en el primer cuadrante se conoce como ángulo de referencia. Por la simetría del círculo unitario, las coordenadas de P(t') son iguales en valor absoluto a las de P(t); por tanto, sen t = ±sen t' y cos t = ±cos t'.

> Dato olvidable: en el círculo unitario, coseno = coordenada x y seno = coordenada y del punto P(t); por eso `sen²t+cos²t=1` (el punto vive en x²+y²=1). El seno es impar y el coseno es par; ambos tienen periodo 2π.

---

## Sub-lote 7 · Ciclo y propiedades de las gráficas (pp. 397–398)

### 18

En relación con el libro de Geometría Analítica, ¿qué es un ciclo de la gráfica de una función periódica?

- A. La gráfica de la función para un intervalo de longitud igual a su periodo
- B. La gráfica de la función para un intervalo de longitud igual a su amplitud
- C. El punto máximo de la gráfica
- D. La parte de la gráfica que está sobre el eje x

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 398
**Subtema:** Gráficas de seno y coseno · Ciclo

Se dice que la gráfica de cualquier función periódica, para un intervalo de longitud igual a su periodo, es un ciclo de su gráfica.

### 19

En relación con el libro de Geometría Analítica, ¿cuáles son los ceros (raíces) de f(x) = sen x y de g(x) = cos x?

- A. Los ceros de sen x son x = nπ (n entero); los ceros de cos x son x = (2n + 1)π/2 (n entero)
- B. Los ceros de sen x son x = (2n + 1)π/2; los ceros de cos x son x = nπ
- C. Los ceros de ambas son x = nπ
- D. Los ceros de ambas son x = 2nπ

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 398
**Subtema:** Gráficas de seno y coseno · Ceros

Los ceros de f(x) = sen x son x = nπ, n un entero. Los ceros de g(x) = cos x son x = (2n + 1)π/2, n un entero.

### 20

En relación con el libro de Geometría Analítica, según las propiedades de las funciones seno y coseno, ¿qué simetría tiene cada gráfica y dónde son continuas?

- A. La gráfica de sen x es simétrica respecto al origen y la de cos x respecto al eje y; ambas son continuas en (−∞, ∞)
- B. La gráfica de sen x es simétrica respecto al eje y y la de cos x respecto al origen; ambas son discontinuas
- C. Ambas gráficas son simétricas respecto al eje x y sólo son continuas en [0, 2π]
- D. Ninguna de las dos tiene simetría, y sólo el coseno es continuo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 398
**Subtema:** Gráficas de seno y coseno · Simetría y continuidad

La gráfica de f(x) = sen x es simétrica con respecto al origen. La gráfica de g(x) = cos x es simétrica con respecto al eje y. Las funciones f(x) = sen x y g(x) = cos x son continuas en el intervalo (−∞, ∞).

---

## Sub-lote 8 · Amplitud y desplazamiento vertical (p. 399)

### 21

En relación con el libro de Geometría Analítica, en la gráfica de y = A sen x o y = A cos x, ¿qué es la amplitud y cuánto vale para las funciones básicas?

- A. La amplitud es |A|, la distancia máxima de cualquier punto de la gráfica al eje x; para las funciones básicas y = sen x y y = cos x es |A| = 1
- B. La amplitud es A², y para las funciones básicas vale 2
- C. La amplitud es 2π/A, y para las funciones básicas vale π
- D. La amplitud es el periodo dividido entre 2, y para las básicas vale π

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 399
**Subtema:** Gráficas de seno y coseno · Amplitud

La distancia máxima de cualquier punto en la gráfica de y = A sen x, o y = A cos x, al eje x, es |A|. Al número |A| se le llama amplitud. La amplitud de las funciones básicas y = sen x y y = cos x es |A| = 1. En general, la amplitud se define por amplitud = ½[M − m], donde M y m son los valores máximo y mínimo.

### 22

En relación con el libro de Geometría Analítica, ¿cómo se obtienen las gráficas de y = A sen x + D y y = A cos x + D respecto a las de y = A sen x y y = A cos x?

- A. Son las gráficas de y = A sen x y y = A cos x desplazadas verticalmente hacia arriba cuando D > 0, y hacia abajo cuando D < 0
- B. Son las mismas gráficas desplazadas horizontalmente D unidades
- C. Son las mismas gráficas reflejadas en el eje y
- D. Son las mismas gráficas con la amplitud multiplicada por D

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 399
**Subtema:** Gráficas de seno y coseno · Desplazamiento vertical

Las gráficas de y = A sen x + D y y = A cos x + D son las gráficas de y = A sen x y y = A cos x desplazadas verticalmente hacia arriba cuando D > 0, y hacia abajo cuando D < 0.

---

## Sub-lote 9 · Periodo y desplazamiento de fase (pp. 400–402)

### 23

En relación con el libro de Geometría Analítica, ¿cuál es la amplitud y el periodo de las gráficas de y = A sen Bx y y = A cos Bx para B > 0?

- A. Amplitud |A| y periodo 2π/B, las dos
- B. Amplitud |B| y periodo 2π/A
- C. Amplitud |A| y periodo 2πB
- D. Amplitud |A/B| y periodo B/2π

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 400
**Subtema:** Gráficas de seno y coseno · Periodo

Las gráficas de y = A sen Bx y y = A cos Bx para B > 0 tienen amplitud |A| y periodo 2π/B, las dos.

### 24

En relación con el libro de Geometría Analítica, para las gráficas de y = A sen(Bx + C) y y = A cos(Bx + C) con B > 0, ¿qué es el desplazamiento de fase y en qué dirección ocurre?

- A. El desplazamiento de fase es |C|/B; el desplazamiento es hacia la derecha si C < 0 y hacia la izquierda si C > 0
- B. El desplazamiento de fase es |B|/C; hacia la izquierda si C < 0 y hacia la derecha si C > 0
- C. El desplazamiento de fase es |C|·B; siempre hacia la derecha
- D. El desplazamiento de fase es 2π/B; siempre hacia la izquierda

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 402
**Subtema:** Gráficas de seno y coseno · Desplazamiento de fase

Las gráficas de y = A sen(Bx + C) y y = A cos(Bx + C), B > 0, son las de y = A sen Bx y y = A cos Bx desplazadas horizontalmente |C|/B. El desplazamiento es hacia la derecha si C < 0, y hacia la izquierda si C > 0. El número |C|/B se llama desplazamiento de fase; la amplitud de cada gráfica es |A| y el periodo es 2π/B.

### 25

En relación con el libro de Geometría Analítica, según las identidades (3) comprobadas gráficamente, ¿a qué equivalen cos(x − π/2), sen(x + π/2) y sen(x − π/2)?

- A. cos(x − π/2) = sen x, sen(x + π/2) = cos x y sen(x − π/2) = −cos x
- B. cos(x − π/2) = −sen x, sen(x + π/2) = −cos x y sen(x − π/2) = cos x
- C. cos(x − π/2) = cos x, sen(x + π/2) = sen x y sen(x − π/2) = sen x
- D. cos(x − π/2) = tan x, sen(x + π/2) = cot x y sen(x − π/2) = −tan x

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 402
**Subtema:** Gráficas de seno y coseno · Identidades de desplazamiento

Se comprueban gráficamente las identidades: cos(x − π/2) = sen x, sen(x + π/2) = cos x y sen(x − π/2) = −cos x.

> Dato olvidable: en `y = A sen(Bx + C) + D`, la amplitud es `|A|`, el periodo `2π/B`, el desplazamiento de fase `|C|/B` (derecha si C<0, izquierda si C>0) y `D` sube o baja la gráfica. La gráfica del coseno es la del seno corrida π/2 a la izquierda.
