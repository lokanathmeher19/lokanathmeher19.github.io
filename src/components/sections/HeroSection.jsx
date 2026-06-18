import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';
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
import photo from '../../assets/my photo.png';

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
              <span className="badge" style={{ margin: 0 }}>Software Developer</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(34, 211, 238, 0.1)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(34, 211, 238, 0.2)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 10px #22d3ee' }}></div>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#22d3ee', letterSpacing: '0.05em' }}>AVAILABLE FOR WORK</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="hero-title"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.03em', 
                lineHeight: 1.1,
                marginBottom: '24px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Hi, I'm <br/>
              <span style={{ 
                background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Lokanath Meher
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              style={{ 
                fontSize: '1.15rem', 
                color: 'var(--text-secondary)',
                fontWeight: 400,
                lineHeight: 1.6,
                marginBottom: '48px',
                maxWidth: '600px'
              }}
            >
              A passionate <span style={{ color: '#fff', fontWeight: 600 }}>Software Developer</span> specializing in building exceptional, high-quality websites and applications. I love turning complex problems into simple, beautiful, and intuitive designs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}
            >
              <a href="#projects" className="btn-premium btn-primary" style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem' }}>
                View My Work <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="btn-premium btn-secondary" style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem' }}>
                Contact Me
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
export default Hero;
