'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { HeaderPrivado } from '../HeaderPrivado'
import { FondoGuia } from '@/components/guia/FondoGuia'
import { AlertCircle, ArrowLeft, Loader2, TrendingUp } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   "Tu avance" — el progreso por tema (semáforo).

   Lee GET /examenes/practica/cultural/mi-avance: por cada materia del
   plantel, sus capítulos con un nivel de dominio. Mide qué tan BIEN va el
   aspirante en lo que ya contestó (práctica + simulacro), nunca cuántos
   reactivos hay. El "sentir que avanza" es ver los temas ponerse verdes.

   Viste el mismo traje que el índice de la Guía del Aspirante: fondo oscuro
   con halo dorado, escudo tenue sangrando por la derecha y tarjeta-hero.
   La clase `dark` del envoltorio voltea los tokens del sistema a su versión
   oscura, así que el header privado y el semáforo se pintan solos.

   El escudo del fondo es el del PLANTEL del aspirante (no el de la UDEFA):
   esta pantalla habla de su escuela, así que se personaliza.
   ═══════════════════════════════════════════════════════════ */

type Nivel = 'dominado' | 'en_progreso' | 'fragil' | 'sin_empezar'

type CapituloAvance = {
  capituloId: number
  numero: number
  titulo: string
  nivel: Nivel
}

type MateriaAvance = {
  materia: string
  dominados: number
  total: number
  capitulos: CapituloAvance[]
}

type Avance = { plantel: string; materias: MateriaAvance[] }

/** Cada nivel con su color de marca (verde militar, dorado, rojo, gris).
 *  Son tokens del sistema: bajo `dark` toman solos su versión oscura. */
const NIVEL: Record<Nivel, { etiqueta: string; punto: string; texto: string; barra: string }> = {
  dominado: { etiqueta: 'Dominado', punto: 'bg-military', texto: 'text-military', barra: 'bg-military' },
  en_progreso: { etiqueta: 'En progreso', punto: 'bg-accent', texto: 'text-accent', barra: 'bg-accent' },
  fragil: { etiqueta: 'Frágil', punto: 'bg-destructive', texto: 'text-destructive', barra: 'bg-destructive' },
  sin_empezar: { etiqueta: 'Sin empezar', punto: 'bg-white/20', texto: 'text-[#8A8579]', barra: 'bg-white/[0.08]' },
}

const ORDEN_BARRA: Nivel[] = ['dominado', 'en_progreso', 'fragil', 'sin_empezar']

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

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-10">
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

/* ── El cuerpo, ya con datos ──────────────────────────────────────────── */

function Contenido({ avance }: { avance: Avance }) {
  // Avance global, para el renglón del hero: mismo criterio que cada materia
  // (temas dominados), pero sumando todas.
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
          <span className="font-semibold text-[#F7F3EA]">{avance.plantel}</span>. Se
          llena conforme practicas — no cuenta cuántos reactivos hay, sino qué tan
          bien vas en lo que ya contestaste.
        </p>

        {/* Avance global. En la primera visita no se muestra: un "0 de N" sólo
            consigue que se sienta cuesta arriba. */}
        {total > 0 && dominados > 0 && (
          <div className="mt-5 flex min-w-[220px] items-center gap-3">
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
            Haz una práctica o un simulacro y aquí verás tus temas irse pintando de
            verde.
          </p>
          <Link
            href="/inicio/practica-cultural"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C99A3B] hover:underline"
          >
            Empezar a practicar
          </Link>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-5">
          {avance.materias.map((m) => (
            <MateriaCard key={m.materia} materia={m} />
          ))}
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-[#8A8579]">
        Un tema se pone verde cuando lo contestas bien de forma sostenida. Si uno
        se queda en rojo, el repaso espaciado te lo irá devolviendo hasta que lo
        domines.
      </p>
    </>
  )
}

/* ── Tarjeta de una materia: barra de avance + lista de temas ─────────── */

function MateriaCard({ materia }: { materia: MateriaAvance }) {
  // Cuántos capítulos hay en cada nivel, para repartir la barra.
  const conteo = ORDEN_BARRA.reduce(
    (acc, n) => ({ ...acc, [n]: materia.capitulos.filter((c) => c.nivel === n).length }),
    {} as Record<Nivel, number>,
  )

  return (
    <section className="overflow-hidden rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-[#F7F3EA]">{materia.materia}</h2>
        <span className="shrink-0 text-xs font-medium tabular-nums text-[#B8B2A4]">
          {materia.dominados} de {materia.total} temas dominados
        </span>
      </div>

      {/* Barra segmentada de avance */}
      <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
        {ORDEN_BARRA.map((n) =>
          conteo[n] > 0 ? (
            <div key={n} className={NIVEL[n].barra} style={{ flex: conteo[n] }} />
          ) : null,
        )}
      </div>

      {/* Lista de temas */}
      <div className="mt-4">
        {materia.capitulos.map((c) => (
          <div
            key={c.capituloId}
            className="flex items-center gap-3 border-t border-white/[0.06] py-3"
          >
            <span className={cn('h-2.5 w-2.5 shrink-0 rounded-full', NIVEL[c.nivel].punto)} />
            <span className="w-6 shrink-0 text-right text-xs tabular-nums text-[#8A8579]">
              {String(c.numero).padStart(2, '0')}
            </span>
            <span className="flex-1 text-sm text-[#F7F3EA]">{c.titulo}</span>
            <span className={cn('shrink-0 text-xs font-medium', NIVEL[c.nivel].texto)}>
              {NIVEL[c.nivel].etiqueta}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
