import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Work.module.css';

const projects = [
  {
    id: 1,
    title: 'Nexus Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    description: 'A real-time analytics and inventory management dashboard for remote teams.'
  },
  {
    id: 2,
    title: 'Aura UI Kit',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2400',
    description: 'Modern, minimalist design system for high-conversion landing pages.'
  },
  {
    id: 3,
    title: 'Crypto Pulse',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232',
    description: 'Live cryptocurrency dashboard with advanced charting and real-time alerts.'
  },
  {
    id: 4,
    title: 'Zen Workspace',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2344',
    description: 'Minimalist focus timer and task manager designed for developers.'
  },
  {
    id: 5,
    title: 'Modern Portfolio',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=2070',
    description: 'Clean and minimal showcase site built with high-performance animations.'
  },
  {
    id: 6,
    title: 'E-Commerce App',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2089',
    description: 'Scalable e-commerce solution with integrated payment gateway.'
  },
  {
    id: 7,
    title: 'AI Dashboard',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    description: 'Next-gen analytics platform powered by artificial intelligence.'
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicking, setIsClicking] = useState("");
  const trackRef = useRef<HTMLUListElement>(null);
  const activeProject = projects[currentIndex];

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const items = track.querySelectorAll('li');
      const center = track.scrollLeft + track.offsetWidth / 2;

      let minDistance = Infinity;
      let newIndex = 0;

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          newIndex = index;
        }
      });

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', handleScroll);
    }
    return () => track?.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  const scrollToProject = (index: number) => {
    if (!trackRef.current) return;
    const items = trackRef.current.querySelectorAll('li');
    const target = items[index];
    if (target) {
      const offset = target.offsetLeft - (trackRef.current.offsetWidth / 2) + (target.offsetWidth / 2);
      trackRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    scrollToProject(nextIndex);
    setIsClicking("next");
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    scrollToProject(prevIndex);
    setIsClicking("prev");
  };

  return (
    <section id="work" className={styles.workSection}>
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.sectionTitle}
        >
          Selected Projects
        </motion.h3>

        <div className={styles.mainLayout}>
          {/* 1. Navigation Arrows */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevProject}>
            <ChevronLeft size={40} />
          </button>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextProject}>
            <ChevronRight size={40} />
          </button>

          {/* 2. MacBook Part (Middle) */}
          <div className={styles.centerContainer}>
            <div className={styles.macbookDisplay}>
              <div className={styles.macbookScreen}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isClicking === "next" ? -50 : 50}}
                    transition={{ duration: 0.3 }}
                    src={activeProject.image}
                    alt={activeProject.title}
                    className={styles.screenImage}
                  />
                </AnimatePresence>
                <div className={styles.menubar}></div>
                <div className={styles.dock}>
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={styles.dockIcon}></div>
                  ))}
                </div>
              </div>
              <span className={styles.macLabel}>MacBook Pro</span>
            </div>
            <div className={styles.keys}>
              <div className={styles.board}></div>
              <div className={styles.touchpad}></div>
            </div>
            <div className={styles.comp}>
              <div className={styles.notch}></div>
            </div>
            <div className={styles.compBottom}></div>
          </div>

          {/* 3. Slider Track Part (Overlapping with MacBook) */}
          <div className={styles.trackWrapper}>
            <ul className={styles.track} ref={trackRef}>
              {projects.map((project, index) => (
                <li
                  key={project.id}
                  className={`${styles.trackItem} ${currentIndex === index ? styles.active : ''}`}
                  onClick={() => scrollToProject(index)}
                >
                  <img src={project.image} alt={project.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Active Project Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${activeProject.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.activeInfo}
          >
            <h4>{activeProject.title}</h4>
            <p>{activeProject.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
