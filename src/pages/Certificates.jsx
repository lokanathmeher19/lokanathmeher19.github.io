import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { BookOpen, Award, Maximize2, X, Download, ExternalLink, ArrowUpRight } from "lucide-react";

import { CERTIFICATES } from "../data/portfolioData";

const CERTS = {
  nxtwave: CERTIFICATES.filter(c => c.tab === 'nxtwave'),
  coursera: CERTIFICATES.filter(c => c.tab === 'coursera'),
  giet: CERTIFICATES.filter(c => c.tab === 'giet'),
  other: CERTIFICATES.filter(c => c.tab === 'other'),
};

const getCertColor = (org) => {
  const matchingCert = CERTIFICATES.find(c => c.org === org || c.issuer === org);
  if (matchingCert && matchingCert.color) return matchingCert.color;
  const o = org.toLowerCase();
  if (o.includes('nxtwave')) return '#22d3ee';
  if (o.includes('coursera') || o.includes('google') || o.includes('ibm') || o.includes('cisco')) return '#4285F4';
  if (o.includes('giet') || o.includes('nielit') || o.includes('suravi')) return '#f97316';
  if (o.includes('deloitte')) return '#86BC25';
  return '#8b5cf6';
};

const PreviewCard = ({ cert }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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

  const certColor = getCertColor(cert.org);

  return (
    <div style={{ perspective: 1000, width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '90%',
          background: `radial-gradient(circle, ${certColor}25 0%, transparent 70%)`,
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
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'border-color 0.3s ease'
        }}
        whileHover={{
          borderColor: `${certColor}44`
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
            <span style={{ fontSize: '0.65rem', fontWeight: 900, color: certColor, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cert.org}</span>
          </div>
        </div>

        <div style={{ width: '100%', marginTop: '20px', transform: 'translateZ(30px)', textAlign: 'center', padding: '0 8px' }}>
          <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 800, margin: '0 0 8px 0', lineHeight: '1.4' }}>{cert.title}</h4>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
            <Award size={10} style={{ color: certColor }} />
            CREDENTIAL • {cert.date}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Certificates() {
  const [tab, setTab] = useState("nxtwave");
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCert, setActiveCert] = useState(null);

  const getTabIcon = (t) => {
    switch (t) {
      case "nxtwave":
        return <img src="/gallery/nxtwave_logo.png" alt="NxtWave" style={{ width: 16, height: 16, objectFit: "contain" }} />;
      case "giet":
        return <img src="/gallery/giet_logo.jpg" alt="GIET" style={{ width: 16, height: 16, objectFit: "cover", borderRadius: "50%" }} />;
      case "coursera":
        return <img src="/gallery/coursera_logo.png" alt="Coursera" style={{ width: 16, height: 16, objectFit: "contain", borderRadius: "50%" }} />;
      case "other":
        return <Award size={14} />;
      default:
        return null;
    }
  };

  // Sync activeCert with filter change
  useEffect(() => {
    if (CERTS[tab] && CERTS[tab].length > 0) {
      setActiveCert(CERTS[tab][0]);
    } else {
      setActiveCert(null);
    }
  }, [tab]);

  return (
    <section className="section" style={{ minHeight: '100vh', position: 'relative', padding: '120px 24px', overflow: 'hidden' }}>
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <span className="badge">Accreditation</span>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>Professional Certifications</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Documenting a continuous commitment to engineering excellence and specialized technical research.
        </p>
      </motion.div>

      {/* 🧭 Archival Navigation Tabs */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "12px", 
        marginBottom: "48px", 
        flexWrap: "wrap",
        position: 'relative',
        zIndex: 10
      }}>
        {["nxtwave", "coursera", "giet", "other"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`btn-premium ${tab === t ? "btn-primary" : "btn-secondary"}`}
            style={{
              padding: "10px 24px",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              background: tab === t ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.02)',
              color: tab === t ? '#000' : 'rgba(255,255,255,0.5)',
              border: tab === t ? 'none' : '1px solid rgba(255,255,255,0.08)',
              gap: '10px'
            }}
          >
            {getTabIcon(t)}
            {t === "giet" ? "GIET BHUBANESWAR" : t}
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
            {CERTS[tab].map((cert, i) => {
              const isSelected = activeCert === cert;
              const certColor = getCertColor(cert.org);
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
                      ? `1px solid ${certColor}33` 
                      : '1px solid rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: isSelected ? `0 10px 30px ${certColor}08` : 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                >
                  <div style={{
                    width: '3px',
                    height: '24px',
                    borderRadius: '2px',
                    background: isSelected ? certColor : 'rgba(255,255,255,0.1)',
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
                      <span style={{ color: certColor, fontWeight: 700 }}>{cert.org}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <ArrowUpRight size={16} style={{ 
                    color: isSelected ? certColor : 'rgba(255,255,255,0.2)',
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
          {CERTS[tab].map((cert, i) => {
            const certColor = getCertColor(cert.org);
            return (
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
                    <span style={{ fontSize: '0.55rem', fontWeight: 900, color: certColor, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cert.org}</span>
                  </div>
                </div>
                
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.4 }}>{cert.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontWeight: 800 }}>{cert.date}</span>
                    <div style={{ color: certColor, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                      VIEW <Maximize2 size={10} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
                background: 'rgba(255, 255, 255, 0.06)', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
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
                 <p style={{ color: getCertColor(selectedCert.org) || 'var(--text-secondary)', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.8rem' }}>
                    {selectedCert.org.toUpperCase()} • OFFICIAL CREDENTIAL
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
}
