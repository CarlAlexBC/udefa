import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Scale,
  Shield,
  Sparkles,
  Star,
  UserCircle,
  Users,
} from "lucide-react";
import { Revelar } from "@/components/landing/Revelar";
import { CarruselMuestra } from "@/components/landing/CarruselMuestra";
import { CarruselPlanteles } from "@/components/landing/CarruselPlanteles";
import { LEGAL } from "@/lib/legal";
import { SiteFooter } from "@/components/legal/SiteFooter";
import { acabadoClaroDeModulo, HOJA_DE_PLATA_CLARA } from "@/lib/colores-paquete";

export default function Home() {
  return (
    <main className="flex-1">
      {/*
        Red de seguridad de la aparición al hacer scroll (components/landing/Revelar):
        ese componente empieza con el contenido invisible y lo revela desde
        JavaScript. Sin JavaScript se quedaría en blanco PARA SIEMPRE — y ésta es
        la portada, lo primero que ve quien llega desde TikTok. Esto lo deja
        visible de una vez en ese caso.
      */}
      <noscript>
        <style>{`[data-revelar='oculto']{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      {/* ═══════════════════════════════════════════════════════════
          HERO — sección dark con nav + headline + logo + trust indicators
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-military/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <nav className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border/40 bg-card/10">
                <Image
                  src="/monote-logo.jpeg"
                  alt="El Monote te Guía"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-semibold">El Monote te Guía</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/precios"
                className="hidden px-3 py-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground sm:inline-flex"
              >
                Paquetes
              </Link>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "border-border/40 bg-transparent text-primary-foreground hover:bg-card/10 hover:text-primary-foreground"
                )}
              >
                Iniciar sesión
              </Link>
            </div>
          </nav>

          <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:py-24">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-military/40 bg-military/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-military">
                <Star className="h-3 w-3 fill-military" />
                Admisión UDEFA 2026
              </div>

              <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-5xl">
                El verdadero filtro no es <span className="text-accent">lo físico</span> ni <span className="text-accent">lo académico</span>.
              </h1>

              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
                Es la evaluación psicológica. Simuladores del examen creados por ex-cadetes y psicólogos militares. Formación mental completa.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <Link
                  href="/precios"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-accent text-accent-foreground hover:bg-accent/90"
                  )}
                >
                  Comenzar ahora
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="#fases"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-border/40 bg-transparent text-primary-foreground hover:bg-card/10 hover:text-primary-foreground"
                  )}
                >
                  Ver contenido
                </Link>
              </div>

            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Halo decorativo detrás del logo */}
                <div className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-accent/10 blur-2xl" />
                <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-4 border-accent/30 bg-card/10 shadow-2xl md:h-80 md:w-80">
                  <Image
                    src="/monote-logo.jpeg"
                    alt="El Monote te Guía"
                    width={320}
                    height={320}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transición dark → light */}
      <div className="h-10 bg-gradient-to-b from-primary to-background" />

      {/* ═══════════════════════════════════════════════════════════
          FASES — sección light con 3 cards de las fases del examen
          ═══════════════════════════════════════════════════════════ */}
      <section id="fases" className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Revelar className="mb-14 text-center md:mb-16">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Cómo funciona el sistema
              <span className="h-px w-5 bg-accent" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Cuatro fases. Un solo perfil.</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              El sistema no te evalúa por partes. Combina las cuatro fases para construir un solo perfil coherente del aspirante.
            </p>
          </Revelar>

          {/* Orden: primero el cultural, después las tres fases psicológicas
              (decisión de Carlo — es el orden del proceso de admisión). */}
          <Revelar retraso={80} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FaseCard
              numero="01"
              titulo="Cultural"
              descripcion="Conocimientos generales de nivel bachillerato — 100 preguntas según la Convocatoria UDEFA 2026."
              reactivos="100 preguntas"
              duracion="120 min"
              icono={<BookOpen className="h-5 w-5" />}
              modulo="cultural"
            />
            <FaseCard
              numero="02"
              titulo="Psicométrico"
              descripcion="Analogías, sinónimos, razonamiento lógico y abstracto en 4 bloques bajo presión de tiempo."
              reactivos="100 reactivos"
              duracion="40 min"
              icono={<Brain className="h-5 w-5" />}
              modulo="psicologico"
            />
            <FaseCard
              numero="03"
              titulo="Personalidad"
              descripcion="Mide rasgos centrales de tu personalidad. Lo que cuenta es la coherencia de tu perfil a lo largo del examen."
              reactivos="256 reactivos"
              duracion="45 min"
              icono={<UserCircle className="h-5 w-5" />}
              modulo="psicologico"
            />
            <FaseCard
              numero="04"
              titulo="Axiológico"
              descripcion="Patriotismo, lealtad, honor y disciplina. Valida si tu perfil de valores encaja."
              reactivos="39 reactivos"
              duracion="10 min"
              icono={<Scale className="h-5 w-5" />}
              modulo="psicologico"
            />
          </Revelar>

          {/* Leyenda: explica en llano el formato de respuesta de las fases
              psicológicas, sin exponer el detalle técnico de la escala Likert. */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Personalidad y Axiológico</span> se
            responden en una escala de acuerdo/desacuerdo: no hay respuestas correctas ni
            incorrectas. El sistema evalúa la coherencia de tu perfil a lo largo del examen, no
            cuántas «aciertas».
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRUEBA EL EXAMEN — carrusel interactivo con 5 reactivos
          reales de las 3 fases + micro-diagnóstico final.
          ═══════════════════════════════════════════════════════════ */}
      <section id="ejemplos" className="bg-muted/40 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Revelar className="mb-14 text-center md:mb-16">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Prueba el examen
              <span className="h-px w-5 bg-accent" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Cinco reactivos reales. Responde y descubre cómo evalúa el sistema.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tres del psicométrico, uno de personalidad, uno del axiológico. Al responder cada uno recibirás una explicación pedagógica de cómo funciona el sistema — sin memorizar, entendiendo la lógica.
            </p>
          </Revelar>

          <Revelar retraso={80}>
            <CarruselMuestra />
          </Revelar>
        </div>
      </section>

      {/* Transición light → dark */}
      <div className="h-10 bg-gradient-to-b from-muted/40 to-primary" />

      {/* ═══════════════════════════════════════════════════════════
          PLANTELES DISPONIBLES — dark section con oferta educativa
          Info oficial extraída de la Convocatoria UDEFA 2026.
          ═══════════════════════════════════════════════════════════ */}
      <section id="planteles" className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-32">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-military/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Revelar className="mb-14 text-center md:mb-16">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Planteles disponibles
              <span className="h-px w-5 bg-accent" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Elige tu ruta militar.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Los planteles del Sistema Educativo Militar. El examen psicológico es el mismo para todos — tu plantel define la carrera.
            </p>
          </Revelar>

          <Revelar retraso={80}>
            <CarruselPlanteles />
          </Revelar>
        </div>
      </section>

      {/* Transición dark → light */}
      <div className="h-10 bg-gradient-to-b from-primary to-background" />

      {/* ═══════════════════════════════════════════════════════════
          SOBRE EL CREADOR — Carlo Alexander
          ═══════════════════════════════════════════════════════════ */}
      <section id="creador" className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-military">
              <span className="h-px w-5 bg-military" />
              Sobre el creador
              <span className="h-px w-5 bg-military" />
            </div>
          </div>

          {/* La misma hoja de plata de las otras secciones claras, en su
              versión NEUTRA: el creador no pertenece a ningún módulo, así que
              aquí manda el latón de la marca y no el azul ni el rojo. */}
          <div
            className="grid grid-cols-1 gap-8 rounded-2xl border p-6 md:grid-cols-[240px_1fr] md:items-center md:p-8"
            style={{
              backgroundImage: HOJA_DE_PLATA_CLARA.fondo,
              borderColor: HOJA_DE_PLATA_CLARA.borde,
              boxShadow: HOJA_DE_PLATA_CLARA.sombra,
            }}
          >
            {/* Foto de Carlo — el latón como luz alrededor, no como relleno:
                el mismo trato que el escudo del tablero. */}
            <div className="relative mx-auto h-52 w-52 md:mx-0">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(201,154,59,0.45), transparent 72%)' }}
              />
              {/* Aro y halo van JUNTOS en una sola `boxShadow`, y no con
                  `ring-*`: esa clase se dibuja también con box-shadow, y un
                  estilo en línea la pisaría sin avisar. De adentro afuera: aro
                  macizo de latón, aro suave, y el resplandor. */}
              <div
                className="relative h-full w-full overflow-hidden rounded-full"
                style={{
                  boxShadow:
                    '0 0 0 4px #C99A3B, 0 0 0 9px rgba(201,154,59,0.30), 0 0 34px -4px rgba(201,154,59,0.70)',
                }}
              >
                <Image
                  src="/carlo.jpg"
                  alt="Carlo Alexander"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Carlo Alexander
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Ex-cadete del Heroico Colegio Militar · Autor de la plataforma
              </p>

              <p className="mt-4 text-base leading-relaxed text-foreground">
                Presenté 3 veces el examen psicológico y fui cadete del H.C.M.
                Ese background está detrás de cada reactivo y cada explicación
                de esta plataforma —{" "}
                <span className="font-semibold">
                  no te van a evaluar lo que sabes, sino lo que muestras cuando estás bajo exigencia real.
                </span>{" "}
                Aquí aprendes a proyectarlo con coherencia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TrustBadge icon={<Shield className="h-3 w-3" />} label="Ex-cadete HCM" />
                <TrustBadge icon={<Users className="h-3 w-3" />} label="Apoyo de psicólogos militares" />
                <TrustBadge icon={<Sparkles className="h-3 w-3" />} label="Autor de @elmonoteteguia" />
              </div>

              {/* Las dos redes, juntas. TikTok va primero y con la flecha
                  porque es de donde llega la mayoría; Instagram se suma sin
                  pelearle protagonismo. */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={LEGAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Ver contenido gratis en TikTok
                  <ArrowRight className="h-3 w-3" />
                </a>
                <a
                  href={LEGAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Seguir en Instagram
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transición light → dark */}
      <div className="h-10 bg-gradient-to-b from-background to-primary" />

      {/* ═══════════════════════════════════════════════════════════
          CTA FINAL — sección dark con call to action + botón latón
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <Revelar className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-32">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">Empieza hoy</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            La institución no busca personas <span className="text-accent">perfectas</span>.
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-muted-foreground">
            Busca personas estables, coherentes y confiables. Nuestro sistema te forma para mostrar exactamente eso.
          </p>
          <Link
            href="/precios"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-accent-foreground hover:bg-accent/90"
            )}
          >
            Comenzar mi preparación
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Revelar>
      </section>

      {/* Pie de página compartido — aviso de independencia + enlaces legales */}
      <SiteFooter />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente FaseCard — usado 3 veces en la sección de fases
   ═══════════════════════════════════════════════════════════ */
function FaseCard({
  numero,
  titulo,
  descripcion,
  reactivos,
  duracion,
  icono,
  modulo,
}: {
  numero: string;
  titulo: string;
  descripcion: string;
  reactivos: string;
  duracion: string;
  icono: React.ReactNode;
  /** A qué examen pertenece la fase: decide el color de la tarjeta. */
  modulo: "cultural" | "psicologico";
}) {
  const acabado = acabadoClaroDeModulo(modulo);
  return (
    <div
      className="rounded-xl border p-5"
      style={{
        backgroundImage: acabado.fondo,
        borderColor: acabado.borde,
        boxShadow: acabado.sombra,
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        {/* El icono hereda el color del chip: los lucide pintan con
            `currentColor` si nadie les pone una clase de color encima. */}
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg border bg-white/70"
          style={{ borderColor: acabado.borde, color: acabado.acento }}
        >
          {icono}
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: acabado.acento }}
        >
          Fase {numero}
        </span>
      </div>
      <p className="text-lg font-semibold text-foreground">{titulo}</p>
      <p className="mt-1 mb-4 text-sm leading-relaxed text-muted-foreground">{descripcion}</p>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-xs text-muted-foreground">{reactivos}</span>
        <span className="text-xs font-semibold text-foreground">{duracion}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente TrustBadge — píldora con ícono usada en la
   sección "Sobre el creador".
   ═══════════════════════════════════════════════════════════ */
function TrustBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    /* Blancas: van encima de la hoja de plata, y el gris de antes se le
       confundía con el fondo. */
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground shadow-sm">
      <span className="text-accent">{icon}</span>
      {label}
    </span>
  );
}
