'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaGraduationCap, FaGlobeAfrica } from 'react-icons/fa';

interface Highlight {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
}

const Highlights = () => {
  const highlights: Highlight[] = [
    {
      icon: FaBrain,
      title: 'AI-Powered Applications',
      description:
        'I build practical LLM-driven products — AI tutors, resume builders, and chat assistants — using Groq, Nebius AI, and modern agentic workflows.',
      accent: 'from-purple-500 to-fuchsia-500',
    },
    {
      icon: FaLaptopCode,
      title: 'Full-Stack Web Development',
      description:
        'End-to-end apps with Next.js, React, and TypeScript on the front end, backed by FastAPI, Express, MongoDB, and Firebase.',
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      icon: FaGraduationCap,
      title: 'Education Technology',
      description:
        'Tools that help students learn: adaptive tutoring (MwanaAI), quiz management systems, and AI flashcard generators.',
      accent: 'from-cyan-500 to-teal-500',
    },
    {
      icon: FaGlobeAfrica,
      title: 'Solutions for Africa',
      description:
        'Software tailored to African contexts — from language translation (Transluga) to AI for local businesses (SynapseIQ).',
      accent: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section id="highlights" className="section-spacing overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="gradient-text mb-4 text-3xl font-bold md:text-4xl">What I Do</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            The areas where I focus my work and where I can add the most value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card flex h-full flex-col rounded-2xl p-6"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} shadow-lg`}
              >
                <item.icon className="text-xl text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
