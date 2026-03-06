'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:rudrakshjoshic@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto font-mono text-xs sm:text-sm text-emerald-300">
          <p>C:\&gt; contact</p>
          <p className="ml-2 text-emerald-200">
            the simplest way to reach me: plain old email.
          </p>

          <p className="mt-4">C:\&gt; echo email</p>
          <p className="ml-2">
            <a
              href="mailto:rudrakshjoshic@gmail.com"
              className="underline"
            >
              rudrakshjoshic@gmail.com
            </a>
          </p>

          <p className="mt-3">C:\&gt; echo location</p>
          <p className="ml-2">Surat, Gujarat</p>

          <p className="mt-4">C:\&gt; echo socials</p>
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
            </a>{" "}
            |{" "}
            <a
              href="https://codeforces.com/profile/Temp_001"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              codeforces
            </a>
          </p>

          <p className="mt-4">
            C:\&gt; note: sending an email opens your default mail client with a small template.
          </p>

          <p className="mt-4">C:\&gt; _</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
