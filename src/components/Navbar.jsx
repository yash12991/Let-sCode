import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import './Navbar.css';
import logoImage from './asset/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Let's Code Logo" className="logo-icon" style={{ height: '36px', width: 'auto' }} />
          <span>Let's Code</span>
        </Link>

        <ul className={`nav-links ${mobileMenuOpen ? 'active glass-panel' : ''}`}>
          <li className="dropdown mega-dropdown">
            <a href="#learn" className="dropdown-trigger">Learn <ChevronDown size={14} /></a>
            <div className="dropdown-content mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-col">
                  <h4>Core Roadmaps</h4>
                  <a href="#dsa">DSA Roadmap</a>
                  <a href="#system-design">System Design</a>
                  <a href="#placement-kit">A to Z Placement Kit</a>
                  <a href="#placement">Placement Roadmap</a>
                  <a href="#aptitude">Aptitude Roadmap</a>
                </div>
                <div className="mega-col">
                  <h4>Development</h4>
                  <a href="#react">React Roadmap</a>
                  <a href="#fullstack">Full Stack Roadmap</a>
                  <a href="#backend">Backend Roadmap</a>
                  <a href="#java">Java Developer</a>
                  <a href="#android">Android Dev</a>
                  <a href="#golang">Golang Dev</a>
                  <a href="#devops">DevOps Roadmap</a>
                </div>
                <div className="mega-col">
                  <h4>Data & AI</h4>
                  <a href="#ml">Machine Learning</a>
                  <a href="#ai">AI Engineer</a>
                  <a href="#llm">LLM Roadmap</a>
                  <a href="#data-science">Data Science</a>
                  <a href="#data-analyst">Data Analyst</a>
                  <a href="#data-eng">Data Engineering</a>
                  <a href="#cyber">Cybersecurity</a>
                  <a href="#robotics">Robotics & IoT</a>
                </div>
                <div className="mega-col">
                  <h4>Career & Resources</h4>
                  <a href="#resume">Resume Templates</a>
                  <a href="#ats">ATS Resume Guide</a>
                  <a href="#cold-email">Cold Email Templates</a>
                  <a href="#study-notes">Study Notes</a>
                  <a href="#projects">Final Year Projects</a>
                  <a href="#leetcode">LeetCode Top 150</a>
                  <a href="#hackathons">Top Hackathons</a>
                  <a href="#startup-build">Build a Startup!</a>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown mega-dropdown">
            <a href="#practice" className="dropdown-trigger">Practice <ChevronDown size={14} /></a>
            <div className="dropdown-content mega-menu practice-mega">
              <div className="mega-menu-grid practice-grid">
                <div className="mega-col">
                  <h4>PYQs: Big Tech</h4>
                  <a href="#pyq">Amazon</a>
                  <a href="#pyq">Google</a>
                  <a href="#pyq">Meta</a>
                  <a href="#pyq">Apple</a>
                  <a href="#pyq">Microsoft</a>
                  <a href="#pyq">Uber</a>
                  <a href="#pyq">Atlassian</a>
                  <a href="#pyq">Salesforce</a>
                  <a href="#pyq">Oracle</a>
                  <a href="#pyq">Cisco</a>
                  <a href="#pyq">Adobe</a>
                  <a href="#pyq">Nvidia</a>
                  <a href="#pyq">SAP</a>
                  <a href="#pyq">Intuit</a>
                  <a href="#pyq">Samsung</a>
                  <a href="#pyq">Qualcomm</a>
                </div>
                <div className="mega-col">
                  <h4>PYQs: Service</h4>
                  <a href="#pyq">TCS & TCS NQT</a>
                  <a href="#pyq">Cognizant</a>
                  <a href="#pyq">Wipro</a>
                  <a href="#pyq">Infosys</a>
                  <a href="#pyq">IBM</a>
                  <a href="#pyq">Accenture</a>
                  <a href="#pyq">Capgemini</a>
                  <a href="#pyq">Virtusa</a>
                  <a href="#pyq">EPAM</a>
                  <a href="#pyq">Deloitte (NLA)</a>
                  <a href="#pyq">L&T</a>
                  <a href="#pyq">HCL</a>
                </div>
                <div className="mega-col">
                  <h4>PYQs: Startups</h4>
                  <a href="#pyq">Flipkart</a>
                  <a href="#pyq">Juspay</a>
                  <a href="#pyq">DE Shaw</a>
                  <a href="#pyq">Goldman Sachs</a>
                  <a href="#pyq">Morgan Stanley</a>
                  <a href="#pyq">PhonePe</a>
                  <a href="#pyq">Walmart</a>
                  <a href="#pyq">PayPal</a>
                  <a href="#pyq">Swiggy</a>
                  <a href="#pyq">Razorpay</a>
                  <a href="#pyq">Paytm</a>
                  <a href="#pyq">Myntra</a>
                  <a href="#pyq">JP Morgan</a>
                </div>
                <div className="mega-col">
                  <h4>Interview Qs (Core)</h4>
                  <a href="#iq">OOPs</a>
                  <a href="#iq">OS</a>
                  <a href="#iq">DBMS</a>
                  <a href="#iq">Computer Network</a>
                  <a href="#iq">SQL</a>
                  <a href="#iq">Software Eng</a>
                  <a href="#iq">Advanced Placement</a>
                  <a href="#iq">Data Analyst</a>
                  <a href="#iq">Data Engineering</a>
                  <a href="#iq">Data Science</a>
                  <a href="#iq">HR Interview</a>
                </div>
                <div className="mega-col">
                  <h4>Interview Qs (Web)</h4>
                  <a href="#iq">Javascript</a>
                  <a href="#iq">Python</a>
                  <a href="#iq">Core Java</a>
                  <a href="#iq">Java Full Stack</a>
                  <a href="#iq">React Js</a>
                  <a href="#iq">SpringBoot</a>
                  <a href="#iq">MERN Stack</a>
                  <a href="#iq">Frontend Dev</a>
                  <a href="#iq">Cloud</a>
                  <a href="#iq">DevOps</a>
                  <a href="#iq">LeetCode Top 150</a>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/contests">Contests</Link></li>
          <li className="dropdown">
            <a href="#jobs" className="dropdown-trigger">Jobs <ChevronDown size={14} /></a>
            <div className="dropdown-content glass-panel">
              <a href="#jobs">Job Board</a>
              <a href="#startups">Startups</a>
              <a href="#experiences">Experiences</a>
            </div>
          </li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#products">Products</a></li>
          
          {/* Mobile only actions inside menu */}
          <li className="mobile-only">
            <a href="#tools" className="btn ai-tools-btn"><Sparkles size={16} /> AI Tools</a>
          </li>
          <li className="mobile-only">
            <a href="#login" className="btn btn-outline nav-btn">Sign In</a>
          </li>
        </ul>

        <div className="nav-actions desktop-only">
          <a href="#tools" className="btn ai-tools-btn"><Sparkles size={16} /> AI Tools</a>
          <a href="#login" className="btn btn-outline nav-btn">Sign In</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
