import { type FC } from 'react';
import styles from './Portfolio.module.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'TigerSoft (1998) Co., Ltd.',
    period: 'October 2025 - June 2026',
    role: 'Full Stack Developer',
    description: 'Developed and maintained HRM web applications using VB.NET, SQL Server, HTML, CSS, and JavaScript. Developed APIs and implemented unit testing with NUnit.',
    tech: ['VB.NET', 'SQL Server', 'HTML/CSS', 'JavaScript', 'NUnit', 'Telerik Reporting']
  },
  {
    company: 'Wisdom Want Industrial Co., Ltd.',
    period: 'February 2025 - September 2025',
    role: 'Full Stack Developer',
    description: 'Built web applications using React, NodeJS, PostgreSQL, MongoDB, and Redis. Maintained legacy systems with ASP.NET Core and designed user-friendly UIs.',
    tech: ['React', 'NodeJS', 'PostgreSQL', 'MongoDB', 'Redis', 'ASP.NET Core', 'SQL Server']
  },
  {
    company: 'V.SIRIKAN AUTOPARTS Co., Ltd.',
    period: 'April 2024 - November 2024',
    role: 'Full Stack Developer',
    description: 'Developed web applications using ASP.NET Core, SQL Server, and React. Created reports with Microsoft Report Builder and managed printing systems via Raspberry Pi.',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'Microsoft Report Builder', 'Raspberry Pi', 'jQuery']
  },
  {
    company: 'Top Provider Systems & Supply',
    period: 'August 2022 - October 2022',
    role: 'Frontend Developer',
    description: 'Developed a Hospital Management Web Application using ReactJS based on specific designs and requirements. Integrated REST APIs for data management.',
    tech: ['ReactJS', 'REST API', 'JavaScript', 'CSS Modules']
  },
  {
    company: 'Nattachat Co., Ltd.',
    period: 'March 2022 - July 2022',
    role: 'Frontend Developer',
    description: 'Created web applications using React.js and NextJS. Developed user interfaces based on design specifications and connected with backend APIs.',
    tech: ['React.js', 'Next.js', 'UI Design', 'API Integration']
  }
];

const Portfolio: FC = () => {
  return (
    <section id="works" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            A chronological overview of my career path, experience, and technical growth.
          </motion.p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={`${styles.timelineRow} ${index % 2 === 0 ? styles.leftRow : styles.rightRow}`}>
                
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={styles.textSide}
                >
                  <span className={styles.yearLabel}>{exp.period}</span>
                  <h3 className={styles.projectTitle}>{exp.company}</h3>
                  <h4 className={styles.roleLabel}>{exp.role}</h4>
                  <p className={styles.description}>{exp.description}</p>
                  
                  <div className={styles.techStack}>
                    {exp.tech.map((t, i) => (
                      <span key={i} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Center Column with Dot */}
                <div className={styles.centerCol}>
                  <div className={styles.dot}></div>
                </div>

                {/* Empty Side (Maintaining the vertical axis) */}
                <div className={styles.emptySide}></div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
