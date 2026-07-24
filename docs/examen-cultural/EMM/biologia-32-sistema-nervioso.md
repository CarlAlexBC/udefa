# Biología · Capítulo 32 · El sistema nervioso: estructura y función

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(221 reactivos), 4 (190), 5 (157), 7 (240), 8 (149), 11 (162), 12 (131) y 31 (84).
En el temario, tras el 32 vienen el 35, el 36 y el 37.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de texto
es lorem ipsum). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado.** El capítulo 32 pertenece a la
**Sección VI · Biología de los animales**. La portadilla está en la **hoja 801**
(página impresa 755): trae el apartado de apertura "Biología en contexto social ·
La medicalización de los estados de ánimo" (sobre el DSM), el título del capítulo y
el epígrafe de Hipócrates. **El cuerpo empieza en la hoja 802** (página impresa 756),
con la evolución de los sistemas nerviosos. El desfase +46 se verificó aquí (hoja
802 = p. 756), no se calculó.

## Cobertura actual

Cubierta la página impresa **756**: la introducción (Eric Kandel y el sistema
nervioso como uno de los más complejos) y la evolución de los sistemas nerviosos
(los sistemas nervioso y endocrino que coordinan los otros sistemas, que los
organismos simples responden a estímulos sin sistema nervioso —protozoos y
esponjas—, y el proceso de encefalización o cefalización). De la **página 757** se
cubre el sistema nervioso central y el periférico, el aumento del encéfalo y la
posición dorsal del sistema nervioso en los vertebrados. De las **páginas 757-758**
se cubre el encéfalo de los distintos vertebrados (la protección de la médula y el
encéfalo, el cerebelo del tiburón, el cuerpo estriado de las aves, la corteza
cerebral de los mamíferos), el tamaño del encéfalo (el *Argentinosaurus*; la ballena
10 000 g / 0,02%; el humano 1300-1500 g / 2%; el plegamiento de la corteza en los
primates; 86 000 millones de neuronas frente a las 7000 de la abeja) y la red difusa
de los cnidarios (fig. 32-1). De la **página 758** se cubre la neurona (unidad
morfofuncional que se comunica por señales eléctricas y químicas, las sinapsis, el
soma, las dendritas, el axón y la información unidireccional) y las células de la
glía (la vaina de mielina y sus funciones de sostén, nutrición, defensa y guía), más
los ganglios del sistema nervioso periférico. De la **página 759** se cubren las
neuronas motoras (eferentes) y sensoriales (aferentes), las señales bioeléctricas y
químicas (los transmisores nerviosos, la sinapsis, el flujo axoplásmico) y la
división del sistema nervioso de los vertebrados en central (SNC: encéfalo y médula
espinal) y periférico (SNP), con la función y las dimensiones de la médula espinal.
De la **página 760** se cubren la sustancia gris y blanca de la médula, el encéfalo
(cerebro, diencéfalo, cerebelo y tronco cerebral), el tronco cerebral (mesencéfalo,
protuberancia y bulbo raquídeo), la formación reticular y el SARA, las funciones del
cerebelo y del diencéfalo, las raíces dorsal (sensitiva) y ventral (motora) de la
médula con los ganglios de la raíz dorsal (fig. 32-4), y las divisiones del SNP
—somático y autónomo (simpático, parasimpático y entérico), fig. 32-3—. De la
**página 761** se cubren el SNP somático (SNS) y autónomo (SNA) con sus divisiones
(simpática que prepara para la acción, parasimpática que restaura, entérica del
digestivo), los nervios craneales (13 pares) y espinales (variables: 31 en humanos,
todos mixtos), el cerebro (dos hemisferios, la corteza cerebral de sustancia gris) y
la protección del SNC (las meninges y el líquido cefalorraquídeo). De la **página
762** se cubren las fibras motoras y sensitivas de cada par raquídeo (que inervan
y reciben señales de la misma área del cuerpo), las lesiones medulares (que eliminan
la sensibilidad y el control motor por debajo de la lesión), los cuerpos celulares
de las neuronas sensoriales (unipolares, en los ganglios de la raíz dorsal, por fuera
de la médula), sus sinapsis en la sustancia gris con interneuronas, neuronas motoras
o de proyección (que ascienden por la sustancia blanca), las órdenes motoras (que
salen por la zona ventral de la sustancia gris vía los nervios raquídeos) y el arco
reflejo (figs. 32-5 y 32-6): la unidad básica de procesamiento nervioso, el ejemplo
del pinchazo, la secuencia receptor→neurona sensorial→interneurona→neurona motora→
efector, su presencia en todos los vertebrados, su papel en la regulación de procesos
internos, y el arco reflejo polisináptico con su comunicación por sinapsis. De la
**página 763** se cubren las características de las acciones reflejas (involuntarias,
innatas, estereotipadas y de alto valor adaptativo), los subsistemas somático (SNS,
control voluntario de los músculos esqueléticos) y autónomo (SNA, control involuntario
del músculo cardíaco, glándulas y músculo liso), la anatomía de sus neuronas motoras,
los ganglios autónomos con las neuronas preganglionares y posganglionares, el que solo
el autónomo puede inhibir a un efector, los reflejos viscerales, y el SNA simpático y
parasimpático (fig. 32-7): la etimología *pathos*, sus diferencias, los neurotransmisores
(noradrenalina en el simpático y acetilcolina en el parasimpático), el efecto antagónico,
la homeostasis, y la respuesta simpática "de lucha o huida" (frecuencias cardíaca y
respiratoria, vasoconstricción, pupilas y piloerección, inhibición digestiva y la
secreción de adrenalina por la médula suprarrenal).

**Pendiente:** el capítulo 32 está EN CURSO; sigue desde la página impresa 764 (hoja 810) en adelante (el resto de la respuesta simpática, la división parasimpática, las barreras del SNC y lo que reste del capítulo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y las "Situaciones problemáticas"). De la materia de Biología siguen sin empezar los capítulos 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta y toma el párrafo que le sigue hasta el
> primer renglón en blanco; si desaparece, o si empieza con "ninguno", Biología se
> reporta como cerrada. Por eso el capítulo en curso sostiene, en un solo párrafo,
> la lista de los que faltan.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · La evolución de los sistemas nerviosos (fig. 32-1, pp. 756-757)

### 1

De acuerdo con el libro de Biología, ¿quién es el neurocientífico, Premio Nobel de Fisiología y Medicina en 2000, que propone que la última frontera de la ciencia es comprender las bases neurobiológicas de la consciencia?

- A. Eric Kandel
- B. Hipócrates
- C. Santiago Ramón y Cajal
- D. Charles Darwin

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · introducción

Como propone el neurocientífico Eric Kandel, Premio Nobel de Fisiología y Medicina, 2000, "la frontera final de la ciencia –su último desafío– es la comprensión de las bases neurobiológicas de la consciencia y de los procesos mentales".

### 2

De acuerdo con el libro de Biología, en el linaje de los animales, ¿qué sistemas representaron una novedad evolutiva al coordinar e integrar todas las funciones?

- A. Los sistemas nervioso y endocrino, que coordinan los otros sistemas de órganos
- B. El sistema digestivo y el sistema respiratorio
- C. El sistema óseo y el sistema muscular
- D. El sistema tegumentario y el sistema linfático

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · evolución

Los sistemas nervioso y endocrino coordinan los otros sistemas de órganos y favorecen la optimización, en tiempo y espacio, de los procesos metabólicos del animal y su funcionamiento como una unidad integrada.

### 3

De acuerdo con el libro de Biología, aunque los organismos más simples carecen de verdaderos sistemas nerviosos, ¿qué tienen en común todos ellos?

- A. Todos responden a los estímulos ambientales
- B. Ninguno responde a los estímulos ambientales
- C. Todos poseen un encéfalo desarrollado
- D. Todos poseen una médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · evolución

Si bien los organismos más simples carecen de verdaderos sistemas nerviosos, todos responden a los estímulos ambientales.

### 4

De acuerdo con el libro de Biología, ¿cómo responden a los estímulos los protozoos, que carecen de sistema nervioso?

- A. Tienen receptores en su membrana plasmática que responden a estímulos químicos y promueven cambios en la dirección del movimiento de sus cilios
- B. Tienen un encéfalo que procesa los estímulos
- C. Tienen una médula espinal que transmite los impulsos
- D. No responden a ningún estímulo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · evolución

Los protozoos tienen receptores en su membrana plasmática, que responden a estímulos químicos y promueven cambios en la dirección del movimiento de sus cilios.

### 5

De acuerdo con el libro de Biología, los poríferos, como las esponjas, ¿cómo reaccionan frente a los estímulos físicos y químicos?

- A. Alteran el flujo de agua que circula a través de su cuerpo
- B. Contraen sus músculos esqueléticos
- C. Emiten impulsos a través de su médula espinal
- D. Cambian la dirección del movimiento de sus cilios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · evolución

Los poríferos, como las esponjas, reaccionan frente a estímulos físicos y químicos, y alteran el flujo de agua que circula a través de su cuerpo.

### 6

De acuerdo con el libro de Biología, ¿cómo se evidencia la mayor complejidad de los sistemas nerviosos de los invertebrados, y en qué organismos es mayor?

- A. Por la concentración creciente de tejido nervioso, mayor en los organismos con simetría bilateral
- B. Por la ausencia total de tejido nervioso
- C. Por la dispersión del tejido nervioso, mayor en los organismos sin simetría
- D. Por el aumento del tamaño del exoesqueleto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · evolución

La mayor complejidad de los sistemas nerviosos de los invertebrados se evidencia por la concentración creciente de tejido nervioso. Esta concentración es mayor en los organismos con simetría bilateral.

### 7

De acuerdo con el libro de Biología, ¿cómo se denomina la concentración de tejido nervioso en la región anterior del cuerpo?

- A. Proceso de encefalización o cefalización
- B. Proceso de mineralización
- C. Proceso de gastrulación
- D. Proceso de amplificación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 756
**Subtema:** sistema nervioso · evolución

A esta concentración en la región anterior del cuerpo se la denomina proceso de encefalización o cefalización.

### 8

De acuerdo con el libro de Biología, como resultado de la encefalización, ¿por qué quedaron constituidos el sistema nervioso central y el periférico?

- A. El central por un "cerebro" y un cordón nervioso; el periférico por filetes nerviosos distribuidos por todo el cuerpo del animal
- B. El central por filetes nerviosos; el periférico por el "cerebro"
- C. Ambos por el mismo cerebro, sin cordón nervioso
- D. El central solo por la médula espinal, sin cerebro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · evolución

Habría quedado definido un sistema nervioso central, constituido por un "cerebro" y un cordón nervioso, y un sistema nervioso periférico, constituido por filetes nerviosos distribuidos por todo el cuerpo del animal.

### 9

De acuerdo con el libro de Biología, ¿cuál es otra característica de la evolución de los sistemas nerviosos?

- A. El aumento del tamaño del encéfalo en relación con el peso corporal
- B. La disminución progresiva del tamaño del encéfalo
- C. La desaparición del encéfalo en los animales complejos
- D. La pérdida de todos los receptores sensoriales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · evolución

Otra característica de la evolución de los sistemas nerviosos es el aumento del tamaño del encéfalo en relación con el peso corporal.

### 10

De acuerdo con el libro de Biología, en los vertebrados, ¿cómo es la posición del sistema nervioso —a diferencia de los invertebrados— y cuáles son sus centros principales de procesamiento?

- A. Es dorsal al tubo digestivo (no ventral como en los invertebrados); sus centros principales son la médula espinal y el encéfalo
- B. Es ventral al tubo digestivo, igual que en los invertebrados
- C. Se encuentra por completo fuera del cuerpo
- D. Carece de centros de procesamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · vertebrados

En los vertebrados, el sistema nervioso no es ventral como en los invertebrados, sino dorsal al tubo digestivo y está desarrollado de forma notable. Sus centros principales de procesamiento son la médula espinal y el encéfalo.

---

## Sub-lote 2 · El encéfalo de los vertebrados y su tamaño (fig. 32-1, pp. 757-758)

### 11

De acuerdo con el libro de Biología, en los vertebrados, ¿por qué están protegidos la médula espinal y el encéfalo?

- A. Por los huesos de la columna vertebral y del cráneo
- B. Por un exoesqueleto de quitina
- C. Únicamente por el tejido adiposo
- D. No están protegidos por ninguna estructura

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · vertebrados

Los centros principales de procesamiento –la médula espinal y el encéfalo– están protegidos por los huesos de la columna vertebral y del cráneo.

### 12

De acuerdo con el libro de Biología, los peces cartilaginosos, como los tiburones, de gran actividad locomotora, ¿qué órgano tienen muy desarrollado, y qué coordina?

- A. Un cerebelo muy desarrollado, responsable de coordinar el movimiento de los músculos
- B. Una corteza cerebral desarrollada para el lenguaje
- C. Un cuerpo estriado que coordina el vuelo
- D. Unos lóbulos ópticos para producir hormonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · vertebrados

Los peces cartilaginosos, como los tiburones, de gran actividad locomotora, tienen un cerebelo muy desarrollado. Este órgano es responsable de coordinar el movimiento de los músculos.

### 13

De acuerdo con el libro de Biología, en las aves, ¿qué representa el cuerpo estriado y qué coordina el cerebelo?

- A. El cuerpo estriado es el principal centro integrador del cerebro, y el cerebelo coordina el equilibrio y los movimientos del vuelo
- B. El cuerpo estriado coordina la digestión, y el cerebelo, el lenguaje
- C. Ambos coordinan únicamente la respiración
- D. El cuerpo estriado produce las hormonas del vuelo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · vertebrados

En las aves, una de las estructuras más complejas del sistema nervioso es el cuerpo estriado, que representa el principal centro integrador de su cerebro, y el cerebelo, que coordina el equilibrio y los movimientos del vuelo.

### 14

De acuerdo con el libro de Biología, ¿cuál es la principal característica del sistema nervioso de los mamíferos?

- A. El enorme desarrollo de su corteza cerebral, relacionada con funciones complejas como el procesamiento de grandes cantidades de información
- B. La ausencia total de encéfalo
- C. Un cerebelo diminuto o inexistente
- D. Una red nerviosa difusa sin centros de procesamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · vertebrados

La principal característica de los mamíferos es el enorme desarrollo de su corteza cerebral relacionada con funciones particularmente complejas, como el procesamiento de grandes cantidades de información y, en los humanos, con el lenguaje articulado y el pensamiento simbólico.

### 15

De acuerdo con el libro de Biología, según el ejemplo del *Argentinosaurus* (cuyo cerebro del tamaño de una naranja gobernaba un cuerpo enorme), ¿de qué NO depende necesariamente la capacidad de ejecutar funciones complejas?

- A. Del tamaño del encéfalo
- B. Del número de patas del animal
- C. De la temperatura corporal
- D. Del tipo de esqueleto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · el encéfalo

La capacidad para ejecutar funciones complejas no depende necesariamente del tamaño. Un encéfalo relativamente simple y pequeño puede llevar a cabo un control estricto del cuerpo, como en el *Argentinosaurus*, un dinosaurio de cuello largo.

### 16

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, ¿cuánto pesa el encéfalo más grande (el de la ballena) y qué porcentaje del peso corporal representa?

- A. Pesa 10 000 g, pero representa solo el 0,02% del peso corporal
- B. Pesa 1400 g y representa el 2% del peso corporal
- C. Pesa 100 g y representa el 10% del peso corporal
- D. Pesa 10 000 g y representa el 20% del peso corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · el encéfalo

El encéfalo más grande es el de la ballena, que pesa 10 000 g, pero representa solo el 0,02% del peso corporal.

### 17

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, ¿cuánto pesa el encéfalo humano y qué porcentaje del peso corporal representa?

- A. Pesa unos 1300-1500 g y representa el 2% del peso corporal
- B. Pesa 10 000 g y representa el 0,02% del peso corporal
- C. Pesa 300 g y representa el 30% del peso corporal
- D. Pesa 5000 g y representa el 50% del peso corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · el encéfalo

El encéfalo humano, que pesa unos 1300-1500 g, si bien es mucho menor en peso absoluto, representa el 2% de nuestro peso corporal.

> Par de cifras vecinas (reactivos 16 y 17): la **ballena** tiene el encéfalo más
> pesado (10 000 g) pero es solo el **0,02%** de su cuerpo; el **humano**, mucho más
> liviano (1300-1500 g), llega al **2%**. El peso absoluto y el relativo se cruzan.

### 18

De acuerdo con el libro de Biología, en el linaje de los primates, ¿cómo se superó el límite físico que la cavidad craneana imponía al tamaño del cerebro?

- A. Por el plegamiento de la corteza cerebral, que permite que una gran superficie quepa en un volumen relativamente pequeño
- B. Por la eliminación de los huesos del cráneo
- C. Por la reducción del número de neuronas
- D. Por el aumento del tamaño del cráneo sin ningún límite

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · el encéfalo

En el linaje de los primates, este límite fue superado por el plegamiento de la corteza cerebral. Esta peculiar "novedad" evolutiva permite que una gran superficie de corteza, aunque altamente replegada en circunvoluciones, quepa en un volumen relativamente pequeño, limitado por el cráneo.

### 19

De acuerdo con el libro de Biología, el tamaño de los órganos nerviosos se correlaciona con el número de sus neuronas. ¿Con cuántas neuronas cuenta el encéfalo humano y cuántas la abeja?

- A. El encéfalo humano, cerca de 86 000 millones de neuronas; la abeja, 7000 neuronas
- B. El encéfalo humano, 7000 neuronas; la abeja, 86 000 millones
- C. Ambos cuentan con cerca de 1400 millones de neuronas
- D. El encéfalo humano, 1000 neuronas; la abeja, 100 neuronas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · el encéfalo

El masivo encéfalo humano, de alrededor de 1400 cm³, cuenta con cerca de 86 000 millones de neuronas, mientras que la abeja lleva 7000 neuronas en un cerebro de menos de 1 mm³.

### 20

De acuerdo con el libro de Biología, según la figura 32-1, ¿cómo forman las neuronas el sistema nervioso en los cnidarios?

- A. Forman una red nerviosa difusa
- B. Forman un encéfalo protegido por el cráneo
- C. Forman una corteza cerebral plegada
- D. Forman un cordón nervioso dorsal desarrollado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 757
**Subtema:** sistema nervioso · invertebrados

En el cnidario, las neuronas forman una red difusa.

---

## Sub-lote 3 · La neurona y las células de la glía (fig. 32-2, p. 758)

### 21

De acuerdo con el libro de Biología, ¿en qué células se basa todo sistema nervioso, y cómo se comunican entre sí?

- A. En las neuronas, unidades morfofuncionales que se comunican entre sí mediante señales eléctricas y químicas
- B. En las células de la glía, que se comunican solo por señales químicas
- C. En los ganglios, que no se comunican entre sí
- D. En la vaina de mielina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · la neurona

Todo sistema nervioso se basa en la actividad de células especializadas, las neuronas: unidades morfofuncionales que se comunican entre sí mediante señales eléctricas y químicas.

### 22

De acuerdo con el libro de Biología, además de a otras neuronas, ¿a qué otras células transmiten señales las neuronas?

- A. A células efectoras, como las células musculares o las glandulares
- B. Únicamente a las células de la glía
- C. A ninguna otra célula del cuerpo
- D. Solo a las células óseas del esqueleto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · la neurona

Las neuronas no solo transmiten señales a otras neuronas, sino también a células efectoras que forman parte de tejidos que responden a estas, como las células musculares o las glandulares.

### 23

De acuerdo con el libro de Biología, ¿a través de qué uniones ocurre la transmisión de la señal, y por medio de qué de manera habitual?

- A. A través de las sinapsis, de manera habitual por medio de la liberación de transmisores químicos
- B. A través de las vértebras, por medio de impulsos óseos
- C. A través del soma, por medio de la contracción
- D. A través de la vaina de mielina, solo por señales eléctricas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · la neurona

La transmisión de la señal ocurre a través de uniones conocidas como sinapsis, de manera habitual por medio de la liberación de transmisores químicos.

### 24

De acuerdo con el libro de Biología, ¿cómo se llama el cuerpo de la neurona que contiene el núcleo?

- A. El soma
- B. El axón
- C. La dendrita
- D. El ganglio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · la neurona

Las células nerviosas o neuronas están formadas por un cuerpo, o soma, que contiene al núcleo.

### 25

De acuerdo con el libro de Biología, ¿en qué sentido circula la información en la neurona?

- A. Siempre unidireccional: desde las dendritas hacia el cuerpo neuronal, y de allí por el axón hasta el extremo ramificado (teledendrón)
- B. En ambos sentidos por igual
- C. Solamente desde el axón hacia las dendritas
- D. No circula: permanece siempre en el soma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · la neurona

La información es siempre unidireccional desde las dendritas hacia el cuerpo neuronal, y de allí por el axón hasta el extremo ramificado (teledendrón).

### 26

De acuerdo con el libro de Biología, ¿qué conforman las células de la glía que recubre la mayoría de los axones y acelera la transmisión de las señales?

- A. La vaina de mielina
- B. El soma de la neurona
- C. Las dendritas
- D. Los ganglios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · células de la glía

Las células de la glía conforman la vaina de mielina, que recubre la mayoría de los axones y que acelera la transmisión de las señales a través de las neuronas.

### 27

De acuerdo con el libro de Biología, además de conformar la vaina de mielina, ¿qué otras funciones cumplen las células de la glía?

- A. Actúan como tejido de sostén, facilitan la nutrición de las neuronas y la eliminación de sus desechos, contribuyen a su defensa y actúan como guías para el desarrollo neuronal
- B. Transmiten los impulsos nerviosos en lugar de las neuronas
- C. Únicamente almacenan lípidos como reserva
- D. Producen las hormonas del sistema endocrino

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · células de la glía

Las células de la glía actúan como tejido de sostén, facilitan la nutrición de las neuronas y la eliminación de sus desechos metabólicos, contribuyen a su defensa y actúan como guías para el desarrollo neuronal.

### 28

De acuerdo con el libro de Biología, en los vertebrados y los invertebrados, ¿cómo se llama la agrupación de los cuerpos (somas) de las células nerviosas en el sistema nervioso periférico?

- A. Ganglios
- B. Sinapsis
- C. Dendritas
- D. Vainas de mielina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 758
**Subtema:** sistema nervioso · la neurona

En los vertebrados, al igual que en los invertebrados, los cuerpos o somas de las células nerviosas, con frecuencia, se encuentran agrupados en ganglios en el sistema nervioso periférico.

---

## Sub-lote 4 · Las señales y la división del sistema nervioso (figs. 32-3 y 32-4, p. 759)

### 29

De acuerdo con el libro de Biología, ¿en qué sentido llevan las señales las neuronas motoras y las sensoriales?

- A. Las motoras son eferentes (llevan señales del centro hacia la periferia); las sensoriales son aferentes (de la periferia hacia el centro)
- B. Las motoras son aferentes; las sensoriales, eferentes
- C. Ambas llevan señales únicamente hacia el centro
- D. Ambas llevan señales únicamente hacia la periferia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · tipos de neuronas

Las neuronas motoras son eferentes, de modo que llevan señales desde el centro "hacia la periferia", mientras que las neuronas sensoriales son aferentes; es decir, que llevan señales desde la periferia "hacia el centro".

> Par contrapuesto (reactivo 29): **motora = eferente** (del centro a la periferia) y
> **sensorial = aferente** (de la periferia al centro). Truco: afErente = Entra al
> centro; efErente = sale (Ejecuta) hacia la periferia.

### 30

De acuerdo con el libro de Biología, ¿cómo se producen las señales bioeléctricas de las neuronas?

- A. Por el movimiento de iones a través de la membrana plasmática, que genera corrientes eléctricas
- B. Por la liberación de transmisores químicos
- C. Por la contracción de los músculos
- D. Por el flujo de sangre a través de los capilares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · señales

Las señales bioeléctricas son producidas por el movimiento de iones a través de la membrana plasmática de la neurona. Este movimiento genera corrientes eléctricas que pueden variar en el tiempo y transmitirse por la superficie de la neurona.

### 31

De acuerdo con el libro de Biología, como hay un espacio o brecha entre una neurona y otra, ¿qué se libera al llegar al final de la célula para constituir una señal química para la neurona receptora?

- A. Moléculas denominadas transmisores nerviosos; así se realiza la sinapsis
- B. Iones que generan corrientes eléctricas
- C. Vainas de mielina
- D. Células de la glía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · señales

Al llegar al final de la célula se liberan moléculas, denominadas transmisores nerviosos, que constituyen una señal química para la neurona receptora. De esta manera, se realiza la sinapsis.

### 32

De acuerdo con el libro de Biología, ¿cómo se denomina el flujo por el cual se movilizan moléculas a lo largo del axón?

- A. Flujo axoplásmico
- B. Sinapsis química
- C. Impulso sensorial
- D. Corriente iónica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · la neurona

Dentro de la neurona se produce un flujo por el cual se movilizan moléculas a lo largo del axón, denominado flujo axoplásmico.

### 33

De acuerdo con el libro de Biología, ¿cuáles son las dos regiones principales del sistema nervioso de los vertebrados, y por qué está formada cada una?

- A. El sistema nervioso central (SNC), formado por el encéfalo y la médula espinal; y el periférico (SNP), formado por las vías sensitivas y motoras que se distribuyen por todo el cuerpo
- B. El central, formado por las vías sensitivas; el periférico, por el encéfalo
- C. Ambas formadas únicamente por la médula espinal
- D. El central, formado por los ganglios; el periférico, por el cerebro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · SNC y SNP

En el sistema nervioso de los vertebrados se pueden reconocer dos regiones principales: el sistema nervioso central (SNC), formado por el encéfalo y la médula espinal, y el sistema nervioso periférico (SNP), formado por las vías sensitivas y motoras que se distribuyen por todo el cuerpo.

### 34

De acuerdo con el libro de Biología, ¿qué función cumple la médula espinal?

- A. Actúa como enlace entre el encéfalo y el resto del cuerpo, transmitiendo información en ambos sentidos: a ella llegan nervios sensitivos y de ella parten nervios motores
- B. Únicamente produce hormonas
- C. Únicamente almacena calcio y fosfato
- D. No transmite ninguna información

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · médula espinal

La médula espinal actúa como un enlace entre el encéfalo y el resto del cuerpo, al transmitir información en ambos sentidos: hacia el encéfalo, ya que a ella llegan nervios sensitivos, y hacia los efectores del cuerpo, ya que de ella parten nervios motores.

### 35

De acuerdo con el libro de Biología, ¿qué importantes funciones controlan los circuitos nerviosos ubicados en la médula espinal?

- A. La locomoción, el funcionamiento de esfínteres, ciertos reflejos y otras funciones
- B. El lenguaje articulado y el pensamiento simbólico
- C. La producción de todas las hormonas del cuerpo
- D. La digestión y la absorción de los alimentos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · médula espinal

En la médula espinal también se ubican los circuitos nerviosos que controlan importantes funciones, como la locomoción, el funcionamiento de esfínteres, ciertos reflejos y otras funciones.

### 36

De acuerdo con el libro de Biología, en los seres humanos, ¿cómo es la médula espinal?

- A. Un cilindro delgado de unos 40 cm de largo, con un grosor aproximado al del dedo meñique
- B. Una esfera del tamaño de una naranja
- C. Un cilindro de unos 2 metros de largo
- D. Una lámina plana del tamaño de la palma de la mano

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 759
**Subtema:** sistema nervioso · médula espinal

En los seres humanos, la médula espinal es un cilindro delgado de unos 40 cm de largo con un grosor aproximado al del dedo meñique.

---

## Sub-lote 5 · El encéfalo y las raíces de la médula (figs. 32-3 y 32-4, p. 760)

### 37

De acuerdo con el libro de Biología, en la médula espinal, ¿de qué está compuesta principalmente la sustancia gris y de qué la sustancia blanca?

- A. La gris, de interneuronas, cuerpos celulares y dendritas de neuronas motoras y células de la glía; la blanca, de haces de axones mielínicos
- B. La gris, de haces de axones mielínicos; la blanca, de interneuronas
- C. Ambas están compuestas de tejido óseo
- D. Ambas están compuestas únicamente de células de la glía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · médula espinal

La sustancia gris de la médula consiste, fundamentalmente, en interneuronas, cuerpos celulares y dendritas de neuronas motoras y células de la glía. La sustancia blanca está formada por haces de axones mielínicos, que corren en sentido longitudinal a través de la médula espinal.

### 38

De acuerdo con el libro de Biología, ¿qué estructuras comprende el encéfalo?

- A. El cerebro, el diencéfalo, el cerebelo y el tronco cerebral (o tallo encefálico)
- B. Únicamente el cerebro
- C. La médula espinal y los ganglios
- D. El corazón y los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · el encéfalo

La médula espinal se continúa con el encéfalo, que comprende el cerebro, el diencéfalo, el cerebelo y el tronco cerebral (o tallo encefálico).

### 39

De acuerdo con el libro de Biología, ¿por qué estructuras está formado el tronco cerebral?

- A. Por el mesencéfalo, la protuberancia y el bulbo raquídeo
- B. Por el cerebro y el cerebelo
- C. Por la médula espinal y el diencéfalo
- D. Por los ganglios de la raíz dorsal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · el encéfalo

El tronco cerebral está formado por el mesencéfalo, la protuberancia y el bulbo raquídeo.

### 40

De acuerdo con el libro de Biología, ¿qué funciones reguladoras automáticas comandan los núcleos de la formación reticular, en el tronco cerebral?

- A. El control de la respiración, de la frecuencia cardíaca y de la presión sanguínea
- B. El lenguaje articulado y el pensamiento simbólico
- C. La digestión y la absorción de los alimentos
- D. El equilibrio y la coordinación motora

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · el encéfalo

Dentro del tronco cerebral se ubica la formación reticular, con la presencia de núcleos que comandan algunas funciones reguladoras automáticas importantes, como el control de la respiración, de la frecuencia cardíaca y de la presión sanguínea.

### 41

De acuerdo con el libro de Biología, ¿cómo se llama el sistema, ubicado en la formación reticular, de vital importancia para el nivel de excitación y alerta (llamado el "interruptor de consciencia")?

- A. El sistema activador reticular ascendente (SARA)
- B. El diencéfalo
- C. El cerebelo
- D. El bulbo raquídeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · el encéfalo

Dentro de la formación reticular se ubica el sistema activador reticular ascendente (SARA), de vital importancia en el mantenimiento del nivel general de excitación y alerta (con frecuencia se lo denomina el "interruptor de consciencia").

### 42

De acuerdo con el libro de Biología, el cerebelo, que se encuentra en la parte posterior y basal del encéfalo, ¿con qué se relaciona?

- A. Con el equilibrio y la coordinación motora
- B. Con la producción de hormonas
- C. Con la digestión de los alimentos
- D. Con el control de la respiración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · el encéfalo

El cerebelo, estructura que se encuentra en la parte posterior y basal del encéfalo, se relaciona con el equilibrio y la coordinación motora, entre sus muchas otras funciones.

### 43

De acuerdo con el libro de Biología, ¿en qué es una región fundamental el diencéfalo?

- A. En el procesamiento de información, la regulación de las funciones viscerales y endocrinas, y la regulación de los ritmos biológicos
- B. En la coordinación de los movimientos del vuelo
- C. En el almacenamiento de calcio y fosfato
- D. En la contracción de los músculos esqueléticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · el encéfalo

El diencéfalo es una región fundamental en lo que hace al procesamiento de información, la regulación de las funciones viscerales y endocrinas, y en la regulación de los ritmos biológicos.

### 44

De acuerdo con el libro de Biología, según la figura 32-4, ¿en qué dos haces de fibras se divide cada nervio espinal o raquídeo?

- A. La raíz dorsal sensitiva y la raíz ventral motora
- B. La raíz dorsal motora y la raíz ventral sensitiva
- C. La sustancia gris y la sustancia blanca
- D. La división simpática y la parasimpática

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · médula espinal

Cada nervio espinal o raquídeo se divide en dos haces de fibras, la raíz dorsal sensitiva y la raíz ventral motora, en la columna vertebral.

### 45

De acuerdo con el libro de Biología, según la figura 32-4, ¿dónde se encuentran los cuerpos celulares de las neuronas sensoriales?

- A. En los ganglios de la raíz dorsal
- B. En la propia médula espinal
- C. En el cerebelo
- D. En el tronco cerebral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · médula espinal

Los cuerpos celulares de las neuronas sensoriales se encuentran en los ganglios de la raíz dorsal.

### 46

De acuerdo con el libro de Biología, según la figura 32-3, ¿en qué dos partes se divide el sistema nervioso periférico?

- A. En el somático y el autónomo
- B. En el central y el periférico
- C. En la sustancia gris y la sustancia blanca
- D. En el simpático y el diencéfalo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · SNP

El sistema nervioso periférico se divide en somático y autónomo.

### 47

De acuerdo con el libro de Biología, según la figura 32-3, ¿en qué divisiones se subdivide el sistema nervioso autónomo?

- A. En la división simpática, la parasimpática y la entérica
- B. En la somática y la motora
- C. En la dorsal y la ventral
- D. En la sustancia gris y la sustancia blanca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 760
**Subtema:** sistema nervioso · SNP

El sistema nervioso autónomo se subdivide en la división simpática, la parasimpática y la entérica.

---

## Sub-lote 6 · El sistema nervioso periférico, los nervios y la protección del SNC (p. 761)

### 48

De acuerdo con el libro de Biología, ¿con qué está asociado el SNP somático (SNS)?

- A. Con la relación y la interacción del animal con el ambiente externo: recoge información sensitiva y envía información motora hacia los músculos esqueléticos
- B. Con la actividad visceral y la regulación homeostática del medio interno
- C. Con la producción de todas las hormonas del cuerpo
- D. Únicamente con la digestión de los alimentos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · SNP

El SNP somático (SNS) recoge información sensitiva a través de los receptores sensoriales y envía información motora hacia los músculos esqueléticos. Este subsistema está asociado con la relación y la interacción del animal con el ambiente externo.

### 49

De acuerdo con el libro de Biología, ¿con qué se relaciona fundamentalmente el SNP autónomo (SNA), y qué controla de forma involuntaria?

- A. Con la actividad visceral y la regulación homeostática del medio interno; controla el músculo liso, el músculo cardíaco y las glándulas
- B. Con los músculos esqueléticos voluntarios
- C. Con el procesamiento del lenguaje articulado
- D. Con el equilibrio y la coordinación motora

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · SNP

El SNP autónomo (SNA) se relaciona fundamentalmente con la actividad visceral y la regulación homeostática del medio interno. Este subsistema controla de forma involuntaria el músculo liso, el músculo cardíaco y las glándulas.

### 50

De acuerdo con el libro de Biología, en el sistema nervioso autónomo, ¿qué hacen la división simpática y la parasimpática?

- A. La simpática prepara el cuerpo para la acción; la parasimpática interviene en la restauración corporal luego de algún desequilibrio
- B. La simpática restaura el cuerpo; la parasimpática lo prepara para la acción
- C. Ambas preparan el cuerpo para la acción
- D. Ambas regulan únicamente la digestión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · SNP

La división simpática consiste en nervios cuya actividad prepara el cuerpo para la acción, y la división parasimpática, cuyos nervios intervienen en la restauración corporal luego de algún desequilibrio.

> Par contrapuesto (reactivo 50): la **simpática** prepara para la acción (acelerar);
> la **parasimpática** restaura tras el desequilibrio (calmar). Cada una es el
> distractor de la otra.

### 51

De acuerdo con el libro de Biología, ¿qué regula la división entérica del sistema nervioso autónomo?

- A. El funcionamiento autónomo del sistema digestivo
- B. La acción de los músculos esqueléticos
- C. La respiración y la frecuencia cardíaca
- D. El equilibrio y la coordinación motora

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · SNP

Una tercera división es la división entérica, que regula el funcionamiento autónomo del sistema digestivo.

### 52

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, ¿cuántos pares de nervios craneales hay y cómo se conectan?

- A. 13 pares (numerados del 0 al XII), que se conectan de modo directo con el encéfalo
- B. 31 pares, que se conectan con la médula espinal
- C. 10 pares, que se conectan con el cerebelo
- D. 3 pares, que se conectan con los ganglios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · nervios

Los nervios craneales se conectan de modo directo con el encéfalo. Son 13 pares (que se denominan numerándolos del 0 al XII) en la mayoría de los vertebrados, incluidos los seres humanos.

### 53

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, los nervios espinales o raquídeos se conectan con la médula espinal. ¿Cuántos pares hay en los humanos y de qué tipo son?

- A. 31 pares en los humanos; todos son mixtos (sensitivos y motores)
- B. 13 pares en los humanos; todos solo sensitivos
- C. 10 pares en los humanos; todos solo motores
- D. 42 pares en los humanos; todos solo sensitivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · nervios

Los nervios espinales o raquídeos se conectan con la médula espinal. En los humanos hay 31. Todos los pares de nervios espinales son mixtos (sensitivos y motores).

### 54

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, ¿cuántos pares de nervios espinales hay en las ranas, en los humanos y en el caballo?

- A. En las ranas 10, en los humanos 31 y en el caballo 42
- B. En las ranas 42, en los humanos 10 y en el caballo 31
- C. En los tres, 13 pares
- D. En las ranas 31, en los humanos 42 y en el caballo 10

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · nervios

El número de nervios espinales es variable en los vertebrados: en las ranas hay 10; en los humanos, 31; en el perro, 36; en el gato, 38; en el caballo, 42.

### 55

De acuerdo con el libro de Biología, en los vertebrados, ¿en qué se ve diferenciado el cerebro, y qué recubre a los hemisferios cerebrales?

- A. En dos hemisferios cerebrales (derecho e izquierdo); la sustancia gris los recubre (corteza cerebral) y la sustancia blanca es interna
- B. En un solo hemisferio, recubierto por la sustancia blanca
- C. En tres hemisferios, sin corteza cerebral
- D. En dos hemisferios, con la sustancia gris interna y la blanca externa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · el cerebro

En los vertebrados, el cerebro se ve claramente diferenciado en dos hemisferios cerebrales, derecho e izquierdo. En la mayoría de estos, la sustancia gris recubre a los hemisferios cerebrales (corteza cerebral) y la sustancia blanca es interna.

### 56

De acuerdo con el libro de Biología, además del cráneo y la columna vertebral, ¿qué capas de membranas protegen al sistema nervioso central?

- A. Las meninges
- B. La corteza cerebral
- C. Los ganglios de la raíz dorsal
- D. La vaina de mielina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · protección del SNC

El sistema nervioso central se encuentra protegido no solo por el cráneo y la columna vertebral, sino también por capas de membranas llamadas meninges.

### 57

De acuerdo con el libro de Biología, ¿qué líquido baña al encéfalo y la médula espinal, y qué función cumple además?

- A. El líquido cefalorraquídeo, que actúa también como un amortiguador de impactos
- B. El plasma sanguíneo, que solo transporta oxígeno
- C. La linfa, cuya única función es la defensa
- D. El líquido axoplásmico, que transmite los impulsos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 761
**Subtema:** sistema nervioso · protección del SNC

El sistema nervioso central está bañado por el líquido cefalorraquídeo. Este líquido rodea al encéfalo y la médula espinal. El líquido cefalorraquídeo actúa también como un amortiguador de impactos.

## Sub-lote 7 · El arco reflejo (figs. 32-5 y 32-6, p. 762)

### 58

De acuerdo con el libro de Biología, ¿a qué inervan las fibras motoras de cada par raquídeo y qué reciben las fibras sensitivas?

- A. Las fibras motoras inervan los músculos de un área particular del cuerpo, y las fibras sensitivas reciben señales de los receptores sensoriales de la misma área
- B. Las fibras motoras reciben señales de los receptores sensoriales, y las fibras sensitivas inervan los músculos de la misma área
- C. Ambas fibras inervan los músculos de un área particular del cuerpo
- D. Las fibras motoras inervan los receptores sensoriales, y las fibras sensitivas los músculos de otra área

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · nervios raquídeos

Las fibras motoras de cada par inervan los músculos de un área particular del cuerpo, y las fibras sensitivas reciben señales de los receptores sensoriales de la misma área.

### 59

De acuerdo con el libro de Biología, ¿qué provocan las lesiones en la médula espinal?

- A. Eliminan la sensibilidad e impiden el control motor de las áreas ubicadas en la zona inferior a la lesión
- B. Eliminan la sensibilidad e impiden el control motor de las áreas ubicadas en la zona superior a la lesión
- C. Solo afectan la sensibilidad, sin alterar el control motor de ningún área
- D. Solo impiden el control motor, sin alterar la sensibilidad de ningún área

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · lesiones medulares

Las lesiones en la médula espinal eliminan la sensibilidad e impiden el control motor de las áreas ubicadas en la zona inferior a la lesión.

### 60

De acuerdo con el libro de Biología, ¿por qué una lesión medular elimina la sensibilidad y el control motor por debajo de ella?

- A. Porque la información periférica no puede llegar al cerebro, donde es procesada, así como la señal cerebral no puede llegar hasta los efectores a través de la zona dañada
- B. Porque los efectores musculares y glandulares se destruyen en el momento de la lesión
- C. Porque los ganglios de la raíz dorsal dejan de producir neuronas sensoriales
- D. Porque el líquido cefalorraquídeo deja de amortiguar la médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · lesiones medulares

Las lesiones eliminan la sensibilidad e impiden el control motor de las áreas ubicadas en la zona inferior a la lesión, ya que la información periférica no puede llegar al cerebro, donde es procesada, así como la señal cerebral no puede llegar hasta los efectores a través de la zona dañada.

### 61

De acuerdo con el libro de Biología, ¿dónde se encuentran los cuerpos celulares de las neuronas sensoriales?

- A. En los ganglios de la raíz dorsal, por fuera de la médula espinal
- B. En la zona ventral de la sustancia gris de la médula espinal
- C. En la corteza cerebral de los hemisferios
- D. Dentro de los cordones de la sustancia blanca medular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · neuronas sensoriales

Los cuerpos celulares de las neuronas sensoriales se encuentran en los ganglios de la raíz dorsal, por fuera de la médula espinal.

### 62

De acuerdo con el libro de Biología, ¿cómo se denominan las neuronas sensoriales modificadas y qué conexión establecen?

- A. Se denominan unipolares y establecen una conexión entre la periferia (piel, órganos, entre otros) y la zona dorsal de la médula espinal
- B. Se denominan bipolares y establecen una conexión entre dos regiones del encéfalo
- C. Se denominan multipolares y conectan la zona ventral de la médula con los efectores musculares
- D. Se denominan interneuronas y conectan dos neuronas motoras entre sí

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · neuronas sensoriales

Estas neuronas modificadas se denominan unipolares y establecen una conexión entre la periferia (piel, órganos, entre otros), desde donde se transmite la información, y la zona dorsal de la médula espinal, hacia donde llega la información.

### 63

De acuerdo con el libro de Biología, en la sustancia gris medular, ¿con qué establecen sinapsis las neuronas sensoriales?

- A. Con interneuronas o con neuronas motoras, o bien con neuronas de proyección
- B. Únicamente con otras neuronas sensoriales
- C. Con las células de la glía y la vaina de mielina
- D. Directamente con los efectores musculares o glandulares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · sinapsis medular

Allí, en la sustancia gris medular, establecen sinapsis con interneuronas o con neuronas motoras, o bien con neuronas de proyección.

### 64

De acuerdo con el libro de Biología, ¿por dónde asciende la información hacia el encéfalo a través de las neuronas de proyección?

- A. Por cordones de la sustancia blanca medular
- B. Por los ganglios de la raíz dorsal
- C. Por las meninges y el líquido cefalorraquídeo
- D. Por la zona ventral de la sustancia gris

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · neuronas de proyección

Las neuronas de proyección son aquellas por donde asciende información hacia el encéfalo por cordones de la sustancia blanca medular.

### 65

De acuerdo con el libro de Biología, ¿por dónde se dirigen las órdenes motoras que provienen del encéfalo o se generan en la médula espinal, y hacia dónde?

- A. Por los axones de las neuronas motoras que emergen de la zona ventral de la sustancia gris, vía los nervios raquídeos, hacia los efectores musculares o glandulares
- B. Por los axones de las neuronas sensoriales que emergen de la zona dorsal, vía los ganglios de la raíz dorsal, hacia el encéfalo
- C. Por los cordones de la sustancia blanca medular, hacia la corteza cerebral
- D. Por las interneuronas de la sustancia gris, hacia los receptores sensoriales de la piel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · órdenes motoras

Las órdenes motoras que provienen del encéfalo o se generan en la propia médula espinal se dirigen por los axones de las neuronas motoras que emergen de la zona ventral de la sustancia gris, vía los nervios raquídeos, hacia los efectores musculares o glandulares.

> Confusión con el 64: por la **sustancia blanca** medular *asciende* la información sensitiva hacia el encéfalo; las **órdenes motoras** salen por los axones que emergen de la zona **ventral de la sustancia gris**, vía los nervios raquídeos.

### 66

De acuerdo con el libro de Biología, ¿cómo se llama el circuito nervioso simple, formado por los cuatro tipos de neuronas interconectadas, responsable de las respuestas rápidas y eficientes de los reflejos?

- A. El arco reflejo
- B. El flujo axoplásmico
- C. La formación reticular
- D. El sistema activador reticular ascendente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo

Los cuatro tipos de neuronas mencionadas con frecuencia están interconectados. Esto es fácilmente visible en un circuito nervioso simple llamado arco reflejo, responsable de las respuestas rápidas y eficientes de los reflejos.

### 67

De acuerdo con el libro de Biología, según el ejemplo del pinchazo al caminar, ¿qué ocurre?

- A. Automáticamente retiramos el pie sin necesidad de pensar en ello y, casi al mismo tiempo, el cerebro toma conciencia de lo que ha ocurrido
- B. El cerebro debe procesar el estímulo antes de que podamos retirar el pie
- C. El pie permanece inmóvil hasta que decidimos conscientemente retirarlo
- D. El estímulo se transmite únicamente al encéfalo, sin generar respuesta motora

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo

Si, por ejemplo, nos pinchamos al caminar, automáticamente retiramos el pie sin necesidad de pensar en ello. Casi al mismo tiempo, el cerebro toma conciencia de lo que ha ocurrido y adopta alguna medida o comportamiento posterior.

### 68

De acuerdo con el libro de Biología, según la figura 32-5, cuando reciben un estímulo como un pinchazo, ¿a qué estimulan las células receptoras sensoriales y adónde retransmite la señal?

- A. Estimulan a una neurona sensorial, que retransmite la señal a una interneurona situada dentro de una zona localizada del sistema nervioso central, con frecuencia la médula espinal
- B. Estimulan directamente a una neurona motora, que retransmite la señal al músculo
- C. Estimulan a una interneurona, que retransmite la señal a los ganglios de la raíz dorsal
- D. Estimulan a las neuronas de proyección, que llevan la señal directamente a los efectores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo

Cuando reciben un estímulo, como un pinchazo, las células receptoras sensoriales estimulan a una neurona sensorial, que retransmite la señal a una interneurona situada dentro de una zona localizada del sistema nervioso central, con frecuencia la médula espinal.

### 69

De acuerdo con el libro de Biología, según la figura 32-5, ¿en qué animales se encuentran los componentes básicos del arco reflejo?

- A. En todos los vertebrados
- B. Solo en los mamíferos
- C. Solo en los primates
- D. Únicamente en los cnidarios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo

Estos componentes básicos del arco reflejo se encuentran en todos los vertebrados.

### 70

De acuerdo con el libro de Biología, según la figura 32-5, ¿qué papel desempeñan los arcos reflejos?

- A. Un papel esencial en la regulación de muchos procesos internos y permiten respuestas casi instantáneas a numerosos estímulos ambientales
- B. Un papel secundario, limitado exclusivamente a la digestión
- C. Regulan únicamente la consciencia y los estados de ánimo
- D. Permiten respuestas lentas y deliberadas ante los estímulos ambientales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo

Los arcos reflejos desempeñan un papel esencial en la regulación de muchos procesos internos y permiten respuestas casi instantáneas a numerosos estímulos ambientales.

### 71

De acuerdo con el libro de Biología, según la figura 32-6 sobre el arco reflejo polisináptico, ¿cómo se conducen las señales generadas por las terminales nerviosas libres de la piel?

- A. De forma aferente a lo largo de la neurona sensorial hacia una interneurona ubicada en la sustancia gris de la médula espinal
- B. De forma eferente a lo largo de la neurona motora hacia la piel
- C. Directamente hacia los efectores musculares, sin pasar por la médula espinal
- D. A lo largo de la sustancia blanca hacia los ganglios de la raíz dorsal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo polisináptico

Las terminales nerviosas libres de la piel (receptores), cuando se estimulan de manera apropiada, generan señales nerviosas que son conducidas de forma aferente a lo largo de la neurona sensorial hacia una interneurona ubicada en la sustancia gris de la médula espinal.

### 72

De acuerdo con el libro de Biología, según la figura 32-6, ¿cómo se realiza la comunicación entre las neuronas mencionadas y entre la neurona motora y el músculo?

- A. A través de sinapsis
- B. A través de la vaina de mielina
- C. A través del líquido cefalorraquídeo
- D. A través de los cordones de la sustancia blanca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 762
**Subtema:** sistema nervioso · arco reflejo polisináptico

La comunicación entre las neuronas mencionadas y entre la neurona motora y el músculo se realizan a través de sinapsis.

## Sub-lote 8 · Las acciones reflejas y los subsistemas somático y autónomo (p. 763)

### 73

De acuerdo con el libro de Biología, ¿cómo son las acciones reflejas según sus características?

- A. Respuestas básicas, involuntarias, innatas (no aprendidas, con base genética), estereotipadas (siempre operan del mismo modo) y de alto valor adaptativo
- B. Respuestas complejas, voluntarias, aprendidas y variables según la situación
- C. Respuestas voluntarias, innatas y de bajo valor adaptativo
- D. Respuestas involuntarias, aprendidas por experiencia y de alto valor adaptativo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · acciones reflejas

Las acciones reflejas son respuestas básicas, involuntarias, innatas (no aprendidas, que tienen una base genética), estereotipadas (siempre operan del mismo modo) y de alto valor adaptativo.

### 74

De acuerdo con el libro de Biología, ¿por qué las acciones reflejas son de alto valor adaptativo?

- A. Porque les permiten a los animales dar respuestas rápidas y seguras a estímulos, por lo general nocivos, y así garantizar la protección y supervivencia del individuo
- B. Porque permiten al animal aprender de cada estímulo nuevo que recibe
- C. Porque le dan tiempo al cerebro para decidir conscientemente la respuesta
- D. Porque son respuestas lentas pero muy precisas ante estímulos placenteros

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · acciones reflejas

Son de alto valor adaptativo, ya que les permiten a los animales dar respuestas rápidas y seguras a estímulos, por lo general nocivos, y así garantizar la protección y supervivencia del individuo.

### 75

De acuerdo con el libro de Biología, ¿qué sistema lleva a cabo el control "voluntario" sobre los músculos esqueléticos?

- A. El sistema nervioso periférico somático (SNS)
- B. El sistema nervioso periférico autónomo (SNA)
- C. La división simpática del sistema autónomo
- D. La médula suprarrenal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · sistema somático

El sistema nervioso puede ejercer un control "voluntario" sobre los músculos esqueléticos, al comandar a voluntad —de forma consciente— sus movimientos. Este control es llevado a cabo por el sistema nervioso periférico somático (SNS).

### 76

De acuerdo con el libro de Biología, ¿qué está a cargo del sistema nervioso periférico autónomo (SNA) mediante el control "involuntario"?

- A. El músculo cardíaco, las glándulas y el músculo liso, como el que se encuentra en las paredes de los vasos sanguíneos y en los sistemas digestivo, respiratorio, excretor y reproductor
- B. Únicamente los músculos esqueléticos del cuerpo
- C. Solo el músculo cardíaco, sin incluir las glándulas ni el músculo liso
- D. Los receptores sensoriales de la piel y de los músculos esqueléticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · sistema autónomo

El control "involuntario" del músculo cardíaco, las glándulas y el músculo liso, como el que se encuentra en las paredes de los vasos sanguíneos y en los sistemas digestivo, respiratorio, excretor y reproductor, está a cargo del sistema nervioso periférico autónomo (SNA).

### 77

De acuerdo con el libro de Biología, ¿por qué la distinción entre "voluntario" e "involuntario" puede llevar fácilmente a equívocos?

- A. Porque los músculos esqueléticos del sistema somático también se mueven de manera involuntaria en una acción refleja, mientras que ciertos estados de ánimo o entrenamientos como el yoga pueden modificar de forma voluntaria las funciones reguladas por el sistema autónomo
- B. Porque el sistema somático solo controla funciones involuntarias y el autónomo solo funciones voluntarias
- C. Porque ambos sistemas controlan exclusivamente los músculos esqueléticos
- D. Porque las acciones reflejas son siempre voluntarias y conscientes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · voluntario e involuntario

La distinción entre "voluntario" e "involuntario" puede llevar fácilmente a equívocos: los músculos esqueléticos del sistema somático también se mueven de manera involuntaria en una acción refleja, mientras que ciertos estados de ánimo, o incluso entrenamientos como el yoga, pueden modificar de forma voluntaria las funciones reguladas por el sistema autónomo.

### 78

De acuerdo con el libro de Biología, ¿dónde están los cuerpos celulares de las neuronas motoras del sistema somático y cómo corren sus axones?

- A. Dentro del sistema nervioso central, y los largos axones corren sin interrupción hacia los músculos esqueléticos
- B. Dentro de los ganglios autónomos, y sus axones hacen sinapsis antes de llegar al músculo
- C. En los ganglios de la raíz dorsal, y sus axones corren hacia las vísceras
- D. Por fuera del sistema nervioso central, con axones cortos hacia las glándulas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · neuronas motoras somáticas

Los cuerpos celulares de las neuronas motoras del sistema somático están localizados dentro del sistema nervioso central y los largos axones corren sin interrupción hacia los músculos esqueléticos.

### 79

De acuerdo con el libro de Biología, a diferencia del somático, ¿qué hacen los axones del sistema nervioso autónomo antes de llegar a los efectores?

- A. Hacen sinapsis por fuera del sistema nervioso central, dentro de ganglios autónomos, con neuronas motoras que luego inervan los efectores
- B. Corren sin interrupción desde el sistema nervioso central hasta los efectores
- C. Terminan directamente en los receptores sensoriales de la piel
- D. Hacen sinapsis dentro de la médula espinal antes de salir del sistema nervioso central

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · ganglios autónomos

Por lo habitual, estos axones no realizan todo el recorrido hasta los órganos blanco o efectores, sino que hacen sinapsis por fuera del sistema nervioso central con neuronas motoras que luego inervan los efectores. Estas sinapsis ocurren dentro de ganglios autónomos.

### 80

De acuerdo con el libro de Biología, en el sistema nervioso autónomo, ¿cómo se llaman las neuronas cuyos axones emergen del SNC y terminan en los ganglios, y las que emergen de los ganglios y terminan en los efectores?

- A. Las primeras se llaman preganglionares y las segundas, posganglionares
- B. Las primeras se llaman posganglionares y las segundas, preganglionares
- C. Ambas se llaman preganglionares
- D. Las primeras se llaman aferentes y las segundas, eferentes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · pre y posganglionares

Las neuronas del sistema nervioso autónomo cuyos axones emergen del sistema nervioso central y terminan en los ganglios se llaman preganglionares, mientras que aquellas cuyos axones emergen de los ganglios y terminan en los efectores se denominan posganglionares.

### 81

De acuerdo con el libro de Biología, ¿qué diferencia importante existe entre el subsistema somático y el autónomo respecto a los efectores?

- A. El sistema somático puede estimular a un efector o no, aunque no puede inhibirlo; en contraste, el sistema autónomo es capaz de estimular o inhibir la actividad de un efector
- B. El sistema somático puede estimular e inhibir, mientras que el autónomo solo puede estimular
- C. Ninguno de los dos subsistemas puede inhibir a un efector
- D. Ambos pueden estimular, pero solo el somático puede inhibir a un efector

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · somático y autónomo

El sistema somático puede estimular a un efector o no, aunque no puede inhibirlo. En contraste, el sistema autónomo es capaz de estimular o inhibir la actividad de un efector.

### 82

De acuerdo con el libro de Biología, las neuronas del sistema nervioso autónomo que reciben información desde receptores que detectan cambios en las vísceras (como la presión y la temperatura sanguínea), ¿en qué intervienen?

- A. En los reflejos viscerales
- B. En los reflejos somáticos
- C. En las acciones voluntarias conscientes
- D. En la contracción de los músculos esqueléticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · reflejos viscerales

El sistema nervioso autónomo recibe información sensorial principalmente desde receptores sensoriales que detectan cambios en las vísceras y en el interior del cuerpo, como los cambios en la presión y en la temperatura sanguínea, entre otros. Estas neuronas intervienen en los reflejos viscerales.

## Sub-lote 9 · El sistema nervioso autónomo: simpático y parasimpático (fig. 32-7, p. 763)

### 83

De acuerdo con el libro de Biología, las divisiones simpática y parasimpática deben su nombre a una palabra griega. ¿Cuál es y qué significa?

- A. La palabra griega *pathos*, que significa sufrimiento o sensación
- B. La palabra griega *soma*, que significa cuerpo
- C. La palabra griega *autos*, que significa propio
- D. La palabra griega *neuron*, que significa nervio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · simpático y parasimpático

El sistema nervioso autónomo posee una división simpática y una división parasimpática; estas deben su nombre a la palabra griega *pathos*, que significa sufrimiento o sensación.

### 84

De acuerdo con el libro de Biología, ¿en qué se diferencian las divisiones simpática y parasimpática del sistema nervioso autónomo?

- A. En su anatomía, su función y los transmisores químicos involucrados en ellas
- B. Únicamente en el tamaño de sus neuronas
- C. Solo en su ubicación anatómica, pero no en su función
- D. En el número de ganglios, que es idéntico en ambas divisiones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · simpático y parasimpático

Ambas divisiones del sistema nervioso autónomo se diferencian por su anatomía, su función y por los transmisores químicos involucrados en ellas.

### 85

De acuerdo con el libro de Biología, ¿cuál es el principal neurotransmisor posganglionar del sistema simpático y cuál el del parasimpático?

- A. La noradrenalina en el simpático y la acetilcolina en el parasimpático
- B. La acetilcolina en el simpático y la noradrenalina en el parasimpático
- C. La adrenalina en ambas divisiones
- D. La dopamina en el simpático y la serotonina en el parasimpático

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · neurotransmisores

La noradrenalina es el principal neurotransmisor posganglionar del sistema simpático y la acetilcolina lo es del parasimpático.

> Fácil de invertir: **noradrenalina → simpático**, **acetilcolina → parasimpático**. No confundir la noradrenalina (neurotransmisor) con la adrenalina que secreta la médula suprarrenal (reactivo 93).

### 86

De acuerdo con el libro de Biología, ¿qué tipo de efecto tienen, por lo general, las divisiones simpática y parasimpática sobre la mayoría de los órganos internos?

- A. Un efecto antagónico, ya que los órganos están inervados por axones de ambos sistemas
- B. Un efecto idéntico y sumatorio en cada órgano
- C. Ningún efecto, porque cada división actúa sobre órganos distintos
- D. Un efecto exclusivamente estimulante en ambos casos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · efecto antagónico

Por lo general, las divisiones simpática y parasimpática tienen un efecto antagónico sobre la mayoría de los órganos internos, los cuales están inervados por axones de ambos sistemas.

### 87

De acuerdo con el libro de Biología, ¿de qué dependen, principalmente, las funciones viscerales y la regulación homeostática del cuerpo?

- A. De la cooperación de las divisiones del sistema autónomo y de la actividad de las glándulas endocrinas
- B. Únicamente de la división simpática del sistema autónomo
- C. Solo de los músculos esqueléticos del sistema somático
- D. De los reflejos medulares del sistema somático

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · homeostasis

Las funciones viscerales y la regulación homeostática del cuerpo dependen, principalmente, de la cooperación de estas divisiones del sistema autónomo y de la actividad de las glándulas endocrinas.

### 88

De acuerdo con el libro de Biología, ¿para qué prepara al cuerpo la división simpática y cómo suele llamarse esa respuesta?

- A. Prepara el cuerpo para la acción y es responsable de la respuesta a situaciones de estrés; suele decirse que se trata de una respuesta "de lucha o huida"
- B. Prepara el cuerpo para el reposo y la digestión; suele llamarse respuesta "de descanso"
- C. Prepara el cuerpo para el sueño; suele llamarse respuesta "de relajación"
- D. Prepara el cuerpo para la reproducción; suele llamarse respuesta "de cortejo"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · división simpática

Como consecuencia de su actividad, la división simpática prepara el cuerpo para la acción y es responsable de la respuesta del organismo a situaciones de estrés. Suele decirse que se trata de una respuesta "de lucha o huida".

### 89

De acuerdo con el libro de Biología, ¿cuáles son algunos de los aspectos físicos ligados al miedo, resultado del aumento en la descarga de noradrenalina del sistema simpático?

- A. El aumento de las frecuencias cardíaca y respiratoria y la contracción de los vasos sanguíneos de la piel y del tubo digestivo
- B. La disminución de la frecuencia cardíaca y la dilatación de los vasos sanguíneos
- C. El aumento del movimiento intestinal y la disminución de la frecuencia respiratoria
- D. La disminución de la presión sanguínea y la contracción de las pupilas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · respuesta de lucha o huida

Los aspectos físicos ligados al miedo, como el aumento de las frecuencias cardíaca y respiratoria y la contracción de los vasos sanguíneos de la piel y del tubo digestivo, son el resultado de un aumento en la descarga de noradrenalina por parte de las neuronas del sistema simpático.

### 90

De acuerdo con el libro de Biología, ¿qué efecto tiene la vasoconstricción provocada por el sistema simpático?

- A. Incrementa el retorno de la sangre al corazón, lo cual eleva la presión sanguínea y permite que más sangre sea enviada a los músculos, al corazón y al cerebro
- B. Disminuye el retorno de la sangre al corazón y baja la presión sanguínea
- C. Envía la mayor parte de la sangre al tubo digestivo y a la piel
- D. Detiene por completo la circulación de sangre hacia el cerebro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · respuesta de lucha o huida

La vasoconstricción mencionada incrementa el retorno de la sangre al corazón, lo cual eleva la presión sanguínea y permite que más sangre sea enviada a los músculos, al corazón y al cerebro.

### 91

De acuerdo con el libro de Biología, además del aumento cardíaco y respiratorio, ¿qué otras reacciones ligadas al miedo menciona el libro?

- A. La dilatación de las pupilas y la contracción de los músculos unidos a los folículos capilares de la piel
- B. La contracción de las pupilas y la relajación de los músculos de la piel
- C. El aumento del movimiento rítmico del intestino
- D. La secreción de saliva y el aumento del apetito

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · respuesta de lucha o huida

Otras reacciones ligadas al miedo son la dilatación de las pupilas y la contracción de los músculos unidos a los folículos capilares de la piel (es probable que esto sea un legado de nuestros antecesores con pelaje, que así erizados parecían de mayor tamaño y más feroces).

### 92

De acuerdo con el libro de Biología, ante la estimulación simpática, ¿qué ocurre con el movimiento del intestino y los esfínteres?

- A. El movimiento rítmico del intestino se detiene y los esfínteres se relajan, y estas reacciones inhiben las operaciones digestivas
- B. El movimiento del intestino se acelera y los esfínteres se contraen
- C. La digestión se estimula y aumenta la absorción de nutrientes
- D. Los esfínteres se contraen con fuerza para impedir toda evacuación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · respuesta de lucha o huida

El movimiento rítmico del intestino se detiene y los esfínteres se relajan. Estas reacciones inhiben las operaciones digestivas.

### 93

De acuerdo con el libro de Biología, frente a la estimulación simpática, ¿qué secreta la médula suprarrenal?

- A. Adrenalina
- B. Acetilcolina
- C. Insulina
- D. Melatonina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 763
**Subtema:** sistema nervioso · médula suprarrenal

Además, frente a la estimulación simpática, la médula suprarrenal secreta adrenalina.

---

**Reactivos en este archivo:** 93
