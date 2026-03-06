'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="border-b border-border bg-black text-emerald-300 font-mono text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 h-9 flex items-center">
        <span className="mr-2">C:\&gt;</span>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="hover:text-emerald-200">
            home
          </Link>
          <Link href="/about" className="hover:text-emerald-200">
            about
          </Link>
          <Link href="/projects" className="hover:text-emerald-200">
            projects
          </Link>
          <Link href="/blog" className="hover:text-emerald-200">
            blog
          </Link>
          <Link href="/contact" className="hover:text-emerald-200">
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
