import { motion } from 'framer-motion';
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
                  <span className="achievement-icon">{item.icon}</span>
                  <div className="achievement-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
