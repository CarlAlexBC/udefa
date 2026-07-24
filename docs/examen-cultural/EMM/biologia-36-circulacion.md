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
8 (149), 11 (162), 12 (131), 31 (84), 32 (271) y 35 (166). Tras el 36 sigue el 37.

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
sanguínea (la hemorragia y la necrosis), más la fig. 36-5 del linfocito.

**Pendiente:** el capítulo 36 está EN CURSO; sigue desde la página impresa 846 (hoja 892) en adelante (el mecanismo de la coagulación sanguínea, la bomba cardíaca y el sistema de vasos sanguíneos, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). De la materia de Biología, además de este capítulo, sigue sin empezar el capítulo 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

**Reactivos en este archivo:** 50
