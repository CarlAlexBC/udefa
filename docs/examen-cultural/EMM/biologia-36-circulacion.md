# Biología · Capítulo 36 · La circulación

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
8 (149), 11 (162), 12 (131), 31 (84), 32 (271), 35 (166) y 36 (153). Solo falta el 37.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro trae capa
de texto). Las figuras y los recuadros "ENSAYO" van con `render.py` (su capa de texto es
lorem ipsum o viene cifrada). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado.** El capítulo 36 pertenece a la **Sección VI ·
Biología de los animales**. El cap 35 termina en la hoja 885 (página impresa 839, con los
ejercicios "Situaciones problemáticas"); la hoja 886 (p. 840) está en blanco. La
**portadilla del capítulo 36 está en la hoja 887 (página impresa 841)**: trae el título
"LA CIRCULACIÓN", el número 36, el epígrafe de William Harvey y el apartado de apertura
"Biología en contexto social · Genes, ambiente y enfermedades cardiovasculares". **El
cuerpo empieza en la hoja 888 (página impresa 842)**, con la introducción sobre por qué
los animales grandes necesitan un sistema circulatorio. El desfase +46 se **reverificó
aquí** (hoja 885 = p. 839), leído de la hoja, nunca calculado.

**Qué queda fuera por norma.** El apartado de apertura "Biología en contexto social · Genes,
ambiente y enfermedades cardiovasculares" y el ensayo de cierre "Retomando la problemática
inicial" son el marco social discursivo del capítulo y **no llevan reactivos**, igual que
se hizo en los capítulos 32 y 35. Tampoco los ejercicios ("Cuestionario", "Situaciones
problemáticas").

## Cobertura actual

Cubierta la página impresa **842**: por qué los animales pequeños intercambian O2 por
difusión a través de la superficie corporal y los grandes necesitan órganos de captación
(branquias y pulmones) más un tejido fluido de transporte (sangre en los vertebrados,
hemolinfa en los invertebrados); las funciones de la sangre (nutrientes, enzimas y
hormonas, y el barrido de desechos como el CO2 y la urea); las células del sistema
inmunitario; y el arranque de "Diversidad de los sistemas cardiovasculares" (la red de
conductos y bombas, la perfusión, y la primera parte de la fig. 36-2: sin sistema vascular
diferenciado en esponjas, cnidarios y nematodos; abierto con hemocele en moluscos y
artrópodos; cerrado en anélidos; y la ventaja de los sistemas cerrados). De la **página
843** se cubre la fig. 36-2 completa (a: esponjas y planarias por difusión simple; b:
abierto en moluscos y artrópodos; c: la lombriz de tierra con varios pares de corazones y
válvulas; d: los peces con aurícula y ventrículo y circuito simple; e: anfibios y reptiles
con dos aurículas y ventrículo sin división —salvo cocodrilos y lagartos, con cuatro
cavidades—; f: aves y mamíferos con aurícula y ventrículo divididos en dos). De la
**página 844** se cubre la composición de la sangre de los vertebrados (el volumen de 6 L
repartido en plasma y células, el hematocrito y su valor clínico, el hemograma, la fig.
36-3 con el 45 %/55 % al centrifugar; el plasma con su 90 % de agua y las proteínas
plasmáticas —albúmina, fibrinógeno, globulinas— y el bicarbonato de sodio para el pH; la
hematopoyesis y las células madre pluripotenciales; y los glóbulos rojos de la fig. 36-4
—transporte de O2 y viscosidad, la expulsión del núcleo, los 5 millones/mm³, los 120-130
días, los 2 millones/segundo, y el diámetro de 7-8 µm con su forma de "rosquilla"). De la
**página 845** se cubren los glóbulos blancos (defensa, migración con seudópodos y
fagocitosis, el pus, los 6000-9000/mm³ y la leucemia), las plaquetas (los megacariocitos,
su función en la coagulación y su estructura sin núcleo) y el arranque de la coagulación
sanguínea (la hemorragia y la necrosis), más la fig. 36-5 del linfocito. De la **página
846** se cubre el mecanismo de la coagulación (la coagulación en invertebrados y mamíferos,
la vasoconstricción, los 15 factores, la hemofilia y el factor VIII; el recuadro 36-1 con
las dos fases —plaquetaria y plasmática—, el endotelio y el colágeno, la cascada de
amplificación, y la vía tromboplastina → protrombina/trombina → fibrinógeno/fibrina; y la
fig. 36-6 del coágulo como barrera impenetrable). De la **página 847** se cubren "Una bomba
poderosa: el corazón" (el corazón como bomba, las cuatro cámaras de aves y mamíferos, la
circulación pulmonar y sistémica) y "El corazón humano" (los dos "corazones", el miocardio
y los miocitos, el retorno venoso por las venas cavas, las válvulas tricúspide y mitral, el
circuito pulmonar por la arteria pulmonar y las venas pulmonares, el circuito sistémico por
la aorta con el sistema coronario y las carótidas, la definición de vena/arteria de la fig.
36-7, y la contracción simultánea de aurículas y ventrículos). De la **página 848** se
cubren el sistema de conducción del corazón (el nódulo sinoauricular como marcapasos, el
nódulo auriculoventricular, el enlentecimiento de la conducción, el haz de His y los
marcapasos artificiales, fig. 36-8) y el ciclo cardíaco (las válvulas y la circulación
unidireccional, la sístole y la diástole ventricular con el juego de las válvulas mitral y
aórtica, y la fiebre reumática con el "soplo cardíaco"). De la **página 849** se cubren el
flujo sanguíneo y el gasto cardíaco (72 latidos/min, 0,07 L por latido, 5 L/min), los vasos
sanguíneos (el recorrido arterias → arteriolas → capilares → vénulas → venas, la pared de
arterias y venas, y los sistemas porta con el ejemplo hepático) y la regulación del latido
(el bulbo raquídeo y el autónomo, simpático/parasimpático, la adrenalina, la autorregulación
por elongación y los circuitos en serie, fig. 36-9). De la **página 850** se cubren la
resistencia vascular y la regulación de la perfusión (viscosidad y diámetro, la
vasoconstricción y la vasodilatación de las arteriolas, la inervación simpática y las
hormonas, la termorregulación cutánea, el flujo cerebral constante y las manifestaciones
emocionales, fig. 36-10), la presión sanguínea (su definición, la medición en el brazo, los
120/80, sistólica y diastólica, la presión máxima en la aorta y el volumen regulado en los
riñones) y la anatomía de arterias y venas (las tres capas, el endotelio, las arterias que
mantienen presión y las venas para extracciones, figs. 36-10 y 36-11). De la **página 851**
se cubren el centro de regulación cardiovascular en el bulbo y el retorno venoso (las venas
como reservorio, las válvulas venosas contra el reflujo, la bomba muscular al caminar, las
várices, la velocidad mínima en los capilares y las venas como mayor depósito, figs. 36-12 y
36-13). De la **página 852** se cubren los barorreceptores y el reflejo cardiovascular (la
detección del estiramiento, los quimiorreceptores, los efectores y la retroalimentación
negativa), los capilares y la difusión de sustancias (el endotelio de una sola capa, los
130 µm de distancia máxima, la velocidad mínima y el área transversal conjunta) y el
arranque del sistema linfático (el filtrado del 2 %, los 20 L, los 2-4 L que retornan por el
sistema linfático, y los vasos linfáticos, fig. 36-14). De la **página 853** se cubre el
cierre del sistema linfático (el movimiento de la linfa en mamíferos, los ganglios
linfáticos y la proliferación de linfocitos, los capilares linfáticos como conductos ciegos,
la definición de linfa, su papel en el transporte de grasas y los "corazones linfáticos" de
los anfibios). **Con esto el capítulo 36 queda cubierto por completo** (páginas 842 a 853;
la p. 854 son los ejercicios "Situaciones problemáticas" y el ensayo de cierre "Retomando la
problemática inicial", que por norma no llevan reactivos).

**Pendiente:** ninguno. El capítulo 36 está cerrado en 153 reactivos (24 jul 2026) y cubre
completas las páginas impresas 842 a 853; el ensayo de cierre "Retomando la problemática
inicial" y los ejercicios no llevan reactivos por norma. Lo que falta de Biología lo declara
el archivo del capítulo en curso — hoy, el capítulo 37 (`biologia-37-digestion.md`), que es
el último del temario de la materia.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta —en negrita y con dos puntos— y toma el párrafo
> que le sigue hasta el primer renglón en blanco. Si se convierte en encabezado
> (`## Pendiente`), si desaparece, o si empieza con "ninguno", Biología se reporta como
> cerrada. Por eso el capítulo en curso sostiene, en un solo párrafo, la lista de los que
> faltan.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · La sangre, la hemolinfa y las funciones del transporte (p. 842)

### 1

De acuerdo con el libro de Biología, en los animales más pequeños, de plan corporal simple, ¿cómo ingresa al cuerpo el O2 requerido para la respiración aeróbica?

- A. Por difusión, a través de la superficie corporal
- B. Por medio de branquias y pulmones especializados
- C. Transportado por la sangre desde un corazón central
- D. A través de un sistema circulatorio cerrado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · necesidad de un sistema circulatorio

En los animales más pequeños, los cuales poseen un plan corporal simple, el O2 requerido para la respiración aeróbica ingresa en el cuerpo por difusión, a través de la superficie corporal.

---

### 2

De acuerdo con el libro de Biología, en los animales de mayor tamaño, ¿cómo se llama el tejido conectivo fluido que transporta el O2 en los vertebrados y en los invertebrados?

- A. En los vertebrados es la sangre; en los invertebrados, la hemolinfa
- B. En los vertebrados es la hemolinfa; en los invertebrados, la sangre
- C. En ambos es la sangre
- D. En ambos es la hemolinfa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · sangre y hemolinfa

En el caso de los vertebrados, este tejido fluido es la sangre, mientras que en los invertebrados es la hemolinfa.

---

### 3

De acuerdo con el libro de Biología, ¿qué órganos especializados en la captación de O2 tienen los animales de mayor tamaño?

- A. Las branquias y los pulmones
- B. El corazón y los vasos sanguíneos
- C. El riñón y el hígado
- D. La piel y los cilios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · órganos de captación de O2

Los animales de mayor tamaño tienen órganos especializados en la captación de O2 –como las branquias y los pulmones– y un tejido conectivo fluido que transporta el O2 hasta las células.

---

### 4

De acuerdo con el libro de Biología, además de transportar O2, ¿qué otras funciones esenciales cumple la sangre?

- A. Distribuye nutrientes, transporta enzimas y hormonas, y barre los materiales de desecho de la proximidad de cada célula
- B. Únicamente transporta el CO2 hacia los pulmones
- C. Sintetiza las hormonas y las enzimas del organismo
- D. Filtra la urea y la excreta directamente al exterior

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · funciones de la sangre

Además de transportar O2, la sangre cumple otras funciones esenciales: distribuye a cada célula las moléculas de nutrientes absorbidas en el sistema digestivo, transporta enzimas y hormonas sintetizadas en diversos órganos y "barre" de la proximidad de cada célula materiales de desecho que constituyen el producto de sus actividades metabólicas.

---

### 5

De acuerdo con el libro de Biología, ¿hacia dónde transporta el sistema circulatorio el CO2 proveniente de la respiración celular?

- A. Hasta las superficies respiratorias, desde donde abandona el organismo
- B. Hasta el riñón, donde es procesado y excretado
- C. Hasta el sistema digestivo, donde es absorbido
- D. Hasta el hígado, donde es transformado en urea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · transporte de desechos

Uno de los productos de desecho es el CO2 proveniente de la respiración celular, que es transportado por el sistema circulatorio hasta las superficies respiratorias, desde donde abandona el organismo.

---

### 6

De acuerdo con el libro de Biología, ¿qué función cumplen las células del sistema inmunitario que contiene la sangre?

- A. Detectan y eliminan del organismo elementos extraños
- B. Transportan el O2 hasta cada célula del cuerpo
- C. Sintetizan las hormonas del organismo
- D. Impulsan la sangre a través de los vasos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · funciones de la sangre

La sangre también contiene células del sistema inmunitario, que detectan y eliminan del organismo elementos extraños, entre otras funciones.

---

## Sub-lote 2 · La diversidad de los sistemas cardiovasculares (fig. 36-2, p. 842-843)

### 7

De acuerdo con el libro de Biología, ¿en qué consisten básicamente los sistemas cardiovasculares?

- A. En una red de conductos por los cuales circula la sangre o la hemolinfa y una o varias bombas –corazón– que generan el trabajo necesario para la circulación
- B. En un único conducto cerrado que funciona sin bombas
- C. En órganos que captan el O2 directamente del ambiente
- D. En glándulas que sintetizan las hormonas y enzimas del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · sistemas cardiovasculares

Los sistemas cardiovasculares consisten, básicamente, en una red de conductos por los cuales circula la hemolinfa, o la sangre y una o eventualmente varias bombas –corazón– que generan el trabajo necesario para la circulación.

---

### 8

De acuerdo con el libro de Biología, ¿cómo se denomina el aporte de sangre adecuado a los distintos tejidos del organismo?

- A. Perfusión
- B. Difusión
- C. Hematosis
- D. Hemocele

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · perfusión

Este esquema, que varía en estructura y complejidad en los diferentes animales, asegura el aporte de sangre adecuado –o perfusión– a los distintos tejidos del organismo.

---

### 9

De acuerdo con el libro de Biología, ¿qué animales no presentan un sistema vascular diferenciado?

- A. Las esponjas, los cnidarios y los nematodos
- B. Los moluscos y los artrópodos
- C. Los anélidos
- D. Los peces

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · diversidad de sistemas

Algunos animales, como las esponjas, los cnidarios y los nematodos, no presentan un sistema vascular diferenciado.

---

### 10

De acuerdo con el libro de Biología, en los moluscos y los artrópodos, ¿cómo es el sistema circulatorio?

- A. Abierto: la sangre se vuelca a espacios entre los tejidos formando "lagunas" abiertas –hemocele–
- B. Cerrado: la sangre nunca abandona el circuito de vasos
- C. Ausente: el intercambio ocurre solo por difusión simple
- D. Doble: con dos circuitos separados por un corazón de cuatro cavidades

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · sistema abierto

En los animales más complejos, como los moluscos y los artrópodos, el sistema circulatorio es abierto: un corazón se conecta con un sistema de vasos que vuelca la sangre a espacios que se encuentran entre los tejidos, formando "lagunas" abiertas –hemocele–, y luego la sangre retorna al corazón a través de otros vasos.

---

### 11

De acuerdo con el libro de Biología, ¿qué gran ventaja tienen los sistemas circulatorios cerrados respecto de los abiertos?

- A. Como la sangre nunca abandona el circuito de vasos y bombas, la regulación de la perfusión es más eficiente, el retorno al corazón es más rápido y las presiones dentro del circuito son más elevadas
- B. La sangre baña directamente los tejidos, lo que acelera la difusión
- C. No requieren un corazón que impulse la sangre
- D. Permiten el intercambio de gases por la superficie corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 842
**Subtema:** circulación · sistema cerrado

Los sistemas cerrados tienen una gran ventaja respecto de los abiertos: como la sangre nunca abandona el circuito de vasos y bombas, la regulación de la perfusión hacia los distintos órganos es más eficiente, el retorno de la sangre al corazón es más rápido y las presiones dentro del circuito vascular son más elevadas.

---

### 12

De acuerdo con el libro de Biología, en las esponjas y las planarias, ¿cómo se intercambian los gases, los nutrientes y las sustancias de desecho?

- A. Entre las células y el ambiente a través de la superficie corporal, por difusión simple
- B. A través de un corazón tubular y vasos abiertos
- C. Por medio de branquias y una aorta dorsal
- D. Mediante un circuito cerrado con varios pares de corazones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · difusión simple

En animales, como las esponjas y las planarias, no existe un sistema vascular diferenciado. Los gases, los nutrientes y las sustancias de desecho se intercambian entre las células y el ambiente a través de la superficie corporal, por difusión simple.

---

### 13

De acuerdo con el libro de Biología, en la lombriz de tierra, ¿qué impulsa la hemolinfa y qué impide que retroceda en su recorrido?

- A. Varios pares de corazones la impulsan y varias válvulas impiden que retroceda
- B. Un único corazón tubular la impulsa y el hemocele impide que retroceda
- C. La difusión simple la mueve y la superficie corporal la retiene
- D. Un corazón de cuatro cavidades la impulsa y un tabique impide que retroceda

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · sistema cerrado de los anélidos

En la lombriz de tierra, el sistema circulatorio es cerrado. Varios pares de corazones impulsan la hemolinfa hacia el vaso ventral y los vasos más pequeños la recogen de los tejidos y la vierten en el vaso dorsal, que la dirige hacia adelante. Varias válvulas impiden que la hemolinfa retroceda en su recorrido.

---

### 14

De acuerdo con el libro de Biología, ¿cuántas cavidades tiene el corazón de los peces y qué tipo de circuito define?

- A. Una aurícula y un ventrículo, definiendo un circuito simple
- B. Dos aurículas y un ventrículo, definiendo un circuito doble
- C. Dos aurículas y dos ventrículos, definiendo un circuito doble
- D. Un corazón tubular sin cavidades, definiendo un circuito abierto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · corazón de los peces

Peces. El corazón posee una aurícula (A) y un ventrículo (V). [...] por último, la sangre retorna cargada de CO2 a la aurícula, definiendo así un circuito simple.

---

### 15

De acuerdo con el libro de Biología, en los peces, ¿hacia dónde dirige el ventrículo la sangre por la aorta ventral?

- A. Hacia las branquias, donde se oxigena completamente
- B. Hacia los pulmones, donde se oxigena completamente
- C. Hacia la piel, que complementa el intercambio gaseoso
- D. Hacia el hemocele, donde baña los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · corazón de los peces

La sangre que bombea el ventrículo se dirige por la aorta ventral hacia las branquias, donde se oxigena completamente.

---

### 16

De acuerdo con el libro de Biología, en los anfibios y reptiles, ¿cómo son las aurículas y el ventrículo del corazón?

- A. Las aurículas son dos cámaras separadas y el ventrículo carece de división estructural, aunque presenta poca mezcla de sangre
- B. Las aurículas están fusionadas y el ventrículo está dividido en dos
- C. Tanto las aurículas como el ventrículo están divididos en dos cámaras
- D. El corazón posee una sola aurícula y un solo ventrículo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · corazón de anfibios y reptiles

Anfibios y reptiles. Las aurículas (A) son dos cámaras separadas. [...] El ventrículo (V), a pesar de que carece de una división estructural, presenta poca mezcla de sangre.

---

### 17

De acuerdo con el libro de Biología, en los anfibios, además de los pulmones, ¿qué órgano complementa el intercambio gaseoso?

- A. La piel
- B. Las branquias
- C. El hemocele
- D. La aorta dorsal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · corazón de anfibios y reptiles

La sangre menos oxigenada se dirige hacia los pulmones y, en los anfibios, también hacia la piel, que complementa el intercambio gaseoso.

---

### 18

De acuerdo con el libro de Biología, ¿qué reptiles poseen un corazón de cuatro cavidades, similar al de las aves y los mamíferos?

- A. Los cocodrilos y los lagartos
- B. Las serpientes y las tortugas
- C. Todos los reptiles por igual
- D. Ningún reptil

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · corazón de anfibios y reptiles

En los reptiles –salvo los cocodrilos y los lagartos, que poseen un corazón de cuatro cavidades, similar al de las aves y los mamíferos–, un tabique divide parcialmente el ventrículo y reduce aún más la mezcla de sangre.

---

### 19

De acuerdo con el libro de Biología, en las aves y los mamíferos, ¿cómo están la aurícula y el ventrículo del corazón?

- A. Tanto la aurícula como el ventrículo están divididos en dos cámaras separadas: la izquierda y la derecha
- B. La aurícula está dividida en dos y el ventrículo es una cámara única
- C. El ventrículo está dividido en dos y la aurícula es una cámara única
- D. Tanto la aurícula como el ventrículo son cámaras únicas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 843
**Subtema:** circulación · corazón de aves y mamíferos

Aves y mamíferos. Tanto la aurícula (A) como el ventrículo (V) están divididos en dos cámaras separadas, de modo que hay dos porciones bien diferenciadas: la izquierda y la derecha, una que bombea la sangre relativamente desoxigenada hacia los pulmones y la otra que bombea la sangre saturada en O2 hacia el resto de los tejidos.

---

## Sub-lote 3 · La composición de la sangre y el hematocrito (fig. 36-3, p. 844)

### 20

De acuerdo con el libro de Biología, ¿cómo se reparte el volumen de sangre humana, de alrededor de 6 L?

- A. En 3,3 L de plasma (un líquido amarillento) y 2,7 L de células: glóbulos rojos, glóbulos blancos y plaquetas
- B. En 2,7 L de plasma y 3,3 L de células sanguíneas
- C. En 6 L completos de plasma, sin células
- D. En 3 L de agua y 3 L de hemoglobina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · composición de la sangre

Volumen de alrededor de 6 L, de los cuales 3,3 están constituidos por un líquido amarillento: el plasma. Los 2,7 L restantes son células: glóbulos rojos (también llamados eritrocitos o hematíes), glóbulos blancos (leucocitos) y plaquetas.

---

### 21

De acuerdo con el libro de Biología, ¿cómo se llama el volumen ocupado por las células sanguíneas, expresado como un porcentaje del volumen total de sangre?

- A. Hematocrito
- B. Hemograma
- C. Hematopoyesis
- D. Perfusión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · hematocrito

El volumen ocupado por las células sanguíneas se llama hematocrito y se expresa como un porcentaje del volumen total de sangre.

---

### 22

De acuerdo con el libro de Biología, en condiciones normales, ¿qué porcentaje de las células sanguíneas son glóbulos rojos?

- A. El 99%
- B. El 55%
- C. El 45%
- D. El 1%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · hematocrito

En condiciones normales, el 99% de las células sanguíneas son glóbulos rojos.

---

### 23

De acuerdo con el libro de Biología, ¿cómo se expresan, entre otros parámetros, las anemias producidas por una dieta deficiente en hierro o vitamina B12?

- A. Como una disminución del hematocrito
- B. Como un aumento del hematocrito
- C. Como un aumento del número de glóbulos blancos
- D. Como una disminución del número de plaquetas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · hematocrito

Las anemias producidas por una dieta deficiente en hierro o vitamina B12 se expresan, entre otros parámetros, como una disminución del hematocrito.

---

### 24

De acuerdo con el libro de Biología, ¿cómo se llama el análisis completo de sangre que mide el número de glóbulos blancos, glóbulos rojos y plaquetas, además del valor de la hemoglobina?

- A. Hemograma
- B. Hematocrito
- C. Hematopoyesis
- D. Hemocele

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · hemograma

El hematocrito está incluido en el análisis completo de sangre o hemograma, que mide también el número de glóbulos blancos, glóbulos rojos y plaquetas, además del valor de la hemoglobina, que forma parte de los eritrocitos.

---

### 25

De acuerdo con el libro de Biología, al centrifugar sangre anticoagulada, ¿cómo se reparten las dos fases que se observan?

- A. Una fase compacta y rojiza (células sanguíneas) en el fondo, con alrededor del 45% del volumen, y el plasma amarillento por encima, con el 55% restante
- B. El plasma en el fondo con el 45% y las células por encima con el 55%
- C. Las dos fases ocupan exactamente el 50% del volumen cada una
- D. Una única fase homogénea de color rojo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · componentes de la sangre

Al cabo de algunos minutos se observan dos fases bien definidas: una de ellas –compacta y rojiza– se deposita en el fondo y ocupa alrededor del 45% del volumen total. [...] Por encima se encuentra una fase líquida de color amarillento, el plasma, que ocupa alrededor del 55% restante.

---

## Sub-lote 4 · El plasma y las proteínas plasmáticas (p. 844)

### 26

De acuerdo con el libro de Biología, ¿de qué está formado el plasma en un 90% y cómo funciona químicamente?

- A. En un 90% por agua, por lo que funciona como un solvente polar
- B. En un 90% por proteínas, por lo que funciona como un solvente no polar
- C. En un 90% por sales, por lo que funciona como un ácido débil
- D. En un 90% por hemoglobina, por lo que transporta el O2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · plasma

Este componente de la sangre está formado en un 90% por agua y, por lo tanto, funciona químicamente como un solvente polar.

---

### 27

De acuerdo con el libro de Biología, ¿qué función cumple la albúmina del plasma?

- A. Transporta sustancias insolubles como colesterol, lípidos y ciertas hormonas, y genera una presión osmótica que contribuye a mantener el equilibrio hídrico de la sangre
- B. Participa en la coagulación de la sangre
- C. Participa en la defensa contra agentes externos
- D. Transporta el O2 hasta los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · proteínas plasmáticas

Albúmina, que transporta ciertas sustancias insolubles en el plasma, como colesterol, lípidos y ciertas hormonas. Su presencia, además, genera una presión osmótica que contribuye a mantener el equilibrio hídrico de la sangre.

---

### 28

De acuerdo con el libro de Biología, ¿en qué proceso participa el fibrinógeno del plasma?

- A. En la coagulación
- B. En el transporte de O2
- C. En la defensa contra agentes externos
- D. En el mantenimiento del equilibrio hídrico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · proteínas plasmáticas

Fibrinógeno, que participa en la coagulación.

---

### 29

De acuerdo con el libro de Biología, ¿en qué participan las globulinas, como las inmunoglobulinas, del plasma?

- A. En la defensa contra agentes externos
- B. En la coagulación de la sangre
- C. En el transporte de colesterol y lípidos
- D. En el transporte de O2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · proteínas plasmáticas

Globulinas, como las inmunoglobulinas, que participan en la defensa contra agentes externos.

> Este reactivo forma trío con el 27 (albúmina) y el 28 (fibrinógeno): las tres son proteínas plasmáticas con funciones distintas.

---

### 30

De acuerdo con el libro de Biología, ¿qué sal disuelta en el plasma, junto con la hemoglobina y las proteínas plasmáticas, contribuye a mantener la constancia del pH sanguíneo?

- A. El bicarbonato de sodio
- B. El cloruro de potasio
- C. El fibrinógeno
- D. La albúmina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · plasma

Disueltas en el plasma se encuentran, además, diversas sales: el bicarbonato de sodio en especial, que en conjunto con la hemoglobina de los glóbulos rojos y las proteínas plasmáticas contribuyen a mantener la constancia del pH sanguíneo.

---

## Sub-lote 5 · La hematopoyesis y los glóbulos rojos (fig. 36-4, p. 844)

### 31

De acuerdo con el libro de Biología, ¿cómo se denomina el proceso de formación de las células sanguíneas?

- A. Hematopoyesis
- B. Hematocrito
- C. Fagocitosis
- D. Necrosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · hematopoyesis

Las células sanguíneas se forman tempranamente en el desarrollo. Este proceso de formación se denomina hematopoyesis.

---

### 32

De acuerdo con el libro de Biología, luego del nacimiento, ¿dónde se generan todas las células sanguíneas, salvo los linfocitos?

- A. Solo en la médula ósea
- B. En el hígado y el bazo
- C. En los órganos linfáticos secundarios
- D. En el plasma sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · hematopoyesis

Luego del nacimiento, todas las células sanguíneas solo se generan en la médula ósea –excepto los linfocitos que se forman en los órganos linfáticos secundarios–.

---

### 33

De acuerdo con el libro de Biología, ¿a partir de qué se originan las células sanguíneas?

- A. De un tipo único de células troncales, o células madre, que son pluripotenciales
- B. De los glóbulos rojos maduros que se dividen
- C. De las proteínas plasmáticas del plasma
- D. De los megacariocitos del hígado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · células madre

Las células sanguíneas se originan a partir de un tipo único de células troncales, o células madre, que son pluripotenciales, es decir, que pueden dar origen a distintos grupos celulares.

---

### 34

De acuerdo con el libro de Biología, además de transportar O2, ¿de qué son los principales responsables los glóbulos rojos?

- A. De la viscosidad de la sangre
- B. De la coagulación de la sangre
- C. De la defensa contra las infecciones
- D. Del mantenimiento del pH sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

Los glóbulos rojos son los transportadores de O2 por excelencia y son, además, los principales responsables de la viscosidad de la sangre.

---

### 35

De acuerdo con el libro de Biología, cuando el glóbulo rojo de un mamífero madura, ¿qué ocurre?

- A. Expulsa su núcleo y sus mitocondrias, y casi todo su volumen pasa a consistir en hemoglobina
- B. Aumenta su número de mitocondrias para producir más ATP
- C. Duplica su núcleo para poder dividirse más rápido
- D. Se llena de gránulos y emite seudópodos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

Cuando el glóbulo rojo de un mamífero madura, expulsa su núcleo y sus mitocondrias, mientras que las demás estructuras celulares internas se desintegran. Casi todo el volumen del glóbulo rojo maduro consiste en hemoglobina, el pigmento al que se unen las moléculas de O2.

---

### 36

De acuerdo con el libro de Biología, ¿cuántos glóbulos rojos por mm3 de sangre existen aproximadamente en los humanos?

- A. Alrededor de 5 millones
- B. Alrededor de 5 mil
- C. Alrededor de 500 mil
- D. Alrededor de 50 millones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

En los humanos, existen alrededor de 5 millones de glóbulos rojos por mm3 de sangre (en varones 4,5-5 millones/mm3 y en mujeres 4-4,5 millones/mm3).

---

### 37

De acuerdo con el libro de Biología, ¿cuál es el lapso de vida de los glóbulos rojos?

- A. Entre 120 y 130 días
- B. Entre 12 y 13 días
- C. Entre 12 y 13 años
- D. Entre 6000 y 9000 días

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

Como los glóbulos rojos carecen de núcleo, no pueden sintetizar nuevas moléculas. Su lapso de vida es breve: alcanza entre 120 y 130 días.

---

### 38

De acuerdo con el libro de Biología, ¿a qué ritmo mueren los glóbulos rojos en nuestro cuerpo, siendo reemplazados a igual ritmo en la médula ósea?

- A. Alrededor de 2 millones por segundo
- B. Alrededor de 2 mil por segundo
- C. Alrededor de 5 millones por minuto
- D. Alrededor de 120 por día

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

Están muriendo glóbulos rojos a un ritmo de alrededor de 2 millones por segundo, aunque son reemplazados por la formación, a igual ritmo, de nuevos glóbulos rojos en la médula ósea.

---

### 39

De acuerdo con el libro de Biología, ¿qué diámetro tienen los glóbulos rojos de los vertebrados?

- A. Entre 7 y 8 micrómetros
- B. Entre 5 y 6 micrómetros
- C. Entre 1 y 2 micrómetros
- D. Entre 70 y 80 micrómetros

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

Los glóbulos rojos tienen entre 7 y 8 micrómetros de diámetro y son significativamente más grandes que algunos de los capilares más pequeños, que tienen solo 5 micrómetros de diámetro.

---

### 40

De acuerdo con el libro de Biología, ¿por qué los glóbulos rojos pueden pasar a través de capilares más pequeños que ellos?

- A. Porque su forma de "rosquilla" les permite curvarse, torcerse y plegarse
- B. Porque expulsan su núcleo al entrar en el capilar
- C. Porque se dividen en fragmentos más pequeños
- D. Porque emiten seudópodos como las amebas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 844
**Subtema:** circulación · glóbulos rojos

Su paso a través de los capilares es posible porque su forma de "rosquilla" permite que se curven, se tuerzan y se plieguen.

---

## Sub-lote 6 · Los glóbulos blancos y las plaquetas (fig. 36-5, p. 845)

### 41

De acuerdo con el libro de Biología, ¿cuál es la función principal de los glóbulos blancos o leucocitos?

- A. La defensa del organismo contra virus, bacterias y partículas extrañas
- B. El transporte de O2 hasta los tejidos
- C. La coagulación de la sangre
- D. El mantenimiento del pH sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · glóbulos blancos

Los glóbulos blancos o leucocitos son células casi incoloras, ya que no poseen pigmentos, tienen núcleo y su tamaño es mayor que el de los glóbulos rojos. Su función principal es la defensa del organismo contra virus, bacterias y partículas extrañas.

---

### 42

De acuerdo con el libro de Biología, a diferencia de los glóbulos rojos, ¿qué pueden hacer los glóbulos blancos?

- A. Migrar al espacio intersticial y desplazarse por medio de seudópodos, como las amebas
- B. Transportar O2 fuera de los vasos sanguíneos
- C. Sintetizar hemoglobina en los tejidos
- D. Dividirse dentro de los capilares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · glóbulos blancos

A diferencia de los glóbulos rojos, los glóbulos blancos no están confinados dentro de los vasos sanguíneos, sino que pueden migrar al espacio intersticial. [...] en los tejidos pueden aplanarse y desplazarse por medio de seudópodos, como las amebas.

---

### 43

De acuerdo con el libro de Biología, ¿de qué está compuesto fundamentalmente el pus que supura de las heridas infectadas de la piel?

- A. De glóbulos blancos muertos durante el proceso de control de la infección
- B. De glóbulos rojos muertos
- C. De plaquetas activadas
- D. De plasma coagulado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · glóbulos blancos

El pus, que por lo común supura de las heridas infectadas que se producen en la piel, está compuesto fundamentalmente por estas células muertas.

---

### 44

De acuerdo con el libro de Biología, ¿cuántos glóbulos blancos por mm3 hay en la sangre de nuestra especie?

- A. Entre 6000 y 9000
- B. Entre 4 y 5 millones
- C. Entre 120 y 130
- D. Entre 2 y 3 millones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · glóbulos blancos

En la sangre de nuestra especie hay entre 6000 y 9000 glóbulos blancos por mm3.

---

### 45

De acuerdo con el libro de Biología, ¿qué ocurre en la médula ósea en la forma de cáncer conocida como leucemia?

- A. Una proliferación aumentada de glóbulos blancos afuncionales o anormales, mientras disminuye la producción de los glóbulos blancos normales
- B. Una destrucción total de los glóbulos rojos
- C. Una disminución del hematocrito por falta de hierro
- D. Una proliferación de plaquetas anormales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · leucemia

En la forma de cáncer conocida como leucemia, se produce en la médula ósea una proliferación aumentada de glóbulos blancos, que son afuncionales o anormales; al mismo tiempo, disminuye la producción de los glóbulos blancos normales que protegen al organismo.

---

### 46

De acuerdo con el libro de Biología, ¿de qué células son fragmentos las plaquetas?

- A. De células inusualmente grandes llamadas megacariocitos, que se encuentran en la médula ósea
- B. De los glóbulos rojos maduros que se fragmentan
- C. De los linfocitos de los órganos linfáticos
- D. De las células madre del hígado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · plaquetas

Las plaquetas, llamadas así porque se asemejan a placas pequeñas, son pequeños discos incoloros, fragmentos de células inusualmente grandes –los megacariocitos– que se encuentran en la médula ósea.

---

### 47

De acuerdo con el libro de Biología, ¿qué función cumplen las plaquetas?

- A. Inician la coagulación de la sangre y obturan roturas de los vasos sanguíneos
- B. Transportan el O2 hasta los tejidos
- C. Realizan la fagocitosis de virus y bacterias
- D. Mantienen la constancia del pH sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · plaquetas

Las plaquetas inician la coagulación de la sangre y obturan roturas de los vasos sanguíneos.

---

### 48

De acuerdo con el libro de Biología, respecto de su estructura, ¿qué caracteriza a las plaquetas?

- A. No contienen núcleos, aunque tienen mitocondrias, lo que les permite el aprovisionamiento de ATP
- B. Contienen un núcleo grande y carecen de mitocondrias
- C. Están llenas de hemoglobina como los glóbulos rojos
- D. Poseen pigmentos que les dan color

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · plaquetas

Las plaquetas no contienen núcleos, aunque tienen mitocondrias –lo que les permite el aprovisionamiento de ATP–, un retículo endoplasmático liso y numerosos gránulos en donde se acumulan diversas sustancias.

---

### 49

De acuerdo con el libro de Biología, cuando se rompe un vaso sanguíneo y se produce una hemorragia, ¿qué puede causar en la zona circundante a la lesión?

- A. Necrosis, es decir, la muerte de las células
- B. Fagocitosis de las células vecinas
- C. Leucemia en la médula ósea
- D. Un aumento del hematocrito

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · coagulación sanguínea

Cuando se rompe un vaso sanguíneo, se produce una hemorragia que disminuye el aporte de O2 y nutrientes al área afectada. Esto puede causar necrosis –la muerte de las células– de la zona circundante a la lesión.

---

### 50

De acuerdo con el libro de Biología, ¿qué es un linfocito?

- A. Uno de los tipos de glóbulos blancos
- B. Uno de los tipos de glóbulos rojos
- C. Un fragmento de megacariocito
- D. Una proteína plasmática

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 845
**Subtema:** circulación · linfocitos

Microfotografía electrónica de barrido de un linfocito humano (uno de los tipos de glóbulos blancos) atrapando células bacterianas.

---

## Sub-lote 7 · La coagulación sanguínea y la hemofilia (fig. 36-6, p. 846)

### 51

De acuerdo con el libro de Biología, ¿cómo se denomina el proceso de formación de la placa o coágulo que obtura una herida?

- A. Coagulación
- B. Vasoconstricción
- C. Hematopoyesis
- D. Fagocitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación

La aglutinación y posterior formación de una placa de células sanguíneas obtura la zona. El proceso de formación de esta placa o coágulo se denomina coagulación.

---

### 52

De acuerdo con el libro de Biología, en los mamíferos, cuando un vaso sanguíneo se rompe, ¿qué ocurre primero con los otros vasos de la zona afectada?

- A. Se contraen –vasoconstricción– y el aporte de sangre se reduce
- B. Se dilatan y aumentan el aporte de sangre
- C. Liberan glóbulos blancos al espacio intersticial
- D. Se transforman en capilares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación

Cuando un vaso sanguíneo se rompe, otros vasos de la zona afectada se contraen –vasoconstricción– y el aporte de sangre se reduce.

---

### 53

De acuerdo con el libro de Biología, además de plaquetas, ¿cuántos factores de la coagulación requiere, al menos, la coagulación de la sangre?

- A. Al menos 15 factores de la coagulación
- B. Al menos 3 factores de la coagulación
- C. Al menos 50 factores de la coagulación
- D. Un único factor de la coagulación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación

La coagulación de la sangre requiere plaquetas y, al menos 15 factores de la coagulación, algunos de ellos circulantes en el torrente sanguíneo y otros presentes en las membranas de las plaquetas o de otros tipos celulares.

---

### 54

De acuerdo con el libro de Biología, ¿qué es la hemofilia?

- A. Un grupo de enfermedades determinadas genéticamente que se caracterizan por la imposibilidad de coagulación normal
- B. Un tipo de cáncer de la médula ósea
- C. Una anemia por deficiencia de hierro
- D. Una infección de los glóbulos blancos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · hemofilia

La hemofilia –patología que se caracteriza por la imposibilidad de coagulación normal– es, en realidad, un grupo de enfermedades determinadas genéticamente que afectan a la coagulación.

---

### 55

De acuerdo con el libro de Biología, en el tipo más frecuente de hemofilia, ¿de qué factor de coagulación carecen los enfermos?

- A. Del factor VIII
- B. Del factor III
- C. De la protrombina
- D. De la tromboplastina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · hemofilia

En el tipo más frecuente de hemofilia, los enfermos carecen de un factor particular de coagulación: el factor VIII.

---

## Sub-lote 8 · Las fases de la coagulación (recuadro 36-1, p. 846)

### 56

De acuerdo con el libro de Biología, ¿en qué dos etapas se produce la coagulación?

- A. La fase plaquetaria (o hemostasis primaria) y la fase de coagulación plasmática
- B. La vasoconstricción y la vasodilatación
- C. La hematopoyesis y la fagocitosis
- D. La fase arterial y la fase venosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · fases de la coagulación

La coagulación se produce en dos etapas: la fase plaquetaria, o hemostasis primaria, y la fase de coagulación plasmática.

---

### 57

De acuerdo con el libro de Biología, ¿cómo se denomina la capa celular que reviste la superficie interna de los vasos sanguíneos?

- A. Endotelio
- B. Miocardio
- C. Pleura
- D. Hemocele

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · endotelio

Cuando se daña la capa celular que reviste la superficie interna de los vasos, denominada endotelio, las plaquetas se unen con moléculas de colágeno.

---

### 58

De acuerdo con el libro de Biología, en la fase plaquetaria, cuando se daña el endotelio, ¿con qué se unen las plaquetas?

- A. Con moléculas de colágeno
- B. Con moléculas de fibrina
- C. Con los glóbulos rojos
- D. Con el factor VIII

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · fase plaquetaria

Cuando se daña la capa celular que reviste la superficie interna de los vasos, denominada endotelio, las plaquetas se unen con moléculas de colágeno. Así, se activan y experimentan cambios estructurales y bioquímicos profundos.

---

### 59

De acuerdo con el libro de Biología, en la coagulación plasmática, ¿cómo es la cascada de reacciones?

- A. El producto de cada paso actúa como catalizador para el paso siguiente, en un proceso de amplificación en el que aumenta el número de moléculas
- B. Cada paso destruye las moléculas del paso anterior
- C. Todas las reacciones ocurren simultáneamente y sin catalizadores
- D. El número de moléculas disminuye en cada paso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación plasmática

Se produce una cascada de reacciones en la que el producto de cada paso actúa como catalizador para el paso siguiente y las moléculas que intervienen son reutilizadas una y otra vez. El resultado es que, en cada paso de la serie, el número de moléculas aumenta en un proceso de amplificación.

---

### 60

De acuerdo con el libro de Biología, en la cascada de coagulación, ¿qué hace la tromboplastina activada?

- A. Convierte la protrombina en la enzima trombina, que es su forma activa
- B. Convierte la fibrina en fibrinógeno
- C. Convierte el colágeno en plaquetas
- D. Convierte la trombina en protrombina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación plasmática

Esta comienza con la activación de una molécula llamada tromboplastina, que convierte a la protrombina –una proteína plasmática producida en el hígado– en la enzima trombina, que es su forma activa.

---

### 61

De acuerdo con el libro de Biología, ¿dónde se produce la protrombina, la proteína plasmática que se convierte en trombina?

- A. En el hígado
- B. En la médula ósea
- C. En el endotelio de los vasos
- D. En el bazo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación plasmática

La protrombina –una proteína plasmática producida en el hígado–.

---

### 62

De acuerdo con el libro de Biología, ¿sobre qué molécula actúa la trombina y en qué la convierte?

- A. Sobre el fibrinógeno (forma inactiva), y cataliza su conversión a fibrina
- B. Sobre la protrombina, y la convierte en tromboplastina
- C. Sobre el colágeno, y lo convierte en plaquetas
- D. Sobre la fibrina, y la convierte en fibrinógeno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación plasmática

A su vez, la trombina actúa sobre una molécula en forma inactiva –el fibrinógeno– y cataliza su conversión a fibrina.

---

### 63

De acuerdo con el libro de Biología, ¿qué forman las moléculas de fibrina al aglutinarse?

- A. Una red insoluble en la cual se "enredan" los glóbulos rojos y las plaquetas, formando un coágulo
- B. Una solución líquida que disuelve el coágulo
- C. Una placa de colágeno sobre el endotelio
- D. Una capa de miocardio sobre la herida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · coagulación plasmática

Las moléculas de fibrina se aglutinan y forman una red insoluble en la cual se "enredan" los glóbulos rojos y las plaquetas. Así se forma un coágulo que luego se contrae, ayudando a cerrar la herida.

---

### 64

De acuerdo con el libro de Biología, cuando se completa el coágulo, ¿qué se forma?

- A. Una barrera impenetrable que evita tanto la pérdida de líquidos vitales como la entrada de microorganismos infecciosos
- B. Una capa temporal que se disuelve en pocos minutos
- C. Una placa de plaquetas sin fibrina
- D. Un tejido cicatricial de miocardio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 846
**Subtema:** circulación · formación del coágulo

Cuando se completa el coágulo, se forma una barrera impenetrable que evita tanto la pérdida de líquidos vitales como la entrada de microorganismos infecciosos.

---

## Sub-lote 9 · El corazón como bomba y el corazón humano (fig. 36-7, p. 847)

### 65

De acuerdo con el libro de Biología, cuando el corazón se contrae, ¿qué ocurre?

- A. La cavidad interna se reduce, la presión en su interior aumenta y la sangre es expulsada
- B. La cavidad interna se agranda, la presión disminuye y la sangre ingresa
- C. La presión permanece constante y la sangre no se mueve
- D. El músculo se relaja y la sangre retrocede

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · el corazón como bomba

El corazón es un músculo con una enorme fuerza de contracción, que actúa como una verdadera bomba. Cuando se contrae, la cavidad interna se reduce, la presión en su interior aumenta y la sangre es expulsada.

---

### 66

De acuerdo con el libro de Biología, ¿en cuántas cámaras está dividido el corazón de aves y mamíferos?

- A. En cuatro cámaras: dos aurículas y dos ventrículos
- B. En dos cámaras: una aurícula y un ventrículo
- C. En tres cámaras: dos aurículas y un ventrículo
- D. En una única cámara

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · corazón de aves y mamíferos

El corazón de aves y mamíferos está dividido en cuatro cámaras: dos aurículas y dos ventrículos.

---

### 67

De acuerdo con el libro de Biología, ¿cómo se denominan la circulación que irriga los pulmones y la que abastece al resto del organismo?

- A. Circulación pulmonar y circulación sistémica
- B. Circulación arterial y circulación venosa
- C. Circulación primaria y circulación secundaria
- D. Circulación abierta y circulación cerrada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · circulación pulmonar y sistémica

Una separación más completa entre la circulación que irriga los pulmones (circulación pulmonar) y la que abastece al resto del organismo (circulación sistémica).

---

### 68

De acuerdo con el libro de Biología, ¿en qué dos partes funcionalmente distintas está separado el corazón humano?

- A. El "corazón derecho" y el "corazón izquierdo", cada uno con una aurícula y un ventrículo comunicados por válvulas
- B. La aurícula superior y la aurícula inferior
- C. El corazón arterial y el corazón venoso
- D. El miocardio y el endotelio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · corazón humano

El corazón humano está separado en dos partes funcionalmente distintas, el "corazón derecho" y el "corazón izquierdo", cada una provista de una aurícula y un ventrículo comunicados entre sí mediante válvulas que dejan pasar la sangre en un sentido, pero no en el otro.

---

### 69

De acuerdo con el libro de Biología, ¿cómo se llaman las células del músculo cardíaco o miocardio?

- A. Miocitos
- B. Leucocitos
- C. Megacariocitos
- D. Eritrocitos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · miocardio

Este corazón de cuatro cámaras posee paredes constituidas predominantemente por músculo cardíaco (miocardio), cuyas células se denominan miocitos.

---

### 70

De acuerdo con el libro de Biología, ¿cómo se llama el proceso por el cual la sangre retorna desde los tejidos y penetra en la aurícula derecha por las venas cavas superior e inferior?

- A. Retorno venoso
- B. Perfusión
- C. Vasoconstricción
- D. Circulación pulmonar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · retorno venoso

La sangre que retorna desde los tejidos corporales –proceso llamado retorno venoso– penetra en la aurícula derecha mediante dos grandes venas: las venas cavas superior e inferior.

---

### 71

De acuerdo con el libro de Biología, ¿al abrirse qué válvula pasa la sangre de la aurícula derecha al ventrículo derecho?

- A. La válvula tricúspide
- B. La válvula mitral
- C. La válvula aórtica
- D. La válvula pulmonar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · válvulas cardíacas

Esta sangre (relativamente desoxigenada) pasa luego al ventrículo derecho, al abrirse la válvula tricúspide.

---

### 72

De acuerdo con el libro de Biología, ¿mediante qué vaso bombea el ventrículo derecho la sangre hacia el circuito pulmonar?

- A. Mediante la arteria pulmonar
- B. Mediante la arteria aorta
- C. Mediante las venas cavas
- D. Mediante las venas pulmonares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · circuito pulmonar

Este ventrículo bombea la sangre hacia el circuito pulmonar mediante la arteria pulmonar.

---

### 73

De acuerdo con el libro de Biología, la sangre totalmente oxigenada que sale de los pulmones ingresa a la aurícula izquierda, ¿por qué vasos?

- A. Por las venas pulmonares
- B. Por las venas cavas
- C. Por la arteria pulmonar
- D. Por la arteria aorta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · circuito pulmonar

La sangre totalmente oxigenada que sale de los pulmones ingresa a la aurícula izquierda por las venas pulmonares.

---

### 74

De acuerdo con el libro de Biología, ¿al abrirse qué válvula pasa la sangre de la aurícula izquierda al ventrículo izquierdo?

- A. La válvula mitral
- B. La válvula tricúspide
- C. La válvula pulmonar
- D. La válvula aórtica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · válvulas cardíacas

La sangre [...] ingresa a la aurícula izquierda por las venas pulmonares y luego hacia el ventrículo izquierdo, al abrirse la válvula mitral.

> Este reactivo forma par con el 71 (tricúspide, lado derecho / mitral, lado izquierdo).

---

### 75

De acuerdo con el libro de Biología, ¿hacia qué vaso bombea el ventrículo izquierdo la sangre oxigenada, para distribuirla por el circuito sistémico?

- A. Hacia la arteria aorta
- B. Hacia la arteria pulmonar
- C. Hacia las venas cavas
- D. Hacia las venas pulmonares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · circuito sistémico

Por último, el ventrículo izquierdo bombea la sangre que se oxigenó en los pulmones hacia la arteria aorta, que la distribuye, a su vez, por todo el circuito sistémico.

---

### 76

De acuerdo con el libro de Biología, ¿qué irriga el sistema vascular coronario?

- A. Al propio tejido cardíaco
- B. Al cerebro
- C. A los pulmones
- D. A los riñones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · circuito sistémico

Incluido el sistema vascular coronario, que irriga al propio tejido cardíaco.

---

### 77

De acuerdo con el libro de Biología, ¿qué arterias irrigan el cerebro y garantizan la integridad de las células nerviosas?

- A. Las arterias carótidas
- B. Las arterias coronarias
- C. Las arterias pulmonares
- D. Las venas cavas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · circuito sistémico

Las arterias carótidas, que irrigan el cerebro y garantizan, así, la integridad de las células nerviosas.

---

### 78

De acuerdo con el libro de Biología, según la figura del corazón humano, ¿cómo se distingue una vena de una arteria?

- A. Se denomina vena a todo vaso que ingresa en el corazón y arteria a los que salen de él, independientemente de la concentración de oxígeno de la sangre
- B. Vena es todo vaso con sangre desoxigenada y arteria todo vaso con sangre oxigenada
- C. Vena es todo vaso que sale del corazón y arteria todo vaso que ingresa en él
- D. La distinción depende únicamente del diámetro del vaso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · venas y arterias

Nótese que se denomina vena a todo vaso sanguíneo que ingresa en el corazón y arteria a los que salen de él, independientemente de la concentración de oxígeno que tenga la sangre que circula por ellos.

---

### 79

De acuerdo con el libro de Biología, ¿cómo se contraen las aurículas y los ventrículos del corazón?

- A. Ambas aurículas se contraen al mismo tiempo, y lo mismo ocurre con ambos ventrículos
- B. Primero se contrae la aurícula derecha y luego la izquierda
- C. Las aurículas y los ventrículos se contraen todos a la vez
- D. Solo se contrae el ventrículo izquierdo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 847
**Subtema:** circulación · contracción cardíaca

Ambas aurículas se contraen al mismo tiempo y lo mismo ocurre con ambos ventrículos.

---

## Sub-lote 10 · El sistema de conducción del corazón (fig. 36-8, p. 848)

### 80

De acuerdo con el libro de Biología, ¿qué región especializada de la aurícula derecha controla el latido del corazón del mamífero, actuando como marcapasos?

- A. El nódulo sinoauricular
- B. El nódulo auriculoventricular
- C. El haz de His
- D. El bulbo raquídeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

El latido del corazón del mamífero está controlado por una región especializada de la aurícula derecha, el nódulo (o nodo) sinoauricular, formado por células musculares cardíacas modificadas que, al actuar como un marcapasos, imponen el ritmo cardíaco.

---

### 81

De acuerdo con el libro de Biología, ¿cómo están unidas entre sí las células del miocardio auricular que reciben los potenciales de acción del marcapasos?

- A. Por sinapsis eléctricas
- B. Por válvulas auriculoventriculares
- C. Por fibras del haz de His
- D. Por vénulas y arteriolas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

Propagando potenciales de acción hacia todas las células del miocardio auricular –unidas entre sí por sinapsis eléctricas– que, en respuesta, se contraen.

---

### 82

De acuerdo con el libro de Biología, ¿qué segundo marcapasos, ubicado en el lado derecho, controla la contracción ventricular?

- A. El nódulo auriculoventricular
- B. El nódulo sinoauricular
- C. El haz de His
- D. La válvula mitral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

Un segundo marcapasos, el nódulo (o nodo) auriculoventricular, también ubicado en el lado derecho, controla la contracción ventricular.

---

### 83

De acuerdo con el libro de Biología, ¿por qué se enlentece la velocidad de conducción de los potenciales de acción en el nódulo auriculoventricular?

- A. Para permitir que las aurículas terminen de contraerse antes de que comience la sístole ventricular
- B. Para que los ventrículos se contraigan antes que las aurículas
- C. Para detener por completo el impulso nervioso
- D. Para aumentar la presión en la aorta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

En la conexión nerviosa con el nódulo auriculoventricular, la velocidad de conducción de los potenciales de acción se enlentece, lo cual permite que las aurículas terminen de contraerse antes de que comience la contracción o sístole ventricular.

---

### 84

De acuerdo con el libro de Biología, ¿cómo se llama la estructura que conduce rápidamente los potenciales de acción hacia todo el miocardio ventricular?

- A. El haz de His
- B. El nódulo sinoauricular
- C. La válvula aórtica
- D. La vena porta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

La propagación de potenciales de acción a las células del miocardio ventricular [...] es muy rápida, especialmente en el llamado haz de His, que conduce a los potenciales de acción hacia todo el miocardio ventricular.

---

### 85

De acuerdo con el libro de Biología, ¿cómo puede remediarse, en muchos casos, la disfunción de los marcapasos cardíacos?

- A. Con la incorporación de marcapasos artificiales que regularizan el ritmo y la sincronización de la contracción cardíaca
- B. Con la administración del factor VIII
- C. Con un aumento del retorno venoso
- D. Con la extirpación del nódulo sinoauricular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

La disfunción de los marcapasos cardíacos puede, en muchos casos, remediarse con la incorporación de marcapasos artificiales que regularizan el ritmo y la sincronización de la contracción cardíaca.

---

## Sub-lote 11 · El ciclo cardíaco: sístole y diástole (p. 848)

### 86

De acuerdo con el libro de Biología, ¿qué aseguran las válvulas del corazón de los vertebrados?

- A. La circulación unidireccional de la sangre, abriéndose o cerrándose según la diferencia de presión entre las cámaras
- B. La contracción simultánea de aurículas y ventrículos
- C. La oxigenación de la sangre en los pulmones
- D. La producción de los potenciales de acción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · válvulas cardíacas

El corazón de todos los vertebrados posee válvulas que aseguran la circulación unidireccional de la sangre, ya que se abren o se cierran de acuerdo con la diferencia de presión sanguínea entre las cámaras, y permiten o impiden el paso de sangre.

---

### 87

De acuerdo con el libro de Biología, ¿cómo se denomina la contracción del ventrículo?

- A. Sístole ventricular
- B. Diástole ventricular
- C. Retorno venoso
- D. Perfusión ventricular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · ciclo cardíaco

En el "corazón izquierdo", durante la contracción del ventrículo, o sístole ventricular, la presión dentro del ventrículo izquierdo aumenta.

---

### 88

De acuerdo con el libro de Biología, durante la sístole del ventrículo izquierdo, al aumentar la presión, ¿qué ocurre con las válvulas?

- A. Se cierra la válvula mitral y luego se abre la válvula aórtica
- B. Se abre la válvula mitral y se cierra la válvula aórtica
- C. Se cierran ambas válvulas simultáneamente
- D. Se abre la válvula tricúspide y se cierra la pulmonar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · ciclo cardíaco

La presión dentro del ventrículo izquierdo aumenta, se cierra la correspondiente válvula auriculoventricular (válvula mitral) y luego, al aumentar aún más la presión, se abre la válvula ubicada entre el ventrículo y la arteria aorta (válvula aórtica).

---

### 89

De acuerdo con el libro de Biología, ¿cómo se denomina la relajación del ventrículo?

- A. Diástole ventricular
- B. Sístole ventricular
- C. Gasto cardíaco
- D. Vasoconstricción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · ciclo cardíaco

Durante la relajación, o diástole ventricular, la baja presión que inicialmente desarrolla el ventrículo provoca el cierre de la válvula aórtica.

---

### 90

De acuerdo con el libro de Biología, durante la diástole ventricular, ¿qué provoca la baja presión del ventrículo?

- A. El cierre de la válvula aórtica, evitando el reflujo desde la aorta, y luego la apertura de la mitral con el ingreso de sangre desde la aurícula
- B. La apertura de la válvula aórtica y la salida de sangre hacia la aorta
- C. El cierre de la válvula mitral y el aumento de la presión ventricular
- D. La contracción simultánea de ambos ventrículos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · ciclo cardíaco

La baja presión que inicialmente desarrolla el ventrículo provoca el cierre de la válvula aórtica, evitando así el reflujo de sangre desde la aorta; el descenso posterior de la presión ventricular provoca la apertura de la válvula mitral con el consiguiente ingreso de sangre desde la aurícula.

---

### 91

De acuerdo con el libro de Biología, en la fiebre reumática humana, ¿qué produce el ruido que se caracteriza como "soplo cardíaco"?

- A. La sangre en retroceso a través de la válvula defectuosa
- B. La contracción demasiado rápida de los ventrículos
- C. La obstrucción de la arteria aorta
- D. El exceso de adrenalina en la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · patologías valvulares

El daño de estas válvulas puede acarrear trastornos serios, como ocurre en la fiebre reumática humana, en la cual la sangre en retroceso a través de la válvula defectuosa produce el ruido que se caracteriza como "soplo cardíaco".

---

### 92

De acuerdo con el libro de Biología, al extenderse la excitación nerviosa desde el marcapasos a través de las células musculares de la aurícula, ¿qué ocurre?

- A. Ambas aurículas se contraen casi simultáneamente
- B. Los ventrículos se contraen antes que las aurículas
- C. Se cierra la válvula aórtica
- D. Se detiene el latido cardíaco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 848
**Subtema:** circulación · sistema de conducción

La excitación nerviosa –potenciales de acción– se extiende desde el marcapasos a través de las células musculares de la aurícula y hace que ambas aurículas se contraigan casi simultáneamente.

---

## Sub-lote 12 · El gasto cardíaco y los vasos sanguíneos (p. 849)

### 93

De acuerdo con el libro de Biología, ¿cómo se define el flujo sanguíneo?

- A. El volumen de sangre que circula por minuto, el mismo en cualquier tramo del circuito
- B. La presión que ejercen las arterias sobre la sangre
- C. El número de latidos del corazón por minuto
- D. La diferencia de presión entre las cámaras del corazón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · flujo sanguíneo

El flujo sanguíneo (volumen de sangre que circula por minuto) es el mismo en cualquier tramo del circuito que se considere. Este flujo es impuesto por el corazón.

---

### 94

De acuerdo con el libro de Biología, en condiciones de reposo, ¿cuántas veces por minuto late el corazón?

- A. 72 veces por minuto
- B. 5 veces por minuto
- C. 720 veces por minuto
- D. 120 veces por minuto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · gasto cardíaco

En condiciones de reposo, el corazón late 72 veces por minuto y, con cada latido, eyecta unos 0,07 L de sangre a través de la aorta.

---

### 95

De acuerdo con el libro de Biología, en condiciones de reposo, ¿cuál es el gasto cardíaco en promedio?

- A. 5 L por minuto
- B. 0,07 L por minuto
- C. 72 L por minuto
- D. 15 L por minuto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · gasto cardíaco

Con cada latido, eyecta unos 0,07 L de sangre a través de la aorta. Por lo tanto, el gasto cardíaco es, en promedio, de 5 L por minuto.

---

### 96

De acuerdo con el libro de Biología, ¿cuál es el orden de los vasos por los que la sangre abandona el corazón hasta los capilares?

- A. Arterias grandes → arterias ramificadas más pequeñas → arteriolas → capilares sanguíneos
- B. Capilares → arteriolas → arterias → venas
- C. Venas → vénulas → capilares → arterias
- D. Arteriolas → arterias grandes → vénulas → capilares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · vasos sanguíneos

La sangre abandona el corazón a través de las arterias grandes hasta llegar a arterias ramificadas más pequeñas; luego, pasa a arterias aún más delgadas: las arteriolas; por último, a redes de vasos de menor diámetro: los capilares sanguíneos.

---

### 97

De acuerdo con el libro de Biología, desde los capilares, ¿por qué venas pequeñas de mayor diámetro continúa la sangre?

- A. Las vénulas
- B. Las arteriolas
- C. Las venas cavas
- D. Las arterias coronarias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · vasos sanguíneos

Desde los capilares, la sangre continúa por venas pequeñas de mayor diámetro: las vénulas; luego, a través de venas más grandes, hasta retornar al corazón.

---

### 98

De acuerdo con el libro de Biología, ¿cómo difieren las paredes de las arterias y las venas?

- A. Las arterias tienen una pared muscular gruesa y elástica para mantener la presión, y las venas una pared más delgada y distensible
- B. Las arterias tienen una pared delgada y las venas una gruesa y elástica
- C. Ambas tienen paredes idénticas de músculo cardíaco
- D. Las arterias carecen de pared y las venas son musculares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · vasos sanguíneos

Las arterias poseen una pared muscular gruesa y elástica, apta para resistir y mantener la presión sanguínea, mientras que las venas poseen una pared más delgada y distensible.

---

### 99

De acuerdo con el libro de Biología, por su pared más delgada y distensible, ¿qué capacidad elevada tienen las venas?

- A. La de actuar como reservorios de sangre
- B. La de mantener alta la presión sanguínea
- C. La de oxigenar la sangre
- D. La de impulsar la sangre con fuerza

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · vasos sanguíneos

Las venas poseen una pared más delgada y distensible, de modo que estos vasos presentan baja resistencia, aunque elevada capacidad para actuar como reservorios de sangre.

---

### 100

De acuerdo con el libro de Biología, ¿cómo se denominan los sistemas en los que la sangre fluye a lo largo de dos lechos capilares distintos antes de retornar al corazón?

- A. Sistemas porta
- B. Sistemas coronarios
- C. Circulación pulmonar
- D. Sistemas linfáticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · sistemas porta

En la circulación sistémica existen varios sistemas a través de los cuales la sangre fluye a lo largo de dos lechos capilares distintos, conectados entre sí por venas o arterias, antes de ingresar a las venas grandes por las que retornan al corazón. Estos sistemas se denominan sistemas porta.

---

### 101

De acuerdo con el libro de Biología, en el sistema porta hepático, ¿hacia dónde es desviada la sangre venosa que fluye por los capilares del tubo digestivo?

- A. Hacia el hígado, por intermedio de la vena porta hepática
- B. Hacia los pulmones, por la arteria pulmonar
- C. Hacia el corazón, por las venas cavas
- D. Hacia el cerebro, por las arterias carótidas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · sistema porta hepático

Por intermedio del sistema porta hepático, la sangre venosa que fluye por los capilares del tubo digestivo es desviada hacia el hígado por intermedio de la vena porta hepática.

---

## Sub-lote 13 · La regulación del latido cardíaco (fig. 36-9, p. 849)

### 102

De acuerdo con el libro de Biología, ¿qué centros nerviosos ejercen la regulación nerviosa del latido cardíaco?

- A. Centros nerviosos ubicados en el bulbo raquídeo, que utilizan el sistema nervioso autónomo como vía eferente
- B. Centros ubicados en la corteza cerebral, de control voluntario
- C. El nódulo sinoauricular por sí solo
- D. Las arterias carótidas del cuello

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · regulación del latido

La regulación nerviosa del latido cardíaco es ejercida por centros nerviosos ubicados en el bulbo raquídeo que utilizan al sistema nervioso autónomo, tanto simpático como parasimpático, como vía eferente.

---

### 103

De acuerdo con el libro de Biología, ¿cómo actúan las fibras simpáticas y parasimpáticas sobre el nódulo sinoauricular?

- A. Las simpáticas lo estimulan y aumentan la frecuencia cardíaca; las parasimpáticas lo inhiben y la disminuyen
- B. Las simpáticas lo inhiben y las parasimpáticas lo estimulan
- C. Ambas aumentan la frecuencia cardíaca
- D. Ambas disminuyen la frecuencia cardíaca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · regulación del latido

Las fibras simpáticas estimulan el nódulo sinoauricular y, así, la frecuencia cardíaca aumenta, mientras que las fibras parasimpáticas lo inhiben, disminuyendo la frecuencia cardíaca.

---

### 104

De acuerdo con el libro de Biología, ¿qué es capaz de hacer la adrenalina, secretada a la sangre por estimulación simpática de la médula suprarrenal?

- A. Aumentar tanto la frecuencia de contracción como la fuerza desarrollada por el ventrículo
- B. Disminuir la frecuencia y la fuerza de contracción del corazón
- C. Cerrar la válvula aórtica
- D. Reducir el retorno venoso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · regulación del latido

Por medio de la estimulación simpática de la médula suprarrenal, se secreta adrenalina a la sangre. Esta hormona, cuya concentración en sangre aumenta en casos como el síndrome de estrés, es capaz de aumentar tanto la frecuencia de contracción como la fuerza desarrollada por el ventrículo.

---

### 105

De acuerdo con el libro de Biología, según la capacidad de autorregulación del corazón, ¿cuándo se contrae el músculo cardíaco con mayor intensidad y velocidad?

- A. En la medida en que se encuentre más elongado
- B. En la medida en que se encuentre más contraído
- C. Cuando disminuye el retorno venoso
- D. Cuando baja la concentración de adrenalina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · autorregulación cardíaca

El músculo cardíaco puede contraerse con mayor intensidad y velocidad en la medida en que se encuentre más elongado.

---

### 106

De acuerdo con el libro de Biología, ¿cómo se denomina el volumen de sangre bombeado por el corazón en un minuto?

- A. Gasto cardíaco
- B. Flujo sanguíneo
- C. Volumen de eyección
- D. Retorno venoso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · gasto cardíaco

El volumen de sangre bombeado por el corazón en un minuto se denomina gasto cardíaco.

---

### 107

De acuerdo con el libro de Biología, ¿a qué puede deberse un aumento del gasto cardíaco?

- A. A un aumento de la frecuencia cardíaca, del volumen de eyección o de ambos factores
- B. Únicamente a una disminución de la frecuencia cardíaca
- C. Al cierre de la válvula aórtica
- D. A la disminución del retorno venoso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · gasto cardíaco

Un aumento del gasto cardíaco puede deberse a un aumento de la frecuencia cardíaca, del volumen de eyección o de ambos factores.

---

### 108

De acuerdo con el libro de Biología, dado que los circuitos pulmonar y sistémico están dispuestos en serie, ¿cómo debe ser el gasto cardíaco de uno y otro ventrículo?

- A. Debe ser el mismo, necesariamente
- B. El del ventrículo izquierdo debe ser el doble
- C. El del ventrículo derecho debe ser mayor
- D. Deben ser independientes entre sí

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 849
**Subtema:** circulación · gasto cardíaco

Debido a que ambos circuitos (pulmonar y sistémico) se encuentran dispuestos en serie, el gasto cardíaco de uno y otro ventrículo debe ser el mismo, necesariamente.

---

## Sub-lote 14 · La resistencia vascular y la regulación de la perfusión (fig. 36-10, p. 850)

### 109

De acuerdo con el libro de Biología, ¿de qué depende la resistencia vascular?

- A. De la viscosidad de la sangre y del diámetro de los vasos sanguíneos
- B. Únicamente de la frecuencia cardíaca
- C. Del número de glóbulos blancos
- D. De la cantidad de válvulas venosas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · resistencia vascular

La resistencia vascular depende, por un lado, de la viscosidad de la sangre y, por otro, del diámetro de los vasos sanguíneos.

---

### 110

De acuerdo con el libro de Biología, cuando el músculo liso de las arteriolas se contrae (vasoconstricción), ¿qué ocurre?

- A. Su luz disminuye y, por lo tanto, también disminuye el flujo hacia el lecho capilar que alimenta
- B. Su luz aumenta y aumenta el flujo de sangre a los capilares
- C. La presión en la aorta desciende bruscamente
- D. Se cierran las válvulas venosas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · vasoconstricción

Cuando el músculo liso de las arteriolas se contrae (vasoconstricción), su luz disminuye y, por lo tanto, también disminuye el flujo hacia el lecho capilar que alimenta.

---

### 111

De acuerdo con el libro de Biología, cuando el músculo liso de las arteriolas se relaja (vasodilatación), ¿qué ocurre?

- A. La arteriola aumenta su luz y el flujo de sangre a los capilares aumenta
- B. La arteriola disminuye su luz y el flujo a los capilares disminuye
- C. Las venas se contraen y elevan su presión
- D. La presión sistólica sube a 120 mm Hg

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · vasodilatación

Cuando el músculo liso se relaja, la arteriola aumenta su luz (vasodilatación) y el flujo de sangre a los capilares aumenta.

---

### 112

De acuerdo con el libro de Biología, ¿qué inervación reciben los músculos lisos de las arteriolas y qué sustancias los afectan?

- A. Inervación autonómica (principalmente simpática), y las hormonas adrenalina y noradrenalina y el óxido nítrico producido en el endotelio vascular
- B. Inervación voluntaria de la corteza cerebral, sin influencia hormonal
- C. Solo la acción del haz de His
- D. Únicamente la insulina y el glucagón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · regulación vascular

Estos músculos lisos reciben inervación autonómica (principalmente del sistema simpático) y se encuentran también afectados por las hormonas adrenalina y noradrenalina y el óxido nítrico producido en el endotelio vascular.

---

### 113

De acuerdo con el libro de Biología, ¿cómo se regula la perfusión a distintos tejidos según los requerimientos variables del animal?

- A. Mediante la constricción o la dilatación selectiva de las arteriolas
- B. Mediante la apertura y el cierre de las válvulas cardíacas
- C. Aumentando o disminuyendo el número de glóbulos rojos
- D. Modificando la viscosidad de la sangre en el hígado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · regulación de la perfusión

Mediante la constricción o la dilatación selectiva de las arteriolas se regula la perfusión a distintos tejidos y, de este modo, la provisión de O2 y nutrientes según los requerimientos variables del animal.

---

### 114

De acuerdo con el libro de Biología, cuando las temperaturas son bajas, ¿qué ocurre con el flujo de sangre hacia la piel, como respuesta termorregulatoria?

- A. Se reduce por vasoconstricción, disminuyendo la pérdida de calor desde la sangre hacia el ambiente
- B. Aumenta por vasodilatación, incrementando la pérdida de calor
- C. Se mantiene constante como el del cerebro
- D. Se detiene por completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · termorregulación

Cuando las temperaturas son bajas, el flujo de sangre hacia la piel se reduce por vasoconstricción, disminuyendo así la pérdida de calor desde la sangre hacia el ambiente, lo que constituye una típica respuesta termorregulatoria en mamíferos y aves.

---

### 115

De acuerdo con el libro de Biología, ¿cómo es el flujo de sangre al cerebro y por qué tiene particular importancia?

- A. Es constante, debido a la gran sensibilidad de las células cerebrales a una disminución de los niveles sanguíneos de O2 y de glucosa
- B. Es variable, según el ejercicio y la digestión
- C. Se reduce por vasoconstricción ante el frío
- D. Aumenta solo durante la digestión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · flujo cerebral

El flujo de sangre al cerebro es constante. Esto tiene particular importancia debido a que la gran sensibilidad de las células cerebrales a una disminución de los niveles sanguíneos de O2 y de glucosa constituye un aspecto crítico.

---

### 116

De acuerdo con el libro de Biología, ¿cuáles son ejemplos de manifestaciones emocionales que influyen sobre la vasoconstricción y la dilatación?

- A. El rubor causado al sentir vergüenza, la palidez por miedo y el dolor de pecho por la emoción (angina pectoris)
- B. El aumento del número de glóbulos rojos por estrés
- C. La coagulación de la sangre ante una herida
- D. La contracción de las válvulas venosas al caminar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · regulación emocional del flujo

Ciertas manifestaciones emocionales también influyen sobre la vasoconstricción y la dilatación y, de esta manera, sobre la distribución del flujo de sangre. Ejemplos familiares son el rubor causado al sentir vergüenza, la palidez por miedo, la sensación de dolor en el pecho y en el brazo izquierdo desencadenada por la emoción (angina pectoris).

---

## Sub-lote 15 · La presión sanguínea (p. 850)

### 117

De acuerdo con el libro de Biología, ¿qué es la presión sanguínea?

- A. Una medida de la fuerza por unidad de área que ejerce la sangre sobre las paredes de los vasos sanguíneos
- B. El volumen de sangre bombeado por el corazón por minuto
- C. El número de latidos del corazón por minuto
- D. La viscosidad de la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · presión sanguínea

La presión sanguínea es una medida de la fuerza por unidad de área que ejerce la sangre sobre las paredes de los vasos sanguíneos.

---

### 118

De acuerdo con el libro de Biología, ¿dónde se mide habitualmente la presión arterial?

- A. En la arteria del brazo
- B. En la arteria carótida del cuello
- C. En la vena cava inferior
- D. En la aorta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · presión arterial

La presión arterial habitualmente se mide en la arteria del brazo.

---

### 119

De acuerdo con el libro de Biología, ¿a qué corresponde la presión sanguínea sistólica de 120 mm Hg de un adulto joven?

- A. A cuando los ventrículos alcanzan su contracción máxima
- B. A cuando los ventrículos se relajan
- C. A cuando las aurículas se llenan de sangre
- D. A cuando se cierra la válvula aórtica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · presión sistólica

La presión sanguínea normal de un adulto joven es de 120 milímetros de mercurio (mm Hg) cuando los ventrículos alcanzan su contracción máxima (presión sanguínea sistólica).

---

### 120

De acuerdo con el libro de Biología, ¿a qué corresponde la presión diastólica de 80 mm Hg?

- A. A cuando los ventrículos se relajan
- B. A cuando los ventrículos alcanzan su contracción máxima
- C. A cuando se abre la válvula aórtica
- D. A cuando la sangre entra en la aorta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · presión diastólica

De 80 mm Hg cuando estos se relajan (presión diastólica). Estos valores se expresan como una presión sanguínea de 120/80.

> Este reactivo forma par con el 119 (sistólica: contracción máxima, 120 / diastólica: relajación, 80).

---

### 121

De acuerdo con el libro de Biología, ¿dónde es máxima y dónde mínima la presión sanguínea?

- A. Máxima en la aorta y mínima en las grandes venas que retornan la sangre al corazón
- B. Máxima en los capilares y mínima en la aorta
- C. Máxima en las venas y mínima en las arterias
- D. Igual en todos los tramos del circuito

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · presión sanguínea

La presión sanguínea es máxima en la aorta y mínima en las grandes venas que retornan la sangre al corazón.

---

### 122

De acuerdo con el libro de Biología, ¿dónde se regula principalmente el volumen circulante de sangre, un tercer factor que determina la presión?

- A. En los riñones
- B. En el hígado
- C. En el bazo
- D. En la médula ósea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · presión sanguínea

El volumen circulante de sangre, que se regula principalmente en los riñones, es un tercer factor relevante que determina la presión.

---

## Sub-lote 16 · La anatomía de arterias y venas (figs. 36-10 y 36-11, p. 850)

### 123

De acuerdo con el libro de Biología, ¿en cuántas capas están constituidas las paredes de las arterias?

- A. En tres capas: la interna o endotelio, la media con músculo liso y tejidos elásticos, y la externa de colágeno y tejidos de sostén
- B. En una única capa de endotelio
- C. En dos capas: endotelio y músculo cardíaco
- D. En cuatro capas de tejido conjuntivo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · anatomía de los vasos

Las arterias tienen las paredes más gruesas y más fuertes, y están constituidas por tres capas. La capa interna, o endotelio, forma el revestimiento interior de los vasos y está en contacto directo con la sangre; la capa media contiene músculo liso y tejidos elásticos; la capa externa, también elástica, está constituida por colágeno y otros tejidos de sostén.

---

### 124

De acuerdo con el libro de Biología, ¿cuál es la capa interna de los vasos, que forma el revestimiento interior en contacto directo con la sangre?

- A. El endotelio
- B. La capa media de músculo liso
- C. La capa externa de colágeno
- D. El miocardio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · anatomía de los vasos

La capa interna, o endotelio, forma el revestimiento interior de los vasos y está en contacto directo con la sangre.

---

### 125

De acuerdo con el libro de Biología, gracias a su elasticidad, ¿qué característica tienen las arterias?

- A. Se estiran cuando la sangre se vierte en ellas y mantienen presión
- B. No se estiran y no oponen resistencia a la sangre
- C. Albergan el mayor volumen de sangre del circuito
- D. Carecen de músculo liso en sus paredes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · anatomía de los vasos

Dada su elasticidad, las arterias se estiran cuando la sangre se vierte en ellas, al mismo tiempo que oponen una resistencia importante a la presión que ejerce la sangre sobre sus paredes. En otras palabras, son vasos que mantienen presión.

---

### 126

De acuerdo con el libro de Biología, ¿por qué las extracciones de sangre se realizan punzando venas y no arterias?

- A. Porque las venas son más delgadas y distensibles, no mantienen presión y pueden albergar un gran volumen sanguíneo
- B. Porque las venas tienen paredes más gruesas y elásticas que las arterias
- C. Porque las venas mantienen mayor presión que las arterias
- D. Porque las arterias carecen de sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 850
**Subtema:** circulación · anatomía de los vasos

Las paredes de las venas [...] son más delgadas y menos elásticas; es decir, son más distensibles. Esto no les permite mantener presión, aunque pueden albergar un gran volumen sanguíneo. Esta es la razón por la cual las extracciones de sangre se realizan punzando venas y no arterias.

---

## Sub-lote 17 · El centro de regulación cardiovascular y el retorno venoso (figs. 36-12 y 36-13, p. 851)

### 127

De acuerdo con el libro de Biología, ¿dónde se localiza el centro de regulación cardiovascular?

- A. En el bulbo, una parte pequeña del encéfalo que se continúa con la médula espinal
- B. En la corteza cerebral
- C. En el nódulo sinoauricular del corazón
- D. En los riñones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · centro de regulación cardiovascular

La descarga nerviosa que controla la contracción del músculo liso de los vasos sanguíneos, junto con la actividad nerviosa que regula el ritmo cardíaco y la potencia del latido está coordinada por el centro de regulación cardiovascular. Este centro se localiza en el bulbo, una parte pequeña del encéfalo que se continúa con la médula espinal.

---

### 128

De acuerdo con el libro de Biología, ¿por qué las venas almacenan una cantidad importante de sangre?

- A. Porque sus paredes delgadas y sus diámetros relativamente grandes ofrecen poca resistencia al flujo sanguíneo
- B. Porque sus paredes gruesas y elásticas mantienen la presión
- C. Porque poseen el mayor número de válvulas
- D. Porque están en contacto directo con el corazón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · retorno venoso

Las venas, con sus paredes delgadas y sus diámetros relativamente grandes, ofrecen poca resistencia al flujo sanguíneo, de manera que almacenan una cantidad importante de sangre.

---

### 129

De acuerdo con el libro de Biología, ¿qué función cumplen las válvulas de las venas?

- A. Evitan el reflujo de sangre
- B. Oxigenan la sangre en los tejidos
- C. Aumentan la presión sistólica
- D. Regulan la frecuencia cardíaca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · válvulas venosas

Las válvulas de las venas evitan el reflujo de sangre.

---

### 130

De acuerdo con el libro de Biología, ¿cómo se intensifica el retorno de sangre venosa al corazón?

- A. Por las contracciones de los músculos esqueléticos de los miembros, que comprimen las venas y elevan la presión en su interior
- B. Por la contracción de las arteriolas
- C. Por el aumento de la viscosidad de la sangre
- D. Por el cierre de la válvula aórtica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · retorno venoso

El retorno de sangre venosa al corazón se intensifica por las contracciones de los músculos esqueléticos de los miembros. Cuando una persona camina, los músculos de las piernas comprimen las venas que yacen entre los músculos que se contraen. La presión dentro de las venas se eleva y se incrementa el flujo.

---

### 131

De acuerdo con el libro de Biología, ¿qué provoca la aparición de várices?

- A. La distensión anormal de las paredes venosas, que vuelve defectuoso el cierre de las válvulas y acumula sangre en las venas
- B. La contracción excesiva de las arteriolas
- C. El aumento de la presión sistólica en la aorta
- D. La falta de glóbulos blancos en la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · várices

La edad avanzada o la permanencia prolongada en posición de pie provocan la distensión anormal de las paredes venosas, que aumenta el diámetro de las venas y, en consecuencia, el cierre de las válvulas se torna defectuoso. De esta manera [...] se produce una acumulación de sangre en las venas [...] y genera la aparición de várices.

---

### 132

De acuerdo con el libro de Biología, ¿en qué tramo del circuito es mínima la velocidad del flujo sanguíneo?

- A. En los capilares, cuyo número es inmenso
- B. En la aorta
- C. En las venas cavas
- D. En las arteriolas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · velocidad del flujo

La velocidad del flujo sanguíneo depende inversamente del área transversal conjunta que se verifica en cada tramo del circuito; es mínima en los capilares, cuyo número es inmenso.

---

### 133

De acuerdo con el libro de Biología, ¿qué vasos constituyen el mayor "depósito" de sangre del circuito?

- A. Las venas, por ser distensibles
- B. Las arterias, por ser elásticas
- C. Los capilares, por ser numerosos
- D. Las arteriolas, por tener músculo liso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · reservorio venoso

Al ser distensibles, las venas constituyen el mayor "depósito" de sangre del circuito.

---

### 134

De acuerdo con el libro de Biología, ¿cómo actúan las válvulas situadas dentro del sistema venoso?

- A. Se abren y permiten el movimiento de la sangre hacia el corazón, y se cierran para evitar el retroceso
- B. Se abren solo durante la sístole ventricular
- C. Permiten el paso de la sangre en ambos sentidos
- D. Regulan la frecuencia cardíaca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 851
**Subtema:** circulación · válvulas venosas

Las válvulas situadas a intervalos dentro del sistema venoso se abren y permiten el movimiento de la sangre hacia el corazón (válvula superior) y se cierran y evitan, así, el retroceso (válvula inferior).

---

## Sub-lote 18 · Los barorreceptores y el reflejo cardiovascular (p. 852)

### 135

De acuerdo con el libro de Biología, ¿qué detectan los barorreceptores (receptores de presión)?

- A. El estiramiento de las paredes de los vasos sanguíneos, consecuencia de las diferentes presiones sanguíneas en su interior
- B. La concentración de O2 y CO2 de la sangre
- C. Las variaciones del pH sanguíneo
- D. La temperatura de la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · barorreceptores

Los barorreceptores (receptores de presión) detectan el estiramiento de las paredes de los vasos sanguíneos, que es consecuencia de las diferentes presiones sanguíneas en su interior.

---

### 136

De acuerdo con el libro de Biología, ¿dónde se encuentran principalmente los barorreceptores?

- A. En las arterias carótidas, la aorta, las venas cavas y el corazón
- B. En los riñones y el hígado
- C. En los capilares sistémicos
- D. En los nódulos linfáticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · barorreceptores

Estos receptores se encuentran principalmente en las arterias carótidas, la aorta, las venas cavas y el corazón.

---

### 137

De acuerdo con el libro de Biología, ¿a qué son sensibles los quimiorreceptores ubicados en esos vasos?

- A. A cambios en la concentración de O2 y CO2 de la sangre y a variaciones en el pH sanguíneo
- B. Al estiramiento de las paredes de los vasos sanguíneos
- C. A la temperatura de la piel
- D. A la viscosidad de la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · quimiorreceptores

En los mismos vasos se ubican también quimiorreceptores sensibles a cambios en la concentración de O2 y CO2 de la sangre, así como a variaciones en el pH sanguíneo.

---

### 138

De acuerdo con el libro de Biología, ¿cuáles son los órganos efectores del reflejo cardiovascular?

- A. El corazón y los vasos sanguíneos
- B. Los riñones y el hígado
- C. Los pulmones y las branquias
- D. Los nódulos linfáticos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · reflejo cardiovascular

El centro de regulación cardiovascular recibe e integra información a partir de los dos tipos de receptores y desencadena una respuesta de tipo refleja. Los órganos efectores del reflejo son el corazón y los vasos sanguíneos.

---

### 139

De acuerdo con el libro de Biología, mediante el control por retroalimentación negativa, cuando la presión sanguínea desciende, ¿qué ocurre?

- A. La actividad del corazón aumenta y los vasos sanguíneos se contraen, lo cual eleva la presión sanguínea hasta su valor normal
- B. La actividad del corazón disminuye y los vasos sanguíneos se dilatan
- C. Los barorreceptores dejan de responder al estiramiento
- D. La sangre se desvía hacia el sistema linfático

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · reflejo cardiovascular

Cuando la presión desciende, la actividad del corazón aumenta y los vasos sanguíneos se contraen, lo cual eleva la presión sanguínea hasta su valor normal.

---

## Sub-lote 19 · Los capilares y la difusión de sustancias (p. 852)

### 140

De acuerdo con el libro de Biología, ¿por qué los capilares son las principales estructuras del intercambio de sustancias entre la sangre y los tejidos?

- A. Porque tienen paredes en extremo delgadas, constituidas por una sola capa de células que forma el endotelio
- B. Porque tienen paredes gruesas y musculares
- C. Porque poseen válvulas que evitan el reflujo
- D. Porque contienen la mayor cantidad de sangre del circuito

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · capilares

Los capilares son las principales estructuras en las que se produce el intercambio de sustancias entre la sangre y los tejidos, debido a que tienen paredes en extremo delgadas, constituidas por una sola capa de células que forma el endotelio.

---

### 141

De acuerdo con el libro de Biología, ¿a qué distancia máxima de un capilar se encuentra cualquier célula del cuerpo humano?

- A. A no más de 130 micrómetros
- B. A no más de 5 micrómetros
- C. A no más de 20 micrómetros
- D. A no más de 130 milímetros

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · densidad capilar

No hay célula en el cuerpo humano que esté a más de 130 micrómetros de un capilar, una distancia lo suficientemente pequeña para la difusión eficiente del O2, CO2, iones, hormonas y otras sustancias disueltas de bajo peso molecular.

---

### 142

De acuerdo con el libro de Biología, ¿por qué es importante que la velocidad del flujo sanguíneo sea mínima en los capilares?

- A. Porque permite que la difusión de diferentes sustancias se produzca de manera eficiente
- B. Porque aumenta la presión sanguínea
- C. Porque acelera el retorno venoso
- D. Porque impide el intercambio de sustancias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · capilares

Si bien el flujo sanguíneo es constante a lo largo del circuito, su velocidad es mínima en los capilares, lo que permite que la difusión de diferentes sustancias se produzca de manera eficiente.

---

### 143

De acuerdo con el libro de Biología, ¿cómo es el área transversal conjunta de los numerosísimos capilares dispuestos en paralelo?

- A. Es la mayor de todo el sistema circulatorio
- B. Es la menor de todo el sistema circulatorio
- C. Es igual a la de la aorta
- D. Es igual a la de las venas cavas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · capilares

El área transversal de un solo capilar es mínima, aunque el área transversal conjunta, resultante de la suma de las áreas de los numerosísimos capilares dispuestos en paralelo, es la mayor de todo el sistema circulatorio.

---

## Sub-lote 20 · El sistema linfático (fig. 36-14, p. 852-853)

### 144

De acuerdo con el libro de Biología, en los humanos, ¿qué fracción del filtrado retorna al sistema circulatorio mediante el sistema linfático?

- A. Una cierta fracción, de 2 a 4 L por día
- B. La totalidad de los 20 L filtrados por día
- C. El 2% recuperado por los capilares sistémicos
- D. Ninguna fracción; todo se pierde

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · sistema linfático

En los humanos, si bien el filtrado representa un 2% del plasma circulante, al cabo de un día se filtran unos 20 L. La mayor parte de ese filtrado es recuperada por los mismos capilares sistémicos, pero una cierta fracción (de 2 a 4 L) retorna al sistema circulatorio mediante el sistema linfático.

---

### 145

De acuerdo con el libro de Biología, ¿a qué se asemejan los vasos linfáticos más grandes en su estructura?

- A. A las venas, con una capa de músculo liso y un sistema de válvulas que asegura el tránsito del líquido en un solo sentido
- B. A las arterias, con paredes gruesas y elásticas
- C. A los capilares sanguíneos, sin pared muscular
- D. Al miocardio del corazón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · vasos linfáticos

Los vasos más grandes son similares a las venas en su estructura: presentan una capa de músculo liso que les permite contraerse y un sistema de válvulas que asegura el tránsito del líquido en un solo sentido.

---

### 146

De acuerdo con el libro de Biología, ¿cómo reingresa la linfa al torrente sanguíneo?

- A. Mediante el conducto torácico y el conducto linfático derecho, que desembocan en las venas subclavias, las cuales drenan en la vena cava superior
- B. Mediante la arteria aorta hacia los tejidos del cuerpo
- C. Directamente desde los capilares linfáticos al corazón
- D. A través de los riñones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 852
**Subtema:** circulación · sistema linfático

La linfa reingresa en el torrente sanguíneo mediante el conducto torácico, que desemboca en la vena subclavia izquierda, y el conducto linfático derecho, que desemboca en la vena subclavia derecha. Estas dos venas drenan en la vena cava superior.

---

### 147

De acuerdo con el libro de Biología, en los mamíferos, ¿cómo se mueve la linfa?

- A. Por la contracción de los vasos linfáticos y por la acción de los músculos del cuerpo
- B. Por el bombeo directo del corazón
- C. Por la presión de la aorta
- D. Por la difusión simple a través del endotelio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · sistema linfático

En los mamíferos, la linfa se mueve por la contracción de los vasos linfáticos y por la acción de los músculos del cuerpo.

---

### 148

De acuerdo con el libro de Biología, ¿qué son los nódulos o ganglios linfáticos?

- A. Masas de tejido esponjoso distribuidas en todo el sistema linfático, sitios de proliferación de los linfocitos
- B. Válvulas que evitan el reflujo de la linfa
- C. Conductos ciegos ubicados en el espacio intercelular
- D. Corazones linfáticos de los anfibios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · ganglios linfáticos

Los nódulos o ganglios linfáticos son masas de tejido esponjoso distribuidas en todo el sistema linfático. Son los sitios de proliferación de los linfocitos –glóbulos blancos especializados, que son efectores de la respuesta inmunitaria–.

---

### 149

De acuerdo con el libro de Biología, además de la proliferación de linfocitos, ¿qué se elimina en los ganglios linfáticos?

- A. Los restos celulares y las partículas extrañas de la linfa antes de que penetren en la sangre
- B. El CO2 de la respiración celular
- C. La urea del plasma
- D. Los glóbulos rojos envejecidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · ganglios linfáticos

En estos ganglios se eliminan, además, los restos celulares y las partículas extrañas de la linfa antes de que penetren en la sangre.

---

### 150

De acuerdo con el libro de Biología, ¿qué diferencia importante tienen los capilares linfáticos respecto del sistema circulatorio?

- A. Son conductos ciegos, sin salida, ubicados en el espacio intercelular, que no forman parte de un circuito continuo
- B. Poseen paredes gruesas y musculares
- C. Transportan sangre oxigenada
- D. Forman un circuito cerrado con el corazón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · capilares linfáticos

Los capilares linfáticos son conductos ciegos, sin salida, que se ubican en el espacio intercelular y no forman parte de un circuito continuo.

---

### 151

De acuerdo con el libro de Biología, ¿cómo se conoce el líquido que transporta el sistema linfático?

- A. Linfa
- B. Plasma
- C. Hemolinfa
- D. Suero

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · linfa

El líquido que transporta el sistema linfático se conoce como linfa.

---

### 152

De acuerdo con el libro de Biología, además de su función circulatoria, ¿qué transporta la linfa desde el tubo digestivo al torrente sanguíneo?

- A. Las grasas absorbidas en el tubo digestivo
- B. El O2 captado en los pulmones
- C. La urea filtrada en los riñones
- D. Los glóbulos rojos de la médula ósea

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · linfa

Como se verá en el capítulo 37, la linfa es, además, el medio por el cual las grasas absorbidas en el tubo digestivo se transportan al torrente sanguíneo.

---

### 153

De acuerdo con el libro de Biología, ¿qué poseen algunos vertebrados no mamíferos, como muchos anfibios, para propulsar la linfa?

- A. "Corazones linfáticos"
- B. Un segundo bulbo raquídeo
- C. Branquias linfáticas
- D. Válvulas aórticas adicionales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 853
**Subtema:** circulación · sistema linfático

Algunos vertebrados no mamíferos (como el caso de muchos anfibios) poseen "corazones linfáticos" capaces de propulsar la linfa.

---

**Reactivos en este archivo:** 153
