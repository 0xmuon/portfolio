import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rudraksh Joshi | New learner',
  description: 'Portfolio and log of a new learner – exploring Rust, Next.js, Web3, and low-level bits/bytes from Surat, Gujarat.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geistMono.className} antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
