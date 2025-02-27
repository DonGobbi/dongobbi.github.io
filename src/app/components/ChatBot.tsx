'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faTimes, faRobot, faMessage } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string | JSX.Element;
  timestamp?: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: (
            <div className="space-y-2">
              <p>Hi, I'm Don's AI Assistant! 👋 How can I help you today?</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Projects', 'Skills', 'Contact'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleQuickAction(topic.toLowerCase())}
                    className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ),
          timestamp: new Date(),
        },
      ]);
    }
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: string) => {
    const responses: { [key: string]: string } = {
      projects: "I'd be happy to tell you about Don's projects! Here are some highlights:\n\n" +
        "🚀 AI-Powered Knowledge Base\n" +
        "🔍 Vector Search Engine\n" +
        "📊 Enterprise Data Platform\n\n" +
        "Which one would you like to know more about?",
      skills: "Don is skilled in various technologies:\n\n" +
        "💻 Full-Stack: FastAPI, Next.js, React\n" +
        "🤖 AI/ML: LangChain, PyTorch, Transformers\n" +
        "☁️ Cloud: AWS, Docker, Kubernetes\n\n" +
        "What area interests you most?",
      contact: "You can reach Don through:\n\n" +
        "📧 Email via the contact form\n" +
        "💼 LinkedIn profile\n" +
        "🐙 GitHub repositories\n\n" +
        "Would you like me to direct you to any of these?"
    };

    setMessages((prev) => [
      ...prev,
      { 
        role: 'user', 
        content: action, 
        timestamp: new Date() 
      },
      {
        role: 'assistant',
        content: responses[action] || "I'm not sure about that. Could you try asking something else?",
        timestamp: new Date()
      }
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { 
      role: 'user', 
      content: userMessage,
      timestamp: new Date()
    }]);
    setIsLoading(true);

    try {
      const apiUrl = window.location.origin + '/api/chat';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
        mode: 'cors'
      });

      if (!response.ok) throw new Error('Failed to get response');
      const data = await response.json();
      
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: data.response,
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'I apologize, but I encountered an error. Please try asking your question again.',
          timestamp: new Date()
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
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
                <FontAwesomeIcon icon={faRobot} className="text-white" />
              </div>
              <h3 className="font-semibold text-white/90">AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/60 hover:text-white/90 transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-8rem)]">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white'
                      : 'bg-white/5 text-white/90'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  {message.timestamp && (
                    <div className="text-xs text-white/40 mt-1">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm border-t border-white/10"
          >
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 text-white placeholder-white/40 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                disabled={isLoading}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;