import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app">
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-color, #3b82f6)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />
      <div className="animated-bg"></div>
      <Navbar />
      <main aria-label="Portfolio content">
        <Hero />
        <About />
        <Portfolio />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
