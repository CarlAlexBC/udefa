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

Ninguna detectada todavía en esta Unidad. Si aparece alguna, se documenta aquí con el
mismo formato que en la Unidad 1.

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

**Pendiente:** EN CURSO. Cubierto el arranque del **2.1** hasta la **p.71**. Sigue
desde la **p.72** con el resto del **2.1** hasta cerrar en la p.73 (según el índice),
y luego **2.2 Teoremas de límites** (p.74) con sus tres incisos, y **2.3 Continuidad**
(p.92), hasta cerrar la Unidad 2 en la p.98 (la Unidad 3 arranca p.99). **Antes de
tocar este archivo, corre la regla del punto de continuación de CLAUDE.md** —esta
Unidad es materia nueva y este archivo es el único que sostiene su pendiente.

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
