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

Cubiertas las páginas impresas **89 a 91**:

- La historia del modelo de membrana: Langmuir, Gorter y Grendel (la bicapa),
  Cole y Danielli (las proteínas), Robertson (el modelo trilaminar).
- El grosor de la membrana.
- El modelo de balsas de membrana.
- El modelo de mosaico fluido de Singer y Nicolson; la disposición de los
  fosfolípidos (colas hidrófobas dentro, cabezas hidrófilas fuera).
- La composición química de la membrana: proteínas (~60%), lípidos (~40%),
  glúcidos (2–10%), y la cara externa de los glúcidos.
- La asimetría de las dos caras y la enzima translocadora.

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

**Reactivos en este archivo:** 24
