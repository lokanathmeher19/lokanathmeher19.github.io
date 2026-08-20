import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <Container>
        <SectionHeading title="Professional Journey" eyebrow="Experience" className="items-center text-center" />
        <div className="w-full h-48 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Experience Timeline Placeholder]
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
