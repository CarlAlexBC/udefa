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
- Cubierto el arranque de la página impresa **130**, que **abre "Derivación de
  funciones implícitas"**: la definición de **función implícita** (cuando el valor de
  la función no está dado explícitamente) y en qué consiste el **método de derivación
  implícita** (derivar cada término de ambos miembros de la igualdad respecto a *x* y
  resolver para *y*'). **Fuera:** la tabla de ejemplos de implícitas/explícitas, el
  *Ejemplo* con su Solución y la tabla comparando notaciones.
- **La página impresa 131 NO dio reactivo.** Sólo repite que y', dy/dx y D_x son
  intercambiables (ya cubierto en la Unidad 3 con las notaciones de Cauchy, Lagrange y
  Leibniz), más *Ejemplos* y un banco de ejercicios de derivación implícita.
- Cubierta la página impresa **132**, que **es la más densa del bloque**: la
  definición de **funciones trigonométricas inversas** (permiten regresar un valor
  del contradominio de la función al dominio de ésta), su convención de nombre (el
  prefijo "arco" o el exponente −1), qué significa "arc sen *y*" (el ángulo cuyo seno
  tiene el valor *y*) con su restricción de intervalo (−π/2 a π/2), y el **recuadro
  con las seis fórmulas de derivación** de arco seno, arco coseno, arco tangente,
  arco cotangente, arco secante y arco cosecante. **Fuera:** los ejemplos numéricos de
  cómo se lee sen 30°, etc.
- **Las páginas impresas 133 a 135 NO dieron ningún reactivo.** Son las
  Demostraciones paso a paso de las seis fórmulas ya cubiertas en el recuadro de la
  p.132 (arco seno, arco coseno, arco tangente/cotangente, arco secante/cosecante),
  más sus *Ejemplos* con Solución y los bancos de ejercicios — ninguna aporta una
  fórmula que no estuviera ya en el recuadro.
- **La página impresa 136 NO dio reactivo.** Son *Ejemplos* y Actividades de
  aprendizaje aplicando arco secante y arco cosecante, ya cubiertas.
- Cubierto el arranque de la página impresa **137**, que **abre "Derivada de
  logaritmos de cualquier base log_a x"**: la relación de que **logaritmo y
  exponencial son funciones inversas** (si y = a^x, su inversa es x = log_a y), y las
  dos fórmulas de derivación —básica (y' = 1/(x ln a)) y generalizada por regla de la
  cadena (y' = u'/(u ln a))—. **Fuera:** la Demostración paso a paso y los *Ejemplos*
  con su Solución.
- **Las páginas impresas 138 y 139 NO dieron ningún reactivo.** Son ejercicios de
  log_a x, la re-derivación de ln x (ya cubierta en 3.2) considerándolo "caso
  particular" de log_a x, más el recuadro de propiedades de logaritmos (ln *ab* = ln
  *a* + ln *b*, etc. — formulario de Álgebra, no materia nueva).
- Cubierto el arranque de la página impresa **140**, que **abre "Derivada de la
  función exponencial"** de base *a*: la fórmula básica (dy/dx = a^x ln a) y la
  generalizada por regla de la cadena (si f(x) = a^u, entonces f'(x) = u'a^u ln a).
  **Fuera:** la Demostración con la tabla comparando notaciones *y*' y *dy*/*dx*, y
  los *Ejemplos* con su Solución.
- Cubierto el arranque de la página impresa **141**: la generalización por regla de
  la cadena de la derivada de e^x (si y = e^u, entonces y' = u'e^u) —un dato nuevo
  que faltaba, ya que en la p.112 (Unidad 3.2) sólo se había cubierto el caso básico
  f(x) = e^x—. **Fuera:** los ejercicios previos, la re-derivación de e^x como "caso
  particular" (ya cubierta) y el *Ejemplo* con su Solución. **Con esto se cierra el
  3.4 completo.**

- Cubierto el arranque de la página impresa **142**: otra forma de expresar el
  número *e*, como serie (e = 1 + 1/1! + 1/2! + ... + 1/n! + ...) —dato nuevo que se
  suma a la definición como límite y a que es irracional, ya cubiertas en 3.1—.
  **Fuera:** las otras formas de expresar *e* como límite (son las mismas ya cubiertas
  en 3.1, sólo con la variable renombrada de *x* a *h* o *n*), la tabla para
  aproximarlo, y el resto de la página, que son ejercicios de e^x. **Con esto se
  cierran los ejercicios de 3.4** que quedaban pendientes entre la p.141 y la p.143.
- Cubierto el cierre de la página impresa **142** y el arranque de la **143**, que
  **abren "La existencia de la derivada"**: las **dos condiciones** para que una
  función sea derivable en un punto —que la curva sea suave (sin picos) y que la
  función sea continua en ese punto—. **Fuera:** el ejemplo de *y* = |*x*| con el que
  se ilustra por qué en (0,0) no existe la tangente (es el vehículo del ejemplo, no la
  regla general) y la Figura 3.3.
- Cubierto el arranque de la página impresa **143**, que también **abre "Derivadas
  sucesivas de una función"**: la definición (la derivada de la derivada es la
  segunda derivada, y así sucesivamente con tercera, cuarta, ...) y el recuadro con
  la **notación de las derivadas sucesivas** en las cuatro formas (Cauchy, las dos de
  Lagrange, Leibniz). **Fuera:** los *Ejemplos* con su Solución y los bancos de
  ejercicios de las pp. 143-144.
- Cubierta la página impresa **145**, que **abre "Obtención de la recta tangente y la
  recta normal a una función en un punto"**: la definición de **recta normal**
  (perpendicular a la tangente) y la fórmula de su pendiente (m₂ = 1/(−m₁)). **Fuera:**
  la fórmula punto-pendiente y "la pendiente es igual a la derivada" (ya cubiertas
  como la definición de derivada en 3.2), el *Ejemplo* con su Solución y las
  Actividades de aprendizaje.
- **Las páginas impresas 146 y 147 NO dieron ningún reactivo.** Son la "Deduce y
  aprende" de la tangente con calculadora graficadora (actividad de equipo con
  instrucciones de manejo de calculadora) y dos bancos de ejercicios de tangente y
  normal.

- Cubierta la página impresa **148**, que **abre "Obtención del ángulo entre dos
  curvas"**: la fórmula del ángulo entre dos curvas en un punto, expresada con las
  derivadas de cada una (θ = tan⁻¹[(f'(x) − g'(x))/(1 + f'(x)g'(x))]). **Fuera:** los
  dos *Ejemplos* con su Solución y la Figura 3.4.
- Cubierto el arranque de la página impresa **149**, que **abre "Modelación de
  situaciones en diferentes contextos · a) Uso del lenguaje apropiado: velocidad
  instantánea, aceleración..."**: las definiciones de **velocidad media** (el
  incremento de la distancia recorrida entre el tiempo empleado) y de **velocidad
  instantánea** (el límite, cuando el incremento del tiempo tiende a cero, del
  incremento del espacio recorrido entre el incremento del tiempo). **Fuera:** el dato
  de Usain Bolt (es la anécdota que sirve de vehículo al ejemplo, no la definición) y
  la Figura 3.5.
- Cubierto el arranque de la página impresa **150**: que **la primera derivada se
  refiere a la velocidad, mientras que la segunda derivada es la aceleración**
  (razón entre la velocidad y el tiempo, *a*(*t*) = *dv*/*dt*). **Fuera:** la
  Actividad de aprendizaje con la tabla de tiempos de Bolt y el *Ejemplo* con su
  Solución.
- **Las páginas impresas 151 a 153 NO dieron ningún reactivo.** Son bancos de
  problemas aplicados de velocidad y aceleración, y el *Ejemplo* guiado del
  clavadista en el cañón del Sumidero (Chiapas) con su Solución — puros problemas de
  aplicación, sin una definición o regla nueva. **Ojo:** el título de la p.149
  prometía también "tasa de crecimiento, costo marginal, entre otros" y no aparecieron
  en este bloque; puede que vengan más adelante o que el libro no los desarrolle.

- **Las páginas impresas 154, 155 y 157-158 NO dieron ningún reactivo.** Son dos
  "Deduce y aprende" (actividades de equipo: "Caída libre" y "Cambio de temperatura",
  ésta última abre el apartado sin letra "b) Razones de cambio relacionadas — regla de
  la cadena"), más *Ejemplos* con Solución (temperaturas por hora, trayectoria de
  proyectil, la escalera que resbala) y bancos de ejercicios — el concepto de
  velocidad se repite dos veces más en estas páginas, siempre con la misma idea ya
  cubierta en reactivo 198, sin dato nuevo.
- Cubierto el arranque de la página impresa **156** (fuera ya de la actividad de
  equipo): la definición del **incremento Δx** —positivo (incremento) o negativo
  (decremento), según la variable aumente o disminuya—. **Fuera:** el resto de la
  página (ejemplo de temperaturas con tabla).
- Cubierta la página impresa **159**: el apartado sin letra **"c) Optimización"** es
  puro *Ejemplo* de utilidad máxima con su Solución, sin reactivo. Al cierre de la
  página **arranca formalmente el 3.5 "Criterios para determinar el comportamiento de
  una función..."**, con el subtítulo "Funciones creciente y decreciente" —hasta aquí
  sólo texto motivacional (Figuras 3.7 y 3.8), sin una definición aún; **"tasa de
  crecimiento" y "costo marginal", prometidos en el título de la p.149, nunca
  recibieron una definición propia** en todo este tramo (pp. 149-159): sólo aparecieron
  como nombres de ejemplos de aplicación (Optimización de utilidad, en este caso).

**Pendiente:** EN CURSO. **El 3.1, 3.2, 3.3 y 3.4 quedan CERRADOS** (pp. 105-142), y
también todo el contenido sin letra de sección que los sigue —existencia de la
derivada, derivadas sucesivas, recta tangente/normal, ángulo entre curvas y modelación
de situaciones (velocidad, aceleración, razones relacionadas, optimización)— hasta la
**p.159** (pp. 142-159). Dentro del 3.5, **quedan CERRADAS las definiciones de función
creciente/decreciente (con su criterio vía derivada y ángulo de la tangente) y de
máximo/mínimo relativo, y los métodos de la primera y la segunda derivada** (pp.
160-165). Sigue desde la **p.166** con el resto de 3.5 (intervalos de crecimiento y
decrecimiento, concavidad, convexidad y puntos de inflexión). Después
**3.6 Notaciones de la derivada** (p.178) y **3.7 Diferencial de una función** (p.178),
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

---

## Sub-lote 5 · Derivación implícita, y las seis funciones trigonométricas inversas (3.4, pp. 130-132)

### 174

De acuerdo con el libro de Cálculo, ¿cuándo decimos que una función es implícita?

- A. Cuando el valor de la función no está dado explícitamente
- B. Cuando la función no tiene dominio definido
- C. Cuando la función no es continua en ningún punto
- D. Cuando la función no admite derivada

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 130
**Subtema:** Derivación de funciones implícitas · Definición

"Decimos que una función es implícita cuando el valor de la función no está dado explícitamente."

### 175

Conforme al libro de Cálculo, ¿en qué consiste la derivación implícita?

- A. En derivar cada término de ambos miembros de la igualdad con respecto a "x" y resolverlo para y'
- B. En despejar "y" antes de derivar y luego aplicar la regla de la potencia
- C. En derivar únicamente el primer miembro de la igualdad
- D. En sustituir "x" por su valor numérico antes de derivar

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 130
**Subtema:** Derivación de funciones implícitas · Método

"Este tipo de derivación consiste en derivar cada término de ambos miembros de la igualdad con respecto a 'x' y resolverlo para y', dy/dx o D_x, según la notación que se utilice."

### 176

De acuerdo con el libro de Cálculo, ¿qué son las funciones trigonométricas inversas?

- A. Las que nos permiten regresar un valor del contradominio de la función al dominio de ésta
- B. Las que nos permiten obtener el valor máximo de una función trigonométrica
- C. Las que resultan de sumar dos funciones trigonométricas directas
- D. Las que sólo están definidas para ángulos negativos

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Funciones trigonométricas inversas · Definición

"Las funciones trigonométricas inversas, son aquellas que nos permiten regresar un valor del contradominio de la función al dominio de ésta."

### 177

Conforme al libro de Cálculo, ¿qué nombre o notación utilizan las funciones trigonométricas inversas?

- A. El nombre de arco, o bien, el valor del exponente −1
- B. El nombre de arco, o bien, el valor del exponente 2
- C. El prefijo "co", o bien, el valor del exponente −1
- D. El nombre de arco únicamente, nunca un exponente

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Funciones trigonométricas inversas · Nombre y notación

"Estas funciones utilizan el nombre de arco o bien, el valor del exponente −1, así, por ejemplo tenemos que la función inversa del seno es el arco seno."

### 178

De acuerdo con el libro de Cálculo, ¿qué significa "arc sen y"?

- A. El ángulo cuyo seno tiene el valor y
- B. El valor del seno del ángulo y
- C. El cuadrado del seno de y
- D. El inverso multiplicativo del seno de y

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Funciones trigonométricas inversas · Arco seno

"(léase arco seno de y; esto significa el ángulo cuyo seno tiene el valor y)"

### 179

Conforme al libro de Cálculo, ¿a qué es igual [arc sen u]'?

- A. u'/√(1 − u²)
- B. −u'/√(1 − u²)
- C. u'/(1 + u²)
- D. u'/(|u|√(u² − 1))

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Derivadas de las funciones trigonométricas inversas · Arco seno

"[arc sen u]' = 1/√(1 − u²) · u'"

### 180

De acuerdo con el libro de Cálculo, ¿a qué es igual [arc cos u]'?

- A. −u'/√(1 − u²)
- B. u'/√(1 − u²)
- C. −u'/(1 + u²)
- D. −u'/(|u|√(u² − 1))

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Derivadas de las funciones trigonométricas inversas · Arco coseno

"[arc cos u]' = −1/√(1 − u²) · u'"

### 181

Conforme al libro de Cálculo, ¿a qué es igual [arc tan u]'?

- A. u'/(1 + u²)
- B. −u'/(1 + u²)
- C. u'/√(1 − u²)
- D. u'/(|u|√(u² − 1))

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Derivadas de las funciones trigonométricas inversas · Arco tangente

"[arc tan u]' = 1/(1 + u²) · u'"

### 182

De acuerdo con el libro de Cálculo, ¿a qué es igual [arc cot u]'?

- A. −u'/(1 + u²)
- B. u'/(1 + u²)
- C. −u'/√(1 − u²)
- D. −u'/(|u|√(u² − 1))

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Derivadas de las funciones trigonométricas inversas · Arco cotangente

"[arc cot u]' = −1/(1 + u²) · u'"

### 183

Conforme al libro de Cálculo, ¿a qué es igual [arc sec u]'?

- A. u'/(|u|√(u² − 1))
- B. −u'/(|u|√(u² − 1))
- C. u'/(1 + u²)
- D. u'/√(1 − u²)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Derivadas de las funciones trigonométricas inversas · Arco secante

"[arc sec u]' = 1/(|u|√(u² − 1)) · u'"

### 184

De acuerdo con el libro de Cálculo, ¿a qué es igual [arc csc u]'?

- A. −u'/(|u|√(u² − 1))
- B. u'/(|u|√(u² − 1))
- C. −u'/(1 + u²)
- D. −u'/√(1 − u²)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 132
**Subtema:** Derivadas de las funciones trigonométricas inversas · Arco cosecante

"[arc csc u]' = −1/(|u|√(u² − 1)) · u'"

---

## Sub-lote 6 · Logaritmo y exponencial de base a, y cierre del 3.4 (pp. 137, 140-141)

### 185

De acuerdo con el libro de Cálculo, si y = a^x (función exponencial), ¿cuál es su función inversa?

- A. x = log_a y
- B. x = ln y
- C. x = y^a
- D. x = a/y

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 137
**Subtema:** Derivada de logaritmos de cualquier base · Log y exponencial como inversas

"Sabemos que la función logaritmo y la función exponencial son inversas, por lo que si y = a^x (función exponencial), se tiene que la inversa de esta función es x = log_a y."

### 186

Conforme al libro de Cálculo, si y = log_a x, ¿cuánto vale y'?

- A. 1/(x ln a)
- B. 1/x
- C. ln a/x
- D. a/(x ln a)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 137
**Subtema:** Derivada de logaritmos de cualquier base · Fórmula básica

"y' = 1/(x ln a)"

### 187

De acuerdo con el libro de Cálculo, en general, si u = f(x), ¿cuánto vale la derivada de y = log_a u?

- A. u'/(u ln a)
- B. u'/u
- C. u/(u' ln a)
- D. 1/(u ln a)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 137
**Subtema:** Derivada de logaritmos de cualquier base · Regla de la cadena

"En general si u = f(x) entonces y' = u'/(u ln a)"

### 188

Conforme al libro de Cálculo, si y = a^x (con a > 0, a ≠ 1), ¿cuánto vale dy/dx?

- A. a^x ln a
- B. x·a^(x−1)
- C. a^x
- D. a^x/ln a

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 140
**Subtema:** Derivada de la función exponencial de base a · Fórmula básica

"dy/dx = a^x ln a"

### 189

De acuerdo con el libro de Cálculo, en general, si f(x) = a^u y u es una función no nula de x, ¿cuánto vale f'(x)?

- A. u'a^u ln a
- B. u'a^u
- C. a^u ln a
- D. a^(u−1) ln a

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 140
**Subtema:** Derivada de la función exponencial de base a · Regla de la cadena

"En general se tiene que si f(x) = a^u y u es una función no nula de x, se tiene: f'(x) = u'a^u ln a"

### 190

Conforme al libro de Cálculo, en general, si u es una función de x y y = e^u, ¿cuánto vale y'?

- A. u'e^u
- B. e^u
- C. u·e^(u−1)
- D. e^u ln u

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 141
**Subtema:** Derivada de la función e^x · Regla de la cadena

"En general si u es una función de x se tiene que y = e^u, y' = u'e^u"

---

## Sub-lote 7 · Existencia de la derivada, derivadas sucesivas y recta normal (pp. 142-145)

### 191

De acuerdo con el libro de Cálculo, ¿cómo se puede expresar el número e como serie?

- A. e = 1 + 1/1! + 1/2! + ... + 1/n! + ...
- B. e = 1 + 1/1 + 1/2 + ... + 1/n + ...
- C. e = 1! + 2! + ... + n! + ...
- D. e = 1 − 1/1! + 1/2! − ... ± 1/n! + ...

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 142
**Subtema:** El número e · Expresión como serie

"e = 1 + 1/1! + 1/2! + ... + 1/n! + ..."

### 192

Conforme al libro de Cálculo, ¿qué dos condiciones debe reunir una función para que exista su derivada en un punto?

- A. Que la curva sea suave (sin picos) y que la función sea continua en ese punto
- B. Que la función sea polinomial y que su dominio sean todos los reales
- C. Que la curva sea suave (sin picos) únicamente, sin más condiciones
- D. Que la función sea continua únicamente, sin más condiciones

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 143
**Subtema:** La existencia de la derivada · Condiciones

"Para que exista la derivada debemos tener una curva suave, o sea, que no tenga picos; otra condición que debe reunir una función para ser derivable es que sea continua en el punto que se da."

### 193

De acuerdo con el libro de Cálculo, ¿a qué se le conoce como la segunda derivada de una función?

- A. A la derivada de la derivada de la función
- B. Al cuadrado de la primera derivada
- C. A la derivada evaluada dos veces en el mismo punto
- D. A la suma de la función con su primera derivada

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 143
**Subtema:** Derivadas sucesivas de una función · Definición

"La derivada de una función es una nueva función de la misma variable, a la derivada de esta derivada se le conoce como la segunda derivada, y se puede derivar sucesivamente recibiendo el nombre de tercera, cuarta, ..., derivada."

### 194

Conforme al libro de Cálculo, ¿cómo se anota la segunda derivada de f(x) con la notación de Cauchy?

- A. D² f(x)
- B. f''(x)
- C. d²y/dx²
- D. y''

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 143
**Subtema:** Derivadas sucesivas de una función · Notación de Cauchy

"Cauchy: D² f(x), D³ f(x), D⁴ f(x), ..., Dⁿ f(x)"

### 195

De acuerdo con el libro de Cálculo, ¿cómo se anota la segunda derivada de y con la notación de Leibniz?

- A. d²y/dx²
- B. D² f(x)
- C. y''
- D. f''(x)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 143
**Subtema:** Derivadas sucesivas de una función · Notación de Leibniz

"Leibniz: d²y/dx², d³y/dx³, ..., dⁿy/dxⁿ"

### 196

Conforme al libro de Cálculo, ¿qué es la recta normal a una curva, y cuál es su pendiente si m es la pendiente de la tangente?

- A. Es la recta perpendicular a la tangente, con pendiente m₂ = 1/(−m₁)
- B. Es la recta paralela a la tangente, con la misma pendiente m
- C. Es la recta perpendicular a la tangente, con pendiente m₂ = m₁
- D. Es la recta que pasa por el origen, con pendiente m₂ = −m₁

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 145
**Subtema:** Recta tangente y recta normal · Recta normal

"La ecuación de la recta normal a la curva es la recta perpendicular a la tangente; recordemos que si la pendiente es m, entonces la pendiente perpendicular es m₂ = 1/(−m₁)."

---

## Sub-lote 8 · Ángulo entre curvas, y velocidad/aceleración como derivadas (pp. 148-150)

### 197

De acuerdo con el libro de Cálculo, si m₂ = f'(x) y m₁ = g'(x), ¿cuál es la fórmula del ángulo entre dos curvas?

- A. θ = tan⁻¹ [(f'(x) − g'(x))/(1 + f'(x)g'(x))]
- B. θ = tan⁻¹ [(f'(x) + g'(x))/(1 − f'(x)g'(x))]
- C. θ = tan⁻¹ [f'(x)g'(x)]
- D. θ = tan⁻¹ [(g'(x) − f'(x))/(1 + f'(x)g'(x))]

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 148
**Subtema:** Ángulo entre dos curvas · Fórmula

"Si m₂ = f'(x) y m₁ = g'(x), entonces el ángulo que se obtiene es θ = tan⁻¹ (f'(x) − g'(x))/(1 + f'(x)g'(x))."

### 198

Conforme al libro de Cálculo, ¿qué es la velocidad media?

- A. El incremento de la distancia recorrida entre el tiempo empleado
- B. El límite del incremento del espacio recorrido cuando el tiempo tiende a cero
- C. La derivada del espacio con respecto al tiempo evaluada en un punto
- D. El incremento del tiempo entre el incremento de la distancia recorrida

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 149
**Subtema:** Modelación de situaciones · Velocidad media

"A esta velocidad se le conoce como velocidad media, que es el incremento de la distancia recorrida entre el tiempo empleado."

### 199

De acuerdo con el libro de Cálculo, ¿cómo se obtiene la velocidad instantánea?

- A. Es el límite, cuando el incremento del tiempo tiende a cero, del incremento del espacio recorrido entre el incremento del tiempo
- B. Es el cociente entre la distancia total recorrida y el tiempo total empleado
- C. Es el producto del incremento del tiempo por el incremento del espacio recorrido
- D. Es el valor de la posición en el instante inicial

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 149
**Subtema:** Modelación de situaciones · Velocidad instantánea

"[...] así entonces la velocidad es igual al límite cuando el incremento del tiempo (t) tiende a ser cero, del incremento del espacio recorrido entre el incremento del tiempo; en otras palabras: v(t) = lím (Δt→0) Δe/Δt = f'(x)."

### 200

Conforme al libro de Cálculo, ¿qué relación hay entre las derivadas sucesivas de la posición y la velocidad/aceleración de un móvil?

- A. La primera derivada se refiere a la velocidad, y la segunda derivada es la aceleración
- B. La primera derivada se refiere a la aceleración, y la segunda derivada es la velocidad
- C. La primera derivada se refiere a la posición, y la segunda a la velocidad
- D. Ambas derivadas, primera y segunda, se refieren a la velocidad

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 150
**Subtema:** Modelación de situaciones · Velocidad y aceleración como derivadas

"La primera derivada se refiere a la velocidad; mientras que la segunda derivada es la aceleración, que es la razón entre la velocidad y el tiempo."

---

## Sub-lote 9 · El incremento Δx (p.156)

### 201

De acuerdo con el libro de Cálculo, ¿cómo se representa un incremento de la variable x, y cuándo es positivo o negativo?

- A. Con Δx; es positivo si es incremento y negativo si es decremento, según la variable aumente o disminuya
- B. Con Δx; siempre es positivo, sin importar si la variable aumenta o disminuye
- C. Con dx; es positivo si es incremento y negativo si es decremento
- D. Con Δx; es positivo si la variable disminuye y negativo si aumenta

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 156
**Subtema:** Razones de cambio relacionadas · El incremento Δx

"Un incremento de la variable x lo representaremos con Δx (delta x) y puede ser positivo (incremento) o negativo (decremento), según la variable aumente o disminuya al cambiar de valor."

---

## Sub-lote 10 · Funciones creciente/decreciente, y máximos/mínimos relativos (3.5, pp. 160-165)

### 202

Conforme al libro de Cálculo, ¿cuál es la definición formal de que una función y = f(x) es creciente en un intervalo I = (a, b)?

- A. Si a < b; entonces f(a) < f(b)
- B. Si a < b; entonces f(a) > f(b)
- C. Si a > b; entonces f(a) < f(b)
- D. Si a < b; entonces f(a) = f(b)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 160
**Subtema:** Funciones creciente y decreciente · Definición formal

"Se dice que una función y = f(x) es creciente en un intervalo I = (a, b). Si se verifica que: a < b; entonces f(a) < f(b)"

---

### 203

¿Cuál es la definición formal de que una función y = f(x) es decreciente en un intervalo I = (a, b), según el libro de Cálculo?

- A. Si a < b; entonces f(a) > f(b)
- B. Si a < b; entonces f(a) < f(b)
- C. Si a > b; entonces f(a) > f(b)
- D. Si a < b; entonces f(a) ≥ f(b)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 160
**Subtema:** Funciones creciente y decreciente · Definición formal

"Se dice que una función y = f(x) es decreciente en un intervalo I = (a, b). Si se verifica que: a < b; entonces f(a) > f(b)"

---

### 204

De acuerdo con el libro, si f'(x) > 0 en un intervalo I, ¿qué se puede afirmar de la función y del ángulo que forma la tangente con la horizontal?

- A. f es creciente en ese intervalo, y el ángulo con la horizontal es mayor que cero y menor de 90°
- B. f es decreciente en ese intervalo, y el ángulo con la horizontal es mayor que cero y menor de 90°
- C. f es creciente en ese intervalo, y el ángulo con la horizontal es mayor de 90° y menor que 180°
- D. f es constante en ese intervalo, y el ángulo con la horizontal es igual a 90°

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 160
**Subtema:** Funciones creciente y decreciente · Criterio con la derivada y el ángulo de la tangente

"Si f'(x) > 0 en un intervalo I; entonces f es creciente en ese intervalo. Observemos en la figura 3.9 el ángulo que se forma con la horizontal es mayor que cero y menor de 90°."

---

### 205

Según el libro, si f'(x) < 0 en un intervalo I, ¿qué ocurre con la función y con el ángulo que forma la tangente con la horizontal?

- A. f es decreciente en ese intervalo, y el ángulo con la horizontal es mayor de 90° y menor que 180°
- B. f es creciente en ese intervalo, y el ángulo con la horizontal es mayor de 90° y menor que 180°
- C. f es decreciente en ese intervalo, y el ángulo con la horizontal es mayor que cero y menor de 90°
- D. f es decreciente en ese intervalo, y el ángulo con la horizontal es igual a 180°

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 160
**Subtema:** Funciones creciente y decreciente · Criterio con la derivada y el ángulo de la tangente

"Si f'(x) < 0 en un intervalo I; entonces f es decreciente en ese intervalo. Observemos en la gráfica el ángulo que se forma con la horizontal es mayor de 90° y menor que 180°."

---

### 206

Conforme al libro, sea una función y = f(x) continua en el intervalo I = [a, b], ¿cómo define el máximo relativo de la función en el punto x ∈ I?

- A. Se verifica que f(x − h) < f(x) > f(x + h)
- B. Se verifica que f(x − h) > f(x) < f(x + h)
- C. Se verifica que f(x − h) < f(x) < f(x + h)
- D. Se verifica que f(x − h) = f(x) = f(x + h)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 162
**Subtema:** Máximos y mínimos relativos · Definición formal

"Se dice que la función y = f(x) tiene un máximo relativo en el punto x ∈ I, si se verifica: f(x − h) < f(x) > f(x + h)"

---

### 207

¿Cómo define el libro el mínimo relativo de la función y = f(x) en el punto x ∈ I?

- A. Se verifica que f(x − h) > f(x) < f(x + h)
- B. Se verifica que f(x − h) < f(x) > f(x + h)
- C. Se verifica que f(x − h) > f(x) > f(x + h)
- D. Se verifica que f(x − h) < f(x) < f(x + h)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 162
**Subtema:** Máximos y mínimos relativos · Definición formal

"Se dice que la función y = f(x) tiene un mínimo relativo en el punto x ∈ I, si se verifica: f(x − h) > f(x) < f(x + h)"

---

### 208

Según el libro, ¿por qué a estos puntos máximos y mínimos se les llama "relativos"?

- A. Porque en realidad no son máximos ni mínimos, ya que hay valores más grandes o más pequeños en la función, pero en un intervalo sí se cumplen
- B. Porque su valor cambia según la escala de la gráfica que se utilice
- C. Porque dependen de la segunda derivada para confirmarse
- D. Porque sólo existen cuando la función es continua en todo su dominio

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 162
**Subtema:** Máximos y mínimos relativos · Por qué se llaman "relativos"

"Estos puntos se conocen como máximos o mínimos relativos, lo relativo es porque en realidad no son máximos ni son mínimos, ya que hay valores más grandes o más pequeños en la función, pero en un intervalo sí se cumplen."

---

### 209

En el método de la primera derivada, ¿cuándo será máximo un punto según el libro?

- A. Si la función cambia de creciente a decreciente
- B. Si la función cambia de decreciente a creciente
- C. Si la función se mantiene creciente en todo el intervalo
- D. Si la primera derivada es igual a cero en todo el intervalo

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 163
**Subtema:** Método de la primera derivada · Criterios de máximo y mínimo

"Será máximo si la función cambia de creciente a decreciente."

---

### 210

En el método de la primera derivada, ¿cuándo será mínimo un punto conforme al libro?

- A. Si la función cambia de decreciente a creciente
- B. Si la función cambia de creciente a decreciente
- C. Si la función se mantiene decreciente en todo el intervalo
- D. Si la segunda derivada es igual a cero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 163
**Subtema:** Método de la primera derivada · Criterios de máximo y mínimo

"Será mínimo si la función cambia de decreciente a creciente."

---

### 211

En el método de la segunda derivada, si el valor obtenido en la segunda derivada es mayor que cero, ¿qué representa ese punto según el libro?

- A. Un valor mínimo
- B. Un valor máximo
- C. Un punto de inflexión
- D. Un punto donde la función no está definida

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 165
**Subtema:** Método de la segunda derivada · Criterios de máximo y mínimo

"Si el valor obtenido en la segunda derivada es mayor que cero, entonces éste es un valor mínimo."

---

### 212

En el método de la segunda derivada, si el valor obtenido en la segunda derivada es menor que cero, ¿qué representa ese punto?

- A. Un valor máximo
- B. Un valor mínimo
- C. Un punto de inflexión
- D. Un valor indeterminado

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 165
**Subtema:** Método de la segunda derivada · Criterios de máximo y mínimo

"Si el valor obtenido en la segunda derivada es menor que cero, entonces éste es un valor máximo."

---

### 213

Según el libro, cuando se tiene una ecuación de segundo grado, ¿qué ventaja ofrece la segunda derivada para el método de máximos y mínimos?

- A. Al ser una constante, indica de inmediato si se trata de un mínimo o un máximo
- B. Se vuelve igual a cero, por lo que ya no hace falta evaluarla
- C. Se convierte en una función lineal que hay que igualar a cero nuevamente
- D. Deja de existir, por lo que sólo aplica el método de la primera derivada

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 165
**Subtema:** Método de la segunda derivada · Ecuaciones de segundo grado

"Cuando tenemos una ecuación de segundo grado, la segunda derivada es una constante, ésta nos indica de inmediato si hablamos de un mínimo o un máximo."
