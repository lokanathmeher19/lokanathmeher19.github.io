import React from 'react';
import { 
    BookOpen, 
    Orbit, 
    ShoppingBag, 
    ShieldAlert, 
    Activity, 
    Globe, 
    Smartphone,
    Brain,
    Layers,
    Code2,
    Terminal,
    GraduationCap,
    ShieldCheck,
    Box,
    Cloud,
    Linkedin,
    Github,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Award,
    Lock,
    Binary,
    Cpu,
    CheckCircle2,
    Briefcase
} from 'lucide-react';

// --- Assets & Media Imports ---
import novels_img from '../assets/novels.png';
import solar_img from '../assets/solar.png';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import gmailLogo from '../assets/gmail.png';
import whatsappLogo from '../assets/whatsapp.png';
import instagramLogo from '../assets/insta.png';
import telegramLogo from '../assets/telegram.png';
import photo from '../assets/my photo.png';

// --- Certificate Imports ---
import cert_google from '../assets/certs/coursera_genai.jpg';
import cert_ibm from '../assets/certs/coursera_cybersecurity.jpg';
import cert_deloitte from '../assets/certs/deloitte_data_analytics.png';
import cert_nxtwave from '../assets/certs/nxtwave_responsive.jpg';
import cert_giet_conf from '../assets/certs/giet_iccoset_conf.jpg';
import cert_codtech from '../assets/certs/codtech_python.jpg';
import cert_codec from '../assets/certs/codec_python_achievement.jpg';
import cert_simplilearn from '../assets/certs/simplilearn_software_dev.jpg';
import cert_suravi from '../assets/certs/giet_suravi_model.jpg';
import cert_autonomous from '../assets/certs/nxtwave_autonomous.jpg';
import cert_cad from '../assets/certs/giet_cad_bootcamp.jpg';
import cert_drone from '../assets/certs/giet_drone_bootcamp.jpg';
import cert_gemini from '../assets/certs/coursera_gemini.jpg';
import cert_wordpress from '../assets/certs/coursera_wordpress.jpg';
import cert_static from '../assets/certs/nxtwave_static.jpg';
import cert_codec_intern from '../assets/certs/codec_python_internship.jpg';
import cert_nccengt from '../assets/certs/giet_nccengt_paper.jpg';
import cert_workshop from '../assets/certs/workshop.png';
import cert_deloatte_2 from '../assets/certs/Deloatte.jpg';
import cert_cyber_awareness from '../assets/certs/Introduction to Cybersecurity Awareness_page-0001.jpg';
import cert_nxtwave_alt from '../assets/certs/Nxtwave.jpeg';
import cert_hackerrank from '../assets/certs/Hackerrank.png';

// --- Category/Institution Logos ---
import logo_giet from '../assets/GIET-removebg-preview.png';
import logo_hp from '../assets/HP-removebg-preview.png';
import logo_nxtwave from '../assets/Nxtwave.webp';
import logo_coursera from '../assets/coursera.webp';
import logo_secondary from '../assets/logo-1.webp';

import { PORTFOLIO_CONTENT } from './portfolioContent';

// --- Formatting Helpers ---
const formatHighlightText = (text) => {
  if (!text) return "";
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} style={{ color: '#fff', fontWeight: 700 }}>{part}</span>;
    }
    return part;
  });
};

const formatAboutHighlightText = (text) => {
  if (!text) return "";
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i} style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>{part}</strong>;
    }
    return part;
  });
};

// --- Icon Dynamic Mapping for convenience ---
export const ICON_MAP = {
    Layers: <Layers size={14} />,
    Code2: <Code2 size={14} />,
    Brain: <Brain size={14} />,
    Terminal: <Terminal size={24} />,
    TerminalSmall: <Terminal size={14} />,
    GraduationCap: <GraduationCap size={20} />,
    BookOpen: <BookOpen size={20} />,
    Globe: <Globe size={14} />,
    ShieldCheck: <ShieldCheck size={14} />,
    Box: <Box size={14} />,
    Cloud: <Cloud size={14} />,
    Briefcase: <Briefcase size={32} />,
    Award: <Award size={22} />,
    Lock: <Lock size={14} />,
    Binary: <Binary size={14} />,
    Cpu: <Cpu size={14} />
};

// --- Navbar Configuration ---
export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

// --- Hero Section Configuration ---
export const HERO_CONFIG = {
    photo: photo,
    roleBadge: PORTFOLIO_CONTENT.hero.roleBadge,
    hireStatusText: PORTFOLIO_CONTENT.hero.hireStatusText,
    mainTitlePrefix: PORTFOLIO_CONTENT.hero.mainTitlePrefix,
    mainTitleGradient: PORTFOLIO_CONTENT.hero.mainTitleGradient,
    architectRibbon: PORTFOLIO_CONTENT.hero.architectRibbon,
    devIdentityHint: PORTFOLIO_CONTENT.hero.devIdentityHint,
    fullName: PORTFOLIO_CONTENT.hero.fullName,
    subTitle: PORTFOLIO_CONTENT.hero.subTitle,
    tagline: formatHighlightText(PORTFOLIO_CONTENT.hero.taglineText),
    specializationsLabel: "TECHNICAL_SPECIALIZATIONS",
    specializations: PORTFOLIO_CONTENT.hero.specializations,
    resumePdfName: PORTFOLIO_CONTENT.hero.resumePdfName,
    signatureText: PORTFOLIO_CONTENT.hero.signatureText,
    signatureSub: PORTFOLIO_CONTENT.hero.signatureSub
};

// --- Projects Configuration ---
const PROJECT_IMAGES = {
    novels_img: novels_img,
    solar_img: solar_img
};

export const PROJECTS = PORTFOLIO_CONTENT.projects.map(p => ({
    ...p,
    img: PROJECT_IMAGES[p.imgKey] || novels_img
}));

// --- Professions (Text Cycle) ---
export const PROFESSIONS = PORTFOLIO_CONTENT.professions;

// --- Social & Contact Config ---
export const CONTACT_CONFIG = PORTFOLIO_CONTENT.contact;

// --- Quick Links ---
export const QUICK_LINKS = [
    { img: githubLogo, title: 'GitHub', link: CONTACT_CONFIG.github },
    { img: linkedinLogo, title: 'LinkedIn', link: CONTACT_CONFIG.linkedin },
    { img: gmailLogo, title: 'Email', link: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_CONFIG.email}` },
    { img: whatsappLogo, title: 'WhatsApp', link: CONTACT_CONFIG.whatsapp },
    { img: instagramLogo, title: 'Instagram', link: CONTACT_CONFIG.instagram },
    { img: null, title: 'X', link: CONTACT_CONFIG.twitter },
    { img: telegramLogo, title: 'Telegram', link: CONTACT_CONFIG.telegram },
];

// --- Info Cards ---
export const INFO_CARDS = [
    { label: 'Expertise', value: 'Python, Problem Solving', icon: '💼' },
    { label: 'Contact', value: CONTACT_CONFIG.email, icon: '📧' },
    { label: 'Location', value: CONTACT_CONFIG.location, icon: '📍' },
];

// --- About Section Configuration ---
export const ABOUT_CONFIG = {
    photo: photo,
    badge: PORTFOLIO_CONTENT.about.badge,
    titlePrefix: PORTFOLIO_CONTENT.about.titlePrefix,
    titleGradient: PORTFOLIO_CONTENT.about.titleGradient,
    desc: PORTFOLIO_CONTENT.about.desc,
    academicBadge: PORTFOLIO_CONTENT.about.academicBadge,
    academicSubtitlePrefix: PORTFOLIO_CONTENT.about.academicSubtitlePrefix,
    academicSubtitleGradient: PORTFOLIO_CONTENT.about.academicSubtitleGradient,
    aboutText: formatAboutHighlightText(PORTFOLIO_CONTENT.about.aboutText),
    pillars: PORTFOLIO_CONTENT.about.pillars
};

// --- Experiences Configuration ---
export const EXPERIENCES = PORTFOLIO_CONTENT.experiences.map(e => ({
    ...e,
    companyRaw: e.company
}));

// --- Education Configuration ---
export const EDUCATION = PORTFOLIO_CONTENT.education;

export const EDUCATION_LOGOMAP = {
    logo_giet: logo_giet,
    logo_secondary: logo_secondary,
    dadhibaman: "/dadhibaman-logo.jpg"
};

// --- Skills Categories Configuration ---
export const SKILLS_CATEGORIES = PORTFOLIO_CONTENT.skillsCategories.map(cat => ({
    ...cat,
    skills: cat.skills.map(skill => ({
        ...skill,
        logo: skill.logoUrl
    }))
}));

// --- Certificates Configuration ---
const CERT_IMAGES = {
    coursera_genai: cert_google,
    coursera_cybersecurity: cert_ibm,
    deloitte_data_analytics: cert_deloitte,
    nxtwave_responsive: cert_nxtwave,
    giet_iccoset_conf: cert_giet_conf,
    codtech_python: cert_codtech,
    simplilearn_software_dev: cert_simplilearn,
    codec_python_achievement: cert_codec,
    nxtwave_autonomous: cert_autonomous,
    giet_suravi_model: cert_suravi,
    giet_cad_bootcamp: cert_cad,
    giet_drone_bootcamp: cert_drone,
    coursera_gemini: cert_gemini,
    coursera_wordpress: cert_wordpress,
    nxtwave_static: cert_static,
    codec_python_internship: cert_codec_intern,
    giet_nccengt_paper: cert_nccengt,
    workshop: cert_workshop,
    deloatte_2: cert_deloatte_2,
    cyber_awareness: cert_cyber_awareness,
    nxtwave_alt: cert_nxtwave_alt,
    hackerrank: cert_hackerrank
};

export const CERTIFICATES = PORTFOLIO_CONTENT.certificates.map(c => ({
    ...c,
    img: CERT_IMAGES[c.imgKey]
}));

export const CERTIFICATES_CATEGORIES = [
    { id: 'ALL', label: 'All' },
    { id: 'GIET', label: 'GIET', logo: logo_giet },
    { id: 'COURSERA', label: 'Coursera', logo: logo_coursera },
    { id: 'NXTWAVE', label: 'NxtWave', logo: logo_nxtwave },
    { id: 'COMPANY', label: "Company's", logo: logo_hp }
];

// --- Core Achievements Config ---
export const ACHIEVEMENTS = PORTFOLIO_CONTENT.achievements;

// --- Resume Specific Config ---
export const RESUME_ACHIEVEMENTS = PORTFOLIO_CONTENT.resume.achievements;

export const RESUME_CONFIG = {
    summary: PORTFOLIO_CONTENT.resume.summary,
    subTitle1: PORTFOLIO_CONTENT.resume.subTitle1,
    subTitle2: PORTFOLIO_CONTENT.resume.subTitle2,
    pdfPath: PORTFOLIO_CONTENT.resume.pdfPath
};

// --- System/Footer Config ---
export const SYSTEM_CONFIG = {
    archiveStatusText: PORTFOLIO_CONTENT.system.archiveStatusText,
    deploymentVersion: PORTFOLIO_CONTENT.system.deploymentVersion,
    copyrightText: PORTFOLIO_CONTENT.system.copyrightText
};

// --- Blog Posts Configuration ---
export const BLOG_POSTS = PORTFOLIO_CONTENT.blog;
