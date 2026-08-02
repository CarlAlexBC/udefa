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

**Pendiente de §3.1:** p. 114 (las **soluciones extrañas**) y lo que reste de la sección. Luego **§3.2
a §3.7**. Con ellas, el capítulo 3 quedará cerrado para la EMMA.

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
