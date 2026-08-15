'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { logoDePlantel } from '@/lib/planteles'
import { Clock, GraduationCap, Star, UserCircle } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Datos de los 11 planteles del Sistema Educativo Militar.
   Fuente: Convocatoria de Admisión UDEFA "2026" (DEFENSA).
   Regla de grado militar aplicada:
     • Ingeniería (EMI) y Medicina (EMM) egresan como Teniente.
     • El resto de planteles egresan como Subteniente,
       independiente del nivel académico (Licenciatura o Ingeniería).
   ═══════════════════════════════════════════════════════════ */

type Plantel = {
  nombre: string
  lema: string
  duracion: string
  edad: string
  nivel: string
  grado: string
  estudios: string[]
  /** Etiqueta contextual (opcional) — se muestra sobre el nombre.
   *  Se usa para agrupar visualmente las 3 escuelas del Colegio del Aire. */
  agrupacion?: string
}

const PLANTELES: Plantel[] = [
  {
    nombre: 'Heroico Colegio Militar',
    lema: 'Por el Honor de México',
    duracion: '4 años',
    edad: '18–20 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: [
      'Lic. Administración Militar',
      'Lic. Seguridad Pública (GN)',
    ],
  },
  {
    nombre: 'Escuela Militar de Ingeniería',
    lema: 'Crisol de la ciencia y el honor',
    duracion: '6 años',
    edad: '18–22 años',
    nivel: 'Ingeniería',
    grado: 'Teniente',
    estudios: [
      'Ing. Constructor Militar',
      'Ing. Industrial Militar',
      'Ing. en Computación e Informática',
      'Ing. en Comunicaciones y Electrónica',
    ],
  },
  {
    nombre: 'Escuela Militar de Medicina',
    lema: 'La salud como meta, el honor como guía',
    duracion: '6 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Teniente',
    estudios: ['Lic. Médico Cirujano Militar'],
  },
  {
    nombre: 'Escuela Militar de Odontología',
    lema: 'En nuestras manos la salud y por la patria la vida',
    duracion: '5 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: ['Lic. Cirujano Dentista Militar'],
  },
  {
    nombre: 'Escuela Militar de Enfermería',
    lema: 'Conocimiento, Humanismo, Disciplina',
    duracion: '4 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: ['Lic. Enfermería Militar'],
  },
  {
    nombre: 'Escuela Militar de Oficiales de Sanidad',
    lema: 'Estudio, Valor, Bienestar',
    duracion: '4 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: ['Lic. Atención Médica Prehospitalaria'],
  },
  {
    nombre: 'Escuela Militar de Transmisiones',
    lema: 'Por la ciencia y el progreso de México',
    duracion: '4 años',
    edad: '18–23 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: ['Lic. Tecnologías de la Información y Comunicaciones'],
  },
  {
    nombre: 'Escuela Militar de Materiales de Guerra',
    lema: 'Juramos forjar tu historia con honor',
    duracion: '4 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: ['Lic. Logística del Material de Guerra'],
  },
  {
    nombre: 'Escuela Militar de Aviación',
    lema: 'Honor, Valor, Lealtad',
    duracion: '4 años',
    edad: '18–20 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: [
      'Lic. Admón. Militar, Piloto Aviador',
      'Lic. Seguridad Pública, Piloto Aviador',
    ],
    agrupacion: 'Colegio del Aire',
  },
  {
    nombre: 'Escuela Militar de Mantenimiento y Abastecimiento',
    lema:
      'Forjador de hombres y mujeres que mantienen la operación de la Fuerza Aérea',
    duracion: '4–5 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: [
      'Lic. Aeronáutica Militar (Abastecimiento)',
      'Lic. Aeronáutica Militar (Armamento Aéreo)',
      'Lic. Ingeniería en Aeronáutica',
      'Lic. Ingeniería en Electrónica de Aviación',
    ],
    agrupacion: 'Colegio del Aire',
  },
  {
    nombre: 'Escuela Militar de Especialistas de Fuerza Aérea',
    lema: 'Honor, valor y lealtad',
    duracion: '4 años',
    edad: '18–22 años',
    nivel: 'Licenciatura',
    grado: 'Subteniente',
    estudios: [
      'Lic. Aeronáutica Militar, Controlador de Vuelo',
      'Lic. Meteorología Militar',
    ],
    agrupacion: 'Colegio del Aire',
  },
]

/* ═══════════════════════════════════════════════════════════
   Componente principal
   ═══════════════════════════════════════════════════════════ */

export function CarruselPlanteles() {
  const [api, setApi] = useState<CarouselApi>()
  const [slideActual, setSlideActual] = useState(0)

  // Autoplay: 5s por slide. `stopOnInteraction:false` = tras usar flechas/dots
  // el carrusel sigue avanzando solo. Manejamos hover a mano (con onMouseEnter/
  // Leave más abajo) para tener control explícito de la pausa.
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  )

  useEffect(() => {
    if (!api) return
    setSlideActual(api.selectedScrollSnap())
    const onSelect = () => setSlideActual(api.selectedScrollSnap())
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ loop: true, watchDrag: true, align: 'center' }}
        className="w-full"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {PLANTELES.map((plantel, idx) => (
            <CarouselItem key={plantel.nombre}>
              <PlantelSlide plantel={plantel} indice={idx + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex -left-12 border-border/40 bg-card/20 text-primary-foreground hover:bg-card/40 hover:text-primary-foreground" />
        <CarouselNext className="hidden md:flex -right-12 border-border/40 bg-card/20 text-primary-foreground hover:bg-card/40 hover:text-primary-foreground" />
      </Carousel>

      {/* Indicadores de progreso */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
        {PLANTELES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === slideActual
                ? 'w-6 bg-accent'
                : 'w-1.5 bg-border/60 hover:bg-muted-foreground/60',
            )}
            aria-label={`Ir al plantel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Slide individual — card grande con logo, nombre, lema,
   datos clave y lista de estudios.
   ═══════════════════════════════════════════════════════════ */

function PlantelSlide({
  plantel,
  indice,
}: {
  plantel: Plantel
  /** Sólo para decidir qué escudos se cargan con prioridad (los 2 primeros). */
  indice: number
}) {
  const logoSrc = logoDePlantel(plantel.nombre)

  return (
    <article className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/10 p-6 shadow-lg backdrop-blur md:p-8">
      {/* Halo decorativo */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
        {/* Logo grande + índice */}
        <div className="flex flex-col items-center gap-3 md:w-1/3">
          <div className="relative">
            {/* Halo dorado que resalta el escudo sobre el fondo dark de la sección */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-accent/25 blur-xl"
            />
            {logoSrc ? (
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full ring-1 ring-accent/30 md:h-40 md:w-40">
                <Image
                  src={logoSrc}
                  alt={`Escudo de ${plantel.nombre}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  // El carrusel autoplayea; precargar evita el flash-vacío al cambiar de slide.
                  priority={indice <= 2}
                  loading={indice > 2 ? 'eager' : undefined}
                />
              </div>
            ) : (
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-military/25 ring-1 ring-accent/30 md:h-40 md:w-40">
                <GraduationCap className="h-14 w-14 text-accent" />
              </div>
            )}
          </div>

        </div>

        {/* Info textual */}
        <div className="flex flex-1 flex-col">
          {plantel.agrupacion && (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-military">
              {plantel.agrupacion}
            </p>
          )}

          <h3 className="text-xl font-semibold leading-tight text-primary-foreground md:text-2xl">
            {plantel.nombre}
          </h3>
          <p className="mt-1 text-sm italic text-muted-foreground">
            &ldquo;{plantel.lema}&rdquo;
          </p>

          {/* Grid 2x2 con los 4 datos clave */}
          <div className="my-5 grid grid-cols-2 gap-3 rounded-lg border border-border/20 bg-card/10 p-3 text-xs">
            <PlantelDato
              icon={<Clock className="h-3 w-3" />}
              label="Duración"
              value={plantel.duracion}
            />
            <PlantelDato
              icon={<UserCircle className="h-3 w-3" />}
              label="Edad"
              value={plantel.edad}
            />
            <PlantelDato
              icon={<GraduationCap className="h-3 w-3" />}
              label="Nivel"
              value={plantel.nivel}
            />
            <PlantelDato
              icon={<Star className="h-3 w-3" />}
              label="Grado al egresar"
              value={plantel.grado}
            />
          </div>

          {/* Lista de estudios */}
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Estudios que imparte
            </p>
            <div className="flex flex-wrap gap-1.5">
              {plantel.estudios.map((estudio) => (
                <span
                  key={estudio}
                  className="rounded-md border border-border/30 bg-card/20 px-2 py-1 text-[11px] text-primary-foreground"
                >
                  {estudio}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function PlantelDato({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div>
      <p className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-0.5 text-xs font-semibold text-primary-foreground">
        {value}
      </p>
    </div>
  )
}
