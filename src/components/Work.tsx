import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Work.module.css';

const experiences = [
  {
    id: 1,
    company: 'TigerSoft (1998) Co., Ltd.',
    period: 'October 2025 - June 2026',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    description: 'Developed and maintained HRM web applications using VB.NET, SQL Server, HTML, CSS, and JavaScript. Developed APIs and implemented unit testing with NUnit.'
  },
  {
    id: 2,
    company: 'Wisdom Want Industrial Co., Ltd.',
    period: 'February 2025 - September 2025',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1454165833767-0266b196773f?auto=format&fit=crop&q=80&w=2070',
    description: 'Built web applications using React, NodeJS, PostgreSQL, MongoDB, and Redis. Maintained legacy systems with ASP.NET Core and designed user-friendly UIs.'
  },
  {
    id: 3,
    company: 'W.Siriparn Autoparts Co., Ltd.',
    period: 'April 2024 - November 2024',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    description: 'Developed web applications using ASP.NET Core, SQL Server, and React. Created reports with Microsoft Report Builder and managed printing systems via Raspberry Pi.'
  },
  {
    id: 4,
    company: 'Top Provider Systems & Supply',
    period: 'August 2022 - October 2022',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070',
    description: 'Developed a Hospital Management Web Application using ReactJS based on specific designs and requirements. Integrated REST APIs for data management.'
  },
  {
    id: 5,
    company: 'Nattachat Co., Ltd.',
    period: 'March 2022 - July 2022',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    description: 'Created web applications using React.js and NextJS. Developed user interfaces based on design specifications and connected with backend APIs.'
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicking, setIsClicking] = useState("");
  const trackRef = useRef<HTMLUListElement>(null);
  const activeExp = experiences[currentIndex];

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
    const nextIndex = (currentIndex + 1) % experiences.length;
    scrollToProject(nextIndex);
    setIsClicking("next");
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + experiences.length) % experiences.length;
    scrollToProject(prevIndex);
    setIsClicking("prev");
  };

  return (
    <section id="works" className={styles.workSection}>
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.sectionTitle}
        >
          Work Experience
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
                    key={activeExp.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isClicking === "next" ? -50 : 50}}
                    transition={{ duration: 0.3 }}
                    src={activeExp.image}
                    alt={activeExp.company}
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
              <span className={styles.macLabel}>Experience Showcase</span>
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
              {experiences.map((exp, index) => (
                <li
                  key={exp.id}
                  className={`${styles.trackItem} ${currentIndex === index ? styles.active : ''}`}
                  onClick={() => scrollToProject(index)}
                >
                  <img src={exp.image} alt={exp.company} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Active Project Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${activeExp.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.activeInfo}
          >
            <span className={styles.period}>{activeExp.period}</span>
            <h4>{activeExp.company}</h4>
            <h5 className={styles.role}>{activeExp.role}</h5>
            <p>{activeExp.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
