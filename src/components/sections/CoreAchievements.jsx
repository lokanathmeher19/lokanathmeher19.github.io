import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';

const CoreAchievements = () => {
  const stats = [
    { label: "PROJECTS_DEPLOYED", value: "10+", sub: "Full-stack & AI", color: "#22d3ee" },
    { label: "CERTS_VALIDATED", value: "20+", sub: "Industry Credentials", color: "#a855f7" },
    { label: "ALGORITHMIC_SCORE", value: "1.2k+", sub: "Problem Solving", color: "#3b82f6" },
    { label: "GITHUB_COMMITS", value: "500+", sub: "Yearly Activity", color: "#10b981" }
  ];

  return (
    <section id="achievements" className="section" style={{ padding: '80px 24px' }}>
      <div className="studio-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, background: 'rgba(255,255,255,0.03)', borderColor: stat.color + '33' }}
            style={{ 
              gridColumn: window.innerWidth > 1024 ? 'span 3' : 'span 6',
              padding: '60px 40px',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '32px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >

            <div style={{ fontSize: '3.5rem', fontWeight: 950, color: '#fff', marginBottom: '8px', letterSpacing: '-0.05em' }}>{stat.value}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 900, color: stat.color, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>{stat.label}</div>
            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default CoreAchievements;
