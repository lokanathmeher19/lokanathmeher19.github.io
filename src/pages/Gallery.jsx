import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Bot } from "lucide-react";
import "../styles/Gallery.css";

// 🖼️ Import Icons
import nxtwave_logo from "../assets/gallery/nxtwave_logo.png";
import giet_logo from "../assets/gallery/giet_logo.jpg";
import coursera_logo from "../assets/gallery/coursera_logo.png";
import deomali_logo from "../assets/gallery/deomali_logo.png";
import ranichua_logo from "../assets/gallery/ranichua_logo.png";
import holidays_logo from "../assets/gallery/holidays_logo.png";

// 🖼️ Import Gallery Images
import google_1 from "../assets/gallery/google_1.jpg";
import google_2 from "../assets/gallery/google_2.jpg";
import google_3 from "../assets/gallery/google_3.jpg";
import google_4 from "../assets/gallery/google_4.jpg";
import giet_1 from "../assets/gallery/giet_1.jpg";
import giet_2 from "../assets/gallery/giet_2.jpg";
import giet_3 from "../assets/gallery/giet_3.jpg";
import giet_4 from "../assets/gallery/giet_4.jpg";
import giet_5 from "../assets/gallery/giet_5.jpg";
import giet_6 from "../assets/gallery/giet_6.jpg";
import giet_7 from "../assets/gallery/giet_7.jpg";
import giet_8 from "../assets/gallery/giet_8.jpg";
import deomali_1 from "../assets/gallery/deomali_1.jpg";
import deomali_2 from "../assets/gallery/deomali_2.jpg";
import ranichua_1 from "../assets/gallery/ranichua_1.jpg";
import ranichua_2 from "../assets/gallery/ranichua_2.jpg";
import ranichua_3 from "../assets/gallery/ranichua_3.jpg";
import koraput_1 from "../assets/gallery/koraput_1.jpg";
import koraput_2 from "../assets/gallery/koraput_2.jpg";
import jagannath_1 from "../assets/gallery/jagannath_1.jpg";
import jagannath_2 from "../assets/gallery/jagannath_2.jpg";
import jagannath_3 from "../assets/gallery/jagannath_3.jpg";
import blood_donation_1 from "../assets/gallery/blood_donation_1.jpg";
import blood_donation_2 from "../assets/gallery/blood_donation_2.jpg";
import blood_donation_3 from "../assets/gallery/blood_donation_3.jpg";
import blood_donation_4 from "../assets/gallery/blood_donation_4.jpg";
import nxtwave_1 from "../assets/gallery/nxtwave_1.png";
import nxtwave_2 from "../assets/gallery/nxtwave_2.png";
import nxtwave_3 from "../assets/gallery/nxtwave_3.png";
import nxtwave_4 from "../assets/gallery/nxtwave_4.png";
import nxtwave_5 from "../assets/gallery/nxtwave_5.png";
import nxtwave_6 from "../assets/gallery/nxtwave_6.png";
import nxtwave_7 from "../assets/gallery/nxtwave_7.png";
import nxtwave_8 from "../assets/gallery/nxtwave_8.png";
import nxtwave_9 from "../assets/gallery/nxtwave_9.png";
import nxtwave_10 from "../assets/gallery/nxtwave_10.png";
import nxtwave_11 from "../assets/gallery/nxtwave_11.png";
import nxtwave_12 from "../assets/gallery/nxtwave_12.png";
import ai_proj_1 from "../assets/gallery/ai_proj_1.png";
import ai_proj_2 from "../assets/gallery/ai_proj_2.png";
import ai_proj_3 from "../assets/gallery/ai_proj_3.png";
import ai_proj_4 from "../assets/gallery/ai_proj_4.png";
import ai_proj_5 from "../assets/gallery/ai_proj_5.png";
import ai_proj_6 from "../assets/gallery/ai_proj_6.png";
import ai_proj_7 from "../assets/gallery/ai_proj_7.png";
import ai_proj_8 from "../assets/gallery/ai_proj_8.png";
import ai_proj_9 from "../assets/gallery/ai_proj_9.png";
import ai_proj_10 from "../assets/gallery/ai_proj_10.png";
import ai_proj_11 from "../assets/gallery/ai_proj_11.png";

const IMAGES = {
  personal: [
    {
      id: 1,
      title: "Google Cloud AI Labs '25",
      logo: "google",
      caption: "Honored to be part of the Google Cloud H2S AI Labs program! 🚀 Exploring the frontiers of Generative AI and Cloud Computing. A journey of learning, innovation, and connecting with brilliant minds.",
      photos: [
        google_2,
        google_3,
        google_4,
        google_1
      ],
    },
    {
      id: 2,
      title: "GIET, Gangapatna, BBSR",
      logo: "giet",
      caption: "College days filled with fun, experiences, and design! 🎓✨ A collection of memorable moments with friends and faculty.",
      photos: [
        giet_1,
        giet_2,
        giet_3,
        giet_4,
        giet_5,
        giet_6,
        giet_7,
        giet_8
      ],
    },
    {
      id: 3,
      title: "Holidays & Weekends",
      logo: "holidays",
      caption: "Exploring nature's beauty! 🌿 1. Deomali - The highest peak of Odisha. 2. Ranichua Waterfall - A serene escape into the wild.",
      photos: [
        deomali_1,
        deomali_2,
        ranichua_1,
        ranichua_2,
        ranichua_3,
        koraput_1,
        koraput_2,
        jagannath_1,
        jagannath_2,
        jagannath_3
      ],
    },
    {
      id: 4,
      title: "Extracurricular Activity",
      logo: "blood_donation",
      caption: "Proud to contribute to the community through blood donation! 🩸❤️ A small act of kindness can save lives. #BloodDonation #NSS",
      photos: [
        blood_donation_1,
        blood_donation_2,
        blood_donation_3,
        blood_donation_4
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "NXTWAVE PROJECTS",
      logo: "nxtwave",
      caption: "Hands-on experience building dynamic projects using HTML, CSS, and MySQL, complemented by Data Analysis with AI. 🚀 Demonstrating full-stack development skills and analytical problem-solving.",
      photos: [
        nxtwave_1,
        nxtwave_2,
        nxtwave_3,
        nxtwave_4,
        nxtwave_5,
        nxtwave_6,
        nxtwave_7,
        nxtwave_8,
        nxtwave_9,
        nxtwave_10,
        nxtwave_11,
        nxtwave_12
      ],
    },
    {
      id: 2,
      title: "MY PROJECTS EXPERIENCE",
      logo: "ai",
      caption: "Leveraging the power of Artificial Intelligence to accelerate development and enhance creativity. 🤖 This collection showcases projects where AI played a pivotal role in generating code snippets, designing unique assets like logos, and optimizing workflows. A testament to the synergy between human ingenuity and machine intelligence.",
      photos: [
        ai_proj_1,
        ai_proj_2,
        ai_proj_3,
        ai_proj_4,
        ai_proj_5,
        ai_proj_6,
        ai_proj_7,
        ai_proj_8,
        ai_proj_9,
        ai_proj_10,
        ai_proj_11
      ],
    },
  ],
  achievements: [],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

// 🖼️ Individual Post Component with Slider
const GalleryPost = ({ post, openZoom }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % post.photos.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + post.photos.length) % post.photos.length);
  };

  // Helper to get location info based on index
  const getLocationInfo = (index) => {
    if (index < 2) return { name: "DEOMALI", icon: deomali_logo };
    if (index < 5) return { name: "RANICHUA", icon: ranichua_logo };
    if (index < 7) return { name: "KORAPUT", icon: deomali_logo }; // Reusing mountain icon for Koraput
    return { name: "JAGANNATH TEMPLE, KORAPUT", icon: holidays_logo }; // Using main badge for Temple
  };

  return (
    <motion.div
      className="post-card"
      variants={childVariants}
      whileHover={{ y: -4 }}
    >
      {post.title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {post.logo === 'google' && (
            <div style={{ background: 'white', padding: 8, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
          )}
          {post.logo === 'giet' && (
            <div style={{ background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, overflow: 'hidden' }}>
              <img src={giet_logo} alt="GIET Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          {post.logo === 'holidays' && (
            <div style={{ background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)' }}>
              <img src={holidays_logo} alt="Holidays Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          {post.logo === 'blood_donation' && (
            <div style={{ background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)' }}>
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="#E91E63">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                <path d="M12 2C12 2 12 2 12 2C12 2 12 2 12 2C12 2 12 2 12 2C12 2 12 2 12 2z" fill="none" />
                <path d="M12 7c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="white" opacity="0.3" />
              </svg>
            </div>
          )}
          {post.logo === 'nxtwave' && (
            <div style={{ background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, overflow: 'hidden' }}>
              <img src={nxtwave_logo} alt="NxtWave Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
            </div>
          )}
          {post.logo === 'ai' && (
            <div style={{ background: 'linear-gradient(135deg, #00b4ff, #00ffe0)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, overflow: 'hidden', boxShadow: '0 0 15px rgba(0, 180, 255, 0.4)' }}>
              <Bot size={28} color="white" />
            </div>
          )}
          <div>
            <h3 style={{ margin: 0, fontSize: 18, color: 'white', fontWeight: 600 }}>{post.title}</h3>
            <span style={{ fontSize: 12, color: '#aaa' }}>
              {post.logo === 'giet' ? 'Education & Memories' : post.logo === 'holidays' ? 'Travel & Adventure' : post.logo === 'blood_donation' ? 'Community Service' : post.logo === 'nxtwave' ? 'Skill Development' : post.logo === 'ai' ? 'AI & Web Development' : 'Professional Certification'}
            </span>
          </div>
        </div>
      )}
      <p className="caption">{post.caption}</p>

      {/* 📸 Image Slider */}
      <div className="slider-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: 12, aspectRatio: '16/9', background: '#000' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={post.photos[currentIndex]}
            src={post.photos[currentIndex]}
            alt="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openZoom(post, currentIndex)}
          />
        </AnimatePresence>

        {/* Location Logo Overlay for Holidays Post */}
        {post.logo === 'holidays' && (
          <div style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            padding: '8px 12px',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            zIndex: 20,
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <img
              src={getLocationInfo(currentIndex).icon}
              alt="Location Logo"
              style={{ width: 24, height: 24, objectFit: 'contain' }}
            />
            <span style={{ color: 'white', fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>
              {getLocationInfo(currentIndex).name}
            </span>
          </div>
        )}

        {post.photos.length > 1 && (
          <>
            <button
              className="slider-btn left"
              onClick={prevSlide}
              style={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: 'none', color: 'white', borderRadius: '50%', padding: 8, cursor: 'pointer', zIndex: 10 }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="slider-btn right"
              onClick={nextSlide}
              style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: 'none', color: 'white', borderRadius: '50%', padding: 8, cursor: 'pointer', zIndex: 10 }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 10 }}>
              {post.photos.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: currentIndex === idx ? 'white' : 'rgba(255,255,255,0.4)',
                    transition: 'background 0.3s'
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

import useScrollNavigation from '../hooks/useScrollNavigation'

export default function Gallery() {
  useScrollNavigation('/skills', '/projects')
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""} `}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <GalleryPost key={post.id} post={post} openZoom={openZoom} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
