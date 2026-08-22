/**
 * Las fechas de la campaña del aspirante: cuándo sale la convocatoria y cuándo
 * es el examen. De aquí come la cuenta regresiva de la pantalla de inicio.
 *
 * Lo pidió un aspirante que probó la plataforma: quería ver cuánto le falta, y
 * que cuando se sepa la fecha exacta el contador apunte a ese día.
 *
 * ── CÓMO SE ACTUALIZA (es lo único que hay que tocar) ──────────────────────
 * Mientras no haya convocatoria publicada, `exacta: false` y la fecha es el
 * 1 de abril: el contador dice "para abril". El día que salga la fecha oficial:
 *
 *     fecha: '2027-04-18',
 *     exacta: true,
 *
 * y pasa a decir "para tu examen · 18 de abril de 2027". Lo mismo con
 * `publicacion`, que es cuándo se espera que SALGA la convocatoria: mientras
 * `publicacionExacta` sea false, la línea de tiempo la marca como aproximada
 * («≈ enero»), que es lo honesto — nadie sabe todavía el día.
 *
 * Las fechas se escriben AAAA-MM-DD y se interpretan a mediodía, para que el
 * cambio de día caiga donde debe sin importar el huso horario.
 */
export const CONVOCATORIA = {
  /** Día del examen. */
  fecha: '2027-04-01',
  exacta: false,
  /** Cuándo se espera que se publique la convocatoria. */
  publicacion: '2027-01-15',
  publicacionExacta: false,
} as const

function aFecha(texto: string): Date {
  const [anio, mes, dia] = texto.split('-').map(Number)
  return new Date(anio, mes - 1, dia, 12, 0, 0)
}

function aMediodia(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0)
}

/** Días completos que faltan para el examen. 0 = es hoy. Negativo = ya pasó. */
export function diasParaExamen(hoy: Date = new Date()): number {
  return Math.round(
    (aFecha(CONVOCATORIA.fecha).getTime() - aMediodia(hoy).getTime()) / 86_400_000,
  )
}

/** Días para que salga la convocatoria. Negativo = ya debería haber salido. */
export function diasParaConvocatoria(hoy: Date = new Date()): number {
  return Math.round(
    (aFecha(CONVOCATORIA.publicacion).getTime() - aMediodia(hoy).getTime()) /
      86_400_000,
  )
}

/**
 * Dónde cae hoy dentro del año de preparación, de 0 a 1.
 *
 * El "año de preparación" son los 365 días previos al examen. Es un marco fijo
 * y honesto: no depende de cuándo se registró cada quien, y sirve para colocar
 * los hitos en la línea de tiempo sin inventarle un avance personal a nadie.
 */
export function avanceDelAnio(hoy: Date = new Date()): number {
  const examen = aFecha(CONVOCATORIA.fecha).getTime()
  const inicio = examen - 365 * 86_400_000
  const ahora = aMediodia(hoy).getTime()
  return Math.min(1, Math.max(0, (ahora - inicio) / (examen - inicio)))
}

/** Dónde cae la publicación de la convocatoria en esa misma línea, de 0 a 1. */
export function posicionConvocatoria(): number {
  const examen = aFecha(CONVOCATORIA.fecha).getTime()
  const inicio = examen - 365 * 86_400_000
  return Math.min(
    1,
    Math.max(0, (aFecha(CONVOCATORIA.publicacion).getTime() - inicio) / (examen - inicio)),
  )
}

/** "18 de abril de 2027" — para cuando la fecha ya es oficial. */
export function fechaLarga(cual: 'examen' | 'publicacion' = 'examen'): string {
  const texto = cual === 'examen' ? CONVOCATORIA.fecha : CONVOCATORIA.publicacion
  return aFecha(texto).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** "enero" / "abril" — el mes suelto, para cuando la fecha aún no es oficial. */
export function mesDe(cual: 'examen' | 'publicacion' = 'examen'): string {
  const texto = cual === 'examen' ? CONVOCATORIA.fecha : CONVOCATORIA.publicacion
  return aFecha(texto).toLocaleDateString('es-MX', { month: 'long' })
}
