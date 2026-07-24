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
cavidades—; f: aves y mamíferos con aurícula y ventrículo divididos en dos).

**Pendiente:** el capítulo 36 está EN CURSO; sigue desde la página impresa 844 (hoja 890) en adelante (la composición de la sangre de los vertebrados, la bomba cardíaca y el sistema de vasos sanguíneos, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). De la materia de Biología, además de este capítulo, sigue sin empezar el capítulo 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

**Reactivos en este archivo:** 19
