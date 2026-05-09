import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import profileImg from '../assets/my photo.png';

export default function Hero() {
  return (
    <section id="home" className="section min-h-screen flex items-center pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[#22d3ee] font-bold tracking-widest text-xs uppercase">Software Development Engineer</span>
            <div className="flex items-center gap-2 bg-[rgba(255,51,102,0.1)] border border-[rgba(255,51,102,0.2)] px-3 py-1 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse"></div>
              <span className="text-[#ff3366] text-[10px] font-bold tracking-wider">AVAILABLE FOR HIRE</span>
            </div>
          </div>
          
          <h1 className="hero-title text-white leading-tight">
            Building the <br />
            <span className="text-gradient">Digital Future</span>
          </h1>
          
          <div className="border-l-4 border-[#22d3ee] pl-6 py-2">
            <h2 className="text-3xl font-bold text-white mb-2">Hi, I'm <span className="text-[#8b5cf6]">Lokanath Meher</span></h2>
            <p className="text-gray-400 text-lg">
              I build <span className="text-white font-semibold">scalable web applications</span> and <span className="text-white font-semibold">secure digital solutions</span>
            </p>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
              <span className="text-[#22d3ee] text-xs font-bold tracking-widest uppercase">Technical_Specializations</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass-panel px-4 py-3 flex flex-col gap-1 w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-[#22d3ee] flex items-center justify-center">⚛️</div>
                  <span className="text-sm font-bold text-white">Full-Stack Developer</span>
                </div>
                <span className="text-[10px] text-gray-500">MERN Stack apps</span>
              </div>
              
              <div className="glass-panel px-4 py-3 flex flex-col gap-1 w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-[#22d3ee] flex items-center justify-center">{'</>'}</div>
                  <span className="text-sm font-bold text-white">Python Developer</span>
                </div>
                <span className="text-[10px] text-gray-500">Logic & Scripts</span>
              </div>
              
              <div className="glass-panel px-4 py-3 flex flex-col gap-1 w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-[#22d3ee] flex items-center justify-center">🧠</div>
                  <span className="text-sm font-bold text-white">DSA Solver</span>
                </div>
                <span className="text-[10px] text-gray-500">Problem Solving</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mt-6">
            <a href="#projects" className="btn-premium btn-primary">
              View Projects <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-premium btn-secondary">
              Let's Collaborate
            </a>
          </div>
        </div>
        
        {/* Right Image Card */}
        <div className="relative mx-auto lg:ml-auto w-full max-w-[400px]">
          <div className="glass-panel p-6 rounded-[2rem] bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-[#22d3ee] px-8 py-1 -rotate-45 -translate-x-8 translate-y-6 text-black text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10 w-48 text-center">
              Software Developer
            </div>
            
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#22d3ee] to-[#0f172a]">
              {/* Note: I'll handle the image loading dynamically. If profileImg fails, fallback to a div */}
              <img src={profileImg} alt="Lokanath Meher" loading="eager" decoding="async" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal duration-500" onError={(e) => {e.target.style.display = 'none'}} />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2 flex items-center gap-2">
                <span className="text-[#22d3ee]">›_</span>
                <span className="text-xs font-bold tracking-widest text-white uppercase">DEV_IDENTITY</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-gray-400">
              <a href="https://github.com/lokanathmeher19" className="hover:text-white transition-colors"><FiGithub size={20} /></a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors"><FiLinkedin size={20} /></a>
              <a href="https://instagram.com" className="hover:text-white transition-colors"><FiInstagram size={20} /></a>
              <a href="https://wa.me/919937164359" className="hover:text-white transition-colors"><FaWhatsapp size={20} /></a>
              <a href="https://x.com/Lokanath_meher_" className="hover:text-white transition-colors"><FaXTwitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
