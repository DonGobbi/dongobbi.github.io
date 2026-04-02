'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechStart Inc',
      content: 'Don is an exceptional developer who consistently delivers high-quality work. His expertise in AI and full-stack development helped us launch our product ahead of schedule.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'Byamasu Patrick',
      role: 'CEO',
      company: 'Rexplore.ai',
      content: 'Working with Don was a fantastic experience. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'Digital Ventures',
      content: 'Don transformed our vision into reality. His technical skills combined with excellent communication made the entire development process smooth and efficient.',
      avatar: '👩‍🚀',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-spacing overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            What People Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 text-purple-500/30">
                  <FaQuoteLeft size={40} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
