import { BookMarked } from "lucide-react"

export function WorksCitedSection() {
  return (
    <section id="works-cited" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <BookMarked className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-2xl font-medium text-foreground">Works Cited</h2>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">MLA Format</p>
          
          <div className="space-y-6">
            <Citation>
              García Márquez, Gabriel. {"\"A Very Old Man with Enormous Wings.\""} <em>Leaf Storm 
              and Other Stories</em>, translated by Gregory Rabassa, Harper & Row, 1972, pp. 105-112. {" "}
              <a 
                href="https://www.ndsu.edu/pubweb/~cinichol/CreativeWriting/323/MarquezManwithWings.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Read the full story
              </a>
            </Citation>
            
            <Citation>
              R.E.M. {"\"Losing My Religion.\""} <em>Out of Time</em>, Warner Bros. Records, 1991. {" "}
              <a 
                href="https://www.youtube.com/watch?v=xwtdhWltSIg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Watch the music video
              </a>
            </Citation>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Images</p>
            
            <div className="space-y-4">
              <Citation>
                Dianner. <em>Come and See the Angel</em>. Digital illustration depicting scene from 
                {"\"A Very Old Man with Enormous Wings.\""} 
              </Citation>
              
              <Citation>
                R.E.M. <em>Losing My Religion</em> single cover artwork. Warner Bros. Records, 1991.
              </Citation>

              <Citation>
                Portrait of Gabriel García Márquez. Photograph.
              </Citation>

              <Citation>
                R.E.M. band photograph. Black and white promotional image.
              </Citation>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Additional Resources</p>
            
            <div className="space-y-4">
              <AdditionalResource
                title="Nobel Prize in Literature 1982"
                description="Official Nobel Prize page for Gabriel García Márquez"
                url="https://www.nobelprize.org/prizes/literature/1982/marquez/biographical/"
              />
              <AdditionalResource
                title="R.E.M. Official Archive"
                description="Band history and discography"
                url="https://remhq.com"
              />
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          This project compares a short story and a song to show how both deal with misunderstanding.
        </p>
      </div>
    </section>
  )
}

function Citation({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-muted-foreground leading-relaxed pl-8" style={{ textIndent: "-2rem" }}>
      {children}
    </p>
  )
}

function AdditionalResource({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
    >
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </a>
  )
}
