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

Cubiertas las páginas impresas **146 a 151**:

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

**Pendiente:** del capítulo 8, las páginas impresas 152 a 158, y el apartado
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

De acuerdo con el libro de Biología, en el capítulo 8 sobre la glucólisis y la respiración celular, en el curso de las reacciones vistas hasta el paso 3, ¿cuántas moléculas de ATP se han convertido en ADP?

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

En relación con el libro de Biología, en el capítulo 8 sobre la glucólisis y la respiración celular, ¿cuántas moléculas de NADH y cuántos iones H⁺ se obtienen por cada molécula de glucosa en ese paso?

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

En relación con el libro de Biología, en el capítulo 8 sobre la glucólisis y la respiración celular, ¿cuántas moléculas nuevas de NADH se forman en ese proceso?

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

**Reactivos en este archivo:** 93
