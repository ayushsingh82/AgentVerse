'use client';

import { useState, useMemo } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Icon from './ui/Icon';

export default function DiscoveryDemo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const allAgents = [
    {
      agentId: 'agent-045',
      name: 'Data Analysis Specialist',
      matchScore: 95,
      reputation: 4.7,
      price: '40 $AMA',
      availability: 'Available Now',
      skills: ['Data Analysis', 'Machine Learning', 'Statistics', 'Python']
    },
    {
      agentId: 'agent-089',
      name: 'Advanced Analytics Agent',
      matchScore: 88,
      reputation: 4.9,
      price: '55 $AMA',
      availability: 'Available Now',
      skills: ['Analytics', 'Data Science', 'Machine Learning', 'R']
    },
    {
      agentId: 'agent-123',
      name: 'ML Model Trainer',
      matchScore: 82,
      reputation: 4.6,
      price: '60 $AMA',
      availability: 'Available in 2h',
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch']
    },
    {
      agentId: 'agent-201',
      name: 'DeFi Strategy Agent',
      matchScore: 92,
      reputation: 4.8,
      price: '50 $AMA',
      availability: 'Available Now',
      skills: ['DeFi', 'Yield Farming', 'Smart Contracts', 'Risk Analysis']
    },
    {
      agentId: 'agent-156',
      name: 'Smart Contract Auditor',
      matchScore: 98,
      reputation: 5.0,
      price: '75 $AMA',
      availability: 'Available Now',
      skills: ['Security', 'Auditing', 'Solidity', 'Vulnerability Detection']
    },
    {
      agentId: 'agent-234',
      name: 'Market Research Agent',
      matchScore: 85,
      reputation: 4.5,
      price: '35 $AMA',
      availability: 'Available Now',
      skills: ['Market Research', 'Trend Analysis', 'Data Collection']
    }
  ];

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return allAgents.sort((a, b) => b.matchScore - a.matchScore);
    }

    const query = searchQuery.toLowerCase();
    // Split query by common separators to match multiple terms
    const queryTerms = query.split(/[&\s,]+/).filter(term => term.length > 0);
    
    return allAgents.filter(agent => {
      const nameMatch = agent.name.toLowerCase().includes(query);
      const skillMatch = agent.skills.some(skill => 
        skill.toLowerCase().includes(query) ||
        queryTerms.some(term => skill.toLowerCase().includes(term))
      );
      const idMatch = agent.agentId.toLowerCase().includes(query);
      
      return nameMatch || skillMatch || idMatch;
    }).sort((a, b) => b.matchScore - a.matchScore);
  }, [searchQuery]);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <Section id="discovery-demo" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Agent Discovery
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover and match with specialized agents autonomously
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Search Interface */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Icon name="search" size="md" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for agents by capability, name, or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-black"
                />
              </div>
            </div>
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <Icon name="lightning" size="sm" className={`inline mr-2 text-orange-600 ${isSearching ? 'animate-pulse' : ''}`} />
            {isSearching 
              ? 'Capability Matcher Agent is searching the registry...' 
              : filteredResults.length > 0 
                ? `Found ${filteredResults.length} matching agent${filteredResults.length !== 1 ? 's' : ''}`
                : 'No agents found. Try a different search term.'}
          </div>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Top Matches ({filteredResults.length} found)
          </h3>
          {filteredResults.length === 0 ? (
            <Card className="p-12 text-center">
              <Icon name="search" size="lg" className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium mb-2">No agents found</p>
              <p className="text-sm text-gray-500">
                Try searching for: "Data Analysis", "DeFi", "Machine Learning", "Security", etc.
              </p>
            </Card>
          ) : (
            filteredResults.map((result) => (
              <Card key={result.agentId} className="p-6 hover:border-orange-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Icon name="user" size="lg" className="text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{result.name}</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                          {result.matchScore}% Match
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span>Reputation: {result.reputation}</span>
                        <span>•</span>
                        <span>{result.availability}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-xl font-bold text-orange-600 mb-1">{result.price}</div>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                      Select
                    </button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}
