'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Flame, Check } from 'lucide-react'
import { fraseDelDia } from '@/lib/frases'

/* ═══════════════════════════════════════════════════════════
   Tarjeta de racha de días (hábito, tipo Duolingo).

   Baldosa OSCURA a propósito. No usa los tokens del sistema: es un degradado
   carbón fijo, que se sostiene igual sobre la crema del tema claro que sobre
   el carbón del oscuro. El acento necesita fondo oscuro para leerse, así que
   tampoco puede depender del tema.

   El acento es LATÓN, del mockup original de Carlo. Se probó en oliva cuando
   el tablero se pintó de verde y se revirtió: el verde quedó en el ambiente
   (halo y gafete), pero lo que siempre fue dorado sigue dorado.

   LA FLAMA ES LA EXCEPCIÓN: va neón, rellena y con brillo, pero sólo mientras
   la racha esté viva. Es el premio de la tarjeta y no debe repartirse; si el
   neón se le presta a otra pieza, deja de significar «vas bien».

   Se oculta para el aspirante que nunca ha estudiado (rachaMaxima === 0):
   a ese lo guía "Empieza por aquí". La racha aparece —como recompensa— en
   cuanto contesta su primer reactivo.
   ═══════════════════════════════════════════════════════════ */

type DiaSemana = { fecha: string; activo: boolean; esHoy: boolean }
type Racha = {
  rachaActual: number
  rachaMaxima: number
  hoyActivo: boolean
  semana: DiaSemana[]
}

// La semana llega de lunes a domingo (7 días), así que el índice manda la letra.
const ETIQUETAS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']

/**
 * Los nombres son neutros a propósito —ACENTO, ACENTO_SUAVE y no DORADO— para
 * que probar otro tono no obligue a renombrar nada. Ya pasó una vez.
 *
 * El verde de las casillas cumplidas es aparte: ése marca "estudiaste" y no
 * cambia con el acento.
 */
const ACENTO = '#C99A3B'
const ACENTO_SUAVE = '#E6CF98'
const VERDE = '#6B7530'
const CREMA = '#F7F3EA'
const TENUE = '#9A9382'

/**
 * La flama es la ÚNICA cosa neón de la tarjeta, y sólo cuando la racha está
 * viva: es el premio. El resto —etiqueta, número, casillas— se queda en latón.
 *
 * Va rellena de un degradado (oro arriba → naranja → rojo abajo) y no de un
 * color plano, porque una flama de un solo tono se ve como calcomanía. El
 * degradado es lo que la hace ver encendida.
 *
 * `ID_DEGRADADO` tiene que ser único en la página: un `fill="url(#id)"` agarra
 * el PRIMER elemento con ese id del documento, así que un nombre genérico
 * («fuego») se lo podría robar otro componente.
 */
const ID_DEGRADADO = 'racha-flama-neon'
const NEON_BORDE = '#FFD98A'
const NEON_HALO = 'rgba(255,120,0,0.30)'
const NEON_BRILLO =
  'drop-shadow(0 0 6px rgba(255,138,0,0.75)) drop-shadow(0 0 14px rgba(255,77,0,0.45))'

export function RachaCard() {
  const [racha, setRacha] = useState<Racha | null>(null)

  useEffect(() => {
    apiFetch<Racha>('/actividad/racha')
      .then(setRacha)
      .catch(() => setRacha(null))
  }, [])

  // Sin datos, o nunca ha estudiado → no se muestra nada (lo cubre el onboarding).
  if (!racha || racha.rachaMaxima === 0) return null

  const { rachaActual, rachaMaxima, hoyActivo, semana } = racha
  const viva = rachaActual > 0
  const plural = (n: number) => (n === 1 ? 'día' : 'días')

  // LA META PRÓXIMA. Un número que sólo sube no jala; una meta a la vista, sí.
  // Se elige la más cercana que tenga sentido: igualar el récord, completar la
  // primera semana, o —si ya rompió su marca— nada, porque ya ganó hoy.
  const esRecordNuevo = rachaActual > 0 && rachaActual >= rachaMaxima
  const meta = esRecordNuevo
    ? null
    : rachaMaxima > rachaActual
      ? { texto: 'Para igualar tu récord', faltan: rachaMaxima - rachaActual, de: rachaMaxima }
      : { texto: 'Para tu primera semana completa', faltan: 7 - rachaActual, de: 7 }

  const frase = fraseDelDia()

  const mensaje = hoyActivo
    ? rachaActual === 1
      ? '¡Arrancaste tu racha hoy! Vuelve mañana para no romperla.'
      : `¡Llevas ${rachaActual} días seguidos! Vuelve mañana para no romperla.`
    : viva
      ? `Tu racha sigue viva. Estudia hoy —aunque sea 1 reactivo— para no romperla.`
      : `Tu mejor racha fueron ${rachaMaxima} ${plural(rachaMaxima)}. Practica hoy y empieza otra.`

  return (
    <div
      className="mb-8 overflow-hidden rounded-xl border p-5 shadow-sm"
      style={{
        background: 'linear-gradient(135deg, #1c1a17 0%, #262420 100%)',
        borderColor: '#3D3A34',
      }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Número de días + flama */}
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            {/* El degradado del relleno vive en su propio <svg> de tamaño cero:
                lucide sólo deja pasar `fill`, así que la única manera de meterle
                algo que no sea un color plano es declararlo aparte y llamarlo
                por id. El svg no ocupa lugar ni se ve. */}
            <svg width="0" height="0" aria-hidden className="absolute">
              <defs>
                <linearGradient id={ID_DEGRADADO} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFE8A3" />
                  <stop offset="38%" stopColor="#FFB01F" />
                  <stop offset="100%" stopColor="#FF4D00" />
                </linearGradient>
              </defs>
            </svg>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full blur-md"
              style={{ background: viva ? NEON_HALO : 'transparent' }}
            />
            <Flame
              className="relative h-11 w-11"
              strokeWidth={1.5}
              style={{
                color: viva ? NEON_BORDE : TENUE,
                filter: viva ? NEON_BRILLO : undefined,
              }}
              fill={viva ? `url(#${ID_DEGRADADO})` : 'none'}
            />
          </div>
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: ACENTO }}
            >
              Tu racha de estudio
            </p>
            <p className="mt-0.5 flex items-baseline gap-1.5">
              <span
                className="text-6xl font-extrabold leading-none tracking-tight tabular-nums"
                style={{
                  // Mismo tamaño y mismo degradado que el contador de días. Las
                  // dos tarjetas pesan igual porque importan igual — y si alguna
                  // debe pesar más es ésta: al aspirante lo aprueba lo que hace
                  // cada día, no lo que falta para abril.
                  backgroundImage:
                    'linear-gradient(160deg, #F0D48A 0%, #C99A3B 55%, #A87C28 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {rachaActual}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: TENUE }}
              >
                {plural(rachaActual)} {viva ? 'seguidos' : ''}
              </span>
            </p>
            {rachaMaxima > rachaActual && (
              <p className="mt-1 text-[11px]" style={{ color: TENUE }}>
                Tu récord: {rachaMaxima} {plural(rachaMaxima)}
              </p>
            )}
          </div>
        </div>

        {/* Tira de la semana (lunes → domingo) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {semana.map((d, i) => (
            <DiaCelda
              key={d.fecha}
              etiqueta={ETIQUETAS[i]}
              activo={d.activo}
              esHoy={d.esHoy}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs" style={{ color: TENUE }}>
        {esRecordNuevo && hoyActivo
          ? `Es tu mejor racha hasta hoy. ${mensaje}`
          : mensaje}
      </p>

      {/* La meta próxima. No aparece cuando ya rompió su récord: ese día el
          premio es el récord mismo y meterle otra meta encima lo abarata. */}
      {/* En su récord no hay meta que enseñar, y dejar el hueco hacía ver la
          tarjeta a medias. En su lugar va el siguiente escalón: siempre hay
          algo a la vista. */}
      {esRecordNuevo && (
        <p className="mt-4 text-[11px] font-semibold" style={{ color: ACENTO }}>
          Récord personal · el siguiente son {rachaActual + 1} {plural(rachaActual + 1)}
        </p>
      )}

      {meta && meta.faltan > 0 && (
        <div className="mt-4">
          <div className="flex items-baseline justify-between text-[11px]">
            <span style={{ color: TENUE }}>{meta.texto}</span>
            <span style={{ color: TENUE }}>
              <span style={{ color: CREMA, fontWeight: 600 }}>{meta.faltan}</span>{' '}
              {plural(meta.faltan)}
            </span>
          </div>
          <div
            className="mt-1.5 h-1.5 overflow-hidden rounded-full"
            style={{ backgroundColor: 'rgba(247,243,234,0.10)' }}
          >
            <span
              className="block h-full rounded-full"
              style={{
                width: `${Math.round((rachaActual / meta.de) * 100)}%`,
                background: `linear-gradient(90deg, ${VERDE}, ${ACENTO})`,
              }}
            />
          </div>
        </div>
      )}

      {/* La frase del día. Es lo que hace que valga la pena abrir la tarjeta
          aunque ya hayas estudiado. Va citada siempre: ver lib/frases.ts. */}
      <div
        className="relative mt-5 overflow-hidden rounded-lg py-3 pl-5 pr-4"
        style={{
          // Superficie propia y filo de latón a la izquierda: la cita deja de
          // ser un pie de página y se lee como lo que es, una cita.
          backgroundColor: 'rgba(201,154,59,0.07)',
          borderLeft: `2px solid ${ACENTO}`,
        }}
      >
        {/* Comilla de adorno, grande y tenue, detrás del texto. Es lo que hace
            que se reconozca como cita antes de leerla. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-3 right-2 select-none font-serif text-6xl leading-none"
          style={{ color: 'rgba(201,154,59,0.13)' }}
        >
          &rdquo;
        </span>

        <p
          className="relative text-sm font-medium italic leading-relaxed"
          style={{ color: CREMA }}
        >
          {frase.texto}
        </p>
        <p
          className="relative mt-2 text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: ACENTO }}
          title={frase.nota}
        >
          {frase.autor}
          {frase.obra ? (
            <span style={{ color: TENUE }}> · {frase.obra}</span>
          ) : null}
        </p>
      </div>
    </div>
  )
}

/* Una casilla de día en la tira semanal.
   - Cumplido      → círculo verde militar con ✓.
   - Hoy sin cumplir → aro dorado, hueco (te invita a llenarlo).
   - Los demás      → apagado. */
function DiaCelda({
  etiqueta,
  activo,
  esHoy,
}: {
  etiqueta: string
  activo: boolean
  esHoy: boolean
}) {
  const titulo = activo
    ? `${etiqueta}: estudiaste`
    : esHoy
      ? `${etiqueta}: hoy, aún no estudias`
      : `${etiqueta}: sin actividad`

  return (
    <div className="flex flex-col items-center gap-1.5" title={titulo}>
      <span
        className="text-[9px] font-semibold uppercase tracking-wide"
        style={{ color: esHoy ? ACENTO_SUAVE : TENUE }}
      >
        {etiqueta}
      </span>
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full',
        )}
        style={
          activo
            ? {
                backgroundColor: VERDE,
                boxShadow: esHoy ? `0 0 0 2px ${ACENTO}` : undefined,
              }
            : {
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: esHoy
                  ? `2px solid ${ACENTO}`
                  : '1px solid #3D3A34',
              }
        }
      >
        {activo ? (
          <Check className="h-4 w-4" strokeWidth={3} style={{ color: CREMA }} />
        ) : esHoy ? (
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACENTO }}
          />
        ) : null}
      </div>
    </div>
  )
}
