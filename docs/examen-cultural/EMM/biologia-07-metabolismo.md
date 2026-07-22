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

Cubiertas las páginas impresas **126 a 132**:

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

**Pendiente:** del capítulo 7, las páginas impresas 133 a 144 — el recuadro 7-1
sobre oxidorreducción, y lo que siga hasta el cierre del capítulo; queda por
decidir el apartado "Biología en contexto social" de las páginas 125–126. De la
materia siguen sin empezar los capítulos 8, 11, 12, 31, 32, 35, 36 y 37.

> **Ojo al escribir aquí:** el generador de `ESTADO.md` busca la cadena exacta
> `**Pendiente:**` y se queda con el párrafo que le sigue hasta el primer renglón
> en blanco. Si se parte en viñetas o se le cambia el nombre, `ESTADO.md` da el
> archivo por **no declarado** y cuenta la materia como cerrada. Ya pasó el 22 jul
> 2026 en el capítulo 5.

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

**Reactivos en este archivo:** 82
