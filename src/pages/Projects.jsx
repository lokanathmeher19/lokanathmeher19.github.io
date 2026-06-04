import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.tag))];
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.tag === filter);

  return (
    <div className="content-section">
      <div className="container" style={{ paddingTop: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              color: 'var(--accent-secondary)', 
              textTransform: 'uppercase', 
              letterSpacing: '5px', 
              fontSize: '0.8rem', 
              fontWeight: 700,
              marginBottom: '20px'
            }}
          >
            Case Studies
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title-gradient"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-heading)' }}
          >
            Proof of Concept
          </motion.h2>
        </div>

        {/* Minimalist Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '80px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '12px 28px',
                borderRadius: '100px',
                background: filter === cat ? '#fff' : 'rgba(255,255,255,0.03)',
                color: filter === cat ? '#000' : 'var(--text-secondary)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel"
                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                  <motion.img 
                    src={project.img} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '24px', 
                    right: '24px', 
                    padding: '8px 16px', 
                    borderRadius: '100px', 
                    background: 'rgba(5, 5, 16, 0.6)', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}>
                    {project.tag}
                  </div>
                </div>

                <div style={{ padding: '40px' }}>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '32px', lineHeight: 1.7 }}>{project.desc}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <a href={project.link} className="btn-action" style={{ padding: '12px 24px', fontSize: '0.8rem' }}>
                      Explore Project <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
