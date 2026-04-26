import { type FC } from 'react';
import styles from './Portfolio.module.css';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Nexus Platform',
    category: 'Full Stack App',
    description: 'A real-time collaboration tool for remote teams built with Socket.io and React.',
    tech: ['React', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
  },
  {
    title: 'Aura UI Kit',
    category: 'Design System',
    description: 'Modern, minimalist design system for high-conversion landing pages.',
    tech: ['TypeScript', 'CSS Modules', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2400'
  },
  {
    title: 'Crypto Pulse',
    category: 'Data Visualization',
    description: 'Live cryptocurrency dashboard with advanced charting and alerts.',
    tech: ['Next.js', 'D3.js', 'CoinGecko API'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232'
  },
  {
    title: 'Zen Workspace',
    category: 'Productivity Tool',
    description: 'Minimalist focus timer and task manager for developers.',
    tech: ['React Native', 'Firebase', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2344'
  }
];

const Portfolio: FC = () => {
  return (
    <section id="works" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Selected Works
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.subtitle}
          >
            A glimpse into my recent digital creations.
          </motion.p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.projectCard}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={styles.overlay}
                >
                  <div className={styles.links}>
                    <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="#"><Code size={20} /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="#"><ExternalLink size={20} /></motion.a>
                  </div>
                </motion.div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color)", color: "white" }}
                      className={styles.tech}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
