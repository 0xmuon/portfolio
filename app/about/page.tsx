import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Rudraksh Joshi, a developer and builder passionate about creating innovative solutions at the intersection of systems programming, web development, and blockchain technology. Currently pursuing a B.Tech in Electrical Engineering at SVNIT (Sardar Vallabhbhai National Institute of Technology) in Surat, Gujarat.
            </p>

            <h2 className="text-2xl font-bold mt-8 text-foreground">Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology began with a passion for competitive programming and problem-solving. Over the years, I've expanded my interests to include full-stack web development, low-level systems programming with Rust, and the emerging world of blockchain and Web3. I believe in building products that are both technically sound and user-centric.
            </p>

            <h2 className="text-2xl font-bold mt-8 text-foreground">Current Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm deeply involved with the Solana ecosystem as a member of Superteam, where I explore the intersection of AI and blockchain. My recent work on FightScript, a decentralized platform for AI development and competition, received funding from Superteam. I'm also exploring systems-level programming with Rust, evidenced by my bootloader project supporting both BIOS and UEFI systems.
            </p>

            <h2 className="text-2xl font-bold mt-8 text-foreground">Beyond Code</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I'm actively involved in community building. I serve as the lead for SprintDAO's running club, an organizational member for SPERT-2025 (an IEEE Conference), and contribute to various tech communities. I also maintain a competitive edge through platforms like Codeforces and participate in reaction time training through AimLabs.
            </p>

            <h2 className="text-2xl font-bold mt-8 text-foreground">Education</h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mt-4">
              <h3 className="font-semibold text-lg mb-2">B.Tech - Electrical Engineering</h3>
              <p className="text-muted-foreground mb-2">Sardar Vallabhbhai National Institute of Technology, Surat</p>
              <p className="text-sm text-muted-foreground">2022 - 2026 | CGPA: 7.47 (till Semester 6)</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 text-foreground">Achievements</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Founder of FightScript - Raised 2500 USD from Superteam Solana Foundation</li>
              <li>• Member of Superteam (Solana Foundation) - Active contributor to Web3 ecosystem</li>
              <li>• IEEE Conference Organizer - SPERT-2025</li>
              <li>• SprintDAO Running Club Lead - Community building and fitness coordination</li>
              <li>• Google Cloud Study Jam 2023 Participant</li>
              <li>• GitHub Developer Program Member</li>
              <li>• AimLabs Top 10 percentile - 271ms average reaction time</li>
              <li>• Strava Top 22 percentile Runner</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 text-foreground">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-semibold mb-3">Languages</h3>
                <p className="text-muted-foreground">Rust, C++, Python, HTML5, CSS3, MySQL, JavaScript, TypeScript</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Web Frameworks</h3>
                <p className="text-muted-foreground">Next.js, React.js, Express.js, Tailwind CSS, Bootstrap</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Web3 & Blockchain</h3>
                <p className="text-muted-foreground">Solana, Rust, Anchor Framework, Smart Contracts</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">DevOps & Tools</h3>
                <p className="text-muted-foreground">Docker, Kubernetes, Nginx, Git, GitHub, Linux/WSL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
