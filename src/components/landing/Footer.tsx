export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div><a href="#top" className="font-display text-lg font-extrabold">BRY <span className="text-primary">Labs</span></a><p className="mt-1 text-sm text-muted-foreground">Business Result Yield</p></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"><a href="#productos" className="hover:text-foreground">Productos</a><a href="#soluciones" className="hover:text-foreground">Soluciones</a><a href="#por-que" className="hover:text-foreground">Por qué BRY Labs</a><a href="#preguntas" className="hover:text-foreground">Preguntas</a></nav>
          <div className="text-sm text-muted-foreground"><a href="https://wa.me/59164133771" className="block hover:text-foreground">+591 64133771</a><a href="mailto:contacto@brylabs.bo" className="block hover:text-foreground">contacto@brylabs.bo</a><p>brylabs.bo · La Paz - Bolivia</p></div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground-2">© 2026 BRY Labs — Business Result Yield · La Paz - Bolivia · Todos los derechos reservados</p>
      </div>
    </footer>
  );
}