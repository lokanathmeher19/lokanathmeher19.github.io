import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Cpu, Mail, Github, Linkedin, Code, Code2, Terminal, Database, Shield, Send, Download, ArrowUpRight, ShieldCheck, Smartphone, Layers, Globe, Server, Box, Hexagon, Command, Binary, Braces, Orbit, Atom, Wind, BoxSelect, Brain, Lightbulb, Share2, Wrench, Search, CheckCircle2, MessageSquare, Zap, Cloud, Trophy, Award, Instagram, Lock, GraduationCap, Maximize2, Briefcase, X
} from 'lucide-react';
import { PROJECTS, INFO_CARDS } from '../../data/portfolioData';

import SectionHeader from "./SectionHeader";

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
export default Skills;
