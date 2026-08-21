'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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
import { ChartTactil } from '@/components/ChartTactil'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  BookOpen,
  Brain,
  Clock,
  ListChecks,
  Loader2,
  Scale,
  Star,
  UserCircle,
  Users,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type Stats = {
  usuarios: { total: number; activos30d: number }
  sesiones: { total: number; completadas: number; abandonadas: number }
  intentos: {
    total: number
    porFase: Array<{ examenId: number; nombre: string; total: number }>
  }
  reactivos: {
    total: number
    cultural: number
    porFase: Array<{ examenId: number; nombre: string; total: number }>
  }
  distribucionPorPlantel: Array<{
    plantelId: number | null
    plantelNombre: string
    usuarios: number
  }>
  recientes: Array<{
    id: number
    estado: string
    createdAt: string
    updatedAt: string
    usuario: { nombre: string; email: string }
    plantel: { nombre: string } | null
  }>
}

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function AdminHomePage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Stats>('/admin/stats')
      .then((data) => {
        setStats(data)
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
        <p className="text-sm">Cargando métricas…</p>
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <p className="text-sm text-destructive">{error || 'Sin datos'}</p>
      </div>
    )
  }

  const tasaCompletitud =
    stats.sesiones.total > 0
      ? Math.round((stats.sesiones.completadas / stats.sesiones.total) * 100)
      : 0

  // El banco psicológico = suma de las 3 fases (no `reactivos.total`, que
  // incluye lo cultural). Se calcula igual que el badge del menú para que
  // ambos muestren el mismo número.
  const reactivosPsico = stats.reactivos.porFase.reduce(
    (acc, f) => acc + f.total,
    0,
  )

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pulso general de la plataforma. Actualizado al momento.
        </p>
      </div>

      {/* Cards grandes */}
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatCard
          icon={<Users className="h-4 w-4 text-accent" />}
          titulo="Usuarios"
          valor={stats.usuarios.total}
          sub={`${stats.usuarios.activos30d} activos últimos 30d`}
          href="/inicio/admin/usuarios"
        />
        <StatCard
          icon={<Star className="h-4 w-4 text-accent" />}
          titulo="Sesiones"
          valor={stats.sesiones.total}
          sub={`${stats.sesiones.completadas} completadas (${tasaCompletitud}%) · ${stats.sesiones.abandonadas} abandonadas`}
        />
        <StatCard
          icon={<Clock className="h-4 w-4 text-accent" />}
          titulo="Intentos"
          valor={stats.intentos.total}
          sub="respuestas registradas totales"
        />
        <StatCard
          icon={<ListChecks className="h-4 w-4 text-accent" />}
          titulo="Banco psicológico"
          valor={reactivosPsico}
          sub="reactivos · las 3 fases"
          href="/inicio/admin/reactivos"
        />
        <StatCard
          icon={<BookOpen className="h-4 w-4 text-accent" />}
          titulo="Banco cultural"
          valor={stats.reactivos.cultural}
          sub="reactivos · por libro"
          href="/inicio/admin/banco-cultural"
        />
      </div>

      {/* Reactivos por fase */}
      <Section titulo="Banco por fase">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <FaseCard
            icon={<Brain className="h-5 w-5 text-sky-500" />}
            label="Psicométrico"
            reactivos={
              stats.reactivos.porFase.find((f) => f.examenId === 1)?.total ?? 0
            }
            intentos={
              stats.intentos.porFase.find((f) => f.examenId === 1)?.total ?? 0
            }
          />
          <FaseCard
            icon={<UserCircle className="h-5 w-5 text-violet-500" />}
            label="Personalidad"
            reactivos={
              stats.reactivos.porFase.find((f) => f.examenId === 2)?.total ?? 0
            }
            intentos={
              stats.intentos.porFase.find((f) => f.examenId === 2)?.total ?? 0
            }
          />
          <FaseCard
            icon={<Scale className="h-5 w-5 text-amber-500" />}
            label="Axiológico"
            reactivos={
              stats.reactivos.porFase.find((f) => f.examenId === 3)?.total ?? 0
            }
            intentos={
              stats.intentos.porFase.find((f) => f.examenId === 3)?.total ?? 0
            }
          />
        </div>
      </Section>

      {/* Distribución por plantel */}
      <Section titulo="Distribución de aspirantes por plantel">
        {stats.distribucionPorPlantel.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border/70 p-6 text-center text-sm text-muted-foreground">
            No hay usuarios registrados aún.
          </p>
        ) : (
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <ChartTactil style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer>
                <BarChart
                  data={stats.distribucionPorPlantel}
                  layout="vertical"
                  margin={{ top: 4, right: 20, left: 20, bottom: 4 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--border)"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    stroke="var(--muted-foreground)"
                    fontSize={11}
                    allowDecimals={false}
                  />
                  <YAxis
                    dataKey="plantelNombre"
                    type="category"
                    stroke="var(--muted-foreground)"
                    fontSize={11}
                    width={180}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                    formatter={(v) => [`${Number(v)} aspirantes`, 'Usuarios']}
                  />
                  <Bar dataKey="usuarios" radius={[0, 4, 4, 0]}>
                    {stats.distribucionPorPlantel.map((_, idx) => (
                      <Cell key={idx} fill="var(--accent)" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartTactil>
          </div>
        )}
      </Section>

      {/* Actividad reciente */}
      <Section titulo="Últimas sesiones completadas">
        {stats.recientes.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border/70 p-6 text-center text-sm text-muted-foreground">
            Aún no hay sesiones completadas.
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-semibold">Aspirante</th>
                  <th className="px-3 py-2 font-semibold">Plantel</th>
                  <th className="px-3 py-2 font-semibold">Terminado</th>
                </tr>
              </thead>
              <tbody>
                {stats.recientes.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-border/40 last:border-b-0"
                  >
                    <td className="px-3 py-2">
                      <p className="font-semibold text-foreground">
                        {s.usuario.nombre}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {s.usuario.email}
                      </p>
                    </td>
                    <td className="px-3 py-2 text-xs text-muted-foreground">
                      {s.plantel?.nombre ?? '—'}
                    </td>
                    <td className="px-3 py-2 text-xs text-muted-foreground">
                      {new Date(s.updatedAt).toLocaleString('es-MX', {
                        day: '2-digit',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes
   ═══════════════════════════════════════════════════════════ */

function StatCard({
  icon,
  titulo,
  valor,
  sub,
  href,
}: {
  icon: React.ReactNode
  titulo: string
  valor: number
  sub: string
  href?: string
}) {
  const contenido = (
    <>
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {titulo}
        </p>
      </div>
      <p className="text-3xl font-semibold tracking-tight text-foreground">
        {valor.toLocaleString('es-MX')}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </>
  )
  const clase =
    'rounded-xl border border-border bg-card p-4 shadow-sm transition-colors'
  if (href) {
    return (
      <Link href={href} className={cn(clase, 'hover:border-accent')}>
        {contenido}
      </Link>
    )
  }
  return <div className={clase}>{contenido}</div>
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

function FaseCard({
  icon,
  label,
  reactivos,
  intentos,
}: {
  icon: React.ReactNode
  label: string
  reactivos: number
  intentos: number
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <p className="text-sm font-semibold text-foreground">{label}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-muted-foreground">Reactivos</p>
          <p className="font-semibold text-foreground">
            {reactivos.toLocaleString('es-MX')}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Intentos</p>
          <p className="font-semibold text-foreground">
            {intentos.toLocaleString('es-MX')}
          </p>
        </div>
      </div>
    </div>
  )
}
