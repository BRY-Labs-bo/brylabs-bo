import { Linkedin } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const tags = ["Producto", "Fintech", "Live commerce", "IA aplicada", "Mercado boliviano"];

export function Team() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Equipo</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          El equipo detrás.
        </h2>

        <div className="mt-14 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft">
          <div className="flex flex-col md:flex-row gap-8 md:items-start">
            <div className="flex items-center justify-center h-24 w-24 shrink-0 rounded-full bg-primary-soft border border-primary/15">
              <span className="font-display font-bold text-2xl text-primary">RJ</span>
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Reynaldo Jove
              </h3>
              <p className="text-sm text-primary font-medium mt-0.5">
                Fundador & CEO
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Emprendedor tecnológico con foco en el ecosistema digital boliviano.
                Fundador de BRY Labs y creador de Vendelo, una plataforma de live
                commerce para TikTok Bolivia. Especializado en producto, arquitectura
                de sistemas y modelos de negocio digitales.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#linkedin"
                aria-label="LinkedIn de Reynaldo Jove"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          ¿Querés sumarte al equipo?{" "}
          <a href="#contacto" className="text-primary font-medium hover:underline">
            Escribinos.
          </a>
        </p>
      </div>
    </section>
  );
}
