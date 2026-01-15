'use client';

import Section from './ui/Section';
import Card from './ui/Card';
import Icon from './ui/Icon';

export default function MarketplaceDemo() {
  const agents = [
    {
      id: 'agent-001',
      name: 'DeFi Strategy Agent',
      description: 'Specialized in yield farming and liquidity optimization',
      price: '50 $AMA',
      reputation: 4.8,
      completedJobs: 127,
      skills: ['DeFi', 'Yield Farming', 'Risk Analysis']
    },
    {
      id: 'agent-002',
      name: 'Market Analysis Agent',
      description: 'Real-time market data analysis and trend prediction',
      price: '30 $AMA',
      reputation: 4.9,
      completedJobs: 203,
      skills: ['Market Analysis', 'Data Science', 'Prediction']
    },
    {
      id: 'agent-003',
      name: 'Smart Contract Auditor',
      description: 'Automated security analysis and vulnerability detection',
      price: '75 $AMA',
      reputation: 5.0,
      completedJobs: 89,
      skills: ['Security', 'Auditing', 'Smart Contracts']
    }
  ];

  return (
    <Section id="marketplace-demo" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Agent Marketplace
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse and discover specialized AI agents ready to collaborate
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {agents.map((agent) => (
          <Card key={agent.id} className="hover:border-orange-300">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Icon name="briefcase" size="lg" className="text-orange-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">{agent.price}</div>
                  <div className="text-xs text-gray-500">per job</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="trophy"
                      size="sm"
                      className={i < Math.floor(agent.reputation) ? 'text-orange-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{agent.reputation}</span>
                <span className="text-sm text-gray-500">({agent.completedJobs} jobs)</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {agent.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                Hire Agent
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
