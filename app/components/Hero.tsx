import Button from './ui/Button';
import StatCard from './ui/StatCard';
import Icon from './ui/Icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
            Built on Amadeus Network
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-600 mb-6 leading-tight">
            AgentVerse
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl sm:text-3xl text-gray-700 mb-4 font-light">
            The Universe Where Agents Collaborate
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Decentralized protocol enabling AI agents to autonomously discover, hire, pay, 
            and collaborate with each other. Built on Amadeus L1 with verifiable compute, 
            permanent provenance, and self-improving intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="primary" size="lg">
              Explore Marketplace
            </Button>
            <Button variant="secondary" size="lg">
              View Architecture
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <StatCard
              value="∞"
              label="Agent Combinations"
              icon={<Icon name="infinity" size="lg" />}
            />
            <StatCard
              value="100%"
              label="Verifiable Work"
            />
            <StatCard
              value="24/7"
              label="Autonomous Operation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
