import React from 'react'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="content-section" style={{ justifyContent: 'center', textAlign: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="title-gradient" style={{ fontSize: 'clamp(5rem, 15vw, 10rem)', marginBottom: '16px' }}>404</h1>
          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '24px', letterSpacing: '4px', textTransform: 'uppercase' }}>System Error: Node Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            The digital coordinates you provided do not exist within the current architecture.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="/" className="btn-action btn-primary-action">
              <Home size={18} /> Re-route to Intelligence
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
