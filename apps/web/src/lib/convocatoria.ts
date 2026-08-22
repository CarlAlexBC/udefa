/**
 * La fecha hacia la que corre la cuenta regresiva del aspirante.
 *
 * Lo pidió un aspirante que probó la plataforma: quería ver cuántos días le
 * faltan para el examen, y que cuando se sepa la fecha exacta el contador
 * apunte a ese día.
 *
 * ── CÓMO SE ACTUALIZA (es lo único que hay que tocar) ──────────────────────
 * Mientras no haya convocatoria publicada, `exacta: false` y la fecha es el
 * 1 de abril: el contador dice "para abril". El día que salga la fecha oficial,
 * se cambian las dos líneas:
 *
 *     fecha: '2027-04-18',
 *     exacta: true,
 *
 * y el contador pasa a decir "para tu examen · 18 de abril de 2027". No hay que
 * tocar nada más.
 *
 * La fecha se escribe en formato AAAA-MM-DD y se interpreta a mediodía, para
 * que el cambio de día caiga donde debe sin importar el huso horario.
 */
export const CONVOCATORIA = {
  fecha: '2027-04-01',
  exacta: false,
} as const

/** Días completos que faltan. 0 = es hoy. Negativo = ya pasó. */
export function diasParaExamen(hoy: Date = new Date()): number {
  const [anio, mes, dia] = CONVOCATORIA.fecha.split('-').map(Number)
  const objetivo = new Date(anio, mes - 1, dia, 12, 0, 0)
  const referencia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), 12, 0, 0)
  return Math.round((objetivo.getTime() - referencia.getTime()) / 86_400_000)
}

/** "18 de abril de 2027" — para cuando la fecha ya es oficial. */
export function fechaLarga(): string {
  const [anio, mes, dia] = CONVOCATORIA.fecha.split('-').map(Number)
  return new Date(anio, mes - 1, dia, 12).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
