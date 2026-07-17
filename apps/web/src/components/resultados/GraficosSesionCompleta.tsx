'use client'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { cn } from '@/lib/utils'

/**
 * Gráficos del Panel de Sesión Completa.
 * Combina los datos de los 3 intentos (psicométrico + personalidad + axiológico)
 * en visualizaciones integradas.
 *
 * Gráficos:
 * 1. Radar cross-examen — 8 dimensiones que agregan capacidad cognitiva
 *    (psi), coherencia de personalidad y coincidencia axiológica en un solo
 *    perfil global.
 * 2. Gauge doble (Personalidad ↔ Axiológico) — muestra los dos puntajes en
 *    el eje "valores militares" para visualizar la distancia cross-examen.
 */

type PorBloque = {
  bloqueId: number
  nombre: string
  respondidos: number
  aciertos: number | null
  porcentaje: number | null
}

type AnalisisTema = {
  tema: string
  totalReactivos: number
  puntajeDireccion: number
  coherencia: number
  contradiccionesDetectadas: number
}

type ResultadoIntento = {
  intentoId: number
  examen: { id: number; nombre: string; calificable: boolean }
  porcentajeAciertos: number | null
  porBloque?: PorBloque[]
  analisisConsistencia?: {
    porTema?: AnalisisTema[]
    scoreCoincidenciaIdeal?: {
      score: number
      etiqueta: 'alta' | 'media' | 'baja'
    } | null
  }
}

type DistanciaCrossExamen = {
  temaComun: string
  puntajePersonalidad: number
  puntajeAxiologico: number
  distancia: number
  interpretacion: 'coherente' | 'aceptable' | 'divergente'
}

export function GraficosSesionCompleta({
  intentos,
  distanciaCrossExamen,
}: {
  intentos: ResultadoIntento[]
  distanciaCrossExamen: DistanciaCrossExamen | null
}) {
  return (
    <section className="mt-6 space-y-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-4 w-1 rounded bg-accent" />
        <h2 className="text-sm font-semibold text-foreground">
          Perfil visual de la sesión
        </h2>
      </div>

      <RadarCrossExamen intentos={intentos} />

      {distanciaCrossExamen && <GaugeDualCrossExamen distancia={distanciaCrossExamen} />}
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Radar cross-examen: 8 dimensiones del perfil integrado
   Cada eje se calcula normalizando los datos disponibles del
   intento correspondiente a esa dimensión.
   ═══════════════════════════════════════════════════════════ */

// Mapeo tema BD → dimensión del radar (compatible con GraficosAutoevaluacion)
const TEMA_A_DIMENSION: Record<string, string> = {
  // Emocional (§4.6.1)
  manejo_emocional: 'Emocional',
  control_impulsos: 'Emocional',
  autoestima: 'Emocional',
  autocontrol_general: 'Emocional',
  suicidio: 'Emocional',
  sentido_vida: 'Emocional',
  // Estrés (§4.6.2)
  estres: 'Estrés',
  presion: 'Estrés',
  tolerancia_frustracion: 'Estrés',
  ansiedad: 'Estrés',
  resiliencia: 'Estrés',
  // Liderazgo (§4.6.4)
  liderazgo: 'Liderazgo',
  autoritarismo: 'Liderazgo',
  manejo_autoridad: 'Liderazgo',
  // Ética (§4.6.5)
  valores_personales: 'Ética',
  principios_eticos: 'Ética',
  honestidad: 'Ética',
  integridad: 'Ética',
  // Relaciones (§4.6.7)
  relaciones_familiares: 'Relaciones',
  relaciones_interpersonales: 'Relaciones',
  cooperacion_trabajo_equipo: 'Relaciones',
  empatia: 'Relaciones',
  // Adaptabilidad (§4.6.8)
  adaptabilidad: 'Adaptabilidad',
  disciplina: 'Adaptabilidad',
  tolerancia_al_cambio: 'Adaptabilidad',
  seguimiento_ordenes: 'Adaptabilidad',
  // Valores militares — cross entre pers y axio
  valores_militares: 'Valores mil.',
}

function RadarCrossExamen({ intentos }: { intentos: ResultadoIntento[] }) {
  // Buscar cada intento por su tipo
  const psicometrico = intentos.find((i) => i.examen.calificable)
  const personalidad = intentos.find((i) =>
    i.examen.nombre.toLowerCase().includes('personalidad'),
  )
  const axiologico = intentos.find(
    (i) =>
      i.examen.nombre.toLowerCase().includes('axiológico') ||
      i.examen.nombre.toLowerCase().includes('axiologico'),
  )

  // Calcular valor por dimensión
  const dimensiones = new Map<string, number>()

  // Cognición viene del psicométrico (promedio de bloques)
  if (psicometrico?.porBloque && psicometrico.porBloque.length > 0) {
    const bloquesConDatos = psicometrico.porBloque.filter((b) => b.porcentaje !== null)
    if (bloquesConDatos.length > 0) {
      const promedio =
        bloquesConDatos.reduce((s, b) => s + (b.porcentaje ?? 0), 0) / bloquesConDatos.length
      dimensiones.set('Cognición', Math.round(promedio))
    }
  }

  // Personalidad — agrupar temas por dimensión y calcular coherencia promedio
  if (personalidad?.analisisConsistencia?.porTema) {
    const agrupado = new Map<string, { total: number; conteo: number }>()
    for (const t of personalidad.analisisConsistencia.porTema) {
      const dim = TEMA_A_DIMENSION[t.tema]
      if (!dim) continue
      const acc = agrupado.get(dim) ?? { total: 0, conteo: 0 }
      acc.total += t.coherencia
      acc.conteo += 1
      agrupado.set(dim, acc)
    }
    for (const [dim, v] of agrupado.entries()) {
      // Si ya existe (ej: Valores mil. viene también de axio), promediar
      const previo = dimensiones.get(dim)
      const nuevo = Math.round(v.total / v.conteo)
      dimensiones.set(dim, previo !== undefined ? Math.round((previo + nuevo) / 2) : nuevo)
    }
  }

  // Axiológico — score de coincidencia como dimensión "Valores militares"
  if (axiologico?.analisisConsistencia?.scoreCoincidenciaIdeal) {
    const scoreAxio = axiologico.analisisConsistencia.scoreCoincidenciaIdeal.score
    const previo = dimensiones.get('Valores mil.')
    dimensiones.set(
      'Valores mil.',
      previo !== undefined ? Math.round((previo + scoreAxio) / 2) : scoreAxio,
    )
  }

  // Ordenar por convención visual (Cognición primero, después ejes psicológicos)
  const ORDEN = ['Cognición', 'Emocional', 'Estrés', 'Adaptabilidad', 'Liderazgo', 'Ética', 'Relaciones', 'Valores mil.']
  const datos = ORDEN.filter((d) => dimensiones.has(d)).map((d) => ({
    dimension: d,
    valor: dimensiones.get(d)!,
  }))

  if (datos.length < 3) {
    return (
      <article className="rounded-xl border border-border bg-card p-5">
        <p className="text-xs text-muted-foreground">
          No hay datos suficientes para el perfil integrado — se requiere completar los
          tres exámenes con al menos algunos reactivos por dimensión.
        </p>
      </article>
    )
  }

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Perfil integrado de la sesión completa
        </h3>
        <p className="text-xs text-muted-foreground">
          {datos.length} dimensiones combinando capacidad cognitiva del psicométrico,
          coherencia de personalidad y alineación axiológica
        </p>
      </div>

      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={datos} outerRadius="75%">
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fill: 'var(--foreground)', fontSize: 12, fontWeight: 500 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: 'var(--muted-foreground)', fontSize: 9 }}
              stroke="var(--border)"
            />
            <Radar
              name="Perfil integrado"
              dataKey="valor"
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
              formatter={(value) => [`${value}/100`, 'Nivel']}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 text-[10px] text-muted-foreground md:grid-cols-3">
        <div>
          <span className="font-semibold text-foreground">Cognición:</span> promedio
          de aciertos por bloque (psicométrico).
        </div>
        <div>
          <span className="font-semibold text-foreground">Ejes psicológicos:</span>{' '}
          promedio de coherencia por dimensión (personalidad).
        </div>
        <div>
          <span className="font-semibold text-foreground">Valores mil.:</span>{' '}
          promedio de coherencia + coincidencia con perfil ideal (axiológico).
        </div>
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Gauge doble Personalidad ↔ Axiológico
   Muestra los dos puntajes lado a lado en gauges circulares
   con la distancia calculada en el medio.
   ═══════════════════════════════════════════════════════════ */

function GaugeDualCrossExamen({ distancia }: { distancia: DistanciaCrossExamen }) {
  const colorInterpretacion =
    distancia.interpretacion === 'coherente'
      ? 'var(--military)'
      : distancia.interpretacion === 'aceptable'
      ? 'var(--accent)'
      : 'var(--destructive)'

  const etiquetaInterpretacion =
    distancia.interpretacion === 'coherente'
      ? 'Coherente'
      : distancia.interpretacion === 'aceptable'
      ? 'Aceptable'
      : 'Divergente'

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Cruce Personalidad ↔ Axiológico
          </h3>
          <p className="text-xs text-muted-foreground">
            Tema común: {distancia.temaComun.replace(/_/g, ' ')}
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
          style={{
            backgroundColor: `color-mix(in oklab, ${colorInterpretacion} 15%, transparent)`,
            color: colorInterpretacion,
          }}
        >
          {etiquetaInterpretacion}
        </span>
      </div>

      <div className="grid grid-cols-3 items-center gap-4">
        {/* Gauge Personalidad */}
        <GaugeCircular
          valor={distancia.puntajePersonalidad}
          label="Personalidad"
          sub="Perfil declarado"
          color="var(--accent)"
        />

        {/* Barra de distancia en el medio */}
        <div className="flex flex-col items-center">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Distancia
          </div>
          <div
            className="text-4xl font-semibold tracking-tight"
            style={{ color: colorInterpretacion }}
          >
            {distancia.distancia}
          </div>
          <div className="mt-1 text-[10px] text-muted-foreground">puntos</div>

          {/* Barra visual entre ambos */}
          <div className="mt-3 h-1 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(100, distancia.distancia * 2)}%`,
                backgroundColor: colorInterpretacion,
              }}
            />
          </div>
          <div className="mt-1 flex w-full justify-between text-[9px] text-muted-foreground">
            <span>0</span>
            <span>25</span>
            <span>50+</span>
          </div>
        </div>

        {/* Gauge Axiológico */}
        <GaugeCircular
          valor={distancia.puntajeAxiologico}
          label="Axiológico"
          sub="Perfil aceptado"
          color="var(--military)"
        />
      </div>

      <div
        className={cn(
          'mt-4 rounded-md border-l-2 p-3 text-xs',
        )}
        style={{
          borderLeftColor: colorInterpretacion,
          backgroundColor: `color-mix(in oklab, ${colorInterpretacion} 6%, transparent)`,
        }}
      >
        <p className="font-semibold text-foreground">
          {distancia.interpretacion === 'coherente' &&
            'Lo que dices en Personalidad coincide con lo que aceptas en Axiológico. Perfil íntegro.'}
          {distancia.interpretacion === 'aceptable' &&
            'Existe cierta variación entre tu autoconcepto y los perfiles que aceptas. Aún dentro de lo esperado.'}
          {distancia.interpretacion === 'divergente' &&
            'Tu autoconcepto en Personalidad y los perfiles que aceptas en Axiológico apuntan en direcciones distintas — inconsistencia estructural.'}
        </p>
      </div>
    </article>
  )
}

/* Gauge circular pequeño — usado dentro del cruce cross-examen.
   Semi-donut similar al del panel de autoevaluación pero más chico. */
function GaugeCircular({
  valor,
  label,
  sub,
  color,
}: {
  valor: number
  label: string
  sub: string
  color: string
}) {
  const datos = [
    { name: 'v', value: valor },
    { name: 'r', value: 100 - valor },
  ]
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={datos}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={38}
              outerRadius={58}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill={color} />
              <Cell fill="var(--border)" fillOpacity={0.3} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            {valor}
            <span className="text-xs text-muted-foreground">/100</span>
          </p>
        </div>
      </div>
      <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color }}>
        {label}
      </p>
      <p className="text-[10px] text-muted-foreground">{sub}</p>
    </div>
  )
}
