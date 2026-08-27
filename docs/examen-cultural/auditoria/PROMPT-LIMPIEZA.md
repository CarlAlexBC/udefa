# Prompt para el chat de limpieza

Copiar y pegar en un chat **nuevo**, en **Sonnet**. Sustituir lo que va entre
`<>` según la tanda.

Va uno por tanda. No abrir una tanda nueva en el mismo chat: el chat largo se
cobra entero en cada turno y ésta es la parte del proyecto que más lo resiente.

---

## Tanda 0 — el importador (hacer ESTA primero, una sola vez)

```
Estoy en C:\proyectos\udefa. Lee CLAUDE.md antes de tocar nada.

Necesito que el importador del banco cultural sepa retirar reactivos sin
borrarlos.

Contexto: docs/examen-cultural/auditoria/README.md explica por qué. En corto:
hay reactivos que no debieron existir, y no se pueden borrar de los .md porque
apps/backend/scripts/importar-cultural.ts exige numeración corrida sin huecos y
que el pie "**Reactivos en este archivo:** N" no mienta.

Enséñale al importador a reconocer una línea nueva dentro de un reactivo:

    **Retirado:** <motivo>

Un reactivo con esa línea:
  - NO se importa a la base.
  - NO cuenta para el pie de "Reactivos en este archivo".
  - SÍ conserva su número, para que la numeración siga corrida.

Cambia también la validación del pie para que compare contra los ACTIVOS.

Añade al reporte de lectura una línea con cuántos se saltó y por qué motivo.

No corras el importador contra producción. Sólo el cambio de código, con su
prueba en local si se puede. Explícame el paso a paso antes de ejecutar nada
que toque la base.
```

---

## Tandas 1 en adelante — marcar los reactivos

```
Estoy en C:\proyectos\udefa. Lee CLAUDE.md antes de tocar nada.

Trabajo de limpieza del banco cultural. El diagnóstico ya está hecho: NO
vuelvas a rastrear los 10,180 reactivos.

Lee primero:
  docs/examen-cultural/auditoria/README.md          (por qué y cómo)
  docs/examen-cultural/auditoria/auditoria-reactivos.tsv   (los candidatos)

Esta tanda: familia <VISUAL> del libro <EMM>.
Filtra el TSV por esas dos columnas y trabaja SÓLO esos reactivos.

Para cada candidato, abre su archivo .md, lee el reactivo completo y decide:

  RETIRAR si el aspirante no lo puede contestar con lo que la plataforma le
  muestra, o si pregunta por adorno del libro (biografía de un matemático,
  recuadro al margen, nota histórica, introducción del capítulo, bibliografía).

  CONSERVAR si el dato es del tema aunque la frase mencione una figura. Ejemplo
  real: "¿quién propuso la teoría de endosimbiosis?" es contenido legítimo de
  Biología, no una biografía. En la duda, CONSERVA y anótamelo aparte.

Para retirar, agrega dentro del reactivo, después de **Subtema:**, una línea:

    **Retirado:** <familia> · <motivo en una frase>

NO borres el reactivo. NO renumeres. NO toques el enunciado ni las opciones.

Al terminar el archivo, actualiza su pie "**Reactivos en este archivo:**" para
que cuente sólo los activos, y su línea "**Pendiente:**" si aplica.

Commitea al terminar CADA archivo (tienes OK permanente de Carlo para
docs/examen-cultural/) y dime en una línea qué entró.

Al final de la tanda dame:
  - cuántos retiraste y cuántos conservaste
  - la lista de los que te dieron duda, con el porqué
```

---

## Orden sugerido de tandas

| # | Familia | Libro | Reactivos | Por qué en ese orden |
|---|---|---|---|---|
| 0 | — | importador | — | Sin esto, marcar no sirve de nada |
| 1 | VISUAL | EMM | 156 | Los más graves: hoy son incontestables |
| 2 | VISUAL | resto | 27 | Cierra la familia más segura |
| 3 | MARCO | algebra-baldor | 80 | Las biografías de matemáticos |
| 4 | MARCO | larson-precalculo | 42 | Lo mismo, otro libro |
| 5 | MARCO | resto | 17 | |
| 6 | PERSONA | todos | 68 | Al final: es la de más falsos positivos |

## Después de las tandas

1. Volver a correr la auditoría para confirmar que bajó:
   `cd docs/examen-cultural && python auditoria/auditar.py auditoria`
2. Reimportar a producción — **eso lo decide Carlo**, no el chat de limpieza.
3. Atacar lo que este rastreo no encuentra: introducciones de capítulo y
   relleno de en medio. Ver la sección correspondiente del README.
