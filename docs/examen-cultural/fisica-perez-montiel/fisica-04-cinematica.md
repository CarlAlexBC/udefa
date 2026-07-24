# Física · Unidad 4 · Cinemática

**Materia:** dos temarios piden esta unidad del mismo libro — `FIS-03-2026`
(EMO) y `FG-03-2026` (EMOS).
**Unidad del libro:** Unidad 4. Cinemática → **sólo los 7 temas** que suman los
dos temarios (2. Concepto de Partícula Material en Movimiento e Interpretación de
su Trayectoria · 4. Distancia, Desplazamiento, Velocidad y Rapidez · 5.
Movimiento Rectilíneo Uniforme (MRU) · 6. Velocidad Media · 9. Aceleración y
Movimiento Rectilíneo Uniformemente Acelerado (MRUA) · 10. Tiro Parabólico ·
11. Movimiento Circular)

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Quién lo pide es cosa del temario, y **los dos
> temarios no piden lo mismo**:
>
> | Tema de la Unidad 4 | EMO (`FIS-03-2026`) | EMOS (`FG-03-2026`) |
> |---|:---:|:---:|
> | 2 · Partícula material y trayectoria | sí | — |
> | 4 · Distancia, desplazamiento, velocidad y rapidez | sí | sí |
> | 5 · MRU | sí | — |
> | 6 · Velocidad media | sí | — |
> | 9 · Aceleración y MRUA | sí | sí |
> | 10 · Tiro parabólico | sí | — |
> | 11 · Movimiento circular | sí | — |
>
> Sólo los temas 4 y 9 los piden las dos escuelas; los otros cinco son de la EMO
> nada más. Por eso **la línea `**Tema:**` de cada reactivo es obligatoria**: es
> la clave (`U4 t5`, `U4 t9`…) con la que cada temario manda a llamar lo suyo. Sin
> ella las dos escuelas se llevarían todo el archivo. `**Referencia:**` (libro,
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

**Fuera del temario, no se tocan:** temas 1 (Importancia del estudio de la
cinemática), 3 (Sistemas de referencia inerciales y no inerciales), 7 (Velocidad
instantánea), 8 (Interpretación de gráficas), 12 (MCUA) y 13 (MAS), aunque los
temas 1 y 3 comparten la p. 68 con el tema 2.

**Pendiente:** temas 10 (Tiro parabólico, pp. 93–97) y 11 (Movimiento circular,
pp. 98–102).

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

---

**Reactivos en este archivo:** 78
