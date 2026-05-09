import React from 'react';

const SkillBadge = ({ name, percent }) => (
  <div className="flex flex-col gap-1 w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-full px-4 py-2 hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(34,211,238,0.3)] transition-all">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-white whitespace-nowrap">{name}</span>
        <span className="text-[10px] text-gray-500">{percent}%</span>
      </div>
    </div>
    <div className="w-full bg-[rgba(255,255,255,0.1)] h-1 rounded-full overflow-hidden mt-1">
      <div 
        className="h-full bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="section min-h-screen py-24">
      <div className="content-center mb-20 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
          <span className="text-[#22d3ee] text-xs font-bold tracking-widest uppercase">SKILLS</span>
          <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">
          <span className="text-[#8b5cf6]">Technical</span> Cognition
        </h2>
        <p className="text-gray-400 text-lg">
          A professional documentation of foundational engineering logic and deep technical understanding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Engineering Core */}
        <div className="glass-panel p-8 md:col-span-2 relative overflow-hidden bg-gradient-to-br from-[rgba(15,23,42,0.8)] to-transparent">
          <div className="h-[2px] w-8 bg-[#22d3ee] mb-6"></div>
          <h3 className="text-3xl font-bold text-white mb-2">Engineering <span className="text-[#22d3ee]">Core</span></h3>
          <p className="text-gray-400 text-sm mb-8 max-w-sm">Foundational software principles, algorithmic integrity, and systems-level logic.</p>
          
          <div className="flex flex-wrap gap-4">
            <SkillBadge name="Python" percent={98} />
            <SkillBadge name="C++" percent={85} />
            <SkillBadge name="Java" percent={88} />
            <SkillBadge name="JavaScript" percent={92} />
            <SkillBadge name="C Language" percent={80} />
            <SkillBadge name="HTML5 & CSS3" percent={95} />
            <SkillBadge name="Data Structures" percent={90} />
            <SkillBadge name="Problem Solving" percent={94} />
            <SkillBadge name="OOPS Concepts" percent={88} />
            <SkillBadge name="DBMS / SQL" percent={85} />
            <SkillBadge name="OS Fundamentals" percent={80} />
            <SkillBadge name="Computer Networks" percent={78} />
            <SkillBadge name="Algorithms" percent={90} />
            <SkillBadge name="System Design" percent={85} />
          </div>
        </div>

        {/* MERN Full-stack */}
        <div className="glass-panel p-8 relative overflow-hidden">
          <div className="h-[2px] w-8 bg-[#8b5cf6] mb-6"></div>
          <h3 className="text-3xl font-bold text-white mb-2">MERN <span className="text-[#8b5cf6]">Full-stack</span></h3>
          <p className="text-gray-400 text-sm mb-8">Full-cycle application development with modern reactive frameworks and scalable backends.</p>
          
          <div className="flex flex-wrap gap-4">
            <SkillBadge name="React.js" percent={95} />
            <SkillBadge name="Node.js" percent={90} />
            <SkillBadge name="Express.js" percent={88} />
            <SkillBadge name="MongoDB" percent={85} />
            <SkillBadge name="TypeScript" percent={80} />
            <SkillBadge name="Next.js" percent={82} />
            <SkillBadge name="Tailwind CSS" percent={95} />
            <SkillBadge name="GraphQL" percent={75} />
            <SkillBadge name="Socket.io" percent={80} />
            <SkillBadge name="REST APIs" percent={95} />
            <SkillBadge name="Redux / Toolkit" percent={85} />
            <SkillBadge name="Storybook" percent={80} />
          </div>
        </div>

        {/* Security */}
        <div className="glass-panel p-8 relative overflow-hidden flex flex-col justify-center">
          <div className="h-[2px] w-8 bg-[#f59e0b] mb-6"></div>
          <h3 className="text-3xl font-bold text-white mb-2">Security</h3>
          <p className="text-gray-400 text-sm mb-8">Resilient protocols & offensive research.</p>
          
          <div className="flex flex-col gap-4 max-w-[200px]">
            <SkillBadge name="Kali Linux" percent={85} />
            <SkillBadge name="Metasploit" percent={78} />
            <SkillBadge name="Nmap Sec" percent={82} />
            <SkillBadge name="Cryptography" percent={75} />
          </div>
        </div>

        {/* DevOps */}
        <div className="glass-panel p-8 relative overflow-hidden">
          <div className="h-[2px] w-8 bg-[#ff3366] mb-6"></div>
          <h3 className="text-3xl font-bold text-white mb-2">DevOps</h3>
          <p className="text-gray-400 text-sm mb-8">Automation & deployment pipelines.</p>
          
          <div className="flex flex-wrap gap-4">
            <SkillBadge name="Git Workflow" percent={92} />
            <SkillBadge name="Docker" percent={88} />
            <SkillBadge name="Jenkins CI/CD" percent={85} />
            <SkillBadge name="Linux Arch" percent={88} />
          </div>
        </div>

        {/* Cloud */}
        <div className="glass-panel p-8 relative overflow-hidden">
          <div className="h-[2px] w-8 bg-[#3b82f6] mb-6"></div>
          <h3 className="text-3xl font-bold text-white mb-2">Cloud</h3>
          <p className="text-gray-400 text-sm mb-8">Serverless & scalable infrastructure.</p>
          
          <div className="flex flex-wrap gap-4">
            <SkillBadge name="AWS Cloud" percent={82} />
            <SkillBadge name="GCP Services" percent={78} />
            <SkillBadge name="Supabase DB" percent={85} />
            <SkillBadge name="Netlify Dep" percent={88} />
          </div>
        </div>
      </div>
    </section>
  );
}
