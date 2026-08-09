import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { HeaderPrivado } from '../../../HeaderPrivado'
import { GuardiaGuia } from '@/components/guia/GuardiaGuia'
import { FondoGuia } from '@/components/guia/FondoGuia'
import { ListaSeccionesCapitulo } from '@/components/guia/ListaSeccionesCapitulo'
import { CAPITULOS_GUIA, buscarCapituloPorNumero } from '@/lib/guia-index'
import { ChevronRight } from 'lucide-react'

/**
 * Página de un capítulo de la Guía del Aspirante — el segundo nivel del
 * mosaico. Aquí viven las secciones que antes estaban todas apiladas en
 * el índice.
 *
 * Tono OLIVA, el verde militar de la portada del examen de personalidad:
 * el índice es dorado, y de aquí para adentro (capítulo y lectura) todo
 * es verde. Así el aspirante sabe por el color si está eligiendo o
 * leyendo. Se logra con la clase `dark` más `--accent` pisado al oliva
 * claro (#AEBE55); el del sistema, #4B5121, es muy oscuro sobre carbón.
 */
const TONO_OLIVA = { '--accent': '#AEBE55' } as CSSProperties

export default async function CapituloGuiaPage({
  params,
}: {
  params: Promise<{ numero: string }>
}) {
  const { numero } = await params
  const capitulo = buscarCapituloPorNumero(numero)
  if (!capitulo) notFound()

  const total = capitulo.secciones.length

  return (
    <div className="dark" style={TONO_OLIVA}>
      <main className="min-h-screen bg-[#161513]">
        <HeaderPrivado />

        <GuardiaGuia>
          <div className="relative">
            <FondoGuia tono="oliva" sello="monote" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 py-8">
              {/* Miga de pan */}
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
                <span className="text-[#D8D2C4]">Capítulo {capitulo.numero}</span>
              </nav>

              {/* Encabezado del capítulo */}
              <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6B7530]/50 bg-[#4B5121]/30 text-base font-bold tabular-nums text-[#AEBE55]">
                    {capitulo.numero.padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h1 className="text-balance text-2xl font-bold tracking-tight text-[#F7F3EA] sm:text-3xl">
                      {capitulo.titulo}
                    </h1>
                    <p className="mt-1 text-sm text-[#9A9382]">
                      {total} {total === 1 ? 'sección' : 'secciones'}
                      {capitulo.subtitulo ? ` · ${capitulo.subtitulo}` : ''}
                    </p>
                  </div>
                </div>

                <span
                  title="El Monote te Guía"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black/25 ring-1 ring-[#6B7530]/50 sm:flex"
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

              <ListaSeccionesCapitulo secciones={capitulo.secciones} />

              <div className="mt-8">
                <Link
                  href="/inicio/guia"
                  className="text-xs font-medium text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
                >
                  ← Todos los capítulos
                </Link>
              </div>
            </div>
          </div>
        </GuardiaGuia>
      </main>
    </div>
  )
}

/** Pre-genera los 9 capítulos en build; cualquier otro número da 404. */
export function generateStaticParams() {
  return CAPITULOS_GUIA.map((c) => ({ numero: c.numero }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ numero: string }>
}) {
  const { numero } = await params
  const capitulo = buscarCapituloPorNumero(numero)
  if (!capitulo) return { title: 'Capítulo no encontrado — Guía del Aspirante' }
  return {
    title: `Cap. ${capitulo.numero} ${capitulo.titulo} — Guía del Aspirante`,
    description:
      capitulo.subtitulo ??
      `Capítulo ${capitulo.numero} de la Guía del Aspirante: ${capitulo.titulo}.`,
  }
}
