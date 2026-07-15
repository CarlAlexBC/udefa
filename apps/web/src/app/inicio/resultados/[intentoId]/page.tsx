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

type AnalisisTema = {
  tema: string
  totalReactivos: number
  puntajeDireccion: number
  coherencia: number
  contradiccionesDetectadas: number
}

type AnalisisConsistencia = {
  porTema: AnalisisTema[]
  totalContradicciones: number
  temasConInconsistencia: string[]
  perfilCoherente: boolean
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
  analisisConsistencia?: AnalisisConsistencia
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
   Selector — según si el examen es calificable o no
   ═══════════════════════════════════════════════════════════ */

function PanelResultados({ data }: { data: Resultados }) {
  if (data.examen.calificable) {
    return <PanelCalificable data={data} />
  }
  return <PanelAutoevaluacion data={data} />
}

/* ═══════════════════════════════════════════════════════════
   Panel para exámenes CALIFICABLES (Psicométrico)
   ═══════════════════════════════════════════════════════════ */

function PanelCalificable({ data }: { data: Resultados }) {
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

/* ═══════════════════════════════════════════════════════════
   Panel para exámenes NO CALIFICABLES (Personalidad, Axiológico)
   No hay aciertos/errores — se muestran métricas de consistencia,
   ritmo temporal, distribución por tema, y notas informativas.
   ═══════════════════════════════════════════════════════════ */

function PanelAutoevaluacion({ data }: { data: Resultados }) {
  const tiempoMin = Math.round(data.tiempoTotalMs / 60000)
  const fecha = new Date().toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const diagnosticos = calcularDiagnosticosAutoevaluacion(data)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Hero card — sin puntaje, con conteo de respondidos */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
          <div className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full bg-military/20 blur-3xl" />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full border border-military/40 bg-military/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military-foreground">
                {data.estado === 'COMPLETADA'
                  ? 'Autoevaluación completa'
                  : data.estado === 'TIEMPO_AGOTADO'
                  ? 'Tiempo agotado'
                  : data.estado}
              </span>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Tu perfil de {data.examen.nombre.toLowerCase().includes('personalidad') ? 'personalidad' : 'valores'}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {data.examen.nombre} · {fecha} · duración {tiempoMin} min
              </p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-semibold tracking-tight leading-none">
                {data.reactivosRespondidos}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                reactivos respondidos
              </p>
            </div>
          </div>
        </div>

        {/* Nota informativa — este examen no tiene calificación */}
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-military/30 bg-military/5 p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-military" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Este examen no se califica por aciertos
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Se analiza la coherencia de tu perfil a lo largo de todas tus respuestas. El sistema busca patrones consistentes, no respuestas correctas. Las métricas de abajo te ayudan a entender cómo respondiste.
            </p>
          </div>
        </div>

        {/* Diagnósticos accionables (fatiga, sesgos, patrones) */}
        {diagnosticos.length > 0 && (
          <section className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-4 w-1 rounded bg-accent" />
              <h2 className="text-sm font-semibold text-foreground">
                Observaciones sobre tu forma de responder
              </h2>
              <span className="text-xs text-muted-foreground">
                · {diagnosticos.length} {diagnosticos.length === 1 ? 'observación' : 'observaciones'}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {diagnosticos.map((d) => (
                <DiagnosticoCard key={d.titulo} {...d} />
              ))}
            </div>
          </section>
        )}

        {/* Métricas temporales — SÍ aplican a autoevaluación */}
        <section className="mt-8 rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              Cómo administraste el tiempo
            </h3>
            <TendenciaBadge tendencia={data.metricasTemporales.tendencia} />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <MetricStat
              label="Tiempo promedio"
              value={`${Math.round(data.metricasTemporales.tiempoPromedioReactivoMs / 1000)}s`}
              sub="por reactivo"
            />
            <MetricStat
              label="Consistencia de ritmo"
              value={data.metricasTemporales.coeficienteVariacion < 0.5 ? 'Alta' : data.metricasTemporales.coeficienteVariacion < 1 ? 'Media' : 'Baja'}
              sub={`CV ${data.metricasTemporales.coeficienteVariacion}`}
            />
            <MetricStat
              label="Duración total"
              value={`${tiempoMin} min`}
              sub={`${data.reactivosRespondidos} reactivos`}
            />
          </div>
          {data.metricasTemporales.detalleFatiga && (
            <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
              Primera mitad:{' '}
              <span className="font-semibold text-foreground">
                {Math.round(data.metricasTemporales.detalleFatiga.tiempoPromedioPrimeraMitadMs / 1000)}s
              </span>
              {' · '}
              Segunda mitad:{' '}
              <span className="font-semibold text-foreground">
                {Math.round(data.metricasTemporales.detalleFatiga.tiempoPromedioSegundaMitadMs / 1000)}s
              </span>
              {data.metricasTemporales.detalleFatiga.diferenciaPorcentual !== 0 && (
                <>
                  {' · '}
                  <span className={data.metricasTemporales.detalleFatiga.diferenciaPorcentual < 0 ? 'text-destructive font-semibold' : 'text-military font-semibold'}>
                    {data.metricasTemporales.detalleFatiga.diferenciaPorcentual > 0 ? '+' : ''}
                    {data.metricasTemporales.detalleFatiga.diferenciaPorcentual}%
                  </span>
                </>
              )}
            </div>
          )}
        </section>

        {/* Análisis de consistencia por tema (usa polaridad de los reactivos) */}
        {data.analisisConsistencia && data.analisisConsistencia.porTema.length > 0 && (
          <section className="mt-6 rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Consistencia por tema
              </h3>
              <span className={cn(
                'text-xs font-semibold uppercase tracking-widest',
                data.analisisConsistencia.perfilCoherente ? 'text-military' : 'text-destructive'
              )}>
                {data.analisisConsistencia.perfilCoherente
                  ? 'Perfil coherente'
                  : `${data.analisisConsistencia.temasConInconsistencia.length} temas con inconsistencia`}
              </span>
            </div>
            <p className="mb-4 text-xs text-muted-foreground">
              Este análisis cruza tus respuestas dentro de cada tema considerando la polaridad de cada reactivo. Un tema con baja coherencia indica que respondiste en direcciones opuestas a preguntas equivalentes.
            </p>
            <div className="flex flex-col gap-2">
              {data.analisisConsistencia.porTema.map((t) => (
                <TemaConsistenciaRow key={t.tema} analisis={t} />
              ))}
            </div>
            {data.analisisConsistencia.totalContradicciones > 0 && (
              <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                Total de pares contradictorios detectados:{' '}
                <span className="font-semibold text-destructive">
                  {data.analisisConsistencia.totalContradicciones}
                </span>
              </div>
            )}
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
            href={`/inicio/simulador/${data.examen.id}`}
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

/* Diagnósticos específicos para autoevaluación — usan análisis de consistencia
   (polaridad + tema) además de las métricas temporales. */
function calcularDiagnosticosAutoevaluacion(data: Resultados): Diagnostico[] {
  const out: Diagnostico[] = []

  // ─── Prioridad 1: Contradicciones internas (usa polaridad + tema) ───

  if (data.analisisConsistencia && data.analisisConsistencia.totalContradicciones > 5) {
    out.push({
      severidad: 'atencion',
      titulo: `Se detectaron ${data.analisisConsistencia.totalContradicciones} pares de respuestas contradictorias.`,
      descripcion:
        'Respondiste en direcciones opuestas a reactivos que apuntan al mismo tema. El sistema lo lee como perfil inestable. Revisa qué temas te generaron más duda y practica manteniendo criterio.',
    })
  }

  if (data.analisisConsistencia && data.analisisConsistencia.temasConInconsistencia.length > 0) {
    const temasStr = data.analisisConsistencia.temasConInconsistencia
      .slice(0, 3)
      .map(t => t.replace(/_/g, ' '))
      .join(', ')
    out.push({
      severidad: 'revisar',
      titulo: `${data.analisisConsistencia.temasConInconsistencia.length} temas con inconsistencia detectada.`,
      descripcion: `Temas más críticos: ${temasStr}${data.analisisConsistencia.temasConInconsistencia.length > 3 ? ', y otros' : ''}. Estos temas necesitan que definas mejor tu postura antes del examen real.`,
    })
  }

  // ─── Prioridad 2: Métricas temporales ───

  if (data.metricasTemporales.patronFatigaDetectado && data.metricasTemporales.detalleFatiga) {
    const pct = Math.abs(data.metricasTemporales.detalleFatiga.diferenciaPorcentual)
    out.push({
      severidad: 'atencion',
      titulo: `Aceleraste tu ritmo un ${pct}% en la segunda mitad.`,
      descripcion:
        'En autoevaluación, acelerar demasiado puede llevar a respuestas menos reflexivas. Idealmente el ritmo debe mantenerse parejo del principio al fin para preservar coherencia.',
    })
  }

  if (data.metricasTemporales.coeficienteVariacion >= 1) {
    out.push({
      severidad: 'revisar',
      titulo: 'Tu ritmo entre reactivos fue muy variable.',
      descripcion: `Un coeficiente de variación de ${data.metricasTemporales.coeficienteVariacion} indica que algunos reactivos te tomaron mucho más que otros. Considera si te trabaste con temas específicos.`,
    })
  }

  if (data.metricasTemporales.tiempoPromedioReactivoMs < 3000 && data.reactivosRespondidos > 20) {
    out.push({
      severidad: 'atencion',
      titulo: `Tiempo promedio de solo ${Math.round(data.metricasTemporales.tiempoPromedioReactivoMs / 1000)} segundos por reactivo.`,
      descripcion: 'Un ritmo muy rápido puede indicar respuestas automáticas. En autoevaluación esto genera patrones poco creíbles. Considera responder con más pausa reflexiva.',
    })
  }

  // ─── Prioridad 3: Fortalezas ───

  if (data.analisisConsistencia && data.analisisConsistencia.perfilCoherente) {
    out.push({
      severidad: 'fortaleza',
      titulo: 'Perfil coherente en todos los temas evaluados.',
      descripcion: 'No se detectaron temas con inconsistencia notable. Tus respuestas mantuvieron una dirección estable dentro de cada área.',
    })
  }

  if (data.metricasTemporales.tendencia === 'estable' && data.metricasTemporales.coeficienteVariacion < 0.5) {
    out.push({
      severidad: 'fortaleza',
      titulo: 'Ritmo consistente a lo largo del examen.',
      descripcion: 'Mantuviste una velocidad estable y pareja. Es indicativo de reflexión sostenida, lo cual mejora la coherencia del perfil.',
    })
  }

  return out
}

/* Sub-componente: fila de análisis de consistencia por tema.
   Muestra el nombre del tema, barra de coherencia y contradicciones detectadas. */
function TemaConsistenciaRow({ analisis }: { analisis: AnalisisTema }) {
  const critico = analisis.coherencia < 60
  const alto = analisis.coherencia >= 80
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className={cn('text-xs font-medium truncate', critico ? 'text-destructive' : 'text-foreground')}>
            {analisis.tema.replace(/_/g, ' ')}
          </p>
          <span className="text-[10px] text-muted-foreground shrink-0">
            {analisis.totalReactivos} reactivos
          </span>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-background rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full transition-all',
                critico ? 'bg-destructive' : alto ? 'bg-military' : 'bg-accent'
              )}
              style={{ width: `${analisis.coherencia}%` }}
            />
          </div>
          <span className={cn(
            'text-[10px] font-semibold shrink-0 min-w-8 text-right',
            critico ? 'text-destructive' : alto ? 'text-military' : 'text-muted-foreground'
          )}>
            {analisis.coherencia}%
          </span>
        </div>
        {analisis.contradiccionesDetectadas > 0 && (
          <p className="mt-1 text-[10px] text-destructive">
            {analisis.contradiccionesDetectadas} {analisis.contradiccionesDetectadas === 1 ? 'contradicción' : 'contradicciones'} detectadas
          </p>
        )}
      </div>
    </div>
  )
}
