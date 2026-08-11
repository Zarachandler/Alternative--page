'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../../styles/blogs.css';

const sections = [
  { id: 'outgrown', label: 'Has Your Team Outgrown Meet Alfred?' },
  { id: 'switch', label: 'Switch Without Missing a Beat' },
  { id: 'together', label: 'Everything Works Together' },
  { id: 'pricing', label: 'Transparent Pricing' },
  { id: 'difference', label: 'See the Difference' },
  { id: 'scale', label: 'Scale Beyond LinkedIn' },
  { id: 'teams', label: 'Why Teams Made the Switch' },
  { id: 'faqs', label: 'Everything You Need to Know' },
];

const comparison = [
  ['Find prospects without third-party tools', '✓', '✕'],
  ['Personalize outreach with AI', '✓', 'Limited'],
  ['Run Email, LinkedIn & SMS campaigns', '✓', 'LinkedIn-focused'],
  ['Improve email deliverability', '✓', '✕'],
  ['Automate outbound sequences', '✓', '✓'],
  ['Replace multiple outbound tools', '✓', '✕'],
  ['Scale outbound from one platform', '✓', '✕'],
  ['24/7 onboarding & support', '✓', '✓'],
];

const testimonials = [
  ['Meet Alfred worked well for LinkedIn outreach, but once our outbound expanded, we found ourselves adding more and more tools. Switching to 360Airo simplified everything.', 'Amanda Brooks (Placeholder)', 'VP of Sales, SaaS Company'],
  ["The biggest difference wasn't another feature. It was finally having one place to manage prospecting, campaigns, and reporting. Our team became noticeably more efficient.", 'Arjun Mehta (Placeholder)', 'Director of Sales, Technology Services Company'],
  ["We no longer have to piece together different platforms to understand what's happening across our campaigns. Everything is visible in one place.", 'Sophia Bennett (Placeholder)', 'Chief Revenue Officer, Growth-Stage SaaS Company'],
  ['As our outbound process became more mature, we needed software that could keep up. 360Airo gave us that without making things more complicated.', 'Ethan Foster (Placeholder)', 'Director of Revenue Operations, B2B Technology Company'],
];

const faqs = [
  ['Why should I choose 360Airo over Meet Alfred?', 'Meet Alfred is designed primarily for LinkedIn automation. 360Airo supports the entire outbound process by bringing prospect discovery, AI-powered personalization, Email, LinkedIn and SMS outreach, deliverability, and reporting together in one platform. That means less time switching between tools and more time focusing on buyers.'],
  ['Can I move from Meet Alfred without disrupting my campaigns?', 'Yes. Our onboarding team helps you migrate your setup, organize your workspace, and get campaigns running as quickly as possible, so your sales team can continue working without unnecessary interruptions.'],
  ['Does 360Airo include LinkedIn outreach?', 'Yes. Alongside LinkedIn, you can also manage Email and SMS outreach, giving your team the flexibility to engage buyers across multiple channels from one platform.'],
  ['How does 360Airo help teams scale outbound?', 'As outbound grows, managing different tools becomes increasingly difficult. 360Airo simplifies that process by bringing prospecting, personalization, campaign execution, and reporting together, making it easier to run larger outbound programs.'],
  ['Can I connect 360Airo with my CRM?', 'Yes. 360Airo integrates with leading CRM platforms, helping keep prospect data and campaign activity synchronized with your existing sales workflow.'],
  ['What kind of support do you provide?', "Every customer receives onboarding assistance and access to 24/7 support. Whether you're setting up your first campaign or optimizing an existing one, our team is always available to help."],
];

export default function MeetAlfredAlternativePage() {
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
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280] md:text-sm"><Link href="/alternative" className="font-medium text-[#111827]">Alternative</Link><span>›</span><span>Meet Alfred Alternative</span></div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]"><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Meet Alfred alternative for scaling outbound" fill priority className="object-cover opacity-30 mix-blend-overlay" /><div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" /><div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">Best Meet Alfred Alternative for Scaling Outbound</p></div></motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">Meet Alfred Alternative Guide</p><h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">1. Meet Alfred Gets You Started. 360Airo Helps You Scale.</h1><div className="mb-8 space-y-4 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]"><p>If LinkedIn is a big part of your outbound, there&apos;s a good chance you&apos;ve looked at Meet Alfred. It&apos;s a practical way to automate connection requests, follow-ups, and routine outreach without spending hours doing everything manually.</p><p>For many teams, that&apos;s exactly what they need in the beginning.</p><p>The problem is that outbound rarely stays that simple.</p><p>As your pipeline targets increase, conversations start happening across more than one channel. Some prospects reply to an email. Others respond on LinkedIn weeks later. Some won&apos;t engage until they&apos;ve seen your name a few times. Suddenly, success isn&apos;t about automating LinkedIn—it&apos;s about keeping your entire outbound motion connected.</p><p>That&apos;s the gap 360Airo fills.</p><p>Instead of treating prospecting, personalization, outreach, and reporting as separate tasks, it brings them together into a single workflow. Your team spends less time stitching tools together and more time building a pipeline.</p></div></motion.div>
        </div>
      </div></section>

      <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
        <article className="min-w-0 space-y-14">
          <section id="outgrown" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">2. Has Your Team Outgrown Meet Alfred?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>There&apos;s usually a moment when teams realize the problem isn&apos;t sending enough LinkedIn messages.</p><p>It&apos;s everything that comes after.</p><p>Who&apos;s actually the right prospect? Which channel gets the best response? Which campaign is creating meetings? Where are replies dropping off?</p><p>Those questions become harder to answer when different parts of outbound live in different places.</p><p>360Airo gives sales teams one place to manage the entire process—from finding prospects to launching campaigns and understanding what&apos;s driving results. You don&apos;t have to rebuild your workflow every time your outbound strategy changes. The platform is built to grow with you.</p><p>And if you need help along the way, you&apos;re never left figuring things out alone. Our onboarding team helps you get started, and our support team is available whenever you need guidance.</p></div><blockquote className="mt-7 rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="leading-8 text-[#4f5668]">“The companies that scale outbound successfully aren&apos;t necessarily sending more messages. They&apos;re running a more connected process from the first touchpoint to the booked meeting.”</p><footer className="mt-3 font-semibold">— Leading Business Publication</footer></blockquote></section>
          <section id="switch" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">3. Switch Without Missing a Beat</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Nobody wants to pause outbound just because they&apos;re moving to a new platform.</p><p>That&apos;s why we keep migration simple.</p><p>Our team helps you set everything up, move existing campaigns, and get your workspace ready without turning the process into a weeks-long project. Most teams are able to get started quickly and keep their outreach running throughout the transition.</p><p>If questions come up later, we&apos;re still here. Whether it&apos;s campaign advice or product support, you&apos;ll always have someone to reach out to.</p></div></section>
          <section id="together" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">4. Outbound Works Better When Everything Works Together</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Think about how many tabs your sales team opens before the first email is even sent.</p><p>One for prospecting.</p><p>Another for LinkedIn.</p><p>Another for email.</p><p>Another for reporting.</p><p>None of those tools are bad on their own. The problem is constantly moving between them.</p><p>360Airo brings those pieces together so your team isn&apos;t wasting time jumping from one platform to another. Prospecting, outreach, AI personalization, deliverability, and reporting all work from the same workspace, making outbound easier to manage as your team grows.</p></div></section>
          <section id="pricing" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">5. Transparent Pricing for Growing Teams</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Pricing shouldn&apos;t become another thing your team has to figure out.</p><p>With 360Airo, what you see is what you pay. There aren&apos;t unexpected onboarding fees waiting after you sign up or complicated pricing tiers that become harder to understand as your team expands.</p><p>You can plan ahead, grow confidently, and know exactly what your outbound platform will cost.</p></div></section>
          <section id="difference" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">6. See the Difference at a Glance</h2><div className="overflow-x-auto rounded-[20px] border border-[#dbe3f4] bg-white"><table className="w-full text-left"><thead className="bg-[#0C162C] text-white"><tr><th className="p-4">Capability</th><th className="p-4">360Airo</th><th className="p-4">Meet Alfred</th></tr></thead><tbody>{comparison.map(([capability, airo, alfred]) => <tr key={capability} className="border-t border-[#e7eaf3]"><td className="p-4 font-medium">{capability}</td><td className="p-4 font-semibold text-[#0ea5b7]">{airo}</td><td className="p-4 text-[#5f6472]">{alfred}</td></tr>)}</tbody></table></div></section>
          <section id="scale" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">7. Scale Beyond LinkedIn Outreach</h2><div className="mb-7 space-y-4 leading-8 text-gray-300"><p>LinkedIn is an important part of outbound. It just shouldn&apos;t have to carry your entire strategy.</p><p>See how 360Airo helps sales teams reach more buyers, stay organized as campaigns grow, and manage every stage of outbound without relying on a collection of separate tools.</p></div><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Talk to an Expert</Link></section>
          <section id="teams" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">8. Why Teams Made the Switch</h2><div className="grid gap-5">{testimonials.map(([quote, name, role]) => <blockquote key={name} className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="mb-4 leading-8 text-[#4f5668]">“{quote}”</p><div className="font-bold">{name}<span className="block text-sm font-normal text-[#6b7280]">{role}</span></div></blockquote>)}</div></section>
          <section id="faqs" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">9. Everything You Need to Know</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[18px] border border-[#dbe3f4] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{question}</summary><p className="mt-4 leading-7 text-[#4f5668]">{answer}</p></details>)}</div><div className="mt-8 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">Turn More Outreach Into Pipeline</h2><div className="mb-7 space-y-3 leading-8 text-gray-300"><p>More outreach doesn&apos;t automatically create more opportunities.</p><p>Better outreach does.</p><p>When your prospecting, messaging, campaigns, and reporting all work together, it&apos;s easier to build a repeatable outbound process that grows with your business.</p></div><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Schedule a Demo</Link></div></section>
        </article>
      </div></section>
    </main>
    <Footer />
  </>;
}
