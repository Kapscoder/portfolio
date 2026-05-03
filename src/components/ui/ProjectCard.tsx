import { ExternalLink, Github, BookOpen, Brain, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { TechTag } from './TechTag';

interface ProjectCardProps extends Project {
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Brain,
  Briefcase,
};

export function ProjectCard({
  title,
  description,
  techs,
  metrics,
  githubUrl,
  liveUrl,
  accentColor,
  icon,
  index = 0,
}: ProjectCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      style={{
        borderTopColor: accentColor,
        borderTopWidth: '4px',
      }}
    >
      {IconComponent && (
        <div className="mb-3">
          <IconComponent className="w-8 h-8" style={{ color: accentColor }} />
        </div>
      )}
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-4 flex-grow">{description}</p>

      {metrics && (
        <div className="mb-4 p-3 bg-bg-primary rounded-lg border border-accent/20">
          <p className="text-accent text-sm font-semibold">{metrics}</p>
        </div>
      )}

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-auto pt-4 border-t border-color-border">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent hover:bg-accent hover:text-bg-primary rounded-lg transition-colors font-semibold"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-accent-2/10 text-accent-2 hover:bg-accent-2 hover:text-bg-primary rounded-lg transition-colors font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
