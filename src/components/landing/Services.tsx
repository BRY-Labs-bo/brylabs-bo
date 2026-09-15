import { ShoppingCart, Package, Landmark, Users, ReceiptText, ChartNoAxesCombined, type LucideIcon } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  {
    icon: ShoppingCart,
    title: "Ventas y compras",
    desc: "Gestioná todo el ciclo comercial desde una sola plataforma.",
  },
  {
    icon: Package,
    title: "Inventarios",
    desc: "Controlá existencias, movimientos y múltiples almacenes o sucursales.",
  },
  {
    icon: Landmark,
    title: "Caja y bancos",
    desc: "Ordená ingresos, egresos y movimientos financieros de tu negocio.",
  },
  {
    icon: Users,
    title: "Clientes y proveedores",
    desc: "Centralizá datos, saldos y relaciones comerciales.",
  },
  {
    icon: ReceiptText,
    title: "Contabilidad y tributos",
    desc: "Incluye gastos, contabilidad y gestión tributaria con reportes claros.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Reportes formato ODOO",
    desc: "Consultá información operativa y contable en formatos familiares.",
  },
];

export function Services() {
  return (
    <section id="productos" className="relative py-24 md:py-32 bg-surface/40 border-y border-border overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Scibol · ERP integrado</SectionLabel>
        <h2 className="mt-5 font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)]">
          Todo lo que tu negocio necesita para vender, comprar, controlar stock y llevar la contabilidad.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="gradient-border group relative rounded-xl border border-border bg-card/70 backdrop-blur p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:border-primary/30"
            >
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary border border-primary/20 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_24px_oklch(0.64_0.19_256/0.5)]">
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

        <div className="mt-8 rounded-xl border border-primary/20 bg-primary-soft p-6">
          <p className="font-display font-semibold text-foreground">Pensado para la operación real de empresas bolivianas.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Contabilidad devengada opcional", "Multi-empresa y multi-sucursal", "NIIF 21", "Anulaciones auditables"].map((item) => (
              <span key={item} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
