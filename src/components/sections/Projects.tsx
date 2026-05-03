import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/portfolioData';

export function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section section-max scroll-mt-navbar" id="projects" ref={ref}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <div>
          <SectionHeading title="Featured Projects" icon={Code2} />
        </div>
        <a
          href="https://github.com/Kapscoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-2 font-semibold transition-colors"
        >
          View all projects →
        </a>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
