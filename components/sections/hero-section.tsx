import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm text-muted-foreground mb-4 space-y-1">
          <p className="font-medium">Anthony Sosa</p>
          <p>LIT 2000 | Miami Dade College Dual Enrollment</p>
          <p>March 15, 2026</p>
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          A Comparative Literary Analysis
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-tight text-balance mb-6">
          Perception & Misunderstanding
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mb-8" />
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          This project compares two works from different genres that both explore how people react 
          when they do not fully understand something.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[3/4] relative">
              <img 
                src="/images/angel-artwork.jpg" 
                alt="Artwork depicting villagers charging admission to see the angel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-5 py-4 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Short Story</p>
              <p className="font-serif text-foreground">A Very Old Man with Enormous Wings</p>
              <p className="text-sm text-muted-foreground">Gabriel García Márquez</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[3/4] relative">
              <img 
                src="/images/rem-losing-religion.jpg" 
                alt="R.E.M. Losing My Religion album artwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-5 py-4 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Song</p>
              <p className="font-serif text-foreground">Losing My Religion</p>
              <p className="text-sm text-muted-foreground">R.E.M.</p>
            </div>
          </div>
        </div>
        <a 
          href="#thesis" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Explore the Analysis</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
