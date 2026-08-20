'use client'

import Link from 'next/link'
import { CAPITULOS_GUIA } from '@/lib/guia-index'
import { useProgresoGuia } from '@/lib/progreso-guia'

/* ═══════════════════════════════════════════════════════════
   Índice de la Guía en mosaico — los 9 capítulos como tarjetas.

   El manual son 57 secciones. Listadas de corrido eran una tirada de
   scroll larguísima, y el capítulo 4 (16 secciones) se comía él solo
   casi un tercio. Aquí cada capítulo pesa lo mismo: una tarjeta. Las
   secciones viven en la página del capítulo.

   Client component porque pinta el avance de lectura, que vive en el
   navegador (ver progreso-guia.ts).
   ═══════════════════════════════════════════════════════════ */

export function MosaicoCapitulos() {
  const { leidas, cargando } = useProgresoGuia()

  return (
    /* `cascada`: las tarjetas entran una tras otra, no todas de golpe. El
       retraso de cada una sale de `--paso` (ver globals.css). */
    <div className="cascada mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {CAPITULOS_GUIA.map((capitulo, indice) => {
        const total = capitulo.secciones.length
        const leidasAqui = capitulo.secciones.filter(
          (s) => s.slug && leidas.has(s.slug),
        ).length
        const pct = total > 0 ? Math.round((leidasAqui / total) * 100) : 0

        return (
          <Link
            key={capitulo.numero}
            href={`/inicio/guia/capitulo/${capitulo.numero}`}
            style={{ '--paso': indice } as React.CSSProperties}
            className="group flex flex-col gap-1.5 rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] p-4 transition-colors hover:border-[#C99A3B]/55 hover:bg-white/[0.04]"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] tabular-nums text-[#C99A3B]">
              Cap. {capitulo.numero.padStart(2, '0')}
            </span>

            <span className="text-balance text-[0.95rem] font-semibold leading-snug text-[#F7F3EA]">
              {capitulo.titulo}
            </span>

            {capitulo.subtitulo && (
              <span className="hidden text-xs leading-relaxed text-[#B8B2A4] sm:block">
                {capitulo.subtitulo}
              </span>
            )}

            {/* mt-auto empuja el pie al fondo: con títulos de distinto largo,
                las barras de toda la fila quedan alineadas. */}
            <span className="mt-auto pt-2 text-[0.7rem] tabular-nums text-[#8A8579]">
              <span className="font-semibold text-[#E6CF98]">{total}</span>{' '}
              {total === 1 ? 'sección' : 'secciones'}
              {/* Mientras carga no se dice "0 leídas": parpadearía al valor
                  bueno un instante después. */}
              {!cargando && leidasAqui > 0 && ` · ${leidasAqui} ${leidasAqui === 1 ? 'leída' : 'leídas'}`}
            </span>

            <span
              className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]"
              role="img"
              aria-label={`Avance del capítulo: ${leidasAqui} de ${total}`}
            >
              <span
                className="block h-full rounded-full bg-[#C99A3B] transition-[width] duration-500"
                style={{ width: `${cargando ? 0 : pct}%` }}
              />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
