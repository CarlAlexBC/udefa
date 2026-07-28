import Image from 'next/image'
import Link from 'next/link'
import { SiteFooter } from '@/components/legal/SiteFooter'
import { DOCUMENTOS_LEGALES } from '@/lib/legal'

/**
 * Diseño compartido de las páginas legales: encabezado con logo, índice de los
 * seis documentos y pie de página con el aviso de independencia.
 */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Encabezado */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/monote-logo.jpeg"
              alt="El Monote te Guía"
              width={36}
              height={36}
              className="rounded-full ring-1 ring-accent/30"
            />
            <span className="text-sm font-semibold text-foreground">
              El Monote te Guía
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Cuerpo: índice + documento */}
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10 md:flex-row">
        {/* Índice de documentos */}
        <aside className="md:w-56 md:shrink-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-military">
            Documentos legales
          </p>
          <nav className="flex flex-col gap-1">
            {DOCUMENTOS_LEGALES.map((doc) => (
              <Link
                key={doc.slug}
                href={`/legal/${doc.slug}`}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {doc.titulo}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Contenido del documento */}
        <article className="min-w-0 flex-1">{children}</article>
      </div>

      <SiteFooter />
    </div>
  )
}
