'use client';

import { motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../styles/blogs.css';
import { guidPosts } from './guidPosts';
import { ArrowRight, Calendar, Clock, User, Search } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function GuidPage() {
  const categories = ['All', 'Cold Email', 'Email Marketing', 'LinkedIn', 'Email Tools', 'Alternatives'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categoriesRef = useRef<HTMLDivElement>(null);

  const visiblePosts = useMemo(() => {
    return guidPosts.filter(
      (post) =>
        post.slug !== 'Transforming-Sales-Prospecting' &&
        post.slug !== 'Sales-Outreach-Platform' &&
        post.slug !== 'Inbound-Sales-Automation' &&
        post.slug !== '10-Cheapest-Cold-Email-Software' &&
        post.slug !== 'Free-Email-Deliverability-Test'
    );
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = visiblePosts;

    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      posts = posts.filter(post => {
        const haystack = [
          post.title,
          post.excerpt,
          post.category,
          post.author,
          ...(post.tags || []),
        ].join(' ').toLowerCase();
        return haystack.includes(query);
      });
    }

    return posts;
  }, [selectedCategory, searchQuery, visiblePosts]);

  const featuredPost = filteredPosts[0] || visiblePosts[0];
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : filteredPosts;

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return visiblePosts.filter((post) => {
      const haystack = [
        post.title,
        post.excerpt,
        post.category,
        post.author,
        ...(post.tags || []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [searchQuery, visiblePosts]);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (!categoriesRef.current) return;
    const scrollAmount = 260;

    categoriesRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="blog-shell">
      <Navbar activeTab="guid" />

      <main className="blog-light-main pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', fontWeight: 900 }}>
            Insights & Resources
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Expert guides, product updates, and growth strategies for modern outreach teams.
          </p>
        </div>

        <section className="px-4 pb-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid gap-8 rounded-[24px] premium-featured-card p-6 md:grid-cols-2 md:p-8"
            >
              <motion.div variants={itemVariants} className="overflow-hidden rounded-xl h-[320px] relative shadow-md">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col justify-center">
                <div>
                  <span className="premium-badge mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {featuredPost.category}
                  </span>
                </div>

                <h1 className="max-w-xl text-2xl font-bold leading-tight text-white md:text-3xl tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {featuredPost.title}
                </h1>

                <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-gray-300 line-clamp-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-blue-400" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-blue-400" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-blue-400" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href={`/guid/${featuredPost.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="premium-button"
                    >
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.button>
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
                <div
                  ref={categoriesRef}
                  className="scrollbar-hide flex items-center gap-6 overflow-x-auto whitespace-nowrap"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`minimal-tab-btn-light ${selectedCategory === cat ? 'active' : ''}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden min-w-[260px] md:block">
              <div className="minimal-search-box-light">
                <Search className="h-4 w-4 text-blue-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Guides"
                  className="w-full bg-transparent outline-none placeholder:text-gray-500 text-xs text-gray-800"
                />
              </div>

              {searchQuery.trim() && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
                  {filteredResults.length > 0 ? (
                    <div className="max-h-[320px] overflow-y-auto py-2">
                      {filteredResults.map((post) => (
                        <Link
                          key={post.id}
                          href={`/guid/${post.slug}`}
                          onClick={() => setSearchQuery('')}
                          className="block px-4 py-3 transition-colors hover:bg-gray-50"
                        >
                          <p className="text-[13px] font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-[11px] text-gray-500">
                            {post.excerpt}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-4 text-[12px] text-gray-500">
                      No matching guide posts found.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="px-4 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="blog-grid">
              {gridPosts.map((post) => (
                <div key={post.id} className="w-full flex">
                  <Link className="blog-light-card" href={`/guid/${post.slug}`} style={{ width: '100%' }}>
                    <div className="blog-light-card-image-wrapper">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="blog-light-card-img"
                        width="800"
                        height="533"
                        loading="lazy"
                        decoding="async"
                      />
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
          </div>
        </section>
      </main>

      <section className="cs-cta-modern">
        <div className="cs-cta-bg">
          <div className="cs-cta-pattern"></div>
        </div>
        <div className="cs-cta-content" style={{ width: '100%' }}>
          <h2>Put multichannel outbound on autopilot<br />with 360Airo</h2>
          <div className="cs-cta-buttons">
            <button className="btn-primary-purple">Start free &rarr;</button>
            <button className="btn-secondary-white">Book a demo &rarr;</button>
          </div>
          <div className="mt-6">{/* feature marquee placeholder for consistent look */}</div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
