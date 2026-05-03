import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certifications } from '@/data/portfolioData';

export function Certifications() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section section-max scroll-mt-navbar" id="certifications" ref={ref}>
      <SectionHeading title="Certifications & Achievements" icon={Award} />

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="card border-l-4 cursor-pointer"
            style={{ borderLeftColor: cert.issuerColor }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: cert.issuerColor }} />
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{cert.title}</h3>
                <p className="text-text-secondary font-semibold">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
