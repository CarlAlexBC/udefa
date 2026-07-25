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

**Pendiente:** el capítulo 15 está EN CURSO; cubiertas las páginas impresas **325 a 331** (dos tandas): el apartado de apertura de la talidomida sólo en sus datos de biología; la historia de la biología del desarrollo (preformacionismo y epigénesis, el vitalismo y el mecanicismo, las tres capas germinales, el reduccionismo genético, la fig. 15-2 del homúnculo); las etapas del desarrollo (segmentación, gastrulación, organogénesis) y la definición de desarrollo y de cigoto; y los mecanismos de la diferenciación (células competentes, especificadas y determinadas; determinantes citoplasmáticos y desarrollo en mosaico; inducción y desarrollo regulativo; interacciones paracrina y yuxtacrina; la cascada de inducción del ojo). Cubierta también la señalización del desarrollo (páginas impresas **332 a 334**: las vías de Hedgehog, Wnt, la superfamilia TGF-β/BMP y los FGF; la inducción por señales directas —uniones gap y Notch—; la interacción con la matriz extracelular —composición, la hidroxiapatita del hueso, las integrinas, la transición epitelio-mesenquimática— y las células de la cresta neural). Cubiertos también los morfógenos y gradientes (páginas impresas **335 y 336**: las conexinas de las uniones gap y el cross-talk; que la respuesta a una señal varía con el desarrollo; el morfógeno y el gradiente como información de posición; el modelo de la bandera francesa de Wolpert; la diferenciación dorsoventral del tubo neural con BMP y SHH e inductores primarios y secundarios; y Drosophila como organismo modelo —el germario, las células nodrizas y foliculares, el sincicio, los morfógenos maternos y los 14 segmentos corporales—). Sigue desde la página impresa **336** ("Red de regulación génica") en adelante, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios. Además del 15 siguen abiertos el capítulo **14** (`biologia-14-epigenetica.md`) y el capítulo **37** (`biologia-37-digestion.md`). Biología NO está cerrada.

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

---

### 46

De conformidad con el libro de Biología, ¿qué produce una mutación en el gen que codifica la proteína Hedgehog en la mosca de la fruta Drosophila?

- A. Una larva con dentículos puntiagudos sobre la cutícula, similar a un erizo
- B. Una larva sin segmentación en el eje anteroposterior
- C. Una larva con el tubo neural duplicado
- D. Una larva sin células de la cresta neural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · vía de Hedgehog, su descubrimiento

Fueron halladas en Drosophila, donde una mutación en el gen que codifica esta proteína produce una larva con dentículos puntiagudos sobre la cutícula, similar a un erizo (de ahí su nombre: hedgehog en inglés significa erizo).

---

### 47

En relación con el libro de Biología, ¿cuáles son los tres homólogos del gen hedgehog de Drosophila que existen en los vertebrados?

- A. Sonic hedgehog (shh), desert hedgehog (dhh) e indian hedgehog (ihh)
- B. Wingless, Frizzled y Disheveled
- C. BMP, TGF-β y FGF
- D. Patched, Smoothened y Gli

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · los homólogos de hedgehog en los vertebrados

En los vertebrados, existen tres homólogos del gen hedgehog de Drosophila: sonic hedgehog (shh), desert hedgehog (dhh) e indian hedgehog (ihh). De estas tres, shh es la que más implicada está en las regulaciones durante el desarrollo.

---

### 48

De acuerdo con el libro de Biología, ¿por qué el homólogo sonic hedgehog (shh) lleva ese nombre?

- A. Por el personaje del juego Sega
- B. Por su forma parecida a la de un erizo
- C. Por su dependencia del colesterol
- D. Por su receptor de membrana Patched

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · el nombre de sonic hedgehog

…sonic hedgehog (shh, lleva su nombre por el personaje del juego Sega)…

---

### 49

De conformidad con el libro de Biología, ¿de qué depende la forma activa de las proteínas Hedgehog?

- A. Del colesterol: si el colesterol no está unido a ellas, la difusión se restringe profundamente
- B. De la temperatura del citoplasma
- C. De la presencia de cadherinas en la membrana
- D. De la concentración de fosfato de calcio en la matriz

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · Hedgehog, dependencia del colesterol

Una característica de estas proteínas es que su forma activa es dependiente del colesterol. Si el colesterol no está unido a ellas, la difusión se restringe profundamente.

---

### 50

En relación con el libro de Biología, ¿a través de qué receptor de membrana actúan las proteínas Hedgehog?

- A. Patched
- B. Frizzled
- C. Un receptor de tipo tirosina cinasa
- D. Una integrina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · el receptor Patched de Hedgehog

Estas proteínas actúan a través de un receptor de membrana denominado Patched.

---

### 51

De acuerdo con el libro de Biología, ¿en qué procesos del desarrollo es sumamente importante el factor paracrino Hedgehog?

- A. En la diferenciación ventral del tubo neural, la diferenciación de cartílago y el establecimiento del eje anteroposterior de los miembros
- B. En la formación del sistema respiratorio y el eje dorsoventral de los miembros
- C. En la inducción de la formación de hueso
- D. En la formación de estructuras segmentadas como los somitos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · funciones de Hedgehog

Este factor paracrino es sumamente importante en la diferenciación ventral del tubo neural, diferenciación de cartílago y en el establecimiento del eje anteroposterior de los miembros, entre otros.

> Los distractores son funciones de OTRAS vías del mismo apartado: la B es de Wnt, la C es de BMP y la D es de la vía de Notch.

---

### 52

De conformidad con el libro de Biología, ¿qué caracteriza al grupo de proteínas Wingless (Wnt)?

- A. Que son más de 15 glucoproteínas ricas en el aminoácido cisteína, halladas independientemente en Drosophila y ratones
- B. Que son un grupo de más de 30 factores paracrinos que forman una superfamilia
- C. Que son proteínas cuya forma activa depende del colesterol
- D. Que son receptores transmembrana anclados a microfilamentos de actina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · las proteínas Wnt

Dentro de este grupo se encuentran más de 15 glucoproteínas ricas en el aminoácido cisteína, que fueron halladas independientemente en Drosophila y ratones.

---

### 53

En relación con el libro de Biología, ¿a través de qué receptor actúan las glucoproteínas Wnt?

- A. Frizzled
- B. Patched
- C. Un receptor transmembrana de un solo paso
- D. Una integrina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · el receptor Frizzled de Wnt

Estas glucoproteínas actúan a través de un receptor llamado Frizzled.

---

### 54

De acuerdo con el libro de Biología, ¿en qué estructuras interviene la vía de Wnt?

- A. En la diferenciación de las células de la cresta neural, el establecimiento del eje dorsoventral de los miembros y la formación del sistema respiratorio
- B. En la diferenciación ventral del tubo neural y el eje anteroposterior de los miembros
- C. En la inducción de la formación de hueso
- D. En la formación de estructuras segmentadas como los somitos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · funciones de Wnt

Wnt interviene en la formación de muchas estructuras, como la diferenciación de las células de la cresta neural, actúa en el establecimiento del eje dorsoventral de los miembros, en la formación del sistema respiratorio, entre otros.

---

### 55

De conformidad con el libro de Biología, ¿qué caracteriza al grupo de factores paracrinos TGF-β?

- A. Que tiene más de 30 miembros y se considera una superfamilia subdividida, a su vez, en familias
- B. Que son más de 15 glucoproteínas ricas en cisteína
- C. Que actúan a través del receptor Frizzled
- D. Que su forma activa depende del colesterol

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · la superfamilia TGF-β

Este grupo de factores paracrinos con más de 30 miembros se considera una superfamilia subdividida, a su vez, en familias que participan en el desarrollo de numerosas estructuras del embrión.

---

### 56

En relación con el libro de Biología, ¿cuál fue el primer miembro hallado del grupo TGF-β, y a qué debe su nombre?

- A. BMP (factor morfogenético del hueso), que debe su nombre a la primera función descrita: la inducción de la formación de hueso
- B. Sonic hedgehog, que debe su nombre a un personaje de videojuego
- C. Wingless, que debe su nombre a sus efectos sobre las alas de Drosophila
- D. Frizzled, que debe su nombre a su forma rizada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · BMP, el primer miembro de TGF-β

El primer miembro de este grupo de proteínas hallado fue BMP (por las siglas en inglés de Bone Morphogenetic Proteins, factor morfogenético del hueso), que debe su nombre a la primera función descrita que fue la inducción de la formación de hueso.

---

### 57

De acuerdo con el libro de Biología, ¿a través de qué tipo de receptor actúan los miembros de la superfamilia TGF-β?

- A. Un receptor transmembrana de un solo paso
- B. El receptor de membrana Patched
- C. El receptor Frizzled de 7 pasos de membrana
- D. Las uniones gap o comunicantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 332
**Subtema:** desarrollo · el receptor de TGF-β

Los miembros de esta superfamilia actúan a través de un receptor transmembrana de un solo paso.

---

### 58

De conformidad con el libro de Biología, en la vía de los factores de crecimiento fibroblástico (FGF), ¿a través de qué tipo de receptores responden las células a esta señal?

- A. A través de receptores transmembrana de tipo tirosina cinasa
- B. A través del receptor de membrana Patched
- C. A través de las uniones gap o comunicantes
- D. A través de integrinas ancladas a la actina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 333
**Subtema:** desarrollo · la vía de los FGF

Las células que responden a esta señal lo hacen a través de receptores transmembrana de tipo tirosina cinasa.

---

### 59

En relación con el libro de Biología, cuando las moléculas que transmiten una señal son muy pequeñas y solubles, ¿cómo atraviesan la membrana plasmática de una célula a otra?

- A. Directamente, a través de las uniones gap (unión comunicante)
- B. A través del receptor de membrana Patched
- C. A través de receptores de tipo tirosina cinasa
- D. Uniéndose a las integrinas de la matriz extracelular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · inducción por señales directas, uniones gap

Cuando las moléculas que transmiten una señal son muy pequeñas y solubles atraviesan directamente la membrana plasmática a través de las uniones gap (unión comunicante).

---

### 60

De acuerdo con el libro de Biología, ¿en qué procesos es fundamental la inducción mediada por la proteína Notch?

- A. En la formación de estructuras segmentadas (somitos) y en la diferenciación neural, tanto de los vertebrados como de Drosophila
- B. En la inducción de la formación de hueso
- C. En el establecimiento del eje anteroposterior de los miembros
- D. En la migración de las células de la cresta neural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · la inducción por Notch

Este tipo de inducción es fundamental, por ejemplo, en la formación de estructuras segmentadas (somitos) y en la diferenciación neural tanto de los vertebrados como de Drosophila.

---

### 61

De conformidad con el libro de Biología, ¿por qué componentes está constituida la matriz extracelular que las células sintetizan y secretan?

- A. Por colágeno, proteoglucanos y glucoproteínas, como integrinas y fibronectina
- B. Por cristales de hidroxiapatita únicamente
- C. Por microfilamentos de actina y microtúbulos
- D. Por glucoproteínas ricas en cisteína, como las Wnt

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · composición de la matriz extracelular

Esta matriz les da un ambiente particular constituido por colágeno, proteoglucanos, glucoproteínas, como integrinas y fibronectina, etc.

---

### 62

En relación con el libro de Biología, en el hueso, ¿qué le otorga gran resistencia y dureza al tejido?

- A. La abundante matriz secretada por los osteoblastos con cristales de hidroxiapatita (fosfato de calcio cristalizado)
- B. La red de microfilamentos de actina de sus células
- C. La presencia de proteínas Wnt ricas en cisteína
- D. Las uniones gap entre sus células

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · la matriz del hueso, la hidroxiapatita

La idea de células inmersas en una matriz extracelular es evidente, por ejemplo, en el hueso, donde una abundante matriz secretada por los osteoblastos con cristales de hidroxiapatita (fosfato de calcio cristalizado) le otorga gran resistencia y dureza al tejido.

---

### 63

De acuerdo con el libro de Biología, ¿qué son las integrinas?

- A. Receptores que atraviesan la membrana plasmática y cuyo dominio intracelular está anclado a microfilamentos de actina del citoesqueleto
- B. Glucoproteínas ricas en cisteína que actúan a través del receptor Frizzled
- C. Uniones que comunican directamente el citoplasma de dos células
- D. Cristales de fosfato de calcio de la matriz del hueso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · las integrinas

Estos receptores se conocen como integrinas y se caracterizan porque atraviesan la membrana plasmática y su dominio intracelular está anclado a microfilamentos de actina del citoesqueleto.

---

### 64

De conformidad con el libro de Biología, ¿qué caracteriza a las células que sufren una transición epitelio-mesenquimática?

- A. Que pierden las uniones celulares que las mantenían unidas en un epitelio y adquieren un comportamiento mesenquimático, y usan señales de la matriz extracelular para migrar
- B. Que refuerzan sus uniones celulares y quedan fijas en el epitelio
- C. Que pierden por completo su citoesqueleto de actina
- D. Que secretan cristales de hidroxiapatita para endurecer el tejido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · la transición epitelio-mesenquimática

…las células que sufren transición epitelio-mesenquimática, es decir: aquellas que pierden uniones celulares que las mantenían unidas en un epitelio y adquieren un comportamiento mesenquimático, y que utilizan señales de la matriz extracelular para poder llevar a cabo la migración.

---

### 65

En relación con el libro de Biología, sobre las células de la cresta neural (CCN), ¿qué cambio les permite migrar desde el sistema nervioso y formar una enorme variedad de tipos celulares derivados?

- A. Que disminuyen las uniones celulares que las mantenían unidas en el epitelio (en particular, las cadherinas) y modifican su citoesqueleto, adquiriendo un estado mesenquimático
- B. Que refuerzan sus cadherinas para desplazarse en bloque
- C. Que secretan una matriz de hidroxiapatita que las impulsa
- D. Que pierden su información genética para especializarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 334
**Subtema:** desarrollo · las células de la cresta neural

Estas células se establecen en la cresta del tubo neural en formación, disminuyen las uniones celulares que las mantenían unidas en el epitelio (en particular, las cadherinas), modifican su citoesqueleto (lo que les permite moverse y adquirir un estado mesenquimático) y, a través de moléculas presentes en la matriz extracelular, pueden migrar desde el sistema nervioso y formar una enorme variedad de tipos celulares derivados, incluidas las células gliales, los melanóforos, las células óseas del esplacnocráneo, las neuronas simpáticas y parasimpáticas, y muchos otros derivados.

---

### 66

De acuerdo con el libro de Biología, ¿por qué proteínas están formados los canales de las uniones gap (comunicantes)?

- A. Por proteínas llamadas conexinas, de las cuales hay distintos tipos
- B. Por integrinas ancladas a los microfilamentos de actina
- C. Por cadherinas del epitelio
- D. Por glucoproteínas ricas en el aminoácido cisteína

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · las conexinas de las uniones gap

Estos canales están formados por proteínas llamadas conexinas, de las cuales hay distintos tipos.

---

### 67

De conformidad con el libro de Biología, ¿qué se demostró al bloquear las conexinas con anticuerpos?

- A. Que se altera el desarrollo normal
- B. Que el desarrollo se acelera
- C. Que no se produce ningún efecto sobre el desarrollo
- D. Que las células migran más rápido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · importancia de las conexinas en el desarrollo

Esta clase de unión es muy importante en el desarrollo y se demostró que si se bloquean las conexinas con anticuerpos se altera el desarrollo normal.

---

### 68

En relación con el libro de Biología, ¿cómo se denomina el mecanismo por el cual las vías de señalización, al recibir la célula varias señales a la vez, se cruzan entre sí?

- A. Cross-talk
- B. Inducción secundaria
- C. Transición epitelio-mesenquimática
- D. Desarrollo en mosaico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · el cross-talk entre vías de señalización

Todas estas vías de señalización suelen estar interconectadas y como, por lo general, la célula está recibiendo varias señales a la vez, las vías se cruzan entre sí en un mecanismo denominado cross-talk.

---

### 69

De acuerdo con el libro de Biología, ¿de qué depende la respuesta de una célula a una señal inductiva?

- A. Del estado de desarrollo en el que la célula se encuentre, de modo que una misma señal puede evocar distintas respuestas en diferentes células
- B. Únicamente del tipo de morfógeno, sin importar el estado de la célula
- C. De que la señal sea siempre de tipo "todo o nada"
- D. De la cantidad de ADN que contenga la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · la respuesta a la señal varía con el desarrollo

La respuesta a una señal depende del estado de desarrollo en el que la célula se encuentre... Incluso, una misma señal puede evocar distintas respuestas en diferentes células y eso dependerá de los "antecedentes del desarrollo" y del estado del proceso en el que se encuentre cada una.

---

### 70

De conformidad con el libro de Biología, ¿qué se puede afirmar sobre la posición de los tejidos y órganos en un organismo?

- A. Que las células no se diferencian al azar, sino que se organizan en tejidos y órganos que siempre ocupan una misma posición dentro del organismo
- B. Que cada tejido puede formarse en cualquier posición del organismo
- C. Que la posición de los órganos depende del azar de las mutaciones
- D. Que los tejidos ocupan posiciones distintas en cada individuo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · el ordenamiento de tejidos y órganos

Las células no se diferencian al azar, sino que se organizan en tejidos y órganos, y estos siempre ocupan una misma posición dentro de un organismo.

---

### 71

En relación con el libro de Biología, en la interacción paracrina, ¿cómo son las señales de las células vecinas?

- A. No suelen ser de tipo "todo o nada", sino que el efecto que generan depende de la cantidad de señal que se recibe
- B. Siempre son de tipo "todo o nada"
- C. No dependen de la cantidad de señal recibida
- D. Sólo actúan por contacto directo entre las células

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · la señal paracrina depende de la cantidad

En esta interacción paracrina, las señales de células vecinas no suelen ser de tipo "todo o nada", sino más bien que el efecto que generan depende de la cantidad de señal que recibe.

---

### 72

De acuerdo con el libro de Biología, ¿cómo se denomina la señal soluble que, según su concentración, puede especificar distintos tipos celulares?

- A. Morfógeno
- B. Conexina
- C. Integrina
- D. Cadherina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · el morfógeno

Esta señal soluble se denomina morfógeno y, según su concentración, puede especificar distintos tipos celulares.

---

### 73

De conformidad con el libro de Biología, a medida que un morfógeno difunde a lo largo de un eje corporal, ¿qué ocurre con su concentración y qué le proporciona al embrión?

- A. Su concentración decrece en forma progresiva, y así le proporciona al embrión un sistema de información de posición
- B. Su concentración aumenta progresivamente, e impide la diferenciación celular
- C. Su concentración se mantiene constante en todo el eje corporal
- D. Su concentración varía al azar, sin dar información de posición

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · el gradiente de morfógeno y la información de posición

…a medida que difunde a lo largo de un eje corporal, su concentración decrece en forma progresiva, y así le proporciona al embrión un sistema de información de posición.

---

### 74

En relación con el libro de Biología, ¿quién propuso el modelo de la bandera francesa para explicar el papel del gradiente de concentración de un morfógeno en la diferenciación celular?

- A. Lewis Wolpert
- B. Scott Gilbert
- C. Theodor Boveri
- D. Laurent Chabry

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · el modelo de la bandera francesa

Este ejemplo fue propuesto por Lewis Wolper para explicar el papel del gradiente de concentración de un morfógeno en la diferenciación celular.

> El libro escribe el apellido como "Wolper"; la grafía correcta es Wolpert.

---

### 75

De acuerdo con el libro de Biología, en el modelo de la bandera francesa, ¿qué concentración de morfógeno requieren las células que se diferencian en azul?

- A. Concentraciones altas de morfógeno, por encima de un dado umbral
- B. Concentraciones bajas de morfógeno
- C. Concentraciones intermedias de morfógeno
- D. Ninguna, porque no requieren morfógeno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · la bandera francesa, los umbrales

Las células que se diferencian en azules requieren concentraciones altas de morfógeno por encima de un dado umbral. Las que se diferencian en blanco requieren concentraciones menores, pero todavía por encima de otro umbral, y las que se diferencian en rojo, concentraciones aún menores.

---

### 76

De conformidad con el libro de Biología, en la diferenciación dorsoventral del tubo neural, ¿qué estructuras secretan los morfógenos BMP y SHH?

- A. El ectodermo epidérmico, en la parte dorsal, secreta BMP, y la notocorda, en la parte ventral, secreta SHH
- B. La notocorda secreta BMP y el ectodermo epidérmico secreta SHH
- C. El techo y el piso del tubo neural secretan ambos morfógenos por igual
- D. Las células foliculares secretan BMP y SHH

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 335
**Subtema:** desarrollo · los morfógenos BMP y SHH en el tubo neural

Las estructuras cercanas al tubo neural son el ectodermo epidérmico en la parte dorsal y la notocorda en la parte ventral, las cuales secretan los morfógenos BMP y SHH, respectivamente.

---

### 77

En relación con el libro de Biología, en la diferenciación del tubo neural, ¿cuáles son los inductores primarios y cuáles los secundarios?

- A. El ectodermo epidérmico y la notocorda son inductores primarios; el techo y el piso del tubo neural son inductores secundarios
- B. El techo y el piso del tubo neural son inductores primarios; el ectodermo epidérmico y la notocorda, secundarios
- C. Todos actúan como inductores primarios
- D. Sólo la notocorda es inductor, y es de tipo secundario

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · inductores primarios y secundarios

El ectodermo epidérmico y la notocorda son, entonces, inductores primarios, mientras que el techo y el piso del tubo neural son inductores secundarios (ya que primero deben ser inducidos).

---

### 78

De acuerdo con el libro de Biología, ¿de qué concentraciones de morfógenos depende la diferenciación en motoneuronas en la parte ventral del tubo neural?

- A. De altas concentraciones de SHH y bajas de BMP
- B. De altas concentraciones de BMP y bajas de SHH
- C. De concentraciones iguales de BMP y SHH
- D. De la ausencia total de morfógenos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · la diferenciación de motoneuronas

…la diferenciación en motoneuronas en la parte ventral dependerá de altas concentraciones de SHH y bajas de BMP.

---

### 79

De conformidad con el libro de Biología, ¿por qué la mosca de la fruta Drosophila melanogaster es un excelente modelo para estudiar el desarrollo?

- A. Porque sus procesos de herencia genética se conocen mejor que los de cualquier otro organismo multicelular, su genoma está totalmente secuenciado y es fácil de mantener, con un ciclo de vida corto
- B. Porque es el organismo multicelular más grande y fácil de observar a simple vista
- C. Porque carece de genoma, lo que simplifica su estudio
- D. Porque su desarrollo es idéntico, paso a paso, al de los vertebrados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · Drosophila como organismo modelo

Este modelo se caracteriza por: a) sus procesos de herencia genética se conocen mejor que los de cualquier otro organismo multicelular...; b) su genoma se encuentra totalmente secuenciado y está disponible públicamente;... d) estas moscas son fáciles de mantener en el laboratorio y presentan un ciclo de vida corto.

---

### 80

En relación con el libro de Biología, en el germario de la ovariola de Drosophila, ¿qué produce una célula madre al experimentar cuatro divisiones mitóticas?

- A. Produce 16 células intercomunicadas por canales citoplasmáticos: una dará origen al oocito y las otras 15, a las células nodrizas o nutricias
- B. Produce 4 células, todas destinadas a formar oocitos
- C. Produce 15 células, todas nodrizas, sin ningún oocito
- D. Produce 2 células foliculares que forman la cáscara del huevo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · el germario de Drosophila

En una estructura llamada germario, una célula madre experimenta cuatro divisiones mitóticas que producen 16 células intercomunicadas por medio de canales citoplasmáticos. Una de estas 16 células (la que tiene más canales citoplasmáticos) dará origen al oocito y las otras 15 darán células nodrizas o nutricias.

---

### 81

De acuerdo con el libro de Biología, ¿qué secretan las células foliculares que rodean al oocito de Drosophila?

- A. Los materiales que componen la membrana vitelina y la cáscara del huevo
- B. Los morfógenos maternos que difunden en el embrión
- C. Las conexinas de las uniones gap
- D. Los cristales de hidroxiapatita

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · las células foliculares

Estas células foliculares secretarán los materiales que componen la membrana vitelina y la cáscara del huevo, las cuales recubren por completo el huevo maduro.

---

### 82

De conformidad con el libro de Biología, en el desarrollo temprano de Drosophila, al no ser la división nuclear seguida inmediatamente por la citocinesis, ¿qué tipo de embrión se forma?

- A. Un embrión multinucleado sin separaciones, denominado sincicio
- B. Un embrión con las células ya separadas por membranas
- C. Un embrión de una sola célula gigante con un único núcleo
- D. Un embrión formado sólo por células foliculares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · el sincicio de Drosophila

La división nuclear no es seguida inmediatamente por la citocinesis; por lo tanto, la segmentación está desfasada y se forma un embrión multinucleado sin separaciones (sincicio).

---

### 83

En relación con el libro de Biología, en una primera etapa del desarrollo de Drosophila, ¿por qué los morfógenos maternos pueden difundir fácilmente dentro del citoplasma único del embrión?

- A. Porque al no haber membranas celulares, los morfógenos sintetizados por las células nutricias difunden fácilmente en el citoplasma único
- B. Porque las membranas celulares los transportan activamente de una célula a otra
- C. Porque son insolubles y quedan retenidos en un solo punto
- D. Porque las células foliculares los bombean hacia el interior del embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · los morfógenos maternos en el sincicio

En una primera etapa, al no haber membranas celulares, los morfógenos maternos, o sea, los sintetizados por las células nutricias, pueden difundir fácilmente dentro del citoplasma único del embrión.

---

### 84

De acuerdo con el libro de Biología, a las 24 horas de desarrollo de Drosophila, ¿cómo se presentan los segmentos corporales?

- A. Como 14 unidades repetidas: 3 piezas bucales en la región anterior, 3 unidades torácicas y 8 unidades abdominales
- B. Como 8 unidades repetidas, todas abdominales
- C. Como 3 unidades torácicas únicamente
- D. Como una masa continua, sin segmentación aparente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 336
**Subtema:** desarrollo · los segmentos corporales de Drosophila

En 24 horas de desarrollo es posible ver la formación de los segmentos corporales que se presentan como 14 unidades repetidas (3 piezas bucales en la región anterior del animal, seguidas por 3 unidades toráxicas y 8 unidades abdominales).
