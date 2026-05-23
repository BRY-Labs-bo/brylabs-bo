import { Search, PenTool, Hammer, TrendingUp } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const steps = [
  { icon: Search, title: "Entender", desc: "el negocio" },
  { icon: PenTool, title: "Diseñar", desc: "la solución" },
  { icon: Hammer, title: "Construir", desc: "y lanzar" },
  { icon: TrendingUp, title: "Iterar", desc: "y crecer" },
];

export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="relative py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.64 0.19 256 / 0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Qué hacemos</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-2xl">
          Un estudio de tecnología con enfoque en resultados.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-muted-foreground text-base md:text-lg">
              BRY Labs es un estudio de tecnología boliviano especializado en construir
              productos digitales que resuelven problemas concretos. No hacemos
              tecnología por hacerla — cada solución que diseñamos tiene un modelo de
              negocio detrás.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-surface/60 backdrop-blur p-6 border-l-2 border-l-primary">
              <p className="font-display font-semibold text-foreground text-balance">
                Nuestro enfoque: entender el negocio antes de escribir una línea de código.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                La tecnología es el medio, no el fin.
              </p>
            </div>
          </div>

          {/* process timeline */}
          <div className="relative rounded-2xl border border-border bg-surface/40 backdrop-blur p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground-2 mb-6">
              Nuestro proceso
            </div>
            <div className="relative">
              {/* connector line */}
              <div
                aria-hidden
                className="absolute left-5 top-5 bottom-5 w-px md:hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, oklch(0.64 0.19 256 / 0.5), oklch(0.64 0.19 256 / 0.1))",
                }}
              />
              <div
                aria-hidden
                className="hidden md:block absolute left-0 right-0 top-5 h-px"
                style={{
                  background:
                    "linear-gradient(to right, oklch(0.64 0.19 256 / 0.5), oklch(0.64 0.19 256 / 0.1))",
                }}
              />

              <ol className="grid md:grid-cols-4 gap-6 relative">
                {steps.map(({ icon: Icon, title, desc }, i) => (
                  <li key={title} className="flex md:block items-start gap-4">
                    <div className="relative shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary border border-primary/30">
                      <Icon className="h-5 w-5" />
                      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                    </div>
                    <div className="md:mt-4">
                      <div className="font-display font-semibold text-foreground text-sm">
                        {title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
