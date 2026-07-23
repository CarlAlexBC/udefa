# Biología · Capítulo 12 · El flujo de información genética y la síntesis de proteínas

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Este archivo continúa el temario `BIO-01-2026`.** Cerrados los capítulos 3
(221 reactivos), 4 (190), 5 (157), 7 (240), 8 (149) y 11 (162).

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro
trae capa de texto). Los recuadros "ENSAYO" van con `render.py` (su capa de texto
es lorem ipsum). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado con render.** La portadilla del capítulo
12 está en la **hoja 291** (página impresa 245): trae el apartado de apertura
"Biología en contexto social · Las metáforas y el lenguaje de la genética", el
título del capítulo y el epígrafe de Evelyn Fox Keller. **El cuerpo empieza en la
hoja 292** (p. 246), con la sección "Evolución del concepto de gen". Las páginas se
leyeron de la hoja, no se calcularon.

## Cobertura actual

Cubiertas las páginas impresas **246 a 248**: la evolución del concepto de gen (los
biólogos de la década de 1940 y las enzimas; George Beadle y su hipótesis sobre el
color de ojos de *Drosophila*; el experimento de Beadle y Tatum en 1941 con el moho
rosado del pan *Neurospora* irradiado con rayos X, fig. 12-1; la síntesis "un gen:
una enzima" y su evolución a "un gen: una proteína" y a "un gen: un polipéptido");
el dogma central de la biología (Francis Crick, 1957; qué establece, la fig. 12-2 y
por qué "dogma" fue un nombre poco acertado / "hipótesis central"); las excepciones
al dogma (Temin 1962 y los virus con ARN, la transcriptasa inversa de Baltimore en
1970, el Nobel de 1975); y el arranque de la transcripción (los tres tipos de ARN
—mensajero, ribosomal y de transferencia— y sus funciones, qué es la transcripción,
la ARN polimerasa, el promotor y el terminador, Jacob y Monod en 1960, y la
definición de traducción).

**Pendiente:** el capítulo 12 está EN CURSO; sigue desde la página impresa 249 (hoja 295) en adelante. De la materia de Biología, además del resto de este capítulo, siguen sin empezar los capítulos 31, 32, 35, 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta y toma el párrafo que le sigue hasta el
> primer renglón en blanco; si desaparece, o si empieza con "ninguno", Biología se
> reporta como cerrada. Por eso el capítulo en curso sostiene, en un solo párrafo,
> la lista de los que faltan.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · La evolución del concepto de gen (p. 246)

### 1

De acuerdo con el libro de Biología, ¿en qué está codificada la información genética, según lo que establecieron las investigaciones de la primera mitad del siglo XX?

- A. En la secuencia de nucleótidos de la molécula de ADN
- B. En la secuencia de aminoácidos de las proteínas
- C. En la estructura de los ribosomas
- D. En el número de cromosomas de la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

Las investigaciones realizadas durante la primera mitad del siglo XX permitieron establecer que los genes están en los cromosomas y que la información genética está codificada en un lenguaje particular, en la secuencia de nucleótidos de la molécula de ADN.

### 2

De acuerdo con el libro de Biología, ¿de qué estaban completamente convencidos los biólogos en la década de 1940 respecto de las actividades bioquímicas de la célula?

- A. De que la célula necesita enzimas para sus actividades bioquímicas
- B. De que la célula no requiere enzimas para funcionar
- C. De que las enzimas están hechas de ADN
- D. De que las actividades bioquímicas no dependen de proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

En la década de 1940, los biólogos estaban completamente convencidos de que la célula necesita enzimas para sus actividades bioquímicas.

### 3

De acuerdo con el libro de Biología, ¿de qué depende indirectamente la especificidad de una enzima?

- A. De su estructura primaria, es decir, de la secuencia lineal de los aminoácidos en la molécula de proteína
- B. Del número de cromosomas de la célula
- C. De la cantidad de ADN presente en el núcleo
- D. De la temperatura del medio en que actúa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

La especificidad de una enzima depende indirectamente de su estructura primaria, es decir: de la secuencia lineal de los aminoácidos en la molécula de proteína.

### 4

De acuerdo con el libro de Biología, ¿qué hipótesis había desarrollado George Beadle sobre las variaciones en el color de los ojos de las moscas *Drosophila*?

- A. Que cada variación se debía al cambio de una sola enzima
- B. Que cada variación se debía a un cambio en varios cromosomas
- C. Que las variaciones en el color de ojos no eran hereditarias
- D. Que el color de los ojos no dependía de los genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

Beadle había desarrollado la hipótesis de que cada variación en el color de los ojos de las moscas se debía al cambio de una sola enzima.

### 5

De acuerdo con el libro de Biología, ¿qué modelo experimental escogieron Beadle y Tatum en 1941 para contrastar la hipótesis?

- A. El moho rosado del pan, *Neurospora*
- B. La mosca de la fruta, *Drosophila*
- C. La planta de guisante, *Pisum sativum*
- D. La bacteria *Escherichia coli*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

En 1941, Beadle y el bioquímico estadounidense Edgard L. Tatum (1909-1975) escogieron un nuevo modelo experimental para contrastar esa hipótesis: el moho rosado del pan, *Neurospora*.

### 6

De acuerdo con el libro de Biología, ¿qué hicieron Beadle y Tatum con los mohos para aumentar la tasa de mutación?

- A. Los irradiaron con rayos X
- B. Los expusieron a temperaturas muy altas
- C. Los trataron con antibióticos
- D. Los cruzaron entre distintas especies

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

Beadle y Tatum irradiaron los mohos con rayos X para aumentar la tasa de mutación y luego probaron la capacidad de los mutantes para crecer en un medio con un mínimo de nutrientes.

### 7

De acuerdo con el libro de Biología, ¿qué síntesis para definir el concepto de gen permitieron formular los resultados de los experimentos de Beadle y Tatum?

- A. "Un gen especifica una enzima"
- B. "Un gen especifica un cromosoma"
- C. "Una enzima especifica un gen"
- D. "Un gen especifica un aminoácido"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

Los resultados de estos experimentos les permitieron a Beadle y Tatum corroborar la hipótesis inicial de Beadle y formular una síntesis que permitiera definir el concepto de gen: "un gen especifica una enzima".

### 8

De acuerdo con el libro de Biología, ¿por qué se amplió la idea "un gen: una enzima" a "un gen: una proteína"?

- A. Porque muchas proteínas no son enzimas: algunas son hormonas, otras estructurales y otras transportadoras
- B. Porque las enzimas no están especificadas en los genes
- C. Porque todas las proteínas son enzimas
- D. Porque un gen especifica muchas enzimas a la vez

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

Muchas proteínas no son enzimas; algunas son hormonas, como la insulina; o tienen función estructural, como el colágeno, mientras que otras son transportadoras, como los canales iónicos. En consecuencia, la idea "un gen: una enzima" se generalizó ampliando la definición de gen a "un gen: una proteína".

### 9

De acuerdo con el libro de Biología, ¿por qué se modificó la definición a "un gen: un polipéptido"?

- A. Porque se verificó que varias proteínas están formadas por más de un polipéptido
- B. Porque las proteínas no contienen polipéptidos
- C. Porque cada gen especifica varias proteínas distintas
- D. Porque los polipéptidos no tienen relación con los genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

Cuando se verificó que varias proteínas están formadas por más de un polipéptido, se modificó nuevamente la definición a la menos memorable "un gen: un polipéptido".

### 10

De acuerdo con el libro de Biología, ¿cuál fue la secuencia en que evolucionó el concepto de gen?

- A. Desde "un gen: una enzima" a "un gen: una proteína" y a "un gen: un polipéptido"
- B. Desde "un gen: un polipéptido" a "un gen: una proteína" y a "un gen: una enzima"
- C. Desde "un gen: una proteína" a "un gen: una enzima" y a "un gen: un cromosoma"
- D. Desde "un gen: un cromosoma" a "un gen: una enzima" y a "un gen: una proteína"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · concepto de gen

El concepto de gen evolucionó desde "un gen: una enzima" a "un gen: una proteína" y a "un gen: un polipéptido".

---

## Sub-lote 2 · El dogma central de la biología (p. 246)

### 11

De acuerdo con el libro de Biología, ¿quién estableció en 1957 el llamado dogma central de la biología?

- A. Francis Crick
- B. George Beadle
- C. Edgard Tatum
- D. Thomas Morgan

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · dogma central

En 1957, Francis Crick dio una conferencia en la Sociedad Británica de Biología Experimental en la que estableció el llamado dogma central de la biología.

### 12

De acuerdo con el libro de Biología, ¿qué establece el dogma central de la biología sobre el flujo de la información?

- A. Que la información puede fluir de un ácido nucleico a una proteína, pero no de una proteína a otra proteína ni de una proteína a un ácido nucleico
- B. Que la información puede fluir de una proteína a un ácido nucleico
- C. Que la información fluye únicamente entre proteínas
- D. Que la información puede fluir de una proteína a otra proteína

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · dogma central

El dogma central establece que la información puede fluir de un ácido nucleico a una proteína, pero no de una proteína a otra proteína ni de una proteína a un ácido nucleico.

### 13

De acuerdo con el libro de Biología, ¿por qué "dogma" fue una denominación poco acertada para este principio?

- A. Porque un dogma es una premisa que no se pone en duda ni se discute, y la ciencia se caracteriza por el cuestionamiento permanente
- B. Porque un dogma es una premisa que siempre se pone en discusión
- C. Porque el dogma central resultó ser falso poco después
- D. Porque Francis Crick no era genetista

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 246
**Subtema:** flujo de información genética · dogma central

"Dogma" fue una denominación poco acertada, ya que un dogma se refiere a una premisa que no se pone en duda ni se discute, y la ciencia justamente se caracteriza por ser un proceso abierto al cuestionamiento permanente de sus propias producciones.

---

## Sub-lote 3 · El experimento de Beadle y Tatum y el dogma en imágenes (figs. 12-1 y 12-2, p. 247)

### 14

De acuerdo con el libro de Biología, según la figura 12-1, ¿qué propusieron Beadle y Tatum a partir de su experimento con *Neurospora*?

- A. Que un cambio en un solo gen da como resultado un cambio en una sola enzima
- B. Que un cambio en una sola enzima cambia todos los genes
- C. Que las mutaciones no afectan a las enzimas
- D. Que un solo gen produce muchas enzimas distintas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 247
**Subtema:** flujo de información genética · concepto de gen

Sobre la base de esta experiencia, Beadle y Tatum propusieron que un cambio en un solo gen da como resultado un cambio en una sola enzima.

### 15

De acuerdo con el libro de Biología, según la figura 12-2, ¿en qué dirección propuso Francis Crick que fluye la información?

- A. En una única dirección: del ADN a las proteínas
- B. En una única dirección: de las proteínas al ADN
- C. En ambas direcciones entre el ADN y las proteínas
- D. Únicamente de una proteína a otra proteína

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 247
**Subtema:** flujo de información genética · dogma central

Francis Crick propuso que la información fluye en una única dirección: del ADN a las proteínas.

---

## Sub-lote 4 · Las excepciones al dogma central (p. 248)

### 16

De acuerdo con el libro de Biología, ¿qué reveló en 1962 el virólogo Howard M. Temin como excepción al dogma?

- A. Que algunos virus contienen ARN en lugar de ADN como material genético
- B. Que todos los virus contienen ADN como material genético
- C. Que las proteínas pueden formar ADN
- D. Que el ADN no es material genético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · dogma central

Una de esas excepciones fue revelada en 1962 por el virólogo estadounidense Howard M. Temin (1934-1994), quien encontró que algunos virus contienen ARN en lugar de ADN como material genético.

### 17

De acuerdo con el libro de Biología, ¿cómo llamaron a la enzima que aislaron en 1970 Temin y Baltimore, y por qué?

- A. Transcriptasa inversa o reversa, porque invierte el modelo de transcripción postulado por el dogma
- B. ARN polimerasa, porque sintetiza moléculas de ARN
- C. ADN polimerasa, porque replica el ADN
- D. Traductasa, porque invierte la traducción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · dogma central

Temin y otros investigadores, dirigidos por el virólogo estadounidense David Baltimore, en 1970 aislaron la enzima en cuestión a la que llamaron transcriptasa inversa o reversa, ya que invierte el modelo de transcripción postulado por el dogma.

### 18

De acuerdo con el libro de Biología, respecto de la reversibilidad, ¿en qué se diferencia la traducción de la transcripción?

- A. La transcripción puede ser reversible, pero la traducción no: no se sintetiza material genético a partir de proteínas
- B. La traducción puede ser reversible, pero la transcripción no
- C. Ambas son siempre reversibles
- D. Ninguna de las dos puede ser reversible

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · dogma central

Si bien este es un ejemplo de que la transcripción puede ser reversible, hasta hoy no se ha encontrado que esto ocurra con la traducción; es decir, no se sintetiza material genético a partir de proteínas.

### 19

De acuerdo con el libro de Biología, ¿quiénes recibieron el Premio Nobel de Medicina en 1975 por estas investigaciones?

- A. Baltimore, Temin y Renato Dulbecco
- B. François Jacob, Jacques Monod y Francis Crick
- C. George Beadle, Edgard Tatum y Thomas Morgan
- D. James Watson, Francis Crick y Rosalind Franklin

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · dogma central

Baltimore, Temin y el director de ambos, el estadounidense Renato Dulbecco, recibieron el Premio Nobel de Medicina en 1975 por sus investigaciones.

### 20

De acuerdo con el libro de Biología, tras ser criticado por usar la palabra "dogma", ¿cómo reconoció Crick que hubiera sido más adecuado llamar a su teoría?

- A. "Hipótesis central"
- B. "Ley central"
- C. "Teoría del ADN"
- D. "Principio de Crick"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · dogma central

Después de haber publicado su teoría, Crick fue criticado por usar la palabra "dogma". Más tarde, él mismo reconoció que hubiera sido más adecuado llamarla "hipótesis central".

---

## Sub-lote 5 · La transcripción y los tres tipos de ARN (p. 248)

### 21

De acuerdo con el libro de Biología, ¿qué tres tipos de ARN intervienen en la síntesis de proteínas o traducción?

- A. El mensajero (ARNm), el ribosomal (ARNr) y el de transferencia (ARNt)
- B. El mensajero, el mitocondrial y el nuclear
- C. El polimérico, el ribosomal y el catalítico
- D. El de transcripción, el de traducción y el de replicación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

En la síntesis de proteínas o traducción intervienen tres tipos de ARN: el mensajero (ARNm), que es una copia del gen que codifica el polipéptido que se va a sintetizar; el ribosomal (ARNr), que forma parte de los ribosomas; y el de transferencia (ARNt), encargado de transportar aminoácidos al ribosoma.

### 22

De acuerdo con el libro de Biología, ¿qué es el ARN mensajero (ARNm)?

- A. Una copia del gen que codifica el polipéptido que se va a sintetizar
- B. El ARN que forma parte de los ribosomas
- C. El ARN encargado de transportar aminoácidos al ribosoma
- D. Una enzima que separa las dos cadenas del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

El mensajero (ARNm) es una copia del gen que codifica el polipéptido que se va a sintetizar.

### 23

De acuerdo con el libro de Biología, ¿cuál es la función del ARN de transferencia (ARNt)?

- A. Transportar aminoácidos al ribosoma
- B. Formar parte de los ribosomas
- C. Ser una copia del gen que codifica el polipéptido
- D. Separar las dos cadenas del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

El de transferencia (ARNt) es el encargado de transportar aminoácidos al ribosoma.

### 24

De acuerdo con el libro de Biología, ¿cuál es la función del ARN ribosomal (ARNr)?

- A. Formar parte de los ribosomas
- B. Transportar aminoácidos al ribosoma
- C. Ser una copia del gen que codifica el polipéptido
- D. Reconocer el terminador del gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

El ribosomal (ARNr) forma parte de los ribosomas.

> Los tres ARN son vecinos que se confunden (reactivos 22, 23 y 24): el
> **mensajero** copia el gen, el **ribosomal** forma parte de los ribosomas y el de
> **transferencia** transporta aminoácidos al ribosoma. Cada función es el
> distractor de las otras dos.

### 25

De acuerdo con el libro de Biología, ¿cómo se llama el proceso de copiado de los genes por el que se producen los tres tipos de ARN, y qué papel cumple?

- A. Transcripción; en todas las células es el paso previo a la síntesis de proteínas
- B. Traducción; es el paso final de la síntesis de proteínas
- C. Replicación; duplica el ADN antes de que la célula se divida
- D. Mutación; cambia la secuencia del gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

Todos ellos se producen de la misma manera: mediante un proceso de copiado de los diferentes genes llamado transcripción. En todas las células, la transcripción es el paso previo a la síntesis de proteínas.

### 26

De acuerdo con el libro de Biología, a grandes rasgos, ¿qué hace la enzima ARN polimerasa en la transcripción?

- A. Reconoce el inicio de un gen, separa las dos cadenas del ADN y, usando solo una hebra como molde, sintetiza una molécula de ARN complementaria
- B. Une los aminoácidos entre sí para formar la proteína
- C. Transporta los aminoácidos hasta el ribosoma
- D. Copia a la vez las dos hebras del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

Una enzima llamada ARN polimerasa reconoce el inicio de un gen, separa las dos cadenas del ADN y, usando solo una de las hebras como molde, sintetiza una molécula de ARN complementaria a ella.

### 27

De acuerdo con el libro de Biología, en cada gen, ¿cómo se llaman la secuencia que indica dónde empieza y la que indica dónde termina la transcripción?

- A. El promotor (señal de inicio) y el terminador (señal de fin)
- B. El terminador (señal de inicio) y el promotor (señal de fin)
- C. El codón (inicio) y el anticodón (fin)
- D. El exón (inicio) y el intrón (fin)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

Cada uno presenta una secuencia que indica dónde empieza, llamada promotor o secuencia promotora, que funciona como señal de inicio de la transcripción, y otra que indica dónde termina, el terminador o señal de fin de la transcripción.

### 28

De acuerdo con el libro de Biología, ¿quiénes propusieron en 1960 la existencia del ARN mensajero?

- A. Los biólogos franceses François Jacob y Jacques Monod
- B. George Beadle y Edgard Tatum
- C. Howard Temin y David Baltimore
- D. James Watson y Francis Crick

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · transcripción

La existencia del ARN mensajero fue propuesta en 1960 por los biólogos franceses François Jacob (1920-2013) y Jacques Monod (1910-1976).

### 29

De acuerdo con el libro de Biología, ¿qué es la traducción?

- A. El proceso mediante el cual los aminoácidos se ensamblan en una secuencia especificada por la secuencia de nucleótidos del ARNm
- B. El copiado de un gen para producir una molécula de ARN
- C. La duplicación del ADN antes de la división celular
- D. La separación de las dos cadenas del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 248
**Subtema:** flujo de información genética · traducción

La traducción es el proceso mediante el cual los aminoácidos se ensamblan en una secuencia que está especificada por la secuencia de nucleótidos del ARNm.

---

**Reactivos en este archivo:** 29
