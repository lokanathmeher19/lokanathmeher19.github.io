import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Send, Github, Linkedin, Mail, MessageSquare, Instagram, Send as Telegram } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const toastId = toast.loading("Sending message...");
    fetch("https://formsubmit.co/ajax/meherlokanath314@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Message sent successfully!", { id: toastId });
          setForm({ name: "", contact: "", subject: "", message: "" });
        } else {
          toast.error("Failed to send.", { id: toastId });
        }
      })
      .catch(() => toast.error("Error occurred.", { id: toastId }));
  };

  const socialLinks = [
    { icon: <Github size={20} />, link: "https://github.com/lokanathmeher19", color: "#333" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/lokanath-meher-a79506353/", color: "#0077b5" },
    { icon: <Mail size={20} />, link: "mailto:meherlokanath314@gmail.com", color: "#ea4335" },
    { icon: <MessageSquare size={20} />, link: "https://wa.me/919937164359?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect", color: "#25d366" },
  ];

  return (
    <div className="section" style={{ paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.5fr', gap: '60px' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.h4 
              style={{ color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: 700, marginBottom: '16px' }}
            >
              Contact
            </motion.h4>
            <h2 className="gradient-text" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Let's Build Something Great.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.6 }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -5, background: social.color }}
                  style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '12px', background: 'rgba(255,255,255,0.05)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)', color: '#fff'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card"
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>FULL NAME</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="premium-input" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>EMAIL ADDRESS</label>
                  <input type="email" name="contact" value={form.contact} onChange={handleChange} required className="premium-input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="input-group">
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>SUBJECT</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required className="premium-input" placeholder="Project Inquiry" />
              </div>
              <div className="input-group">
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>MESSAGE</label>
                <textarea name="message" value={form.message} onChange={handleChange} required className="premium-input" rows="5" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="btn-premium btn-primary" style={{ marginTop: '10px' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .premium-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .premium-input:focus {
          outline: none;
          background: rgba(255,255,255,0.07);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(112, 0, 255, 0.1);
        }
        @media (max-width: 868px) {
          .section .container > div { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}
