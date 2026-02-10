export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: number
  link: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'solana-blinks',
    title: 'Rookie Explains Solana Blinks: As Simple as It Is',
    excerpt: 'A beginner-friendly guide to understanding Solana Blinks and how they work.',
    date: '2024-03-15',
    category: 'Solana',
    readTime: 5,
    link: 'https://medium.com/@0xmuon/rookie-explains-solana-blinks-as-simple-as-it-is-22347fbfc2a7',
  },
  {
    id: 'libafl-fuzzer',
    title: 'Exploring LibAFL: A Fuzzer Built in Rust',
    excerpt: 'Deep dive into LibAFL, a powerful fuzzing framework written in Rust for security testing.',
    date: '2024-03-10',
    category: 'Rust',
    readTime: 8,
    link: 'https://medium.com/@0xmuon/exploring-libafl-a-fuzzer-built-in-rust-7a641da429a1',
  },
  {
    id: 'remote-worker-stage',
    title: 'Remote Worker Stage Part 1',
    excerpt: 'Exploring the journey of becoming a remote worker and the challenges that come with it.',
    date: '2024-03-05',
    category: 'Career',
    readTime: 6,
    link: 'https://medium.com/@0xmuon/remote-worker-stage-part-1-becf3ea64a56',
  },
  {
    id: 'rails-loco',
    title: 'Rails, Loco.rs, and MVC Model',
    excerpt: 'Understanding the MVC architecture and how Rails and Loco.rs implement it differently.',
    date: '2024-02-28',
    category: 'Web Development',
    readTime: 7,
    link: 'https://medium.com/@0xmuon/rails-loco-rs-and-mvc-model-aa050671546b',
  },
]
