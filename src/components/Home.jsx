import React from 'react';
import Hero from './Hero';
import AITools from './AITools';
import ResumeTemplates from './ResumeTemplates';
import Roadmaps from './Roadmaps';
import StartupJobs from './StartupJobs';
import Community from './Community';
import ScrollReveal from './ScrollReveal';
import NeuralBackground from './NeuralBackground';
import TechCommunities from './TechCommunities';
import DeveloperNetwork from './DeveloperNetwork';
import Partners from './Partners';
import StartupExplorer from './StartupExplorer';
import JobSeekerTiers from './JobSeekerTiers';

const Home = () => {
  return (
    <>
      <NeuralBackground 
        color="#14b8a6" 
        trailOpacity={0.15} 
        speed={0.8} 
        particleCount={600} 
      />
      <ScrollReveal delay={0}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <AITools />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ResumeTemplates />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Roadmaps />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <StartupJobs />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Community />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <TechCommunities />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <DeveloperNetwork />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Partners />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <StartupExplorer />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <JobSeekerTiers />
      </ScrollReveal>
    </>
  );
};

export default Home;
