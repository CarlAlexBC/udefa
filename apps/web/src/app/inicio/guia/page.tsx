import Link from 'next/link'
import { HeaderPrivado } from '../HeaderPrivado'
import { cn } from '@/lib/utils'
import { CAPITULOS_GUIA } from '@/lib/guia-index'
import { BookOpen, Sparkles, FileText } from 'lucide-react'

/**
 * Índice de la Guía del Aspirante.
 * Server component — todo el contenido es estático y se genera en build.
 *
 * Renderiza los 8 capítulos del docx original con sus secciones.
 * Toda la Guía es 100% digital — no hay redirección a PDF.
 * Las secciones marcadas con ✳️ (marca 'nueva') son las que se
 * escribieron específicamente para cubrir huecos del panel de resultados.
 */
export default function IndiceGuiaPage() {
  const totalOnline = CAPITULOS_GUIA.flatMap((c) => c.secciones).length

  return (
    <main className="min-h-screen bg-background">
      <HeaderPrivado />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
          <div className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-1 rounded-full border border-military/40 bg-military/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military-foreground">
              <BookOpen className="h-3 w-3" />
              Guía del Aspirante
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              La Guía del Aspirante
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
              El manual completo para preparar el examen psicológico UDEFA. {totalOnline} secciones
              digitalizadas — todo el contenido dentro de la plataforma.
            </p>
          </div>
        </div>

        {/* Nota introductoria */}
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-military/30 bg-military/5 p-4">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-military" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Manual completo — 8 capítulos, {totalOnline} secciones
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Cada sección incluye marco psicológico, mecánica del examen, perfiles de riesgo
              típicos y cómo responder correctamente. Los diagnósticos del panel de resultados
              enlazan directamente a la sección específica que trabaja cada patrón detectado.
            </p>
          </div>
        </div>

        {/* Capítulos */}
        <section className="mt-10 space-y-8">
          {CAPITULOS_GUIA.map((capitulo) => (
            <div key={capitulo.numero}>
              <div className="mb-3 flex items-baseline gap-3">
                <span className="rounded bg-military/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-military">
                  Cap. {capitulo.numero}
                </span>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {capitulo.titulo}
                </h2>
              </div>
              {capitulo.subtitulo && (
                <p className="mb-4 text-sm text-muted-foreground">{capitulo.subtitulo}</p>
              )}

              <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
                {capitulo.secciones.map((seccion) => (
                  <li key={seccion.numero}>
                    <Link
                      href={`/inicio/guia/${seccion.slug}`}
                      className="group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-accent/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-14 shrink-0 text-xs font-semibold text-muted-foreground">
                          §{seccion.numero}
                        </span>
                        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                          {seccion.titulo}
                        </span>
                        {seccion.marca === 'nueva' && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                            <Sparkles className="h-2.5 w-2.5" />
                            Nueva
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                        Leer online →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Guía del Aspirante — UDEFA',
  description:
    'Manual completo para preparar el examen psicológico de admisión a la Universidad del Ejército y Fuerza Aérea.',
}
