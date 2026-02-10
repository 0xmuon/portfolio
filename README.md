# Rudraksh Joshi - Portfolio & Blog

A modern, minimalist portfolio and blog website for Rudraksh Joshi, built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist aesthetic with a professional color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Blog System**: Dynamic blog with categorized posts about Rust, Next.js, and Web3
- **Project Showcase**: Display of featured projects with descriptions and links
- **Contact Form**: Functional contact form with validation
- **Navigation**: Smooth navigation between different sections
- **SEO Optimized**: Metadata and structured content for better search engine visibility

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Fonts**: Geist (sans-serif), Geist Mono (monospace)
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── projects/
│   │   └── page.tsx              # Projects showcase
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [id]/
│   │       └── page.tsx          # Individual blog post
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   └── globals.css               # Global styles
├── components/
│   ├── navigation.tsx            # Navigation bar
│   ├── hero.tsx                  # Hero section
│   ├── featured.tsx              # Featured projects
│   ├── footer.tsx                # Footer
│   ├── blog-card.tsx             # Blog post card
│   └── ui/                       # shadcn/ui components
├── data/
│   └── blog-posts.ts             # Blog posts content
├── lib/
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## Pages

### Home
The landing page features a hero section introducing Rudraksh with featured projects and a call-to-action.

### About
Information about Rudraksh's background, skills, and experience in Rust, Next.js, and Web3 development.

### Projects
A showcase of featured projects with descriptions, technologies used, and links to live demos or repositories.

### Blog
A dynamic blog system with posts about:
- Rust web development
- Next.js performance optimization
- Web3 and smart contracts

Each blog post includes:
- Title and excerpt
- Publication date
- Read time estimate
- Category tags
- Full content with code examples
- Navigation to previous/next posts

### Contact
A contact form for getting in touch with Rudraksh, featuring:
- Form validation
- Email delivery (requires backend setup)
- Success/error feedback

## Design System

### Colors
- **Primary**: Deep gray (#262626)
- **Accent**: Modern blue (#007ACC)
- **Neutrals**: Off-white backgrounds and gray text
- **Borders**: Subtle light gray

### Typography
- **Headings**: Geist (sans-serif)
- **Body**: Geist (sans-serif)
- **Code**: Geist Mono

### Spacing
Uses Tailwind's default spacing scale (4px increments) with consistent gaps and padding throughout.

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

## Adding Blog Posts

Blog posts are stored in `/data/blog-posts.ts`. To add a new post:

```typescript
{
  id: 'unique-slug',
  title: 'Post Title',
  excerpt: 'Short summary of the post',
  content: 'Full content with markdown-like formatting',
  date: '2024-03-20',
  category: 'Category Name',
  readTime: 5,
}
```

## Customization

### Colors
Edit the CSS variables in `app/globals.css` to customize the color scheme.

### Projects
Update the projects array in `components/featured.tsx` to showcase different projects.

### About Content
Modify the content in `app/about/page.tsx` to update biographical information.

## Performance

- Image optimization with Next.js Image component
- Static generation for blog posts
- Optimized CSS with Tailwind
- Minimal JavaScript for fast loading

## Future Enhancements

- Database integration for dynamic blog posts and comments
- Newsletter subscription
- Analytics and metrics
- Dark mode toggle (currently supports dark/light)
- Search functionality for blog posts
- Email integration for contact form

## Deployment

Deploy to Vercel for optimal performance:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

## License

© 2024 Rudraksh Joshi. All rights reserved.
