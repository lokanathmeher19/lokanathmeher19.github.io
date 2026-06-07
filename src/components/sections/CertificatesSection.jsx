import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';
// 🎓 Certificate Imports
import cert_google from '../../assets/certs/coursera_genai.jpg';
import cert_ibm from '../../assets/certs/coursera_cybersecurity.jpg';
import cert_deloitte from '../../assets/certs/deloitte_data_analytics.png';
import cert_nxtwave from '../../assets/certs/nxtwave_responsive.jpg';
import cert_giet_conf from '../../assets/certs/giet_iccoset_conf.jpg';
import cert_codtech from '../../assets/certs/codtech_python.jpg';
import cert_codec from '../../assets/certs/codec_python_achievement.jpg';
import cert_simplilearn from '../../assets/certs/simplilearn_software_dev.jpg';
import cert_suravi from '../../assets/certs/giet_suravi_model.jpg';
import cert_autonomous from '../../assets/certs/nxtwave_autonomous.jpg';
import cert_cad from '../../assets/certs/giet_cad_bootcamp.jpg';
import cert_drone from '../../assets/certs/giet_drone_bootcamp.jpg';
import cert_gemini from '../../assets/certs/coursera_gemini.jpg';
import cert_wordpress from '../../assets/certs/coursera_wordpress.jpg';
import cert_static from '../../assets/certs/nxtwave_static.jpg';
import cert_codec_intern from '../../assets/certs/codec_python_internship.jpg';
import cert_nccengt from '../../assets/certs/giet_nccengt_paper.jpg';
import cert_workshop from '../../assets/certs/workshop.png';
import cert_deloatte_2 from '../../assets/certs/Deloatte.jpg';
import cert_cyber_awareness from '../../assets/certs/Introduction to Cybersecurity Awareness_page-0001.jpg';
import cert_nxtwave_alt from '../../assets/certs/Nxtwave.jpeg';
import cert_hackerrank from '../../assets/certs/Hackerrank.png';
// import cert_ibm_bigdata from '../../assets/certs/IBM BIg Data_page-0001.jpg';// 🏷️ Category Logos
import logo_giet from '../../assets/GIET-removebg-preview.png';
import logo_hp from '../../assets/HP-removebg-preview.png';
import logo_nxtwave from '../../assets/Nxtwave.webp';
import logo_coursera from '../../assets/coursera.webp';
import logo_secondary from '../../assets/logo-1.webp';
import SectionHeader from "./SectionHeader";

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
    { title: "HackerRank Skills Gold", issuer: "HackerRank", img: cert_hackerrank, color: "#2ec866", category: 'COMPANY' }
  ];

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
export default Certificates;
