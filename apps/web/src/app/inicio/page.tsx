'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { HeaderPrivado } from './HeaderPrivado'
import { EmpiezaPorAqui } from '@/components/onboarding/EmpiezaPorAqui'
import { RachaCard } from '@/components/racha/RachaCard'
import { logoDePlantel } from '@/lib/planteles'
import { MATERIAS_CULTURAL_POR_PLANTEL, unirMaterias } from '@/lib/instrucciones-bloques'
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Loader2,
  Lock,
  Repeat,
  Scale,
  Star,
  TrendingUp,
  UserCircle,
} from 'lucide-react'

/**
 * Estado del candado (muro de pago) para el usuario. `candadoActivo` dice si el
 * muro está encendido; si está apagado, no se pinta ningún candado porque todo
 * está abierto. `modulos` son los módulos de pago ya desbloqueados.
 */
type Acceso = { candadoActivo: boolean; modulos: string[] }

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
  // Por defecto, candado apagado: si la consulta falla, NO bloqueamos nada.
  const [acceso, setAcceso] = useState<Acceso>({ candadoActivo: false, modulos: [] })
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

  // Estado del candado, para saber qué módulos mostrar bloqueados. Si falla,
  // se queda el default (candado apagado = todo abierto).
  useEffect(() => {
    apiFetch<Acceso>('/acceso/mios')
      .then(setAcceso)
      .catch(() => {})
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
        bloqueadoCultural={
          acceso.candadoActivo && !acceso.modulos.includes('cultural')
        }
        bloqueadoPsico={
          acceso.candadoActivo && !acceso.modulos.includes('psicologico')
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
  bloqueadoCultural,
  bloqueadoPsico,
}: {
  perfil: Perfil
  plantel: Plantel
  /** El examen cultural de ESTE plantel, o null si todavía no existe. */
  examenCultural: ExamenDisponible | null
  /** El candado está activo y al usuario le falta comprar el módulo cultural. */
  bloqueadoCultural: boolean
  /** El candado está activo y al usuario le falta comprar el módulo psicológico. */
  bloqueadoPsico: boolean
}) {
  // Materias del examen cultural de ESTE plantel (Biología/Química/Física/Álgebra
  // en las escuelas de sanidad, Español/Álgebra/Historia/Geografía en el HCM).
  // Antes estaban escritas a mano las del HCM para todos.
  const materiasCultural = MATERIAS_CULTURAL_POR_PLANTEL[plantel.nombre] ?? []

  // Paso 2 del onboarding: la práctica cultural si el plantel la tiene y está
  // desbloqueada; si no, el examen psicométrico; y si todo está bajo candado,
  // a precios (no puede practicar sin comprar).
  const hrefPaso2 =
    examenCultural && !bloqueadoCultural
      ? '/inicio/practica-cultural'
      : !bloqueadoPsico
        ? '/inicio/simulador/1'
        : '/precios'

  // Paso 3 del onboarding: ver su avance por tema.
  const hrefPaso3 = '/inicio/avance'

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
          Preparándote para <span className="font-medium text-foreground">{plantel.nombre}</span>.
        </p>
      </div>

      {/* Empieza por aquí — la ruta de primeros pasos; sólo la ve el aspirante
          nuevo (sin exámenes hechos todavía). */}
      <EmpiezaPorAqui hrefPaso2={hrefPaso2} hrefPaso3={hrefPaso3} />

      {/* Racha de días (hábito). Se auto-oculta si el aspirante nunca ha estudiado. */}
      <RachaCard />

      {/* Card del plantel — con logo oficial */}
      <PlantelHeroCard plantel={plantel} />

      {/* Repaso espaciado — la "capa verde". Sólo aparece si el aspirante ya
          tiene cola sembrada (hizo al menos un simulacro cultural). */}
      <RepasoHoyCard />

      {/* Tu avance por tema (semáforo). Siempre disponible; la pantalla resuelve
          el caso de "todavía sin datos". */}
      <Link
        href="/inicio/avance"
        className="group mb-8 flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-military/10">
          <TrendingUp className="h-5 w-5 text-military" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-military">
            Tu avance
          </p>
          <p className="mt-0.5 font-semibold text-foreground">Mira cómo vas por tema</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Tus materias con semáforo: qué dominas y qué reforzar.
          </p>
        </div>
        <ArrowRight className="hidden h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 md:block" />
      </Link>

      {/* CTAs principales: los dos exámenes simuladores completos.
          Son dos pruebas distintas del proceso de admisión y se presentan por
          separado, así que cada una tiene su propio simulador. */}
      <section className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Orden: primero el cultural, después el psicológico (decisión de Carlo). */}
        <SimuladorCompletoCTA
          href={examenCultural ? `/inicio/simulador/${examenCultural.id}` : undefined}
          etiqueta="Examen simulador · Cultural"
          titulo={
            examenCultural
              ? '100 reactivos en 2 horas, contra reloj'
              : 'En preparación para tu plantel'
          }
          descripcion={
            examenCultural
              ? `${unirMaterias(materiasCultural)} de corrido, con un solo cronómetro. Al final ves tus aciertos por materia y qué páginas repasar.`
              : `El examen cultural cambia según la escuela. El banco del ${plantel.nombre} todavía está en preparación.`
          }
          icono={<BookOpen className="h-6 w-6 text-accent" />}
          bloqueado={bloqueadoCultural}
        />
        <SimuladorCompletoCTA
          href="/inicio/sesion"
          etiqueta="Examen simulador · Psicológico"
          titulo="Las 3 fases seguidas, como en el examen real"
          descripcion="Psicométrico → Personalidad → Axiológico. Sin pausa entre fases. Al final ves resultados agregados y coherencia global."
          icono={<Star className="h-6 w-6 text-accent" />}
          bloqueado={bloqueadoPsico}
        />
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
            bloqueado={bloqueadoPsico}
          />
          <ExamenCTA
            href="/inicio/simulador/2"
            fase="Fase 02"
            titulo="Personalidad"
            descripcion="256 reactivos sobre rasgos de personalidad. No hay respuestas correctas: el sistema mide la coherencia de tu perfil."
            icono={<UserCircle className="h-5 w-5 text-accent" />}
            bloqueado={bloqueadoPsico}
          />
          <ExamenCTA
            href="/inicio/simulador/3"
            fase="Fase 03"
            titulo="Axiológico"
            descripcion="39 reactivos sobre valores militares. Responde con honestidad; se evalúa si tu perfil de valores encaja."
            icono={<Scale className="h-5 w-5 text-accent" />}
            bloqueado={bloqueadoPsico}
          />
          {/* El simulador cultural completo vive arriba, con el psicológico.
              Esta tarjeta es para practicar UNA materia sin cronómetro, con
              corrección inmediata y la cita del libro — lo que pide el panel de
              resultados cuando señala en qué páginas fallaste. Sólo se activa si
              el plantel ya tiene examen cultural; si no, queda "próximamente". */}
          {examenCultural ? (
            <ExamenCTA
              href="/inicio/practica-cultural"
              fase="Fase 04"
              titulo="Cultural por materia"
              descripcion={`Practica sólo ${unirMaterias(materiasCultural, 'o')}, sin cronómetro y con la referencia del libro a la mano.`}
              icono={<BookOpen className="h-5 w-5 text-accent" />}
              bloqueado={bloqueadoCultural}
            />
          ) : (
            <ExamenCTA
              fase="Fase 04"
              titulo="Cultural por materia"
              descripcion={`Practica sólo ${unirMaterias(materiasCultural, 'o')}, sin cronómetro y con la referencia del libro a la mano.`}
              icono={<BookOpen className="h-5 w-5 text-accent" />}
              proximamente
            />
          )}
        </div>
      </section>

      {/* Guía del Aspirante — lectura online. Va incluida en el módulo
          psicológico, así que se bloquea junto con él. */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-1 rounded bg-military" />
          <h2 className="text-sm font-semibold text-foreground">
            Material de estudio
          </h2>
        </div>
        {bloqueadoPsico ? (
          <Link
            href="/precios"
            className="group flex items-center gap-4 rounded-xl border border-dashed border-accent/50 bg-card p-5 shadow-sm transition-colors hover:border-accent"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Lock className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                Guía del Aspirante
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Lock className="h-2.5 w-2.5" />
                  Bloqueado
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                El manual completo va incluido en los paquetes Psicológico y Completa. Toca para desbloquearlo.
              </p>
            </div>
            <span className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-accent md:flex">
              Desbloquear
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ) : (
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
        )}
      </section>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: card CTA de un examen
   ═══════════════════════════════════════════════════════════ */
/**
 * Tarjeta grande de un examen simulador completo. Hay una por prueba del
 * proceso —psicológica y cultural— porque se presentan por separado.
 *
 * Sin `href` la tarjeta queda apagada y no navega: es lo que ve un aspirante
 * cuyo plantel todavía no tiene banco cultural.
 */
function SimuladorCompletoCTA({
  href,
  etiqueta,
  titulo,
  descripcion,
  icono,
  bloqueado = false,
}: {
  href?: string
  etiqueta: string
  titulo: string
  descripcion: string
  icono: React.ReactNode
  /** Candado activo y módulo sin comprar: la tarjeta lleva a /precios. */
  bloqueado?: boolean
}) {
  const contenido = (
    <>
      <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
        {icono}
      </div>
      <div className="relative flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
          {etiqueta}
        </p>
        <h3 className="mt-0.5 text-lg font-semibold">{titulo}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{descripcion}</p>
      </div>
    </>
  )

  // Bloqueado por el muro de pago: en vez de entrar al simulador, invita a
  // comprar. Sólo aplica si el examen existe (si no, gana "en preparación").
  if (bloqueado && href) {
    return (
      <Link
        href="/precios"
        className="group relative flex items-center gap-5 overflow-hidden rounded-xl border-2 border-dashed border-accent/50 bg-card p-5 transition-colors hover:border-accent"
      >
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Lock className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="relative flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
            {etiqueta}
          </p>
          <h3 className="mt-0.5 text-lg font-semibold text-foreground">{titulo}</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Desbloquéalo con tu paquete. Toca para ver los precios.
          </p>
        </div>
        <span className="relative hidden shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground md:inline-block">
          Desbloquear
        </span>
      </Link>
    )
  }

  if (!href) {
    return (
      <div
        aria-disabled="true"
        className="relative flex items-center gap-5 overflow-hidden rounded-xl border-2 border-dashed border-border/70 bg-card/60 p-5 opacity-80"
      >
        {contenido}
      </div>
    )
  }

  return (
    <Link
      href={href}
      className="group relative flex items-center gap-5 overflow-hidden rounded-xl border-2 border-accent bg-primary p-5 text-primary-foreground transition-colors hover:bg-primary/90"
    >
      {contenido}
      <ArrowRight className="relative hidden h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 md:block" />
    </Link>
  )
}

function ExamenCTA({
  href,
  fase,
  titulo,
  descripcion,
  icono,
  proximamente = false,
  bloqueado = false,
}: {
  /** Requerido solo si NO es próximamente. */
  href?: string
  fase: string
  titulo: string
  descripcion: string
  icono: React.ReactNode
  /** Fase en desarrollo: renderiza card atenuada, no navegable, con badge. */
  proximamente?: boolean
  /** Candado activo y módulo sin comprar: la tarjeta lleva a /precios. */
  bloqueado?: boolean
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

  // Bloqueado por el muro de pago: lleva a /precios en vez de al simulador.
  if (bloqueado) {
    return (
      <Link
        href="/precios"
        className="group flex flex-col rounded-xl border border-dashed border-accent/50 bg-card p-5 shadow-sm transition-colors hover:border-accent"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            {icono}
          </div>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-accent">
            <Lock className="h-2.5 w-2.5" />
            Bloqueado
          </span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {fase}
        </p>
        <h3 className="mt-1 font-semibold text-foreground">{titulo}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{descripcion}</p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent">
          Desbloquear
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
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
   Sub-componente: entrada al repaso espaciado ("capa verde")
   - Sin cola sembrada (total 0) → no se muestra nada.
   - Con reactivos vencidos hoy   → tarjeta en latón, enlaza al repaso.
   - Al día (0 vencidos) hoy       → tarjeta apagada, sin enlace.
   ═══════════════════════════════════════════════════════════ */

type ResumenRepaso = { pendientesHoy: number; total: number }

function RepasoHoyCard() {
  const [resumen, setResumen] = useState<ResumenRepaso | null>(null)

  useEffect(() => {
    apiFetch<ResumenRepaso>('/repasos/resumen')
      .then(setResumen)
      .catch(() => setResumen(null))
  }, [])

  // Nunca hizo un simulacro cultural → nada que repasar todavía.
  if (!resumen || resumen.total === 0) return null

  if (resumen.pendientesHoy === 0) {
    return (
      <div className="mb-8 flex items-center gap-4 rounded-xl border border-border bg-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-military/10">
          <CheckCircle2 className="h-5 w-5 text-military" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-military">
            Repaso espaciado
          </p>
          <p className="mt-0.5 font-semibold text-foreground">Vas al día</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            No tienes reactivos por repasar hoy. Vuelve mañana.
          </p>
        </div>
      </div>
    )
  }

  const n = resumen.pendientesHoy
  return (
    <Link
      href="/inicio/repaso"
      className="group mb-8 flex items-center gap-4 rounded-xl border-2 border-accent bg-accent/5 p-5 transition-colors hover:bg-accent/10"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/20">
        <Repeat className="h-5 w-5 text-accent" />
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
          Repaso de hoy
        </p>
        <p className="mt-0.5 font-semibold text-foreground">
          {n} {n === 1 ? 'reactivo te espera' : 'reactivos te esperan'}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Repásalos con corrección inmediata y la cita del libro.
        </p>
      </div>
      <ArrowRight className="hidden h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 md:block" />
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
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Encabezado */}
      <div className="mx-auto mb-8 max-w-lg text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          <Star className="h-3 w-3" />
          Elige tu plantel
        </div>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
          Hola {nombre.split(' ')[0]}, todavía no tienes plantel asignado.
        </h1>
        <p className="text-sm text-muted-foreground">
          Elige el plantel al que te preparas. Todo tu contenido (simulador, guía, resultados) se adapta a él.
        </p>
      </div>

      {/* Rejilla de planteles — cada tarjeta con su escudo oficial */}
      <div className="grid gap-3 sm:grid-cols-2">
        {planteles.map((p) => {
          const logoSrc = logoDePlantel(p.nombre)
          const seleccionado = plantelId === p.id
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlantelId(p.id)}
              aria-pressed={seleccionado}
              className={cn(
                'group relative flex items-center gap-4 rounded-xl border p-4 text-left transition-all',
                seleccionado
                  ? 'border-accent bg-accent/5 shadow-sm ring-1 ring-accent'
                  : 'border-border bg-card hover:border-accent/60 hover:bg-muted/40',
              )}
            >
              {/* Palomita en la esquina cuando está elegido */}
              {seleccionado && (
                <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-accent" />
              )}

              {/* Escudo (o placeholder si algún plantel no tuviera logo) */}
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-accent/20 opacity-0 blur-md transition-opacity group-hover:opacity-100"
                />
                {logoSrc ? (
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-card ring-1 ring-accent/30">
                    <Image
                      src={logoSrc}
                      alt={`Escudo de ${p.nombre}`}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-military/15 ring-1 ring-accent/30">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>

              {/* Nombre + lema/descripción */}
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-snug text-foreground">
                  {p.nombre}
                </p>
                <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                  {p.descripcion}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {error && (
        <div className="mx-auto mt-6 flex max-w-md items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-left">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Confirmar — centrado, no del ancho de toda la rejilla */}
      <div className="mx-auto mt-8 flex max-w-sm flex-col items-center">
        <Button
          onClick={asignar}
          disabled={loading || !plantelId}
          className="w-full"
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
      </div>
    </main>
  )
}
