import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Award, Code } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Hospitality Forecast",
      description: "Business intelligence solution for hospitality industry forecasting and analytics",
      tags: ["Power BI", "Data Analysis", "Business Intelligence"],
      github: "https://github.com/Rooba8925"
    },
    {
      title: "Job Portal",
      description: "Full-featured job portal application with database management",
      tags: ["SQL", "Database Management", "Java"],
      github: "https://github.com/Rooba8925"
    },
    {
      title: "Parallel Matrix Multiplication",
      description: "Optimized matrix multiplication using parallel processing techniques",
      tags: ["Python", "Data Science", "Optimization"],
      github: "https://github.com/Rooba8925"
    },
    {
      title: "Voice Command Text Conversion",
      description: "Speech-to-text conversion system using Spark and Scala",
      tags: ["Spark", "Scala", "NLP"],
      github: "https://github.com/Rooba8925"
    },
    {
      title: "Agile Nexus",
      description: "Predictive framework for sprint health, productivity, and dependency management",
      tags: ["Agile", "Project Management", "Python"],
      github: "https://github.com/Rooba8925"
    }
  ];

  const skills = {
    languages: ["Java", "Python", "SQL", "HTML"],
    tools: ["Power BI", "Spark", "Scala", "Oracle"],
    concepts: ["Data Analytics", "Machine Learning", "Business Intelligence", "Agile Methodology"]
  };

  const certificates = [
    {
      title: "Oracle Certified Foundation Associate",
      issuer: "Oracle",
      year: "2025",
      category: "Global"
    },
    {
      title: "Japanese Language Proficiency Test (JLPT) N5",
      issuer: "JLPT",
      year: "2025",
      category: "Global"
    },
    {
      title: "Introduction to Industry 4.0 & Industrial Internet of Things",
      issuer: "NPTEL",
      score: "90%",
      year: "2025",
      category: "NPTEL"
    },
    {
      title: "Learning Analytics Tools",
      issuer: "NPTEL",
      score: "76%",
      year: "2025",
      category: "NPTEL"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM Cognitive Class",
      year: "2024",
      category: "IBM"
    },
    {
      title: "SQL and Relational Database",
      issuer: "IBM Cognitive Class",
      year: "2025",
      category: "IBM"
    },
    {
      title: "Predictive Modelling Fundamentals",
      issuer: "IBM Cognitive Class",
      year: "2025",
      category: "IBM"
    },
    {
      title: "Power BI Certificate",
      issuer: "Office Master",
      year: "2025",
      category: "Professional"
    },
    {
      title: "Master Class in Data Analytics",
      issuer: "NoviTech",
      year: "2025",
      category: "Professional"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-teal-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://raw.githubusercontent.com/Rooba8925/portfolio-assets/main/logo.png" 
                alt="Logo" 
                className="h-10 w-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Rooba B
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-teal-400 transition-colors ${activeSection === item ? 'text-teal-400 font-semibold' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-700 rounded text-gray-300 hover:text-teal-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-semibold border border-teal-500/30">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rooba Baskaran
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
              Data Analyst & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Transforming data into actionable insights | Building intelligent solutions with AI & Analytics
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-lg font-semibold hover:bg-teal-400/10 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-teal-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-teal-400">Data Analyst & AI Enthusiast</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm Rooba Baskaran, a passionate data analyst with expertise in transforming complex datasets into meaningful insights. Currently pursuing B.Tech in Artificial Intelligence and Data Science (pre-final year) at M. Kumarasamy College of Engineering, Karur, I specialize in data analytics, business intelligence, and artificial intelligence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey involves working with cutting-edge technologies like Python, SQL, Power BI, and Spark to solve real-world problems. I'm particularly interested in predictive analytics, agile methodologies, and exploring the intersection of data science and artificial intelligence.
              </p>
              
              {/* Education */}
              <div className="bg-slate-900/50 p-6 rounded-lg border border-teal-500/20">
                <h4 className="text-xl font-semibold mb-4 text-teal-400">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white">B.Tech in Artificial Intelligence and Data Science</h5>
                    <p className="text-gray-400">M. Kumarasamy College of Engineering, Karur</p>
                    <p className="text-gray-300 text-sm">2023 - 2027 (Pre-final year)</p>
                    <p className="text-teal-400 font-semibold">CGPA: 8.4 (till 4th sem)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">HSC - 97.3%</h5>
                    <p className="text-gray-400">St. Antony's Matric Higher Secondary School</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/Rooba8925" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rooba0809/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/u/roobabaskaran/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
                  <Code size={24} />
                </a>
                <a href="https://www.hackerrank.com/profile/roobabaskaran194" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
                  <Code size={24} />
                </a>
                <a href="mailto:roobabaskaran194@gmail.com" className="p-3 bg-slate-700 rounded-lg hover:bg-teal-500 hover:text-white transition-all transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-900/50 p-8 rounded-2xl border border-teal-500/30">
                <h4 className="text-xl font-semibold mb-6 text-teal-400">Publication</h4>
                <div className="space-y-4">
                  <div className="bg-slate-800/70 p-6 rounded-lg border border-teal-500/20">
                    <div className="flex items-start space-x-3 mb-3">
                      <Award className="text-teal-400 mt-1" size={24} />
                      <div>
                        <h5 className="font-semibold text-white mb-2">Agile Nexus: A Predictive Framework for Sprint Health, Productivity, and Dependency Management</h5>
                        <p className="text-gray-400 text-sm mb-2">
                          6th International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS 2025)
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                          Organized by T. John Institute of Technology, Bengaluru, India
                        </p>
                        <p className="text-teal-400 text-sm font-semibold">
                          Held on 15-17, December 2025
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs border border-teal-500/30">IEEE</span>
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs border border-cyan-500/30">ICICNIS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20 transform hover:-translate-y-2 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm border border-teal-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-teal-500/20">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Languages</h3>
              <div className="space-y-3">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-teal-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Tools & Technologies</h3>
              <div className="space-y-3">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-teal-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Concepts & Domains</h3>
              <div className="space-y-3">
                {skills.concepts.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
                <div className="flex items-start space-x-3">
                  <Award className="text-teal-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <span className="text-xs px-2 py-1 bg-teal-500/20 text-teal-400 rounded-full border border-teal-500/30">
                      {cert.category}
                    </span>
                    <h3 className="text-white font-semibold mt-2 mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-teal-400 text-sm font-semibold">{cert.year}</p>
                      {cert.score && (
                        <span className="text-cyan-400 text-sm font-semibold">{cert.score}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-gray-300 mb-12 text-lg">
            I'm always open to discussing new projects, opportunities, or collaborations in data analytics and AI.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:roobabaskaran194@gmail.com" className="bg-slate-900 p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              <Mail className="mx-auto mb-3 text-teal-400" size={32} />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm">roobabaskaran194@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/rooba0809/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              <Linkedin className="mx-auto mb-3 text-teal-400" size={32} />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Rooba8925" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://leetcode.com/u/roobabaskaran/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
              <Code size={28} />
            </a>
            <a href="https://www.hackerrank.com/profile/roobabaskaran194" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
              <Code size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-teal-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 Rooba Baskaran. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
