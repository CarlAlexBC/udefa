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
—somático y autónomo (simpático, parasimpático y entérico), fig. 32-3—.

**Pendiente:** el capítulo 32 está EN CURSO; sigue desde la página impresa 761 (hoja 807) en adelante (el cerebro y la corteza cerebral en detalle, y el resto del sistema nervioso). De la materia de Biología siguen sin empezar los capítulos 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

**Reactivos en este archivo:** 47
