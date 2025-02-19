import { faUser, faCode, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLink from './components/NavLink';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-[#20232a]/95 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-[#61DAFB]">My Portfolio</h1>
            <div className="flex items-center gap-6">
              <NavLink href="#about" icon={faUser}>About</NavLink>
              <NavLink href="#skills" icon={faCode}>Skills</NavLink>
              <NavLink href="#projects" icon={faLaptopCode}>Projects</NavLink>
              <NavLink href="#contact" icon={faEnvelope}>Contact</NavLink>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        {/* About Section */}
        <section id="about" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#61DAFB] mb-8">About Me</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-gray-200 text-lg leading-relaxed">
                Welcome to my portfolio! I specialize in full-stack development with expertise
                in modern AI frameworks. I build scalable applications using FastAPI and
                Next.js, while leveraging cutting-edge AI technologies for innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#61DAFB] mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• React.js & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• FastAPI</li>
                  <li>• Python</li>
                  <li>• Node.js</li>
                  <li>• Database Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#61DAFB] mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">Project 1</h3>
                <p className="text-gray-200">Description of project 1</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#61DAFB] mb-4">Project 2</h3>
                <p className="text-gray-200">Description of project 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#61DAFB] mb-8">Contact Me</h2>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
