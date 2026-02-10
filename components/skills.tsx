export function Skills() {
  const skills = {
    'Languages': ['Rust', 'C++', 'HTML5', 'CSS3', 'MySQL', 'Python'],
    'Frameworks & Libraries': ['Next.js', 'React.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Solana CLI/Anchor'],
    'Technologies & Platforms': ['Docker', 'Kubernetes (K8s)', 'Nginx', 'REST APIs', 'WebSockets'],
    'Developer Tools': ['VS Code', 'GitHub', 'GitLab', 'Git', 'Linux/WSL']
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
