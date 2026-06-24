import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Work.module.css';

import Rent_car_web from '../assets/Rent_car_web.png';
import Cat_hotel_web from '../assets/Cat_hotel_web.png';
import Game_web from '../assets/Game_web.png';

const experiences = [
  {
    id: 1,
    company: 'Rent Car Web Application',
    image: Rent_car_web,
    role: 'Frontend : NextJS',
    description: 'BackEnd : C#,ASP.NET Core Web API',
  },
  {
    id: 2,
    company: 'Cat Hotel Web Application',
    image: Cat_hotel_web,
    role: 'Frontend : NextJS',
    description: 'BackEnd : Go.Lang, SqlLite',
  },
  {
    id: 3,
    company: 'Game Web Application',
    image: Game_web,
    role: 'Frontend : NextJS',
    description: 'https://thai-exercise.vercel.app/',
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicking, setIsClicking] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
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
        setIsLoading(true);
        setImageError(false);
      }
    };

    const track = trackRef.current;
    if (track) track.addEventListener('scroll', handleScroll);
    return () => track?.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  const scrollToProject = (index: number) => {
    if (!trackRef.current) return;
    setIsLoading(true);
    setImageError(false);
    const items = trackRef.current.querySelectorAll('li');
    const target = items[index];
    if (target) {
      const offset =
        target.offsetLeft - trackRef.current.offsetWidth / 2 + target.offsetWidth / 2;
      trackRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % experiences.length;
    scrollToProject(nextIndex);
    setIsClicking('next');
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + experiences.length) % experiences.length;
    scrollToProject(prevIndex);
    setIsClicking('prev');
  };

  // ✅ ชื่อ state ตรงกันแล้ว
  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setImageError(true);
  };

  return (
    <section id="works" className={styles.workSection}>
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.sectionTitle}
        >
          My Portfolio
        </motion.h3>

        <div
          className={styles.mainLayout}
          role="region"
          aria-label="Portfolio carousel"
          aria-roledescription="carousel"
        >
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prevProject}
            aria-label="โปรเจกต์ก่อนหน้า"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={nextProject}
            aria-label="โปรเจกต์ถัดไป"
          >
            <ChevronRight size={40} />
          </button>

          <div className={styles.centerContainer}>
            <div className={styles.macbookDisplay}>
              <div className={styles.macbookScreen}>
                {/* ✅ แยก overlay ออกจาก AnimatePresence เพื่อไม่ให้ชนกัน */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeExp.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: isLoading || imageError ? 0 : 1, x: 0 }}
                    exit={{ opacity: 0, x: isClicking === 'next' ? -50 : 50 }}
                    transition={{ duration: 0.3 }}
                    src={activeExp.image}
                    alt={`ภาพโปรเจกต์ ${activeExp.company} — ${activeExp.role}`}
                    className={styles.screenImage}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </AnimatePresence>

                {/* ✅ Loading overlay แยกต่างหาก */}
                {isLoading && !imageError && (
                  <div
                    role="status"
                    aria-label="กำลังโหลดภาพ"
                    style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <div className={styles.spinner} />
                  </div>
                )}

                {/* ✅ Error overlay แยกต่างหาก */}
                {imageError && (
                  <div
                    role="alert"
                    aria-live="polite"
                    style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    ไม่สามารถแสดงภาพได้
                  </div>
                )}

                <div className={styles.menubar} />
                <div className={styles.dock}>
                  {/* ✅ ใช้ stable key แทน index */}
                  {[...Array(10)].map((_, i) => (
                    <div key={`dock-${i}`} className={styles.dockIcon} />
                  ))}
                </div>
              </div>
              <span className={styles.macLabel}>Experience Showcase</span>
            </div>
            <div className={styles.keys}>
              <div className={styles.board} />
              <div className={styles.touchpad} />
            </div>
            <div className={styles.comp}>
              <div className={styles.notch} />
            </div>
            <div className={styles.compBottom} />
          </div>

          {/* ✅ Thumbnail ใช้ handler แยก ไม่กระทบ state ภาพหลัก */}
          <div className={styles.trackWrapper}>
            <ul
              className={styles.track}
              ref={trackRef}
              role="tablist"
              aria-label="เลือกโปรเจกต์"
            >
              {experiences.map((exp, index) => (
                <li
                  key={exp.id}
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-label={`${exp.company}: ${exp.role}`}
                  className={`${styles.trackItem} ${currentIndex === index ? styles.active : ''}`}
                  onClick={() => scrollToProject(index)}
                >
                  <img
                    src={exp.image}
                    alt="" // ✅ decorative — ข้อมูลอยู่ใน aria-label ของ li แล้ว
                    onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${activeExp.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.activeInfo}
          >
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