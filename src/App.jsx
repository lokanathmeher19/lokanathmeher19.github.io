import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'

// Pages
const Home = lazy(() => import('./pages/Home'))
const Resume = lazy(() => import('./pages/Resume'))
const Certificates = lazy(() => import('./pages/Certificates'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: 'var(--bg-2)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            fontFamily: 'var(--font-body)'
          }
        }} 
      />
      
      {/* Conditionally show Navbar - it handles its own visibility/scrolling */}
      <Navbar />
      
      <main>
        <Suspense fallback={null}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  )
}
