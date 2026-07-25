import { motion } from 'framer-motion';
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
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">S</span>
          <span className="logo-bracket">{String.fromCodePoint(0x3E)}</span>
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
