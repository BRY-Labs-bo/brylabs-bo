import {
  BrainCircuit,
  Smartphone,
  Settings2,
  CreditCard,
  Rocket,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  {
    icon: BrainCircuit,
    title: "Implementación de IA",
    desc: "Integramos modelos de lenguaje y automatización inteligente en procesos existentes. Sin buzzwords — con resultados medibles.",
  },
  {
    icon: Smartphone,
    title: "Apps móviles",
    desc: "Desarrollo nativo y multiplataforma. Desde el MVP hasta producción, con arquitectura que escala.",
  },
  {
    icon: Settings2,
    title: "Optimización de procesos",
    desc: "Mapeamos, digitalizamos y automatizamos flujos operativos. Reducimos tiempos y costos con tecnología apropiada.",
  },
  {
    icon: CreditCard,
    title: "Soluciones fintech",
    desc: "Integración con pasarelas de pago bolivianas y arquitectura financiera para el mercado local.",
  },
  {
    icon: Rocket,
    title: "Startups tecnológicas",
    desc: "Co-creación de productos desde la idea. Estrategia, arquitectura, desarrollo e iteración rápida.",
  },
  {
    icon: LineChart,
    title: "Consultoría digital",
    desc: "Diagnóstico tecnológico, selección de herramientas y roadmap de transformación para empresas establecidas.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Servicios</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Lo que construimos.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-elevated hover:-translate-y-0.5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
