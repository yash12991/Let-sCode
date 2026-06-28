import React from 'react';
import { Code2, Users, Cloud, GitBranch, Brain, Database, Shield, TestTube } from 'lucide-react';
import './TechCommunities.css';

const communities = [
  {
    icon: <Code2 size={24} className="text-blue-500" />,
    title: 'DSA Masters',
    desc: 'Master Data Structures & Algorithms with daily problems and discussions'
  },
  {
    icon: <Users size={24} className="text-teal-500" />,
    title: 'Full Stack Hub',
    desc: 'Connect with full stack developers and learn modern web development'
  },
  {
    icon: <Cloud size={24} className="text-sky-400" />,
    title: 'Cloud Computing',
    desc: 'Explore AWS, Azure, GCP and cloud-native technologies'
  },
  {
    icon: <GitBranch size={24} className="text-yellow-500" />,
    title: 'Open Source',
    desc: 'Contribute to open source projects and grow your portfolio'
  },
  {
    icon: <Brain size={24} className="text-pink-400" />,
    title: 'AI/ML Engineers',
    desc: 'Discuss AI, Machine Learning, and Deep Learning concepts'
  },
  {
    icon: <Database size={24} className="text-green-500" />,
    title: 'Data Science',
    desc: 'Learn data analysis, visualization, and statistical modeling'
  },
  {
    icon: <Shield size={24} className="text-indigo-400" />,
    title: 'Cyber Security',
    desc: 'Explore security concepts, ethical hacking, and best practices'
  },
  {
    icon: <TestTube size={24} className="text-orange-500" />,
    title: 'QA Community',
    desc: 'Connect with QA engineers and learn testing methodologies'
  }
];

const TechCommunities = () => {
  return (
    <section className="tech-communities-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="tabs-header">
            <span className="tab-link active">Tech Communities</span>
            <span className="tab-link">Location-Based Communities</span>
          </div>
          <h2 className="section-title">Join Our Tech Communities</h2>
          <p className="section-subtitle">Connect with like-minded developers in your area of interest</p>
        </div>

        <div className="communities-grid">
          {communities.map((comm, index) => (
            <div key={index} className="community-card glass-panel">
              <div className="comm-icon-wrapper">
                {comm.icon}
              </div>
              <h3>{comm.title}</h3>
              <p>{comm.desc}</p>
              <button className="btn-login-join">Please login to join</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCommunities;
