'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  BookOpen,
  Check,
  ChevronLeft,
  Loader2,
  Pencil,
  X,
} from 'lucide-react'
import { ModalEditarReactivo } from '@/components/admin/ModalEditarReactivo'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type Libro = {
  id: number
  slug: string
  materia: string
  autor: string
  edicion: string | null
  anio: number | null
  capitulos: number
  reactivos: number
}

type TemaNodo = { id: number; nombre: string; _count: { reactivos: number } }
type CapituloNodo = {
  id: number
  numero: number
  titulo: string
  temas: TemaNodo[]
}
type LibroArbol = {
  id: number
  slug: string
  materia: string
  autor: string
  capitulos: CapituloNodo[]
}

type ReactivoCultural = {
  id: number
  enunciado: string
  opciones: unknown
  respuestaCorrecta: string | null
  explicacion: string | null
  referencia: string | null
  tema: string | null
}

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function BancoCulturalPage() {
  const [libros, setLibros] = useState<Libro[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  const [arbol, setArbol] = useState<LibroArbol | null>(null)
  const [cargandoArbol, setCargandoArbol] = useState(false)

  // Tema abierto en el modal de reactivos (null = cerrado).
  const [temaAbierto, setTemaAbierto] = useState<TemaNodo | null>(null)

  useEffect(() => {
    apiFetch<Libro[]>('/cultural/libros')
      .then((data) => {
        setLibros(data)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  async function abrirLibro(id: number) {
    setCargandoArbol(true)
    setError('')
    try {
      const data = await apiFetch<LibroArbol>(`/cultural/libros/${id}`)
      setArbol(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setCargandoArbol(false)
    }
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Banco cultural
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          El banco del examen cultural, organizado por libro → capítulo → tema.
          Abre un libro para ver su árbol y un tema para revisar sus reactivos.
        </p>
      </div>

      {error && (
        <div className="mb-4 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {cargando ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando libros…
        </div>
      ) : arbol ? (
        <VistaArbol
          arbol={arbol}
          cargando={cargandoArbol}
          onVolver={() => setArbol(null)}
          onAbrirTema={setTemaAbierto}
        />
      ) : (
        <VistaLibros libros={libros} onAbrir={abrirLibro} cargando={cargandoArbol} />
      )}

      {temaAbierto && (
        <ModalReactivosTema
          tema={temaAbierto}
          onCerrar={() => setTemaAbierto(null)}
        />
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Vista: rejilla de libros
   ═══════════════════════════════════════════════════════════ */

function VistaLibros({
  libros,
  onAbrir,
  cargando,
}: {
  libros: Libro[]
  onAbrir: (id: number) => void
  cargando: boolean
}) {
  if (libros.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
        No hay libros en el banco cultural todavía.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {libros.map((l) => (
        <button
          key={l.id}
          type="button"
          disabled={cargando}
          onClick={() => onAbrir(l.id)}
          className="group flex flex-col rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-colors hover:border-accent/50 hover:bg-accent/5 disabled:opacity-50"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-military" />
            <span className="text-sm font-semibold text-foreground">
              {l.materia}
            </span>
          </div>
          <span className="mt-1 text-xs text-muted-foreground">{l.autor}</span>
          <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
            <span>
              <span className="font-semibold text-foreground">
                {l.capitulos}
              </span>{' '}
              capítulos
            </span>
            <span>
              <span className="font-semibold text-foreground">
                {l.reactivos}
              </span>{' '}
              reactivos
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Vista: árbol de un libro (capítulos → temas)
   ═══════════════════════════════════════════════════════════ */

function VistaArbol({
  arbol,
  cargando,
  onVolver,
  onAbrirTema,
}: {
  arbol: LibroArbol
  cargando: boolean
  onVolver: () => void
  onAbrirTema: (t: TemaNodo) => void
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onVolver}
        className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        Todos los libros
      </button>

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-military" />
          <h2 className="text-lg font-semibold text-foreground">
            {arbol.materia}
          </h2>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">{arbol.autor}</p>
      </div>

      {cargando ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando…
        </div>
      ) : (
        <div className="space-y-4">
          {arbol.capitulos.map((cap) => (
            <div
              key={cap.id}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="border-b border-border bg-muted/40 px-4 py-2">
                <p className="text-sm font-semibold text-foreground">
                  <span className="text-military">Cap. {cap.numero}</span> ·{' '}
                  {cap.titulo}
                </p>
              </div>
              <ul className="divide-y divide-border/40">
                {cap.temas.map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => onAbrirTema(t)}
                      className="flex w-full items-center justify-between px-4 py-2 text-left transition-colors hover:bg-muted/30"
                    >
                      <span className="text-xs text-foreground">{t.nombre}</span>
                      <span className="ml-3 shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {t._count.reactivos}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Modal: reactivos de un tema (solo lectura)
   ═══════════════════════════════════════════════════════════ */

function ModalReactivosTema({
  tema,
  onCerrar,
}: {
  tema: TemaNodo
  onCerrar: () => void
}) {
  const [reactivos, setReactivos] = useState<ReactivoCultural[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [editando, setEditando] = useState<ReactivoCultural | null>(null)

  useEffect(() => {
    apiFetch<ReactivoCultural[]>(`/cultural/temas/${tema.id}/reactivos`)
      .then((data) => {
        setReactivos(data)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [tema.id])

  return (
    <>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onCerrar}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-xl border border-border bg-card shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-border p-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
              Tema
            </p>
            <h2 className="mt-0.5 text-base font-semibold text-foreground">
              {tema.nombre}
            </h2>
          </div>
          <button
            type="button"
            onClick={onCerrar}
            className="rounded p-1 text-muted-foreground hover:bg-muted"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5">
          {cargando ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Cargando reactivos…
            </div>
          ) : error ? (
            <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          ) : (
            <ol className="space-y-5">
              {reactivos.map((r, i) => (
                <li key={r.id} className="text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-foreground">
                      <span className="text-muted-foreground">{i + 1}. </span>
                      {r.enunciado}
                    </p>
                    <button
                      type="button"
                      onClick={() => setEditando(r)}
                      className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Pencil className="h-3 w-3" />
                      Editar
                    </button>
                  </div>
                  {Array.isArray(r.opciones) && (
                    <ul className="mt-2 space-y-1">
                      {(r.opciones as unknown[]).map((op, j) => {
                        const texto = String(op)
                        const esCorrecta = texto === r.respuestaCorrecta
                        return (
                          <li
                            key={j}
                            className={cn(
                              'flex items-start gap-2 rounded-md px-2 py-1 text-xs',
                              esCorrecta
                                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                                : 'text-muted-foreground',
                            )}
                          >
                            {esCorrecta ? (
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            ) : (
                              <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            )}
                            <span>{texto}</span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {r.explicacion && (
                    <p className="mt-2 border-l-2 border-border pl-3 text-xs italic text-muted-foreground">
                      {r.explicacion}
                    </p>
                  )}
                  {r.referencia && (
                    <p className="mt-1 text-[11px] text-muted-foreground/70">
                      {r.referencia}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>

    {editando && (
      <ModalEditarReactivo
        reactivo={editando}
        exigeCorrecta
        onCerrar={() => setEditando(null)}
        onGuardado={(act) => {
          setReactivos((prev) =>
            prev.map((r) => (r.id === act.id ? { ...r, ...act } : r)),
          )
          setEditando(null)
        }}
      />
    )}
    </>
  )
}
