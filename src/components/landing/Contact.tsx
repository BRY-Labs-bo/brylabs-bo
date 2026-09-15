import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, oklch(0.64 0.19 256 / 0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Contacto</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Hablemos.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
          ¿Listo para modernizar tu negocio? Agendemos una demo y veamos qué solución se adapta mejor a tu empresa.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* contact info */}
          <div className="space-y-4">
            <a
              href="mailto:contacto@brylabs.bo"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card/70 backdrop-blur p-5 hover:border-primary/40 hover:shadow-elevated transition-all"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </div>
                <div className="font-display font-semibold text-foreground">
                  contacto@brylabs.bo
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="https://wa.me/59164133771?text=Hola%20BRY%20Labs%2C%20quiero%20agendar%20una%20demo"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card/70 backdrop-blur p-5 hover:border-primary/40 hover:shadow-elevated transition-all"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </div>
                <div className="font-display font-semibold text-foreground">
                  +591 64133771
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>

            <div className="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
              brylabs.bo · La Paz - Bolivia
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 shadow-elevated space-y-4"
          >
            <Field label="Nombre" htmlFor="name">
              <input id="name" name="name" required placeholder="Tu nombre" className="form-input" />
            </Field>
            <Field label="Email o WhatsApp" htmlFor="contact">
              <input id="contact" name="contact" required placeholder="hola@empresa.com" className="form-input" />
            </Field>
            <Field label="¿Qué necesitás?" htmlFor="need">
              <select id="need" name="need" defaultValue="" required className="form-input">
                <option value="" disabled>Seleccioná una opción</option>
                <option>Scibol ERP</option>
                <option>Facturalo</option>
                <option>Plataformas BRY Labs</option>
                <option>Demo general</option>
                <option>Otro</option>
              </select>
            </Field>
            <Field label="Contanos más" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Sobre tu proyecto, tu negocio, tu meta..."
                className="form-input resize-none"
              />
            </Field>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-[0_0_30px_oklch(0.64_0.19_256/0.45)]"
            >
              Solicitar demo
            </button>

            {sent && (
              <p role="status" className="text-sm text-primary text-center animate-reveal">
                ¡Gracias! Te respondemos en menos de 24 horas.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: oklch(0.18 0.035 256 / 0.6);
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.64 0.19 256 / 0.20);
        }
        .form-input::placeholder { color: var(--color-muted-foreground-2); }
        select.form-input option { background: oklch(0.21 0.035 256); color: var(--color-foreground); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
