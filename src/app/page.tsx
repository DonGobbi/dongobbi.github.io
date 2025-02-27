'use client';

import { faUser, faCode, faLaptopCode, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
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
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export default function Home() {
  const [isChatBotVisible, setChatBotVisible] = useState(false);

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
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <ParticleBackground />
      <NoiseOverlay />

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 glass z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white/90"
            >
              Don Gobbi
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <NavLink href="#about" icon={faUser}>About</NavLink>
              <NavLink href="#skills" icon={faCode}>Skills</NavLink>
              <NavLink href="#projects" icon={faLaptopCode}>Projects</NavLink>
              <NavLink href="#contact" icon={faEnvelope}>Contact</NavLink>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="relative z-10">
        {/* About Section */}
        <section id="about" className="min-h-screen py-16 px-4 flex items-center">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-8 hover-card"
            >
              <p className="text-white/80 text-lg leading-relaxed">
                Welcome to my portfolio! I specialize in full-stack development with expertise
                in modern AI frameworks. I build scalable applications using FastAPI and
                Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white/90 mb-12"
            >
              Skills & Expertise
            </motion.h2>
            
            {/* Skill Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-white/90 mb-8">Technology Stack</h3>
              <TechStack />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white/90 mb-12"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white/90 mb-12"
            >
              Contact Me
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </div>

      {/* ChatBot Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatBotVisible(!isChatBotVisible)}
          className="glass text-white/80 rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200"
        >
          <FontAwesomeIcon icon={faComment} className="text-xl" />
        </motion.button>
      </div>

      {isChatBotVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-4 w-80"
        >
          <div className="glass rounded-lg shadow-xl">
            <ChatBot />
          </div>
        </motion.div>
      )}
    </main>
  );
}
