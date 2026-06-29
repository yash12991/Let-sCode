import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { LiquidButton } from './ui/LiquidButton';
import './Hero.css';

const EpicText = ({ phrases }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000); // 4s allows time to admire the epic impact
    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <span className="epic-container">
      {phrases.map((phrase, pIndex) => {
        let status = 'next';
        if (pIndex === index) status = 'active';
        else if (pIndex === (index - 1 + phrases.length) % phrases.length) status = 'prev';

        return (
          <span key={pIndex} className={`epic-phrase ${status}`}>
            {phrase.split('').map((char, cIndex) => {
               // Calculate distance from center to create spreading effect
               const center = phrase.length / 2;
               const dist = cIndex - center;
               
               return (
                 <span 
                   key={cIndex}
                   className="epic-char gradient-text"
                   style={{
                     '--dist': `${dist * 30}px`,
                     '--delay': `${Math.abs(dist) * 0.06}s` // Outermost letters arrive later
                   }}
                 >
                   {char === ' ' ? '\u00A0' : char}
                 </span>
               );
            })}
          </span>
        );
      })}
    </span>
  );
};

const Hero = () => {
  const words = ["Tech Job Faster.", "with Let's Code.", "SDE Roles."];

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
          <EpicText phrases={words} />
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
