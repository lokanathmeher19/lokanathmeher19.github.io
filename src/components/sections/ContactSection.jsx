import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-brand-surface border-t border-brand-border">
      <Container>
        <SectionHeading title="Get In Touch" eyebrow="Contact" className="items-center text-center" />
        <div className="w-full h-64 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Contact Form & Info Placeholder]
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
