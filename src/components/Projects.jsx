import { useState } from 'react';
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      </a>
                    )}
                  </div>
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
