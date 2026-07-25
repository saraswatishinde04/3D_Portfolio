import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const files = {};

// ===== About.jsx =====
files['src/components/About.jsx'] = `import { motion } from 'framer-motion';
import { personalInfo, aboutText } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A Computer Science graduate with a passion for business analytics,
            currently pursuing professional training at ExcelR Institute, Bengaluru.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-content glass-card"
          >
            <div className="about-text">
              {aboutText.split('\\n\\n').map((para, i) => (
                <p key={i} className="about-paragraph">{para}</p>
              ))}
            </div>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{personalInfo.email}</span>
                </div>
              <div className="detail-item">
                <span className="detail-icon">🎯</span>
                <div>
                  <span className="detail-label">Role</span>
                  <span className="detail-value">{personalInfo.title}</span>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-highlights"
          >
            <div className="highlight-card glass-card">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects Built</span>
            </div>
            <div className="highlight-card glass-card">
              <span className="highlight-number">15+</span>
              <span className="highlight-label">Certifications</span>
            </div>
            <div className="highlight-card glass-card">
              <span className="highlight-number">7+</span>
              <span className="highlight-label">Skills Mastered</span>
            </div>
            <div className="highlight-card glass-card">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Years Learning</span>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default About;
`;

// ===== Skills.jsx =====
files['src/components/Skills.jsx'] = `import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">What I Bring to the Table</h2>
          <p className="section-subtitle">
            A comprehensive set of technical and analytical skills honed through projects and certifications.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-category glass-card"
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Skills;
`;

// ===== Projects.jsx =====
files['src/components/Projects.jsx'] = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects, additionalProjects } from '../data/portfolioData';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? additionalProjects : featuredProjects;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Analytics projects, dashboards, and data-driven solutions showcasing my technical skills.
          </p>
        </motion.div>

        <div className="projects-grid">
          <AnimatePresence mode="wait">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card glass-card"
              >
                <div className="project-card-header">
                  <div className="project-icon">
                    {project.title.includes('Dashboard') ? '📊' : 
                     project.title.includes('Churn') ? '📉' :
                     project.title.includes('Crime') ? '🎥' :
                     project.title.includes('Travel') ? '✈️' :
                     project.title.includes('Mental') ? '🧠' :
                     project.title.includes('HRMS') ? '👥' :
                     project.title.includes('Spam') ? '📧' :
                     project.title.includes('House') ? '🏠' :
                     project.title.includes('Iris') ? '🌸' :
                     project.title.includes('Drone') ? '🚁' : '💡'}
                  </div>
                  <div className="project-links">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      </a>
                    )}
                  </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
</div>
            </div>
          </motion.div>
          </div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="projects-toggle"
        >
          <button
            className="btn btn-outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Featured Projects' : 'View All Projects'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
              <path d="M7 10l5 5 5-5" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
`;

// ===== Certifications.jsx =====
files['src/components/Certifications.jsx'] = `import { motion } from 'framer-motion';
import { certifications, education, achievements } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications, education background, and notable achievements.
          </p>
        </motion.div>

        <div className="certs-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="certs-column"
          >
            <h3 className="column-title">
              <span className="column-icon">📜</span> Certifications
            </h3>
            <div className="certs-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="cert-item glass-card"
                >
                  <div className="cert-badge" />
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="certs-column"
          >
            <h3 className="column-title">
              <span className="column-icon">🎓</span> Education
            </h3>
            <div className="edu-list">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="edu-item glass-card"
                >
                  <div className="edu-icon">🎓</div>
                  <div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-field">{edu.field}</p>
                    <p className="edu-institution">{edu.institution} • {edu.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="column-title" style={{ marginTop: '32px' }}>
              <span className="column-icon">🏆</span> Achievements
            </h3>
            <div className="achievements-list">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="achievement-item glass-card"
                >
                  <span className="achievement-icon">⭐</span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default Certifications;
`;

// ===== Contact.jsx =====
files['src/components/Contact.jsx'] = `import { motion } from 'framer-motion';
import { personalInfo, whyHireMe } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a question, opportunity, or just want to say hi? Let's connect and explore
            how I can add value to your team.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="contact-info"
          >
            <div className="why-hire-me">
              <h3 className="hire-title">Why Hire Me?</h3>
              <div className="hire-reasons">
                {whyHireMe.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="hire-item glass-card"
                  >
                    <span className="hire-icon">{item.icon}</span>
                    <div>
                      <h4 className="hire-item-title">{item.title}</h4>
                      <p className="hire-item-desc">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-card glass-card"
          >
            <h3 className="contact-card-title">Get In Touch</h3>
            <p className="contact-card-subtitle">
              Feel free to reach out via email or social media. I'll respond as soon as possible.
            </p>

            <div className="contact-methods">
              <a href={'mailto:' + personalInfo.email} className="contact-method glass-card">
                <span className="method-icon">📧</span>
                <div>
                  <span className="method-label">Email</span>
                  <span className="method-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={'https://www.linkedin.com/in/' + personalInfo.linkedin.split('/in/')[1]?.replace('/','')} target="_blank" rel="noopener noreferrer" className="contact-method glass-card">
                <span className="method-icon">💼</span>
                <div>
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">Let's Connect</span>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-method glass-card">
                <span className="method-icon">💻</span>
                <div>
                  <span className="method-label">GitHub</span>
                  <span className="method-value">View My Code</span>
                </div>
              </a>
            </div>

            <div className="contact-cta">
              <a href={'mailto:' + personalInfo.email} className="btn btn-primary">
                Send Me an Email
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default Contact;
`;

// ===== Footer.jsx =====
files['src/components/Footer.jsx'] = `import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-bracket"><</span>
            <span className="logo-text">Saraswati</span>
            <span className="logo-bracket"> /></span>
          </div>

          <p className="footer-tagline">
            Turning Data into Business Decisions
          </p>

          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <div className="footer-divider" />

          <p className="footer-copyright">
            &copy; {year} {personalInfo.name}. Built with React, Three.js & Framer Motion.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
`;

// ===== ScrollToTop.jsx =====
files['src/components/ScrollToTop.jsx'] = `import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
`;

// ===== Loader.jsx =====
files['src/components/Loader.jsx'] = `import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="loader"
    >
      <div className="loader-content">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="loader-logo"
        >
          <span className="logo-bracket"><</span>
          <span className="logo-text">S</span>
          <span className="logo-bracket"> /></span>
        </motion.div>

        <div className="loader-bar-container">
          <motion.div
            className="loader-bar"
            initial={{ width: 0 }}
            animate={{ width: Math.min(progress, 100) + '%' }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="loader-text">
          {progress < 30 ? 'Loading...' :
           progress < 60 ? 'Preparing portfolio...' :
           progress < 90 ? 'Almost ready...' : 'Welcome!'}
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;
`;

// ===== App.jsx =====
files['src/App.jsx'] = `import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" onFinish={handleFinishLoading} />
      ) : (
        <div key="app" className="app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;
`;

// Write all files
for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.resolve(root, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created:', filePath);
}

console.log('\\nAll components generated successfully!');
