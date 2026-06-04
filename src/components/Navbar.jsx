import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("/resume");
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      const anchorLinks = links.filter(l => l.href.startsWith("#"));
      
      for (const link of anchorLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          setActive(link.href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div className="nav-container">
      <nav className="navbar">
        {links.map((link) => {
          const isAnchor = link.href.startsWith("#");
          const Tag = isAnchor ? "a" : Link;
          const toProps = isAnchor ? { href: link.href } : { to: link.href };

          return (
            <Tag
              key={link.href}
              {...toProps}
              className={`nav-item ${active === link.href ? "active" : ""}`}
              onClick={() => isAnchor && setActive(link.href)}
              style={{ position: 'relative' }}
            >
              {active === link.href && (
                <motion.div
                  layoutId="nav-glow"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "100px",
                    zIndex: -1,
                    boxShadow: "0 0 15px rgba(34, 211, 238, 0.15)",
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.label}
            </Tag>
          );
        })}
      </nav>
    </div>
  );
}
