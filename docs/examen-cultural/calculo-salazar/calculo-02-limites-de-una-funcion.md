# Cálculo · Unidad 2 · Límites de una función para analizar su comportamiento

**Libro:** Salazar, Bahena y Velázquez · *Cálculo. Teoría y aplicaciones* (Patria, 1.ª ed. 2020) · **Unidad 2 → EN CURSO**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Esta Unidad la pide la **EMT** (Escuela Militar de
> Transmisiones) dentro de su materia *Cálculo Diferencial* (`CÁLDIF-01-2026`), que
> reclama de este libro las **Unidades 1, 2 y 3**, las tres "Completo". Las líneas
> `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con que el
> temario los manda a llamar. La **Unidad 1** (misma materia, mismo libro) ya está
> cerrada en [`calculo-01-conceptos-esenciales-funciones.md`](calculo-01-conceptos-esenciales-funciones.md);
> los números de reactivo de este archivo **continúan la numeración desde el 108**
> para que no se dupliquen entre los dos archivos.

## Libro

Salazar Guerrero, Ludwing Javier; Bahena Román, Hugo; Velázquez Reyes, Luis Simón.
*Cálculo. Teoría y aplicaciones*. **Grupo Editorial Patria, S.A. de C.V.**,
**primera edición, 2020**. ISBN ebook 978-607-550-272-4. Edición ya verificada en la
Unidad 1 contra la página legal — mismo PDF, no se repite la verificación aquí.

**Desfase de páginas:** el mismo que en la Unidad 1, **hoja = página impresa + 5**.
Reverificado en esta Unidad: hoja 68 = p.63 (folio visible), hoja 72 = p.67. **Las
páginas se leen de la hoja, nunca se calculan.**

## Método para este libro

Mismo método que la Unidad 1: **el PDF es escaneo puro, sin capa de texto.** Se
trabaja con **`render.py`** y lectura a ojo; para cifras y fórmulas, recorte con
`crop.py` a 800 dpi antes de fijarlas en un reactivo.

## Alcance del temario

El temario `CÁLDIF-01-2026` de la EMT pide esta Unidad **completa**. Según el índice
del libro (p.4), la Unidad 2 cubre:

- **2.1 Idea intuitiva de límite** (p.67).
- **2.2 Teoremas de límites** (p.74): a) Suma, producto y cociente cuando los límites
  existen (p.74), b) Suma y producto cuando algún límite es infinito o menos infinito
  (p.82), c) Suma y producto cuando algún límite no existe (p.89).
- **2.3 Continuidad puntual y global para funciones definidas en un intervalo o en
  una unión de intervalos** (p.92).

La Unidad 2 termina donde arranca la Unidad 3 (p.99, archivo propio).

## Portadilla y frente de la Unidad, sin reactivos (pp. 60-66)

La Unidad 2 abre con **tres páginas sin materia**, igual que cerró la Unidad 1: la
**p.60** es "Objetivo específico" más una semblanza biográfica de **Gottfried
Wilhelm Leibniz** (recuadro histórico, no se pregunta); la **p.61** es la portadilla
con el título y el listado completo de "Contenidos conceptuales, procedimentales y
actitudinales" (2.1 a 2.13); las **pp. 62-63** son la "Introducción" a la Unidad y la
"Evaluación diagnóstica" (repaso de factorización y álgebra, ya visto en otras
materias); las **pp. 63-66** son la "Unidad integradora · Deduce y aprende" —una
práctica de equipo, "Perímetro de una circunferencia", con compás y transportador,
más su secuencia didáctica y rúbrica—. Todo esto cae en el mismo criterio ya
establecido para la Unidad 1: portadillas, evaluación diagnóstica y actividades de
equipo no dan reactivos. La actividad sí **nombra el concepto "proceso al límite"**
al cerrar (p.65), pero como conclusión narrativa de la actividad, no como definición
aparte; el libro la retoma en forma limpia en el 2.1.

## Criterio: teoría sobre práctica

Mismo criterio que la Unidad 1 (decisión de Carlo, 20 jul 2026): el examen cultural
es teórico, no práctico. Se privilegian las definiciones, teoremas y reglas sobre los
procedimientos de cálculo. Los ejemplos numéricos, las tablas de tabulación y los
bloques de ejercicios no se convierten en reactivos de procedimiento; las
definiciones, teoremas y fórmulas sí, incluso cuando el libro las suelta como
recordatorio dentro de la Solución de un ejemplo, siempre que sean generales y no
dependan de los números concretos de ese ejemplo.

## Erratas del libro

- **p.74 — el teorema de la unicidad mezcla notación de límite bilateral con
  unilateral.** El libro imprime: *"Teorema de la unicidad si lím_{x→a} f(x) = L₁ y
  lím_{x→a⁻} f(x) = L₂. Entonces, L₁ = L₂."* Verificado a 800 dpi. La primera
  expresión no lleva signo (x→a, límite "normal") y la segunda sí (x→a⁻, límite por la
  izquierda); lo consistente sería comparar los dos límites laterales (x→a⁺ y x→a⁻).
  **No se escribe reactivo con esta notación**; el teorema se cubre por su enunciado en
  prosa, que sí es limpio y general ("una función no puede aproximarse a dos límites
  distintos al mismo tiempo... si el límite de una función existe, éste es único").

## Cobertura por página

- Cubierto el apartado **2.1 Idea intuitiva de límite** en su arranque (p.67-68): la
  definición general de **límite por la izquierda** y **límite por la derecha** (dar
  valores menores y mayores que *x*₀ y acercarse por ambos lados), cómo se lee cada
  notación (lím_{x→a⁻} f(x) = L₁ y lím_{x→a⁺} f(x) = L₂), y la **condición de
  existencia del límite** (si el límite por la izquierda es igual al de la derecha,
  entonces existe el límite). **Fuera:** el *Ejemplo* completo de
  f(x) = (3x+2)(x-1)/(x-1) con su Solución, tablas 2.1 y 2.2, la Figura 2.1 y la nota
  sobre la circunferencia vacía (es la lectura gráfica de ese ejemplo concreto, no una
  regla aparte).
- **Las páginas impresas 69 a 71 NO dieron ningún reactivo.** Son actividades de
  tabulación, dos *Ejemplos* más con su Solución y gráficas (Figuras 2.2 a 2.5) que
  refuerzan con números lo ya cubierto en la p.67-68 — la existencia o no del límite
  y la diferencia entre *f*(*a*) y el límite en *a* — sin agregar una definición o
  regla nueva.
- Cubierta la página impresa **72**, que **cierra el 2.1**: el nombre y la idea del
  **límite directo** (sustituir *x* directamente cuando el límite ya está definido, sin
  necesidad de gráfica ni tabla) y la aclaración explícita del libro de que esto **no
  es lo mismo** que obtener el valor de *f*(*x*) —la confusión que, dice el libro,
  cometen muchos maestros—. **Fuera:** la página 73 completa (ocho gráficas de
  actividad, sin texto) y el resto de actividades de tabulación.
- Cubierta la página impresa **74**, que **abre 2.2 Teoremas de límites y su inciso
  a)**: los **siete teoremas** numerados tal como los da el libro —unicidad; límite de
  una constante; límite de la variable *x*; límite de la suma/resta; límite del
  producto; límite del cociente (con su condición *g*(*x*) ≠ 0); y límite de la raíz
  enésima (con su condición *L* > 0, *n* entero positivo)—. El del teorema 1 se cubre
  por su enunciado en prosa, no por la notación (ver erratas arriba). **Fuera:** el
  *Ejemplo* de aplicación de los teoremas con su Solución.
- **Las páginas impresas 75 a 77 NO dieron ningún reactivo.** Son puros *Ejemplos*
  aplicando los siete teoremas ya cubiertos (constantes, funciones trigonométricas,
  exponenciales, un caso de discontinuidad) con su Solución, más listas de ejercicios
  de práctica.

**Pendiente:** EN CURSO. **El 2.1 queda CERRADO** (pp. 67-72). Del **2.2**, cubierto el
inciso **a) completo** (los siete teoremas, p.74) hasta la p.77. Sigue desde la
**p.78** con el resto del inciso a) si lo hay, o el inciso **b) Suma y producto cuando
algún límite es infinito o menos infinito** (p.82), y el inciso **c) Suma y producto
cuando algún límite no existe** (p.89), y luego **2.3 Continuidad** (p.92), hasta
cerrar la Unidad 2 en la p.98 (la Unidad 3 arranca p.99). **Antes de tocar este
archivo, corre la regla del punto de continuación de CLAUDE.md** —esta Unidad es
materia nueva y este archivo es el único que sostiene su pendiente.

---

## Sub-lote 1 · Límite por la izquierda y por la derecha (2.1, pp. 67-68)

### 108

De acuerdo con el libro de Cálculo, ¿cómo se obtienen el límite por la izquierda y el límite por la derecha de una función?

- A. Dando valores menores y mayores que *x*₀ y acercándonos por ambos lados al valor de la función
- B. Sustituyendo *x*₀ directamente en la función y evaluando el resultado
- C. Igualando a cero el denominador de la función y despejando la variable
- D. Derivando la función y evaluando la derivada en *x*₀

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 67
**Subtema:** Idea intuitiva de límite · Límite por la izquierda y por la derecha

"[...] los valores que se dan son menores y mayores que x₀, de tal manera que nos acercamos por ambos lados al valor de la función, lo que se llama **límite por la derecha** y **límite por la izquierda**."

### 109

Conforme al libro de Cálculo, ¿cómo se lee la expresión lím (x→a⁻) f(x) = L₁?

- A. El límite por la izquierda cuando x tiende a a de la función f(x) es igual a L₁
- B. El límite por la derecha cuando x tiende a a de la función f(x) es igual a L₁
- C. La función f(x) tiende a L₁ cuando a tiende a x
- D. El límite de la función f(x) es igual a L₁ para todo valor de x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 67
**Subtema:** Idea intuitiva de límite · Notación del límite por la izquierda

"Se lee: 'el límite por la izquierda (a⁻) cuando x tiende a a de la función f(x) es igual a L₁'."

> Nota de revisor: el distractor B cambia izquierda por derecha — el par exacto con el
> que se confunde (reactivo 110, misma página siguiente).

### 110

De acuerdo con el libro de Cálculo, ¿cómo se lee la expresión lím (x→a⁺) f(x) = L₂?

- A. El límite por la derecha cuando x tiende a a de la función f(x) es igual a L₂
- B. El límite por la izquierda cuando x tiende a a de la función f(x) es igual a L₂
- C. La función f(x) tiende a a cuando x tiende a L₂
- D. El límite de la función f(x) es igual a L₂ únicamente en x = a

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 68
**Subtema:** Idea intuitiva de límite · Notación del límite por la derecha

"Se lee: 'el límite por la derecha cuando x tiende a a de la función f(x) es igual a L₂'."

### 111

Conforme al libro de Cálculo, ¿cuándo se dice que existe el límite de una función?

- A. Cuando el límite por la izquierda es igual al límite por la derecha
- B. Cuando el límite por la izquierda es distinto del límite por la derecha
- C. Cuando la función está definida en el punto al que tiende x
- D. Cuando el límite por la izquierda es mayor que el límite por la derecha

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 68
**Subtema:** Idea intuitiva de límite · Condición de existencia

"Cuando el límite por la izquierda es igual al límite por la derecha se dice que existe el límite en símbolos. Si lím f(x) = L₁ y lím f(x) = L₂ se cumple que L₁ = L₂."

---

## Sub-lote 2 · Límite directo y los siete teoremas de límites (2.1 y 2.2 a, pp. 72-74)

### 112

De acuerdo con el libro de Cálculo, ¿cómo se llama al procedimiento de sustituir directamente el valor de *x* para obtener un límite ya definido, sin necesidad de gráfica ni tabla?

- A. Límite directo
- B. Límite lateral
- C. Límite indeterminado
- D. Límite algebraico

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 72
**Subtema:** Idea intuitiva de límite · Límite directo

"Cuando un límite está definido, como es el caso, no se hace necesario realizar la gráfica y la tabla; concluimos que con sustituir el valor de x en el límite es suficiente [...] Si x = 3 calculemos el siguiente límite, que recibe el nombre de **límite directo**."

### 113

Conforme al libro de Cálculo, al calcular un límite directo sustituyendo el valor de *x*, ¿qué aclara el libro sobre esa operación?

- A. Que no es cierto que esto sea lo mismo que obtener el valor de f(x), aunque muchos maestros lo confundan
- B. Que es exactamente lo mismo que obtener el valor de f(x) en ese punto
- C. Que sólo es válido cuando la función es una constante
- D. Que sólo es válido cuando el límite no existe

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 72
**Subtema:** Idea intuitiva de límite · Límite directo

"[...] por eso, la confusión de muchos maestros, pues lo consideran como obtener el valor de f(x) y esto no es cierto."

### 114

De acuerdo con el libro de Cálculo, ¿qué garantiza el teorema de la unicidad de los límites?

- A. Que si el límite de una función existe, éste es único
- B. Que toda función tiene siempre dos límites distintos en cada punto
- C. Que el límite de una función siempre es igual al valor de la función en ese punto
- D. Que el límite de una función nunca puede calcularse por sustitución directa

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 1, unicidad

"Este teorema afirma que una función no puede aproximarse a dos límites distintos al mismo tiempo, con la cual se garantiza que si el límite de una función existe, éste es único."

### 115

Conforme al libro de Cálculo, si *c* es una constante, ¿cuánto vale lím (x→a) c?

- A. c
- B. a
- C. 0
- D. No existe

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 2, límite de una constante

"Si c es una constante, entonces para cualquier número a el lím (x→a) c = c"

### 116

De acuerdo con el libro de Cálculo, si *x* es una variable, ¿cuánto vale lím (x→a) x?

- A. a
- B. x
- C. 1
- D. No existe

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 3, límite de la variable x

"Si x es una variable, entonces el lím (x→a) x = a"

### 117

Conforme al libro de Cálculo, si lím (x→a) f(x) = L y lím (x→a) g(x) = M, ¿cuánto vale lím (x→a) [f(x) ± g(x)]?

- A. L ± M
- B. L · M
- C. L / M
- D. L + a

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 4, límite de la suma y la diferencia

"Si lím f(x) = L y lím g(x) = M, entonces el lím [f(x) ± g(x)] = L ± M"

### 118

De acuerdo con el libro de Cálculo, si lím (x→a) f(x) = L y lím (x→a) g(x) = M, ¿cuánto vale lím (x→a) [f(x) · g(x)]?

- A. L · M
- B. L ± M
- C. L / M
- D. M / L

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 5, límite del producto

"Si lím f(x) = L y lím g(x) = M, entonces el lím [f(x) · g(x)] = L · M"

### 119

Conforme al libro de Cálculo, si lím (x→a) f(x) = L y lím (x→a) g(x) = M, ¿cuánto vale lím (x→a) [f(x)/g(x)], y qué condición debe cumplir g(x)?

- A. L/M, con g(x) ≠ 0
- B. L·M, con g(x) ≠ 0
- C. L/M, con g(x) = 0
- D. M/L, con g(x) ≠ 0

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 6, límite del cociente

"Si lím f(x) = L y lím g(x) = M, entonces el lím [f(x)/g(x)] = L/M, g(x) ≠ 0"

### 120

De acuerdo con el libro de Cálculo, si lím (x→a) f(x) = L, ¿a qué es igual lím (x→a) ⁿ√f(x)?

- A. A ⁿ√L
- B. A L elevado a la n
- C. A L/n
- D. A n·L

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 74
**Subtema:** Teoremas de límites · Teorema 7, límite de la raíz enésima

"Si lím f(x) = L, entonces lím ⁿ√f(x) = ⁿ√(lím f(x)) = ⁿ√L. Con L > 0, si n es un número entero positivo."
