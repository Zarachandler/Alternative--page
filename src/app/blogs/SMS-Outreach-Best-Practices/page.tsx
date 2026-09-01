'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../../../styles/blogs.css';

const paragraphs = [
  "Their inboxes are crowded. Their calendars are full. And every day, they're flooded with emails, calls, and LinkedIn messages competing for attention.",
  "That's why more revenue teams are adding SMS to their outreach strategy.",
  'When used correctly, business SMS outreach creates a direct and convenient way to connect with prospects and customers. It helps sales teams follow up faster, improve response rates, and keep conversations moving throughout the buyer journey.',
  "But success with SMS isn't about sending more messages.",
  "It's about sending the right message, at the right time, to the right person.",
  "Let's explore the best practices that help revenue teams make SMS outreach more effective.",
  'SMS outreach is the practice of using text messages to engage prospects, customers, and leads throughout the sales process.',
  'Unlike email, which may sit unread for hours or days, SMS creates an immediate communication channel that allows revenue teams to reach buyers quickly and efficiently.',
  'Modern SMS outreach software enables teams to:',
];

const bullets = [
  'Send personalized text messages at scale',
  'Automate follow-ups',
  'Track conversations',
  'Manage responses',
  'Integrate messaging into existing sales workflows',
];

const remainingParagraphs = [
  'The most successful revenue teams use SMS as part of a broader multichannel strategy that keeps conversations moving across different touchpoints.',
  'Buyers expect fast communication.',
  "Whether they're requesting a demo, scheduling a meeting, or asking a question, delays can create friction in the buying process.",
  "SMS helps reduce that friction by providing a channel that's immediate, personal, and easy to respond to.",
  'For revenue teams, that means faster engagement and more opportunities to build relationships.',
  'Reaching prospects is becoming increasingly difficult.',
  'Email deliverability challenges, crowded inboxes, and declining response rates have pushed sales teams to look for alternative engagement channels.',
  'Business SMS outreach helps fill that gap.',
  'Most people carry their phones everywhere.',
  'SMS allows revenue teams to connect with prospects on a channel they already use throughout the day.',
  'A quick text can often accomplish what several emails cannot.',
  "Whether you're confirming a meeting, sharing a resource, or following up after a conversation, SMS helps keep momentum moving.",
  'Buyers value convenience.',
  'Providing an easy way to communicate through text messaging can create a smoother and more responsive experience throughout the sales process.',
  'Not every text message generates results.',
  'The most effective programs follow a set of proven best practices.',
  'This is the foundation of successful SMS outreach.',
  "Before sending text messages, ensure recipients have opted in and understand what type of communication they'll receive.",
  'Permission-based messaging helps maintain trust while supporting compliance requirements.',
  'SMS is designed for quick communication.',
  'Long messages can feel overwhelming and reduce engagement.',
  'Focus on one objective per message and communicate it clearly.',
  'Instead of sending multiple paragraphs, provide a concise update or call to action that recipients can understand immediately.',
  'Salesforce recommends keeping SMS messages concise and relevant to improve clarity and effectiveness.',
  'Generic outreach rarely performs well.',
  'Modern SMS outreach software allows teams to personalize messages using CRM data, customer history, and engagement activity.',
  'Simple personalization can make conversations feel more relevant and human.',
  'That relevance often leads to better engagement.',
  'Timing matters.',
  'A well-timed message can move a conversation forward. A poorly timed message can be ignored.',
  'Consider where prospects are in the buying journey before sending outreach.',
  'The most effective SMS programs align communication with customer actions and sales milestones.',
  'Every message should answer one question:',
  'What do you want the recipient to do next?',
  "Whether it's scheduling a meeting, confirming attendance, replying to a question, or reviewing a resource, clear calls to action make it easier for recipients to respond.",
  'SMS can support multiple stages of the customer journey.',
  'Speed matters when engaging inbound leads.',
  'A quick text message can help establish contact before competitors do.',
  'SMS is an effective way to reduce no-shows and improve attendance rates.',
  'Simple reminders can help prospects stay engaged and prepared for scheduled conversations.',
  'After a sales conversation, SMS can reinforce key takeaways and keep momentum moving.',
  "SMS isn't limited to prospecting.",
  'Many revenue teams use text messaging to support onboarding, renewals, customer success initiatives, and upsell opportunities.',
  'Even well-intentioned outreach can create problems when best practices are ignored.',
  'Frequency matters.',
  'Over-messaging can lead to disengagement and opt-outs.',
  'SMS is a conversational channel.',
  'Long-form messaging often feels out of place.',
  'Permission and opt-out management should never be an afterthought.',
  'Compliance helps protect both your brand and your audience.',
  "Without visibility into results, it's difficult to improve.",
  "Track response rates, conversions, engagement trends, and campaign outcomes to understand what's working.",
  'Managing SMS manually becomes difficult as programs scale.',
  'This is where SMS outreach software becomes valuable.',
  'Automation helps teams send timely messages without creating additional administrative work.',
  'SMS outreach software allows teams to deliver personalized experiences across larger audiences.',
  'Keeping conversations connected to customer records provides greater visibility and context for revenue teams.',
  'The right platform helps teams monitor engagement, response rates, and revenue impact from SMS initiatives.',
  "SMS isn't about replacing email.",
  "It's about creating another opportunity to connect with buyers in a way that's timely, relevant, and convenient.",
  'When revenue teams combine strong messaging, thoughtful timing, and the right SMS outreach software, they create experiences that feel more personal and responsive.',
  'The result is stronger engagement, faster conversations, and a more connected customer journey.',
  'As buyer expectations continue to evolve, business SMS outreach is becoming an increasingly valuable part of modern revenue strategies.',
  'SMS outreach software helps businesses send, automate, track, and manage text message conversations with prospects and customers.',
  'Yes. Many revenue teams use SMS to support lead follow-up, meeting reminders, customer engagement, and sales conversations.',
  'Short, clear messages generally perform best. Focus on one objective and one call to action per message.',
  'Common metrics include response rates, click-through rates, conversions, opt-outs, and revenue influence.',
  'SMS works best when combined with channels such as email, phone, and social selling, helping revenue teams engage buyers across multiple touchpoints.',
  'Want to improve outreach performance at scale?',
  'Explore how AI-powered revenue orchestration helps revenue teams automate engagement, optimize outreach timing, and create more connected customer journeys across every channel.',
];

const sections = [
  { id: 'sms-outreach', label: 'What Is SMS Outreach?' },
  { id: 'why-sms', label: 'Why SMS Matters' },
  { id: 'business-sms', label: 'Business SMS Outreach' },
  { id: 'best-practices', label: 'SMS Best Practices' },
  { id: 'customer-journey', label: 'SMS Across the Customer Journey' },
  { id: 'mistakes', label: 'Common SMS Mistakes' },
  { id: 'software', label: 'SMS Outreach Software' },
  { id: 'conclusion', label: 'Create More Connected Journeys' },
];

function Paragraphs({ items }: { items: string[] }) {
  return <div className="space-y-4 text-base leading-8 text-[#4f5668]">{items.map((item) => <p key={item}>{item}</p>)}</div>;
}

export default function SmsOutreachPost() {
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

  return <div className="blog-shell">
      <Navbar activeTab="resources" />
      <main className="min-h-screen bg-[#f4f2fb] text-[#111827] pt-20">
        <section className="border-b border-[#ddd9ef] px-4 pb-14 pt-8 md:pt-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-2 text-sm text-[#6b7280]"><Link href="/blogs" className="font-medium text-[#111827]">Blogs</Link><span>›</span><Link href="/blogs/category/sms">SMS</Link><span>›</span><span>Your prospects are busy.</span></div>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a3f7a] via-[#0b5ca8] to-[#36a7e8] shadow-xl md:min-h-[410px]">
                <Image src="https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&w=1200&q=80" alt="SMS outreach" fill priority className="object-cover opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#072f63]/95 via-[#0b4f96]/70 to-transparent" />
                <div className="relative z-10 flex min-h-[320px] items-center p-8 md:min-h-[410px] md:p-10"><p className="max-w-[470px] text-3xl font-bold leading-tight text-white md:text-[44px]">Your prospects<br />are busy.</p></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0ea5b7]">SMS Outreach Guide</p>
                <h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[40px]">Your prospects are busy.</h1>
                <p className="mb-8 text-[15px] leading-relaxed text-[#5f6472] md:text-[17px]">{paragraphs[0]}</p>
                <div className="mb-8 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#0C162C] px-4 py-3 text-xs text-white md:text-sm"><span>• 360AIRO Team</span><span>Updated: Aug 2026</span><span>•</span><span>8 min read</span></div>
                <div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-7 py-3.5 text-center font-semibold text-white">Start Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-[#6b8cff] px-7 py-3.5 text-center font-semibold text-[#4f63ff]">Book a Personalized Demo</Link></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16"><div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="sticky top-[20vh] hidden self-start lg:block"><h2 className="mb-4 font-bold normal-case">Table of Contents</h2><nav className="space-y-1.5 border-l border-[#d9dfef] pl-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={`block rounded-r-lg px-3 py-2 text-[13px] ${activeId === section.id ? 'bg-[#edf2ff] font-semibold text-[#2f66db]' : 'text-[#4b5563]'}`}>{section.label}</a>)}</nav></aside>
          <article className="min-w-0 space-y-14">
            <section id="sms-outreach" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">What Is SMS Outreach?</h2><Paragraphs items={paragraphs.slice(1)} /><div className="mt-7 rounded-[20px] border border-[#dbe3f4] bg-[#f8f9ff] p-5 md:p-6"><ul className="list-disc space-y-3 pl-5 text-base leading-8 text-[#4f5668]">{bullets.map(item => <li key={item}>{item}</li>)}</ul></div></section>
            <section id="why-sms" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">Why SMS Matters for Revenue Teams</h2><Paragraphs items={remainingParagraphs.slice(0, 5)} /></section>
            <section id="business-sms" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">Business SMS Outreach</h2><Paragraphs items={remainingParagraphs.slice(5, 14)} /></section>
            <section id="best-practices" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">SMS Outreach Best Practices</h2><div className="rounded-[20px] border border-[#dbe3f4] bg-[#f8f9ff] p-5 md:p-6"><Paragraphs items={remainingParagraphs.slice(14, 35)} /></div></section>
            <section id="customer-journey" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">SMS Across the Customer Journey</h2><Paragraphs items={remainingParagraphs.slice(35, 43)} /></section>
            <section id="mistakes" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">Common SMS Outreach Mistakes</h2><div className="rounded-[20px] border border-[#dbe3f4] bg-white p-6 shadow-sm"><Paragraphs items={remainingParagraphs.slice(43, 53)} /></div></section>
            <section id="software" className="scroll-mt-28"><h2 className="mb-5 text-[28px] font-bold md:text-[34px]">SMS Outreach Software</h2><Paragraphs items={remainingParagraphs.slice(53, 59)} /></section>
            <section id="conclusion" className="scroll-mt-28 rounded-[28px] bg-[#0C162C] p-7 text-white md:p-10"><h2 className="mb-4 text-[28px] font-bold text-white md:text-[34px]">Create More Connected Customer Journeys</h2><div className="mb-7 space-y-4 text-base leading-8 text-gray-300">{remainingParagraphs.slice(59).map(item => <p key={item}>{item}</p>)}</div><div className="flex flex-col gap-4 sm:flex-row"><Link href="https://app.360airo.com/" className="rounded-xl bg-[#4f63ff] px-6 py-3 text-center font-semibold text-white">Start Your Free Trial</Link><Link href="/book-a-demo" className="rounded-xl border border-white px-6 py-3 text-center font-semibold text-white">Book a Personalized Demo</Link></div></section>
          </article>
        </div>
        </section>
      </main>
      <Footer />
    </div>;
}
