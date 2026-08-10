/**
 * Tipos y colores compartidos de "Tu avance" (el semáforo de dominio por tema).
 * Lo usan la portada (/inicio/avance) y el detalle de cada materia.
 *
 * Los colores son tokens de marca. Las pantallas van bajo el envoltorio `dark`,
 * así que military/accent/destructive toman su versión oscura solos.
 */

export type Nivel = 'dominado' | 'en_progreso' | 'fragil' | 'sin_empezar'

export type CapituloAvance = {
  capituloId: number
  numero: number
  titulo: string
  nivel: Nivel
}

export type MateriaAvance = {
  materia: string
  dominados: number
  total: number
  capitulos: CapituloAvance[]
}

export type Avance = { plantel: string; materias: MateriaAvance[] }

export const NIVEL: Record<
  Nivel,
  { etiqueta: string; punto: string; texto: string; barra: string }
> = {
  dominado: { etiqueta: 'Dominado', punto: 'bg-military', texto: 'text-military', barra: 'bg-military' },
  en_progreso: { etiqueta: 'En progreso', punto: 'bg-accent', texto: 'text-accent', barra: 'bg-accent' },
  fragil: { etiqueta: 'Frágil', punto: 'bg-destructive', texto: 'text-destructive', barra: 'bg-destructive' },
  sin_empezar: { etiqueta: 'Sin empezar', punto: 'bg-white/25', texto: 'text-[#8A8579]', barra: 'bg-white/[0.08]' },
}

/** Orden de los niveles en la barra y la leyenda: de lo dominado a lo pendiente. */
export const ORDEN_BARRA: Nivel[] = ['dominado', 'en_progreso', 'fragil', 'sin_empezar']

/** Cuántos capítulos hay en cada nivel — para repartir la barra segmentada. */
export function conteoPorNivel(caps: CapituloAvance[]): Record<Nivel, number> {
  return ORDEN_BARRA.reduce(
    (acc, n) => ({ ...acc, [n]: caps.filter((c) => c.nivel === n).length }),
    {} as Record<Nivel, number>,
  )
}
