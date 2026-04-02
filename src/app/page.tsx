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
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Stats from './components/Stats';
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
      title: 'AI Knowledge Base',
      description: 'An intelligent knowledge management system powered by LLMs that enables semantic search, automatic document summarization, and context-aware Q&A across your entire document library.',
      image: '/projects/AI_KnowledgeBase.png',
      tags: ['FastAPI', 'LangChain', 'Next.js', 'Chroma DB'],
      githubUrl: 'https://github.com/DonGobbi/ai-knowledge-base',
      liveUrl: 'https://ai-kb.dongobbi.dev'
    },
    {
      title: 'Data Platform',
      description: 'A comprehensive enterprise data management and analytics platform featuring real-time dashboards, ETL pipelines, and advanced visualization capabilities.',
      image: '/projects/dataPlatform.png',
      tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Redux'],
      githubUrl: 'https://github.com/DonGobbi/data-platform',
      liveUrl: 'https://data.dongobbi.dev'
    },
    {
      title: 'Vector Search Engine',
      description: 'A high-performance vector similarity search engine supporting millions of embeddings with sub-millisecond query times and hybrid search capabilities.',
      image: '/projects/vector.png',
      tags: ['Pinecone', 'Qdrant', 'React', 'TailwindCSS'],
      githubUrl: 'https://github.com/DonGobbi/vector-search',
      liveUrl: 'https://vector.dongobbi.dev'
    },
    {
      title: 'AI Chat Assistant',
      description: 'A conversational AI assistant with multi-modal capabilities, supporting text, images, and code generation with context-aware responses.',
      image: '/projects/AI_KnowledgeBase.png',
      tags: ['OpenAI', 'Next.js', 'WebSocket', 'Redis'],
      githubUrl: 'https://github.com/DonGobbi/ai-chat',
      liveUrl: 'https://chat.dongobbi.dev'
    },
    {
      title: 'DevOps Dashboard',
      description: 'A unified DevOps monitoring dashboard integrating CI/CD pipelines, infrastructure metrics, and deployment automation in one interface.',
      image: '/projects/dataPlatform.png',
      tags: ['Kubernetes', 'Prometheus', 'Grafana', 'React'],
      githubUrl: 'https://github.com/DonGobbi/devops-dashboard'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution with AI-powered product recommendations, real-time inventory management, and seamless payment integration.',
      image: '/projects/vector.png',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/DonGobbi/ecommerce',
      liveUrl: 'https://shop.dongobbi.dev'
    }
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  I'm a passionate <span className="text-purple-400 font-semibold">Full-Stack Developer</span> with 
                  a deep love for building innovative solutions that make a real impact. My journey in tech started 
                  with curiosity and has evolved into expertise across the entire development stack.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  I specialize in <span className="text-blue-400 font-semibold">AI-powered applications</span>, 
                  crafting intelligent systems using LangChain, vector databases, and modern LLMs. From concept 
                  to deployment, I bring ideas to life with clean code and beautiful interfaces.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-sm">
                    🚀 Problem Solver
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-sm">
                    💡 Innovation Driven
                  </span>
                  <span className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm">
                    🎯 Detail Oriented
                  </span>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <span className="text-white font-bold text-lg">5+ yrs</span>
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl -z-10" />
              </div>
            </div>
            <Stats />
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

        <Experience />

        <Testimonials />

        <section id="contact" className="section-spacing pb-16">
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white/90 mb-4 text-center gradient-text"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg text-center mb-8 max-w-xl mx-auto"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </motion.p>
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

      <Footer />
      <ChatBot />
    </main>
  );
}
