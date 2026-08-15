# Plataforma UDEFA

> Este archivo se carga solo al inicio de cada sesión. Es el contexto que **no se
> puede contar** desde los archivos. Las cifras de avance viven en `ESTADO.md`,
> que se genera; aquí no se repiten para que no puedan quedar desfasadas.
>
> **Lo primero que debes hacer en una sesión nueva: leer `ESTADO.md`.**
> Si lo dudas, regenéralo antes: `node tools/estado-proyecto/generar-estado.js`

## Con quién trabajas

Carlo Alexander, autor de **"El Monote te Guía"** (TikTok @elmonoteteguia).
Ex-cadete del Heroico Colegio Militar, presentó el examen psicológico tres veces,
armó el material con apoyo de psicólogos militares. Vende preparación para el
proceso de admisión a planteles militares mexicanos (UDEFA).

Está aprendiendo a programar mientras construye esto.

## Cómo trabajar con él — leer antes de tocar nada

1. **Primero el código funcionando, después la explicación.** No teoría antes de
   código.
2. **Nunca ejecutes migraciones, commits, instalaciones o push sin explicar el
   paso a paso y pedir su OK.** El push lo decide él solo.

   **Única excepción, confirmada por Carlo el 20 jul 2026:** en el banco de
   reactivos del examen cultural (`docs/examen-cultural/`) tiene **OK permanente
   para commitear y pushear cada tanda** sin preguntar — sólo hay que avisarle
   qué entró. Es lo contrario de un descuido: no commitear ya costó que 129
   reactivos estuvieran sin respaldo en git durante toda su elaboración. Fuera de
   esa carpeta sigue mandando la regla de arriba.
3. **No mezcles** "así se ve tu archivo actual" con "código a añadir" en el mismo
   mensaje — los pega literal y se rompe. Un modo o el otro, nunca los dos.
4. **Verifica antes de afirmar.** Ya pasó dos veces que un diagnóstico dado por
   seguro estaba mal. Revisa el dato real antes de concluir.
5. **Vocabulario llano.** Si él no entiende una palabra, un aspirante de 18 años
   tampoco.
6. **Explica antes de hacer, y deja que él marque el ritmo.** Quiere aprender
   mientras construye, no que le entreguen cosas hechas.

## Qué es el producto

App web + móvil que reemplaza los PDFs por un simulador del examen de admisión.
Dos módulos:

- **Psicológico** (pago único, no caduca): Psicométrico, Personalidad, Axiológico.
- **Cultural** (suscripción anual, cambia cada año): reactivos por plantel.

**El corazón es el panel de resultados** — no dice "acertaste tantos", diagnostica
patrones y remite a secciones de la Guía del Aspirante.

Stack: **NestJS + Prisma + Postgres** en `apps/backend`, **Next + Tailwind** en
`apps/web`. Monorepo en `C:\proyectos\udefa`.

## Reglas del banco de reactivos

**Examen cultural** — es de **recuerdo literal**: la opción correcta y la
justificación son **cita textual del libro**, sin parafrasear, sin bajar la
dificultad. Cuatro opciones del mismo tipo y magnitud; los mejores distractores
salen del mismo párrafo. Detalle completo en `docs/examen-cultural/README.md`.

Dos trampas que ya costaron trabajo:

- **La hoja del PDF no coincide con la página impresa.** Las páginas de las
  referencias se **leen de la hoja, nunca se calculan**.
- **Verifica la edición contra la página legal antes de usar un libro.** Ya falló
  con Historia y con Álgebra.

Cuando dudes si una rareza es errata del libro o suciedad del escaneo, recórtala
a 500–600 dpi con `docs/examen-cultural/crop.py` antes de acusar al libro. Lo
mismo para cifras largas antes de fijarlas en un reactivo.

## Decisiones abiertas

- **No existe importador** de los `.md` del examen cultural a la base. Cuando
  toque, mirar `apps/backend/scripts/importar-remaster.ts` como referencia.
  Debe cumplir dos cosas que ya decidió Carlo — están en `docs/examen-cultural/README.md`:
  **barajar las opciones** y **no importar las notas `>`**.
- **Alcance de Álgebra**: el temario dice "capítulos I–VI" pero se está incluyendo
  también Preliminares. Documentado por si se decide separarlo.

## Cosas que el libro de Historia dice mal

El capítulo 6 acumula erratas de nombres propios y **dos afirmaciones falsas** que
no son erratas de escritura. Están todas en el encabezado de
`docs/examen-cultural/HCM/historia-06-mundo-contemporaneo.md`, en las secciones
"Erratas del libro" y "Avisos al aspirante". **No se escriben reactivos sobre los
datos falsos**, y se publican como aviso — decisión de Carlo del 19 jul 2026.

## Coordinación entre sesiones

Este repo lo han trabajado dos chats en paralelo sobre `main`. **Antes de empezar
una materia, revisa qué archivos existen ya y si hay trabajo sin commitear** — ya
hubo un momento en que ambos creían tener Historia asignada.

**Commitea al terminar cada tanda.** Hubo 129 reactivos sin respaldo en git
durante toda su elaboración.

### Regla del punto de continuación — obligatoria antes de CADA tanda

Revisar sólo al empezar la materia **no alcanza**. El 14-15 ago 2026 los dos chats
se cruzaron **dos veces seguidas** a media materia: un chat cerró la Unidad III y
media Unidad IV de Geografía mientras el otro, que creía tener el turno, se puso a
releer esas mismas páginas para reescribirlas. No hubo duplicado por un pelo.

**El archivo manda, no lo que recuerdes de tu propia sesión.** Aunque tú hayas
escrito la tanda anterior y Carlo acabe de decirte "sigue", entre un mensaje y el
siguiente pueden haber pasado horas y el otro chat pudo avanzar. Antes de
renderizar una sola hoja, corre esto y **cree lo que diga**:

```
git fetch -q && git status --short
git log --oneline -3 -- <ruta del .md>
grep -n '^\*\*Pendiente:\*\*' <ruta del .md>
```

- La línea **`**Pendiente:**` del propio archivo es la fuente de verdad** de dónde
  se sigue. Si dice una página distinta a la que tenías en la cabeza, gana el
  archivo.
- Si el `git log` trae commits que no son tuyos, **léelos antes de escribir**: el
  otro chat ya avanzó y tu punto de continuación cambió.
- Si el archivo aparece **modificado sin commitear**, no lo toques: hay trabajo
  vivo de otra sesión. Avísale a Carlo en vez de escribir encima.

Por eso cada archivo del banco cierra con una línea `**Pendiente:**` explícita y
cada commit nombra la página que entró: es el mecanismo de relevo entre chats.
**Mantenlos exactos** — si dejas un `Pendiente` desactualizado, el otro chat
trabaja en falso.

**No borres archivos temporales que no sean tuyos.** Los `hoja_*.png` y
`crop_*.png` sueltos en `docs/examen-cultural/` pueden ser de una sesión que está
trabajando en ese momento. Borra sólo los que tú generaste.

### Cómo verificar que TU trabajo quedó guardado — no te fíes del log reciente

El 15 ago 2026 un chat commiteó y pusheó nueve tandas, y al rato, al correr
`git log --oneline -6`, sólo vio commits del otro chat y **reportó que su trabajo
se había perdido**. No se había perdido nada: el otro chat había commiteado encima
y los commits propios quedaron más abajo en la historia. Un susto y un reporte
falso que costaron tiempo.

**`git log -N` no sirve para saber si lo tuyo entró.** Con dos chats commiteando,
tus commits se hunden en el log en minutos. Para comprobarlo de verdad:

```
git log --oneline main | grep -i "<palabra clave de tus mensajes>"
git show HEAD:<ruta del .md> | grep -c '^### '
```

La primera línea encuentra tus commits estén donde estén; la segunda dice cuántos
reactivos hay **commiteados** en ese archivo — compáralo con `grep -c '^### '`
sobre el archivo en disco: si coinciden, no hay nada pendiente. Antes de decirle a
Carlo que algo se perdió, comprueba además `git branch --contains <hash>` (si
responde `main`, el commit está en la historia) y `git worktree list`. **Un commit
que no aparece arriba del log casi nunca está perdido.**

### `ESTADO.md` lee la carpeta, no git

El generador cuenta los archivos del directorio de trabajo, así que **incluye
trabajo del otro chat que todavía no está commiteado**. Si lo regeneras y
commiteas, metes en git filas que describen reactivos que no están en git. Revisa
siempre `git diff ESTADO.md` antes de añadirlo y **dile a Carlo qué se coló** que
no sea tuyo. Fuera del banco de reactivos, el push lo decide él.

### Al cerrar, revisa los archivos HERMANOS

El generador marca una materia como **abierta** si el `**Pendiente:**` de
cualquiera de sus archivos no empieza con la palabra "ninguno"
(`/^ningun[oa]\b/i`, en `tools/estado-proyecto/generar-estado.js`). Como los
capítulos los cierran chats distintos, quedan frases viejas que ya son falsas
("Biología NO está cerrada", "faltan los capítulos X y Y"). Pasó con Biología: el
capítulo 14 cerró y la materia seguía reportándose abierta por el `Pendiente` del
capítulo 33, cerrado tres semanas antes por otra sesión. **Al cerrar un capítulo,
lee el `Pendiente` de todos los capítulos de esa materia y corrige los que hayan
quedado desfasados**, no sólo el tuyo.
