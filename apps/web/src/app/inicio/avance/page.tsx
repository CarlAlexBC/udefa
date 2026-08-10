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
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {avance.materias.map((m) => (
            <MateriaCard key={m.materia} materia={m} />
          ))}
        </div>
      )}
    </>
  )
}

/* ── Tarjeta de una materia (nivel 1); abre su detalle al tocarla ─────── */

function MateriaCard({ materia }: { materia: MateriaAvance }) {
  const conteo = conteoPorNivel(materia.capitulos)

  return (
    <Link
      href={`/inicio/avance/${encodeURIComponent(materia.materia)}`}
      className="group flex flex-col gap-1.5 rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] p-4 transition-colors hover:border-[#C99A3B]/55 hover:bg-white/[0.04]"
    >
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#C99A3B]">
        Materia
      </span>
      <span className="text-balance text-[0.95rem] font-semibold leading-snug text-[#F7F3EA]">
        {materia.materia}
      </span>

      {/* mt-auto empuja el pie al fondo: con títulos de distinto largo, las
          barras de toda la fila quedan alineadas (igual que en la Guía). */}
      <span className="mt-auto pt-2 text-[0.7rem] tabular-nums text-[#8A8579]">
        <span className="font-semibold text-[#E6CF98]">
          {materia.dominados} de {materia.total}
        </span>{' '}
        temas dominados
      </span>

      <span
        className="flex h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]"
        role="img"
        aria-label={`Avance de ${materia.materia}: ${materia.dominados} de ${materia.total} dominados`}
      >
        {ORDEN_BARRA.map((n) =>
          conteo[n] > 0 ? (
            <span key={n} className={NIVEL[n].barra} style={{ flex: conteo[n] }} />
          ) : null,
        )}
      </span>
    </Link>
  )
}
