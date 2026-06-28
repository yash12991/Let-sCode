import React from 'react';
import { Users, Code, MapPin, Briefcase, Search, PlusCircle } from 'lucide-react';
import './DeveloperNetwork.css';

const DeveloperNetwork = () => {
  return (
    <section className="dev-network-section">
      <div className="container">
        <div className="network-card">
          <div className="network-content">
            <div className="network-pill">
              <Users size={14} /> Developer Network
            </div>
            <h2>Connect with Developers & Get Hired</h2>
            <p>
              Explore public profiles of students and professionals on Let's Code.
              Search by skills, location, and experience — whether you're looking for
              a collaborator, hiring talent, or just getting inspired.
            </p>
            <div className="network-actions">
              <button className="btn btn-white"><Search size={16} /> Explore Profiles</button>
              <button className="btn btn-dark-outline"><PlusCircle size={16} /> Create Your Profile</button>
            </div>
          </div>
          
          <div className="network-stats">
            <div className="net-stat-box">
              <Users className="net-icon" size={20} />
              <h4>500+</h4>
              <span>Public Profiles</span>
            </div>
            <div className="net-stat-box">
              <Code className="net-icon" size={20} />
              <h4>1000+</h4>
              <span>Skills Listed</span>
            </div>
            <div className="net-stat-box">
              <MapPin className="net-icon" size={20} />
              <h4>50+</h4>
              <span>Cities</span>
            </div>
            <div className="net-stat-box">
              <Briefcase className="net-icon" size={20} />
              <h4>100%</h4>
              <span>Hiring Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperNetwork;
