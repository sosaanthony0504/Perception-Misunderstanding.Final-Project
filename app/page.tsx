import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ThesisSection } from "@/components/sections/thesis-section"
import { ContextSection } from "@/components/sections/context-section"
import { AnalysisSection } from "@/components/sections/analysis-section"
import { CompareSection } from "@/components/sections/compare-section"
import { RelevanceSection } from "@/components/sections/relevance-section"
import { DiscussionSection } from "@/components/sections/discussion-section"
import { ConclusionSection } from "@/components/sections/conclusion-section"
import { WorksCitedSection } from "@/components/sections/works-cited-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ThesisSection />
      <ContextSection />
      <AnalysisSection />
      <CompareSection />
      <RelevanceSection />
      <DiscussionSection />
      <ConclusionSection />
      <WorksCitedSection />
      <Footer />
    </main>
  )
}
