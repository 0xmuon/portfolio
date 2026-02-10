import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-foreground">
          Rudraksh Joshi
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-2">
          GitHub Developer Program Member
        </p>
        
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Building robust applications with Rust, Next.js, and Web3. Currently contributing to the Solana ecosystem.
        </p>

        <div className="flex justify-center gap-4 text-sm">
          <a 
            href="https://github.com/0xmuon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            GitHub
          </a>
          <span className="text-border">•</span>
          <a 
            href="https://linkedin.com/in/rudraksh-j" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <span className="text-border">•</span>
          <a 
            href="https://x.com/0xmuon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Twitter
          </a>
          <span className="text-border">•</span>
          <a 
            href="mailto:rudrakshjoshic@gmail.com"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
