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
