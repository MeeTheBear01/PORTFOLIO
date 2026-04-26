import { type FC } from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

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
          <a href="#home">PORTFOLIO<span>.</span></a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div>
          <a href="#" className={styles.resumeBtn}>My Resume</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
