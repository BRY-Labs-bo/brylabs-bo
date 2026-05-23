import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Lo que estamos construyendo.
        </h2>

        <a
          href="#"
          className="mt-14 block group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-elevated transition-all duration-300"
        >
          <div className="grid md:grid-cols-5">
            {/* visual */}
            <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto bg-primary-soft overflow-hidden">
              <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-extrabold text-6xl md:text-7xl tracking-tight text-primary">
                  Vendelo
                </span>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.55 0.22 264 / 0.35), transparent 70%)",
                }}
              />
            </div>

            {/* content */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  En desarrollo · 2026
                </span>
              </div>
              <h3 className="mt-4 font-display font-bold text-2xl md:text-3xl text-foreground">
                Vendelo{" "}
                <span className="text-muted-foreground font-medium text-base">
                  por BRY Labs
                </span>
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Plataforma de live commerce para vendedoras en TikTok Bolivia. Pagos
                QR en tiempo real, modelo no-custodial, integración con banca
                boliviana.
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Ver proyecto
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Más proyectos próximamente.
        </p>
      </div>
    </section>
  );
}
