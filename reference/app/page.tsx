import Hero from "@/components/hero"
import About from "@/components/about"
import Events from "@/components/events"
import Team from "@/components/team"
import FAQ from "@/components/faq"
import JoinCTA from "@/components/join-cta"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-white overflow-hidden">
        <Hero />
        <About />
        <Events />
        <Team />
        <FAQ />
        <JoinCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
