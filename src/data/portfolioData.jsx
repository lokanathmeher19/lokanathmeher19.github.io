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
    roleBadge: "Software Development Engineer",
    hireStatusText: "AVAILABLE FOR HIRE",
    mainTitlePrefix: "Building the ",
    mainTitleGradient: "Digital Future",
    architectRibbon: "SOFTWARE DEVELOPER",
    devIdentityHint: "DEV_IDENTITY",
    fullName: "Lokanath Meher",
    subTitle: "Hi, I'm ",
    tagline: formatHighlightText("I build **scalable web applications** and **secure digital solutions**"),
    specializationsLabel: "TECHNICAL_SPECIALIZATIONS",
    specializations: [
      { label: "Full-Stack Developer", icon: "Layers", desc: "MERN Stack apps" },
      { label: "Python Developer", icon: "Code2", desc: "Logic & Scripts" },
      { label: "DSA Solver", icon: "Brain", desc: "Problem Solving", isDeep: true }
    ],
    resumePdfName: "Lokanath_Meher_Resume.pdf",
    signatureText: "Lokanath Meher",
    signatureSub: "Software Developer"
};

// --- Projects Configuration ---
export const PROJECTS = [
    {
      title: 'BARESKIN',
      desc: "A premium full-stack e-commerce platform with secure authentication, cart management, and integrated payment gateway.",
      category: 'Web',
      tag: 'E-COMMERCE',
      color: '#ff4b6e',
      img: novels_img,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/BARESKIN',
      btnText: 'Launch App'
    },
    {
      title: 'TruthGuard AI',
      desc: 'Advanced multi-modal forensic system detecting deepfakes across images, videos, and audio using synthetic pattern analysis.',
      category: 'AI',
      tag: 'ARTIFICIAL INTELLIGENCE',
      color: '#8b5cf6',
      img: solar_img,
      tech: ['Python', 'OpenCV', 'React', 'Metadata Analysis'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/TruthGuard_AI',
      btnText: 'Try AI'
    },
    {
      title: 'SambalpuriHUB',
      desc: 'Cultural e-commerce platform dedicated to Odisha heritage, connecting local artisans with global handloom enthusiasts.',
      category: 'Web',
      tag: 'CULTURAL TECH',
      color: '#10b981',
      img: novels_img,
      tech: ['React 18', 'Vite', 'TypeScript', 'Tailwind'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/sambalpuriHUB',
      btnText: 'Explore Culture'
    },
    {
      title: 'Internet Speed Test',
      desc: 'Independent, production-ready internet speed testing platform designed for high-performance network diagnostics.',
      category: 'Web',
      tag: 'UTILITY',
      color: '#0ea5e9',
      img: solar_img,
      tech: ['React', 'Node.js', 'Docker', 'Tailwind'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/Internetspeed_Test',
      btnText: 'Run Test'
    },
    {
      title: 'Cybersecurity Toolkit',
      desc: 'Professional security analysis suite featuring a Network Port Checker and Password Strength Analyzer.',
      category: 'Security',
      tag: 'CYBERSECURITY',
      color: '#22d3ee',
      img: novels_img,
      tech: ['Python', 'Networking', 'Security Logic'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/Cybersecurity_Project',
      btnText: 'Analyze'
    },
    {
      title: 'Golf Charity App',
      desc: 'Modern event management platform for promoting and organizing golf charity events with a seamless user experience.',
      category: 'Web',
      tag: 'EVENT TECH',
      color: '#f59e0b',
      img: solar_img,
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/golf-charity-app',
      btnText: 'View App'
    }
];

// --- Professions (Text Cycle) ---
export const PROFESSIONS = [
    'Cyber Threat Analyst (Learner)',
    'Python Programmer',
    'MERN Full-Stack Architect',
    'Computer Science Engineer',
];

// --- Social & Contact Config ---
export const CONTACT_CONFIG = {
    email: "meherlokanath314@gmail.com",
    phone: "+91 9937164359",
    location: "Bargah, Odisha, 768028",
    bhubaneswarLocation: "Bhubaneswar, India",
    github: "https://github.com/lokanathmeher19",
    linkedin: "https://www.linkedin.com/in/lokanath-meher-a79506353/",
    instagram: "https://www.instagram.com/syntxerror_01/",
    twitter: "https://x.com/Lokanath_meher_",
    telegram: "http://t.me/ScorpioX99",
    whatsapp: "https://wa.me/919937164359?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect",
    linkedinQrApiUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.linkedin.com/in/lokanath-meher-a79506353/",
    contactParagraph: "Available for freelance projects, open-source collaboration, and strategic consultations."
};

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
    badge: "ABOUT ME",
    titlePrefix: "Core",
    titleGradient: "Identity",
    desc: "Mapping the technical frameworks and design philosophies behind the creator.",
    academicBadge: "Academic Profile",
    academicSubtitlePrefix: "Building Secure, ",
    academicSubtitleGradient: "Intelligent Systems",
    aboutText: formatAboutHighlightText("I am a dedicated **Computer Science Engineering student** at GIET Bhubaneswar. My engineering philosophy revolves around writing clean, well-architected code that prioritizes execution speed and strict defensive integrations."),
    pillars: [
      { title: "Engineering", desc: "Data Structures, algorithms, optimization routines.", icon: "💻", color: "#3b82f6" },
      { title: "Security", desc: "Threat parsing, zero-trust system implementations.", icon: "🛡️", color: "#ef4444" },
      { title: "Architecture", desc: "MERN stack ecosystems, state caching procedures.", icon: "🌐", color: "#10b981" },
      { title: "Vision", desc: "Adapting neural AI tooling securely into legacy code.", icon: "🚀", color: "#f59e0b" }
    ]
};

// --- Experiences Configuration ---
export const EXPERIENCES = [
    {
      role: "Python Programming Intern",
      company: "Codec Networks",
      companyRaw: "Codec Networks",
      period: "June 2023 — August 2023",
      periodShort: "June 2023 — Aug 2023",
      location: "New Delhi, India (Remote)",
      locationShort: "Remote (India)",
      desc: [
        "Architected and optimized Python-driven automation scripts, reducing manual processing time by approximately 30%.",
        "Developed robust backend modules using Flask framework and integrated complex SQL database schemas.",
        "Collaborated in an Agile environment to debug production issues and enhance system reliability.",
        "Implemented secure authentication protocols and optimized API response times for internal tools."
      ],
      summary: "Architected automated Python scripts for high-volume data processing and engineered backend modules using the Flask framework. Collaborated on production-level code optimization and security protocols.",
      color: "var(--accent-cyan)",
      iconName: "Terminal"
    }
];

// --- Education Configuration ---

export const EDUCATION = [
    {
      id: 'giet',
      label: "DEGREE_COURSE",
      degree: "Computer Science Engineering",
      degreeFull: "B.Tech in Computer Science & Engineering",
      institution: "GIET Bhubaneswar",
      institutionShort: "GIET Bhubaneswar (B.Tech)",
      university: "BPUT Rourkela",
      period: "2024 — 2028",
      score: 8.5,
      grade: "8.5 CGPA (Current)",
      unit: "CGPA",
      features: ["OOPS", "Data Structures", "Security", "System Design", "Algorithms", "DBMS", "Computer Networking"],
      highlights: ["Data Structures & Algorithms", "Full Stack Development", "Operating Systems", "DBMS Architecture", "Software Engineering"],
      color: "#22d3ee",
      iconName: "Code2",
      logoType: "logo_giet"
    },
    {
      id: 'dadhibaman',
      label: "JUNIOR_COLLEGE",
      degree: "Higher Secondary",
      degreeFull: "Higher Secondary Education (Class XII)",
      institution: "Dadhi Baman Higher Secondary School",
      institutionShort: "Dadhi Baman Higher Secondary School, Bhatli",
      board: "CHSE Odisha",
      period: "2022 — 2024",
      score: 68,
      grade: "68% (Science)",
      unit: "%",
      features: ["Physics", "Chemistry", "Mathematics", "IT"],
      highlights: ["Mathematics", "Physics", "Chemistry", "Information Technology", "Analytical Thinking"],
      color: "#3b82f6",
      iconName: "Layers",
      logoType: "dadhibaman",
      logoScale: 1.2
    },
    {
      id: 'saiier',
      label: "SECONDARY_SCHOOL",
      degree: "Secondary Education",
      degreeFull: "Secondary Education",
      institution: "Sri Aurobindo Institute of Integral Education, Bargarh",
      institutionShort: "Sri Aurobindo Institute of Integral Education, Bargarh",
      board: "BSE Odisha",
      period: "2019 — 2022",
      score: 78,
      grade: "78% Overall",
      unit: "%",
      features: ["Odia", "English", "Sanskrit", "Mathematics", "Science"],
      highlights: ["Odia", "English", "Sanskrit", "Mathematics", "Science"],
      color: "#8b5cf6",
      iconName: "Terminal",
      logoType: "logo_secondary",
      logoScale: 1.4
    }
];

export const EDUCATION_LOGOMAP = {
    logo_giet: logo_giet,
    logo_secondary: logo_secondary,
    dadhibaman: "/dadhibaman-logo.jpg"
};

// --- Skills Categories Configuration ---
export const SKILLS_CATEGORIES = [
    {
      title: "Engineering Core",
      desc: "Foundational software principles, algorithmic integrity, and systems-level logic.",
      iconName: "Terminal",
      color: "#06b6d4",
      classes: "col-span-12 lg:col-span-12",
      specialEffect: "floating-logos",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 98 },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/cplusplus/cplusplus-original.svg", level: 85 },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/java/java-original.svg", level: 88 },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/javascript/javascript-original.svg", level: 92 },
        { name: "C Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/c/c-original.svg", level: 80 },
        { name: "HTML5 & CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/html5/html5-original.svg", level: 95 },
        { name: "Data Structures", iconName: "Binary", level: 90 },
        { name: "Problem Solving", iconName: "Brain", level: 94 },
        { name: "OOPS Concepts", iconName: "Layers", level: 88 },
        { name: "DBMS / SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mysql/mysql-original.svg", level: 85 },
        { name: "OS Fundamentals", iconName: "Cpu", level: 80 },
        { name: "Computer Networks", iconName: "Globe", level: 78 },
        { name: "Algorithms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 90 },
        { name: "System Design", iconName: "Layers", level: 85 }
      ]
    },
    {
      title: "MERN Full-stack",
      desc: "Full-cycle application development with modern reactive frameworks and scalable backends.",
      iconName: "Globe",
      color: "#a855f7",
      classes: "col-span-12 lg:col-span-8",
      specialEffect: "mern-bg",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg", level: 95 },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original.svg", level: 90 },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/express/express-original.svg", level: 88, filter: 'invert(1)' },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg", level: 85 },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/typescript/typescript-original.svg", level: 80 },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nextjs/nextjs-original.svg", level: 82, filter: 'invert(1)' },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/tailwindcss/tailwindcss-original.svg", level: 95 },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/graphql/graphql-plain.svg", level: 75 },
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/socketio/socketio-original.svg", level: 80, filter: 'invert(1)' },
        { name: "REST APIs", iconName: "TerminalSmall", level: 95 },
        { name: "Redux / Toolkit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/redux/redux-original.svg", level: 85 },
        { name: "Storybook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/storybook/storybook-original.svg", level: 80 }
      ]
    },
    {
      title: "Security",
      desc: "Resilient protocols & offensive research.",
      iconName: "ShieldCheck",
      color: "#f97316",
      classes: "col-span-12 lg:col-span-4",
      specialEffect: "security-bg",
      skills: [
        { name: "Kali Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg", level: 85 },
        { name: "Metasploit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 78 },
        { name: "Nmap Sec", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/c/c-original.svg", level: 82 },
        { name: "Cryptography", iconName: "Lock", level: 75 }
      ]
    },
    {
      title: "DevOps",
      desc: "Automation & deployment pipelines.",
      iconName: "Box",
      color: "#ec4899",
      classes: "col-span-12 lg:col-span-6",
      specialEffect: "devops-bg",
      skills: [
        { name: "Git Workflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg", level: 92 },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/docker/docker-original.svg", level: 88 },
        { name: "Jenkins CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jenkins/jenkins-original.svg", level: 85 },
        { name: "Linux Arch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg", level: 88 }
      ]
    },
    {
      title: "Cloud",
      desc: "Serverless & scalable infrastructure.",
      iconName: "Cloud",
      color: "#06b6d4",
      classes: "col-span-12 lg:col-span-6",
      specialEffect: "mern-bg",
      skills: [
        { name: "AWS Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 82, filter: 'invert(1)' },
        { name: "GCP Services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/googlecloud/googlecloud-original.svg", level: 78 },
        { name: "Supabase DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/supabase/supabase-original.svg", level: 85 },
        { name: "Netlify Dep", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/netlify/netlify-original.svg", level: 88 }
      ]
    }
];

// --- Certificates Configuration ---
export const CERTIFICATES = [
    { title: "Intro to Generative AI", issuer: "Google Cloud", org: "Google Cloud", date: "2025", img: cert_google, color: "#4285F4", category: 'COMPANY', tab: 'coursera' },
    { title: "Cybersecurity Essentials", issuer: "IBM", org: "IBM", date: "2025", img: cert_ibm, color: "#052FAD", category: 'COMPANY', tab: 'coursera' },
    { title: "Data Analytics Simulation", issuer: "Deloitte", org: "Deloitte", date: "2025", img: cert_deloitte, color: "#86BC25", category: 'COMPANY', tab: 'other' },
    { title: "Responsive Web Dev Mastery", issuer: "NxtWave", org: "NxtWave", date: "2025", img: cert_nxtwave, color: "#22d3ee", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "ICCOSET 2024 Conference", issuer: "GIET", org: "GIET", date: "2024", img: cert_giet_conf, color: "#f97316", category: 'GIET', tab: 'giet' },
    { title: "Python Development Exp.", issuer: "CodTech", org: "CodTech", date: "2025", img: cert_codtech, color: "#3776ab", category: 'COMPANY', tab: 'other' },
    { title: "Full Stack Development", issuer: "Simplilearn", org: "Simplilearn", date: "2025", img: cert_simplilearn, color: "#ff9900", category: 'COMPANY', tab: 'other' },
    { title: "Python Achievement Cert", issuer: "Codec", org: "Codec Tech", date: "2025", img: cert_codec, color: "#8b5cf6", category: 'COMPANY', tab: 'other' },
    { title: "Autonomous Vehicle Sys", issuer: "NxtWave", org: "NxtWave", date: "2025", img: cert_autonomous, color: "#06b6d4", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "Model Fiesta 2025", issuer: "SURAVI", org: "GIET", date: "2025", img: cert_suravi, color: "#ec4899", category: 'COMPANY', tab: 'giet' },
    { title: "CAD Design Foundations", issuer: "NIELIT", org: "NIELIT & GIET", date: "2025", img: cert_cad, color: "#10b981", category: 'COMPANY', tab: 'giet' },
    { title: "Drone Aerodynamics", issuer: "NIELIT", org: "NIELIT", date: "2025", img: cert_drone, color: "#e11d48", category: 'COMPANY', tab: 'giet' },
    { title: "Google Gemini AI Acad.", issuer: "Google", org: "Google Cloud", date: "2025", img: cert_gemini, color: "#4285F4", category: 'COMPANY', tab: 'coursera' },
    { title: "WordPress Dev Pro", issuer: "Coursera", org: "Coursera", date: "2025", img: cert_wordpress, color: "#21759b", category: 'COURSERA', tab: 'coursera' },
    { title: "Static Website Design", issuer: "NxtWave", org: "NxtWave", date: "2025", img: cert_static, color: "#22d3ee", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "Python Tech Internship", issuer: "Codec", org: "Codec Tech", date: "2025", img: cert_codec_intern, color: "#8b5cf6", category: 'COMPANY', tab: 'other' },
    { title: "Research Paper (GIET)", issuer: "NCCENGT", org: "GIET", date: "2025", img: cert_nccengt, color: "#f97316", category: 'GIET', tab: 'giet' },
    { title: "Industrial Workshop", issuer: "Skill dev", org: "Skill dev", date: "2025", img: cert_workshop, color: "#8b5cf6", category: 'COMPANY', tab: 'other' },
    { title: "Deloitte Consulting Sim.", issuer: "Deloitte", org: "Deloitte", date: "2025", img: cert_deloatte_2, color: "#86BC25", category: 'COMPANY', tab: 'other' },
    { title: "Cybersecurity Awareness", issuer: "Cisco", org: "Cisco", date: "2025", img: cert_cyber_awareness, color: "#00bceb", category: 'COMPANY', tab: 'coursera' },
    { title: "NxtWave Professional", issuer: "Mastery", org: "NxtWave", date: "2025", img: cert_nxtwave_alt, color: "#22d3ee", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "HackerRank Skills Gold", issuer: "HackerRank", org: "HackerRank", date: "2025", img: cert_hackerrank, color: "#2ec866", category: 'COMPANY', tab: 'other' }
];

export const CERTIFICATES_CATEGORIES = [
    { id: 'ALL', label: 'All' },
    { id: 'GIET', label: 'GIET', logo: logo_giet },
    { id: 'COURSERA', label: 'Coursera', logo: logo_coursera },
    { id: 'NXTWAVE', label: 'NxtWave', logo: logo_nxtwave },
    { id: 'COMPANY', label: "Company's", logo: logo_hp }
];

// --- Core Achievements Config ---
export const ACHIEVEMENTS = [
    { label: "PROJECTS_DEPLOYED", value: "10+", sub: "Full-stack & AI", color: "#22d3ee" },
    { label: "CERTS_VALIDATED", value: "20+", sub: "Industry Credentials", color: "#a855f7" },
    { label: "ALGORITHMIC_SCORE", value: "1.2k+", sub: "Problem Solving", color: "#3b82f6" },
    { label: "GITHUB_COMMITS", value: "500+", sub: "Yearly Activity", color: "#10b981" }
];

// --- Resume Specific Config ---
export const RESUME_ACHIEVEMENTS = [
    { title: "NxtWave Intensive Participant", detail: "Focused on MERN Stack excellence and industry-ready development." },
    { title: "ICCOSET 2024 Contributor", detail: "Actively participated in International Conference on Emerging Technologies." },
    { title: "Open Source Contributor", detail: "Regularly contributing to personal and community projects on GitHub." }
];

export const RESUME_CONFIG = {
    summary: "Result-driven Computer Science Engineering student with a deep focus on software architecture and full-cycle application development. Expert in building scalable web solutions using the MERN stack and optimizing business logic through Python automation. Proven track record of delivering high-performance code, collaborating in cross-functional teams, and maintaining security-first development practices.",
    subTitle1: "B.Tech CSE Undergraduate",
    subTitle2: "Full-Stack Developer",
    pdfPath: "Lokanath_Meher_Resume.pdf"
};

// --- System/Footer Config ---
export const SYSTEM_CONFIG = {
    archiveStatusText: "ARCHIVE_STATUS: PRODUCTION_READY",
    deploymentVersion: "DEPLOYMENT_V: 2.4.0_STABLE",
    copyrightText: "Designed & Engineered by Lokanath Meher // © 2026"
};

// --- Blog Posts Configuration ---
export const BLOG_POSTS = [
    {
      id: 1,
      title: "Why I Love Building AI Projects",
      text: "Working on AI-based systems like mammogram cancer detection has taught me how impactful technology can be when applied to healthcare. Combining deep learning with real-world problems is my favorite way to innovate.",
      date: "Oct 12, 2024"
    },
    {
      id: 2,
      title: "My Thoughts on Design & Aesthetics",
      text: "I believe design should be a balance between functionality and emotion. Dark themes with minimalist layouts always inspire me to create something that feels personal and futuristic.",
      date: "Nov 05, 2024"
    },
    {
      id: 3,
      title: "Balancing Tech and Creativity",
      text: "As someone who codes and dances, I’ve realized creativity isn’t limited to art — it also lives in algorithms. Each project is like choreography for the mind.",
      date: "Dec 20, 2024"
    }
];
