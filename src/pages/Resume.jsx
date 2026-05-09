import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Download, MapPin, Mail, Phone, ChevronLeft, Award, 
  Code2, Terminal, CheckCircle2, Briefcase, 
  Star, BookOpen, Smartphone, Globe, Shield,
  Cpu, GraduationCap, Zap, Link as LinkIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/portfolioData";

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GIET University, Bhubaneswar",
      period: "2024 — 2028",
      grade: "8.5 CGPA (Current)",
      color: "var(--accent-cyan)",
      icon: <GraduationCap size={20} />,
      highlights: ["Data Structures & Algorithms", "Full Stack Development", "Operating Systems", "DBMS Architecture", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Dadhi Baman Higher Secondary School, Bhatli",
      period: "2022 — 2024",
      grade: "68% (Science)",
      color: "var(--accent-purple)",
      icon: <BookOpen size={20} />,
      highlights: ["Mathematics", "Physics", "Chemistry", "Information Technology", "Analytical Thinking"]
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Sri Aurobindo Institute of Integral Education & Research, Bargarh",
      period: "2019 — 2022",
      grade: "78% (BSE)",
      color: "var(--accent-blue)",
      icon: <Terminal size={20} />,
      highlights: ["Mathematics", "General Science", "Social Science", "English", "Odia", "Sanskrit"]
    }
  ];

  const experience = [
    {
      role: "Python Programming Intern",
      company: "Codec Networks",
      period: "June 2023 — August 2023",
      location: "New Delhi, India (Remote)",
      desc: [
        "Architected and optimized Python-driven automation scripts, reducing manual processing time by approximately 30%.",
        "Developed robust backend modules using Flask framework and integrated complex SQL database schemas.",
        "Collaborated in an Agile environment to debug production issues and enhance system reliability.",
        "Implemented secure authentication protocols and optimized API response times for internal tools."
      ]
    }
  ];

  const skillGroups = [
    {
      title: "Core Programming",
      skills: ["Python (Advanced)", "JavaScript (ES6+)", "C++", "Java", "C Language"]
    },
    {
      title: "Web Architecture",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Engineering Tools",
      skills: ["Git & GitHub", "Docker", "Linux (Kali/Ubuntu)", "DBMS/SQL", "Postman", "Vite"]
    },
    {
      title: "Domain Knowledge",
      skills: ["DSA", "System Design", "Cybersecurity Basics", "Agile Methodology", "Problem Solving"]
    }
  ];

  const achievements = [
    { title: "NxtWave Intensive Participant", detail: "Focused on MERN Stack excellence and industry-ready development." },
    { title: "ICCOSET 2024 Contributor", detail: "Actively participated in International Conference on Emerging Technologies." },
    { title: "Open Source Contributor", detail: "Regularly contributing to personal and community projects on GitHub." }
  ];

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px', position: 'relative' }}>
      <div className="app-bg"></div>
      
      {/* Background Orbs */}
      <div className="glow-orb orb-1" style={{ top: '10%', left: '5%', opacity: 0.1 }}></div>
      <div className="glow-orb orb-2" style={{ bottom: '10%', right: '5%', opacity: 0.1 }}></div>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 24px' }}>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '48px' }}
        >
          <Link to="/" className="btn-premium btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ChevronLeft size={18} /> Return to Portfolio
          </Link>
        </motion.div>
        
        {/* 👤 Professional Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel" 
          style={{ padding: '60px 40px', marginBottom: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px' }}>Software Development Engineer</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Lokanath <span className="text-gradient">Meher</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
               <p style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>B.Tech CSE Undergraduate</p>
               <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
               <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>Full-Stack Developer</p>
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px', 
            borderTop: '1px solid rgba(255,255,255,0.05)', 
            paddingTop: '40px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(34, 211, 238, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={18} style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</p>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>meherlokanath314@gmail.com</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={18} style={{ color: 'var(--accent-purple)' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Contact</p>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>+91 9937164359</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={18} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Location</p>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Bhubaneswar, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 📄 Professional Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel" 
          style={{ padding: '40px', marginBottom: '40px', borderRadius: '24px', border: '1px solid rgba(34, 211, 238, 0.1)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
             <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Star size={24} />
             </div>
             <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>Professional Summary</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400 }}>
            I am a <span style={{ color: '#fff', fontWeight: 600 }}>Computer Science Engineering student</span> with a strong focus on full-stack web development. I have experience building scalable applications using the <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>MERN stack</span> and writing Python automation scripts. I am a quick learner, a collaborative team player, and I strive to write clean, secure, and maintainable code.
          </p>
        </motion.div>

        {/* 📄 Action Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '20px', marginBottom: '80px', flexWrap: 'wrap' }}
        >
          <button 
            onClick={() => setShowPDF(!showPDF)} 
            className="btn-premium btn-secondary" 
            style={{ flex: 1, justifyContent: 'center', minWidth: '240px', height: '64px', borderRadius: '16px', fontSize: '1rem', fontWeight: 700 }}
          >
            {showPDF ? "Close PDF Preview" : "View Resume PDF"}
          </button>
          <a 
            href="Lokanath_Meher_Resume.pdf" 
            download 
            className="btn-premium btn-primary" 
            style={{ flex: 1, justifyContent: 'center', minWidth: '240px', height: '64px', borderRadius: '16px', fontSize: '1rem', fontWeight: 700 }}
          >
            Download Full Resume <Download size={18} />
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
          
          {/* Left Side: Experience & Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* 💼 Experience */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <div style={{ color: 'var(--accent-purple)' }}><Briefcase size={28} /></div>
                 <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Work Experience</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {experience.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '32px', borderRadius: '24px', border: '1px solid rgba(139, 92, 246, 0.1)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                      <div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>{exp.role}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                           <p style={{ color: 'var(--accent-purple)', fontWeight: 700, fontSize: '1.1rem' }}>{exp.company}</p>
                           <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                           <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.location}</p>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.05)', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>{exp.period}</span>
                    </div>
                    <ul style={{ paddingLeft: '4px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {exp.desc.map((bullet, i) => (
                        <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, display: 'flex', gap: '12px' }}>
                          <span style={{ color: 'var(--accent-purple)', flexShrink: 0, marginTop: '6px' }}><Zap size={14} fill="currentColor" /></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 🎓 Education */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <div style={{ color: 'var(--accent-cyan)' }}><Award size={28} /></div>
                 <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Academic History</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '32px', borderRadius: '24px' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', maxWidth: '350px' }}>{edu.degree}</h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>{edu.period}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>{edu.institution}</p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                       <div style={{ background: `${edu.color}15`, padding: '10px 20px', borderRadius: '12px', border: `1px solid ${edu.color}30` }}>
                         <span style={{ color: edu.color, fontWeight: 900, fontSize: '1rem' }}>{edu.grade}</span>
                       </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {edu.highlights.map(h => (
                        <span key={h} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>{h}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side: Skills & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* 💻 Skills Matrix */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <div style={{ color: 'var(--accent-blue)' }}><Cpu size={28} /></div>
                 <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Technical Stack</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {skillGroups.map((group, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '24px', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.1)' }}
                  >
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 950, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                       <div style={{ width: '12px', height: '2px', background: 'var(--accent-blue)' }}></div>
                       {group.title}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {group.skills.map(skill => (
                        <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <CheckCircle2 size={14} style={{ color: 'var(--accent-blue)' }} />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 🏆 Honors & Distinctions */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <div style={{ color: '#fbbf24' }}><Star size={28} /></div>
                 <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Achievements</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {achievements.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="glass-panel"
                    style={{ padding: '24px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', flexShrink: 0 }}>
                       <Award size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 🚀 Projects Spotlight */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <div style={{ color: '#f43f5e' }}><Terminal size={28} /></div>
                 <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Top Projects</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {PROJECTS.slice(0, 3).map((p, idx) => (
                  <motion.div 
                    key={idx}
                    className="glass-panel"
                    whileHover={{ scale: 1.02 }}
                    style={{ padding: '24px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: `${p.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, flexShrink: 0 }}>
                       <Code2 size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{p.title}</h4>
                        <LinkIcon size={14} style={{ opacity: 0.5 }} />
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* 📋 PDF Viewer Container */}
        <AnimatePresence>
          {showPDF && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{ marginTop: '80px' }}
            >
              <div className="glass-panel" style={{ padding: '24px', borderRadius: '32px', background: 'rgba(5, 8, 22, 0.95)', border: '1px solid rgba(255,255,255,0.1)' }}>
                 <div style={{ width: '100%', height: '1000px', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
                 <object
                    data="Lokanath_Meher_Resume.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                 >
                    <div style={{ padding: '40px', textAlign: 'center', color: '#000' }}>
                      <p style={{ marginBottom: '20px', fontWeight: 600 }}>PDF preview is not supported by your browser.</p>
                      <a href="Lokanath_Meher_Resume.pdf" className="btn-premium btn-primary" download>Download PDF Instead</a>
                    </div>
                 </object>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
