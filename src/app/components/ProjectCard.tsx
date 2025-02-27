'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const ProjectCard = ({ title, description, tags, image }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="glass p-8 relative z-10 h-full transition-all duration-300 group-hover:bg-white/10">
        {image && (
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white/90 mb-4 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 glass text-sm text-white/60 group-hover:text-white/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-4 py-2 text-sm text-white/80 rounded-md group-hover:text-white transition-colors"
          >
            Learn More →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
