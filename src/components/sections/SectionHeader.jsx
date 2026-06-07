import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';

const SectionHeader = ({ badge, title, desc, count, compact, color = "var(--accent-cyan)" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="content-center"
    style={{ marginBottom: compact ? '20px' : '64px' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
       <div style={{ height: '1px', width: '32px', background: color, opacity: 0.5 }}></div>
       <span style={{ fontSize: '0.75rem', fontWeight: 900, color: color, letterSpacing: '0.4em' }}>{badge.toUpperCase()}</span>
       <div style={{ height: '1px', width: '32px', background: color, opacity: 0.5 }}></div>
    </div>
    
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
        {typeof title === 'string' ? title : title}
      </h2>
      {count && (
        <span style={{ 
          position: 'absolute', top: '-10px', right: '-40px',
          WebkitBackdropFilter: 'blur(16px)',
          backdropFilter: 'blur(16px)',
          background: 'var(--accent-purple)', color: '#fff', fontSize: '0.7rem',
          padding: '4px 10px', borderRadius: '100px', fontWeight: 900
        }}>
          {count}
        </span>
      )}
    </div>
    
    {desc && <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>{desc}</p>}
  </motion.div>
);
export default SectionHeader;
