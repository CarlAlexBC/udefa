import Link from 'next/link'
import { ArrowRight, BookOpen, LifeBuoy, Lock, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { urlDeLink } from '@/lib/diagnostico-links'

/**
 * Protocolo de señales críticas. Lo calcula `detectarSenalesCriticas` en el
 * backend; aquí solo se muestra.
 *
 * Llega el número de señales, no cuáles: repetirle al aspirante el enunciado
 * que acaba de marcar no le sirve de nada cuando está mal.
 */
export type SenalesCriticas = {
  nivel: 'alerta_maxima' | 'alerta' | 'ninguna'
  protocoloCrisis: boolean
  senalesCrisis: number
  criticosPresentados: number
  combinacionEvaluable: boolean
  hallazgosPorTema: Record<string, number>
}

/** Los tres recursos que fija el protocolo en 01-suicidio-sentido-vida.md. */
const LINEAS_DE_APOYO = [
  {
    nombre: 'SAPTEL',
    numero: '55 5259-8121',
    tel: '+525552598121',
    nota: '24 horas, todos los días, sin costo',
  },
  {
    nombre: 'Línea de la Vida',
    numero: '800-290-0024',
    tel: '+528002900024',
    nota: 'Salud mental, sin costo',
  },
  {
    nombre: 'Emergencias',
    numero: '911',
    tel: '911',
    nota: 'Pide la opción de salud mental',
  },
]

/**
 * Card del protocolo de crisis.
 *
 * Deliberadamente **no** es una `DiagnosticoCard`. Las tres severidades que ya
 * existen (`atencion`, `revisar`, `fortaleza`) califican al aspirante y le
 * ofrecen estudiar para mejorar. Esta no califica nada: acompaña. Por eso lleva
 * borde completo en vez del filo de color, y usa el latón del sistema en vez
 * del rojo de `destructive` — el protocolo pide que se distinga sin alarmar.
 *
 * Lo primero de la pantalla son los teléfonos, no el texto. Si alguien abre el
 * panel en mal momento, lo que necesita es un número al que llamar.
 *
 * Vive en su propio archivo, a diferencia de las demás sub-cards del panel,
 * porque es la única parte de la interfaz donde una regresión silenciosa
 * significa que alguien en crisis no vea nada.
 */
export function AlertaCriticaCard({ senales }: { senales: SenalesCriticas }) {
  const maxima = senales.nivel === 'alerta_maxima'

  return (
    <section
      className={cn(
        'rounded-xl border bg-accent/[0.06] p-5',
        maxima ? 'border-accent/60' : 'border-accent/35',
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15">
          <LifeBuoy className="h-4 w-4 text-accent" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {maxima
              ? 'Queremos que hables con alguien hoy'
              : 'Detectamos respuestas que hablan de un momento difícil'}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Esto no es un diagnóstico. Es una señal para que consideres apoyo
            profesional, y lo puedes hacer sin que nada de esto cambie tu
            preparación.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {LINEAS_DE_APOYO.map((l) => (
          <a
            key={l.nombre}
            href={`tel:${l.tel}`}
            className="rounded-lg border border-accent/30 bg-card p-3 transition-colors hover:border-accent/60 hover:bg-accent/5"
          >
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
              <Phone className="h-3 w-3" />
              {l.nombre}
            </span>
            <span className="mt-1 block text-base font-semibold tracking-tight text-foreground">
              {l.numero}
            </span>
            <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
              {l.nota}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-4 space-y-2 border-t border-accent/20 pt-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          También ayuda contarle a un adulto de confianza. Puedes acudir a un
          Centro Comunitario de Salud Mental (CECOSAM) o al servicio psicológico
          de la universidad más cercana.
        </p>
        <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
          <Lock className="mt-px h-3 w-3 shrink-0" />
          <span>
            Este análisis es tuyo y de nadie más. No se envía a ningún plantel ni
            a reclutamiento, y no afecta tu resultado.
          </span>
        </p>
        <Link
          href={urlDeLink({ seccion: '4.6.1-manejo-emocional' })}
          className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          <BookOpen className="h-3 w-3" />
          Leer sobre esto con calma
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </section>
  )
}
