import React from 'react';

/**
 * Reusable Button component with primary, secondary, and ghost variants
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-[var(--radius-btn)] transition-normal focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-brand-bg disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent-primary text-brand-bg hover:bg-accent-light hover:shadow-glow-green px-5 py-2.5",
    secondary: "bg-transparent text-text-main border border-brand-border hover:border-accent-primary hover:text-accent-primary px-5 py-2.5",
    ghost: "bg-transparent text-text-muted hover:text-text-main hover:bg-brand-surface px-4 py-2"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
