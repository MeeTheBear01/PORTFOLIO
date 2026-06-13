import { type FC, useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ThreeScene from './ThreeScene';
import MeImage from '../assets/Me.png';
import { Award, Code2, Rocket } from 'lucide-react';

const phrases = [
  "Creative Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Passionate Web Builder"
];

const Typewriter: FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const nextPhrase = phrases[(index + 1) % phrases.length];
    
    let commonPrefixLength = 0;
    for (let i = 0; i < Math.min(currentPhrase.length, nextPhrase.length); i++) {
      if (currentPhrase[i] === nextPhrase[i]) {
        commonPrefixLength++;
      } else {
        break;
      }
    }

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setSpeed(Math.random() * 100 + 50); 
        
        if (displayText === currentPhrase) {
          setIsDeleting(true);
          setSpeed(2000); 
        }
      } else {
        if (displayText.length > commonPrefixLength) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          setSpeed(50);
        } else {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <span className={styles.typewriter}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className={styles.cursor}
      />
    </span>
  );
};

const Hero: FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="home" className={styles.hero}>
      <ThreeScene />
      
      {/* Background Grid */}
      <div className={styles.gridBackground}></div>
      
      <div className="container">
        <div className={styles.mainContent}>
          <div className={styles.textSide}>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.greeting}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.name}
            >
              Thara <span>.P</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={styles.title}
            >
              <Typewriter />
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={styles.cta}
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#works" 
                className={styles.buttonPrimary}
              >
                View My Works
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className={styles.buttonSecondary}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.imageSide}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className={styles.imageContainer}
              style={{ rotateX, rotateY }}
            >
              <img src={MeImage} alt="Thara .P" className={styles.heroImage} />
              
              {/* Info Badges */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className={`${styles.infoBadge} ${styles.badge1}`}
              >
                <div className={styles.badgeIcon}><Code2 size={18} /></div>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Experience</span>
                  <span className={styles.badgeValue}>2+ Years</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className={`${styles.infoBadge} ${styles.badge2}`}
              >
                <div className={styles.badgeIcon}><Award size={18} /></div>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Projects</span>
                  <span className={styles.badgeValue}>20+ Done</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className={`${styles.infoBadge} ${styles.badge3}`}
              >
                <div className={styles.badgeIcon}><Rocket size={18} /></div>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Status</span>
                  <span className={styles.badgeValue}>Available</span>
                </div>
              </motion.div>

              <div className={styles.imageGlow}></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.scrollDown}>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={styles.scrollMouse}
        >
          <div className={styles.scrollWheel}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
