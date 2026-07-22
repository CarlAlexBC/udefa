# Pendientes del examen cultural

**Escrito el 22 jul 2026, a petición de Carlo.** Recoge lo que hay que resolver y
por qué importa. Las cifras de este archivo salen de contar el disco el día que
se escribió; si dudas, vuelve a contar — `ESTADO.md` es la fuente que se
regenera.

Ordenado por lo que más duele, no por lo más fácil.

---

## 1 · BLOQUEANTE · Los 808 reactivos de la EMM no tienen cómo entrar a la base

El importador existe y funciona, pero **está apuntado en duro al HCM**. En
`apps/backend/scripts/importar-cultural.ts`:

```
const DIR = path.resolve(__dirname, '../../../docs/examen-cultural/HCM');
const BANCO = 'cultural-hcm';
const PLANTEL_HCM = 1;
```

Mientras eso no cambie, **todo el trabajo de la EMM vive sólo en archivos `.md`**.
No lo ve ningún aspirante. Es el pendiente más caro de los que hay aquí, porque
es el único que hace que el trabajo hecho no sirva todavía para nada.

**Qué hace falta:** que esas tres constantes se elijan por parámetro (plantel y
carpeta), crear el `Examen` de la EMM con `plantelId` 2 y `anio` 2026, y correr
el importador en seco antes de escribir.

**Ojo al hacerlo:** el barajado de opciones y el descarte de las notas `>` ya
están resueltos en ese archivo y hay que conservarlos. El barajado se siembra con
el propio enunciado para que el orden sea estable —si alguien reporta "la 40
tiene mal la respuesta", al reimportar la 40 sigue siendo la misma—. Verificado
el 22 jul 2026 sobre los 240 reactivos del capítulo 7: la correcta queda repartida
24% / 28% / 25% / 23% entre A, B, C y D.

---

## 2 · RIESGO · El marcador `**Pendiente:**` ya falló dos veces en un día

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

**Qué haría falta:** que el generador avise en vez de callarse. Hoy un archivo
sin `**Pendiente:**` se reporta como "no declarado" en una nota al pie que es
fácil no leer, y un "ninguno" mal puesto no avisa de nada.

---

## 3 · RIESGO · Dónde empieza cada capítulo: ya costó cuatro capítulos

El temario y los encabezados **mienten sistemáticamente, siempre por dos
páginas**. El patrón del Curtis: portadilla + "Biología en contexto social"
ocupan dos páginas antes del cuerpo, y la segunda de ellas **ya trae cuerpo de
capítulo mezclado con el recuadro**.

| Capítulo | Se creía | Empieza de verdad | Qué se había perdido |
|---|---|---|---|
| 3 | 35 | **33** | la página 34 entera, teoría del cuerpo |
| 4 | 61 | **59** | la mitad de la 60: Leeuwenhoek, Hooke, la *Micrographia* |
| 5 | 89 | **87** | la sección "Los seres vivos y los intercambios…" |
| 7 | 127 (el temario) | **125** | nada, se detectó antes de escribir |

Los tres primeros se repararon el 22 jul 2026. **Antes de abrir un capítulo
nuevo hay que localizar la portadilla con `extraer.py` y renderizar esa página y
la siguiente**, para ver qué es recuadro y qué es cuerpo.

---

## 4 · RIESGO · El filtro de "dato suelto" falla en silencio

`tools/especificar-reactivos.js` decide qué reactivos llevan la referencia al
capítulo comparando el enunciado contra una **lista de expresiones escrita a
mano** (la constante `FLOTA`). Si una tanda usa una forma no contemplada, el
reactivo simplemente no recibe la referencia y **nada avisa**.

Ya pasó el 22 jul 2026 con "¿qué fracción…", que hubo que añadir. Dos veces más
se resolvió reescribiendo el enunciado en lugar de tocar el filtro, porque
cambiarlo obliga a comprobar que no se re-etiqueten los capítulos ya cerrados.

**Regla vigente:** al tocar `FLOTA`, correr el dry-run sobre todos los capítulos
cerrados y comprobar que sus conteos no se mueven. Al 22 jul 2026 son: cap 3 =
14, cap 4 = 9, cap 5 = 10, cap 7 = 8.

---

## 5 · DECISIÓN DE CARLO · Cómo se reparten las 100 preguntas del examen

El examen real son **100 reactivos en 2 horas con cronómetro**. No se sabe cómo
se reparten entre materias. Mientras tanto el sistema toma **25 de cada una**,
que da el total correcto pero puede no ser la mezcla correcta.

Se cambia en un solo lugar: `REPARTO_CULTURAL`, en
`apps/backend/src/examenes/examenes.service.ts`.

**Y hay un problema aparte: el banco está muy desequilibrado.**

| HCM | Reactivos | % del banco |
|---|---:|---:|
| Historia | 600 | 51% |
| Álgebra | 336 | 29% |
| Geografía | 125 | 11% |
| Español | 109 | 9% |

Si el examen pidiera 25 de cada una, Historia daría para 24 simulacros sin
repetir y Español para 4. El aspirante que practique de más empezará a
reconocer los reactivos de Español mucho antes que los de Historia.

---

## 6 · DECISIÓN DE CARLO · La EMM está a un cuarto de camino

El temario `EMM_CSO_FORM_M_C_2026` pide **cuatro materias**. Hoy hay una:

| Materia | Reactivos | Estado |
|---|---:|---|
| Biología | 808 | caps 3, 4, 5 y 7 cerrados; faltan 8, 11, 12, 31, 32, 35, 36 y 37 |
| Química | 0 | sin empezar (Chang, 13ª ed. 2020) |
| Física General | 0 | sin empezar (Pérez Montiel, Patria 6ª ed. 2018) |
| Álgebra | 0 | sin empezar (Baldor, Patria 4ª ed. 2019) |

**Álgebra de la EMM no es la misma que la del HCM.** Mismo libro y misma edición,
pero distinto alcance: la EMM pide los capítulos I, II, III, IV, V, VIII, X,
XVIII, XX y XXIV. Los **I a V ya están escritos** para el HCM y deberían poder
reusarse; faltarían VIII, X, XVIII, XX y XXIV. Conviene decidir si se reusan o se
reescriben antes de empezar, porque son unos 200 reactivos de diferencia.

---

## 7 · DECISIÓN DE CARLO · Qué se hace con las erratas del libro de Biología

Hay **tres erratas documentadas** en el Curtis, todas verificadas con `render.py`
antes de acusar al libro, y sobre ninguna se escribió reactivo:

| Capítulo | Pág. | Qué dice mal |
|---|---|---|
| 3 | 40 | los depósitos de Isua "tienen alrededor de 3800 años" — son 3800 **millones** |
| 5 | 100 | "Na⁺-**Ka**⁺-ATPasa", dos veces; el símbolo del potasio es K |
| 5 | 100 | cruza las remisiones a las figuras 5-11 y 5-12 |
| 7 | 133 | "**adenon**sín trifosfato"; el propio libro escribe bien "adenosín difosfato" dos líneas después |

**En Historia (HCM) Carlo decidió publicarlas como aviso al aspirante** — están
en la sección "Avisos al aspirante" de `historia-06-mundo-contemporaneo.md`. Para
Biología **no se ha decidido**. La pregunta es si el aspirante de la EMM debe
recibir el mismo aviso, porque si estudia del libro va a memorizar el dato malo.

---

## 8 · MENOR · Cabos sueltos

- **`MTGLOGO.jpeg` está suelto en la raíz del proyecto.** Se copió a
  `apps/web/public/monote-logo.jpeg` el 22 jul 2026 y el original quedó ahí sin
  usar. Decidir si se borra o se archiva.
- **Al cambiar cualquier imagen del sitio hay que borrar `apps/web/.next/dev/cache/images`.**
  Next.js cachea las versiones optimizadas indexadas sólo por tamaño y calidad,
  así que sigue sirviendo la vieja aunque el archivo en disco ya sea el nuevo.
  Costó un rato descubrirlo.

---

## Lo que NO es un pendiente, para que nadie lo reabra

Decisiones ya tomadas y documentadas, que no hay que volver a discutir:

- **La correcta se escribe siempre en A.** Es comodidad para revisar; el
  importador baraja. Ver el punto 1.
- **Las notas `>` no se importan.** Hablan del orden del `.md` y mentirían
  después de barajar.
- **Los apartados de cierre quedan fuera** ("Temas en debate" del cap. 3,
  "Retomando la problemática inicial" de los caps. 4, 5 y 7): son discusión
  filosófica, social o lingüística, no recuerdo literal.
- **Los apartados de apertura sí entran**, y desde el 22 jul 2026 el criterio es
  por caso: sólo los datos de biología en el de la nicotina (cap. 5), completo en
  el de los físicos (cap. 7).
- **Las "Situaciones problemáticas" quedan fuera**: son ejercicios de resolución,
  y el examen cultural es teórico.
