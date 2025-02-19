'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvojyayw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        // Reset the submitted state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-center">Message sent successfully! Thank you for reaching out.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Your message"
            className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors duration-200 relative overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
