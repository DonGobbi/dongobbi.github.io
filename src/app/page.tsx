'use client';

import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat application with AI-powered features for smart conversations and automated responses.',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.demo.com'
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A dashboard for managing and monitoring cloud infrastructure across multiple providers.',
    image: '/images/project2.jpg',
    tags: ['AWS', 'TypeScript', 'Docker', 'GraphQL'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.demo.com'
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management and analytics.',
    image: '/images/project3.jpg',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.demo.com'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer with expertise in building modern web applications. 
                My journey in software development has been driven by a deep curiosity for technology 
                and a desire to create impactful solutions.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                I specialize in React, Node.js, and cloud technologies, with a particular interest in 
                AI and machine learning applications. When I'm not coding, you can find me exploring 
                new technologies or contributing to open-source projects.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.2) 100%)',
                      'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary inline-block mt-8"
          >
            Send me a message
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
