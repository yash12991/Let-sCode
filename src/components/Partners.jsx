import React from 'react';
import { Code, Hash, Database, Cloud, Leaf, Box, Layers, Command } from 'lucide-react';
import './Partners.css';

const partners = [
  { name: 'CodeCrafters', icon: <Code size={24} className="text-blue-400" /> },
  { name: 'topmate.io', icon: <Hash size={24} className="text-red-400" /> },
  { name: 'Notion', icon: <Box size={24} className="text-gray-400" /> },
  { name: 'Unstop', icon: <Layers size={24} className="text-blue-500" /> },
  { name: 'MongoDB', icon: <Database size={24} className="text-green-500" /> },
  { name: 'aws startups', icon: <Cloud size={24} className="text-yellow-500" /> },
  { name: 'EcoTech', icon: <Leaf size={24} className="text-emerald-400" /> },
  { name: 'InCommon', icon: <Command size={24} className="text-blue-300" /> },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container text-center">
        <h2 className="section-title">Our Partners & Collaborators</h2>
        <p className="section-subtitle mx-auto" style={{ maxWidth: '700px' }}>
          We are proud to collaborate with industry leaders and innovators who share our vision. 
          Our partners help us deliver exceptional solutions and drive success for our clients.
        </p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card glass-panel flex-center">
              {partner.icon}
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-10">Become a Partner or Collaborate with us</button>
      </div>
    </section>
  );
};

export default Partners;
