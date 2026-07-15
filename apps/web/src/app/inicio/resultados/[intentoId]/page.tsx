'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type PorBloque = {
  bloqueId: number
  nombre: string
  respondidos: number
  aciertos: number | null
  porcentaje: number | null
  tiempoMs: number
}

type PorTema = {
  tema: string
  respondidos: number
  aciertos: number | null
  porcentaje: number | null
  tiempoMs: number
}

type MetricasTemporales = {
  tiempoPorReactivoMs: number[]
  tiempoPromedioReactivoMs: number
  tiempoMedianoReactivoMs: number
  coeficienteVariacion: number
  tendencia: 'acelerando' | 'desacelerando' | 'estable'
  patronFatigaDetectado: boolean
  detalleFatiga: {
    tiempoPromedioPrimeraMitadMs: number
    tiempoPromedioSegundaMitadMs: number
    diferenciaPorcentual: number
  } | null
}

type Resultados = {
  intentoId: number
  examen: { id: number; nombre: string; calificable: boolean }
  estado: 'EN_PROGRESO' | 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA'
  tiempoTotalMs: number
  reactivosRespondidos: number
  aciertos: number | null
  porcentajeAciertos: number | null
  porBloque: PorBloque[]
  porTema: PorTema[]
  metricasTemporales: MetricasTemporales
}

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function ResultadosPage({
  params,
}: {
  params: Promise<{ intentoId: string }>
}) {
  const { intentoId } = use(params)
  const [data, setData] = useState<Resultados | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Resultados>(`/intentos/${intentoId}/resultados`)
      .then(setData)
      .catch((err) => setError((err as Error).message))
  }, [intentoId])

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
          <p className="text-sm">Cargando tu perfil...</p>
        </div>
      </main>
    )
  }

  return <PanelResultados data={data} />
}

/* ═══════════════════════════════════════════════════════════
   Panel principal
   ═══════════════════════════════════════════════════════════ */

function PanelResultados({ data }: { data: Resultados }) {
  const diagnosticos = calcularDiagnosticos(data)
  const tiempoMin = Math.round(data.tiempoTotalMs / 60000)
  const fecha = new Date().toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Hero card oscuro con puntaje agregado */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
          <div className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full border border-military/40 bg-military/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military-foreground">
                {data.estado === 'COMPLETADA'
                  ? 'Sesión completa'
                  : data.estado === 'TIEMPO_AGOTADO'
                  ? 'Tiempo agotado'
                  : data.estado}
              </span>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Tu perfil psicológico
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {data.examen.nombre} · {fecha} · duración {tiempoMin} min
              </p>
            </div>
            {data.porcentajeAciertos !== null && (
              <div className="text-right">
                <p className="text-5xl font-semibold tracking-tight leading-none">
                  {data.porcentajeAciertos}
                  <span className="text-xl text-muted-foreground">%</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  {data.aciertos} de {data.reactivosRespondidos} correctas
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Diagnósticos accionables */}
        {diagnosticos.length > 0 && (
          <section className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-4 w-1 rounded bg-accent" />
              <h2 className="text-sm font-semibold text-foreground">
                Diagnósticos accionables
              </h2>
              <span className="text-xs text-muted-foreground">
                · {diagnosticos.length} {diagnosticos.length === 1 ? 'patrón detectado' : 'patrones detectados'}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {diagnosticos.map((d) => (
                <DiagnosticoCard key={d.titulo} {...d} />
              ))}
            </div>
          </section>
        )}

        {/* Grid: bloques + tiempo */}
        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Desglose por bloque */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Desempeño por bloque
              </h3>
              {data.porcentajeAciertos !== null && (
                <span className="rounded bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                  {data.aciertos}/{data.reactivosRespondidos}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {data.porBloque.map((b) => (
                <BloqueRow key={b.bloqueId} bloque={b} />
              ))}
              {data.porBloque.length === 0 && (
                <p className="text-xs text-muted-foreground">
                  Sin datos por bloque.
                </p>
              )}
            </div>
          </div>

          {/* Métricas temporales */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Ritmo temporal
              </h3>
              <TendenciaBadge tendencia={data.metricasTemporales.tendencia} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricStat
                label="Tiempo promedio"
                value={`${Math.round(data.metricasTemporales.tiempoPromedioReactivoMs / 1000)}s`}
                sub="por reactivo"
              />
              <MetricStat
                label="Consistencia"
                value={data.metricasTemporales.coeficienteVariacion < 0.5 ? 'Alta' : 'Baja'}
                sub={`CV ${data.metricasTemporales.coeficienteVariacion}`}
              />
            </div>
            {data.metricasTemporales.detalleFatiga && (
              <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                Primera mitad:{' '}
                <span className="font-semibold text-foreground">
                  {Math.round(
                    data.metricasTemporales.detalleFatiga
                      .tiempoPromedioPrimeraMitadMs / 1000,
                  )}
                  s
                </span>
                {' · '}
                Segunda mitad:{' '}
                <span className="font-semibold text-foreground">
                  {Math.round(
                    data.metricasTemporales.detalleFatiga
                      .tiempoPromedioSegundaMitadMs / 1000,
                  )}
                  s
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Desglose por tema (si hay más de 1) */}
        {data.porTema.length > 1 && (
          <section className="mt-6 rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Desempeño por tema
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {data.porTema.map((t) => (
                <TemaCard key={t.tema} tema={t} />
              ))}
            </div>
          </section>
        )}

        {/* CTA volver */}
        <div className="mt-10 flex justify-between border-t border-border pt-6">
          <Link
            href="/inicio"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            ← Volver a inicio
          </Link>
          <Link
            href="/inicio/simulador"
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Repetir simulador
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

function DiagnosticoCard({
  severidad,
  titulo,
  descripcion,
}: {
  severidad: 'atencion' | 'revisar' | 'fortaleza'
  titulo: string
  descripcion: string
}) {
  const config = {
    atencion: {
      borderColor: 'border-l-destructive',
      badgeBg: 'bg-destructive/10',
      badgeText: 'text-destructive',
      label: 'Atención',
      icon: AlertCircle,
    },
    revisar: {
      borderColor: 'border-l-accent',
      badgeBg: 'bg-accent/10',
      badgeText: 'text-accent',
      label: 'Revisar',
      icon: Sparkles,
    },
    fortaleza: {
      borderColor: 'border-l-military',
      badgeBg: 'bg-military/10',
      badgeText: 'text-military',
      label: 'Fortaleza',
      icon: CheckCircle2,
    },
  }[severidad]

  const Icon = config.icon

  return (
    <div
      className={cn(
        'rounded-lg border border-border border-l-[3px] bg-card p-4',
        config.borderColor,
      )}
    >
      <div className="mb-1 flex items-center gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-bold uppercase tracking-widest',
            config.badgeBg,
            config.badgeText,
          )}
        >
          <Icon className="h-3 w-3" />
          {config.label}
        </span>
      </div>
      <p className="text-sm font-semibold text-foreground">{titulo}</p>
      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
        {descripcion}
      </p>
    </div>
  )
}

function BloqueRow({ bloque }: { bloque: PorBloque }) {
  const pct = bloque.porcentaje ?? 0
  const rojo = pct < 50
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span
          className={cn(
            'font-medium',
            rojo ? 'text-destructive' : 'text-foreground',
          )}
        >
          {bloque.nombre}
        </span>
        <span className={cn(rojo ? 'text-destructive font-semibold' : 'text-muted-foreground')}>
          {bloque.aciertos !== null
            ? `${bloque.aciertos}/${bloque.respondidos}`
            : `${bloque.respondidos} respondidos`}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn('h-full rounded-full', rojo ? 'bg-destructive' : 'bg-accent')}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function TemaCard({ tema }: { tema: PorTema }) {
  const pct = tema.porcentaje ?? 0
  const color =
    pct >= 80 ? 'text-military' : pct >= 60 ? 'text-accent' : 'text-destructive'
  return (
    <div className="rounded-lg bg-muted p-3 text-center">
      <p className={cn('text-xl font-semibold', color)}>{pct}%</p>
      <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
        {tema.tema}
      </p>
    </div>
  )
}

function TendenciaBadge({ tendencia }: { tendencia: MetricasTemporales['tendencia'] }) {
  const config = {
    acelerando: { icon: TrendingUp, color: 'text-destructive', label: 'Acelerando' },
    desacelerando: { icon: TrendingDown, color: 'text-accent', label: 'Desacelerando' },
    estable: { icon: CheckCircle2, color: 'text-military', label: 'Estable' },
  }[tendencia]
  const Icon = config.icon
  return (
    <span className={cn('flex items-center gap-1 text-xs font-semibold', config.color)}>
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  )
}

function MetricStat({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="rounded-lg bg-muted p-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
      <p className="mt-0.5 text-[10px] text-muted-foreground">{sub}</p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Lógica de diagnósticos — deriva mensajes accionables
   a partir de los datos crudos del backend.
   ═══════════════════════════════════════════════════════════ */

type Diagnostico = {
  severidad: 'atencion' | 'revisar' | 'fortaleza'
  titulo: string
  descripcion: string
}

function calcularDiagnosticos(data: Resultados): Diagnostico[] {
  const out: Diagnostico[] = []

  // Fatiga detectada
  if (data.metricasTemporales.patronFatigaDetectado && data.metricasTemporales.detalleFatiga) {
    const pct = Math.abs(data.metricasTemporales.detalleFatiga.diferenciaPorcentual)
    out.push({
      severidad: 'atencion',
      titulo: `Bajaste el ritmo un ${pct}% en la segunda mitad.`,
      descripcion:
        'Puede indicar fatiga cognitiva o dudas acumuladas. Considera practicar con temporizador para acostumbrar la resistencia.',
    })
  }

  // Bloques con bajo desempeño
  const bloquesDebiles = data.porBloque.filter(
    (b) => b.porcentaje !== null && b.porcentaje < 50,
  )
  for (const b of bloquesDebiles) {
    out.push({
      severidad: 'revisar',
      titulo: `${b.nombre}: ${b.porcentaje}% de aciertos.`,
      descripcion: `Solo ${b.aciertos} de ${b.respondidos} correctas. Este bloque necesita práctica enfocada.`,
    })
  }

  // Fortalezas
  if (data.porcentajeAciertos !== null && data.porcentajeAciertos >= 80) {
    out.push({
      severidad: 'fortaleza',
      titulo: 'Excelente desempeño global.',
      descripcion: `Superaste el 80% de aciertos. Sigue manteniendo el ritmo y consolida los bloques más débiles.`,
    })
  }

  return out
}
