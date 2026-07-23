# Biología · Capítulo 11 · La reproducción sexual y las bases cromosómicas de la herencia

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(221 reactivos), 4 (190), 5 (157), 7 (240) y 8 (149).

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros van con `render.py` (su capa de texto es
lorem ipsum). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado antes de escribir.** El temario y el
patrón del Curtis vuelven a desfasar. La Sección III y la portadilla del
capítulo 11 están en la **hoja 254** (página impresa 208); el recuadro
"Biología en contexto social · Distinción entre sexo y género" en la **hoja 256**
(p. 210); y el **cuerpo empieza en la hoja 258** (p. 212). Además el número
impreso corre 1 respecto del desfase +46 en este tramo, así que las páginas se
leyeron de la hoja, no se calcularon.

## Cobertura actual

Cubiertas las páginas impresas **212 a 216 y 218 a 220**: qué es la reproducción
sexual, la meiosis y la fecundación, el cigoto, las dotaciones cromosómicas, los
números de cromosomas por especie, el entrecruzamiento, las fases de la meiosis,
las diferencias entre mitosis y meiosis, el cariotipo y el número cromosómico
humano, la gametogénesis (espermatogénesis y oogénesis), el momento de la meiosis
femenina, autosomas y cromosomas sexuales X/Y, la no disyunción y la
variabilidad genética.

La página 217 es íntegramente la figura 11-6 (fecundación y meiosis en distintos
ciclos de vida): sin cuerpo de texto del que salgan reactivos.

**Pendiente:** del capítulo 11 falta de la página impresa 221 en adelante (hoja 267+): las tres fuentes de variabilidad genética en detalle, el recuadro social de la página 210 y los experimentos de Mendel. De la materia de Biología siguen sin empezar los capítulos 12, 31, 32, 35, 36 y 37.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · Qué es la reproducción sexual (p. 212)

### 1

De acuerdo con el libro de Biología de Curtis, ¿qué produce la reproducción sexual?

- A. Descendencia que tiene características genéticas de los dos progenitores
- B. Descendencia genéticamente idéntica a un único progenitor
- C. Nuevas células por división del material genético
- D. Organismos unicelulares eucariotas por mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

La inmensa mayoría de los organismos eucariontes, como las moscas, los erizos de mar, los peces, los guisantes o arvejas y los seres humanos, se reproducen sexualmente; es decir, producen descendencia que tiene características genéticas de los dos progenitores.

### 2

De acuerdo con el libro de Biología de Curtis, ¿qué proceso involucra la formación de las células sexuales que requiere la reproducción sexual?

- A. La meiosis
- B. La mitosis
- C. La fecundación
- D. La reproducción asexual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

La reproducción sexual requiere la formación de células sexuales, lo cual involucra al proceso de meiosis.

### 3

De acuerdo con el libro de Biología de Curtis, ¿cómo se llama la célula que se origina cuando las células sexuales se reúnen por el proceso de fecundación?

- A. Célula huevo o cigoto
- B. Gameto
- C. Célula somática
- D. Célula haploide

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

Estas células se reúnen por el proceso de fecundación y dan origen a una célula huevo o cigoto.

### 4

De acuerdo con el libro de Biología de Curtis, ¿qué mecanismo es el responsable de la reproducción asexual de los organismos unicelulares eucariotas?

- A. La mitosis
- B. La meiosis
- C. La fecundación
- D. El entrecruzamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

Este mecanismo [la mitosis] es el responsable de la reproducción asexual de los organismos unicelulares eucariotas y de algunos pluricelulares, así como también de la multiplicación de las células en estos últimos.

---

## Sub-lote 2 · El número de cromosomas por especie (p. 212)

### 5

De acuerdo con el libro de Biología de Curtis, ¿cuántos cromosomas tiene un ser humano en cada célula somática?

- A. 46
- B. 38
- C. 20
- D. 6

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un mosquito tiene 6 cromosomas en cada célula somática (del cuerpo); el maíz, 20; un gato, 38; un ser humano, 46; una papa, también 46.

### 6

De acuerdo con el libro de Biología de Curtis, ¿cuántos cromosomas tiene un mosquito en cada célula somática?

- A. 6
- B. 20
- C. 38
- D. 46

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un mosquito tiene 6 cromosomas en cada célula somática (del cuerpo); el maíz, 20; un gato, 38; un ser humano, 46; una papa, también 46.

### 7

De acuerdo con el libro de Biología de Curtis, ¿cuántos cromosomas tiene el maíz en cada célula somática?

- A. 20
- B. 6
- C. 38
- D. 46

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un mosquito tiene 6 cromosomas en cada célula somática (del cuerpo); el maíz, 20; un gato, 38; un ser humano, 46; una papa, también 46.

### 8

De acuerdo con el libro de Biología de Curtis, ¿qué tienen en común el ser humano y la papa respecto de su número de cromosomas?

- A. Ambos tienen 46 cromosomas
- B. Ambos tienen 38 cromosomas
- C. Ambos tienen 20 cromosomas
- D. Ninguno de los dos supera los 6 cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un ser humano, 46; una papa, también 46.

> Los reactivos 5 a 8 comparten la misma lista de cifras vecinas —6, 20, 38, 46—
> como distractores unos de otros. Es un caso ideal de la regla: quien no
> memorizó el número exacto por especie, no acierta.

---

## Sub-lote 3 · Meiosis, fecundación y dotaciones cromosómicas (pp. 212–213)

### 9

De acuerdo con el libro de Biología de Curtis, ¿por qué dos hechos se caracteriza la reproducción sexual?

- A. La meiosis y la unión de los gametos, o fecundación
- B. La mitosis y la unión de los gametos
- C. La meiosis y el entrecruzamiento
- D. La fecundación y la mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · meiosis y fecundación

La reproducción sexual se caracteriza por dos hechos: la meiosis y la unión de los gametos, o fecundación.

### 10

De acuerdo con el libro de Biología de Curtis, ¿qué número de dotación cromosómica tienen las células resultantes de la meiosis?

- A. Una sola dotación cromosómica, o sea, un número haploide (n)
- B. Dos dotaciones cromosómicas, o sea, un número diploide (2n)
- C. Cuatro dotaciones cromosómicas, o sea, un número poliploide
- D. Ninguna dotación cromosómica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · meiosis y fecundación

Las células resultantes de la meiosis tienen una sola dotación cromosómica, o sea, un número haploide de cromosomas (n).

### 11

De acuerdo con el libro de Biología de Curtis, ¿qué permite el entrecruzamiento?

- A. La recombinación del material genético de los dos progenitores
- B. La duplicación exacta del material genético
- C. La reducción del número de cromosomas a la mitad
- D. La unión de los gametos en el cigoto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · entrecruzamiento

El entrecruzamiento es un mecanismo crucial que permite la recombinación del material genético de los dos progenitores, un hecho de enormes consecuencias para el proceso evolutivo.

### 12

De acuerdo con el libro de Biología de Curtis, ¿en cuántas divisiones nucleares sucesivas consiste la meiosis?

- A. En dos divisiones nucleares sucesivas
- B. En una sola división nuclear
- C. En cuatro divisiones nucleares sucesivas
- D. En ocho divisiones nucleares sucesivas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · meiosis

Al igual que la mitosis, la meiosis es un proceso continuo en el que se pueden reconocer una serie de etapas características. Consiste en dos divisiones nucleares sucesivas.

---

## Sub-lote 4 · Las fases de la primera división meiótica (fig. 11-4, p. 214)

### 13

De acuerdo con el libro de Biología de Curtis, durante la profase I de la meiosis, ¿qué ocurre con la cromatina?

- A. Se condensa y los cromosomas se hacen visibles con el microscopio óptico
- B. Se descondensa y desaparece del núcleo
- C. Se duplica sin condensarse
- D. Se alinea en el plano ecuatorial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

Profase I: la cromatina se condensa y los cromosomas se hacen visibles con el microscopio óptico.

### 14

De acuerdo con el libro de Biología de Curtis, ¿cómo se llaman los puntos de entrecruzamiento donde los cromosomas homólogos permanecen en íntima asociación hasta el fin de la profase?

- A. Quiasmas
- B. Cinetocoros
- C. Centrómeros
- D. Ásteres

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

A medida que avanza la profase, los homólogos de cada par comienzan a separarse entre sí, excepto en los puntos de entrecruzamiento o quiasmas, donde permanecen en íntima asociación hasta el fin de la profase.

### 15

De acuerdo con el libro de Biología de Curtis, ¿qué distingue a la metafase I de la meiosis respecto de la metafase de la mitosis?

- A. Los pares de homólogos se alinean en el plano ecuatorial, a diferencia de la mitosis, donde los cromosomas duplicados se disponen sin apareamiento de los homólogos
- B. Los cromosomas se disponen en el plano ecuatorial sin apareamiento
- C. Las cromátidas hermanas se separan hacia los polos
- D. La cromatina se condensa por primera vez

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

Metafase I: los pares de homólogos se alinean en el plano ecuatorial, a diferencia de la metafase de la mitosis, en la que los cromosomas duplicados se disponen en el plano ecuatorial sin apareamiento de los homólogos.

### 16

De acuerdo con el libro de Biología de Curtis, durante la anafase I de la meiosis, ¿qué ocurre con las dos cromátidas hermanas de cada homólogo?

- A. No se separan como ocurre en la mitosis, sino que permanecen juntas
- B. Se separan una de otra, como en la mitosis
- C. Se duplican hacia los polos
- D. Se alinean en el plano ecuatorial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

Anafase I: los homólogos, cada uno formado por dos cromátidas hermanas, se separan como si fueran tironeados por las fibras del huso unidas a los cinetocoros. Sin embargo, las dos cromátidas hermanas de cada homólogo no se separan como ocurre en la mitosis, sino que permanecen juntas.

### 17

De acuerdo con el libro de Biología de Curtis, en la anafase II de la meiosis, ¿cómo puede llamarse cada cromátida cuando se separa y se mueve hacia uno de los polos?

- A. Cromosoma
- B. Homólogo
- C. Quiasma
- D. Cinetocoro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 215
**Subtema:** reproducción sexual · fases de la meiosis

Anafase II. Al igual que en la anafase de la mitosis, las cromátidas se separan una de otra. Cada cromátida, que ahora puede ser llamada cromosoma, se mueve hacia uno de los polos.

---

## Sub-lote 5 · Mitosis y meiosis: procesos similares, pero diferentes (p. 215)

### 18

De acuerdo con el libro de Biología de Curtis, ¿cuántas veces se divide cada núcleo diploide durante la meiosis y cuántos núcleos produce?

- A. Se divide dos veces y produce cuatro núcleos
- B. Se divide una vez y produce dos núcleos
- C. Se divide cuatro veces y produce ocho núcleos
- D. Se divide dos veces y produce dos núcleos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 215
**Subtema:** reproducción sexual · mitosis y meiosis

Durante la meiosis, cada núcleo diploide se divide dos veces y produce cuatro núcleos.

### 19

De acuerdo con el libro de Biología de Curtis, ¿de qué depende que uno de los gametos contenga un cromosoma procedente de uno u otro progenitor?

- A. Exclusivamente del azar
- B. Del número de quiasmas formados
- C. De la cantidad de cromátidas hermanas
- D. Del orden de las fases de la meiosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 215
**Subtema:** reproducción sexual · mitosis y meiosis

El hecho de que uno de los gametos contenga un cromosoma procedente de uno u otro progenitor depende exclusivamente del azar. Este proceso azaroso hace que los núcleos haploides producidos por la meiosis contengan nuevas combinaciones de cromosomas.

---

## Sub-lote 6 · Diferencias entre mitosis y meiosis (p. 216)

### 20

De acuerdo con el libro de Biología de Curtis, ¿en qué tipo de células puede ocurrir la mitosis y en cuáles la meiosis?

- A. La mitosis en células haploides o diploides; la meiosis solo en células con número diploide o poliploide
- B. La mitosis solo en células diploides; la meiosis en cualquier célula
- C. Ambas ocurren únicamente en células diploides
- D. La mitosis solo en células haploides; la meiosis solo en diploides

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

La mitosis puede ocurrir en las células haploides o diploides, mientras que la meiosis ocurre solo en aquellas células con un número diploide (o poliploide) de cromosomas.

### 21

De acuerdo con el libro de Biología de Curtis, ¿cuántas veces se duplican los cromosomas antes de la primera división nuclear en la meiosis, y qué contiene cada núcleo hijo?

- A. Se duplican solo una vez, y cada núcleo hijo contiene la mitad del número de cromosomas del núcleo original
- B. Se duplican dos veces, y cada núcleo hijo contiene el mismo número de cromosomas
- C. No se duplican, y cada núcleo hijo contiene el doble de cromosomas
- D. Se duplican una vez, y cada núcleo hijo mantiene invariable el número de cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

Los cromosomas se duplican solo una vez antes de la primera división nuclear. Por lo tanto, cada uno de los cuatro núcleos hijos contiene la mitad del número de cromosomas presentes en el núcleo original.

### 22

De acuerdo con el libro de Biología de Curtis, ¿qué ocurre con el número de cromosomas en la mitosis después de la duplicación de los cromosomas?

- A. Se mantiene invariable, porque cada núcleo se divide solo una vez
- B. Se reduce a la mitad, porque el núcleo se divide dos veces
- C. Se duplica en cada división
- D. Varía según el número de quiasmas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

En la mitosis, en cambio, después de la duplicación de los cromosomas cada núcleo se divide solo una vez. En consecuencia, el número de cromosomas se mantiene invariable.

### 23

De acuerdo con el libro de Biología de Curtis, ¿qué sucesos de la meiosis, que no se producen durante la mitosis, son la clave de la reducción del número cromosómico?

- A. El apareamiento de los homólogos en la profase I, su alineamiento en la metafase I y su separación en la anafase I
- B. La separación de las cromátidas hermanas en la anafase
- C. La duplicación de los cromosomas antes de cada división
- D. La desintegración de la envoltura nuclear en la profase

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

Durante la profase I de la meiosis se produce el apareamiento de los cromosomas homólogos, seguido del alineamiento de los pares de homólogos en el plano ecuatorial en la metafase I y de la separación de los homólogos en la anafase I. Estos sucesos, que no se producen durante la mitosis, son la clave de la reducción del número cromosómico.

---

## Sub-lote 7 · Cariotipo y número cromosómico humano (p. 218)

### 24

De acuerdo con el libro de Biología de Curtis, ¿cómo se denomina el ordenamiento sistematizado de los cromosomas?

- A. Cariotipo
- B. Genotipo
- C. Cromatina
- D. Fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · cariotipo

El ordenamiento sistematizado de los cromosomas se denomina cariotipo.

### 25

De acuerdo con el libro de Biología de Curtis, ¿cuál es el número haploide de cromosomas en la especie humana?

- A. 23
- B. 46
- C. 22
- D. 47

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · cariotipo

En la especie humana, el número diploide de cromosomas es, con mayor frecuencia, 46 y el número haploide es 23.

---

## Sub-lote 8 · Espermatogénesis y oogénesis (p. 218)

### 26

De acuerdo con el libro de Biología de Curtis, ¿en qué se diferenciará luego cada una de las cuatro espermátides producidas?

- A. En un espermatozoide
- B. En un oocito primario
- C. En un cuerpo polar
- D. En un óvulo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

Cada una de las cuatro espermátides producidas luego se diferenciará en un espermatozoide.

### 27

De acuerdo con el libro de Biología de Curtis, ¿cómo se llaman las células diploides de la hembra que sufren la división meiótica?

- A. Oocitos primarios
- B. Espermatocitos secundarios
- C. Espermátides
- D. Cuerpos polares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

En la hembra, las células diploides que sufren la división meiótica se llaman oocitos primarios.

### 28

De acuerdo con el libro de Biología de Curtis, ¿cuántos óvulos se forman de cada oocito primario y qué más se produce?

- A. Un solo óvulo, junto con dos o tres cuerpos polares
- B. Cuatro óvulos, sin cuerpos polares
- C. Dos óvulos y dos cuerpos polares
- D. Un óvulo y cuatro espermátides

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

De cada oocito primario solo se forma un óvulo, junto con dos o tres cuerpos polares. Los cuerpos polares contienen los otros núcleos resultantes de la meiosis que, habitualmente, se desintegran.

### 29

De acuerdo con el libro de Biología de Curtis, ¿por qué el óvulo está bien provisto de ribosomas, mitocondrias, enzimas y nutrientes?

- A. Como resultado de la división desigual del citoplasma durante la citocinesis
- B. Porque recibe el citoplasma de los cuatro núcleos por igual
- C. Porque los cuerpos polares le aportan sus nutrientes
- D. Porque no experimenta la segunda división meiótica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

Como resultado de esta división desigual del citoplasma, el óvulo está bien provisto de ribosomas, mitocondrias, enzimas, nutrientes almacenados y gran cantidad de moléculas, como el ARN, importantes para el desarrollo del embrión.

---

## Sub-lote 9 · El momento de la meiosis femenina (fig. 11-11, p. 219)

### 30

De acuerdo con el libro de Biología de Curtis, ¿cuándo comienza y hasta cuándo queda detenida la primera división meiótica en la mujer?

- A. Comienza durante el tercer mes de su desarrollo fetal y queda detenida en la profase I hasta la ovulación durante la pubertad
- B. Comienza en la pubertad y queda detenida en la metafase I hasta la ovulación
- C. Comienza al nacer y se completa antes del primer mes de vida
- D. Comienza y termina durante el tercer mes de desarrollo fetal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 219
**Subtema:** reproducción sexual · gametogénesis

La primera división meiótica comienza, en la mujer, durante el tercer mes de su desarrollo fetal y queda detenida en la profase I hasta que se produce la ovulación durante la pubertad.

### 31

De acuerdo con el libro de Biología de Curtis, ¿cuándo ocurre la segunda división meiótica que produce el óvulo?

- A. No ocurre hasta que el espermatozoide fecundante haya penetrado en el oocito secundario
- B. Ocurre inmediatamente después de la primera división meiótica
- C. Ocurre durante el tercer mes del desarrollo fetal
- D. Ocurre al comienzo de la pubertad, junto con la ovulación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 219
**Subtema:** reproducción sexual · gametogénesis

La segunda división meiótica, que produce el óvulo y un segundo corpúsculo polar, no ocurre hasta que el espermatozoide fecundante haya penetrado en el oocito secundario.

---

## Sub-lote 10 · Autosomas y cromosomas sexuales (p. 220)

### 32

De acuerdo con el libro de Biología de Curtis, ¿cómo se llaman los cromosomas cuyos dos miembros del par portan el mismo tipo de información?

- A. Autosomas
- B. Cromosomas sexuales
- C. Cromosomas homólogos
- D. Cromátidas hermanas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

En cada uno de los pares de cromosomas, excepto en uno, los dos miembros del par tienen los mismos tipos de genes; es decir, portan el mismo tipo de información. Estos cromosomas son los autosomas.

### 33

De acuerdo con el libro de Biología de Curtis, ¿cómo se denomina el cromosoma sexual que comparten ambos sexos?

- A. El cromosoma X
- B. El cromosoma Y
- C. El autosoma
- D. El cromosoma homólogo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

El cromosoma que comparten ambos sexos se llama cromosoma X y el diferente se denomina cromosoma Y.

### 34

De acuerdo con el libro de Biología de Curtis, ¿cuál es, con mayor frecuencia, el par de cromosomas sexuales de la hembra y del macho?

- A. En la hembra XX y en el macho XY
- B. En la hembra XY y en el macho XX
- C. En ambos XX
- D. En ambos XY

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

El par de cromosomas sexuales de la hembra es con mayor frecuencia XX, mientras que el de los machos con mayor frecuencia es XY.

### 35

De acuerdo con el libro de Biología de Curtis, ¿cómo son entre sí los dos cromosomas sexuales en el hombre?

- A. Diferentes: uno es igual al par sexual de la mujer y el otro es mucho más pequeño
- B. Morfológicamente iguales, como en la mujer
- C. Ambos más pequeños que los autosomas
- D. Idénticos a los autosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

En las mujeres, los dos cromosomas sexuales son morfológicamente iguales, pero en los hombres son diferentes. Uno de los cromosomas sexuales del hombre es igual a los que constituyen el par sexual de la mujer, pero el otro es mucho más pequeño.

---

## Sub-lote 11 · No disyunción y variabilidad genética (p. 220)

### 36

De acuerdo con el libro de Biología de Curtis, ¿cómo se denomina el fenómeno en el que los cromosomas homólogos o sus cromátidas no se separan del modo normal durante la meiosis o la mitosis?

- A. No disyunción de los cromosomas
- B. Entrecruzamiento
- C. Segregación al azar
- D. Recombinación cromosómica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · no disyunción

En ciertas ocasiones, los cromosomas homólogos o sus cromátidas no se separan del modo ya descrito durante la meiosis o la mitosis. Este fenómeno se denomina no disyunción de los cromosomas.

### 37

De acuerdo con el libro de Biología de Curtis, ¿qué da como resultado la no disyunción?

- A. Gametos con uno o más cromosomas faltantes o sobrantes
- B. Gametos genéticamente idénticos al progenitor
- C. La duplicación del número de cromosomas en cada gameto
- D. La recombinación del material genético de los progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · no disyunción

En cualquier caso, la no disyunción da como resultado gametos con uno o más cromosomas faltantes o sobrantes.

### 38

De acuerdo con el libro de Biología de Curtis, ¿cómo son genéticamente los individuos producidos en forma asexual respecto de sus progenitores?

- A. Genéticamente idénticos, salvo que ocurra algún tipo de mutación
- B. Con enorme potencial para la variabilidad genética
- C. Con la mitad del material genético del progenitor
- D. Diferentes por efecto del entrecruzamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · variabilidad genética

Debido al proceso de duplicación cromosómica que ocurre en la mitosis, los individuos producidos en forma asexual son genéticamente idénticos a sus progenitores, salvo que ocurra algún tipo de mutación. En contraste, en los individuos producidos sexualmente, el potencial para la variabilidad genética es enorme.

### 39

De acuerdo con el libro de Biología de Curtis, ¿cuántos procesos fundamentales funcionan como fuentes de variabilidad genética en las especies de reproducción sexual?

- A. Tres
- B. Dos
- C. Cuatro
- D. Ocho

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · variabilidad genética

En las especies de reproducción sexual pueden reconocerse tres procesos fundamentales que ocurren durante la meiosis y la fecundación, y que funcionan como fuentes de variabilidad genética.

---

**Reactivos en este archivo:** 39
