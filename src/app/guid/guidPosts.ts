export type GuidPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags?: string[];
};

export const guidPosts: GuidPost[] = [
  {
    id: 1,
    slug: 'Lead411',
    title: 'Lead411 review: is it the right fit for your sales outreach stack?',
    excerpt: 'Compare Lead411’s prospecting workflows, contact quality, and data depth against modern alternatives for teams expanding outbound operations.',
    category: 'Alternatives',
    author: '360Airo Team',
    date: 'Aug 5, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Lead411', 'prospecting', 'sales intelligence'],
  },
  {
    id: 2,
    slug: 'Meet-Alfred',
    title: 'Meet Alfred alternatives for teams that need more control and less complexity',
    excerpt: 'Explore how modern outreach automation platforms stack up against Meet Alfred for LinkedIn, email, and multichannel workflows.',
    category: 'LinkedIn',
    author: '360Airo Team',
    date: 'Jul 29, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Meet Alfred', 'LinkedIn', 'multichannel'],
  },
  {
    id: 3,
    slug: 'Salesforge',
    title: 'Salesforge review: automation, deliverability, and workflow design',
    excerpt: 'A practical overview of Salesforge’s strengths, limitations, and what teams should consider before adding it to their outreach stack.',
    category: 'Email Tools',
    author: '360Airo Team',
    date: 'Jul 18, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tags: ['Salesforge', 'automation', 'deliverability'],
  },
  {
    id: 4,
    slug: 'Reply.io',
    title: 'Reply.io guide: building a smarter outbound engine for growing teams',
    excerpt: 'Learn how Reply.io compares to newer tools when it comes to workflow automation, analytics, and sales execution.',
    category: 'Email Marketing',
    author: '360Airo Team',
    date: 'Jul 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Reply.io', 'outbound', 'automation'],
  },
  {
    id: 5,
    slug: 'SmartReach.io',
    title: 'SmartReach.io overview for teams serious about multichannel outreach',
    excerpt: 'Understand where SmartReach.io fits in the market and how it compares to AI-first alternatives built for modern teams.',
    category: 'Cold Email',
    author: '360Airo Team',
    date: 'Jun 24, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    tags: ['SmartReach', 'cold email', 'multichannel'],
  },
  {
    id: 6,
    slug: 'Humanlinker-Alternative',
    title: 'Humanlinker alternative: what to look for in a more dependable outreach stack',
    excerpt: 'A concise breakdown of the tradeoffs between Humanlinker and alternatives focused on deliverability, simplicity, and speed.',
    category: 'Alternatives',
    author: '360Airo Team',
    date: 'Jun 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Humanlinker', 'alternatives', 'outreach'],
  },
];
