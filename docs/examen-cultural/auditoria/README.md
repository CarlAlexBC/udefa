# Auditoría de reactivos que no debieron existir

Levantada el 27 de agosto de 2026, a raíz de comentarios de aspirantes reales:
hay reactivos del examen cultural **que no se pueden contestar** y otros sobre
**temas que no recuerdan haber visto en el examen**.

Esta carpeta existe para que el trabajo de limpieza **no tenga que volver a
rastrear los 10,180 reactivos**. Aquí está el resultado del rastreo; lo que
falta es el juicio humano encima.

## Qué hay aquí

| Archivo | Qué es |
|---|---|
| `auditar.py` | El rastreador. Se corre parado en `docs/examen-cultural/` |
| `auditoria-resumen.txt` | Conteos por familia, por detector y por libro |
| `auditoria-reactivos.tsv` | **Los 391 candidatos**, con archivo, número y enunciado |

Para volver a correrlo tras una tanda de limpieza:

```
cd docs/examen-cultural
python auditoria/auditar.py auditoria
```

## Las cuatro familias

**VISUAL — 183 reactivos.** Piden mirar una figura, esquema, tabla o gráfica.
**Ninguno de los 10,180 reactivos culturales tiene imagen adjunta**, así que en
la plataforma son literalmente incontestables. Es la familia más grave y la más
segura: 156 de ellos están en EMM (Biología y Química).

**MARCO — 139 reactivos.** Se apoyan en un recuadro al margen, una nota al pie
o una cita. Son las biografías de matemáticos de Baldor y Larson —Pitágoras,
Ptolomeo, Hypatia— que se agregaron y hoy los aspirantes reportan como inútiles.

**PERSONA — 68 reactivos.** Biografía y anécdota histórica: quién nació dónde,
quién propuso qué. **Es la familia con más falsos positivos**: "¿quién propuso
la teoría de endosimbiosis?" es contenido legítimo de Biología, no adorno. Hay
que revisarla uno por uno.

**LIBRO — 1 reactivo.** Habla del libro y no del tema.

## Lo que este rastreo NO encuentra

Se debe asumir que **la lista está incompleta**. Sólo caza a los que se delatan
con una frase ("según el recuadro", "según la figura"). Quedan fuera:

- Las **introducciones de capítulo** — el "en este tema veremos…" — porque no
  tienen ninguna marca que las distinga del contenido real.
- Las biografías escritas sin frase delatora: *"¿dónde nació Pitágoras?"* a secas.
- El **relleno de en medio del capítulo**, que Carlo reportó y que no tiene
  patrón lingüístico.

Para ésos hay dos caminos, ninguno automático:

1. **Por página.** Las introducciones viven en las primeras páginas del
   capítulo. Con la página donde arranca el contenido real de cada capítulo, se
   filtra por el campo `Referencia`.
2. **Por subtema.** Hay 4,205 subtemas distintos. Sacar la lista por libro y
   que Carlo marque los que no van; caen todos sus reactivos juntos.

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

**Falta implementarlo:** el importador todavía no conoce ese campo. Hay que
enseñarle a saltarse los marcados y a no contarlos en el total del pie.
