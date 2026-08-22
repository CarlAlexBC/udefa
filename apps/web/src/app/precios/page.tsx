import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SiteFooter } from '@/components/legal/SiteFooter'
import {
  COLOR_PAQUETE_CLARO,
  COLOR_DE_MODULO,
  type TonoPaquete,
} from '@/lib/colores-paquete'
import { Revelar } from '@/components/landing/Revelar'
import { BotonPaquete } from './BotonPaquete'
import {
  BadgeCheck,
  Calendar,
  CalendarClock,
  Check,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Brain,
  Headphones,
  Megaphone,
  RefreshCw,
  ShieldCheck,
  Target,
} from 'lucide-react'

export const metadata = {
  title: 'Paquetes y precios · El Monote te Guía',
  description:
    'Acompañamiento completo para el examen Cultural y Psicológico. Elige tu paquete para la Convocatoria 2027.',
}

// Ciclo vigente. Cambia esto (y las fechas del proceso) cuando abra el siguiente.
const CICLO = '2027'
const MODELO_ACCESO = `Pago único · Acceso hasta finalizar la convocatoria ${CICLO}`

// Colores por paquete. Van por inline-style porque son identidad de producto,
// no roles de interfaz, así que viven fuera de los tokens de globals.css.
//
// Esta pantalla es CLARA, por eso toma la tabla de tonos profundos. La de
// compra es oscura y toma la otra; las dos salen del mismo archivo para que
// no se despeguen. El porqué está explicado en colores-paquete.ts.
const COLOR = COLOR_PAQUETE_CLARO

// Logos oficiales de los métodos de pago (los aportó Carlo; viven en public/pagos/).
// El w/h es el tamaño real de cada archivo — Next lo necesita para no deformarlos.
// El de Mercado Pago se recortó para quitarle el fondo de cuadrícula del original.
const LOGOS_PAGO = [
  { nombre: 'Mercado Pago', src: '/pagos/mercadopago.png', w: 600, h: 216 },
  { nombre: 'Visa', src: '/pagos/visa.png', w: 208, h: 68 },
  { nombre: 'Mastercard', src: '/pagos/mastercard.png', w: 103, h: 45 },
  { nombre: 'OXXO', src: '/pagos/oxxo.png', w: 107, h: 48 },
] as const

export default function PreciosPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Barra superior */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
            href="/login"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            Iniciar sesión
          </Link>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO — tesis + callout de convocatoria
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.6fr_1fr] md:items-center">
          {/* Texto + convocatoria */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Elige tu ruta de preparación
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Prepárate hoy. <span className="text-accent">Asegura tu futuro.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Acompañamiento completo para el examen Cultural y Psicológico, desde
              que sale la convocatoria hasta tu resultado.
            </p>

            {/* Callout de convocatoria */}
            <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-5">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: COLOR.dorado.c, color: COLOR.dorado.on }}
                >
                  <CalendarClock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Convocatoria {CICLO}
                  </p>
                  <p className="text-xs text-muted-foreground">Abre en diciembre 2026</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Empieza con tiempo y llega con ventaja.{' '}
                <span className="font-semibold text-foreground">
                  Cada día de preparación cuenta.
                </span>
              </p>
            </div>
          </div>

          {/* Sello de la Rectoría como medalla. El PNG (public/udefa-sello.png) es
              transparente y trae su propia sombra 3D. En móvil va arriba
              (order-1); en escritorio, a la derecha. */}
          <div className="order-1 flex justify-center md:order-2">
            <Image
              src="/udefa-sello.png"
              alt="Sello de la Rectoría U.D.E.F.A. — Dirección General de Educación Militar"
              width={1024}
              height={1024}
              priority
              className="h-auto w-44 sm:w-52 md:w-64"
            />
          </div>
        </div>

        {/* Banda informativa */}
        <div className="mt-6 flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
          <Calendar className="h-4 w-4 shrink-0" style={{ color: COLOR.azul.c }} />
          <p className="text-sm text-muted-foreground">
            Los exámenes Cultural y Psicológico se realizan en{' '}
            <span className="font-semibold text-foreground">abril</span>. Resultados
            en <span className="font-semibold text-foreground">mayo</span>.
          </p>
        </div>

        {/* Ventaja: material que se actualiza al temario vigente */}
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-card p-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: COLOR.verde.c, color: COLOR.verde.on }}
          >
            <RefreshCw className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">
              Tu ventaja: el material se actualiza solo.
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Compra hoy y avanza. Cuando salgan los temarios de la Convocatoria{' '}
              {CICLO}, tu examen Cultural se actualiza al{' '}
              <span className="font-semibold text-foreground">
                temario oficial más reciente
              </span>{' '}
              — sin costo extra durante tu acceso.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PAQUETES
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-8 md:pb-12">
        <Revelar className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* EXPLORA */}
          <Paquete
            icono={<Compass className="h-6 w-6" />}
            color={COLOR.verde}
            badge="Ideal para conocer"
            nombre="Explora"
            subtitulo="Prueba la plataforma"
            precio="$0"
            nota="Gratis"
            cta="Empezar gratis"
            paquete={null}
            incluye={[
              '50 reactivos de muestra',
              '1 simulacro corto',
              'Parte de la Guía del Aspirante',
              'Conoce cómo funciona el sistema',
            ]}
          />

          {/* CULTURAL */}
          <Paquete
            icono={<GraduationCap className="h-6 w-6" />}
            color={COLOR[COLOR_DE_MODULO.cultural]}
            badge="Para quienes presentan solo lo académico"
            nombre="Preparación Cultural"
            subtitulo="Domina el examen académico"
            precio="$999"
            nota={MODELO_ACCESO}
            cta="Elegir Cultural"
            paquete="cultural"
            incluye={[
              '+5,000 preguntas reales clasificadas por tema',
              'Simulacros con cronómetro igual al examen',
              'Estrategia completa de estudio',
              'Repaso espaciado inteligente',
              'Se actualiza al temario oficial de la convocatoria vigente',
            ]}
          />

          {/* PSICOLÓGICA */}
          <Paquete
            icono={<Brain className="h-6 w-6" />}
            color={COLOR[COLOR_DE_MODULO.psicologico]}
            listón="Más popular"
            ctaFilled
            nombre="Preparación Psicológica"
            subtitulo="Domina las 3 fases del examen"
            precio="$1,999"
            nota={MODELO_ACCESO}
            cta="Elegir Psicológico"
            paquete="psicologico"
            incluye={[
              'Guías completas de las 3 fases',
              'Panel de diagnóstico inteligente',
              'Simuladores por fase con cronómetro',
              'Estrategias y consejos psicológicos',
              'Repaso espaciado inteligente',
              'Actualizaciones incluidas hasta cerrar la convocatoria',
            ]}
          />

          {/* COMPLETA */}
          <Paquete
            icono={<ShieldCheck className="h-6 w-6" />}
            color={COLOR.dorado}
            destacado
            ctaFilled
            listón="★ Mejor trato · Ahorras $500"
            nombre="Preparación Completa"
            subtitulo="Todo lo que necesitas, en un solo lugar"
            precio="$2,500"
            nota={MODELO_ACCESO}
            cta="Quiero la preparación completa"
            paquete="completa"
            incluye={[
              'TODO lo del paquete Cultural',
              'TODO lo del paquete Psicológico',
              'Guía del Aspirante completa',
              'Simulacros integrales (Cultural + Psicológico)',
              'Repaso espaciado en todo',
              'Acceso prioritario a nuevas actualizaciones',
              'Soporte por correo',
            ]}
          />
        </Revelar>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TIRA DE CONFIANZA
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <Revelar className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
          <Beneficio
            icono={<RefreshCw className="h-5 w-5" />}
            color={COLOR.verde}
            titulo="Actualizaciones incluidas"
            texto="Tu material se actualiza al temario oficial de la convocatoria vigente, sin costo."
          />
          <Beneficio
            icono={<ShieldCheck className="h-5 w-5" />}
            color={COLOR.azul}
            titulo="Compra 100% segura"
            texto="Tus datos están protegidos con cifrado seguro."
          />
          <Beneficio
            icono={<BadgeCheck className="h-5 w-5" />}
            color={COLOR.morado}
            titulo="Sin letras chicas"
            texto="Acceso claro y transparente durante todo tu plan."
          />
          <Beneficio
            icono={<Headphones className="h-5 w-5" />}
            color={COLOR.dorado}
            titulo="Soporte humano"
            texto="Te ayudamos cuando lo necesites."
          />
        </Revelar>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROCESO DE ADMISIÓN — línea del tiempo
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <Revelar className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-5 bg-accent" />
            Así es el proceso de admisión
          </div>
        </Revelar>
        <Revelar retraso={80} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Etapa
            icono={<Calendar className="h-5 w-5" />}
            color={COLOR.verde}
            periodo="Septiembre – Noviembre"
            titulo="No fuiste apto"
            texto="Empieza tu preparación desde hoy y llega con ventaja."
          />
          <Etapa
            icono={<Megaphone className="h-5 w-5" />}
            color={COLOR.dorado}
            periodo="Diciembre – Marzo"
            titulo="Convocatoria abierta"
            texto="Es tu momento para estudiar y dominar cada tema."
          />
          <Etapa
            icono={<ClipboardCheck className="h-5 w-5" />}
            color={COLOR.morado}
            periodo="Abril"
            titulo="Exámenes Cultural y Psicológico"
            texto="Pon en práctica todo lo que aprendiste."
          />
          <Etapa
            icono={<Target className="h-5 w-5" />}
            color={COLOR.rojo}
            periodo="Mayo"
            titulo="Resultados"
            texto="Si no fuiste apto, empieza hoy tu preparación para la siguiente convocatoria."
          />
        </Revelar>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PAGO
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:pb-24">
        <Revelar className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Pago seguro con Mercado Pago
            </span>{' '}
            · tarjeta, transferencia, OXXO y{' '}
            <span className="font-semibold text-foreground">meses sin intereses</span>.
          </p>
          {/* La frase que faltaba (22 ago 2026). Un aspirante no compró porque
              el botón lo mandaba a Mercado Pago y creyó que necesitaba cuenta
              ahí. No la necesita —se paga como invitado con tarjeta, está
              comprobado—, pero eso hay que DECIRLO donde duda. */}
          <p className="text-sm font-semibold text-foreground">
            No necesitas cuenta de Mercado Pago para comprar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {LOGOS_PAGO.map((l) => (
              <div
                key={l.nombre}
                className="flex h-11 items-center justify-center rounded-lg border border-border bg-white px-4 shadow-sm"
              >
                <Image
                  src={l.src}
                  alt={l.nombre}
                  width={l.w}
                  height={l.h}
                  className="h-6 w-auto"
                />
              </div>
            ))}
            <span className="text-xs text-muted-foreground">y más</span>
          </div>
        </Revelar>
      </section>

      <SiteFooter />
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════
   Sub-componentes
   ═══════════════════════════════════════════════════════════ */

/** El tono ya viene resuelto desde arriba; aquí sólo se pinta. */
type ColorPaquete = TonoPaquete

function Paquete({
  icono,
  color,
  badge,
  listón,
  nombre,
  subtitulo,
  precio,
  nota,
  cta,
  paquete,
  incluye,
  destacado = false,
  ctaFilled = false,
}: {
  icono: React.ReactNode
  color: ColorPaquete
  badge?: string
  listón?: string
  nombre: string
  subtitulo: string
  precio: string
  nota: string
  cta: string
  /** Clave del paquete de pago ('cultural'|'psicologico'|'completa'); null = gratis. */
  paquete: string | null
  incluye: string[]
  destacado?: boolean
  ctaFilled?: boolean
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-xl border bg-card p-6',
        destacado ? 'shadow-lg' : 'border-border',
      )}
      style={
        destacado
          ? { borderColor: color.c, boxShadow: `0 0 0 1px ${color.c}33` }
          : undefined
      }
    >
      {listón && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow"
          style={{ backgroundColor: color.c, color: color.on }}
        >
          {listón}
        </span>
      )}

      {/* Encabezado: icono + badge de segmento */}
      <div className="flex items-start justify-between gap-2">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: color.c, color: '#FFFFFF' }}
        >
          {icono}
        </div>
        {badge && (
          <span
            className="max-w-[9.5rem] rounded-md px-2 py-1 text-right text-[10px] font-bold uppercase leading-tight tracking-wide"
            style={{ backgroundColor: color.c + '14', color: color.c }}
          >
            {badge}
          </span>
        )}
      </div>

      <p className="mt-4 text-lg font-bold" style={{ color: color.c }}>
        {nombre}
      </p>
      <p className="text-sm text-muted-foreground">{subtitulo}</p>

      <div className="mt-4">
        <span
          className="text-4xl font-bold tracking-tight tabular-nums"
          style={{ color: color.c }}
        >
          {precio}
        </span>
      </div>
      <p className="mt-1 text-xs leading-snug text-muted-foreground">{nota}</p>

      <ul className="mt-4 flex flex-1 flex-col gap-2.5 border-t border-border pt-4">
        {incluye.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: color.c }}
            />
            <span dangerouslySetInnerHTML={{ __html: resaltarTodo(item) }} />
          </li>
        ))}
      </ul>

      {/* Botón real de compra: inicia Checkout Pro (o va a registro si es gratis). */}
      <BotonPaquete
        paquete={paquete}
        label={cta}
        color={color.c}
        onColor={color.on}
        filled={ctaFilled}
      />
    </div>
  )
}

// Resalta la palabra "TODO" en mayúsculas (como el mockup) sin depender de HTML del usuario.
function resaltarTodo(texto: string): string {
  const escapado = texto.replace(/[&<>]/g, (ch) =>
    ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : '&gt;',
  )
  return escapado.replace(
    /\bTODO\b/g,
    '<strong class="font-bold text-foreground">TODO</strong>',
  )
}

function Beneficio({
  icono,
  color,
  titulo,
  texto,
}: {
  icono: React.ReactNode
  color: ColorPaquete
  titulo: string
  texto: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: color.c + '1F', color: color.c }}
      >
        {icono}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{titulo}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {texto}
        </p>
      </div>
    </div>
  )
}

function Etapa({
  icono,
  color,
  periodo,
  titulo,
  texto,
}: {
  icono: React.ReactNode
  color: ColorPaquete
  periodo: string
  titulo: string
  texto: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
        style={{ backgroundColor: color.c, color: '#FFFFFF' }}
      >
        {icono}
      </div>
      <p
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: color.c }}
      >
        {periodo}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{titulo}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{texto}</p>
    </div>
  )
}
