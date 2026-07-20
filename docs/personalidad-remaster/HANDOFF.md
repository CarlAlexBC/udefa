# HANDOFF · Plataforma UDEFA — implementación del banco de personalidad

> Copia este archivo completo y pégalo al inicio de un chat nuevo.
> Última actualización: 18 de julio de 2026.

## Quién soy

Carlo Alexander, autor de "El Monote te Guía" (TikTok @elmonoteteguia), ex-cadete
del Heroico Colegio Militar, presenté el examen psicológico UDEFA 3 veces.
Construyo una plataforma de preparación: **NestJS + Prisma + Postgres** en
`apps/backend`, **Next 16 + Tailwind 4** en `apps/web`. Monorepo en
`C:\proyectos\udefa`.

## Cómo trabajar conmigo — leer antes de tocar nada

Está en tu memoria: `feedback_estilo_pedagogico.md`. Léela. Lo crítico:

1. **Primero el código funcionando, después la explicación.** No teoría antes de
   código.
2. **Nunca ejecutes migraciones, commits, instalaciones o push sin explicarme el
   paso a paso y pedir mi OK.** El push lo decido solo yo.
3. **No mezcles** "así se ve tu archivo actual" con "código a añadir" en el mismo
   mensaje — lo pego literal y se rompe. Usa Modo A (archivo completo) o Modo B
   (solo lo que se añade), nunca los dos.
4. **Verifica antes de afirmar.** En la sesión pasada me dijiste que el logo se
   recortaba basándote en caché vieja de Next, y llamaste "basura" a 76
   referencias que en realidad eran otra notación. Los dos diagnósticos estaban
   mal. Revisa el dato real antes de concluir.
5. **Vocabulario llano.** Si yo no entiendo una palabra, un aspirante de 18 años
   tampoco.

## Dónde nos quedamos

**El banco está terminado y commiteado. Las fases 1 a 4 están hechas.**

| | |
|---|---|
| Banco | 28 ejes · **2,410 reactivos** en `docs/personalidad-remaster/` |
| Estructura | 297 trampas (114 L, 156 K, 27 F) · 88 críticos · 881 pares · 6 que no puntúan |
| En la base | `banco: "remaster"` — es lo que sirve el examen |
| Banco viejo | `banco: "v1"`, 3,216 reactivos, fuera del diagnóstico, destino: set de práctica |
| Último commit | `da085df` — 10 commits nuevos, **sin push** |

**Lee primero `docs/personalidad-remaster/PENDIENTES.md`.** Ahí está todo lo
abierto con detalle.

### Fases

| Fase | Qué es | Estado |
|---|---|---|
| 1 | Esquema y migración `banco_remaster` | hecha |
| 2 | Importador `scripts/importar-remaster.ts` | hecha |
| 3 | Muestreo por unidades en `examenes.service.ts` | hecha |
| 4 | Escalas L/K/F en `intentos.service.ts` | hecha |
| **5** | **Clusters por eje, cruces cross-tema, banderas** | **siguiente — la más grande** |
| 6 | Panel de resultados | pendiente |

## Lo que hay que decidir, y es mío no tuyo

**1. Protocolo de los gatillos CRÍTICO — urgente.** El examen ya sirve el banco
nuevo, así que los 88 críticos — incluidos los de ideación suicida del eje 1 —
ya son alcanzables por un aspirante real, y no hay nada definido sobre qué pasa
cuando alguien contesta que sí. Detectar sin plan de respuesta está incompleto.
Recuérdamelo si no lo he resuelto.

**2. Umbral del cluster MMPI-K.** Llegó a 30 dominios y sigue en ≥8, que quedó
laxo.

**3. Autoconocimiento como eje 30.** Cuatro trampas (75 de los ejes 12, 13, 14 y
16) quedaron sin receptor. Es propuesta tuya, no de mi taxonomía.

**4. Los archivos sueltos del repo:** `.claude/`, un PDF de licenciaturas,
`UDEFA.png`, `MONOTE LOGO .jpeg`, la carpeta `planteles/` y un respaldo del logo.
Hay que decidir si entran, se ignoran o se borran.

## Deuda técnica conocida

- **`crossRef` sin normalizar** — 126 referencias en tres notaciones distintas.
  Bloquea la Fase 5. Detalle en PENDIENTES.md.
- **Cuarta regla de muestreo** — hoy no se garantiza que emisora y receptor de
  una trampa cross caigan juntos en el mismo examen.
- **Escala F muy gruesa** — solo 27 trampas F en el banco; un examen recibe ~3,
  así que solo detecta el caso extremo.
- **Sin verificación end-to-end** — el muestreo se validó con 200 simulaciones
  sobre datos reales, pero el endpoint HTTP no se probó porque pide sesión
  iniciada.

## Los 9 criterios de redacción del banco

Si escribes reactivos nuevos, van así:

1. Enunciado corto, una oración, sin paréntesis explicativos.
2. Sin instituciones específicas.
3. Contexto social/personal.
4. Registro humano ordinario — sin marcos clínicos avanzados.
5. Vocabulario descriptivo, no acusatorio.
6. Orientación castrense por equivalencia funcional, no literal.
7. Nombrar a las personas: familia, amigos, compañeros, alguien. **Nunca "los
   míos" ni "él/ella".**
8. Conducta social observable, **no intimidad profunda**.
9. Subnota en español llano; la columna `marco` es la única técnica.

## Cómo arrancar

1. Lee `docs/personalidad-remaster/PENDIENTES.md`.
2. Corre `git log --oneline -10` para confirmar sincronía.
3. Dime en 3 líneas qué entendiste del estado y de mi forma de trabajar.
4. Pregúntame si ya decidí el protocolo de críticos antes de seguir con la
   Fase 5.

No arranques nada nuevo ni cambies el alcance. Vamos fase por fase.
