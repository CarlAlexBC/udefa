# Biología · Capítulo 7 · Metabolismo

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(202 reactivos), 4 (173) y 5 (157).

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de
texto es lorem ipsum) — ver la nota del encabezado del capítulo 3.

```
python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" 171 <hoja> --desfase=46
```

En PowerShell hay que anteponer `PYTHONIOENCODING=utf-8` con el Bash tool, o la
consola revienta con los caracteres raros de la capa de texto.

## Alcance

Este archivo cubre el **capítulo 7 · Metabolismo**, que va de la página impresa
**125** (hoja 171) a la **144** (hoja 190).

**El temario dice 127, y no es donde empieza.** La portadilla está en la hoja
171 = página impresa **125**, junto con el apartado "Biología en contexto
social". Verificado con `extraer.py` antes de escribir nada. Es el mismo desfase
de dos páginas que ya había mordido al capítulo 5, donde el encabezado daba por
empezado el capítulo en la 89 cuando arrancaba en la 87 — y se perdió una
sección de teoría entera. Por eso ahora **la portadilla se comprueba siempre**.

## Este capítulo es el que cita el Anexo "H"

El ejemplo de Biología del Anexo "H" de la convocatoria sale de aquí:

> "La segunda ley de la termodinámica establece que existe una dirección hacia la
> cual cualquier sistema fuera del equilibrio tiende a desplazarse" — declarado
> en la **página 129**, que con desfase +46 cae en la hoja 175.

Es la evidencia más fuerte que hay de que el examen real bebe de este capítulo, y
en concreto de la sección de termodinámica. **Conviene cubrirla a fondo.**

## Cobertura actual

Cubiertas las páginas impresas **126 a 140**:

- La vida y el flujo de energía del sol; la célula como transformador de energía;
  el metabolismo y el origen griego de la palabra "energía".
- Las transformaciones energéticas en los seres vivos: la bioluminiscencia de las
  luciérnagas y los dinoflagelados, la visión y los fotopigmentos, las células
  vegetales y las proteínas musculares.
- La termodinámica y el experimento de Joule; qué es un sistema aislado.
- La primera ley de la termodinámica y los sistemas biológicos abiertos.
- La entropía: Clausius, la etimología y el símbolo S, y el ejemplo del castillo
  de naipes (orden = improbable; el estado más probable es el de mayor entropía).
- **La segunda ley de la termodinámica** (p. 129, la que cita el Anexo "H"): la
  dirección única de los procesos naturales, los gradientes como fuente de las
  fuerzas, el enunciado literal y las ecuaciones de energía útil y disipada.
- Los procesos espontáneos en sistemas aislados y el enunciado conjunto de los
  dos principios.
- Los sistemas vivos frente a la segunda ley: la controversia con los biólogos y
  el aporte de Schrödinger en *¿Qué es la vida?* (1944).
- Cómo se salva la objeción: el organismo gana orden interno a expensas de
  desordenar su ambiente, y la cuenta se cierra mirando el conjunto.
- Equilibrio frente a estado estacionario, y Prigogine con la termodinámica de
  procesos irreversibles (Nobel de química, 1977).
- El "orden a partir de orden": el microcódigo, el cristal aperiódico y su
  confirmación posterior en el ADN de Watson y Crick.
- Las heterogeneidades de la célula: los gradientes a través de las membranas,
  los compartimentos sin membrana, el citosol como gel, y por qué la disipación
  de los gradientes significa la muerte celular.
- Las transformaciones energéticas durante las reacciones químicas: la entalpía
  (etimología, símbolo, Qp, exo y endotérmica) y la oxidación de la glucosa en el
  calorímetro (673 kcal/mol).
- La energía libre de Gibbs: el desequilibrio químico, la reacción de
  oxidorreducción, y la ecuación ΔG = ΔH – T × ΔS.
- El calorímetro y la espontaneidad: ΔG negativo = espontánea, y por qué una
  reacción endotérmica puede serlo.
- Reacciones exergónicas y endergónicas, su acoplamiento y el papel del ATP.
- El metabolismo como red de redes; las enzimas y su impacto en la velocidad y
  el rendimiento; las vías anabólicas y catabólicas.
- El recuadro 7-1: las reacciones redox, oxidación como pérdida de electrones y
  reducción como ganancia, su simultaneidad y los átomos de hidrógeno.
- La universalidad del metabolismo y la ancestralidad común; la molécula de ATP
  y su hidrólisis.
- Espontaneidad frente a velocidad: por qué la enzima acelera pero no vuelve
  espontánea una reacción; el ejemplo del ácido carbónico y el factor 10⁷.
- El ATP como moneda energética: el almidón y el glucógeno, las ATPasas, el
  tiritar, los 40 kg de ATP al día; la fosforilación con cinasas y fosfatasas.
- Los catalizadores y la energía de activación.
- La velocidad de reacción y por qué la célula no puede simplemente calentarse;
  cómo bajan las enzimas la energía de activación.
- El sitio activo y el sustrato; el paso del modelo llave-cerradura de Fischer
  al ajuste inducido; el complejo enzima-sustrato y el ciclo catalítico.
- Las isoenzimas y la LDH con sus cinco formas.
- Los cofactores y las coenzimas: el ion magnesio, el NAD, y cómo se unen a la
  enzima; las vías enzimáticas y los complejos multienzimáticos.
- El ajuste inducido paso a paso (figura 7-10, la sacarasa); la regulación
  enzimática y la multimodulación; los efectos de la temperatura (los 10 °C, los
  40 °C, la desnaturalización, las bacterias termófilas) y del pH.
- Las enzimas del lisosoma y su pH ácido; la curva de la temperatura (figura
  7-11); y la inhibición enzimática completa: competitiva —con el ejemplo del
  PABA y la sulfanilamida— y no competitiva, con la cisteína y el plomo.

**Pendiente:** del capítulo 7, las páginas impresas 141 a 144 — la regulación
alostérica y lo que siga hasta el cierre del capítulo; queda por decidir el
apartado "Biología en contexto social" de las páginas 125–126. De la materia
siguen sin empezar los capítulos 8, 11, 12, 31, 32, 35, 36 y 37.

> **Ojo al escribir aquí:** el generador de `ESTADO.md` busca la cadena exacta
> `**Pendiente:**` y se queda con el párrafo que le sigue hasta el primer renglón
> en blanco. Si se parte en viñetas o se le cambia el nombre, `ESTADO.md` da el
> archivo por **no declarado** y cuenta la materia como cerrada. Ya pasó el 22 jul
> 2026 en el capítulo 5.

## Erratas del libro · capítulo 7

| Pág. | Dice | Debe decir |
|---|---|---|
| 133 | "el ATP (**adenonsín** trifosfato)" | "adenosín trifosfato" — sobra una **n**. El propio libro escribe bien "adenosín difosfato" dos líneas después, para el ADP |

Verificada con `render.py` sobre la hoja 179; no es suciedad de la capa de texto.
**No se escribe reactivo sobre el nombre completo del ATP** — el reactivo 92
pregunta la transformación, no el nombre.

## Rarezas de redacción del libro

| Pág. | Qué pasa |
|---|---|
| 126 | "…se transforma, por medio de una serie de procesos que ocurren **dando lugar** a las células de las plantas y otros organismos fotosintéticos, **dando lugar** a la energía que impulsa todos los procesos vitales." La repetición está **en el libro** — verificada con `render.py` sobre la hoja 172, no es de la extracción. No se cita esa frase entera; el reactivo 3 sólo toma el tramo limpio. |

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
dato suelto (cifra, fecha, porcentaje) lleva la referencia en redacción natural:
*"…en el capítulo 7 sobre el metabolismo, ¿…?"*. El que ya nombra su concepto
queda limpio. El reparto lo hace `tools/especificar-reactivos.js` con
`--tema "el metabolismo"`.

---

## Sub-lote 1 · La energía y el metabolismo (p. 126)

### 1

De acuerdo con el libro de Biología, ¿de qué depende la vida?

- A. Del flujo de energía procedente de las reacciones termonucleares que tienen lugar en el núcleo del sol
- B. Del flujo de calor procedente del interior de la Tierra
- C. De la energía almacenada en los océanos
- D. De la energía eléctrica generada por las tormentas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · energía y vida

La vida depende del flujo de energía procedente de las reacciones termonucleares que tienen lugar en el núcleo del sol.

### 2

De conformidad con el libro de Biología, ¿cómo puede entenderse una célula?

- A. Como un complejo de sistemas especializados en transformar energía
- B. Como un depósito cerrado de sustancias químicas
- C. Como una máquina que crea energía a partir de la nada
- D. Como una estructura que sólo almacena información genética

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · energía y vida

Una célula puede entenderse como un complejo de sistemas especializados en transformar energía.

### 3

En relación con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿qué fracción de la energía solar que llega a nuestro planeta se transforma por medio de los organismos fotosintéticos?

- A. Menos del 1%
- B. Menos del 10%
- C. Alrededor del 30%
- D. Más de la mitad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · energía y vida

Una pequeña fracción –menos del 1%– de la energía solar que llega a nuestro planeta se transforma.

> Cita recortada a propósito. La frase completa del libro repite "dando lugar a"
> dos veces y queda mal armada; está anotada en el encabezado. El dato —menos del
> 1%— es correcto y es lo que se pregunta.

### 4

De acuerdo con el libro de Biología, ¿qué es el flujo de energía para la vida?

- A. El motor de la vida
- B. Un producto secundario del metabolismo
- C. Una consecuencia de la división celular
- D. Un fenómeno exclusivo de los organismos fotosintéticos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · energía y vida

Este flujo de energía es el motor de la vida.

### 5

De conformidad con el libro de Biología, ¿qué nombre recibe en su conjunto el millar de reacciones químicas mediante las cuales se llevan a cabo las funciones vitales?

- A. Metabolismo
- B. Homeostasis
- C. Termodinámica
- D. Bioluminiscencia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · definición

En los organismos vivos, las funciones vitales se llevan a cabo a través de procesos que involucran millares de reacciones químicas. Estos procesos, en su conjunto, reciben el nombre de metabolismo.

### 6

En relación con el libro de Biología, ¿de dónde proviene la denominación de la palabra "energía"?

- A. Del griego *en*, dentro, y *ergon*, acción, trabajo
- B. Del griego *therme*, calor, y *dynamis*, poder
- C. Del latín *energia*, fuerza vital
- D. Del griego *bios*, vida, y *ergon*, trabajo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · energía

Su denominación proviene del griego: *en*, dentro y *ergon*, acción, trabajo.

> El distractor B es la etimología de **termodinámica**, que el libro da dos
> páginas después. Son las dos etimologías del capítulo y se confunden.

---

## Sub-lote 2 · Las transformaciones energéticas en los seres vivos (pp. 126–127)

### 7

De acuerdo con el libro de Biología, ¿por qué las formas energéticas pueden ser interconvertidas casi sin restricciones?

- A. Porque sólo se requiere un medio o dispositivo físico adecuado para producir esa conversión
- B. Porque todas las formas de energía son en realidad calor
- C. Porque la energía se crea y se destruye continuamente
- D. Porque las conversiones ocurren sin pérdida alguna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · transformaciones energéticas

Si bien se presentan de maneras muy diferentes, estas formas energéticas pueden ser interconvertidas casi sin restricciones; solo se requiere un medio o dispositivo físico adecuado para producir esa conversión.

### 8

De conformidad con el libro de Biología, dentro de las células de los organismos vivos, ¿qué suelen ser en su mayoría los dispositivos que permiten las transformaciones entre los distintos tipos de energía?

- A. Proteínas
- B. Hidratos de carbono
- C. Fosfolípidos
- D. Ácidos nucleicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 126
**Subtema:** Metabolismo · transformaciones energéticas

En estos casos, los dispositivos que permiten las transformaciones entre los distintos tipos de energía en su mayoría suelen ser proteínas.

### 9

En relación con el libro de Biología, ¿qué transformación de energía realizan las células especializadas de las luciérnagas?

- A. Convierten la energía química en energía lumínica
- B. Convierten la energía lumínica en energía química
- C. Convierten la energía lumínica en energía eléctrica
- D. Convierten la energía química en energía mecánica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · transformaciones energéticas

Las luciérnagas tienen células especializadas en las que la energía química, por medio de ciertas proteínas, se convierte en energía lumínica.

### 10

De acuerdo con el libro de Biología, ¿cómo se llama el fenómeno que presentan las luciérnagas y algunos organismos unicelulares como los dinoflagelados?

- A. Bioluminiscencia
- B. Fotosíntesis
- C. Fosforescencia
- D. Fotorrecepción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · bioluminiscencia

Algunos organismos unicelulares, como los dinoflagelados también presentan este fenómeno llamado bioluminiscencia.

### 11

De conformidad con el libro de Biología, ¿a qué conversión de energía está ligado el fenómeno de la visión?

- A. A la conversión de energía lumínica en energía eléctrica
- B. A la conversión de energía química en energía lumínica
- C. A la conversión de energía lumínica en energía química
- D. A la conversión de energía mecánica en energía térmica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · transformaciones energéticas

Por otro lado, el fenómeno de la visión está ligado a la conversión de energía lumínica en energía eléctrica.

### 12

En relación con el libro de Biología, ¿qué son los fotopigmentos que sintetizan los conos y bastones de la retina?

- A. Moléculas sensibles a la energía luminosa que la transforman en un impulso bioeléctrico
- B. Proteínas que transportan oxígeno hasta la retina
- C. Enzimas que degradan la luz en calor
- D. Lípidos que forman la membrana de las células fotorreceptoras

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · transformaciones energéticas

En la retina, las células fotorreceptoras (conos y bastones) son capaces de sintetizar fotopigmentos, moléculas sensibles a la energía luminosa que la transforman en un impulso bioeléctrico.

### 13

De acuerdo con el libro de Biología, ¿en qué convierten la energía lumínica ciertos fotopigmentos de las células vegetales?

- A. En energía química, que será utilizada para la biosíntesis de azúcares a partir de dióxido de carbono
- B. En energía eléctrica, que será utilizada para el impulso nervioso
- C. En energía lumínica de otro color
- D. En energía mecánica, que moverá los cloroplastos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · transformaciones energéticas

En las células vegetales, ciertos fotopigmentos convierten la energía lumínica en energía química, que será utilizada para la biosíntesis de azúcares a partir de dióxido de carbono.

> Los tres fotopigmentos del capítulo, que se prestan a mezclarse: en la
> **retina** convierten luz en **electricidad**; en las **células vegetales**,
> luz en **energía química**; y en las **luciérnagas** el camino va al revés, de
> química a **luz**.

---

## Sub-lote 3 · La termodinámica y el experimento de Joule (p. 127)

### 14

De conformidad con el libro de Biología, ¿qué es la termodinámica y de dónde viene su nombre?

- A. La ciencia que estudia las transformaciones de la energía; del griego *therme*, calor, y *dynamis*, poder
- B. La ciencia que estudia el movimiento de los cuerpos; del griego *dynamis*, poder, y *bios*, vida
- C. La ciencia que estudia las reacciones químicas del organismo; del griego *en*, dentro, y *ergon*, trabajo
- D. La ciencia que estudia la luz y sus efectos; del griego *photos*, luz, y *therme*, calor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · termodinámica

Así se fue conformando la termodinámica (del griego *therme*, calor, *dynamis*, poder), ciencia que estudia las transformaciones de la energía.

### 15

En relación con el libro de Biología, ¿qué permitieron establecer de manera inequívoca los trabajos del físico inglés James Joule?

- A. La equivalencia entre el trabajo mecánico y el calor
- B. La equivalencia entre la masa y la energía
- C. La conversión de la luz en electricidad
- D. La existencia de la energía nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · termodinámica

Los trabajos del físico inglés James Joule (1818-1889) realizados en Gran Bretaña y publicados en 1850 llevaron a establecer, de manera inequívoca, la equivalencia entre el trabajo mecánico y el calor.

### 16

De acuerdo con el libro de Biología, ¿qué es un sistema aislado de su exterior?

- A. Aquel que no intercambia materia ni energía con el ambiente
- B. Aquel que intercambia libremente materia y energía con su entorno
- C. Aquel que intercambia energía pero no materia
- D. Aquel que intercambia materia pero no energía

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 127
**Subtema:** Metabolismo · termodinámica

Los experimentos realizados por Joule permitieron concluir que cuando a un sistema aislado de su exterior, es decir, que no intercambia materia ni energía con el ambiente, se le suministra trabajo mecánico, sin importar la forma en que se haga, se obtiene una cantidad equivalente de energía térmica.

---

## Sub-lote 4 · La primera ley de la termodinámica (p. 128)

### 17

De conformidad con el libro de Biología, ¿cómo se enuncia la primera ley de la termodinámica?

- A. La energía del Universo permanece constante
- B. La energía del Universo aumenta sin cesar
- C. La energía del Universo tiende a concentrarse
- D. La energía del Universo se destruye al usarse

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 128
**Subtema:** Metabolismo · primera ley de la termodinámica

La energía del Universo permanece constante.

### 18

En relación con el libro de Biología, ¿qué significa la primera ley de la termodinámica?

- A. Que la energía no se destruye ni se crea, sólo puede transformarse de una forma a otra
- B. Que la energía se crea continuamente en el interior de las estrellas
- C. Que la energía se destruye cada vez que se realiza un trabajo
- D. Que la energía sólo existe en forma de calor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 128
**Subtema:** Metabolismo · primera ley de la termodinámica

Esto significa que la energía no se destruye ni se crea, solo puede transformarse de una forma a otra.

### 19

De acuerdo con el libro de Biología, ¿en qué se diferencian los sistemas biológicos del aparato diseñado por Joule?

- A. En que son abiertos, es decir, que pueden intercambiar libremente materia y energía con su entorno
- B. En que son aislados y no intercambian nada con su entorno
- C. En que no cumplen el principio de conservación de la energía
- D. En que crean energía a partir de la materia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 128
**Subtema:** Metabolismo · primera ley de la termodinámica

A diferencia del aparato diseñado por Joule, los sistemas biológicos son abiertos, es decir, que pueden intercambiar libremente materia y energía con su entorno.

### 20

De conformidad con el libro de Biología, en un organismo vivo, ¿qué relación hay entre la energía que pierde y la que gana su entorno?

- A. La energía perdida o disipada por él es igual a la ganada por su entorno, y viceversa
- B. La energía perdida por él es siempre mayor que la ganada por su entorno
- C. La energía perdida por él es siempre menor que la ganada por su entorno
- D. No hay relación, porque el organismo es un sistema aislado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 128
**Subtema:** Metabolismo · primera ley de la termodinámica

En un organismo vivo, la energía perdida o disipada por él es igual a la ganada por su entorno (ambiente) y viceversa.

> Aun siendo **abiertos**, los sistemas vivos **siguen cumpliendo** el principio
> de conservación de la energía. Lo que cambia es dónde se ponen los límites del
> sistema que se estudia.

---

## Sub-lote 5 · La entropía y el castillo de naipes (p. 129)

### 21

En relación con el libro de Biología, ¿quién formalizó la ecuación de la energía disipada al estudiar su importante papel?

- A. El físico alemán Rudolf Clausius
- B. El físico inglés James Joule
- C. El físico austríaco Edwin Schrödinger
- D. El químico francés Antoine-Laurent Lavoisier

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

En la década de 1850, el físico alemán Rudolf Clausius (1822-1888) formalizó esta ecuación al estudiar el importante papel de esa energía inevitablemente disipada.

### 22

De acuerdo con el libro de Biología, ¿de dónde viene la palabra "entropía" y con qué letra se la simboliza?

- A. Del griego *tropos*, que significa cambio, transformación; se la simboliza con la letra S
- B. Del griego *therme*, que significa calor; se la simboliza con la letra T
- C. Del griego *ergon*, que significa trabajo; se la simboliza con la letra E
- D. Del griego *dynamis*, que significa poder; se la simboliza con la letra D

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

Expresó esta fracción energética como el producto de la temperatura (T) a través de un factor al que llamó entropía (del griego *tropos*, que significa cambio, transformación) y lo simbolizó con la letra S.

### 23

De conformidad con el libro de Biología, ¿cómo se expresa la energía disipada?

- A. Energía disipada = T × S
- B. Energía disipada = T + S
- C. Energía disipada = S ÷ T
- D. Energía disipada = energía total + T × S

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

Energía disipada = T × S.

### 24

En relación con el libro de Biología, ¿cuál es el estado más probable de un sistema?

- A. La condición de equilibrio
- B. La condición de máxima organización
- C. La condición de mayor energía útil disponible
- D. La condición de mayor heterogeneidad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

La condición de equilibrio es el estado más probable de un sistema.

### 25

De acuerdo con el libro de Biología, desde el punto de vista de la energía gravitacional de sus componentes, ¿cómo es el estado o configuración del castillo de naipes?

- A. Más ordenado, menos probable y menos uniforme
- B. Más ordenado, más probable y más uniforme
- C. Más desordenado, menos probable y más uniforme
- D. Más desordenado, más probable y menos uniforme

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

Desde el punto de vista de la energía gravitacional de sus componentes, el estado o configuración del castillo es más ordenado, menos probable y menos uniforme.

### 26

De conformidad con el libro de Biología, ¿qué ocurre en el estado final de equilibrio?

- A. Las heterogeneidades iniciales desaparecen, y el sistema se homogeneiza y pierde información
- B. Las heterogeneidades iniciales aumentan, y el sistema gana información
- C. El sistema recupera su configuración inicial
- D. La entropía del sistema desciende hasta un mínimo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

En el estado final de equilibrio, las heterogeneidades iniciales desaparecen y el sistema se homogeneiza y pierde información.

### 27

En relación con el libro de Biología, ¿cuál es el estado más probable de un sistema, en términos de orden?

- A. El de mayor desorden, o bien de mayor entropía
- B. El de mayor orden, o bien de menor entropía
- C. El de mayor información almacenada
- D. El de mayor energía útil disponible

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · entropía

Así, el estado más probable es el de mayor desorden o bien de mayor entropía.

> El castillo de naipes es el ejemplo con el que el libro explica todo: sin un
> ingreso constante de energía, se derrumba. **Ordenado = improbable**;
> **desordenado = probable**. Y hacia lo probable es hacia donde van solos los
> sistemas.

---

## Sub-lote 6 · La segunda ley de la termodinámica (p. 129)

> **Ésta es la sección que cita el Anexo "H"** de la convocatoria, con la
> página 129 declarada. El reactivo 31 reproduce el enunciado exactamente como
> lo trae el libro, que coincide palabra por palabra con el ejemplo oficial.

### 28

De acuerdo con el libro de Biología, ¿cómo ocurren gran parte de los procesos que se dan en la naturaleza?

- A. En forma espontánea y siempre en una dirección, nunca en la inversa
- B. En forma espontánea y en las dos direcciones por igual
- C. Sólo cuando un agente externo los provoca
- D. En forma espontánea, pero siempre reversible

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

Al analizar los procesos que ocurren en la naturaleza, nuestra experiencia nos muestra que gran parte de ellos ocurren en forma espontánea y siempre en una dirección, nunca en la inversa.

### 29

De conformidad con el libro de Biología, ¿qué ejemplos da de procesos que ocurren siempre en una sola dirección?

- A. Una roca sólo rodará cuesta abajo, el calor sólo fluirá de un objeto caliente a uno frío, y una pelota que se dejó caer nunca llegará hasta la misma altura desde la que cayó
- B. El agua sólo hierve al calentarse, el hielo sólo se derrite y el vapor sólo se condensa
- C. Las plantas sólo crecen hacia la luz y las raíces sólo hacia el agua
- D. La sangre sólo circula en un sentido y el aire sólo entra por la nariz

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

Una roca solo rodará cuesta abajo, el calor solo fluirá de un objeto caliente a uno frío, una pelota que se dejó caer rebotará, pero nunca llegará hasta la misma altura desde la que cayó.

### 30

En relación con el libro de Biología, ¿qué es necesario para que ocurran los procesos que transforman energía?

- A. Que existan desniveles o gradientes, que son la fuente de las fuerzas que conducen esos procesos
- B. Que el sistema se encuentre en estado de equilibrio
- C. Que la entropía del sistema haya alcanzado un máximo
- D. Que el sistema esté completamente homogeneizado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

Para que los procesos que transforman energía ocurran es necesario que existan desniveles o gradientes que son la fuente de las fuerzas que conducen procesos con transformaciones energéticas asociadas.

### 31

De acuerdo con el libro de Biología, ¿qué establece la segunda ley de la termodinámica?

- A. Que existe una dirección hacia la cual cualquier sistema fuera del equilibrio tiende a desplazarse
- B. Que la energía del Universo permanece constante
- C. Que la energía no se destruye ni se crea, sólo se transforma
- D. Que todo sistema tiende a aumentar su energía útil

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

La segunda ley de la termodinámica establece que existe una dirección hacia la cual cualquier sistema fuera del equilibrio tiende a desplazarse.

> **Reactivo clave.** Es el ejemplo de Biología del Anexo "H" de la convocatoria,
> que declara esta misma página 129. Los distractores B y C son la **primera**
> ley, que es justo con lo que se confunde.

### 32

De conformidad con el libro de Biología, ¿qué ocurre cuando toda la energía útil se haya disipado?

- A. No podrán ocurrir más procesos en el sistema
- B. El sistema recuperará su configuración inicial
- C. La entropía del sistema comenzará a disminuir
- D. El sistema empezará a generar energía por sí mismo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

Al hacerlo, se disipa energía. Cuando toda la energía útil se haya disipado, no podrán ocurrir más procesos en el sistema.

### 33

En relación con el libro de Biología, ¿cómo se expresa la energía útil?

- A. Energía útil = energía total – T × S
- B. Energía útil = energía total + T × S
- C. Energía útil = energía total × T × S
- D. Energía útil = T × S – energía total

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

Energía útil = energía total – T × S.

### 34

De acuerdo con el libro de Biología, ¿de qué se compone la energía total liberada?

- A. De energía útil más calor
- B. De energía útil menos calor
- C. De calor únicamente
- D. De energía útil únicamente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · segunda ley de la termodinámica

Energía total liberada = energía útil + calor.

---

## Sub-lote 7 · Los procesos espontáneos y los dos principios (pp. 129–130)

### 35

De conformidad con el libro de Biología, ¿por qué ocurren los procesos internos considerados espontáneos en un sistema aislado?

- A. Porque en el sistema existen heterogeneidades
- B. Porque agentes externos al sistema los provocan
- C. Porque el sistema ya alcanzó el equilibrio
- D. Porque la entropía del sistema es mínima

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · procesos espontáneos

En cualquier sistema aislado, los procesos no serán causados por agentes externos a él. Estos procesos internos, que serán considerados espontáneos, ocurren porque en el sistema existen heterogeneidades.

### 36

En relación con el libro de Biología, ¿qué ocurre si una porción del sistema tiene una mayor temperatura que el resto?

- A. El calor fluirá hasta que todo el sistema tenga una temperatura uniforme
- B. El calor se concentrará aún más en esa porción
- C. El sistema mantendrá la diferencia de temperatura indefinidamente
- D. La porción caliente se separará del resto del sistema

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 129
**Subtema:** Metabolismo · procesos espontáneos

Si una porción o parte del sistema tiene una mayor temperatura que el resto, el calor fluirá hasta que todo el sistema tenga una temperatura uniforme.

### 37

De acuerdo con el libro de Biología, ¿qué permite predecir la entropía en los sistemas aislados?

- A. La dirección de los procesos espontáneos
- B. La cantidad total de materia del sistema
- C. La velocidad exacta de cada reacción química
- D. El momento preciso en que el sistema se creó

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · procesos espontáneos

Así, en los sistemas aislados, la entropía nos permite predecir la dirección de los procesos espontáneos.

### 38

De conformidad con el libro de Biología, ¿cómo se enuncian los dos principios fundamentales de la termodinámica?

- A. Primera ley: la energía del Universo es constante. Segunda ley: la entropía del Universo tiende a un máximo
- B. Primera ley: la entropía del Universo es constante. Segunda ley: la energía del Universo tiende a un máximo
- C. Primera ley: la energía del Universo tiende a un mínimo. Segunda ley: la entropía del Universo es constante
- D. Primera ley: la energía del Universo aumenta. Segunda ley: la entropía del Universo disminuye

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · las dos leyes

Primera ley: la energía del Universo es constante. Segunda ley: la entropía del Universo tiende a un máximo.

> Las dos leyes enunciadas juntas, tal como el libro las resume. **Energía:
> constante. Entropía: hacia el máximo.** El distractor B las intercambia, que es
> el error más común.

---

## Sub-lote 8 · Los sistemas vivos y la segunda ley (pp. 130)

### 39

En relación con el libro de Biología, ¿cómo son los organismos vivos como estructuras?

- A. Complejas, en extremo ordenadas, claramente diferenciadas de su entorno, dotadas de información y alejadas por completo del estado de equilibrio
- B. Simples, homogéneas y en permanente estado de equilibrio con su entorno
- C. Complejas, pero indistinguibles de su entorno y sin información propia
- D. Ordenadas, pero incapaces de intercambiar materia con el ambiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · los sistemas vivos y la entropía

Los organismos vivos son estructuras complejas, en extremo ordenadas, claramente diferenciadas de su entorno, dotadas de información y alejadas por completo del estado de equilibrio.

### 40

De acuerdo con el libro de Biología, ¿qué proponían los biólogos sobre la historia de la vida?

- A. Que la materia se había ido autoorganizando de forma espontánea y progresiva, formando primero células simples y luego organismos pluricelulares
- B. Que la materia viva se había ido desorganizando de forma progresiva
- C. Que los organismos complejos aparecieron antes que las células simples
- D. Que la vida se mantuvo sin cambios desde su origen

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · los sistemas vivos y la entropía

Los biólogos presentaron la historia de la vida, proponiendo que la materia se había ido autoorganizando de forma espontánea y progresiva, formando primero células simples, luego organismos pluricelulares.

### 41

De conformidad con el libro de Biología, ¿qué hicieron los físicos de la época ante esa controversia?

- A. Restringieron la aplicación de las leyes de la termodinámica al comportamiento de los sistemas materiales inanimados
- B. Abandonaron las leyes de la termodinámica por considerarlas erróneas
- C. Negaron que los organismos vivos estuvieran ordenados
- D. Extendieron las leyes de la termodinámica también a los sistemas vivos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · los sistemas vivos y la entropía

Fue así como los físicos de la época restringieron la aplicación de las leyes de la termodinámica al comportamiento de los sistemas materiales inanimados.

### 42

En relación con el libro de Biología, ¿en qué libro intentó Edwin Schrödinger agrupar conceptos fundamentales de la física, la química y la biología?

- A. *¿Qué es la vida?*, de 1944
- B. *Micrographia*, de 1665
- C. *Historia de la Creación*, de 1868
- D. *El origen de las especies*, de 1859

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · los sistemas vivos y la entropía

En un pequeño libro titulado *¿Qué es la vida?* (1944), Schrödinger intentó agrupar conceptos fundamentales de la física, la química y la biología.

### 43

De acuerdo con el libro de Biología, ¿qué dos procesos esenciales hizo notar Schrödinger que conviven en los organismos vivos?

- A. La generación de "orden a partir de desorden" y la generación de orden a partir de orden
- B. La generación de "desorden a partir de orden" y la de desorden a partir de desorden
- C. La conservación de la energía y la conservación de la materia
- D. La respiración celular y la fotosíntesis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 130
**Subtema:** Metabolismo · los sistemas vivos y la entropía

Hizo notar que en los organismos vivos conviven dos procesos esenciales: la generación de "orden a partir de desorden" –que se basa e innova en las leyes de la termodinámica– y la generación de orden a partir de orden.

---

## Sub-lote 9 · El sistema biológico y su entorno (p. 131)

### 44

De conformidad con el libro de Biología, ¿qué devuelven las células a su entorno durante los procesos que mantienen su organización interna?

- A. Energía disipada que consiste en calor y otras formas, aumentando el desorden y la entropía del ambiente
- B. Energía útil que el ambiente vuelve a aprovechar íntegramente
- C. Únicamente materia, sin ninguna forma de energía
- D. Información genética que se dispersa en el medio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · el sistema biológico y su entorno

Durante estos procesos, las células devuelven a su entorno energía disipada que consiste en calor y otras formas que rápidamente se distribuyen en el ambiente, aumentando su desorden y entropía.

### 45

En relación con el libro de Biología, ¿por qué el segundo principio de la termodinámica también se cumple en el caso de los sistemas biológicos?

- A. Porque la entropía del conjunto, organismo vivo más entorno, está en permanente aumento
- B. Porque la entropía del organismo vivo por sí sola está en permanente aumento
- C. Porque los organismos vivos son sistemas aislados
- D. Porque los organismos vivos no disipan energía

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · el sistema biológico y su entorno

De esta forma, el segundo principio de la termodinámica también se cumple en el caso de los sistemas biológicos, dado que la entropía del conjunto (organismo vivo + entorno) está en permanente aumento.

### 46

De acuerdo con el libro de Biología, ¿cómo debe considerarse el sistema biológico para comprender sus balances energéticos?

- A. En conjunto con su entorno
- B. Por separado de su entorno
- C. Como un sistema completamente aislado
- D. Como un sistema en equilibrio permanente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · el sistema biológico y su entorno

El sistema biológico debe considerarse en conjunto con su entorno.

### 47

De conformidad con el libro de Biología, ¿cómo consiguen los organismos vivos ganar orden interno?

- A. A expensas de generar desorden en su ambiente
- B. A expensas de reducir el desorden de su ambiente
- C. Sin ningún efecto sobre el desorden de su ambiente
- D. Creando energía nueva dentro de sus células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · el sistema biológico y su entorno

Así, los organismos vivos consiguen ganar orden interno a expensas de generar desorden en su ambiente.

> Ésta es la respuesta del libro a la gran objeción: el ser vivo **sí** se ordena,
> pero **desordena más el ambiente**. La cuenta se cierra mirando el conjunto, no
> el organismo solo.

### 48

En relación con el libro de Biología, ¿cómo se mantiene vivo un sistema biológico en su estado organizado?

- A. Tomando energía del ambiente y procesándola a través de su sistema de reacciones metabólicas
- B. Conservando indefinidamente la energía con la que se formó
- C. Impidiendo todo intercambio de energía con el ambiente
- D. Alcanzando el equilibrio con su entorno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · el sistema biológico y su entorno

Un sistema biológico se mantiene vivo en su estado organizado, tomando energía del ambiente y procesándola a través de su sistema de reacciones metabólicas.

---

## Sub-lote 10 · Equilibrio y estado estacionario (p. 131)

### 49

De acuerdo con el libro de Biología, ¿en qué se diferencian un sistema en equilibrio y un sistema estacionario?

- A. El que está en equilibrio mantiene su constancia por la ausencia de procesos; el estacionario se mantiene porque existen procesos balanceados
- B. El que está en equilibrio se mantiene por procesos balanceados; el estacionario, por la ausencia de procesos
- C. Los dos se mantienen por la ausencia de procesos, y sólo cambian de nombre
- D. Los dos se mantienen por procesos balanceados, y sólo cambian de nombre

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · estado estacionario

Mientras que un sistema en equilibrio mantiene su constancia por la ausencia de procesos, un sistema estacionario se mantiene porque existen procesos balanceados.

> Los dos se ven quietos desde fuera, y ahí está la trampa: el **equilibrio** está
> quieto porque **no pasa nada**; el **estacionario**, porque pasan muchas cosas
> que **se compensan**. La célula viva es lo segundo.

### 50

De conformidad con el libro de Biología, ¿quién fue la figura más trascendente que retomó las ideas de Schrödinger?

- A. El físico ruso-belga Ilya Prigogine
- B. El físico alemán Rudolf Clausius
- C. El físico inglés James Joule
- D. El matemático norteamericano J. W. Gibbs

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · estado estacionario

La figura más trascendente que retomó las ideas de Schrödinger fue el físico ruso-belga Ilya Prigogine (1917-2003).

### 51

En relación con el libro de Biología, ¿qué termodinámica desarrolló Prigogine?

- A. Una termodinámica aplicable a los procesos que están ocurriendo lejos del equilibrio, conocida como termodinámica de procesos irreversibles
- B. Una termodinámica aplicable sólo a los sistemas en equilibrio
- C. Una termodinámica aplicable únicamente a las máquinas térmicas
- D. Una termodinámica que niega la validez de la segunda ley

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · estado estacionario

Ilya Prigogine (1917-2003), quien desarrolló una termodinámica aplicable a aquellos procesos que están ocurriendo lejos del equilibrio (conocida como termodinámica de procesos irreversibles).

### 52

De acuerdo con el libro de Biología, ¿qué demostró Prigogine sobre los sistemas caóticos?

- A. Que lejos del equilibrio un sistema caótico puede autoorganizarse
- B. Que cerca del equilibrio un sistema caótico puede autoorganizarse
- C. Que un sistema caótico nunca puede autoorganizarse
- D. Que un sistema caótico sólo se organiza si un agente externo lo ordena

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · estado estacionario

Demostró que lejos del equilibrio un sistema caótico puede autoorganizarse.

### 53

De conformidad con el libro de Biología, ¿qué premio obtuvo Prigogine por sus trabajos y en qué año?

- A. El Premio Nobel de química, en 1977
- B. El Premio Nobel de física, en 1977
- C. El Premio Nobel de química, en 1944
- D. El Premio Nobel de medicina, en 1961

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · estado estacionario

Con la termodinámica de procesos irreversibles, Prigogine formalizó el concepto "orden a partir de desorden" y por sus trabajos obtuvo el Premio Nobel de química en 1977.

---

## Sub-lote 11 · El orden a partir de orden (p. 131)

### 54

En relación con el libro de Biología, ¿qué intenta explicar Schrödinger con la expresión "orden a partir de orden"?

- A. La capacidad de los organismos de producir réplicas de sí mismos e incluso de generar variaciones heredables
- B. La capacidad de los organismos de disipar calor hacia el ambiente
- C. La tendencia de todo sistema a alcanzar el equilibrio
- D. La formación espontánea de gradientes dentro del citosol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · orden a partir de orden

Con la expresión "orden a partir de orden", Schrödinger intenta explicar la capacidad de los organismos de producir réplicas de sí mismos e incluso de generar variaciones heredables.

### 55

De acuerdo con el libro de Biología, ¿por qué creía Schrödinger que estaba regido el gran orden que reina en la materia viva?

- A. Por información almacenada en un "microcódigo"
- B. Por una fuerza vital ajena a la física y la química
- C. Por el equilibrio térmico con el ambiente
- D. Por la disipación constante de energía

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · orden a partir de orden

Schrödinger creía que el gran orden que reina en la materia viva estaba regido por información almacenada en un "microcódigo".

### 56

De conformidad con el libro de Biología, ¿qué suponía Schrödinger que era el sustrato físico capaz de almacenar esa información?

- A. Algún tipo de cristal aperiódico
- B. Una membrana de fosfolípidos
- C. Una proteína globular
- D. Un cristal perfectamente periódico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · orden a partir de orden

Suponía que algún tipo de cristal aperiódico era el sustrato físico que permitía almacenar esa información y sobre el que podían tallarse las pequeñas variaciones que posteriormente resultarían heredables.

### 57

En relación con el libro de Biología, ¿quiénes describieron una década más tarde la macromolécula que reunía muchas de las condiciones anticipadas por Schrödinger?

- A. Watson y Crick, con la estructura del ADN
- B. Till y McCulloch, con la célula troncal
- C. Schleiden y Schwann, con la teoría celular
- D. Singer y Nicolson, con el mosaico fluido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · orden a partir de orden

Una década más tarde, Watson y Crick describieron la estructura del ADN, una macromolécula que reúne muchas de las condiciones anticipadas por Schrödinger, necesarias para almacenar la información genética.

---

## Sub-lote 12 · Las heterogeneidades de la célula (p. 131)

### 58

De acuerdo con el libro de Biología, ¿qué son las heterogeneidades en las células vivas?

- A. La norma
- B. La excepción
- C. Un signo de daño celular
- D. Un estado transitorio previo al equilibrio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · las heterogeneidades de la célula

En las células vivas, las heterogeneidades son la norma.

### 59

De conformidad con el libro de Biología, ¿qué tipos de gradientes o potenciales se forman a través de las membranas?

- A. Químicos, quimiosmóticos y electroquímicos
- B. Térmicos, gravitacionales y mecánicos
- C. Lumínicos, sonoros y magnéticos
- D. Nucleares, eléctricos y radiantes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · las heterogeneidades de la célula

A través de las membranas se forman diferentes tipos de gradientes o potenciales (químicos, quimiosmóticos, electroquímicos, etc.), cada uno de ellos está constituido por diferencias en las concentraciones de moléculas específicas a uno y otro lado de las membranas.

### 60

En relación con el libro de Biología, ¿hace falta una membrana biológica para definir un compartimento?

- A. No; no necesariamente debe existir una membrana biológica
- B. Sí; sin membrana biológica no hay compartimento posible
- C. Sí, pero sólo en las células vegetales
- D. Sí, pero sólo en las células procariontes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · las heterogeneidades de la célula

Pero, para definir un compartimento, no necesariamente debe existir una membrana biológica.

### 61

De acuerdo con el libro de Biología, ¿cómo debe considerarse el citosol celular?

- A. No como un medio acuoso simple, sino más bien como un gel, por lo que la difusión tiene restricciones
- B. Como un medio acuoso simple, en el que la difusión es libre
- C. Como un medio sólido en el que no hay difusión alguna
- D. Como un medio gaseoso de baja densidad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · las heterogeneidades de la célula

Recuérdese que el citosol celular no debe considerarse un medio acuoso simple, es más bien un gel y, por lo tanto, la difusión tiene restricciones.

### 62

De conformidad con el libro de Biología, ¿qué significaría para la célula la disipación de sus gradientes, potenciales y desequilibrios?

- A. El equilibrio con el ambiente y la consecuente muerte celular
- B. Un aumento de su eficiencia metabólica
- C. El paso a un estado estacionario más estable
- D. La ganancia de información y de orden interno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 131
**Subtema:** Metabolismo · las heterogeneidades de la célula

Estos gradientes, potenciales y desequilibrios, son las fuerzas que operan en una gran cantidad de funciones vitales de las células. Por lo tanto, para estas es crucial mantenerlos. Su disipación significaría el equilibrio con el ambiente y la consecuente muerte celular.

> La frase que cierra el argumento del capítulo, y la más fuerte para el
> aspirante: para una célula, **llegar al equilibrio es morirse**. Estar viva es
> justamente estar lejos del equilibrio.

---

## Sub-lote 13 · La entalpía (p. 132)

### 63

En relación con el libro de Biología, ¿qué sufren las especies participantes durante las reacciones químicas?

- A. Reordenamientos de sus configuraciones electrónicas
- B. Cambios en el número de protones de sus núcleos
- C. La pérdida completa de su estructura molecular
- D. Un aumento invariable de su temperatura

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Durante las reacciones químicas, las especies participantes sufren reordenamientos de sus configuraciones electrónicas.

### 64

De acuerdo con el libro de Biología, ¿cómo se llaman las reacciones en las que las especies sufren pérdida o ganancia neta en su contenido de electrones?

- A. Reacciones de oxidorreducción
- B. Reacciones exotérmicas
- C. Reacciones endotérmicas
- D. Reacciones de condensación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Incluso, pueden sufrir pérdida o ganancia neta en su contenido de electrones –reacciones de oxidorreducción–.

### 65

De conformidad con el libro de Biología, ¿qué nombre recibe la cantidad de energía puesta en juego por las reacciones químicas a presión constante, de dónde viene esa palabra y con qué letra se simboliza?

- A. Entalpía, del griego *enthalpien*, que significa calentar; se simboliza con la letra H
- B. Entropía, del griego *tropos*, que significa cambio; se simboliza con la letra S
- C. Entalpía, del griego *therme*, que significa calor; se simboliza con la letra T
- D. Energía libre, del griego *ergon*, que significa trabajo; se simboliza con la letra G

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

La cantidad de energía puesta en juego por las reacciones químicas en estas condiciones recibe el nombre de entalpía (del griego *enthalpien*, que significa calentar). La entalpía se simboliza con la letra H.

> **Entalpía** y **entropía** se parecen tanto que se confunden solas. *Enthalpien*
> es **calentar** y va con **H**; *tropos* es **cambio** y va con **S**.

### 66

En relación con el libro de Biología, ¿qué representa Qp?

- A. El calor cedido o ganado en una reacción a presión constante
- B. El trabajo mecánico producido por la reacción
- C. La cantidad de electrones transferidos en la reacción
- D. La temperatura final del sistema

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Qp representa el calor cedido o ganado en una reacción a presión constante.

### 67

De acuerdo con el libro de Biología, ¿a qué presión constante se mide la entalpía, condición que se encuentra dentro de los seres vivos?

- A. 1 atmósfera
- B. 10 atmósferas
- C. 100 atmósferas
- D. 0,1 atmósferas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

La cantidad total de energía intercambiada (medible en forma de calor) para una reacción que ocurre en condiciones de presión constante de 1 atmósfera (1 atm) –condición que se encuentra dentro de los seres vivos–.

### 68

De conformidad con el libro de Biología, ¿cómo se denomina la reacción en la que se libera energía y la entalpía de los productos disminuye?

- A. Exotérmica
- B. Endotérmica
- C. De oxidorreducción
- D. Estacionaria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Si al producirse la reacción se libera energía, la entalpía de los productos disminuye. Este tipo de reacción se denomina exotérmica.

### 69

En relación con el libro de Biología, ¿cómo se denomina la reacción contraria a la exotérmica?

- A. Endotérmica
- B. Isotérmica
- C. Adiabática
- D. Irreversible

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Si ocurre lo contrario, se denomina endotérmica.

### 70

De acuerdo con el libro de Biología, ¿qué permite medir la entalpía en las condiciones descritas?

- A. Los cambios energéticos globales sufridos por los átomos o moléculas durante las transformaciones químicas
- B. La velocidad a la que ocurre cada reacción química
- C. El número de pasos intermedios de una ruta metabólica
- D. El grado de desorden alcanzado por el sistema

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Así, en las condiciones descritas, la entalpía es una manera de medir los cambios energéticos globales sufridos por los átomos o moléculas durante las transformaciones químicas.

### 71

De conformidad con el libro de Biología, si la transformación de una molécula en otra puede ocurrir por diferentes rutas metabólicas, ¿qué ocurre con el cambio global de entalpía?

- A. Será siempre el mismo
- B. Será mayor cuantos más pasos tenga la ruta
- C. Será menor cuantos más pasos tenga la ruta
- D. Variará de manera imprevisible según la ruta

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

La transformación de una molécula R en una P en los organismos vivos puede ocurrir por diferentes caminos (o rutas metabólicas). Sin embargo, el cambio global de entalpía sufrido será siempre el mismo.

---

## Sub-lote 14 · La oxidación de la glucosa en el calorímetro (p. 132)

### 72

En relación con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿cuánta energía total se libera al realizar en el laboratorio la oxidación total de la glucosa en un calorímetro?

- A. 673 kcal/mol
- B. 376 kcal/mol
- C. 6 730 kcal/mol
- D. 67 kcal/mol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Energía total liberada = 673 kcal/mol.

### 73

De acuerdo con el libro de Biología, ¿por qué ese valor permite estimar la cantidad de energía que puede liberarse en la célula?

- A. Porque no depende de la forma en la que se ejecute la reacción
- B. Porque la célula realiza la reacción en un solo paso, igual que el calorímetro
- C. Porque en la célula la reacción libera exactamente el doble
- D. Porque la célula aprovecha como trabajo útil la totalidad de esa energía

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · entalpía

Esta es en realidad la magnitud del cambio entálpico. Dado que este valor no depende de la forma en la que se ejecute la reacción, permite estimar cuál es la cantidad de energía que puede ser liberada en la célula cuando se produce esta reacción.

---

## Sub-lote 15 · La energía libre de Gibbs (p. 132)

### 74

De conformidad con el libro de Biología, ¿qué se genera cuando se enfrentan dos sustancias químicas capaces de reaccionar?

- A. Una situación de desequilibrio químico
- B. Una situación de equilibrio químico inmediato
- C. Un aumento de la entropía sin reacción alguna
- D. Un estado estacionario permanente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Cuando se enfrentan dos sustancias químicas capaces de reaccionar, se genera una situación de desequilibrio químico.

### 75

En relación con el libro de Biología, ¿de qué dependerá la magnitud de ese desequilibrio?

- A. De la diferencia de potencial establecida en el sistema, en relación con las configuraciones y los arreglos de los núcleos y electrones de las especies químicas intervinientes
- B. Únicamente de la temperatura a la que se encuentre el sistema
- C. Únicamente de la cantidad de sustancia que se enfrente
- D. Del tiempo que las dos sustancias permanezcan en contacto

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

La magnitud del desequilibrio dependerá de la diferencia de potencial establecida en el sistema en relación con las configuraciones y los arreglos de los núcleos y electrones de las especies químicas intervinientes.

### 76

De acuerdo con el libro de Biología, en una reacción de oxidorreducción, ¿qué logra el sistema cuando los electrones pasan del estado de mayor energía en A al de menor energía en B?

- A. Un estado de mínima energía, en el que se habrá logrado el equilibrio químico
- B. Un estado de máxima energía, alejado del equilibrio
- C. Un estado estacionario sostenido por procesos balanceados
- D. Un aumento de la energía útil disponible

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Cuando los electrones pasan del estado de mayor energía en A al de menor energía en B, el sistema logra un estado de mínima energía en el que se habrá logrado el equilibrio químico.

### 77

De conformidad con el libro de Biología, ¿qué ocurre con la energía liberada por ese proceso?

- A. No se destruye, sino que se libera al medio en forma de calor
- B. Se destruye por completo al alcanzarse el equilibrio
- C. Queda almacenada indefinidamente en los productos
- D. Se convierte íntegramente en trabajo útil

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

La energía liberada por este proceso no se destruye, sino que se libera al medio en forma de calor.

### 78

En relación con el libro de Biología, en una célula viva, ¿a qué es igual el término "energía total intercambiada" durante la reacción?

- A. Al cambio de entalpía del sistema
- B. Al cambio de entropía del sistema
- C. A la energía libre de Gibbs
- D. A la magnitud TS

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Ahora sabemos que, en una célula viva, el término energía total intercambiada durante la reacción es igual al cambio de entalpía del sistema.

### 79

De acuerdo con el libro de Biología, ¿a qué magnitud es igual la cantidad de energía que no es posible aprovechar como trabajo útil?

- A. A la magnitud TS
- B. A la magnitud H
- C. A la magnitud G
- D. A la magnitud Qp

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Definimos, además, que el término que representa aquella cantidad de energía que no es posible aprovechar como trabajo útil (energía disipada) es igual a la magnitud TS.

### 80

De conformidad con el libro de Biología, ¿cómo se reescribe la ecuación de la energía útil con esos términos?

- A. Energía útil = H – TS
- B. Energía útil = H + TS
- C. Energía útil = TS – H
- D. Energía útil = H × TS

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Energía útil = H – TS.

### 81

En relación con el libro de Biología, ¿quién presentó por primera vez esa función termodinámica, cómo se denomina y con qué letra se simboliza?

- A. El matemático norteamericano J. W. Gibbs; se denomina energía libre de Gibbs y se simboliza con la letra G
- B. El físico alemán Rudolf Clausius; se denomina entropía y se simboliza con la letra S
- C. El físico ruso-belga Ilya Prigogine; se denomina energía irreversible y se simboliza con la letra P
- D. El físico inglés James Joule; se denomina energía mecánica y se simboliza con la letra J

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Expresada de esta forma, la energía útil es una nueva función termodinámica presentada por primera vez por el matemático norteamericano J. W. Gibbs. Por ello, esta magnitud, a la que se denomina energía libre de Gibbs, se simboliza con la letra G.

### 82

De acuerdo con el libro de Biología, ¿cómo se expresa la energía libre de Gibbs empleando la letra griega delta para las variaciones?

- A. ΔG = ΔH – T × ΔS
- B. ΔG = ΔH + T × ΔS
- C. ΔG = T × ΔS – ΔH
- D. ΔG = ΔH × T × ΔS

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 132
**Subtema:** Metabolismo · energía libre de Gibbs

Para cualquier propiedad termodinámica es común expresar sus variaciones o diferencias entre los estados final e inicial de un proceso con la letra griega delta (Δ). Así, reescribiremos la expresión anterior como: ΔG = ΔH – T × ΔS.

> La ecuación que amarra todo el capítulo: la energía **aprovechable** (ΔG) es la
> energía **total** puesta en juego (ΔH) **menos** la que se pierde sin remedio
> (T × ΔS). Las tres letras ya salieron por separado: H de entalpía, S de
> entropía, G de Gibbs.

---

## Sub-lote 16 · El calorímetro y la espontaneidad (p. 133)

### 83

De conformidad con el libro de Biología, ¿para qué se usa un calorímetro?

- A. Para medir la cantidad de energía almacenada en un compuesto orgánico
- B. Para medir la velocidad de una reacción química
- C. Para separar los componentes de una mezcla
- D. Para medir la presión dentro de un sistema cerrado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · calorímetro

Un calorímetro se usa para medir la cantidad de energía almacenada en un compuesto orgánico.

### 84

En relación con el libro de Biología, ¿cómo se procede con la muestra en un calorímetro?

- A. Una cantidad conocida del compuesto se incinera eléctricamente y se mide el aumento de temperatura del agua circundante
- B. Una cantidad conocida del compuesto se disuelve en agua y se mide su volumen
- C. El compuesto se enfría hasta congelarse y se pesa el hielo formado
- D. El compuesto se expone a la luz y se mide la energía reflejada

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · calorímetro

Una cantidad conocida del compuesto se incinera eléctricamente. Cuando este compuesto se quema, se mide el aumento de temperatura del agua circundante.

### 85

De acuerdo con el libro de Biología, además de la máxima energía liberada por una reacción, ¿qué otra cosa permite estimar la energía libre?

- A. Si una reacción química dada será espontánea o no
- B. La velocidad exacta a la que ocurrirá la reacción
- C. El número de pasos intermedios de la reacción
- D. La temperatura final que alcanzará el sistema

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · espontaneidad

Esta magnitud permite estimar cuál es la máxima cantidad de energía liberada por una reacción, la cual podría ser transformada en trabajo por un organismo. Pero, además, este parámetro permite estimar si una reacción química dada será espontánea o no.

### 86

De conformidad con el libro de Biología, ¿cuál es la dirección natural de todo proceso, y qué signo de ΔG indica que una reacción ocurrirá de forma espontánea?

- A. Disminuir su energía libre; si el ΔG es negativo, la reacción ocurrirá de forma espontánea
- B. Aumentar su energía libre; si el ΔG es positivo, la reacción ocurrirá de forma espontánea
- C. Mantener constante su energía libre; si el ΔG es cero, la reacción ocurrirá de forma espontánea
- D. Disminuir su entalpía; si el ΔH es negativo, la reacción ocurrirá de forma espontánea

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · espontaneidad

La dirección natural de todo proceso es la de disminuir su energía libre, es decir, que si el ΔG de una reacción es negativo, esta ocurrirá de forma espontánea.

### 87

En relación con el libro de Biología, ¿qué hecho explica que la espontaneidad dependa de la energía libre?

- A. Que aun las reacciones o transformaciones endotérmicas puedan ser espontáneas
- B. Que todas las reacciones exotérmicas sean espontáneas sin excepción
- C. Que ninguna reacción endotérmica pueda ocurrir en los seres vivos
- D. Que la espontaneidad dependa únicamente de la temperatura

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · espontaneidad

Esto explica el hecho de que aun las reacciones o transformaciones endotérmicas puedan ser espontáneas.

---

## Sub-lote 17 · Reacciones exergónicas y endergónicas (p. 133)

### 88

De acuerdo con el libro de Biología, ¿cómo se denominan las reacciones con ΔG negativo, que entregan la energía útil para toda la actividad celular?

- A. Reacciones exergónicas
- B. Reacciones endergónicas
- C. Reacciones endotérmicas
- D. Reacciones estacionarias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · exergónicas y endergónicas

Las reacciones con ΔG negativos son las que entregan energía útil que servirá para llevar a cabo toda la actividad celular y se denominan reacciones exergónicas, que, como hemos dicho, son espontáneas.

### 89

De conformidad con el libro de Biología, ¿cómo se denominan las reacciones cuyo ΔG es positivo?

- A. Endergónicas; consumen energía libre y no ocurren de manera espontánea
- B. Exergónicas; entregan energía libre y ocurren de manera espontánea
- C. Exotérmicas; liberan calor y ocurren de manera espontánea
- D. Redox; transfieren electrones y ocurren de manera espontánea

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · exergónicas y endergónicas

Cuando el ΔG de una reacción es positivo, esta consume energía libre. Este tipo de reacciones se denominan endergónicas y no ocurren de manera espontánea.

> El par que se invierte solo. **Exergónicas**: ΔG **negativo**, **entregan**
> energía, **espontáneas**. **Endergónicas**: ΔG **positivo**, **consumen**
> energía, **no** espontáneas. Y ojo, no confundirlas con exotérmica y
> endotérmica, que son de entalpía, no de energía libre.

### 90

En relación con el libro de Biología, ¿cómo pueden ocurrir las reacciones endergónicas en el metabolismo celular, si no son espontáneas?

- A. Porque las reacciones químicas pueden acoplarse, y así las exergónicas les proporcionan energía a las endergónicas
- B. Porque en la célula el ΔG de esas reacciones cambia de signo
- C. Porque la célula crea la energía que les hace falta
- D. Porque ocurren sólo cuando la célula alcanza el equilibrio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · exergónicas y endergónicas

Esto puede ocurrir merced a que las reacciones químicas pueden acoplarse y así las reacciones exergónicas les proporcionan energía a las endergónicas.

### 91

De acuerdo con el libro de Biología, ¿por qué son posibles esos acoplamientos energéticos?

- A. Porque la energía liberada en las exergónicas puede almacenarse en forma de enlaces químicos de moléculas que actúan como intermediarios
- B. Porque las dos reacciones ocurren siempre en el mismo instante y lugar
- C. Porque la energía puede transferirse directamente en forma de calor
- D. Porque las enzimas crean la energía que falta

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · exergónicas y endergónicas

Estos acoplamientos energéticos son posibles fundamentalmente porque la energía liberada en las primeras puede almacenarse en la forma de enlaces químicos de moléculas que actúan como intermediarios, aportando dicha energía en las reacciones endergónicas que así lo requieran.

### 92

De conformidad con el libro de Biología, ¿en qué se transforma el ATP al perder un grupo fosfato, y qué ocurre en ese proceso?

- A. En ADP, y en ese proceso libera energía
- B. En ADP, y en ese proceso consume energía
- C. En glucosa, y en ese proceso libera calor
- D. En NADH, y en ese proceso libera electrones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · exergónicas y endergónicas

Una de estas moléculas intermediarias es el ATP que, al perder un grupo fosfato, se transforma en ADP (adenosín difosfato) y en ese proceso libera energía.

> **No se pregunta el nombre completo del ATP.** El libro lo escribe "adenonsín
> trifosfato", con una **n** de más, y dos líneas después escribe bien "adenosín
> difosfato" para el ADP. Es errata suya, anotada en el encabezado.

---

## Sub-lote 18 · El metabolismo como red de redes (pp. 133–134)

### 93

En relación con el libro de Biología, ¿qué representa en realidad la ecuación R → P?

- A. Un proceso global que resume un conjunto de reacciones que constituyen las etapas intermedias entre R y P
- B. Una única reacción química que ocurre en un solo paso
- C. Una reacción que sólo puede darse fuera de la célula
- D. El equilibrio final entre reactivos y productos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · red de redes

Sin embargo, esta ecuación representa un proceso global que, en realidad, resume un conjunto de reacciones que constituyen las etapas intermedias entre R y P.

### 94

De acuerdo con el libro de Biología, ¿de qué depende el número de reacciones que un organismo emplea para convertir R en P?

- A. De la estrategia metabólica del organismo en cuestión, y diferentes organismos pueden disponer de distintos números
- B. Del tamaño del organismo, siempre en la misma proporción
- C. Es siempre el mismo número en todos los organismos
- D. De la temperatura del ambiente en que vive el organismo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 133
**Subtema:** Metabolismo · red de redes

Diferentes organismos pueden disponer de distintos números de reacciones para llevar a cabo la conversión global de R en P, según la estrategia metabólica del organismo en cuestión.

### 95

De conformidad con el libro de Biología, ¿cuál es quizás la característica más destacada de las reacciones químicas que ocurren en los seres vivos?

- A. Que se encuentran catalizadas por enzimas
- B. Que ocurren siempre a temperaturas muy elevadas
- C. Que no requieren energía de ningún tipo
- D. Que son todas irreversibles

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · enzimas

Quizás, la característica más destacada de las reacciones químicas que ocurren en los seres vivos es que se encuentran catalizadas por enzimas.

### 96

En relación con el libro de Biología, ¿en qué dos aspectos generales de las reacciones químicas tiene un profundo impacto la presencia de enzimas?

- A. En la velocidad y el rendimiento
- B. En la temperatura y la presión
- C. En la entalpía y la entropía
- D. En el volumen y la concentración

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · enzimas

La presencia de enzimas tiene un profundo impacto en dos aspectos generales de las reacciones químicas: la velocidad y el rendimiento.

---

## Sub-lote 19 · Las vías metabólicas (p. 134)

### 97

De acuerdo con el libro de Biología, ¿cómo se llama la serie ordenada de pasos en la que los bioquímicos agrupan las reacciones propias del metabolismo?

- A. Vías metabólicas
- B. Ciclos energéticos
- C. Cadenas enzimáticas
- D. Redes de transferencia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · vías metabólicas

Los bioquímicos agrupan estas reacciones propias del metabolismo en una serie ordenada de pasos, que comúnmente se llaman vías metabólicas.

### 98

De conformidad con el libro de Biología, ¿cómo se denominan las vías relacionadas con la biosíntesis de las partes con las que una célula se construye a sí misma, y cómo se llama ese proceso?

- A. Vías anabólicas; el proceso metabólico de síntesis se denomina anabolismo
- B. Vías catabólicas; el proceso metabólico de síntesis se denomina catabolismo
- C. Vías anabólicas; el proceso metabólico de síntesis se denomina catabolismo
- D. Vías degradativas; el proceso metabólico de síntesis se denomina metabolismo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · vías metabólicas

Algunas de ellas se relacionan con la biosíntesis de las partes estructurales y funcionales con las que una célula se construye a sí misma, y se denominan vías anabólicas; el proceso metabólico de síntesis se denomina anabolismo.

### 99

En relación con el libro de Biología, ¿en qué consisten las vías catabólicas?

- A. En la degradación de moléculas complejas, a partir de las cuales obtienen energía y otras moléculas más simples necesarias para la biosíntesis
- B. En la síntesis de las partes estructurales y funcionales de la célula
- C. En el transporte de moléculas a través de la membrana
- D. En la duplicación del material genético

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · vías metabólicas

Otras consisten en la degradación de moléculas complejas, a partir de las cuales obtienen energía y otras moléculas más simples necesarias para la biosíntesis. Estas vías degradativas se denominan vías catabólicas.

> El par que ordena el capítulo entero: **anabolismo** = **construir** (síntesis);
> **catabolismo** = **degradar**. Se confunden por el parecido de las palabras, y
> el distractor de cada uno es el otro.

### 100

De acuerdo con el libro de Biología, ¿cómo se puede describir el metabolismo?

- A. Como ciclos de retroalimentación entre las vías catabólicas y las anabólicas
- B. Como una sucesión de vías anabólicas independientes entre sí
- C. Como una única vía lineal que va de los reactivos a los productos
- D. Como el conjunto de reacciones que ocurren sin enzimas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · vías metabólicas

Así, el metabolismo se puede describir como ciclos de retroalimentación entre las vías catabólicas y las anabólicas.

---

## Sub-lote 20 · La oxidorreducción (recuadro 7-1, p. 134)

### 101

De conformidad con el libro de Biología, ¿qué son en esencia las reacciones químicas?

- A. Transformaciones energéticas en virtud de las cuales la energía almacenada en los enlaces químicos se transfiere a otros recién formados
- B. Cambios en el número de protones de los núcleos atómicos
- C. Procesos en los que la energía se crea a partir de la materia
- D. Movimientos de moléculas sin cambio energético alguno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · oxidorreducción

Las reacciones químicas son, en esencia, transformaciones energéticas en virtud de las cuales la energía almacenada en los enlaces químicos se transfiere a otros recién formados.

### 102

En relación con el libro de Biología, ¿cómo se conocen las reacciones que consisten en la transferencia de electrones entre los reactivos?

- A. Reacciones de oxidación-reducción, oxidorreducción o redox
- B. Reacciones exergónicas o endergónicas
- C. Reacciones anabólicas o catabólicas
- D. Reacciones exotérmicas o endotérmicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · oxidorreducción

Estas reacciones se conocen como reacciones de oxidación-reducción, oxidorreducción o redox.

### 103

De acuerdo con el libro de Biología, ¿qué le ocurre a un átomo o molécula que pierde electrones, y cómo se llama ese proceso?

- A. Se oxida; el proceso de pérdida de electrones se denomina oxidación
- B. Se reduce; el proceso de pérdida de electrones se denomina reducción
- C. Se oxida; el proceso de pérdida de electrones se denomina reducción
- D. Se reduce; el proceso de pérdida de electrones se denomina oxidación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · oxidorreducción

Cuando un átomo o una molécula pierde electrones, se dice que se oxida. El proceso de pérdida de electrones se denomina oxidación.

### 104

De conformidad con el libro de Biología, ¿qué le ocurre a un átomo o molécula que gana electrones, y cómo se llama ese proceso?

- A. Se reduce; el proceso de ganancia de electrones se llama reducción
- B. Se oxida; el proceso de ganancia de electrones se llama oxidación
- C. Se reduce; el proceso de ganancia de electrones se llama oxidación
- D. Se oxida; el proceso de ganancia de electrones se llama reducción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · oxidorreducción

Cuando los gana, se dice que se reduce. El de ganancia se llama reducción.

> El punto donde se cae todo el mundo, porque el nombre engaña: **ganar**
> electrones se llama **reducción**. Pierde = oxida; gana = reduce.

### 105

En relación con el libro de Biología, ¿ocurren por separado o de forma simultánea la oxidación y la reducción?

- A. Siempre ocurren de forma simultánea, porque cuando un átomo o molécula pierde electrones, existen otros capaces de aceptarlos
- B. Siempre ocurren por separado y en momentos distintos
- C. La oxidación ocurre primero y la reducción después, con un retraso
- D. Sólo ocurren de forma simultánea dentro de los seres vivos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · oxidorreducción

Ambos procesos siempre ocurren de forma simultánea: cuando un átomo o molécula pierde electrones, existen otros capaces de aceptarlos.

### 106

De acuerdo con el libro de Biología, cuando las transferencias de electrones van acompañadas de transferencias de protones, ¿qué implican la oxidación y la reducción?

- A. La oxidación implica la pérdida de átomos de hidrógeno, y la reducción, la ganancia de átomos de hidrógeno
- B. La oxidación implica la ganancia de átomos de hidrógeno, y la reducción, la pérdida
- C. Las dos implican la ganancia de átomos de hidrógeno
- D. Las dos implican la pérdida de átomos de hidrógeno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 134
**Subtema:** Metabolismo · oxidorreducción

En estos casos, la oxidación implica la pérdida de átomos de hidrógeno y la reducción, la ganancia de átomos de hidrógeno.

---

## Sub-lote 21 · La universalidad del metabolismo (p. 135)

### 107

De conformidad con el libro de Biología, ¿qué reflejan las leves diferencias entre las vías metabólicas de los seres humanos, los robles, los hongos y las medusas?

- A. La ancestralidad común de todos los seres vivos
- B. Que todos ellos viven en el mismo tipo de ambiente
- C. Que el metabolismo apareció varias veces por separado
- D. Que todos ellos tienen el mismo tamaño celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · universalidad

Las diferencias en muchas de las vías metabólicas de los seres humanos, los robles, los hongos y las medusas son muy leves. Estas homologías reflejan la ancestralidad común de todos los seres vivos.

### 108

En relación con el libro de Biología, ¿qué vías metabólicas son virtualmente universales?

- A. La glucólisis y la respiración, que ocurren en casi todos los sistemas vivos
- B. La construcción de paredes celulares y la fotosíntesis
- C. La síntesis de aminoácidos y la de bases nitrogenadas, únicamente
- D. Ninguna; cada organismo tiene vías completamente propias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · universalidad

Algunas vías metabólicas como la glucólisis y la respiración son virtualmente universales: ocurren en casi todos los sistemas vivos.

### 109

De acuerdo con el libro de Biología, ¿en qué gastan gran parte de su energía las células vegetales, a diferencia de las animales?

- A. En la construcción de paredes celulares
- B. En la contracción de sus fibras musculares
- C. En el transporte de oxígeno por la sangre
- D. En la síntesis de ATP a partir de ADP

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · universalidad

Muchos tipos de sistemas vivos, como las células vegetales, tienen vías particulares que les son propias. Por ejemplo, estas células gastan gran parte de su energía en la construcción de paredes celulares, lo cual no ocurre en las células animales.

---

## Sub-lote 22 · La molécula de ATP (p. 135)

### 110

De conformidad con el libro de Biología, ¿por qué está constituida la molécula de ATP?

- A. Por una base nitrogenada que es la adenina, un azúcar de cinco carbonos, la ribosa, y tres grupos fosfato
- B. Por una base nitrogenada que es la adenina, un azúcar de seis carbonos, la glucosa, y dos grupos fosfato
- C. Por dos bases nitrogenadas, un azúcar de cinco carbonos y un grupo fosfato
- D. Por una cadena de aminoácidos y tres grupos fosfato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · ATP

La molécula de ATP está constituida por una base nitrogenada que es la adenina, un azúcar de cinco carbonos, la ribosa y tres grupos fosfato.

### 111

En relación con el libro de Biología, ¿cómo están unidos los tres grupos fosfato del ATP y qué ocurre al romperse?

- A. Por enlaces covalentes que se rompen fácilmente por hidrólisis, transformando el ATP en ADP y fósforo inorgánico, y liberando una gran cantidad de energía
- B. Por enlaces iónicos que se rompen por calor, transformando el ATP en glucosa y liberando calor
- C. Por puentes de hidrógeno que se rompen espontáneamente, sin liberar energía
- D. Por enlaces covalentes que no pueden romperse en la célula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · ATP

Los tres grupos fosfato están unidos por enlaces covalentes que se rompen fácilmente por hidrólisis, transformando el ATP en ADP y fósforo (P) inorgánico y liberando una gran cantidad de energía.

---

## Sub-lote 23 · Espontaneidad y velocidad: las enzimas (p. 135)

### 112

De acuerdo con el libro de Biología, ¿qué nos dice, y qué no, el hecho de saber que una reacción es espontánea?

- A. Sólo nos dice que podrá ocurrir sin un aporte de energía, pero no nos informa acerca de la velocidad con la que ocurrirá
- B. Nos dice tanto que ocurrirá sin aporte de energía como la velocidad exacta a la que lo hará
- C. Sólo nos informa de la velocidad, pero no de si requiere energía
- D. No nos dice nada sobre la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · enzimas

El hecho de saber que una reacción es espontánea solo nos dice que podrá ocurrir sin un aporte de energía, pero no nos informa acerca de la velocidad con la que ocurrirá dicha reacción.

### 113

De conformidad con el libro de Biología, en los animales, ¿en qué se transforma el dióxido de carbono resultante del metabolismo celular y para qué?

- A. En ácido carbónico, que es la manera en que es transportado por la sangre
- B. En glucosa, que es la manera en que es almacenado en el hígado
- C. En bicarbonato de sodio, que es eliminado por el riñón
- D. En oxígeno, que es devuelto a los pulmones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · enzimas

En los animales, el dióxido de carbono resultante del metabolismo celular se transforma en ácido carbónico, que es la manera en que es transportado por la sangre.

### 114

En relación con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿cuántas veces mayor es la velocidad de esa reacción en los animales que la que se produce en el mar, debido a la acción de las enzimas?

- A. 10⁷ veces mayor
- B. 10³ veces mayor
- C. 10¹² veces mayor
- D. 10 veces mayor

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · enzimas

Debido a la acción de las enzimas, la velocidad de esta reacción en los animales es 10⁷ mayor que la que se produce en el mar.

### 115

De acuerdo con el libro de Biología, ¿qué son las enzimas?

- A. Componentes celulares que aceleran las reacciones espontáneas
- B. Componentes celulares que hacen espontáneas las reacciones que no lo son
- C. Componentes celulares que almacenan la energía de la célula
- D. Componentes celulares que forman la pared celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · enzimas

Las enzimas son componentes celulares que aceleran las reacciones espontáneas.

> Distinción fina que el libro construye en toda esta página: la enzima **no**
> vuelve espontánea una reacción que no lo es —eso lo decide el ΔG—, sólo la
> **acelera**. El distractor B es justo ese error.

### 116

De conformidad con el libro de Biología, según la representación esquemática de una vía metabólica, ¿qué ocurre si cualquiera de sus pasos se inhibe?

- A. La vía se interrumpe y las reacciones siguientes no se producen
- B. La vía continúa por un camino alternativo automáticamente
- C. La vía se acelera para compensar el paso perdido
- D. Sólo se detiene ese paso, y los siguientes continúan igual

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 135
**Subtema:** Metabolismo · vías metabólicas

Si cualquier paso de la vía metabólica se inhibe –porque una enzima no funciona o porque falta sustrato–, la vía se interrumpe y las reacciones siguientes no se producen.

---

## Sub-lote 24 · El ATP como moneda energética (p. 136)

### 117

En relación con el libro de Biología, ¿en qué macromoléculas almacenan las células la energía química?

- A. En el almidón, en las plantas, y el glucógeno, en las bacterias y los animales
- B. En el glucógeno, en las plantas, y el almidón, en las bacterias y los animales
- C. En la celulosa, tanto en las plantas como en los animales
- D. En el ATP, que se acumula como reserva a largo plazo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · ATP

Las células almacenan energía en forma de energía química contenida en los enlaces de ciertas macromoléculas especiales, como el almidón en las plantas y el glucógeno en las bacterias y los animales.

### 118

De acuerdo con el libro de Biología, ¿en qué participa la energía liberada en los procesos exergónicos?

- A. En la síntesis de ATP a partir de ADP y fósforo inorgánico
- B. En la degradación del ATP en ADP y fósforo inorgánico
- C. En la construcción de la pared celular de las plantas
- D. En el aumento de la entropía del citosol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · ATP

La energía liberada en los procesos exergónicos mencionados participa en la síntesis de ATP a partir de ADP y fósforo inorgánico.

### 119

De conformidad con el libro de Biología, ¿cómo se denominan en conjunto las enzimas que catalizan la hidrólisis del ATP?

- A. ATPasas
- B. Cinasas
- C. Fosfatasas
- D. Catalasas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · ATP

La hidrólisis del ATP está catalizada por enzimas que, en conjunto, se denominan ATPasas.

### 120

En relación con el libro de Biología, ¿cómo aumentan su temperatura corporal algunos animales, como las aves y los mamíferos, al tiritar?

- A. El ATP hidrolizado durante la contracción muscular libera parte de la energía en forma de calor
- B. Las células queman directamente el glucógeno de reserva sin intermediarios
- C. La pared celular de sus tejidos retiene el calor del ambiente
- D. Las ATPasas dejan de funcionar y el calor se acumula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · ATP

A veces, también, algunos animales, como las aves y los mamíferos, aumentan su temperatura corporal mediante este mecanismo: al tiritar, el ATP hidrolizado durante la contracción muscular libera parte de la energía en forma de calor.

### 121

De acuerdo con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿cuánto ATP se ha estimado que utiliza una persona por día?

- A. 40 kg
- B. 4 kg
- C. 400 kg
- D. 400 g

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · ATP

Se ha estimado que una persona utiliza 40 kg de ATP por día.

### 122

De conformidad con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿cuántas veces por día es fosforilada y desfosforilada cada molécula de ADP?

- A. Unas 1 000 veces por día
- B. Unas 100 veces por día
- C. Unas 10 000 veces por día
- D. Unas 10 veces por día

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · ATP

Esto implicaría que cada molécula de ADP es fosforilada a ATP y posteriormente desfosforilada unas 1000 veces por día.

---

## Sub-lote 25 · Fosforilación: cinasas y fosfatasas (p. 136)

### 123

En relación con el libro de Biología, ¿cómo se conoce la adición de un grupo fosfato a otra molécula, y qué familia de enzimas la lleva a cabo?

- A. Fosforilación; la llevan a cabo las cinasas
- B. Fosforilación; la llevan a cabo las fosfatasas
- C. Hidrólisis; la llevan a cabo las ATPasas
- D. Desfosforilación; la llevan a cabo las cinasas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · cinasas y fosfatasas

Esta adición de un grupo fosfato se conoce como fosforilación y la lleva a cabo una familia de enzimas llamadas cinasas.

### 124

De acuerdo con el libro de Biología, ¿de qué se encargan las enzimas denominadas fosfatasas?

- A. De eliminar los grupos fosfato de las moléculas que, por lo general, fueron incorporados por las cinasas
- B. De añadir los grupos fosfato que después eliminarán las cinasas
- C. De catalizar la hidrólisis del ATP en ADP
- D. De sintetizar ATP a partir de ADP y fósforo inorgánico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · cinasas y fosfatasas

Existe otro grupo de enzimas, denominadas fosfatasas, que se encargan de eliminar los grupos fosfato de las moléculas que, por lo general, fueron incorporados por las cinasas.

> Otro par contrapuesto: las **cinasas ponen** el fosfato, las **fosfatasas lo
> quitan**. El libro dice que su interacción regula una gran cantidad de vías
> metabólicas, y son fáciles de intercambiar en un reactivo.

### 125

De conformidad con el libro de Biología, ¿qué regula la interacción entre cinasas y fosfatasas?

- A. Una gran cantidad de vías metabólicas
- B. Únicamente la síntesis de ATP
- C. Únicamente la temperatura corporal
- D. La permeabilidad de la membrana plasmática

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · cinasas y fosfatasas

La interacción entre cinasas y fosfatasas regula una gran cantidad de vías metabólicas.

---

## Sub-lote 26 · Los catalizadores y la energía de activación (p. 136)

### 126

En relación con el libro de Biología, ¿qué es un catalizador?

- A. Una sustancia que modifica la velocidad de una reacción química, pero sin sufrir un cambio químico permanente en el proceso
- B. Una sustancia que se consume por completo durante la reacción que acelera
- C. Una sustancia que aporta la energía que le falta a una reacción
- D. Una sustancia que impide que la reacción llegue al equilibrio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · energía de activación

Las enzimas son catalizadores biológicos. Un catalizador es una sustancia que modifica la velocidad de una reacción química, pero sin sufrir un cambio químico permanente en el proceso.

### 127

De acuerdo con el libro de Biología, ¿qué implica toda reacción química respecto de los átomos de los reactivos?

- A. Un reordenamiento: se rompen los enlaces que los mantienen unidos y se forman otros nuevos que dan lugar a compuestos diferentes
- B. Un cambio en el número de átomos, que aumenta o disminuye
- C. La destrucción de los átomos iniciales y la creación de otros
- D. Un cambio en el número de protones de sus núcleos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · energía de activación

Toda reacción química implica un reordenamiento de los átomos que forman parte de los reactivos: se rompen los enlaces que los mantienen unidos y se forman otros nuevos que dan lugar a compuestos diferentes de los iniciales, aunque formados por el mismo tipo y cantidades de átomos.

### 128

De conformidad con el libro de Biología, ¿por qué ocurren las reacciones químicas, aun las exergónicas?

- A. Debido a un ingreso inicial de energía que favorece la desestabilización de los enlaces de las moléculas que forman los reactivos
- B. Sin ningún ingreso de energía, porque son espontáneas
- C. Debido únicamente a la presencia de un catalizador
- D. Debido al aumento de la temperatura del sistema

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · energía de activación

Cualquier reacción química, aun las que son exergónicas, ocurren debido a un ingreso inicial de energía que favorece la desestabilización de los enlaces de las moléculas que forman los reactivos y la consecuente formación de otros nuevos de menor energía.

### 129

En relación con el libro de Biología, ¿qué son los estadios químicos intermedios de una reacción?

- A. Átomos o moléculas que están a mitad de camino entre el reactivo y el producto, con sus configuraciones electrónicas alteradas y estados energéticos altos
- B. Los productos finales de la reacción, ya estabilizados
- C. Los catalizadores que la enzima libera durante el proceso
- D. Los enlaces covalentes que se forman al final de la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · energía de activación

Estos estadios químicos intermedios son átomos o moléculas que están a mitad de camino entre el reactivo y el producto; sus configuraciones electrónicas se encuentran alteradas y sus estados energéticos son altos.

### 130

De acuerdo con el libro de Biología, ¿qué se conoce como energía de activación?

- A. La diferencia en energía libre entre los reactivos y sus estadios intermedios
- B. La diferencia en energía libre entre los reactivos y los productos finales
- C. La energía total liberada por la reacción
- D. La energía que la enzima aporta a la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 136
**Subtema:** Metabolismo · energía de activación

La diferencia en energía libre entre los reactivos y sus estadios intermedios es lo que se conoce como energía de activación.

> Ojo con el distractor B: la energía libre entre reactivos y **productos** es el
> ΔG, que decide si la reacción es espontánea. La energía de **activación** se
> mide contra los **estadios intermedios**, y es lo que la enzima abarata.

---

## Sub-lote 27 · La velocidad de reacción y por qué no basta con calentar (p. 137)

### 131

De conformidad con el libro de Biología, ¿de qué depende la cantidad de reactantes que alcanza la energía de activación?

- A. Cuanto mayores sean la temperatura y la concentración de los reactivos, mayor será esa cantidad
- B. Cuanto menores sean la temperatura y la concentración de los reactivos, mayor será esa cantidad
- C. Depende únicamente de la presión del sistema
- D. Es siempre la misma, cualesquiera que sean las condiciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · velocidad de reacción

Por esta razón, cuanto mayores sean la temperatura y la concentración de los reactivos, mayor será la cantidad de reactantes que alcance la energía de activación.

### 132

En relación con el libro de Biología, ¿a qué es proporcional la velocidad de una reacción química?

- A. A la cantidad de átomos o moléculas que estén alcanzando la energía de activación en un tiempo dado
- B. A la cantidad total de producto que se formará al final
- C. A la diferencia de energía libre entre reactivos y productos
- D. Al número de enzimas distintas presentes en el sistema

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · velocidad de reacción

Así, la velocidad de una reacción química es proporcional a la cantidad de átomos o moléculas que estén alcanzando la energía de activación en un tiempo dado.

### 133

De acuerdo con el libro de Biología, ¿por qué un aumento de la temperatura celular no constituiría una "solución"?

- A. Porque el calor desnaturaliza las proteínas y porque se acelerarían todas las reacciones celulares a la vez, con lo que el metabolismo sería incontrolable
- B. Porque el calor detendría por completo todas las reacciones celulares
- C. Porque la célula no puede aumentar su temperatura en ningún caso
- D. Porque el calor aumentaría la energía de activación de las reacciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · velocidad de reacción

Un aumento de la temperatura celular no constituiría una "solución" para este "problema" por dos razones. Por una parte, el calor desnaturaliza las proteínas, impidiendo que cumplan sus funciones y, por otra parte, se acelerarían todas las reacciones celulares a la vez y el metabolismo sería incontrolable.

### 134

De conformidad con el libro de Biología, ¿mediante qué actúan las enzimas como catalizadores?

- A. Mediante la disminución de la energía de activación de las reacciones
- B. Mediante el aumento de la energía de activación de las reacciones
- C. Mediante el aumento de la temperatura del citoplasma
- D. Mediante el aporte de energía libre a la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · enzimas

Las enzimas actúan como catalizadores mediante la disminución de la energía de activación de las reacciones.

### 135

En relación con el libro de Biología, ¿cómo logran las enzimas disminuir la energía de activación?

- A. A través de la formación de asociaciones temporales transitorias con los reactivos, acercando a las moléculas que reaccionan y debilitando los enlaces químicos existentes
- B. Uniéndose de forma permanente a los reactivos hasta el final del proceso
- C. Aumentando la concentración de los reactivos en el citosol
- D. Elevando la temperatura local del sitio de la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · enzimas

A través de la formación de asociaciones temporales transitorias con los reactivos, las enzimas acercan a las moléculas que reaccionan y debilitan los enlaces químicos existentes, lo cual facilita la formación de otros nuevos.

---

## Sub-lote 28 · El sitio activo y el sustrato (p. 137)

### 136

De acuerdo con el libro de Biología, ¿qué son la mayoría de las enzimas?

- A. Proteínas globulares de gran tamaño, formadas por una o más cadenas polipeptídicas, aunque algunas son moléculas de ARN
- B. Moléculas de ARN, aunque algunas son proteínas globulares
- C. Lípidos de gran tamaño insertos en la membrana
- D. Hidratos de carbono ramificados

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · sitio activo

Aunque algunas enzimas son moléculas de ARN, la mayoría de ellas son proteínas globulares de gran tamaño, formadas por una o más cadenas polipeptídicas.

### 137

De conformidad con el libro de Biología, ¿qué es el sitio activo de la enzima?

- A. El surco o bolsillo que forman las cadenas plegadas, lugar físico en el que encajan las moléculas de los reactivos y donde ocurren las reacciones
- B. La superficie externa de la enzima, donde se adhieren los productos
- C. El centro de la molécula, donde se almacena la energía de activación
- D. La región de la enzima que se destruye durante la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · sitio activo

Las cadenas están plegadas de tal manera que forman un surco o bolsillo, en el cual quedan expuestos algunos de sus aminoácidos. Ese surco o bolsillo, que es el lugar físico en el que encajan las moléculas del o de los reactivos y donde ocurren las reacciones, se denomina sitio activo de la enzima.

### 138

En relación con el libro de Biología, ¿por qué en el sitio activo sólo encajan determinados reactivos?

- A. Debido a un exquisito encastre entre la forma del sitio y su afinidad por los reactivos
- B. Debido al tamaño total de la molécula de enzima
- C. Debido a la temperatura a la que trabaja la célula
- D. Debido a la carga eléctrica de la membrana plasmática

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · sitio activo

En el sitio activo solo encajan determinados reactivos debido a un exquisito encastre entre la forma del sitio y su afinidad por los reactivos.

### 139

De acuerdo con el libro de Biología, en una reacción catalizada por enzimas, ¿cómo se denomina a los reactivos?

- A. Sustrato de la enzima
- B. Producto de la enzima
- C. Isoenzimas
- D. Cofactores de la enzima

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · sitio activo

En una reacción catalizada por enzimas, a los reactivos se los denomina sustrato de la enzima.

---

## Sub-lote 29 · De la llave-cerradura al ajuste inducido (p. 137)

### 140

De conformidad con el libro de Biología, ¿quién postuló la existencia de sitios activos, en qué año, y con qué comparó su relación con los sustratos?

- A. El químico alemán Emil Fischer, en 1894, y la comparó con la que existe entre una cerradura y su llave
- B. El químico alemán Emil Fischer, en 1919, y la comparó con la de un molde y su vaciado
- C. El físico alemán Rudolf Clausius, en 1894, y la comparó con la de dos imanes
- D. El matemático norteamericano J. W. Gibbs, en 1894, y la comparó con la de una cerradura y su llave

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ajuste inducido

Cuando el químico alemán Emil Fischer (1852-1919) postuló en 1894 la existencia de sitios activos, comparó la relación entre estos y sus sustratos con aquella que existe entre una cerradura y su llave.

### 141

En relación con el libro de Biología, ¿qué indicarían sobre el sitio activo los estudios posteriores de la estructura de las enzimas?

- A. Que es mucho más flexible e interactivo que el que sugiere el modelo llave-cerradura
- B. Que es mucho más rígido de lo que sugiere el modelo llave-cerradura
- C. Que no existe realmente como estructura física
- D. Que es idéntico en todas las enzimas conocidas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ajuste inducido

Sin embargo, algunos estudios posteriores sobre la estructura de las enzimas indicarían que el sitio activo es mucho más flexible e interactivo que el que sugiere el modelo llave-cerradura.

### 142

De acuerdo con el libro de Biología, ¿cómo se llama el modelo actual, según el cual la unión entre la enzima y el sustrato altera la conformación de la enzima?

- A. Ajuste inducido
- B. Llave-cerradura
- C. Mosaico fluido
- D. Complejo enzima-sustrato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ajuste inducido

El modelo actual propone que la unión entre la enzima y el sustrato parece alterar la conformación de la enzima, lo cual induce un íntimo ajuste entre el sitio activo y el sustrato. A este modelo se lo llama ajuste inducido.

> Los dos modelos, en orden histórico: **llave-cerradura** (Fischer, 1894) supone
> un sitio activo **rígido**; el **ajuste inducido**, que es el modelo actual,
> supone uno **flexible** que se amolda al sustrato al unirse.

### 143

De conformidad con el libro de Biología, ¿cómo se llama el complejo que se forma al unirse la enzima a su sustrato?

- A. Complejo enzima-sustrato
- B. Complejo proteína-soluto
- C. Complejo de ajuste inducido
- D. Complejo catalítico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ajuste inducido

Al unirse la enzima a su sustrato (que pueden ser uno o más reactivos), se forma un complejo llamado complejo enzima-sustrato.

### 144

En relación con el libro de Biología, ¿cuándo se lleva a cabo la actividad catalítica que transforma el sustrato en el producto?

- A. Mientras la enzima y el sustrato permanecen unidos
- B. Antes de que la enzima y el sustrato se unan
- C. Después de que la enzima y el sustrato se separan
- D. Sólo si la enzima se destruye en el proceso

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ajuste inducido

Mientras permanecen unidos, se lleva a cabo la actividad catalítica que transforma el sustrato en el producto.

---

## Sub-lote 30 · Por qué se acelera la reacción y el ciclo catalítico (p. 137)

### 145

De acuerdo con el libro de Biología, ¿cómo funciona el sitio activo para acelerar la reacción?

- A. Como un molde en el cual los reactivos se acercan mucho y encajan en la orientación adecuada para que la reacción se produzca
- B. Como una barrera que impide el paso de los reactivos no deseados
- C. Como una fuente de calor que eleva la temperatura local
- D. Como un depósito donde se almacenan los productos formados

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ciclo catalítico

En primer lugar, el sitio activo funciona como un molde en el cual los reactivos se acercan mucho y encajan en la orientación adecuada para que la reacción se produzca.

### 146

De conformidad con el libro de Biología, ¿qué se cree que crea el ajuste inducido entre el sitio activo y el sustrato?

- A. Tensión en las moléculas reactivas, lo que facilita el curso de la reacción
- B. Una barrera energética que retrasa la reacción
- C. Una unión permanente que inmoviliza al sustrato
- D. Un aumento de la energía de activación necesaria

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ciclo catalítico

Se cree que el ajuste inducido entre el sitio activo y el sustrato crea tensión en las moléculas reactivas, lo que facilita el curso de la reacción.

### 147

En relación con el libro de Biología, ¿en qué se invierte en gran medida la energía de activación?

- A. En el acercamiento de las moléculas reactivas y en la rotura de los enlaces
- B. En la síntesis de nuevas moléculas de enzima
- C. En el calentamiento del citosol celular
- D. En la formación del complejo enzima-sustrato únicamente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ciclo catalítico

De esta manera, la energía de activación, que en gran medida se invierte en el acercamiento de las moléculas reactivas y en la rotura de los enlaces, se ve disminuida con la acción de las enzimas.

### 148

De acuerdo con el libro de Biología, ¿qué se denomina ciclo catalítico de una enzima?

- A. Que, al no cambiar su naturaleza durante la reacción, luego de participar en una queda disponible para catalizar una nueva
- B. Que la enzima se consume en cada reacción y debe volver a sintetizarse
- C. Que la enzima cambia de sustrato en cada vuelta del ciclo
- D. Que la enzima alterna entre estados activo e inactivo cada segundo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ciclo catalítico

Dado que las enzimas no cambian su naturaleza durante la reacción química luego de participar en una reacción quedan disponibles para catalizar una nueva. Esto es lo que se denomina ciclo catalítico de una enzima.

### 149

De conformidad con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿cuántas moléculas puede procesar una sola molécula de enzima, y en qué tiempo?

- A. Decenas de miles de moléculas iguales, en tiempos del orden de un segundo
- B. Decenas de moléculas iguales, en tiempos del orden de un minuto
- C. Una sola molécula, en tiempos del orden de un segundo
- D. Millones de moléculas distintas, en tiempos del orden de una hora

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · ciclo catalítico

Una sola molécula de enzima puede catalizar la reacción de decenas de miles de moléculas iguales en tiempos del orden de un segundo. Por esto, las enzimas son particularmente eficaces en cantidades muy pequeñas.

---

## Sub-lote 31 · Las isoenzimas (p. 137)

### 150

En relación con el libro de Biología, ¿cómo se denominan las diferentes formas estructurales de una misma enzima con la misma actividad catalítica?

- A. Isoenzimas
- B. Coenzimas
- C. Proenzimas
- D. Apoenzimas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · isoenzimas

En un organismo pluricelular, y también en cada una de sus células, pueden existir distintas variedades de una misma enzima con la misma actividad catalítica. Estas diferentes formas estructurales de una enzima se denominan isoenzimas.

### 151

De acuerdo con el libro de Biología, ¿cuál es una de las isoenzimas mejor estudiadas, en qué participa y cuántas formas posee?

- A. La lacticodeshidrogenasa (LDH), que participa en el metabolismo energético y posee cinco isoenzimas
- B. La lacticodeshidrogenasa (LDH), que participa en la síntesis de proteínas y posee tres isoenzimas
- C. La ATPasa, que participa en el metabolismo energético y posee cinco isoenzimas
- D. La clatrina, que participa en el transporte de vesículas y posee cinco isoenzimas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · isoenzimas

Una de las mejor estudiadas es la lacticodeshidrogenasa (LDH), que participa en el metabolismo energético y posee cinco isoenzimas.

### 152

De conformidad con el libro de Biología, ¿cómo es la distribución de las cinco formas de la LDH?

- A. Es característica en cada tejido, y sus proporciones relativas cambian en ciertos estados patológicos
- B. Es idéntica en todos los tejidos y no cambia nunca
- C. Es característica de cada individuo, pero igual en todos sus tejidos
- D. Cambia al azar de un momento a otro dentro del mismo tejido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 137
**Subtema:** Metabolismo · isoenzimas

La distribución de las cinco formas es característica en cada tejido y sus proporciones relativas cambian en ciertos estados patológicos.

> Éste es el dato con más peso clínico del capítulo, y por eso conviene que un
> aspirante a médico militar lo tenga: si las proporciones de las isoenzimas
> **cambian en ciertos estados patológicos**, medirlas sirve para diagnosticar.

---

## Sub-lote 32 · Cofactores y coenzimas (p. 138)

### 153

En relación con el libro de Biología, ¿cómo se denominan las sustancias adicionales que requiere el funcionamiento de muchas enzimas, según sean inorgánicas u orgánicas?

- A. Cofactores, si son inorgánicas y de bajo peso molecular; coenzimas, si son orgánicas no proteicas
- B. Coenzimas, si son inorgánicas y de bajo peso molecular; cofactores, si son orgánicas no proteicas
- C. Isoenzimas, si son inorgánicas; apoenzimas, si son orgánicas
- D. Sustratos, si son inorgánicas; productos, si son orgánicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · cofactores y coenzimas

Si estas sustancias adicionales son inorgánicas y de bajo peso molecular se las denomina cofactores, y si son orgánicas no proteicas se las llama coenzimas.

> El par se invierte con facilidad porque los nombres se parecen. Regla corta:
> **cofactor = inorgánico**; **coenzima = orgánica**.

### 154

De acuerdo con el libro de Biología, ¿cuál es un ejemplo de cofactor y en qué reacciones es indispensable?

- A. El ion magnesio, indispensable en todas las reacciones enzimáticas que implican la transferencia de un grupo fosfato de una molécula a otra
- B. El dinucleótido de nicotinamida y adenina, indispensable en las reacciones de síntesis de proteínas
- C. El ion sodio, indispensable en todas las reacciones de oxidorreducción
- D. El ion potasio, indispensable en la formación del complejo enzima-sustrato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · cofactores y coenzimas

Un ejemplo de cofactor es el ion magnesio (Mg²⁺), indispensable en todas las reacciones enzimáticas que implican la transferencia de un grupo fosfato de una molécula a otra.

### 155

De conformidad con el libro de Biología, ¿cómo mantiene el ion magnesio en posición al grupo fosfato dentro del sitio activo?

- A. Lo atrae con sus dos cargas positivas, porque el grupo fosfato en solución tiene dos cargas negativas
- B. Lo repele con sus dos cargas negativas, porque el grupo fosfato tiene dos cargas positivas
- C. Lo une mediante un enlace covalente permanente
- D. Lo envuelve en una capa de agua que lo inmoviliza

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · cofactores y coenzimas

El grupo fosfato, cuando está en solución, tiene dos cargas negativas y, cuando está en el sitio activo, se mantiene en posición por la acción del ion magnesio que lo atrae con sus dos cargas positivas.

### 156

En relación con el libro de Biología, ¿cómo y dónde se unen las coenzimas a la enzima?

- A. En forma temporaria o permanente, y en general bastante cerca del sitio activo
- B. Siempre en forma permanente, y en el extremo opuesto al sitio activo
- C. Siempre en forma temporaria, y dentro del núcleo celular
- D. No se unen a la enzima, sino al producto de la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · cofactores y coenzimas

Las coenzimas, por su parte, se unen en forma temporaria o permanente a la enzima; en general, bastante cerca del sitio activo.

### 157

De acuerdo con el libro de Biología, ¿qué reciben con frecuencia las coenzimas que funcionan como aceptores de electrones?

- A. Un par de electrones acompañados por un ion hidrógeno, un protón, que luego transfieren a otra molécula
- B. Un solo electrón sin acompañamiento, que retienen de forma permanente
- C. Un grupo fosfato, que luego ceden al ATP
- D. Un átomo de magnesio, que estabiliza el sitio activo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · cofactores y coenzimas

Con frecuencia, reciben un par de electrones acompañados por un ion hidrógeno –un protón– que luego transfieren a otra molécula.

### 158

De conformidad con el libro de Biología, ¿cuál es una de las coenzimas aceptoras de electrones más abundantes y en qué procesos participa?

- A. El dinucleótido de nicotinamida y adenina (NAD), que desempeña un papel fundamental en los procesos de glucólisis y de respiración celular
- B. El adenosín trifosfato (ATP), que desempeña un papel fundamental en la síntesis de proteínas
- C. La lacticodeshidrogenasa (LDH), que desempeña un papel fundamental en la fotosíntesis
- D. El ion magnesio (Mg²⁺), que desempeña un papel fundamental en la glucólisis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · cofactores y coenzimas

Hay varios tipos diferentes de coenzimas aceptoras de electrones; una de las más abundantes es el dinucleótido de nicotinamida y adenina (NAD), que desempeña un papel fundamental en los procesos de glucólisis y de respiración celular.

---

## Sub-lote 33 · Las vías enzimáticas (p. 138)

### 159

En relación con el libro de Biología, ¿cuándo es catabólica y cuándo anabólica una vía metabólica?

- A. Catabólica, si se trata de reacciones de degradación; anabólica, si son de síntesis
- B. Catabólica, si se trata de reacciones de síntesis; anabólica, si son de degradación
- C. Catabólica, si ocurre en el citosol; anabólica, si ocurre en la membrana
- D. Catabólica, si requiere enzimas; anabólica, si no las requiere

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

Esta vías pueden ser catabólicas, si se trata de reacciones de degradación, y anabólicas, si son de síntesis.

### 160

De acuerdo con el libro de Biología, ¿cómo se catalizan los pasos de una vía metabólica?

- A. Cada uno de los pasos es catalizado por una enzima específica, y varias enzimas trabajan en serie a lo largo de la vía
- B. Todos los pasos son catalizados por una única enzima que se desplaza a lo largo de la vía
- C. Sólo el primer paso requiere enzima; los demás ocurren solos
- D. Los pasos no requieren enzimas, sólo cofactores

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

Cada uno de los pasos de una vía metabólica es catalizado por una enzima específica y varias enzimas trabajan en serie a lo largo de la vía.

### 161

De conformidad con el libro de Biología, ¿cómo se llama la agrupación que a veces forman las enzimas?

- A. Complejos multienzimáticos
- B. Complejos enzima-sustrato
- C. Isoenzimas
- D. Vías metabólicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

A veces, las enzimas se agrupan formando complejos multienzimáticos.

### 162

En relación con el libro de Biología, ¿dónde se encuentran las enzimas y complejos multienzimáticos en los organismos eucariontes?

- A. Algunas en solución dentro de ciertos orgánulos, como los lisosomas, y otras embutidas en la membrana de organelas particulares
- B. Todas en solución en el citosol, sin excepción
- C. Todas embutidas en la membrana celular
- D. Todas dentro del núcleo celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

En los organismos eucariontes, algunas enzimas y complejos multienzimáticos se encuentran en solución dentro de ciertos orgánulos, como sucede en los lisosomas, mientras que otras están embutidas en la membrana de organelas particulares, o directamente en la membrana celular si se trata de organismos procariontes.

### 163

De acuerdo con el libro de Biología, ¿qué patrón presentan las enzimas ubicadas en membranas que actúan en una misma vía metabólica?

- A. Un patrón secuencial de alineación espacial que se corresponde con la secuencia de pasos de una reacción
- B. Una distribución al azar por toda la superficie de la membrana
- C. Una agrupación en el centro exacto de la membrana
- D. Una alineación inversa a la secuencia de pasos de la reacción

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

Las enzimas ubicadas en membranas y que actúan en una misma vía metabólica presentan un patrón secuencial de alineación espacial que se corresponde con la secuencia de pasos de una reacción.

### 164

De conformidad con el libro de Biología, en esa disposición, ¿qué es el producto de una reacción?

- A. El sustrato de la enzima contigua, que catalizará la siguiente reacción de la serie
- B. El producto final de toda la vía metabólica
- C. Un residuo que la célula elimina de inmediato
- D. El cofactor de la enzima anterior

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

De este modo, el producto de una reacción es el sustrato de la enzima contigua que catalizará la siguiente reacción de la serie.

### 165

En relación con el libro de Biología, ¿cuál es una ventaja de esa disposición de las enzimas?

- A. Que se produce una escasa acumulación de productos intermedios, con la consiguiente optimización de la energía
- B. Que se acumulan grandes reservas de productos intermedios para usarlas después
- C. Que la vía puede funcionar sin necesidad de enzimas
- D. Que la célula puede prescindir de la membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 138
**Subtema:** Metabolismo · vías enzimáticas

Una ventaja de esta disposición es que se produce una escasa acumulación de productos intermedios, pues cada producto tiende a ser usado en la próxima reacción de la vía, con la consiguiente optimización de la energía.

---

## Sub-lote 34 · El ajuste inducido paso a paso (figura 7-10, p. 139)

### 166

De acuerdo con el libro de Biología, ¿qué da como resultado la hidrólisis de la sacarosa?

- A. Dos monosacáridos: la glucosa y la fructosa
- B. Dos monosacáridos: la glucosa y la ribosa
- C. Un monosacárido y un aminoácido
- D. Dos disacáridos idénticos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · ajuste inducido

Este esquema representa la hidrólisis de la sacarosa (un disacárido) que da como resultado dos monosacáridos: la glucosa y la fructosa.

### 167

De conformidad con el libro de Biología, ¿en qué forma se encuentra el sitio activo antes de la interacción con el sustrato?

- A. En una forma relajada, pero capaz de reconocer específicamente a su sustrato
- B. En una forma rígida que ya encaja exactamente con el sustrato
- C. En una forma cerrada que impide el acceso del sustrato
- D. En una forma tensionada que se relaja al unirse el sustrato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · ajuste inducido

Antes de la interacción con el sustrato, el sitio activo de la enzima se encuentra en una forma relajada, pero es capaz de reconocer específicamente a su sustrato.

### 168

En relación con el libro de Biología, ¿qué provoca la reacomodación del sitio activo al producirse la interacción con el sustrato?

- A. Una tensión en la molécula del sustrato que facilita la reacción con el agua
- B. Una relajación de la molécula del sustrato que retrasa la reacción
- C. La rotura inmediata de la enzima
- D. La expulsión del sustrato sin que ocurra reacción alguna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · ajuste inducido

Al producirse la interacción, el sustrato induce un íntimo ajuste con el sitio activo. Esta reacomodación del sitio activo provoca una tensión en la molécula del sustrato que facilita la reacción con el agua.

---

## Sub-lote 35 · La regulación de la actividad enzimática (p. 139)

### 169

De acuerdo con el libro de Biología, ¿qué factores pueden afectar la velocidad de las reacciones químicas catalizadas por enzimas?

- A. La temperatura, el pH, la concentración de sustrato, la concentración de enzima y la presencia de inhibidores, entre otros
- B. Únicamente la temperatura y la presión atmosférica
- C. Únicamente la concentración de enzima
- D. El tamaño de la célula y su edad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · regulación enzimática

La velocidad de las reacciones químicas catalizadas por enzimas puede verse afectada por distintos factores, como: la temperatura, el pH, la concentración de sustrato, la concentración de enzima, la presencia de inhibidores, entre otros.

### 170

De conformidad con el libro de Biología, ¿en qué consiste el tipo de regulación que se establece a nivel de la propia síntesis de las proteínas?

- A. En la activación o desactivación de los genes que llevan la información para la síntesis de determinadas enzimas
- B. En la destrucción física de las enzimas ya sintetizadas
- C. En el cambio de temperatura del citoplasma
- D. En la sustitución de unos cofactores por otros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · regulación enzimática

Un tipo de regulación se establece a nivel de la propia síntesis de las proteínas, ya sea por activación o desactivación de los genes que llevan la información para la síntesis de determinadas enzimas.

### 171

En relación con el libro de Biología, ¿qué concepto ha originado el hecho de que distintos tipos de regulación puedan coexistir en una enzima dada?

- A. Multimodulación
- B. Multienzimación
- C. Retroalimentación
- D. Ajuste inducido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · regulación enzimática

Los distintos tipos de regulación pueden coexistir en una enzima dada, lo que ha originado el concepto de multimodulación.

---

## Sub-lote 36 · Los efectos de la temperatura (p. 139)

### 172

De acuerdo con el libro de Biología, ¿por qué la velocidad de las reacciones catalizadas por enzimas aumenta con la temperatura?

- A. Porque la probabilidad de que las moléculas de sustrato colisionen con los sitios activos es mayor
- B. Porque el calor crea nuevas moléculas de enzima
- C. Porque el calor disminuye la energía libre de la reacción
- D. Porque el calor vuelve espontáneas las reacciones que no lo son

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

La velocidad de las reacciones catalizadas por enzimas aumenta con la temperatura, ya que la probabilidad de que las moléculas de sustrato colisionen con los sitios activos es mayor.

### 173

De conformidad con el libro de Biología, ¿cada cuántos grados de aumento se duplica aproximadamente la velocidad de la mayoría de las reacciones enzimáticas?

- A. Cada 10 °C
- B. Cada 5 °C
- C. Cada 20 °C
- D. Cada 40 °C

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

La velocidad de la mayoría de las reacciones enzimáticas se duplica aproximadamente por cada 10 °C de aumento en la temperatura.

### 174

En relación con el libro de Biología, ¿por encima de qué temperatura decae rápidamente la velocidad de las reacciones enzimáticas?

- A. Por encima de los 40 °C
- B. Por encima de los 70 °C
- C. Por encima de los 20 °C
- D. Por encima de los 72 °C

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

Sin embargo, por encima de los 40 °C, esta decae rápidamente.

> Las dos cifras van juntas y se prestan a mezclarse: **cada 10 °C se duplica**,
> pero **pasados los 40 °C se desploma**. Los 70 y 72 °C son de las bacterias
> termófilas del reactivo 178, y por eso sirven de distractor.

### 175

De acuerdo con el libro de Biología, ¿por qué decae la velocidad a temperaturas altas?

- A. Porque aumentan el movimiento y la vibración de la propia molécula proteica, rompiendo enlaces relativamente frágiles que mantienen su estructura terciaria o cuaternaria
- B. Porque el sustrato se evapora antes de llegar al sitio activo
- C. Porque el calor destruye los cofactores inorgánicos
- D. Porque disminuye la probabilidad de colisión entre sustrato y enzima

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

Esto sucede porque, debido a la alta temperatura, aumentan el movimiento y la vibración de la propia molécula proteica, rompiendo enlaces relativamente frágiles que mantienen su estructura terciaria o cuaternaria, como los puentes de hidrógeno.

### 176

De conformidad con el libro de Biología, ¿qué se dice que ocurre cuando una proteína pierde su estructura tridimensional característica?

- A. Que se desnaturaliza
- B. Que se hidroliza
- C. Que se fosforila
- D. Que se oxida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

Cuando una proteína pierde su estructura tridimensional característica, se dice que se desnaturaliza.

### 177

En relación con el libro de Biología, ¿qué ocurre si la desnaturalización se torna irreversible?

- A. Las cadenas polipeptídicas quedan permanentemente inactivadas
- B. Las cadenas polipeptídicas recuperan su forma al bajar la temperatura
- C. La enzima duplica su actividad catalítica
- D. La enzima cambia de sustrato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

La desnaturalización puede tornarse irreversible, en cuyo caso las cadenas polipeptídicas quedan permanentemente inactivadas.

### 178

De acuerdo con el libro de Biología, ¿con qué coincide la temperatura óptima de cada enzima en la mayoría de los casos?

- A. Con la temperatura fisiológica
- B. Con la temperatura ambiente
- C. Con la temperatura de desnaturalización
- D. Con los 72 °C

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

Cada enzima tendrá una temperatura óptima que, en la mayoría de los casos, será coincidente con la fisiológica.

### 179

De conformidad con el libro de Biología, ¿qué enzimas tienen temperaturas óptimas cercanas a los 72 °C?

- A. Las de ciertas bacterias termófilas que viven en aguas termales con temperaturas superiores a los 70 °C
- B. Las de las células musculares de las aves y los mamíferos
- C. Las de los lisosomas de las células eucariontes
- D. Las de las bacterias que viven en aguas polares

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · temperatura y actividad enzimática

Hay enzimas que tienen temperaturas óptimas cercanas a los 72 °C, como el caso de las enzimas de ciertas bacterias termófilas que viven en aguas termales con temperaturas superiores a los 70 °C.

---

## Sub-lote 37 · Los efectos del pH (p. 139)

### 180

En relación con el libro de Biología, ¿por qué el pH del medio afecta a las enzimas?

- A. Porque son proteínas compuestas por aminoácidos que pueden captar o liberar protones según el pH del medio en el que se encuentren
- B. Porque el pH destruye directamente los enlaces covalentes de la enzima
- C. Porque el pH modifica la temperatura del citoplasma
- D. Porque el pH cambia la naturaleza química del sustrato

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · pH y actividad enzimática

Las enzimas son proteínas compuestas por aminoácidos que pueden captar o liberar protones según el pH del medio en el que se encuentren.

### 181

De acuerdo con el libro de Biología, ¿qué produce la alteración de la carga neta de cada aminoácido al tomar o ceder protones?

- A. Atracciones y repulsiones que modifican la estructura terciaria de la enzima
- B. La rotura inmediata de la cadena polipeptídica
- C. Un aumento permanente de la actividad catalítica
- D. La sustitución de unos aminoácidos por otros

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 139
**Subtema:** Metabolismo · pH y actividad enzimática

La carga neta de cada aminoácido se ve afectada al tomar o ceder protones y esto produce atracciones y/o repulsiones que modifican la estructura terciaria de la enzima.

---

## Sub-lote 38 · El pH y las enzimas del lisosoma (p. 140)

### 182

De conformidad con el libro de Biología, ¿según qué varía la sensibilidad al pH de una enzima?

- A. Según la composición de aminoácidos de la enzima en estudio
- B. Según el tamaño total de la molécula de enzima
- C. Según la temperatura del medio en que se encuentre
- D. Según la cantidad de sustrato disponible

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · pH y actividad enzimática

Como cada enzima diferente tiene una estructura primaria característica que determina su especificidad biológica, la sensibilidad al pH varía según la composición de aminoácidos de la enzima en estudio.

### 183

En relación con el libro de Biología, ¿qué participa en muchos casos en la interacción entre el sitio activo de la enzima y el sustrato?

- A. Grupos con carga neta positiva o negativa, importantes para el reconocimiento enzima-sustrato y para la estabilización de esa unión
- B. Grupos sin carga alguna, que sólo aportan volumen
- C. Iones magnesio, que sustituyen al sustrato
- D. Moléculas de agua que impiden la unión

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · pH y actividad enzimática

En muchos casos, en la interacción entre el sitio activo de la enzima y el sustrato participan grupos con carga neta positiva o negativa que son importantes tanto para el reconocimiento enzima-sustrato como para la estabilización de esa unión.

### 184

De acuerdo con el libro de Biología, en el capítulo 7 sobre el metabolismo, ¿cuántas enzimas hidrolíticas diferentes tiene el interior del lisosoma?

- A. 50
- B. 5
- C. 500
- D. 15

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · pH y actividad enzimática

El interior del lisosoma, por ejemplo, tiene 50 enzimas hidrolíticas diferentes.

### 185

De conformidad con el libro de Biología, ¿qué pH posee el interior del lisosoma?

- A. Un pH de 5,0
- B. Un pH de 7,4
- C. Un pH de 9,0
- D. Un pH de 2,0

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · pH y actividad enzimática

Estas últimas, son un ejemplo de enzimas que actúan en pH ácido, ya que el interior del lisosoma posee en pH de 5,0.

> El distractor B, 7,4, es el pH pulmonar del capítulo 5. Son los dos valores de
> pH que trae el temario y conviene no cruzarlos.

---

## Sub-lote 39 · La curva de la temperatura (figura 7-11, p. 140)

### 186

En relación con el libro de Biología, ¿a qué temperatura se alcanza la velocidad máxima de reacción en los seres humanos y otros mamíferos?

- A. A alrededor de los 40 °C
- B. A alrededor de los 37 °C
- C. A alrededor de los 60 °C
- D. A alrededor de los 72 °C

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · temperatura y actividad enzimática

En las reacciones enzimáticas que ocurren en los seres humanos (temperatura corporal 37 °C) y otros mamíferos, la velocidad máxima de reacción se alcanza a alrededor de los 40 °C.

> Trampa fina: los **37 °C** son la **temperatura corporal**, pero la velocidad
> máxima se alcanza a los **40 °C**. El libro da los dos datos en la misma frase
> y es fácil responder con el primero.

### 187

De acuerdo con el libro de Biología, ¿a qué temperatura aproximada se detiene por completo la reacción, y por qué?

- A. A los 60 °C, a raíz de la desnaturalización de la enzima
- B. A los 40 °C, a raíz de la desnaturalización de la enzima
- C. A los 72 °C, a raíz de la falta de sustrato
- D. A los 37 °C, a raíz del descenso de la energía de activación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · temperatura y actividad enzimática

Por encima de esta temperatura, la velocidad disminuye y, aproximadamente a los 60 °C, la reacción se detiene por completo, a raíz de la desnaturalización de la enzima.

### 188

De conformidad con el libro de Biología, aunque la forma de la curva sea similar para todas las reacciones enzimáticas, ¿qué varía?

- A. El intervalo de temperaturas en el cual una enzima es activa, según el tipo de organismo y la enzima particular
- B. La forma de la curva en cada tejido del mismo organismo
- C. La velocidad máxima, que es siempre distinta para cada sustrato
- D. Nada; el intervalo es idéntico en todos los organismos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · temperatura y actividad enzimática

Aunque la forma de la curva es similar para todas las reacciones enzimáticas, el intervalo de temperaturas en el cual una enzima es activa varía con el tipo de organismo y con la enzima particular.

---

## Sub-lote 40 · La inhibición enzimática (p. 140)

### 189

En relación con el libro de Biología, ¿qué son los inhibidores enzimáticos?

- A. Sustancias por cuya acción la actividad de una enzima puede estar disminuida o suprimida por completo
- B. Sustancias que aumentan la actividad de una enzima
- C. Sustancias que sustituyen a la enzima en la reacción
- D. Sustancias que aportan la energía de activación que falta

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición enzimática

La actividad de una enzima puede estar disminuida o suprimida por completo por la acción de diversas sustancias que actúan como inhibidores enzimáticos.

### 190

De acuerdo con el libro de Biología, ¿de qué dos tipos puede ser el proceso de inhibición, que ocurre en forma natural como uno de los patrones normales de la biorregulación?

- A. Reversible, que puede ser competitiva o no competitiva, e irreversible
- B. Competitiva e irreversible, únicamente
- C. Natural y artificial
- D. Alostérica y multimodulada

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición enzimática

El proceso de inhibición puede ocurrir en forma natural, constituyendo uno de los patrones normales de la biorregulación, y puede ser de dos tipos: reversible (competitiva o no competitiva) e irreversible.

### 191

De conformidad con el libro de Biología, ¿qué capacidad comparten algunos antibióticos y diversos fármacos?

- A. La capacidad de inhibición, por lo que son de gran utilidad para estudiar algunos aspectos de la acción enzimática
- B. La capacidad de sintetizar nuevas enzimas
- C. La capacidad de aumentar la temperatura corporal
- D. La capacidad de sustituir a los cofactores inorgánicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición enzimática

Algunos antibióticos y diversos fármacos comparten esta capacidad de inhibición y son de gran utilidad para estudiar algunos aspectos de la acción enzimática.

---

## Sub-lote 41 · La inhibición competitiva (p. 140)

### 192

En relación con el libro de Biología, ¿en qué consiste la inhibición competitiva y por qué recibe ese nombre?

- A. Algunos compuestos ocupan temporalmente el sitio activo de la enzima, dado que el compuesto regulador y el sustrato compiten por la unión a ese sitio
- B. El compuesto se une a un sitio distinto del sitio activo y desorganiza la estructura de la enzima
- C. El compuesto destruye la enzima de forma permanente
- D. El compuesto compite con la enzima por unirse al producto final

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición competitiva

Algunos compuestos inhiben la actividad enzimática, ocupando temporalmente el sitio activo de la enzima; esta forma de regulación se conoce como inhibición competitiva, dado que el compuesto regulador y el sustrato compiten por la unión al sitio activo.

### 193

De acuerdo con el libro de Biología, ¿de qué depende el resultado de la competencia en la inhibición competitiva, que es completamente reversible?

- A. De cuántas moléculas de cada tipo estén presentes
- B. De la temperatura del medio, únicamente
- C. Del tamaño del sitio activo de la enzima
- D. De la cantidad de producto final ya formado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición competitiva

La inhibición competitiva es completamente reversible; el resultado de la competencia en cualquier momento, en particular, depende de cuántas moléculas de cada tipo estén presentes.

### 194

De conformidad con el libro de Biología, en la serie de reacciones del ejemplo, ¿qué ocurriría si el producto final F fuera similar en estructura al producto D?

- A. F podría ocupar el sitio activo de la enzima E4, evitando que D, el sustrato normal, se una a la enzima
- B. F se uniría a D y ambos serían degradados juntos
- C. F aceleraría la acción de la enzima E4
- D. F sustituiría a la enzima E4 en la serie de reacciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición competitiva

El producto final F puede ser similar en estructura al producto D. Entonces, F podría ocupar el sitio activo de la enzima E4, evitando que D, el sustrato normal, se una a la enzima.

### 195

En relación con el libro de Biología, ¿cómo actúa el fármaco sulfanilamida sobre las bacterias?

- A. Tiene una estructura muy semejante a la del ácido paraaminobenzoico y ocupa el sitio activo de la enzima que debe convertirlo en ácido fólico
- B. Destruye directamente la pared celular de la bacteria
- C. Impide que la bacteria absorba ácido fólico del medio
- D. Se une al ADN bacteriano e impide su duplicación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición competitiva

El fármaco sulfanilamida tiene una estructura muy semejante a la del PABA y ocupa el sitio activo de la enzima que debe convertir el PABA en ácido fólico.

### 196

De acuerdo con el libro de Biología, ¿por qué la célula animal no sufre daño alguno con ese fármaco, mientras que la bacteria muere?

- A. Porque no sintetiza dicha vitamina, sino que la obtiene de los alimentos
- B. Porque sintetiza el doble de ácido fólico que la bacteria
- C. Porque su sitio activo es más grande y el fármaco no encaja
- D. Porque no necesita ácido fólico para su metabolismo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición competitiva

Sin ácido fólico, la bacteria muere, mientras que la célula animal –que no sintetiza dicha vitamina, sino que la obtiene de los alimentos– no sufre daño alguno.

> El mejor ejemplo del capítulo para un aspirante a médico: así funciona un
> antibiótico. Ataca una vía metabólica que **la bacteria tiene y nosotros no**,
> y por eso mata a una sin tocar a la otra.

---

## Sub-lote 42 · La inhibición no competitiva (p. 140)

### 197

De conformidad con el libro de Biología, ¿en qué consiste el mecanismo de inhibición no competitiva?

- A. En la unión del compuesto a un sitio de la enzima distinto del sitio activo, lo que desorganiza su estructura terciaria y la inactiva
- B. En la unión del compuesto al propio sitio activo, desplazando al sustrato
- C. En la destrucción de los cofactores inorgánicos de la enzima
- D. En el bloqueo de los genes que sintetizan la enzima

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición no competitiva

El mecanismo de inhibición no competitiva consiste en la unión del compuesto a un sitio de la enzima distinto del sitio activo, lo que desorganiza su estructura terciaria y la inactiva.

> El par que define todo el apartado: la **competitiva** se mete **en** el sitio
> activo y compite con el sustrato; la **no competitiva** se une **en otro sitio**
> y deforma la enzima. Ni siquiera necesita parecerse al sustrato.

### 198

En relación con el libro de Biología, ¿qué aminoácido con grupo sulfhidrilo contienen muchas enzimas?

- A. La cisteína
- B. La adenina
- C. La ribosa
- D. La nicotinamida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición no competitiva

Muchas enzimas contienen, entre sus aminoácidos, a la cisteína, que tiene un grupo sulfhidrilo (SH).

### 199

De acuerdo con el libro de Biología, ¿qué hace el plomo con los grupos sulfhidrilo de las enzimas?

- A. Forma enlaces covalentes con esos grupos
- B. Forma enlaces iónicos débiles y reversibles con esos grupos
- C. Sustituye esos grupos por grupos fosfato
- D. Impide que esos grupos se formen durante la síntesis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 140
**Subtema:** Metabolismo · inhibición no competitiva

El plomo forma enlaces covalentes con estos grupos.

---

**Reactivos en este archivo:** 199
