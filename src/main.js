import './style.css';
import { initThreeScene } from './three-scene.js';

// Initialize 3D background
initThreeScene();

// ===== App HTML =====
document.querySelector('#app').innerHTML = `
  <!-- Hero Section -->
  <section id="hero">
    <h1 class="reveal">
      Hi, I'm <span class="highlight">Developer</span>
    </h1>
    <p class="subtitle">Full-Stack Developer & 3D Enthusiast</p>
    <p class="tagline">I craft immersive digital experiences with code, creativity, and a passion for innovation.</p>
    <div class="hero-cta">
      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a href="#contact" class="btn btn-secondary">Get In Touch</a>
    </div>
    <div class="scroll-indicator">
      <div class="mouse"></div>
      <span>Scroll Down</span>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <h2 class="section-title reveal">About Me</h2>
    <p class="section-subtitle reveal">A brief introduction to who I am and what I do</p>
    <div class="about-content">
      <div class="about-text reveal-left">
        <p>
          I'm a passionate <span class="highlight-text">full-stack developer</span> with a love for creating 
          beautiful, functional, and immersive web experiences. With expertise in modern 
          JavaScript frameworks, 3D graphics, and responsive design, I bring ideas to life 
          through clean code and creative solutions.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies, contributing to 
          open-source projects, or experimenting with <span class="highlight-text">Three.js</span> 
          and WebGL to push the boundaries of what's possible on the web.
        </p>
        <p>
          I believe in writing code that is not just functional, but <span class="highlight-text">elegant</span> — 
          combining performance with aesthetics to deliver outstanding user experiences.
        </p>
      </div>
      <div class="about-stats reveal-right">
        <div class="stat-card">
          <div class="stat-number">5+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">50+</div>
          <div class="stat-label">Projects Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">30+</div>
          <div class="stat-label">Happy Clients</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">15+</div>
          <div class="stat-label">Open Source Contributions</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section">
    <h2 class="section-title reveal">Featured Projects</h2>
    <p class="section-subtitle reveal">Some of my recent work that I'm proud of</p>
    <div class="projects-grid">
      <div class="project-card reveal">
        <div class="project-icon" style="background: rgba(99, 102, 241, 0.1);">🎮</div>
        <h3>3D Game Engine</h3>
        <p>A lightweight 3D game engine built with Three.js featuring physics, lighting, and particle systems.</p>
        <div class="project-tags">
          <span class="project-tag">Three.js</span>
          <span class="project-tag">WebGL</span>
          <span class="project-tag">JavaScript</span>
        </div>
        <div class="project-links">
          <a href="#" target="_blank">🔗 Live Demo</a>
          <a href="#" target="_blank">📂 Source Code</a>
        </div>
      </div>
      <div class="project-card reveal">
        <div class="project-icon" style="background: rgba(244, 114, 182, 0.1);">🛒</div>
        <h3>E-Commerce Platform</h3>
        <p>Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.</p>
        <div class="project-tags">
          <span class="project-tag">React</span>
          <span class="project-tag">Node.js</span>
          <span class="project-tag">MongoDB</span>
        </div>
        <div class="project-links">
          <a href="#" target="_blank">🔗 Live Demo</a>
          <a href="#" target="_blank">📂 Source Code</a>
        </div>
      </div>
      <div class="project-card reveal">
        <div class="project-icon" style="background: rgba(52, 211, 153, 0.1);">🤖</div>
        <h3>AI Chat Application</h3>
        <p>Real-time chat app powered by AI with natural language processing and contextual conversations.</p>
        <div class="project-tags">
          <span class="project-tag">Python</span>
          <span class="project-tag">FastAPI</span>
          <span class="project-tag">WebSocket</span>
        </div>
        <div class="project-links">
          <a href="#" target="_blank">🔗 Live Demo</a>
          <a href="#" target="_blank">📂 Source Code</a>
        </div>
      </div>
      <div class="project-card reveal">
        <div class="project-icon" style="background: rgba(251, 191, 36, 0.1);">📊</div>
        <h3>Data Dashboard</h3>
        <p>Interactive data visualization dashboard with real-time charts, filters, and export capabilities.</p>
        <div class="project-tags">
          <span class="project-tag">D3.js</span>
          <span class="project-tag">Vue.js</span>
          <span class="project-tag">TypeScript</span>
        </div>
        <div class="project-links">
          <a href="#" target="_blank">🔗 Live Demo</a>
          <a href="#" target="_blank">📂 Source Code</a>
        </div>
      </div>
      <div class="project-card reveal">
        <div class="project-icon" style="background: rgba(167, 139, 250, 0.1);">🌐</div>
        <h3>Portfolio CMS</h3>
        <p>Headless CMS for developers to create and manage stunning portfolio websites with drag-and-drop.</p>
        <div class="project-tags">
          <span class="project-tag">Next.js</span>
          <span class="project-tag">GraphQL</span>
          <span class="project-tag">Tailwind</span>
        </div>
        <div class="project-links">
          <a href="#" target="_blank">🔗 Live Demo</a>
          <a href="#" target="_blank">📂 Source Code</a>
        </div>
      </div>
      <div class="project-card reveal">
        <div class="project-icon" style="background: rgba(248, 113, 113, 0.1);">📱</div>
        <h3>Fitness Tracker App</h3>
        <p>Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI insights.</p>
        <div class="project-tags">
          <span class="project-tag">React Native</span>
          <span class="project-tag">Firebase</span>
          <span class="project-tag">TensorFlow</span>
        </div>
        <div class="project-links">
          <a href="#" target="_blank">🔗 Live Demo</a>
          <a href="#" target="_blank">📂 Source Code</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section">
    <h2 class="section-title reveal">Skills & Technologies</h2>
    <p class="section-subtitle reveal">Tools and technologies I work with on a daily basis</p>
    <div class="skills-grid">
      <div class="skill-item reveal">
        <div class="skill-icon">⚛️</div>
        <div class="skill-name">React</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🟢</div>
        <div class="skill-name">Vue.js</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🔷</div>
        <div class="skill-name">TypeScript</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🟨</div>
        <div class="skill-name">JavaScript</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🖥️</div>
        <div class="skill-name">Node.js</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🐍</div>
        <div class="skill-name">Python</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🗄️</div>
        <div class="skill-name">MongoDB</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🗃️</div>
        <div class="skill-name">PostgreSQL</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🔧</div>
        <div class="skill-name">Three.js</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🎨</div>
        <div class="skill-name">CSS/SCSS</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🐳</div>
        <div class="skill-name">Docker</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">☁️</div>
        <div class="skill-name">AWS</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">📦</div>
        <div class="skill-name">Webpack</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">⚡</div>
        <div class="skill-name">Vite</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🔄</div>
        <div class="skill-name">Git</div>
      </div>
      <div class="skill-item reveal">
        <div class="skill-icon">🧪</div>
        <div class="skill-name">Jest</div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <h2 class="section-title reveal">Get In Touch</h2>
    <p class="section-subtitle reveal">Have a project in mind? Let's build something amazing together</p>
    <div class="contact-content reveal">
      <p class="contact-text">
        I'm always open to discussing new projects, creative ideas, or opportunities to 
        be part of your vision. Feel free to reach out through any of the channels below.
      </p>
      <div class="contact-links">
        <a href="mailto:hello@example.com" class="contact-link">
          <span class="link-icon">📧</span>
          hello@example.com
        </a>
        <a href="https://github.com" target="_blank" class="contact-link">
          <span class="link-icon">💻</span>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" class="contact-link">
          <span class="link-icon">🔗</span>
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" class="contact-link">
          <span class="link-icon">🐦</span>
          Twitter
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>© ${new Date().getFullYear()} Developer. Built with <span class="heart">❤</span> and Three.js</p>
  </footer>
`;

// ===== Scroll Animation (Intersection Observer) =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with reveal classes
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
  observer.observe(el);
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

