'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faTimes, faMessage } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface UserInfo {
  name: string | null;
  email: string | null;
  message: string | null;
  wantsToChat: boolean | null;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: null,
    email: null,
    message: null,
    wantsToChat: null
  });
  const [isCollectingInfo, setIsCollectingInfo] = useState(false);
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
          content: "Hi! I'm Don's AI assistant. Would you like to chat with Don directly, or can I help you learn more about his work? (Type 'chat' to talk with Don or 'info' for general information)"
        }
      ]);
    }
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const extractEmail = (text: string): string | null => {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
    const match = text.match(emailRegex);
    return match ? match[0] : null;
  };

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    setMessages(prev => [...prev, { role, content }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    addMessage('user', userMessage);

    if (isCollectingInfo) {
      if (!userInfo.name) {
        setUserInfo(prev => ({ ...prev, name: userMessage }));
        addMessage('assistant', "Great! Now, what's your email address so Don can get back to you?");
      }
      else if (!userInfo.email) {
        if (!userMessage.includes('@') || !userMessage.includes('.')) {
          addMessage('assistant', "That doesn't look like a valid email address. Please provide a valid email so Don can contact you.");
          return;
        }
        setUserInfo(prev => ({ ...prev, email: userMessage }));
        addMessage('assistant', "Perfect! What would you like to discuss with Don?");
      }
      else if (!userInfo.message) {
        setUserInfo(prev => ({ ...prev, message: userMessage }));
        
        try {
          const response = "Thanks for reaching out! I've sent your message to Don, and he'll get back to you at " + userInfo.email + " soon. While you wait, feel free to ask me anything about Don's work!";
          addMessage('assistant', response);
          setIsCollectingInfo(false);
        } catch (error) {
          console.error('Error sending message:', error);
          addMessage('assistant', "I'm having trouble sending your message. Please try using the contact form below or email Don directly at dongobbinshombo@gmail.com");
        }
      }
    } else {
      // Handle general inquiries with predefined responses
      let response = '';
      const lowercaseMessage = userMessage.toLowerCase();

      if (lowercaseMessage.includes('chat') || lowercaseMessage.includes('contact') || lowercaseMessage.includes('talk')) {
        setIsCollectingInfo(true);
        response = "I'll help you get in touch with Don. First, what's your name?";
      } else {
        if (lowercaseMessage.includes('project')) {
          response = "Don is currently working on:\n\n" +
            "• A Vector Search Engine using AI\n" +
            "• Enterprise Data Platform\n" +
            "• AI-Powered Knowledge Base\n" +
            "• Portfolio Website with AI Integration\n\n" +
            "Would you like to know more about any of these projects?";
        } else if (lowercaseMessage.includes('skill')) {
          response = "Here are Don's key skills:\n\n" +
            "• Languages: Python, JavaScript/TypeScript, SQL\n" +
            "• Frontend: React, Next.js, TailwindCSS\n" +
            "• Backend: FastAPI, Node.js, PostgreSQL\n" +
            "• AI/ML: LangChain, PyTorch, Transformers\n" +
            "• Cloud: AWS, Docker, Kubernetes\n\n" +
            "Which area would you like to know more about?";
        } else if (lowercaseMessage.includes('experience')) {
          response = "Don's experience includes:\n\n" +
            "• Full Stack Developer with focus on AI integration\n" +
            "• Extensive experience in building scalable web applications\n" +
            "• Specialized in modern web technologies and AI solutions\n" +
            "• Strong background in data engineering and analytics\n\n" +
            "Would you like more details about any specific area?";
        } else if (lowercaseMessage.includes('education')) {
          response = "Don's educational background:\n\n" +
            "• Computer Science background\n" +
            "• Continuous learning in AI and Machine Learning\n" +
            "• Regular participation in tech conferences\n" +
            "• Active in online tech communities\n\n" +
            "Type 'chat' if you'd like to discuss any of these topics with Don directly!";
        } else {
          response = "I can tell you about Don's:\n\n" +
            "• Projects - Type 'projects'\n" +
            "• Skills - Type 'skills'\n" +
            "• Experience - Type 'experience'\n" +
            "• Education - Type 'education'\n\n" +
            "Or type 'chat' if you'd like to speak with Don directly!";
        }
        addMessage('assistant', response);
      }
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
          className="fixed bottom-4 right-4 z-[9999] p-4 rounded-full shadow-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:shadow-xl transition-all duration-300"
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
          className="fixed sm:bottom-4 sm:right-4 bottom-0 right-0 sm:w-96 w-full sm:h-[32rem] h-[100dvh] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl sm:rounded-2xl rounded-none shadow-2xl overflow-hidden border border-white/10 z-[9999]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                <FontAwesomeIcon icon={faMessage} className="text-white" />
              </div>
              <h3 className="font-semibold text-white/90">Don's Assistant</h3>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setMessages([]);
                setUserInfo({ name: null, email: null, message: null, wantsToChat: null });
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/60 hover:text-white/90 transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-messages" style={{ height: 'calc(100% - 8rem)' }}>
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