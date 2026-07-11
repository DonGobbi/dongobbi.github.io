# Don Nshombo Gobbi — Portfolio

The source code for my personal portfolio, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It showcases my work as a Full-Stack & AI Developer building practical AI-powered products and web apps — many designed for African communities and education.

Live site: **[dongobbi.github.io](https://dongobbi.github.io)**

## Tech Stack

**Languages:** TypeScript, JavaScript, Python, C++, HTML5, CSS3

**Frameworks & Libraries:** Next.js 14, React, FastAPI, Express, Node.js, Tailwind CSS, Framer Motion

**AI & LLMs:** Groq, Nebius AI, LLM integration, OCR

**Data & Backend:** MongoDB, Firebase, REST APIs, Google Auth

**Tools & DevOps:** Git, GitHub, GitHub Actions, Vercel, Linux

## Featured Projects

| Project | Description | Tech | Links |
| --- | --- | --- | --- |
| **MwanaAI** | AI study companion for students in Malawi — adapts to class level, explains step by step, and reads homework photos. | Next.js, Groq AI, OCR | [Code](https://github.com/DonGobbi/MwanaAI) |
| **Transluga** | African-language translation & interpretation platform with a live translation demo. | HTML, CSS, JS | [Code](https://github.com/DonGobbi/transLuga) · [Live](https://dongobbi.github.io/transLuga/) |
| **Quiz Management System** | Quiz platform for educators and students with timer, auto-submit, and analytics. | Next.js, Firebase, TS | [Code](https://github.com/DonGobbi/QuizManagementSystem) · [Live](https://dongobbi.github.io/QuizManagementSystem/) |
| **StoryLoom** | Interactive visual novel with a branching narrative and AI-generated content. | React, TS, AI | [Code](https://github.com/DonGobbi/storyloom) · [Live](https://dongobbi.github.io/storyloom/) |
| **CV Generator** | AI-powered CV/resume builder with Google auth and AI-assisted content. | Next.js, Express, MongoDB, Groq | [Code](https://github.com/DonGobbi/CV_Generator) |
| **SynapseIQ** | AI solutions platform for African businesses (FastAPI + Next.js). | FastAPI, Next.js, TS | [Code](https://github.com/DonGobbi/SynapseIQ-) |

More projects are on my [GitHub profile](https://github.com/DonGobbi?tab=repositories).

## Features
- Modern, responsive glassmorphism design with smooth Framer Motion animations
- Data-driven projects section with category filtering (AI, Education, Web, Creative, Tools)
- Honest, GitHub-sourced stats and content
- Mobile-first, accessible, and SEO-optimized

## Project Structure
```
dongobbi.github.io/
├── src/
│   └── app/
│       ├── components/      # Hero, Navigation, Projects, ProjectCard, Highlights, etc.
│       ├── data/
│       │   └── projects.ts  # Central project list (edit projects here)
│       ├── hooks/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── .github/workflows/       # GitHub Pages deploy workflow
├── next.config.js           # Static export config (output: 'export')
├── tailwind.config.js
└── package.json
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/DonGobbi/dongobbi.github.io.git
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build   # produces a static export in ./out
```

## Editing Projects
All projects are defined in a single file: `src/app/data/projects.ts`. Add or update an entry there and the Projects section (and category filters) will update automatically.

## Deployment
Automatically deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. The contact form uses a Formspree endpoint configured through the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` secret.

## Contact
- **GitHub:** [@DonGobbi](https://github.com/DonGobbi)
- **LinkedIn:** [Don Nshombo Gobbi](https://www.linkedin.com/in/don-nshombo-88366a3b8/)
- **Email:** don@rexplore.ai
