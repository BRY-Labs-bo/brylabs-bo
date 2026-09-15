import { SectionLabel } from "./SectionLabel";

const questions = [
  ["¿Es compatible con Impuestos Nacionales Bolivia?", "Sí. Facturalo cumple con la RND 102400000021 y las actualizaciones vigentes del SIN."],
  ["¿Puedo migrar mi data actual desde Odoo u otro ERP?", "Sí. Tenemos herramientas de importación para clientes, proveedores, plan de cuentas, tipos de cambio, categorías y productos."],
  ["¿Corre en la nube o me lo instalo en mi servidor?", "Ambas modalidades: BRY Labs Cloud, gestionado por nosotros, o instalación en tu propia infraestructura."],
  ["¿Necesito conocimientos técnicos para usarlo?", "No. La operación diaria se realiza desde una interfaz web moderna. Nosotros podemos hacer la configuración inicial por vos."],
  ["¿Los productos se pueden usar por separado?", "Sí. Cotizaciones, Pagos QR, Homologa, Bancarizalo y Facturalo funcionan por separado; combinados, se integran automáticamente."],
  ["¿Qué billeteras bolivianas soporta Pagos y Cobros QR?", "Trabajamos con las principales del país: Banco Unión, BCP, BNB, Fassil, Ganadero, Fie, entre otras. Consultanos por la lista actualizada."],
  ["¿Homologa funciona sin Scibol?", "Sí. Podés usarlo con tu sistema actual y exportar el resultado a Excel para tu contador."],
  ["¿Bancarizalo cubre el reporte oficial SIN?", "Sí. Genera el archivo en el formato exigido por Impuestos Nacionales, listo para presentar."],
  ["¿Vendelo ya está disponible?", "Vendelo está en fase final de construcción con acceso temprano por lista de espera. Escribinos para sumarte."],
  ["¿Vendelo funciona con otros ecosistemas además de TikTok?", "Vendelo está diseñado para TikTok LIVE. Otros ecosistemas están considerados para después del lanzamiento inicial."],
  ["¿GooTicket es solo para eventos grandes?", "No. Sirve para conciertos y festivales, así como teatro, actividades educativas y eventos comunitarios."],
  ["¿Dónde están ubicados?", "En La Paz - Bolivia. Damos servicio a todo el país, de forma remota y presencial cuando se requiere."],
  ["¿Cómo empiezo?", "Escribinos por WhatsApp al +591 64133771 y agendamos una demo de 30 minutos."],
];

export function Faq() {
  return (
    <section id="preguntas" className="relative border-y border-border bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Preguntas frecuentes</SectionLabel><h2 className="mt-5 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Lo que necesitás saber antes de empezar.</h2>
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {questions.map(([question, answer]) => <details key={question} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">{question}<span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}