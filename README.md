# Kapil Wavale - Portfolio

A modern, responsive portfolio web app built with React, TypeScript, Tailwind CSS, and Framer Motion animations.

## ✨ Features

- **Modern Dark Theme** — Professional dark navy theme with electric cyan accents
- **Smooth Animations** — Scroll-triggered animations using Framer Motion and Intersection Observer
- **Responsive Design** — Mobile-first design that works on all screen sizes
- **8 Sections** — Hero, About, Experience, Projects, Skills, Education, Certifications, Contact
- **Interactive Components** — Animated stats counter, timeline, project cards, and skill badges
- **Smooth Scrolling** — Navigation links with smooth scroll to sections

## 🚀 Quick Start

### Prerequisites
- Node.js v20+ and npm installed

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📋 Setup Instructions

### Add Your Resume PDF

1. Place your resume PDF file at: `public/resume/Kapil_Wavale_Resume.pdf`
2. The "Download Resume" button in the Hero section will work once the file is added

### Customize Content

All portfolio content is centralized in `src/data/portfolioData.ts`. You can easily update:

- Personal information (name, email, phone, social links)
- Work experience (dates, companies, responsibilities)
- Projects (titles, descriptions, tech stack)
- Skills (languages, frameworks, databases, tools)
- Education and certifications
- Extracurricular activities

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-bg-primary: #0A0F1E;      /* Main background */
  --color-accent-primary: #38BDF8;  /* Primary accent (cyan) */
  --color-accent-secondary: #818CF8; /* Secondary accent (indigo) */
  /* ... more variables ... */
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Experience, etc.
│   └── ui/              # Reusable: TechTag, SkillBadge, TimelineItem, etc.
├── data/
│   └── portfolioData.ts  # All resume content (centralized)
├── hooks/
│   └── useScrollAnimation.ts  # Custom scroll animation hook
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx              # Main app component
├── index.css            # Global styles + CSS variables
└── main.tsx             # React entry point
```

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Scroll Detection:** React Intersection Observer

## 🎨 Design System

### Colors
- **Primary Background:** #0A0F1E (dark navy)
- **Primary Accent:** #38BDF8 (cyan)
- **Secondary Accent:** #818CF8 (indigo)
- **Text Primary:** #F1F5F9 (light slate)
- **Text Secondary:** #94A3B8 (muted slate)

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800

### Components
- Responsive grid layouts
- Smooth scroll animations
- Interactive hover states
- Glassmorphism effects (backdrop blur)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Deployment

The portfolio can be deployed to any static hosting:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.ts` with `base: '/portfolio'` (if deploying to a subdirectory)
2. Build: `npm run build`
3. Push the `dist/` folder to a `gh-pages` branch

## 🔍 Testing

The portfolio is fully responsive and tested on:
- Desktop (1920px+, 1440px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

Test by resizing your browser window or using DevTools device emulation.

## 📧 Contact

For questions or improvements:
- Email: kapilswavale@gmail.com
- GitHub: github.com/Kapscoder
- LinkedIn: linkedin.com/in/kapil-wavale

## 📄 License

MIT License — Feel free to use this portfolio as a template for your own!
