'use client'

import { useCallback, useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertTriangle, BookOpen, Check, Lightbulb, Loader2 } from 'lucide-react'

/**
 * Editor de "Entiende el tema" (admin).
 *
 * Dos paneles: la lista de capítulos culturales ordenada por lo MÁS FALLADO
 * (para escribir donde más duele) y el área de escritura. La respuesta correcta
 * y la cita del libro NO se tocan aquí: se muestran solo como referencia. Lo que
 * se escribe es la explicación "en palabras simples" que verá el aspirante, y
 * solo cuando esté PUBLICADA.
 *
 * Usa tokens del sistema (no colores a mano) para heredar la piel del panel.
 */

type EstadoAdmin = 'SIN_ESCRIBIR' | 'BORRADOR' | 'PUBLICADO'

type CapItem = {
  capituloId: number
  materia: string
  numero: number
  titulo: string
  totalRespuestas: number
  porcentajeFallo: number | null
  estado: EstadoAdmin
}

type Detalle = {
  capituloId: number
  materia: string
  numero: number
  titulo: string
  contenido: string
  estado: EstadoAdmin
  fuentes: Array<{ explicacion: string | null; referencia: string | null }>
}

const CHIP: Record<EstadoAdmin, { texto: string; clase: string }> = {
  SIN_ESCRIBIR: { texto: 'Sin escribir', clase: 'bg-muted text-muted-foreground' },
  BORRADOR: { texto: 'Borrador', clase: 'bg-accent/15 text-accent' },
  PUBLICADO: { texto: 'Publicado', clase: 'bg-military/20 text-military' },
}

function EstadoChip({ estado }: { estado: EstadoAdmin }) {
  const c = CHIP[estado]
  return (
    <span className={cn('shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold', c.clase)}>
      {c.texto}
    </span>
  )
}

/** El % de fallo tiñe según qué tan alto sea; sin datos, un guion tenue. */
function Fallo({ pct, total }: { pct: number | null; total: number }) {
  if (pct === null) {
    return <span className="text-xs text-muted-foreground/60">sin datos</span>
  }
  const color = pct >= 60 ? 'text-destructive' : pct >= 30 ? 'text-accent' : 'text-muted-foreground'
  return (
    <span className={cn('inline-flex items-center gap-1 text-xs font-medium', color)}>
      <AlertTriangle className="h-3 w-3" />
      {pct}% fallan
      <span className="font-normal text-muted-foreground/70">({total})</span>
    </span>
  )
}

export default function EntiendeTemaAdminPage() {
  const [lista, setLista] = useState<CapItem[] | null>(null)
  const [errorLista, setErrorLista] = useState('')
  const [seleccion, setSeleccion] = useState<number | null>(null)

  const cargarLista = useCallback(() => {
    apiFetch<CapItem[]>('/explicaciones/admin/capitulos')
      .then((cs) => {
        setLista(cs)
        setErrorLista('')
      })
      // Antes un fallo se traducía en lista vacía, y la pantalla decía "no hay
      // capítulos culturales" — que es una respuesta, no un error. Un backend
      // caído se veía igual que un banco vacío.
      .catch((e: Error) => {
        setLista([])
        setErrorLista(e.message)
      })
  }, [])

  useEffect(() => {
    cargarLista()
  }, [cargarLista])

  return (
    <div>
      <div className="mb-5 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
          <Lightbulb className="h-5 w-5 text-accent" />
        </span>
        <div>
          <h1 className="text-lg font-semibold text-foreground">Entiende el tema</h1>
          <p className="text-xs text-muted-foreground">
            Explicaciones por capítulo · ordenadas por lo más fallado
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,320px)_1fr]">
        {/* Lista */}
        <div className="rounded-xl border border-border bg-card p-2">
          {lista === null ? (
            <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Cargando capítulos...
            </div>
          ) : errorLista ? (
            <p className="p-4 text-sm text-destructive">
              No se pudo cargar la lista: {errorLista}
            </p>
          ) : lista.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No hay capítulos culturales.</p>
          ) : (
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
              {lista.map((c) => (
                <button
                  key={c.capituloId}
                  type="button"
                  onClick={() => setSeleccion(c.capituloId)}
                  className={cn(
                    'rounded-lg border p-2.5 text-left transition-colors',
                    seleccion === c.capituloId
                      ? 'border-accent bg-accent/5'
                      : 'border-transparent hover:bg-muted',
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-foreground">
                      {c.materia} · Cap {c.numero}
                    </span>
                    <EstadoChip estado={c.estado} />
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{c.titulo}</p>
                  <div className="mt-1.5">
                    <Fallo pct={c.porcentajeFallo} total={c.totalRespuestas} />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Editor */}
        <div className="rounded-xl border border-border bg-card p-5">
          {seleccion === null ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center gap-2 text-center">
              <Lightbulb className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Elige un capítulo de la izquierda para escribir su explicación.
              </p>
            </div>
          ) : (
            <Editor
              key={seleccion}
              capituloId={seleccion}
              onGuardado={cargarLista}
            />
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Panel de edición de un capítulo ─────────────────────────────────── */

function Editor({
  capituloId,
  onGuardado,
}: {
  capituloId: number
  onGuardado: () => void
}) {
  const [detalle, setDetalle] = useState<Detalle | null>(null)
  const [errorCarga, setErrorCarga] = useState('')
  const [contenido, setContenido] = useState('')
  const [guardando, setGuardando] = useState<null | 'BORRADOR' | 'PUBLICADO'>(null)
  const [aviso, setAviso] = useState('')

  useEffect(() => {
    setDetalle(null)
    setErrorCarga('')
    setAviso('')
    apiFetch<Detalle>(`/explicaciones/admin/${capituloId}`)
      .then((d) => {
        setDetalle(d)
        setContenido(d.contenido)
      })
      // Sin esto, un fallo dejaba `detalle` en null y la pantalla se quedaba
      // girando en "Cargando..." para siempre, sin decir qué pasó.
      .catch((e: Error) => setErrorCarga(e.message))
  }, [capituloId])

  async function guardar(estado: 'BORRADOR' | 'PUBLICADO') {
    if (!contenido.trim()) {
      setAviso('Escribe la explicación antes de guardar.')
      return
    }
    setGuardando(estado)
    setAviso('')
    try {
      await apiFetch(`/explicaciones/admin/${capituloId}`, {
        method: 'PUT',
        body: { contenido, estado },
      })
      setDetalle((d) => (d ? { ...d, estado } : d))
      setAviso(estado === 'PUBLICADO' ? 'Publicado. Ya lo ve el aspirante.' : 'Borrador guardado.')
      onGuardado()
    } catch (err) {
      setAviso((err as Error).message)
    } finally {
      setGuardando(null)
    }
  }

  if (errorCarga) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-2 px-6 text-center">
        <AlertTriangle className="h-6 w-6 text-destructive" />
        <p className="text-sm text-destructive">
          No se pudo abrir este capítulo: {errorCarga}
        </p>
        <p className="text-xs text-muted-foreground">
          Vuelve a elegirlo en la lista para reintentar.
        </p>
      </div>
    )
  }

  if (!detalle) {
    return (
      <div className="flex min-h-[300px] items-center justify-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" /> Cargando...
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-semibold text-foreground">
            {detalle.materia} · Cap {detalle.numero} · {detalle.titulo}
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Reutilizable en todos los planteles con este libro
          </p>
        </div>
        <EstadoChip estado={detalle.estado} />
      </div>

      {/* Fuente: citas del libro (solo lectura) */}
      {detalle.fuentes.length > 0 && (
        <div className="mt-3 rounded-lg border-l-2 border-muted-foreground/40 bg-muted/40 p-3">
          <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <BookOpen className="h-3 w-3" />
            Fuente · cita textual del libro (no se toca)
          </p>
          <ul className="flex flex-col gap-1.5">
            {detalle.fuentes.slice(0, 4).map((f, i) => (
              <li key={i} className="text-xs leading-snug text-muted-foreground">
                {f.explicacion && <span>«{f.explicacion}»</span>}
                {f.referencia && (
                  <span className="text-muted-foreground/70"> — {f.referencia}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Editor */}
      <div className="mt-4">
        <label className="mb-1.5 block text-xs text-muted-foreground">
          Explicación en palabras simples{' '}
          <span className="text-muted-foreground/70">— lo que verá el aspirante</span>
        </label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows={7}
          placeholder="Explica el tema con tus palabras: una analogía, el porqué, en lenguaje llano. Sin copiar la cita del libro."
          className="w-full resize-y rounded-lg border border-border bg-background p-3 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">{aviso}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => guardar('BORRADOR')}
            disabled={guardando !== null}
            className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-50"
          >
            {guardando === 'BORRADOR' ? 'Guardando...' : 'Guardar borrador'}
          </button>
          <button
            type="button"
            onClick={() => guardar('PUBLICADO')}
            disabled={guardando !== null}
            className="inline-flex items-center gap-1.5 rounded-lg bg-military px-3.5 py-2 text-xs font-semibold text-military-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <Check className="h-3.5 w-3.5" />
            {guardando === 'PUBLICADO' ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </div>
    </div>
  )
}
