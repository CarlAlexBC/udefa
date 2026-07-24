# Biología · Capítulo 35 · La respiración

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

**Quién lo pide hoy:** Escuela Militar de Medicina, Curso de Formación de Médico Cirujano
Militar (clave de materia `BIO-01-2026`). Si mañana otra escuela pide estos temas, se
traen de aquí: no se duplican.

> **Carpeta pendiente de migrar.** Este archivo nace en `docs/examen-cultural/EMM/` a
> propósito, junto al resto de Biología, para que la materia se mueva completa en un solo
> paso y no quede partida en dos sitios. Cuando se migre, la carpeta se nombra por el
> **libro** (como ya se hizo con `fisica-perez-montiel/`), no por la escuela.

**Capítulos de este libro ya cerrados:** 3 (221 reactivos), 4 (190), 5 (157), 7 (240),
8 (149), 11 (162), 12 (131), 31 (84) y 32 (271). Tras el 35 siguen el 36 y el 37.

## Método

Cuerpo del texto con `docs/examen-cultural/extraer.py --desfase=46` (el libro trae capa
de texto). Las figuras y los recuadros "ENSAYO" van con `render.py` (su capa de texto es
lorem ipsum o viene cifrada). Detalle en el encabezado del capítulo 3.

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja> <hoja> --desfase=46
```

**Dónde empieza el capítulo — verificado.** El capítulo 35 pertenece a la **Sección VI ·
Biología de los animales**. La portadilla está en la **hoja 873** (página impresa 827):
trae el título "LA RESPIRACIÓN", el epígrafe de Vincent Van Gogh y el apartado de apertura
"Biología en contexto social · Contaminación atmosférica y enfermedades respiratorias"
(el gran smog de Londres de 1952). **El cuerpo empieza en la hoja 874** (página impresa
828), con los dos significados del término *respiración*. El desfase +46 se **reverificó
aquí** (hoja 873 = p. 827), leído de la hoja, nunca calculado.

**Qué queda fuera por norma.** El apartado de apertura "Biología en contexto social" y el
ensayo de cierre "Retomando la problemática inicial" son el marco social discursivo del
capítulo y **no llevan reactivos**, igual que se hizo en el capítulo 32. Tampoco los
ejercicios ("Cuestionario", "Situaciones problemáticas").

## Cobertura actual

Cubierta la página impresa **828**: los dos significados de *respiración* (la ventilación
del organismo multicelular y la respiración aeróbica o celular), el sistema respiratorio
de los vertebrados y la hematosis, el consumo de O2 proporcional al gasto energético
(fig. 35-1, las hembras de impala), y "La difusión de los gases" (el intercambio gaseoso
por difusión simple, la presión parcial de O2 y la composición del aire, la hipoxia
ambiental de la altura con la hiperventilación y la compensación por hemoglobina y
glóbulos rojos, y el aumento de presión en el buceo). De la **página 829** se cubre la
embolia del buceo (el nitrógeno que se disuelve a alta presión y forma burbujas si el
ascenso es rápido, la analogía de la botella de gaseosa, y las burbujas que obstruyen los
capilares) y las adaptaciones de los mamíferos buceadores (fig. 35-2: la exhalación al
zambullirse, el gran volumen sanguíneo con glóbulos rojos y mioglobina como reservorio,
y el reflejo de buceo, con la derivación del O2 al corazón y al cerebro); más el arranque
de "Evolución y diversidad de los sistemas respiratorios" (la respiración celular como
oxidación de compuestos orgánicos, el límite de la difusión eficiente por debajo del
milímetro, por qué basta en unicelulares y medusas pero no en organismos grandes, y la
aparición de diversos sistemas respiratorios como resultado de ese límite). De la **página
830** se cubren las características de los órganos respiratorios (qué es un sistema
respiratorio "eficiente"; la lombriz de tierra con una sola capa de células como superficie
de intercambio; los gradientes de O2 y CO2; el reparto por el sistema circulatorio y el
transporte del CO2 por la sangre o la hemolinfa; el repliegue de la superficie en animales
grandes, con los 2 m2 de superficie corporal frente a los 100 m2 del pulmón; las branquias
evaginadas frente a los pulmones invaginados) y la fig. 35-3 con las cinco estrategias
(piel de los anélidos, branquias externas de poliquetos y anfibios, branquias internas de
los peces, tráqueas y espiráculos de los artrópodos, y pulmones de vertebrados y caracoles
terrestres). De la **página 831** se cubre el recorrido completo de los gases (el epitelio
delgado que hace eficiente la difusión, el paso del O2 al endotelio capilar y la baja PpO2
de la sangre entrante que sostiene el gradiente, la llegada del O2 al líquido intersticial
y a las células, el camino inverso del CO2, y la excepción del sistema traqueal de los
artrópodos, sin vínculo con el circulatorio) y "Las branquias de los vertebrados" (su
origen alimentario y el caso actual de *Branchiostoma*, el paso a la función respiratoria,
las laminillas secundarias, la ventilación por el piso de la boca y el opérculo, los peces
de natación rápida que pueden asfixiarse en un acuario, y el mecanismo de contracorriente
de la fig. 35-4, con la hemoglobina como responsable de la capacidad de transporte). De la
**página 832** se cubren los pulmones de los vertebrados y la comparación aire/agua (el
volumen 15 veces mayor de agua que debe bombear un pez, la desventaja del flujo y reflujo
frente al flujo continuo, y las tres ventajas del aire: 21 % de O2 frente al 0,5 % del agua
a 15 ºC, difusión 300 000 veces más rápida y un costo de ventilación del 1-2 % frente al
20 % del pez; más los pulmones de los caracoles terrestres, el origen de los pulmones en la
zona anterior de la faringe y los peces pulmonados de agua dulce); la respiración de los
vertebrados terrestres (pulmones de anfibios y reptiles, la epiglotis y las ventanas
nasales, la piel de los anfibios, el bombeo bucal de las ranas, la cavidad torácica de
reptiles, aves y mamíferos, y los sacos aéreos de las aves con su flujo unidireccional,
fig. 35-5); y el arranque de "El sistema respiratorio humano" (las cavidades nasales que
filtran, humedecen y calientan el aire, la faringe, la laringe con las cuerdas vocales, la
tráquea con sus anillos de cartílago, y los bronquios y bronquíolos).

**Pendiente:** el capítulo 35 está EN CURSO; sigue desde la página impresa 833 (hoja 879) en adelante (el resto del sistema respiratorio humano: los alvéolos, la mecánica respiratoria y el transporte de gases, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). De la materia de Biología, además de este capítulo, siguen sin empezar los capítulos 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta —en negrita y con dos puntos— y toma el párrafo
> que le sigue hasta el primer renglón en blanco. Si se convierte en encabezado
> (`## Pendiente`), si desaparece, o si empieza con "ninguno", Biología se reporta como
> cerrada. Por eso el capítulo en curso sostiene, en un solo párrafo, la lista de los que
> faltan.

## Cómo se escriben estos reactivos

Recuerdo literal, formato del Anexo "H". La opción correcta y la justificación
son cita textual del libro. Cuatro opciones del mismo tipo y magnitud. La
correcta se escribe siempre en A porque el importador baraja las opciones.

---

## Sub-lote 1 · Los dos significados de respiración y la hematosis (fig. 35-1, p. 828)

### 1

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, ¿cuántos significados tiene el término *respiración* y cuáles son?

- A. Dos: en un organismo multicelular complejo designa la toma de un fluido rico en oxígeno y la liberación de uno rico en dióxido de carbono (ventilación), y en cada célula designa la respiración aeróbica o celular
- B. Uno solo: el intercambio de gases entre el organismo y el ambiente
- C. Tres: la ventilación, la hematosis y la difusión simple
- D. Dos: la inspiración y la espiración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · significados del término

En biología, el término respiración tiene dos significados. En un organismo multicelular complejo, designa al proceso que consiste en tomar, del ambiente, un fluido rico en oxígeno (O2) y liberar, a cambio, uno rico en dióxido de carbono (CO2). En cada célula, la respiración adopta un nuevo significado: la respiración aeróbica o respiración celular.

### 2

De acuerdo con el libro de Biología, ¿en qué consiste el proceso conocido también como ventilación?

- A. En tomar, del ambiente, un fluido rico en oxígeno (O2), ya sea aire o agua, y liberar, a cambio, uno rico en dióxido de carbono (CO2)
- B. En la reacción química entre el O2 y las moléculas orgánicas complejas dentro de la célula
- C. En el transporte del oxígeno por los glóbulos rojos de la sangre
- D. En la degradación de moléculas orgánicas sin intervención del oxígeno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · ventilación

En un organismo multicelular complejo, la respiración designa al proceso que consiste en tomar, del ambiente, un fluido rico en oxígeno (O2), ya sea aire o agua, y liberar, a cambio, uno rico en dióxido de carbono (CO2). Este proceso, conocido también como ventilación, es esencial para cualquier organismo multicelular.

### 3

De acuerdo con el libro de Biología, ¿a qué se refiere la respiración aeróbica o respiración celular?

- A. A la reacción química que se produce en el interior de las células, entre el O2 y moléculas orgánicas complejas, que da como resultado la degradación de estas últimas y la liberación de CO2 y de energía
- B. A la toma de aire o agua del ambiente y la liberación de dióxido de carbono
- C. Al intercambio gaseoso entre el medioambiente y la sangre en los pulmones
- D. Al transporte del oxígeno desde los pulmones hasta los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · respiración celular

La respiración aeróbica o respiración celular se refiere a la reacción química que se produce en el interior de las células, entre el O2 y moléculas orgánicas complejas, que da como resultado la degradación de estas últimas y la liberación de CO2 y de energía, que es aprovechada por las células.

> Los dos significados se prestan a confusión: la **ventilación** es el intercambio del organismo con el ambiente; la **respiración celular** es la reacción química dentro de cada célula.

### 4

De acuerdo con el libro de Biología, ¿en qué consiste básicamente el sistema respiratorio de los vertebrados y cómo se llama el intercambio gaseoso que realiza?

- A. En un sistema formado por tubos y sacos en los que se realiza el intercambio gaseoso entre el medioambiente y la sangre, proceso conocido como hematosis
- B. En un sistema de vasos sanguíneos que transportan el oxígeno, proceso conocido como ventilación
- C. En un conjunto de glándulas que producen oxígeno, proceso conocido como difusión simple
- D. En un sistema de músculos que comprimen el tórax, proceso conocido como hipoxia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · hematosis

El sistema respiratorio de los vertebrados consiste, básicamente, en un sistema formado por tubos y sacos en los que se realiza el intercambio gaseoso entre el medioambiente y la sangre, proceso conocido como hematosis.

### 5

De acuerdo con el libro de Biología, ¿qué ocurriría con las células de un organismo multicelular sin el intercambio gaseoso?

- A. Morirían, ya que no podrían realizar la respiración aeróbica y, en consecuencia, no podrían obtener la energía suficiente para su funcionamiento
- B. Sobrevivirían sin cambios, porque obtienen su energía de otras fuentes
- C. Se multiplicarían más rápido por la falta de oxígeno
- D. Cambiarían su función pero conservarían su energía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · hematosis

Sin este intercambio, las células que forman un organismo multicelular morirían, ya que no podrían realizar la respiración aeróbica y, en consecuencia, no podrían obtener la energía suficiente para su funcionamiento.

### 6

De acuerdo con el libro de Biología, según la figura 35-1, ¿cómo varía el consumo de O2 de los animales corredores, como las hembras de impala?

- A. Aumenta de manera lineal con la velocidad de la carrera
- B. Disminuye a medida que aumenta la velocidad de la carrera
- C. Permanece constante sin importar la velocidad de la carrera
- D. Aumenta solo cuando el animal está en reposo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · consumo de oxígeno

El consumo de O2 se incrementa de forma proporcional al gasto energético. El consumo de O2 de los animales corredores, como estas hembras de impala, aumenta de manera lineal con la velocidad de la carrera.

## Sub-lote 2 · La difusión de los gases y la presión parcial (p. 828)

### 7

De acuerdo con el libro de Biología, ¿por qué mecanismo ocurre el intercambio gaseoso entre las células y el ambiente que las circunda?

- A. Por difusión simple
- B. Por transporte activo con gasto de energía
- C. Por exocitosis de vesículas
- D. Por acción de la bomba de Na+/K+-ATPasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · difusión de los gases

En cada grupo de seres vivos, el intercambio gaseoso —es decir, el intercambio de O2 y CO2 entre las células y el ambiente que las circunda— ocurre por difusión simple.

### 8

De acuerdo con el libro de Biología, ¿qué es la difusión y qué requiere?

- A. Es el desplazamiento neto de moléculas desde zonas de mayor concentración hacia zonas de menor concentración, y ocurre sin aporte de energía externa
- B. Es el desplazamiento de moléculas desde zonas de menor a mayor concentración, con gasto de energía
- C. Es el bombeo activo de moléculas a través de la membrana, con gasto de ATP
- D. Es el transporte de moléculas dentro de vesículas, sin aporte de energía

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · difusión

La difusión es el desplazamiento neto de moléculas desde zonas de mayor concentración hacia zonas de menor concentración. Este desplazamiento ocurre sin aporte de energía externa.

### 9

De acuerdo con el libro de Biología, ¿qué presión ejerce el aire sobre nuestra piel en el nivel del mar?

- A. Una presión de 1 atmósfera
- B. Una presión de 21 atmósferas
- C. Una presión de 10 atmósferas
- D. Una presión de 77 atmósferas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · presión atmosférica

En el nivel del mar, el aire ejerce una presión de 1 atmósfera sobre nuestra piel.

### 10

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, ¿qué porcentaje del aire seco constituye el O2 y cómo se llama la presión que ejerce?

- A. Alrededor del 21% en volumen; el 21% de la presión atmosférica corresponde a la presión que ejerce el O2, valor conocido como presión parcial de O2 (PpO2)
- B. Alrededor del 77% en volumen; su presión se conoce como presión atmosférica total
- C. Alrededor del 1% en volumen; su presión se conoce como presión de argón
- D. Alrededor del 0,003% en volumen; su presión se conoce como presión parcial de CO2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · presión parcial de oxígeno

El O2 constituye alrededor del 21%, en volumen, del aire seco. El 21% de la presión atmosférica corresponde a la presión que ejerce el O2 en el aire. Este valor se conoce como presión parcial de O2 y se abrevia PpO2.

### 11

De acuerdo con el libro de Biología, además del 21% de O2, ¿qué contiene el aire?

- A. 77% de nitrógeno, 1% de argón, 0,003% de CO2 y 0,97% de otros gases
- B. 21% de nitrógeno, 77% de argón, 1% de CO2 y 0,97% de otros gases
- C. 50% de nitrógeno, 25% de argón y 25% de CO2
- D. 77% de argón, 1% de nitrógeno, 0,97% de CO2 y 0,003% de otros gases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · composición del aire

Además del 21% de O2, el aire contiene 77% de nitrógeno, 1% de argón, 0,003% de CO2 y 0,97% de otros gases, incluidos hidrógeno, neón, kriptón, helio, ozono, xenón y ahora, lamentablemente, una mayor concentración de algunos gases contaminantes, como el radón.

### 12

De acuerdo con el libro de Biología, a medida que aumenta la altura respecto del nivel del mar, ¿qué ocurre y cómo se llama esa situación?

- A. Disminuye la concentración de gases en la atmósfera, con la consecuente disminución de la presión atmosférica, y la PpO2 también se hace menor (hipoxia ambiental)
- B. Aumenta la concentración de gases y sube la presión atmosférica, con una PpO2 mayor
- C. La concentración de gases y la presión permanecen constantes a cualquier altura
- D. Aumenta solo la presión parcial de CO2, en una situación llamada hematosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · hipoxia ambiental

En la medida en que la altura aumenta respecto del nivel del mar, disminuye la concentración de gases en la atmósfera, con la consecuente disminución de la presión atmosférica y, por consiguiente, la PpO2 también se hace menor (hipoxia ambiental).

### 13

De acuerdo con el libro de Biología, ¿cuál es una de las primeras reacciones del organismo humano ante la altura y en qué consiste?

- A. La hiperventilación, que consiste en una ventilación más frecuente y profunda que aumenta el ingreso de O2 en los pulmones
- B. La hipoventilación, que consiste en una ventilación más lenta y superficial
- C. La disminución del ritmo cardíaco, que reduce el trabajo del corazón
- D. La disminución del número de glóbulos rojos circulantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · hiperventilación

Una de las primeras reacciones es la hiperventilación, que consiste en una ventilación más frecuente y profunda que, a su vez, aumenta el ingreso de O2 en los pulmones. Asimismo, aumenta el ritmo cardíaco, con el resultado de un mayor volumen de sangre bombeada a los distintos órganos y tejidos por unidad de tiempo.

### 14

De acuerdo con el libro de Biología, al cabo de varios días de permanecer en un ambiente hipóxico, ¿en qué consiste el mecanismo de compensación?

- A. En un aumento de la afinidad entre el oxígeno y los pigmentos respiratorios de los glóbulos rojos (hemoglobina), y en un aumento en el número de glóbulos rojos circulantes
- B. En una disminución de la afinidad entre el oxígeno y la hemoglobina, y en una reducción de los glóbulos rojos
- C. En un aumento del número de glóbulos blancos circulantes
- D. En la desaparición de la hiperventilación y del aumento del ritmo cardíaco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · compensación a la altura

Al cabo de varios días de permanecer en un ambiente hipóxico, se produce un mecanismo de compensación que consiste, entre otros ajustes, en un aumento de la afinidad entre el oxígeno y los pigmentos respiratorios de los glóbulos rojos (hemoglobina); incluso, se observa un aumento en el número de glóbulos rojos circulantes, que son los responsables del transporte del oxígeno dentro de la sangre.

### 15

De acuerdo con el libro de Biología, ¿a qué altura sobre el nivel del mar está la ciudad de México y qué siente al principio quien vive a nivel del mar y la visita?

- A. A 2300 m sobre el nivel del mar; al principio se sentirá ligeramente mareada y se cansará con facilidad debido a la menor PpO2
- B. A 230 m sobre el nivel del mar; al principio no sentirá ningún cambio
- C. A 23 000 m sobre el nivel del mar; al principio sufrirá alucinaciones inmediatas
- D. A 2300 m sobre el nivel del mar; al principio se sentirá con más energía por la mayor PpO2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · efectos de la altura

Si una persona que vive a nivel del mar visita un lugar como la ciudad de México, que está a 2300 m sobre el nivel del mar, al principio se sentirá ligeramente mareada y se cansará con facilidad debido a la menor PpO2.

### 16

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, en el buceo de aguas profundas, ¿cuánto se incrementa la presión total?

- A. 1 atmósfera por cada 10 m de profundidad
- B. 1 atmósfera por cada 100 m de profundidad
- C. 10 atmósferas por cada metro de profundidad
- D. 21 atmósferas por cada 10 m de profundidad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 828
**Subtema:** respiración · buceo

Cuando un organismo que respira aire se sumerge, la presión sobre los tejidos —incluidos los pulmones— aumenta, ya que la presión total se incrementa 1 atmósfera por cada 10 m de profundidad.

## Sub-lote 3 · La embolia del buceo y las adaptaciones de los mamíferos buceadores (fig. 35-2, p. 829)

### 17

De acuerdo con el libro de Biología, ¿qué es la embolia que pueden sufrir los buceadores y qué gravedad tiene?

- A. Una obstrucción de vasos sanguíneos muy dolorosa y, en algunas ocasiones, mortal
- B. Una inflamación de los pulmones que siempre se cura sola
- C. Una pérdida temporal de la audición, sin consecuencias graves
- D. Una contracción de los músculos respiratorios que impide exhalar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · embolia

Si ascienden con demasiada rapidez, los buceadores pueden sufrir una embolia (obstrucción de vasos sanguíneos) muy dolorosa y, en algunas ocasiones, mortal.

### 18

De acuerdo con el libro de Biología, ¿por qué se produce la embolia en el buceo, y qué gas la causa?

- A. Porque a alta presión el nitrógeno —el principal componente del aire, que no es metabolizado por el organismo— difunde desde el aire comprimido dentro de los pulmones hacia la sangre y los tejidos, donde se disuelve
- B. Porque el oxígeno se acumula en los pulmones y no puede ser exhalado
- C. Porque el dióxido de carbono deja de difundir fuera de las células
- D. Porque el argón se metaboliza rápidamente y satura la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · embolia

La embolia se produce porque, a alta presión (es decir, a profundidades importantes), el nitrógeno, el principal componente del aire —y que no es metabolizado por el organismo—, difunde desde el aire que se encuentra comprimido dentro de los pulmones hacia la sangre y los tejidos, donde se disuelve.

### 19

De acuerdo con el libro de Biología, ¿qué ocurre con el nitrógeno si el ascenso del buceador a la superficie es rápido?

- A. Tiende a abandonar el organismo con rapidez y forma burbujas en la sangre y en los tejidos
- B. Permanece disuelto en la sangre sin producir ningún efecto
- C. Se metaboliza de inmediato y se elimina por la orina
- D. Se transforma en oxígeno dentro de los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · embolia

Si el ascenso a la superficie es rápido, el nitrógeno tiende a abandonar el organismo con rapidez y forma burbujas en la sangre y en los tejidos.

### 20

De acuerdo con el libro de Biología, ¿con qué proceso cotidiano compara el libro la formación de burbujas de nitrógeno en el buceo?

- A. Con quitar la tapa de una botella de gaseosa: el gas se descomprime y aparecen numerosas burbujas de CO2
- B. Con hervir agua en una olla hasta que se evapora
- C. Con inflar un globo hasta que revienta
- D. Con disolver azúcar en un vaso de agua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · embolia

Este proceso es análogo al que ocurre cuando quitamos la tapa de una botella de gaseosa: el gas se descomprime y aparecen numerosas burbujas de CO2.

### 21

De acuerdo con el libro de Biología, ¿dónde se alojan las burbujas de nitrógeno y qué provocan?

- A. Se alojan en los capilares e interrumpen el flujo sanguíneo o causan dolor en las articulaciones y en otros tejidos
- B. Se alojan en los alvéolos pulmonares y facilitan el intercambio gaseoso
- C. Se alojan en el estómago y provocan náuseas pasajeras
- D. Se alojan en la piel y solo provocan enrojecimiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · embolia

Las burbujas de nitrógeno se alojan en los capilares e interrumpen el flujo sanguíneo o causan dolor en las articulaciones y en otros tejidos.

### 22

De acuerdo con el libro de Biología, ¿qué hacen los mamíferos buceadores, como las ballenas y las focas, al sumergirse, y qué evitan con ello?

- A. Exhalan el aire de sus pulmones, lo cual evita la "enfermedad de las profundidades"
- B. Inhalan la mayor cantidad de aire posible, lo cual evita la falta de oxígeno
- C. Cierran por completo sus vasos sanguíneos, lo cual evita la formación de burbujas
- D. Aumentan su ritmo cardíaco, lo cual evita la pérdida de calor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · mamíferos buceadores

Los mamíferos buceadores, como las ballenas y las focas, exhalan el aire de sus pulmones al sumergirse, lo cual evita la "enfermedad de las profundidades".

### 23

De acuerdo con el libro de Biología, según la figura 35-2, ¿qué le provee a los mamíferos buceadores su gran volumen sanguíneo y qué función cumple?

- A. Una gran cantidad de glóbulos rojos y de mioglobina, que funcionan como un reservorio de sangre oxigenada
- B. Una gran cantidad de glóbulos blancos, que funcionan como defensa contra infecciones
- C. Una gran cantidad de nitrógeno disuelto, que funciona como reserva de energía
- D. Una gran cantidad de plaquetas, que funcionan como reservorio de calor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · mamíferos buceadores

Su gran volumen sanguíneo, mayor que el de los humanos, les provee una gran cantidad de glóbulos rojos y de mioglobina, que funcionan como un reservorio de sangre oxigenada.

### 24

De acuerdo con el libro de Biología, según la figura 35-2, ¿cuál es el factor principal de supervivencia en los mamíferos buceadores?

- A. El llamado reflejo de buceo
- B. El gran volumen sanguíneo, mayor que el de los humanos
- C. La exhalación antes de zambullirse
- D. La cantidad de mioglobina de sus músculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

El factor principal de supervivencia en los mamíferos buceadores es el llamado reflejo de buceo.

### 25

De acuerdo con el libro de Biología, según la figura 35-2, ¿qué ocurre durante el buceo con el ritmo cardíaco y con la provisión de sangre?

- A. El ritmo cardíaco disminuye y la provisión de sangre a los tejidos más tolerantes a la falta de O2 —órganos digestivos, piel y músculos— se reduce enormemente
- B. El ritmo cardíaco aumenta y la provisión de sangre se reparte por igual entre todos los tejidos
- C. El ritmo cardíaco se detiene por completo durante toda la inmersión
- D. El ritmo cardíaco disminuye y la sangre se deriva sobre todo a los órganos digestivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

Durante el buceo, el ritmo cardíaco disminuye y la provisión de sangre a los tejidos más tolerantes a la falta de O2 —órganos digestivos, piel y músculos— se reduce enormemente.

### 26

De acuerdo con el libro de Biología, según la figura 35-2, ¿adónde se deriva la mayor parte del O2 durante el buceo y tras cuánto tiempo sin O2 comenzarían a morir esas células?

- A. Al corazón y al cerebro, cuyas células comenzarían a morir después de unos 4 minutos sin O2
- B. A los músculos y la piel, cuyas células comenzarían a morir después de unos 40 minutos sin O2
- C. A los órganos digestivos, cuyas células comenzarían a morir después de unas 4 horas sin O2
- D. A los pulmones, cuyas células comenzarían a morir después de unos 4 segundos sin O2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

La mayor parte del O2 se deriva al corazón y al cerebro, cuyas células comenzarían a morir después de unos 4 minutos sin O2.

### 27

De acuerdo con el libro de Biología, según la figura 35-2, en una hembra preñada de un mamífero buceador, ¿qué ocurre con el feto?

- A. El feto también tiene alta prioridad sobre el O2 disponible
- B. El feto deja de recibir O2 durante toda la inmersión
- C. El feto recibe O2 solo después de los órganos digestivos
- D. El feto produce su propio O2 mediante respiración celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

En una hembra preñada, el feto también tiene alta prioridad sobre el O2 disponible.

## Sub-lote 4 · Los límites de la difusión y la aparición de los sistemas respiratorios (p. 829)

### 28

De acuerdo con el libro de Biología, cuando el O2 difunde dentro de las células, ¿en qué proceso participa y qué se forma como resultado?

- A. Participa en la respiración celular, el proceso de oxidación de compuestos orgánicos que son fuentes de energía celular; como resultado se forma CO2, que luego difunde fuera de la célula a favor de su gradiente
- B. Participa en la ventilación, y como resultado se forma nitrógeno que se disuelve en la sangre
- C. Participa en la hematosis, y como resultado se forma mioglobina dentro de la célula
- D. Participa en la difusión simple, y como resultado no se forma ningún compuesto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · respiración celular

Cuando el O2 difunde dentro de las células de un organismo participa en la respiración celular, el proceso de oxidación de compuestos orgánicos que son fuentes de energía celular. Como resultado de este proceso se forma CO2, que luego difunde fuera de la célula a favor de su gradiente.

### 29

De acuerdo con el libro de Biología, ¿en qué células ocurre este proceso?

- A. En todas las células aeróbicas, ya se trate de una ameba, un paramecio, una célula hepática o una célula cerebral
- B. Únicamente en las células de los animales multicelulares grandes
- C. Solo en las células de los organismos unicelulares
- D. Exclusivamente en las células de los pulmones de los vertebrados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · células aeróbicas

Esto ocurre en todas las células aeróbicas, ya se trate de una ameba, un paramecio, una célula hepática o una célula cerebral.

### 30

De acuerdo con el libro de Biología, ¿hasta qué distancias pueden moverse de modo eficiente las sustancias por difusión?

- A. Solo hasta distancias muy cortas, menores de un milímetro
- B. Hasta distancias de varios metros
- C. Hasta distancias de muchos centímetros
- D. Sin límite de distancia, siempre que haya gradiente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · límites de la difusión

Las sustancias pueden moverse de modo eficiente por difusión solo hasta distancias muy cortas (menores de un milímetro).

### 31

De acuerdo con el libro de Biología, ¿por qué estos límites no representan un problema para los organismos unicelulares o para pluricelulares como las medusas?

- A. Porque cada célula se encuentra muy próxima a la superficie corporal, habitualmente rodeada de un medio fluido rico en O2, en el cual también puede difundir el CO2
- B. Porque poseen sistemas respiratorios muy desarrollados
- C. Porque no realizan respiración celular ni consumen O2
- D. Porque sus células están a muchos centímetros del medio fluido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · límites de la difusión

Estos límites no representan un problema para los organismos muy pequeños, como los unicelulares, o para ciertos pluricelulares, como las medusas, en los cuales cada célula se encuentra muy próxima a la superficie corporal, habitualmente rodeada de un medio fluido rico en O2, y en el cual también puede difundir el CO2.

### 32

De acuerdo con el libro de Biología, ¿por qué la difusión por sí sola no puede satisfacer las necesidades de los organismos de mayor tamaño?

- A. Porque sus células pueden encontrarse a muchos centímetros de distancia del aire o del agua que les sirven como fuente de O2 y como depositarios del CO2 que se elimina
- B. Porque sus células no realizan respiración celular
- C. Porque el O2 no puede atravesar la membrana de sus células
- D. Porque sus células están todas muy próximas a la superficie corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · límites de la difusión

La difusión por sí sola no puede satisfacer las necesidades de los grupos de organismos de mayor tamaño, cuyas células pueden encontrarse a muchos centímetros de distancia del aire o del agua que les sirven como fuente de O2, y como depositarios del CO2 que se elimina.

### 33

De acuerdo con el libro de Biología, ¿qué representó la baja eficiencia del proceso de difusión gaseosa para los animales multicelulares, y de qué resultó su supervivencia?

- A. Representó un límite, y su supervivencia es el resultado de la aparición de diversos sistemas respiratorios
- B. Representó una ventaja, y su supervivencia es el resultado de haber prescindido de sistemas respiratorios
- C. No representó ningún límite, porque la difusión basta a cualquier tamaño
- D. Representó un límite, y su supervivencia es el resultado de reducir su tamaño corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · evolución de los sistemas respiratorios

De esta manera, la baja eficiencia del proceso de difusión gaseosa representó un límite para los animales multicelulares, cuya supervivencia es el resultado de la aparición de diversos sistemas respiratorios.

## Sub-lote 5 · Las características de los órganos respiratorios (p. 830)

### 34

De acuerdo con el libro de Biología, ¿qué es un sistema respiratorio "eficiente"?

- A. Aquel que le permite a cada célula proveer la cantidad adecuada de O2 en un tiempo suficiente para abastecer sus necesidades metabólicas, a la vez que permite la eliminación adecuada del CO2 producido por las células
- B. Aquel que provee la mayor cantidad posible de O2, sin importar el tiempo ni la eliminación del CO2
- C. Aquel que elimina el CO2 pero no permite el ingreso de O2
- D. Aquel que funciona únicamente por difusión simple, sin sistema circulatorio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · órganos respiratorios

Un sistema respiratorio "eficiente" es aquel que le permite a cada célula proveer la cantidad adecuada de O2 en un tiempo suficiente para abastecer sus necesidades metabólicas, a la vez que permite la eliminación adecuada del CO2 producido por las células.

### 35

De acuerdo con el libro de Biología, en ciertos invertebrados de pequeño tamaño, como la lombriz de tierra, ¿qué separa el interior del cuerpo del exterior?

- A. Una sola capa de células, que constituye la superficie de intercambio gaseoso
- B. Un sistema de branquias internas altamente vascularizadas
- C. Un par de pulmones invaginados
- D. Una red de tubos traqueales con espiráculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · superficie de intercambio

En ciertos invertebrados de pequeño tamaño, como la lombriz de tierra, el interior del cuerpo está separado del exterior por una sola capa de células, que constituye la superficie de intercambio gaseoso.

### 36

De acuerdo con el libro de Biología, en esa superficie húmeda, ¿cómo están distribuidos el oxígeno y el dióxido de carbono respecto del interior celular?

- A. El oxígeno está menos concentrado en el interior celular, porque es consumido de modo permanente por las células; y la concentración de CO2 es mayor en el interior, porque es producido por las células
- B. El oxígeno está más concentrado en el interior celular y el CO2 menos concentrado
- C. Ambos gases están igualmente concentrados dentro y fuera de la célula
- D. Ninguno de los dos gases presenta gradiente de concentración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · gradientes de gases

Los gases difunden libremente a favor de su gradiente de concentración: el oxígeno, que de modo permanente es consumido por las células, está menos concentrado en el interior celular; mientras que la concentración de CO2 es mayor en el interior, ya que es producido por las células.

### 37

De acuerdo con el libro de Biología, ¿cómo se distribuye el O2 que ingresa y cómo se transporta el CO2 hacia la superficie corporal?

- A. El O2 es distribuido al resto de las células mediante el sistema circulatorio, y el CO2 es transportado por la sangre (o hemolinfa, en los invertebrados) desde los tejidos metabólicamente activos hacia la superficie corporal, donde se elimina
- B. Ambos gases se distribuyen únicamente por difusión, sin intervención del sistema circulatorio
- C. El O2 es transportado por la hemolinfa y el CO2 permanece almacenado en los tejidos
- D. El CO2 es distribuido a las células y el O2 se elimina por la superficie corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · transporte de gases

A medida que el O2 ingresa, es distribuido al resto de las células del organismo mediante el sistema circulatorio. A su vez, el CO2 es transportado por la sangre (o hemolinfa, en los invertebrados) desde los tejidos metabólicamente activos hacia la superficie corporal, donde se elimina.

### 38

De acuerdo con el libro de Biología, ¿por qué los animales de gran tamaño tienen órganos respiratorios de superficie altamente replegada?

- A. Porque su superficie de intercambio gaseoso sería demasiado pequeña para abastecer las demandas de su masa corporal, y el repliegue aumenta de manera significativa la superficie para el intercambio gaseoso
- B. Porque el repliegue reduce la superficie de intercambio y ahorra energía
- C. Porque el repliegue impide la entrada de gases contaminantes
- D. Porque necesitan almacenar aire dentro de los pliegues

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · superficie replegada

La superficie de intercambio gaseoso en grupos de animales de gran tamaño sería demasiado pequeña para abastecer las demandas de su masa corporal. Estos animales tienen órganos respiratorios, cuya superficie se encuentra altamente replegada, lo cual aumenta, de manera significativa, la superficie para el intercambio gaseoso.

### 39

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, ¿cuánto mide la superficie corporal de un humano adulto y cuánto la superficie interna de su pulmón?

- A. La superficie corporal es de alrededor de 2 m2 y la superficie interna del pulmón ocupa unos 100 m2
- B. La superficie corporal es de alrededor de 100 m2 y la del pulmón unos 2 m2
- C. Ambas miden alrededor de 2 m2
- D. La superficie corporal es de alrededor de 20 m2 y la del pulmón unos 10 m2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · superficie pulmonar

Por ejemplo, la superficie corporal de un humano adulto es de alrededor de 2 m2, mientras que la superficie interna del pulmón ocupa unos 100 m2.

### 40

De acuerdo con el libro de Biología, ¿en qué otro sistema se observa la misma característica de superficie altamente replegada, y para qué?

- A. En el intestino, cuya superficie altamente replegada optimiza la absorción de los nutrientes digeridos
- B. En el corazón, cuya superficie replegada optimiza el bombeo de sangre
- C. En el encéfalo, cuya superficie replegada optimiza la conducción nerviosa
- D. En la piel, cuya superficie replegada optimiza la pérdida de calor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · superficie replegada

La misma característica se observa en el curso de la evolución de otros sistemas, como en el caso de la superficie altamente replegada del intestino, que optimiza la absorción de los nutrientes digeridos.

### 41

De acuerdo con el libro de Biología, ¿cuáles son los dos órganos respiratorios más comunes entre los animales y en qué se diferencian sus superficies?

- A. Las branquias y los pulmones: las branquias son habitualmente superficies evaginadas, mientras que los pulmones son cavidades o superficies invaginadas
- B. Las branquias y los pulmones: las branquias son superficies invaginadas y los pulmones, evaginadas
- C. Las tráqueas y los espiráculos: ambas son superficies evaginadas
- D. La piel y el intestino: ambas son cavidades invaginadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · branquias y pulmones

Las superficies replegadas del sistema respiratorio son características de los dos órganos respiratorios más comunes que encontramos entre los animales: branquias y pulmones. Las branquias son habitualmente superficies evaginadas, mientras que los pulmones son cavidades o superficies invaginadas.

> Fácil de invertir: las **branquias** salen hacia afuera (superficies **evaginadas**); los **pulmones** son cavidades hacia adentro (superficies **invaginadas**).

### 42

De acuerdo con el libro de Biología, ¿cómo pueden disponerse las capas de tejido branquial y con qué compara el libro la branquia de una ostra?

- A. Pueden estar extendidas en un plano, apiladas o formar distintos tipos de circunvoluciones; la branquia de una ostra tiene una forma similar a un radiador accionado por vapor de agua
- B. Solo pueden estar extendidas en un plano; la branquia de una ostra tiene forma de tubo recto
- C. Siempre forman una esfera hueca; la branquia de una ostra tiene forma de saco
- D. Solo pueden estar apiladas; la branquia de una ostra tiene forma de espiral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · branquias

Las capas de tejido branquial pueden estar extendidas en un plano, apiladas o formar distintos tipos de circunvoluciones. La branquia de una ostra, por ejemplo, tiene una forma similar a un radiador accionado por vapor de agua.

### 43

De acuerdo con el libro de Biología, ¿cómo ingresa el O2 en el organismo desde el aire o el agua?

- A. Por difusión simple, al atravesar un epitelio delgado y húmedo
- B. Por transporte activo, con gasto de energía
- C. Por exocitosis a través de vesículas del epitelio
- D. Por acción de la bomba de Na+/K+-ATPasa del epitelio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · difusión simple

El O2 ingresa en el organismo desde el aire o el agua (medio externo) por difusión simple, al atravesar un epitelio delgado y húmedo.

## Sub-lote 6 · La diversidad de estrategias para obtener oxígeno (fig. 35-3, p. 830)

### 44

De acuerdo con el libro de Biología, según la figura 35-3a, en organismos pequeños como los gusanos cilíndricos y la lombriz de tierra, ¿cómo se produce el intercambio gaseoso?

- A. A través de la superficie corporal formada por una sola capa de células; en los capilares superficiales el O2 difunde hacia la sangre, mientras que el CO2 lo hace en sentido contrario
- B. A través de branquias internas altamente vascularizadas
- C. A través de tubos traqueales que penetran en cada tejido
- D. A través de pulmones invaginados y altamente vascularizados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · anélidos

En organismos pequeños, como los gusanos cilíndricos, el intercambio gaseoso se produce a través de la superficie corporal formada por una sola capa de células. En la medida en que la sangre circula a lo largo de los capilares superficiales, el O2 difunde hacia la sangre, mientras que el CO2 lo hace en sentido contrario.

### 45

De acuerdo con el libro de Biología, según la figura 35-3b, en los gusanos poliquetos y algunos anfibios como las salamandras, ¿cómo ocurre el intercambio gaseoso?

- A. A través de la superficie corporal y, además, por medio de branquias externas que incrementan la superficie de intercambio gaseoso
- B. Únicamente por medio de branquias internas
- C. Únicamente por medio de pulmones
- D. Por medio de tráqueas que comunican al exterior por espiráculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · branquias externas

En gusanos poliquetos y algunos anfibios, como las salamandras, el intercambio gaseoso ocurre a través de la superficie corporal y, además, por medio de branquias externas que incrementan la superficie de intercambio gaseoso.

### 46

De acuerdo con el libro de Biología, según la figura 35-3c, en los animales con branquias internas, como los peces, ¿qué hace el mecanismo de ventilación?

- A. Impulsa la circulación del agua sobre las superficies branquiales altamente vascularizadas, a través de las cuales se produce la hematosis
- B. Impulsa la circulación del aire hacia los pulmones y desde ellos
- C. Impulsa el aire a través de los tubos traqueales hasta cada tejido
- D. Impulsa la sangre hacia la superficie corporal para que difundan los gases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · branquias internas

En los animales con branquias internas, como los peces, el mecanismo de ventilación impulsa la circulación del agua sobre las superficies branquiales altamente vascularizadas, a través de las cuales se produce la hematosis.

### 47

De acuerdo con el libro de Biología, según la figura 35-3d, en los insectos y otros artrópodos terrestres, ¿dónde ocurre el intercambio gaseoso y cómo comunican los tubos con el exterior?

- A. Ocurre en los extremos terminales de los finos tubos traqueales, que se ramifican por el cuerpo y penetran en cada tejido; el otro extremo comunica al exterior por orificios llamados espiráculos
- B. Ocurre en branquias externas y el aire entra por la boca
- C. Ocurre en pulmones invaginados que comunican con el exterior por la tráquea
- D. Ocurre a través de toda la superficie corporal, sin tubos ni orificios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · tráqueas y espiráculos

En insectos y otros artrópodos terrestres, el intercambio gaseoso ocurre en los extremos terminales de los finos tubos traqueales, que se ramifican a través del cuerpo y penetran en cada tejido. El intercambio con el medio ocurre en el otro extremo de los tubos, que comunican al exterior por medio de orificios llamados espiráculos.

### 48

De acuerdo con el libro de Biología, según la figura 35-3e, ¿en qué animales están presentes los pulmones y qué son?

- A. En todos los vertebrados que respiran aire y en algunos invertebrados, como los caracoles terrestres; son sacos altamente vascularizados en donde se produce la hematosis
- B. Únicamente en los mamíferos; son tubos ramificados que penetran en cada tejido
- C. Solo en los peces; son superficies evaginadas altamente vascularizadas
- D. En todos los invertebrados acuáticos; son cavidades sin vascularización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · pulmones

Los pulmones, presentes en todos los vertebrados que respiran aire y en algunos invertebrados, como los caracoles terrestres, son sacos altamente vascularizados en donde se produce la hematosis. La ventilación provoca el flujo de aire desde los pulmones y hacia ellos.

## Sub-lote 7 · Cómo el O2 alcanza los tejidos y cómo sale el CO2 (p. 831)

### 49

De acuerdo con el libro de Biología, ¿bajo qué condición es eficiente la difusión en un órgano respiratorio?

- A. Siempre y cuando la distancia sea corta; es decir, que el epitelio sea delgado, como efectivamente lo es en todo órgano respiratorio
- B. Siempre y cuando la distancia sea larga y el epitelio sea grueso
- C. Únicamente si el epitelio está seco
- D. Solo si el epitelio carece de capilares sanguíneos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · difusión y epitelio

La difusión es eficiente, siempre y cuando la distancia sea corta; es decir, que el epitelio sea delgado, como efectivamente lo es en todo órgano respiratorio.

### 50

De acuerdo con el libro de Biología, ¿qué presión parcial de O2 posee la sangre que ingresa en el órgano respiratorio y para qué sirve?

- A. Una presión parcial de O2 relativamente baja, lo cual mantiene el gradiente necesario para que este gas ingrese de forma permanente desde el ambiente
- B. Una presión parcial de O2 muy alta, lo cual acelera la salida del gas hacia el ambiente
- C. Una presión parcial de O2 idéntica a la del ambiente, lo cual detiene la difusión
- D. Una presión parcial de O2 nula, lo cual impide todo intercambio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · gradiente de oxígeno

La sangre que ingresa en el órgano respiratorio posee una presión parcial de O2 relativamente baja, lo cual mantiene el gradiente necesario para que este gas ingrese de forma permanente desde el ambiente.

### 51

De acuerdo con el libro de Biología, desde la sangre de los capilares que irrigan los tejidos, ¿qué recorrido sigue el O2?

- A. Difunde hacia el líquido intersticial y desde allí hacia las células, que de forma permanente lo están utilizando para la respiración celular
- B. Difunde directamente desde los capilares hacia el ambiente exterior
- C. Es transportado por el sistema traqueal hasta cada tejido
- D. Permanece en los capilares sin salir hacia los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · llegada del oxígeno a las células

Desde la sangre de los capilares que irrigan los distintos tejidos, el O2 difunde hacia el líquido intersticial y desde allí hacia las células que, de forma permanente, lo están utilizando para la respiración celular.

### 52

De acuerdo con el libro de Biología, ¿qué camino sigue el CO2 producido por las células?

- A. Sigue el camino inverso del O2: difunde hacia la sangre, es transportado al órgano respiratorio y desde allí difunde hacia el ambiente, al atravesar el epitelio respiratorio a favor de su gradiente de concentración
- B. Sigue el mismo camino que el O2, desde el ambiente hacia las células
- C. Permanece almacenado de forma permanente en el líquido intersticial
- D. Es eliminado directamente por los capilares, sin pasar por el órgano respiratorio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · salida del dióxido de carbono

El CO2 que se produce como consecuencia de este proceso sigue el camino inverso del O2; es decir, difunde hacia la sangre y es transportado al órgano respiratorio, desde donde se difundirá hacia el ambiente, al atravesar el epitelio respiratorio a favor de su gradiente de concentración.

### 53

De acuerdo con el libro de Biología, ¿cuál es la excepción notoria a este recorrido, y en qué consiste?

- A. Las tráqueas de los insectos y otros artrópodos: no hay vinculación entre los sistemas respiratorio y circulatorio, y el O2 alcanza los tejidos de modo directo mediante las ramas cada vez más finas y arborizadas del sistema traqueal
- B. Las branquias de los peces: el O2 llega a los tejidos sin pasar por la sangre
- C. Los pulmones de los caracoles terrestres: el O2 se transporta por el líquido intersticial únicamente
- D. La piel de los anélidos: el O2 no llega nunca a los tejidos profundos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · sistema traqueal

Una excepción notoria la constituyen las tráqueas de los insectos y otros artrópodos. En este caso, no hay vinculación entre los sistemas respiratorio y circulatorio; el O2 alcanza los tejidos, de modo directo, mediante las ramas cada vez más finas y más arborizadas del sistema traqueal.

## Sub-lote 8 · Las branquias de los vertebrados y el mecanismo de contracorriente (fig. 35-4, p. 831)

### 54

De acuerdo con el libro de Biología, ¿qué función se considera que desempeñaban en su origen evolutivo las branquias de los vertebrados?

- A. Una función alimentaria: el agua ingresaba por la boca y era expulsada a través de las hendiduras branquiales, y en ese proceso las partículas de materia orgánica eran extraídas del flujo de agua
- B. Una función respiratoria exclusiva, desde su primer origen
- C. Una función de sostén del esqueleto de la cabeza
- D. Una función de regulación de la temperatura corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · origen de las branquias

Se considera que, en su origen evolutivo, las branquias de los vertebrados desempeñaban una función alimentaria. El agua ingresaba por la boca y era expulsada a través de las hendiduras branquiales. En este proceso, las partículas de materia orgánica eran extraídas del flujo de agua.

### 55

De acuerdo con el libro de Biología, ¿qué organismo actual se alimenta de esa manera?

- A. El cefalocordado *Branchiostoma*
- B. El atún, un pez óseo de natación rápida
- C. El caracol terrestre
- D. La salamandra, un anfibio con branquias externas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · Branchiostoma

Entre los organismos actuales, el cefalocordado *Branchiostoma* se alimenta de esta manera.

### 56

De acuerdo con el libro de Biología, ¿qué nueva función habrían pasado a cumplir las branquias de algunos animales en el curso de la historia evolutiva?

- A. El intercambio respiratorio
- B. La digestión de las partículas de materia orgánica
- C. La producción de hemoglobina
- D. La regulación del ritmo cardíaco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · evolución de las branquias

En el curso de la historia evolutiva, las branquias de algunos animales habrían pasado a cumplir una nueva función: el intercambio respiratorio.

### 57

De acuerdo con el libro de Biología, ¿qué son las laminillas secundarias de las branquias de los peces actuales y con qué las compara el libro?

- A. Son expansiones que se disponen entre sí en paralelo, como las hojas de un libro, cuya superficie conjunta es elevada, lo cual facilita el intercambio gaseoso
- B. Son tubos ramificados que penetran en cada tejido, como las raíces de un árbol
- C. Son sacos invaginados y vascularizados, como pequeños globos
- D. Son orificios que comunican al exterior, como ventanas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · laminillas secundarias

Los peces actuales poseen branquias con laminillas secundarias (expansiones que se disponen entre sí en paralelo, como las hojas de un libro), cuya superficie conjunta es elevada, lo cual facilita el intercambio gaseoso.

### 58

De acuerdo con el libro de Biología, en la mayoría de los peces óseos, ¿cómo es bombeada el agua que lleva O2 disuelto?

- A. Al interior de la boca por movimientos rítmicos del piso de la boca y del opérculo que cubre las branquias, y fluye hacia afuera a través de ellas
- B. Por contracciones del corazón que impulsan el agua hacia las branquias
- C. Por los espiráculos, que se abren y cierran de forma rítmica
- D. Por la dilatación de los pulmones, que aspiran el agua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · ventilación branquial

En la mayoría de los peces óseos, el agua —que lleva O2 disuelto— es bombeada al interior de la boca por movimientos rítmicos del piso de la boca y del opérculo que cubre las branquias y fluye hacia afuera a través de ellas.

### 59

De acuerdo con el libro de Biología, ¿cómo obtienen el O2 los peces de natación rápida y continua, como la caballa o los atunes, y qué riesgo corren?

- A. Mantienen sus bocas abiertas cuando nadan, y dependen tanto de ese método que pueden asfixiarse con facilidad si sus movimientos están limitados, como en un acuario
- B. Cierran sus bocas y bombean el agua con el opérculo, sin riesgo alguno
- C. Salen a la superficie a tomar aire, y se ahogan si no pueden hacerlo
- D. Obtienen el O2 por la piel, y se asfixian si el agua está fría

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · peces de natación rápida

Los peces de natación rápida y continua, como la caballa o los atunes, pueden obtener suficiente O2 al mantener sus bocas abiertas cuando nadan. Estos peces dependen tanto de este método de respiración que, si se mantienen en un acuario o en cualquier otro espacio en donde sus movimientos estén limitados, pueden asfixiarse con facilidad.

### 60

De acuerdo con el libro de Biología, en las branquias de los peces, ¿en qué sentido circula la sangre de los capilares respecto del agua?

- A. En un sentido contrario al del agua que atraviesa la branquia por el espacio existente entre las laminillas (disposición en contracorriente)
- B. En el mismo sentido que el agua que atraviesa la branquia
- C. En sentido perpendicular al del agua
- D. La sangre permanece inmóvil mientras el agua circula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · contracorriente

En las branquias de los peces, la sangre de los capilares que irrigan el interior de las laminillas branquiales circula en un sentido contrario al del agua que atraviesa la branquia por el espacio existente entre las laminillas.

### 61

De acuerdo con el libro de Biología, según la figura 35-4c, en el intercambio por contracorriente, ¿qué relación hay entre la presión de O2 del agua y la de la sangre?

- A. El agua siempre tiene mayor presión de O2 que la sangre y, por eso, el O2 fluye desde el agua hacia la sangre a lo largo de todo el sistema de intercambio
- B. La sangre siempre tiene mayor presión de O2 que el agua, y el O2 fluye hacia el agua
- C. Ambas tienen la misma presión de O2, por lo que no hay flujo neto
- D. La presión de O2 del agua solo supera a la de la sangre en el primer tramo del recorrido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · contracorriente

En el intercambio por contracorriente, el agua siempre tiene mayor presión de O2 que la sangre y, por eso, el O2 fluye desde el agua hacia la sangre, a lo largo de todo el sistema de intercambio.

> Esa es justamente la ventaja del sistema: como el agua y la sangre corren en sentidos opuestos, el gradiente **se mantiene a lo largo de todo el recorrido** y no se agota a mitad de camino.

### 62

De acuerdo con el libro de Biología, según la figura 35-4, ¿qué resultado da la disposición en contracorriente?

- A. Una transferencia de O2 extremadamente eficiente
- B. Una transferencia de O2 muy pobre, que se compensa con el volumen de sangre
- C. La eliminación completa del CO2 de la sangre
- D. La detención del flujo de agua entre las laminillas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · contracorriente

Esta disposición en contracorriente da como resultado una transferencia de O2 extremadamente eficiente.

### 63

De acuerdo con el libro de Biología, según la figura 35-4, ¿qué se necesita para abastecer de O2 al torrente sanguíneo y a qué se debe su elevada capacidad de transporte?

- A. Se necesitan importantes volúmenes de agua, y la elevada capacidad de transporte de la sangre se debe a la hemoglobina, que une oxígeno
- B. Se necesitan volúmenes muy pequeños de agua, y la capacidad de transporte se debe al plasma
- C. Se necesita aire en lugar de agua, y la capacidad de transporte se debe a la mioglobina
- D. No se necesita ningún volumen de agua, porque el O2 pasa directamente del aire a la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · hemoglobina

Se necesitan importantes volúmenes de agua para abastecer de O2 al torrente sanguíneo, cuya capacidad de transporte es elevada debido a la hemoglobina, que une oxígeno.

## Sub-lote 9 · Los pulmones de los vertebrados: el aire frente al agua (p. 832)

### 64

De acuerdo con el libro de Biología, para saturar de O2 un determinado volumen de sangre, ¿qué volumen de agua debe bombear la mayoría de los peces por las branquias?

- A. Un volumen 15 veces mayor de agua
- B. Un volumen 15 veces menor de agua
- C. Un volumen exactamente igual al de la sangre
- D. Un volumen 300 000 veces mayor de agua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · volúmenes de agua y sangre

Dado que, debido a la presencia de hemoglobina, la sangre tiene mucha más capacidad de transporte de O2 que el agua, para saturar de O2 un determinado volumen de sangre, la mayoría de los peces debe bombear un volumen 15 veces mayor de agua por las branquias.

### 65

De acuerdo con el libro de Biología, ¿qué son los pulmones y qué desventaja tienen frente a las branquias?

- A. Son cavidades internas desde las cuales el O2 del aire ingresa en el torrente sanguíneo; su desventaja es que, para la difusión, es más eficiente un flujo continuo de fluido que el flujo y reflujo rítmicos de los pulmones, que se llenan y se vacían con regularidad
- B. Son superficies evaginadas; su desventaja es que no poseen capilares sanguíneos
- C. Son tubos ramificados; su desventaja es que no se comunican con el exterior
- D. Son cavidades internas; su desventaja es que el aire contiene menos O2 que el agua

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · pulmones de los vertebrados

Los pulmones son cavidades internas desde las cuales el O2 contenido en el aire ingresa en el torrente sanguíneo. Si se comparan con las branquias, los pulmones tienen una desventaja: desde el punto de vista de la difusión, es más eficiente tener un flujo continuo de fluido a través de la superficie respiratoria que un flujo y reflujo rítmicos como ocurre en los pulmones, que se llenan y se vacían de aire con regularidad.

### 66

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, ¿qué porcentaje de O2 tiene el aire de la atmósfera actual en comparación con el agua a 15 ºC?

- A. El 21% del volumen del aire es O2, en comparación con el 0,5% de O2 que se encuentra en el agua a 15 ºC
- B. El 0,5% del volumen del aire es O2, en comparación con el 21% del agua a 15 ºC
- C. Ambos contienen alrededor del 21% de O2
- D. El aire contiene 77% de O2 y el agua 21%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · el aire frente al agua

El aire es una fuente de O2 muy superior al agua: el 21% del volumen de aire de la atmósfera actual es O2, en comparación con el 0,5% de O2 que se encuentra en el agua, a 15 ºC.

### 67

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, ¿cuántas veces más rápido se difunde el O2 en el aire que en el agua?

- A. Unas 300 000 veces más rápido
- B. Unas 15 veces más rápido
- C. Unas 300 veces más rápido
- D. Unas 21 veces más rápido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · difusión en aire y agua

El O2 se difunde unas 300 000 veces más rápido en el aire que en el agua y, por lo tanto, se puede obtener mucho más rápido del aire a medida que es utilizado por los organismos que respiran.

### 68

De acuerdo con el libro de Biología, en el capítulo 35 sobre la respiración, ¿cuánta energía gasta un pez en el trabajo muscular de la ventilación en comparación con un organismo que respira aire?

- A. Un pez gasta hasta el 20% de su energía, mientras que un organismo que respira aire gasta solo entre el 1 y el 2%
- B. Un pez gasta entre el 1 y el 2%, mientras que un organismo que respira aire gasta hasta el 20%
- C. Ambos gastan alrededor del 20% de su energía
- D. Un pez gasta el 50% y un organismo que respira aire, el 20%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · costo energético de la ventilación

El agua tiene una viscosidad mucho más elevada que el aire, por lo que se requiere más trabajo para movilizar un mismo volumen de agua que de aire. Un pez gasta hasta el 20% de su energía en el trabajo muscular asociado con la ventilación, mientras que un organismo que respira aire gasta solo entre el 1 y el 2% de su energía en este proceso.

> Las tres ventajas del aire sobre el agua, juntas: contiene **más O2** (21% frente a 0,5%), el O2 **difunde 300 000 veces más rápido** en él, y es **menos viscoso**, por lo que ventilar cuesta mucho menos energía (1-2% frente al 20% del pez).

### 69

De acuerdo con el libro de Biología, además de los vertebrados, ¿en qué otros animales se encuentran pulmones?

- A. En algunos invertebrados, como los caracoles terrestres, que han desarrollado de forma independiente pulmones de notable similitud a los de algunos anfibios
- B. Únicamente en los peces óseos de natación rápida
- C. En todos los artrópodos terrestres, que los desarrollaron a partir de las tráqueas
- D. En ningún invertebrado: son exclusivos de los vertebrados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · pulmones en invertebrados

Si bien los pulmones son fundamentalmente un órgano característico de los vertebrados, también se encuentran en algunos invertebrados, como los caracoles terrestres, que han desarrollado, de forma independiente, pulmones de notable similitud a los de algunos anfibios.

### 70

De acuerdo con el libro de Biología, en algunos peces primitivos que poseían branquias y pulmones, ¿a partir de qué zona se desarrollaron los pulmones?

- A. A partir de la zona anterior de la faringe, de manera independiente de las branquias
- B. A partir de las propias branquias, por transformación directa
- C. A partir de la piel del dorso del animal
- D. A partir del sistema traqueal de los artrópodos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · origen de los pulmones

Algunos peces primitivos poseían tanto branquias como pulmones; estos últimos se desarrollaron de manera independiente de las branquias, a partir de la zona anterior de la faringe.

### 71

De acuerdo con el libro de Biología, ¿cómo es el pulmón de los peces pulmonados y en qué ambiente se habría seleccionado?

- A. Tiene paredes delgadas y muy vascularizadas que permiten un intercambio eficiente de O2; es probable que haya sido seleccionado en organismos que vivían en agua dulce, que a diferencia del agua de mar puede estancarse y perder gran parte del O2 disuelto
- B. Tiene paredes gruesas y poco vascularizadas; se habría seleccionado en el agua de mar
- C. Es idéntico al de los mamíferos; se habría seleccionado en ambientes terrestres secos
- D. Carece de vascularización; se habría seleccionado en aguas muy frías

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · peces pulmonados

El pulmón de los peces pulmonados tiene paredes delgadas y muy vascularizadas, que permiten un intercambio eficiente de O2. Es probable que este pulmón haya sido seleccionado en organismos que vivían en agua dulce que, a diferencia del agua de mar, puede estancarse y perder gran parte del O2 disuelto.

### 72

De acuerdo con el libro de Biología, ¿qué hacen las pocas especies actuales de peces pulmonados y qué logran con ello?

- A. Suben a la superficie, incorporan bocanadas de aire a sus pulmones y vuelven a sumergirse, independizándose en cierta medida de las fluctuaciones en la concentración del O2 disuelto en el agua
- B. Permanecen siempre en el fondo, respirando únicamente por sus branquias
- C. Abandonan el agua de forma permanente para vivir en tierra firme
- D. Cierran sus branquias y respiran solo por la piel

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · peces pulmonados

Todavía existen unas pocas especies de peces pulmonados que pueden respirar tanto en el agua como en el aire con sus branquias y pulmones. Estos peces suben a la superficie, incorporan bocanadas de aire a sus pulmones y vuelven a sumergirse, independizándose, en cierta medida, de las fluctuaciones en la concentración del O2 disuelto en el agua.

## Sub-lote 10 · La respiración de los vertebrados terrestres y las aves (fig. 35-5, p. 832)

### 73

De acuerdo con el libro de Biología, ¿cómo son los pulmones de los anfibios y reptiles?

- A. Relativamente simples, aunque más grandes y complejos que los de los peces pulmonados
- B. Extremadamente complejos, con sacos aéreos como los de las aves
- C. Más simples y pequeños que los de los peces pulmonados
- D. Idénticos a los de los mamíferos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · anfibios y reptiles

Los anfibios y reptiles poseen pulmones relativamente simples, aunque más grandes y complejos que los de los peces pulmonados.

### 74

De acuerdo con el libro de Biología, ¿qué estructuras permiten a los vertebrados que respiran aire hacerlo con la boca cerrada?

- A. Una tráquea protegida por un mecanismo de válvula —la epiglotis— y ventanas nasales
- B. Un opérculo que cubre las branquias y unos espiráculos
- C. Una serie de sacos aéreos comunicados con los pulmones
- D. Unas laminillas secundarias dispuestas en paralelo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · epiglotis

Los anfibios, los reptiles y otros vertebrados que respiran aire tienen una tráquea protegida por un mecanismo de válvula —la epiglotis— y ventanas nasales, que les permiten respirar con la boca cerrada.

### 75

De acuerdo con el libro de Biología, ¿de qué dependen los anfibios y los reptiles para el intercambio gaseoso?

- A. Los anfibios dependen en gran medida de su piel, aunque los reptiles respiran casi por entero a través de los pulmones
- B. Los anfibios respiran casi por entero por los pulmones y los reptiles por la piel
- C. Ambos dependen exclusivamente de su piel
- D. Ambos dependen exclusivamente de branquias internas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · anfibios y reptiles

Los anfibios dependen, en gran medida, de su piel para el intercambio gaseoso, aunque los reptiles respiran casi por entero a través de los pulmones.

### 76

De acuerdo con el libro de Biología, ¿cómo incorporan las ranas el aire a sus pulmones?

- A. Fuerzan su ingreso al contraer el piso de la boca; luego abren la epiglotis y permiten que el aire sea exhalado
- B. Mediante cambios en la presión y el volumen de la cavidad torácica
- C. Mediante la expansión y compresión alternada de sacos aéreos
- D. Bombeando agua por movimientos rítmicos del opérculo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · las ranas

Las ranas incorporan el aire y fuerzan su ingreso en los pulmones al contraer el piso de la boca; luego, abren la epiglotis y permiten que el aire sea exhalado.

### 77

De acuerdo con el libro de Biología, en los reptiles, las aves y los mamíferos, ¿cómo entra y sale el aire de los pulmones?

- A. Como consecuencia de cambios en la presión y el volumen de la cavidad torácica, producidos por contracciones y relajaciones musculares
- B. Por la contracción del piso de la boca, como en las ranas
- C. Por la acción de los cilios del epitelio respiratorio
- D. Por difusión simple, sin intervención muscular alguna

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · cavidad torácica

En los reptiles, las aves y los mamíferos, el aire entra y sale de los pulmones como consecuencia de cambios en la presión y el volumen de la cavidad torácica, producidos por contracciones y relajaciones musculares.

### 78

De acuerdo con el libro de Biología, ¿por qué el sistema respiratorio de las aves es más eficiente?

- A. Porque tienen una serie de sacos aéreos —donde no se produce intercambio gaseoso entre el aire y la sangre— comunicados con pequeños pulmones muy vascularizados, cuya expansión y compresión alternada determinan un flujo unidireccional y continuo de aire
- B. Porque sus pulmones son mucho más grandes que los de los mamíferos
- C. Porque respiran por la piel además de por los pulmones
- D. Porque poseen branquias internas además de pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · sacos aéreos de las aves

En las aves, que tienen tasas metabólicas elevadas, este sistema es más eficiente debido a que tienen una serie de sacos aéreos —donde no se produce un intercambio gaseoso entre el aire y la sangre—, que están comunicados con pequeños pulmones muy vascularizados. La expansión y la compresión alternada de esos sacos determinan un flujo unidireccional y continuo de aire en los pulmones. De esa manera, el intercambio de gases se maximiza y la mezcla entre aire inspirado y espirado disminuye.

## Sub-lote 11 · El sistema respiratorio humano: las vías aéreas superiores (fig. 35-6a, p. 832)

### 79

De acuerdo con el libro de Biología, ¿qué funciones cumplen las cavidades nasales?

- A. Están tapizadas con pelos y cilios que atrapan el polvo y otras partículas extrañas —función que también cumple el moco, que además humedece el aire—, y poseen una rica provisión de sangre que calienta el aire antes de que alcance los pulmones
- B. Solo humedecen el aire, sin filtrarlo ni calentarlo
- C. Únicamente calientan el aire, sin atrapar partículas
- D. Producen las cuerdas vocales y el sonido de la voz

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · cavidades nasales

Las cavidades nasales están tapizadas con pelos y cilios que atrapan el polvo y otras partículas extrañas. La misma función cumple el moco secretado por las células epiteliales que revisten estas cavidades; este ayuda, además, a humedecer el aire inhalado. Las cavidades nasales poseen una rica provisión de sangre que mantiene su temperatura elevada y calienta el aire antes de que este alcance los pulmones.

### 80

De acuerdo con el libro de Biología, desde las cavidades nasales, ¿qué recorrido sigue el aire y dónde se sitúa la laringe?

- A. Pasa a la faringe y desde allí a la laringe, situada en la parte superior y anterior del cuello
- B. Pasa directamente a la tráquea, sin atravesar la faringe
- C. Pasa a la laringe y desde allí a la faringe, situada en la parte posterior del tórax
- D. Pasa a los bronquíolos y desde allí a la faringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · faringe y laringe

Desde las cavidades nasales, el aire pasa a la faringe y desde allí a la laringe, situada en la parte superior y anterior del cuello.

### 81

De acuerdo con el libro de Biología, ¿qué son las cuerdas vocales que contiene la laringe?

- A. Dos músculos longitudinales con ligamentos transversales que atraviesan la luz del tracto respiratorio y determinan un espacio triangular por donde pasa el aire
- B. Dos anillos de cartílago que refuerzan las paredes de la tráquea
- C. Dos membranas ciliadas que atrapan el polvo del aire inhalado
- D. Dos sacos aéreos donde no se produce intercambio gaseoso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · cuerdas vocales

La laringe contiene las cuerdas vocales, que son dos músculos longitudinales con ligamentos transversales que atraviesan la luz del tracto respiratorio y determinan un espacio triangular por donde pasa el aire.

### 82

De acuerdo con el libro de Biología, ¿cómo es la tráquea y para qué sirven los anillos de cartílago de sus paredes?

- A. Es un largo tubo membranoso revestido de células epiteliales ciliadas; los anillos de cartílago evitan su colapso durante la inspiración o cuando es presionada por alimentos desde el esófago contiguo
- B. Es un saco vascularizado sin revestimiento; los anillos sirven para producir sonido
- C. Es un tubo rígido de hueso; los anillos permiten su expansión durante la espiración
- D. Es una cavidad interna donde ocurre la hematosis; los anillos filtran el polvo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · tráquea

Desde la laringe, el aire inspirado pasa a través de la tráquea: un largo tubo membranoso también revestido de células epiteliales ciliadas. Las paredes de la tráquea están reforzadas por anillos de cartílago que evitan su colapso durante la inspiración o cuando es presionada por alimentos desde el esófago contiguo.

### 83

De acuerdo con el libro de Biología, ¿en qué desemboca la tráquea y cómo se llaman los conductos en que se subdividen?

- A. Desemboca en los bronquios, que se subdividen en conductos aéreos cada vez más pequeños llamados bronquíolos
- B. Desemboca en los bronquíolos, que se subdividen en conductos más grandes llamados bronquios
- C. Desemboca en la laringe, que se subdivide en cuerdas vocales
- D. Desemboca en los sacos aéreos, que se subdividen en laminillas secundarias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · bronquios y bronquíolos

La tráquea desemboca en los bronquios, que se subdividen en conductos aéreos cada vez más pequeños llamados bronquíolos.

---

**Reactivos en este archivo:** 83
