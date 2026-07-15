import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  GraduationCap,
  Scale,
  Shield,
  Sparkles,
  Star,
  UserCircle,
  Users,
} from "lucide-react";
import { INSTRUCCIONES_POR_BLOQUE } from "@/lib/instrucciones-bloques";

export default function Home() {
  return (
    <main className="flex-1">

      {/* ═══════════════════════════════════════════════════════════
          HERO — sección dark con nav + headline + logo + trust indicators
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-military/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <nav className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 bg-card/10">
                <span className="font-semibold text-accent">M</span>
              </div>
              <span className="font-semibold">El Monote te Guía</span>
            </div>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-border/40 bg-transparent text-primary-foreground hover:bg-card/10 hover:text-primary-foreground"
              )}
            >
              Iniciar sesión
            </Link>
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
                  href="/registro"
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

              <div className="flex flex-wrap gap-8 border-t border-border/20 pt-6">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">3,190</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Reactivos curados</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">3</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Fases cubiertas</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">95</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Páginas de guía</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-2xl border border-border/30 bg-card/10 p-3">
                <Image
                  src="/logo.png"
                  alt="El Monote te Guía"
                  width={280}
                  height={280}
                  priority
                  className="rounded-xl"
                />
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
      <section id="fases" className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Cómo funciona el sistema
              <span className="h-px w-5 bg-accent" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Tres fases. Un solo perfil.</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              El sistema no te evalúa por partes. Combina las tres fases para construir un solo perfil psicológico coherente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FaseCard
              numero="01"
              titulo="Psicométrico"
              descripcion="Analogías, sinónimos, razonamiento lógico y abstracto en 4 bloques bajo presión de tiempo."
              reactivos="250 reactivos"
              duracion="40 min"
              icono={<Brain className="h-5 w-5 text-accent" />}
            />
            <FaseCard
              numero="02"
              titulo="Personalidad"
              descripcion="8 temas centrales con escala Likert. Detecta contradicciones a lo largo del examen."
              reactivos="2,807 reactivos"
              duracion="45 min"
              icono={<UserCircle className="h-5 w-5 text-accent" />}
            />
            <FaseCard
              numero="03"
              titulo="Axiológico"
              descripcion="Patriotismo, lealtad, honor y disciplina. Valida si tu perfil de valores encaja."
              reactivos="155 reactivos"
              duracion="10 min"
              icono={<Scale className="h-5 w-5 text-accent" />}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EJEMPLOS DE REACTIVOS RESUELTOS
          Vista previa didáctica del producto — sin dar el banco real.
          ═══════════════════════════════════════════════════════════ */}
      <section id="ejemplos" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Vista previa
              <span className="h-px w-5 bg-accent" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Así se resuelve cada reactivo.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              Tres ejemplos resueltos (uno por tipo de bloque del psicométrico). No memorices — entiende la lógica detrás.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <EjemploResuelto
              bloque="Analogías Verbales y Cultura General"
              info={INSTRUCCIONES_POR_BLOQUE["Analogías Verbales y Cultura General"]}
            />
            <EjemploResuelto
              bloque="Sinónimos y Antónimos"
              info={INSTRUCCIONES_POR_BLOQUE["Sinónimos y Antónimos"]}
            />
            <EjemploResuelto
              bloque="Razonamiento Lógico-Matemático"
              info={INSTRUCCIONES_POR_BLOQUE["Razonamiento Lógico-Matemático"]}
            />
          </div>
        </div>
      </section>

      {/* Transición light → dark */}
      <div className="h-10 bg-gradient-to-b from-muted/40 to-primary" />

      {/* ═══════════════════════════════════════════════════════════
          PLANTELES DISPONIBLES — dark section con oferta educativa
          Info oficial extraída de la Convocatoria UDEFA 2026.
          ═══════════════════════════════════════════════════════════ */}
      <section id="planteles" className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-military/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-5 bg-accent" />
              Planteles disponibles
              <span className="h-px w-5 bg-accent" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Elige tu ruta militar.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              Tres planteles del Sistema Educativo Militar. El examen psicológico es el mismo para los tres — tu plantel define la carrera.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <PlantelCardMarketing
              nombre="Heroico Colegio Militar"
              lema="Por el Honor de México"
              duracion="4 años"
              edad="18–20 años"
              grado="Subteniente"
              estudios={[
                "Lic. Administración Militar",
                "Lic. Seguridad Pública (GN)",
              ]}
            />
            <PlantelCardMarketing
              nombre="Escuela Militar de Medicina"
              lema="La salud como meta, el honor como guía"
              duracion="6 años"
              edad="18–22 años"
              grado="Médico Cirujano Militar"
              estudios={["Lic. como Médico Cirujano Militar"]}
            />
            <PlantelCardMarketing
              nombre="Escuela Militar de Ingeniería"
              lema="Crisol de la ciencia y el honor"
              duracion="6 años"
              edad="18–22 años"
              grado="Ingeniero Militar"
              estudios={[
                "Ing. Constructor",
                "Ing. Industrial",
                "Ing. Computación",
                "Ing. Comunicaciones",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Transición dark → light */}
      <div className="h-10 bg-gradient-to-b from-primary to-background" />

      {/* ═══════════════════════════════════════════════════════════
          SOBRE EL CREADOR — Carlo Alexander
          ═══════════════════════════════════════════════════════════ */}
      <section id="creador" className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-military">
              <span className="h-px w-5 bg-military" />
              Sobre el creador
              <span className="h-px w-5 bg-military" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] md:items-center">
            {/* Placeholder de foto */}
            <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border-4 border-accent/30 bg-primary md:mx-0">
              <span className="text-6xl font-semibold text-accent">C</span>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
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

              <a
                href="https://www.tiktok.com/@elmonoteteguia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Ver contenido gratis en TikTok
                <ArrowRight className="h-3 w-3" />
              </a>
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

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">Empieza hoy</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            La institución no busca personas <span className="text-accent">perfectas</span>.
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-muted-foreground">
            Busca personas estables, coherentes y confiables. Nuestro sistema te forma para mostrar exactamente eso.
          </p>
          <Link
            href="/registro"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-accent-foreground hover:bg-accent/90"
            )}
          >
            Comenzar mi preparación
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="border-t border-border bg-background py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs text-muted-foreground">
          <p>© 2026 El Monote te Guía · Carlo Alexander</p>
          <p>Uso personal · Prohibida su distribución</p>
        </div>
      </footer>
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
}: {
  numero: string;
  titulo: string;
  descripcion: string;
  reactivos: string;
  duracion: string;
  icono: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 border-t-[3px] border-t-military">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
          {icono}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-military">Fase {numero}</span>
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
   Sub-componente EjemploResuelto — card compacta con reactivo,
   respuesta correcta destacada y explicación.
   Consume el mismo mapa de instrucciones que usa el simulador.
   ═══════════════════════════════════════════════════════════ */
function EjemploResuelto({
  bloque,
  info,
}: {
  bloque: string;
  info: typeof INSTRUCCIONES_POR_BLOQUE[keyof typeof INSTRUCCIONES_POR_BLOQUE] | undefined;
}) {
  if (!info?.ejemplo) return null;
  const { ejemplo } = info;

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-military">
        {bloque}
      </p>
      <p className="mb-4 text-base font-semibold leading-snug text-foreground">
        {ejemplo.enunciado}
      </p>

      <div className="mb-4 flex flex-col gap-1.5">
        {ejemplo.opciones.map((opcion, i) => {
          const letra = String.fromCharCode(65 + i);
          const esCorrecta = opcion === ejemplo.respuestaCorrecta;
          return (
            <div
              key={opcion}
              className={cn(
                "flex items-center gap-2 rounded-md border p-2 text-sm",
                esCorrecta
                  ? "border-military bg-military/10 font-medium text-foreground"
                  : "border-border text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
                  esCorrecta
                    ? "bg-military text-military-foreground"
                    : "border border-border bg-muted"
                )}
              >
                {letra}
              </span>
              <span>{opcion}</span>
              {esCorrecta && (
                <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-military" />
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-md border-l-2 border-l-accent bg-accent/5 p-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
          Explicación
        </p>
        <p className="mt-1 text-xs leading-relaxed text-foreground">
          {ejemplo.explicacion}
        </p>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════
   Sub-componente PlantelCardMarketing — card informativa de
   un plantel para la landing pública.
   ═══════════════════════════════════════════════════════════ */
function PlantelCardMarketing({
  nombre,
  lema,
  duracion,
  edad,
  grado,
  estudios,
}: {
  nombre: string;
  lema: string;
  duracion: string;
  edad: string;
  grado: string;
  estudios: string[];
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border/30 bg-card/10 p-5 backdrop-blur">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-military/20">
        <GraduationCap className="h-5 w-5 text-accent" />
      </div>

      <h3 className="text-lg font-semibold text-primary-foreground">{nombre}</h3>
      <p className="mt-1 text-xs italic text-muted-foreground">&ldquo;{lema}&rdquo;</p>

      <div className="my-4 grid grid-cols-2 gap-2 border-y border-border/20 py-3 text-xs">
        <PlantelDato icon={<Clock className="h-3 w-3" />} label="Duración" value={duracion} />
        <PlantelDato icon={<UserCircle className="h-3 w-3" />} label="Edad" value={edad} />
        <PlantelDato icon={<Star className="h-3 w-3" />} label="Grado" value={grado} />
      </div>

      <div className="flex-1">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Estudios
        </p>
        <div className="flex flex-wrap gap-1">
          {estudios.map((e) => (
            <span
              key={e}
              className="rounded-md border border-border/30 bg-card/20 px-2 py-0.5 text-[10px] text-primary-foreground"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function PlantelDato({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground">
      <span className="text-accent">{icon}</span>
      {label}
    </span>
  );
}
