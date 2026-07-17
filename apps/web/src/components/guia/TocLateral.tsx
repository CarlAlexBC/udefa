'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Table of Contents lateral con scroll-spy.
 *
 * En desktop: sticky en el lado izquierdo, muestra los h2 de la sección
 * con highlight del que está visible según scroll.
 * En mobile: se puede convertir a colapsable (por ahora se oculta).
 *
 * Client component porque necesita IntersectionObserver para el scroll-spy.
 */
export function TocLateral({ titulos }: { titulos: Array<{ texto: string; slug: string }> }) {
  const [activo, setActivo] = useState<string | null>(null)

  useEffect(() => {
    if (titulos.length === 0) return

    // Un IntersectionObserver por cada h2. Cuando uno entra en el rango
    // "área media de la ventana", se marca como activo.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActivo(entry.target.id)
          }
        }
      },
      {
        // El h2 activo es el que está en el 20% superior de la ventana.
        // Un rootMargin negativo hace que solo cuente cuando el heading
        // ya "subió" a la parte alta del viewport.
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    )

    for (const t of titulos) {
      const el = document.getElementById(t.slug)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [titulos])

  if (titulos.length === 0) return null

  return (
    <nav aria-label="Índice de la sección" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          En esta sección
        </p>
        <ul className="flex flex-col gap-1.5 border-l border-border pl-3">
          {titulos.map((t) => (
            <li key={t.slug}>
              <a
                href={`#${t.slug}`}
                className={cn(
                  'block text-xs leading-snug transition-colors hover:text-foreground',
                  activo === t.slug
                    ? 'font-semibold text-accent'
                    : 'text-muted-foreground',
                )}
              >
                {t.texto}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
