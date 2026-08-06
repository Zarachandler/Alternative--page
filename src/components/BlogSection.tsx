"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "../styles/blogs-section.css";

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title:
      "Smarter Outreach, On Your Terms with Approval Mode, AI Model Selection, and More",
    slug: "Transforming-Sales-Prospecting",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },
  {
    id: 2,
    title:
      "12+ AI Prospecting Tools You Need for Effortless Lead Hunting in 2026",
    slug: "Sales-Outreach-Platform",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    id: 3,
    title:
      "2026 Guide to Using AI for Business Development Strategy",
    slug: "Inbound-Sales-Automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },

  /* Add more blogs below */

  {
    id: 4,
    title: "AI Sales Automation Best Practices",
    slug: "ai-sales-automation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  },
  {
    id: 5,
    title: "10 Cold Email Tips That Actually Work",
    slug: "cold-email-tips",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
  {
    id: 6,
    title: "How AI Improves Lead Generation",
    slug: "lead-generation",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
];

export default function BlogsSection() {
  const blogsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const visibleBlogs = blogs.slice(
    currentPage * blogsPerPage,
    currentPage * blogsPerPage + blogsPerPage
  );

  const nextBlogs = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousBlogs = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="blog-ui-section">
      <div className="blog-ui-container">

        <div className="blog-ui-header">
          <h2>Get inspired to keep growing</h2>
        </div>

        <div className="blog-ui-topbar">

          <div className="blog-ui-left">

            <h3>Articles</h3>

            <div className="blog-ui-arrows">

              <button
                className="blog-ui-arrow-btn"
                onClick={previousBlogs}
                disabled={currentPage === 0}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                className="blog-ui-arrow-btn"
                onClick={nextBlogs}
                disabled={currentPage === totalPages - 1}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>

            </div>

          </div>

          <Link href="/blogs" className="blog-ui-readmore">
            Read more
            <ArrowRight size={15} />
          </Link>

        </div>

        <div className="blog-ui-grid">

          {visibleBlogs.map((blog) => (

            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="blog-ui-card"
            >

              <div className="blog-ui-image-wrap">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-ui-image"
                />

              </div>

              <h4 className="blog-ui-card-title">
                {blog.title}
              </h4>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}