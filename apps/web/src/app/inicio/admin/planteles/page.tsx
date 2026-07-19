'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { logoDePlantel } from '@/lib/planteles'
import {
  AlertCircle,
  CheckCircle2,
  GraduationCap,
  Loader2,
  Save,
} from 'lucide-react'

type Plantel = {
  id: number
  nombre: string
  descripcion: string | null
  createdAt: string
  updatedAt: string
}

type EstadoGuardado = 'idle' | 'saving' | 'saved' | 'error'

const DEBOUNCE_MS = 800

/**
 * Edición de los 11 planteles del Sistema Educativo Militar.
 * Auto-save por fila: al cambiar nombre o descripción se dispara un
 * PATCH después de 800ms sin más tecleo. El backend requiere @Roles('admin').
 */
export default function PlantelesAdminPage() {
  const [planteles, setPlanteles] = useState<Plantel[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [estados, setEstados] = useState<Record<number, EstadoGuardado>>({})

  // Timers de debounce por plantel id
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({})

  useEffect(() => {
    apiFetch<Plantel[]>('/planteles')
      .then((data) => {
        setPlanteles(data)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  const programarGuardado = useCallback(
    (id: number, cambios: { nombre?: string; descripcion?: string | null }) => {
      if (timers.current[id]) clearTimeout(timers.current[id])
      setEstados((prev) => ({ ...prev, [id]: 'idle' }))

      timers.current[id] = setTimeout(async () => {
        setEstados((prev) => ({ ...prev, [id]: 'saving' }))
        try {
          // El backend espera { nombre, descripcion } — enviamos ambos con
          // los valores actuales de la fila para no perder el otro campo.
          const filaActual = planteles.find((p) => p.id === id)
          if (!filaActual) return
          const body = {
            nombre: cambios.nombre ?? filaActual.nombre,
            descripcion:
              cambios.descripcion !== undefined
                ? cambios.descripcion ?? undefined
                : filaActual.descripcion ?? undefined,
          }
          await apiFetch(`/planteles/${id}`, {
            method: 'PATCH',
            body,
          })
          setEstados((prev) => ({ ...prev, [id]: 'saved' }))
          setTimeout(() => {
            setEstados((prev) => ({ ...prev, [id]: 'idle' }))
          }, 2000)
        } catch (err) {
          console.error(err)
          setEstados((prev) => ({ ...prev, [id]: 'error' }))
        }
      }, DEBOUNCE_MS)
    },
    [planteles],
  )

  const actualizarLocal = (id: number, cambios: Partial<Plantel>) => {
    setPlanteles((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...cambios } : p)),
    )
  }

  if (cargando) {
    return (
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-sm">Cargando planteles...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <p className="text-sm text-destructive">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Planteles
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Los {planteles.length} planteles del Sistema Educativo Militar. Los cambios
          se guardan automáticamente 800 ms después de dejar de escribir. El logo se
          asigna en <code className="rounded bg-muted px-1 text-xs">apps/web/src/lib/planteles.ts</code>.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {planteles.map((p) => {
          const logoSrc = logoDePlantel(p.nombre)
          const estado = estados[p.id] ?? 'idle'
          return (
            <article
              key={p.id}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              {/* Logo miniatura */}
              <div className="shrink-0">
                {logoSrc ? (
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ring-1 ring-accent/30">
                    <Image
                      src={logoSrc}
                      alt={`Escudo de ${p.nombre}`}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <GraduationCap className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Campos editables */}
              <div className="flex-1 space-y-2">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={p.nombre}
                    onChange={(e) => {
                      actualizarLocal(p.id, { nombre: e.target.value })
                      programarGuardado(p.id, { nombre: e.target.value })
                    }}
                    className="mt-0.5 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Descripción
                  </label>
                  <textarea
                    value={p.descripcion ?? ''}
                    onChange={(e) => {
                      const nuevoValor = e.target.value
                      actualizarLocal(p.id, { descripcion: nuevoValor })
                      programarGuardado(p.id, { descripcion: nuevoValor })
                    }}
                    rows={2}
                    className="mt-0.5 w-full resize-none rounded-md border border-input bg-transparent px-2 py-1 text-sm text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  />
                </div>
              </div>

              {/* Feedback de guardado */}
              <div className="flex w-24 shrink-0 items-start justify-end pt-1">
                <IndicadorGuardado estado={estado} />
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function IndicadorGuardado({ estado }: { estado: EstadoGuardado }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-opacity',
        estado === 'idle' && 'opacity-0',
        estado === 'saving' && 'bg-muted text-muted-foreground',
        estado === 'saved' && 'bg-emerald-500/10 text-emerald-600',
        estado === 'error' && 'bg-destructive/10 text-destructive',
      )}
    >
      {estado === 'saving' && (
        <>
          <Save className="h-3 w-3 animate-pulse" />
          Guardando
        </>
      )}
      {estado === 'saved' && (
        <>
          <CheckCircle2 className="h-3 w-3" />
          Guardado
        </>
      )}
      {estado === 'error' && (
        <>
          <AlertCircle className="h-3 w-3" />
          Error
        </>
      )}
    </div>
  )
}
