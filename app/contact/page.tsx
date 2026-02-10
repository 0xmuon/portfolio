'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Email</h3>
              <a 
                href="mailto:rudrakshjoshic@gmail.com"
                className="text-accent hover:text-accent/80 break-all"
              >
                rudrakshjoshic@gmail.com
              </a>
            </div>



            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Location</h3>
              <p className="text-muted-foreground">Surat, Gujarat</p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-8 bg-secondary/50">
            <h2 className="text-2xl font-bold mb-6">Send me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a 
                href="https://github.com/0xmuon"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg p-4 text-center hover:border-accent hover:bg-secondary transition"
              >
                <p className="font-semibold text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground mt-1">@0xmuon</p>
              </a>

              <a 
                href="https://linkedin.com/in/rudraksh-j"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg p-4 text-center hover:border-accent hover:bg-secondary transition"
              >
                <p className="font-semibold text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground mt-1">rudraksh-j</p>
              </a>

              <a 
                href="https://x.com/0xmuon"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg p-4 text-center hover:border-accent hover:bg-secondary transition"
              >
                <p className="font-semibold text-foreground">Twitter</p>
                <p className="text-xs text-muted-foreground mt-1">@0xmuon</p>
              </a>

              <a 
                href="https://codeforces.com/profile/Temp_001"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg p-4 text-center hover:border-accent hover:bg-secondary transition"
              >
                <p className="font-semibold text-foreground">Codeforces</p>
                <p className="text-xs text-muted-foreground mt-1">Temp_001</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
