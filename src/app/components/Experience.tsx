'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}

const Experience = () => {
  const timeline: TimelineItem[] = [
    {
      year: '2023 - Present',
      title: 'Director of Operations',
      company: 'Rexplore.ai',
      description: 'Leading operations and development of AI-powered applications, architecting scalable cloud solutions, and driving strategic initiatives.',
      type: 'work'
    },
    {
      year: '2022 - 2025',
      title: 'AI Trainer & Data Analyst',
      company: 'RWS Group',
      description: 'Trained AI models, performed data analysis, and contributed to machine learning projects. Ensured data quality and accuracy for AI training datasets.',
      type: 'work'
    },
    {
      year: '2015 - 2019',
      title: 'Computer Engineering Degree',
      company: 'University of Livingstonia',
      description: 'Bachelor\'s degree in Computer Engineering with focus on Software Engineering and Artificial Intelligence.',
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.type === 'work' 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                      : 'bg-gradient-to-br from-amber-500 to-orange-500'
                  } shadow-lg shadow-purple-500/25`}
                >
                  {item.type === 'work' ? (
                    <FaBriefcase className="text-white text-lg" />
                  ) : (
                    <FaGraduationCap className="text-white text-lg" />
                  )}
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:pr-8 pl-20 md:pl-0' : 'md:pl-8 pl-20'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-purple-400 mb-3">{item.company}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
