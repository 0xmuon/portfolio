import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Featured } from '@/components/featured'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Skills />
      <Featured />
      <Footer />
    </main>
  )
}
