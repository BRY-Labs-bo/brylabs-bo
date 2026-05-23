import { ArrowRight, MapPin, TrendingUp, Activity, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* background grid */}
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      {/* floating dots */}
      <div aria-hidden className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.64 0.19 256 / 0.25), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.13 240 / 0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="animate-reveal text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            La Paz, Bolivia — Est. 2026
          </div>

          <h1 className="mt-6 font-display font-extrabold text-balance text-[clamp(2.25rem,5vw,3.75rem)]">
            Tecnología que{" "}
            <span className="relative inline-block bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent">
              mueve negocios
            </span>{" "}
            reales.
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground text-balance">
            Diseñamos y construimos soluciones digitales para empresas y emprendimientos
            que quieren crecer. IA, apps móviles, fintech y optimización de procesos.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-[0_0_30px_oklch(0.64_0.19_256/0.45)]"
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
          <div className="mt-14 border-t border-border pt-8 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            {[
              { k: "1+", v: "Productos en desarrollo" },
              { k: "IA", v: "En el núcleo" },
              { k: "BOL", v: "Mercado primario" },
            ].map((s) => (
              <div key={s.v} className="text-left">
                <div className="font-display font-extrabold text-2xl md:text-3xl text-foreground">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — mockup */}
        <div className="relative animate-reveal" style={{ animationDelay: "0.15s" }}>
          <div
            className="relative animate-float"
            style={{ transform: "perspective(1400px) rotateY(-8deg) rotateX(4deg)" }}
          >
            {/* glow ring */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl blur-2xl opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, oklch(0.64 0.19 256 / 0.35), transparent 70%)",
              }}
            />

            <div className="relative rounded-2xl border border-border-strong bg-[oklch(0.18_0.035_256)] shadow-elevated overflow-hidden">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-[oklch(0.16_0.035_256)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.18_25)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.78_0.16_85)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.7_0.16_150)]" />
                <span className="ml-3 text-[10px] text-muted-foreground-2 font-mono">
                  brylabs · dashboard
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* metric row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: TrendingUp, label: "MRR", v: "+18.4%" },
                    { icon: Activity, label: "Active", v: "2,341" },
                    { icon: Zap, label: "Latency", v: "84ms" },
                  ].map(({ icon: Icon, label, v }) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border bg-surface/60 p-3"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <Icon className="w-3 h-3 text-primary" />
                        {label}
                      </div>
                      <div className="mt-1 font-display font-bold text-foreground text-sm">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* bar chart */}
                <div className="rounded-lg border border-border bg-surface/60 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Revenue · 7d
                    </span>
                    <span className="text-[10px] text-primary font-mono">+12.8%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 50, 78, 60, 88, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* code lines */}
                <div className="rounded-lg border border-border bg-[oklch(0.16_0.035_256)] p-3 font-mono text-[10px] space-y-1">
                  <div className="text-muted-foreground-2">// inference pipeline</div>
                  <div className="text-foreground">
                    <span className="text-accent-cyan">const</span>{" "}
                    <span className="text-primary">result</span> ={" "}
                    <span className="text-accent-cyan">await</span> ai.run(query)
                  </div>
                  <div className="text-muted-foreground">
                    → 200 OK · 84ms · cached
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div
            className="hidden md:flex absolute -left-6 top-1/3 items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 shadow-elevated animate-drift"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.16_150)] animate-pulse-dot" />
            <span className="text-[10px] font-medium text-foreground">Production</span>
          </div>
          <div
            className="hidden md:flex absolute -right-4 bottom-12 items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 shadow-elevated animate-drift"
            style={{ animationDelay: "1.5s" }}
          >
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-medium text-foreground">QR · BOB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
