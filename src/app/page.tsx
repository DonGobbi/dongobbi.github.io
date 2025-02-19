import React from 'react';
import NavLink from './components/NavLink';
import ChatBot from './components/ChatBot';
import ContactForm from './components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faTools, faCode, faEnvelope, faServer,
  faBrain, faDatabase, faShieldAlt, faMobileAlt,
  faTerminal, faProjectDiagram, faRobot, faSearch,
  faHeart, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faLinkedin, faTwitter, faPython,
  faDocker, faReact, faCss3, faGitAlt
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed w-full bg-gradient-to-r from-primary via-primary-dark to-secondary text-white py-6 shadow-lg z-50 animate-slide-down">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 animate-float">
            My Portfolio
          </h1>
          <nav className="flex justify-center">
            <ul className="flex space-x-8">
              <li><NavLink href="#about" icon={faUser}>About</NavLink></li>
              <li><NavLink href="#skills" icon={faTools}>Skills</NavLink></li>
              <li><NavLink href="#projects" icon={faCode}>Projects</NavLink></li>
              <li><NavLink href="#contact" icon={faEnvelope}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-40">
        <section id="about" className="mb-20 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="glass-effect p-8 rounded-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to my portfolio! I specialize in full-stack development with expertise in modern AI frameworks. 
              I build scalable applications using FastAPI and Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="skill-card animate-fade-in">
              <h3><FontAwesomeIcon icon={faServer} /> Backend Development</h3>
              <ul className="skill-list">
                <li><FontAwesomeIcon icon={faPython} /> Python/FastAPI</li>
                <li><FontAwesomeIcon icon={faDatabase} /> SQLAlchemy & Alembic</li>
                <li><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</li>
                <li><FontAwesomeIcon icon={faDocker} /> Docker</li>
                <li><FontAwesomeIcon icon={faShieldAlt} /> API Security</li>
              </ul>
            </div>

            <div className="skill-card animate-fade-in">
              <h3><FontAwesomeIcon icon={faCode} /> Frontend Development</h3>
              <ul className="skill-list">
                <li><FontAwesomeIcon icon={faReact} /> Next.js</li>
                <li><FontAwesomeIcon icon={faReact} /> React.js</li>
                <li><FontAwesomeIcon icon={faCss3} /> TailwindCSS</li>
                <li><FontAwesomeIcon icon={faCode} /> Redux & React Redux</li>
                <li><FontAwesomeIcon icon={faMobileAlt} /> Responsive Design</li>
              </ul>
            </div>

            <div className="skill-card animate-fade-in">
              <h3><FontAwesomeIcon icon={faBrain} /> AI Technologies</h3>
              <ul className="skill-list">
                <li><FontAwesomeIcon icon={faRobot} /> LangChain</li>
                <li><FontAwesomeIcon icon={faDatabase} /> LLAMA Index</li>
                <li><FontAwesomeIcon icon={faDatabase} /> Chroma DB</li>
                <li><FontAwesomeIcon icon={faSearch} /> Pinecone</li>
                <li><FontAwesomeIcon icon={faDatabase} /> Qdrant</li>
              </ul>
            </div>

            <div className="skill-card animate-fade-in">
              <h3><FontAwesomeIcon icon={faTools} /> Development Tools</h3>
              <ul className="skill-list">
                <li><FontAwesomeIcon icon={faGitAlt} /> Git/GitHub</li>
                <li><FontAwesomeIcon icon={faTerminal} /> CI/CD</li>
                <li><FontAwesomeIcon icon={faCode} /> Version Control</li>
                <li><FontAwesomeIcon icon={faProjectDiagram} /> System Design</li>
                <li><FontAwesomeIcon icon={faShieldAlt} /> Security Best Practices</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card animate-fade-in group">
              <h3><FontAwesomeIcon icon={faRobot} /> AI-Powered Knowledge Base</h3>
              <p>
                A sophisticated document processing system using LangChain and LLAMA Index for intelligent information retrieval and analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">LangChain</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">Chroma DB</span>
              </div>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark group-hover:translate-x-2 transition-transform duration-300">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className="project-card animate-fade-in group">
              <h3><FontAwesomeIcon icon={faDatabase} /> Enterprise Data Platform</h3>
              <p>
                Scalable data management system built with FastAPI, PostgreSQL, and SQLAlchemy, containerized with Docker.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Redux</span>
              </div>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark group-hover:translate-x-2 transition-transform duration-300">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>

            <div className="project-card animate-fade-in group">
              <h3><FontAwesomeIcon icon={faSearch} /> Vector Search Engine</h3>
              <p>
                Advanced search system utilizing Pinecone and Qdrant for efficient vector similarity search and retrieval.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-badge">Pinecone</span>
                <span className="tech-badge">Qdrant</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">TailwindCSS</span>
              </div>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark group-hover:translate-x-2 transition-transform duration-300">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 mb-4">
                Interested in collaborating on innovative projects? Let's connect and discuss how we can work together!
              </p>
              <div className="flex justify-center gap-6 mb-8">
                <a href="https://github.com/dongobbi" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/don-nshombo-799aab186/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/dongobbi" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary via-primary-dark to-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCode} /> Built with Next.js & TailwindCSS
            <FontAwesomeIcon icon={faHeart} className="text-red-400 animate-pulse" /> 2024
          </p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
