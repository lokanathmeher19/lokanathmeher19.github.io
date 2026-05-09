import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const EducationCard = ({ icon, title, institution, location, period, detail, color }) => (
  <div className="glass-panel p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] hover:-translate-y-2 transition-transform duration-500">
    <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
      <h3 className="text-xl font-bold text-white max-w-[350px]">{title}</h3>
      <span className="text-xs font-bold text-gray-400 bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-full border border-[rgba(255,255,255,0.05)]">
        {period}
      </span>
    </div>
    
    <p className="text-gray-300 text-lg font-semibold mb-6">{institution}</p>
    
    <div className="flex items-center gap-6 mb-6">
      <div className={`bg-[${color}20] px-4 py-2 rounded-xl border border-[${color}40]`}>
        <span className="font-black text-sm" style={{ color: color }}>{detail}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <MapPin size={14} /> {location}
      </div>
    </div>
  </div>
);

export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "GIET University, Bhubaneswar",
      period: "2024 — 2028",
      location: "Bhubaneswar",
      detail: "8.5 CGPA (Current)",
      color: "#22d3ee"
    },
    {
      title: "Higher Secondary Education (Class XII)",
      institution: "Dadhi Baman Higher Secondary School, Bhatli",
      period: "2022 — 2024",
      location: "Bhatli",
      detail: "68% (Science)",
      color: "#8b5cf6"
    },
    {
      title: "Secondary Education (Class X)",
      institution: "Sri Aurobindo Institute of Integral Education & Research, Bargarh",
      period: "2019 — 2022",
      location: "Bargarh",
      detail: "Mathematics, Gen. Science, Soc. Science, English, Odia, Sanskrit",
      color: "#60a5fa"
    }
  ];

  return (
    <section id="education" className="section min-h-screen py-24 border-t border-[rgba(255,255,255,0.05)]">
      <div className="content-center mb-16 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
          <span className="text-[#22d3ee] text-xs font-bold tracking-widest uppercase">Academic History</span>
          <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">
          Educational <span className="text-[#22d3ee]">Background</span>
        </h2>
        <p className="text-gray-400 text-lg">
          My academic journey focusing on software architecture and intelligence.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </section>
  );
}
