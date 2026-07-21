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

#### Excepción: los recuadros "ENSAYO" van con render.py

**Los recuadros de ensayo del Curtis traen "Lorem ipsum" en su capa de texto** —
texto de relleno de imprenta — mientras la página visible muestra el contenido
real como imagen. `extraer.py` sólo saca el lorem ipsum. Para esos recuadros
**hay que renderizar la hoja con `render.py` y leerla con los ojos**, como los
libros del HCM. Detectado en el ensayo 3-1 (p. 52), "El nacimiento de la teoría
celular", cuyos reactivos se escribieron a partir del render, no de la
extracción.

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

Cubiertas las páginas impresas **35 a 51**:

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
- Vida en otros planetas: el escepticismo sobre el ALH84001, Marte y Europa, y
  las archaeas metanógenas como testigo de la Tierra sin oxígeno.
- La Ecuación de Drake, las zonas de habitabilidad y la astrobiología.
- El comienzo de heterótrofos y autótrofos.
- La teoría celular y sus cuatro afirmaciones.
- Procariontes y eucariontes: la diferencia de las membranas internas, la
  etimología, el nucleoide frente al núcleo.
- El origen de las células eucariotas: la teoría de endosimbiosis en serie de
  Lynn Margulis y sus límites, y los tres dominios.
- Las evidencias de la endosimbiosis: ADN circular propio, división por fisión.
- El recuadro del ancestro común: la carta de Darwin, LUCA, los caracteres
  moleculares y los tres grupos Bacteria/Archaea/Eucarya.
- La endosimbiosis en detalle: Rickettsia y cianobacterias, y el carácter serial
  de la teoría.
- El paso a los organismos multicelulares, cuándo aparecieron y de qué grupos.
- Los seres vivos como sistemas abiertos; el metabolismo, la homeostasis y el
  intercambio de información.
- La información genética como "manual de instrucciones", la autoperpetuación y
  el desarrollo.
- La organización jerárquica: los niveles subatómico, atómico, molecular,
  macromolecular y celular, y la frontera de lo vivo.
- La propiedad emergente de cada nivel; tejidos, órganos y sistemas; la escala
  ecológica de población a biosfera; unidad y diversidad.
- El ensayo 3-1, el nacimiento de la teoría celular: Schleiden, Schwann, Virchow,
  y la teoría de la neurona con Ramón y Cajal y Golgi.

**Pendiente:** el resto del capítulo 3 (pp. 53–60, que incluye los ensayos 3-2 y
3-3 — van con `render.py`) y los capítulos 4, 5, 7, 8, 11, 12, 31, 32, 35, 36
y 37.

## Erratas del libro

Se anotan aquí y **no se escribe reactivo sobre ese punto**: fijar una errata le
enseñaría mal al aspirante y lo haría fallar si el examen real la corrige.

| Pág. | Dice | Debe decir | Cómo se detectó |
|---|---|---|---|
| 40 | los depósitos de Isua "tienen alrededor de **3800 años** de antigüedad" | **3800 millones de años** | Se le cayó "millones". El propio párrafo la presenta como evidencia **más antigua** que los fósiles de 3500 millones de años; 3800 años a secas no tendría sentido ahí. Verificado en el texto crudo del PDF: la errata es del libro, no de la extracción. |
| 48 | estructuras reproductivas aéreas llamadas "**esponrangios**" | **esporangios** | Una "n" de más en un término técnico: esporangio (del griego *spora* + *angion*, "receptáculo de esporas") es la estructura que produce esporas. Verificado en el texto crudo. No se escribe reactivo sobre ese término. |

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

## Sub-lote 14 · Vida en otros planetas (p. 42)

### 75

De acuerdo con el libro de Biología, ¿qué sugieren los investigadores escépticos sobre las estructuras observadas en el meteorito ALH84001?

- A. Que son producto de reacciones químicas inorgánicas
- B. Que son restos de bacterias terrestres que contaminaron la muestra
- C. Que son burbujas formadas durante la entrada a la atmósfera
- D. Que son cristales minerales de origen marciano

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · vida en otros planetas

Sin embargo, muchos investigadores son escépticos respecto de estos hallazgos y sugieren que las estructuras observadas en el meteorito son producto de reacciones químicas inorgánicas.

### 76

De conformidad con el libro de Biología, ¿en qué cuerpos del sistema solar se ha detectado agua líquida y material orgánico?

- A. En Marte y en Europa, una de las lunas heladas de Júpiter
- B. En Marte y en Titán, una de las lunas de Saturno
- C. En Venus y en Europa, una de las lunas heladas de Júpiter
- D. Únicamente en Marte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · vida en otros planetas

Se ha detectado agua líquida y material orgánico en algunos de ellos, como en Marte y en Europa, una de las lunas heladas de Júpiter.

### 77

En relación con el libro de Biología, ¿bastan las moléculas orgánicas y la presencia de agua para que surja la vida?

- A. No, son factores muy importantes pero no suficientes para que el proceso ocurra en forma inexorable
- B. Sí, siempre que además exista una atmósfera protectora
- C. Sí, son las dos condiciones que definen la habitabilidad
- D. No, porque además se requiere oxígeno libre

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · vida en otros planetas

Sin embargo, aunque las moléculas orgánicas y la presencia de agua son factores muy importantes, no son suficientes para que este proceso ocurra en forma inexorable.

### 78

De acuerdo con el libro de Biología, ¿por qué son muy bajas las probabilidades de que exista vida en otras partes del universo?

- A. Porque los procesos que dieron lugar a la vida están sometidos a las leyes físicas y químicas, así como a múltiples eventos contingentes
- B. Porque el agua líquida es extremadamente rara fuera de la Tierra
- C. Porque las moléculas orgánicas no se sintetizan en el espacio
- D. Porque ningún otro planeta se encuentra en una zona de habitabilidad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · vida en otros planetas

Debido a que los procesos que dieron lugar a la vida están sometidos a las leyes físicas y químicas, así como a múltiples eventos contingentes, las probabilidades de que exista vida en otras partes del universo son muy bajas.

---

## Sub-lote 15 · Las archaeas metanógenas (fig. 3-8, p. 42)

### 79

De conformidad con el libro de Biología, ¿qué producen las archaeas metanógenas, y a partir de qué?

- A. Metano y agua, a partir del dióxido de carbono e hidrógeno
- B. Dióxido de carbono e hidrógeno, a partir del metano y el agua
- C. Oxígeno y glucosa, a partir del dióxido de carbono y el agua
- D. Metano y oxígeno, a partir del agua y la luz solar

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · archaeas metanógenas

Las archaeas metanógenas son quimiosintéticas. Producen metano y agua a partir del dióxido de carbono e hidrógeno.

> El distractor B invierte productos y reactivos, que es el error más frecuente
> al memorizar una reacción.

### 80

En relación con el libro de Biología, ¿en qué condición pueden vivir únicamente las archaeas metanógenas?

- A. En ausencia de oxígeno
- B. En presencia de oxígeno abundante
- C. En ausencia total de agua
- D. En presencia de luz solar directa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · archaeas metanógenas

Solo pueden vivir en ausencia de oxígeno, condición común en la Tierra joven.

### 81

De acuerdo con el libro de Biología, ¿dónde existen actualmente las archaeas metanógenas?

- A. Sólo en ambientes aislados, como el fango y el cieno del fondo de lagunas
- B. En todos los ambientes acuáticos del planeta
- C. Sólo en las capas altas de la atmósfera
- D. Sólo en los depósitos sedimentarios de Groenlandia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · archaeas metanógenas

Actualmente existen solo en ambientes aislados, como el fango y el cieno del fondo de lagunas.

> Estas archaeas son un **testigo vivo** de la Tierra sin oxígeno: la condición
> que hoy las confina a lagunas era la normal cuando surgió la vida.

---

## Sub-lote 16 · La búsqueda de vida en el Universo (recuadro 3-1, p. 42)

### 82

De conformidad con el libro de Biología, ¿quién propuso en 1961 un modelo para estimar la probabilidad de existencia de civilizaciones extraterrestres?

- A. El científico norteamericano Frank Drake
- B. El físico y químico sueco Svante Arrhenius
- C. El biólogo y premio Nobel Jack Szostak
- D. El científico norteamericano Sidney W. Fox

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

En 1961, el científico norteamericano Frank Drake propuso un modelo para la estimación de la probabilidad de existencia de civilizaciones extraterrestres capaces de emitir señales al espacio que nos permitan establecer un contacto.

### 83

En relación con el libro de Biología, ¿en qué consiste en realidad la Ecuación de Drake?

- A. En multiplicar diversos valores estimados, como el número de estrellas de la galaxia y los planetas en los que podría haber vida
- B. En sumar el número de planetas detectados en zonas de habitabilidad
- C. En comparar las secuencias genéticas de especies terrestres y extraterrestres
- D. En calcular la distancia mínima a la que una estrella permite agua líquida

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

Este modelo conocido como la Ecuación de Drake, en realidad, consiste en multiplicar diversos valores estimados, como el número de estrellas que constituyen la galaxia, el número de estrellas que se considera que podrían tener planetas orbitando, los planetas en los que podría haber vida.

### 84

De acuerdo con el libro de Biología, ¿qué resultado arrojó la ecuación con los valores que Drake asignó en 1961?

- A. La existencia de diez civilizaciones en toda la galaxia
- B. La existencia de 10 000 civilizaciones en toda la galaxia
- C. La existencia de 3600 civilizaciones en toda la galaxia
- D. La existencia de una única civilización en toda la galaxia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

Con los valores que Drake asignó a estas variables en 1961, el resultado indicaba la existencia de diez civilizaciones en toda la galaxia.

### 85

De conformidad con el libro de Biología, ¿a cuánto subió la estimación cuando el propio Drake revisó los valores en 2004?

- A. A 10 000 civilizaciones
- B. A 1000 civilizaciones
- C. A 3600 civilizaciones
- D. A 100 civilizaciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

En 2004, el propio Drake revisó algunos de esos valores y la estimación subió a 10 000, así estaríamos lejos de ser una civilización única y solitaria.

> Par de cifras del mismo párrafo: **diez** civilizaciones en 1961 y **10 000**
> en 2004. Es el mismo autor revisando su propia ecuación (ver reactivo 84).

### 86

En relación con el libro de Biología, ¿qué masa debe tener un planeta rocoso para considerarse en la zona de habitabilidad?

- A. Una masa comprendida entre 0,6 y 10 masas terrestres
- B. Una masa comprendida entre 1 y 10 masas terrestres
- C. Una masa comprendida entre 0,6 y 6 masas terrestres
- D. Una masa igual o superior a 10 masas terrestres

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

Este concepto se aplica a la región alrededor de una estrella en la que, de poseer orbitando un planeta (o satélite) rocoso con una masa comprendida entre 0,6 y 10 masas terrestres, un cierto rango de presión atmosférica, luminosidad y el flujo de radiación incidente permitirían la presencia de agua en estado líquido sobre su superficie.

### 87

De acuerdo con el libro de Biología, ¿cuántos planetas extrasolares se han descrito en los últimos años?

- A. Más de 3600
- B. Más de 10 000
- C. Más de 1000
- D. Más de 360

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

En los últimos años se han descrito más de 3600 planetas extrasolares, algunos de los cuales responden a los parámetros de la zona de habitabilidad.

### 88

De conformidad con el libro de Biología, ¿cómo se llama el campo interdisciplinario centrado en la búsqueda de vida extraterrestre?

- A. Exobiología o astrobiología
- B. Biología evolutiva o filogenia
- C. Cosmología o astroquímica
- D. Bioquímica comparada

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

Estos estudios se enmarcan en un nuevo campo interdisciplinario conocido como exobiología o astrobiología, que se centra en la búsqueda de vida extraterrestre.

### 89

En relación con el libro de Biología, ¿qué señalan muchos biólogos evolucionistas sobre los organismos extraterrestres?

- A. Que si la vida se hubiera originado en otro planeta en forma independiente, no tendrían por qué compartir características y rasgos con los seres vivos terrestres
- B. Que necesariamente compartirían las características de los seres vivos terrestres
- C. Que serían más complejos que cualquier organismo terrestre
- D. Que su existencia contradiría las leyes de la biología evolutiva

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 42
**Subtema:** Origen de la vida · búsqueda de vida en el Universo

Muchos biólogos evolucionistas señalan que, si esta se hubiera originado y evolucionado en otro planeta en forma independiente, los organismos extraterrestres no tendrían por qué compartir sus características y rasgos con los seres vivos terrestres.

---

## Sub-lote 17 · Heterótrofos y autótrofos (p. 43)

### 90

De acuerdo con el libro de Biología, ¿qué son capaces de hacer los organismos autótrofos?

- A. Sintetizar moléculas orgánicas a partir de materiales inorgánicos simples
- B. Sintetizar materiales inorgánicos a partir de moléculas orgánicas complejas
- C. Incorporar moléculas orgánicas ya formadas del medio
- D. Sobrevivir únicamente en ausencia de oxígeno

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 43
**Subtema:** Origen de la vida · heterótrofos y autótrofos

En el curso del tiempo, habrían aparecido organismos autótrofos capaces de sintetizar moléculas orgánicas a partir de materiales inorgánicos simples, lo cual habría representado una gran ventaja adaptativa que rápidamente se propagó.

### 91

De conformidad con el libro de Biología, ¿qué células tuvieron mayor probabilidad de sobrevivir y reproducirse al disminuir los recursos?

- A. Las que podían usar más eficazmente los recursos que se encontraban limitados
- B. Las que podían almacenar mayor cantidad de recursos
- C. Las que podían reproducirse con mayor rapidez
- D. Las que podían desplazarse hacia otros ambientes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 43
**Subtema:** Origen de la vida · heterótrofos y autótrofos

Las células que podían usar más eficazmente los recursos que se encontraban limitados fueron las que tuvieron mayor probabilidad de sobrevivir y reproducirse.

### 92

En relación con el libro de Biología, ¿qué sugieren algunos hallazgos recientes sobre las primeras células?

- A. Que podrían haber sido autotróficas, quimiosintéticas o fotosintéticas antes que heterotróficas
- B. Que fueron heterotróficas antes que autotróficas, sin excepción
- C. Que fueron exclusivamente fotosintéticas desde el principio
- D. Que no obtenían energía de ninguna de esas formas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 43
**Subtema:** Origen de la vida · heterótrofos y autótrofos

Sin embargo, algunos hallazgos recientes sugieren que las primeras células podrían haber sido autotróficas, quimiosintéticas o fotosintéticas antes que heterotróficas.

> El libro presenta **dos versiones** del orden: primero la clásica —heterótrofos
> antes que autótrofos, reactivo 90— y luego la que sugieren los hallazgos
> recientes, que la invierte. Conviene saber que el libro no cierra el punto.

---

## Sub-lote 18 · La teoría celular (p. 44)

### 93

De acuerdo con el libro de Biología, ¿qué afirma la teoría celular sobre la composición de los organismos vivos?

- A. Que todos los organismos vivos están compuestos por una o más células
- B. Que todos los organismos vivos están compuestos por tejidos y órganos
- C. Que sólo los organismos complejos están compuestos por células
- D. Que los organismos vivos están compuestos por moléculas orgánicas libres

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · teoría celular

Esta teoría afirma que: Todos los organismos vivos están compuestos por una o más células.

### 94

De conformidad con el libro de Biología, según la teoría celular, ¿de dónde se originan las células?

- A. De otras células
- B. De moléculas orgánicas que se autoensamblan
- C. De coacervados y microesferas
- D. De materiales inorgánicos simples

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · teoría celular

Las células se originan de otras células.

### 95

En relación con el libro de Biología, según la teoría celular, ¿dónde ocurren las reacciones químicas de un organismo vivo?

- A. Dentro de las células
- B. En el medio externo que rodea a las células
- C. En la membrana que separa la célula del medio
- D. En los espacios entre las células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · teoría celular

Las reacciones químicas de un organismo vivo, incluidos los procesos que liberan energía, y las reacciones biosintéticas ocurren dentro de las células.

### 96

De acuerdo con el libro de Biología, según la teoría celular, ¿qué contienen las células y cómo se transmite?

- A. La información hereditaria que define sus características, que pasa de células progenitoras a células hijas
- B. La energía solar capturada, que pasa de unas células a otras
- C. Las organelas, que pasan de células progenitoras a células hijas
- D. Las enzimas, que se sintetizan de nuevo en cada célula hija

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · teoría celular

Las células contienen la información hereditaria que define sus características, y esta información pasa de células progenitoras a células hijas.

### 97

De conformidad con el libro de Biología, ¿cómo se llama el medio interno de la célula donde ocurren las reacciones bioquímicas?

- A. Citoplasma
- B. Nucleoide
- C. Núcleo
- D. Organela

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · teoría celular

En este medio interno, llamado citoplasma, ocurren reacciones bioquímicas de transformación de materia y energía.

---

## Sub-lote 19 · Procariontes y eucariontes (pp. 44–45)

### 98

En relación con el libro de Biología, ¿en qué dos tipos celulares está formado todo ser vivo?

- A. En células procariontes (bacterias y arqueas) y células eucariontes (protistas, plantas, hongos y animales)
- B. En células procariontes (protistas y hongos) y células eucariontes (bacterias y arqueas)
- C. En células autótrofas y células heterótrofas
- D. En células con núcleo y células sin citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

Todos los seres vivos están formados por alguno de los siguientes tipos celulares: las células procariontes (bacterias y arqueas) y las células eucariontes (protistas, plantas, hongos y animales).

> Cuidado con el reparto: **bacterias y arqueas** son procariontes; **protistas,
> plantas, hongos y animales** son eucariontes. El distractor B los intercambia.

### 99

De acuerdo con el libro de Biología, ¿cuál es la principal diferencia entre ambos tipos celulares?

- A. La presencia de estructuras membranosas en su interior, o la ausencia de estas
- B. La presencia o ausencia de citoplasma
- C. La presencia o ausencia de material genético
- D. La capacidad o incapacidad de realizar reacciones químicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

La principal diferencia entre ambos tipos celulares está dada por la presencia de estructuras membranosas en su interior o la ausencia de estas. Mientras que las células eucariontes poseen membranas internas (en el núcleo y organelas), las procariontes carecen de ellas.

### 100

De conformidad con el libro de Biología, ¿qué significan las raíces griegas de la palabra "eucarionte"?

- A. "Eu", verdadero, y "karyon", núcleo
- B. "Eu", antes, y "karyon", célula
- C. "Eu", falso, y "karyon", membrana
- D. "Eu", interno, y "karyon", núcleo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

En las células eucariontes (del griego eu, que significa "verdadero", y karyon, "núcleo").

> Par etimológico que el libro define: **procarionte** es "antes de un núcleo" y
> **eucarionte** es "núcleo verdadero". El distractor B mezcla la raíz de
> procarionte ("antes") con eucarionte.

### 101

En relación con el libro de Biología, ¿dónde se ubica el material genético en las células procariontes?

- A. En una región definida del citoplasma llamada nucleoide, sin membrana que lo delimite
- B. En un núcleo bien definido, separado por la envoltura nuclear
- C. En el interior de las organelas rodeadas por membranas
- D. En la membrana celular externa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

En las células procariontes, el material genético es una molécula de ADN grande y circular. Aunque carece de una membrana que lo delimite, está ubicado en una región definida del citoplasma llamada nucleoide.

> Par que se cruza: el **nucleoide** (procariontes) no tiene membrana; el
> **núcleo** (eucariontes) sí, delimitado por la envoltura nuclear.

### 102

De acuerdo con el libro de Biología, ¿cómo es la molécula de ADN de las células procariontes?

- A. Grande y circular, con diversas proteínas débilmente asociadas que la enrollan
- B. Pequeña y lineal, fuertemente unida a la envoltura nuclear
- C. Fragmentada en varias moléculas rodeadas por membrana
- D. Idéntica a la de las células eucariontes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

En las células procariontes, el material genético es una molécula de ADN grande y circular a la que están débilmente asociadas diversas proteínas que lo enrollan.

### 103

De conformidad con el libro de Biología, ¿cómo se llaman las estructuras rodeadas por membranas donde se llevan a cabo muchas funciones en las células eucariontes?

- A. Organelas
- B. Nucleoides
- C. Coacervados
- D. Ribosomas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

En las células eucariontes, muchas de estas funciones se llevan a cabo en el interior de diversas estructuras rodeadas por membranas —las organelas— que constituyen distintos compartimentos dentro del citoplasma.

### 104

En relación con el libro de Biología, ¿cómo se encuentran las moléculas y complejos moleculares en las células procariontes?

- A. Libres en el citoplasma, aunque ciertos procesos ocurren asociados a zonas específicas
- B. Encerradas en organelas rodeadas por membranas
- C. Fijas a la envoltura nuclear
- D. Distribuidas en distintos compartimentos membranosos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 44
**Subtema:** Origen de la vida · procariontes y eucariontes

En las células procariontes, todas las moléculas y complejos moleculares se encuentran libres en el citoplasma, aunque ciertos procesos ocurren asociados a zonas específicas de este o de la membrana celular.

---

## Sub-lote 20 · El origen de las células eucariotas (p. 45)

### 105

De acuerdo con el libro de Biología, ¿cómo se considera el origen de los primeros eucariontes en un mundo de procariontes?

- A. Una de las transiciones evolutivas principales, sólo precedida en importancia por el origen de la vida
- B. Una transición menor dentro de la evolución de los procariontes
- C. El acontecimiento más importante de la historia de la vida
- D. Una consecuencia directa de la aparición de la fotosíntesis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · origen de los eucariotas

El origen de los primeros eucariontes en un mundo de procariontes ha sido una de las transiciones evolutivas principales, solo precedida en orden de importancia por el origen de la vida.

### 106

De conformidad con el libro de Biología, según la hipótesis más aceptada, ¿cómo se originaron las organelas eucariontes?

- A. Cuando ciertos organismos procariotes se alojaron en el interior de otras células protoeucariontes y dieron lugar a asociaciones simbióticas estables
- B. Cuando la membrana celular se invaginó hasta formar compartimentos internos
- C. Cuando el ADN circular de los procariontes se fragmentó en organelas
- D. Cuando dos células eucariontes se fusionaron en una sola

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · origen de los eucariotas

Una hipótesis que actualmente cuenta con un amplio grado de aceptación es que las organelas eucariontes se originaron cuando ciertos organismos procariotes se alojaron en el interior de otras células protoeucariontes, es decir, las primeras células que dieron origen al grupo de los eucariontes y dieron lugar, en algunos casos, a asociaciones simbióticas estables que se especializaron adaptativamente, hasta que los organismos del interior pasaron a ser organelas.

### 107

En relación con el libro de Biología, ¿quién propuso en 1967 la teoría de endosimbiosis en serie?

- A. La investigadora estadounidense Lynn Margulis
- B. La investigadora estadounidense Helena Curtis
- C. El científico norteamericano Frank Drake
- D. El biólogo y premio Nobel Jack Szostak

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · origen de los eucariotas

En 1967, la investigadora estadounidense Lynn Margulis (1938-2011) propuso la teoría de endosimbiosis en serie.

### 108

De acuerdo con el libro de Biología, ¿qué significa la raíz "endo" de la teoría de endosimbiosis?

- A. "Dentro" o "interno"
- B. "Antes" o "previo"
- C. "Verdadero" o "propio"
- D. "Conjunto" o "serie"

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · origen de los eucariotas

La teoría de endosimbiosis en serie (endo significa "dentro" o "interno").

### 109

De conformidad con el libro de Biología, ¿el origen de qué organelas explica especialmente la teoría de Margulis?

- A. Las mitocondrias y los cloroplastos
- B. El núcleo y la envoltura nuclear
- C. El nucleoide y los ribosomas
- D. La membrana celular y el citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · origen de los eucariotas

Lynn Margulis propuso la teoría de endosimbiosis en serie para explicar el origen de algunas organelas presentes en eucariontes, especialmente las mitocondrias y los cloroplastos.

### 110

En relación con el libro de Biología, ¿cómo se habría establecido la membrana nuclear, que la teoría de Margulis no explica?

- A. A partir de una invaginación de la membrana celular
- B. A partir de un procarionte alojado en el interior de la célula
- C. A partir de la fusión de dos mitocondrias
- D. A partir del ADN circular de los cloroplastos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · origen de los eucariotas

Esta interpretación no puede extrapolarse al origen de la membrana nuclear, la cual se habría establecido a partir de una invaginación de la membrana celular.

> El libro es explícito en el **límite** de la teoría: la endosimbiosis explica
> mitocondrias y cloroplastos, pero **no** la membrana nuclear, que viene de una
> invaginación. Ese contraste es buen material de reactivo.

### 111

De acuerdo con el libro de Biología, ¿a partir de qué diferencias es posible clasificar a los seres vivos en uno de tres dominios?

- A. A partir de diferencias entre las secuencias del ARN ribosómico
- B. A partir de diferencias entre las secuencias del ADN circular
- C. A partir de la presencia o ausencia de mitocondrias
- D. A partir del tipo de organelas que poseen

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · dominios

A partir de diferencias entre las secuencias del ARN ribosómico, es posible clasificarlos en uno de tres dominios.

### 112

De conformidad con el libro de Biología, ¿qué constituye el dominio Eukarya?

- A. Todos los organismos formados por células eucariontes
- B. Todos los organismos formados por células procariontes
- C. Únicamente las bacterias y las arqueas
- D. Únicamente los protistas y los hongos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 45
**Subtema:** Origen de la vida · dominios

Un primer dominio lo constituyen todos los organismos formados por células eucariontes. Se trata del dominio Eukarya.

---

## Sub-lote 21 · Las evidencias de la endosimbiosis (p. 46)

### 113

De acuerdo con el libro de Biología, ¿en qué tipos de evidencias se sustenta la teoría endosimbiótica?

- A. Estructurales, bioquímicas y evolutivas
- B. Estructurales, genéticas y ecológicas
- C. Morfológicas, fisiológicas y geológicas
- D. Bioquímicas, embriológicas y paleontológicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · evidencias de la endosimbiosis

Esta teoría se sustenta en una variedad de evidencias de diversos tipos: estructurales, bioquímicas y evolutivas.

### 114

De conformidad con el libro de Biología, ¿qué habrían sido las mitocondrias en forma libre, según la teoría endosimbiótica?

- A. Bacterias heterótrofas aeróbicas, capaces de utilizar el oxígeno para obtener energía
- B. Bacterias autótrofas fotosintéticas, capaces de captar la luz solar
- C. Arqueas metanógenas, capaces de producir metano
- D. Células protoeucariontes con núcleo definido

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · evidencias de la endosimbiosis

La teoría endosimbiótica propone que las mitocondrias pudieron haber existido en forma libre como bacterias heterótrofas aeróbicas, es decir, como células capaces de utilizar el oxígeno y obtener así energía.

### 115

En relación con el libro de Biología, ¿cómo es el ADN propio de las mitocondrias y los cloroplastos?

- A. Una única molécula continua o circular, semejante al de las bacterias
- B. Varias hebras sueltas organizadas en cromosomas, como el ADN nuclear
- C. Fragmentos lineales asociados a la envoltura nuclear
- D. Idéntico al ADN nuclear de la célula eucarionte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · evidencias de la endosimbiosis

Tanto las mitocondrias como los cloroplastos poseen un ADN propio, semejante al de las bacterias, formado por una única molécula continua o circular diferente del ADN nuclear de las células eucariontes.

> Par contrapuesto que es la clave de la evidencia: el ADN de las organelas es
> **circular, como el bacteriano**; el ADN nuclear son **hebras sueltas en
> cromosomas**. El distractor B los intercambia.

### 116

De acuerdo con el libro de Biología, ¿a qué se parece la forma de división de las mitocondrias y los cloroplastos?

- A. A la fisión binaria o bipartición de los organismos procariontes
- B. A la mitosis de las células eucariontes
- C. A la invaginación de la membrana celular
- D. A la fusión de dos organelas en una

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · evidencias de la endosimbiosis

La forma de división de las organelas tiene un cierto parecido con la fisión binaria o bipartición de los organismos procariontes.

### 117

De conformidad con el libro de Biología, ¿cómo se producen las mitocondrias y los cloroplastos?

- A. Sólo son producidos por otras mitocondrias y cloroplastos que se dividen dentro del citoplasma
- B. Son sintetizados de nuevo por el núcleo en cada división celular
- C. Se forman por invaginación de la membrana celular
- D. Se originan a partir de los ribosomas del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · evidencias de la endosimbiosis

Las mitocondrias y los cloroplastos solo son producidos por otras mitocondrias y cloroplastos que se dividen dentro del citoplasma de la célula eucarionte antes de que esta se reproduzca.

---

## Sub-lote 22 · En busca del ancestro común (recuadro 3-2, p. 46)

### 118

En relación con el libro de Biología, ¿a quién escribió Darwin, el 26 de septiembre de 1857, manifestando su convicción de que todos los seres vivos provienen de un origen común?

- A. A Huxley
- B. A Wallace
- C. A Lamarck
- D. A Margulis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

En la carta escrita a Huxley el 26 de septiembre de 1857, Darwin manifiesta su convicción acerca de que todos los seres vivos provienen de un origen común.

### 119

De acuerdo con el libro de Biología, ¿en qué obra incluyó Darwin un único esquema que ejemplifica las relaciones de ancestralidad y descendencia?

- A. El origen de las especies por medio de selección natural
- B. La expresión de las emociones en el hombre y los animales
- C. El origen del hombre
- D. El viaje del Beagle

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

En su libro El origen de las especies por medio de selección natural, Darwin incluyó un único esquema en donde ejemplifica las relaciones de ancestralidad y descendencia entre diferentes especies hipotéticas.

### 120

De conformidad con el libro de Biología, ¿cómo se ha denominado al ancestro común de todos los seres vivos?

- A. Cenancestro, LCA o LUCA
- B. Protoeucarionte
- C. Coacervado
- D. Nucleoide

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

Los biólogos han tratado de reconstruir la naturaleza del ancestro común de todos los seres vivos, al cual han denominado como cenancestro, LCA o LUCA.

### 121

En relación con el libro de Biología, ¿qué significan las siglas LUCA?

- A. Last Universal Common Ancestor
- B. Last Unique Cellular Ancestor
- C. Living Universal Common Ancestor
- D. Last Universal Cellular Archaea

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

El cenancestro, LCA o LUCA (estos dos últimos por las siglas en inglés Last Common Ancestor y Last Universal Common Ancestor, respectivamente).

> Par de siglas del mismo paréntesis: **LCA** es *Last Common Ancestor* y **LUCA**
> es *Last Universal Common Ancestor*. La diferencia es la palabra "Universal".

### 122

De acuerdo con el libro de Biología, ¿qué caracteres usaron los biólogos para hallar lo común entre un champiñón, un lactobacilo, un elefante, una orquídea y una ameba?

- A. Los caracteres moleculares
- B. Los caracteres morfológicos
- C. Los caracteres fisiológicos
- D. Los caracteres embriológicos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

Debido a que morfológicamente, a nivel macroscópico, no hay características compartidas entre un champiñón, un lactobacilo, un elefante, una orquídea y una ameba, los biólogos han utilizado ciertos caracteres que todos ellos tienen en común: los caracteres moleculares.

### 123

De conformidad con el libro de Biología, ¿cuáles son los tres principales grupos biológicos actuales?

- A. Bacteria, Archaea y Eucarya
- B. Bacteria, Protista y Eucarya
- C. Procarionte, Eucarionte y Archaea
- D. Bacteria, Archaea y Fungi

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

¿Cuáles son las relaciones de parentesco entre los tres principales grupos biológicos actuales (Bacteria, Archaea y Eucarya)?

### 124

En relación con el libro de Biología, ¿mediante el análisis de qué macromoléculas se establecieron las relaciones de parentesco entre esos tres grupos?

- A. Del ARN que forma parte de los ribosomas
- B. Del ADN circular de las mitocondrias
- C. De las proteínas de la membrana celular
- D. De los lípidos que forman la bicapa

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · ancestro común

Estas relaciones pudieron establecerse mediante la comparación de los datos provenientes del análisis de las macromoléculas de estos organismos, más específicamente del ARN que forma parte de los ribosomas.

---

## Sub-lote 23 · La endosimbiosis en detalle (pp. 46–47)

### 125

De acuerdo con el libro de Biología, ¿qué tienen todos los eucariontes que prueba que descendemos de la primera célula protoeucarionte?

- A. Todos los eucariontes tenemos mitocondrias
- B. Todos los eucariontes tenemos cloroplastos
- C. Todos los eucariontes tenemos pared celular
- D. Todos los eucariontes tenemos undulipodios

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

De esta primera célula protoeucarionte resultante descendemos, seguramente, todos los organismos con núcleo, pues todos los eucariontes tenemos mitocondrias.

### 126

De conformidad con el libro de Biología, ¿qué presentan incluso los linajes eucariontes que no tienen mitocondrias?

- A. Vestigios genéticos de haberlas tenido
- B. Cloroplastos que cumplen su función
- C. Un segundo núcleo que las reemplaza
- D. Undulipodios de gran tamaño

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

Incluso los linajes eucariontes que no tienen mitocondrias presentan vestigios genéticos de haberlas tenido.

### 127

En relación con el libro de Biología, ¿de qué modo pudieron ingresar los ancestros de las mitocondrias y los cloroplastos en la célula hospedadora?

- A. Ya sea como parásito o como alimento que luego no fue digerido
- B. Únicamente por invaginación de la membrana celular
- C. Únicamente por fusión de dos células con núcleo
- D. Únicamente arrastrados por la corriente del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

Tanto los ancestros de las mitocondrias como los ancestros de los cloroplastos pudieron haber ingresado en la célula hospedadora inicial, ya sea como parásito o como alimento que luego no fue digerido, y permanecido así en el interior de la célula.

### 128

De acuerdo con el libro de Biología, ¿con qué grupo de bacterias se ha propuesto que las mitocondrias comparten un ancestro común de vida libre?

- A. Con las Rickettsia
- B. Con las cianobacterias
- C. Con las arqueas metanógenas
- D. Con los lactobacilos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 46
**Subtema:** Origen de la vida · endosimbiosis en detalle

Se ha propuesto que las mitocondrias y el grupo de las Rickettsia, un conjunto particular de bacterias, han compartido un ancestro común de vida libre.

> Par que hay que separar: las **mitocondrias** se emparientan con las
> **Rickettsia**; los **plástidos** (cloroplastos), con las **cianobacterias**
> (ver reactivo 129).

### 129

De conformidad con el libro de Biología, ¿con qué grupo de bacterias compartía características el ancestro de los plástidos?

- A. Con las cianobacterias
- B. Con las Rickettsia
- C. Con las bacterias heterótrofas aeróbicas
- D. Con las arqueas metanógenas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

Para el caso de los plástidos, se ha sugerido que el ancestro común de vida libre compartía una gran cantidad de características con otro grupo de bacterias, las cianobacterias.

### 130

En relación con el libro de Biología, ¿qué otras dos estructuras propuso Margulis que también surgieron por endosimbiosis, en eventos aún más antiguos?

- A. El núcleo celular y las organelas de locomoción (undulipodios o cilios)
- B. Las mitocondrias y los cloroplastos
- C. Los ribosomas y la membrana celular
- D. El citoplasma y la envoltura nuclear

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

Margulis también propuso en su teoría que el núcleo celular y las organelas de locomoción eucarionte, que son los undulipodios o cilios, son el producto evolutivo de otros dos eventos endosimbióticos todavía más antiguos que aquellos que dieron lugar a las mitocondrias y los cloroplastos.

### 131

De acuerdo con el libro de Biología, ¿por qué la teoría de Margulis se llama de endosimbiosis "en serie"?

- A. Porque se asume que los eventos endosimbióticos ocurrieron varias veces y en serie, unos después de otros
- B. Porque las organelas se disponen en serie dentro del citoplasma
- C. Porque los organismos simbiontes formaban cadenas en serie
- D. Porque la teoría se publicó en una serie de artículos sucesivos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

La referencia a lo serial de la teoría se debe a que se asume que los eventos endosimbióticos ocurrieron varias veces y en serie, unos después de otros.

### 132

De conformidad con el libro de Biología, ¿qué diferencia hay entre los eventos que originaron mitocondrias y cloroplastos y los que habrían originado el núcleo y el undulipodio?

- A. Que los que habrían originado el núcleo y el undulipodio no cuentan con evidencia clara y contundente que los confirme
- B. Que los del núcleo y el undulipodio están plenamente demostrados
- C. Que los de mitocondrias y cloroplastos son sólo hipotéticos
- D. Que ninguno de los cuatro cuenta con evidencia alguna

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 47
**Subtema:** Origen de la vida · endosimbiosis en detalle

Sin embargo, la diferencia es que los eventos hipotéticos que habrían originado al núcleo y al undulipodio no cuentan con evidencia clara y contundente que los confirmen.

> El libro vuelve a marcar el **límite** de la teoría (ver reactivo 110): las
> mitocondrias y los cloroplastos tienen evidencia; el núcleo y el undulipodio,
> no. Es la reserva que el aspirante tiende a soltar.

---

## Sub-lote 24 · De la célula a los organismos multicelulares (p. 48)

### 133

De acuerdo con el libro de Biología, ¿cómo son las células de los organismos multicelulares modernos respecto de las de los eucariontes unicelulares?

- A. Muy semejantes: sus membranas plasmáticas son idénticas y sus organelas comparten la misma estructura
- B. Completamente distintas en membrana y organelas
- C. Semejantes en la membrana, pero sin organelas
- D. Idénticas salvo por la ausencia de núcleo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 48
**Subtema:** Origen de la vida · multicelularidad

Las células de los organismos multicelulares modernos son muy semejantes a las de los eucariontes unicelulares: las membranas plasmáticas de ambos son idénticas y sus organelas comparten la misma estructura.

### 134

De conformidad con el libro de Biología, ¿qué ocurre con las células en los organismos multicelulares?

- A. Se especializan, dando lugar a tipos celulares con funciones específicas, aunque cada una sigue siendo una unidad con mantenimiento autónomo
- B. Pierden su autonomía y dependen por completo de las células vecinas
- C. Se vuelven idénticas entre sí para actuar de forma coordinada
- D. Dejan de realizar reacciones químicas propias

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 48
**Subtema:** Origen de la vida · multicelularidad

En los organismos multicelulares, las células se especializan, dando lugar a tipos celulares con funciones específicas que contribuyen al funcionamiento de todo el organismo. Sin embargo, cada una sigue siendo notablemente una unidad con mantenimiento autónomo.

### 135

En relación con el libro de Biología, según el registro fósil, ¿hace cuánto aparecieron los primeros organismos multicelulares eucariontes?

- A. Hace apenas 750 millones de años
- B. Hace 3500 millones de años
- C. Hace 4600 millones de años
- D. Hace 1100 millones de años

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 48
**Subtema:** Origen de la vida · multicelularidad

Según el registro fósil, los primeros organismos multicelulares eucariontes aparecieron hace apenas 750 millones de años.

> Otra cifra para la colección de fechas del capítulo: **750 millones** son los
> multicelulares, muy posteriores a los **3500 millones** de los primeros fósiles
> celulares. Los distractores son las otras fechas del capítulo.

### 136

De acuerdo con el libro de Biología, ¿cuáles son los principales grupos de organismos multicelulares que evolucionaron a partir de eucariontes unicelulares?

- A. Protistas pluricelulares (algas), hongos, plantas y animales
- B. Bacterias, arqueas, protistas y hongos
- C. Algas, protozoarios, plantas y bacterias
- D. Hongos, plantas, animales y arqueas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 48
**Subtema:** Origen de la vida · multicelularidad

Se considera que los principales grupos de estos organismos (protistas pluricelulares –algas–, hongos, plantas y animales) evolucionaron a partir de diferentes eucariontes unicelulares.

### 137

De conformidad con el libro de Biología, ¿qué permite la organización multicelular que existe en algunos grupos bacterianos, como el género Streptomyces?

- A. La separación de algunas funciones fundamentales
- B. La formación de un núcleo verdadero
- C. La adquisición de mitocondrias
- D. La reproducción sin necesidad de esporas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 48
**Subtema:** Origen de la vida · multicelularidad

En algunos grupos bacterianos existe una cierta organización multicelular que permite la separación de algunas funciones fundamentales. Tal es el caso de algunas especies pertenecientes al género Streptomyces.

---

## Sub-lote 25 · Los seres vivos como sistemas abiertos (p. 49)

### 138

En relación con el libro de Biología, ¿cómo interaccionan con su entorno todos los sistemas biológicos?

- A. A través de intercambios de materia y energía
- B. Únicamente a través de intercambios de materia
- C. Únicamente a través de intercambios de energía
- D. A través de un límite cerrado que impide el intercambio

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · sistemas abiertos

Todos los sistemas biológicos interaccionan con su entorno, esencialmente de la misma manera: a través de intercambios de materia y energía.

### 139

De acuerdo con el libro de Biología, ¿cómo se denominan los sistemas que intercambian materia y energía con su entorno?

- A. Sistemas abiertos
- B. Sistemas cerrados
- C. Sistemas aislados
- D. Sistemas homeostáticos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · sistemas abiertos

Por esta razón, decimos que los sistemas biológicos son sistemas abiertos.

### 140

De conformidad con el libro de Biología, ¿desde qué momento son sistemas abiertos las estructuras resultantes de la evolución prebiótica?

- A. Desde antes de poder definirse como seres vivos: es una característica que permanece constante a lo largo de la evolución biológica
- B. Sólo a partir de que se convierten en seres vivos
- C. Sólo cuando alcanzan la multicelularidad
- D. Sólo cuando adquieren información genética

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · sistemas abiertos

Estas estructuras resultantes de la evolución prebiótica son sistemas abiertos; esta es una característica que permanecerá constante a lo largo de la evolución biológica, aunque aún no pueden definirse como seres vivos.

---

## Sub-lote 26 · Metabolismo, homeostasis e información (p. 49)

### 141

En relación con el libro de Biología, ¿qué constituye el metabolismo?

- A. El conjunto de reacciones químicas y de transformaciones de energía, incluidas la síntesis y la degradación de moléculas
- B. Únicamente las reacciones que degradan moléculas para obtener energía
- C. Únicamente las reacciones que sintetizan moléculas complejas
- D. El intercambio de información con el medio ambiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · metabolismo

El conjunto de reacciones químicas y de transformaciones de energía, incluidas la síntesis y la degradación de moléculas, constituyen el metabolismo.

### 142

De acuerdo con el libro de Biología, ¿en qué son "expertos" los organismos vivos?

- A. En la conversión energética
- B. En la reproducción celular
- C. En el intercambio de información
- D. En la síntesis de proteínas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · metabolismo

Los organismos vivos son "expertos" en la conversión energética.

### 143

De conformidad con el libro de Biología, ¿cómo se llama el fenómeno que permite a los seres vivos mantener su composición química estable pese a intercambiar materiales con el medio?

- A. Homeostasis
- B. Metabolismo
- C. Endosimbiosis
- D. Evolución química

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · homeostasis

A pesar de intercambiar materiales con el medio de manera constante, su composición química es muy diferente de la del ambiente que los rodea y puede mantenerse estable dentro de ciertos límites. Esto es posible por el fenómeno de la homeostasis.

### 144

En relación con el libro de Biología, ¿qué significa que los seres vivos sean homeostáticos?

- A. Que "se mantienen relativamente estables"
- B. Que "se transforman constantemente"
- C. Que "se reproducen de forma autónoma"
- D. Que "intercambian información con el medio"

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · homeostasis

Los seres vivos son homeostáticos, es decir, "se mantienen relativamente estables".

### 145

De acuerdo con el libro de Biología, además de materia y energía, ¿qué más intercambian los seres vivos con el ambiente?

- A. Información: obtienen señales del medio, las procesan y elaboran respuestas
- B. Únicamente calor con el ambiente que los rodea
- C. Células especializadas con otros organismos
- D. Organelas mediante endosimbiosis

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · información

Además de intercambiar materia y energía con el ambiente, los seres vivos también intercambian información; obtienen señales del medio que los rodea, las procesan y elaboran respuestas frente a las variaciones en las condiciones ambientales.

### 146

De conformidad con el libro de Biología, ¿a través de qué es captada la información proveniente del ambiente?

- A. A través de diversos dispositivos sensoriales
- B. A través de la membrana plasmática exclusivamente
- C. A través de la información genética
- D. A través de las organelas del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · información

La información proveniente del ambiente es captada a través de diversos dispositivos sensoriales.

---

## Sub-lote 27 · La información genética y la autoperpetuación (pp. 49–50)

### 147

De acuerdo con el libro de Biología, ¿en qué está contenida la información que orienta el desarrollo y el funcionamiento de cada individuo?

- A. En el material genético o ADN
- B. En las proteínas de la membrana
- C. En las organelas del citoplasma
- D. En los dispositivos sensoriales

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 49
**Subtema:** Origen de la vida · información genética

Esta información, que puede ser análoga a un "manual de instrucciones", es la que orienta el desarrollo y el funcionamiento de cada individuo y está contenida en el material genético o ADN.

### 148

De conformidad con el libro de Biología, ¿cómo se llama la capacidad de los seres vivos de producir copias similares a sí mismos y transmitir información a su descendencia?

- A. La autoperpetuación
- B. La homeostasis
- C. El metabolismo
- D. El desarrollo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · autoperpetuación

Esta propiedad, la autoperpetuación, es la responsable de que las especies puedan persistir a través del tiempo, generación tras generación.

### 149

En relación con el libro de Biología, ¿qué abarca el desarrollo de un organismo?

- A. Todos los cambios que se producen durante la vida de un organismo
- B. Únicamente el crecimiento en tamaño del organismo
- C. Únicamente la reproducción del organismo
- D. Únicamente la transmisión de información a la descendencia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · autoperpetuación

En forma general, el desarrollo abarca todos los cambios que se producen durante la vida de un organismo.

### 150

De acuerdo con el libro de Biología, ¿a qué hace referencia la autoperpetuación además de la reproducción dentro de una especie?

- A. A la permanencia de la vida a lo largo de miles de millones de años, pese a los cambios ambientales del planeta
- B. Al mantenimiento de la composición química estable de cada individuo
- C. A la conversión energética que realizan los organismos
- D. Al intercambio de información con el medio ambiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · autoperpetuación

La autoperpetuación no solo se refiere a la reproducción y la transmisión de información dentro de una especie, sino también hace referencia a la permanencia de la vida a lo largo de miles de millones de años, a pesar de los reiterados y profundos cambios ambientales experimentados por el planeta.

---

## Sub-lote 28 · La organización jerárquica de la vida (p. 50)

### 151

De conformidad con el libro de Biología, ¿en qué se refleja la organización de los seres vivos?

- A. En la estructura: el ordenamiento de sus componentes en el espacio, adecuado a las funciones que cumplen
- B. En el número de reacciones químicas que realizan
- C. En su capacidad de intercambiar información
- D. En la cantidad de información genética que contienen

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

La organización se refleja en la estructura: el ordenamiento de sus componentes en el espacio, adecuado a las funciones que cumplen.

### 152

En relación con el libro de Biología, ¿en qué se manifiesta la complejidad de los seres vivos?

- A. En el número de los componentes y en las interacciones que mantienen entre sí y con el medio
- B. Únicamente en el número de componentes que los forman
- C. Únicamente en el tamaño del organismo
- D. En la estabilidad de su composición química

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

La complejidad, por su parte, se manifiesta tanto en el número de los componentes como en las interacciones que estos mantienen entre sí y con el medio circundante.

### 153

De acuerdo con el libro de Biología, ¿cuál es el nivel de organización más simple de la materia?

- A. El subatómico
- B. El atómico
- C. El molecular
- D. El macromolecular

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

El nivel de organización más simple de la materia es el subatómico.

### 154

De conformidad con el libro de Biología, ¿qué partículas se encuentran en el nivel subatómico?

- A. Los protones, los neutrones y los electrones
- B. Los átomos y las moléculas
- C. Únicamente los protones y los electrones
- D. Las macromoléculas y las células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

En este nivel se encuentran principalmente los protones, los neutrones y los electrones que constituyen los átomos a los que incluimos en el nivel atómico.

### 155

En relación con el libro de Biología, ¿qué se forma cuando los átomos individuales se asocian entre sí?

- A. Moléculas
- B. Macromoléculas
- C. Células
- D. Partículas subatómicas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

En un siguiente nivel, los átomos individuales forman moléculas.

> Ojo con la escala de niveles: subatómico → atómico → molecular →
> macromolecular → celular. Cada nivel **incluye** a los anteriores; las
> moléculas se asocian en **macromoléculas**, no directamente en células.

### 156

De acuerdo con el libro de Biología, ¿a qué nivel de organización hay que recurrir para hallar mayor complejidad que el macromolecular?

- A. A los seres vivos, con el nivel celular
- B. Al nivel atómico
- C. Al nivel subatómico
- D. A las estructuras no vivas de la naturaleza

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

Si queremos identificar en la naturaleza un nivel de organización de mayor complejidad que el macromolecular, necesariamente deberemos recurrir a los seres vivos. El siguiente nivel de organización resultante de la interacción de los anteriores es el nivel celular.

> El punto es la **frontera**: hasta el nivel macromolecular basta la materia no
> viva; el nivel celular ya es exclusivo de los seres vivos.

### 157

De conformidad con el libro de Biología, ¿qué establece la célula como concepto de gran importancia en biología?

- A. La célula como unidad de todos los organismos vivos, que están compuestos por una o más células
- B. La célula como el nivel de organización más simple de la materia
- C. La célula como estructura exclusiva de los organismos pluricelulares
- D. La célula como sinónimo de macromolécula

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 50
**Subtema:** Origen de la vida · niveles de organización

Como establece la teoría celular, todos los organismos vivos están compuestos por una o más células. Este concepto es de gran importancia en biología, porque establece a la célula como la unidad.

---

## Sub-lote 29 · La propiedad emergente de cada nivel (p. 51)

### 158

De acuerdo con el libro de Biología, ¿por qué no basta con las leyes de la física y la química para comprender el nivel celular?

- A. Porque cada nivel de organización tiene propiedades específicas que no son equivalentes a la suma de las propiedades de los niveles inferiores
- B. Porque las células no están constituidas por los mismos componentes que la materia no viva
- C. Porque las leyes de la física y la química no se aplican a los seres vivos
- D. Porque el nivel celular es el nivel más simple de la materia

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · propiedad emergente

Cada nivel de organización se caracteriza por propiedades específicas que no son equivalentes a la suma de las propiedades que presentan los niveles inferiores.

> Ésta es la idea de **propiedad emergente**, aunque el libro no usa el término:
> el todo tiene propiedades que no son la suma de sus partes. El distractor B es
> falso según el propio libro (reactivo 159).

### 159

De conformidad con el libro de Biología, ¿con qué componentes químicos están constituidas las células?

- A. Con los mismos componentes químicos que forman la materia no viva
- B. Con componentes químicos exclusivos de los seres vivos
- C. Con componentes que no obedecen las leyes de la física y la química
- D. Con macromoléculas que no existen en la materia inerte

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · propiedad emergente

Las células están constituidas por los mismos componentes químicos que forman la materia no viva y sus comportamientos pueden ser explicados mediante las leyes de la física y de la química.

### 160

En relación con el libro de Biología, ¿por qué se explican las propiedades de una proteína?

- A. Por el ordenamiento específico de los aminoácidos y por sus interacciones particulares
- B. Únicamente por el número total de aminoácidos que la forman
- C. Por el nivel subatómico de sus componentes
- D. Por el tipo de célula en que se encuentra

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · propiedad emergente

Las propiedades de las proteínas, que corresponden a un nivel macromolecular, se explican por el ordenamiento específico de los aminoácidos (nivel molecular) y por sus interacciones particulares. Un ordenamiento e interacciones diferentes de los mismos aminoácidos darán lugar a proteínas con propiedades también diferentes.

---

## Sub-lote 30 · Tejidos, órganos y sistemas (p. 51)

### 161

De acuerdo con el libro de Biología, ¿a qué dio lugar el pasaje de la unicelularidad a la multicelularidad?

- A. A la especialización de las funciones
- B. A la desaparición de las organelas
- C. A la pérdida de la autonomía celular
- D. A la aparición de las primeras células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · tejidos, órganos y sistemas

El pasaje de la unicelularidad a la multicelularidad representó un hecho de gran importancia en la evolución de los seres vivos, ya que dio lugar a la especialización de las funciones.

### 162

De conformidad con el libro de Biología, ¿qué constituye la asociación de células individuales que se especializan en determinadas funciones?

- A. Los tejidos, como el epitelial, el conectivo y el nervioso
- B. Los órganos, como el hígado y el cerebro
- C. Los sistemas de órganos
- D. Las poblaciones

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · tejidos, órganos y sistemas

Las células individuales pueden asociarse, interactuar y especializarse en determinadas funciones. Esta nueva asociación celular particular constituye los tejidos, tales como el epitelial, el conectivo y el nervioso.

### 163

En relación con el libro de Biología, ¿qué se forma cuando distintos tejidos se asocian e interactúan?

- A. Los órganos, como el hígado, el tracto intestinal o el cerebro humano
- B. Los tejidos, como el epitelial y el conectivo
- C. Las células especializadas
- D. Los sistemas de órganos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · tejidos, órganos y sistemas

Distintos tejidos se asocian e interactúan, formando estructuras aún más complejas: los órganos, como el hígado, el tracto intestinal o el cerebro humano.

> Escala de niveles dentro del organismo: células → **tejidos** → **órganos** →
> sistemas de órganos. Cada uno surge de asociar los del nivel anterior.

### 164

De acuerdo con el libro de Biología, ¿cuál es el nivel de organización más complejo que se puede encontrar en un organismo individual?

- A. La asociación entre órganos que interactúan cumpliendo funciones específicas, como la digestión o la reproducción
- B. El tejido especializado en una función
- C. El órgano de mayor complejidad, como el cerebro
- D. La célula individual con mantenimiento autónomo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · tejidos, órganos y sistemas

Se puede distinguir, incluso, una nueva asociación entre órganos que interactúan cumpliendo funciones específicas, como la digestión o la reproducción. Este nuevo nivel de organización es el más complejo que se puede encontrar en un organismo individual.

---

## Sub-lote 31 · Del organismo a la biosfera (p. 51)

### 165

De conformidad con el libro de Biología, ¿qué sistema de organización constituyen los organismos al interactuar unos con otros?

- A. Las poblaciones
- B. Las comunidades
- C. Los ecosistemas
- D. La biosfera

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · del organismo a la biosfera

Los organismos interactúan unos con otros y estas interacciones dan lugar a un sistema más vasto de organización, las poblaciones.

### 166

En relación con el libro de Biología, ¿qué constituyen las poblaciones al interactuar con otras poblaciones?

- A. Las comunidades
- B. Los ecosistemas
- C. La biosfera
- D. Los organismos individuales

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · del organismo a la biosfera

A su vez, al interactuar con otras poblaciones constituyen las comunidades.

### 167

De acuerdo con el libro de Biología, ¿qué nuevo sistema se delimita al analizar las diversas comunidades en interacción con el ambiente?

- A. El ecosistema
- B. La población
- C. La biosfera
- D. La comunidad

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · del organismo a la biosfera

Cuando se analizan las diversas comunidades en interacción con el ambiente es posible delimitar un nuevo sistema, el ecosistema.

### 168

De conformidad con el libro de Biología, ¿cuál es el último nivel de organización, que abarca a escala planetaria toda la diversidad de seres vivos y sus interacciones con el ambiente físico?

- A. La biosfera
- B. El ecosistema
- C. La comunidad
- D. La población

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · del organismo a la biosfera

Si analizamos a escala planetaria la gran diversidad de plantas, animales y microorganismos, y sus interacciones mutuas y con el ambiente físico podremos definir un último nivel de organización, la biosfera.

> Escala ecológica completa, que conviene estudiar en orden: organismo →
> **población** → **comunidad** → **ecosistema** → **biosfera**. El salto de
> comunidad a ecosistema es el que suma el **ambiente físico**.

---

## Sub-lote 32 · Unidad y diversidad (p. 51)

### 169

En relación con el libro de Biología, ¿qué comparten todos los seres vivos que permite diferenciarlos de lo no vivo?

- A. Una historia evolutiva que se refleja en cada una de sus características
- B. Un mismo número de niveles de organización
- C. Una composición química exclusiva de los seres vivos
- D. La capacidad de formar tejidos y órganos

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · unidad y diversidad

Si hay algo que todos los seres vivos comparten es una historia evolutiva que se refleja en cada una de sus características y permite diferenciarlos de aquello que no está vivo.

### 170

De acuerdo con el libro de Biología, ¿de qué es consecuencia tanto la unidad como la diversidad de los seres vivos?

- A. Del mismo proceso evolutivo
- B. De la homeostasis
- C. De la organización jerárquica
- D. Del intercambio de información con el ambiente

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · unidad y diversidad

A pesar de estas características comunes, existe una enorme diversidad entre ellos respecto de sus formas y funciones. Y esto también es consecuencia del mismo proceso evolutivo. Tanto la unidad como la diversidad de los seres vivos pueden explicarse desde esta perspectiva.

> Punto fino que el libro subraya: **la misma** causa —la evolución— explica a la
> vez lo que los seres vivos tienen en común y lo que los diferencia. No son dos
> explicaciones distintas.

### 171

De conformidad con el libro de Biología, ¿con cuántas especies de organismos diferentes compartimos el planeta?

- A. Con más de 20 millones de especies
- B. Con más de 2 millones de especies
- C. Con más de 200 millones de especies
- D. Con más de 20 mil especies

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 51
**Subtema:** Origen de la vida · unidad y diversidad

Compartimos nuestro planeta con más de 20 millones de especies de organismos diferentes; enormemente diversos en la organización de sus cuerpos, en sus patrones de reproducción, crecimiento y desarrollo, y en su comportamiento.

---

## Sub-lote 33 · El nacimiento de la teoría celular (ensayo 3-1, p. 52)

*Leído con `render.py`: la capa de texto del recuadro trae lorem ipsum.*

### 172

De acuerdo con el libro de Biología, ¿a fines de qué década surge la teoría celular?

- A. A fines de 1830
- B. A fines de 1850
- C. A fines de 1800
- D. A fines de 1860

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

La teoría celular surge a fines de 1830 y fue propuesta por Mathias Jacob Schleiden (1804-1881) y Theodor Schwann (1810-1882).

### 173

De conformidad con el libro de Biología, ¿quiénes propusieron la teoría celular?

- A. Mathias Jacob Schleiden y Theodor Schwann
- B. Rudolf Virchow y Theodor Schwann
- C. Santiago Ramón y Cajal y Camilo Golgi
- D. Mathias Jacob Schleiden y Rudolf Virchow

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

La teoría celular surge a fines de 1830 y fue propuesta por Mathias Jacob Schleiden (1804-1881) y Theodor Schwann (1810-1882).

### 174

En relación con el libro de Biología, ¿a qué conclusión llegó Schleiden a partir del estudio sistemático de las plantas?

- A. A que la célula era la unidad fundamental y última de los vegetales que posee características biológicas
- B. A que la célula sólo surge de células preexistentes
- C. A que el tejido nervioso está formado por células independientes
- D. A que los animales y las plantas consisten en sustancias segregadas por células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

El primero, a partir del estudio sistemático de las plantas, llegó a la conclusión de que la célula era la unidad fundamental y última de los vegetales que posee características biológicas.

> Reparto de méritos que se cruza: **Schleiden** trabajó las plantas; **Schwann**
> buscó la misma unidad en los animales (reactivo 175). El distractor B es de
> Virchow y el C de Ramón y Cajal.

### 175

De acuerdo con el libro de Biología, ¿qué desafío asumió Schwann?

- A. Encontrar en el mundo animal la misma unidad que Schleiden proponía para las plantas
- B. Demostrar que las células sólo surgen de células preexistentes
- C. Teñir por primera vez una muestra de tejido nervioso
- D. Estudiar sistemáticamente la estructura de las plantas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Por su parte, Schwann asumió el desafío de encontrar en el mundo animal esa misma unidad que proponía Schleiden para las plantas.

### 176

De conformidad con el libro de Biología, ¿cuál fue el postulado que enunció Schwann?

- A. "Todos los seres vivos, plantas o animales, consisten ya sea en células o en sustancias segregadas por células"
- B. "Donde existe una célula debe haber habido una célula preexistente"
- C. "La célula es la unidad fundamental y última de los vegetales"
- D. "Todo tejido nervioso está compuesto por células independientes o neuronas"

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Luego de analizar una enorme variedad de tejidos animales, enuncia su postulado: "Todos los seres vivos, plantas o animales, consisten ya sea en células o en sustancias segregadas por células".

### 177

En relación con el libro de Biología, ¿a qué ideas asestó un duro golpe la formulación de Schwann?

- A. A las ideas vitalistas que identificaban a los seres vivos como un todo continuo
- B. A las ideas que proponían que las células surgen de células preexistentes
- C. A las ideas de la teoría de la neurona
- D. A las ideas del estudio sistemático de las plantas

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Schwann impone un duro golpe a las ideas vitalistas que identificaban a los seres vivos como un todo continuo, al plantear la existencia de unidades discontinuas que reúnen las características de cualquier ser vivo y que a la vez los constituyen.

### 178

De acuerdo con el libro de Biología, ¿qué generalizó el patólogo Rudolf Virchow en 1858?

- A. Que las células sólo pueden surgir de células preexistentes
- B. Que la célula es la unidad fundamental de los vegetales
- C. Que el tejido nervioso está formado por un cordón continuo
- D. Que los seres vivos son un todo continuo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

En 1858, la idea de que todos los organismos vivos estaban compuestos por una o más células adquirió un significado aún más amplio, cuando el patólogo Rudolf Virchow (1821-1902) generalizó que las células solo pueden surgir de células preexistentes.

### 179

De conformidad con el libro de Biología, ¿cómo expresó Virchow su generalización?

- A. "Donde existe una célula debe haber habido una célula preexistente, así como un animal se origina solamente de un animal y una planta se origina solo de una planta"
- B. "Todos los seres vivos consisten en células o en sustancias segregadas por células"
- C. "La célula es la unidad fundamental y última de los vegetales"
- D. "El tejido nervioso está compuesto por células independientes o neuronas"

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Virchow generalizó que las células solo pueden surgir de células preexistentes: "Donde existe una célula debe haber habido una célula preexistente, así como un animal se origina solamente de un animal y una planta se origina solo de una planta".

### 180

En relación con el libro de Biología, ¿para qué tejido animal no se había podido comprobar, a principios del siglo XX, que su estructura estuviera formada de células?

- A. El tejido nervioso
- B. El tejido epitelial
- C. El tejido conectivo
- D. El tejido sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Todavía a principios del siglo XX había un tejido animal para el cual no se había podido comprobar que su estructura estuviera formada de células: el tejido nervioso.

### 181

De acuerdo con el libro de Biología, ¿qué planteaba la teoría reticular sobre los nervios?

- A. Que los nervios estaban conformados por un cordón continuo e indiferenciado
- B. Que los nervios estaban conformados por células independientes, aunque enlazadas
- C. Que los nervios no estaban formados por tejido vivo
- D. Que los nervios sólo podían surgir de nervios preexistentes

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Competían dos hipótesis por lograr una explicación: la teoría reticular, que planteaba que los nervios estaban conformados por un cordón continuo e indiferenciado, y la teoría de la neurona, que proponía que toda la estructura estaba conformada por células independientes.

> Par contrapuesto que el libro define seguido: la **teoría reticular** dice
> cordón continuo; la **teoría de la neurona**, células independientes. Ramón y
> Cajal probó la segunda (reactivo 183).

### 182

De conformidad con el libro de Biología, ¿qué proponía la teoría de la neurona?

- A. Que toda la estructura del tejido nervioso estaba conformada por células independientes, aunque enlazadas, a lo largo de las fibras nerviosas
- B. Que el tejido nervioso era un cordón continuo e indiferenciado
- C. Que las neuronas sólo surgen de neuronas preexistentes
- D. Que el tejido nervioso no estaba formado por células

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

La teoría de la neurona, que proponía que toda la estructura estaba conformada por células independientes, aunque enlazadas, a lo largo de las fibras nerviosas.

### 183

En relación con el libro de Biología, ¿quién logró teñir por primera vez una muestra de tejido nervioso y demostró que estaba compuesto por neuronas?

- A. El médico y microscopista español Santiago Ramón y Cajal
- B. El médico italiano Camilo Golgi
- C. El patólogo Rudolf Virchow
- D. Theodor Schwann

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

El médico y microscopista español Santiago Ramón y Cajal (1852-1934) logró teñir por primera vez una muestra de tejido nervioso, empleando el método de sales de plata desarrollado por el médico italiano Camilo Golgi (1843-1926), y así pudo demostrar que efectivamente este tejido estaba compuesto por células independientes o neuronas.

### 184

De acuerdo con el libro de Biología, ¿quién desarrolló el método de sales de plata que empleó Ramón y Cajal?

- A. El médico italiano Camilo Golgi
- B. El patólogo alemán Rudolf Virchow
- C. Mathias Jacob Schleiden
- D. Theodor Schwann

**Respuesta:** A
**Referencia:** Curtis, Helena (2022) *Biología*, Editorial Médica Panamericana, Pág. 52
**Subtema:** Origen de la vida · nacimiento de la teoría celular

Empleando el método de sales de plata desarrollado por el médico italiano Camilo Golgi (1843-1926).

> Par que se confunde: **Golgi** desarrolló el método de tinción; **Ramón y Cajal**
> lo empleó para probar la teoría de la neurona. El italiano puso la técnica, el
> español la conclusión.

---

**Reactivos en este archivo:** 184
