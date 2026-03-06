import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'

const allProjects = [
  {
    title: 'FightScript',
    year: '2025',
    description:
      'Decentralized ecosystem for AI development and competition powered by Solana. Smart contracts written in Rust. Raised 2500 USD as a tiny grant from Superteam.',
    tags: ['Rust', 'Solana', 'Blockchain', 'AI', 'Web3'],
    link: 'https://fightscript.vercel.app/',
    github: 'https://github.com/0xmuon/fightscript'
  },
  {
    title: 'bootRS',
    year: '2025',
    description:
      'Low-level bootloader written in Rust supporting both legacy BIOS and UEFI systems for x86_64 architecture. Demonstrates deep systems programming knowledge.',
    tags: ['Rust', 'Systems Programming', 'UEFI', 'x86_64', 'Assembly'],
    link: 'https://github.com/0xmuon/bootRS',
    github: 'https://github.com/0xmuon/bootRS'
  },
  {
    title: 'Warranty Fraud Detection System',
    year: '2025',
    description:
      'Data-driven fraud detection model achieving 92% accuracy. Performed data cleaning, feature engineering, and model optimization to enhance prediction accuracy and reduce false positives.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/0xmuon/Warranty-fraud-detection-system',
    github: 'https://github.com/0xmuon/Warranty-fraud-detection-system'
  },
  {
    title: 'dsastress',
    year: '2025',
    description:
      'Rust-based CLI tool to stress-test DSA / competitive programming solutions by generating random tests, running your solution and an optional brute-force reference, and stopping on the first mismatch.',
    tags: ['Rust', 'CLI', 'Competitive Programming', 'Testing'],
    link: 'https://github.com/0xmuon/dsastress',
    github: 'https://github.com/0xmuon/dsastress'
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
        <div className="max-w-3xl mx-auto font-mono text-xs sm:text-sm text-emerald-300">
          <p>C:\&gt; projects</p>
          <p className="ml-2 text-emerald-200">
            listing a few things I&apos;ve been hacking on...
          </p>

          <div className="mt-4 space-y-4">
            {allProjects.map((project, index) => (
              <div key={index}>
                <p className="text-emerald-200">
                  [{project.year}] {project.title}
                </p>
                <p className="ml-2">{project.description}</p>
                <p className="ml-2 text-emerald-400">
                  tech: {project.tags.join(', ')}
                </p>
                <p className="ml-2">
                  open:{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    site
                  </a>{" "}
                  |{" "}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    code
                  </a>
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6">C:\&gt; skills</p>
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="mt-2">
              <p className="text-emerald-200">[{category}]</p>
              <p className="ml-2">{items.join(', ')}</p>
            </div>
          ))}

          <p className="mt-6">
            C:\&gt; more on{" "}
            <a
              href="https://github.com/0xmuon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </p>

          <p className="mt-4">C:\&gt; _</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
