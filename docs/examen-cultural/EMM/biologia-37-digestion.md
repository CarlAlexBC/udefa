# Biología · Capítulo 37 · La digestión

## Libro — a quién pertenece este material

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Los reactivos pertenecen al libro, no a un plantel.** El orden es
`Libro → Capítulo → Tema → Reactivo`. Un plantel no es dueño del material: por el otro
lado va la demanda (`Plantel → Carrera → Temario por año → selecciona Temas`), y un examen
se arma cruzando ambos. Por eso el mismo reactivo puede servir a varias escuelas y
carreras sin existir dos veces, y por eso los campos **Referencia:** (libro, edición,
página) y **Subtema:** son la llave con la que el temario los manda a llamar.

**Quién lo pide hoy:** Escuela Militar de Medicina, Curso de Formación de Médico Cirujano
Militar (clave de materia `BIO-01-2026`). Si mañana otra escuela pide estos temas, se
traen de aquí: no se duplican.

> **Carpeta pendiente de migrar.** Este archivo nace en `docs/examen-cultural/EMM/` a
> propósito, junto al resto de Biología, para que la materia se mueva completa en un solo
> paso y no quede partida en dos sitios. Cuando se migre, la carpeta se nombra por el
> **libro** (como ya se hizo con `fisica-perez-montiel/`), no por la escuela.

**Capítulos de este libro ya cerrados:** 3 (221 reactivos), 4 (190), 5 (157), 7 (240),
8 (149), 11 (162), 12 (131), 31 (84), 32 (271), 35 (166) y 36 (153). **El 37 es el último
capítulo del temario de Biología:** cuando cierre, la materia queda completa.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro trae capa
de texto). Las figuras y los recuadros "ENSAYO" van con `render.py` (su capa de texto es
lorem ipsum o viene cifrada). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado.** El capítulo 37 pertenece a la **Sección VI ·
Biología de los animales**. El cap 36 termina en la hoja 900 (página impresa 854, con los
ejercicios "Situaciones problemáticas"). La **portadilla del capítulo 37 está en la hoja
901 (página impresa 855)**: trae el título "LA DIGESTIÓN", el número 37, el epígrafe de
Hipócrates y el apartado de apertura "Biología en contexto social · Ecosistemas bacterianos
y salud humana". **El cuerpo empieza en la hoja 902 (página impresa 856)**, con la
introducción histórica sobre el proceso digestivo. El desfase +46 se **reverificó aquí**
(hoja 900 = p. 854), leído de la hoja, nunca calculado.

**Qué queda fuera por norma.** El apartado de apertura "Biología en contexto social ·
Ecosistemas bacterianos y salud humana" **no lleva reactivos**, igual que en los capítulos
32, 35 y 36. **OJO:** ese apartado no es corto — se extiende por las páginas 855-856 e
incluye todo el material sobre la microbiota humana (las ~2000 especies, los 10^14
microorganismos, los rumiantes y las termitas, la vitamina K y las vitaminas del complejo B
del colon, los probióticos, el Proyecto Microbioma Humano). Es material tentador, pero es
marco social discursivo de apertura y **no se le escriben reactivos**. Tampoco al ensayo de
cierre "Retomando la problemática inicial" ni a los ejercicios ("Cuestionario",
"Situaciones problemáticas").

## Cobertura actual

Cubierta la página impresa **856** (cuerpo, no el apartado social): la introducción histórica
al estudio de la digestión (los animales que deben consumir el alimento del exterior, la
digestión como degradación de los alimentos, el debate entre "mecanicistas" y "químicos", y
el recorrido del alimento de la boca a las heces) y el arranque de "La evolución de los
sistemas digestivos" (los invertebrados con un sistema simple de una sola abertura). De la
**página 857** se cubren la observación de Pavlov (la superficie interna del tubo digestivo
como prolongación de la externa, y los nutrientes que solo ingresan al atravesar el epitelio),
los movimientos de mezcla y peristálticos del músculo liso, los esfínteres como válvulas, el
peritoneo de la cavidad abdominal, y el arranque de "Procesamiento inicial del alimento: la
boca" (la fragmentación mecánica y los dientes de los mamíferos, fig. 37-4). De la **página
858** se cubre el ensayo 37-1 sobre la historia de la comprensión de la digestión (los
hallazgos de Réaumur, Spallanzani, Schwann y la pepsina, Claude Bernard y Pavlov). De la
**página 859** se cubren el recorrido del alimento y las capas del tubo digestivo (figs.
37-2 y 37-3: boca → faringe → esófago → estómago → intestino delgado → colon → recto → ano,
los órganos anexos, las cuatro capas y el mesenterio), la lengua (papilas gustativas y
articulación de sonidos), las glándulas salivales y la saliva (los tres pares, la
alcalinidad por bicarbonato, la amilasa salival, el control autónomo, la salivación por
olfato/vista, la inhibición por miedo y el 1-1,5 L diario) y la deglución (el bolo
alimenticio, su carácter voluntario que sigue involuntario, el esfínter esofágico superior,
el músculo estriado y liso del esófago, la peristalsis y el moco protector).

**Pendiente:** el capítulo 37 está EN CURSO; sigue desde la página impresa 860 (hoja 906) en adelante (el estómago y los jugos gástricos, el intestino delgado, el páncreas y el hígado, el intestino grueso y el resto del sistema digestivo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). El capítulo 37 es el último del temario de Biología: no quedan otros capítulos por empezar, así que este archivo sostiene el pendiente de la materia hasta que el propio capítulo 37 se cierre. El capítulo 37 es el último del temario de Biología: no quedan otros capítulos por empezar, así que este archivo sostiene el pendiente de la materia hasta que el propio capítulo 37 se cierre.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta —en negrita y con dos puntos— y toma el párrafo
> que le sigue hasta el primer renglón en blanco. Si se convierte en encabezado
> (`## Pendiente`), si desaparece, o si empieza con "ninguno", Biología se reporta como
> cerrada. Por eso el capítulo en curso sostiene, en un solo párrafo, lo que falta.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · Qué es la digestión y su estudio histórico (p. 856)

### 1

De acuerdo con el libro de Biología, a diferencia de las plantas, que producen su propio alimento, ¿cómo obtienen los animales la energía y la materia?

- A. Deben consumir el alimento del exterior
- B. Lo producen ellos mismos por fotosíntesis
- C. Lo sintetizan en el hígado
- D. Lo absorben por difusión a través de la piel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 856
**Subtema:** digestión · nutrición animal

A diferencia de las plantas –que producen su propio alimento–, los animales deben consumirlo del exterior.

---

### 2

De acuerdo con el libro de Biología, ¿cómo se denomina el proceso de degradación de los alimentos?

- A. La digestión
- B. La homeostasis
- C. La peristalsis
- D. La absorción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 856
**Subtema:** digestión · concepto

El proceso de degradación de los alimentos –la digestión–.

---

### 3

De acuerdo con el libro de Biología, para los naturalistas "mecanicistas", ¿cuál era el proceso más importante de la digestión?

- A. La trituración de los alimentos
- B. La acción de un agente químico
- C. La absorción de nutrientes en el intestino
- D. La síntesis de vitaminas por la microbiota

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 856
**Subtema:** digestión · estudio histórico

Para los naturalistas "mecanicistas", quienes buscaban explicaciones mecánicas para todos los fenómenos del cuerpo humano, la trituración de los alimentos era el proceso más importante de la digestión.

---

### 4

De acuerdo con el libro de Biología, ¿qué sostenían quienes pensaban que en la digestión prevalecían los fenómenos químicos?

- A. Que debía existir algún agente químico responsable de la digestión de los alimentos
- B. Que la trituración de los alimentos era el proceso más importante
- C. Que la digestión no requería ningún proceso interno
- D. Que el alimento se absorbía sin degradarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 856
**Subtema:** digestión · estudio histórico

Aquellos que pensaban que prevalecían los fenómenos químicos insistían en que debía existir algún agente químico responsable de la digestión de los alimentos.

> Este reactivo forma par con el 3 (mecanicistas: la trituración / químicos: un agente químico).

---

### 5

De acuerdo con el libro de Biología, ¿hasta dónde llega el recorrido del alimento que estudian los modelos del proceso digestivo?

- A. Desde que ingresa por la boca hasta que es metabolizado por las células o abandona el sistema digestivo en forma de heces
- B. Desde la boca únicamente hasta el estómago
- C. Solo mientras el alimento se tritura en la boca
- D. Desde la sangre hasta los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 856
**Subtema:** digestión · procesos digestivos

Los procesos que, en los animales, experimenta el alimento desde que ingresa por la boca hasta que es metabolizado por las células del organismo o hasta que, finalmente, abandona el sistema digestivo en forma de heces.

---

## Sub-lote 2 · La evolución de los sistemas digestivos y el tubo digestivo (fig. 37-3, p. 856-857)

### 6

De acuerdo con el libro de Biología, ¿cómo es el sistema digestivo de ciertos invertebrados?

- A. Muy simple, con una sola abertura
- B. Con cuatro cámaras especializadas
- C. Con dos tubos digestivos paralelos
- D. Sin tubo digestivo, por difusión directa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 856
**Subtema:** digestión · evolución de los sistemas digestivos

Ciertos invertebrados poseen un sistema digestivo muy simple, con una sola abertura, mientras que otros presentan especializaciones en distintos tramos del tubo digestivo.

---

### 7

De acuerdo con el libro de Biología, según señaló el fisiólogo Iván P. Pavlov, ¿por qué la cavidad digestiva no forma parte del medio interno del organismo?

- A. Porque la superficie interna del tubo digestivo es una prolongación de la superficie externa del cuerpo
- B. Porque está tapizada por el peritoneo
- C. Porque carece de músculo liso
- D. Porque no contiene microbiota

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · tubo digestivo

La superficie interna del tubo digestivo es una prolongación de la superficie externa del cuerpo y, por esta razón, la cavidad digestiva no forma parte del medio interno de un organismo.

---

### 8

De acuerdo con el libro de Biología, ¿cuándo ingresan los nutrientes al medio interno del organismo?

- A. Solo cuando atraviesan el epitelio que reviste el tubo digestivo
- B. Apenas ingresan por la boca
- C. Cuando llegan al estómago
- D. Cuando son triturados por los dientes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · tubo digestivo

Los nutrientes ingresan allí solo cuando atraviesan el epitelio que reviste el tubo digestivo.

---

### 9

De acuerdo con el libro de Biología, ¿qué producen las contracciones coordinadas del músculo liso de la pared del tubo digestivo?

- A. Movimientos tanto de mezcla como peristálticos; estos últimos propulsan el alimento a lo largo del tubo digestivo
- B. Únicamente la trituración mecánica del alimento
- C. La secreción de las enzimas digestivas
- D. La absorción de los nutrientes hacia la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · motilidad

Las contracciones coordinadas del músculo liso, que forma parte de la pared del tubo digestivo, producen movimientos tanto de mezcla como peristálticos; estos últimos propulsan el alimento a lo largo del tubo digestivo.

---

### 10

De acuerdo con el libro de Biología, ¿qué son los esfínteres del tubo digestivo?

- A. Bandas anchas de la capa muscular que actúan como válvulas y controlan el paso del alimento de un compartimento a otro
- B. Glándulas que secretan enzimas digestivas
- C. Pliegues del epitelio que absorben nutrientes
- D. Prolongaciones de la lengua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · esfínteres

En varias zonas, la capa muscular se engrosa y forma bandas anchas: los esfínteres, los cuales, al relajarse o contraerse, actúan como válvulas que controlan el paso del alimento de un compartimento a otro del tubo digestivo.

---

### 11

De acuerdo con el libro de Biología, ¿qué es el peritoneo que tapiza la cavidad abdominal?

- A. Una capa delgada de tejido conjuntivo y epitelio (serosa) que protege los órganos abdominales
- B. Una banda muscular que actúa como válvula
- C. El epitelio interno del tubo digestivo
- D. Un conjunto de glándulas salivales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · peritoneo

La mayor parte del sistema digestivo se aloja en la cavidad abdominal. Esta cavidad está tapizada por completo por el peritoneo, una capa delgada de tejido conjuntivo y epitelio (serosa), que protege los órganos abdominales.

---

## Sub-lote 3 · El procesamiento inicial: la boca (fig. 37-4, p. 857)

### 12

De acuerdo con el libro de Biología, ¿qué comienza en la boca?

- A. La fragmentación mecánica del alimento
- B. La absorción de los nutrientes
- C. La síntesis de vitaminas
- D. La formación de las heces

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · la boca

En la boca comienza la fragmentación mecánica del alimento.

---

### 13

De acuerdo con el libro de Biología, ¿con qué rompen y trituran la comida la mayoría de los mamíferos?

- A. Con dientes
- B. Con esfínteres
- C. Con el peritoneo
- D. Con movimientos peristálticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 857
**Subtema:** digestión · la boca

La mayoría de los mamíferos tienen dientes con los que rompen y trituran la comida que ingieren.

---

## Sub-lote 4 · El ensayo 37-1: la historia de la comprensión de la digestión (p. 858)

### 14

De acuerdo con el libro de Biología, en su experimento con el halcón y los cilindros metálicos, ¿qué concluyó Réaumur al encontrar la carne parcialmente disuelta?

- A. Que la acción mecánica no era necesaria para comenzar la degradación del alimento
- B. Que la digestión era un proceso exclusivamente mecánico
- C. Que el alimento no se degradaba en el estómago
- D. Que los jugos gástricos eran de naturaleza alcalina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 858
**Subtema:** digestión · historia de la ciencia

Réaumur encontró que la carne estaba parcialmente disuelta: la acción mecánica no era necesaria para comenzar la degradación del alimento.

---

### 15

De acuerdo con el libro de Biología, ¿qué comprobó Lazzaro Spallanzani sobre la digestión?

- A. Que el jugo gástrico es el agente responsable de la transformación de los alimentos
- B. Que la digestión es un proceso puramente mecánico
- C. Que la digestión ocurre solo en el intestino
- D. Que la saliva es el único agente digestivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 858
**Subtema:** digestión · historia de la ciencia

Comprobó que el jugo gástrico es el agente responsable de la transformación de los alimentos.

---

### 16

De acuerdo con el libro de Biología, ¿qué enzima encontró Theodor Schwann?

- A. La pepsina
- B. La amilasa
- C. La anhidrasa carbónica
- D. La tripsina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 858
**Subtema:** digestión · historia de la ciencia

Schwann encontró la enzima pepsina, que veremos más adelante en este capítulo.

---

### 17

De acuerdo con el libro de Biología, ¿qué demostró Claude Bernard sobre la digestión?

- A. Que la digestión no se realiza en su totalidad en el estómago
- B. Que la digestión ocurre exclusivamente en el estómago
- C. Que el jugo gástrico no interviene en la digestión
- D. Que la saliva digiere las proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 858
**Subtema:** digestión · historia de la ciencia

Claude Bernard (1813-1878) demostró que la digestión no se realiza en su totalidad en el estómago.

---

### 18

De acuerdo con el libro de Biología, ¿qué demostró Iván P. Pavlov sobre el proceso digestivo?

- A. El papel que cumple el sistema nervioso en la regulación del proceso digestivo
- B. Que la digestión es un proceso puramente químico
- C. Que la pepsina se produce en el páncreas
- D. Que la saliva contiene bicarbonato de sodio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 858
**Subtema:** digestión · historia de la ciencia

Pavlov demostró el papel que cumple el sistema nervioso en la regulación del proceso digestivo y sentó así las bases de la fisiología moderna de la digestión.

---

## Sub-lote 5 · El recorrido del alimento y las capas del tubo digestivo (figs. 37-2 y 37-3, p. 859)

### 19

De acuerdo con el libro de Biología, ¿cuál es el recorrido del alimento hasta el sitio donde ocurre la mayor parte de la digestión y la absorción?

- A. Boca → faringe → esófago → estómago → intestino delgado
- B. Boca → esófago → estómago → colon → recto
- C. Boca → faringe → estómago → hígado → páncreas
- D. Boca → intestino delgado → estómago → faringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · recorrido del alimento

El alimento ingresa por la boca, recorre la faringe y el esófago hasta llegar al estómago y al intestino delgado, en donde ocurre la mayor parte de la digestión y la absorción.

---

### 20

De acuerdo con el libro de Biología, ¿en qué órgano ocurre la mayor parte de la digestión y la absorción?

- A. En el intestino delgado
- B. En el estómago
- C. En la boca
- D. En el colon

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · recorrido del alimento

Hasta llegar al estómago y al intestino delgado, en donde ocurre la mayor parte de la digestión y la absorción.

---

### 21

De acuerdo con el libro de Biología, ¿qué ocurre con los materiales no digeridos?

- A. Ingresan en el intestino grueso (colon), se almacenan brevemente en el recto y se eliminan a través del ano
- B. Regresan al estómago para una segunda digestión
- C. Se absorben por completo en el intestino delgado
- D. Se eliminan directamente por la boca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · recorrido del alimento

Los materiales no digeridos ingresan luego en el intestino grueso (colon ascendente, transverso y descendente), se almacenan brevemente en el recto y se eliminan a través del ano.

---

### 22

De acuerdo con el libro de Biología, además de las glándulas salivales, ¿cuáles son otros órganos especializados del sistema digestivo?

- A. El páncreas, el hígado y la vesícula biliar
- B. Los pulmones, el bazo y los riñones
- C. El corazón y las arterias coronarias
- D. La faringe y la laringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · órganos del sistema digestivo

Otros órganos especializados del sistema digestivo son tres pares de glándulas salivales que producen la mayor parte de la saliva [...]: el páncreas, el hígado y la vesícula biliar.

---

### 23

De acuerdo con el libro de Biología, ¿cuáles son las cuatro capas que se diferencian en un corte transversal del tubo digestivo?

- A. Mucosa, submucosa, musculatura lisa externa y serosa (peritoneo visceral)
- B. Epidermis, dermis, hipodermis y serosa
- C. Endotelio, media, adventicia y mucosa
- D. Mucosa, endotelio, miocardio y serosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · capas del tubo digestivo

Se diferencian las siguientes capas: 1) mucosa, que comprende un epitelio, membrana basal, tejido conjuntivo y una delgada capa muscular (muscularis mucosae); 2) submucosa que contiene tejido conjuntivo, glándulas, vasos sanguíneos y nervios; 3) musculatura lisa externa (circular y longitudinal); y 4) serosa (también conocida como peritoneo visceral).

---

### 24

De acuerdo con el libro de Biología, ¿qué es un mesenterio?

- A. Un pliegue del peritoneo que sujeta el tubo digestivo a la pared abdominal
- B. La capa muscular externa del tubo digestivo
- C. Una glándula de la submucosa
- D. El epitelio interno de la mucosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · mesenterio

Un mesenterio es un pliegue del peritoneo que sujeta el tubo digestivo a la pared abdominal.

---

## Sub-lote 6 · La lengua, las glándulas salivales y la saliva (p. 859)

### 25

De acuerdo con el libro de Biología, ¿qué tiene la lengua de los mamíferos, a través de lo cual perciben el sabor de los alimentos?

- A. Papilas gustativas
- B. "Dientes" córneos
- C. Glándulas salivales
- D. Esfínteres

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · la lengua

La lengua de los mamíferos tiene papilas gustativas, a través de las cuales estos animales perciben el sabor de los alimentos.

---

### 26

De acuerdo con el libro de Biología, además de proveer el sentido del gusto, ¿para qué se utiliza la lengua en los humanos?

- A. Para articular sonidos durante la comunicación oral
- B. Para producir la bilis
- C. Para almacenar el bolo alimenticio
- D. Para secretar la pepsina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · la lengua

Además de proveer este sentido químico, la lengua se utiliza para articular sonidos durante la comunicación oral en los humanos.

---

### 27

De acuerdo con el libro de Biología, durante la masticación, ¿qué función cumple la saliva producida por las glándulas salivales?

- A. Humedece y lubrica el alimento
- B. Absorbe los nutrientes del alimento
- C. Neutraliza los jugos gástricos del estómago
- D. Almacena el bolo alimenticio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · saliva

Durante la masticación, la saliva, producida principalmente por tres pares de glándulas salivales, humedece y lubrica el alimento.

---

### 28

De acuerdo con el libro de Biología, ¿por qué la saliva es ligeramente alcalina?

- A. Porque contiene bicarbonato de sodio
- B. Porque contiene amilasa
- C. Porque contiene pepsina
- D. Porque contiene ácido clorhídrico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · saliva

Es ligeramente alcalina debido a que contiene bicarbonato de sodio.

---

### 29

De acuerdo con el libro de Biología, ¿qué digiere inicialmente la amilasa salival de la saliva?

- A. Los hidratos de carbono, como los almidones
- B. Las proteínas
- C. Las grasas
- D. Los ácidos nucleicos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · amilasa salival

La saliva también contiene una enzima: la amilasa salival, que digiere inicialmente hidratos de carbono, como los almidones.

---

### 30

De acuerdo con el libro de Biología, en los humanos, ¿dónde tiene lugar la primera etapa de la digestión y qué sistema la controla?

- A. En la boca, a partir de la secreción de saliva, controlada por el sistema nervioso autónomo
- B. En el estómago, controlada por el sistema nervioso central
- C. En el intestino delgado, controlada de forma voluntaria
- D. En el esófago, controlada por la amilasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · primera etapa

En los humanos, la primera etapa de la digestión tiene lugar en la boca, a partir de la secreción de saliva. Este proceso es controlado por el sistema nervioso autónomo.

---

### 31

De acuerdo con el libro de Biología, además de la presencia de alimento en la boca, ¿qué puede iniciar la secreción de saliva, según los experimentos de Pavlov?

- A. El simple olfato o vista del alimento
- B. La contracción del estómago
- C. La llegada del bolo al esófago
- D. La acción de la pepsina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · salivación

Puede ser iniciado por la mera presencia de alimento en la boca e incluso, como demostrara Pavlov en sus experimentos sobre el aprendizaje asociativo, por el simple olfato o vista del alimento.

---

### 32

De acuerdo con el libro de Biología, ¿qué efecto tiene el miedo sobre la salivación?

- A. La inhibe, y en ocasiones de gran peligro o estrés la boca puede secarse tanto que es difícil hablar
- B. La aumenta notablemente
- C. No tiene ningún efecto
- D. La vuelve más ácida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · salivación

El miedo inhibe la salivación y, en ocasiones de gran peligro o estrés, la boca puede secarse tanto que es difícil hablar.

---

### 33

De acuerdo con el libro de Biología, en promedio, ¿cuánta saliva producimos los humanos cada 24 horas?

- A. Entre 1 y 1,5 litros
- B. Entre 5 y 6 litros
- C. Entre 100 y 150 mililitros
- D. Entre 10 y 15 litros

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · saliva

En promedio, los humanos producimos entre 1 y 1,5 litros de saliva cada 24 horas.

---

## Sub-lote 7 · La deglución: la faringe y el esófago (fig. 37-6, p. 859)

### 34

De acuerdo con el libro de Biología, ¿cómo se denomina el mecanismo por el cual el bolo alimenticio pasa de la boca a la faringe y luego al esófago?

- A. Deglución
- B. Peristalsis
- C. Absorción
- D. Masticación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · deglución

El alimento parcialmente digerido abandona la boca en forma de bolo alimenticio y pasa a la faringe y luego al esófago por un mecanismo denominado deglución.

---

### 35

De acuerdo con el libro de Biología, ¿en qué forma abandona la boca el alimento parcialmente digerido?

- A. En forma de bolo alimenticio
- B. En forma de quimo
- C. En forma de heces
- D. En forma de amilasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · bolo alimenticio

El alimento parcialmente digerido abandona la boca en forma de bolo alimenticio.

---

### 36

De acuerdo con el libro de Biología, ¿cómo comienza y cómo continúa la deglución en los humanos?

- A. Comienza como una acción voluntaria y continúa de modo involuntario después de que el alimento abandona la boca
- B. Es totalmente voluntaria de principio a fin
- C. Es totalmente involuntaria desde el inicio
- D. Depende únicamente de la amilasa salival

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · deglución

La deglución comienza como una acción voluntaria, aunque en los humanos, después de que el alimento abandona la boca, el proceso continúa de modo involuntario como resultado de la actividad de un grupo de receptores sensoriales ubicados cerca de la abertura de la faringe.

---

### 37

De acuerdo con el libro de Biología, ¿qué producen los receptores sensoriales cercanos a la abertura de la faringe durante la deglución?

- A. La apertura del esfínter esofágico superior y el inicio de una onda peristáltica en el esófago
- B. El cierre de la epiglotis y la secreción de bilis
- C. La contracción del estómago
- D. La producción de amilasa salival

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · deglución

Estos receptores producen la apertura del esfínter esofágico superior y el inicio de una onda peristáltica en el esófago.

---

### 38

De acuerdo con el libro de Biología, ¿de qué tipo de músculo están formadas las distintas partes del esófago?

- A. El tercio superior de músculo estriado, y las partes media e inferior de músculo liso
- B. Todo el esófago de músculo estriado
- C. Todo el esófago de músculo liso
- D. El tercio superior de músculo liso y el resto de músculo cardíaco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · esófago

A diferencia del tercio superior del esófago, formado por músculo estriado, las partes media e inferior están compuestas por músculo liso.

---

### 39

De acuerdo con el libro de Biología, ¿por qué podemos tragar agua incluso cuando estamos cabeza abajo?

- A. Porque los líquidos y los sólidos son impulsados a lo largo del esófago por movimientos peristálticos
- B. Porque la gravedad empuja el alimento hacia el estómago
- C. Porque el esfínter esofágico permanece siempre abierto
- D. Porque la saliva lubrica el descenso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · esófago

Tanto los líquidos como los sólidos son impulsados a lo largo del esófago por movimientos peristálticos [...]. El proceso es tan eficiente que podemos tragar agua, incluso, cuando estamos cabeza abajo.

---

### 40

De acuerdo con el libro de Biología, ¿qué función cumple la capa de moco que recubre el esófago?

- A. Ayuda al pasaje del alimento y protege al epitelio del esófago de la abrasión mecánica
- B. Digiere los hidratos de carbono
- C. Absorbe los nutrientes del bolo
- D. Neutraliza los jugos gástricos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 859
**Subtema:** digestión · esófago

El esófago está recubierto por una capa de moco que ayuda al pasaje del alimento y protege al epitelio del esófago de la abrasión mecánica.

---

**Reactivos en este archivo:** 40
