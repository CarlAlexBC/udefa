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

## Cobertura actual · CAPÍTULO 11 CERRADO

**Capítulo cerrado en 162 reactivos** (decisión de Carlo, 23 jul 2026). La teoría
evaluable del capítulo (pp. 212-240) está completa, más el Ensayo 11-1 del síndrome
de Down (p. 221). Lo que se dejó fuera a propósito está al final de este encabezado.

Cubiertas las páginas impresas **212 a 216 y 218 a 230**, más los temas de la
Sección III de las páginas **232 a 240** (teoría cromosómica, Morgan, el sexo
biológico y los cromosomas X/Y, interacciones entre alelos, la herencia poligénica
y la interacción genes-ambiente): qué es la reproducción
sexual, la meiosis y la fecundación, el cigoto, las dotaciones cromosómicas, los
números de cromosomas por especie, el entrecruzamiento, las fases de la meiosis,
las diferencias entre mitosis y meiosis, el cariotipo y el número cromosómico
humano, la gametogénesis (espermatogénesis y oogénesis), el momento de la meiosis
femenina, autosomas y cromosomas sexuales X/Y, la no disyunción, la
variabilidad genética, la transferencia horizontal y vertical de genes, y los
experimentos de Mendel: quién fue, qué demostró y su método experimental con el
guisante *Pisum sativum*, el diseño de sus cruzamientos (hibridación, generaciones
P/F1/F2, líneas puras), los caracteres dominantes y recesivos con la relación 3:1,
la primera ley de Mendel o principio de segregación, y el vocabulario genético
moderno: genotipo, fenotipo, alelos, homocigosis y heterocigosis, dominancia, el
tablero de Punnett, la segregación de los alelos con la relación genotípica 1:2:1
y el cruzamiento de prueba o *test cross* (figuras 11-17, 11-18 y 11-19), el
cruzamiento dihíbrido y la segunda ley de Mendel o
principio de distribución independiente con su relación 9:3:3:1, y la teoría
cromosómica de Sutton (el término *elemente*, el gen en los cromosomas). A eso se
suma, de las páginas 232 y 235-238, el cierre de la teoría cromosómica (la "edad de
oro", la controversia sobre los genes en los cromosomas y la prioridad del artículo
de Sutton) y el trabajo de Morgan: la mosca *Drosophila melanogaster* y sus
ventajas, sus cuatro pares de cromosomas (2n=8), la mosca mutante de ojos blancos y
las características ligadas al sexo, los cruces recíprocos de las figuras 11-28 y
11-29, y Müller con los mutágenos y el ligamiento entre genes. De las páginas
237-239 se cubren, además, las interacciones entre alelos: la dominancia incompleta
(el *Antirrhinum* rosado de Bateson y Punnett, fig. 11-30), la codominancia con los
grupos sanguíneos (los tres alelos I^A, I^B e i; los genotipos AB e 0; los
antígenos) y los alelos múltiples (el pelaje del conejo, fig. 11-31). De las
páginas 233-234 se cubre también el sexo biológico: qué es y sus categorías
(cromosómico, hormonal, gonadal), los cromosomas sexuales con el macho
heterogamético y la hembra homogamética (el saltamontes X0, la inversión en aves y
mariposas) y la determinación cromosómica del sexo en la meiosis (fig. 11-25: el
espermatozoide X o Y define el sexo, las variantes X0/XXY/XXX). Y de las páginas
239-240, la herencia poligénica y la variación continua (la curva de campana de la
altura, fig. 11-32) y la interacción entre los genes y el ambiente (la plántula, el
ranúnculo de agua, las prímulas, los conejos himalayos y los gatos siameses,
fig. 11-33; el principio de que el fenotipo resulta de la interacción genes-ambiente).
Por último, del **Ensayo 11-1 (p. 221)** se cubre el síndrome de Down: Down y la
descripción de 1866, Lejeune (1958) y la trisomía del par 21, el nombre "trisomía
21", el cambio de nomenclatura de la OMS en 1965, las patologías por el cromosoma
extranumerario y el aumento de la esperanza de vida.

Las páginas 217 y 219 son íntegramente figuras (11-6, 11-10 y 11-11), y la 222
trae la biografía de Mendel de la que sí salieron reactivos. De las figuras 11-17,
11-18 y 11-19 (pp. 227-228 — segregación de alelos, principio de segregación con
la relación 1:2:1 y el cruzamiento de prueba) sí salieron reactivos: son un bolsón
que el chat anterior había saltado entre la 227 y la 228, ya cubierto.

**Sobre el nombre de las unidades de Mendel:** resuelto. Se recortó a 550 dpi
(`crop.py`, hoja 276) y el libro escribe *elemente*, en cursiva; aparece así tres
veces (pp. 222, 229 y 230). Sí se escribieron reactivos con ese término (80 y 83).

**Lo que se dejó fuera a propósito (capítulo cerrado en la p. 243):** no se
convirtió en reactivos, y no por olvido:

- El **ensayo social "Distinción entre sexo y género"** (recuadro p. 210 + cierre
  en la p. 241): es texto argumentativo, no recuerdo literal, y es tema delicado.
- Los **Ensayos 11-2** ("Concepciones acerca de la herencia", pp. 222-223),
  **11-3** ("¿Qué estudiaba Mendel en el jardín de la abadía?", p. 231) y **11-4**
  ("Diversidad sexual de los cuerpos. Intersexualidad", p. 235): son ensayos
  discursivos; el 11-4, además, es sensible.
- El **Cuestionario / Situaciones problemáticas** (pp. 242-243): son problemas de
  aplicación (contar cromosomas y cromátidas, cruces para deducir genotipos,
  genealogías de hemofilia, grupos sanguíneos en un juicio de paternidad, etc.), y
  el examen cultural es teórico, no práctico.
- Del sexo biológico quedó sin reactivo propio el **sexo genital** (la cuarta
  categoría, p. 234), por ser la definición más escueta; vive como distractor.

El capítulo 11 termina en la p. 243 (la 244 en blanco, la 245 abre el capítulo 12,
"El flujo de información genética").

**Pendiente:** ninguno. El capítulo 11 está cerrado en 162 reactivos (23 jul 2026); lo que se dejó fuera a propósito está detallado arriba. Lo que falta de Biología lo declara el archivo del capítulo en curso — hoy, el capítulo 12 (`biologia-12-flujo-informacion-genetica.md`).

> **No renombres ni partas en viñetas este `**Pendiente:**`.** El generador de
> `ESTADO.md` busca la cadena exacta y toma el párrafo que le sigue hasta el primer
> renglón en blanco; si desaparece, Biología se reporta como cerrada, y un pendiente
> que empieza con "ninguno" también la cierra. Por eso el último capítulo escrito
> sostiene, en un solo párrafo, la lista de los que faltan.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · Qué es la reproducción sexual (p. 212)

### 1

De acuerdo con el libro de Biología, ¿qué produce la reproducción sexual?

- A. Descendencia que tiene características genéticas de los dos progenitores
- B. Descendencia genéticamente idéntica a un único progenitor
- C. Nuevas células por división del material genético
- D. Organismos unicelulares eucariotas por mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

La inmensa mayoría de los organismos eucariontes, como las moscas, los erizos de mar, los peces, los guisantes o arvejas y los seres humanos, se reproducen sexualmente; es decir, producen descendencia que tiene características genéticas de los dos progenitores.

### 2

De acuerdo con el libro de Biología, ¿qué proceso involucra la formación de las células sexuales que requiere la reproducción sexual?

- A. La meiosis
- B. La mitosis
- C. La fecundación
- D. La reproducción asexual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

La reproducción sexual requiere la formación de células sexuales, lo cual involucra al proceso de meiosis.

### 3

De acuerdo con el libro de Biología, ¿cómo se llama la célula que se origina cuando las células sexuales se reúnen por el proceso de fecundación?

- A. Célula huevo o cigoto
- B. Gameto
- C. Célula somática
- D. Célula haploide

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · generalidades

Estas células se reúnen por el proceso de fecundación y dan origen a una célula huevo o cigoto.

### 4

De acuerdo con el libro de Biología, ¿qué mecanismo es el responsable de la reproducción asexual de los organismos unicelulares eucariotas?

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
De acuerdo con el libro de Biología, ¿cuántos cromosomas tiene un ser humano en cada célula somática?
- A. 46
- B. 38
- C. 20
- D. 6

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un mosquito tiene 6 cromosomas en cada célula somática (del cuerpo); el maíz, 20; un gato, 38; un ser humano, 46; una papa, también 46.

### 6
De acuerdo con el libro de Biología, ¿cuántos cromosomas tiene un mosquito en cada célula somática?
- A. 6
- B. 20
- C. 38
- D. 46

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un mosquito tiene 6 cromosomas en cada célula somática (del cuerpo); el maíz, 20; un gato, 38; un ser humano, 46; una papa, también 46.

### 7
De acuerdo con el libro de Biología, ¿cuántos cromosomas tiene el maíz en cada célula somática?
- A. 20
- B. 6
- C. 38
- D. 46

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 212
**Subtema:** reproducción sexual · número de cromosomas

Un mosquito tiene 6 cromosomas en cada célula somática (del cuerpo); el maíz, 20; un gato, 38; un ser humano, 46; una papa, también 46.

### 8

De acuerdo con el libro de Biología, ¿qué tienen en común el ser humano y la papa respecto de su número de cromosomas?

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

De acuerdo con el libro de Biología, ¿por qué dos hechos se caracteriza la reproducción sexual?

- A. La meiosis y la unión de los gametos, o fecundación
- B. La mitosis y la unión de los gametos
- C. La meiosis y el entrecruzamiento
- D. La fecundación y la mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · meiosis y fecundación

La reproducción sexual se caracteriza por dos hechos: la meiosis y la unión de los gametos, o fecundación.

### 10

De acuerdo con el libro de Biología, ¿qué número de dotación cromosómica tienen las células resultantes de la meiosis?

- A. Una sola dotación cromosómica, o sea, un número haploide (n)
- B. Dos dotaciones cromosómicas, o sea, un número diploide (2n)
- C. Cuatro dotaciones cromosómicas, o sea, un número poliploide
- D. Ninguna dotación cromosómica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · meiosis y fecundación

Las células resultantes de la meiosis tienen una sola dotación cromosómica, o sea, un número haploide de cromosomas (n).

### 11

De acuerdo con el libro de Biología, ¿qué permite el entrecruzamiento?

- A. La recombinación del material genético de los dos progenitores
- B. La duplicación exacta del material genético
- C. La reducción del número de cromosomas a la mitad
- D. La unión de los gametos en el cigoto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 213
**Subtema:** reproducción sexual · entrecruzamiento

El entrecruzamiento es un mecanismo crucial que permite la recombinación del material genético de los dos progenitores, un hecho de enormes consecuencias para el proceso evolutivo.

### 12

De acuerdo con el libro de Biología, ¿en cuántas divisiones nucleares sucesivas consiste la meiosis?

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

De acuerdo con el libro de Biología, durante la profase I de la meiosis, ¿qué ocurre con la cromatina?

- A. Se condensa y los cromosomas se hacen visibles con el microscopio óptico
- B. Se descondensa y desaparece del núcleo
- C. Se duplica sin condensarse
- D. Se alinea en el plano ecuatorial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

Profase I: la cromatina se condensa y los cromosomas se hacen visibles con el microscopio óptico.

### 14

De acuerdo con el libro de Biología, ¿cómo se llaman los puntos de entrecruzamiento donde los cromosomas homólogos permanecen en íntima asociación hasta el fin de la profase?

- A. Quiasmas
- B. Cinetocoros
- C. Centrómeros
- D. Ásteres

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

A medida que avanza la profase, los homólogos de cada par comienzan a separarse entre sí, excepto en los puntos de entrecruzamiento o quiasmas, donde permanecen en íntima asociación hasta el fin de la profase.

### 15

De acuerdo con el libro de Biología, ¿qué distingue a la metafase I de la meiosis respecto de la metafase de la mitosis?

- A. Los pares de homólogos se alinean en el plano ecuatorial, a diferencia de la mitosis, donde los cromosomas duplicados se disponen sin apareamiento de los homólogos
- B. Los cromosomas se disponen en el plano ecuatorial sin apareamiento
- C. Las cromátidas hermanas se separan hacia los polos
- D. La cromatina se condensa por primera vez

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

Metafase I: los pares de homólogos se alinean en el plano ecuatorial, a diferencia de la metafase de la mitosis, en la que los cromosomas duplicados se disponen en el plano ecuatorial sin apareamiento de los homólogos.

### 16

De acuerdo con el libro de Biología, durante la anafase I de la meiosis, ¿qué ocurre con las dos cromátidas hermanas de cada homólogo?

- A. No se separan como ocurre en la mitosis, sino que permanecen juntas
- B. Se separan una de otra, como en la mitosis
- C. Se duplican hacia los polos
- D. Se alinean en el plano ecuatorial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 214
**Subtema:** reproducción sexual · fases de la meiosis

Anafase I: los homólogos, cada uno formado por dos cromátidas hermanas, se separan como si fueran tironeados por las fibras del huso unidas a los cinetocoros. Sin embargo, las dos cromátidas hermanas de cada homólogo no se separan como ocurre en la mitosis, sino que permanecen juntas.

### 17

De acuerdo con el libro de Biología, en la anafase II de la meiosis, ¿cómo puede llamarse cada cromátida cuando se separa y se mueve hacia uno de los polos?

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
De acuerdo con el libro de Biología, ¿cuántas veces se divide cada núcleo diploide durante la meiosis y cuántos núcleos produce?
- A. Se divide dos veces y produce cuatro núcleos
- B. Se divide una vez y produce dos núcleos
- C. Se divide cuatro veces y produce ocho núcleos
- D. Se divide dos veces y produce dos núcleos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 215
**Subtema:** reproducción sexual · mitosis y meiosis

Durante la meiosis, cada núcleo diploide se divide dos veces y produce cuatro núcleos.

### 19

De acuerdo con el libro de Biología, ¿de qué depende que uno de los gametos contenga un cromosoma procedente de uno u otro progenitor?

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

De acuerdo con el libro de Biología, ¿en qué tipo de células puede ocurrir la mitosis y en cuáles la meiosis?

- A. La mitosis en células haploides o diploides; la meiosis solo en células con número diploide o poliploide
- B. La mitosis solo en células diploides; la meiosis en cualquier célula
- C. Ambas ocurren únicamente en células diploides
- D. La mitosis solo en células haploides; la meiosis solo en diploides

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

La mitosis puede ocurrir en las células haploides o diploides, mientras que la meiosis ocurre solo en aquellas células con un número diploide (o poliploide) de cromosomas.

### 21
De acuerdo con el libro de Biología, ¿cuántas veces se duplican los cromosomas antes de la primera división nuclear en la meiosis, y qué contiene cada núcleo hijo?
- A. Se duplican solo una vez, y cada núcleo hijo contiene la mitad del número de cromosomas del núcleo original
- B. Se duplican dos veces, y cada núcleo hijo contiene el mismo número de cromosomas
- C. No se duplican, y cada núcleo hijo contiene el doble de cromosomas
- D. Se duplican una vez, y cada núcleo hijo mantiene invariable el número de cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

Los cromosomas se duplican solo una vez antes de la primera división nuclear. Por lo tanto, cada uno de los cuatro núcleos hijos contiene la mitad del número de cromosomas presentes en el núcleo original.

### 22

De acuerdo con el libro de Biología, ¿qué ocurre con el número de cromosomas en la mitosis después de la duplicación de los cromosomas?

- A. Se mantiene invariable, porque cada núcleo se divide solo una vez
- B. Se reduce a la mitad, porque el núcleo se divide dos veces
- C. Se duplica en cada división
- D. Varía según el número de quiasmas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 216
**Subtema:** reproducción sexual · mitosis y meiosis

En la mitosis, en cambio, después de la duplicación de los cromosomas cada núcleo se divide solo una vez. En consecuencia, el número de cromosomas se mantiene invariable.

### 23

De acuerdo con el libro de Biología, ¿qué sucesos de la meiosis, que no se producen durante la mitosis, son la clave de la reducción del número cromosómico?

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

De acuerdo con el libro de Biología, ¿cómo se denomina el ordenamiento sistematizado de los cromosomas?

- A. Cariotipo
- B. Genotipo
- C. Cromatina
- D. Fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · cariotipo

El ordenamiento sistematizado de los cromosomas se denomina cariotipo.

### 25

De acuerdo con el libro de Biología, ¿cuál es el número haploide de cromosomas en la especie humana?

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

De acuerdo con el libro de Biología, ¿en qué se diferenciará luego cada una de las cuatro espermátides producidas?

- A. En un espermatozoide
- B. En un oocito primario
- C. En un cuerpo polar
- D. En un óvulo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

Cada una de las cuatro espermátides producidas luego se diferenciará en un espermatozoide.

### 27

De acuerdo con el libro de Biología, ¿cómo se llaman las células diploides de la hembra que sufren la división meiótica?

- A. Oocitos primarios
- B. Espermatocitos secundarios
- C. Espermátides
- D. Cuerpos polares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

En la hembra, las células diploides que sufren la división meiótica se llaman oocitos primarios.

### 28
De acuerdo con el libro de Biología, ¿cuántos óvulos se forman de cada oocito primario y qué más se produce?
- A. Un solo óvulo, junto con dos o tres cuerpos polares
- B. Cuatro óvulos, sin cuerpos polares
- C. Dos óvulos y dos cuerpos polares
- D. Un óvulo y cuatro espermátides

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 218
**Subtema:** reproducción sexual · gametogénesis

De cada oocito primario solo se forma un óvulo, junto con dos o tres cuerpos polares. Los cuerpos polares contienen los otros núcleos resultantes de la meiosis que, habitualmente, se desintegran.

### 29

De acuerdo con el libro de Biología, ¿por qué el óvulo está bien provisto de ribosomas, mitocondrias, enzimas y nutrientes?

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

De acuerdo con el libro de Biología, ¿cuándo comienza y hasta cuándo queda detenida la primera división meiótica en la mujer?

- A. Comienza durante el tercer mes de su desarrollo fetal y queda detenida en la profase I hasta la ovulación durante la pubertad
- B. Comienza en la pubertad y queda detenida en la metafase I hasta la ovulación
- C. Comienza al nacer y se completa antes del primer mes de vida
- D. Comienza y termina durante el tercer mes de desarrollo fetal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 219
**Subtema:** reproducción sexual · gametogénesis

La primera división meiótica comienza, en la mujer, durante el tercer mes de su desarrollo fetal y queda detenida en la profase I hasta que se produce la ovulación durante la pubertad.

### 31

De acuerdo con el libro de Biología, ¿cuándo ocurre la segunda división meiótica que produce el óvulo?

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

De acuerdo con el libro de Biología, ¿cómo se llaman los cromosomas cuyos dos miembros del par portan el mismo tipo de información?

- A. Autosomas
- B. Cromosomas sexuales
- C. Cromosomas homólogos
- D. Cromátidas hermanas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

En cada uno de los pares de cromosomas, excepto en uno, los dos miembros del par tienen los mismos tipos de genes; es decir, portan el mismo tipo de información. Estos cromosomas son los autosomas.

### 33

De acuerdo con el libro de Biología, ¿cómo se denomina el cromosoma sexual que comparten ambos sexos?

- A. El cromosoma X
- B. El cromosoma Y
- C. El autosoma
- D. El cromosoma homólogo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

El cromosoma que comparten ambos sexos se llama cromosoma X y el diferente se denomina cromosoma Y.

### 34

De acuerdo con el libro de Biología, ¿cuál es, con mayor frecuencia, el par de cromosomas sexuales de la hembra y del macho?

- A. En la hembra XX y en el macho XY
- B. En la hembra XY y en el macho XX
- C. En ambos XX
- D. En ambos XY

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · autosomas y sexuales

El par de cromosomas sexuales de la hembra es con mayor frecuencia XX, mientras que el de los machos con mayor frecuencia es XY.

### 35

De acuerdo con el libro de Biología, ¿cómo son entre sí los dos cromosomas sexuales en el hombre?

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

De acuerdo con el libro de Biología, ¿cómo se denomina el fenómeno en el que los cromosomas homólogos o sus cromátidas no se separan del modo normal durante la meiosis o la mitosis?

- A. No disyunción de los cromosomas
- B. Entrecruzamiento
- C. Segregación al azar
- D. Recombinación cromosómica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · no disyunción

En ciertas ocasiones, los cromosomas homólogos o sus cromátidas no se separan del modo ya descrito durante la meiosis o la mitosis. Este fenómeno se denomina no disyunción de los cromosomas.

### 37

De acuerdo con el libro de Biología, ¿qué da como resultado la no disyunción?

- A. Gametos con uno o más cromosomas faltantes o sobrantes
- B. Gametos genéticamente idénticos al progenitor
- C. La duplicación del número de cromosomas en cada gameto
- D. La recombinación del material genético de los progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · no disyunción

En cualquier caso, la no disyunción da como resultado gametos con uno o más cromosomas faltantes o sobrantes.

### 38

De acuerdo con el libro de Biología, ¿cómo son genéticamente los individuos producidos en forma asexual respecto de sus progenitores?

- A. Genéticamente idénticos, salvo que ocurra algún tipo de mutación
- B. Con enorme potencial para la variabilidad genética
- C. Con la mitad del material genético del progenitor
- D. Diferentes por efecto del entrecruzamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · variabilidad genética

Debido al proceso de duplicación cromosómica que ocurre en la mitosis, los individuos producidos en forma asexual son genéticamente idénticos a sus progenitores, salvo que ocurra algún tipo de mutación. En contraste, en los individuos producidos sexualmente, el potencial para la variabilidad genética es enorme.

### 39
De acuerdo con el libro de Biología, ¿cuántos procesos fundamentales funcionan como fuentes de variabilidad genética en las especies de reproducción sexual?
- A. Tres
- B. Dos
- C. Cuatro
- D. Ocho

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 220
**Subtema:** reproducción sexual · variabilidad genética

En las especies de reproducción sexual pueden reconocerse tres procesos fundamentales que ocurren durante la meiosis y la fecundación, y que funcionan como fuentes de variabilidad genética.

---

## Sub-lote 12 · Transferencia horizontal y vertical de genes (p. 221)

### 40

De acuerdo con el libro de Biología, ¿cómo se llama la transferencia directa de ADN de una bacteria a otra?

- A. La conjugación
- B. La transformación
- C. La transducción
- D. La transposición

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · transferencia de genes

La conjugación o transferencia directa de ADN de una bacteria a otra.

### 41

De acuerdo con el libro de Biología, ¿en qué consiste la transformación?

- A. En la captación directa de fragmentos de ADN del medio circundante por parte de una célula
- B. En la transferencia directa de ADN de una bacteria a otra
- C. En la transferencia de material genético bacteriano empaquetado en partículas virales
- D. En el movimiento de genes de cromosomas de una misma célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · transferencia de genes

La transformación o captación directa de fragmentos de ADN del medio circundante por parte de una célula.

### 42

De acuerdo con el libro de Biología, ¿cómo se llama la transferencia de material genético bacteriano empaquetado en partículas virales de una célula infectada a otra?

- A. La transducción
- B. La conjugación
- C. La transformación
- D. La infección viral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · transferencia de genes

La transducción o transferencia de material genético bacteriano empaquetado en partículas virales de una célula infectada a otra.

### 43

De acuerdo con el libro de Biología, ¿qué implican todos los mecanismos de intercambio de material genético entre distintas células, en contraste con la transferencia vertical?

- A. Una transferencia horizontal de genes
- B. Una transferencia vertical de genes
- C. Una transposición de cromosomas
- D. Una conjugación bacteriana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · transferencia de genes

Todos estos mecanismos de intercambio de material genético entre distintas células implican una transferencia horizontal de genes, en contraste con la transferencia vertical.

### 44

De acuerdo con el libro de Biología, ¿cuándo se produce la transferencia vertical de genes?

- A. Cuando el material genético pasa de los progenitores a las células hijas durante la división celular
- B. Cuando un fragmento de ADN foráneo ingresa en una célula
- C. Cuando los genes saltan de una especie a otra
- D. Cuando un genoma viral se incorpora a una célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · transferencia de genes

La transferencia vertical se produce cuando el material genético pasa de los progenitores a las células hijas durante la división celular.

---

## Sub-lote 13 · Mendel y el nacimiento de la genética (p. 222)

### 45

De acuerdo con el libro de Biología, ¿quién inició los experimentos que proporcionarían las primeras respuestas rigurosas a las preguntas sobre la herencia?

- A. Johann Gregor Mendel, un monje austríaco
- B. William Bateson, un naturalista inglés
- C. Chlamydomonas, un eucarionte unicelular
- D. Pisum sativum, un criador de plantas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 222
**Subtema:** reproducción sexual · Mendel

Entre los naturalistas que realizaron este tipo de prácticas se encontraba Johann Gregor Mendel (1822-1884), un monje austríaco, que inició los experimentos que más tarde proporcionarían las primeras respuestas más rigurosas a las preguntas sobre la herencia.

### 46

De acuerdo con el libro de Biología, ¿en qué universidad estudió Mendel matemática y otras ciencias durante dos años?

- A. En la Universidad de Viena
- B. En la Universidad de Brünn
- C. En la Universidad de Brno
- D. En la Universidad de Viena y Praga

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 222
**Subtema:** reproducción sexual · Mendel

Durante dos años estudió matemática y otras ciencias en la Universidad de Viena.

### 47

De acuerdo con el libro de Biología, ¿qué contribuyó a demostrar Mendel, aun antes de que se identificaran los cromosomas como estructuras que albergan la información hereditaria?

- A. Que las características heredadas se encuentran en unidades discretas que se redistribuyen en cada generación
- B. Que las características heredadas se mezclan de manera continua entre los progenitores
- C. Que la herencia se transmite por transferencia horizontal de genes
- D. Que los cromosomas sexuales determinan todas las características

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 222
**Subtema:** reproducción sexual · Mendel

Mendel contribuyó a demostrar que las características heredadas se encuentran en unidades discretas que se redistribuyen en cada generación. Estas unidades discretas podrían considerarse el equivalente de las que en la actualidad conocemos como genes.

---

## Sub-lote 14 · El método experimental de Mendel (p. 223)

### 48

De acuerdo con el libro de Biología, ¿qué planta eligió Mendel para llevar a cabo sus experimentos sobre la herencia?

- A. El guisante o arveja común, *Pisum sativum*
- B. La *Chlamydomonas*
- C. El maíz
- D. El lirio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 223
**Subtema:** reproducción sexual · método de Mendel

Para llevar a cabo sus experimentos sobre la herencia, Mendel eligió el guisante o arveja común, *Pisum sativum*.

### 49

De acuerdo con el libro de Biología, ¿qué ventajas tenían las plantas de guisante para los experimentos de Mendel?

- A. Se conseguían en el comercio, eran fáciles de cultivar y crecían con rapidez
- B. Tenían un ciclo de vida largo y complejo
- C. Requerían polinización cruzada obligatoria
- D. Presentaban características imposibles de diferenciar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 223
**Subtema:** reproducción sexual · método de Mendel

Las ventajas de estas plantas eran que se conseguían en el comercio, eran fáciles de cultivar y crecían con rapidez.

### 50

De acuerdo con el libro de Biología, ¿cómo se poliniza normalmente la flor del guisante, ya que sus estructuras reproductivas están encerradas por completo por pétalos?

- A. Se autopoliniza: los anterozoides de una flor fecundan a los óvulos de la misma flor
- B. Se poliniza de forma cruzada entre variedades diferentes
- C. Se poliniza por el viento entre plantas distintas
- D. Requiere la intervención manual del investigador

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 223
**Subtema:** reproducción sexual · método de Mendel

En consecuencia, la flor normalmente se autopoliniza; es decir, los anterozoides de una flor fecundan a los óvulos de la misma flor.

---

## Sub-lote 15 · El diseño de los experimentos de Mendel (p. 224)

### 51

De acuerdo con el libro de Biología, ¿con cuántas variedades diferentes de plantas de guisante comenzó Mendel su trabajo?

- A. Con 32 variedades
- B. Con 7 variedades
- C. Con 46 variedades
- D. Con 2 variedades

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · experimentos de Mendel

Mendel comenzó su trabajo con 32 variedades diferentes de plantas de guisante, a las que estudió durante varios años antes de comenzar sus experimentos cuantitativos.

### 52
De acuerdo con el libro de Biología, ¿cuántas características seleccionó Mendel para su estudio, cada una con dos variantes distintas?
- A. Siete características
- B. Dos características
- C. Treinta y dos características
- D. Tres características

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · experimentos de Mendel

Seleccionó siete características: cada una aparecía en dos variantes conspicuamente distintas en las diferentes variedades de la misma planta.

### 53

De acuerdo con el libro de Biología, ¿cómo se denomina el cruzamiento artificial entre dos variedades de líneas genéticamente puras?

- A. Hibridación
- B. Autopolinización
- C. Segregación
- D. Transducción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · experimentos de Mendel

Realizó cruzamientos artificiales entre dos variedades de líneas genéticamente puras (p. ej., una línea pura de flores púrpura y una línea pura de flores blancas). Este tipo de cruzamiento se denomina hibridación.

### 54

De acuerdo con el libro de Biología, ¿cómo denominó Mendel a la generación de líneas puras y a la descendencia híbrida de su cruzamiento?

- A. Generación parental (P) a las líneas puras y generación filial 1 (F1) a la descendencia híbrida
- B. Generación filial 1 (F1) a las líneas puras y generación parental (P) a la descendencia
- C. Generación F2 a las líneas puras y F1 a la descendencia
- D. Generación híbrida a las líneas puras y generación pura a la descendencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · experimentos de Mendel

A la generación de líneas puras, generación parental (P). A la descendencia híbrida, es decir, a todas las plantas que crecen a partir de las semillas resultantes de la hibridación de P, la denominó generación filial 1 (F1).

### 55

De acuerdo con el libro de Biología, ¿cómo se obtiene la generación filial 2 (F2)?

- A. Dejando que las plantas de F1 se autopolinicen
- B. Cruzando las plantas de F1 con la generación parental
- C. Cruzando dos líneas puras diferentes
- D. Autopolinizando la generación parental

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · experimentos de Mendel

Luego, dejaba que las plantas de F1 se autopolinizaran, lo cual daba como resultado una nueva generación: la generación filial 2 (F2).

### 56

De acuerdo con el libro de Biología, ¿qué caracteriza a una línea pura respecto de una característica?

- A. Que a través de sucesivas autopolinizaciones esa característica no cambia de una generación a la siguiente
- B. Que la característica se mezcla con la de otras variedades en cada generación
- C. Que la característica desaparece en la primera generación
- D. Que la característica aparece en una relación 3:1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · experimentos de Mendel

Se pueden obtener fácilmente líneas puras en relación con una determinada característica; es decir que a través de sucesivas autopolinizaciones esa característica no cambia de una generación a la siguiente.

---

## Sub-lote 16 · Caracteres dominantes y recesivos (pp. 225–226)

### 57
De acuerdo con el libro de Biología, al analizar la F1, ¿cuántas de las dos variantes alternativas mostraban los miembros de la progenie?
- A. Solo una de las dos variantes alternativas
- B. Las dos variantes por igual
- C. Una variante intermedia entre las dos
- D. Ninguna de las dos variantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 224
**Subtema:** reproducción sexual · dominancia

Mendel encontró que, en todos los casos, al analizar la F1, todos los miembros de la progenie mostraban solo una de las dos variantes alternativas; la otra desaparecía.

### 58

De acuerdo con el libro de Biología, ¿cómo llamó Mendel a las variantes que aparecían en la F1 y volvían a aparecer en la F2 en mayor proporción, como las semillas amarillas y las flores púrpura?

- A. Caracteres dominantes
- B. Caracteres recesivos
- C. Caracteres intermedios
- D. Líneas puras

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 225
**Subtema:** reproducción sexual · dominancia

A las variantes presentes en la generación P, que aparecían en la generación F1 y que volvían a aparecer en la F2 en mayor proporción, como las semillas amarillas y las flores púrpura, Mendel las llamó caracteres dominantes.

### 59

De acuerdo con el libro de Biología, ¿en qué relación aproximada aparecen las variantes dominantes y recesivas en la generación F2?

- A. En una relación aproximada de 3:1
- B. En una relación aproximada de 1:1
- C. En una relación aproximada de 2:1
- D. En una relación aproximada de 9:3:3:1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 226
**Subtema:** reproducción sexual · dominancia

Podemos comprobar que las variantes dominantes y recesivas aparecen en la segunda generación (generación F2) en una relación aproximada de 3:1.

---

## Sub-lote 17 · La primera ley de Mendel (p. 226)

### 60

De acuerdo con el libro de Biología, ¿cómo se conoce hoy la primera ley de Mendel?

- A. Como el principio de segregación
- B. Como el principio de la distribución independiente
- C. Como el principio de dominancia
- D. Como el principio de la transferencia horizontal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 226
**Subtema:** reproducción sexual · primera ley de Mendel

Esto condujo a formular lo que hoy se conoce como primera ley de Mendel o principio de segregación.

### 61

De acuerdo con el libro de Biología, ¿qué establece la primera ley de Mendel o principio de segregación?

- A. Cada individuo lleva un par de factores hereditarios para cada característica, y los miembros del par se separan o segregan durante la formación de los gametos
- B. Los factores hereditarios de distintas características se distribuyen de manera independiente
- C. Un factor dominante siempre suprime al recesivo en todas las generaciones
- D. Cada individuo lleva un solo factor hereditario para cada característica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 226
**Subtema:** reproducción sexual · primera ley de Mendel

Cada individuo lleva un par de factores hereditarios para cada característica. Los miembros del par se separan –o segregan– durante la formación de los gametos.

### 62

De acuerdo con el libro de Biología, según la explicación de Mendel, ¿cómo están los factores en las plantas F1?

- A. En pares: un miembro de cada par heredado de un progenitor y el otro del otro progenitor
- B. En unidades individuales heredadas de un solo progenitor
- C. Mezclados de forma intermedia entre ambos progenitores
- D. En grupos de tres factores por característica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 226
**Subtema:** reproducción sexual · primera ley de Mendel

Explicó que estos factores están en las plantas F1 en pares: un miembro de cada par sería heredado de un progenitor y el otro, del otro progenitor.

---

## Sub-lote 18 · Genotipo, fenotipo y alelos (p. 227)

### 63

De acuerdo con el libro de Biología, ¿qué constituye el genotipo de un individuo?

- A. Su composición genética respecto de una o varias características
- B. Su apariencia externa y características observables
- C. El conjunto de sus alelos dominantes únicamente
- D. El número de cromosomas de sus células somáticas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · genotipo y fenotipo

La composición genética de un individuo respecto de una o a varias características constituye su genotipo.

### 64

De acuerdo con el libro de Biología, ¿qué constituye el fenotipo de un organismo?

- A. Su apariencia externa y otras características observables o mensurables
- B. Su composición genética respecto de una característica
- C. El par de factores hereditarios de cada gen
- D. La forma alternativa de un gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · genotipo y fenotipo

La apariencia externa y otras características observables o mensurables de un organismo constituyen su fenotipo.

> Los reactivos 63 y 64 son el par obligado: el **genotipo** es la composición
> genética y el **fenotipo** la apariencia observable. Cada uno es el distractor
> del otro.

### 65

De acuerdo con el libro de Biología, ¿cómo se conocen las diferentes variantes o formas alternativas que puede presentar un gen que codifica una característica dada?

- A. Alelos
- B. Genotipos
- C. Cromosomas homólogos
- D. Factores dominantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · alelos

Cualquier gen que codifica una característica dada, como el color de las semillas, puede presentar diferentes variantes, formas alternativas, que se conocen como alelos.

### 66

De acuerdo con el libro de Biología, ¿cómo se representan por medio de letras los alelos dominantes y los recesivos?

- A. Mayúsculas para los alelos dominantes y minúsculas para los recesivos
- B. Minúsculas para los alelos dominantes y mayúsculas para los recesivos
- C. Números para los dominantes y letras para los recesivos
- D. Letras griegas para los dominantes y latinas para los recesivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · alelos

Estos pueden representarse por medio de letras: mayúsculas para los alelos dominantes y minúsculas para los recesivos.

---

## Sub-lote 19 · Homocigosis, heterocigosis y dominancia (p. 227)

### 67

De acuerdo con el libro de Biología, ¿cómo es un organismo cuyos dos alelos son iguales, por ejemplo AA o aa?

- A. Homocigótico para esa característica
- B. Heterocigótico para esa característica
- C. Fenotípicamente recesivo
- D. Diploide para esa característica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · homocigosis y heterocigosis

Si ambos alelos son iguales (p. ej., AA o aa), el organismo es homocigótico para esa característica.

### 68

De acuerdo con el libro de Biología, ¿cómo es un organismo cuyos dos alelos son diferentes, por ejemplo Aa?

- A. Heterocigótico para esa característica
- B. Homocigótico para esa característica
- C. Fenotípicamente dominante puro
- D. Haploide para esa característica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · homocigosis y heterocigosis

Si ambos alelos son diferentes (p. ej., Aa), el organismo es heterocigótico para la característica.

### 69

De acuerdo con el libro de Biología, ¿cuándo se manifiesta fenotípicamente un alelo dominante?

- A. Tanto en homocigosis como en heterocigosis
- B. Solo en homocigosis
- C. Solo en heterocigosis
- D. Solo cuando se reúne con un alelo recesivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · dominancia

Un alelo dominante se manifiesta fenotípicamente tanto en homocigosis como en heterocigosis; un alelo recesivo solo se manifiesta en homocigosis.

### 70

De acuerdo con el libro de Biología, ¿cuándo se manifiesta un alelo recesivo?

- A. Solo en homocigosis
- B. Tanto en homocigosis como en heterocigosis
- C. Solo en heterocigosis
- D. Nunca se manifiesta en el fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · dominancia

Un alelo recesivo solo se manifiesta en homocigosis.

### 71
De acuerdo con el libro de Biología, ¿cuántos alelos de cada gen recibe cada gameto cuando se forman durante la meiosis?
- A. Solamente un alelo de cada gen
- B. Los dos alelos de cada gen
- C. Ningún alelo, hasta la fecundación
- D. Cuatro alelos de cada gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · segregación de alelos

Cuando se forman los gametos durante la meiosis cada uno recibe solamente un alelo de cada gen. Luego, al producirse la fecundación y la formación del cigoto, los alelos se reúnen nuevamente en pares.

---

## Sub-lote 20 · El tablero de Punnett (p. 227)

### 72

De acuerdo con el libro de Biología, ¿cómo se conoce la tabla de doble entrada que es una de las formas más simples de predecir los tipos de descendencia de un cruzamiento?

- A. Tablero de Punnett
- B. Cuadro de Mendel
- C. Tabla de segregación
- D. Cuadro de alelos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · tablero de Punnett

Una de las formas más simples de predecir los tipos de descendencia que serán producidos a partir de ese cruzamiento es diagramarlo utilizando una tabla de doble entrada, conocida como tablero de Punnett.

---

## Sub-lote 21 · El cruzamiento dihíbrido (p. 228)

### 73
De acuerdo con el libro de Biología, en su segunda serie de experimentos, ¿cuántas características analizó Mendel simultáneamente?
- A. Dos características simultáneamente
- B. Una sola característica a través de dos generaciones
- C. Siete características simultáneamente
- D. Tres características simultáneamente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · distribución independiente

En su primer conjunto de experimentos, Mendel realizó el seguimiento de un solo carácter a través de dos generaciones, sin tener en cuenta cómo variaban los otros. En una segunda serie de experimentos, analizó cómo variaban dos características simultáneamente.

### 74

De acuerdo con el libro de Biología, al cruzar una planta de semillas redondas y amarillas (alelos dominantes) con otra de semillas rugosas y verdes (alelos recesivos), ¿cómo fueron todas las semillas producidas en la F1?

- A. Redondas y amarillas
- B. Rugosas y verdes
- C. Redondas y verdes
- D. Rugosas y amarillas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · distribución independiente

Cruzó una planta que producía semillas redondas y amarillas (ambos alelos dominantes) con otra que daba semillas rugosas y verdes (alelos recesivos). Como podía esperarse, todas las semillas producidas en este cruzamiento fueron redondas y amarillas.

### 75

De acuerdo con el libro de Biología, cuando las plantas F1 del cruzamiento dihíbrido se autopolinizaron, ¿qué apareció en la F2 además de las variantes de los progenitores?

- A. Nuevas combinaciones: semillas rugosas y amarillas, y redondas y verdes
- B. Solo semillas redondas y amarillas
- C. Solo semillas rugosas y verdes
- D. Semillas de características intermedias entre los progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · distribución independiente

Todas las semillas restantes fueron distintas de los progenitores: 101 rugosas y amarillas, y 108 redondas y verdes. Habían aparecido nuevas combinaciones.

### 76

De acuerdo con el libro de Biología, ¿qué ocurre con la relación 3:1 de cada característica cuando en el cruzamiento dihíbrido se consideran el color y la forma de la semilla de manera independiente?

- A. Se mantiene: cada característica por separado sigue apareciendo en una relación 3 a 1
- B. Desaparece por completo y se vuelve 1:1
- C. Se transforma en una relación 9:3:3:1 para cada característica
- D. Se invierte a favor de las variantes recesivas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · distribución independiente

Si al analizar estos nuevos experimentos, se consideran el color y la forma de la semilla de manera independiente, esta relación se mantiene: las variantes de la forma de la semilla (redonda y rugosa) aparecen en una relación 3 a 1.

---

## Sub-lote 22 · La segunda ley de Mendel (p. 229)

### 77

De acuerdo con el libro de Biología, ¿qué establece el principio de distribución independiente sobre los pares de alelos durante la formación de los gametos?

- A. Cada par de alelos segrega independientemente de los otros pares
- B. Los pares de alelos permanecen unidos y se heredan en bloque
- C. Un solo par de alelos segrega por vez, en orden
- D. Los alelos dominantes segregan antes que los recesivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 229
**Subtema:** reproducción sexual · segunda ley de Mendel

Durante la formación de los gametos, cada par de alelos segrega independientemente de los otros pares. En otras palabras, los factores hereditarios para cada característica se distribuyen en los gametos en forma independiente uno del otro.

### 78

De acuerdo con el libro de Biología, en un cruzamiento que involucra dos genes que se distribuyen en forma independiente, cada uno con un alelo dominante y uno recesivo, ¿en qué relación estarán en promedio los fenotipos de la progenie?

- A. En la relación 9:3:3:1
- B. En la relación 3:1
- C. En la relación 1:1
- D. En la relación 2:1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 229
**Subtema:** reproducción sexual · segunda ley de Mendel

En un cruzamiento que involucra a dos genes que se distribuyen en forma independiente –cada uno con un alelo dominante y uno recesivo–, los fenotipos de la progenie estarán, en promedio, en la relación 9:3:3:1.

> Ojo al par 3:1 (una característica, primera ley) contra 9:3:3:1 (dos
> características, segunda ley). Es la confusión más fácil entre las dos leyes,
> y los distractores de los reactivos 59, 76 y 78 la explotan.

### 79

De acuerdo con el libro de Biología, ¿cómo será siempre la progenie F1 de un cruzamiento entre un progenitor homocigoto dominante para una característica y homocigoto recesivo para la otra (rrAA × RRaa)?

- A. Heterocigótica para ambas características
- B. Homocigótica dominante para ambas
- C. Homocigótica recesiva para ambas
- D. Homocigótica para una y heterocigótica para la otra

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 229
**Subtema:** reproducción sexual · segunda ley de Mendel

La progenie F1 de cada uno de estos cruzamientos siempre será heterocigótica para ambas características.

---

## Sub-lote 23 · La teoría cromosómica: Sutton y Mendel (p. 230)

### 80

De acuerdo con el libro de Biología, ¿cómo llamó Mendel a las unidades hereditarias que hoy conocemos como genes?

- A. *Elemente*
- B. Alelos
- C. Cromosomas
- D. Gametos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 230
**Subtema:** reproducción sexual · teoría cromosómica

Sutton supuso que los *elemente* descritos por Mendel –que hoy conocemos como genes– están en los cromosomas.

> Término verificado con recorte a 550 dpi (`crop.py`, hoja 276): el libro escribe
> *elemente*, en cursiva. Aparece así tres veces (pp. 222, 229 y 230). No es un
> corte del extractor, es la palabra que usa el Curtis.

### 81
De acuerdo con el libro de Biología, ¿en qué año se encontraba Sutton estudiando la formación de las células sexuales en machos de saltamontes?
- A. En 1902
- B. En 1822
- C. En 1884
- D. En 1862

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 230
**Subtema:** reproducción sexual · teoría cromosómica

Iniciado el siglo, en 1902, Sutton se encontraba estudiando la formación de las células sexuales en machos de saltamontes.

### 82

De acuerdo con el libro de Biología, ¿durante qué fase se hace evidente la existencia de cromosomas homólogos, cuando estos se aparean?

- A. Durante la primera fase de la meiosis
- B. Durante la fecundación
- C. Durante la anafase de la mitosis
- D. Durante la formación del cigoto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 230
**Subtema:** reproducción sexual · teoría cromosómica

La existencia de cromosomas homólogos se hacía evidente durante el apareamiento de la primera fase de la meiosis, aunque un ojo perspicaz también podría haberlos encontrado al observar la metafase de la mitosis.

### 83

De acuerdo con el libro de Biología, según el razonamiento de Sutton, ¿dónde están los genes y qué porta cada cromosoma homólogo?

- A. Los genes están en los cromosomas, y cada cromosoma homólogo porta uno de los alelos de cada gen
- B. Los genes están en el citoplasma, y cada cromosoma porta todos los alelos
- C. Los genes están en los gametos, y cada cromosoma porta un solo gen
- D. Los genes están en la membrana, y cada cromosoma porta dos alelos de cada gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 230
**Subtema:** reproducción sexual · teoría cromosómica

Sutton supuso que los *elemente* descritos por Mendel están en los cromosomas, y que cada cromosoma homólogo porta uno de los alelos de cada gen.

### 84

De acuerdo con el libro de Biología, ¿por qué proceso podía explicarse el principio mendeliano de segregación de los alelos?

- A. Por la segregación de los cromosomas homólogos durante la meiosis
- B. Por la fusión de los núcleos durante la fecundación
- C. Por la duplicación de los cromosomas en la mitosis
- D. Por el apareamiento de las cromátidas hermanas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 230
**Subtema:** reproducción sexual · teoría cromosómica

El principio mendeliano de segregación de los alelos podía explicarse por la segregación de los cromosomas homólogos durante la meiosis.

### 85

De acuerdo con el libro de Biología, ¿bajo qué condición pueden distribuirse en forma independiente los alelos que corresponden a genes diferentes, según el segundo principio de Mendel?

- A. Solo si están situados en diferentes pares de cromosomas, o si están alejados en el mismo cromosoma y pueden intercambiarse
- B. Solo si están en el mismo par de cromosomas y muy próximos entre sí
- C. Solo si ambos alelos son dominantes
- D. Solo si el organismo es homocigótico para ambos genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 230
**Subtema:** reproducción sexual · teoría cromosómica

Este principio establece que los alelos que corresponden a genes diferentes se distribuyen en forma independiente durante la segregación. Esto solo puede ocurrir si dos pares de alelos diferentes están situados en diferentes pares de cromosomas o si están alejados uno del otro en el mismo cromosoma y pueden intercambiarse.

---

## Sub-lote 24 · El cruzamiento de prueba (test cross) (pp. 227-228)

### 86

De acuerdo con el libro de Biología, ¿qué se puede conocer al realizar un cruzamiento de prueba?

- A. El genotipo del progenitor del fenotipo dominante
- B. El fenotipo del progenitor homocigótico recesivo
- C. El número de gametos que produce el híbrido
- D. La proporción de la relación 9:3:3:1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · cruzamiento de prueba

Cuando se realiza un experimento de este tipo, conocido como cruzamiento de prueba, se puede conocer el genotipo del progenitor del fenotipo dominante.

### 87

De acuerdo con el libro de Biología, ¿entre qué dos individuos se realiza un cruzamiento de prueba?

- A. Entre uno de fenotipo dominante y genotipo desconocido y otro que se sabe que es homocigótico para el alelo recesivo
- B. Entre dos individuos de fenotipo dominante y genotipo desconocido
- C. Entre un individuo homocigótico dominante y otro heterocigótico
- D. Entre dos individuos homocigóticos para el alelo recesivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · cruzamiento de prueba

Esto no es más que un cruzamiento experimental entre un individuo que tiene el fenotipo dominante para una característica dada (y genotipo desconocido) y otro individuo que se sabe que es homocigótico para el alelo recesivo.

### 88

De acuerdo con el libro de Biología, ¿qué hipótesis se pone a prueba al cruzar plantas F1 de flores púrpura con plantas de flores blancas?

- A. Que los alelos aparecen en pares y que ambos alelos de un par segregan durante la formación de los gametos
- B. Que los alelos de genes diferentes se distribuyen en forma independiente
- C. Que el alelo recesivo surge por una mutación del alelo dominante
- D. Que los cromosomas homólogos se aparean durante la meiosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · cruzamiento de prueba

Para probar la hipótesis de que los alelos aparecen en pares y de que ambos alelos de un par segregan durante la formación de los gametos, es necesario realizar un experimento adicional: cruzar plantas F1 de flores púrpura (obtenidas a partir de un cruzamiento entre plantas puras de flores púrpura y plantas de flores blancas) con plantas de flores blancas.

### 89
De acuerdo con el libro de Biología, ¿por qué se sabe con certeza que una planta de guisante de flores blancas es homocigótica para el alelo recesivo (bb)?
- A. Porque si tuviera un alelo B se expresaría como púrpura
- B. Porque las flores blancas siempre son heterocigóticas
- C. Porque el alelo b es dominante sobre el alelo B
- D. Porque solo produce gametos con el alelo B

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · cruzamiento de prueba

Si una planta de guisante tiene flores blancas, sabemos con certeza que es homocigótica para el alelo recesivo (bb), pues si tuviera un alelo B se expresaría como púrpura.

### 90
De acuerdo con el libro de Biología, ¿qué genotipos puede tener una planta de guisante con flor púrpura?
- A. El genotipo Bb o BB
- B. Solamente el genotipo BB
- C. Solamente el genotipo bb
- D. El genotipo bb o Bb

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · cruzamiento de prueba

Pero una planta de guisante con flor púrpura puede tener el genotipo Bb o BB.

### 91

De acuerdo con el libro de Biología, en un cruzamiento de prueba, si se obtienen plantas con dos fenotipos diferentes, ¿cómo era el progenitor de fenotipo dominante?

- A. Era heterocigótico
- B. Era homocigótico dominante
- C. Era homocigótico recesivo
- D. Era una línea pura para esa característica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · cruzamiento de prueba

Si se obtienen plantas con dos fenotipos diferentes, entonces, el progenitor de fenotipo dominante era heterocigótico.

### 92

De acuerdo con el libro de Biología, en un cruzamiento de prueba, si en la descendencia aparece un solo fenotipo, ¿cómo era el progenitor de fenotipo dominante?

- A. Era homocigótico para la característica en estudio
- B. Era heterocigótico para la característica en estudio
- C. Portaba un alelo dominante y uno recesivo
- D. Era homocigótico recesivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · cruzamiento de prueba

Si aparece un solo fenotipo, entonces, el progenitor era homocigótico para la característica en estudio.

> Par contrapuesto (reactivos 91 y 92): en el cruzamiento de prueba, **dos
> fenotipos** en la descendencia delatan un progenitor **heterocigótico**, y **un
> solo fenotipo**, uno **homocigótico**. Cada regla es el distractor de la otra.

---

## Sub-lote 25 · La segregación de los alelos y la relación 1:2:1 (figs. 11-17 y 11-18, pp. 227-228)

### 93
De acuerdo con el libro de Biología, ¿qué gametos produce una planta homocigótica para flores púrpura (BB)?
- A. Solo óvulos o granos de polen con el alelo para flor púrpura (B)
- B. La mitad de los gametos con el alelo B y la otra mitad con el alelo b
- C. Solo óvulos o granos de polen con el alelo para flor blanca (b)
- D. Gametos que llevan a la vez el alelo B y el alelo b

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · segregación de alelos

Una planta de guisante homocigótica para flores púrpura (BB) solo produce óvulos o granos de polen con el alelo para flor púrpura (B).

### 94
De acuerdo con el libro de Biología, ¿qué proporción de gametos con cada alelo produce una planta heterocigótica (Bb)?
- A. La mitad de los gametos con el alelo B y la otra mitad con el alelo b
- B. Todos los gametos con el alelo B
- C. Tres cuartos con el alelo B y un cuarto con el alelo b
- D. Todos los gametos con el alelo b

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 227
**Subtema:** reproducción sexual · segregación de alelos

Esta planta produce la mitad de los gametos con el alelo B y la otra mitad con el alelo b, ya sea que se trate de óvulos o granos de polen.

### 95
De acuerdo con el libro de Biología, en el cruzamiento entre una planta BB y otra bb, ¿cuál es el fenotipo y el genotipo de la generación F1?
- A. Fenotipo púrpura, pero genotipo Bb
- B. Fenotipo blanco y genotipo bb
- C. Fenotipo púrpura y genotipo BB
- D. Fenotipo púrpura y genotipo bb

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · principio de segregación

El fenotipo de la progenie –la generación F1– es púrpura, pero su genotipo es Bb.

### 96
De acuerdo con el libro de Biología, ¿cuántos tipos de gametos produce la F1 heterocigótica y en qué proporción?
- A. Cuatro tipos —granos de polen B, óvulos B, granos de polen b y óvulos b— en proporciones iguales
- B. Dos tipos —óvulos B y granos de polen b— en proporciones iguales
- C. Un solo tipo de gameto, que lleva a la vez el alelo B y el alelo b
- D. Cuatro tipos de gametos en la relación 9:3:3:1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · principio de segregación

La F1 heterocigótica produce cuatro tipos de gametos: granos de polen B, óvulos B, granos de polen b y óvulos b, en proporciones iguales.

### 97
De acuerdo con el libro de Biología, cuando la F1 heterocigótica (Bb) se autopoliniza, ¿cuál es la relación genotípica de la descendencia?
- A. La relación 1:2:1 (1/4 BB, 2/4 Bb y 1/4 bb)
- B. La relación 3:1 (tres dominantes a un recesivo)
- C. La relación 9:3:3:1
- D. La relación 1:1 (la mitad BB y la mitad bb)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · principio de segregación

Los óvulos y los granos de polen B y b se combinan al azar y forman, en promedio, 1/4 BB (púrpura), 2/4 (o 1/2) Bb (púrpura) y 1/4 bb (blanco); lo que significa una relación genotípica de 1:2:1.

### 98
De acuerdo con el libro de Biología, ¿qué relación fenotípica da cuenta la relación genotípica 1:2:1?
- A. Tres dominantes (púrpura) a un recesivo (blanco), que se expresa como 3:1
- B. Dos dominantes a dos recesivos, que se expresa como 2:2
- C. Un dominante a un recesivo, que se expresa como 1:1
- D. Nueve dominantes a un recesivo, que se expresa como 9:1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 228
**Subtema:** reproducción sexual · principio de segregación

Esta relación genotípica da cuenta de la relación fenotípica: tres dominantes (púrpura) a un recesivo (blanco), que se expresa como 3:1.

> Distingue la **relación genotípica 1:2:1** (reactivo 97) de la **relación
> fenotípica 3:1** (reactivo 98): salen de la misma cruza (Bb × Bb, fig. 11-18) y
> son la trampa clásica. La 1:2:1 cuenta genotipos (BB, Bb, bb); la 3:1 cuenta lo
> que se ve (púrpura contra blanco).

---

## Sub-lote 26 · El cierre de la teoría cromosómica: la "edad de oro" y Sutton (p. 232)

### 99

De acuerdo con el libro de Biología, a comienzos del siglo, al iniciar la "edad de oro", ¿qué suscitó la idea de que los genes se encontraban en los cromosomas?

- A. Ásperas controversias
- B. Una aceptación inmediata y unánime
- C. El abandono de los estudios sobre la herencia
- D. La confirmación definitiva del trabajo de Mendel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · teoría cromosómica

A comienzos del siglo, al iniciar la "edad de oro", la idea de que los genes se encontraban en los cromosomas suscitó ásperas controversias.

### 100

De acuerdo con el libro de Biología, en esa etapa, aunque el trabajo de Sutton y de otros citólogos era conocido, ¿cómo se lo consideraba para los estudios sobre la herencia?

- A. Se lo consideraba irrelevante para los estudios sobre la herencia
- B. Se lo consideraba la base indiscutible de la genética
- C. Se lo consideraba una simple copia de las ideas de Mendel
- D. Se lo consideraba un error que debía corregirse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · teoría cromosómica

En esta etapa de la investigación genética, el gen no se asumía aún como una realidad física y, aunque el trabajo de Sutton y de otros citólogos era conocido, se consideraba irrelevante para los estudios sobre la herencia.

### 101

De acuerdo con el libro de Biología, casi en la misma época en que Sutton realizaba sus investigaciones, ¿qué correlación reconocieron otros biólogos?

- A. La correlación entre el comportamiento de los *elemente* de Mendel y el movimiento de los cromosomas
- B. La correlación entre el tamaño de los cromosomas y el número de genes
- C. La correlación entre las mutaciones y la exposición a la radiación
- D. La correlación entre el color de los ojos y la alimentación de la mosca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · teoría cromosómica

Casi en la misma época en que Sutton realizaba sus investigaciones, otros biólogos reconocieron la correlación entre el comportamiento de los *elemente* de Mendel y el movimiento de los cromosomas.

### 102

De acuerdo con el libro de Biología, en comparación con los otros biólogos que reconocieron esa misma correlación, ¿qué ocurrió con el artículo del joven Sutton?

- A. Se publicó primero y su presentación fue la más convincente
- B. Se publicó último y pasó inadvertido
- C. Nunca llegó a publicarse en vida de Sutton
- D. Fue refutado por Morgan poco después

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · teoría cromosómica

El artículo del joven Sutton, sin embargo, se publicó primero y su presentación fue la más convincente.

---

## Sub-lote 27 · Morgan y la mosca *Drosophila* (p. 232)

### 103
De acuerdo con el libro de Biología, ¿en qué año y en qué universidad fundó Thomas H. Morgan el que sería el laboratorio de genética más importante de las décadas siguientes?
- A. En 1909, en la Universidad de Columbia
- B. En 1902, en la Universidad de Columbia
- C. En 1909, en la Universidad de Brünn
- D. En 1927, en la Universidad de Columbia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · Morgan y Drosophila

En 1909, el biólogo estadounidense Thomas H. Morgan (1866-1945) fundó en la Universidad de Columbia el que sería el laboratorio de genética más importante de las décadas siguientes.

### 104

De acuerdo con el libro de Biología, ¿cómo se denominó el período de la investigación genética que duró hasta la Segunda Guerra Mundial?

- A. La edad de oro de la genética
- B. La revolución mendeliana
- C. La era de la citología
- D. La síntesis moderna

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · Morgan y Drosophila

Este período de la investigación genética, que duró hasta la Segunda Guerra Mundial, fue denominado "la edad de oro de la genética".

### 105

De acuerdo con el libro de Biología, ¿qué organismo eligió Morgan como su organismo experimental?

- A. La mosca del vinagre *Drosophila melanogaster*, también conocida como la mosca de la fruta
- B. La planta de guisante *Pisum sativum*
- C. El saltamontes macho
- D. La planta del género *Oenothera*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · Morgan y Drosophila

Con una notable combinación entre intuición y suerte, Morgan eligió a la mosca del vinagre *Drosophila melanogaster*, también conocida como la mosca de la fruta, como su organismo experimental.

### 106
De acuerdo con el libro de Biología, entre las ventajas de la mosca de la fruta como material de investigación, ¿cuánto mide de largo y cada cuánto puede producir una nueva generación?
- A. Mide solo 3 milímetros de largo y puede producir una nueva generación cada dos semanas
- B. Mide solo 3 centímetros de largo y puede producir una nueva generación cada dos meses
- C. Mide solo 1 milímetro de largo y puede producir una nueva generación cada semana
- D. Mide solo 3 milímetros de largo y puede producir una nueva generación cada dos meses

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · Morgan y Drosophila

Entre sus ventajas se encuentran las siguientes: es fácil de criar y de mantener, se alimenta de las levaduras que fermentan la fruta en putrefacción, mide solo 3 milímetros de largo, puede producir una nueva generación cada dos semanas y la hembra deposita centenas de huevos durante su vida adulta.

### 107

De acuerdo con el libro de Biología, ¿qué principio de enorme importancia ayudó a consolidar *D. melanogaster*?

- A. Que los *elemente* de Mendel –los genes– están ubicados en los cromosomas
- B. Que los genes están ubicados en el citoplasma de la célula
- C. Que cada característica depende de un solo gen
- D. Que los genes se originan por acción de la radiación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 232
**Subtema:** reproducción sexual · Morgan y Drosophila

*D. melanogaster* ayudó a Morgan y a sus colegas a consolidar un principio de enorme importancia: los *elemente* de Mendel –los genes– están ubicados en los cromosomas.

---

## Sub-lote 28 · Los cromosomas de la mosca de la fruta (fig. 11-26, pp. 235-236)

### 108

De acuerdo con el libro de Biología, ¿cómo se reparten los cuatro pares de cromosomas de *Drosophila melanogaster*?

- A. Tres pares son autosomas y el cuarto es el par sexual (XX en las hembras y XY en los machos)
- B. Los cuatro pares son autosomas
- C. Dos pares son autosomas y dos pares son sexuales
- D. Tres pares son sexuales y el cuarto es autosómico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 235
**Subtema:** reproducción sexual · Morgan y Drosophila

Una de las ventajas del uso de *Drosophila melanogaster* para estudios genéticos es que tiene solo cuatro pares de cromosomas. Tres pares son autosomas y el cuarto es el par sexual: XX en las hembras y XY en los machos.

### 109
De acuerdo con el libro de Biología, ¿cuántos cromosomas en total (2n) tiene la mosca de la fruta?
- A. Ocho cromosomas (2n = 8)
- B. Catorce cromosomas (2n = 14)
- C. Cuatro cromosomas (2n = 4)
- D. Cuarenta y seis cromosomas (2n = 46)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · Morgan y Drosophila

Estas pequeñas moscas tienen solo cuatro pares de cromosomas (2n = 8), un hecho que simplificó los experimentos de Morgan.

---

## Sub-lote 29 · La mosca de ojos blancos y las características ligadas al sexo (figs. 11-27 a 11-29, pp. 236-238)

### 110
De acuerdo con el libro de Biología, ¿qué descubrió Morgan cuando buscaba diferencias genéticas entre las moscas *Drosophila*?
- A. Un solo individuo de ojos blancos en su población de miles de moscas
- B. Cientos de individuos de ojos blancos en su población
- C. Una mosca que carecía por completo de ojos
- D. Un solo individuo de ojos rojos entre moscas de ojos blancos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · características ligadas al sexo

Cuando buscaba diferencias genéticas entre las moscas *Drosophila*, Morgan descubrió un solo individuo de ojos blancos en su población de miles de moscas.

### 111

De acuerdo con el libro de Biología, cuando aparearon al macho de ojos blancos con una hembra de ojos rojos, ¿cómo fue la progenie F1 y qué sugería sobre el alelo para ojos blancos?

- A. Toda la progenie F1 tuvo ojos rojos; aparentemente, el alelo para ojos blancos era recesivo
- B. Toda la progenie F1 tuvo ojos blancos; el alelo para ojos blancos era dominante
- C. La mitad de la F1 tuvo ojos rojos y la otra mitad ojos blancos
- D. Solo las hembras de la F1 tuvieron ojos blancos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · características ligadas al sexo

Cuando aparearon a esta mosca (macho) con una hembra de ojos rojos, toda la progenie F1 tuvo ojos rojos. Aparentemente, el alelo para ojos blancos era recesivo.

### 112

De acuerdo con el libro de Biología, ¿qué hipótesis formuló el equipo de Morgan sobre el gen para el color de ojos?

- A. Que el gen para el color de ojos se encuentra solo en el cromosoma X
- B. Que el gen para el color de ojos se encuentra solo en el cromosoma Y
- C. Que el gen para el color de ojos se encuentra en los autosomas
- D. Que el gen para el color de ojos se encuentra tanto en el X como en el Y

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · características ligadas al sexo

Sobre la base de estos experimentos se formuló la siguiente hipótesis: el gen para el color de ojos se encuentra solo en el cromosoma X.

### 113

De acuerdo con el libro de Biología, ¿qué concepto introdujeron estos experimentos de Morgan?

- A. El concepto de características ligadas al sexo
- B. El concepto de dominancia incompleta
- C. El concepto de mutágeno
- D. El concepto de codominancia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · características ligadas al sexo

Estos experimentos introdujeron el concepto de características ligadas al sexo que son tan importantes en la genética de los humanos como en la de las moscas de la fruta.

### 114

De acuerdo con el libro de Biología, ¿de qué convencieron a Morgan y a muchos genetistas los resultados de los cruzamientos entre moscas de ojos blancos y de ojos rojos?

- A. De que la hipótesis de Sutton era correcta: los genes están en los cromosomas
- B. De que los genes están en el citoplasma de la célula
- C. De que el color de los ojos no era una característica hereditaria
- D. De que Mendel se había equivocado en sus leyes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · características ligadas al sexo

Los resultados de los cruzamientos entre las moscas de la fruta de ojos blancos y las de ojos rojos convencieron a Morgan y a muchos otros genetistas de que la hipótesis de Sutton era correcta: los genes están en los cromosomas.

### 115
De acuerdo con el libro de Biología, ¿cómo se representan el alelo salvaje para ojos rojos y la característica menos común de ojos blancos?
- A. El alelo salvaje para ojos rojos con una B y el de ojos blancos con una b
- B. El alelo para ojos rojos con una b y el de ojos blancos con una B
- C. Ambos alelos con la letra X
- D. El alelo para ojos rojos con una R y el de ojos blancos con una r

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 237
**Subtema:** reproducción sexual · características ligadas al sexo

El alelo salvaje para ojos rojos se representa con una B y la característica menos común, ojos blancos, con una b.

### 116
De acuerdo con el libro de Biología, al cruzar entre sí moscas de ojos rojos de la F1, ¿qué se obtuvo en la generación F2 y qué sugirió?
- A. Machos de ojos rojos y de ojos blancos, pero todas las hembras de ojos rojos; sugirió una relación entre el color de ojos y los cromosomas sexuales
- B. Todas las moscas de ojos rojos, sin relación alguna con el sexo
- C. Todos los machos de ojos rojos y todas las hembras de ojos blancos
- D. Machos y hembras por igual, la mitad de cada uno con ojos blancos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 237
**Subtema:** reproducción sexual · características ligadas al sexo

Cuando apareó a una hembra de ojos rojos de la F1 con un macho de ojos rojos de la F1, obtuvo en la generación F2 machos de ojos rojos y de ojos blancos, pero todas las hembras F2 tuvieron ojos rojos. Esto sugirió una relación entre la herencia del color de ojos y el comportamiento de los cromosomas sexuales.

### 117
De acuerdo con el libro de Biología, en el cruzamiento de prueba entre una hembra F1 de ojos rojos (de genotipo desconocido) y el macho original de ojos blancos, ¿qué indicaron los resultados?
- A. Que la hembra F1 era heterocigótica, y sugirieron que el gen para el color de ojos estaba localizado en el cromosoma X
- B. Que la hembra F1 era homocigótica dominante
- C. Que la hembra F1 era homocigótica recesiva
- D. Que la hembra F1 no portaba el gen para el color de ojos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 237
**Subtema:** reproducción sexual · características ligadas al sexo

El genotipo de la hembra antes del cruzamiento de prueba era desconocido; la hembra de la F1 podía ser tanto homocigótica como heterocigótica. Los resultados indicaron que la segunda opción era la correcta y sugirieron que el gen para el color de ojos debía estar localizado en el cromosoma X.

### 118
De acuerdo con el libro de Biología, ¿por qué los machos F1 son todos de ojos blancos?
- A. Porque con su único cromosoma X recibido de la hembra llevan el alelo recesivo b, y el cromosoma Y no lleva gen para color de ojos
- B. Porque reciben el alelo recesivo del padre de ojos rojos
- C. Porque en los machos el alelo para ojos blancos se vuelve dominante
- D. Porque el cromosoma Y lleva el alelo para ojos blancos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 238
**Subtema:** reproducción sexual · características ligadas al sexo

Los machos F1, con su único cromosoma X recibido de la hembra, llevan el alelo recesivo b y serán todos de ojos blancos, dado que el cromosoma Y no lleva gen para color de ojos.

> Cruces recíprocos, la clave del ligamiento al sexo: en la figura 11-28 (macho
> blanco × hembra roja) la F1 es toda de ojos rojos; en la figura 11-29 (hembra
> blanca × macho rojo) los machos F1 son todos de ojos blancos. Que el resultado
> cambie al invertir los sexos de los progenitores es lo que delata que el gen va
> en el cromosoma X.

---

## Sub-lote 30 · Müller, los mutágenos y el ligamiento entre genes (p. 236)

### 119

De acuerdo con el libro de Biología, ¿qué encontró en 1927 Hermann J. Müller, uno de los colaboradores de Morgan?

- A. Que la exposición a los rayos X incrementaba en gran medida la velocidad de mutación en *Drosophila*
- B. Que los rayos X detenían por completo las mutaciones en *Drosophila*
- C. Que las mutaciones solo se producían de forma espontánea
- D. Que los rayos X cambiaban el sexo de las moscas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · ligamiento y mutágenos

Hermann J. Müller (1890-1967), uno de los colaboradores de Morgan, encontró que la exposición a los rayos X incrementaba en gran medida la velocidad de mutación en *Drosophila*.

### 120

De acuerdo con el libro de Biología, ¿cómo se llama a los agentes que producen mutaciones, como la luz ultravioleta y ciertos agentes químicos?

- A. Mutágenos
- B. Mutantes
- C. Autosomas
- D. Alelos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · ligamiento y mutágenos

Otras formas de radiación, como la luz ultravioleta y ciertos agentes químicos, también actuaban como agentes que producen mutaciones, es decir, son mutágenos.

> No confundir **mutágeno** (el agente que produce la mutación) con **mutante** (el
> organismo que la exhibe): el distractor B del reactivo 120 explota esa confusión.

### 121

De acuerdo con el libro de Biología, ¿cómo se dice que están los genes que tienden a segregar en conjunto porque están próximos en un mismo cromosoma?

- A. Están ligados: pertenecen al mismo grupo de ligamiento
- B. Están recombinados: pertenecen a distintos grupos de ligamiento
- C. Se distribuyen en forma independiente uno del otro
- D. Están mutados por acción de un mutágeno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 236
**Subtema:** reproducción sexual · ligamiento y mutágenos

Se dice que los genes que tienden a segregar en conjunto, porque están próximos en un mismo cromosoma, se encuentran ligados, es decir, pertenecen al mismo grupo de ligamiento.

---

## Sub-lote 31 · La dominancia incompleta (*Antirrhinum*, fig. 11-30, pp. 237-238)

### 122

De acuerdo con el libro de Biología, al cruzar plantas *Antirrhinum* homocigóticas de flores rojas (R¹R¹) con homocigóticas de flores blancas (R²R²), ¿cómo fue la generación F1?

- A. Plantas heterocigóticas (R¹R²) de flores rosadas, un fenotipo intermedio al de ambos homocigotos
- B. Plantas de flores rojas, iguales al progenitor de flores rojas
- C. Plantas de flores blancas, iguales al progenitor de flores blancas
- D. La mitad de las plantas de flores rojas y la otra mitad de flores blancas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 238
**Subtema:** reproducción sexual · dominancia incompleta

Bateson y Punnett cruzaron plantas del género *Antirrhinum* (conocida como conejito o boca de dragón). Una de las plantas progenitoras era homocigótica de flores rojas (R¹R¹) y la otra, homocigótica de flores blancas (R²R²). Encontraron que se producía una generación F1 de plantas heterocigóticas (R¹R²), pero de flores rosadas, un fenotipo intermedio al de ambos homocigotos.

### 123

De acuerdo con el libro de Biología, ¿cómo se conoce el fenómeno por el cual el heterocigoto de *Antirrhinum* tiene flores rosadas, y a qué se debe en este caso?

- A. Dominancia incompleta; es el resultado de una producción menor de pigmento rojo de los ejemplares heterocigóticos
- B. Codominancia; es el resultado de la mezcla de dos antígenos
- C. Herencia poligénica; es el resultado de la acción acumulativa de muchos genes
- D. Ligamiento; es el resultado de que los genes están próximos en un mismo cromosoma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 238
**Subtema:** reproducción sexual · dominancia incompleta

El fenómeno se conoce como dominancia incompleta y, en este caso, es el resultado de una producción menor de pigmento rojo de los ejemplares heterocigóticos de la F1.

### 124
De acuerdo con el libro de Biología, en la dominancia incompleta del *Antirrhinum*, ¿qué ocurre con los alelos y con la flor del heterocigoto?
- A. Ningún alelo es dominante y la flor del heterocigoto presenta un fenotipo intermedio entre los dos colores
- B. El alelo rojo es dominante y la flor del heterocigoto es roja
- C. El alelo blanco es dominante y la flor del heterocigoto es blanca
- D. Ambos alelos son dominantes y la flor muestra los dos colores por separado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 238
**Subtema:** reproducción sexual · dominancia incompleta

En este caso, ningún alelo es dominante. La flor del heterocigoto presenta un fenotipo intermedio entre los dos colores.

### 125

De acuerdo con el libro de Biología, cuando los heterocigotos de flores rosadas se autopolinizan y en la F2 vuelven a aparecer las flores rojas y blancas, ¿qué demuestra esto sobre los alelos?

- A. Que los alelos se mantienen como unidades discretas e inalteradas
- B. Que los alelos se fusionan de manera permanente en el heterocigoto
- C. Que los alelos desaparecen al formarse el heterocigoto
- D. Que los alelos mutan durante la autopolinización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 238
**Subtema:** reproducción sexual · dominancia incompleta

Cuando estos individuos se autopolinizan, las características rojo y blanco para el color de las flores aparecen de nuevo en la progenie (F2), lo cual demuestra que los alelos se mantienen como unidades discretas e inalteradas.

---

## Sub-lote 32 · La codominancia y los grupos sanguíneos (pp. 238-239)

### 126

De acuerdo con el libro de Biología, en la codominancia, ¿qué ocurre con los individuos heterocigóticos respecto de los alelos?

- A. Expresan ambos alelos; es decir, los dos fenotipos homocigóticos simultáneamente
- B. Expresan solamente el alelo dominante de los dos
- C. No expresan ninguno de los dos alelos
- D. Expresan un alelo nuevo, distinto del de ambos progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 238
**Subtema:** reproducción sexual · codominancia

Los alelos se mantienen como unidades discretas e inalteradas y también pueden actuar en codominancia. En este caso, los individuos heterocigóticos presentan un fenotipo intermedio, expresan ambos alelos; es decir, los dos fenotipos homocigóticos simultáneamente.

> Distingue **dominancia incompleta** de **codominancia**, el par que más se
> confunde: en la incompleta el heterocigoto es una *mezcla* (el *Antirrhinum*
> rosado, ningún alelo dominante); en la codominancia expresa *los dos fenotipos
> homocigóticos a la vez* (el grupo AB tiene a la vez el antígeno A y el B). Aviso:
> el propio libro redacta flojo la codominancia —le mete "presentan un fenotipo
> intermedio"—, pero la marca que la separa es "expresan ambos alelos
> simultáneamente". No se hizo reactivo que enfrente "intermedio" contra "no
> intermedio", justo porque el libro usa esa palabra en las dos.

### 127

De acuerdo con el libro de Biología, ¿por cuántos alelos está determinado el gen de los cuatro grupos sanguíneos principales (A, B, AB y 0), y cuáles son?

- A. Por un gen que posee tres alelos: I^A, I^B e i
- B. Por un gen que posee dos alelos: I^A e i
- C. Por un gen que posee cuatro alelos: A, B, AB y 0
- D. Por cuatro genes diferentes, uno para cada grupo sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · codominancia

Los cuatro grupos sanguíneos principales, A, B, AB y 0, están determinados por un gen que posee tres alelos: I^A, I^B e i.

### 128

De acuerdo con el libro de Biología, ¿qué relación de dominancia hay entre los alelos I^A, I^B e i de los grupos sanguíneos?

- A. I^A e I^B son codominantes, mientras que i es recesivo
- B. i es codominante con I^A, mientras que I^B es recesivo
- C. Los tres alelos son codominantes entre sí
- D. I^A es dominante sobre I^B, y ambos sobre i

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · codominancia

Los alelos I^A y I^B son codominantes, mientras que el i es recesivo.

### 129

De acuerdo con el libro de Biología, ¿cuál es el genotipo de los individuos con grupo sanguíneo AB y cuál el de los del grupo 0?

- A. El grupo AB siempre es I^AI^B y el grupo 0 siempre es ii
- B. El grupo AB siempre es I^Ai y el grupo 0 siempre es I^Bi
- C. El grupo AB siempre es ii y el grupo 0 siempre es I^AI^B
- D. El grupo AB puede ser I^AI^A o I^BI^B y el grupo 0 es I^Ai

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · codominancia

Los individuos con grupo sanguíneo AB siempre son genotípicamente I^AI^B. Por el contrario, los individuos con grupo sanguíneo 0 siempre son genotípicamente ii.

### 130

De acuerdo con el libro de Biología, ¿qué caracteriza a los grupos sanguíneos A, B y AB en la superficie del glóbulo rojo, y qué ocurre con el grupo 0?

- A. Tienen un antígeno, un polisacárido específico, en la superficie del glóbulo rojo; el grupo 0 no posee estos antígenos
- B. No tienen ningún antígeno; solo el grupo 0 posee antígenos
- C. Tienen un anticuerpo en el plasma; el grupo 0 tiene el doble
- D. Tienen una proteína en el núcleo del glóbulo rojo; el grupo 0 también la tiene

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · codominancia

Los grupos sanguíneos A, B y AB se caracterizan por tener un antígeno, un polisacárido específico, en la superficie del glóbulo rojo. El grupo 0 no posee estos antígenos.

---

## Sub-lote 33 · Los alelos múltiples (fig. 11-31, p. 239)

### 131

De acuerdo con el libro de Biología, aunque un organismo diploide tiene solo dos alelos de un gen dado, ¿de dónde resultan los alelos múltiples que existen para ciertos genes en la población?

- A. De mutaciones diferentes en un solo gen
- B. De la combinación de genes situados en distintos cromosomas
- C. De la fusión de dos genes vecinos en uno solo
- D. De la acción del ambiente sobre el fenotipo del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · alelos múltiples

Aunque cualquier organismo diploide tiene solo dos alelos de un gen dado, es frecuente que, para ciertos genes, existan más de dos variantes en la población. Estos alelos múltiples resultan de mutaciones diferentes en un solo gen.

### 132

De acuerdo con el libro de Biología, en la serie de cuatro alelos que determina el color del pelaje en los conejos, ¿cómo es la relación de dominancia?

- A. Cada alelo es dominante sobre los que vienen a continuación
- B. Los cuatro alelos son codominantes entre sí
- C. El alelo albino es dominante sobre todos los demás
- D. Ningún alelo es dominante y el pelaje siempre es intermedio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · alelos múltiples

El color del pelaje en los conejos está determinado por una serie de cuatro alelos. En esta serie, cada alelo es dominante sobre los que vienen a continuación, en el siguiente orden: C, c^ch, c^h, c.

---

## Sub-lote 34 · Qué es el sexo biológico y sus categorías (pp. 233-234)

### 133

De acuerdo con el libro de Biología, ¿a qué hace referencia, en general, el concepto de sexo biológico?

- A. A aquellas características que son sustento para clasificar a los individuos como machos o hembras
- B. Únicamente a la identidad que cada persona siente como propia
- C. A la composición de los cromosomas del sistema nervioso
- D. Al predominio de las hormonas andrógenos sobre las estrógenos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 233
**Subtema:** reproducción sexual · sexo biológico

El sexo biológico es un concepto que, en general, hace referencia a aquellas características que son sustento para clasificar a los individuos como machos o hembras y que en nuestra especie serán nombradas como hombres y mujeres.

### 134

De acuerdo con el libro de Biología, ¿a qué hace referencia el sexo cromosómico y en qué momento se define?

- A. A la composición de los cromosomas sexuales; se define en el momento de la concepción
- B. Al predominio de un tipo de hormonas; se define en la pubertad
- C. A las gónadas del embrión; se define en el momento del parto
- D. A los genitales internos y externos; se define en la adolescencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · sexo biológico

Sexo cromosómico: hace referencia a la composición de los cromosomas sexuales, que puede ser XX, XY, y diversas intersexualidades. La composición cromosómica se define en el momento de la concepción.

### 135

De acuerdo con el libro de Biología, ¿a qué hace referencia el sexo hormonal?

- A. Al predominio de hormonas andrógenos o de hormonas estrógenos
- B. A la composición de los cromosomas sexuales
- C. A las gónadas que se forman a partir del tejido del embrión
- D. A las características de los genitales internos y externos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · sexo biológico

Sexo hormonal: hace referencia al predominio de hormonas andrógenos o de hormonas estrógenos.

### 136

De acuerdo con el libro de Biología, ¿a qué hace referencia el sexo gonadal?

- A. A las gónadas que se forman a partir del tejido gonadal indiferenciado del embrión
- B. Al predominio de hormonas andrógenos o de hormonas estrógenos
- C. A la composición de los cromosomas sexuales de la persona
- D. A las características de los genitales internos y externos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · sexo biológico

Sexo gonadal: hace referencia a las gónadas que se forman a partir del tejido gonadal indiferenciado del embrión.

---

## Sub-lote 35 · Los cromosomas sexuales y el macho heterogamético (p. 234)

### 137

De acuerdo con el libro de Biología, en algunos insectos como el saltamontes estudiado por Sutton, que no tienen cromosoma Y, ¿cómo son las hembras y los machos?

- A. Las hembras son XX y los machos X0 (el 0 indica la ausencia del cromosoma)
- B. Las hembras son X0 y los machos XX
- C. Las hembras son XY y los machos XX
- D. Las hembras son XX y los machos XY

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · cromosomas sexuales

En algunos insectos, como el saltamontes estudiado por Sutton, no hay cromosoma Y. Las hembras son XX y los machos X0 (el 0 indica la ausencia del cromosoma).

### 138

De acuerdo con el libro de Biología, en las combinaciones XX/XY o XX/X0, ¿por qué se dice que el macho es heterogamético?

- A. Porque puede producir dos tipos de gametos: los que contienen el cromosoma X y los que contienen el Y o no contienen ningún cromosoma sexual
- B. Porque todos sus gametos portan siempre el cromosoma X
- C. Porque no produce gametos con cromosomas sexuales
- D. Porque produce el doble de gametos que la hembra

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · cromosomas sexuales

En las combinaciones XX/XY o XX/X0, el macho es heterogamético porque puede producir dos tipos de gametos: aquellos que contienen el cromosoma X y los que contienen el cromosoma Y o no contienen ningún cromosoma sexual.

### 139

De acuerdo con el libro de Biología, en esas mismas combinaciones, ¿por qué se dice que la hembra es homogamética?

- A. Porque sus gametos siempre portan el cromosoma X
- B. Porque sus gametos portan el cromosoma X o el cromosoma Y
- C. Porque sus gametos no portan ningún cromosoma sexual
- D. Porque sus gametos siempre portan el cromosoma Y

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · cromosomas sexuales

La hembra, en cambio, es homogamética, ya que sus gametos siempre portan el cromosoma X.

> Par contrapuesto (reactivos 138 y 139): el **macho** es *heterogamético* (produce
> dos tipos de gametos) y la **hembra** *homogamética* (todos con X). Cada regla es
> el distractor de la otra. Ojo: esto es en mamíferos e insectos; en aves, polillas
> y mariposas se invierte (reactivo 140).

### 140

De acuerdo con el libro de Biología, ¿en qué grupos ocurre al revés, con los machos homogaméticos y las hembras heterogaméticas?

- A. En las aves, las polillas y las mariposas
- B. En los saltamontes y otros insectos estudiados por Sutton
- C. En los mamíferos y las plantas de guisante
- D. En las moscas del género *Drosophila*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · cromosomas sexuales

Sin embargo, en otros casos, como en las aves, las polillas y las mariposas, ocurre al revés: los machos son homogaméticos y las hembras heterogaméticas.

---

## Sub-lote 36 · La meiosis y la determinación cromosómica del sexo (fig. 11-25, p. 234)

### 141
De acuerdo con el libro de Biología, en los humanos, durante la meiosis del varón, ¿cuántos espermatozoides produce cada célula diploide y qué cromosoma sexual recibe cada uno?
- A. Cuatro espermatozoides haploides: dos reciben un cromosoma X y los otros dos, un cromosoma Y
- B. Dos espermatozoides haploides: uno con el cromosoma X y otro con el Y
- C. Cuatro espermatozoides haploides, todos con el cromosoma X
- D. Cuatro espermatozoides haploides, todos con el cromosoma Y

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · determinación del sexo

En los humanos, durante la meiosis del varón, cada célula diploide que origina los espermatozoides produce cuatro espermatozoides haploides. Dos reciben un cromosoma X y los otros dos reciben un cromosoma Y.

### 142

De acuerdo con el libro de Biología, durante la meiosis de la mujer, ¿qué cromosoma sexual contiene cualquier óvulo que se forma, y por qué?

- A. Un cromosoma X, dado que la mujer no posee cromosoma Y en ninguna de sus células
- B. Un cromosoma Y, dado que la mujer no posee cromosoma X en sus células
- C. Un cromosoma X o uno Y, según cada óvulo
- D. Ningún cromosoma sexual hasta el momento de la fecundación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · determinación del sexo

Durante la meiosis de la mujer, cualquier óvulo que se forma contiene un cromosoma X, dado que no posee cromosoma Y en ninguna de sus células.

### 143

De acuerdo con el libro de Biología, en las especies en las que los machos son heterogaméticos, ¿qué define el sexo cromosómico de la progenie?

- A. El cromosoma sexual aportado por el espermatozoide que fecunda al óvulo
- B. El cromosoma sexual aportado por el óvulo
- C. El número total de cromosomas del cigoto
- D. La cantidad de hormonas producidas por el embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · determinación del sexo

En las especies en las que los machos son heterogaméticos, el cromosoma sexual aportado por el espermatozoide define el sexo cromosómico de la progenie.

### 144
De acuerdo con el libro de Biología, ¿a qué da lugar el cigoto si al óvulo lo fecunda un espermatozoide con cromosoma X, y si lo fecunda uno con cromosoma Y?
- A. Con el cromosoma X, a una hembra (XX); con el cromosoma Y, a un macho (XY)
- B. Con el cromosoma X, a un macho (XY); con el cromosoma Y, a una hembra (XX)
- C. Con el cromosoma X o con el Y, siempre a una hembra (XX)
- D. Con el cromosoma X, a una hembra (XX); con el cromosoma Y, a una hembra (X0)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · determinación del sexo

Si un espermatozoide que lleva un cromosoma X fecunda al óvulo, el cigoto dará lugar a una hembra (XX); si un espermatozoide que lleva un cromosoma Y fecunda al óvulo, el cigoto dará lugar a un macho (XY).

### 145

De acuerdo con el libro de Biología, además de los individuos XX y XY, ¿qué otras variantes de menor frecuencia existen en la población humana?

- A. Variantes como X0, XXY y XXX, entre otras
- B. Variantes como YY y Y0
- C. No existe ninguna otra variante además de XX y XY
- D. Variantes como XXXX en todos los casos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 234
**Subtema:** reproducción sexual · determinación del sexo

En la población humana existen, además de individuos XX y XY, otras variantes de menor frecuencia, como X0, XXY, XXX, entre otras.

---

## Sub-lote 37 · La herencia poligénica y la variación continua (fig. 11-32, pp. 239-240)

### 146

De acuerdo con el libro de Biología, ¿cómo se conoce el fenómeno por el cual características como la altura, el peso, el color o el comportamiento resultan de la acción acumulativa de los efectos combinados de muchos genes?

- A. Herencia poligénica
- B. Dominancia incompleta
- C. Codominancia
- D. Ligamiento entre genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · herencia poligénica

Algunas características, como el tamaño, la altura, el peso, la forma, el color, la tasa metabólica y el comportamiento no son el resultado de interacciones entre uno, dos o varios genes, sino de la acción acumulativa de los efectos combinados de muchos genes. Este fenómeno se conoce como herencia poligénica.

### 147

De acuerdo con el libro de Biología, las características determinadas por varios genes o poligenes no muestran diferencias nítidas, sino una gradación de pequeñas diferencias que se conoce como…

- A. Variación continua
- B. No disyunción
- C. Dominancia incompleta
- D. Herencia ligada al sexo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · herencia poligénica

Las características determinadas por varios genes, o poligenes, no muestran diferencias nítidas entre los grupos de individuos, como las estudiadas por Mendel. En cambio, muestran una gradación de pequeñas diferencias que se conoce como variación continua.

### 148
De acuerdo con el libro de Biología, ¿qué forma tiene la curva de distribución de la altura de los hombres de una población y dónde se ubica la media?
- A. Forma de campana, con la media o promedio ubicada habitualmente en el centro de la curva
- B. Forma de recta ascendente, con la media en un extremo
- C. Forma de campana, con la media siempre en un extremo
- D. Forma de dos campanas, con la media entre ambas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · herencia poligénica

La altura es una característica afectada por varios genes. La curva de distribución de la altura tiene forma de campana con la media o promedio ubicada habitualmente en el centro de la curva.

### 149

De acuerdo con el libro de Biología, ¿cómo son la mayoría de las características humanas que dan lugar a la variabilidad fenotípica entre individuos?

- A. Son poligénicas
- B. Dependen de un solo gen
- C. Son codominantes
- D. Están ligadas al sexo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · herencia poligénica

Se considera que el color de la piel en los seres humanos se encuentra bajo un control genético semejante, así como lo están muchas otras características. De hecho, la mayoría de las características humanas que dan lugar a la variabilidad fenotípica entre individuos son poligénicas.

---

## Sub-lote 38 · La interacción entre los genes y el ambiente (fig. 11-33, pp. 239-240)

### 150

De acuerdo con el libro de Biología, ¿de qué depende la expresión de los genes?

- A. De la interacción con el medioambiente
- B. Únicamente del número de cromosomas del organismo
- C. Solo del alelo dominante que esté presente
- D. Exclusivamente de las hormonas del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 239
**Subtema:** reproducción sexual · genes y ambiente

La expresión de los genes depende de la interacción con el medioambiente.

### 151

De acuerdo con el libro de Biología, según el ejemplo de la plántula, que tiene la capacidad determinada genéticamente de ser verde, ¿qué ocurre si se la mantiene en la oscuridad?

- A. Nunca se volverá verde
- B. Se volverá verde, pero más lentamente
- C. Se volverá verde igual que con luz
- D. Se volverá verde y además florecerá antes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · genes y ambiente

Una plántula puede tener la capacidad determinada genéticamente de ser verde, de florecer y fructificar, pero nunca se volverá verde si se mantiene en la oscuridad.

### 152
De acuerdo con el libro de Biología, en el ranúnculo de agua, ¿cómo son las hojas que crecen por encima del agua frente a las que crecen bajo el agua, siendo genéticamente idénticas?
- A. Las de encima son anchas, planas y lobuladas; las de bajo el agua, delgadas y finamente divididas
- B. Las de encima son delgadas y divididas; las de bajo el agua, anchas y planas
- C. Todas las hojas son idénticas en forma, por encima y por debajo del agua
- D. Las hojas de bajo el agua no llegan a desarrollarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · genes y ambiente

Las hojas que crecen por encima del agua son anchas, planas y lobuladas; las que crecen bajo el agua, genéticamente idénticas a las anteriores, son delgadas y están finamente divididas.

### 153

De acuerdo con el libro de Biología, ¿de qué color son las flores de las prímulas a temperatura ambiente, y qué ocurre cuando la temperatura se eleva por encima de 30 °C?

- A. Rojas a temperatura ambiente; blancas cuando la temperatura supera los 30 °C
- B. Blancas a temperatura ambiente; rojas cuando la temperatura supera los 30 °C
- C. Rojas siempre, sin importar la temperatura
- D. Rosadas a temperatura ambiente; rojas cuando la temperatura supera los 30 °C

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · genes y ambiente

Las prímulas, plantas de flores rojas a temperatura ambiente, tienen flores blancas cuando la temperatura se eleva por encima de 30ºC.

### 154

De acuerdo con el libro de Biología, ¿de qué color son los conejos himalayos a temperaturas altas y a temperaturas bajas?

- A. Blancos a temperaturas altas y negros a temperaturas bajas
- B. Negros a temperaturas altas y blancos a temperaturas bajas
- C. Blancos a cualquier temperatura
- D. Grises a temperaturas altas y blancos a temperaturas bajas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · genes y ambiente

Los conejos himalayos son blancos a temperaturas altas y negros a temperaturas bajas.

### 155

De acuerdo con el libro de Biología, ¿en qué zonas son negros los gatos siameses criados a temperatura ambiente?

- A. En sus zonas periféricas más frías, como las orejas, la nariz y la punta de la cola
- B. En el lomo y el vientre, sus zonas más cálidas
- C. Por todo el cuerpo de manera uniforme
- D. Solamente en las patas traseras

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · genes y ambiente

Los gatos siameses criados a temperatura ambiente son negros en sus zonas periféricas más frías, como las orejas, la nariz y la punta de la cola.

> Tres ejemplos de un mismo tipo (el color depende de la temperatura): prímulas
> (blancas por encima de 30 °C), conejos himalayos (blancos con calor, negros con
> frío) y gatos siameses (negros en las zonas más frías). Los reactivos 153, 154 y
> 155 se prestan a usarse unos como distractores de otros.

### 156

De acuerdo con el libro de Biología, ¿cuál es el primer principio que ilustran estos ejemplos?

- A. El fenotipo de cualquier organismo es el resultado de la interacción entre los genes y el ambiente
- B. El fenotipo de un organismo depende únicamente de su genotipo
- C. El ambiente no tiene ningún efecto sobre el fenotipo
- D. El genotipo es el resultado de la interacción entre el fenotipo y el ambiente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 240
**Subtema:** reproducción sexual · genes y ambiente

El fenotipo de cualquier organismo es el resultado de la interacción entre los genes y el ambiente.

---

## Sub-lote 39 · Ensayo 11-1 · El síndrome de Down (p. 221)

### 157

De acuerdo con el libro de Biología, según el ensayo 11-1, ¿a quién debe su nombre el síndrome de Down y en qué año se describió esta alteración?

- A. Al médico inglés John Langdon Haydon Down, que la describió en 1866
- B. Al médico francés Jérôme Lejeune, que la describió en 1958
- C. Al médico inglés John Langdon Haydon Down, que la describió en 1958
- D. Al médico francés Jérôme Lejeune, que la describió en 1866

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · síndrome de Down

El síndrome de Down debe su nombre al médico inglés John Langdon Haydon Down (1828-1896), quien describió esta alteración en 1866, aunque no dilucidó las causas que la producían.

### 158

De acuerdo con el libro de Biología, según el ensayo 11-1, ¿qué encontró en 1958 el investigador francés Jérôme Lejeune sobre el síndrome de Down?

- A. Que el síndrome estaba asociado con una trisomía en el par 21 de cromosomas
- B. Que el síndrome estaba asociado con una trisomía en el par 23 de cromosomas
- C. Que el síndrome se debía a la falta de un cromosoma del par 21
- D. Que el síndrome no tenía ninguna relación con los cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · síndrome de Down

En 1958, un investigador francés, Jérôme Lejeune (1926-1994), encontró que el síndrome estaba asociado con una trisomía en el par 21 de cromosomas.

### 159

De acuerdo con el libro de Biología, según el ensayo 11-1, ¿qué denominación alternativa propuso el propio Lejeune para el síndrome de Down?

- A. Trisomía 21
- B. Monosomía 21
- C. Trisomía 23
- D. Síndrome de Lejeune

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · síndrome de Down

El propio Lejeune propuso la denominación alternativa de "trisomía 21".

### 160

De acuerdo con el libro de Biología, según el ensayo 11-1, ¿qué hizo la Organización Mundial de la Salud en 1965 respecto de este síndrome?

- A. Hizo un cambio de nomenclatura tras una petición formal del delegado de Mongolia
- B. Prohibió el estudio genético del síndrome
- C. Declaró que el síndrome no era hereditario
- D. Estableció el primer tratamiento farmacológico para el síndrome

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · síndrome de Down

En 1965, la Organización Mundial de la Salud hizo un cambio de nomenclatura tras una petición formal del delegado de Mongolia.

### 161

De acuerdo con el libro de Biología, según el ensayo 11-1, ¿a qué se debe que las personas con síndrome de Down puedan padecer patologías del corazón, el sistema digestivo y el sistema endocrino?

- A. Al exceso de proteínas sintetizadas por el cromosoma extranumerario
- B. A la falta de proteínas por un cromosoma faltante
- C. A una mutación en el cromosoma X
- D. A la ausencia total del cromosoma del par 21

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · síndrome de Down

Las personas con síndrome de Down tienen una discapacidad cognitiva variable y pueden padecer algunas patologías, en especial del corazón, el sistema digestivo y el sistema endocrino debido al exceso de proteínas sintetizadas por el cromosoma extranumerario.

### 162

De acuerdo con el libro de Biología, según el ensayo 11-1, ¿cómo cambió la esperanza de vida de las personas con síndrome de Down, de hace unas décadas a la actualidad en los países desarrollados?

- A. Subió de 14 años hace unas décadas hasta casi la media poblacional (60 años, en países desarrollados)
- B. Bajó de 60 años hace unas décadas a 14 años en la actualidad
- C. Se mantuvo en 14 años, sin cambios
- D. Subió de 30 años a 45 años

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 221
**Subtema:** reproducción sexual · síndrome de Down

En la actualidad, la esperanza de vida de estas personas (14 años hace unas décadas) ha subido hasta alcanzar casi la media poblacional (60 años, en países desarrollados).

---

**Reactivos en este archivo:** 162
