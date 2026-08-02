# Geometría Analítica · Capítulo 3 · Ecuaciones y desigualdades

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 3 → EN CURSO**

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

**Pendiente:** las secciones **§3.5 a §3.7**. Con ellas, el capítulo 3 quedará cerrado para la EMMA.

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
