import React from 'react';

const PageBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
    </div>
  );
};

export default PageBackground;
