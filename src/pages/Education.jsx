import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Layers, Terminal, GraduationCap } from 'lucide-react';
import { EDUCATION, EDUCATION_LOGOMAP } from '../data/portfolioData';

const logoMap = EDUCATION_LOGOMAP;

const iconMap = {
  Code2: <Code2 size={24} />,
  Layers: <Layers size={22} />,
  Terminal: <Terminal size={22} />,
  GraduationCap: <GraduationCap size={22} />
};

const SectionHeader = ({ badge, title, desc, color = "var(--accent-cyan)" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="content-center"
    style={{ marginBottom: '80px' }}
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

const TimelineNode = ({ edu, index }) => {
  const resolvedLogo = logoMap[edu.logoType];
  const resolvedIcon = iconMap[edu.iconName];
  const isEven = index % 2 !== 0;

  const percentage = edu.unit === 'CGPA' ? edu.score * 10 : edu.score;

  return (
    <motion.div 
      className="timeline-node"
      style={{ '--node-color': edu.color }}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="timeline-dot"></div>
      
      <div className="timeline-card">
        <div className="timeline-card-glow"></div>
        <div className="timeline-card-content">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div className="timeline-logo-wrap">
              {resolvedLogo ? (
                <img
                  src={resolvedLogo}
                  alt="Logo"
                  style={{
                    width: '100%', height: '100%', objectFit: 'contain',
                    transform: `scale(${edu.logoScale || 1})`,
                    filter: (typeof resolvedLogo === 'string' && resolvedLogo.includes('.jpg')) ? 'invert(1) brightness(1.2)' : 'none',
                    mixBlendMode: (typeof resolvedLogo === 'string' && resolvedLogo.includes('.jpg')) ? 'screen' : 'normal'
                  }}
                />
              ) : (
                <span style={{ color: edu.color }}>{resolvedIcon}</span>
              )}
            </div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 800, color: edu.color,
              background: `${edu.color}15`, border: `1px solid ${edu.color}33`,
              padding: '6px 14px', borderRadius: '100px', letterSpacing: '0.05em'
            }}>
              {edu.period}
            </span>
          </div>

          <div style={{ fontSize: '0.7rem', fontWeight: 900, color: edu.color, letterSpacing: '0.25em', marginBottom: '8px' }}>
            {edu.label}
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {edu.degree}
          </h3>
          <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600, marginBottom: '6px', lineHeight: 1.4 }}>
            {edu.institutionShort || edu.institution}
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.1em', marginBottom: '24px' }}>
            {edu.university ? `UNIVERSITY: ${edu.university.toUpperCase()}` : edu.board ? `BOARD: ${edu.board.toUpperCase()}` : ''}
          </div>

          {/* Academic Yield HUD */}
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.2)', padding: '16px', borderRadius: '16px', 
            border: '1px solid rgba(255, 255, 255, 0.03)', marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 800, letterSpacing: '0.1em' }}>
                ACADEMIC YIELD
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 900, color: edu.color }}>
                {edu.unit === 'CGPA' ? `${edu.score} / 10.0 CGPA` : `${edu.score}% Overall`}
              </span>
            </div>
            <div className="neon-meter-bg">
              <motion.div 
                className="neon-meter-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Tech/Subject Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {edu.features.map(feat => (
              <span key={feat} className="glass-tag-hologram">
                {feat.toUpperCase()}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default function Education() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="section" style={{ padding: '100px 24px', position: 'relative' }}>
      {/* 🌌 Atmospheric Glow Backdrops */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      <SectionHeader
        badge="EDUCATION"
        color="#22d3ee"
        title={<><span className="text-gradient">Academic</span> Milestones</>}
        desc="A chronological log of educational excellence mapped across a digital timeline."
      />

      <div ref={containerRef} className="timeline-container">
        {/* The central line */}
        <div className="timeline-spine">
          <motion.div className="timeline-spine-glow" style={{ height: spineHeight }} />
        </div>

        {/* The Data Nodes */}
        {EDUCATION.map((edu, index) => (
          <TimelineNode key={edu.id || edu.label} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
}
