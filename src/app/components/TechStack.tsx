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
    { name: 'Python', icon: '🐍', category: 'Languages' },
    { name: 'JavaScript', icon: '📜', category: 'Languages' },
    { name: 'TypeScript', icon: '💪', category: 'Languages' },
    { name: 'SQL', icon: '📊', category: 'Languages' },
    { name: 'HTML5', icon: '🌐', category: 'Languages' },
    { name: 'CSS3', icon: '🎨', category: 'Languages' },

    // Frameworks & Libraries
    { name: 'React', icon: '⚛️', category: 'Frameworks' },
    { name: 'Next.js', icon: '▲', category: 'Frameworks' },
    { name: 'FastAPI', icon: '⚡', category: 'Frameworks' },
    { name: 'Django', icon: '🎯', category: 'Frameworks' },
    { name: 'TailwindCSS', icon: '🌊', category: 'Frameworks' },
    { name: 'Redux', icon: '🔄', category: 'Frameworks' },

    // AI & ML
    { name: 'LangChain', icon: '🔗', category: 'AI & ML' },
    { name: 'LLAMA Index', icon: '🦙', category: 'AI & ML' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI & ML' },
    { name: 'PyTorch', icon: '🔥', category: 'AI & ML' },
    { name: 'Scikit-learn', icon: '📊', category: 'AI & ML' },
    { name: 'Hugging Face', icon: '🤗', category: 'AI & ML' },

    // Databases
    { name: 'PostgreSQL', icon: '🐘', category: 'Databases' },
    { name: 'MongoDB', icon: '🍃', category: 'Databases' },
    { name: 'Redis', icon: '📕', category: 'Databases' },
    { name: 'Chroma DB', icon: '🎨', category: 'Databases' },
    { name: 'Pinecone', icon: '🌲', category: 'Databases' },
    { name: 'Qdrant', icon: '🔍', category: 'Databases' },

    // DevOps & Tools
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Git', icon: '📚', category: 'DevOps' },
    { name: 'GitHub Actions', icon: '⚡', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'DevOps' },
    { name: 'Linux', icon: '🐧', category: 'DevOps' },
    { name: 'Nginx', icon: '🌐', category: 'DevOps' },

    // Testing & Quality
    { name: 'Jest', icon: '🃏', category: 'Testing' },
    { name: 'Pytest', icon: '🧪', category: 'Testing' },
    { name: 'Cypress', icon: '🌲', category: 'Testing' },
    { name: 'Selenium', icon: '🤖', category: 'Testing' },
    { name: 'Postman', icon: '📬', category: 'Testing' },
    { name: 'SonarQube', icon: '📊', category: 'Testing' }
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
