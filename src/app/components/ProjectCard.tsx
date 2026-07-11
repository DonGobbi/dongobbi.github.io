'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { languageColors } from '../data/projects';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category?: string;
  language?: string;
  icon?: string;
  accent?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  category,
  language,
  icon = '💡',
  accent = 'from-purple-500/30 to-blue-500/30',
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <motion.div className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl !p-0">
      {/* Header */}
      <div
        className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${accent}`}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
        <span className="relative text-5xl transition-transform duration-500 group-hover:scale-110">
          {icon}
        </span>
        {liveUrl && (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        )}
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {language && (
            <span className="flex shrink-0 items-center gap-1.5 text-xs text-white/60">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: languageColors[language] ?? '#9CA3AF' }}
              />
              {language}
            </span>
          )}
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">{description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-xs text-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              title={`View ${title} source code on GitHub`}
            >
              <FaGithub size={18} /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-purple-300 transition-colors hover:text-purple-200"
              title={`View ${title} live demo`}
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
