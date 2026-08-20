import React from 'react';

/**
 * Reusable Section Heading with optional eyebrow label
 */
const SectionHeading = ({ eyebrow, title, description, className = '' }) => {
  return (
    <div className={`flex flex-col gap-3 mb-12 ${className}`}>
      {eyebrow && (
        <span className="font-mono text-sm tracking-wider text-accent-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-main">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-2xl text-lg mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
