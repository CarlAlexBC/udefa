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
glóbulos rojos, y el aumento de presión en el buceo).

**Pendiente:** el capítulo 35 está EN CURSO; sigue desde la página impresa 829 (hoja 875) en adelante (la embolia de los buceadores y el resto del capítulo, hasta antes del ensayo de cierre "Retomando la problemática inicial" y los ejercicios). De la materia de Biología, además de este capítulo, siguen sin empezar los capítulos 36 y 37. Este archivo —el capítulo en curso— sostiene el pendiente de la materia hasta que exista el `.md` del siguiente.

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

---

**Reactivos en este archivo:** 16
