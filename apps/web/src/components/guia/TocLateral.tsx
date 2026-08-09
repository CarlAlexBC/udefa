'use client'

import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Índice lateral de una sección de la Guía, con seguimiento del scroll.
 *
 * POR QUÉ NO USA IntersectionObserver (que es lo que uno esperaría):
 * el observador sólo avisa cuando un subtítulo ENTRA o SALE de una franja.
 * Eso deja cuatro huecos que se notan al usarlo:
 *   · al subir, los subtítulos salen de la franja sin que nada entre, así
 *     que el resaltado se queda clavado abajo;
 *   · al cargar, si ningún subtítulo cae dentro de la franja, no marca nada;
 *   · desplazando rápido, un subtítulo puede cruzar la franja entre dos
 *     mediciones y saltarse;
 *   · la última sección, si es corta, nunca alcanza a cruzarla.
 *
 * En su lugar CALCULA el subtítulo actual a partir de la posición real:
 * el último cuyo encabezado ya pasó la línea de lectura. Siempre da una
 * respuesta, y da la misma subiendo que bajando.
 */

/**
 * Compensación del encabezado, en px. Es el mismo valor que el `scroll-mt-24`
 * de los subtítulos en MarkdownRenderer (24 × 4px = 96): si se cambia allá,
 * hay que cambiarlo aquí o el salto queda desalineado.
 */
const DESPLAZAMIENTO = 96

/** La línea imaginaria que decide "ya llegué a este subtítulo". */
const LINEA_DE_LECTURA = DESPLAZAMIENTO + 24

export function TocLateral({
  titulos,
}: {
  titulos: Array<{ texto: string; slug: string }>
}) {
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
