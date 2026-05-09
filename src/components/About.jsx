import React from "react";
import { motion } from "framer-motion";
import { Laptop, Shield, Globe, Rocket } from "lucide-react";

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
    <section id="about" className="section min-h-screen py-24 border-t border-[rgba(255,255,255,0.05)] flex items-center">
      <div className="max-w-[1200px] mx-auto w-full px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-10 bg-[#8b5cf6] opacity-30"></div>
              <h4 className="text-[#8b5cf6] uppercase tracking-[6px] text-xs font-bold m-0">
                Professional Overview
              </h4>
              <div className="h-[1px] w-10 bg-[#8b5cf6] opacity-30"></div>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(2.5rem,5vw,4rem)] font-black mb-5 leading-[1.1] font-heading text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6]">Strategic</span> Engineering
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between scalable software architecture and advanced cyber defense protocols.
            </motion.p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-16 items-start">
            
            {/* Left: Image Card */}
            <motion.div variants={itemVariants} className="h-full">
              <div className="bg-[#0a0f1d] border border-[rgba(255,255,255,0.05)] rounded-[24px] p-5 h-full flex">
                <div className="bg-[#4899b2] rounded-2xl w-full h-full min-h-[450px] flex items-end justify-center overflow-hidden relative">
                  <img 
                    src="/my photo.png" 
                    alt="Lokanath Meher" 
                    className="w-[85%] object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Text & Cards */}
            <div className="flex flex-col justify-center">
              <motion.h4 
                variants={itemVariants}
                className="text-[#22d3ee] uppercase tracking-[2px] text-xs font-black mb-4"
              >
                Executive Profile
              </motion.h4>
              
              <motion.h3 
                variants={itemVariants}
                className="text-[clamp(2rem,3.5vw,2.5rem)] font-black mb-6 leading-[1.2] font-heading text-white"
              >
                Architecting Secure,<br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6]">Scalable Solutions</span>
              </motion.h3>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed mb-10">
                I am a specialized <span className="text-[#22d3ee] font-bold">Software Development Engineer</span> leveraging a strong foundation from GIET University. My technical methodology intertwines the high-performance capabilities of the MERN stack and Python with the rigorous defensive principles of cybersecurity, ensuring every system is robust, efficient, and threat-aware.
              </motion.p>

              {/* Grid of 4 Cards */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                <div className="bg-[#0f1423] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col transition-all hover:bg-[rgba(255,255,255,0.03)]">
                  <div className="mb-4 text-[#22d3ee]">
                    <Laptop size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Engineering Core</h4>
                  <p className="text-sm text-gray-400 leading-relaxed opacity-80 m-0">Algorithmic precision utilizing Python, C++, and advanced Data Structures.</p>
                </div>

                <div className="bg-[#0f1423] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col transition-all hover:bg-[rgba(255,255,255,0.03)]">
                  <div className="mb-4 text-[#3b82f6]">
                    <Shield size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Cyber Defense</h4>
                  <p className="text-sm text-gray-400 leading-relaxed opacity-80 m-0">Proactive threat modeling, cryptography, and zero-trust protocol integration.</p>
                </div>

                <div className="bg-[#0f1423] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col transition-all hover:bg-[rgba(255,255,255,0.03)]">
                  <div className="mb-4 text-[#22d3ee]">
                    <Globe size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">System Architecture</h4>
                  <p className="text-sm text-gray-400 leading-relaxed opacity-80 m-0">End-to-end full-stack development leveraging React, Node.js, and scalable APIs.</p>
                </div>

                <div className="bg-[#0f1423] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col transition-all hover:bg-[rgba(255,255,255,0.03)]">
                  <div className="mb-4 text-[#f472b6]">
                    <Rocket size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Cloud & AI Vision</h4>
                  <p className="text-sm text-gray-400 leading-relaxed opacity-80 m-0">Deploying modern AWS infrastructures and Google Cloud Generative AI tooling.</p>
                </div>

              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
