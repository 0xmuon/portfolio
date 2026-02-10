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

      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3 text-pretty">Blog</h1>
          <p className="text-muted-foreground">
            Articles about Rust, Web3, Web Development, and more.
          </p>
        </div>

        <div className="space-y-5">
          {sortedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
