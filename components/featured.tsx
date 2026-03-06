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

export function Featured() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto font-mono text-xs sm:text-sm text-emerald-300">
        <p className="mb-3">C:\&gt; dir featured_projects</p>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
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
        <p className="mt-2">
          C:\&gt; more projects on{" "}
          <a
            href="https://github.com/0xmuon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
