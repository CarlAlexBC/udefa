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
8 (149), 11 (162), 12 (131), 31 (84), 32 (271) y 35 (166). Siguen el 36 y el 37.

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
tráquea con sus anillos de cartílago, y los bronquios y bronquíolos). De la **página 833**
se cubren el músculo liso de bronquios y bronquíolos bajo control del sistema autónomo (y
la dilatación simpática en el estrés) y las dos figuras: la **fig. 35-5** del sistema
respiratorio de las aves (pulmones pequeños pero extraordinariamente eficientes, el flujo
unidireccional de la zona posterior a la anterior frente al flujo y reflujo de los
mamíferos, los sacos alojados en los espacios aéreos de los huesos, el ciclo de dos
inhalaciones y espiraciones, los sacos como fuelles sin intercambio gaseoso que dejan poco
aire residual "muerto", los parabronquios y el pollo de 14 días) y la **fig. 35-6** del
sistema humano (el recorrido completo del aire hasta los alvéolos, los aproximadamente
300 millones de alvéolos del par de pulmones, y la difusión de O2 y CO2 a través de la
pared alveolar y de los capilares). De la **página 834** se cubren los alvéolos en detalle
(el intercambio por difusión en los racimos alrededor de los bronquíolos más pequeños, su
diámetro de 0,1 a 0,2 mm y los capilares que los bañan) y la limpieza de las vías aéreas
(los espasmos bronquiales, los cilios que empujan el moco hacia la faringe, y cuándo se
nota esa producción de moco); más el **ensayo 35-1 sobre el asma** (los varios millares de
respiraciones diarias, los casos de Beethoven, el "Che" Guevara y Proust, los tres
fenómenos que la definen, los síntomas y el silbido, su empeoramiento nocturno, los
desencadenantes alérgicos, la relación epidemiológica con la contaminación, el diagnóstico
por espirometría y flujo máximo, la diferencia entre broncodilatadores y
glucocorticosteroides, y su carácter psicosomático). De la **página 835** se cubren la
membrana respiratoria (el endotelio capilar y las células epiteliales planas de los
alvéolos como una única y fina capa de células con un delgado espacio intersticial,
fig. 35-7), las pleuras (visceral y parietal) y el espacio intrapleural con su líquido
lubricante, y el proceso de la ventilación (el cambio de volumen de la cavidad torácica
por el diafragma y los músculos intercostales, la inspiración con el diafragma que se
aplana, y el modelo de la fig. 35-8 con la espiración pasiva y la forzada). De la
**página 836** se cubren el final del proceso de ventilación (los intercostales externos,
la caída de presión que hace entrar el aire, la exhalación pasiva por las propiedades
elásticas y la regulación en el bulbo raquídeo con su alto umbral a los anestésicos), los
pigmentos respiratorios y el transporte de oxígeno (la baja solubilidad del O2 en plasma,
el 0,3 %, las proteínas transportadoras que elevan 70 veces la capacidad, la hemoglobina
y la hemocianina, su ubicación en plasma o en glóbulos rojos según el grupo, los 265
millones de moléculas por eritrocito, las cuatro subunidades con hierro, y la mioglobina
del músculo esquelético como reservorio que libera O2 bajo 20 mm Hg), y el intercambio de
gases con los tejidos (la combinación y disociación de la hemoglobina según la PpO2, el
transporte de CO2 disuelto en plasma y como ácido carbónico catalizado por la anhidrasa
carbónica, y la fig. 35-9 con la saturación a 100 mm Hg y la liberación del 30 % a 40 mm
Hg). De la **página 837** se cubren el cierre del transporte de CO2 (en los pulmones el
ácido carbónico se disocia en CO2 y agua para eliminarse con el aire espirado) y toda la
fig. 35-10 (el CO2 disuelto en plasma, unido a grupos amino de la hemoglobina o —la mayor
parte— como ion bicarbonato producido en dos pasos por la anhidrasa carbónica de los
glóbulos rojos, y la reacción reversible según la PpCO2), más "El control nervioso de la
ventilación" (el sistema nervioso que ajusta frecuencia y amplitud, el centro respiratorio
bulbar de la fig. 35-11 con sus grupos dorsal y ventral, la respiración rítmica y
automática de control voluntario limitado, y los quimiorreceptores periféricos —aorta y
carótidas, alarmas tempranas de 7 s— y centrales, con la modulación por corteza,
hipotálamo y sistema límbico). De la **página 838** se cubren la sensibilidad de los
quimiorreceptores periféricos a la caída de la PpO2 por debajo de 60 mm Hg, la
hiperventilación como respuesta, el mareo por alcalinidad al hiperventilar, el control
involuntario que retoma al elevarse la PpCO2, y la respuesta a los iones H+ (hasta antes
del ensayo de cierre "Retomando la problemática inicial", que por norma no lleva
reactivos). **Con esto el capítulo 35 queda cubierto por completo.**

**Errata del libro (p. 836).** El libro imprime el ion bicarbonato como **"HCO3+"** (con
signo más), pero el bicarbonato es un **anión** y su fórmula correcta es **HCO3⁻**. No es
suciedad del escaneo: está así impreso (verificado con render a 500 dpi). Curiosamente, en
la **fig. 35-10 (p. 837)** el mismo libro lo escribe **bien**, como "(HCO3–)"; la errata es
puntual del cuerpo de la p. 836. Por eso los reactivos de esa reacción **no fijan la carga
del ion**: citan "los iones bicarbonato e hidrógeno" sin el superíndice, para no propagar
el error.

**Pendiente:** ninguno. El capítulo 35 está cerrado en 166 reactivos (24 jul 2026) y cubre
completas las páginas impresas 828 a 838; el ensayo de cierre "Retomando la problemática
inicial" y los ejercicios no llevan reactivos por norma. Lo que falta de Biología lo
declara el archivo del capítulo en curso — hoy, el capítulo 36 (`biologia-36-circulacion.md`).

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
De acuerdo con el libro de Biología, ¿cuántos significados tiene el término *respiración* y cuáles son?
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
De acuerdo con el libro de Biología, ¿cómo varía el consumo de O2 de los animales corredores, como las hembras de impala?
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
De acuerdo con el libro de Biología, ¿qué porcentaje del aire seco constituye el O2 y cómo se llama la presión que ejerce?
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
De acuerdo con el libro de Biología, en el buceo de aguas profundas, ¿cuánto se incrementa la presión total?
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
De acuerdo con el libro de Biología, ¿qué le provee a los mamíferos buceadores su gran volumen sanguíneo y qué función cumple?
- A. Una gran cantidad de glóbulos rojos y de mioglobina, que funcionan como un reservorio de sangre oxigenada
- B. Una gran cantidad de glóbulos blancos, que funcionan como defensa contra infecciones
- C. Una gran cantidad de nitrógeno disuelto, que funciona como reserva de energía
- D. Una gran cantidad de plaquetas, que funcionan como reservorio de calor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · mamíferos buceadores

Su gran volumen sanguíneo, mayor que el de los humanos, les provee una gran cantidad de glóbulos rojos y de mioglobina, que funcionan como un reservorio de sangre oxigenada.

### 24
De acuerdo con el libro de Biología, ¿cuál es el factor principal de supervivencia en los mamíferos buceadores?
- A. El llamado reflejo de buceo
- B. El gran volumen sanguíneo, mayor que el de los humanos
- C. La exhalación antes de zambullirse
- D. La cantidad de mioglobina de sus músculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

El factor principal de supervivencia en los mamíferos buceadores es el llamado reflejo de buceo.

### 25
De acuerdo con el libro de Biología, ¿qué ocurre durante el buceo con el ritmo cardíaco y con la provisión de sangre?
- A. El ritmo cardíaco disminuye y la provisión de sangre a los tejidos más tolerantes a la falta de O2 —órganos digestivos, piel y músculos— se reduce enormemente
- B. El ritmo cardíaco aumenta y la provisión de sangre se reparte por igual entre todos los tejidos
- C. El ritmo cardíaco se detiene por completo durante toda la inmersión
- D. El ritmo cardíaco disminuye y la sangre se deriva sobre todo a los órganos digestivos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

Durante el buceo, el ritmo cardíaco disminuye y la provisión de sangre a los tejidos más tolerantes a la falta de O2 —órganos digestivos, piel y músculos— se reduce enormemente.

### 26
De acuerdo con el libro de Biología, ¿adónde se deriva la mayor parte del O2 durante el buceo y tras cuánto tiempo sin O2 comenzarían a morir esas células?
- A. Al corazón y al cerebro, cuyas células comenzarían a morir después de unos 4 minutos sin O2
- B. A los músculos y la piel, cuyas células comenzarían a morir después de unos 40 minutos sin O2
- C. A los órganos digestivos, cuyas células comenzarían a morir después de unas 4 horas sin O2
- D. A los pulmones, cuyas células comenzarían a morir después de unos 4 segundos sin O2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 829
**Subtema:** respiración · reflejo de buceo

La mayor parte del O2 se deriva al corazón y al cerebro, cuyas células comenzarían a morir después de unos 4 minutos sin O2.

### 27
De acuerdo con el libro de Biología, en una hembra preñada de un mamífero buceador, ¿qué ocurre con el feto?
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
De acuerdo con el libro de Biología, ¿cuánto mide la superficie corporal de un humano adulto y cuánto la superficie interna de su pulmón?
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
De acuerdo con el libro de Biología, en organismos pequeños como los gusanos cilíndricos y la lombriz de tierra, ¿cómo se produce el intercambio gaseoso?
- A. A través de la superficie corporal formada por una sola capa de células; en los capilares superficiales el O2 difunde hacia la sangre, mientras que el CO2 lo hace en sentido contrario
- B. A través de branquias internas altamente vascularizadas
- C. A través de tubos traqueales que penetran en cada tejido
- D. A través de pulmones invaginados y altamente vascularizados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · anélidos

En organismos pequeños, como los gusanos cilíndricos, el intercambio gaseoso se produce a través de la superficie corporal formada por una sola capa de células. En la medida en que la sangre circula a lo largo de los capilares superficiales, el O2 difunde hacia la sangre, mientras que el CO2 lo hace en sentido contrario.

### 45
De acuerdo con el libro de Biología, en los gusanos poliquetos y algunos anfibios como las salamandras, ¿cómo ocurre el intercambio gaseoso?
- A. A través de la superficie corporal y, además, por medio de branquias externas que incrementan la superficie de intercambio gaseoso
- B. Únicamente por medio de branquias internas
- C. Únicamente por medio de pulmones
- D. Por medio de tráqueas que comunican al exterior por espiráculos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · branquias externas

En gusanos poliquetos y algunos anfibios, como las salamandras, el intercambio gaseoso ocurre a través de la superficie corporal y, además, por medio de branquias externas que incrementan la superficie de intercambio gaseoso.

### 46
De acuerdo con el libro de Biología, en los animales con branquias internas, como los peces, ¿qué hace el mecanismo de ventilación?
- A. Impulsa la circulación del agua sobre las superficies branquiales altamente vascularizadas, a través de las cuales se produce la hematosis
- B. Impulsa la circulación del aire hacia los pulmones y desde ellos
- C. Impulsa el aire a través de los tubos traqueales hasta cada tejido
- D. Impulsa la sangre hacia la superficie corporal para que difundan los gases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · branquias internas

En los animales con branquias internas, como los peces, el mecanismo de ventilación impulsa la circulación del agua sobre las superficies branquiales altamente vascularizadas, a través de las cuales se produce la hematosis.

### 47
De acuerdo con el libro de Biología, en los insectos y otros artrópodos terrestres, ¿dónde ocurre el intercambio gaseoso y cómo comunican los tubos con el exterior?
- A. Ocurre en los extremos terminales de los finos tubos traqueales, que se ramifican por el cuerpo y penetran en cada tejido; el otro extremo comunica al exterior por orificios llamados espiráculos
- B. Ocurre en branquias externas y el aire entra por la boca
- C. Ocurre en pulmones invaginados que comunican con el exterior por la tráquea
- D. Ocurre a través de toda la superficie corporal, sin tubos ni orificios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 830
**Subtema:** respiración · tráqueas y espiráculos

En insectos y otros artrópodos terrestres, el intercambio gaseoso ocurre en los extremos terminales de los finos tubos traqueales, que se ramifican a través del cuerpo y penetran en cada tejido. El intercambio con el medio ocurre en el otro extremo de los tubos, que comunican al exterior por medio de orificios llamados espiráculos.

### 48
De acuerdo con el libro de Biología, ¿en qué animales están presentes los pulmones y qué son?
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
De acuerdo con el libro de Biología, en el intercambio por contracorriente, ¿qué relación hay entre la presión de O2 del agua y la de la sangre?
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
De acuerdo con el libro de Biología, ¿qué resultado da la disposición en contracorriente?
- A. Una transferencia de O2 extremadamente eficiente
- B. Una transferencia de O2 muy pobre, que se compensa con el volumen de sangre
- C. La eliminación completa del CO2 de la sangre
- D. La detención del flujo de agua entre las laminillas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 831
**Subtema:** respiración · contracorriente

Esta disposición en contracorriente da como resultado una transferencia de O2 extremadamente eficiente.

### 63
De acuerdo con el libro de Biología, ¿qué se necesita para abastecer de O2 al torrente sanguíneo y a qué se debe su elevada capacidad de transporte?
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
De acuerdo con el libro de Biología, ¿qué porcentaje de O2 tiene el aire de la atmósfera actual en comparación con el agua a 15 ºC?
- A. El 21% del volumen del aire es O2, en comparación con el 0,5% de O2 que se encuentra en el agua a 15 ºC
- B. El 0,5% del volumen del aire es O2, en comparación con el 21% del agua a 15 ºC
- C. Ambos contienen alrededor del 21% de O2
- D. El aire contiene 77% de O2 y el agua 21%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · el aire frente al agua

El aire es una fuente de O2 muy superior al agua: el 21% del volumen de aire de la atmósfera actual es O2, en comparación con el 0,5% de O2 que se encuentra en el agua, a 15 ºC.

### 67
De acuerdo con el libro de Biología, ¿cuántas veces más rápido se difunde el O2 en el aire que en el agua?
- A. Unas 300 000 veces más rápido
- B. Unas 15 veces más rápido
- C. Unas 300 veces más rápido
- D. Unas 21 veces más rápido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 832
**Subtema:** respiración · difusión en aire y agua

El O2 se difunde unas 300 000 veces más rápido en el aire que en el agua y, por lo tanto, se puede obtener mucho más rápido del aire a medida que es utilizado por los organismos que respiran.

### 68
De acuerdo con el libro de Biología, ¿cuánta energía gasta un pez en el trabajo muscular de la ventilación en comparación con un organismo que respira aire?
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

## Sub-lote 12 · El control del flujo de aire y el sistema respiratorio de las aves (fig. 35-5, p. 833)

### 84

De acuerdo con el libro de Biología, ¿qué rodea a los bronquios y bronquíolos, y qué ajusta su contracción y relajación?

- A. Capas delgadas de músculo liso, bajo el control del sistema nervioso autónomo, cuya contracción y relajación ajustan el flujo de aire de acuerdo con las demandas metabólicas
- B. Anillos de cartílago rígido que impiden todo cambio de diámetro
- C. Capas de músculo esquelético bajo control voluntario
- D. Sacos aéreos que almacenan el aire inspirado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · músculo liso bronquial

Los bronquios y los bronquíolos están rodeados por capas delgadas de músculo liso. La contracción y la relajación de este músculo, que se halla bajo el control del sistema nervioso autónomo, ajustan el flujo de aire de acuerdo con las demandas metabólicas.

### 85

De acuerdo con el libro de Biología, durante las situaciones de estrés, ¿qué hace el sistema nervioso simpático con los bronquíolos?

- A. Los dilata, con lo cual aumentan su diámetro y, en consecuencia, aumenta también el flujo de aire oxigenado
- B. Los contrae, con lo cual disminuye su diámetro y el flujo de aire
- C. Los mantiene sin cambios, porque no responden al sistema nervioso
- D. Los reemplaza por sacos aéreos temporales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · dilatación de los bronquíolos

Durante las situaciones de estrés, el sistema nervioso simpático dilata los bronquíolos, los cuales aumentan su diámetro, y, en consecuencia, el flujo de aire oxigenado también aumenta.

### 86
De acuerdo con el libro de Biología, ¿cómo son los pulmones de las aves y qué les permiten?
- A. Aunque son pequeños, son extraordinariamente eficientes, lo cual les permite soportar largos períodos de intensa actividad, como los vuelos migratorios
- B. Son muy grandes y poco eficientes, por lo que deben descansar con frecuencia
- C. Son pequeños y poco eficientes, lo cual limita su capacidad de vuelo
- D. Son idénticos a los de los mamíferos en tamaño y eficiencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · pulmones de las aves

Si bien los pulmones de las aves son pequeños, estos son extraordinariamente eficientes, lo cual les permite soportar largos períodos de intensa actividad, como los vuelos migratorios.

### 87
De acuerdo con el libro de Biología, ¿en qué se diferencia la circulación del aire en las aves respecto de los mamíferos?
- A. En los mamíferos el aire entra y sale del pulmón por la misma vía —la tráquea—, mientras que en las aves circula en un único sentido: ingresa por la zona posterior y, tras el intercambio gaseoso, lo abandona por la zona anterior
- B. En las aves el aire entra y sale por la misma vía, mientras que en los mamíferos circula en un único sentido
- C. En ambos grupos el aire circula en un único sentido a través del pulmón
- D. En las aves el aire ingresa por la zona anterior y sale por la posterior

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · flujo unidireccional de las aves

A diferencia de los mamíferos, en los que el aire entra y sale del pulmón a través de la misma vía —la tráquea—, en las aves, el aire circula por los pulmones en un único sentido: ingresa en el pulmón desde la zona posterior y, luego de producirse el intercambio gaseoso, lo abandona por la zona anterior.

> Es la diferencia de fondo entre los dos sistemas: en los **mamíferos** el aire va y viene por la misma vía (flujo y reflujo); en las **aves** el flujo es **unidireccional**, y por eso queda poco aire residual "muerto" (reactivo 90).

### 88
De acuerdo con el libro de Biología, ¿dónde están ubicados los sacos con los que se conecta cada pulmón de las aves?
- A. En los espacios aéreos de los huesos
- B. En la cavidad abdominal, junto al tubo digestivo
- C. Dentro del propio tejido pulmonar, sin salir de él
- D. En la base del cuello, junto a la laringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · sacos aéreos de las aves

Cada pulmón está conectado con varios sacos ubicados en los espacios aéreos de los huesos.

### 89
De acuerdo con el libro de Biología, ¿cuál es el recorrido del aire en el ciclo respiratorio de un ave?
- A. Al inhalar, el aire entra por la tráquea y pasa a los sacos aéreos posteriores; en la espiración siguiente pasa de esos sacos a los pulmones, donde ocurre el intercambio gaseoso; en la siguiente inspiración sale de los pulmones hacia los sacos aéreos anteriores, y en la subsecuente espiración sale del cuerpo
- B. Al inhalar, el aire pasa directamente a los pulmones y en la espiración sale del cuerpo, en un solo ciclo
- C. Al inhalar, el aire entra por los sacos anteriores y en la espiración pasa a los posteriores
- D. El aire permanece siempre dentro de los sacos aéreos, sin llegar nunca a los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · ciclo respiratorio de las aves

Cuando el ave inhala, el aire entra por la tráquea y pasa a los sacos aéreos posteriores. Durante la subsecuente espiración, pasa de los sacos posteriores a los pulmones, en donde se produce el intercambio gaseoso. Durante la siguiente inspiración, el aire sale de los pulmones e ingresa en los sacos aéreos anteriores; en la subsecuente espiración, sale del cuerpo.

### 90
De acuerdo con el libro de Biología, ¿qué función cumplen los sacos aéreos de las aves y qué resultado produce?
- A. En ellos no se produce intercambio gaseoso; actúan como fuelles, insuflando aire fresco en los pulmones en cada ciclo respiratorio, y como resultado queda poco aire residual "muerto" en los pulmones, a diferencia de lo que ocurre en los mamíferos
- B. En ellos se produce todo el intercambio gaseoso, y por eso los pulmones pueden ser pequeños
- C. Almacenan sangre oxigenada como reservorio para el vuelo
- D. Filtran el polvo del aire antes de que llegue a los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · sacos aéreos de las aves

En los sacos no se produce intercambio gaseoso; estos actúan como fuelles, insuflando aire fresco en los pulmones en cada ciclo respiratorio. Como resultado, queda poco aire residual "muerto" en los pulmones, a diferencia de lo que ocurre en los mamíferos.

### 91
De acuerdo con el libro de Biología, ¿cómo se llaman los tubos aéreos del pulmón de las aves y dónde ocurre allí el intercambio gaseoso?
- A. Se llaman parabronquios, y el intercambio gaseoso ocurre en la amplia malla de tubos capilares aéreos y capilares sanguíneos que forman el tejido respiratorio esponjoso
- B. Se llaman alvéolos, y el intercambio ocurre en su pared junto a los capilares
- C. Se llaman bronquíolos, y el intercambio ocurre en los sacos aéreos
- D. Se llaman laminillas secundarias, y el intercambio ocurre por contracorriente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · parabronquios

Los tubos aéreos del pulmón de las aves son los parabronquios. El intercambio gaseoso ocurre en la amplia malla de tubos capilares aéreos y capilares sanguíneos, que constituyen el tejido respiratorio esponjoso que se observa rodeando a los tubos mayores.

### 92
De acuerdo con el libro de Biología, ¿de qué animal es la microfotografía electrónica de barrido del tejido pulmonar?
- A. De un pollo de 14 días
- B. De un ave migratoria adulta
- C. De un pez pulmonado
- D. De un caracol terrestre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · pulmones de las aves

Microfotografía electrónica de barrido de un tejido pulmonar de un pollo de 14 días. Los tubos visibles aquí están ventilados por el aire incorporado por los sacos aéreos.

## Sub-lote 13 · El recorrido del aire y los alvéolos humanos (fig. 35-6, p. 833)

### 93
De acuerdo con el libro de Biología, ¿cuál es el recorrido completo del aire en el sistema respiratorio humano?
- A. Ingresa por la nariz o la boca, pasa a la faringe, luego a la laringe y desciende finalmente por la tráquea, los bronquios y los bronquíolos hasta los alvéolos pulmonares
- B. Ingresa por la nariz, pasa a la laringe, luego a la faringe y desciende por los bronquíolos hasta los bronquios
- C. Ingresa por la boca, pasa al esófago y desde allí a los pulmones
- D. Ingresa por la tráquea, pasa a la faringe y desde allí a los alvéolos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · recorrido del aire

El aire ingresa por la nariz o la boca, pasa a la faringe, luego a la laringe y desciende finalmente por la tráquea, los bronquios y los bronquíolos hasta los alvéolos pulmonares.

### 94
De acuerdo con el libro de Biología, ¿en cuántos alvéolos se produce el intercambio gaseoso en el par de pulmones?
- A. En los aproximadamente 300 millones de alvéolos del par de pulmones
- B. En los aproximadamente 300 mil alvéolos del par de pulmones
- C. En los aproximadamente 3 millones de alvéolos del par de pulmones
- D. En un único alvéolo por cada pulmón

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · alvéolos

El intercambio gaseoso se produce en los aproximadamente 300 millones de alvéolos del par de pulmones.

### 95
De acuerdo con el libro de Biología, ¿a través de qué difunden el O2 y el CO2 hacia o desde la sangre?
- A. A través de la pared de los alvéolos y de los capilares sanguíneos
- B. A través de la pared de la tráquea y de los bronquios
- C. A través de las cuerdas vocales y la laringe
- D. A través de los sacos aéreos y los parabronquios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 833
**Subtema:** respiración · intercambio alveolar

El O2 y CO2 difunden hacia o desde la sangre a través de la pared de los alvéolos y de los capilares sanguíneos.

## Sub-lote 14 · Los alvéolos y la limpieza de las vías aéreas (p. 834)

### 96

De acuerdo con el libro de Biología, ¿dónde ocurre el intercambio de gases y por qué?

- A. Por difusión, como consecuencia de diferentes presiones parciales de O2 y CO2, en pequeños sacos aéreos denominados alvéolos, agrupados en racimos alrededor de los extremos de los bronquíolos más pequeños
- B. Por transporte activo, en la pared de la tráquea y los bronquios
- C. Por difusión, en los sacos aéreos de los huesos
- D. Por exocitosis, en las cuerdas vocales de la laringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · alvéolos

El intercambio de gases ocurre por difusión —como consecuencia de diferentes presiones parciales de O2 y CO2— en pequeños sacos aéreos denominados alvéolos, que se encuentran agrupados en racimos alrededor de los extremos de los bronquíolos más pequeños.

### 97
De acuerdo con el libro de Biología, ¿qué diámetro tiene cada alvéolo y qué lo rodea?
- A. Entre 0,1 y 0,2 mm de diámetro, y está rodeado por capilares: vasos sanguíneos muy delgados que bañan casi por completo cada alvéolo
- B. Entre 1 y 2 cm de diámetro, y está rodeado por anillos de cartílago
- C. Entre 0,1 y 0,2 m de diámetro, y está rodeado por músculo liso
- D. Entre 10 y 20 mm de diámetro, y está rodeado por sacos aéreos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · alvéolos

Cada alvéolo tiene entre 0,1 y 0,2 mm de diámetro y está rodeado por capilares: vasos sanguíneos muy delgados que bañan casi por completo cada alvéolo.

### 98

De acuerdo con el libro de Biología, ¿qué ocurre en algunas ocasiones, como en un ataque de asma, y qué provoca?

- A. Se producen espasmos bronquiales, lo que dificulta el intercambio de aire
- B. Se produce una dilatación permanente de los bronquios, que facilita el intercambio
- C. Se detiene por completo el batido de los cilios de la tráquea
- D. Se colapsa la tráquea por falta de anillos de cartílago

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · espasmos bronquiales

En algunas ocasiones, se producen espasmos bronquiales, como en un ataque de asma, lo que dificulta el intercambio de aire.

### 99

De acuerdo con el libro de Biología, ¿qué hacen los cilios de la tráquea, los bronquios y los bronquíolos?

- A. Baten continuamente y empujan el moco y las partículas extrañas embebidas en él hacia la faringe, desde donde por lo general son tragados
- B. Baten continuamente y empujan el moco hacia los alvéolos, donde se absorbe
- C. Permanecen inmóviles y solo filtran el aire inhalado
- D. Secretan el moco que humedece el aire inhalado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · cilios y moco

Los cilios de la tráquea, los bronquios y los bronquíolos baten continuamente y empujan el moco y las partículas extrañas embebidas en él hacia la faringe, desde donde, por lo general, son tragados.

### 100

De acuerdo con el libro de Biología, ¿cuándo notamos habitualmente la producción de moco?

- A. Solo cuando se incrementa por encima de lo normal, como consecuencia de una irritación de las membranas debido a una infección o a una reacción alérgica
- B. De forma permanente, porque siempre resulta perceptible
- C. Únicamente durante el ejercicio físico intenso
- D. Solo cuando disminuye por debajo de lo normal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · producción de moco

Esta producción de moco habitualmente la notamos solo cuando se incrementa por encima de lo normal, como consecuencia de una irritación de las membranas debido a una infección o a una reacción alérgica.

## Sub-lote 15 · El ensayo 35-1: el asma (p. 834)

### 101
De acuerdo con el libro de Biología, si contáramos la cantidad de veces que inspiramos y espiramos cada día, ¿cuánto sumaríamos, y qué se moviliza en ese proceso?
- A. Sumaríamos varios millares; en ese proceso se mueven decenas de músculos y huesos, se expande y achica el tórax, y se inflan y desinflan los pulmones
- B. Sumaríamos unas pocas decenas; solo se mueve el diafragma
- C. Sumaríamos varios millones; se mueven únicamente los pulmones
- D. Sumaríamos alrededor de cien; se mueven solo las costillas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

Si contáramos la cantidad de veces que inspiramos y espiramos cada día, sumaríamos varios millares. En este proceso se mueven decenas de músculos y huesos, se expande y achica el tórax, y se inflan y desinflan los pulmones.

### 102

De acuerdo con el libro de Biología, ¿a qué personajes menciona el ensayo como personas a las que el asma no impidió sus logros?

- A. A Ludwig von Beethoven, que compuso su *Novena Sinfonía*; a Ernesto "Che" Guevara, que protagonizó la revolución cubana de 1959; y a Marcel Proust, que escribió *En busca del tiempo perdido*
- B. A Charles Darwin, a Louis Pasteur y a Santiago Ramón y Cajal
- C. A Luigi Galvani, a Charles Sherrington y a Eric Kandel
- D. A Vincent Van Gogh, a Marcel Proust y a Charles Darwin

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

El asma no impidió a Ludwig von Beethoven, para muchos el más grande compositor de todos los tiempos, componer su *Novena Sinfonía* ni a Ernesto "Che" Guevara protagonizar la revolución cubana de 1959 ni a Marcel Proust escribir *En busca del tiempo perdido*, una de las obras cumbre de la literatura universal.

### 103

De acuerdo con el libro de Biología, ¿qué es esencialmente el asma y qué tres fenómenos se combinan en ella?

- A. Es esencialmente una inflamación de las vías aéreas: los bronquios son estrangulados por el músculo liso que los rodea, sus paredes internas se inflaman y las membranas mucosas producen una gran cantidad de moco, lo cual reduce el espacio dentro de los pequeños conductos pulmonares
- B. Es esencialmente una infección de los alvéolos, que se llenan de líquido
- C. Es esencialmente una obstrucción de la tráquea por un cuerpo extraño
- D. Es esencialmente una dilatación excesiva de los bronquios y bronquíolos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

Es esencialmente una inflamación de las vías aéreas, durante la cual los bronquios son estrangulados por el músculo liso que los rodea, sus paredes internas se inflaman y las membranas mucosas que tapizan su interior producen una gran cantidad de moco. Estos tres fenómenos combinados reducen el espacio dentro de los pequeños conductos pulmonares.

### 104

De acuerdo con el libro de Biología, ¿qué síntomas puede presentar una persona durante un ataque de asma?

- A. Algunas sufren una fuerte tos, otras sienten una opresión en el pecho y les cuesta ventilar; muchas veces la ventilación está acompañada por un silbido causado por el aire forzado a pasar por las vías aéreas angostadas
- B. Todas presentan exactamente los mismos síntomas: fiebre alta y dolor muscular
- C. El único síntoma posible es la pérdida de la voz
- D. No presentan ningún síntoma perceptible

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

No todas las personas tienen los mismos síntomas durante un ataque de asma. Algunas sufren una fuerte tos, otras sienten una opresión en el pecho y les cuesta ventilar. Muchas veces, la ventilación está acompañada por un silbido causado por el aire forzado a pasar por las vías aéreas angostadas.

### 105

De acuerdo con el libro de Biología, ¿en qué momento empeoran por lo general los síntomas del asma?

- A. Durante la noche y la madrugada
- B. Durante el mediodía y la primera tarde
- C. Únicamente en verano, al mediodía
- D. Los síntomas no varían a lo largo del día

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

Los síntomas del asma varían de hora en hora, de un día a otro, de semana a semana y de mes a mes. Por lo general, empeoran durante la noche y la madrugada.

### 106

De acuerdo con el libro de Biología, ¿qué desencadena en muchas ocasiones los ataques de asma?

- A. La alergia a sustancias como el polen, partículas de piel de perros y gatos o ácaros presentes en el polvo, el moho acumulado en paredes húmedas y el ejercicio
- B. Únicamente el consumo de alimentos fríos
- C. Solo la exposición prolongada al sol
- D. Exclusivamente la altitud sobre el nivel del mar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

En muchas ocasiones, los ataques son desencadenados por la alergia a sustancias, como el polen, partículas de piel de perros y gatos o ácaros presentes en el polvo, por el moho acumulado en paredes húmedas y por el ejercicio.

### 107

De acuerdo con el libro de Biología, ¿qué demuestran los estudios epidemiológicos sobre el asma, y qué son los alérgenos?

- A. Que el aumento de la frecuencia del asma coincide con el aumento de la contaminación atmosférica y se ha relacionado con la exposición a alérgenos domésticos, al tabaco y a diversos irritantes químicos; los alérgenos son sustancias que provocan alergia
- B. Que la frecuencia del asma disminuye con el aumento de la contaminación; los alérgenos son medicamentos antiinflamatorios
- C. Que el asma no guarda ninguna relación con el ambiente; los alérgenos son bacterias
- D. Que el asma solo aparece en países desarrollados; los alérgenos son virus respiratorios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma y contaminación

Los estudios epidemiológicos demuestran que el aumento de la frecuencia del asma coincide con el aumento de la contaminación atmosférica y ha sido relacionado con la exposición a alérgenos (sustancias que provocan alergia) domésticos, al tabaco y a diversos irritantes químicos.

### 108

De acuerdo con el libro de Biología, ¿qué lugar ocupa el asma entre las enfermedades y a quiénes afecta?

- A. Es una de las enfermedades crónicas más frecuentes en el mundo y se ha transformado en un problema sanitario global, que afecta tanto a personas de países desarrollados como "periféricos"
- B. Es una enfermedad rara que solo afecta a los países desarrollados
- C. Es una enfermedad aguda y pasajera que afecta solo a los niños
- D. Es una enfermedad que ha desaparecido casi por completo en el mundo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

El asma es una de las enfermedades crónicas más frecuentes en el mundo y se ha transformado en un problema sanitario global, que afecta tanto a personas de países desarrollados como "periféricos".

### 109

De acuerdo con el libro de Biología, ¿qué pruebas de la función pulmonar se necesitan para el diagnóstico y qué mide cada una?

- A. La espirometría, que evalúa la limitación del flujo de aire, y el estudio del flujo máximo, que mide la velocidad máxima a la cual el aire puede salir de los pulmones
- B. La espirometría, que mide la velocidad máxima de salida del aire, y el flujo máximo, que evalúa la cantidad de moco
- C. Solo un análisis de sangre que mide la hemoglobina
- D. Únicamente una radiografía de tórax

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · diagnóstico del asma

Se necesitan un examen físico y pruebas de la función pulmonar, como la espirometría —que evalúa la limitación del flujo de aire— y el estudio del flujo máximo —que mide la velocidad máxima a la cual el aire puede salir de los pulmones.

### 110

De acuerdo con el libro de Biología, ¿cómo actúan los broncodilatadores de acción rápida y qué limitación tienen?

- A. Otorgan alivio inmediato al relajar los músculos bronquiales y facilitar el flujo de aire, pero sus efectos son temporarios y no afectan a la inflamación ni disminuyen la cantidad de moco
- B. Controlan la inflamación de las vías aéreas de forma permanente y eliminan el moco
- C. Actúan lentamente y solo sirven para el control a largo plazo
- D. Aumentan la contracción de los músculos bronquiales para forzar el aire

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · broncodilatadores

Los broncodilatadores de acción rápida otorgan alivio inmediato, al relajar los músculos bronquiales y facilitar así el flujo de aire. Sin embargo, sus efectos son temporarios y no afectan a la inflamación ni disminuyen la cantidad de moco.

### 111

De acuerdo con el libro de Biología, para el control del asma en el largo plazo, ¿qué necesitan los asmáticos y qué logran esos medicamentos?

- A. Tomar antiinflamatorios e inhalar glucocorticosteroides de forma regular; estos medicamentos controlan la inflamación de las vías aéreas e incluso disminuyen la sensibilidad a los agentes que disparan el asma
- B. Tomar únicamente broncodilatadores de acción rápida cada vez que sientan alivio
- C. Inhalar oxígeno puro de forma regular, sin ningún medicamento
- D. No requieren ningún tratamiento a largo plazo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · tratamiento del asma

Para su control en el largo plazo, los asmáticos necesitan tomar antiinflamatorios e inhalar glucocorticosteroides de forma regular, a intervalos dictados por la intensidad y la frecuencia de los ataques. Estos medicamentos controlan la inflamación de las vías aéreas, e incluso disminuyen la sensibilidad a los agentes que disparan el asma.

> Los dos tratamientos hacen cosas distintas: los **broncodilatadores** alivian rápido pero **no tocan la inflamación ni el moco**; los **antiinflamatorios y glucocorticosteroides** son el control **a largo plazo** y sí controlan la inflamación.

### 112

De acuerdo con el libro de Biología, ¿qué han demostrado numerosos estudios sobre la naturaleza del asma?

- A. Que es una afección psicosomática, en la cual coexisten un componente orgánico y un componente psicoemocional fuertemente entrelazados
- B. Que es una afección exclusivamente orgánica, sin ningún componente emocional
- C. Que es una afección exclusivamente psicológica, sin base orgánica
- D. Que es una afección contagiosa de origen viral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 834
**Subtema:** respiración · asma

Numerosos estudios han demostrado también que el asma es una afección psicosomática, en la cual coexisten un componente orgánico y un componente psicoemocional fuertemente entrelazados.

---

## Sub-lote 16 · La membrana respiratoria y las pleuras (fig. 35-7, p. 835)

### 113

De acuerdo con el libro de Biología, ¿qué constituyen, en conjunto, el endotelio de los capilares y las células epiteliales planas de los alvéolos?

- A. Una única y fina capa de células, separadas entre sí por un delgado espacio intersticial
- B. Una gruesa pared de varias capas de músculo liso, sin espacio intersticial
- C. Una envoltura de cartílago continuo que rodea por completo cada alvéolo
- D. Una doble membrana de tejido conjuntivo denso separada por líquido pleural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · membrana respiratoria

El endotelio de los capilares, junto con las células epiteliales planas de los alvéolos, constituye una única y fina capa de células, separadas entre sí por un delgado espacio intersticial.

---

### 114

De acuerdo con el libro de Biología, ¿cómo se llama la membrana delgada que cubre los pulmones?

- A. La pleura visceral
- B. La pleura parietal
- C. La pleura costal
- D. El espacio intrapleural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · pleuras

Los pulmones están cubiertos por una membrana delgada, la pleura visceral, mientras que la cavidad torácica está revestida internamente por la pleura parietal.

> El par visceral / parietal se presta a confusión: la visceral cubre el pulmón, la parietal reviste la cavidad torácica.

---

### 115

De acuerdo con el libro de Biología, ¿qué membrana reviste internamente la cavidad torácica?

- A. La pleura parietal
- B. La pleura visceral
- C. La pleura costal
- D. El espacio intrapleural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · pleuras

Los pulmones están cubiertos por una membrana delgada, la pleura visceral, mientras que la cavidad torácica está revestida internamente por la pleura parietal.

---

### 116

De acuerdo con el libro de Biología, ¿qué contiene el espacio intrapleural, comprendido entre las pleuras?

- A. Una pequeña cantidad de líquido lubricante, de modo que ambas se deslizan entre sí cuando los pulmones se expanden y se contraen
- B. Una gran cantidad de aire a presión que mantiene inflados los pulmones
- C. Un tejido conjuntivo denso que fija los pulmones a la caja torácica
- D. Una capa de músculo liso que comprime los pulmones al espirar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · espacio intrapleural

El espacio comprendido entre las pleuras, o espacio intrapleural, contiene una pequeña cantidad de líquido lubricante, de modo que ambas se deslizan entre sí cuando los pulmones se expanden y se contraen.

---

## Sub-lote 17 · El proceso de la ventilación (fig. 35-8, p. 835)

### 117

De acuerdo con el libro de Biología, ¿qué cambia el volumen de la cavidad torácica?

- A. La contracción y la relajación del diafragma muscular y de los músculos intercostales
- B. La dilatación y la constricción de los bronquíolos por el músculo liso
- C. El batido de los cilios del epitelio de las vías aéreas
- D. La expansión y el colapso pasivos de los alvéolos por su elasticidad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · ventilación

La contracción y la relajación del diafragma muscular y de los músculos intercostales cambian el volumen de la cavidad torácica.

---

### 118

De acuerdo con el libro de Biología, ¿qué ocurre con el diafragma cuando inhalamos?

- A. Contraemos el diafragma, que se aplana y así se alarga la cavidad torácica
- B. Relajamos el diafragma, que se abomba y así se acorta la cavidad torácica
- C. Contraemos el diafragma, que se abomba y así se acorta la cavidad torácica
- D. Relajamos el diafragma, que se aplana y así se alarga la cavidad torácica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · ventilación

Cuando inhalamos contraemos el diafragma, que se aplana y así se alarga la cavidad torácica.

---

### 119

De acuerdo con el libro de Biología, al inhalar, ¿qué hacen los músculos intercostales externos al contraerse?

- A. Empujan la caja torácica hacia arriba y hacia afuera, ensanchando la caja torácica
- B. Empujan la caja torácica hacia abajo y hacia adentro, estrechando la caja torácica
- C. Comprimen el diafragma hacia arriba, reduciendo la cavidad torácica
- D. Mantienen inmóvil la caja torácica mientras solo se mueve el diafragma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · ventilación

Contraemos los músculos intercostales externos, que empujan la caja torácica hacia arriba y hacia afuera, ensanchando la caja torácica.

---

### 120

De acuerdo con el libro de Biología, durante la inspiración, ¿qué sucede con el volumen y la presión de la cavidad torácica?

- A. La cavidad torácica se agranda, la presión dentro de ella disminuye y el aire entra en los pulmones
- B. La cavidad torácica se agranda, la presión dentro de ella aumenta y el aire sale de los pulmones
- C. La cavidad torácica se reduce, la presión dentro de ella disminuye y el aire entra en los pulmones
- D. La cavidad torácica se reduce, la presión dentro de ella aumenta y el aire sale de los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · ventilación

La cavidad torácica se agranda, la presión dentro de ella disminuye y el aire entra en los pulmones.

---

### 121

De acuerdo con el libro de Biología, durante la exhalación, ¿gracias a qué el pulmón retorna a la situación previa a la inhalación?

- A. Gracias a sus propiedades elásticas, cuando estos músculos se relajan
- B. Gracias a la contracción activa del diafragma, que se aplana
- C. Gracias al empuje de los músculos intercostales externos
- D. Gracias a la presión del líquido intrapleural sobre los alvéolos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · ventilación

Durante la exhalación, estos músculos se relajan y el pulmón retorna a la situación previa a la inhalación, gracias a sus propiedades elásticas.

---

### 122

De acuerdo con el libro de Biología, según el modelo del funcionamiento de los pulmones, ¿por qué se produce la espiración pasiva?

- A. Por relajación tanto del diafragma, que sube, como de los intercostales externos
- B. Por contracción tanto del diafragma, que baja, como de los intercostales externos
- C. Por contracción de los músculos intercostales internos únicamente
- D. Por relajación del músculo liso de los bronquíolos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · ventilación

La parrilla costal se mueve hacia abajo y hacia adentro, por relajación tanto del diafragma, que sube, como de los intercostales externos. Disminuye así el volumen de la cavidad torácica y la presión en el interior del pulmón; de este modo se produce la espiración pasiva.

---

### 123

De acuerdo con el libro de Biología, durante la espiración activa o forzada, ¿qué se suma?

- A. La contracción de los músculos intercostales internos, que mueven la parrilla costal hacia adentro y hacia abajo
- B. La contracción de los músculos intercostales externos, que mueven la parrilla costal hacia arriba y hacia afuera
- C. La contracción del diafragma, que se aplana y desciende
- D. El batido de los cilios que empujan el moco hacia la faringe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 835
**Subtema:** respiración · ventilación

Durante la espiración activa o forzada, se suma la contracción de los músculos intercostales internos, que mueven la parrilla costal hacia adentro y hacia abajo.

---

### 124

De acuerdo con el libro de Biología, ¿dónde se regula el proceso cíclico que es la base de la ventilación?

- A. En los centros nerviosos ubicados en el bulbo raquídeo
- B. En los centros nerviosos ubicados en el cerebelo
- C. En los centros nerviosos ubicados en el hipotálamo
- D. En los centros nerviosos ubicados en la médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · regulación de la ventilación

Este proceso cíclico, que es la base de la ventilación, se regula en los centros nerviosos ubicados en el bulbo raquídeo.

---

### 125

De acuerdo con el libro de Biología, ¿por qué un paciente anestesiado puede seguir respirando normalmente durante una intervención quirúrgica?

- A. Porque estos centros poseen el umbral más alto de respuesta a anestésicos
- B. Porque estos centros poseen el umbral más bajo de respuesta a anestésicos
- C. Porque los anestésicos no alcanzan nunca el bulbo raquídeo
- D. Porque el diafragma se contrae de forma independiente del sistema nervioso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · regulación de la ventilación

Estos centros poseen el umbral más alto de respuesta a anestésicos, de modo que, durante una intervención quirúrgica, el paciente anestesiado puede seguir respirando normalmente.

---

## Sub-lote 18 · Los pigmentos respiratorios y el transporte de oxígeno (p. 836)

### 126

De acuerdo con el libro de Biología, a una presión atmosférica normal, ¿qué porcentaje de O2 se disuelve en el plasma sanguíneo?

- A. Solo un 0,3%
- B. Solo un 3%
- C. Alrededor de un 21%
- D. Alrededor de un 70%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · transporte de oxígeno

El O2 es relativamente insoluble en el plasma sanguíneo. A una presión atmosférica normal, solo un 0,3% de O2 se disuelve en el plasma.

---

### 127

De acuerdo con el libro de Biología, ¿cuánto elevan los pigmentos respiratorios la capacidad de transporte de O2 de la sangre?

- A. Hasta 70 veces
- B. Hasta 7 veces
- C. Hasta 100 veces
- D. Hasta 265 veces

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · pigmentos respiratorios

Proteínas especiales transportadoras –los pigmentos respiratorios–, que elevan hasta 70 veces la capacidad de transporte de O2 de la sangre.

---

### 128

De acuerdo con el libro de Biología, ¿cuáles son los pigmentos respiratorios más comunes?

- A. La hemoglobina y la hemocianina
- B. La mioglobina y la anhidrasa carbónica
- C. La hemocianina y la mioglobina
- D. La hemoglobina y la mioglobina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · pigmentos respiratorios

Los pigmentos respiratorios más comunes son la hemoglobina, presente en todos los vertebrados y varios grupos de invertebrados, y la hemocianina, presente, por ejemplo, en los moluscos y artrópodos.

---

### 129

De acuerdo con el libro de Biología, ¿en qué animales está presente la hemoglobina?

- A. En todos los vertebrados y varios grupos de invertebrados
- B. Únicamente en los mamíferos y las aves
- C. Solo en los moluscos y artrópodos
- D. Exclusivamente en los insectos con sistema traqueolar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · pigmentos respiratorios

La hemoglobina, presente en todos los vertebrados y varios grupos de invertebrados.

---

### 130

De acuerdo con el libro de Biología, ¿en qué animales está presente la hemocianina?

- A. En los moluscos y artrópodos
- B. En todos los vertebrados
- C. En los peces y anfibios
- D. En los equinodermos y peces

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · pigmentos respiratorios

La hemocianina, presente, por ejemplo, en los moluscos y artrópodos.

---

### 131

De acuerdo con el libro de Biología, en la mayoría de los invertebrados, ¿dónde se encuentran los pigmentos respiratorios?

- A. Disueltos en el plasma sanguíneo
- B. Transportados en los glóbulos rojos o eritrocitos
- C. Fijados a la pared de los capilares
- D. Almacenados en el músculo esquelético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · pigmentos respiratorios

En la mayoría de los invertebrados, los pigmentos respiratorios están disueltos en el plasma sanguíneo.

---

### 132

De acuerdo con el libro de Biología, en los vertebrados y equinodermos, ¿cómo son transportados los pigmentos respiratorios?

- A. En los glóbulos rojos o eritrocitos
- B. Disueltos en el plasma sanguíneo
- C. En combinación con la anhidrasa carbónica
- D. En el líquido intrapleural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · pigmentos respiratorios

En los vertebrados y equinodermos, los pigmentos son transportados en los glóbulos rojos o eritrocitos.

> Este reactivo forma par con el 131 (invertebrados: disueltos en el plasma / vertebrados y equinodermos: en los glóbulos rojos).

---

### 133

De acuerdo con el libro de Biología, ¿cuántas moléculas de hemoglobina lleva un glóbulo rojo maduro?

- A. Unos 265 millones de moléculas de hemoglobina
- B. Unos 70 millones de moléculas de hemoglobina
- C. Unos 4 millones de moléculas de hemoglobina
- D. Unos 500 millones de moléculas de hemoglobina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · glóbulos rojos

Un glóbulo rojo maduro lleva unos 265 millones de moléculas de hemoglobina.

---

### 134

De acuerdo con el libro de Biología, ¿en qué consiste la estructura de la hemoglobina?

- A. En cuatro subunidades, cada una constituida por una cadena polipeptídica y un átomo de hierro
- B. En dos subunidades, cada una constituida por una cadena polipeptídica y un átomo de hierro
- C. En una sola cadena polipeptídica con cuatro átomos de hierro
- D. En cuatro subunidades, cada una constituida por un átomo de cobre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · hemoglobina

La estructura de la hemoglobina consiste en cuatro subunidades, cada una constituida por una cadena polipeptídica y un átomo de hierro.

---

### 135

De acuerdo con el libro de Biología, ¿dónde se encuentra la mioglobina y a qué se asemeja en términos estructurales?

- A. En el músculo esquelético, y se asemeja a una de las subunidades de la molécula de hemoglobina
- B. En el plasma sanguíneo, y se asemeja a la molécula completa de hemoglobina
- C. En los glóbulos rojos, y se asemeja a la hemocianina
- D. En el músculo cardíaco, y se asemeja a la anhidrasa carbónica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · mioglobina

La mioglobina es otro pigmento respiratorio que se encuentra en el músculo esquelético. En términos estructurales, se asemeja a una de las subunidades de la molécula de hemoglobina.

---

### 136

De acuerdo con el libro de Biología, ¿cómo es la afinidad de la mioglobina por el O2 comparada con la de la hemoglobina?

- A. Mayor que la de la hemoglobina, lo cual explica que la mioglobina pueda saturarse "quitándole" el O2 a la hemoglobina circulante
- B. Menor que la de la hemoglobina, por lo que la mioglobina cede el O2 a la hemoglobina circulante
- C. Igual a la de la hemoglobina, por lo que no hay intercambio de O2 entre ambas
- D. Nula, porque la mioglobina no fija O2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · mioglobina

La afinidad de la mioglobina por el O2 es mayor que la de la hemoglobina, lo cual explica que la mioglobina pueda saturarse "quitándole" el O2 a la hemoglobina circulante.

---

### 137

De acuerdo con el libro de Biología, ¿cuándo comienza la mioglobina a liberar el O2 que almacena?

- A. Cuando la PpO2 del músculo esquelético cae por debajo de 20 mm Hg, lo que ocurre durante un ejercicio intenso
- B. Cuando la PpO2 del músculo esquelético supera los 100 mm Hg, en reposo
- C. Cuando la PpO2 del músculo esquelético cae por debajo de 40 mm Hg, durante el sueño
- D. Cuando la hemoglobina se satura por completo en los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · mioglobina

La mioglobina actúa como reservorio de O2 y solo comienza a liberarlo cuando la PpO2 del músculo esquelético cae por debajo de 20 mm Hg, lo que ocurre durante un ejercicio intenso.

---

## Sub-lote 19 · El intercambio de gases con los tejidos (fig. 35-9, p. 836)

### 138

De acuerdo con el libro de Biología, en los capilares alveolares, donde la PpO2 es más elevada, ¿qué ocurre?

- A. La hemoglobina se combina con el O2
- B. La hemoglobina se desprende del O2
- C. La mioglobina cede el O2 a la sangre
- D. El CO2 se combina con la hemoglobina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · intercambio de gases

En los capilares alveolares –donde la PpO2 es más elevada– la hemoglobina se combina con el O2.

---

### 139

De acuerdo con el libro de Biología, en los tejidos, donde la PpO2 es inferior, ¿qué ocurre con el O2?

- A. Se desprende de la hemoglobina y difunde hacia los tejidos
- B. Se combina con la hemoglobina y permanece en la sangre
- C. Se disuelve por completo en el plasma sanguíneo
- D. Es captado por la anhidrasa carbónica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · intercambio de gases

En los tejidos –donde la PpO2 es inferior– el O2 se desprende de la hemoglobina y difunde hacia los tejidos.

> Este reactivo forma par con el 138 (capilares alveolares: la hemoglobina se combina con el O2 / tejidos: el O2 se desprende).

---

### 140

De acuerdo con el libro de Biología, ¿qué sucede cuanto más O2 consume un tejido por ser muy activo?

- A. Menor será la PpO2 en ese tejido y mayor cantidad de O2 se desprenderá de la hemoglobina
- B. Mayor será la PpO2 en ese tejido y menor cantidad de O2 se desprenderá de la hemoglobina
- C. La hemoglobina se saturará por completo en ese tejido
- D. El CO2 dejará de transportarse por la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · intercambio de gases

Cuanto más O2 consume un tejido por ser muy activo, menor será la PpO2 en ese tejido y mayor cantidad de O2 se desprenderá de la hemoglobina.

---

### 141

De acuerdo con el libro de Biología, ¿cómo es la solubilidad del CO2 comparada con la del O2?

- A. El CO2 es más soluble que el O2, por ello se transporta, en parte, disuelto simplemente en el plasma
- B. El CO2 es menos soluble que el O2, por ello nunca se disuelve en el plasma
- C. El CO2 tiene la misma solubilidad que el O2
- D. El CO2 es insoluble y solo se transporta unido a la hemoglobina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · transporte de CO2

El CO2 es más soluble que el O2, por ello, se transporta, en parte, disuelto simplemente en el plasma.

---

### 142

De acuerdo con el libro de Biología, la mayor porción del CO2 ingresa en los glóbulos rojos, donde reacciona con el agua y forma...

- A. Ácido carbónico, un ácido débil que se disocia en los iones bicarbonato e hidrógeno
- B. Ácido láctico, que se acumula en el músculo activo
- C. Anhidrasa carbónica, una enzima transportadora de gases
- D. Oxihemoglobina, que libera el O2 en los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · transporte de CO2

La mayor porción, sin embargo, ingresa en los glóbulos rojos, donde reacciona con el agua y forma ácido carbónico, un ácido débil que se disocia en los iones bicarbonato e hidrógeno.

---

### 143

De acuerdo con el libro de Biología, ¿qué enzima cataliza la reacción del CO2 con el agua?

- A. La enzima anhidrasa carbónica
- B. La enzima hemoglobina reductasa
- C. El pigmento hemocianina
- D. La mioglobina del músculo esquelético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · transporte de CO2

La reacción del CO2 con el agua está catalizada por la enzima anhidrasa carbónica.

---

### 144

De acuerdo con el libro de Biología, cuando la PpO2 alcanza los 100 mm Hg, presión típica del aire del pulmón humano, ¿qué le ocurre a la hemoglobina?

- A. Se satura casi por completo
- B. Se descarga casi por completo
- C. Libera alrededor de un 30% de su O2
- D. Se combina con el CO2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · curva de la hemoglobina

Cuando la PpO2 alcanza los 100 mm Hg, que es la presión típica en el aire del pulmón humano, la hemoglobina se satura casi por completo.

---

### 145

De acuerdo con el libro de Biología, cuando la sangre rica en O2 alcanza los capilares, donde la presión es solo de 40 mm Hg o menos, ¿cuánto de su O2 libera?

- A. Alrededor de un 30% en los tejidos
- B. Alrededor de un 70% en los tejidos
- C. La totalidad de su O2
- D. Menos de un 1% en los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 836
**Subtema:** respiración · curva de la hemoglobina

Esto ocurre cuando la sangre rica en O2 alcanza a los capilares, donde la presión es solo de 40 mm Hg o menos, y así libera parte de su O2 (alrededor de un 30%) en los tejidos.

---

## Sub-lote 20 · El final del transporte de CO2 (fig. 35-10, p. 837)

### 146

De acuerdo con el libro de Biología, en los pulmones, ¿qué les ocurre al ácido carbónico y al CO2?

- A. El ácido carbónico se disocia y forma CO2 y agua, mientras que el CO2 unido a la hemoglobina se desprende
- B. El ácido carbónico se forma a partir de CO2 y agua, mientras que el CO2 se une a la hemoglobina
- C. El bicarbonato se combina con iones hidrógeno y se transforma en glóbulos rojos
- D. El O2 se disocia de la hemoglobina y forma ácido carbónico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · transporte de CO2

El ácido carbónico se disocia y forma CO2 y agua, mientras que el CO2 unido a la hemoglobina se desprende. Así, el CO2 se difunde desde el plasma a los alvéolos y es eliminado con el aire espirado.

---

### 147

De acuerdo con el libro de Biología, ¿en qué forma se encuentra la mayor parte del CO2 en la sangre?

- A. Como ion bicarbonato, que se produce en una reacción de dos pasos
- B. Disuelto simplemente en el plasma sanguíneo
- C. Unido en su totalidad a grupos amino de la hemoglobina
- D. Como ácido carbónico sin disociar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · transporte de CO2

La mayor parte del CO2 se encuentra como ion bicarbonato (HCO3–), que se produce en una reacción de dos pasos.

---

### 148

De acuerdo con el libro de Biología, ¿dónde se encuentra la enzima anhidrasa carbónica, que cataliza la formación de ácido carbónico?

- A. En los glóbulos rojos
- B. En el plasma sanguíneo
- C. En los alvéolos pulmonares
- D. En el músculo esquelético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · transporte de CO2

El CO2 proveniente del metabolismo de los tejidos se combina con el agua y forma ácido carbónico (H2CO3), una reacción catalizada por la enzima anhidrasa carbónica, que se encuentra en los glóbulos rojos.

---

### 149

De acuerdo con el libro de Biología, en los tejidos, donde la PpCO2 es mayor, ¿qué ocurre?

- A. Se forman iones bicarbonato
- B. El ácido carbónico se disocia y forma CO2 y agua
- C. El CO2 se difunde directamente hacia los alvéolos
- D. La hemoglobina se satura por completo de O2

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · transporte de CO2

En los tejidos, en donde la PpCO2 es mayor, se forman iones bicarbonato. En los pulmones, donde la PpCO2 es menor, el ácido carbónico se disocia, y forma CO2 y agua.

---

### 150

De acuerdo con el libro de Biología, además de disuelto en el plasma, ¿a qué se une parte del CO2 para circular en la sangre?

- A. A grupos amino de las moléculas de hemoglobina
- B. Al átomo de hierro de la hemoglobina
- C. A la enzima anhidrasa carbónica
- D. A la mioglobina del músculo esquelético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · transporte de CO2

El CO2 es más soluble que el O2 en la sangre y circula, en parte, disuelto en el plasma y, en parte, unido a grupos amino de las moléculas de hemoglobina.

---

## Sub-lote 21 · El control nervioso de la ventilación (fig. 35-11, p. 837)

### 151

De acuerdo con el libro de Biología, al regular la ventilación, ¿qué ajusta el sistema nervioso?

- A. La frecuencia y la amplitud de la inspiración y la espiración, de acuerdo con las demandas del organismo
- B. El diámetro de los alvéolos y el grosor de la membrana respiratoria
- C. La cantidad de hemoglobina de los glóbulos rojos
- D. La solubilidad del O2 en el plasma sanguíneo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · control nervioso de la ventilación

La ventilación es regulada por el sistema nervioso, que ajusta la frecuencia y la amplitud de la inspiración y la espiración de acuerdo con las demandas del organismo, de manera tal que las presiones de O2 y de CO2 en la sangre arterial casi no se alteran.

---

### 152

De acuerdo con el libro de Biología, ¿qué es y dónde se encuentra el centro respiratorio bulbar?

- A. Un grupo disperso de neuronas que se encuentran en el bulbo raquídeo y en la protuberancia del tallo cerebral o tronco encefálico
- B. Un grupo de neuronas ubicado únicamente en la corteza cerebral
- C. Un conjunto de receptores ubicado en la aorta y las carótidas
- D. Un grupo de células ubicado en el diafragma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · control nervioso de la ventilación

Este ajuste se realiza a través del centro respiratorio bulbar, un grupo disperso de neuronas que se encuentran en el bulbo raquídeo y en la protuberancia del tallo cerebral o tronco encefálico.

---

### 153

De acuerdo con el libro de Biología, ¿cómo es la respiración normal que controla el centro respiratorio?

- A. Rítmica y automática, como también lo es el latido cardíaco
- B. Voluntaria y consciente, a diferencia del latido cardíaco
- C. Irregular y dependiente por completo de la corteza cerebral
- D. Continua y sin pausas, al margen del control nervioso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · control nervioso de la ventilación

El centro respiratorio controla la respiración normal, que es rítmica y automática, como también lo es el latido cardíaco.

---

### 154

De acuerdo con el libro de Biología, ¿qué registran permanentemente los quimiorreceptores?

- A. Los niveles de O2 y CO2 en la sangre
- B. La temperatura de la sangre arterial
- C. El volumen de aire de los alvéolos
- D. La presión del líquido intrapleural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · quimiorreceptores

Los niveles de O2 y CO2 en la sangre son registrados permanentemente por un tipo de receptores sensoriales especializados en la detección de señales químicas.

---

### 155

De acuerdo con el libro de Biología, ¿dónde están ubicados los quimiorreceptores periféricos?

- A. En arterias importantes, como la aorta y las carótidas
- B. En el mismo bulbo raquídeo
- C. En el parénquima pulmonar
- D. En la corteza cerebral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · quimiorreceptores

Estos quimiorreceptores pueden ser periféricos, es decir, están ubicados en arterias importantes –como la aorta y las carótidas–, o bien centrales, ubicados en el mismo bulbo raquídeo.

---

### 156

De acuerdo con el libro de Biología, ¿por qué los receptores periféricos actúan como alarmas tempranas?

- A. Porque tienen un tiempo de respuesta mucho menor que los receptores centrales (alrededor de 7 s, en comparación con 7-10 min)
- B. Porque tienen un tiempo de respuesta mucho mayor que los receptores centrales (7-10 min, en comparación con 7 s)
- C. Porque están ubicados en el mismo bulbo raquídeo
- D. Porque tienen una mayor influencia moduladora sobre el centro respiratorio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · quimiorreceptores

Los receptores periféricos actúan como alarmas tempranas, ya que tienen un tiempo de respuesta a los cambios en las presiones parciales de O2 y CO2 mucho menor que los receptores centrales (alrededor de 7 s, en comparación con 7-10 min).

---

### 157

De acuerdo con el libro de Biología, ¿en qué dos grupos se organizan las neuronas del centro respiratorio bulbar?

- A. El grupo respiratorio dorsal y el grupo respiratorio ventral
- B. El grupo respiratorio central y el grupo respiratorio periférico
- C. El grupo simpático y el grupo parasimpático
- D. El grupo torácico y el grupo abdominal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · centro respiratorio bulbar

El centro respiratorio bulbar está formado por un conjunto de neuronas organizadas en dos grupos: el grupo respiratorio dorsal y el grupo respiratorio ventral.

---

### 158

De acuerdo con el libro de Biología, ¿qué determina el grupo respiratorio dorsal?

- A. El patrón cíclico de la inspiración y la espiración
- B. El volumen de aire movilizado
- C. La cantidad de hemoglobina en la sangre
- D. El diámetro de los bronquíolos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · centro respiratorio bulbar

El grupo respiratorio dorsal determina el patrón cíclico de la inspiración y la espiración; el grupo respiratorio ventral controla el volumen de aire movilizado.

---

### 159

De acuerdo con el libro de Biología, ¿qué controla el grupo respiratorio ventral?

- A. El volumen de aire movilizado
- B. El patrón cíclico de la inspiración y la espiración
- C. La frecuencia del latido cardíaco
- D. La producción de sonidos y la deglución

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · centro respiratorio bulbar

El grupo respiratorio dorsal determina el patrón cíclico de la inspiración y la espiración; el grupo respiratorio ventral controla el volumen de aire movilizado.

> Este reactivo forma par con el 158 (dorsal: el patrón cíclico / ventral: el volumen de aire).

---

### 160

De acuerdo con el libro de Biología, ¿qué estructura permite que controlemos la ventilación en forma voluntaria?

- A. La corteza cerebral
- B. El bulbo raquídeo
- C. El hipotálamo y el sistema límbico
- D. La protuberancia y el mesencéfalo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · control nervioso de la ventilación

El centro respiratorio también está bajo la influencia de la corteza cerebral, que permite que controlemos en forma voluntaria la ventilación.

---

### 161

De acuerdo con el libro de Biología, ¿qué tipo de respuestas generan estructuras autonómicas como el hipotálamo y el sistema límbico?

- A. Respuestas de tipo predictivo; por ejemplo, incrementan la ventilación antes de un esfuerzo físico
- B. Respuestas voluntarias que permiten controlar la ventilación a discreción
- C. El patrón cíclico de la inspiración y la espiración
- D. La detección directa de los niveles de O2 y CO2 en la sangre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 837
**Subtema:** respiración · control nervioso de la ventilación

Otras estructuras autonómicas, como el hipotálamo y el sistema límbico, generan respuestas de tipo predictivo, por ejemplo, incrementan la ventilación antes de un esfuerzo físico.

---

## Sub-lote 22 · Los quimiorreceptores y la hiperventilación (p. 838)

### 162

De acuerdo con el libro de Biología, ¿a qué son más sensibles los quimiorreceptores periféricos?

- A. A una caída de la PpO2 arterial por debajo de los 60 mm Hg
- B. A un aumento de la PpO2 arterial por encima de los 100 mm Hg
- C. A una caída de la temperatura de la sangre arterial
- D. A un descenso de la concentración de iones hidrógeno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 838
**Subtema:** respiración · quimiorreceptores

Los quimiorreceptores periféricos son más sensibles a una caída de la PpO2 arterial por debajo de los 60 mm Hg.

---

### 163

De acuerdo con el libro de Biología, ¿cuál es, en ambos casos, la respuesta de los quimiorreceptores?

- A. La hiperventilación (respiración profunda y rápida)
- B. La apnea (suspensión de la respiración)
- C. La broncoconstricción de las vías aéreas
- D. La disminución del latido cardíaco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 838
**Subtema:** respiración · hiperventilación

En ambos casos, la respuesta es la hiperventilación (respiración profunda y rápida).

---

### 164

De acuerdo con el libro de Biología, ¿qué le ocurre a una persona que hiperventila deliberadamente?

- A. Se sentirá débil y mareada por el incremento de la alcalinidad de la sangre
- B. Se sentirá fuerte y despierta por el incremento de O2 en la sangre
- C. Sufrirá un aumento de la acidez de la sangre
- D. Perderá la conciencia por exceso de CO2 en los alvéolos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 838
**Subtema:** respiración · hiperventilación

Si una persona hiperventila deliberadamente, se sentirá débil y mareada por el incremento de la alcalinidad de la sangre.

---

### 165

De acuerdo con el libro de Biología, si se pierde la conciencia mientras se contiene la respiración y se eleva la PpCO2, ¿qué sucede?

- A. Los controles involuntarios se hacen cargo una vez más y se reanuda la respiración
- B. La respiración permanece detenida hasta recuperar la conciencia
- C. La corteza cerebral mantiene el control voluntario de la respiración
- D. Los quimiorreceptores dejan de responder a los cambios

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 838
**Subtema:** respiración · control involuntario

Tan pronto como se pierde la conciencia y se eleva la PpCO2, los controles involuntarios se hacen cargo una vez más y se reanuda la respiración.

---

### 166

De acuerdo con el libro de Biología, si la PpCO2 y la concentración de iones H+ se incrementan solo ligeramente, ¿qué ocurre?

- A. De inmediato, la respiración se hace más profunda y más rápida, lo cual permite que más CO2 deje la sangre
- B. La respiración se hace más lenta y superficial, reteniendo CO2 en la sangre
- C. Los quimiorreceptores dejan de enviar señales al centro respiratorio
- D. La hemoglobina libera todo su O2 en los pulmones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 838
**Subtema:** respiración · control de la ventilación

Si la PpCO2 y, por lo tanto, la concentración de iones H+ se incrementan solo ligeramente, de inmediato, la respiración se hace más profunda y más rápida, lo cual permite que más CO2 deje la sangre hasta que la concentración de iones H+ haya retornado a la normalidad.

---

**Reactivos en este archivo:** 166
