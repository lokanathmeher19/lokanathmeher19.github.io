import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import Container from '../ui/Container';

const Navbar = () => {
  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:shadow-glow-green transition-normal">
              <Code2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-wide text-text-main">
              Lokanath
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-accent-primary ${
                    isActive ? 'text-accent-primary' : 'text-text-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
