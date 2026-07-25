'use client'

import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  BarChart3,
  BookOpen,
  Brain,
  Loader2,
  Scale,
  TrendingUp,
  UserCircle,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type ReactivoFallado = {
  reactivoId: number
  enunciado: string
  tema: string | null
  bloqueNombre: string | null
  total: number
  incorrectas: number
  tasaError: number
}

type ErrorBloque = {
  bloqueId: number
  nombre: string
  total: number
  incorrectas: number
  tasaError: number
}

type ErrorTema = {
  tema: string
  total: number
  incorrectas: number
  tasaError: number
}

type Analitica = {
  totalRespuestasCalificadas: number
  reactivosMasFallados: ReactivoFallado[]
  erroresPorBloque: ErrorBloque[]
  erroresPorTema: ErrorTema[]
}

// Cultural: agrega por materia (libro) y por tema en vez de por bloque.
type ReactivoFalladoCultural = {
  reactivoId: number
  enunciado: string
  materia: string | null
  tema: string | null
  total: number
  incorrectas: number
  tasaError: number
}

type ErrorMateria = {
  materia: string
  total: number
  incorrectas: number
  tasaError: number
}

type AnaliticaCultural = {
  totalRespuestasCalificadas: number
  reactivosMasFallados: ReactivoFalladoCultural[]
  erroresPorMateria: ErrorMateria[]
  erroresPorTema: ErrorTema[]
}

// Distribución: exámenes sin acierto/error (Personalidad, Axiológico).
type DistribucionItem = {
  reactivoId: number
  enunciado: string
  tema: string | null
  polaridad: 'POSITIVA' | 'NEGATIVA' | 'TRAMPA' | null
  total: number
  mayoritaria: number
  distribucion: Array<{ respuesta: string; n: number; pct: number }>
}

type Distribucion = {
  examenId: number
  totalRespuestas: number
  items: DistribucionItem[]
}

/**
 * Color de la barra según la tasa de error: verde bajo, ámbar medio, rojo alto.
 * Ayuda a leer la gráfica de un vistazo sin mirar los números.
 */
function colorPorTasa(tasa: number): string {
  if (tasa >= 60) return 'var(--color-rose-500, #f43f5e)'
  if (tasa >= 35) return 'var(--color-amber-500, #f59e0b)'
  return 'var(--color-emerald-500, #10b981)'
}

/* ═══════════════════════════════════════════════════════════
   Página — con pestañas Psicológico / Cultural
   ═══════════════════════════════════════════════════════════ */

export default function AnaliticaPage() {
  const [vista, setVista] = useState<
    'psicometrico' | 'personalidad' | 'axiologico' | 'cultural'
  >('psicometrico')

  return (
    <div>
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Analítica
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Cómo responden los aspirantes. En Psicométrico y Cultural, dónde fallan
          más; en Personalidad y Axiológico —que no tienen acierto/error— cómo se
          reparten las respuestas.
        </p>
      </div>

      {/* Pestañas — una por examen. */}
      <div className="mb-6 inline-flex flex-wrap gap-1 rounded-lg border border-border bg-card p-1">
        <TabBtn
          activo={vista === 'psicometrico'}
          onClick={() => setVista('psicometrico')}
          icon={Brain}
        >
          Psicométrico
        </TabBtn>
        <TabBtn
          activo={vista === 'personalidad'}
          onClick={() => setVista('personalidad')}
          icon={UserCircle}
        >
          Personalidad
        </TabBtn>
        <TabBtn
          activo={vista === 'axiologico'}
          onClick={() => setVista('axiologico')}
          icon={Scale}
        >
          Axiológico
        </TabBtn>
        <TabBtn
          activo={vista === 'cultural'}
          onClick={() => setVista('cultural')}
          icon={BookOpen}
        >
          Cultural
        </TabBtn>
      </div>

      {vista === 'psicometrico' ? (
        <VistaPsicologico />
      ) : vista === 'personalidad' ? (
        <VistaDistribucion examenId={2} nombre="Personalidad" />
      ) : vista === 'axiologico' ? (
        <VistaDistribucion examenId={3} nombre="Axiológico" />
      ) : (
        <VistaCultural />
      )}
    </div>
  )
}

function TabBtn({
  activo,
  onClick,
  icon: Icon,
  children,
}: {
  activo: boolean
  onClick: () => void
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
        activo
          ? 'bg-accent/10 text-accent'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      <Icon className="h-4 w-4" />
      {children}
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════
   Vista Psicológico (GET /admin/analitica)
   ═══════════════════════════════════════════════════════════ */

function VistaPsicologico() {
  const [data, setData] = useState<Analitica | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Analitica>('/admin/analitica')
      .then((res) => {
        setData(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  if (cargando) return <Cargando />
  if (error || !data) return <ErrorBox mensaje={error || 'Sin datos'} />

  if (data.totalRespuestasCalificadas === 0) {
    return (
      <SinDatos
        texto="En cuanto los aspirantes resuelvan el simulador psicométrico, aquí verás qué reactivos, bloques y temas cuestan más."
      />
    )
  }

  return (
    <>
      <ResumenRespuestas n={data.totalRespuestasCalificadas} />

      <Section titulo="% de error por bloque">
        <GraficaError
          items={data.erroresPorBloque.map((b) => ({
            nombre: b.nombre,
            tasaError: b.tasaError,
            total: b.total,
          }))}
        />
      </Section>

      <Section titulo="% de error por tema">
        {data.erroresPorTema.length === 0 ? (
          <VacioChico texto="Sin temas etiquetados con respuestas todavía." />
        ) : (
          <GraficaError
            items={data.erroresPorTema.map((t) => ({
              nombre: t.tema,
              tasaError: t.tasaError,
              total: t.total,
            }))}
          />
        )}
      </Section>

      <Section titulo="Reactivos más fallados">
        <p className="mb-3 text-xs text-muted-foreground">
          Ordenados por tasa de error. Si un reactivo lo falla casi todo el
          mundo, revísalo — puede estar mal redactado o con la respuesta correcta
          mal marcada.
        </p>
        <TablaReactivos
          filas={data.reactivosMasFallados.map((r) => ({
            reactivoId: r.reactivoId,
            enunciado: r.enunciado,
            categoria: r.bloqueNombre,
            tema: r.tema,
            total: r.total,
            incorrectas: r.incorrectas,
            tasaError: r.tasaError,
          }))}
          etiquetaCategoria="Bloque"
        />
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
   Vista Cultural (GET /cultural/analitica)
   ═══════════════════════════════════════════════════════════ */

function VistaCultural() {
  const [data, setData] = useState<AnaliticaCultural | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<AnaliticaCultural>('/cultural/analitica')
      .then((res) => {
        setData(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  if (cargando) return <Cargando />
  if (error || !data) return <ErrorBox mensaje={error || 'Sin datos'} />

  if (data.totalRespuestasCalificadas === 0) {
    return (
      <SinDatos
        texto="En cuanto los aspirantes resuelvan el simulador cultural, aquí verás qué materias, temas y reactivos cuestan más."
      />
    )
  }

  return (
    <>
      <ResumenRespuestas n={data.totalRespuestasCalificadas} />

      <Section titulo="% de error por materia">
        <GraficaError
          items={data.erroresPorMateria.map((m) => ({
            nombre: m.materia,
            tasaError: m.tasaError,
            total: m.total,
          }))}
        />
      </Section>

      <Section titulo="% de error por tema (los 20 peores)">
        {data.erroresPorTema.length === 0 ? (
          <VacioChico texto="Sin temas con respuestas todavía." />
        ) : (
          <GraficaError
            items={data.erroresPorTema.map((t) => ({
              nombre: t.tema,
              tasaError: t.tasaError,
              total: t.total,
            }))}
          />
        )}
      </Section>

      <Section titulo="Reactivos más fallados">
        <p className="mb-3 text-xs text-muted-foreground">
          Ordenados por tasa de error. Un 100% consistente suele ser la respuesta
          mal marcada — corrígela en el Banco cultural.
        </p>
        <TablaReactivos
          filas={data.reactivosMasFallados.map((r) => ({
            reactivoId: r.reactivoId,
            enunciado: r.enunciado,
            categoria: r.materia,
            tema: r.tema,
            total: r.total,
            incorrectas: r.incorrectas,
            tasaError: r.tasaError,
          }))}
          etiquetaCategoria="Materia"
        />
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
   Vista Personalidad / Axiológico (GET /admin/distribucion)
   — exámenes sin acierto/error: se mide la distribución de respuestas
   ═══════════════════════════════════════════════════════════ */

// Por encima de este % en la respuesta dominante, el reactivo "no discrimina":
// casi todos contestan igual, así que no separa a un aspirante de otro.
const UMBRAL_POCO_DISCRIMINA = 85

// Paleta categórica para los segmentos de la barra de distribución.
const COLORES_DIST = ['#10b981', '#64748b', '#f59e0b', '#6366f1', '#f43f5e']

function VistaDistribucion({
  examenId,
  nombre,
}: {
  examenId: number
  nombre: string
}) {
  const [data, setData] = useState<Distribucion | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setCargando(true)
    setError('')
    apiFetch<Distribucion>(`/admin/distribucion?examenId=${examenId}`)
      .then((res) => {
        setData(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [examenId])

  if (cargando) return <Cargando />
  if (error || !data) return <ErrorBox mensaje={error || 'Sin datos'} />

  if (data.totalRespuestas === 0) {
    return (
      <SinDatos
        texto={`En cuanto los aspirantes resuelvan el simulador de ${nombre}, aquí verás cómo se reparten las respuestas de cada reactivo.`}
      />
    )
  }

  return (
    <>
      <ResumenRespuestas n={data.totalRespuestas} />
      <Section titulo="Distribución de respuestas por reactivo">
        <p className="mb-3 max-w-2xl text-xs text-muted-foreground">
          {nombre} no tiene respuestas correctas: se mide cómo se reparten.
          Arriba salen los reactivos que casi todos responden igual —«no
          discriminan» entre aspirantes y conviene revisarlos—. Ojo con la
          polaridad: en un rasgo muy marcado, un reparto disparejo puede ser lo
          esperado.
        </p>
        <TablaDistribucion items={data.items} />
      </Section>
    </>
  )
}

function TablaDistribucion({ items }: { items: DistribucionItem[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-semibold">Enunciado</th>
              <th className="px-3 py-2 font-semibold">Polaridad</th>
              <th className="px-3 py-2 font-semibold">Distribución</th>
              <th className="px-3 py-2 text-right font-semibold">Respuestas</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr
                key={it.reactivoId}
                className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
              >
                <td className="max-w-md px-3 py-2 text-xs text-foreground">
                  <p className="line-clamp-2">{it.enunciado}</p>
                  {it.mayoritaria >= UMBRAL_POCO_DISCRIMINA && (
                    <span className="mt-1 inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                      poco discrimina · {it.mayoritaria}%
                    </span>
                  )}
                </td>
                <td className="px-3 py-2">
                  <PolaridadTag polaridad={it.polaridad} />
                </td>
                <td className="px-3 py-2">
                  <BarraDistribucion distribucion={it.distribucion} />
                </td>
                <td className="px-3 py-2 text-right text-xs text-muted-foreground">
                  {it.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/** Barra horizontal con un segmento por respuesta + leyenda con % debajo. */
function BarraDistribucion({
  distribucion,
}: {
  distribucion: DistribucionItem['distribucion']
}) {
  return (
    <div className="min-w-[220px]">
      <div className="flex h-3.5 w-full overflow-hidden rounded-full border border-border">
        {distribucion.map((d, i) => (
          <div
            key={d.respuesta}
            style={{
              width: `${d.pct}%`,
              backgroundColor: COLORES_DIST[i % COLORES_DIST.length],
            }}
            title={`${d.respuesta}: ${d.pct}% (${d.n})`}
          />
        ))}
      </div>
      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
        {distribucion.map((d, i) => (
          <span
            key={d.respuesta}
            className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORES_DIST[i % COLORES_DIST.length] }}
            />
            {d.respuesta} {d.pct}%
          </span>
        ))}
      </div>
    </div>
  )
}

/** Etiqueta de polaridad para Personalidad (POSITIVA/NEGATIVA/TRAMPA). */
function PolaridadTag({
  polaridad,
}: {
  polaridad: DistribucionItem['polaridad']
}) {
  if (!polaridad)
    return <span className="text-xs text-muted-foreground/60">—</span>
  const clase: Record<string, string> = {
    POSITIVA: 'bg-emerald-500/10 text-emerald-600',
    NEGATIVA: 'bg-rose-500/10 text-rose-600',
    TRAMPA: 'bg-amber-500/10 text-amber-600',
  }
  const etiqueta: Record<string, string> = {
    POSITIVA: 'Positiva',
    NEGATIVA: 'Negativa',
    TRAMPA: 'Trampa',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest',
        clase[polaridad] ?? 'bg-muted text-muted-foreground',
      )}
    >
      {etiqueta[polaridad] ?? polaridad}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes compartidos
   ═══════════════════════════════════════════════════════════ */

function Cargando() {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <Loader2 className="h-5 w-5 animate-spin" />
      <p className="text-sm">Cargando analítica…</p>
    </div>
  )
}

function ErrorBox({ mensaje }: { mensaje: string }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      <p className="text-sm text-destructive">{mensaje}</p>
    </div>
  )
}

function SinDatos({ texto }: { texto: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-10 text-center">
      <BarChart3 className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
      <p className="text-sm font-medium text-foreground">
        Aún no hay respuestas calificadas
      </p>
      <p className="mx-auto mt-1 max-w-md text-xs text-muted-foreground">{texto}</p>
    </div>
  )
}

function ResumenRespuestas({ n }: { n: number }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
      <TrendingUp className="h-4 w-4 text-accent" />
      <span>
        Basado en{' '}
        <span className="font-semibold text-foreground">
          {n.toLocaleString('es-MX')}
        </span>{' '}
        respuestas calificadas
      </span>
    </div>
  )
}

function Section({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-4 w-1 rounded bg-military" />
        <h2 className="text-sm font-semibold text-foreground">{titulo}</h2>
      </div>
      {children}
    </section>
  )
}

function VacioChico({ texto }: { texto: string }) {
  return (
    <p className="rounded-lg border border-dashed border-border/70 p-6 text-center text-sm text-muted-foreground">
      {texto}
    </p>
  )
}

/** Tabla de reactivos más fallados, compartida por las dos vistas. */
function TablaReactivos({
  filas,
  etiquetaCategoria,
}: {
  filas: Array<{
    reactivoId: number
    enunciado: string
    categoria: string | null
    tema: string | null
    total: number
    incorrectas: number
    tasaError: number
  }>
  etiquetaCategoria: string
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-semibold">Enunciado</th>
              <th className="px-3 py-2 font-semibold">{etiquetaCategoria}</th>
              <th className="px-3 py-2 font-semibold">Tema</th>
              <th className="px-3 py-2 text-right font-semibold">Respuestas</th>
              <th className="px-3 py-2 text-right font-semibold">% error</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((r) => (
              <tr
                key={r.reactivoId}
                className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
              >
                <td className="max-w-md px-3 py-2 text-xs text-foreground">
                  <p className="line-clamp-2">{r.enunciado}</p>
                </td>
                <td className="px-3 py-2 text-xs text-muted-foreground">
                  {r.categoria ?? '—'}
                </td>
                <td className="px-3 py-2 text-xs text-muted-foreground">
                  {r.tema ?? '—'}
                </td>
                <td className="px-3 py-2 text-right text-xs text-muted-foreground">
                  {r.incorrectas}/{r.total}
                </td>
                <td className="px-3 py-2 text-right">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold',
                      r.tasaError >= 60
                        ? 'bg-rose-500/10 text-rose-600'
                        : r.tasaError >= 35
                          ? 'bg-amber-500/10 text-amber-600'
                          : 'bg-emerald-500/10 text-emerald-600',
                    )}
                  >
                    {r.tasaError}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * Gráfica de barras horizontal reutilizable: nombre en el eje Y, % error en X.
 * Altura dinámica según el número de barras para que no se apretujen.
 */
function GraficaError({
  items,
}: {
  items: Array<{ nombre: string; tasaError: number; total: number }>
}) {
  const alto = Math.max(160, items.length * 38 + 40)
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div style={{ width: '100%', height: alto }}>
        <ResponsiveContainer>
          <BarChart
            data={items}
            layout="vertical"
            margin={{ top: 4, right: 40, left: 12, bottom: 4 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              horizontal={false}
            />
            <XAxis
              type="number"
              domain={[0, 100]}
              unit="%"
              stroke="var(--muted-foreground)"
              fontSize={11}
            />
            <YAxis
              dataKey="nombre"
              type="category"
              stroke="var(--muted-foreground)"
              fontSize={11}
              width={170}
              tick={{ fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v, _n, item) => [
                `${Number(v)}% error (${item?.payload?.total ?? 0} respuestas)`,
                'Tasa',
              ]}
            />
            <Bar dataKey="tasaError" radius={[0, 4, 4, 0]}>
              {items.map((it, idx) => (
                <Cell key={idx} fill={colorPorTasa(it.tasaError)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
