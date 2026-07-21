'use client'

import { useEffect, useState, useRef, useCallback, use } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { INSTRUCCIONES_POR_BLOQUE } from '@/lib/instrucciones-bloques'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Play,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type Intento = {
  id: number
  examenId: number
  estado: string
  inicioAt: string
}

type Reactivo = {
  id: number
  enunciado: string
  opciones: string[]
  tema: string | null
  bloqueId: number
}

type Bloque = {
  id: number
  nombre: string
  orden: number
  tiempoLimite: number
  reactivos: Reactivo[]
}

type ExamenArmado = {
  id: number
  tipo: string
  nombre: string
  duracionMin: number
  calificable: boolean
  bloques: Bloque[]
}

type Estado =
  | 'idle'
  | 'cargando'
  | 'instrucciones'
  | 'en_progreso'
  | 'finalizando'
  | 'error'

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

// Secuencia de exámenes cuando estamos en modo "sesión completa".
// Debe coincidir con SECUENCIA_EXAMENES en /inicio/sesion/page.tsx.
const SECUENCIA_SESION = [1, 2, 3]

export default function SimuladorPage({
  params,
}: {
  params: Promise<{ examenId: string }>
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { examenId } = use(params)
  const examenIdNum = Number(examenId)

  // Modo sesión completa: cuando la URL trae ?sesion=<id>, este intento
  // es parte de una sesión con las 3 fases secuenciales.
  const sesionId = searchParams.get('sesion')
  const enModoSesion = sesionId !== null
  const indiceEnSesion = enModoSesion ? SECUENCIA_SESION.indexOf(examenIdNum) : -1
  const esUltimoDeSesion = indiceEnSesion === SECUENCIA_SESION.length - 1
  const siguienteExamenIdEnSesion = enModoSesion && !esUltimoDeSesion
    ? SECUENCIA_SESION[indiceEnSesion + 1]
    : null

  const [estado, setEstado] = useState<Estado>('idle')
  const [error, setError] = useState('')
  const [examen, setExamen] = useState<ExamenArmado | null>(null)
  const [intento, setIntento] = useState<Intento | null>(null)
  const [bloques, setBloques] = useState<Bloque[]>([])
  const [bloqueIndex, setBloqueIndex] = useState(0)
  const [reactivoIndex, setReactivoIndex] = useState(0)
  const [respuestas, setRespuestas] = useState<Record<number, string>>({})
  const [tiempoRestanteSeg, setTiempoRestanteSeg] = useState(0)

  // Timestamp del inicio del intento — usado para `respondidoEnMs` de cada respuesta.
  const inicioMsRef = useRef<number>(0)

  // Con cronómetro global el reloj se carga una sola vez, al empezar la primera
  // materia. Este ref recuerda que ya arrancó para no reiniciarlo en las demás.
  const cronometroArrancadoRef = useRef(false)

  const bloqueActual = bloques[bloqueIndex]
  const esUltimoBloque = bloqueIndex === bloques.length - 1
  const reactivoActual = bloqueActual?.reactivos[reactivoIndex]

  /**
   * Cómo corre el tiempo, según el examen.
   *
   * - **Por bloque** (psicométrico): cada bloque trae su `tiempoLimite` y al
   *   agotarse salta al siguiente. El aspirante no puede robarle tiempo a un
   *   bloque para dárselo a otro.
   * - **Global** (cultural): un solo reloj de `duracionMin` para todo. El
   *   aspirante reparte sus 2 horas entre las cuatro materias como quiera, y
   *   cuando se acaba, se acaba el examen completo.
   *
   * Dato confirmado por Carlo el 21 jul 2026: el cultural es global de 2 horas.
   */
  const esCronometroGlobal = examen?.tipo === 'cultural'

  /* ─── Iniciar simulador (crea intento + arma examen) ─── */
  async function iniciar() {
    setEstado('cargando')
    setError('')
    try {
      const [nuevoIntento, examenArmado] = await Promise.all([
        apiFetch<Intento>('/intentos', {
          method: 'POST',
          body: {
            examenId: examenIdNum,
            ...(sesionId ? { sesionCompletoId: Number(sesionId) } : {}),
          },
        }),
        apiFetch<ExamenArmado>(`/examenes/${examenIdNum}/armar`),
      ])

      const bloquesOrdenados = [...examenArmado.bloques].sort(
        (a, b) => a.orden - b.orden,
      )

      setIntento(nuevoIntento)
      setExamen(examenArmado)
      setBloques(bloquesOrdenados)
      setBloqueIndex(0)
      setReactivoIndex(0)
      inicioMsRef.current = Date.now()
      setEstado('instrucciones')
    } catch (err) {
      setError((err as Error).message)
      setEstado('error')
    }
  }

  /* ─── Finalizar todo el examen ─── */
  const finalizar = useCallback(
    async (motivo: 'COMPLETADA' | 'TIEMPO_AGOTADO') => {
      if (!intento) return
      setEstado('finalizando')
      try {
        await apiFetch(`/intentos/${intento.id}/finalizar`, {
          method: 'PATCH',
          body: { estado: motivo },
        })

        if (enModoSesion) {
          // Modo sesión completa: no vamos a resultados individuales.
          if (siguienteExamenIdEnSesion !== null) {
            // Arrancar el siguiente examen manteniendo la sesión
            router.push(`/inicio/simulador/${siguienteExamenIdEnSesion}?sesion=${sesionId}`)
          } else {
            // Último examen de la sesión: cerrar sesión y ver resultados agregados
            try {
              await apiFetch(`/sesiones-completas/${sesionId}/finalizar`, {
                method: 'PATCH',
                body: { estado: motivo === 'TIEMPO_AGOTADO' ? 'ABANDONADA' : 'COMPLETADA' },
              })
            } catch {
              // Si falla el cierre de sesión, seguimos igual con los resultados
            }
            router.push(`/inicio/sesion-resultados/${sesionId}`)
          }
        } else {
          // Modo práctica: resultados individuales por intento
          router.push(`/inicio/resultados/${intento.id}`)
        }
      } catch (err) {
        setError((err as Error).message)
        setEstado('error')
      }
    },
    [intento, router, enModoSesion, sesionId, siguienteExamenIdEnSesion],
  )

  /* ─── Pasar al siguiente bloque (o finalizar si es el último) ─── */
  const pasarASiguienteBloque = useCallback(() => {
    if (bloqueIndex < bloques.length - 1) {
      setBloqueIndex(bloqueIndex + 1)
      setReactivoIndex(0)
      setEstado('instrucciones')
    } else {
      finalizar('COMPLETADA')
    }
  }, [bloqueIndex, bloques.length, finalizar])

  /* ─── Comenzar el bloque actual (arranca timer) ─── */
  function comenzarBloque() {
    if (!bloqueActual) return
    if (esCronometroGlobal) {
      // Un solo reloj para todo el examen: sólo se carga la primera vez y de
      // ahí en adelante sigue corriendo entre materias. Así el aspirante
      // reparte sus 2 horas como quiera, que es como funciona el real.
      if (!cronometroArrancadoRef.current) {
        setTiempoRestanteSeg((examen?.duracionMin ?? 0) * 60)
        cronometroArrancadoRef.current = true
      }
    } else {
      setTiempoRestanteSeg(bloqueActual.tiempoLimite * 60)
    }
    setReactivoIndex(0)
    setEstado('en_progreso')
  }

  /* ─── Registrar respuesta al reactivo actual + auto-avanzar ─── */
  function responder(opcionTexto: string) {
    if (!intento || !reactivoActual) return
    const respondidoEnMs = Date.now() - inicioMsRef.current
    const reactivoId = reactivoActual.id
    const totalBloque = bloqueActual?.reactivos.length ?? 0
    const esUltimoDelBloque = reactivoIndex >= totalBloque - 1

    setRespuestas((prev) => ({ ...prev, [reactivoId]: opcionTexto }))

    apiFetch(`/intentos/${intento.id}/responder`, {
      method: 'POST',
      body: {
        reactivoId,
        respuestaSeleccionada: opcionTexto,
        respondidoEnMs,
      },
    }).catch((err) => console.error('Guardar respuesta falló:', err))

    // Auto-avanzar al siguiente reactivo con un pequeño delay para que el
    // usuario vea la respuesta marcada antes del cambio. En el último
    // reactivo del bloque NO auto-avanzamos — dejamos que el usuario
    // cierre manualmente con el botón "Terminar bloque".
    if (!esUltimoDelBloque) {
      setTimeout(() => {
        setReactivoIndex((prev) => prev + 1)
      }, 250)
    }
  }

  /* ─── Timer countdown del bloque actual ─── */
  useEffect(() => {
    if (estado !== 'en_progreso') return
    const interval = setInterval(() => {
      setTiempoRestanteSeg((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [estado])

  // Cuando el tiempo se agota: con reloj global se acaba el examen entero,
  // sin importar en qué materia vaya. Con reloj por bloque sólo se cierra ese
  // bloque y pasa al siguiente. Se maneja fuera del interval para evitar
  // setState anidados.
  useEffect(() => {
    if (estado === 'en_progreso' && tiempoRestanteSeg === 0) {
      if (esCronometroGlobal || esUltimoBloque) {
        finalizar('TIEMPO_AGOTADO')
      } else {
        pasarASiguienteBloque()
      }
    }
  }, [
    estado,
    tiempoRestanteSeg,
    esUltimoBloque,
    esCronometroGlobal,
    finalizar,
    pasarASiguienteBloque,
  ])

  /* ═══════════════════════════════════════════════════════════
     Render — idle / cargando / error
     ═══════════════════════════════════════════════════════════ */

  if (estado === 'idle' || estado === 'cargando' || estado === 'error') {
    return (
      <PantallaInicial
        examenId={examenIdNum}
        estado={estado}
        error={error}
        onIniciar={iniciar}
        indiceEnSesion={indiceEnSesion}
        totalEnSesion={enModoSesion ? SECUENCIA_SESION.length : 0}
      />
    )
  }

  /* ═══════════════════════════════════════════════════════════
     Render — finalizando
     ═══════════════════════════════════════════════════════════ */

  if (estado === 'finalizando') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-sm">Procesando resultados...</p>
        </div>
      </main>
    )
  }

  /* ═══════════════════════════════════════════════════════════
     Render — instrucciones antes del bloque
     ═══════════════════════════════════════════════════════════ */

  if (estado === 'instrucciones' && bloqueActual) {
    return (
      <PantallaInstrucciones
        bloque={bloqueActual}
        bloqueIndex={bloqueIndex}
        totalBloques={bloques.length}
        esUltimo={esUltimoBloque}
        cronometroGlobalSeg={
          esCronometroGlobal
            ? cronometroArrancadoRef.current
              ? tiempoRestanteSeg
              : (examen?.duracionMin ?? 0) * 60
            : null
        }
        onComenzar={comenzarBloque}
        onSaltar={pasarASiguienteBloque}
      />
    )
  }

  /* ═══════════════════════════════════════════════════════════
     Render — bloque en progreso
     ═══════════════════════════════════════════════════════════ */

  if (!reactivoActual || !bloqueActual) return null

  const respuestaActual = respuestas[reactivoActual.id]
  const totalReactivosBloque = bloqueActual.reactivos.length
  const progresoBloquePct = ((reactivoIndex + 1) / totalReactivosBloque) * 100
  const esUltimoReactivoBloque = reactivoIndex === totalReactivosBloque - 1

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Barra superior: examen, bloque, progreso, timer */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-military">
              {examen?.nombre ?? 'Simulador'}
              {bloques.length > 1
                ? ` · Bloque ${bloqueIndex + 1} de ${bloques.length}`
                : ''}
            </p>
            <p className="text-sm font-medium text-foreground">
              Reactivo {reactivoIndex + 1} de {totalReactivosBloque}
            </p>
          </div>
          <TimerBadge segundos={tiempoRestanteSeg} />
        </div>
        <div className="h-1 w-full bg-muted">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${progresoBloquePct}%` }}
          />
        </div>
      </div>

      {/* Contenido del reactivo — columna centrada, ocupa el espacio disponible */}
      <div className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-8">
          {/* Bloque enunciado con altura mínima fija — evita que los botones
              de opciones brinquen entre reactivos con textos de distinto largo.
              El enunciado se centra verticalmente en ese espacio. */}
          <div className="mb-8 flex min-h-[140px] items-center">
            <h2 className="text-2xl font-semibold leading-snug text-foreground">
              {reactivoActual.enunciado}
            </h2>
          </div>

          <OpcionesReactivo
            opciones={reactivoActual.opciones}
            marcada={respuestaActual}
            onSelect={responder}
            esLikert={examen ? !examen.calificable : false}
          />

          {/* Navegación libre — no requiere respuesta para avanzar */}
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <Button
              variant="outline"
              onClick={() => setReactivoIndex(Math.max(0, reactivoIndex - 1))}
              disabled={reactivoIndex === 0}
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Anterior
            </Button>

            {esUltimoReactivoBloque ? (
              <Button
                onClick={pasarASiguienteBloque}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {esUltimoBloque ? 'Finalizar examen' : 'Terminar bloque'}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => setReactivoIndex(reactivoIndex + 1)}
              >
                Siguiente
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Banda inferior sticky: mapa de reactivos scrollable + finalizar */}
      <BandaReactivos
        reactivos={bloqueActual.reactivos}
        reactivoIndex={reactivoIndex}
        respuestas={respuestas}
        onSelect={setReactivoIndex}
        onFinalizar={() => finalizar('COMPLETADA')}
      />
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: pantalla inicial (idle / cargando / error)
   ═══════════════════════════════════════════════════════════ */

function PantallaInicial({
  examenId,
  estado,
  error,
  onIniciar,
  indiceEnSesion,
  totalEnSesion,
}: {
  examenId: number
  estado: Estado
  error: string
  onIniciar: () => void
  indiceEnSesion: number
  totalEnSesion: number
}) {
  const meta = META_POR_EXAMEN[examenId] ?? {
    fase: '',
    titulo: 'Simulador',
    descripcion: 'Comenzar el examen.',
  }
  const enSesion = totalEnSesion > 0 && indiceEnSesion >= 0

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12">
      <Link
        href="/inicio"
        className="mb-8 flex items-center gap-3 opacity-80 hover:opacity-100"
      >
        <Image
          src="/monote-logo.jpeg"
          alt="El Monote te Guía"
          width={40}
          height={40}
          className="rounded-full ring-1 ring-accent/30"
        />
        <span className="text-sm font-semibold text-foreground">
          El Monote te Guía
        </span>
      </Link>

      {enSesion && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          Sesión completa · Fase {indiceEnSesion + 1} de {totalEnSesion}
        </div>
      )}

      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        {meta.fase && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-military/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military">
            {meta.fase}
          </div>
        )}
        <h1 className="mb-2 text-2xl font-semibold text-foreground">
          {meta.titulo}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {meta.descripcion}
          {enSesion && indiceEnSesion < totalEnSesion - 1 && (
            <span className="mt-2 block text-xs text-accent">
              Al terminar esta fase continúa la siguiente automáticamente.
            </span>
          )}
        </p>

        {error && (
          <div className="mb-4 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-left">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        <Button
          onClick={onIniciar}
          disabled={estado === 'cargando'}
          className="w-full"
        >
          {estado === 'cargando' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Preparando reactivos...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Comenzar simulador
            </>
          )}
        </Button>
      </div>

      <Link
        href="/inicio"
        className="mt-6 text-xs text-muted-foreground hover:text-foreground"
      >
        ← Volver
      </Link>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: pantalla de instrucciones antes de cada bloque
   ═══════════════════════════════════════════════════════════ */

function PantallaInstrucciones({
  bloque,
  bloqueIndex,
  totalBloques,
  esUltimo,
  onComenzar,
  onSaltar,
  cronometroGlobalSeg,
}: {
  bloque: Bloque
  bloqueIndex: number
  totalBloques: number
  esUltimo: boolean
  onComenzar: () => void
  onSaltar: () => void
  /**
   * Segundos que quedan del reloj de todo el examen, cuando el examen usa
   * cronómetro global. `null` cuando cada bloque tiene su propio tiempo.
   */
  cronometroGlobalSeg?: number | null
}) {
  const info = INSTRUCCIONES_POR_BLOQUE[bloque.nombre]
  const sinReactivos = bloque.reactivos.length === 0

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Progreso de bloques */}
        <div className="mb-8 flex items-center gap-2">
          {Array.from({ length: totalBloques }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-1 flex-1 rounded-full',
                i < bloqueIndex
                  ? 'bg-military'
                  : i === bloqueIndex
                  ? 'bg-accent'
                  : 'bg-muted',
              )}
            />
          ))}
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-military">
          Bloque {bloqueIndex + 1} de {totalBloques}
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
          {info?.titulo ?? bloque.nombre}
        </h1>

        <div className="rounded-xl border border-border bg-card p-6">
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {info?.instrucciones ??
              'Selecciona la opción correcta para cada reactivo.'}
          </p>

          {/* Ejemplo — se muestra siempre que exista, sea calificable o no.
              Si no tiene respuestaCorrecta (autoevaluación), se muestra sin
              opción resaltada; la explicación aclara qué evalúa. */}
          {info?.ejemplo && (
            <div className="rounded-lg border border-border bg-muted/40 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                {info.ejemplo.respuestaCorrecta ? 'Ejemplo resuelto' : 'Ejemplo de reactivo'}
              </p>
              <p className="mb-4 text-base font-semibold text-foreground">
                {info.ejemplo.enunciado}
              </p>
              <div className="mb-4 flex flex-col gap-2">
                {info.ejemplo.opciones.map((opcion, i) => {
                  const letra = String.fromCharCode(65 + i)
                  const esCorrecta = info.ejemplo!.respuestaCorrecta !== null && opcion === info.ejemplo!.respuestaCorrecta
                  return (
                    <div
                      key={opcion}
                      className={cn(
                        'flex items-center gap-3 rounded-md border p-2.5 text-sm',
                        esCorrecta
                          ? 'border-military bg-military/10 font-medium text-foreground'
                          : 'border-border bg-card text-muted-foreground',
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold',
                          esCorrecta
                            ? 'bg-military text-military-foreground'
                            : 'border border-border bg-muted',
                        )}
                      >
                        {letra}
                      </span>
                      <span>{opcion}</span>
                      {esCorrecta && (
                        <CheckCircle2 className="ml-auto h-4 w-4 text-military" />
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="rounded-md border-l-2 border-l-accent bg-accent/5 p-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {info.ejemplo.respuestaCorrecta ? 'Explicación' : 'Qué evalúa este reactivo'}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  {info.ejemplo.explicacion}
                </p>
              </div>
            </div>
          )}

          {/* Nota especial — se muestra cuando existe (independiente del ejemplo).
              Aviso adicional para exámenes de autoevaluación o bloques en construcción. */}
          {info?.notaEspecial && (
            <div className={cn(
              'flex items-start gap-3 rounded-lg border p-4',
              info.ejemplo ? 'mt-4 border-military/30 bg-military/5' : 'border-accent/30 bg-accent/10'
            )}>
              <AlertCircle className={cn('mt-0.5 h-5 w-5 shrink-0', info.ejemplo ? 'text-military' : 'text-accent')} />
              <p className="text-sm text-foreground">{info.notaEspecial}</p>
            </div>
          )}
        </div>

        {/* Detalles del bloque + CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-accent" />
            <span>
              {/* Con reloj global el tiempo NO es de esta materia: es lo que
                  queda para todo el examen. Decir "30 minutos" aquí haría
                  creer al aspirante que tiene un límite por materia. */}
              {cronometroGlobalSeg != null
                ? `${Math.ceil(cronometroGlobalSeg / 60)} min para todo el examen`
                : `${bloque.tiempoLimite} minutos`}{' '}
              ·{' '}
              {sinReactivos
                ? 'sin reactivos'
                : `${bloque.reactivos.length} reactivos`}
            </span>
          </div>

          {sinReactivos ? (
            <Button onClick={onSaltar}>
              {esUltimo ? 'Ir a resultados' : 'Continuar al siguiente bloque'}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={onComenzar}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Play className="mr-2 h-4 w-4" />
              Comenzar bloque {bloqueIndex + 1}
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: timer del bloque
   Cambia a rojo cuando quedan <2 min.
   ═══════════════════════════════════════════════════════════ */

function TimerBadge({ segundos }: { segundos: number }) {
  const mm = Math.floor(segundos / 60)
  const ss = segundos % 60
  const alerta = segundos < 120 // <2 min del bloque
  return (
    <div
      className={cn(
        'flex items-center gap-1.5 rounded-md border px-3 py-1.5',
        alerta
          ? 'border-destructive/40 bg-destructive/10 text-destructive'
          : 'border-accent/30 bg-accent/10 text-accent',
      )}
    >
      <Clock className="h-4 w-4" />
      <span className="font-mono text-sm font-semibold">
        {String(mm).padStart(2, '0')}:{String(ss).padStart(2, '0')}
      </span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: banda inferior sticky con navegación de reactivos
   - Fila horizontal scrollable de números (uno por reactivo)
   - Escala bien para 25 reactivos (psicométrico) y 256+ (personalidad)
   - Auto-scroll del botón actual cuando cambia de reactivo
   - Botón "Finalizar examen" a la derecha
   ═══════════════════════════════════════════════════════════ */

function BandaReactivos({
  reactivos,
  reactivoIndex,
  respuestas,
  onSelect,
  onFinalizar,
}: {
  reactivos: Reactivo[]
  reactivoIndex: number
  respuestas: Record<number, string>
  onSelect: (index: number) => void
  onFinalizar: () => void
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)

  // Cuando cambia el reactivo actual, hacemos scroll para que el botón
  // quede visible en la banda. Comportamiento tipo carousel.
  useEffect(() => {
    activeButtonRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [reactivoIndex])

  const totalRespondidos = Object.keys(respuestas).length

  return (
    <div className="sticky bottom-0 z-10 border-t border-border bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Contador compacto a la izquierda */}
          <div className="hidden shrink-0 flex-col sm:flex">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Reactivos
            </span>
            <span className="text-xs font-semibold text-foreground">
              {totalRespondidos} / {reactivos.length}
            </span>
          </div>

          {/* Banda scrollable de reactivos */}
          <div
            ref={scrollerRef}
            className="flex-1 overflow-x-auto pb-1"
            style={{ scrollbarWidth: 'thin' }}
          >
            <div className="flex gap-1.5">
              {reactivos.map((r, i) => {
                const respondido = respuestas[r.id] !== undefined
                const actual = i === reactivoIndex
                return (
                  <button
                    key={r.id}
                    ref={actual ? activeButtonRef : null}
                    type="button"
                    onClick={() => onSelect(i)}
                    className={cn(
                      'shrink-0 h-9 min-w-9 rounded-md px-1.5 text-xs font-semibold transition-colors',
                      actual
                        ? 'bg-accent text-accent-foreground ring-2 ring-primary ring-offset-1 ring-offset-card'
                        : respondido
                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                        : 'bg-muted text-muted-foreground hover:bg-muted/70',
                    )}
                    aria-label={`Ir al reactivo ${i + 1}${respondido ? ', respondido' : ''}${actual ? ', actual' : ''}`}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Botón finalizar todo el examen — irreversible */}
          <Button
            variant="destructive"
            size="sm"
            onClick={onFinalizar}
            className="shrink-0"
          >
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: opciones adaptativas
   - Psicométrico (calificable): opciones verticales con letra A/B/C/D
   - Personalidad / Axiológico (no calificable, escala Likert): opciones
     en fila horizontal, sin letras, con el texto de la escala.
   ═══════════════════════════════════════════════════════════ */

function OpcionesReactivo({
  opciones,
  marcada,
  onSelect,
  esLikert,
}: {
  opciones: string[]
  marcada: string | undefined
  onSelect: (opcion: string) => void
  esLikert: boolean
}) {
  // Caso dicotómico (Sí/No — Personalidad): 2 botones grandes lado a lado.
  if (esLikert && opciones.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {opciones.map((opcion) => {
          const seleccionada = marcada === opcion
          return (
            <button
              key={opcion}
              type="button"
              onClick={() => onSelect(opcion)}
              className={cn(
                'rounded-lg border-2 py-6 text-center text-lg font-semibold transition-colors',
                seleccionada
                  ? 'border-primary bg-accent/10 text-foreground'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted',
              )}
            >
              {opcion}
            </button>
          )
        })}
      </div>
    )
  }

  // Escala Likert de más de 2 puntos (Axiológico — 5 puntos): grid horizontal.
  if (esLikert) {
    return (
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {opciones.map((opcion) => {
          const seleccionada = marcada === opcion
          return (
            <button
              key={opcion}
              type="button"
              onClick={() => onSelect(opcion)}
              className={cn(
                'rounded-lg border p-3 text-center text-sm transition-colors',
                seleccionada
                  ? 'border-primary bg-accent/10 font-medium text-foreground'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted',
              )}
            >
              {opcion}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {opciones.map((opcion, i) => {
        const letra = String.fromCharCode(65 + i)
        const seleccionada = marcada === opcion
        return (
          <button
            key={opcion}
            type="button"
            onClick={() => onSelect(opcion)}
            className={cn(
              'flex items-center gap-4 rounded-lg border p-4 text-left transition-colors',
              seleccionada
                ? 'border-primary bg-accent/10'
                : 'border-border bg-card hover:bg-muted',
            )}
          >
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
                seleccionada
                  ? 'bg-primary text-accent'
                  : 'border border-border bg-muted text-muted-foreground',
              )}
            >
              {letra}
            </span>
            <span className={cn('text-base', seleccionada && 'font-medium')}>
              {opcion}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Metadatos por examen — usados en la pantalla inicial.
   Alineado con los examenId de la BD (1=psicometrico, 2=personalidad,
   3=axiologico).
   ═══════════════════════════════════════════════════════════ */

const META_POR_EXAMEN: Record<number, {
  fase: string
  titulo: string
  descripcion: string
}> = {
  1: {
    fase: 'Fase 01 · Psicométrico',
    titulo: 'Simulador del examen psicométrico',
    descripcion:
      '4 bloques de 10 minutos cada uno. Antes de cada bloque verás instrucciones y un ejemplo resuelto. Cuando el tiempo se agote, avanzas automáticamente al siguiente bloque.',
  },
  2: {
    fase: 'Fase 02 · Personalidad',
    titulo: 'Simulador del examen de personalidad',
    descripcion:
      'Un solo bloque largo con escala Likert. No hay respuestas correctas — el sistema evalúa la coherencia entre tus respuestas. Responde con honestidad y consistencia.',
  },
  3: {
    fase: 'Fase 03 · Axiológico',
    titulo: 'Simulador del examen axiológico',
    descripcion:
      'Evalúa qué tanto te pareces al perfil de valores militares. Escala de 5 puntos. Responde honestamente — perfiles idealizados se detectan como inconsistentes.',
  },
}
