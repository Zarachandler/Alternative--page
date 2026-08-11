'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../../styles/blogs.css';

const sections = [
  { id: 'outgrown', label: 'Has Your Team Outgrown Lead411?' },
  { id: 'switch', label: 'Switch Without Interruption' },
  { id: 'value', label: 'Put Sales Intelligence to Work' },
  { id: 'pricing', label: 'Straightforward Pricing' },
  { id: 'comparison', label: 'Compare Side by Side' },
  { id: 'signals', label: 'Turn Signals Into Conversations' },
  { id: 'teams', label: 'Why Sales Teams Switched' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
];

const comparison = [
  ['Prospect discovery', '✓', '✓'],
  ['Buyer intent insights', '✓', '✓'],
  ['AI-powered personalisation', '✓', 'Limited'],
  ['Email outreach', '✓', 'Limited'],
  ['LinkedIn outreach', '✓', '✕'],
  ['SMS outreach', '✓', '✕'],
  ['Multi-channel sequences', '✓', '✕'],
  ['Email deliverability tools', '✓', '✕'],
  ['Campaign reporting', '✓', 'Limited'],
  ['24/7 onboarding & support', '✓', '✓'],
];

const testimonials = [
  ['Lead411 helped us identify the right accounts, but we still needed a better way to reach them. 360Airo connected everything from prospecting to outreach, making our workflow much more efficient.', 'Amanda Brooks (Placeholder)', 'VP of Sales, SaaS Company'],
  ["Instead of exporting contacts into another platform every time we wanted to launch a campaign, our team now handles everything in one place. It's saved us time and simplified our outbound process.", 'Arjun Mehta (Placeholder)', 'Director of Sales, Technology Services Company'],
  ["The biggest difference wasn't finding more prospects—it was turning more of those prospects into conversations. That's where 360Airo really made an impact.", 'Sophia Bennett (Placeholder)', 'Chief Revenue Officer, Growth-Stage SaaS Company'],
  ['We wanted more than sales intelligence. We wanted a platform that helped us act on it. 360Airo gave us exactly that.', 'Ethan Foster (Placeholder)', 'Director of Revenue Operations, B2B Technology Company'],
];

const faqs = [
  ['How is 360Airo different from Lead411?', 'Lead411 helps you identify prospects with verified contact data and buyer intent signals. 360Airo takes the next step by helping you engage those prospects through AI-powered, multi-channel outbound campaigns, all from one platform.'],
  ['Can I switch from Lead411 to 360Airo?', 'Yes. Our onboarding team helps you migrate your data, set up your workspace, and get your campaigns running quickly, so you can make the transition without disrupting your outbound efforts.'],
  ['Does 360Airo include prospect discovery?', 'Yes. You can discover qualified prospects, personalise outreach, and launch campaigns from the same platform instead of relying on separate tools for each step.'],
  ['Does 360Airo support multi-channel outreach?', 'Absolutely. In addition to email, 360Airo supports LinkedIn and SMS outreach, making it easier to connect with buyers across multiple touchpoints.'],
  ['Can 360Airo integrate with my CRM?', 'Yes. 360Airo integrates with leading CRM platforms, ensuring your prospect data, campaign activity, and customer records stay in sync.'],
  ['What support does 360Airo provide?', "Every customer receives guided onboarding and 24/7 support. Whether you're setting up your first campaign or optimizing your outbound strategy, our team is always available to help."],
];

export default function Lead411AlternativePage() {
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
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280] md:text-sm"><Link href="/alternative" className="font-medium text-[#111827]">Alternative</Link><span>›</span><span>Lead411 Alternative</span></div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]"><Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Lead411 alternative for scaling outbound" fill priority className="object-cover opacity-30 mix-blend-overlay" /><div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" /><div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">Best Lead411 Alternative for Scaling Outbound</p></div></motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">Lead411 Alternative Guide</p><h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">1. Lead411 Finds Sales Opportunities. 360Airo Helps You Act on Them.</h1><div className="space-y-4 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]"><p>Lead411 gives sales teams a head start. With verified contact data, buyer intent signals, and company insights, it&apos;s easier to identify accounts that are worth pursuing.</p><p>Knowing who to reach out to is important.</p><p>Knowing what to do next is what creates pipeline.</p><p>Finding a prospect is only the beginning of the outbound journey. You still need to craft relevant messaging, reach buyers through the right channels, maintain deliverability, follow up consistently, and understand which campaigns are actually generating meetings.</p><p>That&apos;s where many teams start looking beyond sales intelligence tools.</p><p>360Airo helps you turn insights into action. Discover prospects, personalise outreach with AI, launch Email, LinkedIn, and SMS campaigns, monitor deliverability, and track performance—all from one platform. Instead of moving data between different tools, your team can go from identifying a prospect to starting a conversation without breaking their workflow.</p></div></motion.div>
        </div>
      </div></section>

      <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
        <article className="min-w-0 space-y-14">
          <section id="outgrown" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">2. Has Your Team Outgrown Lead411?</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Sales intelligence helps you decide who to contact.</p><p>Outbound determines whether they respond.</p><p>As your pipeline goals become more ambitious, simply having access to buyer data isn&apos;t enough. Sales teams need a reliable way to turn those insights into conversations, meetings, and revenue.</p><p>That&apos;s often where disconnected workflows become a challenge.</p><p>Prospects are discovered in one platform, outreach happens somewhere else, reporting lives in another dashboard, and every campaign involves moving data from one system to another.</p><p>360Airo removes that friction by bringing prospect discovery, AI-powered personalisation, multi-channel outreach, campaign automation, deliverability, and reporting together in one place.</p><p>The result is a smoother outbound process with fewer manual steps and more time spent engaging buyers.</p></div><blockquote className="mt-7 rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="leading-8 text-[#4f5668]">“Sales intelligence tells you where the opportunity is. Outbound determines whether you capture it.”</p><footer className="mt-3 font-semibold">— Leading Business Publication</footer></blockquote></section>
          <section id="switch" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">3. Switch Without Interrupting Your Pipeline</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Moving to a new platform doesn&apos;t have to slow your team down.</p><p>Our onboarding specialists help you import your data, configure your workspace, and launch campaigns with as little disruption as possible. Whether you&apos;re replacing an existing outbound platform or expanding your sales stack, we&apos;ll help make the transition straightforward.</p><p>And once you&apos;re up and running, our support team is always available to help you optimise campaigns and get the most from the platform.</p></div></section>
          <section id="value" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">4. Sales Intelligence Is Only Valuable When You Put It to Work</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Every sales team wants better data.</p><p>But better data doesn&apos;t book meetings on its own.</p><p>The value comes from what happens after you&apos;ve identified the right prospect—how quickly you engage them, how relevant your messaging is, and whether your outreach reaches them at the right moment.</p><p>360Airo connects those next steps.</p><p>Instead of stopping at contact discovery and buyer insights, it helps your team launch campaigns, personalise every interaction, monitor engagement, and continuously improve results from one connected workspace.</p></div></section>
          <section id="pricing" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">5. Straightforward Pricing for Growing Teams</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>As your outbound programme grows, your software costs should remain easy to understand.</p><p>360Airo offers transparent pricing with no hidden onboarding fees or unexpected implementation charges. You can plan confidently, scale your outreach, and know exactly what you&apos;re paying for as your team expands.</p></div></section>
          <section id="comparison" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">6. Compare 360Airo and Lead411 Side by Side</h2><div className="overflow-x-auto rounded-[20px] border border-[#dbe3f4] bg-white"><table className="w-full text-left"><thead className="bg-[#0C162C] text-white"><tr><th className="p-4">Capability</th><th className="p-4">360Airo</th><th className="p-4">Lead411</th></tr></thead><tbody>{comparison.map(([capability, airo, lead411]) => <tr key={capability} className="border-t border-[#e7eaf3]"><td className="p-4 font-medium">{capability}</td><td className="p-4 font-semibold text-[#0ea5b7]">{airo}</td><td className="p-4 text-[#5f6472]">{lead411}</td></tr>)}</tbody></table></div></section>
          <section id="signals" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">7. Turn Buyer Signals Into Real Conversations</h2><div className="mb-7 space-y-4 leading-8 text-gray-300"><p>Buyer intent and contact data can tell you where the opportunity is.</p><p>What happens next is what separates growing sales teams from everyone else.</p><p>With 360Airo, you can move from identifying prospects to engaging them across multiple channels without relying on a patchwork of disconnected tools. Everything you need to build a consistent outbound process lives in one platform.</p></div><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Talk to an Expert</Link></section>
          <section id="teams" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">8. Why Sales Teams Switched to 360Airo</h2><div className="grid gap-5">{testimonials.map(([quote, name, role]) => <blockquote key={name} className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="mb-4 leading-8 text-[#4f5668]">“{quote}”</p><div className="font-bold">{name}<span className="block text-sm font-normal text-[#6b7280]">{role}</span></div></blockquote>)}</div></section>
          <section id="faqs" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">9. Frequently Asked Questions</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[18px] border border-[#dbe3f4] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{question}</summary><p className="mt-4 leading-7 text-[#4f5668]">{answer}</p></details>)}</div><div className="mt-8 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">Turn Sales Intelligence Into Pipeline</h2><div className="mb-7 space-y-3 leading-8 text-gray-300"><p>Finding the right prospects is only the first step.</p><p>Real growth comes from turning those insights into conversations, meetings, and qualified opportunities.</p><p>With 360Airo, your team can discover prospects, launch personalised outreach, and manage the entire outbound journey from one connected platform.</p></div><Link href="/book-a-demo" className="inline-block rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Schedule a Demo</Link></div></section>
        </article>
      </div></section>
    </main>
    <Footer />
  </>;
}
