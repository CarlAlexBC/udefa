'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { HeaderPrivado } from '../HeaderPrivado'
import { FondoGuia } from '@/components/guia/FondoGuia'
import {
  NIVEL,
  ORDEN_BARRA,
  conteoPorNivel,
  type Avance,
  type MateriaAvance,
} from '@/lib/avance'
import { AlertCircle, ArrowLeft, Loader2, TrendingUp } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   "Tu avance" — portada (nivel 1), con el mismo traje que la Guía.

   Mosaico de MATERIAS como tarjetas (igual que los capítulos de la Guía);
   al tocar una, se abre el detalle con sus temas en /inicio/avance/[materia].
   Mide qué tan BIEN va el aspirante en lo que ya contestó, nunca cuántos
   reactivos hay.
   ═══════════════════════════════════════════════════════════ */

export default function AvancePage() {
  const [avance, setAvance] = useState<Avance | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Avance>('/examenes/practica/cultural/mi-avance')
      .then(setAvance)
      .catch((err) => setError((err as Error).message))
  }, [])

  return (
    <div className="dark">
      <main className="min-h-screen bg-[#161513]">
        <HeaderPrivado />

        <div className="relative">
          <FondoGuia tono="dorado" sello="plantel" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-10">
            <Link
              href="/inicio"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver al panel
            </Link>

            {error ? (
              <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/10 p-8 text-center">
                <AlertCircle className="mx-auto mb-2 h-6 w-6 text-destructive" />
                <p className="font-semibold text-destructive">No pudimos cargar tu avance</p>
                <p className="mt-2 text-sm text-[#B8B2A4]">{error}</p>
              </div>
            ) : !avance ? (
              <div className="mt-6 flex min-h-[40vh] flex-col items-center justify-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-[#8A8579]" />
                <p className="text-sm text-[#8A8579]">Cargando tu avance...</p>
              </div>
            ) : (
              <Contenido avance={avance} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function Contenido({ avance }: { avance: Avance }) {
  // Avance global para el hero (mismo criterio que cada materia, sumando todas).
  const dominados = avance.materias.reduce((n, m) => n + m.dominados, 0)
  const total = avance.materias.reduce((n, m) => n + m.total, 0)
  const pct = total > 0 ? Math.round((dominados / total) * 100) : 0

  return (
    <>
      {/* Hero — mismo traje que el índice de la Guía */}
      <div className="mt-4 rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C99A3B]/40 bg-[#C99A3B]/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E6CF98]">
            <TrendingUp className="h-3 w-3" />
            Tu avance
          </span>
          <span
            title="El Monote te Guía"
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-black/25 ring-1 ring-[#C99A3B]/35"
          >
            <Image
              src="/monote-logo.jpeg"
              alt="El Monote te Guía"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F7F3EA] md:text-4xl">
          Cómo vas por tema
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B8B2A4] md:text-base">
          Tu dominio de cada tema de{' '}
          <span className="font-semibold text-[#F7F3EA]">{avance.plantel}</span>. Se llena
          conforme practicas — no cuenta cuántos reactivos hay, sino qué tan bien vas en lo
          que ya contestaste.
        </p>

        {/* En la primera visita no se muestra: un "0 de N" sólo se siente cuesta arriba. */}
        {total > 0 && dominados > 0 && (
          <div className="mt-5 flex items-center gap-3">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
              <span
                className="block h-full rounded-full bg-[#C99A3B] transition-[width] duration-500"
                style={{ width: `${pct}%` }}
              />
            </span>
            <span className="shrink-0 text-xs tabular-nums text-[#B8B2A4]">
              Llevas{' '}
              <span className="font-semibold text-[#F7F3EA]">
                {dominados} de {total}
              </span>{' '}
              temas dominados
            </span>
          </div>
        )}
      </div>

      {/* Leyenda */}
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#B8B2A4]">
        {ORDEN_BARRA.map((n) => (
          <span key={n} className="inline-flex items-center gap-1.5">
            <span className={cn('h-2.5 w-2.5 rounded-full', NIVEL[n].punto)} />
            {NIVEL[n].etiqueta}
          </span>
        ))}
      </div>

      {avance.materias.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-[#C99A3B]/20 bg-white/[0.02] p-10 text-center">
          <TrendingUp className="mx-auto mb-3 h-7 w-7 text-[#8A8579]" />
          <p className="font-semibold text-[#F7F3EA]">Aún no hay nada que mostrar</p>
          <p className="mx-auto mt-1 max-w-sm text-sm text-[#B8B2A4]">
            Haz una práctica o un simulacro y aquí verás tus temas irse pintando de verde.
          </p>
          <Link
            href="/inicio/practica-cultural"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#E6CF98] hover:underline"
          >
            Empezar a practicar
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {avance.materias.map((m) => (
            <MateriaCard key={m.materia} materia={m} />
          ))}
        </div>
      )}
    </>
  )
}

/* ── Tarjeta de una materia (nivel 1); abre su detalle al tocarla ──────
   Un medallón de mérito: aro segmentado por nivel (igual color que la
   leyenda de arriba), con los temas dominados al centro. El resplandor
   detrás toma el color del nivel que más pesa en esa materia, para que
   se lea de un vistazo sin tener que descifrar el aro primero. ───────── */

/** Hex real de cada nivel — el mismo que resuelven los tokens de NIVEL bajo
 *  `.dark` (esta pantalla siempre vive ahí). Se necesita en crudo porque
 *  conic-gradient y box-shadow no pueden tomar una clase de Tailwind. */
const NIVEL_HEX: Record<string, string> = {
  dominado: '#6B7530',
  en_progreso: '#C99A3B',
  fragil: '#EF4444',
  sin_empezar: 'rgba(255,255,255,0.1)',
}
/** Mismo color, en tripleta rgb — para el resplandor con alpha. */
const NIVEL_RGB: Record<string, string> = {
  dominado: '107,117,48',
  en_progreso: '201,154,59',
  fragil: '239,68,68',
  sin_empezar: '138,133,121',
}

function MateriaCard({ materia }: { materia: MateriaAvance }) {
  const conteo = conteoPorNivel(materia.capitulos)
  const total = materia.total

  // El aro: un conic-gradient con un tramo por nivel presente, en el mismo
  // orden que la leyenda (dominado → sin empezar).
  let acumulado = 0
  const tramos: string[] = []
  for (const n of ORDEN_BARRA) {
    if (conteo[n] === 0) continue
    const inicio = (acumulado / total) * 100
    acumulado += conteo[n]
    const fin = (acumulado / total) * 100
    tramos.push(`${NIVEL_HEX[n]} ${inicio}% ${fin}%`)
  }
  const aro = `conic-gradient(${tramos.join(', ')})`

  // El resplandor detrás toma el color del nivel más presente, para leerse
  // antes incluso de fijarse en los tramos del aro.
  let nivelDominante: (typeof ORDEN_BARRA)[number] = 'sin_empezar'
  let mejorConteo = -1
  for (const n of ORDEN_BARRA) {
    if (conteo[n] > mejorConteo) {
      mejorConteo = conteo[n]
      nivelDominante = n
    }
  }
  const resplandorRgb = NIVEL_RGB[nivelDominante]

  return (
    <Link
      href={`/inicio/avance/${encodeURIComponent(materia.materia)}`}
      className="group flex flex-col items-center gap-3 rounded-2xl p-3 text-center transition-transform duration-200 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div
        className="relative h-[104px] w-[104px] shrink-0 rounded-full"
        style={{
          boxShadow: `0 0 0 1px rgba(201,154,59,0.15), 0 10px 30px -8px rgba(${resplandorRgb},0.55)`,
        }}
      >
        {/* aro decorativo punteado, apenas insinuado */}
        <svg width="104" height="104" viewBox="0 0 104 104" className="absolute inset-0">
          <circle
            cx="52"
            cy="52"
            r="51"
            fill="none"
            stroke="#C99A3B"
            strokeWidth="1"
            strokeDasharray="1.8 3.6"
            opacity="0.5"
          />
        </svg>
        {/* aro de color: el dato real */}
        <div className="absolute inset-[7px] rounded-full" style={{ background: aro }} />
        {/* brillo de metal encima del aro, para que no se vea plano */}
        <div
          className="pointer-events-none absolute inset-[7px] rounded-full"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 45%)',
          }}
        />
        {/* centro: tapa el aro y deja sólo el borde de color visible */}
        <div
          className="absolute inset-4 flex flex-col items-center justify-center rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #2A2724, #171512 75%)',
            boxShadow: 'inset 0 0 0 1px rgba(201,154,59,0.28)',
          }}
        >
          <span className="text-[22px] font-bold leading-none text-[#F7F3EA]">
            {materia.dominados}
          </span>
          <span className="mt-0.5 text-[9px] text-[#8A8579]">de {total}</span>
        </div>
      </div>

      {/* listón, como un medallón de verdad */}
      <div
        className="-mt-2 h-[18px] w-[16px] opacity-90"
        style={{
          background: 'linear-gradient(180deg,#8A6A24,#5E4A18)',
          clipPath: 'polygon(0 0,100% 0,100% 78%,50% 100%,0 78%)',
        }}
      />

      <span className="text-balance text-[13px] font-semibold leading-snug text-[#F7F3EA]">
        {materia.materia}
      </span>
    </Link>
  )
}
