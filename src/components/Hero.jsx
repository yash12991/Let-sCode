import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { LiquidButton } from './ui/LiquidButton';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow shape-1"></div>
      <div className="hero-glow shape-2"></div>
      
      <div className="container hero-container">
        <div className="hero-badge glass-panel">
          <Zap size={16} className="badge-icon" />
          <span>New: AI Job Finder Engine is Live</span>
        </div>
        
        <h1 className="hero-title">
          Crack Your Dream <br />
          <span className="gradient-text">Tech Job Faster.</span>
        </h1>
        
        <p className="hero-subtitle">
          8 free AI career tools, 1000+ interview resources, and a community of 1 Lakh+ engineers. 
          Everything you need from student to employed.
        </p>
        
        <div className="hero-cta">
          <LiquidButton onClick={() => window.open('https://www.lets-code.co.in/dashboard/job-ready-score/', '_blank', 'noopener,noreferrer')}>
            Check Job Ready Score <ChevronRight size={20} />
          </LiquidButton>
          <a href="#explore" className="hero-btn-secondary">
            Explore Roadmaps
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">100k+</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">AI Tools</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Company Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
