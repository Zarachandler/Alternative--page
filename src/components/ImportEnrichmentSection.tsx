// @ts-nocheck
"use client";
import React, { useState } from 'react';
import '../styles/ImportEnrichmentSection.css';

export default function ImportEnrichmentSection() {
  const [activeStep, setActiveStep] = useState(-1);
  const [activeSignal, setActiveSignal] = useState(0);
  const [activeEnrichment, setActiveEnrichment] = useState(0);

  const processFlowSteps = [
    {
      number: '1',
      title: 'Upload Prospects',
      badge: null,
      description: 'Bring in your target accounts from any source.Launch campaigns without complex setup.',
      image: '/process-flow-dashboard.png'
    },
    {
      number: '2',
      title: 'Verify Emails',
      badge: 'Campaign Setup Speed 9 Minutes',
      description: 'Clean and validate contact data automatically.Improve deliverability before every send.',
      image: '/verify-emails.png'
    },
    {
      number: '3',
      title: 'AI-Powered Hyper-Personalization',
      badge: 'AI SDR',
      description: 'Craft 1:1 outreach using prospect and company insights.Every message feels relevant, timely, and human.',
      image: '/hyper-personalization.png'
    },
    {
      number: '4',
      title: 'Intelligent Smart Follow-Ups',
      badge: 'AI SDR',
      description: 'AI determines the right timing and next action.Keep conversations moving toward meetings.',
      image: '/smart-follow-ups.png'
    },
    {
      number: '5',
      title: 'AI powered Linkedin Outreach',
      badge: 'AI SDR',
      description: 'Stop choosing between account bans and zero replies. View and send LinkedIn messages directly from your 360-Airo Unified Inbox. Keep your entire multichannel conversation history, email and LinkedIn in a single, organized thread.',
      image: '/linkedin-outreach.png'
    }
  ];

  const signalSteps = [
    {
      number: '1',
      title: 'AI Email Sequencing',
      badge: null,
      description: 'Build intelligent outreach sequences that adapt to prospect engagement.Send the right message at the right time automatically.',
      image: '/email-sequencing.png'
    },
    {
      number: '2',
      title: 'Automated AI Workflow Pipeline',
      badge: null,
      description: 'Automate repetitive SDR tasks from prospecting to follow-ups.Keep opportunities moving through your pipeline without manual effort.',
      image: '/workflow-pipeline.png'
    },
    {
      number: '3',
      title: 'AI-Generated Email Templates',
      badge: null,
      description: 'Generate high-converting email templates in seconds.Create outreach tailored to your audience, industry, and goals.',
      image: '/email-templates.png'
    },
    {
      number: '4',
      title: 'Tailored AI Variables',
      badge: null,
      description: 'Personalize every message using prospect and company data.Deliver outreach that feels written specifically for every buyer.',
      image: '/workflow-pipeline.png'
    },
    {
      number: '5',
      title: 'Dedicated Multichannel Unified Inbox',
      badge: null,
      description: 'Manage email, LinkedIn, SMS, WhatsApp, and replies from one place.Keep every conversation organized and every opportunity within reach.',
      image: '/unified-inbox.png'
    }
  ];

  const enrichmentSteps = [
    {
      number: '1',
      title: 'AI Reply Classification',
      badge: null,
      description: 'AI identifies sales-ready prospects, automates scheduling, and updates your CRM.So no opportunity slips through the cracks.',
      image: '/reply-classifications.png'
    },
    {
      number: '2',
      title: 'Automated Meeting Booking',
      badge: null,
      description: 'Let prospects schedule meetings instantly through personalized booking links.Remove friction and accelerate the sales cycle.',
      image: '/meeting-booking.png'
    },
    {
      number: '3',
      title: 'Smart Scheduler',
      badge: null,
      description: 'Automatically manage your daily sending limits and mimic human behavior across Google and Microsoft to guarantee primary inbox placement.',
      image: '/smart-schedulers.png'
    },
    {
      number: '4',
      title: 'Custom CRM Integrations',
      badge: null,
      description: 'Sync conversations, activities, and lead status directly to your CRM.Keep your pipeline accurate without manual data entry.',
      image: '/crm-integrations.png'
    }
  ];

  return (
    <div className="import-enrichment-wrapper" style={{ backgroundColor: '#fdfdfe' }}>
      <div className="import-enrichment-header-section">
        <h3>
          How we get you the Right business that reaches you<br />
          <span>Airo Intelligent (AI) SDR that Build Pipeline in 9 minutes</span>
        </h3>
        <p>
          From first touch to follow-up, AI handles the busy work while your SDRs focus on conversations that matter.
        </p>
      </div>

      <div className="import-enrichment-container">
        <div className="ie-card ie-card-accordion ie-process-card">
          <div className="ie-card-content ie-process-content">
            <span className="ie-card-subtitle">  PROCESS FLOW</span>

            <div className="ie-accordion ie-process-accordion">
              {processFlowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`ie-accordion-item ${activeStep === index ? 'is-active' : ''}`}
                >
                  <button
                    className="ie-accordion-trigger"
                    onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                  >
                    <span className="ie-step-number">{step.number}</span>
                    <span className="ie-step-title">{step.title}</span>
                    {step.badge && <span className="ie-step-badge">{step.badge}</span>}
                    <span className="ie-step-chevron"></span>
                  </button>

                  <div className="ie-accordion-panel">
                    {step.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ie-card-image ie-process-image-shell">
            <img
              key={processFlowSteps[activeStep >= 0 ? activeStep : 0].image}
              src={processFlowSteps[activeStep >= 0 ? activeStep : 0].image}
              alt={processFlowSteps[activeStep >= 0 ? activeStep : 0].title}
              className="ie-mockup-image"
            />
          </div>
        </div>

        <div className="ie-card ie-card-accordion ie-process-card">
          <div className="ie-card-content ie-process-content">
            <span className="ie-card-subtitle"> Automated AI Outreach Engagement</span>
            <div className="ie-accordion ie-process-accordion">
              {signalSteps.map((step, index) => (
                <div
                  key={index}
                  className={`ie-accordion-item ${activeSignal === index ? 'is-active' : ''}`}
                >
                  <button
                    className="ie-accordion-trigger"
                    onClick={() => setActiveSignal(activeSignal === index ? -1 : index)}
                  >
                    <span className="ie-step-number">{step.number}</span>
                    <span className="ie-step-title">{step.title}</span>
                    {step.badge && <span className="ie-step-badge">{step.badge}</span>}
                    <span className="ie-step-chevron"></span>
                  </button>

                  <div className="ie-accordion-panel">
                    {step.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ie-card-image ie-process-image-shell">
            <img
              key={signalSteps[activeSignal >= 0 ? activeSignal : 0].image}
              src={signalSteps[activeSignal >= 0 ? activeSignal : 0].image}
              alt={signalSteps[activeSignal >= 0 ? activeSignal : 0].title}
              className="ie-mockup-image"
            />
          </div>
        </div>

        <div className="ie-card ie-card-accordion ie-process-card">
          <div className="ie-card-content ie-process-content">
            <span className="ie-card-subtitle">  Conversion: From Potential Prospects to Booked Meetings</span>
  
            <div className="ie-accordion ie-process-accordion">
              {enrichmentSteps.map((step, index) => (
                <div
                  key={index}
                  className={`ie-accordion-item ${activeEnrichment === index ? 'is-active' : ''}`}
                >
                  <button
                    className="ie-accordion-trigger"
                    onClick={() => setActiveEnrichment(activeEnrichment === index ? -1 : index)}
                  >
                    <span className="ie-step-number">{step.number}</span>
                    <span className="ie-step-title">{step.title}</span>
                    {step.badge && <span className="ie-step-badge">{step.badge}</span>}
                    <span className="ie-step-chevron"></span>
                  </button>

                  <div className="ie-accordion-panel">
                    {step.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ie-card-image ie-process-image-shell">
            <img
              key={enrichmentSteps[activeEnrichment >= 0 ? activeEnrichment : 0].image}
              src={enrichmentSteps[activeEnrichment >= 0 ? activeEnrichment : 0].image}
              alt={enrichmentSteps[activeEnrichment >= 0 ? activeEnrichment : 0].title}
              className="ie-mockup-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
