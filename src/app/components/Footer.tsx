'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DonGobbi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/don-nshombo-88366a3b8/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/dongobbi', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:don@rexplore.ai', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Don Nshombo Gobbi</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Full-Stack Developer passionate about creating innovative solutions 
              with AI and modern web technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500/20 flex items-center justify-center text-white/60 hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-white/60 mb-2">don@rexplore.ai</p>
            <p className="text-white/60 mb-6">Available for freelance work</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Don Nshombo Gobbi. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
