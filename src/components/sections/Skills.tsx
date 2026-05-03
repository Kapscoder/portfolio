import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { skillGroups } from '@/data/portfolioData';

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section section-max scroll-mt-navbar" id="skills" ref={ref}>
      <SectionHeading title="Technical Skills" icon={Code2} subtitle="Technologies I work with" />

      <motion.div
        className="space-y-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            variants={itemVariants}
            custom={groupIndex}
          >
            <h3 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-accent/30">
              {group.label}
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SkillBadge name={skill} category={group.category} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
