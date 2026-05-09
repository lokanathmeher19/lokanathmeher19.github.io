import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
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
import photo from '../assets/my photo.png';
import { PROJECTS } from '../data/portfolioData';

// 🎓 Certificate Imports
import cert_google from '../assets/certs/coursera_genai.jpg';
import cert_ibm from '../assets/certs/coursera_cybersecurity.jpg';
import cert_deloitte from '../assets/certs/deloitte_data_analytics.png';
import cert_nxtwave from '../assets/certs/nxtwave_responsive.jpg';
import cert_giet_conf from '../assets/certs/giet_iccoset_conf.jpg';
import cert_codtech from '../assets/certs/codtech_python.jpg';
import cert_codec from '../assets/certs/codec_python_achievement.jpg';
import cert_simplilearn from '../assets/certs/simplilearn_software_dev.jpg';
import cert_suravi from '../assets/certs/giet_suravi_model.jpg';
import cert_autonomous from '../assets/certs/nxtwave_autonomous.jpg';
import cert_cad from '../assets/certs/giet_cad_bootcamp.jpg';
import cert_drone from '../assets/certs/giet_drone_bootcamp.jpg';
import cert_gemini from '../assets/certs/coursera_gemini.jpg';
import cert_wordpress from '../assets/certs/coursera_wordpress.jpg';
import cert_static from '../assets/certs/nxtwave_static.jpg';
import cert_codec_intern from '../assets/certs/codec_python_internship.jpg';
import cert_nccengt from '../assets/certs/giet_nccengt_paper.jpg';
import cert_workshop from '../assets/certs/workshop.png';
import cert_deloatte_2 from '../assets/certs/Deloatte.jpg';
import cert_cyber_awareness from '../assets/certs/Introduction to Cybersecurity Awareness_page-0001.jpg';
import cert_nxtwave_alt from '../assets/certs/Nxtwave.jpeg';
import cert_hackerrank from '../assets/certs/Hackerrank.png';
// import cert_ibm_bigdata from '../assets/certs/IBM BIg Data_page-0001.jpg';

// 🏷️ Category Logos
import logo_giet from '../assets/GIET-removebg-preview.png';
import logo_hp from '../assets/HP-removebg-preview.png';
import logo_nxtwave from '../assets/Nxtwave.webp';
import logo_coursera from '../assets/coursera.webp';
import logo_secondary from '../assets/logo-1.webp';
import logo_junior from '../assets/images.jpg';


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

  return (
    <section id="home" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '80px', alignItems: 'center', width: '100%' }}>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
            >
              <span className="badge" style={{ margin: 0 }}>Software Development Engineer</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 51, 102, 0.1)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255, 51, 102, 0.2)' }}>
                <div className="pulse-dot"></div>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#ff3366', letterSpacing: '0.05em' }}>AVAILABLE FOR HIRE</span>
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
              <span style={{ color: '#fff' }}>Building the </span>
              <span style={{ 
                background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Digital Future
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
                Hi, I'm <span className="text-gradient">Lokanath Meher</span>
              </h2>
              
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                lineHeight: 1.4
              }}>
                I build <span style={{ color: '#fff', fontWeight: 700 }}>scalable web applications</span> and <span style={{ color: '#fff', fontWeight: 700 }}>secure digital solutions</span>
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
                TECHNICAL_SPECIALIZATIONS
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
              {[
                { label: "Full-Stack Developer", icon: <Layers size={14} />, desc: "MERN Stack apps" },
                { label: "Python Developer", icon: <Code2 size={14} />, desc: "Logic & Scripts" },
                { label: "DSA Solver", icon: <Brain size={14} />, desc: "Problem Solving", isDeep: true }
              ].map((module, i) => (
                <motion.div
                  key={module.label}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2, 
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderColor: module.isDeep ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  style={{
                    flex: '1 1 0',
                    padding: '12px 14px',
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderColor: module.isDeep ? 'rgba(34, 211, 238, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>{module.icon}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#fff', letterSpacing: '0.01em' }}>{module.label}</span>
                  </div>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.4)', fontWeight: 600 }}>{module.desc}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}
            >
              <a href="/#projects" className="btn-premium btn-primary" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.85rem' }}>
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="/#contact" className="btn-premium btn-secondary" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.85rem' }}>
                Let's Collaborate
              </a>
            </motion.div>


        </div>

        <div style={{ perspective: '1200px', marginTop: '-200px' }}>
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
                  SOFTWARE DEVELOPER
                </div>

                <div 
                  onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                  style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', aspectRatio: '3/4', background: '#050816', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
                >
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 1 }}></div>
                  <img 
                    src={photo} 
                    alt="Lokanath" 
                    loading="eager"
                    decoding="async"
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
                    <Terminal size={12} className="text-gradient" /> DEV_IDENTITY
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
                    <motion.a whileHover={{ y: -4, color: '#fff' }} whileTap={{ scale: 0.9 }} href="https://github.com/lokanathmeher19" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <Github size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#0077b5' }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/lokanath-meher-a79506353/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#E4405F' }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/syntxerror_01/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <Instagram size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#25D366' }} whileTap={{ scale: 0.9 }} href="https://wa.me/919937164359?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
                      <WhatsAppIcon size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -4, color: '#fff' }} whileTap={{ scale: 0.9 }} href="https://x.com/Lokanath_meher_" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', transition: 'all 0.3s', display: 'flex', padding: '5px' }}>
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
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.linkedin.com/in/lokanath-meher-a79506353/`} 
                    alt="LinkedIn QR" 
                    loading="lazy"
                    decoding="async"
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
                    Lokanath Meher
                  </p>
                  <div style={{ 
                    color: 'rgba(255,255,255,0.4)', 
                    fontSize: '0.6rem', 
                    fontWeight: 400, 
                    letterSpacing: '0.5em',
                    textTransform: 'uppercase',
                    marginTop: '0px'
                  }}>
                    Software Developer
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




const ProjectCard = ({ p }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ 
        height: '100%',
        position: 'relative',
        borderRadius: '24px',
        background: 'rgba(10, 15, 30, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer'
      }}
    >
      {/* Dynamic Spotlight Glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.1), transparent 40%)`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.4s',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Top Image Section - Inset Framing */}
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', padding: '16px 16px 0 16px' }}>
          <div style={{ 
            width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', position: 'relative',
            border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            {p.img ? (
              <motion.img 
                src={p.img} 
                alt={p.title} 
                loading="lazy"
                decoding="async"
                animate={{ scale: isHovering ? 1.05 : 1 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', opacity: 0.5 }}>
                {p.icon}
              </div>
            )}
            
            {/* Category Badge */}
            <div style={{ 
              position: 'absolute', top: '12px', left: '12px',
              background: 'rgba(2, 6, 23, 0.7)', backdropFilter: 'blur(10px)',
              padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 10px #22d3ee' }}></span>
              <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {p.tag || p.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '12px', transition: 'color 0.3s', color: isHovering ? '#22d3ee' : '#fff' }}>
            {p.title}
          </h3>
          
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
            {p.desc}
          </p>

          {/* Tech Stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {p.tech?.map((tech, idx) => (
              <span key={idx} style={{ 
                fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', 
                background: 'rgba(255, 255, 255, 0.05)', padding: '6px 12px', 
                borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s',
                borderColor: isHovering ? 'rgba(34,211,238,0.2)' : 'rgba(255, 255, 255, 0.05)'
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
            {p.live && p.live !== '#' && (
              <motion.a 
                whileHover={{ scale: 1.02, background: 'rgba(34, 211, 238, 1)', color: '#000' }} 
                whileTap={{ scale: 0.98 }} 
                href={p.live} target="_blank" rel="noreferrer" 
                style={{ 
                  flex: 1, padding: '10px', fontSize: '0.8rem', background: 'rgba(34, 211, 238, 0.1)', 
                  color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.3)', borderRadius: '10px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.3s'
                }}
              >
                Live Demo <ArrowUpRight size={16} />
              </motion.a>
            )}
            
            <motion.a 
              whileHover={{ scale: 1.02, background: 'rgba(255, 255, 255, 0.1)' }} 
              whileTap={{ scale: 0.98 }} 
              href={p.github} target="_blank" rel="noreferrer" 
              style={{ 
                flex: p.live && p.live !== '#' ? 1 : 2, padding: '10px', fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.03)', 
                color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '10px', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.3s'
              }}
            >
              Source <Github size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
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

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Python', 'AI', 'Security'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => 
        p.category.toLowerCase().includes(filter.toLowerCase()) || 
        p.tech?.some(t => t.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <section id="projects" className="section relative" style={{ padding: '160px 24px' }}>
      {/* 🌌 High-End Engineering Aura */}
      <div style={{ 
        position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
        background: 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      <SectionHeader 
        badge="PROJECTS" 
        title={<><span className="text-gradient">Featured</span> Projects</>} 
        desc="A showcase of my best full-stack web applications and technical projects." 
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
          marginBottom: '80px',
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

      {/* ⚡ ULTRA PREMIUM GRID LAYOUT */}
      <motion.div 
        className="projects-grid" 
        style={{ 
          position: 'relative', 
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
          maxWidth: '1200px',
          margin: '0 auto 80px'
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
        style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1, marginTop: '40px' }}
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
  const categories = [
    {
      title: "Engineering Core",
      desc: "Foundational software principles, algorithmic integrity, and systems-level logic.",
      icon: <Terminal size={32} />,
      color: "#06b6d4",
      classes: "col-span-12 lg:col-span-12",
      specialEffect: "floating-logos",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 98 },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/cplusplus/cplusplus-original.svg", level: 85 },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/java/java-original.svg", level: 88 },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/javascript/javascript-original.svg", level: 92 },
        { name: "C Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/c/c-original.svg", level: 80 },
        { name: "HTML5 & CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/html5/html5-original.svg", level: 95 },
        { name: "Data Structures", icon: <Binary size={14} />, level: 90 },
        { name: "Problem Solving", icon: <Brain size={14} />, level: 94 },
        { name: "OOPS Concepts", icon: <Layers size={14} />, level: 88 },
        { name: "DBMS / SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mysql/mysql-original.svg", level: 85 },
        { name: "OS Fundamentals", icon: <Cpu size={14} />, level: 80 },
        { name: "Computer Networks", icon: <Globe size={14} />, level: 78 },
        { name: "Algorithms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 90 },
        { name: "System Design", icon: <Layers size={14} />, level: 85 }
      ]
    },
    {
      title: "MERN Full-stack",
      desc: "Full-cycle application development with modern reactive frameworks and scalable backends.",
      icon: <Globe size={32} />,
      color: "#a855f7",
      classes: "col-span-12 lg:col-span-8",
      specialEffect: "mern-bg",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg", level: 95 },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original.svg", level: 90 },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/express/express-original.svg", level: 88, filter: 'invert(1)' },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg", level: 85 },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/typescript/typescript-original.svg", level: 80 },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nextjs/nextjs-original.svg", level: 82, filter: 'invert(1)' },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/tailwindcss/tailwindcss-original.svg", level: 95 },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/graphql/graphql-plain.svg", level: 75 },
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/socketio/socketio-original.svg", level: 80, filter: 'invert(1)' },
        { name: "REST APIs", icon: <Command size={14} />, level: 95 },
        { name: "Redux / Toolkit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/redux/redux-original.svg", level: 85 },
        { name: "Storybook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/storybook/storybook-original.svg", level: 80 }
      ]
    },
    {
      title: "Security",
      desc: "Resilient protocols & offensive research.",
      icon: <ShieldCheck size={32} />,
      color: "#f97316",
      classes: "col-span-12 lg:col-span-4",
      specialEffect: "security-bg",
      skills: [
        { name: "Kali Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg", level: 85 },
        { name: "Metasploit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 78 },
        { name: "Nmap Sec", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/c/c-original.svg", level: 82 },
        { name: "Cryptography", icon: <Lock size={14} />, level: 75 }
      ]
    },
    {
      title: "DevOps",
      desc: "Automation & deployment pipelines.",
      icon: <Box size={32} />,
      color: "#ec4899",
      classes: "col-span-12 lg:col-span-6",
      specialEffect: "devops-bg",
      skills: [
        { name: "Git Workflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg", level: 92 },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/docker/docker-original.svg", level: 88 },
        { name: "Jenkins CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jenkins/jenkins-original.svg", level: 85 },
        { name: "Linux Arch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg", level: 88 }
      ]
    },
    {
      title: "Cloud",
      desc: "Serverless & scalable infrastructure.",
      icon: <Cloud size={32} />,
      color: "#06b6d4",
      classes: "col-span-12 lg:col-span-6",
      specialEffect: "mern-bg",
      skills: [
        { name: "AWS Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 82, filter: 'invert(1)' },
        { name: "GCP Services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/googlecloud/googlecloud-original.svg", level: 78 },
        { name: "Supabase DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/supabase/supabase-original.svg", level: 85 },
        { name: "Netlify Dep", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/netlify/netlify-original.svg", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative', padding: '160px 24px' }}>
      <SectionHeader 
        badge="Skills" 
        color="var(--accent-cyan)"
        title={
          <>
            <span className="text-gradient">Technical</span> Skills
          </>
        } 
        desc="An overview of my programming expertise, tools, and technical knowledge." 
      />

      <div className="studio-grid" style={{ marginTop: '100px' }}>
        {categories.map((cat, i) => (
          <PremiumSkillCard key={cat.title} cat={cat} i={i}>
            {cat.specialEffect === 'floating-logos' && <FloatingLogos />}
            {cat.specialEffect === 'mern-bg' && <MernBackground />}
            {cat.specialEffect === 'security-bg' && <SecurityBackground />}
            {cat.specialEffect === 'devops-bg' && <DevOpsBackground />}
            


            <div className="watermark-icon">{cat.icon}</div>
            
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {cat.title}
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


const Education = () => {
  const education = [
    {
      degree: "Computer Science Engineering",
      institution: "GIET Bhubaneswar (B.Tech)",
      period: "2024 — 2028",
      university: "BPUT Rourkela",
      score: 8.5,
      unit: "CGPA",
      features: ["Architecture", "Scalability", "Security"],
      color: "#22d3ee",
      icon: <Code2 size={24} />,
      logo: logo_giet
    },
    {
      degree: "Higher Secondary",
      institution: "Dadhi Baman Higher Secondary School, Bhatli",
      period: "2022 — 2024",
      board: "CHSE Odisha",
      score: 68,
      unit: "%",
      features: ["Physics", "Chemistry", "Mathematics", "IT"],
      color: "#818cf8",
      icon: <Layers size={22} />,
      logo: logo_junior
    },
    {
      degree: "Secondary Education",
      institution: "Sri Aurobindo Institute of Integral Education & Research, Bargarh",
      period: "2019 — 2022",
      board: "BSE Odisha",
      score: 78,
      unit: "%",
      features: ["Mathematics", "General Science", "Social Science", "English", "Odia", "Sanskrit"],
      color: "#60a5fa",
      icon: <Terminal size={22} />,
      logo: logo_secondary
    }
  ];

  return (
    <section id="education" className="section" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <SectionHeader 
        badge="EDUCATION" 
        color="#22d3ee"
        title={<><span className="text-gradient">Education</span> Background</>} 
        desc="My academic journey and educational qualifications." 
      />

      <div style={{ maxWidth: '900px', margin: '80px auto 0', position: 'relative' }}>
          {/* 📏 Vertical Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '20px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.2) 10%, rgba(34, 211, 238, 0.2) 90%, transparent)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
             {education.map((edu, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                   style={{ 
                     display: 'flex',
                     gap: '40px',
                     position: 'relative',
                     zIndex: 1
                   }}
                >
                   {/* 🔘 Timeline Marker (Logo) */}
                   <div style={{ 
                     flexShrink: 0, 
                     width: '56px', 
                     height: '56px', 
                     borderRadius: '50%', 
                     background: '#0a0f1c', 
                     border: `2px solid ${edu.color}`, 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     boxShadow: `0 0 20px ${edu.color}33`,
                     marginTop: '24px',
                     position: 'relative',
                     padding: '8px',
                     zIndex: 2
                   }}>
                      <img src={edu.logo} alt="Institution Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      
                      {/* Pulsing effect */}
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ position: 'absolute', inset: -2, borderRadius: '50%', border: `1px solid ${edu.color}`, pointerEvents: 'none' }}
                      />
                   </div>

                   <div className="glass-panel"
                        style={{ 
                          flex: 1,
                          padding: '40px',
                          position: 'relative',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          minHeight: '260px',
                          borderRadius: '32px',
                          background: 'rgba(255, 255, 255, 0.01)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                        whileHover={{ x: 10, background: 'rgba(255,255,255,0.025)', borderColor: `${edu.color}44` }}
                   >
                      {/* 🏛️ Logo Background Watermark */}
                      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '180px', opacity: 0.03, filter: 'grayscale(1)', pointerEvents: 'none' }}>
                         <img src={edu.logo} alt="" style={{ width: '100%', objectFit: 'contain' }} />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                         <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 950, color: '#fff', marginBottom: '6px', letterSpacing: '-0.02em' }}>{edu.degree}</h3>
                            <p style={{ color: edu.color, fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.02em', marginBottom: '12px' }}>{edu.institution}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                               {edu.features.map(feat => (
                                 <span key={feat} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 700, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>
                                   {feat}
                                 </span>
                               ))}
                            </div>
                         </div>
                         <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: '8px 18px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)' }}>{edu.period}</span>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                           <div style={{ background: `${edu.color}15`, width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: edu.color, border: `1px solid ${edu.color}33` }}>
                             {edu.icon}
                           </div>
                           <div style={{ display: 'flex', flexDirection: 'column' }}>
                             <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.3rem', lineHeight: 1 }}>{edu.score}{edu.unit}</span>
                             <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', marginTop: '4px', letterSpacing: '0.1em' }}>Academic Score</span>
                           </div>
                         </div>
                         <div style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Affiliation</span>
                            <p style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 800, marginTop: '2px' }}>{edu.board || edu.university}</p>
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
      </div>
    </section>
  );
};


const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All' },
    { id: 'GIET', label: 'GIET', logo: logo_giet },
    { id: 'COURSERA', label: 'Coursera', logo: logo_coursera },
    { id: 'NXTWAVE', label: 'NxtWave', logo: logo_nxtwave },
    { id: 'COMPANY', label: "Company's", logo: logo_hp }
  ];

  const certifications = [
    { title: "Intro to Generative AI", issuer: "Google Cloud", img: cert_google, color: "#4285F4", category: 'COMPANY' },
    { title: "Cybersecurity Essentials", issuer: "IBM", img: cert_ibm, color: "#052FAD", category: 'COMPANY' },
    { title: "Data Analytics Simulation", issuer: "Deloitte", img: cert_deloitte, color: "#86BC25", category: 'COMPANY' },
    { title: "Responsive Web Dev Mastery", issuer: "NxtWave", img: cert_nxtwave, color: "#22d3ee", category: 'NXTWAVE' },
    { title: "ICCOSET 2024 Conference", issuer: "GIET", img: cert_giet_conf, color: "#f97316", category: 'GIET' },
    { title: "Python Development Exp.", issuer: "CodTech", img: cert_codtech, color: "#3776ab", category: 'COMPANY' },
    { title: "Full Stack Development", issuer: "Simplilearn", img: cert_simplilearn, color: "#ff9900", category: 'COMPANY' },
    { title: "Python Achievement Cert", issuer: "Codec", img: cert_codec, color: "#8b5cf6", category: 'COMPANY' },
    { title: "Autonomous Vehicle Sys", issuer: "NxtWave", img: cert_autonomous, color: "#06b6d4", category: 'NXTWAVE' },
    { title: "Model Fiesta 2025", issuer: "SURAVI", img: cert_suravi, color: "#ec4899", category: 'COMPANY' },
    { title: "CAD Design Foundations", issuer: "NIELIT", img: cert_cad, color: "#10b981", category: 'COMPANY' },
    { title: "Drone Aerodynamics", issuer: "NIELIT", img: cert_drone, color: "#e11d48", category: 'COMPANY' },
    { title: "Google Gemini AI Acad.", issuer: "Google", img: cert_gemini, color: "#4285F4", category: 'COMPANY' },
    { title: "WordPress Dev Pro", issuer: "Coursera", img: cert_wordpress, color: "#21759b", category: 'COURSERA' },
    { title: "Static Website Design", issuer: "NxtWave", img: cert_static, color: "#22d3ee", category: 'NXTWAVE' },
    { title: "Python Tech Internship", issuer: "Codec", img: cert_codec_intern, color: "#8b5cf6", category: 'COMPANY' },
    { title: "Research Paper (GIET)", issuer: "NCCENGT", img: cert_nccengt, color: "#f97316", category: 'GIET' },
    { title: "Industrial Workshop", issuer: "Skill dev", img: cert_workshop, color: "#8b5cf6", category: 'COMPANY' },
    { title: "Deloitte Consulting Sim.", issuer: "Deloitte", img: cert_deloatte_2, color: "#86BC25", category: 'COMPANY' },
    { title: "Cybersecurity Awareness", issuer: "Cisco", img: cert_cyber_awareness, color: "#00bceb", category: 'COMPANY' },
    { title: "NxtWave Professional", issuer: "Mastery", img: cert_nxtwave_alt, color: "#22d3ee", category: 'NXTWAVE' },
    { title: "HackerRank Skills Gold", issuer: "HackerRank", img: cert_hackerrank, color: "#2ec866", category: 'COMPANY' },
    // { title: "IBM Big Data Expert", issuer: "IBM Cloud", img: cert_ibm_bigdata, color: "#052FAD", category: 'COMPANY' }
  ];

  const filteredCerts = activeFilter === 'ALL' 
    ? certifications 
    : certifications.filter(c => c.category === activeFilter);

  return (
    <section id="certificates" className="section" style={{ padding: '160px 24px' }}>
      <SectionHeader 
        badge="Certificates" 
        color="var(--accent-purple)"
        title={<><span className="text-gradient">Official</span> Certifications</>} 
        desc="A collection of my professional certifications and continuous learning achievements." 
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '60px', marginBottom: '40px' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            style={{
              padding: '10px 24px', borderRadius: '12px',
              border: `1px solid ${activeFilter === cat.id ? 'var(--accent-purple)' : 'rgba(255,255,255,0.08)'}`,
              background: activeFilter === cat.id ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255,255,255,0.02)',
              color: activeFilter === cat.id ? '#fff' : 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            {cat.logo && (
              <img 
                src={cat.logo} 
                alt={`${cat.label} logo`} 
                style={{ height: '20px', width: 'auto', objectFit: 'contain' }} 
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '24px' }}>
        {filteredCerts.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={() => setSelectedCert(cert)}
            style={{ 
              background: 'rgba(255,255,255,0.02)', borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <div style={{ aspectRatio: '16/10', position: 'relative' }}>
              <img src={cert.img} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 80%)' }}></div>
              
              {/* Verification & Category Badge */}
              <div style={{ 
                position: 'absolute', top: '16px', right: '16px', 
                padding: '6px 12px', borderRadius: '100px', 
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                display: 'flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                zIndex: 2
              }}>
                 <Award size={10} style={{ color: cert.color || 'var(--accent-purple)' }} />
                 <span style={{ 
                   fontSize: '0.55rem', fontWeight: 900, 
                   color: '#fff', textTransform: 'uppercase', 
                   letterSpacing: '0.1em' 
                 }}>
                   {cert.category}
                 </span>
              </div>

              <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 900, color: cert.color || 'var(--accent-purple)', letterSpacing: '0.15em' }}>{cert.issuer}</span>
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, margin: 0 }}>{cert.title}</h4>
            </div>
          </motion.div>
        ))}
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
              justifyContent: "flex-start", // Start from top to allow scrolling
              alignItems: "center",
              zIndex: 10000, 
              padding: '60px 20px 40px',
              overflowY: 'auto' // Allow vertical scrolling
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              style={{
                position: 'fixed', // Keep close button fixed while scrolling
                top: '24px', right: '24px',
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '48px', height: '48px',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10001
              }}
              onClick={() => setSelectedCert(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
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
                  maxHeight: "90vh", // Don't let it exceed viewpoint height initially
                  borderRadius: "12px",
                  boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)",
                  objectFit: "contain" // Ensure full certificate is shown
                }}
              />
              <div style={{ marginTop: '32px', textAlign: 'center', paddingBottom: '40px' }}>
                 <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>{selectedCert.title}</h2>
                 <p style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {selectedCert.issuer.toUpperCase()} • OFFICIAL CREDENTIAL
                 </p>
                 <div style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
                   <a 
                     href={selectedCert.img} 
                     download={`${selectedCert.title}.jpg`}
                     className="btn-premium btn-primary"
                     style={{ padding: '12px 24px', fontSize: '0.85rem' }}
                   >
                     Download Certificate <Download size={16} />
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



const About = () => (
  <section id="about" className="section" style={{ padding: '100px 24px' }}>
    <SectionHeader 
      badge="ABOUT ME" 
      color="var(--accent-purple)"
      title={<><span className="text-gradient">About</span> Me</>} 
      desc="A look into my journey as a developer and my technical interests." 
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
        <span className="badge">Core Identity</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 850, lineHeight: 1.2, marginBottom: '20px' }}>
          Solving Problems with <br /><span className="text-gradient">Code & Design</span>
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
          I am a <strong style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>Computer Science Engineer</strong> currently pursuing specialization in <strong style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>Advanced Software Systems</strong> at GIET Bhubaneswar. My expertise lies in architecting full-stack solutions with the MERN stack and developing high-performance Python modules. I am committed to engineering secure, scalable, and impact-driven digital experiences.
        </p>

        {/* Feature Checkpoints */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '30px' }}>
          {[
            { title: "Full-Stack Developer", desc: "MERN Stack apps", icon: <Layers size={16} />, color: "#22d3ee" },
            { title: "Python Developer", desc: "Logic & Scripts", icon: <Code2 size={16} />, color: "#22d3ee" },
            { title: "DSA Solver", desc: "Problem Solving", icon: <Brain size={16} />, color: "#22d3ee" }
          ].map((pillar, pIdx) => (
            <motion.div
              key={pIdx}
              whileHover={{ 
                scale: 1.02, 
                y: -3, 
                background: pIdx === 2 ? 'rgba(34, 211, 238, 0.05)' : 'rgba(255, 255, 255, 0.03)',
                borderColor: pIdx === 2 ? 'rgba(34, 211, 238, 0.5)' : 'rgba(255, 255, 255, 0.15)'
              }}
              style={{
                padding: '16px 18px',
                borderRadius: '16px',
                background: pIdx === 2 ? 'rgba(34, 211, 238, 0.02)' : 'rgba(255, 255, 255, 0.01)',
                WebkitBackdropFilter: 'blur(12px)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderColor: pIdx === 2 ? 'rgba(34, 211, 238, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                cursor: 'default'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: pIdx === 2 ? 'var(--accent-cyan)' : pillar.color }}>
                  {pillar.icon}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff', letterSpacing: '0.01em', lineHeight: 1.1 }}>
                  {pillar.title}
                </span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.45)', fontWeight: 600, lineHeight: 1.2 }}>
                {pillar.desc}
              </span>
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
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Available for freelance projects, open-source collaboration, and strategic consultations.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <a href="mailto:meherlokanath314@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem' }}>
                meherlokanath314@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/lokanath-meher-a79506353/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem' }}>
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
  const experience = [
    {
      role: "Backend Developer Intern (Python)",
      company: "Codec Networks",
      period: "June 2023 — Aug 2023",
      location: "Remote (India)",
      desc: "Architected scalable backend microservices and automated data processing pipelines using Python and the Flask framework.",
      tech: ["Python", "Flask", "SQL", "Automation", "Security"],
      points: [
        "Automated large-scale data processing pipelines, reducing operational latency by 30% and significantly enhancing throughput.",
        "Architected scalable backend microservices using the Flask framework, implementing complex relational schemas and ensuring data integrity.",
        "Enforced zero-trust authentication protocols and optimized internal API response times, improving overall system security and user experience."
      ],
      color: "var(--accent-cyan)",
      icon: <Terminal size={24} />
    }
  ];

  const coreSkills = ["MERN Stack", "Python Automation", "Algorithms", "System Architecture"];

  return (
    <section id="resume" className="section" style={{ padding: '120px 24px', position: 'relative' }}>
      {/* 🌌 Background Elements */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(34, 211, 238, 0.03) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
      
      <SectionHeader 
        badge="RESUME" 
        color="var(--accent-cyan)"
        title={<><span className="text-gradient">Professional</span> Resume</>} 
        desc="A summary of my academic achievements, technical skills, and industry experience." 
      />
      
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* 💼 Experience Card */}
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ 
                padding: '48px', 
                borderRadius: '32px',
                background: 'rgba(255, 255, 255, 0.015)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{ y: -8, background: 'rgba(255, 255, 255, 0.025)', borderColor: 'rgba(34, 211, 238, 0.2)' }}
            >
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', 
                background: `linear-gradient(to bottom, ${exp.color}, transparent)` 
              }} />
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '32px' }}>
                 <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${exp.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: exp.color, border: `1px solid ${exp.color}22` }}>
                    {exp.icon}
                 </div>
                 <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: '4px', letterSpacing: '-0.02em' }}>{exp.role}</h3>
                    <p style={{ color: exp.color, fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.08em' }}>{exp.company.toUpperCase()}</p>
                 </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '24px', fontWeight: 400 }}>
                {exp.desc}
              </p>

              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: exp.color, marginTop: '4px' }}>•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                {exp.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {t}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 600 }}>
                    <MapPin size={16} style={{ color: exp.color }} /> {exp.location}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)', width: 'fit-content' }}>{exp.period}</span>
                </div>
                
                <motion.a 
                  href={cert_codec_intern}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    padding: '10px 20px', 
                    borderRadius: '12px', 
                    fontSize: '0.8rem', 
                    fontWeight: 700, 
                    color: '#fff', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  View Certificate <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}

          {/* 📄 Resume CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ 
              padding: '48px', 
              borderRadius: '32px',
              background: 'linear-gradient(145deg, rgba(34, 211, 238, 0.05), rgba(139, 92, 246, 0.05))',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            whileHover={{ y: -8, background: 'linear-gradient(145deg, rgba(34, 211, 238, 0.08), rgba(139, 92, 246, 0.08))', borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <div style={{ 
              width: '72px', height: '72px', borderRadius: '22px', 
              background: 'rgba(255,255,255,0.04)', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', marginBottom: '28px',
              color: 'var(--accent-purple)', border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
            }}>
              <Award size={32} />
            </div>
            
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Download My CV</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px', opacity: 0.8 }}>
              For a comprehensive overview of my technical architecture, industry experience, and academic background, download the complete professional profile.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
              <Link to="/resume" className="btn-premium btn-secondary" style={{ flex: 1, justifyContent: 'center', height: '56px', borderRadius: '14px', fontSize: '0.9rem', fontWeight: 800 }}>
                View Online
              </Link>
              <a href="Lokanath_Meher_Resume.pdf" download className="btn-premium btn-primary" style={{ flex: 1, justifyContent: 'center', height: '56px', borderRadius: '14px', fontSize: '0.9rem', fontWeight: 800 }}>
                Download PDF <Download size={18} />
              </a>
            </div>
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
            { icon: <Github size={22} />, link: "https://github.com/lokanathmeher19" },
            { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/lokanath-meher-a79506353/" },
            { icon: <Instagram size={22} />, link: "https://www.instagram.com/syntxerror_01/" },
            { icon: <XIcon size={20} />, link: "https://x.com/Lokanath_meher_" }
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
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>ARCHIVE_STATUS: PRODUCTION_READY</span>
          </div>
          <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.05)' }}></div>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>DEPLOYMENT_V: 2.4.0_STABLE</span>
        </div>

         <p style={{ 
           color: 'rgba(255,255,255,0.3)', 
           fontSize: '0.75rem', 
           letterSpacing: '0.4em',
           fontWeight: 900,
           textTransform: 'uppercase'
         }}>
           Designed & Engineered by Lokanath Meher // © {new Date().getFullYear()}
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
