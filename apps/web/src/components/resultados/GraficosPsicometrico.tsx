'use client'

import { useState } from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
  CartesianGrid,
} from 'recharts'

/**
 * Bloque de 3 gráficos para el PanelCalificable (psicométrico):
 * 1. Radar chart de los 4 bloques del examen (% de aciertos)
 * 2. Line chart del tiempo por reactivo a lo largo del examen
 * 3. Bar chart horizontal de los temas ordenados por % de aciertos
 */

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

export function GraficosPsicometrico({
  porBloque,
  porTema,
  metricasTemporales,
}: {
  porBloque: PorBloque[]
  porTema: PorTema[]
  metricasTemporales: MetricasTemporales
}) {
  return (
    <section className="mt-8 space-y-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-4 w-1 rounded bg-accent" />
        <h2 className="text-sm font-semibold text-foreground">
          Análisis visual del intento
        </h2>
      </div>

      {/* Grid responsive: radar + line en fila, bar full-width abajo */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RadarBloques porBloque={porBloque} />
        <LineTiempos metricasTemporales={metricasTemporales} />
      </div>

      {porTema.length > 1 && <ListaTemas porTema={porTema} />}
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   1. Radar chart de los 4 bloques
   Muestra el % de aciertos por bloque con banda "sólida"
   sombreada entre 65-85% (rango típico de aspirantes
   preparados). Sirve como referencia visual.
   ═══════════════════════════════════════════════════════════ */

function RadarBloques({ porBloque }: { porBloque: PorBloque[] }) {
  const datos = porBloque
    .filter((b) => b.porcentaje !== null)
    .map((b) => ({
      // Nombre corto para el label
      bloque: acortarNombreBloque(b.nombre),
      pct: b.porcentaje ?? 0,
    }))

  if (datos.length === 0) {
    return null
  }

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Perfil por bloque
        </h3>
        <p className="text-xs text-muted-foreground">
          % de aciertos por área del psicométrico
        </p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={datos} outerRadius="75%">
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis
              dataKey="bloque"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: 'var(--muted-foreground)', fontSize: 9 }}
              stroke="var(--border)"
            />
            <Radar
              name="Aciertos %"
              dataKey="pct"
              stroke="var(--accent)"
              fill="var(--accent)"
              fillOpacity={0.4}
              strokeWidth={2}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value) => [`${value}%`, 'Aciertos']}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-muted-foreground">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        <span>Tu perfil · Máximo 100%</span>
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   2. Line chart del tiempo por reactivo
   Muestra el ritmo real durante el examen. Se marca:
   - Línea horizontal con el tiempo promedio
   - Área sombreada de la segunda mitad si se detectó fatiga
   ═══════════════════════════════════════════════════════════ */

export function LineTiempos({
  metricasTemporales,
}: {
  metricasTemporales: MetricasTemporales
}) {
  const tiempos = metricasTemporales.tiempoPorReactivoMs
  if (tiempos.length === 0) {
    return null
  }

  // Convertimos ms → segundos y construimos el shape de recharts
  const datos = tiempos.map((tMs, i) => ({
    reactivo: i + 1,
    tiempoSeg: Math.round(tMs / 100) / 10, // 1 decimal
  }))

  const promedioSeg = Math.round(metricasTemporales.tiempoPromedioReactivoMs / 1000)
  const puntoMedio = Math.floor(tiempos.length / 2)
  const detectoFatiga = metricasTemporales.patronFatigaDetectado

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Ritmo a lo largo del examen
        </h3>
        <p className="text-xs text-muted-foreground">
          Segundos por reactivo · promedio {promedioSeg}s
        </p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datos} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.4} />
            <XAxis
              dataKey="reactivo"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              stroke="var(--border)"
              label={{
                value: 'Reactivo',
                position: 'insideBottom',
                offset: -5,
                fill: 'var(--muted-foreground)',
                fontSize: 10,
              }}
            />
            <YAxis
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              stroke="var(--border)"
              label={{
                value: 'seg',
                angle: -90,
                position: 'insideLeft',
                fill: 'var(--muted-foreground)',
                fontSize: 10,
              }}
            />
            {/* Área sombreada si hubo fatiga en la 2ª mitad */}
            {detectoFatiga && (
              <ReferenceArea
                x1={puntoMedio + 1}
                x2={tiempos.length}
                fill="var(--destructive)"
                fillOpacity={0.08}
              />
            )}
            {/* Línea promedio */}
            <ReferenceLine
              y={promedioSeg}
              stroke="var(--military)"
              strokeDasharray="3 3"
              label={{
                value: 'Promedio',
                position: 'right',
                fill: 'var(--military)',
                fontSize: 10,
              }}
            />
            <Line
              type="monotone"
              dataKey="tiempoSeg"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: 'var(--accent)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value) => [`${value}s`, 'Tiempo']}
              labelFormatter={(label) => `Reactivo ${label}`}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[10px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-0.5 w-4 bg-accent" />
          Tu ritmo
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-0.5 w-4 border-t-2 border-dashed border-military" />
          Promedio
        </span>
        {detectoFatiga && (
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 bg-destructive/20" />
            Fatiga 2ª mitad
          </span>
        )}
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   3. Lista de temas por % de aciertos
   Un renglón por tema —nombre, barra de color y cifra— en lugar de
   la gráfica de barras de recharts, que encimaba las etiquetas cuando
   había muchos temas o nombres largos. De menor a mayor: lo primero
   que hay que estudiar queda arriba. Acotada a los 12 con más error,
   con opción de ver todos.
   ═══════════════════════════════════════════════════════════ */

function ListaTemas({ porTema }: { porTema: PorTema[] }) {
  const [verTodos, setVerTodos] = useState(false)

  const datos = porTema
    .filter((t) => t.porcentaje !== null)
    .map((t) => ({
      tema: capitalizar(t.tema.replace(/_/g, ' ')),
      pct: t.porcentaje ?? 0,
      aciertos: t.aciertos ?? 0,
      respondidos: t.respondidos,
    }))
    .sort((a, b) => a.pct - b.pct)

  if (datos.length === 0) {
    return null
  }

  const TOPE = 12
  const hayMas = datos.length > TOPE
  const visibles = verTodos ? datos : datos.slice(0, TOPE)

  const colorPorPct = (pct: number) =>
    pct >= 80 ? 'var(--military)' : pct >= 60 ? 'var(--accent)' : 'var(--destructive)'

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Desempeño por tema
        </h3>
        <p className="text-xs text-muted-foreground">
          De menor a mayor aciertos · verde ≥80%, latón 60-79%, rojo &lt;60%
        </p>
      </div>

      <ul className="divide-y divide-border">
        {visibles.map((d) => (
          <li key={d.tema} className="flex items-center gap-3 py-2">
            <span
              className="min-w-0 truncate text-sm text-foreground"
              style={{ flex: '0 0 42%' }}
              title={d.tema}
            >
              {d.tema}
            </span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <span
                className="block h-full rounded-full"
                style={{ width: `${d.pct}%`, backgroundColor: colorPorPct(d.pct) }}
              />
            </span>
            <span
              className="shrink-0 text-right text-xs tabular-nums text-muted-foreground"
              style={{ minWidth: 74 }}
            >
              {d.pct}% · {d.aciertos}/{d.respondidos}
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
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════ */

/**
 * Los nombres de los bloques en BD son largos ("Analogías Verbales y Cultura
 * General"). Para el radar chart necesitamos etiquetas cortas que quepan
 * bien en el eje angular.
 */
function acortarNombreBloque(nombre: string): string {
  const acortadores: Array<[RegExp, string]> = [
    [/analog[íi]a/i, 'Analogías'],
    [/sin[óo]nim|ant[óo]nim/i, 'Sinónimos'],
    [/l[óo]gico.?matem/i, 'Lógico'],
    [/abstract/i, 'Abstracto'],
    [/personalidad/i, 'Personalidad'],
    [/axiol[óo]gic/i, 'Axiológico'],
  ]
  for (const [regex, corto] of acortadores) {
    if (regex.test(nombre)) return corto
  }
  // Fallback: primer palabra + primeras 8 letras
  const primeraPalabra = nombre.split(/\s+/)[0] ?? nombre
  return primeraPalabra.length > 10 ? primeraPalabra.slice(0, 10) : primeraPalabra
}

/**
 * Pone en mayúscula la primera letra del nombre del tema. Los temas vienen de
 * BD en minúsculas y con guion bajo ("algebra_lineal"); tras cambiar "_" por
 * espacio quedan en minúscula, y en la lista se veían feos empezando en minúscula.
 */
function capitalizar(texto: string): string {
  if (!texto) return texto
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}