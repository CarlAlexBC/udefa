import { cn } from '@/lib/utils'
import { SelloPlantel } from './SelloPlantel'
import {
  CAPA_SELLO,
  CAPA_SELLO_ARRIBA,
  CAPA_SELLO_FIJA,
  IMG_SELLO,
  MASCARA_SELLO,
  OPACIDAD_SELLO,
} from './sello-estilos'

/**
 * Fondo decorativo de la Guía del Aspirante.
 *
 * Mismo tratamiento que las pantallas oscuras del simulador y de la Fase 04
 * (práctica cultural por materia): un halo de color arriba y un escudo muy
 * tenue sangrando por la derecha.
 *
 * - `tono: 'dorado'` → latón. Es el del índice de la Guía.
 * - `tono: 'oliva'`  → verde militar, el mismo de la portada del examen de
 *   personalidad. Es el de la página de capítulo y la de lectura.
 *
 * El escudo va cambiando conforme el aspirante se mete al manual:
 * - `sello: 'udefa'`   → índice: el sello de la Rectoría, la portada del
 *   manual. Anclado arriba, porque el índice casi no tiene scroll.
 * - `sello: 'monote'`  → página de capítulo: la marca de El Monote te Guía.
 * - `sello: 'plantel'` → secciones: el escudo del plantel del aspirante. Es
 *   el contenido en sí, y ahí sí se personaliza.
 *
 * OJO con dos cosas que ya costaron trabajo:
 *  · Las capas se anclan (arriba o a la ventana) y NO al `inset-0` completo.
 *    En páginas largas, `inset-0` + `items-center` mandaría el escudo al
 *    centro de un documento de tres pantallas, donde no se ve.
 *  · El `overflow-hidden` va encerrado en esa caja. Si envolviera a la página
 *    entera rompería el `position: sticky` del índice lateral.
 */

const SELLOS_FIJOS = {
  udefa: {
    src: '/udefa-sello.png',
    alt: 'Sello de la Rectoría U.D.E.F.A.',
    colocacion: CAPA_SELLO_ARRIBA,
  },
  monote: {
    src: '/monote-logo.jpeg',
    alt: 'El Monote te Guía',
    colocacion: CAPA_SELLO_FIJA,
  },
} as const

export function FondoGuia({
  tono = 'dorado',
  sello,
}: {
  tono?: 'dorado' | 'oliva'
  sello?: 'udefa' | 'monote' | 'plantel'
}) {
  const halo =
    tono === 'dorado' ? 'rgba(201,154,59,0.15)' : 'rgba(107,117,48,0.22)'

  const marca =
    sello === 'udefa' || sello === 'monote' ? SELLOS_FIJOS[sello] : null

  return (
    <>
      {/* Halo superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px]"
        style={{
          background: `radial-gradient(70% 55% at 50% 0%, ${halo}, transparent 70%)`,
        }}
      />

      {/* El del plantel se resuelve en el cliente: depende de la sesión. */}
      {sello === 'plantel' && <SelloPlantel />}

      {marca && (
        <div aria-hidden className={cn(CAPA_SELLO, marca.colocacion)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={marca.src}
            alt=""
            aria-hidden
            title={marca.alt}
            className={cn(IMG_SELLO, OPACIDAD_SELLO)}
            style={MASCARA_SELLO}
          />
        </div>
      )}
    </>
  )
}
