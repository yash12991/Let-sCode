import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Sun, Moon } from 'lucide-react';
import './Navbar.css';
import logoImage from './asset/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
                  <a href="https://www.lets-code.co.in/articles/roadmap/" target="_blank" rel="noopener noreferrer">DSA Roadmap</a>
                  <a href="https://www.lets-code.co.in/articles/systemdesign/" target="_blank" rel="noopener noreferrer">System Design</a>
                  <a href="https://www.lets-code.co.in/articles/AtoZ-Placement-Kit/" target="_blank" rel="noopener noreferrer">A to Z Placement Kit</a>
                  <a href="https://www.lets-code.co.in/articles/placement/" target="_blank" rel="noopener noreferrer">Placement Roadmap</a>
                  <a href="https://www.lets-code.co.in/articles/aptituderoadmap/" target="_blank" rel="noopener noreferrer">Aptitude Roadmap</a>
                </div>
                <div className="mega-col">
                  <h4>Development</h4>
                  <a href="https://www.lets-code.co.in/articles/react/" target="_blank" rel="noopener noreferrer">React Roadmap</a>
                  <a href="https://www.lets-code.co.in/articles/fullstackroadmap/" target="_blank" rel="noopener noreferrer">Full Stack Roadmap</a>
                  <a href="https://www.lets-code.co.in/articles/backendroadmap/" target="_blank" rel="noopener noreferrer">Backend Roadmap</a>
                  <a href="https://www.lets-code.co.in/articles/javadeveloperroadmap/" target="_blank" rel="noopener noreferrer">Java Developer</a>
                  <a href="https://www.lets-code.co.in/articles/android-development-roadmap/" target="_blank" rel="noopener noreferrer">Android Dev</a>
                  <a href="https://www.lets-code.co.in/articles/golang-developer-roadmap/" target="_blank" rel="noopener noreferrer">Golang Dev</a>
                  <a href="https://www.lets-code.co.in/articles/devopsroadmap/" target="_blank" rel="noopener noreferrer">DevOps Roadmap</a>
                </div>
                <div className="mega-col">
                  <h4>Data & AI</h4>
                  <a href="https://www.lets-code.co.in/articles/machinelearningroadmap/" target="_blank" rel="noopener noreferrer">Machine Learning</a>
                  <a href="https://www.lets-code.co.in/articles/AIEngineerRoadmap/" target="_blank" rel="noopener noreferrer">AI Engineer</a>
                  <a href="https://www.lets-code.co.in/articles/llmsroadmap/" target="_blank" rel="noopener noreferrer">LLM Roadmap</a>
                  <a href="https://www.lets-code.co.in/articles/datascienceroadmap/" target="_blank" rel="noopener noreferrer">Data Science</a>
                  <a href="https://www.lets-code.co.in/articles/dataanalystroadmap/" target="_blank" rel="noopener noreferrer">Data Analyst</a>
                  <a href="https://www.lets-code.co.in/articles/dataengineeringroadmap/" target="_blank" rel="noopener noreferrer">Data Engineering</a>
                  <a href="https://www.lets-code.co.in/articles/cybersecurityroadmap/" target="_blank" rel="noopener noreferrer">Cybersecurity</a>
                  <a href="https://www.lets-code.co.in/articles/robotics-iot-roadmap/" target="_blank" rel="noopener noreferrer">Robotics & IoT</a>
                </div>
                <div className="mega-col">
                  <h4>Career & Resources</h4>
                  <a href="https://www.lets-code.co.in/resume-templates/" target="_blank" rel="noopener noreferrer">Resume Templates</a>
                  <a href="https://www.lets-code.co.in/articles/resume/" target="_blank" rel="noopener noreferrer">ATS Resume Guide</a>
                  <a href="https://www.lets-code.co.in/articles/coldemailtemplates/" target="_blank" rel="noopener noreferrer">Cold Email Templates</a>
                  <a href="https://www.lets-code.co.in/articles/resources/" target="_blank" rel="noopener noreferrer">Study Notes</a>
                  <a href="https://www.lets-code.co.in/articles/finalyearprojects/" target="_blank" rel="noopener noreferrer">Final Year Projects</a>
                  <a href="https://www.lets-code.co.in/articles/leetcodetop150questions/" target="_blank" rel="noopener noreferrer">LeetCode Top 150</a>
                  <a href="https://www.lets-code.co.in/articles/hackathons/" target="_blank" rel="noopener noreferrer">Top Hackathons</a>
                  <a href="https://www.lets-code.co.in/articles/How-to-Build-a-Startup-from-Scratch/" target="_blank" rel="noopener noreferrer">Build a Startup!</a>
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
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/amazon-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Amazon</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/google-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Google</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/meta-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Meta</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/apple-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Apple</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/microsoft-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Microsoft</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/uber-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Uber</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/atlassian-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Atlassian</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/salesforce-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Salesforce</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/oracle-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Oracle</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/cisco-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Cisco</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/adobe-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Adobe</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/nvidia-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Nvidia</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/sap-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">SAP</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/intuit-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Intuit</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/samsung-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Samsung</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/qualcomm-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Qualcomm</a>
                </div>
                <div className="mega-col">
                  <h4>PYQs: Service</h4>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/tcspyq/" target="_blank" rel="noopener noreferrer">TCS & TCS NQT</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/cognizantcodingquestions/" target="_blank" rel="noopener noreferrer">Cognizant</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/wiprocodingquestions/" target="_blank" rel="noopener noreferrer">Wipro</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Infosys</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/ibmcodingquestions/" target="_blank" rel="noopener noreferrer">IBM</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/accenturequestions/" target="_blank" rel="noopener noreferrer">Accenture</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/capgeminiquestions/" target="_blank" rel="noopener noreferrer">Capgemini</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/virtusacodingquestions/" target="_blank" rel="noopener noreferrer">Virtusa</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/epam-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">EPAM</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/deloitte-nla-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Deloitte (NLA)</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/larsen-toubro-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">L&T</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/hcl-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">HCL</a>
                </div>
                <div className="mega-col">
                  <h4>PYQs: Startups</h4>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/flipkart-grid-7-coding-round-preparation-guide/" target="_blank" rel="noopener noreferrer">Flipkart</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/juspay-hiring-challenge-2025-preparation-guide-pyqs/" target="_blank" rel="noopener noreferrer">Juspay</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/de-shaw-previous-year-coding-questions-hiring-process-guide/" target="_blank" rel="noopener noreferrer">DE Shaw</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/goldman-sachs-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Goldman Sachs</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/morgan-stanley-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Morgan Stanley</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/phonepe-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">PhonePe</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/walmart-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Walmart</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/paypal-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">PayPal</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/swiggy-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Swiggy</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/razorpay-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Razorpay</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/paytm-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Paytm</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/myntra-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">Myntra</a>
                  <a href="https://www.lets-code.co.in/previousyearcodingquestion/jp-morgan-previous-year-coding-questions/" target="_blank" rel="noopener noreferrer">JP Morgan</a>
                </div>
                <div className="mega-col">
                  <h4>Interview Qs (Core)</h4>
                  <a href="https://www.lets-code.co.in/interview/oppsinterviewquestions/" target="_blank" rel="noopener noreferrer">OOPs</a>
                  <a href="https://www.lets-code.co.in/interview/osinterview/" target="_blank" rel="noopener noreferrer">OS</a>
                  <a href="https://www.lets-code.co.in/interview/dbmsinterview/" target="_blank" rel="noopener noreferrer">DBMS</a>
                  <a href="https://www.lets-code.co.in/interview/computernetworkinterview/" target="_blank" rel="noopener noreferrer">Computer Network</a>
                  <a href="https://www.lets-code.co.in/interview/sqlinterviewquestions/" target="_blank" rel="noopener noreferrer">SQL</a>
                  <a href="https://www.lets-code.co.in/interview/softwareengineeringquestions/" target="_blank" rel="noopener noreferrer">Software Eng</a>
                  <a href="https://www.lets-code.co.in/interview/advanced-placement-interview-questions/" target="_blank" rel="noopener noreferrer">Advanced Placement</a>
                  <a href="https://www.lets-code.co.in/interview/dataanalystinterviewquestions/" target="_blank" rel="noopener noreferrer">Data Analyst</a>
                  <a href="https://www.lets-code.co.in/interview/dataengineeringquestions/" target="_blank" rel="noopener noreferrer">Data Engineering</a>
                  <a href="https://www.lets-code.co.in/interview/datasciencequestions/" target="_blank" rel="noopener noreferrer">Data Science</a>
                  <a href="https://www.lets-code.co.in/interview/hrinterviewquestions/" target="_blank" rel="noopener noreferrer">HR Interview</a>
                </div>
                <div className="mega-col">
                  <h4>Interview Qs (Web)</h4>
                  <a href="https://www.lets-code.co.in/interview/javascriptinterview/" target="_blank" rel="noopener noreferrer">Javascript</a>
                  <a href="https://www.lets-code.co.in/interview/pythoninterviewquestions/" target="_blank" rel="noopener noreferrer">Python</a>
                  <a href="https://www.lets-code.co.in/interview/corejavainterviewquestions/" target="_blank" rel="noopener noreferrer">Core Java</a>
                  <a href="https://www.lets-code.co.in/interview/javafullstackinterviewquestions/" target="_blank" rel="noopener noreferrer">Java Full Stack</a>
                  <a href="https://www.lets-code.co.in/interview/reactjsinterviewquestions/" target="_blank" rel="noopener noreferrer">React Js</a>
                  <a href="https://www.lets-code.co.in/interview/springbootinterview/" target="_blank" rel="noopener noreferrer">SpringBoot</a>
                  <a href="https://www.lets-code.co.in/interview/mernstackinterviewquestions/" target="_blank" rel="noopener noreferrer">MERN Stack</a>
                  <a href="https://www.lets-code.co.in/interview/frontendinterviewquestions/" target="_blank" rel="noopener noreferrer">Frontend Dev</a>
                  <a href="https://www.lets-code.co.in/interview/cloudinterviewquestions/" target="_blank" rel="noopener noreferrer">Cloud</a>
                  <a href="https://www.lets-code.co.in/interview/devopsinterviewquestions/" target="_blank" rel="noopener noreferrer">DevOps</a>
                  <a href="https://www.lets-code.co.in/articles/leetcodetop150questions/" target="_blank" rel="noopener noreferrer">LeetCode Top 150</a>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/contests">Contests</Link></li>
          <li className="dropdown">
            <a href="https://www.lets-code.co.in/jobs/" className="dropdown-trigger" target="_blank" rel="noopener noreferrer">Jobs <ChevronDown size={14} /></a>
            <div className="dropdown-content glass-panel">
              <a href="https://www.lets-code.co.in/jobs/" target="_blank" rel="noopener noreferrer">Job Board</a>
              <a href="https://www.lets-code.co.in/startups-list/" target="_blank" rel="noopener noreferrer">Startups</a>
              <a href="https://www.lets-code.co.in/interview-experience/" target="_blank" rel="noopener noreferrer">Experiences</a>
            </div>
          </li>
          <li><a href="https://www.lets-code.co.in/explore/" target="_blank" rel="noopener noreferrer">Explore</a></li>
          <li><a href="https://topmate.io/letscode" target="_blank" rel="noopener noreferrer">Products</a></li>
          
          {/* Mobile only actions inside menu */}
          <li className="mobile-only">
            <a href="https://www.lets-code.co.in/dashboard/" target="_blank" rel="noopener noreferrer" className="btn ai-tools-btn"><Sparkles size={16} /> AI Tools</a>
          </li>
          <li className="mobile-only">
            <a href="https://www.lets-code.co.in/user/dashboard/" target="_blank" rel="noopener noreferrer" className="btn btn-outline nav-btn">Sign In</a>
          </li>
        </ul>

        <div className="nav-actions desktop-only">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="https://www.lets-code.co.in/dashboard/" target="_blank" rel="noopener noreferrer" className="btn ai-tools-btn"><Sparkles size={16} /> AI Tools</a>
          <a href="https://www.lets-code.co.in/user/dashboard/" target="_blank" rel="noopener noreferrer" className="btn btn-outline nav-btn">Sign In</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
