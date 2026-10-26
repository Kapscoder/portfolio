import type {
  PersonalInfo,
  Experience,
  Project,
  SkillGroup,
  Education,
  Certification,
  Extracurricular,
  Stat,
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Kapil Wavale',
  title: 'Full Stack Developer',
  email: 'kapilswavale@gmail.com',
  phone: '+91-8767570359',
  github: 'https://github.com/Kapscoder',
  linkedin: 'https://linkedin.com/in/kapil-wavale',
  location: 'Pune, Maharashtra',
  tagline: 'B.Tech CSE • VIT Pune | Building scalable web solutions',
  bio: [
    'I\'m a passionate Full Stack Developer currently working at Pulsegen Technologies as a Software Development Intern. With a strong foundation in JavaScript, TypeScript, React, and Node.js, I create scalable web applications that solve real-world problems.',
    'My experience spans frontend development with React, backend APIs with Node.js/Express, and database design with MongoDB and PostgreSQL. I\'ve successfully delivered features to production serving 5,000+ users while maintaining code quality and following best practices.',
    'I specialize in building modern web applications with a focus on performance, user experience, and clean architecture. I\'m always eager to learn new technologies and collaborate with talented developers.',
  ],
};

export const experiences: Experience[] = [
    {
    id: 'bluebricks',
    role: 'Full Stack Intern',
    company: 'BlueBricks Solution',
    duration: 'July 2026 – October 2026',
    type: 'Remote',
    isCurrent: false,
    bullets: [
      'Built an organization-facing Gen AI Configuration interface using Next.js, React, MUI, and Redux Toolkit, supporting 6 AI tasks across 3 providers: OpenAI, Gemini, and DeepSeek',
      'Re-architected LLM configuration into a multi-tenant, organization-scoped model, isolating AI settings for each customer organization',
      'Built the ticketing module for Axiom Admin Portal and SSP Client Portal, enabling end-to-end support ticket creation, assignment, tracking, and resolution',
      'Enhanced the OTAA dashboard and integrated REST APIs for dynamic, API-driven frontend data display',
      'Built a Document Tampering Detection module using AI-based forgery detection, metadata checks, and modification-date validation to generate detailed verification reports',
    ],
    techs: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Material UI',
      'Redux Toolkit',
      'Node.js',
      'REST APIs',
      'Gen AI',
    ],
  },

  {
    id: 'pulsegen',
    role: 'Software Development Intern',
    company: 'Pulsegen Technologies Private Limited',
    duration: 'October 2025 – Present',
    type: 'Onsite',
    isCurrent: false,
    bullets: [
      'Developed and optimized scalable web modules used by 5,000+ users, improving page load performance by 30%',
      'Implemented backend APIs using Node.js and Express, reducing API response time by 25%',
      'Collaborated with a 6-member cross-functional team to deliver production-ready features',
      'Resolved 20+ critical bugs, improving system stability and reducing production incidents',
    ],
    techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
  {
    id: 'wsa',
    role: 'Software Development Intern',
    company: 'WebStack Academy (WSA)',
    duration: 'March 2025 – April 2025',
    type: 'Remote',
    isCurrent: false,
    bullets: [
      'Built a real-time issue tracking application supporting 100+ concurrent users using React.js, Node.js, Express.js, MongoDB, and Socket.io',
      'Implemented JWT-based role-based authentication, securing protected routes and user access',
      'Enabled live collaboration via WebSocket communication, improving workflow efficiency by 40%',
      'Designed MongoDB schemas with Mongoose, improving query performance and data consistency',
    ],
    techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker', 'JWT'],
  },
];

export const projects: Project[] = [
  {
    id: 'studynotion',
    title: 'StudyNotion – EdTech Platform',
    description:
      'A comprehensive full-stack EdTech platform with authentication, role-based access control for students and instructors, and integrated payment gateway for course purchases.',
    techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'],
    metrics: '1,000+ users • JWT auth • Payment gateway',
    githubUrl: 'https://github.com/Kapscoder',
    accentColor: '#38BDF8',
    icon: 'BookOpen',
  },
  {
    id: 'docusense',
    title: 'DocuSense AI – Document Q&A',
    description:
      'An AI-powered document Q&A system leveraging LangChain and LLaMA 3.3 for intelligent document chunking and retrieval. Optimized to reduce response time significantly.',
    techs: ['Python', 'LangChain', 'LLaMA 3.3', 'PostgreSQL', 'FastAPI'],
    metrics: '35% response time improvement • Smart chunking',
    githubUrl: 'https://github.com/Kapscoder',
    accentColor: '#818CF8',
    icon: 'Brain',
  },
  {
    id: 'hirez',
    title: 'HireZ – Hiring Platform',
    description:
      'A real-time hiring platform with advanced job search, personalized job recommendations, and RESTful APIs supporting 100+ job postings with dynamic filtering.',
    techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    metrics: '100+ job postings • Personalized recommendations',
    githubUrl: 'https://github.com/Kapscoder',
    accentColor: '#10B981',
    icon: 'Briefcase',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'language',
    label: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'framework',
    label: 'Frameworks & Libraries',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'Next.js',
      'Tailwind CSS',
      'Mongoose',
      'TanStack Query',
      'Zustand',
    ],
  },
  {
    category: 'database',
    label: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'tool',
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'AWS'],
  },
  {
    category: 'concept',
    label: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'REST APIs', 'WebSockets'],
  },
];

export const education: Education = {
  institution: 'Vishwakarma Institute of Technology',
  degree: 'B.Tech.',
  branch: 'Computer Engineering',
  cgpa: '8.58',
  duration: 'June 2021 – June 2025',
  location: 'Pune, Maharashtra',
};

export const certifications: Certification[] = [
  {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM',
    issuerColor: '#0F62FE',
  },
  {
    title: 'AWS Solutions Architect – Associate (SAA-C03) Preparation',
    issuer: 'AWS',
    issuerColor: '#FF9900',
  },
];

export const extracurriculars: Extracurricular[] = [
  {
    title: 'Police Mitra Volunteer',
    description: 'Contributed to crowd management during Ganesh Festival',
    hours: '50+',
  },
  {
    title: 'Multimedia Coordinator – Ekasutram',
    description: 'Designed posters and social media creatives for events',
  },
];

export const stats: Stat[] = [
  { label: '2+', value: '2', suffix: 'Internships' },
  { label: '7+', value: '8', suffix: 'Projects' },
  { label: '10+', value: '10', suffix: 'Technologies' },
  { label: '1+', value: '1', suffix: 'Years Experience' },
];
