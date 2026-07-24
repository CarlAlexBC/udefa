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
los ganglios del sistema nervioso periférico.

**Pendiente:** el capítulo 32 está EN CURSO; sigue desde la página impresa 759 (hoja 805) en adelante (las neuronas sensoriales/motoras, la transmisión de señales, y la división en sistema nervioso central —SNC— y periférico —SNP—). De la materia de Biología siguen sin empezar los capítulos 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

**Reactivos en este archivo:** 28
