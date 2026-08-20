import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative bg-brand-surface border-y border-brand-border">
      <Container>
        <SectionHeading title="Recent Articles" eyebrow="Blog" className="items-center text-center" />
        <div className="w-full h-64 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Blog Posts Placeholder]
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
