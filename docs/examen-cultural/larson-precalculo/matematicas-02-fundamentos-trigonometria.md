# Matemáticas · Capítulo 2 · Fundamentos de trigonometría

**Plantel:** Escuela Militar de Especialistas de Fuerza Aérea (EMEFA) · **Materia:** `MATE-03-2026`
**Aplica a:** Controlador de Vuelo (Lic. en Aeronáutica Mil.) y Meteorólogo (Lic. en Meteorología Mil.) — los dos temarios piden exactamente lo mismo de este libro.

> El reactivo pertenece al **libro** (`larson-precalculo`), no al plantel: cualquier temario que llame a este capítulo de Larson lo reutiliza.

## Libro

Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, **primera edición**.

**Edición verificada** contra la página legal (hoja 3 del PDF); el detalle está en el archivo del capítulo 1 (`matematicas-01-fundamentos-algebra.md`), que es donde se hizo la verificación.

## Alcance del temario

El temario `MATE-03-2026` de la EMEFA **no pide este capítulo completo**. De sus dieciséis subtemas sólo pide **cinco**:

| Subtema que sí entra | Páginas impresas | Teoría |
|---|---|---|
| 2.6 Gráficas de las funciones seno y coseno | 171–181 | 171–177 |
| 2.9 Aplicaciones y modelos | 202–211 | 202–207 |
| 2.10 Uso de identidades fundamentales | 212–218 | 212–216 |
| 2.15 Ley de senos | 254–262 | 254–259 |
| 2.16 Ley de cosenos | 263–270 | 263–266 |

**Quedan fuera** los subtemas **2.1, 2.2, 2.3, 2.4, 2.5, 2.7, 2.8, 2.11, 2.12, 2.13 y 2.14**: el temario no los pide y no llevan reactivos. En cada subtema, las páginas que no aparecen en la columna "Teoría" son el bloque de `Ejercicios`.

Los otros dos capítulos que pide el temario van en sus propios archivos: el **1** (`matematicas-01-fundamentos-algebra.md`, cerrado en 284 reactivos) y el **3 · Fundamentos de geometría analítica**, que se pide **completo**.

## Método y desfase

El PDF **trae capa de texto y la prosa sale limpia**, pero **las matemáticas se aplanan al extraerlas** y en algunos párrafos **los signos desaparecen**. En un capítulo de trigonometría eso es especialmente peligroso, así que aquí la regla se aplica sin excepción: **la prosa se toma del extractor y toda fórmula, signo, intervalo o valor de ángulo se lee de la hoja renderizada** (`render.py`).

**Desfase:** **hoja del PDF = página impresa + 9**, el mismo del capítulo 1, releído aquí (hoja 180 = p. 171).

## Criterio de este capítulo

Recuerdo literal (Anexo "H"): la correcta y la justificación son cita del libro. Se caza el **dato olvidable** —la condición exacta, el nombre de la curva, el valor del periodo—, no lo obvio. Los mejores distractores salen del mismo recuadro. La correcta se escribe siempre en **A**; el importador baraja.

**Teoría sí, ejercicios no**: entran los recuadros de definiciones y de propiedades y la prosa que las explica. **No llevan reactivos** los bloques `EJEMPLO`, `Punto de repaso`, `Ejercicios`, `¿Cómo lo ve?`, `Proyecto`, `TECNOLOGÍA`, el `Resumen` de cada sección ni los pies de foto que remiten a un ejercicio.

**El dato olvidable tiene que ser DEL TEMA** (regla de Carlo, 14 ago 2026): quedan fuera las notas de lengua, los consejos de estudio y los comentarios sobre el propio libro, aunque sean cita textual. Los `COMENTARIO` entran **sólo si traen matemáticas**. Detalle en `docs/examen-cultural/README.md`.

## Erratas del libro — no se escriben reactivos sobre ellas

- **p. 171, segundo párrafo: falta el intervalo del rango.** El libro imprime "el rango de cada función es el intervalo y cada función tiene un periodo de 2π": **el intervalo nunca se imprimió**, se cayó en la composición. El dato sí aparece en las figuras 2.45 y 2.46, que rotulan "Rango: −1 ≤ y ≤ 1". El reactivo del rango se escribe con el valor de las figuras, que es el que el aspirante puede leer.

## Cobertura actual

**EN CURSO.** Escritas las páginas impresas **171 y 172** del **2.6 · Gráficas de las funciones seno y coseno**: la curva senoidal y el ciclo, el dominio, el rango y el periodo de las funciones seno y coseno, sus simetrías y el hecho de que el seno es impar y el coseno par, y los cinco puntos clave de un periodo. El `TECNOLOGÍA` de las graficadoras no lleva reactivos.

**Pendiente:** EN CURSO. Sigue desde la página impresa **173** hasta cerrar el **2.6** en la **p. 177**. Después faltan los otros cuatro subtemas que pide el temario: **2.9** (p. 202), **2.10** (p. 212), **2.15** (p. 254) y **2.16** (p. 263). **Matemáticas (Larson) no está cerrada:** falta además el **capítulo 3** completo, en su propio archivo.

---

## Sub-lote 1 · Curvas básicas de seno y coseno (2.6, pp. 171–172)

### 1

De acuerdo con el libro de Matemáticas, ¿cómo se llama la gráfica de la función seno?

- A. Curva senoidal
- B. Curva cosenoidal
- C. Curva periódica
- D. Curva unitaria

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · curva senoidal

La gráfica de la función seno es una curva senoidal.

---

### 2

De conformidad con el libro de Matemáticas, ¿cómo se denomina la parte de la gráfica que representa un periodo de la función?

- A. Un ciclo de la curva senoidal
- B. Una amplitud de la curva senoidal
- C. Una traslación de la curva senoidal
- D. Un rango de la curva senoidal

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · ciclo

La parte negra de la gráfica representa un periodo de la función y se denomina un ciclo de la curva senoidal.

---

### 3

En relación con el libro de Matemáticas, ¿cuál es el dominio de las funciones seno y coseno?

- A. El conjunto de todos los números reales
- B. El conjunto de todos los números reales positivos
- C. El intervalo de −1 a 1
- D. El intervalo de 0 a 2π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · dominio y rango

El dominio de las funciones seno y coseno es el conjunto de todos los números reales.

---

### 4

De acuerdo con el libro de Matemáticas, ¿cuál es el rango de las funciones seno y coseno?

- A. De −1 a 1
- B. De 0 a 1
- C. De −2π a 2π
- D. Todos los números reales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · dominio y rango

Rango: −1 ≤ y ≤ 1 (figuras 2.45 y 2.46).

---

### 5

De conformidad con el libro de Matemáticas, ¿cuál es el periodo de las funciones seno y coseno?

- A. 2π
- B. π
- C. π/2
- D. 4π

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · periodo

Cada función tiene un periodo de 2π.

---

### 6

En relación con el libro de Matemáticas, ¿respecto a qué es simétrica la curva senoidal?

- A. Respecto al origen
- B. Respecto al eje y
- C. Respecto al eje x
- D. Respecto a la recta y = x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · simetría

La curva senoidal es simétrica respecto al origen.

---

### 7

De acuerdo con el libro de Matemáticas, ¿respecto a qué es simétrica la curva cosenoidal?

- A. Respecto al eje y
- B. Respecto al origen
- C. Respecto al eje x
- D. Respecto a la recta y = −x

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · simetría

La curva cosenoidal es simétrica respecto al eje y.

---

### 8

De conformidad con el libro de Matemáticas, ¿de qué hecho se siguen esas propiedades de simetría?

- A. De que la función seno es impar y la función coseno es par
- B. De que la función seno es par y la función coseno es impar
- C. De que las dos funciones son impares
- D. De que las dos funciones son pares

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 171
**Subtema:** gráficas de seno y coseno · simetría

Estas propiedades de simetría se siguen del hecho de que la función seno es impar y la función coseno es par.

---

### 9

En relación con el libro de Matemáticas, ¿cuáles son los cinco puntos clave que conviene observar en un periodo de cada gráfica?

- A. Las intersecciones con los ejes, los puntos máximos y los puntos mínimos
- B. Los puntos de inflexión, los máximos y los mínimos
- C. Las asíntotas, los máximos y los mínimos
- D. Los extremos del dominio y los del rango

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 172
**Subtema:** gráficas de seno y coseno · puntos clave

Para trazar manualmente las gráficas de las funciones básicas seno y coseno, ayuda observar cinco puntos clave en un periodo de cada gráfica: las intersecciones con los ejes, puntos máximos y puntos mínimos.

---

### 10

De acuerdo con el libro de Matemáticas, ¿en cuántas partes se divide el periodo para obtener los puntos clave?

- A. En cuatro partes iguales
- B. En dos partes iguales
- C. En cinco partes iguales
- D. En tres partes iguales

**Respuesta:** A
**Referencia:** Larson, Ron (2018) *Precálculo. Introducción a las matemáticas universitarias*, Cengage Learning, Pág. 172
**Subtema:** gráficas de seno y coseno · puntos clave

Divida el periodo en cuatro partes iguales para obtener los puntos clave.

---
