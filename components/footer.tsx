export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-lg text-foreground mb-2">
          Perception & Misunderstanding
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          A Comparative Literary Analysis
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>Anthony Sosa</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>Lit2000 Final Project</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  )
}
