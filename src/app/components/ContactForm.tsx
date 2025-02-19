'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mvojyayw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none"
          disabled={status === 'submitting'}
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
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none"
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Your message"
          className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/50 focus:outline-none resize-none"
          disabled={status === 'submitting'}
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-center">Your message has been sent successfully!</p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors duration-200 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </span>
          <div className="absolute inset-0 bg-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
