import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MessageCircle, FileText, ChevronRight, ExternalLink, CheckCircle, Star } from 'lucide-react';

// Import Data and Components
import { portfolioData } from './data';
import { Navigation } from './components/Navigation';
import { ContactForm } from './components/ContactForm';
import { Section } from './components/Section';

// ==================== SECTION COMPONENTS ====================

function HomeSection({ setActiveSection }) {
  const { home } = portfolioData;
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 text-sm font-medium mb-8">
            {home.tagline}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-100">
            {home.title_part1}
            <br />
            <span className="text-amber-400">{home.title_part2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl">
            {home.description}
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex items-center px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition-all hover:scale-105">
              Schedule Consultation
              <ChevronRight className="ml-2" size={20} />
            </a>
            <button
              onClick={() => setActiveSection('strategic')}
              className="inline-flex items-center px-8 py-4 border-2 border-slate-600 text-slate-100 font-semibold rounded-lg hover:border-amber-400 hover:text-amber-400 transition-all"
            >
              View Work
            </button>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-400/10 rounded-lg">
                <FileText className="text-amber-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Featured Analysis</h3>
                <h4 className="text-2xl font-bold text-amber-400 mb-3">{home.featuredAnalysis.title}</h4>
                <p className="text-slate-300 mb-2">{home.featuredAnalysis.description}</p>
                <p className="text-sm text-slate-400 mb-4">{home.featuredAnalysis.date}</p>
                <button
                  onClick={() => setActiveSection('strategic')}
                  className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors"
                >
                  Read Analysis
                  <ChevronRight className="ml-1" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InsightsSection() {
  const { insights } = portfolioData;
  return (
    <Section id="insights">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Insights & Commentary</h2>
      <p className="text-xl text-slate-300 mb-12">Strategic analysis on AI, market dynamics, and business transformation.</p>
      <div className="space-y-8">
        {insights.map((post, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex flex-col hover:border-amber-400/50 transition-all">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-amber-400/10 text-amber-400 text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-3">{post.title}</h3>
            <p className="text-slate-300 mb-4 flex-grow">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
              <span className="flex items-center gap-2"><FileText size={16} />{new Date(post.date).toLocaleDateString('en-AU', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>{post.readTime} read</span>
            </div>
            {post.pdfPath && (
              <a href={post.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors mt-auto">
                View Full Analysis
                <ExternalLink className="ml-2" size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function StrategicWorkSection() {
  const { strategicWork } = portfolioData;
  return (
    <Section id="strategic">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Strategic Work</h2>
      <p className="text-xl text-slate-300 mb-12">Long-form research and strategic analysis.</p>
      <div className="space-y-8">
        {strategicWork.map((work, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-amber-400/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-xs font-medium rounded-full">{work.type}</span>
                  <span className="text-slate-400 text-sm">{work.pages}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-100 mb-3">{work.title}</h3>
                <p className="text-slate-300 mb-4">{work.description}</p>
                <p className="text-sm text-slate-400">{work.date}</p>
              </div>
              <a href={work.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-medium rounded-lg hover:bg-amber-400/20 transition-all self-start shrink-0 mt-2">
                <FileText className="mr-2" size={18} />
                View Report
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ArtefactsSection() {
  const { artefacts } = portfolioData;
  return (
    <Section id="artefacts">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Artefacts</h2>
      <p className="text-xl text-slate-300 mb-12">Visual frameworks, strategic models, and one-page analyses.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artefacts.map((artefact, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl flex flex-col overflow-hidden group">
            <a href={artefact.filePath} target="_blank" rel="noopener noreferrer" className="block aspect-video bg-slate-700 overflow-hidden">
              <img 
                src={artefact.thumbnailPath} 
                alt={artefact.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </a>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-100 mb-2">{artefact.title}</h3>
              <p className="text-slate-300 text-sm mb-4 flex-grow">{artefact.description}</p>
              <div className="text-xs text-slate-400 mt-auto">
                <p>Created: {artefact.date}</p>
                <a href={artefact.sourcePath} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Source: {artefact.source} <ExternalLink size={12} className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ToolsSection() {
  const { tools, contact } = portfolioData;
  return (
    <Section id="tools">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Tools & Applications</h2>
      <p className="text-xl text-slate-300 mb-12">A curated selection of custom-built AI solutions.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {tools.map((tool, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl flex flex-col overflow-hidden group">
            <div className="aspect-video overflow-hidden bg-slate-700">
              <img src={tool.image} alt={tool.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-100">{tool.name}</h3>
                <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-xs font-medium rounded-full shrink-0">{tool.status}</span>
              </div>
              <p className="text-slate-300 text-sm mb-4 flex-grow">{tool.description}</p>
              {tool.url !== '#' ? (
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition-all mt-auto">
                  {tool.cta} <ExternalLink className="ml-2" size={16} />
                </a>
              ) : (
                <span className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-slate-400 font-medium rounded-lg mt-auto cursor-default">
                  {tool.cta}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-amber-400/10 border border-amber-400/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-100 mb-3">Need a Custom AI Solution?</h3>
        <p className="text-slate-300 mb-6">Let's discuss how AI-powered tools can solve your team's bottlenecks.</p>
        <a href={`mailto:${contact.email}`} className="inline-flex items-center px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition-all">
          Get in Touch
          <ChevronRight className="ml-2" size={20} />
        </a>
      </div>
    </Section>
  );
}

function AboutSection() {
  const { about } = portfolioData;
  return (
    <Section id="about">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">{about.title}</h2>
      {about.profileImage && (
        <div className="flex justify-center mb-12">
          <img 
            src={about.profileImage} 
            alt="Roger Hanney presenting" 
            className="w-full max-w-lg rounded-xl shadow-lg border border-slate-700/50"
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <div className="text-lg text-slate-300 space-y-6 mb-12 prose prose-invert prose-lg">
          {about.bio.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-slate-100 mb-6">Credentials</h3>
            <ul className="space-y-4">
              {about.credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-100 mb-6">Core Expertise</h3>
            <ul className="space-y-4">
              {about.expertise.map((exp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-200">
                  <Star className="text-amber-400 flex-shrink-0 mt-1" size={20} />
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ==================== MAIN APP ====================
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomeSection setActiveSection={setActiveSection} />;
      case 'insights': return <InsightsSection />;
      case 'strategic': return <StrategicWorkSection />;
      case 'artefacts': return <ArtefactsSection />;
      case 'tools': return <ToolsSection />;
      case 'about': return <AboutSection />;
      default: return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 font-sans">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Roger Hanney. Strategic Advisory & AI Implementation.
            </p>
            <div className="flex gap-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-amber-400 transition-colors"><Mail size={20} /></a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors"><Linkedin size={20} /></a>
              <a href={`https://wa.me/${portfolioData.contact.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}