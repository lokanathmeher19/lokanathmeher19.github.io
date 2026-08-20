import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 relative">
      <Container>
        <SectionHeading title="GitHub Activity" eyebrow="Open Source" className="items-center text-center" />
        <div className="w-full h-48 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [GitHub Contribution Graph Placeholder]
        </div>
      </Container>
    </section>
  );
};

export default GitHubSection;
