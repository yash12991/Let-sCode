import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Clock, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Contests.css';

const Contests = () => {
  return (
    <section id="contests" className="contests-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="contests-header">
          <div className="header-subtitle">
            <div className="icon-circle">
              <Trophy size={16} />
            </div>
            <span>COMPETITIONS</span>
          </div>
          <h2 className="section-title text-left">Coding Contests</h2>
          <p className="contests-desc">
            Compete, climb the leaderboard, and win prizes. New contests every week.
          </p>
          
          <div className="contests-stats">
            <div className="stat-box">
              <h3>1</h3>
              <p>Active Now</p>
            </div>
            <div className="stat-box">
              <h3>0</h3>
              <p>Upcoming</p>
            </div>
            <div className="stat-box">
              <h3>0+</h3>
              <p>Past Contests</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="contests-tabs">
          <button className="tab active">
            <CheckCircle2 size={16} /> Active & Upcoming <span className="badge-count">1</span>
          </button>
          <button className="tab">
            <Clock size={16} /> Past Contests
          </button>
        </div>

        {/* Live Contest Card */}
        <div className="live-now-label">
          <span className="dot"></span> LIVE NOW
        </div>

        <div className="contest-card glass-panel">
          <div className="card-top">
            <div className="card-icon">
              <Trophy size={24} />
            </div>
            <div className="card-content">
              <div className="card-badges">
                <span className="badge badge-live"><span className="dot"></span> Live</span>
                <span className="badge badge-unrated">Unrated</span>
                <span className="badge badge-prize">Prize: Free Gift Hampers</span>
              </div>
              
              <div className="card-title-row">
                <div>
                  <h3 className="contest-title">100 Days DSA Challenge #1</h3>
                  <p className="contest-subtitle">Solve 1 problems daily</p>
                </div>
                <a href="https://www.lets-code.co.in/100-days-dsa-challenge/" target="_blank" rel="noopener noreferrer" className="btn btn-primary register-btn">
                  Register <ChevronRight size={16} />
                </a>
              </div>

              <div className="contest-info">
                <span><Calendar size={14} /> April 27, 2026, 8:00 PM IST</span>
                <span><Clock size={14} /> No duration</span>
                <span><Users size={14} /> 2,200 registered</span>
              </div>

              <div className="contest-tags">
                <span className="tag">Arrays</span>
                <span className="tag">DP</span>
                <span className="tag">Graphs</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contests;
