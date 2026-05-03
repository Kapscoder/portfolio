import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { personalInfo, stats } from '@/data/portfolioData';

function StatCard({ label, value, suffix }: (typeof stats)[0]) {
  const [count, setCount] = useState(0);
  const numValue = parseInt(value);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = Math.ceil(numValue / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, numValue]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-bg-card rounded-lg border border-color-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl font-bold text-accent mb-2">{count}+</div>
      <div className="text-text-secondary">{suffix}</div>
    </motion.div>
  );
}

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section section-max scroll-mt-navbar" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-2 rounded-full mx-auto mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12 items-center">
        {/* Left - Bio */}
        <motion.div
          className="md:col-span-3 space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {personalInfo.bio.map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Right - Avatar */}
        <motion.div
          className="md:col-span-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { duration: 0.6, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Avatar background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-2 rounded-2xl opacity-10 blur-xl" />

            {/* Avatar initials */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-2/20 border-2 border-accent/50 rounded-2xl flex items-center justify-center">
              <div className="text-6xl font-extrabold text-accent">KW</div>
            </div>

           
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </motion.div>
    </section>
  );
}
