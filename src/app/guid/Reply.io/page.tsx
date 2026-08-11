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
  { id: 'switch', label: 'Switching from Reply.io' },
  { id: 'tools', label: 'Will I need multiple tools?' },
  { id: 'costs', label: 'Are there any hidden costs?' },
  { id: 'comparison', label: 'Compare Features' },
  { id: 'pipeline', label: 'Grow Your Pipeline' },
  { id: 'customers', label: 'What Our Customers Say' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
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
  ['We replaced multiple outbound tools with 360Airo and immediately noticed the difference. Our team spends less time managing software and more time connecting with prospects.', 'Amanda Brooks (Placeholder)', 'VP of Sales, SaaS Company'],
  ["The onboarding process was smooth, and our team was running campaigns within days. As we've grown, the platform has continued to support our outbound without adding unnecessary complexity.", 'Arjun Mehta (Placeholder)', 'Director of Sales, Technology Services Company'],
  ['The AI personalization features helped us create relevant outreach much faster. Instead of writing every email from scratch, our team can focus on conversations that matter.', 'Sophia Bennett (Placeholder)', 'Chief Revenue Officer, Growth-Stage SaaS Company'],
  ["From prospect discovery to campaign management, having everything in one platform has simplified the way our team works. It's become an important part of our outbound process.", 'Ethan Foster (Placeholder)', 'Director of Revenue Operations, B2B Technology Company'],
];

const faqs = [
  ["1.Why should I choose 360Airo over Reply.io?", "If you're looking for more than a sales engagement platform, 360Airo combines prospect discovery, AI personalization, multi-channel outreach, deliverability, and campaign management in one place. Instead of relying on several tools to manage different parts of your outbound process, your team can work from a single platform. This simplifies day-to-day workflows, improves collaboration, and makes it easier to scale your outbound efforts as your business grows."],
  ['2. Can I migrate from Reply.io to 360Airo?', "Yes. Our onboarding specialists work with your team to make the transition as smooth as possible. From setting up your workspace to helping you launch your first campaigns, we're there every step of the way. The goal is to minimize disruption so your sales team can continue running outbound while getting familiar with the new platform."],
  ['3. Does 360Airo support multi-channel outreach?', 'Yes. 360Airo lets you manage email, LinkedIn, and SMS outreach from one platform. You can build automated sequences that reach prospects across multiple channels while keeping your messaging consistent. Having everything in one place also makes it easier to track engagement, monitor campaign performance, and manage conversations throughout the sales process.'],
  ['4. How does 360Airo improve email deliverability?', 'Email deliverability is an important part of successful outbound. 360Airo includes deliverability features designed to help improve inbox placement and maintain a healthy sender reputation as your campaigns grow. By supporting better sending practices and monitoring deliverability, the platform helps increase the likelihood that your emails reach your prospects instead of their spam folders.'],
  ['5. Is 360Airo suitable for growing sales teams?', "Absolutely. Whether you're building your first outbound process or managing a growing sales organization, 360Airo is designed to scale with your business. As your team expands, you can continue managing prospect discovery, outreach, personalization, and campaign performance from one platform instead of adding more tools to your workflow."],
  ['6. Does 360Airo integrate with my CRM?', 'Yes. 360Airo supports CRM integrations, making it easy to keep your customer and prospect data synchronized with your existing sales workflow. This reduces manual data entry, improves data accuracy, and helps your sales team spend more time engaging with prospects instead of updating records across different systems.'],
  ['7. What kind of support does 360Airo provide?', "Our relationship doesn't end once you're onboarded. We provide onboarding assistance to help your team get started quickly, along with 24/7 customer support whenever you need it. Whether you have questions about campaigns, platform features, or best practices, our team is always available to help you get the most out of 360Airo."],
];

export default function ReplyAlternativePage() {
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
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280] md:text-sm"><Link href="/alternative" className="font-medium text-[#111827]">Alternative</Link><span>›</span><span>Reply.io Alternative</span></div>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]">
              <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" alt="Reply.io alternative for outbound teams" fill priority className="object-cover opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" />
              <div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">Reply.io Alternative:<br />Grow Your Pipeline, Not Your Software Stack</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">Reply.io Alternative Guide</p>
              <h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">A Complete Reply.io Alternative for Modern Outbound</h1>
              <div className="mb-8 space-y-4 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]"><p>Reply.io is great at helping sales teams automate outreach, and it deserves a lot of credit for that. But sales engagement isn&apos;t the same as outbound.</p><p>Modern outbound demands much more than sending emails. It requires understanding buyers, acting on the right signals, and reaching prospects at the right time.</p></div>
              <div className="mb-8 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#0C162C] px-4 py-3 text-xs text-white md:text-sm"><span>• 360AIRO Team</span><span>Updated: Aug 2026</span><span>•</span><span>9 min read</span></div>
              <div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-7 py-3.5 text-center font-semibold text-white">Start Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-[#6b8cff] px-7 py-3.5 text-center font-semibold text-[#4f63ff]">Book a Personalized Demo</Link></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
        <article className="min-w-0 space-y-14">
          <section id="questions" className="scroll-mt-28"><h2 className="mb-3 text-[28px] font-bold md:text-[34px]">2. Still have questions?</h2><h3 className="mb-5 text-xl font-bold">Should I switch from Reply.io to 360Airo?</h3><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Choosing a sales engagement platform is a long-term decision. Features will evolve, workflows will change, and your outbound strategy will look very different a year from now. As your team grows, the last thing you need is a stack of disconnected tools to manage. One platform should do the work. That&apos;s why 360Airo was built for teams that want to simplify outbound as they grow.</p><p>Our team is with you every step of the way. From onboarding to everyday questions, you&apos;ll always have someone to turn to 24/7, so you can spend less time troubleshooting and more time growing your business. 360Airo keeps your outbound organized, your sales team productive, and your pipeline growing.</p></div><blockquote className="mt-7 rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="leading-8 text-[#4f5668]">“Outbound doesn&apos;t have to mean managing multiple tools. 360Airo offers a simpler way for sales teams to run and scale their outreach from one place. The result is a smoother sales process and more time spent building the pipeline.”</p><footer className="mt-3 font-semibold">- Leading Business Publication</footer></blockquote></section>
          <section id="switch" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">3. Is it difficult to switch from Reply.io?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Switching platforms doesn&apos;t have to slow your team down. Our onboarding specialists help you every step of the way, from setting up your workspace to launching your first campaign. We handle the heavy lifting so your team can get up and running quickly, without disrupting your outbound.</p><p>If you ever have questions along the way, our support team is just a message away. The goal is simple: to make your transition as smooth as possible so your team can focus on selling, not software.</p></div></section>
          <section id="tools" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">4. Will I need multiple tools after switching?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Many sales teams start with one tool and gradually add more to fill the gaps. Before long, they&apos;re managing multiple subscriptions, switching between tabs, and spending more time maintaining software than running outbound.</p><p>360Airo takes a different approach. Instead of managing several tools, you get one platform designed to simplify your outbound workflow from start to finish. That means fewer integrations to maintain, fewer tools to learn, and more time for your team to focus on selling.</p></div></section>
          <section id="costs" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">5. Are there any hidden costs?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Pricing should be easy to understand. What you see is what you pay. There are no surprise charges for getting started, and our team is there to help whenever you need it.</p><p>We believe great software shouldn&apos;t come with unexpected fees or complicated pricing. As your business grows, you can scale with confidence, knowing exactly what you&apos;re paying for.</p></div></section>
          <section id="comparison" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">6. Compare Features</h2><div className="overflow-x-auto rounded-[20px] border border-[#dbe3f4] bg-white"><table className="w-full text-left"><thead className="bg-[#0C162C] text-white"><tr><th className="p-4">Capability</th><th className="p-4">360Airo</th><th className="p-4">Reply.io</th></tr></thead><tbody>{comparison.map(([capability, airo, reply]) => <tr key={capability} className="border-t border-[#e7eaf3]"><td className="p-4 font-medium">{capability}</td><td className="p-4 font-semibold text-[#0ea5b7]">{airo ? '✓' : '✕'}</td><td className="p-4 text-[#5f6472]">{reply ? '✓' : '✕'}</td></tr>)}</tbody></table></div></section>
          <section id="pipeline" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">7. Grow your pipeline, not your software stack.</h2><p className="mb-7 leading-8 text-gray-300">See why growing sales teams choose 360Airo to simplify outbound, improve productivity, and manage everything from one platform.</p><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Talk to an Expert</Link></section>
          <section id="customers" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">8. What Our Customers Say</h2><div className="grid gap-5">{testimonials.map(([quote, name, role]) => <blockquote key={name} className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="mb-4 leading-8 text-[#4f5668]">“{quote}”</p><div className="font-bold">{name}<span className="block text-sm font-normal text-[#6b7280]">{role}</span></div></blockquote>)}</div></section>
          <section id="faqs" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">9. Frequently Asked Questions</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[18px] border border-[#dbe3f4] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{question}</summary><p className="mt-4 leading-7 text-[#4f5668]">{answer}</p></details>)}</div><div className="mt-8 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">Choose a platform built for growth.</h2><p className="mb-7 leading-8 text-gray-300">As your outbound evolves, 360Airo helps you stay productive without adding more tools to your workflow.</p><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Schedule a Demo</Link></div></section>
        </article>
      </div></section>
    </main>
    <Footer />
  </>;
}
