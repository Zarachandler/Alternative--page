'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Search, User } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import FeatureMarquee from '@/components/FeatureMarquee';
import '../../styles/blogs.css';
import '../../styles/customer-stories.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const alternativePosts = [
  {
    id: 10,
    title: 'Best Lead411 Alternative for Scaling Outbound',
    excerpt: 'Turn prospect data and buyer intent into personalised, multi-channel campaigns and qualified pipeline from one platform.',
    href: '/alternative/Lead411',
    author: '360Airo Team',
    date: 'August 6, 2026',
    readTime: '9 min read',
    category: 'Lead411',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Lead411', 'Sales Intelligence', 'Alternatives'],
  },
  {
    id: 9,
    title: 'Best Meet Alfred Alternative for Scaling Outbound',
    excerpt: 'Scale beyond LinkedIn with connected prospecting, AI personalization, multichannel outreach, deliverability, and reporting.',
    href: '/alternative/Meet-Alfred',
    author: '360Airo Team',
    date: 'August 6, 2026',
    readTime: '9 min read',
    category: 'Meet Alfred',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Meet Alfred', 'LinkedIn Outreach', 'Alternatives'],
  },
  {
    id: 8,
    title: 'Salesforge Alternative: Why Growing Teams Choose 360Airo',
    excerpt: 'Simplify prospecting, personalize outreach, automate campaigns, and manage every stage of outbound from one unified platform.',
    href: '/alternative/Salesforge',
    author: '360Airo Team',
    date: 'August 6, 2026',
    readTime: '9 min read',
    category: 'Salesforge',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Salesforge', 'AI Personalization', 'Alternatives'],
  },
  {
    id: 4,
    title: 'Reply.io Alternative: Grow Your Pipeline, Not Your Software Stack',
    excerpt: 'See why growing sales teams choose 360Airo to simplify outbound, improve productivity, and manage everything from one platform.',
    href: '/alternative/Reply.io',
    author: '360Airo Team',
    date: 'August 6, 2026',
    readTime: '9 min read',
    category: 'Reply.io',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Reply.io', 'Multichannel', 'Alternatives'],
  },
  {
    id: 7,
    title: 'SmartReach.io Alternative: Simplify and Scale Your Outbound',
    excerpt: 'Bring prospect discovery, AI personalization, multi-channel outreach, deliverability, and campaign management together in one platform.',
    href: '/alternative/SmartReach.io',
    author: '360Airo Team',
    date: 'August 6, 2026',
    readTime: '9 min read',
    category: 'SmartReach.io',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['SmartReach.io', 'Sales Outreach', 'Alternatives'],
  },
  {
    id: 6,
    title: 'Humanlinker Alternative: A Smarter Way to Scale Outbound',
    excerpt: 'Move beyond AI personalization with prospect discovery, multi-channel campaigns, automation, and analytics in one outbound platform.',
    href: '/alternative/Humanlinker-Alternative',
    author: '360Airo Team',
    date: 'August 6, 2026',
    readTime: '9 min read',
    category: 'Humanlinker',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Humanlinker', 'AI Personalization', 'Alternatives'],
  },
];

const categories = ['All', 'Lead411', 'Meet Alfred', 'Salesforge', 'Reply.io', 'SmartReach.io', 'Humanlinker'];

export default function AlternativePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categoriesRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return alternativePosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const searchableText = [post.title, post.excerpt, post.category, post.author, ...post.tags].join(' ').toLowerCase();
      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [selectedCategory, searchQuery]);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return alternativePosts.filter((post) =>
      [post.title, post.excerpt, post.category, post.author, ...post.tags].join(' ').toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const featuredPost = filteredPosts[0] ?? alternativePosts[0];
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="blog-shell">
      <Navbar activeTab="alternative" />

      <main className="blog-light-main pt-28 pb-16">
        <div className="mx-auto mb-12 max-w-7xl px-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Alternative Page
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            Clear, practical comparisons to help you choose the right sales engagement and outreach platform.
          </p>
        </div>

        <section className="px-4 pb-12">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="premium-featured-card grid gap-8 rounded-[24px] p-6 md:grid-cols-2 md:p-8">
              <motion.div variants={itemVariants} className="relative h-[320px] overflow-hidden rounded-xl shadow-md">
                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105" />
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col justify-center">
                <div><span className="premium-badge mb-4">{featuredPost.category}</span></div>
                <h2 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">{featuredPost.title}</h2>
                <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-gray-300">{featuredPost.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-blue-400" />{featuredPost.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-blue-400" />{featuredPost.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue-400" />{featuredPost.readTime}</span>
                </div>
                <div className="mt-6">
                  <Link href={featuredPost.href} className="premium-button inline-flex">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="blog-sticky-nav-light">
          <div className="blog-sticky-container">
            <div className="flex min-w-0 flex-1 items-center">
              <div className="min-w-0 flex-1 overflow-hidden">
                <div ref={categoriesRef} className="scrollbar-hide flex items-center gap-6 overflow-x-auto whitespace-nowrap">
                  {categories.map((category) => (
                    <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`minimal-tab-btn-light ${selectedCategory === category ? 'active' : ''}`}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative hidden min-w-[260px] md:block">
              <div className="minimal-search-box-light">
                <Search className="h-4 w-4 text-blue-400" />
                <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search Alternatives" className="w-full bg-transparent text-xs text-gray-800 outline-none placeholder:text-gray-500" />
              </div>
              {searchQuery.trim() && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
                  {searchResults.length ? searchResults.map((post) => (
                    <Link key={post.id} href={post.href} onClick={() => setSearchQuery('')} className="block px-4 py-3 transition-colors hover:bg-gray-50">
                      <p className="text-[13px] font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-1 line-clamp-2 text-[11px] text-gray-500">{post.excerpt}</p>
                    </Link>
                  )) : <div className="px-4 py-4 text-[12px] text-gray-500">No matching alternatives found.</div>}
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="px-4 pb-16">
          <div className="mx-auto max-w-7xl">
            {filteredPosts.length ? (
              <div className="blog-grid">
                {gridPosts.map((post) => (
                  <div key={post.id} className="flex w-full">
                    <Link className="blog-light-card" href={post.href} style={{ width: '100%' }}>
                      <div className="blog-light-card-image-wrapper">
                        <img src={post.image} alt={post.title} className="blog-light-card-img" width="800" height="533" loading="lazy" decoding="async" />
                      </div>
                      <div className="blog-light-card-content">
                        <h2 className="blog-light-card-title">{post.title}</h2>
                        <p className="blog-light-card-excerpt">{post.excerpt}</p>
                        <div className="blog-light-card-footer">
                          <div className="blog-light-card-tags">
                            <span className="blog-light-card-tag">{post.category}</span>
                            <span className="blog-light-card-tag">{post.readTime}</span>
                          </div>
                          <span className="blog-light-card-read-more">Read More →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : <p className="py-16 text-center text-sm text-gray-500">No matching alternatives found.</p>}
          </div>
        </section>
      </main>

      <section className="cs-cta-modern">
        <div className="cs-cta-bg"><div className="cs-cta-pattern" /></div>
        <div className="cs-cta-content" style={{ width: '100%' }}>
          <h2>Put multichannel outbound on autopilot<br />with 360Airo</h2>
          <div className="cs-cta-buttons">
            <Link href="/book-a-demo" className="btn-primary-purple">Start free →</Link>
            <Link href="/book-a-demo" className="btn-secondary-white">Book a demo →</Link>
          </div>
          <FeatureMarquee />
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
