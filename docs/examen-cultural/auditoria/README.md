# Auditoría de reactivos que no debieron existir

Levantada el 27 de agosto de 2026, a raíz de comentarios de aspirantes reales:
hay reactivos del examen cultural **que no se pueden contestar** y otros sobre
**temas que no recuerdan haber visto en el examen**. Ampliada el 3 de
septiembre con una segunda ronda de detectores, a raíz de más reportes reales
(mala redacción, falta de contexto).

Esta carpeta existe para que el trabajo de limpieza **no tenga que volver a
rastrear el banco completo a mano**. Aquí está el resultado del rastreo; lo
que falta es el juicio humano encima.

## Qué hay aquí

| Archivo | Qué es |
|---|---|
| `auditar.py` | El rastreador. Se corre parado en `docs/examen-cultural/` |
| `auditoria-resumen.txt` | Conteos por familia, por detector y por libro |
| `auditoria-reactivos.tsv` | Los candidatos vigentes, con archivo, número y enunciado |

El número de candidatos vive en `auditoria-resumen.txt` (primera línea) — no
se repite aquí para que no quede desfasado; ya pasó una vez con la cuenta de
reactivos totales.

Para volver a correrlo tras una tanda de limpieza:

```
cd docs/examen-cultural
python auditoria/auditar.py auditoria
```

## RONDA 1 — las cuatro familias

**VISUAL.** Piden mirar una figura, esquema, tabla o gráfica.
**Ninguno de los reactivos culturales tiene imagen adjunta** (salvo Razonamiento
Abstracto, que es otro banco), así que en la plataforma son literalmente
incontestables. Es la familia más grave y la más segura: la mayoría están en
EMM (Biología y Química).

**MARCO.** Se apoyan en un recuadro al margen, una nota al pie o una cita. Son
las biografías de matemáticos de Baldor y Larson —Pitágoras, Ptolomeo,
Hypatia— que se agregaron y hoy los aspirantes reportan como inútiles.

**PERSONA.** Biografía y anécdota histórica: quién nació dónde, quién propuso
qué. **Es la familia con más falsos positivos**: "¿quién propuso la teoría de
endosimbiosis?" es contenido legítimo de Biología, no adorno. Hay que
revisarla uno por uno.

**LIBRO.** Habla del libro y no del tema.

## RONDA 2 — dos familias más (3 sep 2026)

**PLANTILLA.** El enunciado no arranca con ninguna de las aperturas
establecidas ("En relación con el libro de…", "De acuerdo con el libro de…",
etc.). Caza tanto variantes de redacción razonables (que capítulos enteros
escribieron distinto — no está mal en sí, es inconsistencia de estilo) como
enunciados genuinamente fuera de molde (el conector va al final o falta del
todo). Hay que leer cada candidato para saber cuál es cuál.

**SIN_ANTECEDENTE.** El enunciado usa un pronombre (lo/la/le/los/las) antes de
nombrar a quién se refiere — el caso real que lo disparó: *"¿bajo la
influencia de qué organismo **lo** derrocaron los militares en 1964?"*, sin
decir antes quién es "lo". El libro lo entiende porque el antecedente vive en
el párrafo anterior; el reactivo, solo, no. El detector exige que el
antecedente concuerde en género con el pronombre (para "lo" busca un
sustantivo masculino, para "la" uno femenino) — es lo que separa este caso de
una oración normal como "¿qué es la superconductividad y quién **la**
descubrió?", donde el antecedente sí está ahí. Es deliberadamente
conservador: prefiere dejar pasar un caso dudoso a acusar una oración sana.

## Lo que este rastreo NO encuentra

Se debe asumir que **la lista está incompleta**. RONDA 1 sólo caza a los que
se delatan con una frase ("según el recuadro", "según la figura"); RONDA 2
sólo caza pronombres huérfanos y aperturas fuera de molde. Quedan fuera:

- Las **introducciones de capítulo** — el "en este tema veremos…" — porque no
  tienen ninguna marca que las distinga del contenido real.
- Las biografías escritas sin frase delatora: *"¿dónde nació Pitágoras?"* a secas.
- El **relleno de en medio del capítulo** — datos curiosos, ejemplos
  ilustrativos, complementos de contexto que no son el contenido central.
  **Se intentó cazar esto por cantidad de reactivos por subtema (un subtema
  con muchos reactivos frente a los demás del capítulo) y Carlo lo descartó
  el 3 de sep: cuántos reactivos tiene un subtema no dice nada de si es
  relleno o no.** Es una pregunta de lectura y criterio sobre el contenido
  mismo, no de patrón de texto ni de cantidad — no hay atajo de código para
  esto, se lee capítulo por capítulo.

## Cómo se retira un reactivo, y por qué NO se borra

`apps/backend/scripts/importar-cultural.ts` valida que la numeración de cada
archivo sea **corrida, sin huecos ni repetidos**, y que el pie
`**Reactivos en este archivo:** N` no mienta.

Borrar un reactivo de en medio obligaría a renumerar todos los siguientes: un
diff enorme, y se pierde el rastro de qué era cada quién. Además los `.md` son
la fuente de verdad y la base es una copia importada — borrar sólo en la base
los devuelve en la siguiente importación.

**Por eso se marcan, no se borran.** Un reactivo retirado conserva su número y
gana una línea:

```
**Retirado:** visual · pide ver un esquema que la plataforma no muestra
```

Ventajas: el diff es de una línea, el reactivo queda con su motivo escrito, y
el día que se decida que las biografías sí sirven para algún plantel, se
reactivan sin volver a escribirlas.

El importador (`apps/backend/scripts/importar-cultural.ts`) ya conoce el
campo: salta los reactivos marcados `**Retirado:**` y no los cuenta en el
total del pie.
