'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../../styles/blogs.css';

const articleContent = `Why Startups Need AI-Powered Outbound Email Campaigns
Grow Your Pipeline Without Growing Your Sales Team
Early-stage startups need to create consistent pipeline while working with limited budgets, lean teams, and ambitious growth targets. 360Airo helps you find the right prospects, personalize every email with AI, automate follow-ups, and launch outbound campaigns that generate more conversations—without increasing manual work.
CTA: Start Free Trial | Book a Personalized Demo
1. Startups Can't Afford Inefficient Outbound
Instead of hiring more SDRs, startups need smarter systems. Every campaign should help your team reach more prospects, personalize outreach at scale, and spend less time on repetitive tasks.
Highlights
- AI-Powered Email Personalization
- Automated Follow-up Sequences
- Higher Reply Rates
- Campaign Performance Analytics
2. Why Outbound Is Hard for Startups
2.1 Small Teams, Big Growth Targets
Founders and early sales hires often juggle prospecting, outreach, demos, and customer conversations. Manual outbound quickly becomes unsustainable.
2.2 Generic Cold Emails Don't Stand Out
Startups can't rely on sending more emails. They need relevant messaging that earns attention from busy decision-makers.
2.3 Following Up Takes More Time Than Expected
The first email rarely books the meeting. Consistent follow-ups matter, but managing them manually steals time from selling.
2.4 Every Campaign Needs to Show ROI
With limited budgets, startups need clear visibility into opens, replies, meetings, and conversions to know what's actually working.
3. Build Outbound That Scales With Your Startup
3.1 Find Qualified Prospects Faster
Access verified B2B contacts without spending hours researching leads.
3.2 Personalize Every Email With AI
Generate relevant messaging using prospect and company insights while maintaining your brand voice.
3.3 Automate Follow-ups Without Losing the Human Touch
Create multi-step sequences that keep conversations moving while feeling natural.
3.4 Reach Buyers Across Multiple Channels
Combine Email, LinkedIn, and SMS into one coordinated outreach strategy.
3.5 Learn From Every Campaign
Track reply rates, positive replies, meetings booked, and engagement trends to continuously improve results.
3.6 Scale Without Hiring a Bigger Sales Team
Build a repeatable outbound process that grows with your startup instead of adding more manual work.
4. More Than an Email Automation Tool
Capability | Traditional Email Tools | 360Airo
AI Email Personalization | Limited | ✅
Automated Follow-ups | ✅ | ✅
Prospect Database | ❌ | ✅
Email + LinkedIn + SMS | Limited | ✅
Deliverability Monitoring | ❌ | ✅
Campaign Analytics | Basic | ✅
5. Built for High-Growth Startups
Testimonials focused on:
- founders saving time
- first SDR hires
- scaling outbound
- generating pipeline with lean teams
6. Frequently Asked Questions
Is 360Airo suitable for early-stage startups?
Can I personalize every email with AI?
Does it support automated follow-ups?
Can I run multi-channel campaigns?
Does it integrate with my CRM?
How quickly can I launch my first campaign?
Turn Every Email Into a Growth Opportunity
Growing a startup isn't about sending more emails—it's about sending smarter ones.
With 360Airo, your team can discover prospects, personalize outreach, automate follow-ups, and build a predictable outbound engine that grows alongside your business.
CTA: Start Your Free Trial | Book a Personalized Demo`.split('\n');

const sections = [
  { id: 'introduction', label: 'Why Startups Need AI-Powered Outbound Email Campaigns', start: 0, end: 4 },
  { id: 'prospecting', label: "Startups Can't Afford Inefficient Outbound", start: 4, end: 11 },
  { id: 'signals', label: 'Why Outbound Is Hard for Startups', start: 11, end: 20 },
  { id: 'pipeline', label: 'Build Outbound That Scales With Your Startup', start: 20, end: 33 },
  { id: 'crm', label: 'More Than an Email Automation Tool', start: 33, end: 41 },
  { id: 'small-teams', label: 'Built for High-Growth Startups', start: 41, end: 47 },
  { id: 'choosing', label: 'Frequently Asked Questions', start: 47, end: 54 },
  { id: 'faqs', label: 'Turn Every Email Into a Growth Opportunity', start: 54, end: articleContent.length },
];

function ContentLines({ items }: { items: string[] }) {
  return <div className="space-y-4 text-base leading-8 text-[#4f5668]">{items.map((item, index) => item.startsWith('- ') ? <div key={`${item}-${index}`} className="rounded-[14px] border border-[#dbe3f4] bg-[#f8f9ff] px-5 py-3">• {item.slice(2)}</div> : <p key={`${item}-${index}`}>{item}</p>)}</div>;
}

export default function SalesIntelligenceStartupPost() {
  const [activeId, setActiveId] = useState(sections[0].id);
  useEffect(() => {
    const onScroll = () => {
      let current = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && window.scrollY + 190 >= element.offsetTop) current = section.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="blog-shell"><Navbar activeTab="resources" /><main className="min-h-screen bg-[#f4f2fb] pt-20 text-[#111827]">
    <section className="border-b border-[#ddd9ef] px-4 pb-14 pt-8 md:pt-10"><div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#6b7280]"><Link href="/blogs" className="font-medium text-[#111827]">Blogs</Link><span>›</span><Link href="/blogs/category/startup">Startup</Link><span>›</span><span>AI-Powered Outbound Email Campaigns</span></div>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]"><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="AI-powered outbound email campaigns for startups" fill priority className="object-cover opacity-30 mix-blend-overlay" /><div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" /><div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[500px] text-3xl font-bold leading-tight text-white md:text-[44px]">Why Startups Need AI-Powered Outbound Email Campaigns</p></div></motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">Startup Sales Guide</p><h1 className="mb-5 text-2xl font-bold leading-[1.08] md:text-4xl lg:text-[40px]">Why Startups Need AI-Powered Outbound Email Campaigns</h1><p className="mb-8 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]">{articleContent[2]}</p><div className="mb-8 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#0C162C] px-4 py-3 text-xs text-white md:text-sm"><span>• 360AIRO Team</span><span>Updated: Aug 2026</span><span>•</span><span>10 min read</span></div><div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-7 py-3.5 text-center font-semibold text-white">Start Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-[#6b8cff] px-7 py-3.5 text-center font-semibold text-[#4f63ff]">Book a Personalized Demo</Link></div></motion.div>
      </div>
    </div></section>
    <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]"><aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold normal-case">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside><article className="min-w-0 space-y-14">{sections.map((section, index) => <section key={section.id} id={section.id} className={`scroll-mt-28 ${index === sections.length - 1 ? 'rounded-[28px] bg-[#0C162C] p-7 md:p-10' : ''}`}><h2 className={`mb-5 text-[28px] font-bold md:text-[34px] ${index === sections.length - 1 ? 'text-white' : ''}`}>{section.label}</h2><div className={index === sections.length - 1 ? '[&_p]:text-gray-300 [&_div]:text-gray-300' : ''}><ContentLines items={articleContent.slice(section.start + (index === 0 ? 1 : 0), section.end)} /></div>{index === sections.length - 1 && <div className="mt-8 flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Start Your Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-white px-6 py-3 text-center font-semibold text-white">Book a Personalized Demo</Link></div>}</section>)}</article></div></section>
  </main><Footer /></div>;
}
