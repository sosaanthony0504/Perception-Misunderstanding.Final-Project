import { Heart } from "lucide-react"

export function ConclusionSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Heart className="h-7 w-7 text-primary" />
        </div>
        
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
          Final Thoughts
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-8">
          Conclusion
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Both <em className="text-foreground">A Very Old Man with Enormous Wings</em> and 
            <em className="text-foreground"> Losing My Religion</em> demonstrate how misunderstanding 
            can shape human relationships.
          </p>
          
          <p>
            Through symbolism, tone, and perspective, these works show that assumptions often 
            prevent people from recognizing deeper meaning or empathy. The villagers miss 
            something potentially miraculous because it doesn't look the way they expected. 
            The narrator suffers because he doesn't know if his feelings are understood.
          </p>

          <div className="py-6">
            <div className="w-16 h-px bg-border mx-auto" />
          </div>

          <p className="font-serif text-lg text-foreground">
            By comparing these two works, we can see how literature and music both explore 
            the importance of <strong>understanding others</strong> before making judgments about them.
          </p>
        </div>
      </div>
    </section>
  )
}
