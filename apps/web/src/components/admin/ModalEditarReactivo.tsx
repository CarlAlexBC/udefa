'use client'

import { useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertCircle, Check, Loader2, X } from 'lucide-react'

/**
 * Campos editables de un reactivo, comunes al banco psicológico y al cultural.
 * A propósito NO incluye `bloque`: el cultural no lo tiene. Lo que decide si
 * hay que marcar una respuesta correcta llega como prop `exigeCorrecta`.
 */
export type ReactivoEditable = {
  id: number
  enunciado: string
  opciones: unknown
  respuestaCorrecta: string | null
  explicacion: string | null
  referencia: string | null
  tema: string | null
}

/**
 * Modal de edición de un reactivo, compartido por la sección Reactivos y el
 * Banco cultural.
 *
 * La respuesta correcta NO se escribe: se ELIGE con el radio junto a una
 * opción. Así `respuestaCorrecta` siempre es una de las opciones — imposible
 * que quede "mal marcada", que es el bug que la analítica destapaba.
 */
export function ModalEditarReactivo({
  reactivo,
  exigeCorrecta,
  onCerrar,
  onGuardado,
}: {
  reactivo: ReactivoEditable
  exigeCorrecta: boolean
  onCerrar: () => void
  onGuardado: (actualizado: ReactivoEditable) => void
}) {
  const opcionesEditables =
    Array.isArray(reactivo.opciones) &&
    reactivo.opciones.every((o) => typeof o === 'string')
      ? (reactivo.opciones as string[])
      : null

  const [enunciado, setEnunciado] = useState(reactivo.enunciado)
  const [opciones, setOpciones] = useState<string[]>(opcionesEditables ?? [])
  const [correctaIdx, setCorrectaIdx] = useState<number>(
    opcionesEditables
      ? opcionesEditables.indexOf(reactivo.respuestaCorrecta ?? '')
      : -1,
  )
  const [explicacion, setExplicacion] = useState(reactivo.explicacion ?? '')
  const [tema, setTema] = useState(reactivo.tema ?? '')
  const [referencia, setReferencia] = useState(reactivo.referencia ?? '')
  const [guardando, setGuardando] = useState(false)
  const [errorModal, setErrorModal] = useState('')

  async function guardar() {
    setErrorModal('')
    if (!enunciado.trim()) {
      setErrorModal('El enunciado no puede quedar vacío.')
      return
    }
    if (opcionesEditables && opciones.some((o) => !o.trim())) {
      setErrorModal('Ninguna opción puede quedar vacía.')
      return
    }
    if (opcionesEditables && exigeCorrecta && correctaIdx < 0) {
      setErrorModal('Marca cuál es la respuesta correcta.')
      return
    }

    const datos: Record<string, unknown> = {
      enunciado: enunciado.trim(),
      explicacion: explicacion.trim() || null,
      tema: tema.trim() || null,
      referencia: referencia.trim() || null,
    }
    if (opcionesEditables) {
      datos.opciones = opciones
      datos.respuestaCorrecta = correctaIdx >= 0 ? opciones[correctaIdx] : null
    }

    setGuardando(true)
    try {
      const actualizado = await apiFetch<ReactivoEditable>(
        `/reactivos/${reactivo.id}`,
        { method: 'PATCH', body: datos },
      )
      onGuardado(actualizado)
    } catch (err) {
      setErrorModal((err as Error).message)
      setGuardando(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onCerrar}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
              Editar reactivo
            </p>
            <h2 className="mt-0.5 text-lg font-semibold text-foreground">
              #{reactivo.id}
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

        <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Enunciado
        </label>
        <textarea
          value={enunciado}
          onChange={(e) => setEnunciado(e.target.value)}
          rows={3}
          className="mb-4 mt-1 w-full rounded-md border border-input bg-transparent px-2 py-1.5 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        />

        {opcionesEditables ? (
          <div className="mb-4">
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Opciones {exigeCorrecta && '· marca la correcta'}
            </label>
            <div className="mt-1 space-y-2">
              {opciones.map((op, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="correcta"
                    checked={correctaIdx === i}
                    onChange={() => setCorrectaIdx(i)}
                    className="h-4 w-4 shrink-0 accent-military"
                    aria-label={`Marcar opción ${i + 1} como correcta`}
                  />
                  <input
                    type="text"
                    value={op}
                    onChange={(e) =>
                      setOpciones((prev) =>
                        prev.map((o, j) => (j === i ? e.target.value : o)),
                      )
                    }
                    className={cn(
                      'h-9 w-full rounded-md border bg-transparent px-2 text-sm text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                      correctaIdx === i
                        ? 'border-emerald-500/60'
                        : 'border-input focus-visible:border-ring',
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="mb-4 rounded-md border border-dashed border-border/70 bg-muted/30 p-2 text-xs text-muted-foreground">
            Este reactivo no tiene opciones en formato editable aquí.
          </p>
        )}

        <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Explicación
        </label>
        <textarea
          value={explicacion}
          onChange={(e) => setExplicacion(e.target.value)}
          rows={2}
          className="mb-4 mt-1 w-full rounded-md border border-input bg-transparent px-2 py-1.5 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        />

        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Tema
            </label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Referencia
            </label>
            <input
              type="text"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            />
          </div>
        </div>

        {errorModal && (
          <div className="mb-3 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-2.5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <p className="text-xs text-destructive">{errorModal}</p>
          </div>
        )}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCerrar}
            className="rounded-md px-4 py-1.5 text-sm text-muted-foreground hover:bg-muted"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={guardar}
            disabled={guardando}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {guardando ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Check className="h-3.5 w-3.5" />
            )}
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}
