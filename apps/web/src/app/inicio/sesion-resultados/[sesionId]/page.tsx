'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  AlertCircle,
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  Loader2,
  Scale,
  UserCircle,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos — coinciden con GET /sesiones-completas/:id/resultados
   ═══════════════════════════════════════════════════════════ */

type ResultadoIntento = {
  intentoId: number
  examen: { id: number; nombre: string; calificable: boolean }
  estado: string
  tiempoTotalMs: number
  reactivosRespondidos: number
  aciertos: number | null
  porcentajeAciertos: number | null
  analisisConsistencia?: {
    totalContradicciones: number
    temasConInconsistencia: string[]
    perfilCoherente: boolean
  }
}

type Sesion = {
  sesionId: number
  plantel: { id: number; nombre: string }
  estado: string
  inicioAt: string
  finAt: string | null
  intentos: ResultadoIntento[]
}

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function SesionResultadosPage({
  params,
}: {
  params: Promise<{ sesionId: string }>
}) {
  const { sesionId } = use(params)
  const [data, setData] = useState<Sesion | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Sesion>(`/sesiones-completas/${sesionId}/resultados`)
      .then(setData)
      .catch((err) => setError((err as Error).message))
  }, [sesionId])

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-6">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p className="font-semibold">No pudimos cargar los resultados</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <Link
            href="/inicio"
            className={cn(buttonVariants({ variant: 'outline' }), 'mt-4')}
          >
            Volver a inicio
          </Link>
        </div>
      </main>
    )
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-sm">Cargando resultados agregados...</p>
        </div>
      </main>
    )
  }

  const duracionMin = data.finAt
    ? Math.round((new Date(data.finAt).getTime() - new Date(data.inicioAt).getTime()) / 60000)
    : null
  const fecha = new Date(data.inicioAt).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const totalContradicciones = data.intentos.reduce(
    (sum, i) => sum + (i.analisisConsistencia?.totalContradicciones ?? 0),
    0,
  )
  const perfilGlobalCoherente = data.intentos
    .filter((i) => !i.examen.calificable)
    .every((i) => i.analisisConsistencia?.perfilCoherente ?? true)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Hero de sesión completa */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
          <div className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-1 rounded-full border border-military/40 bg-military/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military-foreground">
              {data.estado === 'COMPLETADA' ? 'Sesión completa' : data.estado}
            </span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Resultado global de la sesión
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {data.plantel.nombre} · {fecha}
              {duracionMin !== null && ` · duración total ${duracionMin} min`}
            </p>
          </div>
        </div>

        {/* Resumen ejecutivo — señales rápidas */}
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ResumenCard
            titulo="Fases completadas"
            valor={`${data.intentos.filter((i) => i.estado === 'COMPLETADA').length} / ${data.intentos.length}`}
            sub={data.intentos.length === 3 ? 'Las 3 fases del examen' : 'Sesión parcial'}
            icono={<CheckCircle2 className="h-4 w-4 text-military" />}
          />
          <ResumenCard
            titulo="Contradicciones detectadas"
            valor={totalContradicciones.toString()}
            sub="pares en direcciones opuestas"
            icono={<AlertCircle className={cn('h-4 w-4', totalContradicciones > 0 ? 'text-destructive' : 'text-military')} />}
            critico={totalContradicciones > 5}
          />
          <ResumenCard
            titulo="Coherencia global"
            valor={perfilGlobalCoherente ? 'Alta' : 'Requiere revisión'}
            sub="perfil de autoevaluación"
            icono={<Brain className={cn('h-4 w-4', perfilGlobalCoherente ? 'text-military' : 'text-destructive')} />}
            critico={!perfilGlobalCoherente}
          />
        </section>

        {/* Resumen por fase — 3 cards con acceso al detalle */}
        <section className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-4 w-1 rounded bg-accent" />
            <h2 className="text-sm font-semibold text-foreground">
              Resumen por fase
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.intentos.map((intento) => (
              <FaseCard key={intento.intentoId} intento={intento} />
            ))}
          </div>
        </section>

        {/* CTA volver */}
        <div className="mt-10 flex justify-between border-t border-border pt-6">
          <Link
            href="/inicio"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            ← Volver a inicio
          </Link>
          <Link
            href="/inicio/sesion"
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Repetir sesión completa
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes
   ═══════════════════════════════════════════════════════════ */

function ResumenCard({
  titulo,
  valor,
  sub,
  icono,
  critico,
}: {
  titulo: string
  valor: string
  sub: string
  icono: React.ReactNode
  critico?: boolean
}) {
  return (
    <div className={cn(
      'rounded-xl border bg-card p-5',
      critico ? 'border-destructive/30' : 'border-border'
    )}>
      <div className="mb-2 flex items-center gap-2">
        {icono}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {titulo}
        </p>
      </div>
      <p className={cn('text-2xl font-semibold tracking-tight', critico ? 'text-destructive' : 'text-foreground')}>
        {valor}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  )
}

function FaseCard({ intento }: { intento: ResultadoIntento }) {
  const iconoExamen = intento.examen.id === 1
    ? <Brain className="h-4 w-4 text-accent" />
    : intento.examen.id === 2
    ? <UserCircle className="h-4 w-4 text-accent" />
    : <Scale className="h-4 w-4 text-accent" />

  const tiempoMin = Math.round(intento.tiempoTotalMs / 60000)

  return (
    <Link
      href={`/inicio/resultados/${intento.intentoId}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
          {iconoExamen}
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
            Fase {intento.examen.id}
          </p>
          <p className="text-sm font-semibold text-foreground">
            {intento.examen.nombre}
          </p>
        </div>
      </div>

      {/* Métrica principal según tipo */}
      {intento.examen.calificable && intento.porcentajeAciertos !== null ? (
        <>
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            {intento.porcentajeAciertos}
            <span className="text-sm text-muted-foreground">%</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {intento.aciertos} de {intento.reactivosRespondidos} correctas
          </p>
        </>
      ) : intento.analisisConsistencia ? (
        <>
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            {intento.analisisConsistencia.perfilCoherente ? 'Coherente' : 'Revisar'}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {intento.analisisConsistencia.totalContradicciones} contradicciones ·{' '}
            {intento.analisisConsistencia.temasConInconsistencia.length} temas críticos
          </p>
        </>
      ) : (
        <p className="text-xs text-muted-foreground">Sin analizar</p>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
        <span className="flex items-center gap-1 text-muted-foreground">
          <Clock className="h-3 w-3" />
          {tiempoMin} min · {intento.reactivosRespondidos} reactivos
        </span>
        <span className="flex items-center gap-1 font-semibold text-accent transition-transform group-hover:translate-x-0.5">
          Ver detalle
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}
