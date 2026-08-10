'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { NIVEL, ORDEN_BARRA, conteoPorNivel, type Avance } from '@/lib/avance'
import { AlertCircle, Loader2 } from 'lucide-react'

/**
 * Cuerpo del detalle de una materia: pide el avance del aspirante y pinta los
 * temas de ESA materia con su semáforo. Reusa el mismo endpoint que la portada
 * (mi-avance) y filtra por el nombre de la materia que llega de la URL.
 */
export function DetalleMateriaAvance({ materia }: { materia: string }) {
  const [avance, setAvance] = useState<Avance | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    apiFetch<Avance>('/examenes/practica/cultural/mi-avance')
      .then(setAvance)
      .catch((err) => setError((err as Error).message))
  }, [])

  if (error) {
    return (
      <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/10 p-8 text-center">
        <AlertCircle className="mx-auto mb-2 h-6 w-6 text-destructive" />
        <p className="font-semibold text-destructive">No pudimos cargar tu avance</p>
        <p className="mt-2 text-sm text-[#B8B2A4]">{error}</p>
      </div>
    )
  }

  if (!avance) {
    return (
      <div className="mt-6 flex min-h-[40vh] flex-col items-center justify-center gap-3">
        <Loader2 className="h-5 w-5 animate-spin text-[#8A8579]" />
        <p className="text-sm text-[#8A8579]">Cargando...</p>
      </div>
    )
  }

  const m = avance.materias.find((x) => x.materia === materia)

  if (!m) {
    return (
      <div className="mt-6 rounded-2xl border border-[#C99A3B]/20 bg-white/[0.02] p-8 text-center">
        <p className="font-semibold text-[#F7F3EA]">Materia no encontrada</p>
        <p className="mt-1 text-sm text-[#B8B2A4]">
          No hay avance para «{materia}» en tu plantel.
        </p>
      </div>
    )
  }

  const conteo = conteoPorNivel(m.capitulos)

  return (
    <div className="mt-5">
      {/* Encabezado de la materia + barra */}
      <div className="rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] p-6">
        <h1 className="text-balance text-2xl font-bold tracking-tight text-[#F7F3EA] sm:text-3xl">
          {m.materia}
        </h1>
        <p className="mt-1 text-sm tabular-nums text-[#9A9382]">
          {m.dominados} de {m.total} temas dominados
        </p>
        <span className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-white/[0.08]">
          {ORDEN_BARRA.map((n) =>
            conteo[n] > 0 ? (
              <span key={n} className={NIVEL[n].barra} style={{ flex: conteo[n] }} />
            ) : null,
          )}
        </span>
      </div>

      {/* Leyenda */}
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#B8B2A4]">
        {ORDEN_BARRA.map((n) => (
          <span key={n} className="inline-flex items-center gap-1.5">
            <span className={cn('h-2.5 w-2.5 rounded-full', NIVEL[n].punto)} />
            {NIVEL[n].etiqueta}
          </span>
        ))}
      </div>

      {/* Lista de temas */}
      <div className="mt-4 rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] px-5">
        {m.capitulos.map((c) => (
          <div
            key={c.capituloId}
            className="flex items-center gap-3 border-b border-white/[0.06] py-3.5 last:border-b-0"
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

      {/* A practicar esta materia */}
      <div className="mt-5">
        <Link
          href="/inicio/practica-cultural"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C99A3B] px-4 py-2.5 text-sm font-semibold text-[#161513] transition-colors hover:bg-[#D8AE52]"
        >
          Practicar {m.materia}
        </Link>
      </div>
    </div>
  )
}
