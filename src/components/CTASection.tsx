import React from 'react';
import Link from 'next/link';
import '../styles/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading"> Ready to Align Your Team and Scale <br></br>Human-First Outreach?</h2>
        <p className="cta-description">
          Join hundreds of high-growth revenue teams scaling their pipeline with 360-Airo’s collaborative AI outreach engine.
        </p>
        <Link href="/contact-us" className="cta-button">
         Start Free Trial
        </Link>
      </div>
    </section>
  );
}
