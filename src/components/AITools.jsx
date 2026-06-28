import React from 'react';
import { Target, MonitorPlay, FileText, Network, Search, FileEdit, LayoutDashboard, GitBranch } from 'lucide-react';
import './AITools.css';

const tools = [
  { id: 1, title: 'Job Ready Score', desc: 'Honest AI score on your resume & GitHub.', icon: Target, tag: '100 pt score', color: '#00f0ff' },
  { id: 2, title: 'Mock Interview', desc: 'AI-generated MCQ tests across 35+ topics.', icon: MonitorPlay, tag: '35+ topics', color: '#8a2be2' },
  { id: 3, title: 'AI Resume Studio', desc: 'Score, edit & AI-improve your resume.', icon: FileText, tag: '95% ATS pass', color: '#ff3366' },
  { id: 4, title: 'LinkedIn Optimizer', desc: 'AI suggestions to improve your profile.', icon: Network, tag: '3.5x views', color: '#0077b5' },
  { id: 5, title: 'AI Job Finder', desc: 'AI searches 5+ boards & scores fit.', icon: Search, tag: 'New ✨', color: '#00fa9a' },
  { id: 6, title: 'Cover Letter AI', desc: 'AI writes ATS-optimised cover letters.', icon: FileEdit, tag: '8-10 keywords', color: '#ff8c00' },
  { id: 7, title: 'Job Tracker', desc: 'Track every application in a Kanban board.', icon: LayoutDashboard, tag: 'Kanban view', color: '#1e90ff' },
  { id: 8, title: 'GitHub Optimizer', desc: 'Profile score & README feedback.', icon: GitBranch, tag: 'New ✨', color: '#ffffff' },
];

const AITools = () => {
  return (
    <section id="tools" className="tools-section">
      <div className="container">
        <h2 className="section-title">Prepare Smarter, Get Hired Faster</h2>
        
        <div className="tools-grid">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.id} className="tool-card glass-panel" style={{ '--tool-color': tool.color }}>
                <div className="tool-header">
                  <div className="tool-icon-wrapper" style={{ color: tool.color, boxShadow: `0 0 15px ${tool.color}40` }}>
                    <Icon size={28} />
                  </div>
                  <span className="tool-tag" style={{ color: tool.color, borderColor: `${tool.color}40` }}>{tool.tag}</span>
                </div>
                <h3 className="tool-title">{tool.title}</h3>
                <p className="tool-desc">{tool.desc}</p>
                <div className="tool-footer">
                  <span className="try-now" style={{ color: tool.color }}>Try Now →</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="tools-cta">
          <a href="#toolkit" className="btn btn-outline btn-lg">
            Open Full AI Toolkit
          </a>
        </div>
      </div>
    </section>
  );
};

export default AITools;
