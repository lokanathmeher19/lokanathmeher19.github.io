import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-brand-surface border-y border-brand-border">
      <Container>
        <SectionHeading title="Academic Background" eyebrow="Education" className="items-center text-center" />
        <div className="w-full h-48 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Education Timeline Placeholder]
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
