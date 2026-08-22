'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { colorDeExamen, HOJA_DE_PLATA_CLARA } from '@/lib/colores-paquete'
import { Button } from '@/components/ui/button'
import { EntiendeElTema } from '@/components/entiende-tema/EntiendeElTema'
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Loader2,
  XCircle,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Repaso espaciado — la "capa verde".

   Un reactivo a la vez, con corrección inmediata y la cita del
   libro. Al contestar, el backend mueve la caja de Leitner y
   devuelve la corrección; aquí sólo la pintamos.
   ═══════════════════════════════════════════════════════════ */

/**
 * El color de esta pantalla. Va fijo a 'cultural' porque el backend NO deja
 * sembrar la cola con otra cosa: `RepasosService` rechaza el intento si
 * `examen.tipo !== 'cultural'` — el repaso es de recuerdo literal.
 *
 * OJO CON EL VOCABULARIO DE COLOR de esta pantalla, que corrige al momento:
 *   · azul  = de qué examen es, y cuál opción elegí (antes de contestar)
 *   · verde = la respuesta correcta
 *   · rojo  = la que elegí y estaba mal
 * El verde significa "correcta" en TODA la app (panel de resultados, ejemplo de
 * las indicaciones). Antes aquí era latón, que ya significa marca y "esto
 * elegiste". NO lo devuelvas al latón.
 */
const ACENTO = colorDeExamen('cultural', 'claro')

/**
 * Cuántos días faltan para una fecha. Mínimo 1: si el backend devuelve una
 * fecha de hoy, decir "en 0 días" no le sirve a nadie.
 *
 * Vive FUERA del componente a propósito. Lee el reloj, y React exige que lo
 * que se ejecuta al pintar dé siempre el mismo resultado con los mismos datos
 * — `Date.now()` no lo cumple. Aquí sólo la llama el manejador del clic, que sí
 * puede leer el reloj; y al estar afuera, la regla de pureza no la confunde con
 * código de render.
 */
function diasHasta(fechaIso: string): number {
  const MS_POR_DIA = 86_400_000
  return Math.max(
    1,
    Math.round((new Date(fechaIso).getTime() - Date.now()) / MS_POR_DIA),
  )
}

type ReactivoPendiente = {
  reactivoId: number
  caja: number
  enunciado: string
  tema: string | null
  opciones: string[]
  /** Figura adjunta, para los reactivos cuya pregunta vive en la imagen. */
  imagenUrl?: string | null
}

/** Lo que devuelve POST /repasos/:reactivoId/responder. */
type Correccion = {
  esCorrecta: boolean
  respuestaCorrecta: string | null
  explicacion: string | null
  referencia: string | null
  cajaAnterior: number
  caja: number
  proximoRepaso: string
}

type Perfil = {
  plantel: { nombre: string } | null
}

type Estado = 'cargando' | 'estudiando' | 'vacio' | 'terminado' | 'error'

/** Cuántas cajas de Leitner hay — para el indicador de progreso del dato. */
const TOTAL_CAJAS = 5

export default function RepasoPage() {
  const [estado, setEstado] = useState<Estado>('cargando')
  const [error, setError] = useState('')
  const [pendientes, setPendientes] = useState<ReactivoPendiente[]>([])
  const [indice, setIndice] = useState(0)
  const [plantel, setPlantel] = useState<string | null>(null)

  // Del reactivo actual: qué opción tocó y la corrección que volvió del backend.
  // `correccion === null` significa que todavía no ha contestado este reactivo.
  const [seleccion, setSeleccion] = useState<string | null>(null)
  const [correccion, setCorreccion] = useState<Correccion | null>(null)
  /**
   * Cuántos días faltan para que este reactivo vuelva a salir.
   *
   * Se guarda en estado en vez de calcularse al pintar porque leer el reloj
   * (`Date.now()`) durante el render vuelve al componente impredecible: dos
   * dibujados seguidos pueden dar números distintos. Aquí se calcula UNA vez,
   * en el manejador del evento —que sí puede leer el reloj— y ya no cambia.
   */
  const [diasProximo, setDiasProximo] = useState<number | null>(null)
  const [enviando, setEnviando] = useState(false)

  const actual = pendientes[indice]
  const total = pendientes.length

  /* ─── Cargar la cola del día + el plantel para la barra superior ─── */
  useEffect(() => {
    Promise.all([
      apiFetch<ReactivoPendiente[]>('/repasos/pendientes'),
      apiFetch<Perfil>('/auth/perfil').catch(() => null),
    ])
      .then(([cola, perfil]) => {
        setPlantel(perfil?.plantel?.nombre ?? null)
        setPendientes(cola)
        setEstado(cola.length === 0 ? 'vacio' : 'estudiando')
      })
      .catch((err) => {
        setError((err as Error).message)
        setEstado('error')
      })
  }, [])

  /* ─── Contestar el reactivo actual ─── */
  async function responder(opcion: string) {
    if (!actual || correccion || enviando) return
    setSeleccion(opcion)
    setEnviando(true)
    setError('')
    try {
      const res = await apiFetch<Correccion>(
        `/repasos/${actual.reactivoId}/responder`,
        { method: 'POST', body: { respuestaSeleccionada: opcion } },
      )
      setCorreccion(res)
      // El reloj se lee AQUÍ, en el manejador, no al pintar (ver `diasProximo`).
      setDiasProximo(diasHasta(res.proximoRepaso))
    } catch (err) {
      // Dejamos volver a intentar: limpiamos la selección y mostramos el error.
      setSeleccion(null)
      setError((err as Error).message)
    } finally {
      setEnviando(false)
    }
  }

  /* ─── Pasar al siguiente (o terminar) ─── */
  const siguiente = useCallback(() => {
    setSeleccion(null)
    setCorreccion(null)
    setDiasProximo(null)
    setError('')
    setIndice((i) => {
      if (i < pendientes.length - 1) return i + 1
      setEstado('terminado')
      return i
    })
  }, [pendientes.length])

  /* ═══════════════ Pantallas simples ═══════════════ */

  if (estado === 'cargando') {
    return (
      <Centrado>
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-sm">Preparando tu repaso...</p>
      </Centrado>
    )
  }

  if (estado === 'error') {
    return (
      <Centrado>
        <div className="max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-6 text-center">
          <AlertCircle className="mx-auto mb-2 h-6 w-6 text-destructive" />
          <p className="font-semibold text-destructive">
            No pudimos cargar tu repaso
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <VolverAlPanel className="mt-4" />
        </div>
      </Centrado>
    )
  }

  if (estado === 'vacio') {
    return (
      <Centrado>
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-military/10">
            <CheckCircle2 className="h-7 w-7 text-military" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            Vas al día
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            No tienes reactivos por repasar hoy. Vuelve mañana, o haz un
            simulacro cultural para sembrar más.
          </p>
          <VolverAlPanel className="mt-6" />
        </div>
      </Centrado>
    )
  }

  if (estado === 'terminado') {
    return (
      <Centrado>
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <BookOpen className="h-7 w-7 text-accent" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            Repaso terminado
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Repasaste {total} {total === 1 ? 'reactivo' : 'reactivos'}. Lo que
            fallaste vuelve mañana; lo que dominaste, más adelante.
          </p>
          <VolverAlPanel className="mt-6" />
        </div>
      </Centrado>
    )
  }

  /* ═══════════════ Pantalla de estudio ═══════════════ */

  if (!actual) return null

  const progresoPct = ((indice + 1) / total) * 100

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Barra superior: prueba · plantel a la izquierda, avance a la derecha */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: ACENTO.c }}
          >
            Cultural{plantel ? ` · ${plantel}` : ''}
          </p>
          <p className="shrink-0 text-xs font-medium text-muted-foreground">
            Repaso de hoy · {indice + 1} de {total}
          </p>
        </div>
        <div className="h-1 w-full bg-muted">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progresoPct}%`, backgroundColor: ACENTO.c }}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
        {/* Tarjeta del reactivo — la misma hoja de plata del simulador y del
            landing. Va NEUTRA: el color del examen ya lo llevan la etiqueta de
            arriba, la barra de avance y la opción elegida. Y aquí pesa doble no
            teñirla, porque esta pantalla corrige al momento y el olivo y el
            rojo tienen que mandar. */}
        <div
          className="rounded-2xl border p-6 sm:p-8"
          style={{
            backgroundImage: HOJA_DE_PLATA_CLARA.fondo,
            borderColor: HOJA_DE_PLATA_CLARA.borde,
            boxShadow: HOJA_DE_PLATA_CLARA.sombra,
          }}
        >
          {actual.tema && (
            <p
              className="text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: ACENTO.c }}
            >
              {actual.tema}
            </p>
          )}
          <div className="mt-3 mb-6 flex min-h-[96px] items-center">
            <h1 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
              {actual.enunciado}
            </h1>
          </div>

          {/* Figura del reactivo, si la trae. Mismo tratamiento que en el
              simulador: <img> normal —no next/image— porque el alto cambia de un
              reactivo a otro, con tope de alto para que en el teléfono no se
              coma la pantalla entera. */}
          {actual.imagenUrl && (
            <div className="mb-6 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={actual.imagenUrl}
                alt="Figura del reactivo"
                className="max-h-[46vh] w-auto max-w-full rounded-lg border border-border bg-neutral-900 object-contain"
              />
            </div>
          )}


          <div className="flex flex-col gap-3">
            {actual.opciones.map((opcion, i) => (
              <OpcionRepaso
                key={opcion}
                opcion={opcion}
                letra={String.fromCharCode(65 + i)}
                seleccion={seleccion}
                correccion={correccion}
                enviando={enviando}
                onSelect={() => responder(opcion)}
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="mt-4 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {/* Corrección: cita del libro + salto de caja. Sólo tras contestar. */}
        {correccion && (
          <>
            {correccion.explicacion && (
              <div className="mt-4 rounded-xl border border-border bg-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                  Lo que dice el libro
                </p>
                <p className="mt-2 text-sm italic leading-relaxed text-foreground">
                  «{correccion.explicacion}»
                </p>
                {correccion.referencia && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5 shrink-0" />
                    {correccion.referencia}
                  </p>
                )}
              </div>
            )}

            {/* Misma ayuda que en la práctica: debajo de la cita, nunca en su
                lugar. El repaso también cuenta como "ya contestó ese reactivo",
                así que el backend la entrega. */}
            {actual && <EntiendeElTema reactivoId={actual.reactivoId} />}

            <div className="mt-6 flex items-center justify-between gap-4">
              <MovimientoCaja correccion={correccion} dias={diasProximo} />
              <Button onClick={siguiente} size="lg">
                {indice < total - 1 ? 'Siguiente' : 'Terminar'}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/inicio"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            ← Salir del repaso
          </Link>
        </div>
      </div>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: una opción, con sus tres estados de corrección
   - correcta   → latón, "Correcta"
   - elegida y mal → rojo, "Elegiste esta"
   - las demás  → apagadas
   Antes de contestar es un botón normal (o marcado mientras envía).
   ═══════════════════════════════════════════════════════════ */

function OpcionRepaso({
  opcion,
  letra,
  seleccion,
  correccion,
  enviando,
  onSelect,
}: {
  opcion: string
  letra: string
  seleccion: string | null
  correccion: Correccion | null
  enviando: boolean
  onSelect: () => void
}) {
  const contestado = correccion !== null
  const esCorrecta = contestado && opcion === correccion!.respuestaCorrecta
  const esElegida = opcion === seleccion
  const esElegidaMal = contestado && esElegida && !esCorrecta

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={contestado || enviando}
      aria-label={
        esCorrecta
          ? `${opcion} (correcta)`
          : esElegidaMal
            ? `${opcion} (tu elección, incorrecta)`
            : opcion
      }
      className={cn(
        'flex min-h-[64px] items-center gap-4 rounded-lg border p-4 text-left transition-colors',
        esCorrecta
          ? 'border-military bg-military/10'
          : esElegidaMal
            ? 'border-destructive/50 bg-destructive/5'
            : contestado
              ? 'border-border bg-card opacity-60'
              : !esElegida && 'border-border bg-card hover:bg-muted',
      )}
      /* Elegida pero aún sin corregir: va en el color del examen, para no
         adelantar con el verde (que aquí significa "correcta"). */
      style={
        !contestado && esElegida
          ? { borderColor: ACENTO.c, backgroundColor: `${ACENTO.c}14` }
          : undefined
      }
    >
      <span
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
          esCorrecta
            ? 'bg-military text-military-foreground'
            : esElegidaMal
              ? 'bg-destructive text-white'
              : 'border border-border bg-muted text-muted-foreground',
        )}
      >
        {esCorrecta ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : esElegidaMal ? (
          <XCircle className="h-4 w-4" />
        ) : (
          letra
        )}
      </span>

      {/* Mismo criterio que en práctica: ni el grosor de la letra ni la
          aparición de la etiqueta deben reacomodar el texto al contestar. */}
      <span
        className={cn(
          'flex-1 text-base',
          (esCorrecta || esElegidaMal) && 'text-foreground',
        )}
      >
        {opcion}
      </span>

      {/* En teléfono este hueco no existe: 104 px fijos aquí le dejaban al
          enunciado de la opción unos 100 px de ancho, y el texto salía a
          palabra por renglón. Ahí el estado ya lo dicen el ícono del círculo
          y el color del borde, que no cuestan ancho. De `sm` para arriba el
          hueco vuelve, reservado siempre para que la tarjeta no brinque al
          contestar. */}
      <span className="hidden w-[104px] shrink-0 text-right text-xs font-semibold uppercase tracking-widest sm:block">
        {esCorrecta && <span className="text-military">Correcta</span>}
        {esElegidaMal && <span className="text-destructive">Elegiste esta</span>}
      </span>
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: indicador de las cajas de Leitner + cuándo vuelve
   ═══════════════════════════════════════════════════════════ */

function MovimientoCaja({
  correccion,
  dias,
}: {
  correccion: Correccion
  /** Días hasta el próximo repaso. Llega calculado desde el manejador del
   *  evento: este componente NO lee el reloj, para poder pintarse siempre
   *  igual con los mismos datos. */
  dias: number | null
}) {
  const { esCorrecta, cajaAnterior, caja } = correccion

  const cuando = dias === 1 ? 'mañana' : `en ${dias} días`

  const movimiento = !esCorrecta
    ? `Vuelve a la caja ${caja}`
    : caja > cajaAnterior
      ? `Sube a la caja ${caja}`
      : `Se queda en la caja ${caja}`

  return (
    <div className="min-w-0">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: TOTAL_CAJAS }).map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-2 w-6 rounded-full',
              i < caja ? 'bg-accent' : 'bg-muted',
            )}
          />
        ))}
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">
        {/* Sin los días no se dice "lo repasas " a medias: se omite la frase
            entera. En la práctica no pasa —la corrección y los días se guardan
            juntos— pero así la oración nunca queda coja. */}
        {movimiento}
        {dias !== null && ` · lo repasas ${cuando}`}
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes chicos compartidos
   ═══════════════════════════════════════════════════════════ */

function Centrado({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-muted-foreground">
      {children}
    </main>
  )
}

function VolverAlPanel({ className }: { className?: string }) {
  return (
    <Link
      href="/inicio"
      className={cn(
        'inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline',
        className,
      )}
    >
      Volver al panel
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
