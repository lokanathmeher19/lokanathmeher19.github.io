import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';

import SectionHeader from "./SectionHeader";

const PROJECT_ICONS = {
  'BARESKIN': <Layers size={18} />,
  'TruthGuard AI': <Brain size={18} />,
  'SambalpuriHUB': <Globe size={18} />,
  'Internet Speed Test': <Zap size={18} />,
  'Cybersecurity Toolkit': <ShieldCheck size={18} />,
  'Golf Charity App': <Award size={18} />
};

const getProjectIcon = (title) => {
  return PROJECT_ICONS[title] || <Terminal size={18} />;
};

const ProjectRow = ({ p }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="project-row"
      style={{ 
        '--glow-color': p.color || 'var(--accent-cyan)'
      }}
    >
      {/* Left Icon Container */}
      <div className="project-row-icon-box">
        {getProjectIcon(p.title)}
      </div>

      {/* Right Content Area */}
      <div className="project-row-content">
        {/* Top Header Level: Title & Badges and Links */}
        <div className="project-row-header">
          <div className="project-row-title-section">
            <h3 className="project-row-title">{p.title}</h3>
            <span className="project-row-badge">{p.category}</span>
          </div>

          <div className="project-row-actions">
            {p.live && (
              <motion.a 
                whileTap={{ scale: 0.95 }} 
                href={p.live} 
                target="_blank" 
                rel="noreferrer" 
                className="project-row-btn"
                title={p.btnText || "Live Demo"}
              >
                <ArrowUpRight size={16} />
              </motion.a>
            )}
            
            {p.github && (
              <motion.a 
                whileTap={{ scale: 0.95 }} 
                href={p.github} 
                target="_blank" 
                rel="noreferrer" 
                className="project-row-btn"
                title="GitHub Repository"
              >
                <Github size={16} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Middle Level: Description */}
        <p className="project-row-description">{p.desc}</p>

        {/* Bottom Level: Tech Stack Tags */}
        <div className="project-row-tech">
          {p.tech?.map((t, idx) => (
            <span key={idx} className="project-row-tech-tag">{t}</span>
          ))}
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
    <section id="projects" className="section" style={{ position: 'relative', padding: '160px 24px' }}>
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
          zIndex: 1
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
                padding: '10px 24px', 
                borderRadius: '100px', 
                fontSize: '0.78rem',
                fontWeight: 800,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: filter === cat ? '#fff' : 'transparent',
                color: filter === cat ? '#000' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="projects-list-container" 
      >
        {filteredProjects.map((p, i) => (
          <ProjectRow key={p.title} p={p} />
        ))}
      </motion.div>

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
