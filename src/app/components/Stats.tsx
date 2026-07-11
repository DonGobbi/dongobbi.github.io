'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats: StatItem[] = [
    { value: 14, suffix: '+', label: 'Public Repositories', icon: '📦' },
    { value: 8, suffix: '+', label: 'AI-Powered Projects', icon: '🧠' },
    { value: 3, suffix: '', label: 'Live Products', icon: '�' },
    { value: 3, suffix: '+', label: 'Years Building', icon: '⏱️' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="glass rounded-2xl p-6 text-center"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-white/60 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
