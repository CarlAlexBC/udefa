# Geometría Analítica · Capítulo 12 · Coordenadas polares

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 12 → CERRADO (§12.1–§12.5 completos)**

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
- **§12.3 Secciones cónicas en coordenadas polares** (pp. 536–541) ← este archivo lo cubre.
- **§12.4 Vectores en el plano** (pp. 542–549) ← este archivo lo cubre.
- **§12.5 Producto punto** (pp. 550–556) ← este archivo lo cubre.

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

**§12.3 · COMPLETO** en 6 reactivos (reactivos 19–24), toda la teoría de la sección
(pp. 536–539): la **Definición 12.3.1** de **sección cónica** (directriz, foco y
**excentricidad** `e = d(P,F)/d(P,L)`); la **clasificación por excentricidad** (`e=1`
parábola, `0<e<1` elipse, `e>1` hipérbola); el **Teorema 12.3.1** (ecuaciones polares
`r=ep/(1±e cos θ)` y `r=ep/(1±e sen θ)`, foco en el origen); la **orientación del eje** (cos
→ eje x, sen → eje y); la ubicación de los **vértices** (formas con cos en `θ=0`/`θ=π`,
formas con sen en `θ=π/2`/`θ=3π/2`); y la aplicación a **órbitas** (`e=(rₐ−rₚ)/(rₐ+rₚ)`,
perihelio y afelio). Los ejemplos de graficado quedan fuera por la norma de teoría sobre
práctica. Fórmulas verificadas contra las hojas renderizadas 553, 554 y 556; prosa por OCR.

**§12.4 · COMPLETO** en 12 reactivos (reactivos 25–36), toda la teoría de la sección
(pp. 542–547): **escalar vs vector** (punto inicial/terminal); **magnitud** y **vectores
iguales**; el **vector de posición** `v=⟨a,b⟩`, sus **componentes** y `|v|=√(a²+b²)`; el
**vector cero** `⟨0,0⟩`; la **Definición 12.4.1** (ángulo de dirección, `cos θ=x/|v|`,
`sen θ=y/|v|`, `tan θ=y/x`); la **Definición 12.4.2** (suma `⟨a+c,b+d⟩`, múltiplo escalar
`⟨ka,kb⟩`, igualdad) y la **sustracción** (`u−v=⟨a−c,b−d⟩`); la magnitud del múltiplo escalar
`|kv|=|k||v|` (y el efecto del signo de k en la dirección); el **vector unitario** y la
**normalización** `u=(1/|v|)v`; los **vectores de base estándar** `i=⟨1,0⟩`, `j=⟨0,1⟩` con
`u=ai+bj` (componentes horizontal/vertical, combinación lineal); la **forma trigonométrica**
`v=|v|(cos θ i + sen θ j)`; y la **rapidez** (magnitud de la velocidad) y la **fuerza
resultante** (suma vectorial). El libro usa notación de corchetes angulares `⟨ ⟩` para
vectores. Fórmulas verificadas contra las hojas renderizadas 560, 561, 563 y 564; prosa por
OCR.

**§12.5 · COMPLETO** en 8 reactivos (reactivos 37–44), toda la teoría de la sección
(pp. 550–555): la **Definición 12.5.1** de **producto punto** `u·v=ac+bd` (un escalar); el
**Teorema 12.5.1** (propiedades: conmutativa, distributiva, `v·v=|v|²`); el **Teorema
12.5.2** (forma alternativa `u·v=|u||v|cos θ`); la fórmula del **ángulo entre vectores**
`cos θ=(u·v)/(|u||v|)`; el **Teorema 12.5.3** (criterio de **ortogonalidad**: `u·v=0`); la
**componente** de u sobre v (`comp_v u = u·(v/|v|)`); la **proyección** de u sobre v
(`proy_v u = (comp_v u)(v/|v|)`); y la **interpretación física** (trabajo `W=F·d`). Fórmulas
verificadas contra las hojas renderizadas 567, 568, 569, 570 y 571; prosa por OCR.

**CAPÍTULO 12 CERRADO** en 44 reactivos (§12.1–§12.5). **Pendiente:** ninguno. Con el
capítulo 12, **la materia Geometría Analítica queda CERRADA para la EMI** (`GA-03-2026`): los
cuatro capítulos que pide el temario —4 (64), 8 (58), 9 (53) y 12 (44)— están completos,
**219 reactivos** en total. El temario deja fuera a propósito el capítulo 11 (cónicas en
coordenadas rectangulares).

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

---

## Sub-lote 9 · Sección cónica y excentricidad (pp. 536–537)

### 19

En relación con el libro de Geometría Analítica, según la Definición 12.3.1, ¿qué es una sección cónica y cómo se llaman sus elementos?

- A. Dados una recta fija L (directriz) y un punto F fuera de ella (foco), es el conjunto de puntos P para los cuales la distancia de P a F, dividida entre la distancia de P a L, es constante; esa constante es la excentricidad e
- B. Es el conjunto de puntos que equidistan de dos focos
- C. Es el conjunto de puntos cuya suma de distancias a dos rectas es constante
- D. Es cualquier curva que pase por el origen

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 536
**Subtema:** Cónicas polares · Definición 12.3.1

Sean L una recta fija en el plano y F un punto que no esté en la recta. Una sección cónica es el conjunto de puntos P en el plano para los cuales la distancia de P a F, dividida entre la distancia de P a L, es constante. La recta fija L se llama directriz, el punto F es un foco, y la constante fija es la excentricidad e de la cónica.

### 20

En relación con el libro de Geometría Analítica, según el valor de la excentricidad e, ¿qué tipo de cónica se obtiene?

- A. Si e = 1 es una parábola; si 0 < e < 1 es una elipse; si e > 1 es una hipérbola
- B. Si e = 0 es una parábola; si e = 1 es una elipse; si e = 2 es una hipérbola
- C. Si e > 1 es una parábola; si e = 1 es una elipse; si 0 < e < 1 es una hipérbola
- D. Si e = 1 es una elipse; si 0 < e < 1 es una parábola; si e > 1 es un círculo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 536
**Subtema:** Cónicas polares · Clasificación por excentricidad

Si e = 1, la cónica es una parábola; si 0 < e < 1, la cónica es una elipse; y si e > 1, la cónica es una hipérbola.

---

## Sub-lote 10 · Ecuaciones polares de cónicas (pp. 537–538)

### 21

En relación con el libro de Geometría Analítica, según el Teorema 12.3.1, ¿qué forma tienen las ecuaciones polares de una sección cónica con foco en el origen?

- A. r = ep/(1 ± e cos θ) o r = ep/(1 ± e sen θ)
- B. r = ep/(cos θ ± e) o r = ep/(sen θ ± e)
- C. r = e/(1 ± p cos θ) o r = e/(1 ± p sen θ)
- D. r = ep(1 ± e cos θ) o r = ep(1 ± e sen θ)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 537
**Subtema:** Cónicas polares · Teorema 12.3.1 ecuaciones polares

Toda ecuación polar de la forma r = ep/(1 ± e cos θ) o r = ep/(1 ± e sen θ) es la de una sección cónica con foco en el origen y eje a lo largo de un eje coordenado.

### 22

En relación con el libro de Geometría Analítica, según el Teorema 12.3.1, ¿a lo largo de qué eje está el eje de la cónica según la forma de su ecuación polar?

- A. A lo largo del eje x para las ecuaciones con cos θ (forma r = ep/(1 ± e cos θ)); a lo largo del eje y para las ecuaciones con sen θ (forma r = ep/(1 ± e sen θ))
- B. A lo largo del eje y para las de cos θ; a lo largo del eje x para las de sen θ
- C. Siempre a lo largo del eje x, sin importar la forma
- D. Siempre a lo largo de la directriz

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 537
**Subtema:** Cónicas polares · Orientación del eje

El eje de la sección cónica está a lo largo del eje x para las ecuaciones de la forma r = ep/(1 ± e cos θ), y a lo largo del eje y para las ecuaciones de la forma r = ep/(1 ± e sen θ).

### 23

En relación con el libro de Geometría Analítica, para trazar una cónica polar, ¿dónde están los dos vértices de una elipse o una hipérbola según la forma de la ecuación?

- A. En θ = 0 y θ = π para las ecuaciones con cos θ; en θ = π/2 y θ = 3π/2 para las ecuaciones con sen θ
- B. En θ = π/2 y θ = 3π/2 para las de cos θ; en θ = 0 y θ = π para las de sen θ
- C. Siempre en θ = 0 y θ = π/2
- D. En el foco y en la directriz

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 538
**Subtema:** Cónicas polares · Ubicación de los vértices

Para las ecuaciones con cos θ, los dos vértices de la elipse o la hipérbola están en θ = 0 y θ = π. Para las ecuaciones con sen θ, los dos vértices están en θ = π/2 y θ = 3π/2.

---

## Sub-lote 11 · Aplicación: órbitas (p. 539)

### 24

En relación con el libro de Geometría Analítica, en la órbita elíptica de un satélite con el Sol en un foco, ¿qué son r_p y r_a, y cómo se relaciona la excentricidad con ellos?

- A. r_p es el valor de r en el perihelio (punto más cercano) y r_a en el afelio (punto más lejano); la excentricidad es e = (r_a − r_p)/(r_a + r_p)
- B. r_p es el afelio y r_a el perihelio; la excentricidad es e = (r_p − r_a)/(r_p + r_a)
- C. r_p y r_a son los dos focos; la excentricidad es e = r_p · r_a
- D. r_p y r_a son los semiejes; la excentricidad es e = r_a / r_p

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 539
**Subtema:** Cónicas polares · Órbitas y excentricidad

r_p es el valor de r en el perihelio (el punto de la órbita más cercano al Sol) y r_a es el valor de r en el afelio (el más lejano). La excentricidad e de la órbita se relaciona con r_p y r_a por medio de e = (r_a − r_p)/(r_a + r_p).

> Dato olvidable: la excentricidad manda: `e=1` parábola, `0<e<1` elipse, `e>1` hipérbola. En la ecuación polar `r=ep/(1±e cos θ)`, el `cos` pone el eje sobre el eje x y el `sen` sobre el eje y; el foco siempre va en el origen.

---

## Sub-lote 12 · Escalares, vectores y magnitud (pp. 542–543)

### 25

En relación con el libro de Geometría Analítica, ¿qué diferencia hay entre una cantidad escalar y un vector, y cómo se llaman los extremos de un vector?

- A. Una cantidad escalar es simplemente un número real (representa una magnitud); un vector es una flecha o segmento de recta dirigido que tiene magnitud y dirección, con una cola llamada punto inicial y una punta llamada punto terminal
- B. Un escalar tiene magnitud y dirección; un vector es sólo un número real
- C. Ambos son números reales, sin diferencia
- D. Un escalar es una flecha y un vector es un punto

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 542
**Subtema:** Vectores · Escalar y vector

Una cantidad escalar es simplemente un número real y se usa para representar magnitudes. Un vector puede concebirse como una flecha o un segmento de recta dirigido que conecta dos puntos; tiene magnitud y dirección. La cola de la flecha se conoce como punto inicial y la punta como punto terminal.

### 26

En relación con el libro de Geometría Analítica, ¿qué es la magnitud de un vector y cuándo se dice que dos vectores son iguales?

- A. La magnitud es la longitud del segmento de recta dirigido; dos vectores son iguales si tienen la misma magnitud y la misma dirección
- B. La magnitud es el ángulo del vector; dos vectores son iguales si tienen el mismo punto inicial
- C. La magnitud es el número de componentes; dos vectores son iguales si son paralelos
- D. La magnitud es la suma de las componentes; dos vectores son iguales si tienen la misma dirección aunque distinta magnitud

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 542
**Subtema:** Vectores · Magnitud e igualdad

La longitud del segmento de recta dirigido se llama magnitud del vector y se representa por medio de |AB|. Dos vectores son iguales si ambos tienen la misma magnitud y la misma dirección.

### 27

En relación con el libro de Geometría Analítica, ¿qué es el vector de posición v = ⟨a, b⟩, cómo se llaman a y b, y cuál es su magnitud?

- A. Es el vector con punto inicial en el origen y punto terminal en P(a, b); a y b son las componentes (forma de componentes), y su magnitud es |v| = √(a² + b²)
- B. Es un vector cualquiera; a y b son sus ángulos, y su magnitud es a + b
- C. Es el vector cero; a y b son sus focos, y su magnitud es a · b
- D. Es un escalar; a y b son números reales, y su magnitud es √(a + b)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 543
**Subtema:** Vectores · Vector de posición y magnitud

Todo vector en el plano se identifica con un vector de posición único v = ⟨a, b⟩, con punto inicial en el origen. Los números a y b son las componentes del vector, y la notación ⟨a, b⟩ es la forma de componentes. La magnitud es |v| = √(a² + b²).

### 28

En relación con el libro de Geometría Analítica, ¿cómo se define el vector cero y cuál es su magnitud y dirección?

- A. El vector cero es 0 = ⟨0, 0⟩; su magnitud es cero y no tiene asignada dirección alguna
- B. El vector cero es 0 = ⟨1, 1⟩; su magnitud es 1 y su dirección es π/4
- C. El vector cero es 0 = ⟨0, 0⟩; su magnitud es infinita y su dirección es cualquiera
- D. El vector cero no existe

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 543
**Subtema:** Vectores · Vector cero

El vector cero, representado con 0, se define como 0 = ⟨0, 0⟩. La magnitud del vector cero es cero, y no tiene asignada dirección alguna.

### 29

En relación con el libro de Geometría Analítica, según la Definición 12.4.1, para un vector v = ⟨x, y⟩ diferente de cero con ángulo de dirección θ, ¿qué relaciones se cumplen?

- A. cos θ = x/|v|, sen θ = y/|v| y tan θ = y/x (x ≠ 0), donde |v| = √(x² + y²)
- B. cos θ = y/|v|, sen θ = x/|v| y tan θ = x/y
- C. cos θ = x, sen θ = y y tan θ = xy
- D. cos θ = |v|/x, sen θ = |v|/y y tan θ = x + y

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 543
**Subtema:** Vectores · Definición 12.4.1 ángulo de dirección

Para todo vector diferente de cero v = ⟨x, y⟩ con ángulo de dirección θ: cos θ = x/|v|, sen θ = y/|v| y tan θ = y/x (x ≠ 0), donde |v| = √(x² + y²).

---

## Sub-lote 13 · Operaciones con vectores (pp. 543–545)

### 30

En relación con el libro de Geometría Analítica, según la Definición 12.4.2, si u = ⟨a, b⟩, v = ⟨c, d⟩ y k es un número real, ¿cómo se definen la suma, el múltiplo escalar y la igualdad?

- A. Suma: u + v = ⟨a + c, b + d⟩; múltiplo escalar: ku = ⟨ka, kb⟩; igualdad: u = v si y sólo si a = c y b = d
- B. Suma: u + v = ⟨ac, bd⟩; múltiplo escalar: ku = ⟨k + a, k + b⟩; igualdad: u = v si a = d y b = c
- C. Suma: u + v = ⟨a + d, b + c⟩; múltiplo escalar: ku = ⟨a/k, b/k⟩; igualdad: siempre
- D. Suma: u + v = ⟨a − c, b − d⟩; múltiplo escalar: ku = ⟨k, k⟩; igualdad: nunca

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 544
**Subtema:** Vectores · Definición 12.4.2 operaciones

Sean u = ⟨a, b⟩ y v = ⟨c, d⟩ vectores y k un número real. Suma: u + v = ⟨a + c, b + d⟩; múltiplo escalar: ku = ⟨ka, kb⟩; igualdad: u = v si y sólo si a = c y b = d.

### 31

En relación con el libro de Geometría Analítica, ¿cómo se define el negativo de un vector u = ⟨a, b⟩ y la diferencia u − v (con v = ⟨c, d⟩)?

- A. −u = (−1)u = ⟨−a, −b⟩ y u − v = u + (−v) = ⟨a − c, b − d⟩
- B. −u = ⟨a, b⟩ y u − v = ⟨a + c, b + d⟩
- C. −u = ⟨b, a⟩ y u − v = ⟨c − a, d − b⟩
- D. −u = ⟨1/a, 1/b⟩ y u − v = ⟨ac, bd⟩

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 544
**Subtema:** Vectores · Sustracción

El negativo de un vector u es −u = (−1)u = ⟨−a, −b⟩. La sustracción o diferencia de dos vectores es u − v = u + (−v) = ⟨a − c, b − d⟩.

### 32

En relación con el libro de Geometría Analítica, en el múltiplo escalar kv de un vector v por un número real k, ¿cómo cambia la magnitud y la dirección?

- A. La magnitud se multiplica por |k| (es decir, |kv| = |k||v|); si k > 0 la dirección de v no cambia, y si k < 0 la dirección se invierte
- B. La magnitud no cambia; la dirección siempre se invierte
- C. La magnitud se divide entre k; la dirección gira 90°
- D. La magnitud se multiplica por k²; la dirección no cambia nunca

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 545
**Subtema:** Vectores · Magnitud del múltiplo escalar

En la multiplicación escalar de un vector v por un número real k, la magnitud de v se multiplica por |k|: |kv| = |k||v|. Si k > 0, la dirección de v no cambia; pero si k < 0, la dirección de v se invierte.

---

## Sub-lote 14 · Vectores unitarios, base i/j y forma trigonométrica (pp. 545–547)

### 33

En relación con el libro de Geometría Analítica, ¿qué es un vector unitario y cómo se obtiene la normalización de un vector v diferente de cero?

- A. Un vector unitario es todo vector de magnitud 1; la normalización de v es u = (1/|v|)v, un vector unitario en la misma dirección que v
- B. Un vector unitario es todo vector de magnitud 0; la normalización es u = |v|·v
- C. Un vector unitario es el vector cero; la normalización es u = v²
- D. Un vector unitario es cualquier vector; la normalización es u = v + 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 545
**Subtema:** Vectores · Vector unitario y normalización

Todo vector de magnitud 1 se llama vector unitario. Se obtiene un vector unitario u en la misma dirección que un vector v diferente de cero multiplicando v por el escalar positivo 1/|v|: u = (1/|v|)v, que es la normalización del vector v.

### 34

En relación con el libro de Geometría Analítica, ¿cuáles son los vectores de base estándar i y j, y cómo se expresa un vector u = ⟨a, b⟩ en términos de ellos?

- A. i = ⟨1, 0⟩ y j = ⟨0, 1⟩ (vectores unitarios en la dirección de los ejes x y y positivos); u = ⟨a, b⟩ = ai + bj, con a la componente horizontal y b la componente vertical
- B. i = ⟨0, 1⟩ y j = ⟨1, 0⟩; u = a − bj
- C. i = ⟨1, 1⟩ y j = ⟨−1, −1⟩; u = a/i + b/j
- D. i = ⟨2, 0⟩ y j = ⟨0, 2⟩; u = ai − bj

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 546
**Subtema:** Vectores · Vectores i, j de base estándar

Los vectores unitarios en la dirección de los ejes x y y positivos son i = ⟨1, 0⟩ y j = ⟨0, 1⟩; se llaman vectores de base estándar. Todo vector u = ⟨a, b⟩ = ai + bj, donde a es la componente horizontal y b la componente vertical; ai + bj se conoce como combinación lineal de i y j.

### 35

En relación con el libro de Geometría Analítica, ¿cuál es la forma trigonométrica de un vector v diferente de cero con magnitud |v| y ángulo de dirección θ?

- A. v = |v|(cos θ i + sen θ j)
- B. v = |v|(sen θ i + cos θ j)
- C. v = |v|(tan θ i + cot θ j)
- D. v = cos θ i + sen θ j

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 547
**Subtema:** Vectores · Forma trigonométrica

Para un vector diferente de cero v = ⟨x, y⟩ con ángulo de dirección θ, como x = |v| cos θ y y = |v| sen θ, se tiene v = |v|(cos θ i + sen θ j). Esta representación se conoce como la forma trigonométrica del vector v.

### 36

En relación con el libro de Geometría Analítica, ¿cómo se llama la magnitud del vector velocidad, y qué es la fuerza resultante cuando dos fuerzas actúan simultáneamente en el mismo punto?

- A. La magnitud de la velocidad es la rapidez; la fuerza resultante es la única fuerza igual a la suma vectorial de las dos fuerzas
- B. La magnitud de la velocidad es la aceleración; la fuerza resultante es la diferencia de las dos fuerzas
- C. La magnitud de la velocidad es el desplazamiento; la fuerza resultante es el producto de las dos fuerzas
- D. La magnitud de la velocidad es el rumbo; la fuerza resultante es la mayor de las dos fuerzas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 547
**Subtema:** Vectores · Rapidez y fuerza resultante

La magnitud |v| de la velocidad v es una cantidad escalar llamada rapidez. Cuando dos fuerzas actúan simultáneamente en el mismo punto P sobre un objeto, éste reacciona como si una sola fuerza igual a la suma vectorial de las dos fuerzas actuara sobre él; esa única fuerza se llama fuerza resultante.

> Dato olvidable: un **escalar** es sólo un número (magnitud); un **vector** lleva magnitud y dirección. `|v|=√(a²+b²)`; normalizar es dividir el vector entre su magnitud para obtener uno unitario. `i=⟨1,0⟩`, `j=⟨0,1⟩`, y todo vector es `ai+bj`. La **rapidez** es la magnitud de la velocidad.

---

## Sub-lote 15 · Producto punto y sus propiedades (pp. 550–551)

### 37

En relación con el libro de Geometría Analítica, según la Definición 12.5.1, ¿cómo se define el producto punto de dos vectores u = ⟨a, b⟩ y v = ⟨c, d⟩, y qué tipo de cantidad es?

- A. u · v = ac + bd; es un número real (escalar)
- B. u · v = ⟨ac, bd⟩; es un vector
- C. u · v = ad − bc; es un escalar
- D. u · v = √(a² + b²) · √(c² + d²); es un vector

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 550
**Subtema:** Producto punto · Definición 12.5.1

En el espacio bidimensional, el producto punto (o producto interno) de dos vectores u = ⟨a, b⟩ y v = ⟨c, d⟩ es el número u · v = ac + bd; es un número real, o escalar.

### 38

En relación con el libro de Geometría Analítica, según el Teorema 12.5.1, ¿cuáles son propiedades del producto punto?

- A. Es conmutativo (u · v = v · u), distributivo (u · (v + w) = u · v + u · w) y cumple v · v = |v|²
- B. No es conmutativo, pero sí asociativo
- C. u · v siempre es un vector, y u · u = 0
- D. u · (v + w) = u · v, y v · v = |v|

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 550
**Subtema:** Producto punto · Teorema 12.5.1 propiedades

Entre las propiedades del producto punto: u · v = v · u (ley conmutativa); u · (v + w) = u · v + u · w (ley distributiva); u · (kv) = (ku) · v = k(u · v); v · v ≥ 0; y v · v = |v|².

---

## Sub-lote 16 · Forma alternativa, ángulo y ortogonalidad (pp. 551–552)

### 39

En relación con el libro de Geometría Analítica, según el Teorema 12.5.2 (forma alternativa), ¿cómo se expresa el producto punto en términos de las longitudes de los vectores y el ángulo entre ellos?

- A. u · v = |u||v| cos θ, donde θ es el ángulo entre los vectores tal que 0 ≤ θ ≤ π
- B. u · v = |u||v| sen θ
- C. u · v = (|u| + |v|) cos θ
- D. u · v = |u||v| tan θ

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 551
**Subtema:** Producto punto · Teorema 12.5.2 forma alternativa

El producto punto de dos vectores u y v es u · v = |u||v| cos θ, donde θ es el ángulo entre los vectores tal que 0 ≤ θ ≤ π.

### 40

En relación con el libro de Geometría Analítica, ¿cuál es la fórmula del coseno del ángulo θ entre dos vectores u y v?

- A. cos θ = (u · v)/(|u||v|)
- B. cos θ = (|u||v|)/(u · v)
- C. cos θ = (u · v)/(|u| + |v|)
- D. cos θ = (u · v) · (|u||v|)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 552
**Subtema:** Producto punto · Ángulo entre vectores

Despejando cos θ de la forma alternativa se obtiene la fórmula del coseno del ángulo entre dos vectores: cos θ = (u · v)/(|u||v|).

### 41

En relación con el libro de Geometría Analítica, según el Teorema 12.5.3, ¿cuándo dos vectores distintos de cero u y v son ortogonales (perpendiculares)?

- A. Si y sólo si u · v = 0
- B. Si y sólo si u · v > 0
- C. Si y sólo si u · v = |u||v|
- D. Si y sólo si u + v = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 552
**Subtema:** Producto punto · Teorema 12.5.3 vectores ortogonales

Dos vectores distintos de cero u y v son ortogonales si y sólo si u · v = 0 (lo que ocurre cuando el ángulo entre ellos es π/2).

---

## Sub-lote 17 · Componente, proyección y trabajo (pp. 553–554)

### 42

En relación con el libro de Geometría Analítica, ¿cómo se encuentra la componente del vector u sobre el vector v?

- A. Multiplicando u por un vector unitario en la dirección de v: comp_v u = u · (v/|v|) (equivalente a |u| cos θ)
- B. Multiplicando u por v: comp_v u = u · v
- C. Dividiendo v entre u: comp_v u = v/u
- D. Sumando u y v: comp_v u = u + v

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 553
**Subtema:** Producto punto · Componente de u sobre v

Para encontrar la componente del vector u sobre el vector v, multiplicamos u por un vector unitario en la dirección de v: comp_v u = u · (v/|v|), que equivale a |u| cos θ.

### 43

En relación con el libro de Geometría Analítica, ¿cómo se encuentra la proyección del vector u sobre el vector v?

- A. Multiplicando un vector unitario en la dirección de v por la componente de u sobre v: proy_v u = (comp_v u)(v/|v|)
- B. Multiplicando u por v directamente: proy_v u = u · v
- C. Restando v de u: proy_v u = u − v
- D. Tomando la magnitud de u: proy_v u = |u|

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 553
**Subtema:** Producto punto · Proyección de u sobre v

Para encontrar la proyección del vector u sobre un vector v, multiplicamos un vector unitario en la dirección de v por la componente de u sobre v: proy_v u = (comp_v u)(v/|v|).

### 44

En relación con el libro de Geometría Analítica, según la interpretación física del producto punto, ¿cómo se define el trabajo realizado cuando una fuerza constante desplaza un objeto?

- A. Cuando la fuerza de magnitud F desplaza el objeto una distancia d en la misma dirección, W = Fd; y si la fuerza F causa un desplazamiento d, el trabajo es W = F · d
- B. El trabajo es siempre W = F/d, sin importar la dirección
- C. El trabajo es W = F + d
- D. El trabajo es el producto vectorial de F y d

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 554
**Subtema:** Producto punto · Interpretación física (trabajo)

Cuando una fuerza constante de magnitud F desplaza un objeto una distancia d en la misma dirección de la fuerza, el trabajo realizado se define como W = Fd. Si una fuerza F causa un desplazamiento d de un cuerpo, el trabajo realizado es W = F · d.

> Dato olvidable: el producto punto da un **escalar**, no un vector: `u·v=ac+bd=|u||v|cos θ`. Dos vectores son **ortogonales** cuando `u·v=0`. La **rapidez** es la magnitud de la velocidad y el **trabajo** es `W=F·d`.
