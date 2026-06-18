import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Cpu, 
  Mail, 
  Github, 
  Linkedin, 
  Code,
  Code2,
  Terminal,
  Database,
  Shield,
  Send,
  Download,
  ArrowUpRight,
  ShieldCheck,
  Smartphone,
  Layers,
  Globe,
  Server,
  Box,
  Hexagon,
  Command,
  Binary,
  Braces,
  Orbit,
  Atom,
  Wind,
  BoxSelect,
  Brain,
  Lightbulb,
  Share2,
  Wrench,
  Search,
  CheckCircle2,
  MessageSquare,
  Zap,
  Cloud,
  Trophy,
  Award,
  Instagram,
  Lock,
  GraduationCap,
  Maximize2,
  Briefcase,
  X
} from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import Education from './Education';
import Projects from '../components/sections/ProjectsSection';
import { 
  PROJECTS, 
  INFO_CARDS, 
  HERO_CONFIG, 
  CONTACT_CONFIG, 
  SKILLS_CATEGORIES, 
  CERTIFICATES, 
  CERTIFICATES_CATEGORIES, 
  ACHIEVEMENTS, 
  ABOUT_CONFIG, 
  EXPERIENCES, 
  SYSTEM_CONFIG,
  ICON_MAP 
} from '../data/portfolioData';


// --- Section Components ---


const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const t1 = setTimeout(() => {
      if (isMounted) setIsFlipped(true);
      const t2 = setTimeout(() => {
        if (isMounted) setIsFlipped(false);
        const t3 = setTimeout(() => {
          if (isMounted) setIsFlipped(true);
          const t4 = setTimeout(() => {
            if (isMounted) setIsFlipped(false);
          }, 1000);
        }, 5000);
      }, 1000);
    }, 1800);

    return () => {
      isMounted = false;
      clearTimeout(t1);
    };
  }, []);

  const specializations = HERO_CONFIG.specializations.map(spec => ({
    ...spec,
    icon: ICON_MAP[spec.icon]
  }));

  return (
    <section id="home" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '80px', alignItems: 'center', width: '100%' }}>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
            >
              <span className="badge" style={{ margin: 0 }}>{HERO_CONFIG.roleBadge}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 51, 102, 0.1)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255, 51, 102, 0.2)' }}>
                <div className="pulse-dot"></div>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#ff3366', letterSpacing: '0.05em' }}>{HERO_CONFIG.hireStatusText}</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="hero-title"
              style={{ 
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.04em', 
                lineHeight: 1,
                marginBottom: '32px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              <span style={{ color: '#fff' }}>{HERO_CONFIG.mainTitlePrefix}</span>
              <span style={{ 
                background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                {HERO_CONFIG.mainTitleGradient}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              style={{ 
                marginBottom: '56px',
                borderLeft: '3px solid var(--accent-cyan)',
                paddingLeft: '32px',
                position: 'relative'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                left: '-3px', top: 0, 
                height: '40px', width: '3px', 
                background: '#fff', 
                boxShadow: '0 0 15px #fff' 
              }}></div>
              
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
                fontWeight: 900, 
                color: '#fff', 
                lineHeight: 1.2,
                marginBottom: '16px',
                letterSpacing: '-0.04em'
              }}>
                {HERO_CONFIG.subTitle}<span className="text-gradient">{HERO_CONFIG.fullName}</span>
              </h2>
              
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                lineHeight: 1.4
              }}>
                {HERO_CONFIG.tagline}
              </p>
            </motion.div>


            {/* 🖥️ Engineering Cluster Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                marginBottom: '20px',
                opacity: 0.8
              }}
            >
              <div style={{ height: '1px', width: '24px', background: 'var(--accent-cyan)' }}></div>
              <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--accent-cyan)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                {HERO_CONFIG.specializationsLabel}
              </span>
            </motion.div>

            {/* 🔗 Engineering Module Matrix (Essential Trio) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ 
                display: 'flex',
                gap: '12px',
                maxWidth: '850px',
                marginBottom: '48px',
                flexWrap: 'nowrap'
              }}
            >
              {specializations.map((module, i) => (
                <motion.div
                  key={module.label}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -3, 
                    background: module.isDeep ? 'rgba(34, 211, 238, 0.1)' : 'rgba(255, 255, 255, 0.06)',
                    borderColor: module.isDeep ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: module.isDeep ? '0 10px 20px -10px rgba(34, 211, 238, 0.3)' : '0 10px 20px -10px rgba(0, 0, 0, 0.2)'
                  }}
                  style={{
                    flex: '1 1 0',
                    minWidth: 0,
                    padding: '12px 14px',
                    background: module.isDeep ? 'rgba(34, 211, 238, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderBottom: `2px solid ${module.isDeep ? '#00e5ff' : 'var(--accent-cyan)'}`,
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    cursor: 'default',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {module.isDeep && (
                    <div style={{ 
                      position: 'absolute', 
                      top: 0, left: 0, right: 0, height: '100%',
                      background: 'radial-gradient(circle at 50% -20%, rgba(34, 211, 238, 0.15), transparent)',
                      pointerEvents: 'none'
                    }}></div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
                    <span style={{ color: 'var(--accent-cyan)', filter: module.isDeep ? 'drop-shadow(0 0 5px rgba(34, 211, 238, 0.5))' : 'none' }}>
                      {module.icon}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 850, color: '#fff', letterSpacing: '0.01em', lineHeight: 1.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{module.label}</span>
                  </div>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 600, lineHeight: 1.2, position: 'relative', zIndex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {module.desc}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}
            >
              <a href="#projects" className="btn-premium btn-primary" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.85rem' }}>
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-premium btn-secondary" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.85rem' }}>
                Let's Collaborate
              </a>
            </motion.div>


          {/* 📊 High-Density Meta-Bar (Centered Style) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '20px', 
            paddingTop: '24px', 
            width: '100%',
            maxWidth: '950px'
          }}>
            {INFO_CARDS.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -5, background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(34, 211, 238, 0.3)' }}
                style={{
                  padding: '18px 24px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  WebkitBackdropFilter: 'blur(10px)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                  minWidth: 'fit-content'
                }}
              >
                <div style={{ color: 'var(--text-secondary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1rem' }}>{info.icon}</span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{info.label}</span>
                </div>
                <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {info.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ perspective: '1200px', marginTop: '-80px' }}>
          <motion.div 
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: isFlipped ? 182 : 2 }}
            transition={{ duration: 0.45, type: 'spring', stiffness: 200, damping: 25 }}
            style={{ position: 'relative', width: '320px', transformStyle: 'preserve-3d', marginLeft: 'auto' }}
          >
            {/* --- Front Face --- */}
            <div style={{ 
              backfaceVisibility: 'hidden', 
              width: '100%', 
              transform: 'translateZ(20px)', 
              zIndex: isFlipped ? 1 : 10,
              pointerEvents: isFlipped ? 'none' : 'auto'
            }}>
              <div className="glass-panel" style={{ 
                padding: '12px', borderRadius: '32px', position: 'relative', 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px -12px rgba(0, 0, 0, 0.7)',
                overflow: 'hidden'
              }}>
                {/* 🎀 Electric Neon Architect Ribbon */}
                <div style={{ 
                  position: 'absolute', top: '30px', left: '-50px', 
                  width: '180px', background: 'linear-gradient(135deg, #22d3ee, #818cf8)', 
                  color: '#020617', transform: 'rotate(-45deg)', textAlign: 'center', 
                  fontSize: '0.48rem', fontWeight: 950, letterSpacing: '0.08em',
                  padding: '6px 0', 
                  boxShadow: '0 4px 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(129, 140, 248, 0.2)', 
                  zIndex: 30, textTransform: 'uppercase',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {HERO_CONFIG.architectRibbon}
                </div>

                <div 
                  onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                  style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', aspectRatio: '3/4', background: '#050816', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
                >
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 1 }}></div>
                  <img 
                    src={HERO_CONFIG.photo} 
                    alt="Lokanath" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', position: 'relative', zIndex: 0 }} 
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, rgba(2, 6, 23, 1) 0%, rgba(2, 6, 23, 0.4) 50%, transparent 100%)', zIndex: 2 }}></div>
                  
                  {/* ✨ Flip Hint Badge */}
                  <div style={{ 
                    position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
                    zIndex: 10, background: 'rgba(2, 6, 23, 0.7)', backdropFilter: 'blur(12px)',
                    padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(34, 211, 238, 0.4)',
                    display: 'flex', alignItems: 'center', gap: '8px', color: '#fff',
                    fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.2em',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)'
                  }}>
                    <Terminal size={12} className="text-gradient" /> {HERO_CONFIG.devIdentityHint}
                  </div>
                </div>

                <div style={{ 
                  marginTop: '16px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  padding: '0 12px 10px',
                  position: 'relative',
                  zIndex: 100 
                }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <motion.a whileHover={{ y: -4, color: '#fff' }} whileTap={{ scale: 0.9 }} href={CONTACT_CONFIG.github} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <Github size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#0077b5' }} whileTap={{ scale: 0.9 }} href={CONTACT_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#E4405F' }} whileTap={{ scale: 0.9 }} href={CONTACT_CONFIG.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <Instagram size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#25D366' }} whileTap={{ scale: 0.9 }} href={CONTACT_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <WhatsAppIcon size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#fff' }} whileTap={{ scale: 0.9 }} href={CONTACT_CONFIG.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <XIcon size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Back Face (QR Code) --- */}
            <div style={{ 
              backfaceVisibility: 'hidden', 
              transform: 'rotateY(180deg) translateZ(20px)', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              zIndex: isFlipped ? 10 : 1,
              pointerEvents: isFlipped ? 'auto' : 'none'
            }}>
              <div 
                className="glass-panel" 
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ 
                  height: '100%', padding: '24px', borderRadius: '32px', 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid var(--accent-cyan)', background: 'rgba(2, 6, 23, 0.98)',
                  boxShadow: '0 0 60px rgba(34, 211, 238, 0.15)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  marginBottom: '28px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(34, 211, 238, 0.4)',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)'
                }}>
                  <Linkedin size={14} color="var(--accent-cyan)" />
                  <span style={{ 
                    fontSize: '0.65rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.15em', 
                    color: '#fff',
                    textTransform: 'uppercase'
                  }}>
                    Connect in <span style={{ color: 'var(--accent-cyan)' }}>Linkedin</span>
                  </span>
                </div>
                
                <div style={{ 
                  background: '#fff', padding: '12px', borderRadius: '16px', 
                  boxShadow: '0 0 40px rgba(34, 211, 238, 0.2)', marginBottom: '24px'
                }}>
                  <img 
                    src={CONTACT_CONFIG.linkedinQrApiUrl} 
                    alt="LinkedIn QR" 
                    style={{ width: '180px', height: '180px', display: 'block' }}
                  />
                </div>

                <div style={{ textAlign: 'center', width: '100%' }}>
                  <p style={{ 
                    fontFamily: "'Herr Von Muellerhoff', cursive", 
                    fontSize: '2.8rem', 
                    color: '#fff',
                    marginBottom: '-10px',
                    opacity: 0.9,
                    fontWeight: 400
                  }}>
                    {HERO_CONFIG.signatureText}
                  </p>
                  <div style={{ 
                    color: 'rgba(255,255,255,0.4)', 
                    fontSize: '0.6rem', 
                    fontWeight: 400, 
                    letterSpacing: '0.5em',
                    textTransform: 'uppercase',
                    marginTop: '0px'
                  }}>
                    {HERO_CONFIG.signatureSub}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};






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



const FloatingLogos = () => {
  const logos = [
    // Primary Core (High Visibility)
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", top: "12%", left: "68%", size: 50, blur: "0px", opacity: 0.8, delay: 0 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", top: "35%", left: "82%", size: 45, blur: "0px", opacity: 0.7, delay: 1 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", top: "65%", left: "72%", size: 55, blur: "0px", opacity: 0.8, delay: 2 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", top: "20%", left: "92%", size: 45, blur: "0px", opacity: 0.7, delay: 3 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", top: "52%", left: "88%", size: 48, blur: "0px", opacity: 0.8, delay: 4 },
    
    // Modern Stack (Mid-tone)
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", top: "8%", left: "75%", size: 40, blur: "1px", opacity: 0.5, delay: 1.5 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", top: "78%", left: "80%", size: 42, blur: "1px", opacity: 0.5, delay: 2.5 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", top: "45%", left: "94%", size: 38, blur: "1px", opacity: 0.6, delay: 3.5 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", top: "60%", left: "62%", size: 45, blur: "2px", opacity: 0.4, delay: 4.5 },
    
    // Supporting Ecosystem (Ambience)
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", top: "35%", left: "60%", size: 38, blur: "3px", opacity: 0.3, delay: 0.5 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", top: "15%", left: "58%", size: 32, blur: "3px", opacity: 0.25, delay: 1.2 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", top: "85%", left: "65%", size: 32, blur: "4px", opacity: 0.2, delay: 2.8 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", top: "5%", left: "88%", size: 35, blur: "5px", opacity: 0.15, delay: 5 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", top: "85%", left: "92%", size: 30, blur: "1px", opacity: 0.4, delay: 2 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", top: "10%", left: "95%", size: 30, blur: "1px", opacity: 0.4, delay: 3 }
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {/* Primary Glow */}
      <div style={{ 
        position: 'absolute', 
        right: '-5%', 
        top: '10%', 
        width: '550px', 
        height: '550px', 
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
        filter: 'blur(90px)',
        borderRadius: '50%'
      }} />
      
      {/* Decorative Aura */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'absolute', 
          right: '8%', 
          bottom: '15%', 
          width: '350px', 
          height: '350px', 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          borderRadius: '50%'
        }} 
      />

      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo.url}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: [logo.opacity * 0.7, logo.opacity, logo.opacity * 0.7],
            x: [0, 40, 0],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: logo.delay
          }}
          style={{
            position: 'absolute',
            width: `${logo.size}px`,
            left: logo.left,
            top: logo.top,
            opacity: logo.opacity * 0.4,
            transformBox: 'fill-box',
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
};

const SecurityBackground = () => {
  const icons = [
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", top: "15%", left: "15%", size: 55, delay: 0 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", top: "70%", left: "20%", size: 45, delay: 1 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg", top: "25%", left: "75%", size: 50, delay: 2, filter: 'invert(1) opacity(0.3)' },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ssh/ssh-original-wordmark.svg", top: "50%", left: "80%", size: 60, delay: 3, filter: 'invert(1) opacity(0.2)' }
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px', 
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
        filter: 'blur(70px)', borderRadius: '50%', zIndex: 0
      }} />
      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.url}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.03, 0.08, 0.03], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: icon.delay }}
          style={{ position: 'absolute', width: `${icon.size}px`, left: icon.left, top: icon.top, opacity: 0.05, transformBox: 'fill-box', zIndex: 1 }}
        />
      ))}
    </div>
  );
};

const DevOpsBackground = () => {
  const icons = [
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", top: "20%", left: "10%", size: 60, delay: 0 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg", top: "75%", left: "80%", size: 55, delay: 2 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", top: "80%", left: "30%", size: 45, delay: 4, filter: 'invert(1) opacity(0.2)' }
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px', 
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
        filter: 'blur(70px)', borderRadius: '50%', zIndex: 0
      }} />
      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.url}
          animate={{ x: [0, -25, 0], y: [0, 25, 0], opacity: [0.03, 0.08, 0.03], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 9 + i, repeat: Infinity, ease: "easeInOut", delay: icon.delay }}
          style={{ position: 'absolute', width: `${icon.size}px`, left: icon.left, top: icon.top, opacity: 0.05, transformBox: 'fill-box', zIndex: 1 }}
        />
      ))}
    </div>
  );
};

const MernBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const icons = [
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", top: "15%", left: "10%", size: 60, delay: 0 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", top: "70%", left: "15%", size: 55, delay: 1 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", top: "25%", left: "80%", size: 65, delay: 2 },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", top: "80%", left: "75%", size: 50, delay: 3, filter: 'invert(1) opacity(0.2)' },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", top: "50%", left: "85%", size: 45, delay: 4 }
  ];

  return (
    <div 
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}
    >
      {/* ⚛️ Fixed Central Glow */}
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px', 
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)', borderRadius: '50%', zIndex: 0
      }} />

      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.url}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 15, 0],
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 7 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: icon.delay 
          }}
          style={{
            position: 'absolute',
            width: `${icon.size}px`,
            left: icon.left,
            top: icon.top,
            opacity: 0.05,
            transformBox: 'fill-box',
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
};


const PremiumSkillCard = ({ cat, i, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        gridColumn: window.innerWidth > 1024 
          ? (cat.classes.includes('lg:col-span-12') ? 'span 12' : (cat.classes.includes('lg:col-span-8') ? 'span 8' : (cat.classes.includes('lg:col-span-6') ? 'span 6' : 'span 4')))
          : 'span 12'
      }}
    >
      <div className={`studio-card ${cat.classes}`}>
        {/* Subtle Edge Glow */}
        <div style={{
          position: 'absolute', inset: 0, 
          boxShadow: `inset 0 0 40px ${cat.color}08`, 
          borderRadius: 'inherit', pointerEvents: 'none' 
        }} />
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = SKILLS_CATEGORIES.map(cat => ({
    ...cat,
    icon: ICON_MAP[cat.iconName] ? React.cloneElement(ICON_MAP[cat.iconName], { size: 32 }) : null,
    skills: cat.skills.map(s => ({
      ...s,
      icon: s.iconName ? React.cloneElement(ICON_MAP[s.iconName], { size: 14 }) : null
    }))
  }));

  return (
    <section id="skills" className="section" style={{ position: 'relative', padding: '160px 24px' }}>
      <SectionHeader 
        badge="Skills" 
        color="var(--accent-cyan)"
        title={
          <>
            <span className="text-gradient">Technical</span> Cognition
          </>
        } 
        desc="A professional documentation of foundational engineering logic and deep technical understanding." 
      />

      <div className="studio-grid" style={{ marginTop: '100px' }}>
        {categories.map((cat, i) => (
          <PremiumSkillCard key={cat.title} cat={cat} i={i}>
            {cat.specialEffect === 'floating-logos' && <FloatingLogos />}
            {cat.specialEffect === 'mern-bg' && <MernBackground />}
            {cat.specialEffect === 'security-bg' && <SecurityBackground />}
            {cat.specialEffect === 'devops-bg' && <DevOpsBackground />}
            


            <div className="watermark-icon">{cat.icon}</div>
            
            <div style={{ position: 'relative', zIndex: 10, transform: 'translateZ(30px)' }}>
              <div className="studio-indicator" style={{ color: cat.color }}></div>
              <h3 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em' }}>
                {cat.title === "MERN Full-stack" ? (
                  <motion.span
                    whileHover={{ 
                      textShadow: `0 0 15px ${cat.color}, 0 0 30px ${cat.color}`,
                    }}
                    style={{ cursor: 'default' }}
                  >
                    MERN <span style={{ color: cat.color, opacity: 0.9, textShadow: `0 0 20px ${cat.color}44` }}>Full-stack</span>
                  </motion.span>
                ) : (
                  cat.title.split(' ').map((word, idx) => (
                    <span key={idx} style={idx > 0 ? { color: cat.color, opacity: 0.9, textShadow: `0 0 20px ${cat.color}44` } : {}}>{word} </span>
                  ))
                )}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', marginBottom: '48px', maxWidth: '400px', lineHeight: 1.6 }}>
                {cat.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {cat.skills.map(skill => (
                  <motion.div 
                    key={skill.name} 
                    className="glass-tag"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: cat.color + '44',
                      boxShadow: `0 0 20px ${cat.color}15`
                    }}
                  >
                    {skill.logo ? (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        style={{ 
                          width: '16px', 
                          height: '16px', 
                          objectFit: 'contain',
                          filter: skill.filter || 'none'
                        }} 
                      />
                    ) : (
                      <span style={{ color: cat.color }}>{skill.icon}</span>
                    )}
                    <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {skill.name}
                      {skill.level && (
                        <span style={{ fontSize: '0.5rem', opacity: 0.4, fontWeight: 900 }}>{skill.level}%</span>
                      )}
                      {skill.level && (
                        <div style={{ 
                          position: 'absolute', 
                          bottom: '-4px', 
                          left: 0, 
                          width: '100%', 
                          height: '2px', 
                          background: `linear-gradient(90deg, ${cat.color}CC, transparent)`,
                          transform: `scaleX(${skill.level / 100})`,
                          transformOrigin: 'left',
                          boxShadow: `0 0 8px ${cat.color}88`
                        }}></div>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </PremiumSkillCard>
        ))}
      </div>
    </section>
  );
};




const PreviewCard = ({ cert }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth 3D tilt dynamics
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), { stiffness: 200, damping: 25 });

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

  if (!cert) return null;

  return (
    <div style={{ perspective: 1000, width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      {/* Dynamic Background Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '90%',
          background: `radial-gradient(circle, ${cert.color || 'var(--accent-purple)'}25 0%, transparent 70%)`,
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.5s ease'
        }}
      />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '16px',
          backdropFilter: 'blur(15px)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'border-color 0.3s ease'
        }}
        whileHover={{
          borderColor: `${cert.color}44`
        }}
      >
        <div style={{ 
          width: '100%', 
          aspectRatio: '16/10', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          position: 'relative',
          backgroundColor: '#000',
          transform: 'translateZ(20px)'
        }}>
          <img 
            src={cert.img} 
            alt={cert.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)' }} />
          
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 900, color: cert.color || 'var(--accent-purple)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cert.issuer}</span>
          </div>
        </div>

        <div style={{ width: '100%', marginTop: '20px', transform: 'translateZ(30px)', textAlign: 'center', padding: '0 8px' }}>
          <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 800, margin: '0 0 8px 0', lineHeight: '1.4' }}>{cert.title}</h4>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
            <Award size={10} style={{ color: cert.color }} />
            {cert.category} CREDENTIAL
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCert, setActiveCert] = useState(null);

  const categories = CERTIFICATES_CATEGORIES;
  const certifications = CERTIFICATES;

  const filteredCerts = activeFilter === 'ALL' 
    ? certifications 
    : certifications.filter(c => c.category === activeFilter);

  // Sync activeCert with filter change
  useEffect(() => {
    if (filteredCerts.length > 0) {
      setActiveCert(filteredCerts[0]);
    } else {
      setActiveCert(null);
    }
  }, [activeFilter]);

  return (
    <section id="certificates" className="section" style={{ padding: '120px 24px', overflow: 'hidden', position: 'relative' }}>
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
        @media (max-width: 768px) {
          .certificates-desktop-layout {
            display: none !important;
          }
          .certificates-mobile-layout {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .certificates-desktop-layout {
            display: flex !important;
          }
          .certificates-mobile-layout {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>

      <SectionHeader 
        badge="Certificates" 
        color="var(--accent-purple)"
        title={<><span className="text-gradient">Professional</span> Validation</>} 
        desc="A precision-engineered archive of certifications and technical mastery." 
      />

      {/* 🧭 Filter Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '60px', marginBottom: '40px', position: 'relative', zIndex: 10 }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            style={{
              padding: '10px 24px', borderRadius: '100px',
              border: `1px solid ${activeFilter === cat.id ? 'var(--accent-purple)' : 'rgba(255,255,255,0.06)'}`,
              background: activeFilter === cat.id ? 'rgba(139, 92, 246, 0.12)' : 'rgba(255,255,255,0.01)',
              color: activeFilter === cat.id ? '#fff' : 'rgba(255,255,255,0.5)',
              fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '10px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {cat.logo && (
              <img 
                src={cat.logo} 
                alt={`${cat.label} logo`} 
                style={{ height: '18px', width: 'auto', objectFit: 'contain' }} 
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* 🖥️ Desktop Layout: Dual Pane Ledger */}
      <div className="certificates-desktop-layout" style={{
        gap: '40px',
        maxWidth: '1200px',
        margin: '20px auto 0',
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
            {filteredCerts.map((cert, i) => {
              const isSelected = activeCert === cert;
              return (
                <motion.div
                  key={cert.title}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveCert(cert)}
                  whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: isSelected ? 'rgba(255,255,255,0.015)' : 'transparent',
                    border: isSelected 
                      ? `1px solid ${cert.color}33` 
                      : '1px solid rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: isSelected ? `0 10px 30px ${cert.color}08` : 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                >
                  <div style={{
                    width: '3px',
                    height: '24px',
                    borderRadius: '2px',
                    background: isSelected ? cert.color : 'rgba(255,255,255,0.1)',
                    transition: 'background 0.3s'
                  }} />

                  {/* Tiny Thumbnail */}
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
                    flexShrink: 0
                  }}>
                    <img src={cert.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
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
                      {cert.title}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                      <span style={{ color: cert.color, fontWeight: 700 }}>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.category}</span>
                    </div>
                  </div>

                  <ArrowUpRight size={16} style={{ 
                    color: isSelected ? cert.color : 'rgba(255,255,255,0.2)',
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
            {activeCert ? (
              <motion.div
                key={activeCert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <PreviewCard cert={activeCert} />
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCert(activeCert)}
                  style={{
                    marginTop: '28px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '12px 28px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '0.05em',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  PREVIEW CREDENTIAL <Maximize2 size={13} />
                </motion.button>
              </motion.div>
            ) : (
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>Select a certificate to view details</div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 📱 Mobile Layout: Swipeable Card Slider */}
      <div className="certificates-mobile-layout" style={{
        marginTop: '20px',
        width: '100%',
        position: 'relative',
        zIndex: 5
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
          {filteredCerts.map((cert, i) => (
            <motion.div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              style={{
                flex: '0 0 280px',
                scrollSnapAlign: 'center',
                background: 'rgba(255, 255, 255, 0.01)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ aspectRatio: '16/10', position: 'relative' }}>
                <img src={cert.img} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 80%)' }} />
                
                <div style={{ position: 'absolute', bottom: '12px', left: '16px' }}>
                  <span style={{ fontSize: '0.55rem', fontWeight: 900, color: cert.color || 'var(--accent-purple)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cert.issuer}</span>
                </div>
              </div>
              
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.4 }}>{cert.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontWeight: 800 }}>{cert.category}</span>
                  <div style={{ color: cert.color, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                    VIEW <Maximize2 size={10} />
                  </div>
                </div>
              </div>
            </motion.div>
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

      {/* 🖼️ Cinematic Lightbox Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(2, 6, 23, 0.98)",
              backdropFilter: "blur(20px)",
              display: "flex", 
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              zIndex: 10000, 
              padding: '80px 20px 40px',
              overflowY: 'auto'
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              style={{
                position: 'fixed',
                top: '24px', right: '24px',
                background: 'rgba(255,255,255,0.06)', 
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
                width: '44px', height: '44px',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10001
              }}
              onClick={() => setSelectedCert(null)}
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
              style={{ 
                position: 'relative', 
                maxWidth: '900px', 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                style={{
                  width: "auto",
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  borderRadius: "16px",
                  boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
                  objectFit: "contain"
                }}
              />
              <div style={{ marginTop: '32px', textAlign: 'center', paddingBottom: '40px' }}>
                 <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: '10px', letterSpacing: '-0.02em' }}>{selectedCert.title}</h2>
                 <p style={{ color: selectedCert.color || 'var(--text-secondary)', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.8rem' }}>
                    {selectedCert.issuer.toUpperCase()} • OFFICIAL CREDENTIAL
                 </p>
                 <div style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
                   <a 
                     href={selectedCert.img} 
                     download={`${selectedCert.title}.jpg`}
                     className="btn-premium btn-primary"
                     style={{ padding: '12px 24px', fontSize: '0.8rem', borderRadius: '100px' }}
                   >
                     Download Certificate <Download size={14} />
                   </a>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CoreAchievements = () => {
  const stats = ACHIEVEMENTS;

  return (
    <section id="achievements" className="section" style={{ padding: '40px 24px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        maxWidth: '1000px', 
        margin: '0 auto' 
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, background: 'rgba(255,255,255,0.03)', borderColor: stat.color + '33' }}
            style={{ 
              padding: '24px 20px',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '4px', letterSpacing: '-0.02em' }}>{stat.value}</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: stat.color, textTransform: 'uppercase', marginBottom: '6px' }}>{stat.label}</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



const About = () => (
  <section id="about" className="section" style={{ padding: '60px 24px' }}>
    <SectionHeader 
      badge={ABOUT_CONFIG.badge} 
      color="var(--accent-purple)"
      title={<><span className="text-gradient">{ABOUT_CONFIG.titlePrefix}</span> {ABOUT_CONFIG.titleGradient}</>} 
      desc={ABOUT_CONFIG.desc} 
    />
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '60px', 
      alignItems: 'center', 
      justifyContent: 'center',
      maxWidth: '1100px', 
      margin: '20px auto 0' 
    }}>
      
      {/* Image with modern background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ position: 'relative', flex: '0 1 280px', maxWidth: '280px', display: 'flex', justifyContent: 'center' }}
      >
        <div style={{
          position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(139, 92, 246, 0.2))',
          filter: 'blur(30px)', borderRadius: '30px', zIndex: -1
        }} />
        <div style={{ 
          width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', 
          border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(5, 8, 22, 0.6)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
        }}>
          <img 
            src={ABOUT_CONFIG.photo} 
            alt="About Me" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} 
          />
        </div>
      </motion.div>

      {/* Structured Student Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <div>
          {ABOUT_CONFIG.academicBadge && (
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>{ABOUT_CONFIG.academicBadge}</span>
          )}
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 850, lineHeight: 1.2, margin: '0 0 16px 0', color: '#fff' }}>
            {ABOUT_CONFIG.academicSubtitlePrefix} <br /><span className="text-gradient">{ABOUT_CONFIG.academicSubtitleGradient}</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
            {ABOUT_CONFIG.aboutText}
          </p>
        </div>

        {/* Feature Checkpoints */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '16px' }}>
          {ABOUT_CONFIG.pillars.map((pillar, pIdx) => (
            <motion.div
              key={pIdx}
              whileHover={{ scale: 1.02, translateY: -2, background: 'rgba(255,255,255,0.04)' }}
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '6px', background: `${pillar.color}15`, color: pillar.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {ICON_MAP[pillar.iconName] || pillar.icon}
                </div>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, margin: 0, letterSpacing: '0.01em' }}>{pillar.title}</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const toastId = toast.loading("Sending message...");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message sent successfully!", { id: toastId });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        toast.error("Failed to send message. Please try again later.", { id: toastId });
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section id="contact" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ padding: '80px 60px', borderRadius: '40px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>Let's Build Something Great.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>{CONTACT_CONFIG.contactParagraph}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <a href={`mailto:${CONTACT_CONFIG.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem' }}>
                {CONTACT_CONFIG.email}
              </a>
              <a href={CONTACT_CONFIG.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                  <Linkedin size={20} />
                </div> 
                LinkedIn Profile
              </a>
            </div>
          </div>
          <form style={{ display: 'grid', gap: '20px' }} onSubmit={handleSubmit}>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  placeholder="Name" 
                  required 
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', color: '#fff' }} 
                />
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  placeholder="Email" 
                  required 
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', color: '#fff' }} 
                />
             </div>
             <textarea 
               name="message" 
               value={form.message} 
               onChange={handleChange} 
               placeholder="Message" 
               rows="5" 
               required 
               style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', color: '#fff', resize: 'none' }}
             ></textarea>
             <button type="submit" className="btn-premium btn-primary" style={{ width: 'fit-content' }}>Send Message <Send size={18} /></button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

const ResumeSection = () => {
  const experience = EXPERIENCES.map(exp => ({
    ...exp,
    desc: exp.summary,
    icon: ICON_MAP[exp.iconName] || <Terminal size={24} />
  }));

  return (
    <section id="resume" className="section" style={{ padding: '100px 24px' }}>
      <SectionHeader 
        badge="Resume" 
        color="var(--accent-cyan)"
        title={<><span className="text-gradient">Professional</span> Trajectory</>} 
        desc="A summary of industrial engagement and engineering milestones." 
      />
      
      <div style={{ maxWidth: '800px', margin: '60px auto 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ 
              padding: '32px', 
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ y: -4, background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div style={{ 
              width: '56px', height: '56px', borderRadius: '16px', 
              background: `${exp.color}15`, color: exp.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
            }}>
              {exp.icon}
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, margin: '0 0 4px 0' }}>{exp.role}</h3>
                  <p style={{ color: exp.color, fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: '4px' }}>{exp.periodShort || exp.period}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', justifyContent: 'flex-end' }}>
                    <MapPin size={14} /> {exp.locationShort || exp.location}
                  </div>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', margin: '16px 0 0 0' }}>
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '16px', marginTop: '32px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/resume" className="btn-premium btn-secondary" style={{ padding: '16px 32px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            View Full Resume
          </Link>
          <a href={HERO_CONFIG.resumePdfName} download className="btn-premium btn-primary" style={{ padding: '16px 32px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            Download PDF <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {

  return (
    <div className="page-root">
      <Hero />
      <Skills />
      <Certificates />
      <Education />
      <Projects />
      <ResumeSection />
      <CoreAchievements />
      <About />
      <Contact />

      <footer style={{ 
        padding: '120px 24px 60px', 
        background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.03))',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 🔗 Social Connectivity Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '48px' }}>
          {[
            { icon: <Github size={22} />, link: CONTACT_CONFIG.github },
            { icon: <Linkedin size={22} />, link: CONTACT_CONFIG.linkedin },
            { icon: <Instagram size={22} />, link: CONTACT_CONFIG.instagram },
            { icon: <XIcon size={20} />, link: CONTACT_CONFIG.twitter }
          ].map((soc, i) => (
            <motion.a 
              key={i}
              href={soc.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -8, color: 'var(--accent-cyan)' }}
              style={{ color: 'rgba(255,255,255,0.3)', transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)' }}
            >
              {soc.icon}
            </motion.a>
          ))}
        </div>

        {/* 📟 System Status Bar */}
        <div style={{ 
          maxWidth: '800px', margin: '0 auto 40px', padding: '16px',
          background: 'rgba(255,255,255,0.02)', borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.05)', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between', paddingLeft: '32px', paddingRight: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>{SYSTEM_CONFIG.archiveStatusText}</span>
          </div>
          <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.05)' }}></div>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>{SYSTEM_CONFIG.deploymentVersion}</span>
        </div>

         <p style={{ 
           color: 'rgba(255,255,255,0.3)', 
           fontSize: '0.75rem', 
           letterSpacing: '0.4em',
           fontWeight: 900,
           textTransform: 'uppercase'
         }}>
           {SYSTEM_CONFIG.copyrightText}
         </p>

         {/* Bottom Glow */}
         <div style={{ 
           position: 'absolute', bottom: '-150px', left: '50%', transform: 'translateX(-50%)',
           width: '1000px', height: '300px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
           filter: 'blur(100px)', zIndex: -1
         }}></div>
      </footer>

      <div className="app-bg"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </div>
  );
}
