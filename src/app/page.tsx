'use client';

import { faUser, faCode, faLaptopCode, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import NavLink from './components/NavLink';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [isChatBotVisible, setChatBotVisible] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <p className="text-white/90 text-lg leading-relaxed">
                Welcome to my portfolio! I specialize in full-stack development with expertise
                in modern AI frameworks. I build scalable applications using FastAPI and
                Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Python/FastAPI</li>
                  <li>• SQLAlchemy & Alembic</li>
                  <li>• PostgreSQL</li>
                  <li>• Docker</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Next.js</li>
                  <li>• React.js</li>
                  <li>• TailwindCSS</li>
                  <li>• Redux & React Redux</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI Technologies</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• LangChain</li>
                  <li>• LLAMA Index</li>
                  <li>• Chroma DB</li>
                  <li>• Pinecone</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Development Tools</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Git/GitHub</li>
                  <li>• CI/CD</li>
                  <li>• Version Control</li>
                  <li>• System Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Knowledge Base</h3>
                <p className="text-white/90 mb-4">
                  A sophisticated document processing system using LangChain and LLAMA Index for intelligent information retrieval and analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">LangChain</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Chroma DB</span>
                </div>
                <button className="text-white hover:text-white/80 transition-colors">Learn More →</button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Data Platform</h3>
                <p className="text-white/90 mb-4">
                  Scalable data management system built with FastAPI, PostgreSQL, and SQLAlchemy, containerized with Docker.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Redux</span>
                </div>
                <button className="text-white hover:text-white/80 transition-colors">Learn More →</button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Vector Search Engine</h3>
                <p className="text-white/90 mb-4">
                  Advanced search system utilizing Pinecone and Qdrant for efficient vector similarity search and retrieval.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Pinecone</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Qdrant</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">TailwindCSS</span>
                </div>
                <button className="text-white hover:text-white/80 transition-colors">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      {/* ChatBot Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatBotVisible(!isChatBotVisible)}
          className="bg-[#61DAFB] text-gray-900 rounded-full p-3 shadow-lg hover:bg-[#4fa8c2] transition duration-200"
        >
          <FontAwesomeIcon icon={faComment} />
        </button>
      </div>

      {isChatBotVisible && <ChatBot />}
    </main>
  );
}
