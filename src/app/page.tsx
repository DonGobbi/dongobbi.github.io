'use client';

import { faUser, faCode, faLaptopCode, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import NavLink from './components/NavLink';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';
import ParticleBackground from './components/ParticleBackground';
import NoiseOverlay from './components/NoiseOverlay';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [isChatBotVisible, setChatBotVisible] = useState(false);

  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <NoiseOverlay />

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 glass z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-white/90">My Portfolio</h1>
            <div className="flex items-center gap-6">
              <NavLink href="#about" icon={faUser}>About</NavLink>
              <NavLink href="#skills" icon={faCode}>Skills</NavLink>
              <NavLink href="#projects" icon={faLaptopCode}>Projects</NavLink>
              <NavLink href="#contact" icon={faEnvelope}>Contact</NavLink>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        {/* About Section */}
        <section id="about" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="glass rounded-lg p-8 hover-card">
              <p className="text-white/80 text-lg leading-relaxed">
                Welcome to my portfolio! I specialize in full-stack development with expertise
                in modern AI frameworks. I build scalable applications using FastAPI and
                Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white/90 mb-8 animate-fade-in-up">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass rounded-lg p-6 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">Backend Development</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Python/FastAPI
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    SQLAlchemy & Alembic
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Docker
                  </li>
                </ul>
              </div>
              <div className="glass rounded-lg p-6 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">Frontend Development</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    React.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    TailwindCSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Redux & React Redux
                  </li>
                </ul>
              </div>
              <div className="glass rounded-lg p-6 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">AI Technologies</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    LangChain
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    LLAMA Index
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Chroma DB
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Pinecone
                  </li>
                </ul>
              </div>
              <div className="glass rounded-lg p-6 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">Development Tools</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Git/GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    CI/CD
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    Version Control
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2"></span>
                    System Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white/90 mb-8 animate-fade-in-up">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="glass rounded-lg p-8 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">AI-Powered Knowledge Base</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  A sophisticated document processing system using LangChain and LLAMA Index for intelligent information retrieval and analysis.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 glass text-sm text-white/60">FastAPI</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">LangChain</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">Next.js</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">Chroma DB</span>
                </div>
                <button className="glass px-4 py-2 text-sm text-white/80 rounded-md">
                  Learn More →
                </button>
              </div>

              <div className="glass rounded-lg p-8 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">Enterprise Data Platform</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Scalable data management system built with FastAPI, PostgreSQL, and SQLAlchemy, containerized with Docker.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 glass text-sm text-white/60">FastAPI</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">PostgreSQL</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">Docker</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">Redux</span>
                </div>
                <button className="glass px-4 py-2 text-sm text-white/80 rounded-md">
                  Learn More →
                </button>
              </div>

              <div className="glass rounded-lg p-8 hover-card animate-scale-in">
                <h3 className="text-xl font-semibold text-white/90 mb-4">Vector Search Engine</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Advanced search system utilizing Pinecone and Qdrant for efficient vector similarity search and retrieval.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 glass text-sm text-white/60">Pinecone</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">Qdrant</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">React</span>
                  <span className="px-3 py-1 glass text-sm text-white/60">TailwindCSS</span>
                </div>
                <button className="glass px-4 py-2 text-sm text-white/80 rounded-md">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white/90 mb-8 animate-fade-in-up">Contact Me</h2>
            <div className="glass rounded-lg p-8 animate-scale-in">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      {/* ChatBot Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatBotVisible(!isChatBotVisible)}
          className="glass text-white/80 rounded-full p-4 shadow-lg hover:shadow-xl transition duration-200 animate-fade-in-up"
        >
          <FontAwesomeIcon icon={faComment} className="text-xl" />
        </button>
      </div>

      {isChatBotVisible && (
        <div className="fixed bottom-20 right-4 w-80 animate-fade-in-up">
          <div className="glass rounded-lg shadow-xl">
            <ChatBot />
          </div>
        </div>
      )}
    </main>
  );
}
