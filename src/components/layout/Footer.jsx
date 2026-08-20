import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-brand-bg border-t border-brand-border py-8 text-center text-text-muted mt-20">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} LOKANATH MEHER. All rights reserved.</p>
        <p className="text-sm mt-2">B.Tech CSE Student • Software Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
