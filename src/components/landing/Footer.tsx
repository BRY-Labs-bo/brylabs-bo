export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <a href="#top" className="font-display font-extrabold text-lg text-foreground">
          BRY <span className="text-primary">Labs</span>
        </a>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li>
            <a href="#productos" className="hover:text-foreground">
              Productos
            </a>
          </li>
          <li>
            <a href="#por-que" className="hover:text-foreground">
              Por qué BRY Labs
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-foreground">
              Contacto
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground">
              Política de privacidad
            </a>
          </li>
        </ul>

        <p className="text-xs text-muted-foreground-2">
          © 2026 BRY Labs — Business Result Yield · La Paz - Bolivia · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
