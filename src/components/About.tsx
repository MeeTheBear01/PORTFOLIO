import { type FC } from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const skills = [
  { name: 'ASP.Net', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'VB.net', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
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
            <motion.p variants={itemVariants} className={styles.bio}>
              I'm a passionate developer dedicated to creating high-performance,
              user-centric digital experiences. With a strong foundation in modern
              web technologies, I love turning complex problems into elegant
              code and stunning visuals.
            </motion.p>
            <motion.p variants={itemVariants} className={styles.bio}>
              My journey in tech is driven by curiosity and a relentless
              pursuit of quality. I thrive in environments that challenge
              my creativity and push me to learn new things every day.
            </motion.p>
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

