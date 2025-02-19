'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SimpleContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-lg animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCheck} className="text-3xl text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you soon!</p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 animate-shake">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span>Failed to send message. Please try again or email me directly at dongobbinshombo@gmail.com</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Project discussion"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium
                 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Message
          </span>
        )}
      </button>
    </form>
  );
};

export default SimpleContactForm;
