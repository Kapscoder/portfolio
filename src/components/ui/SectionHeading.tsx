import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export function SectionHeading({ title, subtitle, icon: Icon }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        {Icon && <Icon className="w-8 h-8 text-accent" />}
        <h2 className="section-title">{title}</h2>
      </div>
      {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-2 rounded-full mx-auto mt-6" />
    </motion.div>
  );
}
