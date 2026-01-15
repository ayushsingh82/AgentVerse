'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Hero from './Hero';
import FlowDiagram from './FlowDiagram';
import Features from './Features';
import UseCases from './UseCases';
import Architecture from './Architecture';
import MarketplaceDemo from './MarketplaceDemo';
import DiscoveryDemo from './DiscoveryDemo';
import CollaborationDemo from './CollaborationDemo';
import Section from './ui/Section';

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'problem-solution':
        return (
          <Section id="problem-solution" className="pt-8">
            <FlowDiagram />
          </Section>
        );
      case 'architecture':
        return <Architecture />;
      case 'features':
        return <Features />;
      case 'use-cases':
        return <UseCases />;
      case 'marketplace':
        return <MarketplaceDemo />;
      case 'discovery':
        return <DiscoveryDemo />;
      case 'collaboration':
        return <CollaborationDemo />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="min-h-screen pt-8 md:pt-0 px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
