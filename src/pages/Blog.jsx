import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";

export default function Blog() {
  const defaultPosts = [
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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const currentVote = votedByUser[id];
    let nextPosts;
    let newVotedByUser = { ...votedByUser };
    let action = "";

    if (currentVote === type) {
      nextPosts = posts.map((p) => p.id === id ? { ...p, [type]: Math.max(0, p[type] - 1), userVote: null } : p);
      delete newVotedByUser[id];
      action = `removed their ${type} vote from`;
    } else if (currentVote) {
      nextPosts = posts.map((p) => p.id === id ? { ...p, [currentVote]: Math.max(0, p[currentVote] - 1), [type]: p[type] + 1, userVote: type } : p);
      newVotedByUser[id] = type;
      action = `switched their vote to ${type} on`;
    } else {
      nextPosts = posts.map((p) => p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p);
      newVotedByUser[id] = type;
      action = `voted ${type} on`;
    }

    setPosts(nextPosts);
    const votes = Object.fromEntries(nextPosts.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }]));
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem("kd_blog_voted", JSON.stringify(newVotedByUser));

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceID && templateID && publicKey) {
      const postTitle = posts.find((p) => p.id === id)?.title;
      emailjs.send(serviceID, templateID, { from_name: "Blog Visitor", subject: `Blog Interaction: ${postTitle}`, message: `A user has ${action} : "${postTitle}".` }, publicKey);
    }
  }

  return (
    <div className="content-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.h4 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '5px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '20px' }}>Reflections</motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="title-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-heading)' }}>Digital Discourse</motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
          {posts.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-panel"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ color: 'var(--accent-primary)', opacity: 0.8 }}><MessageSquare size={24} /></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1px' }}>{p.date}</div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '40px', fontSize: '1.05rem', flex: 1 }}>{p.text}</p>

              <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
                <button
                  onClick={() => vote(p.id, "agree")}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '100px',
                    background: p.userVote === 'agree' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.03)',
                    color: p.userVote === 'agree' ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                >
                  <ThumbsUp size={16} /> <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{p.agree}</span>
                </button>
                <button
                  onClick={() => vote(p.id, "disagree")}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '100px',
                    background: p.userVote === 'disagree' ? 'var(--accent-tertiary)' : 'rgba(255,255,255,0.03)',
                    color: p.userVote === 'disagree' ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                >
                  <ThumbsDown size={16} /> <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{p.disagree}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
