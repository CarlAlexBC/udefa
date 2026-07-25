'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  Brain,
  ChevronRight,
  Loader2,
  Pencil,
  Scale,
  Search,
  UserCircle,
  X,
} from 'lucide-react'
import {
  ModalEditarReactivo,
  type ReactivoEditable,
} from '@/components/admin/ModalEditarReactivo'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type Reactivo = {
  id: number
  enunciado: string
  tipo: string
  opciones: unknown
  respuestaCorrecta: string | null
  explicacion: string | null
  referencia: string | null
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

type TemaConteo = { tema: string; total: number }

const PAGE_SIZE = 50
const SEARCH_DEBOUNCE_MS = 400

// Filtro de polaridad para la lista de reactivos. Solo tiene sentido en
// Personalidad (sus reactivos traen polaridad); el control ni aparece donde no
// hay ninguna. El backend ya acepta `polaridad=POSITIVA|NEGATIVA`.
const OPCIONES_POLARIDAD: Array<{
  valor: 'POSITIVA' | 'NEGATIVA' | null
  label: string
}> = [
  { valor: null, label: 'Todas' },
  { valor: 'POSITIVA', label: 'Positiva' },
  { valor: 'NEGATIVA', label: 'Negativa' },
]

// El backend fija estos IDs (Examen 1=Psicométrico, 2=Personalidad, 3=Axiológico).
const FASES: Array<{
  id: number
  nombre: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}> = [
  { id: 1, nombre: 'Psicométrico', icon: Brain, color: 'text-sky-500' },
  { id: 2, nombre: 'Personalidad', icon: UserCircle, color: 'text-violet-500' },
  { id: 3, nombre: 'Axiológico', icon: Scale, color: 'text-amber-500' },
]

/* ═══════════════════════════════════════════════════════════
   Página — se explora en tres niveles (fase → tema → reactivos),
   con un buscador que se salta el árbol.
   ═══════════════════════════════════════════════════════════ */

export default function BancoPsicologicoPage() {
  // Nivel actual del árbol. faseSel=null → overview; temaSel=null → temas.
  const [faseSel, setFaseSel] = useState<number | null>(null)
  const [temaSel, setTemaSel] = useState<string | null>(null)

  // Buscador. `search` es lo que se teclea; `searchAplicado` es el valor ya
  // debounced con el que de verdad se consulta.
  const [search, setSearch] = useState('')
  const [searchAplicado, setSearchAplicado] = useState('')

  // Conteo por fase para las tarjetas del overview. Se pide una vez.
  const [conteosFase, setConteosFase] = useState<Record<number, number>>({})

  const enBusqueda = search.trim() !== ''
  const fase = FASES.find((f) => f.id === faseSel) ?? null

  useEffect(() => {
    apiFetch<{
      reactivos: { porFase: Array<{ examenId: number; total: number }> }
    }>('/admin/stats')
      .then((s) => {
        const map: Record<number, number> = {}
        for (const f of s.reactivos.porFase) map[f.examenId] = f.total
        setConteosFase(map)
      })
      .catch(() => {})
  }, [])

  // Debounce del buscador.
  useEffect(() => {
    const t = setTimeout(
      () => setSearchAplicado(search.trim()),
      search ? SEARCH_DEBOUNCE_MS : 0,
    )
    return () => clearTimeout(t)
  }, [search])

  return (
    <div>
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Banco psicológico
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Las tres fases psicológicas. Entra a una fase para ver sus temas, o
          busca un reactivo por su enunciado. El examen cultural vive en su
          propio apartado, Banco cultural.
        </p>
      </div>

      {/* Buscador global — siempre visible; al escribir, salta el árbol. */}
      <div className="relative mb-5">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar un reactivo por su enunciado, en cualquier fase…"
          className="h-10 w-full rounded-lg border border-input bg-card pl-9 pr-9 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:bg-muted"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {enBusqueda ? (
        searchAplicado ? (
          <ListaReactivosEditable
            key={`search:${searchAplicado}`}
            queryBase={`search=${encodeURIComponent(searchAplicado)}`}
            mostrarFase
          />
        ) : (
          <Cargando />
        )
      ) : fase === null ? (
        <FasesOverview
          conteos={conteosFase}
          onElegir={(id) => {
            setFaseSel(id)
            setTemaSel(null)
          }}
        />
      ) : temaSel === null ? (
        <>
          <Migas fase={fase.nombre} onFases={() => setFaseSel(null)} />
          <TemasDeFase faseId={fase.id} onElegir={setTemaSel} />
        </>
      ) : (
        <>
          <Migas
            fase={fase.nombre}
            tema={temaSel}
            onFases={() => setFaseSel(null)}
            onFase={() => setTemaSel(null)}
          />
          <ListaReactivosEditable
            key={`tema:${fase.id}:${temaSel}`}
            queryBase={`examenId=${fase.id}&tema=${encodeURIComponent(temaSel)}`}
            mostrarFase={false}
          />
        </>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Nivel 1 — las 3 fases
   ═══════════════════════════════════════════════════════════ */

function FasesOverview({
  conteos,
  onElegir,
}: {
  conteos: Record<number, number>
  onElegir: (id: number) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {FASES.map((f) => {
        const Icon = f.icon
        const n = conteos[f.id]
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onElegir(f.id)}
            className="group flex flex-col rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-colors hover:border-accent/50 hover:bg-accent/5"
          >
            <div className="flex items-center gap-2">
              <Icon className={cn('h-5 w-5', f.color)} />
              <span className="text-sm font-semibold text-foreground">
                {f.nombre}
              </span>
            </div>
            <span className="mt-2 text-xs text-muted-foreground">
              {n === undefined ? (
                '—'
              ) : (
                <>
                  <span className="font-semibold text-foreground">
                    {n.toLocaleString('es-MX')}
                  </span>{' '}
                  reactivos
                </>
              )}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Ver temas <ChevronRight className="h-3 w-3" />
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Nivel 2 — los temas de una fase
   ═══════════════════════════════════════════════════════════ */

function TemasDeFase({
  faseId,
  onElegir,
}: {
  faseId: number
  onElegir: (tema: string) => void
}) {
  const [temas, setTemas] = useState<TemaConteo[] | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let vivo = true
    setCargando(true)
    setError('')

    // Preferimos el endpoint con conteo; si el backend aún no lo tiene (no se
    // ha reiniciado), caemos al de solo nombres para que la vista no se rompa.
    apiFetch<TemaConteo[]>(`/reactivos/temas-conteo?examenId=${faseId}`)
      .then((data) => {
        if (!vivo) return
        setTemas(data)
        setCargando(false)
      })
      .catch(() => {
        apiFetch<string[]>(`/reactivos/temas?examenId=${faseId}`)
          .then((nombres) => {
            if (!vivo) return
            setTemas(nombres.map((t) => ({ tema: t, total: 0 })))
            setCargando(false)
          })
          .catch((err) => {
            if (!vivo) return
            setError((err as Error).message)
            setCargando(false)
          })
      })

    return () => {
      vivo = false
    }
  }, [faseId])

  if (cargando) return <Cargando />
  if (error) return <ErrorBox mensaje={error} />
  if (!temas || temas.length === 0) {
    return (
      <Vacio texto="Esta fase no tiene temas etiquetados. Búscalos por enunciado arriba." />
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <ul className="divide-y divide-border/40">
        {temas.map((t) => (
          <li key={t.tema}>
            <button
              type="button"
              onClick={() => onElegir(t.tema)}
              className="flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-muted/30"
            >
              <span className="text-sm text-foreground">{t.tema}</span>
              <span className="flex items-center gap-2">
                {t.total > 0 && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    {t.total.toLocaleString('es-MX')}
                  </span>
                )}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Nivel 3 / búsqueda — lista editable de reactivos
   ═══════════════════════════════════════════════════════════

   Compartida por la vista de un tema (mostrarFase=false) y por la búsqueda
   global (mostrarFase=true, que sí necesita la columna de fase). Cada
   instancia trae su propio modal de edición y actualiza su propia lista al
   guardar, sin recargar todo. */

function ListaReactivosEditable({
  queryBase,
  mostrarFase,
}: {
  queryBase: string
  mostrarFase: boolean
}) {
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
  const [editando, setEditando] = useState<Reactivo | null>(null)
  // Filtro de polaridad (null = todas). El `key` del padre remonta este
  // componente al cambiar de tema/búsqueda, así que el filtro se reinicia solo.
  const [polaridadSel, setPolaridadSel] = useState<'POSITIVA' | 'NEGATIVA' | null>(
    null,
  )

  // La consulta base más el filtro de polaridad, si hay uno activo.
  const queryConFiltro = polaridadSel
    ? `${queryBase}&polaridad=${polaridadSel}`
    : queryBase

  useEffect(() => {
    let vivo = true
    setCargando(true)
    setError('')
    apiFetch<RespuestaReactivos>(`/reactivos?${queryConFiltro}&take=${PAGE_SIZE}&skip=0`)
      .then((res) => {
        if (!vivo) return
        setReactivos(res.data)
        setMeta(res.meta)
        setCargando(false)
      })
      .catch((err) => {
        if (!vivo) return
        setError((err as Error).message)
        setCargando(false)
      })
    return () => {
      vivo = false
    }
  }, [queryConFiltro])

  async function cargarMas() {
    setCargandoMas(true)
    try {
      const res = await apiFetch<RespuestaReactivos>(
        `/reactivos?${queryConFiltro}&take=${PAGE_SIZE}&skip=${meta.skip + meta.take}`,
      )
      setReactivos((prev) => [...prev, ...res.data])
      setMeta(res.meta)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setCargandoMas(false)
    }
  }

  function reemplazar(act: ReactivoEditable) {
    setReactivos((prev) => prev.map((r) => (r.id === act.id ? { ...r, ...act } : r)))
  }

  // El filtro se muestra donde hay polaridad que filtrar (Personalidad) o si ya
  // hay un filtro activo. Se renderiza en todos los estados —cargando, error,
  // vacío o con lista— para que no desaparezca al re-consultar tras un cambio.
  const mostrarFiltro =
    polaridadSel !== null || reactivos.some((r) => r.polaridad !== null)
  const filtro = mostrarFiltro ? (
    <FiltroPolaridad seleccion={polaridadSel} onCambiar={setPolaridadSel} />
  ) : null

  if (cargando)
    return (
      <>
        {filtro}
        <Cargando />
      </>
    )
  if (error)
    return (
      <>
        {filtro}
        <ErrorBox mensaje={error} />
      </>
    )
  if (reactivos.length === 0) {
    return (
      <>
        {filtro}
        <Vacio
          texto={
            polaridadSel
              ? 'No hay reactivos con esa polaridad en esta vista.'
              : 'No hay reactivos aquí.'
          }
        />
      </>
    )
  }

  return (
    <>
      {filtro}
      <div className="mb-3 text-xs text-muted-foreground">
        Mostrando{' '}
        <span className="font-semibold text-foreground">{reactivos.length}</span>{' '}
        de <span className="font-semibold text-foreground">{meta.total}</span>{' '}
        reactivos
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr>
                {mostrarFase && <th className="px-3 py-2 font-semibold">Fase</th>}
                {mostrarFase && <th className="px-3 py-2 font-semibold">Tema</th>}
                <th className="px-3 py-2 font-semibold">Enunciado</th>
                <th className="px-3 py-2 font-semibold">Polaridad</th>
                <th className="px-3 py-2 font-semibold">Respuesta correcta</th>
                <th className="px-3 py-2 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {reactivos.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
                >
                  {mostrarFase && (
                    <td className="px-3 py-2">
                      <FaseBadge tipo={r.bloque.examen.tipo} />
                    </td>
                  )}
                  {mostrarFase && (
                    <td className="px-3 py-2 text-xs text-muted-foreground">
                      {r.tema ?? '—'}
                    </td>
                  )}
                  <td className="max-w-md px-3 py-2 text-xs text-foreground">
                    <p className="line-clamp-2">{r.enunciado}</p>
                  </td>
                  <td className="px-3 py-2">
                    <PolaridadBadge polaridad={r.polaridad} />
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">
                    {r.respuestaCorrecta ?? (
                      <span className="text-muted-foreground/60">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button
                      type="button"
                      onClick={() => setEditando(r)}
                      className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Pencil className="h-3 w-3" />
                      Editar
                    </button>
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
              {cargandoMas ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
              Cargar {Math.min(PAGE_SIZE, meta.total - reactivos.length)} más
            </button>
          </div>
        )}
      </div>

      {editando && (
        <ModalEditarReactivo
          reactivo={editando}
          exigeCorrecta={['psicometrico', 'cultural'].includes(
            editando.bloque.examen.tipo,
          )}
          onCerrar={() => setEditando(null)}
          onGuardado={(act) => {
            reemplazar(act)
            setEditando(null)
          }}
        />
      )}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes compartidos
   ═══════════════════════════════════════════════════════════ */

function Migas({
  fase,
  tema,
  onFases,
  onFase,
}: {
  fase: string
  tema?: string
  onFases: () => void
  onFase?: () => void
}) {
  return (
    <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
      <button type="button" onClick={onFases} className="hover:text-foreground">
        Fases
      </button>
      <ChevronRight className="h-3.5 w-3.5" />
      {tema ? (
        <>
          <button type="button" onClick={onFase} className="hover:text-foreground">
            {fase}
          </button>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground">{tema}</span>
        </>
      ) : (
        <span className="font-medium text-foreground">{fase}</span>
      )}
    </div>
  )
}

function Cargando() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin" />
      Cargando…
    </div>
  )
}

function ErrorBox({ mensaje }: { mensaje: string }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      <p className="text-sm text-destructive">{mensaje}</p>
    </div>
  )
}

function Vacio({ texto }: { texto: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
      {texto}
    </div>
  )
}

function PolaridadBadge({
  polaridad,
}: {
  polaridad: 'POSITIVA' | 'NEGATIVA' | null
}) {
  if (!polaridad) {
    return <span className="text-xs text-muted-foreground/60">—</span>
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest',
        polaridad === 'POSITIVA'
          ? 'bg-emerald-500/10 text-emerald-600'
          : 'bg-rose-500/10 text-rose-600',
      )}
    >
      {polaridad === 'POSITIVA' ? 'Positiva' : 'Negativa'}
    </span>
  )
}

/** Filtro segmentado de polaridad (Todas / Positiva / Negativa) para la lista. */
function FiltroPolaridad({
  seleccion,
  onCambiar,
}: {
  seleccion: 'POSITIVA' | 'NEGATIVA' | null
  onCambiar: (v: 'POSITIVA' | 'NEGATIVA' | null) => void
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Polaridad
      </span>
      <div className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-card p-0.5 shadow-sm">
        {OPCIONES_POLARIDAD.map((opt) => {
          const activo = seleccion === opt.valor
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onCambiar(opt.valor)}
              className={cn(
                'rounded-md px-3 py-1 text-xs font-medium transition-colors',
                activo
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

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
