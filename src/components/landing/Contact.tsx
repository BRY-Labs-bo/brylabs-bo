import { ArrowRight, Mail, MapPin, MessageCircle, Monitor } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const demoLink = "https://wa.me/59164133771?text=Hola%20BRY%20Labs%2C%20quiero%20agendar%20una%20demo";

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-grid bg-grid-fade opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <SectionLabel>Contacto</SectionLabel>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold">¿Listo para modernizar tu negocio?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">Contactanos por WhatsApp desde La Paz y agendemos una demo personalizada.</p>
        <a href={demoLink} className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-colors hover:bg-primary-hover">Escribir por WhatsApp <ArrowRight className="h-4 w-4" /></a>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          <a href={demoLink} className="rounded-lg border border-border bg-card/70 p-5 transition-colors hover:border-primary/40"><MessageCircle className="h-5 w-5 text-primary" /><p className="mt-3 text-xs text-muted-foreground">WhatsApp / Tel.</p><p className="mt-1 text-sm font-semibold">+591 64133771</p></a>
          <a href="mailto:contacto@brylabs.bo" className="rounded-lg border border-border bg-card/70 p-5 transition-colors hover:border-primary/40"><Mail className="h-5 w-5 text-primary" /><p className="mt-3 text-xs text-muted-foreground">Email</p><p className="mt-1 text-sm font-semibold">contacto@brylabs.bo</p></a>
          <div className="rounded-lg border border-border bg-card/70 p-5"><MapPin className="h-5 w-5 text-primary" /><p className="mt-3 text-xs text-muted-foreground">Ubicación</p><p className="mt-1 text-sm font-semibold">La Paz - Bolivia</p></div>
          <div className="rounded-lg border border-border bg-card/70 p-5"><Monitor className="h-5 w-5 text-primary" /><p className="mt-3 text-xs text-muted-foreground">Web</p><p className="mt-1 text-sm font-semibold">brylabs.bo</p></div>
        </div>
      </div>
    </section>
  );
}