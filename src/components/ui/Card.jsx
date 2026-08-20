import React from 'react';

/**
 * Reusable Card component with dark surface, subtle border, and hover glow
 */
const Card = ({ children, className = '', hoverable = true, ...props }) => {
  const hoverStyles = hoverable 
    ? "hover:-translate-y-1 hover:border-accent-primary/50 hover:shadow-glow-green transition-normal cursor-pointer" 
    : "";

  return (
    <div 
      className={`bg-brand-surface border border-brand-border rounded-[var(--radius-card)] p-6 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
