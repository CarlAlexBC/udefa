# Enlazar Física General y Álgebra al temario de tropa

> **CERRADO el 28 ago 2026 — y CONFIRMADO EN PRODUCCIÓN.** El chat que hizo
> este trabajo verificó todo contra una base local y dejó el seed
> (`seed-temarios-tropa.ts`) commiteado sin correrlo contra la base real — la
> migración sí había llegado a producción, pero los 35 cursos no. Se detectó
> al retomar la sesión (consulta directa a producción: 0 `Plantel` tipo
> `TROPA`) y se corrigió corriendo el seed contra la base real, con el visto
> bueno de Carlo. **Ahora sí está confirmado con una consulta a producción,
> no sólo por el log de la terminal:** 35 `Plantel` tipo `TROPA`, 16 Temarios
> 2026 publicados, Física General enlazada en 13 y Álgebra en 10. Detalle
> abajo, en "Cómo quedó al cerrar".
>
> Reconocimiento hecho el 28 ago 2026. A diferencia de Derechos Humanos y
> Legislación Militar, aquí no hay que escribir reactivos — el banco ya existe
> desde el cultural. El trabajo es de **esquema y datos**: crear los cursos y
> apuntarlos a los libros y capítulos correctos.
>
> **Esto SÍ toca `schema.prisma` y corre una migración.** La regla de
> `CLAUDE.md` de explicar paso a paso y pedir OK antes de migrar **aplica
> completa aquí** — la excepción de commitear sin preguntar es sólo para
> `docs/examen-cultural/`, y esto es esquema de producción, no un `.md`.
>
> **Economiza el uso:** agrupa lecturas en un solo turno, no consultes la base
> capítulo por capítulo — trae toda la tabla de una vez. Explica el plan
> completo antes de tocar la migración, no vayas paso a paso preguntando cada
> vez.

## La decisión de arquitectura — ya cerrada con Carlo (28 ago)

`Temario` está atado a `Plantel` (`@@unique([plantelId, anio, estado])`), pero
tropa tiene **curso** (35 de ellos), no plantel. Se evaluaron dos caminos:

- ~~Modelo `Curso` aparte, con sus propias tablas~~ — descartado: duplica toda
  la lógica de armado de examen que ya funciona.
- **✅ Reusar `Plantel`, con una columna que distinga tipo.** Cada uno de los
  35 cursos de tropa se guarda como una fila más de `Plantel`, etiquetada
  distinta de un plantel real. Cero cambios en `Temario`, `MateriaTemario`,
  `MateriaTemarioCapitulo` ni en el armado de examen (`examenes.service.ts`) —
  todo el motor que ya sirve al cultural sirve a tropa sin tocarlo.

**Cambio de esquema exacto:**

```prisma
enum TipoPlantel {
  ADMISION
  TROPA
}

model Plantel {
  // ...campos existentes...
  tipo TipoPlantel @default(ADMISION)
}
```

Aditivo, con default: no rompe ni un plantel existente. Migración de una sola
columna.

## Lo que ya está confirmado — verificado contra la base, no supuesto

### Física General — lista para enlazar

**13 cursos, los 13 piden el mismo libro.** Verificado con `find_tables()`
sobre cada temario, no con texto corrido (el texto corrido revuelve la tabla).

Libro ya existe en la base: `fisica-perez-montiel` (id **28**), Pérez Montiel,
Patria, 6ª ed. 2018, **9 capítulos**. La edición citada en los 13 temarios
coincide letra por letra: *"Héctor Pérez Montiel, Edit. Patria, 1/a. Reimp.
2020, 6/a. Edición 2018"*.

Cursos: `EMMA_F_A_I_M_A`, `EMMA_F_O_F_A_A_A`, `EMMA_F_O_F_A_A_M_A`,
`EMMA_F_O_F_A_E_E_A`, `EMMA_I_F_O_F_A_A_A`, `EMMA_I_F_O_F_A_E_M_A`,
`EMMG_MG_TEC_MANTO_I`, `EMMG_T_E_BALISTICA`, `EMOS_C_I_F_O_S_T_U_M`,
`EMTEFA_F_S_2os_FAAA`, `EMTEFA_F_S_2os_FAAMA`, `EMTEFA_F_S_2os_FAEEA`,
`EMTEFA_F_S_2os_FAEMA`.

### Álgebra — sólo la mitad Baldor está lista

**Son 12 cursos, no 17** (la cifra vieja del README y de la memoria era
errónea — corregida). Y se parten en **dos libros distintos**:

**8 cursos con Baldor — listos.** Libro ya en la base: `algebra-baldor`
(id **27**), Baldor, Patria, 4ª ed. 2019, **22 capítulos**. Edición citada
coincide: *"Dr. Aurelio Baldor, Edit. Patria, 4/a. Edición 2019"*.

Cursos: `EMCS_Cso_F_S1_Snd_Es`, `EMCS_Cso_F_S2_Snd_Es`,
`EMOS_C_I_F_O_S_T_U_M`, `EMTEFA_F_S_2os_FAAA`, `EMTEFA_F_S_2os_FAAMA`,
`EMTEFA_F_S_2os_FAEEA`, `EMTEFA_F_S_2os_FAEMA`, `EMT_TRANS_LIC_TICS`.

**4 cursos —todos de la EMMA— piden OTRO libro:** *Álgebra, Trigonometría y
Geometría Analítica*, Dennis G. Zill / Jacqueline M. Dewar, McGraw-Hill, 3ª
ed. 2012. Se marcó "fuera de alcance" en este cierre porque el PDF no
aparecía en la plataforma — **corregido el 28 ago 2026**: Carlo lo tiene en
`examenes_tropa/libros/academicos/algebra-trigonometria-zill.pdf`, edición
verificada contra la página legal, alcance de temario mapeado. Ver
`docs/examen-tropa/algebra-trigonometria-zill.md`. Todavía no tiene banco
escrito (es trabajo de contenido, ~318 hojas) ni fila en `Libro`.

Cursos EMMA sin Álgebra por ahora: `EMMA_F_A_I_M_A`, `EMMA_F_O_F_A_A_A`,
`EMMA_F_O_F_A_A_M_A`, `EMMA_F_O_F_A_E_E_A`.

## Lo que falta verificar ANTES de escribir la migración

**El alcance por capítulo de cada curso NO está confirmado todavía.** A
diferencia de Derechos Humanos y Legislación Militar (donde todos los cursos
pedían exactamente lo mismo), aquí no se ha comprobado si los 13 de Física o
los 8 de Álgebra-Baldor piden los mismos capítulos entre sí o cada uno los
suyos. Un primer barrido con regex sugirió que Física varía bastante entre
cursos, pero ese barrido usó texto corrido (poco confiable, como pasó al
principio con Legislación Militar) — **hay que repetirlo con `find_tables()`**
igual que se hizo aquí para confirmar los libros, curso por curso, antes de
escribir un solo `MateriaTemarioCapitulo`.

## Plan de trabajo

1. **Extraer el alcance real** (capítulos/temas pedidos) de los 13 cursos de
   Física y los 8 de Álgebra-Baldor con `find_tables()`, agrupando por
   variantes reales — no asumir que "mismo libro" significa "mismos capítulos".
2. **Mapear esos capítulos contra la tabla `Capitulo`** de la base (9 para
   Pérez Montiel, 22 para Baldor) para tener los IDs exactos.
3. **Explicarle el plan completo a Carlo — migración incluida — y esperar su
   OK** antes de tocar `schema.prisma`. Esto no es la carpeta con permiso
   permanente.
4. Migración aditiva: `tipo` en `Plantel`, default `ADMISION`.
5. Crear las **35 filas de `Plantel` tipo `TROPA`** (el catálogo completo del
   README, aunque hoy sólo se llenen Física y Álgebra para algunos — son
   filas de identidad baratas y evitan fragmentar el trabajo curso por curso
   más adelante).
6. Crear `Temario` (año 2026, estado `PUBLICADO`) para cada curso que use
   Física General o Álgebra-Baldor.
7. Crear `MateriaTemario` + `MateriaTemarioCapitulo` con los capítulos exactos
   del paso 2, curso por curso.
8. Verificar armando un examen de prueba (equivalente a como se probó el
   cultural) para confirmar que sirve reactivos reales de Física/Álgebra al
   curso correcto.
9. Commitear el cambio de esquema + el script de datos — con el paso a paso
   explicado y el OK de Carlo ya obtenido en el punto 3.

## Cómo quedó al cerrar (28 ago 2026)

### Corrección al reconocimiento: son 10 cursos con Baldor, no 8

Al leer la tabla completa (no el texto corrido) de `EMMG_MG_TEC_MANTO_I` y
`EMMG_T_E_BALISTICA` — ya contados como Física — apareció que **también piden
Álgebra-Baldor**, algo que el primer reconocimiento no vio. Con eso:
**Álgebra-Baldor son 10 cursos**, no 8, y el **total real de Álgebra es 14**
(10 Baldor + 4 EMMA con Zill, fuera de alcance), no 12. Corregido también en
`README.md`.

### La correspondencia temario→base es exacta

Confirmado con `find_tables()`: "Unidad N" del temario de Física = capítulo
`numero: N` en `fisica-perez-montiel`, título idéntico. Número romano de
Álgebra = capítulo `numero` arábigo en `algebra-baldor` (VIII=8, XX=20…),
título idéntico. No hizo falta inventar mapeo.

### Capítulos que los cursos piden y el banco nunca vació

Estos huecos **no son de esquema, son de contenido** — nadie los escribió
todavía para el banco cultural. Se dejaron fuera del enlace a propósito:

| Falta | Lo pide |
|---|---|
| Física Unidad 12 (Electricidad), 13 (Magnetismo), 14 (Electromagnetismo) | `EMMG_MG_TEC_MANTO_I` |
| ~~Baldor XVI (Ecuaciones Literales 1er Grado), XXIII (Ecuaciones Indeterminadas)~~ — **escritos 28 ago 2026** (`algebra-16`, 3 react.; `algebra-23`, 8 react.) | `EMMG_MG_TEC_MANTO_I` |
| ~~Baldor XXXV (Teoría de Ecuaciones de 2º Grado)~~ — **escrito 28 ago 2026** (`algebra-35`, 16 react.) | `EMMG_T_E_BALISTICA` |
| ~~Baldor XXVIII (Potenciación)~~ — **escrito 28 ago 2026** (`algebra-28`, 26 react.) | los 4 `EMTEFA_F_S_2os_*` |

### Decisión de granularidad: por capítulo completo

Los temarios casi nunca piden el capítulo completo — piden subtemas sueltos.
El esquema de hoy sólo permite enlazar por capítulo (`MateriaTemarioCapitulo`
no tiene `temaId` todavía). Carlo decidió (28 ago) enlazar por capítulo
completo para esta primera versión, igual que ya funciona el cultural, y
dejar la selección por subtema para después.

### Qué se ejecutó

1. Migración aditiva `20260828180751_plantel_tipo_tropa`: enum `TipoPlantel`
   (`ADMISION`/`TROPA`) + columna `Plantel.tipo` con default `ADMISION`. No
   tocó ni un plantel de admisión existente.
2. `apps/backend/scripts/seed-temarios-tropa.ts` (idempotente): crea los 35
   `Plantel` tipo `TROPA` del catálogo (README) y, para los 16 cursos con
   Física/Álgebra verificados, su `Temario` 2026 `PUBLICADO` +
   `MateriaTemario` + `MateriaTemarioCapitulo`. El reparto de preguntas usa
   el total de materias del catálogo de cada curso (no sólo las enlazadas
   hoy), para no tener que recalcularlo cuando se enlacen Legislación Militar
   y Derechos Humanos.
3. Verificado armando el examen de prueba (reproduciendo la consulta real de
   `armarBloquesDesdeTemario`) contra 4 cursos representativos: los 16 cursos
   sirven reactivos reales, entre 242 y 942 disponibles por temario — muy por
   encima de lo pedido.

**Pendiente:**
- Los 4 huecos de Baldor (XVI, XXIII, XXVIII, XXXV) **ya están escritos**
  (28 ago 2026, 53 reactivos en total) — falta sumarlos a
  `seed-temarios-tropa.ts` (cursos `EMMG_MG_TEC_MANTO_I_2026`,
  `EMMG_T_E_BALISTICA_2026` y los 4 `EMTEFA_F_S_2os_*`) y correr
  `importar-cultural-oferta.ts` para que entren a la base — se deja para
  cuando se sume Física, no capítulo por capítulo.
- Física Unidad 12 (Electricidad), 13 (Magnetismo) y 14 (Electromagnetismo)
  siguen sin ubicar en el PDF — trabajo de banco, no de esquema.
- Conseguir o decidir sobre el libro de Zill/Dewar para los 4 cursos EMMA de
  Álgebra — **el libro ya lo tiene Carlo** (`algebra-trigonometria-zill.pdf`,
  edición verificada, alcance mapeado en
  `docs/examen-tropa/algebra-trigonometria-zill.md`), falta escribir el banco
  (~318 hojas, 7 capítulos).
- ~~Enlazar Legislación Militar y Derechos Humanos~~ — **hecho el 28 ago 2026**,
  ver `docs/examen-tropa/importador-tropa.md` (Fase 2). 19 cursos con
  Legislación Militar y 23 con Derechos Humanos ya sirven reactivos reales,
  verificado con consulta directa y armando examen de prueba.
