import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';

import SectionHeader from "./SectionHeader";

const ProjectCard = ({ p }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        height: '100%',
        position: 'relative'
      }}
    >
      <div 
        style={{ 
          height: '100%',
          background: 'rgba(255, 255, 255, 0.015)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          backdropFilter: 'blur(20px) saturate(160%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* 🖼️ Compact Premium Image */}
        <div style={{ height: '150px', overflow: 'hidden', position: 'relative' }}>
          <motion.img 
            src={p.img} 
            alt={p.title} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: `linear-gradient(to bottom, transparent 40%, rgba(2, 6, 23, 0.9) 100%)` 
          }}></div>
          
          <div style={{ 
            position: 'absolute', top: '12px', left: '12px',
            padding: '4px 10px', borderRadius: '100px', fontSize: '0.55rem',
            fontWeight: 900, background: 'rgba(34, 211, 238, 0.1)',
            color: 'var(--accent-cyan)', border: `1px solid rgba(34, 211, 238, 0.2)`, 
            letterSpacing: '0.1em', textTransform: 'uppercase',
            backdropFilter: 'blur(8px)', zIndex: 10
          }}>
            {p.category}
          </div>
        </div>

        <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontSize: '1.15rem', 
              fontWeight: 850, 
              color: '#fff', 
              marginBottom: '6px', 
              letterSpacing: '-0.01em'
            }}>{p.title}</h3>
            
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.5)', 
              fontSize: '0.82rem', 
              lineHeight: 1.6,
              marginBottom: '16px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>{p.desc}</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {p.tech?.map((t, idx) => (
              <span key={idx} style={{ 
                fontSize: '0.58rem', 
                color: 'rgba(255, 255, 255, 0.7)', 
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '4px 10px', 
                borderRadius: '6px', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontWeight: 700
              }}>{t}</span>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={p.live} target="_blank" rel="noreferrer" style={{ 
              flex: 1, padding: '10px', fontSize: '0.75rem', background: '#fff', 
              color: '#000', border: 'none', borderRadius: '10px', fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              boxShadow: '0 8px 16px rgba(255, 255, 255, 0.08)'
            }}>
              Live <ArrowUpRight size={14} />
            </motion.a>
            
            <motion.a whileHover={{ background: 'rgba(255, 255, 255, 0.06)' }} whileTap={{ scale: 0.98 }} href={p.github} target="_blank" rel="noreferrer" style={{ 
              padding: '10px 12px', fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.02)', 
              color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '10px', fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Github size={14} />
            </motion.a>
          </div>
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
        className="projects-grid" 
        style={{ 
          position: 'relative', 
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}
      >
        {filteredProjects.map((p, i) => (
          <ProjectCard key={p.title} p={p} />
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
