'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertCircle, ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Claves · Razonamiento abstracto

   Revisor uno-por-uno para ASIGNAR A MANO la respuesta correcta de los
   reactivos con imagen del bloque de Razonamiento Abstracto (se cargaron sin
   clave: la pone Carlo aquí). Da clic en la opción correcta → se guarda al
   instante (PATCH /reactivos/:id) y avanza al siguiente.

   Van en orden de carga (por fecha). Cambiar una clave ya puesta es solo dar
   clic en otra letra.
   ═══════════════════════════════════════════════════════════ */

const BLOQUE_ABSTRACTO = 5
const TEMA = 'razonamiento_abstracto'
const TODAS_LAS_LETRAS = ['A', 'B', 'C', 'D', 'E'] as const

type Reactivo = {
  id: number
  /** El TÍTULO que se lee arriba de la imagen ("¿Cuál elemento sigue en la
   *  sucesión?"). Se escribe aquí; sin él, el aspirante ve la imagen sin saber
   *  qué se le pregunta. */
  enunciado: string
  opciones: unknown
  respuestaCorrecta: string | null
  imagenUrl: string | null
}

type RespuestaLista = {
  data: Reactivo[]
  meta: { total: number; take: number; skip: number; hasMore: boolean }
}

/** Las opciones vienen como Json; aquí son las letras (["A","B","C","D"]). */
function letrasDe(op: unknown): string[] {
  return Array.isArray(op) ? (op as string[]).map(String) : []
}

export default function ClavesAbstractoPage() {
  const [reactivos, setReactivos] = useState<Reactivo[]>([])
  const [idx, setIdx] = useState(0)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [guardando, setGuardando] = useState(false)
  // Estado del guardado del título: se escribe seguido, así que se guarda solo
  // 800 ms después de la última tecla en vez de en cada letra.
  const [tituloEstado, setTituloEstado] = useState<'idle' | 'guardando' | 'guardado'>('idle')
  const temporizadorTitulo = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    apiFetch<RespuestaLista>(
      `/reactivos?bloqueId=${BLOQUE_ABSTRACTO}&tema=${TEMA}&take=200&skip=0`,
    )
      .then((res) => {
        // Orden por id asc = orden de carga = orden por fecha.
        setReactivos([...res.data].sort((a, b) => a.id - b.id))
        setCargando(false)
      })
      .catch((e) => {
        setError((e as Error).message)
        setCargando(false)
      })
  }, [])

  const total = reactivos.length
  const actual = reactivos[idx] as Reactivo | undefined
  const respondidas = useMemo(
    () => reactivos.filter((r) => r.respuestaCorrecta).length,
    [reactivos],
  )
  const conTitulo = useMemo(
    () => reactivos.filter((r) => (r.enunciado ?? '').trim().length > 0).length,
    [reactivos],
  )

  function irA(i: number) {
    setError('')
    setTituloEstado('idle')
    setIdx(Math.max(0, Math.min(i, total - 1)))
  }

  /**
   * Guarda el TÍTULO del reactivo actual (campo `enunciado`).
   *
   * Escribe en el estado local al instante —para que el campo no se sienta
   * trabado— y manda el PATCH 800 ms después de la última tecla. Si se cambia de
   * reactivo antes de que salga, el temporizador se cancela en el efecto de
   * limpieza y NO se guarda el texto de un reactivo sobre otro.
   */
  function escribirTitulo(texto: string) {
    if (!actual) return
    const id = actual.id
    setReactivos((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enunciado: texto } : r)),
    )
    setTituloEstado('guardando')

    if (temporizadorTitulo.current) clearTimeout(temporizadorTitulo.current)
    temporizadorTitulo.current = setTimeout(() => {
      apiFetch(`/reactivos/${id}`, {
        method: 'PATCH',
        body: { enunciado: texto },
      })
        .then(() => {
          setTituloEstado('guardado')
          setTimeout(() => setTituloEstado('idle'), 1500)
        })
        .catch((e: Error) => {
          setTituloEstado('idle')
          setError(`No se pudo guardar el título: ${e.message}`)
        })
    }, 800)
  }

  // Al desmontar, corta cualquier guardado en vuelo.
  useEffect(() => {
    return () => {
      if (temporizadorTitulo.current) clearTimeout(temporizadorTitulo.current)
    }
  }, [])

  /** Guarda la letra como respuesta correcta del reactivo actual. */
  async function guardar(letra: string) {
    if (!actual || guardando) return
    const eraNueva = !actual.respuestaCorrecta
    setGuardando(true)
    setError('')
    try {
      await apiFetch(`/reactivos/${actual.id}`, {
        method: 'PATCH',
        body: { respuestaCorrecta: letra },
      })
      setReactivos((prev) =>
        prev.map((r) => (r.id === actual.id ? { ...r, respuestaCorrecta: letra } : r)),
      )
      // Al responder por primera vez, avanza solo al siguiente. Si solo estaba
      // corrigiendo una ya puesta, se queda para que confirme el cambio.
      if (eraNueva && idx < total - 1) {
        setTimeout(() => setIdx((i) => Math.min(i + 1, total - 1)), 250)
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setGuardando(false)
    }
  }

  /** Ajusta cuántas opciones tiene la imagen (4 = A-D, 5 = A-E). */
  async function fijarNumeroOpciones(n: number) {
    if (!actual) return
    const nuevas = TODAS_LAS_LETRAS.slice(0, n)
    setError('')
    try {
      await apiFetch(`/reactivos/${actual.id}`, {
        method: 'PATCH',
        body: { opciones: nuevas },
      })
      setReactivos((prev) =>
        prev.map((r) =>
          r.id === actual.id
            ? {
                ...r,
                opciones: nuevas,
                // Si la correcta ya no cabe (bajó a 4 y era "E"), se borra.
                respuestaCorrecta:
                  r.respuestaCorrecta && nuevas.includes(r.respuestaCorrecta as never)
                    ? r.respuestaCorrecta
                    : null,
              }
            : r,
        ),
      )
    } catch (e) {
      setError((e as Error).message)
    }
  }

  /* ── Estados de carga ── */
  if (cargando) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Cargando reactivos…
      </div>
    )
  }
  if (error && total === 0) {
    return (
      <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <p className="text-sm text-destructive">{error}</p>
      </div>
    )
  }
  if (total === 0 || !actual) {
    return (
      <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
        No hay reactivos de razonamiento abstracto cargados todavía.
      </div>
    )
  }

  const opciones = letrasDe(actual.opciones)
  const numOpciones = opciones.length

  return (
    <div>
      {/* Encabezado */}
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Claves · Razonamiento abstracto
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Da clic en la opción correcta de cada reactivo. Se guarda sola al
          instante y avanza al siguiente. Puedes volver a cualquiera y cambiarla.
          Mientras un reactivo no tenga clave, en el examen sale como “no
          acertado”.
        </p>
      </div>

      {/* Progreso */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-military transition-all"
            style={{ width: `${(respondidas / total) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
          {respondidas} / {total} con clave
        </span>
      </div>

      {/* Segundo avance: los títulos. Se lleva aparte del de claves porque son
          dos trabajos distintos y uno puede ir muy adelantado del otro. */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${(conTitulo / total) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
          {conTitulo} / {total} con título
        </span>
      </div>

      {/* Mapa de reactivos — clic para saltar; verde = ya tiene clave */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {reactivos.map((r, i) => (
          <button
            key={r.id}
            type="button"
            onClick={() => irA(i)}
            title={`Reactivo ${i + 1}${r.respuestaCorrecta ? ` · ${r.respuestaCorrecta}` : ' · sin clave'}`}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-semibold tabular-nums transition-colors',
              i === idx && 'ring-2 ring-accent ring-offset-1 ring-offset-background',
              r.respuestaCorrecta
                ? 'border-military bg-military/15 text-military'
                : 'border-border bg-card text-muted-foreground hover:bg-muted',
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Tarjeta del reactivo actual */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            Reactivo {idx + 1} de {total}
          </p>
          {actual.respuestaCorrecta ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-military/15 px-2.5 py-0.5 text-xs font-semibold text-military">
              <Check className="h-3.5 w-3.5" />
              Clave: {actual.respuestaCorrecta}
            </span>
          ) : (
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              Sin clave
            </span>
          )}
        </div>

        {/* Título del reactivo — va ARRIBA de la imagen porque es el orden en
            que lo lee el aspirante: primero qué se le pregunta, luego la figura. */}
        <div className="mb-4">
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <label
              htmlFor="titulo-reactivo"
              className="text-xs font-medium text-muted-foreground"
            >
              Título · lo que se lee arriba de la imagen
            </label>
            {tituloEstado === 'guardando' && (
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Loader2 className="h-3 w-3 animate-spin" /> Guardando…
              </span>
            )}
            {tituloEstado === 'guardado' && (
              <span className="flex items-center gap-1 text-[11px] font-medium text-military">
                <Check className="h-3 w-3" /> Guardado
              </span>
            )}
          </div>
          <input
            id="titulo-reactivo"
            type="text"
            value={actual.enunciado ?? ''}
            onChange={(e) => escribirTitulo(e.target.value)}
            placeholder="¿Cuál elemento sigue en la sucesión?"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
          />
          {!actual.enunciado && (
            <p className="mt-1.5 text-[11px] text-muted-foreground">
              Sin título, el aspirante ve la imagen sin saber qué se le pregunta.
            </p>
          )}
        </div>

        {/* Imagen del reactivo */}
        <div className="mb-5 flex justify-center">
          {actual.imagenUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={actual.imagenUrl}
              alt={`Reactivo ${idx + 1}`}
              className="max-h-[55vh] w-auto max-w-full rounded-lg border border-border bg-neutral-900 object-contain"
            />
          ) : (
            <div className="rounded-lg border border-dashed border-border/70 p-8 text-sm text-muted-foreground">
              Este reactivo no tiene imagen.
            </div>
          )}
        </div>

        {/* Botones de opción */}
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {opciones.map((letra) => {
            const esClave = actual.respuestaCorrecta === letra
            return (
              <button
                key={letra}
                type="button"
                disabled={guardando}
                onClick={() => guardar(letra)}
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-xl border text-lg font-bold transition-colors disabled:opacity-50',
                  esClave
                    ? 'border-military bg-military text-military-foreground'
                    : 'border-border bg-card text-foreground hover:border-accent hover:bg-accent/5',
                )}
              >
                {letra}
              </button>
            )
          })}
        </div>

        {/* Ajuste del número de opciones, por si la imagen tiene 4 o 5 */}
        <div className="mb-1 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>¿Cuántas opciones muestra la imagen?</span>
          <div className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-card p-0.5">
            {[4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => fijarNumeroOpciones(n)}
                className={cn(
                  'rounded-md px-2.5 py-1 font-medium transition-colors',
                  numOpciones === n
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p className="mt-2 text-center text-xs text-destructive">{error}</p>
        )}
      </div>

      {/* Navegación */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => irA(idx - 1)}
          disabled={idx === 0}
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </button>
        <button
          type="button"
          onClick={() => irA(idx + 1)}
          disabled={idx === total - 1}
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-40"
        >
          Siguiente
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
