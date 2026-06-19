import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, Terminal, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Zap, Award, Brain, Download, Maximize2, X, Database, Cpu, Code2
} from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

import SectionHeader from "./SectionHeader";

const getProjectMetrics = (title) => {
  const defaults = { 
    architecture: 'Full-Stack Web', 
    database: 'Cloud SQL / NoSQL', 
    deployment: 'Vercel / AWS',
    reliability: '99.9% Uptime' 
  };
  const data = {
    'BARESKIN': { 
      architecture: 'MERN Architecture', 
      database: 'MongoDB Atlas', 
      deployment: 'Render Host',
      reliability: 'Load Balanced' 
    },
    'TruthGuard AI': { 
      architecture: 'Python / PyTorch', 
      database: 'Vector database', 
      deployment: 'CUDA Compute',
      reliability: 'FP16 Precision' 
    },
    'SambalpuriHUB': { 
      architecture: 'React 18 / Vite', 
      database: 'REST API Caching', 
      deployment: 'Netlify Edge',
      reliability: 'Optimized SSG' 
    },
    'Internet Speed Test': { 
      architecture: 'React / Node.js', 
      database: 'Docker container', 
      deployment: 'Self-Hosted VPS',
      reliability: 'Sub-10ms Ping' 
    },
    'Cybersecurity Toolkit': { 
      architecture: 'Python / Sockets', 
      database: 'No Database', 
      deployment: 'CLI Platform',
      reliability: 'Strict validation' 
    },
    'Golf Charity App': { 
      architecture: 'Next.js 14 SSR', 
      database: 'PostgreSQL DB', 
      deployment: 'Vercel Serverless',
      reliability: 'Static rendering' 
    }
  };
  return data[title] || defaults;
};

const ProjectCard = ({ p }) => {
  const metrics = getProjectMetrics(p.title);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div 
        className="project-inner-card"
        style={{ 
          '--glow-color': p.color || 'var(--accent-cyan)',
          height: '100%',
          background: 'rgba(10, 15, 30, 0.5)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
      >
        {/* Subtle static hover sheen gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${p.color}0e 0%, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Constant ambient color glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '90%',
          background: `radial-gradient(circle, ${p.color}05 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Grid overlay pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          opacity: 0.5,
          zIndex: 0
        }} />

        {/* 🖼️ Cover Image */}
        <div style={{ height: '140px', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
          <img 
            src={p.img} 
            alt={p.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
            className="project-card-image"
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: `linear-gradient(to bottom, transparent 30%, rgba(2, 6, 23, 0.95) 100%)`,
            zIndex: 1
          }}></div>
          
          {/* Category tag */}
          <div style={{ 
            position: 'absolute', top: '16px', left: '16px',
            padding: '5px 14px', borderRadius: '100px', fontSize: '0.62rem',
            fontWeight: 900, background: 'rgba(10, 15, 30, 0.6)',
            color: p.color, border: `1px solid ${p.color}33`, 
            letterSpacing: '0.1em', textTransform: 'uppercase',
            backdropFilter: 'blur(12px)', zIndex: 10,
            boxShadow: `0 4px 12px rgba(0,0,0,0.3)`,
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <span style={{ 
              width: '6px', height: '6px', borderRadius: '50%', 
              background: p.color, boxShadow: `0 0 8px ${p.color}`
            }} />
            {p.category}
          </div>
        </div>

        {/* Card body content */}
        <div style={{ padding: '20px 24px 24px', flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '14px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 900, 
              color: '#fff', 
              marginBottom: '4px', 
              letterSpacing: '-0.02em',
              transition: 'color 0.3s ease'
            }} className="project-title-heading">{p.title}</h3>
            
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.5)', 
              fontSize: '0.78rem', 
              lineHeight: 1.5,
              marginBottom: '10px',
              height: '36px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{p.desc}</p>
          </div>

          {/* Professional Grid Metrics */}
          <div className="pro-metric-grid" style={{ '--glow-color': p.color }}>
            <div className="pro-metric-card">
              <div className="pro-metric-icon"><Cpu size={14} /></div>
              <div className="pro-metric-info">
                <span className="pro-metric-label">Engine</span>
                <span className="pro-metric-val">{metrics.architecture}</span>
              </div>
            </div>
            <div className="pro-metric-card">
              <div className="pro-metric-icon"><Database size={14} /></div>
              <div className="pro-metric-info">
                <span className="pro-metric-label">Database</span>
                <span className="pro-metric-val">{metrics.database}</span>
              </div>
            </div>
            <div className="pro-metric-card">
              <div className="pro-metric-icon"><Globe size={14} /></div>
              <div className="pro-metric-info">
                <span className="pro-metric-label">Deployment</span>
                <span className="pro-metric-val">{metrics.deployment}</span>
              </div>
            </div>
            <div className="pro-metric-card">
              <div className="pro-metric-icon"><Zap size={14} /></div>
              <div className="pro-metric-info">
                <span className="pro-metric-label">Performance</span>
                <span className="pro-metric-val">{metrics.reliability}</span>
              </div>
            </div>
          </div>

          {/* Tech badges in clean pills with dots */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '14px 0' }}>
            {p.tech?.slice(0, 4).map((t, idx) => (
              <span 
                key={idx} 
                className="pro-badge-pill"
                style={{ '--accent-color': p.color }}
              >
                <span className="pro-badge-dot" style={{ '--accent-color': p.color }} />
                {t}
              </span>
            ))}
          </div>

          {/* Modern CTA Buttons */}
          <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
            {p.live && (
              <a 
                href={p.live} 
                target="_blank" 
                rel="noreferrer" 
                className="pro-btn-primary"
                style={{ '--glow-color': p.color }}
              >
                <span>Live Preview</span>
                <ArrowUpRight size={13} />
              </a>
            )}
            
            {p.github && (
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer" 
                className="pro-btn-secondary"
                style={{ '--glow-color': p.color }}
              >
                <Github size={13} style={{ marginRight: '4px' }} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const categories = ['All', 'Web', 'Python', 'AI', 'Security'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter));

  // Sync activeProject with filter change
  useEffect(() => {
    if (filteredProjects.length > 0) {
      setActiveProject(filteredProjects[0]);
    } else {
      setActiveProject(null);
    }
  }, [filter]);

  return (
    <section id="projects" className="section" style={{ position: 'relative', padding: '160px 24px', overflow: 'hidden' }}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>

      {/* 🌌 High-End Engineering Aura */}
      <div style={{ 
        position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
        background: 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      <SectionHeader 
        badge="PROJECTS" 
        title={<><span className="text-gradient">Featured</span> Deployments</>} 
        desc="A curated selection of high-performance digital solutions." 
        count={PROJECTS.length}
        compact={true}
      />

      {/* 🏷️ Sleek Icon/Logo Filter Bar */}
      <div className="cyber-logo-bar">
        {categories.map((cat) => {
          const isActive = filter === cat;
          const logoColor = cat === 'All' ? 'var(--accent-purple)' 
                          : cat === 'Web' ? '#22d3ee' 
                          : cat === 'Python' ? '#3b82f6' 
                          : cat === 'AI' ? '#8b5cf6' 
                          : '#f97316'; // Security

          const getFilterIcon = () => {
            switch(cat) {
              case 'All': return <Layers size={18} className="cyber-logo-icon" />;
              case 'Web': return <Globe size={18} className="cyber-logo-icon" />;
              case 'Python': return <Terminal size={18} className="cyber-logo-icon" />;
              case 'AI': return <Brain size={18} className="cyber-logo-icon" />;
              case 'Security': return <ShieldCheck size={18} className="cyber-logo-icon" />;
              default: return null;
            }
          };

          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cyber-logo-item ${isActive ? 'active' : ''}`}
              style={{ '--logo-color': logoColor }}
            >
              <div className="cyber-logo-wrapper">
                {getFilterIcon()}
              </div>
              <span className="cyber-logo-label">{cat}</span>
              {isActive && (
                <motion.div 
                  layoutId="active-project-logo-glow" 
                  className="cyber-logo-glow" 
                  style={{ background: logoColor, boxShadow: `0 0 12px ${logoColor}` }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 🖥️ Desktop Layout: Dual Pane Ledger */}
      <div className="projects-desktop-layout" style={{
        gap: '40px',
        maxWidth: '1200px',
        margin: '20px auto 80px',
        height: '520px',
        alignItems: 'stretch',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Left Scrollable Ledger List */}
        <div style={{
          flex: '1 1 55%',
          overflowY: 'auto',
          paddingRight: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxHeight: '520px',
        }} className="custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => {
              const isSelected = activeProject === p;
              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveProject(p)}
                  whileHover={{ x: 4 }}
                  className={`pro-ledger-row ${isSelected ? 'selected' : ''}`}
                  style={{
                    '--row-color': p.color || 'var(--accent-cyan)',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: isSelected ? 'rgba(255,255,255,0.015)' : 'transparent',
                    border: isSelected 
                      ? `1px solid ${p.color || 'var(--accent-cyan)'}33` 
                      : '1px solid rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="pro-ledger-indicator" />

                  {/* Tiny Thumbnail Box (Certificates Style) */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.05)',
                    flexShrink: 0,
                  }}>
                    <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ 
                      color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)', 
                      fontSize: '0.92rem', 
                      fontWeight: 800, 
                      margin: '0 0 2px 0',
                      transition: 'color 0.3s',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {p.title}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                      <span className="pro-badge-pill" style={{ '--accent-color': p.color, padding: '2px 8px', fontSize: '0.58rem' }}>
                        <span className="pro-badge-dot" style={{ '--accent-color': p.color }} />
                        {p.category}
                      </span>
                      <span>•</span>
                      <span style={{ fontSize: '0.65rem' }}>{p.tech ? p.tech.slice(0, 2).join(', ') : ''}</span>
                    </div>
                  </div>

                  <ArrowUpRight size={16} style={{ 
                    color: isSelected ? (p.color || 'var(--accent-cyan)') : 'rgba(255,255,255,0.2)',
                    opacity: isSelected ? 1 : 0.4,
                    transition: 'all 0.3s',
                    flexShrink: 0
                  }} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Preview Panel */}
        <div style={{
          flex: '1 1 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ width: '100%', height: '440px' }}>
                  <ProjectCard p={activeProject} />
                </div>
              </motion.div>
            ) : (
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>Select a project to view details</div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 📱 Mobile Layout: Swipeable Card Slider */}
      <div className="projects-mobile-layout" style={{
        marginTop: '20px',
        width: '100%',
        position: 'relative',
        zIndex: 5,
        marginBottom: '60px'
      }}>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '16px',
          padding: '10px 16px 30px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }} className="no-scrollbar">
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              style={{
                flex: '0 0 290px',
                scrollSnapAlign: 'center',
                height: '420px',
              }}
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.25)', 
          fontSize: '0.72rem', 
          fontWeight: 600,
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          Swipe horizontally to explore <span style={{ fontSize: '0.8rem' }}>→</span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}
      >
        <a 
          href="https://github.com/lokanathmeher19" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-premium"
          style={{ 
            padding: '18px 48px', 
            borderRadius: '100px', 
            fontSize: '0.95rem', 
            fontWeight: 800, 
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          Explore Full Archive <Github size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
