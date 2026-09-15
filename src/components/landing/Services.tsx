import { CheckCircle2, type LucideIcon, ShoppingCart, Package, Landmark, Users, ReceiptText, ChartNoAxesCombined, BookOpen, WalletCards, ClipboardList } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const modules: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShoppingCart, title: "Ventas", desc: "Cotizaciones, ventas al contado y crédito, cuentas por cobrar, cobranzas y morosidad." },
  { icon: ClipboardList, title: "Compras", desc: "Órdenes, importaciones con prorrateo, cuentas por pagar y pagos con bancarización SIN." },
  { icon: Package, title: "Inventarios", desc: "Kardex valorizado, ajustes y traslados entre sucursales." },
  { icon: Landmark, title: "Caja y Bancos", desc: "Sesiones POS con arqueo, movimientos bancarios y conciliación." },
  { icon: Users, title: "Clientes y Proveedores", desc: "NIT, límites de crédito, términos de pago e historial completo." },
  { icon: WalletCards, title: "Gastos", desc: "Adjuntos, categorías, bancarización SIN y recurrencia." },
  { icon: BookOpen, title: "Contabilidad", desc: "Asientos automáticos, Libro Diario, Mayor, Balance y Estado de Resultados." },
  { icon: ReceiptText, title: "Tributos", desc: "Libro de Compras y Ventas SIN, conciliación IVA y reportes fiscales." },
  { icon: ChartNoAxesCombined, title: "Reportes formato ODOO", desc: "Compras, Ventas, Inventario y Libro Mayor listos para tu contador." },
];

const differentiators = [
  ["Contabilidad devengada opcional", "Las ventas generan cuentas por cobrar al confirmar; tu contador te lo va a agradecer."],
  ["Multi-empresa y multi-sucursal", "Un usuario opera en varias empresas con permisos distintos."],
  ["NIIF 21", "Diferencia cambiaria explícita en operaciones multi-moneda."],
  ["Anulaciones auditables", "Nada se borra: todo se reversa con trazabilidad completa."],
];

export function Services() {
  return (
    <section id="productos" className="relative overflow-hidden border-y border-border bg-surface/40 py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Grupo 1 · Productos principales</SectionLabel>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-primary">Scibol · ERP integrado</p>
            <h2 className="mt-2 max-w-3xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
              Todo lo que tu negocio necesita para vender, comprar, controlar stock y llevar la contabilidad.
            </h2>
          </div>
          <a href="https://wa.me/59164133771" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover">Agendar demo</a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="gradient-border group rounded-xl border border-border bg-card/70 p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {differentiators.map(([title, desc]) => (
            <article key={title} className="rounded-xl border border-primary/20 bg-primary-soft p-6">
              <h3 className="flex items-center gap-2 font-display font-semibold"><CheckCircle2 className="h-4 w-4 text-primary" />{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}