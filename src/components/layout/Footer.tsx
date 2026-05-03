import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-elevated border-t border-color-border mt-20">
      <div className="section section-max">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="inline-block text-2xl font-extrabold text-transparent bg-gradient-to-r from-accent to-accent-2 bg-clip-text hover:opacity-80 transition-opacity"
            >
              KW
            </button>
            <p className="text-text-secondary mt-2">Designed & Built by Kapil Wavale</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-bg-card rounded-lg hover:border-accent hover:text-accent border border-color-border transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-bg-card rounded-lg hover:border-accent hover:text-accent border border-color-border transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-bg-card rounded-lg hover:border-accent hover:text-accent border border-color-border transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-color-border mt-8 pt-8 text-center text-text-muted text-sm">
          <p>&copy; {currentYear} Kapil Wavale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
