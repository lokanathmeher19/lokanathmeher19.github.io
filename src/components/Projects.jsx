import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Explicit categories matching the user's preferred professional layout
  const categories = ['All', 'Web', 'Python', 'AI', 'Security'];
  
  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => 
        p.category.toLowerCase() === activeFilter.toLowerCase() || 
        p.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section id="projects" className="section min-h-screen py-24 border-t border-[rgba(255,255,255,0.05)] relative z-10">
      <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
          <span className="text-[#22d3ee] text-xs font-bold tracking-widest uppercase">Portfolio Showcase</span>
          <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6 text-center">
          Featured <span className="text-[#22d3ee]">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl text-center mb-10">
          A selection of my technical projects demonstrating my ability to build scalable applications, implement AI solutions, and secure network infrastructures.
        </p>
        
        {/* Recruiter-Friendly Segmented Filter Bar */}
        <div className="flex justify-center mb-16 w-full">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-[#0a0f1c] border border-gray-800 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-white text-black shadow-sm' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24 lg:gap-32 pb-20">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''} group`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-[55%] relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.05)] bg-[#0f172a] aspect-[16/10]">
                  {/* Cyan tint overlay that fades on hover */}
                  <div className="absolute inset-0 bg-[#22d3ee] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  {project.img ? (
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-50 text-white">
                      {project.icon}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className={`w-full lg:w-[45%] flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} z-20`}>
                <span className="text-[#22d3ee] text-sm font-mono tracking-widest uppercase mb-2">
                  {project.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-[#22d3ee] transition-colors">
                  {project.title}
                </h3>
                
                {/* Floating Description Box */}
                <div className={`bg-[rgba(15,23,42,0.9)] backdrop-blur-xl p-6 md:p-8 rounded-xl shadow-2xl border border-[rgba(255,255,255,0.08)] text-gray-300 text-base md:text-lg relative z-20 w-full lg:w-[120%] ${isEven ? 'lg:-ml-[20%]' : ''}`}>
                  <p className="leading-relaxed">{project.desc}</p>
                </div>

                {/* Tech Stack List */}
                <ul className={`flex flex-wrap gap-x-6 gap-y-3 mt-8 text-[13px] font-mono text-gray-400 ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {project.tech.map((tech, i) => (
                    <li key={i} className="whitespace-nowrap hover:text-[#22d3ee] transition-colors">{tech}</li>
                  ))}
                </ul>

                {/* Action Links */}
                <div className={`flex items-center gap-6 mt-8 ${isEven ? 'justify-end' : 'justify-start'}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="GitHub Repository">
                    <FiGithub size={24} />
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22d3ee] hover:-translate-y-1 transition-all duration-300" aria-label="Live Demo">
                      <FiExternalLink size={26} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
