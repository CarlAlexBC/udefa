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

## Cobertura actual

- Cubierta la página impresa **8**: el apartado **Conjunto y elemento** (la definición
  de conjunto y de elemento, los dos ejemplos, y las letras con que se nombran unos y
  otros) y el arranque del **1.1** con el apartado **Funciones**, donde el libro
  introduce la idea de relación con los ejemplos de "tú y yo" y el de los padres. Las
  Figuras 1.1, 1.2 y 1.3 son ilustraciones y no llevan reactivos.

**Pendiente:** EN CURSO. Sigue desde la **p.9** con el resto del **1.1** (dominio,
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

En relación con el libro de Cálculo, ¿por qué se definen los conceptos de elemento y conjunto antes de entrar al tema de relaciones y funciones?

- A. Porque se utilizarán en esos temas
- B. Porque son el objeto de estudio del cálculo diferencial
- C. Porque permiten graficar cualquier función
- D. Porque de ellos se deduce la regla de correspondencia

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Definición de conjunto

"Antes de introducirnos al tema de relaciones y funciones se hace necesario definir los conceptos de elemento y conjunto, ya que los utilizaremos en estos temas."

### 4

De acuerdo con el libro de Cálculo, ¿qué letras se utilizan para nombrar conjuntos?

- A. Letras mayúsculas: A, B, C
- B. Letras minúsculas: a, b, c
- C. Letras griegas: α, β, γ
- D. Las últimas letras del alfabeto: x, y, z

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Notación

"Para nombrar conjuntos se utilizan letras mayúsculas: A, B, C, y letras minúsculas: a, b, c, para indicar elementos."

### 5

De conformidad con el libro de Cálculo, ¿qué letras se utilizan para indicar elementos?

- A. Letras minúsculas: a, b, c
- B. Letras mayúsculas: A, B, C
- C. Letras griegas: α, β, γ
- D. Números naturales: 1, 2, 3

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Notación

"Para nombrar conjuntos se utilizan letras mayúsculas: A, B, C, y letras minúsculas: a, b, c, para indicar elementos."

> Nota de revisor: los reactivos 4 y 5 van con las opciones cruzadas. Es la misma frase del libro leída en sus dos mitades, y el par mayúscula/minúscula se voltea solo.

### 6

En relación con el libro de Cálculo, en el ejemplo del equipo de fútbol, béisbol y básquetbol, ¿quiénes son elementos del conjunto?

- A. Cada uno de los jugadores titulares y suplentes
- B. Únicamente los jugadores titulares
- C. Los jugadores titulares y el entrenador
- D. Los equipos completos, no los jugadores

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conjunto y elemento · Ejemplos de conjuntos

"Un equipo de fútbol, béisbol y básquetbol. Cada uno de los jugadores titulares y suplentes es elemento del conjunto."

> Nota de revisor: el aspirante da por hecho que son los titulares. El libro incluye expresamente a los **suplentes**.

### 7

De acuerdo con el libro de Cálculo, al examinar la relación de una persona con sus padres, ¿qué observa el libro?

- A. Que al hijo le corresponden dos elementos, padre y madre
- B. Que al hijo le corresponde un solo elemento, el padre
- C. Que a cada hijo le corresponde un número indeterminado de elementos
- D. Que padre y madre forman un solo elemento del conjunto

**Respuesta:** A
**Referencia:** Salazar, L. J. (2020) *Cálculo. Teoría y aplicaciones*, 1.ª ed., Patria, Pág. 8
**Subtema:** Conceptos fundamentales de una función · Relaciones

"Observamos que al hijo le corresponden dos elementos padre y madre, pero lo podemos considerar al revés que a cada padre le corresponda un hijo (solo se tiene un hijo)."
