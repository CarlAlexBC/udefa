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

Cubiertas las páginas impresas **145 a 158**:

- La glucólisis como vía central; el ATP como principal transportador de energía
  y dónde interviene.
- Las reacciones catabólicas como exergónicas, y qué pasa en la biosíntesis.
- El panorama general de la oxidación de la glucosa: las dos etapas y las dos
  subetapas de la respiración; dónde ocurre cada una.
- Las coenzimas transportadoras de electrones: NAD⁺ y FAD, y sus formas
  reducidas.
- La cadena respiratoria y la formación de agua.
- La figura 8-2: la cuenta del ion hidrógeno sobrante y la fuerza protón-motriz;
  la riboflavina (vitamina B₂), el FMN y las flavoproteínas.
- La glucólisis: dónde ocurre, sus nueve reacciones, en qué consiste globalmente,
  qué pasos gastan y cuáles fabrican ATP, y los tres primeros paso a paso.
- La figura 8-4: las enzimas de la vía; el balance de las reacciones
  preparatorias; y los pasos 4 y 5, donde la vía se desdobla en dos moléculas.
- Los pasos 6 a 9 y el balance neto de la glucólisis; la respiración aeróbica y
  la estructura de la mitocondria; la oxidación del ácido pirúvico y la entrada
  al ciclo de Krebs.
- Las tres figuras de la página 151: el esquema de la mitocondria, la formación
  de acetil-CoA y el ciclo de Krebs completo con sus ocho compuestos.
- El balance del ciclo de Krebs; la etapa final del transporte de electrones y
  la cadena respiratoria; el acoplamiento quimiosmótico de Peter Mitchell; y el
  rendimiento energético global de 38 ATP por molécula de glucosa.
- Las figuras 8-8 y 8-9: el detalle de la cadena transportadora con sus tres
  complejos y la ATP sintetasa, y el resumen completo del proceso.

- La fermentación láctica y alcohólica; aerobios estrictos, anaerobios y
  anaerobios facultativos; el reciclaje de NAD⁺ y por qué la glucólisis es
  evolutivamente temprana.
- Otras vías catabólicas: cómo entran grasas y proteínas al ciclo de Krebs, la
  desaminación y la excreción como urea; el ciclo de Krebs como centro de
  comunicaciones del metabolismo.
- Vías de síntesis: células autótrofas y heterótrofas; en qué difieren las vías
  biosintéticas de las catabólicas.
- El apartado "Biología en contexto social": el cianuro de las almendras
  amargas y su uso como arma química (páginas 145 y 157).

**Pendiente:** ninguno. El capítulo 8 está cerrado en 149 reactivos (23 jul 2026); los ejercicios de razonamiento de la página 158 quedan fuera por no ser de recuerdo literal. Lo que falta de Biología lo declara el archivo del último capítulo escrito — hoy, el capítulo 11.

> **Ojo al escribir aquí:** el generador de `ESTADO.md` busca la cadena exacta
> `**Pendiente:**` y se queda con el párrafo que le sigue hasta el primer renglón
> en blanco. Si se parte en viñetas o se le cambia el nombre, el archivo pasa a
> "no declarado"; y si el texto **empieza por "ninguno"**, da la materia entera
> por cerrada. Las dos cosas pasaron el 22 jul 2026.

## Erratas del libro · capítulo 8

| Pág. | Dice | Debe decir |
|---|---|---|
| 147 | "El **dinucleótico** de nicotinamida y adenina (NAD)", en el pie de la figura 8-2 | "dinucleó**tido**" — el mismo pie lo escribe bien nueve líneas después, para el FAD, y el cuerpo de la página 146 también |

Verificada contra el texto crudo del PDF, no contra la salida de `extraer.py`.
**No se escribe reactivo sobre ese punto.**

## Aviso de extracción: hay figuras con la capa de texto cifrada

**Problema nuevo, distinto del "Lorem ipsum" de los recuadros ENSAYO.** La figura
8-3 (p. 148) trae su capa de texto **corrida tres letras**: sale `&LWRSODVPD`
donde dice "Citoplasma", `$73` donde dice "ATP" y `.UHEV` donde dice "Krebs".

No es basura: es texto legible con un desplazamiento fijo. Pero **no se
transcribe a mano ni se descifra** — si una figura sale así, se renderiza con
`render.py` y se lee con los ojos, igual que los ENSAYO.

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

## Sub-lote 6 · La figura del NAD y el FAD (figura 8-2, p. 147)

### 22

De acuerdo con el libro de Biología, ¿qué requiere la reducción de NAD a NADH?

- A. Dos electrones y un ion hidrógeno
- B. Un electrón y dos iones hidrógeno
- C. Dos átomos de hidrógeno completos
- D. Un grupo fosfato y un electrón

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

Como se indica, la reducción de NAD a NADH requiere dos electrones y un ion hidrógeno.

### 23

De conformidad con el libro de Biología, ¿por qué hay un ion hidrógeno sobrante cuando el NAD se reduce?

- A. Porque los dos electrones en general viajan como componentes de dos átomos de hidrógeno
- B. Porque el NAD capta siempre un ion hidrógeno de más del que necesita
- C. Porque el ion hidrógeno proviene del agua del citoplasma
- D. Porque la enzima libera un ion hidrógeno al catalizar la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

Sin embargo, los dos electrones en general viajan como componentes de dos átomos de hidrógeno; así, hay un ion hidrógeno sobrante cuando el NAD se reduce.

### 24

En relación con el libro de Biología, ¿en qué están implicados esos iones hidrógeno?

- A. En la generación de la fuerza protón-motriz
- B. En la síntesis directa de glucosa
- C. En la formación de la pared celular
- D. En la desnaturalización de las enzimas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

Estos iones hidrógeno están implicados en la generación de la fuerza protón-motriz.

### 25

De acuerdo con el libro de Biología, ¿qué es la riboflavina y quién la sintetiza?

- A. Un componente del FAD, también conocida como vitamina B₂, sintetizada por las plantas y muchos microorganismos
- B. Un componente del NAD, también conocida como vitamina B₁, sintetizada sólo por los animales
- C. Un componente del ATP, también conocida como vitamina C, sintetizada por las plantas
- D. Un componente de la membrana mitocondrial, sintetizada por las mitocondrias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

Un componente del FAD, la riboflavina (también conocida como vitamina B₂), es sintetizada por las plantas y muchos microorganismos.

### 26

De conformidad con el libro de Biología, ¿cómo es la riboflavina en su forma oxidada?

- A. Un pigmento de color amarillo brillante
- B. Un pigmento de color rojo intenso
- C. Un compuesto incoloro y transparente
- D. Un pigmento de color verde azulado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

En su forma oxidada es un pigmento de color amarillo brillante.

### 27

En relación con el libro de Biología, ¿por qué está formado el mononucleótido de flavina (FMN)?

- A. Por la riboflavina y el primero de los grupos fosfato
- B. Por la riboflavina y la adenina, sin grupos fosfato
- C. Por la nicotinamida y dos grupos fosfato
- D. Por la adenina, la ribosa y tres grupos fosfato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

Un transportador de electrones relacionado, el mononucleótido de flavina (FMN), está formado por la riboflavina y el primero de los grupos fosfato.

### 28

De acuerdo con el libro de Biología, ¿cómo se encuentran el FAD y el FMN en las células, y qué macromoléculas forman?

- A. Unidos a proteínas específicas, formando macromoléculas conocidas como flavoproteínas
- B. Libres en el citoplasma, sin unirse a ninguna proteína
- C. Unidos a lípidos, formando lipoproteínas
- D. Unidos a hidratos de carbono, formando glucoproteínas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 147
**Subtema:** Glucólisis · NAD y FAD

En las células, tanto el FAD como el FMN se encuentran unidos a proteínas específicas, formando macromoléculas conocidas como flavoproteínas.

---

## Sub-lote 7 · La glucólisis, primera etapa (p. 148)

### 29

De conformidad con el libro de Biología, ¿dónde se lleva a cabo la serie de reacciones que constituyen la glucólisis?

- A. En casi todas las células vivas, desde las células procariontes hasta las eucariontes
- B. Únicamente en las células eucariontes
- C. Únicamente en las células procariontes
- D. Únicamente en las células de los organismos aeróbicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

La serie de reacciones que constituyen la glucólisis se lleva a cabo en casi todas las células vivas, desde las células procariontes hasta las eucariontes.

### 30

En relación con el libro de Biología, ¿qué ejemplifica la glucólisis?

- A. De qué manera los procesos bioquímicos de una célula viva se desarrollan en pequeños pasos secuenciales
- B. De qué manera una sola enzima puede catalizar todo un proceso
- C. De qué manera las reacciones celulares ocurren de forma instantánea
- D. De qué manera la célula puede prescindir de las enzimas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

La glucólisis ejemplifica de qué manera los procesos bioquímicos de una célula viva se desarrollan en pequeños pasos secuenciales.

### 31

De acuerdo con el libro de Biología, ¿en cuántas reacciones ocurre el proceso de la glucólisis y cómo se cataliza cada una?

- A. En una serie de nueve reacciones, cada una catalizada por una enzima específica
- B. En una serie de cinco reacciones, cada una catalizada por una enzima específica
- C. En una serie de nueve reacciones, todas catalizadas por la misma enzima
- D. En una sola reacción global catalizada por un complejo multienzimático

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

Este proceso ocurre en una serie de nueve reacciones, cada una de las cuales es catalizada por una enzima específica.

### 32

De conformidad con el libro de Biología, analizado de forma global, ¿en qué consiste el proceso de la glucólisis?

- A. En la división de una molécula de glucosa, de seis átomos de carbono, en dos moléculas de un compuesto tricarbonado llamado ácido pirúvico o piruvato
- B. En la unión de dos moléculas de glucosa en un compuesto de doce carbonos
- C. En la división de una molécula de glucosa en seis moléculas de dióxido de carbono
- D. En la transformación de la glucosa en fructosa, sin división alguna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

El proceso, analizado de forma global, consiste en la división de una molécula de glucosa (de seis átomos de carbono) en dos moléculas de un compuesto tricarbonado, llamado ácido pirúvico (o piruvato).

### 33

En relación con el libro de Biología, ¿qué pasos de la glucólisis requieren energía y qué ocurre en ellos?

- A. El paso 1 y el 3; en ambos se transfiere un grupo fosfato a la molécula de azúcar, generando enlaces de alta energía
- B. El paso 5 y el 6; en ambos se libera un grupo fosfato de la molécula de azúcar
- C. Todos los pasos requieren energía por igual
- D. Ninguno requiere energía, porque toda la vía es exergónica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

Los primeros pasos en la glucólisis requieren energía: tanto en el paso 1 como en el 3 se transfiere un grupo fosfato a la molécula de azúcar, generando enlaces de alta energía.

### 34

De acuerdo con el libro de Biología, ¿a partir de qué paso las reacciones de la glucólisis liberan energía?

- A. A partir del paso 4
- B. A partir del paso 1
- C. A partir del paso 6
- D. A partir del paso 9

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

A partir del paso 4, las reacciones liberan energía.

### 35

De conformidad con el libro de Biología, ¿qué ocurre en el paso 5 de la glucólisis?

- A. Se reducen dos moléculas de NAD⁺ a NADH y H⁺, y se almacena parte de la energía producida por la oxidación del gliceraldehído 3-fosfato
- B. Se oxidan dos moléculas de NADH a NAD⁺, y se libera toda la energía como calor
- C. Se transfiere un grupo fosfato desde el ATP a la molécula de azúcar
- D. Se divide la molécula de glucosa en dos de ácido pirúvico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

En el paso 5 se reducen dos moléculas de NAD⁺ a NADH y H⁺, y se almacena parte de la energía producida por la oxidación del gliceraldehído 3-fosfato.

### 36

En relación con el libro de Biología, ¿qué ocurre en los pasos 6 y 9 de la glucólisis?

- A. Las moléculas de ADP toman energía del sistema, fosforilándose a ATP
- B. Las moléculas de ATP ceden energía al sistema, desfosforilándose a ADP
- C. Se reducen dos moléculas de NAD⁺ a NADH
- D. Se transfiere un grupo fosfato desde el ATP a la molécula de azúcar

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · primera etapa

En los pasos 6 y 9, las moléculas de ADP toman energía del sistema, fosforilándose a ATP.

> El reparto de la vía, que conviene tener claro antes de entrar al detalle:
> **pasos 1 y 3 gastan** ATP; **a partir del 4 se libera** energía; el **5**
> carga los NADH; y los **6 y 9** son los que **fabrican** ATP.

---

## Sub-lote 8 · Los tres primeros pasos (p. 148)

### 37

De acuerdo con el libro de Biología, ¿qué ocurre en el paso 1 de la glucólisis?

- A. El grupo fosfato terminal se transfiere de una molécula de ATP al carbono en la posición 6 de la glucosa y se forma glucosa 6-fosfato
- B. El grupo fosfato terminal se transfiere de la glucosa a una molécula de ADP
- C. La glucosa se divide directamente en dos moléculas de ácido pirúvico
- D. La glucosa se transforma en fructosa sin ganar ningún fosfato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · paso a paso

Paso 1. El grupo fosfato terminal se transfiere de una molécula de ATP al carbono en la posición 6 de la molécula de glucosa y se forma glucosa 6-fosfato.

### 38

De conformidad con el libro de Biología, ¿qué transformación ocurre en el paso 2 de la glucólisis?

- A. El anillo hexagonal característico de la glucosa se transforma en el anillo pentagonal de la fructosa
- B. El anillo pentagonal de la fructosa se transforma en el anillo hexagonal de la glucosa
- C. El anillo hexagonal se abre y forma una cadena lineal
- D. Dos anillos hexagonales se unen en uno solo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · paso a paso

La estructura de la glucosa 6-fosfato se reorganiza. El anillo hexagonal característico de la glucosa se transforma en el anillo pentagonal de la fructosa (fructosa 6-fosfato).

### 39

En relación con el libro de Biología, ¿en qué se diferencian la glucosa y la fructosa?

- A. Tienen el mismo número de átomos y sólo difieren en su disposición
- B. Tienen distinto número de átomos de carbono
- C. Tienen distinto número de átomos de oxígeno
- D. Son idénticas en todo, incluida su disposición

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · paso a paso

La glucosa y la fructosa tienen el mismo número de átomos (C₆H₁₂O₆) y solo difieren en su disposición.

### 40

De acuerdo con el libro de Biología, ¿qué ocurre en el paso 3 de la glucólisis y qué se produce?

- A. La fructosa 6-fosfato gana un segundo fosfato que proviene de otro ATP, produciendo fructosa 1,6-difosfato
- B. La fructosa 6-fosfato pierde su fosfato, produciendo fructosa libre
- C. La fructosa 6-fosfato se divide en dos moléculas de tres carbonos
- D. La fructosa 6-fosfato se reduce a NADH

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 148
**Subtema:** Glucólisis · paso a paso

Paso 3. En este paso, que es semejante al primero, la fructosa 6-fosfato gana un segundo fosfato que proviene de otro ATP. El fosfato añadido se une al primer carbono, produciendo fructosa 1,6-difosfato.

---

## Sub-lote 9 · Las enzimas de la glucólisis (figura 8-4, p. 149)

### 41

De conformidad con el libro de Biología, ¿qué enzima interviene en el paso 1 de la glucólisis?

- A. La hexocinasa
- B. La aldolasa
- C. La enolasa
- D. La piruvato cinasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · enzimas de la vía

Paso 1: Hexocinasa.

### 42

En relación con el libro de Biología, ¿qué enzima interviene en el paso 3 de la glucólisis?

- A. La fosfofructocinasa
- B. La fosfohexosa isomerasa
- C. La fosfoglicerato cinasa
- D. La fosfogliceromutasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · enzimas de la vía

Paso 3: Fosfofructocinasa.

### 43

De acuerdo con el libro de Biología, ¿qué enzima interviene en el paso 4 de la glucólisis?

- A. La aldolasa
- B. La hexocinasa
- C. La triosa fosfato deshidrogenasa
- D. La isomerasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · enzimas de la vía

Paso 4: Aldolasa.

### 44

De conformidad con el libro de Biología, ¿qué enzima interviene en el paso 9 de la glucólisis?

- A. La piruvato cinasa
- B. La enolasa
- C. La fosfoglicerato cinasa
- D. La hexocinasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · enzimas de la vía

Paso 9: Piruvato cinasa.

> Las nueve enzimas, en orden, por si hace falta repasarlas: hexocinasa,
> fosfohexosa isomerasa, fosfofructocinasa, aldolasa, triosa fosfato
> deshidrogenasa, fosfoglicerato cinasa, fosfogliceromutasa, enolasa y piruvato
> cinasa. Las **cinasas** son las que mueven grupos fosfato, y por eso aparecen
> en los pasos donde entra o sale un ATP.

### 45

En relación con el libro de Biología, ¿qué figura en los recuadros violetas del esquema de la glucólisis?

- A. Los nombres de los sucesivos compuestos de carbono que resultan de la progresiva oxidación de la glucosa
- B. Los nombres de las enzimas que intervienen en cada paso
- C. Las cantidades de ATP consumidas y producidas
- D. Los nombres de las coenzimas transportadoras de electrones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · enzimas de la vía

En los recuadros violetas figuran los nombres de los sucesivos compuestos de carbono que resultan de la progresiva oxidación de la glucosa.

---

## Sub-lote 10 · El balance de las reacciones preparatorias (p. 149)

### 46
De acuerdo con el libro de Biología, en el curso de las reacciones vistas hasta el paso 3, ¿cuántas moléculas de ATP se han convertido en ADP?
- A. Dos
- B. Una
- C. Cuatro
- D. Ninguna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · balance preparatorio

Nótese que en el curso de las reacciones que se han visto hasta aquí, dos moléculas de ATP se han convertido en ADP.

### 47

De conformidad con el libro de Biología, ¿para qué se ha utilizado la energía liberada por esas dos moléculas de ATP?

- A. Para generar un compuesto de alta energía libre, la fructosa 1,6-difosfato, que será rápidamente degradado en las etapas posteriores
- B. Para sintetizar dos moléculas nuevas de glucosa
- C. Para reducir dos moléculas de NAD⁺ a NADH
- D. Para formar agua a partir de protones y oxígeno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · balance preparatorio

La energía liberada se ha utilizado para generar un compuesto de alta energía libre (fructosa 1,6 difosfato) que será rápidamente degradado en las etapas posteriores.

### 48

En relación con el libro de Biología, ¿cuándo se han completado las reacciones preparatorias de la glucólisis?

- A. Al completarse el paso 4
- B. Al completarse el paso 3
- C. Al completarse el paso 5
- D. Al completarse el paso 9

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · balance preparatorio

Al completarse el paso 4 se han completado las reacciones preparatorias.

---

## Sub-lote 11 · Los pasos 4 y 5 (p. 149)

### 49

De acuerdo con el libro de Biología, ¿en qué dos moléculas es escindida la fructosa 1,6-difosfato en el paso 4?

- A. En la dihidroxiacetona fosfato y el gliceraldehído 3-fosfato, ambas de tres carbonos
- B. En dos moléculas de ácido pirúvico, ambas de tres carbonos
- C. En dos moléculas de glucosa 6-fosfato, ambas de seis carbonos
- D. En el 1,3-difosfoglicerato y el 3-fosfoglicerato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Paso 4. La molécula de fructosa 1,6 difosfato de seis carbonos es escindida en dos moléculas de tres carbonos: la dihidroxiacetona fosfato y el gliceraldehído 3-fosfato.

### 50

De conformidad con el libro de Biología, ¿qué ocurre finalmente con toda la dihidroxiacetona fosfato, y por qué?

- A. Se convierte en gliceraldehído fosfato, porque de las dos moléculas sólo el gliceraldehído fosfato se consume en las reacciones subsiguientes
- B. Se acumula en el citoplasma sin transformarse
- C. Se convierte directamente en ácido pirúvico
- D. Es eliminada de la célula como residuo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Ambas moléculas son interconvertibles por una enzima. Sin embargo, dado que, de las dos moléculas, solo el gliceraldehído fosfato se consume en las reacciones subsiguientes, toda la dihidroxiacetona fosfato finalmente se convierte en gliceraldehído fosfato.

### 51

En relación con el libro de Biología, ¿por qué los productos de todos los pasos siguientes deben contarse dos veces?

- A. Para dar cuenta del destino de una molécula de glucosa
- B. Porque cada paso ocurre dos veces seguidas en el tiempo
- C. Porque intervienen dos enzimas distintas en cada paso
- D. Porque la mitad de los productos se pierde como calor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Así, los productos de todos los pasos siguientes deben contarse dos veces (multiplicarse por dos) para dar cuenta del destino de una molécula de glucosa.

> Éste es el punto donde se descuadran todas las cuentas del capítulo: **a partir
> del paso 4 hay dos moléculas recorriendo la vía**, no una. Por eso todo lo que
> viene después se multiplica por dos.

### 52

De acuerdo con el libro de Biología, ¿en qué se oxidan las moléculas de gliceraldehído fosfato en el paso 5?

- A. En 1,3-difosfoglicerato
- B. En 3-fosfoglicerato
- C. En fosfoenol piruvato
- D. En ácido pirúvico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Paso 5. Las moléculas de gliceraldehído fosfato se oxidan a 1,3-difosfoglicerato.

### 53

De conformidad con el libro de Biología, ¿a dónde son transferidos los átomos de hidrógeno con sus electrones provenientes de esa oxidación?

- A. Al NAD⁺, que se reduce a NADH y H⁺
- B. Al FAD, que se reduce a FADH₂
- C. Al ADP, que se fosforila a ATP
- D. Al oxígeno, con el que forman agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Los átomos de hidrógeno con sus electrones, provenientes de esta oxidación, son transferidos al NAD⁺ que se reduce a NADH y H⁺.

### 54
En relación con el libro de Biología, ¿cuántas moléculas de NADH y cuántos iones H⁺ se obtienen por cada molécula de glucosa en ese paso?
- A. Un total de dos moléculas de NADH y dos iones H⁺
- B. Un total de una molécula de NADH y un ion H⁺
- C. Un total de cuatro moléculas de NADH y cuatro iones H⁺
- D. Un total de dos moléculas de NADH y cuatro iones H⁺

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Un total de dos moléculas de NADH y dos iones H⁺ por cada molécula de glucosa.

### 55

De acuerdo con el libro de Biología, ¿cómo es esa reacción del paso 5 y en qué se aprovecha la energía que libera?

- A. Es muy exergónica, y la energía liberada es aprovechada por la misma enzima para unir un grupo fosfato
- B. Es muy endergónica, y requiere energía aportada por el ATP
- C. Es neutra, y no libera ni consume energía
- D. Es muy exergónica, y toda la energía se pierde como calor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 149
**Subtema:** Glucólisis · pasos 4 y 5

Esta reacción es muy exergónica y la energía liberada es aprovechada por la misma enzima para unir un grupo fosfato.

---

## Sub-lote 12 · Los pasos 6 a 9 (p. 150)

### 56

De conformidad con el libro de Biología, ¿en qué se utiliza el grupo fosfato liberado de la molécula de difosfoglicerato en el paso 6?

- A. En recargar una molécula de ADP, con un total de dos moléculas de ATP por molécula de glucosa
- B. En reducir una molécula de NAD⁺ a NADH
- C. En unirse a una nueva molécula de glucosa
- D. En formar una molécula de agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · pasos 6 a 9

Paso 6. El grupo fosfato incorporado en el paso anterior es liberado de la molécula de difosfoglicerato y utilizado en recargar una molécula de ADP (un total de dos moléculas de ATP por molécula de glucosa). Esta reacción es altamente exergónica.

### 57

En relación con el libro de Biología, ¿qué ocurre en el paso 7 de la glucólisis?

- A. Se transfiere un grupo fosfato remanente desde la posición 3 a la posición 2
- B. Se transfiere un grupo fosfato remanente desde la posición 2 a la posición 3
- C. Se elimina una molécula de agua del compuesto de tres carbonos
- D. Se forma una molécula de ATP a partir de ADP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · pasos 6 a 9

Paso 7. Se transfiere un grupo fosfato remanente desde la posición 3 a la posición 2.

### 58

De acuerdo con el libro de Biología, ¿qué se elimina en el paso 8 de la glucólisis?

- A. Una molécula de agua del compuesto de tres carbonos
- B. Una molécula de dióxido de carbono del compuesto de tres carbonos
- C. Un grupo fosfato del compuesto de tres carbonos
- D. Un átomo de hidrógeno del compuesto de tres carbonos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · pasos 6 a 9

Paso 8. En este paso se elimina una molécula de agua del compuesto de tres carbonos.

### 59

De conformidad con el libro de Biología, ¿qué logra el reordenamiento interno de la molécula en el paso 8?

- A. Cambia la distribución energética, concentrando la energía en el enlace del grupo fosfato, que se hace muy inestable y prepara a la molécula para la siguiente reacción
- B. Reparte la energía por igual en toda la molécula, estabilizándola
- C. Elimina toda la energía de la molécula en forma de calor
- D. Duplica el número de átomos de carbono de la molécula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · pasos 6 a 9

Este reordenamiento interno de la molécula cambia la distribución energética en ella, concentrando la energía en el enlace del grupo fosfato que se hace muy inestable y prepara a la molécula para la siguiente reacción.

### 60

En relación con el libro de Biología, ¿qué ocurre en el paso 9 de la glucólisis?

- A. El grupo fosfato de alta energía es transferido por la enzima piruvato cinasa a una molécula de ADP, y se forma otra molécula de ATP
- B. El grupo fosfato de alta energía es transferido por la aldolasa a una molécula de NAD⁺
- C. Se elimina una molécula de agua y se forma ácido pirúvico
- D. Se escinde la molécula en dos compuestos de tres carbonos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · pasos 6 a 9

Paso 9. El grupo fosfato de alta energía es transferido por la enzima piruvato cinasa a una molécula de ADP, y se forma otra molécula de ATP (nuevamente, un total de dos moléculas de ATP por molécula de glucosa). Esta es también una reacción altamente exergónica.

---

## Sub-lote 13 · El balance de la glucólisis (p. 150)

### 61

De acuerdo con el libro de Biología, ¿qué es necesario para iniciar la secuencia glucolítica?

- A. La energía de los enlaces fosfato de dos moléculas de ATP
- B. La energía de los enlaces fosfato de cuatro moléculas de ATP
- C. La energía de dos moléculas de NADH
- D. La presencia de oxígeno en el medio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · balance

Para iniciar la secuencia glucolítica (rotura de la glucosa) es necesaria la energía de los enlaces fosfato de dos moléculas de ATP.

### 62

De conformidad con el libro de Biología, ¿qué se produce posteriormente en la secuencia glucolítica?

- A. Dos moléculas de NADH a partir de dos de NAD⁺ y cuatro de ATP a partir de cuatro de ADP
- B. Cuatro moléculas de NADH a partir de cuatro de NAD⁺ y dos de ATP a partir de dos de ADP
- C. Dos moléculas de NADH y dos de ATP únicamente
- D. Seis moléculas de ATP a partir de seis de ADP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · balance

Posteriormente se producen dos moléculas de NADH a partir de dos de NAD⁺ y cuatro de ATP a partir de cuatro de ADP.

### 63

En relación con el libro de Biología, ¿cuál es el resultado neto de la etapa de la glucólisis?

- A. Dos moléculas de ácido pirúvico de tres carbonos, dos moléculas de ATP y dos moléculas de NADH
- B. Dos moléculas de ácido pirúvico de tres carbonos, cuatro moléculas de ATP y dos moléculas de NADH
- C. Una molécula de ácido pirúvico, dos moléculas de ATP y dos moléculas de NADH
- D. Dos moléculas de ácido pirúvico de seis carbonos, dos de ATP y cuatro de NADH

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · balance

Resultado neto de esta etapa: 2 moléculas de ácido pirúvico (3 carbonos), 2 moléculas de ATP, 2 moléculas de NADH.

> La cuenta que más se confunde, porque el libro da los dos números seguidos: se
> **fabrican cuatro** ATP, pero se **gastaron dos** al principio, así que el
> resultado **neto son dos**. El distractor B es justo el bruto en lugar del neto.

### 64

De acuerdo con el libro de Biología, ¿dónde queda conservada parte de la energía contenida en la molécula original de glucosa?

- A. En los enlaces fosfato de dos moléculas de ATP y en los electrones de alto potencial redox de dos moléculas de NADH
- B. Únicamente en los enlaces fosfato de dos moléculas de ATP
- C. Únicamente en los electrones de dos moléculas de NADH
- D. En los enlaces carbono-carbono del ácido pirúvico, exclusivamente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · balance

Parte de la energía contenida en la molécula original queda conservada en los enlaces fosfato de dos moléculas de ATP y en los electrones de alto potencial redox de dos moléculas de NADH.

### 65

De conformidad con el libro de Biología, ¿qué vía sigue el ácido pirúvico según las condiciones del medio?

- A. En presencia de oxígeno seguirá la vía aeróbica; en ausencia de oxígeno podrá seguir alguna de dos posibles vías anaeróbicas
- B. En presencia de oxígeno seguirá una vía anaeróbica; en ausencia de oxígeno, la aeróbica
- C. Siempre sigue la vía aeróbica, haya o no oxígeno
- D. Siempre sigue una vía anaeróbica, haya o no oxígeno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · balance

Otra parte de la energía permanece aún en las dos moléculas de ácido pirúvico que, según las condiciones del medio, puede incorporarse a una de varias vías metabólicas: en presencia de oxígeno, seguirá la vía aeróbica. En ausencia de oxígeno, podrá seguir alguna de dos posibles vías anaeróbicas.

### 66

En relación con el libro de Biología, ¿cómo se denominan también las vías anaeróbicas?

- A. Respiración anaeróbica o fermentación
- B. Respiración aeróbica o glucólisis
- C. Ciclo de Krebs o transporte de electrones
- D. Vías catabólicas o degradativas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Glucólisis · balance

Seguir las vías anaeróbicas también llamadas respiración anaeróbica o fermentación.

---

## Sub-lote 14 · La respiración aeróbica y la mitocondria (p. 150)

### 67

De acuerdo con el libro de Biología, cuando hay oxígeno disponible, ¿qué implica la siguiente etapa de la degradación de la glucosa?

- A. La oxidación progresiva del ácido pirúvico a dióxido de carbono y agua, proceso que se conoce como respiración celular
- B. La reducción progresiva del ácido pirúvico a glucosa
- C. La fermentación del ácido pirúvico a alcohol
- D. La síntesis de glucógeno a partir del ácido pirúvico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · respiración aeróbica

Cuando hay O₂ disponible, la siguiente etapa de la degradación de la glucosa implica la oxidación progresiva del ácido pirúvico a CO₂ y agua, proceso que se conoce como respiración celular.

### 68

De conformidad con el libro de Biología, ¿en qué dos etapas tiene lugar la respiración celular y dónde ocurren en las células eucariontes?

- A. El ciclo de Krebs y el transporte terminal de electrones, y se desarrollan dentro de las mitocondrias
- B. La glucólisis y el ciclo de Krebs, y se desarrollan en el citoplasma
- C. El transporte terminal de electrones y la fermentación, y se desarrollan en el núcleo
- D. El ciclo de Krebs y la fermentación, y se desarrollan dentro de las mitocondrias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · respiración aeróbica

La respiración celular tiene lugar en dos etapas: el ciclo de Krebs y el transporte terminal de electrones. En las células eucariontes, estas reacciones se desarrollan dentro de las mitocondrias.

### 69

En relación con el libro de Biología, ¿cómo son las dos membranas de la mitocondria?

- A. La externa es una membrana lisa, mientras que la interna está replegada y forma las crestas
- B. La externa está replegada y forma las crestas, mientras que la interna es lisa
- C. Las dos son lisas y de igual grosor
- D. Las dos están replegadas y forman crestas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · la mitocondria

Las mitocondrias están constituidas por dos membranas. La externa es una membrana lisa, mientras que la interna está replegada y forma las crestas.

### 70

De acuerdo con el libro de Biología, ¿qué es la matriz mitocondrial y qué contiene?

- A. El compartimento interno de la mitocondria, formado por una solución densa que contiene enzimas, coenzimas, agua, fosfatos y otras moléculas implicadas en la respiración
- B. La membrana externa de la mitocondria, formada por fosfolípidos y proteínas
- C. El espacio entre las dos membranas, ocupado únicamente por agua
- D. El conjunto de crestas formadas por la membrana interna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · la mitocondria

El compartimento interno de la mitocondria, en contacto con la superficie interna de las crestas, es la matriz mitocondrial formada por una solución densa que contiene enzimas, coenzimas, agua, fosfatos y otras moléculas implicadas en la respiración.

### 71

De conformidad con el libro de Biología, ¿dónde se encuentran las enzimas del ciclo de Krebs y los componentes de la cadena de transporte de electrones?

- A. Algunas enzimas del ciclo de Krebs en solución en la matriz; otras, junto con los componentes de la cadena de transporte, en las membranas de las crestas
- B. Todas en solución en la matriz mitocondrial
- C. Todas en las membranas de las crestas
- D. Todas en la membrana externa de la mitocondria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · la mitocondria

Algunas de las enzimas que participan en las reacciones del ciclo de Krebs se encuentran en solución en la matriz. Otras, junto con otros componentes que participan en la cadena de transporte de electrones, se encuentran en las membranas de las crestas.

### 72

En relación con el libro de Biología, ¿dónde llevan a cabo la respiración aeróbica los organismos procariontes, que carecen de mitocondrias?

- A. En pequeñas invaginaciones de la membrana plasmática que generan un microentorno capaz de desarrollar la misma función que las mitocondrias
- B. En el citoplasma, sin ninguna estructura especializada
- C. En el nucleoide, junto al material genético
- D. En la pared celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · la mitocondria

Una gran cantidad de organismos procariontes respiran aeróbicamente, pero, como carecen de mitocondrias, estos procesos se llevan a cabo en pequeñas invaginaciones de la membrana plasmática que generan un microentorno capaz de desarrollar la misma función que las mitocondrias de los eucariontes.

---

## Sub-lote 15 · La oxidación del ácido pirúvico y el ciclo de Krebs (p. 150)

### 73

De acuerdo con el libro de Biología, ¿cómo es transportado hacia la matriz mitocondrial el ácido pirúvico resultante de la glucólisis?

- A. De forma selectiva, mediante una proteína de transporte
- B. Por difusión simple a través de las dos membranas
- C. Mediante endocitosis de la membrana mitocondrial
- D. Unido a una molécula de ATP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · oxidación del ácido pirúvico

El ácido pirúvico citoplasmático resultante de la glucólisis es transportado hacia la matriz mitocondrial de forma selectiva mediante una proteína de transporte.

### 74

De conformidad con el libro de Biología, ¿qué ocurre en primer lugar en la oxidación del ácido pirúvico?

- A. Los átomos de carbono y de oxígeno del grupo carboxilo se eliminan en forma de dióxido de carbono y queda un grupo acetilo de dos carbonos
- B. Los átomos de carbono del grupo carboxilo se unen a un compuesto de cuatro carbonos
- C. La molécula se escinde en dos compuestos de tres carbonos
- D. La molécula se reduce a gliceraldehído 3-fosfato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · oxidación del ácido pirúvico

En primer lugar, los átomos de carbono y de oxígeno del grupo carboxilo se eliminan en forma de CO₂ y queda un grupo acetilo de dos carbonos.

### 75
En relación con el libro de Biología, ¿cuántas moléculas nuevas de NADH se forman en ese proceso?
- A. Dos
- B. Una
- C. Cuatro
- D. Seis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · oxidación del ácido pirúvico

En este proceso, se han formado dos nuevas moléculas NADH.

### 76

De acuerdo con el libro de Biología, ¿qué ocurre al entrar el grupo acetilo en el ciclo de Krebs?

- A. Se combina con un compuesto de cuatro carbonos, el ácido oxalacético, y produce un compuesto de seis carbonos, el ácido cítrico
- B. Se combina con un compuesto de seis carbonos, el ácido cítrico, y produce uno de cuatro, el ácido oxalacético
- C. Se oxida directamente a dióxido de carbono y agua
- D. Se transforma en dos moléculas de ácido pirúvico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · ciclo de Krebs

Al entrar en el ciclo de Krebs, el grupo acetilo de dos carbonos se combina con un compuesto de cuatro carbonos (ácido oxalacético) y produce un compuesto de seis carbonos (ácido cítrico).

### 77

De conformidad con el libro de Biología, ¿qué ocurre en el curso del ciclo de Krebs?

- A. Dos de los seis carbonos del ácido cítrico se oxidan a dióxido de carbono, se regenera el ácido oxalacético y se completa un ciclo
- B. Los seis carbonos del ácido cítrico se oxidan a dióxido de carbono y el ciclo se interrumpe
- C. Se forman dos moléculas de ácido pirúvico y el ciclo se reinicia
- D. Se regenera el ácido cítrico a partir del oxalacético

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 150
**Subtema:** Respiración celular · ciclo de Krebs

En el curso de este ciclo, dos de los seis carbonos del ácido cítrico se oxidan a CO₂, se regenera el ácido oxalacético, y se completa un ciclo.

> La cuenta de carbonos del ciclo, que es lo que lo hace "ciclo": entran **2**
> (el acetilo) + **4** (el oxalacético) = **6** (el cítrico); salen **2** como
> CO₂ y quedan otra vez **4**, listos para la vuelta siguiente.

---

## Sub-lote 16 · El esquema de la mitocondria (figura 8-5, p. 151)

### 78

En relación con el libro de Biología, ¿qué conforma la membrana interna plegada de la mitocondria?

- A. Una serie de tabiques o crestas
- B. Una serie de vesículas independientes
- C. Una capa lisa que envuelve a la externa
- D. Una red de microtúbulos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · la mitocondria

Una mitocondria está formada por dos membranas. La membrana interna plegada conforma una serie de tabiques o crestas.

### 79

De acuerdo con el libro de Biología, ¿dónde se encuentran muchas de las enzimas y transportadores de electrones involucrados en la respiración celular?

- A. Insertos en las membranas internas de la mitocondria
- B. Disueltos en el espacio intermembrana
- C. Insertos en la membrana externa de la mitocondria
- D. Libres en el citoplasma celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · la mitocondria

Muchas de las enzimas y transportadores de electrones involucrados en la respiración celular se encuentran insertos en estas membranas internas.

### 80

De conformidad con el libro de Biología, ¿qué papel desempeñan los complejos de ATP sintetasa?

- A. Un papel fundamental en la formación de ATP durante la etapa final de la respiración celular
- B. Un papel fundamental en la degradación del ATP a ADP
- C. Un papel fundamental en el transporte del ácido pirúvico a la matriz
- D. Un papel fundamental en la formación de las crestas mitocondriales

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · la mitocondria

Entre las enzimas están los complejos de ATP sintetasa que, como veremos, desempeñan un papel fundamental en la formación de ATP durante la etapa final de la respiración celular.

### 81

En relación con el libro de Biología, ¿cómo se llama el compartimento que queda entre las dos membranas de la mitocondria?

- A. Espacio intermembrana
- B. Matriz mitocondrial
- C. Cresta mitocondrial
- D. Nucleoide

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · la mitocondria

Esquema de una mitocondria: membrana externa, membrana interna, espacio intermembrana, crestas y matriz.

> Las cinco partes que rotula la figura, para no confundirlas: las dos
> **membranas**, el **espacio intermembrana** entre ellas, las **crestas** que
> forma la interna al plegarse, y la **matriz** que es todo lo de dentro.

---

## Sub-lote 17 · La formación de acetil-CoA (figura 8-6, p. 151)

### 82

De acuerdo con el libro de Biología, ¿qué enzima interviene en la oxidación del ácido pirúvico?

- A. La piruvato deshidrogenasa
- B. La piruvato cinasa
- C. La triosa fosfato deshidrogenasa
- D. La ATP sintetasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · acetil-CoA

Piruvato deshidrogenasa.

> Ojo con el distractor B: la **piruvato cinasa** es la del paso 9 de la
> glucólisis; la **piruvato deshidrogenasa** es la que oxida el ácido pirúvico
> ya dentro de la mitocondria. Se parecen en el nombre y actúan en etapas
> distintas.

### 83

De conformidad con el libro de Biología, ¿a qué se oxida la molécula de tres carbonos del ácido pirúvico?

- A. Al grupo acetilo de dos carbonos
- B. Al ácido cítrico de seis carbonos
- C. Al ácido oxalacético de cuatro carbonos
- D. A dos moléculas de dióxido de carbono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · acetil-CoA

La molécula de tres carbonos del ácido pirúvico se oxida al grupo acetilo de dos carbonos.

### 84

En relación con el libro de Biología, ¿con qué se combina el grupo acetilo y qué compuesto forma?

- A. Con la coenzima A, formando el compuesto acetil-CoA
- B. Con el ácido oxalacético, formando el ácido cítrico
- C. Con el NAD⁺, formando NADH
- D. Con el oxígeno, formando dióxido de carbono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · acetil-CoA

El grupo acetilo de dos carbonos se combina con la coenzima A, formando el compuesto acetil-CoA.

### 85

De acuerdo con el libro de Biología, ¿a qué está acoplada la oxidación de la molécula de ácido pirúvico?

- A. A la reducción de NAD⁺
- B. A la reducción de FAD
- C. A la síntesis de ATP a partir de ADP
- D. A la formación de agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · acetil-CoA

La oxidación de la molécula de ácido pirúvico está acoplada a la reducción de NAD⁺.

### 86

De conformidad con el libro de Biología, ¿a dónde entra la acetil-CoA?

- A. En el ciclo de Krebs
- B. En la glucólisis
- C. En la cadena de transporte de electrones
- D. En el espacio intermembrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · acetil-CoA

La acetil-CoA entra en el ciclo de Krebs.

---

## Sub-lote 18 · El ciclo de Krebs en la figura 8-7 (p. 151)

### 87

En relación con el libro de Biología, ¿qué ocurre en el ciclo de Krebs con los carbonos donados por el grupo acetilo?

- A. Se oxidan a dióxido de carbono
- B. Se reducen a glucosa
- C. Se incorporan al ácido oxalacético de forma permanente
- D. Se transforman en agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

En este ciclo, los carbonos donados por el grupo acetilo se oxidan a CO₂.

### 88

De acuerdo con el libro de Biología, ¿a qué aceptores pasan los electrones en el ciclo de Krebs?

- A. A los aceptores de electrones NAD y FAD
- B. Al oxígeno molecular, directamente
- C. A la coenzima A
- D. A los complejos de ATP sintetasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

Los electrones pasan a los aceptores de electrones NAD y FAD.

### 89

De conformidad con el libro de Biología, ¿qué interviene en cada paso del ciclo de Krebs, al igual que en la glucólisis?

- A. Una enzima específica
- B. Una molécula de agua
- C. Una molécula de ATP
- D. Un transportador de la membrana interna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

Al igual que en la glucólisis, en cada paso interviene una enzima específica.

### 90

En relación con el libro de Biología, ¿qué papel cumple la coenzima A?

- A. Es el nexo entre la oxidación del ácido pirúvico y el ciclo de Krebs
- B. Es el aceptor final de los electrones de la cadena respiratoria
- C. Es la enzima que cataliza el primer paso del ciclo de Krebs
- D. Es el transportador que lleva el ácido pirúvico a la matriz

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

La coenzima A es el nexo entre la oxidación del ácido pirúvico y el ciclo de Krebs.

### 91

De acuerdo con el libro de Biología, ¿en qué orden aparecen los primeros compuestos del ciclo de Krebs?

- A. Ácido cítrico, ácido cis-aconítico, ácido isocítrico y ácido α-cetoglutárico
- B. Ácido cítrico, ácido isocítrico, ácido cis-aconítico y ácido α-cetoglutárico
- C. Ácido oxalacético, ácido málico, ácido fumárico y ácido succínico
- D. Ácido α-cetoglutárico, ácido isocítrico, ácido cis-aconítico y ácido cítrico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

Ácido cítrico, ácido cis-aconítico, ácido isocítrico, ácido α-cetoglutárico.

### 92

De conformidad con el libro de Biología, ¿en qué orden aparecen los últimos compuestos del ciclo de Krebs, antes de cerrarse?

- A. Ácido succínico, ácido fumárico, ácido málico y ácido oxalacético
- B. Ácido succínico, ácido málico, ácido fumárico y ácido oxalacético
- C. Ácido oxalacético, ácido málico, ácido fumárico y ácido succínico
- D. Ácido fumárico, ácido succínico, ácido oxalacético y ácido málico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

Ácido succínico, ácido fumárico, ácido málico, ácido oxalacético.

> Los ocho compuestos del ciclo, en orden y de corrido: **cítrico**,
> **cis-aconítico**, **isocítrico**, **α-cetoglutárico**, **succínico**,
> **fumárico**, **málico** y **oxalacético** — que es con el que empezó todo y
> por eso el ciclo se cierra.

### 93

En relación con el libro de Biología, ¿qué compuesto de alta energía se forma a partir del GDP en el ciclo de Krebs?

- A. GTP
- B. ATP
- C. NADH
- D. FADH₂

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 151
**Subtema:** Respiración celular · ciclo de Krebs

GDP, GTP.

---

## Sub-lote 19 · El balance del ciclo de Krebs (p. 152)

### 94

De acuerdo con el libro de Biología, ¿interviene el oxígeno en las reacciones del ciclo de Krebs?

- A. No; los electrones y los protones eliminados en la oxidación del carbono son aceptados por el NAD⁺ y el FAD
- B. Sí; el oxígeno acepta directamente los electrones eliminados en la oxidación del carbono
- C. Sí; el oxígeno se combina con el grupo acetilo al entrar en el ciclo
- D. No; los electrones son aceptados por la coenzima A

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · balance del ciclo de Krebs

Si bien la entrada del ácido pirúvico a la mitocondria depende de la presencia de oxígeno en el medio, en las reacciones del ciclo de Krebs no interviene el O₂; los electrones y los protones eliminados en la oxidación del carbono son aceptados por el NAD⁺ y el FAD.

> Distinción fina: el oxígeno **hace falta para que el ácido pirúvico entre** a la
> mitocondria, pero **no participa** en las reacciones del ciclo. Se cuela ahí
> mismo, en la misma frase del libro.

### 95

De conformidad con el libro de Biología, ¿qué se forma y qué se libera por cada vuelta del ciclo de Krebs?

- A. Se forman una molécula de ATP, tres de NADH y una de FADH₂, y se liberan dos moléculas de dióxido de carbono
- B. Se forman dos moléculas de ATP, seis de NADH y dos de FADH₂, y se liberan cuatro de dióxido de carbono
- C. Se forman tres moléculas de ATP, una de NADH y tres de FADH₂, y se liberan dos de dióxido de carbono
- D. Se forman una molécula de ATP, una de NADH y una de FADH₂, y se libera una de dióxido de carbono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · balance del ciclo de Krebs

Por cada ciclo se forma una molécula de ATP, tres moléculas de NADH y una molécula de FADH₂ a partir de FAD. Además, se liberan dos moléculas de CO₂.

### 96

En relación con el libro de Biología, ¿por qué ese rendimiento debe ser multiplicado por dos?

- A. Porque por cada molécula de glucosa se forman dos grupos acetilo
- B. Porque el ciclo de Krebs ocurre en las dos membranas de la mitocondria
- C. Porque cada ciclo se repite dos veces por cada grupo acetilo
- D. Porque la mitad del rendimiento se pierde como calor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · balance del ciclo de Krebs

Si se tiene en cuenta que por cada molécula de glucosa se forman dos grupos acetilo, este rendimiento debe ser multiplicado por dos.

### 97

De acuerdo con el libro de Biología, ¿cuál es el resultado neto de la etapa del ciclo de Krebs?

- A. Dos moléculas de ATP, seis de NADH, dos de FADH₂ y cuatro de dióxido de carbono
- B. Una molécula de ATP, tres de NADH, una de FADH₂ y dos de dióxido de carbono
- C. Cuatro moléculas de ATP, seis de NADH, cuatro de FADH₂ y dos de dióxido de carbono
- D. Dos moléculas de ATP, dos de NADH, seis de FADH₂ y cuatro de dióxido de carbono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · balance del ciclo de Krebs

Resultado neto de esta etapa: 2 moléculas de ATP, 6 moléculas de NADH, 2 moléculas de FADH₂, 4 moléculas de CO₂.

> El distractor B es el rendimiento **de una vuelta**, no el neto de la etapa. Es
> el mismo error que en la glucólisis: el libro da primero la cifra por ciclo y
> después la total, y se confunden.

---

## Sub-lote 20 · La etapa final: el transporte de electrones (p. 152)

### 98

De conformidad con el libro de Biología, una vez oxidada la glucosa, ¿dónde permanece la mayor parte de la energía almacenada?

- A. En los electrones que se separaron de los átomos de carbono y fueron conducidos a los aceptores NAD⁺ y FAD
- B. En los enlaces fosfato del ATP ya formado
- C. En las moléculas de dióxido de carbono liberadas
- D. En el gradiente de protones de la membrana externa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · transporte de electrones

Sin embargo, la mayor parte de la energía almacenada permanece en los electrones que se separaron de los átomos de carbono y fueron conducidos a los aceptores NAD⁺ y FAD, los cuales se redujeron a NADH y FADH₂.

### 99

En relación con el libro de Biología, ¿qué ocurre con los electrones del NADH y del FADH₂ durante el transporte terminal de electrones?

- A. Son conducidos paso a paso a un nivel energético inferior, a través de una secuencia de reacciones de oxidorreducción
- B. Son conducidos paso a paso a un nivel energético superior, a través de una secuencia de reacciones de síntesis
- C. Son liberados directamente al citoplasma celular
- D. Se combinan de inmediato con el dióxido de carbono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · transporte de electrones

Durante el transporte terminal de electrones, que es la etapa final de la respiración, los electrones del NADH y del FADH₂, de alto nivel energético, son conducidos paso a paso a un nivel energético inferior, a través de una secuencia de reacciones de oxidorreducción.

### 100

De acuerdo con el libro de Biología, ¿cómo se denomina esa secuencia de reacciones de oxidorreducción?

- A. Cadena transportadora de electrones o cadena respiratoria
- B. Ciclo de Krebs o ciclo del ácido cítrico
- C. Vía glucolítica o secuencia glucolítica
- D. Complejo multienzimático de la piruvato deshidrogenasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · transporte de electrones

Una secuencia de reacciones de oxidorreducción, que constituyen la cadena transportadora de electrones o cadena respiratoria.

### 101

De conformidad con el libro de Biología, ¿qué ocurre cuando los electrones se mueven por la cadena respiratoria saltando a niveles energéticos inferiores?

- A. Se libera energía, que participa en la síntesis de ATP a partir de ADP
- B. Se consume energía, que debe aportar la molécula de glucosa
- C. Se libera dióxido de carbono
- D. Se detiene la respiración celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · transporte de electrones

Cuando los electrones se mueven por la cadena respiratoria, saltando a niveles energéticos inferiores, se libera energía. Esta energía participa en la síntesis de ATP a partir de ADP.

### 102

En relación con el libro de Biología, ¿cómo se denomina ese proceso de síntesis de ATP?

- A. Fosforilación oxidativa
- B. Fosforilación a nivel de sustrato
- C. Descarboxilación oxidativa
- D. Acoplamiento enzimático

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · transporte de electrones

Esta energía participa en la síntesis de ATP a partir de ADP, en un proceso denominado fosforilación oxidativa.

---

## Sub-lote 21 · La cadena respiratoria (p. 152)

### 103

De acuerdo con el libro de Biología, ¿dónde se encuentran los componentes principales de la cadena transportadora de electrones?

- A. Forman parte de complejos multienzimáticos que se encuentran en la membrana interna de las mitocondrias
- B. Forman parte de complejos multienzimáticos disueltos en la matriz mitocondrial
- C. Se encuentran libres en el citoplasma celular
- D. Se encuentran en la membrana externa de las mitocondrias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · cadena respiratoria

Los componentes principales de la cadena transportadora de electrones forman parte de complejos multienzimáticos que se encuentran en la membrana interna de las mitocondrias.

### 104

De conformidad con el libro de Biología, aunque las estructuras de los citocromos son parecidas, ¿para qué difiere cada una lo suficiente?

- A. Para captar electrones con diferentes niveles energéticos
- B. Para unirse a distintos tipos de sustrato
- C. Para resistir distintas temperaturas
- D. Para formar parte de membranas distintas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · cadena respiratoria

Aunque las estructuras de los citocromos son parecidas, cada una difiere lo suficiente como para captar electrones con diferentes niveles energéticos.

### 105

En relación con el libro de Biología, ¿qué hace el átomo de hierro de cada citocromo?

- A. Acepta y libera, en forma alternada, un electrón, y lo transfiere al siguiente citocromo en un nivel de energía ligeramente inferior
- B. Acepta un electrón y lo retiene de forma permanente
- C. Libera protones hacia el espacio intermembrana
- D. Se combina con el oxígeno para formar agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · cadena respiratoria

El átomo de hierro (Fe) de cada citocromo acepta y libera, en forma alternada, un electrón y lo transfiere al siguiente citocromo en un nivel de energía ligeramente inferior.

### 106

De acuerdo con el libro de Biología, ¿qué ocurre cuando los electrones adquieren un nivel de energía suficientemente bajo?

- A. Son aceptados por el oxígeno, que entonces se combina con protones de la solución, lo que da como resultado moléculas de agua
- B. Son aceptados por el dióxido de carbono, lo que da como resultado glucosa
- C. Vuelven al NADH para reiniciar la cadena
- D. Se liberan al citoplasma como calor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · cadena respiratoria

Luego de estas sucesivas reacciones de oxidorreducción, los electrones adquieren un nivel de energía suficientemente bajo y son aceptados por el oxígeno que entonces se combina con protones (iones H⁺) de la solución, lo que da como resultado moléculas de agua.

---

## Sub-lote 22 · El acoplamiento quimiosmótico (p. 152)

### 107

De conformidad con el libro de Biología, ¿quién propuso que la síntesis de ATP era impulsada por un gradiente de protones, y en qué década?

- A. El bioquímico británico Peter Mitchell, en la década de 1960
- B. El bioquímico alemán Leonor Michaelis, en la década de 1910
- C. El físico ruso-belga Ilya Prigogine, en la década de 1970
- D. El físico austríaco Edwin Schrödinger, en la década de 1940

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · acoplamiento quimiosmótico

En la década de 1960, el bioquímico británico Peter Mitchell (1920-1992) propuso que la síntesis de ATP era impulsada por un gradiente de protones establecido a través de la membrana mitocondrial interna.

### 108

En relación con el libro de Biología, ¿qué premio recibió Peter Mitchell por su trabajo y en qué año?

- A. El Premio Nobel, en 1978
- B. El Premio Nobel, en 1968
- C. El Premio Nobel de química, en 1977
- D. El Premio Nobel de medicina, en 1961

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · acoplamiento quimiosmótico

Por su trabajo, recibió el Premio Nobel en 1978.

### 109

De acuerdo con el libro de Biología, ¿qué refleja el vocablo "quimiosmótico"?

- A. Que la producción de ATP incluye tanto procesos químicos como procesos de transporte a través de una membrana selectivamente permeable
- B. Que la producción de ATP depende únicamente de procesos químicos
- C. Que la producción de ATP depende únicamente del transporte a través de la membrana
- D. Que la producción de ATP ocurre por ósmosis del agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · acoplamiento quimiosmótico

El vocablo "quimiosmótico" refleja el hecho de que la producción de ATP, como resultado de la fosforilación oxidativa, incluye tanto procesos químicos como procesos de transporte a través de una membrana selectivamente permeable.

### 110

De conformidad con el libro de Biología, ¿qué dos acontecimientos diferentes tienen lugar en el acoplamiento quimiosmótico?

- A. Se establece un gradiente de protones a través de la membrana mitocondrial interna, y la energía potencial almacenada en el gradiente se libera y es capturada en la formación de ATP
- B. Se establece un gradiente de electrones y se libera dióxido de carbono
- C. Se oxida el ácido pirúvico y se forma acetil-CoA
- D. Se reduce el NAD⁺ y se oxida el FADH₂

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · acoplamiento quimiosmótico

En el acoplamiento quimiosmótico tienen lugar dos acontecimientos diferentes: 1) se establece un gradiente de protones a través de la membrana mitocondrial interna y 2) la energía potencial almacenada en el gradiente se libera y es capturada en la formación de ATP a partir de ADP y fosfato.

---

## Sub-lote 23 · El rendimiento energético global (p. 152)

### 111

En relación con el libro de Biología, ¿cuál es la producción total máxima de ATP a partir de una molécula de glucosa?

- A. 38 moléculas de ATP
- B. 36 moléculas de ATP
- C. 32 moléculas de ATP
- D. 40 moléculas de ATP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · rendimiento global

Como se muestra en un cuadro de balance, la producción total a partir de una molécula de glucosa es, como máximo, de 38 moléculas de ATP.

### 112

De acuerdo con el libro de Biología, ¿por qué esas cifras representan el máximo rendimiento energético teórico posible?

- A. Porque el gradiente de protones en la mitocondria puede usarse para propósitos distintos de la síntesis de ATP
- B. Porque parte del ATP formado se degrada de inmediato
- C. Porque la glucosa nunca llega a oxidarse por completo
- D. Porque el oxígeno del medio suele ser insuficiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · rendimiento global

Tengamos en cuenta que el gradiente de protones en la mitocondria puede usarse para propósitos distintos de la síntesis de ATP y, por consiguiente, las cifras que damos representan el máximo rendimiento energético teórico posible.

### 113

De conformidad con el libro de Biología, ¿de dónde provienen esas 38 moléculas de ATP?

- A. A excepción de dos, de reacciones que ocurren en la mitocondria; y con excepción de cuatro, todas resultan del pasaje de electrones transportados por el NADH o el FADH₂
- B. A excepción de cuatro, de reacciones que ocurren en la mitocondria; y con excepción de dos, todas resultan del pasaje de electrones
- C. Todas provienen de reacciones que ocurren en el citoplasma celular
- D. Todas provienen del ciclo de Krebs, sin intervención de la cadena de transporte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 152
**Subtema:** Respiración celular · rendimiento global

Nótese que, a excepción de dos, las 38 moléculas de ATP provienen de reacciones que ocurren en la mitocondria y, con excepción de cuatro, todas resultan del pasaje de electrones transportados por el NADH o el FADH₂ a favor de la cadena de transporte de electrones.

---

## Sub-lote 24 · La cadena transportadora en la figura 8-8 (p. 153)

### 114

En relación con el libro de Biología, ¿qué contienen los complejos de proteínas inmersos en la membrana mitocondrial interna?

- A. Los transportadores de electrones y las enzimas necesarias para catalizar la transferencia de electrones de un transportador a otro
- B. Únicamente los transportadores de electrones, sin enzimas
- C. Las reservas de glucógeno de la célula
- D. El material genético propio de la mitocondria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · cadena transportadora

Estos complejos contienen los transportadores de electrones y las enzimas necesarias para catalizar la transferencia de electrones de un transportador a otro.

### 115

De acuerdo con el libro de Biología, mientras los electrones son transportados a lo largo de la cadena respiratoria, ¿qué se bombea y hacia dónde?

- A. Se bombean protones a través de los complejos proteicos, desde la matriz hacia el espacio intermembrana
- B. Se bombean protones desde el espacio intermembrana hacia la matriz
- C. Se bombean electrones desde la matriz hacia el citosol
- D. Se bombea oxígeno desde el citosol hacia la matriz

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · cadena transportadora

Mientras los electrones son transportados a lo largo de la cadena respiratoria, se bombean protones a través de los complejos proteicos, desde la matriz hacia el espacio intermembrana.

### 116

De conformidad con el libro de Biología, ¿con qué se combinan finalmente los electrones y qué se forma?

- A. Con los protones y el oxígeno, y se forma agua
- B. Con el dióxido de carbono, y se forma glucosa
- C. Con el NAD⁺, y se forma NADH
- D. Con el fosfato inorgánico, y se forma ATP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · cadena transportadora

Los electrones finalmente se combinan con los H⁺ y el oxígeno, y se forma agua.

### 117

En relación con el libro de Biología, ¿qué suministra la energía por medio de la cual se genera el ATP a partir del ADP y el fosfato inorgánico?

- A. El movimiento de protones a favor del gradiente, a medida que pasan a través del complejo de la ATP sintetasa
- B. El movimiento de protones en contra del gradiente, impulsado por el ATP ya formado
- C. La oxidación directa de la glucosa en la matriz mitocondrial
- D. La combinación del oxígeno con el dióxido de carbono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · cadena transportadora

El movimiento de protones a favor del gradiente, a medida que pasan a través del complejo de la ATP sintetasa, suministra la energía por medio de la cual se genera el ATP a partir del ADP y el fosfato inorgánico.

> Aquí se cierra el argumento de Mitchell: los complejos **suben** los protones al
> espacio intermembrana gastando la energía de los electrones, y luego esos
> protones **bajan** por la ATP sintetasa, y esa bajada es la que fabrica el ATP.

### 118

De acuerdo con el libro de Biología, ¿qué tres complejos rotula el esquema de la cadena transportadora de electrones?

- A. El complejo NADH deshidrogenasa, el complejo citocromo b-c₁ y el complejo citocromo oxidasa
- B. El complejo piruvato deshidrogenasa, el complejo citocromo b-c₁ y el complejo ATP sintetasa
- C. El complejo NADH deshidrogenasa, el complejo aldolasa y el complejo citocromo oxidasa
- D. El complejo citocromo oxidasa, el complejo hexocinasa y el complejo ATP sintetasa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · cadena transportadora

Complejo NADH deshidrogenasa, complejo citocromo b-c₁, complejo citocromo oxidasa.

---

## Sub-lote 25 · El resumen de la respiración celular (figura 8-9, p. 153)

### 119
De conformidad con el libro de Biología, ¿dónde ocurre la glucólisis?
- A. En el citosol
- B. En la matriz mitocondrial
- C. En la membrana mitocondrial interna
- D. En el espacio intermembrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · resumen del proceso

Citosol: glucosa, glucólisis, 2 piruvato.

### 120
En relación con el libro de Biología, ¿en qué se convierten los 2 NADH producidos en el citosol?
- A. En 2 NADH o 2 FADH₂
- B. En 2 ATP o 2 GTP
- C. En 2 acetil-CoA
- D. En 2 moléculas de agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · resumen del proceso

2 NADH → 2 NADH o 2 FADH₂.

### 121
De acuerdo con el libro de Biología, ¿cuántos NADH y FADH₂ salen del ciclo de Krebs?
- A. 6 NADH y 2 FADH₂
- B. 2 NADH y 6 FADH₂
- C. 6 NADH y 6 FADH₂
- D. 2 NADH y 2 FADH₂

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · resumen del proceso

Ciclo de Krebs: 6 NADH, 2 FADH₂.

### 122
De conformidad con el libro de Biología, ¿cuánto ATP aporta la fosforilación oxidativa?
- A. Aproximadamente 32 o 34 ATP
- B. Aproximadamente 36 o 38 ATP
- C. Exactamente 2 ATP
- D. Aproximadamente 12 o 14 ATP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · resumen del proceso

Fosforilación oxidativa: transporte de electrones y quimiósmosis, + aproximadamente 32 o 34 ATP.

### 123
En relación con el libro de Biología, ¿cuál es el total aproximado de ATP del proceso completo?
- A. Aproximadamente 36 o 38 ATP
- B. Aproximadamente 32 o 34 ATP
- C. Exactamente 38 ATP
- D. Aproximadamente 4 ATP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · resumen del proceso

+ aproximadamente 36 o 38 ATP.

> Ojo a la diferencia con la página anterior: el **texto** dice "como máximo 38",
> y la **figura** da el rango "aproximadamente 36 o 38". No se contradicen —el
> 38 es el techo teórico y el 36 el caso en que el NADH del citosol entra como
> FADH₂—, pero conviene tener presentes las dos cifras.

### 124
De acuerdo con el libro de Biología, ¿cuánto ATP aportan por separado la glucólisis y el ciclo de Krebs?
- A. 2 ATP cada uno
- B. 4 ATP cada uno
- C. 2 ATP la glucólisis y 4 el ciclo de Krebs
- D. 4 ATP la glucólisis y 2 el ciclo de Krebs

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 153
**Subtema:** Respiración celular · resumen del proceso

+2 ATP (glucólisis), + 2 ATP (ciclo de Krebs).

---

## Sub-lote 26 · La fermentación (p. 154)

### 125

De acuerdo con el libro de Biología de Curtis, ¿cómo se llaman los organismos que solo pueden obtener energía en presencia de oxígeno y que mueren cuando no disponen de él?

- A. Aerobios estrictos
- B. Anaerobios estrictos
- C. Anaerobios facultativos
- D. Aerobios facultativos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

Algunos organismos, llamados aerobios estrictos, solo pueden obtener energía de esta forma y, cuando no disponen de oxígeno, mueren.

### 126

De acuerdo con el libro de Biología de Curtis, ¿cómo se llaman los organismos que pueden pasar de una vía a la otra según la concentración de oxígeno en el medio?

- A. Anaerobios facultativos
- B. Aerobios estrictos
- C. Anaerobios estrictos
- D. Aerobios primarios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

Algunos organismos que pueden pasar de una vía a la otra según la concentración de oxígeno en el medio se denominan anaerobios facultativos.

### 127

De acuerdo con el libro de Biología de Curtis, ¿en qué constituyen las vías en las que el aceptor final de electrones es un compuesto diferente del oxígeno?

- A. La respiración anaeróbica
- B. La respiración aeróbica
- C. La fosforilación oxidativa
- D. El acoplamiento quimiosmótico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

Estas vías, en las que el aceptor final de electrones es un compuesto diferente del oxígeno, constituyen la respiración anaeróbica.

### 128

De acuerdo con el libro de Biología de Curtis, ¿cómo se llama la formación de alcohol a partir de azúcar?

- A. Fermentación alcohólica
- B. Fermentación láctica
- C. Respiración anaeróbica
- D. Desaminación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

La formación de alcohol a partir de azúcar se llama fermentación alcohólica.

### 129

De acuerdo con el libro de Biología de Curtis, ¿cuál fue el primer proceso enzimático intensamente estudiado, aun cuando todavía no se había instalado el concepto de enzima?

- A. La fermentación
- B. La glucólisis
- C. El ciclo de Krebs
- D. La cadena respiratoria

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

Dada la importancia económica de la industria vitivinícola, la fermentación fue el primer proceso enzimático intensamente estudiado, aun cuando todavía no se había instalado el concepto de enzima.

### 130

De acuerdo con el libro de Biología de Curtis, ¿cómo se denominaban comúnmente las enzimas antes de que se conocieran sus efectos tan diversos?

- A. "Fermentos"
- B. "Catalizadores"
- C. "Coenzimas"
- D. "Zimógenos"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

De hecho, antes de que se conocieran sus efectos tan diversos, las enzimas se denominaban comúnmente "fermentos".

### 131

De acuerdo con el libro de Biología de Curtis, ¿cómo se llama la transformación del ácido pirúvico en ácido láctico?

- A. Fermentación láctica
- B. Fermentación alcohólica
- C. Desaminación
- D. Fosforilación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

La transformación del ácido pirúvico en ácido láctico se llama fermentación láctica.

### 132

De acuerdo con el libro de Biología de Curtis, ¿qué provoca la sensación de fatiga muscular durante el ejercicio intenso?

- A. La acumulación de ácido láctico, que disminuye el pH de las células musculares y reduce la capacidad de las fibras para contraerse
- B. El agotamiento total de las reservas de glucógeno del músculo
- C. La detención de la glucólisis por falta de NAD⁺
- D. La difusión del ácido pirúvico hacia la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 154
**Subtema:** glucólisis y respiración · fermentación

La acumulación de ácido láctico provoca que el pH de las células musculares disminuya y reduce la capacidad de las fibras musculares para contraerse, lo que provoca la sensación de fatiga muscular.

---

## Sub-lote 27 · El sentido de la fermentación y las otras vías (p. 155)

### 133

De acuerdo con el libro de Biología de Curtis, ¿qué reacción fundamental se produce durante la fermentación, si no se forma ATP?

- A. La oxidación del NADH a NAD⁺, que recicla la molécula a su estado oxidado
- B. La reducción del NAD⁺ a NADH, que aporta energía adicional
- C. La formación de acetil-CoA a partir del ácido pirúvico
- D. La síntesis de glucosa a partir del ácido láctico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · fermentación

Durante el proceso de fermentación, no se forma ATP; es decir, la célula no obtiene energía adicional en este proceso. Sin embargo, se produce una reacción fundamental, que es la oxidación del NADH a NAD⁺, ya que recicla esta molécula a su estado oxidado que podrá así volver a participar en la vía glucolítica.

### 134

De acuerdo con el libro de Biología de Curtis, ¿qué sugiere el hecho de que la glucólisis no requiera O₂?

- A. Que la vía glucolítica ha evolucionado de forma temprana en la historia metabólica de los seres vivos, antes de que el O₂ libre estuviese presente en la atmósfera
- B. Que la glucólisis es una vía exclusiva de los organismos aerobios
- C. Que la glucólisis apareció después del ciclo de Krebs
- D. Que la glucólisis no puede ocurrir en organismos primitivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · fermentación

El hecho de que la glucólisis no requiera O₂ sugiere que la vía glucolítica ha evolucionado de forma temprana en la historia metabólica de los seres vivos, antes de que el O₂ libre estuviese presente en la atmósfera.

### 135

De acuerdo con el libro de Biología de Curtis, ¿qué fracción del ATP que puede generarse por procesos aeróbicos representan las dos moléculas de ATP de la glucólisis anaeróbica?

- A. Alrededor del 5%
- B. Alrededor del 40%
- C. Alrededor del 2%
- D. Alrededor del 10%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · fermentación

Aunque la glucólisis anaeróbica solo genera dos moléculas de ATP por cada molécula de glucosa procesada (una fracción muy pequeña, alrededor del 5% del ATP que puede generarse por procesos aeróbicos), ha sido y continúa siendo adecuada para las necesidades energéticas de muchos organismos.

---

## Sub-lote 28 · Otras vías catabólicas (pp. 155–156)

### 136

De acuerdo con el libro de Biología de Curtis, ¿cómo se conoce al ciclo de Krebs por su papel en la conexión de las distintas vías del metabolismo?

- A. El gran centro de comunicaciones del metabolismo
- B. La vía central de la biosíntesis
- C. El principal transportador de energía
- D. El punto de partida de la glucólisis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · otras vías catabólicas

Este tipo de moléculas son transformadas por diferentes vías que también se conectan con el ciclo de Krebs, el gran centro de comunicaciones del metabolismo.

### 137

De acuerdo con el libro de Biología de Curtis, ¿en qué componentes se escinden las grasas durante la digestión?

- A. En glicerol y ácido graso
- B. En aminoácidos y urea
- C. En glucosa y ácido pirúvico
- D. En acetil-CoA y NADH

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · otras vías catabólicas

Las grasas, durante la digestión, se escinden en sus componentes glicerol y ácido graso.

### 138

De acuerdo con el libro de Biología de Curtis, ¿como qué entran los ácidos grasos al ciclo de Krebs?

- A. Como acetil-CoA
- B. Como gliceraldehído 3-fosfato
- C. Como ácido pirúvico
- D. Como aminoácidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · otras vías catabólicas

Estos últimos son degradados a moléculas de dos carbonos y entran en el ciclo de Krebs como acetil-CoA. Por su parte, el glicerol puede convertirse en gliceraldehído 3-fosfato que, como hemos visto, es un intermediario de la glucólisis.

### 139

De acuerdo con el libro de Biología de Curtis, ¿qué proceso sufren los aminoácidos, en el cual se eliminan los grupos amino?

- A. La desaminación
- B. La fermentación
- C. La fosforilación
- D. La hidrólisis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · otras vías catabólicas

Los aminoácidos pasan por un proceso de desaminación, en el cual se eliminan los grupos amino y queda un esqueleto de carbonos que puede convertirse en un grupo acetilo o bien en uno de los compuestos de la vía glucolítica o del ciclo de Krebs.

### 140

De acuerdo con el libro de Biología de Curtis, ¿cómo se excretan finalmente los grupos amino eliminados, si no se reutilizan?

- A. Como compuestos nitrogenados, por ejemplo, la urea
- B. Como acetil-CoA
- C. Como dióxido de carbono
- D. Como ácido láctico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 155
**Subtema:** glucólisis y respiración · otras vías catabólicas

Los grupos amino eliminados, si no se reutilizan, finalmente se excretan como compuestos nitrogenados (p. ej., la urea).

---

## Sub-lote 29 · Vías de síntesis: autótrofas y heterótrofas (p. 156)

### 141

De acuerdo con el libro de Biología de Curtis, ¿de qué dependen las células heterótrofas para obtener las moléculas orgánicas esenciales para la vida?

- A. De fuentes externas
- B. De la síntesis a partir de moléculas inorgánicas simples
- C. De la energía de la luz solar
- D. Del reciclaje interno de sus propios monosacáridos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 156
**Subtema:** glucólisis y respiración · vías de síntesis

Las células heterótrofas dependen de fuentes externas para obtener las moléculas orgánicas que son esenciales para la vida.

### 142

De acuerdo con el libro de Biología de Curtis, ¿a partir de qué sintetizan monosacáridos las células autótrofas?

- A. A partir de moléculas inorgánicas simples y de una fuente externa de energía
- B. A partir de moléculas orgánicas obtenidas de fuentes externas
- C. A partir del ácido láctico producido en la fermentación
- D. A partir de los aminoácidos de las proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 156
**Subtema:** glucólisis y respiración · vías de síntesis

Las células autótrofas, por el contrario, sintetizan monosacáridos a partir de moléculas inorgánicas simples y de una fuente externa de energía.

> Los reactivos 141 y 142 son el par obligado: las **heterótrofas** dependen de
> fuentes externas y las **autótrofas** sintetizan a partir de inorgánicas. Cada
> una es el distractor de la otra.

### 143

De acuerdo con el libro de Biología de Curtis, ¿en qué se diferencian las vías biosintéticas de las catabólicas, aunque son semejantes?

- A. Enzimas diferentes controlan los diversos pasos y hay varios puntos decisivos del anabolismo que difieren de los procesos catabólicos
- B. No requieren un suministro constante de moléculas orgánicas
- C. Ocurren únicamente en las células autótrofas
- D. No producen ni consumen energía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 156
**Subtema:** glucólisis y respiración · vías de síntesis

Sin embargo, las vías biosintéticas, aunque son semejantes a las catabólicas, se diferencian de ellas. Enzimas diferentes controlan los diversos pasos y hay varios puntos decisivos del anabolismo que difieren de los de los procesos catabólicos.

---

## Sub-lote 30 · Biología en contexto social: el cianuro (pp. 145, 157)

> Apartado "Biología en contexto social". Es contenido histórico-social ligado a
> la cadena respiratoria, no biología pura. Se cubre con reactivos de dato
> concreto. **Los ejercicios de la p. 158** ("Argumente por qué…", "Compare el
> rendimiento…") son de razonamiento, no de recuerdo literal, y quedan fuera.

### 144

De acuerdo con el libro de Biología de Curtis, ¿qué sustancia, presente en alta concentración en las almendras amargas, libera ácido cianhídrico al degradarse con la saliva?

- A. La amigdalina
- B. El benzaldehído
- C. La riboflavina
- D. El ácido láctico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 145
**Subtema:** glucólisis y respiración · contexto social

Las semillas de las almendras poseen en su composición una sustancia llamada amigdalina. Cuando se comen estas almendras, la amigdalina se degrada con la saliva y libera ácido cianhídrico que, en nuestro sistema digestivo, se transforma rápidamente en cianuro, uno de los venenos más potentes conocidos.

### 145

De acuerdo con el libro de Biología de Curtis, ¿en qué interfiere el cianuro liberado por la ingesta de almendras amargas, provocando asfixia repentina letal?

- A. En la cadena respiratoria
- B. En la glucólisis
- C. En la fermentación láctica
- D. En la digestión de las proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 145
**Subtema:** glucólisis y respiración · contexto social

La ingesta de 20 de estas almendras por un adulto o 10 por un niño, produce asfixia repentina letal, ya que el cianuro liberado interfiere en la cadena respiratoria.

### 146

De acuerdo con el libro de Biología de Curtis, ¿qué producto de la degradación de la amigdalina le da a las almendras amargas su sabor, razón por la cual desistimos de comerlas?

- A. El benzaldehído
- B. La amigdalina
- C. El ácido cianhídrico
- D. El cianuro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 145
**Subtema:** glucólisis y respiración · contexto social

Otro de los productos de la degradación de la amigdalina es el benzaldehído, que es lo que les da el sabor amargo, razón por la cual desistimos de comerlas.

### 147

De acuerdo con el libro de Biología de Curtis, ¿en qué conflicto tiene su origen el empleo de sustancias químicas con fines bélicos o "guerra química"?

- A. En la Primera Guerra Mundial
- B. En la Segunda Guerra Mundial
- C. En la Guerra Fría
- D. En la represión del pueblo kurdo en 1988

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 157
**Subtema:** glucólisis y respiración · contexto social

El empleo de sustancias químicas con fines bélicos o "guerra química", como se conoce hoy en día, tiene su origen en los campos de batalla de la Primera Guerra Mundial y su uso se ha extendido desde entonces.

### 148

De acuerdo con el libro de Biología de Curtis, ¿bajo qué nombre fue utilizado el ácido cianhídrico en las cámaras de gas del régimen nazi?

- A. ZIKLON B o ácido prúsico
- B. Amigdalina
- C. Benzaldehído
- D. Gas mostaza

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 157
**Subtema:** glucólisis y respiración · contexto social

En efecto, el ácido cianhídrico fue utilizado en las cámaras de gas del régimen nazi bajo el nombre de ZIKLON B o ácido prúsico.

### 149

De acuerdo con el libro de Biología de Curtis, ¿por qué resultan letales las armas químicas?

- A. Porque afectan, en última instancia, algún aspecto clave del metabolismo celular
- B. Porque destruyen directamente el material genético de las células
- C. Porque impiden la digestión de los alimentos
- D. Porque bloquean la síntesis de proteínas en los ribosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 157
**Subtema:** glucólisis y respiración · contexto social

Las armas químicas resultan letales porque afectan, en última instancia, algún aspecto clave del metabolismo celular.

---

**Reactivos en este archivo:** 149
