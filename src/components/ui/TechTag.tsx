interface TechTagProps {
  name: string;
}

export function TechTag({ name }: TechTagProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium hover:bg-accent/20 transition-colors">
      {name}
    </span>
  );
}
