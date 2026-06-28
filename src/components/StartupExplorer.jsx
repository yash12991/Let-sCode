import React from 'react';
import { MapPin, Building2, Building, Globe, Zap, Code2, Rocket, Briefcase, ChevronRight, Star, Database } from 'lucide-react';
import './StartupExplorer.css';

const locations = [
  { icon: <Building2 className="text-blue-400" />, name: 'Bangalore', desc: 'India\'s Silicon Valley. 5000+ active startups, AI companies & unicorns.' },
  { icon: <Building className="text-purple-400" />, name: 'Hyderabad', desc: 'HITEC City ecosystem with IT, biotech & deep tech innovations.' },
  { icon: <MapPin className="text-yellow-400" />, name: 'Gurgaon', desc: 'NCR\'s startup powerhouse — e-commerce to foodtech unicorns.' },
  { icon: <Globe className="text-green-400" />, name: 'Pune', desc: 'Growing tech hub — SaaS, automotive tech & engineering.' },
  { icon: <MapPin className="text-red-400" />, name: 'Mumbai', desc: 'Financial capital — fintech, media & D2C startups.' },
  { icon: <Code2 className="text-teal-400" />, name: 'Product Based', desc: 'Join companies building cutting-edge products with engineering excellence.' },
  { icon: <Globe className="text-blue-500" />, name: '100% Remote', desc: 'Work from anywhere — flexible culture & global exposure.' },
  { icon: <Rocket className="text-pink-500" />, name: 'Unicorns', desc: 'Join India\'s billion-dollar tech revolution.' },
];

const StartupExplorer = () => {
  const handleMouseMove = (e) => {
    for (const card of document.querySelectorAll('.location-card')) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section className="startup-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="startup-pill">
            <Rocket size={14} /> Startup Ecosystem
          </div>
          <h2 className="section-title">Explore Startups by Location</h2>
          <p className="section-subtitle">
            Discover opportunities in India's top startup hubs and join the next generation of innovators.
          </p>
        </div>

        {/* Premium Bundle Banner */}
        <div className="startup-bundle-card">
          <div className="bundle-content">
            <div className="premium-badge"><Star size={12} className="text-yellow-400" fill="#facc15" /> Premium Bundle</div>
            <h3>The Ultimate Startup Bundle</h3>
            <p>A massive, organized database of <strong>3,200+ companies</strong> in one Google Sheet — stop searching, start targeting.</p>
            
            <div className="bundle-tags">
              <span className="b-tag"><MapPin size={12} /> 2,000+ Location-Based</span>
              <span className="b-tag"><Zap size={12} /> 200+ AI/LLM Startups</span>
              <span className="b-tag"><Code2 size={12} /> Java · React · Node.js</span>
              <span className="b-tag"><Briefcase size={12} /> Remote & Fintech</span>
            </div>

            <a href="https://topmate.io/letscode/2071103" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Get Instant Access <ChevronRight size={16} /></a>
          </div>
          <div className="bundle-accent">
            <Database size={48} className="mb-4 opacity-90" />
            <h2 className="text-4xl font-bold">3,200+</h2>
            <p className="text-sm opacity-90">Companies in One Sheet</p>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="locations-grid" onMouseMove={handleMouseMove}>
          {locations.map((loc, index) => (
            <div key={index} className="location-card glass-panel">
              <div className="loc-icon">
                {loc.icon}
              </div>
              <h4>{loc.name}</h4>
              <p>{loc.desc}</p>
              <div className="explore-btn-wrapper">
                <a href="#" className="explore-link">
                  <span className="explore-icon-circle"><ChevronRight size={14} /></span>
                  <span className="text-span">Explore</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupExplorer;
