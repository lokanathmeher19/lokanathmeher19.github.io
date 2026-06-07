import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

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
      role: "Python Programming Intern",
      company: "Codec Networks",
      period: "June 2023 — Aug 2023",
      location: "Remote (India)",
      desc: "Architected automated Python scripts for high-volume data processing and engineered backend modules using the Flask framework. Collaborated on production-level code optimization and security protocols.",
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
        badge="Career Track" 
        color="var(--accent-cyan)"
        title={<><span className="text-gradient">Professional</span> Trajectory</>} 
        desc="A summary of industrial engagement and engineering milestones." 
      />
      
      <div style={{ maxWidth: '1100px', margin: '80px auto 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* 💼 Industrial Experience Card */}
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
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
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
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '32px', fontWeight: 400 }}>
                {exp.desc}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <MapPin size={16} style={{ color: exp.color }} /> {exp.location}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>{exp.period}</span>
              </div>
            </motion.div>
          ))}

          {/* 📄 Executive Call to Action Card */}
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
              <Briefcase size={32} />
            </div>
            
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Detailed Credentials</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '40px', maxWidth: '320px' }}>
              Examine my full engineering portfolio, including academic records and industry certifications.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
              <Link to="/resume" className="btn-premium btn-secondary" style={{ flex: 1, justifyContent: 'center', height: '56px', borderRadius: '14px', fontSize: '0.9rem', fontWeight: 800 }}>
                View Full CV
              </Link>
              <a href="Lokanath_Meher_Resume.pdf" download className="btn-premium btn-primary" style={{ flex: 1, justifyContent: 'center', height: '56px', borderRadius: '14px', fontSize: '0.9rem', fontWeight: 800 }}>
                Download PDF <Download size={18} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
