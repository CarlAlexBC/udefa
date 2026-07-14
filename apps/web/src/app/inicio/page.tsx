import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HeaderPrivado } from './HeaderPrivado'
import { ArrowRight, Star } from 'lucide-react'

type Plantel = {
  id: number
  nombre: string
  descripcion: string
}

export default async function Inicio() {
  const res = await fetch('http://localhost:3001/planteles', {
    // Sin cache — siempre traemos la lista fresca del backend.
    cache: 'no-store',
  })
  const planteles: Plantel[] = await res.json()

  return (
    <div className="flex-1 bg-background">
      <HeaderPrivado />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-military">
            <span className="h-px w-4 bg-military" />
            Planteles disponibles
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Elige tu ruta militar.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Al escoger un plantel entras al simulador enfocado en las 3 fases del examen psicológico común a todos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {planteles.map((p) => (
            <PlantelCard key={p.id} plantel={p} />
          ))}
        </div>
      </main>
    </div>
  )
}

function PlantelCard({ plantel }: { plantel: Plantel }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Placeholder de foto — se reemplaza con next/image cuando tengas las 3 fotos */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-primary">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(201,154,59,0.06) 12px, rgba(201,154,59,0.06) 24px)',
          }}
        />
        <div className="relative flex flex-col items-center gap-1 text-center">
          <Star className="h-6 w-6 text-accent" />
          <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
            Foto pendiente
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-semibold text-foreground">{plantel.nombre}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {plantel.descripcion}
        </p>

        <Link
          href={`/inicio/plantel/${plantel.id}`}
          className={cn(
            buttonVariants({ variant: 'default', size: 'default' }),
            'mt-4 w-full'
          )}
        >
          Preparar admisión
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
