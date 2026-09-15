import { Building2, Cloud, MonitorSmartphone, ShieldCheck, Cpu, Handshake } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const steps = [
  { icon: Building2, title: "Hecho en La Paz - Bolivia", desc: "Conocemos la normativa y la realidad empresarial boliviana." },
  { icon: Cloud, title: "Cloud o instalación propia", desc: "Elegí la modalidad que mejor se adapte a tu empresa." },
  { icon: MonitorSmartphone, title: "Multi-dispositivo", desc: "Accedé desde computadora, tablet o celular." },
  { icon: ShieldCheck, title: "Seguro por diseño", desc: "Roles, permisos y trazabilidad para proteger tu operación." },
  { icon: Cpu, title: "Stack moderno", desc: "Una plataforma rápida, estable y preparada para crecer." },
  { icon: Handshake, title: "Onboarding acompañado", desc: "Te ayudamos a configurar, migrar y poner en marcha el sistema." },
];

export function WhatWeDo() {
  return (
    <section id="por-que" className="relative py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.64 0.19 256 / 0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Por qué BRY Labs</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-2xl">
          Software empresarial pensado para Bolivia.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="gradient-border rounded-xl border border-border bg-surface/60 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
