'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { colorDeExamen, HOJA_DE_PLATA_CLARA } from '@/lib/colores-paquete'
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Scale,
  Sparkles,
  UserCircle,
  XCircle,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Datos de los slides
   Enunciados y explicaciones extraídos de instrucciones-bloques.ts
   y ampliados con nota pedagógica pensada para el visitante
   que aún no se registró.
   ═══════════════════════════════════════════════════════════ */

/**
 * El color de la muestra. Los cinco reactivos son del examen PSICOLÓGICO —tres
 * del psicométrico, uno de personalidad, uno del axiológico—, así que sale de
 * ahí y no de un hex escrito a mano: si el módulo cambia de color, la muestra
 * lo sigue. Si algún día se agrega un reactivo cultural, este acento tendría
 * que salir de cada slide en vez de ser uno solo para todos.
 *
 * OJO: el acento vive SÓLO en la etiqueta de la fase y su chip. Nunca en el
 * marco ni en las opciones — ahí el olivo significa "correcta" y el rojo
 * "incorrecta", y son lo único que esta sección tiene que dejar claro.
 */
const ACENTO = colorDeExamen('psicometrico', 'claro')

type SlidePsicometrico = {
  tipo: 'psicometrico'
  fase: string
  bloque: string
  icono: 'brain'
  enunciado: string
  opciones: string[]
  respuestaCorrecta: string
  explicacion: string
}

type SlideAutoevaluacion = {
  tipo: 'autoevaluacion'
  fase: string
  bloque: string
  icono: 'user' | 'scale'
  enunciado: string
  opciones: string[]
  explicacion: string
}

type SlideDatos = SlidePsicometrico | SlideAutoevaluacion

const SLIDES: SlideDatos[] = [
  {
    tipo: 'psicometrico',
    fase: 'Fase 01 · Psicométrico',
    bloque: 'Bloque 1: Analogías Verbales',
    icono: 'brain',
    enunciado: 'Causa es a Efecto como Problema es a:',
    opciones: ['Resultado', 'Solución', 'Conflicto', 'Proceso'],
    respuestaCorrecta: 'Solución',
    explicacion:
      'La causa genera un efecto. De manera equivalente, un problema conduce a una solución — la relación es origen → resolución. Los distractores "Resultado" y "Conflicto" son términos asociados con "Problema" pero no cumplen esta relación específica. En el examen real tienes ~24 segundos por reactivo, por eso el método rápido es identificar la relación primero y aplicarla después.',
  },
  {
    tipo: 'psicometrico',
    fase: 'Fase 01 · Psicométrico',
    bloque: 'Bloque 2: Sinónimos y Antónimos',
    icono: 'brain',
    enunciado: '"Ambiguo" (ANTÓNIMO)',
    opciones: ['Confuso', 'Claro', 'Indefinido', 'Doble'],
    respuestaCorrecta: 'Claro',
    explicacion:
      '"Ambiguo" implica falta de claridad o múltiples interpretaciones. Su opuesto directo es "claro", que indica precisión y un único significado. Los distractores "Confuso" e "Indefinido" son sinónimos de ambiguo — están puestos para atraparte si lees rápido y respondes por asociación en lugar de por la relación pedida (antónimo).',
  },
  {
    tipo: 'psicometrico',
    fase: 'Fase 01 · Psicométrico',
    bloque: 'Bloque 3: Razonamiento Lógico-Matemático',
    icono: 'brain',
    enunciado: '2, 3, 6, 7, 14, ?',
    opciones: ['20', '28', '30', '32'],
    respuestaCorrecta: '28',
    explicacion:
      'La secuencia alterna dos operaciones: +1, ×2, +1, ×2… Entonces 2→3 (+1), 3→6 (×2), 6→7 (+1), 7→14 (×2), y por lo tanto 14→28 (×2). Los distractores "30" y "32" son cercanos y aparentan lógica; están puestos para atrapar al que confía en el primer patrón que ve sin verificar con dos pares.',
  },
  {
    tipo: 'autoevaluacion',
    fase: 'Fase 02 · Personalidad',
    bloque: 'Reactivo tipo Sí/No',
    icono: 'user',
    enunciado: 'Yo me mantengo calmado bajo presión.',
    opciones: ['Sí', 'No'],
    explicacion:
      'Aquí no hay respuesta correcta — cualquiera es válida si refleja tu realidad. Lo que se evalúa es coherencia con el resto del examen. Si dijiste "Sí" ahora pero más adelante también respondieras "Sí" a "Suelo perder los estribos cuando algo me frustra", el sistema marcaría contradicción interna (ambas afirmaciones evalúan el mismo eje: control emocional). La estrategia no es "responder lo que suena bien" — es responder desde autoconocimiento y sostener criterio a lo largo de los 256 reactivos.',
  },
  {
    tipo: 'autoevaluacion',
    fase: 'Fase 03 · Axiológico',
    bloque: 'Perfil indirecto (Likert 5)',
    icono: 'scale',
    enunciado:
      'Esta persona prioriza el bien del equipo aunque signifique más trabajo personal.',
    opciones: [
      'Me parezco totalmente',
      'Me parezco',
      'Me parezco poco',
      'No me parezco',
      'No me parezco nada',
    ],
    explicacion:
      'El axiológico no pregunta sobre ti directamente — presenta perfiles ajenos y evalúa cuánto te identificas. Este perfil apunta al valor de "espíritu de cuerpo" (uno de los 8 valores axiológicos militares). Aquí tampoco hay respuesta correcta — pero tu identificación se cruza con lo que declaraste en Personalidad. Si aquí dices "Me parezco totalmente" pero antes dijiste que evitas cargar trabajo de otros, aparece brecha entre autoconcepto declarado y valores implícitos. Ese cruce es uno de los filtros más discriminantes del sistema.',
  },
]

/* ═══════════════════════════════════════════════════════════
   Componente principal
   ═══════════════════════════════════════════════════════════ */

export function CarruselMuestra() {
  // Respuestas del usuario por índice de slide (undefined = sin responder)
  const [respuestas, setRespuestas] = useState<Record<number, string>>({})
  const [api, setApi] = useState<CarouselApi>()
  const [slideActual, setSlideActual] = useState(0)

  // Track slide actual para desactivar CTAs de "siguiente" cuando ya está al final
  useEffect(() => {
    if (!api) return
    setSlideActual(api.selectedScrollSnap())
    const onSelect = () => setSlideActual(api.selectedScrollSnap())
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const registrarRespuesta = useCallback((idx: number, opcion: string) => {
    setRespuestas((prev) => ({ ...prev, [idx]: opcion }))
  }, [])

  const irAlSiguiente = useCallback(() => {
    api?.scrollNext()
  }, [api])

  // Micro-diagnóstico del último slide: cuántos psicométricos acertó
  const aciertosPsicometricos = SLIDES.reduce((total, slide, idx) => {
    if (slide.tipo !== 'psicometrico') return total
    return respuestas[idx] === slide.respuestaCorrecta ? total + 1 : total
  }, 0)
  const psicometricosRespondidos = SLIDES.filter(
    (s, i) => s.tipo === 'psicometrico' && respuestas[i] !== undefined,
  ).length
  const autoevaluacionRespondida = SLIDES.filter(
    (s, i) => s.tipo === 'autoevaluacion' && respuestas[i] !== undefined,
  ).length

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Carousel
        setApi={setApi}
        opts={{ loop: false, watchDrag: true, align: 'center' }}
        className="w-full"
      >
        <CarouselContent>
          {SLIDES.map((slide, idx) => (
            <CarouselItem key={idx}>
              {slide.tipo === 'psicometrico' ? (
                <SlidePsicometricoUI
                  slide={slide}
                  respuesta={respuestas[idx]}
                  onResponder={(opcion) => registrarRespuesta(idx, opcion)}
                  onSiguiente={irAlSiguiente}
                  esUltimoInteractivo={idx === SLIDES.length - 1}
                />
              ) : (
                <SlideAutoevaluacionUI
                  slide={slide}
                  respuesta={respuestas[idx]}
                  onResponder={(opcion) => registrarRespuesta(idx, opcion)}
                  onSiguiente={irAlSiguiente}
                  esUltimoInteractivo={idx === SLIDES.length - 1}
                />
              )}
            </CarouselItem>
          ))}

          {/* Slide final — micro-diagnóstico y CTA */}
          <CarouselItem>
            <SlideDiagnosticoFinal
              aciertosPsicometricos={aciertosPsicometricos}
              psicometricosRespondidos={psicometricosRespondidos}
              autoevaluacionRespondida={autoevaluacionRespondida}
              respPersonalidad={respuestas[3]}
              respAxiologico={respuestas[4]}
            />
          </CarouselItem>
        </CarouselContent>

        {/* Flechas de navegación — solo visibles en desktop */}
        <CarouselPrevious className="hidden md:flex -left-12 border-border/40 bg-card/50 text-foreground hover:bg-card" />
        <CarouselNext className="hidden md:flex -right-12 border-border/40 bg-card/50 text-foreground hover:bg-card" />
      </Carousel>

      {/* Indicador de progreso — puntitos */}
      <div className="mt-6 flex items-center justify-center gap-1.5">
        {[...Array(SLIDES.length + 1)].map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === slideActual
                ? 'w-6 bg-accent'
                : 'w-1.5 bg-border hover:bg-muted-foreground/40',
            )}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Slide para reactivos calificables (psicométrico)
   Los 4 botones se muestran verticalmente. Al responder:
   - Verde en la opción correcta.
   - Rojo en la elegida por el usuario si fue incorrecta.
   - Explicación pedagógica aparece debajo con CTA "Siguiente".
   ═══════════════════════════════════════════════════════════ */

function SlidePsicometricoUI({
  slide,
  respuesta,
  onResponder,
  onSiguiente,
  esUltimoInteractivo,
}: {
  slide: SlidePsicometrico
  respuesta: string | undefined
  onResponder: (opcion: string) => void
  onSiguiente: () => void
  esUltimoInteractivo: boolean
}) {
  const yaRespondio = respuesta !== undefined
  const IconoFase = slide.icono === 'brain' ? Brain : UserCircle

  return (
    <article
      className="rounded-2xl border p-6 md:p-8"
      style={{
        backgroundImage: HOJA_DE_PLATA_CLARA.fondo,
        borderColor: HOJA_DE_PLATA_CLARA.borde,
        boxShadow: HOJA_DE_PLATA_CLARA.sombra,
      }}
    >
      {/* Cabecera con fase */}
      <div className="mb-4 flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg border bg-white/80"
          style={{ borderColor: `${ACENTO.c}59`, color: ACENTO.c }}
        >
          <IconoFase className="h-4 w-4" />
        </div>
        <div>
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: ACENTO.c }}
          >
            {slide.fase}
          </p>
          <p className="text-xs text-muted-foreground">{slide.bloque}</p>
        </div>
      </div>

      {/* Enunciado */}
      <p className="mb-5 text-lg font-semibold leading-snug text-foreground md:text-xl">
        {slide.enunciado}
      </p>

      {/* Opciones */}
      <div className="flex flex-col gap-2">
        {slide.opciones.map((opcion, i) => {
          const letra = String.fromCharCode(65 + i)
          const esCorrecta = opcion === slide.respuestaCorrecta
          const esElegida = respuesta === opcion
          const mostrarCorrecta = yaRespondio && esCorrecta
          const mostrarIncorrecta = yaRespondio && esElegida && !esCorrecta

          return (
            <button
              key={opcion}
              type="button"
              disabled={yaRespondio}
              onClick={() => onResponder(opcion)}
              className={cn(
                'flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                /* Blancas, no color crema: sobre la hoja de plata el crema se
                   confunde con el fondo y dejan de leerse como botones. El
                   hover se queda en latón a propósito — el olivo y el rojo
                   están reservados para la corrección. */
                !yaRespondio && 'border-border bg-white hover:border-accent hover:bg-accent/5 cursor-pointer',
                mostrarCorrecta && 'border-military bg-military/10 font-semibold text-foreground',
                mostrarIncorrecta && 'border-destructive bg-destructive/10 text-foreground',
                yaRespondio && !mostrarCorrecta && !mostrarIncorrecta && 'border-border bg-white/50 text-muted-foreground',
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold',
                  mostrarCorrecta && 'bg-military text-military-foreground',
                  mostrarIncorrecta && 'bg-destructive text-primary-foreground',
                  !mostrarCorrecta && !mostrarIncorrecta && 'border border-border bg-muted text-foreground',
                )}
              >
                {letra}
              </span>
              <span className="flex-1">{opcion}</span>
              {mostrarCorrecta && <CheckCircle2 className="h-4 w-4 text-military" />}
              {mostrarIncorrecta && <XCircle className="h-4 w-4 text-destructive" />}
            </button>
          )
        })}
      </div>

      {/* Explicación revelada tras responder */}
      {yaRespondio && (
        <FeedbackExplicacion
          esCorrecta={respuesta === slide.respuestaCorrecta}
          explicacion={slide.explicacion}
          onSiguiente={onSiguiente}
          esUltimoInteractivo={esUltimoInteractivo}
        />
      )}
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Slide para autoevaluación (personalidad y axiológico)
   Sin respuesta correcta — cualquiera se marca con estilo neutro.
   Explicación aparece igual con marco pedagógico distinto.
   ═══════════════════════════════════════════════════════════ */

function SlideAutoevaluacionUI({
  slide,
  respuesta,
  onResponder,
  onSiguiente,
  esUltimoInteractivo,
}: {
  slide: SlideAutoevaluacion
  respuesta: string | undefined
  onResponder: (opcion: string) => void
  onSiguiente: () => void
  esUltimoInteractivo: boolean
}) {
  const yaRespondio = respuesta !== undefined
  const IconoFase = slide.icono === 'user' ? UserCircle : Scale
  // Personalidad usa 2 botones grandes; axiológico usa 5 opciones verticales
  const esBinario = slide.opciones.length === 2

  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      {/* Cabecera */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
          <IconoFase className="h-4 w-4 text-accent" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-military">
            {slide.fase}
          </p>
          <p className="text-xs text-muted-foreground">{slide.bloque}</p>
        </div>
      </div>

      {/* Enunciado */}
      <p className="mb-5 text-lg font-medium leading-snug text-foreground md:text-xl">
        {slide.enunciado}
      </p>

      {/* Opciones — binario (Sí/No) o Likert (5) */}
      <div className={cn('flex gap-2', esBinario ? 'flex-row' : 'flex-col')}>
        {slide.opciones.map((opcion) => {
          const esElegida = respuesta === opcion
          return (
            <button
              key={opcion}
              type="button"
              disabled={yaRespondio}
              onClick={() => onResponder(opcion)}
              className={cn(
                'rounded-lg border p-3 text-sm transition-colors',
                esBinario && 'flex-1 py-4 text-base font-semibold',
                !yaRespondio && 'border-border bg-background hover:border-accent hover:bg-accent/5 cursor-pointer',
                yaRespondio && esElegida && 'border-accent bg-accent/10 font-semibold text-foreground',
                yaRespondio && !esElegida && 'border-border bg-background/50 text-muted-foreground',
              )}
            >
              {opcion}
            </button>
          )
        })}
      </div>

      {/* Explicación revelada tras responder */}
      {yaRespondio && (
        <FeedbackExplicacion
          esCorrecta={null}
          explicacion={slide.explicacion}
          onSiguiente={onSiguiente}
          esUltimoInteractivo={esUltimoInteractivo}
        />
      )}
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════
   Bloque de feedback compartido — muestra la explicación y el
   CTA para pasar al siguiente slide.
   ═══════════════════════════════════════════════════════════ */

function FeedbackExplicacion({
  esCorrecta,
  explicacion,
  onSiguiente,
  esUltimoInteractivo,
}: {
  esCorrecta: boolean | null
  explicacion: string
  onSiguiente: () => void
  esUltimoInteractivo: boolean
}) {
  return (
    <div className="mt-5 space-y-3">
      {/* Etiqueta de resultado (solo para psicométrico) */}
      {esCorrecta !== null && (
        <div
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest',
            esCorrecta ? 'bg-military/10 text-military' : 'bg-destructive/10 text-destructive',
          )}
        >
          {esCorrecta ? (
            <>
              <CheckCircle2 className="h-3 w-3" />
              Acertaste
            </>
          ) : (
            <>
              <XCircle className="h-3 w-3" />
              Incorrecto
            </>
          )}
        </div>
      )}
      {esCorrecta === null && (
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
          <Sparkles className="h-3 w-3" />
          Sin respuesta correcta
        </div>
      )}

      {/* Explicación pedagógica */}
      <div className="rounded-lg border-l-2 border-l-accent bg-accent/5 p-4">
        <p className="text-sm leading-relaxed text-foreground">{explicacion}</p>
      </div>

      {/* CTA para pasar al siguiente slide */}
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={onSiguiente}>
          {esUltimoInteractivo ? 'Ver mi diagnóstico' : 'Siguiente reactivo'}
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Perfil emergente — genera texto personalizado según qué
   respondió el usuario. No es diagnóstico real, es narrativa
   pedagógica basada en heurísticas simples para dar sensación
   de resultado hecho a medida.
   ═══════════════════════════════════════════════════════════ */

function generarPerfilEmergente({
  aciertosPsi,
  respondidosPsi,
  respPersonalidad,
  respAxiologico,
}: {
  aciertosPsi: number
  respondidosPsi: number
  respPersonalidad: string | undefined
  respAxiologico: string | undefined
}): { titulo: string; subtitulo: string } {
  // Muestra vacía
  if (respondidosPsi === 0 && !respPersonalidad && !respAxiologico) {
    return {
      titulo: 'Muestra sin responder',
      subtitulo: 'Vuelve al primer slide y prueba — es la mejor forma de descubrir cómo funciona el sistema.',
    }
  }

  // Componentes del perfil
  const proporcionAciertos = respondidosPsi > 0 ? aciertosPsi / respondidosPsi : null
  const nivelCognitivo =
    proporcionAciertos === null
      ? 'sin-datos'
      : proporcionAciertos >= 0.66
      ? 'agudo'
      : proporcionAciertos >= 0.33
      ? 'en-desarrollo'
      : 'inicial'

  const perfilEmocional = !respPersonalidad
    ? 'sin-datos'
    : respPersonalidad === 'Sí'
    ? 'estable'
    : 'reactivo'

  const alineacionColectiva = !respAxiologico
    ? 'sin-datos'
    : ['Me parezco totalmente', 'Me parezco'].includes(respAxiologico)
    ? 'alineado'
    : ['Me parezco poco'].includes(respAxiologico)
    ? 'intermedio'
    : 'individualista'

  // Genera título y subtítulo combinando los tres ejes
  const componentesTitulo: string[] = []
  const componentesSubtitulo: string[] = []

  if (nivelCognitivo === 'agudo') {
    componentesTitulo.push('Estilo analítico')
    componentesSubtitulo.push('detectas patrones con precisión bajo presión')
  } else if (nivelCognitivo === 'en-desarrollo') {
    componentesTitulo.push('Perfil reflexivo')
    componentesSubtitulo.push('con base cognitiva sólida y margen para pulir método')
  } else if (nivelCognitivo === 'inicial') {
    componentesTitulo.push('Perfil auténtico')
    componentesSubtitulo.push('con áreas visibles para trabajar razonamiento bajo presión')
  }

  if (perfilEmocional === 'estable') {
    componentesTitulo.push('estabilidad emocional declarada')
    componentesSubtitulo.push('proyectas autocontrol bajo situaciones exigentes')
  } else if (perfilEmocional === 'reactivo') {
    componentesTitulo.push('autoconocimiento honesto')
    componentesSubtitulo.push('reconoces reactividad emocional — señal de madurez')
  }

  if (alineacionColectiva === 'alineado') {
    componentesTitulo.push('orientación al colectivo')
    componentesSubtitulo.push('valoras el bien del equipo por encima del interés personal')
  } else if (alineacionColectiva === 'intermedio') {
    componentesTitulo.push('balance individuo-colectivo')
    componentesSubtitulo.push('mantienes autonomía pero valoras la cooperación')
  } else if (alineacionColectiva === 'individualista') {
    componentesTitulo.push('inclinación individualista')
    componentesSubtitulo.push('priorizas tu criterio propio ante presiones grupales')
  }

  if (componentesTitulo.length === 0) {
    return {
      titulo: 'Muestra parcial',
      subtitulo: 'Responde los 5 reactivos para revelar tu perfil emergente completo.',
    }
  }

  return {
    titulo: `Perfil detectado: ${componentesTitulo.join(' + ')}`,
    subtitulo: componentesSubtitulo.join('; ') + '.',
  }
}

/* ═══════════════════════════════════════════════════════════
   Componente NúmeroAnimado — count-up de 0 al valor final
   Usado en el StatCard para animar los aciertos.
   ═══════════════════════════════════════════════════════════ */

function NumeroAnimado({ valor, duracion = 1.2 }: { valor: number; duracion?: number }) {
  const contador = useMotionValue(0)
  const numeroRedondeado = useTransform(contador, (v) => Math.round(v))

  useEffect(() => {
    const control = animate(contador, valor, {
      duration: duracion,
      ease: 'easeOut',
    })
    return control.stop
  }, [contador, valor, duracion])

  return <motion.span>{numeroRedondeado}</motion.span>
}

/* ═══════════════════════════════════════════════════════════
   Componente DonutRadial — anillo SVG que se llena
   progresivamente al aparecer. Muestra % en el centro.
   ═══════════════════════════════════════════════════════════ */

function DonutRadial({
  porcentaje,
  label,
  sub,
}: {
  porcentaje: number
  label: string
  sub: string
}) {
  const radio = 70
  const circunferencia = 2 * Math.PI * radio
  // Ratio de "vacío" del stroke — 0 = lleno, circunferencia = vacío
  const dashOffset = circunferencia - (porcentaje / 100) * circunferencia

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative h-44 w-44 md:h-52 md:w-52">
        <svg
          viewBox="0 0 160 160"
          className="h-full w-full -rotate-90"
          aria-label={`${porcentaje} por ciento en ${label}`}
        >
          {/* Anillo de fondo (opaco) */}
          <circle
            cx="80"
            cy="80"
            r={radio}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-border/30"
          />
          {/* Anillo de progreso (latón) — animado */}
          <motion.circle
            cx="80"
            cy="80"
            r={radio}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            className="text-accent"
            strokeDasharray={circunferencia}
            initial={{ strokeDashoffset: circunferencia }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />
        </svg>

        {/* Número centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-5xl font-semibold tracking-tight text-primary-foreground md:text-6xl">
            <NumeroAnimado valor={porcentaje} duracion={1.5} />
            <span className="text-2xl text-muted-foreground md:text-3xl">%</span>
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-accent">
            {label}
          </p>
        </div>
      </div>
      {sub && (
        <p className="mt-3 max-w-[220px] text-center text-xs text-muted-foreground">
          {sub}
        </p>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Slide final — micro-diagnóstico + CTA para registrarse
   Combina: donut radial (métrica dominante), perfil emergente
   (narrativa personalizada), stats con count-up, todo animado.
   ═══════════════════════════════════════════════════════════ */

function SlideDiagnosticoFinal({
  aciertosPsicometricos,
  psicometricosRespondidos,
  autoevaluacionRespondida,
  respPersonalidad,
  respAxiologico,
}: {
  aciertosPsicometricos: number
  psicometricosRespondidos: number
  autoevaluacionRespondida: number
  respPersonalidad: string | undefined
  respAxiologico: string | undefined
}) {
  const totalRespondidos = psicometricosRespondidos + autoevaluacionRespondida
  const porcentajeAciertos =
    psicometricosRespondidos > 0
      ? Math.round((aciertosPsicometricos / psicometricosRespondidos) * 100)
      : 0

  const perfil = generarPerfilEmergente({
    aciertosPsi: aciertosPsicometricos,
    respondidosPsi: psicometricosRespondidos,
    respPersonalidad,
    respAxiologico,
  })

  return (
    <article className="relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg md:p-10">
      {/* Halos decorativos */}
      <div className="pointer-events-none absolute -top-16 -right-12 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-military/20 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Badge de "Perfil emergente" */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent"
        >
          <Sparkles className="h-3 w-3" />
          Micro-diagnóstico de tu muestra
        </motion.div>

        {/* Perfil emergente en texto grande — el "wow" narrativo */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-1 text-center text-xl font-semibold tracking-tight md:text-2xl"
        >
          {perfil.titulo}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 max-w-lg text-center text-sm text-muted-foreground md:text-base"
        >
          {perfil.subtitulo}
        </motion.p>

        {/* Donut radial gigante — elemento visual dominante */}
        {totalRespondidos > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-6"
          >
            <DonutRadial
              porcentaje={porcentajeAciertos}
              label="Precisión analítica"
              sub={
                psicometricosRespondidos > 0
                  ? `${aciertosPsicometricos} de ${psicometricosRespondidos} psicométricos correctos`
                  : ''
              }
            />
          </motion.div>
        )}

        {/* Stats laterales de las autoevaluaciones */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mb-6 grid grid-cols-2 gap-4 md:gap-6"
        >
          <StatMini
            icono={<UserCircle className="h-4 w-4 text-accent" />}
            label="Personalidad"
            valor={respPersonalidad ?? '—'}
            respondio={!!respPersonalidad}
          />
          <StatMini
            icono={<Scale className="h-4 w-4 text-accent" />}
            label="Axiológico"
            valor={respAxiologico ?? '—'}
            respondio={!!respAxiologico}
          />
        </motion.div>

        {/* Contexto de escala + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="w-full space-y-4"
        >
          <div className="rounded-lg border border-border/30 bg-card/10 p-4 backdrop-blur">
            <p className="text-center text-xs leading-relaxed text-muted-foreground md:text-sm">
              <span className="font-semibold text-primary-foreground">
                Esto fue una muestra de 5 reactivos.
              </span>{' '}
              En el examen real presentas <strong className="text-accent">395 reactivos</strong>{' '}
              que se cruzan entre sí para construir tu perfil completo.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/muestra"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Prueba la muestra completa gratis
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="#fases"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'border-border/40 bg-transparent text-primary-foreground hover:bg-card/10 hover:text-primary-foreground',
              )}
            >
              Ver más sobre el sistema
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  )
}

/* Sub-componente compacto para mostrar la respuesta elegida en
   personalidad y axiológico dentro del slide final. */
function StatMini({
  icono,
  label,
  valor,
  respondio,
}: {
  icono: React.ReactNode
  label: string
  valor: string
  respondio: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-lg border p-3 backdrop-blur transition-colors md:p-4',
        respondio
          ? 'border-accent/30 bg-accent/5'
          : 'border-border/20 bg-card/5',
      )}
    >
      <div className="mb-1 flex items-center gap-1.5">
        {icono}
        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
          {label}
        </p>
      </div>
      <p
        className={cn(
          'text-sm font-semibold leading-tight md:text-base',
          respondio ? 'text-primary-foreground' : 'text-muted-foreground italic',
        )}
      >
        {respondio ? valor : 'Sin responder'}
      </p>
    </div>
  )
}
