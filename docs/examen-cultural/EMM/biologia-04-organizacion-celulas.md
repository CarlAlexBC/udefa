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

Cubiertas las páginas impresas **61 a 63 y 66 a 73**:

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

**Reactivos en este archivo:** 85
