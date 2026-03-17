import { Check } from "lucide-react"

export function CompareSection() {
  return (
    <section id="compare" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Side by Side
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-12">
          Comparative Analysis
        </h2>

        {/* Similarities */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px flex-1 bg-border max-w-20" />
            <h3 className="font-serif text-xl font-medium text-foreground px-4">Similarities</h3>
            <div className="h-px flex-1 bg-border max-w-20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SimilarityCard
              title="Theme of Misunderstanding"
              description="Both works explore misunderstanding and uncertainty. The villagers misjudge the old man because he doesn't match their expectations of an angel. The narrator fears that his emotions will be misunderstood by someone he cares about."
            />
            <SimilarityCard
              title="Uncertainty Without Resolution"
              description="Neither work gives you a clear answer at the end. We never find out exactly what the old man is, and the narrator never knows if his feelings are understood or returned."
            />
            <SimilarityCard
              title="Vulnerability & Being Seen"
              description="The angel is put on display for people to gawk at. The narrator feels exposed 'in the spotlight.' Both explore what it feels like to be seen without being understood."
            />
          </div>
        </div>

        {/* Differences */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px flex-1 bg-border max-w-20" />
            <h3 className="font-serif text-xl font-medium text-foreground px-4">Differences</h3>
            <div className="h-px flex-1 bg-border max-w-20" />
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-muted text-center">
              <div className="p-4 border-r border-border">
                <p className="text-sm font-medium text-foreground">Aspect</p>
              </div>
              <div className="p-4 border-r border-border">
                <p className="text-sm font-medium text-foreground">A Very Old Man...</p>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Losing My Religion</p>
              </div>
            </div>

            <ComparisonRow
              aspect="Conflict Type"
              story="External: villagers vs. the angel"
              song="Internal: narrator vs. self-doubt"
            />
            <ComparisonRow
              aspect="Perspective"
              story="Third-person, detached observer"
              song="First-person, intimate confession"
            />
            <ComparisonRow
              aspect="Tone"
              story="Ironic and matter-of-fact"
              song="Anxious and emotionally raw"
            />
            <ComparisonRow
              aspect="Medium"
              story="Prose narrative with magical realism"
              song="Lyrics with musical accompaniment"
            />
            <ComparisonRow
              aspect="Resolution"
              story="Angel departs; villagers unchanged"
              song="Unresolved emotional uncertainty"
              isLast
            />
          </div>
        </div>

        {/* Visual comparison */}
        <div className="mt-12 bg-secondary/50 border border-border rounded-lg p-6 sm:p-8">
          <h3 className="font-serif text-xl font-medium text-foreground mb-4 text-center">The Key Difference</h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            The short story uses narrative events and symbolism to critique society from the outside. 
            We watch the villagers fail to understand the old man. The song uses lyrics and repetition 
            to express personal emotional conflict from the inside. We feel what the narrator feels. 
            Both explore misunderstanding, but one points outward at others while the other points inward at ourselves.
          </p>
        </div>
      </div>
    </section>
  )
}

function SimilarityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Check className="h-3.5 w-3.5 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-foreground text-sm mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ComparisonRow({
  aspect,
  story,
  song,
  isLast = false,
}: {
  aspect: string
  story: string
  song: string
  isLast?: boolean
}) {
  return (
    <div className={`grid grid-cols-3 ${!isLast ? "border-b border-border" : ""}`}>
      <div className="p-4 border-r border-border bg-muted/50">
        <p className="text-sm font-medium text-foreground">{aspect}</p>
      </div>
      <div className="p-4 border-r border-border">
        <p className="text-sm text-muted-foreground">{story}</p>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground">{song}</p>
      </div>
    </div>
  )
}
