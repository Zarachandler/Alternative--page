"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/PricingPage.css';

type Tab = 'outreach' | 'ai' | 'agencies';

const CheckIcon = () => (
  <svg className="pp-feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AIStarIcon = () => (
  <svg className="pp-feature-icon" style={{ color: 'var(--pp-purple)' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

type AddOnTab = 'channel' | 'ai' | 'validation';

const addOnTabs: { id: AddOnTab; label: string }[] = [
  { id: 'channel', label: 'Channel Add-ons' },
  { id: 'ai', label: 'AI & Live Data' },
  { id: 'validation', label: 'Email Validation' },
];

const getAddOnPrice = (credits: number) => Math.round((credits / 2500) * 219);

const salesEngagementFeatures = [
  ['Unlimited sequences', 'check', 'check', 'check', 'check'],
  ['Mailboxes', 'Unlimited', '5 mailboxes / user', 'Unlimited', 'Unlimited'],
  ['Email warm-ups in Mailtoaster.ai', 'Unlimited', '5 mailboxes / user', 'Unlimited', 'Unlimited'],
  ['Email Sequences', 'check', 'check', 'check', 'check'],
  ['Centralized Inbox', 'check', 'check', 'check', 'check'],
  ['Semi-automated LinkedIn tasks', 'check', 'check', 'check', 'check'],
  ['LinkedIn automation', '$69/month per account', 'check', 'check', '$69/month per account'],
  ['LinkedIn AI voice messages', 'check', 'check', 'check', 'check'],
  ['AI variables', 'check', 'check', 'check', 'check'],
  ['Calls & SMS', 'no', 'check', 'check', '$29/month per user'],
  ['WhatsApp tasks', 'check', 'check', 'check', 'check'],
  ['Task flows', 'check', 'check', 'check', 'check'],
  ['Manual emails', 'check', 'check', 'check', 'check'],
  ['Workflow automation (triggers)', 'check', 'check', 'check', 'check'],
  ['Conditional sequences', 'check', 'check', 'check', 'check'],
  ['Meeting scheduler', 'check', 'check', 'check', 'check'],
  ['Email and sequence templates', 'check', 'check', 'check', 'check'],
  ['AI email assistant', 'check', 'check', 'check', 'check'],
  ['Gmail & Chrome extensions', 'check', 'check', 'check', 'check'],
] as const;

const liveDataFeatures = [
  ['Data credits / month', '50 included', '50 included', 'Included', '50 included'],
  ['More Data Credits', 'Paid Packages', 'Paid Packages', 'Paid Packages', 'Paid Packages'],
  ['Verified Emails', 'check', 'check', 'check', 'check'],
  ['Advanced filters', 'check', 'check', 'check', 'check'],
  ['Buyer Intent Signals', 'check', 'check', 'check', 'check'],
  ['Technology filter', 'check', 'check', 'check', 'check'],
  ['CSV Export', 'check', 'check', 'check', 'check'],
  ['CRM Integrations', 'check', 'check', 'check', 'check'],
] as const;

const deliverabilityFeatures = [
  ['Gsuite, Microsoft & SMTP', 'check', 'check', 'check', 'check'],
  ['SPF, DKIM, DMARC, MX', 'check', 'check', 'check', 'check'],
  ['Custom tracking domains', 'check', 'check', 'check', 'check'],
  ['Email warm-ups in Mailtoaster.ai', 'check', 'check', 'check', 'check'],
  ['Google Postmaster integration', 'check', 'check', 'check', 'check'],
  ['Email health check', 'check', 'check', 'check', 'check'],
  ['Inbox rotation', 'check', 'check', 'check', 'check'],
  ['Custom fields', 'check', 'check', 'check', 'check'],
  ['Liquid syntax', 'check', 'check', 'check', 'check'],
  ['ESP matching', 'check', 'check', 'check', 'check'],
  ['Global block list', 'check', 'check', 'check', 'check'],
] as const;

const integrationFeatures = [
  ['Hubspot', 'check', 'check', 'check', 'check'],
  ['Salesforce', 'check', 'check', 'check', 'check'],
  ['Pipedrive', 'check', 'check', 'check', 'check'],
  ['Copper, Zendesk, Close.io', 'check', 'check', 'check', 'check'],
  ['Zapier, Make & 100+ Integrations', 'check', 'check', 'check', 'check'],
  ['API', 'check', 'check', 'check', 'check'],
  ['n8n node', 'check', 'check', 'check', 'check'],
  ['MCP', 'check', 'check', 'check', 'check'],
  ['High-volume API & Webhooks', 'check', 'check', 'check', 'check'],
  ['SOC 1 compliance report', 'no', 'check', 'check', 'check'],
] as const;

const supportFeatures = [
  ['Live chat support', 'check', 'check', 'check', 'check'],
  ['Onboarding with the CSM', 'Included on annual', 'Included on annual', 'Included', 'Included on annual'],
  ['Deliverability service', 'no', 'no', 'check', 'check'],
  ['Priority support', 'no', 'check', 'check', 'check'],
  ['Video content library', 'check', 'check', 'check', 'check'],
] as const;

const pricingFaqs = [
  ['What is Reply.io’s sales engagement platform & cold email outreach software?', 'Reply helps teams manage multichannel outreach, automate follow-ups, and keep prospect conversations in one place.'],
  ['Do you really offer “Unlimited Mailboxes and Warmups”?', 'Yes. Eligible plans include unlimited mailbox connections and email warm-up features as shown in the plan comparison.'],
  ['What is “Active Contacts”?', 'Active contacts are the prospects currently being reached through your campaigns during the billing period.'],
  ['What is “Unlimited Emails Monthly”?', 'It means there is no monthly email-send cap from the platform. Your sending volume should still follow mailbox and deliverability best practices.'],
  ['What is “Unlimited contact storage”?', 'You can keep and organize your contact records without a storage limit in your selected plan.'],
  ['Can I integrate Reply.io with CRMs & other tools I’m using?', 'Yes. Reply.io supports CRM connections and integrations with the tools your team uses every day.'],
  ['How can I get started with Reply.io?', 'Start a free trial, connect your mailbox, and build your first outreach sequence.'],
  ['What can I try during the 14-day free trial?', 'You can explore the core outreach, automation, and collaboration features available in your selected plan.'],
  ['Can I get a demo of Reply.io?', 'Yes. Contact the sales team to arrange a product demo tailored to your workflow.'],
  ['What’s AI SDR by Reply.io?', 'AI SDR is Reply.io’s AI-assisted solution for researching prospects, personalizing outreach, and helping manage replies.'],
  ['Can I get help with my technical setup & onboarding?', 'Yes. Support and onboarding options are available based on your plan.'],
  ['Considering switching to Reply?', 'Our team can help you evaluate Reply.io and plan a smooth transition from your current workflow.'],
  ['Are there any limits to contact storage?', 'Contact storage is unlimited on plans that include the Unlimited contact storage feature.'],
  ['Are you an AI agent looking for Reply.io pricing?', 'Visit the pricing page or contact our team for information on the plan that fits your needs.'],
] as const;

function ReplyFeatureCard({
  title,
  icon,
  variant,
  features,
}: {
  title: string;
  icon: string;
  variant: string;
  features: ReadonlyArray<readonly string[]>;
}) {
  return (
    <div className="reply-feature-card">
      <div className={`reply-feature-card-header reply-feature-card-header--${variant}`}>
        <span className={`reply-feature-card-icon reply-feature-card-icon--${variant}`}>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="reply-feature-card-table">
        {features.map(([feature, ...plans]) => (
          <div className="reply-feature-card-row" key={feature}>
            <div className="reply-feature-card-cell reply-feature-card-cell--label">{feature}</div>
            {plans.map((plan, index) => (
              <div className="reply-feature-card-cell" key={`${feature}-${index}`}>
                {plan === 'check' ? (
                  <span className="reply-sales-engagement-check">✓</span>
                ) : plan === 'no' ? (
                  <span className="reply-sales-engagement-check reply-sales-engagement-check--no">×</span>
                ) : (
                  plan
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('outreach');
  const [activeAddOn, setActiveAddOn] = useState<AddOnTab>('channel');
  const [aiCredits, setAiCredits] = useState(2500);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentAddOnPrice = getAddOnPrice(aiCredits);
  const [emailContacts, setEmailContacts] = useState(5000);
  const emailVolumePrice = Math.round(89 + ((emailContacts - 1000) / 9000) * 70);

  return (
    <div className="pricing-page-wrapper">
      <Navbar activeTab="pricing" />

      <main className="pricing-page-container">
        
        {/* HERO SECTION */}
        <section className="pricing-hero pp-animate-reveal">
          <div className="reply-pricing-shell">
            <div className="reply-pricing-header">
              <span className="reply-pricing-highlight">Crush</span>
              <span className="reply-pricing-title"> your sales quota</span>
            </div>

            <div className="reply-pricing-controls">
              <div className="reply-pricing-tabs" data-active={activeTab}>
                <button
                  className={`reply-pricing-tab ${activeTab === 'outreach' ? 'active' : ''}`}
                  onClick={() => setActiveTab('outreach')}
                  type="button"
                >
                  Sales Outreach
                </button>
                <button
                  className={`reply-pricing-tab ${activeTab === 'ai' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ai')}
                  type="button"
                >
                  AI SDR
                </button>
                <button
                  className={`reply-pricing-tab ${activeTab === 'agencies' ? 'active' : ''}`}
                  onClick={() => setActiveTab('agencies')}
                  type="button"
                >
                  Agencies
                </button>
              </div>

              <div className="reply-pricing-billing">
                <div className="reply-billing-toggle">
                  <span
                    className={`reply-toggle-label ${!isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(false)}
                  >
                    Annual
                  </span>
                  <button
                    className="reply-toggle-switch"
                    data-yearly={isYearly}
                    onClick={() => setIsYearly(!isYearly)}
                    type="button"
                    aria-label="Toggle billing cycle"
                  >
                    <span className="reply-toggle-thumb" />
                  </button>
                  <span
                    className={`reply-toggle-label ${isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(true)}
                  >
                    Monthly
                  </span>
                </div>
              </div>
            </div>

            <div className="reply-pricing-grid">
              <div className="reply-plan-card reply-plan-card--blue">
                <div className="reply-plan-name">Email Volume</div>
                <div className="reply-plan-description">Send high-volume outbound emails without hitting inbox limits or manual bottlenecks.</div>

                <div className="reply-plan-price-row">
                  <span className="reply-plan-start">Starts from</span>
                  <div className="reply-plan-price"><span>$</span>{emailVolumePrice}</div>
                  <div className="reply-plan-per">per user /month</div>
                  <div className="reply-plan-billed">Billed annually</div>
                </div>

                <div className="reply-price-bar-wrap">
                  <div
                    className="reply-price-bar-track"
                    style={{ '--reply-slider-progress': `${((emailContacts - 1000) / 9000) * 100}%` } as React.CSSProperties}
                  >
                    <input
                      className="reply-price-bar-slider"
                      type="range"
                      min={1000}
                      max={10000}
                      step={1000}
                      value={emailContacts}
                      onChange={(event) => setEmailContacts(Number(event.target.value))}
                      aria-label="Adjust active contacts"
                    />
                  </div>
                  <div className="reply-price-bar-label">
                    <span>{emailContacts.toLocaleString()} active contacts/month</span>
                    <span className="reply-price-info">i</span>
                  </div>
                </div>

                <button type="button" className="reply-plan-button reply-plan-button--secondary">Sign up for Free</button>

                <div className="reply-plan-chapter">Channels</div>
                <div className="reply-plan-features">
                  <div className="reply-plan-feature">Email Automation = mailboxes</div>
                  <div className="reply-plan-feature">LinkedIn Automation $69 /mo/acc</div>
                  <div className="reply-plan-feature">Calls & SMS Automation $29 /mo/acc</div>
                </div>

                <div className="reply-plan-chapter">Features</div>
                <div className="reply-plan-features">
                  <div className="reply-plan-feature">Email warmup</div>
                  <div className="reply-plan-feature">Unlimited emails</div>
                  <div className="reply-plan-feature">50 live data credits/month</div>
                  <div className="reply-plan-feature">Up to 200 website visitors /mo</div>
                  <div className="reply-plan-feature">Anti-spam & deliverability suite</div>
                </div>
              </div>

              <div className="reply-plan-card reply-plan-card--pink">
                <div className="reply-plan-badge">Best value for teams</div>
                <div className="reply-plan-name">Multichannel</div>
                <div className="reply-plan-description">All-inclusive outreach via email, LinkedIn, SMS, and Phone at one fixed price.</div>

                <div className="reply-plan-price-row">
                  <span className="reply-plan-start">Starts from</span>
                  <div className="reply-plan-price reply-plan-price--pink"><span>$</span>89</div>
                  <div className="reply-plan-per">per user /month</div>
                  <div className="reply-plan-billed">Billed annually</div>
                </div>

                <button type="button" className="reply-plan-button reply-plan-button--primary">Start 14-day trial</button>

                <div className="reply-plan-chapter">Channels</div>
                <div className="reply-plan-features">
                  <div className="reply-plan-feature">Email Automation</div>
                  <div className="reply-plan-feature">LinkedIn Automation</div>
                  <div className="reply-plan-feature">Calls & SMS Automation</div>
                  <div className="reply-plan-feature">WhatsApp (Semi-Automation)</div>
                  <div className="reply-plan-feature">Any Channel via Zapier Step</div>
                </div>

                <div className="reply-plan-chapter">Features</div>
                <div className="reply-plan-features">
                  <div className="reply-plan-feature">Unlimited active contacts</div>
                  <div className="reply-plan-feature">Email warmup</div>
                  <div className="reply-plan-feature">Unlimited emails</div>
                  <div className="reply-plan-feature">50 live data credits/month</div>
                  <div className="reply-plan-feature">Up to 200 website visitors /mo</div>
                  <div className="reply-plan-feature">Anti-spam & deliverability suite</div>
                  <div className="reply-plan-feature">Onboarding with the CSM</div>
                  <div className="reply-plan-feature">Team Performance Report</div>
                  <div className="reply-plan-feature">Channel Efficiency Report</div>
                  <div className="reply-plan-feature">Export CSV stats</div>
                </div>
              </div>

              <div className="reply-plan-card reply-plan-card--purple">
                <div className="reply-plan-mini-badge">or join the AI Side</div>
                <div className="reply-plan-name">Hire Jason AI SDR</div>
                <div className="reply-plan-description">One Fully Automated Solution to help you generate 10x More Opportunities</div>

                <div className="reply-plan-price-row">
                  <span className="reply-plan-start">Starts from</span>
                  <div className="reply-plan-price reply-plan-price--purple"><span>$</span>500</div>
                  <div className="reply-plan-per">/month</div>
                </div>

                <div className="reply-plan-features reply-plan-features--compact">
                  <div className="reply-plan-feature">24/7 Operations</div>
                  <div className="reply-plan-feature">Realtime contacts search</div>
                  <div className="reply-plan-feature">Intent signals</div>
                  <div className="reply-plan-feature">AI personalization</div>
                  <div className="reply-plan-feature">AI-generated responses</div>
                </div>

                <a href="https://calendly.com/reply-sales-team/ai-sdr-demo" className="reply-plan-button reply-plan-button--primary" target="_blank" rel="noreferrer">
                  Hire Jason AI
                </a>
              </div>
            </div>

            <div className="reply-pricing-compare-row">
              <a href="#fundamentals" className="reply-pricing-compare-link">
                See detailed comparison
              </a>
            </div>
          </div>
        </section>

        <section className="pricing-addon-section pp-animate-reveal">
          <div className="pricing-addon-shell">
            <h2 className="pricing-addon-title">Explore Our Add-ons</h2>

            <div className="pricing-addon-panel">
              <aside className="pricing-addon-sidebar">
                {addOnTabs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`pricing-addon-tab ${activeAddOn === item.id ? 'active' : ''}`}
                    onClick={() => setActiveAddOn(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </aside>

              <div className={`pricing-addon-content ${activeAddOn === 'ai' ? 'pricing-addon-content--ai' : ''}`}>
                {activeAddOn === 'channel' && (
                  <>
                    <h3 className="pricing-addon-heading">Channel Add-ons</h3>
                    <p className="pricing-addon-copy">
                      Go beyond email with LinkedIn automation and built-in calling. Send connection requests,
                      messages, and make calls, all from the same platform.
                    </p>

                    <button type="button" className="pricing-addon-cta">Start Your Free Trial</button>

                    <div className="pricing-addon-grid">
                      <div className="pricing-addon-card pricing-addon-card--blue">
                        <div className="pricing-addon-card-header">LinkedIn</div>
                        <div className="pricing-addon-card-body">
                          <p>Automate LinkedIn outreach—send requests, messages, and more to engage prospects.</p>
                          <div className="pricing-addon-price-wrap">
                            <span className="pricing-addon-price-symbol">$</span>
                            <span className="pricing-addon-price">69</span>
                            <span className="pricing-addon-price-text">per account</span>
                          </div>
                          <ul className="pricing-addon-features">
                            <li>Send connection requests</li>
                            <li>Send messages and InMails</li>
                            <li>Send attachments &amp; voice messages</li>
                            <li>Like posts, follow profiles and endorse skills</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pricing-addon-card pricing-addon-card--green">
                        <div className="pricing-addon-card-header">Calls &amp; SMS</div>
                        <div className="pricing-addon-card-body">
                          <p>Integrate calls and SMS—send texts, make calls, and track analytics.</p>
                          <div className="pricing-addon-price-wrap">
                            <span className="pricing-addon-price-symbol">$</span>
                            <span className="pricing-addon-price">29</span>
                            <span className="pricing-addon-price-text">per account</span>
                          </div>
                          <ul className="pricing-addon-features">
                            <li>Build-in dialer</li>
                            <li>Send automated SMS at scale</li>
                            <li>Call resolution and transcripts</li>
                            <li>Leave AI-generated, personalized voice messages</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {(activeAddOn === 'ai' || activeAddOn === 'validation') && (
                  <>
                    <h3 className="pricing-addon-heading">
                      {activeAddOn === 'ai' ? 'AI & Live Data' : 'Email Validation'}
                    </h3>
                    <p className="pricing-addon-copy">
                      {activeAddOn === 'ai'
                        ? 'Use AI to personalize outreach at scale and power it with live data. Always reach the right people with the right message.'
                        : 'Validate and clean your lead data in real time so your outreach reaches the correct people with better deliverability and lower bounce risk.'}
                    </p>

                    <button type="button" className="pricing-addon-cta">Start Your Free Trial</button>

                    <div className="pricing-addon-price-panel">
                      <div className="pricing-addon-panel-header">
                        {activeAddOn === 'ai' ? 'AI and Live Data Credits' : 'Email Validation Credits'}
                      </div>

                      <div className="pricing-addon-price-slider">
                        <div className="pricing-addon-slider-label">{aiCredits.toLocaleString()} credits</div>
                        <div className="pricing-addon-scale">
                          <span>200</span>
                          <span>500</span>
                          <span>1000</span>
                          <span>2500</span>
                          <span>6000</span>
                          <span>10000</span>
                        </div>
                        <input
                          type="range"
                          min={200}
                          max={10000}
                          step={50}
                          value={aiCredits}
                          onChange={(event) => setAiCredits(Number(event.target.value))}
                          aria-label="Adjust credit amount"
                        />
                      </div>

                      <div className="pricing-addon-monthly-price">
                        <span className="pricing-addon-price-symbol">$</span>
                        <span className="pricing-addon-price">{currentAddOnPrice}</span>
                        <span className="pricing-addon-price-text">per month</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="reply-compare-section pp-animate-reveal">
          <div className="reply-compare-shell">
            <h2 className="reply-compare-title">How does Reply stack up against others?</h2>
            <p className="reply-compare-subtitle">
              Reply is perfect for founders, sales teams, and agencies who need results fast and without juggling 5+ tools.
              Run multichannel campaigns (with AI SDR and under total control), enrich contacts in real time, and track
              every reply with built-in analytics.
            </p>

            <div className="reply-compare-table-wrap">
              <div className="reply-compare-table">
                <div className="reply-compare-header-row">
                  <div className="reply-compare-header-cell reply-compare-header-cell--left">Compare With</div>
                  <div className="reply-compare-header-cell
                    reply-compare-header-cell--feature">Feature</div>
                  <div className="reply-compare-header-cell reply-compare-toggle-cell">
                    <span className="reply-compare-toggle-pill reply-compare-toggle-pill--muted">Instantly</span>
                    <span className="reply-compare-toggle-pill reply-compare-toggle-pill--active">Reply</span>
                  </div>
                </div>

                <div className="reply-compare-row">
                  <div className="reply-compare-cell reply-compare-cell--left">
                    <span className="reply-compare-search-icon">⌕</span>
                    <span>Search</span>
                  </div>
                  <div className="reply-compare-cell reply-compare-cell--feature">Multichannel Automation</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--no">✕</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                </div>

                <div className="reply-compare-row reply-compare-row--logos">
                  <div className="reply-compare-cell reply-compare-cell--left reply-compare-logos-wrap">
                    <div className="reply-compare-logo-box reply-compare-logo-box--purple"><img src="/llm-logos/images.png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--blue"><img src="/llm-logos/images (1).png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--yellow"><img src="/llm-logos/3d-claude-ai-logo.jpg" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--gray"><img src="/llm-logos/Google_Gemini_icon_2025.svg.png" alt="AI app logo" /></div>
                  </div>
                  <div className="reply-compare-cell reply-compare-cell--feature">Unlimited Mailboxes</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                </div>

                <div className="reply-compare-row">
                  <div className="reply-compare-cell reply-compare-cell--left reply-compare-logos-wrap">
                    <div className="reply-compare-logo-box reply-compare-logo-box--blue"><img src="/llm-logos/images.png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--white"><img src="/llm-logos/images (1).png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--green"><img src="/llm-logos/3d-claude-ai-logo.jpg" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--purple"><img src="/llm-logos/Google_Gemini_icon_2025.svg.png" alt="AI app logo" /></div>
                  </div>
                  <div className="reply-compare-cell reply-compare-cell--feature">Unlimited Monthly Emails</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--no">✕</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                </div>

                <div className="reply-compare-row">
                  <div className="reply-compare-cell reply-compare-cell--left reply-compare-logos-wrap">
                    <div className="reply-compare-logo-box reply-compare-logo-box--purple"><img src="/llm-logos/Google_Gemini_icon_2025.svg.png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--gray"><img src="/llm-logos/images.png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--orange"><img src="/llm-logos/images (1).png" alt="AI app logo" /></div>
                    <div className="reply-compare-logo-box reply-compare-logo-box--blue"><img src="/llm-logos/3d-claude-ai-logo.jpg" alt="AI app logo" /></div>
                  </div>
                  <div className="reply-compare-cell reply-compare-cell--feature">Unlimited Contacts Storage</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--no">✕</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                </div>

                <div className="reply-compare-row">
                  <div className="reply-compare-cell reply-compare-cell--left" />
                  <div className="reply-compare-cell reply-compare-cell--feature">Advanced Reporting</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--no">✕</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                </div>

                <div className="reply-compare-row">
                  <div className="reply-compare-cell reply-compare-cell--left" />
                  <div className="reply-compare-cell reply-compare-cell--feature">Inflated open rates</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--no">✕</div>
                </div>

                <div className="reply-compare-row">
                  <div className="reply-compare-cell reply-compare-cell--left" />
                  <div className="reply-compare-cell reply-compare-cell--feature">AI SDR</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--no">✕</div>
                  <div className="reply-compare-cell reply-compare-status reply-compare-status--yes">✓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reply-proof-section pp-animate-reveal">
          <div className="reply-proof-shell">
            <div className="reply-proof-badges">
              <div className="reply-proof-badge reply-proof-badge--white">
                <span className="reply-proof-badge-mark">G</span>
                <span>High Performance</span>
                <small>2025</small>
              </div>
              <div className="reply-proof-badge reply-proof-badge--white">
                <span className="reply-proof-badge-mark">G</span>
                <span>High Performance</span>
                <small>2025</small>
              </div>
              <div className="reply-proof-badge reply-proof-badge--white">
                <span className="reply-proof-badge-mark">G</span>
                <span>High Performance</span>
                <small>2025</small>
              </div>
              <div className="reply-proof-badge reply-proof-badge--white">
                <span className="reply-proof-badge-mark">G</span>
                <span>High Performance</span>
                <small>2025</small>
              </div>
              <div className="reply-proof-badge reply-proof-badge--navy">
                <span className="reply-proof-badge-mark">SOC 2</span>
                <span>GDPR</span>
                <small>Verified</small>
              </div>
              <div className="reply-proof-badge reply-proof-badge--navy">
                <span className="reply-proof-badge-mark">A+</span>
                <span>Advanced Email Deliverability</span>
              </div>
            </div>

            <div className="reply-proof-headline-row">
              <div className="reply-proof-headline">Top-rated on G2</div>
              <div className="reply-proof-headline">Trustworthy and reliable</div>
            </div>

            <div className="reply-proof-stats">
              <div className="reply-proof-stat">
                <div className="reply-proof-value">10+</div>
                <div className="reply-proof-label">years helping sales teams sell smarter</div>
              </div>
              <div className="reply-proof-stat">
                <div className="reply-proof-value">3,000+</div>
                <div className="reply-proof-label">companies worldwide</div>
              </div>
              <div className="reply-proof-stat">
                <div className="reply-proof-value">4.6/5</div>
                <div className="reply-proof-label">rating on G2</div>
              </div>
              <div className="reply-proof-stat">
                <div className="reply-proof-value">1,448</div>
                <div className="reply-proof-label">reviews on G2</div>
              </div>
            </div>
          </div>
        </section>

        <section className="reply-mini-plan-row pp-animate-reveal">
          <div className="reply-mini-plan-card">
            <div className="reply-mini-plan-price">Starts from $59</div>
            <div className="reply-mini-plan-name">Email Volume</div>
            <button type="button" className="reply-mini-plan-button">Start Free Trial</button>
          </div>
          <div className="reply-mini-plan-card">
            <div className="reply-mini-plan-price">Starts from $99</div>
            <div className="reply-mini-plan-name">Multichannel</div>
            <button type="button" className="reply-mini-plan-button">Contact Sales</button>
          </div>
          <div className="reply-mini-plan-card">
            <div className="reply-mini-plan-price">Starts from $5000</div>
            <div className="reply-mini-plan-name">AI SDR</div>
            <button type="button" className="reply-mini-plan-button">Contact Sales</button>
          </div>
          <div className="reply-mini-plan-card">
            <div className="reply-mini-plan-price">Starts from $166</div>
            <div className="reply-mini-plan-name">Agency</div>
            <button type="button" className="reply-mini-plan-button">Contact Sales</button>
          </div>
        </section>

        <section id="fundamentals" className="reply-fundamentals-section pp-animate-reveal">
          <div className="reply-fundamentals-shell">
            <div className="reply-fundamentals-header">
              <span className="reply-fundamentals-icon">⚡</span>
              <span>FUNDAMENTALS</span>
            </div>

            <div className="reply-fundamentals-table">
              <div className="reply-fundamentals-row reply-fundamentals-row--head">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label"> </div>
                <div className="reply-fundamentals-cell">Starts from 1,000 contacts</div>
                <div className="reply-fundamentals-cell">Unlimited Contacts</div>
                <div className="reply-fundamentals-cell">Starts from 1,000 contacts</div>
                <div className="reply-fundamentals-cell">Adjustable</div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Mailboxes</div>
                <div className="reply-fundamentals-cell">Unlimited</div>
                <div className="reply-fundamentals-cell">5 mailboxes / user</div>
                <div className="reply-fundamentals-cell">Unlimited</div>
                <div className="reply-fundamentals-cell">Unlimited</div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Email warm-ups in Mailtoaster.ai</div>
                <div className="reply-fundamentals-cell">Unlimited</div>
                <div className="reply-fundamentals-cell">5 mailboxes / user</div>
                <div className="reply-fundamentals-cell">Unlimited</div>
                <div className="reply-fundamentals-cell">Unlimited</div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Email sequences</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">LinkedIn automation</div>
                <div className="reply-fundamentals-cell">$69/month per account</div>
                <div className="reply-fundamentals-cell">1 / user included</div>
                <div className="reply-fundamentals-cell">1 / team included</div>
                <div className="reply-fundamentals-cell">$69/month per account</div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Calls &amp; SMS</div>
                <div className="reply-fundamentals-cell">$29/month per user</div>
                <div className="reply-fundamentals-cell">1 / user included</div>
                <div className="reply-fundamentals-cell">1 / user included</div>
                <div className="reply-fundamentals-cell">$29/month per user</div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Unlimited Users</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--yes">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--no">✕</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--yes">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--yes">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Unlimited sequences</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Unlimited contact storage</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Unlimited emails monthly</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Unlimited Clients</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--no">✕</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--no">✕</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--no">✕</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check reply-fundamentals-check--yes">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Domain purchase</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
              </div>

              <div className="reply-fundamentals-row">
                <div className="reply-fundamentals-cell reply-fundamentals-cell--label">Agentic Chat</div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
                <div className="reply-fundamentals-cell"><span className="reply-fundamentals-check">✓</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="reply-sales-engagement-section pp-animate-reveal">
          <div className="reply-sales-engagement-shell">
            <div className="reply-sales-engagement-header">
              <span className="reply-sales-engagement-icon">↕</span>
              <span>SALES ENGAGEMENT</span>
            </div>

            <div className="reply-sales-engagement-table">
              {salesEngagementFeatures.map(([feature, ...plans]) => (
                <div className="reply-sales-engagement-row" key={feature}>
                  <div className="reply-sales-engagement-cell reply-sales-engagement-cell--label">{feature}</div>
                  {plans.map((plan, index) => (
                    <div className="reply-sales-engagement-cell" key={`${feature}-${index}`}>
                      {plan === 'check' ? (
                        <span className="reply-sales-engagement-check">✓</span>
                      ) : plan === 'no' ? (
                        <span className="reply-sales-engagement-check reply-sales-engagement-check--no">×</span>
                      ) : (
                        plan
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reply-feature-card-section pp-animate-reveal">
          <ReplyFeatureCard title="LIVE DATA" icon="◉" variant="live-data" features={liveDataFeatures} />
          <ReplyFeatureCard title="DELIVERABILITY" icon="➤" variant="deliverability" features={deliverabilityFeatures} />
        </section>

        <section className="reply-sales-comparison-section pp-animate-reveal">
          <div className="reply-sales-comparison-wrapper">
            <div className="reply-sales-comparison-header">
              <span className="reply-sales-comparison-icon reply-sales-comparison-icon--orange">+</span>
              <span>ADDONS</span>
            </div>

            <div className="reply-sales-comparison-table">
              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Mailboxes</div>
                <div className="reply-sales-comparison-cell">Unlimited</div>
                <div className="reply-sales-comparison-cell">5 mailboxes / user</div>
                <div className="reply-sales-comparison-cell">Unlimited</div>
                <div className="reply-sales-comparison-cell">Unlimited</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Domain purchase</div>
                <div className="reply-sales-comparison-cell">Available</div>
                <div className="reply-sales-comparison-cell">Available</div>
                <div className="reply-sales-comparison-cell">Available</div>
                <div className="reply-sales-comparison-cell">Available</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Email warm-ups in Mailtoaster.ai</div>
                <div className="reply-sales-comparison-cell">Unlimited</div>
                <div className="reply-sales-comparison-cell">5 mailboxes / user</div>
                <div className="reply-sales-comparison-cell">Unlimited</div>
                <div className="reply-sales-comparison-cell">Unlimited</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">LinkedIn automation</div>
                <div className="reply-sales-comparison-cell">$69/month per account</div>
                <div className="reply-sales-comparison-cell">1 / user included</div>
                <div className="reply-sales-comparison-cell">1 / team included</div>
                <div className="reply-sales-comparison-cell">$69/month per account</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Email search extension</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check reply-sales-check--danger">×</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Website visitors tracking</div>
                <div className="reply-sales-comparison-cell">200 Website visitors /mo included</div>
                <div className="reply-sales-comparison-cell">200 Website visitors /mo included</div>
                <div className="reply-sales-comparison-cell">200 Website visitors /mo included</div>
                <div className="reply-sales-comparison-cell">200 Website visitors /mo included</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Email validation</div>
                <div className="reply-sales-comparison-cell">start from $20/month</div>
                <div className="reply-sales-comparison-cell">start from $20/month</div>
                <div className="reply-sales-comparison-cell">start from $20/month</div>
                <div className="reply-sales-comparison-cell">start from $20/month</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Dialer and Cloud Calls</div>
                <div className="reply-sales-comparison-cell">$29/month per user</div>
                <div className="reply-sales-comparison-cell">1 / user included</div>
                <div className="reply-sales-comparison-cell">1 / user included</div>
                <div className="reply-sales-comparison-cell">$29/month per user</div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Live Data</div>
                <div className="reply-sales-comparison-cell">50 credits + paid packages</div>
                <div className="reply-sales-comparison-cell">50 credits + paid packages</div>
                <div className="reply-sales-comparison-cell">50 credits + paid packages</div>
                <div className="reply-sales-comparison-cell">50 credits + paid packages</div>
              </div>
            </div>
          </div>

          <div className="reply-sales-comparison-wrapper reply-sales-comparison-wrapper--ai">
            <div className="reply-sales-comparison-header reply-sales-comparison-header--ai">
              <span className="reply-sales-comparison-icon reply-sales-comparison-icon--purple">AI</span>
              <span>AI</span>
            </div>

            <div className="reply-sales-comparison-table">
              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">
                  AI generated ICP <span className="reply-sales-comparison-badge">New</span>
                </div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check reply-sales-check--danger">×</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check reply-sales-check--danger">×</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check reply-sales-check--danger">×</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">
                  Real time B2B data by Apollo <span className="reply-sales-comparison-badge">New</span>
                </div>
                <div className="reply-sales-comparison-cell">start at $39/months</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check reply-sales-check--danger">×</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check reply-sales-check--danger">×</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">AI reply categorization</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">AI-generated icebreakers</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">Personalized first-step emails</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">AI sequence builder</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
              </div>

              <div className="reply-sales-comparison-row">
                <div className="reply-sales-comparison-cell reply-sales-comparison-cell--label">AI reply handling</div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
                <div className="reply-sales-comparison-cell"><span className="reply-sales-check">✓</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="reply-feature-card-section pp-animate-reveal">
          <ReplyFeatureCard title="INTEGRATIONS" icon="♣" variant="integrations" features={integrationFeatures} />
          <ReplyFeatureCard title="ONBOARDING & SUPPORT" icon="◉" variant="support" features={supportFeatures} />
        </section>

        <section className="reply-custom-faq-section pp-animate-reveal">
          <div className="reply-custom-solution-card">
            <div className="reply-custom-solution-copy">
              <h2>Looking for a custom<br />solution or have<br />questions?</h2>
              <p>For teams of 20+, our enhanced API, Whitelabel, and customized<br />solutions offer tailored solutions to meet your specific requirements.<br />Contact us today to learn more.</p>
              <button type="button" className="reply-custom-solution-button">Chat with us</button>
            </div>
            <div className="reply-custom-solution-art" aria-hidden="true">
              <span className="reply-custom-art-shape reply-custom-art-shape--white" />
              <span className="reply-custom-art-shape reply-custom-art-shape--light" />
              <span className="reply-custom-art-shape reply-custom-art-shape--top" />
              <span className="reply-custom-art-shape reply-custom-art-shape--bottom" />
            </div>
          </div>

          <div className="reply-faq-card">
            <div className="reply-faq-eyebrow">BOOST YOUR SALES WITH REPLY</div>
            <h2>Frequently Asked Questions</h2>
            <div className="reply-faq-list">
              {pricingFaqs.map(([question, answer], index) => (
                <div className={`reply-faq-item ${openFaq === index ? 'open' : ''}`} key={question}>
                  <button
                    type="button"
                    className="reply-faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{question}</span>
                    <span className="reply-faq-chevron">⌄</span>
                  </button>
                  {openFaq === index && <p className="reply-faq-answer">{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
