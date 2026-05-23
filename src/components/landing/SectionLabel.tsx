export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary">
      <span className="w-6 h-px bg-primary" />
      {children}
    </div>
  );
}
