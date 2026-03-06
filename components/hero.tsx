import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="border border-border rounded-lg bg-card/40 shadow-[0_0_20px_rgba(0,255,120,0.08)]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/60 bg-secondary/40 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-3 font-semibold text-foreground">~/0xmuon</span>
          </div>

          <div className="px-4 py-6 sm:px-6 sm:py-8 space-y-4 font-mono text-sm sm:text-base">
            <p className="text-emerald-400">
              <span className="text-emerald-500">&gt;</span> whoami
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Rudraksh Joshi <span className="text-emerald-400">/</span>{' '}
              <span className="text-emerald-300">0xmuon</span>
            </h1>

            <p className="text-emerald-300">
              <span className="text-emerald-500">&gt;</span>{' '}
              <span className="font-semibold">title:</span> New learner
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Exploring Rust, Next.js, Web3, and the low-level world of bits, bytes, and systems.
              Logging experiments, mistakes, and small wins along the way.
            </p>

            <p className="text-emerald-300 pt-2">
              <span className="text-emerald-500">&gt;</span>{' '}
              <span className="font-semibold">story 0xmuon:</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A muon is a sub-particle of the electron, living deep in the subatomic noise.
              <span className="block mt-1">
                <span className="text-emerald-400">0x</span> comes from the way computers see the world:
                at the end it is all low-level stuff — bits, bytes, assembly, and hex.
              </span>
              <span className="block mt-1">
                <span className="text-emerald-300">0xmuon</span> is my way of combining that tiny particle with
                the low-level side of computing — a reminder to stay curious, stay small, and keep learning.
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-xs sm:text-sm mt-4 text-muted-foreground">
          <a 
            href="https://github.com/0xmuon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition"
          >
            GitHub
          </a>
          <span className="text-border">•</span>
          <a 
            href="https://linkedin.com/in/rudraksh-j" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition"
          >
            LinkedIn
          </a>
          <span className="text-border">•</span>
          <a 
            href="https://x.com/0xmuon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition"
          >
            Twitter
          </a>
          <span className="text-border">•</span>
          <a 
            href="mailto:rudrakshjoshic@gmail.com"
            className="hover:text-emerald-300 transition"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
