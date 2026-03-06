export function Skills() {
  const skills = {
    'Languages': ['Rust', 'C++', 'HTML5', 'CSS3', 'MySQL', 'Python'],
    'Frameworks & Libraries': ['Next.js', 'React.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Solana CLI/Anchor'],
    'Technologies & Platforms': ['Docker', 'Kubernetes (K8s)', 'Nginx', 'REST APIs', 'WebSockets'],
    'Developer Tools': ['VS Code', 'GitHub', 'GitLab', 'Git', 'Linux/WSL']
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto font-mono text-xs sm:text-sm text-emerald-300">
        <p className="mb-3">C:\&gt; skills</p>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-3">
            <p className="text-emerald-200">[{category}]</p>
            <p className="ml-2">
              {skillList.join(', ')}
            </p>
          </div>
        ))}
        <p className="mt-4">C:\&gt; _</p>
      </div>
    </section>
  )
}
