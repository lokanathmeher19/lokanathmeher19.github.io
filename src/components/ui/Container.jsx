import React from 'react';

/**
 * Reusable Container for consistent max-width and horizontal padding
 */
const Container = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
