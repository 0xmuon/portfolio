import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="border border-border bg-black">
          <div className="flex items-center justify-between px-2 py-1 bg-[#000080] text-xs text-white">
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 bg-black border border-white" />
              <span className="font-semibold">C:\0xmuon - Command Prompt</span>
            </span>
            <span className="flex items-center gap-1 text-[10px]">
              <span className="border border-white px-1">_</span>
              <span className="border border-white px-1">□</span>
              <span className="border border-white px-1">X</span>
            </span>
          </div>

          <div className="px-3 py-4 sm:px-4 sm:py-5 font-mono text-xs sm:text-sm text-emerald-300 space-y-2">
            <p>C:\&gt; whoami</p>
            <p>Rudraksh Joshi (0xmuon)</p>

            <p className="pt-1">C:\&gt; title</p>
            <p>New learner</p>

            <p className="pt-1">C:\&gt; echo about</p>
            <p>
              exploring Rust, Next.js, Web3 and the low-level side of systems.
              learning in public, one small step at a time.
            </p>

            <p className="pt-1">C:\&gt; type story_0xmuon.txt</p>
            <p>
              muon = a tiny sub-particle of the electron, hiding deep in the noise.
              0x = how computers see the world in hex: bits, bytes, assembly.
            </p>
            <p>
              together, 0xmuon is a reminder to think small, go deep,
              and stay close to the metal while learning.
            </p>

            <p className="pt-1">C:\&gt; _</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-xs sm:text-sm mt-4 text-muted-foreground">
          <a 
            href="https://github.com/0xmuon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-300"
          >
            GitHub
          </a>
          <span className="text-border">•</span>
          <a 
            href="https://linkedin.com/in/rudraksh-j" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-300"
          >
            LinkedIn
          </a>
          <span className="text-border">•</span>
          <a 
            href="https://x.com/0xmuon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-300"
          >
            Twitter
          </a>
          <span className="text-border">•</span>
          <a 
            href="mailto:rudrakshjoshic@gmail.com"
            className="hover:text-emerald-300"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
