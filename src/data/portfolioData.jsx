import { 
    BookOpen, 
    Orbit, 
    ShoppingBag, 
    ShieldAlert, 
    Activity, 
    Globe, 
    Smartphone,
    Brain
} from 'lucide-react';

import novels_img from '../assets/novels.png';
import solar_img from '../assets/solar.png';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import gmailLogo from '../assets/gmail.png';
import whatsappLogo from '../assets/whatsapp.png';
import instagramLogo from '../assets/insta.png';
import telegramLogo from '../assets/telegram.png';

export const PROJECTS = [
    {
        title: 'BARESKIN',
        desc: "A full-stack e-commerce application featuring secure user authentication, shopping cart management, and a fully integrated payment gateway.",
        category: 'Web',
        tag: 'E-COMMERCE',
        color: '#ff4b6e',
        icon: <ShoppingBag size={28} color="white" />,
        img: novels_img,
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        live: '#',
        github: 'https://github.com/lokanathmeher19/BARESKIN',
        btnText: 'Launch App'
    },
    {
        title: 'TruthGuard AI',
        desc: 'An AI-powered system designed to detect deepfakes across images, videos, and audio by analyzing synthetic patterns and metadata.',
        category: 'AI',
        tag: 'ARTIFICIAL INTELLIGENCE',
        color: '#8b5cf6',
        icon: <Brain size={28} color="white" />,
        img: solar_img,
        tech: ['Python', 'OpenCV', 'React', 'Metadata Analysis'],
        live: '#',
        github: 'https://github.com/lokanathmeher19/TruthGuard_AI',
        btnText: 'Try AI'
    },
    {
        title: 'SambalpuriHUB',
        desc: 'A cultural e-commerce platform that connects local Odisha handloom artisans directly with global customers, built with React and Tailwind.',
        category: 'Web',
        tag: 'CULTURAL TECH',
        color: '#10b981',
        icon: <Globe size={28} color="white" />,
        img: novels_img,
        tech: ['React 18', 'Vite', 'TypeScript', 'Tailwind'],
        live: '#',
        github: 'https://github.com/lokanathmeher19/sambalpuriHUB',
        btnText: 'Explore Culture'
    },
    {
        title: 'Internet Speed Test',
        desc: 'A fast, responsive web application that accurately measures user internet speed and provides real-time network diagnostics.',
        category: 'Web',
        tag: 'UTILITY',
        color: '#0ea5e9',
        icon: <Activity size={28} color="white" />,
        img: solar_img,
        tech: ['React', 'Node.js', 'Docker', 'Tailwind'],
        live: '#',
        github: 'https://github.com/lokanathmeher19/Internetspeed_Test',
        btnText: 'Run Test'
    },
    {
        title: 'Cybersecurity Toolkit',
        desc: 'A collection of professional security tools including a Network Port Checker and a real-time Password Strength Analyzer.',
        category: 'Security',
        tag: 'CYBERSECURITY',
        color: '#22d3ee',
        icon: <ShieldAlert size={28} color="white" />,
        img: novels_img,
        tech: ['Python', 'Networking', 'Security Logic'],
        live: '#',
        github: 'https://github.com/lokanathmeher19/Cybersecurity_Project',
        btnText: 'Analyze'
    },
    {
        title: 'Golf Charity App',
        desc: 'A modern event management web app built with Next.js to help organize, promote, and manage charity golf tournaments.',
        category: 'Web',
        tag: 'EVENT TECH',
        color: '#f59e0b',
        icon: <Smartphone size={28} color="white" />,
        img: solar_img,
        tech: ['Next.js', 'React', 'Tailwind CSS'],
        live: '#',
        github: 'https://github.com/lokanathmeher19/golf-charity-app',
        btnText: 'View App'
    }
];

export const PROFESSIONS = [
    'Cyber Threat Analyst (Learner)',
    'Python Programmer',
    'MERN Full-Stack Architect',
    'Computer Science Engineer',
];

export const QUICK_LINKS = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/lokanathmeher19' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/lokanath-meher-a79506353/' },
    { img: gmailLogo, title: 'Email', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=meherlokanath314@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/919937164359?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/syntxerror_01/' },
    { img: null, title: 'X', link: 'https://x.com/Lokanath_meher_' },
    { img: telegramLogo, title: 'Telegram', link: 'http://t.me/ScorpioX99' },
];


