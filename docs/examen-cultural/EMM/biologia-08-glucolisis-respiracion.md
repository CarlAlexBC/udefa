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

Cubiertas las páginas impresas **146 a 148**:

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

**Pendiente:** del capítulo 8, las páginas impresas 149 a 158, y el apartado
"Biología en contexto social" de las páginas 145–146. De la materia siguen sin
empezar los capítulos 11, 12, 31, 32, 35, 36 y 37.

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

**Reactivos en este archivo:** 40
