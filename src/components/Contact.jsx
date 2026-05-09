import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { QUICK_LINKS } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section min-h-screen py-24 border-t border-[rgba(255,255,255,0.05)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#22d3ee]"></div>
            <span className="text-[#22d3ee] text-xs font-bold tracking-widest uppercase">Get in touch</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's build something <span className="text-[#22d3ee]">together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[rgba(34,211,238,0.1)] border border-[#22d3ee] text-[#22d3ee] flex items-center justify-center">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email me at</p>
                <a href="mailto:meherlokanath314@gmail.com" className="text-white font-semibold hover:text-[#22d3ee] transition-colors">meherlokanath314@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[rgba(139,92,246,0.1)] border border-[#8b5cf6] text-[#8b5cf6] flex items-center justify-center">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white font-semibold">Bargarh, Odisha, 768028</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {QUICK_LINKS.map((link, idx) => (
              <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(34,211,238,0.2)] hover:border-[#22d3ee] transition-all">
                {link.img ? <img src={link.img} alt={link.title} className="w-5 h-5 invert" /> : <span className="text-white font-bold">{link.title[0]}</span>}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8">
          <form className="flex flex-col gap-6">
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2 block">Your Name</label>
              <input type="text" className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22d3ee] transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2 block">Email Address</label>
              <input type="email" className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22d3ee] transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2 block">Message</label>
              <textarea rows="4" className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22d3ee] transition-colors resize-none" placeholder="Hello Lokanath..."></textarea>
            </div>
            <button type="button" className="btn-premium btn-primary w-full justify-center mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
