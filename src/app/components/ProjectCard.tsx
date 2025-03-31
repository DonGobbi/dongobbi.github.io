'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description,
  image,
  tags, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card group relative overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
        {image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-bold text-purple-400/80">{title}</div>
          </div>
        )}
      </div>

      <div className="relative p-6">
        <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-purple-400 transition-colors"
              title={`View ${title} source code on GitHub`}
            >
              <FaGithub size={24} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-purple-400 transition-colors"
              title={`View ${title} live demo`}
            >
              <FaExternalLinkAlt size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
