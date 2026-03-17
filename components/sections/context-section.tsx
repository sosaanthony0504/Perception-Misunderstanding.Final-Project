import { BookOpen, Music } from "lucide-react"

export function ContextSection() {
  return (
    <section id="context" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Background Information
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-12">
          Historical Context
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* García Márquez */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/images/garcia-marquez-real.webp" 
                alt="Gabriel García Márquez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Gabriel García Márquez</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Colombian author who won the Nobel Prize in Literature in 1982. García Márquez is 
              one of the most important writers of the 20th century. He helped create the literary 
              style known as <a href="https://www.britannica.com/art/magic-realism" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold underline underline-offset-2 hover:text-primary transition-colors">magical realism</a>.
            </p>
            
            <div className="border-l-2 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <p className="text-sm font-medium text-foreground mb-1">Magical Realism</p>
              <p className="text-sm text-muted-foreground">
                A writing style that blends realistic fiction with fantastical elements, 
                treating the supernatural as ordinary. This style allows García Márquez to explore 
                deep truths about human nature through strange circumstances.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              <em>A Very Old Man with Enormous Wings</em> (1968) is a great example of this style. 
              It places an angel-like figure in an ordinary village setting to show how people 
              behave when faced with something they cannot explain.
            </p>
            </div>
          </div>

          {/* R.E.M. */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/images/rem-band-real.webp" 
                alt="R.E.M. band members"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Music className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">R.E.M.</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              R.E.M. formed in Athens, Georgia in 1980 and became one of the most influential 
              alternative rock bands. The group was known for lyrics that were hard to figure out 
              but emotionally powerful.
            </p>
            
            <div className="border-l-2 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <p className="text-sm font-medium text-foreground mb-1">{"\"Losing My Religion\""}</p>
              <p className="text-sm text-muted-foreground">
                This Southern American expression does not refer to religious faith. Instead, 
                it means {"\"at my wit's end\""} or {"\"losing control of one's temper or emotions.\""} 
                The phrase captures the frustration of feeling misunderstood.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              Released in 1991, the song explores unrequited love and the anxiety of being 
              vulnerable. Lead singer Michael Stipe has described it as a song about 
              {"\"obsession and unrequited love.\""}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
