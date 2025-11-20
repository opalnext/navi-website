import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HardwareOverview } from "@/components/hardware-overview"
import { ModularSystem } from "@/components/modular-system"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white/20 w-screen">
      <Header />
      <Hero />
      <About />
      <HardwareOverview />
      <ModularSystem />
      <Footer />
    </main>
  )
}
