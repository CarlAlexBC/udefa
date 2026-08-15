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

**Pendiente:** EN CURSO. **El 1.1 y el 1.2 quedan cubiertos** (pp. 8–10), y del **1.3**
va cubierto hasta la **p.14**. Sigue desde la **p.15** con el resto del inciso **a)
Gráficas de funciones reales de variable real** (pp. 15–24) y después los otros tres
incisos: **b)** explícitas o implícitas (p.25), **c)** inyectivas, sobreyectivas y
biyectivas (p.42) y **d)** función invertible e inversa (p.49), hasta cerrar la Unidad 1
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
