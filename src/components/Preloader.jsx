import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let animationFrameId;
        const startTime = Date.now();
        const duration = 1600;

        const update = () => {
            const p = Math.min(100, ((Date.now() - startTime) / duration) * 100);
            setCounter(Math.floor(p));
            if (p < 100) {
                animationFrameId = requestAnimationFrame(update);
            }
        };
        animationFrameId = requestAnimationFrame(update);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // 🥢 8-Panel Column Grid Structure
    const columns = Array.from({ length: 8 });

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }
            }}
            style={{
                position: 'fixed', inset: 0, zIndex: 999999,
                backgroundColor: '#000',
                display: 'flex', overflow: 'hidden'
            }}
        >
            {/* ⚙️ Clean Black Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: '#000' }} />

            {/* 🎞️ The Industrial Roll-Up Shutter (24 Horizontal Slats - Bottom to Top Exit) */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column-reverse', zIndex: 2 }}>
                {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                        key={i}
                        exit={{ 
                            height: 0,
                            opacity: 0,
                            transition: { 
                                duration: 0.7, 
                                ease: [0.33, 1, 0.68, 1],
                                // Sequential delay from bottom (index 0) to top
                                delay: i * 0.04 
                            }
                        }}
                        style={{
                            flex: 1,
                            backgroundColor: '#020617',
                            transformOrigin: 'top',
                            borderTop: '1px solid rgba(255,255,255,0.02)',
                            position: 'relative'
                        }}
                    >
                        {/* Shutter Blade Highlight Glow */}
                        <div style={{ 
                            position: 'absolute', inset: 0, 
                            borderTop: '1px solid rgba(34, 211, 238, 0.03)',
                            opacity: 0.6 
                        }} />
                    </motion.div>
                ))}
            </div>


            {/* 📺 Fine Grain Overlay */}
            <div style={{ 
                position: 'absolute', inset: 0, 
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 7 
            }} />

            {/* 💎 Central Unit */}
            <div style={{ 
                position: 'relative', zIndex: 10, width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                gap: '40px'
            }}>
                
                {/* ♾️ The "Permanently Fixed" Infinity Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    {/* Visual Core Glow */}
                    <motion.div 
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        style={{ 
                            position: 'absolute', width: '130px', height: '130px', 
                            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)', 
                            filter: 'blur(30px)', zIndex: -1 
                        }} 
                    />

                    <svg width="180" height="90" viewBox="0 0 100 50" style={{ pointerEvents: 'none' }}>
                        <defs>
                            <linearGradient id="infGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--accent-cyan)" />
                                <stop offset="50%" stopColor="var(--accent-blue)" />
                                <stop offset="100%" stopColor="var(--accent-cyan)" />
                            </linearGradient>
                            
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Solid Background Path (The "Permanent" Foundation) */}
                        <path
                            d="M 25 25 C 25 5, 45 5, 50 25 C 55 45, 75 45, 75 25 C 75 5, 55 5, 50 25 C 45 45, 25 45, 25 25"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />

                        {/* Kinetic Energy Stream (Seamless) */}
                        <motion.path
                            d="M 25 25 C 25 5, 45 5, 50 25 C 55 45, 75 45, 75 25 C 75 5, 55 5, 50 25 C 45 45, 25 45, 25 25"
                            fill="transparent"
                            stroke="url(#infGradient)"
                            strokeWidth="5"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            initial={{ pathLength: 0.3, pathOffset: 0 }}
                            animate={{ pathOffset: 1 }}
                            transition={{ 
                                duration: 3.5, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                        />
                    </svg>
                </motion.div>

                {/* 🏷️ The "Magnetic" Brand Reveal */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.4 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                    >
                        <motion.h1 
                            style={{ 
                                fontSize: '2.5rem', fontWeight: 900, color: '#fff', margin: 0,
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.05em'
                            }}
                        >
                            LM
                        </motion.h1>
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{ width: '60px', height: '1px', backgroundColor: 'var(--accent-cyan)', opacity: 0.4, transformOrigin: 'left' }} 
                        />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h2 style={{ 
                                fontSize: '0.85rem', fontWeight: 300, color: '#fff', margin: 0,
                                fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.8em', opacity: 0.6
                            }}>
                                Portfolio
                            </h2>
                            <motion.div 
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ff3366', boxShadow: '0 0 10px #ff3366' }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 👋 Welcome Message */}
                <div style={{ overflow: 'hidden', marginTop: '20px' }}>
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ 
                            y: 0, 
                            opacity: 1,
                        }}
                        transition={{ 
                            y: { delay: 1.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] },
                            opacity: { delay: 1.6, duration: 1 }
                        }}
                        style={{ 
                            fontSize: '0.75rem', color: '#fff', 
                            letterSpacing: '0.6em', textTransform: 'uppercase',
                            fontWeight: 400, textShadow: '0 0 15px rgba(255,255,255,0.3)',
                            fontFamily: 'var(--font-heading)'
                        }}
                    >
                        Welcome to Lokanath's Portfolio
                    </motion.div>
                </div>
            </div>

            {/* 📏 Studio Progress (Bottom Anchor) */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', zIndex: 10 }}>
                <motion.div
                    animate={{ width: `${counter}%` }}
                    style={{
                        height: '100%',
                        background: 'var(--accent-cyan)',
                        boxShadow: '0 0 20px var(--accent-cyan)'
                    }}
                />
            </div>

            {/* 🌌 Atmospheric Vignette */}
            <div style={{ 
                position: 'absolute', inset: 0, 
                background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                pointerEvents: 'none', zIndex: 5
            }} />
        </motion.div>
    );
}
