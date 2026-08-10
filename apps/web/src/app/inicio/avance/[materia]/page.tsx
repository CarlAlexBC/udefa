import Link from 'next/link'
import { HeaderPrivado } from '../../HeaderPrivado'
import { FondoGuia } from '@/components/guia/FondoGuia'
import { DetalleMateriaAvance } from '@/components/avance/DetalleMateriaAvance'
import { ChevronRight } from 'lucide-react'

/**
 * Detalle de una materia de "Tu avance" — el segundo nivel del mosaico, igual
 * que un capítulo de la Guía. Aquí viven los temas con su semáforo.
 *
 * La materia llega en la URL (puede traer acentos/espacios, por eso se
 * decodifica). El cuerpo dinámico —que pide el avance del aspirante— vive en un
 * componente de cliente; esta página sólo arma el marco oscuro y la miga de pan.
 */
export default async function AvanceMateriaPage({
  params,
}: {
  params: Promise<{ materia: string }>
}) {
  const { materia } = await params
  const nombre = decodeURIComponent(materia)

  return (
    <div className="dark">
      <main className="min-h-screen bg-[#161513]">
        <HeaderPrivado />

        <div className="relative">
          <FondoGuia tono="dorado" sello="plantel" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-8">
            <nav aria-label="Ruta" className="flex items-center gap-1 text-xs text-[#8A8579]">
              <Link href="/inicio" className="hover:text-[#F7F3EA]">
                Inicio
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/inicio/avance" className="hover:text-[#F7F3EA]">
                Tu avance
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#D8D2C4]">{nombre}</span>
            </nav>

            <DetalleMateriaAvance materia={nombre} />

            <div className="mt-8">
              <Link
                href="/inicio/avance"
                className="text-xs font-medium text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
              >
                ← Todas las materias
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
