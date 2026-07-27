# Geometría Analítica · Zill · Capítulo 8 · Trigonometría del triángulo rectángulo

**Libro:** Zill & Dewar · *Álgebra, Trigonometría y Geometría Analítica* (McGraw-Hill, 3.ª ed. 2012) · **Capítulo 8 → EN CURSO (§8.1 hecho)**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Este Zill 3.ª ed. lo comparten **varios planteles**
> (EMA, EMEFA, EMMA, EMMG, EMI), cada uno pidiendo capítulos distintos. La **EMI**
> (Escuela Militar de Ingeniería), dentro de su materia *Geometría Analítica*
> (`GA-03-2026`), pide **Completo** los capítulos **4, 8, 9 y 12**. Las líneas
> `**Referencia:**` y `**Subtema:**` de cada reactivo son la llave con que el temario
> los manda a llamar.

## Libro

Zill, Dennis G.; Dewar, Jacqueline M. *Álgebra, Trigonometría y Geometría Analítica*.
**McGraw-Hill/Interamericana Editores**, **tercera edición, 2012**. ISBN 978-607-15-0714-3.
**Edición verificada** en el archivo del capítulo 4 (`zill-04-coordenadas-rectangulares.md`).
Coincide con el temario de la EMI: el `temarios.json` (código `GA-03-2026`) nombra los
capítulos por **título**, y todos calzan con este libro —Cap. 4 *Sistema de Coordenadas
Rectangulares y Gráficas*, **Cap. 8 *Trigonometría del Triángulo Rectángulo***, Cap. 9
*Trigonometría del Círculo Unitario* y Cap. 12 *Coordenadas Polares*—, "Completo" cada uno.
El temario **deja fuera a propósito** el capítulo 11 (cónicas: parábola, elipse, hipérbola).

**Desfase de páginas (esta copia, la de la EMI):** para el **capítulo 8** la hoja del PDF va
**17 adelante** de la página impresa (portadilla del cap. 8, p. 355 = hoja 372; p. 356 =
hoja 373). **Se leyó de la hoja, no se calculó.** OJO: el desfase NO es constante en este
libro; se releerá de la hoja al llegar a los capítulos 9 y 12.

## ⚠️ Método especial para este libro — capa de texto rota

**La extracción de texto de este PDF está dañada** (el mismo problema documentado en el
archivo del capítulo 4): las fuentes subconjuntadas convierten los dígitos y símbolos al
copiar el texto. Por eso, para este libro se trabaja así:

- **Prosa y números en línea:** por **OCR** (Tesseract, idioma español) sobre la hoja
  renderizada.
- **Fórmulas en 2D** (fracciones, raíces, subíndices, exponentes): se **leen de la hoja
  renderizada a imagen** y se transcriben a mano.

Toda cita de este archivo se corroboró por OCR y/o imagen; **ninguna se tomó de la
extracción de texto directa.** Detalle completo del método en el encabezado del capítulo 4
y en `docs/examen-cultural/ocr.py`.

## Alcance

El **capítulo 8** completo tiene cuatro secciones:

- **§8.1 Ángulos y sus medidas** (pp. 356–364) ← este archivo lo cubre.
- §8.2 Trigonometría del triángulo rectángulo (pp. 365–370).
- §8.3 Funciones trigonométricas de ángulos especiales (pp. 371–374).
- §8.4 Funciones trigonométricas de ángulos generales (pp. 375–385).

Los *Ejercicios de repaso* (p. 386 en adelante) quedan fuera por la norma de teoría sobre
práctica. La reseña histórica de la portadilla (p. 355) sí entra: son datos de recuerdo.

## Cobertura actual

**§8.1 · COMPLETO** en 26 reactivos (reactivos 1–26), toda la teoría de la sección
(pp. 355–361, incluida la reseña histórica de la portadilla): la etimología de
*trigonometría* y las figuras de Hiparco y Rheticus; la definición de **ángulo** (lados
inicial y terminal, vértice) y la **posición normal**; la **medición en grados** (rotación
completa 360°, signo) y los **ángulos coterminales**; los **minutos y segundos**
(`1°=60'`, `1'=60"`, base babilónica); la **medida en radianes** (`θ=s/r` sobre el círculo
unitario, 1 radián, `2π` por rotación); las **fórmulas de conversión** (`180°=π`,
`1°=π/180`, `1 rad=(180/π)°`) y la Tabla 8.1.1; la **terminología** (ángulo recto/recto
doble, agudo, obtuso, complementarios, suplementarios, cuadrantal, triángulo rectángulo,
relación pitagórica `a²+b²=c²`, hipotenusa y catetos); y la **longitud de arco** (ángulo
central, sector, **Teorema 8.1.1** `s=rθ`). Fórmulas verificadas contra las hojas
renderizadas 377 y 378; prosa por OCR.

**Pendiente:** faltan las secciones **§8.2, §8.3 y §8.4** para cerrar el capítulo 8; y
después los capítulos **9 y 12**, que el temario de la EMI (`GA-03-2026`) pide completos.
**Geometría Analítica NO está cerrada para la EMI.** El capítulo 4 ya está cerrado
(`zill-04-coordenadas-rectangulares.md`, 64 reactivos); este archivo (capítulo 8) sostiene
el pendiente de la materia hasta que exista el archivo del capítulo 9.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico, no práctico. Se
privilegian las definiciones, teoremas y reglas sobre los procedimientos de cálculo. Los
ejemplos numéricos y los bloques de ejercicios no se convierten en reactivos de
procedimiento; las definiciones, teoremas y fórmulas sí.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación son cita
textual del libro, sin parafrasear. Cuatro opciones del mismo tipo y magnitud. Notación
verificada por OCR + imagen (ver el aviso del método arriba). La opción correcta SIEMPRE en
A (el importador baraja las opciones).

---

## Sub-lote 1 · Un poco de historia (portadilla, p. 355)

### 1

En relación con el libro de Geometría Analítica, ¿de qué dos vocablos griegos se deriva la palabra "trigonometría" y qué significa cada uno?

- A. De trigon, que significa triángulo, y metro, que significa medida
- B. De trigon, que significa círculo, y metro, que significa ángulo
- C. De tri, que significa tres, y gono, que significa lado
- D. De trigono, que significa recta, y metría, que significa cálculo

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 355
**Subtema:** Trigonometría · Historia y etimología

La palabra trigonometría se deriva de dos vocablos griegos: trigon, que significa triángulo, y metro, que significa medida.

### 2

En relación con el libro de Geometría Analítica, según la reseña histórica, ¿quién fue uno de los principales inventores de la trigonometría y qué elaboró?

- A. El astrónomo y matemático griego Hiparco, que vivió en el siglo II antes de Cristo; elaboró tablas de "cuerdas", precursoras de las tablas de valores de las funciones trigonométricas
- B. El matemático griego Euclides, en el siglo III antes de Cristo; elaboró los Elementos
- C. El astrónomo Ptolomeo, en el siglo I; elaboró el Almagesto de coordenadas
- D. El matemático Pitágoras, en el siglo VI antes de Cristo; elaboró las tablas de senos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 355
**Subtema:** Trigonometría · Hiparco

El astrónomo y matemático griego Hiparco, que vivió en el siglo II antes de Cristo, fue uno de los principales inventores de la trigonometría. Las tablas de "cuerdas" que elaboró fueron precursoras de las tablas de valores de las funciones trigonométricas.

### 3

En relación con el libro de Geometría Analítica, según la reseña histórica, ¿quién fue el primer matemático europeo que definió las funciones trigonométricas directamente en términos de triángulos rectángulos en lugar de círculos, y de quién fue discípulo?

- A. El austriaco Georg Joachim von Lauchen (Georg Joachim Rheticus), único discípulo de Nicolás Copérnico
- B. El francés René Descartes, discípulo de Galileo Galilei
- C. El alemán Johannes Kepler, discípulo de Tycho Brahe
- D. El italiano Leonardo de Pisa (Fibonacci), discípulo de Euclides

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 355
**Subtema:** Trigonometría · Rheticus

El primer matemático europeo que definió las funciones trigonométricas directamente en términos de triángulos rectángulos en lugar de círculos, con tablas de las seis funciones trigonométricas, fue el matemático y astrónomo austriaco Georg Joachim von Lauchen (1514-1574), también conocido como Georg Joachim Rheticus. Rheticus fue el único discípulo de Nicolás Copérnico (1473-1543).

---

## Sub-lote 2 · El ángulo y la posición normal (p. 356)

### 4

En relación con el libro de Geometría Analítica, ¿cómo se forma un ángulo y cómo se llaman sus elementos?

- A. Se forma con dos rayos o semirrectas que tienen un extremo común llamado vértice; a un rayo se le llama lado inicial y al otro, lado terminal
- B. Se forma con dos rectas paralelas separadas por una distancia fija
- C. Se forma con un solo rayo que gira sobre un punto llamado foco
- D. Se forma con tres puntos no colineales llamados vértices

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 356
**Subtema:** Ángulos · Definición de ángulo

Un ángulo se forma con dos rayos o semirrectas, que tienen un extremo común llamado vértice. A un rayo lo llamaremos lado inicial del ángulo, y al otro, lado terminal.

### 5

En relación con el libro de Geometría Analítica, ¿cuándo se dice que un ángulo está en su posición normal o estándar?

- A. Cuando se pone en un plano cartesiano con su vértice en el origen y su lado inicial coincidiendo con el eje positivo de las x
- B. Cuando su lado terminal coincide con el eje positivo de las y
- C. Cuando su vértice está en el punto (1, 1) del plano
- D. Cuando sus dos lados forman un ángulo de 90°

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 356
**Subtema:** Ángulos · Posición normal

El ángulo se puede poner en un plano cartesiano con su vértice en el origen y su lado inicial que coincida con el eje positivo de las x. En ese caso se dice que el ángulo está en su posición normal o estándar.

---

## Sub-lote 3 · Medición en grados y ángulos coterminales (pp. 356–357)

### 6

En relación con el libro de Geometría Analítica, ¿en qué se basa la medición de un ángulo en grados y a qué equivale un ángulo de 1°?

- A. Se basa en asignar 360 grados al ángulo formado por una rotación completa en sentido contrario al de las manecillas del reloj; un ángulo de 1° es el que se forma por 1/360 de una rotación completa
- B. Se basa en asignar 100 grados a una rotación completa; un ángulo de 1° es 1/100 de la rotación
- C. Se basa en asignar 2π grados a una rotación completa; un ángulo de 1° es 1/2π de la rotación
- D. Se basa en asignar 180 grados a una rotación completa; un ángulo de 1° es 1/180 de la rotación

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 356
**Subtema:** Ángulos · Medición en grados

La medición de un ángulo en grados se basa en la asignación de 360 grados (se escribe 360°) al ángulo formado por una rotación completa en sentido contrario al de las manecillas del reloj. Un ángulo de 1° es el que se forma por 1/360 de una rotación completa.

### 7

En relación con el libro de Geometría Analítica, ¿cuándo la medida de un ángulo es positiva y cuándo es negativa?

- A. Es positiva si la rotación es contraria a la de las manecillas del reloj; es negativa si es en el sentido de las manecillas del reloj
- B. Es positiva si la rotación es en el sentido de las manecillas del reloj; es negativa si es contraria
- C. Es positiva si el ángulo es agudo; es negativa si es obtuso
- D. Es positiva si el vértice está en el origen; es negativa en cualquier otro caso

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 356
**Subtema:** Ángulos · Signo de la medida

Si la rotación es contraria a la de las manecillas del reloj, la medida será positiva; si es en el sentido de las manecillas del reloj, la medida será negativa.

### 8

En relación con el libro de Geometría Analítica, ¿cuándo se dice que dos ángulos son coterminales?

- A. Cuando dos ángulos en la posición normal tienen los mismos lados terminales
- B. Cuando dos ángulos suman 360°
- C. Cuando dos ángulos tienen la misma medida pero distinto vértice
- D. Cuando dos ángulos son ambos rectos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 356
**Subtema:** Ángulos · Ángulos coterminales

Cuando dos ángulos en la posición normal tienen los mismos lados terminales se dice que los ángulos son coterminales.

### 9

En relación con el libro de Geometría Analítica, ¿qué relación hay entre las medidas en grados de dos ángulos coterminales?

- A. Difieren por un múltiplo entero de 360°; la suma de cualquier múltiplo entero de 360° a un ángulo dado da un ángulo coterminal
- B. Difieren siempre por 180°
- C. Son siempre iguales
- D. Difieren por un múltiplo entero de 90°

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 356
**Subtema:** Ángulos · Coterminales y múltiplos de 360°

La suma de cualquier múltiplo entero de 360° a un ángulo dado da como resultado un ángulo coterminal. Al revés, dos ángulos coterminales cualesquiera tienen medidas en grados que difieren por un múltiplo entero de 360°.

---

## Sub-lote 4 · Minutos y segundos (p. 357)

### 10

En relación con el libro de Geometría Analítica, ¿en cuántos minutos se divide un grado y en cuántos segundos se divide un minuto?

- A. 1° = 60 minutos (60') y 1' = 60 segundos (60")
- B. 1° = 100 minutos y 1' = 100 segundos
- C. 1° = 10 minutos y 1' = 10 segundos
- D. 1° = 360 minutos y 1' = 360 segundos

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 357
**Subtema:** Ángulos · Minutos y segundos

Las fracciones de grados se han expresado tradicionalmente en minutos y segundos, donde 1° = 60 minutos (se escribe 60') y 1' = 60 segundos (se escribe 60").

### 11

En relación con el libro de Geometría Analítica, según la nota al pie, ¿a qué cultura se remonta el uso del número 60 como base?

- A. A los babilonios
- B. A los egipcios
- C. A los griegos
- D. A los mayas

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 357
**Subtema:** Ángulos · Base 60

El uso del número 60 como base se remonta a los babilonios. Otro ejemplo del uso de esta base en nuestra cultura es la medida del tiempo (1 hora = 60 minutos y 1 minuto = 60 segundos).

---

## Sub-lote 5 · Medida en radianes (pp. 358–359)

### 12

En relación con el libro de Geometría Analítica, ¿en qué se basa la medida de un ángulo en radianes y cómo se define?

- A. Se basa en la longitud de un arco del círculo unitario x² + y² = 1; la medida es θ = s/r, donde s es la longitud del arco y r el radio
- B. Se basa en el área del círculo unitario; la medida es θ = πr²
- C. Se basa en el número de grados dividido entre 100
- D. Se basa en la circunferencia de cualquier círculo dividida entre 360

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 358
**Subtema:** Ángulos · Medida en radianes

La medida de un ángulo en radianes se basa en la longitud de un arco del círculo unitario x² + y² = 1. La medida del ángulo es θ = s/r.

### 13

En relación con el libro de Geometría Analítica, ¿cuándo la medida de un ángulo central θ es exactamente 1 radián?

- A. Cuando el lado terminal de θ atraviesa un arco de longitud s igual al radio r del círculo
- B. Cuando el arco s es igual al diámetro del círculo
- C. Cuando el arco s es igual a la circunferencia del círculo
- D. Cuando el arco s mide 360 unidades

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 358
**Subtema:** Ángulos · Un radián

En el caso en que el lado terminal de θ atraviesa un arco de longitud s a lo largo de la circunferencia del círculo igual al radio r del círculo, la medida del ángulo θ es 1 radián.

### 14

En relación con el libro de Geometría Analítica, ¿a cuántos radianes equivale un ángulo formado por una rotación completa?

- A. 2π radianes, porque la circunferencia del círculo unitario es 2π
- B. π radianes, porque el diámetro del círculo unitario es π
- C. 360 radianes, uno por cada grado
- D. 1 radián, porque es una sola rotación

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 358
**Subtema:** Ángulos · Rotación completa en radianes

Como la circunferencia del círculo unitario es 2π, un ángulo formado por una rotación en contra de las manecillas del reloj es 2π radianes.

---

## Sub-lote 6 · Conversión entre grados y radianes (p. 359)

### 15

En relación con el libro de Geometría Analítica, ¿cuál es la igualdad fundamental que relaciona los grados con los radianes?

- A. 180° = π radianes (equivalentemente, 360° = 2π radianes)
- B. 90° = π radianes
- C. 360° = π radianes
- D. 180° = 2π radianes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 359
**Subtema:** Ángulos · Igualdad grados-radianes

Como una rotación completa mide 2π radianes, y también 360°, se tiene que 360° = 2π radianes, o 180° = π radianes.

### 16

En relación con el libro de Geometría Analítica, según las fórmulas de conversión, ¿a cuántos radianes equivale 1°?

- A. 1° = π/180 radián
- B. 1° = 180/π radián
- C. 1° = π/360 radián
- D. 1° = 60 radianes

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 359
**Subtema:** Ángulos · Conversión de grados a radianes

Para convertir entre grados y radianes: 1° = π/180 radián.

### 17

En relación con el libro de Geometría Analítica, según las fórmulas de conversión, ¿a cuántos grados equivale 1 radián?

- A. 1 radián = (180/π)°
- B. 1 radián = (π/180)°
- C. 1 radián = 360°
- D. 1 radián = 60°

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 359
**Subtema:** Ángulos · Conversión de radianes a grados

Para convertir entre grados y radianes: 1 radián = (180/π)°.

### 18

En relación con el libro de Geometría Analítica, según la Tabla 8.1.1, ¿cuál es la medida en radianes de los ángulos de 30°, 45°, 60° y 90°?

- A. 30° = π/6, 45° = π/4, 60° = π/3 y 90° = π/2
- B. 30° = π/3, 45° = π/6, 60° = π/4 y 90° = π/2
- C. 30° = π/2, 45° = π/3, 60° = π/4 y 90° = π/6
- D. 30° = π/4, 45° = π/3, 60° = π/6 y 90° = π

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 360
**Subtema:** Ángulos · Tabla 8.1.1 de ángulos frecuentes

Según la Tabla 8.1.1, las medidas en radianes de los ángulos de uso más frecuente son: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2 y 180° = π.

---

## Sub-lote 7 · Terminología (pp. 360–361)

### 19

En relación con el libro de Geometría Analítica, ¿cómo se llama en geometría a un ángulo de 90° y a uno de 180°, y cuál es su medida en radianes?

- A. Al de 90° se le llama ángulo recto (π/2 radianes) y al de 180° ángulo recto doble (π radianes)
- B. Al de 90° se le llama ángulo llano (π/2 radianes) y al de 180° ángulo recto (π radianes)
- C. Al de 90° se le llama ángulo agudo (π/4 radianes) y al de 180° ángulo obtuso (π/2 radianes)
- D. Al de 90° se le llama ángulo central (π radianes) y al de 180° ángulo cuadrantal (2π radianes)

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 360
**Subtema:** Ángulos · Ángulo recto y recto doble

En geometría, a un ángulo de 90° se le llama ángulo recto, y a un ángulo de 180° se le llama ángulo recto doble. En radianes, π/2 es un ángulo recto, y π es un ángulo recto doble.

### 20

En relación con el libro de Geometría Analítica, ¿entre qué medidas está un ángulo agudo y entre cuáles un ángulo obtuso?

- A. Un ángulo agudo mide entre 0° y 90° (entre 0 y π/2 radianes); uno obtuso mide entre 90° y 180° (entre π/2 y π radianes)
- B. Un ángulo agudo mide entre 90° y 180°; uno obtuso mide entre 0° y 90°
- C. Un ángulo agudo mide entre 0° y 45°; uno obtuso mide entre 45° y 90°
- D. Un ángulo agudo mide exactamente 90°; uno obtuso exactamente 180°

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 360
**Subtema:** Ángulos · Ángulo agudo y obtuso

Un ángulo agudo mide entre 0° y 90° (o entre 0 y π/2 radianes), y un ángulo obtuso mide entre 90° y 180° (o entre π/2 y π radianes).

### 21

En relación con el libro de Geometría Analítica, ¿cuándo dos ángulos son complementarios y cuándo son suplementarios?

- A. Dos ángulos agudos son complementarios si suman 90° (π/2 radianes); dos ángulos positivos son suplementarios si suman 180° (π radianes)
- B. Son complementarios si suman 180° y suplementarios si suman 90°
- C. Son complementarios si suman 360° y suplementarios si suman 180°
- D. Son complementarios si son iguales y suplementarios si son coterminales

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 360
**Subtema:** Ángulos · Complementarios y suplementarios

Se dice que dos ángulos agudos son complementarios si suman 90° (o π/2 radianes). Dos ángulos positivos son suplementarios si suman 180° (o π radianes).

### 22

En relación con el libro de Geometría Analítica, ¿qué es un ángulo cuadrantal?

- A. Un ángulo cuyo lado terminal coincide con un eje de coordenadas
- B. Un ángulo que mide exactamente un cuarto de radián
- C. Un ángulo formado por dos radios de un círculo
- D. Un ángulo que está en el cuarto cuadrante

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 360
**Subtema:** Ángulos · Ángulo cuadrantal

Un ángulo cuyo lado terminal coincide con un eje de coordenadas se llama ángulo cuadrantal. Por ejemplo, 90° (o π/2 radianes) es un ángulo cuadrantal.

### 23

En relación con el libro de Geometría Analítica, ¿qué relación satisfacen las longitudes a, b y c de los lados de un triángulo rectángulo, y cómo se llaman esos lados?

- A. Satisfacen la relación pitagórica a² + b² = c², donde c es la hipotenusa (lado opuesto al ángulo recto) y a y b son los catetos
- B. Satisfacen a + b = c, donde c es la hipotenusa y a y b los catetos
- C. Satisfacen a² + b² = 2c², donde c es un cateto y a y b las hipotenusas
- D. Satisfacen a·b = c², donde c es el cateto mayor

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 360
**Subtema:** Ángulos · Triángulo rectángulo y relación pitagórica

Las longitudes a, b y c de los lados de un triángulo rectángulo satisfacen la relación pitagórica a² + b² = c², donde c es la longitud del lado opuesto al ángulo recto (la hipotenusa); los otros dos lados, a y b, son los catetos.

---

## Sub-lote 8 · Longitud de arco (p. 361)

### 24

En relación con el libro de Geometría Analítica, ¿qué es un ángulo central y qué es un sector?

- A. Un ángulo central es un ángulo θ con su vértice en el centro de un círculo de radio r; el sector es la región dentro del círculo contenida en el ángulo central θ
- B. Un ángulo central es el que tiene su vértice en la circunferencia; el sector es la cuerda que lo subtiende
- C. Un ángulo central mide siempre 360°; el sector es todo el círculo
- D. Un ángulo central es el lado terminal de un ángulo recto; el sector es su complemento

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 361
**Subtema:** Ángulos · Ángulo central y sector

Un ángulo θ con su vértice en el centro de un círculo de radio r se llama ángulo central. La región dentro del círculo contenida en el ángulo central θ se llama sector.

### 25

En relación con el libro de Geometría Analítica, según el Teorema 8.1.1 (fórmula de la longitud del arco), ¿qué arco abarca un ángulo central de θ radianes en un círculo de radio r?

- A. Un arco de longitud s = rθ
- B. Un arco de longitud s = r/θ
- C. Un arco de longitud s = r + θ
- D. Un arco de longitud s = πrθ

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 361
**Subtema:** Ángulos · Teorema 8.1.1 longitud del arco

Un ángulo central de θ radianes en un círculo de radio r abarca un arco de longitud s = rθ.

### 26

En relación con el libro de Geometría Analítica, con la fórmula de la longitud del arco, ¿cómo se expresa la medida θ (en radianes) de un ángulo central, y qué condición debe cumplirse para que s = rθ sea válida?

- A. θ (en radianes) = s/r; la fórmula s = rθ sólo es válida si θ se expresa en radianes
- B. θ (en radianes) = r/s; la fórmula es válida con θ en grados
- C. θ (en radianes) = s·r; la fórmula es válida sólo si el radio es 1
- D. θ (en radianes) = s − r; la fórmula es válida en cualquier unidad

**Respuesta:** A
**Referencia:** Zill, D. G. & Dewar, J. M. (2012) *Álgebra, Trigonometría y Geometría Analítica*, 3.ª ed., McGraw-Hill, Pág. 361
**Subtema:** Ángulos · Ángulo central en función del arco

Mediante la fórmula de la longitud del arco se puede expresar θ (en radianes) = s/r. La fórmula s = rθ sólo es válida si θ se expresa en radianes.

> Dato olvidable: s = rθ y θ = s/r sólo valen con θ en radianes; con grados hay que convertir primero. El 180° se llama en este libro "ángulo recto doble" (no "llano").
