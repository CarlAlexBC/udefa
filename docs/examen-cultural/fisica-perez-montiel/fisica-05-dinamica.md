# Física · Unidad 5 · Dinámica

**Materia:** dos temarios piden esta unidad del mismo libro — `FIS-03-2026`
(EMO) y `FG-03-2026` (EMOS).
**Unidad del libro:** Unidad 5. Dinámica → **sólo los 7 temas** que suman los dos
temarios (2. Leyes de la Dinámica · 3. Gravitación Universal · 5. Estática ·
8. Energía · 10. Sustentabilidad y Contaminación · 13. Cantidad de Movimiento o
Momento Lineal · 16. Ley de la Conservación de la Cantidad de Movimiento o del
Momento Lineal · 17. Ley de la Conservación del Momento Angular)

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Quién lo pide es cosa del temario, y **los dos
> temarios no piden lo mismo**:
>
> | Tema de la Unidad 5 | EMO (`FIS-03-2026`) | EMOS (`FG-03-2026`) |
> |---|:---:|:---:|
> | 2 · Leyes de la dinámica | sí | sí |
> | 3 · Gravitación universal | sí | sí |
> | 5 · Estática | sí | — |
> | 8 · Energía | sí | sí |
> | 10 · Sustentabilidad y contaminación | — | sí |
> | 13 · Cantidad de movimiento o momento lineal | sí | — |
> | 16 · Ley de la conservación de la cantidad de movimiento | — | sí |
> | 17 · Ley de la conservación del momento angular | sí | — |
>
> Sólo los temas 2, 3 y 8 los piden las dos escuelas. Los temas 5, 13 y 17 son de
> la EMO nada más; los temas 10 y 16, de la EMOS nada más. Por eso **la línea
> `**Tema:**` de cada reactivo es obligatoria**: es la clave (`U5 t3`, `U5 t16`…)
> con la que cada temario manda a llamar lo suyo. Sin ella las dos escuelas se
> llevarían todo el archivo. `**Referencia:**` (libro, edición, página) y
> `**Subtema:**` completan la llave.
>
> Ojo con los temas 16 y 17, que se parecen de nombre y **no son el mismo**: el 16
> es la conservación de la **cantidad de movimiento** (momento lineal) y lo pide
> sólo la EMOS; el 17 es la conservación del **momento angular** y lo pide sólo la
> EMO.

## Libro

Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria,
**6ª edición 2018** (1ª reimpresión, México 2020). ISBN 978-607-744-721-4
(sexta edición).

**OJO — el libro es un ESCANEO sin capa de texto.** `extraer.py` devuelve 0
caracteres; no sirve para este libro.

**OJO — el desfase NO es constante dentro de esta unidad.** Se leyó de la hoja en
cada tramo, nunca se calculó:

- **Tramo del tema 2 (pp. 140–150): desfase = 12.** La hoja 152 muestra impreso
  "140" y contiene el tema 2 (152 − 140 = 12).
- **Tramo del tema 3 (pp. 151–157): desfase = 12.** La hoja 163 muestra impreso
  "151" en su esquina y contiene el arranque de GRAVITACIÓN UNIVERSAL
  (163 − 151 = 12).
- **Tramo del tema 8 (pp. 188–196): desfase = 13.** La hoja 201 muestra impreso
  "188" (201 − 188 = 13) y la hoja 202 muestra "189", donde arranca ENERGÍA.

Es decir, entre la p. 157 y la p. 188 el PDF gana una hoja. Si se hubiera
arrastrado el desfase 12, la Energía se habría buscado una hoja antes y las
referencias habrían salido todas corridas. **Releer el desfase al cambiar de
tema, no sólo al cambiar de unidad.**

## Método

`render.py <pdf> <hoja_desde> <hoja_hasta> 150` para renderizar la hoja a PNG y
**leerla con los ojos** (NO `extraer.py`). Para cifras o detalles finos,
`crop.py` a 500 dpi — así se verificó el radio terrestre (6 371.45 km) del
reactivo 2. La página de cada referencia se **lee** de la esquina de la hoja.

## Cobertura actual

- **Sub-lote 1 · Newton y la primera ley o ley de la inercia (p. 140–141)** — tema 2
- **Sub-lote 2 · Segunda ley de Newton (p. 141–142)** — tema 2
- **Sub-lote 3 · Tercera ley de Newton (p. 143)** — tema 2
- **Sub-lote 4 · Fuerzas centrípeta y centrífuga (p. 149–150)** — tema 2
- **Sub-lote 5 · Tipos de energía (p. 189–191)** — tema 8
- **Sub-lote 6 · Definición de energía y energía potencial gravitacional (p. 191–192)** — tema 8
- **Sub-lote 7 · Energía potencial elástica y energía cinética (p. 193)** — tema 8
- **Sub-lote 8 · Ley de la conservación de la energía y su degradación (p. 195–196)** — tema 8
- **Sub-lote 9 · Cantidad de movimiento o momento lineal (p. 206)** — tema 13
- **Sub-lote 10 · Momento de una fuerza y magnitudes angulares (p. 212–213)** — tema 17
- **Sub-lote 11 · Inercia rotacional y momento angular (p. 213, 215)** — tema 17
- **Sub-lote 12 · Ley de la conservación del momento angular, ECR y giroscopio (p. 215–216)** — tema 17
- **Sub-lote 13 · Antecedentes históricos de la gravitación universal (pp. 151–153)** — tema 3
- **Sub-lote 14 · Las tres leyes de Kepler (p. 152)** — tema 3
- **Sub-lote 15 · Isaac Newton y la ley de la gravitación universal (p. 153)** — tema 3
- **Sub-lote 16 · Peso, fuerza de gravedad y plano inclinado (p. 154)** — tema 3
- **Sub-lote 17 · Campo gravitacional y su intensidad (p. 155)** — tema 3
- **Sub-lote 18 · El cosmos, el Big Bang y el Sistema Solar (pp. 155–156)** — tema 3
- **Sub-lote 19 · El Sol, los planetas y los cometas (p. 156)** — tema 3

**Fuera del temario, no se tocan** aunque caigan en las mismas páginas: los temas
14 (Relación entre el impulso y la cantidad de movimiento) y 15 (Choque elástico
e inelástico), que comparten la p. 206 con el tema 13; el tema 4 (Satélites
naturales y artificiales, pp. 158–164), que va justo después del tema 3; y los
temas 1, 6, 7, 9, 11, 12 y 18.

**Páginas saltadas a propósito** (teoría sobre práctica — no son olvidos):

- pp. 148–149 · problemas resueltos de elevadores y montacargas.
- p. 188 · problemas resueltos de trabajo mecánico.
- p. 151 · la mitad superior, que es "Resolución de un problema de fuerza
  centrípeta" y sus ejercicios propuestos.
- p. 157 · completa: "Resolución de problemas de la ley de gravitación universal".
- Los "Ejercicios propuestos" de toda la unidad.

**Pendiente:** temas 5 (Estática, pp. 165–176), 10 (Sustentabilidad y
contaminación, pp. 198–199) y 16 (Ley de la conservación de la cantidad de
movimiento, pp. 207–211).

## Cómo se escriben estos reactivos

Recuerdo literal: la opción correcta y la justificación son **cita textual** del
libro, sin parafrasear. Cuatro opciones del mismo tipo y magnitud; los mejores
distractores salen del mismo párrafo. La correcta va **siempre en A** (el
importador baraja). Numeración corrida sin reiniciar. Sólo teoría: se saltan
todos los "Ejercicios", "Problemas" y "Resolución de problemas" del libro.

---

## Sub-lote 1 · Newton y la primera ley o ley de la inercia (p. 140–141)

### 1

De acuerdo con el libro de Física, ¿qué expuso Newton en su *Philosophiae Naturalis Principia Mathematica*, publicado en 1687?

- A. Tres leyes conocidas como Leyes de Newton o Leyes de la Dinámica, así como la Ley de la Gravitación universal.
- B. Únicamente la Ley de la Gravitación universal.
- C. Dos leyes de la dinámica y el principio de la inercia de Galileo.
- D. Las tres leyes de Kepler sobre el movimiento de los planetas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<En 1687 publicó su Philosophiae Naturalis Principia Mathematica, en este libro Newton expuso tres leyes conocidas como Leyes de Newton o Leyes de la Dinámica, así como la Ley de la Gravitación universal.>

### 2

De acuerdo con el libro de Física, en la unidad 5 sobre las leyes de la dinámica, ¿qué había determinado Newton con precisión en 1679?

- A. El radio terrestre: 6 371.45 km.
- B. La distancia de la Tierra a la Luna: 384 400 km.
- C. La aceleración de la gravedad: 9.8 m/s².
- D. La velocidad de la luz: 300 000 km/s.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<En 1679 ya había determinado con precisión el radio terrestre: 6 371.45 km.>

### 3

De acuerdo con el libro de Física, ¿qué señalaba erróneamente el filósofo griego Aristóteles?

- A. Que un cuerpo sólo se puede mover de manera constante si existe una fuerza actuando sobre él.
- B. Que un cuerpo en movimiento continuará moviéndose indefinidamente sin fuerza alguna.
- C. Que los cuerpos se detienen porque existe una fuerza de fricción que se opone a su movimiento.
- D. Que a toda acción corresponde una reacción de la misma magnitud.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<El filósofo griego Aristóteles (384-322 a.C.), quien de acuerdo con lo que podía observar señalaba que un cuerpo sólo se puede mover de manera constante si existe una fuerza actuando sobre él.>

### 4

De acuerdo con el libro de Física, ¿a qué conclusión llegó Galileo Galilei, con base en sus experimentos, sobre por qué la mesa se detiene?

- A. Que la mesa se detiene porque existe una fuerza de fricción entre la mesa y el piso que se opone a su movimiento.
- B. Que la mesa se detiene porque se deja de aplicar sobre ella una fuerza.
- C. Que la mesa se detiene porque su masa inercial aumenta con el movimiento.
- D. Que la mesa se detiene porque actúa sobre ella una fuerza centrífuga.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Galileo Galilei (1564-1642), con base en sus experimentos, concluyó lo que ahora sabemos, y es que la mesa se detiene porque existe una fuerza de fricción entre la mesa y el piso que se opone a su movimiento.>

### 5

De acuerdo con el libro de Física, ¿qué nombre recibe la resistencia del aire?

- A. Fuerza viscosa.
- B. Fuerza de fricción.
- C. Fuerza centrípeta.
- D. Fuerza inercial.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Sin la resistencia del aire (que recibe el nombre de fuerza viscosa).>

### 6

De acuerdo con el libro de Física, ¿en qué términos enunció Galileo su principio de la inercia?

- A. En ausencia de la acción de fuerzas, un cuerpo en reposo continuaría en reposo y uno en movimiento se moverá en línea recta a velocidad constante.
- B. Todo cuerpo se mantiene en su estado de reposo o de movimiento rectilíneo uniforme, si la resultante de las fuerzas que actúan sobre él es cero.
- C. A toda acción corresponde una reacción de la misma magnitud o intensidad.
- D. Toda fuerza resultante diferente de cero al ser aplicada a un cuerpo le produce una aceleración.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Galileo enunció su principio de la inercia en los siguientes términos: En ausencia de la acción de fuerzas, un cuerpo en reposo continuaría en reposo y uno en movimiento se moverá en línea recta a velocidad constante.>

> El principio de Galileo y la Primera Ley de Newton dicen lo mismo con distintas palabras; el libro los enuncia por separado y con redacción diferente.

### 7

De acuerdo con el libro de Física, ¿en qué términos enunció Newton su Primera Ley de la Mecánica o Ley de la Inercia?

- A. Todo cuerpo se mantiene en su estado de reposo o de movimiento rectilíneo uniforme, si la resultante de las fuerzas que actúan sobre él es cero.
- B. En ausencia de la acción de fuerzas, un cuerpo en reposo continuaría en reposo y uno en movimiento se moverá en línea recta a velocidad constante.
- C. A toda acción corresponde una reacción de la misma magnitud o intensidad, en la misma dirección pero con diferente sentido.
- D. La magnitud de la aceleración de un cuerpo es directamente proporcional a la magnitud de la fuerza aplicada.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 140
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Isaac Newton aprovechó los estudios previos realizados por Galileo y enunció su Primera Ley de la Mecánica o Ley de la Inercia en los siguientes términos: Todo cuerpo se mantiene en su estado de reposo o de movimiento rectilíneo uniforme, si la resultante de las fuerzas que actúan sobre él es cero.>

### 8

De acuerdo con el libro de Física, ¿qué nombre recibe la velocidad constante con la que desciende un paracaidista cuando la resultante de las fuerzas que actúan sobre él es cero?

- A. Velocidad terminal.
- B. Velocidad tangencial.
- C. Velocidad angular.
- D. Velocidad de escape.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 141
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Como la resultante de las fuerzas que actúan sobre el paracaidista es cero, descenderá con una velocidad constante que recibe el nombre de velocidad terminal.>

### 9

De acuerdo con el libro de Física, ¿cuál es aproximadamente la magnitud de la velocidad terminal de un paracaidista antes de abrir su paracaídas?

- A. 200 km/h
- B. 100 km/h
- C. 300 km/h
- D. 50 km/h

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 141
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Descenderá con una velocidad constante que recibe el nombre de velocidad terminal, y cuya magnitud es aproximadamente de 200 km/h.>

### 10

De acuerdo con el libro de Física, ¿cuándo alcanza su velocidad terminal todo cuerpo al caer?

- A. Cuando su peso tenga la misma magnitud que la fuerza debida a la resistencia del aire.
- B. Cuando su peso supere la magnitud de la fuerza debida a la resistencia del aire.
- C. Cuando la fuerza de fricción con el aire desaparezca por completo.
- D. Cuando su masa inercial se iguale a la magnitud de su peso.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 141
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<En conclusión: Todo cuerpo al caer, como gotas de lluvia, granizo, paracaidistas, etc., alcanzará su velocidad terminal cuando su peso tenga la misma magnitud que la fuerza debida a la resistencia del aire.>

### 11

De acuerdo con el libro de Física, ¿qué es un sistema de referencia inercial?

- A. Aquel en el cual no hay aceleración, es decir, se considera que está en reposo, o bien, se mueve a velocidad constante.
- B. Aquel en el cual la aceleración aumenta de manera constante.
- C. Aquel que gira con una rapidez constante alrededor de un centro.
- D. Aquel en el que la resultante de las fuerzas es diferente de cero.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 141
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La primera ley es totalmente válida cuando se trata de un sistema de referencia inercial. Dicho sistema es aquel en el cual no hay aceleración, es decir, se considera que está en reposo, o bien, se mueve a velocidad constante.>

## Sub-lote 2 · Segunda ley de Newton (p. 141–142)

### 12

De acuerdo con el libro de Física, ¿qué nombre recibe un cambio en la velocidad de un cuerpo efectuado en la unidad de tiempo?

- A. Aceleración.
- B. Inercia.
- C. Rapidez.
- D. Velocidad terminal.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 141
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Un cambio en la velocidad de un cuerpo efectuado en la unidad de tiempo, recibe el nombre de aceleración.>

### 13

De acuerdo con el libro de Física, ¿cómo se enuncia la Segunda Ley de Newton?

- A. Toda fuerza resultante diferente de cero al ser aplicada a un cuerpo le produce una aceleración en la misma dirección en que actúa; la magnitud de dicha aceleración es directamente proporcional a la magnitud de la fuerza aplicada e inversamente proporcional a la masa del cuerpo.
- B. Todo cuerpo se mantiene en su estado de reposo o de movimiento rectilíneo uniforme, si la resultante de las fuerzas que actúan sobre él es cero.
- C. A toda acción corresponde una reacción de la misma magnitud o intensidad, en la misma dirección pero con diferente sentido.
- D. En ausencia de la acción de fuerzas, un cuerpo en reposo continuaría en reposo y uno en movimiento se moverá en línea recta.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Se llega al enunciado de la Segunda Ley de Newton: toda fuerza resultante diferente de cero al ser aplicada a un cuerpo le produce una aceleración en la misma dirección en que actúa. La magnitud de dicha aceleración es directamente proporcional a la magnitud de la fuerza aplicada e inversamente proporcional a la masa del cuerpo.>

### 14

De acuerdo con el libro de Física, ¿qué nombre recibe la relación entre la magnitud de la fuerza y la magnitud de la aceleración, que es constante para cada cuerpo en particular?

- A. Masa inercial, porque es una medida cuantitativa de la inercia.
- B. Peso del cuerpo, porque es la fuerza con que la Tierra lo atrae.
- C. Fuerza centrípeta, porque apunta siempre hacia el centro.
- D. Velocidad terminal, porque su magnitud permanece constante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La relación F/a es una magnitud constante para cada cuerpo en particular y recibe el nombre de masa inercial, porque es una medida cuantitativa de la inercia.>

### 15

De acuerdo con el libro de Física, ¿cuál es la unidad fundamental de masa en el Sistema Internacional y cuál en el Sistema CGS?

- A. En el SI, el kilogramo (kg); en el CGS, el gramo (g).
- B. En el SI, el gramo (g); en el CGS, el kilogramo (kg).
- C. En el SI, el newton (N); en el CGS, la dina.
- D. En el SI, el kilogramo fuerza (kgf); en el CGS, el gramo (g).

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La masa (m) de un cuerpo representa una medida de la inercia de dicho cuerpo y su unidad fundamental en el Sistema Internacional es el kilogramo (kg). En el Sistema CGS la unidad de masa es el gramo (g): 1 kg = 1 000 g.>

### 16

De acuerdo con el libro de Física, cuando la fuerza aplicada es constante, ¿cómo es la magnitud de la aceleración de un cuerpo respecto a su masa?

- A. Es inversamente proporcional a su masa.
- B. Es directamente proporcional a su masa.
- C. Es independiente de su masa.
- D. Es igual al cuadrado de su masa.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Concluimos que cuando la fuerza aplicada es constante, la magnitud de la aceleración de un cuerpo es inversamente proporcional a su masa.>

### 17

De acuerdo con el libro de Física, ¿cómo se define el newton como unidad de fuerza en el Sistema Internacional?

- A. Se aplica una fuerza cuya magnitud es de un newton cuando a un cuerpo cuya masa es de un kilogramo se le imprime una aceleración cuya magnitud es de un metro por segundo cuadrado.
- B. Se aplica una fuerza de un newton cuando a un cuerpo cuya masa es de un gramo se le imprime una aceleración de un centímetro por segundo cuadrado.
- C. Se aplica una fuerza de un newton cuando a un cuerpo cuya masa es de un kilogramo se le imprime una velocidad de un metro por segundo.
- D. Se aplica una fuerza de un newton cuando un cuerpo cuya masa es de un kilogramo cae con la aceleración de la gravedad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Por definición, se aplica una fuerza cuya magnitud es de un newton cuando a un cuerpo cuya masa es de un kilogramo se le imprime una aceleración cuya magnitud es de un metro por segundo cuadrado.>

### 18

De acuerdo con el libro de Física, ¿cuál es la equivalencia entre el kilogramo fuerza y el newton?

- A. 1 kgf = 9.8 N
- B. 1 kgf = 1 N
- C. 1 kgf = 1 000 N
- D. 1 kgf = 6.8 N

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La equivalencia entre el kilogramo fuerza, está dada por: 1 kgf = 9.8 N.>

### 19

De acuerdo con el libro de Física, ¿qué tipo de magnitud es el peso de un cuerpo y hacia dónde está dirigido su sentido?

- A. Es una magnitud vectorial, cuya dirección es vertical y su sentido está dirigido siempre hacia el centro de la Tierra.
- B. Es una magnitud escalar que sólo indica la cantidad de materia del cuerpo.
- C. Es una magnitud vectorial cuya dirección es horizontal y su sentido apunta hacia el centro de giro.
- D. Es una magnitud escalar cuya magnitud no depende de la fuerza de gravedad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 142
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Recuerda que el peso de un cuerpo representa una fuerza y, por tanto, es una magnitud vectorial, cuya dirección es vertical y su sentido está dirigido siempre hacia el centro de la Tierra.>

## Sub-lote 3 · Tercera ley de Newton (p. 143)

### 20

De acuerdo con el libro de Física, ¿con qué otro nombre se conoce la Tercera ley de Newton o ley de la acción y la reacción?

- A. La ley de las interacciones.
- B. La ley de la inercia.
- C. La ley de la proporcionalidad entre fuerzas y aceleraciones.
- D. La ley de la gravitación universal.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 143
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Para comprender el significado de esta ley, que es conocida también como la ley de las interacciones.>

### 21

De acuerdo con el libro de Física, ¿cómo se enuncia la Tercera Ley o Ley de la acción y la reacción?

- A. A toda acción corresponde una reacción de la misma magnitud o intensidad, en la misma dirección pero con diferente sentido.
- B. A toda acción corresponde una reacción de menor magnitud, en la misma dirección y en el mismo sentido.
- C. Todo cuerpo se mantiene en su estado de reposo o de movimiento rectilíneo uniforme.
- D. Toda fuerza resultante diferente de cero produce una aceleración proporcional a ella.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 143
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La Tercera Ley o Ley de la acción y la reacción, se puede enunciar de la siguiente manera: A toda acción corresponde una reacción de la misma magnitud o intensidad, en la misma dirección pero con diferente sentido.>

### 22

De acuerdo con el libro de Física, ¿por qué las fuerzas de acción y reacción no producen equilibrio?

- A. Porque nunca actúan sobre el mismo cuerpo, sino que son una pareja de fuerzas que obran sobre distintos cuerpos.
- B. Porque tienen distinta magnitud o intensidad entre sí.
- C. Porque actúan en direcciones perpendiculares entre sí.
- D. Porque la reacción siempre es de menor magnitud que la acción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 143
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La fuerza que produce la acción actúa sobre un cuerpo y la fuerza de reacción actúa sobre otro. Por tanto, nunca actúan sobre el mismo cuerpo, sino que son una pareja de fuerzas que obran sobre distintos cuerpos, razón por la cual no producen equilibrio.>

## Sub-lote 4 · Fuerzas centrípeta y centrífuga (p. 149–150)

### 23

De acuerdo con el libro de Física, ¿qué nombre recibe toda fuerza que provoque que un cuerpo físico siga una trayectoria circular?

- A. Fuerza centrípeta, que se dirige siempre hacia el centro del círculo.
- B. Fuerza centrífuga, que se aleja siempre del centro de giro.
- C. Fuerza viscosa, que se opone al movimiento del cuerpo.
- D. Fuerza de fricción, que actúa en forma tangencial a la trayectoria.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 149
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Toda fuerza que provoque que un cuerpo físico siga una trayectoria circular recibe el nombre de fuerza centrípeta, ésta se dirige siempre hacia el centro del círculo.>

### 24

De acuerdo con el libro de Física, ¿qué significa la palabra centrípeta?

- A. Que la fuerza "apunta hacia el centro" o "busca el centro de la circunferencia".
- B. Que la fuerza "escapa" o que "se aleja del centro de giro".
- C. Que la fuerza actúa en forma tangencial a la trayectoria circular.
- D. Que la fuerza permanece constante en magnitud y en dirección.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 149
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Centrípeta significa que la fuerza "apunta hacia el centro" o "busca el centro de la circunferencia".>

### 25

De acuerdo con el libro de Física, ¿la fuerza centrípeta corresponde a un nuevo tipo de fuerza?

- A. No, es sólo el nombre que se le da a toda fuerza que esté dirigida en forma perpendicular a la trayectoria que sigue un cuerpo físico en movimiento y que ocasione un movimiento circular.
- B. Sí, es un tipo de fuerza distinto de todos los demás.
- C. Sí, es una fuerza que sólo existe en el movimiento de los planetas.
- D. No, es únicamente otro nombre que se le da a la fuerza de fricción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 149
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La fuerza centrípeta no corresponde a un nuevo tipo de fuerza, es sólo el nombre que se le da a toda fuerza que esté dirigida en ángulos rectos, es decir, en forma perpendicular a la trayectoria que sigue un cuerpo físico en movimiento y que ocasione un movimiento circular.>

### 26

De acuerdo con el libro de Física, ¿qué se dice de la idea de que un cuerpo que describe una trayectoria circular experimenta una fuerza hacia el exterior llamada fuerza centrífuga?

- A. Que es una idea equivocada.
- B. Que es correcta y está demostrada experimentalmente.
- C. Que sólo es válida cuando la trayectoria es tangencial.
- D. Que es correcta únicamente para cuerpos de gran masa.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 150
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Existe una idea equivocada al considerar que cuando un cuerpo físico describe una trayectoria circular experimenta una fuerza hacia el exterior que recibe el nombre de fuerza centrífuga, cuyo significado es que "escapa" o que "se aleja del centro de giro".>

### 27

De acuerdo con el libro de Física, si se rompe la cuerda que hace girar una piedra, ¿qué sucede realmente con la piedra?

- A. Se desprende en una trayectoria tangencial, en la misma dirección y sentido que lleva la velocidad lineal o tangencial en el preciso momento en el que ya no es retenida.
- B. Sale despedida hacia afuera, alejándose radialmente del centro de giro.
- C. Cae verticalmente hacia el suelo desde el punto en que se rompió la cuerda.
- D. Continúa describiendo la misma trayectoria circular por inercia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 150
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<La piedra se desprende en una trayectoria tangencial en la misma dirección y sentido que lleva la velocidad lineal o tangencial en el preciso momento en el que ya no es retenida, debido a que ha dejado de actuar hacia adentro la fuerza centrípeta.>

> Éste es el punto que el libro insiste en corregir: la piedra no sale "hacia afuera", sale tangencial.

### 28

De acuerdo con el libro de Física, ¿por qué se siente en la mano una fuerza que parece tirar hacia afuera al hacer girar una piedra atada a una cuerda?

- A. Porque, de acuerdo con la Tercera Ley de Newton, la piedra ejerce sobre la mano una fuerza de la misma magnitud pero en sentido contrario.
- B. Porque efectivamente existe una fuerza centrífuga que tira de la piedra hacia afuera.
- C. Porque la fuerza centrípeta cambia de sentido conforme gira la piedra.
- D. Porque la velocidad tangencial de la piedra se transmite por la cuerda hasta la mano.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 150
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Debido a ello, de acuerdo con la Tercera Ley de Newton, la piedra ejerce sobre la mano una fuerza de la misma magnitud pero en sentido contrario, y es precisamente la fuerza que se siente en la mano.>

### 29

De acuerdo con el libro de Física, cuando un autobús toma una curva para dar vuelta a la derecha y los pasajeros son lanzados a la izquierda, ¿cuál es la explicación correcta?

- A. No es porque se manifieste una fuerza centrífuga, sino porque no existe una fuerza centrípeta que los mantenga en una trayectoria circular.
- B. Es porque se manifiesta una fuerza centrífuga que los lanza hacia la izquierda.
- C. Es porque la fuerza de fricción del piso los empuja hacia la izquierda.
- D. Es porque el peso de los pasajeros cambia de dirección al tomar la curva.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 150
**Tema:** U5 t2 · leyes de la dinámica
**Subtema:** física · dinámica

<Los pasajeros son lanzados a la izquierda, pero no porque se manifieste una fuerza centrífuga, sino porque no existe una fuerza centrípeta que los mantenga en una trayectoria circular. Por tanto, suponer que existe una fuerza centrífuga que lanza a los pasajeros hacia la izquierda es una idea equivocada.>

## Sub-lote 5 · Tipos de energía (p. 189–191)

### 30

De acuerdo con el libro de Física, ¿cómo se produce la energía calorífica?

- A. Por la combustión de carbón, madera, petróleo, gas natural, gasolina y otros combustibles.
- B. Por medio de generadores eléctricos, pilas secas, acumuladores y pilas solares.
- C. Cuando las sustancias reaccionan entre sí alterando su constitución íntima.
- D. Por el movimiento del aire aprovechado en los molinos de viento.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 189
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía calorífica. Se produce por la combustión de carbón, madera, petróleo, gas natural, gasolina y otros combustibles.>

### 31

De acuerdo con el libro de Física, ¿cómo se obtiene principalmente la energía eléctrica?

- A. Por medio de generadores eléctricos, pilas secas, acumuladores y pilas solares.
- B. Por la combustión de carbón, madera, petróleo y gas natural.
- C. Aprovechando el movimiento generado por las mareas.
- D. A partir de un proceso electrolítico que divide la molécula de agua.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 189
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía eléctrica. Es la que se obtiene principalmente por medio de generadores eléctricos, pilas secas, acumuladores y pilas solares.>

### 32

De acuerdo con el libro de Física, ¿para qué se utiliza la energía eléctrica?

- A. Para producir una corriente eléctrica, es decir, un movimiento o flujo de electrones a través de un material conductor.
- B. Para producir vapor útil que mueve las turbinas generadoras de electricidad.
- C. Para fabricar biocombustibles a partir de materia orgánica.
- D. Para dividir la molécula de agua en hidrógeno y oxígeno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 189
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Se utiliza para producir una corriente eléctrica, es decir, un movimiento o flujo de electrones a través de un material conductor.>

### 33

De acuerdo con el libro de Física, ¿cuándo se produce la energía química?

- A. Cuando las sustancias reaccionan entre sí alterando su constitución íntima, como es el caso de la energía obtenida en los explosivos o en las pilas eléctricas.
- B. Cuando la corriente de agua mueve un molino o la caída de agua mueve una turbina.
- C. Cuando se produce una reacción de fusión entre dos núcleos ligeros.
- D. Cuando un resorte se comprime o se estira por la acción de una fuerza.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 189
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía química. Se produce cuando las sustancias reaccionan entre sí alterando su constitución íntima, como es el caso de la energía obtenida en los explosivos o en las pilas eléctricas.>

### 34

De acuerdo con el libro de Física, ¿cuándo se aprovecha la energía hidráulica?

- A. Cuando la corriente de agua mueve un molino o la caída de agua de una presa mueve una turbina con el propósito de producir energía eléctrica.
- B. Cuando el movimiento generado por las mareas mueve turbinas y éstas un alternador.
- C. Cuando los chorros de agua caliente del subsuelo producen vapor útil.
- D. Cuando el movimiento del aire mueve aerogeneradores de alta potencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 190
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía hidráulica. Se aprovecha cuando la corriente de agua mueve un molino o la caída de agua de una presa mueve una turbina con el propósito de producir energía eléctrica.>

> Se confunden tres: hidráulica (corriente o caída de agua), mareomotriz (mareas) y geotérmica (agua caliente del subsuelo).

### 35

De acuerdo con el libro de Física, ¿qué es la energía eólica?

- A. Es la producida por el movimiento del aire y se aprovecha en los molinos de viento o en los aerogeneradores de alta potencia para producir electricidad.
- B. Es la producida por la caída de agua de una presa sobre una turbina.
- C. Es la que se encuentra en el subsuelo terrestre en forma de géiseres.
- D. Es la que se obtiene aprovechando el movimiento generado por las mareas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 190
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía eólica. Es la producida por el movimiento del aire y se aprovecha en los molinos de viento o en los aerogeneradores de alta potencia para producir electricidad.>

### 36

De acuerdo con el libro de Física, ¿qué es la energía radiante?

- A. Es la energía producida por ondas electromagnéticas que se caracterizan por su propagación en el vacío a una velocidad cuya magnitud es de aproximadamente 300 000 km/s.
- B. Es la energía producida por la combustión de carbón, madera y petróleo.
- C. Es la energía que mantiene unidas a las partículas en el núcleo de los átomos.
- D. Es la energía que se encuentra en el subsuelo terrestre.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 190
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía radiante. Es la energía producida por ondas electromagnéticas que se caracterizan por su propagación en el vacío a una velocidad cuya magnitud es de aproximadamente 300 000 km/s.>

### 37

De acuerdo con el libro de Física, ¿cuáles son ejemplos de energía radiante?

- A. Las de radio, los rayos gamma, rayos X, ultravioleta, infrarrojos o luminosos.
- B. Los explosivos, las pilas eléctricas y los acumuladores.
- C. Los géiseres, los chorros de agua caliente y el vapor del subsuelo.
- D. El estiércol, las grasas, la leña, el maíz y la caña de azúcar.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 190
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Tal es el caso de las de radio, los rayos gamma, rayos X, ultravioleta, infrarrojos o luminosos.>

### 38

De acuerdo con el libro de Física, ¿dónde se encuentra la energía geotérmica?

- A. En el subsuelo terrestre; produce chorros de agua caliente de manera constante y géiseres que son surtidores intermitentes de agua caliente del subsuelo.
- B. En el movimiento del aire que mueve los aerogeneradores de alta potencia.
- C. En el movimiento generado por las mareas de los océanos.
- D. En el núcleo de los átomos de los elementos de peso atómico elevado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 190
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía geotérmica. Se encuentra en el subsuelo terrestre; produce chorros de agua caliente de manera constante y géiseres que son surtidores intermitentes de agua caliente del subsuelo.>

### 39

De acuerdo con el libro de Física, ¿cómo se obtiene la energía del hidrógeno?

- A. A partir de un proceso denominado electrolítico, por medio del cual se divide la molécula de agua en hidrógeno y oxígeno.
- B. A partir de la combustión de la leña, el maíz o la caña de azúcar.
- C. A partir de la desintegración del núcleo de un elemento de peso atómico elevado.
- D. A partir del movimiento de las turbinas de una presa hidroeléctrica.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía del hidrógeno. Se obtiene a partir de un proceso denominado electrolítico, por medio del cual se divide la molécula de agua en hidrógeno y oxígeno.>

### 40

De acuerdo con el libro de Física, ¿qué nombre recibe el alcohol combinado con gasolina?

- A. Gasohol.
- B. Biomasa.
- C. Biodiésel.
- D. Gasógeno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<El alcohol combinado con gasolina recibe el nombre de gasohol, que al entrar en combustión mueve los pistones de los motores automotrices.>

### 41

De acuerdo con el libro de Física, ¿cuáles son las tres fuentes principales de la biomasa?

- A. Los desechos animales, los residuos vegetales y los cultivos específicos.
- B. El carbón, el petróleo y el gas natural.
- C. Los géiseres, las mareas y el viento.
- D. El hidrógeno, el oxígeno y el uranio.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Existen tres fuentes principales de la biomasa: los desechos animales, los residuos vegetales y los cultivos específicos.>

### 42

De acuerdo con el libro de Física, ¿por qué está originada la energía nuclear?

- A. Por la energía que mantiene unidas a las partículas en el núcleo de los átomos.
- B. Por la combustión de carbón, madera, petróleo y gas natural.
- C. Por las ondas electromagnéticas que se propagan en el vacío.
- D. Por la reacción entre sustancias que alteran su constitución íntima.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía nuclear. Es la originada por la energía que mantiene unidas a las partículas en el núcleo de los átomos.>

### 43

De acuerdo con el libro de Física, ¿qué caracteriza a una reacción de fusión?

- A. La unión de dos núcleos ligeros para formar uno mayor.
- B. La desintegración del núcleo de un elemento de peso atómico elevado.
- C. La separación de la molécula de agua en hidrógeno y oxígeno.
- D. La separación de las cargas eléctricas positivas y negativas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Cuando se produce una reacción de fusión, caracterizada por la unión de dos núcleos ligeros para formar uno mayor.>

### 44

De acuerdo con el libro de Física, ¿qué ocurre en una reacción de fisión?

- A. Se desintegra el núcleo de un elemento de peso atómico elevado, como es el caso del uranio, liberándose gran cantidad de energía.
- B. Se unen dos núcleos ligeros para formar uno mayor.
- C. Se divide la molécula de agua en hidrógeno y oxígeno.
- D. Se comprime un cristal hasta generar una diferencia de potencial.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Cuando se produce una reacción de fisión al desintegrarse el núcleo de un elemento de peso atómico elevado, como es el caso del uranio, liberándose gran cantidad de energía que se utiliza para calentar agua.>

> Se confunden: la fusión **une** dos núcleos ligeros; la fisión **desintegra** un núcleo pesado, como el del uranio.

### 45

De acuerdo con el libro de Física, ¿qué es la energía mecánica y en qué se divide?

- A. Es la que tienen los cuerpos cuando por su posición o su velocidad son capaces de interaccionar con el sistema del cual forman parte para realizar un trabajo; se divide en energía cinética y potencial.
- B. Es la producida por ondas electromagnéticas; se divide en radiante y calorífica.
- C. Es la que mantiene unidas a las partículas del núcleo; se divide en fusión y fisión.
- D. Es la que se obtiene de la materia orgánica; se divide en biomasa y biocombustible.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Energía mecánica. Es la que tienen los cuerpos cuando por su posición o su velocidad son capaces de interaccionar con el sistema del cual forman parte para realizar un trabajo. Se divide en energía cinética y potencial.>

## Sub-lote 6 · Definición de energía y energía potencial gravitacional (p. 191–192)

### 46

De acuerdo con el libro de Física, ¿cómo se define la energía?

- A. Es una propiedad que caracteriza la interacción de las componentes de un sistema físico que tienen la capacidad de realizar un trabajo.
- B. Es la capacidad de un cuerpo para permanecer en reposo o en movimiento rectilíneo uniforme.
- C. Es el producto de la masa de un cuerpo por la magnitud de su aceleración.
- D. Es la propiedad de los cuerpos de oponerse a cambios en su estado de movimiento.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<La energía es una propiedad que caracteriza la interacción de las componentes de un sistema físico que tienen la capacidad de realizar un trabajo.>

### 47

De acuerdo con la conclusión del libro de Física, ¿cuándo tiene energía un cuerpo?

- A. Si es capaz de interaccionar con el sistema del cual forma parte para realizar un trabajo.
- B. Si permanece en reposo respecto a un sistema de referencia inercial.
- C. Si su masa inercial es mayor que la magnitud de su peso.
- D. Si la resultante de las fuerzas que actúan sobre él es igual a cero.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<En conclusión: un cuerpo tiene energía si es capaz de interaccionar con el sistema del cual forma parte para realizar un trabajo.>

### 48

De acuerdo con el libro de Física, ¿cuál es la unidad de energía en el Sistema Internacional?

- A. El joule (J).
- B. El newton (N).
- C. El watt (W).
- D. El kilogramo fuerza (kgf).

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<La unidad de energía en el Sistema Internacional es el joule (J).>

### 49

De acuerdo con el libro de Física, ¿por qué la energía potencial gravitacional se llama así?

- A. Pues su origen se debe a la atracción gravitacional ejercida por la Tierra sobre el cuerpo.
- B. Pues su origen se debe al estado de compresión o estiramiento de un cuerpo elástico.
- C. Pues su origen se debe a la velocidad con que se desplaza el cuerpo.
- D. Pues su origen se debe a la fricción entre el cuerpo y la superficie.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 191
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Este trabajo se convierte en energía potencial gravitacional, llamada así pues su origen se debe a la atracción gravitacional ejercida por la Tierra sobre el cuerpo.>

### 50

De acuerdo con el libro de Física, ¿de qué depende la energía potencial gravitacional de un cuerpo localizado a cierta altura?

- A. Del nivel tomado como referencia.
- B. Únicamente de la masa del cuerpo.
- C. De la velocidad que lleva el cuerpo al descender.
- D. De la distribución de la masa respecto a su eje de rotación.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 192
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<La energía potencial gravitacional de un cuerpo localizado a cierta altura depende del nivel tomado como referencia.>

### 51

De acuerdo con el libro de Física, ¿puede ser negativa la energía potencial gravitacional?

- A. Sí; un cuerpo localizado a una altura abajo del nivel de referencia tiene energía potencial gravitacional negativa.
- B. No; la energía potencial gravitacional siempre es positiva.
- C. No; su valor siempre es igual a cero cuando el cuerpo desciende.
- D. Sí, pero únicamente cuando el cuerpo se encuentra por encima del nivel de referencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 192
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<¿Puede ser la energía potencial gravitacional de valor negativo? La respuesta es sí. Pero el cuerpo localizado a una altura h abajo del nivel de referencia tiene una energía potencial gravitacional negativa, pues al bajar a ese punto cede energía.>

### 52

De acuerdo con el libro de Física, ¿cuánto vale la energía potencial gravitacional de un cuerpo colocado exactamente en el suelo, tomado como nivel de referencia?

- A. Es igual a cero, pues no tiene ninguna altura.
- B. Es igual a su peso multiplicado por su masa.
- C. Es negativa, pues cede energía al llegar al suelo.
- D. Es máxima, pues alcanza el nivel de referencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 192
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Un cuerpo exactamente colocado en el suelo, considerado como nivel de referencia, no tiene ninguna altura y por tanto su valor de EPG será igual a cero.>

## Sub-lote 7 · Energía potencial elástica y energía cinética (p. 193)

### 53

De acuerdo con el libro de Física, ¿qué cuerpos tienen energía potencial elástica?

- A. Un resorte comprimido o estirado, una liga tensa o los muelles de espiral, como la cuerda enrollada de un reloj.
- B. Un avión en pleno vuelo, una corriente de agua o un disco que gira.
- C. Un cuerpo suspendido a cierta altura respecto al suelo.
- D. Un cristal sometido a tensiones mecánicas que genera un voltaje.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 193
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Por el estado en que se encuentran un resorte comprimido o estirado, una liga tensa o los muelles de espiral, como la cuerda enrollada de un reloj, tienen la capacidad de realizar trabajo. Debido a ello tienen energía potencial elástica.>

### 54

De acuerdo con el libro de Física, ¿qué cuerpos tienen energía cinética?

- A. Todo cuerpo en movimiento.
- B. Únicamente los cuerpos que giran alrededor de un eje de rotación.
- C. Únicamente los cuerpos suspendidos a cierta altura del suelo.
- D. Únicamente los cuerpos elásticos comprimidos o estirados.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 193
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Todo cuerpo en movimiento tiene energía cinética.>

### 55

De acuerdo con el libro de Física, ¿cuándo presenta un cuerpo movimiento de traslación?

- A. Cuando todas sus partes siguen una dirección constante, por ejemplo, un avión en vuelo o una piedra cayendo al suelo.
- B. Cuando lo lleva a cabo alrededor de una recta llamada eje de rotación.
- C. Cuando sus partes permanecen inmóviles respecto a un eje.
- D. Cuando su energía potencial gravitacional alcanza su valor máximo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 193
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Decimos que un cuerpo presenta un movimiento de traslación cuando todas sus partes siguen una dirección constante, por ejemplo, un avión en vuelo, o una piedra cayendo al suelo desde la cima de un precipicio.>

### 56

De acuerdo con el libro de Física, ¿cuándo tiene un cuerpo movimiento de rotación?

- A. Cuando lo lleva a cabo alrededor de una recta llamada eje de rotación, cuyos puntos permanecen inmóviles.
- B. Cuando todas sus partes siguen una dirección constante.
- C. Cuando se desplaza en línea recta a velocidad constante.
- D. Cuando la resultante de las fuerzas que actúan sobre él es cero.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 193
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Un cuerpo tiene movimiento de rotación cuando lo lleva a cabo alrededor de una recta llamada eje de rotación, cuyos puntos permanecen inmóviles, por ejemplo, una rueda de la fortuna, un disco compacto, un engrane o una polea fija.>

### 57

De acuerdo con los ejemplos del libro de Física, ¿qué cuerpos tienen movimiento de traslación y de rotación a la vez?

- A. La Tierra y también un yoyo.
- B. Un avión en vuelo y una piedra que cae.
- C. Una rueda de la fortuna y un disco compacto.
- D. Un engrane y una polea fija.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 193
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Hay cuerpos con movimiento de traslación y rotación, tal es el caso de la Tierra y también el de un yoyo.>

### 58

De acuerdo con el libro de Física, ¿cuándo tiene un cuerpo energía cinética traslacional?

- A. Cuando todas sus partes siguen una misma dirección, por ejemplo, una persona cuando camina o corre, o un automóvil en movimiento.
- B. Cuando gira alrededor de un eje de rotación cuyos puntos permanecen inmóviles.
- C. Cuando se encuentra suspendido a cierta altura sin moverse.
- D. Cuando se encuentra comprimido o estirado por una fuerza elástica.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 193
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Un cuerpo tiene energía cinética traslacional cuando todas sus partes siguen una misma dirección, por ejemplo, una persona cuando camina o corre, un automóvil en movimiento, etcétera.>

## Sub-lote 8 · Ley de la conservación de la energía y su degradación (p. 195–196)

### 59

De acuerdo con el libro de Física, ¿qué señala la ley de la conservación de la energía?

- A. Que la energía existente en el universo es una cantidad constante, no se crea ni se destruye, sólo se transforma.
- B. Que la energía existente en el universo aumenta constantemente al transformarse.
- C. Que la energía se crea cada vez que un cuerpo realiza un trabajo.
- D. Que la energía se destruye por completo al convertirse en calor.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 195
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<La ley de la conservación de la energía señala que la energía existente en el universo es una cantidad constante, no se crea ni se destruye, sólo se transforma.>

### 60

De acuerdo con el libro de Física, ¿a qué se debe la energía radiante del Sol?

- A. A las reacciones nucleares de fusión que se producen en su interior.
- B. A las reacciones nucleares de fisión del uranio de su núcleo.
- C. A la combustión del hidrógeno con el oxígeno de su superficie.
- D. A la energía geotérmica acumulada en su interior.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 195
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<La energía radiante del Sol se debe a las reacciones nucleares de fusión que se producen en su interior.>

### 61

De acuerdo con el libro de Física, ¿de qué se compone el Sol casi por completo y qué se produce al fusionarse sus átomos?

- A. De hidrógeno, cuyos átomos se fusionan produciendo helio.
- B. De helio, cuyos átomos se fusionan produciendo hidrógeno.
- C. De uranio, cuyos átomos se desintegran produciendo calor.
- D. De oxígeno, cuyos átomos se combinan produciendo agua.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 195
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<El Sol se compone casi por completo de hidrógeno, cuyos átomos se fusionan produciendo helio.>

### 62

De acuerdo con el libro de Física, ¿dónde tiene su origen casi toda la energía de que disponemos en la Tierra?

- A. En el Sol.
- B. En el subsuelo terrestre.
- C. En los combustibles fósiles.
- D. En el movimiento de las mareas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 195
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Así pues, casi toda la energía de que disponemos en la Tierra tiene su origen en el Sol; éste hace posible la vida en nuestro planeta al suministrar los recursos energéticos indispensables.>

### 63

De acuerdo con el libro de Física, ¿cuándo se dice que la energía se ha degradado?

- A. Cuando se convierte en calor y después ya no es posible volver a transformarla en otro tipo de energía.
- B. Cuando se transforma de energía potencial gravitacional en energía cinética.
- C. Cuando se conserva constante en ausencia de fricción.
- D. Cuando pasa de un sistema físico a otro sin perder magnitud.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 196
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Cuando la energía se convierte en calor y después ya no es posible volver a transformarla en otro tipo de energía, decimos que se ha degradado.>

### 64

De acuerdo con el libro de Física, ¿por qué se afirma que la fuerza de gravedad es una fuerza conservativa?

- A. Pues cualquier trabajo realizado por un cuerpo en contra de la fuerza de gravedad de la Tierra se recupera íntegramente cuando el cuerpo desciende.
- B. Pues su magnitud permanece constante en cualquier punto del universo.
- C. Pues siempre se opone al movimiento de los cuerpos que caen.
- D. Pues transforma toda la energía mecánica en calor al descender el cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 196
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<Esto se debe a la interacción de la esfera y la Tierra por la fuerza gravitacional, lo cual constituye un sistema conservativo, pues cualquier trabajo realizado por un cuerpo en contra de la fuerza de gravedad de la Tierra se recupera íntegramente cuando el cuerpo desciende. Por tal motivo, la fuerza de gravedad es una fuerza conservativa.>

### 65

De acuerdo con el libro de Física, en ausencia de fricción, ¿qué sucede con la energía mecánica total de un cuerpo?

- A. Se conserva: es la suma de la energía potencial gravitacional y la energía cinética traslacional, y permanece constante.
- B. Disminuye poco a poco hasta que el cuerpo se detiene por completo.
- C. Aumenta conforme el cuerpo desciende por el plano inclinado.
- D. Se degrada por completo al transformarse en calor y sonido.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 196
**Tema:** U5 t8 · energía
**Subtema:** física · energía

<En conclusión: en ausencia de fricción, la energía mecánica total (ET) se conserva: ET = EPG + ECT = k = constante.>

> Ojo con el par: **en ausencia de fricción** la energía mecánica se conserva; en la realidad la fricción siempre está presente, el cuerpo disipa energía como calor y tarde o temprano se detiene.

## Sub-lote 9 · Cantidad de movimiento o momento lineal (p. 206)

### 66

De acuerdo con el libro de Física, ¿a qué es igual la cantidad de movimiento lineal de un cuerpo?

- A. Al producto de su masa por la magnitud de su velocidad.
- B. Al producto de su masa por la magnitud de su aceleración.
- C. Al cociente de su masa entre la magnitud de su velocidad.
- D. Al producto de su peso por la altura a la que se encuentra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 206
**Tema:** U5 t13 · cantidad de movimiento o momento lineal
**Subtema:** física · cantidad de movimiento

<La cantidad de movimiento lineal de un cuerpo, o simplemente cantidad de movimiento, es igual al producto de su masa por la magnitud de su velocidad.>

### 67

De acuerdo con el libro de Física, ¿qué tipo de magnitud es la cantidad de movimiento?

- A. Una magnitud vectorial cuya dirección corresponde a la de la velocidad.
- B. Una magnitud escalar que sólo indica la rapidez del cuerpo.
- C. Una magnitud vectorial cuya dirección es siempre vertical.
- D. Una magnitud escalar cuyo valor depende del nivel de referencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 206
**Tema:** U5 t13 · cantidad de movimiento o momento lineal
**Subtema:** física · cantidad de movimiento

<La cantidad de movimiento es una magnitud vectorial cuya dirección corresponde a la de la velocidad.>

### 68

De acuerdo con el libro de Física, ¿en qué unidades se expresa la cantidad de movimiento?

- A. En kg m/s
- B. En kg m²/s
- C. En kg m/s²
- D. En kg m²/s²

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 206
**Tema:** U5 t13 · cantidad de movimiento o momento lineal
**Subtema:** física · cantidad de movimiento

<Donde: C = cantidad de movimiento en kg m/s.>

### 69

De acuerdo con el libro de Física, ¿por qué se dice que un cuerpo ha experimentado una variación en su cantidad de movimiento?

- A. Porque como resultado del impulso que recibe, éste cambia su velocidad.
- B. Porque su masa aumenta al recibir el impulso.
- C. Porque su peso cambia al modificarse la fuerza de gravedad.
- D. Porque su momento de inercia se redistribuye en torno al eje.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 206
**Tema:** U5 t13 · cantidad de movimiento o momento lineal
**Subtema:** física · cantidad de movimiento

<Como resultado del impulso que recibe un cuerpo, éste cambia su velocidad, motivo por el cual se dice que ha experimentado una variación en su cantidad de movimiento.>

## Sub-lote 10 · Momento de una fuerza y magnitudes angulares (p. 212–213)

### 70

De acuerdo con el libro de Física, ¿qué otros nombres recibe el momento de una fuerza?

- A. Momento estático, momento de torsión, o simplemente torca.
- B. Momento angular, momento lineal, o simplemente impulso.
- C. Momento de inercia, inercia rotacional, o simplemente inercia.
- D. Momento cinético, momento potencial, o simplemente energía.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<El momento de una fuerza, que también recibe los nombres de momento estático, momento de torsión, o simplemente torca (torcer).>

### 71

De acuerdo con el libro de Física, ¿cómo se define el momento de una fuerza?

- A. Como la capacidad que tiene una fuerza para hacer girar un cuerpo.
- B. Como la capacidad que tiene un cuerpo para oponerse a cambios en su rotación.
- C. Como el producto de la masa por la magnitud de la velocidad angular.
- D. Como el trabajo realizado por un momento de rotación resultante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Se define como la capacidad que tiene una fuerza para hacer girar un cuerpo. También se puede interpretar como la intensidad con que la fuerza, al actuar sobre un cuerpo, tiende a comunicarle un movimiento de rotación.>

### 72

De acuerdo con el libro de Física, ¿cómo se calcula la magnitud del momento de una fuerza?

- A. Multiplicando el valor de la fuerza aplicada por el brazo de la palanca.
- B. Dividiendo el valor de la fuerza aplicada entre el brazo de la palanca.
- C. Multiplicando la masa por la magnitud de la aceleración angular.
- D. Multiplicando el momento de inercia por la magnitud de la velocidad angular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Se calcula multiplicando el valor de la fuerza aplicada (F) por el brazo de la palanca (r).>

### 73

De acuerdo con el libro de Física, ¿cuándo se considera positivo el momento de una fuerza?

- A. Cuando su tendencia es hacer girar un cuerpo en sentido contrario al giro de las manecillas del reloj.
- B. Cuando su tendencia es hacer girar un cuerpo en el sentido de las manecillas del reloj.
- C. Cuando la fuerza aplicada es vertical y dirigida hacia arriba.
- D. Cuando el brazo de la palanca es mayor que la fuerza aplicada.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Por convención, se considera que el momento de una fuerza es positivo cuando su tendencia es hacer girar un cuerpo en sentido contrario al giro de las manecillas del reloj y es negativo cuando la tendencia de la fuerza aplicada es hacer girar al cuerpo en el sentido de las manecillas del reloj.>

### 74

De acuerdo con el libro de Física, ¿en qué se puede expresar el desplazamiento angular?

- A. En grados, revoluciones o radianes.
- B. En metros, centímetros o kilómetros.
- C. En joules, newtons o watts.
- D. En rad/s, m/s o km/h.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Su desplazamiento angular (θ) se puede expresar en grados, revoluciones o radianes.>

### 75

De acuerdo con el libro de Física, ¿cuándo el ángulo será de un radián?

- A. Si el arco tiene una longitud igual al radio.
- B. Si el arco tiene una longitud igual al doble del radio.
- C. Si el arco equivale a la circunferencia completa.
- D. Si el arco forma un ángulo recto con el radio.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<El ángulo (θ) será de un radián si el arco AB tiene una longitud igual al radio OA.>

### 76

De acuerdo con el libro de Física, ¿a cuántos grados equivale un radián?

- A. 57.3°
- B. 45°
- C. 90°
- D. 360°

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<1 radián = 360°/2π = 57.3°.>

### 77

De acuerdo con el libro de Física, ¿qué representa la magnitud de la velocidad angular?

- A. El cociente entre la magnitud del desplazamiento angular de un cuerpo y el tiempo que tarda en realizarlo.
- B. El producto del momento de inercia por el desplazamiento angular.
- C. El cociente entre la magnitud de la fuerza y el brazo de la palanca.
- D. El producto de la masa por la magnitud de la velocidad lineal.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 212
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<La magnitud de la velocidad angular (ω) representa el cociente entre la magnitud del desplazamiento angular (θ) de un cuerpo y el tiempo que tarda en realizarlo.>

### 78

De acuerdo con el libro de Física, ¿por qué la velocidad lineal también recibe el nombre de tangencial?

- A. Porque la dirección del movimiento siempre es tangente a la circunferencia recorrida por la partícula.
- B. Porque su magnitud disminuye a medida que aumenta el radio de la circunferencia.
- C. Porque siempre apunta hacia el centro de la circunferencia.
- D. Porque se mide en radianes por segundo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 213
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Esta velocidad lineal también recibe el nombre de tangencial, porque la dirección del movimiento siempre es tangente a la circunferencia recorrida por la partícula y representa la velocidad que llevaría ésta si saliera disparada tangencialmente.>

### 79

De acuerdo con el libro de Física, ¿cuándo se dice que un cuerpo que gira experimenta una aceleración angular?

- A. Cuando su velocidad angular no permanece constante sino que varía.
- B. Cuando su velocidad angular permanece constante durante todo el giro.
- C. Cuando el cuerpo deja de girar por completo.
- D. Cuando su momento de inercia permanece constante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 213
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Cuando durante el movimiento de un cuerpo que gira, su velocidad angular no permanece constante sino que varía, decimos que experimenta una aceleración angular (α).>

## Sub-lote 11 · Inercia rotacional y momento angular (p. 213, 215)

### 80

De acuerdo con el libro de Física, ¿qué nombre recibe la propiedad de los cuerpos de oponerse a cambios en su estado de movimiento de rotación?

- A. Inercia rotacional, también llamada momento de inercia.
- B. Momento de una fuerza, también llamado torca.
- C. Cantidad de movimiento angular, también llamada momento angular.
- D. Precesión giroscópica, también llamada rigidez en el espacio.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 213
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<La propiedad de los cuerpos de oponerse a cambios en su estado de movimiento de rotación recibe el nombre de inercia rotacional, también llamada momento de inercia.>

### 81

De acuerdo con el libro de Física, ¿con qué letra se representa la magnitud del momento de inercia?

- A. Con la letra I.
- B. Con la letra L.
- C. Con la letra τ.
- D. Con la letra ω.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 213
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Inercia rotacional, también llamada momento de inercia, y cuya magnitud se representa por la letra I.>

### 82

De acuerdo con el libro de Física, ¿qué mide el momento de inercia o inercia rotacional de un cuerpo?

- A. Su resistencia a variar su estado de movimiento de rotación.
- B. Su resistencia a variar su estado de movimiento de traslación.
- C. La capacidad de una fuerza para hacer girar el cuerpo.
- D. El trabajo realizado por el cuerpo durante su giro.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<En términos generales podemos señalar que el momento de inercia, o inercia rotacional de un cuerpo, mide su resistencia a variar su estado de movimiento de rotación.>

### 83

De acuerdo con el libro de Física, ¿en qué se diferencia el momento de inercia de la inercia en el momento lineal?

- A. En la inercia lineal la resistencia depende únicamente de su masa, mientras que la magnitud del momento de inercia depende, además de su masa, de la manera en que está distribuida en torno al eje de rotación.
- B. En la inercia lineal la resistencia depende de la distribución de la masa, mientras que el momento de inercia depende sólo de la masa.
- C. En que ambas dependen únicamente de la masa del cuerpo.
- D. En que la inercia lineal depende de la velocidad angular y el momento de inercia del radio de giro.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Se diferencia de la inercia en el momento lineal en que, en ésta, su resistencia a variar su estado de movimiento depende únicamente de su masa, mientras que la magnitud del momento de inercia de un cuerpo depende, además de su masa, de la manera en que está distribuida en torno al eje de rotación.>

> Ésta es la diferencia clave: la inercia lineal sólo depende de **cuánta** masa; el momento de inercia también de **dónde** está esa masa respecto al eje.

### 84

De acuerdo con el libro de Física, ¿cómo se define la magnitud de la cantidad de movimiento angular o momento angular de un cuerpo en rotación?

- A. Es el producto de la magnitud de su momento de inercia por la magnitud de su velocidad angular.
- B. Es el producto de su masa por la magnitud de su velocidad lineal.
- C. Es el producto de la fuerza aplicada por el brazo de la palanca.
- D. Es el cociente del momento de inercia entre la velocidad angular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Por definición, la magnitud de la cantidad de movimiento angular, o simplemente magnitud del momento angular (L) de un cuerpo en rotación, es el producto de la magnitud de su momento de inercia (I) por la magnitud de su velocidad angular (ω).>

### 85

De acuerdo con el libro de Física, ¿cuáles son las unidades del momento angular en el Sistema Internacional?

- A. kg m²/s
- B. kg m/s
- C. kg m²/s²
- D. rad/s

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Las unidades de L en el Sistema Internacional son kg m²/s.>

> No confundir con las de la cantidad de movimiento lineal, que son kg m/s.

## Sub-lote 12 · Ley de la conservación del momento angular, ECR y giroscopio (p. 215–216)

### 86

De acuerdo con el libro de Física, ¿qué señala la ley de la conservación del momento angular?

- A. Que el momento angular total permanece constante, si no actúa sobre el sistema un momento de rotación externo no equilibrado.
- B. Que el momento angular total aumenta si no actúa sobre el sistema un momento de rotación externo.
- C. Que el momento angular total siempre disminuye por efecto de la fricción.
- D. Que el momento angular total es igual al producto de la masa por la velocidad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<La ley de la conservación del momento angular señala que el momento angular total permanece constante, si no actúa sobre el sistema un momento de rotación externo no equilibrado.>

### 87

De acuerdo con el libro de Física, ¿de qué otra manera se enuncia la ley de la conservación del momento angular?

- A. Cuando la suma de los momentos de rotación externos que actúan sobre un sistema de cuerpos es igual a cero, el momento angular permanece constante.
- B. Cuando la suma de los momentos de rotación externos es diferente de cero, el momento angular permanece constante.
- C. Cuando la suma de las fuerzas externas es igual a cero, la velocidad angular aumenta.
- D. Cuando el momento de inercia es igual a cero, el momento angular se conserva.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<También se enuncia así: cuando la suma de los momentos de rotación (Στ) externos que actúan sobre un sistema de cuerpos es igual a cero, el momento angular permanece constante.>

### 88

De acuerdo con el libro de Física, cuando una persona sentada en un banco giratorio extiende y levanta los brazos a una posición horizontal, ¿qué ocurre?

- A. La magnitud de su momento de inercia aumenta y disminuye la magnitud de su velocidad angular.
- B. La magnitud de su momento de inercia disminuye y aumenta la magnitud de su velocidad angular.
- C. Tanto su momento de inercia como su velocidad angular aumentan.
- D. Tanto su momento de inercia como su velocidad angular disminuyen.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Cuando los extiende y levanta a una posición horizontal, la magnitud de su momento de inercia (I) aumenta y disminuye la magnitud de su velocidad de rotación, es decir, la magnitud de su velocidad angular ω.>

### 89

De acuerdo con el libro de Física, cuando la inercia rotacional de un cuerpo en rotación cambia como consecuencia de una redistribución de su masa, ¿qué debe ocurrir?

- A. Debe cambiar su rapidez de rotación para que se conserve su momento angular.
- B. Su momento angular debe aumentar en la misma proporción.
- C. Su velocidad angular permanece necesariamente constante.
- D. Su momento angular se degrada convirtiéndose en calor.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Cuando la inercia rotacional o momento de inercia (I) de un cuerpo en rotación cambia como consecuencia de una redistribución de su masa, debe cambiar su rapidez de rotación para que se conserve su momento angular.>

### 90

De acuerdo con el libro de Física, ¿cuál es un ejemplo práctico de conservación del momento angular?

- A. La Tierra, misma que durante millones de años ha girado con una magnitud de velocidad angular prácticamente constante.
- B. Una bala que se incrusta en un bloque de madera.
- C. Un paracaidista que alcanza su velocidad terminal.
- D. Un péndulo que se detiene poco a poco por efecto de la fricción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 215
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Un ejemplo práctico de conservación del momento angular es la Tierra, misma que durante millones de años ha girado con una magnitud de velocidad angular prácticamente constante.>

### 91

De acuerdo con el libro de Física, ¿a qué es igual el valor de la energía cinética rotacional de un cuerpo?

- A. Al trabajo realizado por un momento de rotación resultante que acelera al cuerpo en su movimiento giratorio hasta que adquiere su velocidad final.
- B. Al producto de su masa por la magnitud de su velocidad lineal.
- C. Al producto de su momento de inercia por su aceleración angular.
- D. A la mitad del momento angular del cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 216
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<La energía cinética rotacional de un cuerpo tiene un valor igual al trabajo realizado por un momento de rotación resultante que acelera al cuerpo en su movimiento giratorio hasta que adquiere su velocidad final.>

### 92

De acuerdo con el libro de Física, ¿qué es un giroscopio?

- A. Todo cuerpo en rotación, como es el caso de la Tierra, que tiene dos propiedades fundamentales: inercia giroscópica y precesión giroscópica.
- B. Todo cuerpo en reposo que se opone a ser puesto a girar.
- C. Un instrumento que sirve para medir la magnitud de la fuerza aplicada a un cuerpo.
- D. Un cuerpo que únicamente puede girar en una sola dirección.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 216
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Un giroscopio es todo cuerpo en rotación (como es el caso de la Tierra) que tiene dos propiedades fundamentales: 1. Inercia giroscópica o rigidez en el espacio, es decir, tiene inercia rotacional. 2. Precesión giroscópica.>

### 93

De acuerdo con el libro de Física, ¿en qué consiste la precesión giroscópica?

- A. En la inclinación del eje en un ángulo recto (90°) siempre que se presente una fuerza que tienda a cambiar el plano de rotación.
- B. En la rigidez en el espacio que impide cualquier movimiento del eje de rotación.
- C. En la disminución progresiva de la velocidad angular por efecto de la fricción.
- D. En el aumento del momento de inercia al redistribuirse la masa del cuerpo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 216
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Precesión giroscópica, que consiste en la inclinación del eje en un ángulo recto (90°) siempre que se presente una fuerza que tienda a cambiar el plano de rotación.>

> Se confunden las dos propiedades del giroscopio: la inercia giroscópica es la **rigidez en el espacio**; la precesión es la **inclinación del eje en ángulo recto**.

### 94

De acuerdo con el libro de Física, ¿dónde se utiliza especialmente la suspensión Cardán?

- A. En los compases o brújulas de navegar de los barcos y submarinos.
- B. En los motores de combustión de los automóviles.
- C. En las turbinas de las presas hidroeléctricas.
- D. En los aerogeneradores de alta potencia.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 216
**Tema:** U5 t17 · ley de la conservación del momento angular
**Subtema:** física · momento angular

<Un soporte cardánico se fundamenta en el principio de la llamada suspensión Cardán, que se utiliza especialmente en los compases o brújulas de navegar de los barcos y submarinos.>

## Sub-lote 13 · Antecedentes históricos de la gravitación universal (pp. 151–153)

### 95

De conformidad con el libro de Física, ¿en qué consistía la Teoría Geocéntrica de los hombres de la antigüedad?

- A. Consideraban a la Tierra sin movimiento y como el centro del universo, pues creían que todo giraba alrededor de ella.
- B. Consideraban al Sol sin movimiento y como el centro del universo, pues creían que todo giraba alrededor de él.
- C. Consideraban que la Tierra giraba sobre su propio eje cada 24 horas y daba una vuelta alrededor del Sol cada 365 días.
- D. Consideraban que los planetas se movían describiendo órbitas elípticas alrededor de la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Por lo cual consideraban a la Tierra sin movimiento y como el centro del universo, pues creían que todo giraba alrededor de ella (Teoría Geocéntrica).>

### 96

En relación con el libro de Física, ¿qué logró Hiparco, astrónomo griego que vivió en 125 a. C. aproximadamente?

- A. Logró hacer una lista con más de mil estrellas.
- B. Logró calcular la posición de 777 estrellas.
- C. Logró formular tres leyes sobre el movimiento de los planetas.
- D. Logró construir un telescopio con el cual se podían ver los cuerpos 30 veces más grandes.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Hiparco, astrónomo griego que vivió en 125 a. C. aproximadamente, logró hacer una lista con más de mil estrellas.>

### 97

De acuerdo con el libro de Física, ¿qué afirmaba Hiparco sobre la Tierra?

- A. Que la Tierra era plana y ocupaba el centro del universo.
- B. Que la Tierra era redonda y giraba sobre su propio eje cada 24 horas.
- C. Que la Tierra se movía alrededor del Sol describiendo una órbita elíptica.
- D. Que la Tierra era inmóvil y esférica, y ocupaba uno de los focos del universo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Sin embargo, afirmaba que la Tierra era plana y ocupaba el centro del universo.>

### 98

De conformidad con el libro de Física, ¿qué suponía Claudio Ptolomeo en sus teorías?

- A. Suponía a los planetas girando alrededor de la Tierra describiendo trayectorias circulares.
- B. Suponía a los planetas girando alrededor del Sol describiendo trayectorias circulares.
- C. Suponía a los planetas girando alrededor del Sol describiendo órbitas elípticas.
- D. Suponía a la Tierra girando alrededor del Sol describiendo trayectorias circulares.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Claudio Ptolomeo, geógrafo y astrónomo griego (siglo II d. C.), basándose en las enseñanzas equivocadas de Hiparco, proponía sus teorías considerando a la Tierra inmóvil y plana; en ellas suponía a los planetas girando alrededor de la Tierra describiendo trayectorias circulares.>

### 99

En relación con el libro de Física, ¿durante cuánto tiempo perduraron las ideas de Claudio Ptolomeo?

- A. Durante más de 1 300 años.
- B. Durante más de 300 años.
- C. Durante más de 777 años.
- D. Durante más de 100 años.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Fue considerado un gran sabio, sus ideas perduraron durante más de 1 300 años.>

### 100

De acuerdo con el libro de Física, ¿qué propuso Nicolás Copérnico, astrónomo polaco (1473-1543)?

- A. Propuso que la Tierra era redonda y giraba sobre su propio eje cada 24 horas, además de dar una vuelta alrededor del Sol cada 365 días.
- B. Propuso que la Tierra era plana e inmóvil y que los planetas giraban a su alrededor describiendo trayectorias circulares.
- C. Propuso que todos los planetas se mueven alrededor del Sol siguiendo órbitas elípticas.
- D. Propuso que el universo se creó en una gran explosión ocurrida hace miles de millones de años.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Nicolás Copérnico, astrónomo polaco (1473-1543), corrigió la teoría de Ptolomeo y basándose en la teoría de Aristarco, propuso que la Tierra era redonda y giraba sobre su propio eje cada 24 horas, además de dar una vuelta alrededor del Sol cada 365 días.>

### 101

De conformidad con el libro de Física, ¿qué había dicho Aristarco, astrónomo griego del siglo III a. C.?

- A. Que la Tierra se movía alrededor del Sol.
- B. Que la Tierra era plana y ocupaba el centro del universo.
- C. Que el radio vector que enlaza al Sol con un planeta recorre áreas iguales en tiempos iguales.
- D. Que los planetas brillan porque reflejan la luz del Sol.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Aristarco (astrónomo griego que en el siglo III a. C. había dicho que la Tierra se movía alrededor del Sol).>

### 102

En relación con el libro de Física, ¿qué logró descubrir y calcular Tycho Brahe, astrónomo danés (1546-1601)?

- A. Logró descubrir algunas leyes sobre el movimiento de la Luna, además calculó la posición de 777 estrellas.
- B. Logró descubrir las tres leyes del movimiento de los planetas, además calculó la posición de más de mil estrellas.
- C. Logró descubrir cuatro cuerpos girando alrededor de Júpiter, además calculó el periodo de rotación del Sol.
- D. Logró descubrir la ley de la gravitación universal, además calculó con precisión el radio terrestre.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 151
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Tycho Brahe, astrónomo danés (1546-1601), logró descubrir algunas leyes sobre el movimiento de la Luna, además calculó la posición de 777 estrellas y obtuvo datos interesantes sobre los cometas.>

### 103

De acuerdo con el libro de Física, ¿qué pudo descubrir Johannes Kepler, astrónomo alemán (1571-1630), sobre el movimiento de los planetas?

- A. Que éstos no se movían formando círculos sino describiendo órbitas elípticas (ovaladas).
- B. Que éstos no se movían describiendo órbitas elípticas sino formando círculos perfectos.
- C. Que éstos giraban alrededor de la Tierra y no alrededor del Sol.
- D. Que éstos brillaban porque reflejan la luz del Sol.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Después de muchos años de estudio, pudo descubrir que éstos no se movían formando círculos sino describiendo órbitas elípticas (ovaladas).>

## Sub-lote 14 · Las tres leyes de Kepler (p. 152)

### 104

De conformidad con el libro de Física, ¿qué establece la primera ley de Kepler?

- A. Todos los planetas se mueven alrededor del Sol siguiendo órbitas elípticas, en las cuales el Sol ocupa uno de los focos.
- B. El radio vector que enlaza al Sol con un planeta recorre áreas iguales en tiempos iguales.
- C. Los cuadrados de los periodos de revolución sideral de los planetas son proporcionales a los cubos de sus distancias medias al Sol.
- D. Todos los planetas se mueven alrededor del Sol siguiendo órbitas circulares, en las cuales el Sol ocupa el centro.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Todos los planetas se mueven alrededor del Sol siguiendo órbitas elípticas, en las cuales el Sol ocupa uno de los focos.>

### 105

En relación con el libro de Física, ¿qué establece la segunda ley de Kepler?

- A. El radio vector que enlaza al Sol con un planeta recorre áreas iguales en tiempos iguales.
- B. El radio vector que enlaza al Sol con un planeta recorre distancias iguales en tiempos iguales.
- C. Todos los planetas se mueven alrededor del Sol siguiendo órbitas elípticas, en las cuales el Sol ocupa uno de los focos.
- D. Los cuadrados de los periodos de revolución sideral de los planetas son proporcionales a los cubos de sus distancias medias al Sol.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El radio vector que enlaza al Sol con un planeta recorre áreas iguales en tiempos iguales.>

> El distractor B cambia **áreas** por **distancias**. La segunda ley de Kepler habla de áreas barridas, no de longitudes recorridas.

### 106

De acuerdo con el libro de Física, ¿a qué se debe que los planetas varíen la magnitud de su velocidad al moverse en el espacio?

- A. Mientras más cerca están del Sol más rápido se mueven y viceversa.
- B. Mientras más lejos están del Sol más rápido se mueven y viceversa.
- C. Mientras mayor es su masa más rápido se mueven y viceversa.
- D. Mientras mayor es el número de sus satélites más rápido se mueven y viceversa.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Esto se debe a la variación de la magnitud de la velocidad con que se mueven los planetas en el espacio, mientras más cerca están del Sol más rápido se mueven y viceversa.>

### 107

De conformidad con el ejemplo del libro de Física, ¿a qué distancia del Sol está Mercurio, cuánto tarda en recorrer su órbita y con qué velocidad media?

- A. A 58 millones de kilómetros; tarda 88 días con una velocidad media de 50 km/s.
- B. A 149 millones de kilómetros; tarda 88 días con una velocidad media de 30 km/s.
- C. A 58 millones de kilómetros; tarda un año con una velocidad media de 30 km/s.
- D. A 88 millones de kilómetros; tarda 58 días con una velocidad media de 50 km/s.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Por ejemplo: el planeta Mercurio, con una distancia de 58 millones de kilómetros, es el más cercano al Sol y tarda 88 días en recorrer su órbita con una velocidad media de 50 km/s.>

### 108

En relación con el ejemplo del libro de Física, ¿a qué distancia del Sol está la Tierra y con qué velocidad media recorre su órbita?

- A. A 149 millones de kilómetros, con una velocidad media cuya magnitud es de 30 km/s, que equivalen a 108 000 km/h.
- B. A 58 millones de kilómetros, con una velocidad media cuya magnitud es de 50 km/s, que equivalen a 180 000 km/h.
- C. A 149 millones de kilómetros, con una velocidad media cuya magnitud es de 50 km/s, que equivalen a 108 000 km/h.
- D. A 108 millones de kilómetros, con una velocidad media cuya magnitud es de 30 km/s, que equivalen a 149 000 km/h.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<La Tierra, a una distancia de 149 millones de kilómetros del Sol, tarda un año en recorrer su órbita con una velocidad media cuya magnitud es de 30 km/s, que equivalen a 108 000 km/h.>

### 109

De acuerdo con el libro de Física, ¿qué establece la tercera ley de Kepler?

- A. Los cuadrados de los periodos de revolución sideral de los planetas son proporcionales a los cubos de sus distancias medias al Sol.
- B. Los cubos de los periodos de revolución sideral de los planetas son proporcionales a los cuadrados de sus distancias medias al Sol.
- C. Los periodos de revolución sideral de los planetas son proporcionales a sus distancias medias al Sol.
- D. Los cuadrados de las distancias medias al Sol son proporcionales a los cubos de los periodos de revolución sideral de los planetas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Los cuadrados de los periodos de revolución sideral de los planetas (t²) son proporcionales a los cubos de sus distancias medias al Sol (d³).>

> Los distractores B y D invierten cuadrados por cubos o periodos por distancias. Conviene fijar el orden: **cuadrados de los periodos** ~ **cubos de las distancias**.

### 110

De conformidad con el libro de Física, ¿qué explicó Kepler con sus leyes y qué no llegó a explicar?

- A. Explicó con precisión la cinemática del sistema planetario sin llegar a la explicación dinámica del mismo, es decir, cuáles son las causas que lo originan.
- B. Explicó con precisión la dinámica del sistema planetario sin llegar a la explicación cinemática del mismo.
- C. Explicó tanto la cinemática como la dinámica del sistema planetario en su totalidad.
- D. Explicó únicamente la causa de que los planetas brillen porque reflejan la luz del Sol.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Con sus leyes, Kepler explicó con precisión la cinemática del sistema planetario sin llegar a la explicación dinámica del mismo, es decir, cuáles son las causas que lo originan.>

### 111

En relación con el libro de Física, ¿por qué es digna de elogio la contribución de Kepler a la astronomía?

- A. Si se considera que sus observaciones las realizó cuando todavía no se inventaba el telescopio.
- B. Si se considera que sus observaciones las realizó con el telescopio que él mismo construyó.
- C. Si se considera que fue el primero en describir la forma en que actúa la gravedad.
- D. Si se considera que fue sancionado por la Inquisición y obligado a renunciar a sus ideas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Sin embargo, su contribución a la astronomía es digna de elogio si se considera que sus observaciones las realizó cuando todavía no se inventaba el telescopio.>

### 112

De acuerdo con el libro de Física, ¿qué características tenía el telescopio que Galileo Galilei construyó en diciembre de 1609?

- A. Un telescopio con el cual se podían ver los cuerpos 30 veces más grandes que a simple vista.
- B. Un telescopio con el cual se podían ver los cuerpos 27 veces más grandes que a simple vista.
- C. Un telescopio con el cual se podían ver los cuerpos 109 veces más grandes que a simple vista.
- D. Un telescopio con el cual se podían ver los cuerpos 777 veces más grandes que a simple vista.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 152
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<En diciembre de ese mismo año, Galileo construyó un telescopio con el cual se podían ver los cuerpos 30 veces más grandes que a simple vista.>

### 113

De conformidad con el libro de Física, ¿qué demostró Galileo al observar el movimiento de las manchas del Sol?

- A. Demostró que el Sol giraba alrededor de su eje en un periodo de 27 días.
- B. Demostró que el Sol giraba alrededor de la Tierra en un periodo de 27 días.
- C. Demostró que el Sol permanecía inmóvil en el centro del universo.
- D. Demostró que el Sol giraba alrededor de su eje en un periodo de 365 días.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Observó las manchas del Sol y debido al movimiento de ellas demostró que el Sol giraba alrededor de su eje en un periodo de 27 días.>

### 114

En relación con el libro de Física, ¿qué explicó Galileo al descubrir que Venus presentaba fases similares a las de la Luna?

- A. Explicó que los planetas brillan porque reflejan la luz del Sol.
- B. Explicó que los planetas brillan porque generan su propia luz mediante reacciones termonucleares.
- C. Explicó que los planetas giran alrededor de la Tierra describiendo trayectorias circulares.
- D. Explicó que los planetas se mueven siguiendo órbitas elípticas alrededor del Sol.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Descubrió que Venus presentaba fases similares a las de la Luna, con esto explicó que los planetas brillan porque reflejan la luz del Sol.>

## Sub-lote 15 · Isaac Newton y la ley de la gravitación universal (p. 153)

### 115

De acuerdo con el libro de Física, ¿en qué año nació Newton y qué ocurrió ese mismo año?

- A. Nació en 1642, año en que murió Galileo Galilei.
- B. Nació en 1642, año en que murió Nicolás Copérnico.
- C. Nació en 1687, año en que publicó su Ley de la Gravitación Universal.
- D. Nació en 1564, año en que nació Galileo Galilei.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Newton, el gran físico y matemático inglés, nació en 1642, año en que murió Galileo Galilei.>

### 116

De conformidad con el libro de Física, ¿quién fue el primero en describir la forma en que actúa la gravedad y qué encontró?

- A. Fue Newton, quien encontró que todos los cuerpos ejercen entre sí una fuerza de atracción a la cual llamó fuerza gravitacional.
- B. Fue Kepler, quien encontró que todos los cuerpos ejercen entre sí una fuerza de atracción a la cual llamó fuerza gravitacional.
- C. Fue Galileo, quien encontró que todos los cuerpos caen a la Tierra con la misma aceleración.
- D. Fue Copérnico, quien encontró que la Tierra giraba sobre su propio eje cada 24 horas.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El primero en describir la forma en que actúa la gravedad fue Newton, quien encontró que todos los cuerpos ejercen entre sí una fuerza de atracción a la cual llamó fuerza gravitacional.>

### 117

En relación con el libro de Física, ¿en qué año publicó Newton su Ley de la Gravitación Universal y qué expuso en ella?

- A. En 1687; expuso que la atracción gravitatoria está en función de la masa de los cuerpos y de la distancia entre ellos.
- B. En 1642; expuso que la atracción gravitatoria está en función únicamente de la masa de los cuerpos.
- C. En 1687; expuso que la atracción gravitatoria está en función únicamente de la distancia entre los cuerpos.
- D. En 1632; expuso que la atracción gravitatoria mantiene a los planetas en sus órbitas alrededor de la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<En 1687 Newton publicó su Ley de la Gravitación Universal, en ella expuso que la atracción gravitatoria está en función de la masa de los cuerpos y de la distancia entre ellos.>

### 118

De acuerdo con el libro de Física, ¿qué ocurre cuanto mayor masa tenga un cuerpo?

- A. Mayor será la magnitud de la fuerza con que atraerá a los demás cuerpos.
- B. Menor será la magnitud de la fuerza con que atraerá a los demás cuerpos.
- C. Mayor será la distancia a la que se encontrará de los demás cuerpos.
- D. Menor será la intensidad del campo gravitacional que origine a su alrededor.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Cuanto mayor masa tenga un cuerpo mayor será la magnitud de la fuerza con que atraerá a los demás cuerpos.>

### 119

De conformidad con el libro de Física, ¿por qué un hombre tiene una menor magnitud de peso en la Luna que en la Tierra?

- A. Pues la masa de la Tierra es mayor a la de la Luna y, por tanto, también será mayor la magnitud de su fuerza gravitatoria.
- B. Pues la masa de la Luna es mayor a la de la Tierra y, por tanto, también será mayor la magnitud de su fuerza gravitatoria.
- C. Pues la distancia entre el hombre y el centro de gravedad de la Luna es menor que en la Tierra.
- D. Pues en la Luna el hombre tiene una menor cantidad de materia que en la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Debido a ello, un hombre tiene una menor magnitud de peso en la Luna que en la Tierra, pues la masa de la Tierra es mayor a la de la Luna y, por tanto, también será mayor la magnitud de su fuerza gravitatoria.>

### 120

En relación con el libro de Física, ¿qué le ocurre a la fuerza gravitatoria con la cual se atraen dos cuerpos a medida que disminuye la distancia existente entre ellos?

- A. Será mayor.
- B. Será menor.
- C. Permanecerá constante.
- D. Se anulará por completo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<La fuerza gravitatoria con la cual se atraen dos cuerpos será mayor a medida que disminuya la distancia existente entre ellos.>

### 121

De acuerdo con el libro de Física, ¿cómo se enuncia la Ley de Gravitación Universal?

- A. Dos cuerpos cualesquiera se atraen con una fuerza cuya magnitud es directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia que los separa.
- B. Dos cuerpos cualesquiera se atraen con una fuerza cuya magnitud es inversamente proporcional al producto de sus masas y directamente proporcional al cuadrado de la distancia que los separa.
- C. Dos cuerpos cualesquiera se atraen con una fuerza cuya magnitud es directamente proporcional a la suma de sus masas e inversamente proporcional a la distancia que los separa.
- D. Dos cuerpos cualesquiera se atraen con una fuerza cuya magnitud es directamente proporcional al producto de sus masas e inversamente proporcional al cubo de la distancia que los separa.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Dos cuerpos cualesquiera se atraen con una fuerza cuya magnitud es directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia que los separa.>

### 122

De conformidad con el libro de Física, ¿cuál es la magnitud de la constante de gravitación universal en el Sistema Internacional?

- A. G = 6.67 × 10⁻¹¹ Nm²/kg²
- B. G = 6.67 × 10⁻¹¹ Nm/kg
- C. G = 9.8 × 10⁻¹¹ Nm²/kg²
- D. G = 6.67 × 10¹¹ Nm²/kg²

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<G = constante de gravitación universal cuya magnitud en el Sistema Internacional es G = 6.67 × 10⁻¹¹ Nm²/kg².>

### 123

En relación con el libro de Física, en la fórmula de la Ley de Gravitación Universal, ¿qué representa la literal d?

- A. La distancia que hay entre los centros de gravedad de ambos cuerpos en metros (m).
- B. La distancia que hay entre las superficies de ambos cuerpos en metros (m).
- C. El diámetro de los cuerpos que se atraen en metros (m).
- D. La densidad de los cuerpos que se atraen en kilogramos por metro cúbico.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<d = distancia que hay entre los centros de gravedad de ambos cuerpos en metros (m).>

### 124

De acuerdo con el libro de Física, ¿por qué no es observable ningún efecto al acercar dos cuerpos de masa no muy grande?

- A. Porque la fuerza de atracción entre dos cuerpos de poca masa es muy pequeña.
- B. Porque la fuerza de atracción entre dos cuerpos de poca masa es igual a cero.
- C. Porque la fuerza de atracción entre dos cuerpos de poca masa es muy grande.
- D. Porque entre dos cuerpos de poca masa no existe fuerza de atracción alguna.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 153
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Cabe señalar que la fuerza de atracción entre dos cuerpos de poca masa es muy pequeña, razón por la cual no es observable ningún efecto al acercar dos cuerpos de masa no muy grande.>

## Sub-lote 16 · Peso, fuerza de gravedad y plano inclinado (p. 154)

### 125

De conformidad con el libro de Física, ¿de qué depende el peso de un cuerpo?

- A. Depende de la fuerza de gravedad; por tal motivo, éste será mayor si es atraído por una fuerza gravitatoria mayor o viceversa.
- B. Depende únicamente de la cantidad de materia que tiene el cuerpo, sin importar la fuerza de gravedad.
- C. Depende de la distancia que hay entre los centros de gravedad de dos cuerpos cualesquiera.
- D. Depende de la constante de gravitación universal, que es la misma en todo el universo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 154
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El peso de un cuerpo depende de la fuerza de gravedad; por tal motivo, éste será mayor si es atraído por una fuerza gravitatoria mayor o viceversa.>

### 126

En relación con el ejemplo del libro de Física, ¿cuánto pesará en la Luna un hombre que pese 686 N (70 kg_f) en la Tierra?

- A. Sólo pesará 114.3 N (11.6 kg_f).
- B. Sólo pesará 343 N (35 kg_f).
- C. Pesará igualmente 686 N (70 kg_f).
- D. Sólo pesará 68.6 N (7 kg_f).

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 154
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Un hombre que pese 686 N (70 kg_f) en la Tierra, en la Luna sólo pesará 114.3 N (11.6 kg_f).>

### 127

De acuerdo con el ejemplo del libro de Física, ¿qué le ocurre a la masa de ese hombre en la Luna y por qué?

- A. Su masa será la misma, 70 kg, ya que tiene la misma cantidad de materia, pero su peso disminuye a la sexta parte.
- B. Su masa disminuirá a la sexta parte, ya que tiene menos cantidad de materia, y su peso disminuye igualmente.
- C. Su masa aumentará al séxtuplo, mientras su peso permanece constante.
- D. Su masa y su peso disminuyen ambos a la sexta parte, pues los dos dependen de la gravedad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 154
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Su masa será la misma, 70 kg, ya que tiene la misma cantidad de materia, pero su peso disminuye a la sexta parte.>

> Es el par que más se confunde de toda la unidad: la **masa** no cambia (misma cantidad de materia); el **peso** sí, porque depende de la fuerza de gravedad.

### 128

De conformidad con el libro de Física, ¿dónde será mayor el peso de un cuerpo en la Tierra y por qué?

- A. Al nivel del mar, pues la distancia entre el cuerpo y el centro de gravedad de la Tierra es menor al nivel del mar.
- B. A cierta altura sobre el nivel del mar, pues la distancia entre el cuerpo y el centro de gravedad de la Tierra es mayor.
- C. Al nivel del mar, pues ahí la masa del cuerpo es mayor que a cierta altura sobre él.
- D. Es exactamente el mismo al nivel del mar que a cualquier altura sobre él.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 154
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El peso de un cuerpo en la Tierra será mayor si éste se encuentra al nivel del mar que si está a cierta altura sobre él. Lo anterior se debe a que la distancia entre el cuerpo y el centro de gravedad de la Tierra es menor al nivel del mar.>

### 129

En relación con el libro de Física, ¿qué nombre recibe la fuerza que ejerce una superficie horizontal como reacción al peso de un cuerpo colocado sobre ella?

- A. Fuerza de reacción normal (N).
- B. Fuerza de fricción viscosa.
- C. Fuerza gravitacional.
- D. Fuerza centrípeta.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 154
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Como reacción la superficie ejerce una fuerza igual en magnitud al peso del bloque, en la misma dirección, pero con sentido contrario. Esta fuerza recibe el nombre de fuerza de reacción normal (N), toda vez que es perpendicular al plano o superficie horizontal.>

### 130

De acuerdo con el libro de Física, ¿qué descomposición vectorial experimenta el peso de un bloque colocado sobre un plano inclinado?

- A. Una descomposición vectorial en dos direcciones perpendiculares entre sí, una es normal o perpendicular al plano y la otra es paralela al mismo.
- B. Una descomposición vectorial en dos direcciones paralelas entre sí, ambas perpendiculares al plano inclinado.
- C. Una descomposición vectorial en tres direcciones perpendiculares entre sí.
- D. No experimenta descomposición alguna, pues el peso actúa siempre verticalmente hacia abajo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 154
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El peso del bloque experimenta una descomposición vectorial en dos direcciones perpendiculares entre sí, una es normal o perpendicular al plano y la otra es paralela al mismo.>

### 131

De conformidad con el libro de Física, ¿por qué resulta más fácil subir un barril a un camión rodándolo por una rampa que levantarlo en forma vertical?

- A. Debido a la descomposición vectorial que sufre el peso de un cuerpo en un plano inclinado.
- B. Debido a que sobre la rampa el peso del barril disminuye a la sexta parte.
- C. Debido a que sobre la rampa desaparece la fuerza de reacción normal.
- D. Debido a que sobre la rampa la masa del barril se reduce a la mitad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Debido a la descomposición vectorial que sufre el peso de un cuerpo en un plano inclinado resulta más fácil subir un barril a un camión rodándolo por una rampa que levantarlo en forma vertical.>

## Sub-lote 17 · Campo gravitacional y su intensidad (p. 155)

### 132

En relación con el libro de Física, ¿por qué tiene un campo gravitatorio todo cuerpo?

- A. Por el hecho de ser materia; el campo se manifiesta por la fuerza de atracción que se ejerce entre dos cuerpos cualesquiera.
- B. Por el hecho de estar en movimiento; el campo se manifiesta por la fuerza de fricción que se opone a su desplazamiento.
- C. Por el hecho de tener peso; el campo se manifiesta por la fuerza de reacción normal de la superficie que lo sostiene.
- D. Por el hecho de tener un centro de gravedad; el campo se manifiesta únicamente en su interior.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Todo cuerpo por el hecho de ser materia tiene un campo gravitatorio, el cual se manifiesta por la fuerza de atracción que se ejerce entre dos cuerpos cualesquiera.>

### 133

De acuerdo con el libro de Física, ¿qué es el campo gravitacional de un cuerpo?

- A. Es la zona en la cual ejerce su influencia sobre otros cuerpos.
- B. Es la magnitud de la fuerza por unidad de masa que actúa sobre un cuerpo colocado en un punto.
- C. Es la distancia que hay entre los centros de gravedad de dos cuerpos cualesquiera.
- D. Es la fuerza de atracción que la Tierra ejerce sobre los cuerpos colocados en su superficie.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<De donde el campo gravitacional de un cuerpo es la zona en la cual ejerce su influencia sobre otros cuerpos.>

### 134

De conformidad con el libro de Física, ¿qué le ocurre a la intensidad del campo gravitatorio de un cuerpo a medida que aumenta la distancia?

- A. Disminuye notablemente; no obstante, se dice que se extiende hasta el infinito.
- B. Aumenta notablemente; no obstante, se dice que se extiende hasta el infinito.
- C. Disminuye notablemente hasta anularse por completo a cierta distancia.
- D. Permanece constante sin importar la distancia a la que se mida.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<A medida que aumenta la distancia, la intensidad del campo gravitatorio de un cuerpo disminuye notablemente; no obstante, se dice que se extiende hasta el infinito.>

### 135

En relación con el libro de Física, ¿a cuántas veces la masa de la Tierra equivale la masa del Sol?

- A. A 333 432 veces la de la Tierra.
- B. A 33 432 veces la de la Tierra.
- C. A 3 334 320 veces la de la Tierra.
- D. A 149 597 veces la de la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El Sol, estrella alrededor de la cual gravitan la Tierra y los demás astros del Sistema Solar, tiene una masa equivalente a 333 432 veces la de la Tierra.>

### 136

De acuerdo con el libro de Física, ¿cuál es la masa de nuestro planeta?

- A. 5.9 × 10²⁴ kg
- B. 5.9 × 10³⁰ kg
- C. 2 × 10²⁴ kg
- D. 5.9 × 10²¹ kg

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Nuestro planeta, cuya masa es de 5.9 × 10²⁴ kg, origina un campo gravitacional a su alrededor.>

### 137

De conformidad con el libro de Física, ¿cómo se define la intensidad de campo gravitacional en un punto cualquiera?

- A. Como la magnitud de la fuerza por unidad de masa que actúa sobre un cuerpo colocado en ese punto.
- B. Como la magnitud de la masa por unidad de fuerza que actúa sobre un cuerpo colocado en ese punto.
- C. Como la zona en la cual un cuerpo ejerce su influencia sobre otros cuerpos.
- D. Como el producto de la masa del cuerpo por la aceleración de la gravedad en ese punto.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Definimos como intensidad de campo gravitacional en un punto cualquiera a la magnitud de la fuerza por unidad de masa que actúa sobre un cuerpo colocado en ese punto.>

### 138

En relación con el libro de Física, ¿qué intensidad del campo gravitacional se considera en general para puntos localizados cerca de la superficie de la Tierra?

- A. Igual a 9.8 N/kg.
- B. Igual a 9.8 N/m.
- C. Igual a 6.67 N/kg.
- D. Igual a 1 N/kg.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<En general, para puntos localizados cerca de la superficie de la Tierra se considera una intensidad del campo gravitacional igual a 9.8 N/kg.>

### 139

De acuerdo con el libro de Física, ¿cómo se conoce la magnitud del peso de un cuerpo cualquiera a partir de la intensidad del campo gravitacional?

- A. Sólo debemos multiplicar la masa (m) del cuerpo por el valor de la intensidad del campo gravitacional (g).
- B. Sólo debemos dividir la masa (m) del cuerpo entre el valor de la intensidad del campo gravitacional (g).
- C. Sólo debemos dividir el valor de la intensidad del campo gravitacional (g) entre la masa (m) del cuerpo.
- D. Sólo debemos restar la masa (m) del cuerpo del valor de la intensidad del campo gravitacional (g).

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Como el peso de un cuerpo representa la magnitud de la fuerza que sobre él ejerce el campo gravitacional, tenemos que para conocer cuál es la magnitud del peso de un cuerpo cualquiera sólo debemos multiplicar la masa (m) del cuerpo por el valor de la intensidad del campo gravitacional (g).>

## Sub-lote 18 · El cosmos, el Big Bang y el Sistema Solar (pp. 155–156)

### 140

De conformidad con el libro de Física, cuando nos referimos al cosmos, ¿de qué estamos hablando?

- A. Del universo como un todo, incluidos los planetas y sus satélites, los cometas y meteoros, las estrellas y la materia interestelar, los sistemas de estrellas llamados galaxias, así como de los conjuntos de galaxias llamados cúmulos galácticos.
- B. Del Sistema Solar como un todo, incluidos el Sol, los ocho planetas, los asteroides, los cometas y los meteoroides.
- C. De la Vía Láctea como un todo, incluidas sus estrellas y la materia interestelar que la conforma.
- D. Del conjunto de los astros que pueden observarse a simple vista desde la superficie de la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Cuando nos referimos al cosmos, estamos hablando del universo como un todo, incluidos los planetas y sus satélites, los cometas y meteoros, las estrellas y la materia interestelar, los sistemas de estrellas llamados galaxias, así como de los conjuntos de galaxias llamados cúmulos galácticos.>

### 141

En relación con el libro de Física, ¿qué es la astronomía?

- A. Es la ciencia que estudia los astros, también llamados cuerpos celestes, del universo.
- B. Es la ciencia que estudia el movimiento de los cuerpos sin considerar las causas que lo originan.
- C. Es la ciencia que estudia la zona en la cual un cuerpo ejerce su influencia gravitacional sobre otros.
- D. Es la ciencia que estudia los conjuntos de galaxias llamados cúmulos galácticos.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<La astronomía es la ciencia que estudia los astros (también llamados cuerpos celestes) del universo.>

### 142

De acuerdo con el libro de Física, ¿qué es la Vía Láctea a pesar de su gran tamaño?

- A. Es sólo uno de los muchos sistemas de estrellas, llamados galaxias, que conforman el universo.
- B. Es el único sistema de estrellas, llamado galaxia, que conforma el universo.
- C. Es sólo uno de los muchos conjuntos de galaxias, llamados cúmulos galácticos, que conforman el universo.
- D. Es sólo uno de los muchos sistemas planetarios que giran alrededor del Sol.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 155
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<A pesar de su gran tamaño, la Vía Láctea es sólo uno de los muchos sistemas de estrellas, llamados galaxias, que conforman el universo.>

### 143

De conformidad con el libro de Física, ¿quién propuso la teoría del Big Bang y en qué año?

- A. El físico ruso, nacionalizado estadounidense, George Gamow, en el año de 1948.
- B. El físico y matemático inglés Isaac Newton, en el año de 1687.
- C. El astrónomo alemán Johannes Kepler, en el año de 1630.
- D. El astrónomo polaco Nicolás Copérnico, en el año de 1543.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El físico ruso, nacionalizado estadounidense, George Gamow propuso en el año de 1948 que el universo se creó en una gran explosión o Big Bang.>

### 144

En relación con el libro de Física, ¿qué elementos se consideran los productos primarios de la gran explosión?

- A. El hidrógeno y el helio; los elementos más pesados se produjeron después, dentro de las estrellas.
- B. El hidrógeno y el hierro; los elementos más ligeros se produjeron después, dentro de las estrellas.
- C. El helio y el hielo; los elementos más pesados se produjeron después, dentro de los planetas.
- D. El hidrógeno y el helio; los elementos más pesados se produjeron al mismo tiempo que ellos.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Se considera que el hidrógeno y el helio fueron los productos primarios de la gran explosión y los elementos más pesados se produjeron después, dentro de las estrellas.>

### 145

De acuerdo con el libro de Física, ¿por qué está formado actualmente el Sistema Solar?

- A. Por una estrella llamada Sol, ocho planetas, seis de ellos con satélites, excepto Mercurio y Venus, asteroides, cometas y meteoroides.
- B. Por una estrella llamada Sol, nueve planetas, todos ellos con satélites, asteroides, cometas y meteoroides.
- C. Por una estrella llamada Sol, ocho planetas, todos ellos con satélites, y los conjuntos de galaxias llamados cúmulos galácticos.
- D. Por dos estrellas, ocho planetas, seis de ellos con satélites, asteroides, cometas y meteoroides.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Actualmente se considera que el Sistema Solar está formado por una estrella llamada Sol, ocho planetas, seis de ellos con satélites, excepto, Mercurio y Venus, asteroides, cometas y meteoroides.>

### 146

De conformidad con el libro de Física, ¿dónde y cuándo definió la Unión Astronómica Internacional el concepto de planeta?

- A. Reunida en Praga, República Checa, el 24 de agosto de 2006.
- B. Reunida en Praga, República Checa, el 24 de agosto de 1948.
- C. Reunida en Roma, Italia, el 24 de agosto de 2006.
- D. Reunida en Copenhague, Dinamarca, el 24 de agosto de 2016.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Esto en virtud de que la Unión Astronómica Internacional, reunida en Praga, República Checa, el 24 de agosto de 2006, definió el concepto de planeta.>

### 147

En relación con el libro de Física, ¿qué es un planeta de acuerdo con esa definición?

- A. Es aquel cuerpo celeste que se encuentra en órbita alrededor de una estrella sin ser una; además debe ser lo suficientemente grande en masa para que su propia gravedad le dé una forma esférica y haya limpiado o despejado la zona alrededor de su órbita.
- B. Es aquel cuerpo celeste que se encuentra en órbita alrededor de una estrella siendo también una estrella; además debe tener por lo menos un satélite natural.
- C. Es aquel cuerpo celeste rocoso que se mueve en órbitas, sobre todo entre las órbitas de Marte y Júpiter.
- D. Es aquel astro luminoso compuesto básicamente de polvo y gases helados, cuyo diámetro está comprendido entre 5 y 10 km.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Un planeta es aquel cuerpo celeste que se encuentra en órbita alrededor de una estrella sin ser una; además debe ser lo suficientemente grande en masa del orden de 500 trillones de kilogramos para que su propia gravedad le dé una forma esférica y haya limpiado o despejado la zona alrededor de su órbita.>

### 148

De acuerdo con el libro de Física, ¿por qué fue eliminado el planeta Plutón?

- A. Debido a su tamaño, ya que es mucho más pequeño que la Tierra e incluso que la Luna terrestre.
- B. Debido a su tamaño, ya que es mucho más grande que la Tierra e incluso que Júpiter.
- C. Debido a que no se encuentra en órbita alrededor de una estrella.
- D. Debido a que carece por completo de satélites naturales.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<De acuerdo con esta definición, el planeta Plutón fue eliminado debido a su tamaño, ya que es mucho más pequeño que la Tierra e incluso que la Luna terrestre.>

### 149

De conformidad con el libro de Física, ¿qué es la unidad astronómica (UA) y a cuánto equivale?

- A. Es la distancia media que existe del centro de la Tierra al centro del Sol y equivale a 149 597 870.691 de kilómetros.
- B. Es la distancia media que existe del centro de la Tierra al centro de la Luna y equivale a 149 597 870.691 de kilómetros.
- C. Es la distancia media que existe del centro de la Tierra al centro del Sol y equivale a 149 597.870 kilómetros.
- D. Es el diámetro medio del Sol y equivale a 1 390 000 kilómetros.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Las dimensiones del sistema solar se determinan en función de la distancia media que existe del centro de la Tierra al centro del Sol, denominada unidad astronómica (UA) y que equivale a 149 597 870.691 de kilómetros.>

## Sub-lote 19 · El Sol, los planetas y los cometas (p. 156)

### 150

En relación con el libro de Física, ¿qué es el Sol?

- A. Es la estrella alrededor de la cual gravitan la Tierra y los demás astros del Sistema Solar.
- B. Es el planeta más grande alrededor del cual gravitan la Tierra y los demás astros del Sistema Solar.
- C. Es el sistema de estrellas llamado galaxia que conforma el universo.
- D. Es el conjunto de galaxias llamado cúmulo galáctico al que pertenece la Tierra.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Es la estrella alrededor de la cual gravitan la Tierra y los demás astros del Sistema Solar.>

### 151

De acuerdo con el libro de Física, ¿cuál es la temperatura del Sol en su interior denso y cuál en su superficie?

- A. En su interior es del orden de 10 millones de grados centígrados, y en su superficie es de unos 4 800 °C.
- B. En su interior es del orden de 4 800 grados centígrados, y en su superficie es de unos 10 millones de °C.
- C. En su interior es del orden de 10 mil grados centígrados, y en su superficie es de unos 4 800 °C.
- D. En su interior es del orden de 100 millones de grados centígrados, y en su superficie es de unos 48 000 °C.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El Sol es una estrella, cuya temperatura en su interior denso es del orden de 10 millones de grados centígrados, y en su superficie es de unos 4 800 °C.>

### 152

De conformidad con el libro de Física, ¿cuál es la masa del Sol y cuál su diámetro?

- A. Su masa es de 2 × 10³⁰ kg y su diámetro es de 1 390 000 km, equivalente a 109 veces más que el diámetro terrestre.
- B. Su masa es de 2 × 10²⁴ kg y su diámetro es de 1 390 000 km, equivalente a 27 veces más que el diámetro terrestre.
- C. Su masa es de 5.9 × 10³⁰ kg y su diámetro es de 139 000 km, equivalente a 109 veces más que el diámetro terrestre.
- D. Su masa es de 2 × 10³⁰ kg y su diámetro es de 13 900 000 km, equivalente a 333 veces más que el diámetro terrestre.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Su masa es de 2 × 10³⁰ kg, 333 432 veces más grande que la Tierra y su diámetro es de 1 390 000 km, equivalente a 109 veces más que el diámetro terrestre.>

### 153

En relación con el libro de Física, ¿cómo se genera la energía radiante del Sol?

- A. Por reacciones termonucleares de fusión, debido a la conversión del hidrógeno en helio en el interior denso y caliente del Sol.
- B. Por reacciones termonucleares de fisión, debido a la ruptura del helio en hidrógeno en el interior denso y caliente del Sol.
- C. Por la reflexión de la luz que recibe de las demás estrellas de la Vía Láctea.
- D. Por la fricción que produce su rotación alrededor de su propio eje cada 27 días.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<La energía radiante del Sol se genera por reacciones termonucleares de fusión, debido a la conversión del hidrógeno en helio en el interior denso y caliente del Sol.>

### 154

De acuerdo con el libro de Física, ¿cómo son y cuáles son los planetas interiores?

- A. Se caracterizan por ser densos, pequeños y estar compuestos principalmente de roca y hierro; son Mercurio, Venus, Tierra y Marte.
- B. Se caracterizan por ser grandes y estar constituidos principalmente de hidrógeno, helio y hielo; son Mercurio, Venus, Tierra y Marte.
- C. Se caracterizan por ser densos, pequeños y estar compuestos principalmente de roca y hierro; son Júpiter, Saturno, Urano y Neptuno.
- D. Se caracterizan por ser pequeños cuerpos rocosos que se mueven en órbitas entre Marte y Júpiter.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Los planetas interiores se caracterizan por ser densos, pequeños y estar compuestos principalmente de roca y hierro, éstos son: Mercurio, Venus, Tierra y Marte.>

### 155

De conformidad con el libro de Física, ¿cómo son y cuáles son los planetas exteriores?

- A. Son más grandes y están constituidos principalmente de hidrógeno, helio y hielo; son Júpiter, Saturno, Urano y Neptuno.
- B. Son más pequeños y están compuestos principalmente de roca y hierro; son Júpiter, Saturno, Urano y Neptuno.
- C. Son más grandes y están constituidos principalmente de hidrógeno, helio y hielo; son Mercurio, Venus, Tierra y Marte.
- D. Son astros luminosos compuestos básicamente de polvo y gases helados; son Júpiter, Saturno, Urano y Neptuno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Los planetas exteriores son más grandes y están constituidos principalmente de hidrógeno, helio y hielo, éstos son: Júpiter, Saturno, Urano y Neptuno.>

### 156

En relación con el libro de Física, ¿qué son los asteroides y dónde se mueven?

- A. Son pequeños cuerpos rocosos que se mueven en órbitas, sobre todo entre órbitas de Marte y Júpiter.
- B. Son pequeños cuerpos rocosos que se mueven en órbitas, sobre todo entre órbitas de Mercurio y Venus.
- C. Son astros luminosos compuestos de polvo y gases helados que se mueven entre órbitas de Marte y Júpiter.
- D. Son grandes cuerpos gaseosos que se mueven en órbitas, sobre todo entre órbitas de Urano y Neptuno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Existen otros componentes del Sistema Solar, como los asteroides que son pequeños cuerpos rocosos que se mueven en órbitas, sobre todo entre órbitas de Marte y Júpiter.>

### 157

De acuerdo con el libro de Física, ¿qué son los cometas y entre qué medidas están comprendidos sus diámetros?

- A. Son astros luminosos compuestos básicamente de polvo y gases helados; sus diámetros están comprendidos entre 5 y 10 km.
- B. Son pequeños cuerpos rocosos compuestos de roca y hierro; sus diámetros están comprendidos entre 5 y 10 km.
- C. Son astros luminosos compuestos básicamente de polvo y gases helados; sus diámetros están comprendidos entre 50 y 100 km.
- D. Son astros luminosos compuestos de hidrógeno, helio y hielo; sus diámetros están comprendidos entre 5 y 10 m.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<Los cometas son astros luminosos que están compuestos básicamente de polvo y gases helados, sus diámetros están comprendidos entre 5 y 10 km.>

### 158

De conformidad con el libro de Física, ¿qué significa en griego la palabra cometa?

- A. Cabellos largos.
- B. Astro errante.
- C. Estrella con cola.
- D. Cuerpo celeste.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<La palabra cometa significa en griego cabellos largos.>

### 159

En relación con el libro de Física, ¿cuándo fue visto a simple vista el cometa Halley, cada cuánto regresa y cuándo será observado nuevamente?

- A. Fue visto en 1986, se regresa al Sistema Solar interior cada 75 años y será observado nuevamente en el año 2061.
- B. Fue visto en 1986, se regresa al Sistema Solar interior cada 27 años y será observado nuevamente en el año 2013.
- C. Fue visto en 1961, se regresa al Sistema Solar interior cada 75 años y será observado nuevamente en el año 2036.
- D. Fue visto en 1948, se regresa al Sistema Solar interior cada 88 años y será observado nuevamente en el año 2036.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 156
**Tema:** U5 t3 · gravitación universal
**Subtema:** física · gravitación universal

<El cometa Halley fue visto a simple vista desde la Tierra en el año de 1986 y se regresa al Sistema Solar interior cada 75 años por lo que será observado nuevamente en el año 2061.>

---

**Reactivos en este archivo:** 159
