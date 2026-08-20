import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

// Reusable SectionHeader
const SectionHeader = ({ badge, title, desc, color = "var(--accent-cyan)" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="content-center"
    style={{ marginBottom: '60px' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ height: '1px', width: '32px', background: color, opacity: 0.5 }}></div>
      <span style={{ fontSize: '0.75rem', fontWeight: 900, color: color, letterSpacing: '0.4em' }}>{badge.toUpperCase()}</span>
      <div style={{ height: '1px', width: '32px', background: color, opacity: 0.5 }}></div>
    </div>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
        {title}
      </h2>
    </div>
    {desc && (
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
        {desc}
      </p>
    )}
  </motion.div>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories from PROJECTS data (combining category and tag properties for filter options)
  const categoriesRaw = PROJECTS.map(p => p.category || p.tag);
  const categories = ['All', ...new Set(categoriesRaw)];
  
  // Filter projects based on selected category
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter || p.tag === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      
      {/* 🌌 Atmospheric Glow Backdrops */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          badge="PORTFOLIO"
          color="#8b5cf6"
          title={<><span className="text-gradient" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured</span> Works</>}
          desc="Explore a selection of my recent projects, from full-stack web applications to AI and cybersecurity solutions."
        />

        {/* Minimalist Scrollable Filters */}
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              style={filter === cat ? { '--accent-cyan': '#8b5cf6' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0; // First item is featured (spans 2 columns)

              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bento-card ${isFeatured ? 'bento-featured' : ''}`}
                  style={{ '--hover-color': `${project.color}33` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bento-img-container">
                    <img src={project.img} alt={project.title} />
                  </div>
                  
                  <div className="bento-content">
                    <div className="bento-category-tag">
                      <div className="bento-dot" style={{ color: project.color }}></div>
                      {project.category || project.tag}
                    </div>
                    
                    <h3 className="bento-title">{project.title}</h3>
                    
                    <div className="bento-tech-stack">
                      {project.tech.slice(0, isFeatured ? 6 : 3).map(t => (
                        <span key={t} className="bento-tech-pill">{t}</span>
                      ))}
                      {project.tech.length > (isFeatured ? 6 : 3) && (
                        <span className="bento-tech-pill" style={{ opacity: 0.6 }}>
                          +{project.tech.length - (isFeatured ? 6 : 3)}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              <img 
                src={selectedProject.img} 
                alt={selectedProject.title} 
                className="modal-header-img"
              />

              <div className="modal-body">
                <div className="modal-grid">
                  {/* Left Column: Details */}
                  <div>
                    <div className="bento-category-tag" style={{ marginBottom: '16px' }}>
                      <div className="bento-dot" style={{ color: selectedProject.color }}></div>
                      {selectedProject.tag}
                    </div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                      {selectedProject.title}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
                      {selectedProject.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      {selectedProject.live && selectedProject.live !== '#' && (
                        <a 
                          href={selectedProject.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-premium btn-primary"
                          style={{ '--accent-cyan': selectedProject.color }}
                        >
                          Live Preview <ExternalLink size={18} />
                        </a>
                      )}
                      {selectedProject.github && (
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn-premium btn-secondary"
                        >
                          Source Code <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Tech Stack */}
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>
                      TECHNOLOGIES
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {selectedProject.tech.map(t => (
                        <span 
                          key={t} 
                          className="bento-tech-pill"
                          style={{ fontSize: '0.8rem', padding: '8px 16px', background: 'rgba(255, 255, 255, 0.05)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
