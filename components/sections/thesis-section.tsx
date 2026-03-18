import { Quote } from "lucide-react"

export function ThesisSection() {
  return (
    <section id="thesis" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Central Argument
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-10">
          Thesis Statement
        </h2>
        
        <div className="relative bg-muted rounded-lg p-8 sm:p-10">
          <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
          <blockquote className="font-serif text-lg sm:text-xl text-foreground leading-relaxed text-center">
            Across <em>A Very Old Man with Enormous Wings</em> and <em>Losing My Religion</em>, 
            the use of symbolism, imagery, and ironic tone reveals how people struggle to interpret 
            experiences that challenge their expectations, suggesting that uncertainty often leads 
            individuals to misjudge others or doubt themselves. This idea remains relevant in 2026, 
            when social media encourages quick assumptions without full understanding.
          </blockquote>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-medium">1</span>
            </div>
            <h3 className="font-medium text-foreground mb-1">Symbolism</h3>
            <p className="text-sm text-muted-foreground">Wings and religious imagery represent the unknown</p>
          </div>
          <div className="p-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-medium">2</span>
            </div>
            <h3 className="font-medium text-foreground mb-1">Imagery</h3>
            <p className="text-sm text-muted-foreground">Vivid descriptions create emotional impact</p>
          </div>
          <div className="p-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-medium">3</span>
            </div>
            <h3 className="font-medium text-foreground mb-1">Ironic Tone</h3>
            <p className="text-sm text-muted-foreground">Highlights human flaws and contradictions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
