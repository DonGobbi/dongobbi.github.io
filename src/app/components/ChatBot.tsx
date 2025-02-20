'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Message {
  role: 'user' | 'assistant';
  content: string | JSX.Element;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: (
            <div>
              Hi, I’m Don’s AI Assistant! How can I help you today? <br />
              Try asking about <span className="underline cursor-pointer" onClick={() => handleQuickAction('projects')}>projects</span>, 
              <span className="underline cursor-pointer" onClick={() => handleQuickAction('skills')}> skills</span>, or 
              <span className="underline cursor-pointer" onClick={() => handleQuickAction('contact')}> contact info</span>!
            </div>
          ),
        },
      ]);
    }
    scrollToBottom();
  }, [isOpen]);

  const handleQuickAction = (action: string) => {
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: action },
      {
        role: 'assistant',
        content:
          action === 'projects'
            ? 'Check out Don’s projects like the AI-Powered Knowledge Base or Vector Search Engine! Want details on one?'
            : action === 'skills'
            ? 'Don’s skilled in FastAPI, Next.js, and AI tools like LangChain. What do you want to know more about?'
            : 'Want to contact Don? I can collect your info or direct you to the contact section!',
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://dongobbi.github.io/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
        mode: 'cors'
      });

      if (!response.ok) throw new Error('Failed to get response');
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Oops, something went wrong. Let’s try that again!' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 flex justify-between items-center">
            <span className="text-white font-semibold text-sm">Don’s AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-3 bg-gray-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-2 text-sm ${
                    message.role === 'user'
                      ? 'bg-teal-400 text-gray-900'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white rounded-lg p-2">
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-1 focus:ring-teal-400 transition-all duration-200 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-3 py-1 rounded-lg bg-teal-400 text-gray-900 hover:bg-teal-300 disabled:opacity-50 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;