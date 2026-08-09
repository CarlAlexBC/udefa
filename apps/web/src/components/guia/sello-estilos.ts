import type { CSSProperties } from 'react'

/**
 * Piezas compartidas por las capas de escudo del fondo de la Guía.
 *
 * Viven aquí y no dentro de un componente porque las usan dos: FondoGuia
 * (sellos fijos: Rectoría y El Monote) y SelloPlantel (el escudo del plantel
 * del aspirante, que necesita ser de cliente para saber cuál es). Sin este
 * archivo, las mismas clases estarían copiadas en los dos y con el tiempo
 * se despegarían.
 */

/** Qué tan presente está el escudo. Si se ve muy cargado, bájalo aquí. */
export const OPACIDAD_SELLO = 'opacity-[0.14]'

/** La caja que sostiene el escudo, pegado a la orilla derecha. */
export const CAPA_SELLO =
  'pointer-events-none hidden items-center justify-end overflow-hidden pr-[2vw] md:flex'

/**
 * Fija a la ventana: el escudo acompaña la lectura en vez de perderse al
 * primer scroll. Arranca abajo del header para no encimársele; el contenido
 * de la página va en una capa z-10, así que el texto queda por delante.
 */
export const CAPA_SELLO_FIJA = 'fixed inset-x-0 bottom-0 top-20'

/** Anclada arriba. Para pantallas cortas, donde casi no hay scroll. */
export const CAPA_SELLO_ARRIBA = 'absolute inset-x-0 top-0 h-[520px]'

export const IMG_SELLO = 'w-[min(480px,40vw)] max-w-none'

/**
 * Difumina el borde del disco: nítido al centro, se funde a transparente por
 * las orillas (sin aro duro). También es lo que vuelve redonda la marca de
 * El Monote, que es un JPEG cuadrado sin transparencia.
 */
export const MASCARA_SELLO: CSSProperties = {
  WebkitMaskImage:
    'radial-gradient(circle closest-side, #000 70%, transparent 100%)',
  maskImage: 'radial-gradient(circle closest-side, #000 70%, transparent 100%)',
}
