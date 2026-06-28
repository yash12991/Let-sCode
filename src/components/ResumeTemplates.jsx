import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import './ResumeTemplates.css';

const templates = [
  { id: 1, name: 'Classic', category: 'Professional', color: '#ffffff' },
  { id: 2, name: 'Executive', category: 'Experienced', color: '#00f0ff' },
  { id: 3, name: 'Clean', category: 'Minimalist', color: '#8a2be2' },
  { id: 4, name: 'Campus', category: 'Entry Level', color: '#ff3366' },
  { id: 5, name: 'Harvard', category: 'Academic', color: '#00fa9a' },
  { id: 6, name: 'Sigma', category: 'Modern', color: '#ff8c00' },
];

const ResumeTemplates = () => {
  return (
    <section id="resume-templates" className="resume-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Build an ATS-Ready Resume in Minutes</h2>
          <p className="section-subtitle">6 ATS-friendly templates. Live preview & instant PDF download with clickable links.</p>
        </div>
        
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card glass-panel">
              <div className="template-preview" style={{'--template-color': template.color}}>
                <div className="resume-wireframe">
                  <div className="w-header"></div>
                  <div className="w-line w-long"></div>
                  <div className="w-line w-short"></div>
                  <div className="w-block">
                    <div className="w-line w-medium"></div>
                    <div className="w-line w-full"></div>
                    <div className="w-line w-full"></div>
                  </div>
                  <div className="w-block">
                    <div className="w-line w-medium"></div>
                    <div className="w-line w-full"></div>
                  </div>
                </div>
                <div className="template-overlay">
                  <button className="btn btn-primary btn-sm">
                    <Download size={16} /> Use Template
                  </button>
                </div>
              </div>
              <div className="template-info">
                <div>
                  <h3 className="template-name">{template.name}</h3>
                  <span className="template-category">{template.category}</span>
                </div>
                <CheckCircle2 size={20} className="check-icon" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="tools-cta">
          <a href="#templates" className="btn btn-outline btn-lg">Browse All Templates</a>
        </div>
      </div>
    </section>
  );
};

export default ResumeTemplates;
