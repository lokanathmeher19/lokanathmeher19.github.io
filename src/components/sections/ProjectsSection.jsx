import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, Terminal, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Zap, Award, Brain, Download, Maximize2, X
} from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

import SectionHeader from "./SectionHeader";

const getProjectTelemetry = (title) => {
  const defaults = { status: 'DEPLOYED // ACTIVE', latency: '15ms', integrity: 'PASS // SSG_SECURE', port: 'PORT // 80' };
  const data = {
    'BARESKIN': { status: 'PRODUCTION // LIVE', latency: '18ms', integrity: 'SHA-256 SECURE', port: 'HTTPS // 443' },
    'TruthGuard AI': { status: 'MODEL_RUN // STANDBY', latency: '45ms (CUDA)', integrity: 'FP16 CHECKED', port: 'TENSOR // 8888' },
    'SambalpuriHUB': { status: 'ARCHIVE // STABLE', latency: '22ms', integrity: 'VITE_OPTIMIZED', port: 'REACT // 3000' },
    'Internet Speed Test': { status: 'READY // TEST_STANDBY', latency: '11ms', integrity: 'DOCKER_VERIFIED', port: 'REST // 8080' },
    'Cybersecurity Toolkit': { status: 'ACTIVE // INTRUSION_DET', latency: '5ms', integrity: 'MD5_VALIDATED', port: 'NMAP // 80_443' },
    'Golf Charity App': { status: 'PRODUCTION // STABLE', latency: '14ms', integrity: 'NEXT_SSG_PASS', port: 'NODE // 3000' }
  };
  return data[title] || defaults;
};

const ProjectCard = ({ p }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth 3D tilt dynamics (gentle max 8 degrees)
  const rotateX = useSpring(useTransform(y, [-180, 180], [8, -8]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-180, 180], [-8, 8]), { stiffness: 220, damping: 22 });

  // Sheen gradient tracking
  const sheenX = useTransform(x, [-180, 180], ["0%", "100%"]);
  const sheenY = useTransform(y, [-180, 180], ["0%", "100%"]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const telemetry = getProjectTelemetry(p.title);

  return (
    <div style={{ perspective: 1000, height: '100%', width: '100%' }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          height: '100%',
          width: '100%',
        }}
      >
        <div 
          className="cyber-inner-card"
          style={{ 
            '--glow-color': p.color || 'var(--accent-cyan)',
            height: '100%',
            background: 'rgba(5, 8, 22, 0.95)',
            backdropFilter: 'blur(30px) saturate(180%)',
            WebkitBackdropFilter: 'blur(30px) saturate(180%)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
            position: 'relative'
          }}
        >
          {/* Dynamic background sheen */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${sheenX.get()} ${sheenY.get()}, ${p.color}18 0%, transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'background 0.1s ease'
          }} />

          {/* Constant ambient color glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            background: `radial-gradient(circle, ${p.color}0a 0%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0
          }} />

          {/* Grid overlay pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
            opacity: 0.7,
            zIndex: 0
          }} />

          {/* Scanner sweep line */}
          <div className="project-scanner" />

          {/* Radar Sweep Grid Accent */}
          <div className="cyber-radar-sweep" style={{ '--glow-color': `${p.color}08` }} />

          {/* Corner radial accent light */}
          <div style={{
            position: 'absolute',
            top: '-1px',
            right: '-1px',
            width: '100px',
            height: '100px',
            background: `radial-gradient(circle at top right, ${p.color}15, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 1
          }} />

          {/* 🖼️ Cover Image */}
          <div style={{ height: '150px', overflow: 'hidden', position: 'relative', zIndex: 2, transform: 'translateZ(15px)' }}>
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
              fontWeight: 900, background: `${p.color}15`,
              color: p.color, border: `1px solid ${p.color}25`, 
              letterSpacing: '0.1em', textTransform: 'uppercase',
              backdropFilter: 'blur(12px)', zIndex: 10,
              boxShadow: `0 4px 12px ${p.color}15`,
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span className="cyber-pulse-node" style={{ '--node-color': p.color }}></span>
              {p.category}
            </div>
          </div>

          {/* Card body content */}
          <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2, transform: 'translateZ(25px)' }}>
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

            {/* SRE Diagnostic Readout Table */}
            <div className="cyber-diag-table" style={{ '--glow-color': p.color }}>
              <div className="cyber-diag-row">
                <span className="cyber-diag-label">SYSTEM_STATUS</span>
                <span className="cyber-diag-value">{telemetry.status}</span>
              </div>
              <div className="cyber-diag-row">
                <span className="cyber-diag-label">NET_LATENCY</span>
                <span className="cyber-diag-value">{telemetry.latency}</span>
              </div>
              <div className="cyber-diag-row">
                <span className="cyber-diag-label">SYS_INTEGRITY</span>
                <span className="cyber-diag-value">{telemetry.integrity}</span>
              </div>
              <div className="cyber-diag-row">
                <span className="cyber-diag-label">HOST_INTERFACE</span>
                <span className="cyber-diag-value">{telemetry.port}</span>
              </div>
            </div>

            {/* Tech badges in code brackets */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '16px 0' }}>
              {p.tech?.slice(0, 4).map((t, idx) => (
                <span 
                  key={idx} 
                  className="cyber-badge-tag"
                  style={{ '--accent-color': p.color }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Terminal Shell Buttons */}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
              {p.live && (
                <a 
                  href={p.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cyber-shell-btn cyber-shell-btn-live"
                  style={{ 
                    flex: 1, padding: '10px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    '--glow-color': p.color
                  }}
                >
                  <span>EXECUTE_LIVE</span>
                  <ArrowUpRight size={12} />
                </a>
              )}
              
              {p.github && (
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cyber-shell-btn cyber-shell-btn-code"
                  style={{ 
                    padding: '10px 14px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    '--glow-color': p.color
                  }}
                >
                  <span>DECOMPILE</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
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

      {/* 🏷️ Executive Filter Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '56px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{
          padding: '5px',
          background: 'rgba(255, 255, 255, 0.02)',
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          borderRadius: '100px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          gap: '4px',
          boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{ 
                position: 'relative',
                padding: '10px 24px', 
                borderRadius: '100px', 
                fontSize: '0.78rem',
                fontWeight: 800,
                color: filter === cat ? '#000' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 1
              }}
            >
              {filter === cat && (
                <motion.div
                  layoutId="active-project-tab"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#fff',
                    borderRadius: '100px',
                    zIndex: -1,
                    boxShadow: '0 8px 20px rgba(255, 255, 255, 0.15)'
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

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
                  whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  className={`cyber-ledger-row ${isSelected ? 'selected' : ''}`}
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
                    boxShadow: isSelected ? `0 10px 30px ${p.color || 'var(--accent-cyan)'}08` : 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                >
                  <div className="cyber-pulse-node" style={{
                    '--node-color': isSelected ? (p.color || 'var(--accent-cyan)') : 'rgba(255,255,255,0.1)',
                    transition: 'background 0.3s'
                  }} />

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
                    position: 'relative'
                  }}>
                    <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                    <div className="cyber-radar-sweep" style={{ '--glow-color': `${p.color}22` }} />
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
                      <span className="cyber-badge-tag" style={{ '--accent-color': p.color }}>{p.category}</span>
                      <span>•</span>
                      <span>{p.tech ? p.tech.slice(0, 2).join(', ') : ''}</span>
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
