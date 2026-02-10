'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            Rudraksh
          </Link>
          
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
