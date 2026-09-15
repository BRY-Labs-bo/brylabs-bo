import { CalendarCheck2, FileSignature, Landmark, Radio, ScanLine, TicketCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const whatsapp = "https://wa.me/59164133771";

const solutions = [
  {
    icon: FileSignature,
    title: "Cotizaciones",
    tagline: "Generá cotizaciones profesionales en minutos y convertilas en ventas cuando el cliente acepte.",
    features: ["Plantillas personalizables", "Link por WhatsApp o email", "Aprobación digital", "Conversión a venta en 1 click", "Control de vencimiento y estado", "API REST"],
    ideal: "Servicios, importadores, repuestos y distribuidores mayoristas.",
    link: `${whatsapp}?text=Hola%20BRY%20Labs%2C%20quiero%20info%20sobre%20Cotizaciones`,
  },
  {
    icon: ScanLine,
    title: "Pagos y Cobros QR",
    tagline: "Cobrá desde tu celular con QR y llevá el control automático en tu contabilidad.",
    features: ["QR estático o dinámico", "Billeteras bolivianas", "Conciliación automática", "Integración con Facturalo", "Reportes por vendedor o sucursal", "Aviso instantáneo de pago"],
    ideal: "Comercios, delivery, profesionales y cobradores en ruta.",
    link: whatsapp,
  },
  {
    icon: CalendarCheck2,
    title: "Homologa",
    tagline: "Mapeá tus productos y servicios a los códigos oficiales SIN sin equivocarte.",
    features: ["Homologación con códigos CAEB", "Buscador inteligente", "Catálogo SIN actualizado", "Sincronización con Scibol", "Alertas de actualización", "Exportación a Excel"],
    ideal: "Importadores, distribuidores y empresas que migran de ERP.",
    link: whatsapp,
  },
  {
    icon: Landmark,
    title: "Bancarizalo",
    tagline: "Cumplí con la bancarización SIN sin complicaciones y generá reportes listos para Impuestos.",
    features: ["Contratos de bancarización", "Reporte oficial SIN", "Vinculación con operaciones", "Multi-moneda", "Control de vencimientos", "Reglas personalizables", "Auditoría completa", "Uso standalone"],
    ideal: "Empresas con bancarización obligatoria y consultoras contables.",
    link: whatsapp,
  },
];

export function Solutions() {
  return (
    <section id="soluciones" className="relative overflow-hidden border-y border-border bg-surface/40 py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>Grupo 2 · Soluciones adicionales</SectionLabel>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Herramientas que acompañan cada etapa de tu operación.</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="gradient-border rounded-xl border border-primary/30 bg-card/90 p-7 shadow-elevated md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3"><Radio className="h-8 w-8 text-primary" /><span className="rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">Próximamente</span></div>
            <p className="mt-6 text-xs font-semibold uppercase text-primary">Live Commerce para TikTok</p>
            <h3 className="mt-2 font-display text-3xl font-bold">Vendelo</h3>
            <p className="mt-4 text-muted-foreground">Convertí tus transmisiones de TikTok en una experiencia de compra fluida. El Comprador descubre, reserva y adquiere productos directamente durante el LIVE.</p>
            <p className="mt-4 text-sm text-muted-foreground">Vendelo es la plataforma de live commerce nativa para TikTok creada por BRY Labs. Marcas, creadores y comercios monetizan sin fricción: el Comprador nunca abandona el LIVE.</p>
            <FeatureList items={["Product Timeline™ — productos sincronizados con el LIVE", "Smart MiniBar™ — carrito, reserva, preguntas y compartir", "App nativa para Comprador y Vendedor", "Zero Installation — acceso web como PWA", "Buyer, Seller y Admin con permisos estrictos", "Escala desde MVP a Enterprise"]} />
            <p className="mt-5 text-sm"><strong>Ideal para:</strong> marcas, creadores y comercios que venden durante los LIVES.</p>
            <p className="mt-3 text-sm font-semibold text-primary">En construcción · Desarrollo Blueprint-first</p>
            <a href={`${whatsapp}?text=Hola%20BRY%20Labs%2C%20quiero%20sumarme%20a%20la%20lista%20de%20espera%20de%20Vendelo`} className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover">Sumate a la lista de espera</a>
          </article>

          <article className="gradient-border rounded-xl border border-primary/30 bg-card/90 p-7 shadow-elevated md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3"><TicketCheck className="h-8 w-8 text-accent-cyan" /><span className="rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">Disponible</span></div>
            <p className="mt-6 text-xs font-semibold uppercase text-primary">Tickets para eventos en Bolivia</p>
            <h3 className="mt-2 font-display text-3xl font-bold">GooTicket</h3>
            <p className="mt-2 font-display text-lg font-semibold text-accent-cyan">Compra segura, a un clik.</p>
            <p className="mt-4 text-muted-foreground">La plataforma boliviana para descubrir, comprar y vivir los eventos que te mueven.</p>
            <p className="mt-4 text-sm text-muted-foreground">Descubrí conciertos, festivales, teatro, cine y deportes, elegí tu asiento y recibí tu entrada en el celular. Sin filas, intermediarios ni sorpresas.</p>
            <FeatureList items={["Tickets seguros con QR", "Mapa visual de asientos", "Compra en menos de 60 segundos", "Factura con NIT", "App Android y iOS", "Pago seguro y precio transparente", "Lista de espera y cupones", "Login con Google"]} />
            <details className="mt-5 border-t border-border pt-4 text-sm"><summary className="cursor-pointer font-semibold text-foreground">Beneficios para organizadores</summary><p className="mt-3 text-muted-foreground">Dashboard de ventas e impuestos, editor visual de salas, validación offline, cobro directo, precios y cupones configurables, emails automáticos y reportes contables.</p></details>
            <a href={`${whatsapp}?text=Hola%20GooTicket%2C%20quiero%20info%20de%20eventos`} className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover">Ver eventos</a>
            <p className="mt-6 text-xs text-muted-foreground-2">© 2026 GooTicket — Compra segura, a un clik. Todos los derechos reservados.</p>
          </article>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {solutions.map(({ icon: Icon, title, tagline, features, ideal, link }) => (
            <article key={title} className="rounded-xl border border-border bg-card/70 p-7">
              <Icon className="h-7 w-7 text-primary" /><h3 className="mt-4 font-display text-xl font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{tagline}</p>
              <FeatureList items={features} /><p className="mt-4 text-xs text-muted-foreground"><strong className="text-foreground">Ideal para:</strong> {ideal}</p>
              <a href={link} className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-accent-cyan">Consultar por WhatsApp →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-2"><span className="text-primary">✓</span><span>{item}</span></li>)}</ul>;
}