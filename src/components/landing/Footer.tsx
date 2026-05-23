export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          BRY<span className="text-primary">.</span>Labs
        </a>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li><a href="#servicios" className="hover:text-foreground">Servicios</a></li>
          <li><a href="#nosotros" className="hover:text-foreground">Nosotros</a></li>
          <li><a href="#contacto" className="hover:text-foreground">Contacto</a></li>
          <li><a href="#" className="hover:text-foreground">Política de privacidad</a></li>
        </ul>

        <p className="text-xs text-muted-foreground">
          brylabs.bo · La Paz, Bolivia · © 2026 BRY Labs
        </p>
      </div>
    </footer>
  );
}
