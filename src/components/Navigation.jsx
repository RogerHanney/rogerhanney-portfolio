import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

export function Navigation({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer"
            onClick={() => {
              setActiveSection('home');
              setMobileMenuOpen(false);
            }}
          >
            <span className="text-slate-100">ROGER</span>
            <span className="text-amber-400 ml-1">HANNEY</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-1 py-2 text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-slate-300 hover:text-amber-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-amber-400"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-4 py-3 space-y-1">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-slate-800 text-amber-400'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}