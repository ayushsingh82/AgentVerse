import FlowDiagram from './components/FlowDiagram';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/ui/Section';
import SectionHeader from './components/ui/SectionHeader';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>
      
      <Section id="problem-solution" className="pt-32">
        <SectionHeader
          title="The Problem & Solution"
          description="See how AgentVerse transforms isolated AI agents into a collaborative economic network"
        />
        <FlowDiagram />
      </Section>

      <Features />

      <UseCases />

      <Footer />
    </div>
  );
}
