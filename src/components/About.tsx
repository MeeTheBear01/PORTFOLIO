import { type FC } from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const skills = [
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Ant Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg' },
  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'VB.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
  // Database
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
];

const About: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={styles.content}
        >
          <div className={styles.top}>
            <motion.h3 variants={itemVariants} className={styles.sectionTitle}>About Me</motion.h3>
            <motion.div variants={itemVariants} className={styles.bioContainer}>
              <p className={styles.bio}>
                I am a Web Application Developer with 3 years of experience in building and developing 
                modern web applications. I am passionate about learning new technologies to continuously 
                improve myself and apply them effectively to create value for organizations.
              </p>
              
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <strong>Location:</strong> <span>Nong Chok, Bangkok 10530</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Email:</strong> <span>thara.pholudom@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Phone:</strong> <span>082-669-8187</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>GitHub:</strong> <a href="https://github.com/MeeTheBear01" target="_blank" rel="noopener noreferrer">github.com/MeeTheBear01</a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={styles.bottom}>
            <motion.h4 variants={itemVariants} className={styles.subsectionTitle}>Tech Stack</motion.h4>
            <div className={styles.skillContainer}>
              <div className={styles.skillTrack}>
                {[...skills, ...skills].map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.skillItem}
                    whileHover={{ scale: 1.1, color: "var(--accent-color)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                    <span className={styles.skillName}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

