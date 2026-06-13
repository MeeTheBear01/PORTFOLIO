import { type FC } from 'react';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { LineIcon, FacebookIcon, GithubIcon } from '../assets/icon';

const Footer: FC = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.cta}
          >
            <h3 className={styles.title}>Let's build something <br /> amazing together.</h3>
            <a href="mailto:Thara.pholudom@gmail.com" className={styles.emailBtn}>
              <Mail size={24} /> Thara.pholudom@gmail.com <ArrowUpRight size={24} />
            </a>
          </motion.div>
          
        <div className={styles.socials}>
            <a href="#" aria-label="Line" className={styles.socialLink}><LineIcon /></a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}><FacebookIcon /></a>
            <a href="https://github.com/MeeTheBear01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}><GithubIcon /></a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Thara Pholudom. All rights reserved.</p>
          <ul className={styles.footerLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
