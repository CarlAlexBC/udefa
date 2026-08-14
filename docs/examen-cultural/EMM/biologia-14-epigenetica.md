# Biología · Capítulo 14 · Epigenética

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

**Dónde empieza el capítulo — verificado hoja por hoja.** El capítulo 14 pertenece a la
**Sección III · Patrones y procesos de la herencia**. El capítulo 13 termina en la hoja 338
(página impresa 292, con "Retomando la problemática inicial" y las "Situaciones
problemáticas"). La **portadilla del capítulo 14 es la hoja 339 (página impresa 293)**:
trae el número 14, el título "EPIGENÉTICA", el epígrafe de Steven Rose y el apartado de
apertura "Biología en contexto social · Sustancias tóxicas y daños transgeneracionales".

**El cuerpo empieza en la hoja 340 (página impresa 294)**, no en la 295. Ésa es la trampa
que ya costó cuatro capítulos en este libro: la página impresa 294 lleva el encabezado de
sección y **parece** ser sólo la continuación del recuadro del glifosato, pero en su
columna izquierda arranca el cuerpo del capítulo con la **definición misma de epigenética**
y con el apartado "El campo de la epigenética". Se verificó renderizando la hoja antes de
escribir. El capítulo termina en la **hoja 369 (página impresa 323)**; la hoja 370 (página
impresa 324) está en blanco y la 371 (p. 325) ya es la portadilla del capítulo 15.

**Desfase reverificado aquí:** hoja 341 = página impresa 295 (+46), hoja 369 = página
impresa 323 (+46). Leído de la hoja, nunca calculado.

**Qué queda fuera por norma.** El ensayo de cierre "Retomando la problemática inicial" y
los ejercicios ("Cuestionario", "Situaciones problemáticas") **no llevan reactivos**, igual
que en los capítulos 32, 35 y 36. Del apartado de apertura "Biología en contexto social ·
Sustancias tóxicas y daños transgeneracionales" **sí se toman reactivos, pero sólo de sus
datos de biología** —el diseño experimental por generaciones y las patologías descritas—,
nunca de la discusión social sobre regulación de agroquímicos.

## Erratas del libro

| Dónde | Qué dice | Qué debería decir |
|---|---|---|
| p. 296, pie de la fig. 14-2 | "el resultado del experimento de **Diesch**" | **Driesch** — el propio pie lo escribe bien dos renglones antes ("Experimento de Driesch con huevos de erizos de mar"). Verificado con `crop.py` a 500 dpi para descartar suciedad del escaneo. |
| p. 295, columna izquierda | "los procesos involucrados en la ejecución **de del** desarrollo embrionario" | "de**l** desarrollo embrionario" — sobra una palabra. |
| p. 299, columna derecha | "en este escenario el **genotipó** adquiere un valor condicionado" | **genotipo** — acento de más. |
| p. 301, ensayo 14-1 | "la mirada del filósofo y matemático **sueco** René Descartes (1598-1650)" | **francés**. No es errata de escritura sino de dato: Descartes nació en Francia; murió en Estocolmo, que es probablemente el origen de la confusión. Verificado con `crop.py` a 600 dpi. |
| p. 311, columna izquierda (ARNpi) | "de este modo marcan las hebras de **ADN** que serán destruidas. Esta unión marca a las nuevas hebras de **ARN** que serán destruidas" | Dos renglones seguidos dicen lo mismo cambiando ADN por ARN. Lo que se destruye es el **ARN** transcripto, como dice la segunda frase y como corresponde al mecanismo descrito. Verificado con `render.py`: está así en el libro, no es fallo de la extracción. |
| p. 311, columna derecha (vesículas) | "cada vez más **con más frecuencia** se las interpreta" | "cada vez **con más frecuencia**" — sobran dos palabras. Verificado con `render.py`. |
| p. 313, columna izquierda (línea germinal) | "atraviesa un segundo momento de **reprogamación** epigenética" | **reprogramación** — falta una letra. El mismo párrafo la escribe bien más arriba ("un proceso que se denomina reprogramación epigenética"). Verificado con `render.py`. |

**No se escriben reactivos sobre estos siete puntos.** El de Descartes es el más
delicado: un aspirante que lo memorice se lleva un dato falso a la cabeza. En los dos de la
p. 311 la cita se corta con `[...]` antes del tramo dudoso.

## Cobertura actual

Cubierta la página impresa **293** (apartado de apertura, sólo sus datos de biología): el
diseño del modelo experimental con ratas y el nombre que el libro da a cada generación —la
generación inicial de ratas preñadas F0 ("animales directamente expuestos"), la F1 ("fetos
directamente expuestos"), la F2 ("línea germinal directamente expuesta") y la F3 ("no
expuestos")—, y las patologías descritas en cada una.

Cubierta la página impresa **294**: la definición de epigenética y su etimología griega; el
alcance del campo (información genética y no genética, y su relación con el ambiente); el
apartado "El campo de la epigenética" (crecimiento vertiginoso desde el inicio del siglo
xxi, los cambios epigenéticos que no involucran mutaciones, la epigenética como campo
integrador); y la fig. 14-1.

Cubierta la página impresa **295**: para qué sirve la epigenética desde una perspectiva
teórica (la carga informativa de la célula huevo, la impronta genómica, la discusión natura
o nurtura, las cascadas de señalización); y el apartado "Epigénesis y preformacionismo: los
orígenes en la embriología" (Aristóteles y la epigénesis, la hipótesis preformacionista, el
micrótomo de Wilhelm His, la pregunta nueva de la embriología y los exponentes alemanes y
rusos).

Cubierta la página impresa **296**: el desarrollo no lineal del campo (en los albores del
siglo xx se debilita la epigénesis mientras se consolida la genética clásica de Mendel), las
limitaciones de las leyes de Mendel frente a los rasgos de variación continua, y la
fig. 14-2 (los experimentos de Roux y de Driesch).

Cubierta la página impresa **297**: la escuela rusa y la plasticidad de los rasgos (las
poblaciones de *Daphnia* sometidas a cambios de temperatura durante la etapa larvaria) y los
ejemplos de plasticidad fenotípica estacional (zorros y conejos árticos, mariposas).

Cubierta la página impresa **298**: Conrad H. Waddington y el nacimiento de la epigenética
(quién fue, su formación, *An introduction to modern genetics* de 1939, la superación de la
oposición "preformismo-epigénesis", el "fenotipo del genotipo del oocito", los procesos de
jerarquía más alta que los genes) y el paisaje epigenético con su canalización irreversible.

Cubierta la página impresa **299**: la recuperación de la mirada compleja en las décadas de
1980 y 1990 (Gould, Rose, Lewontin), *Genes, Organismo y Ambiente* (2000), el "ruido del
desarrollo" de la fig. 14-5, y el panorama multidireccional del flujo de información frente
al reduccionismo (fig. 14-6).

Cubierta la página impresa **300**: la metáfora del manual de instrucciones con anotaciones
y resaltados; los "escritores", "borradores" y "lectores" epigenéticos; y dónde ocurren los
procesos epigenéticos (núcleo, ambiente citoplasmático y a distancia por comunicaciones
intercelulares).

Cubiertas las páginas impresas **301 a 303** (ensayo 14-1, "El papel de las metáforas en la
biología, la genética y la epigenética"): para qué hacen falta las metáforas, su capacidad
de organizar los conceptos, Dorothy Nelkin, la metáfora bélica y por qué fortalece a su
"enemigo", las metáforas biológicas (máquina, lenguaje y texto) con la debilidad del
mecanicismo, el dogma central de Crick de 1958 y por qué el ADN "no fabrica nada", las
bibliotecas o librerías genómicas, Evelyn Fox Keller, el genoma como partitura, el plano
(*blueprint*), el *switch* de Julian Huxley con su submetáfora del reóstato, las epimarcas,
el determinismo ambiental y la figura de la madre, y la reflexión final con la cita de
Borges. **La primera página del ensayo (301) tiene la capa de texto en lorem ipsum y se leyó
con `render.py`**, no con `extraer.py`.

Cubierta la página impresa **303** (cuerpo): las modificaciones "escritoras", "lectoras" y
"borradoras"; el criterio con el que el capítulo las organiza; el arranque de la metilación
del ADN (el grupo metilo, sus cuatro átomos, las cadenas de ARN de 19 bases); los distintos
"patrones de resaltado" de la célula hepática y la nerviosa; las marcas que cambian durante
el desarrollo embrionario; y la herencia epigenética.

Cubierta la página impresa **304**: la ADN metil transferasa como proteína "escritora" y el
efecto de la metilación sobre la tasa de expresión; las reglas de la metilación (citosinas
adyacentes a guanina, el dinucleótido CpG y qué representa su "p", la abundancia de 1/5 del
valor esperado, las islas CpG y su ubicación); las proteínas "decodificadoras"; el paso de
la cromatina de laxo a compacto; la metilación como supresor en la metáfora del texto; la
condición del silenciamiento transcripcional; la DNMT1; y las figs. 14-7 y 14-8.

Cubierta la página impresa **305**: por qué es crucial copiar el patrón de metilación; la
metilación como el ejemplo mejor conocido de herencia por mitosis; el efecto inverso de la
metilación fuera de las regiones promotoras; las proteínas de unión a Metil CpG (sus tres
familias y su papel en la reparación del ADN); la demetilación del ADN como proceso
"borrador"; la fig. 14-9; y el recuadro 14-1 completo (Rudolf Jaenisch, los ratones sin ADN
metiltransferasa y las células cancerosas).

Cubierta la página impresa **306**: la demetilación pasiva (el patrón original de metilación
no copiado a las nuevas cadenas, fenómeno de la fase mitótica, fig. 14-10) y la demetilación
activa (los grupos metilo "marcados" por átomos de oxígeno y las proteínas Tet "borradoras"
que los escinden); y el arranque del apartado "Modificaciones en las histonas" (las histonas
como "escritoras", las "colas" que asoman del nucleosoma, la mayor rapidez de cambio frente a
la metilación del ADN, las proteínas "lectoras", el método Chip-Seq, la metilación de
histonas que silencia o activa según el aminoácido y la cola, la lisina y la arginina como
las más estudiadas, y los sitios H3K4/H3K9/H3K27/H3K36/H3K79 y H4K20).

Cubierta la página impresa **307**: los efectos de la metilación de histonas según el sitio
(H3K4/H3K36/H3K79 con la activación transcripcional; H3K9/H3K27/H4K20 con la inactividad de la
cromatina); la acetilación (los grupos acetilo y fosfato, David Allis a mediados de la década
de 1990, la acetilación siempre asociada a la activación génica y su efecto físico por la
carga negativa); la fosforilación (reparación del ADN y activación transcripcional); la
ADP-ribosilación (similar a la acetilación); las demetilasas y deacetilasas como "borradoras";
las variantes de histonas (el nucleosoma más o menos estable y las protaminas de las células
espermáticas); la observación de Susan Strome (2014) sobre la herencia de las modificaciones
de histonas; y el arranque de la remodelación de la cromatina (los nucleosomas móviles y la
SWI/SNF de las levaduras).

Cubierta la página impresa **308**: el resto de la remodelación de la cromatina (la regulación
del espaciamiento entre nucleosomas para compactar o abrir la cromatina, y el desmontaje y
reconstrucción de nucleosomas durante la diferenciación o ante cambios súbitos del ambiente);
la localización nuclear (la cromatina laxa de los períodos intermitóticos, las regiones activas
en el centro del núcleo y las silenciosas en la periferia, y el patrón de localización propio de
cada tipo celular); y el arranque del apartado "ARN no codificantes y su papel epigenético" (el
gradiente del 98% al 1% del genoma que codifica proteínas de procariotas a mamíferos, las
estructuras secundarias del ARN, la clasificación en ARN largos [ARNlnc, más de 200 nt] y
pequeños [miARN, ARNsi, ARNpi, menos de 200 nt], los ARN circulares como familia aparte, los ARN
reguladores que bajan la expresión y los ARN potenciadores ERNA que la aumentan).

Cubierta la página impresa **309**: el apartado "ARN largos no codificantes" (los ARNlnc de al
menos 200 bases, las ~8000 variantes del genoma humano, su papel como "andamios", la inactivación
del cromosoma X como ejemplo, el reclutamiento de proteínas polycomb y la inhibición de los genes
HOX); el arranque del "Silenciamiento por ARN pequeños no codificantes" con los microARN (miARN de
19-24 bases, el complejo RISC, la destrucción del ARNm con apareamiento perfecto y el bloqueo de la
traducción con apareamiento imperfecto, la familia argonauta, los cuerpos P y la multiplicidad de
blancos); y el recuadro 14-2 (Craig Mello y Andrew Fire, el silenciamiento por ARN cortos y el
premio Nobel de 2006).

Cubierta la página impresa **310**: la fig. 14-12 (la formación de los miARN a partir de
horquillas de doble cadena, la enzima Dicer que fragmenta el ARN, una cadena que va al RISC y la
otra que se degrada, y los dos modos de acción: degradación del ARNm o bloqueo de la traducción);
y el apartado "ARN interferente pequeño (ARNsi)" (su tamaño de 21-25 nucleótidos, la enzima Dicer
como ARNasa citoplasmática, la cadena guía que identifica el ARNm complementario, el corte y la
degradación del ARNm, su papel de defensa frente a los virus transponibles, y su asociación con
el complejo RITS que media la metilación del ADN).

Cubierta la página impresa **311**: el apartado "ARNpi" (sus 26 a 31 bases, su generación sin la
enzima Dicer, la unión a la proteína PIWI, las secuencias complementarias del ADN repetitivo, el
reclutamiento de proteínas que metilan el ADN cercano, y el control de los transposones para que
no se inserten generando mutaciones con pérdida de función); los **ARN circulares** (de hallazgo
curioso a regulador, y los grupos de Nikolaus Rajewsky y Jorgen Kjems en 2013); el apartado
"El papel de las vesículas extracelulares" (su tamaño de 40 nm a 1 µm, los fluidos biológicos en
que se encuentran, sus dos vías de formación, los lípidos, proteínas y ácidos nucleicos que todas
contienen, el contenido selectivo de ARN, el paso de "cargamentos de residuos" a comunicación
intercelular, y su probable papel en la herencia vía epidídimo y gametogénesis); y el arranque de
"Interacciones entre diferentes modificaciones epigenéticas" (la "sintonía fina" de la regulación,
las proteínas "decodificadoras" que reclutan "resaltadoras", y la amplificación de las señales
activadoras). **Dos rarezas de redacción de esta página quedaron documentadas como erratas y sin
reactivo.**

Cubierta la página impresa **312**: la fig. 14-13 (el modelo de herencia transgeneracional de
cambios epigenéticos producidos por factores ambientales: los factores que alteran el perfil de
los ARN regulatorios de las vesículas, su viaje por el torrente sanguíneo hasta las gónadas y la
alteración del patrón epigenético de espermatozoides u oocitos); el cierre de "Interacciones entre
diferentes modificaciones epigenéticas" (de qué dependen la transcripción y la traducción de cada
gen, los procesos que las coordinan, y el **epigenotipo** con su historicidad y los organismos como
sistemas dinámicos complejos); el arranque de "Cambios epigenéticos durante el desarrollo
embrionario" (la conservación de los paisajes epigenéticos durante las mitosis, dónde se observa el
fenómeno y los dos momentos de cambios masivos); y el arranque de "Cambios epigenéticos durante el
desarrollo temprano" (la célula huevo como primer estadio embrionario y el aporte del
espermatozoide: PLCtheta y protaminas).

Cubierta la página impresa **313**: el resto del desarrollo temprano (la disposición asimétrica de
proteínas y ARN en el embrión recién formado, las blastómeras, el "reseteo epigenético" de la
primera semana y la **reprogramación epigenética**, la demetilación pasiva del ADN del oocito
frente a la activa y más rápida del ADN del espermatozoide condensado con protaminas, la
transcripción diferencial de ambos genomas, la remetilación del cigoto con la primera
diferenciación celular, y la fig. 14-14 de la distribución asimétrica); y el apartado
"Reprogramación de la línea germinal e impronta parental" (el segundo momento al promediar el
primer trimestre, la demetilación simultánea de ambos ADN, el patrón propio de las células
germinales, las porciones que escapan por represión mediada por ARNpi, la expresión de un gameto
con represión del mismo gen del otro, los genes regulatorios de proliferación, diferenciación,
muerte y movimiento celular, y la mola hidatiforme con su modelo experimental de dos pronúcleos
de espermatozoides). **Una errata de escritura de esta página quedó documentada y sin reactivo.**

Cubierta la página impresa **314**: el cierre de la mola hidatiforme (las alteraciones del
desarrollo pese al juego cromosómico restablecido, y los pronúcleos de ambos progenitores que no
son equivalentes); el apartado "Inactivación del cromosoma X" (el desbalance de carga genética en
los sistemas XX/XY, el **corpúsculo de Barr**, la teoría de compensación de dosis génica, la
metilación y las modificaciones de histonas guiadas por ARNlnc, la inactivación progresiva y al
azar, el gen **XIST** con su denominación en inglés y su producto de ARNlnc, la inactivación de
casi todos los restantes genes sin unirse al otro X, el XIST reprimido en el X activo, la
reactivación exclusiva de la línea germinal, la herencia del estado a toda la progenie celular y
el **mosaicismo**); las figs. 14-15 (microfotografía de mucosa bucal) y 14-16 (el XIST metilado en
el X activo); y el arranque de "Gemelos no tan idénticos: el papel del ambiente como modulador
fenotípico en el tiempo".

Cubierta la página impresa **315**: el cuerpo del apartado de los gemelos (la oportunidad única que
brindan para estudiar el impacto de la epigenética en la salud humana, la comparación de cromatina
de Manel Esteller en 2005 del nacimiento a la vejez, la similitud al nacer con divergencia gradual
de la metilación y de los patrones de histonas, las mayores diferencias entre los que han pasado
más tiempo separados, y el experimento de la NASA de 2015-2016 con los astronautas Scott y Mark
Kelly); y el **recuadro 14-3 completo** ("Ligres, tigones y la contribución diferencial de los
machos y las hembras": el aislamiento reproductivo por barreras ecológicas y comportamentales, el
peso del sexo de los progenitores, el ligre como cruce de león macho con tigresa con sus casi
cuatro metros y 400 kilos, los procesos que limitan el crecimiento transmitidos por vía paterna en
los tigres y materna en los leones, el riesgo del parto, la esterilidad sólo de los machos, las
conductas heredadas de cada especie, y el tigón con su inhibición del crecimiento, sus 180 kilos y
su porte sin melena).

Cubierta la página impresa **316**: el cierre del experimento de la NASA (el envío de las muestras
de Scott a la Tierra, los más de 80 expertos de 12 universidades, los resultados esperados —densidad
ósea, microbiota, marcadores de inflamación, globo ocular—, los inesperados —el alargamiento de los
telómeros y los cambios de expresión en genes de energía e inmunidad—, el más del 90% que volvió a
la normalidad a los seis meses frente al pequeño porcentaje que no, y las condiciones atípicas del
espacio); la fig. 14-17 (la gata tricolor como fenotipo en mosaico ligado al par sexual); y el
arranque del apartado "Herencia epigenética" (el borrado de marcas que permite un paisaje nuevo, la
transmisión transgeneracional de rasgos no codificados genéticamente, la expansión del campo y sus
implicancias, la dificultad de distinguirla de las exposiciones en el útero, la vulnerabilidad
celular durante la reprogramación, la primera semana y las semanas diez a once, y las **dos
condiciones teóricas** —tercera generación con sujeto gestante expuesto, segunda generación con
progenitores expuestos antes de la reproducción—).

Cubierta la página impresa **317**: el apartado "Herencia epigenética en modelos animales" (el
"ruido" que se busca reducir, el enfoque reduccionista, los ratones como especie, los tres
procedimientos —dietas controladas, reubicación con madres no biológicas y subrogación gestacional—
y lo que permiten aislar); los **ratones *agouti*** (las "características físicas dependientes de la
metilación", la variación azarosa del gen, los fenotipos "amarillos, obesos y diabéticos" frente a
"oscuros, delgados y sanos", la ausencia de efecto por vía paterna, la explicación alternativa del
ambiente materno y el experimento de gesta subrogada que la descartó); el **gen *axin*** (regulado
por ADN repetitivo cercano, las repeticiones no metiladas que interfieren la transcripción, el
pliegue en la cola y la transmisión por ambos sexos); y el arranque de "Herencia epigenética en
humanos: el caso de Holanda" (el bloqueo nazi del invierno de 1944-1945, las ~20 000 muertes por
inanición, las condiciones que permitieron estudiarlo, el mayor riesgo de obesidad, diabetes y
enfermedades cardiovasculares, y el hallazgo molecular de 2008).

Cubierta la página impresa **318**: el cierre del caso de Holanda (la disminución de talla y peso
del segundo grupo, la mayor susceptibilidad de los embriones tempranos y la persistencia de los
efectos en los nietos); el apartado "El caso de la ciudad Överkalix, en Suecia" (los meticulosos
registros públicos, la combinación de cosechas y nacimientos desde 1890, los patrones de riesgo
específicos para cada sexo, el primer caso de herencia epigenética por **línea masculina**, la
abundancia entre los 9 y 12 años frente a las hambrunas prepuberales y sus efectos opuestos sobre
los nietos, los precursores espermáticos que maduran antes de la pubertad y la fig. 14-18); y el
apartado "Epigenética y evolución" (el enfoque tradicional darwiniano, la necesidad de conocer más
que la sola secuencia de ADN, el ejemplo del gen promotor del crecimiento neuronal, y el estudio de
2013 de Andrew Sharp y Tomas Marques-Bonet con sus **170 genes** de metilación exclusiva humana).

Cubierta la página impresa **319**: el cierre de "Epigenética y evolución" (la investigación centrada
en especies que evolucionan rápido como las bacterias, sus varias ADN metiltransferasas, los gusanos
nematodos que perdieron por completo uno de esos genes, y el efecto sobre la cantidad, el tiempo y la
ubicación de la activación génica); las **"tradiciones de cuidado maternal" en ratas** (el lamido y
acicalado, el gen del **hipocampo cerebral**, las redes completas de genes, la permanencia de por
vida, la transmisión por la conducta de cuidado de las crías, el desatino de extrapolar a humanos y el
sesgo de la metáfora antropocéntrica); y el **recuadro 14-4** completo (*Caenorhabditis elegans* y su
protección antiviral heredada, las **14 generaciones** de *Arabidopsis thaliana*, la
alopoliploidización, el **30%** de modificaciones en *Spartina*, los ARN reguladores y los ARNlnc).

Cubierta la página impresa **320**: el cierre de "Epigenética y evolución" con Eva Jablonka y Marion
Lamb (su libro *La evolución en cuatro dimensiones* de **2013**, la tesis del cambio revolucionario
frente al neodarwinismo que dominó **cincuenta años**, los **cuatro sistemas de herencia** —genético,
no genético, conductual y simbólico— y la perspectiva cuatridimensional en la que el gen no es el
único foco de la selección natural); y el arranque del apartado **"Epigenética y salud"** (el poco
sustento real de las promesas de la industria biotecnológica, los **45 000** trabajos sobre ARN de
2017 y los **23 000** con aplicación clínica, el diagnóstico con miARN en oncología —origen primario
del tumor y **cáncer tiroideo**—, el tratamiento de la **hepatitis C** con un antagonista del miARN, y
los modificadores epigenéticos ambientales, dañinos y beneficiosos, con el **ácido fólico** y el tubo
neural).

Cubierta la página impresa **321** (mitad superior, hasta donde arranca el ensayo de cierre): el final
de "Salud, epigenética y ética" (la exposición ambiental en cualquier etapa de la vida, los momentos
del desarrollo con mayor plasticidad —**embrionario, fetal e infancia**— y las etapas potencialmente
reproductivas, la tendencia a leer las nuevas evidencias con **viejos reduccionismos**, el campo que
excede y cuestiona a los desarrollos farmacéuticos, el condicionamiento por el financiamiento de los
estados y del sector privado, la **ciencia hegemónica** que responsabiliza a los genes de todas las
dolencias, y el desafío abierto para la sociedad toda). De ahí en adelante empieza "Retomando la
problemática inicial", que no lleva reactivos.

**Pendiente:** ninguno; el capítulo 14 quedó **CERRADO** con la página impresa **321**, donde arranca el ensayo de cierre "Retomando la problemática inicial" (ese ensayo, la p. 322 con "Situaciones problemáticas" y la p. 323 con el resto de los ejercicios no llevan reactivos por norma). Los capítulos **15**, **33** y **37** ya estaban cerrados, así que con este **Biología queda cerrada del todo** y con ella la **EMOS**, cuyo único pendiente era esta materia.

> **No renombres ni partas en viñetas el `**Pendiente:**` de arriba.** El generador
> de `ESTADO.md` busca la cadena exacta —en negrita y con dos puntos— y toma el párrafo
> que le sigue hasta el primer renglón en blanco. Si se convierte en encabezado
> (`## Pendiente`), si desaparece, o si empieza con "ninguno", Biología se reporta como
> cerrada teniendo capítulos en blanco. Ya rompió el estado dos veces en un día.

## Cómo se escriben estos reactivos

Recuerdo literal: la opción correcta y la justificación son **cita textual** del Curtis, sin
parafrasear. Cuatro opciones del mismo tipo y magnitud; los mejores distractores salen del
mismo párrafo o del mismo cuadro. La correcta se escribe siempre en **A** porque el
importador baraja las opciones. El enunciado nombra el libro y alterna las tres fórmulas
del Anexo "H": "De acuerdo con", "De conformidad con", "En relación con".

---

### 1

De acuerdo con el libro de Biología, en los estudios sobre efectos transgeneracionales del glifosato, ¿cómo se denomina a la generación inicial de ratas preñadas (F0) a las que se les administra el herbicida por vía oral?

- A. Animales directamente expuestos
- B. Fetos directamente expuestos
- C. Línea germinal directamente expuesta
- D. No expuestos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, diseño experimental

Estos estudios parten de una generación inicial de ratas preñadas (F0) a las que se les administra glifosato por vía oral (denominados "animales directamente expuestos").

> Las cuatro opciones son los cuatro nombres que el propio recuadro asigna a las
> generaciones F0 a F3. Se prestan a confusión entre sí a propósito.

---

### 2

De conformidad con el libro de Biología, en el modelo experimental con ratas expuestas a glifosato, ¿a qué generación llama el libro "fetos directamente expuestos"?

- A. A la primera generación de descendientes (F1)
- B. A la generación inicial de ratas preñadas (F0)
- C. A la segunda generación (F2)
- D. A la tercera generación (F3)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, generación F1

Continúan luego estudiando a la primera generación de descendientes (F1) (denominados "fetos directamente expuestos"), es decir: la generación de las ratas que se estaban gestando en el vientre de las hembras de la F0.

---

### 3

En relación con el libro de Biología, ¿por qué la segunda generación (F2) de ratas recibe el nombre de "línea germinal directamente expuesta"?

- A. Porque durante la gestación sus parentales tuvieron sus células germinales en formación expuestas a glifosato
- B. Porque a ellas mismas se les administró glifosato por vía oral
- C. Porque se estaban gestando en el vientre de las hembras a las que se administró el glifosato
- D. Porque no tuvieron contacto con el glifosato en ninguna etapa de sus vidas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, generación F2

Luego observan la segunda generación (F2), es decir: las ratas que descienden de la generación F1, nietos de aquellas a las que les fue administrado el glifosato (denominados "línea germinal directamente expuesta", ya que durante la gestación sus parentales tuvieron sus células germinales en formación expuestas a glifosato).

---

### 4

De acuerdo con el libro de Biología, en el modelo experimental con ratas y glifosato, ¿qué parentesco tiene con la generación F0 la tercera generación (F3), considerada "no expuesta"?

- A. Son bisnietos de las ratas de la F0
- B. Son nietos de las ratas de la F0
- C. Son hijos de las ratas de la F0
- D. Son hermanos de las ratas de la F0

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 293
**Subtema:** epigenética · apartado de apertura, generación F3

Finalmente analizan la tercera generación (F3), bisnietos de las ratas de la F0 (considerados "no expuestos", ya que no tuvieron contacto con el glifosato en ninguna etapa de sus vidas).

> El distractor B es exacto para la F2, que el libro define como "nietos" en el
> renglón anterior.

---

### 5

De conformidad con el libro de Biología, ¿qué alteraciones del desarrollo presenta la generación F2 en los estudios sobre glifosato?

- A. Un aumento de malformaciones mayores en el desarrollo de los miembros, restricción del crecimiento intrauterino y enfermedades placentarias
- B. Un aumento marcado de enfermedades renales y obesidad en toda la camada
- C. Un aumento significativo de enfermedades gonadales y dificultades en los partos
- D. Una incidencia aumentada de tumores en toda la camada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · apartado de apertura, patologías de la F2

La generación F2 (línea germinal directamente expuesta al agroquímico) presenta un aumento de malformaciones mayores en el desarrollo de los miembros, así como una restricción del crecimiento intrauterino y enfermedades placentarias.

> Los tres distractores son patologías reales del mismo recuadro, pero el libro las
> atribuye a la F2 **y** a la F3 juntas, no sólo a la F2.

---

### 6

En relación con el libro de Biología, ¿cómo se define la epigenética?

- A. Como el estudio de los procesos que integran la regulación de la expresión de los genes, de los eventos postraduccionales y de la actividad del transcriptoma y proteoma, en relación con sus entornos
- B. Como el estudio de las mutaciones que modifican la secuencia del ADN genómico y se transmiten a la descendencia
- C. Como el estudio de los patrones de la herencia establecidos por Mendel a partir del cruzamiento de plantas de arveja
- D. Como el estudio del flujo lineal y unidireccional de la información desde el ADN hasta las proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · definición del campo

La epigenética (del griego *epi*, en o sobre, -*genética*) se define como el estudio de los procesos que integran la regulación de la expresión de los genes, de los eventos postraduccionales y de la actividad del transcriptoma y proteoma, en relación con sus entornos.

---

### 7

De acuerdo con el libro de Biología, ¿qué significa el prefijo griego *epi* del que proviene la palabra epigenética?

- A. En o sobre
- B. Antes o delante
- C. Debajo o por debajo
- D. Junto a o al lado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · etimología

La epigenética (del griego *epi*, en o sobre, -*genética*).

---

### 8

De conformidad con el libro de Biología, ¿qué indaga el campo de la epigenética?

- A. Las relaciones entre la información genética y no genética en los sistemas biológicos, y a la vez, cómo estos dos tipos de información se relacionan con el ambiente
- B. Únicamente las relaciones entre los genes de un organismo y los de sus progenitores
- C. Exclusivamente los cambios químicos que alteran la secuencia del ADN genómico
- D. Solamente la proporción de fenotipos que aparece en la descendencia de un cruzamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · alcance del campo

Este campo indaga las relaciones entre la información genética y no genética en los sistemas biológicos, y a la vez, cómo estos dos tipos de información se relacionan con el ambiente.

---

### 9

En relación con el libro de Biología, ¿por qué las áreas de análisis de la epigenética se definen necesariamente por el contexto temporoespacial?

- A. Porque se definen por el contexto temporoespacial de cada objeto o sujeto de estudio
- B. Porque se definen por la cantidad de mutaciones acumuladas en el genoma
- C. Porque se definen por el número de cromosomas de cada especie
- D. Porque se definen por la velocidad de la transcripción del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · contexto temporoespacial

Sus áreas de análisis se definen necesariamente por el contexto temporoespacial de cada objeto o sujeto de estudio.

---

### 10

De acuerdo con el libro de Biología, ¿sobre qué se pregunta la epigenética como área del conocimiento?

- A. Sobre los procesos involucrados en el origen y en los cambios que se producen en el fenotipo, tanto en individuos como en poblaciones, en una generación o en varias
- B. Sobre la secuencia exacta de nucleótidos que compone cada gen del genoma humano
- C. Sobre la clasificación de los seres vivos en dominios, reinos y filos
- D. Sobre el número de moléculas de ATP que rinde la oxidación completa de una glucosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · objeto de estudio

Se trata de un área del conocimiento que se pregunta sobre los procesos involucrados en el origen y en los cambios que se producen en el fenotipo, en lo que atañe tanto a individuos como a poblaciones, en una generación o en varias.

---

### 11

De conformidad con el libro de Biología, ¿en qué situación se encuentra el cuerpo teórico y experimental de la epigenética desde el inicio del siglo xxi?

- A. En un período de crecimiento vertiginoso
- B. En un período de estancamiento por falta de evidencia experimental
- C. En un período de retroceso frente a la genética clásica
- D. En un período de consolidación sin cambios desde hace un siglo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · crecimiento del campo

Desde el inicio del siglo xxi, el cuerpo teórico y experimental de la epigenética se encuentra en un período de crecimiento vertiginoso.

---

### 12

En relación con el libro de Biología, ¿qué es lo que **no** involucran los cambios epigenéticos, a diferencia de lo que proponen los modelos de la genética tradicional?

- A. Las mutaciones
- B. La transcripción del ADN
- C. La división celular
- D. La síntesis de proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · cambios epigenéticos y mutaciones

A diferencia de lo propuesto por los modelos de la genética tradicional, los cambios epigenéticos –que pueden ser reversibles o no y pueden ser heredables o no– no involucran las mutaciones.

---

### 13

De acuerdo con el libro de Biología, ¿qué carácter tienen los cambios epigenéticos en cuanto a su reversibilidad y su transmisión?

- A. Pueden ser reversibles o no y pueden ser heredables o no
- B. Siempre son reversibles y nunca son heredables
- C. Nunca son reversibles y siempre son heredables
- D. Siempre son reversibles y siempre son heredables

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · reversibilidad y herencia

Los cambios epigenéticos –que pueden ser reversibles o no y pueden ser heredables o no– no involucran las mutaciones.

---

### 14

De conformidad con el libro de Biología, ¿cómo se presenta actualmente la epigenética respecto de la fragmentación de las ciencias de la vida?

- A. Como un campo integrador que contribuye a superar la fragmentación de las ciencias de la vida en compartimentos estancos
- B. Como una rama especializada que profundiza la separación entre la genética y la embriología
- C. Como una disciplina auxiliar que depende por completo de la genética de poblaciones
- D. Como un campo cerrado que sólo se ocupa de las modificaciones del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · campo integrador

La epigenética se presenta actualmente como un campo integrador que contribuye a superar la fragmentación de las ciencias de la vida en compartimentos estancos, por lo que diversas áreas del conocimiento dan cuenta de su influencia.

---

### 15

En relación con el libro de Biología, ¿qué representa el gráfico de la figura 14-1, "El vigoroso campo de la epigenética"?

- A. La proporción de artículos científicos publicados que incluyen la palabra "epigenética" o "epigenético" en su título, por cada 100 artículos publicados que mencionan a la palabra "genética" en su título
- B. El número total de artículos científicos publicados cada año sobre genética molecular
- C. El porcentaje de genes del genoma humano que sufren modificaciones epigenéticas
- D. La cantidad de investigadores dedicados a la epigenética por cada 100 dedicados a la genética

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · fig. 14-1

El gráfico representa la proporción de artículos científicos publicados que incluyen la palabra "epigenética" o "epigenético" en su título, por cada 100 artículos publicados que mencionan a la palabra "genética" en su título.

---

### 16

De acuerdo con el libro de Biología, ¿qué muestra la figura 14-1 sobre el crecimiento del campo de la epigenética?

- A. Un vertiginoso crecimiento en la primera década del siglo xxi, tendencia que se ha profundizado aún más en la década siguiente
- B. Un crecimiento sostenido desde la década de 1950 que se detuvo en el año 2000
- C. Un crecimiento que se concentró en la década de 1970 y luego se estabilizó
- D. Un descenso constante desde la primera década del siglo xxi

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 294
**Subtema:** epigenética · fig. 14-1, tendencia

Se advierte el vertiginoso crecimiento de este campo en la primera década del siglo xxi, y esta tendencia se ha profundizado aún más en la década siguiente.

---

### 17

De conformidad con el libro de Biología, ¿qué carga informativa posee la célula huevo, según la comprensión compleja de los procesos del desarrollo embrionario?

- A. Una carga informativa específica, dada por su ADN organizado de una manera particular en la célula, y por proteínas, ARN, iones y otras partículas distribuidas asimétricamente en el citoplasma
- B. Únicamente la carga informativa de su ADN nuclear, distribuido de manera homogénea
- C. Sólo la información aportada por las proteínas y los iones del citoplasma
- D. Una carga informativa idéntica a la de cualquier célula diferenciada del organismo adulto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · carga informativa de la célula huevo

La comprensión compleja de estos procesos requiere asumir que la célula huevo posee una carga informativa específica, dada por su ADN organizado de una manera particular en la célula, y por proteínas, ARN, iones y otras partículas distribuidas asimétricamente en el citoplasma, en una relación significativa con su ambiente.

---

### 18

En relación con el libro de Biología, ¿cómo se conoce el proceso de influencia diferencial de los genomas parentales en el desarrollo?

- A. Impronta genómica
- B. Plasticidad fenotípica
- C. Canalización irreversible
- D. Ruido del desarrollo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · impronta genómica

La epigenética también es una clave importante para avanzar en la comprensión de la influencia diferencial de los genomas parentales en el desarrollo (proceso conocido como impronta genómica).

> Los tres distractores son términos del propio capítulo: "plasticidad fenotípica"
> aparece en la p. 297, "canalización irreversible" en la 298 y "ruido del desarrollo"
> en la 299.

---

### 19

De acuerdo con el libro de Biología, ¿a qué hace referencia la pregunta centenaria "¿natura o nurtura?"?

- A. A la discusión en torno a si es la naturaleza o la cultura lo que explica, en mayor medida, las características distintivas de nuestra especie
- B. A la discusión sobre si los caracteres adquiridos durante la vida se heredan a la descendencia
- C. A la discusión sobre si el embrión está preformado o adquiere su forma gradualmente
- D. A la discusión sobre si la unidad de la herencia es el gen o el cromosoma completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · natura o nurtura

La investigación en epigenética también está revolucionando la pregunta centenaria ¿natura o nurtura?, la cual hace referencia a la discusión en torno a si es la naturaleza o la cultura lo que explica, en mayor medida, las características distintivas de nuestra especie.

---

### 20

De conformidad con el libro de Biología, ¿qué pueden desencadenar ciertos productos químicos al unirse a proteínas receptoras específicas?

- A. Una cascada de señalización que transfiere el mensaje de proteína a proteína y finalmente al núcleo celular
- B. Una mutación puntual en la secuencia del ADN genómico
- C. La ruptura inmediata de la membrana plasmática de la célula
- D. La duplicación del número de cromosomas de la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · cascadas de señalización

Se ha observado que ciertos productos químicos pueden unirse a proteínas receptoras específicas, tanto dentro de las células como en su superficie externa, y desencadenar una cascada de señalización que transfiere el mensaje de proteína a proteína y finalmente al núcleo celular.

---

### 21

En relación con el libro de Biología, ¿por qué moléculas son iniciadas las cascadas de señalización?

- A. Algunas por moléculas que se originan fuera del cuerpo y otras, por las hormonas y otras sustancias químicas endógenas
- B. Todas por moléculas que se originan fuera del cuerpo
- C. Todas por hormonas y otras sustancias químicas endógenas
- D. Todas por los nucleótidos liberados en la degradación del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · origen de las cascadas

Algunas cascadas son iniciadas por moléculas que se originan fuera del cuerpo y otras, por las hormonas y otras sustancias químicas endógenas.

---

### 22

De acuerdo con el libro de Biología, ¿dónde tiene su origen la noción de epigénesis?

- A. En la antigua Grecia, en los estudios de Aristóteles sobre el desarrollo embrionario
- B. En la Escocia del siglo xx, en los trabajos de Conrad H. Waddington
- C. En la Suiza del siglo xix, en las mejoras del micrótomo de Wilhelm His
- D. En la Alemania del siglo xix, en los experimentos de Wilhelm Roux con huevos de rana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · origen de la epigénesis

La noción de epigénesis, que fue cambiando a lo largo de la historia y resignificada en diversos contextos teóricos, tiene su origen en la antigua Grecia, en los estudios de Aristóteles sobre el desarrollo embrionario.

---

### 23

De conformidad con el libro de Biología, ¿a qué proceso se refería Aristóteles con el término epigénesis?

- A. A un proceso en el que el embrión adquiría su forma a través de una serie de cambios secuenciales a través del tiempo
- B. A un proceso en el que el embrión, ya totalmente formado, sólo debía aumentar de tamaño
- C. A un proceso en el que las células del embrión se destruyen unas a otras hasta quedar la mejor adaptada
- D. A un proceso en el que el embrión hereda por igual la información de sus dos progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · epigénesis según Aristóteles

Este filósofo y naturalista acuñó el término epigénesis para referirse a un proceso en el que el embrión adquiría su forma a través de una serie de cambios secuenciales a través del tiempo.

> El distractor B es la definición exacta de la hipótesis preformacionista, que el
> libro contrapone en el mismo renglón.

---

### 24

En relación con el libro de Biología, ¿cómo concebía al embrión la hipótesis preformacionista?

- A. Como un pequeño ser totalmente formado que solo debía aumentar de tamaño
- B. Como una masa sin forma que adquiría su estructura por cambios secuenciales en el tiempo
- C. Como un conjunto de células pluripotenciales sin destino definido
- D. Como una célula huevo cuya información residía por completo en el citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · hipótesis preformacionista

En contraste con la hipótesis preformacionista que concebía al embrión como un pequeño ser totalmente formado que solo debía aumentar de tamaño.

---

### 25

De acuerdo con el libro de Biología, ¿en qué época se inició el estudio experimental de los seres vivos?

- A. A mediados de 1700
- B. A mediados de 1500
- C. A mediados de 1800
- D. A mediados de 1900

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · inicio del estudio experimental

Si bien el estudio experimental de los seres vivos se inició a mediados de 1700, adquirió características más cercanas a las actuales gracias a las mejoras del micrótomo.

---

### 26

De conformidad con el libro de Biología, ¿qué es el micrótomo?

- A. Un instrumento que permite cortar los tejidos en un espesor tal que pueden ser observados con un microscopio simple
- B. Un instrumento que permite separar las blastómeras de un embrión en el estadio de dos células
- C. Un instrumento que permite medir la temperatura de incubación de las larvas
- D. Un instrumento que permite teñir selectivamente el ADN metilado de los cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · el micrótomo

El micrótomo –instrumento que permite cortar los tejidos en un espesor tal que pueden ser observados con un microscopio simple–.

---

### 27

En relación con el libro de Biología, ¿quién realizó las mejoras del micrótomo que acercaron el estudio experimental de los seres vivos a sus características actuales?

- A. Wilhelm His (Suiza, 1831-1904)
- B. Wilhelm Roux (1850-1924)
- C. Hans Driesch (1867-1941)
- D. Oscar Hertwig (1849-1922)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · Wilhelm His

Adquirió características más cercanas a las actuales gracias a las mejoras del micrótomo –instrumento que permite cortar los tejidos en un espesor tal que pueden ser observados con un microscopio simple– que realizó Wilhelm His (Suiza, 1831-1904).

> Los tres distractores son investigadores alemanes citados en el mismo párrafo como
> exponentes de la embriología experimental.

---

### 28

De acuerdo con el libro de Biología, ¿qué pregunta se incorporó a la pregunta clásica de la embriología "¿Cómo sucede el desarrollo?"?

- A. "¿Por qué el desarrollo sucede de esta manera y no de otra?"
- B. "¿Cuántas divisiones celulares requiere el desarrollo?"
- C. "¿Dónde se almacena la información del desarrollo?"
- D. "¿Cuándo termina el desarrollo del organismo?"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · la nueva pregunta de la embriología

Así es que a la pregunta de la embriología: "¿Cómo sucede el desarrollo?", se incorporó: "¿Por qué el desarrollo sucede de esta manera y no de otra?".

---

### 29

De conformidad con el libro de Biología, ¿de qué nacionalidad eran en su mayoría los principales exponentes de la nueva etapa experimental de la embriología?

- A. Alemanes
- B. Rusos
- C. Suizos
- D. Escoceses

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · exponentes de la embriología experimental

Los principales exponentes en la gesta de esta nueva etapa experimental de la embriología son, en su mayoría, investigadores alemanes.

> El distractor B es correcto pero parcial: el libro dice que "también se sumaron
> importantes aportes de investigadores rusos".

---

### 30

En relación con el libro de Biología, ¿quiénes son citados como investigadores rusos que aportaron a la nueva etapa experimental de la embriología?

- A. Aleksandr Kovalevski (1840-1901) y M. Zavadovski (1891-1957)
- B. Hans Spemann (1869-1941) e Hilde Mangold (1898-1924)
- C. Oscar Hertwig (1849-1922) y Wilhelm Roux (1850-1924)
- D. Conrad H. Waddington (1905-1975) y Wilhelm His (1831-1904)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 295
**Subtema:** epigenética · investigadores rusos

También se sumaron importantes aportes de investigadores rusos, como Aleksandr Kovalevski (1840-1901) y M. Zavadovski (1891-1957), entre otros.

---

### 31

De acuerdo con el libro de Biología, ¿qué ocurrió en los albores del siglo xx con la concepción del desarrollo entendido como un fenómeno explicable en términos de epigénesis?

- A. Se debilitó al mismo tiempo que se consolidaba el nuevo campo de la genética clásica
- B. Se fortaleció al mismo tiempo que se debilitaba el nuevo campo de la genética clásica
- C. Se mantuvo sin cambios hasta la incorporación del modelo de la doble hélice
- D. Desapareció por completo hasta que Aristóteles la recuperó

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · el desarrollo no lineal del campo

En los albores del siglo xx, la concepción del desarrollo entendido como un fenómeno explicable en términos de epigénesis se debilitó al mismo tiempo que se consolidaba el nuevo campo de la genética clásica, sobre la base de los procesos de la herencia propuestos por Mendel.

---

### 32

De conformidad con el libro de Biología, ¿frente a qué rasgos presentaban limitaciones las leyes de la herencia de Mendel?

- A. Frente a aquellos que presentaban una variación continua en los organismos, como la altura o el peso
- B. Frente a aquellos que presentaban una variación discreta, como el color de la flor
- C. Frente a los rasgos que se transmiten ligados al sexo
- D. Frente a los rasgos determinados por un único par de alelos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · límites de las leyes de Mendel

Se advertía que estas leyes presentaban limitaciones cuando se trataba de interpretar ciertos rasgos poblacionales, por ejemplo, aquellos que presentaban una variación continua en los organismos (como la altura, el peso, etc.).

---

### 33

En relación con el libro de Biología, ¿en qué consistió el experimento de Roux sobre el huevo fecundado de rana del género *Xenopus*?

- A. Antes de la primera división, una de las dos células (blastómeras) es destruida con una aguja caliente, mientras que la otra permanece intacta
- B. Las células son separadas en el estadio de dos blastómeras y cada una se cultiva por separado
- C. El núcleo de una blastómera es extraído y trasplantado a un huevo sin núcleo
- D. El huevo fecundado es sometido a cambios en la temperatura de incubación durante la etapa larvaria

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, experimento de Roux

En el experimento de Roux, antes de la primera división de un huevo fecundado de rana del género *Xenopus*, una de las dos células (blastómeras) es destruida con una aguja caliente, mientras que la otra permanece intacta.

> El distractor B es exactamente el experimento de Driesch, descrito en el mismo pie
> de figura.

---

### 34

De acuerdo con el libro de Biología, ¿qué se observa en el estadio de blástula en el experimento de Roux?

- A. Que la célula que no fue dañada se ha dividido normalmente, dando lugar a medio embrión
- B. Que la célula que no fue dañada da lugar a una larva completa, aunque más pequeña
- C. Que ambas células se recuperan y dan lugar a dos embriones completos
- D. Que el desarrollo se detiene por completo y no se forma ninguna estructura

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, resultado de Roux

En el estadio de blástula se observa que la célula que no fue dañada se ha dividido normalmente, dando lugar a medio embrión, y continúa de la misma manera en el estadio de néurula en la mitad no dañada.

---

### 35

De conformidad con el libro de Biología, ¿qué concluía Roux, según su propio pensamiento, a partir de su experimento?

- A. Que cada célula tendría la información suficiente para desarrollar partes del embrión de manera independiente del ambiente
- B. Que cada célula depende por completo del ambiente celular y tisular para desarrollarse
- C. Que las dos blastómeras son totipotentes y equivalentes entre sí
- D. Que la información del desarrollo reside exclusivamente en el citoplasma del huevo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, conclusión de Roux

Según el pensamiento del investigador, cada célula tendría la información suficiente para desarrollar partes del embrión de manera independiente del ambiente.

---

### 36

En relación con el libro de Biología, ¿en qué consistió el experimento de Driesch con huevos de erizos de mar?

- A. En separar las células en el estadio de dos blastómeras
- B. En destruir una de las dos blastómeras con una aguja caliente
- C. En incubar los huevos a distintas temperaturas durante la etapa larvaria
- D. En trasplantar embriones entre hembras de distinta coloración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, experimento de Driesch

Experimento de Driesch con huevos de erizos de mar en el que intentó corroborar las conclusiones de Roux. Consistió en separar las células en el estadio de dos blastómeras.

---

### 37

De acuerdo con el libro de Biología, ¿qué resultado obtuvo Driesch al separar las células en el estadio de dos blastómeras?

- A. Las células pueden experimentar un desarrollo normal que da lugar a una larva completa, aunque más pequeña
- B. Las células dan lugar cada una a medio embrión, que muere en el estadio de néurula
- C. Sólo una de las dos células sobrevive y da lugar a una larva de tamaño normal
- D. Ninguna de las dos células se divide y el desarrollo se interrumpe

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, resultado de Driesch

Las células pueden experimentar un desarrollo normal que da lugar a una larva completa, aunque más pequeña.

---

### 38

De conformidad con el libro de Biología, ¿por qué resultaron compatibles los experimentos de Roux y de Driesch, que inicialmente se interpretaron como contradictorios?

- A. Porque, en el primer caso, la presencia de una célula muerta en contacto con la mitad viva del embrión interviene como ambiente y condiciona el proceso
- B. Porque en ambos casos se destruyó una de las dos blastómeras con una aguja caliente
- C. Porque en ambos casos se obtuvo una larva completa de tamaño normal
- D. Porque los erizos de mar y las ranas comparten el mismo mecanismo de segmentación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, compatibilidad de ambos modelos

Experimentos posteriores pusieron en evidencia que ambos modelos son compatibles, ya que, en el primer caso, la presencia de una célula muerta en contacto con la mitad viva del embrión interviene como ambiente y condiciona el proceso.

---

### 39

En relación con el libro de Biología, ¿qué importancia se fue reforzando a partir de la comparación entre los experimentos de Roux y de Driesch?

- A. La importancia que reviste el ambiente celular, tisular, y de escalas mayores, en el desarrollo embrionario
- B. La importancia del número de cromosomas en la determinación del fenotipo
- C. La importancia de la temperatura de incubación en la etapa larvaria
- D. La importancia de la metilación del ADN en la diferenciación celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 296
**Subtema:** epigenética · fig. 14-2, el ambiente en el desarrollo

Así se fue reforzando la importancia que reviste el ambiente celular, tisular, y de escalas mayores, en el desarrollo embrionario.

---

### 40

De acuerdo con el libro de Biología, ¿qué investigaron los científicos de la escuela rusa utilizando poblaciones de laboratorio como modelos experimentales?

- A. Cuán plásticos (moldeables) podían ser ciertos rasgos de los organismos frente a los cambios ambientales
- B. Cuántas mutaciones acumula un organismo a lo largo de su vida
- C. Cuántas divisiones celulares separan al cigoto de la larva
- D. Cuán rápido se transcribe el ADN en distintos tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · la escuela rusa y la plasticidad

Estas dificultades llevaron a diferentes científicos de la escuela rusa a investigar cuán plásticos (moldeables) podían ser ciertos rasgos de los organismos frente a los cambios ambientales, utilizando como modelos experimentales a poblaciones de laboratorio.

---

### 41

De conformidad con el libro de Biología, ¿qué organismo utilizó la escuela rusa para analizar la plasticidad de los rasgos frente a los cambios de temperatura?

- A. La pulga de agua *Daphnia*
- B. El erizo de mar
- C. La rana del género *Xenopus*
- D. El moho rosado del pan *Neurospora*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · *Daphnia*

A partir del análisis de poblaciones de la pulga de agua *Daphnia* sometidas a cambios en la temperatura de incubación durante la etapa larvaria.

---

### 42

En relación con el libro de Biología, ¿qué observaron los investigadores al someter a las poblaciones de *Daphnia* a cambios en la temperatura de incubación durante la etapa larvaria?

- A. Que algunos rasgos mostraban una amplia variación, mientras que otros variaban en mucha menor medida
- B. Que todos los rasgos mostraban una variación igualmente amplia
- C. Que ningún rasgo variaba, cualquiera que fuese la intensidad del estrés
- D. Que la variación de los rasgos era proporcional al número de generaciones estudiadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · resultados con *Daphnia*

Observaron que algunos rasgos mostraban una amplia variación, mientras que otros variaban en mucha menor medida, a pesar de la intensidad del estrés por cambios de temperatura a la que eran sometidas las larvas.

---

### 43

De acuerdo con el libro de Biología, ¿qué sugirió la observación de que diversos rasgos se modifican de forma variable de acuerdo a estímulos externos?

- A. Que el ambiente podía tener un papel más o menos creativo durante el desarrollo
- B. Que el ambiente no tenía ningún papel durante el desarrollo
- C. Que el genotipo determinaba por completo el fenotipo
- D. Que las mutaciones eran la única fuente de variación fenotípica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · el papel creativo del ambiente

La observación que permite concluir que diversos rasgos se modifican de forma variable de acuerdo a estímulos externos, sugirió que el ambiente podía tener un papel más o menos creativo durante el desarrollo.

---

### 44

De conformidad con el libro de Biología, ¿qué coloración desarrollan los zorros y los conejos árticos en verano y en invierno?

- A. Parda o gris en verano y pelo blanco en invierno
- B. Blanca en verano y pelo pardo o gris en invierno
- C. Parda en verano y pelo negro en invierno
- D. Gris todo el año, con manchas blancas en invierno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · plasticidad fenotípica estacional

Algunos animales, durante el curso de su vida, presentan diferentes pigmentaciones en su pelaje, como es el caso de los zorros y los conejos árticos, que desarrollan una coloración parda o gris en verano y cambian a pelo blanco en invierno.

---

### 45

En relación con el libro de Biología, ¿qué presentan algunas especies de mariposas según la época del año en la que ocurre su metamorfosis?

- A. Diferencias notables en su coloración
- B. Diferencias notables en el número de sus alas
- C. Diferencias notables en su cantidad de cromosomas
- D. Diferencias notables en su temperatura corporal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 297
**Subtema:** epigenética · mariposas y estación del año

Otros organismos, como algunas especies de mariposas, presentan diferencias notables en su coloración según la época del año en la que ocurre su metamorfosis.

---

### 46

De acuerdo con el libro de Biología, ¿quién acuñó el concepto moderno de epigenética y en qué momento?

- A. El biólogo escocés Conrad H. Waddington (1905-1975), a mediados del siglo pasado
- B. El biólogo evolutivo estadounidense Richard Lewontin, en el año 2000
- C. El anatomista suizo Wilhelm His (1831-1904), a fines del siglo xix
- D. El filósofo griego Aristóteles, en la antigua Grecia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · Waddington

El concepto moderno de epigenética, representativo de la concepción que actualmente organiza a este campo del conocimiento biológico, fue acuñado a mediados del siglo pasado por el biólogo escocés Conrad H. Waddington (1905-1975).

> Ojo con el distractor D: Aristóteles acuñó el término **epigénesis**, no el concepto
> moderno de **epigenética**.

---

### 47

De conformidad con el libro de Biología, ¿en qué campos se formó Conrad H. Waddington?

- A. Fue paleontólogo, genetista, embriólogo y filósofo
- B. Fue médico, químico y matemático
- C. Fue botánico, zoólogo y ecólogo
- D. Fue físico, astrónomo y geólogo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · formación de Waddington

Waddington fue paleontólogo, genetista, embriólogo y filósofo y, probablemente, esta formación tan amplia estimuló su interés en avanzar en la construcción de una propuesta teórica integradora, alternativa al reduccionismo genético que hegemonizaba el pensamiento biológico de su época.

---

### 48

En relación con el libro de Biología, ¿qué propuso Waddington al integrar la epigénesis aristotélica con los modelos de la genética?

- A. Que existen diversos procesos que operan en una jerarquía más alta que los genes, que impactan en el desarrollo y en la diferenciación de células y tejidos durante la embriogénesis
- B. Que los genes son el único nivel de organización que explica el desarrollo embrionario
- C. Que el embrión está preformado y sólo debe aumentar de tamaño
- D. Que la información del desarrollo reside por completo en el ambiente externo del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · procesos de jerarquía más alta que los genes

Al integrar estas esferas, propuso que existen diversos procesos que operan en una jerarquía más alta que los genes, que impactan en el desarrollo y en la diferenciación de células y tejidos de los organismos durante la embriogénesis.

---

### 49

De acuerdo con el libro de Biología, ¿en qué texto se encuentra la primera mención registrada del término epigenética?

- A. En *An introduction to modern genetics* (1939), de Waddington
- B. En *Genes, Organismo y Ambiente* (2000), de Lewontin
- C. En *The epidemiology of epigenetics*, de Haig
- D. En *An introduction to modern genetics* (1950), de Waddington

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · primera mención del término

La primera mención registrada de este término se encuentra en su texto *An introduction to modern genetics* (1939).

> El distractor D repite el título correcto con el año cambiado: la fecha es 1939.

---

### 50

De conformidad con el libro de Biología, ¿qué propuso Waddington en su texto de 1939 respecto de la oposición "preformismo-epigénesis"?

- A. Que la noción epigenética es superadora de esa oposición
- B. Que la oposición se resuelve a favor del preformismo
- C. Que la oposición se resuelve a favor de la epigénesis
- D. Que la oposición carece por completo de sentido biológico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · la epigenética como superación

Allí propuso que la noción epigenética es superadora de la oposición "preformismo-epigénesis".

---

### 51

En relación con el libro de Biología, ¿cómo denominó Waddington al citoplasma de la célula huevo, al diferenciarlo del valor de sus genes?

- A. "Fenotipo del genotipo del oocito"
- B. "Paisaje epigenético del oocito"
- C. "Ruido del desarrollo del oocito"
- D. "Genotipo del fenotipo del oocito"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el citoplasma como fenotipo del genotipo del oocito

Waddington entiende que es útil reconocer el valor de "los genes" de la célula huevo y diferenciarlo de aquel de su citoplasma, al cual considera "fenotipo del genotipo del oocito".

> El distractor D invierte los dos términos de la expresión.

---

### 52

De acuerdo con el libro de Biología, ¿cómo propuso Waddington que se debía considerar al desarrollo?

- A. Como un "proceso epigenético", involucrando en ese proceso a las interacciones de los "constituyentes" de las células entre sí, las interacciones célula-célula, los organizadores embrionarios y los efectos del ambiente con el sistema
- B. Como un proceso puramente genético, determinado por la secuencia del ADN de la célula huevo
- C. Como un proceso preformado, en el que el embrión sólo aumenta de tamaño
- D. Como un proceso azaroso, sin ninguna regularidad reconocible

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el desarrollo como proceso epigenético

Propone que se debe considerar al desarrollo como un "proceso epigenético" e involucrar en ese proceso a las interacciones de los "constituyentes" de las células entre sí, las interacciones célula-célula, los organizadores embrionarios y los efectos del ambiente con el sistema.

---

### 53

De conformidad con el libro de Biología, ¿por dónde transitan las células durante el desarrollo de los organismos multicelulares complejos, según la metáfora de Waddington?

- A. Por un paisaje epigenético
- B. Por un dogma central
- C. Por una red metabólica
- D. Por una cascada de señalización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · paisaje epigenético

El autor propuso que durante el desarrollo de los organismos multicelulares complejos, las células transitan por un paisaje epigenético.

---

### 54

En relación con el libro de Biología, ¿qué componentes físicos intervienen, junto con los genéticos y los tisulares, en el tránsito de las células por el paisaje epigenético?

- A. La tensión superficial y la geometría de los tejidos
- B. La temperatura corporal y la presión osmótica
- C. La carga eléctrica de la membrana y el pH del citosol
- D. La viscosidad del citoplasma y la densidad del núcleo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · componentes del paisaje epigenético

Según las interacciones entre diferentes componentes tanto genéticos como físicos (tensión superficial, geometría de los tejidos) y tisulares (características bioquímicas y morfológicas de células y tejidos).

---

### 55

De acuerdo con el libro de Biología, ¿en qué consiste el proceso de diferenciación por el que transita un grupo de células pluripotenciales hacia un linaje celular específico?

- A. En un proceso que constituye una canalización irreversible
- B. En un proceso que constituye una canalización reversible
- C. En un proceso que constituye una mutación heredable
- D. En un proceso que constituye una cascada de señalización

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · canalización irreversible

Un grupo de células pluripotenciales transitarán por un proceso de diferenciación hacia un linaje celular específico –como el de las células de la piel o las del hígado–, en un proceso que constituye una canalización irreversible.

---

### 56

De conformidad con el libro de Biología, ¿qué se desconocía todavía cuando Waddington propuso su metáfora de los paisajes epigenéticos?

- A. Cuál era la molécula que otorgaba la base material de la herencia
- B. Cuál era el número de cromosomas de la especie humana
- C. Cuál era el papel del ambiente en el desarrollo embrionario
- D. Cuál era la diferencia entre genotipo y fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el contexto de la metáfora

Cuando Waddington propuso su metáfora de los paisajes epigenéticos aún no se conocía cuál era la molécula que otorgaba la base material de la herencia.

---

### 57

En relación con el libro de Biología, ¿en qué década se incorpora el modelo de la doble hélice y se reconoce al ADN como molécula portadora de la información genética?

- A. En la década de 1950
- B. En la década de 1930
- C. En la década de 1970
- D. En la década de 1990

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · la doble hélice

Pocos años después, en la década de 1950, se incorpora el modelo de la doble hélice y se reconoce al ADN como molécula portadora de la información genética.

---

### 58

De acuerdo con el libro de Biología, ¿qué se inició con el reconocimiento del ADN como molécula portadora de la información genética?

- A. La hegemonía de la biología molecular y la dogmatización reduccionista de la Teoría Sintética de la Evolución en torno a la genética de poblaciones
- B. La recuperación inmediata de las ideas complejas propuestas por Waddington
- C. El abandono definitivo de la genética de poblaciones como campo de estudio
- D. El nacimiento de la embriología experimental en manos de investigadores alemanes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · hegemonía de la biología molecular

Con ello se inicia la hegemonía de la biología molecular y la dogmatización reduccionista de la Teoría Sintética de la Evolución en torno a la genética de poblaciones.

---

### 59

De conformidad con el libro de Biología, ¿qué ocurrió con las discusiones planteadas por Waddington a partir del lugar central que se asignó a los genes en las ciencias de la vida?

- A. Quedaron eclipsadas y, junto con ello, se abandonaron las miradas complejas por varias décadas
- B. Se fortalecieron y pasaron a ocupar el centro del pensamiento biológico
- C. Se incorporaron sin cambios a la Teoría Sintética de la Evolución
- D. Se convirtieron en el fundamento de la genética de poblaciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · el eclipse de las miradas complejas

A partir de entonces, el lugar central que se asignó a los genes en las ciencias de la vida eclipsó las discusiones planteadas por Waddington y, junto con ello, se abandonaron las miradas complejas por varias décadas.

---

### 60

En relación con el libro de Biología, ¿en qué ámbito encontró callejones sin salida la mirada del reduccionismo genético?

- A. En diversos ámbitos, entre otros, en la propia embriología
- B. Únicamente en la genética de poblaciones
- C. Únicamente en la bioquímica de las proteínas
- D. Únicamente en la taxonomía de los organismos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · límites del reduccionismo

Sin embargo, la mirada del reduccionismo genético encontró callejones sin salida en diversos ámbitos, entre otros, en la propia embriología.

---

### 61

De acuerdo con el libro de Biología, ¿cómo se hace manifiesta la necesidad de interpretar los cambios fenotípicos en los procesos de desarrollo embrionario?

- A. Como fenómenos emergentes de las interacciones de las células, tejidos, órganos y sistemas entre sí y con el ambiente
- B. Como consecuencias directas y exclusivas de la secuencia de nucleótidos del ADN
- C. Como resultados azarosos sin relación con el ambiente
- D. Como efectos de las mutaciones acumuladas durante la embriogénesis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 298
**Subtema:** epigenética · los cambios fenotípicos como fenómenos emergentes

Especialmente en los procesos de desarrollo embrionario, se expresan las limitaciones del reduccionismo ya que se hace manifiesta la necesidad de interpretar los cambios fenotípicos como fenómenos emergentes de las interacciones de las células, tejidos, órganos y sistemas entre sí y con el ambiente.

---

### 62

De conformidad con el libro de Biología, ¿qué autores comenzaron a recuperar las ideas en torno a la complejidad de las relaciones entre genotipo, fenotipo y ambiente en las décadas de 1980 y 1990?

- A. Stephen J. Gould, Steven Rose y Richard Lewontin
- B. Conrad H. Waddington, Wilhelm His y Wilhelm Roux
- C. Hans Driesch, Hans Spemann e Hilde Mangold
- D. Aleksandr Kovalevski, M. Zavadovski y Oscar Hertwig

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · recuperación de la mirada compleja

En las décadas de 1980 y 1990, diversos autores, como Stephen J. Gould, Steven Rose, Richard Lewontin, entre otros, comenzaron a recuperar las ideas en torno a la complejidad de las relaciones entre genotipo, fenotipo y ambiente.

---

### 63

En relación con el libro de Biología, ¿cuál es el título y el año del libro en el que Richard Lewontin propone su visión sobre el fenotipo?

- A. *Genes, Organismo y Ambiente* (2000)
- B. *An introduction to modern genetics* (1939)
- C. *Genes, Organismo y Ambiente* (1983)
- D. *The epidemiology of epigenetics* (2017)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · Lewontin

En su libro *Genes, Organismo y Ambiente* (2000), el biólogo evolutivo y genetista estadounidense Richard Lewontin propone que un fenotipo no es simplemente el resultado de la interacción entre un genotipo y un ambiente particular.

---

### 64

De acuerdo con el libro de Biología, ¿qué es un fenotipo según la propuesta de Richard Lewontin?

- A. El resultado de un devenir complejo y multicausal con resultados diversos de acuerdo al caso y no siempre predecibles
- B. Simplemente el resultado de la interacción entre un genotipo y un ambiente particular
- C. La expresión directa e invariable de la secuencia de nucleótidos del genoma
- D. El producto exclusivo de las mutaciones acumuladas en la línea germinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · el fenotipo según Lewontin

Richard Lewontin propone que un fenotipo no es simplemente el resultado de la interacción entre un genotipo y un ambiente particular, sino el resultado de un devenir complejo y multicausal con resultados diversos de acuerdo al caso y no siempre predecibles.

> El distractor B es justamente lo que el libro **niega** en el mismo renglón.

---

### 65

De conformidad con el libro de Biología, ¿cómo denomina Lewontin al factor de azar que interviene en la definición del camino fenotípico del organismo en desarrollo?

- A. "Ruido del desarrollo"
- B. "Paisaje epigenético"
- C. "Canalización irreversible"
- D. "Plasticidad fenotípica"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · fig. 14-5, ruido del desarrollo

Lewontin propone que también interviene un factor de azar, al que denomina "ruido del desarrollo", en referencia a una multiplicidad de factores interactuantes que operan de manera impredecible, definiendo el compromiso del organismo en desarrollo con alguno de los caminos fenotípicos posibles.

---

### 66

En relación con el libro de Biología, ¿qué resulta claro actualmente sobre el efecto del ambiente y los cambios de la embriogénesis?

- A. Que ambos son fundamentales para entender las trayectorias de vida de los organismos
- B. Que ninguno de los dos interviene en las trayectorias de vida de los organismos
- C. Que sólo los cambios de la embriogénesis importan, y no el ambiente
- D. Que sólo el ambiente importa, y no los cambios de la embriogénesis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · ambiente y embriogénesis

Actualmente resulta claro que tanto el efecto del ambiente como los cambios que ocurren durante la embriogénesis son fundamentales para entender las trayectorias de vida de los organismos.

---

### 67

De acuerdo con el libro de Biología, ¿qué carácter pueden tener los fenómenos bioquímicos específicos que involucran muchos de los cambios epigenéticos?

- A. Pueden ser reversibles, pero también estables y heredables
- B. Sólo pueden ser reversibles y nunca estables
- C. Sólo pueden ser estables y heredables, nunca reversibles
- D. Sólo pueden ser heredables cuando afectan la secuencia del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · carácter de los cambios bioquímicos

Sabemos también que muchos de estos cambios involucran fenómenos bioquímicos específicos que pueden ser reversibles, pero también estables y heredables.

---

### 68

De conformidad con el libro de Biología, ¿qué revela la epigenética frente al reduccionismo que concibe un flujo de información lineal y unidireccional desde el ADN a las proteínas?

- A. Un panorama multidireccional de flujo de información, que incluye al ambiente
- B. Un panorama todavía más lineal y unidireccional que el propuesto por el dogma central
- C. Un panorama en el que la información sólo fluye desde las proteínas hacia el ADN
- D. Un panorama en el que el ambiente no interviene en el flujo de información

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · flujo multidireccional de información

Frente al reduccionismo que implica concebir un flujo de información lineal y unidireccional desde el ADN a las proteínas, la epigenética revela un panorama multidireccional de flujo de información, que incluye al ambiente.

---

### 69

En relación con el libro de Biología, ¿de qué se ocupa la epigenética, más allá de la descripción de mecanismos?

- A. De los fenómenos que se vinculan con cada etapa del desarrollo, en términos individuales y poblacionales, y con fenómenos de herencia y de evolución, en relación con el ambiente
- B. Exclusivamente de la descripción de los mecanismos moleculares de metilación del ADN
- C. Exclusivamente de la clasificación de las modificaciones de las histonas
- D. Exclusivamente de los fenómenos que ocurren durante la embriogénesis temprana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 299
**Subtema:** epigenética · alcance frente al reduccionismo

La epigenética es, históricamente y en la actualidad, un área que se ocupa de los fenómenos que se vinculan con cada etapa del desarrollo, en términos individuales y poblacionales, y con fenómenos de herencia y de evolución, en relación con el ambiente en el que se desarrollan los seres vivos.

---

### 70

De acuerdo con el libro de Biología, en la metáfora "literaria" del capítulo, ¿qué sería la información epigenética si la secuencia de ADN fuera un "manual de instrucciones"?

- A. Una versión de ese texto con anotaciones colaterales y palabras o párrafos resaltados con colores
- B. Una segunda copia idéntica de ese mismo manual, guardada en el citoplasma
- C. Un índice que ordena alfabéticamente los capítulos del manual
- D. Una traducción del manual a otro idioma, sin cambios de contenido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · metáfora del manual de instrucciones

Si la secuencia de ADN fuera un "manual de instrucciones" que explica cómo se desarrolla un organismo completo a partir de un cigoto, la información epigenética sería una versión de ese texto con anotaciones colaterales y palabras o párrafos resaltados con colores.

---

### 71

De conformidad con el libro de Biología, ¿qué ayudaría a determinar el "resaltado" en la metáfora del manual de instrucciones?

- A. Qué genes deben transcribirse y traducirse, cuándo y en qué células
- B. Cuántos nucleótidos tiene cada gen del genoma
- C. En qué cromosoma se ubica físicamente cada gen
- D. Cuántas copias del genoma posee cada célula del organismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · qué determina el "resaltado"

En esta metáfora, el "resaltado" ayudaría a determinar qué genes deben transcribirse y traducirse, cuándo y en qué células.

---

### 72

En relación con el libro de Biología, ¿qué función cumplen los ARN y proteínas que operan como "escritores" epigenéticos?

- A. Establecen y mantienen el patrón de información
- B. Remueven el patrón de información si es necesario
- C. Convierten la información en instrucciones funcionales
- D. Degradan el patrón de información una vez utilizado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · escritores epigenéticos

La célula emplea varios ARN y proteínas que operan como "escritores" epigenéticos que establecen y mantienen el patrón de información.

> Los distractores B y C son las definiciones que el mismo párrafo da a los
> "borradores" y a los "lectores".

---

### 73

De acuerdo con el libro de Biología, ¿qué hacen los "borradores" epigenéticos?

- A. Remueven el patrón de información si es necesario
- B. Establecen y mantienen el patrón de información
- C. Convierten la información en instrucciones funcionales
- D. Resaltan las partes del texto que requieren una lectura más cuidadosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · borradores epigenéticos

La célula emplea varios ARN y proteínas que operan como "escritores" epigenéticos que establecen y mantienen el patrón de información, como "borradores" que lo remueven si es necesario y como "lectores" que convierten la información en instrucciones funcionales.

---

### 74

De conformidad con el libro de Biología, ¿qué hacen los "lectores" epigenéticos?

- A. Convierten la información en instrucciones funcionales
- B. Establecen y mantienen el patrón de información
- C. Remueven el patrón de información si es necesario
- D. Degradan los ARN mensajeros que ya fueron traducidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · lectores epigenéticos

Como "lectores" que convierten la información en instrucciones funcionales.

---

### 75

En relación con el libro de Biología, ¿qué comprende en su conjunto la red epigenética?

- A. Moléculas de diversos tipos y tamaños, incluidos miles de resaltadores, borradores y decodificadores epigenéticos que trabajan conjuntamente
- B. Únicamente las enzimas que metilan el ADN genómico
- C. Únicamente las histonas y sus modificaciones postraduccionales
- D. Únicamente los ARN pequeños no codificantes del citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · composición de la red epigenética

En su conjunto, la red epigenética comprende moléculas de diversos tipos y tamaños. Incluye miles de resaltadores, borradores y decodificadores epigenéticos que trabajan conjuntamente en una trama compleja y sutilmente coordinada.

---

### 76

De acuerdo con el libro de Biología, ¿qué tipo de modificaciones incluyen, en su mayor parte, los procesos moleculares propuestos para interpretar algunos fenómenos epigenéticos?

- A. Modificaciones nucleares tanto en el ADN como en las histonas
- B. Modificaciones exclusivas de la membrana plasmática
- C. Modificaciones exclusivas de los ribosomas citoplasmáticos
- D. Modificaciones exclusivas de la pared celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · dónde ocurren las modificaciones

Los procesos moleculares propuestos para interpretar algunos fenómenos epigenéticos incluyen, en su mayor parte, modificaciones nucleares tanto en el ADN como en las histonas.

---

### 77

De conformidad con el libro de Biología, además de las modificaciones nucleares, ¿qué otros procesos epigenéticos se han descrito?

- A. Procesos que ocurren en el ambiente citoplasmático e, incluso, aquellos que operan a distancia a través de comunicaciones intercelulares
- B. Procesos que ocurren únicamente en la matriz extracelular de los tejidos
- C. Procesos que ocurren únicamente en el interior de las mitocondrias
- D. Procesos que ocurren únicamente durante la división meiótica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · procesos citoplasmáticos y a distancia

Pero también se han descrito procesos epigenéticos que ocurren en el ambiente citoplasmático e, incluso, aquellos que operan a distancia a través de comunicaciones intercelulares.

---

### 78

En relación con el libro de Biología, ¿qué otros procesos califican como fenómenos epigenéticos aunque hayan sido desarrollados en otros capítulos?

- A. La regulación génica mediada por factores de transcripción, los procesos silenciadores y potenciadores de la expresión génica, y el corte y empalme del ARNm y su regulación
- B. La replicación semiconservativa del ADN y la reparación de las mutaciones puntuales
- C. La segregación de los cromosomas homólogos durante la anafase de la meiosis
- D. El transporte activo de iones a través de la membrana plasmática

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 300
**Subtema:** epigenética · fenómenos tratados en otros capítulos

Algunos de ellos son la regulación génica mediada por factores de transcripción (basales, específicos); los procesos silenciadores y potenciadores de la expresión génica; el corte y empalme del ARNm y su regulación; la regulación de la traducción y la localización de las proteínas y sus modificaciones postraduccionales, como la fosforilación y desfosforilación; la organización cuaternaria de las proteínas, así como su degradación o inactivación.

---

### 79

De acuerdo con el libro de Biología, ¿por qué es necesario representar un nuevo conocimiento en términos que aludan al conocimiento previamente establecido?

- A. Porque sin esa representación se hacen difíciles la comprensión, la conceptualización y la comunicación
- B. Porque sin esa representación el conocimiento no puede ser publicado en revistas científicas
- C. Porque sin esa representación el experimento no puede repetirse en el laboratorio
- D. Porque sin esa representación no puede calcularse el margen de error del resultado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, para qué sirven las metáforas

Toda vez que la ciencia construye un nuevo conocimiento (relativo a un objeto, a un hecho o a un proceso), es necesario representarlo en términos que aludan al conocimiento previamente establecido. Sin esa representación –que, en muchos casos, adopta la forma de una metáfora– se hacen difíciles la comprensión, la conceptualización y la comunicación.

---

### 80

De conformidad con el libro de Biología, ¿qué capacidad tienen las metáforas respecto de los conceptos?

- A. La capacidad de organizar los conceptos, a la vez cognitiva y emocionalmente
- B. La capacidad de demostrar los conceptos por vía experimental
- C. La capacidad de traducir los conceptos a un lenguaje matemático exacto
- D. La capacidad de eliminar toda ambigüedad de los conceptos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, capacidad de las metáforas

Las metáforas tienen la capacidad de organizar los conceptos, a la vez cognitiva y emocionalmente.

---

### 81

En relación con el libro de Biología, ¿qué ha planteado Dorothy Nelkin (1933-2003), socióloga de la ciencia estadounidense, sobre las metáforas?

- A. Que son un vehículo importante y prevalente de la comunicación pública
- B. Que son un obstáculo insalvable para la comunicación pública
- C. Que sólo tienen valor dentro del laboratorio y no fuera de él
- D. Que deben ser sustituidas por definiciones matemáticas exactas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, Dorothy Nelkin

Dorothy Nelkin (1933-2003), socióloga de la ciencia estadounidense, ha planteado que las metáforas son un vehículo importante y prevalente de la comunicación pública, enfatizando que son especialmente importantes para transmitir y divulgar la información científica.

---

### 82

De acuerdo con el libro de Biología, ¿por qué las metáforas son algo más que una ayuda explicativa?

- A. Porque su repetición y su naturalización moldean nuestra comprensión de los hechos, ya que afectan el modo en el que percibimos, pensamos y actuamos
- B. Porque permiten calcular con precisión el resultado de un experimento
- C. Porque sustituyen por completo a la evidencia experimental
- D. Porque son el único medio válido de publicación científica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, el peso de las metáforas

Pero las metáforas son algo más que una ayuda explicativa: su repetición y su naturalización moldean nuestra comprensión de los hechos, ya que afectan el modo en el que percibimos, pensamos y actuamos.

---

### 83

De conformidad con el libro de Biología, ¿qué metáfora de uso frecuente califica el texto como "bastante penosa"?

- A. La de la guerra o el enfrentamiento bélico en general
- B. La del genoma como partitura musical
- C. La del plano o cianotipo (*blueprint*)
- D. La del interruptor o *switch*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, la metáfora bélica

Una metáfora bastante penosa, de uso frecuente, es la de la guerra o el enfrentamiento bélico en general. Es común leer o escuchar (incluso a gestores de los planes gubernamentales) acerca de "la guerra contra el cáncer", "la lucha contra las malezas" o "el combate a los microbios".

---

### 84

En relación con el libro de Biología, ¿cómo terminan las estrategias bélicas contra el "enemigo" biológico, según se explica en el ensayo 14-1?

- A. No terminan en un triunfo completo, sino que, por el contrario, suelen terminar fortaleciéndolo
- B. Terminan en un triunfo completo y en la derrota definitiva del "enemigo"
- C. Terminan sin ningún efecto observable sobre el "enemigo"
- D. Terminan siempre en la extinción de la especie combatida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, resultado de las estrategias bélicas

Es sabido que estas estrategias bélicas nunca terminan en un triunfo completo (o la derrota del "enemigo"), sino que, por el contrario, suelen terminar fortaleciéndolo, como ha sucedido con la aparición de malezas resistentes a los herbicidas o la actual proliferación de bacterias resistentes a todos los antibióticos conocidos.

---

### 85

De acuerdo con el libro de Biología, ¿por qué los seres vivos son difíciles de modelizar de manera abstracta?

- A. Porque son genuinamente muy complejos
- B. Porque son demasiado pequeños para ser observados
- C. Porque su número de especies es desconocido
- D. Porque su comportamiento es enteramente azaroso

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, metáforas biológicas

Los seres vivos son difíciles de modelizar de manera abstracta, ya que son genuinamente muy complejos.

---

### 86

De conformidad con el libro de Biología, ¿cómo operan las unidades de la herencia o "genes" y sus productos?

- A. En redes regulatorias muy sofisticadas; interactúan y se solapan entre sí de modos muy diversos, que en gran parte desconocemos
- B. De manera aislada e independiente unos de otros, con efectos plenamente conocidos
- C. En cadenas lineales que se ejecutan siempre en el mismo orden
- D. Únicamente durante la división celular, y permanecen inactivos el resto del tiempo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, redes regulatorias

En particular, las unidades de la herencia o "genes" y sus productos operan en redes regulatorias muy sofisticadas; interactúan y se solapan entre sí de modos muy diversos, que en gran parte desconocemos.

---

### 87

En relación con el libro de Biología, ¿cuál es la debilidad principal de las metáforas mecanicistas, además de su extremo reduccionismo?

- A. Que no tienen en cuenta a la historia de la célula
- B. Que no permiten describir la estructura de las proteínas
- C. Que resultan demasiado complejas para el público general
- D. Que sólo pueden aplicarse a los organismos unicelulares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, debilidad de las metáforas mecanicistas

La debilidad principal de estas metáforas mecanicistas, además de su extremo reduccionismo, es que no tienen en cuenta a la historia de la célula, ya que un organismo vivo no es el resultado de un proceso de "fabricación" que responde a un diseño o propósito, sino que proviene de una larga serie de generaciones anteriores que hacen posible su existencia.

---

### 88

De acuerdo con el libro de Biología, ¿con qué términos se sigue describiendo a la célula en algunos libros de texto, como ejemplo ilustrativo de las metáforas de la máquina?

- A. Como la maquinaria vital, fábrica química o computadora
- B. Como una partitura, una sinfonía o una pieza de música
- C. Como un texto, un libro o una enciclopedia
- D. Como un plano, un cianotipo o una receta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, la célula como máquina

Un ejemplo ilustrativo es el de la célula, que aún se describe en algunos libros de texto como la maquinaria vital, fábrica química o computadora.

> Los tres distractores son metáforas reales del mismo ensayo, pero de las categorías
> de música, texto y plano, no de la máquina.

---

### 89

De conformidad con el libro de Biología, ¿cuándo y en torno a qué escuela se desarrollaron las metáforas de lenguaje?

- A. A principios del siglo xx, alrededor de la escuela embriológica alemana
- B. A mediados del siglo xx, alrededor de la escuela de biología molecular estadounidense
- C. A principios del siglo xix, alrededor de la escuela evolucionista inglesa
- D. A fines del siglo xx, alrededor de la escuela de la biotecnología moderna

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 301
**Subtema:** epigenética · ensayo 14-1, metáforas de lenguaje

Metáforas de lenguaje. Se desarrollaron a principios del siglo xx, alrededor de la escuela embriológica alemana.

---

### 90

En relación con el libro de Biología, ¿en qué décadas fueron centrales las metáforas de lenguaje para el desarrollo de la biología molecular?

- A. En las décadas de 1950 y 1960
- B. En las décadas de 1930 y 1940
- C. En las décadas de 1970 y 1980
- D. En las décadas de 1990 y 2000

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, las metáforas en la biología molecular

Estos tipos de metáforas fueron centrales en el desarrollo de la biología molecular, en las décadas de 1950 y 1960, y más tarde se adaptaron al desarrollo de la biotecnología moderna, basada en el ADN recombinante.

---

### 91

De acuerdo con el libro de Biología, ¿de dónde proviene el error conceptual de llamar "librerías" genómicas a las bibliotecas genómicas?

- A. De una mala traducción literal de *library*, su término en inglés
- B. De una mala traducción literal de *bookmark*, su término en inglés
- C. De una mala traducción literal de *blueprint*, su término en inglés
- D. De una mala traducción literal de *hardware*, su término en inglés

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, bibliotecas o librerías genómicas

Encontramos, entonces, a las bibliotecas o librerías (genómicas), esta última constituye un error conceptual proveniente de una mala traducción literal de *library*, su término en inglés.

---

### 92

De conformidad con el libro de Biología, ¿en qué secuencia lineal se plasma el dogma central de la biología molecular, tal como fue propuesto por Francis Crick en 1958?

- A. ADN → ARN → Proteína
- B. ARN → ADN → Proteína
- C. Proteína → ARN → ADN
- D. ADN → Proteína → ARN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, el dogma central

El dogma central de la biología molecular (como fue propuesto por Francis Crick en 1958) se plasma en una secuencia lineal que se representa como: ADN → ARN → Proteína.

---

### 93

En relación con el libro de Biología, ¿cómo se describiría el dogma central a través de las metáforas del lenguaje?

- A. "El ADN se replica y se transcribe a ARN que se traduce a proteína"
- B. "El ADN fabrica ARN que fabrica proteína"
- C. "El ADN resalta el ARN que resalta la proteína"
- D. "El ADN ejecuta el ARN que ejecuta la proteína"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, el dogma en metáforas de lenguaje

Este proceso descrito a través de las metáforas del lenguaje se describiría como: "El ADN se replica y se transcribe a ARN que se traduce a proteína".

> El distractor B es la misma frase vista a través de la metáfora de la máquina, que
> el libro califica de "grueso error" en el renglón siguiente.

---

### 94

De acuerdo con el libro de Biología, ¿por qué constituye un grueso error decir que "el ADN fabrica ARN que fabrica proteína"?

- A. Porque el ADN no fabrica nada, sino que es la célula como un todo, en todo caso, el ámbito en el que ocurren estas transformaciones
- B. Porque el ARN no participa en la síntesis de las proteínas
- C. Porque el proceso ocurre en sentido inverso, de la proteína hacia el ADN
- D. Porque el ADN sólo fabrica proteínas y nunca ARN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, por qué el ADN no "fabrica"

Esto constituye un grueso error, ya que el ADN no fabrica nada, sino que es la célula como un todo, en todo caso, el ámbito en el que ocurren estas transformaciones.

---

### 95

De conformidad con el libro de Biología, ¿por qué las metáforas de texto son las más comunes?

- A. Por lo fácil de su comprensión
- B. Por su exactitud matemática
- C. Por su antigüedad histórica
- D. Por su respaldo experimental

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, metáforas de texto

Las metáforas de texto son las más comunes, por lo fácil de su comprensión.

---

### 96

En relación con el libro de Biología, en las metáforas de texto, ¿a qué se comparan las bases nitrogenadas, los codones y aminoácidos, y los genes?

- A. Las bases nitrogenadas a letras; los codones y aminoácidos a palabras; y los genes a oraciones
- B. Las bases nitrogenadas a palabras; los codones y aminoácidos a letras; y los genes a oraciones
- C. Las bases nitrogenadas a oraciones; los codones y aminoácidos a palabras; y los genes a letras
- D. Las bases nitrogenadas a letras; los codones y aminoácidos a oraciones; y los genes a palabras

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, letras, palabras y oraciones

Es frecuente encontrar en los libros de texto y en los medios de comunicación a las bases nitrogenadas que componen el ADN como letras; a los codones y aminoácidos como palabras; y a los genes (y proteínas) como oraciones.

> Los tres distractores permutan los mismos tres términos. Es el tipo de detalle que
> distingue a quien leyó del que hojeó.

---

### 97

De acuerdo con el libro de Biología, ¿qué metáfora cuestiona Evelyn Fox Keller, física especialista en historia y filosofía de la ciencia?

- A. La metáfora de la codificación de la información, que fue central en los inicios de la biología molecular
- B. La metáfora de la guerra contra el cáncer
- C. La metáfora del genoma como partitura musical
- D. La metáfora del paisaje epigenético de Waddington

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, Evelyn Fox Keller

Otros autores relevantes, como Evelyn Fox Keller, física especialista en historia y filosofía de la ciencia, cuestionan la metáfora de la codificación de la información, que fue central en los inicios de la biología molecular.

---

### 98

De conformidad con el libro de Biología, ¿qué riesgo tienen las metáforas, aunque contribuyan a hacer accesible el conocimiento?

- A. Que en muchos casos simplifican excesivamente y, en ocasiones, distorsionan la comprensión de procesos vitales y complejos
- B. Que impiden por completo la divulgación científica al público general
- C. Que sólo pueden ser comprendidas por especialistas del área
- D. Que invalidan los resultados experimentales que describen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, riesgo de las metáforas

Aunque se ha planteado que este tipo de metáforas contribuyen a hacer accesible el conocimiento, no debe perderse de vista que, en muchos casos, simplifican excesivamente y, en ocasiones, distorsionan la comprensión de procesos vitales y complejos.

---

### 99

En relación con el libro de Biología, ¿qué metáfora refleja una mirada diferente y más compleja del genoma y del organismo?

- A. La que presenta al genoma como una partitura y al organismo como una sinfonía o pieza de música
- B. La que presenta al genoma como una máquina y al organismo como su producto fabricado
- C. La que presenta al genoma como un ejército y al organismo como su campo de batalla
- D. La que presenta al genoma como una biblioteca y al organismo como su lector

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, el genoma como partitura

Una metáfora que refleja una mirada diferente y más compleja es la que presenta al genoma como una partitura y al organismo como una sinfonía o pieza de música.

---

### 100

De acuerdo con el libro de Biología, en la metáfora de la partitura, ¿qué cambia y qué no cambia en las diversas interpretaciones de la sinfonía?

- A. La partitura no cambia, pero sí su ejecución, lo cual produce un resultado final distinto cada vez que se ejecuta
- B. La partitura cambia, pero su ejecución permanece siempre igual
- C. Ni la partitura ni su ejecución cambian, y el resultado es siempre idéntico
- D. Tanto la partitura como su ejecución cambian en cada interpretación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, partitura y ejecución

Siguiendo esta representación, en diversas interpretaciones de la sinfonía la partitura no cambia, pero sí su ejecución, lo cual produce un resultado final distinto cada vez que se ejecuta.

---

### 101

De conformidad con el libro de Biología, ¿cuál es una de las metáforas más utilizadas, con cientos de referencias en estudios científicos?

- A. La metáfora del plano (cianotipo, *blueprint*)
- B. La metáfora del reóstato o regulador de intensidad
- C. La metáfora del conmutador ferroviario
- D. La metáfora del formateado del texto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, la metáfora del plano

La metáfora del plano (cianotipo, *blueprint*) es una de las más utilizadas, con cientos de referencias en estudios científicos, así como la metáfora de la receta, que apareció un poco antes en el tiempo.

---

### 102

En relación con el libro de Biología, ¿qué expresiones metafóricas se emplean para los procesos moleculares epigenéticos?

- A. Marcas (*markers* o *tags*), marcadores, marcapáginas o *bookmarks*, resaltadores, escritores (*writers*), lectores (*readers*) y borradores (*erasers*)
- B. Ejércitos, batallas, armas, defensas, ataques y retiradas
- C. Bibliotecas, librerías, catálogos, estanterías, ficheros y préstamos
- D. Engranajes, poleas, palancas, resortes, ejes y bielas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, expresiones metafóricas epigenéticas

Es así que encontramos expresiones metafóricas para los procesos moleculares epigenéticos: marcas (*markers* o *tags*), marcadores, marcapáginas o *bookmarks*, resaltadores, escritores (*writers*), lectores (*readers*) y borradores (*erasers*).

---

### 103

De acuerdo con el libro de Biología, ¿qué pueden hacer las marcas epigenéticas o epimarcas, según este tipo de metáforas?

- A. Enmascararse, desenmascararse e, incluso, silenciarse
- B. Duplicarse, triplicarse e, incluso, cuadruplicarse
- C. Migrar, fusionarse e, incluso, dividirse
- D. Cristalizarse, disolverse e, incluso, evaporarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, epimarcas

Según este tipo de metáforas, estas marcas epigenéticas o epimarcas pueden, además, enmascararse, desenmascararse e, incluso, silenciarse.

---

### 104

De conformidad con el libro de Biología, ¿en qué dos sentidos se utiliza la metáfora del *switch*?

- A. Para denotar al interruptor de encendido/apagado electrónico, pero también en el sentido original de conmutador ferroviario
- B. Para denotar al interruptor de encendido/apagado electrónico, pero también en el sentido de regulador de intensidad
- C. Para denotar al conmutador ferroviario, pero también en el sentido de termostato
- D. Para denotar al plano o cianotipo, pero también en el sentido de partitura musical

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, la metáfora del *switch*

Una metáfora que ha adquirido/recuperado un significado adicional es la del *switch*, que se utiliza para denotar al interruptor de encendido/apagado electrónico, pero también en el sentido original de conmutador ferroviario, es decir, la palanca que al ser accionada hace que el tren cambie de vía y tome una dirección particular.

> Cuidado con el distractor B: el regulador de intensidad (*dimmer switch*) es, según
> el propio libro, una **submetáfora** del *switch*, no uno de sus dos sentidos.

---

### 105

En relación con el libro de Biología, ¿quién propuso la metáfora del *switch* en el contexto del modelo del paisaje epigenético de Conrad Waddington?

- A. Julian Huxley (1887-1975)
- B. Richard Lewontin
- C. Evelyn Fox Keller
- D. Dorothy Nelkin (1933-2003)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, Julian Huxley

Esta metáfora fue propuesta por Julian Huxley (1887-1975), en el contexto del modelo del paisaje epigenético (*epigenetic landscape*) de Conrad Waddington (1905-1975).

---

### 106

De acuerdo con el libro de Biología, ¿de qué da cuenta la metáfora del *switch* en el modelo del paisaje epigenético?

- A. De la posibilidad que tiene una célula de adoptar un estado metabólico o camino de desarrollo dado entre varios posibles, dependiendo del contexto
- B. De la imposibilidad de que una célula cambie su destino una vez diferenciada
- C. Del número exacto de genes que una célula puede expresar a la vez
- D. De la velocidad con la que se replica el ADN antes de la mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, qué explica el *switch*

Para dar cuenta de la posibilidad que tiene una célula de adoptar un estado metabólico o camino de desarrollo dado entre varios posibles, dependiendo del contexto.

---

### 107

De conformidad con el libro de Biología, ¿cuál es una submetáfora epigenética del *switch*?

- A. La del reóstato, o regulador de intensidad (*dimmer switch*) o, incluso, termostato
- B. La del conmutador ferroviario que cambia la vía del tren
- C. La de la partitura ejecutada por un pianista
- D. La del marcapáginas o *bookmark*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, el reóstato

Una submetáfora epigenética del *switch* es la del reóstato, o regulador de intensidad (*dimmer switch*) o, incluso, termostato.

---

### 108

En relación con el libro de Biología, ¿cuál es, según el ensayo 14-1, el encuadre metafórico más promisorio para la epigenética?

- A. La metáfora de la música
- B. La metáfora de la máquina
- C. La metáfora de la guerra
- D. La metáfora de la biblioteca

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, la música como encuadre

La metáfora de la música es quizás el encuadre metafórico más promisorio para la epigenética, ya que abre un espacio conceptual para argumentar que ahora podemos cambiar nuestro destino genético, tocando una canción diferente si así lo desea el intérprete.

---

### 109

De acuerdo con el libro de Biología, en la metáfora musical aplicada al desarrollo, ¿qué representa el teclado?

- A. La secuencia del ADN
- B. El ambiente externo del organismo
- C. El conjunto de las proteínas de la célula
- D. La red de comunicaciones intercelulares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, el teclado como secuencia de ADN

Durante el desarrollo, la notación musical determina cómo serán ejecutadas las notas de la partitura en el teclado –la secuencia del ADN–, y de acuerdo con la técnica, la sensibilidad y el temperamento del momento del pianista.

---

### 110

De conformidad con el libro de Biología, ¿a qué nuevo tipo de pensamiento determinista puede conducir la metáfora de la programación epigenética?

- A. A un determinismo no genético, sino ambiental, donde el carácter o la estructura de un organismo estarían definidos por el ambiente
- B. A un determinismo estrictamente genético, donde todo queda definido por la secuencia del ADN
- C. A un determinismo azaroso, donde ningún factor puede predecir el fenotipo
- D. A un determinismo poblacional, donde sólo cuentan las frecuencias alélicas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, determinismo ambiental

La relación entre el ambiente y el genoma, a veces, se expresa a través de la metáfora de la programación epigenética, lo que puede conducir a un nuevo tipo de pensamiento determinista, no genético esta vez, sino ambiental, donde el carácter o la estructura de un organismo estarían definidos por el ambiente.

---

### 111

En relación con el libro de Biología, ¿qué constituye por excelencia el entorno social y material (*nurture*) en las metáforas de la herencia epigenética?

- A. La figura de la madre
- B. La figura del padre
- C. La comunidad científica
- D. El laboratorio experimental

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 302
**Subtema:** epigenética · ensayo 14-1, la figura de la madre

Pero, además, el entorno social y material (*nurture*) por excelencia lo constituye la figura de la madre.

---

### 112

De acuerdo con el libro de Biología, ¿qué se debe advertir siempre acerca de las metáforas?

- A. Que no son "la realidad", sino una construcción cognitiva en muchos casos con fuertes componentes sociales, culturales e ideológicos
- B. Que son una descripción exacta y neutral de la realidad biológica
- C. Que sólo tienen valor si han sido validadas experimentalmente
- D. Que carecen por completo de utilidad para enseñar y comunicar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · ensayo 14-1, reflexión final

En el mismo sentido, siempre se debe advertir que las metáforas no son "la realidad", sino una construcción cognitiva en muchos casos con fuertes componentes sociales, culturales e ideológicos.

---

### 113

De conformidad con el libro de Biología, ¿en qué se transforman las metáforas si se cristalizan y naturalizan?

- A. Se tornan invisibles y, en lugar de ser puentes que contribuyan a acceder al conocimiento, inhibirán el pensamiento crítico y se transformarán en obstáculos
- B. Se tornan más precisas y se transforman en definiciones científicas exactas
- C. Se tornan inútiles y desaparecen del lenguaje científico
- D. Se tornan universales y dejan de tener componentes culturales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · ensayo 14-1, metáforas cristalizadas

Si las metáforas se cristalizan y naturalizan se tornan invisibles y, en lugar de ser puentes que contribuyan a acceder al conocimiento, inhibirán el pensamiento crítico y se transformarán en obstáculos para acceder a nuevas miradas y conocimientos alternativos.

---

### 114

En relación con el libro de Biología, ¿qué opinaba Jorge Luis Borges sobre las metáforas que duran a pesar de su repetición?

- A. Que son mejores que las recién inventadas, por más ingeniosas que estas sean
- B. Que son peores que las recién inventadas, porque han perdido su fuerza
- C. Que son equivalentes a las recién inventadas, porque todas cumplen la misma función
- D. Que deben ser abandonadas en favor de las recién inventadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · ensayo 14-1, Borges

Según Jorge Luis Borges, las metáforas que duran a pesar de su repetición son mejores que las recién inventadas, por más ingeniosas que estas sean.

---

### 115

De acuerdo con el libro de Biología, ¿cómo se describen las modificaciones epigenéticas "escritoras"?

- A. Como aquellas que organizan estructuralmente cómo se ejecutará el patrón genómico
- B. Como aquellas que median la expresión de los genes involucrados
- C. Como aquellas que se encargan de eliminar marcas previamente adquiridas
- D. Como aquellas que degradan los ARN mensajeros ya traducidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · modificaciones "escritoras"

Estas modificaciones se describen de acuerdo con la metáfora literaria, en tanto sean modificaciones "escritoras" –en el caso de que organicen estructuralmente como se ejecutará el patrón genómico–.

---

### 116

De conformidad con el libro de Biología, ¿cómo se describen las modificaciones epigenéticas "lectoras"?

- A. Como aquellas que median la expresión de los genes involucrados
- B. Como aquellas que organizan estructuralmente cómo se ejecutará el patrón genómico
- C. Como aquellas que se encargan de eliminar marcas previamente adquiridas
- D. Como aquellas que reparan los errores de la replicación del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · modificaciones "lectoras"

"Lectoras" –en tanto medien la expresión de los genes involucrados–.

---

### 117

En relación con el libro de Biología, ¿cómo se describen las modificaciones epigenéticas "borradoras"?

- A. Como aquellas que se encargan de eliminar marcas previamente adquiridas
- B. Como aquellas que organizan estructuralmente cómo se ejecutará el patrón genómico
- C. Como aquellas que median la expresión de los genes involucrados
- D. Como aquellas que duplican las marcas durante la replicación del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · modificaciones "borradoras"

O "borradoras" –si se encargan de eliminar marcas previamente adquiridas–.

---

### 118

De acuerdo con el libro de Biología, ¿conforme a qué criterio organiza el capítulo los principales cambios epigenéticos descritos hasta el momento?

- A. Conforme al elemento ultraestructural de la célula a la que modifican
- B. Conforme al orden cronológico en el que fueron descubiertos
- C. Conforme al tamaño de las moléculas involucradas
- D. Conforme al tipo de organismo en el que fueron descritos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · criterio de organización del capítulo

A continuación, se exponen algunos de los principales cambios epigenéticos descritos hasta el momento, organizados conforme al elemento ultraestructural de la célula a la que modifican, y se explicará, en cada caso, el tipo de efecto que produce cada uno de estos cambios.

---

### 119

De conformidad con el libro de Biología, ¿cuál es la modificación epigenética más pequeña que se conoce?

- A. La dada por el grupo metilo
- B. La dada por el grupo fosfato
- C. La dada por la molécula de ADP-ribosa
- D. La dada por las cadenas de ARN de 19 bases nitrogenadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · metilación del ADN, el grupo metilo

La modificación epigenética más pequeña que se conoce está dada por el grupo metilo.

---

### 120

En relación con el libro de Biología, ¿qué átomos comprende el grupo metilo?

- A. Un átomo de carbono y tres átomos de hidrógeno
- B. Un átomo de carbono y cuatro átomos de hidrógeno
- C. Tres átomos de carbono y un átomo de hidrógeno
- D. Un átomo de nitrógeno y tres átomos de hidrógeno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · composición del grupo metilo

Esta molécula, que comprende un átomo de carbono y tres átomos de hidrógeno, se adjunta a algunas bases de citosina de la cadena de ADN.

---

### 121

De acuerdo con el libro de Biología, ¿de cuántos átomos consta la modificación epigenética más pequeña?

- A. De solo cuatro átomos
- B. De solo tres átomos
- C. De solo diecinueve átomos
- D. De solo dos átomos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · tamaño de la modificación más pequeña

La modificación epigenética más pequeña consta de solo cuatro átomos.

---

### 122

De conformidad con el libro de Biología, ¿de cuántas bases nitrogenadas son las cadenas de ARN que ayudan a especificar dónde debe ir cada tipo de resaltado?

- A. De solo 19 bases nitrogenadas
- B. De solo 4 bases nitrogenadas
- C. De solo 8 bases nitrogenadas
- D. De solo 25 bases nitrogenadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · cadenas de ARN de 19 bases

Otras involucran cadenas de ARN de solo 19 bases nitrogenadas que ayudan a especificar dónde debe ir cada tipo de resaltado.

---

### 123

En relación con el libro de Biología, ¿qué diferencia hay entre las células de un organismo respecto de su secuencia de ADN y sus "patrones de resaltado"?

- A. Casi todas contienen la misma secuencia de ADN, pero diferentes tipos de células tienen diferentes "patrones de resaltado"
- B. Cada tipo celular contiene una secuencia de ADN distinta, pero el mismo "patrón de resaltado"
- C. Todas contienen la misma secuencia de ADN y el mismo "patrón de resaltado"
- D. Cada tipo celular contiene una secuencia de ADN distinta y un "patrón de resaltado" distinto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · mismo ADN, distintos patrones de resaltado

Casi todas las células de un organismo contienen la misma secuencia de ADN, pero diferentes tipos de células tienen diferentes "patrones de resaltado". Una célula hepática no necesita las mismas "páginas" del "manual de instrucciones" que una célula nerviosa.

---

### 124

De acuerdo con el libro de Biología, ¿qué ocurre con las marcas epigenéticas durante el desarrollo embrionario?

- A. No permanecen fijas en el ADN de las células, sino que van cambiando conforme la célula se va diferenciando
- B. Permanecen fijas en el ADN de las células desde el cigoto hasta el organismo adulto
- C. Desaparecen por completo al comenzar la diferenciación celular
- D. Sólo aparecen una vez que la célula ha terminado de diferenciarse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · las marcas durante el desarrollo embrionario

Uno de los aspectos más interesantes de los procesos epigenéticos es que durante el desarrollo embrionario las marcas no permanecen fijas en el ADN de las células, sino que van cambiando conforme la célula se va diferenciando.

---

### 125

De conformidad con el libro de Biología, ¿cómo se conoce la transmisión de padres a hijos de algunas modificaciones epigenéticas?

- A. Herencia epigenética
- B. Impronta genómica
- C. Plasticidad fenotípica
- D. Canalización irreversible

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · herencia epigenética

Incluso, algunas de estas modificaciones pueden ser transmitidas de padres a hijos, lo cual se conoce como herencia epigenética.

---

### 126

En relación con el libro de Biología, además de las marcas y las proteínas, ¿qué otro factor tiene importancia en los procesos epigenéticos?

- A. La localización espacial específica de los cromosomas en el núcleo
- B. La cantidad de mitocondrias presentes en el citoplasma
- C. El espesor de la membrana plasmática de la célula
- D. La temperatura del medio extracelular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 303
**Subtema:** epigenética · localización de los cromosomas

También, la localización espacial específica de los cromosomas en el núcleo tiene importancia en los procesos epigenéticos.

---

### 127

De acuerdo con el libro de Biología, ¿qué muestra la figura 14-7 sobre la neurona y la célula hepática de mamífero?

- A. Que ambas células contienen el mismo genoma, pero expresan diferentes conjuntos de ARN y proteínas
- B. Que ambas células contienen genomas distintos y expresan los mismos ARN y proteínas
- C. Que ambas células contienen el mismo genoma y expresan los mismos ARN y proteínas
- D. Que ambas células contienen genomas distintos y expresan ARN y proteínas distintos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · fig. 14-7, genotipo y fenotipos celulares

Neurona (izquierda) y célula hepática (derecha) de mamífero. Ambas células contienen el mismo genoma, pero expresan diferentes conjuntos de ARN y proteínas.

---

### 128

De conformidad con el libro de Biología, ¿qué enzima adjunta el grupo metilo a algunas bases de citosina de la cadena de ADN, comportándose como una proteína "escritora"?

- A. La ADN metil transferasa
- B. La ADN polimerasa
- C. La topoisomerasa
- D. La transcriptasa inversa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · ADN metil transferasa

Se adjunta a algunas bases de citosina de la cadena de ADN mediante la acción de la enzima llamada ADN metil transferasa que, en este caso, se comporta como una proteína "escritora".

---

### 129

En relación con el libro de Biología, ¿qué provoca la metilación del ADN sobre la afinidad entre los genes y sus factores de transcripción?

- A. Provoca una reducción en la afinidad existente entre los genes y sus factores de transcripción específicos, y disminuye su tasa de expresión
- B. Provoca un aumento en la afinidad existente y aumenta su tasa de expresión
- C. No modifica la afinidad, pero duplica la tasa de expresión
- D. Elimina por completo los factores de transcripción específicos de la célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · efecto de la metilación sobre la expresión

La metilación del ADN provoca una reducción en la afinidad existente entre los genes y sus factores de transcripción específicos, y disminuye su tasa de expresión.

---

### 130

De acuerdo con el libro de Biología, ¿junto a qué base están situadas la mayoría de las bases de citosina metiladas (mC)?

- A. En sitios adyacentes a bases de guanina
- B. En sitios adyacentes a bases de adenina
- C. En sitios adyacentes a bases de timina
- D. En sitios adyacentes a bases de uracilo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · sitios CpG

Se ha observado que la mayoría de las bases de citosina metiladas (mC) están situadas en sitios adyacentes a bases de guanina.

---

### 131

De conformidad con el libro de Biología, en la denominación "CpG" del dinucleótido, ¿qué representa la "p"?

- A. El enlace mediado por un grupo fosfato
- B. El enlace mediado por un grupo metilo
- C. La base púrica del par de nucleótidos
- D. La proteína decodificadora que se une al sitio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · qué significa la "p" de CpG

El dinucleótido así constituido se denomina "CpG", en donde la "p" representa el enlace mediado por un grupo fosfato.

---

### 132

En relación con el libro de Biología, ¿qué proporción representa la cantidad absoluta de dinucleótidos CpG del genoma completo respecto de la esperada como producto del azar?

- A. 1/5 del valor esperado
- B. 1/2 del valor esperado
- C. 1/10 del valor esperado
- D. 1/20 del valor esperado

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · abundancia de los dinucleótidos CpG

Si bien en el análisis del genoma completo la cantidad absoluta de dinucleótidos CpG es bastante inferior a la que se esperaría como producto del azar (1/5 del valor esperado).

---

### 133

De acuerdo con el libro de Biología, ¿cómo se llaman las variantes repetitivas o *clusters* en los que se organizan los dinucleótidos CpG?

- A. Islas CpG
- B. Cajas TATA
- C. Cuerpos P
- D. Gránulos de estrés

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · islas CpG

Se observa que tienen una distribución no homogénea en el genoma, ya que se encuentran organizados en variantes repetitivas o *clusters* (llamados islas CpG).

---

### 134

De conformidad con el libro de Biología, ¿dónde se ubican las islas CpG?

- A. En torno a sitios de inicio de la transcripción
- B. En torno a los extremos teloméricos de los cromosomas
- C. En torno a los centrómeros de los cromosomas
- D. En torno a los sitios de terminación de la traducción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · fig. 14-8, ubicación de las islas CpG

Las islas CpG se ubican en torno a sitios de inicio de la transcripción. La metilación de las islas CpG puede inhibir la expresión de un gen.

---

### 135

En relación con el libro de Biología, ¿cómo se denomina a las proteínas del núcleo celular que reconocen y se unen específicamente a bases de citosina metiladas?

- A. Proteínas "decodificadoras"
- B. Proteínas "escritoras"
- C. Proteínas "borradoras"
- D. Proteínas chaperonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · proteínas decodificadoras

También se ha observado que en el núcleo celular existen proteínas que reconocen y se unen específicamente a bases de citosina metiladas (mC), a las que se suele denominar proteínas "decodificadoras".

---

### 136

De acuerdo con el libro de Biología, ¿qué efecto tienen sobre la cromatina los complejos proteicos formados a partir de las proteínas decodificadoras?

- A. Modifican su configuración tridimensional, que pasa de un estado laxo a uno compacto
- B. Modifican su configuración tridimensional, que pasa de un estado compacto a uno laxo
- C. Rompen sus enlaces fosfodiéster y la fragmentan
- D. Duplican su contenido de histonas sin cambiar su configuración

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · efecto sobre la cromatina

Los complejos proteicos así formados modifican la configuración tridimensional de la cromatina, que pasa de un estado laxo a uno compacto; se bloquea la transcripción de genes que contienen ADN metilado, inhibiéndose así la producción de los correspondientes ARNm y proteínas.

---

### 137

De conformidad con el libro de Biología, en la metáfora del texto, ¿cómo se comportaría la metilación del ADN?

- A. Más como un supresor que como un resaltador, al impedir que la célula pueda "leer" la secuencia metilada
- B. Más como un resaltador que como un supresor, al destacar la secuencia metilada
- C. Como un marcapáginas que señala dónde debe reanudarse la lectura
- D. Como un traductor que convierte la secuencia a otro idioma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · la metilación como supresor

En la metáfora del texto, en este caso, la metilación del ADN se comportaría más como un supresor que como un resaltador, al impedir que la célula pueda "leer" la secuencia metilada.

---

### 138

En relación con el libro de Biología, ¿cuándo ocurre el silenciamiento transcripcional?

- A. Solo cuando ambas hebras de la doble hélice de ADN están metiladas en el mismo sitio CpG
- B. Cuando al menos una de las dos hebras está metilada en cualquier sitio CpG
- C. Cuando ninguna de las dos hebras está metilada
- D. Cuando las dos hebras están metiladas en sitios CpG diferentes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · condición del silenciamiento transcripcional

El silenciamiento transcripcional solo ocurre cuando ambas hebras de la doble hélice de ADN están metiladas en el mismo sitio CpG.

---

### 139

De acuerdo con el libro de Biología, ¿qué ocurre con las nuevas hebras copiadas durante la replicación del ADN en la mitosis, respecto de los grupos metilo?

- A. No tienen grupos metilos adjuntos
- B. Tienen el doble de grupos metilos que la hebra original
- C. Tienen exactamente los mismos grupos metilos que la hebra original
- D. Tienen grupos metilos adjuntos, pero en sitios distintos de los de la hebra original

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · metilación y replicación

Pero cuando el ADN se replica durante la mitosis, las nuevas hebras que se han copiado a partir de las originales no tienen grupos metilos adjuntos.

---

### 140

De conformidad con el libro de Biología, ¿qué proteína copia el patrón original de metilación del ADN a las dos nuevas cadenas formadas durante la replicación?

- A. La ADN metiltransferasa 1 (DNMT1)
- B. La ADN polimerasa 1
- C. La topoisomerasa 1
- D. La ARN polimerasa 1

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · DNMT1

En esa instancia interviene una proteína llamada ADN metiltransferasa 1 (DNMT1, por su sigla en inglés), que copia el patrón original de metilación del ADN a las dos nuevas cadenas formadas durante la replicación.

---

### 141

En relación con el libro de Biología, ¿cómo actúa la enzima ADN metiltransferasa 1 sobre los sitios CpG?

- A. Reconoce los sitios CpG asimétricamente metilados y adiciona el grupo metilo a la base citosina desnuda de la nueva cadena, restableciendo el patrón original simétrico
- B. Reconoce los sitios CpG simétricamente metilados y les retira el grupo metilo de ambas cadenas
- C. Reconoce los sitios CpG no metilados y los corta para su reparación
- D. Reconoce los sitios CpG y los desplaza hacia los sitios de inicio de la transcripción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 304
**Subtema:** epigenética · fig. 14-9, cómo actúa la DNMT1

Esta enzima reconoce los sitios CpG asimétricamente metilados y adiciona el grupo metilo a la base citosina desnuda de la nueva cadena, restableciendo el patrón original simétrico del ADN original.

---

### 142

De acuerdo con el libro de Biología, ¿para qué resulta crucial el proceso de copiado del patrón de metilación?

- A. Para que se mantenga el paisaje epigenético de las células maduras e impida que se revierta la diferenciación celular
- B. Para que se acelere la velocidad de la replicación del ADN
- C. Para que se reduzca el número de mutaciones durante la mitosis
- D. Para que se aumente el número de cromosomas de la célula hija

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · por qué es crucial mantener el patrón

Este proceso resulta crucial para que se mantenga el paisaje epigenético de las células maduras e impida que se revierta la diferenciación celular.

---

### 143

De conformidad con el libro de Biología, ¿de qué es la metilación del ADN el ejemplo mejor conocido?

- A. De una modificación epigenética que se hereda por mitosis
- B. De una mutación puntual que altera la secuencia del ADN
- C. De un proceso "borrador" del patrón de organización del ADN
- D. De una modificación de las histonas de la cromatina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · la metilación como herencia por mitosis

La metilación del ADN es el ejemplo mejor conocido de una modificación epigenética que se hereda por mitosis.

---

### 144

En relación con el libro de Biología, ¿qué efecto se ha propuesto para la metilación del ADN cuando ocurre en regiones propias de un gen y no en las regiones promotoras?

- A. Puede tener el efecto inverso, al aumentar la tasa de expresividad de ese gen
- B. Puede reforzar el silenciamiento y anular por completo la expresión de ese gen
- C. No produce ningún efecto sobre la expresión de ese gen
- D. Produce una mutación puntual en la secuencia de ese gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · metilación fuera de las regiones promotoras

En algunos casos, se ha propuesto que la metilación del ADN en regiones propias de un gen –y no en las regiones promotoras– puede tener el efecto inverso, al aumentar la tasa de expresividad de ese gen.

---

### 145

De acuerdo con el libro de Biología, ¿qué muestra el fenómeno de que la metilación pueda aumentar la expresión de un gen según dónde ocurra?

- A. Que las moléculas o modificaciones específicas no tienen un valor en sí mismas, sino en un contexto temporal y espacial particular
- B. Que las moléculas específicas tienen siempre el mismo valor, independientemente del contexto
- C. Que la metilación carece de todo efecto sobre la expresión génica
- D. Que la expresión génica depende exclusivamente de la secuencia del promotor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · el valor de una modificación depende del contexto

Este fenómeno muestra que las moléculas o modificaciones específicas no tienen un valor en sí mismas, sino en un contexto temporal y espacial particular.

---

### 146

De conformidad con el libro de Biología, ¿qué tipo de proteínas son las de unión a Metil CpG?

- A. Proteínas "lectoras" que reconocen el ADN metilado e inician el silenciamiento de la cromatina a través del reclutamiento de otras moléculas
- B. Proteínas "escritoras" que adicionan el grupo metilo a las bases de citosina
- C. Proteínas "borradoras" que eliminan el grupo metilo de las bases de citosina
- D. Proteínas chaperonas que recuperan el plegamiento nativo de otras proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · proteínas de unión a Metil CpG

Se trata de proteínas "lectoras" que reconocen el ADN metilado e inician el silenciamiento de la cromatina a través del reclutamiento de otras moléculas.

---

### 147

En relación con el libro de Biología, ¿cuántas familias de proteínas de unión a Metil CpG se han descrito en diversas investigaciones?

- A. Tres familias
- B. Dos familias
- C. Cuatro familias
- D. Cinco familias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · familias de proteínas de unión a Metil CpG

En diversas investigaciones se han descrito tres familias de estas proteínas que mostraron tener cierta especificidad, tanto por reconocer algunas partes específicas del ADN metilado como por producir su efecto silenciador de maneras particulares.

---

### 148

De acuerdo con el libro de Biología, ¿en qué otro proceso están involucradas algunas proteínas con dominio de unión a Metil CpG?

- A. En la reparación del ADN
- B. En el transporte de iones a través de la membrana
- C. En la síntesis de ATP en la mitocondria
- D. En la formación del huso mitótico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · proteínas Metil CpG y reparación del ADN

Existen otras proteínas con dominio de unión a Metil CpG que están involucradas en la reparación del ADN.

---

### 149

De conformidad con el libro de Biología, ¿dentro de qué tipo de procesos se encuentra la reactivación de genes cuyos sectores promotores están metilados?

- A. Dentro de los llamados procesos "borradores" del patrón de organización del ADN
- B. Dentro de los llamados procesos "escritores" del patrón de organización del ADN
- C. Dentro de los llamados procesos "lectores" del patrón de organización del ADN
- D. Dentro de los procesos de reparación de las mutaciones puntuales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · demetilación del ADN

En algunas ocasiones, los genes, cuyos sectores promotores se encuentran metilados, pueden ser reactivados; este fenómeno se encuentra dentro de los llamados procesos "borradores" del patrón de organización del ADN.

---

### 150

En relación con el libro de Biología, ¿cuándo cambia el paisaje epigenético?

- A. Cuando las células comienzan a activar los genes que se requieren para desarrollar sus funciones especializadas como células terminalmente diferenciadas de tejidos específicos
- B. Cuando las células pierden por completo su capacidad de expresar genes
- C. Cuando las células duplican su contenido de ADN antes de la mitosis
- D. Cuando las células sufren una mutación en su secuencia promotora

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · cambio del paisaje epigenético

El paisaje epigenético cambia cuando las células comienzan a activar los genes que se requieren para desarrollar sus funciones especializadas como células terminalmente diferenciadas de tejidos específicos.

---

### 151

De acuerdo con el libro de Biología, ¿qué representan los puntos amarillos de la figura 14-9?

- A. Los grupos metilo
- B. Las bases de citosina
- C. Las islas CpG
- D. Las proteínas decodificadoras

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · fig. 14-9, los puntos amarillos

Los puntos amarillos representan los grupos metilo.

---

### 152

De conformidad con el libro de Biología, ¿quién demostró en la década de 1990 la importancia de la metilación del ADN?

- A. El grupo de investigación del biólogo alemán Rudolf Jaenisch
- B. El grupo de investigación del biólogo escocés Conrad H. Waddington
- C. El grupo de investigación del genetista estadounidense Richard Lewontin
- D. El grupo de investigación del anatomista suizo Wilhelm His

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · recuadro 14-1, Rudolf Jaenisch

En la década de 1990, el grupo de investigación del biólogo alemán Rudolf Jaenisch demostró la importancia de la metilación del ADN.

---

### 153

En relación con el libro de Biología, ¿qué modelo experimental empleó el grupo de Rudolf Jaenisch?

- A. Ratones tratados mediante ingeniería genética, que carecían de la enzima ADN metiltransferasa
- B. Poblaciones de la pulga de agua *Daphnia* sometidas a cambios de temperatura
- C. Huevos fecundados de rana del género *Xenopus*
- D. Huevos de erizos de mar separados en el estadio de dos blastómeras

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · recuadro 14-1, el modelo experimental

Utilizando un modelo experimental que empleaba ratones tratados mediante ingeniería genética, que carecían de la enzima ADN metiltransferasa.

---

### 154

De acuerdo con el libro de Biología, ¿qué ocurre con la progenie de los ratones que carecen de la enzima ADN metiltransferasa?

- A. La progenie es inviable, ya que la F1 muere en diversos estadios embrionarios
- B. La progenie es viable, pero presenta malformaciones en los miembros
- C. La progenie es viable y no presenta ninguna alteración observable
- D. La progenie sólo es inviable a partir de la tercera generación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · recuadro 14-1, inviabilidad de la progenie

En este modelo, la progenie es inviable, ya que la F1 muere en diversos estadios embrionarios.

---

### 155

De conformidad con el libro de Biología, ¿qué alteraciones encontraron los grupos de investigación que emplearon un modelo de células cancerosas?

- A. Cambios masivos en los patrones de metilación, activación atípica de patrones de expresión génica y alteraciones de la ADN metiltransferasa
- B. Ausencia total de metilación y pérdida completa del genoma nuclear
- C. Duplicación del número de cromosomas sin cambios en la metilación
- D. Reducción del tamaño celular sin alteraciones en la expresión génica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · recuadro 14-1, células cancerosas

Otros grupos de investigación, que emplearon un modelo de células cancerosas, encontraron que, entre otras alteraciones, estas células presentan cambios masivos en los patrones de metilación, activación atípica de patrones de expresión génica y alteraciones de la ADN metiltransferasa.

---

### 156

En relación con el libro de Biología, ¿qué sugieren los resultados de las investigaciones del recuadro 14-1 sobre el funcionamiento normal de las células y de los organismos?

- A. Que requiere la ocurrencia de patrones normales de metilación
- B. Que requiere la ausencia total de metilación del ADN
- C. Que es independiente de los patrones de metilación
- D. Que requiere una metilación máxima de todas las islas CpG

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 305
**Subtema:** epigenética · recuadro 14-1, conclusión

Los resultados de estas investigaciones sugieren que el normal funcionamiento de las células y de los organismos requiere la ocurrencia de patrones normales de metilación.

---

### 157

De acuerdo con el libro de Biología, en la demetilación pasiva del ADN, ¿qué ocurre con el patrón original de metilación?

- A. Simplemente no es copiado a las nuevas cadenas que resultan de la replicación del ADN
- B. Es marcado por átomos de oxígeno y escindido por proteínas Tet
- C. Se copia de forma idéntica a las dos cadenas hijas
- D. Se transfiere íntegro a las histonas vecinas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · demetilación pasiva

En estos casos, el patrón original de metilación simplemente no es copiado a las nuevas cadenas que resultan de la replicación del ADN. Se ha observado que puede ocurrir esta demetilación pasiva (fig. 14-10).

---

### 158

De conformidad con el libro de Biología, ¿en qué fase del ciclo celular se ha descrito la demetilación pasiva?

- A. En la fase mitótica
- B. En la fase de síntesis (S)
- C. En la interfase G0
- D. En la meiosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · demetilación pasiva

Este fenómeno, descrito en la fase mitótica, se encuentra en estudio y su papel no ha sido del todo dilucidado.

---

### 159

En relación con el libro de Biología, ¿en qué situaciones se observa el proceso de demetilación activa, cuando la metilación debe revertirse rápidamente?

- A. Durante la diferenciación celular y la adaptación de células maduras frente a daños producidos por químicos, calor u otros estímulos
- B. Durante la replicación normal del ADN en la fase de síntesis
- C. Únicamente durante la formación de los gametos
- D. Solo en las células cancerosas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · demetilación activa

Algunos ejemplos de ello se observan durante el proceso de diferenciación celular y la adaptación de células maduras frente a daños producidos por químicos, calor u otros estímulos.

---

### 160

De acuerdo con el libro de Biología, en la demetilación activa, ¿cómo son "marcados" los grupos metilo que serán removidos?

- A. Por átomos de oxígeno
- B. Por grupos acetilo
- C. Por grupos fosfato
- D. Por moléculas de ADP-ribosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · demetilación activa

Durante este, los grupos metilos que serán removidos son "marcados" por átomos de oxígeno.

---

### 161

De conformidad con el libro de Biología, en la demetilación activa, ¿qué proteínas —denominadas "borradoras"— desmontan el patrón de metilación y escinden del ADN los grupos metilo marcados?

- A. Las proteínas Tet
- B. Las protaminas
- C. Las demetilasas de histonas
- D. Las proteínas SWI/SNF

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · demetilación activa · proteínas Tet

A continuación, proteínas llamadas Tet, a las que se suele denominar "borradoras", desmontan el patrón de metilación, se enlazan específicamente en los grupos metilo que se encuentran marcados y los escinden del ADN.

---

### 162

En relación con el libro de Biología, a las modificaciones que marcan a las histonas con grupos metilo y una gran variedad de moléculas, ¿cómo se las considera en la clasificación literaria?

- A. Como "escritoras"
- B. Como "lectoras"
- C. Como "borradoras"
- D. Como "decodificadoras"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · modificaciones de histonas · escritoras

Las histonas pueden ser marcadas por grupos metilo, así como por una gran variedad de moléculas, cada una de las cuales produce diferentes efectos. A este tipo de modificaciones se las considera en la clasificación literaria como "escritoras".

---

### 163

De acuerdo con el libro de Biología, ¿en qué porciones de la histona ocurre la mayoría de las modificaciones?

- A. En las "colas", las porciones de la proteína que asoman del centro de la estructura del nucleosoma
- B. En el centro globular del nucleosoma
- C. En el segmento de ADN que rodea a la histona
- D. En la molécula de ADP-ribosa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · histonas · colas

La mayoría de las modificaciones ocurren en las porciones de la proteína que asoman del centro de la estructura del nucleosoma, usualmente llamadas "colas".

---

### 164

De conformidad con el libro de Biología, ¿cómo cambian los patrones de modificación de las histonas en comparación con los patrones de metilación del ADN?

- A. Más a menudo y más rápidamente que los patrones de metilación del ADN
- B. Más lentamente que los patrones de metilación del ADN
- C. Exactamente al mismo ritmo que los patrones de metilación del ADN
- D. Nunca cambian una vez que se han establecido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · histonas · dinámica

Los patrones de modificación de las histonas cambian más a menudo y más rápidamente que los patrones de metilación del ADN. Por lo general, estos cambios parecen estar asociados a fluctuaciones de corto plazo en los patrones de activación de los genes, en contraste con los cambios de largo plazo que están generalmente asociados a la metilación del ADN.

---

### 165

En relación con el libro de Biología, ¿qué hacen las proteínas "lectoras" respecto de las modificaciones de las histonas?

- A. Se unen específicamente a cada tipo de modificación de las histonas y regulan la actividad de los genes cercanos
- B. Marcan los grupos metilo con átomos de oxígeno para su remoción
- C. Reemplazan las histonas convencionales por variantes especializadas
- D. Escinden del ADN los grupos metilo que se encuentran marcados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · histonas · lectoras

Hay proteínas "lectoras" que se unen específicamente a cada tipo de modificación de las histonas y regulan la actividad de los genes cercanos.

---

### 166

De acuerdo con el libro de Biología, ¿cómo se denomina el método indirecto que se aplica para determinar la localización de las histonas modificadas?

- A. Chip-Seq (del inglés, Chromatin Inmunoprecipitation Sequencing)
- B. PCR (reacción en cadena de la polimerasa)
- C. Electroforesis en gel de agarosa
- D. Cariotipo espectral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · Chip-Seq

Para ello, se aplica un método indirecto denominado Chip-Seq (del inglés Chromatin Inmunoprecipitation Sequencing), que involucra el aislamiento de las histonas que corresponden a cada tipo de modificación y, posteriormente, la secuenciación del ADN que codifica las histonas en cada caso.

---

### 167

De conformidad con el libro de Biología, a diferencia de la metilación del ADN —asociada al silenciamiento de genes—, ¿qué efecto puede tener la metilación de las histonas sobre la expresión génica?

- A. Puede tanto silenciar como activar la expresión génica
- B. Siempre silencia la expresión génica
- C. Siempre activa la expresión génica
- D. No tiene ningún efecto sobre la expresión génica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · metilación de histonas

Así como la metilación del ADN está generalmente asociada al silenciamiento de genes, la metilación de las histonas puede tanto silenciar como activar la expresión génica, dependiendo de qué aminoácido y de qué cola de histona se encuentre metilada, y también de cuántos grupos metilo recibe el aminoácido modificado.

---

### 168

En relación con el libro de Biología, ¿cuáles son los dos aminoácidos cuyos cambios se jerarquizan particularmente por ser, hasta el momento, los más estudiados?

- A. La lisina y la arginina
- B. La glicina y la alanina
- C. La serina y la treonina
- D. La cisteína y la metionina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · metilación de histonas · aminoácidos

En la literatura se jerarquizan particularmente los cambios en los aminoácidos lisina y arginina que son, hasta el momento, los más estudiados.

---

### 169

De acuerdo con el libro de Biología, los sitios de metilación más estudiados en la lisina (K) de la histona 3 corresponden a las posiciones, ¿cuáles?

- A. 4, 9, 27, 36 y 79 (H3K4, H3K9, H3K27, H3K36, H3K79), y en la histona 4, H4K20
- B. 1, 2, 3, 4 y 5 (H3K1, H3K2, H3K3, H3K4, H3K5)
- C. 10, 20, 30, 40 y 50 (H3K10, H3K20, H3K30, H3K40, H3K50)
- D. 2, 8, 17 y 26 (H3R2, H3R8, H3R17, H3R26)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 306
**Subtema:** epigenética · sitios de metilación de histonas

Los sitios de metilación más estudiados son en la histona 3 (H3), la lisina (K), correspondientes a las posiciones 4, 9, 27, 36 y 79 (H3K4, H3K9, H3K27, H3K36, H3K79, respectivamente) y en la histona 4 (H4K20).

---

### 170

De conformidad con el libro de Biología, ¿con qué está asociada, a modo de ejemplo, la metilación en H3K4, H3K36 y H3K79?

- A. Con un aumento en la actividad transcripcional
- B. Con un estado de inactividad de la cromatina
- C. Con la reparación de los daños en el ADN
- D. Con el reemplazo de las histonas por protaminas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · metilación de histonas · H3K activadoras

Se considera que la metilación en H3K4, H3K36 y H3K79 está asociada a un aumento en la actividad transcripcional.

---

### 171

En relación con el libro de Biología, ¿con qué se asocia la metilación en H3K9, H3K27 y H4K20?

- A. Con un estado de inactividad de la cromatina
- B. Con un aumento en la actividad transcripcional
- C. Con la activación de todos los genes vecinos
- D. Con la remoción total de las histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · metilación de histonas · H3K silenciadoras

La metilación en H3K9, H3K27 y H4K20 se asocia a un estado de inactividad de la cromatina.

---

### 172

De acuerdo con el libro de Biología, además de los grupos metilo, ¿cuáles son dos de las moléculas más pequeñas que también pueden enlazarse a las colas de las histonas?

- A. Los grupos acetilo y los grupos fosfato
- B. Las moléculas de ADP-ribosa
- C. Las protaminas
- D. Las proteínas Tet

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · modificaciones de histonas · acetilo y fosfato

Los grupos acetilo y los grupos fosfato son dos de las más pequeñas de estas moléculas.

---

### 173

De conformidad con el libro de Biología, ¿cuál fue la primera de las modificaciones de las histonas en ser descrita, a mediados de la década de 1990, por el biólogo estadounidense David Allis?

- A. La acetilación de las histonas
- B. La fosforilación de las histonas
- C. La metilación de las histonas
- D. La ADP-ribosilación de las histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · acetilación · David Allis

La acetilación de las histonas fue la primera de las modificaciones en ser descrita a mediados de la década de 1990, por el biólogo estadounidense David Allis.

---

### 174

En relación con el libro de Biología, ¿con qué está siempre asociada la acetilación de las histonas?

- A. Con la activación génica
- B. Con el silenciamiento génico
- C. Con la reparación del ADN
- D. Con la máxima compactación de la cromatina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · acetilación · activación

Esta modificación siempre está asociada con la activación génica.

---

### 175

De acuerdo con el libro de Biología, ¿cómo facilita la transcripción el efecto más directo de los grupos acetilo?

- A. Su carga negativa debilita la atracción entre el ADN cargado negativamente y las histonas cargadas positivamente, lo que relaja la estructura del nucleosoma
- B. Su carga positiva refuerza la atracción entre el ADN y las histonas
- C. Marcan los grupos metilo con átomos de oxígeno para removerlos
- D. Reemplazan las histonas convencionales por protaminas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · acetilación · mecanismo

Los grupos acetilos tienen un efecto más directo, ya que su carga negativa debilita la atracción que se establece entre el ADN cargado negativamente y las histonas cargadas positivamente. Esta interferencia relaja la estructura del nucleosoma, facilitando la transcripción del ADN.

---

### 176

De conformidad con el libro de Biología, la fosforilación de las histonas es una modificación cuyos efectos son aún menos comprendidos, pero ¿con qué se considera que están asociados?

- A. Con la reparación del ADN y la activación transcripcional
- B. Con el silenciamiento permanente de los genes
- C. Con la formación de las protaminas
- D. Con la demetilación pasiva del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · fosforilación

La fosforilación de las histonas es una modificación cuyos efectos son aún menos comprendidos, pero se considera que están asociados a la reparación del ADN y a la activación transcripcional.

---

### 177

En relación con el libro de Biología, ¿de qué manera parece actuar la ADP-ribosilación de las histonas?

- A. De manera similar a la acetilación, debilitando la estructura del nucleosoma y haciendo más accesible la transcripción del ADN
- B. De manera similar a la metilación del ADN, silenciando los genes
- C. Reemplazando las histonas convencionales por protaminas
- D. Escindiendo del ADN los grupos metilo marcados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · ADP-ribosilación

La ADP-ribosilación de las histonas parece actuar de manera similar a la acetilación, debilitando la estructura del nucleosoma y como consecuencia de ello, haciendo más accesible la transcripción del ADN.

---

### 178

De acuerdo con el libro de Biología, ¿cómo se postula que actúan las demetilasas y deacetilasas de histonas?

- A. Como "borradoras" del patrón epigenético
- B. Como "escritoras" del patrón epigenético
- C. Como "lectoras" del patrón epigenético
- D. Como variantes especializadas de las histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · borradoras

Otros ejemplos de proteínas reguladoras incluyen a las demetilasas y deacetilasas de histonas: se postula que actúan como "borradoras" del patrón epigenético.

---

### 179

De conformidad con el libro de Biología, ¿en qué consiste la modificación de histonas más drástica que se conoce?

- A. En el intercambio de histonas convencionales por variantes que presentan propiedades especializadas
- B. En la acetilación simultánea de todas las colas de las histonas
- C. En la remoción del grupo fosfato de las histonas
- D. En la metilación de las bases de citosina del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · variantes de histonas

La modificación de histonas más drástica que se conoce involucra el intercambio de histonas convencionales por variantes que presentan propiedades especializadas.

---

### 180

En relación con el libro de Biología, en las células espermáticas las histonas son totalmente removidas y reemplazadas, ¿por qué proteínas que permiten un empaquetamiento más compacto del ADN?

- A. Por protaminas, más pequeñas que las histonas
- B. Por proteínas Tet
- C. Por demetilasas de histonas
- D. Por proteínas SWI/SNF

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · protaminas

En las células espermáticas, las histonas son totalmente removidas y reemplazadas por proteínas llamadas protaminas, más pequeñas que las histonas, de modo que permiten un empaquetamiento más compacto del ADN.

---

### 181

De acuerdo con el libro de Biología, ¿qué observó en 2014 la bióloga del desarrollo estadounidense Susan Strome?

- A. Que algunas modificaciones de las histonas presentes en las cadenas originales podían ser transferidas a las nuevas cadenas formadas en la replicación del ADN
- B. Que las histonas se reemplazan por protaminas en todas las células del cuerpo
- C. Que la metilación del ADN siempre activa la expresión de los genes
- D. Que las proteínas Tet escinden los grupos acetilo de las histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · herencia de modificaciones de histonas · Susan Strome

En 2014, la bióloga del desarrollo estadounidense Susan Strome observó que algunas de las modificaciones de las histonas presentes en las cadenas originales podían ser transferidas a las nuevas cadenas formadas en la replicación del ADN.

---

### 182

De conformidad con el libro de Biología, respecto de la remodelación de la cromatina, ¿qué característica de los nucleosomas es fundamental?

- A. No están fijos, sino que pueden desplazarse a lo largo del ADN
- B. Están fijos de forma permanente en un punto del ADN
- C. Carecen por completo de histonas
- D. Solo existen durante la fase mitótica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · remodelación de la cromatina

Los nucleosomas no están fijos, sino que pueden desplazarse a lo largo del ADN. El delicado desmontaje, el reensamblaje y los movimientos de los nucleosomas son aspectos importantes de la regulación epigenética.

---

### 183

En relación con el libro de Biología, las proteínas que coordinan la remodelación de la cromatina fueron observadas originalmente, ¿en qué células —lo que dio nombre a proteínas como la SWI/SNF?

- A. En células de levaduras
- B. En células espermáticas
- C. En neuronas humanas
- D. En bacterias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 307
**Subtema:** epigenética · remodelación · SWI/SNF

Las proteínas que coordinan este proceso de remodelación de la cromatina fueron observadas originalmente en células de levaduras, en las que por primera vez se consideró que podían tener papeles especializados.

---

### 184

De acuerdo con el libro de Biología, ¿qué contribuyen a regular las proteínas que intervienen en la remodelación de la cromatina?

- A. El espaciamiento entre los nucleosomas
- B. La secuencia de bases del ADN
- C. El número de cromosomas de la célula
- D. La cantidad de ADP-ribosa presente en el núcleo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · remodelación de la cromatina

Las proteínas que intervienen en la remodelación de la cromatina contribuyen a regular el espaciamiento entre los nucleosomas.

---

### 185

De conformidad con el libro de Biología, al desplazar los nucleosomas aproximándolos, ¿qué efecto se produce sobre la cromatina?

- A. Se crean contactos entre las histonas que condensan la cromatina de manera muy compacta
- B. Se abre la cromatina, dándole una configuración más activa
- C. El nucleosoma se elimina por completo
- D. Las histonas se reemplazan por protaminas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · remodelación · compactación

Al desplazar los nucleosomas, aproximándolos, se crean contactos entre las histonas que condensan la cromatina de manera muy compacta, o bien espaciándolos, con lo cual crean el efecto opuesto, al abrir la cromatina, presentándola de una manera más accesible y dando lugar a una configuración más activa.

---

### 186

En relación con el libro de Biología, el desmontaje y la reconstrucción de nucleosomas, que constituye un cambio rápido del patrón de modificación de las histonas, ocurre por ejemplo, ¿en qué situaciones?

- A. Durante la diferenciación celular o en respuesta a cambios súbitos del ambiente
- B. Únicamente durante la mitosis
- C. Solo en las células espermáticas
- D. Exclusivamente durante la reparación del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · remodelación · diferenciación

Este fenómeno constituye un cambio rápido del patrón de modificación de las histonas que ocurre, por ejemplo, durante la diferenciación celular o en respuesta a cambios súbitos del ambiente.

---

### 187

De acuerdo con el libro de Biología, durante la mitosis los cromosomas adoptan una morfología muy compacta; en los períodos intermitóticos, en cambio, ¿qué formas adquiere la cromatina?

- A. Formas más laxas, con una disposición tridimensional más compleja
- B. Una morfología aún más compacta que en la mitosis
- C. La forma de protaminas
- D. Una estructura idéntica en todos los tipos de célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · localización nuclear

En los períodos intermitóticos, en cambio, la cromatina adquiere formas más laxas, con una disposición tridimensional más compleja que involucra una ubicación específica en la topografía nuclear.

---

### 188

De conformidad con el libro de Biología, ¿dónde se localizan las regiones activas de la cromatina frente a las regiones menos activas o silenciosas?

- A. Las activas en la zona central del núcleo; las menos activas o silenciosas en zonas periféricas
- B. Las activas en zonas periféricas; las silenciosas en la zona central
- C. Ambas en la zona central del núcleo
- D. Ambas adheridas a la membrana nuclear

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · localización nuclear · zonas

Las regiones activas de la cromatina con marcas epigenéticas que promueven la transcripción de los genes se localizan en la zona central del núcleo, mientras que las regiones menos activas o silenciosas de la cromatina se sitúan en zonas periféricas.

---

### 189

En relación con el libro de Biología, como cada tipo de célula terminalmente diferenciada tiene un patrón característico de localización de los genes en el núcleo, ¿qué implica esto?

- A. Que ciertos genes pueden tener una ubicación particular en el núcleo de una célula muscular y otra diferente en una célula nerviosa
- B. Que todos los genes ocupan la misma posición exacta en cualquier célula
- C. Que la ubicación de los genes cambia al azar a cada instante
- D. Que todos los genes se ubican siempre en la periferia del núcleo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · localización nuclear · tipo celular

Cada tipo de célula terminalmente diferenciada tiene un patrón característico de localización de los genes dentro del núcleo. Esto significa que ciertos genes pueden tener una ubicación particular en el núcleo de una célula muscular y otra diferente en una célula nerviosa.

---

### 190

De acuerdo con el libro de Biología, ¿cómo varía la proporción del genoma que codifica proteínas entre los procariotas y los mamíferos?

- A. Es del 98% en procariotas y desciende hasta alrededor del 1% en mamíferos
- B. Es del 1% en procariotas y asciende al 98% en mamíferos
- C. Es del 50% por igual en todos los grupos
- D. Es del 68% en mamíferos y del 17% en procariotas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · genoma no codificante

En procariotas se estima que el 98% del genoma codifica proteínas, pero esta proporción desciende al 68% en levaduras, al 17% en insectos, al 2% en pollo y a alrededor del 1% en mamíferos.

---

### 191

De conformidad con el libro de Biología, ¿cuál es el criterio de longitud que distingue a los ARN no codificantes largos de los pequeños?

- A. Los largos tienen más de 200 nucleótidos y los pequeños, menos de 200 nucleótidos
- B. Los largos tienen más de 50 nucleótidos y los pequeños, menos de 50
- C. Los largos tienen más de 2000 nucleótidos y los pequeños, menos de 1000
- D. Los largos tienen más de 20 nucleótidos y los pequeños, menos de 20

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · ARN no codificantes · clasificación

Entre los ARN no codificantes (ARNnc), algunos son parte de la familia de los llamados ARN largos –más de 200 nucleótidos de longitud– y otros, de los ARN pequeños –menos de 200 nucleótidos–.

---

### 192

En relación con el libro de Biología, dentro de los ARN pequeños (menos de 200 nucleótidos), ¿cuáles encontramos?

- A. Los microARN (miARN), los ARN interferentes pequeños (ARNsi) y el ARN interactuante con la proteína PIWI (ARNpi)
- B. Únicamente los ARN largos no codificantes (ARNlnc)
- C. El ARN mensajero, el ARN de transferencia y el ARN ribosómico
- D. Solamente los ARN circulares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · ARN pequeños

Dentro del segundo grupo encontramos a los microARN (miARN), los ARN interferentes pequeños (ARNsi) y el ARN interactuante con la proteína PIWI (ARNpi).

---

### 193

De acuerdo con el libro de Biología, ¿cómo se agrupa a los ARN circulares, estudiados muy recientemente?

- A. Como una familia aparte
- B. Dentro de los ARN largos no codificantes (ARNlnc)
- C. Dentro de los microARN (miARN)
- D. Como un tipo de proteína "borradora"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · ARN circulares

Los ARN circulares han sido estudiados muy recientemente, y se los agrupa como una familia aparte.

---

### 194

De conformidad con el libro de Biología, ¿en qué intervienen, por lo general, los ARN reguladores descritos?

- A. En la disminución de la tasa de expresión de los genes
- B. En el aumento de la tasa de expresión de todos los genes
- C. En la síntesis de las proteínas ribosómicas
- D. En la replicación del ADN mitocondrial

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · ARN reguladores

Si bien los ARN reguladores descritos, por lo general intervienen en la disminución de la tasa de expresión de los genes mediante diversos procesos.

---

### 195

En relación con el libro de Biología, ¿qué familia de ARN "relativamente pequeños" (varían entre 50 y 2000 nucleótidos) está involucrada en el aumento de la tasa de expresión de ciertos genes?

- A. Los ARN potenciadores (ERNA)
- B. Los microARN (miARN)
- C. Los ARN interferentes pequeños (ARNsi)
- D. Los ARN circulares

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · ARN potenciadores ERNA

Investigaciones recientes han descrito una familia de ARN "relativamente pequeños" (varían entre 50 y 2000 nucleótidos) llamados ARN potenciadores (ERNA por sus siglas en inglés) que están involucrados en el aumento de la tasa de expresión de ciertos genes.

---

### 196

De acuerdo con el libro de Biología, cuando algunas cadenas de ARN se enlazan con partes complementarias de ellas mismas, adquieren un plegado tridimensional que se conoce, ¿cómo?

- A. Como estructuras secundarias
- B. Como estructuras primarias
- C. Como nucleosomas
- D. Como islas CpG

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 308
**Subtema:** epigenética · ARN · estructuras secundarias

Otras pueden también enlazarse con partes complementarias de ellas mismas, adquiriendo un plegado en formas tridimensionales que se conocen como estructuras secundarias.

---

### 197

De conformidad con el libro de Biología, ¿cuántas bases de largo tienen, al menos, los ARN largos no codificantes (ARNlnc)?

- A. Al menos 200 bases
- B. Al menos 50 bases
- C. Al menos 2000 bases
- D. Al menos 20 bases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · ARNlnc

Las moléculas de ARN más largas que coordinan la regulación epigenética se han denominado ARN largos no codificantes (ARNlnc), y tienen al menos 200 bases de largo y cumplen varias funciones en el núcleo.

---

### 198

En relación con el libro de Biología, ¿cuántas variantes de ARNlnc se han identificado en el genoma humano?

- A. Alrededor de 8000 variantes
- B. Alrededor de 200 variantes
- C. Alrededor de 100 000 variantes
- D. Alrededor de 20 variantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · ARNlnc · genoma humano

Se han identificado alrededor de 8000 variantes de ARNlnc en el genoma humano.

---

### 199

De acuerdo con el libro de Biología, ¿cómo actúan los ARNlnc en la formación de complejos moleculares que regulan diversos procesos?

- A. Como "andamios"
- B. Como "borradoras"
- C. Como "tijeras"
- D. Como "camiones de basura"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · ARNlnc · andamios

De alguna manera, los ARNlnc actúan como "andamios" en la formación de complejos moleculares que regulan diversos procesos.

---

### 200

De conformidad con el libro de Biología, ¿cuál es un ejemplo muy significativo de la actividad de los ARNlnc en la regulación epigenética del ADN?

- A. La inactivación del cromosoma X
- B. La replicación del ADN mitocondrial
- C. La síntesis de las proteínas ribosómicas
- D. La formación de los gametos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · ARNlnc · inactivación del X

Un ejemplo muy significativo de la actividad de los ARNlnc en la regulación epigenética del ADN es la inactivación del cromosoma X.

---

### 201

En relación con el libro de Biología, los ARNlnc median el silenciamiento de "bloques de cromatina" al reclutar proteínas de una familia particular, ¿cuál?

- A. La familia polycomb
- B. La familia argonauta
- C. La familia Dicer
- D. La familia de las protaminas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · ARNlnc · polycomb

Los ARNlnc también median el silenciamiento de "bloques de cromatina" al reclutar proteínas de una familia particular denominada polycomb.

---

### 202

De acuerdo con el libro de Biología, los ARNlnc tienen un papel central en el desarrollo al inhibir la expresión de genes regulatorios, ¿de qué familia?

- A. La familia HOX
- B. La familia polycomb
- C. La familia argonauta
- D. La familia SWI/SNF

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · ARNlnc · genes HOX

Se ha visto que tienen un papel central en el desarrollo, al inhibir la expresión de genes regulatorios de la familia HOX, cuya actividad diferencial en distintas poblaciones celulares es central en la regionalización del embrión durante el primer mes de desarrollo.

---

### 203

De conformidad con el libro de Biología, tras abandonar el núcleo, las hebras precursoras que dan lugar a los microARN (miARN) se fragmentan en hebras más cortas, ¿de qué tamaño?

- A. De 19 a 24 bases
- B. De 200 a 400 bases
- C. De 50 a 100 bases
- D. De 2 a 5 bases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · tamaño

Después de abandonar el núcleo, ciertas hebras precursoras de ARN de mayor tamaño se fragmentan en hebras más cortas de 19 a 24 bases.

---

### 204

En relación con el libro de Biología, los miARN maduros se ensamblan a proteínas y forman un complejo que evita la traducción del ARNm, ¿cómo se denomina?

- A. Complejo silenciador inducido por ARN (RISC)
- B. Complejo polycomb
- C. Enzima Dicer
- D. Cuerpo P

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · RISC

Los miARN maduros pueden, entonces, ensamblarse a proteínas, y formar un complejo denominado Complejo silenciador inducido por ARN (RISC, por sus siglas en inglés), que interviene uniéndose a moléculas de ARNm complementarias, evitando su traducción a proteínas.

---

### 205

De acuerdo con el libro de Biología, ¿qué desencadenan las secuencias de miARN que están perfectamente apareadas con el ARNm?

- A. La destrucción de la cadena de ARNm
- B. El bloqueo de la traducción sin destruir el ARNm
- C. La activación de la traducción del ARNm
- D. La metilación del ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · apareamiento perfecto

Las secuencias de miARN que están perfectamente apareadas desencadenan la destrucción de la cadena de ARNm, mientras las cadenas de miARN, cuyo apareamiento es imperfecto, bloquean la traducción de ARNm.

---

### 206

De conformidad con el libro de Biología, ¿qué hacen las cadenas de miARN cuyo apareamiento con el ARNm es imperfecto?

- A. Bloquean la traducción del ARNm
- B. Destruyen la cadena de ARNm
- C. Activan la transcripción del gen
- D. Metilan las colas de las histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · apareamiento imperfecto

Las cadenas de miARN, cuyo apareamiento es imperfecto, bloquean la traducción de ARNm.

---

### 207

En relación con el libro de Biología, ¿las proteínas de qué familia, parte del complejo RISC, facilitan el posicionamiento de los miARN y degradan los ARNm cuando el apareamiento es perfecto?

- A. La familia argonauta
- B. La familia polycomb
- C. La familia HOX
- D. La familia de las protaminas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · argonauta

Las proteínas de la familia argonauta, que son parte del complejo RISC, tienen el doble papel de facilitar el posicionamiento de los miARN y degradar los ARNm cuando el apareamiento es perfecto.

---

### 208

De acuerdo con el libro de Biología, cuando el apareamiento es imperfecto y se bloquea la traducción, ¿a qué vesículas citoplasmáticas se traslada el complejo RISC, donde otras enzimas degradan el ARNm?

- A. A los cuerpos P
- B. A los islotes de Langerhans
- C. A los cuerpos de Barr
- D. A los ribosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · cuerpos P

Cuando el apareamiento es imperfecto y se bloquea la traducción del ARNm, el complejo RISC se traslada a vesículas citoplasmáticas llamadas cuerpos P, en donde otras enzimas degradan el ARNm.

---

### 209

De conformidad con el libro de Biología, respecto de la especificidad de los blancos, ¿qué ocurre con un miARN individual?

- A. Puede tener como blanco a muchos ARNm diferentes, y un ARNm puede ser bloqueado por varios miARN diferentes
- B. Solo puede bloquear un único ARNm específico
- C. Cada ARNm solo puede ser bloqueado por un único miARN
- D. Los miARN no tienen a ningún ARNm como blanco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · miARN · especificidad

Cada miARN individual puede tener como blanco a muchos ARNm diferentes, así como la traducción de un ARNm individual puede ser bloqueada por varios miARN diferentes.

---

### 210

En relación con el libro de Biología, ¿qué describieron en 1998 los genetistas estadounidenses Craig Mello y Andrew Fire?

- A. El silenciamiento del ARNm por efecto de ARN cortos
- B. La estructura en doble hélice del ADN
- C. La primera modificación conocida de las histonas
- D. La inactivación del cromosoma X

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · recuadro 14-2, Mello y Fire

En 1998, los genetistas estadounidenses Craig Mello y Andrew Fire describieron el silenciamiento del ARNm por efecto de ARN cortos.

---

### 211

De acuerdo con el libro de Biología, ¿qué premio obtuvieron Mello y Fire por su contribución, y en qué año?

- A. El premio Nobel de Fisiología y Medicina en 2006
- B. El premio Nobel de Química en 1998
- C. El premio Nobel de la Paz en 2006
- D. El premio Nobel de Fisiología y Medicina en 1958

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 309
**Subtema:** epigenética · recuadro 14-2, premio Nobel

Por su contribución, Mello y Fire obtuvieron el premio Nobel de Fisiología y Medicina en 2006, muy poco tiempo después de haber dado a conocer sus resultados.

---

### 212

De conformidad con el libro de Biología, según la fig. 14-12, ¿qué enzima recorre el ARN de doble cadena de los precursores de los miARN y lo fragmenta en segmentos más cortos?

- A. La enzima Dicer
- B. La proteína argonauta
- C. La ARN polimerasa
- D. La ADN metiltransferasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · miARN · enzima Dicer

Estas moléculas son procesadas por una enzima llamada Dicer, que recorre el ARN de doble cadena y lo fragmenta en segmentos más cortos.

---

### 213

En relación con el libro de Biología, según la fig. 14-12, los precursores de los miARN se pliegan sobre sí mismos y dan origen, ¿a qué?

- A. A horquillas de doble cadena que se mantienen unidas por puentes de hidrógeno
- B. A cadenas simples lineales sin estructura secundaria
- C. A islas CpG metiladas
- D. A nucleosomas compactos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · miARN · horquillas

Los miARN se forman a partir de precursores de moléculas más largas de ARN que se pliegan sobre sí mismas y dan origen a horquillas de doble cadena que se mantienen unidas por puentes de hidrógeno.

---

### 214

De acuerdo con el libro de Biología, según la fig. 14-12, de los segmentos cortos que produce la enzima Dicer, ¿qué ocurre con sus dos cadenas?

- A. Una se asocia con el complejo proteico RISC y la otra se degrada
- B. Ambas se asocian con el complejo RISC
- C. Ambas se degradan por completo
- D. Ambas se unen directamente al ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · miARN · RISC

Una de las cadenas de estos segmentos se asocia con un complejo proteico llamado RISC, y la otra se degrada.

---

### 215

De conformidad con el libro de Biología, ¿de qué tamaño son las moléculas de ARN interferente pequeño (ARNsi)?

- A. De 21 a 25 nucleótidos
- B. De 200 a 400 nucleótidos
- C. De 2 a 5 nucleótidos
- D. De 50 a 100 nucleótidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · ARNsi · tamaño

Estas moléculas tienen un tamaño de 21 a 25 nucleótidos y son producidas a partir de precursores de ARN de doble cadena que pueden variar en tamaño y origen.

---

### 216

En relación con el libro de Biología, ¿qué enzima procesa los precursores de doble cadena degradándolos hasta que adquieren el tamaño de los ARNsi?

- A. La enzima Dicer, una ARNasa citoplasmática
- B. La proteína argonauta
- C. La ADN polimerasa
- D. La ADN metiltransferasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · ARNsi · Dicer

Estos precursores son procesados por la enzima Dicer –una ARNasa citoplasmática– que los degrada hasta que adquieren el tamaño de los ARNsi, los cuales posteriormente se incorporan al complejo RISC.

---

### 217

De acuerdo con el libro de Biología, cuando los ARNsi se incorporan al complejo RISC se separan sus dos cadenas; ¿cuál se mantiene asociada al complejo y qué función cumple?

- A. Solo una, denominada guía, que identifica el ARNm con la secuencia complementaria
- B. Ambas cadenas, que se degradan mutuamente
- C. Solo la cadena que se degrada de inmediato
- D. Ninguna; el complejo queda vacío

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · ARNsi · cadena guía

Cuando los ARNsi se incorporan al complejo se separan las dos cadenas de ARN, de las cuales solo una –denominada guía– se mantiene asociada al complejo. Su función consiste en identificar el ARNm con la secuencia complementaria.

---

### 218

De conformidad con el libro de Biología, cuando el ARNsi identifica el ARNm complementario, ¿qué desencadena su interacción?

- A. El corte del ARNm y su posterior degradación
- B. El bloqueo reversible de la traducción, sin cortar el ARNm
- C. La activación de la transcripción del gen
- D. La metilación de las islas CpG

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · ARNsi · degradación del ARNm

La interacción entre el ARNsi y este ARNm desencadena el corte del ARNm y su posterior degradación.

---

### 219

En relación con el libro de Biología, ¿por qué tiene particular importancia la interferencia por ARNsi como estrategia de defensa?

- A. Porque muchos ARN de doble cadena se originan a partir de virus transponibles, y los ARNsi asociados a RISC permitirían degradar agentes potencialmente dañinos
- B. Porque los ARNsi sintetizan nuevas proteínas de defensa
- C. Porque los ARNsi reparan el ADN dañado por los virus
- D. Porque los ARNsi aumentan la expresión de los genes virales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · ARNsi · defensa antiviral

Esta variante de interferencia tiene particular importancia como estrategia de defensa. Muchos ARN de doble cadena se originan a partir de virus transponibles, al menos transitoriamente, en sus ciclos de vida. Con lo cual, los ARNsi generados, asociados al complejo proteico RISC, permitirían degradar agentes potencialmente dañinos.

---

### 220

De acuerdo con el libro de Biología, los ARNsi también se asocian con otros complejos proteicos que median la metilación del ADN y otras modificaciones de las histonas para evitar la expresión de genes específicos; ¿cómo se denominan?

- A. Silenciamiento transcripcional inducido por ARN (RITS)
- B. Complejo silenciador inducido por ARN (RISC)
- C. Proteínas de la familia polycomb
- D. Enzima Dicer

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 310
**Subtema:** epigenética · ARNsi · RITS

Estos ARNsi también se asocian con otros complejos proteicos denominados silenciamiento transcripcional inducido por ARN (RITS, por su sigla en inglés), que median la metilación del ADN y otras modificaciones epigenéticas de las histonas, evitando la expresión de los genes específicos.

---
### 221

De acuerdo con el libro de Biología, ¿cuántas bases tienen los ARNpi?

- A. Entre 26 y 31 bases
- B. Entre 19 y 24 bases
- C. Entre 21 y 25 bases
- D. Al menos 200 bases

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · tamaño

Los ARNpi tienen entre 26 y 31 bases.

---

### 222

De conformidad con el libro de Biología, ¿qué enzima no interviene en la generación de los ARNpi?

- A. La enzima Dicer
- B. La ARN polimerasa
- C. La ADN metil transferasa
- D. La ADN polimerasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · generación

Son un poco más largos que los miARN y ARNsi, y su generación no involucra a la enzima Dicer.

---

### 223

En relación con el libro de Biología, los ARNpi dejan el núcleo después de ser transcriptos; ¿a qué tipo de proteína se unen?

- A. A un tipo de proteína llamada PIWI
- B. A un tipo de proteína llamada argonauta
- C. A las proteínas de la familia polycomb
- D. A las proteínas Tet

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · proteína PIWI

Los ARNpi dejan el núcleo después de ser transcriptos y se unen a un tipo de proteína llamada PIWI.

---

### 224

De acuerdo con el libro de Biología, ¿a qué secuencias se unen los ARNpi?

- A. A secuencias complementarias de los ARN que son activamente transcriptas del ADN repetitivo
- B. A las islas CpG situadas en las regiones promotoras de los genes
- C. A las secuencias promotoras de los genes HOX
- D. A las colas de las histonas que asoman del nucleosoma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · unión al ADN repetitivo

Los ARNpi se unen a secuencias complementarias de los ARN que son activamente transcriptas del ADN repetitivo [...].

---

### 225

De conformidad con el libro de Biología, ¿qué hacen las proteínas PIWI unidas simultáneamente?

- A. Reclutan a otras que metilan el ADN cercano, lo que impide que ocurra la transcripción
- B. Reclutan a otras que demetilan el ADN cercano, lo que permite que ocurra la transcripción
- C. Acetilan las colas de las histonas cercanas, lo que descompacta la cromatina
- D. Fragmentan el ARN de doble cadena en el citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · proteínas PIWI y metilación

A su vez, las proteínas PIWI unidas simultáneamente reclutan a otras que metilan el ADN cercano, lo que impide que ocurra la transcripción.

---

### 226

En relación con el libro de Biología, ¿por qué se señala frecuentemente este fenómeno como un proceso de vital importancia?

- A. Porque, de ambas maneras, regula potenciales daños que podrían causar los transposones
- B. Porque, de ambas maneras, repara los daños que la radiación causa al ADN
- C. Porque, de ambas maneras, aumenta la tasa de expresión de los genes del desarrollo
- D. Porque, de ambas maneras, conserva el patrón de metilación durante la mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · control de los transposones

Este fenómeno es frecuentemente señalado como un proceso de vital importancia dado que, de ambas maneras, regula potenciales daños que podrían causar los transposones.

---

### 227

De acuerdo con el libro de Biología, al estar involucrados en la metilación y compactación del genoma mediada por histonas, ¿qué evitan los ARNpi y el complejo ARNpi-proteína PIWI?

- A. Que los transposones se inserten en ese sitio del genoma, generando mutaciones con pérdida de función
- B. Que los transposones se transcriban en ese sitio del genoma, generando copias de sí mismos
- C. Que las islas CpG de ese sitio del genoma pierdan sus grupos metilo
- D. Que los nucleosomas de ese sitio del genoma se desmonten durante la diferenciación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARNpi · inserción de transposones

Al estar involucrados en la metilación y compactación del genoma mediada por histonas, los ARNpi y el complejo ARNpi-proteína PIWI evitan que los transposones se inserten en ese sitio del genoma, generando mutaciones con pérdida de función.

---

### 228

De conformidad con el libro de Biología, ¿cómo se consideraba a los ARN circulares hasta hace unos años?

- A. Hallazgos curiosos, productos atípicos o erróneos de fenómenos de corte y empalme o artefactos hallados en observaciones que eran finalmente descartadas
- B. Andamios que reclutaban proteínas reguladoras sobre la cromatina
- C. Cargamentos de residuos de las células, sin función conocida
- D. Variantes de histonas propias de las células espermáticas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARN circulares · antecedentes

Hasta hace unos años, se los consideraba hallazgos curiosos, productos atípicos o erróneos de fenómenos de corte y empalme o artefactos hallados en observaciones que eran finalmente descartadas.

---

### 229

En relación con el libro de Biología, en 2013, ¿qué grupos encontraron nuevos resultados similares entre sí sobre los ARN circulares?

- A. Los de Nikolaus Rajewsky de Alemania y los de Jorgen Kjems de Dinamarca
- B. Los de Craig Mello y los de Andrew Fire, de los Estados Unidos
- C. Los de Rudolf Jaenisch de Alemania y los de Susan Strome de los Estados Unidos
- D. Los de David Allis de los Estados Unidos y los de Dorothy Nelkin de Inglaterra

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARN circulares · Rajewsky y Kjems

En 2013, los grupos de Nikolaus Rajewsky de Alemania y de Jorgen Kjems de Dinamarca encontraron nuevos resultados similares entre sí.

---

### 230

De acuerdo con el libro de Biología, ¿de qué modo pueden los ARN circulares regular la expresión génica?

- A. Al eliminar de los ARNm ciertos miARN que bloquean su traducción a proteínas
- B. Al eliminar de los ARNm ciertos miARN que activan su traducción a proteínas
- C. Al metilar las islas CpG de las regiones promotoras
- D. Al reclutar proteínas polycomb sobre los genes HOX

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · ARN circulares · mecanismo

Hallaron que existen ARN circulares que pueden regular la expresión génica al eliminar de los ARNm ciertos miARN que bloquean su traducción a proteínas.

---

### 231

De conformidad con el libro de Biología, ¿de qué tamaño son las vesículas extracelulares?

- A. Pequeños compartimentos de 40 nm hasta 1 µm de diámetro
- B. Pequeños compartimentos de 26 a 31 nm de diámetro
- C. Pequeños compartimentos de 200 nm hasta 2 µm de diámetro
- D. Pequeños compartimentos de 1 µm hasta 40 µm de diámetro

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · tamaño

Las vesículas extracelulares son pequeños compartimentos de 40 nm hasta 1 µm de diámetro, producidas por la mayoría de las células.

---

### 232

En relación con el libro de Biología, ¿en qué fluidos biológicos se encuentran las vesículas extracelulares?

- A. Sangre, orina, líquido cefalorraquídeo, semen, líquido amniótico y leche materna
- B. Sangre, orina, linfa, bilis, jugo gástrico y saliva
- C. Sangre, orina, líquido cefalorraquídeo, sudor, lágrimas y bilis
- D. Sangre, linfa, líquido amniótico, saliva, sudor y jugo pancreático

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · dónde se encuentran

Se encuentran en los fluidos biológicos (sangre, orina, líquido cefalorraquídeo, semen, líquido amniótico y leche materna).

---

### 233

De acuerdo con el libro de Biología, ¿a qué vías puede responder la formación de las vesículas extracelulares?

- A. A la sección de la propia membrana plasmática o al ensamblado de vesículas intracelulares que luego se liberan al medio externo
- B. Al desprendimiento de la envoltura nuclear o a la fragmentación del retículo endoplasmático
- C. A la sección de la pared celular o al ensamblado de vesículas del aparato de Golgi
- D. A la fusión de dos células vecinas o a la ruptura de los lisosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · formación

Su formación puede responder a diversas vías: por sección de la propia membrana plasmática o por el ensamblado de vesículas intracelulares que luego se liberan al medio externo.

---

### 234

De conformidad con el libro de Biología, si bien su composición es heterogénea, ¿qué contienen todas las vesículas?

- A. Lípidos, proteínas y ácidos nucleicos
- B. Lípidos, proteínas y polisacáridos
- C. Proteínas, ácidos nucleicos y grupos metilo
- D. Lípidos, ácidos nucleicos y grupos acetilo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · composición

Si bien su composición es heterogénea, todas las vesículas contienen lípidos, proteínas y ácidos nucleicos.

---

### 235

En relación con el libro de Biología, el contenido selectivo de las vesículas se hace especialmente evidente cuando se analiza el ARN; ¿por qué?

- A. Porque las vesículas carecen de ARN ribosómico, pero están enriquecidas de ARNm, ARN pequeños no codificantes y ARN circulares
- B. Porque las vesículas carecen de ARNm, pero están enriquecidas de ARN ribosómico y de ARN de transferencia
- C. Porque las vesículas carecen de ARN pequeños no codificantes, pero están enriquecidas de ARN ribosómico
- D. Porque las vesículas carecen de ARN circulares, pero están enriquecidas de ARN ribosómico y de ARNm

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · contenido de ARN

Este contenido selectivo se hace especialmente evidente cuando se analiza el ARN, ya que las vesículas carecen de ARN ribosómico, pero están enriquecidas de ARNm, ARN pequeños no codificantes y ARN circulares.

---

### 236

De acuerdo con el libro de Biología, ¿cómo se consideró a las vesículas extracelulares al describirlas por primera vez?

- A. Cargamentos de residuos de las células
- B. Una notable forma de comunicación intercelular
- C. Artefactos de los fenómenos de corte y empalme
- D. Andamios de las proteínas reguladoras

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · interpretación

Si bien al describirlas por primera vez se las consideró cargamentos de residuos de las células, [...] se las interpreta como una notable forma de comunicación intercelular.

---

### 237

De conformidad con el libro de Biología, ¿en qué momentos se evalúa el papel de las vesículas en la transmisión de información de células somáticas a células germinales?

- A. Tanto en la maduración de los espermatozoides en el epidídimo como en la gametogénesis previa
- B. Tanto en la fecundación del oocito como en la primera división del cigoto
- C. Tanto en la gastrulación como en la organogénesis del embrión
- D. Tanto en la maduración de los oocitos en el ovario como en la implantación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · vesículas extracelulares · efectos en la herencia

Se evalúa el papel que pueden tener en la transmisión de información de células somáticas a células germinales, tanto en la maduración de los espermatozoides en el epidídimo como en la gametogénesis previa, con los consecuentes probables efectos en la herencia.

---

### 238

En relación con el libro de Biología, ¿qué se ha propuesto que podrían constituir las interacciones entre las distintas modificaciones epigenéticas?

- A. Una "sintonía fina" de la regulación de la transcripción génica
- B. Un "interruptor" de encendido y apagado de la transcripción génica
- C. Una "memoria de largo plazo" de la transcripción génica
- D. Un "andamio" de la transcripción génica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · interacciones · sintonía fina

Se ha propuesto que estas interacciones podrían constituir una "sintonía fina" de la regulación de la transcripción génica y conducir tanto a estados activos como silenciosos de la cromatina, expandiendo ambas condiciones a localizaciones adyacentes.

---

### 239

De acuerdo con el libro de Biología, las proteínas "decodificadoras" que se enlazan específicamente al ADN metilado y a otras marcas epigenéticas represivas pueden sumar otro proceso complementario; ¿en qué consiste?

- A. En reclutar proteínas "resaltadoras"
- B. En reclutar proteínas "borradoras"
- C. En reclutar proteínas "escritoras"
- D. En reclutar proteínas "lectoras"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · interacciones · proteínas resaltadoras

Las proteínas "decodificadoras" que se enlazan específicamente al ADN metilado y otras marcas epigenéticas represivas pueden sumar, además, otro proceso complementario, reclutando proteínas "resaltadoras".

---

### 240

De conformidad con el libro de Biología, ¿qué hacen esas nuevas proteínas "resaltadoras"?

- A. Metilan dinucleótidos CpGs cercanos y producen modificaciones represivas en las histonas o remodelan la cromatina hacia estados más densos
- B. Demetilan dinucleótidos CpGs cercanos y producen modificaciones activadoras en las histonas o remodelan la cromatina hacia estados más laxos
- C. Acetilan dinucleótidos CpGs cercanos y desmontan los nucleosomas vecinos
- D. Fosforilan dinucleótidos CpGs cercanos y trasladan la cromatina al centro del núcleo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · interacciones · proteínas resaltadoras

Las nuevas proteínas metilan dinucleótidos CpGs cercanos y producen modificaciones represivas en las histonas o remodelan la cromatina hacia estados más densos.

---

### 241

En relación con el libro de Biología, ¿qué pueden hacer, de modo análogo, los decodificadores que reconocen grupos acetilos y otras modificaciones activadoras de las histonas?

- A. Amplificar o reforzar señales
- B. Silenciar o apagar señales
- C. Retrasar o demorar señales
- D. Traducir o transcribir señales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 311
**Subtema:** epigenética · interacciones · amplificación de señales

De modo análogo, los decodificadores que reconocen grupos acetilos y otras modificaciones activadoras de las histonas pueden amplificar o reforzar señales.

---
### 242

De conformidad con el libro de Biología, según el modelo de la fig. 14-13, ¿qué alteran los factores ambientales que impactan en las células somáticas?

- A. El perfil de los ARN regulatorios presentes en las vesículas extracelulares
- B. El perfil de las proteínas "escritoras" presentes en el núcleo
- C. La secuencia de bases del ADN de las células somáticas
- D. El número de vesículas extracelulares que produce cada célula

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · herencia transgeneracional · fig. 14-13

En este modelo se propone que ciertos factores ambientales que impactan en las células somáticas alteran el perfil de los ARN regulatorios presentes en las vesículas extracelulares.

---

### 243

En relación con el libro de Biología, según el modelo de la fig. 14-13, ¿por qué vía llegan esas vesículas a las gónadas?

- A. Vía torrente sanguíneo
- B. Vía sistema linfático
- C. Vía líquido cefalorraquídeo
- D. Vía conductos del epidídimo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · herencia transgeneracional · fig. 14-13

Estas vesículas, vía torrente sanguíneo, llegan a las gónadas y se incorporan a las células germinales (espermatozoides u oocitos), alterando su patrón epigenético.

---

### 244

De acuerdo con el libro de Biología, según el modelo de la fig. 14-13, ¿qué ocurre cuando las vesículas se incorporan a las células germinales?

- A. Se altera el patrón epigenético de los espermatozoides u oocitos
- B. Se altera la secuencia de bases del ADN de los espermatozoides u oocitos
- C. Se detiene la maduración de los espermatozoides u oocitos
- D. Se duplica el número de cromosomas de los espermatozoides u oocitos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · herencia transgeneracional · fig. 14-13

Estas vesículas [...] se incorporan a las células germinales (espermatozoides u oocitos), alterando su patrón epigenético.

---

### 245

De conformidad con el libro de Biología, ¿de qué dependen la transcripción y la traducción de cada gen?

- A. De los ARN regulatorios y de las proteínas "escritoras", "borradoras" o "lectoras"
- B. Únicamente de los factores de transcripción que reconocen el promotor
- C. De la secuencia de bases del gen y de su posición en el cromosoma
- D. Del número de nucleosomas que rodean al gen

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · interacciones · transcripción y traducción

La transcripción y la traducción de cada gen dependen de los ARN regulatorios, las proteínas "escritoras", "borradoras" o "lectoras".

---

### 246

En relación con el libro de Biología, ¿qué otros procesos coordinan la transcripción y la traducción de cada gen?

- A. Los factores de transcripción, la metilación del ADN, la modificación de las histonas, la remodelación de la cromatina y la localización espacial en el núcleo
- B. Los factores de transcripción, la replicación del ADN, la duplicación de los centríolos y la migración de los cromosomas
- C. La metilación del ADN, la síntesis de protaminas, la formación de vesículas y la fecundación
- D. La modificación de las histonas, la mitosis, la meiosis y la gametogénesis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · interacciones · procesos coordinados

Todos estos procesos están también coordinados por factores de transcripción, por la metilación del ADN, la modificación de las histonas, la remodelación de la cromatina y la localización espacial en el núcleo, que trabajan en conjunto y en relación con fenómenos citoplasmáticos y ambientales.

---

### 247

De acuerdo con el libro de Biología, ¿cómo se denomina la combinación de todos los procesos epigenéticos concatenados temporo-espacialmente?

- A. Epigenotipo
- B. Epigenoma
- C. Paisaje epigenético
- D. Fenotipo del genotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · epigenotipo · definición

La combinación de todos los procesos epigenéticos concatenados temporo-espacialmente se denomina epigenotipo.

---

### 248

De conformidad con el libro de Biología, ¿cómo pueden ser interpretables los procesos que forman el epigenotipo?

- A. Solo en la historicidad de su desarrollo
- B. Solo en el instante en que se los mide
- C. Solo en el aislamiento de cada célula
- D. Solo en la secuencia del genoma completo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · epigenotipo · historicidad

Estos procesos solo pueden ser interpretables en la historicidad de su desarrollo.

---

### 249

En relación con el libro de Biología, ¿a qué contribuyen todos los procesos descritos en el capítulo y sus interrelaciones?

- A. A la comprensión de la estructura y el desenvolvimiento de los organismos como sistemas dinámicos complejos, que interactúan y se modulan entre sí y con el ambiente
- B. A la comprensión de la estructura del ADN como molécula estable e invariable a lo largo de la vida
- C. A la comprensión de las leyes de Mendel como explicación completa de la herencia
- D. A la comprensión del genotipo como único determinante del fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · epigenotipo · sistemas dinámicos complejos

Así, todos los procesos descritos en el capítulo y sus interrelaciones contribuyen a la comprensión de la estructura y el desenvolvimiento de los organismos como sistemas dinámicos complejos, que interactúan y se modulan entre sí y con el ambiente.

---

### 250

De acuerdo con el libro de Biología, los paisajes epigenéticos de cada célula se mantienen conservados en buena medida durante las mitosis; ¿qué permite eso?

- A. El sostén de ciertas características de las células generación tras generación
- B. La aparición de nuevas características en cada generación de células
- C. La reparación de las mutaciones acumuladas en el ADN
- D. El reemplazo del patrón de metilación en cada división

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · desarrollo embrionario · conservación en las mitosis

Los paisajes epigenéticos de cada célula se mantienen conservados en buena medida durante las mitosis; esto permite el sostén de ciertas características de las células generación tras generación.

---

### 251

De conformidad con el libro de Biología, ¿dónde se observa ese fenómeno?

- A. Tanto en células terminalmente diferenciadas (epidermis, mucosas, etc.) como durante el desarrollo embrionario
- B. Únicamente en las células terminalmente diferenciadas de la epidermis y las mucosas
- C. Únicamente durante el desarrollo embrionario temprano
- D. Tanto en las células germinales como en las células cancerosas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · desarrollo embrionario · dónde se observa

Este fenómeno se observa tanto en células terminalmente diferenciadas (epidermis, mucosas, etc.) como durante el desarrollo embrionario.

---

### 252

En relación con el libro de Biología, ¿cuáles son los dos momentos del desarrollo en los que ocurren cambios masivos en el paisaje epigenético de las células?

- A. El desarrollo embrionario temprano y la generación de las células de la línea germinal (espermáticas y oocitos) en el embrión
- B. La fecundación y el nacimiento
- C. La gastrulación y la organogénesis
- D. La pubertad y la senescencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · desarrollo embrionario · los dos momentos

Se identifican al menos dos momentos en el desarrollo en los que ocurren cambios masivos en el paisaje epigenético de las células: el primero acontece durante el desarrollo embrionario temprano, y el segundo opera durante la generación de las células de la línea germinal (espermáticas y oocitos) en el embrión.

---

### 253

De acuerdo con el libro de Biología, ¿qué es la célula huevo?

- A. La que resulta de la fusión del espermatozoide y el oocito, y es el primer estadio embrionario
- B. La que resulta de la primera división del oocito, y es el primer estadio embrionario
- C. La célula germinal madura que se forma en las gónadas del embrión
- D. La célula somática que da origen a la línea germinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · desarrollo temprano · célula huevo

La célula huevo, que resulta de la fusión del espermatozoide y el oocito, es el primer estadio embrionario.

---

### 254

De conformidad con el libro de Biología, ¿qué elementos propios del citoplasma y del pronúcleo del espermatozoide tienen gran significado en el desarrollo temprano del embrión?

- A. PLCtheta y protaminas
- B. Histonas y nucleosomas
- C. Proteínas Tet y ADN metil transferasas
- D. Miosina y actina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 312
**Subtema:** epigenética · desarrollo temprano · aporte del espermatozoide

Se ha descrito la presencia de elementos propios del citoplasma y del pronúcleo del espermatozoide, los cuales tienen gran significado en el desarrollo temprano del embrión (p. ej., PLCtheta, protaminas, etc.).

---
### 255

En relación con el libro de Biología, ¿qué se observa en el embrión recién formado?

- A. Una disposición asimétrica de proteínas, ARN y otras moléculas, tanto en el núcleo como en el citoplasma
- B. Una disposición homogénea de proteínas, ARN y otras moléculas en todo el citoplasma
- C. Una disposición asimétrica de los cromosomas dentro del núcleo
- D. Una disposición homogénea de los grupos metilo a lo largo del genoma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · asimetría del embrión

En el embrión recién formado se observa una disposición asimétrica de proteínas, ARN y otras moléculas, tanto en el núcleo como en el citoplasma, que, a su vez, no son igualmente distribuidas a las células hijas desde la primera división celular.

---

### 256

De acuerdo con el libro de Biología, ¿qué son las blastómeras?

- A. Las primeras células hijas de la célula huevo
- B. Las primeras células germinales primordiales del embrión
- C. Las células que forman la pared del útero durante la implantación
- D. Las células somáticas terminalmente diferenciadas del embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · blastómeras

Se observen diferencias de esta naturaleza entre las blastómeras (primeras células hijas de la célula huevo), aunque su fenotipo y potencialidad del desarrollo sean similares.

---

### 257

De conformidad con el libro de Biología, ¿cuándo ocurren las primeras mitosis en las que todas las blastómeras manifiestan un "reseteo epigenético"?

- A. En la primera semana de desarrollo embrionario
- B. En el primer mes de desarrollo embrionario
- C. Al promediar el primer trimestre de desarrollo
- D. En la primera hora posterior a la fecundación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · reseteo epigenético

En las primeras mitosis, que ocurren en la primera semana de desarrollo embrionario, todas las blastómeras manifiestan un "reseteo epigenético".

---

### 258

En relación con el libro de Biología, ¿cómo se denomina el proceso en el que la cantidad total de metilaciones del ADN de los dinucleótidos CpG cae y luego empieza a aumentar nuevamente?

- A. Reprogramación epigenética
- B. Remetilación del genoma del cigoto
- C. Impronta parental
- D. Canalización del paisaje epigenético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · reprogramación epigenética

La cantidad total de metilaciones del ADN de los dinucleótidos CpG cae y luego empieza a aumentar nuevamente, en un proceso que se denomina reprogramación epigenética.

---

### 259

De acuerdo con el libro de Biología, ¿cómo es demetilado el ADN heredado del oocito?

- A. En forma pasiva, mientras las células se dividen
- B. En forma activa, en un proceso mucho más rápido
- C. En forma activa, por medio de las proteínas Tet
- D. No es demetilado: conserva su patrón original

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · demetilación del ADN del oocito

El ADN heredado del oocito es demetilado en forma pasiva mientras las células se dividen.

---

### 260

De conformidad con el libro de Biología, el ADN heredado del espermatozoide se encuentra altamente condensado con protaminas; ¿cómo es demetilado?

- A. Es activamente demetilado en un proceso mucho más rápido
- B. Es pasivamente demetilado en un proceso mucho más lento
- C. Es activamente demetilado en un proceso mucho más lento
- D. Es pasivamente demetilado a la misma velocidad que el del oocito

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · demetilación del ADN del espermatozoide

El ADN heredado del espermatozoide, que se encuentra altamente condensado con protaminas, es activamente demetilado en un proceso mucho más rápido.

---

### 261

En relación con el libro de Biología, ¿qué explican esas diferentes velocidades de demetilación?

- A. Una transcripción diferencial de ambos genomas, que son características del desarrollo normal
- B. La detención de la transcripción de ambos genomas hasta la primera diferenciación
- C. La pérdida definitiva del genoma aportado por el espermatozoide
- D. La aparición de mutaciones en ambos genomas durante la primera semana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · transcripción diferencial

Estas diferentes velocidades explican una transcripción diferencial de ambos genomas, que son características del desarrollo normal.

---

### 262

De acuerdo con el libro de Biología, ¿a qué acompaña la remetilación del genoma del cigoto?

- A. A la primera diferenciación celular
- B. A la primera división celular
- C. A la formación de las células germinales primordiales
- D. A la implantación del embrión en el útero

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · remetilación del cigoto

La remetilación del genoma del cigoto acompaña la primera diferenciación celular.

---

### 263

De conformidad con el libro de Biología, ¿dónde se establece la divergencia inicial en los patrones de modificación epigenética?

- A. En las primeras divisiones asimétricas de las blastómeras
- B. En la fusión del espermatozoide y el oocito
- C. En la reprogramación de las células germinales primordiales
- D. En la implantación del embrión en el útero

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · divergencia inicial

Esta divergencia inicial en los patrones de modificación epigenética se establece en las primeras divisiones asimétricas de las blastómeras.

---

### 264

En relación con el libro de Biología, ¿qué dirige el paisaje epigenético distintivo de cada una de las blastómeras resultantes?

- A. La producción de una combinación única de nuevos reguladores epigenéticos y factores de transcripción
- B. La producción de una combinación idéntica de reguladores epigenéticos en todas las células
- C. La detención de la producción de factores de transcripción hasta la gastrulación
- D. La producción de nuevas protaminas que condensan el ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · paisaje de cada blastómera

El paisaje epigenético distintivo de cada una de las blastómeras resultantes dirige la producción de una combinación única de nuevos reguladores epigenéticos y factores de transcripción, en un proceso que amplifica las diferencias iniciales de esas células.

---

### 265

De acuerdo con el libro de Biología, según la fig. 14-14, ¿a qué contribuyen los sucesivos ciclos de división celular?

- A. A definir y sostener patrones epigenéticos diferenciales
- B. A borrar los patrones epigenéticos diferenciales establecidos antes
- C. A igualar la distribución de las moléculas entre las células hijas
- D. A detener la diferenciación celular hasta el segundo trimestre

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · desarrollo temprano · fig. 14-14

Los sucesivos ciclos de división celular (que repiten este fenómeno) contribuyen a definir y sostener patrones epigenéticos diferenciales.

---

### 266

De conformidad con el libro de Biología, ¿cuándo atraviesan las células germinales primordiales un segundo momento de reprogramación epigenética?

- A. Al promediar el primer trimestre de desarrollo
- B. En la primera semana de desarrollo embrionario
- C. Al promediar el tercer trimestre de desarrollo
- D. Después del nacimiento, en la pubertad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · línea germinal · segundo momento

Al promediar el primer trimestre de desarrollo, un linaje celular particular –el de las células germinales primordiales (que dará origen a los espermatozoides u oocitos)– atraviesa un segundo momento de [...] epigenética.

---

### 267

En relación con el libro de Biología, en ese segundo momento, ¿qué ocurre con el ADN proveniente de uno y otro progenitor?

- A. Se demetilan en forma simultánea para posteriormente adquirir un patrón diferencial específico
- B. Se demetilan uno después del otro, a velocidades distintas
- C. Sólo se demetila el proveniente del espermatozoide
- D. Se remetilan en forma simultánea hasta igualar sus patrones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · línea germinal · demetilación simultánea

En este momento, tanto el ADN proveniente de un progenitor como el proveniente del otro progenitor se demetilan en forma simultánea para posteriormente adquirir un patrón diferencial específico.

---

### 268

De acuerdo con el libro de Biología, ¿qué implica eso para las células germinales?

- A. Que tendrán un patrón de metilación diferente al de las células somáticas del individuo
- B. Que tendrán el mismo patrón de metilación que las células somáticas del individuo
- C. Que perderán definitivamente todos sus grupos metilo
- D. Que conservarán el patrón de metilación de la célula huevo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · línea germinal · patrón propio

Esto implica que las células germinales tendrán un patrón de metilación diferente al de las células somáticas del individuo.

---

### 269

De conformidad con el libro de Biología, algunas porciones del genoma escapan a ambos fenómenos de reprogramación epigenética y se mantienen metiladas; ¿qué media esa represión continua?

- A. El ARNpi
- B. El ARNsi
- C. Los ARN largos no codificantes
- D. Las protaminas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · línea germinal · porciones que escapan

Esto se ejecuta mediante una represión continua de estos segmentos y se encuentra mediada por el ARNpi.

---

### 270

En relación con el libro de Biología, ¿qué muestran diversas investigaciones sobre los genes derivados de cada gameto?

- A. Que la expresión de ciertos genes derivados del oocito coexiste con la represión de los mismos genes derivados del espermatozoide, y viceversa
- B. Que los genes derivados del oocito se expresan siempre y los derivados del espermatozoide se reprimen siempre
- C. Que los genes derivados de ambos gametos se expresan siempre por igual
- D. Que los genes derivados de ambos gametos permanecen reprimidos hasta el nacimiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · impronta parental · expresión y represión

Diversas investigaciones muestran que la expresión de ciertos genes derivados del oocito coexiste con la represión de los mismos genes derivados del espermatozoide, y viceversa.

---

### 271

De acuerdo con el libro de Biología, ¿qué comportamientos celulares regulan los genes que se transcriben sólo en uno de los cromosomas homólogos?

- A. Proliferación, diferenciación, muerte y movimiento celular
- B. Proliferación, respiración, digestión y excreción celular
- C. Diferenciación, fecundación, implantación y gestación
- D. Muerte, movimiento, condensación y descondensación de la cromatina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · impronta parental · genes regulatorios

Algunos genes regulatorios de comportamientos celulares que ocurren durante el desarrollo (proliferación, diferenciación, muerte y movimiento celular) que se transcriben solo en uno de los cromosomas homólogos, se encuentran en estos sitios metilados.

---

### 272

De conformidad con el libro de Biología, ¿en qué se considera que actuaría este fenómeno?

- A. En la prevención de alteraciones o errores de replicación y mutaciones
- B. En la aceleración de la replicación del ADN durante las primeras mitosis
- C. En la reparación de las mutaciones ya ocurridas en el genoma
- D. En el aumento de la variabilidad genética de la descendencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · impronta parental · función

Si bien se considera que este fenómeno actuaría en la prevención de alteraciones o errores de replicación y mutaciones [...].

---

### 273

En relación con el libro de Biología, ¿qué implica el silenciamiento permanente de alguno de esos genes?

- A. La sola expresión de la variante presente en uno de los dos progenitores, con manifestaciones fenotípicas particulares, dependiendo de la especie
- B. La expresión simultánea de las variantes presentes en ambos progenitores
- C. La pérdida completa del gen en la descendencia
- D. La aparición de una mutación en el cromosoma homólogo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · impronta parental · silenciamiento permanente

También resulta llamativo que el silenciamiento permanente de alguno de ellos implica la sola expresión de la variante presente en uno de los dos progenitores, con manifestaciones fenotípicas particulares, dependiendo de la especie.

---

### 274

De acuerdo con el libro de Biología, ¿cómo se caracteriza la mola hidatiforme?

- A. Por la presencia de un crecimiento anormal de un embrión no viable implantado y proliferante en el útero
- B. Por la ausencia de implantación del embrión en el útero
- C. Por la presencia de dos embriones viables implantados en el útero
- D. Por la implantación del embrión fuera del útero

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · impronta parental · mola hidatiforme

Un modelo utilizado en la práctica clínica de la medicina es el de la patogenia de la mola hidatiforme, un trastorno del embarazo que se caracteriza por la presencia de un crecimiento anormal de un embrión no viable implantado y proliferante en el útero.

---

### 275

De conformidad con el libro de Biología, a nivel experimental, ¿qué se observó si el pronúcleo del oocito es eliminado?

- A. Que el desarrollo puede comenzar a partir de la incorporación de dos pronúcleos de espermatozoides
- B. Que el desarrollo puede comenzar a partir de la incorporación de dos pronúcleos de oocitos
- C. Que el desarrollo se detiene de manera irreversible
- D. Que el desarrollo continúa sólo con el pronúcleo del espermatozoide

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 313
**Subtema:** epigenética · impronta parental · modelo experimental

A nivel experimental, se observó que, si el pronúcleo del oocito es eliminado, el desarrollo puede comenzar a partir de la incorporación de dos pronúcleos de espermatozoides.

---
### 276

En relación con el libro de Biología, en ese caso, pese a que el juego cromosómico se ha restablecido durante la fecundación, ¿qué se evidencia en el desarrollo embrionario?

- A. Alteraciones en la proliferación celular y desarrollo de patrones morfológicos y tisulares anormales
- B. Una detención completa de la proliferación celular desde la primera división
- C. La formación de dos embriones viables en lugar de uno
- D. La pérdida de la mitad de los cromosomas del embrión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · impronta parental · mola hidatiforme

Pese a que el juego cromosómico se ha restablecido durante la fecundación, en el desarrollo embrionario se evidencian alteraciones en la proliferación celular y desarrollo de patrones morfológicos y tisulares anormales.

---

### 277

De acuerdo con el libro de Biología, ¿qué pone en evidencia ese fenómeno?

- A. Que los pronúcleos de ambos progenitores no son equivalentes
- B. Que los pronúcleos de ambos progenitores son totalmente equivalentes
- C. Que el pronúcleo del oocito es prescindible en el desarrollo
- D. Que la fecundación no restablece el juego cromosómico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · impronta parental · pronúcleos no equivalentes

Este fenómeno pone en evidencia que los pronúcleos de ambos progenitores no son equivalentes.

---

### 278

De conformidad con el libro de Biología, ¿qué existe entre ambos sexos en los sistemas de determinación sexual XX/XY?

- A. Un desbalance en la carga genética
- B. Un desbalance en el número total de cromosomas
- C. Un desbalance en la cantidad de ADN mitocondrial
- D. Un desbalance en el número de genes autosómicos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · desbalance

En los sistemas de determinación sexual XX/XY existe un desbalance en la carga genética entre ambos sexos.

---

### 279

En relación con el libro de Biología, cuando el par sexual es XX, ¿qué hacen las células?

- A. Inactivan a uno de los dos cromosomas X
- B. Inactivan a los dos cromosomas X
- C. Duplican a uno de los dos cromosomas X
- D. Eliminan a uno de los dos cromosomas X

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · par XX

Cuando el par sexual es XX, las células inactivan a uno de los dos cromosomas X.

---

### 280

De acuerdo con el libro de Biología, ¿cómo se denomina al cromosoma X inactivado?

- A. Corpúsculo de Barr
- B. Corpúsculo de Golgi
- C. Cuerpo P
- D. Cromosoma homólogo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · corpúsculo de Barr

Al cromosoma X inactivado se lo denomina corpúsculo de Barr.

---

### 281

De conformidad con el libro de Biología, de acuerdo con la teoría de compensación de dosis génica, ¿qué logra la inactivación?

- A. Iguala la expresión de genes del cromosoma X en ambos sexos
- B. Duplica la expresión de genes del cromosoma X en el sexo femenino
- C. Suprime la expresión de genes del cromosoma X en ambos sexos
- D. Iguala el número de cromosomas X en ambos sexos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · compensación de dosis génica

De acuerdo con la teoría de compensación de dosis génica, la inactivación iguala a la expresión de genes del cromosoma X en ambos sexos.

---

### 282

En relación con el libro de Biología, ¿qué coopera en el establecimiento y mantenimiento de los estados de la cromatina estables en este fenómeno?

- A. La metilación del ADN y las modificaciones de histonas, guiadas en ambos casos por ARN largos no codificantes
- B. La metilación del ADN y las modificaciones de histonas, guiadas en ambos casos por ARN interferentes pequeños
- C. La replicación del ADN y la duplicación de los centríolos
- D. Las protaminas y los factores de transcripción del cromosoma Y

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · procesos implicados

Tanto la metilación del ADN como las modificaciones de histonas, guiadas en ambos casos por ARN largos no codificantes (ARNlnc), cooperan en el establecimiento y mantenimiento de los estados de la cromatina estables.

---

### 283

De acuerdo con el libro de Biología, en la primera etapa de reprogramación epigenética, ¿de qué manera inicia el fenómeno de inactivación un cromosoma X de cada célula?

- A. De manera progresiva y al azar
- B. De manera brusca y ordenada
- C. De manera progresiva, siempre en el cromosoma X de origen paterno
- D. De manera brusca, siempre en el cromosoma X de origen materno

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · progresiva y al azar

En la primera etapa de reprogramación epigenética, un cromosoma X de cada célula inicia el fenómeno de inactivación, de manera progresiva y al azar.

---

### 284

De conformidad con el libro de Biología, ¿a qué corresponde la denominación en inglés del gen XIST?

- A. *X-inactive specific transcript*
- B. *X-inactive silencing transcript*
- C. *X-inherited specific transcript*
- D. *X-linked silencing transcript*

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · gen XIST

En este proceso interviene un gen denominado XIST (por su denominación en inglés, X-inactive specific transcript), que se encuentra en el cromosoma X.

---

### 285

En relación con el libro de Biología, ¿qué codifica el gen XIST?

- A. Una gran molécula de ARNlnc que, al sintetizarse, se ubica progresivamente a lo largo del cromosoma
- B. Una gran molécula de ADN que se ubica progresivamente a lo largo del cromosoma
- C. Una proteína "escritora" que metila el cromosoma completo
- D. Un ARN interferente pequeño que degrada el ARNm del cromosoma X

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · producto del gen XIST

Este gen codifica una gran molécula de ARNlnc que, al sintetizarse, se ubica progresivamente a lo largo del cromosoma.

---

### 286

De acuerdo con el libro de Biología, ¿qué hace ese ARNlnc?

- A. Inactiva casi todos los restantes genes del cromosoma X que será inactivado, pero no se une al otro cromosoma X
- B. Inactiva casi todos los genes de ambos cromosomas X por igual
- C. Activa los genes del cromosoma X que será inactivado
- D. Se une a los dos cromosomas X y los compacta simultáneamente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · acción del ARNlnc

Este ARNlnc inactiva casi todos los restantes genes del cromosoma X que será inactivado, pero no se une al otro cromosoma X.

---

### 287

De conformidad con el libro de Biología, ¿qué son los corpúsculos de Barr?

- A. Cromosomas X recubiertos por el ARNlnc de XIST
- B. Cromosomas X recubiertos por protaminas
- C. Cromosomas X recubiertos por proteínas de la familia polycomb
- D. Cromosomas X despojados de sus histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · corpúsculos de Barr

Así, los corpúsculos de Barr son cromosomas X recubiertos por el ARNlnc de XIST.

---

### 288

En relación con el libro de Biología, ¿qué ocurre con el gen XIST en el cromosoma X que no se inactiva?

- A. Permanece reprimida su expresión
- B. Se expresa con mayor intensidad
- C. Se elimina del cromosoma
- D. Se duplica junto con el resto del cromosoma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · XIST en el X activo

En el cromosoma X que no se inactiva permanece reprimida la expresión del gen XIST.

---

### 289

De acuerdo con el libro de Biología, ¿dónde se observa la reactivación de los cromosomas X silenciados y qué favorece?

- A. Sólo en la línea germinal, y favorece una mayor variabilidad genómica en la próxima generación
- B. Sólo en las células somáticas, y favorece una mayor estabilidad del genoma
- C. En todas las células del individuo adulto, y favorece la reparación del ADN
- D. Sólo en las células terminalmente diferenciadas, y favorece el mosaicismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · reactivación

Solo en la línea germinal observamos reactivación de los cromosomas X silenciados, un fenómeno que favorece una mayor variabilidad genómica en la próxima generación.

---

### 290

De conformidad con el libro de Biología, este fenómeno ocurre de manera independiente en cada célula del embrión temprano; ¿qué más se dice de él?

- A. Que es heredable a toda su progenie celular
- B. Que se borra en cada división celular posterior
- C. Que sólo se transmite a la línea germinal
- D. Que se restablece al azar en cada mitosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · herencia celular

Este es un fenómeno que ocurre de manera independiente en cada célula del embrión temprano y es heredable a toda su progenie celular, por lo cual el cromosoma X que fue inactivado permanecerá en ese estado en las células terminalmente diferenciadas derivadas de ellas.

---

### 291

En relación con el libro de Biología, ¿qué representa el fenómeno de carga genética diversa en distintas poblaciones celulares de un mismo individuo?

- A. Una forma de mosaicismo, que da lugar a expresiones fenotípicas particulares en distintas especies
- B. Una forma de mutación somática, que da lugar a enfermedades hereditarias
- C. Una forma de impronta parental, que da lugar a la expresión de un solo progenitor
- D. Una forma de compensación de dosis génica entre ambos sexos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · mosaicismo

El fenómeno de carga genética diversa en distintas poblaciones celulares en un mismo individuo representa una forma de mosaicismo, que da lugar a expresiones fenotípicas particulares en distintas especies.

---

### 292

De acuerdo con el libro de Biología, según la fig. 14-15, ¿de qué células es la microfotografía en la que se destacan los corpúsculos de Barr?

- A. De la mucosa bucal
- B. De la epidermis
- C. De la mucosa intestinal
- D. De la línea germinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · fig. 14-15

Microfotografía de células de la mucosa bucal, en la que se destacan los corpúsculos de Barr.

---

### 293

De conformidad con el libro de Biología, según la fig. 14-16, ¿por qué no se expresa el gen XIST en el cromosoma X activo?

- A. Porque se encuentra metilado
- B. Porque se encuentra acetilado
- C. Porque ha sido eliminado del cromosoma
- D. Porque su ARNlnc es degradado apenas se sintetiza

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · inactivación del cromosoma X · fig. 14-16

En el cromosoma X activo, el gen XIST no se expresa, pues se encuentra metilado, por lo cual no se produce el ARNlnc y el resto de los genes presentes en este cromosoma se expresarán.

---

### 294

En relación con el libro de Biología, ¿qué ayuda a explicar la importancia de los factores no genéticos en el cambio de los patrones de modificación epigenética?

- A. Por qué los gemelos idénticos no son realmente idénticos
- B. Por qué los gemelos idénticos comparten la misma secuencia de ADN
- C. Por qué los hermanos no gemelos se parecen entre sí
- D. Por qué los gemelos idénticos son siempre del mismo sexo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 314
**Subtema:** epigenética · gemelos · factores no genéticos

La importancia de los factores no genéticos en el cambio de los patrones de modificación epigenética ayuda a explicar por qué los gemelos idénticos no son realmente idénticos.

---
### 295

En relación con el libro de Biología, ¿qué brindan los hermanos que comparten la misma secuencia de ADN pero acumulan experiencias diferentes y exposiciones ambientales distintas a lo largo de la vida?

- A. Una oportunidad única para estudiar el impacto de la epigenética en la salud humana
- B. Una oportunidad única para estudiar el impacto de las mutaciones en la salud humana
- C. Una prueba de que el ambiente no modifica el fenotipo
- D. Un modelo para estudiar la inactivación del cromosoma X

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · valor del modelo

Hermanos que comparten la misma secuencia de ADN, pero que acumulan experiencias diferentes y exposiciones ambientales distintas a lo largo de la vida, brindan una oportunidad única para estudiar el impacto de la epigenética en la salud humana.

---

### 296

De acuerdo con el libro de Biología, en 2005, ¿quién comparó la cromatina de pares de gemelos idénticos a diferentes edades?

- A. El genetista español Manel Esteller
- B. El genetista alemán Nikolaus Rajewsky
- C. El genetista estadounidense David Allis
- D. El genetista danés Jorgen Kjems

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · Manel Esteller

En 2005, el genetista español Manel Esteller comparó la cromatina de pares de gemelos idénticos a diferentes edades.

---

### 297

De conformidad con el libro de Biología, ¿qué rango de edades abarcó esa comparación?

- A. Desde el nacimiento hasta la vejez
- B. Desde la concepción hasta el nacimiento
- C. Desde la infancia hasta la adultez temprana
- D. Desde la adolescencia hasta la vejez

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · rango de edades

Comparó la cromatina de pares de gemelos idénticos a diferentes edades, desde el nacimiento hasta la vejez.

---

### 298

En relación con el libro de Biología, ¿qué se encontró al comparar a los gemelos idénticos a lo largo del tiempo?

- A. Que son epigenéticamente similares al nacer, pero la metilación de sus ADN y, en especial, sus patrones de modificación de histonas divergen gradualmente con el tiempo
- B. Que son epigenéticamente distintos al nacer y se van pareciendo con el tiempo
- C. Que su metilación permanece idéntica durante toda la vida
- D. Que sólo cambian sus patrones de metilación, y no los de modificación de histonas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · divergencia con el tiempo

Los gemelos son epigenéticamente similares al nacer, pero la metilación de sus ADN y, en especial, sus patrones de modificación de histonas divergen gradualmente con el tiempo.

---

### 299

De acuerdo con el libro de Biología, ¿entre qué gemelos se observan mayores diferencias?

- A. Entre los que han pasado más tiempo separados
- B. Entre los que han pasado más tiempo juntos
- C. Entre los que nacieron con menor peso
- D. Entre los que comparten la misma ocupación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · tiempo separados

Se observan mayores diferencias entre los gemelos que han pasado más tiempo separados.

---

### 300

De conformidad con el libro de Biología, ¿a quiénes comparó el experimento realizado por la NASA entre 2015 y 2016?

- A. A dos astronautas gemelos idénticos, Scott y Mark Kelly
- B. A dos astronautas hermanos no gemelos, Scott y Mark Kelly
- C. A un astronauta y a un grupo de control en tierra
- D. A dos astronautas gemelos que viajaron juntos al espacio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · experimento de la NASA

Un experimento verdaderamente único realizado por la NASA (entre 2015 y 2016), que comparó a dos astronautas gemelos idénticos, Scott y Mark Kelly.

---

### 301

En relación con el libro de Biología, ¿cuánto duró la misión que cumplió uno de esos gemelos y dónde?

- A. Un año, en la Estación Espacial Internacional
- B. Seis meses, en la Estación Espacial Internacional
- C. Un año, en la superficie lunar
- D. Dos años, en la Estación Espacial Internacional

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · gemelos · misión de un año

Durante y después de la misión de un año que cumplió uno de ellos en la Estación Espacial Internacional.

---

### 302

De acuerdo con el libro de Biología, ¿cómo se denomina al híbrido de león y tigre?

- A. Ligre
- B. Tigón
- C. Ligresa
- D. Tigona

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · ligre

Se trataba de un híbrido de león y tigre, al que se denomina "ligre".

---

### 303

De conformidad con el libro de Biología, ¿por qué es muy improbable que se produzca un apareamiento entre tigres y leones en condiciones naturales?

- A. Porque están aislados reproductivamente por barreras ecológicas y comportamentales
- B. Porque están aislados reproductivamente por barreras genéticas y cromosómicas
- C. Porque sus períodos reproductivos ocurren en estaciones distintas
- D. Porque sus gametos son incompatibles

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · aislamiento reproductivo

Están aislados reproductivamente por barreras ecológicas y comportamentales, de modo que es muy improbable que se produzca un apareamiento entre ambos en condiciones naturales.

---

### 304

En relación con el libro de Biología, cuando ocurren esos encuentros en zoológicos u otros escenarios generados por los humanos, ¿qué influye notablemente en el resultado?

- A. El sexo de los progenitores
- B. La edad de los progenitores
- C. El tamaño de los progenitores
- D. La estación del año en que ocurre el cruce

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · sexo de los progenitores

Cuando, ocasionalmente, ocurren estos encuentros en zoológicos u otros escenarios generados por los humanos, el sexo de los progenitores influye notablemente en el resultado.

---

### 305

De acuerdo con el libro de Biología, ¿de qué cruce resulta el ligre?

- A. Del cruce de un león macho con una tigresa
- B. Del cruce de un tigre macho con una leona
- C. Del cruce de dos leones de distintas subespecies
- D. Del cruce de dos tigres de distintas subespecies

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · origen del ligre

El ligre es el híbrido resultante del cruce de un león macho con una tigresa.

---

### 306

De conformidad con el libro de Biología, ¿cuánto puede medir y pesar el ligre?

- A. Casi cuatro metros y 400 kilos
- B. Casi tres metros y 300 kilos
- C. Casi cuatro metros y 180 kilos
- D. Casi cinco metros y 500 kilos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · tamaño del ligre

Puede medir casi cuatro metros y pesar 400 kilos, de modo que supera en tamaño tanto a los tigres como a los leones.

---

### 307

En relación con el libro de Biología, ¿cómo se ha explicado ese fenómeno?

- A. Como un resultado de la contribución diferencial de los genomas de machos y hembras
- B. Como un resultado de la suma de las mutaciones de ambas especies
- C. Como un resultado de la alimentación que reciben en cautiverio
- D. Como un resultado del número de cromosomas del híbrido

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · contribución diferencial

Este fenómeno se ha explicado como un resultado de la contribución diferencial de los genomas de machos y hembras.

---

### 308

De acuerdo con el libro de Biología, ¿por qué vía se transmiten los procesos que limitan el crecimiento en cada una de esas especies?

- A. Por vía paterna en los tigres y por vía materna en los leones
- B. Por vía materna en los tigres y por vía paterna en los leones
- C. Por vía paterna en ambas especies
- D. Por vía materna en ambas especies

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · límites del crecimiento

Tanto los tigres como los leones tienen procesos que limitan el crecimiento, con la peculiaridad de que estos se transmiten por vía paterna, en caso de los primeros, y por vía materna, en el caso de los últimos.

---

### 309

De conformidad con el libro de Biología, ¿qué riesgo acarrea el gran tamaño que desarrolla el ligre?

- A. Riesgo para la hembra durante el embarazo y el parto, que suele terminar en cesárea
- B. Riesgo de que la cría no alcance el peso mínimo para sobrevivir
- C. Riesgo de que la hembra rechace a la cría al nacer
- D. Riesgo de que el macho no alcance la madurez sexual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · riesgo del embarazo

El ligre desarrolla un gran tamaño, con el concomitante riesgo para la hembra durante el embarazo y el parto, que suele terminar en cesárea.

---

### 310

En relación con el libro de Biología, ¿qué reduce las expectativas de vida de los ligres?

- A. Las patologías y malformaciones asociadas a su crecimiento
- B. Su esterilidad y su comportamiento solitario
- C. Su interés por el agua y su comportamiento gregario
- D. Las barreras ecológicas y comportamentales de sus progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · expectativas de vida

Se suelen presentar patologías y malformaciones asociadas al crecimiento de los ligres, lo cual reduce sus expectativas de vida.

---

### 311

De acuerdo con el libro de Biología, ¿para quiénes se cumple que los ligres son estériles?

- A. Para los ligres macho, pero no para las hembras o ligresas, entre las que se han registrado casos de preñez
- B. Para las hembras o ligresas, pero no para los ligres macho
- C. Para ambos sexos, sin excepciones registradas
- D. Para ninguno de los dos sexos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · esterilidad de los ligres

Se asumía que los ligres eran estériles, lo cual se cumple para los ligres macho, pero no así para las hembras o ligresas, entre las que se han registrado casos de preñez.

---

### 312

De conformidad con el libro de Biología, ¿qué heredan los ligres de cada una de las dos especies?

- A. De los tigres, su interés por el agua, y de los leones, su comportamiento gregario
- B. De los leones, su interés por el agua, y de los tigres, su comportamiento gregario
- C. De los tigres, su comportamiento solitario, y de los leones, su melena
- D. De los tigres, su tamaño, y de los leones, sus rayas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · conductas heredadas

Los ligres heredan de los tigres su interés por el agua y de los leones, su comportamiento gregario.

---

### 313

En relación con el libro de Biología, ¿cómo se denomina el híbrido del cruzamiento de un tigre macho y una leona?

- A. Tigón
- B. Ligre
- C. Ligresa
- D. Tigresa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · tigón

En el caso del cruzamiento de un tigre macho y una leona, el híbrido se denomina tigón.

---

### 314

De acuerdo con el libro de Biología, ¿qué experimentan los tigones y hasta cuánto pueden llegar a pesar?

- A. Una inhibición del crecimiento heredada de ambos progenitores, y pueden pesar hasta 180 kilos
- B. Una inhibición del crecimiento heredada sólo del padre, y pueden pesar hasta 400 kilos
- C. Una aceleración del crecimiento heredada de ambos progenitores, y pueden pesar hasta 400 kilos
- D. Una inhibición del crecimiento heredada sólo de la madre, y pueden pesar hasta 100 kilos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · tamaño del tigón

Estos híbridos experimentan una inhibición del crecimiento heredada de ambos progenitores; por lo tanto, su tamaño resulta limitado, aunque pueden llegar a pesar hasta 180 kilos.

---

### 315

De conformidad con el libro de Biología, ¿cómo son el porte y el pelaje del tigón?

- A. Tienen un porte grácil y su pelaje presenta características tanto de los tigres como de los leones, pero sin melena
- B. Tienen un porte robusto y su pelaje presenta sólo características de los tigres
- C. Tienen un porte grácil y su pelaje presenta sólo características de los leones, con melena
- D. Tienen un porte robusto y su pelaje carece de rayas y de melena

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 315
**Subtema:** epigenética · recuadro 14-3 · aspecto del tigón

Tienen un porte grácil y su pelaje presenta características tanto de los tigres como de los leones, pero sin melena.

---
### 316

De acuerdo con el libro de Biología, ¿qué se hizo con las muestras de Scott, el gemelo que se encontraba en la estación espacial?

- A. Fueron enviadas a la Tierra durante su estadía y comparadas con las de Mark
- B. Fueron conservadas en la estación espacial hasta su regreso a la Tierra
- C. Fueron analizadas en la propia estación espacial por el astronauta
- D. Fueron comparadas con muestras de otros astronautas de la misión

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · diseño del experimento de la NASA

Las muestras de Scott, quien se encontraba en la estación espacial, fueron enviadas a la Tierra durante su estadía y comparadas con las de Mark, quien permaneció en la Tierra durante ese mismo período.

---

### 317

De conformidad con el libro de Biología, ¿cuántos expertos y de cuántas universidades formaron equipos de trabajo para analizar la información?

- A. Más de 80 expertos de 12 universidades
- B. Más de 12 expertos de 80 universidades
- C. Más de 80 expertos de 20 universidades
- D. Más de 40 expertos de 12 universidades

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · epigenética cósmica

Más de 80 expertos de 12 universidades formaron equipos de trabajo para analizar la información.

---

### 318

En relación con el libro de Biología, ¿qué resultados confirmaron las hipótesis previas que preveían cambios debidos a las condiciones ambientales?

- A. La pérdida de densidad ósea, alteraciones en la microbiota, aumento en los marcadores de inflamación y cambios en la estructura del globo ocular
- B. La pérdida de masa muscular, alteraciones del sueño, aumento de la presión arterial y cambios en la audición
- C. El alargamiento de los telómeros, alteraciones en la microbiota y cambios en la reparación del ADN
- D. La pérdida de densidad ósea, el acortamiento de los telómeros y la caída de los marcadores de inflamación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · resultados esperados

Algunos de los resultados confirmaron hipótesis previas que preveían cambios debidos a las condiciones ambientales, como la pérdida de densidad ósea, alteraciones en la microbiota, aumento en los marcadores de inflamación y cambios en la estructura del globo ocular.

---

### 319

De acuerdo con el libro de Biología, ¿qué cambio inesperado experimentó Scott Kelly en sus glóbulos blancos?

- A. El alargamiento de los telómeros
- B. El acortamiento de los telómeros
- C. La duplicación de su número
- D. La pérdida de sus núcleos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · telómeros

Pero Scott Kelly también experimentó cambios genéticos inesperados, como el alargamiento de los telómeros de sus glóbulos blancos.

---

### 320

De conformidad con el libro de Biología, ¿en qué genes se observaron cambios epigenéticos de expresión en el astronauta?

- A. En genes que ayudan al cuerpo a producir energía y en genes relacionados con el sistema inmunológico
- B. En genes que regulan el crecimiento óseo y en genes relacionados con la visión
- C. En genes que controlan la microbiota y en genes relacionados con la inflamación
- D. En genes que codifican las protaminas y en genes relacionados con la reproducción

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · genes afectados

Cambios epigenéticos en la expresión de genes que ayudan al cuerpo a producir energía y en genes relacionados con el sistema inmunológico.

---

### 321

En relación con el libro de Biología, ¿qué proporción de la expresión de esos genes volvió a la normalidad y en cuánto tiempo?

- A. Más del 90%, seis meses después de que el astronauta regresara a la Tierra
- B. Más del 50%, seis meses después de que el astronauta regresara a la Tierra
- C. Más del 90%, un año después de que el astronauta regresara a la Tierra
- D. La totalidad, seis meses después de que el astronauta regresara a la Tierra

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · reversión de los cambios

Más del 90% de la expresión de esos genes volvió a la normalidad seis meses después de que el astronauta regresara a la Tierra.

---

### 322

De acuerdo con el libro de Biología, ¿qué genes no volvieron a sus niveles anteriores?

- A. Un pequeño porcentaje de genes relacionados con el sistema inmunológico y la reparación de ADN
- B. Un pequeño porcentaje de genes relacionados con la producción de energía y el crecimiento óseo
- C. La mayoría de los genes relacionados con el sistema inmunológico
- D. Un pequeño porcentaje de genes relacionados con la microbiota y la inflamación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · cambios persistentes

Un pequeño porcentaje de genes relacionados con el sistema inmunológico y la reparación de ADN no volvieron a sus niveles anteriores.

---

### 323

De conformidad con el libro de Biología, ¿por qué los investigadores no saben cuáles son los factores ambientales causantes de estos cambios?

- A. Porque es muy difícil aislar variables causales entre todas las condiciones atípicas que enfrentan los astronautas en el espacio
- B. Porque las muestras se deterioraron durante el viaje a la Tierra
- C. Porque el período de observación fue demasiado breve
- D. Porque no contaron con un sujeto de comparación en la Tierra

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · límites del estudio

Los investigadores no saben cuáles son los factores ambientales causantes de estos cambios, ya que es muy difícil aislar variables causales entre todas las condiciones atípicas que enfrentan los astronautas en el espacio.

---

### 324

En relación con el libro de Biología, ¿qué condiciones atípicas enfrentan los astronautas en el espacio?

- A. Los cambios en la gravedad, en la dieta, el mayor estrés por vivir en un espacio cerrado y la mayor exposición a la radiación
- B. Los cambios en la gravedad, en la temperatura, el aislamiento social y la falta de oxígeno
- C. Los cambios en la presión atmosférica, en el ciclo del sueño y en la microbiota
- D. Los cambios en la dieta, en la actividad física y en la exposición a la luz solar

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · condiciones atípicas

Todas las condiciones atípicas que enfrentan los astronautas en el espacio, como los cambios en la gravedad, en la dieta, el mayor estrés por vivir en un espacio cerrado y la mayor exposición a la radiación, entre otros.

---

### 325

De acuerdo con el libro de Biología, ¿qué reflejan los resultados de ese estudio?

- A. La importancia del ambiente en los cambios epigenéticos tanto efímeros como de larga duración
- B. La importancia de la secuencia de ADN por encima de las condiciones ambientales
- C. La reversibilidad completa de todos los cambios epigenéticos
- D. La ausencia de efectos ambientales sobre la expresión de los genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · gemelos · conclusión del estudio

Los resultados reflejan la importancia del ambiente en los cambios epigenéticos tanto efímeros como de larga duración.

---

### 326

De conformidad con el libro de Biología, según la fig. 14-17, ¿qué es el patrón de pelaje de tres colores que muestran algunas gatas?

- A. Un fenotipo en mosaico, ligado al par sexual, que sólo se expresa en las hembras
- B. Un fenotipo en mosaico, ligado al par sexual, que sólo se expresa en los machos
- C. Un fenotipo determinado por la dieta de la madre durante la gestación
- D. Un fenotipo heredado por vía paterna en ambos sexos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · mosaicismo · fig. 14-17

Algunas gatas muestran patrones de pelaje que comprenden tres colores. Se trata de un fenotipo en mosaico, ligado al par sexual, que solo se expresa en las hembras.

---

### 327

En relación con el libro de Biología, al borrarse muchas marcas epigenéticas propias de la historicidad de los individuos, ¿qué se permite?

- A. La generación de un nuevo y original paisaje epigenético
- B. La restitución del paisaje epigenético de los progenitores
- C. La eliminación definitiva de la herencia epigenética
- D. La conservación del paisaje epigenético a lo largo de las generaciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · borrado de marcas

Se borran muchas marcas epigenéticas propias de la historicidad de los individuos; esto permite la generación de un nuevo y original paisaje epigenético.

---

### 328

De acuerdo con el libro de Biología, ¿qué explica esa forma de herencia epigenética que ponen en evidencia cada vez más estudios?

- A. La transmisión transgeneracional de rasgos no codificados genéticamente
- B. La transmisión transgeneracional de rasgos codificados genéticamente
- C. La aparición de mutaciones nuevas en cada generación
- D. La conservación del número de cromosomas entre generaciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · definición

Opera una forma de herencia epigenética, que explica la transmisión transgeneracional de rasgos no codificados genéticamente.

---

### 329

De conformidad con el libro de Biología, ¿por qué se encuentra en franca expansión esta área de investigación?

- A. Por el uso de nuevas tecnologías de biología molecular y el desarrollo de nuevos modelos experimentales
- B. Por el abandono de los debates históricos sobre herencia y evolución
- C. Por el hallazgo de nuevas mutaciones en el genoma humano
- D. Por la aparición de nuevas técnicas de microscopía óptica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · expansión del campo

Esta área de investigación [...] se encuentra en franca expansión por el uso de nuevas tecnologías de biología molecular y el desarrollo de nuevos modelos experimentales.

---

### 330

En relación con el libro de Biología, ¿en qué campos diversos podría tener amplias implicancias?

- A. En la nutrición durante el embarazo o los complejos procesos ocurridos durante el curso de la evolución de la vida en la Tierra
- B. En la nutrición durante la infancia o el tratamiento de las enfermedades infecciosas
- C. En la conservación de las especies en cautiverio o la mejora de los cultivos
- D. En el diagnóstico de las mutaciones hereditarias o la terapia génica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · implicancias

Su relevancia es indudable, ya que podría tener amplias implicancias en campos tan diversos, como la nutrición durante el embarazo o los complejos procesos ocurridos durante el curso de la evolución de la vida en la Tierra, entre otros.

---

### 331

De acuerdo con el libro de Biología, ¿por qué resulta peculiarmente difícil distinguir los efectos de la herencia epigenética de los producidos por exposiciones en el útero?

- A. Porque ambos fenómenos representan formas de asimilación ambiental en el desarrollo y ambos implican procesos epigenéticos
- B. Porque ambos fenómenos ocurren en la misma semana del embarazo
- C. Porque ambos fenómenos dependen de la secuencia de ADN del embrión
- D. Porque ambos fenómenos se manifiestan sólo en la tercera generación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · dificultad para distinguir

Resulta peculiarmente difícil distinguir entre los efectos de la herencia epigenética de aquellos efectos producidos por exposiciones en el útero, ya que ambos fenómenos representan formas de asimilación ambiental en el desarrollo y ambos implican procesos epigenéticos.

---

### 332

De conformidad con el libro de Biología, ¿cuándo son las células particularmente vulnerables a la exposición ambiental?

- A. Mientras transcurre la reprogramación epigenética
- B. Mientras transcurre la mitosis de las células somáticas
- C. Mientras transcurre la remetilación del genoma del cigoto
- D. Mientras transcurre la diferenciación terminal de los tejidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · vulnerabilidad celular

Las células son particularmente vulnerables a la exposición ambiental mientras transcurre la reprogramación epigenética.

---

### 333

En relación con el libro de Biología, ¿qué puede inducir el ambiente de una mujer embarazada durante la primera semana de desarrollo embrionario?

- A. Cambios epigenéticos con consecuencias de por vida para el hijo en gestación
- B. Cambios epigenéticos que desaparecen antes del nacimiento
- C. Mutaciones en la secuencia de ADN del hijo en gestación
- D. Cambios epigenéticos que sólo afectan a los futuros nietos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · primera semana

El ambiente de una mujer embarazada durante la primera semana de desarrollo embrionario puede inducir cambios epigenéticos con consecuencias de por vida para el hijo en gestación.

---

### 334

De acuerdo con el libro de Biología, ¿cuándo ocurren los cambios posteriores en el embarazo que también pueden afectar a los futuros nietos?

- A. Alrededor de las semanas diez a once, cuando se desarrollan las células germinales primordiales del embrión
- B. Alrededor de las semanas veinte a veintiuna, cuando se desarrollan los órganos del embrión
- C. Alrededor de la primera semana, cuando ocurren las primeras mitosis
- D. Alrededor de las últimas semanas, poco antes del parto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · semanas diez a once

Los cambios posteriores en el embarazo, ocurridos alrededor de las semanas diez a once, cuando se desarrollan las células germinales primordiales del embrión, también pueden afectar a sus futuros nietos.

---

### 335

De conformidad con el libro de Biología, en la primera condición teórica de la herencia epigenética, ¿desde qué generación se observan esas variaciones del fenotipo?

- A. Desde la tercera generación en adelante, cuando el sujeto gestante se encuentra expuesto a contaminantes
- B. Desde la segunda generación en adelante, cuando el sujeto gestante se encuentra expuesto a contaminantes
- C. Desde la primera generación en adelante, cuando el sujeto gestante se encuentra expuesto a contaminantes
- D. Desde la cuarta generación en adelante, cuando el sujeto gestante se encuentra expuesto a contaminantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · primera condición

Se observan en la descendencia, desde la tercera generación en adelante, en aquellos casos en los que el sujeto gestante se encuentra expuesto a contaminantes.

---

### 336

En relación con el libro de Biología, en la segunda condición teórica, ¿desde qué generación se observan y en qué caso?

- A. Desde la segunda generación en adelante, cuando cualquiera de los dos progenitores hayan estado expuestos a contaminantes con anterioridad a la reproducción
- B. Desde la tercera generación en adelante, cuando cualquiera de los dos progenitores hayan estado expuestos a contaminantes con anterioridad a la reproducción
- C. Desde la segunda generación en adelante, cuando sólo la madre haya estado expuesta a contaminantes durante la gestación
- D. Desde la primera generación en adelante, cuando ambos progenitores hayan estado expuestos a contaminantes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · segunda condición

Se observan en la descendencia, desde la segunda generación en adelante, en aquellos casos en los que cualquiera de los dos progenitores hayan estado expuestos a contaminantes con anterioridad a la reproducción.

---

### 337

De acuerdo con el libro de Biología, ¿cuál es la principal dificultad para interpretar los alcances concretos del concepto de herencia epigenética en el ambiente natural o en el contexto social?

- A. Que rara vez los fenómenos de exposición ambiental se manifiestan en tan corta y precisa duración
- B. Que rara vez se dispone de tres generaciones para estudiar
- C. Que rara vez los contaminantes pueden identificarse con exactitud
- D. Que rara vez los cambios epigenéticos se transmiten a la descendencia

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 316
**Subtema:** epigenética · herencia epigenética · dificultad de interpretación

La principal dificultad para interpretar los alcances concretos del concepto de herencia epigenética en el ambiente natural o en el contexto social, es que rara vez los fenómenos de exposición ambiental se manifiestan en tan corta y precisa duración.

---
### 338

De conformidad con el libro de Biología, ¿qué intentan reducir al máximo los modelos de investigación en animales?

- A. Las variables que puedan generar "ruido" en la interpretación de la información
- B. El número de generaciones necesarias para observar un efecto
- C. El costo y la duración de los experimentos
- D. La cantidad de animales empleados en cada estudio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · modelos animales · propósito

Los modelos de investigación en animales intentan reducir al máximo las variables que puedan generar "ruido" en la interpretación de la información.

---

### 339

En relación con el libro de Biología, ¿qué implican esos modelos como tales?

- A. Un enfoque reduccionista que genera un sesgo, al mismo tiempo que permiten indagar sobre cuestiones específicas
- B. Un enfoque integrador que elimina todo sesgo de la investigación
- C. Un enfoque descriptivo que impide indagar sobre cuestiones específicas
- D. Un enfoque estadístico que reemplaza a la observación directa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · modelos animales · enfoque reduccionista

Como tales, implican un enfoque reduccionista que genera un sesgo, al mismo tiempo que permiten indagar sobre cuestiones específicas.

---

### 340

De acuerdo con el libro de Biología, ¿qué animales se emplean generalmente en los estudios en mamíferos sobre herencia epigenética?

- A. Ratones
- B. Ratas
- C. Conejos
- D. Cerdos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · modelos animales · especie empleada

Los modelos animales más frecuentemente empleados –generalmente ratones para estudios en mamíferos–.

---

### 341

De conformidad con el libro de Biología, ¿qué procedimientos involucran esos modelos animales?

- A. El control riguroso de las dietas de animales gestantes o lactantes, la reubicación de animales recién nacidos con madres no biológicas y la subrogación gestacional
- B. El control riguroso de la temperatura, la iluminación y el ruido del laboratorio
- C. La secuenciación del genoma completo de cada animal y de su descendencia
- D. El aislamiento de los animales recién nacidos y la administración de fármacos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · modelos animales · procedimientos

Involucran procedimientos como: el control riguroso de las dietas de animales gestantes o lactantes; la reubicación de animales recién nacidos con madres no biológicas; la subrogación gestacional.

---

### 342

En relación con el libro de Biología, ¿qué les permiten aislar y caracterizar esas aproximaciones a los investigadores?

- A. Las contribuciones de la genética, la epigenética, los estilos parentales y las exposiciones durante el embarazo
- B. Las contribuciones de la genética y de las mutaciones espontáneas, únicamente
- C. Las contribuciones de la dieta y del clima sobre el desarrollo embrionario
- D. Las contribuciones de la selección natural sobre las poblaciones de laboratorio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · modelos animales · qué permiten aislar

Estas aproximaciones les permiten a los investigadores aislar y caracterizar las contribuciones de la genética, la epigenética, los estilos parentales y las exposiciones durante el embarazo, ampliando la comprensión acerca de cómo se heredan los rasgos.

---

### 343

De acuerdo con el libro de Biología, ¿cómo se denominan las características descritas en los ratones de la cepa "agouti"?

- A. "Características físicas dependientes de la metilación"
- B. "Características físicas dependientes de la acetilación"
- C. "Características físicas dependientes del ambiente materno"
- D. "Características físicas dependientes de la impronta parental"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · denominación

Un ejemplo muy interesante es la descripción de las llamadas "características físicas dependientes de la metilación" en los ratones de la cepa denominada "agouti".

---

### 344

De conformidad con el libro de Biología, ¿cómo varía el grado de metilación de ciertos fragmentos repetitivos de ADN en el gen agouti?

- A. De manera azarosa entre individuos
- B. De manera uniforme en todos los individuos de la cepa
- C. De manera proporcional a la edad de cada individuo
- D. De manera idéntica a la de sus progenitores

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · variación azarosa

El grado de metilación de ciertos fragmentos repetitivos de ADN en un gen llamado agouti varían de manera azarosa entre individuos.

---

### 345

En relación con el libro de Biología, ¿qué fenotipo presentan los ratones con las secuencias sin metilar?

- A. "Amarillos, obesos y diabéticos"
- B. "Oscuros, delgados y sanos"
- C. "Amarillos, delgados y sanos"
- D. "Oscuros, obesos y diabéticos"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · fenotipo sin metilar

Esto determina el fenotipo de los ratones en un rango que va desde "amarillos, obesos y diabéticos" (con secuencias sin metilar).

---

### 346

De acuerdo con el libro de Biología, ¿qué fenotipo presentan los ratones con las secuencias completamente metiladas?

- A. "Oscuros, delgados y sanos"
- B. "Amarillos, obesos y diabéticos"
- C. "Oscuros, obesos y sanos"
- D. "Amarillos, delgados y diabéticos"

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · fenotipo metilado

Hasta "oscuros, delgados y sanos" (con secuencias completamente metiladas).

---

### 347

De conformidad con el libro de Biología, ¿qué ocurre con el grado de metilación del gen agouti en los machos?

- A. No afecta a su descendencia
- B. Afecta a su descendencia del mismo modo que en las hembras
- C. Afecta a su descendencia sólo cuando está completamente metilado
- D. Afecta únicamente a los descendientes machos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · machos

Notablemente, el grado de metilación del gen agouti en los machos no afecta a su descendencia.

---

### 348

En relación con el libro de Biología, ¿qué ocurre en cambio con las hembras de esta cepa?

- A. Tienen una descendencia que tiende a presentar un fenotipo similar a ellas: las madres más oscuras producen más descendientes oscuros y delgados que las madres amarillas
- B. Tienen una descendencia que tiende a presentar el fenotipo opuesto al de ellas
- C. Tienen una descendencia cuyo fenotipo depende sólo del macho
- D. Tienen una descendencia con fenotipos repartidos por igual entre ambos extremos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · hembras

Las hembras de esta cepa tienen una descendencia que tiende a presentar un fenotipo similar a ellas: las madres más oscuras producen más descendientes oscuros y delgados que las madres amarillas.

---

### 349

De acuerdo con el libro de Biología, dado que sólo la metilación materna afecta a la generación siguiente, ¿a qué podría deberse el resultado observado?

- A. A exposiciones de los embriones al ambiente materno durante la gestación y no a un efecto directo de la herencia epigenética
- B. A un efecto directo de la herencia epigenética y no al ambiente materno
- C. A mutaciones acumuladas en el gen agouti de las madres
- D. A la dieta que reciben los descendientes después del destete

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · explicación alternativa

Dado que solo la metilación materna afecta a la generación siguiente, el resultado observado podría deberse a exposiciones de los embriones al ambiente materno durante la gestación y no a un efecto directo de la herencia epigenética.

---

### 350

De conformidad con el libro de Biología, ¿qué podría ocurrir, por ejemplo, con las madres obesas o diabéticas?

- A. Que constituyan un ambiente con mayor disponibilidad de azúcar, hormonas o alguna otra variable que afecte a los embriones en desarrollo de manera directa
- B. Que transmitan a los embriones una mutación en el gen agouti
- C. Que impidan la implantación de los embriones en el útero
- D. Que produzcan un número menor de descendientes por camada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · ambiente materno

Podría ocurrir, por ejemplo, que las madres obesas/diabéticas constituyan un ambiente con mayor disponibilidad de azúcar, hormonas o alguna otra variable que afecte a los embriones en desarrollo de manera directa.

---

### 351

En relación con el libro de Biología, ¿qué método propusieron algunos investigadores para descartar esa posibilidad?

- A. Un método que involucra la gesta subrogada
- B. Un método que involucra el control de la dieta después del nacimiento
- C. Un método que involucra la secuenciación del gen agouti
- D. Un método que involucra el cruzamiento entre machos de distinto fenotipo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · gesta subrogada

Para descartar esta posibilidad, algunos investigadores propusieron un método que involucra la gesta subrogada.

---

### 352

De acuerdo con el libro de Biología, ¿en qué consistió ese procedimiento?

- A. Tomaron embriones recién formados de madres oscuras y los implantaron en úteros de madres amarillas y viceversa
- B. Tomaron embriones recién formados de madres oscuras y los implantaron en úteros de otras madres oscuras
- C. Cambiaron la dieta de las madres amarillas durante toda la gestación
- D. Reubicaron a los recién nacidos con madres no biológicas después del parto

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · diseño del experimento

Tomaron embriones recién formados de madres oscuras y los implantaron en úteros de madres amarillas y viceversa.

---

### 353

De conformidad con el libro de Biología, ¿qué patrón de metilación afectó al fenotipo de la generación siguiente?

- A. El de la hembra que aportó el oocito, y no el de la hembra gestante
- B. El de la hembra gestante, y no el de la hembra que aportó el oocito
- C. El del macho que aportó el espermatozoide
- D. El de ambas hembras por igual

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · ratones agouti · resultado

El patrón de metilación de la hembra que aportó el oocito, y no el de la hembra gestante, afectó al fenotipo de la generación siguiente, mostrando evidencia del valor heredable de estos caracteres.

---

### 354

En relación con el libro de Biología, ¿qué regula la actividad transcripcional del gen "axin" en algunas cepas de ratones?

- A. Una zona cercana de ADN repetitivo
- B. Una zona cercana de ADN no repetitivo
- C. Un ARN largo no codificante transcripto en otro cromosoma
- D. Una proteína de la familia polycomb

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · gen axin · regulación

El caso del gen "axin" en algunas cepas de ratones es similar al del gen agouti, ya que su actividad transcripcional es regulada por una zona cercana de ADN repetitivo.

---

### 355

De acuerdo con el libro de Biología, en el caso del gen axin, ¿qué hacen las repeticiones no metiladas?

- A. Interfieren la transcripción del gen, alterando la secuencia de ARNm y la síntesis de la correspondiente proteína
- B. Favorecen la transcripción del gen, aumentando la síntesis de la correspondiente proteína
- C. Metilan las islas CpG del promotor del gen
- D. Degradan el ARNm del gen apenas se sintetiza

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · gen axin · repeticiones no metiladas

En este caso, las repeticiones no metiladas interfieren la transcripción del gen axin, alterando la secuencia de ARNm y la síntesis de la correspondiente proteína.

---

### 356

De conformidad con el libro de Biología, ¿con qué nacen los ratones cuando eso ocurre?

- A. Con un pliegue en la cola
- B. Con una cola más corta que lo normal
- C. Con el pelaje amarillo
- D. Sin cola

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · gen axin · fenotipo

Se ha identificado que cuando eso ocurre, los ratones nacen con un pliegue en la cola.

---

### 357

En relación con el libro de Biología, ¿en qué se diferencia este ejemplo del caso del gen agouti?

- A. En que tanto los machos como las hembras pueden transmitir el estado de metilación del ADN a la generación siguiente
- B. En que sólo los machos pueden transmitir el estado de metilación del ADN
- C. En que ninguno de los dos sexos transmite el estado de metilación del ADN
- D. En que el estado de metilación se transmite sólo cada dos generaciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · gen axin · transmisión por ambos sexos

En este ejemplo, a diferencia del caso del gen agouti, tanto los machos como las hembras pueden transmitir el estado de metilación del ADN a la generación siguiente.

---

### 358

De acuerdo con el libro de Biología, ¿qué colas tienen los progenitores con las repeticiones más fuertemente metiladas y su descendencia?

- A. Colas rectas, y producen una descendencia con colas rectas
- B. Colas plegadas, y producen una descendencia con colas plegadas
- C. Colas rectas, y producen una descendencia con colas plegadas
- D. Colas plegadas, y producen una descendencia con colas rectas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · gen axin · colas rectas y plegadas

Los progenitores con repeticiones más fuertemente metiladas tienen colas rectas y producen una descendencia con colas rectas, mientras los descendientes de los portadores del ADN no metilado muestran colas plegadas.

---

### 359

De conformidad con el libro de Biología, hacia finales de la Segunda Guerra Mundial, durante el invierno de 1944 y 1945, ¿qué hicieron los nazis?

- A. Bloquearon todas las importaciones de comida a los países bajos, causando una hambruna devastadora
- B. Bloquearon todas las exportaciones de comida de los países bajos, causando una crisis económica
- C. Racionaron el consumo de comida en los países bajos durante todo el invierno
- D. Destruyeron los cultivos de los países bajos antes de la cosecha

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · caso de Holanda · la hambruna

Hacia finales de la Segunda Guerra Mundial, durante el invierno de 1944 y 1945, los nazis bloquearon todas las importaciones de comida a los países bajos, causando una hambruna devastadora.

---

### 360

En relación con el libro de Biología, ¿cuántas personas murieron de inanición en esa región y hasta cuándo?

- A. Aproximadamente 20 000, antes de que se recuperara la normalidad de abastecimiento con la liberación de los países bajos en mayo de 1945
- B. Aproximadamente 200 000, antes de la liberación de los países bajos en mayo de 1945
- C. Aproximadamente 20 000, antes del final del invierno de 1944
- D. Aproximadamente 2 000, antes de la liberación de los países bajos en mayo de 1945

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · caso de Holanda · víctimas

Tan solo en esa región, aproximadamente 20000 personas murieron de inanición antes de que se recuperara la normalidad de abastecimiento con la liberación de los países bajos en mayo de 1945.

---

### 361

De acuerdo con el libro de Biología, ¿qué permitió el estudio y la caracterización de ese fenómeno?

- A. Los límites tan precisos del período de hambruna, el rápido acceso de los sobrevivientes a un sistema de salud con enorme accesibilidad y un registro epidemiológico riguroso
- B. El número reducido de personas afectadas y la corta duración de la guerra
- C. La disponibilidad de muestras de ADN de todos los sobrevivientes
- D. La existencia de un grupo de control en otro país europeo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · caso de Holanda · por qué pudo estudiarse

Los límites tan precisos del período de hambruna, así como el rápido acceso de los sobrevivientes a un sistema de salud con enorme accesibilidad y un registro epidemiológico riguroso, permitieron el estudio y la caracterización de un fenómeno que hasta hace muy poco tiempo había pasado inadvertido.

---

### 362

De conformidad con el libro de Biología, ¿qué mostró la primera observación sobre las personas concebidas durante el período de la hambruna?

- A. Que tuvieron, a lo largo de su vida, un riesgo mayor de obesidad, diabetes y enfermedades cardiovasculares
- B. Que tuvieron, a lo largo de su vida, un riesgo menor de obesidad, diabetes y enfermedades cardiovasculares
- C. Que tuvieron, a lo largo de su vida, un riesgo mayor de enfermedades infecciosas y respiratorias
- D. Que no presentaron ninguna diferencia respecto de la población general

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · caso de Holanda · primera observación

La primera observación mostró que las personas concebidas durante el período de la hambruna (cuyas madres estaban famélicas durante su desarrollo embrionario temprano) tuvieron, a lo largo de su vida, un riesgo mayor de obesidad, diabetes y enfermedades cardiovasculares.

---

### 363

En relación con el libro de Biología, ¿con qué se correlacionaban esos riesgos incrementados, según las investigaciones a nivel molecular de 2008?

- A. Con niveles menores de metilación del ADN de genes relacionados con el metabolismo
- B. Con niveles mayores de metilación del ADN de genes relacionados con el metabolismo
- C. Con mutaciones en genes relacionados con el metabolismo
- D. Con niveles menores de acetilación de las histonas de genes del metabolismo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 317
**Subtema:** epigenética · caso de Holanda · hallazgo molecular de 2008

En 2008, investigaciones a nivel molecular mostraron que estos riesgos incrementados se correlacionaban con niveles menores de metilación del ADN de genes relacionados con el metabolismo.

---
### 364

De acuerdo con el libro de Biología, ¿qué presentó el grupo cuyas madres sufrieron la hambruna en un estadio posterior del desarrollo fetal?

- A. Una disminución de talla y peso al nacer
- B. Un aumento de talla y peso al nacer
- C. Un riesgo mayor de obesidad y diabetes a lo largo de la vida
- D. Ninguna diferencia respecto de la población general

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · caso de Holanda · segundo grupo

De cualquier manera, este segundo grupo presentó una disminución de talla y peso al nacer.

---

### 365

De conformidad con el libro de Biología, ¿qué sugiere que ese grupo no haya tenido los mismos efectos?

- A. Que los embriones de estadios tempranos son más susceptibles a los cambios epigenéticos causados por el ambiente
- B. Que los embriones de estadios tardíos son más susceptibles a los cambios epigenéticos causados por el ambiente
- C. Que la hambruna no produce efectos epigenéticos duraderos
- D. Que los efectos dependen sólo de la duración de la exposición

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · caso de Holanda · susceptibilidad temprana

Lo que sugiere que los embriones de estadios tempranos son más susceptibles a los cambios epigenéticos causados por el ambiente.

---

### 366

En relación con el libro de Biología, ¿qué sugieren los primeros análisis de la tercera generación de sobrevivientes?

- A. Que los efectos en la salud advertidos en los hijos de los sobrevivientes de la hambruna persisten en los nietos
- B. Que los efectos en la salud advertidos en los hijos desaparecen en los nietos
- C. Que los efectos en la salud sólo aparecen a partir de la tercera generación
- D. Que los efectos en la salud se duplican en cada generación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · caso de Holanda · tercera generación

Los primeros análisis de la tercera generación de sobrevivientes sugieren que los efectos en la salud advertidos en los hijos de los sobrevivientes de la hambruna persisten en los nietos.

---

### 367

De acuerdo con el libro de Biología, ¿qué muestran esos nietos en los casos menos graves?

- A. Un aumento general de grasa corporal e indicadores de salud global menos satisfactorios que los esperados estadísticamente
- B. Una disminución general de grasa corporal e indicadores de salud global mejores que los esperados estadísticamente
- C. Un aumento general de talla y peso al nacer
- D. Indicadores de salud global idénticos a los esperados estadísticamente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · caso de Holanda · efectos en los nietos

Los nietos, quienes, en los casos menos graves, aún muestran un aumento general de grasa corporal e indicadores de salud global menos satisfactorios que los esperados estadísticamente.

---

### 368

De conformidad con el libro de Biología, ¿qué usaron los equipos de investigación que estudiaron a la población de la ciudad Överkalix?

- A. Meticulosos registros públicos
- B. Muestras de ADN conservadas desde 1890
- C. Entrevistas a los descendientes de los sobrevivientes
- D. Registros hospitalarios de las últimas dos décadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · fuente de datos

Otro aporte significativo a la descripción de los fenómenos de herencia epigenética fue proporcionado por equipos de investigación que estudiaron a la población de la ciudad Överkalix, usando meticulosos registros públicos.

---

### 369

En relación con el libro de Biología, ¿qué registros combinaron esos equipos y desde qué año?

- A. Los registros de las cosechas y de los nacimientos desde 1890 hasta la actualidad
- B. Los registros de las cosechas y de las defunciones desde 1945 hasta la actualidad
- C. Los registros médicos y escolares desde 1890 hasta la actualidad
- D. Los registros de los nacimientos y de los matrimonios desde 1900 hasta la actualidad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · registros combinados

Estos equipos combinaron los registros de las cosechas y de los nacimientos desde 1890 hasta la actualidad.

---

### 370

De acuerdo con el libro de Biología, ¿qué lograron con esa combinación de registros?

- A. Identificar a personas que experimentaron épocas de abundancia o hambrunas en diversos momentos de su vida y rastrear los registros médicos de sus descendientes
- B. Identificar las mutaciones que aparecieron en la población durante las hambrunas
- C. Calcular la expectativa de vida media de la población desde 1890
- D. Reconstruir el árbol genealógico completo de la ciudad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · método

Con lo cual lograron identificar a personas que experimentaron épocas de abundancia o hambrunas en diversos momentos de su vida y rastrearon los registros médicos de sus descendientes.

---

### 371

De conformidad con el libro de Biología, ¿con qué se relaciona uno de los resultados clave de esos estudios?

- A. Con el hallazgo de patrones de riesgo de ciertas enfermedades específicas para cada sexo
- B. Con el hallazgo de mutaciones específicas para cada sexo
- C. Con el hallazgo de patrones de metilación idénticos en ambos sexos
- D. Con el hallazgo de un aumento general de la expectativa de vida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · resultado clave

Uno de los resultados clave de estos estudios se relaciona con el hallazgo de patrones de riesgo de ciertas enfermedades específicas para cada sexo.

---

### 372

En relación con el libro de Biología, ¿por qué es particular este caso?

- A. Porque es el primer caso en que se describe una relación fuerte en la herencia epigenética aportada por la línea masculina
- B. Porque es el primer caso en que se describe una relación fuerte en la herencia epigenética aportada por la línea femenina
- C. Porque es el primer caso estudiado con registros públicos
- D. Porque es el primer caso en que se estudian tres generaciones seguidas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · línea masculina

En particular, este es el primer caso en que se describe una relación fuerte en la herencia epigenética aportada por la línea masculina.

---

### 373

De acuerdo con el libro de Biología, los hombres que crecieron en épocas de abundancia entre los 9 y 12 años, ¿qué descendencia tuvieron?

- A. Nietos, pero no nietas, con menor expectativa de vida
- B. Nietas, pero no nietos, con menor expectativa de vida
- C. Nietos, pero no nietas, con mayor expectativa de vida
- D. Nietos y nietas con menor expectativa de vida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · épocas de abundancia

Aquellos hombres que crecieron en épocas de abundancia entre los 9 y 12 años tuvieron nietos, pero no nietas, con menor expectativa de vida.

---

### 374

De conformidad con el libro de Biología, ¿qué sucedió, de manera inversa, con aquellos que atravesaron hambrunas en el período prepuberal?

- A. Tuvieron nietos, pero no nietas, con mayor expectativa de vida
- B. Tuvieron nietas, pero no nietos, con mayor expectativa de vida
- C. Tuvieron nietos, pero no nietas, con menor expectativa de vida
- D. Tuvieron nietos y nietas con mayor expectativa de vida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · hambrunas prepuberales

Lo mismo sucedió de manera inversa con aquellos que atravesaron hambrunas en el período prepuberal: tuvieron nietos, pero no nietas, con mayor expectativa de vida.

---

### 375

En relación con el libro de Biología, ¿cuándo empiezan a diferenciarse y a madurar los precursores espermáticos?

- A. En los años previos a la pubertad
- B. En los primeros años de vida
- C. En el desarrollo embrionario temprano
- D. En los años posteriores a la pubertad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · precursores espermáticos

Los precursores espermáticos empiezan a diferenciarse y a madurar en los años previos a la pubertad, y eso los hace vulnerables a los cambios epigenéticos inducidos por el ambiente.

---

### 376

De acuerdo con el libro de Biología, ¿qué se afirma sobre los procesos implicados y sobre la evidencia?

- A. Que los procesos aún no han sido dilucidados, pero la evidencia epidemiológica es contundente
- B. Que los procesos ya han sido dilucidados, pero la evidencia epidemiológica es débil
- C. Que tanto los procesos como la evidencia epidemiológica siguen siendo dudosos
- D. Que los procesos y la evidencia epidemiológica están completamente establecidos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · estado del conocimiento

Los procesos aún no han sido dilucidados, pero la evidencia epidemiológica es contundente.

---

### 377

De conformidad con el libro de Biología, según la fig. 14-18, ¿gracias a qué pudieron constatarse procesos de herencia transgeneracional en esa pequeña ciudad de Suecia?

- A. Al cuidadoso registro epidemiológico con el que cuenta su población
- B. Al aislamiento geográfico de su población
- C. Al pequeño tamaño de su población
- D. A la homogeneidad genética de su población

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · Överkalix · fig. 14-18

En esta pequeña ciudad de Suecia, pudieron constatarse procesos de herencia transgeneracional, gracias al cuidadoso registro epidemiológico con el que cuenta su población.

---

### 378

En relación con el libro de Biología, ¿en qué se ha centrado tradicionalmente la comprensión moderna de la evolución darwiniana?

- A. En los cambios heredables en la secuencia de ADN que afectan a las características de los individuos
- B. En los cambios epigenéticos que afectan a las características de los individuos
- C. En los cambios del ambiente que afectan a las poblaciones
- D. En los cambios del número de cromosomas de cada especie

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · enfoque tradicional

La comprensión moderna de la evolución darwiniana se ha centrado tradicionalmente en los cambios heredables en la secuencia de ADN que afectan a las características de los individuos.

---

### 379

De acuerdo con el libro de Biología, ¿qué ha demostrado la comprensión de los procesos de la herencia epigenética?

- A. Que, para comprender integralmente los patrones de la herencia, hace falta conocer mucho más que la sola secuencia de ADN
- B. Que la secuencia de ADN basta para comprender integralmente los patrones de la herencia
- C. Que la evolución darwiniana debe ser abandonada
- D. Que los patrones de la herencia no pueden comprenderse

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · más que la secuencia

La comprensión de los procesos de la herencia epigenética ha demostrado que, para comprender integralmente los patrones de la herencia, hace falta conocer mucho más que la sola secuencia de ADN.

---

### 380

De conformidad con el libro de Biología, ¿por qué los cambios epigenéticos que resulten estables pueden ser muy importantes en la evolución?

- A. Porque las modificaciones epigenéticas pueden definir los patrones de activación genética
- B. Porque las modificaciones epigenéticas pueden alterar la secuencia de ADN
- C. Porque las modificaciones epigenéticas aumentan la tasa de mutación
- D. Porque las modificaciones epigenéticas reemplazan a la selección natural

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · patrones de activación

Las modificaciones epigenéticas pueden definir los patrones de activación genética; por ello, los cambios epigenéticos que resulten estables en estos patrones también pueden ser muy importantes en la evolución.

---

### 381

En relación con el libro de Biología, ¿qué ejemplo se da de un cambio epigenético con posible importancia evolutiva?

- A. La activación más temprana o más tardía en el silenciamiento de un gen promotor del crecimiento neuronal durante el desarrollo embrionario
- B. La aparición de una mutación en un gen promotor del crecimiento neuronal
- C. La duplicación de un gen promotor del crecimiento neuronal
- D. La pérdida de un gen promotor del crecimiento neuronal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · volumen cerebral

Cambios, como la activación más temprana o más tardía en el silenciamiento de un gen promotor del crecimiento neuronal durante el desarrollo embrionario, podrían constituir claves para comprender el aumento del volumen cerebral en un linaje.

---

### 382

De acuerdo con el libro de Biología, ¿quiénes llevaron a cabo el estudio de 2013 que comparó patrones de metilación del ADN entre primates?

- A. El investigador estadounidense Andrew Sharp y el español Tomas Marques-Bonet
- B. El investigador español Andrew Sharp y el estadounidense Tomas Marques-Bonet
- C. El investigador estadounidense David Allis y el español Manel Esteller
- D. El investigador alemán Nikolaus Rajewsky y el danés Jorgen Kjems

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · estudio de 2013

Un estudio de 2013, llevado a cabo por el investigador estadounidense Andrew Sharp y el español Tomas Marques-Bonet.

---

### 383

De conformidad con el libro de Biología, ¿entre qué especies comparó ese estudio los patrones de metilación del ADN?

- A. Humanos, chimpancés, bonobos, gorilas y orangutanes
- B. Humanos, chimpancés, gorilas, macacos y lemures
- C. Humanos, chimpancés, bonobos, ratones y ratas
- D. Humanos, gorilas, orangutanes, gibones y babuinos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · especies comparadas

Comparó patrones de metilación del ADN entre humanos, chimpancés, bonobos, gorilas y orangutanes.

---

### 384

En relación con el libro de Biología, ¿en cuántos genes permitió identificar el estudio patrones de metilación exclusivos de nuestra especie?

- A. En 170 genes
- B. En 70 genes
- C. En 1 700 genes
- D. En 17 genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · 170 genes

El estudio permitió identificar patrones de metilación que son exclusivos de nuestra especie en 170 genes.

---

### 385

De acuerdo con el libro de Biología, ¿qué codifican esos genes?

- A. Proteínas que están también presentes en los otros simios
- B. Proteínas que son exclusivas de nuestra especie
- C. ARN largos no codificantes propios de nuestra especie
- D. Proteínas que sólo se expresan durante el desarrollo embrionario

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · proteínas compartidas

Patrones de metilación que son exclusivos de nuestra especie en 170 genes, los cuales codifican proteínas que están también presentes en los otros simios.

---

### 386

De conformidad con el libro de Biología, ¿qué funciones tienen algunos de esos genes?

- A. Funciones en células del cerebro, un órgano que es de particular interés en la evolución humana
- B. Funciones en células del hígado, un órgano que es de particular interés en la evolución humana
- C. Funciones en las células germinales, de particular interés en la evolución humana
- D. Funciones en los músculos, de particular interés en la evolución humana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · genes del cerebro

Algunos de estos genes tienen funciones en células del cerebro, un órgano que es de particular interés en la evolución humana.

---

### 387

En relación con el libro de Biología, ¿qué idea refuerza este hallazgo?

- A. Que los cambios que afectan a los sitios y los tiempos en los que se activan los genes pueden ser tan importantes como aquellos que afectan a su secuencia y función
- B. Que los cambios que afectan a la secuencia de los genes son siempre más importantes que los epigenéticos
- C. Que los patrones de metilación son idénticos en todos los simios
- D. Que el volumen cerebral depende únicamente del número de genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 318
**Subtema:** epigenética · evolución · conclusión del estudio

Este hallazgo refuerza la idea de que los cambios que afectan a los sitios y los tiempos en los que se activan los genes pueden ser tan importantes como aquellos que afectan a su secuencia y función.

---

### 388

De acuerdo con el libro de Biología, ¿en qué tipo de especies se centra gran parte de la investigación sobre los procesos epigenéticos que intervienen en la evolución de ciertos linajes?

- A. En especies que se reproducen —y, por lo tanto, evolucionan— rápidamente, como las bacterias
- B. En especies que se reproducen —y, por lo tanto, evolucionan— lentamente, como los mamíferos
- C. En especies que se reproducen sexualmente y tienen generaciones largas, como las plantas con flor
- D. En especies que sólo se reproducen en forma asexual, como los hongos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · evolución de linajes

Gran parte de la investigación se centra en especies que se reproducen –y, por lo tanto, evolucionan– rápidamente, como las bacterias.

---

### 389

De conformidad con el libro de Biología, ¿qué suelen tener las bacterias?

- A. Varias proteínas de ADN metiltransferasa
- B. Una sola proteína de ADN metiltransferasa
- C. Varias proteínas de ARN metiltransferasa
- D. Una sola proteína de ADN desmetilasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · metiltransferasas bacterianas

Estas suelen tener varias proteínas de ADN metiltransferasa.

---

### 390

En relación con el libro de Biología, ¿qué hace cada una de esas proteínas?

- A. Reconoce y metila una secuencia de ADN específica
- B. Reconoce y metila cualquier secuencia de ADN al azar
- C. Reconoce y desmetila una secuencia de ADN específica
- D. Reconoce y corta una secuencia de ADN específica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · especificidad de la metilación

Cada una de ellas reconoce y metila una secuencia de ADN específica.

---

### 391

De acuerdo con el libro de Biología, ¿qué han desarrollado los diferentes tipos de bacterias?

- A. Genes de metiltransferasa con diferentes secuencias de ADN
- B. Genes de metiltransferasa con secuencias de ADN idénticas entre sí
- C. Genes de desmetilasa con diferentes secuencias de ADN
- D. Genes de histonas con diferentes secuencias de ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · diversidad de metiltransferasas

Diferentes tipos de bacterias han desarrollado genes de metiltransferasa con diferentes secuencias de ADN.

---

### 392

De conformidad con el libro de Biología, ¿a qué afectan esos cambios?

- A. A la afinidad respecto del sitio blanco de las proteínas correspondientes y, por lo tanto, a los patrones de metilación del ADN en el genoma
- B. A la velocidad de replicación del ADN y, por lo tanto, al número de copias del genoma
- C. A la afinidad de las histonas por el ADN y, por lo tanto, al grado de condensación del genoma
- D. A la estabilidad del ARN mensajero y, por lo tanto, a la cantidad de proteína producida

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · afinidad por el sitio blanco

Estos cambios afectan a la afinidad respecto del sitio blanco de las proteínas correspondientes y, por lo tanto, a los patrones de metilación del ADN en el genoma.

---

### 393

En relación con el libro de Biología, ¿qué han perdido recientemente algunas especies de gusanos nematodos?

- A. Por completo, uno de sus genes de ADN metiltransferasa
- B. Por completo, todos sus genes de ADN metiltransferasa
- C. Parcialmente, uno de sus genes de ADN metiltransferasa
- D. Por completo, uno de sus genes de ARN polimerasa

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · nematodos

Algunas especies de gusanos nematodos han perdido recientemente, por completo, uno de sus genes de ADN metiltransferasa.

---

### 394

De acuerdo con el libro de Biología, ¿qué presentan esos nematodos cuando se los compara, incluso, con sus parientes más cercanos?

- A. Diferentes patrones de metilación del genoma
- B. Idénticos patrones de metilación del genoma
- C. Diferentes secuencias de ADN en todo el genoma
- D. Un número diferente de cromosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · comparación con parientes cercanos

Presentan diferentes patrones de metilación del genoma cuando se los compara, incluso, con sus parientes más cercanos.

---

### 395

De conformidad con el libro de Biología, en ambos casos, ¿a qué afectan los diferentes patrones de metilación del ADN?

- A. A la cantidad, el tiempo y la ubicación de la activación génica
- B. A la cantidad, el tiempo y la ubicación de la replicación del ADN
- C. Al número, el tamaño y la forma de los cromosomas
- D. A la cantidad y la velocidad de las mutaciones en la secuencia de ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · efecto sobre la activación génica

En ambos casos, los diferentes patrones de metilación del ADN afectan a la cantidad, el tiempo y la ubicación de la activación génica.

---

### 396

En relación con el libro de Biología, ¿qué rango de especies abarcan los estudios sobre procesos epigenéticos asociados a patrones conductuales con persistencia transgeneracional?

- A. Un amplio rango de especies animales, incluidas las de algunos invertebrados, que son capaces de aprender por medio de la interacción social
- B. Un rango reducido de especies animales, limitado a los mamíferos, que son capaces de aprender por medio de la interacción social
- C. Un amplio rango de especies vegetales, incluidas algunas plantas con flor, que son capaces de responder al ambiente
- D. Un rango reducido de especies de invertebrados, que son incapaces de aprender por medio de la interacción social

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · persistencia transgeneracional de conductas

Este tipo de estudios abarca un amplio rango de especies animales, incluidas las de algunos invertebrados, que son capaces de aprender por medio de la interacción social.

---

### 397

De acuerdo con el libro de Biología, ¿cuál es un ejemplo significativo de esos estudios?

- A. El estudio de las llamadas "tradiciones de cuidado maternal" en ratas, que se mantienen a través de las generaciones
- B. El estudio de las llamadas "tradiciones de cuidado maternal" en primates, que se mantienen a través de las generaciones
- C. El estudio de las llamadas "tradiciones de caza" en aves, que se mantienen a través de las generaciones
- D. El estudio de las "tradiciones de cuidado maternal" en ratas, que se pierden en cada generación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · tradiciones de cuidado maternal

Un ejemplo significativo es el estudio de las llamadas "tradiciones de cuidado maternal" en ratas, que se mantienen a través de las generaciones.

---

### 398

De conformidad con el libro de Biología, ¿en qué células tienen aumentada la expresión de un gen particular las crías que reciben mucho lamido y acicalado de sus progenitoras?

- A. En las células del hipocampo cerebral
- B. En las células del cerebelo
- C. En las células de la corteza prefrontal
- D. En las células de la médula espinal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · hipocampo cerebral

Se ha visto que las crías que reciben mucho lamido y acicalado de sus progenitoras tienen aumentada, en las células del hipocampo cerebral, la expresión de un gen particular.

---

### 399

En relación con el libro de Biología, ¿qué presentan al mismo tiempo esas crías?

- A. Cambios en los patrones de expresión de redes completas de genes
- B. Cambios en la secuencia de nucleótidos de redes completas de genes
- C. Cambios en el número de copias de redes completas de genes
- D. La pérdida definitiva de redes completas de genes

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · redes de genes

Al mismo tiempo, presentan cambios en los patrones de expresión de redes completas de genes.

---

### 400

De acuerdo con el libro de Biología, ¿con qué están correlacionados esos cambios?

- A. Con modificaciones tanto en la metilación del ADN como en las proteínas asociadas al ADN
- B. Con modificaciones tanto en la secuencia del ADN como en las proteínas asociadas al ADN
- C. Con modificaciones únicamente en la metilación del ADN
- D. Con modificaciones únicamente en las proteínas asociadas al ADN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · correlación molecular

Estos cambios están correlacionados con modificaciones tanto en la metilación del ADN como en las proteínas asociadas al ADN.

---

### 401

De conformidad con el libro de Biología, ¿qué se ha propuesto que ocurre una vez que estos patrones se establecen?

- A. Que se mantienen durante toda la vida
- B. Que se borran por completo en la pubertad
- C. Que se mantienen sólo durante la lactancia
- D. Que se restablecen en cada división celular

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · permanencia de los patrones

Se ha propuesto que una vez que estos patrones se establecen, se mantienen durante toda la vida.

---

### 402

En relación con el libro de Biología, ¿a través de qué se transmite el patrón de comportamiento a la siguiente generación de ratas hembra?

- A. A través de la conducta de cuidado de las crías
- B. A través de la leche materna
- C. A través de los gametos de ambos progenitores
- D. A través de la imitación entre hembras adultas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · transmisión del patrón conductual

A través de la conducta de cuidado de las crías, el patrón de comportamiento se transmite a la siguiente generación de ratas hembra.

---

### 403

De acuerdo con el libro de Biología, ¿de qué es informativo este experimento?

- A. De la existencia de una herencia transgeneracional epigenética de patrones conductuales en esta especie
- B. De la existencia de una herencia transgeneracional epigenética de patrones conductuales en todos los mamíferos
- C. De la existencia de una herencia genética clásica de patrones conductuales en esta especie
- D. De la ausencia de cualquier herencia de patrones conductuales en esta especie

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · alcance del experimento

Este experimento es informativo de la existencia de una herencia transgeneracional epigenética de patrones conductuales en esta especie.

---

### 404

De conformidad con el libro de Biología, ¿qué advierte el texto sobre extrapolar estas conclusiones?

- A. Que sería un desatino extrapolarlas a otras especies y, por cierto, menos aún a humanos
- B. Que es válido extrapolarlas a otras especies, aunque no a humanos
- C. Que es válido extrapolarlas a humanos, aunque no a otras especies
- D. Que sería un desatino extrapolarlas a humanos, pero no a otras especies

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · límites de la extrapolación

Aunque sería un desatino extrapolar estas conclusiones a otras especies y, por cierto, menos aún a humanos.

---

### 405

En relación con el libro de Biología, ¿qué imprime la metáfora antropocéntrica que hace referencia al "cuidado maternal" para describir el comportamiento de las ratas hembra?

- A. Un sesgo que favorece la indebida extrapolación mencionada
- B. Un sesgo que impide reconocer la herencia epigenética
- C. Una precisión que evita la indebida extrapolación mencionada
- D. Una ventaja para comparar la conducta de las ratas con la humana

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · sesgo antropocéntrico

Adviértase que la metáfora antropocéntrica que hace referencia al "cuidado maternal" para describir el comportamiento de las ratas hembra imprime un sesgo que favorece la indebida extrapolación mencionada.

---

### 406

De acuerdo con el libro de Biología, ¿qué ilustran los numerosos ejemplos acumulados en los últimos años?

- A. El importante papel que podrían tener los procesos de la herencia epigenética en la evolución de las poblaciones naturales
- B. El escaso papel que tendrían los procesos de la herencia epigenética en la evolución de las poblaciones naturales
- C. El importante papel que tienen las mutaciones en la secuencia de ADN en la evolución de las poblaciones naturales
- D. El importante papel que tiene la selección artificial en la evolución de las poblaciones naturales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · evolución de poblaciones

En últimos años, se han acumulado numerosos ejemplos que ilustran el importante papel que podrían tener los procesos de la herencia epigenética en la evolución de las poblaciones naturales.

---

### 407

De conformidad con el libro de Biología, ¿qué puede heredarse en forma epigenética en el nematodo *Caenorhabditis elegans*?

- A. El incremento de la longevidad
- B. La disminución de la longevidad
- C. El incremento del tamaño corporal
- D. El incremento de la fecundidad

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · Caenorhabditis elegans

En el nematodo *Caenorhabditis elegans*, el incremento de la longevidad puede heredarse en forma epigenética.

---

### 408

En relación con el libro de Biología, ¿qué puede sintetizar esa especie cuando es atacada por virus?

- A. Pequeñas moléculas de ARN
- B. Pequeñas moléculas de ADN
- C. Grandes moléculas de ARN mensajero
- D. Anticuerpos específicos contra el virus

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · defensa antiviral

Cuando esa especie es atacada por virus puede sintetizar pequeñas moléculas de ARN.

---

### 409

De acuerdo con el libro de Biología, ¿qué hacen esas moléculas además de destruir al agente viral?

- A. Pueden ser heredadas por los descendientes y proporcionarles protección antiviral
- B. Pueden ser heredadas por los descendientes, aunque no les proporcionan protección alguna
- C. Se degradan por completo antes de la formación de los gametos
- D. Se integran a la secuencia de ADN del descendiente y lo vuelven inmune a toda infección

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · protección heredada

No solo destruyen al agente viral, sino que pueden ser heredadas por los descendientes y proporcionarles protección antiviral.

---

### 410

De conformidad con el libro de Biología, ¿qué incluyen los diversos estudios moleculares en la planta *Arabidopsis thaliana*?

- A. La secuenciación del genoma completo y del epigenoma de metilación
- B. La secuenciación del genoma completo, pero no del epigenoma de metilación
- C. La secuenciación del epigenoma de metilación, pero no del genoma completo
- D. La secuenciación de los ARN mensajeros y de las proteínas de la planta

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · Arabidopsis thaliana

Diversos estudios moleculares en la planta *Arabidopsis thaliana*, que incluyen la secuenciación del genoma completo y del epigenoma de metilación.

---

### 411

En relación con el libro de Biología, ¿a través de cuántas generaciones pueden heredarse los diversos patrones que presentan muchos sitios de metilación de esa planta?

- A. A través de, al menos, 14 generaciones
- B. A través de, al menos, 4 generaciones
- C. A través de, al menos, 24 generaciones
- D. A través de, al menos, 40 generaciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · 14 generaciones

Han mostrado que muchos sitios de metilación de esa planta presentan diversos patrones que pueden heredarse a través de, al menos, 14 generaciones.

---

### 412

De acuerdo con el libro de Biología, ¿qué muestran estos y otros casos estudiados?

- A. Que muchas variaciones epigenéticas pueden heredarse mediante meiosis, aunque sus estabilidades varían
- B. Que muchas variaciones epigenéticas pueden heredarse mediante meiosis, y todas tienen la misma estabilidad
- C. Que las variaciones epigenéticas sólo pueden heredarse mediante mitosis
- D. Que ninguna variación epigenética puede heredarse mediante meiosis

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · herencia por meiosis

Estos y otros casos estudiados muestran que muchas variaciones epigenéticas pueden heredarse mediante meiosis, aunque sus estabilidades varían.

---

### 413

De conformidad con el libro de Biología, ¿qué originan los procesos de alopoliploidización?

- A. Variedades o, incluso, nuevas especies en plantas
- B. Variedades o, incluso, nuevas especies en animales
- C. Únicamente variedades en plantas, nunca nuevas especies
- D. Nuevos linajes de bacterias y de nematodos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · alopoliploidización

Los procesos de alopoliploidización que originan variedades o, incluso, nuevas especies en plantas.

---

### 414

En relación con el libro de Biología, ¿qué cambios se pueden producir en esos procesos?

- A. Cambios epigenéticos que afectan a todo el genoma, algunos de los cuales se transmiten a las siguientes generaciones
- B. Cambios epigenéticos que afectan a un solo cromosoma y no se transmiten a las siguientes generaciones
- C. Cambios en la secuencia de ADN de todo el genoma, ninguno de los cuales se transmite
- D. Cambios epigenéticos que afectan a todo el genoma y que se borran siempre en la siguiente generación

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · cambios en todo el genoma

Se pueden producir cambios epigenéticos que afectan a todo el genoma, algunos de los cuales se transmiten a las siguientes generaciones.

---

### 415

De acuerdo con el libro de Biología, ¿qué porcentaje de modificaciones en los patrones de metilación se encontró entre dos híbridos recientemente formados y morfológicamente diferenciados de plantas del género *Spartina*?

- A. Un 30%
- B. Un 3%
- C. Un 13%
- D. Un 60%

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · Spartina

Entre dos híbridos recientemente formados y morfológicamente diferenciados de plantas del género *Spartina* –uno de ellos alopoliploide– se encontró un 30% de modificaciones en los patrones de metilación.

---

### 416

De conformidad con el libro de Biología, ¿qué se encontró además de esas modificaciones en los patrones de metilación?

- A. Cambios estructurales en la secuencia de ADN
- B. Cambios estructurales en la secuencia de ARN
- C. La pérdida completa de un juego de cromosomas
- D. La ausencia de cualquier otro cambio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · cambios estructurales

Además de cambios estructurales en la secuencia de ADN.

---

### 417

En relación con el libro de Biología, ¿qué sugiere ese hallazgo?

- A. Que las primeras etapas de la hibridación o de la duplicación cromosómica estarían acompañadas por cambios epigenéticos heredables
- B. Que las últimas etapas de la hibridación o de la duplicación cromosómica estarían acompañadas por cambios epigenéticos heredables
- C. Que la hibridación y la duplicación cromosómica ocurren sin ningún cambio epigenético
- D. Que los cambios epigenéticos impiden la hibridación y la duplicación cromosómica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · primeras etapas de la hibridación

Esto sugiere que las primeras etapas de la hibridación o de la duplicación cromosómica estarían acompañadas por cambios epigenéticos heredables.

---

### 418

De acuerdo con el libro de Biología, ¿qué otro elemento juega un papel en la evolución epigenética?

- A. Los ARN reguladores
- B. Las proteínas histonas
- C. Las enzimas de restricción
- D. Los ribosomas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · ARN reguladores

Los ARN reguladores también juegan un papel en la evolución epigenética.

---

### 419

De conformidad con el libro de Biología, ¿qué pueden permitir los cambios en una secuencia de ARN?

- A. Que esta cadena se una a diferentes secuencias complementarias de ADN, dirigirse a genes completamente nuevos o reclutar diferentes modificadores epigenéticos de sus genes blanco
- B. Que esta cadena se una siempre a la misma secuencia complementaria de ADN y conserve sus genes blanco
- C. Que esta cadena se transforme en una molécula de ADN y se integre al genoma
- D. Que esta cadena destruya a los modificadores epigenéticos de sus genes blanco

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · cambios en la secuencia de ARN

Los cambios en una secuencia de ARN pueden permitir que esta cadena se una a diferentes secuencias complementarias de ADN, dirigirse a genes completamente nuevos o reclutar diferentes modificadores epigenéticos de sus genes blanco, cambiando sus estados de activación.

---

### 420

En relación con el libro de Biología, ¿qué efectos pueden tener incluso los pequeños cambios en la secuencia de ARN?

- A. Efectos significativos sobre los patrones de activación de los genes
- B. Efectos insignificantes sobre los patrones de activación de los genes
- C. Efectos significativos sobre el número de cromosomas
- D. Efectos significativos únicamente sobre la longitud del ARN mensajero

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · efecto de los pequeños cambios

Incluso, pequeños cambios en la secuencia de ARN pueden tener efectos significativos sobre los patrones de activación de los genes.

---

### 421

De acuerdo con el libro de Biología, ¿qué relevancia podrían tener las mutaciones que afectan a los ARN reguladores?

- A. Podrían ser tan relevantes como aquellas que alteran las secuencias de proteínas o, incluso, ser aún más importantes
- B. Podrían ser tan relevantes como aquellas que alteran las secuencias de proteínas, pero nunca más importantes
- C. Serían siempre menos relevantes que aquellas que alteran las secuencias de proteínas
- D. Carecerían por completo de relevancia frente a aquellas que alteran las secuencias de proteínas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · mutaciones en ARN reguladores

Por esta razón, las mutaciones que afectan a los ARN reguladores podrían ser tan relevantes como aquellas que alteran las secuencias de proteínas o, incluso, ser aún más importantes.

---

### 422

De conformidad con el libro de Biología, ¿qué se ha observado respecto de los ARNlnc?

- A. Que si bien algunos se encuentran conservados en múltiples especies, muchos otros son exclusivos de una sola
- B. Que todos se encuentran conservados en múltiples especies
- C. Que todos son exclusivos de una sola especie
- D. Que sólo se encuentran en las especies que se reproducen rápidamente

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · ARNlnc

Se ha observado que, si bien algunos ARNlnc se encuentran conservados en múltiples especies, muchos otros son exclusivos de una sola.

---

### 423

En relación con el libro de Biología, ¿qué hipótesis fortalece aún más esa evidencia?

- A. La que sostiene que la evolución del ARN está estrechamente involucrada en la evolución de las especies
- B. La que sostiene que la evolución del ARN es independiente de la evolución de las especies
- C. La que sostiene que la evolución de las proteínas es el único motor de la evolución de las especies
- D. La que sostiene que la metilación del ADN es el único mecanismo epigenético heredable

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 319
**Subtema:** epigenética · recuadro 14-4 · evolución del ARN

Esta evidencia fortalece aún más la hipótesis que sostiene que la evolución del ARN está estrechamente involucrada en la evolución de las especies.

---

### 424

De acuerdo con el libro de Biología, ¿de qué libro son autoras Eva Jablonka y Marion Lamb?

- A. *La evolución en cuatro dimensiones* (2013)
- B. *La evolución en tres dimensiones* (2013)
- C. *La evolución en cuatro dimensiones* (2003)
- D. *La herencia en cuatro dimensiones* (2013)

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · Jablonka y Lamb

Las biólogas Eva Jablonka y Marion Lamb, autoras del libro *La evolución en cuatro dimensiones* (2013).

---

### 425

De conformidad con el libro de Biología, ¿qué lugar asignan esas autoras, en su concepción de la evolución, a los modelos y los ejemplos del campo de la epigenética?

- A. Un lugar privilegiado
- B. Un lugar secundario
- C. Un lugar equivalente al del sistema genético
- D. Un lugar marginal, sólo como excepciones

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · lugar de la epigenética en la evolución

Incorporan y asignan un lugar privilegiado, en su concepción de la evolución, a los modelos y los ejemplos del campo de la epigenética.

---

### 426

En relación con el libro de Biología, ¿qué destacan las autoras respecto de la epigenética?

- A. Su importancia en el conocimiento biológico contemporáneo
- B. Su escasa importancia en el conocimiento biológico contemporáneo
- C. Su importancia histórica, ya superada por la genética molecular
- D. Su utilidad exclusiva en el estudio de las plantas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · conocimiento biológico contemporáneo

Destacan su importancia en el conocimiento biológico contemporáneo.

---

### 427

De acuerdo con el libro de Biología, según la tesis fundamental que proponen esas autoras, ¿qué está experimentando el pensamiento de la biología en lo que atañe a la herencia y la evolución?

- A. Un cambio revolucionario
- B. Un cambio gradual y menor
- C. Un retorno a las ideas del neodarwinismo
- D. Un estancamiento de varias décadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · tesis fundamental

"… el pensamiento de la biología en lo que atañe a la herencia y la evolución está experimentando un cambio revolucionario".

---

### 428

De conformidad con el libro de Biología, ¿qué es lo que está ocurriendo, de acuerdo con esa tesis?

- A. Una nueva síntesis que desafía la versión del neodarwinismo
- B. Una nueva síntesis que confirma la versión del neodarwinismo
- C. El abandono definitivo de la teoría de la evolución
- D. El regreso a la concepción de Lamarck

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · nueva síntesis

"Lo que está ocurriendo es una nueva síntesis que desafía la versión del neodarwinismo".

---

### 429

En relación con el libro de Biología, ¿durante cuántos años dominó el pensamiento biológico esa versión del neodarwinismo cuyo foco son los genes?

- A. Durante los últimos cincuenta años
- B. Durante los últimos quince años
- C. Durante los últimos cinco años
- D. Durante los últimos cien años

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · dominio del neodarwinismo

La versión del neodarwinismo, cuyo foco son los genes, que dominó el pensamiento biológico durante los últimos cincuenta años.

---

### 430

De acuerdo con el libro de Biología, ¿qué han mostrado los procesos y ejemplos descritos por el nuevo campo de la epigenética?

- A. Que las células pueden transmitir información a las células hijas a través de la herencia no genética
- B. Que las células sólo pueden transmitir información a las células hijas a través de la herencia genética
- C. Que las células hijas no reciben información alguna de la célula madre
- D. Que las células pueden transmitir información únicamente por medios conductuales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · herencia no genética

Los procesos y ejemplos descritos por el nuevo campo de la epigenética han mostrado que las células pueden transmitir información a las células hijas a través de la herencia no genética.

---

### 431

De conformidad con el libro de Biología, ¿qué significa lo anterior?

- A. Que existen, al menos, dos sistemas de herencia
- B. Que existe un único sistema de herencia
- C. Que existen exactamente cuatro sistemas de herencia
- D. Que el sistema genético es el único verificable

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · dos sistemas de herencia

Lo que significa que existen, al menos, dos sistemas de herencia.

---

### 432

En relación con el libro de Biología, ¿qué supone que muchos animales trasmitan información a otros por medios conductuales?

- A. Un tercer sistema de herencia
- B. Un segundo sistema de herencia
- C. Un cuarto sistema de herencia
- D. Una variante del sistema genético

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · tercer sistema de herencia

Destacan que muchos animales trasmiten información a otros por medios conductuales, lo que supone un tercer sistema de herencia.

---

### 433

De acuerdo con el libro de Biología, ¿por qué cuentan los humanos, además, con un cuarto sistema?

- A. Porque la herencia simbólica, particularmente el lenguaje, cumple un papel sustancial en nuestra evolución
- B. Porque la herencia genética, particularmente el ADN, cumple un papel sustancial en nuestra evolución
- C. Porque la herencia conductual, particularmente la imitación, cumple un papel sustancial en nuestra evolución
- D. Porque la herencia epigenética, particularmente la metilación, cumple un papel sustancial en nuestra evolución

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · herencia simbólica

Nosotros, los humanos, contamos, además, con un cuarto sistema porque la herencia simbólica, particularmente el lenguaje, cumple un papel sustancial en nuestra evolución.

---

### 434

De conformidad con el libro de Biología, ¿qué resulta bastante errado, por lo tanto?

- A. Pensar acerca de la herencia y la evolución solo en función del sistema genético
- B. Pensar acerca de la herencia y la evolución en función de cuatro sistemas
- C. Pensar acerca de la herencia y la evolución en función del lenguaje
- D. Pensar acerca de la herencia y la evolución en función de la conducta animal

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · crítica al enfoque genético único

Por lo tanto, es bastante errado pensar acerca de la herencia y la evolución solo en función del sistema genético.

---

### 435

En relación con el libro de Biología, ¿qué es posible construir al adoptar una perspectiva cuatridimensional?

- A. Una teoría de la evolución mucho más rica y compleja, en la que el gen no sea el único foco de la selección natural
- B. Una teoría de la evolución mucho más simple, en la que el gen siga siendo el único foco de la selección natural
- C. Una teoría de la herencia que reemplace por completo a la selección natural
- D. Una teoría de la evolución basada exclusivamente en la herencia simbólica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · perspectiva cuatridimensional

Al adoptar una perspectiva cuatridimensional, es posible construir una teoría de la evolución mucho más rica y compleja, en la que el gen no sea el único foco de la selección natural.

---

### 436

De acuerdo con el libro de Biología, ¿desde qué días ha recorrido un largo camino la teoría evolutiva?

- A. Desde los días de Lamarck y Darwin
- B. Desde los días de Mendel y Morgan
- C. Desde los días de Watson y Crick
- D. Desde los días de Jablonka y Lamb

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · recorrido de la teoría evolutiva

La teoría evolutiva ha recorrido un largo camino desde los días de Lamarck y Darwin.

---

### 437

De conformidad con el libro de Biología, ¿qué es aún difícil de evaluar cabalmente en la actualidad?

- A. Cuánto han contribuido los procesos epigenéticos a la evolución de la vida en la Tierra
- B. Cuánto han contribuido las mutaciones del ADN a la evolución de la vida en la Tierra
- C. Cuántos sistemas de herencia existen en los seres vivos
- D. Cuánto tiempo dominó el neodarwinismo el pensamiento biológico

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · aporte a la evolución

En la actualidad, es aún difícil evaluar cabalmente cuánto han contribuido los procesos epigenéticos a la evolución de la vida en la Tierra.

---

### 438

En relación con el libro de Biología, ¿de qué se tiene ahora una comprensión más amplia?

- A. De los principios subyacentes por los cuales tanto las secuencias de ADN como los patrones de modificación epigenética pueden evolucionar a través el tiempo
- B. De los principios subyacentes por los cuales sólo las secuencias de ADN pueden evolucionar a través el tiempo
- C. De los principios subyacentes por los cuales sólo los patrones de modificación epigenética pueden evolucionar a través el tiempo
- D. De los principios subyacentes por los cuales las especies dejan de evolucionar con el tiempo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · principios subyacentes

Ahora tenemos una comprensión más amplia de los principios subyacentes por los cuales tanto las secuencias de ADN como los patrones de modificación epigenética pueden evolucionar a través el tiempo.

---

### 439

De acuerdo con el libro de Biología, ¿qué ejemplos se han comenzado a encontrar?

- A. Ejemplos de cambios epigenéticos que contribuyen a revisar y ampliar el marco de interpretación de la biología evolutiva
- B. Ejemplos de cambios epigenéticos que confirman sin cambios el marco de interpretación de la biología evolutiva
- C. Ejemplos de cambios genéticos que reemplazan al marco de interpretación de la biología evolutiva
- D. Ejemplos de cambios epigenéticos que no dejan huella en la evolución

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética · marco de la biología evolutiva

Hemos comenzado a encontrar ejemplos de cambios epigenéticos que contribuyen a revisar y ampliar el marco de interpretación de la biología evolutiva.

---

### 440

De conformidad con el libro de Biología, ¿qué sustento tienen las promesas enunciadas por la industria biotecnológica sobre enormes avances en el diagnóstico y tratamiento de enfermedades?

- A. Tienen poco sustento real
- B. Tienen un sustento real y comprobado
- C. Tienen el mismo sustento que los tratamientos genéticos
- D. Tienen sustento sólo en el ámbito de la oncología

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · promesas de la industria

Las promesas enunciadas por la industria biotecnológica sobre enormes avances en el diagnóstico y tratamiento de enfermedades tienen poco sustento real.

---

### 441

En relación con el libro de Biología, ¿cuántos trabajos sobre ARN se publicaron en el mundo solo en 2017?

- A. Más de 45 000
- B. Más de 4 500
- C. Más de 23 000
- D. Más de 145 000

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · trabajos publicados en 2017

Solo en 2017 se publicaron en el mundo más de 45 000 trabajos sobre ARN.

---

### 442

De acuerdo con el libro de Biología, de esos trabajos, ¿cuántos sugieren, de manera general, que sus estudios podrían contribuir al diagnóstico y tratamiento de enfermedades?

- A. Más de 23 000
- B. Más de 45 000
- C. Más de 2 300
- D. Más de 33 000

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · trabajos con aplicación clínica

De ellos, más de 23 000 sugieren, de manera general, que sus estudios podrían contribuir al diagnóstico y tratamiento de enfermedades.

---

### 443

De conformidad con el libro de Biología, ¿en qué situación se encuentran actualmente muchas tecnologías y terapias basadas en procesos epigenéticos?

- A. Aún en fases tempranas de estudio
- B. Ya en uso generalizado en los hospitales
- C. Abandonadas por falta de resultados
- D. En la última fase de aprobación sanitaria

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · estado de las terapias

Actualmente muchas tecnologías y terapias basadas en procesos epigenéticos se encuentran aún en fases tempranas de estudio.

---

### 444

En relación con el libro de Biología, ¿en qué ámbito tienen una amplia aceptación algunos estudios de diagnóstico basados en miARN?

- A. En el ámbito de la oncología
- B. En el ámbito de la cardiología
- C. En el ámbito de la neurología
- D. En el ámbito de la infectología

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · diagnóstico con miARN

Algunos estudios de diagnóstico basados en miARN tienen una amplia aceptación en el ámbito de la oncología, con reconocidos resultados y beneficios.

---

### 445

De acuerdo con el libro de Biología, ¿para qué puede aplicarse el análisis de miARN?

- A. Para tipificar casos de cáncer con metástasis en los que se desconoce el origen primario del tumor
- B. Para tipificar casos de cáncer sin metástasis en los que se conoce el origen primario del tumor
- C. Para eliminar por completo las metástasis del paciente
- D. Para predecir qué personas sanas desarrollarán cáncer

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · origen primario del tumor

Un ejemplo de estos es el análisis de miARN que puede aplicarse para tipificar casos de cáncer con metástasis en los que se desconoce el origen primario del tumor.

---

### 446

De conformidad con el libro de Biología, ¿para qué se han desarrollado estudios específicos que analizan nódulos?

- A. Para la identificación del cáncer tiroideo
- B. Para la identificación del cáncer pulmonar
- C. Para la identificación del cáncer hepático
- D. Para la identificación del cáncer de mama

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · cáncer tiroideo

También se han desarrollado estudios específicos para analizar nódulos en la identificación del cáncer tiroideo.

---

### 447

En relación con el libro de Biología, ¿qué permite caracterizar con mayor precisión el análisis de miARN y ARNm presentes en las muestras provenientes de biopsias?

- A. La tasa de crecimiento del tumor y su morbilidad
- B. La edad exacta del paciente y su expectativa de vida
- C. El número de metástasis presentes en el organismo
- D. La secuencia completa del genoma del tumor

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · clasificación tumoral

El análisis de miARN y ARNm presentes en las muestras provenientes de biopsias permite caracterizar con mayor precisión la tasa de crecimiento del tumor y su morbilidad.

---

### 448

De acuerdo con el libro de Biología, ¿qué puede orientar ese análisis en algunos casos?

- A. Las decisiones terapéuticas
- B. La elección del hospital de tratamiento
- C. El pronóstico de vida exacto del paciente
- D. La decisión de suspender todo tratamiento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · decisiones terapéuticas

Así como también, en algunos casos, puede orientar las decisiones terapéuticas.

---

### 449

De conformidad con el libro de Biología, en cuanto a los tratamientos, ¿cuál es quizá el más exitoso basado en estos saberes?

- A. El de la hepatitis C
- B. El de la hepatitis B
- C. El del cáncer tiroideo
- D. El de las anomalías congénitas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · hepatitis C

En cuanto a los tratamientos, quizá el más exitoso basado en estos saberes es el de la hepatitis C.

---

### 450

En relación con el libro de Biología, ¿qué emplea esa estrategia terapéutica?

- A. Un antagonista del miARN del virus que produce esta enfermedad
- B. Un antagonista del ADN del virus que produce esta enfermedad
- C. Un precursor del miARN del virus que produce esta enfermedad
- D. Un anticuerpo contra las proteínas de la cápside viral

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · antagonista del miARN

Esta estrategia terapéutica emplea un antagonista del miARN del virus que produce esta enfermedad.

---

### 451

De acuerdo con el libro de Biología, al reducir su actividad, ¿qué ocurre con la concentración del virus de hepatitis C?

- A. Disminuye a niveles indetectables
- B. Disminuye a la mitad de su valor inicial
- C. Se mantiene estable durante el tratamiento
- D. Aumenta antes de desaparecer

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · niveles indetectables

Al reducir su actividad, la concentración del virus de hepatitis C disminuye a niveles indetectables.

---

### 452

De conformidad con el libro de Biología, ¿qué media el miARN blanco de este medicamento?

- A. La invasión del virus a las células sanas, en particular al proceso de incorporación de este al núcleo celular
- B. La invasión del virus a las células sanas, en particular al proceso de salida de este de la célula
- C. La destrucción de las células ya infectadas por el virus
- D. La replicación del material genético del virus en el citoplasma

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · invasión a células sanas

El miARN blanco de este medicamento media la invasión del virus a las células sanas, en particular al proceso de incorporación de este al núcleo celular.

---

### 453

En relación con el libro de Biología, al impedir la propagación de la infección, ¿qué favorece este tratamiento?

- A. La posibilidad de que el sistema inmunitario del paciente pueda eliminar las células previamente infectadas
- B. La posibilidad de que el virus mute hacia formas menos agresivas
- C. La regeneración inmediata del tejido hepático dañado
- D. La eliminación directa del virus por el propio medicamento

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · papel del sistema inmunitario

Al impedir la propagación de la infección, este tratamiento favorece la posibilidad de que el sistema inmunitario del paciente pueda eliminar las células previamente infectadas.

---

### 454

De acuerdo con el libro de Biología, ¿de qué modo han puesto en evidencia diversos estudios científicos la importancia de los factores ambientales en la expresión del genoma?

- A. Exponiendo células humanas en cultivo a diversos químicos, en condiciones experimentales
- B. Exponiendo animales de laboratorio a diversos químicos, en condiciones naturales
- C. Analizando el genoma completo de poblaciones humanas aisladas
- D. Comparando el genoma de especies emparentadas entre sí

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · factores ambientales

Por ejemplo, exponiendo células humanas en cultivo a diversos químicos, en condiciones experimentales.

---

### 455

De conformidad con el libro de Biología, ¿qué se ha comparado asimismo?

- A. Los patrones de modificación epigenética en personas que han experimentado exposiciones a la misma sustancia química
- B. Los patrones de modificación epigenética en personas que nunca han estado expuestas a sustancias químicas
- C. Las secuencias de ADN de personas que han experimentado exposiciones a la misma sustancia química
- D. Los patrones de modificación epigenética entre distintas especies animales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · exposiciones comparadas

Asimismo, se han comparado los patrones de modificación epigenética en personas que han experimentado exposiciones a la misma sustancia química.

---

### 456

En relación con el libro de Biología, ¿qué sustancias dañinas para la salud pueden operar como modificadores epigenéticos?

- A. Nicotina, benceno, arsénico, insecticidas, herbicidas e infecciones virales
- B. Nicotina, benceno, mercurio, insecticidas, herbicidas e infecciones bacterianas
- C. Alcohol, plomo, arsénico, fertilizantes, herbicidas e infecciones virales
- D. Nicotina, benceno, arsénico, ácido fólico, herbicidas e infecciones virales

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · sustancias dañinas

La gama de sustancias que pueden operar como modificadores epigenéticos incluye tanto a los que son dañinos para la salud (nicotina, benceno, arsénico, insecticidas, herbicidas, infecciones virales).

---

### 457

De acuerdo con el libro de Biología, ¿qué sustancias pueden resultar beneficiosas bajo ciertas circunstancias?

- A. El ácido fólico y la vitamina C
- B. El ácido fólico y la vitamina D
- C. El hierro y la vitamina C
- D. El ácido fólico y el calcio

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · sustancias beneficiosas

Como a aquellos que bajo ciertas circunstancias pueden resultar beneficiosos (ácido fólico y vitamina C).

---

### 458

De conformidad con el libro de Biología, ¿en qué resultó la fortificación de harinas con ácido fólico, o su indicación en mujeres que planifican un embarazo?

- A. En una de las más exitosas políticas públicas que contribuyen a la prevención de anomalías congénitas
- B. En una de las más costosas políticas públicas que no logró prevenir anomalías congénitas
- C. En una política pública destinada a prevenir enfermedades cardiovasculares
- D. En una recomendación médica sin efectos comprobados

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · ácido fólico como política pública

La fortificación de harinas con ácido fólico, o su indicación en mujeres que planifican un embarazo, resultó en una de las más exitosas políticas públicas que contribuyen a la prevención de anomalías congénitas.

---

### 459

En relación con el libro de Biología, ¿qué incidencia ha reducido esa política?

- A. La de defectos del cierre del tubo neural y de alteraciones del desarrollo del sistema nervioso central
- B. La de defectos del cierre del tubo digestivo y de alteraciones del desarrollo del sistema digestivo
- C. La de malformaciones cardíacas y de alteraciones del desarrollo del sistema circulatorio
- D. La de defectos del cierre del tubo neural y de alteraciones del crecimiento óseo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 320
**Subtema:** epigenética y salud · tubo neural

Ha reducido la incidencia de defectos del cierre del tubo neural y de alteraciones del desarrollo del sistema nervioso central.

---

### 460

De acuerdo con el libro de Biología, ¿en qué etapa de la vida puede la exposición ambiental afectar nuestra salud?

- A. En cualquier etapa de la vida
- B. Únicamente en la etapa embrionaria
- C. Únicamente en la etapa adulta
- D. Únicamente en las etapas potencialmente reproductivas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · exposición ambiental

La exposición ambiental en cualquier etapa de la vida puede afectar nuestra salud.

---

### 461

De conformidad con el libro de Biología, ¿cuáles son los momentos del desarrollo con mayor plasticidad?

- A. El embrionario, el fetal y la infancia
- B. El embrionario, la infancia y la adolescencia
- C. El fetal, la infancia y la adultez
- D. El embrionario, el fetal y la vejez

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · momentos de mayor plasticidad

Siendo de particular importancia las exposiciones en los momentos del desarrollo con mayor plasticidad (embrionario, fetal e infancia).

---

### 462

En relación con el libro de Biología, ¿en qué otras etapas son de particular importancia esas exposiciones?

- A. En etapas potencialmente reproductivas
- B. En etapas posteriores a la reproducción
- C. En las etapas de mayor actividad laboral
- D. En las etapas de crecimiento óseo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · etapas reproductivas

Así como en etapas potencialmente reproductivas.

---

### 463

De acuerdo con el libro de Biología, ¿cuál es la tendencia de las publicaciones actuales?

- A. Interpretar estas nuevas evidencias en el marco de viejos reduccionismos
- B. Interpretar estas nuevas evidencias en el marco de la perspectiva cuatridimensional
- C. Descartar estas nuevas evidencias por considerarlas poco confiables
- D. Interpretar estas nuevas evidencias sin ningún marco teórico previo

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · viejos reduccionismos

La tendencia de las publicaciones actuales es interpretar estas nuevas evidencias en el marco de viejos reduccionismos.

---

### 464

De conformidad con el libro de Biología, ¿qué grandes promesas se anuncian a la par?

- A. Que estas innovaciones darán lugar al desarrollo de nuevas tecnologías para diagnosticar y tratar padecimientos que hasta ahora no tienen cura, o mejorar la forma de hacerlo en padecimientos que cuentan con tratamientos vigentes
- B. Que estas innovaciones permitirán prescindir por completo de los tratamientos farmacológicos vigentes
- C. Que estas innovaciones reemplazarán al diagnóstico genético en todos los padecimientos conocidos
- D. Que estas innovaciones eliminarán la influencia del ambiente sobre la salud de las personas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · promesas anunciadas

Se anuncian grandes promesas respecto de cómo estas innovaciones darán lugar al desarrollo de nuevas tecnologías para diagnosticar y tratar padecimientos que hasta ahora no tienen cura, o mejorar la forma de hacerlo en padecimientos que cuentan con tratamientos vigentes.

---

### 465

En relación con el libro de Biología, ¿qué no se debe desconocer al valorar las posibles implicancias terapéuticas de estos saberes?

- A. Que este campo del conocimiento excede a los desarrollos farmacéuticos y, en más de una manera, los cuestiona
- B. Que este campo del conocimiento se limita a los desarrollos farmacéuticos y los confirma
- C. Que este campo del conocimiento carece de implicancias terapéuticas comprobadas
- D. Que este campo del conocimiento depende por completo de la industria farmacéutica

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · más allá de lo farmacéutico

Es fundamental valorar las posibles implicancias terapéuticas que tienen estos saberes, pero sin desconocer que este campo del conocimiento excede a los desarrollos farmacéuticos y, en más de una manera, los cuestiona.

---

### 466

De acuerdo con el libro de Biología, ¿en qué direcciones puede generarse el conocimiento científico?

- A. En las direcciones que indiquen las curiosidades de los investigadores
- B. En las direcciones que indiquen los organismos que aprueban los medicamentos
- C. En las direcciones que indiquen las escuelas de medicina
- D. En las direcciones que indiquen las comunidades afectadas

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · dirección del conocimiento científico

El conocimiento científico puede generarse en las direcciones que indiquen las curiosidades de los investigadores.

---

### 467

De conformidad con el libro de Biología, ¿por qué se encuentran fuertemente condicionadas sus tendencias?

- A. Por el financiamiento de los estados y del sector privado
- B. Por el financiamiento exclusivo de los estados
- C. Por el financiamiento exclusivo del sector privado
- D. Por las prioridades de las escuelas de medicina

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · condicionamiento del financiamiento

Pero sus tendencias se encuentran fuertemente condicionadas por el financiamiento de los estados y del sector privado.

---

### 468

En relación con el libro de Biología, ¿qué lleva haciendo la ciencia hegemónica desde hace algunas décadas?

- A. Responsabilizando a los genes de todas las dolencias
- B. Responsabilizando al ambiente de todas las dolencias
- C. Responsabilizando a los estilos de vida de todas las dolencias
- D. Responsabilizando a los procesos epigenéticos de todas las dolencias

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · ciencia hegemónica

La ciencia hegemónica lleva algunas décadas ya responsabilizando a los genes de todas las dolencias.

---

### 469

De acuerdo con el libro de Biología, ¿qué reconocen no pocas escuelas de medicina?

- A. El valor de los condicionantes de salud y estilos de vida en la calidad de vida de las personas
- B. El valor exclusivo de la herencia genética en la calidad de vida de las personas
- C. El valor de los tratamientos farmacológicos por encima de cualquier otro factor
- D. El valor de los estudios de diagnóstico basados en miARN

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · condicionantes y estilos de vida

Aunque no son pocas las escuelas de medicina que reconocen el valor de los condicionantes de salud y estilos de vida en la calidad de vida de las personas.

---

### 470

De conformidad con el libro de Biología, ¿qué abre actualmente el campo de la epigenética?

- A. Un universo de factores condicionantes de salud que no estaban siendo considerados
- B. Un universo de factores genéticos que ya estaban siendo considerados
- C. Un conjunto reducido de factores condicionantes de salud ya conocidos
- D. Un universo de tratamientos farmacológicos de eficacia comprobada

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · nuevos factores condicionantes

Actualmente, el campo de la epigenética abre un universo de factores condicionantes de salud que no estaban siendo considerados.

---

### 471

En relación con el libro de Biología, ¿para quiénes es un desafío abierto abordar la investigación y el debate acerca de estas problemáticas?

- A. Para la comunidad científica, la comunidad médica, los educadores, los gestores de agendas y políticas públicas y, por lo tanto, para la sociedad toda
- B. Únicamente para la comunidad científica y la comunidad médica
- C. Únicamente para los gestores de agendas y políticas públicas
- D. Para la industria biotecnológica y los organismos que aprueban los medicamentos

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. 321
**Subtema:** epigenética y salud · desafío abierto

Abordar la investigación y el debate acerca de estas problemáticas es un desafío abierto para la comunidad científica, la comunidad médica, los educadores, los gestores de agendas y políticas públicas y, por lo tanto, para la sociedad toda.

---
