'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { HeaderPrivado } from './HeaderPrivado'
import { logoDePlantel } from '@/lib/planteles'
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Brain,
  Loader2,
  Scale,
  Star,
  UserCircle,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type Plantel = {
  id: number
  nombre: string
  descripcion: string
}

type Perfil = {
  id: number
  nombre: string
  email: string
  rol: string
  plantelId: number | null
  plantel: Plantel | null
}

/**
 * Los exámenes psicológicos son iguales para todos los planteles y por eso
 * llevan `plantelId: null`. El cultural NO: cada plantel tiene su temario y su
 * propio banco de reactivos, así que sólo debe verlo quien va a ese plantel.
 */
type ExamenDisponible = {
  id: number
  tipo: string
  nombre: string
  plantelId: number | null
  anio: number | null
}

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function InicioPage() {
  const [perfil, setPerfil] = useState<Perfil | null>(null)
  const [examenes, setExamenes] = useState<ExamenDisponible[]>([])
  const [error, setError] = useState('')

  const cargarPerfil = useCallback(() => {
    setError('')
    apiFetch<Perfil>('/auth/perfil')
      .then(setPerfil)
      .catch((err) => setError((err as Error).message))
  }, [])

  // Qué exámenes existen, para no ofrecer los de otro plantel. Si la consulta
  // falla no rompemos el dashboard: simplemente no se ofrece el cultural.
  useEffect(() => {
    apiFetch<ExamenDisponible[]>('/examenes')
      .then(setExamenes)
      .catch(() => setExamenes([]))
  }, [])

  useEffect(() => {
    cargarPerfil()
  }, [cargarPerfil])

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-6 text-center">
          <AlertCircle className="mx-auto mb-2 h-6 w-6 text-destructive" />
          <p className="font-semibold text-destructive">
            No pudimos cargar tu perfil
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  if (!perfil) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-sm">Cargando tu perfil...</p>
        </div>
      </div>
    )
  }

  // Usuario sin plantel asignado (legacy) — obligamos a elegir uno antes de continuar.
  if (!perfil.plantel) {
    return (
      <div className="flex-1 bg-background">
        <HeaderPrivado rol={perfil.rol} />
        <SelectorPlantelLegacy nombre={perfil.nombre} onAsignado={cargarPerfil} />
      </div>
    )
  }

  return (
    <div className="flex-1 bg-background">
      <HeaderPrivado rol={perfil.rol} />
      <Dashboard
        perfil={perfil}
        plantel={perfil.plantel}
        examenCultural={
          examenes.find(
            (e) => e.tipo === 'cultural' && e.plantelId === perfil.plantel!.id,
          ) ?? null
        }
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: dashboard cuando el usuario ya tiene plantel
   ═══════════════════════════════════════════════════════════ */

function Dashboard({
  perfil,
  plantel,
  examenCultural,
}: {
  perfil: Perfil
  plantel: Plantel
  /** El examen cultural de ESTE plantel, o null si todavía no existe. */
  examenCultural: ExamenDisponible | null
}) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Saludo personalizado */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-military">
          Bienvenido de vuelta
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
          Hola, {perfil.nombre.split(' ')[0]}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Preparándote para el <span className="font-medium text-foreground">{plantel.nombre}</span>.
        </p>
      </div>

      {/* Card del plantel — con logo oficial */}
      <PlantelHeroCard plantel={plantel} />

      {/* CTA principal: Simulador completo (los 3 exámenes fusionados) */}
      <section className="mb-8">
        <Link
          href="/inicio/sesion"
          className="group relative flex items-center gap-5 overflow-hidden rounded-xl border-2 border-accent bg-primary p-5 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
            <Star className="h-6 w-6 text-accent" />
          </div>
          <div className="relative flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
              Examen simulador completo
            </p>
            <h3 className="mt-0.5 text-lg font-semibold">
              Las 3 fases seguidas, como en el examen real
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Psicométrico → Personalidad → Axiológico. Sin pausa entre fases. Al final ves resultados agregados y coherencia global.
            </p>
          </div>
          <ArrowRight className="relative hidden h-5 w-5 text-accent transition-transform group-hover:translate-x-1 md:block" />
        </Link>
      </section>

      {/* Sección exámenes de práctica — 3 CTAs individuales */}
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-1 rounded bg-military" />
          <h2 className="text-sm font-semibold text-foreground">
            Exámenes de práctica por fase
          </h2>
          <span className="text-xs text-muted-foreground">
            · practica cada uno por separado con resultados inmediatos
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ExamenCTA
            href="/inicio/simulador/1"
            fase="Fase 01"
            titulo="Psicométrico"
            descripcion="4 bloques de 10 min con temporizador. Analogías, sinónimos, razonamiento lógico y abstracto."
            icono={<Brain className="h-5 w-5 text-accent" />}
          />
          <ExamenCTA
            href="/inicio/simulador/2"
            fase="Fase 02"
            titulo="Personalidad"
            descripcion="Escala Likert. 8 temas centrales. El sistema detecta contradicciones entre respuestas."
            icono={<UserCircle className="h-5 w-5 text-accent" />}
          />
          <ExamenCTA
            href="/inicio/simulador/3"
            fase="Fase 03"
            titulo="Axiológico"
            descripcion="Perfil de valores militares. Escala de 5 puntos. Responde honestamente."
            icono={<Scale className="h-5 w-5 text-accent" />}
          />
          {/* El cultural depende del plantel: cada uno tiene su temario y su
              banco. Sin examen para el plantel del aspirante, la tarjeta se
              muestra apagada — nunca con el examen de otra escuela. */}
          <ExamenCTA
            href={examenCultural ? `/inicio/simulador/${examenCultural.id}` : undefined}
            fase="Fase 04"
            titulo="Cultural"
            descripcion={
              examenCultural
                ? '100 reactivos de Español, Álgebra, Historia y Geografía. 2 horas con un solo cronómetro.'
                : `Cambia según el plantel. El banco del ${plantel.nombre} está en preparación.`
            }
            icono={<BookOpen className="h-5 w-5 text-accent" />}
            proximamente={!examenCultural}
          />
        </div>
      </section>

      {/* Guía del Aspirante — lectura online */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-1 rounded bg-military" />
          <h2 className="text-sm font-semibold text-foreground">
            Material de estudio
          </h2>
        </div>
        <Link
          href="/inicio/guia"
          className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-military/10">
            <BookOpen className="h-5 w-5 text-military" />
          </div>
          <div className="flex-1">
            <p className="flex items-center gap-2 font-semibold text-foreground transition-colors group-hover:text-accent">
              Guía del Aspirante
              <span className="inline-flex items-center gap-1 rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                Manual completo online
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              El manual completo. Estrategias por bloque, marcos psicológicos, y cómo responder cada eje del examen.
            </p>
          </div>
          <ArrowRight className="hidden h-4 w-4 text-accent transition-transform group-hover:translate-x-1 md:block" />
        </Link>
      </section>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: card CTA de un examen
   ═══════════════════════════════════════════════════════════ */
function ExamenCTA({
  href,
  fase,
  titulo,
  descripcion,
  icono,
  proximamente = false,
}: {
  /** Requerido solo si NO es próximamente. */
  href?: string
  fase: string
  titulo: string
  descripcion: string
  icono: React.ReactNode
  /** Fase en desarrollo: renderiza card atenuada, no navegable, con badge. */
  proximamente?: boolean
}) {
  if (proximamente) {
    return (
      <div
        aria-disabled="true"
        className="flex flex-col rounded-xl border border-dashed border-border/70 bg-card/60 p-5 opacity-80"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            {icono}
          </div>
          <span className="ml-auto rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-accent">
            Próximamente
          </span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {fase}
        </p>
        <h3 className="mt-1 font-semibold text-foreground">{titulo}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">
          {descripcion}
        </p>
        <div className="mt-3 text-xs font-medium italic text-muted-foreground">
          Simulador en construcción
        </div>
      </div>
    )
  }

  return (
    <Link
      href={href!}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
        {icono}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-military">
        {fase}
      </p>
      <h3 className="mt-1 font-semibold text-foreground">{titulo}</h3>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">
        {descripcion}
      </p>
      <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent">
        Iniciar simulador
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: hero card del plantel elegido por el usuario
   Muestra el logo oficial cuando existe, si no un placeholder.
   ═══════════════════════════════════════════════════════════ */
function PlantelHeroCard({ plantel }: { plantel: Plantel }) {
  const logoSrc = logoDePlantel(plantel.nombre)
  return (
    <article className="mb-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        <div className="relative flex items-center justify-center overflow-hidden bg-primary p-6 md:h-full">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(201,154,59,0.06) 12px, rgba(201,154,59,0.06) 24px)',
            }}
          />
          {logoSrc ? (
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-accent/25 blur-xl"
              />
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full ring-1 ring-accent/40 shadow-lg">
                <Image
                  src={logoSrc}
                  alt={`Escudo de ${plantel.nombre}`}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col items-center gap-1 text-center">
              <Star className="h-6 w-6 text-accent" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Tu plantel elegido
              </p>
            </div>
          )}
        </div>
        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
            Tu plantel elegido
          </p>
          <h2 className="mt-1 text-lg font-semibold text-foreground">
            {plantel.nombre}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {plantel.descripcion}
          </p>
        </div>
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: selector para usuarios legacy sin plantel
   ═══════════════════════════════════════════════════════════ */

function SelectorPlantelLegacy({
  nombre,
  onAsignado,
}: {
  nombre: string
  onAsignado: () => void
}) {
  const [planteles, setPlanteles] = useState<Plantel[]>([])
  const [plantelId, setPlantelId] = useState<number | ''>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    apiFetch<Plantel[]>('/planteles')
      .then(setPlanteles)
      .catch(() =>
        setError('No pudimos cargar los planteles. Refresca la página.'),
      )
  }, [])

  async function asignar() {
    if (!plantelId) {
      setError('Elige un plantel.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await apiFetch('/usuarios/mi-plantel', {
        method: 'PATCH',
        body: { plantelId },
      })
      onAsignado()
    } catch (err) {
      setError((err as Error).message)
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto flex max-w-lg flex-col items-center px-6 py-16 text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
        Elige tu plantel
      </div>
      <h1 className="mb-2 text-2xl font-semibold text-foreground">
        Hola {nombre.split(' ')[0]}, todavía no tienes plantel asignado.
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Elige el plantel al que te preparas. Todo tu contenido (simulador, guía, resultados) se adapta a él.
      </p>

      <div className="w-full space-y-3">
        {planteles.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPlantelId(p.id)}
            className={cn(
              'w-full rounded-lg border p-4 text-left transition-colors',
              plantelId === p.id
                ? 'border-primary bg-accent/10'
                : 'border-border bg-card hover:bg-muted',
            )}
          >
            <p className="font-semibold text-foreground">{p.nombre}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {p.descripcion}
            </p>
          </button>
        ))}
      </div>

      {error && (
        <div className="mt-4 flex w-full items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-left">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <Button
        onClick={asignar}
        disabled={loading || !plantelId}
        className="mt-6 w-full"
        size="lg"
      >
        {loading ? 'Guardando...' : 'Confirmar plantel'}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Button>

      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'mt-4 text-xs text-muted-foreground',
        )}
      >
        ← Salir sin elegir
      </Link>
    </main>
  )
}
