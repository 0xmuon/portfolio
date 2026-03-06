import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { blogPosts } from '@/data/blog-posts'

export const metadata = {
  title: 'Blog | Rudraksh Joshi',
  description: 'Articles about Rust, Solana, Web Development, and more on Medium',
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="font-mono text-xs sm:text-sm text-emerald-300 space-y-4">
          <p>C:\&gt; blog</p>
          <p className="ml-2 text-emerald-200">
            listing posts (most recent first)...
          </p>
          <div className="space-y-4 mt-4">
            {sortedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <p className="mt-4">C:\&gt; _</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
