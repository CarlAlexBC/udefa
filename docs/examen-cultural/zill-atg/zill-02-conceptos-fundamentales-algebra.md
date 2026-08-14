# Geometría Analítica · Capítulo 2 · Conceptos fundamentales del álgebra

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 2 → COMPLETO (§2.1–§2.8, reactivos 1–210)**

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

**Sub-lote 5 (pp. 64–67, reactivos 92–106):** **§2.3 Exponentes enteros** (toda la teoría): la
**Definición 2.3.1** (potencia entera positiva, exponente/potencia y base), la **Definición 2.3.2**
(potencias enteras negativas, *x⁻ⁿ* = 1/*xⁿ*), el exponente cero (*x*⁰ = 1; 0⁰ indefinido), el
**Teorema 2.3.1** con sus cinco leyes de los exponentes (y su extensión a más de dos variables),
la **notación científica** (*a* × 10ⁿ, 1 ≤ *a* < 10) y los **dígitos significativos** (*k* + 1).
Los ejemplos (año luz) y los *Ejercicios* de las pp. 68–70 quedan fuera por la norma de teoría
sobre práctica.

**§2.3 Exponentes enteros · CERRADO** (pp. 64–67, reactivos 92–106).

**Sub-lote 6 (pp. 71–74, reactivos 107–128):** **§2.4 Radicales** (toda la teoría): las raíces y
el símbolo √ (raíz cuadrada principal, no negativa), la **Definición 2.4.1** (raíz *n*-ésima
principal, sus cuatro casos), la terminología (radical, índice, radicando; raíz cuadrada/cúbica),
el número de raíces reales según la paridad del índice, el número complejo (raíz par de un
negativo), el **Teorema 2.4.1** con sus cinco leyes de los radicales, y la racionalización (del
denominador) con el factor conjugado. Los ejemplos de simplificación y los *Ejercicios* de las
pp. 73–77 quedan fuera por la norma de teoría sobre práctica.

**§2.4 Radicales · CERRADO** (pp. 71–74, reactivos 107–128).

**Sub-lote 7 (pp. 78–79, reactivos 129–140):** la teoría de **§2.5 Exponentes racionales**: la
introducción (la raíz *n*-ésima amplía la definición de *xⁿ* de exponentes enteros a racionales),
la **Definición 2.5.1** (potencia racional: *x*^(1/*n*) = ⁿ√*x* como la raíz *n*-ésima principal, y
*x*^(*m*/*n*) = ⁿ√(*xᵐ*) = (ⁿ√*x*)ᵐ con *m*/*n* en términos mínimos —sin factores enteros comunes—),
y el **Teorema 2.5.1** con sus cinco leyes de los exponentes racionales.

**Sub-lote 8 (pp. 80–81, reactivos 141–142):** cierra **§2.5** con las dos notas teóricas restantes:
la convención de que, para el resto de la sección, todas las bases variables se consideran positivas
(así todas las potencias racionales quedan definidas) y que las leyes de los exponentes también son
verdaderas para los exponentes irracionales. Los Ejemplos 5–10 y los *Ejercicios* de las pp. 80–82
quedan fuera por la norma de teoría sobre práctica.

**§2.5 Exponentes racionales · CERRADO** (pp. 78–81, reactivos 129–142).

**Sub-lote 9 (pp. 83–84, reactivos 143–161):** la apertura de **§2.6 Polinomios y productos
notables**: la introducción (variable, expresión algebraica, dominio de la variable, valor de la
expresión) y la terminología de los polinomios (monomio *ax*ⁿ, coeficiente, grado, binomio, trinomio,
la **Definición 2.6.1** de polinomio de grado *n*, forma estándar, dominio *R*, términos, coeficiente
principal, término constante, polinomio cero y sin grado asignado, y la clasificación por grado:
constante, lineal, cuadrático, cúbico).

**Sub-lote 10 (pp. 85–88, reactivos 162–172):** el resto de la teoría de **§2.6**: que en cada término
el exponente de la variable debe ser un entero no negativo, **el álgebra de los polinomios** (la suma,
diferencia y producto de dos polinomios es un polinomio; se suman por coeficientes de potencias iguales)
y los **productos notables** —producto de dos binomios (*ax*+*b*)(*cx*+*d*), cuadrado (*x*+*a*)², cubo
(*x*+*a*)³ y diferencia de cuadrados (*x*+*a*)(*x*−*a*)—, el **método PEIU**, la nota de que en (3), (4) y
(5) los símbolos pueden sustituirse, y los **polinomios en dos y tres variables**.

**Sub-lote 11 (pp. 89–90, reactivos 173–177):** cierra **§2.6** con la **suma y diferencia de cubos**
(en su forma correcta *a*², por la errata del libro —ver aviso—), la nota de que esas fórmulas importan
más en la factorización que en la multiplicación, que la división de dos polinomios se explica en el
capítulo 6, y la **Nota del aula** sobre cambiar el signo de cada término al restar polinomios en formato
horizontal. Los Ejemplos 1–13 y los *Ejercicios* de las pp. 83–91 quedan fuera por la norma de teoría
sobre práctica.

**§2.6 Polinomios y productos notables · CERRADO** (pp. 83–90, reactivos 143–177).

**Sub-lote 12 (pp. 92–94, reactivos 178–188):** la apertura de **§2.7 Factorización de polinomios**: la
definición de factorización y de factor, que se buscan factores de grado 1 o mayores, el factor común como
primer paso y la agrupación, y la **factorización de polinomios cuadráticos** (*ax*²+*bx*+*c* como
(*Ax*+*B*)(*Cx*+*D*); para *x*²+*bx*+*c*, con *B*+*D*=*b* y *BD*=*c*; para el caso general *a*≠1, con
*AC*=*a*, *AD*+*BC*=*b*, *BD*=*c*; la comprobación por multiplicación; y la extensión a *ax*²+*bxy*+*cy*²).

**Sub-lote 13 (pp. 95–96, reactivos 189–195):** cierra **§2.7** con las **fórmulas de factorización**
(obtenidas al invertir los productos notables): cuadrado perfecto, diferencia de dos cuadrados, y suma y
diferencia de dos cubos —estas dos con la forma correcta *a*² (el libro las escribe bien aquí, a diferencia
de §2.6; ver aviso)—, la nota de que la diferencia de cuadrados y la suma/diferencia de cubos siempre se
pueden factorizar si no se limitan los coeficientes a enteros, y la noción de **factorización total**. Los
Ejemplos 1–11 y los *Ejercicios* de las pp. 92–97 quedan fuera por la norma de teoría sobre práctica.

**§2.7 Factorización de polinomios · CERRADO** (pp. 92–96, reactivos 178–195).

**Sub-lote 14 (pp. 98–99, reactivos 196–204):** la apertura de **§2.8 Expresiones racionales**: la
definición de expresión racional (cociente de dos polinomios), su dominio (los reales donde el denominador
no es cero), las cuatro **propiedades frecuentes de las fracciones** (cancelación, suma/resta,
multiplicación y división, con denominadores no nulos) y la simplificación por factorización y cancelación.

**Sub-lote 15 (pp. 100–102, reactivos 205–210):** cierra **§2.8** con la suma y resta de expresiones
racionales (primero un común denominador, luego la propiedad de suma/resta), el **mínimo común denominador**
(cómo se encuentra y por qué reduce el trabajo), la multiplicación y división de expresiones racionales, la
definición de **expresión fraccionaria** (cociente de expresiones algebraicas que no son polinomios) y el
método del MCD para simplificar fracciones complejas. Los Ejemplos 1–11 y los *Ejercicios* de las pp.
98–106 quedan fuera por la norma de teoría sobre práctica.

**§2.8 Expresiones racionales · CERRADO** (pp. 98–102, reactivos 196–210).

**CAPÍTULO 2 · COMPLETO para la EMMA** (§2.1 a §2.8, reactivos 1–210). Los otros dos capítulos que
pide la materia *Álgebra* de la EMMA (`ÁLGE-01-2026`) **ya están escritos**: el **capítulo 3**
*Ecuaciones y desigualdades* en `zill-03-ecuaciones-desigualdades.md` (89 reactivos, Completo) y el
**capítulo 4** §4.1–§4.4 en `zill-04-coordenadas-rectangulares.md` (64 reactivos). Su materia
*Trigonometría y Geometría Analítica* (`TGA-02-2026`) pide además los capítulos 8, 9, 10 y 11, los
cuatro cerrados. **De este libro, la EMMA no debe nada.**

**Pendiente:** ninguno. El capítulo 2 quedó **CERRADO** en 210 reactivos, cubierto §2.1 a §2.8
(pp. 47–102); los *Ejercicios de repaso* y los bloques de ejercicios de las pp. 103–107 quedan fuera
por la norma de teoría sobre práctica.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico, no práctico. Se privilegian
las definiciones, teoremas y reglas sobre los procedimientos de cálculo. Los ejemplos numéricos
y los bloques de ejercicios no se convierten en reactivos de procedimiento; las definiciones,
teoremas y fórmulas sí.

## Avisos al aspirante (erratas del libro)

**§2.6, pág. 89 — suma y diferencia de dos cubos (fórmulas 6 y 7).** El libro imprime el tercer
término del segundo factor como *a*³ cuando debe ser *a*²:

- Diferencia de cubos, fórmula (6): el libro escribe (*x* − *a*)(*x*² + *ax* + *a*³) = *x*³ − *a*³;
  la forma correcta es **(*x* − *a*)(*x*² + *ax* + *a*²) = *x*³ − *a*³**.
- Suma de cubos, fórmula (7): el libro escribe (*x* + *a*)(*x*² − *ax* + *a*³) = *x*³ + *a*³;
  la forma correcta es **(*x* + *a*)(*x*² − *ax* + *a*²) = *x*³ + *a*³**.

Con *a*³ la identidad es falsa. **Es errata de imprenta, confirmada por recorte a 600 dpi** (no es
suciedad del escaneo), y el propio libro la desmiente en el **Ejemplo 11** de esa misma página, donde
escribe bien (*x* + *y*)(*x*² − *xy* + *y*²) = *x*³ + *y*³ (término medio con *y*²). Además, en la
**§2.7 (pág. 95)** el libro reescribe estas identidades como fórmulas de factorización (5) y (6), también
con *a*². Por eso los reactivos de suma y diferencia de cubos de este banco usan la **forma correcta
(*a*²)**, no la que aparece impresa.

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

---

## Sub-lote 5 · §2.3 Exponentes enteros (pp. 64–67)

### 92

De acuerdo con el libro de Geometría Analítica, según la Definición 2.3.1, para un número real *x* y un entero positivo *n*, ¿qué representa el símbolo *xⁿ*?

- A. El producto de *n* factores de *x*
- B. La suma de *n* sumandos iguales a *x*
- C. El cociente de *x* entre *n*
- D. El producto de *x* por *n*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 64
**Subtema:** Exponentes enteros · Definición 2.3.1 potencia entera positiva

Para cualquier número real *x* y cualquier entero positivo *n*, el símbolo *xⁿ* representa el producto de *n* factores de *x*.

### 93

De conformidad con el libro de Geometría Analítica, en el caso en que *n* = 1, ¿a qué es igual *x*¹?

- A. *x*
- B. 1
- C. 0
- D. *x*²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 64
**Subtema:** Exponentes enteros · Definición 2.3.1 potencia entera positiva

En el caso en que *n* = 1, tenemos que *x*¹ = *x*.

### 94

En relación con el libro de Geometría Analítica, en la expresión *xⁿ*, ¿cómo se llama *n*?

- A. Exponente o potencia de *x*
- B. Base
- C. Factor
- D. Coeficiente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 64
**Subtema:** Exponentes enteros · terminología

En la expresión *xⁿ*, *n* se llama exponente o potencia de *x*, y *x* se denomina base.

### 95

De acuerdo con el libro de Geometría Analítica, en la expresión *xⁿ*, ¿cómo se denomina *x*?

- A. Base
- B. Exponente
- C. Potencia
- D. Radicando

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 64
**Subtema:** Exponentes enteros · terminología

En la expresión *xⁿ*, *n* se llama exponente o potencia de *x*, y *x* se denomina base.

### 96

De conformidad con el libro de Geometría Analítica, según la Definición 2.3.2, para un número real *x* distinto de cero y un entero positivo *n*, ¿qué representa el símbolo *x⁻ⁿ*?

- A. El recíproco del producto de *n* factores de *x*, es decir, *x⁻ⁿ* = 1/*xⁿ*, con *x* ≠ 0
- B. El producto de *n* factores de *x*
- C. El negativo de *xⁿ*
- D. El producto de −*n* por *x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 64
**Subtema:** Exponentes enteros · Definición 2.3.2 potencias enteras negativas

Para cualquier número real *x* que no sea cero y cualquier entero positivo *n*, el símbolo *x⁻ⁿ* representa el recíproco del producto de *n* factores de *x*. Es decir, *x⁻ⁿ* = 1/*xⁿ*, con *x* ≠ 0.

### 97

En relación con el libro de Geometría Analítica, para cualquier base *x* diferente de cero, ¿a qué es igual *x*⁰?

- A. *x*⁰ = 1
- B. *x*⁰ = 0
- C. *x*⁰ = *x*
- D. *x*⁰ es indefinido

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 65
**Subtema:** Exponentes enteros · exponente cero

Finalmente, para cualquier base *x* diferente de cero, definimos *x*⁰ = 1.

### 98

De acuerdo con el libro de Geometría Analítica, según la advertencia del texto, ¿qué ocurre con 0⁰?

- A. Es indefinido
- B. Es igual a 1
- C. Es igual a 0
- D. Es igual a la base

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 65
**Subtema:** Exponentes enteros · exponente cero

Note que 0⁰ es indefinido.

### 99

De conformidad con el libro de Geometría Analítica, según la ley i) del Teorema 2.3.1, ¿a qué es igual *xᵐxⁿ*?

- A. *xᵐ⁺ⁿ*
- B. *xᵐⁿ*
- C. *xᵐ⁻ⁿ*
- D. *x*^(*m*/*n*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 66
**Subtema:** Exponentes enteros · Teorema 2.3.1 leyes de los exponentes

Teorema 2.3.1, leyes de los exponentes enteros: i) *xᵐxⁿ* = *xᵐ⁺ⁿ*.

### 100

En relación con el libro de Geometría Analítica, según la ley ii) del Teorema 2.3.1, ¿a qué es igual (*xᵐ*)ⁿ?

- A. *xᵐⁿ*
- B. *xᵐ⁺ⁿ*
- C. *xᵐ⁻ⁿ*
- D. *xᵐ* + *xⁿ*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 66
**Subtema:** Exponentes enteros · Teorema 2.3.1 leyes de los exponentes

Teorema 2.3.1, leyes de los exponentes enteros: ii) (*xᵐ*)ⁿ = *xᵐⁿ*.

### 101

De acuerdo con el libro de Geometría Analítica, según la ley iii) del Teorema 2.3.1, ¿a qué es igual (*xy*)ⁿ?

- A. *xⁿyⁿ*
- B. *xⁿ* + *yⁿ*
- C. *x*^(*n*/*y*)
- D. *xy*ⁿ

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 66
**Subtema:** Exponentes enteros · Teorema 2.3.1 leyes de los exponentes

Teorema 2.3.1, leyes de los exponentes enteros: iii) (*xy*)ⁿ = *xⁿyⁿ*.

### 102

De conformidad con el libro de Geometría Analítica, según la ley iv) del Teorema 2.3.1, ¿a qué es igual (*x*/*y*)ⁿ?

- A. *xⁿ*/*yⁿ*
- B. *xⁿyⁿ*
- C. *x*/*yⁿ*
- D. *xⁿ*/*y*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 66
**Subtema:** Exponentes enteros · Teorema 2.3.1 leyes de los exponentes

Teorema 2.3.1, leyes de los exponentes enteros: iv) (*x*/*y*)ⁿ = *xⁿ*/*yⁿ*.

### 103

En relación con el libro de Geometría Analítica, según la ley v) del Teorema 2.3.1, ¿a qué es igual *xᵐ*/*xⁿ*?

- A. *xᵐ⁻ⁿ*
- B. *xᵐ⁺ⁿ*
- C. *xᵐⁿ*
- D. *x*^(*m*/*n*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 66
**Subtema:** Exponentes enteros · Teorema 2.3.1 leyes de los exponentes

Teorema 2.3.1, leyes de los exponentes enteros: v) *xᵐ*/*xⁿ* = *xᵐ⁻ⁿ*.

### 104

De acuerdo con el libro de Geometría Analítica, un número real positivo escrito en la forma *a* × 10ⁿ está en notación científica; ¿qué condición cumple *a*?

- A. 1 ≤ *a* < 10, y *n* es un entero
- B. 0 < *a* < 1, y *n* es un entero
- C. *a* > 10, y *n* es un entero
- D. *a* es cualquier número real y *n* es un decimal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 67
**Subtema:** Exponentes enteros · notación científica

Cualquier número real positivo puede escribirse en la forma *a* × 10ⁿ, donde 1 ≤ *a* < 10 y *n* es un entero. Decimos que un número escrito así está en notación científica.

### 105

De conformidad con el libro de Geometría Analítica, si en *x* = *a* × 10ⁿ el número *a* contiene *k* lugares decimales, ¿cuántos dígitos significativos tiene *x*?

- A. *k* + 1 dígitos significativos
- B. *k* dígitos significativos
- C. *k* − 1 dígitos significativos
- D. 10*k* dígitos significativos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 67
**Subtema:** Exponentes enteros · dígitos significativos

Si *a* contiene *k* lugares decimales (es decir, *k* dígitos a la derecha del punto decimal), entonces se dice que *x* tiene *k* + 1 dígitos significativos.

### 106

En relación con el libro de Geometría Analítica, la ley iii) del Teorema 2.3.1 se extiende a más de dos variables; por ejemplo, ¿a qué es igual (*xyzw*)ⁿ?

- A. *xⁿyⁿzⁿwⁿ*
- B. *xⁿ* + *yⁿ* + *zⁿ* + *wⁿ*
- C. (*xyzw*)^(4*n*)
- D. *xyzwⁿ*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 66
**Subtema:** Exponentes enteros · Teorema 2.3.1 leyes de los exponentes

Además, iii) del teorema 2.3.1 se extiende a más de dos variables; por ejemplo, (*xyzw*)ⁿ = *xⁿyⁿzⁿwⁿ*.

---

## Sub-lote 6 · §2.4 Radicales (pp. 71–74)

### 107

De acuerdo con el libro de Geometría Analítica, ¿cómo se denominan los números que satisfacen ecuaciones exponenciales como *s*² = 25 o *x*³ = 64?

- A. Raíces
- B. Radicandos
- C. Índices
- D. Exponentes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · introducción

Los números que satisfacen estas ecuaciones exponenciales se denominan raíces.

### 108

De conformidad con el libro de Geometría Analítica, un número *s* que satisface la ecuación *s*² = 25, ¿cómo se llama?

- A. La raíz cuadrada de 25
- B. La raíz cúbica de 25
- C. El radicando de 25
- D. El índice de 25

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · introducción

Un número *s* que satisface la ecuación *s*² = 25 se llama la raíz cuadrada de 25, y un número *x* que satisface *x*³ = 64 es una raíz cúbica de 64.

### 109

En relación con el libro de Geometría Analítica, por convención, ¿qué representa el símbolo √ ?

- A. La raíz cuadrada principal, que es un número real no negativo
- B. La raíz cuadrada negativa
- C. Cualquiera de las dos raíces cuadradas
- D. El radicando

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · introducción

Por convención, el símbolo √ representa la raíz cuadrada principal, que es un número real no negativo. Así, √25 = 5.

### 110

De acuerdo con el libro de Geometría Analítica, según la Definición 2.4.1, si *x* > 0, ¿qué es la raíz *n*-ésima principal ⁿ√*x*?

- A. El número *r* positivo tal que *x* = *rⁿ*
- B. El número *r* negativo tal que *x* = *rⁿ*
- C. Un número que no es real
- D. Igual a 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · Definición 2.4.1 raíz n-ésima principal

Si *x* > 0, entonces la raíz *n*-ésima principal ⁿ√*x* es el número *r* positivo tal que *x* = *rⁿ*.

### 111

De conformidad con el libro de Geometría Analítica, según la Definición 2.4.1, si *x* < 0 y *n* es un entero positivo impar, ¿qué es la raíz *n*-ésima principal ⁿ√*x*?

- A. Un número *r* negativo tal que *x* = *rⁿ*
- B. Un número *r* positivo tal que *x* = *rⁿ*
- C. Un número que no es real
- D. Igual a 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · Definición 2.4.1 raíz n-ésima principal

Si *x* < 0 y *n* es un entero positivo impar, entonces la raíz *n*-ésima principal ⁿ√*x* es un número *r* negativo tal que *x* = *rⁿ*.

### 112

En relación con el libro de Geometría Analítica, según la Definición 2.4.1, si *x* < 0 y *n* es un entero positivo par, ¿qué ocurre con ⁿ√*x*?

- A. ⁿ√*x* no es un número real
- B. ⁿ√*x* es un número positivo
- C. ⁿ√*x* es un número negativo
- D. ⁿ√*x* = 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · Definición 2.4.1 raíz n-ésima principal

Si *x* < 0 y *n* es un entero positivo par, entonces ⁿ√*x* no es un número real.

### 113

De acuerdo con el libro de Geometría Analítica, según la Definición 2.4.1, si *x* = 0, ¿a qué es igual ⁿ√*x*?

- A. ⁿ√*x* = 0
- B. ⁿ√*x* = 1
- C. ⁿ√*x* no es un número real
- D. ⁿ√*x* = *n*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 71
**Subtema:** Radicales · Definición 2.4.1 raíz n-ésima principal

Si *x* = 0, entonces ⁿ√*x* = 0.

### 114

De conformidad con el libro de Geometría Analítica, la expresión ⁿ√*x* que representa la raíz *n*-ésima principal de *x*, ¿cómo se llama?

- A. Radical
- B. Radicando
- C. Índice
- D. Coeficiente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · terminología

La expresión ⁿ√*x* que representa la raíz *n*-ésima principal de *x* se llama radical, el entero *n* es el índice del radical y el número real *x* se llama radicando.

### 115

En relación con el libro de Geometría Analítica, en el radical ⁿ√*x*, ¿cómo se llama el entero *n*?

- A. El índice del radical
- B. El radicando
- C. El radical
- D. La base

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · terminología

La expresión ⁿ√*x* que representa la raíz *n*-ésima principal de *x* se llama radical, el entero *n* es el índice del radical y el número real *x* se llama radicando.

### 116

De acuerdo con el libro de Geometría Analítica, en el radical ⁿ√*x*, ¿cómo se llama el número real *x*?

- A. Radicando
- B. Índice
- C. Radical
- D. Exponente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · terminología

La expresión ⁿ√*x* que representa la raíz *n*-ésima principal de *x* se llama radical, el entero *n* es el índice del radical y el número real *x* se llama radicando.

### 117

De conformidad con el libro de Geometría Analítica, cuando *n* = 3, ¿cómo se llama ³√*x*?

- A. La raíz cúbica de *x*
- B. La raíz cuadrada de *x*
- C. El índice de *x*
- D. El radicando de *x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · terminología

Cuando *n* = 2, decimos que √*x* es la raíz cuadrada de *x* y cuando *n* = 3, decimos que ³√*x* es la raíz cúbica de *x*.

### 118

En relación con el libro de Geometría Analítica, si el índice *n* es un entero positivo impar, ¿cuántas raíces *n*-ésimas reales hay para cualquier valor de *x*?

- A. Exactamente una raíz *n*-ésima real
- B. Dos raíces *n*-ésimas reales
- C. Ninguna raíz *n*-ésima real
- D. Infinitas raíces *n*-ésimas reales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · número de raíces

Si el índice *n* es un entero positivo impar, se puede demostrar que para cualquier valor de *x* hay exactamente una raíz *n*-ésima real de *x*.

### 119

De acuerdo con el libro de Geometría Analítica, si el índice *n* es un entero positivo par y *x* es positivo, ¿cuántas raíces reales hay y para cuál se reserva el símbolo ⁿ√*x*?

- A. Hay dos raíces reales *n*-ésimas, y el símbolo ⁿ√*x* se reserva para la raíz *n*-ésima positiva (principal)
- B. Hay una sola raíz real, la negativa
- C. No hay raíces reales
- D. Hay dos raíces reales y ⁿ√*x* se reserva para la negativa

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · número de raíces

Si el índice *n* es un entero positivo par y *x* es positivo, entonces hay dos raíces reales *n*-ésimas de *x*. Sin embargo, el símbolo ⁿ√*x* se reserva para la raíz *n*-ésima positiva (principal); denotamos la raíz *n*-ésima negativa mediante −ⁿ√*x*.

### 120

De conformidad con el libro de Geometría Analítica, si *n* es par y *x* es negativo, ¿qué ocurre con la raíz *n*-ésima real de *x*?

- A. No hay raíz *n*-ésima real de *x*
- B. Hay exactamente una raíz *n*-ésima real
- C. Hay dos raíces *n*-ésimas reales
- D. La raíz es igual a 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · número de raíces

Si *n* es par y *x* es negativo, no hay raíz *n*-ésima real de *x*.

### 121

En relación con el libro de Geometría Analítica, una raíz par de un número negativo, por ejemplo √−5, ¿qué nombre recibe?

- A. Número complejo
- B. Número irracional
- C. Número indefinido
- D. Radicando negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · número complejo

Una raíz par de un número negativo, por ejemplo √−5, recibe el nombre de número complejo. Los números complejos se explican en la sección 3.4.

### 122

De acuerdo con el libro de Geometría Analítica, según la ley i) del Teorema 2.4.1, ¿a qué es igual (ⁿ√*x*)ⁿ?

- A. *x*
- B. |*x*|
- C. *xⁿ*
- D. *n*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · Teorema 2.4.1 leyes de los radicales

Teorema 2.4.1, leyes de los radicales: i) (ⁿ√*x*)ⁿ = *x*.

### 123

De conformidad con el libro de Geometría Analítica, según la ley ii) del Teorema 2.4.1, ¿a qué es igual ⁿ√(*xⁿ*)?

- A. *x* si *n* es impar, y |*x*| si *n* es par
- B. *x* siempre
- C. |*x*| siempre
- D. −*x* si *n* es par

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · Teorema 2.4.1 leyes de los radicales

Teorema 2.4.1, leyes de los radicales: ii) ⁿ√(*xⁿ*) = *x* si *n* es impar, |*x*| si *n* es par.

### 124

En relación con el libro de Geometría Analítica, según la ley iii) del Teorema 2.4.1, ¿a qué es igual ⁿ√(*xy*)?

- A. ⁿ√*x* · ⁿ√*y*
- B. ⁿ√*x* + ⁿ√*y*
- C. ⁿ√(*x* + *y*)
- D. ⁿ√*x* / ⁿ√*y*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · Teorema 2.4.1 leyes de los radicales

Teorema 2.4.1, leyes de los radicales: iii) ⁿ√(*xy*) = ⁿ√*x* ⁿ√*y*.

### 125

De acuerdo con el libro de Geometría Analítica, según la ley iv) del Teorema 2.4.1, ¿a qué es igual ⁿ√(*x*/*y*)?

- A. ⁿ√*x* / ⁿ√*y*
- B. ⁿ√*x* · ⁿ√*y*
- C. ⁿ√(*x* − *y*)
- D. ⁿ√*y* / ⁿ√*x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · Teorema 2.4.1 leyes de los radicales

Teorema 2.4.1, leyes de los radicales: iv) ⁿ√(*x*/*y*) = ⁿ√*x* / ⁿ√*y*.

### 126

De conformidad con el libro de Geometría Analítica, según la ley v) del Teorema 2.4.1, ¿a qué es igual ᵐ√(ⁿ√*x*)?

- A. ᵐⁿ√*x*
- B. (*m* + *n*)√*x*
- C. ⁿ√(ᵐ√*x*) sólo si *m* = *n*
- D. ᵐ√*x* · ⁿ√*x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 72
**Subtema:** Radicales · Teorema 2.4.1 leyes de los radicales

Teorema 2.4.1, leyes de los radicales: v) ᵐ√(ⁿ√*x*) = ᵐⁿ√*x*.

### 127

En relación con el libro de Geometría Analítica, cuando quitamos los radicales del numerador o del denominador de una fracción, ¿cómo se dice que estamos?

- A. Racionalizando
- B. Factorizando
- C. Simplificando el índice
- D. Conjugando

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 74
**Subtema:** Radicales · racionalización

Cuando quitamos los radicales del numerador o del denominador de una fracción, decimos que estamos racionalizando. En álgebra normalmente racionalizamos el denominador.

### 128

De acuerdo con el libro de Geometría Analítica, si una fracción contiene una expresión como √*x* + √*y*, ¿qué hecho se usa sobre su conjugado √*x* − √*y*?

- A. Que el producto de √*x* + √*y* y su conjugado √*x* − √*y* no contiene radicales
- B. Que la suma de √*x* + √*y* y su conjugado es cero
- C. Que su conjugado es igual a la expresión original
- D. Que el producto de una expresión y su conjugado duplica los radicales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 74
**Subtema:** Radicales · factor conjugado

Si una fracción contiene una expresión como √*x* + √*y*, usamos el hecho de que el producto de √*x* + √*y* y su conjugado √*x* − √*y* no contiene radicales.

---

## Sub-lote 7 · §2.5 Exponentes racionales (pp. 78–79)

### 129

De acuerdo con el libro de Geometría Analítica, ¿qué permite ampliar el concepto de la raíz *n*-ésima de un número?

- A. La definición de *xⁿ* de exponentes enteros a exponentes racionales
- B. La definición de la raíz cuadrada a la raíz cúbica
- C. La ley de tricotomía a los números complejos
- D. El valor absoluto a los números negativos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 78
**Subtema:** Exponentes racionales · introducción

El concepto de la raíz *n*-ésima de un número nos permite ampliar la definición de *xⁿ* de exponentes enteros a exponentes racionales.

### 130

De conformidad con el libro de Geometría Analítica, según la Definición 2.5.1, si ⁿ√*x* existe, ¿a qué es igual *x*^(1/*n*)?

- A. *x*^(1/*n*) = ⁿ√*x*
- B. *x*^(1/*n*) = *xⁿ*
- C. *x*^(1/*n*) = *n* · *x*
- D. *x*^(1/*n*) = |*x*|

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 78
**Subtema:** Exponentes racionales · Definición 2.5.1 potencia racional

Si ⁿ√*x* existe, entonces *x*^(1/*n*) = ⁿ√*x*.

### 131

En relación con el libro de Geometría Analítica, ¿qué es *x*^(1/*n*) según el inciso i) de la Definición 2.5.1?

- A. Simplemente otra forma de designar la raíz *n*-ésima principal de *x*
- B. El producto de *n* factores de *x*
- C. El recíproco de *xⁿ*
- D. El radicando de *x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 78
**Subtema:** Exponentes racionales · Definición 2.5.1 potencia racional

En el inciso i) de la definición 2.5.1, *x*^(1/*n*) es simplemente otra forma de designar la raíz *n*-ésima principal de *x*.

### 132

De acuerdo con el libro de Geometría Analítica, según la Definición 2.5.1, si ⁿ√*x* existe y *m*/*n* está en sus términos mínimos, ¿a qué es igual *x*^(*m*/*n*)?

- A. *x*^(*m*/*n*) = ⁿ√(*xᵐ*) = (ⁿ√*x*)ᵐ
- B. *x*^(*m*/*n*) = *xᵐ* · *xⁿ*
- C. *x*^(*m*/*n*) = *m* · ⁿ√*x*
- D. *x*^(*m*/*n*) = ⁿ√*x* + *m*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 78
**Subtema:** Exponentes racionales · Definición 2.5.1 potencia racional

Si ⁿ√*x* existe y *m* es cualquier entero tal que *m*/*n* está en sus términos mínimos, entonces *x*^(*m*/*n*) = ⁿ√(*xᵐ*) = (ⁿ√*x*)ᵐ.

### 133

De conformidad con el libro de Geometría Analítica, ¿qué significa que *m*/*n* esté en sus términos mínimos?

- A. Que *m* y *n* no tienen factores enteros comunes
- B. Que *m* y *n* son ambos positivos
- C. Que *m* es menor que *n*
- D. Que *n* es igual a 2

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 78
**Subtema:** Exponentes racionales · Definición 2.5.1 potencia racional

Términos mínimos significa que *m* y *n* no tienen factores enteros comunes.

### 134

En relación con el libro de Geometría Analítica, para calcular *x*^(*m*/*n*), ¿qué es por lo general más fácil?

- A. Obtener la raíz *n*-ésima del número *x* primero y luego elevarla a la potencia *m*, es decir, usar (ⁿ√*x*)ᵐ
- B. Elevar *x* a la potencia *m* primero y luego obtener la raíz *n*-ésima
- C. Multiplicar *x* por *m*/*n*
- D. Sumar la raíz *n*-ésima y la potencia *m*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 78
**Subtema:** Exponentes racionales · Definición 2.5.1 potencia racional

Por lo general es más fácil obtener la raíz *n*-ésima del número *x* en primer lugar y luego elevarla a la potencia *m*; en otras palabras, usamos (ⁿ√*x*)ᵐ.

### 135

De acuerdo con el libro de Geometría Analítica, las leyes de los exponentes presentadas para los exponentes enteros en el Teorema 2.3.1, ¿para qué otros exponentes también son verdaderas?

- A. Para los exponentes racionales
- B. Sólo para los exponentes negativos
- C. Sólo para el exponente cero
- D. Para ningún otro tipo de exponente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 79
**Subtema:** Exponentes racionales · leyes de los exponentes

Las leyes de los exponentes presentadas para los exponentes enteros en el teorema 2.3.1 de la sección 2.3 también son verdaderas para los exponentes racionales.

### 136

De conformidad con el libro de Geometría Analítica, según la ley i) del Teorema 2.5.1, ¿a qué es igual *xʳxˢ*?

- A. *xʳ⁺ˢ*
- B. *xʳˢ*
- C. *xʳ⁻ˢ*
- D. *xʳ* + *xˢ*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 79
**Subtema:** Exponentes racionales · Teorema 2.5.1 leyes de los exponentes racionales

Teorema 2.5.1, leyes de los exponentes racionales: i) *xʳxˢ* = *xʳ⁺ˢ*.

### 137

En relación con el libro de Geometría Analítica, según la ley ii) del Teorema 2.5.1, ¿a qué es igual (*xʳ*)ˢ?

- A. *xʳˢ* = (*xˢ*)ʳ
- B. *xʳ⁺ˢ*
- C. *xʳ⁻ˢ*
- D. *xʳ* · *xˢ*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 79
**Subtema:** Exponentes racionales · Teorema 2.5.1 leyes de los exponentes racionales

Teorema 2.5.1, leyes de los exponentes racionales: ii) (*xʳ*)ˢ = *xʳˢ* = (*xˢ*)ʳ.

### 138

De acuerdo con el libro de Geometría Analítica, según la ley iii) del Teorema 2.5.1, ¿a qué es igual (*xy*)ʳ?

- A. *xʳyʳ*
- B. *xʳ* + *yʳ*
- C. *x* · *yʳ*
- D. (*xy*)^(2*r*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 79
**Subtema:** Exponentes racionales · Teorema 2.5.1 leyes de los exponentes racionales

Teorema 2.5.1, leyes de los exponentes racionales: iii) (*xy*)ʳ = *xʳyʳ*.

### 139

De conformidad con el libro de Geometría Analítica, según la ley iv) del Teorema 2.5.1, ¿a qué es igual (*x*/*y*)ʳ?

- A. *xʳ*/*yʳ*
- B. *xʳyʳ*
- C. *x*/*yʳ*
- D. *yʳ*/*xʳ*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 79
**Subtema:** Exponentes racionales · Teorema 2.5.1 leyes de los exponentes racionales

Teorema 2.5.1, leyes de los exponentes racionales: iv) (*x*/*y*)ʳ = *xʳ*/*yʳ*.

### 140

En relación con el libro de Geometría Analítica, según la ley v) del Teorema 2.5.1, ¿a qué es igual *xʳ*/*xˢ*?

- A. *xʳ⁻ˢ*
- B. *xʳ⁺ˢ*
- C. *xʳˢ*
- D. *xˢ⁻ʳ*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 79
**Subtema:** Exponentes racionales · Teorema 2.5.1 leyes de los exponentes racionales

Teorema 2.5.1, leyes de los exponentes racionales: v) *xʳ*/*xˢ* = *xʳ⁻ˢ*.

---

## Sub-lote 8 · §2.5 Exponentes racionales — cierre (pp. 80–81)

### 141

De acuerdo con el libro de Geometría Analítica, para el resto de la sección 2.5, ¿qué se considera acerca de todas las bases variables *x*, *y*, *a*, *b*, etcétera?

- A. Que representan números positivos, de modo que todas las potencias racionales están definidas
- B. Que representan números enteros, de modo que todos los radicales son reales
- C. Que representan números diferentes de cero, de modo que todos los recíprocos existen
- D. Que representan números racionales, de modo que todos los exponentes son enteros

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 80
**Subtema:** Exponentes racionales · convención de bases positivas

Para el resto de esta sección consideramos que todas las bases variables *x*, *y*, *a*, *b*, etcétera, representan números positivos, de modo que todas las potencias racionales están definidas.

### 142

De conformidad con el libro de Geometría Analítica, además de para los exponentes racionales, ¿para qué otros exponentes también son verdaderas las leyes de los exponentes?

- A. Para los exponentes irracionales
- B. Sólo para los exponentes enteros positivos
- C. Únicamente para el exponente cero
- D. Para ninguno fuera de los racionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 81
**Subtema:** Exponentes racionales · leyes válidas para exponentes irracionales

Las leyes de los exponentes también son verdaderas para los exponentes irracionales.

---

## Sub-lote 9 · §2.6 Polinomios y productos notables — introducción y terminología (pp. 83–84)

### 143

De acuerdo con el libro de Geometría Analítica, cuando se usan letras como *x* o *y* para representar números, ¿cómo se llama cada uno de esos símbolos?

- A. Variable
- B. Coeficiente
- C. Constante
- D. Exponente

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 83
**Subtema:** Polinomios y productos notables · variable

Ya hemos encontrado práctico usar letras como *x* o *y* para representar números; cada símbolo se llama variable.

### 144

De conformidad con el libro de Geometría Analítica, ¿qué es una expresión algebraica?

- A. El resultado de llevar a cabo un número finito de sumas, restas, multiplicaciones, divisiones o raíces en un grupo de variables y números reales
- B. El resultado de sumar y restar únicamente monomios semejantes entre sí
- C. Cualquier igualdad planteada entre dos polinomios de la misma variable
- D. Una sucesión infinita de términos con exponentes crecientes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 83
**Subtema:** Polinomios y productos notables · expresión algebraica

Una expresión algebraica es el resultado de llevar a cabo un número finito de sumas, restas, multiplicaciones, divisiones o raíces en un grupo de variables y números reales.

### 145

En relación con el libro de Geometría Analítica, ¿cómo se llama el conjunto de valores permisibles para la variable?

- A. Dominio de la variable
- B. Rango de la variable
- C. Valor de la expresión
- D. Recorrido de la variable

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 83
**Subtema:** Polinomios y productos notables · dominio de la variable

El conjunto de valores permisibles para la variable se llama dominio de la variable.

### 146

De acuerdo con el libro de Geometría Analítica, si se sustituyen números específicos por las variables en una expresión algebraica, ¿cómo se llama el número real que resulta?

- A. Valor de la expresión
- B. Dominio de la expresión
- C. Grado de la expresión
- D. Coeficiente de la expresión

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 83
**Subtema:** Polinomios y productos notables · valor de la expresión

Si se sustituyen números específicos por las variables en una expresión algebraica, el número real que resulta se llama valor de la expresión.

### 147

De conformidad con el libro de Geometría Analítica, ¿qué es un monomio en una variable?

- A. Cualquier expresión algebraica de la forma *ax*ⁿ, donde *a* es un número real, *x* es una variable y *n* es un entero no negativo
- B. Cualquier expresión algebraica de la forma *ax*ⁿ, donde *a*, *x* y *n* son números reales cualesquiera
- C. La suma de dos o más términos que comparten la misma variable
- D. El cociente de dos expresiones algebraicas con denominador distinto de cero

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · monomio

Un monomio en una variable es cualquier expresión algebraica de la forma *ax*ⁿ, donde *a* es un número real, *x* es una variable y *n* es un entero no negativo.

### 148

En relación con el libro de Geometría Analítica, en el monomio *ax*ⁿ, ¿cómo se llama el número *a*?

- A. Coeficiente del monomio
- B. Grado del monomio
- C. Término constante
- D. Coeficiente principal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · coeficiente

El número *a* se llama coeficiente del monomio y *n* se denomina el grado.

### 149

De acuerdo con el libro de Geometría Analítica, en el monomio *ax*ⁿ, ¿cómo se denomina el exponente *n*?

- A. El grado
- B. El coeficiente
- C. La base
- D. El índice

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · grado del monomio

El número *a* se llama coeficiente del monomio y *n* se denomina el grado.

### 150

De conformidad con el libro de Geometría Analítica, ¿qué nombre recibe la suma de dos monomios?

- A. Binomio
- B. Trinomio
- C. Polinomio cero
- D. Monomio compuesto

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · binomio

La suma de dos monomios recibe el nombre de binomio.

### 151

En relación con el libro de Geometría Analítica, ¿cómo se llama la suma de tres monomios?

- A. Trinomio
- B. Binomio
- C. Polinomio cúbico
- D. Monomio triple

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · trinomio

La suma de tres monomios se llama trinomio.

### 152

De acuerdo con el libro de Geometría Analítica, ¿qué es un polinomio?

- A. Cualquier suma finita de monomios
- B. Cualquier suma infinita de monomios
- C. El producto de dos o más binomios
- D. Cualquier expresión con exponentes racionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · polinomio

Un polinomio es cualquier suma finita de monomios.

### 153

De conformidad con el libro de Geometría Analítica, según la Definición 2.6.1, ¿cuál es la forma de un polinomio de grado *n* en la variable *x*?

- A. *a*ₙ*x*ⁿ + *a*ₙ₋₁*x*ⁿ⁻¹ + ⋯ + *a*₂*x*² + *a*₁*x* + *a*₀, con *a*ₙ ≠ 0
- B. *a*ₙ*x*ⁿ + *a*ₙ₋₁*x*ⁿ⁻¹ + ⋯ + *a*₂*x*² + *a*₁*x* + *a*₀, con *a*ₙ = 0
- C. *a*ₙ*x*ⁿ · *a*ₙ₋₁*x*ⁿ⁻¹ ⋯ *a*₁*x* · *a*₀, con *a*ₙ ≠ 0
- D. *a*₀*x*ⁿ + *a*₁*x*ⁿ⁻¹ + ⋯ + *a*ₙ, con *a*₀ ≠ 0

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · Definición 2.6.1 polinomio

Un polinomio de grado *n* en la variable *x* es cualquier expresión algebraica de la forma *a*ₙ*x*ⁿ + *a*ₙ₋₁*x*ⁿ⁻¹ + ⋯ + *a*₂*x*² + *a*₁*x* + *a*₀, con *a*ₙ ≠ 0, donde *n* es un entero no negativo y *a*ᵢ, *i* = 0, 1…, *n* son números reales.

### 154

En relación con el libro de Geometría Analítica, ¿cómo se llama la expresión de un polinomio escrito en las potencias decrecientes de *x*?

- A. Forma estándar
- B. Forma factorizada
- C. Forma canónica reducida
- D. Forma desarrollada

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · forma estándar

La expresión (1) se llama forma estándar de un polinomio; es decir, el polinomio se escribe en las potencias decrecientes de *x*.

### 155

De acuerdo con el libro de Geometría Analítica, ¿cuál es el dominio de un polinomio?

- A. El conjunto de todos los números reales *R*
- B. El conjunto de todos los números reales no negativos
- C. El conjunto de todos los números enteros
- D. El conjunto de todos los números racionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · dominio de un polinomio

El dominio de un polinomio es el conjunto de todos los números reales *R*.

### 156

De conformidad con el libro de Geometría Analítica, ¿cómo se llaman los monomios *a*ᵢ*x*ⁱ que forman un polinomio?

- A. Términos del polinomio
- B. Factores del polinomio
- C. Raíces del polinomio
- D. Grados del polinomio

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · términos

Los monomios *a*ᵢ*x*ⁱ en el polinomio se llaman términos del polinomio.

### 157

En relación con el libro de Geometría Analítica, ¿cómo se llama el coeficiente *a*ₙ de la potencia más alta de *x* en un polinomio?

- A. Coeficiente principal
- B. Término constante
- C. Coeficiente del monomio
- D. Grado principal

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · coeficiente principal

El coeficiente *a*ₙ de la potencia más alta de *x* se llama coeficiente principal.

### 158

De acuerdo con el libro de Geometría Analítica, en un polinomio, ¿cómo se llama el número *a*₀?

- A. Término constante del polinomio
- B. Coeficiente principal
- C. Grado del polinomio
- D. Coeficiente de grado *n*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · término constante

El número *a*₀ se llama término constante del polinomio.

### 159

De conformidad con el libro de Geometría Analítica, si todos los coeficientes de un polinomio son cero, ¿cómo se llama el polinomio?

- A. Polinomio cero
- B. Polinomio constante
- C. Polinomio nulo de grado uno
- D. Polinomio unitario

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · polinomio cero

Si todos los coeficientes de un polinomio son cero, entonces el polinomio se llama polinomio cero y se representa con 0.

### 160

En relación con el libro de Geometría Analítica, al clasificar los polinomios según sus grados, ¿a cuál no se le ha asignado ningún grado?

- A. Al polinomio cero
- B. Al polinomio constante
- C. Al polinomio lineal
- D. Al polinomio de grado *n*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · el polinomio cero no tiene grado

Los polinomios pueden clasificarse según sus grados, aunque al polinomio cero no se le ha asignado ningún grado.

### 161

De acuerdo con el libro de Geometría Analítica, según la clasificación de los polinomios por su grado, ¿qué nombre recibe un polinomio de grado 2?

- A. Cuadrático
- B. Lineal
- C. Cúbico
- D. Constante

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 84
**Subtema:** Polinomios y productos notables · clasificación por grado

Se usan nombres especiales para describir los polinomios de menor grado: constante (grado 0), lineal (grado 1), cuadrático (grado 2) y cúbico (grado 3).

---

## Sub-lote 10 · §2.6 Polinomios y productos notables — el álgebra de los polinomios y los productos notables (pp. 85–88)

### 162

De acuerdo con el libro de Geometría Analítica, en cada término de un polinomio, ¿qué debe ser el exponente de la variable?

- A. Un entero no negativo
- B. Un entero cualquiera
- C. Un número racional
- D. Un número real positivo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 85
**Subtema:** Polinomios y productos notables · exponente entero no negativo

En cada término en un polinomio, el exponente de la variable debe ser un entero no negativo.

### 163

De conformidad con el libro de Geometría Analítica, ¿qué se puede afirmar acerca de la suma, la diferencia y el producto de dos polinomios?

- A. Es un polinomio
- B. Es siempre un binomio
- C. Puede no ser un polinomio
- D. Es una expresión racional

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 85
**Subtema:** Polinomios y productos notables · el álgebra de los polinomios

La suma, diferencia y producto de dos polinomios es un polinomio.

### 164

En relación con el libro de Geometría Analítica, ¿cómo podemos sumar dos polinomios en *x*?

- A. Mediante la suma de los coeficientes de potencias iguales
- B. Mediante la suma de todos los coeficientes, sin importar la potencia
- C. Multiplicando los coeficientes de potencias iguales
- D. Sumando los exponentes de los términos semejantes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 85
**Subtema:** Polinomios y productos notables · suma de polinomios

Podemos sumar dos polinomios en *x* mediante la suma de los coeficientes de potencias iguales.

### 165

De acuerdo con el libro de Geometría Analítica, ¿a qué es igual el producto de dos binomios (*ax* + *b*)(*cx* + *d*)?

- A. *acx*² + (*ad* + *bc*)*x* + *bd*
- B. *acx*² + (*ab* + *cd*)*x* + *bd*
- C. *acx*² + (*ad* − *bc*)*x* + *bd*
- D. (*ac* + *bd*)*x*² + (*ad* + *bc*)*x*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 86
**Subtema:** Polinomios y productos notables · producto de dos binomios

(*ax* + *b*)(*cx* + *d*) = *acx*² + (*ad* + *bc*)*x* + *bd*.

### 166

De conformidad con el libro de Geometría Analítica, ¿a qué es igual el cuadrado de un binomio (*x* + *a*)²?

- A. *x*² + 2*ax* + *a*²
- B. *x*² + *a*²
- C. *x*² + *ax* + *a*²
- D. *x*² + 2*a* + *a*²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 86
**Subtema:** Polinomios y productos notables · cuadrado de un binomio

El cuadrado de un binomio *x* + *a* es (*x* + *a*)² = *x*² + 2*ax* + *a*².

### 167

En relación con el libro de Geometría Analítica, ¿a qué es igual el cubo de un binomio (*x* + *a*)³?

- A. *x*³ + 3*ax*² + 3*a*²*x* + *a*³
- B. *x*³ + *a*³
- C. *x*³ + 3*a*²*x*² + 3*ax* + *a*³
- D. *x*³ + 2*ax*² + 2*a*²*x* + *a*³

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 86
**Subtema:** Polinomios y productos notables · cubo de un binomio

El cubo de un binomio *x* + *a* es (*x* + *a*)³ = *x*³ + 3*ax*² + 3*a*²*x* + *a*³.

### 168

De acuerdo con el libro de Geometría Analítica, el producto de un binomio *x* + *a* y su conjugado *x* − *a* produce la diferencia de dos cuadrados. ¿A qué es igual (*x* + *a*)(*x* − *a*)?

- A. *x*² − *a*²
- B. *x*² + *a*²
- C. *x*² − 2*ax* + *a*²
- D. *x*² − *ax* − *a*²

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 87
**Subtema:** Polinomios y productos notables · diferencia de dos cuadrados

Se observa de inmediato que el producto de un binomio *x* + *a* y su conjugado *x* − *a* produce la diferencia de dos cuadrados: (*x* + *a*)(*x* − *a*) = *x*² − *a*².

### 169

De conformidad con el libro de Geometría Analítica, en el método PEIU para multiplicar dos binomios, ¿qué palabras representan las letras P, E, I y U?

- A. Primero, exterior, interior y último
- B. Producto, exponente, índice y unidad
- C. Positivo, entero, impar y único
- D. Primero, extremo, intermedio y usual

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 87
**Subtema:** Polinomios y productos notables · método PEIU

Las letras P, E, I y U son, respectivamente, las primeras letras de las palabras primero, exterior, interior y último.

### 170

En relación con el libro de Geometría Analítica, en los productos notables (3), (4) y (5), ¿qué se debe tener presente acerca de los símbolos *x* y *a*?

- A. Que pueden sustituirse con otra variable, un número o una expresión más complicada
- B. Que sólo pueden representar números reales positivos
- C. Que deben ser siempre monomios de grado uno
- D. Que no pueden sustituirse por expresiones con radicales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 87
**Subtema:** Polinomios y productos notables · sustitución en los productos notables

En cada uno de los productos notables (3), (4) y (5), tenga presente que los símbolos *x* y *a* pueden sustituirse con otra variable, un número o una expresión más complicada.

### 171

De acuerdo con el libro de Geometría Analítica, ¿qué es un polinomio en dos variables *x* y *y*?

- A. Una suma de monomios de la forma *ax*ⁿ*y*ᵐ, donde *a* es un número real, y *n* y *m* son enteros no negativos
- B. Una suma de monomios de la forma *ax*ⁿ*y*ᵐ, donde *a*, *n* y *m* son números reales cualesquiera
- C. El producto de dos polinomios, cada uno en una variable distinta
- D. Una suma de monomios de la forma *ax*ⁿ*y*ᵐ, donde *n* y *m* son enteros negativos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 88
**Subtema:** Polinomios y productos notables · polinomio en dos variables

Un polinomio en dos variables *x* y *y* es una suma de monomios (o términos) de la forma *ax*ⁿ*y*ᵐ, donde *a* es un número real, *x* y *y* son variables, y *n* y *m* son enteros no negativos.

### 172

De conformidad con el libro de Geometría Analítica, ¿de qué forma son los monomios cuya suma constituye un polinomio en tres variables *x*, *y* y *z*?

- A. *ax*ⁿ*y*ᵐ*z*ᵏ, donde *n*, *m* y *k* son enteros no negativos
- B. *ax*ⁿ*y*ᵐ*z*ᵏ, donde *n*, *m* y *k* son enteros negativos
- C. *ax*ⁿ*y*ᵐ*z*ᵏ, donde *n*, *m* y *k* son números racionales
- D. *a*(*x* + *y* + *z*)ⁿ, donde *n* es un entero no negativo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 88
**Subtema:** Polinomios y productos notables · polinomio en tres variables

Un polinomio en tres variables *x*, *y* y *z* es la suma de monomios de la forma *ax*ⁿ*y*ᵐ*z*ᵏ, donde *n*, *m* y *k* son enteros no negativos.

---

## Sub-lote 11 · §2.6 Polinomios y productos notables — suma y diferencia de cubos y notas de cierre (pp. 89–90)

> **OJO — errata del libro en las fórmulas (6) y (7).** Los dos reactivos siguientes usan la forma
> **correcta** (*a*²), no la impresa (*a*³). El detalle está en el aviso al aspirante, al final del archivo.

### 173

De acuerdo con el libro de Geometría Analítica, ¿cuál es la fórmula de la suma de dos cubos?

- A. (*x* + *a*)(*x*² − *ax* + *a*²) = *x*³ + *a*³
- B. (*x* + *a*)(*x*² + *ax* + *a*²) = *x*³ + *a*³
- C. (*x* + *a*)(*x*² − *ax* − *a*²) = *x*³ + *a*³
- D. (*x* − *a*)(*x*² − *ax* + *a*²) = *x*³ + *a*³

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 89
**Subtema:** Polinomios y productos notables · suma de dos cubos

El libro comprueba esta identidad en el Ejemplo 11 escribiéndola bien: (*x* + *y*)(*x*² − *xy* + *y*²) = *x*³ + *y*³. La fórmula (7) impresa trae una errata (*a*³ en vez de *a*²); la forma correcta es (*x* + *a*)(*x*² − *ax* + *a*²) = *x*³ + *a*³. Ver el aviso al aspirante.

### 174

De conformidad con el libro de Geometría Analítica, ¿cuál es la fórmula de la diferencia de dos cubos?

- A. (*x* − *a*)(*x*² + *ax* + *a*²) = *x*³ − *a*³
- B. (*x* − *a*)(*x*² − *ax* + *a*²) = *x*³ − *a*³
- C. (*x* − *a*)(*x*² + *ax* − *a*²) = *x*³ − *a*³
- D. (*x* + *a*)(*x*² + *ax* + *a*²) = *x*³ − *a*³

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 89
**Subtema:** Polinomios y productos notables · diferencia de dos cubos

La fórmula (6) impresa trae una errata (*a*³ en vez de *a*²); la forma correcta de la diferencia de dos cubos es (*x* − *a*)(*x*² + *ax* + *a*²) = *x*³ − *a*³, análoga a la suma de cubos que el libro comprueba en el Ejemplo 11. Ver el aviso al aspirante.

### 175

En relación con el libro de Geometría Analítica, ¿en qué son probablemente más importantes las fórmulas de la suma y la diferencia de cubos?

- A. En la factorización de polinomios que como fórmulas para realizar una multiplicación
- B. En la división de polinomios que en la factorización
- C. En la suma de polinomios que en el producto de polinomios
- D. En el cálculo de raíces que en la factorización

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 89
**Subtema:** Polinomios y productos notables · utilidad de las fórmulas de cubos

Las fórmulas (6) y (7) son probablemente más importantes en la factorización de polinomios que como fórmulas que deben recordarse para realizar una multiplicación.

### 176

De acuerdo con el libro de Geometría Analítica, por ser más complicada, ¿dónde se explica la división de dos polinomios?

- A. En el capítulo 6
- B. En el capítulo 3
- C. En la sección 2.7
- D. En la sección 7.1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 89
**Subtema:** Polinomios y productos notables · división de polinomios

La división de dos polinomios es más complicada y se explica en el capítulo 6.

### 177

De conformidad con el libro de Geometría Analítica (Notas del aula), al restar polinomios en el formato horizontal, ¿qué es necesario hacer para aplicar la propiedad distributiva?

- A. Cambiar el signo de cada término del polinomio que se resta
- B. Cambiar el signo únicamente del primer término del polinomio que se resta
- C. Cambiar el signo de cada término del primer polinomio
- D. Conservar los signos y alinear los términos en un formato vertical

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 90
**Subtema:** Polinomios y productos notables · resta de polinomios (Notas del aula)

Un error muy común cuando se restan polinomios en el formato horizontal consiste en no aplicar la propiedad distributiva. Es necesario cambiar el signo de cada término del polinomio que se resta.

---

## Sub-lote 12 · §2.7 Factorización de polinomios — factor común, agrupación y polinomios cuadráticos (pp. 92–94)

### 178

De acuerdo con el libro de Geometría Analítica, cuando se escribe un polinomio como producto de otros polinomios, ¿cómo se llama ese proceso?

- A. Factorización
- B. Simplificación
- C. Racionalización
- D. Sustitución

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 92
**Subtema:** Factorización de polinomios · definición de factorización

Tratamos de escribir un polinomio como producto de otros polinomios. Este proceso se llama factorización, y cada polinomio en el producto se llama factor del polinomio original.

### 179

De conformidad con el libro de Geometría Analítica, en la factorización, ¿cómo se llama cada uno de los polinomios que forman el producto?

- A. Factor del polinomio original
- B. Término del polinomio original
- C. Coeficiente del polinomio original
- D. Divisor común del polinomio original

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 92
**Subtema:** Factorización de polinomios · factor

Este proceso se llama factorización, y cada polinomio en el producto se llama factor del polinomio original.

### 180

En relación con el libro de Geometría Analítica, al factorizar, ¿qué factores polinomiales buscamos generalmente?

- A. Factores polinomiales de grado 1 o mayores
- B. Factores polinomiales de grado 0
- C. Factores polinomiales de grado 2 exactamente
- D. Factores con exponentes racionales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 92
**Subtema:** Factorización de polinomios · grado de los factores

Generalmente, buscamos factores polinomiales de grado 1 o mayores.

### 181

De acuerdo con el libro de Geometría Analítica, ¿cuál es el primer paso en la factorización de cualquier expresión algebraica?

- A. Determinar si los términos tienen un factor común
- B. Aplicar la fórmula de la diferencia de dos cuadrados
- C. Sustituir la variable por un número
- D. Ordenar los términos en potencias crecientes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 92
**Subtema:** Factorización de polinomios · primer paso (factor común)

En general, el primer paso en la factorización de cualquier expresión algebraica es determinar si los términos tienen un factor común.

### 182

De conformidad con el libro de Geometría Analítica, cuando los términos de una expresión no tienen un factor común, ¿cómo podrían aún factorizarse?

- A. Agrupando los términos de manera apropiada
- B. Elevando cada término al cuadrado
- C. Multiplicando la expresión por su conjugado
- D. Sustituyendo los términos por sus recíprocos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 92
**Subtema:** Factorización de polinomios · agrupación

Cuando los términos de una expresión no tienen un factor común, aún podrían factorizarse agrupando los términos de manera apropiada.

### 183

En relación con el libro de Geometría Analítica, a veces es posible factorizar un polinomio cuadrático *ax*² + *bx* + *c* (con *a*, *b* y *c* enteros), ¿en qué forma?

- A. (*Ax* + *B*)(*Cx* + *D*), donde *A*, *B*, *C* y *D* son también enteros
- B. (*Ax* + *B*)(*Cx* + *D*), donde *A*, *B*, *C* y *D* son números reales cualesquiera
- C. (*Ax* + *B*) + (*Cx* + *D*), donde *A*, *B*, *C* y *D* son enteros
- D. *A*(*x* + *B*)(*x* + *C*), donde *A*, *B* y *C* son enteros

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 93
**Subtema:** Factorización de polinomios · polinomios cuadráticos

A veces es posible factorizar los polinomios cuadráticos *ax*² + *bx* + *c*, donde *a*, *b* y *c* son enteros, como (*Ax* + *B*)(*Cx* + *D*), donde *A*, *B*, *C* y *D* son también enteros.

### 184

De acuerdo con el libro de Geometría Analítica, al factorizar *x*² + *bx* + *c* como (*x* + *B*)(*x* + *D*) con coeficientes enteros, ¿qué deben cumplir *B* y *D*?

- A. *B* + *D* = *b* y *BD* = *c*
- B. *B* + *D* = *c* y *BD* = *b*
- C. *B* − *D* = *b* y *BD* = *c*
- D. *B* + *D* = *b* y *B*/*D* = *c*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 93
**Subtema:** Factorización de polinomios · cuadrático con coeficiente principal 1

Al hallar el producto y al comparar los coeficientes vemos que *B* + *D* = *b* y *BD* = *c*.

### 185

De conformidad con el libro de Geometría Analítica, para factorizar *x*² + *bx* + *c* con coeficientes enteros, después de listar las factorizaciones de *c* como producto de dos enteros *B* y *D*, ¿qué se comprueba?

- A. Cuál de las sumas *B* + *D* es igual a *b*
- B. Cuál de los productos *B* · *D* es igual a *b*
- C. Cuál de las diferencias *B* − *D* es igual a *c*
- D. Cuál factorización tiene el mayor valor de *B*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 93
**Subtema:** Factorización de polinomios · método de factorización del cuadrático

Para factorizar *x*² + *bx* + *c* con coeficientes enteros hacemos una lista de todas las factorizaciones posibles de *c* como producto de dos enteros *B* y *D*. Luego comprobamos cuál de las sumas de *B* + *D* es igual a *b*.

### 186

En relación con el libro de Geometría Analítica, ¿cómo es siempre posible comprobar una factorización?

- A. Mediante la multiplicación de los factores
- B. Mediante la división de los factores
- C. Sustituyendo la variable por cero
- D. Sumando los factores

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 93
**Subtema:** Factorización de polinomios · comprobación

Observe que siempre es posible comprobar una factorización mediante la multiplicación de los factores.

### 187

De acuerdo con el libro de Geometría Analítica, para factorizar el polinomio cuadrático general *ax*² + *bx* + *c* (con *a* ≠ 1) como (*Ax* + *B*)(*Cx* + *D*), ¿qué deben satisfacer los coeficientes?

- A. *AC* = *a*, *AD* + *BC* = *b*, *BD* = *c*
- B. *AC* = *c*, *AD* + *BC* = *b*, *BD* = *a*
- C. *A* + *C* = *a*, *AD* + *BC* = *b*, *B* + *D* = *c*
- D. *AC* = *a*, *AB* + *CD* = *b*, *BD* = *c*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 94
**Subtema:** Factorización de polinomios · cuadrático general (a ≠ 1)

Vemos que *ax*² + *bx* + *c* se factoriza como (*Ax* + *B*)(*Cx* + *D*) si hallamos enteros que satisfagan *AC* = *a*, *AD* + *BC* = *b*, *BD* = *c*.

### 188

De conformidad con el libro de Geometría Analítica, ¿a qué polinomios de dos variables se puede aplicar el método general de factorización de cuadráticos?

- A. A los de la forma *ax*² + *bxy* + *cy*², donde *a*, *b* y *c* son enteros
- B. A los de la forma *ax*² + *by*² + *c*, donde *a*, *b* y *c* son enteros
- C. A los de la forma *ax*³ + *bxy* + *cy*³, donde *a*, *b* y *c* son enteros
- D. A los de la forma *ax*² + *bxy* + *cy*² sólo cuando *a* = 1

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 94
**Subtema:** Factorización de polinomios · cuadrático en dos variables

Este método general se puede aplicar a polinomios de dos variables *x* y *y* de la forma *ax*² + *bxy* + *cy*², donde *a*, *b* y *c* son enteros.

---

## Sub-lote 13 · §2.7 Factorización de polinomios — fórmulas de factorización y factorización total (pp. 95–96)

### 189

De acuerdo con el libro de Geometría Analítica, ¿cómo se obtienen las fórmulas de factorización?

- A. Invirtiendo las fórmulas de los productos notables de la sección 2.6
- B. Derivando las fórmulas de los productos notables de la sección 2.6
- C. Sumando las fórmulas de los productos notables de la sección 2.6
- D. Elevando al cuadrado las fórmulas de los productos notables de la sección 2.6

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 95
**Subtema:** Factorización de polinomios · fórmulas de factorización

Si invertimos las fórmulas de los productos notables de la sección 2.6 obtenemos las siguientes fórmulas de factorización importantes.

### 190

De conformidad con el libro de Geometría Analítica, según la fórmula de factorización del cuadrado perfecto, ¿a qué es igual *x*² + 2*ax* + *a*²?

- A. (*x* + *a*)²
- B. (*x* − *a*)²
- C. (*x* + *a*)(*x* − *a*)
- D. (*x* + *a*)³

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 95
**Subtema:** Factorización de polinomios · cuadrado perfecto

Cuadrado perfecto: *x*² + 2*ax* + *a*² = (*x* + *a*)².

### 191

De acuerdo con el libro de Geometría Analítica, según la fórmula de factorización, ¿a qué es igual la diferencia de dos cuadrados *x*² − *a*²?

- A. (*x* + *a*)(*x* − *a*)
- B. (*x* − *a*)²
- C. (*x* + *a*)²
- D. (*x* − *a*)(*x*² + *ax* + *a*²)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 95
**Subtema:** Factorización de polinomios · diferencia de dos cuadrados

Diferencia de dos cuadrados: *x*² − *a*² = (*x* + *a*)(*x* − *a*).

### 192

En relación con el libro de Geometría Analítica, según la fórmula de factorización, ¿a qué es igual la diferencia de dos cubos *x*³ − *a*³?

- A. (*x* − *a*)(*x*² + *ax* + *a*²)
- B. (*x* + *a*)(*x*² − *ax* + *a*²)
- C. (*x* − *a*)(*x*² − *ax* + *a*²)
- D. (*x* − *a*)³

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 95
**Subtema:** Factorización de polinomios · diferencia de dos cubos

Diferencia de dos cubos: *x*³ − *a*³ = (*x* − *a*)(*x*² + *ax* + *a*²). (En §2.7 el libro escribe esta fórmula correctamente, con *a*²; ver el aviso al aspirante sobre la errata de la fórmula equivalente en §2.6.)

### 193

De conformidad con el libro de Geometría Analítica, según la fórmula de factorización, ¿a qué es igual la suma de dos cubos *x*³ + *a*³?

- A. (*x* + *a*)(*x*² − *ax* + *a*²)
- B. (*x* − *a*)(*x*² + *ax* + *a*²)
- C. (*x* + *a*)(*x*² + *ax* + *a*²)
- D. (*x* + *a*)³

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 95
**Subtema:** Factorización de polinomios · suma de dos cubos

Suma de dos cubos: *x*³ + *a*³ = (*x* + *a*)(*x*² − *ax* + *a*²). (En §2.7 el libro escribe esta fórmula correctamente, con *a*²; ver el aviso al aspirante sobre la errata de la fórmula equivalente en §2.6.)

### 194

De acuerdo con el libro de Geometría Analítica, ¿qué indican las fórmulas (4) a (6) acerca de la diferencia de dos cuadrados y la suma y diferencia de dos cubos?

- A. Que siempre se pueden factorizar, en tanto no limitemos los coeficientes a enteros
- B. Que sólo se pueden factorizar cuando los coeficientes son enteros
- C. Que nunca se pueden factorizar con números reales
- D. Que sólo se pueden factorizar si son cuadrados perfectos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 96
**Subtema:** Factorización de polinomios · factorización con coeficientes no enteros

Las fórmulas (4) a (6) indican que la diferencia de dos cuadrados y la suma y diferencia de dos cubos siempre se pueden factorizar, en tanto no limitemos los coeficientes a enteros.

### 195

De conformidad con el libro de Geometría Analítica, ¿qué significa que una expresión esté factorizada totalmente?

- A. Que ninguno de los factores se puede factorizar en polinomios de grado 1 o mayor con coeficientes enteros
- B. Que todos los factores son de grado 1
- C. Que la expresión tiene un solo factor
- D. Que todos los coeficientes de los factores son enteros positivos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 96
**Subtema:** Factorización de polinomios · factorización total

Necesitamos que una expresión sea factorizada totalmente, es decir, hasta que ninguno de los factores se puedan factorizar en polinomios de grado 1 o mayor con coeficientes enteros.

---

## Sub-lote 14 · §2.8 Expresiones racionales — definición, dominio y propiedades de las fracciones (pp. 98–99)

### 196

De acuerdo con el libro de Geometría Analítica, ¿cómo se llama el cociente de dos polinomios?

- A. Expresión racional
- B. Expresión fraccionaria
- C. Monomio
- D. Expresión radical

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 98
**Subtema:** Expresiones racionales · definición

El cociente de dos polinomios se llama expresión racional.

### 197

De conformidad con el libro de Geometría Analítica, cuando un polinomio se divide entre otro, ¿qué se puede afirmar del resultado?

- A. No es necesariamente un polinomio
- B. Siempre es un polinomio
- C. Siempre es un monomio
- D. Nunca es un número real

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 98
**Subtema:** Expresiones racionales · cociente de polinomios

Cuando un polinomio se divide entre otro, el resultado no es necesariamente un polinomio.

### 198

En relación con el libro de Geometría Analítica, ¿de qué consta el dominio de la variable en una expresión racional?

- A. De todos los números reales para los que el valor del denominador es diferente de cero
- B. De todos los números reales para los que el valor del numerador es diferente de cero
- C. De todos los números reales sin excepción
- D. De todos los números enteros para los que el denominador es positivo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 98
**Subtema:** Expresiones racionales · dominio

El dominio de la variable en una expresión racional consta de todos los números reales para los que el valor del denominador es diferente de cero.

### 199

De acuerdo con el libro de Geometría Analítica, según la propiedad de cancelación, ¿a qué es igual *ac*/*bc* (con *c* ≠ 0)?

- A. *a*/*b*
- B. *a*/*c*
- C. *ab*/*c*
- D. (*a* + *c*)/(*b* + *c*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 99
**Subtema:** Expresiones racionales · propiedad de cancelación

Cancelación: *ac*/*bc* = *a*/*b*, *c* ≠ 0.

### 200

De conformidad con el libro de Geometría Analítica, según la propiedad de suma o resta de fracciones, ¿a qué es igual *a*/*b* ± *c*/*b*?

- A. (*a* ± *c*)/*b*
- B. (*a* ± *c*)/(2*b*)
- C. (*a* ± *c*)/*b*²
- D. *ac*/*b*

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 99
**Subtema:** Expresiones racionales · suma o resta de fracciones

Suma o resta: *a*/*b* ± *c*/*b* = (*a* ± *c*)/*b*.

### 201

En relación con el libro de Geometría Analítica, según la propiedad de multiplicación de fracciones, ¿a qué es igual (*a*/*b*) · (*c*/*d*)?

- A. *ac*/*bd*
- B. *ad*/*bc*
- C. (*a* + *c*)/(*b* + *d*)
- D. *ac*/(*b* + *d*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 99
**Subtema:** Expresiones racionales · multiplicación de fracciones

Multiplicación: (*a*/*b*) · (*c*/*d*) = *ac*/*bd*.

### 202

De acuerdo con el libro de Geometría Analítica, según la propiedad de división de fracciones, ¿a qué es igual (*a*/*b*) ÷ (*c*/*d*)?

- A. (*a*/*b*) · (*d*/*c*) = *ad*/*bc*
- B. (*a*/*b*) · (*c*/*d*) = *ac*/*bd*
- C. *ac*/*bd*
- D. (*a* · *c*)/(*b* · *d*)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 99
**Subtema:** Expresiones racionales · división de fracciones

División: (*a*/*b*) ÷ (*c*/*d*) = (*a*/*b*) · (*d*/*c*) = *ad*/*bc*.

### 203

De conformidad con el libro de Geometría Analítica, ¿bajo qué condición son válidas las propiedades frecuentes de las fracciones (cancelación, suma, multiplicación y división)?

- A. Siempre que cada denominador sea diferente de cero
- B. Siempre que cada numerador sea diferente de cero
- C. Sólo cuando los denominadores son iguales entre sí
- D. Sólo cuando los numeradores son números enteros

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 99
**Subtema:** Expresiones racionales · condición de las propiedades

Estas propiedades son válidas siempre que cada denominador sea diferente de cero.

### 204

En relación con el libro de Geometría Analítica, para simplificar una expresión racional, ¿qué se hace?

- A. Factorizar el numerador y el denominador y cancelar los factores comunes usando la propiedad de cancelación
- B. Sumar el numerador y el denominador y dividir el resultado entre dos
- C. Elevar al cuadrado el numerador y el denominador
- D. Multiplicar el numerador y el denominador por su conjugado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 99
**Subtema:** Expresiones racionales · simplificación

Factorizamos el numerador y el denominador y cancelamos los factores comunes usando la propiedad de cancelación.

---

## Sub-lote 15 · §2.8 Expresiones racionales — mínimo común denominador, operaciones y expresiones fraccionarias (pp. 100–102)

### 205

De acuerdo con el libro de Geometría Analítica, para sumar o restar expresiones racionales, ¿qué se hace primero?

- A. Hallar un común denominador y luego aplicar la propiedad de suma o resta
- B. Multiplicar los numeradores entre sí
- C. Cancelar los factores comunes de cada numerador
- D. Elevar cada fracción al cuadrado

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 100
**Subtema:** Expresiones racionales · suma y resta

Para sumar o restar expresiones racionales procedemos exactamente como cuando sumamos o restamos fracciones. Primero hallamos un común denominador y luego aplicamos la propiedad ii).

### 206

De conformidad con el libro de Geometría Analítica, ¿cómo se encuentra el mínimo común denominador (MCD)?

- A. Mediante la factorización completa de cada denominador y la formación de un producto de los diferentes factores, usando cada factor con el exponente más alto con el cual ocurra en cualquier denominador individual
- B. Multiplicando entre sí todos los denominadores dados
- C. Sumando todos los denominadores dados
- D. Tomando el denominador de mayor valor numérico

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 100
**Subtema:** Expresiones racionales · mínimo común denominador (MCD)

El mínimo común denominador (MCD) se encuentra mediante la factorización completa de cada denominador y la formación de un producto de los diferentes factores, usando cada factor con el exponente más alto con el cual ocurra en cualquier denominador individual.

### 207

En relación con el libro de Geometría Analítica, aunque cualquier común denominador servirá para sumar o restar expresiones racionales, ¿con cuál será menor el trabajo?

- A. Con el mínimo común denominador (MCD)
- B. Con el producto de todos los denominadores
- C. Con el mayor de los denominadores
- D. Con el numerador común

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 100
**Subtema:** Expresiones racionales · utilidad del MCD

Aunque cualquier común denominador servirá, el trabajo será menor si usamos el mínimo común denominador (MCD).

### 208

De acuerdo con el libro de Geometría Analítica, para multiplicar o dividir expresiones racionales, ¿qué se hace?

- A. Aplicar la propiedad de multiplicación o la de división y luego simplificar
- B. Hallar el mínimo común denominador y luego sumar
- C. Factorizar y cancelar sin aplicar ninguna propiedad de las fracciones
- D. Igualar los denominadores y restar los numeradores

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 101
**Subtema:** Expresiones racionales · multiplicación y división

Para multiplicar o dividir expresiones racionales, aplicamos la propiedad iii) o la iv) y luego simplificamos.

### 209

De conformidad con el libro de Geometría Analítica, ¿cómo se llama un cociente de dos expresiones algebraicas que no son polinomios?

- A. Expresión fraccionaria
- B. Expresión racional
- C. Polinomio racional
- D. Fracción parcial

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 102
**Subtema:** Expresiones racionales · expresión fraccionaria

Un cociente de dos expresiones algebraicas que no son polinomios, como (√*x* − 1)/(∛*x* + 1), se llama expresión fraccionaria.

### 210

En relación con el libro de Geometría Analítica, ¿cuál es otro método para simplificar una expresión fraccionaria compleja?

- A. Multiplicar tanto el numerador como el denominador por el MCD de los denominadores de todas las fracciones que ocurran en la fracción compleja
- B. Sumar el numerador y el denominador y dividir el resultado entre el MCD
- C. Elevar al cuadrado la fracción compleja
- D. Sustituir cada fracción por su recíproco

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 102
**Subtema:** Expresiones racionales · fracción compleja (método del MCD)

Otro método para simplificar una expresión fraccionaria compleja es multiplicar tanto el numerador como el denominador por el MCD de los denominadores de todas las fracciones que ocurran en la fracción compleja.
