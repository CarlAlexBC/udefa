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
secreción de adrenalina por la médula suprarrenal). De la **página 764** se cubre el
cierre de la respuesta simpática (la glucosa hepática como energía suplementaria para
los músculos y el "luchar o huir"), la división parasimpática (que regula las
actividades restauradoras del cuerpo) y la **figura 32-7** del sistema nervioso
autónomo: las dos neuronas articuladas por una sinapsis en los ganglios, el origen del
parasimpático (tronco cerebral y región sacra, con ganglios en los órganos blanco) y
del simpático (regiones torácica y lumbar, con fibras preganglionares cortas hasta la
cadena de ganglios simpáticos o el ganglio celíaco), la secreción de noradrenalina y
adrenalina por la médula suprarrenal, la doble inervación de los órganos internos, las
estructuras químicas de la noradrenalina y la acetilcolina (con la errata del pie b/c
advertida), y los efectos antagónicos sobre los órganos (pupila, corazón, bronquios,
estómago, salivación y vejiga). De la **página 765** se cubren los efectos de la
estimulación parasimpática, el que las divisiones simpática y parasimpática no siempre
son antagónicas (colaboran en la secreción salival y la respuesta sexual), la tercera
división —la entérica— (red neuronal con tantas neuronas como la médula espinal, en las
paredes del tubo digestivo, con sus plexos submucoso y muscular), y el arranque de "El
impulso nervioso: una corriente de información": la irritabilidad, los tejidos nervioso
y muscular excitables, el experimento de Luigi Galvani (1737-1798) y la "electricidad
animal", el potencial eléctrico y la diferencia de potencial (con los ejemplos de la
batería de 12 V y el tomacorriente de 110/220 V), la definición del impulso nervioso, y
la historia del modelo (el axón como cable en el siglo XIX y el calamar con sus axones
gigantes de hasta 1 mm en el siglo XX, fig. 32-8). De la **página 766** se cubre la
medición del potencial de membrana (fig. 32-9): los microelectrodos de a pares y el
osciloscopio (mV en función de ms), el ΔV = 0 con ambos electrodos fuera, el ΔV = −70 mV
con uno dentro del axón (interior negativo), la convención del medio extracelular = 0 V,
el nombre "potencial de membrana" y los valores de otras células (glóbulo rojo −9 mV,
célula vegetal −180 mV); y la distinción entre potencial de reposo (célula no estimulada)
y respuestas de potencial como el potencial de acción, las respuestas pasivas (soma y
dendritas, cortas distancias) y activas (axón, largas distancias), el valor umbral, la
respuesta de "todo o nada" (fig. 32-10, neurona sensorial de la piel de un gato frente a
la presión) y el potencial de acción como inversión instantánea del potencial de membrana.
De la **página 767** se cubren la frecuencia como única variación crítica (a más intenso
el estímulo, mayor la frecuencia de descarga, aunque los potenciales sean iguales), las
funciones del potencial de acción (transmisión rápida a grandes distancias; control de
respuestas efectoras: apertura de canales iónicos, contracción muscular y exocitosis),
el pie de la fig. 32-10 (el experimento clásico del gato con la sonda de punta roma: a
más profunda la presión, mayor la frecuencia con la misma amplitud, y el SNC detecta la
frecuencia asociada a la intensidad), y las bases iónicas de los potenciales de membrana
(membranas permeables a Na+, K+ y Cl–; la diferencia de potencial depende del gradiente
químico y de la permeabilidad; los canales iónicos y su probabilidad de estar abiertos;
los mecanismos que los abren; y el potencial de reposo por la distribución asimétrica de
iones fuera de su equilibrio químico). De la **página 768** se cubre el detalle iónico:
los gradientes del K+ (favorece su salida) y del Na+ (favorece su ingreso), el potencial
de reposo generado por la salida de K+ por los canales de fuga (único ion con canales
abiertos en reposo), la fig. 32-11 del axón en reposo (proteínas integrales —canales y
bombas—, los canales de fuga de K+, los canales de Na+ y K+ regulados por potencial
eléctrico cerrados por compuertas, la bomba de Na+/K+-ATPasa, y los aniones difusibles
HCO3–/Cl– y los no difusibles de gran tamaño); y el potencial de acción (fig. 32-12): el
umbral que abre los canales de Na+ sensibles al potencial, la despolarización hasta +40 mV
(0,5 ms), la inactivación del Na+, la apertura más lenta de los canales de K+, la
repolarización y la breve hiperpolarización, con el cierre final de los canales de K+.
De la **página 769** se cubre el cierre del mecanismo (el potencial de acción se debe a
rápidos movimientos de iones sin cambios sustanciales en sus concentraciones; el número
de iones que se mueven es pequeño por el corto tiempo de apertura), la bomba de
Na+/K+-ATPasa (transporte activo en contra del gradiente —Na+ afuera, K+ adentro— que
restablece el reposo), el arranque de la **propagación del impulso nervioso** (la
despolarización se autopropaga y autorrefuerza, como una llama en una mecha, mientras el
primer sector se repolariza, fig. 32-13), y el pie de la fig. 32-12 (las bombas
restablecen el reposo al finalizar, y el potencial umbral autoinducido que da origen al
potencial de acción).

**Pendiente:** el capítulo 32 está EN CURSO; sigue desde la página impresa 770 (hoja 816) en adelante (el resto de la propagación del impulso nervioso, la fig. 32-13, las barreras del SNC y lo que reste del capítulo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y las "Situaciones problemáticas"). De la materia de Biología siguen sin empezar los capítulos 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

## Sub-lote 10 · El parasimpático y la anatomía del SNA (fig. 32-7, p. 764)

### 94

De acuerdo con el libro de Biología, en la respuesta simpática, la liberación de grandes cantidades de glucosa del hígado en el torrente sanguíneo, ¿qué resulta ser?

- A. Una fuente de energía suplementaria para los músculos
- B. Una reserva de grasa que se almacena en el hígado
- C. Un desecho que el cuerpo elimina por la orina
- D. Una fuente de energía exclusiva para el cerebro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · respuesta simpática

La médula suprarrenal secreta adrenalina que, junto con otras hormonas, causa la liberación de grandes cantidades de glucosa del hígado en el torrente sanguíneo, que resulta una fuente de energía suplementaria para los músculos.

### 95

De acuerdo con el libro de Biología, como consecuencia de esta constelación de respuestas simpáticas, ¿para qué queda preparado el cuerpo como un todo?

- A. Para "luchar o huir" o, cuando menos en los seres humanos, para una acción que habría sido apropiada en alguna etapa temprana de nuestra evolución
- B. Para descansar y digerir tranquilamente una comida copiosa
- C. Para conciliar un sueño profundo y reparador
- D. Para reducir al mínimo su consumo de energía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · respuesta de lucha o huida

Como consecuencia de esta constelación de respuestas, el cuerpo como un todo está preparado para "luchar o huir" o, cuando menos en los seres humanos, para una acción que habría sido apropiada en alguna etapa temprana de nuestra evolución.

### 96

De acuerdo con el libro de Biología, a diferencia de la simpática, ¿qué regula de manera primaria la división parasimpática?

- A. Las actividades restauradoras del cuerpo; por ejemplo, es particularmente activa después de una comida copiosa
- B. Las respuestas de estrés y la preparación del cuerpo para la acción
- C. La contracción voluntaria de los músculos esqueléticos
- D. La liberación de glucosa hepática durante el ejercicio intenso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · división parasimpática

La división parasimpática, por el contrario, regula de manera primaria las actividades restauradoras del cuerpo; por ejemplo, es particularmente activa después de una comida copiosa.

### 97

De acuerdo con el libro de Biología, según la figura 32-7, ¿cómo están formadas ambas divisiones (simpática y parasimpática) del sistema nervioso autónomo?

- A. Por dos neuronas articuladas en los ganglios autónomos por una sinapsis
- B. Por una sola neurona que va del sistema nervioso central al efector sin sinapsis
- C. Por tres neuronas conectadas en serie dentro de la médula espinal
- D. Por dos neuronas que nunca hacen sinapsis entre sí

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · sistema autónomo

El sistema nervioso autónomo comprende la división simpática y parasimpática, ambas formadas por dos neuronas articuladas en los ganglios autónomos por una sinapsis.

### 98

De acuerdo con el libro de Biología, según la figura 32-7, ¿de dónde salen las fibras preganglionares del sistema nervioso parasimpático?

- A. Del tronco cerebral y de la región sacra de la médula espinal
- B. De las regiones torácica y lumbar de la médula espinal
- C. Únicamente de la corteza cerebral
- D. De los ganglios de la raíz dorsal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · fibras preganglionares

Las fibras preganglionares del sistema nervioso parasimpático salen del tronco cerebral y de la región sacra de la médula espinal.

### 99

De acuerdo con el libro de Biología, según la figura 32-7, las fibras preganglionares parasimpáticas establecen sinapsis con las neuronas posganglionares, ¿en qué ganglios?

- A. En los ganglios ubicados en los órganos blanco o cerca de ellos
- B. En la cadena de ganglios simpáticos
- C. En el ganglio celíaco exclusivamente
- D. En los ganglios de la raíz dorsal de la médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · ganglios parasimpáticos

Las fibras preganglionares del sistema nervioso parasimpático establecen sinapsis con las neuronas posganglionares de los ganglios ubicados en los órganos blanco o cerca de ellos.

### 100

De acuerdo con el libro de Biología, según la figura 32-7, ¿en qué regiones de la médula espinal se origina el sistema nervioso simpático?

- A. En las regiones torácica y lumbar
- B. En el tronco cerebral y la región sacra
- C. En la región cervical únicamente
- D. En los ganglios de la raíz dorsal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · origen del simpático

El sistema nervioso simpático se origina en las regiones torácica y lumbar de la médula espinal.

> Contraste fácil de invertir: el **parasimpático** sale del tronco cerebral y la región **sacra** (reactivo 98); el **simpático** se origina en las regiones **torácica y lumbar**.

### 101

De acuerdo con el libro de Biología, según la figura 32-7, ¿cómo son las fibras preganglionares de la división simpática y dónde hacen sinapsis?

- A. Son cortas y hacen sinapsis con las neuronas posganglionares en la cadena de ganglios simpáticos o en otros ganglios, como el ganglio celíaco
- B. Son largas y hacen sinapsis directamente dentro de los órganos blanco
- C. Son cortas y hacen sinapsis dentro del tronco cerebral
- D. Son largas y no establecen sinapsis en ningún ganglio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · ganglios simpáticos

Las fibras preganglionares de la división simpática son cortas y hacen sinapsis con las neuronas posganglionares en la cadena de ganglios simpáticos o en otros ganglios, como el ganglio celíaco.

### 102

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué sustancias también son secretadas por la médula de la glándula suprarrenal?

- A. La noradrenalina y la adrenalina
- B. La acetilcolina y la serotonina
- C. La insulina y el glucagón
- D. La dopamina y la melatonina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · médula suprarrenal

La noradrenalina y la adrenalina también son secretadas por la médula de la glándula suprarrenal.

### 103

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué tipo de inervación reciben la mayoría de los órganos internos y con qué fin?

- A. Doble inervación —simpática y parasimpática—, que en conjunto regula la homeostasis del medio interno y, en el caso del simpático, prepara al organismo para la acción
- B. Inervación única simpática, cuyo fin es solo preparar para la acción
- C. Inervación única parasimpática, cuyo fin es solo regular el reposo
- D. Inervación exclusivamente somática y voluntaria

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · doble inervación

La mayoría de los órganos internos reciben doble inervación —simpática y parasimpática—, que, en conjunto, actúan regulando la homeostasis del medio interno y, en el caso del simpático, preparando al organismo para la acción.

### 104

De acuerdo con el libro de Biología, en los paneles b) y c) de la figura 32-7 se muestran las estructuras químicas de dos neurotransmisores. ¿Cuáles son?

- A. La noradrenalina y la acetilcolina
- B. La adrenalina y la serotonina
- C. La dopamina y la acetilcolina
- D. La insulina y el glucagón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · neurotransmisores

Los paneles muestran la estructura química de la noradrenalina y la estructura química de la acetilcolina.

> Aviso al aspirante: en este pie de figura los rótulos **b)** y **c)** están **invertidos** respecto a los dibujos (el panel b) es en realidad la acetilcolina y el c), la noradrenalina). Por eso no hay reactivo que pida "cuál letra es cuál"; solo se pregunta qué dos moléculas se muestran.

## Sub-lote 11 · Los efectos antagónicos del SNA sobre los órganos (fig. 32-7, p. 764)

### 105

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué efecto tiene cada división sobre la pupila?

- A. El simpático dilata la pupila y el parasimpático (oculomotor) la contrae
- B. El simpático contrae la pupila y el parasimpático la dilata
- C. Ambas divisiones dilatan la pupila
- D. Ninguna de las dos divisiones actúa sobre la pupila

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · efecto sobre la pupila

En la figura 32-7, el simpático "dilata la pupila", mientras que el parasimpático, por el nervio oculomotor, "contrae la pupila".

### 106

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué efecto tiene cada división sobre el latido del corazón?

- A. El simpático acelera el latido cardíaco y refuerza la contracción, mientras que el parasimpático hace más lento el latido
- B. El simpático hace más lento el latido y el parasimpático lo acelera
- C. Ambas divisiones aceleran el latido cardíaco
- D. Ninguna de las dos divisiones actúa sobre el corazón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · efecto sobre el corazón

En la figura 32-7, el simpático "acelera el latido cardíaco, refuerza la contracción", mientras que el parasimpático "hace más lento el latido".

### 107

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué efecto tiene cada división sobre los bronquios?

- A. El simpático relaja los bronquios y el parasimpático los contrae
- B. El simpático contrae los bronquios y el parasimpático los relaja
- C. Ambas divisiones relajan los bronquios
- D. Ninguna de las dos divisiones actúa sobre los bronquios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · efecto sobre los bronquios

En la figura 32-7, el simpático "relaja los bronquios", mientras que el parasimpático "contrae los bronquios".

### 108

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué efecto tiene cada división sobre la actividad del estómago?

- A. El simpático inhibe la actividad y el parasimpático la estimula
- B. El simpático estimula la actividad y el parasimpático la inhibe
- C. Ambas divisiones inhiben la actividad del estómago
- D. Ninguna de las dos divisiones actúa sobre el estómago

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · efecto sobre el estómago

En la figura 32-7, sobre el estómago el simpático "inhibe la actividad", mientras que el parasimpático "estimula la actividad".

### 109

De acuerdo con el libro de Biología, según la figura 32-7, ¿cómo estimula cada división la salivación?

- A. El parasimpático (nervio facial) la estimula fuertemente y el simpático la estimula débilmente
- B. El parasimpático la estimula débilmente y el simpático la estimula fuertemente
- C. Solo el simpático estimula la salivación
- D. Ninguna de las dos divisiones actúa sobre las glándulas salivales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · efecto sobre la salivación

En la figura 32-7, el parasimpático, por el nervio facial, "estimula la salivación (fuertemente)", mientras que el simpático "estimula la salivación (débilmente)".

### 110

De acuerdo con el libro de Biología, según la figura 32-7, ¿qué efecto tiene cada división sobre la vejiga?

- A. El simpático relaja la vejiga y el parasimpático (nervio pélvico) la contrae
- B. El simpático contrae la vejiga y el parasimpático la relaja
- C. Ambas divisiones contraen la vejiga
- D. Ninguna de las dos divisiones actúa sobre la vejiga

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 764
**Subtema:** sistema nervioso · efecto sobre la vejiga

En la figura 32-7, el simpático "relaja la vejiga", mientras que el parasimpático, por el nervio pélvico, "contrae la vejiga".

## Sub-lote 12 · El parasimpático y la división entérica (p. 765)

### 111

De acuerdo con el libro de Biología, ¿qué efectos produce la estimulación parasimpática?

- A. Disminuye la frecuencia cardíaca, incrementa los movimientos del músculo liso de la pared intestinal y estimula la secreción de las glándulas salivales y las glándulas digestivas del estómago
- B. Aumenta la frecuencia cardíaca, detiene los movimientos del intestino e inhibe la secreción salival
- C. Disminuye la frecuencia cardíaca, detiene los movimientos intestinales y dilata las pupilas
- D. Aumenta la frecuencia respiratoria y provoca la vasoconstricción de la piel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · estimulación parasimpática

La estimulación parasimpática disminuye la frecuencia cardíaca, incrementa los movimientos del músculo liso de la pared intestinal y estimula la secreción de las glándulas salivales y las glándulas digestivas del estómago.

### 112

De acuerdo con el libro de Biología, las funciones de las divisiones simpática y parasimpática no siempre son antagónicas. ¿En qué respuestas colaboran ambos sistemas?

- A. En la secreción salival y la respuesta sexual en ambos sexos
- B. En la contracción de los músculos esqueléticos voluntarios
- C. En la respuesta de lucha o huida, exclusivamente
- D. En la contracción de la pupila y la aceleración del latido cardíaco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · simpático y parasimpático

Las funciones de las divisiones simpática y parasimpática no siempre son antagónicas. Ambos sistemas colaboran en algunas respuestas, como la secreción salival y la respuesta sexual en ambos sexos.

### 113

De acuerdo con el libro de Biología, algunos autores consideran una tercera división en el sistema nervioso autónomo. ¿Cuál es?

- A. La división entérica
- B. La división somática
- C. La división central
- D. La división refleja

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · división entérica

Algunos autores consideran una tercera división en el sistema nervioso autónomo: la división entérica.

### 114

De acuerdo con el libro de Biología, ¿cómo describe el libro la división entérica y dónde se encuentra?

- A. Es una importante red neuronal (con un número de neuronas igual al de la médula espinal), que se encuentra en las paredes del tubo digestivo
- B. Es un pequeño ganglio ubicado en el tronco cerebral
- C. Es una red de vasos sanguíneos que rodea el estómago
- D. Es un conjunto de glándulas ubicadas en la médula suprarrenal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · división entérica

La división entérica es una importante red neuronal (con un número de neuronas igual al de la médula espinal), que se encuentra en las paredes del tubo digestivo.

### 115

De acuerdo con el libro de Biología, ¿en qué dos plexos se subdivide la división entérica y qué controla cada uno?

- A. En un plexo submucoso que regula la secreción y la absorción en las paredes digestivas, y en un plexo muscular que controla los movimientos del tubo digestivo
- B. En un plexo submucoso que controla los movimientos, y en un plexo muscular que regula la secreción y la absorción
- C. En un plexo sensorial y un plexo motor, ambos ubicados en la médula espinal
- D. En un plexo simpático y un plexo parasimpático, ubicados en las glándulas salivales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · división entérica

La división entérica se subdivide en un plexo submucoso que regula la secreción y la absorción en las paredes digestivas, y en un plexo muscular que controla los movimientos del tubo digestivo.

> Fácil de invertir: **submucoso → secreción y absorción**; **muscular → movimientos** del tubo digestivo.

### 116

De acuerdo con el libro de Biología, ¿qué asegura el perfecto estado funcional de la división entérica?

- A. El desarrollo correcto de los procesos digestivos
- B. La regulación de la frecuencia cardíaca
- C. La respuesta de lucha o huida
- D. La contracción de los músculos esqueléticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · división entérica

La división entérica está modulada por el resto del sistema nervioso autónomo y el perfecto estado funcional de esta división asegura el desarrollo correcto de los procesos digestivos.

## Sub-lote 13 · El impulso nervioso: irritabilidad, Galvani y el potencial eléctrico (fig. 32-8, p. 765)

### 117

De acuerdo con el libro de Biología, ¿qué es la irritabilidad, una de las características de los seres vivos?

- A. La capacidad para responder a los estímulos
- B. La capacidad para reproducirse
- C. La capacidad para almacenar energía
- D. La capacidad para desplazarse de un lugar a otro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · irritabilidad

Una de las características de los seres vivos es la irritabilidad, es decir, la capacidad para responder a los estímulos.

### 118

De acuerdo con el libro de Biología, ¿qué tejidos poseen la propiedad de ser excitables, y de qué depende su excitabilidad?

- A. Los tejidos nervioso y muscular; su excitabilidad depende de los cambios eléctricos que se producen a través de su membrana plasmática
- B. Solo el tejido nervioso; su excitabilidad depende del número de neuronas
- C. Los tejidos óseo y conectivo; su excitabilidad depende de su rigidez
- D. Solo el tejido muscular; su excitabilidad depende de la cantidad de sangre que recibe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · tejidos excitables

Los tejidos nervioso y muscular poseen esta propiedad, y su excitabilidad depende de los cambios eléctricos que se producen a través de su membrana plasmática.

### 119

De acuerdo con el libro de Biología, hace más de 200 años, ¿qué observó Luigi Galvani (1737-1798) y cómo llamó al fenómeno?

- A. Observó que el paso de una corriente eléctrica a lo largo del nervio de una pata de rana provocaba la contracción del músculo, y llamó a este fenómeno "electricidad animal"
- B. Observó que la luz provocaba la contracción del músculo de la rana, y lo llamó "fototropismo"
- C. Observó que el calor aceleraba el latido cardíaco de la rana, y lo llamó "electricidad animal"
- D. Observó que la corriente eléctrica detenía el latido de la rana, y lo llamó "bioelectricidad"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · Galvani

Hace más de 200 años, Luigi Galvani (1737-1798) observó que el paso de una corriente eléctrica a lo largo del nervio de una pata de rana provocaba la contracción del músculo; llamó a este fenómeno "electricidad animal".

### 120

De acuerdo con el libro de Biología, ¿cómo se denomina la capacidad de una carga eléctrica en el espacio para desplazarse y realizar trabajo eléctrico?

- A. Potencial eléctrico
- B. Corriente eléctrica
- C. Impulso nervioso
- D. Resistencia eléctrica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · potencial eléctrico

Una carga eléctrica en el espacio posee cierta capacidad para desplazarse y realizar trabajo eléctrico. Esta capacidad se denomina potencial eléctrico.

### 121

De acuerdo con el libro de Biología, según sus ejemplos, ¿qué diferencia de potencial eléctrico se registra entre los bornes de una batería de automóvil y entre los polos de un tomacorriente?

- A. 12 voltios en la batería de automóvil, y 110 o 220 V en el tomacorriente
- B. 220 voltios en la batería, y 12 V en el tomacorriente
- C. 110 voltios en ambos casos
- D. 12 voltios en ambos casos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · diferencia de potencial

Entre los bornes de una batería de automóvil se registra una diferencia de potencial eléctrico de 12 voltios (V) y entre los polos de un tomacorriente, esa diferencia puede ser de 110 o 220 V.

### 122

De acuerdo con el libro de Biología, ¿qué es la diferencia de potencial respecto de las cargas eléctricas?

- A. El "motor" que hace mover las cargas eléctricas entre dos puntos y produce una corriente eléctrica
- B. Una barrera que impide el movimiento de las cargas eléctricas
- C. La cantidad total de carga almacenada en un punto
- D. La resistencia que ofrece un cable al paso de la corriente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · diferencia de potencial

La diferencia de potencial es el "motor" que hace mover las cargas eléctricas entre dos puntos y produce una corriente eléctrica.

### 123

De acuerdo con el libro de Biología, la diferencia de potencial eléctrico a través de la membrana plasmática de neuronas y fibras musculares puede permanecer constante o variar y conducirse de un lado a otro de las células excitables. ¿Cómo se denomina este proceso?

- A. Impulso nervioso
- B. Trabajo eléctrico
- C. Electricidad animal
- D. Irritabilidad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · impulso nervioso

Esta diferencia de potencial puede permanecer constante en el tiempo o variar y conducirse de un lado a otro de las células excitables. Este proceso se denomina impulso nervioso.

### 124

De acuerdo con el libro de Biología, ¿qué se consideraba, hacia finales del siglo XIX, sobre la naturaleza del impulso nervioso?

- A. Que era una corriente eléctrica que discurría a lo largo de un axón, del mismo modo que los electrones fluyen a lo largo de un cable; sin embargo, este modelo no resistió un examen crítico
- B. Que era una señal química transmitida por las hormonas de la sangre
- C. Que era un flujo de agua a través de la membrana del axón
- D. Que era una vibración mecánica que recorría el axón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · impulso nervioso

Hacia finales del siglo XIX, se consideraba que el impulso nervioso era una corriente eléctrica —o sea, un flujo de cargas eléctricas impulsado por un gradiente de potencial eléctrico— que discurría a lo largo de un axón, del mismo modo que los electrones fluyen a lo largo de un cable. Sin embargo, este modelo no resistió un examen crítico.

### 125

De acuerdo con el libro de Biología, ¿cuál fue el primer organismo utilizado como modelo en los estudios de las señales eléctricas del sistema nervioso, y por qué se eligió?

- A. El calamar, elegido por sus neuronas motoras de grandes axones
- B. La rana, elegida por sus patas musculosas
- C. El ratón, elegido por su encéfalo pequeño
- D. La abeja, elegida por sus 7000 neuronas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · el calamar

El primer organismo utilizado como modelo en los estudios de las señales eléctricas en el sistema nervioso fue el calamar, elegido por sus neuronas motoras de grandes axones.

### 126

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, según la figura 32-8, ¿qué diámetro alcanzan los axones gigantes del calamar y para qué se usaron?

- A. Un diámetro de hasta 1 mm, y se usaron en todos los estudios tempranos de neurofisiología
- B. Un diámetro de hasta 1 cm, y se usaron para estudiar el sistema endocrino
- C. Un diámetro de hasta 0,1 mm, y se usaron para estudiar los músculos esqueléticos
- D. Un diámetro de hasta 10 mm, y se usaron para estudiar la médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · el calamar

Los nervios estrellados contienen los axones gigantes, de un diámetro hasta 1 mm, que se usaron en todos los estudios tempranos de neurofisiología.

### 127

De acuerdo con el libro de Biología, según la figura 32-8, ¿qué músculos inervan los axones gigantes del calamar y qué producen sus contracciones?

- A. Inervan los músculos de la pared del manto, cuyas contracciones poderosas producen la expulsión rápida del agua de la cavidad del manto, lo que da la respuesta de escape
- B. Inervan los músculos del corazón, cuyas contracciones producen el latido cardíaco
- C. Inervan los músculos de los tentáculos, cuyas contracciones producen la captura de presas
- D. Inervan los músculos del ojo, cuyas contracciones producen el enfoque visual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 765
**Subtema:** sistema nervioso · el calamar

Los axones gigantes inervan los músculos de la pared del manto; las contracciones poderosas de estos músculos dan como resultado la expulsión rápida del agua de la cavidad del manto, lo que produce la respuesta de escape.

## Sub-lote 14 · El potencial de membrana y su medición (fig. 32-9, p. 766)

### 128

De acuerdo con el libro de Biología, ¿cómo se hacen las mediciones de diferencia de potencial eléctrico entre el interior y el exterior de un axón?

- A. Con microelectrodos lo suficientemente pequeños como para penetrar en una célula viva sin dañarla de manera grave, utilizados de a pares y conectados a un voltímetro muy sensible (osciloscopio)
- B. Con electrodos grandes colocados sobre la piel del animal
- C. Con un microscopio óptico que observa directamente el flujo de iones
- D. Con una jeringa que extrae el líquido del interior del axón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · microelectrodos

Las mediciones de diferencia de potencial eléctrico entre el interior y el exterior de un axón se hacen con microelectrodos lo suficientemente pequeños como para penetrar en una célula viva, sin dañarla de manera grave. Los microelectrodos se utilizan de a pares y están conectados con un voltímetro muy sensible (osciloscopio).

### 129

De acuerdo con el libro de Biología, el osciloscopio mide la diferencia de potencial eléctrico en función del tiempo. ¿En qué órdenes de magnitud?

- A. La diferencia de potencial en el orden de los milivoltios (mV) y el tiempo en el orden de los milisegundos (ms)
- B. La diferencia de potencial en voltios (V) y el tiempo en segundos (s)
- C. La diferencia de potencial en microvoltios (µV) y el tiempo en minutos
- D. La diferencia de potencial en el orden de los milisegundos y el tiempo en milivoltios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · osciloscopio

El osciloscopio mide la diferencia de potencial eléctrico (en el orden de los milivoltios [mV]) en función del tiempo (en el orden de los milisegundos [ms]).

### 130

De acuerdo con el libro de Biología, según la figura 32-9a, cuando ambos microelectrodos están fuera de la neurona, ¿qué diferencia de potencial se registra?

- A. No se registra diferencia de potencial eléctrico (ΔV = 0 mV)
- B. Se registra una diferencia de –70 mV
- C. Se registra una diferencia de +70 mV
- D. Se registra una inversión instantánea del potencial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de membrana

Cuando ambos microelectrodos están fuera de la neurona, no se registra diferencia de potencial eléctrico (ΔV = 0 mV).

### 131

De acuerdo con el libro de Biología, cuando uno de los microelectrodos se introduce en el interior del axón, ¿qué diferencia de potencial se observa entre el medio intracelular y el extracelular?

- A. Una diferencia de alrededor de 70 mV, con el interior negativo respecto del exterior (ΔV = –70 mV)
- B. Una diferencia de alrededor de 70 mV, con el interior positivo respecto del exterior (ΔV = +70 mV)
- C. Ninguna diferencia de potencial (ΔV = 0 mV)
- D. Una diferencia de alrededor de 180 mV, con el interior positivo respecto del exterior

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de membrana en reposo

Cuando uno de los microelectrodos se introduce en el interior del axón, se observa que existe una diferencia de potencial eléctrico entre el medio intracelular y el extracelular de alrededor de 70 mV, donde en el interior predominan cargas negativas: es negativo respecto del exterior (ΔV = –70 mV).

### 132

De acuerdo con el libro de Biología, por convención, ¿qué potencial eléctrico se le asigna al medio extracelular?

- A. Un potencial eléctrico igual a 0 V
- B. Un potencial eléctrico igual a –70 mV
- C. Un potencial eléctrico igual a +70 mV
- D. Un potencial eléctrico igual a –180 mV

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · convención

Por convención, se considera al medio extracelular con un potencial eléctrico = 0 V.

### 133

De acuerdo con el libro de Biología, ¿cómo se denomina la diferencia de potencial eléctrico entre el medio intracelular y el extracelular de la neurona?

- A. Potencial de membrana
- B. Potencial de acción
- C. Electricidad animal
- D. Corriente eléctrica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de membrana

Esta diferencia de potencial se denomina potencial de membrana.

### 134

De acuerdo con el libro de Biología, el mismo experimento realizado en un glóbulo rojo y en una célula vegetal, ¿qué valores de potencial arroja?

- A. –9 mV en el glóbulo rojo y –180 mV en la célula vegetal, y se mantienen casi constantes durante la vida de estas células
- B. –70 mV en ambas células
- C. –180 mV en el glóbulo rojo y –9 mV en la célula vegetal
- D. 0 mV en ambas células

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de membrana

El mismo experimento realizado en un glóbulo rojo arroja un valor de –9 mV y en una célula vegetal uno de –180 mV, estos se mantienen casi constantes durante la vida de estas células.

> Tres valores de potencial de membrana que conviene no mezclar: **neurona/axón −70 mV**, **glóbulo rojo −9 mV**, **célula vegetal −180 mV**.

## Sub-lote 15 · Potencial de reposo, potencial de acción y "todo o nada" (figs. 32-9 y 32-10, p. 766)

### 135

De acuerdo con el libro de Biología, ¿cómo se denomina el potencial de membrana de las células excitables cuando no están estimuladas y cuando responden a estímulos?

- A. Cuando no están estimuladas se encuentran en potencial de reposo; en respuesta a estímulos presentan respuestas de potencial, como el potencial de acción, que son cambios transitorios
- B. Cuando no están estimuladas están en potencial de acción; en respuesta a estímulos, en potencial de reposo
- C. En ambos casos se denomina potencial de reposo
- D. En ambos casos se denomina potencial de acción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de reposo

Es conveniente usar nombres distintos para el potencial de membrana en las células excitables: cuando no están estimuladas se encuentran en potencial de reposo, y en respuesta a estímulos presentan respuestas de potencial como el potencial de acción, que son cambios transitorios.

### 136

De acuerdo con el libro de Biología, los cambios en el potencial de membrana se subdividen en respuestas pasivas y activas. ¿Dónde se desarrolla cada una y qué distancia recorre?

- A. Las pasivas se desarrollan en el soma y las dendritas y se desplazan a muy cortas distancias; las activas se generan en el axón y pueden desplazarse largas distancias
- B. Las pasivas se generan en el axón y recorren largas distancias; las activas, en el soma y las dendritas, cortas distancias
- C. Ambas se generan en el axón y recorren largas distancias
- D. Ambas se desarrollan en las dendritas y recorren cortas distancias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · respuestas pasivas y activas

Las respuestas pasivas se desarrollan en el soma y las dendritas de las neuronas, y se desplazan a muy cortas distancias; las activas se generan en el axón y pueden desplazarse largas distancias. Se denominan potenciales de acción.

### 137

De acuerdo con el libro de Biología, los potenciales de acción registrados para una misma neurona, ¿cómo son entre sí?

- A. Casi siempre son iguales
- B. Siempre son diferentes y variables
- C. Aumentan de tamaño con cada estímulo
- D. Disminuyen de tamaño con el paso del tiempo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potenciales de acción

Los potenciales de acción registrados para una misma neurona casi siempre son iguales.

### 138

De acuerdo con el libro de Biología, según la figura 32-10, ¿de qué se muestra la respuesta y frente a qué estímulo?

- A. La respuesta de una sola neurona sensorial de la piel de un gato frente a la presión
- B. La respuesta de una neurona motora de la médula de un gato frente a la luz
- C. La respuesta de un axón gigante de calamar frente al calor
- D. La respuesta de la glándula suprarrenal frente al estrés

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de acción

En la figura 32-10 se muestra la respuesta de una sola neurona sensorial de la piel de un gato frente a la presión.

### 139

De acuerdo con el libro de Biología, frente a un estímulo, ¿qué condición debe cumplir su intensidad para que se genere un potencial de acción en el axón?

- A. Que sea suficiente, es decir, que supere un valor umbral
- B. Que sea muy débil, por debajo del valor umbral
- C. Que se mantenga durante varios minutos sin interrupción
- D. Que provenga siempre del soma y las dendritas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · valor umbral

Frente a un estímulo, si su intensidad es suficiente (supera un valor umbral), se genera un potencial de acción en el axón.

### 140

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, los impulsos generados en el axón al superarse el umbral, ¿de qué tamaño son y cómo se llama esa respuesta?

- A. Todos son del mismo tamaño; es la respuesta de "todo o nada"
- B. Cada uno es de distinto tamaño según la intensidad del estímulo; es la respuesta "graduada"
- C. Aumentan de tamaño con estímulos más fuertes; es la respuesta "proporcional"
- D. Son cada vez más pequeños; es la respuesta "decreciente"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · todo o nada

Todos los impulsos así generados son del mismo tamaño (respuesta de "todo o nada").

### 141

De acuerdo con el libro de Biología, según la figura 32-9b, cuando un microelectrodo se coloca dentro de la membrana, ¿qué muestra el osciloscopio y cómo se llama esa diferencia?

- A. Que el potencial eléctrico en el interior de la neurona es menor que en el exterior, con una diferencia cercana a los 70 milivoltios: es el potencial de membrana en reposo
- B. Que el interior es mayor que el exterior, con una diferencia de 180 mV
- C. Que no hay ninguna diferencia de potencial entre el interior y el exterior
- D. Una inversión instantánea del potencial, llamada potencial de acción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de membrana en reposo

Cuando un microelectrodo se coloca dentro de la membrana, el osciloscopio muestra que el potencial eléctrico en el interior de la neurona es menor que en el exterior, y que la diferencia entre los dos es cercana a los 70 milivoltios. Este es el potencial de membrana en reposo.

### 142

De acuerdo con el libro de Biología, según la figura 32-9c, cuando el axón es estimulado y el impulso alcanza los microelectrodos, ¿qué muestra el osciloscopio y cómo se conoce?

- A. Una inversión instantánea del potencial de membrana, que se conoce como potencial de acción
- B. Una diferencia de potencial constante de 0 mV
- C. Un potencial de reposo estable de –70 mV
- D. La desaparición permanente del potencial de membrana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 766
**Subtema:** sistema nervioso · potencial de acción

Cuando el axón es estimulado de manera apropiada, la excitación nerviosa se propaga a lo largo de él como un impulso nervioso. Cuando el impulso alcanza la región en la cual se encuentran los microelectrodos, el osciloscopio muestra una inversión instantánea del potencial de membrana, que se conoce como potencial de acción.

> No confundir con el reposo (reactivo 141): el **potencial de reposo** es la diferencia estable de −70 mV de la célula no estimulada; el **potencial de acción** es la inversión instantánea y transitoria que aparece cuando el impulso llega.

## Sub-lote 16 · La frecuencia del potencial de acción y sus funciones (fig. 32-10, p. 767)

### 143

De acuerdo con el libro de Biología, ¿cuál es la única variación —y crítica— en la respuesta de una neurona ante estímulos de distinta intensidad?

- A. La frecuencia; es decir, el número de impulsos nerviosos que se producen en un tiempo determinado
- B. La amplitud de cada potencial de acción
- C. La duración de cada potencial de acción
- D. El tamaño del axón que conduce el impulso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · frecuencia

La única variación —y es una variación crítica— es la frecuencia; es decir, el número de impulsos nerviosos que se producen en un tiempo determinado.

### 144

De acuerdo con el libro de Biología, ¿qué ocurre con la descarga de potenciales de acción cuanto más intenso es el estímulo?

- A. Mayor es la frecuencia de descarga de potenciales de acción de la neurona, aunque estos potenciales sean iguales entre sí
- B. Mayor es la amplitud de cada potencial de acción, aunque su frecuencia no cambie
- C. Menor es la frecuencia de descarga de potenciales de acción
- D. Los potenciales de acción desaparecen por completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · frecuencia

Cuanto más intenso es el estímulo, mayor es la frecuencia de descarga de potenciales de acción de la neurona, aunque estos potenciales sean iguales entre sí.

> Enlaza con el "todo o nada" (reactivo 140): como la amplitud es siempre la misma, la neurona codifica la intensidad del estímulo solo por la **frecuencia** de sus potenciales de acción, no por su tamaño.

### 145

De acuerdo con el libro de Biología, entre las funciones de importancia del potencial de acción en los tejidos excitables, ¿cuál se menciona respecto a la transmisión de información?

- A. La transmisión rápida de la información a lo largo de grandes distancias en el sistema nervioso y las fibras musculares
- B. La transmisión lenta de la información a cortas distancias en el soma y las dendritas
- C. El almacenamiento permanente de la información dentro de la membrana
- D. La transmisión de información únicamente por medio de hormonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · funciones del potencial de acción

Entre las funciones de importancia del potencial de acción está la transmisión rápida de la información a lo largo de grandes distancias en el sistema nervioso y las fibras musculares.

### 146

De acuerdo con el libro de Biología, entre las funciones del potencial de acción, ¿qué comprende el control de respuestas efectoras?

- A. La activación de canales iónicos sensibles a cambios en el potencial eléctrico, la contracción muscular y la exocitosis
- B. La síntesis de la vaina de mielina y la nutrición de las neuronas
- C. El almacenamiento de glucosa en el hígado
- D. La producción del líquido cefalorraquídeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · funciones del potencial de acción

Entre las funciones del potencial de acción está el control de respuestas efectoras, incluida la activación de canales iónicos sensibles a cambios en el potencial eléctrico, contracción muscular y exocitosis.

### 147

De acuerdo con el libro de Biología, según la figura 32-10a, ¿cómo son los impulsos de cualquier neurona entre sí?

- A. Son similares; o sea, todos los potenciales de acción tienen la misma duración y variación de potencial eléctrico
- B. Son de distinta duración y variación según el estímulo
- C. Aumentan de amplitud con estímulos más fuertes
- D. Solo se registran en las fibras musculares, no en las neuronas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · potencial de acción

Los impulsos de cualquier neurona son similares, o sea, todos los potenciales de acción tienen la misma duración y variación de potencial eléctrico.

### 148

De acuerdo con el libro de Biología, según la figura 32-10b, ¿en qué consiste el experimento clásico con el gato?

- A. Se presiona la piel de un gato con una pequeña sonda de punta roma, lo cual estimula una neurona sensorial (un receptor táctil), y los impulsos generados se transmiten hacia el sistema nervioso central
- B. Se aplica una corriente eléctrica al encéfalo del gato para provocar la contracción muscular
- C. Se ilumina la retina del gato para medir el potencial de acción de la vista
- D. Se inyecta adrenalina en la médula suprarrenal del gato

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · experimento del gato

En un experimento clásico, se presiona la piel de un gato con una pequeña sonda de punta roma, lo cual estimula una neurona sensorial (un receptor táctil). Los impulsos que se generan se transmiten por la neurona hacia el sistema nervioso central.

### 149

De acuerdo con el libro de Biología, según la figura 32-10c, ¿qué ocurría con los potenciales de acción cuanto más profundamente se presionaba la piel?

- A. Se generaban con mayor frecuencia, aunque todos tenían la misma amplitud
- B. Aumentaban su amplitud, aunque su frecuencia no cambiaba
- C. Se generaban con menor frecuencia
- D. Desaparecían por completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · frecuencia e intensidad

Cuanto más profundamente se presionaba la piel, los potenciales de acción se generaban con mayor frecuencia; todos los potenciales de acción tienen la misma amplitud, aunque su frecuencia se incrementa con la intensidad del estímulo.

### 150

De acuerdo con el libro de Biología, según la figura 32-10c, ¿qué detecta el sistema nervioso central y con qué se asocia?

- A. Detecta la frecuencia de los potenciales de acción, que se asocia con la intensidad del estímulo
- B. Detecta la amplitud de los potenciales de acción, que se asocia con la duración
- C. Detecta el color del estímulo
- D. Detecta la temperatura de la piel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · codificación de la intensidad

Lo que el sistema nervioso central detecta es esa frecuencia, que se asocia con la intensidad.

## Sub-lote 17 · Las bases iónicas de los potenciales de membrana (figs. 32-11 y 32-12, p. 767)

### 151

De acuerdo con el libro de Biología, por lo general, ¿a qué iones son permeables las membranas biológicas?

- A. A varios iones, como el Na+, el K+ y el Cl–
- B. Únicamente al agua
- C. Solo al Ca2+ y al Mg2+
- D. A ningún ion, ya que son impermeables

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · bases iónicas

Por lo general, las membranas biológicas son permeables a varios iones, como Na+, K+ y Cl–.

### 152

De acuerdo con el libro de Biología, la diferencia de potencial eléctrico que se genera a través de la membrana, ¿de qué depende?

- A. Del gradiente químico (la concentración intracelular y extracelular de cada uno de esos iones) y de la permeabilidad de la membrana a cada uno de ellos
- B. Únicamente del tamaño de la célula
- C. Solo de la temperatura del medio extracelular
- D. De la cantidad de mielina que recubre el axón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · diferencia de potencial

La diferencia de potencial eléctrico que se genera a través de la membrana depende del gradiente químico (de la concentración intracelular y extracelular de cada uno de esos iones) y de la permeabilidad de la membrana a cada uno de ellos.

### 153

De acuerdo con el libro de Biología, ¿de qué es consecuencia la permeabilidad de una membrana a los iones?

- A. Del tipo y la cantidad de canales abiertos para cada especie iónica
- B. Del grosor total de la membrana plasmática
- C. Del número de mitocondrias de la célula
- D. De la cantidad de mielina del axón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · permeabilidad

La permeabilidad de una membrana a los iones, por su parte, es consecuencia del tipo y la cantidad de canales abiertos para cada especie iónica.

### 154

De acuerdo con el libro de Biología, una membrana con gran cantidad de canales, ¿puede ser poco permeable a los iones, y por qué?

- A. Sí, puede ser poco permeable si los canales poseen una probabilidad muy baja de estar abiertos
- B. No, siempre es muy permeable si tiene muchos canales
- C. Sí, pero solo si carece por completo de canales
- D. No, porque la permeabilidad no depende de los canales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · canales iónicos

Una membrana puede poseer gran cantidad de canales; sin embargo, puede ser poco permeable a los iones, si los canales poseen una probabilidad muy baja de estar abiertos.

### 155

De acuerdo con el libro de Biología, ¿qué mecanismos pueden activar (abrir) los canales para un ion determinado?

- A. Un cambio en el potencial eléctrico de membrana o la llegada de una molécula mensajera que se une al canal, entre otros
- B. Un aumento de la temperatura corporal, exclusivamente
- C. La presencia de la vaina de mielina alrededor del axón
- D. La ausencia total de iones en el medio extracelular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · apertura de canales

Solo cuando se presentan mecanismos adecuados que activan (abren) canales para un ion determinado (como un cambio en el potencial eléctrico de membrana o la llegada de una molécula mensajera que se une al canal, entre otros), la membrana aumenta su permeabilidad a ese ion particular, ya que el canal pasa de un estado cerrado a otro abierto.

### 156

De acuerdo con el libro de Biología, ¿por qué se genera y se mantiene fundamentalmente el potencial de membrana en reposo?

- A. Por la existencia de una distribución asimétrica de iones a ambos lados de la membrana, que están fuera de su equilibrio químico y tienen una tendencia neta a entrar o salir de la célula
- B. Por la distribución perfectamente simétrica de iones a ambos lados de la membrana
- C. Por la ausencia total de iones dentro de la célula
- D. Por la presencia de la vaina de mielina en el soma de la neurona

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 767
**Subtema:** sistema nervioso · potencial de membrana en reposo

El potencial de membrana en reposo se genera y se mantiene fundamentalmente por la existencia de una distribución asimétrica de iones a ambos lados de la membrana. A su vez, estos iones están fuera de su equilibrio químico y, de esta forma, tienen una tendencia neta a entrar o salir de la célula.

## Sub-lote 18 · El potencial de reposo y el axón en reposo (fig. 32-11, p. 768)

### 157

De acuerdo con el libro de Biología, ¿hacia dónde favorecen los gradientes químicos el movimiento del K+ y del Na+?

- A. El gradiente químico favorece la salida del K+ (más concentrado en el interior) y el ingreso del Na+ (más concentrado en el medio extracelular)
- B. El gradiente químico favorece el ingreso del K+ y la salida del Na+
- C. El gradiente químico favorece la salida de ambos iones de la célula
- D. El gradiente químico favorece el ingreso de ambos iones a la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · gradientes iónicos

Al estar el K+ más concentrado en el interior celular, su gradiente químico favorece su salida. Por el contrario, se favorece el ingreso de Na+ al estar más concentrado en el medio extracelular.

### 158

De acuerdo con el libro de Biología, mientras la neurona o fibra muscular está en reposo, ¿cuál es el único ion cuyos canales iónicos se encuentran abiertos, y cómo se llaman?

- A. El K+; sus canales abiertos se llaman canales de fuga
- B. El Na+; sus canales abiertos se llaman canales regulados por potencial eléctrico
- C. El Cl–; sus canales abiertos se llaman canales de fuga
- D. El Ca2+; sus canales abiertos se llaman compuertas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · canales de fuga

Mientras la neurona o fibra muscular permanece en el estado de reposo, el K+ es el único ion cuyos canales iónicos se encuentran abiertos (canales de fuga).

### 159

De acuerdo con el libro de Biología, ¿cómo se genera el potencial de membrana en reposo, con valores negativos en su cara interna?

- A. El movimiento de salida de K+ mueve cargas positivas hacia el exterior de la célula y así genera el potencial de membrana en reposo, con valores negativos en su cara interna
- B. El ingreso de Na+ mueve cargas positivas hacia el interior de la célula
- C. La salida de los aniones no difusibles hacia el exterior de la célula
- D. El ingreso de Cl– hacia el interior de la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · potencial de reposo

El movimiento de salida de K+ mueve cargas positivas hacia el exterior de la célula y así genera el potencial de membrana en reposo, con valores negativos en su cara interna.

### 160

De acuerdo con el libro de Biología, según la figura 32-11, ¿qué proteínas integrales posee la membrana del axón y qué intercambian?

- A. Canales y bombas que participan en los intercambios de K+ y Na+ entre el citosol de los axones y el líquido intersticial externo
- B. Solo bombas que intercambian glucosa y oxígeno
- C. Únicamente canales de Cl– que intercambian agua
- D. Solo vainas de mielina que aíslan el axón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · proteínas de membrana

La membrana del axón posee una serie de proteínas integrales de membrana, entre las que se encuentran canales y bombas que participan en los intercambios de K+ y Na+ entre el citosol de los axones y el líquido intersticial externo.

### 161

De acuerdo con el libro de Biología, según la figura 32-11, ¿qué permiten los canales de fuga de K+ durante el estado de reposo?

- A. Permiten la difusión de los iones K+ a favor de su salida, impulsada por su gradiente de potencial electroquímico
- B. Permiten el ingreso masivo de Na+ hacia el interior de la célula
- C. Permiten la salida de los aniones no difusibles de gran tamaño
- D. Bombean K+ hacia el interior consumiendo ATP

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · canales de fuga

Hay canales K+ que permanecen siempre abiertos durante el estado de reposo (canales de fuga) y permiten la difusión de los iones K+ impulsada por su gradiente de potencial electroquímico a favor de su salida.

### 162

De acuerdo con el libro de Biología, según la figura 32-11, ¿en qué estado permanecen los canales de Na+ y K+ regulados por potencial eléctrico durante el reposo, y por qué?

- A. Permanecen mayoritariamente cerrados, por la presencia de compuertas; así, solo una cantidad muy pequeña de Na+ puede entrar a favor de su gradiente electroquímico
- B. Permanecen siempre abiertos, permitiendo el paso libre de Na+ y K+
- C. Desaparecen por completo de la membrana durante el reposo
- D. Se convierten en bombas de Na+/K+-ATPasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · canales regulados por potencial

Los canales de Na+ y K+ regulados por potencial eléctrico permanecen mayoritariamente cerrados, por la presencia de compuertas, durante el estado de reposo. Así, una cantidad muy pequeña de Na+ puede entrar a favor de su gradiente electroquímico.

> Dos clases de canales que conviene no confundir: los **canales de fuga** (de K+, siempre abiertos en reposo) y los **canales regulados por potencial eléctrico** (de Na+ y K+, mayoritariamente cerrados en reposo por sus compuertas).

### 163

De acuerdo con el libro de Biología, según la figura 32-11, ¿qué genera el funcionamiento conjunto de los canales y la bomba de Na+/K+-ATPasa?

- A. Las diferencias de concentración y permeabilidad de las que dependen el potencial de reposo y el potencial de acción
- B. La vaina de mielina que recubre el axón
- C. La liberación de adrenalina por la médula suprarrenal
- D. La contracción de los músculos esqueléticos voluntarios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · bomba de sodio y potasio

El funcionamiento conjunto de estos sistemas genera las diferencias de concentración y permeabilidad de las que dependen el potencial de reposo y el potencial de acción.

### 164

De acuerdo con el libro de Biología, según la figura 32-11, ¿cuáles son los aniones difusibles y cómo se describen los no difusibles?

- A. Los aniones difusibles son el HCO3– y el Cl–; los no difusibles son de gran tamaño
- B. Los aniones difusibles son el Na+ y el K+; los no difusibles son el Cl–
- C. Los aniones difusibles son de gran tamaño; los no difusibles son el HCO3– y el Cl–
- D. En el esquema no existen aniones difusibles

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · aniones

En la figura 32-11 los aniones difusibles son el HCO3– y el Cl–, y los aniones no difusibles son de gran tamaño.

## Sub-lote 19 · El potencial de acción: despolarización, repolarización e hiperpolarización (fig. 32-12, p. 768)

### 165

De acuerdo con el libro de Biología, cuando un estímulo hace que el potencial de membrana supere un potencial umbral determinado, ¿qué induce?

- A. La apertura de un gran número de canales de Na+ sensibles al potencial eléctrico que se encontraban cerrados, lo cual provoca un aumento repentino de la permeabilidad al Na+
- B. El cierre de todos los canales de fuga de K+
- C. La detención de la bomba de Na+/K+-ATPasa
- D. La salida masiva de los aniones no difusibles

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · potencial umbral

Cuando un estímulo químico o eléctrico alcanza la membrana del axón y hace que su potencial de membrana supere un potencial umbral determinado, induce la apertura de un gran número de canales de Na+ sensibles al potencial eléctrico que se encontraban cerrados, lo cual provoca un aumento repentino de la permeabilidad al Na+.

### 166

De acuerdo con el libro de Biología, al abrirse los canales de Na+ y entrar cargas positivas al axón, ¿qué valor alcanza el potencial de membrana?

- A. Alrededor de +40 mV
- B. Alrededor de –70 mV
- C. Alrededor de –180 mV
- D. Exactamente 0 mV

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · despolarización

La tendencia del Na+ a ingresar en la célula acarrea cargas positivas hacia el interior del axón. El potencial de membrana cambia con rapidez y alcanza un valor de alrededor de +40 mV.

### 167

De acuerdo con el libro de Biología, ¿cómo se denomina el cambio del potencial de membrana hacia valores positivos (positivo del lado intracelular), y de qué es la etapa inicial?

- A. Despolarización; constituye la etapa inicial del potencial de acción
- B. Repolarización; es la etapa final del potencial de acción
- C. Hiperpolarización; es la etapa de reposo del axón
- D. Potencial umbral; es la etapa de fuga del K+

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · despolarización

El potencial de membrana se invierte su signo: ahora es positivo del lado intracelular. Este cambio del potencial de membrana hacia valores positivos se denomina despolarización y constituye la etapa inicial del potencial de acción.

### 168

De acuerdo con el libro de Biología, en el capítulo 32 sobre el sistema nervioso, ¿cuánto dura aproximadamente el cambio en la permeabilidad al Na+, y qué ocurre después con esos canales?

- A. Dura alrededor de 0,5 ms; luego los canales de Na+ pasan a un estado inactivo y la membrana retorna a su baja permeabilidad al Na+
- B. Dura alrededor de 40 ms; luego los canales de Na+ permanecen abiertos indefinidamente
- C. Dura alrededor de 0,5 s; luego los canales de Na+ se convierten en canales de fuga
- D. No tiene una duración definida y se mantiene constante

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · permeabilidad al sodio

El cambio en la permeabilidad al Na+ dura 0,5 ms, aproximadamente. Luego, estos canales de Na+ pasan a un estado inactivo y, así, la membrana retorna a su estado previo de baja permeabilidad a los iones Na+.

### 169

De acuerdo con el libro de Biología, mientras el potencial de membrana se hace positivo, ¿qué otros canales se van abriendo y de qué manera?

- A. Otros canales de K+ dependientes del potencial eléctrico, que se abren de forma más lenta e incrementan la permeabilidad al K+
- B. Nuevos canales de Na+ de fuga, que se abren de forma instantánea
- C. Las bombas de Na+/K+-ATPasa, que dejan de funcionar
- D. Canales de Cl– que expulsan los aniones no difusibles

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · canales de potasio

En respuesta al cambio del potencial de membrana hacia valores positivos también se han estado abriendo, aunque de forma más lenta, otros canales de K+ que también son dependientes del potencial eléctrico; y se fue incrementando la permeabilidad a los iones K+.

### 170

De acuerdo con el libro de Biología, frente a la salida de cargas positivas acarreadas por el K+, ¿en qué fase entra el potencial de membrana y qué ocurre en ella?

- A. En la fase de repolarización, en la que vuelve a aproximarse al potencial de reposo negativo
- B. En la fase de despolarización, en la que se hace cada vez más positivo
- C. En la fase de reposo permanente, en la que deja de cambiar
- D. En la fase umbral, en la que se detiene la salida de K+

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · repolarización

Frente a la salida de cargas positivas acarreadas por el K+, el potencial de membrana entra en una fase llamada repolarización, en la que vuelve a aproximarse al potencial de reposo negativo.

### 171

De acuerdo con el libro de Biología, al final, ¿a qué breve estado lleva la salida de iones K+ y qué lo caracteriza?

- A. A un breve estado de hiperpolarización, en donde el potencial de membrana toma valores más negativos que en el de reposo
- B. A un estado de despolarización permanente, con valores positivos
- C. A un estado de reposo idéntico al inicial, sin ningún cambio
- D. A la apertura definitiva de todos los canales de Na+

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · hiperpolarización

Al final, la salida de iones K+ lleva ahora a un breve estado de hiperpolarización, en donde el potencial de membrana toma valores más negativos que en el de reposo.

> Secuencia del potencial de acción, en orden: **despolarización** (entra Na+, hasta +40 mV) → **repolarización** (sale K+, vuelve hacia el reposo) → **hiperpolarización** (breve, más negativo que el reposo).

### 172

De acuerdo con el libro de Biología, al disminuir el potencial de membrana, ¿qué ocurre con los canales de K+ dependientes del potencial eléctrico?

- A. Vuelven al estado cerrado
- B. Se abren aún más
- C. Se transforman en canales de fuga
- D. Se convierten en bombas de Na+/K+-ATPasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 768
**Subtema:** sistema nervioso · canales de potasio

Al disminuir el potencial de membrana, los canales de K+ dependientes del potencial eléctrico vuelven al estado cerrado.

## Sub-lote 20 · La propagación del impulso nervioso y la bomba de sodio y potasio (figs. 32-12 y 32-13, p. 769)

### 173

De acuerdo con el libro de Biología, ¿por qué el número total de iones Na+ y K+ que se mueven durante el potencial de acción es pequeño?

- A. Debido al corto tiempo que los canales iónicos permanecen abiertos
- B. Debido a que la membrana es impermeable a todos los iones
- C. Debido a que la bomba de Na+/K+-ATPasa deja de funcionar
- D. Debido a que los canales de fuga se cierran por completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · potencial de acción

Debido al corto tiempo que los canales iónicos permanecen abiertos, el número total de iones Na+ y K+ que se mueven durante el potencial de acción es pequeño.

### 174

De acuerdo con el libro de Biología, ¿en qué dirección transporta los iones la bomba de Na+/K+-ATPasa, en contra de su gradiente químico?

- A. El Na+ hacia el medio extracelular y el K+ hacia el medio intracelular
- B. El Na+ hacia el medio intracelular y el K+ hacia el medio extracelular
- C. Ambos iones hacia el medio extracelular
- D. Ambos iones hacia el medio intracelular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · bomba de sodio y potasio

La bomba de Na+/K+-ATPasa transporta iones en contra de su gradiente químico: Na+ hacia el medio extracelular y K+ hacia el medio intracelular.

> La bomba trabaja **en contra** del gradiente (transporte activo, con gasto de energía), al revés de los canales, que dejan pasar los iones **a favor** de su gradiente.

### 175

De acuerdo con el libro de Biología, ¿de qué modo transporta los iones la bomba de Na+/K+-ATPasa y para qué contribuye?

- A. En forma activa —es decir, con gasto de energía—, y contribuye a mantener las concentraciones de estos iones en sus niveles originales y a restablecer los valores del potencial de reposo
- B. En forma pasiva —sin gasto de energía—, y contribuye a eliminar por completo los iones de la célula
- C. En forma activa, pero solo para producir la despolarización
- D. En forma pasiva, y contribuye a acelerar la hiperpolarización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · bomba de sodio y potasio

La bomba de Na+/K+-ATPasa transporta iones en contra de su gradiente químico en forma activa —es decir, con gasto de energía—, contribuye a mantener las concentraciones de estos iones en sus niveles originales —y fuera de su equilibrio químico— y restablece los valores del potencial de reposo.

### 176

De acuerdo con el libro de Biología, ¿a qué se deben los cambios del potencial de membrana durante el potencial de acción, y qué ocurre con las concentraciones de Na+ y K+?

- A. Se deben a rápidos movimientos de iones a través de la membrana axónica, sin modificaciones sustanciales en las concentraciones internas y externas de los iones Na+ y K+
- B. Se deben a un cambio permanente y grande en las concentraciones de Na+ y K+
- C. Se deben a la desaparición de todos los iones del interior de la célula
- D. Se deben al ingreso masivo de agua a la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · potencial de acción

Los potenciales de acción se originan a lo largo del axón en forma de cambios en el potencial de membrana debido a rápidos movimientos de iones a través de la membrana axónica, sin modificaciones sustanciales en las concentraciones internas y externas de los iones Na+ y K+.

### 177

De acuerdo con el libro de Biología, durante la propagación del impulso nervioso, ¿cómo se desplaza la despolarización a lo largo del axón?

- A. Se desplaza de un sector a un punto vecino y continúa a lo largo del axón, autopropagándose de manera continua (se autorrefuerza), como una llama que corre a lo largo de una mecha
- B. Se desplaza en saltos aleatorios que van y vienen por el axón
- C. Se desplaza solo en el soma y las dendritas, sin recorrer el axón
- D. Permanece fija en el sector donde comenzó, sin desplazarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · propagación del impulso

La despolarización comienza en un sector de la membrana neuronal, se desplaza a un punto vecino y continúa desplazándose a lo largo del axón (se autopropaga) de manera continua (se autorrefuerza), como una llama que corre a lo largo de una mecha.

### 178

De acuerdo con el libro de Biología, mientras la despolarización avanza a lo largo del axón, ¿qué ocurre con el primer sector?

- A. Constantemente se repolariza el primer sector
- B. El primer sector permanece despolarizado de forma permanente
- C. El primer sector se destruye tras el paso del impulso
- D. El primer sector deja de conducir impulsos para siempre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · propagación del impulso

Al mismo tiempo que la despolarización se desplaza, constantemente se repolariza el primer sector.

### 179

De acuerdo con el libro de Biología, según la figura 32-12, al finalizar el potencial de acción, ¿qué ocurre con las bombas de Na+/K+-ATPasa?

- A. Aumentan su actividad y restablecen las condiciones del reposo
- B. Detienen por completo su actividad
- C. Se transforman en canales de fuga de K+
- D. Invierten su función y provocan una nueva despolarización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · bomba de sodio y potasio

Al finalizar el potencial de acción, la actividad de las bombas de Na+/K+-ATPasa aumentan su actividad y restablecen las condiciones del reposo.

### 180

De acuerdo con el libro de Biología, según la figura 32-12, ¿qué es el potencial umbral y qué ocurre a partir de que la membrana lo alcanza?

- A. Es el valor del potencial de membrana al que debe llegar la membrana del axón, tras la estimulación, para que se abran los canales de Na+ sensibles al potencial; a partir de ese momento, la apertura de esos canales es autoinducida y da origen al potencial de acción
- B. Es el valor máximo de +40 mV que alcanza el potencial de acción
- C. Es el valor del potencial de reposo, al que la membrana regresa tras el impulso
- D. Es el valor más negativo que alcanza la membrana durante la hiperpolarización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 769
**Subtema:** sistema nervioso · potencial umbral

El potencial umbral es el valor del potencial de membrana al cual debe llegar la membrana del axón luego de la estimulación para que ocurra la apertura de canales de Na+ sensibles al potencial de membrana. A partir de ese momento, la apertura de este tipo de canales de Na+ es autoinducida y da origen al potencial de acción.

---

**Reactivos en este archivo:** 180
