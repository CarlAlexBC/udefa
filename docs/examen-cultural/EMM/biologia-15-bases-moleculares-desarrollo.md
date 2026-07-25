# Biología · Capítulo 15 · Bases moleculares del desarrollo

## Libro — a quién pertenece este material

Curtis, Barnes, Schnek, Massarini. *Biología*. **Editorial Médica Panamericana**,
**octava edición**. Edición, año y desfase verificados en
`biologia-03-origen-vida.md` (8ª ed.; se cita 2022; desfase **+46**).

**Los reactivos pertenecen al libro, no a un plantel.** El orden es
`Libro → Capítulo → Tema → Reactivo`. Un plantel no es dueño del material: por el otro
lado va la demanda (`Plantel → Carrera → Temario por año → selecciona Temas`), y un examen
se arma cruzando ambos. Por eso el mismo reactivo puede servir a varias escuelas y
carreras sin existir dos veces, y por eso los campos **Referencia:** (libro, edición,
página) y **Subtema:** son la llave con la que el temario los manda a llamar.

**Quién lo pide hoy:** sólo la **EMOS** — Escuela Militar de Oficiales de Sanidad (clave
de materia `BIO-01-2026`). Ninguna otra escuela pide hoy este capítulo. Si mañana lo pide
otra, se trae de aquí: no se duplica.

> **Carpeta pendiente de migrar.** Este archivo nace en `docs/examen-cultural/EMM/` a
> propósito, junto al resto de Biología, para que la materia se mueva completa en un solo
> paso y no quede partida en dos sitios. Cuando se migre, la carpeta se nombra por el
> **libro** (como ya se hizo con `fisica-perez-montiel/`), no por la escuela.

**Sin línea `**Tema:**` en este libro.** El temario de Biología pide **capítulos
completos**, no temas sueltos, así que la clave de temario no aporta nada y se omite. El
**Subtema:** va en prosa, con el mismo patrón que el resto de la materia.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro trae capa
de texto). Las figuras y los recuadros van con `render.py` o `crop.py` cuando su capa de
texto sale en lorem ipsum o cifrada. Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado hoja por hoja.** El capítulo 15 pertenece a la
**Sección III · Patrones y procesos de la herencia**. El capítulo 14 termina en la hoja 369
(página impresa 323); la hoja 370 (página impresa 324) está en blanco. La **portadilla del
capítulo 15 es la hoja 371 (página impresa 325)**: trae el número 15, el título "BASES
MOLECULARES DEL DESARROLLO", el epígrafe de Franz Kafka y el apartado de apertura "Biología
en contexto social · Las huellas de la talidomida".

**El cuerpo empieza en la hoja 372 (página impresa 326)**, donde bajo el encabezado de
sección arranca el texto con las preguntas guía ("¿Cómo se forman los distintos organismos
a partir de una primera célula?…") y la sección "La biología del desarrollo a lo largo de
la historia". En esa misma página, en la otra columna, sigue el recuadro de apertura de la
talidomida (la trampa habitual de este libro: la página parece sólo continuación del
recuadro, pero ya trae cuerpo de capítulo). Verificado con `extraer.py`.

**Desfase reverificado aquí:** hoja 372 = página impresa 326 (+46), hoja 371 = página
impresa 325 (+46). Leído de la hoja, nunca calculado.

**Qué queda fuera por norma.** El ensayo de cierre "Retomando la problemática inicial" y
los ejercicios **no llevan reactivos**, igual que en los capítulos 14, 32, 35 y 36. Del
apartado de apertura "Biología en contexto social · Las huellas de la talidomida" **sí se
toman reactivos, pero sólo de sus datos de biología** —la teratogenia de la talidomida, las
malformaciones que produce (meromelia y amelia), y que atraviesa la placenta y altera el
desarrollo embrionario—, nunca de la discusión social sobre la industria farmacéutica, la
FDA o la figura de Frances Kelsey.

## Erratas del libro

El capítulo escribe mal varios nombres propios en su capa de texto (leída con `extraer.py`,
que extrae el texto embebido, no un escaneo). Verificadas contra la grafía estándar:

| Dónde | Cómo lo escribe el libro | Grafía correcta |
|---|---|---|
| p. 327 | "Marcelo **Malphigi** (1628-1694)" | **Marcello Malpighi** |
| p. 327 | "Antonie van **Leewenhoek** (1632-1723)" | **Antonie van Leeuwenhoek** |
| p. 328, pie de la fig. 15-2 | "Nicolas **Hartsoek** (1656-1725)" | **Nicolaas Hartsoeker** |
| p. 328 | "Wilhelm **Johansen**" | **Wilhelm Johannsen** |
| p. 328 | "Caspar **Friederich** Wolff (1733-1794)" | **Caspar Friedrich Wolff** |
| p. 329 | "Lewis **Wolper**" | **Lewis Wolpert** |
| p. 325, recuadro | "Widuking Lenz" · "William Mc Bride" | **Widukind Lenz** · **William McBride** |

**No se escriben reactivos que dependan de la grafía de estos nombres.** En los enunciados
se usa la grafía correcta; la cita textual de la opción y de la justificación conserva lo
que dice el libro cuando hace falta, porque el aspirante lee este libro.

## Cómo se escriben estos reactivos

Recuerdo literal: la opción correcta y la justificación son **cita textual** del Curtis, sin
parafrasear. Cuatro opciones del mismo tipo y magnitud; los mejores distractores salen del
mismo párrafo o del mismo cuadro. La correcta se escribe siempre en **A** porque el
importador baraja las opciones. El enunciado nombra el libro y alterna las tres fórmulas
del Anexo "H": "De acuerdo con", "De conformidad con", "En relación con".

**Pendiente:** el capítulo 15 está EN CURSO; cubiertas las páginas impresas **325 a 331** (dos tandas): el apartado de apertura de la talidomida sólo en sus datos de biología; la historia de la biología del desarrollo (preformacionismo y epigénesis, el vitalismo y el mecanicismo, las tres capas germinales, el reduccionismo genético, la fig. 15-2 del homúnculo); las etapas del desarrollo (segmentación, gastrulación, organogénesis) y la definición de desarrollo y de cigoto; y los mecanismos de la diferenciación (células competentes, especificadas y determinadas; determinantes citoplasmáticos y desarrollo en mosaico; inducción y desarrollo regulativo; interacciones paracrina y yuxtacrina; la cascada de inducción del ojo). Sigue desde la página impresa **332** en adelante (las vías de señalización: Hedgehog, Wnt y la superfamilia TGF-β/BMP, y lo que resta del capítulo), hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios. Además del 15 siguen abiertos el capítulo **14** (`biologia-14-epigenetica.md`) y el capítulo **37** (`biologia-37-digestion.md`). Biología NO está cerrada.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta —en negrita y con dos puntos— y toma el párrafo
> que le sigue hasta el primer renglón en blanco. Si se convierte en encabezado
> (`## Pendiente`), si desaparece, o si empieza con "ninguno", Biología se reporta como
> cerrada teniendo capítulos en blanco.

---

### 1

De acuerdo con el libro de Biología, ¿qué son la meromelia o la amelia?

- A. Malformaciones congénitas en las cuales los huesos de los miembros son más cortos que lo habitual o están ausentes
- B. Malformaciones congénitas en las cuales los huesos del cráneo no llegan a soldarse
- C. Enfermedades en las que los músculos de los miembros pierden fuerza de forma progresiva
- D. Alteraciones en las que los miembros pierden por completo la sensibilidad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 325
**Subtema:** desarrollo · apartado de apertura, la talidomida

…comenzó a detectarse un incremento en los casos de meromelia o amelia –malformaciones congénitas en las cuales los huesos de los miembros son más cortos que lo habitual o están ausentes– muchas veces asociadas a otras malformaciones.

---

### 2

De conformidad con el libro de Biología, ¿qué mostraron las investigaciones llevadas a cabo por científicos independientes de las empresas farmacéuticas sobre la talidomida?

- A. Que la talidomida atraviesa la placenta y altera el desarrollo embrionario
- B. Que la talidomida se acumula en el hígado de la madre y produce intoxicación
- C. Que la talidomida altera la producción de gametos en la madre
- D. Que la talidomida provoca mutaciones hereditarias en la línea germinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 326
**Subtema:** desarrollo · apartado de apertura, acción de la talidomida

Las investigaciones llevadas a cabo por científicos independientes de las empresas farmacéuticas mostraron que la talidomida atraviesa la placenta y altera el desarrollo embrionario; esto cambió radicalmente la percepción y los criterios para el uso de medicamentos durante el embarazo.

---

### 3

En relación con el libro de Biología, ¿quiénes iniciaron los estudios del desarrollo embrionario a partir de observaciones diarias de huevos de gallina?

- A. Los pensadores griegos Hipócrates y Aristóteles
- B. Los embriólogos alemanes Pander y Rathke
- C. Los naturalistas italianos Malpighi y Spallanzani
- D. Los filósofos griegos Platón y Sócrates

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 326
**Subtema:** desarrollo · historia, los griegos

…fueron los pensadores griegos Hipócrates y Aristóteles quienes iniciaron estudios a partir de observaciones diarias de huevos de gallina.

---

### 4

De acuerdo con el libro de Biología, ¿quién fue el primero en estudiar el desarrollo de embriones de ave de manera secuencial?

- A. Aristóteles
- B. Hipócrates
- C. Marcello Malpighi
- D. Karl Ernst von Baer

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 327
**Subtema:** desarrollo · historia, Aristóteles

Aristóteles fue el primero en estudiar el desarrollo de embriones de ave de manera secuencial, a partir de lo cual elaboró dos hipótesis alternativas para explicar el desarrollo embrionario.

---

### 5

De conformidad con el libro de Biología, ¿qué sugería la explicación preformacionista sobre el huevo de ave?

- A. Que dentro del huevo de ave ya existía un ave en miniatura que solo tenía que crecer en tamaño
- B. Que el ave se desarrollaba gradualmente a partir de estructuras simples
- C. Que el huevo de ave contenía únicamente las tres capas germinales
- D. Que el embrión de ave se formaba a partir del líquido seminal del macho

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 327
**Subtema:** desarrollo · historia, preformacionismo

…la primera explicación fue la preformacionista, que sugería que dentro del huevo de ave ya existía un ave en miniatura que solo tenía que crecer en tamaño.

---

### 6

En relación con el libro de Biología, según la versión espermatista del preformacionismo, ¿qué papel se le asignaba a la mujer?

- A. El de "el envase" o recipiente pasivo para el crecimiento del embrión
- B. El de aportar la mitad del ave en miniatura ya formada
- C. El de proporcionar las tres capas germinales del embrión
- D. El de dirigir el desarrollo mediante una fuerza vitalista

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 327
**Subtema:** desarrollo · historia, ovistas y espermatistas

Esta concepción, que se conoce como espermatista, situaba a la mujer en el papel de recipiente pasivo para el crecimiento del embrión. Sea cual fuera la creencia del momento, la mujer, desde todos los tiempos, fue considerada "el envase".

---

### 7

De acuerdo con el libro de Biología, ¿cuál era uno de los límites del preformacionismo?

- A. Que no podía explicar la ocurrencia de malformaciones, partos múltiples, siameses e híbridos
- B. Que no podía explicar la existencia de las tres capas germinales
- C. Que no podía explicar la presencia de gametos en ambos sexos
- D. Que no podía explicar el reduccionismo genético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 327
**Subtema:** desarrollo · historia, límites del preformacionismo

Pero el preformacionismo tenía sus límites. Por ejemplo, no podía explicar la ocurrencia de malformaciones, partos múltiples, siameses, desarrollo de embriones de ave de manera secuencial, híbridos, etc.

---

### 8

De conformidad con el libro de Biología, ¿a qué conclusión llegó el alemán Caspar Friedrich Wolff sobre la base de sus observaciones?

- A. Que todos los cuerpos se desarrollan gradualmente a partir de estructuras "simples", y que esto se extiende a toda la naturaleza, tanto en plantas como en animales
- B. Que dentro del huevo ya existía un organismo en miniatura preformado
- C. Que el desarrollo estaba guiado por una fuerza mística o vitalista
- D. Que el individuo se formaba únicamente a partir del gameto masculino

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · historia, Wolff y la epigénesis

Sobre la base de sus observaciones, Wolff concluyó que todos los cuerpos se desarrollan gradualmente a partir de estructuras "simples" y que esto se extiende a toda la naturaleza, tanto en plantas como en animales.

> El libro escribe su nombre como "Caspar Friederich Wolff"; en el enunciado se usa la grafía correcta (Friedrich). El dato que se evalúa es su conclusión, no la grafía.

---

### 9

En relación con el libro de Biología, ¿qué demostraron en 1775 los experimentos del italiano Lazzaro Spallanzani?

- A. Que, para la formación de un individuo, se requerían los gametos de ambos sexos
- B. Que el individuo se formaba únicamente a partir del gameto femenino
- C. Que el líquido seminal contenía individuos en miniatura ya formados
- D. Que el desarrollo del individuo no requería la participación de gametos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · historia, Spallanzani

En 1775, los experimentos del naturalista y sacerdote italiano Lázaro Spallanzani (1729-1799) demostraron que, para la formación de un individuo, se requerían los gametos de ambos sexos (hoy conocidos como espermatozoides y oocitos).

---

### 10

De acuerdo con el libro de Biología, ¿cómo se conoció la concepción que postulaba la existencia de una fuerza mística, un plan o diseño que guiaba el desarrollo?

- A. Vitalismo
- B. Mecanicismo
- C. Preformacionismo
- D. Reduccionismo genético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · el vitalismo

Para explicarlo, se postulaba la existencia de una fuerza mística, un plan o diseño que guiaba el desarrollo, concepción que se conoció como vitalismo.

---

### 11

De conformidad con el libro de Biología, ¿qué proponían los mecanicistas sobre el desarrollo?

- A. Que el desarrollo era el resultado de una fuerza mecánica regida por leyes físicas y químicas
- B. Que el desarrollo estaba guiado por una fuerza mística o un plan preestablecido
- C. Que el desarrollo dependía exclusivamente de los genes del núcleo
- D. Que el desarrollo ocurría a partir de un organismo preformado en miniatura

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · el mecanicismo

En contraposición con el vitalismo, los mecanicistas proponían que el desarrollo era el resultado de una fuerza mecánica regida por leyes físicas y químicas.

---

### 12

En relación con el libro de Biología, ¿cuáles son las tres capas germinales que identificaron y describieron Pander, Rathke y von Baer?

- A. Ectodermo, endodermo y mesodermo
- B. Epidermis, dermis e hipodermis
- C. Notocorda, arcos faríngeos y tubo neural
- D. Ectodermo, blastodermo y mesénquima

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · embriología moderna, las capas germinales

Ellos identificaron y describieron las tres capas germinales (ectodermo, endodermo y mesodermo), la notocorda, los arcos faríngeos, entre otras estructuras.

---

### 13

De acuerdo con el libro de Biología, en el capítulo 15 sobre las bases moleculares del desarrollo, ¿en qué año se acuñó el término *gen*?

- A. En 1909
- B. En 1900
- C. En 1859
- D. En 1953

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · historia de la genética, el término *gen*

En el año 1900 se publicaron tres estudios independientes que reinterpretaban las leyes de Mendel; esto dio sustento al surgimiento de la genética (aunque el término gen recién fue acuñado en el año 1909 por Wilhelm Johansen).

> El distractor "1900" es el año de la reinterpretación de las leyes de Mendel que aparece en el mismo párrafo; se presta a confusión a propósito. El libro escribe el apellido como "Johansen" (la grafía estándar es Johannsen), pero aquí se evalúa el año, no el nombre.

---

### 14

De conformidad con el libro de Biología, ¿en qué consistió el reduccionismo genético que se instaló con fuerza tras los estudios sobre la estructura del ADN?

- A. En asignarle a los genes un "papel superior" en desmedro de la consideración del ambiente
- B. En asignarle al ambiente el papel principal por encima de los genes
- C. En negar la existencia de los genes como unidades de la herencia
- D. En reducir el desarrollo a la acción de las tres capas germinales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · el reduccionismo genético

…condujeron a instalar con fuerza el reduccionismo genético que le asignó a los genes un "papel superior" en desmedro de la consideración del ambiente.

---

### 15

En relación con el libro de Biología, ¿qué pregunta central para la embriología deja abierta el paradigma que otorga un papel central a los genes?

- A. Cómo es posible que, si casi todas las células tienen el mismo genoma, unas se diferencien en neuronas, otras en células musculares y otras en células de la piel
- B. Cómo se transmite el genoma completo de una generación a la siguiente
- C. Por qué las células pierden parte de su genoma durante la diferenciación
- D. Cómo se originó la primera célula a partir de moléculas inorgánicas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · la pregunta de la diferenciación

¿Cómo es posible que, si casi todas las células tienen el mismo genoma, unas se diferencien en neuronas, otras en células musculares y otras en células de la piel?

---

### 16

De acuerdo con el libro de Biología, según la representación de los homúnculos de la figura 15-2, ¿qué se encontraba en la cabeza de los espermatozoides?

- A. Un ser humano en miniatura perfectamente formado
- B. Una célula huevo todavía sin fecundar
- C. Un conjunto de tres capas germinales
- D. Una notocorda en formación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 328
**Subtema:** desarrollo · fig. 15-2, el homúnculo

De acuerdo con su descripción, en la cabeza de los espermatozoides se encontraba un ser humano en miniatura perfectamente formado, a lo que denominó "homúnculo". Esta interpretación fue considerada como una confirmación experimental de la teoría de la preformación, particularmente en su versión espermatista.

---

### 17

De conformidad con el libro de Biología, según el "plan generativo del desarrollo" que expone Lewis Wolpert, ¿qué contiene el genoma?

- A. Una "serie de instrucciones" en las que los componentes del citoplasma y las células del medio son fundamentales, al igual que los genes
- B. Una "descripción del organismo" completa y suficiente por sí misma
- C. Un organismo preformado en miniatura listo para crecer en tamaño
- D. Únicamente las tres capas germinales del futuro embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · el plan generativo (Lewis Wolpert)

…en ella se asume que el genoma, en lugar de contener "una descripción del organismo", contiene una "serie de instrucciones" en las que los componentes del citoplasma y las células del medio son fundamentales, al igual que los genes.

> El "plan generativo del desarrollo" es la metáfora de Lewis Wolpert (el libro escribe "Wolper"), no de Scott Gilbert; Gilbert aparece por otra idea (que el organismo es funcional desde la primera célula). El distractor B es la concepción contrapuesta, el "programa descriptivo del desarrollo".

---

### 18

En relación con el libro de Biología, ¿cómo se denomina el desarrollo de las distintas células especializadas?

- A. Diferenciación
- B. Determinación
- C. Especificación
- D. Competencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la diferenciación celular

El desarrollo de las distintas células especializadas se denomina diferenciación.

---

### 19

De acuerdo con el libro de Biología, ¿qué caracteriza a una célula competente?

- A. Que es capaz de recibir y, de alguna manera, "traducir" las señales del ambiente
- B. Que ya ha alcanzado su morfología definitiva y no responde a ninguna señal
- C. Que ha perdido parte de su genoma durante la diferenciación
- D. Que expresa todos los genes de su genoma al mismo tiempo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la célula competente

Las células, durante el desarrollo, reciben señales del ambiente que las modifican siempre y cuando sean competentes, es decir: sean capaces de recibir y, de alguna manera, "traducir" esas señales.

---

### 20

De conformidad con el libro de Biología, ¿cuándo se dice que una célula está determinada?

- A. Cuando recibe una señal y comienza a expresar todos los factores característicos de un cierto tipo celular que le permitirán su posterior diferenciación
- B. Cuando responde a una señal de manera todavía reversible, mientras no aparezca una señal nueva que la inhiba
- C. Cuando ha alcanzado por completo su morfología característica y ya no puede cambiar
- D. Cuando pierde la capacidad de recibir y traducir las señales del ambiente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la célula determinada

Cuando la célula recibe una señal y comienza a expresar todos los factores característicos de un cierto tipo celular que le permitirán su posterior diferenciación, se dice que está determinada. En esta etapa, aunque la célula todavía no está diferenciada fenotípicamente, entra en un camino irreversible de diferenciación, en forma independiente del ambiente.

> El distractor B es la definición de célula "especificada", que aparece en el mismo párrafo; se contrasta a propósito con la de célula "determinada".

---

### 21

De acuerdo con el libro de Biología, ¿cómo se puede definir el desarrollo?

- A. Como el proceso por el cual un organismo multicelular se constituye a partir de una única célula a través de una serie de cambios que involucran procesos moleculares, celulares y fisiológicos
- B. Como el proceso por el cual una célula se divide sin cambios en su estructura ni en su función
- C. Como el proceso por el cual un organismo unicelular se transforma en uno multicelular de otra especie
- D. Como el conjunto de mutaciones que un organismo acumula a lo largo de su vida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · definición de desarrollo

El desarrollo se puede definir como el proceso por el cual un organismo multicelular se constituye a partir de una única célula a través de una serie de cambios que involucran procesos moleculares, celulares y fisiológicos.

---

### 22

De conformidad con el libro de Biología, ¿qué es el cigoto?

- A. La primera célula de un embrión, resultado de la unión entre un oocito y un espermatozoide durante la fecundación
- B. La célula que resulta de la primera división mitótica del embrión
- C. La célula que da origen exclusivamente a las células germinales primordiales
- D. Cada una de las células que se forman durante la segmentación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · el cigoto

La primera célula de un embrión, llamada cigoto, es el resultado de la unión entre un oocito y un espermatozoide durante la fecundación.

---

### 23

En relación con el libro de Biología, ¿cómo se denomina el complejo proceso, iniciado a partir del cigoto, que consiste en divisiones mitóticas sucesivas sin crecimiento celular?

- A. Segmentación
- B. Gastrulación
- C. Organogénesis
- D. Fecundación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la segmentación

Esa primera célula, a través de un complejo proceso que se inicia con divisiones mitóticas sucesivas sin crecimiento celular, se denomina segmentación.

---

### 24

De acuerdo con el libro de Biología, ¿qué ocurre durante la gastrulación?

- A. Las células comienzan a adquirir movimientos complejos y se forman las capas germinales
- B. El cigoto se divide por mitosis sin crecimiento celular
- C. Las capas germinales se organizan dentro del embrión en estructuras ordenadas
- D. Se produce la unión entre el oocito y el espermatozoide

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la gastrulación

En un momento del desarrollo, en particular durante la gastrulación, estas células comienzan a adquirir movimientos complejos y se forman las capas germinales que luego se organizan dentro del embrión en estructuras ordenadas.

---

### 25

De conformidad con el libro de Biología, ¿qué sucede durante la organogénesis?

- A. Las capas germinales se organizan dentro del embrión en estructuras ordenadas
- B. Las células adquieren por primera vez movimientos complejos
- C. La primera célula se forma por la unión de los gametos
- D. El cigoto se divide por segmentación sin crecimiento celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la organogénesis

…se forman las capas germinales que luego se organizan dentro del embrión en estructuras ordenadas durante el proceso de organogénesis.

---

### 26

En relación con el libro de Biología, con el ejemplo del desarrollo del pollo, ¿qué señala el libro sobre las etapas del desarrollo?

- A. Que no necesariamente cada etapa comienza cuando termina la otra: mientras en la parte anterior del embrión se produce la organogénesis, en la posterior aún se lleva a cabo la gastrulación
- B. Que la organogénesis siempre termina antes de que comience la gastrulación
- C. Que la gastrulación y la organogénesis ocurren de manera simultánea en todo el embrión
- D. Que la organogénesis ocurre únicamente en la parte posterior del embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · las etapas no son estrictamente secuenciales

No necesariamente cada una de estas etapas comienza cuando termina la otra. Por ejemplo, en el desarrollo del pollo, mientras en la parte anterior del embrión se está produciendo la organogénesis –en la que se visualiza el desarrollo de las estructuras cefálicas– en la posterior aún se está llevando a cabo la gastrulación.

---

### 27

De acuerdo con el libro de Biología, al derivar todas las células de un cigoto que se divide por mitosis, ¿qué se puede afirmar sobre su información genética?

- A. Que todas poseen la misma información genética, de modo que toda la información sobre el desarrollo está contenida en esa primera célula
- B. Que cada célula recibe sólo una parte de la información genética del cigoto
- C. Que la información genética se pierde progresivamente en cada división
- D. Que cada tipo celular posee un genoma distinto del de las demás células

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · misma información genética en todas las células

Al derivar todas las células de un organismo de un cigoto que se divide por mitosis, estas poseen la misma información genética. Es decir: toda la información sobre el desarrollo de un organismo está contenida en esa primera célula.

---

### 28

De conformidad con el libro de Biología, ¿cómo llama Lewis Wolpert a la concepción según la cual toda la información del desarrollo está contenida en los genes?

- A. "Programa descriptivo del desarrollo"
- B. "Plan generativo del desarrollo"
- C. "Paisaje epigenético"
- D. "Desarrollo en mosaico"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · Wolpert, el programa descriptivo

Considera que la propuesta anterior, en la cual toda la información está contenida en los genes, constituye un "programa descriptivo del desarrollo".

> El distractor B, "plan generativo del desarrollo", es la concepción que el propio Wolpert contrapone (véase el reactivo 17). El libro escribe su apellido como "Wolper".

---

### 29

En relación con el libro de Biología, según Scott Gilbert, ¿por qué el desarrollo no se puede comparar con el ensamblaje secuencial de las piezas de una máquina en construcción?

- A. Porque el organismo, ya desde la primera célula, debe ser funcional, mientras que la máquina no funciona hasta que no se completa con todas sus partes
- B. Porque la máquina se ensambla más rápido que un organismo
- C. Porque el organismo, a diferencia de la máquina, deja de cambiar una vez que se completa
- D. Porque la máquina, a diferencia del organismo, puede repararse a sí misma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · Scott Gilbert, el embrión como sistema funcional

Una de las características más importantes del proceso del desarrollo es que mientras se constituye un organismo, ya desde la primera célula, esta debe ser funcional; es decir: el proceso no se puede comparar con el ensamblaje secuencial de las piezas de una máquina en construcción, la cual no funciona hasta que no se completa con todas sus partes.

---

### 30

De acuerdo con el libro de Biología, ¿con qué se hace una analogía del desarrollo de un organismo, que puede detenerse en cualquier momento para ver aspectos diferentes?

- A. Con una película
- B. Con el ensamblaje de una máquina
- C. Con un manual de instrucciones
- D. Con una partitura musical

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · la analogía de la película

Se puede hacer una analogía sobre el desarrollo de un organismo con una película: desde el principio hasta el fin se puede detener en cualquier momento y, según donde se la detenga, se verán aspectos diferentes.

---

### 31

De conformidad con el libro de Biología, ¿qué se utiliza, por lo general, para conocer con exactitud el momento en el que se lleva a cabo un estudio en biología del desarrollo?

- A. Tablas de desarrollo para cada especie modelo, en las que se especifican las características de cada etapa
- B. El genoma completo de la especie estudiada
- C. Un único cronómetro común para todas las especies
- D. La secuencia de aminoácidos de sus proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · las tablas de desarrollo

…se utilizan tablas de desarrollo para cada especie modelo en las que se especifican las características de cada etapa.

---

### 32

En relación con el libro de Biología, en el camino de formación de una proteína activa a partir de un gen, ¿qué puede regularse en una primera etapa?

- A. Que se favorezca o no la transcripción de ese gen, ya sea por procesos genéticos o epigenéticos
- B. Que el ARNm ya sintetizado sea degradado o silenciado
- C. Que la proteína no sufra las modificaciones postraduccionales indispensables para ser activa
- D. Que el ARNm transcripto se procese de manera diferencial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 329
**Subtema:** desarrollo · puntos de regulación de la expresión

En el camino de formación de una proteína activa (o, eventualmente, un ARN) a partir de un gen puede haber muchos puntos de regulación: puede darse en una primera etapa, es decir, favorecerse o no la transcripción de ese gen, ya sea por procesos genéticos o epigenéticos.

> Los distractores B, C y D son los demás puntos de regulación que enumera el mismo párrafo; se contrastan a propósito con el de la "primera etapa".

---

### 33

De acuerdo con el libro de Biología, ¿qué se puede afirmar sobre la expresión de los genes en una célula?

- A. Que no todos los genes se expresan: algunos están "prendidos" y otros "apagados"
- B. Que todos los genes de la célula se expresan al mismo tiempo
- C. Que la célula sólo conserva los genes que expresa y pierde el resto
- D. Que los genes "apagados" desaparecen del genoma de la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · genes prendidos y apagados

Está claro, entonces, que no todos los genes se expresan en una célula, algunos están "prendidos" y otros "apagados".

---

### 34

De conformidad con el libro de Biología, ¿cuáles son los dos tipos de componentes que hay que considerar para comprender cómo se regula la expresión durante el desarrollo?

- A. Los componentes internos del citoplasma (determinantes citoplasmáticos) y los componentes externos dados por la interacción con otras células y la matriz extracelular (inducción)
- B. Los genes "prendidos" y los genes "apagados"
- C. Los oocitos y los espermatozoides
- D. Las capas germinales y la notocorda

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · determinantes citoplasmáticos e inducción

…es fundamental considerar el ambiente en el cual esa célula se está desarrollando, teniendo en cuenta los componentes internos que están en el citoplasma (determinantes citoplasmáticos) y los componentes externos dados por la interacción con otras células y la matriz extracelular (inducción).

---

### 35

En relación con el libro de Biología, ¿cómo se denomina el desarrollo en el que cada blastómero parecería estar ya diferenciado, de modo que al quitarlo se pierden las estructuras que se originaban a partir de él?

- A. Desarrollo en mosaico
- B. Desarrollo regulativo
- C. Inducción
- D. Segmentación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · desarrollo en mosaico

A este tipo de desarrollo, en el que cada blastómero (mosaico) parecería estar ya diferenciado, se lo suele denominar desarrollo en mosaico. Es decir: en el citoplasma de los blastómeros habría moléculas que determinarían el tipo celular.

---

### 36

De acuerdo con el libro de Biología, ¿quién llevó a cabo, en 1887, los primeros estudios que demostraron el desarrollo en mosaico?

- A. El fisiólogo y embriólogo francés Laurent Chabry
- B. El embriólogo alemán Theodor Boveri
- C. El biólogo del desarrollo Lewis Wolpert
- D. El biólogo estadounidense Scott Gilbert

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · Chabry y el desarrollo en mosaico

Los primeros estudios que demostraron este tipo de desarrollo fueron llevados a cabo por el fisiólogo y embriólogo francés Laurent Chabry (1855-1894), en 1887, con embriones de organismos.

---

### 37

De conformidad con el libro de Biología, ¿qué naturaleza tenían los determinantes distribuidos de manera desigual en el citoplasma que quedaban confinados en algunas células durante el desarrollo?

- A. Eran ARN y proteínas
- B. Eran únicamente moléculas de ADN
- C. Eran lípidos de la membrana plasmática
- D. Eran iones inorgánicos del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · naturaleza de los determinantes citoplasmáticos

Casi un siglo después se demostró que esos determinantes eran ARN y proteínas que se encontraban distribuidos de manera desigual en el citoplasma; por lo tanto, durante las sucesivas divisiones en el desarrollo quedarían confinados solo en algunas células.

---

### 38

En relación con el libro de Biología, ¿qué demostró Theodor Boveri en los nematodos respecto del plasma germinal del hemisferio vegetativo?

- A. Que contiene componentes o determinantes que permiten que las células de esa región se diferencien en células germinales primordiales
- B. Que carece por completo de determinantes citoplasmáticos
- C. Que sus determinantes se distribuyen por igual en todas las células del embrión
- D. Que da origen únicamente a las capas germinales del embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · Boveri y el plasma germinal

El embriólogo alemán Theodor Boveri (1862-1915) demostró que el plasma germinal en el hemisferio vegetativo contiene componentes o determinantes que permiten que las células en esa región se puedan diferenciar en CGP.

---

### 39

De acuerdo con el libro de Biología, en la mosca de la fruta Drosophila, ¿cómo se denominan los determinantes que se encuentran en el extremo posterior del embrión y darán origen a las células germinales primordiales?

- A. Plasma polar
- B. Plasma germinal vegetativo
- C. Determinantes de la región animal
- D. Placode óptico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 330
**Subtema:** desarrollo · el plasma polar en Drosophila

En la mosca de la fruta Drosophila, estos determinantes se denominan plasma polar porque se encuentran en el extremo posterior del embrión y darán origen a las CGP o células polares.

---

### 40

De conformidad con el libro de Biología, ¿en qué consiste el proceso de inducción?

- A. En que las señales generadas por las células vecinas desencadenan la diferenciación de una célula
- B. En que los determinantes del citoplasma se reparten de manera desigual entre las células hijas
- C. En que cada blastómero se diferencia de manera independiente de las células vecinas
- D. En que la célula pierde la capacidad de responder a las señales del ambiente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 331
**Subtema:** desarrollo · la inducción

En el proceso de inducción, las señales generadas por las células vecinas desencadenan su diferenciación.

---

### 41

En relación con el libro de Biología, ¿cómo se denomina el desarrollo de los embriones tempranos en los que la pérdida de un blastómero hace que las células restantes alteren sus destinos compensando la pérdida?

- A. Desarrollo regulativo
- B. Desarrollo en mosaico
- C. Segmentación
- D. Organogénesis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 331
**Subtema:** desarrollo · el desarrollo regulativo

El desarrollo de los embriones tempranos, en los que la pérdida de un blastómero hace que las células restantes alteren sus destinos compensando la pérdida, se denomina desarrollo regulativo y es el tipo de desarrollo que se observa en la mayoría de los vertebrados.

---

### 42

De acuerdo con el libro de Biología, ¿qué característica tiene la inducción cuando un tejido es inducido por una señal?

- A. Que se modifica y, entonces, puede actuar como inductor de otro tejido o del que previamente lo indujo
- B. Que pierde de forma permanente la capacidad de responder a nuevas señales
- C. Que deja de depender del ambiente y se diferencia siempre en el mismo tipo celular
- D. Que reparte sus determinantes citoplasmáticos entre las células vecinas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 331
**Subtema:** desarrollo · el tejido inducido como inductor

Una característica de la inducción es que cuando un tejido es inducido por una señal, se modifica y, entonces, puede actuar como inductor de otro tejido o del que previamente lo indujo.

---

### 43

De conformidad con el libro de Biología, en la cascada de inducción que ocurre en la formación del ojo, ¿qué forman la vesícula óptica y el ectodermo epidérmico al invaginarse?

- A. La vesícula óptica forma la copa óptica y el ectodermo epidérmico forma el cristalino
- B. La vesícula óptica forma el cristalino y el ectodermo epidérmico forma la retina
- C. Ambos forman en conjunto el nervio óptico
- D. La vesícula óptica forma el placode óptico y el ectodermo epidérmico forma la copa óptica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 331
**Subtema:** desarrollo · fig. 15-5, la inducción en el ojo

…mientras que la vesícula óptica se invagina y forma la copa óptica, el ectodermo epidérmico se invagina y forma el cristalino.

---

### 44

En relación con el libro de Biología, ¿cómo se denomina la interacción que se produce por contacto entre dos células, a través de proteínas presentes en la célula que induce y la inducida?

- A. Interacción yuxtacrina
- B. Interacción paracrina
- C. Inducción regulativa
- D. Desarrollo en mosaico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 331
**Subtema:** desarrollo · la interacción yuxtacrina

Cuando la interacción se produce por contacto entre dos células a través de proteínas presentes en la célula que induce y la inducida, se denomina interacción yuxtacrina.

---

### 45

De acuerdo con el libro de Biología, cuando la señal molecular que se difunde proviene de una célula o de la matriz extracelular, ¿de qué tipo es la interacción?

- A. Paracrina
- B. Yuxtacrina
- C. Endocrina
- D. Autocrina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 331
**Subtema:** desarrollo · la interacción paracrina

En el primer caso, la señal que se difunde puede provenir de una célula o desde la matriz extracelular. En estos casos, la interacción es de tipo paracrina.
