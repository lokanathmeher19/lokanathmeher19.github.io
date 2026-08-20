import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, FolderOpen, Mail } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { personalData } from '../../data/personal';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] glow-ambient-violet rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] glow-ambient-green rounded-full blur-[100px] opacity-20"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-accent-primary"></span>
            <span className="text-accent-primary font-mono text-sm uppercase tracking-widest font-semibold">
              Hello, I'm
            </span>
            <span className="h-px w-8 bg-accent-primary"></span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-text-main tracking-tight mb-6"
          >
            {personalData.name.toUpperCase()}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {personalData.about}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-20"
          >
            <Button variant="primary" className="gap-2 w-full sm:w-auto">
              <FolderOpen size={18} />
              View Projects
            </Button>
            <Button variant="secondary" className="gap-2 w-full sm:w-auto border-accent-primary text-text-main hover:bg-accent-primary/10">
              <Mail size={18} className="text-accent-primary" />
              Contact Me
            </Button>
          </motion.div>

          {/* Developer Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-5xl mx-auto relative"
          >
            {/* Main Terminal Window */}
            <div className="bg-[#0D1117] border border-brand-border rounded-xl shadow-2xl overflow-hidden relative z-10">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 bg-[#161B22] border-b border-brand-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-text-muted text-xs font-mono">
                  <Terminal size={14} />
                  <span>guest@lokanath:~</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 text-left font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-text-secondary">
                <div className="mb-4">
                  <span className="text-accent-primary">lokanath@portfolio</span>
                  <span className="text-text-main">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-text-main">$ </span>
                  <span className="text-text-main">whoami</span>
                  <div className="mt-1 text-accent-light">{personalData.name.toLowerCase().replace(' ', '-')}</div>
                </div>
                
                <div className="mb-4">
                  <span className="text-accent-primary">lokanath@portfolio</span>
                  <span className="text-text-main">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-text-main">$ </span>
                  <span className="text-text-main">role</span>
                  <div className="mt-1 text-accent-light">{personalData.role}</div>
                </div>

                <div className="mb-4">
                  <span className="text-accent-primary">lokanath@portfolio</span>
                  <span className="text-text-main">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-text-main">$ </span>
                  <span className="text-text-main">focus</span>
                  <div className="mt-1 text-accent-light flex flex-col">
                    {personalData.focus.map((item, i) => (
                      <span key={i}>&gt; {item}</span>
                    ))}
                  </div>
                </div>
                
                <div className="animate-pulse flex items-center">
                  <span className="text-accent-primary">lokanath@portfolio</span>
                  <span className="text-text-main">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-text-main">$ </span>
                  <span className="ml-2 w-2 h-5 bg-text-main inline-block"></span>
                </div>
              </div>
            </div>

            {/* Floating Code Editor */}
            <div className="hidden lg:block absolute -right-12 top-20 w-72 bg-[#0D1117] border border-brand-border rounded-xl shadow-2xl overflow-hidden z-20 opacity-90 backdrop-blur-sm">
              <div className="flex items-center px-4 py-2 bg-[#161B22] border-b border-brand-border">
                <div className="flex items-center gap-2 text-text-muted text-xs font-mono">
                  <Code size={14} className="text-accent-secondary" />
                  <span>config.json</span>
                </div>
              </div>
              <div className="p-4 text-left font-mono text-xs text-text-muted">
                <span className="text-text-main">{`{`}</span><br/>
                <span className="ml-4 text-accent-secondary">"status"</span><span className="text-text-main">: </span><span className="text-accent-primary">"learning"</span>,<br/>
                <span className="ml-4 text-accent-secondary">"coffee"</span><span className="text-text-main">: </span><span className="text-orange-400">true</span>,<br/>
                <span className="ml-4 text-accent-secondary">"passion"</span><span className="text-text-main">: </span><span className="text-accent-primary">"building"</span><br/>
                <span className="text-text-main">{`}`}</span>
              </div>
            </div>
            
            {/* Decorative background for workspace */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-transparent blur-2xl -z-10 rounded-full opacity-30"></div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
