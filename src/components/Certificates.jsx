import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Maximize2, X, Download, ExternalLink } from "lucide-react";

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
      case "other": return <Award size={14} />;
      default: return <Award size={14} />;
    }
  };

  return (
    <section id="certificates" className="section min-h-screen py-24 border-t border-[rgba(255,255,255,0.05)] relative">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="content-center mb-16 flex flex-col items-center relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-[#8b5cf6]"></div>
          <span className="text-[#8b5cf6] text-xs font-bold tracking-widest uppercase">Accreditation</span>
          <div className="h-[1px] w-8 bg-[#8b5cf6]"></div>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">
          Professional <span className="text-[#8b5cf6]">Certifications</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Documenting a continuous commitment to engineering excellence and specialized technical research.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10">
        {["nxtwave", "coursera", "giet", "other"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`btn-premium ${tab === t ? "bg-[#22d3ee] text-black" : "bg-[rgba(255,255,255,0.02)] text-gray-400 border border-[rgba(255,255,255,0.08)]"}`}
            style={{ padding: "10px 24px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            {t === "giet" ? "GIET UNIVERSITY" : t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <AnimatePresence mode="wait">
          {CERTS[tab].map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-4 flex flex-col border border-[rgba(255,255,255,0.06)] rounded-3xl"
            >
              <div className="relative h-[200px] rounded-2xl overflow-hidden bg-black mb-5">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-80" />
                <button
                  onClick={() => setSelectedCert(c)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur border border-[rgba(255,255,255,0.2)] text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              <div className="flex-grow flex flex-col px-2 pb-2">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{c.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-4">
                   <BookOpen size={12} /> {c.org} • {c.date}
                </div>

                <button
                  onClick={() => setSelectedCert(c)}
                  className="mt-auto bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2 hover:bg-[rgba(255,255,255,0.06)] transition-colors"
                >
                  PREVIEW DOCUMENT <ExternalLink size={14} />
                </button>
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
            className="fixed inset-0 bg-[#020617]/95 backdrop-blur-xl z-[9999] flex flex-col items-center justify-start pt-20 px-4 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <button
              className="fixed top-6 right-6 w-12 h-12 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all z-[10000]"
              onClick={() => setSelectedCert(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full flex flex-col items-center pb-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-auto max-w-full max-h-[85vh] rounded-xl shadow-[0_50px_100px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] object-contain"
              />
              <div className="mt-8 text-center">
                 <h2 className="text-3xl font-black text-white mb-3">{selectedCert.title}</h2>
                 <p className="text-gray-400 tracking-widest font-semibold text-sm">
                   {selectedCert.org.toUpperCase()} • ACQUIRED: {selectedCert.date}
                 </p>
                 <div className="mt-8">
                   <a 
                     href={selectedCert.img} 
                     download={`${selectedCert.title}.jpg`}
                     className="btn-premium btn-primary px-8 py-3 text-sm"
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
