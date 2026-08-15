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

**Pendiente:** EN CURSO. Sigue desde la **p.10** con el resto del **1.1** (dominio,
codominio o contradominio y regla de correspondencia), y luego el **1.2** (p.10) y el
**1.3** completo (pp. 10–60) con sus cuatro incisos. Después van la **Unidad 2**
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
