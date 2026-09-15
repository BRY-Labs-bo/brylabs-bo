import { useEffect, useState } from "react";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#plataformas", label: "Plataformas" },
  { href: "#por-que", label: "Por qué BRY Labs" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-foreground">
          <span className="text-sm font-extrabold leading-none sm:text-base">
            BRY <span className="text-primary">Labs</span>
            <span className="font-medium text-muted-foreground"> — Business Result Yield</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/59164133771"
          className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-[0_0_20px_oklch(0.64_0.19_256/0.35)]"
        >
          Solicitar demo
        </a>

        <button
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-md hover:bg-surface-2"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/59164133771"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
