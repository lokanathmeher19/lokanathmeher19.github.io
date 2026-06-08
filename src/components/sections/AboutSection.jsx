import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';

import photo from '../../assets/my photo.png';

import SectionHeader from "./SectionHeader";

const About = () => (
  <section id="about" className="section" style={{ padding: '100px 24px' }}>
    <SectionHeader 
      badge="ABOUT ME" 
      color="var(--accent-purple)"
      title={<><span className="text-gradient">Core</span> Identity</>} 
      desc="Mapping the technical frameworks and design philosophies behind the creator." 
    />
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '60px', 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginTop: '60px', 
      maxWidth: '1200px', 
      margin: '60px auto 0' 
    }}>
      
      {/* Image with modern background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ position: 'relative', flex: '1 1 320px', maxWidth: '360px', display: 'flex', justifyContent: 'center' }}
      >
        <div style={{
          position: 'absolute', inset: '-20px', background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(139, 92, 246, 0.2))',
          filter: 'blur(20px)', borderRadius: '30px', zIndex: -1
        }} />
        <div style={{ 
          width: '320px', height: '400px', borderRadius: '24px', overflow: 'hidden', 
          border: '1px solid rgba(255,255,255,0.1)', padding: '10px', background: 'rgba(5, 8, 22, 0.6)',
          backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
        }}>
          <img 
            src={photo} 
            alt="About Me" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', borderRadius: '16px' }} 
          />
        </div>
      </motion.div>

      {/* Structured Student Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ flex: '1 1 500px', maxWidth: '750px' }}
      >
        <span className="badge">Academic Profile</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 850, lineHeight: 1.2, marginBottom: '20px' }}>
          Building Secure, <br /><span className="text-gradient">Intelligent Systems</span>
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
          I am a dedicated <strong style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>Computer Science Engineering student</strong> at GIET Bhubaneswar. My engineering philosophy revolves around writing clean, well-architected code that prioritizes execution speed and strict defensive integrations.
        </p>

        {/* Feature Checkpoints */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '30px' }}>
          {[
            { title: "Engineering", desc: "Data Structures, algorithms, optimization routines.", icon: "💻", color: "#3b82f6" },
            { title: "Security", desc: "Threat parsing, zero-trust system implementations.", icon: "🛡️", color: "#ef4444" },
            { title: "Architecture", desc: "MERN stack ecosystems, state caching procedures.", icon: "🌐", color: "#10b981" },
            { title: "Vision", desc: "Adapting neural AI tooling securely into legacy code.", icon: "🚀", color: "#f59e0b" }
          ].map((pillar, pIdx) => (
            <motion.div
              key={pIdx}
              className="glass-panel"
              whileHover={{ scale: 1.05, translateY: -5, borderColor: `${pillar.color}55`, boxShadow: `0 15px 30px ${pillar.color}22` }}
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{pillar.icon}</div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>{pillar.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);
export default About;
