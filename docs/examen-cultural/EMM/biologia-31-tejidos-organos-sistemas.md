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
conjuntiva). De las **páginas 743-744** se cubren las microvellosidades, la piel en
detalle (fig. 31-6: epidermis viva/muerta con queratina, melanocitos y melanina,
glándulas sudoríparas y sebáceas, el tejido adiposo como conectivo) y los tejidos
conjuntivos (su función de reunir/apoyar/proteger, la matriz abundante líquida
—sangre, linfa, hemolinfa— o sólida —cartílago y hueso—, el plasma, el tejido
cartilaginoso y sus zonas en el adulto, y el tejido óseo con fosfato de calcio). De
la **página 745** se cubre el cuadro 31-2 de los tejidos conjuntivos especializados
(adiposo blanco con adipocitos e hipodermis; sanguíneo con glóbulos, plaquetas y
plasma; cartilaginoso con condrocitos; óseo con hidroxiapatita y su papel en la
homeostasis del calcio) y el esqueleto humano (fig. 31-7: 206 huesos, 29 del cráneo
—14 de la cara y 6 de los oídos—, 27 por mano y 26 por pie). De la **página 746** se
cubre el tejido muscular: las células especializadas en la contracción, los dos
tipos (estriado con bandas y liso sin bandas) y la clasificación esquelético
(voluntario) / cardíaco (estriado pero involuntario) / liso (involuntario).

**Pendiente:** el capítulo 31 está EN CURSO; sigue desde la página impresa 747 (hoja 793) en adelante (el tejido nervioso y la neurona, y luego los órganos y sistemas de órganos; el capítulo cierra en la p. 751, con el ensayo de cierre en la 752 y las situaciones problemáticas en la 753). Queda pendiente, además, el Cuadro 31-1 "Uniones entre células" (p. 743, cifrado como recuadro: hay que renderizarlo) y el Ensayo 31-1 "Diversidad de los sistemas de sostén". De la materia de Biología siguen sin empezar los capítulos 32, 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

De acuerdo con el libro de Biología, en el capítulo 31 sobre los tejidos, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, ¿cuántos tipos diferentes de células hay en el cuerpo humano y en cuántos tipos de tejidos se agrupan?

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

## Sub-lote 7 · La piel y los epitelios en detalle (figs. 31-5 y 31-6, pp. 743-744)

### 33

De acuerdo con el libro de Biología, ¿qué son las microvellosidades que tienen muchas células epiteliales, y para qué sirven?

- A. Proyecciones citoplasmáticas que se extienden como finos dedos y aumentan la superficie de intercambio
- B. Células muertas ricas en queratina
- C. Glándulas que secretan sudor
- D. Vasos sanguíneos que irrigan la dermis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 743
**Subtema:** tejidos, órganos y sistemas · tejido epitelial

Muchas células epiteliales tienen microvellosidades, proyecciones citoplasmáticas que se extienden como finos dedos y aumentan así la superficie de intercambio.

### 34

De acuerdo con el libro de Biología, según la figura 31-6, ¿cómo está estratificada la epidermis?

- A. En una capa interna de células epiteliales vivas y una capa externa de células muertas, ricas en queratina
- B. En una sola capa de células vivas, sin capa externa
- C. En tres capas de tejido óseo
- D. En una única capa de tejido adiposo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · la piel

La epidermis se encuentra estratificada en una capa interna de células epiteliales vivas y en una capa externa de células muertas, ricas en queratina.

### 35

De acuerdo con el libro de Biología, según la figura 31-6, ¿qué células hay en la base de la epidermis y qué producen?

- A. Melanocitos, que producen melanina, el pigmento responsable del color de la piel
- B. Eritrocitos, que producen hemoglobina
- C. Osteocitos, que producen tejido óseo
- D. Linfocitos, que producen anticuerpos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · la piel

En la base de la epidermis hay melanocitos: células que producen melanina, el pigmento responsable del color de la piel.

### 36

De acuerdo con el libro de Biología, según la figura 31-6, ¿qué secretan las glándulas sudoríparas y las sebáceas de la piel?

- A. Las sudoríparas secretan agua, iones y desechos metabólicos; las sebáceas, sustancias grasas que lubrican la superficie de la piel
- B. Las sudoríparas secretan grasa; las sebáceas, agua
- C. Ambas secretan únicamente agua
- D. Ambas secretan hormonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · la piel

Las glándulas sudoríparas secretan agua, iones y desechos metabólicos, y las sebáceas secretan sustancias grasas que lubrican la superficie de la piel.

### 37

De acuerdo con el libro de Biología, el tejido graso o adiposo, que forma la capa aislante por debajo de la dermis, ¿de qué tipo de tejido es una forma?

- A. Del tejido conectivo (conjuntivo)
- B. Del tejido epitelial
- C. Del tejido muscular
- D. Del tejido nervioso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido graso o adiposo, que constituye la capa aislante por debajo de la dermis, también es una forma de tejido conectivo.

---

## Sub-lote 8 · Los tejidos conjuntivos: sangre, cartílago y hueso (cuadro 31-2, p. 744)

### 38

De acuerdo con el libro de Biología, ¿qué función cumplen los tejidos conjuntivos o conectivos respecto de los otros tres tipos de tejidos?

- A. Reúnen, dan apoyo y protegen a los tejidos epitelial, muscular y nervioso
- B. Transmiten los impulsos nerviosos
- C. Se contraen para producir movimiento
- D. Revisten las cavidades del cuerpo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

Los tejidos conjuntivos o conectivos reúnen, dan apoyo y protegen a los otros tres tipos de tejidos: epitelial, muscular y nervioso.

### 39

De acuerdo con el libro de Biología, a diferencia de los otros tejidos, ¿qué caracteriza a los tejidos conjuntivos?

- A. Tener una matriz extracelular abundante
- B. Tener una matriz extracelular escasa
- C. No tener matriz extracelular
- D. Estar formados por una sola célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

A diferencia de los otros tejidos, los tejidos conjuntivos se caracterizan por tener una matriz extracelular abundante.

### 40

De acuerdo con el libro de Biología, la matriz de los tejidos conjuntivos puede ser líquida o sólida. ¿Cuáles son ejemplos de cada una?

- A. Líquida: la sangre, la linfa y la hemolinfa; sólida: los tejidos cartilaginoso y óseo
- B. Líquida: el hueso; sólida: la sangre
- C. Solo puede ser líquida, nunca sólida
- D. Solo puede ser sólida, nunca líquida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

Esta matriz puede ser líquida, como la de la sangre y la linfa de los vertebrados y la hemolinfa de la mayoría de los invertebrados, o sólida, con distinto grado de dureza, como en los tejidos conjuntivos propiamente dichos: cartilaginoso y óseo.

### 41

De acuerdo con el libro de Biología, en la sangre, la linfa y la hemolinfa, ¿en qué están suspendidas las células (como los eritrocitos y los leucocitos)?

- A. En una matriz líquida, o plasma, que contiene numerosos iones y moléculas biológicamente activas
- B. En una matriz sólida de fosfato de calcio
- C. En el aire, sin ninguna matriz
- D. En una matriz de queratina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

Estas células están suspendidas en una matriz líquida, o plasma, que contiene numerosos iones y moléculas biológicamente activas.

### 42

De acuerdo con el libro de Biología, ¿cómo es el tejido cartilaginoso y qué constituye?

- A. Es resistente, aunque flexible; constituye el esqueleto de diversos grupos de peces y de los embriones de ciertos vertebrados, incluido el humano
- B. Es rígido por el fosfato de calcio; forma todos los huesos del adulto
- C. Es líquido; forma la sangre y la linfa
- D. Es contráctil; forma los músculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido cartilaginoso es resistente, aunque flexible; constituye el esqueleto de diversos grupos de peces y de los embriones de ciertos vertebrados, incluido el humano.

### 43

De acuerdo con el libro de Biología, en el ser humano adulto, ¿en qué zonas se retiene el cartílago?

- A. En la tráquea, la nariz y las orejas, los discos intervertebrales y los extremos de los huesos
- B. En el cerebro y la médula espinal
- C. En la sangre y la linfa
- D. En ninguna zona: desaparece por completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

En el estado de adulto, los humanos aún retenemos el cartílago en algunas zonas, como la tráquea, la nariz y las orejas, así como en los discos intervertebrales y en los extremos de los huesos.

### 44

De acuerdo con el libro de Biología, en el tejido óseo, ¿con qué está impregnada la matriz de colágeno y qué le otorga?

- A. Con fosfato de calcio, que otorga gran rigidez a los huesos y les permite proporcionar sostén al cuerpo
- B. Con queratina, que le da flexibilidad
- C. Con plasma, que le da fluidez
- D. Con melanina, que le da color

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 744
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

En el tejido óseo, la matriz de colágeno está impregnada con fosfato de calcio, que otorga gran rigidez a los huesos y les permite proporcionar sostén al cuerpo.

---

## Sub-lote 9 · Los tipos de tejido conjuntivo especializado (cuadro 31-2, p. 745)

### 45

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué contiene el tejido adiposo blanco y qué funciones cumple?

- A. Contiene adipocitos (células almacenadoras de lípidos); almacena energía, aísla y protege a los órganos vitales
- B. Contiene glóbulos rojos; transporta oxígeno por el cuerpo
- C. Contiene condrocitos; forma el cartílago
- D. Contiene cristales de hidroxiapatita; da rigidez a los huesos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido adiposo blanco contiene adipocitos (células almacenadoras de lípidos) en íntima relación con un rico lecho vascular. Almacena energía, aísla y protege a los órganos vitales.

### 46

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué capa forma el tejido adiposo blanco por debajo de la piel?

- A. Una capa aislante llamada hipodermis
- B. La epidermis
- C. La dermis
- D. El periostio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido adiposo blanco forma una capa aislante por debajo de la piel (hipodermis).

### 47

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué contiene el tejido sanguíneo?

- A. Glóbulos rojos, blancos, plaquetas y plasma
- B. Adipocitos y lípidos almacenados
- C. Condrocitos y colágeno
- D. Cristales de hidroxiapatita

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido sanguíneo contiene glóbulos rojos, blancos, plaquetas y plasma.

### 48

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué transporta el tejido sanguíneo?

- A. Nutrientes, oxígeno, desechos y otras sustancias
- B. Únicamente oxígeno
- C. Únicamente desechos metabólicos
- D. Los impulsos nerviosos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido sanguíneo transporta nutrientes, oxígeno, desechos y otras sustancias.

### 49

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué células contiene el tejido cartilaginoso y qué secretan?

- A. Condrocitos, que secretan una matriz extracelular sólida, firme y elástica, con colágeno que la refuerza y sustancia fundamental
- B. Adipocitos, que almacenan lípidos
- C. Glóbulos rojos, que transportan oxígeno
- D. Osteocitos, que mineralizan la matriz con calcio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido cartilaginoso contiene condrocitos, células que secretan una matriz extracelular sólida, firme y elástica, con colágeno que la refuerza y sustancia fundamental.

### 50

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué forma el tejido cartilaginoso en el ser humano?

- A. Forma los primeros huesos del feto humano
- B. Forma la sangre del feto humano
- C. Forma la piel del feto humano
- D. Forma los músculos del feto humano

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido cartilaginoso forma los primeros huesos del feto humano.

### 51

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿con qué está mineralizada la matriz extracelular del tejido óseo?

- A. Con fosfato de calcio en forma de cristales de hidroxiapatita
- B. Con queratina
- C. Con lípidos almacenados
- D. Con plasma sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

En el tejido óseo, la matriz extracelular está mineralizada (fosfato de calcio en forma de cristales de hidroxiapatita).

### 52

De acuerdo con el libro de Biología, según el cuadro 31-2, ¿qué almacena el tejido óseo y qué regula?

- A. Almacena calcio y fosfato, que pueden pasar a la sangre, regulando la homeostasis de los niveles de calcio
- B. Almacena oxígeno, regulando la respiración
- C. Almacena lípidos, regulando la reserva de energía
- D. Almacena agua, regulando la temperatura corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · tejido conjuntivo

El tejido óseo almacena calcio y fosfato que pueden pasar a la sangre, regulando la homeostasis de los niveles de calcio.

---

## Sub-lote 10 · El esqueleto humano (fig. 31-7, p. 745)

### 53

De acuerdo con el libro de Biología, en el capítulo 31 sobre los tejidos, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, según la figura 31-7, ¿cuántos huesos contiene el esqueleto de un adulto?

- A. 206 huesos
- B. 300 huesos
- C. 150 huesos
- D. 46 huesos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · el esqueleto

El esqueleto de un adulto contiene 206 huesos.

### 54

De acuerdo con el libro de Biología, en el capítulo 31 sobre los tejidos, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, según la figura 31-7, ¿cuántos huesos pertenecen al cráneo y cómo se reparten?

- A. 29 huesos, incluidos los 14 de la cara y los 6 huesecillos de los oídos
- B. 14 huesos, todos de la cara
- C. 6 huesos, todos de los oídos
- D. 50 huesos en total en el cráneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · el esqueleto

Veintinueve huesos pertenecen al cráneo, incluidos los 14 huesos de la cara y los 6 huesecillos de los oídos.

### 55

De acuerdo con el libro de Biología, en el capítulo 31 sobre los tejidos, órganos y sistemas de los vertebrados, órganos y sistemas de los vertebrados, según la figura 31-7, ¿cuántos huesos hay en cada mano y en cada pie?

- A. 27 huesos en cada mano y 26 en cada pie
- B. 26 huesos en cada mano y 27 en cada pie
- C. 10 huesos en cada mano y 10 en cada pie
- D. 20 huesos en cada mano y 20 en cada pie

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 745
**Subtema:** tejidos, órganos y sistemas · el esqueleto

Hay 27 huesos en cada mano y 26 en cada pie.

---

## Sub-lote 11 · El tejido muscular (fig. 31-10, p. 746)

### 56

De acuerdo con el libro de Biología, ¿en qué están especializadas las células del tejido muscular?

- A. En la contracción
- B. En la recepción de estímulos
- C. En el revestimiento del cuerpo
- D. En la secreción de hormonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

El tejido muscular contiene células especializadas en la contracción.

### 57

De acuerdo con el libro de Biología, ¿cuáles son los dos tipos de tejido muscular?

- A. El músculo estriado (que muestra bandas transversales bajo el microscopio) y el músculo liso (sin bandas)
- B. El músculo voluntario y el involuntario, ambos con bandas
- C. El músculo esquelético y el cardíaco, ambos lisos
- D. El músculo óseo y el cartilaginoso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

Existen dos tipos de tejido muscular: el que forma el músculo estriado –llamado así porque bajo el microscopio muestra bandas transversales– y el del músculo liso, sin bandas.

### 58

De acuerdo con el libro de Biología, ¿por qué se llama estriado al músculo estriado?

- A. Porque bajo el microscopio muestra bandas transversales
- B. Porque produce estrías en la piel
- C. Porque es de color rayado a simple vista
- D. Porque no puede contraerse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

El músculo estriado es llamado así porque bajo el microscopio muestra bandas transversales.

### 59

De acuerdo con el libro de Biología, los músculos esqueléticos, unidos a los huesos y responsables del movimiento, ¿cómo se llaman también y por qué?

- A. Músculos voluntarios, porque pueden moverse a voluntad
- B. Músculos involuntarios, porque no se mueven a voluntad
- C. Músculos lisos, porque no tienen bandas
- D. Músculos cardíacos, porque forman el corazón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

Los músculos esqueléticos que, unidos a los huesos, son los responsables del movimiento. Estos músculos pueden moverse a voluntad y, por lo tanto, se los llama también músculos voluntarios.

### 60

De acuerdo con el libro de Biología, ¿qué constituye el músculo cardíaco y puede moverse a voluntad?

- A. Constituye las paredes del corazón y no puede moverse a voluntad
- B. Constituye los huesos y se mueve a voluntad
- C. Forma la pared del útero y la vejiga
- D. Reviste el interior del intestino delgado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

Otro tipo de músculo estriado es el músculo cardíaco, que constituye las paredes del corazón y no puede moverse a voluntad.

### 61

De acuerdo con el libro de Biología, ¿de qué forma parte el músculo liso y cómo es su movimiento?

- A. Forma parte de la pared de órganos internos (el útero, la vejiga, los órganos digestivos y los vasos sanguíneos); su movimiento no es voluntario
- B. Forma los huesos del esqueleto; su movimiento es voluntario
- C. Constituye las paredes del corazón
- D. Une los músculos a los huesos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

El músculo liso forma parte de la pared de órganos internos, como el útero, la vejiga, los órganos digestivos y los vasos sanguíneos, y su movimiento tampoco es voluntario.

### 62

De acuerdo con el libro de Biología, ¿qué músculos se incluyen en la categoría de músculos involuntarios?

- A. El músculo liso y el músculo cardíaco
- B. El músculo esquelético y el estriado
- C. Únicamente el músculo esquelético
- D. Todos los músculos estriados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 746
**Subtema:** tejidos, órganos y sistemas · tejido muscular

El músculo liso y el músculo cardíaco se incluyen en la categoría de músculos involuntarios.

> Clasificación del músculo, para no confundir (reactivos 57–62): por su aspecto es
> **estriado** (con bandas) o **liso** (sin bandas); por su control es **voluntario**
> o **involuntario**. El esquelético es estriado y voluntario; el cardíaco es
> estriado pero involuntario; el liso es involuntario.

---

**Reactivos en este archivo:** 62
