# Pendientes del examen cultural

**Reescrito el 24 jul 2026.** La versión anterior era del 22 jul y ya mentía: daba
la EMM por "un cuarto de camino" cuando Química, Física y Álgebra ya estaban
escritas.

Las cifras de este archivo salen de contar el disco el día que se escribió. Si
dudas, vuelve a contar — **`ESTADO.md` es la fuente que se regenera**:

```
node tools/estado-proyecto/generar-estado.js
```

A hoy: **3,946 reactivos en 43 archivos**, siete libros.

Ordenado por lo que más duele, no por lo más fácil.

---

## 1 · BLOQUEANTE · El importador del HCM ya no encuentra Álgebra, y borra antes de escribir

`apps/backend/scripts/importar-cultural.ts` apunta a una carpeta que ya no tiene
lo que tenía:

```
const DIR = path.resolve(__dirname, '../../../docs/examen-cultural/HCM');   // línea 34
```

Álgebra **salió de esa carpeta** el 23 jul (commit `d8211f7`, migración a
`algebra-baldor/` para que el material pertenezca al libro y no a la escuela).
Hoy en `HCM/` sólo quedan Español, Geografía e Historia: **834 reactivos de los
1,170 que pide el HCM**.

Y el script no es aditivo — antes de escribir, borra:

```
await prisma.reactivo.deleteMany({ where: { banco: BANCO } });   // línea 387
```

**Consecuencia:** si alguien vuelve a correr ese importador hoy, el examen del
HCM pierde sus 336 reactivos de Álgebra y el bloque se queda vacío. No avisa de
nada: lee los archivos que encuentra y da el conteo por bueno.

**Qué hace falta:** que el importador viejo lea también `algebra-baldor/` (sólo
los capítulos I–VI y Preliminares, que es lo que pide `ALG-02-2026`), o que se
retire en favor de la ruta de oferta del punto 3. Mientras se decide, **no correr
`importar-cultural.ts`**.

---

## 2 · BLOQUEANTE · El puente no distingue plantel, y dos escuelas con el mismo código piden cosas distintas

`puente-oferta-demanda.json` está indexado **sólo por código de materia**:

```
"BIO-01-2026": { "slug": "biologia-curtis", "capitulos": [3,4,5,7,8,11,12,31,32,35,36,37] }
```

El supuesto era que un mismo código pide lo mismo en todas las escuelas. **Es
falso.** Comparando los `temas[]` de `temarios.json` plantel por plantel:

| Código | EMM pide | EMOS pide | EMO pide | EME pide |
|---|---|---|---|---|
| `BIO-01-2026` | 3,4,5,7,8,11,12,31,32,35,36,37 | **sin 7, 11 y 12; con 14 y 15** | **+ cap 33** | sólo 3,4,5,7,35,37 |
| `QUI-02-2026` | 2,3,4,9,24 | **2, 3 y 5 (Gases)** | 2,3,4,9 | 2,3,4 |
| `ALGE-04-2026` | hasta XXIV | **+ XXV** | hasta XXIV | — |
| `FG-03-2026` | U3,4,5,6,8,11 | **sólo U4, U5 y U8, con otros temas** | — | — |

Lo que hay en el puente es, en los cuatro casos, **la lista de la EMM**.

**Consecuencia hoy:** `GET /examenes/cultural/EMOS/armar` le entrega al aspirante
de Sanidad los capítulos de Medicina —incluidos el 7, el 11 y el 12, que su
temario no pide— y **nunca** los capítulos 14 y 15, que sí. Con Química, la EME
recibe los capítulos 9 y 24 que no le tocan. El examen se arma sin error visible:
simplemente está mal.

**Qué hace falta:** indexar el puente por **plantel + código** en vez de sólo
código. Toca tres sitios: el JSON, `scripts/resolver-cultural.ts` y
`apps/backend/src/examenes/examenes.service.ts` (línea 207, `puente[codigo]`).

**Ojo al hacerlo:** el resolver ya valida que cada slug y cada capítulo del
puente existan en la oferta. Esa validación hay que conservarla — es lo que
avisaría si se escribe un capítulo que todavía no está.

---

## 3 · PENDIENTE · Lo escrito fuera del HCM aún no llega al simulador

Ya existe la ruta nueva, construida el 24 jul y **aditiva a propósito** (no toca
el banco viejo):

| Pieza | Qué hace |
|---|---|
| `scripts/importar-cultural-oferta.ts` | Construye el árbol Libro → Capítulo → Tema desde los `.md`, banco `'cultural'` |
| `puente-oferta-demanda.json` | Código de materia → slug de libro + capítulos (ver punto 2) |
| `scripts/resolver-cultural.ts` | Sólo lectura: valida el puente y reporta cuántos reactivos hay por materia |
| `scripts/armar-cultural.ts` | Ensambla el examen por `temaId` |
| `GET /examenes/cultural/:plantel/armar` | El endpoint |

Pero **el simulador que corre hoy sigue sirviendo el banco plano** `cultural-hcm`
(`examenes.service.ts`, línea 24). Los 2,776 reactivos que no son del HCM viven
sólo en archivos `.md`: ningún aspirante los ve.

**Qué falta para cerrarlo:** arreglar el punto 2, correr el importador de oferta
en seco, crear los `Examen` de EMM/EMO/EMOS/EME, y decidir si el simulador pasa a
la ruta nueva o se mantienen las dos.

**Lo que ya está resuelto y hay que conservar:** el barajado de opciones y el
descarte de las notas `>`. El barajado se siembra con el propio enunciado para
que el orden sea estable —si alguien reporta "la 40 tiene mal la respuesta", al
reimportar la 40 sigue siendo la misma—. Verificado el 22 jul sobre los 240
reactivos del capítulo 7: la correcta queda repartida 24 % / 28 % / 25 % / 23 %
entre A, B, C y D.

**No hay pruebas del endpoint.** `examenes.service.spec.ts` no menciona nada
cultural.

---

## 4 · RIESGO · El marcador `**Pendiente:**` ya falló dos veces en un día

El generador de `ESTADO.md` busca la **cadena exacta** `**Pendiente:**` y se
queda con el párrafo que le sigue hasta el primer renglón en blanco. Dos formas
de romperlo, las dos ocurridas el 22 jul 2026:

| Qué se hizo | Qué pasó |
|---|---|
| Partirlo en `**Pendiente del capítulo 5:**` y `**Pendiente de la materia:**` | El archivo pasó a "no declarado" y `ESTADO.md` reportó **el examen cultural entero como cerrado** |
| Empezar el texto con "ninguno" al cerrar el capítulo 7 | Biología se dio por **cerrada** teniendo ocho capítulos sin escribir |

La regla real: **el pendiente empieza por "ninguno" sólo si la materia entera
está terminada.** Si el capítulo cerró pero quedan otros, ese archivo tiene que
sostener la declaración hasta que exista el `.md` del siguiente.

**Síntoma vivo:** el `**Pendiente:**` de `biologia-37-digestion.md` trae la misma
frase repetida tres veces ("El capítulo 37 es el último del temario…"), y así
sale copiada en `ESTADO.md`. Es cosmético, pero muestra que el párrafo se edita a
mano una y otra vez sin releerlo.

**Qué haría falta:** que el generador avise en vez de callarse. Hoy un archivo
sin `**Pendiente:**` se reporta como "no declarado" en una nota al pie que es
fácil no leer, y un "ninguno" mal puesto no avisa de nada.

---

## 5 · RIESGO · Dónde empieza cada capítulo: ya costó cuatro capítulos

En el Curtis, el temario y los encabezados **mienten sistemáticamente, siempre
por dos páginas**. El patrón: portadilla + "Biología en contexto social" ocupan
dos páginas antes del cuerpo, y la segunda de ellas **ya trae cuerpo de capítulo
mezclado con el recuadro**.

| Capítulo | Se creía | Empieza de verdad | Qué se había perdido |
|---|---|---|---|
| 3 | 35 | **33** | la página 34 entera, teoría del cuerpo |
| 4 | 61 | **59** | la mitad de la 60: Leeuwenhoek, Hooke, la *Micrographia* |
| 5 | 89 | **87** | la sección "Los seres vivos y los intercambios…" |
| 7 | 127 (el temario) | **125** | nada, se detectó antes de escribir |

Los tres primeros se repararon el 22 jul 2026. **Antes de abrir un capítulo nuevo
hay que localizar la portadilla con `extraer.py` y renderizar esa página y la
siguiente**, para ver qué es recuadro y qué es cuerpo.

**Lo mismo, en otra forma, con Álgebra:** la copia de Baldor de la EMM tiene
desfase **+4** (hoja − impresa), no +8 como la copia con la que se escribió
`algebra-08`. La página se lee de la hoja, **nunca se calcula**.

---

## 6 · RIESGO · El filtro de "dato suelto" falla en silencio

`tools/especificar-reactivos.js` decide qué reactivos llevan la referencia al
capítulo comparando el enunciado contra una **lista de expresiones escrita a
mano** (la constante `FLOTA`). Si una tanda usa una forma no contemplada, el
reactivo simplemente no recibe la referencia y **nada avisa**.

Ya pasó el 22 jul 2026 con "¿qué fracción…", que hubo que añadir. Dos veces más
se resolvió reescribiendo el enunciado en lugar de tocar el filtro, porque
cambiarlo obliga a comprobar que no se re-etiqueten los capítulos ya cerrados.

**Regla vigente:** al tocar `FLOTA`, correr el dry-run sobre todos los capítulos
cerrados y comprobar que sus conteos no se mueven. Al 22 jul 2026 eran: cap 3 =
14, cap 4 = 9, cap 5 = 10, cap 7 = 8. **Esos cuatro números no se han vuelto a
verificar desde entonces**, y desde el 22 jul se cerraron ocho capítulos más.

---

## 7 · RIESGO · El PDF de Química es una traducción automática

El ejemplar de Chang que tiene el aspirante es una **traducción de Google del
original en inglés**. Está documentado en el encabezado de
`quimica-02-atomos-moleculas-iones.md`, con dos tablas marcadas como **no
citables** por culpa de la traducción, y frases como "indivisible o indivisible"
donde el original glosa *uncuttable or indivisible*.

El banco cita **tal como aparece en el PDF del aspirante**, que es lo que él va a
estudiar. Queda anotado porque es el único libro del banco donde la cita textual
no equivale a la del autor.

---

## 8 · DECISIÓN DE CARLO · Cómo se reparten las 100 preguntas del examen

El examen real son **100 reactivos en 2 horas con cronómetro**. No se sabe cómo
se reparten entre materias. Mientras tanto el sistema toma **25 de cada una**,
que da el total correcto pero puede no ser la mezcla correcta.

Se cambia en dos lugares, y hoy están duplicados: `REPARTO_CULTURAL` en
`examenes.service.ts` (banco viejo) y `DEFAULT_POR_MATERIA` en
`armarExamenCultural` (ruta nueva).

**Y hay un problema aparte: el banco está muy desequilibrado dentro de cada
examen.**

| HCM | Reactivos | % | | EMM | Reactivos | % |
|---|---:|---:|---|---|---:|---:|
| Historia | 600 | 51 % | | Biología | 2,013 | 70 % |
| Álgebra | 336 | 29 % | | Física | 307 | 11 % |
| Geografía | 125 | 11 % | | Química | 301 | 10 % |
| Español | 109 | 9 % | | Álgebra | 242 | 8 % |

Si el examen pidiera 25 de cada una, en el HCM Historia daría para 24 simulacros
sin repetir y Español para 4. En la EMM, Biología daría para 80 y Álgebra para 9.
**El aspirante que practique de más empezará a reconocer los reactivos de la
materia pequeña mucho antes que los de la grande.**

---

## 9 · DECISIÓN DE CARLO · Qué falta para cerrar cada plantel

De los **10 planteles** de `temarios.json`, cinco tienen material y cinco no
tienen nada.

| Plantel | Qué falta | A cuánto está |
|---|---|---|
| **HCM** | — | **Cerrado.** 1,170 reactivos |
| **EME** · Enfermería | Biología cap 37 | A un capítulo |
| **EMM** · Medicina | Bio 37 · Álgebra XXIV | A dos |
| **EMO** · Odontología | Bio 37 y **33** · Álgebra XXIV · Física U4 temas 2, 5, 6, 9, 10, 11 y U5 temas 3 y 5 | Media unidad de Física |
| **EMOS** · Sanidad | Bio 37, **14 y 15** · **Química cap 5 Gases** · Álgebra XXIV y **XXV** · Física U4 t9 y U5 t3, t10, t16 | El más lejos de los cinco |

**Sin empezar:** EMA, EMEFA, EMMA, EMI y EMMG. Piden materias que no existen en
el banco —Matemáticas, Cálculo Diferencial e Integral, Geometría Analítica,
Trigonometría, Historia de México, Metodología de la Investigación— y además
códigos distintos de Física, Geografía y Español, que hay que verificar antes de
dar por supuesto que son el mismo libro.

**Caución sistémica, ya costó dos veces:** dos materias se declararon "cerradas"
mirando el temario corto. `algebra-08` llegó a decir "Álgebra queda cubierta"
(corregido), y los archivos de Física dicen "cerrada para EMO y EMOS" cuando a la
EMO le faltaban dos unidades enteras. **Antes de declarar una materia cerrada,
verifícala contra la EMO y la EMOS, que son las que más piden.**

---

## 10 · DECISIÓN DE CARLO · Qué se hace con las erratas del libro de Biología

Hay **ocho erratas documentadas** en el Curtis, todas verificadas con `render.py`
o contra el texto crudo antes de acusar al libro, y sobre ninguna se escribió
reactivo:

| Cap. | Pág. | Qué dice mal |
|---|---|---|
| 3 | 40 | los depósitos de Isua "tienen alrededor de 3800 años" — son 3800 **millones** |
| 3 | 48 | "espo**n**rangios" por *esporangios* |
| 5 | 100 | "Na⁺-**Ka**⁺-ATPasa", dos veces; el símbolo del potasio es K |
| 5 | 100 | cruza las remisiones a las figuras 5-11 y 5-12 |
| 7 | 133 | "adeno**n**sín trifosfato"; el propio libro escribe bien "adenosín difosfato" dos líneas después |
| 8 | 147 | "dinucleó**tico** de nicotinamida y adenina"; el mismo pie lo escribe bien nueve líneas después |
| 37 | 861 | el cuadro 37-1 da a la **quimotripsina** sustrato "Grasas" — es una proteasa |
| 37 | 861 | el cuadro 37-1 da a la **sacarasa** producto "glucosa y galactosa" — es glucosa y **fructosa** |

Las dos últimas no son erratas de escritura: son **datos falsos**, como los dos
del capítulo 6 de Historia.

**En Historia, Carlo decidió publicarlas como aviso al aspirante** — están en la
sección "Avisos al aspirante" de `historia-06-mundo-contemporaneo.md`. Para
Biología **no se ha decidido**. La pregunta es si el aspirante de la EMM debe
recibir el mismo aviso, porque si estudia del libro va a memorizar el dato malo.

---

## 11 · MENOR · Cabos sueltos

- **`MTGLOGO.jpeg` sigue suelto en la raíz del proyecto.** Se copió a
  `apps/web/public/monote-logo.jpeg` el 22 jul 2026 y el original quedó ahí sin
  usar. Decidir si se borra o se archiva.
- **Al cambiar cualquier imagen del sitio hay que borrar
  `apps/web/.next/dev/cache/images`.** Next.js cachea las versiones optimizadas
  indexadas sólo por tamaño y calidad, así que sigue sirviendo la vieja aunque el
  archivo en disco ya sea el nuevo. Costó un rato descubrirlo.
- **`docs/examen-cultural/EMM/` es una carpeta por plantel en un banco que ya se
  organiza por libro.** Biología y Química siguen ahí a propósito, para moverse
  completas de un tirón cuando Biología cierre. Están anotadas como "carpeta
  pendiente de migrar" en el encabezado de sus archivos.

---

## Lo que NO es un pendiente, para que nadie lo reabra

Decisiones ya tomadas y documentadas, que no hay que volver a discutir:

- **La correcta se escribe siempre en A.** Es comodidad para revisar; el
  importador baraja. Ver el punto 3.
- **Las notas `>` no se importan.** Hablan del orden del `.md` y mentirían
  después de barajar. Van a `notaRevisor`, campo interno.
- **El reactivo pertenece al libro, no al plantel.** El orden es
  `Libro → Capítulo → Tema → Reactivo`, y por el otro lado la demanda
  (`Plantel → Carrera → Temario → selecciona temas`). Por eso el mismo reactivo
  sirve a varias escuelas sin existir dos veces.
- **Los apartados de cierre quedan fuera** ("Temas en debate", "Retomando la
  problemática inicial"): son discusión filosófica o social, no recuerdo literal.
- **Los apartados de apertura sí entran**, y desde el 22 jul 2026 el criterio es
  por caso: sólo los datos de biología en el de la nicotina (cap. 5), completo en
  el de los físicos (cap. 7).
- **Las "Situaciones problemáticas" y los bloques de ejercicios quedan fuera**:
  son ejercicios de resolución, y el examen cultural es teórico. Las **reglas sí
  son teoría** aunque hablen de operaciones.
