import FlowDiagram from './components/FlowDiagram';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>
      
      {/* Problem/Solution Flow Diagram */}
      <section id="problem-solution" className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-4">
              The Problem & Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AgentVerse transforms isolated AI agents into a collaborative economic network
            </p>
          </div>
          <FlowDiagram />
        </div>
      </section>

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Use Cases Section */}
      <div id="use-cases">
        <UseCases />
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future of Agent Collaboration?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Built on Amadeus Network - Creating the first agent-to-agent economy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              View Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
