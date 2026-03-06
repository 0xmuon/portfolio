import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto font-mono text-xs sm:text-sm text-emerald-300 space-y-2">
          <p>C:\&gt; about</p>
          <p className="ml-2 text-emerald-200">
            printing a short log of where I am and what I&apos;m learning...
          </p>

          <p className="pt-2">C:\&gt; echo who_is_rudraksh</p>
          <p className="ml-2">
            new learner from Surat, Gujarat. currently doing B.Tech in Electrical Engineering at SVNIT and
            exploring systems programming, web dev and Web3.
          </p>

          <p className="pt-2">C:\&gt; echo journey</p>
          <p className="ml-2">
            started with problem solving and competitive programming. gradually moved closer to the metal with Rust,
            then upward into full-stack work and Solana / Web3 experiments.
          </p>

          <p className="pt-2">C:\&gt; echo current_focus</p>
          <p className="ml-2">
            building and shipping tiny things: FightScript on Solana, a Rust bootloader, and small tools that teach me
            more about how computers work under the hood.
          </p>

          <p className="pt-2">C:\&gt; echo outside_code</p>
          <p className="ml-2">
            involved in communities, running clubs, conferences, and staying active. treating learning as a long-term
            run, not a sprint.
          </p>

          <p className="pt-2">C:\&gt; echo tech_stack</p>
          <p className="ml-2">
            rust, c++, python, html/css, js/ts, next.js, react, express, solana + anchor, docker, k8s, nginx, git,
            linux/wsl and whatever else helps me understand systems better.
          </p>

          <p className="pt-2">C:\&gt; _</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
