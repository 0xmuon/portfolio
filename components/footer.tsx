import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-4 px-4 sm:px-6 lg:px-8 mt-8 font-mono text-xs text-emerald-300">
      <div className="max-w-3xl mx-auto">
        <p>C:\&gt; echo connect</p>
        <p className="ml-2">
          <a
            href="https://github.com/0xmuon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/rudraksh-j"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin
          </a>{" "}
          |{" "}
          <a
            href="https://x.com/0xmuon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            twitter
          </a>
        </p>
        <p className="mt-2">C:\&gt; echo location</p>
        <p className="ml-2">Surat, Gujarat</p>
        <p className="mt-2">
          C:\&gt; echo © {currentYear} idk much
        </p>
      </div>
    </footer>
  )
}
