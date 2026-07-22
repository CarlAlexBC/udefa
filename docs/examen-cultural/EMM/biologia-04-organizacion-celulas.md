# Biología · Capítulo 4 · La organización de las células

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** El capítulo 3 (Origen de la
vida) quedó cerrado en `biologia-03-origen-vida.md` con 202 reactivos.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). **Los recuadros "ENSAYO" van con `render.py`**, porque su
capa de texto es lorem ipsum — ver la nota completa en el encabezado del archivo
del capítulo 3.

```
python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" 107 <hoja> --desfase=46
```

## Alcance

Este archivo cubre el **capítulo 4 · La organización de las células**, que
empieza en la página impresa **61** (hoja 107 del PDF).

## Cobertura actual

Cubiertas las páginas impresas **61 a 63 y 66 a 81**:

- Tamaño de las células y por qué no son mucho mayores: la relación
  superficie/volumen.
- La forma de las células y qué la determina.
- La célula como sistema abierto: equilibrio y estado estacionario.
- Los límites de la célula: la membrana plasmática y la ventaja de compartimentar.
- Los componentes de una célula eucarionte: membrana, citoplasma, citosol y
  núcleo.
- La matriz extracelular: qué es, de qué está formada y su papel en tejidos.
- La pared celular como distintivo de las células vegetales, sus capas
  (laminilla media, primaria, secundaria), la lignina y lo que halló Hooke.
- El descubrimiento del núcleo: los citoblastos de Schleiden, Hertwig y la
  fecundación del erizo de mar, y Flemming con la cromatina y los cromosomas.
- La mitosis; el experimento de la ameba sin núcleo; y el clásico de Hämmerling
  con Acetabularia, que probó que el núcleo dirige la forma del sombrero.
- Características del núcleo: origen por invaginación, tamaño, la envoltura
  nuclear, los poros, el complejo del poro y la lámina nuclear.
- Miescher y la nucleína; la cromatina, las histonas; el nucléolo y las dos
  funciones del núcleo.
- La centrifugación diferencial para aislar organelas; el sistema de
  endomembranas; las vacuolas y la fagocitosis; el retículo endoplasmático.
- Los dos compartimentos del RE y sus dos tipos (rugoso y liso); las vesículas y
  las vacuolas, su tamaño, su fusión y sus funciones.
- Los ribosomas del RER y la síntesis de proteínas (insulina/páncreas); el
  complejo de Golgi y la glucosilación; los lisosomas (primarios y secundarios);
  y las funciones del REL (lípidos, desintoxicación, esteroides).
- Los peroxisomas (enzimas oxidativas, agua oxigenada, catalasa, hígado y
  etanol); las mitocondrias (dos membranas, crestas, matriz, tamaño, fisión
  binaria y su cromosoma propio).
- Los plástidos y sus tres tipos (leucoplastos, cromoplastos, cloroplastos) con
  el origen de sus nombres; los cloroplastos, la fotosíntesis y la membrana
  tilacoide.
- El citoesqueleto y sus tres integrantes (microtúbulos, filamentos de actina,
  filamentos intermedios); microtúbulos (tubulina, 22 nm, cilios y flagelos);
  actina (6 nm, actina G y F, seudópodos); los dos mecanismos de movimiento
  celular y la miosina.
- La actina y la miosina (seudópodos, cinturón contráctil de la división,
  microvellosidades, músculo); los filamentos intermedios (7–11 nm, proteínas
  fibrosas, tetrámeros); el citoesqueleto como estructura dinámica; y los cilios
  y flagelos: dónde están y quiénes no los tienen.

**Páginas 64–65 sin cuerpo citable.** Son la fig. 4-3 (célula animal), la fig.
4-4 (célula vegetal) y el cuadro de tipos de microscopio — todo diagrama e
imagen, cuyo texto además sale cifrado en la extracción (etiquetas de figura, no
prosa). No hay teoría citable que se pierda.

**No se repite la teoría celular.** El capítulo 4 vuelve a exponer a Schleiden y
Schwann (p. 61), pero eso ya está cubierto a fondo en el ensayo 3-1 del capítulo
3 (`biologia-03-origen-vida.md`, reactivos 172–184). Aquí sólo se escribe lo que
el capítulo 4 añade sobre la organización celular.

**Pendiente:** el resto del capítulo 4, y los capítulos 5, 7, 8, 11, 12, 31, 32,
35, 36 y 37.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico. Se
privilegian las **definiciones, procesos y estructuras** sobre los cálculos.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". El reactivo reproduce el libro
**exacto**: la opción correcta y la justificación son cita textual, sin
parafrasear ni bajar la dificultad. Cuatro opciones del mismo tipo y magnitud.

El enunciado **alterna las tres fórmulas del Anexo "H"** — "De acuerdo con",
"De conformidad con" y "En relación con" —, y la correcta se escribe siempre
en A porque el importador baraja las opciones.

**Referencia al capítulo — formato B, sólo cuando aclara** (crítica del 21 jul
2026, decisiones de Carlo). El reactivo que es un **dato suelto** —una cifra, una
fecha, un porcentaje— lleva la referencia en redacción natural: *"De acuerdo con
el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué
diámetro tiene el núcleo?"*. El que **ya nombra su concepto** en la pregunta
(*"¿qué es la fagocitosis?"*) queda limpio, sin referencia. El reparto lo hace
`tools/especificar-reactivos.js` con un filtro de "dato suelto"; al escribir a
mano, mismo criterio.

---

## Sub-lote 1 · El tamaño de las células (art. inicial, p. 61)

### 1

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿cuánto miden de diámetro la mayoría de las células del cuerpo de una planta o un animal?

- A. Entre 10 y 50 micrómetros
- B. Entre 1 y 5 micrómetros
- C. Entre 100 y 500 micrómetros
- D. Entre 10 y 50 milímetros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · tamaño

La mayoría de las células del cuerpo de una planta o de un animal miden entre 10 y 50 micrómetros (µm) de diámetro.

### 2

De conformidad con el libro de Biología, ¿cuál es la principal restricción en cuanto al tamaño de la célula?

- A. La que impone la relación entre su volumen y su superficie
- B. La que impone la resistencia de la membrana celular
- C. La que impone la cantidad de material genético que contiene
- D. La que impone la presión de las células vecinas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · tamaño

La principal restricción en cuanto al tamaño de la célula es la que impone la relación entre su volumen y su superficie.

### 3

En relación con el libro de Biología, ¿a través de qué se realizan los intercambios de la célula con el ambiente?

- A. A través de la superficie celular
- B. A través del núcleo
- C. A través de todo el volumen celular por igual
- D. A través de las organelas del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · tamaño

Debe tenerse en cuenta que los intercambios con el ambiente se realizan a través de la superficie celular y que los materiales intercambiados deben difundirse por todo su volumen.

### 4

De acuerdo con el libro de Biología, cuando un objeto aumenta su tamaño, ¿cómo cambian su superficie y su volumen?

- A. El volumen aumenta mucho más que la superficie, por lo que la relación superficie/volumen es cada vez menor
- B. La superficie aumenta mucho más que el volumen, por lo que la relación superficie/volumen es cada vez mayor
- C. La superficie y el volumen aumentan de manera proporcional
- D. Sólo aumenta el volumen, mientras la superficie permanece constante

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · tamaño

Cuando un objeto aumenta su tamaño, la superficie y el volumen no lo hacen de manera proporcional: el volumen aumenta mucho más de lo que lo hace la superficie y, en consecuencia, la relación superficie/volumen es cada vez menor.

### 5

De conformidad con el libro de Biología, ¿qué consecuencia trae un aumento del tamaño celular?

- A. El enlentecimiento de los procesos de intercambio y distribución de materiales
- B. La aceleración de los procesos de intercambio de materiales
- C. El aumento proporcional de la superficie de intercambio
- D. La detención total del metabolismo celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · tamaño

Un aumento del tamaño celular implica una disminución relativa de la superficie y trae como consecuencia el enlentecimiento de los procesos de intercambio y distribución de materiales.

> Ésta es la razón de fondo de por qué las células no son mucho mayores: al
> crecer, la superficie de intercambio se queda corta frente al volumen que
> tiene que abastecer.

---

## Sub-lote 2 · La forma de las células (p. 61)

### 6

En relación con el libro de Biología, ¿qué forma tendería a tomar una célula aislada?

- A. Una forma esférica, al igual que las gotas de agua o las burbujas
- B. Una forma cúbica
- C. Una forma alargada y cilíndrica
- D. Una forma irregular sin patrón definido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · forma

Una célula aislada tendería a tomar una forma esférica, al igual que las gotas de agua o las burbujas.

### 7

De acuerdo con el libro de Biología, ¿por qué muchos organismos unicelulares adoptan formas distintas de la esférica?

- A. Debido a la presencia de estructuras internas, como el citoesqueleto, o de paredes celulares
- B. Debido a la presión de las células vecinas
- C. Debido a la cantidad de material genético que contienen
- D. Debido a la velocidad de sus intercambios con el ambiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · forma

Sin embargo, muchos organismos unicelulares adoptan otras formas debido a la presencia de estructuras internas, como el citoesqueleto, o de paredes celulares.

### 8

De conformidad con el libro de Biología, ¿qué factores influyen además en la forma de las células de los organismos pluricelulares?

- A. La adhesión y la presión de otras células o superficies vecinas
- B. Únicamente la cantidad de citoesqueleto que poseen
- C. La velocidad de difusión de los nutrientes
- D. El tamaño del núcleo celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · forma

En los organismos pluricelulares, además de estos factores, influyen también la adhesión y la presión de otras células o superficies vecinas.

### 9

En relación con el libro de Biología, en los organismos pluricelulares, ¿con qué está en relación la forma de las células?

- A. Con las funciones particulares que cumplen
- B. Con el tamaño total del organismo
- C. Con la cantidad de organelas que poseen
- D. Con la velocidad de su reproducción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 61
**Subtema:** Organización de las células · forma

Por lo general, en estos organismos, la forma de las células está en relación con las funciones particulares que cumplen.

---

## Sub-lote 3 · La célula como sistema abierto (p. 63)

### 10

De acuerdo con el libro de Biología, ¿qué estado tienden a alcanzar las células como todo sistema abierto?

- A. El estado más estable compatible con las condiciones en que se encuentre
- B. El estado de menor energía posible, sin excepción
- C. El estado de máxima acumulación de desechos
- D. El estado de equilibrio térmico con otras células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · sistema abierto

Como todo sistema abierto, a través de sus interacciones, las células tienden a alcanzar el estado más estable compatible con las condiciones en que se encuentre.

### 11

De conformidad con el libro de Biología, si se produce una ligera perturbación una vez alcanzado ese estado estable, ¿qué hace el sistema?

- A. Tiende a revertirla mediante el restablecimiento de dicha estabilidad
- B. Tiende a amplificarla hasta alcanzar un nuevo estado
- C. Pierde su estabilidad de forma permanente
- D. Detiene todos sus intercambios con el medio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · sistema abierto

Si se produce una ligera perturbación una vez alcanzado este estado, el sistema tiende a revertirla mediante el restablecimiento de dicha estabilidad.

### 12

En relación con el libro de Biología, ¿qué ejemplo da el libro de un sistema que alcanza un estado de equilibrio con el entorno?

- A. Un insecto, que tarde o temprano alcanza una temperatura corporal igual a la del medio externo
- B. Un mamífero, que mantiene su temperatura corporal en 37 °C
- C. Una célula procarionte que carece de membranas internas
- D. Una gota de agua que toma forma esférica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · sistema abierto

Por ejemplo, un insecto tarde o temprano alcanza una temperatura corporal igual a la del medio externo.

### 13

De acuerdo con el libro de Biología, ¿cómo se llaman los estados estables alejados del equilibrio que pueden alcanzar los sistemas abiertos?

- A. Estados estacionarios
- B. Estados de equilibrio
- C. Estados de reposo
- D. Estados de perturbación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · sistema abierto

Los sistemas abiertos pueden alcanzar también estados estables alejados del equilibrio, llamados estados estacionarios.

### 14

De conformidad con el libro de Biología, ¿qué ejemplo da el libro de un sistema en estado estacionario?

- A. Los mamíferos, que mantienen una temperatura corporal de aproximadamente 37 °C independiente de la temperatura del ambiente
- B. Los insectos, que igualan su temperatura a la del medio externo
- C. Las células procariontes, que carecen de organelas
- D. Las gotas de agua y las burbujas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · sistema abierto

Los mamíferos representan un buen ejemplo de un sistema en estado estacionario, ya que mantienen una temperatura corporal de aproximadamente 37 °C de manera independiente de la temperatura del ambiente exterior.

> Par contrapuesto que el libro define seguido: el **insecto** alcanza el
> equilibrio (iguala su temperatura a la del medio); el **mamífero** mantiene un
> estado estacionario (37 °C pase lo que pase afuera). Cada uno es el distractor
> del otro.

---

## Sub-lote 4 · Los límites de la célula (p. 63)

### 15

En relación con el libro de Biología, ¿cómo se llama la superficie que separa a la célula del medio que la rodea?

- A. La membrana celular o membrana plasmática
- B. La pared celular
- C. El citosol
- D. La membrana nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · límites de la célula

En una célula, la superficie que separa el sistema del medio que lo rodea es la membrana celular o membrana plasmática, a través de la cual ocurre el intercambio de sustancias con el medio.

### 16

De acuerdo con el libro de Biología, ¿cómo regula la membrana celular el tránsito de sustancias?

- A. De manera selectiva hacia fuera y hacia dentro de la célula
- B. Permitiendo el paso libre de todas las sustancias
- C. Impidiendo todo intercambio con el medio externo
- D. Sólo hacia dentro de la célula, nunca hacia fuera

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · límites de la célula

Al definir sus límites, esta estructura puede considerarse como una entidad diferente de su entorno, que regula el tránsito de sustancias de manera selectiva hacia fuera y hacia dentro de ella.

### 17

De conformidad con el libro de Biología, ¿qué implica la delimitación de espacios intracelulares en las células eucariontes?

- A. La posibilidad de separación de las funciones, haciéndolas más eficaces
- B. La imposibilidad de intercambiar sustancias con el medio
- C. La pérdida de la membrana celular externa
- D. La reducción del número de organelas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · límites de la célula

La delimitación de espacios intracelulares implica la posibilidad de separación de las funciones haciéndolas más eficaces.

### 18

En relación con el libro de Biología, ¿dónde ocurren todos los procesos en las células procariontes?

- A. En un único compartimento limitado por la membrana celular
- B. En el interior del núcleo separado por la membrana nuclear
- C. En el interior de las organelas rodeadas por membranas
- D. En la pared celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · límites de la célula

La presencia de tales estructuras marca una importante diferencia con sus predecesores procariontes, en los cuales todos los procesos ocurren en un único compartimento limitado por la membrana celular.

---

## Sub-lote 5 · Los componentes de una célula eucarionte (p. 63)

### 19

De acuerdo con el libro de Biología, ¿qué delimita el medio interno del externo en una célula eucarionte básica?

- A. Una membrana celular
- B. El citoplasma
- C. El citosol
- D. La membrana nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · componentes

En una célula eucarionte básica podremos encontrar: una membrana celular que delimita el medio interno del externo.

### 20

De conformidad con el libro de Biología, ¿qué constituye el medio interno de la célula?

- A. El citoplasma
- B. El citosol únicamente
- C. El núcleo
- D. La membrana celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · componentes

Un citoplasma que constituye el medio interno.

> Par que hay que separar: el **citoplasma** es todo el medio interno; el
> **citosol** es sólo su parte líquida (reactivo 21). No son sinónimos.

### 21

En relación con el libro de Biología, ¿qué es el citosol?

- A. La parte líquida del citoplasma, una solución cuyo solvente es el agua
- B. Todo el medio interno de la célula, incluidas las organelas
- C. La membrana que delimita el núcleo
- D. El conjunto de organelas que flotan en la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · componentes

En él puede distinguirse una parte líquida, el citosol, que es una solución, cuyo solvente es el agua.

### 22

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué proporción del citosol constituyen aproximadamente las proteínas?

- A. Aproximadamente el 20%
- B. Aproximadamente el 50%
- C. Aproximadamente el 5%
- D. Aproximadamente el 80%

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · componentes

Los solutos constituyen una variedad de sustancias que participan del metabolismo celular, entre las cuales las proteínas constituyen aproximadamente el 20%.

### 23

De conformidad con el libro de Biología, ¿qué separa al núcleo celular del citoplasma?

- A. La membrana nuclear
- B. La membrana celular
- C. El citosol
- D. La pared celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · componentes

Un núcleo celular separado del citoplasma por la membrana nuclear y en cuyo interior se encuentra el material genético.

### 24

En relación con el libro de Biología, ¿en qué compartimento se mantiene la mayor parte del ADN de una célula eucarionte?

- A. En el núcleo
- B. En el citosol
- C. En las mitocondrias
- D. En el retículo endoplasmático

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 63
**Subtema:** Organización de las células · componentes

La mayor parte del ácido desoxirribonucleico (ADN) se mantiene en un compartimento separado, el núcleo, y en el citoplasma se encuentran distintas organelas que llevan a cabo funciones específicas.

> El libro dice "la mayor parte", no "todo": algo de ADN queda fuera del núcleo,
> en las mitocondrias y los cloroplastos (ver el ADN circular de las organelas,
> reactivo 115 del capítulo 3). El matiz importa.

---

## Sub-lote 6 · La matriz extracelular (p. 66)

### 25

De acuerdo con el libro de Biología, ¿qué ocupa el espacio extracelular que rodea a las células en los organismos pluricelulares?

- A. La matriz extracelular, que proporciona a las células un ambiente particular
- B. El citosol, que baña a las células vecinas
- C. La pared celular, común a todas las células
- D. La membrana plasmática de las células vecinas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · matriz extracelular

En los organismos pluricelulares, las células se encuentran rodeadas por el espacio extracelular. Este espacio está ocupado por la matriz extracelular, que proporciona a las células un ambiente particular.

### 26

De conformidad con el libro de Biología, ¿por qué está formada la matriz extracelular?

- A. Por proteínas fibrosas y por la sustancia fundamental, constituida principalmente por proteínas e hidratos de carbono
- B. Por una bicapa de lípidos y proteínas de membrana
- C. Por celulosa rígida y porosa
- D. Por una solución de sales cuyo solvente es el agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · matriz extracelular

La matriz está formada por proteínas fibrosas y por la sustancia fundamental, constituida principalmente por proteínas e hidratos de carbono asociados en distintas combinaciones.

### 27

En relación con el libro de Biología, ¿qué favorece la interacción de las células con las proteínas y los hidratos de carbono de la matriz extracelular?

- A. La adhesión entre células
- B. La rigidez de la pared celular
- C. La formación de la membrana nuclear
- D. La difusión de sustancias por el citosol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · matriz extracelular

Las células, a través de estos últimos y las proteínas de sus membranas, interactúan con las proteínas y los hidratos de carbono de la matriz extracelular, lo que favorece así la adhesión entre células.

### 28

De acuerdo con el libro de Biología, ¿qué papel fundamental cumple la matriz extracelular en el desarrollo de tejidos y órganos?

- A. A través de ella se transmiten señales que influyen en el crecimiento y la reproducción celular
- B. A través de ella se realiza la fotosíntesis
- C. A través de ella se mantiene la forma rígida de la célula
- D. A través de ella se almacena el material genético

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · matriz extracelular

La matriz, además, cumple un papel fundamental en el desarrollo de tejidos y órganos, ya que a través de ella se transmiten señales que influyen en el crecimiento y la reproducción celular.

### 29

De conformidad con el libro de Biología, ¿qué permiten las proteínas de membrana capaces de establecer contactos con células semejantes?

- A. La adhesión de las células entre sí y la consiguiente formación de un tejido específico
- B. La difusión de nutrientes por el citosol
- C. La síntesis de la matriz extracelular
- D. La separación del núcleo respecto del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · matriz extracelular

Las proteínas de membrana permiten la adhesión de las células entre sí y la consiguiente formación de un tejido específico.

---

## Sub-lote 7 · La pared celular (p. 66)

### 30

En relación con el libro de Biología, ¿qué distinción fundamental hay entre las células animales y las vegetales respecto de la pared celular?

- A. Que sólo las células vegetales están rodeadas por una pared celular
- B. Que sólo las células animales están rodeadas por una pared celular
- C. Que ambas están rodeadas por una pared celular idéntica
- D. Que ninguna de las dos posee pared celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · pared celular

Una distinción fundamental entre las células animales y vegetales es que solo estas últimas están rodeadas por una pared celular.

### 31

De acuerdo con el libro de Biología, ¿cómo es la pared celular respecto de su rigidez y su dinámica?

- A. Es una estructura rígida, pero no estática, ya que su estructura porosa deja pasar los materiales solubles
- B. Es una estructura rígida y completamente estática, que impide todo intercambio
- C. Es una estructura flexible y dinámica, sin poros
- D. Es una estructura idéntica a la membrana plasmática

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 66
**Subtema:** Organización de las células · pared celular

Aunque la pared celular es una estructura rígida, no es estática, ya que su estructura porosa deja pasar a los materiales solubles que entran en contacto con ella.

> El matiz que el libro cuida: **rígida pero no estática**. El distractor B se
> queda con "rígida" y la vuelve una muralla impermeable, que es lo contrario de
> lo que dice el texto.

---

## Sub-lote 8 · Las capas de la pared celular (p. 67)

### 32

De acuerdo con el libro de Biología, ¿cómo crecen fundamentalmente las plantas?

- A. Por alargamiento celular, un proceso en el que la célula agrega nuevos materiales a sus paredes
- B. Por multiplicación del número de organelas de cada célula
- C. Por engrosamiento de la membrana plasmática
- D. Por acumulación de agua en el citosol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

En las plantas, el crecimiento ocurre fundamentalmente por alargamiento celular, un proceso en el que la célula agrega nuevos materiales a sus paredes.

### 33

De conformidad con el libro de Biología, ¿qué se forma entre las dos células nuevas cuando una célula vegetal se divide?

- A. La laminilla media, una capa delgada de material aglutinante que mantiene juntas las células contiguas
- B. La pared secundaria, reforzada con lignina
- C. La membrana plasmática compartida
- D. La matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

Cuando una célula vegetal se divide, se forma una capa delgada de material aglutinante entre las dos células nuevas, que constituye la laminilla media y mantiene juntas las células contiguas.

### 34

En relación con el libro de Biología, ¿qué contiene principalmente la pared celular primaria?

- A. Moléculas de celulosa
- B. Moléculas de lignina
- C. Proteínas fibrosas
- D. Sales disueltas en agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

Luego, cada célula vegetal construye su pared celular primaria a cada lado de esta laminilla. La pared primaria contiene principalmente moléculas de celulosa.

### 35

De acuerdo con el libro de Biología, ¿qué diferencia a la pared secundaria de la primaria en cuanto a su capacidad de expandirse?

- A. Que la pared secundaria ya no es capaz de expandirse de la misma manera que la primaria
- B. Que la pared secundaria se expande mucho más que la primaria
- C. Que ambas se expanden por igual
- D. Que la pared secundaria carece por completo de celulosa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

A medida que la célula madura puede formar una pared secundaria, ya no es capaz de expandirse de la misma manera que la primaria.

> Escala de capas que conviene estudiar en orden: **laminilla media** (entre dos
> células) → **pared primaria** (celulosa, se expande) → **pared secundaria**
> (con lignina, ya no se expande).

### 36

De conformidad con el libro de Biología, ¿qué polisacárido refuerza con frecuencia la pared secundaria?

- A. La lignina
- B. La celulosa
- C. La quitina
- D. El almidón

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

La pared secundaria con frecuencia contiene polisacáridos, como la lignina, que la refuerzan.

> Par que se confunde: la **celulosa** compone la pared primaria; la **lignina**
> refuerza la secundaria. Los dos son polisacáridos de la pared, pero de capas
> distintas (ver reactivo 34).

### 37

En relación con el libro de Biología, ¿qué observó Hooke en las láminas de corcho?

- A. La pared externa que deja la célula vegetal cuando muere, como una obra arquitectónica de la célula
- B. El núcleo de las células vegetales vivas
- C. Las mitocondrias flotando en el citosol
- D. La matriz extracelular de las células animales

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

La célula vegetal, que en principio estaba viva, a menudo muere y solo deja la pared externa como una obra arquitectónica de la célula. Esto es lo que halló Hooke cuando observó las láminas de corcho.

### 38

De acuerdo con el libro de Biología, ¿en las paredes de qué organismos está por lo general ausente la celulosa?

- A. En las de hongos y procariontes
- B. En las de las algas
- C. En las de las plantas superiores
- D. En las de los tejos y otras maderas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 67
**Subtema:** Organización de las células · pared celular

Muchas algas también contienen celulosa en sus paredes, mientras que, en las paredes de hongos y procariontes, por lo general esta sustancia está ausente.

> El distractor B es una trampa que el propio libro desarma: las **algas sí**
> tienen celulosa; los que **no** son los hongos y los procariontes.

---

## Sub-lote 9 · Los citoblastos de Schleiden (p. 68)

*El capítulo vuelve a Schleiden y Schwann, pero por un ángulo NUEVO respecto del
ensayo 3-1: aquí se trata el descubrimiento del núcleo, no la formulación de la
teoría celular. Sólo se escribe lo que añade.*

### 39

De acuerdo con el libro de Biología, ¿qué observaba Schleiden en las células del interior de las semillas, por su interés en el desarrollo?

- A. Una especie de gránulos que daban la impresión de ser núcleos a partir de los cuales se formaban las células
- B. Las mitocondrias que aportaban energía al embrión
- C. La pared celular que hacía visibles las celdillas
- D. La matriz extracelular entre las células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · descubrimiento del núcleo

Como estaba interesado en los procesos de desarrollo, Schleiden observaba las células del interior de las semillas. No tardó en descubrir en ellas una especie de gránulos que le llamaron la atención porque daban la impresión de ser núcleos a partir de los cuales se formaban las células en el embrión en desarrollo.

### 40

De conformidad con el libro de Biología, ¿cómo denominó Schleiden a esos gránulos, y qué significan las raíces del término?

- A. Citoblastos: cito, célula; blasto, germen
- B. Cromosomas: cromo, color; soma, cuerpo
- C. Cromatina: por su capacidad de colorearse
- D. Citoplasma: cito, célula; plasma, líquido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · descubrimiento del núcleo

Por eso, los denominó citoblastos (cito: célula; blasto: germen).

### 41

En relación con el libro de Biología, ¿qué eran en realidad los gránulos o citoblastos que observaban Schleiden y Schwann?

- A. Los núcleos celulares de las células eucariontes, fáciles de identificar mediante tinción
- B. Las mitocondrias de las células
- C. Las paredes celulares de los vegetales
- D. Los cromosomas ya duplicados

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · descubrimiento del núcleo

Los gránulos o citoblastos no eran otra cosa que los núcleos celulares de las células eucariontes, que son fáciles de identificar mediante tinción.

---

## Sub-lote 10 · Hertwig y la fecundación (recuadro 4-2, p. 68)

### 42

De acuerdo con el libro de Biología, ¿qué embriólogo alemán estudió la fecundación usando óvulos y esperma de erizos de mar?

- A. Oscar Hertwig
- B. Walter Flemming
- C. Theodor Schwann
- D. Mathias Schleiden

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · el papel del núcleo

Una de las observaciones microscópicas más importantes fue realizada por un embriólogo alemán, Oscar Hertwig (1849-1922), quien estudiaba el fenómeno de la fecundación utilizando en sus investigaciones óvulos y esperma de erizos de mar.

### 43

De conformidad con el libro de Biología, ¿por qué los gametos de erizo de mar son un buen modelo para estudiar el núcleo celular?

- A. Porque producen óvulos y espermatozoides en gran cantidad, y los óvulos son grandes, transparentes y fáciles de observar
- B. Porque sus células carecen de pared celular
- C. Porque su fecundación ocurre dentro del cuerpo del animal
- D. Porque sus núcleos son de mayor tamaño que los cromosomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · el papel del núcleo

Estos animales producen óvulos y espermatozoides en gran cantidad y los liberan al medio acuático donde ocurre la fecundación. Además, los óvulos son relativamente grandes y transparentes y, por lo tanto, fáciles de observar. Todas estas características convierten a los gametos de erizo de mar en un buen modelo para el estudio del núcleo celular.

### 44

En relación con el libro de Biología, ¿qué observó Hertwig durante el proceso de fecundación, a pesar de la presencia de un enorme número de espermatozoides?

- A. Que sólo uno de ellos penetraba dentro del óvulo
- B. Que todos ellos penetraban dentro del óvulo
- C. Que ninguno lograba penetrar el óvulo
- D. Que el óvulo se dividía antes de la penetración

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · el papel del núcleo

Hertwig vio que, a pesar de la presencia de un enorme número de espermatozoides, solo uno de ellos penetraba dentro del óvulo.

### 45

De acuerdo con el libro de Biología, ¿qué visualizó Hertwig respecto de los núcleos del espermatozoide y del óvulo?

- A. Que el núcleo del espermatozoide se unía al del óvulo fusionándose
- B. Que el núcleo del espermatozoide reemplazaba por completo al del óvulo
- C. Que ambos núcleos se destruían durante la fecundación
- D. Que el núcleo del óvulo se dividía antes de la unión

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · el papel del núcleo

Así fue como pudo visualizar que el núcleo del espermatozoide se unía al del óvulo fusionándose.

### 46

De conformidad con el libro de Biología, ¿qué ayudó a establecer más adelante la observación de Hertwig sobre la fusión de los núcleos?

- A. Que el núcleo es el portador de la información hereditaria
- B. Que el citoplasma es el portador de la información hereditaria
- C. Que la fecundación no requiere la unión de los núcleos
- D. Que los cromosomas se forman en el citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · el papel del núcleo

Esta observación, confirmada por otros científicos y en otros tipos de organismos, fue importante para establecer más adelante el hecho de que el núcleo es el portador de la información hereditaria.

---

## Sub-lote 11 · Flemming, la cromatina y los cromosomas (recuadro 4-2, p. 68)

### 47

En relación con el libro de Biología, ¿qué citólogo alemán aportó otra pista importante sobre el núcleo en la década de 1880?

- A. Walter Flemming
- B. Oscar Hertwig
- C. Theodor Schwann
- D. Camilo Golgi

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · cromatina y cromosomas

Otra importante pista acerca de la importancia del núcleo fue aportada por el citólogo alemán Walter Flemming (1843-1905) en la década de 1880.

### 48

De acuerdo con el libro de Biología, ¿por qué Flemming denominó cromatina a los filamentos del núcleo?

- A. Porque se coloreaban fuertemente
- B. Porque se apelotonaban antes de la división
- C. Porque se duplicaban formando pares
- D. Porque se alineaban en el ecuador de la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · cromatina y cromosomas

Flemming observó el núcleo celular compuesto por una serie de filamentos que se coloreaban fuertemente, razón por la cual los denominó cromatina.

### 49

De conformidad con el libro de Biología, ¿cómo denominó Flemming a los bastoncitos en que se seccionaba el filamento de cromatina antes de la división celular?

- A. Cromosomas
- B. Citoblastos
- C. Centríolos
- D. Gametos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · cromatina y cromosomas

Al observar los cambios que experimentaba la cromatina a lo largo del desarrollo de una célula, pudo observar cómo, en momentos previos a la división celular, el filamento se apelotonaba y luego se seccionaba en varios bastoncitos a los que denominó cromosomas.

> Par que hay que separar: la **cromatina** es el filamento que se colorea; los
> **cromosomas** son los bastoncitos en que ese filamento se secciona antes de
> dividirse. Es la misma materia en dos momentos distintos.

### 50

En relación con el libro de Biología, ¿cómo llamó Flemming al fenómeno que describió durante la división celular?

- A. "La danza de los cromosomas"
- B. "La fusión de los núcleos"
- C. "El germen de las células"
- D. "El baile de la cromatina"

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 68
**Subtema:** Organización de las células · cromatina y cromosomas

Durante la división celular, describió "la danza de los cromosomas", es decir, el fenómeno por el cual estos bastoncitos se duplican formando cromosomas dobles, que se alinean en el ecuador de la célula y luego se separan en cromosomas simples, cada uno hacia un polo de la célula que luego se divide en dos, lo que da lugar a dos células hijas.

---

## Sub-lote 12 · La mitosis y el papel del núcleo (recuadro 4-2, p. 69)

### 51

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿cuánta cromatina posee cada célula hija tras la división, según las conclusiones de Flemming?

- A. La misma cantidad que la célula madre, como consecuencia de la duplicación de cromosomas previa a la división
- B. La mitad de la cantidad que la célula madre
- C. El doble de la cantidad que la célula madre
- D. Una cantidad variable, distinta en cada célula hija

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · mitosis

Cada una de estas células hijas posee la misma cantidad de cromatina que la célula madre, como consecuencia de la duplicación de cromosomas previa a la división.

### 52

De conformidad con el libro de Biología, ¿cómo se denomina el proceso de división descrito por Flemming?

- A. Mitosis
- B. Fecundación
- C. Fisión binaria
- D. Regeneración

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · mitosis

Este proceso se denomina mitosis.

### 53

En relación con el libro de Biología, ¿qué le ocurrió a la ameba a la que se le eliminó el núcleo por microcirugía?

- A. Dejó de dividirse y en pocos días murió
- B. Continuó dividiéndose normalmente
- C. Regeneró su núcleo en 24 horas
- D. Se transformó en otra especie

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · papel del núcleo

En un experimento simple se eliminó por microcirugía el núcleo de un organismo unicelular eucarionte, una ameba, la cual dejó de dividirse y en pocos días murió.

### 54

De acuerdo con el libro de Biología, ¿qué ocurría si en las 24 horas siguientes se le implantaba a la ameba el núcleo de otra ameba?

- A. La célula sobrevivía y podía dividirse normalmente
- B. La célula moría de inmediato
- C. La célula se dividía pero las hijas carecían de núcleo
- D. La célula se transformaba en dos organismos distintos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · papel del núcleo

Si en el transcurso de las 24 horas siguientes a la eliminación del núcleo original se le implantaba el de otra ameba, la célula sobrevivía y podía dividirse normalmente.

---

## Sub-lote 13 · El experimento de Hämmerling con Acetabularia (recuadro 4-2, pp. 69–70)

### 55

De conformidad con el libro de Biología, ¿qué citólogo alemán estudió las funciones del núcleo y del citoplasma aprovechando el alga Acetabularia?

- A. Joachim Hämmerling
- B. Walter Flemming
- C. Oscar Hertwig
- D. Theodor Schwann

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · experimento de Hämmerling

En los primeros años de la década de 1930, el citólogo alemán Joachim Hämmerling (1901-1980) estudió las funciones del núcleo y del citoplasma en forma comparada, aprovechando ciertas propiedades inusuales del alga marina Acetabularia.

### 56

En relación con el libro de Biología, ¿cómo es el cuerpo del alga Acetabularia?

- A. Está formado por una única célula gigante de 2 a 5 centímetros de largo, con un "sombrero", un "pedicelo" y un "pie"
- B. Está formado por miles de células pequeñas organizadas en tejidos
- C. Está formado por dos células, una con núcleo y otra sin él
- D. Está formado por una colonia de células idénticas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · experimento de Hämmerling

El cuerpo de Acetabularia está formado por una única célula gigante de 2 a 5 centímetros de largo, en la que se pueden distinguir porciones diferenciadas: un "sombrero", un "pedicelo" y un "pie".

### 57

De acuerdo con el libro de Biología, ¿en qué porción de la Acetabularia está contenido el núcleo?

- A. En la porción llamada "pie"
- B. En la porción llamada "sombrero"
- C. En la porción llamada "pedicelo"
- D. Repartido por toda la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · experimento de Hämmerling

El núcleo de la célula está contenido en la porción llamada "pie".

### 58

De conformidad con el libro de Biología, ¿cómo interpretó Hämmerling el hecho de que un sombrero seccionado se regenerara?

- A. Como indicio de que el núcleo dirige la producción de ciertas sustancias determinantes del sombrero, que se acumulan en el citoplasma
- B. Como indicio de que el sombrero se regenera de forma independiente del núcleo
- C. Como indicio de que el citoplasma contiene el material hereditario
- D. Como indicio de que el pie se transforma en un nuevo sombrero

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · experimento de Hämmerling

Hämmerling interpretó estos resultados como indicio de que el núcleo dirige la producción de ciertas sustancias determinantes del sombrero y que estas se acumulan en el citoplasma.

### 59

En relación con el libro de Biología, tras trasplantar un núcleo de la otra especie a una célula sin sombrero, ¿qué tipo de sombrero formaba poco después del trasplante?

- A. Un sombrero de tipo intermedio
- B. Un sombrero idéntico al del núcleo trasplantado
- C. Un sombrero idéntico al de la célula original
- D. Ningún sombrero

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 69
**Subtema:** Organización de las células · experimento de Hämmerling

Luego de trasplantar un núcleo de la otra especie a una célula a la que se le había seccionado el sombrero, poco después del trasplante nuclear formaba un sombrero de tipo intermedio.

> El sombrero intermedio se explica porque en el citoplasma quedaban aún
> sustancias del núcleo **anterior**, mezcladas con las del núcleo **nuevo**. Es
> el paso clave del experimento.

### 60

De acuerdo con el libro de Biología, al formarse el segundo sombrero tras extirpar el "híbrido", ¿bajo el control de qué quedaba por completo su forma?

- A. Bajo el control del nuevo núcleo trasplantado, proveniente de la otra especie
- B. Bajo el control del núcleo original, ya extirpado
- C. Bajo el control del citoplasma, independiente del núcleo
- D. Bajo el control conjunto de ambos núcleos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · experimento de Hämmerling

Las sustancias determinantes de la forma del "sombrero", remanentes del núcleo anterior y presentes en el citoplasma antes del trasplante, se habían agotado. De este modo, la forma del sombrero estaba por completo bajo el control del nuevo núcleo trasplantado proveniente de la otra especie.

> La conclusión del experimento: el **núcleo** manda sobre la forma. El primer
> sombrero salió intermedio por las sustancias viejas del citoplasma; el segundo,
> agotadas esas sustancias, ya fue puro del núcleo nuevo.

---

## Sub-lote 14 · Características y envoltura del núcleo (p. 71)

### 61

De acuerdo con el libro de Biología, ¿cómo habría surgido el núcleo en el curso de la historia evolutiva?

- A. Por invaginación de la membrana celular de organismos procariontes
- B. Por la fusión de dos mitocondrias
- C. Por la entrada de un procarionte que se volvió simbionte
- D. Por la condensación de la cromatina del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 71
**Subtema:** Organización de las células · características del núcleo

El núcleo es la estructura típica de la célula eucarionte, que habría surgido en el curso de la historia evolutiva por invaginación de la membrana celular de organismos procariontes.

> Enlaza con el capítulo 3: la teoría de Margulis explica mitocondrias y
> cloroplastos por endosimbiosis, pero el **núcleo** se habría formado por
> **invaginación** de la membrana (reactivo 110 del capítulo 3).

### 62

De conformidad con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué diámetro tiene aproximadamente el núcleo y qué proporción del volumen celular ocupa?

- A. Alrededor de 5 µm de diámetro, y ocupa aproximadamente un 10% del volumen celular
- B. Alrededor de 50 µm de diámetro, y ocupa aproximadamente la mitad del volumen celular
- C. Alrededor de 1 µm de diámetro, y ocupa aproximadamente un 50% del volumen celular
- D. Alrededor de 10 µm de diámetro, y ocupa aproximadamente un 5% del volumen celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 71
**Subtema:** Organización de las células · características del núcleo

En relación con el tamaño total de la célula, es una estructura frecuentemente esférica y voluminosa: tiene alrededor de 5 µm de diámetro y suele ocupar aproximadamente un 10% del volumen celular.

### 63

En relación con el libro de Biología, ¿por qué está constituida la envoltura nuclear?

- A. Por dos membranas concéntricas separadas por un espacio perinuclear
- B. Por una única membrana lipídica
- C. Por una red proteica sin membranas
- D. Por tres membranas superpuestas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 71
**Subtema:** Organización de las células · envoltura nuclear

Está delimitado por una envoltura nuclear, constituida por dos membranas concéntricas separadas por un espacio perinuclear.

### 64

De acuerdo con el libro de Biología, ¿qué interrumpe la continuidad de las membranas de la envoltura nuclear?

- A. Pequeños poros nucleares por donde circulan materiales entre el núcleo y el citoplasma
- B. La lámina nuclear que la recubre
- C. Los cromosomas que la atraviesan
- D. El nucléolo adherido a su superficie

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 71
**Subtema:** Organización de las células · envoltura nuclear

Cada una de las membranas es una bicapa lipídica, cuya continuidad se ve interrumpida, a intervalos frecuentes, por pequeños poros nucleares por donde circulan materiales entre el núcleo y el citoplasma.

---

## Sub-lote 15 · El complejo del poro y la lámina nuclear (p. 70)

### 65

De conformidad con el libro de Biología, ¿cómo se llama la estructura discoidal de más de 100 moléculas de proteínas que forma cada poro nuclear?

- A. El complejo del poro nuclear
- B. La lámina nuclear
- C. El nucléolo
- D. La histona

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · poro nuclear

Cada uno de ellos está constituido por una estructura discoidal con más de 100 moléculas de proteínas, que se conoce con el nombre de complejo del poro nuclear.

### 66

En relación con el libro de Biología, ¿cómo pasan las pequeñas moléculas solubles a través de los poros nucleares?

- A. Por difusión pasiva
- B. Por transporte activo con gasto de energía
- C. Por señales específicas de transporte
- D. Únicamente durante la división celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · poro nuclear

A través de ellos pasan, por difusión pasiva, pequeñas moléculas solubles en la membrana.

> Par contrapuesto: las moléculas **pequeñas** pasan por **difusión pasiva**; las
> **grandes**, como las proteínas, por **transporte activo** con señales
> específicas (ver reactivo 67).

### 67

De acuerdo con el libro de Biología, ¿cómo se movilizan las moléculas grandes, como las proteínas, a través del poro nuclear?

- A. Según señales específicas, mediante diferentes mecanismos de transporte activo
- B. Por difusión pasiva, como las moléculas pequeñas
- C. Sin ningún control, en cualquier dirección
- D. Sólo hacia dentro del núcleo, nunca hacia fuera

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · poro nuclear

Las moléculas grandes, como las proteínas, se movilizan según señales específicas hacia dentro o fuera del núcleo, mediante diferentes mecanismos de transporte activo.

### 68

De conformidad con el libro de Biología, ¿qué recubre la membrana interna de la envoltura nuclear y qué le aporta?

- A. Una red proteica llamada lámina nuclear, que le aporta estabilidad al núcleo
- B. Una capa de histonas, que le aporta información hereditaria
- C. El nucléolo, que le aporta ribosomas
- D. El complejo del poro, que le aporta rigidez

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · lámina nuclear

La membrana interna de la envoltura nuclear está recubierta por una red proteica llamada lámina nuclear, que le aporta estabilidad al núcleo.

---

## Sub-lote 16 · Miescher, la nucleína y la cromatina (p. 70)

### 69

En relación con el libro de Biología, ¿quién aisló por primera vez la sustancia que denominó nucleína?

- A. El biólogo y médico suizo Friedrich Miescher
- B. El citólogo alemán Walter Flemming
- C. El embriólogo alemán Oscar Hertwig
- D. El citólogo alemán Joachim Hämmerling

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · nucleína

Desde que el biólogo y médico suizo Friedrich Miescher (1844-1893) aisló por primera vez una sustancia a la que denominó nucleína hasta que se estableció que esta se encuentra formada por ácidos nucleicos y proteínas.

### 70

De acuerdo con el libro de Biología, ¿de qué están formados los cromosomas de las células eucariontes?

- A. De moléculas de ADN que portan la información hereditaria, unidas fuertemente a proteínas
- B. Únicamente de moléculas de ADN, sin proteínas
- C. Únicamente de proteínas llamadas histonas
- D. De ácidos nucleicos y lípidos de membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · cromatina

Los cromosomas de las células eucariontes están formados por moléculas de ADN que portan la información hereditaria, unidas fuertemente a proteínas.

### 71

De conformidad con el libro de Biología, ¿cómo se denomina el grupo de proteínas de los cromosomas que cumple una función estructural?

- A. Histonas
- B. Proteínas no histónicas
- C. Láminas nucleares
- D. Nucleínas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · cromatina

Un grupo de estas proteínas se denomina histonas y cumplen una función estructural, mientras que las proteínas no histónicas son de tipo regulatorio.

> Par contrapuesto que el libro define seguido: las **histonas** son
> **estructurales**; las **no histónicas**, **regulatorias**. Cada una es el
> distractor de la otra.

### 72

En relación con el libro de Biología, ¿cómo se ve la cromatina cuando la célula no se está dividiendo?

- A. Como una maraña de hilos delgados
- B. Como bastoncitos independientes y visibles
- C. Como un cuerpo esférico compacto
- D. Como una doble membrana concéntrica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · cromatina

Al conjunto formado por las hebras de ADN y proteínas se lo denomina cromatina y es lo que se observa como una maraña de hilos delgados cuando la célula no se está dividiendo. Durante el proceso de división celular, la cromatina se condensa formando los cromosomas, que se hacen visibles como entidades independientes.

---

## Sub-lote 17 · El nucléolo y las funciones del núcleo (pp. 70–71)

### 73

De acuerdo con el libro de Biología, ¿qué cuerpo de tamaño considerable se observa en el núcleo cuando la célula no se está dividiendo, además de la cromatina?

- A. El nucléolo
- B. El complejo del poro
- C. La lámina nuclear
- D. La envoltura nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 70
**Subtema:** Organización de las células · nucléolo

Cuando la célula aún no se está dividiendo, además de la cromatina, en el núcleo celular se observa un cuerpo de tamaño considerable: el nucléolo.

### 74

De conformidad con el libro de Biología, ¿qué contiene el núcleo que determina en qué tipo de célula se desarrollará?

- A. La información hereditaria
- B. El nucléolo
- C. La lámina nuclear
- D. El complejo del poro

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 71
**Subtema:** Organización de las células · funciones del núcleo

Permitieron establecer que el núcleo contiene la información hereditaria que determina si un tipo particular de célula, ya sea un paramecio, una ameba o un alga unicelular, se desarrollará en un paramecio, una ameba o un alga unicelular con las mismas características de sus progenitores.

### 75

En relación con el libro de Biología, según el trabajo de Hämmerling, ¿qué tipo de influencia ejerce el núcleo sobre la célula?

- A. Una influencia continua, que asegura que las moléculas complejas se sinteticen en la cantidad y el tipo necesarios
- B. Una influencia sólo durante la división celular
- C. Una influencia limitada a la forma externa de la célula
- D. Ninguna influencia una vez formada la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 71
**Subtema:** Organización de las células · funciones del núcleo

Según indicó el trabajo de Hämmerling, el núcleo ejerce una influencia continua sobre las actividades de la célula, lo que asegura que las moléculas complejas que esta requiere se sinteticen en la cantidad y el tipo necesarios.

---

## Sub-lote 18 · La centrifugación diferencial (recuadro 4-3, p. 72)

### 76

De acuerdo con el libro de Biología, ¿qué aprovecha la técnica de centrifugación diferencial para aislar una organela de las demás estructuras celulares?

- A. Las diferencias de tamaño y densidad de las partículas que componen las células
- B. Las diferencias de carga eléctrica de las partículas
- C. Las diferencias de color de las organelas teñidas
- D. Las diferencias de temperatura entre las organelas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 72
**Subtema:** Organización de las células · centrifugación diferencial

Esto es posible mediante la técnica de centrifugación diferencial que aprovecha las diferencias de tamaño y densidad de las partículas que componen las células.

### 77

De conformidad con el libro de Biología, en la centrifugación diferencial, ¿qué partículas sedimentan de manera más rápida?

- A. Las más grandes y más densas
- B. Las más pequeñas y más livianas
- C. Las de mayor carga eléctrica
- D. Las que están teñidas con fluorescencia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 72
**Subtema:** Organización de las células · centrifugación diferencial

Las partículas sometidas a una intensa fuerza gravitacional, se moverán a través del líquido a distintas velocidades; las más grandes y más densas sedimentarán de manera más rápida.

### 78

En relación con el libro de Biología, ¿dónde se hace girar a velocidades muy altas la suspensión de partículas para separarlas?

- A. En una ultracentrífuga
- B. En un microscopio electrónico
- C. En un tubo de fermentación
- D. En una cámara de fluorescencia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 72
**Subtema:** Organización de las células · centrifugación diferencial

Estas partículas, suspendidas en un líquido, se colocan dentro de un tubo de ensayo en una ultracentrífuga y se las hace girar a velocidades muy altas.

---

## Sub-lote 19 · El sistema de endomembranas (p. 72)

### 79

De acuerdo con el libro de Biología, ¿por qué estructuras está constituido el sistema de endomembranas?

- A. Por vacuolas y vesículas, el retículo endoplasmático, el complejo de Golgi y los lisosomas
- B. Por la membrana plasmática, el citosol y el núcleo
- C. Por las mitocondrias, los cloroplastos y los ribosomas
- D. Por la pared celular, la laminilla media y la matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 72
**Subtema:** Organización de las células · sistema de endomembranas

El sistema de endomembranas está constituido por vacuolas y vesículas, el retículo endoplasmático, el complejo de Golgi y los lisosomas.

### 80

De conformidad con el libro de Biología, aunque los distintos compartimentos del sistema de endomembranas están físicamente separados, ¿cómo se encuentran entre sí?

- A. Funcionalmente interconectados
- B. Totalmente aislados unos de otros
- C. Fusionados en una sola estructura
- D. Conectados sólo durante la división celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 72
**Subtema:** Organización de las células · sistema de endomembranas

Aunque los distintos compartimentos están físicamente separados, se encuentran funcionalmente interconectados.

### 81

En relación con el libro de Biología, ¿a qué contribuyen en conjunto los compartimentos del sistema de endomembranas?

- A. A la síntesis, modificación, transporte y exportación de las proteínas, el metabolismo de los lípidos y la eliminación de sustancias tóxicas
- B. Únicamente a la síntesis de ADN y su transmisión a la descendencia
- C. Únicamente a la producción de energía a partir de la glucosa
- D. A la formación de la pared celular y la matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 72
**Subtema:** Organización de las células · sistema de endomembranas

En conjunto contribuyen a la síntesis, modificación, transporte y exportación de las proteínas, el metabolismo de los lípidos y la eliminación de sustancias tóxicas.

---

## Sub-lote 20 · Las vacuolas y la fagocitosis (p. 73)

### 82

De acuerdo con el libro de Biología, ¿cómo se denomina el mecanismo por el cual muchos protistas, como las amebas, engloban su alimento?

- A. Fagocitosis
- B. Difusión pasiva
- C. Centrifugación
- D. Fotosíntesis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vacuolas y fagocitosis

Muchos protistas, como las amebas, ingieren su alimento a través del mecanismo denominado fagocitosis, mediante el cual engloban el alimento y lo incorporan a la célula dentro de una vacuola.

### 83

De conformidad con el libro de Biología, ¿dentro de qué estructura incorpora la célula el alimento englobado por fagocitosis?

- A. Dentro de una vacuola denominada vacuola alimentaria
- B. Dentro del núcleo celular
- C. Dentro del complejo de Golgi
- D. Dentro de una mitocondria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vacuolas y fagocitosis

Mediante el cual engloban el alimento y lo incorporan a la célula dentro de una vacuola denominada vacuola alimentaria.

---

## Sub-lote 21 · El retículo endoplasmático (p. 73)

### 84

En relación con el libro de Biología, ¿qué parte del sistema de endomembranas constituye el retículo endoplasmático?

- A. La mayor parte
- B. La menor parte
- C. Sólo la membrana externa
- D. Únicamente los lisosomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · retículo endoplasmático

El retículo endoplasmático (RE) constituye la mayor parte del sistema de endomembranas.

### 85

De acuerdo con el libro de Biología, ¿cómo es la estructura del retículo endoplasmático?

- A. Una red de sacos aplanados, tubos y canales interconectados, característica de las células eucariontes
- B. Una única membrana esférica que rodea al núcleo
- C. Un conjunto de gránulos sueltos en el citosol
- D. Una pared rígida de celulosa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · retículo endoplasmático

El retículo endoplasmático (RE) constituye la mayor parte del sistema de endomembranas. Es una red de sacos aplanados, tubos y canales interconectados, y es característico de las células eucariontes.

---

## Sub-lote 22 · Los dos compartimentos y tipos de retículo endoplasmático (p. 73)

### 86

De conformidad con el libro de Biología, ¿qué dos compartimentos separa la membrana del retículo endoplasmático?

- A. La luz o espacio intercisternal, interno a la membrana, y el citosol
- B. El núcleo y el citoplasma
- C. La vacuola alimentaria y el complejo de Golgi
- D. El espacio perinuclear y la matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · retículo endoplasmático

La membrana del RE separa dos compartimentos: la luz o espacio intercisternal, interno a la membrana, y el citosol.

### 87

De acuerdo con el libro de Biología, ¿cuáles son los dos tipos de retículo endoplasmático?

- A. El retículo endoplasmático rugoso o granular (RER o REG) y el retículo endoplasmático liso (REL)
- B. El retículo endoplasmático interno y el externo
- C. El retículo endoplasmático nuclear y el citosólico
- D. El retículo endoplasmático primario y el secundario

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · retículo endoplasmático

Existen dos tipos de retículo endoplasmático, el retículo endoplasmático rugoso o granular (RER o REG) y el retículo endoplasmático liso (REL).

### 88

En relación con el libro de Biología, ¿de qué es una continuación el retículo endoplasmático rugoso, y dónde se encuentra por ello?

- A. Es una continuación de la membrana nuclear externa y, por lo tanto, se encuentra más cercano al núcleo
- B. Es una continuación del complejo de Golgi y se encuentra cerca de la membrana celular
- C. Es una continuación del retículo endoplasmático liso y se encuentra lejos del núcleo
- D. Es una continuación de la vacuola central y se encuentra en el centro de la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · retículo endoplasmático

El retículo endoplasmático rugoso o granular (RER o REG), que es una continuación de la membrana nuclear externa y, por lo tanto, se encuentra más cercano al núcleo.

### 89

De conformidad con el libro de Biología, ¿de qué es una continuación el retículo endoplasmático liso?

- A. Del retículo endoplasmático rugoso (RER)
- B. De la membrana nuclear externa
- C. De la membrana plasmática
- D. Del complejo de Golgi

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · retículo endoplasmático

El retículo endoplasmático liso (REL), que es una continuación del RER.

> Par que hay que ordenar: el **rugoso** sale de la membrana nuclear externa (por
> eso está pegado al núcleo); el **liso** sale del rugoso. Es una cadena: núcleo
> → RER → REL.

---

## Sub-lote 23 · Las vesículas y las vacuolas (p. 73)

### 90

De acuerdo con el libro de Biología, ¿qué son las vesículas?

- A. Organelas con forma de bolsa delimitadas por membranas
- B. Redes de sacos aplanados y canales interconectados
- C. Filamentos proteicos que dan estabilidad al núcleo
- D. Estructuras rígidas de celulosa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vesículas y vacuolas

El citoplasma de las células eucariontes contiene un gran número de vesículas, que son organelas con forma de bolsa delimitados por membranas.

### 91

De conformidad con el libro de Biología, ¿cuáles son las principales funciones de las vesículas?

- A. El almacenamiento y el transporte de materiales, tanto dentro de la célula como hacia el interior y el exterior de esta
- B. La síntesis de proteínas a partir de aminoácidos
- C. La producción de energía a partir de la glucosa
- D. El almacenamiento exclusivo del material genético

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vesículas y vacuolas

Sus principales funciones son el almacenamiento y el transporte de materiales, tanto dentro de la célula como hacia el interior y el exterior de esta.

### 92

En relación con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué proporción del volumen celular pueden ocupar las vacuolas?

- A. De un 30 a un 90% del volumen celular
- B. De un 10 a un 20% del volumen celular
- C. De un 5 a un 15% del volumen celular
- D. Exactamente el 50% del volumen celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vesículas y vacuolas

La mayoría de las células de plantas y hongos contienen un tipo particular de vesículas, las vacuolas, que son de gran tamaño, están llenas de fluido y pueden ocupar de un 30 a un 90% del volumen celular.

### 93

De acuerdo con el libro de Biología, ¿qué ocurre con las numerosas vacuolas pequeñas de las células vegetales jóvenes a medida que maduran?

- A. Se fusionan en una vacuola grande, central, que se transforma en un elemento de soporte fundamental de la célula
- B. Desaparecen por completo del citoplasma
- C. Se transforman en mitocondrias
- D. Se dividen en vacuolas aún más pequeñas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vesículas y vacuolas

Las células vegetales jóvenes se caracterizan por tener muchas vacuolas, pero, a medida que las numerosas vacuolas pequeñas maduran, se fusionan en una vacuola grande, central, que luego se transforma en un elemento de soporte fundamental de la célula.

### 94

De conformidad con el libro de Biología, además de mantener la turgencia celular, ¿qué otras funciones pueden cumplir las vacuolas?

- A. Almacenar de manera temporaria nutrientes o productos de desecho y funcionar como un compartimento de degradación de sustancias
- B. Sintetizar las proteínas que serán exportadas por la célula
- C. Portar y transmitir la información hereditaria
- D. Realizar la fotosíntesis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 73
**Subtema:** Organización de las células · vesículas y vacuolas

Las vacuolas mantienen la turgencia celular y también pueden almacenar de manera temporaria nutrientes o productos de desecho y funcionar como un compartimento de degradación de sustancias.

---

## Sub-lote 24 · Los ribosomas del RER y la síntesis de proteínas (p. 74)

### 95

De acuerdo con el libro de Biología, ¿a qué se debe la apariencia rugosa del retículo endoplasmático rugoso?

- A. A que posee ribosomas adheridos a su membrana
- B. A que carece por completo de membrana
- C. A que está lleno de enzimas digestivas
- D. A que su membrana está plegada en crestas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 74
**Subtema:** Organización de las células · ribosomas y RER

La apariencia rugosa del RER se debe a que posee ribosomas adheridos a su membrana.

### 96

De conformidad con el libro de Biología, ¿qué se sintetiza en los ribosomas adheridos a la membrana del retículo endoplasmático granular?

- A. Las proteínas que serán transportadas, ya sea para integrar la membrana celular o para ser exportadas
- B. Los lípidos que forman la bicapa de la membrana
- C. Los hidratos de carbono de la pared celular
- D. El ADN que porta la información hereditaria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 74
**Subtema:** Organización de las células · ribosomas y RER

En los ribosomas que están adheridos a la membrana del REG se sintetizan las proteínas que serán transportadas, ya sea para integrar parte de la membrana celular o para ser exportadas.

### 97

En relación con el libro de Biología, ¿qué ejemplo de hormona proteica sintetizada en el RER da el libro, y qué órgano la secreta?

- A. La insulina, secretada por el páncreas
- B. La adrenalina, secretada por las glándulas suprarrenales
- C. La testosterona, secretada por las gónadas
- D. La tiroxina, secretada por la tiroides

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 74
**Subtema:** Organización de las células · ribosomas y RER

Por ejemplo, la insulina, una hormona proteica secretada por el páncreas, es sintetizada en el RER. Así, esta estructura se encuentra muy desarrollada en las células pancreáticas.

---

## Sub-lote 25 · El complejo de Golgi (p. 75)

### 98

De acuerdo con el libro de Biología, ¿qué ejemplo de procesamiento de proteínas ocurre en el complejo de Golgi?

- A. El agregado de azúcares (glucosilación) a las proteínas
- B. La duplicación del ADN
- C. La degradación de las proteínas en aminoácidos
- D. La síntesis de nuevas proteínas a partir de ribosomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · complejo de Golgi

Como ejemplo el agregado de azúcares (glucosilación) a las proteínas.

### 99

De conformidad con el libro de Biología, ¿hacia qué tres destinos viajan las proteínas glucosiladas que salen del complejo de Golgi en vesículas de transporte?

- A. A otros compartimentos del sistema de endomembranas, a la superficie de la célula, y al exterior de la célula
- B. Únicamente al núcleo celular
- C. Únicamente a las mitocondrias
- D. Al citoesqueleto, a la pared celular y a la matriz nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · complejo de Golgi

Las proteínas glucosiladas salen de él y viajan en vesículas de transporte que se dirigen a: otros compartimentos del sistema de endomembranas (lisosomas y otras organelas), la superficie de la célula donde formarán parte de la membrana plasmática y el exterior de la célula (exportación).

### 100

En relación con el libro de Biología, en las células vegetales, ¿qué otra función cumple el complejo de Golgi?

- A. Sintetiza y reúne algunos de los componentes de las paredes celulares, que exporta a la superficie de la célula
- B. Almacena el material genético de la célula
- C. Realiza la fotosíntesis
- D. Produce la energía a partir de la glucosa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · complejo de Golgi

En las células vegetales, el complejo de Golgi también sintetiza y reúne algunos de los componentes de las paredes celulares, a los que exporta a la superficie de la célula donde son ensamblados.

---

## Sub-lote 26 · Los lisosomas (p. 75)

### 101

De acuerdo con el libro de Biología, ¿qué son los lisosomas y dónde se forman?

- A. Un tipo especial de vesículas con función digestiva que se forman en el complejo de Golgi
- B. Organelas fotosintéticas que se forman en el núcleo
- C. Vesículas de transporte que se forman en la membrana plasmática
- D. Filamentos proteicos que se forman en el citoesqueleto

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · lisosomas

Los lisosomas son un tipo especial de vesículas con función digestiva que se forman en el complejo de Golgi.

### 102

De conformidad con el libro de Biología, ¿qué contienen los lisosomas en su interior y dónde se sintetizan?

- A. Enzimas hidrolíticas sintetizadas en el RER, que degradan proteínas, polisacáridos, ácidos nucleicos y lípidos
- B. Clorofila sintetizada en los cloroplastos
- C. Hormonas proteicas sintetizadas en el páncreas
- D. Ribosomas sintetizados en el nucléolo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · lisosomas

En su interior contienen enzimas hidrolíticas sintetizadas en el RER, que degradan los tipos principales de macromoléculas que se encuentran en una célula viva: proteínas, polisacáridos, ácidos nucleicos y lípidos.

### 103

En relación con el libro de Biología, ¿en qué medio son activas las enzimas de los lisosomas, y cómo se provee?

- A. En el medio ácido del interior del lisosoma, provisto por proteínas de transporte que bombean H⁺ con gasto de energía
- B. En el medio básico del citosol, provisto por difusión pasiva
- C. En el medio neutro de la vacuola alimentaria
- D. En el medio ácido del complejo de Golgi, provisto por los ribosomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · lisosomas

Estas enzimas solo son activas en el medio ácido característico del interior del lisosoma. La acidez es provista por las proteínas de transporte de su membrana que bombean H⁺ al interior de la vesícula con gasto de energía.

### 104

De acuerdo con el libro de Biología, ¿cómo se denominan los lisosomas recién formados?

- A. Lisosomas primarios
- B. Lisosomas secundarios
- C. Vacuolas alimentarias
- D. Peroxisomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · lisosomas

Los lisosomas recién formados se denominan lisosomas primarios.

### 105

De conformidad con el libro de Biología, ¿cómo se forma un lisosoma secundario?

- A. Cuando los lisosomas primarios funden sus membranas con las de la vacuola alimentaria
- B. Cuando dos lisosomas primarios se dividen en cuatro
- C. Cuando el complejo de Golgi expulsa una vesícula
- D. Cuando el RER sintetiza nuevas enzimas hidrolíticas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · lisosomas

En los organismos unicelulares que ingieren alimento por fagocitosis, los lisosomas primarios funden sus membranas con las de la vacuola alimentaria, formándose así un lisosoma secundario, en el cual se produce la digestión del alimento por parte de las enzimas hidrolíticas.

> Par que hay que ordenar: el **primario** es el lisosoma recién formado; el
> **secundario** resulta de fundirse con la vacuola alimentaria, y es donde
> ocurre la digestión.

### 106

En relación con el libro de Biología, ¿qué células del sistema inmunitario ejemplifican la función de los lisosomas capturando bacterias por fagocitosis?

- A. Los glóbulos blancos
- B. Los glóbulos rojos
- C. Las plaquetas
- D. Las células pancreáticas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · lisosomas

Otro ejemplo de la función de los lisosomas lo aportan los glóbulos blancos. Estas células del sistema inmunitario capturan bacterias por fagocitosis y las envuelven en una vacuola.

---

## Sub-lote 27 · Las funciones del retículo endoplasmático liso (p. 75)

### 107

De acuerdo con el libro de Biología, ¿qué procesos metabólicos ocurren en el retículo endoplasmático liso?

- A. La síntesis de lípidos, el metabolismo de los hidratos de carbono y los procesos de desintoxicación
- B. La síntesis de proteínas de exportación
- C. La digestión de macromoléculas por enzimas hidrolíticas
- D. La duplicación del material genético

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · retículo endoplasmático liso

En el REL ocurren numerosos procesos metabólicos, como las síntesis de lípidos, el metabolismo de los hidratos de carbono y los procesos de desintoxicación por modificación de sustancias tóxicas.

### 108

De conformidad con el libro de Biología, ¿en qué células está muy desarrollado el retículo endoplasmático liso, por su papel en la desintoxicación?

- A. En las células hepáticas
- B. En las células pancreáticas
- C. En los glóbulos blancos
- D. En las células nerviosas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · retículo endoplasmático liso

Los procesos de desintoxicación por modificación de sustancias tóxicas, como por ejemplo las que provienen de los psicofármacos. Esto ocurre especialmente en las células hepáticas, cuyo REL está muy desarrollado.

> Par de "dónde está muy desarrollado cada RE": el **rugoso** en las células
> **pancreáticas** (fabrican insulina, reactivo 97); el **liso** en las
> **hepáticas** (desintoxican). Cada tipo se especializa en una célula distinta.

### 109

En relación con el libro de Biología, ¿qué lípidos sintetizados en el retículo endoplasmático liso forman parte de algunas hormonas sexuales, y en qué células presenta por ello un gran desarrollo?

- A. Los esteroides, y presenta gran desarrollo en las células de las gónadas
- B. Los ácidos grasos, y presenta gran desarrollo en las células hepáticas
- C. Los fosfolípidos, y presenta gran desarrollo en las células pancreáticas
- D. Los triglicéridos, y presenta gran desarrollo en los glóbulos blancos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · retículo endoplasmático liso

Entre los lípidos sintetizados en esta organela se encuentran los esteroides que forman parte de algunas hormonas sexuales. Por eso, el REL también presenta un gran desarrollo en las células de las gónadas que producen estas hormonas.

---

## Sub-lote 28 · Los peroxisomas (pp. 75–76)

### 110

De acuerdo con el libro de Biología, ¿qué son los peroxisomas?

- A. Otro tipo de vesícula relativamente grande presente en la mayoría de las células eucariontes
- B. Un tipo de mitocondria sin crestas
- C. Un compartimento del complejo de Golgi
- D. Una parte de la membrana nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 75
**Subtema:** Organización de las células · peroxisomas

Otro tipo de vesícula relativamente grande presente en la mayoría de las células eucariontes son los peroxisomas.

### 111

De conformidad con el libro de Biología, ¿qué tipo de enzimas contienen en general los peroxisomas?

- A. Enzimas oxidativas
- B. Enzimas hidrolíticas
- C. Enzimas de glucosilación
- D. Enzimas de replicación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 76
**Subtema:** Organización de las células · peroxisomas

Son vesículas con una sola membrana, en las que se producen diferentes reacciones gracias a las distintas enzimas que contienen; en general, se trata de enzimas oxidativas.

> Par que se cruza: los **peroxisomas** tienen enzimas **oxidativas**; los
> **lisosomas**, enzimas **hidrolíticas** (reactivo 102). Ambas organelas son
> vesículas, pero con enzimas de tipo distinto.

### 112

En relación con el libro de Biología, ¿qué libera la degradación de los ácidos grasos en los peroxisomas?

- A. Energía en forma de calor y compuestos que participan en la síntesis de otras sustancias
- B. Oxígeno y glucosa
- C. Proteínas de exportación
- D. Material genético

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 76
**Subtema:** Organización de las células · peroxisomas

En los peroxisomas, la degradación de los ácidos grasos libera energía en forma de calor y compuestos que participan en la síntesis de otras sustancias.

### 113

De acuerdo con el libro de Biología, ¿qué forma la enzima oxidasa al hacer posible la unión del hidrógeno a los átomos de oxígeno?

- A. El peróxido de hidrógeno, también conocido como agua oxigenada
- B. El dióxido de carbono
- C. El agua pura
- D. El ácido graso

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 76
**Subtema:** Organización de las células · peroxisomas

En este proceso, la enzima oxidasa hace posible la unión del hidrógeno a los átomos de oxígeno y forma el peróxido de hidrógeno, también conocido como agua oxigenada.

---

## Sub-lote 29 · Las mitocondrias (p. 77)

### 114

De conformidad con el libro de Biología, ¿por cuántas membranas están constituidas las mitocondrias, y cómo son?

- A. Por dos membranas: la externa lisa y la más interna plegada hacia adentro formando crestas
- B. Por una sola membrana lisa
- C. Por tres membranas concéntricas
- D. Por una membrana externa plegada y una interna lisa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

Las mitocondrias están constituidas por dos membranas: la membrana externa lisa, y la más interna que se encuentra plegada hacia adentro, formando crestas.

### 115

De acuerdo con el libro de Biología, ¿cómo se llaman los pliegues de la membrana interna de la mitocondria, y qué constituyen?

- A. Crestas, que constituyen superficies de trabajo donde ocurren las reacciones asociadas a la respiración
- B. Matriz, que constituye el espacio interno de la organela
- C. Tilacoides, que constituyen las superficies fotosintéticas
- D. Cisternas, que constituyen los canales de transporte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

La más interna que se encuentra plegada hacia adentro, formando crestas que constituyen superficies de trabajo en las que ocurren las reacciones químicas asociadas a la respiración.

### 116

En relación con el libro de Biología, ¿qué relación hay entre la actividad de una mitocondria y sus crestas?

- A. Cuanto más activa es una mitocondria, más crestas tiene
- B. Cuanto más activa es una mitocondria, menos crestas tiene
- C. El número de crestas no depende de su actividad
- D. Las mitocondrias activas carecen de crestas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

Cuanto más activa es una mitocondria, más crestas tiene.

### 117

De conformidad con el libro de Biología, ¿cómo se denomina el espacio interno que delimitan las crestas?

- A. La matriz mitocondrial
- B. El citosol
- C. El espacio intercisternal
- D. La luz mitocondrial

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

El espacio interno que delimitan las crestas se denomina matriz mitocondrial.

### 118

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿cuánto miden las mitocondrias?

- A. Alrededor de 1,5 µm de ancho y 2 a 8 µm de longitud
- B. Alrededor de 5 µm de ancho y 10 a 20 µm de longitud
- C. Alrededor de 0,5 µm de ancho y 1 µm de longitud
- D. Alrededor de 15 µm de ancho y 30 µm de longitud

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

Las mitocondrias miden alrededor de 1,5 µm de ancho y 2 a 8 µm de longitud.

### 119

En relación con el libro de Biología, ¿cómo se reproducen las mitocondrias, como vestigio de su vida como organismos independientes?

- A. Por fisión binaria, al igual que las bacterias
- B. Por mitosis, al igual que las células eucariontes
- C. Por gemación a partir del complejo de Golgi
- D. Por síntesis a partir del RER

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

Como hemos visto en el capítulo 3, las mitocondrias presentan vestigios de su vida como organismos independientes. Se reproducen por fisión binaria, al igual que las bacterias, y en la matriz poseen un pequeño cromosoma que codifica algunas de sus proteínas y ribosomas similares a los de los organismos procariontes.

> Enlaza con la teoría endosimbiótica del capítulo 3 (reactivos 113–117): la
> fisión binaria, el cromosoma propio y los ribosomas tipo procarionte son las
> huellas de que la mitocondria fue una bacteria libre.

### 120

De conformidad con el libro de Biología, ¿dónde se sintetiza el resto de las proteínas de la mitocondria que no codifica su propio cromosoma?

- A. En el RER del citoplasma celular, e ingresan por medio de una señal específica
- B. En la matriz mitocondrial, por sus propios ribosomas
- C. En el complejo de Golgi
- D. En el núcleo celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · mitocondrias

El resto de las proteínas que participan en las funciones de la mitocondria se sintetizan en el RER del citoplasma celular y, al igual que sucede con otras organelas, como los cloroplastos y los peroxisomas, ingresan en ellos por medio de una señal específica para cada organela.

---

## Sub-lote 30 · La catalasa y los peroxisomas hepáticos (p. 76)

### 121

De acuerdo con el libro de Biología, ¿qué enzima escinde el peróxido de hidrógeno acumulado, y en qué productos?

- A. La catalasa, que da como productos agua e hidrógeno y evita el daño a las células
- B. La oxidasa, que da como productos oxígeno y glucosa
- C. La hidrolasa, que da como productos aminoácidos
- D. La lipasa, que da como productos ácidos grasos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 76
**Subtema:** Organización de las células · peroxisomas

Otra de las enzimas presentes, la catalasa, escinde el peróxido de hidrógeno acumulado, lo que da como productos agua e hidrógeno y evita así cualquier daño a las células.

> Par dentro del peroxisoma: la **oxidasa** forma el agua oxigenada (tóxica,
> reactivo 113) y la **catalasa** la deshace. Una crea el peróxido, la otra lo
> destruye.

### 122

De conformidad con el libro de Biología, ¿en qué células son particularmente abundantes los peroxisomas, y en qué participan?

- A. En las células hepáticas, donde participan en la eliminación por oxidación de sustancias tóxicas como el etanol
- B. En las células pancreáticas, donde participan en la síntesis de insulina
- C. En los glóbulos blancos, donde participan en la fagocitosis de bacterias
- D. En las células de las gónadas, donde participan en la síntesis de esteroides

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 76
**Subtema:** Organización de las células · peroxisomas

Los peroxisomas son abundantes particularmente en las células hepáticas, donde participan en la eliminación por oxidación de algunas sustancias tóxicas, como el etanol.

---

## Sub-lote 31 · Los plástidos y sus tres tipos (p. 77)

### 123

En relación con el libro de Biología, ¿a qué designa de manera genérica el término plástido, y en qué células se encuentran?

- A. A una familia de organelas que se encuentran sólo en las células de plantas y algas
- B. A las organelas de la respiración presentes en todas las células
- C. A las vesículas digestivas de las células animales
- D. A los filamentos del citoesqueleto

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · plástidos

El término plástido designa de manera genérica a una familia de organelas que se encuentran solo en las células de plantas y algas.

### 124

De acuerdo con el libro de Biología, ¿cuáles son los tres tipos de plástidos?

- A. Los leucoplastos, los cromoplastos y los cloroplastos
- B. Las mitocondrias, los lisosomas y los peroxisomas
- C. Los leucoplastos, los tilacoides y las crestas
- D. Los cloroplastos, las vacuolas y los ribosomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · plástidos

Se pueden reconocer tres tipos de plástidos: los leucoplastos, los cromoplastos y los cloroplastos.

### 125

De conformidad con el libro de Biología, ¿qué pueden almacenar los leucoplastos, y en qué órganos vegetales son abundantes?

- A. Almidón o, en ocasiones, proteínas o aceites; y son abundantes en raíces como el nabo o tubérculos como la papa
- B. Pigmentos rojos y amarillos; y son abundantes en los pétalos de las flores
- C. Clorofila; y son abundantes en las hojas verdes
- D. Enzimas digestivas; y son abundantes en las semillas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · plástidos

Los leucoplastos, que pueden almacenar almidón o, en algunas ocasiones, proteínas o aceites y son abundantes en órganos de almacenamiento de los vegetales, como raíces (p. ej., el nabo) o tubérculos (p. ej., la papa).

### 126

En relación con el libro de Biología, ¿qué contienen los cromoplastos, y dónde están presentes?

- A. Pigmentos del tipo de los carotenoides, de color rojo y amarillo, presentes en las cáscaras de algunas frutas y en los pétalos de las flores
- B. Clorofila verde, presente en las hojas
- C. Almidón, presente en las raíces y tubérculos
- D. Enzimas oxidativas, presentes en el hígado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · plástidos

Los cromoplastos, que contienen pigmentos del tipo de los carotenoides, de color rojo y amarillo, presentes en las cáscaras de algunas frutas y en los pétalos de las flores.

### 127

De acuerdo con el libro de Biología, ¿con qué se relacionan las denominaciones de los tres plástidos, y qué significan sus raíces?

- A. Con los colores que presentan: leuco significa blanco, cromo remite a diversidad de colores, y chloro significa verde
- B. Con su tamaño: leuco es pequeño, cromo mediano y chloro grande
- C. Con su función: leuco almacena, cromo transporta y chloro digiere
- D. Con la célula donde están: leuco en raíces, cromo en frutas y chloro en semillas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · plástidos

Sus denominaciones se relacionan con los colores que presentan: leuco significa blanco, cromo remite a la diversidad de colores que pueden presentar según el tipo y cantidad de carotenos, y chloro significa verde, que es el color preponderante de los cloroplastos debido a la gran cantidad de clorofila que poseen.

---

## Sub-lote 32 · Los cloroplastos y la fotosíntesis (pp. 77–78)

### 128

De conformidad con el libro de Biología, ¿qué proceso tiene lugar en los cloroplastos?

- A. La fotosíntesis
- B. La respiración celular
- C. La digestión intracelular
- D. La síntesis de proteínas de exportación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · cloroplastos

Los cloroplastos son las organelas celulares en las que tiene lugar la fotosíntesis.

> Par de organelas energéticas que se confunden: en las **mitocondrias** ocurre
> la **respiración** (reactivo 116); en los **cloroplastos**, la **fotosíntesis**.
> Ambas tienen doble membrana y ADN propio, pero hacen procesos opuestos.

### 129

En relación con el libro de Biología, mediante la fotosíntesis, ¿qué producen los organismos fotoautótrofos y a partir de qué?

- A. Moléculas orgánicas complejas, como los hidratos de carbono, a partir de compuestos sencillos como el dióxido de carbono y el agua
- B. Compuestos sencillos, como el dióxido de carbono, a partir de moléculas orgánicas complejas
- C. Energía lumínica, a partir de la glucosa
- D. Proteínas, a partir de aminoácidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · cloroplastos

Mediante este mecanismo, los organismos fotoautótrofos producen moléculas orgánicas complejas, como los hidratos de carbono, a partir de compuestos sencillos, como el dióxido de carbono y el agua.

### 130

De acuerdo con el libro de Biología, ¿qué tipo de energía interviene en la fotosíntesis?

- A. La energía lumínica
- B. La energía química de los enlaces
- C. La energía térmica del ambiente
- D. La energía eléctrica de las membranas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · cloroplastos

La energía involucrada en este proceso de síntesis es la energía lumínica.

### 131

De conformidad con el libro de Biología, además de las dos membranas comunes a todos los plástidos, ¿qué tercera membrana interna tienen los cloroplastos?

- A. La membrana tilacoide
- B. La membrana nuclear
- C. La membrana de las crestas
- D. La membrana perinuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 77
**Subtema:** Organización de las células · cloroplastos

Además de las dos membranas comunes a todos los plástidos, los cloroplastos tienen una tercera membrana interna: la membrana tilacoide.

> Paralelo entre las dos organelas: la mitocondria pliega su membrana interna en
> **crestas**; el cloroplasto tiene una tercera membrana, la **tilacoide**. Ambas
> crean superficies de trabajo, pero se llaman distinto.

---

## Sub-lote 33 · El citoesqueleto y sus tres integrantes (p. 79)

### 132

De acuerdo con el libro de Biología, además de dar forma a la célula, ¿de qué es responsable el citoesqueleto?

- A. Del movimiento, participa en las modificaciones de su morfología y dirige el tránsito intracelular
- B. De la síntesis de las proteínas de exportación
- C. Del almacenamiento del material genético
- D. De la producción de energía a partir de la glucosa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · citoesqueleto

Además es responsable del movimiento, participa en las modificaciones de su morfología y dirige el tránsito intracelular.

### 133

De conformidad con el libro de Biología, ¿cuáles son los tres integrantes principales del citoesqueleto?

- A. Los microtúbulos, los filamentos de actina (o microfilamentos) y los filamentos intermedios
- B. Las crestas, los tilacoides y las cisternas
- C. Los ribosomas, los lisosomas y los peroxisomas
- D. La actina, la miosina y la tubulina, únicamente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · citoesqueleto

Se han identificado tres integrantes principales del citoesqueleto: los microtúbulos, los filamentos de actina –o microfilamentos– y los filamentos intermedios.

---

## Sub-lote 34 · Los microtúbulos (p. 79)

### 134

En relación con el libro de Biología, ¿qué son los microtúbulos y por qué proteínas están formados?

- A. Largos tubos huecos formados por dímeros de dos proteínas globulares llamadas tubulina alfa y tubulina beta
- B. Largas hélices dobles formadas por actina G
- C. Sacos aplanados formados por lípidos de membrana
- D. Filamentos macizos formados por miosina

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · microtúbulos

Los microtúbulos son largos tubos huecos formados por dímeros de dos proteínas globulares llamadas tubulina alfa y tubulina beta, que se asocian formando un polímero.

### 135

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué diámetro tienen los microtúbulos?

- A. Alrededor de 22 nanómetros
- B. Alrededor de 6 nanómetros
- C. Alrededor de 10 nanómetros
- D. Alrededor de 100 nanómetros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · microtúbulos

Estos tubos, constituidos por el polímero enroscado, tienen alrededor de 22 nanómetros de diámetro, pero su longitud es variable.

### 136

De conformidad con el libro de Biología, ¿qué función cumplen los microtúbulos dentro del citoplasma?

- A. El transporte y el movimiento de vesículas y organelas dentro del citoplasma
- B. La digestión de macromoléculas
- C. La síntesis de lípidos y esteroides
- D. El almacenamiento de almidón

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · microtúbulos

Los microtúbulos son importantes en el transporte y el movimiento de vesículas y organelas dentro del citoplasma.

### 137

En relación con el libro de Biología, ¿de qué estructuras de locomoción son componentes principales los microtúbulos?

- A. De los cilios y los flagelos
- B. De los seudópodos o "falsos pies"
- C. De las fibras de tensión
- D. De las crestas mitocondriales

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · microtúbulos

Los microtúbulos son componentes principales de los cilios y los flagelos, estructuras que participan en la locomoción de muchos tipos de células.

---

## Sub-lote 35 · Los filamentos de actina (p. 79)

### 138

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué diámetro promedio tienen los filamentos de actina o microfilamentos?

- A. Un diámetro promedio de 6 nanómetros
- B. Un diámetro promedio de 22 nanómetros
- C. Un diámetro promedio de 60 nanómetros
- D. Un diámetro promedio de 1 nanómetro

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · filamentos de actina

Los filamentos de actina o microfilamentos, de un diámetro promedio de 6 nanómetros, están constituidos por varias moléculas de una proteína globular llamada actina G.

> Par de diámetros que se cruza: los **microtúbulos** miden 22 nm; los
> **filamentos de actina**, 6 nm. Los microtúbulos son los más gruesos; la actina,
> de los más finos (reactivo 135).

### 139

De conformidad con el libro de Biología, ¿qué estructura forman las moléculas de actina G al ensamblarse?

- A. Una larga estructura helicoidal doble que se conoce como actina F
- B. Un tubo hueco de tubulina
- C. Un saco aplanado de membrana
- D. Un dímero de tubulina alfa y beta

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · filamentos de actina

Cuando estas moléculas de actina G se ensamblan, forman una larga estructura helicoidal doble que se conoce como actina F.

### 140

En relación con el libro de Biología, ¿qué forma la polimerización de la actina para impulsar ciertos movimientos de las células?

- A. Seudópodos o "falsos pies"
- B. Cilios y flagelos
- C. Crestas y tilacoides
- D. Vacuolas alimentarias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 79
**Subtema:** Organización de las células · filamentos de actina

Ciertos movimientos de las células son impulsados por la polimerización de la actina que, de esta manera, forma seudópodos o "falsos pies".

---

## Sub-lote 36 · Los mecanismos del movimiento celular (p. 80)

### 141

De acuerdo con el libro de Biología, ¿en qué consiste el primer mecanismo de movimiento celular?

- A. En el montaje de proteínas contráctiles, como los filamentos de actina
- B. En estructuras motoras permanentes formadas por microtúbulos
- C. En la fisión binaria de la célula
- D. En la difusión pasiva a través de la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · movimiento celular

El primero consiste en el montaje de proteínas contráctiles, como los filamentos de actina, que además de su función estructural cumplen un papel importante tanto en el movimiento interno del contenido celular como en el de la propia célula.

### 142

De conformidad con el libro de Biología, ¿en qué consiste el segundo mecanismo de movimiento celular?

- A. En estructuras motoras permanentes formadas por la asociación de microtúbulos, como los cilios y los flagelos
- B. En el montaje de filamentos de actina contráctiles
- C. En la formación de seudópodos
- D. En la polimerización de la tubulina en el núcleo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · movimiento celular

Un segundo mecanismo para el movimiento celular consiste en estructuras motoras permanentes formadas por la asociación de microtúbulos, como son los cilios y los flagelos.

### 143

En relación con el libro de Biología, en la motilidad celular, ¿a qué otra proteína fibrosa suele estar asociada la actina?

- A. A la miosina
- B. A la tubulina
- C. A la actina G
- D. A la catalasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · movimiento celular

En su participación en la motilidad celular, la actina suele estar asociada a otros tipos de proteínas. En particular, la miosina, otra proteína fibrosa.

---

## Sub-lote 37 · La actina, la miosina y las microvellosidades (p. 80)

### 144

De acuerdo con el libro de Biología, ¿qué provoca la interacción de los filamentos de actina con la miosina cerca del borde celular, para emitir un seudópodo?

- A. Una contracción localizada que hace presión sobre el líquido celular, que a su vez presiona sobre la membrana
- B. La duplicación del material genético
- C. La síntesis de nuevas proteínas de membrana
- D. La formación de cilios y flagelos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · actina y miosina

Los filamentos de actina se encuentran concentrados en haces, o formando una malla, cerca del borde celular donde interactúan con la miosina, lo que provoca una contracción localizada que hace presión sobre el líquido celular que, a su vez, presiona sobre la membrana y emite una prolongación, el seudópodo.

### 145

De conformidad con el libro de Biología, durante la división de las células animales, ¿qué forman los filamentos de actina junto con la miosina?

- A. Una especie de cinturón contráctil que estrangula al citoplasma y separa las dos células hijas
- B. Un huso de microtúbulos que reparte los cromosomas
- C. Una nueva pared celular entre las dos células
- D. Una membrana nuclear alrededor de cada célula hija

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · actina y miosina

Estos filamentos, junto con la miosina, también actúan en las células animales durante la división celular, ya que forman una especie de cinturón contráctil que estrangula al citoplasma y separa las dos células hijas.

### 146

En relación con el libro de Biología, ¿de qué son el centro los haces de actina en las células intestinales especializadas en la absorción?

- A. De las microvellosidades, que aumentan de manera considerable su superficie de absorción
- B. De los cilios que impulsan el alimento
- C. De las vacuolas alimentarias
- D. De los lisosomas digestivos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · actina y miosina

Los haces de actina constituyen el centro de las microvellosidades, como las que forman las células intestinales especializadas en la absorción de los nutrientes. Las membranas de estas células poseen numerosas prolongaciones, las microvellosidades, que aumentan de manera considerable su superficie de absorción.

### 147

De acuerdo con el libro de Biología, ¿de qué conjuntos contráctiles son los principales componentes la actina y la miosina?

- A. De los conjuntos contráctiles complejos de las células musculares
- B. De las microvellosidades intestinales
- C. De los cilios y flagelos
- D. De la lámina nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · actina y miosina

La actina y la miosina son, además, los principales componentes de los conjuntos contráctiles complejos de las células musculares.

---

## Sub-lote 38 · Los filamentos intermedios (p. 80)

### 148

De conformidad con el libro de Biología, ¿en qué organismos se encuentran los filamentos intermedios, y en qué células son particularmente abundantes?

- A. En los organismos pluricelulares, y son abundantes en las células sometidas a tensiones mecánicas, como las epiteliales, nerviosas y musculares
- B. En los organismos unicelulares, y son abundantes en las amebas
- C. En las células vegetales, y son abundantes en las raíces
- D. En las bacterias, y son abundantes en las procariontes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · filamentos intermedios

Los filamentos intermedios se encuentran en los organismos pluricelulares y son particularmente abundantes en las células sometidas a tensiones mecánicas, como las células epiteliales, nerviosas y musculares.

### 149

De acuerdo con el libro de Biología, en el capítulo 4 sobre la organización de las células, ¿qué diámetro tienen los filamentos intermedios?

- A. Entre 7 y 11 nanómetros
- B. Alrededor de 22 nanómetros
- C. Alrededor de 6 nanómetros
- D. Entre 30 y 50 nanómetros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · filamentos intermedios

Tienen un grosor intermedio entre los microtúbulos y los filamentos de actina, con un diámetro de entre 7 y 11 nanómetros.

> Cierra la escala de grosores del citoesqueleto: **microtúbulos** 22 nm (los más
> gruesos), **filamentos intermedios** 7 a 11 nm (los del medio, de ahí su
> nombre), **filamentos de actina** 6 nm (los más finos).

### 150

En relación con el libro de Biología, ¿de qué están compuestos los filamentos intermedios, a diferencia de los microtúbulos y la actina?

- A. Por proteínas fibrosas resistentes y duraderas, en lugar de subunidades de proteína globular
- B. Por lípidos de membrana
- C. Por hidratos de carbono asociados
- D. Por ácidos nucleicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · filamentos intermedios

A diferencia de estos, que están constituidos por subunidades de proteína globular, los filamentos intermedios están compuestos por proteínas fibrosas resistentes y duraderas.

### 151

De conformidad con el libro de Biología, ¿por qué tipo de unidades están formados los filamentos intermedios?

- A. Por tetrámeros, es decir, cuatro subunidades, en lugar de dímeros
- B. Por dímeros, es decir, dos subunidades
- C. Por monómeros de proteína globular
- D. Por moléculas de actina G

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · filamentos intermedios

Las unidades que los forman son tetrámeros (cuatro subunidades) en lugar de dímeros.

---

## Sub-lote 39 · El citoesqueleto como estructura dinámica (p. 80)

### 152

De acuerdo con el libro de Biología, ¿cómo es la estructura tridimensional que el citoesqueleto otorga a la célula?

- A. Altamente ordenada, pero no rígida ni permanente: es dinámica y cambia según las actividades de la célula
- B. Rígida y permanente, incapaz de cambiar
- C. Desordenada y sin forma definida
- D. Idéntica en todas las células, sin variación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · citoesqueleto dinámico

Aunque esta red le otorga a la célula una estructura tridimensional altamente ordenada, esta no es rígida ni permanente. Es una estructura dinámica que cambia y se desplaza de acuerdo con las actividades de la célula.

### 153

De conformidad con el libro de Biología, ¿qué formas de movimiento exhiben incluso las células vegetales, pese a su pared celular rígida?

- A. Corrientes citoplasmáticas, movimientos cromosómicos y cambios de forma durante la división celular
- B. Locomoción por cilios y flagelos
- C. Movimiento ameboide con seudópodos
- D. Desplazamiento sobre superficies mediante microvellosidades

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 80
**Subtema:** Organización de las células · citoesqueleto dinámico

Aun las vegetales, encerradas por una pared celular rígida, muestran corrientes citoplasmáticas activas (movimientos del citoplasma dentro de la célula), movimientos cromosómicos y cambios de forma durante la división celular.

---

## Sub-lote 40 · Cilios y flagelos (p. 81)

### 154

En relación con el libro de Biología, ¿en qué células se encuentran muy difundidos los cilios y los flagelos?

- A. En las células de animales, en las células sexuales de helechos y otras plantas, y en los protistas
- B. Únicamente en las bacterias y otros procariontes
- C. Únicamente en las células vegetales con pared celular
- D. Únicamente en las células musculares

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 81
**Subtema:** Organización de las células · cilios y flagelos

Los cilios y los flagelos se encuentran muy difundidos entre los seres vivos: en las células de animales, en las células sexuales de helechos y otras plantas, y en los protistas.

### 155

De acuerdo con el libro de Biología, ¿qué grupos de eucariontes no tienen cilios ni flagelos en ninguna célula?

- A. Las algas rojas, los hongos, las plantas con flor y los gusanos redondos (nematodos)
- B. Los animales, los protistas y los helechos
- C. Las bacterias y las arqueas
- D. Todas las células vegetales sin excepción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 81
**Subtema:** Organización de las células · cilios y flagelos

Solo algunos grupos de eucariontes, como las algas rojas, los hongos, las plantas con flor y los gusanos redondos (nematodos) no tienen cilios ni flagelos en ninguna célula.

---

**Reactivos en este archivo:** 155
