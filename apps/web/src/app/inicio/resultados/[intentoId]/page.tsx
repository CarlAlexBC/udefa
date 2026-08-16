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
  ChevronRight,
  Loader2,
  Sparkles,
  Sprout,
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
import { GraficosPsicometrico, LineTiempos } from '@/components/resultados/GraficosPsicometrico'
import { colorDeExamen, HOJA_DE_PLATA_CLARA } from '@/lib/colores-paquete'
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

type EscalaValidez = {
  presentadas: number
  afirmadas: number
  porcentaje: number | null
  banda: 'normal' | 'elevada' | 'alta' | 'sin_datos'
}

/**
 * Escalas de validez L/K/F (preguntas-trampa del banco remaster de personalidad).
 * `veredicto` resume si se le puede creer al aspirante lo que contestó en el resto
 * del examen. Llega null si el intento no trajo trampas (banco viejo).
 */
type EscalasValidez = {
  L: EscalaValidez
  K: EscalaValidez
  F: EscalaValidez
  totalTrampasPresentadas: number
  veredicto: 'valido' | 'con_reservas' | 'cuestionable'
  idealizacionSofisticada: boolean
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
  /** Qué eligió contra qué era, en los errores que más le costaron. */
  confusiones: Array<{
    tema: string | null
    pregunta: string
    elegiste: string
    era: string
    dice: string | null
    referencia: string | null
    /** Tardó más que su propia mediana: lo tenía cruzado, no sin ver. */
    dudo: boolean
  }>
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
  escalasValidez?: EscalasValidez | null
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
  /** El color del examen que se acaba de contestar. Tono oscuro: el hero es carbón. */
  const acentoModulo = colorDeExamen(data.examen.tipo, 'oscuro')
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

        {/* Hero card oscuro con puntaje agregado.
            Lleva el color del MÓDULO —azul si es cultural, rojo si es
            psicológico— para que el hilo de color no se corte justo aquí: el
            aspirante contestó un examen marcado con ese color y estos son sus
            resultados. Va el tono OSCURO de la tabla, porque el hero es carbón.
            El semáforo del diagnóstico (abajo) NO se toca: ahí olivo, ámbar y
            rojo significan severidad, y si el módulo también los usara,
            "atención" dejaría de saltar. */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
          <div
            className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full blur-3xl"
            style={{ backgroundColor: `${acentoModulo.c}26` }}
          />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div>
              <span
                className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{
                  borderColor: `${acentoModulo.c}66`,
                  backgroundColor: `${acentoModulo.c}1F`,
                  color: acentoModulo.c,
                }}
              >
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
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: acentoModulo.c }}
                >
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

        {/* Métricas rápidas — resumen numérico compacto. Solo para el
            psicométrico: en el cultural, el techo, los cuadrantes y la curva de
            ritmo ya cubren estos números, y "Bloques" siempre saldría 0 porque
            el examen cultural no tiene bloques. */}
        {!data.diagnosticoCultural && (
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
        )}

        {/* Diagnóstico del examen cultural. Va antes de las gráficas porque es
            lo accionable: qué tiene cruzado y qué páginas abrir. */}
        {data.diagnosticoCultural && (
          <DiagnosticoCultural
            d={data.diagnosticoCultural}
            aciertos={data.aciertos ?? 0}
            total={data.reactivosRespondidos}
            porTema={data.porTema}
            metricasTemporales={data.metricasTemporales}
          />
        )}

        {/* Gráficos visuales — solo para el psicométrico. En el cultural, el
            ritmo ya subió junto al techo y la lista de temas vive en "Qué
            estudiar", así que esta sección (radar incluido) no se pinta. */}
        {!data.diagnosticoCultural && (
          <GraficosPsicometrico
            porBloque={data.porBloque}
            porTema={data.porTema}
            metricasTemporales={data.metricasTemporales}
          />
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
    /* Hoja de plata NEUTRA, sin teñir del módulo: aquí el color que manda es
       el del semáforo (el filo izquierdo). Si la tarjeta también se tiñera,
       "atención" dejaría de saltar, que es justo lo que hay que ver primero. */
    <div
      className={cn('rounded-lg border border-l-[3px] p-4', config.borderColor)}
      style={{
        backgroundImage: HOJA_DE_PLATA_CLARA.fondo,
        borderTopColor: HOJA_DE_PLATA_CLARA.borde,
        borderRightColor: HOJA_DE_PLATA_CLARA.borde,
        borderBottomColor: HOJA_DE_PLATA_CLARA.borde,
        boxShadow: HOJA_DE_PLATA_CLARA.sombra,
      }}
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
  porTema,
  metricasTemporales,
}: {
  d: DiagnosticoCultural
  aciertos: number
  total: number
  porTema: PorTema[]
  metricasTemporales: MetricasTemporales
}) {
  const { dominado, fragil, confundido, sinVer } = d.cuadrantes
  const hayRitmo = metricasTemporales.tiempoPorReactivoMs.length > 0
  const errores = total - aciertos
  const recuperables = confundido
  // Para "Qué estudiar": solo los temas donde hubo errores. Los de 100% no son
  // algo que estudiar, y meterlos ensuciaba la lista. Se ordenan en RenglonesTemas.
  const temasConError = porTema.filter(
    (t) => t.porcentaje !== null && t.respondidos - (t.aciertos ?? 0) > 0,
  )

  // En orden de MATRIZ 2×2, leyéndola de izquierda a derecha y de arriba a
  // abajo: [dominado, frágil] arriba (lo que acertaste), [sin ver, confundido]
  // abajo (lo que fallaste). Columna izquierda = rápido, derecha = lento. El
  // color semáforo va al borde superior (regla del repo: oliva en border-top).
  const cuadros = [
    {
      n: dominado,
      titulo: 'Dominado',
      texto:
        'Lo sabes y lo recuperas sin esfuerzo. No gastes tiempo de estudio aquí.',
      color: 'text-military',
      borde: 'border-t-military',
    },
    {
      n: fragil,
      titulo: 'Frágil',
      texto:
        'Acertaste, pero dudando. Con el cronómetro encima esto es lo primero que se cae. Repaso corto y repetido.',
      color: 'text-accent',
      borde: 'border-t-accent',
    },
    {
      n: sinVer,
      titulo: 'Sin ver',
      texto:
        'Ni lo intentaste — no lo has estudiado todavía. Se arregla leyendo, no repasando.',
      color: 'text-muted-foreground',
      borde: 'border-t-border',
    },
    {
      n: confundido,
      titulo: 'Confundido',
      texto:
        'Lo estudiaste y lo tienes cruzado con otra cosa. Es lo más recuperable: hay que separar los pares que confundes.',
      color: 'text-destructive',
      borde: 'border-t-destructive',
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
          se arreglan distinto. Tu ritmo típico fue de {d.medianaSegundos}{' '}
          {d.medianaSegundos === 1 ? 'segundo' : 'segundos'} por pregunta; lo que
          te tomó más que eso cuenta como «lento».
        </p>
        {/* Matriz 2×2. Columnas = velocidad (rápido | lento), filas = resultado
            (acerté | fallé). La POSICIÓN de cada grupo dice qué hacer con él, y
            la diagonal va de lo mejor (dominado, arriba-izq.) a lo más
            recuperable (confundido, abajo-der.). */}
        {/* minmax(0,1fr) y no 1fr: `1fr` a secas no puede encogerse por debajo
            de su contenido, así que un nombre de tema largo empujaría la
            columna y sacaría scroll horizontal en el teléfono. */}
        <div className="mt-5 grid grid-cols-[1.5rem_minmax(0,1fr)_minmax(0,1fr)] gap-2 sm:grid-cols-[2.25rem_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3">
          {/* Encabezados de columna: la velocidad */}
          <div aria-hidden />
          <p className="pb-1 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Rápido
          </p>
          <p className="pb-1 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Lento
          </p>

          {/* Fila de arriba: lo que acertaste */}
          <div className="flex items-center justify-center">
            <span className="rotate-180 text-[11px] font-semibold uppercase tracking-widest text-military [writing-mode:vertical-rl]">
              Acerté
            </span>
          </div>
          <CeldaCuadrante c={cuadros[0]} />
          <CeldaCuadrante c={cuadros[1]} />

          {/* Fila de abajo: lo que fallaste */}
          <div className="flex items-center justify-center">
            <span className="rotate-180 text-[11px] font-semibold uppercase tracking-widest text-destructive [writing-mode:vertical-rl]">
              Fallé
            </span>
          </div>
          <CeldaCuadrante c={cuadros[2]} />
          <CeldaCuadrante c={cuadros[3]} />
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

      {/* Puente a la capa verde. Al cerrar el simulacro, RepasosService sembró
          en la cola de Leitner lo que no quedó "dominado": los errores (caja 1)
          y lo frágil (caja 2). Aquí se lo decimos al aspirante y lo mandamos a
          estudiarlo cuando el sistema se lo devuelva. El número visible usa solo
          los errores, que se siembran siempre; lo frágil se nombra sin cifra
          hasta emparejar la mediana de la siembra con la del diagnóstico. */}
      {errores + fragil > 0 && (
        <section className="mt-8 rounded-xl border border-military/30 bg-military/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-military/15">
              <Sprout className="h-5 w-5 text-military" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Estos errores no se quedan aquí
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                {errores > 0 ? (
                  <>
                    Tus{' '}
                    <span className="font-semibold text-foreground">
                      {errores} {errores === 1 ? 'error' : 'errores'}
                    </span>{' '}
                    —y lo que acertaste dudando— ya están
                  </>
                ) : (
                  <>Lo que acertaste dudando ya está</>
                )}{' '}
                en tu{' '}
                <span className="font-semibold text-military">
                  repaso espaciado
                </span>
                , la capa verde. No lo estudies de corrido hoy: el sistema te lo
                va a ir devolviendo poco a poco —el primero mañana—, que es cuando
                de verdad se fija. Lo que ya dominas no vuelve, para no gastarte el
                tiempo.
              </p>
              <Link
                href="/inicio/repaso"
                className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-military px-4 py-2 text-sm font-semibold text-military-foreground transition-colors hover:bg-military/90"
              >
                Ir a mi repaso
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Qué estudiar — un solo lugar: los temas de peor a mejor (antes vivían
          también en "Los temas que se te atoraron" y en "Desempeño por tema",
          duplicados) y, debajo, las páginas exactas de los libros. */}
      {(temasConError.length > 0 || d.libros.length > 0) && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Qué estudiar
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Los temas donde fallaste, de más a menos errores, con las páginas
            exactas de los libros del temario. Todo lo que hay que repasar, en un
            solo lugar.
          </p>
          <div className="mt-4 rounded-xl border border-border bg-card p-5">
            {temasConError.length > 0 && <RenglonesTemas temas={temasConError} />}

            {d.libros.length > 0 && (
              <div className={cn(temasConError.length > 0 && 'mt-5 border-t border-border pt-5')}>
                {d.libros.map((l, i) => (
                  <div
                    key={l.libro}
                    className={cn(i > 0 && 'mt-4 border-t border-border pt-4')}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-foreground">{l.libro}</h4>
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
            )}
          </div>
        </section>
      )}

      {/* Lo que elegiste y lo que era (acordeón, todas cerradas) con el ritmo
         del examen a un lado. El apartado de confusiones era largo; plegado
         queda una lista corta que se abre al tocar cada renglón. */}
      {(d.confusiones.length > 0 || hayRitmo) && (
        <div
          className={cn(
            'mt-8 grid gap-4',
            d.confusiones.length > 0 && hayRitmo && 'lg:grid-cols-2 lg:items-start',
          )}
        >
          {d.confusiones.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Lo que elegiste y lo que era
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Los errores que más te costaron. Toca cada uno para abrirlo y ver
                lo que dice el libro.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {d.confusiones.map((c, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-border bg-card"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-2.5 px-4 py-3 [&::-webkit-details-marker]:hidden">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-destructive" />
                      {c.tema && (
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-military">
                          {c.tema}
                        </span>
                      )}
                      <span className="min-w-0 flex-1 truncate text-sm text-foreground">
                        {c.pregunta}
                      </span>
                      {c.dudo && (
                        <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                          Dudaste
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                    </summary>

                    <div className="px-4 pb-4">
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {c.pregunta}
                      </p>

                      <div className="mt-4 grid gap-2">
                        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-destructive">
                            Elegiste
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-foreground">
                            {c.elegiste}
                          </p>
                        </div>
                        <div className="rounded-lg border border-military/40 bg-military/5 p-3">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
                            Era
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-foreground">
                            {c.era}
                          </p>
                        </div>
                      </div>

                      {c.dice && (
                        <div className="mt-3 border-l-2 border-l-accent pl-3">
                          <p className="text-sm italic leading-relaxed text-muted-foreground">
                            {c.dice}
                          </p>
                          {c.referencia && (
                            <p className="mt-1 text-xs text-muted-foreground">
                              {c.referencia}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {hayRitmo && <LineTiempos metricasTemporales={metricasTemporales} />}
        </div>
      )}

      {/* "Los temas que se te atoraron" vivía aquí (tema + N errores). Se fusionó
         arriba, dentro de "Qué estudiar": era el mismo dato que "Desempeño por
         tema", y verlo dos veces era parte del scroll de más. */}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
   Una celda de la matriz 2×2 de cuadrantes: número grande en color semáforo,
   título y qué hacer. El borde superior lleva el color; la posición en la
   matriz (fila = resultado, columna = velocidad) la ponen los rótulos de eje.
   ═══════════════════════════════════════════════════════════ */
function CeldaCuadrante({
  c,
}: {
  c: { n: number; titulo: string; texto: string; color: string; borde: string }
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border border-t-2 bg-card p-4 sm:p-5',
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
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {c.texto}
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Renglones de "Qué estudiar" (examen cultural).
   Un tema por renglón —nombre, barra roja proporcional y "N errores de M"—, de
   más a menos errores: lo que hay que estudiar primero queda arriba. Recibe ya
   SOLO los temas con error (los de 100% no son algo que estudiar). Acotado a
   los 12 peores, con "Ver todos".
   ═══════════════════════════════════════════════════════════ */

function RenglonesTemas({ temas }: { temas: PorTema[] }) {
  const [verTodos, setVerTodos] = useState(false)

  const datos = temas
    .map((t) => ({
      tema: capitalizar(t.tema.replace(/_/g, ' ')),
      errores: Math.max(0, t.respondidos - (t.aciertos ?? 0)),
      respondidos: t.respondidos,
    }))
    .sort((a, b) => b.errores - a.errores || a.respondidos - b.respondidos)

  if (datos.length === 0) return null

  // La barra es RELATIVA al tema con más errores: da un orden de prioridad
  // visible sin depender del % (engañoso cuando un tema tiene 1 sola pregunta).
  const maxErrores = datos[0].errores || 1
  const TOPE = 12
  const hayMas = datos.length > TOPE
  const visibles = verTodos ? datos : datos.slice(0, TOPE)

  return (
    <div>
      <ul className="divide-y divide-border">
        {visibles.map((d) => (
          <li key={d.tema} className="flex items-center gap-3 py-2">
            <span
              className="min-w-0 truncate text-sm text-foreground"
              style={{ flex: '0 0 40%' }}
              title={d.tema}
            >
              {d.tema}
            </span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <span
                className="block h-full rounded-full bg-destructive"
                style={{ width: `${(d.errores / maxErrores) * 100}%` }}
              />
            </span>
            <span
              className="shrink-0 text-right text-xs tabular-nums"
              style={{ minWidth: 110 }}
            >
              <span className="font-semibold text-destructive">
                {d.errores} {d.errores === 1 ? 'error' : 'errores'}
              </span>
              <span className="text-muted-foreground"> de {d.respondidos}</span>
            </span>
          </li>
        ))}
      </ul>

      {hayMas && (
        <button
          type="button"
          onClick={() => setVerTodos((v) => !v)}
          className="mt-3 text-xs font-semibold text-accent hover:underline"
        >
          {verTodos ? 'Ver menos' : `Ver todos (${datos.length})`}
        </button>
      )}
    </div>
  )
}

/** Pone en mayúscula la primera letra. Los temas vienen de BD en minúscula. */
function capitalizar(texto: string): string {
  if (!texto) return texto
  return texto.charAt(0).toUpperCase() + texto.slice(1)
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
  /** Mismo criterio que en el panel calificable: el hero lleva el color del
   *  examen que se acaba de contestar. */
  const acentoModulo = colorDeExamen(data.examen.tipo, 'oscuro')
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
              <span
                className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{
                  borderColor: `${acentoModulo.c}66`,
                  backgroundColor: `${acentoModulo.c}1F`,
                  color: acentoModulo.c,
                }}
              >
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
                % de respuestas alineadas al perfil socialmente esperado. Un valor {'>'}90% se contrasta con las preguntas-trampa antes de leerse como idealizado.
              </p>
            </div>

            {/* Alertas de sesgo (aquiescencia, negativismo, idealización no creíble) */}
            {(data.analisisConsistencia.sesgoRespuesta.tieneSesgoAquiescencia ||
              data.analisisConsistencia.sesgoRespuesta.tieneSesgoNegativismo ||
              estadoPerfilIdealizado(data) === 'sospechoso') && (
              <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <div className="text-xs text-foreground">
                  {data.analisisConsistencia.sesgoRespuesta.tieneSesgoAquiescencia && (
                    <p><strong>Sesgo de aquiescencia:</strong> respondiste Sí a más del 75%. Puede indicar asentimiento automático sin análisis real.</p>
                  )}
                  {data.analisisConsistencia.sesgoRespuesta.tieneSesgoNegativismo && (
                    <p><strong>Sesgo de negativismo:</strong> respondiste No a más del 75%. Puede indicar rechazo automático o desconfianza.</p>
                  )}
                  {estadoPerfilIdealizado(data) === 'sospechoso' && (
                    <p className="mt-1"><strong>Perfil idealizado poco creíble:</strong> más del 90% de tus respuestas apuntan al lado positivo <strong>y</strong> caíste en varias preguntas-trampa. Esa combinación es la que el examen real detecta. Responde con más autenticidad.</p>
                  )}
                </div>
              </div>
            )}

            {/* Perfil alto pero creíble: >90% con las preguntas-trampa limpias */}
            {estadoPerfilIdealizado(data) === 'genuino' && (
              <div className="flex items-start gap-2 rounded-md border border-military/40 bg-military/10 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-military" />
                <p className="text-xs text-foreground">
                  <strong>Perfil muy alineado, y creíble:</strong> más del 90% de tus respuestas van al lado positivo, pero pasaste limpias las preguntas-trampa, así que el sistema te lee como genuino, no como fabricado. Ojo para el examen real: no siempre hay este cruce que te respalde, así que evita responder absolutamente todo en el extremo.
                </p>
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

/* Cruza el perfil idealizado (>90% de respuestas al lado deseable) con las
   escalas de validez (preguntas-trampa). Un >90% con las trampas limpias es un
   perfil genuinamente alto, no fabricado, y no debe leerse como "poco creíble".
   Sin trampas en el intento (banco viejo) → beneficio de la duda: genuino. */
function estadoPerfilIdealizado(
  data: Resultados,
): 'no' | 'genuino' | 'sospechoso' {
  if (!data.analisisConsistencia?.sesgoRespuesta?.perfilIdealizado) return 'no'
  const veredicto = data.escalasValidez?.veredicto ?? null
  if (veredicto === 'con_reservas' || veredicto === 'cuestionable') {
    return 'sospechoso'
  }
  return 'genuino'
}

/* Diagnósticos específicos para autoevaluación — usan análisis de consistencia
   (polaridad + tema) además de las métricas temporales. */
function calcularDiagnosticosAutoevaluacion(data: Resultados): Diagnostico[] {
  const out: Diagnostico[] = []

  // ─── Prioridad 0: Alertas de sesgo (personalidad) ───

  const sesgo = data.analisisConsistencia?.sesgoRespuesta
  const estadoIdealizado = estadoPerfilIdealizado(data)
  if (estadoIdealizado === 'sospechoso') {
    out.push({
      severidad: 'atencion',
      titulo: `Perfil idealizado poco creíble: ${sesgo?.indiceDeseabilidad}% al lado positivo, y caíste en las preguntas-trampa.`,
      descripcion:
        'Responder casi todo en la dirección esperada Y caer en las preguntas-trampa es justo el patrón que el examen real detecta. Responde con más autenticidad.',
      guiaLink: LINKS_FIJOS.perfilIdealizado,
    })
  } else if (estadoIdealizado === 'genuino') {
    out.push({
      severidad: 'fortaleza',
      titulo: `Perfil muy alineado, y creíble: ${sesgo?.indiceDeseabilidad}% al lado positivo con las preguntas-trampa limpias.`,
      descripcion:
        'Tu perfil es muy alto, pero pasaste las preguntas-trampa, así que se lee como genuino y no fabricado. Consejo para el examen real: no siempre hay este cruce que te respalde, así que evita responder absolutamente todo en el extremo.',
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
