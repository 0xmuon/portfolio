import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const allProjects = [
  {
    title: 'FightScript',
    year: '2025',
    description: 'Decentralized ecosystem for AI development and competition powered by Solana. Smart contracts written in Rust. Raised 2500 USD as a tiny grant from Superteam.',
    tags: ['Rust', 'Solana', 'Blockchain', 'AI', 'Web3'],
    link: 'https://fightscript.vercel.app/',
    github: 'https://github.com/0xmuon/fightscript'
  },
  {
    title: 'bootRS',
    year: '2025',
    description: 'Low-level bootloader written in Rust supporting both legacy BIOS and UEFI systems for x86_64 architecture. Demonstrates deep systems programming knowledge.',
    tags: ['Rust', 'Systems Programming', 'UEFI', 'x86_64', 'Assembly'],
    link: 'https://github.com/0xmuon/bootRS',
    github: 'https://github.com/0xmuon/bootRS'
  },
  {
    title: 'Warranty Fraud Detection System',
    year: '2025',
    description: 'Data-driven fraud detection model achieving 92% accuracy. Performed data cleaning, feature engineering, and model optimization to enhance prediction accuracy and reduce false positives.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/0xmuon/Warranty-fraud-detection-system',
    github: 'https://github.com/0xmuon/Warranty-fraud-detection-system'
  }
]

const skills = {
  'Languages': ['Rust', 'C++', 'HTML5', 'CSS3', 'MySQL', 'Python'],
  'Frameworks & Libraries': ['Next.js', 'React.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Solana CLI/Anchor'],
  'Technologies & Platforms': ['Docker', 'Kubernetes (K8s)', 'Nginx', 'REST APIs', 'WebSockets'],
  'Developer Tools': ['VS Code', 'GitHub', 'GitLab', 'Git', 'Linux/WSL']
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground mb-8">
            See all my projects on{' '}
            <a 
              href="https://github.com/0xmuon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition"
            >
              GitHub
            </a>
          </p>

          <div className="grid gap-12 mb-20">
            {allProjects.map((project, index) => (
              <div 
                key={index}
                className="group border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
                  </div>
                </div>

                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition flex items-center gap-2 font-medium text-sm"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition flex items-center gap-2 font-medium text-sm"
                  >
                    Source Code <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index}>
                  <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-sm px-3 py-2 rounded-full bg-secondary text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
