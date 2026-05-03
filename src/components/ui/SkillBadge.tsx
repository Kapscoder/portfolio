import { SkillCategory } from '@/types';

interface SkillBadgeProps {
  name: string;
  category: SkillCategory;
}

const categoryColors: Record<SkillCategory, string> = {
  language: 'border-yellow-500/50 text-yellow-400',
  framework: 'border-emerald-500/50 text-emerald-400',
  database: 'border-indigo-500/50 text-indigo-400',
  tool: 'border-pink-500/50 text-pink-400',
  concept: 'border-teal-500/50 text-teal-400',
};

export function SkillBadge({ name, category }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full bg-bg-card border transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-sm font-medium ${categoryColors[category]}`}
    >
      {name}
    </span>
  );
}
