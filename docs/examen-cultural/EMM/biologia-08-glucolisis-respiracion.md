# Biología · Capítulo 8 · Glucólisis y respiración celular

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(221 reactivos), 4 (190), 5 (157) y 7 (240).

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de
texto es lorem ipsum) — ver la nota del encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" 191 <hoja> --desfase=46
```

El `PYTHONIOENCODING=utf-8` es necesario con el Bash tool, o la consola revienta
con los caracteres raros de la capa de texto.

## Alcance

Este archivo cubre el **capítulo 8 · Glucólisis y respiración celular**, que va
de la página impresa **145** (hoja 191) a la **158** (hoja 204).

**El temario dice 147, y otra vez no es donde empieza.** La portadilla está en la
hoja 191 = página impresa **145**, junto con el apartado "Biología en contexto
social". El final se fijó localizando la portadilla del capítulo 9, que cae en la
página **159** (hoja 205).

> **Quinta vez que pasa.** Los capítulos 3, 4, 5 y 7 empezaban todos dos páginas
> antes de lo que decían el temario o el encabezado, y a tres de ellos les costó
> teoría sin cubrir. El patrón del Curtis: **portadilla + "Biología en contexto
> social" ocupan dos páginas antes del cuerpo**, y la segunda de ellas ya trae
> cuerpo mezclado con el recuadro. Aquí se verificó **antes** de escribir nada.
> Detalle en `PENDIENTES.md`, punto 3.

## Cobertura actual

Cubiertas las páginas impresas **146**:

- La glucólisis como vía central; el ATP como principal transportador de energía
  y dónde interviene.
- Las reacciones catabólicas como exergónicas, y qué pasa en la biosíntesis.
- El panorama general de la oxidación de la glucosa: las dos etapas y las dos
  subetapas de la respiración; dónde ocurre cada una.
- Las coenzimas transportadoras de electrones: NAD⁺ y FAD, y sus formas
  reducidas.
- La cadena respiratoria y la formación de agua.

**Pendiente:** del capítulo 8, las páginas impresas 147 a 158, y el apartado
"Biología en contexto social" de las páginas 145–146. De la materia siguen sin
empezar los capítulos 11, 12, 31, 32, 35, 36 y 37.

> **Ojo al escribir aquí:** el generador de `ESTADO.md` busca la cadena exacta
> `**Pendiente:**` y se queda con el párrafo que le sigue hasta el primer renglón
> en blanco. Si se parte en viñetas o se le cambia el nombre, el archivo pasa a
> "no declarado"; y si el texto **empieza por "ninguno"**, da la materia entera
> por cerrada. Las dos cosas pasaron el 22 jul 2026.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico. Se
privilegian las **definiciones, procesos y estructuras** sobre los cálculos.

Este capítulo es el que más lo pone a prueba: viene lleno de balances de ATP y
recuentos de moléculas. **Las cifras del balance sí son teoría** —"¿cuántos ATP
rinde la glucólisis?" es recuerdo literal—, pero no se pide resolver ni sumar.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". El reactivo reproduce el libro
**exacto**: la opción correcta y la justificación son cita textual, sin
parafrasear ni bajar la dificultad. Cuatro opciones del mismo tipo y magnitud.

El enunciado **alterna las tres fórmulas del Anexo "H"** — "De acuerdo con",
"De conformidad con" y "En relación con" —, y la correcta se escribe siempre en
A porque el importador baraja las opciones.

**Referencia al capítulo — formato B, sólo cuando aclara.** El reactivo que es un
dato suelto (cifra, fecha, porcentaje) lleva la referencia en redacción natural:
*"…en el capítulo 8 sobre la glucólisis y la respiración celular, ¿…?"*. El que
ya nombra su concepto queda limpio. El reparto lo hace
`tools/especificar-reactivos.js` con `--tema "la glucólisis y la respiración celular"`.

---

## Sub-lote 1 · La glucólisis y el ATP (p. 146)

### 1

De acuerdo con el libro de Biología, ¿qué es la glucólisis para la mayoría de los organismos vivos?

- A. Una de las vías centrales en el metabolismo
- B. Una vía secundaria propia de las células vegetales
- C. Una vía exclusiva de los organismos anaerobios
- D. Una reacción aislada sin relación con otras vías

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · vía central

La glucólisis es una de las vías centrales en el metabolismo de la mayoría de los organismos vivos.

### 2

De conformidad con el libro de Biología, ¿qué impulsó el descubrimiento y la elucidación de la glucólisis?

- A. Constituyeron el paso inicial que impulsó el desarrollo de la bioquímica y el establecimiento de las vías metabólicas más importantes
- B. Constituyeron el paso final que cerró el estudio del metabolismo celular
- C. Permitieron descubrir la estructura del ADN
- D. Permitieron establecer la teoría celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · vía central

Su descubrimiento y elucidación constituyeron el paso inicial que impulsó el desarrollo de la bioquímica y el establecimiento de las vías metabólicas más importantes.

### 3

En relación con el libro de Biología, ¿qué es el ATP en los sistemas vivos?

- A. El principal transportador de energía
- B. El principal aceptor de electrones
- C. La principal reserva de información genética
- D. El principal componente de la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · el ATP

El ATP es el principal transportador de energía en los sistemas vivos.

### 4

De acuerdo con el libro de Biología, ¿en qué procesos celulares participa el ATP?

- A. Desde la biosíntesis química hasta el movimiento de un cilio, el transporte activo de una molécula a través de la membrana celular o la contracción de un músculo
- B. Únicamente en la contracción de los músculos
- C. Únicamente en el transporte activo a través de la membrana
- D. Únicamente en la biosíntesis química

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · el ATP

Participa en una gran variedad de procesos celulares, desde la biosíntesis química hasta el movimiento de un cilio, el transporte activo de una molécula a través de la membrana celular o la contracción de un músculo.

### 5

De conformidad con el libro de Biología, además de esos procesos, ¿en qué otro interviene el ATP?

- A. En la propagación del impulso eléctrico a lo largo de un nervio y, en algunos organismos, en la aplicación de descargas eléctricas para inmovilizar una presa
- B. En la formación de la pared celular de las plantas
- C. En la duplicación del material genético
- D. En la captación de la luz por los fotopigmentos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · el ATP

Interviene en la propagación del impulso eléctrico a lo largo de un nervio y, en algunos organismos, permite la aplicación de descargas eléctricas para inmovilizar una presa.

---

## Sub-lote 2 · Las vías catabólicas (p. 146)

### 6

En relación con el libro de Biología, ¿cómo son en general las reacciones catabólicas?

- A. Muy exergónicas, por lo que son el tipo de reacciones que han sido favorecidas durante la evolución de las vías catabólicas
- B. Muy endergónicas, por lo que requieren un aporte externo constante de energía
- C. Neutras desde el punto de vista energético
- D. Irreversibles y siempre acompañadas de desnaturalización

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · vías catabólicas

En general, las reacciones catabólicas son muy exergónicas, por lo que son el tipo de reacciones que han sido favorecidas durante la evolución de las vías catabólicas.

### 7

De acuerdo con el libro de Biología, ¿qué ocurre con las pequeñas moléculas durante las reacciones de biosíntesis celular?

- A. Van ganando electrones y protones, es decir, se van reduciendo de forma progresiva a medida que se transforman en los compuestos finales
- B. Van perdiendo electrones y protones, es decir, se van oxidando de forma progresiva
- C. Se mantienen sin cambios en su contenido de electrones
- D. Se degradan hasta compuestos de bajo peso molecular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · vías catabólicas

Durante las reacciones de biosíntesis celular, las pequeñas moléculas que intervienen van ganando electrones y protones, es decir, se van reduciendo de forma progresiva a medida que se transforman en los compuestos finales.

### 8

De conformidad con el libro de Biología, durante las etapas de la oxidación de la glucosa, ¿a dónde se transfiere la energía almacenada en sus enlaces?

- A. A los enlaces fosfato de alta energía del ATP y a los electrones de alto potencial redox del NADH
- B. Únicamente a los enlaces fosfato de alta energía del ATP
- C. Únicamente a los electrones de alto potencial redox del NADH
- D. A los enlaces covalentes de la pared celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · vías catabólicas

Durante las etapas de la oxidación de la glucosa, la energía almacenada en sus enlaces es transferida a los enlaces fosfato de alta energía del ATP y a los electrones de alto potencial redox del NADH.

---

## Sub-lote 3 · El panorama general de la oxidación de la glucosa (p. 146)

### 9

En relación con el libro de Biología, ¿cómo obtenemos energía los seres vivos?

- A. Mediante la oxidación de los hidratos de carbono y las grasas provenientes de nuestros alimentos
- B. Mediante la reducción de los hidratos de carbono y las grasas de nuestros alimentos
- C. Mediante la captación directa de la energía lumínica del sol
- D. Mediante la síntesis de proteínas a partir de aminoácidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · panorama general

Los seres vivos obtenemos energía mediante la oxidación de los hidratos de carbono y las grasas provenientes de nuestros alimentos.

### 10

De acuerdo con el libro de Biología, en los sistemas vivos aeróbicos, ¿en qué dos etapas principales se desarrolla la oxidación de la glucosa?

- A. La glucólisis y la respiración celular
- B. La glucólisis y la fotosíntesis
- C. El ciclo de Krebs y el transporte de electrones
- D. La fermentación y la respiración celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · panorama general

En los sistemas vivos aeróbicos, la oxidación de la glucosa se desarrolla en dos etapas principales: la glucólisis y la respiración celular.

### 11

De conformidad con el libro de Biología, ¿en qué dos etapas se subdivide a su vez la respiración celular?

- A. El ciclo de Krebs y el transporte de electrones
- B. La glucólisis y la fermentación
- C. La fosforilación y la desfosforilación
- D. La oxidación y la reducción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · panorama general

A su vez, la respiración se subdivide en otras dos etapas: el ciclo de Krebs y el transporte de electrones.

> Las tres etapas encajan así: la **glucólisis** va por su cuenta, y la
> **respiración celular** se parte en **ciclo de Krebs** y **transporte de
> electrones**. Los distractores del reactivo 10 y del 11 son justo los del otro.

### 12

En relación con el libro de Biología, ¿por qué advierte el libro sobre esa división en etapas?

- A. Porque es útil para estudiar y describir un proceso que en realidad es continuo, y en el cual los productos de una etapa participan en las reacciones de las siguientes
- B. Porque las etapas ocurren en organismos distintos
- C. Porque sólo una de las etapas ocurre realmente en la célula
- D. Porque las etapas ocurren en orden inverso al descrito

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · panorama general

Debe tenerse en cuenta que esta división es útil para estudiar y describir un proceso que, en realidad, es continuo y en el cual los productos de una etapa participan en las reacciones de las siguientes, lo que en conjunto constituye una vía metabólica.

### 13

De acuerdo con el libro de Biología, en los organismos eucariontes, ¿dónde se desarrollan la glucólisis y las dos etapas de la respiración celular?

- A. La glucólisis en el citoplasma celular, y las dos etapas de la respiración celular dentro de las mitocondrias
- B. La glucólisis dentro de las mitocondrias, y las dos etapas de la respiración celular en el citoplasma
- C. Las tres etapas dentro de las mitocondrias
- D. Las tres etapas en el citoplasma celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · panorama general

En particular, en los organismos eucariontes, la glucólisis se desarrolla en el citoplasma celular, mientras que las dos etapas de la respiración celular ocurren dentro de las mitocondrias.

---

## Sub-lote 4 · Las coenzimas transportadoras de electrones (p. 146)

### 14

De conformidad con el libro de Biología, ¿a qué transfiere sus electrones y protones la molécula de glucosa que se oxida?

- A. A moléculas transportadoras de electrones, que también son coenzimas
- B. Directamente al oxígeno del aire
- C. A los enlaces fosfato del ATP, sin intermediarios
- D. A la pared celular de la mitocondria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · coenzimas transportadoras

La molécula de glucosa que se oxida a lo largo de una cadena de reacciones transfiere sus electrones y protones a moléculas transportadoras de electrones (que también son coenzimas).

### 15

En relación con el libro de Biología, ¿de qué está compuesto el dinucleótido de nicotinamida y adenina, como indica su nombre?

- A. La molécula lleva dos nucleótidos con una base nitrogenada, un azúcar de cinco carbonos y un grupo fosfato
- B. La molécula lleva un solo nucleótido con dos bases nitrogenadas
- C. La molécula lleva tres nucleótidos con un azúcar de seis carbonos
- D. La molécula lleva dos aminoácidos y un grupo fosfato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · coenzimas transportadoras

Una de ellas es el dinucleótido de nicotinamida y adenina, abreviadamente NAD⁺ (como indica su nombre, la molécula lleva dos nucleótidos con una base nitrogenada, un azúcar de cinco carbonos y un grupo fosfato).

### 16

De acuerdo con el libro de Biología, ¿qué puede captar el NAD en su estado oxidado y en qué queda reducido?

- A. Puede captar un protón y dos electrones, y queda reducido a NADH
- B. Puede captar dos protones y un electrón, y queda reducido a NADH
- C. Puede captar dos átomos de hidrógeno, y queda reducido a FADH₂
- D. Puede captar un grupo fosfato, y queda reducido a NADP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · coenzimas transportadoras

El NAD, que en su estado oxidado se representa como NAD⁺, puede captar un protón y dos electrones y quedar reducido a NADH.

### 17

De conformidad con el libro de Biología, ¿qué puede aceptar el dinucleótido de flavina y adenina y en qué se reduce?

- A. Puede aceptar dos átomos de hidrógeno, es decir, dos protones y dos electrones, y así reducirse a FADH₂
- B. Puede aceptar un protón y dos electrones, y así reducirse a NADH
- C. Puede aceptar un solo átomo de hidrógeno, y así reducirse a FADH
- D. Puede aceptar un grupo fosfato, y así reducirse a FADP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · coenzimas transportadoras

Otra coenzima es el dinucleótido de flavina y adenina, abreviadamente FAD. Esta puede aceptar dos átomos de hidrógeno (es decir, dos protones y dos electrones) y, así, reducirse a FADH₂.

> Las dos coenzimas del capítulo, que se confunden porque hacen lo mismo con
> cuentas distintas: el **NAD⁺** toma **un protón y dos electrones** → **NADH**;
> el **FAD** toma **dos átomos de hidrógeno enteros** (dos protones y dos
> electrones) → **FADH₂**. El subíndice 2 del FADH₂ es la pista.

---

## Sub-lote 5 · La cadena respiratoria (p. 146)

### 18

En relación con el libro de Biología, en la etapa final de la respiración, ¿a quién ceden sus electrones el NADH y el FADH₂?

- A. A los componentes de la cadena respiratoria
- B. Directamente a la molécula de glucosa
- C. A los enlaces fosfato del ADP
- D. A las coenzimas del citoplasma celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · cadena respiratoria

En la etapa final de la respiración, el NADH y el FADH₂ ceden sus electrones a los componentes de la cadena respiratoria.

### 19

De acuerdo con el libro de Biología, ¿por dónde "descienden la pendiente energética" esos electrones?

- A. A través de una serie de moléculas transportadoras de electrones que se encuentran en la membrana mitocondrial interna
- B. A través del citoplasma celular, sin transportadores
- C. A través de la membrana plasmática de la célula
- D. A través de la matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · cadena respiratoria

Estos electrones "descienden la pendiente energética" a través de una serie de moléculas transportadoras de electrones que se encuentran en la membrana mitocondrial interna.

### 20

De conformidad con el libro de Biología, ¿qué ocurre a medida que los electrones descienden a niveles energéticos inferiores?

- A. Se libera energía libre, parte de la cual termina acoplada a la síntesis de ATP a partir de ADP y fosfato
- B. Se consume energía libre, que debe aportar la célula
- C. Se libera calor únicamente, sin aprovechamiento alguno
- D. Se detiene la cadena respiratoria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · cadena respiratoria

A medida que los electrones descienden a niveles energéticos inferiores, se libera energía libre, parte de la cual termina acoplada a la síntesis de ATP a partir de ADP y fosfato.

### 21

En relación con el libro de Biología, ¿qué ocurre cuando los electrones alcanzan el nivel energético más bajo?

- A. Se combinan con los protones y el oxígeno, y se forma agua
- B. Se combinan con el dióxido de carbono, y se forma glucosa
- C. Vuelven a subir hasta el NADH
- D. Se pierden como calor sin combinarse con nada

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 146
**Subtema:** Glucólisis · cadena respiratoria

Cuando los electrones alcanzan el nivel energético más bajo, se combinan con los protones (H⁺) y el O₂ y se forma agua.

---

**Reactivos en este archivo:** 21
