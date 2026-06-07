// =========================================================================
//                     PORTFOLIO CONTENT CONFIGURATION
// =========================================================================
// Change any text, links, or values below to update your entire portfolio!
// No coding knowledge is required to edit this file.
// =========================================================================

export const PORTFOLIO_CONTENT = {
  // =========================================================================
  // 1. SYSTEM & GENERAL SETTINGS
  // =========================================================================
  system: {
    archiveStatusText: "ARCHIVE_STATUS: PRODUCTION_READY",
    deploymentVersion: "DEPLOYMENT_V: 2.4.0_STABLE",
    copyrightText: "Designed & Engineered by Lokanath Meher // © 2026", // Copyright text in footer
  },

  // =========================================================================
  // 2. CONTACT DETAILS & SOCIAL LINKS
  // =========================================================================
  contact: {
    email: "meherlokanath314@gmail.com",
    phone: "+91 9937164359",
    location: "Bargah, Odisha, 768028",
    bhubaneswarLocation: "Bhubaneswar, India", // Shown in resume location
    
    // Social Media Profile Links
    github: "https://github.com/lokanathmeher19",
    linkedin: "https://www.linkedin.com/in/lokanath-meher-a79506353/",
    instagram: "https://www.instagram.com/syntxerror_01/",
    twitter: "https://x.com/Lokanath_meher_",
    telegram: "http://t.me/ScorpioX99",
    
    // WhatsApp preloaded message link
    whatsapp: "https://wa.me/919937164359?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect",
    
    // API QR Code link (uses your LinkedIn link)
    linkedinQrApiUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.linkedin.com/in/lokanath-meher-a79506353/",
    
    // Text shown on the Contact section
    contactParagraph: "Available for freelance projects, open-source collaboration, and strategic consultations."
  },

  // =========================================================================
  // 3. HERO SECTION
  // =========================================================================
  hero: {
    roleBadge: "Software Development Engineer",
    hireStatusText: "AVAILABLE FOR HIRE",
    mainTitlePrefix: "Building the ",
    mainTitleGradient: "Digital Future",
    architectRibbon: "SOFTWARE DEVELOPER",
    devIdentityHint: "DEV_IDENTITY",
    fullName: "Lokanath Meher",
    subTitle: "Hi, I'm ",
    taglineText: "I build **scalable web applications** and **secure digital solutions**",
    resumePdfName: "Lokanath_Meher_Resume.pdf", // The resume PDF file to download/preview
    signatureText: "Lokanath Meher",          // Script signature font text on the back card
    signatureSub: "Software Developer",        // Subtext below the signature
    
    // The three modules/cards shown in the Hero section
    specializations: [
      { label: "Full-Stack Developer", icon: "Layers", desc: "MERN Stack apps" },
      { label: "Python Developer", icon: "Code2", desc: "Logic & Scripts" },
      { label: "DSA Solver", icon: "Brain", desc: "Problem Solving", isDeep: true } // isDeep adds glowing effects
    ]
  },

  // =========================================================================
  // 4. ABOUT ME SECTION
  // =========================================================================
  about: {
    badge: "ABOUT ME",
    titlePrefix: "Core",
    titleGradient: "Identity",
    desc: "Mapping the technical frameworks and design philosophies behind the creator.",
    academicBadge: "Academic Profile",
    academicSubtitlePrefix: "Building Secure, ",
    academicSubtitleGradient: "Intelligent Systems",
    
    // Main about description paragraph
    aboutText: "I am a dedicated **Computer Science Engineering student** at GIET University. My engineering philosophy revolves around writing clean, well-architected code that prioritizes execution speed and strict defensive integrations.",
    
    // 4 pillar boxes in About section
    pillars: [
      { title: "Engineering", desc: "Data Structures, algorithms, optimization routines.", icon: "💻", color: "#3b82f6" },
      { title: "Security", desc: "Threat parsing, zero-trust system implementations.", icon: "🛡️", color: "#ef4444" },
      { title: "Architecture", desc: "MERN stack ecosystems, state caching procedures.", icon: "🌐", color: "#10b981" },
      { title: "Vision", desc: "Adapting neural AI tooling securely into legacy code.", icon: "🚀", color: "#f59e0b" }
    ]
  },

  // =========================================================================
  // 5. PROJECTS SECTION
  // =========================================================================
  projects: [
    {
      title: 'BARESKIN',
      desc: "A premium full-stack e-commerce platform with secure authentication, cart management, and integrated payment gateway.",
      category: 'Web',
      tag: 'E-COMMERCE',
      color: '#ff4b6e',
      imgKey: 'novels_img', // References novels.png
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
      imgKey: 'solar_img',  // References solar.png
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
      imgKey: 'novels_img',
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
      imgKey: 'solar_img',
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
      imgKey: 'novels_img',
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
      imgKey: 'solar_img',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      live: '#',
      github: 'https://github.com/lokanathmeher19/golf-charity-app',
      btnText: 'View App'
    }
  ],

  // =========================================================================
  // 6. PROFESSIONS (Text typing cycle under hero section)
  // =========================================================================
  professions: [
    'Cyber Threat Analyst (Learner)',
    'Python Programmer',
    'MERN Full-Stack Architect',
    'Computer Science Engineer',
  ],

  // =========================================================================
  // 7. KEY STATISTICS & ACHIEVEMENTS
  // =========================================================================
  achievements: [
    { label: "PROJECTS_DEPLOYED", value: "10+", sub: "Full-stack & AI", color: "#22d3ee" },
    { label: "CERTS_VALIDATED", value: "20+", sub: "Industry Credentials", color: "#a855f7" },
    { label: "ALGORITHMIC_SCORE", value: "1.2k+", sub: "Problem Solving", color: "#3b82f6" },
    { label: "GITHUB_COMMITS", value: "500+", sub: "Yearly Activity", color: "#10b981" }
  ],

  // =========================================================================
  // 8. WORK EXPERIENCE
  // =========================================================================
  experiences: [
    {
      role: "Python Programming Intern",
      company: "Codec Networks",
      period: "June 2023 — August 2023",
      periodShort: "June 2023 — Aug 2023", // Short format for Home page
      location: "New Delhi, India (Remote)",
      locationShort: "Remote (India)",      // Short location for Home page
      
      // Detailed bullets (shown in Resume page)
      desc: [
        "Architected and optimized Python-driven automation scripts, reducing manual processing time by approximately 30%.",
        "Developed robust backend modules using Flask framework and integrated complex SQL database schemas.",
        "Collaborated in an Agile environment to debug production issues and enhance system reliability.",
        "Implemented secure authentication protocols and optimized API response times for internal tools."
      ],
      
      // Brief paragraph (shown in Home page)
      summary: "Architected automated Python scripts for high-volume data processing and engineered backend modules using the Flask framework. Collaborated on production-level code optimization and security protocols.",
      color: "var(--accent-cyan)",
      iconName: "Terminal"
    }
  ],

  // =========================================================================
  // 9. EDUCATION MILESTONES
  // =========================================================================
  education: [
    {
      id: 'giet',
      label: "DEGREE_COURSE",
      degree: "Computer Science Engineering",
      degreeFull: "B.Tech in Computer Science & Engineering", // Used in resume
      institution: "GIET University, Bhubaneswar",
      institutionShort: "GIET Bhubaneswar (B.Tech)",           // Used in 3D Stack layout
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
      color: "#818cf8",
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
      color: "#60a5fa",
      iconName: "Terminal",
      logoType: "logo_secondary",
      logoScale: 1.4
    }
  ],

  // =========================================================================
  // 10. TECHNICAL SKILLS CATEGORIES
  // =========================================================================
  skillsCategories: [
    {
      title: "Engineering Core",
      desc: "Foundational software principles, algorithmic integrity, and systems-level logic.",
      iconName: "Terminal",
      color: "#06b6d4",
      classes: "col-span-12 lg:col-span-12",
      specialEffect: "floating-logos", // Adds floating background effect
      skills: [
        { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 98 },
        { name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/cplusplus/cplusplus-original.svg", level: 85 },
        { name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/java/java-original.svg", level: 88 },
        { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/javascript/javascript-original.svg", level: 92 },
        { name: "C Language", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/c/c-original.svg", level: 80 },
        { name: "HTML5 & CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/html5/html5-original.svg", level: 95 },
        { name: "Data Structures", iconName: "Binary", level: 90 },
        { name: "Problem Solving", iconName: "Brain", level: 94 },
        { name: "OOPS Concepts", iconName: "Layers", level: 88 },
        { name: "DBMS / SQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mysql/mysql-original.svg", level: 85 },
        { name: "OS Fundamentals", iconName: "Cpu", level: 80 },
        { name: "Computer Networks", iconName: "Globe", level: 78 },
        { name: "Algorithms", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 90 },
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
        { name: "React.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg", level: 95 },
        { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original.svg", level: 90 },
        { name: "Express.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/express/express-original.svg", level: 88, filter: 'invert(1)' },
        { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg", level: 85 },
        { name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/typescript/typescript-original.svg", level: 80 },
        { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nextjs/nextjs-original.svg", level: 82, filter: 'invert(1)' },
        { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/tailwindcss/tailwindcss-original.svg", level: 95 },
        { name: "GraphQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/graphql/graphql-plain.svg", level: 75 },
        { name: "Socket.io", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/socketio/socketio-original.svg", level: 80, filter: 'invert(1)' },
        { name: "REST APIs", iconName: "TerminalSmall", level: 95 },
        { name: "Redux / Toolkit", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/redux/redux-original.svg", level: 85 },
        { name: "Storybook", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/storybook/storybook-original.svg", level: 80 }
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
        { name: "Kali Linux", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg", level: 85 },
        { name: "Metasploit", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg", level: 78 },
        { name: "Nmap Sec", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/c/c-original.svg", level: 82 },
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
        { name: "Git Workflow", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg", level: 92 },
        { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/docker/docker-original.svg", level: 88 },
        { name: "Jenkins CI/CD", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jenkins/jenkins-original.svg", level: 85 },
        { name: "Linux Arch", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg", level: 88 }
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
        { name: "AWS Cloud", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 82, filter: 'invert(1)' },
        { name: "GCP Services", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/googlecloud/googlecloud-original.svg", level: 78 },
        { name: "Supabase DB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/supabase/supabase-original.svg", level: 85 },
        { name: "Netlify Dep", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/netlify/netlify-original.svg", level: 88 }
      ]
    }
  ],

  // =========================================================================
  // 11. CERTIFICATES & CREDENTIALS
  // =========================================================================
  certificates: [
    { title: "Intro to Generative AI", issuer: "Google Cloud", org: "Google Cloud", date: "2025", imgKey: "coursera_genai", color: "#4285F4", category: 'COMPANY', tab: 'coursera' },
    { title: "Cybersecurity Essentials", issuer: "IBM", org: "IBM", date: "2025", imgKey: "coursera_cybersecurity", color: "#052FAD", category: 'COMPANY', tab: 'coursera' },
    { title: "Data Analytics Simulation", issuer: "Deloitte", org: "Deloitte", date: "2025", imgKey: "deloitte_data_analytics", color: "#86BC25", category: 'COMPANY', tab: 'other' },
    { title: "Responsive Web Dev Mastery", issuer: "NxtWave", org: "NxtWave", date: "2025", imgKey: "nxtwave_responsive", color: "#22d3ee", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "ICCOSET 2024 Conference", issuer: "GIET", org: "GIET", date: "2024", imgKey: "giet_iccoset_conf", color: "#f97316", category: 'GIET', tab: 'giet' },
    { title: "Python Development Exp.", issuer: "CodTech", org: "CodTech", date: "2025", imgKey: "codtech_python", color: "#3776ab", category: 'COMPANY', tab: 'other' },
    { title: "Full Stack Development", issuer: "Simplilearn", org: "Simplilearn", date: "2025", imgKey: "simplilearn_software_dev", color: "#ff9900", category: 'COMPANY', tab: 'other' },
    { title: "Python Achievement Cert", issuer: "Codec", org: "Codec Tech", date: "2025", imgKey: "codec_python_achievement", color: "#8b5cf6", category: 'COMPANY', tab: 'other' },
    { title: "Autonomous Vehicle Sys", issuer: "NxtWave", org: "NxtWave", date: "2025", imgKey: "nxtwave_autonomous", color: "#06b6d4", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "Model Fiesta 2025", issuer: "SURAVI", org: "GIET", date: "2025", imgKey: "giet_suravi_model", color: "#ec4899", category: 'COMPANY', tab: 'giet' },
    { title: "CAD Design Foundations", issuer: "NIELIT", org: "NIELIT & GIET", date: "2025", imgKey: "giet_cad_bootcamp", color: "#10b981", category: 'COMPANY', tab: 'giet' },
    { title: "Drone Aerodynamics", issuer: "NIELIT", org: "NIELIT", date: "2025", imgKey: "giet_drone_bootcamp", color: "#e11d48", category: 'COMPANY', tab: 'giet' },
    { title: "Google Gemini AI Acad.", issuer: "Google", org: "Google Cloud", date: "2025", imgKey: "coursera_gemini", color: "#4285F4", category: 'COMPANY', tab: 'coursera' },
    { title: "WordPress Dev Pro", issuer: "Coursera", org: "Coursera", date: "2025", imgKey: "coursera_wordpress", color: "#21759b", category: 'COURSERA', tab: 'coursera' },
    { title: "Static Website Design", issuer: "NxtWave", org: "NxtWave", date: "2025", imgKey: "nxtwave_static", color: "#22d3ee", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "Python Tech Internship", issuer: "Codec", org: "Codec Tech", date: "2025", imgKey: "codec_python_internship", color: "#8b5cf6", category: 'COMPANY', tab: 'other' },
    { title: "Research Paper (GIET)", issuer: "NCCENGT", org: "GIET", date: "2025", imgKey: "giet_nccengt_paper", color: "#f97316", category: 'GIET', tab: 'giet' },
    { title: "Industrial Workshop", issuer: "Skill dev", org: "Skill dev", date: "2025", imgKey: "workshop", color: "#8b5cf6", category: 'COMPANY', tab: 'other' },
    { title: "Deloitte Consulting Sim.", issuer: "Deloitte", org: "Deloitte", date: "2025", imgKey: "deloatte_2", color: "#86BC25", category: 'COMPANY', tab: 'other' },
    { title: "Cybersecurity Awareness", issuer: "Cisco", org: "Cisco", date: "2025", imgKey: "cyber_awareness", color: "#00bceb", category: 'COMPANY', tab: 'coursera' },
    { title: "NxtWave Professional", issuer: "Mastery", org: "NxtWave", date: "2025", imgKey: "nxtwave_alt", color: "#22d3ee", category: 'NXTWAVE', tab: 'nxtwave' },
    { title: "HackerRank Skills Gold", issuer: "HackerRank", org: "HackerRank", date: "2025", imgKey: "hackerrank", color: "#2ec866", category: 'COMPANY', tab: 'other' }
  ],

  // =========================================================================
  // 12. RESUME PAGE CONFIGURATION
  // =========================================================================
  resume: {
    summary: "Result-driven Computer Science Engineering student with a deep focus on software architecture and full-cycle application development. Expert in building scalable web solutions using the MERN stack and optimizing business logic through Python automation. Proven track record of delivering high-performance code, collaborating in cross-functional teams, and maintaining security-first development practices.",
    subTitle1: "B.Tech CSE Undergraduate",
    subTitle2: "Full-Stack Developer",
    pdfPath: "Lokanath_Meher_Resume.pdf",
    
    // Distinctions listed at the bottom right of the Resume
    achievements: [
      { title: "NxtWave Intensive Participant", detail: "Focused on MERN Stack excellence and industry-ready development." },
      { title: "ICCOSET 2024 Contributor", detail: "Actively participated in International Conference on Emerging Technologies." },
      { title: "Open Source Contributor", detail: "Regularly contributing to personal and community projects on GitHub." }
    ]
  },

  // =========================================================================
  // 13. BLOG POSTS
  // =========================================================================
  blog: [
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
  ]
};
