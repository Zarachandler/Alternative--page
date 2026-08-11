'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../../styles/blogs.css';

const sections = [
  { id: 'why-360airo', label: 'Why Teams Choose 360Airo' },
  { id: 'moving', label: 'Moving to 360Airo' },
  { id: 'one-platform', label: 'One Platform' },
  { id: 'pricing', label: 'Simple Pricing' },
  { id: 'comparison', label: 'Compare Features' },
  { id: 'customers', label: 'Why Customers Choose Us' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
  { id: 'scale', label: 'Simplify and Scale' },
];

const comparison = [
  ['Find prospects without third-party tools', true, false],
  ['Personalize outreach with AI', true, true],
  ['Run email, LinkedIn & SMS campaigns', true, true],
  ['Improve email deliverability', true, true],
  ['Automate outbound sequences', true, true],
  ['Replace multiple outbound tools', true, false],
  ['Scale outbound from one platform', true, false],
  ['24/7 onboarding & support', true, true],
] as const;

const testimonials = [
  ["What impressed us most wasn't just the automation. It was having prospecting, outreach, and reporting in one place. Our sales team works faster because everything they need is already connected.", 'Natalie Parker (Placeholder)', 'Head of Revenue Operations, B2B SaaS Company'],
  ['The transition was far easier than we expected. We were able to launch campaigns quickly, and the onboarding team made sure we felt confident using the platform from day one.', 'Jason Reed (Placeholder)', 'Sales Director, Technology Solutions Company'],
  ['Our outreach became much more relevant without creating extra work for the team. AI personalization helped us scale campaigns while still making every message feel thoughtful and authentic.', 'Melissa Grant (Placeholder)', 'VP of Business Development, Enterprise Software Company'],
  ['Instead of managing several outbound tools, we now run everything from one platform. It has simplified our workflow and made collaboration across the sales team much easier.', 'Ryan Mitchell (Placeholder)', 'Chief Revenue Officer, SaaS Company'],
];

const faqs = [
  ['Why should I choose 360Airo over SmartReach.io?', '360Airo is designed for businesses looking for more than an outreach platform. By combining prospect discovery, AI personalization, multi-channel engagement, deliverability, and campaign management in one place, it helps simplify outbound while reducing the need for multiple tools.'],
  ['Can I migrate from SmartReach.io to 360Airo?', 'Yes. Our onboarding specialists help guide your transition from setup through your first campaigns. The goal is to make the move as seamless as possible so your team can stay productive throughout the process.'],
  ['Does 360Airo support multi-channel outreach?', 'Yes. You can manage email, LinkedIn, and SMS campaigns from one platform while building automated sequences that keep your outreach consistent across every channel.'],
  ['How does 360Airo improve email deliverability?', '360Airo includes deliverability features that help improve inbox placement and maintain a healthy sender reputation as your outbound campaigns scale, helping your emails reach more prospects.'],
  ['Is 360Airo suitable for growing sales teams?', "Absolutely. Whether you're a startup building outbound for the first time or an established organization expanding your sales team, 360Airo is designed to scale with your business."],
  ['Does 360Airo integrate with my CRM?', 'Yes. 360Airo integrates with popular CRM platforms, making it easy to keep prospect and customer data synchronized while reducing manual work for your team.'],
  ['What kind of support does 360Airo provide?', "Our team provides onboarding assistance and 24/7 customer support to help you get the most from the platform. Whether you're launching campaigns or optimizing your outbound strategy, we're always here to help."],
];

export default function SmartReachAlternativePage() {
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

  return <>
    <Navbar activeTab="alternative" />
    <main className="min-h-screen bg-[#f4f2fb] pt-20 text-[#111827]">
      <section className="border-b border-[#ddd9ef] px-4 pb-14 pt-8 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280] md:text-sm"><Link href="/alternative" className="font-medium text-[#111827]">Alternative</Link><span>›</span><span>SmartReach.io Alternative</span></div>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]">
              <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" alt="SmartReach.io alternative for outbound teams" fill priority className="object-cover opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" />
              <div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">SmartReach.io Alternative:<br />Simplify and Scale Your Outbound</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">SmartReach.io Alternative Guide</p>
              <h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">A Complete SmartReach.io Alternative for Modern Sales Teams</h1>
              <div className="mb-8 space-y-4 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]"><p>SmartReach.io is a platform for automating sales outreach, and it has helped many businesses streamline their email campaigns. But successful outbound requires more than email automation.</p><p>Today&apos;s sales teams need to find the right prospects, personalize every interaction, engage buyers across multiple channels, and maintain strong email deliverability. As outbound becomes more sophisticated, many businesses need a platform that supports the entire workflow-not just one part of it.</p></div>
              <div className="mb-8 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#0C162C] px-4 py-3 text-xs text-white md:text-sm"><span>• 360AIRO Team</span><span>Updated: Aug 2026</span><span>•</span><span>9 min read</span></div>
              <div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-7 py-3.5 text-center font-semibold text-white">Start Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-[#6b8cff] px-7 py-3.5 text-center font-semibold text-[#4f63ff]">Book a Personalized Demo</Link></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
        <article className="min-w-0 space-y-14">
          <section id="why-360airo" className="scroll-mt-28"><h2 className="mb-3 text-[28px] font-bold md:text-[34px]">2. Why Growing Teams Choose 360Airo</h2><h3 className="mb-5 text-xl font-bold">Is 360Airo the right alternative to SmartReach.io?</h3><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Choosing an outbound platform isn&apos;t just about what works today. It&apos;s about choosing a solution that continues to support your team as your sales process evolves. As your business grows, the number of tools you manage shouldn&apos;t grow with it.</p><p>360Airo brings prospect discovery, AI personalization, multi-channel outreach, deliverability, and campaign management together in one platform. Instead of managing disconnected software, your team can focus on building relationships and creating more opportunities.</p><p>Our team is with you every step of the way. From onboarding to everyday questions, you&apos;ll always have someone to turn to 24/7. The result is a smoother outbound process, a more productive sales team, and a platform built to grow with your business.</p></div><blockquote className="mt-7 rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="leading-8 text-[#4f5668]">“Outbound doesn&apos;t have to mean managing multiple tools. 360Airo offers a simpler way for sales teams to run and scale their outreach from one place. The result is a smoother sales process and more time spent building the pipeline.”</p><footer className="mt-3 font-semibold">- Leading Business Publication</footer></blockquote></section>
          <section id="moving" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">3. Moving to 360Airo Is Easier Than You Think</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Changing outbound platforms shouldn&apos;t interrupt your sales momentum. Our onboarding specialists help your team get set up quickly so you can continue running campaigns with minimal disruption.</p><p>From configuring your workspace to launching your first sequence, we guide you through every stage of the transition. And whenever questions come up, our support team is available 24/7 to help you move forward with confidence.</p></div></section>
          <section id="one-platform" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">4. One Platform Beats Managing Multiple Tools</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Many sales teams begin with an outreach platform, then gradually add separate tools for prospecting, personalization, analytics, and deliverability. Before long, they&apos;re switching between tabs and managing multiple subscriptions every day.</p><p>360Airo simplifies that experience. Instead of relying on several disconnected platforms, you get one solution designed to support your entire outbound workflow. That means fewer integrations to maintain, fewer tools to learn, and more time spent selling.</p></div></section>
          <section id="pricing" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">5. Pricing That Stays Simple as You Grow</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Software should make your business easier-not your budgeting harder. Hidden costs, complicated pricing structures, and paying extra for essential functionality can quickly increase the total cost of your outbound stack.</p><p>With 360Airo, pricing is transparent and straightforward. You know exactly what you&apos;re paying for, giving your business the confidence to grow without worrying about unexpected costs.</p></div></section>
          <section id="comparison" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">6. Compare Features</h2><div className="overflow-x-auto rounded-[20px] border border-[#dbe3f4] bg-white"><table className="w-full text-left"><thead className="bg-[#0C162C] text-white"><tr><th className="p-4">Capability</th><th className="p-4">360Airo</th><th className="p-4">SmartReach.io</th></tr></thead><tbody>{comparison.map(([capability, airo, smartReach]) => <tr key={capability} className="border-t border-[#e7eaf3]"><td className="p-4 font-medium">{capability}</td><td className="p-4 font-semibold text-[#0ea5b7]">{airo ? '✓' : '✕'}</td><td className="p-4 text-[#5f6472]">{smartReach ? '✓' : '✕'}</td></tr>)}</tbody></table></div></section>
          <section id="customers" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">7. Why Customers Choose 360Airo</h2><div className="grid gap-5">{testimonials.map(([quote, name, role]) => <blockquote key={name} className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="mb-4 leading-8 text-[#4f5668]">“{quote}”</p><div className="font-bold">{name}<span className="block text-sm font-normal text-[#6b7280]">{role}</span></div></blockquote>)}</div></section>
          <section id="faqs" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">8. Frequently Asked Questions</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[18px] border border-[#dbe3f4] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{question}</summary><p className="mt-4 leading-7 text-[#4f5668]">{answer}</p></details>)}</div></section>
          <section id="scale" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">9. Simplify Your Outbound, Scale Your Growth</h2><div className="mb-7 space-y-4 leading-8 text-gray-300"><p>As your sales team grows, your outbound strategy shouldn&apos;t become more complicated. 360Airo brings prospecting, AI personalization, multi-channel outreach, deliverability, and campaign management together in one platform, helping your team spend less time managing tools and more time building pipeline.</p><p>Ready to see 360Airo in action?</p><p>Discover how one platform can simplify your outbound workflow, improve team productivity, and help you scale with confidence.</p></div><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Book a Demo</Link></section>
        </article>
      </div></section>
    </main>
    <Footer />
  </>;
}
