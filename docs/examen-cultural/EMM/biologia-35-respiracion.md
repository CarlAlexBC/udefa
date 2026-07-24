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
aparición de diversos sistemas respiratorios como resultado de ese límite).

**Pendiente:** el capítulo 35 está EN CURSO; sigue desde la página impresa 830 (hoja 876) en adelante (los distintos sistemas respiratorios de los animales y el resto del capítulo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). De la materia de Biología, además de este capítulo, siguen sin empezar los capítulos 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

---

**Reactivos en este archivo:** 33
