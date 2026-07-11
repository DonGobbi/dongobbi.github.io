'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-[120px]"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 md:px-4 max-w-5xl mx-auto space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <div className="text-xl md:text-2xl text-purple-300 font-light">Hello, I'm</div>
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 hero-text tracking-tight">
          Don Nshombo Gobbi
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-relaxed">
            A Full-Stack &amp; AI Developer building
            <div className="h-[1.5em] overflow-hidden mt-2">
              <motion.div
                animate={{ y: [0, -60, -120, -180, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
              >
                <div className="h-[1.5em] text-purple-400">AI Applications</div>
                <div className="h-[1.5em] text-blue-400">Education Technology</div>
                <div className="h-[1.5em] text-indigo-400">Solutions for Africa</div>
                <div className="h-[1.5em] text-violet-400">Modern Web Apps</div>
                <div className="h-[1.5em] text-purple-400">AI Applications</div>
              </motion.div>
            </div>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed px-2"
        >
          I build practical AI-powered products and full-stack web apps — from AI tutors
          and quiz platforms to translation services — often designed for African communities.
          Let's build something meaningful together. ✨
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg text-white border border-purple-400/30 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all"
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/DonGobbi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ y: 0 }}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-purple-500/20 flex items-center justify-center text-white/60 hover:text-purple-400 transition-all"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/don-nshombo-88366a3b8/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ y: 0 }}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-blue-500/20 flex items-center justify-center text-white/60 hover:text-blue-400 transition-all"
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:don@rexplore.ai"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ y: 0 }}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-purple-500/20 flex items-center justify-center text-white/60 hover:text-purple-400 transition-all"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
          >
            <a href="#about" className="text-white/50 hover:text-purple-400/80 transition-colors" aria-label="Scroll to About section" title="Scroll down">
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
