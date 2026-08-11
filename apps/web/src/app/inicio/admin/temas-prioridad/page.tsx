import { HeaderPrivado } from '../../HeaderPrivado'
import { TablaPrioridades } from './TablaPrioridades'
import { Sparkles } from 'lucide-react'

/**
 * Panel admin para el catálogo de prioridades de temas.
 *
 * Sin RBAC aún — cualquier usuario logueado puede acceder. Cuando se
 * implemente el rol admin, se protege con un guard adicional. Por
 * ahora es admin-de-facto.
 */
export default function AdminTemasPrioridadPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderPrivado />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero card.

            Carbón escrito a mano y NO `bg-primary`/`text-primary-foreground`:
            esos tokens se invierten con el tema (carbón sobre crema en claro,
            latón sobre carbón en oscuro), así que al pasar el panel a oscuro
            esta portada se volvía un bloque dorado. Aquí siempre es la placa
            oscura con la letra crema. */}
        <div className="relative overflow-hidden rounded-2xl bg-[#1C1A17] p-8 text-[#F7F3EA]">
          <div className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-1 rounded-full border border-military/40 bg-military/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military-foreground">
              <Sparkles className="h-3 w-3" />
              Admin
            </span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Prioridad de temas
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Ajusta el peso de cada tema del examen de personalidad. Un peso más alto
              hace que los reactivos de ese tema aparezcan con mayor frecuencia en el
              muestreo estratificado. Rango: 1 (base) a 10 (dominante).
            </p>
          </div>
        </div>

        {/* Nota contextual */}
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-military/30 bg-military/5 p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-military" />
          <div className="text-xs leading-relaxed text-muted-foreground">
            <p className="mb-1 font-semibold text-foreground">Cómo funciona</p>
            <p>
              El muestreo estratificado solo tiene efecto real en el examen de{' '}
              <span className="font-semibold">personalidad</span> (256 reactivos, 38+
              temas granulares en un solo bloque). El psicométrico y el axiológico ya
              distribuyen sus reactivos por otros criterios. Los cambios aquí se
              aplican al próximo examen armado; los intentos ya iniciados no se ven
              afectados.
            </p>
          </div>
        </div>

        {/* Tabla editable */}
        <TablaPrioridades />
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Admin · Prioridad de temas',
}
