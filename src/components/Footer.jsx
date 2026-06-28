import React from 'react';
import { 
  Terminal, Code2, Zap, ArrowRight, 
  MapPin, Mail, Send, Globe, Share2, 
  Network, Hash, MessageCircle 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Top Banner CTA */}
        <div className="footer-cta-banner">
          <div className="cta-left">
            <div className="cta-icon-wrapper">
              <Zap size={20} className="cta-icon" />
            </div>
            <div className="cta-text">
              <h4>8 Free AI Career Tools</h4>
              <p>Mock tests, resume scan, job finder, cover letter & more</p>
            </div>
          </div>
          <button className="btn btn-cta">
            Open AI Toolkit <ArrowRight size={16} />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo">
              <div className="logo-icon-box">
                <Code2 size={20} className="brand-icon" />
              </div>
              <span className="brand-name">Let's Code</span>
            </a>
            
            <p className="footer-desc">
              AI-powered career tools, 1000+ free resources, and a community of 1 lakh+ engineers — everything you need to land your dream tech job.
            </p>
            
            <div className="footer-socials">
              <a href="#"><MessageCircle size={18} /></a>
              <a href="#"><Send size={18} /></a>
              <a href="#"><Network size={18} /></a>
              <a href="#"><Globe size={18} /></a>
              <a href="#"><Share2 size={18} /></a>
              <a href="#"><Hash size={18} /></a>
            </div>

            <div className="newsletter">
              <h5 className="newsletter-title">STAY UPDATED</h5>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Your email address" />
                <button className="submit-btn"><Send size={14} /></button>
              </div>
              <p className="spam-notice">No spam. Unsubscribe any time.</p>
            </div>

            <div className="contact-info">
              <p><MapPin size={14} /> New Delhi, India</p>
              <p><Mail size={14} /> letscode@lets-code.co.in</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Learning</h4>
              <ul>
                <li><a href="#">DSA Roadmap</a></li>
                <li><a href="#">System Design</a></li>
                <li><a href="#">Interview Questions</a></li>
                <li><a href="#">Company PYQs</a></li>
                <li><a href="#">100 Days Challenge</a></li>
                <li><a href="#">Tech Blogs</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>AI Tools</h4>
              <ul>
                <li><a href="#">Mock Interview</a></li>
                <li><a href="#">Resume Optimizer</a></li>
                <li><a href="#">LinkedIn Optimizer</a></li>
                <li><a href="#">Job Ready Score</a></li>
                <li><a href="#">AI Job Finder</a></li>
                <li><a href="#">Cover Letter AI</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Interview Experiences</a></li>
                <li><a href="#">Startup Directory</a></li>
                <li><a href="#">Explore Profiles</a></li>
                <li><a href="#">Job Opportunities</a></li>
                <li><a href="#">Premium Resume Templates ↗</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-popular">
            <span className="popular-label">POPULAR</span>
            <a href="#">DSA Roadmap</a>
            <a href="#">Mock Interview</a>
            <a href="#">AI Job Finder</a>
            <a href="#">Cover Letter</a>
            <a href="#">Startup Jobs</a>
          </div>
          <div className="footer-copyright">
            © 2026 Let's Code · Made with <span className="heart">❤</span> for developers · Sitemap
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
