import React from "react";
import { motion } from "framer-motion";
import {
  Binary, Brain, Layers, Code, Database, Globe, Cpu, Hexagon
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Engineering",
    icon: <Code size={24} />,
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ]
  },
  {
    title: "Intelligence",
    icon: <Brain size={24} />,
    items: [
      { name: "Machine Learning", icon: <Brain size={18} /> },
      { name: "Deep Learning", icon: <Layers size={18} /> },
      { name: "Computer Vision", icon: <Hexagon size={18} /> },
      { name: "Data Structures", icon: <Binary size={18} /> },
    ]
  },
  {
    title: "Infrastructure & Full-Stack",
    icon: <Database size={24} />,
    items: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-line.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
      { name: "GraphQL", icon: <Hexagon size={18} /> },
      { name: "Socket.io", icon: <Globe size={18} /> },
    ]
  }
];

export default function Skills() {
  return (
    <div className="content-section">
      <div className="container" style={{ paddingTop: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '20px' }}
          >
            Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title-gradient"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            The Machine Inside
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <div style={{ 
                  width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)',
                  border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>{cat.title}</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {cat.items.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.08)' }}
                    style={{ 
                      padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', 
                      fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '12px',
                      border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name} style={{ width: '22px', height: '22px', filter: 'grayscale(0.5)' }} />
                    ) : <div style={{ color: 'var(--accent-secondary)' }}>{skill.icon}</div>}
                    <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div style={{ marginTop: '100px', textAlign: 'center', opacity: 0.4 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Cpu size={16} /> Hardware Integration</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={16} /> Scalable Systems</div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 500px) {
          .glass-panel { padding: 24px !important; }
          div[style*="grid-template-columns: repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}
