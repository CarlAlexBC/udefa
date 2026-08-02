# Geometría Analítica · Capítulo 2 · Conceptos fundamentales del álgebra

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 2 → EN CURSO**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Este Zill 3.ª ed. lo comparten **varios planteles**
> (EMA, EMEFA, EMMA, EMMG, EMI), cada uno pidiendo capítulos distintos. El
> **capítulo 2** lo pide la **EMMA** (Escuela Militar de Mantenimiento y
> Abastecimiento), dentro de su materia *Álgebra* (`ÁLGE-01-2026`), **Completo**.
> Las líneas `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con
> que el temario los manda a llamar.

## Libro

Zill, Dennis G.; Dewar, Jacqueline M. *Álgebra, Trigonometría y Geometría Analítica*.
**McGraw-Hill/Interamericana Editores**, **tercera edición, 2012**. ISBN 978-607-15-0714-3.
**Edición verificada** en el archivo del capítulo 4 (`zill-04-coordenadas-rectangulares.md`).
El escaneo de la EMMA es **byte-idéntico** al de la EMI con el que se trabajaron los
capítulos 4, 8, 9 y 12 (mismo archivo, 15 537 197 bytes), así que es la misma edición
verificada. El temario de la **EMMA** (`temarios.json`, código `ÁLGE-01-2026`) nombra por
título los capítulos **2 *Conceptos fundamentales de álgebra*** (Completo), 3 *Ecuaciones y
desigualdades* (Completo) y 4 *Sistema de coordenadas rectangulares y gráficas* (§4.1–§4.4);
su materia *Trigonometría y Geometría Analítica* (`TGA-02-2026`) pide además los capítulos
8, 9, 10 y 11.

**Desfase de páginas (esta copia):** para el **capítulo 2** la hoja del PDF va **17 adelante**
de la página impresa (portadilla del cap. 2, p. 47 = hoja 64; p. 48 = hoja 65; p. 49 =
hoja 66). **Se leyó de la hoja, no se calculó.** OJO: el desfase NO es constante en este
libro (por las páginas romanas del inicio); se releerá de la hoja al avanzar por el capítulo.

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (mismo problema documentado en el archivo
del capítulo 4): las fuentes subconjuntadas convierten los dígitos y símbolos al copiar el
texto. Por eso, para este libro se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, idioma español, `ocr.py`) sobre la
  hoja renderizada, y **corroborado contra la imagen** (`render.py`).
- **Fórmulas y símbolos** (∈, ⊂, ∪, ∩, ∅, fracciones, raíces, exponentes): se **leen de la
  hoja renderizada a imagen** y se transcriben a mano — el OCR los mutila.

Toda cita de este archivo se corroboró por imagen; **ninguna se tomó de la extracción de
texto directa.**

## Alcance

El **capítulo 2** completo (pp. 47–107) tiene ocho secciones; la EMMA lo pide **Completo**:

- **Portadilla · Un poco de historia** (p. 47) ← reseña histórica, dato de recuerdo.
- **§2.1 El sistema de los números reales** (pp. 48–57).
- **§2.2 La recta de los números reales** (pp. 58–63).
- **§2.3 Exponentes enteros** (pp. 64–70).
- **§2.4 Radicales** (pp. 71–77).
- **§2.5 Exponentes racionales** (pp. 78–82).
- **§2.6 Polinomios y productos notables** (pp. 83–91).
- **§2.7 Factorización de polinomios** (pp. 92–97).
- **§2.8 Expresiones racionales** (pp. 98–106).

Los *Ejercicios de repaso* (p. 107 en adelante) quedan fuera por la norma de teoría sobre
práctica.

## Cobertura actual

**Sub-lote 1 (pp. 47–49, reactivos 1–26):** la portadilla histórica (François Viète y la
notación algebraica) y la primera parte de **§2.1**: la terminología de conjuntos (conjunto,
elemento, pertenencia `∈`, notación por extensión y por comprensión, subconjunto `⊂`, conjunto
vacío `∅`, unión, intersección, conjuntos disjuntos) y los conjuntos numéricos (naturales `N`,
enteros `Z`, elipsis, racionales `Q`, cociente indefinido, irracionales, reales `R = Q ∪ H`,
reales no negativos).

**Sub-lote 2 (pp. 50–53, reactivos 27–56):** el resto de la teoría de **§2.1** hasta la p. 53:
los decimales (finitos, periódicos o recurrentes, la barra, racional ↔ decimal periódico/finito,
irracionales = decimales no finitos ni periódicos), el porcentaje (`b%` = "b partes de 100", la
conversión decimal→porcentaje, el símbolo ≈), el sistema de los números reales y sus **propiedades
básicas 1–6** (cerradura, conmutativa, asociativa, identidad, inverso, distributiva; identidad
aditiva/multiplicativa, inverso aditivo/negativo, inverso multiplicativo/recíproco), la **Definición
2.1.1** (diferencia y cociente), la terminología de la fracción (numerador, denominador, `a/0`
indefinido), que la sustracción no es asociativa, y las **propiedades adicionales 8–10** (multiplicación
por cero, cancelación, sustracción y negativos).

**Pendiente:** el cierre de **§2.1** (pp. 54–55: propiedades adicionales 11–16 de las fracciones;
las pp. 56–57 son *Ejercicios* y quedan fuera) y las secciones **§2.2 a §2.8**. Con ellas, el
capítulo 2 quedará cerrado para la EMMA.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico, no práctico. Se privilegian
las definiciones, teoremas y reglas sobre los procedimientos de cálculo. Los ejemplos numéricos
y los bloques de ejercicios no se convierten en reactivos de procedimiento; las definiciones,
teoremas y fórmulas sí.

## Avisos al aspirante (erratas del libro)

_Ninguno detectado por ahora en este capítulo._

---

## Sub-lote 1 · Portadilla + §2.1 El sistema de los números reales: conjuntos y números (pp. 47–49)

### 1

De acuerdo con el libro de Geometría Analítica, ¿cuánto tiempo tiene gran parte de la notación algebraica que se usa en los textos de álgebra?

- A. Menos de 400 años
- B. Más de mil años
- C. Alrededor de 2000 años
- D. Menos de 100 años

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 47
**Subtema:** Conceptos fundamentales del álgebra · un poco de historia

La mayoría de los estudiantes no se dan cuenta de que gran parte de la notación algebraica que se usa en los textos de álgebra tiene menos de 400 años.

### 2

De conformidad con el libro de Geometría Analítica, ¿quién fue el más grande matemático francés del siglo XVI?

- A. François Viète (1540-1603)
- B. René Descartes (1596-1650)
- C. Pierre de Fermat (1601-1665)
- D. Blaise Pascal (1623-1662)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 47
**Subtema:** Conceptos fundamentales del álgebra · un poco de historia

El más grande matemático francés del siglo XVI fue François Viète (1540-1603), abogado y miembro del Parlamento, quien dedicó la mayor parte de su tiempo libre a las matemáticas.

### 3

En relación con el libro de Geometría Analítica, ¿cuál es la obra más famosa de Viète, que hizo avanzar en forma significativa la notación algebraica?

- A. *In Artem*
- B. *La Géométrie*
- C. *Ars Magna*
- D. *Los Elementos*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 47
**Subtema:** Conceptos fundamentales del álgebra · un poco de historia

La obra más famosa de Viète, *In Artem*, hizo avanzar en forma significativa la notación algebraica.

### 4

De acuerdo con el libro de Geometría Analítica, ¿cómo calificó Viète la misma letra para representar las potencias?

- A. *x*, *x quadratum* (cuadrado), *x cubum* (cubo)
- B. *x*, *x duplum*, *x triplum*
- C. *x*, *x maior*, *x minor*
- D. *x*, *x primum*, *x secundum*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 47
**Subtema:** Conceptos fundamentales del álgebra · un poco de historia

Viète, que sabía escribir en latín, utilizó la misma letra calificada en forma apropiada para estas potencias: *x*, *x quadratum* (cuadrado), *x cubum* (cubo), etcétera.

### 5

De conformidad con el libro de Geometría Analítica, ¿qué es un conjunto?

- A. Una colección de objetos distintos
- B. Una sucesión ordenada de números
- C. Una operación entre dos cantidades
- D. Una propiedad común a varios elementos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Un conjunto es una colección de objetos distintos. Cada objeto de un conjunto se llama elemento.

### 6

En relación con el libro de Geometría Analítica, ¿cómo se llama cada objeto de un conjunto?

- A. Elemento
- B. Subconjunto
- C. Cociente
- D. Cardinal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Un conjunto es una colección de objetos distintos. Cada objeto de un conjunto se llama elemento.

### 7

De acuerdo con el libro de Geometría Analítica, para indicar que *x* es elemento del conjunto *A*, ¿cómo se escribe?

- A. *x* ∈ *A*
- B. *x* ⊂ *A*
- C. *x* ∪ *A*
- D. *x* ∩ *A*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Para indicar que *x* es elemento del conjunto *A* escribimos *x* ∈ *A*.

### 8

De conformidad con el libro de Geometría Analítica, ¿de qué dos formas puede especificarse un conjunto?

- A. Se enumeran los elementos del conjunto o se expresa una propiedad que los determina
- B. Se suman sus elementos o se multiplican entre sí
- C. Se ordenan de menor a mayor o de mayor a menor
- D. Se agrupan en pares o en ternas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Un conjunto puede especificarse de dos formas: se enumeran los elementos del conjunto o se expresa una propiedad que los determina. En cada caso se usan llaves { }.

### 9

En relación con el libro de Geometría Analítica, cuando los elementos del conjunto se enumeran, ¿cómo se conoce esa notación?

- A. Notación por extensión
- B. Notación por comprensión
- C. Notación por elipsis
- D. Notación por intersección

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

La primera notación, donde los elementos del conjunto se enumeran, se conoce como notación por extensión. La segunda notación se llama notación por comprensión.

### 10

De acuerdo con el libro de Geometría Analítica, cuando el conjunto se expresa mediante una propiedad que determina sus elementos, ¿cómo se llama esa notación?

- A. Notación por comprensión
- B. Notación por extensión
- C. Notación por unión
- D. Notación por cardinalidad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

La segunda notación se llama notación por comprensión y, en este caso, se lee: "el conjunto de todos los números *x* tal que *x* = 5*n*, donde *n* = 1, 2, 3".

### 11

De conformidad con el libro de Geometría Analítica, si cada elemento del conjunto *B* también es elemento del conjunto *A*, ¿qué se dice de *B*?

- A. Que *B* es un subconjunto de *A* y se escribe *B* ⊂ *A*
- B. Que *B* es la unión de *A* y se escribe *B* ∪ *A*
- C. Que *B* es disjunto de *A* y se escribe *B* ∩ *A* = ∅
- D. Que *B* es un elemento de *A* y se escribe *B* ∈ *A*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Si cada elemento del conjunto *B* también es elemento del conjunto *A*, decimos que *B* es un subconjunto de *A* y escribimos: *B* ⊂ *A*.

### 12

En relación con el libro de Geometría Analítica, ¿de qué es subconjunto cada conjunto?

- A. De sí mismo
- B. Del conjunto vacío
- C. Del conjunto de los números reales
- D. De su intersección

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Se desprende que cada conjunto es un subconjunto de sí mismo.

### 13

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama el conjunto que no contiene elementos y con qué símbolo se denota?

- A. Conjunto vacío, denotado con el símbolo ∅
- B. Conjunto unitario, denotado con el símbolo 1
- C. Conjunto universal, denotado con el símbolo *U*
- D. Conjunto nulo, denotado con el símbolo 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Se dice que un conjunto que no contiene elementos es un conjunto vacío y se denota con el símbolo ∅.

### 14

De conformidad con el libro de Geometría Analítica, ¿qué es la unión de dos conjuntos *A* y *B*?

- A. El conjunto de elementos que pertenecen por lo menos a uno de los conjuntos, *A* o *B*
- B. El conjunto de elementos comunes a ambos conjuntos *A* y *B*
- C. El conjunto de elementos que no están en ninguno de los dos
- D. El conjunto de elementos que están en *A* pero no en *B*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

La unión de dos conjuntos *A* y *B* es el conjunto de elementos que pertenecen por lo menos a uno de los conjuntos, *A* o *B*. En notación de conjuntos, escribimos *A* ∪ *B* = {*x* | *x* ∈ *A* o *x* ∈ *B*}.

### 15

En relación con el libro de Geometría Analítica, ¿qué es la intersección de dos conjuntos *A* y *B*?

- A. El conjunto de elementos comunes a ambos conjuntos *A* y *B*
- B. El conjunto de elementos que pertenecen por lo menos a uno de los conjuntos
- C. El conjunto de todos los elementos de *A* y de *B* juntos
- D. El conjunto de elementos que no pertenecen a *A* ni a *B*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

La intersección de dos conjuntos *A* y *B* es el conjunto de elementos comunes a ambos conjuntos *A* y *B* y se escribe: *A* ∩ *B* = {*x* | *x* ∈ *A* y *x* ∈ *B*}.

### 16

De acuerdo con el libro de Geometría Analítica, si *A* y *B* no tienen elementos comunes, es decir, si *A* ∩ *B* = ∅, ¿cómo se dice que son los conjuntos?

- A. Disjuntos o ajenos
- B. Iguales o idénticos
- C. Complementarios
- D. Subconjuntos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · terminología de conjuntos

Si *A* y *B* no tienen elementos comunes, es decir, si *A* ∩ *B* = ∅, se dice que los conjuntos son disjuntos o ajenos.

### 17

De conformidad con el libro de Geometría Analítica, ¿de qué consta el conjunto de los números naturales o enteros positivos?

- A. *N* = {1, 2, 3, 4,…}
- B. *N* = {0, 1, 2, 3,…}
- C. *N* = {…, −2, −1, 0, 1, 2,…}
- D. *N* = {2, 4, 6, 8,…}

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 48
**Subtema:** El sistema de los números reales · números naturales

El conjunto de los números naturales o enteros positivos consta de *N* = {1, 2, 3, 4,…}.

### 18

En relación con el libro de Geometría Analítica, ¿cómo se define el conjunto de los enteros *Z*?

- A. *Z* = {…, −3, −2, −1, 0, 1, 2, 3,…}
- B. *Z* = {1, 2, 3, 4,…}
- C. *Z* = {0, 1, 2, 3, 4,…}
- D. *Z* = {…, −3, −2, −1, 1, 2, 3,…}

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · enteros

El conjunto *N* es un subconjunto del conjunto de los enteros: *Z* = {…, −3, −2, −1, 0, 1, 2, 3,…}.

### 19

De acuerdo con el libro de Geometría Analítica, los tres puntos (…) que aparecen en los conjuntos *N* y *Z*, ¿cómo se llaman y qué indican?

- A. Se llaman elipsis e indican que los elementos siguen indefinidamente el mismo patrón que el que siguen los elementos dados
- B. Se llaman puntos suspensivos e indican que faltan datos
- C. Se llaman elipsis e indican el fin del conjunto
- D. Se llaman comas e indican una pausa entre elementos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · enteros

Los tres puntos (…) que aparecen en los conjuntos *N* y *Z* se llaman elipsis e indican que los elementos siguen indefinidamente el mismo patrón que el que siguen los elementos dados.

### 20

De conformidad con el libro de Geometría Analítica, respecto al número cero, ¿qué señala el texto?

- A. No es negativo ni positivo
- B. Es el menor de los enteros positivos
- C. Es un número irracional
- D. Es el mayor de los enteros negativos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · enteros

El conjunto *Z* incluye tanto los enteros positivos como los negativos y el número cero, el cual no es negativo ni positivo.

### 21

En relación con el libro de Geometría Analítica, ¿cómo se define el conjunto de los números racionales *Q*?

- A. *Q* = {*p*/*q* | *p* y *q* son números enteros, *q* ≠ 0}
- B. *Q* = {*p*/*q* | *p* y *q* son números enteros, *p* ≠ 0}
- C. *Q* = {*p*/*q* | *p* y *q* son números naturales}
- D. *Q* = {*p* · *q* | *p* y *q* son números enteros}

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · racionales

A su vez, el conjunto de enteros *Z* es un subconjunto del conjunto de los números racionales: *Q* = {*p*/*q* | *p* y *q* son números enteros, *q* ≠ 0}.

### 22

De acuerdo con el libro de Geometría Analítica, ¿por qué números está compuesto el conjunto *Q*?

- A. Por todos los números que son cocientes de dos enteros, siempre que el denominador sea diferente de cero
- B. Por todos los números enteros positivos y negativos
- C. Por todos los números que no pueden expresarse como cociente de dos enteros
- D. Por todos los productos de dos números naturales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · racionales

El conjunto *Q* está compuesto por todos los números que son cocientes de dos enteros, siempre que el denominador sea diferente de cero.

### 23

De conformidad con el libro de Geometría Analítica, ¿cuándo se dice que el cociente *p*/*q* es indefinido?

- A. Si *q* = 0; por ejemplo, 8/0 y 0/0 son indefinidos
- B. Si *p* = 0; por ejemplo, 0/8 es indefinido
- C. Si *p* y *q* son ambos negativos
- D. Si *p* = *q*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · racionales

Se dice que el cociente *p*/*q* es indefinido si *q* = 0. Por ejemplo, 8/0 y 0/0 son indefinidos.

### 24

En relación con el libro de Geometría Analítica, ¿qué es el conjunto de los números irracionales?

- A. El conjunto de números que no pueden expresarse como cociente de dos enteros
- B. El conjunto de números que son cociente de dos enteros
- C. El conjunto de los enteros negativos
- D. El conjunto de los números naturales mayores que cero

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · irracionales

√2 no es un número racional. Pertenece al conjunto de los números irracionales, es decir, el conjunto de números que no pueden expresarse como cociente de dos enteros.

### 25

De acuerdo con el libro de Geometría Analítica, si *H* simboliza el conjunto de los números irracionales, ¿cómo puede describirse el conjunto de los números reales *R*?

- A. Como la unión de dos conjuntos disjuntos: *R* = *Q* ∪ *H*
- B. Como la intersección de dos conjuntos: *R* = *Q* ∩ *H*
- C. Como el conjunto de los números racionales: *R* = *Q*
- D. Como el conjunto de los enteros: *R* = *Z*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · reales

Si simbolizamos con *H* el conjunto de los números irracionales, entonces el conjunto de los números reales *R* puede describirse como la unión de dos conjuntos disjuntos: *R* = *Q* ∪ *H*.

### 26

De conformidad con el libro de Geometría Analítica, ¿cómo se llaman los elementos del conjunto {0} ∪ *R*⁺?

- A. Números reales no negativos
- B. Números reales positivos
- C. Números irracionales
- D. Números enteros

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 49
**Subtema:** El sistema de los números reales · reales

El conjunto de números reales *R* puede describirse como la unión de tres conjuntos disjuntos: *R* = *R*⁻ ∪ {0} ∪ *R*⁺, donde *R*⁻ es el conjunto de los números reales negativos y *R*⁺ el de los números reales positivos. Los elementos del conjunto {0} ∪ *R*⁺ se llaman números reales no negativos.

---

## Sub-lote 2 · §2.1 El sistema de los números reales: decimales, porcentaje y propiedades (pp. 50–53)

### 27

De acuerdo con el libro de Geometría Analítica, ¿de qué forma puede expresarse todo número real?

- A. En forma decimal
- B. Sólo como cociente de dos enteros
- C. Únicamente como número natural
- D. Sólo en forma de porcentaje

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · decimales

Todo número real puede expresarse en forma decimal.

### 28

De conformidad con el libro de Geometría Analítica, ¿cómo se dice que son números como 0.25 y 1.6?

- A. Decimales finitos
- B. Decimales periódicos
- C. Decimales recurrentes
- D. Números irracionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · decimales

Se dice que números como 0.25 y 1.6 son decimales finitos.

### 29

En relación con el libro de Geometría Analítica, ¿cómo se llaman números como 1.323232… y 3.571428571428…?

- A. Decimales periódicos o recurrentes
- B. Decimales finitos
- C. Números enteros
- D. Números naturales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · decimales

Números como 1.323232… y 3.571428571428… se llaman decimales periódicos o recurrentes.

### 30

De acuerdo con el libro de Geometría Analítica, en un decimal periódico, ¿qué indica la barra?

- A. El número o números que se repiten
- B. El final del decimal
- C. Que el número es irracional
- D. Que debe redondearse la cifra

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · decimales

Un decimal periódico como 1.323232… con frecuencia se escribe 1.32, donde la barra indica el número o números que se repiten.

### 31

De conformidad con el libro de Geometría Analítica, ¿qué tipo de representación decimal posee cada número racional?

- A. Una representación decimal periódica o finita
- B. Una representación decimal no periódica y no finita
- C. Siempre una representación finita
- D. Siempre una representación periódica

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · decimales

Puede demostrarse que cada número racional posee una representación decimal periódica o finita. Y viceversa, todo decimal periódico o finito es un número racional.

### 32

En relación con el libro de Geometría Analítica, ¿de qué se compone el conjunto de los números irracionales?

- A. De todos los decimales que no son finitos ni periódicos
- B. De todos los decimales finitos
- C. De todos los cocientes de dos enteros
- D. De todos los decimales periódicos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · decimales

El conjunto de los números irracionales se compone de todos los decimales que no son finitos ni periódicos. Así, π y √2 tienen representaciones decimales no periódicas y no finitas.

### 33

De acuerdo con el libro de Geometría Analítica, en general, ¿qué significa *b*%?

- A. "*b* partes de 100", y es otra forma de escribir *b*/100
- B. "*b* multiplicado por 100"
- C. "100 partes de *b*"
- D. "*b* dividido entre 10"

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · porcentaje

En general, *b*% significa "*b* partes de 100", y es simplemente otra forma de escribir *b*/100.

### 34

De conformidad con el libro de Geometría Analítica, ¿cuál es un modo sencillo de convertir un número decimal en porcentaje?

- A. Multiplicar el decimal por 1 escrito en forma de 100%
- B. Dividir el decimal entre 100
- C. Restarle 100 al decimal
- D. Sumarle el símbolo % al decimal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · porcentaje

Un modo sencillo de convertir un número decimal en porcentaje es multiplicar el decimal por 1 escrito en forma de 100%.

### 35

En relación con el libro de Geometría Analítica, ¿qué indica el uso del símbolo ≈ en lugar de =?

- A. Que el número es sólo una aproximación
- B. Que los números son exactamente iguales
- C. Que el número es irracional
- D. Que la operación es una resta

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 50
**Subtema:** El sistema de los números reales · porcentaje

Utilizamos el símbolo ≈ en lugar de = para indicar que el número es sólo una aproximación.

### 36

De acuerdo con el libro de Geometría Analítica, ¿a qué se le llama sistema de los números reales?

- A. Al conjunto de números reales *R* junto con las operaciones de adición y multiplicación
- B. Al conjunto de los números racionales únicamente
- C. Al conjunto de los enteros con la operación de adición
- D. Al conjunto de los números irracionales con la multiplicación

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · sistema de los números reales

El conjunto de números reales *R* junto con las operaciones de adición y multiplicación se llama sistema de los números reales.

### 37

De conformidad con el libro de Geometría Analítica, según las propiedades básicas de cerradura, ¿qué se cumple para dos números reales *a* y *b*?

- A. *a* + *b* es un número real y *a* · *b* es un número real
- B. *a* + *b* siempre es un número entero
- C. *a* + *b* = *b* + *a*
- D. *a* + 0 = *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

1. Propiedades de cerradura: i) *a* + *b* es un número real; ii) *a* · *b* es un número real.

### 38

En relación con el libro de Geometría Analítica, ¿qué establecen las propiedades conmutativas?

- A. *a* + *b* = *b* + *a* y *a* · *b* = *b* · *a*
- B. *a* + (*b* + *c*) = (*a* + *b*) + *c*
- C. *a* + 0 = 0 + *a* = *a*
- D. *a*(*b* + *c*) = *ab* + *ac*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

2. Propiedades conmutativas: i) *a* + *b* = *b* + *a*; ii) *a* · *b* = *b* · *a*.

### 39

De acuerdo con el libro de Geometría Analítica, ¿qué establecen las propiedades asociativas?

- A. *a* + (*b* + *c*) = (*a* + *b*) + *c* y *a* · (*b* · *c*) = (*a* · *b*) · *c*
- B. *a* + *b* = *b* + *a*
- C. *a* · 1 = 1 · *a* = *a*
- D. *a* + (−*a*) = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

3. Propiedades asociativas: i) *a* + (*b* + *c*) = (*a* + *b*) + *c*; ii) *a* · (*b* · *c*) = (*a* · *b*) · *c*.

### 40

De conformidad con el libro de Geometría Analítica, ¿qué establecen las propiedades de identidad?

- A. *a* + 0 = 0 + *a* = *a* y *a* · 1 = 1 · *a* = *a*
- B. *a* + *b* = *b* + *a*
- C. *a* + (−*a*) = 0
- D. *a*(*b* + *c*) = *ab* + *ac*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

4. Propiedades de identidad: i) *a* + 0 = 0 + *a* = *a*; ii) *a* · 1 = 1 · *a* = *a*.

### 41

En relación con el libro de Geometría Analítica, según las propiedades del inverso, ¿qué se cumple para la adición?

- A. *a* + (−*a*) = (−*a*) + *a* = 0
- B. *a* + 0 = *a*
- C. *a* · (1/*a*) = 1
- D. *a* + *b* = *b* + *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

5. Propiedades del inverso: i) *a* + (−*a*) = (−*a*) + *a* = 0; ii) *a* · (1/*a*) = (1/*a*) · *a* = 1.

### 42

De acuerdo con el libro de Geometría Analítica, ¿qué establecen las propiedades distributivas?

- A. *a*(*b* + *c*) = *ab* + *ac* y (*a* + *b*)*c* = *ac* + *bc*
- B. *a* + (*b* + *c*) = (*a* + *b*) + *c*
- C. *a* · *b* = *b* · *a*
- D. *a* · 1 = *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 52
**Subtema:** El sistema de los números reales · propiedades básicas

6. Propiedades distributivas: i) *a*(*b* + *c*) = *ab* + *ac*; ii) (*a* + *b*)*c* = *ac* + *bc*.

### 43

De conformidad con el libro de Geometría Analítica, ¿cómo se denomina al número 0 en el sistema de los números reales?

- A. Identidad aditiva
- B. Identidad multiplicativa
- C. Inverso aditivo
- D. Recíproco

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

En la propiedad 4i), el número 0 se denomina identidad aditiva del sistema de los números reales.

### 44

En relación con el libro de Geometría Analítica, ¿cómo se conoce al número 1 en el sistema de los números reales?

- A. Identidad multiplicativa
- B. Identidad aditiva
- C. Inverso aditivo
- D. Negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

En la propiedad 4ii), el número 1 se conoce como identidad multiplicativa del mismo sistema.

### 45

De acuerdo con el libro de Geometría Analítica, ¿qué es el número −*a* respecto del número *a*?

- A. El inverso aditivo o el negativo del número *a*
- B. El inverso multiplicativo del número *a*
- C. El recíproco del número *a*
- D. La identidad aditiva del número *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

En la propiedad 5i), el número −*a* es el inverso aditivo o el negativo del número *a*.

### 46

De conformidad con el libro de Geometría Analítica, el inverso multiplicativo 1/*a* del número *a* diferente de cero, ¿de qué otra forma se conoce?

- A. Como el recíproco de *a*
- B. Como el negativo de *a*
- C. Como la identidad aditiva de *a*
- D. Como el inverso aditivo de *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 51
**Subtema:** El sistema de los números reales · propiedades básicas

El inverso multiplicativo del número *a* diferente de cero también se conoce como el recíproco de *a*.

### 47

En relación con el libro de Geometría Analítica, según la Definición 2.1.1, ¿cómo se define la diferencia *a* − *b* para los números reales *a* y *b*?

- A. *a* − *b* = *a* + (−*b*)
- B. *a* − *b* = *a* · (1/*b*)
- C. *a* − *b* = *b* + (−*a*)
- D. *a* − *b* = (−*a*) + (−*b*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 52
**Subtema:** El sistema de los números reales · Definición 2.1.1 diferencia y cociente

Para los números reales *a* y *b*, la diferencia, *a* − *b*, se define como *a* − *b* = *a* + (−*b*).

### 48

De acuerdo con el libro de Geometría Analítica, según la Definición 2.1.1, si *b* ≠ 0, ¿cómo se define el cociente *a* ÷ *b*?

- A. *a* ÷ *b* = *a* · (1/*b*) = *a*/*b*
- B. *a* ÷ *b* = *a* + (−*b*)
- C. *a* ÷ *b* = *b* · (1/*a*)
- D. *a* ÷ *b* = *a* · *b*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 52
**Subtema:** El sistema de los números reales · Definición 2.1.1 diferencia y cociente

Si *b* ≠ 0, entonces el cociente, *a* ÷ *b*, se define como *a* ÷ *b* = *a* · (1/*b*) = *a*/*b*.

### 49

De conformidad con el libro de Geometría Analítica, en el cociente *a*/*b*, ¿cómo se llaman *a* y *b*?

- A. *a* se llama numerador y *b* denominador
- B. *a* se llama denominador y *b* numerador
- C. *a* se llama cociente y *b* dividendo
- D. *a* se llama base y *b* exponente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · fracción

En el cociente *a*/*b*, *a* se llama numerador y *b* denominador.

### 50

En relación con el libro de Geometría Analítica, ¿cómo se denomina con frecuencia al cociente de dos números reales *a*/*b*?

- A. Fracción
- B. Producto
- C. Diferencia
- D. Potencia

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · fracción

Con frecuencia, el cociente de dos números reales *a*/*b* se denomina fracción.

### 51

De acuerdo con el libro de Geometría Analítica, ¿para qué números reales *a* no está definido *a*/0?

- A. Para ningún número real *a*
- B. Sólo para *a* = 0
- C. Sólo para los números negativos
- D. Sólo para los números irracionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · fracción

Tenga en cuenta que *a* ÷ *b* o *a*/*b* no está definido cuando *b* = 0. Por tanto, *a*/0 no está definido para ningún número real *a*.

### 52

De conformidad con el libro de Geometría Analítica, que 1 − (2 − 3) ≠ (1 − 2) − 3, ¿qué muestra sobre la sustracción?

- A. Que la sustracción no es asociativa
- B. Que la sustracción no es conmutativa
- C. Que la sustracción no tiene identidad
- D. Que la sustracción no está definida

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · propiedades adicionales

Puesto que 1 − (2 − 3) = 2 y (1 − 2) − 3 = −4, observamos que 1 − (2 − 3) ≠ (1 − 2) − 3. Por consiguiente, la sustracción no es asociativa.

### 53

En relación con el libro de Geometría Analítica, según las propiedades de la multiplicación por cero, si *a* · *b* = 0, ¿qué se concluye?

- A. Que *a* = 0, *b* = 0, o ambas
- B. Que *a* = 1 o *b* = 1
- C. Que *a* = *b*
- D. Que *a* y *b* son inversos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · propiedades adicionales

8. Propiedades de la multiplicación por cero: i) *a* · 0 = 0 · *a* = 0; ii) Si *a* · *b* = 0, entonces *a* = 0, *b* = 0, o ambas.

### 54

De acuerdo con el libro de Geometría Analítica, según las propiedades de cancelación, si *ac* = *bc* y *c* ≠ 0, ¿qué se concluye?

- A. Que *a* = *b*
- B. Que *a* = *c*
- C. Que *a* = 0
- D. Que *b* = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · propiedades adicionales

9. Propiedades de cancelación: i) Si *ac* = *bc*, y *c* ≠ 0, entonces *a* = *b*.

### 55

De conformidad con el libro de Geometría Analítica, según las propiedades de la sustracción y negativos, ¿a qué es igual −(−*a*)?

- A. −(−*a*) = *a*
- B. −(−*a*) = −*a*
- C. −(−*a*) = 0
- D. −(−*a*) = 1/*a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · propiedades adicionales

10. Propiedades de la sustracción y negativos: i) −(−*a*) = *a*.

### 56

En relación con el libro de Geometría Analítica, según las propiedades de la sustracción y negativos, ¿a qué es igual (−*a*)(−*b*)?

- A. (−*a*)(−*b*) = *ab*
- B. (−*a*)(−*b*) = −*ab*
- C. (−*a*)(−*b*) = *a* + *b*
- D. (−*a*)(−*b*) = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 53
**Subtema:** El sistema de los números reales · propiedades adicionales

10. Propiedades de la sustracción y negativos: iv) (−*a*)(−*b*) = *ab*.
