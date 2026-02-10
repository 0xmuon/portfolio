import { BlogPost } from '@/data/blog-posts'
import { Clock } from 'lucide-react'
import Link from 'next/link'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link href={post.link} target="_blank" rel="noopener noreferrer">
      <div className="group border border-border rounded-lg p-6 hover:border-accent hover:bg-secondary/50 transition-colors cursor-pointer">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground">{formattedDate}</span>
        </div>

        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h2>

        <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} min
          </div>
        </div>
      </div>
    </Link>
  )
}
