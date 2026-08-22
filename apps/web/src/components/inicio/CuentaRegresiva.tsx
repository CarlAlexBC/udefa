'use client'

import {
  CONVOCATORIA,
  avanceDelAnio,
  diasParaExamen,
  fechaLarga,
  mesDe,
  posicionConvocatoria,
} from '@/lib/convocatoria'

/**
 * Cuenta regresiva al examen — "la campaña".
 *
 * La pidió un aspirante que probó la plataforma. La primera versión era el
 * número pelón y Carlo tenía razón en que así no motivaba: **222 suena a
 * eternidad**. Un plazo lejano no urge, da permiso de empezar mañana.
 *
 * Por eso el número viene con tres cosas más:
 *   1. El plazo traído al presente: semanas, y cuántos simulacros CABEN. Eso
 *      contesta la pregunta que de verdad se hace el aspirante — ¿me da tiempo?
 *   2. Una línea con los dos hitos de su año: cuándo sale la convocatoria y
 *      cuándo es el examen. El tramo recorrido se pinta; ver camino andado pesa
 *      más que ver el que falta.
 *   3. Nada de rachas aquí. Esa es la tarjeta de al lado y tiene otro trabajo:
 *      ésta mira el horizonte, la racha mira el hoy. Repetirlo les resta a las
 *      dos.
 *
 * El resplandor NO está siempre: entra en los últimos 30 días. Es una pantalla
 * que se ve a diario y un brillo permanente deja de verse en una semana; si se
 * enciende sólo en la recta final, el día que se prenda significa algo.
 */

/** A cuántos simulacros por semana se hace la cuenta de "cuántos caben". */
const SIMULACROS_POR_SEMANA = 2

export function CuentaRegresiva() {
  const dias = diasParaExamen()

  // Si la fecha ya pasó, la tarjeta desaparece en vez de contar en negativo. La
  // convocatoria siguiente se pone a mano en lib/convocatoria.ts.
  if (dias < 0) return null

  const recta = dias <= 30
  const semanas = Math.round(dias / 7)
  const simulacros = semanas * SIMULACROS_POR_SEMANA
  const hoyPct = Math.round(avanceDelAnio() * 100)
  const convocatoriaPct = Math.round(posicionConvocatoria() * 100)

  return (
    <div
      className="mb-8 overflow-hidden rounded-xl border p-5 shadow-sm"
      style={{
        background: 'linear-gradient(135deg, #1c1a17 0%, #262420 100%)',
        borderColor: recta ? '#C99A3B66' : '#3D3A34',
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-widest"
        style={{ color: '#8A8579' }}
      >
        {dias === 0 ? 'Tu examen es hoy' : 'Para tu examen'}
      </p>

      <div className="mt-1 flex items-baseline gap-2">
        <span
          className="text-4xl font-semibold leading-none tabular-nums"
          style={{
            color: '#C99A3B',
            textShadow: recta ? '0 0 22px rgba(201, 154, 59, 0.5)' : 'none',
          }}
        >
          {dias === 0 ? '¡Hoy!' : dias}
        </span>
        {dias > 0 && (
          <span className="text-sm font-semibold" style={{ color: '#F7F3EA' }}>
            {dias === 1 ? 'día' : 'días'}
          </span>
        )}
      </div>

      {/* El plazo, traído al presente. */}
      {dias > 6 && (
        <p className="mt-1.5 text-xs" style={{ color: '#8A8579' }}>
          {semanas} semanas · caben{' '}
          <span style={{ color: '#F7F3EA', fontWeight: 600 }}>
            {simulacros} simulacros
          </span>{' '}
          a {SIMULACROS_POR_SEMANA} por semana
        </p>
      )}

      {/* La línea de la campaña: dónde estás entre hoy, la convocatoria y el
          examen. El marco son los 365 días previos al examen (ver
          lib/convocatoria.ts), no la fecha en que se registró cada quien. */}
      <div className="mt-5">
        <div
          className="relative h-1 rounded-full"
          style={{ backgroundColor: 'rgba(247,243,234,0.10)' }}
        >
          <span
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${hoyPct}%`,
              background: 'linear-gradient(90deg, #6B7530, #C99A3B)',
            }}
          />
          <Hito posicion={hoyPct} color="#C99A3B" />
          <Hito posicion={convocatoriaPct} color="#4A443C" />
          <Hito posicion={100} color="#4A443C" />
        </div>

        <div className="mt-2 flex justify-between text-[10px]">
          <Etiqueta titulo="Hoy" pie={hoyTexto()} alineacion="left" />
          <Etiqueta
            titulo="Convocatoria"
            pie={
              CONVOCATORIA.publicacionExacta
                ? fechaLarga('publicacion')
                : `≈ ${mesDe('publicacion')}`
            }
            alineacion="center"
          />
          <Etiqueta
            titulo="Examen"
            pie={
              CONVOCATORIA.exacta ? fechaLarga('examen') : mesDe('examen')
            }
            alineacion="right"
          />
        </div>
      </div>
    </div>
  )
}

function hoyTexto(): string {
  return new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })
}

function Hito({ posicion, color }: { posicion: number; color: string }) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ left: `${posicion}%`, backgroundColor: color, border: '2px solid #1c1a17' }}
    />
  )
}

function Etiqueta({
  titulo,
  pie,
  alineacion,
}: {
  titulo: string
  pie: string
  alineacion: 'left' | 'center' | 'right'
}) {
  return (
    <span
      className="flex flex-col"
      style={{ textAlign: alineacion, color: '#8A8579' }}
    >
      <span className="text-[11px] font-semibold" style={{ color: '#F7F3EA' }}>
        {titulo}
      </span>
      <span className="capitalize">{pie}</span>
    </span>
  )
}
