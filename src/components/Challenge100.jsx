import React from 'react';
import { Sparkles, ArrowRight, User, Code2, Calendar, Trophy, Medal } from 'lucide-react';
import './Challenge100.css';

const Challenge100 = () => {
  return (
    <div className="challenge-page">
      {/* Green Hero Section */}
      <section className="challenge-hero">
        <div className="container challenge-content">
          <div className="limited-time-pill">
            <Sparkles size={14} /> Limited Time Challenge
          </div>
          
          <h1 className="challenge-title">100 DSA Challenge</h1>
          <p className="challenge-subtitle">
            Master Data Structures & Algorithms in 100 days and level up your coding skills
          </p>
          
          <div className="challenge-buttons">
            <button className="btn-pill btn-white">
              Register Now <ArrowRight size={16} />
            </button>
            <button className="btn-pill btn-white">
              Join the discord <User size={16} />
            </button>
          </div>
          
          <button className="btn-pill btn-white-outline mt-4">
            Start the contest <ArrowRight size={16} />
          </button>
          
          <div className="tshirt-card glass-panel">
            <Medal className="medal-icon" size={28} />
            <div className="tshirt-text">
              <span className="small-text">Top 5 Winners Get</span>
              <span className="big-text">Let's Code T-Shirt! 👕</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Stats Panel */}
      <section className="challenge-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Code2 className="stat-icon" size={36} />
              <h2>100</h2>
              <p>Problems</p>
            </div>
            <div className="stat-item border-sides">
              <Calendar className="stat-icon" size={36} />
              <h2>100</h2>
              <p>Days</p>
            </div>
            <div className="stat-item">
              <Trophy className="stat-icon" size={36} />
              <h2>5</h2>
              <p>Winners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge100;
