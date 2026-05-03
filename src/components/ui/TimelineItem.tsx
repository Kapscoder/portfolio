import { motion } from 'framer-motion';
import { TechTag } from './TechTag';

interface TimelineItemProps {
  role: string;
  company: string;
  duration: string;
  type: 'Onsite' | 'Remote';
  bullets: string[];
  techs: string[];
  isCurrent?: boolean;
  index?: number;
}

export function TimelineItem({
  role,
  company,
  duration,
  type,
  bullets,
  techs,
  isCurrent,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-bg-primary ${isCurrent ? 'bg-emerald-500' : 'bg-accent'}`} />

      {/* Timeline line */}
      <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent" />

      <div className="card">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{role}</h3>
            <p className="text-accent font-semibold">{company}</p>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            {isCurrent && <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">Current</span>}
            <span className="px-3 py-1 bg-bg-primary rounded-full text-xs font-semibold text-text-secondary">{type}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4">{duration}</p>

        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-text-secondary text-sm flex gap-3">
              <span className="text-accent flex-shrink-0">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
