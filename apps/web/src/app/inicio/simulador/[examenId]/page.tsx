'use client'

import { useEffect, useState, useRef, useCallback, use } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch, ApiError } from '@/lib/api'
import { AVISO_SIMULADOR } from '@/lib/legal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { logoDePlantel } from '@/lib/planteles'
import {
  INSTRUCCIONES_POR_BLOQUE,
  construirInstruccionesCultural,
  AVISO_CAMBIO_MATERIA,
  MATERIAS_CULTURAL_POR_PLANTEL,
  unirMaterias,
  type InstruccionesBloque,
} from '@/lib/instrucciones-bloques'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ListChecks,
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
  // Reactivos con figura (p. ej. razonamiento abstracto): la imagen trae el
  // enunciado visual y las opciones dibujadas; el `enunciado` de texto va vacío.
  imagenUrl?: string | null
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
  // Nombre de la materia recién iniciada, para el aviso de los exámenes que
  // corren de corrido. Se limpia solo a los pocos segundos.
  const [avisoMateria, setAvisoMateria] = useState<string | null>(null)

  // Timestamp del inicio del intento — usado para `respondidoEnMs` de cada respuesta.
  const inicioMsRef = useRef<number>(0)

  // Con cronómetro global el reloj se carga una sola vez, al empezar la primera
  // materia. Recuerda que ya arrancó para no reiniciarlo en las demás. Es estado
  // y no ref para poder leerlo en el render sin romper la regla react-hooks/refs.
  const [cronometroArrancado, setCronometroArrancado] = useState(false)

  // Temporizador del auto-avance entre reactivos. Lo guardamos en un ref para
  // poder cancelarlo: sin cancelación, responder a la carrera apila timers y el
  // índice se pasa del último reactivo (pantalla en blanco).
  const autoAvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  /**
   * Exámenes que corren "de corrido": una sola instrucción al principio y las
   * materias una tras otra, sin pantalla intermedia. Al cambiar de materia sólo
   * se muestra un aviso encima del reactivo.
   *
   * El psicométrico es lo contrario: cada bloque es una prueba aparte, con sus
   * instrucciones y su propio tiempo.
   */
  const esDeCorrido = examen?.tipo === 'cultural'

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
      // Candado de acceso: el backend niega el intento con code 'SIN_ACCESO'
      // cuando el módulo es de pago y el aspirante no lo ha comprado. En vez de
      // un error seco, lo mandamos a comprar.
      if (err instanceof ApiError && err.code === 'SIN_ACCESO') {
        router.push('/precios')
        return
      }
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
      const siguiente = bloqueIndex + 1
      setBloqueIndex(siguiente)
      setReactivoIndex(0)
      if (esDeCorrido) {
        // De corrido: no se corta el examen con una pantalla de instrucciones,
        // sólo se avisa que cambió la materia y se sigue.
        setAvisoMateria(bloques[siguiente]?.nombre ?? null)
        setEstado('en_progreso')
      } else {
        setEstado('instrucciones')
      }
    } else {
      finalizar('COMPLETADA')
    }
  }, [bloqueIndex, bloques, esDeCorrido, finalizar])

  /* ─── Comenzar el bloque actual (arranca timer) ─── */
  function comenzarBloque() {
    if (!bloqueActual) return
    if (esCronometroGlobal) {
      // Un solo reloj para todo el examen: sólo se carga la primera vez y de
      // ahí en adelante sigue corriendo entre materias. Así el aspirante
      // reparte sus 2 horas como quiera, que es como funciona el real.
      if (!cronometroArrancado) {
        setTiempoRestanteSeg((examen?.duracionMin ?? 0) * 60)
        setCronometroArrancado(true)
      }
    } else {
      setTiempoRestanteSeg(bloqueActual.tiempoLimite * 60)
    }
    setReactivoIndex(0)
    setEstado('en_progreso')
  }

  /* ─── Cancelar el auto-avance pendiente entre reactivos ─── */
  function cancelarAutoAvance() {
    if (autoAvanceRef.current) {
      clearTimeout(autoAvanceRef.current)
      autoAvanceRef.current = null
    }
  }

  /* ─── Ir a un reactivo concreto (navegación manual) ───
     Cancela el auto-avance pendiente y acota el índice al rango del bloque, para
     que ni la navegación manual ni un timer rezagado dejen el índice fuera de
     rango (que era lo que pintaba la pantalla en blanco). */
  function irAReactivo(idx: number) {
    cancelarAutoAvance()
    const total = bloqueActual?.reactivos.length ?? 0
    if (total === 0) return
    setReactivoIndex(Math.max(0, Math.min(idx, total - 1)))
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
      // Cancelamos cualquier auto-avance pendiente antes de programar el nuevo.
      // Si el aspirante responde a la carrera (doble clic o cambia de opción),
      // sin esto se apilan varios timers y cada uno suma +1: el índice se pasa
      // del último reactivo, `reactivoActual` queda indefinido y la pantalla se
      // va en blanco. El Math.min es el segundo cinturón de seguridad.
      cancelarAutoAvance()
      autoAvanceRef.current = setTimeout(() => {
        setReactivoIndex((prev) => Math.min(prev + 1, totalBloque - 1))
        autoAvanceRef.current = null
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

  /* ─── Al cambiar de bloque (o desmontar) matamos el auto-avance pendiente ───
     Así un timer rezagado del bloque anterior no mueve el índice del bloque
     nuevo. Depende sólo de bloqueIndex para no cancelarse en cada render. */
  useEffect(() => {
    return () => {
      if (autoAvanceRef.current) {
        clearTimeout(autoAvanceRef.current)
        autoAvanceRef.current = null
      }
    }
  }, [bloqueIndex])

  /* ─── El aviso de cambio de materia se retira solo ─── */
  useEffect(() => {
    if (!avisoMateria) return
    const t = setTimeout(() => setAvisoMateria(null), 6000)
    return () => clearTimeout(t)
  }, [avisoMateria])

  // Cuando el tiempo se agota: con reloj global se acaba el examen entero,
  // sin importar en qué materia vaya. Con reloj por bloque sólo se cierra ese
  // bloque y pasa al siguiente. Se maneja fuera del interval para evitar
  // setState anidados.
  //
  // El eslint-disable de bloque es a propósito: reaccionar a que el reloj llegue
  // a 0 dispara una transición ÚNICA (finalizar o pasar de bloque), y `finalizar`
  // saca el estado de 'en_progreso', así que no hay ciclo de renders. La regla
  // set-state-in-effect apunta a setState en cascada; aquí es un falso positivo.
  /* eslint-disable react-hooks/set-state-in-effect */
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
  /* eslint-enable react-hooks/set-state-in-effect */

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
        // De corrido: una sola instrucción para todo el examen, no una por
        // materia, y el progreso se cuenta en reactivos y no en bloques.
        // De corrido (cultural): una sola instrucción para todo el examen, con
        // las materias reales de ESTE plantel (los bloques ya vienen por plantel)
        // y un ejemplo de una de sus materias — no las del HCM para todos.
        instruccionesDelExamen={
          esDeCorrido && examen
            ? construirInstruccionesCultural(bloques.map((b) => b.nombre))
            : undefined
        }
        totalReactivos={bloques.reduce((n, b) => n + b.reactivos.length, 0)}
        cronometroGlobalSeg={
          esCronometroGlobal
            ? cronometroArrancado
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
    // Alto de pantalla con respaldo para teléfonos viejos de gama baja: la clase
    // `h-screen` deja 100vh (lo entiende todo navegador) y el `style` en línea lo
    // sube a 100dvh en los modernos. Los navegadores viejos (Chrome < 108, WebView
    // antiguo de Android) ignoran `dvh` y se quedan con los 100vh, así la barra de
    // navegación queda clavada también ahí. Va en línea a propósito: el compilador
    // borraría un respaldo 100vh si lo pusiéramos como utilidad de Tailwind.
    <main
      className="flex h-screen flex-col bg-background"
      style={{ height: '100dvh' }}
    >
      {/* Barra superior: examen, bloque, progreso, timer */}
      <div className="shrink-0 border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-widest text-military">
              {examen?.nombre ?? 'Simulador'}
              {esDeCorrido
                ? ` · ${bloqueActual.nombre}`
                : bloques.length > 1
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

      {/* Zona del reactivo — la ÚNICA parte que crece y hace scroll (enunciado +
          opciones). Al encerrar aquí el desbordamiento, la fila de navegación de
          abajo queda clavada y ya no brinca aunque el texto sea largo. */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-6 py-8">
          {/* Aviso de cambio de materia — sólo en exámenes de corrido. No corta
              el examen ni detiene el reloj: avisa y se retira solo. */}
          {avisoMateria && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-lg border border-military/30 bg-military/5 px-4 py-3"
            >
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-military" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Ahora: {avisoMateria}.</span>{' '}
                <span className="text-muted-foreground">
                  {AVISO_CAMBIO_MATERIA[avisoMateria] ?? 'Sigue el examen sin pausa.'}
                </span>
              </p>
            </div>
          )}

          {/* Altura mínima del enunciado para que las opciones no arranquen a
              distinta altura entre reactivos. El enunciado se centra ahí.

              160 px y no 140: el enunciado más largo del banco cultural mide
              217 caracteres, que a este tamaño son cinco líneas. Con 140 se
              desbordaba y movía las opciones. Si aun así se pasa, ahora sólo
              empuja hacia el scroll de esta zona, no a la navegación. */}
          {/* Enunciado de texto: solo si lo hay. Los reactivos con figura
              (razonamiento abstracto) lo llevan vacío — la pregunta va en la
              imagen. */}
          {reactivoActual.enunciado && (
            <div className="mb-6 flex min-h-[120px] items-center">
              <h2 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                {reactivoActual.enunciado}
              </h2>
            </div>
          )}

          {/* Imagen del reactivo (razonamiento abstracto y demás con figura).
              La imagen ya trae el enunciado visual y las opciones dibujadas; el
              aspirante elige la letra en los botones de abajo. Va como <img>
              normal (no next/image) porque el alto es variable por reactivo. */}
          {reactivoActual.imagenUrl && (
            <div className="mb-8 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={reactivoActual.imagenUrl}
                alt="Reactivo de razonamiento abstracto"
                className="max-h-[46vh] w-auto max-w-full rounded-lg border border-border bg-neutral-900 object-contain"
              />
            </div>
          )}

          <OpcionesReactivo
            opciones={reactivoActual.opciones}
            marcada={respuestaActual}
            onSelect={responder}
            esLikert={examen ? !examen.calificable : false}
          />
        </div>
      </div>

      {/* Navegación — fila FIJA, fuera del scroll: nunca cambia de sitio, aunque
          el enunciado o las opciones de arriba sean largos. En móvil los botones
          suben a h-11 (44px) para ser cómodos al dedo; de sm en adelante vuelven
          al h-8 (32px) del sistema de diseño. */}
      <div className="shrink-0 border-t border-border bg-background">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Button
            variant="outline"
            onClick={() => irAReactivo(reactivoIndex - 1)}
            disabled={reactivoIndex === 0}
            className="h-11 sm:h-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Anterior
          </Button>

          {esUltimoReactivoBloque ? (
            <Button
              onClick={pasarASiguienteBloque}
              className="h-11 bg-accent text-accent-foreground hover:bg-accent/90 sm:h-8"
            >
              {esUltimoBloque ? 'Finalizar examen' : 'Terminar bloque'}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={() => irAReactivo(reactivoIndex + 1)} className="h-11 sm:h-8">
              Siguiente
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Banda inferior sticky: mapa de reactivos scrollable + finalizar */}
      <BandaReactivos
        reactivos={bloqueActual.reactivos}
        reactivoIndex={reactivoIndex}
        respuestas={respuestas}
        onSelect={irAReactivo}
        onFinalizar={() => finalizar('COMPLETADA')}
      />
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: pantalla inicial (idle / cargando / error)
   ═══════════════════════════════════════════════════════════ */

/** Datos mínimos que la pantalla inicial necesita para personalizarse. */
type PlantelMini = { id: number; nombre: string }
type PerfilMini = { nombre: string; plantel: PlantelMini | null }
type ExamenMini = {
  id: number
  tipo: string
  nombre: string
  plantelId: number | null
  anio: number | null
}

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
  const enSesion = totalEnSesion > 0 && indiceEnSesion >= 0

  // Cargamos plantel del aspirante y el tipo de este examen para que la portada
  // del cultural deje de verse vacía: muestra el escudo de SU escuela y sus
  // materias. Los psicológicos (1/2/3) traen su ficha fija en META_POR_EXAMEN.
  const [perfil, setPerfil] = useState<PerfilMini | null>(null)
  const [examenInfo, setExamenInfo] = useState<ExamenMini | null>(null)
  // Marca que /examenes ya respondió (con dato o con error). Sin esto, si la
  // petición falla nos quedaríamos con el esqueleto puesto para siempre.
  const [listaCargada, setListaCargada] = useState(false)

  useEffect(() => {
    apiFetch<PerfilMini>('/auth/perfil')
      .then(setPerfil)
      .catch(() => {})
    apiFetch<ExamenMini[]>('/examenes')
      .then((lista) => setExamenInfo(lista.find((e) => e.id === examenId) ?? null))
      .catch(() => {})
      .finally(() => setListaCargada(true))
  }, [examenId])

  const metaEstatica = META_POR_EXAMEN[examenId]
  const esCultural = examenInfo?.tipo === 'cultural'
  const plantel = perfil?.plantel ?? null
  const materias = plantel ? MATERIAS_CULTURAL_POR_PLANTEL[plantel.nombre] ?? [] : []
  const logoSrc = plantel ? logoDePlantel(plantel.nombre) : null

  // Cada examen psicológico (1/2/3) tiene su portada inmersiva propia, con el
  // tono de su tipo (dorado contra-reloj / oliva introspectivo). Se decide
  // PRIMERO: sus datos son estáticos (INTRO_PSICO) y no dependen de cargar
  // perfil/plantel, así que no hay parpadeo previo.
  const introPsico = INTRO_PSICO[examenId]
  if (introPsico) {
    return (
      <PortadaPsicologica
        meta={introPsico}
        estado={estado}
        error={error}
        onIniciar={onIniciar}
        indiceEnSesion={indiceEnSesion}
        totalEnSesion={totalEnSesion}
      />
    )
  }

  // El examen cultural usa una portada inmersiva oscura, a pantalla completa y
  // sin tarjeta (diseño J+F+E). Los psicológicos (ids 1/2/3, con ficha fija) y
  // cualquier otro caso siguen con la ficha clara de más abajo. Mientras no
  // sepamos el tipo y no haya ficha fija tiramos hacia la inmersiva: los ids sin
  // ficha son culturales, así no parpadea la ficha clara antes de saberlo.
  const ramaCultural = !metaEstatica && (esCultural || !listaCargada)
  if (ramaCultural) {
    return (
      <PortadaCultural
        cargando={!listaCargada}
        plantel={plantel}
        materias={materias}
        estado={estado}
        error={error}
        onIniciar={onIniciar}
      />
    )
  }

  // Mientras no sepamos qué examen es (y no tenga ficha fija), no pintamos el
  // texto genérico "Simulador / Comenzar el examen": mostramos un esqueleto para
  // que no parpadee lo feo antes de cargar lo personalizado.
  const cargandoMeta = !metaEstatica && examenInfo === null && estado !== 'error'

  const fase = esCultural
    ? 'Examen simulador · Cultural'
    : metaEstatica?.fase ?? ''
  const titulo = esCultural
    ? 'Simulador del examen cultural'
    : metaEstatica?.titulo ?? 'Simulador'
  const descripcion = esCultural
    ? `${materias.length ? unirMaterias(materias) : 'Todas las materias de tu temario'} de corrido, con un solo cronómetro. Al final ves tus aciertos por materia y qué páginas repasar.`
    : metaEstatica?.descripcion ?? 'Comenzar el examen.'

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
        {cargandoMeta ? (
          /* Esqueleto mientras carga la ficha personalizada del examen */
          <div className="animate-pulse">
            <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-muted" />
            <div className="mx-auto mb-3 h-4 w-40 rounded bg-muted" />
            <div className="mx-auto mb-2 h-6 w-56 rounded bg-muted" />
            <div className="mx-auto h-3 w-64 rounded bg-muted" />
          </div>
        ) : (
          <>
            {/* Escudo del plantel — el ancla visual del examen cultural */}
            {esCultural && (
              <div className="mb-5 flex justify-center">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-accent/20 blur-xl"
                  />
                  {logoSrc ? (
                    <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-card shadow-md ring-1 ring-accent/40">
                      <Image
                        src={logoSrc}
                        alt={`Escudo de ${plantel?.nombre ?? 'tu plantel'}`}
                        width={140}
                        height={140}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-military/15 ring-1 ring-accent/40">
                      <BookOpen className="h-10 w-10 text-accent" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {fase && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-military/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-military">
                {fase}
              </div>
            )}
            <h1 className="mb-1 text-2xl font-semibold tracking-tight text-foreground">
              {titulo}
            </h1>
            {esCultural && plantel && (
              <p className="mb-3 text-sm font-medium text-foreground">
                {plantel.nombre}
              </p>
            )}
            <p className="mb-6 text-sm text-muted-foreground">
              {descripcion}
              {enSesion && indiceEnSesion < totalEnSesion - 1 && (
                <span className="mt-2 block text-xs text-accent">
                  Al terminar esta fase continúa la siguiente automáticamente.
                </span>
              )}
            </p>

            {/* Pastillas con lo esencial del examen cultural */}
            {esCultural && (
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <ListChecks className="h-3.5 w-3.5 text-accent" />
                  100 reactivos
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  2 horas contra reloj
                </span>
                {materias.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5 text-accent" />
                    {materias.length} materias
                  </span>
                )}
              </div>
            )}

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

            {/* Aviso legal: es material de práctica, no un examen oficial. */}
            <div className="mt-5 flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/5 p-3 text-left">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Aviso. </span>
                {AVISO_SIMULADOR}
              </p>
            </div>
          </>
        )}
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
   Sub-componente: portada inmersiva del examen cultural (diseño J+F+E)

   Pantalla oscura a pantalla completa —sin tarjeta— para el momento previo
   al examen cultural. Manda la regla de "cero distracción": sello de la
   Rectoría, el cronómetro como protagonista (aquí es DECORATIVO; el reloj
   real arranca al presionar Comenzar), un consejo del Monote y el botón.

   Colores fijados a mano (carbón/latón/oliva/crema) y NO tokens del tema,
   porque la app corre en modo claro y esta portada es siempre oscura.
   Los exámenes psicológicos NO usan esto: siguen con la ficha clara de
   PantallaInicial.
   ═══════════════════════════════════════════════════════════ */

function PortadaCultural({
  cargando,
  plantel,
  materias,
  estado,
  error,
  onIniciar,
}: {
  cargando: boolean
  plantel: PlantelMini | null
  materias: string[]
  estado: Estado
  error: string
  onIniciar: () => void
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#161513] px-6 py-8">
      {/* Capa 1 — textura de uniforme: líneas diagonales latón muy tenues */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(201,154,59,0.05) 0, rgba(201,154,59,0.05) 1px, transparent 1px, transparent 12px)',
        }}
      />
      {/* Capa 2 — halo dorado radial al centro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(65% 55% at 50% 38%, rgba(201,154,59,0.16), transparent 72%)',
        }}
      />

      {/* Volver — discreto, para no romper la inmersión */}
      <Link
        href="/inicio"
        className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 text-xs font-medium text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver
      </Link>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        {cargando ? (
          <PortadaCulturalEsqueleto />
        ) : (
          <>
            {/* Sello institucional de la Rectoría — medalla secundaria.
                priority: es lo primero de la portada, que cargue sin parpadeo. */}
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] ring-1 ring-[#C99A3B]/40">
              <Image
                src="/udefa-rectoria.png"
                alt="Rectoría U.D.E.F.A."
                width={128}
                height={128}
                priority
                className="h-full w-full scale-105 object-cover"
              />
            </div>

            {/* Badge oliva institucional */}
            <span className="mb-4 inline-flex items-center rounded-full border border-[#6B7530]/60 bg-[#4B5121]/40 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#E4E0CF]">
              Examen simulador · Cultural
            </span>

            {/* Título en crema */}
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#F7F3EA] sm:text-4xl">
              Estás por comenzar el examen cultural
            </h1>

            {/* Nombre del plantel en latón */}
            {plantel && (
              <p className="mt-3 text-lg font-semibold text-[#C99A3B]">
                {plantel.nombre}
              </p>
            )}

            {/* Materias en pastillas con borde dorado */}
            {materias.length > 0 && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {materias.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-[#C99A3B]/50 bg-[#C99A3B]/10 px-3.5 py-1.5 text-sm font-medium text-[#EDE6D3]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}

            {/* Cronómetro protagonista — DECORATIVO, el reloj real arranca al comenzar */}
            <div className="mt-7 flex flex-col items-center">
              <span className="font-mono text-6xl font-bold tabular-nums tracking-tight text-[#C99A3B] sm:text-7xl">
                02:00:00
              </span>
              <span className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[#9A9382]">
                Tiempo total · 100 reactivos · un solo reloj
              </span>
            </div>

            {/* Consejo del Monote */}
            <div className="mt-6 flex w-full items-center gap-4 rounded-xl border border-[#C99A3B]/20 bg-white/5 p-4 text-left">
              <Image
                src="/monote-logo.jpeg"
                alt="El Monote te Guía"
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-[#C99A3B]/40"
              />
              <p className="text-sm leading-relaxed text-[#D8D2C4]">
                <span className="font-semibold text-[#F7F3EA]">El Monote: </span>
                tienes 2 horas para ti solo, repártelas como quieras; si te atoras
                en una, márcala y sigue.
              </p>
            </div>

            {/* Error de arranque (el candado de acceso SIN_ACCESO ya redirige a /precios) */}
            {error && (
              <div className="mt-6 flex w-full items-start gap-2 rounded-lg border border-[#EF4444]/40 bg-[#EF4444]/10 p-3 text-left">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EF4444]" />
                <p className="text-sm text-[#F0B4B4]">{error}</p>
              </div>
            )}

            {/* CTA latón */}
            <Button
              onClick={onIniciar}
              disabled={estado === 'cargando'}
              className="mt-6 h-14 w-full rounded-xl bg-[#C99A3B] px-8 text-base font-semibold text-[#161513] shadow-lg shadow-[#C99A3B]/20 hover:bg-[#D8AE52] sm:w-auto"
            >
              {estado === 'cargando' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Preparando reactivos...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Comenzar simulador
                </>
              )}
            </Button>

            {/* Aviso legal chico */}
            <p className="mt-4 text-xs text-[#8A8579]">
              Práctica educativa. No es un examen oficial.
            </p>
          </>
        )}
      </div>
    </main>
  )
}

/** Esqueleto oscuro mientras carga el perfil/plantel de la portada cultural. */
function PortadaCulturalEsqueleto() {
  return (
    <div className="flex w-full animate-pulse flex-col items-center">
      <div className="mb-6 h-16 w-16 rounded-full bg-white/5" />
      <div className="mb-5 h-6 w-52 rounded-full bg-white/5" />
      <div className="mb-2 h-9 w-80 max-w-full rounded bg-white/5" />
      <div className="mb-6 h-9 w-64 max-w-full rounded bg-white/5" />
      <div className="mb-8 flex gap-2">
        <div className="h-8 w-20 rounded-full bg-white/5" />
        <div className="h-8 w-24 rounded-full bg-white/5" />
        <div className="h-8 w-20 rounded-full bg-white/5" />
      </div>
      <div className="mb-9 h-16 w-64 rounded bg-white/5" />
      <div className="h-20 w-full rounded-xl bg-white/5" />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente: portada inmersiva de los exámenes psicológicos

   Misma familia visual que la del cultural, pero adaptada al tipo de examen
   (datos en INTRO_PSICO):
   - Psicométrico → tono dorado, contra-reloj: el reloj (por bloque) es el
     protagonista, con los bloques en pastillas.
   - Personalidad / Axiológico → tono oliva, introspectivo: NO hay reloj; el
     protagonista es el mensaje ("no hay respuestas correctas" / "¿qué tanto te
     pareces?") y las pastillas muestran la escala de respuesta.
   El reloj es DECORATIVO (el real arranca al comenzar). Colores fijados a mano.
   ═══════════════════════════════════════════════════════════ */

function PortadaPsicologica({
  meta,
  estado,
  error,
  onIniciar,
  indiceEnSesion,
  totalEnSesion,
}: {
  meta: IntroPsico
  estado: Estado
  error: string
  onIniciar: () => void
  indiceEnSesion: number
  totalEnSesion: number
}) {
  const enSesion = totalEnSesion > 0 && indiceEnSesion >= 0
  // Acento por tono. El oliva del sistema (#4B5121) es muy oscuro para texto
  // sobre carbón, así que aquí usamos un oliva más claro y legible.
  const dorado = meta.tono === 'dorado'
  const acc = dorado ? '#C99A3B' : '#AEBE55'
  const halo = dorado ? 'rgba(201,154,59,0.16)' : 'rgba(107,117,48,0.22)'

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#161513] px-6 py-8">
      {/* Capa 1 — textura de uniforme */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(201,154,59,0.05) 0, rgba(201,154,59,0.05) 1px, transparent 1px, transparent 12px)',
        }}
      />
      {/* Capa 2 — halo radial (dorado u oliva según el tono) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(65% 55% at 50% 38%, ${halo}, transparent 72%)`,
        }}
      />

      {/* Volver — discreto */}
      <Link
        href="/inicio"
        className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 text-xs font-medium text-[#8A8579] transition-colors hover:text-[#F7F3EA]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver
      </Link>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        {/* Sello institucional de la Rectoría */}
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] ring-1 ring-[#C99A3B]/40">
          <Image
            src="/udefa-rectoria.png"
            alt="Rectoría U.D.E.F.A."
            width={128}
            height={128}
            priority
            className="h-full w-full scale-105 object-cover"
          />
        </div>

        {/* Indicador de sesión completa (fase N de M) */}
        {enSesion && (
          <span className="mb-3 inline-flex items-center rounded-full border border-[#C99A3B]/40 bg-[#C99A3B]/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#E6CF98]">
            Sesión completa · Fase {indiceEnSesion + 1} de {totalEnSesion}
          </span>
        )}

        {/* Badge oliva institucional (la fase) */}
        <span className="mb-4 inline-flex items-center rounded-full border border-[#6B7530]/60 bg-[#4B5121]/40 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#E4E0CF]">
          {meta.fase}
        </span>

        {/* Título en crema */}
        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#F7F3EA] sm:text-4xl">
          {meta.titulo}
        </h1>

        {/* Protagonista — reloj (contra-reloj) o mensaje (introspectivo) */}
        {meta.reloj ? (
          <div className="mt-7 flex flex-col items-center">
            <span
              className="font-mono text-6xl font-bold tabular-nums tracking-tight sm:text-7xl"
              style={{ color: acc }}
            >
              {meta.reloj.tiempo}
            </span>
            <span className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[#9A9382]">
              {meta.reloj.etiqueta}
            </span>
          </div>
        ) : meta.mensaje ? (
          <div className="mt-7 flex flex-col items-center">
            <p className="text-balance text-2xl font-bold tracking-tight text-[#F7F3EA] sm:text-3xl">
              {meta.mensaje.principal}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#C9C3B4]">
              {meta.mensaje.sub}
            </p>
          </div>
        ) : null}

        {/* Pastillas — bloques (psicométrico) o escala de respuesta (introspectivos) */}
        {meta.pills.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {meta.pills.map((p) => (
              <span
                key={p}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium text-[#EDE6D3]"
                style={{ borderColor: acc + '8C', backgroundColor: acc + '1A' }}
              >
                {p}
              </span>
            ))}
          </div>
        )}
        {meta.pillsNota && (
          <p className="mt-2.5 text-xs text-[#9A9382]">{meta.pillsNota}</p>
        )}

        {/* Consejo del Monote */}
        <div className="mt-6 flex w-full items-center gap-4 rounded-xl border border-[#C99A3B]/20 bg-white/5 p-4 text-left">
          <Image
            src="/monote-logo.jpeg"
            alt="El Monote te Guía"
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-[#C99A3B]/40"
          />
          <p className="text-sm leading-relaxed text-[#D8D2C4]">
            <span className="font-semibold text-[#F7F3EA]">El Monote: </span>
            {meta.consejoMonote}
          </p>
        </div>

        {/* Error de arranque (el candado SIN_ACCESO ya redirige a /precios) */}
        {error && (
          <div className="mt-6 flex w-full items-start gap-2 rounded-lg border border-[#EF4444]/40 bg-[#EF4444]/10 p-3 text-left">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#EF4444]" />
            <p className="text-sm text-[#F0B4B4]">{error}</p>
          </div>
        )}

        {/* CTA latón — acción de marca, dorado en todos los tonos */}
        <Button
          onClick={onIniciar}
          disabled={estado === 'cargando'}
          className="mt-6 h-14 w-full rounded-xl bg-[#C99A3B] px-8 text-base font-semibold text-[#161513] shadow-lg shadow-[#C99A3B]/20 hover:bg-[#D8AE52] sm:w-auto"
        >
          {estado === 'cargando' ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Preparando reactivos...
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" />
              Comenzar examen
            </>
          )}
        </Button>

        {/* En sesión: aviso de continuación automática */}
        {enSesion && indiceEnSesion < totalEnSesion - 1 && (
          <p className="mt-3 text-xs text-[#9A9382]">
            Al terminar esta fase continúa la siguiente automáticamente.
          </p>
        )}

        {/* Aviso legal chico */}
        <p className="mt-4 text-xs text-[#8A8579]">
          Práctica educativa. No es un examen oficial.
        </p>
      </div>
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
  instruccionesDelExamen,
  totalReactivos,
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
  /**
   * Instrucciones del examen completo, para los que corren de corrido. Cuando
   * viene, sustituye a las del bloque: el aspirante ve una sola pantalla.
   */
  instruccionesDelExamen?: InstruccionesBloque
  /** Reactivos de todo el examen, para anunciar el total y no el del bloque. */
  totalReactivos?: number
}) {
  const deCorrido = instruccionesDelExamen != null
  const info = instruccionesDelExamen ?? INSTRUCCIONES_POR_BLOQUE[bloque.nombre]
  const sinReactivos = bloque.reactivos.length === 0

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Progreso de bloques — de corrido no aplica: es un examen solo. */}
        {!deCorrido && (
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
        )}

        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-military">
          {deCorrido
            ? `${totalBloques} materias, de corrido`
            : `Bloque ${bloqueIndex + 1} de ${totalBloques}`}
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
                : `${deCorrido ? (totalReactivos ?? bloque.reactivos.length) : bloque.reactivos.length} reactivos`}
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

  /*
   * Altura reservada para que los botones NO brinquen entre un reactivo y otro.
   *
   * En el banco cultural la opción mediana mide 37 caracteres —una línea— pero
   * el 1% pasa de 134 y la más larga llega a 208, o sea tres líneas. Sin altura
   * mínima, pasar de un reactivo de opciones cortas a uno de opciones largas
   * mueve todo el bloque y con él los botones de navegación, justo cuando el
   * aspirante ya llevaba el cursor hacia ellos.
   *
   * 72 px por botón cubre dos líneas de texto con su padding, que es el 99% de
   * los casos. El contenedor reserva los cuatro más sus separaciones
   * (4×72 + 3×12 = 324) para que la navegación quede clavada.
   */
  return (
    <div className="flex min-h-[324px] flex-col gap-3">
      {opciones.map((opcion, i) => {
        const letra = String.fromCharCode(65 + i)
        const seleccionada = marcada === opcion
        return (
          <button
            key={opcion}
            type="button"
            onClick={() => onSelect(opcion)}
            className={cn(
              'flex min-h-[72px] items-center gap-4 rounded-lg border p-4 text-left transition-colors',
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
   Portada inmersiva de cada examen psicológico (1/2/3).

   Estático a propósito: la portada se muestra ANTES de armar el examen, cuando
   todavía no hay bloques que leer. Cada examen trae su tono y su "protagonista"
   según su naturaleza (ver PortadaPsicologica).
   ═══════════════════════════════════════════════════════════ */

type IntroPsico = {
  fase: string
  titulo: string
  /** 'dorado' = contra-reloj (psicométrico); 'oliva' = introspectivo (calma). */
  tono: 'dorado' | 'oliva'
  /** Protagonista contra-reloj — reloj DECORATIVO. Excluye `mensaje`. */
  reloj?: { tiempo: string; etiqueta: string }
  /** Protagonista introspectivo — mensaje. Excluye `reloj`. */
  mensaje?: { principal: string; sub: string }
  /** Bloques (psicométrico) o escala de respuesta (introspectivos). */
  pills: string[]
  pillsNota?: string
  consejoMonote: string
}

const INTRO_PSICO: Record<number, IntroPsico> = {
  1: {
    fase: 'Fase 01 · Psicométrico',
    titulo: 'Estás por comenzar el examen psicométrico',
    tono: 'dorado',
    reloj: {
      tiempo: '10:00',
      etiqueta: '10 minutos por bloque · 4 bloques · avanza solo al agotarse',
    },
    pills: [
      'Analogías y Cultura General',
      'Sinónimos y Antónimos',
      'Razonamiento Lógico-Matemático',
      'Razonamiento Abstracto',
    ],
    consejoMonote:
      'cada bloque tiene su propio reloj. Si una pregunta te traba, márcala y sigue dentro del bloque — no dejes las fáciles sin contestar por el tiempo.',
  },
  2: {
    fase: 'Fase 02 · Personalidad',
    titulo: 'Estás por comenzar el examen de personalidad',
    tono: 'oliva',
    mensaje: {
      principal: 'No hay respuestas correctas',
      sub: 'El sistema no cuenta aciertos: mide qué tan coherente eres contigo mismo a lo largo del examen.',
    },
    pills: ['Verdadero', 'Falso'],
    pillsNota: 'Una afirmación a la vez · sin cronómetro por pregunta',
    consejoMonote:
      'contesta lo que de verdad eres, no lo que crees que “suena bien”. Las respuestas forzadas se detectan como contradicciones.',
  },
  3: {
    fase: 'Fase 03 · Axiológico',
    titulo: 'Estás por comenzar el examen axiológico',
    tono: 'oliva',
    mensaje: {
      principal: '¿Qué tanto te pareces?',
      sub: 'Mide tu cercanía con los valores militares — lealtad, honor y disciplina. Tampoco se califica por aciertos.',
    },
    pills: ['Me parezco totalmente', 'Mucho', 'Más o menos', 'Poco', 'Nada'],
    consejoMonote:
      'no respondas siempre en el extremo positivo. Los perfiles idealizados se detectan como poco creíbles — responde como realmente actuarías.',
  },
}

/* ═══════════════════════════════════════════════════════════
   Metadatos por examen — ficha clara de respaldo (fallback).
   Los psicológicos usan INTRO_PSICO (arriba); esto queda como red de
   seguridad para cualquier examen no-cultural sin portada propia.
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
