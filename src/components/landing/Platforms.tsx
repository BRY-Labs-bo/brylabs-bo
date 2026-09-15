import { Bell, KeyRound, ShieldCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const platforms = [
  {
    icon: KeyRound,
    title: "BRY Labs Identity",
    tagline: "Un solo login para todos tus productos BRY Labs.",
    features: [
      "Single Sign-On basado en OpenID Connect",
      "2FA con Google Authenticator, Authy o similar",
      "Códigos de recuperación descargables",
      "Reset de contraseña con email verificado",
      "Cambio de empresa sin cerrar sesión",
      "Administración de usuarios, roles y permisos",
    ],
  },
  {
    icon: Bell,
    title: "BRY Labs Notifications",
    tagline: "Notificaciones automáticas por email a tus clientes.",
    features: [
      "Plantillas personalizables con variables",
      "Envío por AWS SES o Brevo",
      "Adjuntos automáticos de facturas y comprobantes",
      "Manejo automático de rebotes y quejas",
      "Reintentos ante errores temporales",
    ],
  },
];

export function Platforms() {
  return (
    <section id="plataformas" className="relative border-y border-border bg-surface/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Grupo 3 · Plataforma incluida</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Una cuenta, una operación conectada.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {platforms.map(({ icon: Icon, title, tagline, features }) => (
            <article key={title} className="rounded-xl border border-border bg-card/80 p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}