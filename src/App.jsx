import { useState, useCallback } from 'react';
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
