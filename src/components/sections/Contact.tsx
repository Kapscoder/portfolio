import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/portfolioData';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kapilswavale@gmail.com',
    href: 'mailto:kapilswavale@gmail.com',
    color: '#38BDF8',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8767570359',
    href: 'tel:+918767570359',
    color: '#818CF8',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedin,
    color: '#0A66C2',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my code',
    href: personalInfo.github,
    color: '#333',
  },
];

export function Contact() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section section-max scroll-mt-navbar" id="contact" ref={ref}>
      <SectionHeading title="Get In Touch" subtitle="Let's collaborate and build something amazing together" />

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
              rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noopener noreferrer'}
              className="card group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-bg-primary group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6" style={{ color: link.color }} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{link.label}</h4>
                  <p className="text-text-secondary text-sm">{link.value}</p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Status badge */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-accent font-semibold">Open to opportunities</span>
        </div>
      </motion.div>
    </section>
  );
}
