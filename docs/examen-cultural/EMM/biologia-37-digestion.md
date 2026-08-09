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
el músculo estriado y liso del esófago, la peristalsis y el moco protector). De la **página
860** se cubren la dentición de los mamíferos (el plan básico, la dentición humana omnívora,
los 20/32 dientes y los colmillos de elefantes y morsas, fig. 37-4) y las papilas gustativas
(las células receptoras en el poro, su ubicación en paladar y faringe, y la percepción de
sabores tóxicos, fig. 37-5). De la **página 861** se cubren la deglución (los sistemas
digestivo y respiratorio separados, la faringe común y la epiglotis que bloquea la tráquea,
fig. 37-6) y el cuadro 37-1 de las principales enzimas digestivas (amilasa salival, pepsina,
amilasa pancreática, lipasa, tripsina, desoxirribonucleasa, enteroquinasa, maltasa y lactasa,
con su fuente, pH, sustrato y producto). De la **página 862** se cubren el estómago (el
esófago que atraviesa el diafragma, el cardias, la capacidad de 2-4 L, las criptas gástricas
y el jugo gástrico —HCl y pepsinógeno—, las funciones del HCl y la pepsina, el pH 1,5-2,5, el
moco protector rico en bicarbonato, el ardor al vomitar, las úlceras por *Helicobacter
pylori*, la escasa absorción estomacal, el control autónomo simpático/parasimpático, la
gastrina y la cafeína, el píloro y el vaciado en 4 h, fig. 37-7). De la **página 863** se
cubre el intestino delgado (dónde se completa e inicia cada digestión, los pliegues,
vellosidades y microvellosidades, los 6 m y 300 m², la división duodeno / yeyuno e íleon, las
disacaridasas, la neutralización por páncreas e hígado, la absorción de monosacáridos y
aminoácidos, los quilomicrones al sistema linfático, y las dos porciones del páncreas, fig.
37-8).

**Erratas del libro (cuadro 37-1, p. 861).** Verificadas con render a 500 dpi (no son
suciedad del escaneo, están así impresas): (1) la **quimotripsina** aparece con sustrato
"Grasas" y producto "Dipéptidos" — es falso, la quimotripsina es una proteasa (actúa sobre
proteínas/polipéptidos, no sobre grasas). (2) La **sacarasa** aparece con producto "Glucosa
y galactosa" — es falso, la sacarosa se hidroliza en glucosa y **fructosa**; la galactosa
proviene de la lactosa. **No se escriben reactivos sobre esas dos filas**, por la misma
regla aplicada a los datos falsos de Historia.

**Pendiente:** el capítulo 37 está EN CURSO; sigue desde la página impresa 864 (hoja 910) en adelante (el páncreas exocrino y endocrino, el hígado y la bilis, el intestino grueso, la absorción de agua y la microbiota, y el resto del sistema digestivo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). El capítulo 37 es el último del temario de Biología: no quedan otros capítulos por empezar, así que este archivo sostiene el pendiente de la materia hasta que el propio capítulo 37 se cierre. El capítulo 37 es el último del temario de Biología: no quedan otros capítulos por empezar, así que este archivo sostiene el pendiente de la materia hasta que el propio capítulo 37 se cierre. El capítulo 37 es el último del temario de Biología: no quedan otros capítulos por empezar, así que este archivo sostiene el pendiente de la materia hasta que el propio capítulo 37 se cierre.

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

## Sub-lote 8 · La dentición de los mamíferos (fig. 37-4, p. 860)

### 41

De acuerdo con el libro de Biología, ¿qué incluye el plan de dentición básico de un mamífero, en cada cuadrante?

- A. Dos incisivos, un canino, dos a cuatro premolares y dos a tres molares
- B. Cuatro incisivos, dos caninos y dos molares
- C. Solo incisivos y molares
- D. Un incisivo, un canino y un premolar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · dentición

El plan de dentición básico de un mamífero incluye, en cada cuadrante: dos incisivos, un canino ("colmillo"), dos a cuatro premolares y dos a tres molares.

---

### 42

De acuerdo con el libro de Biología, ¿cómo es la dentición de los humanos y con qué se corresponde?

- A. Relativamente no especializada, lo que se corresponde con su dieta omnívora
- B. Muy especializada, con caninos grandes, propia de una dieta carnívora
- C. Con molares planos, propia de una dieta herbívora
- D. Sin caninos, propia de los roedores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · dentición

La dentición de los humanos es relativamente no especializada, lo que se corresponde con su dieta omnívora.

---

### 43

De acuerdo con el libro de Biología, ¿cuántos dientes tienen los niños y por cuántos son reemplazados?

- A. Tienen 20 dientes, reemplazados por un segundo conjunto de 32
- B. Tienen 32 dientes, reemplazados por un segundo conjunto de 20
- C. Tienen 28 dientes, reemplazados por 32
- D. Tienen 16 dientes, reemplazados por 24

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · dentición

Los niños tienen 20 dientes que se van perdiendo y son reemplazados por un segundo conjunto de 32 dientes, a medida que los maxilares aumentan de tamaño.

---

### 44

De acuerdo con el libro de Biología, ¿qué son en realidad los "colmillos" de los elefantes y los de las morsas?

- A. Los de los elefantes son incisivos modificados; los de las morsas, caninos modificados
- B. Ambos son caninos modificados
- C. Ambos son molares modificados
- D. Los de los elefantes son caninos; los de las morsas, incisivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · dentición

En los elefantes, los llamados "colmillos" son, en realidad, incisivos modificados que utilizan en el ataque y la defensa [...], mientras que los colmillos de la mayoría de otros mamíferos, como las morsas, son caninos modificados.

---

## Sub-lote 9 · Las papilas gustativas y la deglución (figs. 37-5 y 37-6, p. 860-861)

### 45

De acuerdo con el libro de Biología, ¿dónde se encuentran las células receptoras sensoriales de la papila gustativa?

- A. Dentro del poro de la papila gustativa
- B. En la superficie externa de la lengua
- C. En el esfínter esofágico
- D. En la mucosa estomacal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · papilas gustativas

Las células receptoras sensoriales de la papila gustativa se encuentran dentro del poro.

---

### 46

De acuerdo con el libro de Biología, además de en la lengua, ¿dónde más se encuentran papilas gustativas?

- A. En el paladar y en la faringe
- B. En el esófago y el estómago
- C. En los labios y las encías
- D. En la epiglotis y la laringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · papilas gustativas

Otras papilas gustativas se encuentran en el paladar y en la faringe.

---

### 47

De acuerdo con el libro de Biología, ¿por qué las células receptoras de las papilas gustativas desempeñan una función crítica?

- A. Porque a través de ellas los animales perciben sabores desagradables en alimentos que muchas veces son tóxicos
- B. Porque secretan la amilasa salival
- C. Porque inician la deglución
- D. Porque producen el bolo alimenticio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 860
**Subtema:** digestión · papilas gustativas

Estas células desempeñan una función crítica, ya que, a través de ellas, los animales perciben sabores desagradables en alimentos que muchas veces son tóxicos.

---

### 48

De acuerdo con el libro de Biología, ¿qué estructura es común a los sistemas digestivo y respiratorio y conecta la tráquea con el esófago?

- A. La faringe
- B. La epiglotis
- C. La laringe
- D. El esfínter esofágico superior

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · deglución

En la mayor parte de los grupos de mamíferos, los sistemas digestivo y respiratorio están separados, lo cual evita que la comida ingrese en los pulmones. La faringe es común a los ambos sistemas, y conecta la tráquea con el esófago.

---

### 49

De acuerdo con el libro de Biología, durante la deglución, ¿qué bloquea la entrada de la tráquea?

- A. La epiglotis, que se retrae y bloquea la entrada de la tráquea
- B. El paladar blando, que desciende
- C. El esfínter esofágico superior, que se cierra
- D. La lengua, que cubre la laringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · deglución

Aunque no se observa en la figura, las cuerdas vocales cierran la laringe. La epiglotis se retrae y bloquea la entrada de la tráquea.

---

## Sub-lote 10 · Las principales enzimas digestivas (cuadro 37-1, p. 861)

### 50

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la amilasa salival y qué produce?

- A. Actúa sobre los almidones y produce maltosa y oligosacáridos
- B. Actúa sobre las proteínas y produce polipéptidos
- C. Actúa sobre las grasas y produce ácidos grasos y glicerol
- D. Actúa sobre la lactosa y produce glucosa y galactosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Amilasa salival — Fuente: glándulas salivales; pH: 6,9; sustrato: almidones; producto: maltosa y oligosacáridos.

---

### 51

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿cuál es la fuente de la pepsina, sobre qué sustrato actúa y qué produce?

- A. Su fuente es la mucosa estomacal; actúa sobre las proteínas y produce polipéptidos
- B. Su fuente es el páncreas; actúa sobre las grasas y produce glicerol
- C. Su fuente son las glándulas salivales; actúa sobre los almidones
- D. Su fuente es el intestino delgado; actúa sobre la maltosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Pepsina — Fuente: mucosa estomacal; pH: 2; sustrato: proteínas; producto: polipéptidos.

---

### 52

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿a qué pH actúa la pepsina?

- A. A pH 2
- B. A pH 6,9
- C. A pH 7,1
- D. A pH 8

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Pepsina — pH al que actúa: 2.

---

### 53

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la amilasa pancreática y qué produce?

- A. Actúa sobre los almidones y produce polisacáridos y disacáridos
- B. Actúa sobre las proteínas y produce aminoácidos
- C. Actúa sobre las grasas y produce ácidos grasos
- D. Actúa sobre el RNA y produce nucleótidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Amilasa pancreática — Fuente: páncreas; pH: 7,1; sustrato: almidones; producto: polisacáridos y disacáridos.

---

### 54

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la lipasa y qué produce?

- A. Actúa sobre las grasas y produce ácidos grasos y glicerol
- B. Actúa sobre los almidones y produce maltosa
- C. Actúa sobre las proteínas y produce polipéptidos
- D. Actúa sobre el DNA y produce nucleótidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Lipasa — Fuente: páncreas; pH: 8; sustrato: grasas; producto: ácidos grasos y glicerol.

---

### 55

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿cuál es la fuente de la tripsina?

- A. El páncreas
- B. La mucosa estomacal
- C. Las glándulas salivales
- D. El intestino grueso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Tripsina — Fuente: páncreas; pH: 8.

---

### 56

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la desoxirribonucleasa y qué produce?

- A. Actúa sobre el DNA y produce nucleótidos
- B. Actúa sobre el RNA y produce aminoácidos
- C. Actúa sobre las proteínas y produce dipéptidos
- D. Actúa sobre los almidones y produce glucosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Desoxirribonucleasa — Fuente: páncreas; pH: 8; sustrato: DNA; producto: nucleótidos.

---

### 57

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la enteroquinasa duodenal y qué produce?

- A. Actúa sobre el tripsinógeno y produce tripsina activa
- B. Actúa sobre la tripsina y produce tripsinógeno
- C. Actúa sobre las proteínas y produce polipéptidos
- D. Actúa sobre la maltosa y produce glucosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Enteroquinasa duodenal — Fuente: intestino delgado; pH: 8; sustrato: tripsinógeno; producto: tripsina activa.

---

### 58

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la maltasa y qué produce?

- A. Actúa sobre la maltosa y produce glucosa
- B. Actúa sobre la lactosa y produce galactosa
- C. Actúa sobre los almidones y produce maltosa
- D. Actúa sobre las proteínas y produce aminoácidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Maltasa — Fuente: intestino delgado; pH: 8; sustrato: maltosa; producto: glucosa.

---

### 59

De acuerdo con el libro de Biología, según el cuadro de enzimas digestivas, ¿sobre qué sustrato actúa la lactasa y qué produce?

- A. Actúa sobre la lactosa y produce glucosa y galactosa
- B. Actúa sobre la maltosa y produce glucosa
- C. Actúa sobre las proteínas y produce aminoácidos
- D. Actúa sobre las grasas y produce glicerol

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · enzimas digestivas

Lactasa — Fuente: intestino delgado; pH: 8; sustrato: lactosa; producto: glucosa y galactosa.

---

### 60

De acuerdo con el libro de Biología, según la nota del cuadro de enzimas digestivas, ¿qué ocurre con la lactasa?

- A. Con frecuencia está ausente en los adultos, en especial en los de origen africano
- B. Está siempre presente en todos los adultos
- C. Solo se encuentra en los recién nacidos de origen europeo
- D. Es la enzima más abundante del páncreas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 861
**Subtema:** digestión · lactasa

Lactasa: con frecuencia ausente en los adultos, en especial en los de origen africano.

---

## Sub-lote 11 · El estómago: el cardias, el jugo gástrico y las criptas gástricas (fig. 37-7, p. 862)

### 61

De acuerdo con el libro de Biología, ¿qué atraviesa el esófago antes de abrirse en el estómago?

- A. El diafragma muscular que separa las cavidades torácica y abdominal
- B. El peritoneo que tapiza la cavidad abdominal
- C. El píloro que lo separa del intestino delgado
- D. La faringe común con el sistema respiratorio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · esófago

El esófago atraviesa el diafragma muscular que separa las cavidades torácica y abdominal y se abre en el estómago.

---

### 62

De acuerdo con el libro de Biología, ¿cómo se llama el segundo esfínter del tubo digestivo, situado entre el esófago y el estómago?

- A. El esfínter esofágico inferior (o cardias)
- B. El píloro
- C. El esfínter esofágico superior
- D. La epiglotis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · estómago

Luego de atravesar el segundo esfínter del tubo digestivo –el esfínter esofágico inferior (o cardias), situado entre el esófago y el estómago–, llega al estómago.

---

### 63

De acuerdo con el libro de Biología, ¿cuánto alimento puede contener el estómago humano distendido?

- A. Entre 2 y 4 litros
- B. Entre 1 y 1,5 litros
- C. Entre 6 y 8 litros
- D. Alrededor de 300 mililitros

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · estómago

El estómago humano distendido puede contener entre 2 y 4 litros de alimento.

---

### 64

De acuerdo con el libro de Biología, ¿cómo se llaman los pequeños sacos que forman los repliegues de la mucosa estomacal?

- A. Criptas gástricas
- B. Vellosidades intestinales
- C. Quilomicrones
- D. Glándulas salivales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · mucosa estomacal

La mucosa estomacal es una capa relativamente gruesa, cuyos repliegues forman pequeños sacos, o criptas gástricas, tapizados en su parte superior por células secretoras de moco.

---

### 65

De acuerdo con el libro de Biología, en la parte inferior de las criptas gástricas, ¿qué liberan las células glandulares?

- A. Protones (H+) e iones cloruro (Cl–), que forman ácido clorhídrico (HCl), y pepsinógeno
- B. Solo agua y moco
- C. Amilasa salival y bicarbonato
- D. Bilis y enzimas pancreáticas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · jugo gástrico

En la parte inferior de las criptas se ubican células glandulares que liberan protones (H+) e iones cloruro (Cl–), que forman ácido clorhídrico (HCl), y pepsinógeno, una molécula precursora de la enzima pepsina.

---

### 66

De acuerdo con el libro de Biología, ¿qué constituye el jugo gástrico?

- A. El ácido clorhídrico y el pepsinógeno, junto con el agua en la cual se disuelven
- B. La bilis y las enzimas pancreáticas
- C. El moco rico en bicarbonato y la saliva
- D. Los quilomicrones y los ácidos grasos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · jugo gástrico

Estas secreciones, junto con el agua en la cual se disuelven, constituyen el jugo gástrico.

---

## Sub-lote 12 · El HCl, la pepsina y la protección de la mucosa (p. 862)

### 67

De acuerdo con el libro de Biología, además de destruir microorganismos, desnaturalizar proteínas y disgregar fibras, ¿cuál es la función adicional fundamental del HCl?

- A. Inicia la conversión del precursor pepsinógeno en la enzima activa pepsina
- B. Neutraliza la acidez del jugo gástrico
- C. Absorbe los nutrientes hacia la sangre
- D. Empaqueta las grasas en quilomicrones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · ácido clorhídrico

El HCl destruye a la mayoría de los microorganismos presentes en el alimento, desnaturaliza algunas proteínas y disgrega los componentes fibrosos, aunque tiene una función adicional fundamental: inicia la conversión del precursor pepsinógeno en la enzima activa pepsina.

---

### 68

De acuerdo con el libro de Biología, ¿qué cataliza la pepsina?

- A. La hidrólisis de las proteínas en péptidos más pequeños
- B. La hidrólisis de los almidones en maltosa
- C. La hidrólisis de las grasas en ácidos grasos
- D. La síntesis de proteínas a partir de aminoácidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · pepsina

La pepsina cataliza la hidrólisis de las proteínas en péptidos más pequeños y actúa sobre otras moléculas de pepsinógeno y así forma, aún, más pepsina.

---

### 69

De acuerdo con el libro de Biología, ¿entre qué valores varía normalmente el pH del jugo gástrico?

- A. Entre 1,5 y 2,5
- B. Entre 6,9 y 7,1
- C. Entre 7 y 8
- D. Entre 4 y 5

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · jugo gástrico

El HCl acidifica el jugo gástrico, cuyos niveles de pH varían de modo normal entre 1,5 y 2,5, una acidez muy superior a la de cualquier otro líquido corporal.

---

### 70

De acuerdo con el libro de Biología, ¿cómo está protegido el epitelio estomacal de la autodigestión?

- A. Mediante el moco secretado por las células superficiales de las criptas, rico en bicarbonato, que neutraliza la acidez
- B. Mediante una capa de músculo liso que aísla el ácido
- C. Mediante la pepsina, que digiere el HCl
- D. Mediante la gastrina, que inhibe la secreción de ácido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · protección de la mucosa

El epitelio estomacal está protegido de la autodigestión mediante el moco secretado por las células superficiales de las criptas. Este moco (o mucus) es rico en bicarbonato, que neutraliza la acidez.

---

### 71

De acuerdo con el libro de Biología, ¿qué causa la sensación de ardor que se siente al vomitar?

- A. La acidez del jugo gástrico que actúa sobre la mucosa del esófago y la faringe, que no poseen protección
- B. La contracción del esfínter pilórico
- C. La liberación de gastrina en la sangre
- D. La acción de la amilasa salival

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · jugo gástrico

La sensación de ardor que se siente al vomitar es causada por la acidez del jugo gástrico que actúa sobre la mucosa del esófago y la faringe, que no poseen protección.

---

## Sub-lote 13 · Las úlceras, la absorción y el control del estómago (fig. 37-7, p. 862)

### 72

De acuerdo con el libro de Biología, ¿cuál se comprobó que es la causa de muchas úlceras?

- A. Una bacteria llamada Helicobacter pylori, que infecta las células secretoras de moco
- B. Una hipersecreción de gastrina
- C. La falta de pepsina en el estómago
- D. Un exceso de bicarbonato en el moco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · úlceras

Más tarde se comprobó que la causa de muchas úlceras es una bacteria llamada Helicobacter pylori, que infecta las células secretoras de moco y provoca una disminución del moco protector.

---

### 73

De acuerdo con el libro de Biología, ¿cómo se tratan las úlceras causadas por Helicobacter pylori?

- A. Como cualquier infección bacteriana, con antibióticos específicos
- B. Con una dieta rica en bicarbonato
- C. Con suplementos de pepsina
- D. Con la extirpación del píloro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · úlceras

Las úlceras causadas por H. pylori se tratan como cualquier infección bacteriana, con antibióticos específicos.

---

### 74

De acuerdo con el libro de Biología, ¿qué elementos se absorben en el estómago y pasan al torrente sanguíneo?

- A. Cierta cantidad de agua, iones, ciertos ácidos grasos, medicamentos como la aspirina y el alcohol
- B. La mayor parte de los aminoácidos y monosacáridos
- C. Las grasas empaquetadas en quilomicrones
- D. Ninguna sustancia; el estómago no absorbe nada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · absorción estomacal

En el estómago se absorben algunos elementos, como cierta cantidad de agua, iones, ciertos ácidos grasos, medicamentos (como la aspirina) y el alcohol, que pueden atravesar sus paredes y pasar al torrente sanguíneo.

---

### 75

De acuerdo con el libro de Biología, ¿cómo actúan las ramas simpática y parasimpática del sistema nervioso autónomo sobre la digestión en el estómago?

- A. La rama simpática inhibe la digestión y la rama parasimpática la estimula
- B. La rama simpática estimula la digestión y la parasimpática la inhibe
- C. Ambas ramas inhiben la digestión
- D. Ambas ramas estimulan la digestión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · control nervioso del estómago

El estómago se encuentra bajo el control del sistema nervioso autónomo, tanto de la rama simpática –que inhibe la digestión– como de la rama parasimpática –que la estimula–.

---

### 76

De acuerdo con el libro de Biología, ¿qué efecto tiene la hormona gastrina, secretada por células endocrinas de la mucosa gástrica?

- A. Incrementa la secreción de jugo gástrico y las contracciones de la pared estomacal
- B. Disminuye la secreción de jugo gástrico
- C. Neutraliza la acidez del estómago
- D. Empaqueta las grasas en quilomicrones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · gastrina

Ciertas células endocrinas de la mucosa gástrica secretan la hormona estomacal gastrina, que se libera al torrente sanguíneo. Esta hormona incrementa la secreción de jugo gástrico y las contracciones de la pared estomacal.

---

### 77

De acuerdo con el libro de Biología, ¿qué compuesto estimula la liberación de gastrina?

- A. La cafeína
- B. El bicarbonato
- C. La aspirina
- D. El alcohol

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · gastrina

Ciertos compuestos, como la cafeína, estimulan la liberación de gastrina.

---

### 78

De acuerdo con el libro de Biología, ¿cómo se llama el esfínter que separa el estómago del intestino delgado?

- A. El píloro
- B. El cardias
- C. El esfínter esofágico superior
- D. La epiglotis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · píloro

El alimento se convierte en una masa semilíquida que se mueve por peristalsis y atraviesa otro esfínter: el píloro, que separa al estómago del intestino delgado.

---

### 79

De acuerdo con el libro de Biología, ¿en cuánto tiempo se vacía el estómago después de la ingestión?

- A. Alrededor de 4 horas
- B. Alrededor de 30 minutos
- C. Alrededor de 24 horas
- D. Alrededor de 12 horas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 862
**Subtema:** digestión · vaciado gástrico

El estómago se vacía alrededor de 4 horas después de la ingestión, según la proporción de lípidos y fibras que contenga el alimento que esté procesando.

---

## Sub-lote 14 · El intestino delgado: estructura y absorción (fig. 37-8, p. 863)

### 80

De acuerdo con el libro de Biología, ¿qué ocurre con la digestión en el intestino delgado?

- A. Se completa la digestión de los hidratos de carbono y las proteínas, y se inicia la digestión de las grasas
- B. Se inicia la digestión de los hidratos de carbono y las proteínas
- C. Solo se absorben nutrientes, sin ninguna digestión
- D. Se completa únicamente la digestión de las grasas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · intestino delgado

Allí se completa la digestión de los hidratos de carbono y las proteínas –que comenzó en la boca y el estómago– y se inicia la digestión de las grasas.

---

### 81

De acuerdo con el libro de Biología, ¿qué estructuras aumentan la superficie de contacto del intestino delgado con el alimento?

- A. Pliegues circulares en la submucosa, vellosidades en la mucosa y microvellosidades en las células epiteliales
- B. Criptas gástricas y glándulas salivales
- C. Esfínteres y válvulas
- D. Quilomicrones y capilares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · intestino delgado

Presenta pliegues circulares en la capa submucosa, vellosidades en la capa mucosa y diminutas proyecciones citoplasmáticas –microvellosidades– en la superficie de las células epiteliales.

---

### 82

De acuerdo con el libro de Biología, ¿cuánto mediría el intestino delgado de un adulto humano si se extendiera por completo?

- A. Unos 6 metros
- B. Unos 2 metros
- C. Unos 30 metros
- D. Unos 60 centímetros

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · intestino delgado

Si extendiéramos por completo el intestino delgado de un adulto humano, este mediría unos 6 metros de longitud.

---

### 83

De acuerdo con el libro de Biología, ¿a cuánto equivale el área total de la superficie del intestino delgado?

- A. A alrededor de 300 m², el tamaño de una cancha de tenis
- B. A alrededor de 3 m², el tamaño de una mesa
- C. A alrededor de 30 m², el tamaño de una habitación
- D. A alrededor de 3000 m², el tamaño de un campo de fútbol

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · intestino delgado

El área total de su superficie es de alrededor de 300 m², lo que equivale al tamaño de una cancha de tenis.

---

### 84

De acuerdo con el libro de Biología, ¿cómo se divide el intestino delgado según su función?

- A. El duodeno (mayor parte de la digestión) y el yeyuno e íleon (absorción)
- B. El duodeno (absorción) y el yeyuno e íleon (digestión)
- C. El colon, el recto y el ano
- D. El cardias y el píloro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · intestino delgado

El intestino delgado se divide en: el duodeno, donde ocurre la mayor parte de la digestión; el yeyuno e íleon, donde tiene lugar la absorción.

---

### 85

De acuerdo con el libro de Biología, ¿qué enzimas de las microvellosidades intestinales degradan los disacáridos en monosacáridos?

- A. Las disacaridasas: maltasa, sacarasa y lactasa
- B. Las lipasas pancreáticas
- C. Las nucleasas
- D. Las aminopeptidasas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · disacaridasas

La membrana plasmática de las microvellosidades intestinales contiene enzimas que catalizan los últimos pasos de la digestión intestinal: disacaridasas –maltasa, sacarasa y lactasa–, que degradan los disacáridos en monosacáridos.

---

### 86

De acuerdo con el libro de Biología, en el duodeno, ¿qué función cumplen las secreciones exocrinas del páncreas y del hígado, ricas en bicarbonato?

- A. Neutralizan la acidez del alimento procedente del estómago
- B. Aumentan la acidez del alimento
- C. Empaquetan las grasas en quilomicrones
- D. Absorben los monosacáridos hacia la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · duodeno

Todas estas secreciones contienen una gran cantidad de enzimas y bicarbonato que neutralizan la acidez del alimento procedente del estómago.

---

### 87

De acuerdo con el libro de Biología, ¿cómo se absorben la glucosa y la galactosa, y cómo la fructosa?

- A. La glucosa y la galactosa por transporte activo secundario (con sodio); la fructosa por difusión facilitada
- B. Las tres por difusión simple
- C. La glucosa por difusión facilitada; la fructosa por transporte activo
- D. Todas por transporte pasivo, sin intervención del sodio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · absorción intestinal

Los monosacáridos glucosa y galactosa, así como la mayor parte de los aminoácidos, son absorbidos en un proceso de transporte en el que también interviene el sodio (transporte activo secundario); la fructosa atraviesa el epitelio intestinal por difusión facilitada.

---

### 88

De acuerdo con el libro de Biología, ¿en qué partículas se empaquetan las grasas resintetizadas en las células intestinales, y a dónde ingresan?

- A. En quilomicrones, que ingresan en el sistema linfático
- B. En glóbulos rojos, que ingresan en los capilares
- C. En vellosidades, que ingresan en el estómago
- D. En criptas, que ingresan en el páncreas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · absorción de grasas

Las grasas [...] son empaquetadas en partículas llamadas quilomicrones, que ingresan en el sistema linfático.

---

### 89

De acuerdo con el libro de Biología, ¿en qué dos porciones se diferencia el páncreas?

- A. Páncreas exocrino y páncreas endocrino
- B. Páncreas anterior y páncreas posterior
- C. Páncreas cefálico y páncreas caudal
- D. Páncreas mucoso y páncreas seroso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 863
**Subtema:** digestión · páncreas

Este órgano se diferencia en dos porciones: páncreas exocrino y endocrino.

---

## Sub-lote 15 · El hígado, la bilis y el páncreas endocrino (p. 864)

### 90

De acuerdo con el libro de Biología, ¿cómo funciona el hígado, la otra glándula accesoria importante del sistema digestivo?

- A. Como una central de transformaciones químicas
- B. Como un simple reservorio donde se acumula la bilis
- C. Como el principal órgano de absorción de nutrientes
- D. Como una bomba que impulsa el alimento por el tubo digestivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · hígado

La otra glándula accesoria importante es el hígado, que funciona como una central de transformaciones químicas.

---

### 91

De acuerdo con el libro de Biología, ¿qué sustancia sintetiza el hígado y contribuye a la digestión de las grasas?

- A. La bilis
- B. La tripsina
- C. La insulina
- D. La secretina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · hígado · bilis

El hígado sintetiza la bilis, que contiene agua y diversos iones –como bicarbonato, sodio y calcio, y ácidos biliares–, sintetizados a partir de colesterol, que contribuyen a la digestión de las grasas.

---

### 92

De acuerdo con el libro de Biología, además de agua, ¿qué contiene la bilis?

- A. Diversos iones –como bicarbonato, sodio y calcio– y ácidos biliares
- B. Enzimas digestivas como la amilasa y la pepsina
- C. Hormonas como la insulina y el glucagón
- D. Glóbulos rojos y plaquetas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · bilis · composición

El hígado sintetiza la bilis, que contiene agua y diversos iones –como bicarbonato, sodio y calcio, y ácidos biliares–.

---

### 93

De acuerdo con el libro de Biología, ¿a partir de qué se sintetizan los ácidos biliares de la bilis?

- A. A partir de colesterol
- B. A partir de glucosa
- C. A partir de aminoácidos
- D. A partir de vitamina K

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · bilis · ácidos biliares

El hígado sintetiza la bilis, que contiene agua y diversos iones –como bicarbonato, sodio y calcio, y ácidos biliares–, sintetizados a partir de colesterol.

---

### 94

De acuerdo con el libro de Biología, ¿cómo actúan las sales de ácidos biliares sobre las grasas en el intestino?

- A. Como detergentes, al emulsionar las grasas y fragmentarlas en muy pequeñas gotas (micelas)
- B. Como enzimas que rompen los enlaces químicos de las grasas
- C. Como transportadores que llevan las grasas a la sangre
- D. Como hormonas que inhiben la absorción de grasas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · sales biliares

Las sales de ácidos biliares actúan como detergentes al emulsionar las grasas en el intestino y fragmentarlas en muy pequeñas gotas (micelas).

---

### 95

De acuerdo con el libro de Biología, ¿dónde se acumula la bilis antes de secretarse al duodeno?

- A. En la vesícula biliar
- B. En el páncreas
- C. En el apéndice
- D. En el estómago

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · vesícula biliar

La bilis circula a través de conductos que la llevan a la vesícula biliar, donde se acumula antes de secretarse al duodeno.

---

### 96

De acuerdo con el libro de Biología, ¿cómo se denomina a los ramilletes de células pancreáticas que forman el páncreas endocrino?

- A. Islotes de Langerhans
- B. Criptas gástricas
- C. Vellosidades intestinales
- D. Papilas gustativas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · páncreas endocrino

Los ramilletes de células pancreáticas, o islotes de Langerhans, secretan las hormonas peptídicas insulina, glucagón y somatostatina.

---

### 97

De acuerdo con el libro de Biología, ¿qué hormonas peptídicas secretan los islotes de Langerhans al torrente sanguíneo?

- A. Insulina, glucagón y somatostatina
- B. Secretina, colecistocinina y gastrina
- C. Adrenalina, cortisol y tiroxina
- D. Estrógeno, progesterona y testosterona

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 864
**Subtema:** digestión · páncreas endocrino · hormonas

Los ramilletes de células pancreáticas, o islotes de Langerhans, secretan las hormonas peptídicas insulina, glucagón y somatostatina, que son liberadas al torrente sanguíneo.

---

## Sub-lote 16 · El transporte de colesterol: HDL, LDL y aterosclerosis (recuadro 37-1, p. 865)

### 98

De acuerdo con el libro de Biología, además de ser constitutivo de las membranas celulares de las células animales, ¿de qué es precursora la molécula de colesterol?

- A. De algunas hormonas y de la vitamina D
- B. De la vitamina K y de la vitamina C
- C. De la hemoglobina y de los pigmentos biliares
- D. De las enzimas digestivas del páncreas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol

El colesterol es una molécula constitutiva de las membranas celulares de las células animales, precursora de algunas hormonas y de vitamina D; por lo tanto, es un componente vital indispensable.

---

### 99

De acuerdo con el libro de Biología, ¿cuál es el órgano central en la regulación del colesterol?

- A. El hígado
- B. El páncreas
- C. La vesícula biliar
- D. El intestino grueso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · hígado

El órgano central en la regulación del colesterol es el hígado, que no solo lo sintetiza en cantidades necesarias a partir de ácidos grasos saturados, sino que lo degrada cuando circula en exceso en la sangre.

---

### 100

De acuerdo con el libro de Biología, ¿a partir de qué sintetiza el hígado el colesterol en las cantidades necesarias?

- A. A partir de ácidos grasos saturados
- B. A partir de aminoácidos esenciales
- C. A partir de glucosa
- D. A partir de sales biliares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · síntesis

El órgano central en la regulación del colesterol es el hígado, que no solo lo sintetiza en cantidades necesarias a partir de ácidos grasos saturados, sino que lo degrada cuando circula en exceso en la sangre.

---

### 101

De acuerdo con el libro de Biología, el exceso de colesterol en sangre puede ser el resultado de una dieta rica en, ¿qué tipo de alimentos?

- A. Alimentos de origen animal, como leche, queso, carne y yemas de huevo
- B. Cereales integrales y legumbres
- C. Frutas y verduras frescas
- D. Aceites vegetales y frutos secos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · dieta

Este exceso puede ser el resultado de una dieta rica en alimentos de origen animal, como leche, queso, carne y yemas de huevo.

---

### 102

De acuerdo con el libro de Biología, el colesterol es insoluble en agua y se transporta por el torrente sanguíneo integrando complejos de macromoléculas que se caracterizan, entre otras variables, ¿por cuál propiedad?

- A. Por su densidad
- B. Por su carga eléctrica
- C. Por su color
- D. Por su temperatura

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · transporte

El colesterol es insoluble en agua y es transportado por el torrente sanguíneo, integrando complejos de macromoléculas que se caracterizan, entre otras variables, por su densidad.

---

### 103

De acuerdo con el libro de Biología, ¿cómo se relaciona la densidad de estos complejos con su contenido de lípidos?

- A. De manera inversa: a mayor contenido de lípidos, menor será la densidad
- B. De manera directa: a mayor contenido de lípidos, mayor será la densidad
- C. No existe ninguna relación entre la densidad y el contenido de lípidos
- D. La densidad depende únicamente del contenido de proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · densidad

Su densidad es una propiedad que está inversamente relacionada con el contenido de lípidos: a mayor contenido de lípidos, menor será la densidad.

---

### 104

De acuerdo con el libro de Biología, los complejos de mayor densidad, los HDL, funcionan como "camiones de basura". ¿Qué hacen?

- A. Llevan el exceso de colesterol al hígado para su degradación y posterior excreción
- B. Llevan el colesterol de la dieta y el recién sintetizado a diversos destinos del cuerpo
- C. Sintetizan colesterol nuevo a partir de los ácidos grasos saturados
- D. Almacenan el colesterol en las paredes de las arterias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · HDL

Los complejos de mayor densidad son los HDL (del inglés, high density lipoprotein), que funcionan como "camiones de basura": llevan el exceso de colesterol al hígado para su degradación y posterior excreción.

---

### 105

De acuerdo con el libro de Biología, los complejos de menor densidad, los LDL, funcionan como los "camiones de reparto" del sistema. ¿Qué hacen?

- A. Llevan el colesterol de la dieta y el recién sintetizado a diversos destinos, como el hígado y los órganos sintetizadores de hormonas lipídicas
- B. Llevan el exceso de colesterol al hígado para su degradación y posterior excreción
- C. Reducen la deposición de colesterol y "limpian" las arterias
- D. Degradan el colesterol que circula en exceso en la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · LDL

Los complejos de menor densidad, llamados LDL (del inglés, low density lipoprotein), funcionan como los "camiones de reparto" del sistema: llevan el colesterol de la dieta y el recién sintetizado a diversos destinos, como el hígado y los órganos sintetizadores de hormonas lipídicas.

---

### 106

De acuerdo con el libro de Biología, ¿por qué se conoce a los LDL como "colesterol malo"?

- A. Porque su alto nivel en sangre se asocia con el riesgo de deposición de placas de colesterol en las paredes arteriales
- B. Porque llevan el exceso de colesterol al hígado para su excreción
- C. Porque reducen la deposición de colesterol y "limpian" las arterias
- D. Porque son incapaces de transportar el colesterol por la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · LDL

Los LDL son conocidos como "colesterol malo", pues su alto nivel en sangre se asocia con el riesgo de deposición de placas de colesterol en las paredes arteriales.

---

### 107

De acuerdo con el libro de Biología, ¿qué es la aterosclerosis?

- A. Un síndrome que se caracteriza por la adhesión e infiltración de sustancias lipídicas en las paredes de las arterias de mediano y grueso calibre
- B. La dilatación anormal de las venas de las extremidades inferiores
- C. La formación de cálculos de colesterol en la vesícula biliar
- D. El aumento de la densidad de los complejos HDL en la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · aterosclerosis

Esta deposición puede ser causa de aterosclerosis, un síndrome que se caracteriza por la adhesión e infiltración de sustancias lipídicas en las paredes de las arterias de mediano y grueso calibre.

---

### 108

De acuerdo con el libro de Biología, como consecuencia de la aterosclerosis, ¿qué les ocurre a las arterias afectadas?

- A. Disminuyen su diámetro, o incluso pueden ser obstruidas, lo cual impide o interrumpe el flujo sanguíneo normal
- B. Aumentan su diámetro y el flujo sanguíneo se acelera
- C. Se vuelven más elásticas y flexibles
- D. Sintetizan una mayor cantidad de colesterol bueno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · aterosclerosis

Las arterias de mediano y grueso calibre, como consecuencia, disminuyen su diámetro, o incluso pueden ser obstruidas, lo cual impide o interrumpe el flujo sanguíneo normal.

---

### 109

De acuerdo con el libro de Biología, la aterosclerosis es la forma más común, ¿de qué padecimiento?

- A. De la arteriosclerosis, un término amplio que se refiere al endurecimiento de las arterias
- B. De la diabetes mellitus
- C. De la hipertensión arterial
- D. De la insuficiencia hepática

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · arteriosclerosis

Esta es la forma más común de arteriosclerosis, un término amplio que se refiere al endurecimiento de las arterias.

---

### 110

De acuerdo con el libro de Biología, ¿por qué se conoce a los HDL como "colesterol bueno"?

- A. Porque reducen la deposición de colesterol y "limpian" las arterias
- B. Porque llevan el colesterol de la dieta a los tejidos periféricos
- C. Porque su alto nivel en sangre se asocia con las placas en las arterias
- D. Porque son los encargados de sintetizar las hormonas lipídicas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · colesterol · HDL

Por el contrario, los HDL reducen la deposición de colesterol y "limpian" las arterias; por ello, se los conoce como "colesterol bueno".

---

### 111

De acuerdo con el libro de Biología, en una arteria coronaria muy estrechada por la aterosclerosis, ¿qué puede bloquear por completo el canal que queda abierto?

- A. Un coágulo sanguíneo
- B. Una burbuja de aire
- C. Un cálculo biliar
- D. Un acúmulo de bilirrubina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 865
**Subtema:** digestión · aterosclerosis

Este canal estrecho puede ser bloqueado por completo por un coágulo sanguíneo. El resultado es un ataque cardíaco y la muerte del músculo cardíaco irrigado por la arteria afectada.

---

**Reactivos en este archivo:** 111
