export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  tagline: string;
  bio: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: 'Onsite' | 'Remote';
  isCurrent: boolean;
  bullets: string[];
  techs: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  icon: string;
}

export type SkillCategory = 'language' | 'framework' | 'database' | 'tool' | 'concept';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  branch: string;
  cgpa: string;
  duration: string;
  location: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issuerColor: string;
}

export interface Extracurricular {
  title: string;
  description: string;
  hours?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}
