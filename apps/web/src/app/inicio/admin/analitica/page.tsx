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
import { AlertCircle, BarChart3, Loader2, TrendingUp } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos (espejo del payload de GET /admin/analitica)
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
   Página
   ═══════════════════════════════════════════════════════════ */

export default function AnaliticaPage() {
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

  if (cargando) {
    return (
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-sm">Cargando analítica…</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <p className="text-sm text-destructive">{error || 'Sin datos'}</p>
      </div>
    )
  }

  const sinDatos = data.totalRespuestasCalificadas === 0

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Analítica de errores
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Dónde fallan más los aspirantes. Solo cubre el{' '}
          <span className="font-medium text-foreground">Psicométrico</span> — es
          el único examen con respuestas correctas. Personalidad y Axiológico
          miden perfil, no aciertos, así que no aparecen aquí.
        </p>
      </div>

      {sinDatos ? (
        <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-10 text-center">
          <BarChart3 className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
          <p className="text-sm font-medium text-foreground">
            Aún no hay respuestas calificadas
          </p>
          <p className="mx-auto mt-1 max-w-md text-xs text-muted-foreground">
            En cuanto los aspirantes empiecen a resolver el simulador
            psicométrico, aquí verás qué reactivos, bloques y temas cuestan más.
          </p>
        </div>
      ) : (
        <>
          {/* Resumen */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span>
              Basado en{' '}
              <span className="font-semibold text-foreground">
                {data.totalRespuestasCalificadas.toLocaleString('es-MX')}
              </span>{' '}
              respuestas calificadas
            </span>
          </div>

          {/* Errores por bloque */}
          <Section titulo="% de error por bloque">
            <GraficaError items={data.erroresPorBloque.map((b) => ({
              nombre: b.nombre,
              tasaError: b.tasaError,
              total: b.total,
            }))} />
          </Section>

          {/* Errores por tema */}
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

          {/* Reactivos más fallados */}
          <Section titulo="Reactivos más fallados">
            <p className="mb-3 text-xs text-muted-foreground">
              Ordenados por tasa de error. Si un reactivo lo falla casi todo el
              mundo, revísalo — puede estar mal redactado o con la respuesta
              correcta mal marcada.
            </p>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Enunciado</th>
                      <th className="px-3 py-2 font-semibold">Bloque</th>
                      <th className="px-3 py-2 font-semibold">Tema</th>
                      <th className="px-3 py-2 text-right font-semibold">
                        Respuestas
                      </th>
                      <th className="px-3 py-2 text-right font-semibold">
                        % error
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.reactivosMasFallados.map((r) => (
                      <tr
                        key={r.reactivoId}
                        className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
                      >
                        <td className="max-w-md px-3 py-2 text-xs text-foreground">
                          <p className="line-clamp-2">{r.enunciado}</p>
                        </td>
                        <td className="px-3 py-2 text-xs text-muted-foreground">
                          {r.bloqueNombre ?? '—'}
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
          </Section>
        </>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes
   ═══════════════════════════════════════════════════════════ */

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
              formatter={(v: number, _n, item) => [
                `${v}% error (${item?.payload?.total ?? 0} respuestas)`,
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
