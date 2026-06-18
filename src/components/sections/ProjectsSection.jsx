import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Globe, Layers, Terminal, Brain, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import SectionHeader from "./SectionHeader";

const ProjectCard = ({ p }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Cover Image */}
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img 
          src={p.img} 
          alt={p.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(2, 6, 23, 1), transparent)'
        }}></div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: 0 }}>{p.title}</h3>
          {/* Category Tag */}
          <span style={{ 
            padding: '4px 10px', 
            borderRadius: '100px', 
            background: `${p.color}22`,
            color: p.color,
            fontSize: '0.65rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {p.category}
          </span>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
          {p.desc}
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {p.tech?.map((t, idx) => (
            <span key={idx} style={{
              padding: '6px 12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 600
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="btn-premium btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem', flex: 1, justifyContent: 'center' }}>
              Live Preview <ArrowUpRight size={16} />
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="btn-premium btn-secondary" style={{ padding: '10px 20px', fontSize: '0.85rem', flex: 1, justifyContent: 'center' }}>
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Python', 'AI', 'Security'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="section" style={{ padding: '100px 24px' }}>
      <SectionHeader 
        badge="PORTFOLIO" 
        title={<><span className="text-gradient">Featured</span> Projects</>} 
        desc="A selection of my recent work and technical projects." 
        count={PROJECTS.length}
      />

      {/* Filter Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '10px 24px',
              borderRadius: '100px',
              border: filter === cat ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: filter === cat ? 'rgba(34, 211, 238, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              color: filter === cat ? '#fff' : 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
        <a 
          href="https://github.com/lokanathmeher19" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-premium btn-secondary"
        >
          View More on GitHub <Github size={18} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
