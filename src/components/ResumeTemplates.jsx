import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import './ResumeTemplates.css';

const templates = [
  { id: 1, name: 'Classic', category: 'Professional', color: '#ffffff', image: '/assets/resumes/classic.png' },
  { id: 2, name: 'Executive', category: 'Experienced', color: '#00f0ff', image: '/assets/resumes/executive.png' },
  { id: 3, name: 'Clean', category: 'Minimalist', color: '#8a2be2', image: '/assets/resumes/clean.png' },
  { id: 4, name: 'Campus', category: 'Entry Level', color: '#ff3366', image: '/assets/resumes/campus.png' },
  { id: 5, name: 'Harvard', category: 'Academic', color: '#00fa9a', image: '/assets/resumes/harvard.png' },
  { id: 6, name: 'Sigma', category: 'Modern', color: '#ff8c00', image: '/assets/resumes/sigma.png' },
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
                <div className="resume-image-container">
                  <img src={template.image} alt={`${template.name} Resume Template`} className="resume-preview-img" />
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
