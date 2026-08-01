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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts'

/**
 * Bloque de gráficos para el PanelAutoevaluacion (personalidad y axiológico).
 *
 * Personalidad:
 *  1. Radar chart de las 8 dimensiones §4.6.X (agregado por eje)
 *  2. Donut chart del sesgo de respuesta (idealizado/aquiescencia/negativismo)
 *  3. Bar chart Sí vs No
 *
 * Axiológico:
 *  1. Gauge del score de coincidencia con perfil militar ideal (0-100)
 *  2. Radar chart de los 8 valores axiológicos si aparecen como temas granulares
 *     (por ahora solo hay `valores_militares` — se muestra como card simple)
 */

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

export function GraficosAutoevaluacion({
  analisisConsistencia,
  examenNombre,
}: {
  analisisConsistencia: AnalisisConsistencia
  examenNombre: string
}) {
  const esPersonalidad = examenNombre.toLowerCase().includes('personalidad')
  const esAxiologico = examenNombre.toLowerCase().includes('axiológico') || examenNombre.toLowerCase().includes('axiologico')

  return (
    <section className="mt-8 space-y-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-4 w-1 rounded bg-accent" />
        <h2 className="text-sm font-semibold text-foreground">
          Análisis visual del intento
        </h2>
      </div>

      {esPersonalidad && (
        <>
          <RadarDimensiones porTema={analisisConsistencia.porTema} />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {analisisConsistencia.sesgoRespuesta && (
              <DonutSesgo sesgo={analisisConsistencia.sesgoRespuesta} />
            )}
            {analisisConsistencia.sesgoRespuesta && (
              <BarSiNo sesgo={analisisConsistencia.sesgoRespuesta} />
            )}
          </div>
        </>
      )}

      {esAxiologico && analisisConsistencia.scoreCoincidenciaIdeal && (
        <GaugeCoincidencia scoreCI={analisisConsistencia.scoreCoincidenciaIdeal} />
      )}
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Radar chart de las 8 dimensiones §4.6.X (solo personalidad)
   Agrupa los 38+ temas granulares en 8 dimensiones psicológicas
   principales. Muestra el promedio de coherencia por dimensión.
   ═══════════════════════════════════════════════════════════ */

// Mapeo de tema BD → eje §4.6.X (basado en diagnostico-links.ts)
const TEMA_A_EJE: Record<string, string> = {
  // §4.6.1 Manejo emocional
  manejo_emocional: 'Emocional',
  control_impulsos: 'Emocional',
  autoestima: 'Emocional',
  autocontrol_general: 'Emocional',
  suicidio: 'Emocional',
  sentido_vida: 'Emocional',
  // §4.6.2 Estrés
  estres: 'Estrés',
  presion: 'Estrés',
  tolerancia_frustracion: 'Estrés',
  ansiedad: 'Estrés',
  resiliencia: 'Estrés',
  // §4.6.3 Influenciabilidad
  influencia_social: 'Influencia',
  manejo_critica: 'Influencia',
  dependencia_grupo: 'Influencia',
  // §4.6.4 Liderazgo
  liderazgo: 'Liderazgo',
  autoritarismo: 'Liderazgo',
  manejo_autoridad: 'Liderazgo',
  // §4.6.5 Valores personales
  valores_personales: 'Ética',
  principios_eticos: 'Ética',
  honestidad: 'Ética',
  integridad: 'Ética',
  // §4.6.6 Conductas de riesgo
  conductas_riesgo: 'Riesgo',
  impulsividad: 'Riesgo',
  adicciones: 'Riesgo',
  toma_riesgos: 'Riesgo',
  // §4.6.7 Relaciones
  relaciones_familiares: 'Relaciones',
  relaciones_interpersonales: 'Relaciones',
  cooperacion_trabajo_equipo: 'Relaciones',
  empatia: 'Relaciones',
  // §4.6.8 Adaptabilidad
  adaptabilidad: 'Adaptabilidad',
  disciplina: 'Adaptabilidad',
  tolerancia_al_cambio: 'Adaptabilidad',
  seguimiento_ordenes: 'Adaptabilidad',
  // Cross
  valores_militares: 'Valores',
}

function RadarDimensiones({ porTema }: { porTema: AnalisisTema[] }) {
  // Agrupar por eje y calcular promedio de coherencia
  const agrupado = new Map<string, { total: number; conteo: number; contradicciones: number }>()

  for (const t of porTema) {
    const eje = TEMA_A_EJE[t.tema]
    if (!eje) continue
    const acc = agrupado.get(eje) ?? { total: 0, conteo: 0, contradicciones: 0 }
    acc.total += t.coherencia
    acc.conteo += 1
    acc.contradicciones += t.contradiccionesDetectadas
    agrupado.set(eje, acc)
  }

  const datos = Array.from(agrupado.entries()).map(([eje, v]) => ({
    eje,
    coherencia: Math.round(v.total / v.conteo),
    contradicciones: v.contradicciones,
  }))

  if (datos.length < 3) return null

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Perfil por dimensión psicológica
        </h3>
        <p className="text-xs text-muted-foreground">
          Coherencia promedio por eje del examen de personalidad
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={datos} outerRadius="70%">
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis
              dataKey="eje"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: 'var(--muted-foreground)', fontSize: 9 }}
              stroke="var(--border)"
            />
            <Radar
              name="Coherencia"
              dataKey="coherencia"
              stroke="var(--military)"
              fill="var(--military)"
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
              formatter={(value, _n, item) => {
                const p = item.payload as { contradicciones: number }
                return [
                  `${value}% coherencia${p.contradicciones > 0 ? ` · ${p.contradicciones} contradicciones` : ''}`,
                  'Eje',
                ]
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        Cuanto más grande el perfil, más coherente eres a través de las dimensiones
      </p>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Donut del sesgo de respuesta (solo personalidad)
   Muestra la distribución del estilo: idealizado / aquiescencia /
   negativismo / realista.
   ═══════════════════════════════════════════════════════════ */

function DonutSesgo({ sesgo }: { sesgo: SesgoRespuesta }) {
  // Categorías del sesgo con sus colores
  const categorias = [
    {
      nombre: 'Realista',
      valor: 100 - Math.max(sesgo.indiceDeseabilidad, sesgo.porcentajeSi, sesgo.porcentajeNo),
      color: 'var(--military)',
      activa: !sesgo.perfilIdealizado && !sesgo.tieneSesgoAquiescencia && !sesgo.tieneSesgoNegativismo,
    },
    {
      nombre: 'Idealización',
      valor: sesgo.perfilIdealizado ? sesgo.indiceDeseabilidad - 65 : Math.max(0, sesgo.indiceDeseabilidad - 65),
      color: 'var(--destructive)',
      activa: sesgo.perfilIdealizado,
    },
    {
      nombre: 'Aquiescencia',
      valor: sesgo.tieneSesgoAquiescencia ? sesgo.porcentajeSi - 50 : 0,
      color: 'var(--accent)',
      activa: sesgo.tieneSesgoAquiescencia,
    },
    {
      nombre: 'Negativismo',
      valor: sesgo.tieneSesgoNegativismo ? sesgo.porcentajeNo - 50 : 0,
      color: 'oklch(0.55 0.12 30)',
      activa: sesgo.tieneSesgoNegativismo,
    },
  ].filter((c) => c.valor > 0)

  // Si no hay sesgos, mostrar 100% realista
  if (categorias.length === 0) {
    categorias.push({
      nombre: 'Realista',
      valor: 100,
      color: 'var(--military)',
      activa: true,
    })
  }

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Perfil de estilo de respuesta
        </h3>
        <p className="text-xs text-muted-foreground">
          Índice deseabilidad · {sesgo.indiceDeseabilidad}%
        </p>
      </div>

      <div className="h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categorias}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="valor"
              paddingAngle={2}
              strokeWidth={0}
            >
              {categorias.map((c, i) => (
                <Cell key={i} fill={c.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value) => [`${Math.round(Number(value))}%`, 'Peso']}
            />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
              formatter={(v) => (
                <span className="text-xs text-muted-foreground">{v}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Alertas del sesgo */}
      {(sesgo.perfilIdealizado || sesgo.tieneSesgoAquiescencia || sesgo.tieneSesgoNegativismo) && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {sesgo.perfilIdealizado && (
            <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-destructive">
              Idealización
            </span>
          )}
          {sesgo.tieneSesgoAquiescencia && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
              Aquiescencia
            </span>
          )}
          {sesgo.tieneSesgoNegativismo && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Negativismo
            </span>
          )}
        </div>
      )}
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Bar chart Sí vs No (solo personalidad)
   Distribución global de respuestas dicotómicas.
   ═══════════════════════════════════════════════════════════ */

function BarSiNo({ sesgo }: { sesgo: SesgoRespuesta }) {
  const datos = [
    {
      opcion: 'Sí',
      porcentaje: sesgo.porcentajeSi,
      color: sesgo.tieneSesgoAquiescencia ? 'var(--destructive)' : 'var(--military)',
    },
    {
      opcion: 'No',
      porcentaje: sesgo.porcentajeNo,
      color: sesgo.tieneSesgoNegativismo ? 'var(--destructive)' : 'var(--accent)',
    },
  ]

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Distribución global de respuestas
        </h3>
        <p className="text-xs text-muted-foreground">
          Rango aceptable: 40-60% cada opción · alerta si &gt;75%
        </p>
      </div>

      <div className="h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={datos} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} vertical={false} />
            <XAxis
              dataKey="opcion"
              tick={{ fill: 'var(--foreground)', fontSize: 12, fontWeight: 600 }}
              stroke="var(--border)"
            />
            <YAxis
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              stroke="var(--border)"
              unit="%"
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value) => [`${value}%`, 'Respuestas']}
            />
            <Bar dataKey="porcentaje" radius={[6, 6, 0, 0]}>
              {datos.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Gauge del score de coincidencia (solo axiológico)
   Muestra el 0-100 del perfil militar ideal como semi-donut.
   ═══════════════════════════════════════════════════════════ */

function GaugeCoincidencia({ scoreCI }: { scoreCI: ScoreCoincidenciaIdeal }) {
  // Semi-donut de 180° con el score
  const datos = [
    { name: 'Coincidencia', value: scoreCI.score },
    { name: 'Restante', value: 100 - scoreCI.score },
  ]

  const colorPrincipal =
    scoreCI.etiqueta === 'alta'
      ? 'var(--military)'
      : scoreCI.etiqueta === 'media'
      ? 'var(--accent)'
      : 'var(--destructive)'

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">
          Coincidencia con perfil militar ideal
        </h3>
        <p className="text-xs text-muted-foreground">
          Score derivado del cruce de tus respuestas con la polaridad esperada
        </p>
      </div>

      <div className="relative h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={datos}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={130}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill={colorPrincipal} />
              <Cell fill="var(--border)" fillOpacity={0.3} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Número gigante centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
          <p className="text-6xl font-semibold tracking-tight text-foreground">
            {scoreCI.score}
            <span className="text-2xl text-muted-foreground">/100</span>
          </p>
          <p
            className="mt-1 text-xs font-bold uppercase tracking-widest"
            style={{ color: colorPrincipal }}
          >
            Coincidencia {scoreCI.etiqueta}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
        <span>
          <strong style={{ color: 'var(--destructive)' }}>0-59</strong> Baja
        </span>
        <span>
          <strong style={{ color: 'var(--accent)' }}>60-79</strong> Media
        </span>
        <span>
          <strong style={{ color: 'var(--military)' }}>80-100</strong> Alta
        </span>
      </div>
    </article>
  )
}

/* El radar de "Coherencia por tema" vivía aquí. Se quitó: encimaba los nombres
   largos de los temas alrededor del radar y además repetía la lista limpia
   "Consistencia por tema" que ya vive en la página de resultados. */
