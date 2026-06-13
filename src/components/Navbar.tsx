import { type FC } from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import resumeFile from '../assets/Resume_Thai.pdf';

const Navbar: FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.navbar}
    >
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <a href="#home">THARA<span>.</span></a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>My Resume</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
