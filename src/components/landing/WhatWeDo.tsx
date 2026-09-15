import { Building2, Cloud, MonitorSmartphone, ShieldCheck, Cpu, Handshake, Puzzle } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const reasons = [
  { icon: Building2, title: "Hecho en La Paz - Bolivia", desc: "Cumple con normativa SIN local y la RND 102400000021 vigente." },
  { icon: Cloud, title: "Cloud o instalación propia", desc: "Elegí BRY Labs Cloud o alojá la solución en tu servidor." },
  { icon: MonitorSmartphone, title: "Multi-dispositivo", desc: "Funciona en computadora, tablet y celular." },
  { icon: ShieldCheck, title: "Seguro por diseño", desc: "2FA para administradores, auditoría completa y separación estricta de empresas." },
  { icon: Cpu, title: "Stack moderno", desc: ".NET 9, PostgreSQL y una arquitectura preparada para escalar." },
  { icon: Handshake, title: "Onboarding acompañado", desc: "Migración desde Odoo u otros sistemas y capacitación incluida." },
  { icon: Puzzle, title: "Ecosistema integrado", desc: "Scibol, Facturalo, Pagos QR, Homologa y Bancarizalo trabajan juntos con un login y avisos automáticos." },
];

export function WhatWeDo() {
  return (
    <section id="por-que" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Por qué BRY Labs</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Software empresarial pensado para Bolivia.</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }, index) => (
            <article key={title} className={`gradient-border rounded-xl border border-border bg-surface/60 p-7 ${index === 6 ? "sm:col-span-2 lg:col-span-3" : ""}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}