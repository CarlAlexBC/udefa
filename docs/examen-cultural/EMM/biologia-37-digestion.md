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
boca" (la fragmentación mecánica y los dientes de los mamíferos, fig. 37-4).

**Pendiente:** el capítulo 37 está EN CURSO; sigue desde la página impresa 858 (hoja 904) en adelante (la lengua y las glándulas salivales, la deglución, el estómago y los intestinos, y el resto del sistema digestivo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). El capítulo 37 es el último del temario de Biología: no quedan otros capítulos por empezar, así que este archivo sostiene el pendiente de la materia hasta que el propio capítulo 37 se cierre.

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

**Reactivos en este archivo:** 13
