/**
 * Fondo de las pantallas de autenticación (login, olvidé / restablecer
 * contraseña): una constelación con los escudos de los once planteles, el
 * sello de la Rectoría UDEFA y la marca de El Monote te Guía, en tono oliva.
 *
 * Cómo está armado, de atrás hacia adelante:
 *   1. la constelación de escudos, repartida por la orilla;
 *   2. un velo que se cierra hacia el centro, para que el formulario respire;
 *   3. el halo oliva de arriba, que amarra el tono con el resto de la app.
 *
 * El formulario de esas pantallas es semitransparente a propósito: la
 * constelación se ve a través. Si algún día la tarjeta se vuelve opaca, este
 * fondo pierde la mitad de su gracia — son dos piezas que trabajan juntas.
 *
 * Se usa DENTRO de un contenedor con la clase `.dark` (globals.css ya trae ahí
 * toda la paleta oscura), así las tarjetas/inputs/botones se adaptan solos.
 *
 * OJO CON EL PESO: los escudos que se sirven aquí son las copias chicas en
 * WebP de public/planteles/mini/ (unos 20 KB cada una), NO los originales de
 * ~230 KB. Trece originales serían casi 3 MB en la PRIMERA pantalla que ve el
 * aspirante, antes siquiera de entrar. Si algún día se agrega un plantel, hay
 * que generarle su copia chica también.
 */

const MINI = '/planteles/mini'

/**
 * Dónde va cada escudo. `x`/`y` son el centro en porcentaje de la pantalla, y
 * están escogidos para rodear el formulario sin taparlo: la tarjeta ocupa
 * más o menos del 36% al 64% de ancho, centrada.
 *
 * `tam` es el ancho en píxeles a pantalla de 1400; abajo se vuelve elástico.
 * `op` es qué tan presente está cada uno: los tres protagonistas (el HCM
 * arriba, la Rectoría y la marca) van fuertes, y los demás se van apagando
 * para que se lea como cielo y no como cuadrícula.
 */
const CONSTELACION: Array<{
  archivo: string
  alt: string
  x: number
  y: number
  tam: number
  op: number
  /** Los más chicos se esconden en el teléfono: ahí sólo hacen ruido. */
  soloEscritorio?: boolean
}> = [
  { archivo: 'udefa-sello', alt: 'Rectoría U.D.E.F.A.', x: 85, y: 15, tam: 210, op: 0.9 },
  { archivo: 'monote-logo', alt: 'El Monote te Guía', x: 15, y: 83, tam: 195, op: 0.9 },
  { archivo: 'HCM', alt: 'Heroico Colegio Militar', x: 12, y: 17, tam: 185, op: 0.8 },
  { archivo: 'CA', alt: 'Escuela Militar de Aviación', x: 87, y: 87, tam: 155, op: 0.7 },
  { archivo: 'EMI', alt: 'Escuela Militar de Ingeniería', x: 74, y: 42, tam: 140, op: 0.62 },
  { archivo: 'EME', alt: 'Escuela Militar de Enfermería', x: 4, y: 50, tam: 132, op: 0.58 },
  { archivo: 'EMM', alt: 'Escuela Militar de Medicina', x: 27, y: 47, tam: 124, op: 0.55 },
  { archivo: 'EMOS', alt: 'Escuela Militar de Oficiales de Sanidad', x: 63, y: 90, tam: 130, op: 0.55 },
  { archivo: 'EMO', alt: 'Escuela Militar de Odontología', x: 94, y: 63, tam: 118, op: 0.5, soloEscritorio: true },
  { archivo: 'EMT', alt: 'Escuela Militar de Transmisiones', x: 33, y: 93, tam: 112, op: 0.48, soloEscritorio: true },
  { archivo: 'EMMG', alt: 'Escuela Militar de Materiales de Guerra', x: 44, y: 6, tam: 108, op: 0.45, soloEscritorio: true },
  { archivo: 'EMMA', alt: 'Escuela Militar de Mantenimiento y Abastecimiento', x: 69, y: 14, tam: 102, op: 0.42, soloEscritorio: true },
  { archivo: 'EMEFA', alt: 'Escuela Militar de Especialistas de Fuerza Aérea', x: 97, y: 35, tam: 104, op: 0.42, soloEscritorio: true },
]

export function FondoAuth() {
  return (
    <>
      {/* 1 · La constelación */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {CONSTELACION.map((e) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={e.archivo}
            src={`${MINI}/${e.archivo}.webp`}
            alt=""
            aria-hidden
            /* Decorativo: que no le pelee ancho de banda al formulario. */
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className={
              'absolute -translate-x-1/2 -translate-y-1/2 rounded-full' +
              (e.soloEscritorio ? ' hidden sm:block' : '')
            }
            style={{
              left: `${e.x}%`,
              top: `${e.y}%`,
              opacity: e.op,
              // Elástico: a 1400 px de ancho mide `tam`; en pantallas chicas
              // encoge, pero nunca baja de 56 px ni se pasa de su tamaño.
              width: `clamp(56px, ${(e.tam / 14).toFixed(2)}vw, ${e.tam}px)`,
              // Los escudos son redondos sobre fondo negro; el redondeo los
              // recorta y esta máscara le quita el filo al borde.
              WebkitMaskImage:
                'radial-gradient(circle closest-side, #000 88%, transparent 100%)',
              maskImage:
                'radial-gradient(circle closest-side, #000 88%, transparent 100%)',
            }}
          />
        ))}
      </div>

      {/* 2 · El velo: cerrado al centro para que el formulario respire,
             abierto en las orillas para que la constelación se vea. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(46% 44% at 50% 50%, rgba(22,21,19,0.96) 0%, rgba(22,21,19,0.86) 45%, rgba(22,21,19,0.52) 100%)',
            'linear-gradient(180deg, rgba(75,81,33,0.30) 0%, rgba(22,21,19,0.55) 100%)',
          ].join(', '),
        }}
      />

      {/* 3 · Halo oliva superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            'radial-gradient(70% 55% at 50% 0%, rgba(107,117,48,0.22), transparent 70%)',
        }}
      />
    </>
  )
}
