import React from 'react';
import { Map, BookOpen, Code, Terminal, Database, Cloud } from 'lucide-react';
import './Roadmaps.css';

const roadmaps = [
  { id: 1, title: 'DSA Roadmap', icon: Map, color: '#ff3366', tracks: '12 modules' },
  { id: 2, title: 'System Design', icon: Database, color: '#00f0ff', tracks: '8 modules' },
  { id: 3, title: 'Web Development', icon: Code, color: '#00fa9a', tracks: '15 modules' },
  { id: 4, title: 'DevOps & Cloud', icon: Cloud, color: '#1e90ff', tracks: '10 modules' },
  { id: 5, title: 'Machine Learning', icon: Terminal, color: '#8a2be2', tracks: '14 modules' },
];

const Roadmaps = () => {
  return (
    <section id="roadmaps" className="roadmaps-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Prepare for Any Company</h2>
          <p className="section-subtitle">Step-by-step learning paths for DSA, System Design, DevOps & ML.</p>
        </div>

        <div className="roadmaps-stealth-scroll">
          {roadmaps.map((map, index) => {
            const Icon = map.icon;
            const stepNumber = String(index + 1).padStart(2, '0');
            return (
              <div key={map.id} className="roadmap-stealth-card" style={{'--accent-color': map.color}}>
                <div className="roadmap-watermark">{stepNumber}</div>
                <div className="roadmap-stealth-inner">
                  <div className="roadmap-stealth-icon">
                    <Icon size={24} color={map.color} />
                  </div>
                  <div className="roadmap-stealth-content">
                    <h3 className="roadmap-stealth-title">{map.title}</h3>
                    <span className="roadmap-stealth-tracks">{map.tracks}</span>
                  </div>
                  <div className="roadmap-stealth-arrow">
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="companies-section">
          <h3 className="companies-title">Company Specific PYQs</h3>
          <div className="companies-marquee">
            <div className="marquee-content">
              {['Google', 'Amazon', 'Microsoft', 'Goldman Sachs', 'TCS', 'Infosys', 'Wipro', 'Meta', 'Apple', 'Uber'].map((company, idx) => (
                <div key={idx} className="company-pill glass-panel">
                  {company}
                </div>
              ))}
            </div>
            {/* Duplicate for infinite scroll effect */}
            <div className="marquee-content" aria-hidden="true">
              {['Google', 'Amazon', 'Microsoft', 'Goldman Sachs', 'TCS', 'Infosys', 'Wipro', 'Meta', 'Apple', 'Uber'].map((company, idx) => (
                <div key={`dup-${idx}`} className="company-pill glass-panel">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="extra-resources-grid">
          <div className="resource-card glass-panel challenge-card">
            <div className="resource-icon-wrapper" style={{color: '#ff3366'}}>
              <Code size={32} />
            </div>
            <h3>100 Days DSA Challenge</h3>
            <p>Community DSA contest series — compete, learn, and win prizes. Free T-shirts for top 5 winners.</p>
            <button className="btn btn-primary btn-sm">Register Now</button>
          </div>

          <div className="resource-card glass-panel">
            <div className="resource-icon-wrapper" style={{color: '#00f0ff'}}>
              <BookOpen size={32} />
            </div>
            <h3>Interview Questions</h3>
            <p>Curated questions for OOPs, JavaScript, Python, React, DBMS, OS, SQL, Core Java & more.</p>
            <a href="#questions" className="resource-link">View Topics →</a>
          </div>

          <div className="resource-card glass-panel">
            <div className="resource-icon-wrapper" style={{color: '#8a2be2'}}>
              <Terminal size={32} />
            </div>
            <h3>Placement Kit</h3>
            <p>Complete resources — cold email templates, resume guides, cover letters & FYP ideas.</p>
            <a href="#placement-kit" className="resource-link">Access Kit →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmaps;
