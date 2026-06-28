import React from 'react';
import { Bell, ShieldCheck, Rocket, ChevronRight, CheckCircle2, MessageCircle, Send, Globe } from 'lucide-react';
import './JobSeekerTiers.css';

const JobSeekerTiers = () => {
  return (
    <section className="tiers-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="opp-pill">
            <BriefcaseIcon /> Opportunities
          </div>
          <h2 className="section-title">Trusted by <span className="text-red-500">10,000+</span> Job Seekers</h2>
          <p className="section-subtitle">
            Get daily job updates, premium batch-wise alerts & startup opportunities across India.
          </p>
        </div>

        <div className="tiers-grid">
          {/* Card 1: Free */}
          <div className="tier-card tier-free">
            <div className="tier-icon-wrapper free-icon">
              <Bell size={20} />
            </div>
            <h3>Free Job Updates</h3>
            <p className="tier-desc">
              Daily job alerts on WhatsApp, Telegram & LinkedIn — free, no spam, direct apply links.
            </p>
            <div className="social-icons">
              <MessageCircle size={16} className="text-green-500" />
              <Send size={16} className="text-blue-400" />
              <Globe size={16} className="text-blue-600" />
            </div>
            <button className="btn-tier btn-free">Join Free <ChevronRight size={16} /></button>
          </div>

          {/* Card 2: Premium */}
          <div className="tier-card tier-premium">
            <div className="premium-tag">Premium</div>
            <div className="tier-icon-wrapper premium-icon">
              <ShieldCheck size={20} />
            </div>
            <h3>Batch-wise Job Updates</h3>
            <p className="tier-desc">
              Lifetime exclusive access to batch wise premium job alerts, verified opportunities & placement materials.
            </p>
            <ul className="premium-features">
              <li><CheckCircle2 size={14} className="text-red-400" /> Early notifications</li>
              <li><CheckCircle2 size={14} className="text-red-400" /> Verified apply links</li>
              <li><CheckCircle2 size={14} className="text-red-400" /> Resume & cover letter templates</li>
            </ul>
            <button className="btn-tier btn-premium">Get Premium Access <ChevronRight size={16} /></button>
          </div>

          {/* Card 3: Startup */}
          <div className="tier-card tier-startup">
            <div className="tier-icon-wrapper startup-icon">
              <Rocket size={20} />
            </div>
            <h3>Startup Opportunities</h3>
            <p className="tier-desc">
              Curated startup jobs from Bangalore, Hyderabad, Pune & more — including 100% remote & unicorns.
            </p>
            <div className="startup-tags">
              <span>Bangalore</span>
              <span>Remote</span>
              <span>Unicorns</span>
              <span>Product</span>
            </div>
            <button className="btn-tier btn-startup">Explore <ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for pill icon
const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export default JobSeekerTiers;
