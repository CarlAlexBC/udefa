'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Loader2,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import {
  type GuiaLink,
  urlDeLink,
  linkParaTema,
  linkParaBloque,
  LINKS_FIJOS,
} from '@/lib/diagnostico-links'
import { GraficosPsicometrico } from '@/components/resultados/GraficosPsicometrico'
import { GraficosAutoevaluacion } from '@/components/resultados/GraficosAutoevaluacion'
import {
  AlertaCriticaCard,
  type SenalesCriticas,
} from '@/components/resultados/AlertaCriticaCard'

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

type SesgoRespuesta = {
  porcentajeSi: number
  porcentajeNo: number
  indiceDeseabilidad: number
  tieneSesgoAquiescencia: boolean
  tieneSesgoNegativismo: boolean
  perfilIdealizado: boolean
}

type ScoreCoincidenciaIdeal = {
  score: number
  promedio: number
  etiqueta: 'alta' | 'media' | 'baja'
}

type AnalisisConsistencia = {
  porTema: AnalisisTema[]
  totalContradicciones: number
  temasConInconsistencia: string[]
  perfilCoherente: boolean
  sesgoRespuesta?: SesgoRespuesta | null
  scoreCoincidenciaIdeal?: ScoreCoincidenciaIdeal | null
}

/**
 * Diagnóstico del examen cultural. No cuenta aciertos —eso ya está arriba—:
 * dice por qué falló y qué páginas abrir.
 */
type DiagnosticoCultural = {
  medianaSegundos: number
  cuadrantes: {
    /** Correcto y rápido. */
    dominado: number
    /** Correcto pero lento: con cronómetro es lo primero que se cae. */
    fragil: number
    /** Incorrecto y lento: lo estudió y lo tiene cruzado. */
    confundido: number
    /** Incorrecto y rápido: todavía no lo lee. */
    sinVer: number
  }
  /** Hasta dónde llegaría si desenreda todo lo que tiene cruzado. */
  techoAlcanzable: number
  libros: Array<{
    libro: string
    errores: number
    rangos: Array<{ desde: number; hasta: number; errores: number }>
  }>
  subtemas: Array<{ tema: string; errores: number }>
}

type Resultados = {
  intentoId: number
  examen: { id: number; nombre: string; tipo?: string; calificable: boolean }
  estado: 'EN_PROGRESO' | 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA'
  tiempoTotalMs: number
  reactivosRespondidos: number
  aciertos: number | null
  porcentajeAciertos: number | null
  porBloque: PorBloque[]
  porTema: PorTema[]
  metricasTemporales: MetricasTemporales
  analisisConsistencia?: AnalisisConsistencia
  senalesCriticas?: SenalesCriticas | null
  diagnosticoCultural?: DiagnosticoCultural | null
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
                {data.diagnosticoCultural
                  ? 'Tu examen cultural'
                  : 'Tu perfil psicológico'}
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

        {/* Protocolo de crisis. Va antes que cualquier diagnóstico: si hay
            señales, es lo primero que el aspirante tiene que ver. */}
        {data.senalesCriticas?.protocoloCrisis && (
          <div className="mt-8">
            <AlertaCriticaCard senales={data.senalesCriticas} />
          </div>
        )}

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

        {/* Métricas rápidas — resumen numérico compacto sobre los gráficos */}
        <section className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
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
          <MetricStat
            label="Tendencia"
            value={
              data.metricasTemporales.tendencia === 'estable'
                ? 'Estable'
                : data.metricasTemporales.tendencia === 'acelerando'
                ? 'Acelerando'
                : 'Desacelerando'
            }
            sub={
              data.metricasTemporales.detalleFatiga
                ? `Δ ${data.metricasTemporales.detalleFatiga.diferenciaPorcentual}%`
                : ''
            }
          />
          <MetricStat
            label="Bloques"
            value={`${data.porBloque.length}`}
            sub={`${data.porTema.length} temas`}
          />
        </section>

        {/* Diagnóstico del examen cultural. Va antes de las gráficas porque es
            lo accionable: qué tiene cruzado y qué páginas abrir. */}
        {data.diagnosticoCultural && (
          <DiagnosticoCultural
            d={data.diagnosticoCultural}
            aciertos={data.aciertos ?? 0}
            total={data.reactivosRespondidos}
          />
        )}

        {/* Gráficos visuales del intento */}
        <GraficosPsicometrico
          porBloque={data.porBloque}
          porTema={data.porTema}
          metricasTemporales={data.metricasTemporales}
        />

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
  guiaLink,
}: {
  severidad: 'atencion' | 'revisar' | 'fortaleza'
  titulo: string
  descripcion: string
  guiaLink?: GuiaLink
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
  const mostrarCTA = severidad !== 'fortaleza' && !!guiaLink

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
      {mostrarCTA && guiaLink && (
        <Link
          href={urlDeLink(guiaLink)}
          className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          <BookOpen className="h-3 w-3" />
          Aprender a mejorar
          <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Diagnóstico del examen cultural
   ═══════════════════════════════════════════════════════════ */

function DiagnosticoCultural({
  d,
  aciertos,
  total,
}: {
  d: DiagnosticoCultural
  aciertos: number
  total: number
}) {
  const { dominado, fragil, confundido, sinVer } = d.cuadrantes
  const errores = total - aciertos
  const recuperables = confundido

  const cuadros = [
    {
      n: dominado,
      titulo: 'Dominado',
      señal: 'Correcto · rápido',
      texto: 'Lo sabes y lo recuperas sin esfuerzo. No gastes tiempo de estudio aquí.',
      color: 'text-military',
      borde: 'border-l-military',
    },
    {
      n: fragil,
      titulo: 'Frágil',
      señal: 'Correcto · lento',
      texto:
        'Acertaste, pero dudando. Con el cronómetro encima esto es lo primero que se cae. Repaso corto y repetido.',
      color: 'text-accent',
      borde: 'border-l-accent',
    },
    {
      n: confundido,
      titulo: 'Confundido',
      señal: 'Incorrecto · lento',
      texto:
        'Lo estudiaste y lo tienes cruzado con otra cosa. Es lo más recuperable: hay que separar los pares que confundes.',
      color: 'text-destructive',
      borde: 'border-l-destructive',
    },
    {
      n: sinVer,
      titulo: 'Sin ver',
      señal: 'Incorrecto · rápido',
      texto:
        'Ni lo intentaste — no lo has estudiado todavía. Se arregla leyendo, no repasando.',
      color: 'text-muted-foreground',
      borde: 'border-l-border',
    },
  ]

  return (
    <>
      {/* Techo alcanzable. El examen cultural no publica puntaje de corte, así
          que la meta honesta es su propio techo y no un umbral inventado. */}
      <section className="mt-8 rounded-xl border border-border border-t-2 border-t-accent bg-card p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Hasta dónde puedes llegar
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
          <span className="text-4xl font-semibold leading-none tracking-tight text-accent tabular-nums">
            {aciertos}
          </span>
          <span className="text-lg text-muted-foreground">de {total} ahora</span>
          <ArrowRight className="mb-1 h-4 w-4 text-muted-foreground" />
          <span className="text-4xl font-semibold leading-none tracking-tight text-accent tabular-nums">
            {d.techoAlcanzable}
          </span>
          <span className="text-lg text-muted-foreground">alcanzable</span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${total ? (aciertos / total) * 100 : 0}%` }}
          />
        </div>
        <p className="mt-4 max-w-2xl text-sm text-foreground">
          {recuperables > 0 ? (
            <>
              <span className="font-semibold">
                {recuperables} de tus {errores} errores son recuperables
              </span>{' '}
              — no son cosas que no hayas visto, son cosas que estudiaste y
              tienes cruzadas.
            </>
          ) : (
            <>
              El examen cultural no tiene puntaje de corte publicado. Este panel
              no te dice si pasas: te dice qué sabes y qué páginas abrir.
            </>
          )}
        </p>
      </section>

      {/* Cuadrantes */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Por qué fallaste, no sólo cuánto
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Cruzando si acertaste con cuánto tardaste salen cuatro situaciones que
          se arreglan distinto. Tu tiempo medio por pregunta fue de{' '}
          {d.medianaSegundos} segundos.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {cuadros.map((c) => (
            <div
              key={c.titulo}
              className={cn(
                'rounded-xl border border-l-4 border-border bg-card p-5',
                c.borde,
              )}
            >
              <p
                className={cn(
                  'text-3xl font-semibold leading-none tracking-tight tabular-nums',
                  c.color,
                )}
              >
                {c.n}
              </p>
              <h3 className="mt-2 font-semibold text-foreground">{c.titulo}</h3>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {c.señal}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.texto}
              </p>
            </div>
          ))}
        </div>
        {confundido > sinVer && confundido > 0 && (
          <div className="mt-3 rounded-lg border border-dashed border-military/40 bg-military/5 px-4 py-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Lee esto antes que la calificación.
            </span>{' '}
            Tienes {confundido} reactivos «confundidos» contra {sinVer} «sin
            ver». No es que te falte estudiar: es que estudiaste y se te está
            mezclando. Por eso el plan de abajo no te manda a leer capítulos
            enteros, sino páginas concretas.
          </div>
        )}
      </section>

      {/* Plan por páginas */}
      {d.libros.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Qué estudiar
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Tus errores llevados a las páginas exactas de los libros del temario.
            Las marcadas en rojo son donde fallaste tres veces o más.
          </p>
          <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
            {d.libros.map((l) => (
              <div key={l.libro} className="p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{l.libro}</h3>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {l.errores} {l.errores === 1 ? 'error' : 'errores'} ·{' '}
                    {l.rangos.length}{' '}
                    {l.rangos.length === 1 ? 'tramo' : 'tramos'}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {l.rangos.map((r) => (
                    <span
                      key={`${r.desde}-${r.hasta}`}
                      className={cn(
                        'rounded-md border px-2 py-1 text-xs font-semibold tabular-nums',
                        r.errores >= 3
                          ? 'border-destructive/40 bg-destructive/10 text-destructive'
                          : 'border-accent/30 bg-accent/10 text-accent',
                      )}
                    >
                      {r.desde === r.hasta
                        ? `p. ${r.desde}`
                        : `pp. ${r.desde}–${r.hasta}`}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Subtemas con más errores */}
      {d.subtemas.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Los temas que se te atoraron
          </h2>
          <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
            {d.subtemas.map((s) => (
              <div
                key={s.tema}
                className="flex items-center justify-between gap-4 px-5 py-3"
              >
                <span className="text-sm text-foreground">{s.tema}</span>
                <span className="shrink-0 rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-semibold text-destructive tabular-nums">
                  {s.errores} {s.errores === 1 ? 'error' : 'errores'}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
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
  guiaLink?: GuiaLink
}

function calcularDiagnosticos(data: Resultados): Diagnostico[] {
  const out: Diagnostico[] = []

  // Fatiga detectada — P1
  if (data.metricasTemporales.patronFatigaDetectado && data.metricasTemporales.detalleFatiga) {
    const pct = Math.abs(data.metricasTemporales.detalleFatiga.diferenciaPorcentual)
    out.push({
      severidad: 'atencion',
      titulo: `Bajaste el ritmo un ${pct}% en la segunda mitad.`,
      descripcion:
        'Puede indicar fatiga cognitiva o dudas acumuladas. Considera practicar con temporizador para acostumbrar la resistencia.',
      guiaLink: LINKS_FIJOS.fatigaPsicometrico,
    })
  }

  // Bloques con bajo desempeño — P2 a P5 (según nombre del bloque)
  const bloquesDebiles = data.porBloque.filter(
    (b) => b.porcentaje !== null && b.porcentaje < 50,
  )
  for (const b of bloquesDebiles) {
    out.push({
      severidad: 'revisar',
      titulo: `${b.nombre}: ${b.porcentaje}% de aciertos.`,
      descripcion: `Solo ${b.aciertos} de ${b.respondidos} correctas. Este bloque necesita práctica enfocada.`,
      guiaLink: linkParaBloque(b.nombre) ?? undefined,
    })
  }

  // Fortalezas — sin CTA (no hay nada que mejorar)
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
              {/* Score de coincidencia con perfil ideal — solo axiológico */}
              {data.analisisConsistencia?.scoreCoincidenciaIdeal ? (
                <>
                  <p className="text-5xl font-semibold tracking-tight leading-none">
                    {data.analisisConsistencia.scoreCoincidenciaIdeal.score}
                    <span className="text-xl text-muted-foreground">/100</span>
                  </p>
                  <p className={cn(
                    'mt-1 text-xs font-semibold uppercase tracking-widest',
                    data.analisisConsistencia.scoreCoincidenciaIdeal.etiqueta === 'alta' ? 'text-military' :
                    data.analisisConsistencia.scoreCoincidenciaIdeal.etiqueta === 'media' ? 'text-accent' :
                    'text-destructive'
                  )}>
                    coincidencia {data.analisisConsistencia.scoreCoincidenciaIdeal.etiqueta} con perfil militar
                  </p>
                </>
              ) : (
                <>
                  <p className="text-5xl font-semibold tracking-tight leading-none">
                    {data.reactivosRespondidos}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    reactivos respondidos
                  </p>
                </>
              )}
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

        {/* Gráficos visuales del intento (radar, donut, gauge, bar chart) */}
        {data.analisisConsistencia && (
          <GraficosAutoevaluacion
            analisisConsistencia={data.analisisConsistencia}
            examenNombre={data.examen.nombre}
          />
        )}

        {/* Estilo de respuesta — solo personalidad (sesgo + deseabilidad social) */}
        {data.analisisConsistencia?.sesgoRespuesta && (
          <section className="mt-6 rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Tu estilo de respuesta
            </h3>
            <p className="mb-4 text-xs text-muted-foreground">
              Análisis de cómo distribuiste tus respuestas. Sesgos muy marcados o idealización excesiva generan perfiles poco creíbles.
            </p>

            {/* Distribución Sí / No */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Distribución de respuestas</span>
                <span className="text-muted-foreground">
                  {data.analisisConsistencia.sesgoRespuesta.porcentajeSi}% Sí · {data.analisisConsistencia.sesgoRespuesta.porcentajeNo}% No
                </span>
              </div>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="bg-military transition-all"
                  style={{ width: `${data.analisisConsistencia.sesgoRespuesta.porcentajeSi}%` }}
                />
                <div
                  className="bg-destructive/60 transition-all"
                  style={{ width: `${data.analisisConsistencia.sesgoRespuesta.porcentajeNo}%` }}
                />
              </div>
            </div>

            {/* Índice de deseabilidad */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Índice de deseabilidad social</span>
                <span className={cn(
                  'font-semibold',
                  data.analisisConsistencia.sesgoRespuesta.perfilIdealizado ? 'text-destructive' : 'text-foreground'
                )}>
                  {data.analisisConsistencia.sesgoRespuesta.indiceDeseabilidad}%
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    'h-full transition-all',
                    data.analisisConsistencia.sesgoRespuesta.perfilIdealizado ? 'bg-destructive' : 'bg-accent'
                  )}
                  style={{ width: `${data.analisisConsistencia.sesgoRespuesta.indiceDeseabilidad}%` }}
                />
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">
                % de respuestas alineadas al perfil socialmente esperado. Un valor {'>'}90% se lee como perfil idealizado poco creíble.
              </p>
            </div>

            {/* Alertas de sesgo */}
            {(data.analisisConsistencia.sesgoRespuesta.tieneSesgoAquiescencia ||
              data.analisisConsistencia.sesgoRespuesta.tieneSesgoNegativismo ||
              data.analisisConsistencia.sesgoRespuesta.perfilIdealizado) && (
              <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <div className="text-xs text-foreground">
                  {data.analisisConsistencia.sesgoRespuesta.tieneSesgoAquiescencia && (
                    <p><strong>Sesgo de aquiescencia:</strong> respondiste Sí a más del 75%. Puede indicar asentimiento automático sin análisis real.</p>
                  )}
                  {data.analisisConsistencia.sesgoRespuesta.tieneSesgoNegativismo && (
                    <p><strong>Sesgo de negativismo:</strong> respondiste No a más del 75%. Puede indicar rechazo automático o desconfianza.</p>
                  )}
                  {data.analisisConsistencia.sesgoRespuesta.perfilIdealizado && (
                    <p className="mt-1"><strong>Perfil idealizado:</strong> más del 90% de tus respuestas apuntan al lado positivo. El examen real detecta esto como poco creíble.</p>
                  )}
                </div>
              </div>
            )}
          </section>
        )}

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

  // ─── Prioridad 0: Alertas de sesgo (personalidad) ───

  const sesgo = data.analisisConsistencia?.sesgoRespuesta
  if (sesgo?.perfilIdealizado) {
    out.push({
      severidad: 'atencion',
      titulo: `Perfil idealizado: ${sesgo.indiceDeseabilidad}% de respuestas alineadas al lado positivo.`,
      descripcion:
        'Un perfil que responde siempre en la dirección socialmente esperada se lee como poco creíble. El examen real está diseñado para detectar exactamente este patrón. Responde con más autenticidad.',
      guiaLink: LINKS_FIJOS.perfilIdealizado,
    })
  }
  if (sesgo?.tieneSesgoAquiescencia) {
    out.push({
      severidad: 'revisar',
      titulo: `Sesgo de aquiescencia: ${sesgo.porcentajeSi}% de respuestas fueron Sí.`,
      descripcion: 'Responder Sí a todo indica asentimiento automático sin análisis real. Cada reactivo debe evaluarse individualmente.',
      guiaLink: LINKS_FIJOS.aquiescencia,
    })
  }
  if (sesgo?.tieneSesgoNegativismo) {
    out.push({
      severidad: 'revisar',
      titulo: `Sesgo de negativismo: ${sesgo.porcentajeNo}% de respuestas fueron No.`,
      descripcion: 'Responder No a todo indica rechazo automático. También puede leerse como desconfianza o resistencia al proceso.',
      guiaLink: LINKS_FIJOS.negativismo,
    })
  }

  // ─── Score de coincidencia con ideal — solo axiológico ───

  const scoreCI = data.analisisConsistencia?.scoreCoincidenciaIdeal
  if (scoreCI && scoreCI.etiqueta === 'baja') {
    out.push({
      severidad: 'atencion',
      titulo: `Coincidencia baja (${scoreCI.score}/100) con el perfil militar ideal.`,
      descripcion: 'Tu perfil axiológico se aleja del perfil buscado por la institución. Revisa la sección de los 8 valores axiológicos para entender el perfil esperado.',
      guiaLink: LINKS_FIJOS.coincidenciaBajaAxiologico,
    })
  }
  if (scoreCI && scoreCI.etiqueta === 'alta') {
    out.push({
      severidad: 'fortaleza',
      titulo: `Alta coincidencia (${scoreCI.score}/100) con el perfil militar ideal.`,
      descripcion: 'Tu perfil axiológico se alinea consistentemente con los valores buscados. Es una fortaleza estructural del perfil.',
    })
  }

  // ─── Prioridad 1: Contradicciones internas (usa polaridad + tema) ───

  if (data.analisisConsistencia && data.analisisConsistencia.totalContradicciones > 5) {
    out.push({
      severidad: 'atencion',
      titulo: `Se detectaron ${data.analisisConsistencia.totalContradicciones} pares de respuestas contradictorias.`,
      descripcion:
        'Respondiste en direcciones opuestas a reactivos que apuntan al mismo tema. El sistema lo lee como perfil inestable. Revisa qué temas te generaron más duda y practica manteniendo criterio.',
      guiaLink: LINKS_FIJOS.contradiccionesInternas,
    })
  }

  if (data.analisisConsistencia && data.analisisConsistencia.temasConInconsistencia.length > 0) {
    const temas = data.analisisConsistencia.temasConInconsistencia
    const temasStr = temas
      .slice(0, 3)
      .map((t) => t.replace(/_/g, ' '))
      .join(', ')
    // El link apunta a la sección del PRIMER tema con inconsistencia (el más crítico).
    const primerTemaConLink = temas.find((t) => linkParaTema(t) !== null)
    out.push({
      severidad: 'revisar',
      titulo: `${temas.length} temas con inconsistencia detectada.`,
      descripcion: `Temas más críticos: ${temasStr}${temas.length > 3 ? ', y otros' : ''}. Estos temas necesitan que definas mejor tu postura antes del examen real.`,
      guiaLink: primerTemaConLink ? (linkParaTema(primerTemaConLink) ?? undefined) : undefined,
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
      guiaLink: LINKS_FIJOS.aceleracionAutoevaluacion,
    })
  }

  if (data.metricasTemporales.coeficienteVariacion >= 1) {
    out.push({
      severidad: 'revisar',
      titulo: 'Tu ritmo entre reactivos fue muy variable.',
      descripcion: `Un coeficiente de variación de ${data.metricasTemporales.coeficienteVariacion} indica que algunos reactivos te tomaron mucho más que otros. Considera si te trabaste con temas específicos.`,
      guiaLink: LINKS_FIJOS.ritmoVariable,
    })
  }

  if (data.metricasTemporales.tiempoPromedioReactivoMs < 3000 && data.reactivosRespondidos > 20) {
    out.push({
      severidad: 'atencion',
      titulo: `Tiempo promedio de solo ${Math.round(data.metricasTemporales.tiempoPromedioReactivoMs / 1000)} segundos por reactivo.`,
      descripcion: 'Un ritmo muy rápido puede indicar respuestas automáticas. En autoevaluación esto genera patrones poco creíbles. Considera responder con más pausa reflexiva.',
      guiaLink: LINKS_FIJOS.ritmoDemasiadoRapido,
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
