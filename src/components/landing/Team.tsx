import { Bell, KeyRound, ShieldCheck, MailCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const platforms = [
  {
    icon: KeyRound,
    title: "BRY Labs Identity",
    desc: "Un solo acceso seguro para todas tus herramientas y empresas.",
    features: ["SSO OpenID Connect", "2FA y códigos de recuperación", "Reset por email", "Multi-empresa", "Panel de administración"],
  },
  {
    icon: Bell,
    title: "BRY Labs Notifications",
    desc: "Notificaciones confiables y centralizadas para toda la plataforma.",
    features: ["Plantillas con variables", "AWS SES o Brevo", "Adjuntos PDF", "Control de rebotes", "Reintentos automáticos"],
  },
];

export function Team() {
  return (
    <section id="plataformas" className="relative py-24 md:py-32 bg-surface/40 border-y border-border overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Plataformas incluidas</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Una base común para operar con seguridad.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {platforms.map(({ icon: Icon, title, desc, features }) => (
            <article key={title} className="rounded-xl border border-border bg-card/80 p-7 md:p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">{desc}</p>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {features.map((feature) => <li key={feature} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
