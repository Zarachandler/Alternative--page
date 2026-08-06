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
  { id: 'look-beyond', label: 'Why Teams Look Beyond Humanlinker' },
  { id: 'scale-outbound', label: 'Everything You Need to Scale' },
  { id: 'comparison', label: 'Humanlinker vs 360Airo' },
  { id: 'switch', label: 'Why Teams Make the Switch' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
  { id: 'upgrade', label: 'Upgrade Your Outbound' },
];

const featureSections = [
  ['Built-in Prospect Database', "Finding the right prospects shouldn't require multiple subscriptions or endless list building. With 360Airo's built-in prospect database, you can discover verified contacts, build targeted prospect lists, and start outreach from the same platform. Eliminate the need to export and import data between tools, and spend more time engaging qualified buyers."],
  ['AI Personalization at Scale', "Personalized outreach shouldn't come at the cost of productivity. 360Airo uses AI to generate context-aware emails based on prospect profiles, company information, and buying signals, helping your team create relevant messaging in minutes. Scale personalized campaigns without sacrificing quality or spending hours researching every lead."],
  ['Multi-Channel Outreach', 'Modern buyers engage across multiple touchpoints, not just email. 360Airo lets you coordinate Email, LinkedIn, and SMS campaigns from a single workflow, ensuring consistent messaging throughout the buyer journey. Reach prospects on the channels they prefer while managing every interaction from one platform.'],
  ['Unified Campaign Management', 'Managing outbound across disconnected tools creates unnecessary complexity. 360Airo centralizes campaign creation, personalization, automation, follow-ups, and performance tracking in one intuitive platform. Launch campaigns faster, monitor results in real time, and optimize your outreach without constantly switching between applications.'],
];

const challenges = [
  ["2.1 Personalization Alone Doesn't Build Pipeline", "AI-powered personalization can help capture attention, but it isn't enough to run successful outbound. Teams still need prospect discovery, campaign automation, follow-ups, and analytics to consistently generate pipeline. 360Airo combines all of these capabilities in one platform, so you can execute—not just personalize."],
  ['2.2 Multiple Tools Slow Teams Down', 'Using separate tools for prospecting, personalization, campaign management, and reporting creates unnecessary complexity. Switching between platforms slows execution, fragments data, and makes collaboration harder. 360Airo unifies your outbound workflow, helping teams move faster with fewer tools.'],
  ['2.3 Scaling Outreach Becomes Difficult', 'As campaigns grow, maintaining personalization, managing follow-ups, and tracking performance becomes increasingly time-consuming. Without automation and a centralized workflow, scaling often means more manual work. 360Airo helps you scale personalized outreach without adding operational complexity.'],
  ['2.4 Limited Visibility Makes Optimization Harder', "Without clear campaign insights, it's difficult to know what's driving opens, replies, or conversions. Basic reporting only tells part of the story. 360Airo provides actionable analytics that help you optimize messaging, sequences, and campaign performance with confidence."],
];

const capabilities = [
  ['3.1 Discover and Build Targeted Prospect Lists', "Finding the right buyers is the first step to successful outbound. With 360Airo's built-in prospect database, you can discover verified contacts, segment audiences, and build highly targeted lists—all without relying on separate prospecting tools. Spend less time sourcing data and more time engaging qualified leads."],
  ['3.2 Create Personalized Outreach in Minutes', "Personalization shouldn't slow your team down. 360Airo uses AI to generate context-aware emails based on your prospects' roles, companies, and professional profiles. Instead of writing every message from scratch, your team can review, refine, and launch personalized campaigns in a fraction of the time."],
  ['3.3 Launch Multi-Step Campaigns with Ease', "Create automated sequences that guide prospects through every stage of your outreach. Schedule follow-ups, define campaign logic, and manage every touchpoint from one intuitive interface. Whether you're targeting a niche account list or thousands of prospects, campaigns remain organized and easy to manage."],
  ['3.4 Connect with Buyers Where They Respond', 'Modern outbound extends beyond email. Coordinate outreach across Email, LinkedIn, and SMS to create a consistent experience throughout the buyer journey. With every channel managed from one platform, your team can engage prospects more effectively without juggling multiple tools.'],
  ['3.5 Measure, Learn, and Improve', 'Successful outbound is built on continuous optimization. Track campaign performance through detailed analytics, monitor engagement trends, identify high-performing messaging, and uncover opportunities to improve future campaigns. Make every outreach smarter than the last.'],
  ['3.6 Manage Your Entire Outbound Workflow in One Place', 'From prospect discovery and AI personalization to campaign execution, follow-ups, and reporting, 360Airo brings your entire outbound process into a single platform. Eliminate fragmented workflows, reduce operational overhead, and give your revenue team one place to manage every campaign from start to finish.'],
];

const comparison = [
  ['AI personalization', 'Yes', 'Yes'],
  ['Built-in prospect database', 'No', 'Yes'],
  ['Email campaign builder', 'Limited', 'Yes'],
  ['Multi-channel outreach', 'Limited', 'Yes'],
  ['Automated follow-ups', 'Yes', 'Yes'],
  ['Campaign analytics', 'Basic', 'Yes'],
  ['Unified outbound platform', 'No', 'Yes'],
];

const testimonials = [
  ['We originally adopted Humanlinker for AI personalization, but we still relied on separate tools for prospecting, campaign management, and reporting. Switching to 360Airo gave us everything in one platform, making our outbound workflow much simpler and easier to scale.', 'Michael Thompson (Placeholder)', 'Sales Director'],
  ['The built-in prospect database and AI personalization eliminated several manual steps from our workflow. Campaign creation is significantly faster, and our team spends far less time researching prospects and preparing outreach. We can launch campaigns with much greater confidence.', 'Rachel Adams (Placeholder)', 'Head of Growth'],
  ['Managing prospecting, outreach, follow-ups, and reporting from one platform has made scaling outbound much easier for our team. Instead of juggling multiple tools, we now have complete visibility into every campaign, allowing us to optimize performance and focus on generating pipeline.', 'Daniel Cooper (Placeholder)', 'Revenue Operations Manager'],
];

const faqs = [
  ['Can I switch from Humanlinker to 360Airo without disrupting my outreach?', 'Yes. 360Airo is designed to make the transition seamless. You can quickly set up campaigns, import prospect lists, and continue running outbound with minimal interruption.'],
  ['How is 360Airo different from Humanlinker?', 'Humanlinker focuses primarily on AI-powered personalization. 360Airo combines AI personalization with prospect discovery, multi-channel outreach, campaign automation, analytics, and a built-in prospect database, giving revenue teams a complete outbound platform.'],
  ['Does 360Airo use AI to personalize emails?', 'Yes. 360Airo generates personalized email copy using prospect profiles, company information, and business context, helping teams scale relevant outreach without spending hours researching each lead.'],
  ['Do I need separate tools for prospecting or campaign management?', 'No. Unlike platforms that focus mainly on personalization, 360Airo includes verified prospect data, campaign creation, automated sequences, and performance analytics in one platform, reducing the need for additional outbound tools.'],
  ['Can I personalize outreach across multiple channels?', 'Yes. Beyond email, 360Airo lets you build coordinated LinkedIn and SMS sequences, ensuring prospects receive a consistent and personalized experience across every touchpoint.'],
  ['Is 360Airo suitable for growing sales teams?', "Absolutely. Whether you're a small SDR team or a larger revenue organization, 360Airo provides centralized campaign management, team collaboration, AI automation, and reporting that scale as your outbound efforts grow."],
];

function TextCards({ items }: { items: string[][] }) {
  return <div className="mt-7 grid gap-5">{items.map(([title, text]) => (
    <div key={title} className="rounded-[20px] border border-[#dbe3f4] bg-[#f8f9ff] p-5 md:p-6">
      <h3 className="mb-3 text-xl font-bold text-[#111827]">{title}</h3>
      <p className="text-base leading-8 text-[#4f5668]">{text}</p>
    </div>
  ))}</div>;
}

export default function HumanlinkerAlternativePage() {
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
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280] md:text-sm">
            <Link href="/alternative" className="font-medium text-[#111827]">Alternative</Link><span>›</span><span>Humanlinker Alternative</span>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]">
              <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" alt="Humanlinker alternative for outbound teams" fill priority className="object-cover opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" />
              <div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10">
                <p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">Humanlinker Alternative:<br />A Smarter Way to Scale Outbound</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">Humanlinker Alternative Guide</p>
              <h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">Humanlinker Alternative: A Smarter Way to Scale Outbound</h1>
              <p className="mb-8 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]">AI-powered personalization is only one part of successful outbound. Generate prospect lists, personalize every message, automate multi-channel campaigns, and manage your entire workflow with 360Airo.</p>
              <div className="mb-8 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#0C162C] px-4 py-3 text-xs text-white md:text-sm">
                {/* <Image src="/logonew.png" alt="360Airo Team" width={140} height={40} className="h-10 w-auto object-contain" /> */}
                <span>• 360AIRO Team</span><span>Updated: Aug 2026</span><span>•</span><span>9 min read</span>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-7 py-3.5 text-center font-semibold text-white">Start Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-[#6b8cff] px-7 py-3.5 text-center font-semibold text-[#4f63ff]">Book a Personalized Demo</Link></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
        <article className="min-w-0 space-y-14">
          <section id="why-360airo" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">1. Why Revenue Teams Choose 360Airo Over Humanlinker</h2><div className="space-y-4 text-base leading-8 text-[#4f5668]"><p>Humanlinker excels at AI-assisted personalization, but modern outbound requires much more than writing better emails.</p><p>Revenue teams need prospect discovery, campaign management, multi-channel outreach, follow-ups, and analytics—all working together. Instead of stitching together multiple tools, 360Airo brings every stage of outbound into a single platform, helping teams launch campaigns faster and scale with less complexity.</p></div><TextCards items={featureSections} /></section>
          <section id="look-beyond" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">2. Why Growing Teams Look Beyond Humanlinker</h2><p className="text-base leading-8 text-[#4f5668]">As outbound grows, many teams discover they need more than an AI writing assistant.</p><TextCards items={challenges} /></section>
          <section id="scale-outbound" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">3. Everything You Need to Scale Outbound</h2><TextCards items={capabilities} /></section>
          <section id="comparison" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">4. Humanlinker vs 360Airo</h2><div className="overflow-x-auto rounded-[20px] border border-[#dbe3f4] bg-white"><table className="w-full text-left"><thead className="bg-[#0C162C] text-white"><tr><th className="p-4">Capability</th><th className="p-4">Humanlinker</th><th className="p-4">360Airo</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]} className="border-t border-[#e7eaf3]"><td className="p-4 font-medium">{row[0]}</td><td className="p-4 text-[#5f6472]">{row[1]}</td><td className="p-4 font-semibold text-[#0ea5b7]">{row[2]}</td></tr>)}</tbody></table></div></section>
          <section id="switch" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">5. Why Teams Make the Switch</h2><div className="grid gap-5">{testimonials.map(([quote, name, role]) => <blockquote key={name} className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><p className="mb-4 leading-8 text-[#4f5668]">“{quote}”</p><div className="font-bold text-[#111827]">{name} <span className="block text-sm font-normal text-[#6b7280]">{role}</span></div></blockquote>)}</div></section>
          <section id="faqs" className="scroll-mt-28"><h2 className="mb-6 text-[28px] font-bold md:text-[34px]">6. Frequently Asked Questions</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[18px] border border-[#dbe3f4] bg-white p-5"><summary className="cursor-pointer list-none font-bold text-[#111827]">{question}</summary><p className="mt-4 leading-7 text-[#4f5668]">{answer}</p></details>)}</div></section>
          <section id="upgrade" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold md:text-[34px]">7. Upgrade from AI Personalization to Complete Outbound</h2><div className="mb-7 space-y-4 leading-8 text-gray-300"><p>Humanlinker helps teams personalize outreach. 360Airo goes further by combining prospect discovery, AI personalization, campaign automation, multi-channel engagement, and analytics into one unified platform.</p><p>If you're ready to simplify your outbound workflow while scaling personalized outreach, 360Airo gives your team everything needed to generate more conversations and more pipeline.</p></div><div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Start Your Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-white px-6 py-3 text-center font-semibold text-white">Book a Personalized Demo</Link></div></section>
        </article>
      </div></section>
    </main>
    <Footer />
  </>;
}
