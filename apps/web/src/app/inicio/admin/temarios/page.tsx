'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle2, Loader2, Save } from 'lucide-react'

type Materia = {
  id: number
  nombre: string
  numPreguntas: number
  orden: number
}

type Temario = {
  id: number
  anio: number
  estado: string
  plantel: { id: number; nombre: string }
  materias: Materia[]
}

type EstadoGuardado = 'idle' | 'saving' | 'saved' | 'error'

const DEBOUNCE_MS = 800
const TOTAL_OBJETIVO = 100

/**
 * Panel de Reparto del examen cultural: cuántos reactivos aporta cada materia al
 * examen de 100. Auto-save por materia (PATCH /temarios/materias/:id) 800 ms
 * después de dejar de escribir; se aplica al próximo examen armado. El total NO
 * tiene que ser 100 exacto — se avisa si no cuadra, pero no bloquea (decisión de
 * Carlo). El backend exige @Roles('admin'); el layout admin ya gatea el acceso.
 */
export default function AdminTemariosPage() {
  const [temarios, setTemarios] = useState<Temario[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  // Estado de guardado por materia id.
  const [estados, setEstados] = useState<Record<number, EstadoGuardado>>({})
  // Timers de debounce por materia id.
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({})

  useEffect(() => {
    apiFetch<Temario[]>('/temarios')
      .then((data) => {
        setTemarios(data)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  /** Debounce del PATCH — no dispara en cada tecla. */
  const programarGuardado = useCallback((materiaId: number, numPreguntas: number) => {
    if (timers.current[materiaId]) clearTimeout(timers.current[materiaId])
    setEstados((prev) => ({ ...prev, [materiaId]: 'idle' }))

    timers.current[materiaId] = setTimeout(async () => {
      setEstados((prev) => ({ ...prev, [materiaId]: 'saving' }))
      try {
        await apiFetch(`/temarios/materias/${materiaId}`, {
          method: 'PATCH',
          body: { numPreguntas },
        })
        setEstados((prev) => ({ ...prev, [materiaId]: 'saved' }))
        setTimeout(() => {
          setEstados((prev) => ({ ...prev, [materiaId]: 'idle' }))
        }, 2000)
      } catch (err) {
        console.error(err)
        setEstados((prev) => ({ ...prev, [materiaId]: 'error' }))
      }
    }, DEBOUNCE_MS)
  }, [])

  const cambiarNum = (temarioId: number, materiaId: number, valor: number) => {
    // Optimista: actualiza local para que el total vivo se recalcule al instante.
    setTemarios((prev) =>
      prev.map((t) =>
        t.id !== temarioId
          ? t
          : {
              ...t,
              materias: t.materias.map((m) =>
                m.id === materiaId ? { ...m, numPreguntas: valor } : m,
              ),
            },
      ),
    )
    programarGuardado(materiaId, valor)
  }

  if (cargando) {
    return (
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-sm">Cargando temarios...</p>
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
          Administración · Examen cultural
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Reparto de reactivos
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Cuántas preguntas aporta cada materia al examen de {TOTAL_OBJETIVO}. Los cambios
          se guardan solos {DEBOUNCE_MS} ms después de dejar de escribir y se aplican al
          próximo examen armado. El total no tiene que ser {TOTAL_OBJETIVO} exacto: se te
          avisa si no cuadra, pero no bloquea.
        </p>
      </div>

      {temarios.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
          No hay temarios sembrados. Corre{' '}
          <code className="rounded bg-muted px-1">scripts/seed-temarios.ts</code>.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {temarios.map((t) => {
            const total = t.materias.reduce((a, m) => a + m.numPreguntas, 0)
            const cuadra = total === TOTAL_OBJETIVO
            return (
              <article
                key={t.id}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <header className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base font-semibold text-foreground">
                      {t.plantel.nombre}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {t.anio} · {t.estado.toLowerCase()}
                    </p>
                  </div>
                  <div
                    className={cn(
                      'flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold tabular-nums',
                      cuadra
                        ? 'border-military/40 bg-military/10 text-military'
                        : 'border-accent/40 bg-accent/10 text-accent',
                    )}
                    title={cuadra ? 'El reparto cuadra en 100' : 'El total no suma 100'}
                  >
                    {cuadra ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    {total} / {TOTAL_OBJETIVO}
                  </div>
                </header>

                <ul className="divide-y divide-border">
                  {t.materias.map((m) => (
                    <FilaMateria
                      key={m.id}
                      materia={m}
                      estado={estados[m.id] ?? 'idle'}
                      onCambiar={(v) => cambiarNum(t.id, m.id, v)}
                    />
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Fila de materia — nombre + input del nº de preguntas + estado
   ═══════════════════════════════════════════════════════════ */

function FilaMateria({
  materia,
  estado,
  onCambiar,
}: {
  materia: Materia
  estado: EstadoGuardado
  onCambiar: (numPreguntas: number) => void
}) {
  return (
    <li className="flex items-center gap-3 py-2.5">
      <span className="flex-1 text-sm text-foreground">{materia.nombre}</span>

      <input
        type="number"
        min={0}
        value={materia.numPreguntas}
        onChange={(e) =>
          onCambiar(Math.max(0, Math.floor(Number(e.target.value) || 0)))
        }
        className="w-20 rounded-md border border-border bg-background px-3 py-1.5 text-right text-sm tabular-nums text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <span className="w-16 text-xs text-muted-foreground">reactivos</span>

      <div className="flex w-5 justify-center">
        {estado === 'saving' && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
        {estado === 'saved' && <CheckCircle2 className="h-4 w-4 text-military" />}
        {estado === 'error' && <AlertCircle className="h-4 w-4 text-destructive" />}
        {estado === 'idle' && <Save className="h-4 w-4 text-muted-foreground/30" />}
      </div>
    </li>
  )
}
