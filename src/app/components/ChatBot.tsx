'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faTimes, faMessage } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface UserInfo {
  name: string;
  email: string;
  inquiry: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'name' | 'email' | 'inquiry' | 'confirm' | 'done'>('name');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', inquiry: '' });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, step]);

  const getPromptForStep = () => {
    switch (step) {
      case 'name':
        return "Hi! What's your name?";
      case 'email':
        return "Great! What's your email address?";
      case 'inquiry':
        return "How can I help you today?";
      case 'confirm':
        return `Perfect! Here's what I'll send to Don:\n\nName: ${userInfo.name}\nEmail: ${userInfo.email}\nInquiry: ${userInfo.inquiry}\n\nType 'send' to confirm or 'edit' to make changes.`;
      case 'done':
        return "Thanks! I've sent your message to Don. He'll get back to you soon!";
      default:
        return '';
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const value = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      switch (step) {
        case 'name':
          if (value.length < 2) {
            throw new Error('Please enter a valid name');
          }
          setUserInfo(prev => ({ ...prev, name: value }));
          setStep('email');
          break;

        case 'email':
          if (!validateEmail(value)) {
            throw new Error('Please enter a valid email address');
          }
          setUserInfo(prev => ({ ...prev, email: value }));
          setStep('inquiry');
          break;

        case 'inquiry':
          if (value.length < 5) {
            throw new Error('Please provide more details about your inquiry');
          }
          setUserInfo(prev => ({ ...prev, inquiry: value }));
          setStep('confirm');
          break;

        case 'confirm':
          if (value.toLowerCase() === 'send') {
            // Send using Formspree
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: userInfo.name,
                email: userInfo.email,
                message: userInfo.inquiry,
                source: 'Chatbot'
              })
            });

            if (!response.ok) throw new Error('Failed to send message');
            setStep('done');
            setTimeout(() => setIsOpen(false), 3000);
          } else if (value.toLowerCase() === 'edit') {
            setStep('name');
            setUserInfo({ name: '', email: '', inquiry: '' });
          } else {
            throw new Error("Type 'send' to confirm or 'edit' to make changes");
          }
          break;
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isOpen ? (
        <motion.button
          key="chat-button"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 p-4 rounded-full shadow-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:shadow-xl transition-all duration-300"
        >
          <FontAwesomeIcon icon={faMessage} className="text-xl" />
        </motion.button>
      ) : (
        <motion.div
          key="chat-window"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 sm:absolute sm:inset-auto sm:bottom-4 sm:right-4 w-full sm:w-96 h-full sm:h-[32rem] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl rounded-none sm:rounded-2xl shadow-2xl overflow-hidden border border-white/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                <FontAwesomeIcon icon={faMessage} className="text-white" />
              </div>
              <h3 className="font-semibold text-white/90">Quick Contact</h3>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setStep('name');
                setUserInfo({ name: '', email: '', inquiry: '' });
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/60 hover:text-white/90 transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 rounded-2xl p-4"
            >
              <p className="text-white/90 whitespace-pre-wrap">{getPromptForStep()}</p>
            </motion.div>
          </div>

          {/* Input */}
          {step !== 'done' && (
            <form
              onSubmit={handleSubmit}
              className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm border-t border-white/10"
            >
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type={step === 'email' ? 'email' : 'text'}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={step === 'confirm' ? "Type 'send' or 'edit'" : "Type here..."}
                  className="flex-1 bg-white/5 text-white placeholder-white/40 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  disabled={isLoading}
                  autoComplete={step === 'email' ? 'email' : 'off'}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={isLoading ? faSpinner : faPaperPlane} className={isLoading ? 'animate-spin' : ''} />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;