# Cálculo · Unidad 3 · La derivada de una función para modelar el cambio

**Libro:** Salazar, Bahena y Velázquez · *Cálculo. Teoría y aplicaciones* (Patria, 1.ª ed. 2020) · **Unidad 3 → EN CURSO**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Esta Unidad la pide la **EMT** (Escuela Militar de
> Transmisiones) dentro de su materia *Cálculo Diferencial* (`CÁLDIF-01-2026`), que
> reclama de este libro las **Unidades 1, 2 y 3**, las tres "Completo". Las líneas
> `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con que el
> temario los manda a llamar. Las Unidades 1 y 2 (mismo libro) ya están cerradas en
> [`calculo-01-conceptos-esenciales-funciones.md`](calculo-01-conceptos-esenciales-funciones.md)
> (107 reactivos) y
> [`calculo-02-limites-de-una-funcion.md`](calculo-02-limites-de-una-funcion.md)
> (27 reactivos). **Los números de reactivo de este archivo continúan la numeración
> desde el 135** para que no se dupliquen entre los tres archivos.

## Libro

Salazar Guerrero, Ludwing Javier; Bahena Román, Hugo; Velázquez Reyes, Luis Simón.
*Cálculo. Teoría y aplicaciones*. **Grupo Editorial Patria, S.A. de C.V.**,
**primera edición, 2020**. ISBN ebook 978-607-550-272-4. Edición ya verificada en la
Unidad 1 contra la página legal — mismo PDF, no se repite la verificación aquí.

**Desfase de páginas:** el mismo que en las Unidades 1 y 2, **hoja = página impresa +
5**. Reverificado en esta Unidad: hoja 110 = p.105, hoja 111 = p.106 (folios visibles).
**Las páginas se leen de la hoja, nunca se calculan.**

## Método para este libro

Mismo método que las Unidades 1 y 2: **el PDF es escaneo puro, sin capa de texto.** Se
trabaja con **`render.py`** y lectura a ojo; para cifras y fórmulas, recorte con
`crop.py` a 800 dpi antes de fijarlas en un reactivo.

## Alcance del temario

El temario `CÁLDIF-01-2026` de la EMT pide esta Unidad **completa**. Según el índice
del libro (p.4) y la portadilla de la Unidad (p.99), la Unidad 3 cubre:

- **3.1 Introducción al concepto de derivada a partir de su interpretación geométrica
  y física** (p.105).
- **3.2 Definición de derivada de una función** (p.106).
- **3.3 Fórmulas para derivar suma, producto, cociente y composición de funciones
  (regla de la cadena)** (p.113).
- **3.4 Fórmulas para derivar funciones trigonométricas directas e inversas,
  funciones exponenciales y logarítmicas** (p.124).
- **3.5 Criterios para determinar el comportamiento de una función (intervalos de
  crecimiento y decrecimiento; puntos máximos y mínimos locales; concavidad,
  convexidad y puntos de inflexión) a partir del análisis de sus derivadas** (p.159).
- **3.6 Notaciones de la derivada** (p.178).
- **3.7 Diferencial de una función** (p.178).

La Unidad 3 termina donde arranca la Unidad 4 (La integral, p.188), **que el temario
de la EMT NO pide** y queda fuera del banco.

## Portadilla y frente de la Unidad, sin reactivos (pp. 98-104)

Igual patrón que el cierre de las Unidades 1 y 2: la **p.98** es "Objetivo específico"
más una semblanza biográfica de **Isaac Newton** (recuadro histórico, no se pregunta);
la **p.99** es la portadilla con el título y el listado completo de "Contenidos
conceptuales, procedimentales y actitudinales" (3.1 a 3.18); la **p.100** es la
"Introducción" (narrativa histórica sobre la idea de límite, motivacional, no
Unidad 3 propiamente) más el arranque de la "Evaluación diagnóstica"; la **p.101**
cierra la Evaluación diagnóstica y abre la "Unidad integradora · Deduce y aprende:
La pendiente de la tangente a una curva" (práctica de equipo); las **pp. 102-104**
son el resto de esa actividad, su secuencia didáctica y su rúbrica. Todo esto cae en
el mismo criterio ya establecido: portadillas, evaluación diagnóstica y actividades de
equipo no dan reactivos.

## Criterio: teoría sobre práctica

Mismo criterio que las Unidades 1 y 2 (decisión de Carlo, 20 jul 2026): el examen
cultural es teórico, no práctico. Se privilegian las definiciones, teoremas y reglas
sobre los procedimientos de cálculo. Los ejemplos numéricos, las tablas de tabulación y
los bloques de ejercicios no se convierten en reactivos de procedimiento; las
definiciones, teoremas y fórmulas sí, incluso cuando el libro las suelta como
recordatorio dentro de la Solución de un ejemplo, siempre que sean generales y no
dependan de los números concretos de ese ejemplo. Las **demostraciones** de los
teoremas de derivación (el desarrollo algebraico paso a paso) tampoco se convierten en
reactivos — el teorema en sí (el enunciado "Sea f(x)=... entonces f'(x)=...") sí.

## Erratas del libro

- **p.106 — mismo patrón de letras que se caen en títulos de color que ya se
  documentó en la Unidad 1.** El encabezado imprime **"Definición de derivad"**, sin
  la *d* final. Verificado a 800 dpi. **No se escriben reactivos sobre títulos**, así
  que no afecta al banco.

## Cobertura por página

- Cubierta la página impresa **105**, que **es todo el 3.1**: una historia densa del
  cálculo con datos verificables —los años de trabajo y el nombre de la creación de
  **Newton** (1665-1666, "Cálculo Infinitesimal"), los años de **Leibniz**, en forma
  independiente a Newton (1673-1676), el año en que Leibniz publicó su creación
  (1684, frente al 1704 de Newton), lo que le debemos a Leibniz (la notación y los
  nombres "Cálculo Diferencial", "Cálculo Integral", "función" y "coordenadas"), las
  notaciones de **Cauchy** y de **Leibniz**, el nombre de las dos operaciones nuevas
  que introduce el cálculo (diferenciación e integración) y sus definiciones, y las
  definiciones de **velocidad** y **aceleración** como razones de cambio—. **Fuera:**
  las dos notaciones de Lagrange (y' y f'(x); son la misma notación repetida dos
  veces, sin dato adicional que preguntar en una segunda vez), la nota didáctica de
  qué notación se usa primero, y el ejemplo de la caída libre con la aceleración de la
  gravedad (es ilustrativo, no una definición aparte).
- Cubierto el arranque de la página impresa **106**, que **abre 3.2 Definición de
  derivada de una función**: la definición de **derivada** (la pendiente de la recta
  tangente a una curva en un punto dado), y los dos primeros teoremas de derivación
  —**derivada de la función constante** (f'(x) = 0) y **derivada de la función
  potencia** (f'(x) = n·x^(n−1))—. **Fuera:** la fórmula de la derivada por
  definición (es la misma fórmula del cociente incremental que ya se cubrió como
  límite en la Unidad 2), las dos Demostraciones paso a paso, y los dos *Ejemplos*
  con su Solución.

**Pendiente:** EN CURSO. Cubierto el **3.1 completo** (p.105) y el arranque del
**3.2** hasta la **p.106** (dos teoremas de derivación). Sigue desde la **p.107** con
el resto del **3.2** (más teoremas de derivación: identidad, lineal, seno, coseno,
logaritmo natural, exponencial, según el temario 3.8) hasta cerrar en p.112, y luego
**3.3 Fórmulas para derivar suma, producto, cociente y composición** (p.113), **3.4
Fórmulas trigonométricas, exponenciales y logarítmicas** (p.124), **3.5 Criterios de
comportamiento** (p.159), **3.6 Notaciones** (p.178) y **3.7 Diferencial** (p.178),
hasta cerrar la Unidad 3 — y la materia completa de Cálculo para la EMT — antes de la
p.188 (arranca la Unidad 4, La integral, que el temario NO pide). **Antes de tocar
este archivo, corre la regla del punto de continuación de CLAUDE.md** —esta Unidad es
materia nueva y este archivo es el único que sostiene su pendiente.

---

## Sub-lote 1 · Historia del cálculo, y arranca la definición de derivada (3.1 y 3.2, pp. 105-106)

### 135

De acuerdo con el libro de Cálculo, ¿entre qué años realizó Isaac Newton su creación llamada "Cálculo Infinitesimal"?

- A. Entre 1665 y 1666
- B. Entre 1673 y 1676
- C. Entre 1684 y 1704
- D. Entre 1642 y 1727

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Newton

"Más tarde, entre 1665-1666, el inglés Isaac Newton, realizó una prodigiosa creación mental llamada en la actualidad 'Cálculo Infinitesimal' [...]"

> Nota de revisor: el distractor B son los años de **Leibniz** (reactivo 136), el
> distractor C mezcla los años de publicación de ambos (reactivo 137).

### 136

Conforme al libro de Cálculo, ¿cómo desarrolló Gottfried Wilhelm Leibniz el cálculo infinitesimal respecto a los estudios de Newton?

- A. En forma independiente, entre 1673 y 1676
- B. Como continuación directa del trabajo de Newton, entre 1665 y 1666
- C. En colaboración con Newton, entre 1684 y 1704
- D. Antes que Newton, entre 1642 y 1665

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Leibniz

"Por otra parte, en forma independiente a los estudios de Newton, entre 1673-1676, el alemán Gottfried Wilhelm Leibniz basado en los análisis de Huygens, Descartes y Pascal, desarrolló también, el 'cálculo infinitesimal' bajo un tratamiento distinto al de Newton, a través de una concepción de tipo geométrico."

### 137

De acuerdo con el libro de Cálculo, ¿en qué año publicó Leibniz su creación al público?

- A. En 1684
- B. En 1704
- C. En 1666
- D. En 1676

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Publicación

"Leibniz publicó su creación al público en el año de 1684, mientras que Newton lo hizo en el año de 1704."

> Nota de revisor: el distractor B es el año en que **Newton** publicó la suya — el
> par exacto con el que se confunde.

### 138

Conforme al libro de Cálculo, además de la notación del cálculo infinitesimal, ¿qué otros nombres y términos le debemos a Leibniz?

- A. Los nombres "Cálculo Diferencial" y "Cálculo Integral", y los términos "función" y "coordenadas"
- B. Los nombres "Cálculo Infinitesimal" y "Cálculo de Variaciones"
- C. Los términos "límite" y "asíntota"
- D. Los nombres "derivada" e "integral"

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Aportaciones de Leibniz

"La notación que usamos para el cálculo infinitesimal se debe a Leibniz, a él también, le debemos los nombres de 'Cálculo Diferencial' y 'Cálculo Integral', así como los términos de 'función' y de 'coordenadas'."

### 139

De acuerdo con el libro de Cálculo, ¿qué matemático dio la notación D_x f(x) para la derivada?

- A. Cauchy
- B. Lagrange
- C. Leibniz
- D. Newton

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Notaciones

"Cauchy: D_x f(x)"

### 140

Conforme al libro de Cálculo, ¿qué matemático dio la notación dy/dx para la derivada?

- A. Leibniz
- B. Cauchy
- C. Lagrange
- D. Newton

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Notaciones

"Leibniz: dy/dx"

### 141

De acuerdo con el libro de Cálculo, ¿cómo se llaman las dos nuevas operaciones matemáticas que introduce el cálculo, a las ya existentes (adición, multiplicación, división, potenciación y radicalización)?

- A. Diferenciación e integración
- B. Derivación y graficación
- C. Límite y continuidad
- D. Factorización y simplificación

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Nuevas operaciones

"El cálculo analiza todas las situaciones al introducir dos nuevas operaciones matemáticas a las ya existentes, como la adición, multiplicación, división, potenciación y radicalización, estas nuevas operaciones son llamadas diferenciación e integración, siendo estás operaciones contrarias."

### 142

Conforme al libro de Cálculo, ¿qué es la diferenciación?

- A. Una forma de calcular la razón de cambio de una variable en relación a otra en cualquier paso de un proceso
- B. Una forma de calcular el área bajo la gráfica de una función
- C. Una forma de convertir una ecuación de razón de cambio en una ecuación de variables
- D. Una forma de calcular el valor máximo de una función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Diferenciación

"La diferenciación es una forma de calcular la razón de cambio de una variable en relación a otra en cualquier paso de un proceso."

### 143

De acuerdo con el libro de Cálculo, ¿qué es la integración?

- A. Al revés de la diferenciación, considera una ecuación en términos de la razón de cambio y la convierte en una ecuación en términos de las variables que hacen el cambio
- B. Una forma de calcular la razón de cambio de una variable en relación a otra
- C. Lo mismo que la diferenciación, pero aplicada a funciones trigonométricas
- D. Una forma de calcular la pendiente de la recta tangente a una curva

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Integración

"La integración, al revés de la diferenciación, considera a una ecuación en términos de la razón de cambio y la convierte en una ecuación en términos de las variables que hacen el cambio."

### 144

Conforme al libro de Cálculo, ¿cómo está definida la velocidad?

- A. Como una razón de cambio del espacio recorrido por un móvil en el intervalo de tiempo necesario para recorrerlo
- B. Como la razón de cambio de una relación de velocidad, entre el intervalo de tiempo
- C. Como el espacio recorrido por un móvil, sin importar el tiempo
- D. Como la pendiente de la recta tangente a una curva

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Velocidad

"[...] recordemos que la velocidad está definida como una razón de cambio del espacio recorrido por un móvil en el intervalo de tiempo necesario para recorrerlo [...]"

> Nota de revisor: el distractor B es la definición de **aceleración** (reactivo 145)
> — el par exacto con el que se confunde.

### 145

De acuerdo con el libro de Cálculo, ¿cómo está definida la aceleración?

- A. Como la razón de cambio de una relación de velocidad, entre el intervalo de tiempo necesario para llevar a cabo dicha variación de velocidades
- B. Como una razón de cambio del espacio recorrido por un móvil en el intervalo de tiempo necesario para recorrerlo
- C. Como el doble de la velocidad de un móvil
- D. Como la pendiente de la recta tangente a una curva

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 105
**Subtema:** Introducción al concepto de derivada · Aceleración

"[...] y que la aceleración está definida, como la razón de cambio de una relación de velocidad, entre el intervalo de tiempo necesario para llevar a cabo dicha variación de velocidades."

### 146

Conforme al libro de Cálculo, ¿cómo se define la derivada de una función?

- A. Como la pendiente de la recta tangente a una curva en un punto dado
- B. Como el área bajo la curva de una función en un intervalo dado
- C. Como el valor de la función en el punto donde el límite no existe
- D. Como la razón entre el dominio y el rango de una función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 106
**Subtema:** Definición de derivada de una función · Definición

"La derivada de una función se define como la pendiente de la recta tangente a una curva en un punto dado."

### 147

De acuerdo con el libro de Cálculo, si f(x) = c es una función derivable, ¿cuánto vale f'(x)?

- A. 0
- B. c
- C. 1
- D. x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 106
**Subtema:** Definición de derivada de una función · Derivada de la función constante

"Sea f(x) = c una función derivable entonces, f'(x) = 0."

### 148

Conforme al libro de Cálculo, si f(x) = x^n es una función derivable, ¿cuánto vale f'(x)?

- A. n·x^(n−1)
- B. n·x^n
- C. x^(n−1)
- D. (n−1)·x^n

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 106
**Subtema:** Definición de derivada de una función · Derivada de la función potencia

"Teorema: Sea f(x) = x^n una función derivable entonces, f'(x) = n x^(n − 1)."
