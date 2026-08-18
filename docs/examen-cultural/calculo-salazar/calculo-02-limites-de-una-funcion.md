# Cálculo · Unidad 2 · Límites de una función para analizar su comportamiento

**Libro:** Salazar, Bahena y Velázquez · *Cálculo. Teoría y aplicaciones* (Patria, 1.ª ed. 2020) · **Unidad 2 → CERRADA (27 reactivos)**

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
- **p.92 — la tercera condición de continuidad compara el límite consigo mismo, no
  con f(a).** El libro imprime las tres condiciones para que *f* sea continua en un
  punto: *"1. f(a) existe. 2. lím_{x→a} f(x) existe. 3. lím_{x→a} f(x) = f(x)."*
  Verificado a 800 dpi. La condición 3 debería comparar el límite con **f(a)** (el
  valor de la función en el punto), no con "f(x)" en general —tal como está impreso es
  una igualdad trivial que no aporta ninguna condición real—. **No se escribe reactivo
  con la condición 3**; las condiciones 1 y 2 sí son limpias y se cubren tal cual.

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
- **Las páginas impresas 75 a 78 NO dieron ningún reactivo.** Son puros *Ejemplos*
  aplicando los siete teoremas ya cubiertos (constantes, funciones trigonométricas,
  exponenciales, un caso de discontinuidad) con su Solución, más listas de ejercicios
  de práctica.
- Cubierto el arranque de la página impresa **79**: el apartado **Indeterminaciones de
  la forma 0/0**, con tres datos —qué es una **raíz de un polinomio** (*P*(*a*) = 0),
  cuándo aparece la indeterminación 0/0 en una función racional (cuando *a* es raíz de
  los dos polinomios), y cómo se salva (factorizando (*x* − *a*) en ambos y
  simplificando)—. **Fuera:** el recuadro de fórmulas de factorización (es un
  formulario de repaso de Álgebra, no materia propia de Cálculo) y el *Ejemplo* con su
  Solución.
- **Las páginas impresas 80 a 82 NO dieron ningún reactivo**, salvo el arranque del
  inciso **b) Suma y producto cuando alguno de los límites es infinito o menos
  infinito** al cierre de la p.82, que es introducción motivacional (qué significa
  "infinito" en el lenguaje común) sin un dato propio que fijar todavía.
- Cubierto el arranque de la página impresa **83**: la clasificación de los límites en
  **tres casos** (+∞, −∞, o un número *L*), y el límite lím (x→∞) 1/x = 0, que el
  libro señala explícitamente como **importante** para calcular límites que tienden a
  ser grandes. **Fuera:** los ejemplos de límites de potencias de *x* al infinito con
  su explicación de signos, la actividad de aprendizaje y la Tabla 2.7.

- Cubierto el arranque de la página impresa **84**: el nombre del **truco matemático**
  para evaluar el límite de una función racional cuando *x* tiende a infinito
  (multiplicar por 1, "como convenga"). **Fuera:** el resto de la página, que es un
  *Ejemplo* completo obteniendo una asíntota horizontal por dos métodos, con su
  Solución y las Figuras 2.8 y 2.9.
- Cubierto el arranque de la página impresa **85**: la regla operativa del método —
  dividir el numerador y el denominador entre la mayor potencia de *x* de la expresión
  racional—. **Fuera:** el resto del *Ejemplo* con su Solución y la lista de ejercicios
  de práctica.
- **Las páginas impresas 86 a 88 NO dieron ningún reactivo.** Son la lista de
  ejercicios que cierra la p.85, la "Deduce y aprende" de la recta tangente y normal
  (actividad de equipo —y que además adelanta contenido de la Unidad 3, la derivada,
  fuera de lugar en esta Unidad pero de cualquier forma excluida por ser actividad de
  equipo—), más otra lista de ejercicios y una actividad de discusión en grupo que
  hace descubrir el número *e* sin todavía nombrarlo ni darle valor.
- Cubierto el arranque de la página impresa **89**, que **abre el inciso c) Suma y
  producto cuando alguno de los límites no existe**: sólo el nombre y la fórmula del
  límite que origina el **número e**. **Fuera:** el límite lím (x→0) sen(x)/x, que el
  libro menciona en la misma frase como otro "límite muy especial" pero **sin darle
  valor en el texto** —no se puede fijar en un reactivo lo que el libro no dice—, y el
  arranque del *Ejemplo* con la Tabla 2.8 que sigue en la p.90.
- Cubierta la página impresa **90**, en su arranque: el **valor exacto del límite**
  que da el número *e*, y el dato de que **e es irracional** (expansión decimal
  infinita no periódica). **Fuera:** el resto de la página, que son actividades de
  aprendizaje con gráficas para practicar límites laterales y en el infinito.
- **La página impresa 91 NO dio ningún reactivo y cierra el inciso c).** Es sólo
  gráficas de actividad de aprendizaje. El límite lím (x→0) sen(x)/x, mencionado en la
  p.89, **nunca llega a tener un valor explícito en el texto** de estas páginas —queda
  fuera del banco por esa razón, no porque el dato no exista en matemáticas—.
- Cubierto el arranque de la página impresa **92**, que **abre 2.3 Continuidad**: la
  idea intuitiva de la continuidad ("trazar la gráfica... sin levantar el lápiz del
  papel"), las condiciones 1 y 2 de la definición formal de función continua en un
  punto (que *f*(*a*) exista y que el límite exista; la condición 3 tiene una errata,
  ver arriba, no se pregunta), y la definición de **función discontinua** (cuando una
  o más condiciones no se cumplen). **Fuera:** el *Ejemplo* con su Solución.
- Cubierto el arranque de la página impresa **93**: la definición boxeada de
  **continuidad en un intervalo cerrado** (continua en todo punto del intervalo).
  **Fuera:** los dos *Ejemplos* con su Solución y las actividades de aprendizaje.
- **Las páginas impresas 94 a 97 NO dieron ningún reactivo y cierran la Unidad 2.** La
  94 es "Lectura sugerida" (artículo externo, preguntas de reflexión) y el arranque de
  la "Evaluación sumativa"; las páginas 95-96 son la Evaluación sumativa completa
  (ejercicios de repaso); la 97 son dos tablas de "Autoevaluación" y "Autoevaluación
  disciplinar" (rúbricas). **La hoja 103 del PDF (que por el desfase +5 le tocaría a la
  p.98) es la portadilla de la Unidad 3** —objetivo específico y semblanza de Isaac
  Newton—, igual que pasó entre las Unidades 1 y 2: la Unidad 2 no llega a tener una
  p.98 propia, cierra en la p.97.

**Pendiente:** ninguno. **La Unidad 2 queda CERRADA por completo, 27 reactivos** (pp.
67-97: 2.1 en pp. 67-72; 2.2 con sus tres incisos en pp. 74-90; 2.3 en pp. 92-93; pp.
94-97 sin materia nueva). Sigue la **Unidad 3 · La derivada de una función para
modelar el cambio**, que arranca en la portadilla que ocupa la p.98, en un **archivo
nuevo** (`calculo-03-...md`). Con esto **se cierra también toda la materia de Cálculo
para la EMT** una vez que exista y se cierre ese archivo — Unidad 1 (107 reactivos) +
Unidad 2 (27 reactivos) = 134 hasta ahora.

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

---

## Sub-lote 3 · Indeterminaciones 0/0, y arranca "cuando el límite es infinito" (2.2 a y b, pp. 79, 83)

### 121

De acuerdo con el libro de Cálculo, si *P*(*x*) es un polinomio y *P*(*a*) = 0, ¿cómo se le llama a *a*?

- A. Raíz o solución del polinomio
- B. Asíntota del polinomio
- C. Dominio del polinomio
- D. Coeficiente principal del polinomio

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 79
**Subtema:** Indeterminaciones de la forma 0/0 · Raíz de un polinomio

"Recordemos que en un polinomio P(x) y un valor x = a, tal que P(a) = 0; entonces, decimos que a es una raíz o solución del polinomio."

### 122

Conforme al libro de Cálculo, al calcular el límite de una función racional P(x)/q(x) cuando x tiende a a, ¿cuándo se obtiene la forma indeterminada 0/0?

- A. Cuando a es raíz de los dos polinomios, P(x) y q(x)
- B. Cuando a es raíz únicamente del numerador P(x)
- C. Cuando a es raíz únicamente del denominador q(x)
- D. Cuando a no es raíz de ninguno de los dos polinomios

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 79
**Subtema:** Indeterminaciones de la forma 0/0 · Cuándo aparece

"[...] si se tiene una función racional de la cual se desea obtener el límite cuando x tienda a a, donde a es una raíz de los dos polinomios, tenemos: lím P(x)/q(x) = P(a)/q(a) = 0/0."

### 123

De acuerdo con el libro de Cálculo, ¿cómo es posible salvar una indeterminación de la forma 0/0 en el límite de una función racional?

- A. Factorizando (x − a) en los dos polinomios y simplificando
- B. Derivando el numerador y el denominador por separado
- C. Sustituyendo x por 0 en ambos polinomios
- D. Multiplicando el numerador y el denominador por x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 79
**Subtema:** Indeterminaciones de la forma 0/0 · Procedimiento

"Es posible salvar la indeterminación factorizando a (x − a) en los dos polinomios y simplificando."

### 124

Conforme al libro de Cálculo, ¿en qué tres casos se pueden agrupar los límites según su resultado?

- A. Cuando el resultado es +∞, −∞, o un número que llamamos L
- B. Cuando el resultado es positivo, negativo, o cero
- C. Cuando el resultado es racional, irracional, o indefinido
- D. Cuando el resultado es par, impar, o cero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 83
**Subtema:** Límites cuando x tiende al infinito · Clasificación

"Los límites los podemos agrupar en tres casos: cuando el resultado es +∞ o −∞; o bien, un número que llamamos L."

### 125

De acuerdo con el libro de Cálculo, ¿cuánto vale el límite lím (x→∞) 1/x, que el libro señala como importante para calcular límites que tienden a ser grandes?

- A. 0
- B. 1
- C. Infinito
- D. No existe

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 83
**Subtema:** Límites cuando x tiende al infinito · Límite de 1/x

"El siguiente ejemplo nos permite establecer un límite que es importante cuando calculamos límites que tienden a ser grandes. lím (x→∞) 1/x = 0"

---

## Sub-lote 4 · El truco de multiplicar por 1, y el número e (2.2 b y c, pp. 84-85, 89-90)

### 126

De acuerdo con el libro de Cálculo, ¿en qué consiste el truco matemático que se utiliza para evaluar un límite en una función racional cuando x tiende a infinito?

- A. En multiplicar por 1, como convenga
- B. En derivar el numerador y el denominador por separado
- C. En sustituir x por infinito directamente en la función
- D. En elevar al cuadrado el numerador y el denominador

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 84
**Subtema:** Límites cuando x tiende al infinito · El truco de multiplicar por 1

"Para evaluar un límite en una función racional utilizamos un truco matemático que consiste en multiplicar por 1, claro que lo haremos como convenga."

### 127

Conforme al libro de Cálculo, para aplicar el truco de multiplicar por 1 en una expresión racional, ¿entre qué se dividen el numerador y el denominador?

- A. Entre la mayor potencia de x
- B. Entre la menor potencia de x
- C. Entre el coeficiente principal del numerador
- D. Entre el término independiente del denominador

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 85
**Subtema:** Límites cuando x tiende al infinito · Dividir entre la mayor potencia

"Dividimos el numerador y el denominador entre la mayor potencia de x, en su expresión racional [...]"

### 128

De acuerdo con el libro de Cálculo, ¿a qué límite es igual el número e?

- A. lím (x→∞) (1 + 1/x)^x
- B. lím (x→0) (1 + 1/x)^x
- C. lím (x→∞) (1 + x)^(1/x)
- D. lím (x→∞) (1/x)^x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 89
**Subtema:** Suma y producto cuando algún límite no existe · El número e

"Determinar el siguiente límite: e = lím (x→∞) (1 + 1/x)^x."

### 129

Conforme al libro de Cálculo, ¿por qué el número e es irracional?

- A. Porque es una expansión decimal infinita no periódica
- B. Porque es una expansión decimal finita
- C. Porque es una expansión decimal infinita pero periódica
- D. Porque no puede aproximarse con una tabla de valores

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 90
**Subtema:** Suma y producto cuando algún límite no existe · El número e es irracional

"Este número es irracional, ya que es una expansión decimal infinita no periódica."

---

## Sub-lote 5 · Continuidad de una función (2.3, pp. 92-93) — cierra la Unidad 2

### 130

De acuerdo con el libro de Cálculo, ¿cómo se entiende la continuidad de una función?

- A. Como trazar la gráfica de la función sin tener que levantar el lápiz del papel
- B. Como una función cuya gráfica siempre es una línea recta
- C. Como una función que no tiene asíntotas verticales ni horizontales
- D. Como una función cuyo dominio son todos los números reales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 92
**Subtema:** Continuidad de una función · Idea intuitiva

"La continuidad de una función la entendemos como trazar la gráfica de la función sin tener que levantar el lápiz del papel [...]"

### 131

Conforme al libro de Cálculo, para que una función *f* sea continua en un punto *a*, ¿qué debe cumplirse en primer lugar?

- A. Que f(a) exista
- B. Que f(a) sea igual a cero
- C. Que la función sea un polinomio
- D. Que el dominio de f sean todos los reales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 92
**Subtema:** Continuidad de una función · Condición 1

"Una función f es continua en un punto si, y sólo si, cumple las tres condiciones. 1. f(a) existe."

### 132

De acuerdo con el libro de Cálculo, además de que f(a) exista, ¿qué otra condición debe cumplirse para que f sea continua en el punto a?

- A. Que lím (x→a) f(x) exista
- B. Que f(a) sea distinto de cero
- C. Que la función sea creciente en a
- D. Que la derivada de f en a exista

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 92
**Subtema:** Continuidad de una función · Condición 2

"2. lím (x→a) f(x) existe."

### 133

Conforme al libro de Cálculo, ¿cuándo se dice que una función es discontinua en a?

- A. Cuando una o más de las tres condiciones de continuidad no se cumplen para a
- B. Cuando las tres condiciones de continuidad se cumplen para a
- C. Cuando la función no tiene asíntotas
- D. Cuando el dominio de la función es un intervalo abierto

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 92
**Subtema:** Continuidad de una función · Discontinuidad

"Si una o más de estas tres condiciones no se cumplen para a, se dice que la función es discontinua en a."

### 134

De acuerdo con el libro de Cálculo, ¿cuándo es continua una función en un intervalo cerrado?

- A. Si y sólo si es continua en todo punto del intervalo cerrado
- B. Si y sólo si es continua únicamente en los extremos del intervalo cerrado
- C. Si y sólo si el intervalo no contiene números negativos
- D. Si y sólo si la función es un polinomio de grado par

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 93
**Subtema:** Continuidad de una función · Continuidad en un intervalo cerrado

"Una función es continua en un intervalo cerrado si y sólo si es continua en todo punto del intervalo cerrado."
