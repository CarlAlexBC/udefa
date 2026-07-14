import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Brain, UserCircle, Scale, Star } from "lucide-react";

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
