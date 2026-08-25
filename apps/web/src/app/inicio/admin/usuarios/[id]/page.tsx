'use client'

import { useEffect, useState } from 'react'
import { use } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { ArrowLeft, Loader2 } from 'lucide-react'

type Progreso = {
  usuario: {
    id: number
    nombre: string
    email: string
    rol: string
    nivelAcceso: string
    estado: string
    createdAt: string
    plantel: string | null
    accesos: Array<{
      modulo: string
      ciclo: string
      expiraEn: string | null
      origen: string
      otorgadoEn: string
    }>
  }
  simulacros: Array<{
    id: number
    examen: string
    tipo: string
    calificable: boolean
    fecha: string
    estado: string
    minutos: number | null
    contestadas: number
    aciertos: number
    porcentaje: number | null
  }>
  practica: { total: number; aciertos: number; porcentaje: number | null }
  constancia: {
    diasActivos: number
    ultimoDia: string | null
    diasUltimos30: number
  }
  repasos: { total: number; pendientes: number }
  materias: Array<{
    materia: string
    total: number
    fallos: number
    aciertos: number
    tasaError: number
    suficiente: boolean
  }>
  minimoParaJuzgar: number
}

/**
 * Semáforo por materia. Mismo vocabulario que la Analítica del panel —formal, no
 * coloquial— para que las dos pantallas se lean como una sola herramienta.
 */
function nivel(tasaError: number) {
  if (tasaError >= 50)
    return { texto: 'Requiere refuerzo', color: '#D9603F' }
  if (tasaError >= 25) return { texto: 'En proceso', color: '#E0B75C' }
  return { texto: 'Dominado', color: '#9FB03F' }
}

const fecha = (v: string) =>
  new Date(v).toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  })

/**
 * Expediente de un aspirante.
 *
 * Es la pantalla para ATENDER A UNA PERSONA, no para arreglar el banco: la
 * Analítica dice qué reactivo falla todo el mundo; ésta dice qué le falla a
 * quien te compró.
 */
export default function ProgresoUsuarioPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [data, setData] = useState<Progreso | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Progreso>(`/admin/usuarios/${id}/progreso`)
      .then(setData)
      .catch((e) => setError((e as Error).message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Cargando expediente…
      </div>
    )
  }
  if (error || !data) {
    return <p className="text-sm text-destructive">{error || 'Sin datos.'}</p>
  }

  const u = data.usuario
  const conNota = data.simulacros.filter((s) => s.porcentaje !== null)

  return (
    <div>
      <Link
        href="/inicio/admin/usuarios"
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        Volver a Usuarios
      </Link>

      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        Expediente
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-foreground">{u.nombre}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {u.email}
        {u.plantel ? ` · ${u.plantel}` : ''} · Registrado el {fecha(u.createdAt)}
      </p>

      {/* Cifras de cabecera */}
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          {
            etiqueta: 'Simulacros',
            valor: String(conNota.length),
            pie: conNota.length > 0 ? 'calificados' : 'aún ninguno',
          },
          {
            etiqueta: 'Días activos',
            valor: String(data.constancia.diasActivos),
            pie: `${data.constancia.diasUltimos30} en los últimos 30`,
          },
          {
            etiqueta: 'Práctica',
            valor:
              data.practica.porcentaje !== null
                ? `${data.practica.porcentaje}%`
                : '—',
            pie: `${data.practica.total} respuestas`,
          },
          {
            etiqueta: 'Repaso pendiente',
            valor: String(data.repasos.pendientes),
            pie: `de ${data.repasos.total} en cola`,
          },
        ].map((c) => (
          <div key={c.etiqueta} className="rounded-xl border border-border bg-card p-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {c.etiqueta}
            </p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
              {c.valor}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{c.pie}</p>
          </div>
        ))}
      </div>

      {/* Acceso */}
      <h2 className="mb-2 mt-7 text-sm font-semibold text-foreground">Acceso</h2>
      <div className="rounded-xl border border-border bg-card p-4">
        {u.accesos.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Sin acceso otorgado. Sólo ve la muestra gratuita.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {u.accesos.map((a, i) => (
              <div
                key={i}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/40 pb-2 text-sm last:border-b-0 last:pb-0"
              >
                <span className="text-foreground">
                  {a.modulo} · convocatoria {a.ciclo}
                </span>
                <span className="text-xs text-muted-foreground">
                  {a.expiraEn ? `Vence el ${fecha(a.expiraEn)}` : 'Sin caducidad'}{' '}
                  · {a.origen}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Semáforo por materia — lo que se le refuerza */}
      <h2 className="mb-1 mt-7 text-sm font-semibold text-foreground">
        Dónde está parado, por materia
      </h2>
      <p className="mb-2 text-xs text-muted-foreground">
        Cruza sus respuestas de examen con las de práctica. Se necesitan al menos{' '}
        {data.minimoParaJuzgar} respuestas para opinar de una materia.
      </p>
      <div className="rounded-xl border border-border bg-card p-4">
        {data.materias.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Todavía no ha respondido nada calificable.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {data.materias.map((m) => {
              const n = nivel(m.tasaError)
              return (
                <div key={m.materia}>
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm text-foreground">{m.materia}</span>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {m.aciertos} de {m.total} correctas
                      {m.suficiente ? (
                        <span className="ml-2" style={{ color: n.color }}>
                          {n.texto}
                        </span>
                      ) : (
                        <span className="ml-2 text-muted-foreground">
                          Pocos datos
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${100 - m.tasaError}%`,
                        backgroundColor: m.suficiente ? n.color : '#5F5C55',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Historial de simulacros */}
      <h2 className="mb-2 mt-7 text-sm font-semibold text-foreground">
        Sus simulacros
      </h2>
      <div className="rounded-xl border border-border bg-card p-4">
        {data.simulacros.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No ha presentado ninguno.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {data.simulacros.map((s) => (
              <div
                key={s.id}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/40 pb-2 text-sm last:border-b-0 last:pb-0"
              >
                <span className="min-w-0 text-foreground">
                  {s.examen}
                  {s.estado !== 'FINALIZADO' && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      sin terminar
                    </span>
                  )}
                </span>
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {s.porcentaje !== null ? (
                    <span
                      className="font-semibold"
                      style={{ color: nivel(100 - s.porcentaje).color }}
                    >
                      {s.porcentaje}%
                    </span>
                  ) : (
                    'sin calificación'
                  )}{' '}
                  · {s.contestadas} contestadas
                  {s.minutos !== null ? ` · ${s.minutos} min` : ''} ·{' '}
                  {fecha(s.fecha)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Esto es información personal de un aspirante. Sirve para orientar tu
        material y para escribirle con conocimiento — no para citarle su
        calificación exacta.
      </p>
    </div>
  )
}
