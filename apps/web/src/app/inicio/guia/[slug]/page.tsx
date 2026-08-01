import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HeaderPrivado } from '../../HeaderPrivado'
import { GuardiaGuia } from '@/components/guia/GuardiaGuia'
import { MarkdownRenderer } from '@/components/guia/MarkdownRenderer'
import { TocLateral } from '@/components/guia/TocLateral'
import { NavegacionSecciones } from '@/components/guia/NavegacionSecciones'
import { cargarMarkdownDeSeccion, extraerTitulosH2 } from '@/lib/guia-loader'
import { buscarSeccionPorSlug, SECCIONES_ONLINE } from '@/lib/guia-index'
import { ChevronRight } from 'lucide-react'

/**
 * Página de una sección de la Guía del Aspirante.
 *
 * Server component — todo el trabajo (leer archivo, parsear markdown, extraer
 * TOC) ocurre en el servidor. El cliente recibe HTML ya renderizado.
 *
 * Con generateStaticParams, Next pre-genera estáticamente las 18 páginas en
 * build time — cero costo de render por request en runtime.
 */
export default async function SeccionGuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const info = buscarSeccionPorSlug(slug)
  if (!info) notFound()

  let markdown: string
  try {
    markdown = await cargarMarkdownDeSeccion(slug)
  } catch {
    notFound()
  }

  const titulosH2 = extraerTitulosH2(markdown)
  const { seccion, anterior, siguiente, indice, total } = info

  return (
    <main className="min-h-screen bg-background">
      <HeaderPrivado />

      <GuardiaGuia>
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Ruta" className="mb-6 flex items-center gap-1 text-xs text-muted-foreground">
          <Link href="/inicio" className="hover:text-foreground">
            Inicio
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/inicio/guia" className="hover:text-foreground">
            Guía del Aspirante
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">
            §{seccion.numero} · {seccion.capitulo}
          </span>
        </nav>

        {/* Contenido + TOC lateral */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
          <TocLateral titulos={titulosH2} />

          <article>
            <MarkdownRenderer markdown={markdown} />
            <NavegacionSecciones
              anterior={anterior}
              siguiente={siguiente}
              indice={indice}
              total={total}
            />
          </article>
        </div>
      </div>
      </GuardiaGuia>
    </main>
  )
}

/**
 * Pre-genera estáticamente las páginas de las 18 secciones online.
 * `dynamicParams: false` hace que cualquier slug fuera del set devuelva 404
 * sin re-generar en runtime.
 */
export function generateStaticParams() {
  return SECCIONES_ONLINE.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const info = buscarSeccionPorSlug(slug)
  if (!info) return { title: 'Sección no encontrada — Guía del Aspirante' }
  return {
    title: `§${info.seccion.numero} ${info.seccion.titulo} — Guía del Aspirante`,
    description: `Sección de la Guía del Aspirante: ${info.seccion.titulo}. Parte del capítulo ${info.seccion.capitulo}.`,
  }
}
