import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/ui/PageBackground';
import ScrollProgress from '../components/ui/ScrollProgress';
import HeroSection from '../components/sections/HeroSection';
import TechMarquee from '../components/sections/TechMarquee';
import AboutSection from '../components/sections/AboutSection';
import GitHubSection from '../components/sections/GitHubSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import EducationSection from '../components/sections/EducationSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import BlogSection from '../components/sections/BlogSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="w-full relative">
      <ScrollProgress />
      <PageBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <GitHubSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <BlogSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
