# El importador de tropa — no existe todavía

> Reconocimiento hecho el 28 ago 2026, al retomar la sesión y descubrir que
> los 479 reactivos de Derechos Humanos y Legislación Militar —ya escritos,
> revisados y marcados "CERRADA"— **no están en la base de producción**.
> Verificado con una consulta directa: los bancos que existen hoy son `v3`,
> `v1`, `cultural-hcm`, `cultural`, `remaster`. Ninguno se llama `tropa`.
>
> **Esto SÍ toca `schema.prisma` (nuevos `Libro`/`Capitulo`/`Tema`) y escribe
> en producción.** La regla de `CLAUDE.md` de explicar paso a paso y pedir OK
> antes de tocar la base **aplica completa** — la excepción de commitear sin
> preguntar es sólo para `docs/examen-cultural/`.
>
> **Economiza el uso:** el modelo a seguir ya existe y está probado
> (`importar-cultural-oferta.ts`). No hace falta diseñar desde cero — se trata
> de adaptar el patrón, no de inventar uno nuevo.

## Por qué nadie lo notó antes

Los trabajos de Derechos Humanos y Legislación Militar se cerraron con la
misma disciplina que el banco cultural: `.md` verificados, `**Pendiente:**
ninguno`, commiteados. Pero **a diferencia del cultural, tropa nunca tuvo un
importador que corriera** — el trabajo de contenido terminó y el de meterlo a
la base quedó sin empezar. Nadie mintió ni se saltó un paso; simplemente no
estaba en el plan original hasta ahora.

## El modelo a seguir: `importar-cultural-oferta.ts`

Ese script ya resuelve exactamente este problema para el cultural: lee `.md`,
crea `Libro` → `Capitulo` → `Tema` con `upsert` (por slug / `libroId+numero` /
nombre), y empareja cada reactivo por `(temaId, enunciado, banco)` para que
reimportar no duplique. Corre en dos modos, prueba y `--escribir`, y nunca
toca otro banco.

El importador de tropa se construye **como un script nuevo y separado**
(`importar-tropa.ts`, banco `"tropa"`), calcado de ese patrón — no se reusa el
mismo archivo, porque lee de `docs/examen-tropa/` con una estructura de
carpetas distinta y libros que no existen en el cultural.

## Los 6 libros nuevos que el importador debe crear (`upsert`)

Ninguno de estos tiene fila en `Libro` todavía. La carpeta ya es el slug
natural:

| Carpeta (slug) | Libro | Archivos = capítulos |
|---|---|---|
| `ley-uso-de-la-fuerza` | Ley Nacional Sobre el Uso de la Fuerza | 1 (`ley-completa.md`) |
| `derechos-humanos-dn-m-110` | Manual de DH para el Ejército y F.A.M. (DN-M-110) | 3 (Cap. II, VIII, IX) |
| `codigo-justicia-militar` | Código de Justicia Militar (Sin Penas) | 2 (Tít. VIII, IX) |
| `ley-organica-ejercito` | Ley Orgánica del Ejército y F.A.M. | 3 (Tít. I, II, IV Cap. I-II) |
| `ley-disciplina` | Ley de Disciplina (Sin transitorios) | 1 (`completa.md`) |
| `reglamento-deberes-militares` | Reglamento General de Deberes Militares | 2 (Tít. I, II Cap. I) |

**12 archivos = 12 `Capitulo` a crear.** El número de `Capitulo.numero` es
sólo el orden de aparición dentro de su libro (1, 2, 3…) — **no** tiene que
coincidir con el número de Título/Capítulo del texto legal, porque varios
libros piden títulos salteados (la Ley Orgánica pide I, II y IV, no el III).
`MateriaTemarioCapitulo` sólo necesita un id estable, no el número legal.

Edición/autor de cada libro: tomarlos de la sección "## Libro" que ya trae
cada `.md` (nombre, editorial/DOF, edición) — están escritos ahí a propósito,
no hace falta rehacer la verificación de edición otra vez.

## El formato del `.md` — ya es compatible con el patrón cultural

```
### 1

<enunciado>

- A. <opción>
- B. <opción>
- C. <opción>
- D. <opción>

**Respuesta:** A
**Referencia:** *<libro>*, <artículo/párrafo>, Pág. N
**Subtema:** <texto libre>

<justificación>
```

Mismo esqueleto que el cultural: `### N` numera, `**Respuesta:**` +
`**Referencia:**` + `**Subtema:**` son los campos, la correcta casi siempre
en A (**hay que barajar igual que el cultural** — misma regla, mismo motivo:
no debe llegar en A al aspirante). Ningún archivo de tropa usa notas `>`
todavía, pero el importador debe soportarlas de todas formas por si aparecen
después (mismo campo `notaRevisor`, nunca visible al aspirante).

## Plan de trabajo — DOS FASES, no una

### Fase 1 — el importador en sí (este documento)

1. Escribir `apps/backend/scripts/importar-tropa.ts`, calcado de
   `importar-cultural-oferta.ts`: recorre las 6 carpetas de
   `docs/examen-tropa/`, hace `upsert` de `Libro`/`Capitulo`/`Tema`, importa
   los 479 reactivos con `banco: "tropa"`.
2. Modo prueba primero (reporta números, no toca la base). Revisar el reporte
   con Carlo.
3. **Explicarle el plan y pedir OK explícito antes de `--escribir`.**
4. Correr `--escribir` contra producción.
5. Verificar con una consulta directa (`groupBy` por `banco`) — **no confiar
   en el log de la terminal**, ese fue justo el error que pasó con
   Física/Álgebra. Confirmar 479 reactivos con `banco: "tropa"`.

### Fase 2 — enlazar esos capítulos a los cursos (trabajo aparte, después)

El importador NO toca `Temario` ni `MateriaTemario` — igual que
`importar-cultural-oferta.ts` tampoco lo hace para el cultural. Una vez que
existan los `Capitulo` de estos 6 libros, hay que **extender
`seed-temarios-tropa.ts`** (o escribir un seed hermano) para crear
`MateriaTemario` + `MateriaTemarioCapitulo` en los 23 cursos que piden
Derechos Humanos y los 19 que piden Legislación Militar — mismo patrón ya
probado y confirmado en producción para Física General y Álgebra.

**No es trabajo de este documento.** Se anota aquí para que no se pierda,
pero es un `**Pendiente:**` propio, a retomar cuando la Fase 1 esté verificada
en producción.

## Pendiente

**Todo.** No se ha escrito una línea del importador. Empezar por
`apps/backend/scripts/importar-tropa.ts`, en modo prueba.
