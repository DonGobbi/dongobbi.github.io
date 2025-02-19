'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/mvojyayw"
      method="POST"
      className="space-y-6"
    >
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
          className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none"
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
          className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none"
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
          className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none resize-none"
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
  );
};

export default ContactForm;
