import { motion } from 'framer-motion';
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
              {aboutText.split(String.fromCharCode(92, 110, 92, 110)).map((para, i) => (
                <p key={i} className="about-paragraph">{para}</p>
              ))}
            </div>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">{String.fromCodePoint(0x1F4CD)}</span>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">{String.fromCodePoint(0x1F4E7)}</span>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{personalInfo.email}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">{String.fromCodePoint(0x1F3AF)}</span>
                <div>
                  <span className="detail-label">Role</span>
                  <span className="detail-value">{personalInfo.title}</span>
                </div>
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
      </div>
    </section>
  );
};

export default About;
