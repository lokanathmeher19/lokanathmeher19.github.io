import React from 'react';
import { skillsData } from '../../data/skills';

const TechMarquee = () => {
  // Double the array to create a seamless loop
  const duplicatedSkills = [...skillsData.all, ...skillsData.all, ...skillsData.all];

  return (
    <section className="w-full bg-brand-surface border-y border-brand-border py-4 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-surface to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-surface to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap animate-marquee">
        {duplicatedSkills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 mx-8 text-text-muted hover:text-accent-light transition-colors"
          >
            <div className="w-2 h-2 rounded-full bg-accent-secondary opacity-50"></div>
            <span className="font-mono text-sm uppercase tracking-widest">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
