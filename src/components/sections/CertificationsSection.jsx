import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <Container>
        <SectionHeading title="Licenses & Certifications" eyebrow="Achievements" className="items-center text-center" />
        <div className="w-full h-64 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Certifications Grid Placeholder]
        </div>
      </Container>
    </section>
  );
};

export default CertificationsSection;
