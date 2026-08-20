'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch } from '@/lib/api'
import { emblemaDePlantel } from '@/lib/planteles'
import { colorDeExamen, HOJA_DE_PLATA_CLARA } from '@/lib/colores-paquete'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { EntiendeElTema } from '@/components/entiende-tema/EntiendeElTema'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Play,
  Star,
  XCircle,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Práctica cultural por materia — Fase 04.

   Eliges UNA materia de tu plantel y la practicas sin cronómetro,
   con corrección inmediata y la cita del libro. No cuenta contra
   reloj ni mueve la caja verde del repaso: es sólo para afianzar.
   Gemela del repaso; la fuente son N reactivos de la materia que
   elijas en vez de la cola del día.
   ═══════════════════════════════════════════════════════════ */

type MateriaDisponible = { materia: string; disponibles: number }
/** Lo que devuelve GET /examenes/practica/cultural/materias. */
type MateriasResp = { plantel: string; materias: MateriaDisponible[] }
/** Un "tema del temario" = un capítulo del libro, con su conteo de reactivos. */
type TemaPractica = {
  capituloId: number
  numero: number
  titulo: string
  disponibles: number
}
type ReactivoPractica = {
  id: number
  enunciado: string
  opciones: string[]
  tema: string | null
}
/** Lo que devuelve POST /examenes/practica/cultural/responder. */
type Correccion = {
  esCorrecta: boolean
  respuestaCorrecta: string | null
  explicacion: string | null
  referencia: string | null
}

type Estado = 'cargando' | 'eligiendo' | 'estudiando' | 'terminado' | 'error'

const LONGITUDES = [10, 20, 30]

/**
 * El color de esta pantalla. Va fijo a 'cultural' porque la práctica por
 * materia es, por definición, del examen cultural — no hay otra opción que
 * resolver. Aun así sale de `colorDeExamen` y no de un hex escrito a mano: si
 * algún día el Cultural cambia de color, esta pantalla lo sigue sola.
 *
 * OJO CON EL VOCABULARIO DE COLOR de esta pantalla, que corrige al momento:
 *   · azul  = de qué examen es, y cuál opción elegí (antes de contestar)
 *   · latón = la respuesta correcta
 *   · rojo  = la que elegí y estaba mal
 * Antes el avance y la respuesta correcta compartían el latón, o sea el mismo
 * color decía dos cosas. No devuelvas el acento al latón aquí.
 */
const ACENTO = colorDeExamen('cultural', 'claro')

/**
 * Colores de "pasta" del estante de materias — uno por posición en la lista.
 * Tonos de piel de libro, apagados a propósito para no pelearse con el
 * latón de la banda activa.
 */
const PASTAS_ESTANTE: readonly [claro: string, oscuro: string][] = [
  ['#5A2A2A', '#341616'], // oxblood
  ['#2E4A32', '#1B2C1D'], // verde bosque
  ['#243349', '#141C29'], // azul marino
  ['#4A3524', '#2C1F15'], // café cuero
  ['#1F4A47', '#122C2A'], // verde azulado
  ['#4A2C4A', '#2C1A2C'], // ciruela
  ['#3A4048', '#21252A'], // pizarra
  ['#4A3E1E', '#2C2412'], // mostaza
]
const PASTAS_ESTANTE_ACTIVA: readonly [claro: string, oscuro: string][] = [
  ['#7A3A3A', '#4A2020'],
  ['#3F6544', '#254026'],
  ['#31456C', '#1C2840'],
  ['#6B4E33', '#402E1E'],
  ['#2C6B66', '#1A403D'],
  ['#6B3F6B', '#402540'],
  ['#525A64', '#313640'],
  ['#6B5A2C', '#40351A'],
]

export default function PracticaCulturalPage() {
  const [estado, setEstado] = useState<Estado>('cargando')
  const [error, setError] = useState('')
  const [plantel, setPlantel] = useState<string | null>(null)
  const [materias, setMaterias] = useState<MateriaDisponible[]>([])

  // Selector: materia resaltada + sus temas (capítulos) con conteo.
  const [materiaSel, setMateriaSel] = useState<string | null>(null)
  const [temas, setTemas] = useState<TemaPractica[]>([])
  const [cargandoTemas, setCargandoTemas] = useState(false)

  // Elección del aspirante.
  const [materiaActiva, setMateriaActiva] = useState<string | null>(null)
  const [longitud, setLongitud] = useState(20)

  // Sesión de práctica en curso.
  const [reactivos, setReactivos] = useState<ReactivoPractica[]>([])
  const [indice, setIndice] = useState(0)
  const [seleccion, setSeleccion] = useState<string | null>(null)
  const [correccion, setCorreccion] = useState<Correccion | null>(null)
  const [enviando, setEnviando] = useState(false)
  const [aciertos, setAciertos] = useState(0)

  const actual = reactivos[indice]
  const total = reactivos.length

  // Emblema del plantel SIN el aro de letras (dinámico, no fijo al HCM).
  // Va de adorno: marca de agua de fondo e insignia del encabezado.
  const logoPlantel = plantel ? emblemaDePlantel(plantel) : null

  /* ─── Cargar las materias del plantel del aspirante ─── */
  useEffect(() => {
    apiFetch<MateriasResp>('/examenes/practica/cultural/materias')
      .then((data) => {
        setPlantel(data.plantel)
        setMaterias(data.materias)
        // Deja lista la primera materia con reactivos para que el panel de la
        // derecha no arranque vacío.
        const primera = data.materias.find((m) => m.disponibles > 0)
        if (primera) seleccionarMateria(primera.materia)
        setEstado('eligiendo')
      })
      .catch((err) => {
        setError((err as Error).message)
        setEstado('error')
      })
    // seleccionarMateria es estable (declaración izada); sólo corre al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ─── Elegir una materia en el selector: trae sus temas (capítulos) ─── */
  async function seleccionarMateria(materia: string) {
    setMateriaSel(materia)
    setTemas([])
    setCargandoTemas(true)
    try {
      const data = await apiFetch<TemaPractica[]>(
        `/examenes/practica/cultural/temas?materia=${encodeURIComponent(materia)}`,
      )
      setTemas(data)
    } catch {
      // Si fallan los temas, el aspirante todavía puede practicar la materia
      // entera; no rompemos el selector por eso.
      setTemas([])
    } finally {
      setCargandoTemas(false)
    }
  }

  /* ─── Empezar la práctica: materia entera, o un capítulo si se pasa ─── */
  async function empezar(materia: string, capituloId?: number) {
    setError('')
    setMateriaActiva(materia)
    setEstado('cargando')
    try {
      const url =
        `/examenes/practica/cultural?materia=${encodeURIComponent(materia)}&n=${longitud}` +
        (capituloId != null ? `&capitulo=${capituloId}` : '')
      const data = await apiFetch<{ materia: string; reactivos: ReactivoPractica[] }>(
        url,
      )
      if (data.reactivos.length === 0) {
        setError('Esa materia todavía no tiene reactivos disponibles.')
        setEstado('eligiendo')
        return
      }
      setReactivos(data.reactivos)
      setIndice(0)
      setSeleccion(null)
      setCorreccion(null)
      setAciertos(0)
      setEstado('estudiando')
    } catch (err) {
      setError((err as Error).message)
      setEstado('eligiendo')
    }
  }

  /* ─── Contestar el reactivo actual ─── */
  async function responder(opcion: string) {
    if (!actual || correccion || enviando) return
    setSeleccion(opcion)
    setEnviando(true)
    setError('')
    try {
      const res = await apiFetch<Correccion>(
        '/examenes/practica/cultural/responder',
        { method: 'POST', body: { reactivoId: actual.id, respuestaSeleccionada: opcion } },
      )
      setCorreccion(res)
      if (res.esCorrecta) setAciertos((a) => a + 1)
    } catch (err) {
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
    setError('')
    setIndice((i) => {
      if (i < reactivos.length - 1) return i + 1
      setEstado('terminado')
      return i
    })
  }, [reactivos.length])

  /* ─── Volver al selector para practicar otra materia ─── */
  function otraMateria() {
    setEstado('eligiendo')
    setMateriaActiva(null)
    setReactivos([])
    setIndice(0)
    setSeleccion(null)
    setCorreccion(null)
    setAciertos(0)
    setError('')
  }

  /* ═══════════════ Pantallas simples ═══════════════ */

  if (estado === 'cargando') {
    return (
      <Centrado>
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-sm">Preparando tu práctica...</p>
      </Centrado>
    )
  }

  if (estado === 'error') {
    return (
      <Centrado>
        <div className="max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-6 text-center">
          <AlertCircle className="mx-auto mb-2 h-6 w-6 text-destructive" />
          <p className="font-semibold text-destructive">
            No pudimos cargar tu práctica
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <VolverAlPanel className="mt-4" />
        </div>
      </Centrado>
    )
  }

  /* ═══════════════ Selector de materia ═══════════════ */

  if (estado === 'eligiendo') {
    const conReactivos = materias.filter((m) => m.disponibles > 0)
    const detalle = conReactivos.find((m) => m.materia === materiaSel) ?? null

    return (
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#161513] px-6 py-10">
        <FondoCultural logoSrc={logoPlantel} />

        <div className="relative z-10 mx-auto w-full max-w-4xl">
          {/* Volver */}
          <Link
            href="/inicio"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver al panel
          </Link>

          {/* Encabezado: fase a la izquierda, plantel a la derecha */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full border border-[#C99A3B]/40 bg-[#C99A3B]/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E6CF98]">
              Fase 04 · Cultural por materia
            </span>
            {/* Marca El Monote te Guía — fija, no depende del plantel.
                (La identidad del plantel vive en el escudo tenue del fondo.) */}
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

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#F7F3EA] sm:text-3xl">
            Practica una materia
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#B8B2A4]">
            Sin cronómetro, con corrección inmediata y la cita del libro. Elige la
            materia —o un tema suelto— y cuántos reactivos quieres.
          </p>

          {error && (
            <div className="mt-5 flex items-start gap-2 rounded-lg border border-[#EF4444]/40 bg-[#EF4444]/10 p-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EF4444]" />
              <p className="text-sm text-[#F0B4B4]">{error}</p>
            </div>
          )}

          {conReactivos.length === 0 ? (
            <div className="mt-8 rounded-xl border border-dashed border-[#3D3A34] bg-white/[0.02] p-8 text-center text-sm text-[#9A9382]">
              El banco cultural de tu plantel todavía está en preparación.
            </div>
          ) : (() => {
            const disponiblesMax = Math.max(1, ...conReactivos.map((m) => m.disponibles))
            return (
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-start">
              {/* ── Columna izquierda: materias, como un estante de libros ──
                  Sólo transform (translateY + rotate) se anima: es lo único que el
                  compositor mueve sin repintar, así que corre igual de fino en un
                  gama baja que en un gama alta. motion-reduce lo apaga del todo. */}
              <div className="relative overflow-hidden rounded-2xl border border-[#C99A3B]/12 bg-white/[0.02] p-3">
                <p className="mb-5 px-2 pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#8A8579]">
                  Materias
                </p>
                <div className="flex items-end gap-2.5 overflow-x-auto px-1 pb-1">
                  {conReactivos.map((m, i) => {
                    const activa = m.materia === materiaSel
                    // Raíz cuadrada en vez de lineal: aplana la diferencia entre la
                    // materia con más reactivos y las demás, para que ninguna se
                    // "agrande" desproporcionado — el lomo más grueso sigue siendo
                    // el más grueso, pero sin dominar el estante.
                    const grosor = 52 + Math.sqrt(m.disponibles / disponiblesMax) * 28
                    // Por posición, no por hash del nombre: con pocas materias (la
                    // mayoría de los planteles trae 3-5) un hash puede repetir color
                    // por casualidad. Por posición nunca se repite mientras quepan
                    // en la paleta.
                    const pasta = i % PASTAS_ESTANTE.length
                    const [claro, oscuro] = activa
                      ? PASTAS_ESTANTE_ACTIVA[pasta]
                      : PASTAS_ESTANTE[pasta]
                    return (
                      <button
                        key={m.materia}
                        type="button"
                        onClick={() => seleccionarMateria(m.materia)}
                        aria-pressed={activa}
                        style={{
                          width: grosor,
                          height: 196,
                          background: `linear-gradient(180deg,${claro} 0%,${oscuro} 100%)`,
                          transform: activa
                            ? 'translateY(-16px) rotate(-2.5deg)'
                            : undefined,
                          transformOrigin: 'bottom',
                        }}
                        className={cn(
                          'group relative shrink-0 rounded-t-[5px] border text-left transition-transform duration-200 ease-out motion-reduce:transition-none',
                          activa
                            ? 'border-[#C99A3B]/35 shadow-[0_14px_22px_-6px_rgba(0,0,0,0.55)]'
                            : 'border-white/[0.06] shadow-[inset_5px_0_7px_-6px_rgba(0,0,0,0.6),inset_-5px_0_7px_-6px_rgba(0,0,0,0.6)] hover:-translate-y-1',
                        )}
                      >
                        <span
                          className={cn(
                            'absolute inset-x-0 top-0 rounded-t-[4px]',
                            activa ? 'h-2 bg-[#C99A3B]' : 'h-1.5 bg-[#C99A3B]/40',
                          )}
                        />
                        <span
                          className={cn(
                            'absolute inset-x-0',
                            activa
                              ? 'bottom-[26px] h-1 bg-[#C99A3B]'
                              : 'bottom-0 h-[3px] bg-[#C99A3B]/40',
                          )}
                        />
                        <span
                          className={cn(
                            'absolute left-1/2 top-4 overflow-hidden whitespace-nowrap',
                            activa ? 'text-[13px] font-semibold' : 'text-[11px] font-medium',
                          )}
                          style={{
                            bottom: activa ? 40 : 16,
                            writingMode: 'vertical-rl',
                            transform: 'translateX(-50%) rotate(180deg)',
                            textOverflow: 'ellipsis',
                            color: activa ? '#F7E9C9' : '#9A9382',
                          }}
                        >
                          {m.materia}
                        </span>
                        {activa && (
                          <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[3px] bg-[#C99A3B] px-1.5 py-px text-[9px] font-bold tabular-nums text-[#161513]">
                            {m.disponibles}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                <div
                  className="mt-1 h-[3px] rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(201,154,59,0) 0%, rgba(201,154,59,0.55) 15%, rgba(201,154,59,0.55) 85%, rgba(201,154,59,0) 100%)',
                    boxShadow: '0 10px 18px rgba(0,0,0,0.55)',
                  }}
                />
              </div>

              {/* ── Columna derecha: detalle de la materia elegida ── */}
              <div className="rounded-2xl border border-[#C99A3B]/12 bg-white/[0.02] p-5">
                {detalle ? (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C99A3B]/30 bg-[#C99A3B]/10">
                        <Star className="h-5 w-5 text-[#C99A3B]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="truncate text-xl font-bold text-[#F7F3EA]">
                          {detalle.materia}
                        </h2>
                        {temas.length > 0 && (
                          <p className="mt-0.5 text-xs text-[#9A9382]">
                            {temas.length} {temas.length === 1 ? 'tema' : 'temas'} del
                            temario
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Cuántos reactivos */}
                    <div className="mt-5 flex items-center gap-3">
                      <span className="text-xs font-medium text-[#9A9382]">
                        Cuántos:
                      </span>
                      <div className="inline-flex overflow-hidden rounded-lg border border-[#3D3A34]">
                        {LONGITUDES.map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setLongitud(n)}
                            className={cn(
                              'px-4 py-1.5 text-sm font-semibold tabular-nums transition-colors',
                              longitud === n
                                ? 'bg-[#C99A3B] text-[#161513]'
                                : 'text-[#B8B2A4] hover:bg-white/[0.04]',
                            )}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Practica toda la materia */}
                    <button
                      type="button"
                      onClick={() => empezar(detalle.materia)}
                      className="mt-5 flex w-full items-center justify-between rounded-xl bg-[#C99A3B] px-5 py-3.5 text-left font-semibold text-[#161513] shadow-lg shadow-[#C99A3B]/20 transition-colors hover:bg-[#D8AE52]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Practica toda la materia
                      </span>
                      <span className="text-sm tabular-nums opacity-80">
                        {longitud}
                      </span>
                    </button>

                    {/* Temas del temario (capítulos) */}
                    <div className="mt-5">
                      <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#8A8579]">
                        O practica un tema
                      </p>
                      {cargandoTemas ? (
                        <div className="flex items-center gap-2 px-1 py-3 text-xs text-[#9A9382]">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Cargando temas...
                        </div>
                      ) : temas.length === 0 ? (
                        <p className="px-1 py-2 text-xs text-[#8A8579]">
                          Esta materia aún no tiene el desglose por tema.
                        </p>
                      ) : (
                        <div className="flex flex-col gap-1">
                          {temas.map((t) => (
                            <button
                              key={t.capituloId}
                              type="button"
                              onClick={() => empezar(detalle.materia, t.capituloId)}
                              className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left transition-colors hover:border-[#C99A3B]/25 hover:bg-white/[0.03]"
                            >
                              <span className="w-6 shrink-0 text-right text-xs font-semibold tabular-nums text-[#C99A3B]/70">
                                {String(t.numero).padStart(2, '0')}
                              </span>
                              <span className="flex-1 text-sm text-[#D8D2C4] group-hover:text-[#F7F3EA]">
                                {t.titulo}
                              </span>
                              <ChevronRight className="h-4 w-4 shrink-0 text-[#8A8579] transition-transform group-hover:translate-x-0.5" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center py-16 text-sm text-[#8A8579]">
                    Elige una materia de la izquierda.
                  </div>
                )}
              </div>
            </div>
            )
          })()}
        </div>
      </main>
    )
  }

  /* ═══════════════ Resumen final ═══════════════ */

  if (estado === 'terminado') {
    return (
      <Centrado>
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <CheckCircle2 className="h-7 w-7 text-accent" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            Práctica terminada
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {materiaActiva}: acertaste{' '}
            <span className="font-semibold text-foreground">
              {aciertos} de {total}
            </span>
            .
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button onClick={otraMateria} variant="outline">
              Practicar otra materia
            </Button>
            <Link
              href="/inicio"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              Volver al panel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Centrado>
    )
  }

  /* ═══════════════ Pantalla de estudio ═══════════════ */

  if (!actual) return null

  const progresoPct = ((indice + 1) / total) * 100

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Barra superior: materia a la izquierda, avance a la derecha */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
          <p
            className="truncate text-xs font-semibold uppercase tracking-widest"
            style={{ color: ACENTO.c }}
          >
            Práctica · {materiaActiva}
          </p>
          <p className="shrink-0 text-xs font-medium text-muted-foreground">
            {indice + 1} de {total} · {aciertos} {aciertos === 1 ? 'acierto' : 'aciertos'}
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

          <div className="flex flex-col gap-3">
            {actual.opciones.map((opcion, i) => (
              <OpcionPractica
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

        {/* Corrección: cita del libro. Sólo tras contestar. */}
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

            {/* La ayuda en palabras simples, DEBAJO de la cita textual y nunca
                en su lugar. Se pinta sola si ese capítulo ya tiene explicación
                escrita desde el panel; si no, no aparece nada. */}
            {actual && <EntiendeElTema reactivoId={actual.id} />}

            <div className="mt-6 flex items-center justify-end">
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
            ← Salir de la práctica
          </Link>
        </div>
      </div>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: una opción, con sus tres estados de corrección
   (mismo lenguaje visual que el repaso).
   ═══════════════════════════════════════════════════════════ */

function OpcionPractica({
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
          ? 'border-accent bg-accent/10'
          : esElegidaMal
            ? 'border-destructive/50 bg-destructive/5'
            : contestado
              ? 'border-border bg-card opacity-60'
              : !esElegida && 'border-border bg-card hover:bg-muted',
      )}
      /* Elegida pero aún sin corregir: va en el color del examen, para no
         adelantar con el latón (que aquí significa "correcta"). */
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
            ? 'bg-accent text-accent-foreground'
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

      {/* Sin cambio de grosor al corregir: la negrita es más ancha que la
          redonda, así que en una opción larga el texto saltaba a un renglón más
          y la tarjeta crecía justo al contestar. El énfasis va por color. */}
      <span
        className={cn(
          'flex-1 text-base',
          (esCorrecta || esElegidaMal) && 'text-foreground',
        )}
      >
        {opcion}
      </span>

      {/* Hueco SIEMPRE reservado para la etiqueta. Si sólo apareciera al
          contestar, le quitaría ancho al texto en ese momento y lo reacomodaría
          — el mismo brinco por otro camino. Vacío antes de contestar. */}
      <span className="w-[104px] shrink-0 text-right text-xs font-semibold uppercase tracking-widest">
        {esCorrecta && <span className="text-accent">Correcta</span>}
        {esElegidaMal && <span className="text-destructive">Elegiste esta</span>}
      </span>
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes chicos compartidos
   ═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   Fondo del selector: halo dorado superior + el escudo del plantel
   tenue, sangrando por la derecha. (Antes había un demo con varios
   tratamientos; Carlo eligió "Escudo" y se dejó fijo.)
   ═══════════════════════════════════════════════════════════ */

function FondoCultural({ logoSrc }: { logoSrc: string | null }) {
  return (
    <>
      {/* Halo dorado superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 55% at 50% 0%, rgba(201,154,59,0.15), transparent 70%)',
        }}
      />
      {/* Escudo del plantel, tenue, sangrando por la derecha */}
      {logoSrc && (
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-end overflow-hidden pr-[2vw] md:flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            aria-hidden
            className="w-[min(520px,44vw)] max-w-none opacity-[0.16]"
            style={{
              // Difumina el borde del disco: nítido al centro, se funde a
              // transparente por las orillas (sin aro duro).
              WebkitMaskImage:
                'radial-gradient(circle closest-side, #000 70%, transparent 100%)',
              maskImage:
                'radial-gradient(circle closest-side, #000 70%, transparent 100%)',
            }}
          />
        </div>
      )}
    </>
  )
}

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
