'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 hero-text">
          Don Nshombo Gobbi
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Creative Developer
        </h2>
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
          Crafting elegant solutions through code and design,
          <br />
          turning complex problems into beautiful experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-3 rounded-lg text-white/90 hover:text-white transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg text-white/90 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
        >
          <a href="#about" className="text-white/50 hover:text-white/70 transition-colors">
            <svg 
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
