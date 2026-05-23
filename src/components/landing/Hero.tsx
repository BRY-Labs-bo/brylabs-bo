import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* decorative grid */}
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 264 / 0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center animate-reveal">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-soft">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          La Paz, Bolivia — Est. 2026
        </div>

        <h1 className="mt-8 font-display font-extrabold text-balance text-[clamp(2.25rem,5.5vw,3.75rem)]">
          Tecnología que{" "}
          <span className="relative inline-block text-primary">
            mueve negocios
            <span
              aria-hidden
              className="absolute left-0 right-0 -bottom-1 h-[0.35rem] bg-primary/15 rounded-sm -z-10"
            />
          </span>{" "}
          reales.
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground text-balance">
          Diseñamos y construimos soluciones digitales para empresas y emprendimientos
          que quieren crecer. IA, apps móviles, fintech y optimización de procesos.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-soft"
          >
            Trabajemos juntos
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            Ver nuestro trabajo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* stats */}
        <div className="mt-20 border-t border-border pt-10 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { k: "1+", v: "Productos en desarrollo" },
            { k: "IA", v: "En el núcleo de cada solución" },
            { k: "BOL", v: "Mercado primario" },
          ].map((s) => (
            <div key={s.v} className="text-left md:text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-foreground">
                {s.k}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
