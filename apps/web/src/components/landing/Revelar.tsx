'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Aparición al hacer scroll — el gesto de las portadas de Samsung, Apple y
 * compañía: el contenido no está ahí desde el principio, se presenta cuando le
 * toca. Sube unos pixeles y se funde.
 *
 * Tres cuidados que valen más que el efecto:
 *
 * 1. NO MUEVE EL LAYOUT. Sólo anima `opacity` y `transform`, que el navegador
 *    resuelve sin recalcular la página. El elemento ocupa su lugar desde el
 *    primer momento aunque todavía no se vea, así que nada brinca — el mismo
 *    criterio con el que se arreglaron las tarjetas de opción del examen.
 *
 * 2. Se revela UNA VEZ y se queda. Volver a animar cada vez que el aspirante
 *    sube y baja marea y estorba para leer.
 *
 * 3. Si el sistema pide menos movimiento (`prefers-reduced-motion`), aparece
 *    directo, sin animación. Y si no hay JavaScript, el `<noscript>` de
 *    globals.css lo deja visible: el contenido de la portada NUNCA depende de
 *    que esto funcione.
 */
export function Revelar({
  children,
  /** Retraso en ms — para que un grupo entre en cascada, no todo de golpe. */
  retraso = 0,
  className,
}: {
  children: React.ReactNode
  retraso?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const menosMovimiento = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (menosMovimiento) {
      setVisible(true)
      return
    }

    let vivo = true
    const mostrar = () => {
      if (!vivo) return
      vivo = false
      setVisible(true)
      observador?.disconnect()
      window.removeEventListener('scroll', alHacerScroll)
      window.removeEventListener('resize', alHacerScroll)
    }

    /**
     * Respaldo por medición directa. El observador es la vía normal, pero
     * depende de que el navegador esté pintando; si por lo que sea no dispara,
     * esto lo cubre — y sin él, un fallo dejaría el contenido INVISIBLE para
     * siempre, que es mucho peor que quedarse sin la animación.
     */
    const alHacerScroll = () => {
      const caja = el.getBoundingClientRect()
      const limite = window.innerHeight * 0.9 // el mismo -10% del observador
      if (caja.top < limite && caja.bottom > 0) mostrar()
    }

    const observador =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entrada]) => {
              if (entrada.isIntersecting) mostrar()
            },
            // Se dispara un poco antes de llegar al borde: da tiempo a que la
            // animación corra mientras el elemento entra, en vez de empezar tarde.
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
          )
        : null
    observador?.observe(el)

    window.addEventListener('scroll', alHacerScroll, { passive: true })
    window.addEventListener('resize', alHacerScroll, { passive: true })
    alHacerScroll() // por si ya está en pantalla al cargar

    return () => {
      vivo = false
      observador?.disconnect()
      window.removeEventListener('scroll', alHacerScroll)
      window.removeEventListener('resize', alHacerScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      data-revelar={visible ? 'visible' : 'oculto'}
      style={{ transitionDelay: visible ? `${retraso}ms` : '0ms' }}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
