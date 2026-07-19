'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertCircle, Loader2, Search, X } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type Reactivo = {
  id: number
  enunciado: string
  tipo: string
  opciones: unknown
  respuestaCorrecta: string | null
  tema: string | null
  polaridad: 'POSITIVA' | 'NEGATIVA' | null
  bloque: {
    id: number
    nombre: string
    examen: { id: number; tipo: string }
  }
}

type RespuestaReactivos = {
  data: Reactivo[]
  meta: { total: number; take: number; skip: number; hasMore: boolean }
}

type Filtros = {
  examenId: number | 'todos'
  tema: string
  polaridad: 'POSITIVA' | 'NEGATIVA' | 'todas'
  search: string
}

const PAGE_SIZE = 50
const SEARCH_DEBOUNCE_MS = 400

// El backend fija estos IDs (Examen 1=Psicométrico, 2=Personalidad, 3=Axiológico).
// Hardcodearlos evita un fetch extra a /examenes para el selector.
const FASES: Array<{ id: number; nombre: string }> = [
  { id: 1, nombre: 'Psicométrico' },
  { id: 2, nombre: 'Personalidad' },
  { id: 3, nombre: 'Axiológico' },
]

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function ReactivosAdminPage() {
  const [filtros, setFiltros] = useState<Filtros>({
    examenId: 'todos',
    tema: '',
    polaridad: 'todas',
    search: '',
  })

  const [reactivos, setReactivos] = useState<Reactivo[]>([])
  const [meta, setMeta] = useState<RespuestaReactivos['meta']>({
    total: 0,
    take: PAGE_SIZE,
    skip: 0,
    hasMore: false,
  })
  const [cargando, setCargando] = useState(true)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [error, setError] = useState('')

  const [temasDisponibles, setTemasDisponibles] = useState<string[]>([])

  // Ref del último requestId para descartar respuestas obsoletas (race conditions
  // clásicas: user tipea rápido, respuestas llegan fuera de orden).
  const ultimoRequestId = useRef(0)

  /* Construye el querystring de filtros para pasar al backend. */
  const construirQuery = useCallback(
    (skip: number) => {
      const params = new URLSearchParams({
        take: String(PAGE_SIZE),
        skip: String(skip),
      })
      if (filtros.examenId !== 'todos') {
        params.set('examenId', String(filtros.examenId))
      }
      if (filtros.tema) params.set('tema', filtros.tema)
      if (filtros.polaridad !== 'todas') {
        params.set('polaridad', filtros.polaridad)
      }
      if (filtros.search.trim()) params.set('search', filtros.search.trim())
      return params.toString()
    },
    [filtros],
  )

  /* Fetch principal cuando cambian filtros. Reinicia paginación. */
  useEffect(() => {
    const requestId = ++ultimoRequestId.current
    setCargando(true)
    setError('')

    const timer = setTimeout(() => {
      apiFetch<RespuestaReactivos>(`/reactivos?${construirQuery(0)}`)
        .then((res) => {
          if (requestId !== ultimoRequestId.current) return // obsoleto
          setReactivos(res.data)
          setMeta(res.meta)
          setCargando(false)
        })
        .catch((err) => {
          if (requestId !== ultimoRequestId.current) return
          setError((err as Error).message)
          setCargando(false)
        })
    }, filtros.search ? SEARCH_DEBOUNCE_MS : 0)

    return () => clearTimeout(timer)
  }, [construirQuery, filtros.search])

  /* Cuando cambia la fase, recarga los temas disponibles y limpia el tema
     seleccionado si ya no está en la nueva lista. */
  useEffect(() => {
    const examenIdParam =
      filtros.examenId === 'todos' ? '' : `?examenId=${filtros.examenId}`
    apiFetch<string[]>(`/reactivos/temas${examenIdParam}`)
      .then((temas) => {
        setTemasDisponibles(temas)
        setFiltros((prev) =>
          prev.tema && !temas.includes(prev.tema)
            ? { ...prev, tema: '' }
            : prev,
        )
      })
      .catch(() => setTemasDisponibles([]))
  }, [filtros.examenId])

  async function cargarMas() {
    setCargandoMas(true)
    try {
      const res = await apiFetch<RespuestaReactivos>(
        `/reactivos?${construirQuery(meta.skip + meta.take)}`,
      )
      setReactivos((prev) => [...prev, ...res.data])
      setMeta(res.meta)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setCargandoMas(false)
    }
  }

  const hayFiltrosActivos =
    filtros.examenId !== 'todos' ||
    filtros.tema !== '' ||
    filtros.polaridad !== 'todas' ||
    filtros.search !== ''

  /* ═══════════════════════════════════════════════════════════
     Render
     ═══════════════════════════════════════════════════════════ */

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Reactivos
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explora el banco por fase, tema y polaridad. La edición de reactivos
          se hace por remasterización desde scripts (no editable inline).
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-4 rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {/* Fase */}
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Fase
            </label>
            <select
              value={filtros.examenId}
              onChange={(e) => {
                const value =
                  e.target.value === 'todos' ? 'todos' : Number(e.target.value)
                setFiltros((prev) => ({ ...prev, examenId: value }))
              }}
              className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <option value="todos">Todas las fases</option>
              {FASES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Tema */}
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Tema
            </label>
            <select
              value={filtros.tema}
              onChange={(e) =>
                setFiltros((prev) => ({ ...prev, tema: e.target.value }))
              }
              disabled={temasDisponibles.length === 0}
              className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground disabled:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <option value="">Todos los temas</option>
              {temasDisponibles.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Polaridad */}
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Polaridad
            </label>
            <select
              value={filtros.polaridad}
              onChange={(e) =>
                setFiltros((prev) => ({
                  ...prev,
                  polaridad: e.target.value as Filtros['polaridad'],
                }))
              }
              className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <option value="todas">Todas</option>
              <option value="POSITIVA">Positiva</option>
              <option value="NEGATIVA">Negativa</option>
            </select>
          </div>

          {/* Búsqueda */}
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Buscar
            </label>
            <div className="relative mt-1">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={filtros.search}
                onChange={(e) =>
                  setFiltros((prev) => ({ ...prev, search: e.target.value }))
                }
                placeholder="En el enunciado…"
                className="h-9 w-full rounded-md border border-input bg-transparent pl-7 pr-8 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              />
              {filtros.search && (
                <button
                  type="button"
                  onClick={() =>
                    setFiltros((prev) => ({ ...prev, search: '' }))
                  }
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:bg-muted"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {hayFiltrosActivos && (
          <button
            type="button"
            onClick={() =>
              setFiltros({
                examenId: 'todos',
                tema: '',
                polaridad: 'todas',
                search: '',
              })
            }
            className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Estado / contador */}
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        {cargando ? (
          <span className="inline-flex items-center gap-1">
            <Loader2 className="h-3 w-3 animate-spin" />
            Cargando…
          </span>
        ) : (
          <span>
            Mostrando{' '}
            <span className="font-semibold text-foreground">
              {reactivos.length}
            </span>{' '}
            de <span className="font-semibold text-foreground">{meta.total}</span>{' '}
            reactivos
          </span>
        )}
      </div>

      {error && (
        <div className="mb-3 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Tabla */}
      {!cargando && reactivos.length === 0 && !error && (
        <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
          No hay reactivos que coincidan con los filtros.
        </div>
      )}

      {reactivos.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-semibold">ID</th>
                  <th className="px-3 py-2 font-semibold">Fase</th>
                  <th className="px-3 py-2 font-semibold">Tema</th>
                  <th className="px-3 py-2 font-semibold">Enunciado</th>
                  <th className="px-3 py-2 font-semibold">Polaridad</th>
                  <th className="px-3 py-2 font-semibold">Respuesta correcta</th>
                </tr>
              </thead>
              <tbody>
                {reactivos.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
                  >
                    <td className="px-3 py-2 text-xs text-muted-foreground">
                      {r.id}
                    </td>
                    <td className="px-3 py-2">
                      <FaseBadge tipo={r.bloque.examen.tipo} />
                    </td>
                    <td className="px-3 py-2 text-xs text-foreground">
                      {r.tema ?? (
                        <span className="text-muted-foreground/60">—</span>
                      )}
                    </td>
                    <td className="max-w-md px-3 py-2 text-xs text-foreground">
                      <p className="line-clamp-2">{r.enunciado}</p>
                    </td>
                    <td className="px-3 py-2">
                      {r.polaridad ? (
                        <span
                          className={cn(
                            'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest',
                            r.polaridad === 'POSITIVA'
                              ? 'bg-emerald-500/10 text-emerald-600'
                              : 'bg-rose-500/10 text-rose-600',
                          )}
                        >
                          {r.polaridad === 'POSITIVA' ? 'Positiva' : 'Negativa'}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground/60">
                          —
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-xs text-muted-foreground">
                      {r.respuestaCorrecta ?? (
                        <span className="text-muted-foreground/60">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {meta.hasMore && (
            <div className="border-t border-border p-3 text-center">
              <button
                type="button"
                onClick={cargarMas}
                disabled={cargandoMas}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {cargandoMas ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : null}
                Cargar {Math.min(PAGE_SIZE, meta.total - reactivos.length)} más
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes
   ═══════════════════════════════════════════════════════════ */

function FaseBadge({ tipo }: { tipo: string }) {
  const config = {
    psicometrico: {
      label: 'Psicométrico',
      className: 'bg-sky-500/10 text-sky-600',
    },
    personalidad: {
      label: 'Personalidad',
      className: 'bg-violet-500/10 text-violet-600',
    },
    axiologico: {
      label: 'Axiológico',
      className: 'bg-amber-500/10 text-amber-600',
    },
  } as const
  const c = config[tipo as keyof typeof config] ?? {
    label: tipo,
    className: 'bg-muted text-muted-foreground',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest',
        c.className,
      )}
    >
      {c.label}
    </span>
  )
}
