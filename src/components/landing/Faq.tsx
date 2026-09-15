import { SectionLabel } from "./SectionLabel";

const questions = [
  {
    question: "¿Es compatible con Impuestos Nacionales Bolivia?",
    answer:
      "Sí, Facturalo cumple con la RND 102400000021 y todas las actualizaciones vigentes del SIN.",
  },
  {
    question: "¿Puedo migrar mi información actual desde Odoo u otro ERP?",
    answer:
      "Sí. Contamos con herramientas de importación para clientes, proveedores, plan de cuentas, tipos de cambio, categorías y productos.",
  },
  {
    question: "¿Funciona en la nube o puedo instalarlo en mi servidor?",
    answer:
      "Ambas modalidades. Podés elegir BRY Labs Cloud, gestionado por nosotros, o una instalación en tu propia infraestructura.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usarlo?",
    answer:
      "No. Toda la operación diaria se realiza desde una interfaz web moderna. La configuración inicial puede hacerla tu equipo de sistemas o nosotros por vos.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Estamos en La Paz - Bolivia. Atendemos a todo el país de manera remota y presencial cuando se requiere.",
  },
  {
    question: "¿Cómo empiezo?",
    answer: "Escribinos por WhatsApp al +591 64133771 y agendamos una demo de 30 minutos.",
  },
];

export function Faq() {
  return (
    <section
      id="preguntas"
      className="relative border-y border-border bg-surface/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Lo que necesitás saber antes de empezar.
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group border-b border-border py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                {question}
                <span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
