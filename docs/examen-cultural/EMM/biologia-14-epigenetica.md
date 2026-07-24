# Biología · Capítulo 14 · Epigenética

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

**Quién lo pide hoy:** sólo la **EMOS** — Escuela Militar de Oficiales de Sanidad (clave
de materia `BIO-01-2026`). Ninguna otra escuela pide hoy este capítulo. Si mañana lo pide
otra, se trae de aquí: no se duplica.

> **Carpeta pendiente de migrar.** Este archivo nace en `docs/examen-cultural/EMM/` a
> propósito, junto al resto de Biología, para que la materia se mueva completa en un solo
> paso y no quede partida en dos sitios. Cuando se migre, la carpeta se nombra por el
> **libro** (como ya se hizo con `fisica-perez-montiel/`), no por la escuela.

**Sin línea `**Tema:**` en este libro.** El temario de Biología pide **capítulos
completos**, no temas sueltos, así que la clave de temario no aporta nada y se omite. El
**Subtema:** va en prosa, con el mismo patrón que el resto de la materia.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro trae capa
de texto). Las figuras y los recuadros van con `render.py` o `crop.py` cuando su capa de
texto sale en lorem ipsum o cifrada. Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado hoja por hoja.** El capítulo 14 pertenece a la
**Sección III · Patrones y procesos de la herencia**. El capítulo 13 termina en la hoja 338
(página impresa 292, con "Retomando la problemática inicial" y las "Situaciones
problemáticas"). La **portadilla del capítulo 14 es la hoja 339 (página impresa 293)**:
trae el número 14, el título "EPIGENÉTICA", el epígrafe de Steven Rose y el apartado de
apertura "Biología en contexto social · Sustancias tóxicas y daños transgeneracionales".

**El cuerpo empieza en la hoja 340 (página impresa 294)**, no en la 295. Ésa es la trampa
que ya costó cuatro capítulos en este libro: la página impresa 294 lleva el encabezado de
sección y **parece** ser sólo la continuación del recuadro del glifosato, pero en su
columna izquierda arranca el cuerpo del capítulo con la **definición misma de epigenética**
y con el apartado "El campo de la epigenética". Se verificó renderizando la hoja antes de
escribir. El capítulo termina en la **hoja 369 (página impresa 323)**; la hoja 370 (página
impresa 324) está en blanco y la 371 (p. 325) ya es la portadilla del capítulo 15.

**Desfase reverificado aquí:** hoja 341 = página impresa 295 (+46), hoja 369 = página
impresa 323 (+46). Leído de la hoja, nunca calculado.

**Qué queda fuera por norma.** El ensayo de cierre "Retomando la problemática inicial" y
los ejercicios ("Cuestionario", "Situaciones problemáticas") **no llevan reactivos**, igual
que en los capítulos 32, 35 y 36. Del apartado de apertura "Biología en contexto social ·
Sustancias tóxicas y daños transgeneracionales" **sí se toman reactivos, pero sólo de sus
datos de biología** —el diseño experimental por generaciones y las patologías descritas—,
nunca de la discusión social sobre regulación de agroquímicos.

## Erratas del libro

| Dónde | Qué dice | Qué debería decir |
|---|---|---|
| p. 296, pie de la fig. 14-2 | "el resultado del experimento de **Diesch**" | **Driesch** — el propio pie lo escribe bien dos renglones antes ("Experimento de Driesch con huevos de erizos de mar"). Verificado con `crop.py` a 500 dpi para descartar suciedad del escaneo. |
| p. 295, columna izquierda | "los procesos involucrados en la ejecución **de del** desarrollo embrionario" | "de**l** desarrollo embrionario" — sobra una palabra. |
| p. 299, columna derecha | "en este escenario el **genotipó** adquiere un valor condicionado" | **genotipo** — acento de más. |

**No se escriben reactivos sobre estos tres puntos.**

## Cobertura actual

Cubierta la página impresa **293** (apartado de apertura, sólo sus datos de biología): el
diseño del modelo experimental con ratas y el nombre que el libro da a cada generación —la
generación inicial de ratas preñadas F0 ("animales directamente expuestos"), la F1 ("fetos
directamente expuestos"), la F2 ("línea germinal directamente expuesta") y la F3 ("no
expuestos")—, y las patologías descritas en cada una.

Cubierta la página impresa **294**: la definición de epigenética y su etimología griega; el
alcance del campo (información genética y no genética, y su relación con el ambiente); el
apartado "El campo de la epigenética" (crecimiento vertiginoso desde el inicio del siglo
xxi, los cambios epigenéticos que no involucran mutaciones, la epigenética como campo
integrador); y la fig. 14-1.

Cubierta la página impresa **295**: para qué sirve la epigenética desde una perspectiva
teórica (la carga informativa de la célula huevo, la impronta genómica, la discusión natura
o nurtura, las cascadas de señalización); y el apartado "Epigénesis y preformacionismo: los
orígenes en la embriología" (Aristóteles y la epigénesis, la hipótesis preformacionista, el
micrótomo de Wilhelm His, la pregunta nueva de la embriología y los exponentes alemanes y
rusos).

Cubierta la página impresa **296**: el desarrollo no lineal del campo (en los albores del
siglo xx se debilita la epigénesis mientras se consolida la genética clásica de Mendel), las
limitaciones de las leyes de Mendel frente a los rasgos de variación continua, y la
fig. 14-2 (los experimentos de Roux y de Driesch).

Cubierta la página impresa **297**: la escuela rusa y la plasticidad de los rasgos (las
poblaciones de *Daphnia* sometidas a cambios de temperatura durante la etapa larvaria) y los
ejemplos de plasticidad fenotípica estacional (zorros y conejos árticos, mariposas).

Cubierta la página impresa **298**: Conrad H. Waddington y el nacimiento de la epigenética
(quién fue, su formación, *An introduction to modern genetics* de 1939, la superación de la
oposición "preformismo-epigénesis", el "fenotipo del genotipo del oocito", los procesos de
jerarquía más alta que los genes) y el paisaje epigenético con su canalización irreversible.

Cubierta la página impresa **299**: la recuperación de la mirada compleja en las décadas de
1980 y 1990 (Gould, Rose, Lewontin), *Genes, Organismo y Ambiente* (2000), el "ruido del
desarrollo" de la fig. 14-5, y el panorama multidireccional del flujo de información frente
al reduccionismo (fig. 14-6).

Cubierta la página impresa **300**: la metáfora del manual de instrucciones con anotaciones
y resaltados; los "escritores", "borradores" y "lectores" epigenéticos; y dónde ocurren los
procesos epigenéticos (núcleo, ambiente citoplasmático y a distancia por comunicaciones
intercelulares).

**Pendiente:** el capítulo 14 está EN CURSO; sigue desde la página impresa **301** (hoja 347) en adelante —el ensayo 14-1 sobre las metáforas en la biología, las principales modificaciones epigenéticas (metilación del ADN, modificaciones de las histonas, ARN pequeños no codificantes), la herencia epigenética transgeneracional, los gemelos y los ratones *agouti*, y las tradiciones de cuidado maternal en ratas— hasta la página impresa **323**, antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios. Además del 14 quedan por escribir el capítulo **15** (`biologia-15-bases-moleculares-desarrollo.md`, en curso en esta misma sesión), el capítulo **33** (`biologia-33-percepcion-sensorial.md`, en curso en esta misma sesión) y el capítulo **37** (`biologia-37-digestion.md`, que lleva otra sesión). Biología NO está cerrada.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta —en negrita y con dos puntos— y toma el párrafo
> que le sigue hasta el primer renglón en blanco. Si se convierte en encabezado
> (`## Pendiente`), si desaparece, o si empieza con "ninguno", Biología se reporta como
> cerrada teniendo capítulos en blanco. Ya rompió el estado dos veces en un día.

## Cómo se escriben estos reactivos

Recuerdo literal: la opción correcta y la justificación son **cita textual** del Curtis, sin
parafrasear. Cuatro opciones del mismo tipo y magnitud; los mejores distractores salen del
mismo párrafo o del mismo cuadro. La correcta se escribe siempre en **A** porque el
importador baraja las opciones. El enunciado nombra el libro y alterna las tres fórmulas
del Anexo "H": "De acuerdo con", "De conformidad con", "En relación con".

---

### 1

De acuerdo con el libro de Biología, en los estudios sobre efectos transgeneracionales del glifosato, ¿cómo se denomina a la generación inicial de ratas preñadas (F0) a las que se les administra el herbicida por vía oral?

- A. Animales directamente expuestos
- B. Fetos directamente expuestos
- C. Línea germinal directamente expuesta
- D. No expuestos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, diseño experimental

Estos estudios parten de una generación inicial de ratas preñadas (F0) a las que se les administra glifosato por vía oral (denominados "animales directamente expuestos").

> Las cuatro opciones son los cuatro nombres que el propio recuadro asigna a las
> generaciones F0 a F3. Se prestan a confusión entre sí a propósito.

---

### 2

De conformidad con el libro de Biología, en el modelo experimental con ratas expuestas a glifosato, ¿a qué generación llama el libro "fetos directamente expuestos"?

- A. A la primera generación de descendientes (F1)
- B. A la generación inicial de ratas preñadas (F0)
- C. A la segunda generación (F2)
- D. A la tercera generación (F3)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, generación F1

Continúan luego estudiando a la primera generación de descendientes (F1) (denominados "fetos directamente expuestos"), es decir: la generación de las ratas que se estaban gestando en el vientre de las hembras de la F0.

---

### 3

En relación con el libro de Biología, ¿por qué la segunda generación (F2) de ratas recibe el nombre de "línea germinal directamente expuesta"?

- A. Porque durante la gestación sus parentales tuvieron sus células germinales en formación expuestas a glifosato
- B. Porque a ellas mismas se les administró glifosato por vía oral
- C. Porque se estaban gestando en el vientre de las hembras a las que se administró el glifosato
- D. Porque no tuvieron contacto con el glifosato en ninguna etapa de sus vidas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, generación F2

Luego observan la segunda generación (F2), es decir: las ratas que descienden de la generación F1, nietos de aquellas a las que les fue administrado el glifosato (denominados "línea germinal directamente expuesta", ya que durante la gestación sus parentales tuvieron sus células germinales en formación expuestas a glifosato).

---

### 4

De acuerdo con el libro de Biología, en el modelo experimental con ratas y glifosato, ¿qué parentesco tiene con la generación F0 la tercera generación (F3), considerada "no expuesta"?

- A. Son bisnietos de las ratas de la F0
- B. Son nietos de las ratas de la F0
- C. Son hijos de las ratas de la F0
- D. Son hermanos de las ratas de la F0

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, generación F3

Finalmente analizan la tercera generación (F3), bisnietos de las ratas de la F0 (considerados "no expuestos", ya que no tuvieron contacto con el glifosato en ninguna etapa de sus vidas).

> El distractor B es exacto para la F2, que el libro define como "nietos" en el
> renglón anterior.

---

### 5

De conformidad con el libro de Biología, ¿qué alteraciones del desarrollo presenta la generación F2 en los estudios sobre glifosato?

- A. Un aumento de malformaciones mayores en el desarrollo de los miembros, restricción del crecimiento intrauterino y enfermedades placentarias
- B. Un aumento marcado de enfermedades renales y obesidad en toda la camada
- C. Un aumento significativo de enfermedades gonadales y dificultades en los partos
- D. Una incidencia aumentada de tumores en toda la camada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · apartado de apertura, patologías de la F2

La generación F2 (línea germinal directamente expuesta al agroquímico) presenta un aumento de malformaciones mayores en el desarrollo de los miembros, así como una restricción del crecimiento intrauterino y enfermedades placentarias.

> Los tres distractores son patologías reales del mismo recuadro, pero el libro las
> atribuye a la F2 **y** a la F3 juntas, no sólo a la F2.

---

### 6

En relación con el libro de Biología, ¿cómo se define la epigenética?

- A. Como el estudio de los procesos que integran la regulación de la expresión de los genes, de los eventos postraduccionales y de la actividad del transcriptoma y proteoma, en relación con sus entornos
- B. Como el estudio de las mutaciones que modifican la secuencia del ADN genómico y se transmiten a la descendencia
- C. Como el estudio de los patrones de la herencia establecidos por Mendel a partir del cruzamiento de plantas de arveja
- D. Como el estudio del flujo lineal y unidireccional de la información desde el ADN hasta las proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · definición del campo

La epigenética (del griego *epi*, en o sobre, -*genética*) se define como el estudio de los procesos que integran la regulación de la expresión de los genes, de los eventos postraduccionales y de la actividad del transcriptoma y proteoma, en relación con sus entornos.

---

### 7

De acuerdo con el libro de Biología, ¿qué significa el prefijo griego *epi* del que proviene la palabra epigenética?

- A. En o sobre
- B. Antes o delante
- C. Debajo o por debajo
- D. Junto a o al lado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · etimología

La epigenética (del griego *epi*, en o sobre, -*genética*).

---

### 8

De conformidad con el libro de Biología, ¿qué indaga el campo de la epigenética?

- A. Las relaciones entre la información genética y no genética en los sistemas biológicos, y a la vez, cómo estos dos tipos de información se relacionan con el ambiente
- B. Únicamente las relaciones entre los genes de un organismo y los de sus progenitores
- C. Exclusivamente los cambios químicos que alteran la secuencia del ADN genómico
- D. Solamente la proporción de fenotipos que aparece en la descendencia de un cruzamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · alcance del campo

Este campo indaga las relaciones entre la información genética y no genética en los sistemas biológicos, y a la vez, cómo estos dos tipos de información se relacionan con el ambiente.

---

### 9

En relación con el libro de Biología, ¿por qué las áreas de análisis de la epigenética se definen necesariamente por el contexto temporoespacial?

- A. Porque se definen por el contexto temporoespacial de cada objeto o sujeto de estudio
- B. Porque se definen por la cantidad de mutaciones acumuladas en el genoma
- C. Porque se definen por el número de cromosomas de cada especie
- D. Porque se definen por la velocidad de la transcripción del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · contexto temporoespacial

Sus áreas de análisis se definen necesariamente por el contexto temporoespacial de cada objeto o sujeto de estudio.

---

### 10

De acuerdo con el libro de Biología, ¿sobre qué se pregunta la epigenética como área del conocimiento?

- A. Sobre los procesos involucrados en el origen y en los cambios que se producen en el fenotipo, tanto en individuos como en poblaciones, en una generación o en varias
- B. Sobre la secuencia exacta de nucleótidos que compone cada gen del genoma humano
- C. Sobre la clasificación de los seres vivos en dominios, reinos y filos
- D. Sobre el número de moléculas de ATP que rinde la oxidación completa de una glucosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · objeto de estudio

Se trata de un área del conocimiento que se pregunta sobre los procesos involucrados en el origen y en los cambios que se producen en el fenotipo, en lo que atañe tanto a individuos como a poblaciones, en una generación o en varias.

---

### 11

De conformidad con el libro de Biología, ¿en qué situación se encuentra el cuerpo teórico y experimental de la epigenética desde el inicio del siglo xxi?

- A. En un período de crecimiento vertiginoso
- B. En un período de estancamiento por falta de evidencia experimental
- C. En un período de retroceso frente a la genética clásica
- D. En un período de consolidación sin cambios desde hace un siglo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · crecimiento del campo

Desde el inicio del siglo xxi, el cuerpo teórico y experimental de la epigenética se encuentra en un período de crecimiento vertiginoso.

---

### 12

En relación con el libro de Biología, ¿qué es lo que **no** involucran los cambios epigenéticos, a diferencia de lo que proponen los modelos de la genética tradicional?

- A. Las mutaciones
- B. La transcripción del ADN
- C. La división celular
- D. La síntesis de proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · cambios epigenéticos y mutaciones

A diferencia de lo propuesto por los modelos de la genética tradicional, los cambios epigenéticos –que pueden ser reversibles o no y pueden ser heredables o no– no involucran las mutaciones.

---

### 13

De acuerdo con el libro de Biología, ¿qué carácter tienen los cambios epigenéticos en cuanto a su reversibilidad y su transmisión?

- A. Pueden ser reversibles o no y pueden ser heredables o no
- B. Siempre son reversibles y nunca son heredables
- C. Nunca son reversibles y siempre son heredables
- D. Siempre son reversibles y siempre son heredables

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · reversibilidad y herencia

Los cambios epigenéticos –que pueden ser reversibles o no y pueden ser heredables o no– no involucran las mutaciones.

---

### 14

De conformidad con el libro de Biología, ¿cómo se presenta actualmente la epigenética respecto de la fragmentación de las ciencias de la vida?

- A. Como un campo integrador que contribuye a superar la fragmentación de las ciencias de la vida en compartimentos estancos
- B. Como una rama especializada que profundiza la separación entre la genética y la embriología
- C. Como una disciplina auxiliar que depende por completo de la genética de poblaciones
- D. Como un campo cerrado que sólo se ocupa de las modificaciones del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · campo integrador

La epigenética se presenta actualmente como un campo integrador que contribuye a superar la fragmentación de las ciencias de la vida en compartimentos estancos, por lo que diversas áreas del conocimiento dan cuenta de su influencia.

---

### 15

En relación con el libro de Biología, ¿qué representa el gráfico de la figura 14-1, "El vigoroso campo de la epigenética"?

- A. La proporción de artículos científicos publicados que incluyen la palabra "epigenética" o "epigenético" en su título, por cada 100 artículos publicados que mencionan a la palabra "genética" en su título
- B. El número total de artículos científicos publicados cada año sobre genética molecular
- C. El porcentaje de genes del genoma humano que sufren modificaciones epigenéticas
- D. La cantidad de investigadores dedicados a la epigenética por cada 100 dedicados a la genética

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · fig. 14-1

El gráfico representa la proporción de artículos científicos publicados que incluyen la palabra "epigenética" o "epigenético" en su título, por cada 100 artículos publicados que mencionan a la palabra "genética" en su título.

---

### 16

De acuerdo con el libro de Biología, ¿qué muestra la figura 14-1 sobre el crecimiento del campo de la epigenética?

- A. Un vertiginoso crecimiento en la primera década del siglo xxi, tendencia que se ha profundizado aún más en la década siguiente
- B. Un crecimiento sostenido desde la década de 1950 que se detuvo en el año 2000
- C. Un crecimiento que se concentró en la década de 1970 y luego se estabilizó
- D. Un descenso constante desde la primera década del siglo xxi

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · fig. 14-1, tendencia

Se advierte el vertiginoso crecimiento de este campo en la primera década del siglo xxi, y esta tendencia se ha profundizado aún más en la década siguiente.

---

### 17

De conformidad con el libro de Biología, ¿qué carga informativa posee la célula huevo, según la comprensión compleja de los procesos del desarrollo embrionario?

- A. Una carga informativa específica, dada por su ADN organizado de una manera particular en la célula, y por proteínas, ARN, iones y otras partículas distribuidas asimétricamente en el citoplasma
- B. Únicamente la carga informativa de su ADN nuclear, distribuido de manera homogénea
- C. Sólo la información aportada por las proteínas y los iones del citoplasma
- D. Una carga informativa idéntica a la de cualquier célula diferenciada del organismo adulto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · carga informativa de la célula huevo

La comprensión compleja de estos procesos requiere asumir que la célula huevo posee una carga informativa específica, dada por su ADN organizado de una manera particular en la célula, y por proteínas, ARN, iones y otras partículas distribuidas asimétricamente en el citoplasma, en una relación significativa con su ambiente.

---

### 18

En relación con el libro de Biología, ¿cómo se conoce el proceso de influencia diferencial de los genomas parentales en el desarrollo?

- A. Impronta genómica
- B. Plasticidad fenotípica
- C. Canalización irreversible
- D. Ruido del desarrollo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · impronta genómica

La epigenética también es una clave importante para avanzar en la comprensión de la influencia diferencial de los genomas parentales en el desarrollo (proceso conocido como impronta genómica).

> Los tres distractores son términos del propio capítulo: "plasticidad fenotípica"
> aparece en la p. 297, "canalización irreversible" en la 298 y "ruido del desarrollo"
> en la 299.

---

### 19

De acuerdo con el libro de Biología, ¿a qué hace referencia la pregunta centenaria "¿natura o nurtura?"?

- A. A la discusión en torno a si es la naturaleza o la cultura lo que explica, en mayor medida, las características distintivas de nuestra especie
- B. A la discusión sobre si los caracteres adquiridos durante la vida se heredan a la descendencia
- C. A la discusión sobre si el embrión está preformado o adquiere su forma gradualmente
- D. A la discusión sobre si la unidad de la herencia es el gen o el cromosoma completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · natura o nurtura

La investigación en epigenética también está revolucionando la pregunta centenaria ¿natura o nurtura?, la cual hace referencia a la discusión en torno a si es la naturaleza o la cultura lo que explica, en mayor medida, las características distintivas de nuestra especie.

---

### 20

De conformidad con el libro de Biología, ¿qué pueden desencadenar ciertos productos químicos al unirse a proteínas receptoras específicas?

- A. Una cascada de señalización que transfiere el mensaje de proteína a proteína y finalmente al núcleo celular
- B. Una mutación puntual en la secuencia del ADN genómico
- C. La ruptura inmediata de la membrana plasmática de la célula
- D. La duplicación del número de cromosomas de la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · cascadas de señalización

Se ha observado que ciertos productos químicos pueden unirse a proteínas receptoras específicas, tanto dentro de las células como en su superficie externa, y desencadenar una cascada de señalización que transfiere el mensaje de proteína a proteína y finalmente al núcleo celular.

---

### 21

En relación con el libro de Biología, ¿por qué moléculas son iniciadas las cascadas de señalización?

- A. Algunas por moléculas que se originan fuera del cuerpo y otras, por las hormonas y otras sustancias químicas endógenas
- B. Todas por moléculas que se originan fuera del cuerpo
- C. Todas por hormonas y otras sustancias químicas endógenas
- D. Todas por los nucleótidos liberados en la degradación del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · origen de las cascadas

Algunas cascadas son iniciadas por moléculas que se originan fuera del cuerpo y otras, por las hormonas y otras sustancias químicas endógenas.

---

### 22

De acuerdo con el libro de Biología, ¿dónde tiene su origen la noción de epigénesis?

- A. En la antigua Grecia, en los estudios de Aristóteles sobre el desarrollo embrionario
- B. En la Escocia del siglo xx, en los trabajos de Conrad H. Waddington
- C. En la Suiza del siglo xix, en las mejoras del micrótomo de Wilhelm His
- D. En la Alemania del siglo xix, en los experimentos de Wilhelm Roux con huevos de rana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · origen de la epigénesis

La noción de epigénesis, que fue cambiando a lo largo de la historia y resignificada en diversos contextos teóricos, tiene su origen en la antigua Grecia, en los estudios de Aristóteles sobre el desarrollo embrionario.

---

### 23

De conformidad con el libro de Biología, ¿a qué proceso se refería Aristóteles con el término epigénesis?

- A. A un proceso en el que el embrión adquiría su forma a través de una serie de cambios secuenciales a través del tiempo
- B. A un proceso en el que el embrión, ya totalmente formado, sólo debía aumentar de tamaño
- C. A un proceso en el que las células del embrión se destruyen unas a otras hasta quedar la mejor adaptada
- D. A un proceso en el que el embrión hereda por igual la información de sus dos progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · epigénesis según Aristóteles

Este filósofo y naturalista acuñó el término epigénesis para referirse a un proceso en el que el embrión adquiría su forma a través de una serie de cambios secuenciales a través del tiempo.

> El distractor B es la definición exacta de la hipótesis preformacionista, que el
> libro contrapone en el mismo renglón.

---

### 24

En relación con el libro de Biología, ¿cómo concebía al embrión la hipótesis preformacionista?

- A. Como un pequeño ser totalmente formado que solo debía aumentar de tamaño
- B. Como una masa sin forma que adquiría su estructura por cambios secuenciales en el tiempo
- C. Como un conjunto de células pluripotenciales sin destino definido
- D. Como una célula huevo cuya información residía por completo en el citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · hipótesis preformacionista

En contraste con la hipótesis preformacionista que concebía al embrión como un pequeño ser totalmente formado que solo debía aumentar de tamaño.

---

### 25

De acuerdo con el libro de Biología, ¿en qué época se inició el estudio experimental de los seres vivos?

- A. A mediados de 1700
- B. A mediados de 1500
- C. A mediados de 1800
- D. A mediados de 1900

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · inicio del estudio experimental

Si bien el estudio experimental de los seres vivos se inició a mediados de 1700, adquirió características más cercanas a las actuales gracias a las mejoras del micrótomo.

---

### 26

De conformidad con el libro de Biología, ¿qué es el micrótomo?

- A. Un instrumento que permite cortar los tejidos en un espesor tal que pueden ser observados con un microscopio simple
- B. Un instrumento que permite separar las blastómeras de un embrión en el estadio de dos células
- C. Un instrumento que permite medir la temperatura de incubación de las larvas
- D. Un instrumento que permite teñir selectivamente el ADN metilado de los cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · el micrótomo

El micrótomo –instrumento que permite cortar los tejidos en un espesor tal que pueden ser observados con un microscopio simple–.

---

### 27

En relación con el libro de Biología, ¿quién realizó las mejoras del micrótomo que acercaron el estudio experimental de los seres vivos a sus características actuales?

- A. Wilhelm His (Suiza, 1831-1904)
- B. Wilhelm Roux (1850-1924)
- C. Hans Driesch (1867-1941)
- D. Oscar Hertwig (1849-1922)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · Wilhelm His

Adquirió características más cercanas a las actuales gracias a las mejoras del micrótomo –instrumento que permite cortar los tejidos en un espesor tal que pueden ser observados con un microscopio simple– que realizó Wilhelm His (Suiza, 1831-1904).

> Los tres distractores son investigadores alemanes citados en el mismo párrafo como
> exponentes de la embriología experimental.

---

### 28

De acuerdo con el libro de Biología, ¿qué pregunta se incorporó a la pregunta clásica de la embriología "¿Cómo sucede el desarrollo?"?

- A. "¿Por qué el desarrollo sucede de esta manera y no de otra?"
- B. "¿Cuántas divisiones celulares requiere el desarrollo?"
- C. "¿Dónde se almacena la información del desarrollo?"
- D. "¿Cuándo termina el desarrollo del organismo?"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · la nueva pregunta de la embriología

Así es que a la pregunta de la embriología: "¿Cómo sucede el desarrollo?", se incorporó: "¿Por qué el desarrollo sucede de esta manera y no de otra?".

---

### 29

De conformidad con el libro de Biología, ¿de qué nacionalidad eran en su mayoría los principales exponentes de la nueva etapa experimental de la embriología?

- A. Alemanes
- B. Rusos
- C. Suizos
- D. Escoceses

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · exponentes de la embriología experimental

Los principales exponentes en la gesta de esta nueva etapa experimental de la embriología son, en su mayoría, investigadores alemanes.

> El distractor B es correcto pero parcial: el libro dice que "también se sumaron
> importantes aportes de investigadores rusos".

---

### 30

En relación con el libro de Biología, ¿quiénes son citados como investigadores rusos que aportaron a la nueva etapa experimental de la embriología?

- A. Aleksandr Kovalevski (1840-1901) y M. Zavadovski (1891-1957)
- B. Hans Spemann (1869-1941) e Hilde Mangold (1898-1924)
- C. Oscar Hertwig (1849-1922) y Wilhelm Roux (1850-1924)
- D. Conrad H. Waddington (1905-1975) y Wilhelm His (1831-1904)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · investigadores rusos

También se sumaron importantes aportes de investigadores rusos, como Aleksandr Kovalevski (1840-1901) y M. Zavadovski (1891-1957), entre otros.

---

### 31

De acuerdo con el libro de Biología, ¿qué ocurrió en los albores del siglo xx con la concepción del desarrollo entendido como un fenómeno explicable en términos de epigénesis?

- A. Se debilitó al mismo tiempo que se consolidaba el nuevo campo de la genética clásica
- B. Se fortaleció al mismo tiempo que se debilitaba el nuevo campo de la genética clásica
- C. Se mantuvo sin cambios hasta la incorporación del modelo de la doble hélice
- D. Desapareció por completo hasta que Aristóteles la recuperó

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · el desarrollo no lineal del campo

En los albores del siglo xx, la concepción del desarrollo entendido como un fenómeno explicable en términos de epigénesis se debilitó al mismo tiempo que se consolidaba el nuevo campo de la genética clásica, sobre la base de los procesos de la herencia propuestos por Mendel.

---

### 32

De conformidad con el libro de Biología, ¿frente a qué rasgos presentaban limitaciones las leyes de la herencia de Mendel?

- A. Frente a aquellos que presentaban una variación continua en los organismos, como la altura o el peso
- B. Frente a aquellos que presentaban una variación discreta, como el color de la flor
- C. Frente a los rasgos que se transmiten ligados al sexo
- D. Frente a los rasgos determinados por un único par de alelos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · límites de las leyes de Mendel

Se advertía que estas leyes presentaban limitaciones cuando se trataba de interpretar ciertos rasgos poblacionales, por ejemplo, aquellos que presentaban una variación continua en los organismos (como la altura, el peso, etc.).

---

### 33

En relación con el libro de Biología, ¿en qué consistió el experimento de Roux sobre el huevo fecundado de rana del género *Xenopus*?

- A. Antes de la primera división, una de las dos células (blastómeras) es destruida con una aguja caliente, mientras que la otra permanece intacta
- B. Las células son separadas en el estadio de dos blastómeras y cada una se cultiva por separado
- C. El núcleo de una blastómera es extraído y trasplantado a un huevo sin núcleo
- D. El huevo fecundado es sometido a cambios en la temperatura de incubación durante la etapa larvaria

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, experimento de Roux

En el experimento de Roux, antes de la primera división de un huevo fecundado de rana del género *Xenopus*, una de las dos células (blastómeras) es destruida con una aguja caliente, mientras que la otra permanece intacta.

> El distractor B es exactamente el experimento de Driesch, descrito en el mismo pie
> de figura.

---

### 34

De acuerdo con el libro de Biología, ¿qué se observa en el estadio de blástula en el experimento de Roux?

- A. Que la célula que no fue dañada se ha dividido normalmente, dando lugar a medio embrión
- B. Que la célula que no fue dañada da lugar a una larva completa, aunque más pequeña
- C. Que ambas células se recuperan y dan lugar a dos embriones completos
- D. Que el desarrollo se detiene por completo y no se forma ninguna estructura

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, resultado de Roux

En el estadio de blástula se observa que la célula que no fue dañada se ha dividido normalmente, dando lugar a medio embrión, y continúa de la misma manera en el estadio de néurula en la mitad no dañada.

---

### 35

De conformidad con el libro de Biología, ¿qué concluía Roux, según su propio pensamiento, a partir de su experimento?

- A. Que cada célula tendría la información suficiente para desarrollar partes del embrión de manera independiente del ambiente
- B. Que cada célula depende por completo del ambiente celular y tisular para desarrollarse
- C. Que las dos blastómeras son totipotentes y equivalentes entre sí
- D. Que la información del desarrollo reside exclusivamente en el citoplasma del huevo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, conclusión de Roux

Según el pensamiento del investigador, cada célula tendría la información suficiente para desarrollar partes del embrión de manera independiente del ambiente.

---

### 36

En relación con el libro de Biología, ¿en qué consistió el experimento de Driesch con huevos de erizos de mar?

- A. En separar las células en el estadio de dos blastómeras
- B. En destruir una de las dos blastómeras con una aguja caliente
- C. En incubar los huevos a distintas temperaturas durante la etapa larvaria
- D. En trasplantar embriones entre hembras de distinta coloración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, experimento de Driesch

Experimento de Driesch con huevos de erizos de mar en el que intentó corroborar las conclusiones de Roux. Consistió en separar las células en el estadio de dos blastómeras.

---

### 37

De acuerdo con el libro de Biología, ¿qué resultado obtuvo Driesch al separar las células en el estadio de dos blastómeras?

- A. Las células pueden experimentar un desarrollo normal que da lugar a una larva completa, aunque más pequeña
- B. Las células dan lugar cada una a medio embrión, que muere en el estadio de néurula
- C. Sólo una de las dos células sobrevive y da lugar a una larva de tamaño normal
- D. Ninguna de las dos células se divide y el desarrollo se interrumpe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, resultado de Driesch

Las células pueden experimentar un desarrollo normal que da lugar a una larva completa, aunque más pequeña.

---

### 38

De conformidad con el libro de Biología, ¿por qué resultaron compatibles los experimentos de Roux y de Driesch, que inicialmente se interpretaron como contradictorios?

- A. Porque, en el primer caso, la presencia de una célula muerta en contacto con la mitad viva del embrión interviene como ambiente y condiciona el proceso
- B. Porque en ambos casos se destruyó una de las dos blastómeras con una aguja caliente
- C. Porque en ambos casos se obtuvo una larva completa de tamaño normal
- D. Porque los erizos de mar y las ranas comparten el mismo mecanismo de segmentación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, compatibilidad de ambos modelos

Experimentos posteriores pusieron en evidencia que ambos modelos son compatibles, ya que, en el primer caso, la presencia de una célula muerta en contacto con la mitad viva del embrión interviene como ambiente y condiciona el proceso.

---

### 39

En relación con el libro de Biología, ¿qué importancia se fue reforzando a partir de la comparación entre los experimentos de Roux y de Driesch?

- A. La importancia que reviste el ambiente celular, tisular, y de escalas mayores, en el desarrollo embrionario
- B. La importancia del número de cromosomas en la determinación del fenotipo
- C. La importancia de la temperatura de incubación en la etapa larvaria
- D. La importancia de la metilación del ADN en la diferenciación celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, el ambiente en el desarrollo

Así se fue reforzando la importancia que reviste el ambiente celular, tisular, y de escalas mayores, en el desarrollo embrionario.

---

### 40

De acuerdo con el libro de Biología, ¿qué investigaron los científicos de la escuela rusa utilizando poblaciones de laboratorio como modelos experimentales?

- A. Cuán plásticos (moldeables) podían ser ciertos rasgos de los organismos frente a los cambios ambientales
- B. Cuántas mutaciones acumula un organismo a lo largo de su vida
- C. Cuántas divisiones celulares separan al cigoto de la larva
- D. Cuán rápido se transcribe el ADN en distintos tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · la escuela rusa y la plasticidad

Estas dificultades llevaron a diferentes científicos de la escuela rusa a investigar cuán plásticos (moldeables) podían ser ciertos rasgos de los organismos frente a los cambios ambientales, utilizando como modelos experimentales a poblaciones de laboratorio.

---

### 41

De conformidad con el libro de Biología, ¿qué organismo utilizó la escuela rusa para analizar la plasticidad de los rasgos frente a los cambios de temperatura?

- A. La pulga de agua *Daphnia*
- B. El erizo de mar
- C. La rana del género *Xenopus*
- D. El moho rosado del pan *Neurospora*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · *Daphnia*

A partir del análisis de poblaciones de la pulga de agua *Daphnia* sometidas a cambios en la temperatura de incubación durante la etapa larvaria.

---

### 42

En relación con el libro de Biología, ¿qué observaron los investigadores al someter a las poblaciones de *Daphnia* a cambios en la temperatura de incubación durante la etapa larvaria?

- A. Que algunos rasgos mostraban una amplia variación, mientras que otros variaban en mucha menor medida
- B. Que todos los rasgos mostraban una variación igualmente amplia
- C. Que ningún rasgo variaba, cualquiera que fuese la intensidad del estrés
- D. Que la variación de los rasgos era proporcional al número de generaciones estudiadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · resultados con *Daphnia*

Observaron que algunos rasgos mostraban una amplia variación, mientras que otros variaban en mucha menor medida, a pesar de la intensidad del estrés por cambios de temperatura a la que eran sometidas las larvas.

---

### 43

De acuerdo con el libro de Biología, ¿qué sugirió la observación de que diversos rasgos se modifican de forma variable de acuerdo a estímulos externos?

- A. Que el ambiente podía tener un papel más o menos creativo durante el desarrollo
- B. Que el ambiente no tenía ningún papel durante el desarrollo
- C. Que el genotipo determinaba por completo el fenotipo
- D. Que las mutaciones eran la única fuente de variación fenotípica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · el papel creativo del ambiente

La observación que permite concluir que diversos rasgos se modifican de forma variable de acuerdo a estímulos externos, sugirió que el ambiente podía tener un papel más o menos creativo durante el desarrollo.

---

### 44

De conformidad con el libro de Biología, ¿qué coloración desarrollan los zorros y los conejos árticos en verano y en invierno?

- A. Parda o gris en verano y pelo blanco en invierno
- B. Blanca en verano y pelo pardo o gris en invierno
- C. Parda en verano y pelo negro en invierno
- D. Gris todo el año, con manchas blancas en invierno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · plasticidad fenotípica estacional

Algunos animales, durante el curso de su vida, presentan diferentes pigmentaciones en su pelaje, como es el caso de los zorros y los conejos árticos, que desarrollan una coloración parda o gris en verano y cambian a pelo blanco en invierno.

---

### 45

En relación con el libro de Biología, ¿qué presentan algunas especies de mariposas según la época del año en la que ocurre su metamorfosis?

- A. Diferencias notables en su coloración
- B. Diferencias notables en el número de sus alas
- C. Diferencias notables en su cantidad de cromosomas
- D. Diferencias notables en su temperatura corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · mariposas y estación del año

Otros organismos, como algunas especies de mariposas, presentan diferencias notables en su coloración según la época del año en la que ocurre su metamorfosis.

---

### 46

De acuerdo con el libro de Biología, ¿quién acuñó el concepto moderno de epigenética y en qué momento?

- A. El biólogo escocés Conrad H. Waddington (1905-1975), a mediados del siglo pasado
- B. El biólogo evolutivo estadounidense Richard Lewontin, en el año 2000
- C. El anatomista suizo Wilhelm His (1831-1904), a fines del siglo xix
- D. El filósofo griego Aristóteles, en la antigua Grecia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · Waddington

El concepto moderno de epigenética, representativo de la concepción que actualmente organiza a este campo del conocimiento biológico, fue acuñado a mediados del siglo pasado por el biólogo escocés Conrad H. Waddington (1905-1975).

> Ojo con el distractor D: Aristóteles acuñó el término **epigénesis**, no el concepto
> moderno de **epigenética**.

---

### 47

De conformidad con el libro de Biología, ¿en qué campos se formó Conrad H. Waddington?

- A. Fue paleontólogo, genetista, embriólogo y filósofo
- B. Fue médico, químico y matemático
- C. Fue botánico, zoólogo y ecólogo
- D. Fue físico, astrónomo y geólogo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · formación de Waddington

Waddington fue paleontólogo, genetista, embriólogo y filósofo y, probablemente, esta formación tan amplia estimuló su interés en avanzar en la construcción de una propuesta teórica integradora, alternativa al reduccionismo genético que hegemonizaba el pensamiento biológico de su época.

---

### 48

En relación con el libro de Biología, ¿qué propuso Waddington al integrar la epigénesis aristotélica con los modelos de la genética?

- A. Que existen diversos procesos que operan en una jerarquía más alta que los genes, que impactan en el desarrollo y en la diferenciación de células y tejidos durante la embriogénesis
- B. Que los genes son el único nivel de organización que explica el desarrollo embrionario
- C. Que el embrión está preformado y sólo debe aumentar de tamaño
- D. Que la información del desarrollo reside por completo en el ambiente externo del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · procesos de jerarquía más alta que los genes

Al integrar estas esferas, propuso que existen diversos procesos que operan en una jerarquía más alta que los genes, que impactan en el desarrollo y en la diferenciación de células y tejidos de los organismos durante la embriogénesis.

---

### 49

De acuerdo con el libro de Biología, ¿en qué texto se encuentra la primera mención registrada del término epigenética?

- A. En *An introduction to modern genetics* (1939), de Waddington
- B. En *Genes, Organismo y Ambiente* (2000), de Lewontin
- C. En *The epidemiology of epigenetics*, de Haig
- D. En *An introduction to modern genetics* (1950), de Waddington

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · primera mención del término

La primera mención registrada de este término se encuentra en su texto *An introduction to modern genetics* (1939).

> El distractor D repite el título correcto con el año cambiado: la fecha es 1939.

---

### 50

De conformidad con el libro de Biología, ¿qué propuso Waddington en su texto de 1939 respecto de la oposición "preformismo-epigénesis"?

- A. Que la noción epigenética es superadora de esa oposición
- B. Que la oposición se resuelve a favor del preformismo
- C. Que la oposición se resuelve a favor de la epigénesis
- D. Que la oposición carece por completo de sentido biológico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · la epigenética como superación

Allí propuso que la noción epigenética es superadora de la oposición "preformismo-epigénesis".

---

### 51

En relación con el libro de Biología, ¿cómo denominó Waddington al citoplasma de la célula huevo, al diferenciarlo del valor de sus genes?

- A. "Fenotipo del genotipo del oocito"
- B. "Paisaje epigenético del oocito"
- C. "Ruido del desarrollo del oocito"
- D. "Genotipo del fenotipo del oocito"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el citoplasma como fenotipo del genotipo del oocito

Waddington entiende que es útil reconocer el valor de "los genes" de la célula huevo y diferenciarlo de aquel de su citoplasma, al cual considera "fenotipo del genotipo del oocito".

> El distractor D invierte los dos términos de la expresión.

---

### 52

De acuerdo con el libro de Biología, ¿cómo propuso Waddington que se debía considerar al desarrollo?

- A. Como un "proceso epigenético", involucrando en ese proceso a las interacciones de los "constituyentes" de las células entre sí, las interacciones célula-célula, los organizadores embrionarios y los efectos del ambiente con el sistema
- B. Como un proceso puramente genético, determinado por la secuencia del ADN de la célula huevo
- C. Como un proceso preformado, en el que el embrión sólo aumenta de tamaño
- D. Como un proceso azaroso, sin ninguna regularidad reconocible

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el desarrollo como proceso epigenético

Propone que se debe considerar al desarrollo como un "proceso epigenético" e involucrar en ese proceso a las interacciones de los "constituyentes" de las células entre sí, las interacciones célula-célula, los organizadores embrionarios y los efectos del ambiente con el sistema.

---

### 53

De conformidad con el libro de Biología, ¿por dónde transitan las células durante el desarrollo de los organismos multicelulares complejos, según la metáfora de Waddington?

- A. Por un paisaje epigenético
- B. Por un dogma central
- C. Por una red metabólica
- D. Por una cascada de señalización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · paisaje epigenético

El autor propuso que durante el desarrollo de los organismos multicelulares complejos, las células transitan por un paisaje epigenético.

---

### 54

En relación con el libro de Biología, ¿qué componentes físicos intervienen, junto con los genéticos y los tisulares, en el tránsito de las células por el paisaje epigenético?

- A. La tensión superficial y la geometría de los tejidos
- B. La temperatura corporal y la presión osmótica
- C. La carga eléctrica de la membrana y el pH del citosol
- D. La viscosidad del citoplasma y la densidad del núcleo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · componentes del paisaje epigenético

Según las interacciones entre diferentes componentes tanto genéticos como físicos (tensión superficial, geometría de los tejidos) y tisulares (características bioquímicas y morfológicas de células y tejidos).

---

### 55

De acuerdo con el libro de Biología, ¿en qué consiste el proceso de diferenciación por el que transita un grupo de células pluripotenciales hacia un linaje celular específico?

- A. En un proceso que constituye una canalización irreversible
- B. En un proceso que constituye una canalización reversible
- C. En un proceso que constituye una mutación heredable
- D. En un proceso que constituye una cascada de señalización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · canalización irreversible

Un grupo de células pluripotenciales transitarán por un proceso de diferenciación hacia un linaje celular específico –como el de las células de la piel o las del hígado–, en un proceso que constituye una canalización irreversible.

---

### 56

De conformidad con el libro de Biología, ¿qué se desconocía todavía cuando Waddington propuso su metáfora de los paisajes epigenéticos?

- A. Cuál era la molécula que otorgaba la base material de la herencia
- B. Cuál era el número de cromosomas de la especie humana
- C. Cuál era el papel del ambiente en el desarrollo embrionario
- D. Cuál era la diferencia entre genotipo y fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el contexto de la metáfora

Cuando Waddington propuso su metáfora de los paisajes epigenéticos aún no se conocía cuál era la molécula que otorgaba la base material de la herencia.

---

### 57

En relación con el libro de Biología, ¿en qué década se incorpora el modelo de la doble hélice y se reconoce al ADN como molécula portadora de la información genética?

- A. En la década de 1950
- B. En la década de 1930
- C. En la década de 1970
- D. En la década de 1990

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · la doble hélice

Pocos años después, en la década de 1950, se incorpora el modelo de la doble hélice y se reconoce al ADN como molécula portadora de la información genética.

---

### 58

De acuerdo con el libro de Biología, ¿qué se inició con el reconocimiento del ADN como molécula portadora de la información genética?

- A. La hegemonía de la biología molecular y la dogmatización reduccionista de la Teoría Sintética de la Evolución en torno a la genética de poblaciones
- B. La recuperación inmediata de las ideas complejas propuestas por Waddington
- C. El abandono definitivo de la genética de poblaciones como campo de estudio
- D. El nacimiento de la embriología experimental en manos de investigadores alemanes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · hegemonía de la biología molecular

Con ello se inicia la hegemonía de la biología molecular y la dogmatización reduccionista de la Teoría Sintética de la Evolución en torno a la genética de poblaciones.

---

### 59

De conformidad con el libro de Biología, ¿qué ocurrió con las discusiones planteadas por Waddington a partir del lugar central que se asignó a los genes en las ciencias de la vida?

- A. Quedaron eclipsadas y, junto con ello, se abandonaron las miradas complejas por varias décadas
- B. Se fortalecieron y pasaron a ocupar el centro del pensamiento biológico
- C. Se incorporaron sin cambios a la Teoría Sintética de la Evolución
- D. Se convirtieron en el fundamento de la genética de poblaciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el eclipse de las miradas complejas

A partir de entonces, el lugar central que se asignó a los genes en las ciencias de la vida eclipsó las discusiones planteadas por Waddington y, junto con ello, se abandonaron las miradas complejas por varias décadas.

---

### 60

En relación con el libro de Biología, ¿en qué ámbito encontró callejones sin salida la mirada del reduccionismo genético?

- A. En diversos ámbitos, entre otros, en la propia embriología
- B. Únicamente en la genética de poblaciones
- C. Únicamente en la bioquímica de las proteínas
- D. Únicamente en la taxonomía de los organismos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · límites del reduccionismo

Sin embargo, la mirada del reduccionismo genético encontró callejones sin salida en diversos ámbitos, entre otros, en la propia embriología.

---

### 61

De acuerdo con el libro de Biología, ¿cómo se hace manifiesta la necesidad de interpretar los cambios fenotípicos en los procesos de desarrollo embrionario?

- A. Como fenómenos emergentes de las interacciones de las células, tejidos, órganos y sistemas entre sí y con el ambiente
- B. Como consecuencias directas y exclusivas de la secuencia de nucleótidos del ADN
- C. Como resultados azarosos sin relación con el ambiente
- D. Como efectos de las mutaciones acumuladas durante la embriogénesis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · los cambios fenotípicos como fenómenos emergentes

Especialmente en los procesos de desarrollo embrionario, se expresan las limitaciones del reduccionismo ya que se hace manifiesta la necesidad de interpretar los cambios fenotípicos como fenómenos emergentes de las interacciones de las células, tejidos, órganos y sistemas entre sí y con el ambiente.

---

### 62

De conformidad con el libro de Biología, ¿qué autores comenzaron a recuperar las ideas en torno a la complejidad de las relaciones entre genotipo, fenotipo y ambiente en las décadas de 1980 y 1990?

- A. Stephen J. Gould, Steven Rose y Richard Lewontin
- B. Conrad H. Waddington, Wilhelm His y Wilhelm Roux
- C. Hans Driesch, Hans Spemann e Hilde Mangold
- D. Aleksandr Kovalevski, M. Zavadovski y Oscar Hertwig

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · recuperación de la mirada compleja

En las décadas de 1980 y 1990, diversos autores, como Stephen J. Gould, Steven Rose, Richard Lewontin, entre otros, comenzaron a recuperar las ideas en torno a la complejidad de las relaciones entre genotipo, fenotipo y ambiente.

---

### 63

En relación con el libro de Biología, ¿cuál es el título y el año del libro en el que Richard Lewontin propone su visión sobre el fenotipo?

- A. *Genes, Organismo y Ambiente* (2000)
- B. *An introduction to modern genetics* (1939)
- C. *Genes, Organismo y Ambiente* (1983)
- D. *The epidemiology of epigenetics* (2017)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · Lewontin

En su libro *Genes, Organismo y Ambiente* (2000), el biólogo evolutivo y genetista estadounidense Richard Lewontin propone que un fenotipo no es simplemente el resultado de la interacción entre un genotipo y un ambiente particular.

---

### 64

De acuerdo con el libro de Biología, ¿qué es un fenotipo según la propuesta de Richard Lewontin?

- A. El resultado de un devenir complejo y multicausal con resultados diversos de acuerdo al caso y no siempre predecibles
- B. Simplemente el resultado de la interacción entre un genotipo y un ambiente particular
- C. La expresión directa e invariable de la secuencia de nucleótidos del genoma
- D. El producto exclusivo de las mutaciones acumuladas en la línea germinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · el fenotipo según Lewontin

Richard Lewontin propone que un fenotipo no es simplemente el resultado de la interacción entre un genotipo y un ambiente particular, sino el resultado de un devenir complejo y multicausal con resultados diversos de acuerdo al caso y no siempre predecibles.

> El distractor B es justamente lo que el libro **niega** en el mismo renglón.

---

### 65

De conformidad con el libro de Biología, ¿cómo denomina Lewontin al factor de azar que interviene en la definición del camino fenotípico del organismo en desarrollo?

- A. "Ruido del desarrollo"
- B. "Paisaje epigenético"
- C. "Canalización irreversible"
- D. "Plasticidad fenotípica"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · fig. 14-5, ruido del desarrollo

Lewontin propone que también interviene un factor de azar, al que denomina "ruido del desarrollo", en referencia a una multiplicidad de factores interactuantes que operan de manera impredecible, definiendo el compromiso del organismo en desarrollo con alguno de los caminos fenotípicos posibles.

---

### 66

En relación con el libro de Biología, ¿qué resulta claro actualmente sobre el efecto del ambiente y los cambios de la embriogénesis?

- A. Que ambos son fundamentales para entender las trayectorias de vida de los organismos
- B. Que ninguno de los dos interviene en las trayectorias de vida de los organismos
- C. Que sólo los cambios de la embriogénesis importan, y no el ambiente
- D. Que sólo el ambiente importa, y no los cambios de la embriogénesis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · ambiente y embriogénesis

Actualmente resulta claro que tanto el efecto del ambiente como los cambios que ocurren durante la embriogénesis son fundamentales para entender las trayectorias de vida de los organismos.

---

### 67

De acuerdo con el libro de Biología, ¿qué carácter pueden tener los fenómenos bioquímicos específicos que involucran muchos de los cambios epigenéticos?

- A. Pueden ser reversibles, pero también estables y heredables
- B. Sólo pueden ser reversibles y nunca estables
- C. Sólo pueden ser estables y heredables, nunca reversibles
- D. Sólo pueden ser heredables cuando afectan la secuencia del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · carácter de los cambios bioquímicos

Sabemos también que muchos de estos cambios involucran fenómenos bioquímicos específicos que pueden ser reversibles, pero también estables y heredables.

---

### 68

De conformidad con el libro de Biología, ¿qué revela la epigenética frente al reduccionismo que concibe un flujo de información lineal y unidireccional desde el ADN a las proteínas?

- A. Un panorama multidireccional de flujo de información, que incluye al ambiente
- B. Un panorama todavía más lineal y unidireccional que el propuesto por el dogma central
- C. Un panorama en el que la información sólo fluye desde las proteínas hacia el ADN
- D. Un panorama en el que el ambiente no interviene en el flujo de información

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · flujo multidireccional de información

Frente al reduccionismo que implica concebir un flujo de información lineal y unidireccional desde el ADN a las proteínas, la epigenética revela un panorama multidireccional de flujo de información, que incluye al ambiente.

---

### 69

En relación con el libro de Biología, ¿de qué se ocupa la epigenética, más allá de la descripción de mecanismos?

- A. De los fenómenos que se vinculan con cada etapa del desarrollo, en términos individuales y poblacionales, y con fenómenos de herencia y de evolución, en relación con el ambiente
- B. Exclusivamente de la descripción de los mecanismos moleculares de metilación del ADN
- C. Exclusivamente de la clasificación de las modificaciones de las histonas
- D. Exclusivamente de los fenómenos que ocurren durante la embriogénesis temprana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · alcance frente al reduccionismo

La epigenética es, históricamente y en la actualidad, un área que se ocupa de los fenómenos que se vinculan con cada etapa del desarrollo, en términos individuales y poblacionales, y con fenómenos de herencia y de evolución, en relación con el ambiente en el que se desarrollan los seres vivos.

---

### 70

De acuerdo con el libro de Biología, en la metáfora "literaria" del capítulo, ¿qué sería la información epigenética si la secuencia de ADN fuera un "manual de instrucciones"?

- A. Una versión de ese texto con anotaciones colaterales y palabras o párrafos resaltados con colores
- B. Una segunda copia idéntica de ese mismo manual, guardada en el citoplasma
- C. Un índice que ordena alfabéticamente los capítulos del manual
- D. Una traducción del manual a otro idioma, sin cambios de contenido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · metáfora del manual de instrucciones

Si la secuencia de ADN fuera un "manual de instrucciones" que explica cómo se desarrolla un organismo completo a partir de un cigoto, la información epigenética sería una versión de ese texto con anotaciones colaterales y palabras o párrafos resaltados con colores.

---

### 71

De conformidad con el libro de Biología, ¿qué ayudaría a determinar el "resaltado" en la metáfora del manual de instrucciones?

- A. Qué genes deben transcribirse y traducirse, cuándo y en qué células
- B. Cuántos nucleótidos tiene cada gen del genoma
- C. En qué cromosoma se ubica físicamente cada gen
- D. Cuántas copias del genoma posee cada célula del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · qué determina el "resaltado"

En esta metáfora, el "resaltado" ayudaría a determinar qué genes deben transcribirse y traducirse, cuándo y en qué células.

---

### 72

En relación con el libro de Biología, ¿qué función cumplen los ARN y proteínas que operan como "escritores" epigenéticos?

- A. Establecen y mantienen el patrón de información
- B. Remueven el patrón de información si es necesario
- C. Convierten la información en instrucciones funcionales
- D. Degradan el patrón de información una vez utilizado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · escritores epigenéticos

La célula emplea varios ARN y proteínas que operan como "escritores" epigenéticos que establecen y mantienen el patrón de información.

> Los distractores B y C son las definiciones que el mismo párrafo da a los
> "borradores" y a los "lectores".

---

### 73

De acuerdo con el libro de Biología, ¿qué hacen los "borradores" epigenéticos?

- A. Remueven el patrón de información si es necesario
- B. Establecen y mantienen el patrón de información
- C. Convierten la información en instrucciones funcionales
- D. Resaltan las partes del texto que requieren una lectura más cuidadosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · borradores epigenéticos

La célula emplea varios ARN y proteínas que operan como "escritores" epigenéticos que establecen y mantienen el patrón de información, como "borradores" que lo remueven si es necesario y como "lectores" que convierten la información en instrucciones funcionales.

---

### 74

De conformidad con el libro de Biología, ¿qué hacen los "lectores" epigenéticos?

- A. Convierten la información en instrucciones funcionales
- B. Establecen y mantienen el patrón de información
- C. Remueven el patrón de información si es necesario
- D. Degradan los ARN mensajeros que ya fueron traducidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · lectores epigenéticos

Como "lectores" que convierten la información en instrucciones funcionales.

---

### 75

En relación con el libro de Biología, ¿qué comprende en su conjunto la red epigenética?

- A. Moléculas de diversos tipos y tamaños, incluidos miles de resaltadores, borradores y decodificadores epigenéticos que trabajan conjuntamente
- B. Únicamente las enzimas que metilan el ADN genómico
- C. Únicamente las histonas y sus modificaciones postraduccionales
- D. Únicamente los ARN pequeños no codificantes del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · composición de la red epigenética

En su conjunto, la red epigenética comprende moléculas de diversos tipos y tamaños. Incluye miles de resaltadores, borradores y decodificadores epigenéticos que trabajan conjuntamente en una trama compleja y sutilmente coordinada.

---

### 76

De acuerdo con el libro de Biología, ¿qué tipo de modificaciones incluyen, en su mayor parte, los procesos moleculares propuestos para interpretar algunos fenómenos epigenéticos?

- A. Modificaciones nucleares tanto en el ADN como en las histonas
- B. Modificaciones exclusivas de la membrana plasmática
- C. Modificaciones exclusivas de los ribosomas citoplasmáticos
- D. Modificaciones exclusivas de la pared celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · dónde ocurren las modificaciones

Los procesos moleculares propuestos para interpretar algunos fenómenos epigenéticos incluyen, en su mayor parte, modificaciones nucleares tanto en el ADN como en las histonas.

---

### 77

De conformidad con el libro de Biología, además de las modificaciones nucleares, ¿qué otros procesos epigenéticos se han descrito?

- A. Procesos que ocurren en el ambiente citoplasmático e, incluso, aquellos que operan a distancia a través de comunicaciones intercelulares
- B. Procesos que ocurren únicamente en la matriz extracelular de los tejidos
- C. Procesos que ocurren únicamente en el interior de las mitocondrias
- D. Procesos que ocurren únicamente durante la división meiótica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · procesos citoplasmáticos y a distancia

Pero también se han descrito procesos epigenéticos que ocurren en el ambiente citoplasmático e, incluso, aquellos que operan a distancia a través de comunicaciones intercelulares.

---

### 78

En relación con el libro de Biología, ¿qué otros procesos califican como fenómenos epigenéticos aunque hayan sido desarrollados en otros capítulos?

- A. La regulación génica mediada por factores de transcripción, los procesos silenciadores y potenciadores de la expresión génica, y el corte y empalme del ARNm y su regulación
- B. La replicación semiconservativa del ADN y la reparación de las mutaciones puntuales
- C. La segregación de los cromosomas homólogos durante la anafase de la meiosis
- D. El transporte activo de iones a través de la membrana plasmática

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · fenómenos tratados en otros capítulos

Algunos de ellos son la regulación génica mediada por factores de transcripción (basales, específicos); los procesos silenciadores y potenciadores de la expresión génica; el corte y empalme del ARNm y su regulación; la regulación de la traducción y la localización de las proteínas y sus modificaciones postraduccionales, como la fosforilación y desfosforilación; la organización cuaternaria de las proteínas, así como su degradación o inactivación.

---
