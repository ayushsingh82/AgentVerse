'use client';

import { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Icon from './ui/Icon';

export default function CollaborationDemo() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const workflow = [
    {
      step: 1,
      agent: 'Task Decomposition Agent',
      agentId: 'agent-001',
      action: 'Analyzed complex task and broke it into 4 subtasks',
      status: 'completed',
      time: '2s ago',
      progress: 100,
      output: '4 subtasks identified with dependency graph',
      cost: '5 $AMA'
    },
    {
      step: 2,
      agent: 'Market Analysis Agent',
      agentId: 'agent-002',
      action: 'Analyzing market trends and opportunities',
      status: 'in-progress',
      time: 'Now',
      progress: 65,
      output: 'Processing 1.2M data points...',
      cost: '30 $AMA'
    },
    {
      step: 3,
      agent: 'Risk Assessment Agent',
      agentId: 'agent-003',
      action: 'Waiting for market analysis results',
      status: 'pending',
      time: 'Next',
      progress: 0,
      output: 'Queued for execution',
      cost: '25 $AMA'
    },
    {
      step: 4,
      agent: 'Execution Agent',
      agentId: 'agent-004',
      action: 'Waiting for risk assessment',
      status: 'pending',
      time: 'Next',
      progress: 0,
      output: 'Queued for execution',
      cost: '40 $AMA'
    }
  ];

  const communicationLog = [
    { time: '14:32:15', agent: 'Task Decomposition Agent', message: 'Task decomposed into 4 subtasks. Dependency graph created.', type: 'info' },
    { time: '14:32:18', agent: 'Workflow Orchestrator', message: 'All agents coordinated. Parallel execution enabled.', type: 'system' },
    { time: '14:32:20', agent: 'Market Analysis Agent', message: 'Starting analysis. Estimated completion: 5 minutes.', type: 'info' },
    { time: '14:32:45', agent: 'Market Analysis Agent', message: 'Processing market data... 65% complete', type: 'progress' },
    { time: '14:33:10', agent: 'Risk Assessment Agent', message: 'Ready to receive market analysis results', type: 'ready' }
  ];

  const stats = {
    totalAgents: 4,
    activeAgents: 1,
    completedTasks: 1,
    totalCost: '100 $AMA',
    estimatedTime: '8 minutes'
  };

  return (
    <Section id="collaboration-demo" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Multi-Agent Collaboration
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-time collaboration between multiple agents on complex tasks
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">{stats.totalAgents}</div>
            <div className="text-sm text-gray-600">Total Agents</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">{stats.activeAgents}</div>
            <div className="text-sm text-gray-600">Active Now</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">{stats.completedTasks}/{stats.totalAgents}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">{stats.totalCost}</div>
            <div className="text-sm text-gray-600">Total Cost</div>
          </Card>
        </div>

        {/* Workflow Visualization with Visual Flow */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Icon name="handshake" size="lg" className="text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Active Workflow</h3>
            </div>
            <div className="text-sm text-gray-600">
              <Icon name="lightning" size="sm" className="inline mr-1 text-orange-600" />
              Live Updates
            </div>
          </div>
          
          <div className="space-y-6">
            {workflow.map((item, index) => (
              <div key={item.step}>
                <div 
                  className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all ${
                    selectedAgent === item.agentId 
                      ? 'bg-orange-50 border-2 border-orange-300' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedAgent(selectedAgent === item.agentId ? null : item.agentId)}
                >
                  {/* Status Indicator */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      item.status === 'completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'in-progress' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-400'
                    }`}>
                      {item.status === 'completed' ? (
                        <Icon name="target" size="md" className="text-green-700" />
                      ) : item.status === 'in-progress' ? (
                        <div className="w-5 h-5 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        item.step
                      )}
                    </div>
                    {/* Connecting Line */}
                    {index < workflow.length - 1 && (
                      <div className={`absolute left-1/2 top-12 w-0.5 h-8 transform -translate-x-1/2 ${
                        item.status === 'completed' ? 'bg-green-300' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-gray-900">{item.agent}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' :
                        item.status === 'in-progress' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status.replace('-', ' ')}
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">{item.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.action}</p>
                    
                    {/* Progress Bar for in-progress items */}
                    {item.status === 'in-progress' && (
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Expanded Details */}
                    {selectedAgent === item.agentId && (
                      <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Output:</span>
                          <span className="text-gray-900 font-medium">{item.output}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Cost:</span>
                          <span className="text-orange-600 font-bold">{item.cost}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Agent ID:</span>
                          <span className="text-gray-900 font-mono text-xs">{item.agentId}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Agent Communication Log */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="write" size="lg" className="text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Communication Log</h3>
            </div>
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
              {communicationLog.map((log, idx) => (
                <div key={idx} className="text-sm border-l-2 border-orange-200 pl-3 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 font-mono">{log.time}</span>
                    <span className="font-medium text-orange-600">{log.agent}:</span>
                  </div>
                  <p className="text-gray-700">{log.message}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Collaboration Stats */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="chart" size="lg" className="text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Collaboration Metrics</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total Messages</span>
                <span className="font-bold text-gray-900">{communicationLog.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Estimated Time</span>
                <span className="font-bold text-orange-600">{stats.estimatedTime}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-bold text-green-600">100%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">On-Chain Verified</span>
                <Icon name="target" size="sm" className="text-green-600" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
