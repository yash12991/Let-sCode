import React from 'react';
import { Users, Server, Cloud, Code2, Brain, Database, Shield, CheckSquare } from 'lucide-react';
import './Community.css';

const communities = [
  { name: 'DSA Masters', desc: 'Master Data Structures & Algorithms with daily problems.', icon: Code2, color: '#ff3366' },
  { name: 'Full Stack Hub', desc: 'Connect with full stack developers & modern web dev.', icon: Server, color: '#00f0ff' },
  { name: 'Cloud Computing', desc: 'Explore AWS, Azure, GCP and cloud-native tech.', icon: Cloud, color: '#1e90ff' },
  { name: 'Open Source', desc: 'Contribute to open source projects & grow portfolio.', icon: Users, color: '#00fa9a' },
  { name: 'AI/ML Engineers', desc: 'Discuss AI, Machine Learning & Deep Learning.', icon: Brain, color: '#8a2be2' },
  { name: 'Data Science', desc: 'Learn data analysis, visualization & modeling.', icon: Database, color: '#ff8c00' },
  { name: 'Cyber Security', desc: 'Explore security concepts, ethical hacking & best practices.', icon: Shield, color: '#e63946' },
  { name: 'QA Community', desc: 'Connect with QA engineers & testing methodologies.', icon: CheckSquare, color: '#457b9d' }
];

const Community = () => {
  return (
    <section id="community" className="community-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect with 1 Lakh+ Engineers</h2>
          <p className="section-subtitle">Join specific Discord hubs to learn, network, and grow together.</p>
        </div>

        <div className="community-grid">
          {communities.map((comm, idx) => {
            const Icon = comm.icon;
            return (
              <div key={idx} className="community-card glass-panel" style={{'--comm-color': comm.color}}>
                <div className="comm-icon-wrapper">
                  <Icon size={24} className="comm-icon" />
                </div>
                <div className="comm-content">
                  <h4>{comm.name}</h4>
                  <p>{comm.desc}</p>
                </div>
                <button className="btn btn-outline btn-join">Join</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
