import { ArrowUpRight, QrCode, Smartphone } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const tags = ["Live Commerce", "Fintech", "Bolivia", "TikTok"];

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Lo que estamos construyendo.
        </h2>

        <a
          href="#"
          className="mt-14 block group rounded-2xl border border-border bg-card/70 backdrop-blur overflow-hidden hover:border-primary/40 hover:shadow-elevated transition-all duration-300"
        >
          <div className="grid md:grid-cols-5">
            {/* visual — phone with QR */}
            <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-border bg-[oklch(0.18_0.035_256)]">
              <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
              <div
                aria-hidden
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.65 0.18 50 / 0.35), transparent 70%)",
                }}
              />

              {/* phone mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-40 h-72 rounded-[2rem] border-2 border-border-strong bg-[oklch(0.13_0.03_256)] shadow-elevated p-2 rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-500">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-border-strong" />
                  <div className="h-full w-full rounded-[1.5rem] bg-gradient-to-br from-[oklch(0.95_0.05_60)] to-[oklch(0.85_0.18_50)] flex flex-col items-center justify-center gap-3 p-3">
                    <div className="text-[8px] font-bold tracking-wider text-[oklch(0.25_0.08_50)] uppercase">
                      Pagar con QR
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-lg">
                      <QrCode className="w-16 h-16 text-[oklch(0.18_0.04_50)]" strokeWidth={2.5} />
                    </div>
                    <div className="text-[10px] font-bold text-[oklch(0.18_0.04_50)]">
                      Bs. 149.00
                    </div>
                    <div className="text-[7px] text-[oklch(0.35_0.06_50)] font-medium">
                      Vendelo · Live
                    </div>
                  </div>
                </div>
              </div>

              {/* logo overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-border bg-background/70 backdrop-blur px-2.5 py-1">
                <Smartphone className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-muted-foreground">vendelo.app</span>
              </div>
            </div>

            {/* content */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.16_150)] animate-pulse-dot" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.18_150)]" />
                  </span>
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

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

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
