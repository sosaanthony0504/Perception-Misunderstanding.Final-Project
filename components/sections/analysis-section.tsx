"use client"

import { useState } from "react"
import { Feather, Repeat, Eye, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

type Work = "story" | "song"

export function AnalysisSection() {
  const [activeWork, setActiveWork] = useState<Work>("story")

  return (
    <section id="analysis" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Literary Examination
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-10">
          Work Analysis
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveWork("story")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                activeWork === "story"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              A Very Old Man with Enormous Wings
            </button>
            <button
              onClick={() => setActiveWork("song")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                activeWork === "song"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Losing My Religion
            </button>
          </div>
        </div>

        {/* Story Analysis */}
        {activeWork === "story" && (
          <div className="animate-in fade-in duration-300">
            {/* Summary */}
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In this short story, a couple named Pelayo and Elisenda discover an old man with huge 
                wings in their courtyard after a rainstorm. Instead of treating him with wonder, the 
                villagers cage him, charge admission to see him, and treat him like a circus attraction. 
                A priest tries to determine if he is a real angel but cannot decide. Eventually, the 
                townspeople lose interest when a new attraction arrives. After years of neglect, the 
                old man finally flies away, and Elisenda watches with relief.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
            <AnalysisCard
              icon={<Feather className="h-5 w-5" />}
              title="Symbolism"
              subtitle="Wings as Misunderstood Miracle"
              content="The old man's wings symbolize the possibility of a miracle or divine presence. However, because the wings are weak and dirty, the villagers doubt his importance and treat him like an object of curiosity instead of something sacred."
            />
            <AnalysisCard
              icon={<Eye className="h-5 w-5" />}
              title="Imagery"
              subtitle="Mud, Feathers, and the Ordinary"
              content="Descriptions of mud, feathers, and the old man's fragile body create vivid imagery that contrasts with the idea of a powerful angel. This contrast emphasizes how the extraordinary can appear ordinary when people don't know how to see it."
            />
            <AnalysisCard
              icon={<Palette className="h-5 w-5" />}
              title="Irony"
              subtitle="Failure to Recognize Compassion"
              content="The villagers claim to believe in religion and miracles, yet they fail to show compassion when faced with a possible miracle. They charge admission to see him and treat him poorly, which is ironic for people who say they value faith."
            />
            <AnalysisCard
              icon={<Repeat className="h-5 w-5" />}
              title="Tone"
              subtitle="Ironic and Detached"
              content="The tone of the story is ironic and detached, which highlights the absurdity of how the villagers treat the old man. The narrator never directly criticizes them but lets their actions speak for themselves."
            />
          </div>
          </div>
        )}

        {/* Song Analysis */}
        {activeWork === "song" && (
          <div className="animate-in fade-in duration-300">
            {/* Summary */}
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Losing My Religion" is a song about unrequited love and the anxiety of not knowing 
                if your feelings are returned. The narrator watches someone he cares about, wondering 
                if he has said too much or not enough. The phrase "losing my religion" is a Southern 
                expression that means losing your patience or composure. The song captures the 
                feeling of being emotionally exposed and fearing that you have embarrassed yourself 
                by revealing too much.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
            <AnalysisCard
              icon={<Feather className="h-5 w-5" />}
              title="Symbolism"
              subtitle="Losing Control & Vulnerability"
              content="The phrase 'losing my religion' symbolizes losing emotional control and feeling overwhelmed by vulnerability. It's a Southern expression meaning losing patience or composure, which fits the narrator's feelings of insecurity."
            />
            <AnalysisCard
              icon={<Repeat className="h-5 w-5" />}
              title="Repetition"
              subtitle="Obsessive Thoughts"
              content="Repeated lines like 'that's me in the corner' and 'I thought that I heard you laughing' emphasize the narrator's obsessive thoughts and uncertainty about whether his feelings are understood or returned."
            />
            <AnalysisCard
              icon={<Eye className="h-5 w-5" />}
              title="Perspective"
              subtitle="First-Person Point of View"
              content="The song uses a first-person perspective that allows listeners to experience the narrator's internal struggle and self-doubt. This makes the song feel personal, like a confession you're overhearing."
            />
            <AnalysisCard
              icon={<Palette className="h-5 w-5" />}
              title="Tone"
              subtitle="Anxious and Vulnerable"
              content="The tone is anxious and vulnerable, reflecting the narrator's fear of rejection or misunderstanding. The mandolin's driving rhythm creates a sense of urgency that matches how it feels when you're waiting for someone to respond to your feelings."
            />
          </div>
          </div>
        )}

        {/* Video Embed */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Listen to the Song</p>
          <div className="max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden border border-border shadow-sm">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xwtdhWltSIg"
              title="R.E.M. - Losing My Religion"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AnalysisCard({
  icon,
  title,
  subtitle,
  content,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  content: string
}) {
  return (
    <div className="bg-background border border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  )
}
