import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { HeaderPrivado } from '../../HeaderPrivado'
import { GuiaBloqueada } from '@/components/guia/GuiaBloqueada'
import { verificarAccesoGuia } from '@/lib/guia-acceso'
import { FondoGuia } from '@/components/guia/FondoGuia'
import { MarkdownRenderer } from '@/components/guia/MarkdownRenderer'
import { TocLateral, TocMovil } from '@/components/guia/TocLateral'
import { NavegacionSecciones } from '@/components/guia/NavegacionSecciones'
import { MarcarLeida } from '@/components/guia/MarcarLeida'
import { cargarMarkdownDeSeccion, extraerTitulosH2 } from '@/lib/guia-loader'
import { buscarSeccionPorSlug, capituloDeSeccion } from '@/lib/guia-index'
import { ChevronRight } from 'lucide-react'

/**
 * Página de una sección de la Guía del Aspirante.
 *
 * Server component — todo el trabajo (leer archivo, parsear markdown, extraer
 * TOC) ocurre en el servidor. El cliente recibe HTML ya renderizado.
 *
 * Con generateStaticParams, Next pre-genera estáticamente las 18 páginas en
 * build time — cero costo de render por request en runtime.
 *
 * Paleta: carbón en tono OLIVA, el mismo verde militar de la portada del
 * examen de personalidad. Se logra con dos cosas y nada más:
 *   1. la clase `dark`, que voltea los tokens del sistema a su versión oscura;
 *   2. `--accent` pisado a #AEBE55 (el oliva claro, legible sobre carbón — el
 *      oliva del sistema, #4B5121, es demasiado oscuro para texto).
 * Como el índice lateral, la navegación y el markdown ya usan `accent`, con
 * esa sola línea se pintan de verde sin tocar sus archivos.
 */
const TONO_OLIVA = { '--accent': '#AEBE55' } as CSSProperties

export default async function SeccionGuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const info = buscarSeccionPorSlug(slug)
  if (!info) notFound()

  // El candado va ANTES de tocar el archivo. Si esta persona no tiene acceso, el
  // markdown no se lee siquiera del disco: así no hay contenido que se pueda
  // pescar de la respuesta, que es justo lo que pasaba cuando el único candado
  // era el de cliente. Ver lib/guia-acceso.ts.
  const acceso = await verificarAccesoGuia()
  if (!acceso.permitido) {
    return (
      <div className="dark" style={TONO_OLIVA}>
        <main className="min-h-screen bg-[#161513]">
          <HeaderPrivado />
          <GuiaBloqueada motivo={acceso.motivo} />
        </main>
      </div>
    )
  }

  let markdown: string
  try {
    markdown = await cargarMarkdownDeSeccion(slug)
  } catch {
    notFound()
  }

  const titulosH2 = extraerTitulosH2(markdown)
  const { seccion, anterior, siguiente, indice, total } = info
  const capitulo = capituloDeSeccion(slug)

  return (
    <div className="dark" style={TONO_OLIVA}>
      {/* Deja registrado que ya la leyó (alimenta la barra del mosaico). */}
      <MarcarLeida slug={slug} />

      <main className="min-h-screen bg-[#161513]">
        <HeaderPrivado />

          {/* Ya no va GuardiaGuia: ese candado era de cliente y sólo escondía
              contenido que ya había viajado. El de arriba, en el servidor, lo
              reemplaza — si llegamos hasta aquí, esta persona tiene acceso. */}
          <div className="relative">
            <FondoGuia tono="oliva" sello="plantel" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
              {/* Breadcrumb */}
              <nav
                aria-label="Ruta"
                className="flex items-center gap-1 text-xs text-[#8A8579]"
              >
                <Link href="/inicio" className="hover:text-[#F7F3EA]">
                  Inicio
                </Link>
                <ChevronRight className="h-3 w-3" />
                <Link href="/inicio/guia" className="hover:text-[#F7F3EA]">
                  Guía del Aspirante
                </Link>
                <ChevronRight className="h-3 w-3" />
                {/* Sube al capítulo, no al índice: con el mosaico, volver a la
                    lista de secciones hermanas es el paso natural. */}
                {capitulo && (
                  <>
                    <Link
                      href={`/inicio/guia/capitulo/${capitulo.numero}`}
                      className="hover:text-[#F7F3EA]"
                    >
                      Cap. {capitulo.numero}
                    </Link>
                    <ChevronRight className="h-3 w-3" />
                  </>
                )}
                <span className="text-[#D8D2C4]">§{seccion.numero}</span>
              </nav>

              {/* Encabezado: gafete oliva con el capítulo, marca a la derecha */}
              <div className="mt-5 mb-8 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-[#6B7530]/60 bg-[#4B5121]/40 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E4E0CF]">
                  §{seccion.numero} · {seccion.capitulo}
                </span>
                <span
                  title="El Monote te Guía"
                  className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-black/25 ring-1 ring-[#6B7530]/50"
                >
                  <Image
                    src="/monote-logo.jpeg"
                    alt="El Monote te Guía"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </span>
              </div>

              {/* El índice de teléfono va FUERA de la rejilla a propósito: es
                  pegajoso, y un elemento pegajoso sólo viaja dentro de la caja
                  de su padre. Metido en la rejilla se quedaría clavado. */}
              <TocMovil titulos={titulosH2} />

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
          </div>
      </main>
    </div>
  )
}

/**
 * Estas páginas YA NO se pre-generan estáticas.
 *
 * Antes sí: las 18 secciones se construían en build y se servían iguales para
 * todos, con cero costo por petición. Eso es justo lo que hacía imposible
 * cerrarlas — una página estática no puede preguntar quién la está pidiendo, y
 * el manual completo salía con sólo mandar una cookie `token` inventada.
 *
 * Con `force-dynamic` cada visita se arma en el servidor, que primero comprueba
 * el acceso y sólo entonces lee el .md. El costo es un render y una llamada al
 * backend por visita — nada frente a regalar el contenido. (Además la página ya
 * lee cookies, y eso por sí solo la saca del prerenderizado.)
 */
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const info = buscarSeccionPorSlug(slug)
  if (!info) return { title: 'Sección no encontrada — Guía del Aspirante' }
  return {
    title: `§${info.seccion.numero} ${info.seccion.titulo} — Guía del Aspirante`,
    description: `Sección de la Guía del Aspirante: ${info.seccion.titulo}. Parte del capítulo ${info.seccion.capitulo}.`,
  }
}
