'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  BarChart3,
  BookOpen,
  Brain,
  Loader2,
  Scale,
  Shield,
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


/* ═══════════════════════════════════════════════════════════
   Página — con pestañas Psicológico / Cultural
   ═══════════════════════════════════════════════════════════ */

export default function AnaliticaPage() {
  const [vista, setVista] = useState<
    'psicometrico' | 'personalidad' | 'axiologico' | 'cultural'
  >('psicometrico')

  // Ventana de tiempo. `null` = todo el histórico, que es lo que había antes y
  // mezcla los intentos de prueba de los primeros días con los aspirantes de
  // ahora. 30 días suele ser la lectura útil.
  const [dias, setDias] = useState<number | null>(null)

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

      {/* Ventana de tiempo. Aplica a las cuatro pestañas. */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Periodo
        </span>
        {[
          { etiqueta: 'Últimos 30 días', valor: 30 },
          { etiqueta: 'Últimos 90 días', valor: 90 },
          { etiqueta: 'Todo', valor: null },
        ].map((o) => (
          <button
            key={o.etiqueta}
            type="button"
            onClick={() => setDias(o.valor)}
            className={
              dias === o.valor
                ? 'rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent'
                : 'rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            {o.etiqueta}
          </button>
        ))}
      </div>

      {vista === 'psicometrico' ? (
        <VistaPsicologico dias={dias} />
      ) : vista === 'personalidad' ? (
        <VistaDistribucion examenId={2} nombre="Personalidad" dias={dias} />
      ) : vista === 'axiologico' ? (
        <VistaDistribucion examenId={3} nombre="Axiológico" dias={dias} />
      ) : (
        <VistaCultural />
      )}

      {/* Sección de seguridad: cuentas a vigilar por posible vaciado del banco. */}
      <CuentasAVigilar />

      {/* Reactivos-canario: las trampas anti-copia sembradas (Capa 5). */}
      <Canarios />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Cuentas a vigilar (GET /admin/vaciado) — Capa 3 · Mov. 2 "Vigilar"
   Señal de posible "vaciado": cuánta cobertura del banco ha juntado una cuenta
   y a qué ritmo. Lista rankeada; el admin revisa los bultos de arriba.
   ═══════════════════════════════════════════════════════════ */

type CuentaVigilar = {
  id: number
  nombre: string
  email: string
  plantel: string | null
  reactivosUnicos: number
  unicos7d: number
  respuestasTotales: number
  intentos: number
  ultimaActividad: string
}

function CuentasAVigilar() {
  const [cuentas, setCuentas] = useState<CuentaVigilar[] | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<CuentaVigilar[]>('/admin/vaciado')
      .then((res) => {
        setCuentas(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  return (
    <section className="mt-10 border-t border-border pt-8">
      <div className="mb-3 flex items-center gap-2">
        <Shield className="h-4 w-4 text-military" />
        <h2 className="text-sm font-semibold text-foreground">Cuentas a vigilar</h2>
        <span className="text-xs text-muted-foreground">· posible vaciado del banco</span>
      </div>
      <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
        Cuánta parte del banco ha recorrido cada cuenta y a qué ritmo. Las de
        arriba son las de más cobertura: un número desproporcionado frente al
        resto delata a quien está cosechando reactivos. (El robo que solo captura
        sin contestar no cae aquí; a ese lo frena el límite de armados.)
      </p>

      {cargando ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando…
        </div>
      ) : error ? (
        <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      ) : !cuentas || cuentas.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Todavía no hay actividad suficiente para mostrar nada.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-3 py-2 font-medium">#</th>
                <th className="px-3 py-2 font-medium">Aspirante</th>
                <th className="px-3 py-2 font-medium">Plantel</th>
                <th className="px-3 py-2 text-right font-medium">Reactivos únicos</th>
                <th className="px-3 py-2 text-right font-medium">Últ. 7 días</th>
                <th className="px-3 py-2 text-right font-medium">Respuestas</th>
                <th className="px-3 py-2 text-right font-medium">Intentos</th>
                <th className="px-3 py-2 font-medium">Última actividad</th>
              </tr>
            </thead>
            <tbody>
              {cuentas.map((c, i) => (
                <tr
                  key={c.id}
                  className="border-b border-border/60 last:border-0 hover:bg-muted/30"
                >
                  <td className="px-3 py-2 text-muted-foreground">{i + 1}</td>
                  <td className="px-3 py-2">
                    <p className="font-medium text-foreground">{c.nombre}</p>
                    <p className="text-xs text-muted-foreground">{c.email}</p>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{c.plantel ?? '—'}</td>
                  <td className="px-3 py-2 text-right font-semibold text-foreground">
                    {c.reactivosUnicos.toLocaleString('es-MX')}
                  </td>
                  <td className="px-3 py-2 text-right text-muted-foreground">
                    {c.unicos7d.toLocaleString('es-MX')}
                  </td>
                  <td className="px-3 py-2 text-right text-muted-foreground">
                    {c.respuestasTotales.toLocaleString('es-MX')}
                  </td>
                  <td className="px-3 py-2 text-right text-muted-foreground">
                    {c.intentos.toLocaleString('es-MX')}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    {new Date(c.ultimaActividad).toLocaleDateString('es-MX', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Reactivos-canario (GET /admin/canarios) — Capa 5 del blindaje anti-copia
   Las trampas sembradas (reactivos `noPuntua`): se sirven pero no cuentan. Si
   uno aparece en material ajeno, prueba el robo. Aquí se ven y cuánto se han
   expuesto (veces servido).
   ═══════════════════════════════════════════════════════════ */

type Canario = {
  id: number
  enunciado: string
  tema: string | null
  banco: string
  vecesRespondido: number
  /** 'distractor' = una opción falsa dentro de un reactivo legítimo (lo normal).
   *  'reactivo'   = el reactivo entero es inventado y no puntúa. */
  tipo: 'distractor' | 'reactivo'
  /** Nota interna: dice cuál es la frase sembrada. Nunca la ve el aspirante. */
  nota: string | null
}

function Canarios() {
  const [todos, setTodos] = useState(false)
  const [canarios, setCanarios] = useState<Canario[] | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Canario[]>('/admin/canarios')
      .then((res) => {
        setCanarios(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [])

  return (
    <section className="mt-10 border-t border-border pt-8">
      <div className="mb-3 flex items-center gap-2">
        <Shield className="h-4 w-4 text-military" />
        <h2 className="text-sm font-semibold text-foreground">Reactivos-canario</h2>
        <span className="text-xs text-muted-foreground">· trampas anti-copia sembradas</span>
      </div>
      <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
        Trampas sembradas en el banco. Casi siempre son una{' '}
        <strong>opción falsa</strong> dentro de un reactivo legítimo: como las
        opciones incorrectas están para ser incorrectas, no le enseñan nada falso al
        aspirante, pero si esa frase aparece en el material de un competidor, es
        prueba de que copió tu banco. Aquí ves cuáles tienes y qué tan expuestos están.
      </p>

      {cargando ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando…
        </div>
      ) : error ? (
        <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      ) : !canarios || canarios.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-card p-5 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Todavía no hay canarios sembrados.</p>
          <p className="mt-1">
            Un canario es un reactivo inventado (creíble, con un dato único que solo
            tú conoces). Se siembran con el script{' '}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">apps/backend/scripts/sembrar-canario.js</code>{' '}
            — ahí escribes su contenido y a qué tema del banco cultural pertenece.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-3 py-2 font-medium">ID</th>
                <th className="px-3 py-2 font-medium">Reactivo</th>
                <th className="px-3 py-2 font-medium">Trampa</th>
                <th className="px-3 py-2 font-medium">Tema</th>
                <th className="px-3 py-2 text-right font-medium">Veces servido</th>
              </tr>
            </thead>
            <tbody>
              {(todos ? canarios : canarios.slice(0, TOPE_TABLA)).map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border/60 last:border-0 hover:bg-muted/30"
                >
                  <td className="px-3 py-1.5 tabular-nums text-muted-foreground">{c.id}</td>
                  <td className="px-3 py-1.5">
                    <p className="max-w-md truncate text-foreground" title={c.enunciado}>
                      {c.enunciado}
                    </p>
                  </td>
                  <td className="px-3 py-1.5">
                    <span
                      className="cursor-help rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
                      title={c.nota ?? undefined}
                    >
                      {c.tipo === 'distractor' ? 'Opción falsa' : 'Reactivo entero'}
                    </span>
                  </td>
                  <td className="truncate px-3 py-1.5 text-muted-foreground">{c.tema ?? '—'}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums text-foreground">
                    {c.vecesRespondido.toLocaleString('es-MX')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
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

function VistaPsicologico({ dias }: { dias: number | null }) {
  const [data, setData] = useState<Analitica | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setCargando(true)
    apiFetch<Analitica>(`/admin/analitica${dias ? `?dias=${dias}` : ''}`)
      .then((res) => {
        setData(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [dias])

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
            detallado
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
            detallado
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

// ...pero sólo si hay muestra suficiente detrás. Con 2 respuestas, un 100% no
// dice nada: dos personas coincidieron y ya. Sin este mínimo la etiqueta salía
// en casi todos los reactivos y dejaba de significar algo. Mismo criterio que
// el de los temas en la vista de error.
const MINIMO_PARA_JUZGAR = 5

// Paleta categórica para los segmentos de la barra de distribución.
/**
 * Colores de la barra de distribución, en escala de la marca.
 *
 * Antes eran los de fábrica de Tailwind (esmeralda, pizarra, ámbar, índigo,
 * rosa): ajenos a la paleta y, sobre carbón, chillones. Estos cinco son los de
 * la casa y se distinguen entre sí — no significan bueno ni malo, sólo separan
 * una opción de otra.
 */
const COLORES_DIST = ['#E0B75C', '#C99A3B', '#9FB03F', '#6E7A2E', '#8A8579']

function VistaDistribucion({
  examenId,
  nombre,
  dias,
}: {
  examenId: number
  nombre: string
  dias: number | null
}) {
  const [data, setData] = useState<Distribucion | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setCargando(true)
    setError('')
    apiFetch<Distribucion>(
      `/admin/distribucion?examenId=${examenId}${dias ? `&dias=${dias}` : ''}`,
    )
      .then((res) => {
        setData(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [examenId, dias])

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
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      {/* En renglones, igual que el resto de la analítica (23 ago 2026). Antes
          era una tabla con cabeceras, y convivía mal con las listas de error de
          arriba: dos lenguajes distintos para la misma pantalla. */}
      <div className="flex flex-col">
        {items.map((it) => (
          <div
            key={it.reactivoId}
            className="grid grid-cols-1 items-start gap-2 rounded-md px-2 py-2 transition-colors hover:bg-muted/40 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)_auto] sm:items-center sm:gap-4"
          >
            <div className="min-w-0">
              <p className="truncate text-sm text-foreground" title={it.enunciado}>
                {it.enunciado}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <PolaridadTag polaridad={it.polaridad} />
                {it.mayoritaria >= UMBRAL_POCO_DISCRIMINA &&
                  it.total >= MINIMO_PARA_JUZGAR && (
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                    poco discrimina · {it.mayoritaria}%
                  </span>
                )}
              </div>
            </div>

            <BarraDistribucion distribucion={it.distribucion} />

            <span className="shrink-0 text-right text-xs tabular-nums text-muted-foreground">
              {it.total}
            </span>
          </div>
        ))}
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
    POSITIVA: 'bg-senal-baja/15 text-senal-baja',
    NEGATIVA: 'bg-senal-alta/15 text-senal-alta',
    TRAMPA: 'bg-accent/15 text-accent',
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
  const [todas, setTodas] = useState(false)
  const visibles = todas ? filas : filas.slice(0, TOPE_TABLA)

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
            {visibles.map((r) => (
              <tr
                key={r.reactivoId}
                className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
              >
                {/* Una línea, no dos: el enunciado completo vive en el título al
                    pasar el ratón. Con `line-clamp-2` cada fila medía 62 px y la
                    tabla sola se llevaba 1,246 px de página. */}
                <td className="max-w-md px-3 py-1.5 text-xs text-foreground">
                  <p className="truncate" title={r.enunciado}>
                    {r.enunciado}
                  </p>
                </td>
                <td className="truncate px-3 py-1.5 text-xs text-muted-foreground">
                  {r.categoria ?? '—'}
                </td>
                <td className="truncate px-3 py-1.5 text-xs text-muted-foreground">
                  {r.tema ?? '—'}
                </td>
                <td className="px-3 py-1.5 text-right text-xs tabular-nums text-muted-foreground">
                  {r.incorrectas}/{r.total}
                </td>
                <td className="px-3 py-1.5 text-right">
                  {/* Mismos tres escalones que la lista de arriba. Antes eran los
                      rosa/ámbar/esmeralda de fábrica de Tailwind, ajenos a la marca. */}
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums"
                    style={{
                      color: nivelDe(r.tasaError).color,
                      backgroundColor: nivelDe(r.tasaError).brillo,
                    }}
                  >
                    {r.tasaError}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filas.length > TOPE_TABLA && (
        <button
          type="button"
          onClick={() => setTodas((v) => !v)}
          className="w-full border-t border-border/60 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          {todas ? `Ver sólo los ${TOPE_TABLA} peores` : `Ver los ${filas.length}`}
        </button>
      )}
    </div>
  )
}

/** Respuestas mínimas para que una fila entre. Con menos, un solo fallo pinta
 *  100% de error y el dato engaña aunque no mienta. */
const MINIMO_RESPUESTAS = 5

/** Cuántos temas se pintan antes del "Ver todos". */
const TOPE_VISIBLE = 12

/** Cuántas filas se pintan en las tablas largas antes del "Ver todas". Son
 *  listas para ojear, no para leerse enteras: las dos juntas se llevaban 2,621
 *  px, más de media página. */
const TOPE_TABLA = 8

type ItemError = { nombre: string; tasaError: number; total: number }

/**
 * Los tres escalones del semáforo.
 *
 * Iban con lenguaje coloquial —"se les atora", "lo traen"— y Carlo pidió
 * registro formal (23 ago 2026): el panel es su herramienta de trabajo, no su
 * comunicación con el aspirante. Los nombres dicen QUÉ HACER con cada grupo,
 * que es más útil que describir el número.
 */
const NIVELES = [
  {
    clave: 'alta',
    titulo: 'Requiere refuerzo',
    pie: '60% de error o más',
    color: 'var(--senal-alta)',
    brillo: 'var(--senal-alta-brillo)',
    entra: (t: number) => t >= 60,
  },
  {
    clave: 'media',
    titulo: 'En proceso',
    pie: 'entre 30% y 59%',
    color: 'var(--senal-media)',
    brillo: 'var(--senal-media-brillo)',
    entra: (t: number) => t >= 30 && t < 60,
  },
  {
    clave: 'baja',
    titulo: 'Dominado',
    pie: 'menos de 30% de error',
    color: 'var(--senal-baja)',
    brillo: 'var(--senal-baja-brillo)',
    entra: (t: number) => t < 30,
  },
] as const

function nivelDe(tasa: number) {
  return NIVELES.find((n) => n.entra(tasa)) ?? NIVELES[2]
}

/**
 * Lista de "% de error", en renglones.
 *
 * Antes era una gráfica de barras de recharts y la página medía 4,573 px: 38 px
 * por barra más 170 px de columna de nombres, repetidos en cada pestaña. En
 * renglones ocupa un tercio, cabe el número de RESPUESTAS junto al porcentaje
 * —el dato que hacía falta para saber si un 100% merece atención— y desaparece
 * el globito de recharts, que en el teléfono se quedaba pegado al tocar.
 *
 * El resplandor va con cuentagotas: franja de la tarjeta, número y barra. Nunca
 * en texto corrido. Brilla porque es escaso.
 *
 * `detallado` es para las listas largas (por tema): añade las tres tarjetas de
 * arriba, agrupa por escalón y recorta a los peores con un "Ver todos". Las
 * listas cortas (por bloque, por materia) van en renglones pelones.
 */
function GraficaError({
  items,
  detallado = false,
}: {
  items: ItemError[]
  detallado?: boolean
}) {
  const [verTodos, setVerTodos] = useState(false)

  const visibles = [...items]
    .filter((i) => i.total >= MINIMO_RESPUESTAS)
    .sort((a, b) => b.tasaError - a.tasaError)
  const ocultos = items.length - visibles.length

  if (visibles.length === 0) {
    return (
      <VacioChico
        texto={`Todavía ningún tema llega a ${MINIMO_RESPUESTAS} respuestas. Con una o dos, un solo fallo ya marca 100% de error y el dato no dice nada.`}
      />
    )
  }

  const recortados =
    detallado && !verTodos ? visibles.slice(0, TOPE_VISIBLE) : visibles

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      {detallado && (
        <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-3">
          {NIVELES.map((n) => {
            const cuantos = visibles.filter((i) => n.entra(i.tasaError)).length
            return (
              <div
                key={n.clave}
                className="hoja-plata relative min-w-0 overflow-hidden rounded-lg border border-border/60 p-3"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{
                    backgroundColor: n.color,
                    boxShadow: `0 0 14px ${n.brillo}`,
                  }}
                />
                <p
                  className="text-xl font-semibold leading-none tabular-nums sm:text-2xl"
                  style={{ color: n.color, textShadow: `0 0 18px ${n.brillo}` }}
                >
                  {cuantos}
                </p>
                <p className="mt-1 text-xs font-semibold text-foreground">
                  {n.titulo}
                </p>
                <p className="text-[10px] text-muted-foreground">{n.pie}</p>
              </div>
            )
          })}
        </div>
      )}

      <div className="flex flex-col">
        {NIVELES.map((n) => {
          const suyos = recortados.filter((i) => n.entra(i.tasaError))
          if (suyos.length === 0) return null
          return (
            <div key={n.clave} className="flex flex-col">
              {detallado && (
                <div className="mb-1 mt-3 flex items-center gap-2 first:mt-0">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {n.titulo}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-[10px] tabular-nums text-muted-foreground">
                    {visibles.filter((i) => n.entra(i.tasaError)).length}
                  </span>
                </div>
              )}
              {suyos.map((item) => (
                <Renglon
                  key={item.nombre}
                  item={item}
                  puesto={detallado ? visibles.indexOf(item) + 1 : null}
                />
              ))}
            </div>
          )
        })}
      </div>

      {detallado && visibles.length > TOPE_VISIBLE && (
        <button
          type="button"
          onClick={() => setVerTodos((v) => !v)}
          className="mt-4 rounded-md border border-accent/40 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          {verTodos
            ? `Ver sólo los ${TOPE_VISIBLE} peores`
            : `Ver los ${visibles.length}`}
        </button>
      )}

      {ocultos > 0 && (
        <p className="mt-3 text-[11px] text-muted-foreground">
          No se muestran {ocultos} {ocultos === 1 ? 'tema' : 'temas'} con menos de{' '}
          {MINIMO_RESPUESTAS} respuestas: con esa muestra, un solo error da 100%.
        </p>
      )}
    </div>
  )
}

/** Un renglón: puesto, nombre recortado, barra delgada y el % con su conteo. */
function Renglon({ item, puesto }: { item: ItemError; puesto: number | null }) {
  const n = nivelDe(item.tasaError)
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/40 sm:grid-cols-[1.5rem_minmax(0,1fr)_minmax(0,7rem)_auto]">
      {/* La celda del puesto se dibuja SIEMPRE, aunque vaya vacía: si se omite,
          el nombre se corre a la columna de 1.5 rem y sale cortado a una letra
          en las listas sin numerar (por bloque, por materia). */}
      <span className="hidden text-right text-[11px] tabular-nums text-muted-foreground/70 sm:block">
        {puesto ?? ''}
      </span>
      {/* text-foreground explícito: sin él hereda el color del <body>, que vive
          FUERA del panel y es casi negro. Sobre fondo oscuro, el nombre del tema
          se volvía invisible. */}
      <span className="min-w-0 truncate text-sm text-foreground" title={item.nombre}>
        {item.nombre}
      </span>
      <span className="hidden h-1.5 rounded-full bg-muted sm:block">
        <span
          className="block h-full rounded-full"
          style={{
            width: `${item.tasaError}%`,
            backgroundColor: n.color,
            boxShadow: `0 0 12px ${n.brillo}`,
          }}
        />
      </span>
      <span className="flex flex-col items-end leading-tight">
        <span
          className="text-sm font-semibold tabular-nums"
          style={{ color: n.color, textShadow: `0 0 16px ${n.brillo}` }}
        >
          {item.tasaError}%
        </span>
        <span className="text-[10px] tabular-nums text-muted-foreground">
          {item.total} resp
        </span>
      </span>
    </div>
  )
}
