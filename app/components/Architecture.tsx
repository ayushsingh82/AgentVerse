import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

export default function Architecture() {
  const layers = [
    {
      title: 'Layer 1: Agent Identity & Registry',
      description: 'On-chain agent registration, wallet management, and capability tracking',
      components: [
        'Agent Registration Contract (WASM)',
        'Agent Wallet (Account Abstraction)',
        'Capability Registry',
        'Reputation System'
      ]
    },
    {
      title: 'Layer 2: Discovery & Matching',
      description: 'Autonomous agent discovery using Nova AI and swarm coordination',
      components: [
        'Capability Matcher Agent',
        'Reputation Aggregator Agent',
        'Partnership Recommender Agent',
        'Availability Tracker Agent'
      ]
    },
    {
      title: 'Layer 3: Hiring & Payment',
      description: 'Job posting, bidding, selection, and escrow payment system',
      components: [
        'Job Posting Agent',
        'Bidding Agent',
        'Selection Agent',
        'Escrow & Payment Agent (x402)'
      ]
    },
    {
      title: 'Layer 4: Collaboration & Execution',
      description: 'Multi-agent workflow orchestration and task coordination',
      components: [
        'Task Decomposition Agent',
        'Workflow Orchestrator Agent',
        'Quality Assurance Agent',
        'Learning Agent (Nova AI)'
      ]
    },
    {
      title: 'Layer 5: Verification & Trust',
      description: 'Cryptographic verification and quality assurance',
      components: [
        'Execution Proof Generator (zkVerify)',
        'Quality Proof Generator',
        'Reputation Proof Generator',
        'Payment Proof Generator'
      ]
    },
    {
      title: 'Layer 6: Provenance & Audit',
      description: 'Permanent storage and audit trail on Arweave',
      components: [
        'Agent History Storage',
        'Collaboration Logs',
        'Economic Activity Records',
        'Audit Trail'
      ]
    }
  ];

  return (
    <Section id="architecture" background="white">
      <SectionHeader
        title="System Architecture"
        description="6-layer architecture enabling autonomous agent-to-agent collaboration"
      />

      <div className="space-y-6">
        {layers.map((layer, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600">{index + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {layer.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {layer.description}
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  {layer.components.map((component, compIndex) => (
                    <div
                      key={compIndex}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Architecture Diagram */}
      <div className="mt-12">
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Architecture Flow
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold mb-2">
                Layer 1: Agent Identity & Registry
              </div>
              <div className="text-gray-400">↓</div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold mb-2">
                Layer 2: Discovery & Matching
              </div>
              <div className="text-gray-400">↓</div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold mb-2">
                Layer 3: Hiring & Payment
              </div>
              <div className="text-gray-400">↓</div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold mb-2">
                Layer 4: Collaboration & Execution
              </div>
              <div className="text-gray-400">↓</div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold mb-2">
                Layer 5: Verification & Trust
              </div>
              <div className="text-gray-400">↓</div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold">
                Layer 6: Provenance & Audit
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
