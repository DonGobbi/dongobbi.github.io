import { faUser, faCode, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLink from './components/NavLink';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';

export default function Home() {
  return (
    <main>
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-[#20232a]/95 backdrop-blur-sm z-50 border-b border-[#61DAFB]/10">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-[#61DAFB]">My Portfolio</h1>
            <div className="flex items-center space-x-2 sm:space-x-6">
              <NavLink href="#about" icon={faUser}>About</NavLink>
              <NavLink href="#skills" icon={faCode}>Skills</NavLink>
              <NavLink href="#projects" icon={faLaptopCode}>Projects</NavLink>
              <NavLink href="#contact" icon={faEnvelope}>Contact</NavLink>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-20 sm:pt-24">
        {/* About Section */}
        <section id="about" className="min-h-screen py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#61DAFB] mb-6 sm:mb-8">About Me</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-[#61DAFB]/10">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Welcome to my portfolio! I specialize in full-stack development with expertise
                in modern AI frameworks. I build scalable applications using FastAPI and
                Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-12 sm:py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#61DAFB] mb-6 sm:mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-[#61DAFB]/10">
                <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    React.js & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    Responsive Design
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-[#61DAFB]/10">
                <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    FastAPI
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    Python
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-[#61DAFB] w-4 h-4" />
                    Database Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#61DAFB] mb-6 sm:mb-8">Projects</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-[#61DAFB]/10">
              <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">AI Chat Integration</h3>
              <p className="text-gray-200 mb-4">Try out the AI-powered chat:</p>
              <ChatBot />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-12 sm:py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#61DAFB] mb-6 sm:mb-8">Contact Me</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-[#61DAFB]/10">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
