import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="content-section">
      <div className="container" style={{ maxWidth: '1100px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '80px', alignItems: 'flex-start' }}>
            {/* The Narrative */}
            <div>
              <motion.h4 
                variants={itemVariants}
                style={{ color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '20px' }}
              >
                The Manifesto
              </motion.h4>
              <motion.h2 
                variants={itemVariants}
                className="title-gradient"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', marginBottom: '40px', fontWeight: 800 }}
              >
                Driven by Security,<br />Defined by Code.
              </motion.h2>
              
              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: 1.7, opacity: 0.9 }}>
                  I’m <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Lokanath Meher</span>. Currently an undergraduate pushing the boundaries of what's possible in the intersection of Software Design and Cyber Espionage Defense.
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  My methodology leverages the mathematical precision of the MERN stack with the strategic foresight of an security analyst. I don't just build applications; I engineer ecosystems that are secure by design and beautiful by intent.
                </p>
              </motion.div>
            </div>

            {/* Academic History */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               <motion.div variants={itemVariants} style={{ marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>Academic Trajectory</h3>
               </motion.div>
               
               <EducationCard 
                icon={<GraduationCap size={24} />}
                title="B.Tech Computer Science"
                institution="Gandhi Institute of Excellent Technocrats"
                location="Bhubaneswar"
                period="2024 – 2028"
                detail="Architecture & Intelligence focus"
              />
              <EducationCard 
                logo="/dadhibaman-logo.jpg"
                title="Higher Secondary"
                institution="Dadhibaman Higher School"
                location="Bhatli"
                period="2022 – 2024"
                detail="CHSE | Strategic Sciences"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function EducationCard({ icon, logo, logoScale, title, institution, location, period, detail }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="glass-panel" 
      style={{ display: 'flex', gap: '24px', padding: '32px', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}
    >
      <div style={{ 
        width: '56px', height: '56px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)',
        border: '1px solid rgba(255,255,255,0.08)', flexShrink: 0,
        overflow: 'hidden', padding: logo ? '8px' : '0'
      }}>
        {logo ? (
          <img 
            src={logo} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              transform: `scale(${logoScale || 1})`,
              filter: (typeof logo === 'string' && (logo.includes('.jpg') || logo.includes('.jpeg'))) ? 'invert(1) brightness(1.2)' : 'none',
              mixBlendMode: (typeof logo === 'string' && (logo.includes('.jpg') || logo.includes('.jpeg'))) ? 'screen' : 'normal'
            }} 
          />
        ) : icon}
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '1.15rem', marginBottom: '4px', fontFamily: 'var(--font-heading)', color: '#fff' }}>{title}</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
           <span style={{ fontWeight: 600, color: '#fff' }}>{institution}</span>
           <div style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}></div>
           <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {location}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 700 }}>{period}</span>
           <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', opacity: 0.6 }}>{detail}</span>
        </div>
      </div>
    </motion.div>
  )
}
