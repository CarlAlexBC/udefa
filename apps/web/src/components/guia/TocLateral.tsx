'use client'

import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

/**
 * Índice de una sección de la Guía, con seguimiento del scroll.
 *
 * Son dos piezas que comparten cerebro:
 *   · TocLateral — el riel pegado al costado, sólo en escritorio.
 *   · TocMovil   — una barra plegable arriba del texto, sólo en teléfono.
 *
 * Van separadas porque el riel vive DENTRO de la rejilla de contenido y la
 * barra tiene que vivir FUERA de ella. Un elemento pegajoso sólo puede
 * viajar dentro de la caja de su padre; metida en la rejilla, la barra se
 * quedaría clavada sin poder acompañar la lectura.
 *
 * POR QUÉ NO USAN IntersectionObserver (que es lo que uno esperaría):
 * el observador sólo avisa cuando un subtítulo ENTRA o SALE de una franja.
 * Eso deja cuatro huecos que se notan al usarlo:
 *   · al subir, los subtítulos salen de la franja sin que nada entre, así
 *     que el resaltado se queda clavado abajo;
 *   · al cargar, si ningún subtítulo cae dentro de la franja, no marca nada;
 *   · desplazando rápido, un subtítulo puede cruzar la franja entre dos
 *     mediciones y saltarse;
 *   · la última sección, si es corta, nunca alcanza a cruzarla.
 *
 * En su lugar CALCULAN el subtítulo actual a partir de la posición real:
 * el último cuyo encabezado ya pasó la línea de lectura. Siempre dan una
 * respuesta, y dan la misma subiendo que bajando.
 */

/**
 * Compensación del encabezado, en px. Es el mismo valor que el `scroll-mt-24`
 * de los subtítulos en MarkdownRenderer (24 × 4px = 96): si se cambia allá,
 * hay que cambiarlo aquí o el salto queda desalineado.
 */
const DESPLAZAMIENTO = 96

/** La línea imaginaria que decide "ya llegué a este subtítulo". */
const LINEA_DE_LECTURA = DESPLAZAMIENTO + 24

type Titulo = { texto: string; slug: string }

/**
 * El cerebro compartido: qué subtítulo se está leyendo, cuánto se lleva
 * avanzado, y cómo saltar a uno.
 */
function useSeguimientoDeLectura(titulos: Titulo[]) {
  const [activo, setActivo] = useState<string | null>(null)
  const [avance, setAvance] = useState(0)

  useEffect(() => {
    if (titulos.length === 0) return

    let cuadroPedido = 0

    const medir = () => {
      cuadroPedido = 0

      const y = window.scrollY
      const recorrible = document.documentElement.scrollHeight - window.innerHeight
      setAvance(recorrible > 0 ? Math.min(100, Math.max(0, (y / recorrible) * 100)) : 0)

      // Hasta abajo gana el último, pase lo que pase: las secciones cortas
      // del final no alcanzan a cruzar la línea por sí solas.
      if (recorrible > 0 && y >= recorrible - 2) {
        setActivo(titulos[titulos.length - 1].slug)
        return
      }

      // El actual es el último cuyo encabezado ya pasó la línea. Arriba del
      // todo eso da el primero, que es lo que uno espera ver marcado.
      let actual = titulos[0].slug
      for (const t of titulos) {
        const el = document.getElementById(t.slug)
        if (!el) continue
        if (el.getBoundingClientRect().top <= LINEA_DE_LECTURA) actual = t.slug
        else break
      }
      setActivo(actual)
    }

    // Se mide una vez por cuadro de pantalla, no una por evento de scroll:
    // el navegador dispara decenas por segundo y medir en cada uno traba el
    // desplazamiento en equipos modestos.
    const alDesplazar = () => {
      if (cuadroPedido) return
      cuadroPedido = requestAnimationFrame(medir)
    }

    // La primera medición también va en un cuadro: al montar, el markdown
    // puede no haber terminado de acomodarse.
    alDesplazar()

    window.addEventListener('scroll', alDesplazar, { passive: true })
    window.addEventListener('resize', alDesplazar)

    return () => {
      if (cuadroPedido) cancelAnimationFrame(cuadroPedido)
      window.removeEventListener('scroll', alDesplazar)
      window.removeEventListener('resize', alDesplazar)
    }
  }, [titulos])

  /**
   * Salta al subtítulo. Lo hacemos a mano en vez de dejarle el `href="#..."`
   * al navegador por tres razones: descontar el encabezado, marcar el
   * destino de inmediato (sin esperar a que llegue el scroll) y dejar la
   * dirección copiable en la barra sin ensuciar el historial.
   */
  const irA = useCallback((e: React.MouseEvent, slug: string) => {
    const el = document.getElementById(slug)
    if (!el) return

    e.preventDefault()
    setActivo(slug)

    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - DESPLAZAMIENTO,
      behavior: suave ? 'smooth' : 'auto',
    })

    window.history.replaceState(null, '', `#${slug}`)
  }, [])

  return { activo, avance, irA }
}

/* ═══════════════════════════════════════════════════════════
   Escritorio — el riel al costado
   ═══════════════════════════════════════════════════════════ */

export function TocLateral({ titulos }: { titulos: Titulo[] }) {
  const { activo, avance, irA } = useSeguimientoDeLectura(titulos)

  if (titulos.length === 0) return null

  return (
    <nav aria-label="Índice de la sección" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          En esta sección
        </p>

        <ul className="relative flex flex-col gap-1.5 pl-4">
          {/* Riel: la línea gris de fondo y, encima, cuánto llevas leído. */}
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-border"
          />
          <span
            aria-hidden
            className="absolute left-0 top-0 w-px bg-accent"
            style={{ height: `${avance}%` }}
          />

          {titulos.map((t) => {
            const esActivo = activo === t.slug
            return (
              <li key={t.slug} className="relative">
                {/* Punto en el riel: dice DÓNDE estás, mientras que el relleno
                    de arriba dice CUÁNTO llevas. Son dos datos distintos. */}
                <span
                  aria-hidden
                  className={cn(
                    'absolute -left-4 top-[0.45rem] h-1.5 w-1.5 -translate-x-[0.15rem] rounded-full transition-colors',
                    esActivo ? 'bg-accent' : 'bg-transparent',
                  )}
                />
                <a
                  href={`#${t.slug}`}
                  onClick={(e) => irA(e, t.slug)}
                  aria-current={esActivo ? 'location' : undefined}
                  className={cn(
                    'block rounded-sm text-xs leading-snug transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    esActivo
                      ? 'font-semibold text-accent'
                      : 'text-muted-foreground',
                  )}
                >
                  {t.texto}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════════════════════════
   Teléfono — la barra plegable

   Va PEGADA arriba y cerrada por defecto. Cerrada ocupa un renglón y
   dice en qué apartado vas; abierta, deja saltar a cualquiera. En una
   sección larga, que es donde el celular sufre, esa línea es la
   diferencia entre saber dónde estás y estar perdido.
   ═══════════════════════════════════════════════════════════ */

export function TocMovil({ titulos }: { titulos: Titulo[] }) {
  const { activo, avance, irA } = useSeguimientoDeLectura(titulos)
  const [abierto, setAbierto] = useState(false)

  if (titulos.length === 0) return null

  const actual = titulos.find((t) => t.slug === activo) ?? titulos[0]

  return (
    <nav
      aria-label="Índice de la sección"
      /* -mx-6 cancela el margen lateral de la página para que la barra
         llegue de orilla a orilla, como una cabecera de verdad. */
      className="sticky top-0 z-20 -mx-6 mb-6 border-b border-border bg-background/95 px-6 py-3 backdrop-blur-sm lg:hidden"
    >
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-controls="indice-de-seccion"
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            En esta sección
          </span>
          <span className="block truncate text-sm font-medium text-foreground">
            {actual.texto}
          </span>
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-muted-foreground transition-transform',
            abierto && 'rotate-180',
          )}
        />
      </button>

      {abierto && (
        <ul
          id="indice-de-seccion"
          className="mt-3 flex flex-col gap-1 border-t border-border pt-3"
        >
          {titulos.map((t) => {
            const esActivo = t.slug === activo
            return (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  onClick={(e) => {
                    irA(e, t.slug)
                    // Se cierra al elegir: si no, tapa justo el texto al que
                    // acabas de saltar.
                    setAbierto(false)
                  }}
                  aria-current={esActivo ? 'location' : undefined}
                  className={cn(
                    'block rounded-sm py-1.5 text-sm leading-snug',
                    esActivo ? 'font-semibold text-accent' : 'text-muted-foreground',
                  )}
                >
                  {t.texto}
                </a>
              </li>
            )
          })}
        </ul>
      )}

      {/* Hilo de avance al pie de la barra: en el teléfono no hay riel
          lateral donde ponerlo, y saber cuánto falta importa más aquí. */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-accent transition-[width]"
        style={{ width: `${avance}%` }}
      />
    </nav>
  )
}
