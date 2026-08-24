'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch } from '@/lib/api'
import { CheckCircle2, ArrowRight, Compass, Award } from 'lucide-react'

/**
 * "Empieza por aquí" — la ruta de primeros pasos para el aspirante nuevo.
 *
 * Se muestra mientras no haya hecho ningún SIMULADOR (0 intentos): ese es el
 * hito que lo "gradúa". Antes de eso lo acompaña por tres pasos que se van
 * palomeando solos:
 *   1. Elegir plantel — ya hecho al entrar.
 *   2. Su primera práctica — se marca en cuanto responde una (cuenta las
 *      RespuestaPractica que ahora sí guarda el backend).
 *   3. Su primer simulacro — al hacerlo, ve su avance y la tarjeta se retira.
 *
 * También puede ocultarla a mano (se recuerda en este navegador).
 */
export function EmpiezaPorAqui({
  hrefPaso2,
  hrefPaso3,
}: {
  hrefPaso2: string
  hrefPaso3: string
}) {
  // null = todavía no sabemos (cargando o falló la consulta).
  const [intentos, setIntentos] = useState<number | null>(null)
  const [practicas, setPracticas] = useState(0)
  const [oculto, setOculto] = useState(false)
  // Cerró la tarjeta de felicitación. Distinto de `oculto`: aquélla es
  // "no me acompañes", ésta es "ya lo leí".
  const [cerrado, setCerrado] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('onboardingOculto') === '1') {
      setOculto(true)
    }
    if (window.localStorage.getItem('onboardingCerrado') === '1') {
      setCerrado(true)
    }
    apiFetch<{ id: number }[]>('/intentos')
      .then((lista) => setIntentos(lista.length))
      .catch(() => setIntentos(null))
    apiFetch<{ practicas: number }>('/examenes/practica/cultural/mi-actividad')
      .then((r) => setPracticas(r.practicas))
      .catch(() => setPracticas(0))
  }, [])

  function ocultar() {
    setOculto(true)
    try {
      window.localStorage.setItem('onboardingOculto', '1')
    } catch {
      // Si el navegador bloquea el almacenamiento, se oculta sólo por ahora.
    }
  }

  function cerrar() {
    setCerrado(true)
    try {
      window.localStorage.setItem('onboardingCerrado', '1')
    } catch {
      // Igual que arriba: sin almacenamiento, se cierra sólo por ahora.
    }
  }

  // Todavía no sabemos, o pidió que no lo acompañáramos → nada.
  if (intentos === null || oculto) return null

  /*
   * FASE 3. Antes, al primer simulacro la tarjeta simplemente DESAPARECÍA y el
   * aspirante nunca se enteraba de que había terminado algo. Se perdía el único
   * momento de "lo lograste" que tiene el arranque, que es justo cuando más
   * falta hace: acaba de medirse por primera vez.
   *
   * Ahora se despide. Se va para siempre al tocar "Entendido", y si nunca lo
   * toca se retira sola al segundo simulacro — una felicitación colgada un mes
   * deja de ser una felicitación.
   */
  if (intentos >= 1) {
    if (cerrado || intentos >= 2) return null
    return <Cierre alCerrar={cerrar} />
  }

  const haPracticado = practicas > 0

  return (
    <section className="mb-8 overflow-hidden rounded-xl border-2 border-accent bg-card p-5 shadow-sm">
      {/* Encabezado */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15">
            <Compass className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
              Primeros pasos
            </p>
            <h2 className="mt-0.5 text-lg font-semibold text-foreground">
              Empieza por aquí
            </h2>
          </div>
        </div>
        <span className="shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
          {haPracticado ? '2 de 3' : '1 de 3'}
        </span>
      </div>

      {/* LA CADETE DICE QUÉ SIGUE.
          El rostro y no la figura completa: a 44 px, un cuerpo entero es una
          mancha. La frase cambia con la fase, y es lo único de esta tarjeta
          escrito en segunda persona —el resto son etiquetas—. */}
      <div className="mb-3 flex items-start gap-3 rounded-lg bg-military/10 p-3">
        <Image
          src="/cadete/explica-rostro.webp"
          alt=""
          aria-hidden
          width={44}
          height={44}
          className="h-11 w-11 shrink-0"
        />
        <p className="text-sm leading-relaxed text-foreground">
          {haPracticado
            ? 'Bien. Ahora mira tu avance: ahí se ve qué dominas y qué hay que reforzar.'
            : 'Empieza corto. Una práctica sin cronómetro, para ver dónde estás parado.'}
        </p>
      </div>

      {/* Pasos */}
      <div className="flex flex-col gap-2">
        {/* Paso 1 — siempre hecho (eligió plantel al entrar) */}
        <PasoHecho texto="Elige tu plantel" />

        {/* Paso 2 — activo hasta que practica; luego, hecho */}
        {haPracticado ? (
          <PasoHecho texto="Haz tu primer examen de práctica" />
        ) : (
          <PasoActivo
            numero={2}
            href={hrefPaso2}
            titulo="Haz tu primer examen de práctica"
            subtitulo="Corto y sin cronómetro, para calentar."
          />
        )}

        {/* Paso 3 — se abre cuando ya practicó */}
        {haPracticado ? (
          <PasoActivo
            numero={3}
            href={hrefPaso3}
            titulo="Mira tu avance"
            subtitulo="Cómo van tus temas."
          />
        ) : (
          <PasoBloqueado
            numero={3}
            titulo="Mira tu avance"
            subtitulo="Cuando termines el paso 2."
          />
        )}
      </div>

      {/* Ocultar a mano */}
      <div className="mt-3 text-right">
        <button
          type="button"
          onClick={ocultar}
          className="text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Ocultar por ahora
        </button>
      </div>
    </section>
  )
}

/**
 * Fase 3 — la despedida del tutorial.
 *
 * VA EN VERDE MILITAR y no en latón como las otras dos, a propósito: el latón
 * de las fases 1 y 2 marca una tarea pendiente que te llama. Ésta ya no pide
 * nada, cierra. Y el verde es el mismo de los "Hecho" de cada paso, así que el
 * aspirante ya lo tiene asociado a "esto está cumplido" sin que nadie se lo
 * explique.
 *
 * Aquí la cadete va de cuerpo y no de rostro: es la única pantalla del arranque
 * donde el personaje tiene espacio, y es el momento de felicitar.
 */
function Cierre({ alCerrar }: { alCerrar: () => void }) {
  return (
    <section className="mb-8 overflow-hidden rounded-xl border-2 border-military bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-military/20">
            <Award className="h-5 w-5 text-military" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-military">
              Tutorial completado
            </p>
            <h2 className="mt-0.5 text-lg font-semibold text-foreground">
              Listo. Ya sabes moverte.
            </h2>
          </div>
        </div>
        <span className="shrink-0 whitespace-nowrap text-xs font-medium tabular-nums text-muted-foreground">
          3 de 3
        </span>
      </div>

      <div className="flex items-start gap-4">
        <Image
          src="/cadete/saluda.webp"
          alt=""
          aria-hidden
          width={96}
          height={96}
          className="hidden h-24 w-24 shrink-0 sm:block"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Elegiste tu plantel, hiciste tu primera práctica y presentaste tu
            primer simulacro. Ya conoces las tres piezas: la práctica para
            aprender, el simulacro para medirte y tu avance para saber qué
            reforzar.
          </p>
          <p className="mt-3 border-l-[3px] border-military pl-3 text-sm font-semibold leading-relaxed text-foreground">
            De aquí en adelante no hay pasos que seguir. Hay un examen que
            preparar, y tiempo para hacerlo bien.
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-end border-t border-border/60 pt-3">
        <button
          type="button"
          onClick={alCerrar}
          className="rounded-md bg-military px-5 py-2 text-sm font-semibold text-military-foreground transition-opacity hover:opacity-90"
        >
          Entendido
        </button>
      </div>
    </section>
  )
}

/* ── Piezas de cada paso ─────────────────────────────────────────────── */

function PasoHecho({ texto }: { texto: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-military/15 text-military">
        <CheckCircle2 className="h-4 w-4" />
      </span>
      <p className="flex-1 text-sm text-muted-foreground">{texto}</p>
      <span className="text-xs font-semibold text-military">Hecho</span>
    </div>
  )
}

function PasoActivo({
  numero,
  href,
  titulo,
  subtitulo,
}: {
  numero: number
  href: string
  titulo: string
  subtitulo: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg border border-accent/40 bg-accent/5 px-3 py-2.5 transition-colors hover:bg-accent/10"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
        {numero}
      </span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{titulo}</p>
        <p className="text-xs text-muted-foreground">{subtitulo}</p>
      </div>
      <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-accent">
        Empezar
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

function PasoBloqueado({
  numero,
  titulo,
  subtitulo,
}: {
  numero: number
  titulo: string
  subtitulo: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 opacity-70">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-sm text-muted-foreground">
        {numero}
      </span>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{titulo}</p>
        <p className="text-xs text-muted-foreground/80">{subtitulo}</p>
      </div>
    </div>
  )
}
