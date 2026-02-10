import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { blogPosts } from '@/data/blog-posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { JSX } from 'react'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return {}

  return {
    title: `${post.title} | Rudraksh Joshi`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <article className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-pretty">{post.title}</h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {post.category}
            </div>
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)?.[0].length || 1
              const text = paragraph.replace(/^#+\s/, '')
              const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
              return (
                <HeadingTag
                  key={idx}
                  className={`font-bold mt-8 mb-4 ${
                    level === 2 ? 'text-2xl' : level === 3 ? 'text-xl' : 'text-lg'
                  }`}
                >
                  {text}
                </HeadingTag>
              )
            }

            if (paragraph.startsWith('```')) {
              const lines = paragraph.split('\n')
              const language = lines[0].replace('```', '')
              const code = lines.slice(1, -1).join('\n')
              return (
                <pre
                  key={idx}
                  className="bg-secondary rounded-lg p-4 overflow-x-auto mb-4"
                >
                  <code className="text-sm font-mono text-foreground">
                    {code}
                  </code>
                </pre>
              )
            }

            return (
              <p key={idx} className="text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="border-t border-border pt-12">
          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              Rudraksh Joshi is a developer based in Surat, Gujarat. He loves building things
              with Rust, Next.js, and exploring Web3 technologies.
            </p>
          </div>

          <nav className="flex justify-between">
            {blogPosts.length > 0 && (
              <>
                {blogPosts[blogPosts.findIndex((p) => p.id === post.id) - 1] && (
                  <Link
                    href={`/blog/${blogPosts[blogPosts.findIndex((p) => p.id === post.id) - 1].id}`}
                    className="flex flex-col gap-1 text-accent hover:underline"
                  >
                    <span className="text-sm text-muted-foreground">Previous</span>
                    <span className="font-semibold">
                      {blogPosts[blogPosts.findIndex((p) => p.id === post.id) - 1].title}
                    </span>
                  </Link>
                )}
                {blogPosts[blogPosts.findIndex((p) => p.id === post.id) + 1] && (
                  <Link
                    href={`/blog/${blogPosts[blogPosts.findIndex((p) => p.id === post.id) + 1].id}`}
                    className="flex flex-col gap-1 text-accent hover:underline text-right"
                  >
                    <span className="text-sm text-muted-foreground">Next</span>
                    <span className="font-semibold">
                      {blogPosts[blogPosts.findIndex((p) => p.id === post.id) + 1].title}
                    </span>
                  </Link>
                )}
              </>
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  )
}
