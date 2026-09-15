import { CheckCircle2, FileCheck2, QrCode, ShieldCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const tags = [
  "Modalidades SIN",
  "CUFD y CUIS",
  "Firma XMLDSig SHA-256",
  "PDF con QR",
  "Bitácora SIN",
  "Multi-emisor",
  "Alertas",
  "WebComponent embebible",
  "API REST OAuth 2.0",
];

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Facturalo · Facturación Electrónica SIN Bolivia</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Emití facturas electrónicas cumpliendo con Impuestos Nacionales, sin dolores de cabeza.
        </h2>

        <article className="mt-14 block overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-elevated">
          <div className="grid md:grid-cols-5">
            {/* visual — fiscal document */}
            <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-border bg-[oklch(0.18_0.035_256)]">
              <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
              <div
                aria-hidden
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.65 0.18 50 / 0.35), transparent 70%)",
                }}
              />

              {/* phone mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative h-72 w-48 rotate-[-4deg] rounded-lg border border-border-strong bg-surface-2 p-5 shadow-elevated transition-transform duration-500 hover:rotate-[-2deg]">
                  <div className="flex h-full w-full flex-col gap-4 rounded-md border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <FileCheck2 className="h-7 w-7 text-primary" />
                      <span className="text-[8px] font-bold uppercase text-primary">
                        Factura en línea
                      </span>
                    </div>
                    <div className="space-y-2">
                      <span className="block h-1.5 w-full rounded bg-border-strong" />
                      <span className="block h-1.5 w-4/5 rounded bg-border-strong" />
                      <span className="block h-1.5 w-2/3 rounded bg-border-strong" />
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="text-[10px] font-bold text-foreground">Bs. 1.249,00</div>
                      <QrCode className="h-12 w-12 text-foreground" />
                    </div>
                    <div className="text-[7px] text-muted-foreground">
                      Documento fiscal validado por el SIN
                    </div>
                  </div>
                </div>
              </div>

              {/* logo overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-border bg-background/70 backdrop-blur px-2.5 py-1">
                <ShieldCheck className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-muted-foreground">SIN Bolivia</span>
              </div>
            </div>

            {/* content */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.16_150)] animate-pulse-dot" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.18_150)]" />
                  </span>
                  Cumplimiento fiscal integrado
                </span>
              </div>
              <h3 className="mt-4 font-display font-bold text-2xl md:text-3xl text-foreground">
                Facturalo
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Cubre 13 tipos de documento fiscal del SIN y centraliza todo el proceso de emisión,
                firma, validación y seguimiento.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Listo para integrarse con tu operación
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
