import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Maximize2, X, Download, ExternalLink } from "lucide-react";

// 🖼️ Import Certificate Images
import nxtwave_responsive from "../assets/certs/nxtwave_responsive.jpg";
import nxtwave_autonomous from "../assets/certs/nxtwave_autonomous.jpg";
import nxtwave_static from "../assets/certs/nxtwave_static.jpg";
import coursera_wordpress from "../assets/certs/coursera_wordpress.jpg";
import coursera_genai from "../assets/certs/coursera_genai.jpg";
import coursera_cybersecurity from "../assets/certs/coursera_cybersecurity.jpg";
import coursera_gemini from "../assets/certs/coursera_gemini.jpg";
import giet_cad_bootcamp from "../assets/certs/giet_cad_bootcamp.jpg";
import giet_suravi_model from "../assets/certs/giet_suravi_model.jpg";
import giet_nccengt_paper from "../assets/certs/giet_nccengt_paper.jpg";
import giet_drone_bootcamp from "../assets/certs/giet_drone_bootcamp.jpg";
import giet_iccoset_conf from "../assets/certs/giet_iccoset_conf.jpg";
import codtech_python from "../assets/certs/codtech_python.jpg";
import codec_python_achievement from "../assets/certs/codec_python_achievement.jpg";
import codec_python_internship from "../assets/certs/codec_python_internship.jpg";
import simplilearn_software_dev from "../assets/certs/simplilearn_software_dev.jpg";
import deloitte_data_analytics from "../assets/certs/deloitte_data_analytics.png";
import workshop from "../assets/certs/workshop.png";
import deloatte_misspelled from "../assets/certs/Deloatte.jpg";
import cyber_awareness from "../assets/certs/Introduction to Cybersecurity Awareness_page-0001.jpg";
import nxtwave_alt from "../assets/certs/Nxtwave.jpeg";

const CERTS = {
  nxtwave: [
    { title: "Build Your Own Responsive Website", org: "NxtWave", date: "2025", img: nxtwave_responsive },
    { title: "Autonomous Vehicles Masterclass", org: "NxtWave", date: "2025", img: nxtwave_autonomous },
    { title: "Build Your Own Static Website", org: "NxtWave", date: "2025", img: nxtwave_static },
    { title: "Mastery Certification", org: "NxtWave", date: "2025", img: nxtwave_alt },
  ],
  coursera: [
    { title: "Build a free website with WordPress", org: "Coursera", date: "2025", img: coursera_wordpress },
    { title: "Introduction to Generative AI", org: "Google Cloud", date: "2025", img: coursera_genai },
    { title: "Introduction to Cybersecurity Essentials", org: "IBM", date: "2025", img: coursera_cybersecurity },
    { title: "Introduction to Gemini", org: "Google Cloud", date: "2025", img: coursera_gemini },
    { title: "Cybersecurity Awareness", org: "Cisco", date: "2025", img: cyber_awareness },
  ],
  giet: [
    { title: "CAD Designs to 3D Printing", org: "NIELIT & GIET", date: "2025", img: giet_cad_bootcamp },
    { title: "Model Fiesta 'SURAVI-2K25'", org: "GIET", date: "2025", img: giet_suravi_model },
    { title: "Paper Presentation NCCENGT-2025", org: "GIET", date: "2025", img: giet_nccengt_paper },
    { title: "Drone Aeromechanics Bootcamp", org: "NIELIT", date: "2025", img: giet_drone_bootcamp },
    { title: "International Conf ICCOSET-2024", org: "GIET", date: "2024", img: giet_iccoset_conf },
  ],
  other: [
    { title: "Python Programming Internship", org: "CodTech", date: "2025", img: codtech_python },
    { title: "Python Developer (Achievement)", org: "Codec Tech", date: "2025", img: codec_python_achievement },
    { title: "Python Developer Internship", org: "Codec Tech", date: "2025", img: codec_python_internship },
    { title: "What is Software Development?", org: "Simplilearn", date: "2025", img: simplilearn_software_dev },
    { title: "Data Analytics Simulation", org: "Deloitte", date: "2025", img: deloitte_data_analytics },
    { title: "Strategic Global Simulation", org: "Deloitte", date: "2025", img: deloatte_misspelled },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("nxtwave");
  const [selectedCert, setSelectedCert] = useState(null);

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

  return (
    <section className="section" style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>

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
            {t === "giet" ? "GIET UNIVERSITY" : t}
          </button>
        ))}
      </div>

      {/* 📜 Themed Certificates Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "24px",
        position: 'relative',
        zIndex: 1
      }}>
        <AnimatePresence mode="wait">
          {CERTS[tab].map((c, idx) => (
            <motion.div
              key={c.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel"
              style={{
                borderRadius: "24px",
                padding: "12px",
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <div style={{ 
                position: 'relative', 
                height: '180px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.4)',
                marginBottom: '20px'
              }}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.8), transparent)' }}></div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(c)}
                  style={{
                    position: 'absolute', top: '12px', right: '12px',
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Maximize2 size={16} />
                </motion.button>
              </div>

              <div style={{ padding: '0 12px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.4 }}>{c.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                   <BookOpen size={12} /> {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                  <motion.button
                    whileHover={{ background: 'rgba(255,255,255,0.06)' }}
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                      borderRadius: "12px",
                      padding: "10px",
                      cursor: "pointer",
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                    }}
                  >
                    PREVIEW DOCUMENT <ExternalLink size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(2, 6, 23, 0.98)",
              WebkitBackdropFilter: "blur(20px)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Start from top to allow scrolling
              alignItems: "center",
              zIndex: 10000,
              padding: '60px 20px 40px', // More top padding for the X button
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
                   {selectedCert.org.toUpperCase()} • ACQUIRED: {selectedCert.date}
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
}
