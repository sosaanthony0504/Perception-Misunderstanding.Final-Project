import { Smartphone, Users, MessageCircle, AlertTriangle } from "lucide-react"

export function RelevanceSection() {
  return (
    <section id="relevance" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Modern Applications
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-4">
          Contemporary Relevance
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          How these themes manifest in our digital age of 2026
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <RelevanceCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Quick Judgments Online"
              description="Social media encourages people to form quick opinions about others without fully understanding them. Just like the villagers made assumptions about the old man, we often judge people based on a single post or image."
            />
            <RelevanceCard
              icon={<Users className="h-5 w-5" />}
              title="Lack of Empathy"
              description="Just as the villagers misjudge the old man and the narrator doubts his feelings, people today frequently struggle with misunderstanding and lack of empathy in communication."
            />
          </div>
          <div className="space-y-6">
            <RelevanceCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Lost in Translation"
              description="The narrator's fear of being misunderstood feels even more real now. In texts and DMs, tone is easily lost and people often misread intentions."
            />
            <RelevanceCard
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Seeing What We Want to See"
              description="Online, we often only see what confirms what we already believe. This makes it harder to understand people who think differently from us."
            />
          </div>
        </div>

        {/* Quote block */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 sm:p-10 text-center">
          <p className="font-serif text-xl sm:text-2xl leading-relaxed mb-6">
            {"\"They looked at him so long and so closely that Pelayo and Elisenda very soon overcame their surprise and in the end found him familiar.\""}
          </p>
          <p className="text-sm font-medium mb-4">
            Gabriel García Márquez, "A Very Old Man with Enormous Wings"
          </p>
          <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-4" />
          <p className="text-sm opacity-80">
            This quote shows how quickly the villagers stopped being amazed by the old man. 
            Once something becomes familiar, people stop trying to understand it. 
            The same thing happens today when we scroll past people's stories without really seeing them.
          </p>
        </div>

        {/* Connection block */}
        <div className="bg-secondary/50 border border-border rounded-lg p-6 sm:p-8 mt-12">
          <h3 className="font-serif text-xl font-medium text-foreground mb-4 text-center">Why This Still Matters</h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            The themes of these works are still relevant today. Social media and online communication 
            often encourage people to form quick opinions about others without fully understanding them. 
            Just as the villagers misjudged the old man and the narrator doubted his feelings, 
            people today frequently struggle with misunderstanding and lack of empathy in communication.
          </p>
        </div>
      </div>
    </section>
  )
}

function RelevanceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}


