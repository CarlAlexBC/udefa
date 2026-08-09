'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Seccion } from '@/lib/guia-index'
import { useProgresoGuia } from '@/lib/progreso-guia'
import { Check, ChevronRight, Sparkles } from 'lucide-react'

/**
 * Lista de secciones dentro de la página de un capítulo.
 * Marca con una palomita las que el aspirante ya leyó.
 *
 * Client component por el avance de lectura (ver progreso-guia.ts).
 */
export function ListaSeccionesCapitulo({ secciones }: { secciones: Seccion[] }) {
  const { leidas, cargando } = useProgresoGuia()

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-[#6B7530]/30 bg-white/[0.02]">
      {secciones.map((seccion, i) => {
        const leida = !cargando && !!seccion.slug && leidas.has(seccion.slug)

        return (
          <Link
            key={seccion.numero}
            href={`/inicio/guia/${seccion.slug}`}
            className={cn(
              'group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.03]',
              i > 0 && 'border-t border-[#6B7530]/20',
            )}
          >
            {/* Ancho fijo para que las palomitas y los §número no se
                muevan de columna entre renglones. */}
            <span className="flex w-14 shrink-0 items-center gap-1.5">
              {leida && (
                <Check
                  className="h-3.5 w-3.5 shrink-0 text-[#AEBE55]"
                  aria-label="Ya la leíste"
                />
              )}
              <span
                className={cn(
                  'text-xs font-semibold tabular-nums',
                  leida ? 'text-[#AEBE55]/70' : 'text-[#AEBE55]',
                )}
              >
                §{seccion.numero}
              </span>
            </span>

            <span
              className={cn(
                'flex-1 text-sm transition-colors',
                leida ? 'text-[#9A9382]' : 'text-[#D8D2C4]',
                'group-hover:text-[#F7F3EA]',
              )}
            >
              {seccion.titulo}
            </span>

            {seccion.marca === 'nueva' && (
              <span className="hidden shrink-0 items-center gap-1 rounded-full border border-[#AEBE55]/40 bg-[#4B5121]/35 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#DCE6AE] sm:inline-flex">
                <Sparkles className="h-2.5 w-2.5" />
                Nueva
              </span>
            )}

            <span className="flex shrink-0 items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-[#AEBE55]">
              {leida ? 'Releer' : 'Leer'}
              <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
