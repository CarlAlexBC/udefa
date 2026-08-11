'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { COLOR_PAQUETE_CLARO, COLOR_DE_MODULO } from '@/lib/colores-paquete'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Lock,
  RefreshCw,
} from 'lucide-react'

type Reactivo = {
  id: number
  enunciado: string
  opciones: string[]
  tema: string | null
  modulo: 'cultural' | 'psicologico'
}
type PorModulo = { total: number; aciertos: number }
type Resultado = {
  total: number
  aciertos: number
  porcentaje: number
  porModulo: { cultural: PorModulo; psicologico: PorModulo }
}

// Color y etiqueta por módulo. Esta pantalla es CLARA, así que toma los tonos
// profundos de la tabla compartida — los mismos de /precios, para que el
// aspirante siga el color del módulo de una pantalla a otra.
const MODULO = {
  cultural: { etiqueta: 'Cultural', color: COLOR_PAQUETE_CLARO[COLOR_DE_MODULO.cultural].c },
  psicologico: { etiqueta: 'Psicológico', color: COLOR_PAQUETE_CLARO[COLOR_DE_MODULO.psicologico].c },
} as const

export default function MuestraPage() {
  const [preguntas, setPreguntas] = useState<Reactivo[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [idx, setIdx] = useState(0)
  const [respuestas, setRespuestas] = useState<Record<number, string>>({})
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [calificando, setCalificando] = useState(false)

  function cargar() {
    setCargando(true)
    setError('')
    setResultado(null)
    setIdx(0)
    setRespuestas({})
    apiFetch<Reactivo[]>('/muestra')
      .then(setPreguntas)
      .catch(() => setError('No pudimos cargar la muestra. Refresca la página.'))
      .finally(() => setCargando(false))
  }

  useEffect(() => {
    cargar()
  }, [])

  async function calificar() {
    setCalificando(true)
    setError('')
    try {
      const body = {
        respuestas: Object.entries(respuestas).map(([reactivoId, respuesta]) => ({
          reactivoId: Number(reactivoId),
          respuesta,
        })),
      }
      const r = await apiFetch<Resultado>('/muestra/calificar', {
        method: 'POST',
        body,
      })
      setResultado(r)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setError('No pudimos calificar. Intenta de nuevo.')
    } finally {
      setCalificando(false)
    }
  }

  const contestadas = Object.keys(respuestas).length

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Barra superior */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/monote-logo.jpeg"
              alt="El Monote te Guía"
              width={36}
              height={36}
              className="rounded-full ring-1 ring-accent/30"
            />
            <span className="text-sm font-semibold text-foreground">
              El Monote te Guía
            </span>
          </Link>
          <Link
            href="/precios"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Ver paquetes
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-8">
        {cargando ? (
          <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
            <p className="text-sm text-muted-foreground">Armando tu muestra…</p>
          </div>
        ) : error && !resultado ? (
          <div className="py-24 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <Button onClick={cargar} className="mt-4">
              Reintentar
            </Button>
          </div>
        ) : resultado ? (
          <Resultado
            resultado={resultado}
            onRepetir={cargar}
          />
        ) : (
          <Quiz
            preguntas={preguntas}
            idx={idx}
            setIdx={setIdx}
            respuestas={respuestas}
            setRespuestas={setRespuestas}
            contestadas={contestadas}
            calificar={calificar}
            calificando={calificando}
          />
        )}
      </div>
    </main>
  )
}

/* ─── Mini-simulacro, una pregunta a la vez ─── */
function Quiz({
  preguntas,
  idx,
  setIdx,
  respuestas,
  setRespuestas,
  contestadas,
  calificar,
  calificando,
}: {
  preguntas: Reactivo[]
  idx: number
  setIdx: (n: number) => void
  respuestas: Record<number, string>
  setRespuestas: (r: Record<number, string>) => void
  contestadas: number
  calificar: () => void
  calificando: boolean
}) {
  if (preguntas.length === 0) return null
  const p = preguntas[idx]
  const total = preguntas.length
  const esUltima = idx === total - 1
  const seleccion = respuestas[p.id]
  const mod = MODULO[p.modulo]

  function elegir(opcion: string) {
    setRespuestas({ ...respuestas, [p.id]: opcion })
  }

  return (
    <div>
      {/* Encabezado + progreso */}
      <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-accent">
        <span>Probadita gratis · sin cuenta</span>
        <span className="text-muted-foreground">
          {idx + 1} / {total}
        </span>
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <span
          className="inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
          style={{ backgroundColor: mod.color + '1F', color: mod.color }}
        >
          {mod.etiqueta}
        </span>
        <p className="mt-3 text-lg font-medium text-foreground">{p.enunciado}</p>

        <div className="mt-5 flex flex-col gap-2.5">
          {p.opciones.map((op) => {
            const activa = seleccion === op
            return (
              <button
                key={op}
                type="button"
                onClick={() => elegir(op)}
                className={
                  'w-full rounded-md border px-4 py-3 text-left text-sm transition-colors ' +
                  (activa
                    ? 'border-accent bg-accent/10 font-medium text-foreground'
                    : 'border-border text-muted-foreground hover:bg-muted')
                }
              >
                {op}
              </button>
            )
          })}
        </div>
      </div>

      {/* Navegación */}
      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIdx(Math.max(0, idx - 1))}
          disabled={idx === 0}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Anterior
        </Button>

        {esUltima ? (
          <Button onClick={calificar} disabled={calificando || contestadas === 0}>
            {calificando ? 'Calificando…' : 'Ver mi resultado'}
          </Button>
        ) : (
          <Button onClick={() => setIdx(Math.min(total - 1, idx + 1))}>
            Siguiente
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={calificar}
          disabled={calificando || contestadas === 0}
          className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground disabled:opacity-50"
        >
          Terminar ahora y ver mi resultado ({contestadas} contestadas)
        </button>
      </div>
    </div>
  )
}

/* ─── Resultado: puntaje visible, diagnóstico BAJO LLAVE ─── */
function Resultado({
  resultado,
  onRepetir,
}: {
  resultado: Resultado
  onRepetir: () => void
}) {
  const { aciertos, total, porcentaje, porModulo } = resultado

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-military" />
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Tu probadita
        </p>
        <p className="mt-2 text-5xl font-bold tracking-tight tabular-nums text-foreground">
          {aciertos}
          <span className="text-2xl text-muted-foreground"> / {total}</span>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {porcentaje}% de aciertos
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <ModuloMini nombre="Cultural" datos={porModulo.cultural} color={MODULO.cultural.color} />
          <ModuloMini nombre="Psicológico" datos={porModulo.psicologico} color={MODULO.psicologico.color} />
        </div>
      </div>

      {/* Diagnóstico bloqueado — el gancho */}
      <div className="relative mt-4 overflow-hidden rounded-xl border border-accent/40 bg-accent/5 p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">
              Esto es solo tu puntaje.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              El verdadero valor está en tu <strong className="text-foreground">diagnóstico</strong>:
              en qué temas fallas, qué páginas exactas estudiar y tu plan
              personalizado. Ese panel completo viene con tu paquete.
            </p>
          </div>
        </div>

        {/* Líneas "censuradas" para dar a entender que hay más */}
        <div className="mt-4 space-y-2" aria-hidden>
          {[92, 78, 85].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-accent/30" />
              <span
                className="h-3 rounded bg-foreground/10 blur-[2px]"
                style={{ width: `${w}%` }}
              />
            </div>
          ))}
        </div>

        <Link
          href="/precios"
          className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Desbloquear mi diagnóstico
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={onRepetir}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Probar con otras 50
        </button>
      </div>
    </div>
  )
}

function ModuloMini({
  nombre,
  datos,
  color,
}: {
  nombre: string
  datos: PorModulo
  color: string
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <p className="text-xs font-semibold" style={{ color }}>
        {nombre}
      </p>
      <p className="mt-0.5 text-lg font-bold tabular-nums text-foreground">
        {datos.aciertos}
        <span className="text-sm text-muted-foreground"> / {datos.total}</span>
      </p>
    </div>
  )
}
