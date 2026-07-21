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

Cubiertas las páginas impresas **35 a 42**:

- La formación de los primeros átomos tras el Big Bang y el origen del sistema
  solar.
- Qué caracteriza a los sistemas vivos frente a los no vivos.
- La hipótesis de Oparin y Haldane, y la evolución química.
- Los dos consensos sobre la Tierra primitiva y las fuentes de energía.
- El aporte experimental de Stanley Miller, y el montaje de su experimento.
- Los sistemas precelulares: coacervados de Oparin, microesferas proteinoides de
  Fox y microvesículas de Szostak.
- Por qué la vida no vuelve a surgir hoy, y la paradoja de Oparin.
- El dilema de qué molécula surgió primero, y el mundo del ARN.
- El paso del mundo de los ARN al ADN, y por qué el ADN se quedó con la
  información genética.
- Las evidencias de las primeras células: microfósiles, los depósitos de Isua y
  los isótopos del carbono.
- Los fósiles moleculares y el trabajo de Zuckerkandl y Pauling.
- El origen extraterrestre: la hipótesis de Arrhenius, la objeción del libro, y
  los meteoritos Murchison y ALH84001.
- Por qué la Tierra sustenta vida: distancia al Sol, agua líquida, el intervalo
  de temperatura y el doble papel de la atmósfera.

**Pendiente:** el resto del capítulo 3 (pp. 43–60) y los capítulos 4, 5, 7, 8,
11, 12, 31, 32, 35, 36 y 37.

## Erratas del libro

Se anotan aquí y **no se escribe reactivo sobre ese punto**: fijar una errata le
enseñaría mal al aspirante y lo haría fallar si el examen real la corrige.

| Pág. | Dice | Debe decir | Cómo se detectó |
|---|---|---|---|
| 40 | los depósitos de Isua "tienen alrededor de **3800 años** de antigüedad" | **3800 millones de años** | Se le cayó "millones". El propio párrafo la presenta como evidencia **más antigua** que los fósiles de 3500 millones de años; 3800 años a secas no tendría sentido ahí. Verificado en el texto crudo del PDF: la errata es del libro, no de la extracción. |

**No hay reactivo sobre la antigüedad de los depósitos de Isua.** Sí lo hay sobre
dónde están y qué se analizó en ellos, que son datos firmes.

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

## Sub-lote 5 · El experimento de Miller (fig. 3-4, p. 38)

### 25

De acuerdo con el libro de Biología, ¿qué gases introdujo Miller para simular la composición de la atmósfera primitiva?

- A. Metano, amoníaco e hidrógeno
- B. Metano, oxígeno e hidrógeno
- C. Amoníaco, oxígeno y nitrógeno
- D. Dióxido de carbono, metano y oxígeno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · experimento de Miller

Los gases metano, amoníaco e hidrógeno se introducen aquí. Estos gases simulan la composición de la atmósfera primitiva.

> Ninguno de los tres es oxígeno, y ése es el punto: la atmósfera primitiva
> carecía de oxígeno libre. Los distractores lo cuelan.

### 26

De conformidad con el libro de Biología, ¿con qué simuló Miller una fuente de energía presente en la Tierra primitiva?

- A. Con una descarga eléctrica
- B. Con una fuente de radiación ultravioleta
- C. Con ceniza volcánica caliente
- D. Con una corriente de agua en ebullición

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · experimento de Miller

Con una descarga eléctrica, Miller simuló una fuente de energía presente en la Tierra primitiva.

> Los distractores B y C sí son fuentes que el libro menciona como válidas
> (reactivo 24), pero **la que Miller usó en el dispositivo** fue la descarga
> eléctrica.

### 27

En relación con el libro de Biología, ¿qué se obtiene en el experimento de Miller?

- A. Moléculas orgánicas: aminoácidos y otros compuestos disueltos
- B. Ácidos nucleicos: ADN y ARN disueltos
- C. Microesferas proteinoides
- D. Coacervados de proteínas y lípidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · experimento de Miller

Se obtienen moléculas orgánicas: aminoácidos y otros compuestos disueltos.

---

## Sub-lote 6 · Coacervados y microesferas (pp. 38–39)

### 28

De acuerdo con el libro de Biología, ¿cómo llamó Oparin a los sistemas individuales que se forman cuando las macromoléculas se agrupan y se separan del medio?

- A. Coacervados
- B. Microesferas proteinoides
- C. Protocélulas
- D. Conglomerados prebióticos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · sistemas precelulares

En condiciones de temperatura y acidez controladas, estas macromoléculas se agrupan entre sí formando conglomerados que se separan del medio circundante y forman sistemas individuales a los que el autor denominó coacervados.

> Par que hay que separar: los **coacervados** son de Oparin y las
> **microesferas proteinoides** de Fox (ver reactivo 31).

### 29

De conformidad con el libro de Biología, ¿qué pueden hacer los coacervados con las moléculas del medio?

- A. Pueden incorporar otras moléculas presentes en el medio
- B. Pueden sintetizar nuevas moléculas a partir de gases
- C. Pueden expulsar selectivamente las moléculas que no necesitan
- D. No pueden intercambiar nada con el medio circundante

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · sistemas precelulares

Estos modelos de sistemas precelulares pueden incorporar otras moléculas presentes en el medio.

### 30

En relación con el libro de Biología, ¿quién postuló un modelo precelular alternativo al de Oparin?

- A. El científico norteamericano Sidney W. Fox
- B. El bioquímico estadounidense Stanley Miller
- C. El biólogo y premio Nobel Jack Szostak
- D. El químico inglés J. B. S. Haldane

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · sistemas precelulares

Por su parte, el científico norteamericano Sidney W. Fox (1912-1998) postuló un modelo precelular alternativo.

### 31

De acuerdo con el libro de Biología, ¿qué estructuras obtuvieron Fox y sus colaboradores?

- A. Microesferas proteinoides, formadas por una membrana proteica
- B. Coacervados, formados por conglomerados de macromoléculas
- C. Microvesículas de lípidos que simulan protocélulas
- D. Cadenas de ARN con capacidad replicativa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · sistemas precelulares

Fox y sus colaboradores obtuvieron estructuras formadas por una membrana proteica —llamadas microesferas proteinoides— dentro de las cuales ocurrían reacciones químicas análogas a las que ocurren en las células.

### 32

De conformidad con el libro de Biología, ¿son células las microesferas proteinoides?

- A. No, pero permiten proponer modelos sobre el origen de estructuras autónomas similares a células sencillas
- B. Sí, son las células más sencillas que se conocen
- C. Sí, porque dentro de ellas ocurren reacciones químicas
- D. No, y por eso no aportan nada al estudio del origen de la vida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · sistemas precelulares

Las microesferas no son células, pero el hecho de que puedan formarse en el laboratorio en condiciones que simulan las de la Tierra primitiva permite proponer modelos sobre los mecanismos que podrían haber dado origen a estructuras autónomas similares a células sencillas.

> El libro afirma las dos cosas a la vez: **no son células** y **sí sirven**. Los
> distractores se quedan con una mitad y sueltan la otra.

### 33

En relación con el libro de Biología, ¿qué demostraron los estudios del biólogo y premio Nobel Jack Szostak?

- A. Que las microvesículas de lípidos pueden importar moléculas de manera selectiva, autoensamblarse, crecer, dividirse y adquirir gran complejidad
- B. Que las microesferas proteinoides pueden replicar su propio material genético
- C. Que los coacervados pueden sintetizar aminoácidos a partir de gases
- D. Que el ARN puede transformarse espontáneamente en ADN

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · sistemas precelulares

Estudios más recientes del biólogo y premio Nobel Jack Szostak han demostrado que los sistemas artificiales de microvesículas de lípidos, que simulan protocélulas, pueden importar moléculas del exterior de manera selectiva, autoensamblarse, crecer, dividirse y adquirir gran complejidad.

---

## Sub-lote 7 · Por qué la vida no vuelve a surgir hoy (p. 38)

### 34

De acuerdo con el libro de Biología, ¿por qué sería imposible hoy la formación espontánea de moléculas orgánicas?

- A. Porque el oxígeno de la atmósfera las oxidaría y degradaría, o serían degradadas por los organismos que habitan el planeta
- B. Porque ya no existe energía suficiente en forma de calor y radiación
- C. Porque los cuatro elementos que las componen ya no están disponibles
- D. Porque la temperatura de la Tierra es demasiado baja

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · por qué no ocurre hoy

En la Tierra actual, la formación espontánea de moléculas orgánicas y de sistemas plurimoleculares sería imposible, ya que el oxígeno presente en la atmósfera los oxidaría y degradaría, o serían degradados por los organismos que actualmente habitan el planeta.

### 35

De conformidad con el libro de Biología, ¿qué efecto tuvo la formación de la capa de ozono sobre el origen de la vida?

- A. Filtra las radiaciones ultravioleta, lo que disminuye su influencia como fuente de energía para formar moléculas complejas
- B. Aumentó la cantidad de radiación ultravioleta disponible como fuente de energía
- C. Elevó la temperatura de la atmósfera, degradando las moléculas orgánicas
- D. Impidió que el oxígeno se acumulara en la atmósfera

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · por qué no ocurre hoy

A partir de ese oxígeno se fue constituyendo la capa de ozono (O₃) que filtra las radiaciones ultravioleta, lo que disminuye así su influencia como fuente de energía para los procesos formadores de moléculas complejas.

### 36

En relación con el libro de Biología, ¿qué hicieron las primeras células con el medio del que provenían?

- A. Consumieron la sopa primitiva de la que provenían
- B. Enriquecieron la sopa primitiva con nuevas moléculas orgánicas
- C. Conservaron la sopa primitiva sin alterarla
- D. Se aislaron de la sopa primitiva mediante una membrana

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · por qué no ocurre hoy

Dicho de otra forma, las primeras células que aparecieron consumieron la sopa primitiva de la que provenían.

### 37

De acuerdo con el libro de Biología, según las palabras de Oparin, ¿dónde reside la causa principal de que la vida no aparezca hoy en condiciones naturales?

- A. En el hecho de que la vida ya existe
- B. En el hecho de que la atmósfera ya no tiene metano ni amoníaco
- C. En el hecho de que las fuentes de energía se han agotado
- D. En el hecho de que los océanos han cambiado de composición

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 38
**Subtema:** Origen de la vida · por qué no ocurre hoy

Según las palabras de Oparin, "por paradójico que ello pueda parecer, debemos admitir que la causa principal de la imposibilidad de la aparición de la vida en las condiciones naturales actuales reside en el hecho de que la vida ya existe".

---

## Sub-lote 8 · El dilema del huevo y la gallina, y el mundo del ARN (p. 39)

### 38

De conformidad con el libro de Biología, ¿qué propiedad tienen las enzimas?

- A. Acelerar ciertas reacciones químicas sin sufrir cambios en su estructura, quedando disponibles para nuevas reacciones
- B. Acelerar ciertas reacciones químicas consumiéndose en el proceso
- C. Portar la información genética y transmitirla a la descendencia
- D. Formar la membrana que separa la célula del medio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · enzimas y ácidos nucleicos

Ciertas proteínas (enzimas) tienen la propiedad de acelerar ciertas reacciones químicas sin sufrir cambios en su estructura, quedando, por lo tanto, disponibles para intervenir en nuevas reacciones.

> Que **no se consuman** es lo que las hace enzimas. El distractor B cambia
> exactamente eso.

### 39

En relación con el libro de Biología, ¿qué moléculas cumplen el papel de portar la información genética y transmitirla a la descendencia?

- A. Los ácidos nucleicos, generalmente el ADN
- B. Las proteínas, en particular las enzimas
- C. Los lípidos de la membrana
- D. Los aminoácidos libres

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · enzimas y ácidos nucleicos

Hoy se sabe que las proteínas no poseen la estructura que hace posible las dos funciones antes mencionadas: portar información genética y transmitirla a la descendencia. Según nuestros conocimientos acerca del funcionamiento de las células actuales, este papel lo cumplen los ácidos nucleicos, generalmente el ADN.

### 40

De acuerdo con el libro de Biología, ¿a qué viejo acertijo se asemeja el dilema sobre qué molécula surgió primero?

- A. A "¿Qué fue primero, el huevo o la gallina?"
- B. A "¿Qué fue primero, la semilla o el árbol?"
- C. A "¿Qué fue primero, el fuego o la chispa?"
- D. A "¿Qué fue primero, el río o la lluvia?"

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · mundo del ARN

Este dilema acerca de quién tuvo primacía se asemeja al viejo acertijo: "¿Qué fue primero, el huevo o la gallina?".

### 41

De conformidad con el libro de Biología, ¿cuál es la propuesta más aceptada sobre el primer polímero con capacidad de portar información y de replicarse?

- A. Que podría haber sido el ARN
- B. Que podría haber sido el ADN
- C. Que podrían haber sido las proteínas
- D. Que podrían haber sido los lípidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · mundo del ARN

La propuesta más aceptada es que el primer polímero con capacidad de portar información y de replicarse podría haber sido el ARN.

### 42

En relación con el libro de Biología, ¿cómo se llama la etapa muy temprana de la evolución biológica en la que este polímero genético llevaba a cabo papeles biológicos muy importantes?

- A. Mundo del ARN
- B. Mundo del ADN
- C. Evolución química
- D. Evolución prebiológica

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · mundo del ARN

Todos estos hallazgos apoyan fuertemente un argumento que propone la existencia de una etapa muy temprana en la evolución biológica conocida como mundo del ARN, en la que este polímero genético llevaba a cabo papeles biológicos muy importantes.

### 43

De acuerdo con el libro de Biología, ¿qué es la actividad catalítica que exhiben algunos ARN creados de manera artificial?

- A. La capacidad de acelerar la ocurrencia de reacciones químicas
- B. La capacidad de replicarse sin ayuda de proteínas
- C. La capacidad de transformarse en ADN
- D. La capacidad de atravesar la membrana celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · mundo del ARN

Numerosos experimentos en el laboratorio han demostrado que algunos ARN creados de manera artificial exhiben actividad catalítica (capacidad de acelerar la ocurrencia de reacciones químicas).

### 44

De conformidad con el libro de Biología, ¿cómo se llaman los errores de copia que pudieron sufrir las moléculas de ARN durante los procesos de duplicación?

- A. Mutaciones
- B. Replicaciones
- C. Condensaciones
- D. Coacervaciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · mundo del ARN

Durante los procesos de duplicación, las moléculas de ARN podían haber sufrido errores de copia, llamados mutaciones, que habrían dado lugar a una inmensa variedad de estas moléculas.

### 45

En relación con el libro de Biología, ¿de qué debió disponer necesariamente cualquier forma ancestral de vida?

- A. De un "manual de instrucciones", aunque fuera rudimentario, que regulara el sistema y pudiera ser copiado y transmitido
- B. De una membrana lipídica capaz de dividirse
- C. De un conjunto completo de enzimas catalíticas
- D. De una fuente propia de energía independiente del Sol

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 39
**Subtema:** Origen de la vida · mundo del ARN

Actualmente, los biólogos concuerdan en que cualquier forma ancestral de vida debió disponer necesariamente de un "manual de instrucciones", aunque sea rudimentario, que regulara el funcionamiento del sistema y que, a la vez, pudiera ser copiado y transmitido de generación en generación, un requisito esencial para que ocurra un cambio evolutivo.

---

## Sub-lote 9 · Del mundo del ARN al ADN (p. 40)

### 46

De acuerdo con el libro de Biología, ¿cómo se denomina el modelo que propone que la formación de cadenas de proteínas se originó en el mundo de los ARN?

- A. Mundo de los ARN/proteínas
- B. Mundo de los ARN/ADN
- C. Mundo de los aminoácidos
- D. Mundo prebiótico

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · del ARN al ADN

Ha llevado a proponer que este proceso de formación de cadenas de proteínas se originó en el mundo de los ARN, conformando un modelo que sería denominado como mundo de los ARN/proteínas.

### 47

De conformidad con el libro de Biología, ¿en qué función empezarían las proteínas a reemplazar al ARN, según este modelo?

- A. En la función de acelerar las reacciones químicas
- B. En la función de almacenar la información genética
- C. En la función de formar la membrana celular
- D. En la función de transmitir la herencia a la descendencia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · del ARN al ADN

Según este modelo, en una etapa posterior, las proteínas empezarían a reemplazar al ARN en la función de acelerar las reacciones químicas.

> Par que hay que separar: las **proteínas** se quedan con acelerar reacciones y
> el **ADN** con almacenar la información (reactivo 48). El distractor B cambia
> uno por otro.

### 48

En relación con el libro de Biología, ¿cuál es la ventaja del ADN que explica que se le transfiriera el almacenamiento de la información genética?

- A. Ser menos susceptible a la degradación química
- B. Ser capaz de acelerar las reacciones químicas
- C. Ser más pequeño que el ARN
- D. Poder atravesar la membrana celular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · del ARN al ADN

La función de almacenamiento de la información genética de gran parte de los organismos habría sido transferida del ARN al ADN, cuya ventaja es la de ser menos susceptible a la degradación química.

### 49

De acuerdo con el libro de Biología, ¿cómo resultaron los ácidos nucleicos y las proteínas tras ese proceso de autoorganización?

- A. Complementarios
- B. Independientes entre sí
- C. Intercambiables
- D. Antagónicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · del ARN al ADN

Entre los ácidos nucleicos y las proteínas se habría desarrollado una compleja y cooperativa serie de interacciones, de controles y equilibrios. Así, estos compuestos, en un proceso de autoorganización, habrían resultado complementarios.

### 50

De conformidad con el libro de Biología, ¿cómo califica la evidencia que sustenta las hipótesis sobre cómo surgió el mundo de los ARN?

- A. Fragmentaria, a lo sumo
- B. Concluyente y ampliamente aceptada
- C. Inexistente hasta el momento
- D. Contradictoria entre los distintos autores

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · del ARN al ADN

Son muchos los trabajos realizados y las hipótesis propuestas para explicar cómo surgió el mundo de los ARN y posteriormente la vida; sin embargo, la evidencia en favor de cada una es, a lo sumo, fragmentaria.

---

## Sub-lote 10 · Las primeras células: las evidencias (p. 40)

### 51

En relación con el libro de Biología, ¿de cuándo datan los fósiles más antiguos encontrados hasta el momento, semejantes a las bacterias actuales?

- A. De 3500 millones de años
- B. De 3700 millones de años
- C. De 4600 millones de años
- D. De 1100 millones de años

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · primeras células

Los fósiles más antiguos encontrados hasta el momento, semejantes a las bacterias actuales, datan de 3500 millones de años.

> Cuatro cifras que conviven en la misma página y se cruzan: **3500** millones
> son los fósiles confirmados, **3700** los tubulares no concluyentes, **4600**
> la formación de la Tierra y **1100** los millones de años que separan a las dos
> primeras.

### 52

De acuerdo con el libro de Biología, ¿cuánto tiempo después de la formación de la Tierra aparecieron esos fósiles?

- A. Alrededor de 1100 millones de años después
- B. Alrededor de 3500 millones de años después
- C. Alrededor de 500 millones de años después
- D. Alrededor de 2000 millones de años después

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · primeras células

Datan de 3500 millones de años, alrededor de 1100 millones de años después de la formación de la Tierra.

### 53

De conformidad con el libro de Biología, ¿qué se ha sugerido recientemente sobre unos fósiles de forma tubular?

- A. Que están en rocas de hace más de 3700 millones de años, aunque los resultados siguen sin ser concluyentes
- B. Que están en rocas de hace más de 3700 millones de años, y los resultados son concluyentes
- C. Que son los organismos fósiles hallados en los depósitos de Isua
- D. Que son más recientes que los fósiles semejantes a bacterias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · primeras células

Aunque recientemente se ha sugerido la presencia de fósiles de forma tubular en rocas de hace más de 3700 millones de años, los resultados siguen sin ser concluyentes.

> El libro es explícito en que **no son concluyentes**. El distractor B quita esa
> reserva, que es justo lo que el aspirante tiende a olvidar.

### 54

En relación con el libro de Biología, ¿dónde se encuentran los depósitos sedimentarios que aportan indicios indirectos de vida más antiguos?

- A. En la isla de Isua, al oeste de Groenlandia
- B. En la isla de Isua, al este de Groenlandia
- C. En la costa occidental de Islandia
- D. En el norte de Canadá

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · primeras células

Uno de estos indicios proviene de depósitos sedimentarios de la isla de Isua, al oeste de Groenlandia.

### 55

De acuerdo con el libro de Biología, ¿cuáles son los dos isótopos estables del carbono que se encuentran en la naturaleza?

- A. El ¹²C y el ¹³C
- B. El ¹²C y el ¹⁴C
- C. El ¹³C y el ¹⁴C
- D. El ¹¹C y el ¹²C

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · primeras células

En particular de su contenido de ¹²C y ¹³C, los dos isótopos estables del carbono que se encuentran en la naturaleza.

### 56

De conformidad con el libro de Biología, ¿qué isótopo del carbono tienden a incorporar los organismos vivos en forma selectiva, y por qué?

- A. El ¹²C, que es levemente más ligero
- B. El ¹³C, que es levemente más ligero
- C. El ¹²C, que es levemente más pesado
- D. El ¹³C, que es levemente más pesado

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · primeras células

Sabemos que los organismos vivos tienden a incorporar el ¹²C en forma selectiva, que es levemente más ligero que el ¹³C.

---

## Sub-lote 11 · Los fósiles moleculares (p. 40)

### 57

En relación con el libro de Biología, ¿a qué se refiere el término fósil molecular en biología evolutiva?

- A. A todas aquellas biomoléculas que almacenan información sobre el pasado histórico de los seres vivos
- B. A los restos de moléculas orgánicas hallados en rocas sedimentarias
- C. A los microfósiles semejantes a las bacterias actuales
- D. A los isótopos estables del carbono presentes en las rocas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · fósiles moleculares

En biología evolutiva se ha utilizado el término de fósil molecular para referirse a todas aquellas biomoléculas que almacenan información sobre el pasado histórico de los seres vivos.

### 58

De acuerdo con el libro de Biología, ¿quiénes sugirieron en 1965 que a mayor cercanía entre especies, menor número de diferencias entre sus secuencias?

- A. Emile Zuckerkandl y Linus Pauling
- B. Emile Zuckerkandl y Sidney W. Fox
- C. Linus Pauling y Jack Szostak
- D. Stanley Miller y Linus Pauling

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · fósiles moleculares

En 1965, Emile Zuckerkandl y Linus Pauling sugirieron que mientras más cercanamente relacionadas estuvieran las especies, menor sería el número de diferencias entre las secuencias que se estuvieran comparando.

### 59

De conformidad con el libro de Biología, ¿qué demostraron esos trabajos sobre las secuencias del gorila, el chimpancé y el humano?

- A. Que tenían un menor número de diferencias, es decir, eran más parecidas entre sí
- B. Que tenían un mayor número de diferencias que con las demás especies
- C. Que eran idénticas entre sí
- D. Que no permitían establecer relaciones evolutivas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 40
**Subtema:** Origen de la vida · fósiles moleculares

En sus trabajos demostraron que las secuencias del gorila, chimpancé y humano tenían un menor número de diferencias; es decir, eran más parecidas entre sí.

---

## Sub-lote 12 · El origen extraterrestre de la vida (pp. 41–42)

### 60

De acuerdo con el libro de Biología, ¿quién postuló por primera vez la hipótesis del origen extraterrestre de la vida, y en qué año?

- A. El físico y químico sueco Svante Arrhenius, en 1906
- B. El físico y químico sueco Svante Arrhenius, en 1859
- C. El bioquímico ruso A. I. Oparin, en 1924
- D. El químico inglés J. B. S. Haldane, en 1906

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · origen extraterrestre

La hipótesis del origen extraterrestre de la vida fue postulada por primera vez en 1906 por el físico y químico sueco Svante Arrhenius (1859-1927).

> **1906** es cuando postula la hipótesis; **1859** es su año de nacimiento, que
> el libro da entre paréntesis. El distractor B los cruza.

### 61

De conformidad con el libro de Biología, según Arrhenius, ¿cómo habrían llegado los "gérmenes de la vida" a la Tierra?

- A. Desde el espacio en meteoritos desprendidos de algún planeta en el que ya se habría originado la vida
- B. Desde el espacio en cometas formados en el sistema solar exterior
- C. Desde la atmósfera terrestre, arrastrados por la radiación solar
- D. Desde el fondo de los océanos, transportados por corrientes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · origen extraterrestre

Los primeros "gérmenes de la vida" (esporas o bacterias) habrían llegado desde el espacio en meteoritos desprendidos de algún planeta en el que ya se habría originado la vida.

### 62

En relación con el libro de Biología, ¿qué objeción hace el libro a las hipótesis del origen extraterrestre?

- A. Que desplazan el problema hacia escenarios más lejanos, pero no explican los procesos involucrados en el surgimiento de la vida
- B. Que contradicen las evidencias fósiles halladas hasta el momento
- C. Que suponen temperaturas imposibles para cualquier forma de vida
- D. Que nunca han sido formuladas por científicos reconocidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · origen extraterrestre

Sin embargo, estas hipótesis no hacen más que desplazar este problema hacia escenarios más lejanos, pero no contribuyen a su comprensión, ya que no proveen una explicación acerca de los procesos involucrados en su surgimiento.

> El libro no las descarta —dice que "deben ser tenidas en cuenta"—: lo que
> señala es que **no explican nada**, sólo mudan la pregunta de sitio.

### 63

De acuerdo con el libro de Biología, ¿en qué se basa la hipótesis de que la materia prima de la vida pudo provenir del espacio interestelar?

- A. En que las moléculas orgánicas más simples se sintetizan de forma espontánea y abundante en el espacio
- B. En que se han hallado bacterias vivas en la superficie de los cometas
- C. En que la Tierra primitiva carecía por completo de carbono
- D. En que los meteoritos aportaron el agua de los océanos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · origen extraterrestre

Esta hipótesis se basa en estudios que muestran que las moléculas orgánicas más simples se sintetizan de forma espontánea y abundante en el espacio, de manera que es factible que hayan ingresado en la Tierra primitiva transportadas por cometas y meteoritos.

> Es una hipótesis **distinta** de la de Arrhenius y el libro la llama "tal vez
> más interesante": no dice que llegara la vida ya formada, sino sólo la
> **materia prima**.

### 64

De conformidad con el libro de Biología, ¿qué evidencia apoyaría esa propuesta?

- A. El hallazgo de aminoácidos en un meteorito encontrado en 1969 en Australia
- B. El hallazgo de aminoácidos en un meteorito encontrado en 1996 en la Antártida
- C. El hallazgo de bacterias fosilizadas en rocas lunares
- D. El hallazgo de agua líquida en la superficie de Marte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · origen extraterrestre

Una evidencia que apoyaría esta propuesta es el hallazgo de aminoácidos en un meteorito encontrado en 1969 en Australia.

> Dos meteoritos y dos fechas que se cruzan: el **Murchison**, de 1969 en
> Australia, con aminoácidos; y el **ALH84001**, de 1996 en la Antártida,
> proveniente de Marte (ver reactivo 66).

### 65

En relación con el libro de Biología, ¿qué se formó de manera espontánea a partir de las moléculas orgánicas extraídas del meteorito Murchison?

- A. Estructuras limitadas por membranas, separadas de la solución exterior por una bicapa lipídica
- B. Cadenas de ARN con capacidad de replicarse
- C. Microesferas proteinoides semejantes a las de Fox
- D. Coacervados semejantes a los de Oparin

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · origen extraterrestre

Estas estructuras limitadas por membranas, separadas de la solución exterior por una bicapa lipídica, se formaron de manera espontánea a partir de las moléculas orgánicas extraídas del meteorito Murchison, que cayó en Australia en 1969.

### 66

De acuerdo con el libro de Biología, ¿qué se encontró en 1996 en el meteorito ALH84001?

- A. Posibles señales de microorganismos fosilizados, en un meteorito proveniente de Marte hallado en la Antártida
- B. Aminoácidos y otros compuestos orgánicos, en un meteorito caído en Australia
- C. Estructuras limitadas por una bicapa lipídica, en un meteorito lunar
- D. Restos de agua líquida, en un meteorito proveniente de Venus

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · origen extraterrestre

En 1996, se encontraron ciertos datos que podrían estar indicando que la vida podría haberse originado en otros planetas: en un meteorito proveniente de Marte (el denominado ALH84001) hallado en la Antártida aparecieron posibles señales de microorganismos fosilizados.

---

## Sub-lote 13 · ¿Vida sólo en la Tierra? (p. 41)

### 67

De conformidad con el libro de Biología, ¿qué indican hasta el momento los estudios astronómicos y las exploraciones espaciales?

- A. Que entre los planetas de nuestro sistema solar, sólo la Tierra sustenta vida
- B. Que además de la Tierra, Marte sustenta formas simples de vida
- C. Que la vida es frecuente en los planetas del sistema solar exterior
- D. Que no es posible determinar si algún planeta sustenta vida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

Los estudios astronómicos y las exploraciones llevadas a cabo por vehículos espaciales no tripulados indican hasta el momento que, entre los planetas de nuestro sistema solar, solo la Tierra sustenta vida.

### 68

En relación con el libro de Biología, ¿en qué se basa la composición de los sistemas vivos?

- A. En moléculas que contienen carbono
- B. En moléculas que contienen silicio
- C. En moléculas que contienen nitrógeno
- D. En moléculas que contienen hidrógeno exclusivamente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

En nuestro planeta, las condiciones son ideales para los sistemas vivos, cuya composición se basa en moléculas que contienen carbono.

### 69

De acuerdo con el libro de Biología, ¿cuál es un factor principal de que las condiciones de la Tierra sean ideales?

- A. Que la Tierra no está demasiado cerca ni demasiado lejos del Sol
- B. Que la Tierra tiene la mayor masa de los planetas interiores
- C. Que la Tierra gira más despacio que los demás planetas
- D. Que la Tierra posee un único satélite natural

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

Un factor principal es que la Tierra no está demasiado cerca ni demasiado lejos del Sol, lo cual tiene implicaciones en las temperaturas máximas y mínimas alcanzadas.

### 70

De conformidad con el libro de Biología, ¿qué requieren las reacciones químicas de las que depende la vida tal como la conocemos?

- A. Agua líquida
- B. Oxígeno libre en la atmósfera
- C. Radiación ultravioleta directa
- D. Temperaturas superiores a los 100 ºC

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

Las reacciones químicas de las que depende la vida tal como la conocemos requieren agua líquida y la temperatura de nuestro planeta permite que esta sea abundante.

### 71

En relación con el libro de Biología, ¿qué ocurre con las reacciones químicas a temperaturas muy bajas?

- A. La mayor parte de ellas cesan
- B. Se aceleran por la mayor estabilidad de los compuestos
- C. Se vuelven irreversibles
- D. Sólo ocurren en presencia de agua líquida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

La temperatura es esencial para la ocurrencia de dichas reacciones, ya que la mayor parte de ellas cesan a temperaturas muy bajas.

### 72

De acuerdo con el libro de Biología, ¿qué les ocurre a temperaturas altas a los compuestos químicos complejos esenciales para la vida?

- A. Son demasiado inestables, de modo que no podrían acumularse
- B. Se acumulan con mayor rapidez que a temperaturas medias
- C. Se transforman en compuestos inorgánicos simples
- D. Se disuelven en el agua y quedan protegidos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

A temperaturas altas, los compuestos químicos complejos esenciales para la vida son demasiado inestables, de modo que en tales condiciones estos no podrían acumularse.

> Par contrapuesto que el libro enuncia seguido: con **frío** las reacciones
> cesan; con **calor** los compuestos no se acumulan. La vida necesita el
> intervalo de en medio (ver reactivo 71).

### 73

De conformidad con el libro de Biología, ¿qué provocarían las radiaciones más energéticas del Sol si llegaran a la Tierra?

- A. La rotura de los enlaces covalentes entre los átomos de carbono
- B. La evaporación completa del agua de los océanos
- C. La formación espontánea de moléculas orgánicas complejas
- D. La destrucción de la capa de ozono

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

Debido a su composición química particular, la atmósfera terrestre filtra muchas de las radiaciones más energéticas provenientes del Sol que, de llegar al planeta Tierra, provocarían la rotura de los enlaces covalentes entre los átomos de carbono.

### 74

En relación con el libro de Biología, ¿qué paso significativo de la evolución posibilitó que la atmósfera permita el pasaje de la luz visible?

- A. La fotosíntesis
- B. La respiración celular
- C. La formación de la capa de ozono
- D. La aparición de los ácidos nucleicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 41
**Subtema:** Origen de la vida · condiciones para la vida

Pero, a la vez, permite el pasaje de la luz visible, lo que posibilitó uno de los pasos más significativos en la evolución de los sistemas vivos complejos: la fotosíntesis.

> La atmósfera hace **dos cosas opuestas a la vez**: filtra lo que destruiría el
> carbono y deja pasar lo que alimenta la fotosíntesis. Conviene estudiarlas
> juntas (ver reactivo 73).

---

**Reactivos en este archivo:** 74
