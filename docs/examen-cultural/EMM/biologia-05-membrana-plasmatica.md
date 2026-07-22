# Biología · Capítulo 5 · Membrana plasmática

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(202 reactivos) y 4 (173).

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de
texto es lorem ipsum) — ver la nota del encabezado del capítulo 3.

```
python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" 135 <hoja> --desfase=46
```

## Alcance

Este archivo cubre el **capítulo 5 · Membrana plasmática**, que empieza en la
página impresa **89** (hoja 135 del PDF).

## Cobertura actual

Cubiertas las páginas impresas **89 a 92**:

- La historia del modelo de membrana: Langmuir, Gorter y Grendel (la bicapa),
  Cole y Danielli (las proteínas), Robertson (el modelo trilaminar).
- El grosor de la membrana.
- El modelo de balsas de membrana.
- El modelo de mosaico fluido de Singer y Nicolson; la disposición de los
  fosfolípidos (colas hidrófobas dentro, cabezas hidrófilas fuera).
- La composición química de la membrana: proteínas (~60%), lípidos (~40%),
  glúcidos (2–10%), y la cara externa de los glúcidos.
- La asimetría de las dos caras y la enzima translocadora.
- Las proteínas integrales y su orientación; el glucocálix; los movimientos en
  la bicapa; los dominios de membrana y la polaridad de las células intestinales.
- La unión estrecha; las proteínas periféricas (actina, espectrina); los hidratos
  de carbono y la comunicación celular; y el cuadro de funciones de las proteínas
  integrales (transportadoras, canales, bombas, receptores, antigénicas, enzimas).
- Qué atraviesa la bicapa (polar vs no polar); las proteínas de transporte
  (canales y transportadores); las acuaporinas; los poros y las toxinas
  formadoras de poros; la función de la membrana y la permeabilidad selectiva.
- Los transportadores y sus tres clases (uniporte, simporte, antiporte); qué
  facilita el paso por los fosfolípidos (polaridad, tamaño, carga).
- La carga y las moléculas que cruzan la bicapa (O₂, CO₂, urea, agua,
  esteroides); la difusión (a favor del gradiente, sin gasto); la ósmosis (el
  agua va hacia donde hay más soluto).
- Difusión simple vs facilitada; el transporte activo (en contra del gradiente,
  con energía); la tonicidad (iso/hipo/hipertónica); la turgencia y las vacuolas
  contráctiles.

**Pendiente:** el resto del capítulo 5, y los capítulos 7, 8, 11, 12, 31, 32, 35,
36 y 37.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico. Se
privilegian las **definiciones, procesos y estructuras** sobre los cálculos.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". El reactivo reproduce el libro
**exacto**: la opción correcta y la justificación son cita textual, sin
parafrasear ni bajar la dificultad. Cuatro opciones del mismo tipo y magnitud.

El enunciado **alterna las tres fórmulas del Anexo "H"** — "De acuerdo con",
"De conformidad con" y "En relación con" —, y la correcta se escribe siempre en
A porque el importador baraja las opciones.

**Referencia al capítulo — formato B, sólo cuando aclara.** El reactivo que es un
dato suelto (cifra, fecha, año) lleva la referencia en redacción natural: *"…en
el capítulo 5 sobre la membrana plasmática, ¿…?"*. El que ya nombra su concepto
queda limpio. El reparto lo hace `tools/especificar-reactivos.js` con
`--tema "la membrana plasmática"`.

---

## Sub-lote 1 · El grosor de la membrana (p. 89)

### 1

De acuerdo con el libro de Biología, en el capítulo 5 sobre la membrana plasmática, ¿entre qué valores oscila el grosor de las membranas?

- A. Entre 7 y 9 nanómetros
- B. Entre 1 y 2 nanómetros
- C. Entre 20 y 30 nanómetros
- D. Entre 70 y 90 nanómetros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · grosor

En la actualidad, se sabe que el grosor de las membranas oscila entre 7 y 9 nanómetros y, por lo tanto, no se puede visualizar con el microscopio óptico.

### 2

De conformidad con el libro de Biología, ¿cómo se identifica la membrana con el microscopio electrónico, ya que no puede verse con el óptico?

- A. Como una doble línea delgada y continua
- B. Como una única línea gruesa y discontinua
- C. Como una red de sacos aplanados
- D. Como un anillo de nueve microtúbulos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · grosor

No se puede visualizar con el microscopio óptico. En cambio, con el microscopio electrónico se identifica como una doble línea delgada y continua.

---

## Sub-lote 2 · La historia del modelo de membrana (pp. 89–90)

### 3

En relación con el libro de Biología, ¿quiénes fueron en 1925 los primeros en investigar de manera específica las membranas biológicas y su espesor?

- A. Los científicos holandeses E. Gorter y F. Grendel
- B. El científico estadounidense Irving Langmuir
- C. El biofísico estadounidense Kenneth Stewart Cole
- D. El científico inglés J. D. Robertson

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · historia del modelo

En 1925, los científicos holandeses E. Gorter y F. Grendel fueron los primeros en investigar de manera específica las membranas biológicas y su espesor.

### 4

De acuerdo con el libro de Biología, ¿de qué células extrajeron los lípidos Gorter y Grendel para su experimento?

- A. De las membranas de glóbulos rojos provenientes de varios animales
- B. De las membranas de células vegetales
- C. De las membranas de neuronas
- D. De las membranas de células musculares

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · historia del modelo

Estos investigadores extrajeron los lípidos de las membranas de glóbulos rojos provenientes de varios animales, cuyos tamaños eran diferentes.

### 5

De conformidad con el libro de Biología, ¿qué notaron Gorter y Grendel al extender los lípidos de los glóbulos rojos sobre el agua?

- A. Que ocupaban el doble de la superficie de cada una de las células de la que provenían
- B. Que ocupaban la misma superficie que las células de origen
- C. Que ocupaban la mitad de la superficie de las células
- D. Que no se extendían sobre el agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · historia del modelo

Notaron que, al extender los glóbulos rojos sobre el agua, estos ocupaban el doble de la superficie de cada una de las células de la que provenían.

### 6

En relación con el libro de Biología, ¿qué concluyeron Gorter y Grendel a partir de ese hallazgo?

- A. Que los glóbulos rojos están rodeados por una doble capa de compuestos de naturaleza lipídica, es decir, una bicapa lipídica
- B. Que los glóbulos rojos carecen de membrana
- C. Que la membrana está formada por una sola capa de lípidos
- D. Que la membrana está formada sólo por proteínas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · historia del modelo

Concluyeron que los glóbulos rojos están rodeados por una doble capa de compuestos de naturaleza lipídica, es decir, una bicapa lipídica. Sus conclusiones fueron fundantes del modelo actual de membrana plasmática.

### 7

De acuerdo con el libro de Biología, ¿qué componente adicional a los lípidos evidenciaron Danielli, Davson y Harvey en la membrana en 1935?

- A. Las proteínas
- B. Los hidratos de carbono
- C. Los ácidos nucleicos
- D. Los esteroides

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · historia del modelo

En 1935, el químico inglés James F. Danielli (1911-1984), junto con Hugh Davson y el biólogo estadounidense E. Newton Harvey, evidenciaron la presencia de ese factor adicional en la membrana, las proteínas.

> Escalera del modelo: **Gorter y Grendel (1925)** aportaron la bicapa
> **lipídica**; **Danielli y colaboradores (1935)** añadieron las **proteínas**.
> Cada equipo sumó una pieza.

### 8

De conformidad con el libro de Biología, ¿qué modelo de membrana presentó J. D. Robertson en 1957?

- A. Un modelo trilaminar, en el que las proteínas formarían una capa externa a ambos lados de la bicapa, el modelo de "sándwich"
- B. El modelo de mosaico fluido
- C. El modelo de balsas de membrana
- D. El modelo de una sola capa lipídica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 89
**Subtema:** Membrana plasmática · historia del modelo

En 1957, el científico inglés J. D. Robertson presentó un modelo trilaminar, en el que las proteínas formarían una capa externa a ambos lados de la bicapa, el modelo de "sándwich".

---

## Sub-lote 3 · Las balsas de membrana (p. 90)

### 9

En relación con el libro de Biología, ¿quiénes propusieron en 1988 el modelo de microdominios lipídicos, conocido actualmente como "balsas de membrana"?

- A. Los investigadores europeos K. Simons y G. van Meer
- B. Los científicos holandeses E. Gorter y F. Grendel
- C. El científico inglés J. D. Robertson
- D. El biofísico estadounidense Kenneth Stewart Cole

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · balsas de membrana

En el año 1988, los investigadores europeos K. Simons y G. van Meer propusieron el modelo de microdominios lipídicos, que se conoce actualmente como "balsas de membrana".

### 10

De acuerdo con el libro de Biología, ¿con qué están enriquecidas las balsas de membrana?

- A. Con esteroides y esfingolípidos
- B. Con ácidos nucleicos y proteínas
- C. Con hidratos de carbono y agua
- D. Con enzimas hidrolíticas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · balsas de membrana

Se compone de pequeños dominios en la membrana, heterogéneos, muy dinámicos, enriquecidos con esteroides y esfingolípidos que compartimentan procesos celulares.

### 11

De conformidad con el libro de Biología, ¿cuáles son los dos tipos de balsas de membranas que se conocen actualmente?

- A. Las balsas planas, muy pequeñas y dinámicas, y las caveolas, que son invaginaciones de la membrana plasmática
- B. Las balsas rígidas y las balsas móviles
- C. Las balsas lipídicas y las balsas proteicas
- D. Las balsas internas y las balsas externas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · balsas de membrana

Actualmente se conocen dos tipos de balsas de membranas: 1) las balsas planas, que son muy pequeñas y dinámicas y 2) las caveolas, que son invaginaciones de la membrana plasmática.

---

## Sub-lote 4 · El modelo de mosaico fluido (pp. 90–91)

### 12

De acuerdo con el libro de Biología, ¿quiénes propusieron a inicios de la década de 1970 que las proteínas globulares estaban insertas en la bicapa lipídica?

- A. Los bioquímicos S. J. Singer y G. Nicolson
- B. Los científicos holandeses E. Gorter y F. Grendel
- C. Los investigadores europeos K. Simons y G. van Meer
- D. El científico inglés J. D. Robertson

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · mosaico fluido

Al inicio de la década de 1970, este modelo fue reemplazado por el propuesto por los bioquímicos S. J. Singer y G. Nicolson, quienes postularon que las proteínas globulares estaban insertas en la bicapa lipídica.

### 13

De conformidad con el libro de Biología, ¿cómo se llamó el modelo de Singer y Nicolson?

- A. El modelo de mosaico fluido
- B. El modelo trilaminar o de "sándwich"
- C. El modelo de balsas de membrana
- D. El modelo de bicapa simple

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · mosaico fluido

A este modelo se lo llamó modelo de mosaico fluido.

### 14

En relación con el libro de Biología, ¿cómo se disponen los fosfolípidos en la doble capa de la membrana?

- A. Con sus colas hidrófobas apuntando hacia el interior de la membrana y sus cabezas hidrófilas de fosfato hacia el exterior
- B. Con sus cabezas hidrófilas hacia el interior y sus colas hidrófobas hacia el exterior
- C. Con todas sus colas y cabezas apuntando hacia el mismo lado
- D. Sin ninguna orientación definida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · mosaico fluido

La doble capa está constituida básicamente por fosfolípidos que se disponen con sus colas hidrófobas apuntando hacia el interior de la membrana y sus cabezas hidrófilas de fosfato, hacia el exterior.

> Ésta es la clave de la bicapa: las **cabezas hidrófilas** (aman el agua) hacia
> afuera, donde está el agua; las **colas hidrófobas** (huyen del agua) escondidas
> en el interior. El distractor B lo invierte.

### 15

De acuerdo con el libro de Biología, ¿por qué se denomina "mosaico" a la estructura de la membrana?

- A. Porque la disposición de las proteínas y los fosfolípidos alternados aparenta un mosaico irregular
- B. Porque la membrana tiene colores distintos
- C. Porque está formada por piezas rígidas encajadas
- D. Porque las proteínas forman un patrón regular repetido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 91
**Subtema:** Membrana plasmática · mosaico fluido

La disposición de las proteínas y los fosfolípidos alternados que forman la membrana aparentan un "mosaico" irregular.

### 16

De conformidad con el libro de Biología, ¿por qué se denomina "fluido" al modelo de la membrana?

- A. Porque, aunque parecen ancladas, algunas proteínas pueden desplazarse de forma lateral por la bicapa, de manera que el mosaico cambia a lo largo del tiempo
- B. Porque la membrana está hecha de un líquido
- C. Porque el agua atraviesa libremente la membrana
- D. Porque los fosfolípidos se disuelven en el citosol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 91
**Subtema:** Membrana plasmática · mosaico fluido

Algunas de las proteínas incluso pueden desplazarse de forma lateral por la bicapa, de manera que la estructura en "mosaico" de fosfolípidos y proteínas cambia a lo largo del tiempo. Por tal razón, este modelo propuesto para la estructura de la membrana se denomina modelo de mosaico fluido.

---

## Sub-lote 5 · La composición química de la membrana (recuadro 5-1, p. 90)

### 17

En relación con el libro de Biología, ¿qué tres tipos de moléculas orgánicas componen la membrana plasmática?

- A. Las proteínas, los lípidos y los glúcidos
- B. Los ácidos nucleicos, los lípidos y el agua
- C. Las proteínas, los ácidos nucleicos y las sales
- D. Los glúcidos, el colesterol y el agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · composición química

Son moléculas orgánicas biológicas: las proteínas, los lípidos y los glúcidos.

### 18

De acuerdo con el libro de Biología, en el capítulo 5 sobre la membrana plasmática, ¿alrededor de qué porcentaje del peso seco de las membranas constituyen las proteínas?

- A. Alrededor del 60%
- B. Alrededor del 40%
- C. Alrededor del 10%
- D. Alrededor del 90%

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · composición química

Proteínas: constituyen alrededor del 60% del peso seco de las membranas. Muchas de ellas son glucoproteínas y algunas lipoproteínas.

### 19

De conformidad con el libro de Biología, en el capítulo 5 sobre la membrana plasmática, ¿alrededor de qué porcentaje del peso seco constituyen los lípidos?

- A. Alrededor del 40%
- B. Alrededor del 60%
- C. Alrededor del 2%
- D. Alrededor del 80%

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · composición química

Lípidos: constituyen alrededor del 40% del peso seco de la membrana y son fundamentales en esa estructura, ya que forman una doble capa o bicapa lipídica completa, sólo interrumpida por proteínas integrales.

> Par de porcentajes del recuadro: **proteínas ~60%**, **lípidos ~40%** del peso
> seco. Los glúcidos son minoría (2 a 10%). Cada cifra es el distractor de la
> otra.

### 20

En relación con el libro de Biología, en el capítulo 5 sobre la membrana plasmática, ¿entre qué valores puede constituir los glúcidos el peso seco de la membrana, según el tipo celular?

- A. Desde el 2 hasta el 10%
- B. Desde el 20 hasta el 40%
- C. Desde el 40 hasta el 60%
- D. Desde el 60 hasta el 90%

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · composición química

Glúcidos: pueden constituir desde el 2 hasta el 10% del peso seco de la membrana, según el tipo celular.

### 21

De acuerdo con el libro de Biología, ¿en qué cara de la membrana están siempre dispuestos los glúcidos?

- A. En la cara externa, hacia el espacio extracelular
- B. En la cara interna, hacia el citoplasma
- C. En ambas caras por igual
- D. En el interior hidrófobo de la bicapa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · composición química

Glúcidos: se encuentran siempre en combinación con proteínas (glucoproteínas) y con lípidos (glucolípidos). Están siempre dispuestos en la cara externa, hacia el espacio extracelular.

### 22

De conformidad con el libro de Biología, ¿con qué se encuentran siempre en combinación los glúcidos de la membrana?

- A. Con proteínas (glucoproteínas) y con lípidos (glucolípidos)
- B. Con ácidos nucleicos y con agua
- C. Con colesterol y con sales
- D. Con enzimas hidrolíticas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 90
**Subtema:** Membrana plasmática · composición química

Glúcidos: se encuentran siempre en combinación con proteínas (glucoproteínas) y con lípidos (glucolípidos).

---

## Sub-lote 6 · La asimetría de las dos caras (p. 91)

### 23

En relación con el libro de Biología, ¿cómo son las superficies interior y exterior de la membrana en cuanto a su composición química?

- A. Difieren de manera considerable en su composición química
- B. Son idénticas en su composición química
- C. Difieren sólo en la cantidad de agua
- D. Carecen de composición química definida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 91
**Subtema:** Membrana plasmática · asimetría de las caras

Las superficies interior y exterior de la membrana difieren de manera considerable en su composición química.

### 24

De acuerdo con el libro de Biología, ¿qué enzima puede trasladar los lípidos de una capa de la membrana a la otra?

- A. Una enzima translocadora
- B. Una enzima hidrolítica
- C. Una enzima oxidasa
- D. Una ATPasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 91
**Subtema:** Membrana plasmática · asimetría de las caras

Estos lípidos pueden ser trasladados de una capa a la otra por una enzima translocadora.

---

## Sub-lote 7 · Las proteínas de la membrana (p. 91)

### 25

De acuerdo con el libro de Biología, ¿qué orientación tienen las proteínas integrales de membrana?

- A. Una orientación espacial definida, con porciones a uno u otro lado completamente distintas en su composición de aminoácidos y estructura terciaria
- B. Una orientación al azar, distinta en cada momento
- C. Una orientación idéntica en ambos lados de la membrana
- D. Ninguna orientación, porque flotan libremente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 91
**Subtema:** Membrana plasmática · proteínas de membrana

Las proteínas integrales de membrana tienen una orientación espacial definida y las porciones que se extienden a uno u otro lado son completamente distintas en su composición de aminoácidos y en su estructura terciaria.

---

## Sub-lote 8 · El glucocálix (p. 92)

### 26

De conformidad con el libro de Biología, ¿qué forma la cubierta de oligosacáridos que sobresalen hacia el espacio extracelular y protege la superficie de la célula?

- A. El glucocálix
- B. La lámina nuclear
- C. La pared celular
- D. La matriz mitocondrial

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · glucocálix

Formando una cubierta que protege la superficie de la célula, integrando el glucocálix que la rodea.

---

## Sub-lote 9 · Los movimientos en la bicapa (p. 92)

### 27

En relación con el libro de Biología, ¿de qué dos formas se mueven las proteínas de la membrana en la bicapa?

- A. Mediante el desplazamiento lateral o la rotación
- B. Únicamente atravesando la membrana de un lado a otro
- C. Únicamente hacia el interior del citosol
- D. No se mueven, están fijas en su posición

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · movimientos en la bicapa

Las proteínas de la membrana se mueven en la bicapa, generalmente en el mismo plano, ya sea mediante el desplazamiento lateral o la rotación.

### 28

De acuerdo con el libro de Biología, ¿cómo es el movimiento de los lípidos en la bicapa comparado con el de las proteínas?

- A. También ocurre, pero de forma más lenta
- B. Ocurre de forma más rápida que el de las proteínas
- C. No ocurre en absoluto
- D. Ocurre sólo durante la división celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · movimientos en la bicapa

Este movimiento también ocurre entre los lípidos, aunque de forma más lenta.

### 29

De conformidad con el libro de Biología, ¿qué son los dominios de membrana, respecto del paso de las moléculas?

- A. Regiones diferentes entre las que se restringe el paso de las moléculas, que se mueven en forma de dominó pero no pueden pasar al de al lado
- B. Regiones donde las moléculas pasan libremente de una a otra
- C. Regiones sin proteínas ni lípidos
- D. Regiones exclusivas de las células procariontes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · dominios de membrana

Existen dominios de membrana diferentes entre los que se restringe el paso de las moléculas. Las moléculas se mueven en forma de dominó, pero no pueden pasar al de al lado.

---

## Sub-lote 10 · La polaridad de las células intestinales (p. 92)

### 30

En relación con el libro de Biología, ¿qué caracteriza a las células intestinales respecto de sus dominios de membrana?

- A. Tienen polaridad, y la porción apical está claramente diferenciada de la basal
- B. No tienen polaridad, y toda su membrana es igual
- C. Tienen dos núcleos, uno apical y otro basal
- D. Carecen de membrana en su porción apical

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · polaridad celular

Las células intestinales tienen polaridad y la porción apical está claramente diferenciada de la basal.

### 31

De acuerdo con el libro de Biología, ¿qué hace la porción apical de la membrana de las células intestinales, en contacto con la luz del intestino?

- A. Absorbe los alimentos y nutrientes
- B. Sintetiza las enzimas digestivas
- C. Los envía directamente al núcleo
- D. Los devuelve a la luz del intestino

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · polaridad celular

La porción apical de la membrana, en contacto con la luz del intestino, absorbe los alimentos y nutrientes.

### 32

De conformidad con el libro de Biología, ¿qué ocurre en la porción basal de la membrana de las células intestinales?

- A. Es atravesada por los alimentos parcialmente procesados, que llegan así a los vasos sanguíneos subyacentes
- B. Absorbe directamente los alimentos de la luz del intestino
- C. Sintetiza el glucocálix
- D. Expulsa los desechos hacia la luz del intestino

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · polaridad celular

La porción basal de la membrana es atravesada por los alimentos parcialmente procesados, que llegan así a los vasos sanguíneos subyacentes.

> Par que hay que ordenar: la porción **apical** (en la luz del intestino)
> **absorbe**; la **basal** deja pasar hacia los **vasos sanguíneos**. Es el
> recorrido del nutriente: entra por arriba, sale por abajo a la sangre.

---

## Sub-lote 11 · La unión estrecha y las proteínas periféricas (pp. 92–93)

### 33

De acuerdo con el libro de Biología, ¿qué unión entre las membranas de las células de un epitelio impide el pasaje de moléculas de un dominio al otro de la membrana?

- A. La unión estrecha
- B. La unión translocadora
- C. La unión basal
- D. La unión covalente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · unión estrecha

Entre esas uniones, la unión estrecha parece tener un papel importante, al impedir el pasaje de moléculas de un dominio al otro de la membrana.

### 34

De conformidad con el libro de Biología, ¿qué caracteriza a las proteínas periféricas respecto de la bicapa lipídica?

- A. No atraviesan la bicapa lipídica, sino que se unen a una u otra cara mediante interacciones con otras proteínas
- B. Atraviesan por completo la bicapa lipídica de lado a lado
- C. Están embebidas en el interior hidrófobo de la bicapa
- D. Flotan libres en el citosol sin unirse a la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · proteínas periféricas

Existe otro grupo de proteínas, denominadas proteínas periféricas, que no atraviesan la bicapa lipídica, sino que se unen a una u otra cara de la membrana mediante interacciones con otras proteínas.

> Par contrapuesto que es la clave: las **integrales** atraviesan la bicapa y
> tienen orientación definida (reactivo 25); las **periféricas** no la atraviesan,
> se pegan a una cara. Cada una es el distractor de la otra.

### 35

En relación con el libro de Biología, ¿qué proteínas periféricas se encuentran ancladas a la cara interna de la membrana por uniones con proteínas integrales?

- A. La actina o la espectrina
- B. La tubulina o la dineína
- C. La insulina o la miosina
- D. El colesterol o los esfingolípidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · proteínas periféricas

Algunas proteínas periféricas, como la actina o la espectrina, se encuentran ancladas a la cara interna de la membrana por uniones con proteínas integrales.

---

## Sub-lote 12 · Los hidratos de carbono y la comunicación celular (p. 92)

### 36

De acuerdo con el libro de Biología, ¿qué papel fundamental cumplen las cadenas de hidratos de carbono de la cara exterior de la membrana?

- A. Un papel en la comunicación celular: la adhesión de las células entre sí y el reconocimiento de moléculas en la superficie de la membrana
- B. Un papel en la producción de energía a partir de la glucosa
- C. Un papel en la digestión de macromoléculas
- D. Un papel exclusivamente estructural, sin función de comunicación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · comunicación celular

Estas cadenas cumplen un papel fundamental en la comunicación celular, ya que están implicadas en la adhesión de las células entre sí y en el reconocimiento de moléculas en la superficie de la membrana, como es el caso de la detección de sustancias extrañas por parte de las células del sistema inmunitario.

---

## Sub-lote 13 · Las funciones de las proteínas integrales (cuadro 5-1, p. 92)

### 37

De conformidad con el libro de Biología, ¿qué función cumplen las proteínas integrales llamadas transportadoras o carriers?

- A. Pueden transportar ciertas sustancias a través de la membrana
- B. Extraen o introducen iones con gasto de energía
- C. Provocan respuestas de los sistemas inmunitarios
- D. Anclan el citoesqueleto a la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · funciones de las proteínas integrales

Transportadores o carriers: pueden transportar ciertas sustancias a través de la membrana.

### 38

De acuerdo con el libro de Biología, ¿qué función cumplen los canales iónicos?

- A. Pueden tener, o no, compuertas por donde pasan ciertos iones, como K⁺, Ca²⁺ o Cl⁻, para los cuales la bicapa es casi impermeable
- B. Extraen o introducen iones en contra del gradiente, con gasto de energía
- C. Sintetizan las proteínas de la membrana
- D. Marcan la superficie de la célula como una etiqueta

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · funciones de las proteínas integrales

Canales iónicos: pueden tener, o no, compuertas por donde pasan ciertos iones; p. ej., K⁺, Ca²⁺, Cl⁻, para los cuales la bicapa lipídica es casi impermeable.

### 39

En relación con el libro de Biología, ¿qué función cumplen las proteínas integrales llamadas bombas?

- A. Extraen o introducen algún ion, con gasto de energía por parte de la célula, realizando un transporte activo en contra del gradiente de concentración
- B. Dejan pasar los iones a favor del gradiente, sin gasto de energía
- C. Transportan información como los neurotransmisores
- D. Anclan las proteínas periféricas a la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · funciones de las proteínas integrales

Bombas: extraen o introducen algún ion, con gasto de energía por parte de la célula, realizando un transporte activo, en contra del gradiente de concentración.

> Par que se cruza: el **canal iónico** deja pasar el ion (a favor del gradiente,
> sin gasto); la **bomba** lo mueve en contra del gradiente, gastando energía.
> Ambos manejan iones, pero uno es pasivo y el otro activo.

### 40

De conformidad con el libro de Biología, ¿qué son las proteínas integrales que actúan como receptores?

- A. Un sitio de unión de moléculas que generalmente llevan alguna información, como los neurotransmisores o las hormonas
- B. Proteínas que transportan iones con gasto de energía
- C. Proteínas que anclan el citoesqueleto
- D. Proteínas que digieren macromoléculas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · funciones de las proteínas integrales

Receptores: sitio de unión de moléculas. Generalmente, llevan alguna información, como los neurotransmisores o las hormonas.

### 41

De acuerdo con el libro de Biología, ¿qué caracteriza a las proteínas integrales con propiedades antigénicas?

- A. Marcan la superficie de la célula como una "etiqueta", lo que permite que sea reconocida por otras células
- B. Sintetizan las hormonas de la célula
- C. Transportan iones a favor del gradiente
- D. Forman la bicapa lipídica de la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · funciones de las proteínas integrales

Proteínas con propiedades antigénicas: son antígenos, pues marcan la superficie de la célula como una "etiqueta", lo que permite que sea reconocida por otras células.

### 42

En relación con el libro de Biología, en el capítulo 5 sobre la membrana plasmática, ¿cuántas enzimas diferentes con distribución asimétrica a ambos lados de la membrana se describieron?

- A. Más de 30 enzimas diferentes
- B. Más de 5 enzimas diferentes
- C. Más de 100 enzimas diferentes
- D. Más de 300 enzimas diferentes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 92
**Subtema:** Membrana plasmática · funciones de las proteínas integrales

Hay reacciones bioquímicas que ocurren a nivel de la membrana, ya que allí se encuentran las enzimas necesarias. Se describieron más de 30 enzimas diferentes con distribución asimétrica a ambos lados de la membrana.

---

## Sub-lote 14 · Qué atraviesa la bicapa y las proteínas de transporte (pp. 92–93)

### 43

De acuerdo con el libro de Biología, ¿qué moléculas no pueden atravesar libremente la bicapa lipídica?

- A. Las moléculas polares, como la glucosa, y también el agua o los iones de escaso tamaño, que lo hacen muy lentamente
- B. El dióxido de carbono y el oxígeno
- C. Las hormonas esteroideas
- D. Todas las moléculas la atraviesan libremente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · qué atraviesa la bicapa

Las moléculas polares, como la glucosa, no podrán hacerlo libremente; incluso, pequeñas moléculas de agua o iones de escaso tamaño no podrán atravesarla o lo harán muy lentamente.

> Par contrapuesto: las moléculas **no polares** —CO₂, oxígeno, hormonas
> esteroideas— cruzan libre la bicapa; las **polares** —glucosa, agua, iones— no,
> necesitan proteínas de transporte. Lo que decide es si la molécula es polar.

### 44

De conformidad con el libro de Biología, ¿cómo se denomina de forma genérica a las proteínas integrales por las que pasan las moléculas polares, evitando el ambiente no polar de los fosfolípidos?

- A. Proteínas de transporte
- B. Proteínas antigénicas
- C. Proteínas estructurales
- D. Proteínas periféricas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · proteínas de transporte

A estas proteínas se las denomina de forma genérica proteínas de transporte y pueden actuar de dos formas básicas diferentes: como canales o como transportadores.

### 45

En relación con el libro de Biología, ¿de qué dos formas básicas pueden actuar las proteínas de transporte?

- A. Como canales o como transportadores
- B. Como bombas o como receptores
- C. Como enzimas o como antígenos
- D. Como integrales o como periféricas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · proteínas de transporte

A estas proteínas se las denomina de forma genérica proteínas de transporte y pueden actuar de dos formas básicas diferentes: como canales o como transportadores.

---

## Sub-lote 15 · Los canales y las acuaporinas (p. 93)

### 46

De acuerdo con el libro de Biología, ¿qué son los canales?

- A. Proteínas integrales de membrana que forman conductos a través de los cuales pueden pasar moléculas polares y iones
- B. Proteínas periféricas ancladas a la cara interna de la membrana
- C. Cadenas de hidratos de carbono de la cara externa
- D. Lípidos que forman la bicapa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · canales

Los canales son proteínas integrales de membrana que forman conductos a través de los cuales pueden pasar moléculas polares y iones.

### 47

De conformidad con el libro de Biología, ¿qué son las acuaporinas y para qué son específicas?

- A. Canales constituidos por proteínas de membrana que son específicas para el agua, aunque también los solutos neutros y pequeños como la urea o el glicerol pueden atravesarlos
- B. Bombas que introducen agua con gasto de energía
- C. Canales específicos para los iones sodio y potasio
- D. Proteínas periféricas de la cara externa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · acuaporinas

Las acuaporinas son canales constituidos por proteínas de membrana que son específicas para el agua, aunque también los solutos neutros y pequeños, como la urea o el glicerol, pueden atravesarlos.

### 48

En relación con el libro de Biología, ¿de qué es consecuencia la alta selectividad de los canales iónicos?

- A. De su arquitectura molecular, que permite o impide la difusión de sustancias de acuerdo con su tamaño y carga
- B. Del gasto de energía de la célula
- C. De la cantidad de agua que contienen
- D. De su ubicación en la cara interna de la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · canales

La alta selectividad de los canales iónicos es consecuencia de su arquitectura molecular que permite o impide la difusión de sustancias de acuerdo con su tamaño y carga.

### 49

De acuerdo con el libro de Biología, cuando un estímulo "gatilla" la apertura de un canal, ¿qué provoca?

- A. Aumenta la probabilidad de que un canal permanezca abierto
- B. Cierra el canal de forma permanente
- C. Destruye la proteína del canal
- D. Invierte la dirección del transporte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · canales

Diversos estímulos "gatillan" la apertura del canal, es decir, aumentan la probabilidad de que un canal permanezca abierto.

---

## Sub-lote 16 · Los poros (p. 93)

### 50

De conformidad con el libro de Biología, ¿cómo son los poros comparados con los canales, en cuanto a tamaño y selectividad?

- A. Son mucho más grandes que los canales y, por lo tanto, mucho menos selectivos
- B. Son mucho más pequeños que los canales y más selectivos
- C. Son del mismo tamaño y selectividad que los canales
- D. Son específicos para un único tipo de ion

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · poros

Existe otro grupo de conductos, los denominados poros. Estos conductos son mucho más grandes que los canales y, por lo tanto, son mucho menos selectivos.

> Par contrapuesto: el **canal** es pequeño y muy selectivo (deja pasar iones
> concretos); el **poro** es grande y poco selectivo. A mayor tamaño, menor
> selectividad.

### 51

En relación con el libro de Biología, ¿qué son las toxinas formadoras de poros?

- A. Péptidos o proteínas que una célula patógena sintetiza y secreta, y que forman un poro en la membrana de otra célula, pudiendo producir su muerte
- B. Canales específicos para el agua
- C. Proteínas estructurales de anclaje del citoesqueleto
- D. Enzimas de la cara interna de la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · poros

Esta categoría también incluye a las toxinas formadoras de poros, que son péptidos o proteínas que una célula patógena sintetiza y secreta al medio extracelular. Allí ejercen su efecto tóxico al asociarse con la membrana de otra célula, donde forman un poro a través del cual pueden salir componentes esenciales del interior celular o entrar en la célula sustancias específicas que pueden producir la muerte celular.

---

## Sub-lote 17 · La permeabilidad selectiva (p. 93)

### 52

De acuerdo con el libro de Biología, ¿cuál es la función de la membrana celular?

- A. Mantener la integridad de la célula y, a la vez, regular el tránsito de sustancias de manera selectiva hacia el interior y el exterior
- B. Producir la energía que la célula necesita
- C. Almacenar el material genético de la célula
- D. Sintetizar todas las proteínas de la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · permeabilidad selectiva

La función de la membrana celular es la de mantener la integridad de la célula y, a la vez, regular el tránsito de sustancias de manera selectiva hacia el interior y el exterior de esta.

### 53

De conformidad con el libro de Biología, ¿cómo se llama la propiedad de la membrana de regular el pasaje de sustancias a través de ella?

- A. La permeabilidad selectiva
- B. La fluidez de la bicapa
- C. La polaridad celular
- D. La asimetría de las caras

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 93
**Subtema:** Membrana plasmática · permeabilidad selectiva

Una de esas propiedades de la membrana, que analizaremos a continuación, es la permeabilidad selectiva, es decir, la propiedad de regular el pasaje de sustancias a través de ella.

---

## Sub-lote 18 · Los transportadores y sus tres clases (p. 94)

### 54

De acuerdo con el libro de Biología, ¿qué son los transportadores?

- A. Estructuras proteicas que se asocian en forma específica con la molécula que será transportada y, mediante sutiles cambios en su estructura, la conducen de uno a otro lado de la membrana
- B. Conductos siempre abiertos por los que pasa cualquier sustancia
- C. Cadenas de hidratos de carbono de la cara externa
- D. Lípidos que forman la bicapa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · transportadores

Los transportadores son estructuras proteicas que se asocian en forma específica con la molécula que será transportada. Mediante sutiles cambios en su estructura, la proteína transportadora conduce a la molécula de uno a otro lado de la membrana.

> Par que hay que separar: el **canal** es un conducto abierto por el que pasa la
> molécula sola (reactivo 46); el **transportador** se une a la molécula y cambia
> de forma para pasarla. Canal = puerta; transportador = torniquete.

### 55

De conformidad con el libro de Biología, ¿qué transportan los uniportes?

- A. Una única especie química en una dirección definida
- B. Dos o más especies químicas en el mismo sentido
- C. Dos o más especies en sentidos opuestos
- D. Ninguna especie química, sólo agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · transportadores

Uniportes: transportan una única especie química en una dirección definida.

### 56

En relación con el libro de Biología, ¿qué transportan los simportes?

- A. Dos o más especies químicas diferentes en el mismo sentido
- B. Una única especie química en una dirección definida
- C. Dos o más especies en sentidos opuestos
- D. Únicamente iones de una misma carga

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · transportadores

Simportes: transportan dos o más especies químicas diferentes en el mismo sentido.

### 57

De acuerdo con el libro de Biología, ¿qué transportan los antiportes?

- A. Dos o más especies en sentidos opuestos
- B. Dos o más especies químicas en el mismo sentido
- C. Una única especie química en una dirección definida
- D. Únicamente agua y solutos neutros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · transportadores

Antiportes: transportan dos o más especies en sentidos opuestos.

> Las tres clases se distinguen por cuántas sustancias y en qué sentido: **uni**
> = una, una dirección; **sim** = varias, mismo sentido; **anti** = varias,
> sentidos opuestos. El prefijo lo dice todo.

---

## Sub-lote 19 · Qué facilita el paso por los fosfolípidos (p. 94)

### 58

De conformidad con el libro de Biología, ¿de qué depende la capacidad de una sustancia para atravesar la membrana circulando entre las cadenas carbonadas?

- A. De la polaridad, del tamaño y de la carga de la sustancia
- B. Únicamente del tamaño de la sustancia
- C. De la temperatura del medio exclusivamente
- D. De la cantidad de agua presente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · paso por los fosfolípidos

Esta capacidad depende de la polaridad, del tamaño y de la carga de las sustancias.

### 59

En relación con el libro de Biología, respecto de la polaridad, ¿qué sustancias circulan con mayor facilidad a través de los fosfolípidos?

- A. Cuanto menos polar (o más hidrófoba) es la sustancia, circulará con mayor facilidad
- B. Cuanto más polar (o más hidrófila) es la sustancia, circulará con mayor facilidad
- C. La polaridad no influye en la circulación
- D. Sólo circulan las sustancias con carga eléctrica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · paso por los fosfolípidos

Polaridad. Cuanto menos polar (o más hidrófoba) es la sustancia, circulará con mayor facilidad a través de los fosfolípidos.

### 60

De acuerdo con el libro de Biología, respecto del tamaño, ¿qué sustancias se desplazan con mayor facilidad a través de los fosfolípidos?

- A. Cuanto más pequeña es la sustancia, podrá desplazarse con mayor facilidad
- B. Cuanto más grande es la sustancia, podrá desplazarse con mayor facilidad
- C. El tamaño no influye en el desplazamiento
- D. Sólo se desplazan las sustancias de mayor tamaño

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · paso por los fosfolípidos

Tamaño. Cuanto más pequeña es la sustancia, podrá desplazarse con mayor facilidad a través de los fosfolípidos.

---

## Sub-lote 20 · La carga y las moléculas que cruzan la bicapa (pp. 94–95)

### 61

De acuerdo con el libro de Biología, respecto de la carga, ¿por qué los iones no pueden atravesar la bicapa lipídica, por pequeños que sean?

- A. Debido a su carga eléctrica
- B. Debido a su gran tamaño
- C. Debido a que son moléculas no polares
- D. Debido a que carecen de energía cinética

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · la carga

Carga. Los iones, no importa cuán pequeños sean, no pueden atravesar la bicapa lipídica debido a su carga eléctrica.

### 62

De conformidad con el libro de Biología, ¿qué moléculas pequeñas polares pueden moverse a través de la membrana pese a su distribución asimétrica de cargas?

- A. Las que son polares pero no tienen carga eléctrica neta
- B. Las que tienen carga eléctrica neta positiva
- C. Las que tienen carga eléctrica neta negativa
- D. Únicamente los iones de sodio y potasio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · la carga

Algunas moléculas pequeñas que tienen una distribución asimétrica de cargas –son polares–, pero que no tienen carga eléctrica neta, pueden moverse a través de la membrana.

### 63

En relación con el libro de Biología, ¿qué ejemplos de moléculas que pueden moverse a través de la bicapa lipídica menciona el libro?

- A. Los gases O₂ y CO₂ de la respiración, la urea, el agua y las hormonas esteroideas
- B. La glucosa, los aminoácidos y las proteínas
- C. Los iones sodio, potasio y cloruro
- D. El ADN y el ARN

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 94
**Subtema:** Membrana plasmática · la carga

Ejemplos de moléculas que pueden moverse a través de la bicapa lipídica son los dos gases que participan en el proceso de respiración, O₂ y CO₂, la urea, el agua, las hormonas esteroideas, entre otras.

---

## Sub-lote 21 · La difusión (p. 95)

### 64

De acuerdo con el libro de Biología, ¿qué es la energía cinética de las moléculas?

- A. Una cantidad de energía indicativa de sus movimientos espontáneos
- B. La energía que la célula gasta para transportar sustancias
- C. La energía almacenada en los enlaces químicos
- D. La energía necesaria para formar la bicapa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 95
**Subtema:** Membrana plasmática · difusión

Toda sustancia está formada por moléculas que poseen cierta cantidad de energía cinética, que es indicativa de sus movimientos espontáneos.

### 65

De conformidad con el libro de Biología, ¿qué es la difusión?

- A. El desplazamiento neto de moléculas, a presión y temperatura constantes, desde las zonas de mayor concentración hacia las de menor concentración
- B. El desplazamiento de moléculas desde las zonas de menor hacia las de mayor concentración
- C. El transporte de moléculas con gasto de energía
- D. El movimiento del agua a través de una membrana semipermeable

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 95
**Subtema:** Membrana plasmática · difusión

La difusión es el desplazamiento neto de moléculas, a presión y temperatura constantes, desde las zonas de mayor concentración hacia las zonas de menor concentración y es el mecanismo principal de movimiento de moléculas en una célula.

### 66

En relación con el libro de Biología, ¿la difusión ocurre con gasto de energía o sin él?

- A. Sin gasto de energía externa
- B. Con gasto de energía externa
- C. Sólo con gasto de energía en contra del gradiente
- D. Con gasto de energía proporcionado por las bombas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 95
**Subtema:** Membrana plasmática · difusión

La difusión es el desplazamiento neto de moléculas [...]. Este desplazamiento ocurre sin gasto de energía externa.

> Ésta es la clave que distingue la difusión del transporte activo: la difusión
> va **a favor** del gradiente (de mayor a menor concentración) y por eso es
> **gratis**; la bomba va en contra y por eso gasta energía (reactivo 39).

### 67

De acuerdo con el libro de Biología, ¿por qué es eficaz la difusión para el pasaje de sustancias a través de las membranas biológicas?

- A. Por el pequeño espesor de las membranas y la velocidad que puede alcanzar una molécula que se desplaza por difusión
- B. Porque las membranas gastan energía para acelerarla
- C. Porque las membranas son muy gruesas
- D. Porque las moléculas se desplazan muy lentamente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 95
**Subtema:** Membrana plasmática · difusión

El pequeño espesor de las membranas biológicas y la velocidad que puede alcanzar una molécula que se desplaza por difusión hacen que este mecanismo sea eficaz para el pasaje de sustancias que pueden atravesar la bicapa lipídica de las membranas.

---

## Sub-lote 22 · La ósmosis (p. 96)

### 68

De conformidad con el libro de Biología, cuando dos soluciones de distinta concentración están separadas por una membrana permeable sólo al agua, ¿qué tiende a hacer la solución espontáneamente?

- A. A igualar sus concentraciones de un lado y del otro mediante el movimiento del agua, ya que los solutos no pueden atravesarla
- B. A aumentar la diferencia de concentraciones entre ambos lados
- C. A mover los solutos de un lado a otro
- D. A detener todo movimiento de agua y solutos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 96
**Subtema:** Membrana plasmática · ósmosis

La solución tenderá espontáneamente a igualar sus concentraciones de un lado y del otro de la membrana mediante el movimiento del agua, ya que los solutos no pueden atravesarla.

### 69

De acuerdo con el libro de Biología, ¿en qué sentido se mueve el agua entre dos soluciones de distinta concentración?

- A. Desde la solución más diluida, donde la concentración de soluto es menor, hacia la que contenga mayor concentración de solutos
- B. Desde la solución más concentrada hacia la más diluida
- C. En ambos sentidos por igual, sin flujo neto
- D. Sólo desde donde hay más agua hacia donde hay más solutos con gasto de energía

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 96
**Subtema:** Membrana plasmática · ósmosis

La solución que contenga menor concentración de solutos tendrá mayor concentración de agua y, en consecuencia, esta se moverá desde la solución más diluida, es decir, donde la concentración de soluto es menor, hacia la que contenga mayor concentración de solutos.

> La clave de la ósmosis: el **agua** va hacia donde hay **más soluto** (menos
> agua). Se mueve el agua, no el soluto, porque el soluto no puede cruzar. Es
> difusión, pero del agua.

### 70

En relación con el libro de Biología, si una membrana permeable al agua separa dos soluciones de igual concentración, ¿qué ocurre?

- A. No habría flujo neto a través de ella
- B. El agua se movería con fuerza hacia un lado
- C. Los solutos atravesarían la membrana
- D. Ambas soluciones aumentarían su concentración

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 96
**Subtema:** Membrana plasmática · ósmosis

Si esa misma membrana separara a dos soluciones de igual concentración, no habría flujo neto a través de ella.

---

## Sub-lote 23 · Difusión simple y difusión facilitada (p. 96)

### 71

De acuerdo con el libro de Biología, ¿cómo se denomina el mecanismo cuando las moléculas son solubles en la bicapa lipídica y la atraviesan directamente?

- A. Difusión simple
- B. Difusión facilitada
- C. Transporte activo
- D. Endocitosis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 96
**Subtema:** Membrana plasmática · difusión simple y facilitada

Cuando las moléculas son solubles en la bicapa lipídica, el mecanismo se denomina difusión simple.

### 72

De conformidad con el libro de Biología, ¿cómo se denomina el mecanismo cuando intervienen proteínas integrales, ya sean canales o transportadores?

- A. Difusión facilitada
- B. Difusión simple
- C. Transporte activo
- D. Ósmosis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 96
**Subtema:** Membrana plasmática · difusión simple y facilitada

Cuando intervienen proteínas integrales, ya sean los canales o los transportadores, el mecanismo se denomina difusión facilitada.

> Par que hay que separar: la **difusión simple** cruza la bicapa directamente
> (moléculas solubles en lípidos); la **facilitada** necesita una proteína
> integral. Las dos son difusión —sin gasto—, pero una usa proteína y la otra no.

### 73

En relación con el libro de Biología, ¿cuál es la fuerza impulsora del transporte activo, a diferencia de la difusión?

- A. El resultado de un aporte externo de energía, que permite que el flujo se produzca desde zonas de menor potencial químico a zonas donde este es mayor
- B. El gradiente de potencial químico, sin ningún aporte de energía
- C. La solubilidad de las moléculas en la bicapa lipídica
- D. El movimiento al azar de las moléculas de agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 96
**Subtema:** Membrana plasmática · transporte activo

Transporte activo: la fuerza impulsora es el resultado de un aporte externo de energía que permite que el flujo se produzca desde zonas de menor potencial químico a zonas donde este es mayor.

> Cierra el mapa del transporte: la **difusión** (simple o facilitada) es
> **pasiva**, va a favor del gradiente sin gasto; el **transporte activo** va en
> contra del gradiente y por eso necesita energía.

---

## Sub-lote 24 · El agua y la ósmosis en términos osmóticos (recuadro 5-2, p. 97)

### 74

De acuerdo con el libro de Biología, en el capítulo 5 sobre la membrana plasmática, ¿qué porcentaje de la masa corporal de la mayoría de los seres vivos constituye el agua?

- A. El 70%
- B. El 40%
- C. El 90%
- D. El 20%

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · ósmosis y tonicidad

El agua constituye el 70% de la masa corporal de la mayoría de los seres vivos.

### 75

De conformidad con el libro de Biología, ¿desde qué solución hacia cuál se mueve el agua en la ósmosis, según su concentración?

- A. Desde la solución más diluida (o hiposmótica) a la que contenga mayor concentración de solutos (o hiperosmótica)
- B. Desde la solución más concentrada (hiperosmótica) a la más diluida (hiposmótica)
- C. Desde la solución con más agua a la que también tiene más agua
- D. En ambos sentidos por igual, siempre

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · ósmosis y tonicidad

El agua se moverá desde la solución más diluida (o hiposmótica) a la que contenga mayor concentración de solutos (o hiperosmótica).

---

## Sub-lote 25 · La tonicidad de las células (recuadro 5-2, p. 97)

### 76

En relación con el libro de Biología, ¿qué es la tonicidad?

- A. Un parámetro que describe las soluciones según si provocan la entrada o la salida de agua de una célula, determinado por la concentración de solutos del medio que la rodea
- B. La cantidad de energía cinética de las moléculas de agua
- C. La velocidad a la que difunde un soluto
- D. El grosor de la membrana plasmática

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · tonicidad

La tonicidad es un parámetro que describe las soluciones según si estas provocan la entrada o la salida de agua de una célula, y está determinada por la concentración de solutos presentes en la solución del medio que rodea a la célula.

### 77

De acuerdo con el libro de Biología, ¿qué es una solución isotónica?

- A. Aquella que no modifica el volumen de una célula inmersa en ella, porque no se produce flujo neto de agua
- B. Aquella que hace que la célula gane agua y aumente su volumen
- C. Aquella que hace que la célula pierda agua y reduzca su volumen
- D. Aquella que tiene mayor concentración de solutos que la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · tonicidad

Una solución isotónica es aquella que no modifica el volumen de una célula inmersa en esa solución; es decir, que, debido a la relación de concentraciones, no se produce flujo neto de agua hacia adentro o hacia afuera de esa célula.

### 78

De conformidad con el libro de Biología, si se coloca una célula en una solución hipotónica, ¿qué le ocurre?

- A. El agua de la solución penetrará en ella y aumentará su volumen
- B. La célula perderá agua y reducirá su volumen
- C. No se producirá ningún flujo de agua
- D. La célula expulsará sus solutos hacia la solución

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · tonicidad

Si se coloca una célula en una solución hipotónica (es decir, con menor concentración de solutos que los que tiene la célula), el agua de esta solución penetrará en ella y aumentará su volumen.

### 79

En relación con el libro de Biología, si una célula se sumerge en una solución hipertónica, ¿qué le ocurre?

- A. Perderá agua y reducirá su volumen
- B. Ganará agua y aumentará su volumen
- C. No modificará su volumen
- D. Absorberá los solutos de la solución

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · tonicidad

En una solución con mayor concentración de solutos –hipertónica– la célula sumergida en ella perderá agua y reducirá su volumen.

> Las tres tonicidades, que se preguntan siempre: **iso** = no cambia; **hipo**
> (menos soluto afuera) = la célula **gana** agua y se hincha; **hiper** (más
> soluto afuera) = la célula **pierde** agua y se encoge. El agua siempre va hacia
> donde hay más soluto.

---

## Sub-lote 26 · La turgencia y las vacuolas contráctiles (recuadro 5-2, p. 97)

### 80

De acuerdo con el libro de Biología, en las células vegetales, ¿cómo se conoce el aumento de presión interna que produce el ingreso inicial de agua, limitado por la pared celular?

- A. Presión de turgencia
- B. Presión osmótica
- C. Presión hidrostática
- D. Presión de tonicidad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · turgencia

En las células vegetales, la pared celular que rodea a la membrana plasmática limita el aumento de volumen. Entonces, el ingreso inicial de agua produce un aumento de la presión interna, conocido como presión de turgencia.

### 81

De conformidad con el libro de Biología, ¿mediante qué mecanismo eliminan el exceso de agua algunos organismos unicelulares como Paramecium?

- A. Mediante la expulsión coordinada y pulsátil de agua a través de vacuolas contráctiles
- B. Mediante la síntesis de pared celular
- C. Mediante el transporte activo de solutos hacia el interior
- D. Mediante la fagocitosis del agua sobrante

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · turgencia

Algunos organismos unicelulares como Paramecium tienen mecanismos alternativos por los cuales eliminan el exceso de agua que ingresa por ósmosis, entre ellos, la expulsión coordinada y pulsátil de agua a través de vacuolas contráctiles.

### 82

En relación con el libro de Biología, ¿cómo evitan las células de los animales multicelulares la entrada neta de agua que provocarían sus macromoléculas?

- A. Manteniendo una concentración intracelular de iones, fundamentalmente Na⁺, menor que en el medio extracelular, mediante sistemas de transporte activo
- B. Rodeándose de una pared celular rígida
- C. Expulsando agua por vacuolas contráctiles
- D. Aumentando su concentración de proteínas y ADN

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 97
**Subtema:** Membrana plasmática · turgencia

Las células de los animales multicelulares, en cambio, mantienen una concentración intracelular de iones, fundamentalmente Na⁺, menor que en el medio extracelular, a través de sistemas de transporte activo. De esta manera, la presencia de macromoléculas se compensa y no tiene lugar una entrada neta de agua.

> Tres estrategias contra el exceso de agua, según el tipo de célula: la
> **vegetal** aguanta con su **pared** (turgencia); el **paramecio** lo bombea
> con **vacuolas contráctiles**; la célula **animal** lo compensa sacando **Na⁺**
> por transporte activo.

---

**Reactivos en este archivo:** 82
