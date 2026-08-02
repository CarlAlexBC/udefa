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

**Pendiente:** el resto de **§2.1** (pp. 50–57: propiedades de los números reales) y las
secciones **§2.2 a §2.8**. Con ellas, el capítulo 2 quedará cerrado para la EMMA.

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
