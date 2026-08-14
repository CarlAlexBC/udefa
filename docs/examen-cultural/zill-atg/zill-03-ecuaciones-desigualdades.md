# Geometría Analítica · Capítulo 3 · Ecuaciones y desigualdades

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 3 → COMPLETO (§3.1–§3.7, reactivos 1–89)**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Este Zill 3.ª ed. lo comparten **varios planteles**
> (EMA, EMEFA, EMMA, EMMG, EMI), cada uno pidiendo capítulos distintos. El
> **capítulo 3** lo pide la **EMMA** (Escuela Militar de Mantenimiento y
> Abastecimiento), dentro de su materia *Álgebra* (`ÁLGE-01-2026`), **Completo**.
> Las líneas `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con
> que el temario los manda a llamar.

## Libro

Zill, Dennis G.; Dewar, Jacqueline M. *Álgebra, Trigonometría y Geometría Analítica*.
**McGraw-Hill/Interamericana Editores**, **tercera edición, 2012**. ISBN 978-607-15-0714-3.
**Edición verificada** en el archivo del capítulo 4 (`zill-04-coordenadas-rectangulares.md`).
El escaneo de la EMMA es **byte-idéntico** al de la EMI (mismo archivo, 15 537 197 bytes), así
que es la misma edición verificada. El temario de la **EMMA** (`temarios.json`, código
`ÁLGE-01-2026`) nombra por título los capítulos 2 *Conceptos fundamentales de álgebra* (Completo),
**3 *Ecuaciones y desigualdades* (Completo)** y 4 *Sistema de coordenadas rectangulares y gráficas*
(§4.1–§4.4).

**Desfase de páginas (esta copia):** para el **capítulo 3** la hoja del PDF va **17 adelante** de la
página impresa (portadilla del cap. 3, p. 111 = hoja 128; §3.1 en p. 112 = hoja 129). **Se leyó de
la hoja, no se calculó.** OJO: el desfase NO es constante en este libro; se releerá de la hoja al
avanzar por el capítulo.

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (mismo problema documentado en los archivos de los
capítulos 2 y 4): las fuentes subconjuntadas convierten los dígitos y símbolos al copiar el texto.
Por eso, para este libro se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, idioma español, `ocr.py`) sobre la hoja
  renderizada, y **corroborado contra la imagen** (`render.py`).
- **Fórmulas y símbolos** (∈, ⊂, ∪, ∩, ∅, fracciones, raíces, exponentes, valor absoluto): se **leen
  de la hoja renderizada a imagen** y se transcriben a mano — el OCR los mutila.

Toda cita de este archivo se corroboró por imagen; **ninguna se tomó de la extracción de texto directa.**

## Alcance

El **capítulo 3** *Ecuaciones y desigualdades* lo pide la **EMMA** **Completo**. Tiene siete secciones:

- **§3.1** Ecuaciones
- **§3.2** Traducción de palabras en una ecuación
- **§3.3** Ecuaciones cuadráticas
- **§3.4** Números complejos
- **§3.5** Desigualdades lineales
- **§3.6** Ecuaciones y desigualdades con valor absoluto
- **§3.7** Desigualdades polinomiales y racionales

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico, no práctico. Se privilegian las
definiciones, teoremas y reglas sobre los procedimientos de cálculo. Los ejemplos numéricos y los
bloques de ejercicios no se convierten en reactivos de procedimiento; las definiciones, teoremas y
fórmulas sí.

## Cobertura actual

**Sub-lote 1 (pp. 112–113, reactivos 1–14):** la apertura de **§3.1 Ecuaciones**: la terminología base
(ecuación, desigualdad/inecuación, ecuación en una variable, solución/raíz, satisface, resolver una
ecuación, identidad, ecuación condicional, conjunto solución), las **ecuaciones equivalentes**, el
**Teorema 3.1.1** (operaciones que producen ecuaciones equivalentes) y la **ecuación lineal**
*ax* + *b* = 0 (*a* ≠ 0) con su única solución {−*b*/*a*}.

**Sub-lote 2 (pp. 114–115, reactivos 15–18):** cierra **§3.1** con las **soluciones extrañas** (al
multiplicar ambos miembros por una expresión con variable la ecuación puede no equivaler a la original;
un valor así se llama solución extraña y es esencial comprobarlo) y la nota de que a resolver una variable
también se le llama **despejar**. Los Ejemplos 1–7 y los *Ejercicios* de las pp. 112–116 quedan fuera por
la norma de teoría sobre práctica.

**§3.1 Ecuaciones · CERRADO** (pp. 112–115, reactivos 1–18).

**Sub-lote 3 (pp. 118–122, reactivos 19–23):** **§3.2 Traducción de palabras en una ecuación** (sección
procedimental): la idea base (traducir palabras para construir una ecuación algebraica; no hay
procedimiento único) y las fórmulas destacadas —velocidad *d* = *rt* (y sus formas *r* = *d*/*t*,
*t* = *d*/*r*) y el principio de trabajo (*x*/*T* del trabajo en *x* unidades de tiempo)—. El recuadro de
sugerencias y todos los Ejemplos/Ejercicios quedan fuera por la norma de teoría sobre práctica.

**§3.2 Traducción de palabras en una ecuación · CERRADO** (pp. 118–122, reactivos 19–23).

**Sub-lote 4 (pp. 127–129, reactivos 24–31):** la apertura de **§3.3 Ecuaciones cuadráticas**: la ecuación
polinomial de grado *n*, la raíz de una ecuación polinomial, la **ecuación cuadrática** *ax*²+*bx*+*c*=0
(*a*≠0), el método de factorización (propiedad de la multiplicación por cero), la raíz repetida (de
multiplicidad 2), el **método de la raíz cuadrada** (*x*²=*d* → *x*=±√*d*) y el de **completar el cuadrado**.

**Sub-lote 5 (pp. 130–132, reactivos 32–37):** cierra **§3.3** con la **fórmula cuadrática**
*x*=(−*b*±√(*b*²−4*ac*))/(2*a*), el **discriminante** *b*²−4*ac* y sus tres casos (>0 dos raíces reales
diferentes, =0 raíces reales iguales, <0 sin raíces reales) y las **formas cuadráticas** (*at*²+*bt*+*c*=0).
Los Ejemplos 1–10 y los *Ejercicios* de las pp. 127–134 quedan fuera por la norma de teoría sobre práctica.

**§3.3 Ecuaciones cuadráticas · CERRADO** (pp. 127–132, reactivos 24–37).

**Sub-lote 6 (pp. 138–139, reactivos 38–45):** la apertura de **§3.4 Números complejos**: la **unidad
imaginaria** *i* (*i*²=−1), la raíz cuadrada principal de un negativo (√(−*c*)=*i*√*c*), el **número
complejo** *z*=*a*+*bi* en forma estándar, la parte real (*a*) y la parte imaginaria (*b*, no *bi*), el
número imaginario puro (0+*bi*), el número real (*b*=0) y la **igualdad** de complejos (Definición 3.4.1).

**Sub-lote 7 (pp. 140–142, reactivos 46–56):** cierra **§3.4** con la suma, la diferencia y el producto
(Definición 3.4.2), la advertencia sobre √*a*√*b*=√(*ab*) (falsa si *a* y *b* son ambos negativos), la
identidad y el inverso aditivos, el **conjugado** *a*−*bi* (Definición 3.4.3), el producto por el conjugado
(*a*²+*b*²), la **división** (multiplicar por el conjugado del denominador), las propiedades del conjugado
(Teorema 3.4.1) y que las soluciones complejas de una cuadrática con discriminante negativo son conjugadas.
Los Ejemplos 1–7 y los *Ejercicios* de las pp. 138–144 quedan fuera por la norma de teoría sobre práctica.

**§3.4 Números complejos · CERRADO** (pp. 138–142, reactivos 38–56).

**Sub-lote 8 (pp. 144–145, reactivos 57–64):** la apertura de **§3.5 Desigualdades lineales**: la solución
de una desigualdad, el conjunto solución, las desigualdades equivalentes, la gráfica, el **Teorema 3.5.1**
(operaciones que producen desigualdades equivalentes, incluida la inversión de la dirección al multiplicar
por un negativo) y la **desigualdad lineal** *ax*+*b*<0.

**Sub-lote 9 (pp. 146–147, reactivos 65–71):** cierra **§3.5** con la **notación de intervalos**: los
símbolos de infinito (no son números reales; nunca junto a un corchete cuadrado), el intervalo abierto
(*a*,*b*), el cerrado [*a*,*b*], los extremos, (−∞,∞) como toda la recta real y la **desigualdad
simultánea** *a*<*x*<*b*. Los Ejemplos y *Ejercicios* de las pp. 144–149 quedan fuera por la norma de
teoría sobre práctica.

**§3.5 Desigualdades lineales · CERRADO** (pp. 144–147, reactivos 57–71).

**Sub-lote 10 (pp. 150–152, reactivos 72–80):** **§3.6 Ecuaciones y desigualdades con valor absoluto**: la
definición de valor absoluto (cantidad no negativa, |*x*|=−*x* si *x*<0, =*x* si *x*≥0), el **Teorema 3.6.1**
(|*x*|=*a* ⇔ *x*=−*a* o *x*=*a*), las interpretaciones de distancia de |*x*|<*a* y |*x*|>*a*, el **Teorema
3.6.2** (|*x*|<*a* ⇔ −*a*<*x*<*a*; |*x*|>*a* ⇔ *x*<−*a* o *x*>*a*), la unión de intervalos disjuntos y
|*x*−*b*| como distancia entre *x* y *b*. Los Ejemplos y *Ejercicios* de las pp. 150–154 quedan fuera por la
norma de teoría sobre práctica.

**§3.6 Ecuaciones y desigualdades con valor absoluto · CERRADO** (pp. 150–152, reactivos 72–80).

**Sub-lote 11 (pp. 155, 158, reactivos 81–89):** **§3.7 Desigualdades polinomiales y racionales**: la
**desigualdad polinomial** (*P*(*x*)>0, etc.) y la **racional** (*P*(*x*)/*Q*(*x*)>0, con *P* y *Q* sin
factores comunes), las **propiedades del signo de un producto** (positivo/negativo según signos
iguales/opuestos), el **cero del polinomio** (*P*(*c*)=0, único punto donde puede cambiar de signo), la
advertencia de no multiplicar una desigualdad racional por el denominador, y las desigualdades estrictas
(< o >) frente a las no estrictas (≤ o ≥). El método de la tabla de signos y todos los Ejemplos/Ejercicios
de las pp. 154–160 quedan fuera por la norma de teoría sobre práctica.

**§3.7 Desigualdades polinomiales y racionales · CERRADO** (pp. 155, 158, reactivos 81–89).

**CAPÍTULO 3 · COMPLETO para la EMMA** (§3.1 a §3.7, reactivos 1–89). Con el capítulo 2 (en
`zill-02-conceptos-fundamentales-algebra.md`) y el capítulo 4 §4.1–§4.4 (en
`zill-04-coordenadas-rectangulares.md`), la materia *Álgebra* (`ÁLGE-01-2026`) de la EMMA queda cubierta
al nivel de reactivos.

**Pendiente:** ninguno. El capítulo 3 quedó **CERRADO** en 89 reactivos, cubierto §3.1 a §3.7
(pp. 112–158); los Ejemplos y los bloques de ejercicios quedan fuera por la norma de teoría sobre
práctica. Con él, y con los capítulos 2 y 4, **la materia *Álgebra* de la EMMA queda cerrada**.

## Avisos al aspirante (erratas del libro)

_Ninguno detectado por ahora en este capítulo._

---

## Sub-lote 1 · §3.1 Ecuaciones — terminología, ecuaciones equivalentes y ecuación lineal (pp. 112–113)

### 1

De acuerdo con el libro de Geometría Analítica, ¿qué es una ecuación?

- A. Una afirmación de que dos expresiones son iguales
- B. Una afirmación de que una expresión es menor que otra
- C. Una expresión algebraica que contiene una sola variable
- D. El cociente de dos polinomios

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · definición de ecuación

Una ecuación es una afirmación de que dos expresiones son iguales.

### 2

De conformidad con el libro de Geometría Analítica, ¿qué plantea una desigualdad o inecuación?

- A. Que una expresión es menor que otra
- B. Que dos expresiones son iguales
- C. Que una expresión es igual a cero
- D. Que dos expresiones son equivalentes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · desigualdad o inecuación

Una desigualdad o inecuación plantea que una expresión es menor que otra.

### 3

En relación con el libro de Geometría Analítica, cuando se igualan entre sí dos expresiones y al menos una de ellas contiene una variable, ¿qué es esa proposición matemática?

- A. Una ecuación en una variable
- B. Una identidad absoluta
- C. Una desigualdad condicional
- D. Un conjunto solución

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · ecuación en una variable

Cuando se igualan entre sí dos expresiones, y al menos una de ellas contiene una variable, entonces la proposición matemática es una ecuación en una variable.

### 4

De acuerdo con el libro de Geometría Analítica, ¿qué es una solución o raíz de una ecuación?

- A. Cualquier número que, sustituido en ella, la convierte en una proposición verdadera
- B. Cualquier número del dominio de la variable
- C. El número que hace cero el denominador
- D. El conjunto de todos los valores de la variable

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · solución o raíz

Una solución o raíz de una ecuación es cualquier número que, sustituido en ella, la convierte en una proposición verdadera.

### 5

De conformidad con el libro de Geometría Analítica, ¿cuándo se dice que un número satisface una ecuación?

- A. Si es una solución de la ecuación
- B. Si es un número real cualquiera
- C. Si pertenece al dominio de la variable
- D. Si hace verdadera una desigualdad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · satisface una ecuación

Se dice que un número satisface una ecuación si es una solución de la ecuación.

### 6

En relación con el libro de Geometría Analítica, ¿qué significa resolver una ecuación?

- A. Hallar todas sus soluciones
- B. Hallar una de sus soluciones
- C. Comprobar que es una identidad
- D. Escribir su conjunto solución como vacío

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · resolver una ecuación

Resolver una ecuación significa hallar todas sus soluciones.

### 7

De acuerdo con el libro de Geometría Analítica, ¿cuándo una ecuación se llama identidad?

- A. Si todos los números del dominio de la variable la satisfacen
- B. Si al menos un número del dominio de la variable no la satisface
- C. Si su conjunto solución es vacío
- D. Si tiene exactamente una solución

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · identidad

Una ecuación se llama identidad si todos los números del dominio de la variable la satisfacen.

### 8

De conformidad con el libro de Geometría Analítica, si hay al menos un número en el dominio de la variable que no satisface la ecuación, ¿cómo se dice que es?

- A. Una ecuación condicional
- B. Una identidad
- C. Una ecuación equivalente
- D. Una solución extraña

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · ecuación condicional

Si hay al menos un número en el dominio de la variable que no la satisfaga, entonces se dice que es una ecuación condicional.

### 9

En relación con el libro de Geometría Analítica, ¿cómo se llama el conjunto de todas las soluciones de una ecuación?

- A. Conjunto solución
- B. Dominio de la variable
- C. Conjunto de raíces extrañas
- D. Conjunto equivalente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 112
**Subtema:** Ecuaciones · conjunto solución

El conjunto de todas las soluciones de una ecuación se llama conjunto solución.

### 10

De acuerdo con el libro de Geometría Analítica, ¿cuándo dos ecuaciones son equivalentes?

- A. Si tienen las mismas soluciones, es decir, si sus conjuntos solución son exactamente iguales
- B. Si tienen el mismo número de términos
- C. Si ambas son identidades
- D. Si tienen el mismo dominio de la variable

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 113
**Subtema:** Ecuaciones · ecuaciones equivalentes

Decimos que dos ecuaciones son equivalentes si tienen las mismas soluciones, es decir, si sus conjuntos solución son exactamente iguales.

### 11

De conformidad con el libro de Geometría Analítica, según el inciso i) del Teorema 3.1.1, ¿qué operación produce una ecuación equivalente?

- A. Sumar o restar en cada miembro de la ecuación la misma expresión que represente un número real
- B. Sumar en un solo miembro de la ecuación un número real
- C. Multiplicar un miembro de la ecuación por cero
- D. Elevar al cuadrado cada miembro de la ecuación

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 113
**Subtema:** Ecuaciones · Teorema 3.1.1 (suma o resta)

Teorema 3.1.1: i) Sume o reste en cada miembro o lado de una ecuación la misma expresión que represente un número real.

### 12

En relación con el libro de Geometría Analítica, según el inciso ii) del Teorema 3.1.1, ¿qué operación produce una ecuación equivalente?

- A. Multiplicar o dividir cada miembro de la ecuación por la misma expresión que represente un número real diferente de cero
- B. Multiplicar o dividir cada miembro por cualquier número real, incluido el cero
- C. Multiplicar sólo el miembro izquierdo de la ecuación por una expresión
- D. Dividir cada miembro por una expresión que pueda ser cero

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 113
**Subtema:** Ecuaciones · Teorema 3.1.1 (multiplicación o división)

Teorema 3.1.1: ii) Multiplique o divida cada miembro o lado de una ecuación por la misma expresión que represente un número real diferente de cero.

### 13

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama una ecuación de la forma *ax* + *b* = 0, con *a* ≠ 0?

- A. Ecuación lineal
- B. Ecuación cuadrática
- C. Ecuación condicional
- D. Identidad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 113
**Subtema:** Ecuaciones · ecuación lineal

Una ecuación de la forma *ax* + *b* = 0, con *a* ≠ 0, donde *b* es un número real, se llama ecuación lineal.

### 14

De conformidad con el libro de Geometría Analítica, ¿cuántas soluciones tiene la ecuación lineal *ax* + *b* = 0 (con *a* ≠ 0), y cuál es?

- A. Exactamente una: {−*b*/*a*}
- B. Exactamente una: {*b*/*a*}
- C. Ninguna solución
- D. Infinitas soluciones

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 113
**Subtema:** Ecuaciones · solución de la ecuación lineal

La ecuación lineal *ax* + *b* = 0, con *a* ≠ 0, tiene exactamente una solución: {−*b*/*a*}.

---

## Sub-lote 2 · §3.1 Ecuaciones — soluciones extrañas y despejar una variable (pp. 114–115)

### 15

De acuerdo con el libro de Geometría Analítica, cuando los dos miembros de una ecuación se multiplican por una expresión que contiene una variable, ¿qué puede ocurrir con la ecuación resultante?

- A. Puede no equivaler a la original
- B. Siempre equivale a la original
- C. Siempre pierde todas sus soluciones
- D. Siempre se convierte en una identidad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 114
**Subtema:** Ecuaciones · soluciones extrañas

Cuando los dos miembros de una ecuación se multiplican por una expresión que contiene una variable, la ecuación resultante puede no equivaler a la original, pues excluimos la multiplicación por 0 en la operación ii) del teorema 3.1.1.

### 16

De conformidad con el libro de Geometría Analítica, ¿cómo se llama un valor que es solución de la ecuación resultante (tras multiplicar por una expresión con variable) pero no lo es de la ecuación original?

- A. Solución extraña
- B. Solución equivalente
- C. Raíz doble
- D. Solución condicional

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 114
**Subtema:** Ecuaciones · solución extraña

Las dos ecuaciones no son equivalentes, pues obviamente 0 es una solución de la última pero no lo es de la primera. Decimos entonces que 0 es una solución extraña de la ecuación original.

### 17

En relación con el libro de Geometría Analítica, ¿qué es esencial hacer con una "solución" obtenida al multiplicar ambos miembros de una ecuación por una expresión que puede ser 0 para algunos valores de la variable?

- A. Comprobarla
- B. Descartarla siempre
- C. Multiplicarla por su recíproco
- D. Sumarla al conjunto solución sin verificarla

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 114
**Subtema:** Ecuaciones · comprobación de soluciones

Es esencial comprobar una "solución" obtenida como resultado de multiplicar ambos miembros de una ecuación por una expresión que puede ser 0 para algunos valores de la variable.

### 18

De acuerdo con el libro de Geometría Analítica, ¿cómo se le denomina también a resolver una variable?

- A. Despejar una variable
- B. Sustituir una variable
- C. Factorizar una variable
- D. Cancelar una variable

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 115
**Subtema:** Ecuaciones · resolución (despejar) de una variable

A menudo a resolver una variable se le denomina también despejar una variable.

---

## Sub-lote 3 · §3.2 Traducción de palabras en una ecuación — idea base y fórmulas de velocidad y trabajo (pp. 118–122)

> Sección muy procedimental (planteo de problemas verbales). Por la norma de teoría sobre práctica se
> capturan la idea base y las fórmulas destacadas; el recuadro de "Sugerencias para construir una
> ecuación" (pasos de procedimiento) y todos los Ejemplos/Ejercicios quedan fuera.

### 19

De acuerdo con el libro de Geometría Analítica, como los problemas prácticos se expresan con palabras, ¿en qué consiste la idea básica para resolverlos con álgebra?

- A. Traducir las palabras para construir una ecuación algebraica apropiada
- B. Memorizar de antemano todas las fórmulas del capítulo
- C. Resolver la ecuación sin necesidad de plantearla
- D. Sustituir las palabras por números elegidos al azar

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 118
**Subtema:** Traducción de palabras en una ecuación · idea básica

Como estos problemas se expresan con palabras, la idea básica consiste en traducir éstas para construir una ecuación algebraica apropiada.

### 20

De conformidad con el libro de Geometría Analítica, ¿qué se afirma sobre el procedimiento para traducir un problema en palabras a una ecuación?

- A. No hay un procedimiento único para hacer esta traducción
- B. Existe un único procedimiento infalible para todos los casos
- C. Sólo funciona para los problemas de edad
- D. Nunca requiere práctica ni paciencia

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 118
**Subtema:** Traducción de palabras en una ecuación · no hay procedimiento único

Como no hay un procedimiento único para hacer esta traducción, se requiere trabajo, práctica y paciencia para adquirir pericia en la resolución de problemas de esta clase.

### 21

De acuerdo con el libro de Geometría Analítica, si un objeto se mueve a velocidad constante *r*, ¿con qué fórmula se obtiene la distancia *d* que recorre en *t* unidades de tiempo?

- A. *d* = *rt*
- B. *d* = *r*/*t*
- C. *d* = *r* + *t*
- D. *d* = *t*/*r*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 120
**Subtema:** Traducción de palabras en una ecuación · fórmula de la distancia

La distancia *d* que recorre en *t* unidades de tiempo se obtiene con la fórmula distancia = velocidad × tiempo, que expresada en símbolos es *d* = *rt*.

### 22

De conformidad con el libro de Geometría Analítica, ¿cuáles son otras formas de la fórmula *d* = *rt* útiles al resolver problemas de velocidad?

- A. *r* = *d*/*t* y *t* = *d*/*r*
- B. *r* = *dt* y *t* = *dr*
- C. *r* = *t*/*d* y *t* = *r*/*d*
- D. *r* = *d* − *t* y *t* = *d* − *r*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 120
**Subtema:** Traducción de palabras en una ecuación · formas derivadas de d = rt

Otras formas de *d* = *rt* que pueden ser útiles al resolver ciertos problemas de velocidad son *r* = *d*/*t* y *t* = *d*/*r*.

### 23

De acuerdo con el libro de Geometría Analítica, según el principio básico para resolver problemas de trabajo, si un individuo puede hacer todo el trabajo en *T* unidades de tiempo, ¿qué parte del trabajo termina en *x* unidades de tiempo?

- A. Una parte *x*/*T* del trabajo
- B. Una parte *T*/*x* del trabajo
- C. Una parte *xT* del trabajo
- D. Una parte *x* − *T* del trabajo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 122
**Subtema:** Traducción de palabras en una ecuación · principio de los problemas de trabajo

Si un individuo puede hacer todo el trabajo en *T* unidades de tiempo, entonces en *x* unidades de tiempo se termina una parte *x*/*T* del trabajo.

---

## Sub-lote 4 · §3.3 Ecuaciones cuadráticas — definición, factorización, raíz cuadrada y completar el cuadrado (pp. 127–129)

### 24

De acuerdo con el libro de Geometría Analítica, ¿cuál es la forma de una ecuación polinomial de grado *n*?

- A. *a*ₙ*x*ⁿ + *a*ₙ₋₁*x*ⁿ⁻¹ + ⋯ + *a*₁*x* + *a*₀ = 0, con *a*ₙ ≠ 0
- B. *a*ₙ*x*ⁿ + *a*ₙ₋₁*x*ⁿ⁻¹ + ⋯ + *a*₁*x* + *a*₀ = 0, con *a*ₙ = 0
- C. *a*ₙ*x*ⁿ · *a*ₙ₋₁*x*ⁿ⁻¹ ⋯ *a*₀ = 0
- D. *a*ₙ*x*ⁿ + ⋯ + *a*₀ > 0, con *a*ₙ ≠ 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 127
**Subtema:** Ecuaciones cuadráticas · ecuación polinomial de grado n

Una ecuación polinomial de grado *n* es una ecuación de la forma *a*ₙ*x*ⁿ + *a*ₙ₋₁*x*ⁿ⁻¹ + ⋯ + *a*₂*x*² + *a*₁*x* + *a*₀ = 0, con *a*ₙ ≠ 0.

### 25

De conformidad con el libro de Geometría Analítica, ¿cómo se llama la solución de una ecuación polinomial?

- A. Raíz de la ecuación
- B. Discriminante de la ecuación
- C. Coeficiente principal de la ecuación
- D. Grado de la ecuación

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 127
**Subtema:** Ecuaciones cuadráticas · raíz de una ecuación polinomial

La solución de una ecuación polinomial se llama raíz de la ecuación.

### 26

En relación con el libro de Geometría Analítica, ¿cuál es la forma estándar de una ecuación cuadrática?

- A. *ax*² + *bx* + *c* = 0, con *a* ≠ 0
- B. *ax* + *b* = 0, con *a* ≠ 0
- C. *ax*² + *bx* + *c* = 0, con *a* = 0
- D. *ax*³ + *bx*² + *cx* + *d* = 0, con *a* ≠ 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 127
**Subtema:** Ecuaciones cuadráticas · forma estándar

Una ecuación cuadrática es una ecuación polinomial que puede escribirse en la forma estándar: *ax*² + *bx* + *c* = 0, con *a* ≠ 0.

### 27

De acuerdo con el libro de Geometría Analítica, según la propiedad de la multiplicación por cero, si *a* y *b* representan números reales y *a* · *b* = 0, ¿qué se concluye?

- A. *a* = 0 o *b* = 0
- B. *a* = 0 y *b* = 0 a la vez
- C. *a* = *b*
- D. *a* + *b* = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 127
**Subtema:** Ecuaciones cuadráticas · propiedad de la multiplicación por cero

Si *a* y *b* representan números reales y *a* · *b* = 0, entonces *a* = 0 o *b* = 0.

### 28

De conformidad con el libro de Geometría Analítica, cuando una ecuación cuadrática tiene una sola raíz que, al contar las raíces, debe contarse dos veces, ¿cómo se le llama?

- A. Raíz repetida o raíz de multiplicidad 2
- B. Raíz extraña
- C. Raíz doble diferente
- D. Discriminante

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 128
**Subtema:** Ecuaciones cuadráticas · raíz repetida (multiplicidad 2)

Decimos que la raíz es una raíz repetida o una raíz de multiplicidad 2. Al contar las raíces, dichas raíces deben contarse dos veces.

### 29

En relación con el libro de Geometría Analítica, según el método de la raíz cuadrada, si *x*² = *d* con *d* ≥ 0, ¿a qué es igual *x*?

- A. *x* = ±√*d*
- B. *x* = √*d* únicamente
- C. *x* = ±*d*²
- D. *x* = *d*/2

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 128
**Subtema:** Ecuaciones cuadráticas · método de la raíz cuadrada

Método de raíz cuadrada: si *x*² = *d*, con *d* ≥ 0, entonces *x* = ±√*d*.

### 30

De acuerdo con el libro de Geometría Analítica, el método de completar el cuadrado se aplica a la expresión cuadrática de la forma *x*² + *Bx* + *C*; ¿qué condición debe cumplir dicha expresión?

- A. Debe tener 1 como su coeficiente principal
- B. Debe tener discriminante igual a cero
- C. Debe tener el término constante igual a cero
- D. Debe tener coeficiente principal negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 129
**Subtema:** Ecuaciones cuadráticas · completar el cuadrado (coeficiente principal 1)

Esta técnica se aplica a la expresión cuadrática de la forma *x*² + *Bx* + *C*; es decir, la expresión cuadrática debe tener 1 como su coeficiente principal.

### 31

De conformidad con el libro de Geometría Analítica, al completar el cuadrado en la ecuación *x*² + *Bx* = −*C*, ¿qué se agrega a ambos miembros?

- A. (*B*/2)²
- B. *B*/2
- C. *B*²
- D. (*C*/2)²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 129
**Subtema:** Ecuaciones cuadráticas · completar el cuadrado (término que se agrega)

Luego agregamos (*B*/2)² a ambos miembros de esta última ecuación.

---

## Sub-lote 5 · §3.3 Ecuaciones cuadráticas — fórmula cuadrática, discriminante y formas cuadráticas (pp. 130–132)

### 32

De acuerdo con el libro de Geometría Analítica, ¿cuál es la fórmula cuadrática que da las raíces de *ax*² + *bx* + *c* = 0 (con *a* ≠ 0)?

- A. *x* = (−*b* ± √(*b*² − 4*ac*))/(2*a*)
- B. *x* = (−*b* ± √(*b*² + 4*ac*))/(2*a*)
- C. *x* = (*b* ± √(*b*² − 4*ac*))/(2*a*)
- D. *x* = (−*b* ± √(*b*² − 4*ac*))/*a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 130
**Subtema:** Ecuaciones cuadráticas · fórmula cuadrática

El resultado se llama fórmula cuadrática: *x* = (−*b* ± √(*b*² − 4*ac*))/(2*a*).

### 33

De conformidad con el libro de Geometría Analítica, ¿cómo se llama la cantidad *b*² − 4*ac* de una ecuación cuadrática?

- A. Discriminante
- B. Radicando principal
- C. Coeficiente cuadrático
- D. Raíz doble

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 131
**Subtema:** Ecuaciones cuadráticas · discriminante

La cantidad *b*² − 4*ac* se llama discriminante de la ecuación cuadrática.

### 34

De acuerdo con el libro de Geometría Analítica, si el discriminante *b*² − 4*ac* > 0, ¿qué tipo de raíces tiene la ecuación cuadrática?

- A. Dos raíces reales diferentes
- B. Raíces reales pero iguales
- C. No hay raíces reales
- D. Una sola raíz de multiplicidad 3

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 131
**Subtema:** Ecuaciones cuadráticas · discriminante positivo

Si el discriminante *b*² − 4*ac* > 0, la ecuación cuadrática tiene dos raíces reales diferentes.

### 35

En relación con el libro de Geometría Analítica, si el discriminante *b*² − 4*ac* = 0, ¿qué tipo de raíces tiene la ecuación cuadrática?

- A. Raíces reales pero iguales
- B. Dos raíces reales diferentes
- C. No hay raíces reales
- D. Raíces complejas conjugadas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 131
**Subtema:** Ecuaciones cuadráticas · discriminante cero

Si el discriminante *b*² − 4*ac* = 0, la ecuación cuadrática tiene raíces reales pero iguales.

### 36

De conformidad con el libro de Geometría Analítica, si el discriminante *b*² − 4*ac* < 0, ¿qué se puede afirmar sobre las raíces de la ecuación cuadrática?

- A. No hay raíces reales
- B. Hay dos raíces reales diferentes
- C. Hay raíces reales pero iguales
- D. Hay exactamente una raíz real

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 131
**Subtema:** Ecuaciones cuadráticas · discriminante negativo

Si el discriminante *b*² − 4*ac* < 0, la ecuación cuadrática no tiene raíces reales.

### 37

De acuerdo con el libro de Geometría Analítica, ciertas ecuaciones polinomiales de grado mayor que 2 se resuelven con la fórmula cuadrática al escribirse en la forma cuadrática estándar *at*² + *bt* + *c* = 0, donde ¿qué representa el símbolo *t*?

- A. Una potencia entera positiva de *x*
- B. El discriminante de la ecuación
- C. Una raíz de la ecuación
- D. Un número negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 132
**Subtema:** Ecuaciones cuadráticas · formas cuadráticas

Esto nos exige reconocer que la ecuación puede escribirse en la forma cuadrática estándar *at*² + *bt* + *c* = 0, donde el símbolo *t* representa una potencia entera positiva de *x*.

---

## Sub-lote 6 · §3.4 Números complejos — unidad imaginaria, forma estándar e igualdad (pp. 138–139)

### 38

De acuerdo con el libro de Geometría Analítica, ¿cómo se define la unidad imaginaria *i*?

- A. Como el número que satisface *i*² = −1
- B. Como el número que satisface *i*² = 1
- C. Como el número que satisface *i* = −1
- D. Como el número que satisface *i*² = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 138
**Subtema:** Números complejos · unidad imaginaria

Para obtener los números complejos *C*, comenzamos por definir la unidad imaginaria, que se representa con la letra *i*, como el número que satisface *i*² = −1.

### 39

De conformidad con el libro de Geometría Analítica, si *c* es un número real positivo, ¿a qué es igual la raíz cuadrada principal √(−*c*)?

- A. *i*√*c*
- B. −*i*√*c*
- C. √*c*
- D. *ic*²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 138
**Subtema:** Números complejos · raíz cuadrada principal de un negativo

Si *c* es un número real positivo, la raíz cuadrada principal de −*c* se define como √(−*c*) = √((−1)*c*) = √(−1)·√*c* = *i*√*c*.

### 40

En relación con el libro de Geometría Analítica, ¿cuál es la forma estándar de un número complejo *z*?

- A. *z* = *a* + *bi*, donde *a* y *b* son números reales
- B. *z* = *ab* + *i*, donde *a* y *b* son números reales
- C. *z* = *a* + *b*, donde *a* y *b* son imaginarios
- D. *z* = *ai* + *b*, donde *i*² = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 138
**Subtema:** Números complejos · forma estándar

Un número complejo se define como cualquier expresión de la forma *z* = *a* + *bi*, donde *a* y *b* son números reales e *i*² = −1. Esta forma se llama forma estándar de un número complejo.

### 41

De acuerdo con el libro de Geometría Analítica, en el número complejo *z* = *a* + *bi*, ¿cómo se llama el número *a*?

- A. Parte real de *z*
- B. Parte imaginaria de *z*
- C. Conjugado de *z*
- D. Módulo de *z*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 139
**Subtema:** Números complejos · parte real

Los números *a* y *b* se denominan parte real y parte imaginaria de *z*, respectivamente.

### 42

De conformidad con el libro de Geometría Analítica, en el número complejo *z* = *a* + *bi*, ¿cuál es la parte imaginaria?

- A. El número real *b*
- B. El producto *bi*
- C. El número real *a*
- D. La unidad imaginaria *i*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 139
**Subtema:** Números complejos · parte imaginaria

Los números *a* y *b* se denominan parte real y parte imaginaria de *z*, respectivamente. (La parte imaginaria de *a* + *bi* no es *bi*; es el número real *b*.)

### 43

En relación con el libro de Geometría Analítica, ¿cómo se llama un número complejo de la forma 0 + *bi*?

- A. Número imaginario puro
- B. Número real
- C. Número conjugado
- D. Identidad aditiva

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 139
**Subtema:** Números complejos · número imaginario puro

Se dice que un número complejo de la forma 0 + *bi* es un número imaginario puro.

### 44

De acuerdo con el libro de Geometría Analítica, ¿qué se obtiene al escoger *b* = 0 en *z* = *a* + *bi*?

- A. Un número real
- B. Un número imaginario puro
- C. La unidad imaginaria
- D. El conjugado de *z*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 139
**Subtema:** Números complejos · los reales como subconjunto de los complejos

Note que escogiendo *b* = 0 se obtiene un número real. Así, el conjunto de los números reales *R* es un subconjunto del conjunto de los números complejos *C*.

### 45

De conformidad con el libro de Geometría Analítica, según la Definición 3.4.1, si *z*₁ = *a* + *bi* y *z*₂ = *c* + *di*, ¿cuándo son iguales *z*₁ y *z*₂?

- A. Si y sólo si *a* = *c* y *b* = *d*
- B. Si y sólo si *a* = *d* y *b* = *c*
- C. Si y sólo si *a* + *b* = *c* + *d*
- D. Si y sólo si *a* = *b* y *c* = *d*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 139
**Subtema:** Números complejos · igualdad (Definición 3.4.1)

Dos números complejos son iguales si y sólo si sus partes reales son iguales y sus partes imaginarias son iguales. Es decir, si *z*₁ = *a* + *bi* y *z*₂ = *c* + *di*, *z*₁ = *z*₂ si y sólo si *a* = *c* y *b* = *d*.

---

## Sub-lote 7 · §3.4 Números complejos — operaciones, conjugado y división (pp. 140–142)

### 46

De acuerdo con el libro de Geometría Analítica, según la Definición 3.4.2, si *z*₁ = *a* + *bi* y *z*₂ = *c* + *di*, ¿a qué es igual su suma *z*₁ + *z*₂?

- A. (*a* + *c*) + (*b* + *d*)*i*
- B. (*a* + *c*) + (*b* − *d*)*i*
- C. (*ac*) + (*bd*)*i*
- D. (*a* + *b*) + (*c* + *d*)*i*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 140
**Subtema:** Números complejos · suma (Definición 3.4.2)

Su suma está dada por *z*₁ + *z*₂ = (*a* + *c*) + (*b* + *d*)*i*.

### 47

De conformidad con el libro de Geometría Analítica, según la Definición 3.4.2, ¿a qué es igual la diferencia *z*₁ − *z*₂?

- A. (*a* − *c*) + (*b* − *d*)*i*
- B. (*a* − *c*) + (*b* + *d*)*i*
- C. (*a* − *c*) − (*b* − *d*)*i*
- D. (*c* − *a*) + (*d* − *b*)*i*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 140
**Subtema:** Números complejos · diferencia (Definición 3.4.2)

Su diferencia está dada por *z*₁ − *z*₂ = (*a* − *c*) + (*b* − *d*)*i*.

### 48

En relación con el libro de Geometría Analítica, según la Definición 3.4.2, ¿a qué es igual el producto *z*₁*z*₂?

- A. (*ac* − *bd*) + (*bc* + *ad*)*i*
- B. (*ac* + *bd*) + (*bc* − *ad*)*i*
- C. (*ac*) + (*bd*)*i*
- D. (*ac* − *bd*) + (*ad* − *bc*)*i*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 140
**Subtema:** Números complejos · producto (Definición 3.4.2)

Su producto está dado por *z*₁*z*₂ = (*ac* − *bd*) + (*bc* + *ad*)*i*.

### 49

De acuerdo con el libro de Geometría Analítica, ¿cuándo NO es verdadera la propiedad de radicales √*a*·√*b* = √(*ab*)?

- A. Cuando tanto *a* como *b* son negativos
- B. Cuando *a* y *b* son ambos positivos
- C. Cuando *a* o *b* es igual a cero
- D. Siempre es verdadera, sin excepción

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 141
**Subtema:** Números complejos · advertencia sobre la propiedad de radicales

La propiedad de radicales √*a*·√*b* = √(*ab*) no es verdadera cuando tanto *a* como *b* son negativos.

### 50

De conformidad con el libro de Geometría Analítica, en el conjunto *C* de los números complejos, ¿cuál es la identidad aditiva?

- A. 0 = 0 + 0*i*
- B. 1 = 1 + 0*i*
- C. *i* = 0 + 1*i*
- D. −1 = −1 + 0*i*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 141
**Subtema:** Números complejos · identidad aditiva

En el conjunto *C* de números complejos, la identidad aditiva es el número 0 = 0 + 0*i*.

### 51

En relación con el libro de Geometría Analítica, ¿cuál es el inverso aditivo del número complejo *z* = *a* + *bi*?

- A. −*z* = −*a* − *bi*
- B. −*z* = *a* − *bi*
- C. −*z* = −*a* + *bi*
- D. −*z* = *b* − *ai*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 141
**Subtema:** Números complejos · inverso aditivo

El número −*z* = −*a* − *bi* se llama el inverso aditivo de *z* = *a* + *bi*.

### 52

De acuerdo con el libro de Geometría Analítica, según la Definición 3.4.3, si *z* = *a* + *bi*, ¿cuál es su conjugado?

- A. *a* − *bi*
- B. −*a* + *bi*
- C. −*a* − *bi*
- D. *b* + *ai*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 141
**Subtema:** Números complejos · conjugado (Definición 3.4.3)

Si *z* = *a* + *bi* es un número complejo, entonces el número *a* − *bi* se llama conjugado de *z*; se obtiene al cambiar el signo de su parte imaginaria.

### 53

De conformidad con el libro de Geometría Analítica, ¿a qué es igual el producto de un número complejo *z* = *a* + *bi* por su conjugado?

- A. *a*² + *b*²
- B. *a*² − *b*²
- C. 2*a*
- D. *a*² + *b*²*i*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 141
**Subtema:** Números complejos · producto de un complejo por su conjugado

El producto de un número complejo por su conjugado es (*a* + *bi*)(*a* − *bi*) = *a*² − *b*²*i*² = *a*² + *b*².

### 54

En relación con el libro de Geometría Analítica, para dividir un número complejo *z*₁ por un número complejo *z*₂, ¿qué se hace?

- A. Multiplicar el numerador y el denominador de *z*₁/*z*₂ por el conjugado del denominador *z*₂
- B. Multiplicar el numerador y el denominador por el conjugado del numerador *z*₁
- C. Sumar el conjugado de *z*₂ al numerador
- D. Elevar al cuadrado el denominador *z*₂

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 141
**Subtema:** Números complejos · división

Para dividir un número complejo *z*₁ por un número complejo *z*₂, multiplique el numerador y el denominador de *z*₁/*z*₂ por el conjugado del denominador *z*₂.

### 55

De acuerdo con el libro de Geometría Analítica, según el Teorema 3.4.1 (propiedades del conjugado), ¿a qué es igual el conjugado del conjugado de *z*?

- A. *z*
- B. −*z*
- C. 2*z*
- D. *a* − *bi*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 142
**Subtema:** Números complejos · propiedades del conjugado (Teorema 3.4.1)

Teorema 3.4.1, iv): el conjugado del conjugado de *z* es igual a *z*.

### 56

De conformidad con el libro de Geometría Analítica, cuando el discriminante *b*² − 4*ac* de una ecuación cuadrática *ax*² + *bx* + *c* = 0 es negativo, ¿qué relación hay entre sus dos soluciones complejas?

- A. Son conjugados entre sí
- B. Son iguales entre sí
- C. Son inversos aditivos entre sí
- D. Son ambas números reales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 142
**Subtema:** Números complejos · soluciones complejas de la ecuación cuadrática

Los números complejos posibilitan resolver ecuaciones cuadráticas *ax*² + *bx* + *c* = 0 cuando el discriminante *b*² − 4*ac* es negativo. Las soluciones son conjugados entre sí.

---

## Sub-lote 8 · §3.5 Desigualdades lineales — terminología, Teorema 3.5.1 y desigualdad lineal (pp. 144–145)

### 57

De acuerdo con el libro de Geometría Analítica, si un número real se sustituye por la variable *x* en una desigualdad y el resultado es una proposición verdadera, ¿cómo se dice que es ese número?

- A. Una solución de la desigualdad
- B. Un extremo de la desigualdad
- C. La gráfica de la desigualdad
- D. Un intervalo de la desigualdad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 144
**Subtema:** Desigualdades lineales · solución de una desigualdad

Si el resultado es una proposición verdadera, entonces se dice que ese número es una solución de la desigualdad.

### 58

De conformidad con el libro de Geometría Analítica, ¿cómo se denomina el conjunto de todas las soluciones de una desigualdad?

- A. Conjunto solución de la desigualdad
- B. Gráfica de la desigualdad
- C. Intervalo cerrado
- D. Dominio de la desigualdad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 144
**Subtema:** Desigualdades lineales · conjunto solución

El conjunto de todas las soluciones de una desigualdad se denomina conjunto solución de la desigualdad.

### 59

En relación con el libro de Geometría Analítica, ¿cuándo dos desigualdades son equivalentes?

- A. Si tienen exactamente el mismo conjunto solución
- B. Si tienen el mismo número de términos
- C. Si apuntan en la misma dirección
- D. Si tienen los mismos extremos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 144
**Subtema:** Desigualdades lineales · desigualdades equivalentes

Se dice que dos desigualdades son equivalentes si tienen exactamente el mismo conjunto solución.

### 60

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama la representación del conjunto solución de una desigualdad en la recta numérica?

- A. La gráfica de la desigualdad
- B. El conjunto solución
- C. El intervalo abierto
- D. El extremo de la desigualdad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 144
**Subtema:** Desigualdades lineales · gráfica de la desigualdad

La representación del conjunto solución en la recta numérica es la gráfica de la desigualdad.

### 61

De conformidad con el libro de Geometría Analítica, según el inciso i) del Teorema 3.5.1, la desigualdad *a* < *b* es equivalente a:

- A. *a* + *c* < *b* + *c*
- B. *a* + *c* > *b* + *c*
- C. *a* − *c* > *b* − *c*
- D. *a* · *c* < *b* · *c*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 145
**Subtema:** Desigualdades lineales · Teorema 3.5.1 (suma)

Teorema 3.5.1: la desigualdad *a* < *b* es equivalente a i) *a* + *c* < *b* + *c*.

### 62

En relación con el libro de Geometría Analítica, según el inciso ii) del Teorema 3.5.1, si *c* > 0, la desigualdad *a* < *b* es equivalente a:

- A. *a* · *c* < *b* · *c*
- B. *a* · *c* > *b* · *c*
- C. *a* + *c* < *b* + *c*
- D. *a*/*c* > *b*/*c*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 145
**Subtema:** Desigualdades lineales · Teorema 3.5.1 (multiplicación por c > 0)

Teorema 3.5.1: ii) *a* · *c* < *b* · *c*, para *c* > 0.

### 63

De acuerdo con el libro de Geometría Analítica, según el Teorema 3.5.1, si una desigualdad se multiplica por un número negativo, ¿qué ocurre con la dirección de la desigualdad?

- A. Se invierte
- B. Se conserva igual
- C. Se convierte en una igualdad
- D. Desaparece

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 145
**Subtema:** Desigualdades lineales · multiplicación por un número negativo

Si una desigualdad se multiplica por un número negativo, la dirección de la desigualdad se invierte (Teorema 3.5.1, iii: *a* · *c* > *b* · *c*, para *c* < 0).

### 64

De conformidad con el libro de Geometría Analítica, ¿cómo se llama cualquier desigualdad que pueda escribirse de la forma *ax* + *b* < 0 (o *ax* + *b* ≥ 0), donde *a* y *b* son números reales?

- A. Desigualdad lineal en la variable *x*
- B. Desigualdad cuadrática
- C. Desigualdad simultánea
- D. Intervalo cerrado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 145
**Subtema:** Desigualdades lineales · definición de desigualdad lineal

Cualquier desigualdad que pueda escribirse de una de las formas *ax* + *b* < 0 o *ax* + *b* ≥ 0, donde *a* y *b* son números reales, se llama desigualdad lineal en la variable *x*.

---

## Sub-lote 9 · §3.5 Desigualdades lineales — notación de intervalos y desigualdad simultánea (pp. 146–147)

### 65

De acuerdo con el libro de Geometría Analítica, ¿qué se puede afirmar sobre los símbolos de infinito −∞ e ∞?

- A. No representan números reales y nunca deben manipularse aritméticamente como si fueran un número
- B. Representan el mayor y el menor de los números reales
- C. Pueden sumarse y multiplicarse como cualquier número real
- D. Ambos son iguales a cero

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 147
**Subtema:** Desigualdades lineales · símbolos de infinito

Los símbolos de infinito −∞ ("menos infinito") e ∞ ("infinito") no representan números reales y nunca deben manipularse aritméticamente como si fueran un número.

### 66

De conformidad con el libro de Geometría Analítica, ¿a qué conjunto corresponde el intervalo abierto (*a*, *b*)?

- A. {*x* | *a* < *x* < *b*}
- B. {*x* | *a* ≤ *x* ≤ *b*}
- C. {*x* | *a* < *x* ≤ *b*}
- D. {*x* | *a* ≤ *x* < *b*}

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 146
**Subtema:** Desigualdades lineales · intervalo abierto

El intervalo abierto se define como el conjunto (*a*, *b*) = {*x* | *a* < *x* < *b*}.

### 67

En relación con el libro de Geometría Analítica, ¿a qué conjunto corresponde el intervalo cerrado [*a*, *b*]?

- A. {*x* | *a* ≤ *x* ≤ *b*}
- B. {*x* | *a* < *x* < *b*}
- C. {*x* | *a* < *x* ≤ *b*}
- D. {*x* | *a* ≤ *x* < *b*}

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 147
**Subtema:** Desigualdades lineales · intervalo cerrado

El intervalo cerrado se define como el conjunto [*a*, *b*] = {*x* | *a* ≤ *x* ≤ *b*}; incluye los dos extremos.

### 68

De acuerdo con el libro de Geometría Analítica, en la notación de intervalos, ¿cómo se denominan los números *a* y *b*?

- A. Extremos del intervalo
- B. Coeficientes del intervalo
- C. Raíces del intervalo
- D. Gráficas del intervalo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 147
**Subtema:** Desigualdades lineales · extremos del intervalo

En cada una de las primeras cuatro entradas de la tabla, los números *a* y *b* se denominan extremos del intervalo.

### 69

De conformidad con el libro de Geometría Analítica, al usar la notación de intervalos, ¿dónde no pueden aparecer jamás los símbolos −∞ e ∞?

- A. Al lado de un corchete cuadrado
- B. Al lado de un paréntesis
- C. Dentro del conjunto solución
- D. Sobre la recta numérica

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 147
**Subtema:** Desigualdades lineales · uso de los símbolos de infinito

Cuando utilice notación de intervalos, los símbolos −∞ e ∞ no pueden aparecer jamás al lado de un corchete cuadrado; es decir, la expresión (2, ∞] no tiene sentido.

### 70

En relación con el libro de Geometría Analítica, ¿qué representa por lo general la notación de intervalo (−∞, ∞)?

- A. El conjunto *R* de los números reales (toda la recta real)
- B. El conjunto vacío
- C. Sólo los números reales positivos
- D. Un intervalo cerrado y acotado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 147
**Subtema:** Desigualdades lineales · la recta real como intervalo no acotado

La notación de intervalo (−∞, ∞) se usa por lo general para representar el conjunto *R* de los números reales.

### 71

De acuerdo con el libro de Geometría Analítica, ¿cómo se denomina en ocasiones una desigualdad de la forma *a* < *x* < *b*?

- A. Desigualdad simultánea
- B. Desigualdad lineal
- C. Desigualdad cuadrática
- D. Intervalo cerrado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 147
**Subtema:** Desigualdades lineales · desigualdad simultánea

Una desigualdad de la forma *a* < *x* < *b* se denomina en ocasiones desigualdad simultánea porque el número *x* está entre los números *a* y *b*.

---

## Sub-lote 10 · §3.6 Ecuaciones y desigualdades con valor absoluto — definición y teoremas (pp. 150–152)

### 72

De acuerdo con el libro de Geometría Analítica, ¿cómo se define el valor absoluto de un número real *x*?

- A. |*x*| = −*x* si *x* < 0, y |*x*| = *x* si *x* ≥ 0
- B. |*x*| = *x* si *x* < 0, y |*x*| = −*x* si *x* ≥ 0
- C. |*x*| = *x* para todo *x*
- D. |*x*| = −*x* para todo *x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 150
**Subtema:** Valor absoluto · definición

El valor absoluto de un número real *x* es una cantidad no negativa definida como |*x*| = −*x* cuando *x* < 0, y |*x*| = *x* cuando *x* ≥ 0.

### 73

De conformidad con el libro de Geometría Analítica, ¿qué tipo de cantidad es el valor absoluto de un número real?

- A. Una cantidad no negativa
- B. Una cantidad siempre negativa
- C. Una cantidad siempre positiva
- D. Una cantidad imaginaria

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 150
**Subtema:** Valor absoluto · cantidad no negativa

El valor absoluto de un número real *x* es una cantidad no negativa.

### 74

En relación con el libro de Geometría Analítica, según el Teorema 3.6.1, si *a* denota un número real positivo, ¿cuándo se cumple |*x*| = *a*?

- A. Si y sólo si *x* = −*a* o *x* = *a*
- B. Si y sólo si *x* = *a*
- C. Si y sólo si −*a* < *x* < *a*
- D. Si y sólo si *x* < −*a* o *x* > *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 151
**Subtema:** Valor absoluto · ecuación de valor absoluto (Teorema 3.6.1)

Teorema 3.6.1: si *a* denota un número real positivo, entonces |*x*| = *a* si y sólo si *x* = −*a* o *x* = *a*.

### 75

De acuerdo con el libro de Geometría Analítica, ¿qué significa la desigualdad |*x*| < *a* (con *a* > 0)?

- A. Que la distancia desde *x* hasta el origen es menor que *a*
- B. Que la distancia desde *x* hasta el origen es mayor que *a*
- C. Que *x* es igual a *a*
- D. Que *x* es un número negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 151
**Subtema:** Valor absoluto · interpretación de |x| < a

La desigualdad |*x*| < *a* (con *a* > 0) significa que la distancia desde *x* hasta el origen es menor que *a*.

### 76

De conformidad con el libro de Geometría Analítica, ¿qué significa la desigualdad |*x*| > *a*?

- A. Que la distancia desde *x* hasta el origen es mayor que *a*
- B. Que la distancia desde *x* hasta el origen es menor que *a*
- C. Que *x* es igual a *a*
- D. Que *x* está entre −*a* y *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 151
**Subtema:** Valor absoluto · interpretación de |x| > a

La desigualdad |*x*| > *a* significa que la distancia desde *x* hasta el origen es mayor que *a*.

### 77

En relación con el libro de Geometría Analítica, según el inciso i) del Teorema 3.6.2, ¿a qué equivale |*x*| < *a*?

- A. −*a* < *x* < *a*
- B. *x* < −*a* o *x* > *a*
- C. *x* = −*a* o *x* = *a*
- D. *x* > *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 151
**Subtema:** Valor absoluto · desigualdad |x| < a (Teorema 3.6.2)

Teorema 3.6.2: i) |*x*| < *a* si y sólo si −*a* < *x* < *a*.

### 78

De acuerdo con el libro de Geometría Analítica, según el inciso ii) del Teorema 3.6.2, ¿a qué equivale |*x*| > *a*?

- A. *x* < −*a* o *x* > *a*
- B. −*a* < *x* < *a*
- C. *x* = −*a* o *x* = *a*
- D. −*a* ≤ *x* ≤ *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 151
**Subtema:** Valor absoluto · desigualdad |x| > a (Teorema 3.6.2)

Teorema 3.6.2: ii) |*x*| > *a* si y sólo si *x* < −*a* o *x* > *a*.

### 79

De conformidad con el libro de Geometría Analítica, cuando el conjunto solución consta de dos intervalos disjuntos (que no se intersecan), ¿cómo se escribe?

- A. Como la unión de los dos intervalos
- B. Como la intersección de los dos intervalos
- C. Como un solo intervalo cerrado
- D. Como el conjunto vacío

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 152
**Subtema:** Valor absoluto · unión de intervalos disjuntos

Como el conjunto solución consta de dos intervalos disjuntos, es decir, que no se intersecan, no se puede expresar como un solo intervalo; lo mejor que podemos hacer es escribir el conjunto solución como la unión de los dos intervalos.

### 80

En relación con el libro de Geometría Analítica, ¿qué representa la expresión |*x* − *b*|?

- A. La distancia entre *x* y *b*
- B. La suma de *x* y *b*
- C. El producto de *x* y *b*
- D. El punto medio entre *x* y *b*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 152
**Subtema:** Valor absoluto · |x − b| como distancia

|*x* − *b*| es la distancia entre *x* y *b*.

---

## Sub-lote 11 · §3.7 Desigualdades polinomiales y racionales — definiciones, signos y método (pp. 155, 158)

### 81

De acuerdo con el libro de Geometría Analítica, si *P*(*x*) representa un polinomio, ¿cómo se llaman las desigualdades que pueden escribirse en las formas *P*(*x*) > 0, *P*(*x*) < 0, *P*(*x*) ≥ 0 o *P*(*x*) ≤ 0?

- A. Desigualdades polinomiales
- B. Desigualdades racionales
- C. Desigualdades lineales
- D. Desigualdades simultáneas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · desigualdad polinomial

Si *P*(*x*) representa un polinomio de grado arbitrario, las desigualdades que pueden escribirse en las formas *P*(*x*) > 0, *P*(*x*) < 0, *P*(*x*) ≥ 0 y *P*(*x*) ≤ 0 se llaman desigualdades polinomiales.

### 82

De conformidad con el libro de Geometría Analítica, ¿cómo se llaman las desigualdades que incluyen el cociente de dos polinomios *P*(*x*) y *Q*(*x*)?

- A. Desigualdades racionales
- B. Desigualdades polinomiales
- C. Desigualdades de valor absoluto
- D. Desigualdades lineales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · desigualdad racional

Las desigualdades que incluyen el cociente de dos polinomios *P*(*x*) y *Q*(*x*) se llaman desigualdades racionales.

### 83

En relación con el libro de Geometría Analítica, respecto a las desigualdades racionales, ¿qué se supone sobre los polinomios *P*(*x*) y *Q*(*x*)?

- A. Que no tienen factores comunes
- B. Que tienen el mismo grado
- C. Que *Q*(*x*) es siempre positivo
- D. Que *P*(*x*) es un polinomio lineal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · supuesto sin factores comunes

En lo que respecta a las desigualdades racionales, supondremos que los polinomios *P*(*x*) y *Q*(*x*) no tienen factores comunes.

### 84

De acuerdo con el libro de Geometría Analítica, ¿cuándo el producto de dos números reales es positivo?

- A. Si y sólo si los números tienen signos iguales
- B. Si y sólo si los números tienen signos opuestos
- C. Si y sólo si uno de los números es cero
- D. Siempre, sin importar los signos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · signo de un producto (positivo)

El producto de dos números reales es positivo si y sólo si los números tienen signos iguales.

### 85

De conformidad con el libro de Geometría Analítica, ¿cuándo el producto de dos números reales es negativo?

- A. Si y sólo si los números tienen signos opuestos
- B. Si y sólo si los números tienen signos iguales
- C. Si y sólo si ambos son negativos
- D. Nunca es negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · signo de un producto (negativo)

El producto de dos números reales es negativo si y sólo si los números tienen signos opuestos.

### 86

En relación con el libro de Geometría Analítica, ¿cómo se denomina un número *c* con el que *P*(*c*) = 0?

- A. Cero del polinomio
- B. Signo del polinomio
- C. Extremo del polinomio
- D. Coeficiente del polinomio

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · cero del polinomio

Un número *c* con el que *P*(*c*) = 0 se denomina cero del polinomio.

### 87

De acuerdo con el libro de Geometría Analítica, ¿en qué números puede cambiar de signo un polinomio *P*(*x*)?

- A. Sólo en un número *c* con el cual *P*(*c*) = 0
- B. En cualquier número real
- C. Sólo en los números negativos
- D. Sólo en el número cero

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 155
**Subtema:** Desigualdades polinomiales y racionales · cambio de signo de un polinomio

Un polinomio *P*(*x*) puede cambiar de signo sólo en un número *c* con el cual *P*(*c*) = 0.

### 88

De conformidad con el libro de Geometría Analítica, al resolver una desigualdad racional, ¿qué es algo que NO se debe hacer?

- A. Multiplicar la desigualdad por el denominador para despejarlo
- B. Colocar todos los términos de un lado y el 0 del otro
- C. Factorizar el numerador y el denominador
- D. Marcar los ceros reales en la recta numérica

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 158
**Subtema:** Desigualdades polinomiales y racionales · advertencia sobre el denominador

Algo que no se debe hacer es multiplicar la desigualdad por el denominador para despejarlo.

### 89

De acuerdo con el libro de Geometría Analítica (Notas del aula), ¿cómo se denominan las desigualdades que llevan los símbolos < o >?

- A. Desigualdades estrictas
- B. Desigualdades no estrictas
- C. Desigualdades simultáneas
- D. Desigualdades racionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 158
**Subtema:** Desigualdades polinomiales y racionales · desigualdades estrictas y no estrictas

Las desigualdades que llevan los símbolos < o > se denominan a veces desigualdades estrictas, en tanto que las que usan ≤ o ≥ se llaman no estrictas.
