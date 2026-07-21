# Biología · Capítulo 3 · Origen de la vida

**Plantel:** Escuela Militar de Medicina · **Materia:** `BIO-01-2026`
**Aplica a:** Curso de Formación de Médico Cirujano Militar.

## Libro

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**.

**Edición verificada** contra la portadilla y la página legal (hojas 5 y 6 del
PDF): dice "OCTAVA EDICIÓN" y "Médica Panamericana", con ISBN 978-950-06-9669-2.
**Coincide con el temario**, que pide la 8ª edición.

**Discrepancia menor de año, documentada.** La página legal fecha el ejemplar en
**2021** ("Buenos Aires: Médica Panamericana, 2021") mientras el temario y el
Anexo "H" lo citan como **2022**. Mismo autor, mismo título, misma editorial,
misma edición y **la paginación coincide con el Anexo "H"** (ver abajo), así que
es el libro correcto. En las referencias se escribe **2022**, que es como lo cita
el examen oficial.

**Desfase de páginas: +46.** La hoja del PDF va 46 adelante de la página impresa
(hoja 175 = página impresa 129). No se calculó: se leyó el folio impreso en ocho
hojas repartidas por todo el libro —120, 175, 200, 300, 500, 700, 900 y 1100— y
el desfase es constante en las ocho.

#### La paginación está verificada contra el Anexo "H"

El Anexo "H" de la convocatoria 2026 trae **dos ejemplos de Biología** con su
página, y es la evidencia más fuerte disponible:

| Ejemplo del Anexo "H" | Página que declara | Dónde cae con desfase +46 |
|---|---|---|
| "La segunda ley de la termodinámica establece que existe una dirección hacia la cual cualquier sistema fuera del equilibrio tiende a desplazarse" | 129 | hoja 175 — **coincide** |
| "Los ribosomas son estructuras en las que ocurre el acoplamiento de los aminoácidos durante la síntesis de proteínas" | 71 | cap. 4, que empieza en la 61 — **coherente** |

La frase de los ribosomas no se localizó con búsqueda literal (el Anexo la
reformula), pero la página 71 cae dentro del capítulo 4, que es donde el libro
trata la organización de la célula. Ambas referencias son consistentes.

## Este libro SÍ trae capa de texto

A diferencia de los cuatro libros del HCM, que son escaneos, el Curtis trae el
texto embebido. **No hay que renderizar a imagen ni leer con los ojos**: se
extrae con `docs/examen-cultural/extraer.py`, que además limpia el repintado de
los títulos.

```
python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja+n> --desfase=46
```

Es más rápido y más fiel para citar literal, porque la cita no depende de leer
bien una imagen.

## Alcance del temario

El temario `BIO-01-2026` pide **doce capítulos** en tres secciones:

| Sección | Capítulos | Páginas impresas |
|---|---|---|
| II · La unidad de la vida | 3, 4, 5, 7, 8 | 32, 61, 89, 127, 147 |
| III · Patrones y procesos de la herencia | 11, 12 | 213, 247 |
| VI · Biología de los animales | 31, 32, 35, 36, 37 | 741, 757, 829, 843, 857 |

Este archivo cubre el **capítulo 3 · Origen de la vida: la formación de las
primeras células**, que va de la página impresa **32 a la 60**.

## Cobertura actual

Cubiertas las páginas impresas **35 a 37**:

- La formación de los primeros átomos tras el Big Bang y el origen del sistema
  solar.
- Qué caracteriza a los sistemas vivos frente a los no vivos.
- La hipótesis de Oparin y Haldane, y la evolución química.
- Los dos consensos sobre la Tierra primitiva y las fuentes de energía.
- El aporte experimental de Stanley Miller.

**Pendiente:** el resto del capítulo 3 (pp. 38–60) y los capítulos 4, 5, 7, 8,
11, 12, 31, 32, 35, 36 y 37.

## Criterio: teoría sobre práctica

**Decisión de Carlo (20 jul 2026):** el examen cultural es teórico. Se
privilegian las **definiciones, fechas y procesos** sobre los cálculos.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". El reactivo reproduce el libro
**exacto**: la opción correcta y la justificación son cita textual, sin
parafrasear ni bajar la dificultad. Cuatro opciones del mismo tipo y magnitud.

El enunciado **alterna las tres fórmulas del Anexo "H"** — "De acuerdo con",
"De conformidad con" y "En relación con" —, y la correcta se escribe siempre
en A porque el importador baraja las opciones.

---

## Sub-lote 1 · Del Big Bang a la Tierra (p. 35)

### 1

De acuerdo con el libro de Biología, ¿a cuánto habría descendido la temperatura alrededor de 100 segundos después del Big Bang?

- A. A 1000 millones de grados Celsius
- B. A 2500 grados Celsius
- C. A 100 millones de grados Celsius
- D. A 5000 millones de grados Celsius

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · formación de los átomos

Alrededor de 100 segundos después del Big Bang, la temperatura habría descendido a 1000 millones de grados Celsius.

### 2

De conformidad con el libro de Biología, ¿qué dos tipos de partículas estables habrían existido en ese momento?

- A. Los protones y los electrones
- B. Los protones y los neutrones
- C. Los electrones y los neutrones
- D. Los átomos y las moléculas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · formación de los átomos

En ese momento habrían existido dos tipos de partículas estables, los protones y los electrones.

### 3

En relación con el libro de Biología, ¿qué se habría formado cuando el Universo alcanzó unos 2500 ºC?

- A. Los primeros átomos de hidrógeno
- B. Los primeros átomos de helio
- C. Los primeros átomos de oxígeno
- D. Las primeras moléculas orgánicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · formación de los átomos

Cuando el Universo alcanzó unos 2500 ºC, los núcleos y sus protones de carga positiva atrajeron a pequeñas partículas livianas de carga negativa —los electrones— que se movían rápidamente alrededor de ellos. Así, se habrían formado los primeros átomos de hidrógeno.

### 4

De acuerdo con el libro de Biología, ¿qué elemento se originó como resultado de la fusión de los átomos de hidrógeno?

- A. El helio
- B. El oxígeno
- C. El carbono
- D. El nitrógeno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · formación de los átomos

Como resultado de la fusión de estos átomos, se originó el helio y a partir de él se formaron el oxígeno y el carbono.

> El orden importa: del hidrógeno sale el **helio**, y del helio salen el oxígeno
> y el carbono. Los distractores son los elementos del paso siguiente.

### 5

De conformidad con el libro de Biología, ¿mediante qué procesos se habrían originado todos los elementos que hoy existen en el Universo?

- A. Mediante procesos nucleares de fisión y fusión
- B. Mediante reacciones de condensación
- C. Mediante procesos de evolución química
- D. Mediante descargas eléctricas y radiación ultravioleta

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · formación de los átomos

De esta manera, mediante procesos nucleares de fisión y fusión, se habrían originado todos los elementos que hoy existen en el Universo.

### 6

En relación con el libro de Biología, ¿hace cuántos años nació la estrella que es nuestro Sol, según calculan los cosmólogos?

- A. Hace unos 5000 millones de años
- B. Hace unos 4600 millones de años
- C. Hace unos 1000 millones de años
- D. Hace unos 2500 millones de años

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · origen del sistema solar

Hace unos 5000 millones de años, según calculan los cosmólogos, nació la estrella que es nuestro Sol.

### 7

De acuerdo con el libro de Biología, ¿hace aproximadamente cuántos años comenzaron a formarse los planetas del sistema solar?

- A. Hace aproximadamente 4600 millones de años
- B. Hace aproximadamente 5000 millones de años
- C. Hace aproximadamente 3600 millones de años
- D. Hace aproximadamente 6000 millones de años

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 35
**Subtema:** Origen de la vida · origen del sistema solar

Se ha postulado que hace aproximadamente 4600 millones de años, los restos de gas y de polvo que giraban alrededor de una estrella recién constituida, el Sol, comenzaron a condensarse y a formar los planetas que hoy constituyen el sistema solar.

> Par de cifras vecinas que se confunden: el **Sol** nace hace 5000 millones de
> años y los **planetas** se forman hace 4600 millones. Cada una es el distractor
> de la otra (ver reactivo 6).

---

## Sub-lote 2 · Qué distingue a lo vivo (p. 36)

### 8

De conformidad con el libro de Biología, ¿existe una definición simple de qué es la vida?

- A. No, es un concepto abstracto que designa aquello que caracteriza a los organismos vivos
- B. Sí, es la capacidad de reproducirse y evolucionar
- C. Sí, es la presencia de una membrana y de enzimas
- D. Sí, es la capacidad de intercambiar materia y energía con el ambiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · qué es la vida

En realidad, no existe una definición simple de qué es la vida. Este es un concepto abstracto que designa aquello que caracteriza a los organismos vivos y que los diferencia de los objetos no vivos.

> Los tres distractores son características que el libro **sí** atribuye a los
> sistemas vivos. Lo que el reactivo pregunta es si alguna de ellas basta como
> definición, y el libro dice que no.

### 9

En relación con el libro de Biología, ¿para qué sirve la membrana de las primeras formas de vida?

- A. Para intercambiar materia y energía con el medio circundante y, a la vez, separarse de este manteniendo su identidad bioquímica
- B. Únicamente para separarse del medio circundante e impedir todo intercambio
- C. Para producir las enzimas de las que depende la vida
- D. Para transmitir el sistema de información a las siguientes generaciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · características de lo vivo

La existencia de una membrana a través de la cual intercambian materia y energía con el medio circundante. A la vez, las separa de este manteniendo, de esa manera, su identidad bioquímica: los procesos que ocurren en el interior celular son diferentes a los que suceden en el exterior.

### 10

De acuerdo con el libro de Biología, ¿cómo se llaman las proteínas complejas del interior celular que son esenciales para que se produzcan las reacciones químicas de las que depende la vida?

- A. Enzimas
- B. Ribosomas
- C. Membranas
- D. Aminoácidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · características de lo vivo

La presencia de proteínas complejas en el interior celular, llamadas enzimas, que son esenciales para que se produzcan las reacciones químicas de las que depende la vida.

---

## Sub-lote 3 · Oparin, Haldane y la evolución química (pp. 36–37)

### 11

De conformidad con el libro de Biología, ¿quiénes propusieron el primer conjunto de hipótesis contrastables acerca del origen de la vida?

- A. El bioquímico ruso A. I. Oparin y el químico inglés J. B. S. Haldane
- B. El bioquímico estadounidense Stanley Miller y el químico inglés J. B. S. Haldane
- C. El bioquímico ruso A. I. Oparin y el biólogo J. Craig Venter
- D. El químico inglés J. B. S. Haldane y el bioquímico estadounidense Stanley Miller

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · Oparin y Haldane

El primer conjunto de hipótesis contrastables acerca del origen de la vida fue propuesto por el bioquímico ruso A. I. Oparin (1894-1980) y por el químico inglés J. B. S. Haldane (1892-1964).

> Ojo con las nacionalidades y los oficios: Oparin es **ruso y bioquímico**;
> Haldane, **inglés y químico**; Miller, **estadounidense y bioquímico**. El
> libro los nombra así y los distractores los cruzan.

### 12

En relación con el libro de Biología, ¿cómo trabajaron Oparin y Haldane?

- A. En forma independiente, cada uno en su país de origen y sin conocimiento del trabajo del otro
- B. En colaboración estrecha, intercambiando resultados por correspondencia
- C. En el mismo laboratorio, bajo la dirección de Stanley Miller
- D. En forma independiente, pero conociendo cada uno el trabajo del otro

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · Oparin y Haldane

Quienes trabajaban en forma independiente, cada uno de ellos en su país de origen y sin conocimiento del trabajo del otro. De manera convergente y contemporánea.

### 13

De acuerdo con el libro de Biología, ¿cómo se llamó el largo período de frecuentes reacciones químicas que precedió al origen de la vida?

- A. Evolución química
- B. Condensación
- C. Evolución biológica
- D. Síntesis prebiótica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · evolución química

Los científicos postularon que el origen de la vida fue precedido por un largo período caracterizado por la existencia de frecuentes reacciones químicas entre los compuestos presentes en la atmósfera y los mares de la Tierra primitiva. A este largo proceso lo llamaron evolución química.

### 14

De conformidad con el libro de Biología, ¿qué había en la Tierra primitiva respecto del oxígeno en forma gaseosa?

- A. Muy poco o nada, tanto en la atmósfera como disuelto en el agua
- B. Una concentración semejante a la actual en la atmósfera
- C. Abundante oxígeno disuelto en el agua, pero nada en la atmósfera
- D. Abundante oxígeno en la atmósfera, pero nada disuelto en el agua

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · la Tierra primitiva

En la Tierra primitiva había muy poco o nada de oxígeno en forma gaseosa, tanto en la atmósfera como disuelto en el agua.

### 15

En relación con el libro de Biología, ¿cuáles son los cuatro elementos que constituyen actualmente más del 95% de los tejidos vivos?

- A. Hidrógeno, oxígeno, carbono y nitrógeno
- B. Hidrógeno, helio, carbono y nitrógeno
- C. Oxígeno, carbono, nitrógeno y fósforo
- D. Hidrógeno, oxígeno, carbono y azufre

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · la Tierra primitiva

En la atmósfera y en las aguas de la Tierra primitiva, los cuatro elementos (hidrógeno, oxígeno, carbono y nitrógeno) que constituyen actualmente más del 95% de los tejidos vivos estaban disponibles.

### 16

De acuerdo con el libro de Biología, ¿en qué formas era abundante la energía según el modelo de la Tierra primitiva?

- A. Calor, rayos, radiactividad y radiaciones provenientes del Sol
- B. Únicamente calor y radiaciones provenientes del Sol
- C. Únicamente rayos y radiactividad
- D. Calor, presión atmosférica y actividad volcánica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · la Tierra primitiva

El modelo propone que la energía era abundante en forma de calor, rayos (descargas eléctricas), radiactividad y radiaciones provenientes del Sol.

### 17

De conformidad con el libro de Biología, ¿mediante qué reacción habrían formado moléculas orgánicas más complejas las moléculas simples, según Oparin?

- A. Mediante una reacción denominada condensación
- B. Mediante una reacción denominada fotosíntesis
- C. Mediante una reacción denominada fisión
- D. Mediante una reacción denominada oxidación

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · evolución química

Oparin propuso que, en esas condiciones, las moléculas simples que componían los gases atmosféricos acumulados en los mares y los lagos de la Tierra habrían reaccionado entre sí formando moléculas orgánicas más complejas mediante una reacción denominada condensación.

### 18

En relación con el libro de Biología, ¿por qué la ausencia de oxígeno libre favoreció la formación de las moléculas orgánicas?

- A. Porque el oxígeno puede combinarse con ellas y degradarlas a sustancias simples
- B. Porque el oxígeno impide que las moléculas se disuelvan en el agua
- C. Porque el oxígeno bloquea el paso de la radiación ultravioleta
- D. Porque el oxígeno reduce la energía disponible para las reacciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · evolución química

Esta es una de las características que favorecieron la formación de las moléculas orgánicas, ya que el oxígeno puede combinarse con ellas y degradarlas a sustancias simples, como sucede en la actualidad.

### 19

De acuerdo con el libro de Biología, ¿de qué proceso es producto residual el oxígeno que existe hoy en la Tierra?

- A. De la fotosíntesis que realizan plantas, algas, protistas y bacterias fotótrofas
- B. De la respiración celular que realizan los animales
- C. De la evolución química de la atmósfera primitiva
- D. De la desintegración de los materiales radiactivos del interior terrestre

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · evolución química

Hoy sabemos que el oxígeno que existe en la Tierra es producto residual del proceso de fotosíntesis que realizan plantas, algas, protistas y bacterias fotótrofas, capaces de captar la energía luminosa del sol para sintetizar glucosa.

### 20

De conformidad con el libro de Biología, ¿por qué se sostiene que la síntesis de moléculas orgánicas ocurrió en el medio acuático?

- A. Porque en otro ambiente habrían sido destruidas por la radiación ultravioleta, y el agua del océano actúa como filtro
- B. Porque sólo en el agua existía el oxígeno necesario para la reacción
- C. Porque el agua aportaba el calor necesario para la condensación
- D. Porque en el agua las moléculas quedaban expuestas a las descargas eléctricas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 36
**Subtema:** Origen de la vida · evolución química

La hipótesis de que los procesos de síntesis de moléculas orgánicas ocurrieron en el medio acuático se sustenta en el hecho de que si hubieran estado expuestas a otro tipo de ambiente, estas moléculas complejas habrían sido destruidas por la radiación ultravioleta; no obstante, algunas de ellas habrían logrado persistir, al estar protegidas por el agua del océano que actúa como un filtro para las radiaciones.

---

## Sub-lote 4 · De la teoría a la evidencia: Miller (p. 37)

### 21

En relación con el libro de Biología, ¿en qué año publicó Oparin su teoría?

- A. En 1924
- B. En 1953
- C. En 1894
- D. En 1964

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 37
**Subtema:** Origen de la vida · Oparin y Haldane

Oparin publicó su teoría en 1924, la cual tenía un carácter fuertemente especulativo, aunque estaba basada en un razonamiento riguroso.

> Cuidado con las cuatro fechas: **1924** es la publicación de Oparin y **1953**
> el experimento de Miller; 1894 y 1964 son años de nacimiento y muerte que el
> libro da entre paréntesis.

### 22

De acuerdo con el libro de Biología, ¿qué le faltaba a la teoría de Oparin cuando la publicó?

- A. Pruebas empíricas que permitieran contrastarla
- B. Un razonamiento riguroso que la sustentara
- C. El respaldo de la comunidad científica de su país
- D. Una explicación sobre el origen de los elementos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 37
**Subtema:** Origen de la vida · Oparin y Haldane

Tenía un carácter fuertemente especulativo, aunque estaba basada en un razonamiento riguroso. Sin embargo, no disponía de pruebas empíricas que permitieran contrastarla.

> El libro concede que el razonamiento **sí** era riguroso: lo que faltaba eran
> las pruebas. El distractor B invierte justamente eso.

### 23

De conformidad con el libro de Biología, ¿quién aportó en 1953 las primeras evidencias experimentales que sustentaron la propuesta de Oparin?

- A. El bioquímico estadounidense Stanley Miller
- B. El químico inglés J. B. S. Haldane
- C. El biólogo estadounidense J. Craig Venter
- D. El bioquímico ruso A. I. Oparin

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 37
**Subtema:** Origen de la vida · experimento de Miller

Recién en 1953 el bioquímico estadounidense Stanley Miller (1930-2007) aportó las primeras evidencias experimentales, las cuales constituyeron un fuerte sustento para la propuesta de Oparin.

### 24

En relación con el libro de Biología, ¿qué mostraron los experimentos de Miller respecto de las fuentes de energía?

- A. Que prácticamente cualquier fuente de energía servía, fueran rayos, radiación ultravioleta o ceniza volcánica caliente
- B. Que sólo los rayos producían el resultado esperado
- C. Que sólo la radiación ultravioleta producía el resultado esperado
- D. Que ninguna fuente de energía conocida bastaba por sí sola

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 37
**Subtema:** Origen de la vida · experimento de Miller

Los experimentos de Miller, que fueron repetidos varias veces, mostraron que prácticamente cualquier fuente de energía (rayos, radiación ultravioleta o ceniza volcánica caliente) podía servir.

---

**Reactivos en este archivo:** 24
