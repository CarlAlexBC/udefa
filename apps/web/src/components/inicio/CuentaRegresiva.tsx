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

/**
 * El empuje: una línea distinta según lo lejos que esté el examen.
 *
 * Sin esto la tarjeta informa pero no mueve. Y no puede hablar de la racha
 * —eso es trabajo de la tarjeta de al lado—, así que habla de lo único que
 * cambia solo: el tiempo que queda y lo que toca hacer con él.
 */
function aliento(dias: number): string {
  if (dias > 180) return 'Tiempo de sobra. El que empieza hoy llega sin prisas.'
  if (dias > 90) return 'Ya no es lejos. Este es el tramo para tomar ritmo.'
  if (dias > 30) return 'Recta final. Aquí se decide quién entra.'
  if (dias > 7) return 'Último mes. Repasa lo que te falla, no lo que ya sabes.'
  if (dias > 1) return 'Es esta semana. Duerme bien y confía en lo que ya hiciste.'
  if (dias === 1) return 'Mañana es. Hoy se descansa, no se estudia de más.'
  return 'Hoy es. Ve por lo tuyo.'
}

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
        // Hoja de plata: el mismo barrido metálico de las tarjetas del panel de
        // resultados. Es lo que hacía que en la maqueta se viera "cara" y en la
        // primera versión no: un degradado plano no atrapa la luz.
        backgroundColor: '#1a1917',
        backgroundImage:
          'linear-gradient(118deg, transparent 28%, rgba(228,233,216,0.10) 47%, rgba(228,233,216,0.03) 57%, transparent 72%), linear-gradient(135deg, #26251f 0%, #1c1b18 100%)',
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
          className="text-6xl font-extrabold leading-none tracking-tight tabular-nums"
          style={{
            // Degradado de latón sobre el propio número. El color plano se veía
            // apagado al lado de la flama de la racha, que sí es un degradado.
            backgroundImage: 'linear-gradient(160deg, #F0D48A 0%, #C99A3B 55%, #A87C28 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: recta ? 'drop-shadow(0 0 18px rgba(201,154,59,0.45))' : undefined,
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
          className="relative h-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(247,243,234,0.10)' }}
        >
          <span
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${hoyPct}%`,
              background: 'linear-gradient(90deg, #6B7530, #C99A3B)',
            }}
          />
          <Hito posicion={hoyPct} color="#C99A3B" brilla />
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

      <p
        className="mt-4 border-t pt-3 text-xs font-medium"
        style={{ borderColor: 'rgba(247,243,234,0.08)', color: '#D9D2C4' }}
      >
        {aliento(dias)}
      </p>
    </div>
  )
}

function hoyTexto(): string {
  return new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })
}

function Hito({
  posicion,
  color,
  brilla = false,
}: {
  posicion: number
  color: string
  brilla?: boolean
}) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: `${posicion}%`,
        backgroundColor: color,
        border: '2px solid #1a1917',
        // Sólo el punto de HOY brilla. Es el único que se mueve, y saber dónde
        // estás parado es la mitad de lo que hace útil una línea de tiempo.
        boxShadow: brilla ? '0 0 12px rgba(201,154,59,0.75)' : undefined,
      }}
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
