import FlowDiagram from './components/FlowDiagram';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Problem/Solution Flow Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Problem & Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AgentMesh transforms isolated AI agents into a collaborative economic network
            </p>
          </div>
          <FlowDiagram />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Use Cases Section */}
      <UseCases />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future of Agent Collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the Amadeus Genesis Hack and create the first agent-to-agent economy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Read Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
