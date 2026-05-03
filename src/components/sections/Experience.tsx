import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experiences } from '@/data/portfolioData';

export function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section section-max scroll-mt-navbar" id="experience" ref={ref}>
      <SectionHeading title="Work Experience" icon={Briefcase} />

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            {...exp}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
