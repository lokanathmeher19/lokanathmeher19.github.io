import React from "react";
import { motion } from "framer-motion";
import { Laptop, Shield, Globe } from "lucide-react";

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
    <div className="content-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ height: '1px', width: '40px', background: 'rgba(139, 92, 246, 0.3)' }}></div>
              <h4 style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.75rem', fontWeight: 700, margin: 0 }}>
                About Me
              </h4>
              <div style={{ height: '1px', width: '40px', background: 'rgba(139, 92, 246, 0.3)' }}></div>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}
            >
              <span style={{ color: '#3b82f6', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Core</span> Identity
            </motion.h2>
            
            <motion.p variants={itemVariants} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Mapping the technical frameworks and design philosophies behind the creator.
            </motion.p>
          </div>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left: Image Card */}
            <motion.div variants={itemVariants} style={{ height: '100%' }}>
              <div style={{ 
                background: '#0a0f1d', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '24px', 
                padding: '20px',
                height: '100%',
                display: 'flex'
              }}>
                <div style={{ 
                  background: '#54a6bc', /* Light blue background like in the image */
                  borderRadius: '16px', 
                  width: '100%', 
                  height: '100%',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="/my photo.png" 
                    alt="Lokanath Meher" 
                    loading="lazy"
                    decoding="async"
                    style={{ 
                      width: '80%', 
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))'
                    }} 
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Text & Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <motion.h4 
                variants={itemVariants}
                style={{ color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '16px' }}
              >
                Academic Profile
              </motion.h4>
              
              <motion.h3 
                variants={itemVariants}
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2 }}
              >
                Building Secure,<br/>
                <span className="text-gradient">Intelligent Systems</span>
              </motion.h3>
              
              <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '40px' }}>
                I am an <span style={{ color: '#22d3ee', fontWeight: 600 }}>Engineer & Technologist</span> specializing in Computer Science at GIET University. My engineering philosophy revolves around writing high-performance, well-architected code that prioritizes scalability, security, and strict defensive integrations.
              </motion.p>

              {/* Grid of 3 Cards */}
              <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px' }}>
                
                <div className="glass-panel" style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <div style={{ marginBottom: '16px', color: '#22d3ee' }}>
                    <Laptop size={32} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>Engineering</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, opacity: 0.8, margin: 0 }}>Data Structures,</p>
                </div>

                <div className="glass-panel" style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <div style={{ marginBottom: '16px', color: '#3b82f6' }}>
                    <Shield size={32} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>Security</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, opacity: 0.8, margin: 0 }}>Threat parsing, zero-trust</p>
                </div>

                <div className="glass-panel" style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <div style={{ marginBottom: '16px', color: '#22d3ee' }}>
                    <Globe size={32} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>Architecture</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, opacity: 0.8, margin: 0 }}>MERN stack ecosystems,</p>
                </div>

              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
