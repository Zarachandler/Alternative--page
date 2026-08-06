'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../../styles/blogs.css';

const sections = [
  { id: 'questions', label: 'Still have questions?' },
  { id: 'switch', label: 'Switching from Salesforge' },
  { id: 'tools', label: 'Will I need multiple tools?' },
  { id: 'costs', label: 'Are there any hidden costs?' },
  { id: 'comparison', label: 'Compare Features' },
  { id: 'simplify', label: 'Simplify Outbound' },
  { id: 'customers', label: 'What Our Customers Say' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
];

const testimonials = [
  ['Salesforge helped us improve AI-powered personalization, but we still needed additional software for prospecting and reporting. After switching to 360Airo, everything finally worked together in one place, making our outbound process much easier to manage.', 'Amanda Brooks', 'VP of Sales, SaaS Company'],
  ["The onboarding experience was seamless. Our team was launching campaigns within days, and we didn't have to rebuild our entire outbound process. As we've grown, 360Airo has continued to scale with us.", 'Arjun Mehta', 'Director of Sales, Technology Services Company'],
  ['Having prospect discovery, AI personalization, automation, and campaign analytics in one platform has completely changed how our SDR team works. We spend less time managing software and far more time talking to Prospects.', 'Sophia Bennett', 'Chief Revenue Officer, Growth-Stage SaaS Company'],
  ["Instead of juggling several outbound tools, we now manage everything from one platform. It's made our campaigns more organized, our reporting more reliable, and our team much more productive.", 'Ethan Foster', 'Director of Revenue Operations, B2B Technology Company'],
];

const faqs = [
  ['1. Why should I choose 360Airo over Salesforge?', "If you're looking for more than AI-powered cold email, 360Airo combines prospect discovery, AI personalization, multi-channel outreach, deliverability, campaign automation, and reporting into one platform. Instead of managing different tools for different stages of outbound, your team can run everything from a single workspace, making it easier to stay organized and scale efficiently."],
  ['2. Can I migrate from Salesforge to 360Airo?', 'Yes. Our onboarding specialists help make the transition as smooth as possible. From setting up your workspace to launching your first campaigns, we guide your team through every step so you can continue running outbound with minimal disruption.'],
  ['3. Does 360Airo support multi-channel outreach?', 'Yes. 360Airo lets you manage Email, LinkedIn, and SMS outreach from one platform. You can build coordinated sequences across multiple channels while tracking campaign performance and buyer engagement from a centralized dashboard.'],
  ['4. How does 360Airo improve email deliverability?', 'Email deliverability plays a critical role in outbound success. 360Airo includes deliverability features designed to improve inbox placement, maintain sender reputation, and support healthier sending practices as your campaigns scale.'],
  ['5. Is 360Airo suitable for growing sales teams?', "Absolutely. Whether you're building your first outbound motion or expanding an established revenue team, 360Airo is designed to scale alongside your business while keeping your outbound workflow simple and connected."],
  ['6. Does 360Airo integrate with my CRM?', 'Yes. 360Airo integrates with leading CRM platforms, helping you keep prospect data, campaign activity, and customer information synchronized without manual updates or duplicate work.'],
  ['7. What kind of support does 360Airo provide?', "Our commitment doesn't end after onboarding. We provide implementation assistance, ongoing guidance, and 24/7 customer support to help your team get the most value from the platform as your outbound strategy continues to evolve."],
];

export default function SalesforgeAlternativePage() {
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
      <section className="border-b border-[#ddd9ef] px-4 pb-14 pt-8 md:pt-10"><div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280] md:text-sm"><Link href="/alternative" className="font-medium text-[#111827]">Alternative</Link><span>›</span><span>Salesforge Alternative</span></div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]"><Image src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" alt="Salesforge alternative for outbound teams" fill priority className="object-cover opacity-30 mix-blend-overlay" /><div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" /><div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">Salesforge Alternative:<br />Why Growing Teams Choose 360Airo</p></div></motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">Salesforge Alternative Guide</p><h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">Salesforge Alternative: Why Growing Teams Choose 360Airo</h1><div className="mb-8 space-y-4 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]"><p>Salesforge is excellent at helping teams personalize cold emails with AI, and it deserves recognition for that. But AI-powered email isn&apos;t the same as end-to-end outbound.</p><p>Today&apos;s outbound is about much more than generating personalized emails. It starts with finding the right prospects, continues with engaging buyers across multiple channels, and succeeds when every campaign contributes to qualified pipeline.</p><p>As your outbound grows, you&apos;ll need more than AI-generated copy. You&apos;ll need prospect discovery, campaign automation, deliverability, reporting, and performance insights working together—not spread across different tools.</p><p>That&apos;s where 360Airo stands apart. It brings prospect discovery, AI-powered personalization, Email, LinkedIn and SMS outreach, campaign automation, deliverability, and analytics together in one platform, helping your team spend less time managing software and more time building pipeline.</p></div><div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-7 py-3.5 text-center font-semibold text-white">Start Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-[#6b8cff] px-7 py-3.5 text-center font-semibold text-[#4f63ff]">Book a Personalized Demo</Link></div></motion.div>
        </div>
      </div></section>

      <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
        <article className="min-w-0 space-y-14">
          <section id="questions" className="scroll-mt-28"><h2 className="mb-3 text-[28px] font-bold md:text-[34px]">2. Still have questions?</h2><h3 className="mb-5 text-xl font-bold">Should I switch from Salesforge to 360Airo?</h3><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Choosing an outbound platform isn&apos;t just about what your team needs today—it&apos;s about what your business will need as it grows.</p><p>Salesforge is a great platform for AI-powered cold email, but outbound strategies naturally become more sophisticated over time. Teams begin expanding into new markets, running more campaigns, engaging buyers across multiple channels, and tracking more performance metrics.</p><p>As that happens, relying on separate tools for different parts of outbound can quickly become difficult to manage.360Airo was built with long-term growth in mind. Instead of adding another platform every time your outbound evolves, you get one connected solution that supports prospect discovery, personalization, campaign execution, reporting, and optimization from start to finish.</p><p>From onboarding through everyday support, our team is with you every step of the way. Whenever you need guidance, best practices, or technical assistance, you&apos;ll have access to 24/7 support so your team can stay focused on selling instead of troubleshooting.</p></div><blockquote className="mt-7 rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="leading-8 text-[#4f5668]">“The strongest outbound teams don&apos;t rely on more software. They rely on software that brings every stage of outbound together. That&apos;s exactly what 360Airo is built to do.”</p><footer className="mt-3 font-semibold">— Leading Business Publication</footer></blockquote></section>
          <section id="switch" className="scroll-mt-28"><h2 className="mb-3 text-[28px] font-bold md:text-[34px]">3. Is it difficult to switch from Salesforge?</h2><h3 className="mb-5 text-xl font-bold">Not at all.</h3><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Switching platforms shouldn&apos;t slow your team down or interrupt your outbound efforts. Our onboarding specialists work closely with you to configure your workspace, import your data, and help launch your first campaigns with confidence.</p><p>We take care of the setup so your sales team can continue engaging prospects without rebuilding its entire workflow.</p><p>And if questions come up after implementation, our support team is always available. The goal is simple: make your transition smooth, efficient, and stress-free so your team can focus on building pipeline—not learning another platform.</p></div></section>
          <section id="tools" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">4. Will I need multiple tools after switching?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>As outbound grows, it&apos;s common for sales teams to add separate software for prospecting, campaign reporting, LinkedIn outreach, or analytics.</p><p>Before long, what started as one platform turns into several subscriptions, disconnected workflows, and a growing amount of time spent switching between applications.360Airo takes a different approach.</p><p>Instead of adding more tools as your outbound matures, you get one platform designed to support every stage of the outbound journey. Prospect discovery, AI personalization, deliverability, automation, multi-channel engagement, and campaign reporting all work together in one place.</p><p>That means fewer integrations, fewer tools to manage, and more time for your team to focus on meaningful conversations with prospects.</p></div></section>
          <section id="costs" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">5. Are there any hidden costs?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>We believe outbound software should be simple—not just to use, but also to pay for.</p><p>With 360Airo, pricing is transparent from the start. There are no hidden onboarding fees, unexpected setup charges, or surprise costs after implementation. You&apos;ll always know exactly what you&apos;re paying for.</p><p>As your team grows, you can scale confidently with predictable pricing and a platform designed to support your business for the long term.</p></div></section>
          <section id="comparison" className="scroll-mt-28"><h2 className="text-[28px] font-bold md:text-[34px]">6. Compare Features</h2></section>
          <section id="simplify" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">7. Simplify outbound as your business grows.</h2><p className="mb-7 leading-8 text-gray-300">See why growing revenue teams choose 360Airo to simplify prospecting, personalize outreach, automate campaigns, and manage every stage of outbound from one unified platform.</p><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Talk to an Expert</Link></section>
          <section id="customers" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">8. What Our Customers Say</h2><div className="grid gap-5">{testimonials.map(([quote, name, role]) => <blockquote key={name} className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="mb-4 leading-8 text-[#4f5668]">“{quote}”</p><div className="font-bold">{name}<span className="block text-sm font-normal text-[#6b7280]">{role}</span></div></blockquote>)}</div></section>
          <section id="faqs" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">9. Frequently Asked Questions</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[18px] border border-[#dbe3f4] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{question}</summary><p className="mt-4 leading-7 text-[#4f5668]">{answer}</p></details>)}</div><div className="mt-8 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">Choose an outbound platform built for long-term growth.</h2><p className="mb-7 leading-8 text-gray-300">As your outbound evolves, 360Airo helps your team stay productive without adding more tools, more complexity, or more manual work.</p><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Schedule a Demo</Link></div></section>
        </article>
      </div></section>
    </main>
    <Footer />
  </>;
}
