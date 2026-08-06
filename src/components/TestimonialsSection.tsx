import React from 'react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "VP of Sales",
      title: "High-Growth SaaS",
      img: "https://i.pravatar.cc/150?u=thomas",
      text: "The Shared Collaboration Pipelines changed how we operate. Our SDRs book the meetings, and the handoff to our AEs is completely seamless. We haven't missed a hot reply since switching to 360-Airo."
    },
    {
      name: "Head of RevOps",
      title: "Deliverability and weekend mail protection",
      img: "https://i.pravatar.cc/150?u=gareth",
      text: "Finally, an outreach tool that respects deliverability at scale. The ability to enforce Weekend Protection and manage Mail-to-Mail gaps across 20 different sender accounts saved our domain reputation."
    },
    {
      name: "Director of Growth",
      title: "Agent Arena",
      img: "https://i.pravatar.cc/150?u=cong",
      text: "The Company Handbook upload feature completely changed our outreach. The AI actually understands our product nuances and writes micro-personalized LinkedIn notes that sound exactly like our best reps. Plus, having native LinkedIn chat in the same inbox as our emails keeps our context flawless. We've seen a 20% jump in reply rates."
    },
    {
      name: "VP of Sales",
      title: "Nanonets",
      img: "https://i.pravatar.cc/150?u=julia",
      text: "Setup took less than 9 minutes, but the impact on our team's velocity was massive. The Shared Collaboration Pipelines and custom Inbox Rules mean our SDRs and AEs are perfectly aligned without dropping the ball. We've reclaimed about 25 hours a week per rep that used to go to manual follow-ups and admin work."
    },
    {
      name: "Head of RevOps",
      title: "Sleek Analytics",
      img: "https://i.pravatar.cc/150?u=neo",
      text: "The AI mail-to-mail gap and weekend protection kept our domain health pristine. We're consistently hitting a 96% deliverability rate across 50+ timezones, and our campaign ROI has easily crossed the 4x mark."
    }
  ];

  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-28" style={{ backgroundColor: '#fdfdfe', position: 'relative', overflow: 'hidden' }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 relative z-10">
        <div className="max-w-[800px] text-center mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="testimonials-shine-text font-semibold uppercase tracking-widest mb-3" style={{ fontSize: '14px', letterSpacing: '0.1em' }}>
            Here from the business owners , founders say about 360 Airo
          </p>
          <h2 className="mt-3 font-display font-bold leading-[1.05] tracking-heading" style={{ color: '#0F172A', fontSize: 'clamp(36px,4vw,52px)', marginBottom: '16px', textAlign: 'center' }}>
            Why <span className="testimonials-shine-text">5,000+ businesses <span className="italic">switched</span></span>
          </h2>
          <p className="mt-4 text-body" style={{ color: '#475569', fontSize: '18px', textAlign: 'center' }}>
            Focus: email pipeline and Booking meetings
          </p>
        </div>

        <div className="mx-auto mt-10 flex items-center justify-center gap-10 md:gap-14" style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '40px' }}>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" fill="none" className="size-5" style={{ width: 20, height: 20 }} aria-label="G2">
                <circle cx="12" cy="12" r="12" fill="#FF492C"></circle>
                <text x="12" y="16.5" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">G2</text>
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#64748b', fontWeight: 600 }}>G2</span>
            </div>
            <div className="mt-1.5 flex items-baseline justify-center gap-0.5" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginTop: '6px' }}>
              <span className="font-display font-bold leading-none tracking-[-0.02em]" style={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>4.6</span>
              <span className="text-sm" style={{ color: '#94a3b8' }}>/5</span>
            </div>
            <p className="mt-0.5 text-xs" style={{ color: '#64748b', fontSize: '12px' }}>(773)</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" fill="none" className="size-5" style={{ width: 20, height: 20 }} aria-label="Trustpilot">
                <path d="M12 1.5l2.94 9.04H24l-7.32 5.32 2.8 8.64L12 19.18 4.52 24.5l2.8-8.64L0 10.54h9.06z" fill="#00B67A"></path>
                <path d="M17.16 17.5l-1.08-3.32L12 17.5z" fill="#005128"></path>
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#64748b', fontWeight: 600 }}>Trustpilot</span>
            </div>
            <div className="mt-1.5 flex items-baseline justify-center gap-0.5" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginTop: '6px' }}>
              <span className="font-display font-bold leading-none tracking-[-0.02em]" style={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>4.7</span>
              <span className="text-sm" style={{ color: '#94a3b8' }}>/5</span>
            </div>
            <p className="mt-0.5 text-xs" style={{ color: '#64748b', fontSize: '12px' }}>(743)</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" className="size-5" style={{ width: 20, height: 20 }} aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.07l3.66-2.98z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#64748b', fontWeight: 600 }}>Google</span>
            </div>
            <div className="mt-1.5 flex items-baseline justify-center gap-0.5" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginTop: '6px' }}>
              <span className="font-display font-bold leading-none tracking-[-0.02em]" style={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>4.3</span>
              <span className="text-sm" style={{ color: '#94a3b8' }}>/5</span>
            </div>
            <p className="mt-0.5 text-xs" style={{ color: '#64748b', fontSize: '12px' }}>(197)</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4" style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, #fdfdfe, transparent)', zIndex: 10, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, #fdfdfe, transparent)', zIndex: 10, pointerEvents: 'none' }}></div>

        <div className="flex gap-4 testimonials-marquee" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
          {[...reviews, ...reviews].map((review, i) => (
            <div key={`r1-${i}`} className="shrink-0 p-5" style={{ width: '340px', flexShrink: 0, padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
              <div className="flex gap-0.5" style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ marginTop: '16px', fontSize: '15px', lineHeight: '1.6', color: '#334155', flex: 1 }}>
                “{review.text}”
              </p>
              <div className="mt-4 flex items-center gap-2.5" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={review.img} alt={review.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <p className="font-semibold" style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A', margin: 0 }}>{review.name}</p>
                  <p className="text-muted-foreground" style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}