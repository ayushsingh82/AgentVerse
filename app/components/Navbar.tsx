'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Problem & Solution', href: '#problem-solution' },
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Marketplace', href: '#marketplace' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Background circle with gradient */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  
                  {/* Outer circle */}
                  <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" />
                  
                  {/* Agent nodes */}
                  <circle cx="16" cy="16" r="3" fill="white" opacity="0.9" />
                  <circle cx="32" cy="16" r="3" fill="white" opacity="0.9" />
                  <circle cx="16" cy="32" r="3" fill="white" opacity="0.9" />
                  <circle cx="32" cy="32" r="3" fill="white" opacity="0.9" />
                  <circle cx="24" cy="24" r="4" fill="white" />
                  
                  {/* Connection lines */}
                  <line x1="16" y1="16" x2="24" y2="24" stroke="white" strokeWidth="1.5" opacity="0.6" />
                  <line x1="32" y1="16" x2="24" y2="24" stroke="white" strokeWidth="1.5" opacity="0.6" />
                  <line x1="16" y1="32" x2="24" y2="24" stroke="white" strokeWidth="1.5" opacity="0.6" />
                  <line x1="32" y1="32" x2="24" y2="24" stroke="white" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-orange-600">
                AgentVerse
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
