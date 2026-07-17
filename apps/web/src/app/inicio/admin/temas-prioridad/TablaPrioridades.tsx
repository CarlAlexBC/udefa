'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle2, Loader2, Save } from 'lucide-react'

type TemaPrioridad = {
  tema: string
  peso: number
  descripcion: string | null
  motivoContextual: string | null
  createdAt: string
  updatedAt: string
}

type EstadoGuardado = 'idle' | 'saving' | 'saved' | 'error'

/**
 * Tabla editable de prioridades. Auto-save con debounce por fila:
 * cuando el usuario cambia peso/descripción/motivo, se dispara un PATCH
 * después de 800ms sin más cambios. Feedback visual junto a cada fila.
 */
export function TablaPrioridades() {
  const [temas, setTemas] = useState<TemaPrioridad[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  // Estado por fila para feedback de guardado
  const [estados, setEstados] = useState<Record<string, EstadoGuardado>>({})

  // Refs para timers de debounce por tema
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  useEffect(() => {
    apiFetch<TemaPrioridad[]>('/temas-prioridad')
      .then((data) => {
        setTemas(data)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  /** Debounce del PATCH — evita disparar en cada tecla. */
  const programarGuardado = useCallback(
    (tema: string, cambios: Partial<Pick<TemaPrioridad, 'peso' | 'descripcion' | 'motivoContextual'>>) => {
      // Cancela timer previo si existe
      if (timers.current[tema]) {
        clearTimeout(timers.current[tema])
      }
      setEstados((prev) => ({ ...prev, [tema]: 'idle' }))

      timers.current[tema] = setTimeout(async () => {
        setEstados((prev) => ({ ...prev, [tema]: 'saving' }))
        try {
          await apiFetch(`/temas-prioridad/${encodeURIComponent(tema)}`, {
            method: 'PATCH',
            body: cambios,
          })
          setEstados((prev) => ({ ...prev, [tema]: 'saved' }))
          // Vuelve a idle después de 2s para dejar de mostrar el check
          setTimeout(() => {
            setEstados((prev) => ({ ...prev, [tema]: 'idle' }))
          }, 2000)
        } catch (err) {
          console.error(err)
          setEstados((prev) => ({ ...prev, [tema]: 'error' }))
        }
      }, 800)
    },
    [],
  )

  const actualizarLocal = (tema: string, cambios: Partial<TemaPrioridad>) => {
    setTemas((prev) =>
      prev.map((t) => (t.tema === tema ? { ...t, ...cambios } : t)),
    )
  }

  if (cargando) {
    return (
      <div className="mt-6 flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        <p className="text-sm">Cargando catálogo de prioridades...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <p className="text-sm text-destructive">{error}</p>
      </div>
    )
  }

  return (
    <div className="mt-8 rounded-xl border border-border bg-card">
      {/* Encabezado */}
      <div className="grid grid-cols-[1fr_140px_1.5fr_1.5fr_60px] gap-3 border-b border-border bg-muted/50 px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        <div>Tema</div>
        <div className="text-center">Peso</div>
        <div>Descripción interna</div>
        <div>Motivo contextual</div>
        <div className="text-center">Estado</div>
      </div>

      {/* Filas */}
      <ul className="divide-y divide-border">
        {temas.map((t) => (
          <FilaPrioridad
            key={t.tema}
            tema={t}
            estado={estados[t.tema] ?? 'idle'}
            onCambiar={(cambios) => {
              actualizarLocal(t.tema, cambios)
              programarGuardado(t.tema, cambios)
            }}
          />
        ))}
      </ul>

      {temas.length === 0 && (
        <div className="p-8 text-center text-sm text-muted-foreground">
          No hay temas registrados en el catálogo. Corre el seed inicial.
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Fila individual — slider de peso + inputs de descripción/motivo
   ═══════════════════════════════════════════════════════════ */

function FilaPrioridad({
  tema,
  estado,
  onCambiar,
}: {
  tema: TemaPrioridad
  estado: EstadoGuardado
  onCambiar: (
    cambios: Partial<Pick<TemaPrioridad, 'peso' | 'descripcion' | 'motivoContextual'>>,
  ) => void
}) {
  const pesoAlto = tema.peso >= 5
  const pesoMedio = tema.peso >= 3 && tema.peso < 5

  return (
    <li className="grid grid-cols-[1fr_140px_1.5fr_1.5fr_60px] gap-3 px-5 py-3">
      {/* Tema (readonly) */}
      <div className="flex items-center">
        <span className="font-mono text-xs font-medium text-foreground">
          {tema.tema}
        </span>
      </div>

      {/* Slider peso 1-10 con badge del valor */}
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="1"
          max="10"
          value={tema.peso}
          onChange={(e) => onCambiar({ peso: Number(e.target.value) })}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
        />
        <span
          className={cn(
            'flex h-6 min-w-6 items-center justify-center rounded-md px-1.5 text-xs font-bold',
            pesoAlto && 'bg-destructive/15 text-destructive',
            pesoMedio && 'bg-accent/15 text-accent',
            !pesoAlto && !pesoMedio && 'bg-muted text-muted-foreground',
          )}
        >
          {tema.peso}
        </span>
      </div>

      {/* Descripción (input) */}
      <input
        type="text"
        value={tema.descripcion ?? ''}
        onChange={(e) =>
          onCambiar({
            descripcion: e.target.value.trim() === '' ? null : e.target.value,
          })
        }
        placeholder="Descripción opcional..."
        className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />

      {/* Motivo contextual (input) */}
      <input
        type="text"
        value={tema.motivoContextual ?? ''}
        onChange={(e) =>
          onCambiar({
            motivoContextual: e.target.value.trim() === '' ? null : e.target.value,
          })
        }
        placeholder="Por qué es prioritario..."
        className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />

      {/* Estado del guardado */}
      <div className="flex items-center justify-center">
        {estado === 'saving' && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
        {estado === 'saved' && <CheckCircle2 className="h-4 w-4 text-military" />}
        {estado === 'error' && <AlertCircle className="h-4 w-4 text-destructive" />}
        {estado === 'idle' && <Save className="h-4 w-4 text-muted-foreground/30" />}
      </div>
    </li>
  )
}
