import { BlogPost } from '@/data/blog-posts'
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
    <div className="font-mono text-xs sm:text-sm text-emerald-300">
      <p>
        <span className="text-emerald-200">[{formattedDate}]</span>{' '}
        <span className="text-emerald-100">{post.category}</span>
      </p>
      <p className="ml-2">
        <Link
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {post.title}
        </Link>{' '}
        ({post.readTime} min)
      </p>
      <p className="ml-2 text-emerald-400">{post.excerpt}</p>
    </div>
  )
}
