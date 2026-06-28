import React from 'react';
import { MapPin, Building2, Briefcase, Rocket } from 'lucide-react';
import './StartupJobs.css';

const hubs = [
  { city: "Bangalore", desc: "India's Silicon Valley — 5000+ active startups, AI & unicorns.", color: "#00f0ff" },
  { city: "Hyderabad", desc: "HITEC City ecosystem with IT, biotech & deep tech innovations.", color: "#8a2be2" },
  { city: "Gurgaon", desc: "NCR's startup powerhouse — e-commerce to foodtech unicorns.", color: "#ff3366" },
  { city: "Pune", desc: "Growing tech hub — SaaS, automotive tech & engineering.", color: "#00fa9a" },
  { city: "Mumbai", desc: "Financial capital — fintech, media & D2C startups.", color: "#ff8c00" }
];

const StartupJobs = () => {
  return (
    <section id="startups" className="startups-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Startup Opportunities</h2>
          <p className="section-subtitle">Curated startup jobs from top hubs — including 100% remote & unicorns.</p>
        </div>

        <div className="startup-stats glass-panel">
          <div className="stat-box">
            <Building2 size={32} className="stat-icon" style={{color: '#00f0ff'}} />
            <h4>3,200+</h4>
            <p>Companies Database</p>
          </div>
          <div className="stat-box">
            <Briefcase size={32} className="stat-icon" style={{color: '#00fa9a'}} />
            <h4>Daily</h4>
            <p>Job Updates</p>
          </div>
          <div className="stat-box">
            <Rocket size={32} className="stat-icon" style={{color: '#8a2be2'}} />
            <h4>Unicorns</h4>
            <p>Hiring Now</p>
          </div>
        </div>
        
        <div className="hubs-grid">
          {hubs.map((hub, index) => (
            <div key={index} className="hub-card glass-panel" style={{'--hub-color': hub.color}}>
              <div className="hub-header">
                <MapPin size={20} className="hub-icon" />
                <h3>{hub.city}</h3>
              </div>
              <p>{hub.desc}</p>
              <div className="hub-footer">Explore →</div>
            </div>
          ))}
          
          <div className="hub-card glass-panel remote-card">
             <div className="hub-header">
                <h3>100% Remote</h3>
              </div>
              <p>Work from anywhere — flexible culture & global exposure.</p>
              <div className="hub-footer">Explore →</div>
          </div>
        </div>
        
        <div className="tools-cta">
          <a href="#upload-resume" className="btn btn-primary btn-lg">
            Find My Matching Jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default StartupJobs;
