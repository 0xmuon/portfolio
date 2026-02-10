import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'FightScript',
    year: '2025',
    description: 'Decentralized ecosystem for AI development and competition powered by Solana. Raised 2500 USD from Superteam.',
    tags: ['Rust', 'Solana', 'Blockchain', 'AI'],
    link: 'https://fightscript.vercel.app/',
    github: 'https://github.com/0xmuon/fightscript'
  },
  {
    title: 'bootRS',
    year: '2025',
    description: 'Low-level bootloader written in Rust supporting both legacy BIOS and UEFI systems for x86_64 architecture.',
    tags: ['Rust', 'Systems Programming', 'UEFI', 'x86_64'],
    link: 'https://github.com/0xmuon/bootRS',
    github: 'https://github.com/0xmuon/bootRS'
  },
  {
    title: 'Warranty Fraud Detection',
    year: '2025',
    description: 'Machine learning model achieving 92% accuracy for detecting warranty claim fraud using scikit-learn and data engineering.',
    tags: ['Python', 'ML', 'Data Science', 'Scikit-learn'],
    link: 'https://github.com/0xmuon/Warranty-fraud-detection-system',
    github: 'https://github.com/0xmuon/Warranty-fraud-detection-system'
  }
]

export function Featured() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Featured Projects
          </h2>
          <a 
            href="https://github.com/0xmuon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-accent hover:text-accent/80 transition flex items-center gap-1"
          >
            View all <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border border-border rounded-lg p-6 hover:border-accent hover:bg-secondary/50 transition-all"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.year}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition flex items-center gap-1"
                >
                  View <ArrowRight className="w-3 h-3" />
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition flex items-center gap-1"
                >
                  Code <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
