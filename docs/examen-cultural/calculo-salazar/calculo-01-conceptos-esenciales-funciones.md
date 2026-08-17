# Cálculo · Unidad 1 · Conceptos esenciales de las funciones

**Libro:** Salazar, Bahena y Velázquez · *Cálculo. Teoría y aplicaciones* (Patria, 1.ª ed. 2020) · **Unidad 1 → EN CURSO**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Esta Unidad la pide la **EMT** (Escuela Militar de
> Transmisiones) dentro de su materia *Cálculo Diferencial* (`CÁLDIF-01-2026`), que
> reclama de este libro las **Unidades 1, 2 y 3**, las tres "Completo". Las líneas
> `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con que el
> temario los manda a llamar.

## Libro

Salazar Guerrero, Ludwing Javier; Bahena Román, Hugo; Velázquez Reyes, Luis Simón.
*Cálculo. Teoría y aplicaciones*. **Grupo Editorial Patria, S.A. de C.V.**,
**primera edición, 2020**. ISBN ebook 978-607-550-272-4.

**Edición verificada contra la página legal** (hoja 3 del PDF): *"CÁLCULO · Teoría y
aplicaciones · ©2020, Ludwing Javier Salazar Guerrero, Hugo Bahena Román, Luis Simón
Velázquez Reyes · ©2020, Grupo Editorial Patria, S.A. de C.V. · ISBN ebook:
978-607-550-272-4 (Primera edición) · Primera edición ebook: 2020"*. **Coincide exacta
con lo que pide el temario de la EMT** ("Salazar / Bahena / Velázquez, Grupo Editorial
Patria. 1/a. Edición 2020").

> **Ojo al nombre del primer autor:** el libro imprime **"Ludwing"**, con *n*, no
> "Ludwig". Se cita como está impreso.

**Desfase de páginas:** la hoja del PDF va **5 adelante** de la página impresa
(**hoja = página impresa + 5**). Leído del folio en tres hojas distintas: hoja 8 =
p.3 (portadilla de la Unidad 1), hoja 10 = p.5 y hoja 13 = p.8. **Las páginas se leen
de la hoja, nunca se calculan.**

## Método para este libro

**El PDF es escaneo puro: no trae capa de texto** (`get_text()` devuelve 0 caracteres
en las primeras 40 hojas). `extraer.py` no sirve aquí. Se trabaja con **`render.py`** y
lectura a ojo, como los libros del HCM y el de Geografía de la EMEFA; para cifras y
fórmulas, recorte con `crop.py` a 600 dpi antes de fijarlas.

## Alcance del temario

El temario `CÁLDIF-01-2026` de la EMT pide **tres unidades, las tres "Completo"**:

- **Unidad 1 · Conceptos esenciales de las funciones** (p.3) ← este archivo.
- **Unidad 2 · Límites de una función para analizar su comportamiento** (p.61).
- **Unidad 3 · La derivada de una función para modelar el cambio** (p.99).

**La Unidad 4 · La integral de una función para medir (pp. 188–325) NO la pide el
temario** y queda fuera, junto con la Bibliografía (p.326) y el Formulario (p.327).

Secciones de la Unidad 1, según el índice del libro:

- **1.1 Conceptos fundamentales que determinan a una función: dominio, codominio o contradominio, y regla de correspondencia** (p.8).
- **1.2 Nomenclatura y notación** (p.10).
- **1.3 Funciones reales de variable real** (p.10), con: a) Gráficas de funciones reales de variable real (p.13), b) Funciones explícitas o implícitas (p.25), c) Funciones inyectivas, sobreyectivas y biyectivas (p.42) y d) Función invertible y función inversa (p.49).

## Erratas del libro

- **Patrón: a este libro se le caen letras en los títulos de color.** Van **tres** casos
  verificados a 600 dpi, los tres en encabezados y ninguno en el cuerpo del texto. **No
  se escriben reactivos sobre títulos**, así que no afectan al banco, pero conviene
  saber que el aspirante los va a ver:
  - **p.23 — "Clasificación de funcione"**, sin la *s* final.
  - **p.16 — "Gráficas de funcione"**, sin la *s* final.
  - **p.13 — "Gráficas de funciones  eales"**, sin la *r* de *reales*. Detalle abajo.

  Dos de los tres pierden la misma letra —la *s* de "funciones"— en el mismo tipo de
  encabezado rosa. Ya no es casualidad: **al revisar títulos de este libro, dalos por
  sospechosos y no los cites como están.**
- **p.13 — "funciones  eales" por "funciones reales", en el título del inciso a).** El
  encabezado imprime *"a) Gráficas de funciones  eales de variable real (algebraicas y
  trascendentes)"*: **falta la "r" de reales** y queda el hueco doble donde iba.
  Verificado a 600 dpi; el **índice del libro (p.4) sí dice "reales"**, así que es un
  desliz de composición de esa página. **No afecta a ningún reactivo** —el título no se
  pregunta—, pero queda anotado por si el aspirante lo ve.
- **p.10 — la frase que abre el 1.2 tiene dos fallas.** El libro imprime:
  *"En una función, todo elemento de B correspondiente a un elemento de A **y** recibe
  el nombre de **imagen de A**."* Verificado a 600 dpi, las dos son del libro y no del
  escaneo:
  1. **La "y" sobra** — deja la oración sin verbo principal ("todo elemento… y recibe").
  2. **Debería decir "imagen de *x*", no "imagen de *A*".** La imagen lo es del
     **elemento**, no del conjunto. **El propio libro se contradice en esa misma
     página**: la Figura 1.5 rotula *"Imagen de x"* y dos renglones abajo el texto lee
     *y = f(x)* como *"y es la imagen de x según la función f"*.

  **No se escribe reactivo que pida el nombre "imagen de A".** El concepto se cubre por
  el lado limpio: cómo se lee *y = f(x)* y qué es el **rango**. Mismo trato que se le dio
  en Geografía al "-400 ms" del cuerpo frente al "-400 m" de la figura.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico, no práctico. Se
privilegian las definiciones, teoremas y reglas sobre los procedimientos de cálculo.
Los ejemplos numéricos y los bloques de ejercicios no se convierten en reactivos de
procedimiento; las definiciones, teoremas y fórmulas sí.

En este libro eso deja fuera, además: la **portadilla de cada unidad** (pp. 3–4 en la
Unidad 1), que es sólo el listado de contenidos conceptuales, procedimentales y
actitudinales; la **evaluación diagnóstica**; y los apartados **"Unidad integradora ·
Deduce y aprende"**, que son actividades de equipo con materiales y procedimiento.

## Criterio: nada de ejemplos ilustrativos

**Decisión de Carlo, 15 ago 2026**, tomada sobre este mismo archivo — la regla general
está en `docs/examen-cultural/README.md`. **No se escriben reactivos sobre la anécdota
con que el libro ilustra un concepto**, sólo sobre el concepto. El aspirante no puede
sacar el libro en pleno examen, así que un reactivo sobre el equipo de fútbol o sobre
la familia no mide si sabe qué es un conjunto: mide si recuerda con qué historia se lo
explicaron, y además está fuera del contexto de la materia.

**Este libro es especialmente propenso**, porque introduce cada tema con una escena
cotidiana antes de la definición: "tú y yo", la relación con los padres, el equipo
deportivo. **Se salta esa parte y se va a la definición.** Tres reactivos del sub-lote 1
se retiraron por esta regla: los dos de los ejemplos (equipo deportivo y padres) y el de
la frase de transición *"definimos esto porque lo usaremos en estos temas"*, que habla
del libro y no de la materia.

**No es veto absoluto** (matiz de Carlo, mismo día): cuando un ejemplo hace falta para
que el reactivo se entienda, se usa **como contexto del enunciado, no como respuesta**.
Lo prohibido es el reactivo que sólo se acierta habiendo memorizado la anécdota.

## Cobertura actual

- Cubierta la página impresa **8**: del apartado **Conjunto y elemento**, lo citable —
  la definición de conjunto, la de elemento y las letras con que se nombran unos y
  otros. **Quedan fuera sus dos ejemplos** (la familia y el equipo deportivo) y la
  frase de transición que abre el apartado, por la regla de arriba. Del arranque del
  **1.1 · Funciones** no salió reactivo: esa parte de la página es sólo la escena
  introductoria de "tú y yo" y la relación con los padres, que es ejemplo ilustrativo;
  **la teoría del 1.1 empieza en la p.9**. Las Figuras 1.1, 1.2 y 1.3 son ilustraciones.
- Cubierta la página impresa **9**: la **definición de función** — la característica de
  *"uno y solo un elemento"*, qué pasa cuando no se cumple (no es función), la notación
  ***f* : *A* → *B*** y cómo se lee (*"función de A en B"*). Los cuatro reactivos se
  escribieron **sin apoyarse en la escena de los padres**: preguntan la definición, no
  el ejemplo. **Fuera de esta página:** las dos **"Actividad de aprendizaje"** (son
  ejercicios) y la frase *"Las matemáticas nacieron debido a la necesidad que tenía el
  hombre de resolver problemas…"*, que es motivación para el estudiante y no contenido
  de la materia — cae bajo la regla hermana del README, la del dato que tiene que ser
  **del tema**. La Figura 1.4 es ilustración.
- Cubierta la página impresa **10**: el **1.2 Nomenclatura y notación** completo —la
  simbolización *y* = *f* (*x*) y cómo se lee, el **rango**, el **dominio de la
  función** y las tres abreviaturas *Dmf*, *Cdf* y *Rgf*— y el arranque del **1.3** con
  la **definición de dominio**. **No se tocó el término "imagen de A"**, que el libro
  imprime mal (ver "Erratas del libro"). **La mitad superior de la página es la cola de
  la actividad de aprendizaje** que venía de la p.9 —el ejercicio de las fotocopias y
  las reglas de asociación que hay que proponer— y no lleva reactivos. La Figura 1.5 es
  ilustración, pero se usó para detectar la errata.
- Cubierta la página impresa **11**: las definiciones de **contradominio** y de
  **función** con que el libro abre el 1.3, y el **criterio de la recta vertical** para
  reconocer cuándo una gráfica no es función. **Fuera de esta página:** el *Ejemplo* de
  la regla *y* = 2*x* con su *Solución*, la **Tabla 1.1** y la Figura 1.6, que son un
  ejercicio resuelto; y la mención de que las figuras 1.7 y 1.8 son "una circunferencia
  y una semicircunferencia", que es de qué dibujo usó el libro y no del criterio en sí.
- **La página impresa 12 NO dio ningún reactivo.** Entera es material excluido: las
  Figuras 1.7 y 1.8 (el criterio que ya quedó cubierto en la p.11), una **"Actividad de
  aprendizaje"** y un apartado **"Uso de la tecnología"** que explica qué teclas oprimir
  en la calculadora CLASSWIZ para armar una tabla. Eso último es manejo de herramienta,
  no matemáticas: cae bajo la regla del README de que el dato tiene que ser **del tema**.
- Cubierta la página impresa **13**: **Variables y constantes** (qué son unas y otras, y
  por qué *x* es independiente y *f* (*x*) dependiente) y el arranque del inciso **a)**
  con el **valor numérico de una función**. **Fuera:** la cola del "Uso de la
  tecnología" que ocupa el tercio superior, y la aplicación al problema de la caja
  (*"la variable independiente es x… las constantes son 18, 2 y 12"*), que es el
  ejercicio resuelto.
- Cubierta la página impresa **14**: el **cociente incremental** [ *f* (*x* + *h*) −
  *f* (*x*) ] / *h* con su condición *h* ≠ 0, su **equivalencia con la pendiente de una
  recta** de geometría analítica, y la regla para obtener *f* (*x* + *h*). La página es
  casi toda "Actividad de aprendizaje": lo que se tomó es la **exposición teórica metida
  dentro del bloque**, no los incisos que piden resolver (ver la nota del sub-lote 6).
  **Fuera:** los ejercicios *"determina las imágenes"* y *"encuentra f (x + h) para las
  funciones siguientes"*, las dos gráficas de la pendiente y el desarrollo
  *f* (*x* + *h*) = 2(*x* + *h*) = 2*x* + 2*h*, que es el ejemplo resuelto.
- **Las páginas impresas 15 y 16 NO dieron ningún reactivo**, y queda anotado por qué.
  La **15** es entera práctica: dos ejemplos resueltos y dos actividades; lo único
  conceptual que asoma (*"se sustituye (x + h) en lugar de cada x"*) **ya está en el
  reactivo 28**. La **16** es el desarrollo largo del cociente para *f* (*x*) = 3*x*² −
  2*x* + 5, dos actividades más, y el arranque del apartado *Gráficas de funcione[s]*,
  que abre con un consejo de estudio (*"es muy importante que lo domines con y sin el
  uso de la tecnología"*) — eso no es materia, cae bajo la regla del dato **del tema**.
- Cubierta la página impresa **17**: la **definición de gráfica de una función**, por
  qué lo que se traza es sólo una **aproximación**, qué gana uno al tomar más puntos, y
  los **cinco pasos** del procedimiento para graficar sin tecnología. **Fuera:** el
  *Ejemplo* de *f* (*x*) = *x*² − 2*x* − 5 con su Solución paso a paso, su tabla de
  valores y las Figuras 1.9 y 1.10, que son el ejercicio resuelto.
- Cubierta la página impresa **18**: el nombre del proceso (**graficar la función**) y
  de la curva (**gráfica o lugar geométrico**), para qué sirve la representación, y el
  **caso particular de la ecuación lineal** —que la gráfica es una recta y bastan dos
  valores, por qué el libro toma tres, en cuántos puntos evaluarla y que los extremos
  pueden prolongarse—. **Ojo:** esta página trae **tres pasos** para el caso lineal que
  **no son los cinco pasos generales de la p.17**; los reactivos anclan el enunciado al
  caso lineal para que no se revuelvan (ver la nota del sub-lote 8). **Fuera:** el
  desarrollo del ejemplo *y* = (3/2)*x* + 2, la Tabla 1.2, la Figura 1.11 y la actividad
  de aprendizaje del cierre.
- Cubierta la página impresa **19**: la **nomenclatura de las funciones básicas** que el
  libro enlista (idéntica, simétrica, radical y máximo entero). Sale de la lista de una
  "Actividad de aprendizaje", con el mismo criterio del sub-lote 6: se toma el **nombre**
  que el libro asocia a cada expresión, no el ejercicio de graficarlas. **Fuera:** los
  nombres que el símbolo delata solo (constante, cuadrática, valor absoluto), las
  funciones de la lista que el libro no bautiza (*y* = 2ˣ, *y* = log *x*, *y* = ln *x*,
  las racionales), el bloque de funciones trigonométricas con sus ángulos, y la
  **"Actividad con TIC"** de la calculadora CLASSWIZ, que es manejo de herramienta.
- **Las páginas impresas 20, 21 y 22 NO dieron ningún reactivo.** Las tres son manejo de
  herramienta: la **20** cierra la "Actividad con TIC" de la calculadora CLASSWIZ (qué
  teclas oprimir, valor inicial, final y paso), y la **21** y la **22** son el apartado
  *Uso de graficado* con el software **Winplot** —sus menús, sus capturas de pantalla y
  cómo teclear una función en él—. Nada de eso es materia de Cálculo.
- Cubierta la página impresa **23**: la **clasificación de las funciones** (la primera
  división en algebraicas y trascendentes) y las **algebraicas** completas —sus tres
  grupos, qué es cada uno y los cuatro casos en que una expresión **no** es un
  polinomio—. **Fuera:** la actividad de aprendizaje de la cabecera, la forma general
  *P*(*x*) = *aₙxⁿ* + … (fórmula desarrollada que el examen no pide escribir) y los
  ejemplos de cada tipo.
- Cubierta la página impresa **24**: las **funciones trascendentes** completas —sus tres
  grupos, de dónde se obtienen las trigonométricas, el **argumento**, qué son las
  exponenciales y de qué función son inversas las logarítmicas— y el apartado **Función
  creciente y función decreciente** (las definiciones de monótona creciente y monótona
  decreciente, y cómo se representan gráficamente). **Con esta página queda cerrado el
  inciso a)**, el primero de los cuatro del 1.3. **Fuera:** los ejemplos de cada tipo de
  función, la Figura 1.19 con su lectura por colores, el cuadro de "Sustituye y verifica"
  con espacios en blanco, y la actividad de aprendizaje del cierre.
- Cubierta la página impresa **25**: el arranque del inciso **b) Funciones explícitas o
  implícitas** —la definición de una y otra— y el apartado **Función par e impar**: las
  condiciones *f* (−*x*) = *f* (*x*) y *f* (−*x*) = −*f* (*x*), y respecto a qué es
  simétrica cada una. **Fuera:** la cola de la actividad de la p.24, la **Tabla 1.3** con
  los pares implícita/explícita (son ejemplos), el *Ejemplo* de *f* (*x*) = *x*² con su
  Solución y la Figura 1.20.
- Cubierta la página impresa **26**, que **rinde poco a propósito**: sólo el arranque de
  **Números reales** con los **naturales** (qué son, su letra y qué indican los tres
  puntos). El resto de la página es material excluido — el *Ejemplo* de *f* (*x*) = *x*³
  con su Solución y la Figura 1.21, la actividad de aprendizaje de 17 incisos, y la frase
  de transición que abre *Dominio y rango de una función* (*"se hace necesario que tengas
  muy claro cómo están formados los números reales"*), que anuncia el tema en vez de
  enseñarlo. **La lista de los números reales sigue en la p.27** y ahí se recoge entera.
- Cubierta la página impresa **27**: el resto de los **números reales** —enteros,
  racionales e irracionales, con sus letras y sus formas de representación decimal— y el
  arranque del **dominio**: que el de los polinomios son todos los reales, y el apartado
  **Dominio de las funciones racionales y asíntotas verticales** (cuándo no está definida
  y qué debe cumplir el denominador). **Fuera:** la Figura 1.23, los ejemplos de
  fracciones y de decimales periódicos, los valores de √2, √3, π y *e* (son ejemplos de
  números, no la definición), y el *Ejemplo* de *f* (*x*) = 3/(*x* − 5) con su Solución.
- Cubierta la página impresa **28**: el significado del **símbolo ∪**, que para el dominio
  de una racional **no importa el numerador**, que el denominador siempre debe ser un
  polinomio distinto de cero, y la propiedad **|*x*| = √*x*²**. Esta última el libro la
  suelta como recordatorio dentro de la solución de un ejemplo, pero es una propiedad
  general y por eso entra. **Fuera:** el desarrollo del ejemplo de *f* (*x*) = 3/(*x* − 5)
  con sus formas de escribir el dominio, la actividad de aprendizaje, el *Ejemplo* de
  *f* (*x*) = 3/(*x*² − 25) con su Solución paso a paso, y las Figuras 1.24 y 1.25.
- Cubierta la página impresa **29**: el apartado **Asíntotas verticales** completo —qué es
  una asíntota, su ecuación *x* = *k* y qué representa la *k*, cómo se obtienen, y la
  relación directa entre el dominio y el trazo de las asíntotas— más la razón de que **los
  extremos no estén contenidos** en la notación de intervalos. **Fuera:** el desarrollo del
  ejemplo de *f* (*x*) = 3/(*x* − 5), la Figura 1.26 y las dos actividades de aprendizaje.

**Pendiente:** EN CURSO. **El 1.1 y el 1.2 quedan cubiertos** (pp. 8–10), y del **1.3**
va cubierto hasta la **p.29**, con lo que **el inciso a) quedó CERRADO** (pp. 13–24) y el
**b) está EN CURSO**. Sigue desde la **p.30** con el resto del **b)** funciones explícitas
o implícitas (pp. 30–41), y luego **c)** inyectivas, sobreyectivas y biyectivas (pp. 42–48) y
**d)** función invertible y función inversa (pp. 49–60), hasta cerrar la Unidad 1
en la p.60. Después van la **Unidad 2**
(p.61) y la **Unidad 3** (p.99), cada una en su propio archivo. **Cálculo Diferencial
es materia nueva del banco:** mientras no exista el `.md` de la Unidad 2, éste sostiene
el pendiente de toda la materia.

---

## Sub-lote 1 · Conjunto y elemento, y el arranque de las funciones (p.8)

### 1

De acuerdo con el libro de Cálculo, ¿qué es un conjunto?

- A. Una colección de objetos que deben estar bien definidos
- B. Una colección de objetos elegidos al azar
- C. Una regla que asocia a cada objeto con otro
- D. Una pareja de objetos relacionados entre sí

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Definición de conjunto

"Un conjunto es una colección de objetos que deben estar bien definidos."

> Nota de revisor: el filo está en **bien definidos**. Quien recuerde sólo "colección de objetos" cae en el distractor B.

### 2

De conformidad con el libro de Cálculo, ¿cómo se llaman los objetos que pertenecen a un conjunto?

- A. Elementos
- B. Variables
- C. Términos
- D. Componentes

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Definición de elemento

"Los objetos que pertenecen a un conjunto se llaman elementos."

### 3

En relación con el libro de Cálculo, ¿qué letras se utilizan para nombrar conjuntos?

- A. Letras mayúsculas: A, B, C
- B. Letras minúsculas: a, b, c
- C. Letras griegas: α, β, γ
- D. Las últimas letras del alfabeto: x, y, z

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Notación

"Para nombrar conjuntos se utilizan letras mayúsculas: A, B, C, y letras minúsculas: a, b, c, para indicar elementos."

### 4

De acuerdo con el libro de Cálculo, ¿qué letras se utilizan para indicar elementos?

- A. Letras minúsculas: a, b, c
- B. Letras mayúsculas: A, B, C
- C. Letras griegas: α, β, γ
- D. Números naturales: 1, 2, 3

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Notación

"Para nombrar conjuntos se utilizan letras mayúsculas: A, B, C, y letras minúsculas: a, b, c, para indicar elementos."

> Nota de revisor: los reactivos 3 y 4 van con las opciones cruzadas. Es la misma frase del libro leída en sus dos mitades, y el par mayúscula/minúscula se voltea solo.

---

## Sub-lote 2 · Qué es una función y cómo se expresa (1.1, p.9)

### 5

De conformidad con el libro de Cálculo, ¿qué característica debe cumplirse para que una relación sea función?

- A. Que a un elemento del primer conjunto le corresponda "uno y solo un elemento" del segundo conjunto
- B. Que a un elemento del primer conjunto le correspondan dos o más elementos del segundo conjunto
- C. Que todos los elementos del primer conjunto sean distintos entre sí
- D. Que los dos conjuntos tengan el mismo número de elementos

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 9
**Subtema:** Conceptos fundamentales de una función · Definición de función

"[...] decimos que a un elemento del primer conjunto le corresponde *uno y solo un elemento* del segundo conjunto."

### 6

En relación con el libro de Cálculo, cuando a un elemento del primer conjunto le corresponden dos elementos del segundo, ¿qué se concluye?

- A. Que no es función
- B. Que es una función inversa
- C. Que es una función biyectiva
- D. Que es una función de dos variables

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 9
**Subtema:** Conceptos fundamentales de una función · Definición de función

"[...] le corresponden dos elementos, por lo que no se cumple la característica de *uno y solo un elemento*; por ello, decimos que no es función."

### 7

De acuerdo con el libro de Cálculo, ¿cómo se expresa la relación que asocia a un elemento del conjunto *A* con un solo elemento del conjunto *B*?

- A. *f* : *A* → *B*
- B. *A* : *f* → *B*
- C. *f* : *B* → *A*
- D. *A* → *B* : *f*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 9
**Subtema:** Conceptos fundamentales de una función · Notación

"Este tipo especial de relación tiene una característica que asocia a un elemento del conjunto A con un solo elemento del conjunto B, con la característica de que únicamente se le asocia *un solo elemento*. Lo que expresamos como: *f* : *A* → *B*"

### 8

De conformidad con el libro de Cálculo, ¿cómo se lee la expresión *f* : *A* → *B*?

- A. "Función de *A* en *B*"
- B. "Función de *B* en *A*"
- C. "Función *f* entre *A* y *B*"
- D. "*A* es función de *B*"

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 9
**Subtema:** Conceptos fundamentales de una función · Notación

"Que leeremos como *función de A en B*."

> Nota de revisor: el orden es el filo. El distractor B invierte los conjuntos y suena igual de razonable si no se fijó cuál va primero.

---

## Sub-lote 3 · Nomenclatura, dominio, contradominio y rango (1.2 y 1.3, p.10)

### 9

En relación con el libro de Cálculo, ¿cómo se simboliza la imagen de un elemento según una función?

- A. *y* = *f* (*x*)
- B. *f* = *y* (*x*)
- C. *x* = *f* (*y*)
- D. *f* : *y* → *x*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Notación

"Se simboliza por: *y* = *f* (*x*)"

### 10

De acuerdo con el libro de Cálculo, ¿cómo se lee la expresión *y* = *f* (*x*)?

- A. "*y* es la imagen de *x* según la función *f*", o simplemente "*y* igual a *f* de *x*"
- B. "*x* es la imagen de *y* según la función *f*", o simplemente "*x* igual a *f* de *y*"
- C. "*f* es la imagen de *x* según la función *y*"
- D. "*y* es el dominio de *x* según la función *f*"

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Notación

"[...] que leeremos como: *y es la imagen de x según la función f* o simplemente: *y igual a f de x* [...]"

### 11

De conformidad con el libro de Cálculo, ¿qué nombre recibe el conjunto de imágenes?

- A. Rango
- B. Dominio
- C. Contradominio
- D. Codominio

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Rango

"[...] el conjunto de imágenes recibe el nombre de rango."

### 12

En relación con el libro de Cálculo, ¿qué nombre recibe el conjunto *A*, donde la función toma sus valores?

- A. Dominio de la función
- B. Contradominio de la función
- C. Rango de la función
- D. Imagen de la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Dominio

"Al conjunto A o conjunto donde toma sus valores la función recibe el nombre de dominio de la función [...]"

### 13

De acuerdo con el libro de Cálculo, ¿cómo se denota el dominio de la función?

- A. *Dmf*
- B. *Cdf*
- C. *Rgf*
- D. *Imf*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Dominio

"[...] recibe el nombre de dominio de la función y se denota por *Dmf* [...]"

### 14

De conformidad con el libro de Cálculo, ¿cómo se indica el contradominio o codominio?

- A. *Cdf*
- B. *Dmf*
- C. *Rgf*
- D. *Ctf*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Contradominio

"[...] y el contradominio o codominio se indica por *Cdf*."

### 15

En relación con el libro de Cálculo, ¿cómo se denota el rango?

- A. *Rgf*
- B. *Dmf*
- C. *Cdf*
- D. *Rnf*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Nomenclatura y notación · Rango

"El conjunto de imágenes lo llamamos rango y lo denotamos por *Rgf*."

> Nota de revisor: los reactivos 13, 14 y 15 son las tres abreviaturas cruzadas entre sí. Es el trío que se revuelve solo, y el examen real lo pregunta exactamente así.

### 16

De acuerdo con el libro de Cálculo, ¿qué es el dominio?

- A. El conjunto donde la función está definida, o sea, donde puede tomar sus valores y realizar las operaciones que se indican en dicha relación
- B. El conjunto de todas las imágenes que produce la función
- C. El conjunto al que pertenecen los valores que la función devuelve
- D. La regla que asocia cada valor con su imagen

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 10
**Subtema:** Funciones reales de variable real · Dominio

"Dominio. Conjunto donde la función está definida, o sea, donde puede tomar sus valores y realizar las operaciones que se indican en dicha relación."

---

## Sub-lote 4 · Contradominio, la definición de función y el criterio de la recta vertical (1.3, p.11)

### 17

De conformidad con el libro de Cálculo, ¿qué es el contradominio?

- A. El conjunto de todos los posibles resultados que obtenemos al realizar operaciones con los elementos del dominio
- B. El conjunto donde la función está definida y puede tomar sus valores
- C. La regla que asocia cada elemento con su imagen
- D. El conjunto formado únicamente por las imágenes que la función alcanza

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 11
**Subtema:** Funciones reales de variable real · Contradominio

"Contradominio. Conjunto de todos los posibles resultados que obtenemos al realizar operaciones con los elementos del dominio."

> Nota de revisor: el distractor B es la definición de **dominio** que el libro da un renglón antes, y el D roza el **rango**. Los tres conceptos vienen seguidos y es donde se revuelven.

### 18

En relación con el libro de Cálculo, ¿cómo define el libro la función?

- A. Relación que existe entre dos conjuntos, con la condición de que a cada elemento del dominio le corresponde uno y solamente un elemento en el contradominio
- B. Relación que existe entre dos conjuntos, con la condición de que a cada elemento del contradominio le corresponden dos o más elementos del dominio
- C. Regla que transforma todos los elementos de un conjunto en números reales
- D. Conjunto de todos los resultados posibles de una operación

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 11
**Subtema:** Funciones reales de variable real · Definición de función

"Función. Relación que existe entre dos conjuntos, con la condición de que a cada elemento del dominio le corresponde uno y solamente un elemento en el contradominio."

> Nota de revisor: complementa al reactivo 5. Aquél sale de la redacción informal de la p.9 ("uno y solo un elemento"); éste es la **definición formal** con que el libro abre el 1.3, y nombra dominio y contradominio. El aspirante debe reconocer las dos.

### 19

De acuerdo con el libro de Cálculo, ¿qué se traza sobre una gráfica para mostrar que no corresponde a una función?

- A. Una línea recta vertical
- B. Una línea recta horizontal
- C. Una recta que pase por el origen
- D. Una recta paralela a la gráfica

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 11
**Subtema:** Funciones reales de variable real · Criterio de la recta vertical

"[...] se ha trazado una línea recta vertical que corta a la gráfica en dos puntos, por lo que a cada punto del dominio le corresponden dos valores."

### 20

De conformidad con el libro de Cálculo, cuando la recta vertical corta a la gráfica en más de un punto, ¿qué se concluye?

- A. Que no es función
- B. Que es una función inversa
- C. Que la función no está definida en ese intervalo
- D. Que el dominio y el contradominio son iguales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 11
**Subtema:** Funciones reales de variable real · Criterio de la recta vertical

"[...] donde se ha trazado una recta vertical que las corta, cuando esto sucede en más de un punto, entonces no es función."

---

## Sub-lote 5 · Variables, constantes y valor numérico de una función (1.3 a, p.13)

### 21

En relación con el libro de Cálculo, ¿cómo se llaman los valores que nunca cambian de valor?

- A. Constantes
- B. Variables
- C. Imágenes
- D. Coeficientes

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 13
**Subtema:** Variables y constantes · Constantes

"[...] hay valores como el 2 que nunca cambian de valor; por ello, los llamamos constantes."

### 22

De acuerdo con el libro de Cálculo, ¿cómo se llaman los valores que sí cambian de valor?

- A. Variables
- B. Constantes
- C. Contradominios
- D. Rangos

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 13
**Subtema:** Variables y constantes · Variables

"[...] observa que hay otros que sí cambian de valor y se llaman variables."

### 23

De conformidad con el libro de Cálculo, ¿por qué la variable *x* se llama independiente?

- A. Porque sus valores los toma del dominio de la función
- B. Porque su valor depende del que tome *f* (*x*)
- C. Porque nunca cambia de valor a lo largo de la función
- D. Porque puede tomar cualquier valor sin pertenecer a ningún conjunto

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 13
**Subtema:** Variables y constantes · Variable independiente

"Las variables pueden ser independientes (*x*), ya que sus valores los toma del dominio de la función [...]"

### 24

En relación con el libro de Cálculo, ¿por qué *f* (*x*) se llama variable dependiente?

- A. Porque depende del valor que tome *x* para tomar su valor
- B. Porque sus valores los toma del dominio de la función
- C. Porque depende de las constantes que aparezcan en la función
- D. Porque su valor lo determina el contradominio

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 13
**Subtema:** Variables y constantes · Variable dependiente

"[...] en cambio, *f* (*x*) es una variable que depende del valor que tome *x* para tomar su valor; por ello, se llama variable dependiente"

> Nota de revisor: los reactivos 23 y 24 van con las opciones cruzadas. Es el par que se voltea solo, y el libro los explica en la misma frase.

### 25

De acuerdo con el libro de Cálculo, ¿qué es el valor numérico de una función?

- A. El conjunto de las imágenes de los elementos del dominio que se obtienen al sustituir la variable independiente *x* en la función
- B. El conjunto de los elementos del dominio en los que la función está definida
- C. El número de veces que la función corta al eje horizontal
- D. La constante que acompaña a la variable independiente

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 13
**Subtema:** Gráficas de funciones reales · Valor numérico de una función

"Se llama así al conjunto de las imágenes de los elementos del dominio que se obtienen al sustituir la variable independiente *x* en la función."

---

## Sub-lote 6 · El cociente incremental y f(x + h) (1.3 a, p.14)

> **Estos tres reactivos salen de dentro de una "Actividad de aprendizaje".** No
> contradice la norma de teoría sobre práctica: lo que se toma **no es el ejercicio**,
> sino la **exposición teórica que el libro metió dentro del bloque de actividad** —el
> cociente, su condición y su equivalencia con la pendiente—. El precedente está en el
> propio Anexo "H": su **Ejemplo 4 salió verbatim de la Actividad 1.3** del Taller de
> Redacción, así que la SEDENA también saca reactivos de esos bloques. Lo que se
> descarta son los incisos que piden resolver (*"determina las imágenes"*, *"encuentra
> f(x + h) para las funciones siguientes"*).

### 26

De conformidad con el libro de Cálculo, ¿con qué condición se plantea el cociente [ *f* (*x* + *h*) − *f* (*x*) ] / *h*?

- A. *h* ≠ 0
- B. *h* > 0
- C. *h* = 0
- D. *x* ≠ 0

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 14
**Subtema:** Gráficas de funciones reales · Cociente incremental

"[...] debemos encontrar el valor del siguiente cociente para una función determinada: [ *f* (*x* + *h*) − *f* (*x*) ] / *h*, *h* ≠ 0"

### 27

En relación con el libro de Cálculo, ¿para qué se utilizaba ese mismo cociente, con otra notación, en geometría analítica?

- A. Para calcular la pendiente de una recta
- B. Para calcular la distancia entre dos puntos
- C. Para calcular el área bajo una curva
- D. Para determinar el dominio de una función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 14
**Subtema:** Gráficas de funciones reales · Cociente incremental

"[...] ya que con anterioridad en geometría analítica lo utilizaste con otra notación para calcular la pendiente de una recta: *m* = (*y*₂ − *y*₁) / (*x*₂ − *x*₁)"

> Nota de revisor: es el puente entre lo que el aspirante ya vio en geometría analítica y lo que viene después. El libro lo dice de pasada y es de los que se saltan.

### 28

De acuerdo con el libro de Cálculo, para encontrar *f* (*x* + *h*), ¿qué se hace?

- A. A *x* se le sustituye por el valor (*x* + *h*) y se realizan las operaciones
- B. A *x* se le suma *h* al final del resultado de la función
- C. Se multiplica toda la función por (*x* + *h*)
- D. Se despeja *h* de la función original

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 14
**Subtema:** Gráficas de funciones reales · Cociente incremental

"Esto quiere decir que a *x* lo sustituimos por el valor (*x* + *h*) y realizamos operaciones."

> Nota de revisor: el distractor B es el error clásico —sumarle *h* al resultado en vez de sustituir dentro de la función— y por eso se deja como opción.

---

## Sub-lote 7 · Qué es la gráfica de una función y los cinco pasos para trazarla (1.3 a, p.17)

### 29

De conformidad con el libro de Cálculo, ¿qué es la gráfica de una función?

- A. La representación por medio de una imagen o pintura que nos permite realizar un análisis del comportamiento que tiene
- B. La tabla de valores que se obtiene al sustituir la variable independiente
- C. El conjunto de todas las imágenes que produce la función
- D. La expresión algebraica que relaciona la variable dependiente con la independiente

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Definición de gráfica

"La gráfica de una función es la representación por medio de una imagen o pintura que nos permite realizar un análisis del comportamiento que tiene."

### 30

En relación con el libro de Cálculo, ¿por qué lo que se traza es sólo una aproximación a la verdadera gráfica?

- A. Porque es imposible tomar todos los valores del dominio de la función
- B. Porque los instrumentos de trazo tienen un margen de error
- C. Porque la escala de los ejes deforma la figura
- D. Porque sólo pueden usarse valores positivos de la variable

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Definición de gráfica

"Entenderemos por gráfica de una función a una aproximación a la verdadera gráfica, esto sucede porque es imposible tomar todos los valores del dominio de la función [...]"

### 31

De acuerdo con el libro de Cálculo, ¿qué ocurre entre más puntos se toman?

- A. Más nos acercamos a la idea de la gráfica
- B. Más se deforma la gráfica obtenida
- C. Menos exacta resulta la representación
- D. Más se reduce el dominio de la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Definición de gráfica

"[...] claro que entre más puntos se toman, más nos acercamos a la idea de la gráfica."

### 32

De conformidad con el libro de Cálculo, en el **primer paso** para graficar sin tecnología, ¿qué valores se asignan a la variable independiente y por qué?

- A. Por lo general positivos, negativos y el número cero, pues en ellos ocurren los cambios en el comportamiento de la gráfica
- B. Únicamente valores positivos, porque son los que pueden representarse en el plano
- C. Únicamente los valores que anulan la función, porque marcan los cortes con los ejes
- D. Valores muy grandes, porque en ellos se aprecia mejor la tendencia

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Pasos para graficar

"Primer paso. Asignamos valores a la variable independiente, los cuales son por lo general positivos, negativos y el número cero (−3, −2, −1, 0, 1, 2, 3), pues en ellos ocurren los cambios en el comportamiento de la gráfica."

> Nota de revisor: el **porqué** es el dato olvidable. El aspirante recuerda que se dan valores y se salta que se eligen ahí porque es donde cambia el comportamiento.

### 33

En relación con el libro de Cálculo, ¿qué se hace en el **segundo paso** para graficar?

- A. Con estos valores obtenemos el valor numérico de la función
- B. Formamos una tabla con los valores dados y los obtenidos
- C. Localizamos los pares ordenados en un sistema de ejes coordenados
- D. Unimos los puntos por medio de segmentos de recta

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Pasos para graficar

"Segundo paso. Con estos valores obtenemos el valor numérico de la función."

### 34

De acuerdo con el libro de Cálculo, ¿en qué paso se forma la tabla con los valores dados y los obtenidos?

- A. En el tercer paso
- B. En el segundo paso
- C. En el cuarto paso
- D. En el quinto paso

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Pasos para graficar

"Tercer paso. Con los valores dados y los obtenidos, formamos una tabla."

### 35

De conformidad con el libro de Cálculo, ¿qué se hace en el **cuarto paso** para graficar?

- A. Localizamos los valores de la tabla, que son pares ordenados, en un sistema de ejes coordenados
- B. Unimos los puntos obtenidos por medio de segmentos de recta
- C. Asignamos valores a la variable independiente
- D. Obtenemos el valor numérico de la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Pasos para graficar

"Cuarto paso. Localizamos estos valores (par ordenado) de la tabla en un sistema de ejes coordenados."

### 36

En relación con el libro de Cálculo, ¿qué se hace en el **quinto paso** para graficar?

- A. Unimos estos puntos por medio de segmentos de recta
- B. Localizamos los pares ordenados en los ejes coordenados
- C. Formamos la tabla de valores
- D. Comprobamos el resultado con un graficador

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 17
**Subtema:** Gráficas de funciones reales · Pasos para graficar

"Quinto paso. Unimos estos puntos por medio de segmentos de recta."

> Nota de revisor: los cinco pasos van con las opciones cruzadas entre sí —cada distractor es otro paso real del mismo procedimiento—. El orden es justo lo que el examen pregunta en este tipo de listas.

---

## Sub-lote 8 · Graficar la función, el lugar geométrico y el caso de la recta (1.3 a, p.18)

> **Ojo, el libro da DOS juegos de pasos distintos y hay que no revolverlos.** Los
> **cinco pasos** de la p.17 son el procedimiento **general** para graficar cualquier
> función. Los **tres pasos** de esta p.18 son para el **caso particular de una ecuación
> lineal**, donde basta con dos puntos. Los reactivos de este sub-lote anclan siempre el
> enunciado al caso lineal para que no se confundan con los de la p.17.

### 37

De acuerdo con el libro de Cálculo, ¿cómo se llama el proceso de obtener la representación de una función a partir de sus puntos?

- A. Graficar la función
- B. Tabular la función
- C. Evaluar la función
- D. Aproximar la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Lugar geométrico

"El proceso antes descrito es llamado graficar la función [...]"

### 38

De conformidad con el libro de Cálculo, ¿cómo se llama la curva que resulta de graficar una función?

- A. Gráfica o lugar geométrico
- B. Tabulador o tabla de valores
- C. Plano coordenado
- D. Par ordenado

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Lugar geométrico

"[...] y la curva es llamada gráfica o lugar geométrico de la misma [...]"

> Nota de revisor: **lugar geométrico** es el término que se cae. El aspirante se queda con "gráfica" y no registra que el libro le da el segundo nombre.

### 39

En relación con el libro de Cálculo, ¿para qué sirve la representación gráfica de una función?

- A. Para identificar algunas características o propiedades de la función
- B. Para calcular con exactitud el valor numérico de la función
- C. Para determinar el número de elementos del dominio
- D. Para comprobar que la función tiene inversa

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Lugar geométrico

"Esta representación nos sirve para identificar algunas características o propiedades de la función que veremos en temas más adelante."

### 40

De acuerdo con el libro de Cálculo, si una función es de primer grado, ¿qué nos indica eso sobre su gráfica?

- A. Que la gráfica es una línea recta y entonces sólo se requieren dos valores para *x*
- B. Que la gráfica es una parábola y se requieren al menos cinco valores para *x*
- C. Que la gráfica no puede trazarse sin el uso de un graficador
- D. Que la gráfica pasa forzosamente por el origen

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Gráfica de una ecuación lineal

"Primero vemos que la función es de primer grado, un caso especial; esto nos indica que la gráfica es una línea recta y entonces sólo se requieren dos valores para *x* [...]"

### 41

De conformidad con el libro de Cálculo, si con dos valores basta para trazar una recta, ¿por qué el libro toma tres?

- A. Por si hubiera algún error de operaciones
- B. Porque con dos puntos la recta queda indeterminada
- C. Porque el tercero marca el corte con el eje vertical
- D. Porque el procedimiento general exige siempre tres valores

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Gráfica de una ecuación lineal

"[...] entonces sólo se requieren dos valores para *x*; en este caso daremos tres por si hubiera algún error de operaciones."

> Nota de revisor: es de los datos que nadie retiene, porque parece un comentario al margen. Pero es la razón que el libro da, y está en la misma frase que el dato que sí se recuerda.

### 42

En relación con el libro de Cálculo, al graficar una ecuación lineal, ¿en cuántos puntos hay que evaluarla y cuáles conviene elegir?

- A. En por lo menos dos puntos cualesquiera, de preferencia aquellos que sean fáciles de evaluar
- B. En exactamente tres puntos, de preferencia negativos, cero y positivo
- C. En por lo menos cinco puntos, repartidos a ambos lados del origen
- D. En los puntos donde la función se anula

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Gráfica de una ecuación lineal

"Primer paso. Evalúa la ecuación lineal en por lo menos dos puntos cualesquiera, de preferencia aquellos que sean fáciles de evaluar."

### 43

De acuerdo con el libro de Cálculo, una vez localizados los puntos de una recta y unidos por segmentos, ¿qué puede hacerse con los extremos?

- A. Prolongarlos, para tener una idea más clara de cómo es la recta
- B. Cerrarlos, para delimitar el dominio de la función
- C. Marcarlos con un punto hueco, porque la función no está definida ahí
- D. Dejarlos exactamente donde terminan los valores tabulados

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 18
**Subtema:** Gráficas de funciones reales · Gráfica de una ecuación lineal

"Tercer paso. Localiza los puntos en un plano coordenado y únelos por segmentos de recta, se pueden prolongar los extremos para tener una idea más clara de cómo es la recta."

---

## Sub-lote 9 · Cómo nombra el libro a las funciones básicas (1.3 a, p.19)

> **Estos reactivos salen de la lista de una "Actividad de aprendizaje"**, igual que los
> del sub-lote 6 y por la misma razón: lo que se toma **no es el ejercicio** —"realiza la
> gráfica de las siguientes funciones"— sino la **nomenclatura** que el libro asocia a
> cada expresión, que es contenido de la materia y aparece verbatim. Se dejaron fuera
> los nombres que el propio símbolo delata (*constante* para *y* = 3, *cuadrática* para
> *y* = *x*², *valor absoluto* para *y* = |*x*|): ahí no hay dato que recordar.

### 44

De conformidad con el libro de Cálculo, ¿cómo se llama la función *y* = *x*?

- A. Idéntica
- B. Simétrica
- C. Constante
- D. Radical

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 19
**Subtema:** Gráficas de funciones reales · Funciones básicas

"1. Idéntica  *y* = *x*"

### 45

En relación con el libro de Cálculo, ¿cómo se llama la función *y* = −*x*?

- A. Simétrica
- B. Idéntica
- C. Cuadrática
- D. Máximo entero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 19
**Subtema:** Gráficas de funciones reales · Funciones básicas

"3. Simétrica  *y* = −*x*"

> Nota de revisor: el par *y* = *x* / *y* = −*x* va con las opciones cruzadas. Se
> distinguen por un signo y el libro les da nombres distintos, así que es donde falla
> quien leyó la lista de corrido.

### 46

De acuerdo con el libro de Cálculo, ¿cómo se llama la función *f* (*x*) = √*x*?

- A. Radical
- B. Cuadrática
- C. Idéntica
- D. Máximo entero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 19
**Subtema:** Gráficas de funciones reales · Funciones básicas

"5. Radical  *f* (*x*) = √*x*"

### 47

De conformidad con el libro de Cálculo, ¿cómo se llama la función *y* = [*x*]?

- A. La función máximo entero
- B. La función valor absoluto
- C. La función simétrica
- D. La función constante

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 19
**Subtema:** Gráficas de funciones reales · Funciones básicas

"7. La función máximo entero  *y* = [*x*]"

> Nota de revisor: es el nombre más olvidable de la lista, y el corchete se confunde con
> la barra del valor absoluto. Por eso el distractor B.

---

## Sub-lote 10 · Clasificación de las funciones y las algebraicas (1.3 a, p.23)

### 48

En relación con el libro de Cálculo, ¿cuál es la primera clasificación que divide a las funciones?

- A. La que las divide en algebraicas y trascendentes
- B. La que las divide en crecientes y decrecientes
- C. La que las divide en explícitas e implícitas
- D. La que las divide en inyectivas y sobreyectivas

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 23
**Subtema:** Clasificación de funciones · Primera clasificación

"Una primera clasificación es la que divide a las funciones en algebraicas y trascendentes."

### 49

De acuerdo con el libro de Cálculo, ¿en qué tres grupos se dividen las funciones algebraicas?

- A. Polinómicas, racionales y radicales
- B. Trigonométricas, exponenciales y logarítmicas
- C. Polinómicas, exponenciales y radicales
- D. Racionales, irracionales y trascendentes

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 23
**Subtema:** Clasificación de funciones · Funciones algebraicas

"Las funciones algebraicas se dividen en tres grupos: [...] Funciones polinómicas [...] Funciones racionales [...] Funciones radicales o irracionales."

> Nota de revisor: el distractor B es la lista de las **trascendentes**. Las dos ramas se
> aprenden juntas y se cambian de lugar solas.

### 50

De conformidad con el libro de Cálculo, ¿qué son las funciones polinómicas?

- A. Aquellas formadas por un polinomio
- B. Aquellas que se forman por un cociente de dos polinomios
- C. Aquellas donde un polinomio se encuentra dentro de un radical
- D. Aquellas donde el exponente es el que varía

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 23
**Subtema:** Clasificación de funciones · Funciones polinómicas

"1. Funciones polinómicas. Aquellas formadas por un polinomio [...]"

### 51

En relación con el libro de Cálculo, ¿en qué casos una expresión algebraica **no** es un polinomio?

- A. Cuando tiene variables en el denominador, cuando la variable forma parte del radical, cuando forma parte de un valor absoluto o cuando la variable es un exponente
- B. Únicamente cuando tiene variables en el denominador
- C. Cuando tiene más de un término o cuando el grado es mayor que tres
- D. Cuando alguno de sus coeficientes es negativo o fraccionario

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 23
**Subtema:** Clasificación de funciones · Funciones polinómicas

"Decimos que una expresión algebraica no es un polinomio si: a) Tiene variables en el denominador [...] b) La variable forma parte del radical [...] c) La variable forma parte de un valor absoluto [...] d) La variable es un exponente [...]"

> Nota de revisor: son **cuatro** casos y el aspirante suele quedarse con el primero, que
> es el más intuitivo. Por eso el distractor B lo deja solo.

### 52

De acuerdo con el libro de Cálculo, ¿qué son las funciones racionales y qué condición deben cumplir?

- A. Aquellas que se forman por un cociente de dos polinomios, con la condición de que el divisor no sea el polinomio cero
- B. Aquellas que se forman por un producto de dos polinomios, con la condición de que ninguno sea cero
- C. Aquellas formadas por un solo polinomio de grado *n*
- D. Aquellas donde un polinomio se encuentra dentro de un radical

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 23
**Subtema:** Clasificación de funciones · Funciones racionales

"2. Funciones racionales. Aquellas que se forman por un cociente de dos polinomios con la condición de que el divisor no sea el polinomio cero, *p*(*x*) = 0."

### 53

De conformidad con el libro de Cálculo, ¿qué son las funciones radicales o irracionales?

- A. Aquellas donde un polinomio se encuentra dentro de un radical
- B. Aquellas que se forman por un cociente de dos polinomios
- C. Aquellas formadas por un polinomio de grado *n*
- D. Aquellas donde encontramos los logaritmos de diferentes bases

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 23
**Subtema:** Clasificación de funciones · Funciones radicales

"3. Funciones radicales o irracionales. Aquellas donde un polinomio se encuentra dentro de un radical."

> Nota de revisor: **"o irracionales"** es el segundo nombre que el libro le da y que casi
> nadie retiene, igual que pasó con "lugar geométrico" en la p.18.

---

## Sub-lote 11 · Las trascendentes y las funciones creciente y decreciente (1.3 a, p.24) — cierra el inciso a)

### 54

En relación con el libro de Cálculo, ¿en qué tres grupos se dividen las funciones trascendentes?

- A. Trigonométricas, exponenciales y logarítmicas
- B. Polinómicas, racionales y radicales
- C. Trigonométricas, racionales y logarítmicas
- D. Crecientes, decrecientes y constantes

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Clasificación de funciones · Funciones trascendentes

"Las funciones trascendentes se dividen en: [...] Funciones trigonométricas [...] Funciones exponenciales [...] Funciones logarítmicas."

> Nota de revisor: el distractor B es la lista de las **algebraicas** y el C mezcla las
> dos ramas. Es el par que se cruza, igual que en el reactivo 49.

### 55

De acuerdo con el libro de Cálculo, ¿de dónde se obtienen las funciones trigonométricas?

- A. De la comparación por cociente de los lados de un triángulo
- B. De la comparación por diferencia de los ángulos de un triángulo
- C. De los logaritmos de diferentes bases
- D. De los valores que toma un exponente variable

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Clasificación de funciones · Funciones trigonométricas

"1. Funciones trigonométricas. Se obtienen de la comparación por cociente, de los lados de un triángulo [...]"

### 56

De conformidad con el libro de Cálculo, ¿cómo se llama el ángulo al que las funciones trigonométricas siempre hacen referencia?

- A. Argumento
- B. Cociente
- C. Contradominio
- D. Rango

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Clasificación de funciones · Funciones trigonométricas

"[...] las cuales siempre harán referencia al ángulo en relación al que llamamos argumento."

> Nota de revisor: es el término que se cae de esta página. El aspirante recuerda los
> seis nombres —seno, coseno, tangente…— y se salta cómo se llama aquello a lo que se
> refieren.

### 57

En relación con el libro de Cálculo, ¿qué son las funciones exponenciales?

- A. Aquellas donde el exponente es el que varía
- B. Aquellas donde la base es la que varía
- C. Aquellas donde encontramos los logaritmos de diferentes bases
- D. Aquellas formadas por un polinomio de grado *n*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Clasificación de funciones · Funciones exponenciales

"2. Funciones exponenciales. Aquellas donde el exponente es el que varía."

> Nota de revisor: el distractor B invierte exactamente el dato —base por exponente—, que
> es la confusión clásica con la función potencia.

### 58

De acuerdo con el libro de Cálculo, ¿de qué función son inversas las funciones logarítmicas?

- A. De la función exponencial
- B. De la función trigonométrica
- C. De la función polinómica
- D. De la función radical

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Clasificación de funciones · Funciones logarítmicas

"3. Funciones logarítmicas. Aquellas donde encontramos los logaritmos de diferentes bases. Estas funciones son las inversas de la función exponencial."

### 59

De conformidad con el libro de Cálculo, ¿cuándo se denomina a una función **monótona creciente**?

- A. Cuando dada *x* + *h* > *x*, entonces *f* (*x* + *h*) > *f* (*x*)
- B. Cuando dada *x* + *h* > *x*, entonces *f* (*x* + *h*) < *f* (*x*)
- C. Cuando dada *x* + *h* < *x*, entonces *f* (*x* + *h*) > *f* (*x*)
- D. Cuando dada *x* + *h* = *x*, entonces *f* (*x* + *h*) = *f* (*x*)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Función creciente y decreciente · Monótona creciente

"Se denomina función monótona creciente cuando dada *x* + *h* > *x*; entonces, *f* (*x* + *h*) > *f* (*x*) [...]"

### 60

En relación con el libro de Cálculo, ¿cuándo una función es **monótona decreciente**?

- A. Cuando dada *x* + *h* > *x*, entonces *f* (*x* + *h*) < *f* (*x*)
- B. Cuando dada *x* + *h* > *x*, entonces *f* (*x* + *h*) > *f* (*x*)
- C. Cuando dada *x* + *h* < *x*, entonces *f* (*x* + *h*) < *f* (*x*)
- D. Cuando la función toma siempre valores negativos

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Función creciente y decreciente · Monótona decreciente

"[...] y una función monótona decreciente será cuando dada *x* + *h* > *x*, entonces *f* (*x* + *h*) < *f* (*x*)."

> Nota de revisor: los reactivos 59 y 60 se distinguen **por un solo signo**, y en las dos
> definiciones la hipótesis es la misma (*x* + *h* > *x*). El distractor C cambia la
> hipótesis en vez del resultado, que es el otro error posible.

### 61

De acuerdo con el libro de Cálculo, ¿cómo se representan gráficamente las funciones monótonas?

- A. Por curvas que siempre ascienden, o bien, descienden conforme *x* recorre el intervalo permitido hacia valores crecientes
- B. Por curvas que alternan ascensos y descensos a lo largo del intervalo
- C. Por rectas paralelas al eje horizontal
- D. Por curvas cerradas sobre sí mismas

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 24
**Subtema:** Función creciente y decreciente · Representación gráfica

"Tales funciones son representadas gráficamente por curvas que siempre ascienden, o bien, descienden conforme *x* recorre el intervalo permitido hacia valores crecientes."

---

## Sub-lote 12 · Funciones explícitas e implícitas, y funciones par e impar (1.3 b, p.25)

### 62

De conformidad con el libro de Cálculo, ¿cuándo una función es **implícita**?

- A. Cuando el valor de la función no está dado explícitamente
- B. Cuando la variable está despejada
- C. Cuando la función no está definida en todo su dominio
- D. Cuando la función se expresa mediante una tabla de valores

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 25
**Subtema:** Funciones explícitas o implícitas · Función implícita

"Una función es implícita cuando el valor de la función no está dado explícitamente [...]"

### 63

En relación con el libro de Cálculo, ¿cuándo una función será **explícita**?

- A. Cuando la variable está despejada
- B. Cuando el valor de la función no está dado explícitamente
- C. Cuando todos sus coeficientes son conocidos
- D. Cuando puede representarse gráficamente

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 25
**Subtema:** Funciones explícitas o implícitas · Función explícita

"[...] y será explícita cuando la variable está despejada."

> Nota de revisor: los reactivos 62 y 63 van con las opciones cruzadas. El libro define
> las dos en la misma frase y sólo se distinguen por si la variable está despejada.

### 64

De acuerdo con el libro de Cálculo, ¿qué condición cumple una **función par**?

- A. *f* (−*x*) = *f* (*x*)
- B. *f* (−*x*) = −*f* (*x*)
- C. *f* (*x* + *h*) > *f* (*x*)
- D. *f* (*x*) = 0

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 25
**Subtema:** Función par e impar · Función par

"Sea la función *y* = *xⁿ* y los exponentes *n* = 1, 2, 3, 4,…, si los valores son pares se cumple: *f* (−*x*) = *f* (*x*). Razón por la que es llamada función par [...]"

### 65

De conformidad con el libro de Cálculo, ¿respecto a qué es simétrica la función par?

- A. Respecto al eje de las ordenadas
- B. Respecto al origen
- C. Respecto al eje de las abscisas
- D. Respecto a la recta *y* = *x*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 25
**Subtema:** Función par e impar · Función par

"[...] es llamada función par, la cual es simétrica respecto al eje de las ordenadas [...]"

### 66

En relación con el libro de Cálculo, ¿qué condición cumplen las **funciones impares**?

- A. *f* (−*x*) = −*f* (*x*)
- B. *f* (−*x*) = *f* (*x*)
- C. −*f* (−*x*) = −*f* (*x*)
- D. *f* (*x* + *h*) < *f* (*x*)

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 25
**Subtema:** Función par e impar · Función impar

"Las funciones impares cumplen con la condición *f* (−*x*) = −*f* (*x*) [...]"

> Nota de revisor: par e impar se distinguen **por un signo**, igual que creciente y
> decreciente en la p.24. Los reactivos 64 y 66 llevan cada uno la condición del otro
> como distractor.

### 67

De acuerdo con el libro de Cálculo, ¿respecto a qué son simétricas gráficamente las funciones impares?

- A. Con respecto al origen
- B. Con respecto al eje de las ordenadas
- C. Con respecto al eje de las abscisas
- D. Con respecto a la recta *y* = −*x*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 25
**Subtema:** Función par e impar · Función impar

"[...] las funciones impares gráficamente son simétricas con respecto al origen."

> Nota de revisor: el par 65 / 67 es el otro cruce de esta página — **ordenadas** para la
> par, **origen** para la impar. Cada uno lleva la respuesta del otro en las opciones.

---

## Sub-lote 13 · Arranca el dominio y rango: los números naturales (1.3 b, p.26)

### 68

De conformidad con el libro de Cálculo, ¿cuáles son los números naturales y con qué letra se representan?

- A. Los números 1, 2, 3, 4, 5,…, y se representan por la letra *N*
- B. Los números 0, 1, 2, 3, 4,…, y se representan por la letra *Z*
- C. Los números enteros positivos y negativos, y se representan por la letra *N*
- D. Todos los números que pueden escribirse como cociente, y se representan por la letra *Q*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 26
**Subtema:** Números reales · Números naturales

"1. Números naturales (*N*). Son los números 1, 2, 3, 4, 5,…, y se representan por la letra *N*."

> Nota de revisor: el distractor B mete el **cero**, que es la confusión más común con este
> conjunto. El libro arranca la lista en el 1.

### 69

En relación con el libro de Cálculo, en la sucesión de los números naturales, ¿qué indican los tres puntos?

- A. Que continúan en forma infinita
- B. Que se omiten algunos términos intermedios
- C. Que la sucesión se detiene en un valor no especificado
- D. Que los siguientes términos ya no son naturales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 26
**Subtema:** Números reales · Números naturales

"[...] Los tres puntos indican que continúan en forma infinita."

---

## Sub-lote 14 · Enteros, racionales, irracionales y el dominio (1.3 b, p.27)

### 70

De acuerdo con el libro de Cálculo, ¿cómo se forman los números enteros y con qué letra se representan?

- A. Por los números naturales y sus simétricos, que son los números negativos, y el cero; se representan con la letra *Z*
- B. Sólo por los números naturales y sus simétricos, sin incluir el cero; se representan con la letra *N*
- C. Por la razón entre dos números naturales; se representan con la letra *Q*
- D. Por los números naturales y sus recíprocos; se representan con la letra *R*

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Números reales · Números enteros

"2. Números enteros (*Z*). Estos números se forman por los números naturales y sus simétricos (que son los números negativos) y el cero [...] Se representan con la letra *Z*."

> Nota de revisor: aquí el cero **sí** entra, y en los naturales de la p.26 **no**. Es el
> contraste que el libro marca en dos páginas seguidas y donde se equivoca quien los
> repasa juntos.

### 71

De conformidad con el libro de Cálculo, ¿qué representa el cero y qué particularidad tiene?

- A. Representa la ausencia de unidades, por lo que carece de signo
- B. Representa la unidad de referencia, por lo que su signo es positivo
- C. Representa el simétrico de sí mismo, por lo que tiene los dos signos
- D. Representa el menor de los números naturales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Números reales · Números enteros

"[...] y el cero, los cuales representan la ausencia de unidades, por lo que carece de signo."

### 72

En relación con el libro de Cálculo, ¿qué son los números racionales?

- A. La razón que existe entre dos números enteros *a*/*b*, donde *b* es distinto de cero
- B. La razón que existe entre dos números enteros *a*/*b*, donde *a* es distinto de cero
- C. Los números que se forman por los naturales, sus simétricos y el cero
- D. Toda representación decimal infinita no periódica

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Números reales · Números racionales

"3. Números racionales (*Q*). Es la razón que existe entre dos números enteros *a*/*b*, donde *b* es distinto de cero."

> Nota de revisor: el distractor B cambia **cuál** de los dos no puede ser cero. Es el
> detalle que se pierde y el que de verdad importa.

### 73

De acuerdo con el libro de Cálculo, según la nota, ¿qué forma de representación tiene todo número racional?

- A. Decimal infinita periódica
- B. Decimal infinita no periódica
- C. Decimal finita en todos los casos
- D. Decimal finita o infinita, según la base

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Números reales · Números racionales

"Nota: todo número racional tiene una forma de representación decimal infinita periódica."

### 74

De conformidad con el libro de Cálculo, ¿qué son los números irracionales?

- A. Una representación decimal infinita no periódica
- B. Una representación decimal infinita periódica
- C. Una representación decimal finita
- D. La razón entre dos números enteros con divisor distinto de cero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Números reales · Números irracionales

"4. Números irracionales (*I*). Es una representación decimal infinita no periódica."

> Nota de revisor: racional e irracional se distinguen por **una sola palabra** —periódica
> o no periódica—. Los reactivos 73 y 74 llevan cada uno la definición del otro como
> distractor; es el mismo tipo de par que par/impar en la p.25.

### 75

En relación con el libro de Cálculo, ¿cuál es el dominio de las funciones que son polinomios?

- A. Todos los números reales
- B. Todos los números reales menos el cero
- C. Únicamente los números enteros
- D. Únicamente los valores donde el polinomio se anula

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Dominio de una función · Dominio de los polinomios

"[...] por ello, decimos que en las funciones que son polinomios su dominio son todos los números reales, lo que escribimos así: *Dmf*, y se lee dominio de *f*."

### 76

De acuerdo con el libro de Cálculo, ¿cuándo una función racional no está definida?

- A. Cuando el denominador es cero
- B. Cuando el numerador es cero
- C. Cuando la variable toma valores negativos
- D. Cuando el numerador y el denominador son iguales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Dominio de una función · Funciones racionales

"En las funciones racionales observamos que existen valores de la función donde no está definida, esto sucede cuando el denominador es cero."

### 77

De conformidad con el libro de Cálculo, ¿qué debe cumplir el denominador para poder realizar las operaciones?

- A. Debe ser distinto de cero
- B. Debe ser un número entero
- C. Debe ser mayor que el numerador
- D. Debe ser siempre positivo

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 27
**Subtema:** Dominio de una función · Funciones racionales

"Por ello, el denominador debe ser distinto de cero para poder realizar las operaciones [...]"

---

## Sub-lote 15 · El símbolo de unión y qué manda en el dominio de una racional (1.3 b, p.28)

### 78

En relación con el libro de Cálculo, ¿qué significa el símbolo ∪?

- A. Unión, juntar todos los elementos
- B. Intersección, tomar sólo los elementos comunes
- C. Diferencia, quitar los elementos de un conjunto a otro
- D. Pertenencia de un elemento a un conjunto

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 28
**Subtema:** Dominio de una función · Notación de intervalos

"[...] el símbolo ∪ significa unión, juntar todos los elementos."

### 79

De acuerdo con el libro de Cálculo, para determinar el dominio de una función racional, ¿qué **no** importa?

- A. Su numerador, incluso si es el polinomio cero
- B. Su denominador, mientras no sea de grado uno
- C. El grado del polinomio del numerador
- D. El signo que tengan sus coeficientes

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 28
**Subtema:** Dominio de una función · Funciones racionales

"Como puedes observar, para determinar el dominio de la función no importa su numerador, incluso si es el polinomio cero [...]"

> Nota de revisor: el aspirante estudia "el denominador no puede ser cero" y de ahí deduce
> que el numerador también manda. El libro lo descarta expresamente, y ése es el dato.

### 80

De conformidad con el libro de Cálculo, ¿qué tiene que ser siempre el denominador?

- A. Un polinomio distinto de cero
- B. Un polinomio de grado mayor que el numerador
- C. Un número entero positivo
- D. Un polinomio con todas sus raíces reales

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 28
**Subtema:** Dominio de una función · Funciones racionales

"[...] recuerda que el denominador siempre tiene que ser un polinomio distinto de cero."

### 81

En relación con el libro de Cálculo, ¿a qué equivale el valor absoluto |*x*|?

- A. A √*x*²
- B. A *x*²
- C. A −*x* siempre
- D. A la raíz cúbica de *x*²

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 28
**Subtema:** Dominio de una función · Valor absoluto

"Recuerda que |*x*| = √*x*²"

> Nota de revisor: el libro lo suelta como recordatorio dentro de la solución de un
> ejemplo, pero es una **propiedad general**, no el ejercicio. Por eso entra.

---

## Sub-lote 16 · Las asíntotas verticales (1.3 b, p.29)

### 82

De acuerdo con el libro de Cálculo, ¿qué es una asíntota?

- A. Una recta que se acerca a la función o la limita, pero nunca se cortan
- B. Una recta que corta a la función en un solo punto
- C. La curva que representa gráficamente a la función
- D. El valor máximo que puede alcanzar la función

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 29
**Subtema:** Asíntotas verticales · Definición

"Una asíntota es una recta que se acerca a la función o la limita, pero nunca se cortan [...]"

> Nota de revisor: el filo está en **nunca se cortan**. El distractor B es justo lo
> contrario y suena razonable si uno sólo recuerda "una recta relacionada con la curva".

### 83

De conformidad con el libro de Cálculo, ¿cuál es la ecuación de la asíntota y qué representa la *k*?

- A. *x* = *k*, donde *k* son puntos que **no** pertenecen al dominio de la función racional
- B. *x* = *k*, donde *k* son los puntos que sí pertenecen al dominio de la función racional
- C. *y* = *k*, donde *k* es el valor máximo de la función
- D. *y* = *kx*, donde *k* es la pendiente de la recta

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 29
**Subtema:** Asíntotas verticales · Ecuación

"[...] su ecuación es *x* = *k*, donde *k* son puntos que no pertenecen al dominio de la función racional."

> Nota de revisor: el distractor B invierte el "no". Es el error de quien recuerda que la
> *k* tiene que ver con el dominio, pero no de qué lado.

### 84

En relación con el libro de Cálculo, ¿cómo se obtienen las asíntotas verticales de una función racional?

- A. Se iguala a cero el denominador y se despeja la variable
- B. Se iguala a cero el numerador y se despeja la variable
- C. Se sustituye la variable por cero y se calcula el resultado
- D. Se deriva la función y se iguala a cero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 29
**Subtema:** Asíntotas verticales · Procedimiento

"Para obtener las asíntotas verticales de una función racional se iguala a cero el denominador y se despeja la variable."

### 85

De acuerdo con el libro de Cálculo, ¿qué relación tienen el dominio de la función y el trazo de las asíntotas?

- A. Una relación directa: la asíntota marca el valor donde la función no está definida
- B. Ninguna: el dominio se calcula aparte del trazo de las asíntotas
- C. Una relación inversa: la asíntota marca el valor donde la función sí está definida
- D. Una relación sólo cuando el numerador es el polinomio cero

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 29
**Subtema:** Asíntotas verticales · Relación con el dominio

"Observemos que el dominio de la función y el trazo de las asíntotas tienen una relación directa, la asíntota marca el valor donde la función no está definida, o sea, que no se puede realizar la operación en ese valor."

### 86

De conformidad con el libro de Cálculo, en la expresión del dominio por intervalos, ¿por qué los extremos no están contenidos?

- A. Porque todos los símbolos de desigualdad son menores
- B. Porque los extremos son siempre valores infinitos
- C. Porque el símbolo de unión excluye los extremos
- D. Porque los extremos pertenecen al numerador

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 29
**Subtema:** Dominio de una función · Notación de intervalos

"En la desigualdad todos los símbolos de desigualdad son menores; por ello, los extremos no están contenidos."
