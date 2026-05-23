import { Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const capabilities = [
  "Producto digital end-to-end",
  "Arquitectura escalable",
  "IA aplicada al negocio",
  "Integración con sistemas locales",
  "Iteración rápida y medible",
];

export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Qué hacemos</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-2xl">
          Un estudio de tecnología con enfoque en resultados.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-muted-foreground text-base md:text-lg">
              BRY Labs es un estudio de tecnología boliviano especializado en construir
              productos digitales que resuelven problemas concretos. No hacemos
              tecnología por hacerla — cada solución que diseñamos tiene un modelo de
              negocio detrás.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-primary-soft p-6">
              <p className="font-display font-semibold text-foreground text-balance">
                Nuestro enfoque: entender el negocio antes de escribir una línea de código.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                La tecnología es el medio, no el fin.
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 pb-4 border-b border-border last:border-0"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                  <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                </span>
                <span className="text-foreground font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
