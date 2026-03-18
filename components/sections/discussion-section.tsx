"use client"

import { useState } from "react"
import { MessageSquare, PenLine, Send, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const discussionQuestions = [
  "Why do people judge others before fully understanding them?",
  "Have you ever felt misunderstood? How did it affect you?",
  "How does social media change the way we perceive others?",
  "Can uncertainty ever be a positive experience?",
]

export function DiscussionSection() {
  const [reflection, setReflection] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reflection.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="discussion" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Engage with the Material
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-12">
          Audience Interaction
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Discussion Questions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Discussion Questions</h3>
            </div>

            <div className="space-y-3">
              {discussionQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  className={cn(
                    "w-full text-left bg-card border border-border rounded-lg p-4 transition-colors hover:border-primary/50",
                    expandedQuestion === index && "border-primary"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-sm text-foreground">{question}</p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform flex-shrink-0",
                        expandedQuestion === index && "rotate-180"
                      )}
                    />
                  </div>
                  {expandedQuestion === index && (
                    <div className="mt-3 ml-9 pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Consider how both works explore this theme. What examples from your own 
                        experience connect to this question?
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Reflection Prompt */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <PenLine className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Personal Reflection</h3>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Reflect on a time when you were misunderstood or misjudged someone else:
                  </label>
                  <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    placeholder="Write your thoughts here..."
                    className="w-full h-32 px-3 py-2 text-sm bg-background border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring mb-4 text-foreground placeholder:text-muted-foreground"
                  />
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Reflection
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Thank you for reflecting!</h4>
                  <p className="text-sm text-muted-foreground">
                    Taking time to consider these themes helps deepen understanding.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setReflection("")
                    }}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Write another reflection
                  </button>
                </div>
              )}
            </div>

<p className="text-xs text-muted-foreground mt-4 text-center">
            Your reflection stays private and is meant for personal learning.
          </p>
        </div>
      </div>

      {/* Follow-up Resources */}
      <div className="mt-12 bg-card border border-border rounded-lg p-6 sm:p-8">
        <h3 className="font-serif text-xl font-medium text-foreground mb-4 text-center">
          Learn More & Get Involved
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Want to explore these themes further? Check out these resources:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ResourceLink
            title="HistoryMiami Museum"
            description="Explore Miami's cultural history and immigrant stories"
            url="https://historymiami.org"
          />
          <ResourceLink
            title="Cuban Heritage Collection"
            description="University of Miami's archive of Cuban history and culture"
            url="https://library.miami.edu/chc"
          />
          <ResourceLink
            title="StopBullying.gov"
            description="Resources about understanding and preventing judgment"
            url="https://www.stopbullying.gov"
          />
          <ResourceLink
            title="Mental Health America"
            description="Support for those feeling misunderstood or anxious"
            url="https://www.mhanational.org"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

function ResourceLink({
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
      className="block p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
    >
      <p className="text-sm font-medium text-foreground mb-1">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </a>
  )
}
