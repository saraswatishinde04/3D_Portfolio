import { motion } from 'framer-motion';
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
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Have a question, opportunity, or just want to say hi? Let&apos;s connect and explore
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
              Feel free to reach out via email or social media. I&apos;ll respond as soon as possible.
            </p>

            <div className="contact-methods">
              <a href={'mailto:' + personalInfo.email} className="contact-method glass-card">
                <span className="method-icon">📧</span>
                <div>
                  <span className="method-label">Email</span>
                  <span className="method-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={'https://www.linkedin.com/in/' + personalInfo.linkedin.split('/in/')[1]?.replace('/', '')} target="_blank" rel="noopener noreferrer" className="contact-method glass-card">
                <span className="method-icon">💼</span>
                <div>
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">Let&apos;s Connect</span>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
