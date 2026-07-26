# Física · Unidad 4 · Cinemática

**Materia:** **cinco planteles** piden esta unidad del mismo libro, con tres
claves de temario: `FIS-03-2026` (EMO), `FG-03-2026` (EMM y EMOS) y
`FIS-02-2026` (EMA y EMMA).
**Unidad del libro:** Unidad 4. Cinemática → los temas 2, 4, 5, 6, 9, 10 y 11.

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Quién lo pide es cosa del temario, y **ningún
> plantel pide lo mismo que otro**:
>
> | Tema de la Unidad 4 | EMO<br>`FIS-03` | EMM<br>`FG-03` | EMOS<br>`FG-03` | EMA/EMMA<br>`FIS-02` |
> |---|:---:|:---:|:---:|:---:|
> | 2 · Partícula material y trayectoria | sí | — | — | — |
> | 4 · Distancia, desplazamiento, velocidad y rapidez | sí | sí | sí | sí |
> | 5 · MRU | sí | — | — | sí |
> | 6 · Velocidad media | sí | — | — | sí |
> | 7 · Velocidad instantánea | — | — | — | **sí ✓** |
> | 9 · Aceleración y MRUA | sí | — | sí | — |
> | 10 · Tiro parabólico | sí | — | — | — |
> | 11 · Movimiento circular | sí | — | — | — |
>
> **Trampa verificada el 24 jul 2026:** la clave `FG-03-2026` aparece en el PDF
> de la EMM **y** en el de la EMOS, pero **las dos listas de temas son
> distintas**. La EMM sólo pide el tema 4 de esta unidad; la EMOS pide el 4 y el
> 9. No basta con leer el código: hay que abrir el PDF de cada plantel.
>
> Por eso **la línea `**Tema:**` de cada reactivo es obligatoria**: es la clave
> (`U4 t5`, `U4 t9`…) con la que cada temario manda a llamar lo suyo. Sin ella
> los cinco planteles se llevarían todo el archivo. `**Referencia:**` (libro,
> edición, página) y `**Subtema:**` completan la llave.

## Libro

Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria,
**6ª edición 2018** (1ª reimpresión, México 2020). ISBN 978-607-744-721-4
(sexta edición).

**OJO — el libro es un ESCANEO sin capa de texto.** `extraer.py` devuelve 0
caracteres; no sirve para este libro.

**Desfase = hoja del PDF − página impresa = 12.** Releído para esta unidad, no
arrastrado de la anterior: la hoja 082 del PDF muestra impreso "70" en su esquina
y contiene el tema 4, que el índice ubica en la página 70 (82 − 70 = 12). Coincide
con el desfase de la Unidad 3, pero se volvió a leer porque puede variar por
tramos.

## Método

`render.py <pdf> <hoja_desde> <hoja_hasta> 150` para renderizar la hoja a PNG y
**leerla con los ojos** (NO `extraer.py`). Para cifras o detalles finos,
`crop.py` a 500 dpi. La teoría se transcribe verbatim de la imagen; la página de
cada referencia se **lee** de la esquina de la hoja, nunca se calcula.

## Cobertura actual

- **Sub-lote 1 · Distancia y desplazamiento (p. 70)** — tema 4
- **Sub-lote 2 · Velocidad y rapidez (p. 70)** — tema 4
- **Sub-lote 3 · Definición y unidades de la velocidad (p. 71)** — tema 4
- **Sub-lote 4 · Partícula material y trayectoria (p. 68)** — tema 2
- **Sub-lote 5 · Movimiento rectilíneo uniforme, MRU (pp. 72–74)** — tema 5
- **Sub-lote 6 · Velocidad media (p. 74)** — tema 6
- **Sub-lote 7 · Aceleración (p. 81)** — tema 9
- **Sub-lote 8 · MRUA, aceleración media, aceleración instantánea y sus gráficas (p. 82)** — tema 9
- **Sub-lote 9 · Caída libre de los cuerpos (pp. 89–90)** — tema 9
- **Sub-lote 10 · Velocidad terminal y tiro vertical (pp. 90–91)** — tema 9
- **Sub-lote 11 · Tiro parabólico: concepto y tiro parabólico horizontal (pp. 93–94)** — tema 10
- **Sub-lote 12 · Tiro parabólico oblicuo (p. 94)** — tema 10
- **Sub-lote 13 · Movimiento circular: concepto, ángulo y radián (p. 98)** — tema 11
- **Sub-lote 14 · Desplazamiento angular, periodo, frecuencia y velocidad angular (pp. 99–100)** — tema 11
- **Sub-lote 15 · Movimiento circular uniforme, MCU (p. 100)** — tema 11
- **Sub-lote 16 · Velocidad instantánea (p. 76)** — tema 7

**Páginas saltadas a propósito** (teoría sobre práctica — no son olvidos):

- p. 71 · "Resolución de problemas de distancia, desplazamiento, velocidad y
  rapidez".
- p. 72 · la mitad superior, que es la continuación de esa misma resolución de
  problemas y su bloque de "Ejercicios propuestos".
- p. 73 · del bloque "Resolución de un problema de MRU" **sólo se tomaron las
  conclusiones generales** que el libro marca en rojo (la pendiente representa la
  magnitud de la velocidad, la proporcionalidad directa entre desplazamiento y
  tiempo). Los cálculos numéricos del problema no llevan reactivo.
- p. 75 · completa: es "Resolución de problemas de velocidad media".
- pp. 83 y 85–88 · "Resolución de un problema de MRUA e interpretación de
  gráficas" y sus ejercicios propuestos.
- p. 84 · "Deducción de las ecuaciones utilizadas en el MRUA": son catorce pasos
  de despeje algebraico, procedimiento puro. La única afirmación general de esa
  página —el área en la gráfica aceleración-tiempo representa la velocidad— ya
  quedó en el reactivo 55, tomada de la p. 82.
- p. 92 · completa: "Resolución de problemas de caída libre y tiro vertical".
- p. 95 · completa: "Resolución de un problema de tiro parabólico oblicuo", con
  su deducción algebraica del alcance horizontal.
- pp. 96–97 · resolución de problemas y ejercicios propuestos de tiro parabólico.
- pp. 101–102 · resolución de problemas y ejercicios propuestos de movimiento
  circular.

**Fuera del temario, no se tocan:** temas 1 (Importancia del estudio de la
cinemática), 3 (Sistemas de referencia inerciales y no inerciales), 8
(Interpretación de gráficas), 12 (MCUA) y 13 (MAS), aunque los temas 1 y 3
comparten la p. 68 con el tema 2.

De la p. 76 (tema 7) se saltó a propósito el bloque "Resolución de un problema de
velocidad instantánea" (la gráfica y el cálculo de la pendiente de la tangente),
por ser práctica, no teoría.

**Pendiente:** ninguno. Con el **tema 7, Velocidad instantánea (p. 76)** —añadido
el 25 jul 2026 en el sub-lote 16, 5 reactivos— la Unidad 4 queda **CERRADA para
los cinco planteles** que la piden: la EMO (`FIS-03`), la EMM y la EMOS (`FG-03`) y
la **EMA y la EMMA** (`FIS-02`), que eran las únicas que pedían el tema 7. Desfase
de la copia de la EMA reverificado aquí: hoja 88 = p. 76 impresa (+12).

## Erratas del libro

Verificadas con `crop.py` a 500–600 dpi para descartar suciedad del escaneo.
**No se escriben reactivos sobre estos puntos.**

| Pág. | Dice el libro | Debe decir |
|---|---|---|
| 82 | "magnitud del **desplazamieto**-tiempo al cuadrado", en el título de la sección de gráficas del MRUA | desplazamiento |

Es errata de imprenta, no del escaneo: a 550 dpi la palabra se lee limpia y le
falta la *n*. En la misma página el libro escribe bien "desplazamiento" dos
renglones arriba.

## Cómo se escriben estos reactivos

Recuerdo literal: la opción correcta y la justificación son **cita textual** del
libro, sin parafrasear. Cuatro opciones del mismo tipo y magnitud; los mejores
distractores salen del mismo párrafo. La correcta va **siempre en A** (el
importador baraja). Numeración corrida sin reiniciar. Sólo teoría: se saltan
todos los "Ejercicios", "Problemas" y "Resolución de problemas" del libro.

---

## Sub-lote 1 · Distancia y desplazamiento (p. 70)

### 1

De acuerdo con el libro de Física, ¿qué tipo de magnitud es la distancia recorrida por un móvil?

- A. Una magnitud escalar, ya que sólo interesa saber cuál fue la magnitud de la longitud recorrida, sin importar en qué dirección lo hizo.
- B. Una magnitud vectorial, pues corresponde a una distancia medida en una dirección particular.
- C. Una magnitud vectorial, pues requiere que se señale su magnitud, su dirección y su sentido.
- D. Una magnitud escalar, ya que indica la dirección en que se efectúa el movimiento.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La distancia recorrida por un móvil es una magnitud escalar, ya que sólo interesa saber cuál fue la magnitud de la longitud recorrida por el móvil durante su trayectoria seguida, sin importar en qué dirección lo hizo.>

### 2

De acuerdo con el libro de Física, ¿qué tipo de magnitud es el desplazamiento de un móvil?

- A. Una magnitud vectorial, pues corresponde a una distancia medida en una dirección particular entre dos puntos: el de partida y el de llegada.
- B. Una magnitud escalar, pues sólo interesa la longitud recorrida sin importar la dirección.
- C. Una magnitud escalar, pues únicamente indica la magnitud de la velocidad.
- D. Una magnitud vectorial, pues sólo requiere que se señale su magnitud.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<El desplazamiento de un móvil es una magnitud vectorial, pues corresponde a una distancia medida en una dirección particular entre dos puntos: el de partida y el de llegada.>

> Se confunden: la distancia es escalar (sólo la longitud recorrida); el desplazamiento es vectorial (va del punto de partida al de llegada).

### 3

De acuerdo con el ejemplo del libro de Física, si una persona camina 10 m al norte y 10 m al sur para regresar al mismo punto de donde partió, ¿cuál es su distancia recorrida y cuál su desplazamiento?

- A. Su distancia recorrida es de 20 m y su desplazamiento es igual a cero.
- B. Su distancia recorrida es de 20 m y su desplazamiento también es de 20 m.
- C. Su distancia recorrida es igual a cero y su desplazamiento es de 20 m.
- D. Su distancia recorrida es de 10 m y su desplazamiento es de 10 m.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<Tendremos entonces que su distancia recorrida es de 20 m, sin embargo, su desplazamiento es igual a cero, porque regresó al mismo lugar de partida.>

### 4

De acuerdo con el ejemplo del libro de Física, ¿por qué el desplazamiento de esa persona es igual a cero?

- A. Porque regresó al mismo lugar de partida.
- B. Porque caminó siempre en línea recta.
- C. Porque recorrió distancias iguales en cada unidad de tiempo.
- D. Porque su rapidez permaneció constante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<Su desplazamiento es igual a cero, porque regresó al mismo lugar de partida.>

## Sub-lote 2 · Velocidad y rapidez (p. 70)

### 5

De acuerdo con el libro de Física, ¿qué es la rapidez?

- A. Una cantidad escalar que únicamente indica la magnitud de la velocidad.
- B. Una magnitud vectorial que requiere magnitud, dirección y sentido.
- C. Una cantidad escalar que indica la dirección del desplazamiento.
- D. Una magnitud vectorial que resulta de dividir el desplazamiento entre el tiempo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La rapidez es una cantidad escalar que únicamente indica la magnitud de la velocidad.>

### 6

De acuerdo con el libro de Física, ¿por qué la velocidad es una magnitud vectorial?

- A. Pues para quedar bien definida requiere que se señale, además de su magnitud, su dirección y su sentido.
- B. Pues únicamente indica la magnitud de la rapidez.
- C. Pues sólo interesa la longitud recorrida sin importar la dirección.
- D. Pues siempre permanece constante en cualquier trayectoria.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La velocidad es una magnitud vectorial, pues para quedar bien definida requiere que se señale, además de su magnitud, su dirección y su sentido.>

### 7

De acuerdo con el libro de Física, ¿cómo se usan generalmente la velocidad y la rapidez?

- A. Generalmente se usan como sinónimos en forma equivocada.
- B. Generalmente se usan como conceptos opuestos entre sí.
- C. Generalmente se usan como sinónimos de manera correcta.
- D. Generalmente se usan sólo cuando la trayectoria es curva.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La velocidad y la rapidez generalmente se usan como sinónimos en forma equivocada.>

### 8

De acuerdo con el libro de Física, cuando un móvil sigue una trayectoria en línea recta recorriendo distancias iguales en cada unidad de tiempo, ¿qué ocurre con su rapidez y su velocidad?

- A. Su rapidez y velocidad permanecen constantes.
- B. Su rapidez permanece constante pero su velocidad va cambiando.
- C. Su velocidad permanece constante pero su rapidez va cambiando.
- D. Tanto su rapidez como su velocidad van cambiando.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<Cuando un móvil sigue una trayectoria en línea recta, recorriendo distancias iguales en cada unidad de tiempo, su rapidez y velocidad permanecen constantes.>

### 9

De acuerdo con el libro de Física, si en una trayectoria curva el móvil logra conservar una rapidez constante, ¿qué ocurre con su velocidad?

- A. Su velocidad va cambiando, aunque su magnitud, o rapidez, no varía, pero su sentido sí va modificándose.
- B. Su velocidad permanece constante, igual que su rapidez.
- C. Su velocidad va cambiando porque su magnitud aumenta constantemente.
- D. Su velocidad deja de ser vectorial y se vuelve una cantidad escalar.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<Si en una trayectoria curva el móvil logra conservar una rapidez constante, por ejemplo, 30 km/h, su velocidad va cambiando, aunque su magnitud, o rapidez, no varía, pero su sentido sí va modificándose.>

> En la curva la rapidez no cambia, pero la velocidad sí: lo que se modifica es el sentido.

### 10

De acuerdo con la conclusión del libro de Física, cuando en Física se habla de velocidad, ¿a qué se refiere?

- A. No se refiere sólo a la rapidez con que se mueve un cuerpo, sino también en qué dirección lo hace.
- B. Se refiere únicamente a la rapidez con que se mueve un cuerpo.
- C. Se refiere únicamente a la distancia total recorrida por el cuerpo.
- D. Se refiere sólo a la magnitud de la longitud recorrida en la trayectoria.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<En conclusión, cuando en Física se habla de velocidad, no se refiere sólo a la rapidez con que se mueve un cuerpo, sino también en qué dirección lo hace.>

### 11

De acuerdo con el libro de Física, ¿por qué queda determinada la dirección de la velocidad de un cuerpo móvil?

- A. Por la dirección o línea de acción en la cual se efectúa su desplazamiento.
- B. Por la magnitud de la longitud recorrida durante su trayectoria.
- C. Por el tiempo que tarda en efectuar su desplazamiento.
- D. Por la rapidez constante que conserva en la trayectoria.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La dirección de la velocidad de un cuerpo móvil queda determinada por la dirección o línea de acción en la cual se efectúa su desplazamiento.>

### 12

De acuerdo con el libro de Física, ¿cómo puede ser la velocidad de un cuerpo?

- A. Constante o variable.
- B. Escalar o vectorial.
- C. Únicamente positiva o negativa.
- D. Coplanar o no coplanar.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 70
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La velocidad de un cuerpo puede ser constante o variable.>

## Sub-lote 3 · Definición y unidades de la velocidad (p. 71)

### 13

De acuerdo con el libro de Física, ¿cómo se define la velocidad?

- A. Como el desplazamiento realizado por un móvil dividido entre el tiempo que tarda en efectuarlo.
- B. Como la distancia recorrida por un móvil multiplicada por el tiempo que tarda.
- C. Como el tiempo que tarda un móvil dividido entre su desplazamiento.
- D. Como la longitud total recorrida sin importar en qué dirección se hizo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 71
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<La velocidad se define como el desplazamiento realizado por un móvil dividido entre el tiempo que tarda en efectuarlo.>

### 14

De acuerdo con el libro de Física, en la fórmula de la velocidad, ¿qué representa cada literal?

- A. v = velocidad del móvil, d = desplazamiento del móvil, t = tiempo en que se realiza el desplazamiento.
- B. v = velocidad del móvil, d = distancia total recorrida, t = tiempo de la trayectoria curva.
- C. v = variación de la rapidez, d = dirección del móvil, t = trayectoria seguida.
- D. v = rapidez del móvil, d = dirección del desplazamiento, t = tiempo total del recorrido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 71
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<Donde: v = velocidad del móvil, d = desplazamiento del móvil, t = tiempo en que se realiza el desplazamiento.>

### 15

De acuerdo con el libro de Física, ¿cuáles son las unidades de velocidad en el Sistema Internacional (SI) y en el CGS?

- A. En el SI, m/s; en el CGS, cm/s.
- B. En el SI, cm/s; en el CGS, m/s.
- C. En el SI, km/h; en el CGS, m/s.
- D. En el SI, m/s²; en el CGS, cm/s².

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 71
**Tema:** U4 t4 · distancia, desplazamiento, velocidad y rapidez
**Subtema:** física · cinemática

<Las unidades de velocidad son: En el SI v = m/s. En el CGS v = cm/s.>

## Sub-lote 4 · Concepto de partícula material en movimiento e interpretación de su trayectoria (p. 68)

### 16

En relación con el libro de Física, en la descripción del movimiento de cualquier objeto material, ¿cómo resulta útil interpretarlo?

- A. Como una partícula material en movimiento, es decir, como si fuera un solo punto en movimiento.
- B. Como un sistema de referencia inercial, es decir, como si no tuviera aceleración.
- C. Como un marco de referencia, es decir, como el lugar a partir del cual se determina si está en reposo.
- D. Como un vector de posición, es decir, como una línea trazada desde el origen hasta el cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<En la descripción del movimiento de cualquier objeto material, también llamado cuerpo físico o simplemente cuerpo, resulta útil interpretarlo como una partícula material en movimiento, es decir, como si fuera un solo punto en movimiento.>

### 17

De acuerdo con el libro de Física, para interpretar un cuerpo como una partícula material en movimiento, ¿cómo se considera su masa?

- A. Se considera la masa de un cuerpo concentrada en un punto.
- B. Se considera la masa de un cuerpo repartida por igual en toda su superficie.
- C. Se considera la masa de un cuerpo concentrada a lo largo de su trayectoria.
- D. Se considera la masa de un cuerpo variable durante su desplazamiento.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<Para ello, se considera la masa de un cuerpo concentrada en un punto.>

### 18

De conformidad con el libro de Física, ¿se requiere que el cuerpo sea de dimensiones pequeñas para considerarlo como una partícula material?

- A. No, pues sólo se pretende facilitar la descripción de sus cambios de posición al suponer que todas sus partes constitutivas están animadas del mismo movimiento.
- B. Sí, pues sólo en los cuerpos de dimensiones pequeñas la masa se encuentra concentrada en un punto.
- C. Sí, pues de otro modo su trayectoria no podría ser una línea recta.
- D. No, pues todo cuerpo de grandes dimensiones se descompone en varias partículas materiales independientes.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<Por supuesto, no se requiere que el cuerpo sea de dimensiones pequeñas para considerarlo como una partícula material, pues sólo se pretende facilitar la descripción de sus cambios de posición al suponer que todas sus partes constitutivas están animadas del mismo movimiento.>

### 19

En relación con el ejemplo del libro de Física, al suponer como una partícula el balón de futbol que es pateado, ¿qué se logra?

- A. Se eliminan los diferentes giros que hace y se considera únicamente un solo movimiento.
- B. Se elimina la trayectoria que sigue y se considera únicamente su punto de partida.
- C. Se eliminan los cambios de velocidad y se considera únicamente su rapidez media.
- D. Se elimina el marco de referencia y se considera únicamente su posición final.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<Pensemos en la trayectoria de un balón de futbol cuando es pateado; en realidad, mientras se desplaza en el aire puede ir girando, pero si lo suponemos una partícula eliminamos los diferentes giros que hace y consideramos únicamente un solo movimiento, de manera que cualquier cuerpo físico puede ser considerado como una partícula.>

### 20

De acuerdo con el libro de Física, ¿qué nombre recibe la línea que constituye el recorrido de un móvil debido a su cambio de posición?

- A. Trayectoria.
- B. Desplazamiento.
- C. Vector de posición.
- D. Marco de referencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<El recorrido de un móvil debido a su cambio de posición lo constituye una línea que recibe el nombre de trayectoria.>

### 21

De conformidad con el libro de Física, dependiendo de la forma de su trayectoria, ¿cómo puede ser el movimiento del móvil?

- A. Rectilíneo, o bien, curvilíneo si su trayectoria es circular, elíptica o parabólica.
- B. Uniforme, o bien, variado si su trayectoria es circular, elíptica o parabólica.
- C. Inercial, o bien, no inercial si su trayectoria es circular, elíptica o parabólica.
- D. Escalar, o bien, vectorial si su trayectoria es circular, elíptica o parabólica.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<El recorrido de un móvil debido a su cambio de posición lo constituye una línea que recibe el nombre de trayectoria, y dependiendo de su forma, el movimiento del móvil puede ser rectilíneo, o bien, curvilíneo si su trayectoria es circular, elíptica o parabólica.>

### 22

En relación con el libro de Física, ¿de qué depende que los movimientos de los cuerpos sean uniformes o variados?

- A. De que la velocidad permanezca constante o no.
- B. De que la trayectoria sea recta o curva.
- C. De que la masa del cuerpo esté concentrada en un punto o no.
- D. De que el sistema de referencia sea inercial o no inercial.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 68
**Tema:** U4 t2 · partícula material y trayectoria
**Subtema:** física · cinemática

<Los movimientos de los cuerpos pueden ser uniformes o variados dependiendo de que la velocidad permanezca constante o no.>

> Se prestan a confusión los dos criterios que el libro da seguidos: la **forma de la trayectoria** decide si el movimiento es rectilíneo o curvilíneo (reactivo 21); la **velocidad** decide si es uniforme o variado. El distractor B intercambia uno por el otro.

## Sub-lote 5 · Movimiento rectilíneo uniforme, MRU (pp. 72–74)

### 23

De acuerdo con el libro de Física, ¿cuándo se dice que un móvil efectúa un movimiento rectilíneo uniforme?

- A. Cuando sigue una trayectoria recta en la cual realiza desplazamientos iguales en tiempos iguales.
- B. Cuando sigue una trayectoria recta en la cual realiza desplazamientos cada vez mayores en tiempos iguales.
- C. Cuando sigue una trayectoria curva en la cual logra conservar constante su rapidez.
- D. Cuando sigue una trayectoria recta en la cual su velocidad va cambiando de manera uniforme.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 72
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<Cuando un móvil sigue una trayectoria recta en la cual realiza desplazamientos iguales en tiempos iguales se dice que efectúa un movimiento rectilíneo uniforme.>

### 24

De conformidad con el ejemplo del libro de Física, si en 1 segundo un móvil se desplaza 2 metros, en 2 segundos 4 metros y en 3 segundos 6 metros, ¿qué se observa?

- A. Que la velocidad permanece constante, ya que por cada incremento en el tiempo de 1 segundo, tendrá un incremento de 2 metros en su desplazamiento.
- B. Que la velocidad aumenta, ya que por cada incremento en el tiempo de 1 segundo, tendrá un incremento cada vez mayor en su desplazamiento.
- C. Que la velocidad disminuye, ya que por cada incremento en el tiempo de 1 segundo, tendrá un incremento cada vez menor en su desplazamiento.
- D. Que la velocidad es igual a cero, ya que el móvil regresa al mismo lugar de partida.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 73
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<En este caso observaremos que la velocidad permanece constante, ya que por cada incremento en el tiempo de 1 segundo, tendrá un incremento de 2 metros en su desplazamiento.>

### 25

En relación con el libro de Física, ¿qué letra griega se utiliza para representar algún cambio en una variable?

- A. La letra griega Δ (delta).
- B. La letra griega Σ (sigma).
- C. La letra griega α (alfa).
- D. La letra griega ω (omega).

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 73
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<Para representar algún cambio en una variable se utiliza la letra griega Δ (delta).>

### 26

De acuerdo con el libro de Física, siempre que se trate del movimiento de un móvil en línea recta recorriendo desplazamientos iguales en tiempos iguales, ¿qué valor tiene la relación Δd/Δt?

- A. Será un valor constante.
- B. Será un valor cada vez mayor conforme transcurre el tiempo.
- C. Será un valor cada vez menor conforme transcurre el tiempo.
- D. Será un valor igual a cero.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 73
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<Siempre que se trate del movimiento de un móvil en línea recta, recorriendo desplazamientos iguales en tiempos iguales, la relación Δd/Δt será un valor constante. Donde: Δd/Δt = k = constante.>

### 27

De conformidad con el libro de Física, en una gráfica de la magnitud del desplazamiento en función del tiempo, ¿qué representa la pendiente de la recta?

- A. La magnitud de la velocidad, e indica que ésta permanece constante.
- B. La magnitud de la aceleración, e indica que ésta permanece constante.
- C. El tiempo que tarda el móvil en efectuar su desplazamiento.
- D. La longitud total de la trayectoria seguida por el móvil.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 73
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<La pendiente de la recta representa la magnitud de la velocidad e indica que ésta permanece constante, ya que sólo para una línea recta las variaciones iguales a lo largo de un eje corresponden a variaciones iguales sobre el otro eje.>

### 28

En relación con el libro de Física, ¿qué ocurre mientras mayor es la pendiente de la recta en la gráfica desplazamiento-tiempo?

- A. Mayor será la magnitud de la velocidad del móvil.
- B. Menor será la magnitud de la velocidad del móvil.
- C. Mayor será el tiempo empleado por el móvil.
- D. Menor será la magnitud del desplazamiento del móvil.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 73
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<Mientras mayor es la pendiente de la recta, mayor será la magnitud de la velocidad del móvil.>

### 29

De acuerdo con el libro de Física, ¿qué relación existe entre la variable desplazamiento del cuerpo y la variable tiempo en el movimiento rectilíneo uniforme?

- A. Existe una relación de proporcionalidad directa.
- B. Existe una relación de proporcionalidad inversa.
- C. No existe ninguna relación entre las dos variables.
- D. Existe una relación de proporcionalidad directa al cuadrado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 73
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<Por tanto, existe una relación de proporcionalidad directa entre la variable desplazamiento del cuerpo y la variable tiempo.>

### 30

De conformidad con el libro de Física, en una gráfica de la magnitud de la velocidad en función del tiempo, ¿qué representa el área bajo la recta o una curva?

- A. La magnitud del desplazamiento del móvil.
- B. La magnitud de la aceleración del móvil.
- C. La magnitud de la velocidad media del móvil.
- D. El tiempo que tarda el móvil en su recorrido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<En una gráfica de la magnitud de la velocidad en función del tiempo, el área bajo la recta o una curva representa la magnitud del desplazamiento del móvil.>

> No confundir las dos gráficas: en la de **desplazamiento**-tiempo lo que vale es la **pendiente** (reactivos 27 y 28); en la de **velocidad**-tiempo lo que vale es el **área** bajo la recta.

### 31

En relación con el libro de Física, cuando se grafican la magnitud de la velocidad y el tiempo y permanece constante la magnitud de la velocidad, ¿qué se obtiene?

- A. Una línea recta paralela al eje t.
- B. Una línea recta inclinada respecto al eje t.
- C. Una línea recta paralela al eje v.
- D. Una curva parabólica ascendente.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t5 · movimiento rectilíneo uniforme (MRU)
**Subtema:** física · cinemática

<Cuando se grafican la magnitud de la velocidad y el tiempo, y permanece constante la magnitud de la velocidad, se obtiene una línea recta paralela al eje t.>

## Sub-lote 6 · Velocidad media (p. 74)

### 32

De acuerdo con el libro de Física, ¿por qué es necesario considerar el concepto de velocidad media?

- A. Porque la mayoría de los movimientos que realizan los cuerpos no son uniformes, es decir, sus desplazamientos generalmente no son proporcionales al cambio de tiempo.
- B. Porque la mayoría de los movimientos que realizan los cuerpos son uniformes, es decir, sus desplazamientos siempre son proporcionales al cambio de tiempo.
- C. Porque la velocidad es una cantidad escalar que únicamente indica la magnitud del desplazamiento.
- D. Porque la trayectoria seguida por los cuerpos siempre es una línea recta.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t6 · velocidad media
**Subtema:** física · cinemática

<La mayoría de los movimientos que realizan los cuerpos no son uniformes, es decir, sus desplazamientos generalmente no son proporcionales al cambio de tiempo; debido a ello es necesario considerar el concepto de velocidad media.>

### 33

De conformidad con el ejemplo del libro de Física, si de la Ciudad de México a la de Puebla se hace en autobús una hora treinta minutos al recorrer la distancia de 128 kilómetros que las separa, ¿cuál es la magnitud de la velocidad media durante el viaje?

- A. 85.3 km/h
- B. 128 km/h
- C. 192 km/h
- D. 1.5 km/h

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t6 · velocidad media
**Subtema:** física · cinemática

<vm = d/t = 128 km / 1.5 h = 85.3 km/h>

### 34

En relación con el libro de Física, ¿por qué la magnitud de la velocidad del autobús durante ese viaje no puede ser constante?

- A. Pues en las partes rectas su magnitud de velocidad será mayor que en las curvas.
- B. Pues en las curvas su magnitud de velocidad será mayor que en las partes rectas.
- C. Pues su desplazamiento total es proporcional al tiempo que tarda en efectuarlo.
- D. Pues la trayectoria que sigue es una línea recta de 128 kilómetros.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t6 · velocidad media
**Subtema:** física · cinemática

<Evidentemente, la magnitud de la velocidad del autobús durante el viaje no puede ser constante, pues en las partes rectas su magnitud de velocidad será mayor que en las curvas.>

### 35

De acuerdo con el libro de Física, ¿qué representa una magnitud de velocidad media?

- A. La relación entre la magnitud del desplazamiento total hecho por un móvil y el tiempo en efectuarlo.
- B. La relación entre la magnitud de la velocidad final y la magnitud de la velocidad inicial del móvil.
- C. La relación entre el tiempo empleado por el móvil y la magnitud de su desplazamiento total.
- D. La relación entre la magnitud del desplazamiento del móvil y la longitud de la trayectoria que siguió.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t6 · velocidad media
**Subtema:** física · cinemática

<Por tanto, una magnitud de velocidad media representa la relación entre la magnitud del desplazamiento total hecho por un móvil y el tiempo en efectuarlo.>

### 36

De conformidad con el libro de Física, cuando un móvil experimenta dos o más magnitudes de velocidades distintas durante su movimiento, ¿cómo se obtiene la magnitud de la velocidad media o promedio?

- A. Sumando las magnitudes de las velocidades y dividiéndolas entre el número de las magnitudes de las velocidades sumadas.
- B. Sumando las magnitudes de las velocidades y multiplicándolas por el número de las magnitudes de las velocidades sumadas.
- C. Restando la magnitud de la velocidad menor de la mayor y dividiendo el resultado entre dos.
- D. Dividiendo la magnitud de la velocidad mayor entre el número de las magnitudes de las velocidades sumadas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 74
**Tema:** U4 t6 · velocidad media
**Subtema:** física · cinemática

<Cuando un móvil experimenta dos o más magnitudes de velocidades distintas durante su movimiento se puede obtener una magnitud de la velocidad media o promedio si sumamos las magnitudes de las velocidades y las dividimos entre el número de las magnitudes de las velocidades sumadas.>

## Sub-lote 7 · Aceleración (p. 81)

### 37

En relación con el libro de Física, ¿por qué la mayoría de los cuerpos que observamos en movimiento no se mueven a velocidad constante?

- A. Pues ésta varía, ya sea aumentando o disminuyendo su magnitud o cambiando de dirección.
- B. Pues ésta varía únicamente cuando el cuerpo cambia de dirección.
- C. Pues ésta varía únicamente cuando el cuerpo aumenta la magnitud de su velocidad.
- D. Pues ésta varía sólo mientras el cuerpo sigue una trayectoria recta.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<En nuestra vida cotidiana observamos distintos cuerpos en movimiento. La mayoría de ellos no se mueven a velocidad constante, pues ésta varía, ya sea aumentando o disminuyendo su magnitud o cambiando de dirección.>

### 38

De acuerdo con el ejemplo del libro de Física, ¿qué le ocurre a un auto de carreras al acercarse a una curva?

- A. Disminuye la magnitud de su velocidad y luego la vuelve a aumentar.
- B. Aumenta la magnitud de su velocidad y luego la vuelve a disminuir.
- C. Conserva constante la magnitud de su velocidad durante toda la curva.
- D. Anula la magnitud de su velocidad hasta salir de la curva.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Un auto de carreras aumenta la magnitud de su velocidad cuando la pista tiene un tramo recto; sin embargo, al acercarse a una curva disminuye la magnitud de su velocidad y luego la vuelve a aumentar.>

### 39

De conformidad con el libro de Física, ¿cuándo decimos que un cuerpo ha tenido una aceleración?

- A. Siempre que tiene un cambio en la magnitud de su velocidad con respecto al tiempo, ya sea positivo o negativo, o cuando cambia su dirección.
- B. Únicamente cuando la magnitud de su velocidad final es mayor que la de su velocidad inicial.
- C. Únicamente cuando cambia la dirección de su movimiento, sin que varíe la magnitud de su velocidad.
- D. Siempre que recorre desplazamientos iguales en tiempos iguales sobre una trayectoria recta.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Siempre que un cuerpo tiene un cambio en la magnitud de su velocidad con respecto al tiempo, ya sea positivo, cuando la magnitud de la velocidad final es mayor que la de la velocidad inicial o bien un cambio negativo, cuando la magnitud de la velocidad final es menor a la de la velocidad inicial, o cuando cambia su dirección, decimos que ha tenido una aceleración.>

### 40

En relación con el libro de Física, ¿cómo es común llamar a la aceleración cuando ésta es negativa?

- A. Desaceleración.
- B. Aceleración media.
- C. Aceleración instantánea.
- D. Aceleración gravitacional.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando la aceleración es negativa, es común decir que existe una desaceleración.>

### 41

De acuerdo con el libro de Física, ¿de qué depende que la aceleración sea positiva o negativa?

- A. La aceleración será positiva si el cambio en la velocidad también es positivo, y será negativa si el cambio en la velocidad es negativo.
- B. La aceleración será positiva si el móvil parte del reposo, y será negativa si no parte del reposo.
- C. La aceleración será positiva si la trayectoria es recta, y será negativa si la trayectoria es curva.
- D. La aceleración será positiva si el cambio en la velocidad es negativo, y será negativa si el cambio en la velocidad es positivo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Así pues, la aceleración será positiva si el cambio en la velocidad también es positivo, y será negativa si el cambio en la velocidad es negativo.>

### 42

De conformidad con el libro de Física, ¿por qué la aceleración es una magnitud vectorial?

- A. Ya que requiere que se especifique su dirección y sentido para quedar definida.
- B. Ya que únicamente indica el cambio en la magnitud de la velocidad.
- C. Ya que sólo interesa saber cuál fue la longitud recorrida por el móvil.
- D. Ya que siempre permanece constante al transcurrir el tiempo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<La aceleración es una magnitud vectorial, ya que requiere que se especifique su dirección y sentido para quedar definida.>

### 43

En relación con la conclusión del libro de Física, ¿qué representa la aceleración?

- A. El cambio en la velocidad de un cuerpo en un tiempo determinado.
- B. El desplazamiento realizado por un cuerpo en un tiempo determinado.
- C. La longitud de la trayectoria recorrida por un cuerpo en un tiempo determinado.
- D. La magnitud de la velocidad que lleva un cuerpo en un instante determinado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<En conclusión: La aceleración representa el cambio en la velocidad de un cuerpo en un tiempo determinado.>

### 44

De acuerdo con el libro de Física, ¿cómo se calcula la magnitud de la aceleración?

- A. Dividiendo el cambio de la magnitud de la velocidad entre el tiempo en que ocurre el cambio.
- B. Multiplicando el cambio de la magnitud de la velocidad por el tiempo en que ocurre el cambio.
- C. Dividiendo el tiempo en que ocurre el cambio entre el cambio de la magnitud de la velocidad.
- D. Sumando la magnitud de la velocidad final y la de la velocidad inicial y dividiéndolas entre dos.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Magnitud de la aceleración = Cambio de la magnitud de la velocidad / Tiempo en que ocurre el cambio = Δv/t>

### 45

De conformidad con el libro de Física, cuando el móvil parte del reposo, ¿cuánto vale su velocidad inicial?

- A. Es igual a cero.
- B. Es igual a la magnitud de su velocidad final.
- C. Es igual a la magnitud de su aceleración.
- D. Es igual a 9.8 m/s.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando el móvil parte del reposo, su velocidad inicial es igual a cero (v₀ = 0) y la magnitud de su aceleración es igual a: a = v/t>

### 46

En relación con el libro de Física, ¿cuáles son las unidades de aceleración en el Sistema Internacional (SI) y en el Cegesimal (CGS)?

- A. En el SI, m/s²; en el CGS, cm/s².
- B. En el SI, cm/s²; en el CGS, m/s².
- C. En el SI, m/s; en el CGS, cm/s.
- D. En el SI, km/h²; en el CGS, m/s².

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 81
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Sistema Internacional (SI): a = (m/s)/s = m/s². Sistema Cegesimal (CGS): a = (cm/s)/s = cm/s².>

## Sub-lote 8 · MRUA, aceleración media, aceleración instantánea y sus gráficas (p. 82)

### 47

De acuerdo con el libro de Física, ¿cuándo se tiene un movimiento rectilíneo uniformemente acelerado?

- A. Cuando la magnitud de la velocidad experimenta cambios iguales en cada unidad de tiempo.
- B. Cuando la magnitud de la velocidad permanece constante en cada unidad de tiempo.
- C. Cuando la magnitud de la aceleración experimenta cambios iguales en cada unidad de tiempo.
- D. Cuando el móvil recorre desplazamientos iguales en tiempos iguales.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Se tiene un movimiento rectilíneo uniformemente acelerado cuando la magnitud de la velocidad experimenta cambios iguales en cada unidad de tiempo.>

> No confundir con el MRU (reactivo 23): en el MRU lo que se repite igual en cada unidad de tiempo es el **desplazamiento**; en el MRUA es el **cambio en la magnitud de la velocidad**. El distractor D es la definición del MRU.

### 48

De conformidad con el libro de Física, ¿qué ocurre con la magnitud de la aceleración en el movimiento rectilíneo uniformemente acelerado?

- A. Permanece constante al transcurrir el tiempo.
- B. Aumenta de manera constante al transcurrir el tiempo.
- C. Disminuye de manera constante al transcurrir el tiempo.
- D. Es igual a cero durante todo el recorrido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<En este movimiento la magnitud de la aceleración permanece constante al transcurrir el tiempo.>

### 49

En relación con el ejemplo del libro de Física, si un automóvil que viaja en línea recta lleva 2 m/s al primer segundo, 4 m/s al segundo segundo y 6 m/s al tercer segundo, ¿cuál es la magnitud de su aceleración?

- A. 2 m/s²
- B. 4 m/s²
- C. 6 m/s²
- D. 12 m/s²

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Decimos que la magnitud de su velocidad cambia 2 m/s cada segundo. De donde su aceleración es constante en los tres segundos y cuya magnitud es 2 m/s².>

### 50

De acuerdo con el libro de Física, ¿qué conviene determinar cuando un móvil varía su velocidad?

- A. La magnitud de su aceleración media, conociendo la magnitud de su cambio de velocidad y el tiempo en realizar dicho cambio.
- B. La magnitud de su velocidad media, conociendo la magnitud de su aceleración y el tiempo en que ésta cambió.
- C. La magnitud de su desplazamiento total, conociendo la longitud de la trayectoria que siguió.
- D. La magnitud de su aceleración instantánea, conociendo la magnitud de su velocidad inicial.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Por tanto, cuando un móvil varía su velocidad es conveniente determinar la magnitud de su aceleración media, conociendo la magnitud de su cambio de velocidad y el tiempo en realizar dicho cambio.>

### 51

De conformidad con el libro de Física, ¿a qué se aproxima la aceleración media cuando en el movimiento acelerado de un cuerpo los intervalos de tiempo considerados son cada vez más pequeños?

- A. A una aceleración instantánea.
- B. A una aceleración constante.
- C. A una velocidad media.
- D. A una desaceleración.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando en el movimiento acelerado de un cuerpo los intervalos de tiempo considerados son cada vez más pequeños, la aceleración media se aproxima a una aceleración instantánea.>

### 52

En relación con el libro de Física, ¿cuándo la aceleración del móvil será instantánea?

- A. Cuando el intervalo de tiempo es tan pequeño que tiende a cero.
- B. Cuando el intervalo de tiempo es tan grande que tiende al infinito.
- C. Cuando la magnitud de la velocidad inicial es igual a cero.
- D. Cuando la magnitud de la aceleración permanece constante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando el intervalo de tiempo es tan pequeño que tiende a cero, la aceleración del móvil será instantánea.>

### 53

De acuerdo con el libro de Física, en una gráfica de magnitud del desplazamiento-tiempo al cuadrado, ¿qué representa la pendiente de la curva?

- A. La mitad de la magnitud de la aceleración experimentada por un móvil durante su recorrido.
- B. El doble de la magnitud de la aceleración experimentada por un móvil durante su recorrido.
- C. La magnitud de la velocidad del móvil durante su recorrido.
- D. La magnitud del desplazamiento total del móvil durante su recorrido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Al estudiar ahora las gráficas para un MRUA encontraremos que en una gráfica de magnitud del desplazamiento-tiempo al cuadrado, la pendiente de la curva representa la mitad de la magnitud de la aceleración experimentada por un móvil durante su recorrido.>

### 54

De conformidad con el libro de Física, en una gráfica de magnitud de la velocidad-tiempo, ¿qué representa la pendiente de la curva?

- A. La magnitud de la aceleración.
- B. La magnitud del desplazamiento del móvil.
- C. La mitad de la magnitud de la aceleración.
- D. La magnitud de la velocidad media del móvil.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<En una gráfica de magnitud de la velocidad-tiempo, la pendiente de la curva representa la magnitud de la aceleración.>

### 55

En relación con el libro de Física, en una gráfica de magnitud de la aceleración-tiempo, ¿qué representa el área bajo la curva?

- A. La magnitud de la velocidad del móvil.
- B. La magnitud del desplazamiento del móvil.
- C. La magnitud de la aceleración media del móvil.
- D. El tiempo que tarda el móvil en su recorrido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 82
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Finalmente, en una gráfica de magnitud de la aceleración-tiempo, el área bajo la curva representa la magnitud de la velocidad del móvil.>

> Las cuatro gráficas del MRUA se prestan a confusión y el libro las da seguidas. Pendiente: desplazamiento-tiempo → velocidad; desplazamiento-tiempo al cuadrado → **la mitad** de la aceleración; velocidad-tiempo → aceleración. Área: velocidad-tiempo → desplazamiento; aceleración-tiempo → velocidad.

## Sub-lote 9 · Caída libre de los cuerpos (pp. 89–90)

### 56

De acuerdo con el libro de Física, ¿cuándo tiene un cuerpo una caída libre?

- A. Si desciende sobre la superficie de la Tierra y no sufre ninguna resistencia originada por el aire o cualquier otra sustancia.
- B. Si desciende sobre la superficie de la Tierra sufriendo la resistencia originada por el aire.
- C. Si se lanza verticalmente hacia arriba y la magnitud de su velocidad va disminuyendo.
- D. Si desciende con una velocidad constante que recibe el nombre de velocidad terminal.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 89
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Un cuerpo tiene una caída libre si desciende sobre la superficie de la Tierra y no sufre ninguna resistencia originada por el aire o cualquier otra sustancia.>

### 57

De conformidad con el libro de Física, ¿cuándo es posible interpretar de manera práctica el movimiento de un cuerpo como una caída libre?

- A. Cuando la resistencia del aire sobre los cuerpos es tan pequeña que se puede despreciar.
- B. Cuando la resistencia del aire sobre los cuerpos es tan grande que no se puede despreciar.
- C. Cuando el cuerpo desciende con una velocidad constante.
- D. Cuando el cuerpo es de dimensiones pequeñas y poco peso.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 89
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<De manera práctica, cuando la resistencia del aire sobre los cuerpos es tan pequeña que se puede despreciar es posible interpretar su movimiento como una caída libre.>

### 58

En relación con el experimento del libro de Física, si dejamos caer una hoja de papel y un cuaderno, ¿qué se observa?

- A. Que la hoja de papel cae más despacio y con un movimiento irregular, mientras la caída del cuaderno es vertical y es el primero en llegar al suelo.
- B. Que el cuaderno cae más despacio y con un movimiento irregular, mientras la caída de la hoja de papel es vertical y es la primera en llegar al suelo.
- C. Que ambos cuerpos caen verticalmente y al mismo tiempo, independientemente de su tamaño y peso.
- D. Que ambos cuerpos caen con un movimiento irregular y ninguno llega al suelo antes que el otro.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 89
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Observemos que la hoja de papel cae más despacio y con un movimiento irregular, mientras la caída del cuaderno es vertical y es el primero en llegar al suelo.>

### 59

De acuerdo con el experimento del libro de Física, ¿por qué al comprimir la hoja de papel en una bolita ambos cuerpos caen verticalmente y al mismo tiempo?

- A. Porque al comprimir la hoja de papel casi hemos eliminado los efectos de la resistencia del aire.
- B. Porque al comprimir la hoja de papel hemos aumentado considerablemente su peso.
- C. Porque al comprimir la hoja de papel hemos eliminado la aceleración de la gravedad.
- D. Porque al comprimir la hoja de papel hemos igualado su tamaño al del cuaderno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 89
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<El resultado será que ambos cuerpos caen verticalmente y al mismo tiempo, porque al comprimir la hoja de papel casi hemos eliminado los efectos de la resistencia del aire.>

### 60

De conformidad con el libro de Física, cuando en un tubo al vacío se dejan caer simultáneamente una pluma de ave, una piedra, una moneda y un pedazo de metal, ¿qué ocurre?

- A. Su caída será vertical y al mismo tiempo, independientemente de su tamaño y peso.
- B. Su caída será vertical, pero llegarán al suelo en orden de mayor a menor peso.
- C. Su caída será irregular, pues dentro del tubo aumenta la resistencia del aire.
- D. Su caída será vertical y al mismo tiempo sólo si todos tienen el mismo tamaño.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 89
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando en un tubo al vacío se dejan caer simultáneamente una pluma de ave, una piedra, una moneda y un pedazo de metal, su caída será vertical y al mismo tiempo, independientemente de su tamaño y peso, por tanto, su movimiento es en caída libre.>

### 61

En relación con el libro de Física, ¿qué demostró el científico italiano Galileo Galilei en 1590?

- A. Que todos los cuerpos, ya sean grandes o pequeños, en ausencia de fricción, caen a la Tierra con la misma aceleración.
- B. Que los cuerpos grandes, en ausencia de fricción, caen a la Tierra con mayor aceleración que los pequeños.
- C. Que todos los cuerpos, ya sean grandes o pequeños, caen a la Tierra con la misma velocidad terminal.
- D. Que la aceleración de la gravedad es igual en todos los lugares de la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 89
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<El científico italiano Galileo Galilei fue el primero en demostrar en 1590 que todos los cuerpos, ya sean grandes o pequeños, en ausencia de fricción, caen a la Tierra con la misma aceleración.>

### 62

De acuerdo con el libro de Física, ¿qué tipo de movimiento produce la aceleración gravitacional sobre los cuerpos con caída libre?

- A. Un movimiento uniformemente acelerado, motivo por el cual la magnitud de su velocidad aumenta en forma constante, mientras la aceleración permanece fija.
- B. Un movimiento rectilíneo uniforme, motivo por el cual la magnitud de su velocidad permanece constante durante toda la caída.
- C. Un movimiento circular uniforme, motivo por el cual su velocidad va cambiando de sentido.
- D. Un movimiento uniformemente acelerado, motivo por el cual la aceleración aumenta en forma constante mientras la velocidad permanece fija.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<La aceleración gravitacional produce sobre los cuerpos con caída libre un movimiento uniformemente acelerado, motivo por el cual la magnitud de su velocidad aumenta en forma constante, mientras la aceleración permanece fija. La caída libre de los cuerpos es un ejemplo práctico de movimiento uniformemente acelerado.>

### 63

De conformidad con el libro de Física, ¿cuál es la magnitud aceptada de la aceleración de la gravedad y cuál su valor redondeado?

- A. 9.8066 m/s², que redondeada puede considerarse en forma aproximada como 9.8 m/s².
- B. 9.8660 m/s², que redondeada puede considerarse en forma aproximada como 9.9 m/s².
- C. 6 371.45 m/s², que redondeada puede considerarse en forma aproximada como 6 371 m/s².
- D. 9.8066 cm/s², que redondeada puede considerarse en forma aproximada como 9.8 cm/s².

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Sin embargo, para fines prácticos la magnitud aceptada es de 9.8066 m/s², cantidad que redondeada puede considerarse en forma aproximada como 9.8 m/s².>

### 64

En relación con el libro de Física, ¿es igual en todas partes la magnitud de la aceleración de la gravedad medida en distintos lugares de la Tierra?

- A. No, pues existen pequeñas diferencias.
- B. Sí, es exactamente la misma en todos los lugares de la Tierra.
- C. No, pues cambia de acuerdo con el tamaño y el peso del cuerpo que cae.
- D. Sí, siempre que el cuerpo no sufra la resistencia del aire.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Al hacer la medición de la magnitud de la aceleración de la gravedad en distintos lugares de la Tierra, se ha encontrado que ésta no es igual en todas partes, pues existen pequeñas diferencias.>

### 65

De acuerdo con el libro de Física, ¿hacia dónde está dirigida la aceleración de la gravedad y qué signo tendrá?

- A. Su dirección está dirigida hacia el centro de la Tierra y, puesto que está dirigida hacia abajo, tendrá signo negativo.
- B. Su dirección está dirigida hacia el centro de la Tierra y, puesto que está dirigida hacia abajo, tendrá signo positivo.
- C. Su dirección está dirigida hacia arriba y, por ser un vector dirigido hacia arriba, tendrá signo negativo.
- D. Su dirección varía según el lugar de la Tierra y su signo depende del tamaño del cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Debemos considerar que la aceleración de la gravedad es una magnitud vectorial cuya dirección está dirigida hacia el centro de la Tierra. Como ya se ha señalado, los vectores dirigidos hacia arriba son positivos, y los dirigidos hacia abajo son negativos; entonces, puesto que la aceleración de la gravedad está dirigida hacia abajo, tendrá signo negativo.>

### 66

De conformidad con el libro de Física, ¿qué cambios se acostumbra hacer en las ecuaciones del MRUA para resolver problemas de caída libre?

- A. Se cambia la letra a de la magnitud de la aceleración por g, y la letra d de distancia por h que representa la altura.
- B. Se cambia la letra a de la magnitud de la aceleración por h, y la letra d de distancia por g que representa la gravedad.
- C. Se cambia la letra v de la magnitud de la velocidad por g, y la letra t de tiempo por h.
- D. No se cambia ninguna letra, pues la caída libre emplea ecuaciones propias distintas de las del MRUA.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Para resolver problemas de caída libre se utilizan las mismas ecuaciones del movimiento rectilíneo uniformemente acelerado, resumidas en la Deducción de las ecuaciones utilizadas en el MRUA, pero se acostumbra cambiar la letra a de la magnitud de la aceleración por g que representa la magnitud de la aceleración de la gravedad, y la letra d de distancia por h que representa la altura.>

## Sub-lote 10 · Velocidad terminal y tiro vertical (pp. 90–91)

### 67

En relación con el libro de Física, ¿qué nombre recibe la fuerza que se opone al movimiento de un cuerpo sólido que se desplaza en un fluido?

- A. Fuerza de fricción viscosa.
- B. Fuerza de atracción de la gravedad.
- C. Fuerza centrípeta.
- D. Fuerza neta o resultante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando un cuerpo sólido se mueve desplazándose en un fluido (líquidos y gases), como puede ser aire, agua, aceite, etc., experimenta una resistencia que se opone a su movimiento, es decir, se presenta una fuerza en sentido contrario al del movimiento del cuerpo. Dicha fuerza recibe el nombre de fuerza de fricción viscosa.>

### 68

De acuerdo con el libro de Física, ¿de qué depende la fuerza de fricción viscosa?

- A. De la velocidad del sólido, de la viscosidad del fluido, así como de la forma geométrica del cuerpo.
- B. Únicamente del peso del cuerpo y de la aceleración de la gravedad.
- C. Únicamente de la altura desde la cual se deja caer el cuerpo.
- D. De la masa del cuerpo y del tiempo que tarda en caer.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Dicha fuerza recibe el nombre de fuerza de fricción viscosa, y depende de la velocidad del sólido, de la viscosidad (resistencia que opone un fluido a fluir) del fluido, así como de la forma geométrica del cuerpo.>

### 69

De conformidad con el libro de Física, ¿qué es la viscosidad?

- A. La resistencia que opone un fluido a fluir.
- B. La resistencia que opone un sólido a moverse dentro de un fluido.
- C. La fuerza con que la gravedad atrae a un fluido hacia el centro de la Tierra.
- D. La velocidad constante con que un cuerpo desciende dentro de un fluido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<La viscosidad (resistencia que opone un fluido a fluir).>

### 70

En relación con el libro de Física, ¿qué nombre recibe la velocidad constante con que desciende un paracaidista cuando la fuerza neta que actúa sobre él es igual a cero?

- A. Velocidad terminal.
- B. Velocidad instantánea.
- C. Velocidad media.
- D. Velocidad de escape.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando la fuerza de fricción viscosa del aire tiene la misma magnitud que la fuerza de atracción de la gravedad, la fuerza neta o resultante que actúa sobre el paracaidista es igual a cero, por lo que su descenso lo realiza con una velocidad constante, que recibe el nombre de velocidad terminal.>

### 71

De acuerdo con el libro de Física, ¿cuál es la magnitud aproximada de la velocidad terminal de un paracaidista antes de abrir su paracaídas?

- A. Aproximadamente de 200 km/h.
- B. Aproximadamente de 100 km/h.
- C. Aproximadamente de 9.8 km/h.
- D. Aproximadamente de 380 km/h.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 90
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Su descenso lo realiza con una velocidad constante, que recibe el nombre de velocidad terminal, cuya magnitud es aproximadamente de 200 km/h.>

### 72

De conformidad con el libro de Física, ¿cuándo alcanza su velocidad terminal todo cuerpo al caer, como las gotas de lluvia, el granizo o un paracaidista?

- A. Cuando su peso tenga la misma magnitud que la fuerza debida a la resistencia del aire.
- B. Cuando su peso sea mayor que la fuerza debida a la resistencia del aire.
- C. Cuando su peso sea menor que la fuerza debida a la resistencia del aire.
- D. Cuando la resistencia del aire sobre el cuerpo desaparezca por completo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<En general, todo cuerpo al caer, como gotas de lluvia, granizo, paracaidista, etc., alcanzará su velocidad terminal cuando su peso tenga la misma magnitud que la fuerza debida a la resistencia del aire.>

### 73

En relación con el libro de Física, ¿qué le ocurre a la velocidad terminal del paracaidista al abrir su paracaídas?

- A. Tendrá una magnitud muy por debajo de los 200 km/h, ya que la fuerza de fricción viscosa del aire se incrementa considerablemente.
- B. Tendrá una magnitud muy por encima de los 200 km/h, ya que la fuerza de fricción viscosa del aire disminuye considerablemente.
- C. Permanecerá exactamente en 200 km/h hasta llegar al suelo.
- D. Se anulará por completo, pues la fuerza neta que actúa sobre él deja de ser cero.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Esta velocidad dura muy pocos segundos, ya que al abrir su paracaídas la fuerza de fricción viscosa del aire se incrementa considerablemente y la velocidad terminal del paracaidista tendrá una magnitud muy por debajo de los 200 km/h.>

### 74

De acuerdo con el libro de Física, ¿cuándo se presenta el tiro vertical?

- A. Cuando un cuerpo se lanza verticalmente hacia arriba observándose que la magnitud de su velocidad va disminuyendo hasta anularse al alcanzar su altura máxima.
- B. Cuando un cuerpo desciende sobre la superficie de la Tierra sin sufrir ninguna resistencia originada por el aire.
- C. Cuando un cuerpo se lanza horizontalmente y describe una trayectoria parabólica.
- D. Cuando un cuerpo se lanza verticalmente hacia arriba observándose que la magnitud de su velocidad va aumentando hasta alcanzar su altura máxima.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Este movimiento se presenta cuando un cuerpo se lanza verticalmente hacia arriba observándose que la magnitud de su velocidad va disminuyendo hasta anularse al alcanzar su altura máxima.>

### 75

De conformidad con el libro de Física, en el tiro vertical, ¿qué relación hay entre el tiempo empleado en subir y el utilizado en bajar?

- A. El tiempo empleado en subir es el mismo utilizado en bajar.
- B. El tiempo empleado en subir es el doble del utilizado en bajar.
- C. El tiempo empleado en subir es la mitad del utilizado en bajar.
- D. El tiempo empleado en subir es igual a cero, pues la velocidad se anula.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Inmediatamente inicia su regreso para llegar al mismo punto donde fue lanzado y adquiere la misma magnitud de velocidad con la cual partió. De igual manera, el tiempo empleado en subir es el mismo utilizado en bajar.>

### 76

En relación con la conclusión del libro de Física, ¿qué leyes y qué ecuaciones sigue el tiro vertical?

- A. Sigue las mismas leyes de la caída libre de los cuerpos y, por tanto, emplea las mismas ecuaciones.
- B. Sigue las mismas leyes del movimiento rectilíneo uniforme y, por tanto, emplea las mismas ecuaciones.
- C. Sigue las mismas leyes del movimiento circular y, por tanto, emplea las mismas ecuaciones.
- D. Sigue leyes propias distintas de las de cualquier otro movimiento y emplea ecuaciones propias.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<En conclusión, el tiro vertical sigue las mismas leyes de la caída libre de los cuerpos y, por tanto, emplea las mismas ecuaciones.>

### 77

De acuerdo con el libro de Física, cuando un cuerpo lanzado verticalmente hacia arriba alcanza su altura máxima, ¿cuánto vale su velocidad final?

- A. Es cero.
- B. Es igual a la magnitud de la velocidad con la cual partió.
- C. Es igual a 9.8 m/s.
- D. Es igual al doble de la magnitud de su velocidad inicial.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Cuando el cuerpo alcanza su altura máxima (hmáx) su velocidad final es cero.>

### 78

De conformidad con el libro de Física, ¿cómo se obtiene el tiempo de permanencia en el aire de un cuerpo en tiro vertical?

- A. Es el doble del tiempo que tarda en subir, pues el tiempo que tarda en subir es el mismo para bajar.
- B. Es la mitad del tiempo que tarda en subir, pues el tiempo que tarda en bajar es menor.
- C. Es igual al tiempo que tarda en subir, pues al llegar a su altura máxima el cuerpo se detiene.
- D. Es el triple del tiempo que tarda en subir, pues el regreso es uniformemente acelerado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 91
**Tema:** U4 t9 · aceleración y MRUA
**Subtema:** física · cinemática

<Como el tiempo que tarda en subir es el mismo para bajar, entonces el tiempo de permanencia en el aire será: t(aire) = 2 t(subir).>

## Sub-lote 11 · Tiro parabólico: concepto y tiro parabólico horizontal (pp. 93–94)

### 79

En relación con el libro de Física, ¿de qué es un ejemplo el tiro parabólico?

- A. De movimiento realizado por un cuerpo en dos dimensiones o sobre un plano.
- B. De movimiento realizado por un cuerpo en una sola dimensión y en línea recta.
- C. De movimiento realizado por un cuerpo en tres dimensiones y en el espacio.
- D. De movimiento realizado por un cuerpo sobre una trayectoria circular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<El tiro parabólico es un ejemplo de movimiento realizado por un cuerpo en dos dimensiones o sobre un plano.>

### 80

De acuerdo con el libro de Física, ¿cuándo es parabólico el movimiento de un cuerpo?

- A. Si su trayectoria es una parábola, es decir, una curva abierta, simétrica respecto a un eje y con un solo foco.
- B. Si su trayectoria es una circunferencia, es decir, una curva cerrada y con un solo centro.
- C. Si su trayectoria es una elipse, es decir, una curva cerrada y con dos focos.
- D. Si su trayectoria es una recta, es decir, una línea abierta y sin foco alguno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<El movimiento de un cuerpo es parabólico si su trayectoria es una parábola, es decir, una curva abierta, simétrica respecto a un eje y con un solo foco.>

### 81

De conformidad con el libro de Física, ¿como la combinación de qué dos movimientos puede considerarse el tiro parabólico para su estudio?

- A. De un movimiento horizontal uniforme y un movimiento vertical rectilíneo uniformemente acelerado.
- B. De un movimiento horizontal rectilíneo uniformemente acelerado y un movimiento vertical uniforme.
- C. De un movimiento horizontal uniforme y un movimiento vertical circular uniforme.
- D. De dos movimientos verticales rectilíneos uniformemente acelerados de sentido contrario.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<El tiro parabólico, para su estudio, puede considerarse como la combinación de dos movimientos que son un movimiento horizontal uniforme y un movimiento vertical rectilíneo uniformemente acelerado.>

### 82

En relación con el libro de Física, ¿de qué es la resultante el tiro parabólico?

- A. De la suma vectorial de un movimiento horizontal uniforme y de un movimiento vertical rectilíneo uniformemente acelerado.
- B. De la resta vectorial de un movimiento horizontal uniforme y de un movimiento vertical rectilíneo uniformemente acelerado.
- C. De la suma escalar de un movimiento horizontal uniforme y de un movimiento vertical rectilíneo uniformemente acelerado.
- D. De la suma vectorial de dos movimientos horizontales uniformes de sentido contrario.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<En otras palabras, el tiro parabólico es la resultante de la suma vectorial de un movimiento horizontal uniforme y de un movimiento vertical rectilíneo uniformemente acelerado.>

### 83

De acuerdo con el libro de Física, ¿de cuántos tipos es el tiro parabólico y cuáles son?

- A. De dos tipos: horizontal y oblicuo.
- B. De dos tipos: horizontal y vertical.
- C. De tres tipos: horizontal, vertical y oblicuo.
- D. De dos tipos: uniforme y uniformemente acelerado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<El tiro parabólico es de dos tipos: horizontal y oblicuo.>

### 84

De conformidad con el libro de Física, ¿por qué se caracteriza el tiro parabólico horizontal?

- A. Por la trayectoria o camino curvo que sigue un cuerpo al ser lanzado horizontalmente al vacío, resultado de dos movimientos independientes.
- B. Por la trayectoria que sigue un cuerpo cuando es lanzado con una velocidad inicial que forma un ángulo con el eje horizontal.
- C. Por la trayectoria recta que sigue un cuerpo al ser lanzado horizontalmente al vacío, resultado de un solo movimiento.
- D. Por la trayectoria que sigue un cuerpo lanzado verticalmente hacia arriba hasta alcanzar su altura máxima.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<Se caracteriza por la trayectoria o camino curvo que sigue un cuerpo al ser lanzado horizontalmente al vacío, resultado de dos movimientos independientes.>

> El distractor B es la definición del tiro parabólico **oblicuo** (reactivo 88). Lo que los separa es si el cuerpo se lanza horizontalmente o formando un ángulo con el eje horizontal.

### 85

En relación con el libro de Física, ¿cuáles son los dos movimientos independientes de los que resulta el tiro parabólico horizontal?

- A. Un movimiento horizontal con velocidad constante y otro vertical, el cual se inicia con una velocidad cero y va aumentando su magnitud.
- B. Un movimiento horizontal que se inicia con una velocidad cero y va aumentando su magnitud, y otro vertical con velocidad constante.
- C. Un movimiento horizontal con velocidad constante y otro vertical que también conserva constante su velocidad.
- D. Un movimiento horizontal con velocidad decreciente y otro vertical con velocidad creciente.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 93
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<Resultado de dos movimientos independientes: un movimiento horizontal con velocidad constante y otro vertical, el cual se inicia con una velocidad cero y va aumentando su magnitud en la misma proporción de otro cuerpo que cayera al vacío desde el mismo punto en el mismo instante.>

### 86

De acuerdo con el libro de Física, ¿qué rapidez tendrá durante su recorrido horizontal una pelota lanzada con una velocidad horizontal?

- A. Una rapidez constante durante su recorrido horizontal e independiente de su movimiento vertical originado por la aceleración de la gravedad durante su caída libre.
- B. Una rapidez que va aumentando durante su recorrido horizontal por efecto de la aceleración de la gravedad durante su caída libre.
- C. Una rapidez que va disminuyendo durante su recorrido horizontal hasta anularse al llegar al suelo.
- D. Una rapidez constante durante su recorrido horizontal, pero dependiente de su movimiento vertical.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<La pelota lanzada con una velocidad horizontal tendrá una rapidez constante durante su recorrido horizontal e independiente de su movimiento vertical originado por la aceleración de la gravedad durante su caída libre.>

### 87

De conformidad con el pie de figura del libro de Física, ¿qué se observa en las componentes de la velocidad de un cuerpo que sigue una trayectoria parabólica horizontal?

- A. La velocidad horizontal permanece constante, mientras la velocidad vertical aumenta su magnitud durante su caída libre por acción de la gravedad de la Tierra.
- B. La velocidad vertical permanece constante, mientras la velocidad horizontal aumenta su magnitud durante su caída libre por acción de la gravedad de la Tierra.
- C. Tanto la velocidad horizontal como la vertical permanecen constantes durante toda la trayectoria.
- D. Tanto la velocidad horizontal como la vertical aumentan su magnitud por acción de la gravedad de la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<Se observa cómo la velocidad horizontal (v_H) permanece constante, mientras la velocidad vertical (v_V) aumenta su magnitud durante su caída libre por acción de la gravedad de la Tierra.>

## Sub-lote 12 · Tiro parabólico oblicuo (p. 94)

### 88

En relación con el libro de Física, ¿por qué se caracteriza el tiro parabólico oblicuo?

- A. Por la trayectoria que sigue un cuerpo cuando es lanzado con una velocidad inicial que forma un ángulo con el eje horizontal.
- B. Por la trayectoria que sigue un cuerpo cuando es lanzado horizontalmente al vacío.
- C. Por la trayectoria que sigue un cuerpo cuando es lanzado verticalmente hacia arriba.
- D. Por la trayectoria que sigue un cuerpo cuando se suelta desde el reposo y cae al vacío.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<Se caracteriza por la trayectoria que sigue un cuerpo cuando es lanzado con una velocidad inicial que forma un ángulo con el eje horizontal.>

### 89

De acuerdo con los ejemplos del libro de Física, ¿qué trayectorias corresponden a un tiro parabólico oblicuo?

- A. La seguida por una pelota de voleibol después de recibir el golpe durante el saque inicial, o la de un balón de futbol al ser despejado con un cierto ángulo por el portero.
- B. La seguida por un proyectil que cae desde un avión en movimiento, o la de una pelota lanzada horizontalmente al vacío.
- C. La seguida por una esfera metálica lanzada verticalmente hacia arriba, o la de una maceta que cae desde una azotea.
- D. La seguida por una persona en la rueda de la fortuna, o la de una piedra atada a una cuerda que se hace girar.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<Por ejemplo, la trayectoria seguida por una pelota de voleibol después de recibir el golpe durante el saque inicial, o el de un balón de futbol al ser despejado con un cierto ángulo por el portero.>

### 90

De conformidad con el libro de Física, ¿cuál es la única condición para que un cuerpo lanzado con una determinada magnitud de velocidad inicial tenga el mismo alcance horizontal con dos ángulos de tiro diferentes?

- A. Que la suma de dichos ángulos dé un resultado de 90°.
- B. Que la suma de dichos ángulos dé un resultado de 180°.
- C. Que la diferencia entre dichos ángulos dé un resultado de 45°.
- D. Que el producto de dichos ángulos dé un resultado de 90°.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<Una característica del tiro parabólico oblicuo es que cuando se lanza un cuerpo con una determinada magnitud de velocidad inicial, tendrá el mismo alcance horizontal, es decir, recorrerá la misma distancia en forma horizontal con dos ángulos diferentes de tiro, la única condición es que la suma de dichos ángulos dé un resultado de 90°.>

### 91

En relación con el ejemplo del libro de Física, ¿con qué ángulo de tiro tiene un cuerpo el mismo alcance horizontal que uno lanzado con un ángulo de 30°?

- A. Con un ángulo de 60°.
- B. Con un ángulo de 45°.
- C. Con un ángulo de 70°.
- D. Con un ángulo de 15°.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<De esta manera, un cuerpo lanzado con un ángulo de 30° tiene un alcance horizontal igual a un cuerpo lanzado con un ángulo de 60° (30° + 60° = 90°).>

### 92

De acuerdo con el libro de Física, ¿cuándo tiene lugar el alcance máximo horizontal?

- A. Cuando el ángulo de tiro es de 45°.
- B. Cuando el ángulo de tiro es de 90°.
- C. Cuando el ángulo de tiro es de 70°.
- D. Cuando el ángulo de tiro es de 20°.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<El alcance máximo horizontal tiene lugar cuando el ángulo de tiro es de 45°.>

### 93

De conformidad con la conclusión del libro de Física, ¿qué sucede cuanto mayor es el ángulo de tiro respecto al eje horizontal?

- A. Un cuerpo adquiere una mayor altura y durará más tiempo en el aire; sin embargo, al ser menor la magnitud de la componente horizontal de la velocidad inicial, su alcance horizontal también será menor.
- B. Un cuerpo adquiere una menor altura y durará menos tiempo en el aire; sin embargo, al ser mayor la magnitud de la componente horizontal de la velocidad inicial, su alcance horizontal será mayor.
- C. Un cuerpo adquiere una mayor altura y durará más tiempo en el aire, por lo que su alcance horizontal también será mayor.
- D. Un cuerpo adquiere siempre la misma altura y el mismo alcance horizontal, sea cual sea el ángulo de tiro.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<En conclusión, cuanto mayor es el ángulo de tiro respecto al eje horizontal, un cuerpo adquiere una mayor altura y durará más tiempo en el aire; sin embargo, al ser menor la magnitud de la componente horizontal de la velocidad inicial, su alcance horizontal también será menor.>

### 94

En relación con el pie de figura del libro de Física, ¿para qué pares de ángulos es el mismo el alcance horizontal del cuerpo?

- A. Para los ángulos de 20° y 70°, y de igual manera para los ángulos de 30° y 60°.
- B. Para los ángulos de 20° y 30°, y de igual manera para los ángulos de 60° y 70°.
- C. Para los ángulos de 15° y 45°, y de igual manera para los ángulos de 45° y 75°.
- D. Para los ángulos de 20° y 60°, y de igual manera para los ángulos de 30° y 70°.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 94
**Tema:** U4 t10 · tiro parabólico
**Subtema:** física · cinemática

<El alcance horizontal del cuerpo es el mismo para los ángulos de 20° y 70°. De igual manera, el alcance horizontal es el mismo para los ángulos de 30° y 60°.>

## Sub-lote 13 · Movimiento circular: concepto, ángulo y radián (p. 98)

### 95

De acuerdo con el libro de Física, ¿cuándo describe un cuerpo o una partícula un movimiento circular?

- A. Cuando su trayectoria es una circunferencia.
- B. Cuando su trayectoria es una parábola.
- C. Cuando su trayectoria es una línea recta.
- D. Cuando su trayectoria es una elipse.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Un cuerpo o una partícula describe un movimiento circular cuando su trayectoria es una circunferencia.>

### 96

De conformidad con el libro de Física, ¿qué le ocurre al vector velocidad en el movimiento circular?

- A. Varía constantemente de dirección, y su magnitud o módulo puede estar variando o permanecer constante.
- B. Varía constantemente de magnitud, mientras su dirección permanece siempre constante.
- C. Permanece constante tanto en magnitud como en dirección durante todo el recorrido.
- D. Varía constantemente de dirección y su magnitud siempre permanece constante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<En este movimiento el vector velocidad varía constantemente de dirección, y su magnitud o módulo puede estar variando o permanecer constante.>

### 97

En relación con el libro de Física, ¿qué ángulo forma siempre la aceleración de una partícula en movimiento circular con su velocidad?

- A. Un ángulo recto (90°).
- B. Un ángulo de 45°.
- C. Un ángulo de 180°.
- D. Un ángulo de 0°.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Por tanto, en un movimiento circular una partícula se puede mover con rapidez constante o no, pero su aceleración formará siempre un ángulo recto (90°) con su velocidad y se desplazará formando un círculo.>

### 98

De acuerdo con el libro de Física, ¿qué nombre recibe la aceleración que recibe la partícula, dirigida hacia el centro del círculo?

- A. Aceleración normal, radial o centrípeta.
- B. Aceleración tangencial, lineal o centrífuga.
- C. Aceleración angular, media o instantánea.
- D. Aceleración gravitacional o de la gravedad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<La aceleración que recibe la partícula está dirigida hacia el centro del círculo y recibe el nombre de aceleración normal, radial o centrípeta.>

### 99

De conformidad con el libro de Física, ¿dónde se efectúa el movimiento circular?

- A. En un mismo plano, y es el movimiento más sencillo en dos dimensiones y en dos direcciones.
- B. En tres planos distintos, y es el movimiento más complejo en tres dimensiones.
- C. En una sola línea recta, y es el movimiento más sencillo en una dimensión.
- D. En un mismo plano, y es el movimiento más complejo en dos dimensiones y en cuatro direcciones.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<El movimiento circular se efectúa en un mismo plano y es el movimiento más sencillo en dos dimensiones y en dos direcciones.>

### 100

En relación con los ejemplos del libro de Física, ¿qué casos cotidianos corresponden a un movimiento circular?

- A. Una persona que se sube a una rueda de la fortuna, una niña que disfruta en un carrusel, o una piedra atada al extremo de una cuerda y que se hace girar.
- B. Una pelota de golf lanzada con cierto ángulo, un balón de futbol despejado por el portero, o un proyectil lanzado desde un avión.
- C. Un autobús que aumenta y disminuye la magnitud de su velocidad, o un auto de carreras que se acerca a una curva.
- D. Una maceta que cae desde una azotea, una hoja de papel que cae al suelo, o una pluma de ave dentro de un tubo al vacío.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<En nuestra vida cotidiana observamos diferentes partículas describiendo movimientos circulares, tal es el caso de una persona que se sube a una rueda de la fortuna, una niña que disfruta en un carrusel, o una piedra atada al extremo de una cuerda y que se hace girar.>

### 101

De acuerdo con el libro de Física, ¿de qué es un caso particular el movimiento circular y por qué?

- A. Del movimiento de traslación de una partícula, ya que el eje de giro está fuera de dicha partícula.
- B. Del movimiento de rotación de un cuerpo rígido, ya que el eje de giro está dentro de dicho cuerpo.
- C. Del movimiento rectilíneo uniforme, ya que recorre distancias iguales en tiempos iguales.
- D. Del tiro parabólico, ya que resulta de la suma de un movimiento horizontal y otro vertical.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Es importante señalar que el movimiento circular es un caso particular del movimiento de traslación de una partícula, ya que el eje de giro está fuera de dicha partícula.>

### 102

De conformidad con el libro de Física, ¿dónde se localiza el eje de giro en el movimiento de rotación de un cuerpo rígido?

- A. Dentro del cuerpo rígido.
- B. Fuera del cuerpo rígido.
- C. En la tangente a la trayectoria del cuerpo rígido.
- D. En un punto cualquiera de la circunferencia que describe.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<No sucede así en el movimiento de rotación de un cuerpo rígido en donde el eje de giro se localiza dentro del cuerpo rígido.>

> Los reactivos 101 y 102 son el par que el libro contrasta: en el movimiento **circular** el eje de giro queda **fuera** de la partícula; en el de **rotación**, **dentro** del cuerpo rígido.

### 103

En relación con el libro de Física, ¿con qué modelos se describen el movimiento circular y el movimiento de rotación?

- A. El movimiento circular se describe con el modelo de partícula y el movimiento de rotación con el modelo del cuerpo rígido.
- B. El movimiento circular se describe con el modelo del cuerpo rígido y el movimiento de rotación con el modelo de partícula.
- C. Ambos movimientos se describen con el modelo de partícula.
- D. Ambos movimientos se describen con el modelo del cuerpo rígido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Además, el movimiento circular se describe con el modelo de partícula y el movimiento de rotación con el modelo del cuerpo rígido.>

### 104

De acuerdo con el libro de Física, ¿con qué magnitudes se enuncian generalmente las expresiones matemáticas del movimiento circular?

- A. Con magnitudes angulares como el desplazamiento angular, la velocidad angular y la aceleración angular.
- B. Con magnitudes lineales como el desplazamiento, la velocidad y la aceleración.
- C. Con magnitudes escalares como la distancia, la rapidez y el tiempo.
- D. Con magnitudes fundamentales como la longitud, la masa y el tiempo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Las expresiones matemáticas del movimiento circular se enuncian generalmente con magnitudes angulares como el desplazamiento angular, la velocidad angular y la aceleración angular.>

### 105

De conformidad con el libro de Física, en el movimiento circular de una partícula, ¿dónde resulta práctico considerar que se encuentra el origen del sistema de referencia?

- A. En el centro de su trayectoria circular.
- B. En un punto cualquiera de su trayectoria circular.
- C. En la tangente a su trayectoria circular.
- D. Fuera del plano de su trayectoria circular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<En el movimiento circular de una partícula, resulta práctico considerar que el origen del sistema de referencia se encuentra en el centro de su trayectoria circular.>

### 106

En relación con el libro de Física, ¿cómo son las trayectorias de las partículas de un cuerpo en movimiento circular?

- A. Circunferencias concéntricas de longitud diferente y de radio igual a la distancia entre la partícula considerada y el eje de rotación.
- B. Circunferencias concéntricas de la misma longitud y de radio igual para todas las partículas del cuerpo.
- C. Parábolas abiertas y simétricas respecto a un eje, con un solo foco.
- D. Líneas rectas paralelas entre sí y perpendiculares al eje de rotación.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<No obstante, es conveniente resaltar que las trayectorias de éstas son circunferencias concéntricas de longitud diferente y de radio igual a la distancia entre la partícula considerada y el eje de rotación.>

### 107

De acuerdo con el libro de Física, ¿qué es el ángulo?

- A. Es la abertura comprendida entre dos radios que limitan un arco de circunferencia.
- B. Es el ángulo central al que corresponde un arco de longitud igual al radio.
- C. Es el tiempo que tarda un móvil en dar una vuelta completa o en completar un ciclo.
- D. Es el número de vueltas, revoluciones o ciclos que efectúa un móvil en un segundo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Ángulo. Es la abertura comprendida entre dos radios que limitan un arco de circunferencia.>

### 108

De conformidad con el libro de Física, ¿qué es el radián?

- A. Es el ángulo central al que corresponde un arco de longitud igual al radio.
- B. Es la abertura comprendida entre dos radios que limitan un arco de circunferencia.
- C. Es el ángulo que tiene como base el número 60.
- D. Es el ángulo que se efectúa cuando un objeto realiza una vuelta completa alrededor de un eje de rotación.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Radián. Es el ángulo central al que corresponde un arco de longitud igual al radio.>

> Los reactivos 107 y 108 se prestan a confusión porque el libro define **ángulo** y **radián** uno tras otro: el ángulo es la abertura entre dos radios; el radián es el ángulo particular cuyo arco mide lo mismo que el radio.

### 109

En relación con el libro de Física, ¿a cuánto equivale un radián en grados sexagesimales?

- A. 57.3° = 57° 18'
- B. 60° = 60° 00'
- C. 45.5° = 45° 30'
- D. 360° = 2π rad

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 98
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Un radián equivale a 57.3° = 57° 18'.>

## Sub-lote 14 · Desplazamiento angular, periodo, frecuencia y velocidad angular (pp. 99–100)

### 110

De acuerdo con el libro de Física, si tomamos como origen del sistema de referencia el centro de la trayectoria circular, ¿qué magnitud y qué dirección tendrá el vector de posición?

- A. Tendrá una magnitud constante y su dirección será la misma que tenga el radio de la circunferencia.
- B. Tendrá una magnitud variable y su dirección será siempre tangente a la circunferencia.
- C. Tendrá una magnitud constante y su dirección será siempre perpendicular al radio de la circunferencia.
- D. Tendrá una magnitud variable y su dirección será la misma que tenga el eje de rotación.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Por tanto, el vector de posición tendrá una magnitud constante y su dirección será la misma que tenga el radio de la circunferencia.>

### 111

De conformidad con el libro de Física, ¿qué es el desplazamiento angular?

- A. Es la magnitud física que cuantifica la magnitud de la rotación que experimenta un objeto de acuerdo con su ángulo de giro.
- B. Es la magnitud física que cuantifica el tiempo que tarda un objeto en dar una vuelta completa.
- C. Es la magnitud física que cuantifica el número de vueltas que efectúa un objeto en un segundo.
- D. Es la magnitud física que cuantifica la longitud de la circunferencia que describe un objeto.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Por tanto, el desplazamiento angular es la magnitud física que cuantifica la magnitud de la rotación que experimenta un objeto de acuerdo con su ángulo de giro.>

### 112

En relación con el libro de Física, ¿con qué letra griega se representa el desplazamiento angular y cuáles son sus unidades de medida?

- A. Con la letra griega θ (theta); sus unidades son el radián en el Sistema Internacional, así como grados sexagesimales y revoluciones, que son unidades prácticas.
- B. Con la letra griega ω (omega); sus unidades son el radián en el Sistema Internacional, así como grados sexagesimales y revoluciones, que son unidades prácticas.
- C. Con la letra griega Δ (delta); sus unidades son el metro en el Sistema Internacional, así como el centímetro, que es unidad práctica.
- D. Con la letra griega α (alfa); sus unidades son el radián por segundo en el Sistema Internacional, así como las revoluciones por minuto.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<El desplazamiento angular se representa con la letra griega θ (theta) y sus unidades de medida son: el radián, cuando el sistema usado es el Internacional; así como grados sexagesimales y revoluciones que son unidades prácticas.>

### 113

De acuerdo con el libro de Física, ¿qué es el grado sexagesimal?

- A. Es aquel que tiene como base el número 60; la circunferencia tiene 360 grados sexagesimales, cada uno de los cuales se subdivide en 60 minutos, y éstos en 60 segundos.
- B. Es aquel que tiene como base el número 360; la circunferencia tiene 60 grados sexagesimales, cada uno de los cuales se subdivide en 360 minutos.
- C. Es aquel que tiene como base el número 6; la circunferencia tiene 60 grados sexagesimales, cada uno de los cuales se subdivide en 6 minutos.
- D. Es aquel que tiene como base el número 100; la circunferencia tiene 400 grados sexagesimales, cada uno de los cuales se subdivide en 100 minutos.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<El grado sexagesimal es aquel que tiene como base el número 60. La circunferencia tiene 360 grados sexagesimales, cada uno de los cuales se subdivide en 60 minutos, y éstos en 60 segundos.>

### 114

De conformidad con el libro de Física, ¿cuándo se efectúa una revolución y a cuánto es igual?

- A. Cuando un objeto realiza una vuelta completa alrededor de un eje de rotación; una revolución es igual a 360° = 2π rad.
- B. Cuando un objeto realiza media vuelta alrededor de un eje de rotación; una revolución es igual a 180° = π rad.
- C. Cuando un objeto recorre un arco de longitud igual al radio; una revolución es igual a 57.3° = 1 rad.
- D. Cuando un objeto realiza una vuelta completa alrededor de un eje de rotación; una revolución es igual a 60° = 2π rad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Una revolución se efectúa cuando un objeto realiza una vuelta completa alrededor de un eje de rotación. Una revolución es igual a 360° = 2π rad.>

### 115

En relación con el libro de Física, ¿qué es el periodo?

- A. Es el tiempo que tarda un móvil en dar una vuelta completa o en completar un ciclo.
- B. Es el número de vueltas, revoluciones o ciclos que efectúa un móvil en un segundo.
- C. Es la abertura comprendida entre dos radios que limitan un arco de circunferencia.
- D. Es el cociente entre la magnitud del desplazamiento angular y el tiempo que tarda en efectuarlo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Periodo. Es el tiempo que tarda un móvil en dar una vuelta completa o en completar un ciclo.>

### 116

De acuerdo con el libro de Física, ¿qué es la frecuencia?

- A. Es el número de vueltas, revoluciones o ciclos que efectúa un móvil en un segundo.
- B. Es el tiempo que tarda un móvil en dar una vuelta completa o en completar un ciclo.
- C. Es la magnitud física que cuantifica la rotación de un objeto según su ángulo de giro.
- D. Es la velocidad que llevará un cuerpo al salir disparado en forma tangencial a la circunferencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Frecuencia. Es el número de vueltas, revoluciones o ciclos que efectúa un móvil en un segundo.>

### 117

De conformidad con el libro de Física, ¿qué relación existe entre el periodo y la frecuencia?

- A. El periodo equivale al inverso de la frecuencia y la frecuencia al inverso del periodo.
- B. El periodo equivale al doble de la frecuencia y la frecuencia a la mitad del periodo.
- C. El periodo equivale al cuadrado de la frecuencia y la frecuencia a la raíz del periodo.
- D. El periodo y la frecuencia son siempre iguales entre sí.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Como puede observarse, el periodo equivale al inverso de la frecuencia y la frecuencia al inverso del periodo.>

### 118

En relación con el libro de Física, ¿qué representa la magnitud de la velocidad angular?

- A. El cociente entre la magnitud del desplazamiento angular de un cuerpo y el tiempo que tarda en efectuarlo.
- B. El producto de la magnitud del desplazamiento angular de un cuerpo por el tiempo que tarda en efectuarlo.
- C. El cociente entre el tiempo que tarda un cuerpo y la magnitud de su desplazamiento angular.
- D. El cociente entre el número de ciclos que efectúa un cuerpo y un segundo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 99
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<La magnitud de la velocidad angular representa el cociente entre la magnitud del desplazamiento angular de un cuerpo y el tiempo que tarda en efectuarlo.>

### 119

De acuerdo con el libro de Física, en la fórmula de la velocidad angular, ¿qué representa cada literal?

- A. ω = magnitud de la velocidad angular en rad/s, θ = magnitud del desplazamiento angular en rad, t = tiempo en que efectúa el desplazamiento en segundos (s).
- B. ω = magnitud del desplazamiento angular en rad, θ = magnitud de la velocidad angular en rad/s, t = tiempo en que efectúa el desplazamiento en segundos (s).
- C. ω = magnitud de la aceleración angular en rad/s², θ = magnitud del desplazamiento angular en rad, t = periodo en segundos (s).
- D. ω = magnitud de la velocidad angular en rad/s, θ = magnitud del desplazamiento lineal en metros, t = frecuencia en ciclos por segundo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Donde: ω = magnitud de la velocidad angular en rad/s, θ = magnitud del desplazamiento angular en rad, t = tiempo en que efectúa el desplazamiento en segundos (s).>

### 120

De conformidad con el libro de Física, ¿cuándo podemos determinar la magnitud de la velocidad angular media de un cuerpo?

- A. Cuando su velocidad angular no es constante o uniforme, al conocer las magnitudes de la velocidad angular inicial y su velocidad angular final.
- B. Cuando su velocidad angular es constante o uniforme, al conocer únicamente la magnitud de su velocidad angular final.
- C. Cuando su desplazamiento angular es igual a cero, al conocer el tiempo que tarda en efectuarlo.
- D. Cuando su periodo y su frecuencia son iguales entre sí.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Cuando la velocidad angular de un cuerpo no es constante o uniforme, podemos determinar la magnitud de la velocidad angular media al conocer las magnitudes de la velocidad angular inicial y su velocidad angular final.>

## Sub-lote 15 · Movimiento circular uniforme, MCU (p. 100)

### 121

En relación con el libro de Física, ¿cuándo se produce el movimiento circular uniforme?

- A. Cuando un cuerpo o partícula con una magnitud de velocidad angular constante describe ángulos iguales en tiempos iguales.
- B. Cuando un cuerpo o partícula con una magnitud de velocidad angular variable describe ángulos iguales en tiempos iguales.
- C. Cuando un cuerpo o partícula con una magnitud de velocidad angular constante describe ángulos cada vez mayores en tiempos iguales.
- D. Cuando un cuerpo o partícula sigue una trayectoria recta recorriendo distancias iguales en tiempos iguales.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Este movimiento se produce cuando un cuerpo o partícula con una magnitud de velocidad angular constante describe ángulos iguales en tiempos iguales.>

### 122

De acuerdo con el libro de Física, ¿a qué se debe el origen del movimiento circular uniforme?

- A. A una fuerza de magnitud constante, cuya acción es perpendicular a la trayectoria del cuerpo.
- B. A una fuerza de magnitud variable, cuya acción es tangente a la trayectoria del cuerpo.
- C. A una fuerza de magnitud constante, cuya acción es paralela a la trayectoria del cuerpo.
- D. A la ausencia total de fuerzas que actúen sobre el cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<El origen de este movimiento se debe a una fuerza de magnitud constante, cuya acción es perpendicular a la trayectoria del cuerpo.>

### 123

De conformidad con el libro de Física, ¿qué produce esa fuerza en el movimiento circular uniforme?

- A. Una aceleración que afectará sólo la dirección del movimiento sin modificar la magnitud de la velocidad, es decir, la rapidez que lleva el cuerpo.
- B. Una aceleración que afectará sólo la magnitud de la velocidad sin modificar la dirección del movimiento.
- C. Una aceleración que afectará tanto la dirección del movimiento como la magnitud de la velocidad.
- D. Una desaceleración que anulará poco a poco la magnitud de la velocidad del cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Y produce una aceleración que afectará sólo la dirección del movimiento sin modificar la magnitud de la velocidad, es decir, la rapidez que lleva el cuerpo.>

### 124

En relación con el libro de Física, ¿qué ocurre con el vector velocidad en un movimiento circular uniforme?

- A. Mantiene constante su magnitud, pero no su dirección, toda vez que ésta siempre se conserva tangente a la trayectoria del cuerpo.
- B. Mantiene constante su dirección, pero no su magnitud, toda vez que ésta siempre se conserva perpendicular a la trayectoria del cuerpo.
- C. Mantiene constantes tanto su magnitud como su dirección durante todo el recorrido.
- D. No mantiene constante ni su magnitud ni su dirección durante el recorrido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Por tanto, en un movimiento circular uniforme el vector velocidad mantiene constante su magnitud, pero no su dirección, toda vez que ésta siempre se conserva tangente a la trayectoria del cuerpo.>

### 125

De acuerdo con el libro de Física, ¿qué diferencia hay entre el movimiento rectilíneo uniforme y el movimiento circular uniforme en cuanto a lo que permanece constante?

- A. En el rectilíneo uniforme la velocidad y su magnitud permanecen constantes; en el circular uniforme sólo permanece constante la rapidez, o sea, la magnitud de la velocidad lineal o tangencial.
- B. En el rectilíneo uniforme sólo permanece constante la rapidez; en el circular uniforme la velocidad y su magnitud permanecen constantes.
- C. En ambos movimientos permanecen constantes tanto la velocidad como su magnitud.
- D. En ambos movimientos sólo permanece constante la rapidez, pero no la velocidad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<En el movimiento rectilíneo uniforme un cuerpo móvil sigue una trayectoria en línea recta, recorriendo distancias iguales en cada unidad de tiempo, por lo que la velocidad y su magnitud, es decir, la rapidez, permanecen constantes. En cambio, en el movimiento circular uniforme sólo permanece constante la rapidez, o sea, la magnitud de la velocidad lineal o tangencial.>

### 126

De conformidad con el libro de Física, ¿respecto a qué es siempre tangente y respecto a qué es perpendicular la velocidad lineal o tangencial?

- A. Es siempre tangente a la circunferencia y, por tanto, perpendicular al radio de la misma.
- B. Es siempre tangente al radio y, por tanto, perpendicular a la circunferencia.
- C. Es siempre perpendicular a la circunferencia y paralela al radio de la misma.
- D. Es siempre paralela a la circunferencia y tangente al eje de rotación.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Ya que ésta cambia de dirección, misma que siempre será tangente a la circunferencia y, por tanto, perpendicular al radio de la misma.>

### 127

En relación con el libro de Física, ¿qué representa la velocidad tangencial o lineal?

- A. La velocidad que llevará un cuerpo al salir disparado en forma tangencial a la circunferencia que describe.
- B. La velocidad con que un cuerpo gira alrededor del centro de la circunferencia que describe.
- C. La velocidad con que un cuerpo se acerca al centro de la circunferencia que describe.
- D. La velocidad media entre la velocidad angular inicial y la velocidad angular final del cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<La velocidad tangencial o lineal representa la velocidad que llevará un cuerpo al salir disparado en forma tangencial a la circunferencia que describe.>

### 128

De acuerdo con el libro de Física, ¿cómo será la interpretación de gráficas para el movimiento circular uniforme?

- A. En forma idéntica a la realizada para el movimiento rectilíneo uniforme, pues ambos movimientos son muy similares.
- B. En forma opuesta a la realizada para el movimiento rectilíneo uniforme, pues ambos movimientos son contrarios.
- C. En forma idéntica a la realizada para el movimiento rectilíneo uniformemente acelerado.
- D. En forma idéntica a la realizada para el tiro parabólico oblicuo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 100
**Tema:** U4 t11 · movimiento circular
**Subtema:** física · cinemática

<Como los movimientos rectilíneo uniforme y circular uniforme son muy similares, la interpretación de gráficas para el movimiento circular uniforme (MCU) será en forma idéntica a la realizada para el movimiento rectilíneo uniforme.>

---

## Sub-lote 16 · Velocidad instantánea (p. 76) — tema 7

### 129

En relación con el libro de Física, ¿cuándo se aproxima la velocidad media a una velocidad instantánea?

- A. Cuando en el movimiento de un cuerpo los intervalos de tiempo considerados son cada vez más pequeños.
- B. Cuando en el movimiento de un cuerpo los intervalos de tiempo considerados son cada vez más grandes.
- C. Cuando el cuerpo se mueve con velocidad constante a lo largo de una línea recta.
- D. Cuando la trayectoria seguida por el cuerpo es una circunferencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 76
**Tema:** U4 t7 · velocidad instantánea
**Subtema:** física · cinemática

<La velocidad media se aproxima a una velocidad instantánea cuando en el movimiento de un cuerpo los intervalos de tiempo considerados son cada vez más pequeños.>

### 130

En relación con el libro de Física, si el intervalo de tiempo es tan pequeño que casi tiende a cero, ¿cómo será la velocidad del cuerpo?

- A. Instantánea.
- B. Media.
- C. Constante.
- D. Uniforme.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 76
**Tema:** U4 t7 · velocidad instantánea
**Subtema:** física · cinemática

<Si el intervalo de tiempo es tan pequeño que casi tiende a cero, la velocidad del cuerpo será instantánea.>

### 131

En relación con el libro de Física, matemáticamente, ¿qué es la velocidad instantánea en un punto?

- A. El límite de la velocidad media alrededor del punto cuando el intervalo de tiempo (Δt) es tan pequeño que tiende a cero.
- B. El promedio de la velocidad media alrededor del punto cuando el intervalo de tiempo (Δt) es muy grande.
- C. El producto de la velocidad media por el intervalo de tiempo (Δt) alrededor del punto.
- D. La suma de la velocidad media y el intervalo de tiempo (Δt) alrededor del punto.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 76
**Tema:** U4 t7 · velocidad instantánea
**Subtema:** física · cinemática

<Matemáticamente podemos decir que la velocidad instantánea en un punto es el límite de la velocidad media alrededor del punto cuando el intervalo de tiempo (Δt) es tan pequeño que tiende a cero (Δt → 0).>

### 132

En relación con el libro de Física, ¿cuándo son iguales la velocidad media y la velocidad instantánea?

- A. Cuando la velocidad de un móvil permanece constante.
- B. Cuando la velocidad de un móvil varía constantemente.
- C. Cuando el móvil parte del reposo.
- D. Cuando el intervalo de tiempo considerado es muy grande.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 76
**Tema:** U4 t7 · velocidad instantánea
**Subtema:** física · cinemática

<Cuando la velocidad de un móvil permanece constante, la velocidad media y la velocidad instantánea son iguales.>

### 133

En relación con el libro de Física, ¿por qué debemos calcular la velocidad instantánea de un móvil?

- A. Porque es muy común que la velocidad de un móvil varíe constantemente, y para conocer cuál es su velocidad en un momento dado.
- B. Porque es muy común que la velocidad de un móvil permanezca constante, y para conocer su velocidad media.
- C. Porque la velocidad instantánea siempre es mayor que la velocidad media.
- D. Porque la velocidad instantánea no depende del intervalo de tiempo considerado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 76
**Tema:** U4 t7 · velocidad instantánea
**Subtema:** física · cinemática

<Sin embargo, como es muy común que la velocidad de un móvil varíe constantemente, para conocer cuál es su velocidad en un momento dado, debemos calcular su velocidad instantánea.>

---

**Reactivos en este archivo:** 133
