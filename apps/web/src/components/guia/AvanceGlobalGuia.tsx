'use client'

import { useState } from 'react'
import { SECCIONES_ONLINE } from '@/lib/guia-index'
import { useProgresoGuia, reiniciarProgresoGuia } from '@/lib/progreso-guia'

/**
 * Renglón de avance del hero del índice: cuántas de las 57 secciones
 * lleva leídas el aspirante, y la opción de volver a empezar.
 *
 * Mientras no haya nada leído no dice nada — un "0 de 57" en la primera
 * visita sólo consigue que la Guía se sienta cuesta arriba.
 */
export function AvanceGlobalGuia() {
  const { leidas, cargando } = useProgresoGuia()
  const [confirmando, setConfirmando] = useState(false)

  const total = SECCIONES_ONLINE.length
  const hechas = SECCIONES_ONLINE.filter((s) => leidas.has(s.slug)).length

  if (cargando || hechas === 0) return null

  const pct = Math.round((hechas / total) * 100)

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
      <div className="flex min-w-[220px] flex-1 items-center gap-3">
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
          <span
            className="block h-full rounded-full bg-[#C99A3B] transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </span>
        <span className="shrink-0 text-xs tabular-nums text-[#B8B2A4]">
          Llevas{' '}
          <span className="font-semibold text-[#F7F3EA]">
            {hechas} de {total}
          </span>{' '}
          secciones
        </span>
      </div>

      {confirmando ? (
        <span className="flex items-center gap-2 text-xs text-[#9A9382]">
          ¿Seguro?
          <button
            type="button"
            onClick={() => {
              reiniciarProgresoGuia()
              setConfirmando(false)
            }}
            className="font-semibold text-[#EF4444] hover:underline"
          >
            Sí, borrar
          </button>
          <button
            type="button"
            onClick={() => setConfirmando(false)}
            className="text-[#8A8579] hover:text-[#F7F3EA]"
          >
            Cancelar
          </button>
        </span>
      ) : (
        <button
          type="button"
          onClick={() => setConfirmando(true)}
          className="text-xs text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
        >
          Reiniciar avance
        </button>
      )}
    </div>
  )
}
