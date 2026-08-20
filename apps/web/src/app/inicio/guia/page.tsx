import Image from 'next/image'
import { HeaderPrivado } from '../HeaderPrivado'
import { GuardiaGuia } from '@/components/guia/GuardiaGuia'
import { FondoGuia } from '@/components/guia/FondoGuia'
import { Revelar } from '@/components/landing/Revelar'
import { MosaicoCapitulos } from '@/components/guia/MosaicoCapitulos'
import { AvanceGlobalGuia } from '@/components/guia/AvanceGlobalGuia'
import { SECCIONES_ONLINE } from '@/lib/guia-index'
import { BookOpen } from 'lucide-react'

/**
 * Índice de la Guía del Aspirante — mosaico de capítulos.
 *
 * Server component; lo único que corre en el cliente son el mosaico y el
 * renglón de avance, porque leen qué secciones ya se leyeron.
 *
 * Por qué mosaico y no la lista de antes: el manual son 57 secciones en 9
 * capítulos. Listadas de corrido eran una tirada de scroll enorme, y el
 * capítulo 4 (16 secciones) se llevaba casi un tercio él solo. Como
 * tarjetas, el manual completo cabe en una pantalla y cada capítulo pesa
 * lo mismo; las secciones viven en /inicio/guia/capitulo/[numero].
 *
 * La clase `dark` del envoltorio voltea los tokens del sistema a su
 * versión oscura, así que el header privado se pinta oscuro solo.
 */
export default function IndiceGuiaPage() {
  const totalOnline = SECCIONES_ONLINE.length

  return (
    <div className="dark">
      <main className="min-h-screen bg-[#161513]">
        <HeaderPrivado />

        <GuardiaGuia>
          <div className="relative">
            <FondoGuia tono="dorado" sello="udefa" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-16">
              {/* Hero */}
              <div className="rounded-2xl border border-[#C99A3B]/15 bg-white/[0.02] p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C99A3B]/40 bg-[#C99A3B]/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E6CF98]">
                    <BookOpen className="h-3 w-3" />
                    Guía del Aspirante
                  </span>
                  {/* Marca El Monote te Guía */}
                  <span
                    title="El Monote te Guía"
                    className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-black/25 ring-1 ring-[#C99A3B]/35"
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

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#F7F3EA] md:text-4xl">
                  La Guía del Aspirante
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B8B2A4] md:text-base">
                  El manual completo para preparar el examen psicológico UDEFA.{' '}
                  {totalOnline} secciones digitalizadas — todo el contenido
                  dentro de la plataforma. Elige un capítulo para ver sus
                  secciones.
                </p>

                <AvanceGlobalGuia />
              </div>

              {/* Los 9 capítulos */}
              <Revelar>
                <MosaicoCapitulos />
              </Revelar>

              <p className="mt-6 text-xs leading-relaxed text-[#8A8579]">
                Cada sección incluye marco psicológico, mecánica del examen,
                perfiles de riesgo típicos y cómo responder correctamente. Los
                diagnósticos del panel de resultados enlazan directamente a la
                sección que trabaja cada patrón detectado.
              </p>
            </div>
          </div>
        </GuardiaGuia>
      </main>
    </div>
  )
}

export const metadata = {
  title: 'Guía del Aspirante — UDEFA',
  description:
    'Manual completo para preparar el examen psicológico de admisión a la Universidad del Ejército y Fuerza Aérea.',
}
