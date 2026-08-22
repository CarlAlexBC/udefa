'use client'

import { CalendarDays } from 'lucide-react'
import { CONVOCATORIA, diasParaExamen, fechaLarga } from '@/lib/convocatoria'

/**
 * Cuenta regresiva al examen.
 *
 * La pidió un aspirante que probó la plataforma: la racha lo motivaba a estudiar
 * y quería, además, ver cuánto le queda. Es el otro lado del mismo hábito — la
 * racha empuja desde atrás ("no rompas la cadena") y esto jala desde adelante.
 *
 * Mientras no haya fecha oficial apunta al 1 de abril y habla del mes; el día
 * que se sepa el día exacto, se cambia una línea en lib/convocatoria.ts.
 *
 * Sobre el resplandor: NO lo lleva siempre. Aparece en el último mes, cuando
 * faltan 30 días o menos. Es una pantalla que el aspirante ve a diario, y un
 * brillo permanente deja de verse a la semana; encendiéndolo sólo en la recta
 * final, el día que se prenda va a significar algo.
 */
export function CuentaRegresiva() {
  const dias = diasParaExamen()

  // Si la fecha ya pasó, el contador desaparece en vez de decir "-3 días". La
  // convocatoria siguiente se pone a mano, y hasta entonces esto no estorba.
  if (dias < 0) return null

  const recta = dias <= 30
  const destino = CONVOCATORIA.exacta ? 'para tu examen' : 'para abril'

  return (
    <div
      className="mb-8 overflow-hidden rounded-xl border p-5 shadow-sm"
      style={{
        background: 'linear-gradient(135deg, #1c1a17 0%, #262420 100%)',
        borderColor: recta ? '#C99A3B66' : '#3D3A34',
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          style={{
            backgroundColor: 'rgba(201, 154, 59, 0.12)',
            boxShadow: recta ? '0 0 18px rgba(201, 154, 59, 0.45)' : 'none',
          }}
        >
          <CalendarDays className="h-5 w-5" style={{ color: '#C99A3B' }} />
        </div>

        <div className="min-w-0">
          <p
            className="text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: '#8A8579' }}
          >
            {dias === 0 ? 'Es hoy' : `Faltan ${destino}`}
          </p>

          <p className="mt-0.5 flex items-baseline gap-2">
            <span
              className="text-3xl font-semibold tabular-nums leading-none"
              style={{
                color: '#C99A3B',
                textShadow: recta ? '0 0 22px rgba(201, 154, 59, 0.5)' : 'none',
              }}
            >
              {dias === 0 ? '¡Hoy!' : dias}
            </span>
            {dias > 0 && (
              <span className="text-sm" style={{ color: '#F7F3EA' }}>
                {dias === 1 ? 'día' : 'días'}
              </span>
            )}
          </p>

          <p className="mt-1 text-xs" style={{ color: '#8A8579' }}>
            {CONVOCATORIA.exacta
              ? fechaLarga()
              : 'Cuando salga la convocatoria, el contador apunta al día exacto.'}
          </p>
        </div>
      </div>
    </div>
  )
}
