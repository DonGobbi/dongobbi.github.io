'use client';

import { motion } from 'framer-motion';

interface TechItemProps {
  name: string;
  icon: string;
  category: string;
}

const TechStack = () => {
  const techItems: TechItemProps[] = [
    // Languages
    { name: 'TypeScript', icon: '�', category: 'Languages' },
    { name: 'JavaScript', icon: '📜', category: 'Languages' },
    { name: 'Python', icon: '�', category: 'Languages' },
    { name: 'C++', icon: '⚙️', category: 'Languages' },
    { name: 'HTML5', icon: '🌐', category: 'Languages' },
    { name: 'CSS3', icon: '🎨', category: 'Languages' },

    // Frameworks & Libraries
    { name: 'Next.js', icon: '▲', category: 'Frameworks' },
    { name: 'React', icon: '⚛️', category: 'Frameworks' },
    { name: 'FastAPI', icon: '⚡', category: 'Frameworks' },
    { name: 'Express', icon: '🚂', category: 'Frameworks' },
    { name: 'Node.js', icon: '🟢', category: 'Frameworks' },
    { name: 'Tailwind CSS', icon: '🌊', category: 'Frameworks' },

    // AI & LLMs
    { name: 'Groq', icon: '⚡', category: 'AI & LLMs' },
    { name: 'Nebius AI', icon: '🧠', category: 'AI & LLMs' },
    { name: 'LLMs', icon: '🤖', category: 'AI & LLMs' },
    { name: 'OCR', icon: '�', category: 'AI & LLMs' },

    // Data & Backend
    { name: 'MongoDB', icon: '🍃', category: 'Data & Backend' },
    { name: 'Firebase', icon: '�', category: 'Data & Backend' },
    { name: 'REST APIs', icon: '🔌', category: 'Data & Backend' },
    { name: 'Google Auth', icon: '�', category: 'Data & Backend' },

    // Tools & DevOps
    { name: 'Git', icon: '📚', category: 'Tools & DevOps' },
    { name: 'GitHub', icon: '🐙', category: 'Tools & DevOps' },
    { name: 'GitHub Actions', icon: '🔄', category: 'Tools & DevOps' },
    { name: 'Vercel', icon: '▲', category: 'Tools & DevOps' },
    { name: 'Linux', icon: '�', category: 'Tools & DevOps' }
  ];

  const categories = Array.from(new Set(techItems.map(item => item.category)));

  return (
    <div className="w-full space-y-8">
      {categories.map((category, categoryIndex) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-white/90">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {techItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/5 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-white/80">{item.name}</span>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
