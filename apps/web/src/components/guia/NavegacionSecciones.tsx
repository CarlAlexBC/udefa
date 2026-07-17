import Link from 'next/link'
import { ArrowLeft, ArrowRight, List } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import type { Seccion } from '@/lib/guia-index'

/**
 * Navegación anterior/siguiente al final de una sección de la Guía.
 * Recibe el índice global de la sección actual y los objetos anterior/siguiente.
 * Los NULL indican que estamos al principio o al final de la Guía.
 *
 * Server component — es solo links, no hay estado.
 */
export function NavegacionSecciones({
  anterior,
  siguiente,
  indice,
  total,
}: {
  anterior: (Seccion & { slug: string }) | null
  siguiente: (Seccion & { slug: string }) | null
  indice: number
  total: number
}) {
  return (
    <nav
      aria-label="Navegación entre secciones"
      className="mt-12 border-t border-border pt-6"
    >
      <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Sección {indice + 1} de {total}
        </span>
        <Link
          href="/inicio/guia"
          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
        >
          <List className="h-3.5 w-3.5" />
          Ver índice completo
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {anterior ? (
          <Link
            href={`/inicio/guia/${anterior.slug}`}
            className={cn(
              'group flex flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent',
            )}
          >
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              <ArrowLeft className="h-3 w-3" />
              Sección anterior
            </span>
            <span className="mt-1 text-xs text-muted-foreground">§{anterior.numero}</span>
            <span className="mt-0.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
              {anterior.titulo}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {siguiente ? (
          <Link
            href={`/inicio/guia/${siguiente.slug}`}
            className={cn(
              'group flex flex-col items-end rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-accent',
            )}
          >
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Sección siguiente
              <ArrowRight className="h-3 w-3" />
            </span>
            <span className="mt-1 text-xs text-muted-foreground">§{siguiente.numero}</span>
            <span className="mt-0.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
              {siguiente.titulo}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/inicio"
          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
        >
          ← Volver al panel
        </Link>
      </div>
    </nav>
  )
}
