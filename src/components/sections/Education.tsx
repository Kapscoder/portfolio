import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education, extracurriculars } from '@/data/portfolioData';

export function Education() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section section-max scroll-mt-navbar" id="education" ref={ref}>
      <SectionHeading title="Education" icon={GraduationCap} />

      {/* Main Education */}
      <motion.div
        className="card max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="flex items-start gap-4">
          <GraduationCap className="w-12 h-12 text-accent flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-text-primary">{education.degree} in {education.branch}</h3>
            <p className="text-accent font-semibold text-lg mt-1">{education.institution}</p>
            <p className="text-text-secondary mt-2">{education.duration}</p>
            <p className="text-text-secondary">{education.location}</p>

            <div className="mt-4 pt-4 border-t border-color-border">
              <div className="flex items-center gap-3">
                <span className="text-text-secondary">CGPA:</span>
                <span className="text-3xl font-bold text-accent">{education.cgpa}</span>
                <span className="text-text-secondary">/10</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Extracurriculars */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">Extracurricular Activities</h3>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {extracurriculars.map((activity, index) => (
            <motion.div
              key={activity.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h4 className="text-lg font-bold text-text-primary mb-2">{activity.title}</h4>
              <p className="text-text-secondary">{activity.description}</p>
              {activity.hours && (
                <p className="mt-3 text-accent font-semibold">{activity.hours} service hours</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
