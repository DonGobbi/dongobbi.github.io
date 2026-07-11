'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { projects, categories, type ProjectCategory } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-spacing">
      <div className="mb-10 text-center">
        <h2 className="gradient-text mb-4 text-3xl font-bold md:text-4xl">Projects</h2>
        <p className="mx-auto max-w-2xl text-lg text-white/60">
          A selection of real projects from my GitHub — spanning AI, education technology,
          and web platforms, many built for African communities and businesses.
        </p>
      </div>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? 'border-purple-400/50 bg-purple-500/20 text-white'
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                language={project.language}
                icon={project.icon}
                accent={project.accent}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View all CTA */}
      <div className="mt-12 text-center">
        <motion.a
          href="https://github.com/DonGobbi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/80 transition-colors hover:border-purple-400/40 hover:text-white"
        >
          <FaGithub size={20} />
          View all repositories on GitHub
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
