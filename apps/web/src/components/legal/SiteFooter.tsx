import Link from 'next/link'
import { AVISO_INDEPENDENCIA_CORTO, DOCUMENTOS_LEGALES, LEGAL } from '@/lib/legal'

/**
 * Pie de página compartido del sitio.
 *
 * Lleva el aviso de independencia (lo más importante para dejar claro que el
 * proyecto no está afiliado a instituciones militares) y los enlaces a los seis
 * documentos legales. Se usa en la portada y en las páginas legales.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Aviso de independencia — destacado */}
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {AVISO_INDEPENDENCIA_CORTO}
        </p>

        {/* Enlaces a los documentos legales */}
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {DOCUMENTOS_LEGALES.map((doc) => (
            <Link
              key={doc.slug}
              href={`/legal/${doc.slug}`}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {doc.titulo}
            </Link>
          ))}
        </nav>

        {/* Línea de créditos */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 {LEGAL.nombreComercial} · {LEGAL.titular}</p>
          <p>Uso personal · Prohibida su distribución</p>
        </div>
      </div>
    </footer>
  )
}
