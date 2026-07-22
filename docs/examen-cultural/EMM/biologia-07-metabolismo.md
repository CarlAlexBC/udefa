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

Cubiertas las páginas impresas **126 a 128**:

- La vida y el flujo de energía del sol; la célula como transformador de energía;
  el metabolismo y el origen griego de la palabra "energía".
- Las transformaciones energéticas en los seres vivos: la bioluminiscencia de las
  luciérnagas y los dinoflagelados, la visión y los fotopigmentos, las células
  vegetales y las proteínas musculares.
- La termodinámica y el experimento de Joule; qué es un sistema aislado.
- La primera ley de la termodinámica y los sistemas biológicos abiertos.

**Pendiente:** del capítulo 7, las páginas impresas 129 a 144 — la segunda ley de
la termodinámica (la que cita el Anexo "H"), y lo que siga hasta el cierre del
capítulo; queda por decidir el apartado "Biología en contexto social" de las
páginas 125–126. De la materia siguen sin empezar los capítulos 8, 11, 12, 31,
32, 35, 36 y 37.

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

**Reactivos en este archivo:** 20
