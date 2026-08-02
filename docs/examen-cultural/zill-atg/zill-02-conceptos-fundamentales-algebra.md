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

**Sub-lote 3 (pp. 54–55, reactivos 57–65):** cierra **§2.1** con las **propiedades adicionales
11–16** de las fracciones (fracciones equivalentes, regla de los signos, adición/sustracción con
denominadores comunes, multiplicación, división) y la división de cero y por cero (0/*b* = 0;
*a*/0 y 0/0 indefinidas), más la nota del aula sobre la cancelación incorrecta. Las pp. 56–57 son
*Ejercicios* y quedan fuera.

**§2.1 El sistema de los números reales · CERRADO** (pp. 48–55, reactivos 1–65 junto con la
portadilla histórica de la p. 47).

**Sub-lote 4 (pp. 58–61, reactivos 66–91):** **§2.2 La recta de los números reales** completa:
la introducción (el promedio como punto medio), la recta numérica (origen, coordenada), la
**Definición 2.2.1** (menor que), las desigualdades (izquierda/derecha en la recta, `≤`/`≥`, la
**ley de tricotomía**, símbolos de desigualdad, desigualdad estricta/no estricta, positivo/negativo/
no negativo/no positivo), el **Teorema 2.2.1** (propiedad transitiva), el valor absoluto
(**Definición 2.2.2** y **Teorema 2.2.2** con sus seis propiedades, incluida la desigualdad
triangular), la distancia (**Definición 2.2.3**, `d(a,b)=|b−a|`, `d(a,b)=d(b,a)`) y la coordenada
del punto medio (`m=(a+b)/2`). Las pp. 62–63 son *Ejercicios* y quedan fuera.

**§2.2 La recta de los números reales · CERRADO** (pp. 58–61, reactivos 66–91).

**Pendiente:** las secciones **§2.3 a §2.8** (pp. 64–106). Con ellas, el capítulo 2 quedará
cerrado para la EMMA.

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

---

## Sub-lote 3 · §2.1 El sistema de los números reales: propiedades de las fracciones (pp. 54–55) — cierra §2.1

### 57

De acuerdo con el libro de Geometría Analítica, según la propiedad de fracciones equivalentes, ¿cuándo se cumple que *a*/*b* = *c*/*d*?

- A. Si y sólo si *ad* = *bc*
- B. Si y sólo si *ac* = *bd*
- C. Si y sólo si *a* = *c* y *b* = *d*
- D. Si y sólo si *ab* = *cd*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 54
**Subtema:** El sistema de los números reales · propiedades de las fracciones

11. Fracciones equivalentes: *a*/*b* = *c*/*d* si y sólo si *ad* = *bc*.

### 58

De conformidad con el libro de Geometría Analítica, ¿qué establece la regla de los signos para las fracciones?

- A. −(*a*/*b*) = (−*a*)/*b* = *a*/(−*b*)
- B. −(*a*/*b*) = (−*a*)/(−*b*)
- C. −(*a*/*b*) = *a*/*b*
- D. −(*a*/*b*) = *b*/*a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 54
**Subtema:** El sistema de los números reales · propiedades de las fracciones

12. Regla de los signos: −(*a*/*b*) = (−*a*)/*b* = *a*/(−*b*).

### 59

En relación con el libro de Geometría Analítica, según la propiedad de adición o sustracción con denominadores comunes, ¿a qué es igual *a*/*b* ± *c*/*b*?

- A. (*a* ± *c*)/*b*
- B. (*a* ± *c*)/(2*b*)
- C. (*a* ± *c*)/(*b* · *b*)
- D. *a* ± *c*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 54
**Subtema:** El sistema de los números reales · propiedades de las fracciones

13. Adición o sustracción con denominadores comunes: *a*/*b* ± *c*/*b* = (*a* ± *c*)/*b*.

### 60

De acuerdo con el libro de Geometría Analítica, según la propiedad de multiplicación de fracciones, ¿a qué es igual (*a*/*b*) · (*c*/*d*)?

- A. *ac*/*bd*
- B. *ad*/*bc*
- C. (*a* + *c*)/(*b* + *d*)
- D. *ab*/*cd*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 54
**Subtema:** El sistema de los números reales · propiedades de las fracciones

14. Multiplicación: (*a*/*b*) · (*c*/*d*) = *ac*/*bd*.

### 61

De conformidad con el libro de Geometría Analítica, según la propiedad de división de fracciones, ¿a qué es igual (*a*/*b*) ÷ (*c*/*d*)?

- A. *ad*/*bc*
- B. *ac*/*bd*
- C. *bc*/*ad*
- D. (*a* + *d*)/(*b* + *c*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 54
**Subtema:** El sistema de los números reales · propiedades de las fracciones

15. División: (*a*/*b*) ÷ (*c*/*d*) = (*a*/*b*)/(*c*/*d*) = (*a*/*b*) · (*d*/*c*) = *ad*/*bc*, *c* ≠ 0.

### 62

En relación con el libro de Geometría Analítica, según la propiedad de división de cero, ¿a qué es igual 0 ÷ *b* (con *b* ≠ 0)?

- A. 0
- B. Es indefinida
- C. 1
- D. *b*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 55
**Subtema:** El sistema de los números reales · división de cero y por cero

16. División de cero y división por cero: i) 0 ÷ *b* = 0/*b* = 0, *b* ≠ 0.

### 63

De acuerdo con el libro de Geometría Analítica, según la propiedad de división por cero, ¿qué ocurre con *a* ÷ 0 (con *a* ≠ 0)?

- A. Es indefinida
- B. Es igual a 0
- C. Es igual a 1
- D. Es igual a *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 55
**Subtema:** El sistema de los números reales · división de cero y por cero

16. División de cero y división por cero: ii) *a* ÷ 0 = *a*/0 es indefinida, *a* ≠ 0.

### 64

De conformidad con el libro de Geometría Analítica, según la propiedad 16, ¿qué ocurre con 0 ÷ 0?

- A. Es indefinida
- B. Es igual a 0
- C. Es igual a 1
- D. Es igual a cualquier número real

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 55
**Subtema:** El sistema de los números reales · división de cero y por cero

16. División de cero y división por cero: iii) 0 ÷ 0 = 0/0 es indefinida.

### 65

En relación con el libro de Geometría Analítica, en la simplificación de 2(*u* + *v*)/2*v* = (*u* + *v*)/*v*, ¿por qué no se puede cancelar la *v*?

- A. Porque *v* no es factor multiplicativo tanto del numerador como del denominador, como lo requiere la ley de cancelación
- B. Porque *v* es igual a cero
- C. Porque el numerador y el denominador no son enteros
- D. Porque la fracción ya está simplificada

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 55
**Subtema:** El sistema de los números reales · notas del aula

No se puede realizar ninguna cancelación en la simplificación de 2(*u* + *v*)/2*v* = (*u* + *v*)/*v*, pues *v* no es factor multiplicativo tanto del numerador como del denominador, como lo requiere la ley de cancelación 9ii).

---

## Sub-lote 4 · §2.2 La recta de los números reales (pp. 58–61)

### 66

De acuerdo con el libro de Geometría Analítica, para dos números reales distintos *a* y *b*, ¿qué siempre hay entre ellos?

- A. Un tercer número real, por ejemplo su promedio (*a* + *b*)/2, que es el punto medio entre ellos
- B. Un número entero
- C. Un único número irracional
- D. Ningún otro número real

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 58
**Subtema:** La recta de los números reales · introducción

Para dos números reales distintos *a* y *b*, siempre hay un tercer número real entre ellos; por ejemplo, su promedio (*a* + *b*)/2 es el punto medio entre ellos.

### 67

De conformidad con el libro de Geometría Analítica, el punto *O* que se escoge sobre una recta para representar el número 0, ¿cómo se llama?

- A. Origen
- B. Coordenada
- C. Punto medio
- D. Unidad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 58
**Subtema:** La recta de los números reales · recta numérica

Dada cualquier recta, escogemos un punto *O* sobre ella para representar el número 0. Este punto en particular se llama origen.

### 68

En relación con el libro de Geometría Analítica, la correspondencia uno a uno entre el conjunto de números reales *R* y el conjunto de puntos de una recta, ¿cómo se llama?

- A. Recta de los números reales o recta numérica real
- B. Ley de tricotomía
- C. Coordenada del origen
- D. Segmento unitario

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 58
**Subtema:** La recta de los números reales · recta numérica

Esta asociación produce una correspondencia uno a uno entre el conjunto de números reales *R* y el conjunto de puntos de una recta, llamada recta de los números reales o recta numérica real.

### 69

De acuerdo con el libro de Geometría Analítica, para un punto *P* dado en la recta numérica, el número *p* que corresponde a ese punto, ¿cómo se llama?

- A. Coordenada de *P*
- B. Origen de *P*
- C. Valor absoluto de *P*
- D. Punto medio de *P*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 58
**Subtema:** La recta de los números reales · recta numérica

Para cualquier punto *P* dado en la recta numérica, el número *p*, que corresponde a ese punto, se llama coordenada de *P*.

### 70

De conformidad con el libro de Geometría Analítica, según la Definición 2.2.1, ¿cuándo se dice que el número real *a* es menor que *b* (*a* < *b*)?

- A. Si y sólo si la diferencia *b* − *a* es positiva
- B. Si y sólo si la diferencia *a* − *b* es positiva
- C. Si y sólo si el producto *ab* es positivo
- D. Si y sólo si la suma *a* + *b* es positiva

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 58
**Subtema:** La recta de los números reales · Definición 2.2.1 menor que

Se dice que el número real *a* es menor que *b*, lo que se escribe *a* < *b*, si y sólo si la diferencia *b* − *a* es positiva.

### 71

En relación con el libro de Geometría Analítica, ¿cuándo se dice que el número *a* es menor que el número *b* en la recta numérica?

- A. Siempre que el número *a* se sitúe a la izquierda del número *b*
- B. Siempre que el número *a* se sitúe a la derecha del número *b*
- C. Siempre que *a* y *b* coincidan en el mismo punto
- D. Siempre que *a* sea el origen

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · desigualdades

Decimos que el número *a* es menor que el número *b*, y escribimos *a* < *b*, siempre que el número *a* se sitúe a la izquierda del número *b* en la recta numérica.

### 72

De acuerdo con el libro de Geometría Analítica, ¿qué significa la notación *a* ≤ *b*?

- A. Que el número *a* es menor o igual al número *b*
- B. Que el número *a* es mayor que el número *b*
- C. Que el número *a* es igual al número *b*
- D. Que el número *a* es el negativo de *b*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · desigualdades

También empleamos la notación *a* ≤ *b* si el número *a* es menor o igual al número *b*. Asimismo, *b* ≥ *a* significa que *b* es mayor o igual a *a*.

### 73

De conformidad con el libro de Geometría Analítica, según la ley de tricotomía, para dos números reales cualesquiera *a* y *b*, ¿cuántas de las expresiones *a* < *b*, *a* = *b* o *a* > *b* son verdaderas?

- A. Sólo una de las tres es verdadera
- B. Las tres son verdaderas
- C. Dos de las tres son verdaderas
- D. Ninguna es verdadera

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · ley de tricotomía

Para dos números reales cualesquiera *a* y *b*, sólo una de las tres expresiones siguientes es verdadera: *a* < *b*, *a* = *b* o *a* > *b*. La propiedad dada en (1) se llama ley de tricotomía.

### 74

En relación con el libro de Geometría Analítica, ¿cómo se llaman los símbolos <, >, ≤ y ≥?

- A. Símbolos de desigualdad
- B. Símbolos de igualdad
- C. Símbolos de valor absoluto
- D. Símbolos de tricotomía

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · terminología

Los símbolos <, >, ≤ y ≥ se llaman símbolos de desigualdad y las expresiones como *a* < *b* o *b* ≥ *a* se denominan desigualdades.

### 75

De acuerdo con el libro de Geometría Analítica, ¿cómo se conoce a menudo una desigualdad como *a* < *b*?

- A. Desigualdad estricta
- B. Desigualdad no estricta
- C. Ley de tricotomía
- D. Desigualdad triangular

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · terminología

Una desigualdad *a* < *b* a menudo se conoce como desigualdad estricta.

### 76

De conformidad con el libro de Geometría Analítica, ¿cómo se designa una desigualdad como *b* ≥ *a*?

- A. Desigualdad no estricta
- B. Desigualdad estricta
- C. Desigualdad triangular
- D. Igualdad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · terminología

Una desigualdad como *b* ≥ *a* se designa desigualdad no estricta.

### 77

En relación con el libro de Geometría Analítica, ¿qué significa la desigualdad *a* > 0?

- A. Que *a* está a la derecha del número 0 en la recta numérica y, en consecuencia, *a* es positivo
- B. Que *a* está a la izquierda del 0 y es negativo
- C. Que *a* es igual a 0
- D. Que *a* no es positivo ni negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · terminología

La desigualdad *a* > 0 significa que el número *a* está a la derecha del número 0 en la recta numérica y, en consecuencia, *a* es positivo.

### 78

De acuerdo con el libro de Geometría Analítica, como la desigualdad *a* ≥ 0 significa que *a* es mayor que 0 o igual a 0, ¿cómo se dice que es *a*?

- A. No negativo
- B. No positivo
- C. Negativo
- D. Estrictamente positivo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · terminología

Como la desigualdad *a* ≥ 0 significa que *a* es mayor que 0 (positivo) o igual a 0 (que no es positivo ni negativo), decimos que *a* es no negativo.

### 79

De conformidad con el libro de Geometría Analítica, si *a* ≤ 0, ¿cómo se dice que es *a*?

- A. No positivo
- B. No negativo
- C. Positivo
- D. Estrictamente negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · terminología

De manera semejante, si *a* ≤ 0, decimos que *a* es no positivo.

### 80

En relación con el libro de Geometría Analítica, según el Teorema 2.2.1 (propiedad transitiva), si *a* < *b* y *b* < *c*, ¿qué se concluye?

- A. Que *a* < *c*
- B. Que *a* = *c*
- C. Que *a* > *c*
- D. Que *b* < *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · Teorema 2.2.1 propiedad transitiva

Teorema 2.2.1, propiedad transitiva: Si *a* < *b* y *b* < *c*, entonces *a* < *c*.

### 81

De acuerdo con el libro de Geometría Analítica, según la Definición 2.2.2, ¿cómo se define el valor absoluto |*a*| de cualquier número real *a*?

- A. |*a*| = *a* si *a* ≥ 0, y |*a*| = −*a* si *a* < 0
- B. |*a*| = *a* siempre
- C. |*a*| = −*a* si *a* ≥ 0, y |*a*| = *a* si *a* < 0
- D. |*a*| = *a*² para todo *a*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 59
**Subtema:** La recta de los números reales · Definición 2.2.2 valor absoluto

Para cualquier número real *a*, el valor absoluto de *a*, denotado por |*a*|, es: |*a*| = *a*, si *a* ≥ 0; −*a*, si *a* < 0.

### 82

De conformidad con el libro de Geometría Analítica, si *y* representa un número negativo, ¿a qué es igual |*y*|?

- A. |*y*| = −*y*, que es un número positivo
- B. |*y*| = *y*
- C. |*y*| = 0
- D. |*y*| = *y*²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 60
**Subtema:** La recta de los números reales · valor absoluto

Si *y* representa un número negativo, entonces el negativo de *y*, es decir, −*y* es un número positivo. Por tanto, si *y* es negativo, entonces |*y*| = −*y*.

### 83

En relación con el libro de Geometría Analítica, para cualquier número real *x* y su negativo −*x*, como la distancia al origen es la misma, ¿qué se cumple?

- A. |*x*| = |−*x*|
- B. |*x*| = −|*x*|
- C. |*x*| = *x*
- D. |*x*| = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 60
**Subtema:** La recta de los números reales · valor absoluto

Para cualquier número real *x* y su negativo, −*x*, la distancia al origen es la misma. Es decir, |*x*| = |−*x*|.

### 84

De acuerdo con el libro de Geometría Analítica, según el Teorema 2.2.2, ¿qué se cumple siempre para el valor absoluto |*x*| de un número real?

- A. |*x*| ≥ 0
- B. |*x*| ≤ 0
- C. |*x*| < 0
- D. |*x*| = *x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 60
**Subtema:** La recta de los números reales · Teorema 2.2.2 propiedades del valor absoluto

Teorema 2.2.2, propiedades del valor absoluto: i) |*x*| ≥ 0.

### 85

De conformidad con el libro de Geometría Analítica, según el Teorema 2.2.2, ¿cuándo se cumple que |*x*| = 0?

- A. Si y sólo si *x* = 0
- B. Si y sólo si *x* > 0
- C. Siempre, para todo *x*
- D. Si y sólo si *x* < 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 60
**Subtema:** La recta de los números reales · Teorema 2.2.2 propiedades del valor absoluto

Teorema 2.2.2, propiedades del valor absoluto: ii) |*x*| = 0 si y sólo si *x* = 0.

### 86

En relación con el libro de Geometría Analítica, según el Teorema 2.2.2, ¿a qué es igual el valor absoluto de un producto |*xy*|?

- A. |*xy*| = |*x*||*y*|
- B. |*xy*| = |*x*| + |*y*|
- C. |*xy*| = |*x*|/|*y*|
- D. |*xy*| = |*x*| − |*y*|

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 60
**Subtema:** La recta de los números reales · Teorema 2.2.2 propiedades del valor absoluto

Teorema 2.2.2, propiedades del valor absoluto: iv) |*xy*| = |*x*||*y*|. La propiedad iv) dice que el valor absoluto de un producto es igual al producto de los valores absolutos de los dos factores.

### 87

De acuerdo con el libro de Geometría Analítica, según el Teorema 2.2.2, ¿qué relación cumple |*x* + *y*|?

- A. |*x* + *y*| ≤ |*x*| + |*y*|
- B. |*x* + *y*| = |*x*| + |*y*|
- C. |*x* + *y*| ≥ |*x*| + |*y*|
- D. |*x* + *y*| = |*x*| · |*y*|

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 60
**Subtema:** La recta de los números reales · Teorema 2.2.2 propiedades del valor absoluto

Teorema 2.2.2, propiedades del valor absoluto: vi) |*x* + *y*| ≤ |*x*| + |*y*|.

### 88

De conformidad con el libro de Geometría Analítica, ¿cómo se llama la propiedad del inciso vi) del Teorema 2.2.2?

- A. Desigualdad triangular
- B. Ley de tricotomía
- C. Propiedad transitiva
- D. Regla de los signos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 61
**Subtema:** La recta de los números reales · desigualdad triangular

El inciso vi) del teorema 2.2.2 es una propiedad importante del valor absoluto llamada desigualdad triangular.

### 89

En relación con el libro de Geometría Analítica, según la Definición 2.2.3, si *a* y *b* son dos puntos en la recta de los números reales, ¿cómo está dada la distancia de *a* a *b*?

- A. *d*(*a*, *b*) = |*b* − *a*|
- B. *d*(*a*, *b*) = *b* − *a*
- C. *d*(*a*, *b*) = |*b*| − |*a*|
- D. *d*(*a*, *b*) = (*a* + *b*)/2

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 61
**Subtema:** La recta de los números reales · Definición 2.2.3 distancia

Si *a* y *b* son dos puntos en la recta de los números reales, la distancia de *a* a *b* está dada por *d*(*a*, *b*) = |*b* − *a*|.

### 90

De acuerdo con el libro de Geometría Analítica, ¿cómo es la distancia de *a* a *b* comparada con la distancia de *b* a *a*?

- A. *d*(*a*, *b*) = *d*(*b*, *a*)
- B. *d*(*a*, *b*) = −*d*(*b*, *a*)
- C. *d*(*a*, *b*) = 2 *d*(*b*, *a*)
- D. *d*(*a*, *b*) > *d*(*b*, *a*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 61
**Subtema:** La recta de los números reales · distancia

Vemos que la distancia de *a* a *b* es la misma que la distancia de *b* a *a*. Así, *d*(*a*, *b*) = *d*(*b*, *a*).

### 91

De conformidad con el libro de Geometría Analítica, ¿cómo se obtiene el punto medio *m* de un segmento de recta que une a *a* y *b*?

- A. Es el promedio de los dos extremos: *m* = (*a* + *b*)/2
- B. Es la diferencia de los dos extremos: *m* = *b* − *a*
- C. Es el valor absoluto de la suma: *m* = |*a* + *b*|
- D. Es el producto de los dos extremos: *m* = *ab*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 61
**Subtema:** La recta de los números reales · coordenada del punto medio

El punto medio *m* de un segmento de recta que une a *a* y *b* es el promedio de los dos extremos: *m* = (*a* + *b*)/2.
