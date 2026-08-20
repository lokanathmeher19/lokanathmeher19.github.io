import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <Container>
        <SectionHeading title="What People Say" eyebrow="Reviews" className="items-center text-center" />
        <div className="w-full h-48 bg-brand-elevated border border-brand-border rounded-[var(--radius-card)] flex items-center justify-center text-text-muted">
          [Reviews Carousel Placeholder - Render ONLY if real data exists]
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
