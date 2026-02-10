import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/0xmuon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rudraksh-j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/0xmuon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:rudrakshjoshic@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  rudrakshjoshic@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                Surat, Gujarat
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} idk much</p>
        </div>
      </div>
    </footer>
  )
}
