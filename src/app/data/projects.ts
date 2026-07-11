export type ProjectCategory = 'AI' | 'Education' | 'Web' | 'Creative' | 'Tools';

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  language?: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  icon: string;
  accent: string;
}

// GitHub language colors used for the small language dot on each card.
export const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F1E05A',
  HTML: '#E34C26',
  'C++': '#F34B7D',
  Python: '#3572A5',
};

export const categories: (ProjectCategory | 'All')[] = [
  'All',
  'AI',
  'Education',
  'Web',
  'Creative',
  'Tools',
];

// Real projects sourced from https://github.com/DonGobbi?tab=repositories
// Ordered to lead with the flagship project, then live demos, then the rest.
export const projects: Project[] = [
  {
    title: 'MwanaAI',
    description:
      'An AI-powered study companion for students in Malawi. It adapts to your class/form level and subject, explains concepts step by step, reads photos of your homework, and generates targeted practice questions.',
    category: 'Education',
    tags: ['Next.js', 'Groq AI', 'OCR', 'EdTech'],
    language: 'JavaScript',
    githubUrl: 'https://github.com/DonGobbi/MwanaAI',
    featured: true,
    icon: '🎓',
    accent: 'from-indigo-500/30 to-purple-500/30',
  },
  {
    title: 'Transluga',
    description:
      'A professional African-language translation and interpretation platform covering 100+ languages, complete with a live translation demo and specialist expertise in African languages.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    language: 'HTML',
    githubUrl: 'https://github.com/DonGobbi/transLuga',
    liveUrl: 'https://dongobbi.github.io/transLuga/',
    featured: true,
    icon: '🌍',
    accent: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    title: 'Quiz Management System',
    description:
      'A quiz platform for educators and students: create multiple-choice and true/false quizzes, take them with a built-in timer and auto-submit, and track results with instant feedback and analytics.',
    category: 'Education',
    tags: ['Next.js', 'Firebase', 'TypeScript', 'EdTech'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/DonGobbi/QuizManagementSystem',
    liveUrl: 'https://dongobbi.github.io/QuizManagementSystem/',
    featured: true,
    icon: '📝',
    accent: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    title: 'StoryLoom',
    description:
      "An interactive visual novel following Amina's journey from Congo to Malawi's Dzaleka Refugee Camp and on to Australia — featuring a branching narrative, AI-generated content, and animated text effects.",
    category: 'Creative',
    tags: ['React', 'TypeScript', 'AI', 'Storytelling'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/DonGobbi/storyloom',
    liveUrl: 'https://dongobbi.github.io/storyloom/',
    featured: true,
    icon: '📖',
    accent: 'from-rose-500/30 to-orange-500/30',
  },
  {
    title: 'CV Generator',
    description:
      'An AI-powered CV and resume builder that generates tailored, professional resumes, with Google authentication and AI-assisted content generation.',
    category: 'AI',
    tags: ['Next.js 14', 'Express', 'MongoDB', 'Groq AI', 'Google Auth'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/DonGobbi/CV_Generator',
    featured: true,
    icon: '📄',
    accent: 'from-purple-500/30 to-pink-500/30',
  },
  {
    title: 'SynapseIQ',
    description:
      'An AI solutions platform for African businesses, pairing a FastAPI backend with a modern Next.js frontend to ship practical, production-ready AI features.',
    category: 'AI',
    tags: ['FastAPI', 'Next.js', 'TypeScript', 'AI'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/DonGobbi/SynapseIQ-',
    featured: true,
    icon: '🧠',
    accent: 'from-blue-500/30 to-indigo-500/30',
  },
  {
    title: 'LifeSync AI Assistant',
    description:
      'A personal productivity assistant that unifies tasks, emails, and calendar events in a single chat interface powered by Nebius AI.',
    category: 'AI',
    tags: ['Nebius AI', 'Chat', 'Productivity'],
    githubUrl: 'https://github.com/DonGobbi/lifesync-ai-assistant',
    icon: '🗓️',
    accent: 'from-violet-500/30 to-fuchsia-500/30',
  },
  {
    title: 'Flashcard Generator',
    description:
      'An AI-powered flashcard generator that turns notes and study material into ready-to-use flashcards, helping students revise faster and retain more.',
    category: 'Education',
    tags: ['JavaScript', 'AI', 'EdTech'],
    language: 'JavaScript',
    githubUrl: 'https://github.com/DonGobbi/flashcard_Gen',
    icon: '🃏',
    accent: 'from-amber-500/30 to-yellow-500/30',
  },
  {
    title: 'AI Agentic Demo',
    description:
      'A demonstration of autonomous AI agents in action, featuring browser automation and real-time live streaming of the agent completing tasks.',
    category: 'AI',
    tags: ['AI Agents', 'Automation', 'Streaming'],
    githubUrl: 'https://github.com/DonGobbi/AI_Agentic_Demo',
    icon: '🤖',
    accent: 'from-purple-500/30 to-blue-500/30',
  },
  {
    title: 'Text Search Engine',
    description:
      'A fast text-file search engine written in C++, built to index and query large document collections with efficient lookups.',
    category: 'Tools',
    tags: ['C++', 'Systems', 'Search'],
    language: 'C++',
    githubUrl: 'https://github.com/DonGobbi/text-search-engine',
    icon: '🔎',
    accent: 'from-slate-500/30 to-gray-500/30',
  },
];
