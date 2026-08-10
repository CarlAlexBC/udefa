'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Flame, Check } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tarjeta de racha de días (hábito, tipo Duolingo).

   Baldosa OSCURA a propósito, con la paleta del mockup de Carlo
   (dorado + verde militar sobre carbón). Es theme-invariant por diseño:
   un degradado carbón que resalta tanto sobre la crema (tema claro) como
   sobre el fondo carbón (tema oscuro, queda apenas más clara). El dorado y
   el verde necesitan fondo oscuro para leerse, así que no usamos tokens
   que cambian con el tema.

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

const DORADO = '#C99A3B'
const DORADO_CLARO = '#E6CF98'
const VERDE = '#6B7530'
const CREMA = '#F7F3EA'
const TENUE = '#9A9382'

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
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full blur-md"
              style={{ background: viva ? 'rgba(201,154,59,0.25)' : 'transparent' }}
            />
            <Flame
              className="relative h-11 w-11"
              strokeWidth={1.5}
              style={{ color: viva ? DORADO : TENUE }}
              fill={viva ? 'rgba(201,154,59,0.22)' : 'none'}
            />
          </div>
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: DORADO }}
            >
              Tu racha de estudio
            </p>
            <p className="mt-0.5 flex items-baseline gap-1.5">
              <span
                className="text-3xl font-bold leading-none"
                style={{ color: CREMA }}
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
        {mensaje}
      </p>
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
        style={{ color: esHoy ? DORADO_CLARO : TENUE }}
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
                boxShadow: esHoy ? `0 0 0 2px ${DORADO}` : undefined,
              }
            : {
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: esHoy
                  ? `2px solid ${DORADO}`
                  : '1px solid #3D3A34',
              }
        }
      >
        {activo ? (
          <Check className="h-4 w-4" strokeWidth={3} style={{ color: CREMA }} />
        ) : esHoy ? (
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: DORADO }}
          />
        ) : null}
      </div>
    </div>
  )
}
