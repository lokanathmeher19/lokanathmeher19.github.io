import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-brand-surface border-y border-brand-border">
      <Container>
        <SectionHeading title="Featured Work" eyebrow="Projects" className="items-center text-center" />
        <div className="w-full h-96 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Projects List Placeholder: BARESKIN, TruthGuard AI, etc.]
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
