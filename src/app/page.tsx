'use client';

import { faUser, faCode, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavLink from './components/NavLink';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';
import ParticleBackground from './components/ParticleBackground';
import NoiseOverlay from './components/NoiseOverlay';
import Hero from './components/Hero';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const skills = [
    { name: 'Full-Stack Development', level: 95, color: 'linear-gradient(90deg, #6366F1, #818CF8)' },
    { name: 'AI & Machine Learning', level: 90, color: 'linear-gradient(90deg, #8B5CF6, #A78BFA)' },
    { name: 'Cloud Architecture', level: 88, color: 'linear-gradient(90deg, #EC4899, #F472B6)' },
    { name: 'DevOps & CI/CD', level: 92, color: 'linear-gradient(90deg, #3B82F6, #60A5FA)' },
    { name: 'System Design', level: 87, color: 'linear-gradient(90deg, #14B8A6, #2DD4BF)' },
    { name: 'Database Management', level: 93, color: 'linear-gradient(90deg, #F59E0B, #FBBF24)' },
    { name: 'API Development', level: 94, color: 'linear-gradient(90deg, #9333EA, #C084FC)' },
    { name: 'UI/UX Design', level: 85, color: 'linear-gradient(90deg, #EF4444, #F87171)' }
  ];

  const projects = [
    {
      title: 'AI-Powered Knowledge Base',
      description: 'A sophisticated document processing system using LangChain and LLAMA Index for intelligent information retrieval and analysis.',
      tags: ['FastAPI', 'LangChain', 'Next.js', 'Chroma DB'],
    },
    {
      title: 'Enterprise Data Platform',
      description: 'Scalable data management system built with FastAPI, PostgreSQL, and SQLAlchemy, containerized with Docker.',
      tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Redux'],
    },
    {
      title: 'Vector Search Engine',
      description: 'Advanced search system utilizing Pinecone and Qdrant for efficient vector similarity search and retrieval.',
      tags: ['Pinecone', 'Qdrant', 'React', 'TailwindCSS'],
    },
  ];

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[var(--background-start)] to-[var(--background-end)]">
      <Navigation />
      <AnimatedBackground />
      <ParticleBackground />
      <NoiseOverlay />

      <div className="container mx-auto px-4 md:px-8">
        <Hero />

        <section id="about" className="section-spacing">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8 text-center gradient-text">About Me</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Welcome to my portfolio! I specialize in full-stack development with expertise
              in modern AI frameworks. I build scalable applications using FastAPI and
              Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
            </p>
          </motion.div>
        </section>

        <section id="projects" className="section-spacing">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-4 gradient-text">Featured Projects</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Here are some of my recent works that showcase my expertise in AI and full-stack development
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white/90 mb-12 text-center gradient-text"
            >
              Skills & Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-white/90 mb-8 text-center">Technology Stack</h3>
              <TechStack />
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section-spacing pb-32">
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white/90 mb-8 text-center gradient-text"
            >
              Let's Connect
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </div>

      <ChatBot />
    </main>
  );
}
