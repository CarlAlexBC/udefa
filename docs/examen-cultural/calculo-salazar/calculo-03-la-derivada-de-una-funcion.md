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
- **p.110 — el límite auxiliar para demostrar la derivada del coseno está mal.** Antes
  de la demostración, el libro imprime: *"Antes de iniciar la demostración de la
  derivada del coseno se hace necesario que obtengas gráficamente: lím_{h→0} cos(h)/h
  = 1."* Verificado a 800 dpi. Es **matemáticamente falso**: cuando h→0, cos(h)→1, así
  que cos(h)/h se dispara a ±∞, no converge a 1. El límite que en realidad hace falta
  para esa demostración es lím_{h→0} [cos(h) − 1]/h = 0 (le falta el "−1" al
  numerador). **No se escribe reactivo con este límite** — es el mismo criterio que ya
  se aplicó con el teorema de la unicidad mal escrito en la Unidad 2: un dato falso no
  se convierte en reactivo aunque el libro lo imprima así.

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
- Cubierta la página impresa **107**: el cierre de la Demostración de la derivada de
  la función potencia (sin reactivo, es Demostración), y el teorema completo de la
  **derivada de la suma de dos funciones**, con su enunciado en prosa. **Fuera:** la
  Demostración paso a paso y el *Ejemplo* con su Solución.
- Cubierta la página impresa **108**: los teoremas completos de la **derivada del
  producto de dos funciones** (fórmula) y de la **derivada del cociente de dos
  funciones** (el enunciado, ya que la fórmula se completa hasta la p.109). **Fuera:**
  las dos Demostraciones paso a paso y el desarrollo específico de *f*(*x*) = 1/*x*
  (es un caso particular, puente hacia el teorema general, no el teorema en sí).
- Cubierta la página impresa **109**: el cierre de la Demostración de la derivada del
  cociente con su **fórmula final y su enunciado en prosa**; el límite lím (h→0)
  sen(h)/h = 1 (aquí es donde el libro por fin le da valor a este límite, mencionado
  sin resolver en la Unidad 2); y la **derivada de la función seno** (y = sen x →
  y' = cos x). **Fuera:** la Demostración paso a paso y la tabla de valores.
- Cubierta la página impresa **110**: la generalización de la derivada del seno por
  regla de la cadena (y = sen *u* → y' = *u*' cos *u*) con su enunciado en prosa, y la
  **derivada de la función coseno** (y = cos x → y' = −sen x). **Fuera:** la
  Demostración paso a paso y el límite lím (h→0) cos(h)/h = 1, que está **mal** (ver
  erratas arriba) y no se usa en ningún reactivo.
- Cubierta la página impresa **111**: la generalización de la derivada del coseno por
  regla de la cadena (y = cos *u* → y' = −*u*' sen *u*) con su enunciado en prosa, y
  la **derivada de la función logaritmo natural** (y = ln x → y' = 1/x). **Fuera:** la
  Demostración paso a paso.
- Cubierta la página impresa **112**: el cierre de la Demostración de ln x con su
  generalización por regla de la cadena (y = ln *u* → derivada = *u*'/*u*), y la
  **derivada de la función exponencial** *f*(*x*) = e^x (el límite auxiliar lím (h→0)
  (e^h − 1)/h = 1, que a diferencia del de coseno **sí es correcto**, y el resultado
  *f*'(x) = e^x). **Fuera:** la Demostración paso a paso y la actividad de aprendizaje
  con 32 funciones a derivar por definición.

- Cubierta la página impresa **113**, que **abre 3.3**: sólo la generalización de la
  derivada de la función potencia con un coeficiente (y = k·x^n → y' = n·k·x^(n−1)).
  **Fuera:** los *Ejemplos* con su Solución, las dos Actividades de aprendizaje, y los
  dos recuadros de referencia de propiedades de exponentes (son formulario de Álgebra,
  no materia nueva de Cálculo).
- **Las páginas impresas 114 a 117 NO dieron ningún reactivo.** Son *Ejemplos* y
  Actividades de aprendizaje aplicando la misma fórmula de la p.113 a exponentes
  negativos y fraccionarios — sin una regla nueva.
- **Las páginas impresas 118, 120, 121 y 122 (arranque) tampoco dieron reactivo.** Las
  secciones "Derivada de la función suma", "Derivada del producto de dos funciones" y
  "Derivada del cociente de dos funciones" **repiten los mismos tres teoremas ya
  cubiertos en la p.107-109**, sólo que con notación *D*(*u* + *v*) o *d*/*dx* en vez
  de *f*'(x) — mismo teorema, otra forma de escribirlo, no se duplica el reactivo.
  Todo lo demás son *Ejemplos* y bancos enormes de ejercicios.
- Cubierto el cierre de la página impresa **122** y el arranque de la **123**, que
  **abren la sección de composición de funciones**: el nombre alterno **"regla de la
  cadena"** para la derivada de una composición de funciones, el **Teorema de la
  regla de la cadena** formal ((f∘g)'(x) = f'(g(x)) g'(x)), y la **regla de la
  potencia combinada con la regla de la cadena** (si f(x) = u^n, entonces
  f'(x) = n·u^(n−1)·u'). **Fuera:** los *Ejemplos* con su Solución y las Actividades
  de aprendizaje.
- Cubierto el cierre de la página impresa **123** (exercise bank de 3.3, sin reactivo)
  y el arranque de la **124**, que **abre 3.4 Fórmulas trigonométricas, exponenciales
  y logarítmicas**: **nada nuevo** — la sección reabre repitiendo la derivada del
  seno (chain rule y prosa) **exactamente igual** a como ya se cubrió en la p.110
  (reactivos 154-155); no se duplica.
- **La página impresa 125 tampoco dio reactivo**, por la misma razón: repite la
  derivada del coseno **exactamente igual** a la p.111 (reactivos 156-158).
- Cubierta la página impresa **126**: la **derivada de la función tangente**, sólo en
  prosa (y = tan *u* → y' = *u*' sec² *u*, sin forma simbólica boxeada esta vez).
  **Fuera:** los *Ejemplos* con su Solución y los bancos de ejercicios.
- Cubierto el arranque de la página impresa **127**: la **derivada de la función
  cotangente**, en su caso básico (y = cot x → y' = −csc² x) y generalizada por regla
  de la cadena (y = cot *u* → y' = −*u*' csc² *u*). **Fuera:** el resto de *Ejemplos*
  y ejercicios.
- Cubierto el arranque de la página impresa **128**: la **derivada de la función
  secante**, básica (y = sec x → y' = tan x sec x) y generalizada (y = sec *u* →
  y' = *u*' sec *u* tan *u*). **Fuera:** el resto de *Ejemplos* y ejercicios.
- Cubierto el arranque de la página impresa **129**: la **derivada de la función
  cosecante**, básica (y = csc x → y' = −csc x cot x) y generalizada (y = csc *u* →
  y' = −*u*' csc *u* cot *u*). Con esto quedan las **seis funciones trigonométricas
  directas completas**. **Fuera:** el resto de *Ejemplos* y los bancos de ejercicios,
  incluidos los "ejercicios combinados".

**Pendiente:** EN CURSO. Cubierto el **3.1, 3.2 y 3.3 completos** (pp. 105-123) y del
**3.4**, las **seis funciones trigonométricas directas** (sen, cos, tan, cot, sec,
csc — pp. 124-129). Sigue desde donde termine la página 129 con las **funciones
trigonométricas inversas** (arcoseno, arcocoseno, arcotangente, etc.), que el título
de 3.4 anuncia y todavía no aparecen, y con las fórmulas exponenciales y logarítmicas
en base distinta de *e* (la base *e* y ln ya se cubrieron en 3.2). Después **3.5
Criterios de comportamiento** (p.159), **3.6 Notaciones** (p.178) y **3.7 Diferencial**
(p.178), hasta cerrar la Unidad 3 — y la materia completa de Cálculo para la EMT —
antes de la p.188 (arranca la Unidad 4, La integral, que el temario NO pide). **Antes
de tocar este archivo, corre la regla del punto de continuación de CLAUDE.md** —esta
Unidad es materia nueva y este archivo es el único que sostiene su pendiente.

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

---

## Sub-lote 2 · Las nueve fórmulas de derivación (3.2, pp. 107-112)

### 149

De acuerdo con el libro de Cálculo, ¿a qué es igual la derivada de la suma de dos funciones?

- A. A la derivada de cada una de las funciones
- B. Al producto de las derivadas de cada función
- C. A la derivada de la primera función únicamente
- D. Al cociente de las derivadas de cada función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 107
**Subtema:** Definición de derivada de una función · Derivada de la suma

"La derivada de la suma de dos funciones es igual a la derivada de cada una de las funciones."

### 150

Conforme al libro de Cálculo, si f(x) y g(x) son dos funciones derivables, ¿a qué es igual (f·g)'(x)?

- A. f(x) g'(x) + g(x) f'(x)
- B. f'(x) g'(x)
- C. f(x) g'(x) − g(x) f'(x)
- D. f'(x) + g'(x)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 108
**Subtema:** Definición de derivada de una función · Derivada del producto

"(f·g)'(x) = f(x) g'(x) + g(x) f'(x)"

### 151

De acuerdo con el libro de Cálculo, ¿a qué es igual la derivada de un cociente?

- A. A la derivada del numerador por el denominador (sin derivar) menos la derivada del denominador por el numerador (sin derivar), dividida esta diferencia por el cuadrado del denominador
- B. Al cociente de las derivadas del numerador y el denominador
- C. A la derivada del denominador por el numerador (sin derivar) menos la derivada del numerador por el denominador (sin derivar), dividida por el denominador
- D. Al producto de las derivadas del numerador y el denominador

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 109
**Subtema:** Definición de derivada de una función · Derivada del cociente

"La derivada de un cociente es igual a la derivada del numerador por el denominador (sin derivar) menos la derivada del denominador por el numerador (sin derivar), dividida esta diferencia por el cuadrado del denominador."

### 152

Conforme al libro de Cálculo, ¿cuánto vale el límite lím (h→0) sen(h)/h, necesario para demostrar la derivada del seno?

- A. 1
- B. 0
- C. Infinito
- D. No existe

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 109
**Subtema:** Definición de derivada de una función · Límite auxiliar del seno

"lím (h→0) sen h / h = 1"

### 153

De acuerdo con el libro de Cálculo, si y = sen x, ¿cuánto vale y'?

- A. cos x
- B. −sen x
- C. −cos x
- D. sen x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 109
**Subtema:** Definición de derivada de una función · Derivada del seno

"Si y = sen x; entonces y' = cos x."

### 154

Conforme al libro de Cálculo, en general, si y = sen u (con u una función), ¿cuánto vale y'?

- A. u' cos u
- B. u' sen u
- C. −u' cos u
- D. cos u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 110
**Subtema:** Definición de derivada de una función · Derivada del seno, regla de la cadena

"En general se tiene que si y = sen u; entonces y' = u' cos u."

### 155

De acuerdo con el libro de Cálculo, ¿a qué es igual la derivada del seno de una función?

- A. Al producto de la derivada de la función por el coseno de la función
- B. Al producto de la derivada de la función por el seno de la función
- C. Al cociente de la derivada de la función entre el coseno de la función
- D. A menos el producto de la derivada de la función por el coseno de la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 110
**Subtema:** Definición de derivada de una función · Derivada del seno

"La derivada del seno de una función; es igual al producto de la derivada de la función por el coseno de la función."

### 156

Conforme al libro de Cálculo, si y = cos x, ¿cuánto vale y'?

- A. −sen x
- B. sen x
- C. cos x
- D. −cos x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 110
**Subtema:** Definición de derivada de una función · Derivada del coseno

"Así definimos y = cos x, y' = −sen x."

### 157

De acuerdo con el libro de Cálculo, si f(x) = u (con u una función continua y derivable) y y = cos u, ¿cuánto vale y'?

- A. −u' sen u
- B. u' sen u
- C. −u' cos u
- D. u' cos u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 111
**Subtema:** Definición de derivada de una función · Derivada del coseno, regla de la cadena

"Si f(x) = u; y u es una función continua y derivable, entonces: y = cos u, y' = −u' sen u."

### 158

Conforme al libro de Cálculo, ¿a qué es igual la derivada del coseno de una función?

- A. A menos el producto de la derivada de la función por el seno de la función
- B. Al producto de la derivada de la función por el seno de la función
- C. A menos el producto de la derivada de la función por el coseno de la función
- D. Al cociente de la derivada de la función entre el seno de la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 111
**Subtema:** Definición de derivada de una función · Derivada del coseno

"La derivada del coseno de una función es igual a menos el producto de la derivada de la función por el seno de la función."

### 159

De acuerdo con el libro de Cálculo, si y = ln x, ¿cuánto vale y'?

- A. 1/x
- B. x
- C. ln x
- D. 1/ln x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 111
**Subtema:** Definición de derivada de una función · Derivada del logaritmo natural

"Si y = ln x; entonces y' = 1/x."

### 160

Conforme al libro de Cálculo, en general, si y = ln u (con u una función), ¿cuánto vale la derivada?

- A. u'/u
- B. u/u'
- C. 1/u
- D. u' · u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 112
**Subtema:** Definición de derivada de una función · Derivada del logaritmo natural, regla de la cadena

"En general se tiene que si y = ln u entonces la derivada es f'(x) = u'/u."

### 161

De acuerdo con el libro de Cálculo, ¿cuánto vale el límite lím (h→0) (e^h − 1)/h, necesario para demostrar la derivada de la función exponencial?

- A. 1
- B. 0
- C. e
- D. Infinito

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 112
**Subtema:** Definición de derivada de una función · Límite auxiliar de la exponencial

"Pero este límite es igual a uno: lím (h→0) (e^h − 1)/h = 1"

### 162

Conforme al libro de Cálculo, si f(x) = e^x, ¿cuánto vale f'(x)?

- A. e^x
- B. x·e^(x−1)
- C. e^x · ln e
- D. 1

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 112
**Subtema:** Definición de derivada de una función · Derivada de la función exponencial

"Así entonces tenemos que la derivada de la función es f'(x) = e^x."

---

## Sub-lote 3 · Potencia con coeficiente, y la regla de la cadena (3.3, pp. 113, 122-123)

### 163

De acuerdo con el libro de Cálculo, si y = k·x^n (con k y n constantes), ¿cuánto vale y'?

- A. n·k·x^(n−1)
- B. k·x^(n−1)
- C. n·x^(n−1)
- D. n·k·x^n

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 113
**Subtema:** Fórmulas para derivar potencia, suma, producto, cociente y composición · Potencia con coeficiente

"Recordemos que la derivada de la función potencia está dada por y = kx^n, y' = nkx^(n − 1)."

### 164

Conforme al libro de Cálculo, ¿con qué otro nombre se conoce a la derivada de una composición de funciones?

- A. Regla de la cadena
- B. Regla del producto
- C. Regla de L'Hôpital
- D. Regla de la potencia

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 122
**Subtema:** Derivada de una composición de funciones · Nombre alterno

"También conocida como la regla de la cadena se utiliza para funciones compuestas."

### 165

De acuerdo con el libro de Cálculo, si g es derivable en x y f es derivable en g(x), ¿a qué es igual (f∘g)'(x) según el teorema de la regla de la cadena?

- A. f'(g(x)) g'(x)
- B. f'(x) g'(g(x))
- C. f(g'(x)) g(x)
- D. f'(g(x)) + g'(x)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 123
**Subtema:** Derivada de una composición de funciones · Teorema de la regla de la cadena

"Teorema de la regla de la cadena. Si g es derivable en x y f es derivable en g(x) entonces: (f∘g)'(x) = f'(g(x)) g'(x)"

### 166

Conforme al libro de Cálculo, al combinar la regla de la cadena con la regla de la potencia, si f(x) = u^n (con u una función diferenciable), ¿cuánto vale f'(x)?

- A. n·u^(n−1)·u'
- B. n·u^(n−1)
- C. u^(n−1)·u'
- D. n·u'^(n−1)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 123
**Subtema:** Derivada de una composición de funciones · Regla de la potencia combinada

"Otra forma de expresarlo es: si f(x) = u^n, entonces f'(x) = nu^(n − 1)u'."

---

## Sub-lote 4 · Las seis funciones trigonométricas directas (3.4, pp. 126-129)

### 167

De acuerdo con el libro de Cálculo, ¿a qué es igual la derivada de la tangente de una función?

- A. Al producto de la derivada de la función por la secante de la función elevada al cuadrado
- B. Al producto de la derivada de la función por la cosecante de la función elevada al cuadrado
- C. A menos el producto de la derivada de la función por la secante de la función elevada al cuadrado
- D. Al cociente de la derivada de la función entre la secante de la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 126
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la tangente

"La derivada de la tangente de una función es igual al producto de la derivada de la función por la secante de la función elevada al cuadrado."

### 168

Conforme al libro de Cálculo, si y = cot x, ¿cuánto vale dy/dx?

- A. −csc² x
- B. csc² x
- C. −sec² x
- D. −csc x cot x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 127
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la cotangente

"Sea la función y = cot x, la derivada de la función cotangente es igual a menos el cuadrado de la función cosecante. [...] dy/dx = −csc² x"

### 169

De acuerdo con el libro de Cálculo, en general, si y = cot u (con u = f(x)), ¿cuánto vale y'?

- A. −u' csc² u
- B. u' csc² u
- C. −u' sec² u
- D. −u' csc u cot u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 127
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la cotangente, regla de la cadena

"En general, si y = cot u, siendo u = f(x) tendremos y' = −u' csc² u."

### 170

Conforme al libro de Cálculo, si y = sec x, ¿a qué es igual y'?

- A. tan x sec x
- B. −tan x sec x
- C. csc x cot x
- D. sec² x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 128
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la secante

"Sea la función y = sec x, la derivada de la función secante es igual al producto de la tangente de la función por la secante de la función: y' = tan x sec x"

### 171

De acuerdo con el libro de Cálculo, en general, si y = sec u (con u una función de x), ¿cuánto vale y'?

- A. u' sec u tan u
- B. −u' sec u tan u
- C. u' sec² u
- D. u' csc u cot u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 128
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la secante, regla de la cadena

"En general se tiene, si u es una función de x, entonces la función y = sec u, tiene como derivada: y' = u' sec u tan u"

### 172

Conforme al libro de Cálculo, si y = csc x, ¿a qué es igual y'?

- A. −csc x cot x
- B. csc x cot x
- C. −sec x tan x
- D. −csc² x

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 129
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la cosecante

"Sea la función y = csc x, la derivada de la función cosecante es igual a menos el producto de la cotangente de la función por la cosecante de la función: y' = − csc x cot x"

### 173

De acuerdo con el libro de Cálculo, en general, si y = csc u (con u una función de x), ¿cuánto vale y'?

- A. −u' csc u cot u
- B. u' csc u cot u
- C. −u' sec u tan u
- D. −u' csc² u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 129
**Subtema:** Fórmulas para derivar funciones trigonométricas · Derivada de la cosecante, regla de la cadena

"En general, si u es una función de x, entonces la función y = csc u, tiene como derivada: y' = −u' csc u cot u"
