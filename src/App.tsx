import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Cloud, 
  Database, 
  Terminal,
  Cpu,
  MapPin,
  Calendar,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          AAN<span className="text-emerald-500">.</span>ALMA
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.9]">
              Backend <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Architect.
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              I'm Aan Alma Khanafi, a software engineer focused on building robust, scalable backend systems using Laravel, Node.js, and Cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/aanalma28" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/aan-alma-khanafi-a24b4229a" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:aanalma03@gmail.com" className="text-white/40 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="font-mono text-sm text-emerald-400/80 leading-relaxed overflow-x-auto">
                <code>{`const developer = {
  name: "Aan Alma Khanafi",
  role: "Backend Developer",
  stack: ["Laravel", "Node.js", "GCP"],
  location: "Kudus, Indonesia",
  motto: "Building scalable solutions.",
  status: "Ready to code"
};

function buildFuture() {
  return developer.stack.map(tech => 
    innovate(tech)
  );
}`}</code>
              </pre>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = ['Backend', 'Cloud', 'Other'];
  
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-zinc-800 w-fit group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                {cat === 'Backend' && <Terminal size={32} />}
                {cat === 'Cloud' && <Cloud size={32} />}
                {cat === 'Other' && <Cpu size={32} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{cat} Stack</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-zinc-800 text-white/60 text-sm border border-white/5 hover:text-white hover:bg-zinc-700 transition-all cursor-default">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-white/40 max-w-md">A collection of projects ranging from AI-powered apps to complex management systems.</p>
          </div>
          <a href="https://github.com/aanalma28" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            View all on GitHub <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              <div className="aspect-video overflow-hidden bg-zinc-800">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10">
                    <Code2 size={64} />
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2 block">{project.duration}</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 text-white hover:bg-emerald-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-white/60 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-white/40 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              
              <div className="grid md:grid-cols-[250px_1fr] gap-8">
                <div>
                  <span className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-white/40 font-medium">{exp.role}</p>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                        <ChevronRight size={18} className="text-emerald-500 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's build something <span className="text-emerald-500 italic">extraordinary</span>.</h2>
          <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
            Currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:aanalma03@gmail.com" 
              className="w-full md:w-auto px-10 py-5 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Send an Email
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/aanalma28" target="_blank" rel="noreferrer" className="p-5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all border border-white/5">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/aan-alma-khanafi-a24b4229a" target="_blank" rel="noreferrer" className="p-5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all border border-white/5">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white/40 text-sm font-medium">
          © {new Date().getFullYear()} Aan Alma Khanafi. Built with React & Tailwind.
        </div>
        <div className="flex items-center gap-6 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            Kudus, Indonesia
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            GPA 3.8
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-emerald-500 selection:text-white">
      <Nav />
      <Hero />
      <section id="about" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Crafting Digital <br />Backbones</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                I am a Backend Developer with hands-on experience in building and maintaining RESTful APIs, managing relational and NoSQL databases, and integrating cloud-based services.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Focused on backend systems using Laravel and Node.js, I have experience supporting production-ready applications in academic, freelance, and collaborative project environments. Familiar with Google Cloud Platform, Firebase, and API-driven architectures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">3.8</div>
                <div className="text-sm text-white/40 uppercase tracking-widest">GPA</div>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">4+</div>
                <div className="text-sm text-white/40 uppercase tracking-widest">Projects</div>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 text-center col-span-2 group">
                <div className="flex flex-col items-center justify-center gap-3 mb-2">
                  <img 
                    src="https://assets.kompasiana.com/items/album/2024/01/07/program-bangkit-659a5439de948f7dd9389922.png?t=o&v=770" 
                    alt="Bangkit Logo" 
                    className="h-20 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-xl font-bold text-white">Bangkit Academy</div>
                </div>
                <div className="text-sm text-white/40 uppercase tracking-widest">Machine Learning Cohort</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
