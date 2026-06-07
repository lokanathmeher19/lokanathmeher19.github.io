import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useSpring, useScroll } from 'framer-motion';
import { Code2, Layers, Terminal, GraduationCap } from 'lucide-react';

import { EDUCATION, EDUCATION_LOGOMAP } from '../data/portfolioData';

const logoMap = EDUCATION_LOGOMAP;

const iconMap = {
  Code2: <Code2 size={24} />,
  Layers: <Layers size={22} />,
  Terminal: <Terminal size={22} />,
  GraduationCap: <GraduationCap size={22} />
};


// Internal SectionHeader to make component fully self-contained
const SectionHeader = ({ badge, title, desc, color = "var(--accent-cyan)" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="content-center"
    style={{ marginBottom: '64px' }}
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

const EducationCard = ({ edu, index, total, scrollYProgress }) => {
  const i = index;
  const N = total;

  // Define input ranges and output ranges for this card
  const input = [];
  const scale = [];
  const y = [];
  const z = [];
  const rotateX = [];
  const opacity = [];
  const rotateZ = [];
  const blurAmount = [];

  for (let step = 0; step <= N; step++) {
    const p = step / N;
    input.push(p);

    if (step < i) {
      const k = i - step;
      scale.push(1 - k * 0.04);
      y.push(k * 24);
      z.push(-k * 35);
      rotateX.push(8);
      opacity.push(1 - k * 0.25);
      rotateZ.push(0);
      blurAmount.push(k * 8); // 8px blur per stacked layer to hide info
    } else if (step === i) {
      scale.push(1.0);
      y.push(0);
      z.push(0);
      rotateX.push(0);
      opacity.push(1.0);
      rotateZ.push(0);
      blurAmount.push(0); // sharp when active
    } else {
      scale.push(0.95);
      y.push(-800);
      z.push(50);
      rotateX.push(-12);
      opacity.push(0);
      rotateZ.push(i % 2 === 0 ? -6 : 6);
      blurAmount.push(0);
    }
  }

  // Create transforms
  const cardScale = useTransform(scrollYProgress, input, scale);
  const cardY = useTransform(scrollYProgress, input, y);
  const cardZ = useTransform(scrollYProgress, input, z);
  const cardRotateX = useTransform(scrollYProgress, input, rotateX);
  const cardOpacity = useTransform(scrollYProgress, input, opacity);
  const cardRotateZ = useTransform(scrollYProgress, input, rotateZ);
  const cardBlur = useTransform(scrollYProgress, input, blurAmount);

  // Apply spring physics for extra butteriness
  const springConfig = { stiffness: 80, damping: 18, mass: 0.8 };
  const smoothScale = useSpring(cardScale, springConfig);
  const smoothY = useSpring(cardY, springConfig);
  const smoothZ = useSpring(cardZ, springConfig);
  const smoothRotateX = useSpring(cardRotateX, springConfig);
  const smoothOpacity = useSpring(cardOpacity, springConfig);
  const smoothRotateZ = useSpring(cardRotateZ, springConfig);
  const smoothBlur = useSpring(cardBlur, springConfig);

  // Convert smooth blur number to CSS filter string dynamically
  const cardFilter = useTransform(smoothBlur, (v) => `blur(${v}px)`);

  // Dynamically disable mouse hover/clicks on cards once they have scrolled away
  const pointerEvents = useTransform(scrollYProgress, (progress) => {
    const exitPoint = (i + 0.9) / N;
    return progress > exitPoint ? 'none' : 'auto';
  });

  // SVG circular gauge variables
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const percentage = edu.unit === 'CGPA' ? edu.score * 10 : edu.score;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const resolvedLogo = logoMap[edu.logoType];
  const resolvedIcon = iconMap[edu.iconName];

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        zIndex: N - i,
        scale: smoothScale,
        y: smoothY,
        z: smoothZ,
        rotateX: smoothRotateX,
        opacity: smoothOpacity,
        rotate: smoothRotateZ,
        filter: cardFilter,
        pointerEvents,
      }}
    >
      <div
        className="education-glass-card"
        style={{
          '--glow-color': `${edu.color}44`,
          '--watermark-color': edu.color,
        }}
      >
        {/* Glowing Corner Accent */}
        <div className="education-corner-glow" style={{ '--glow-color': edu.color }}></div>

        {/* Grid Overlay */}
        <div className="education-grid-overlay"></div>

        {/* Watermark graduation cap */}
        <div className="education-card-watermark" style={{ '--watermark-color': edu.color }}>
          <GraduationCap size={160} strokeWidth={1} />
        </div>

        {/* Upper Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div className="education-logo-container" style={{ '--glow-color': edu.color }}>
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
              fontSize: '0.8rem', fontWeight: 800, color: edu.color,
              background: `${edu.color}12`, border: `1px solid ${edu.color}22`,
              padding: '8px 18px', borderRadius: '100px', letterSpacing: '0.05em',
              boxShadow: `inset 0 0 10px ${edu.color}05`
            }}>
              {edu.period}
            </span>
          </div>

          {/* Sub-label & Title */}
          <div style={{ fontSize: '0.7rem', fontWeight: 900, color: edu.color, letterSpacing: '0.25em', marginBottom: '10px' }}>
            {edu.label}
          </div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '10px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {edu.degree}
          </h3>
          <div style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600, marginBottom: '6px', lineHeight: 1.4 }}>
            {edu.institutionShort || edu.institution}
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '0.1em' }}>
            {edu.university ? `UNIVERSITY: ${edu.university.toUpperCase()}` : `BOARD: ${edu.board.toUpperCase()}`}
          </div>
        </div>

        {/* Lower Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Score Section with SVG Gauge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '24px',
            padding: '20px 24px', background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.03)', borderRadius: '24px',
            marginBottom: '28px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ position: 'relative', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="72" height="72" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="5" fill="transparent" />
                <motion.circle
                  cx="40" cy="40" r="30"
                  stroke={edu.color} strokeWidth="5" fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                  transform="rotate(-90 40 40)"
                  style={{ filter: `drop-shadow(0 0 6px ${edu.color}66)` }}
                />
              </svg>
              <div style={{ position: 'absolute', fontSize: '1.1rem', fontWeight: 950, color: '#fff' }}>
                {edu.score}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '4px' }}>ACADEMIC YIELD</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: edu.color }}>
                {edu.unit === 'CGPA' ? `${edu.score} / 10.0 CGPA` : `${edu.score}% Overall`}
              </div>
            </div>
          </div>

          {/* Subject tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {edu.features.map(feat => (
              <span key={feat} className="glass-tag" style={{
                fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.6)',
                borderColor: 'rgba(255, 255, 255, 0.06)',
                padding: '6px 14px', letterSpacing: '0.02em'
              }}>
                {feat.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MobileEducationCard = ({ edu }) => {
  // SVG circular gauge variables
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const percentage = edu.unit === 'CGPA' ? edu.score * 10 : edu.score;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const resolvedLogo = logoMap[edu.logoType];
  const resolvedIcon = iconMap[edu.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
    >
      <div
        className="education-glass-card"
        style={{
          '--glow-color': `${edu.color}44`,
          '--watermark-color': edu.color,
          minHeight: '400px'
        }}
      >
        {/* Glowing Corner Accent */}
        <div className="education-corner-glow" style={{ '--glow-color': edu.color }}></div>

        {/* Grid Overlay */}
        <div className="education-grid-overlay"></div>

        {/* Watermark graduation cap */}
        <div className="education-card-watermark" style={{ '--watermark-color': edu.color }}>
          <GraduationCap size={140} strokeWidth={1} />
        </div>

        {/* Upper Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div className="education-logo-container" style={{ '--glow-color': edu.color }}>
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
              background: `${edu.color}12`, border: `1px solid ${edu.color}22`,
              padding: '6px 14px', borderRadius: '100px', letterSpacing: '0.05em'
            }}>
              {edu.period}
            </span>
          </div>

          {/* Sub-label & Title */}
          <div style={{ fontSize: '0.65rem', fontWeight: 900, color: edu.color, letterSpacing: '0.25em', marginBottom: '8px' }}>
            {edu.label}
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {edu.degree}
          </h3>
          <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600, marginBottom: '6px', lineHeight: 1.4 }}>
            {edu.institutionShort || edu.institution}
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '0.1em' }}>
            {edu.university ? `UNIVERSITY: ${edu.university.toUpperCase()}` : `BOARD: ${edu.board.toUpperCase()}`}
          </div>
        </div>

        {/* Lower Content */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '24px' }}>
          {/* Score Section with SVG Gauge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '20px',
            padding: '16px 20px', background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.03)', borderRadius: '20px',
            marginBottom: '20px'
          }}>
            <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="64" height="64" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="5" fill="transparent" />
                <motion.circle
                  cx="40" cy="40" r="30"
                  stroke={edu.color} strokeWidth="5" fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                  transform="rotate(-90 40 40)"
                />
              </svg>
              <div style={{ position: 'absolute', fontSize: '0.95rem', fontWeight: 950, color: '#fff' }}>
                {edu.score}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '2px' }}>ACADEMIC YIELD</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 900, color: edu.color }}>
                {edu.unit === 'CGPA' ? `${edu.score} / 10.0 CGPA` : `${edu.score}% Overall`}
              </div>
            </div>
          </div>

          {/* Subject tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {edu.features.map(feat => (
              <span key={feat} className="glass-tag" style={{
                fontSize: '0.6rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.6)',
                padding: '5px 12px', letterSpacing: '0.02em'
              }}>
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      id="education"
      className="section"
      style={isMobile ? {
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      } : {
        padding: '0',
        position: 'relative',
        height: '240vh' // Scroll track duration
      }}
    >
      {/* 🌌 Atmospheric Glow Backdrops */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      {isMobile ? (
        // Mobile Layout (Standard scrolling cascade)
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 1 }}>
          <SectionHeader
            badge="EDUCATION"
            color="#22d3ee"
            title={<><span className="text-gradient">Academic</span> Milestones</>}
            desc="A chronological log of educational excellence and fundamental knowledge development."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '48px' }}>
            {EDUCATION.map((edu) => (
              <MobileEducationCard key={edu.label} edu={edu} />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout (3D Sticky Stacking Deck)
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '24px',
        }}>
          <div style={{ transform: 'translateY(-20px)', zIndex: 10 }}>
            <SectionHeader
              badge="EDUCATION"
              color="#22d3ee"
              title={<><span className="text-gradient">Academic</span> Milestones</>}
              desc="A chronological log of educational excellence and fundamental knowledge development."
            />
          </div>

          <div className="education-perspective" style={{ marginTop: '40px' }}>
            <div className="education-stack-container">
              {EDUCATION.map((edu, idx) => (
                <EducationCard
                  key={edu.label}
                  edu={edu}
                  index={idx}
                  total={EDUCATION.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
