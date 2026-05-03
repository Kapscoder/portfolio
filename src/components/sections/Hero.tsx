import { ChevronDown, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import { useTypewriter } from '@/hooks/useTypewriter';

export function Hero() {
  const fullName = personalInfo.name;
  const displayedName = useTypewriter(fullName, 80);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-2/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-2/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative section section-max text-center z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 min-h-[1.2em]">
          {displayedName.split(' ')[0]}
          <br />
          <span className="text-gradient">{displayedName.split(' ')[1] || ''}</span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl md:text-3xl text-text-secondary font-semibold">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-text-muted mt-2">{personalInfo.tagline}</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/resume/Kapil_Wavale_Resume.pdf" download className="btn-primary">
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <button onClick={scrollToContact} className="btn-secondary">
            <Mail className="w-5 h-5" />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-bg-card border border-color-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-bg-card border border-color-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.756h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.397 3.74 4.393v5.59zM5.337 5.432c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.964-1.71 1.191 0 1.915.755 1.937 1.71 0 .951-.746 1.71-1.986 1.71zm1.581 14.02H3.754V9.696h3.164v9.756zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-bg-card border border-color-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
