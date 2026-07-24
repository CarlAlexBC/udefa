# Biología · Capítulo 31 · Los tejidos, órganos y sistemas de los vertebrados

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(221 reactivos), 4 (190), 5 (157), 7 (240), 8 (149), 11 (162) y 12 (131). En el
temario, después del 12 viene el 31 (los capítulos 13 a 30 existen en el libro
pero NO entran).

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de texto
es lorem ipsum). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado.** El capítulo 31 pertenece a la
**Sección VI · Biología de los animales**. La portadilla está en la **hoja 785**
(página impresa 739): trae el apartado de apertura "Biología en contexto social ·
Donación de órganos", el título del capítulo y el epígrafe de Carl Sagan. **El
cuerpo empieza en la hoja 786** (página impresa 740), con la historia de la
anatomía. El desfase +46 se verificó aquí (hoja 786 = p. 740), no se calculó.

## Cobertura actual

Cubierta la página impresa **740**: la historia de la anatomía (Alcmeón de Crotona
hacia el 520 a. C., el fin y la reanudación de la disección en el Renacimiento,
Leonardo da Vinci) y el ser humano como vertebrado mamífero (el endoesqueleto óseo,
la médula espinal y el cráneo, el celoma, el diafragma y las cavidades torácica y
abdominal). De las **páginas 741-742** se cubre la jerarquía de organización (células
especializadas → tejidos → órganos → sistemas, fig. 31-3), los ~200 tipos de células
agrupados en cuatro tipos de tejidos (epitelial, conjuntivo, muscular y nervioso,
fig. 31-4), la cavidad abdominal, las características de los mamíferos
(termorreguladores, con pelo, que amamantan y paren crías vivas salvo los
monotremas), la matriz extracelular y el pasaje de la unicelularidad a la
multicelularidad. De la **página 742** se cubren los dos componentes de la matriz
(las proteínas fibrosas colágeno/elastina y la sustancia fundamental, sus estados y
por qué los huesos perduran), los tres tipos de uniones celulares (estrechas, de
anclaje y comunicantes), y el tejido epitelial (revestimiento en lámina continua, la
forma de las células, las glándulas, y la piel: epidermis epitelial + dermis
conjuntiva).

**Pendiente:** el capítulo 31 está EN CURSO; sigue desde la página impresa 743 (hoja 789) en adelante (el resto de la piel y sus glándulas, y los tejidos conjuntivo, muscular y nervioso en detalle). De la materia de Biología siguen sin empezar los capítulos 32, 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

## Sub-lote 1 · La historia de la anatomía y el ser humano como vertebrado (fig. 31-1, p. 740)

### 1

De acuerdo con el libro de Biología, ¿quién fue el primero en disecar un cadáver humano, alrededor del 520 a. C.?

- A. El médico griego Alcmeón de Crotona
- B. El artista Leonardo da Vinci
- C. El astrónomo Carl Sagan
- D. El médico Hugo de Vries

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · historia de la anatomía

El médico griego Alcmeón de Crotona, alrededor del 520 a. C., fue el primero en disecar un cadáver humano.

### 2

De acuerdo con el libro de Biología, tras haberse abandonado en la antigüedad, ¿en qué período se retomó la práctica de la disección?

- A. En el Renacimiento
- B. En la Edad de Piedra
- C. En el siglo XX
- D. Ya no se retomó nunca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · historia de la anatomía

La práctica de la disección se retomó en el Renacimiento.

### 3

De acuerdo con el libro de Biología, ¿qué tipo de esqueleto tiene el ser humano como vertebrado?

- A. Un endoesqueleto óseo, articulado, que sostiene el cuerpo y crece con él
- B. Un exoesqueleto de quitina que muda periódicamente
- C. Un esqueleto hidrostático, sin huesos
- D. No tiene ningún tipo de esqueleto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · Homo sapiens vertebrado

El ser humano es un vertebrado que tiene un endoesqueleto óseo, articulado, que sostiene el cuerpo y crece con él.

### 4

De acuerdo con el libro de Biología, ¿cómo están protegidos el cordón nervioso dorsal (médula espinal) y el cerebro en el ser humano?

- A. La médula espinal está rodeada por las vértebras y el cerebro está protegido dentro del cráneo
- B. La médula espinal está dentro del cráneo y el cerebro, en las vértebras
- C. Ambos están por fuera del esqueleto
- D. Ambos están dentro del diafragma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · Homo sapiens vertebrado

El cordón nervioso dorsal –o médula espinal– está rodeado por segmentos óseos –las vértebras– y el cerebro está protegido dentro del cráneo.

### 5

De acuerdo con el libro de Biología, ¿cómo se llama la cavidad que contiene el cuerpo humano, que se forma dentro del mesodermo del embrión en desarrollo?

- A. El celoma
- B. El cráneo
- C. El diafragma
- D. El endoesqueleto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · Homo sapiens vertebrado

El cuerpo humano contiene un celoma, una cavidad que se forma dentro del mesodermo del embrión en desarrollo.

### 6

De acuerdo con el libro de Biología, ¿qué músculo con forma de bóveda separa las cavidades torácica y abdominal?

- A. El diafragma
- B. El corazón
- C. El esófago
- D. La médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · Homo sapiens vertebrado

Estas cavidades están separadas por un músculo con forma de bóveda: el diafragma.

### 7

De acuerdo con el libro de Biología, ¿qué órganos contiene la cavidad torácica?

- A. El corazón, los pulmones y el esófago
- B. El estómago, el hígado y los riñones
- C. El cerebro y la médula espinal
- D. El intestino delgado y el colon

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · Homo sapiens vertebrado

La cavidad torácica contiene el corazón, los pulmones y el esófago.

### 8

De acuerdo con el libro de Biología, según la figura 31-1, ¿qué artista se dedicó de manera intensa a los estudios anatómicos, con dibujos meticulosos sobre los cuerpos que él mismo disecaba?

- A. Leonardo da Vinci (1452-1519)
- B. Alcmeón de Crotona
- C. Carl Sagan
- D. Thomas Morgan

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 740
**Subtema:** tejidos, órganos y sistemas · historia de la anatomía

Leonardo da Vinci (1452-1519) se dedicó, de manera intensa, a los estudios anatómicos y realizó dibujos meticulosos con tiza y tinta sobre los cuerpos que él mismo disecaba.

---

## Sub-lote 2 · De las células a los sistemas (p. 741)

### 9

De acuerdo con el libro de Biología, ¿cómo es la organización jerárquica que parte de las células especializadas?

- A. Las células especializadas forman tejidos; los tejidos, órganos; y los órganos integran sistemas
- B. Los sistemas forman órganos; los órganos, tejidos; y los tejidos, células
- C. Las células forman directamente sistemas, sin tejidos ni órganos
- D. Los tejidos forman células, y las células forman órganos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · niveles de organización

Las células especializadas se asocian y forman tejidos; los tejidos pueden unirse entre sí y formar órganos. Los órganos, a su vez, integran sistemas que llevan a cabo funciones complejas.

### 10

De acuerdo con el libro de Biología, la unión de tejidos que forma un órgano, ¿es solamente estructural?

- A. No; no solo es estructural, sino que implica un funcionamiento conjunto
- B. Sí; es solo estructural, sin ninguna función común
- C. Es solo funcional, sin ninguna relación estructural
- D. No existe ninguna unión entre los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · niveles de organización

Los tejidos pueden unirse entre sí y formar órganos; esta unión no solo es estructural, sino que implica un funcionamiento conjunto.

---

## Sub-lote 3 · Los cuatro tipos de tejidos y las cavidades (figs. 31-3 y 31-4, pp. 741-742)

### 11

De acuerdo con el libro de Biología, en el capítulo 31 sobre los tejidos, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, ¿cuántos tipos diferentes de células hay en el cuerpo humano y en cuántos tipos de tejidos se agrupan?

- A. Alrededor de 200 tipos de células, que se agrupan en solo cuatro tipos de tejidos
- B. Cuatro tipos de células, agrupadas en 200 tejidos
- C. Veinte tipos de células y veinte tipos de tejidos
- D. Un solo tipo de célula y un solo tipo de tejido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · tipos de tejidos

Existen alrededor de 200 tipos diferentes de células en el cuerpo humano, que se agrupan en solo cuatro tipos de tejidos.

### 12

De acuerdo con el libro de Biología, según la figura 31-4, ¿cuáles son los cuatro tipos de tejidos de los animales?

- A. Epitelial, conjuntivo (conectivo), muscular y nervioso
- B. Óseo, sanguíneo, cartilaginoso y adiposo
- C. Epitelial, óseo, sanguíneo y muscular
- D. Cardíaco, liso, esquelético y nervioso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · tipos de tejidos

Las células se agrupan en solo cuatro tipos de tejidos: epitelial, conectivo o conjuntivo, muscular y nervioso.

### 13

De acuerdo con el libro de Biología, ¿qué órganos contiene la cavidad abdominal?

- A. El estómago, los intestinos y el hígado, entre otros
- B. El corazón, los pulmones y el esófago
- C. El cerebro y la médula espinal
- D. Únicamente el diafragma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · Homo sapiens vertebrado

La cavidad abdominal contiene el estómago, los intestinos y el hígado, entre otros órganos.

### 14

De acuerdo con el libro de Biología, al igual que las aves, ¿cómo regulan su temperatura los mamíferos?

- A. Son termorreguladores: generan calor de manera interna y mantienen una temperatura corporal alta y relativamente constante, independiente de la temperatura ambiente
- B. Dependen por completo de la temperatura del ambiente
- C. No generan calor propio en ningún caso
- D. Regulan la temperatura solo por medio de las escamas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · los mamíferos

Al igual que las aves, los mamíferos son termorreguladores; es decir, generan calor de manera interna y así mantienen una temperatura corporal alta y relativamente constante e independiente de la temperatura ambiente.

### 15

De acuerdo con el libro de Biología, además de ser termorreguladores, ¿qué caracteriza a los mamíferos frente a los peces y las aves?

- A. Tienen pelo, en lugar de escamas o plumas, y amamantan a sus crías
- B. Tienen plumas y ponen huevos
- C. Tienen escamas y no cuidan a sus crías
- D. Carecen de pelo y de glándulas mamarias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · los mamíferos

Los mamíferos tienen pelo –en lugar de escamas o plumas, como los peces y las aves–. Al igual que todos los mamíferos, los humanos amamantan a sus crías.

### 16

De acuerdo con el libro de Biología, en los animales ovíparos (la mayoría de los invertebrados y casi todos los peces, anfibios y reptiles), ¿cómo es la progenie?

- A. Es independiente desde el momento en que emerge del huevo
- B. Requiere un período largo de cuidado parental
- C. Nace viva y es amamantada por la madre
- D. No logra sobrevivir al salir del huevo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · los mamíferos

En los animales ovíparos, como la mayoría de los invertebrados y casi todos los peces, anfibios y reptiles, la progenie es independiente desde el momento en el que emerge del huevo.

### 17

De acuerdo con el libro de Biología, ¿cómo nacen las crías de los mamíferos, y cuál es la excepción?

- A. Las hembras paren a sus crías vivas, excepto los monotremas
- B. Todos los mamíferos, sin excepción, ponen huevos
- C. Solo los monotremas paren crías vivas
- D. Las crías nacen de huevos, igual que en las aves

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · los mamíferos

Las hembras paren a sus crías vivas –excepto los monotremas–, en contraste con las aves y la mayoría de los peces, los anfibios y los reptiles, que ponen huevos.

---

## Sub-lote 4 · La matriz extracelular y la organización jerárquica (fig. 31-3, p. 741)

### 18

De acuerdo con el libro de Biología, ¿qué es la matriz extracelular?

- A. El conjunto de materiales localizados fuera de las células, producida y secretada en su mayor parte por las células a las que rodea
- B. El conjunto de órganos del sistema circulatorio
- C. El núcleo que contiene el material genético de la célula
- D. El líquido que se encuentra dentro de las células

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · matriz extracelular

La matriz extracelular es el conjunto de materiales localizados fuera de las células. En su mayor parte es producida y secretada por las células a las que rodea.

### 19

De acuerdo con el libro de Biología, según las investigaciones de los últimos años, ¿qué papel tiene la matriz extracelular en la organización y la función de los tejidos y órganos?

- A. Un papel protagónico, tan importante como el de las células mismas
- B. Un papel secundario y prescindible
- C. Ningún papel: es un material inerte
- D. Solo un papel de relleno entre los órganos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · matriz extracelular

Las investigaciones han mostrado que la matriz extracelular que rodea a las células tiene un papel protagónico en la organización y la función de tejidos y órganos tan importante como el de las células mismas.

### 20

De acuerdo con el libro de Biología, en la evolución de los seres vivos, ¿cómo se considera el pasaje de la unicelularidad a la multicelularidad?

- A. Un hecho de importancia singular
- B. Un hecho sin ninguna consecuencia
- C. Un retroceso evolutivo
- D. Un fenómeno que nunca llegó a ocurrir

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · niveles de organización

En la evolución de los seres vivos, el pasaje de la unicelularidad a la multicelularidad fue un hecho de importancia singular.

### 21

De acuerdo con el libro de Biología, según la figura 31-3, el corazón es un órgano constituido por células agrupadas en diversos tejidos; ¿cuáles son esos tejidos y de qué sistema forma parte el corazón?

- A. Tejidos epitelial, conjuntivo, nervioso y muscular; forma parte del sistema circulatorio
- B. Un solo tejido; no forma parte de ningún sistema
- C. Solo tejido nervioso; forma parte del sistema nervioso
- D. Solo tejido óseo; forma parte del esqueleto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 741
**Subtema:** tejidos, órganos y sistemas · niveles de organización

El corazón es un órgano constituido por células agrupadas en diversos tejidos: epitelial, conjuntivo, nervioso y muscular. A su vez, el corazón forma parte de un sistema: el sistema circulatorio.

---

## Sub-lote 5 · La matriz extracelular y las uniones entre las células (p. 742)

### 22

De acuerdo con el libro de Biología, ¿cuáles son los dos componentes principales que forman la matriz extracelular?

- A. Las proteínas fibrosas (distintos tipos de colágeno y elastina) y la sustancia fundamental
- B. El agua y las sales minerales
- C. El núcleo y el citoplasma de las células
- D. Las vértebras y el cráneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · matriz extracelular

Dos componentes principales forman la matriz: proteínas fibrosas –distintos tipos de colágeno y elastina– que le confieren resistencia y elasticidad, y la llamada sustancia fundamental, formada por hidratos de carbono libres y complejos de proteína.

### 23

De acuerdo con el libro de Biología, ¿qué le confieren a la matriz las proteínas fibrosas (el colágeno y la elastina)?

- A. Resistencia y elasticidad
- B. Color y olor
- C. Capacidad de contracción
- D. Impermeabilidad total al agua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · matriz extracelular

Las proteínas fibrosas –distintos tipos de colágeno y elastina– le confieren resistencia y elasticidad.

### 24

De acuerdo con el libro de Biología, la matriz extracelular puede ser líquida, gelatinosa, fibrosa, elástica o rígida. ¿Cuándo es rígida?

- A. Cuando se calcifica
- B. Cuando se congela
- C. Cuando se seca al aire
- D. Cuando se disuelve en agua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · matriz extracelular

La matriz extracelular puede ser líquida, gelatinosa, fibrosa, elástica o rígida (cuando se calcifica), según la proporción de fibras y las características de la sustancia fundamental que la componen.

### 25

De acuerdo con el libro de Biología, cuando un animal muere, ¿qué le ocurre a la matriz que explica que los huesos permanezcan casi intactos durante millones de años?

- A. Los componentes orgánicos se degradan y solo se conservan las sustancias inorgánicas, que mantienen la forma original del tejido
- B. Todos los componentes, orgánicos e inorgánicos, se conservan intactos
- C. Los componentes inorgánicos se degradan primero
- D. La matriz desaparece por completo de inmediato

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · matriz extracelular

Cuando un animal muere, los componentes orgánicos de la matriz se degradan y solo se conservan las sustancias inorgánicas que mantienen la forma original del tejido.

### 26

De acuerdo con el libro de Biología, ¿cuáles son los tres tipos básicos de uniones que mantienen unidas a las células?

- A. Las uniones estrechas, las uniones de anclaje y las uniones comunicantes
- B. Las uniones óseas, musculares y nerviosas
- C. Las uniones epiteliales, conjuntivas y adiposas
- D. Las uniones simples, dobles y triples

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · uniones celulares

Existen tres tipos básicos de uniones: las uniones estrechas, las uniones de anclaje y las uniones comunicantes.

---

## Sub-lote 6 · El tejido epitelial y la piel (fig. 31-5, p. 742)

### 27

De acuerdo con el libro de Biología, ¿qué hace el tejido epitelial y cómo es su estructura?

- A. Reviste el cuerpo, sus cavidades y el interior y el exterior de los órganos, formando una lámina continua con gran densidad de células y escasa matriz extracelular
- B. Se contrae para producir movimiento
- C. Transmite los impulsos nerviosos
- D. Da sostén al cuerpo con abundante matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · tejido epitelial

El tejido epitelial reviste el cuerpo y sus cavidades, así como el interior y el exterior de los órganos, y forma una lámina continua. Tiene una gran densidad de células embebidas en una escasa matriz extracelular.

### 28

De acuerdo con el libro de Biología, ¿qué debe atravesar la barrera que forma el tejido epitelial?

- A. Todo lo que se incorpora al cuerpo e interviene en su metabolismo
- B. Únicamente el agua
- C. Nada: es una barrera completamente impenetrable
- D. Solamente los impulsos nerviosos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · tejido epitelial

Todo lo que se incorpora al cuerpo e interviene en su metabolismo debe atravesar esta barrera.

### 29

De acuerdo con el libro de Biología, ¿qué determina el tipo de tejido epitelial resultante?

- A. La forma de las células (cuboides, cilíndricas o aplanadas) y la cantidad de capas en las que se agrupan
- B. El color de las células
- C. La temperatura del cuerpo
- D. La cantidad de matriz extracelular que producen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · tejido epitelial

La forma de las células –cuboides, cilíndricas o aplanadas– y la cantidad de capas en las que se agrupan determinan el tipo de tejido epitelial resultante.

### 30

De acuerdo con el libro de Biología, las células epiteliales especializadas en la secreción de sustancias de exportación forman parte de las glándulas. ¿Qué son las glándulas?

- A. Órganos que secretan sustancias, como el sudor, la saliva, la leche, las hormonas y las enzimas digestivas
- B. Órganos que solo transportan la sangre
- C. Tejidos especializados en la contracción
- D. Células nerviosas que transmiten estímulos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · tejido epitelial

Algunas células epiteliales están especializadas en la síntesis y la secreción de sustancias de exportación; en muchos casos, forman parte de glándulas, órganos que secretan sustancias, como el sudor, la saliva, la leche, las hormonas y las enzimas digestivas.

### 31

De acuerdo con el libro de Biología, la piel es el órgano más grande del cuerpo. ¿Por qué tejidos está formada?

- A. Por tejido epitelial (la epidermis) y tejido conjuntivo (la dermis)
- B. Por tejido muscular y tejido nervioso
- C. Solamente por tejido conjuntivo
- D. Solamente por tejido óseo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · la piel

La piel es el órgano más grande del cuerpo. Está formada por tejido epitelial, llamado epidermis, y tejido conjuntivo o dermis.

### 32

De acuerdo con el libro de Biología, ¿cuál es el tejido de la piel que se encuentra en contacto directo con el medio externo y constituye una barrera protectora?

- A. La epidermis
- B. La dermis
- C. El tejido adiposo subcutáneo
- D. El tejido óseo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 742
**Subtema:** tejidos, órganos y sistemas · la piel

La epidermis es el tejido de la piel que se encuentra en contacto directo con el medio externo. Por lo tanto, constituye una barrera protectora.

> Par que se confunde (reactivos 31 y 32): la **epidermis** es el tejido *epitelial*
> externo de la piel (barrera); la **dermis** es el tejido *conjuntivo* por debajo.
> "Epi-" = encima.

---

**Reactivos en este archivo:** 32
