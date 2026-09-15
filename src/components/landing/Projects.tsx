import { CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const documents = ["Compra-Venta, Notas de Débito y Crédito, Prevalorada", "Boleto Aéreo, Telecomunicaciones, Turismo", "Sector Educativo, Salud, Zona Franca", "Hidrocarburos, Compra Directa, Notas de Ajuste"];
const features = [
  ["Modalidades SIN", "OnLine, Masivo, Prevalorada y Contingencia"],
  ["CUFD/CUIS", "Renovación automática con alertas de vencimiento"],
  ["Firma XMLDSig SHA-256", "XSD validado contra schema SIN"],
  ["PDF con código QR", "Listo para tu cliente"],
  ["Bitácora SIN", "Registro completo para auditoría"],
  ["Multi-emisor y multi-punto", "Varios NITs o sucursales"],
  ["Alertas", "Certificado por vencer o comunicación SIN caída"],
  ["WebComponent embebible", "Emití desde tu sitio con <facturalo-emitir>"],
  ["API REST", "OAuth 2.0 para integraciones server-to-server"],
];

export function Projects() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Facturalo · Facturación Electrónica SIN Bolivia</SectionLabel>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
          <h2 className="max-w-4xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Emití facturas electrónicas cumpliendo con Impuestos Nacionales, sin dolores de cabeza.</h2>
          <a href="https://wa.me/59164133771" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover">Agendar demo</a>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <article className="rounded-xl border border-border bg-card/70 p-7 lg:col-span-2">
            <FileCheck2 className="h-10 w-10 text-primary" />
            <h3 className="mt-5 font-display text-xl font-bold">13 tipos de documento fiscal SIN</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {documents.map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </article>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {features.map(([title, desc]) => (
              <article key={title} className="rounded-lg border border-border bg-surface/60 p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}