'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { CheckCircle2, ArrowRight, Compass } from 'lucide-react'

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

  useEffect(() => {
    if (window.localStorage.getItem('onboardingOculto') === '1') {
      setOculto(true)
    }
    apiFetch<{ id: number }[]>('/intentos')
      .then((lista) => setIntentos(lista.length))
      .catch(() => setIntentos(null))
    apiFetch<{ practicas: number }>('/examenes/practica/cultural/mi-actividad')
      .then((r) => setPracticas(r.practicas))
      .catch(() => setPracticas(0))
  }, [])

  // Ocultada, aún sin saber, o ya con un simulador hecho → no se pinta nada.
  if (oculto || intentos === null || intentos > 0) return null

  const haPracticado = practicas > 0

  function ocultar() {
    setOculto(true)
    try {
      window.localStorage.setItem('onboardingOculto', '1')
    } catch {
      // Si el navegador bloquea el almacenamiento, se oculta sólo por ahora.
    }
  }

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
