import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LayoutDashboard, FileText, Briefcase, MessageSquare, Search, MessageCircle, Heart, Share2, Eye, Pin, CheckCircle2 } from 'lucide-react';
import './Feed.css';

const Feed = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = 'B';

  const handleQuizClick = (option) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
    }
  };

  const getQuizClass = (option) => {
    if (!selectedAnswer) return 'quiz-option';
    if (option === correctAnswer) return 'quiz-option correct';
    if (option === selectedAnswer) return 'quiz-option incorrect';
    return 'quiz-option';
  };

  return (
    <section className="feed-page">
      <div className="container">
        
        {/* Header Section */}
        <div className="feed-header-section">
          <div className="live-updates-pill">
            <span className="dot"></span> LIVE COMMUNITY UPDATES
          </div>
          <h1 className="feed-title">
            Community <span className="gradient-text">Feed</span>
          </h1>
          <p className="feed-subtitle">
            Real placement stories, DSA tips, offer drops, PYQs & interview experiences shared by the Let's Code community.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="feed-layout">
          
          {/* Left Column: Sidebar */}
          <div className="feed-left-col">
            <div className="feed-card glass-panel profile-card">
              <div className="profile-avatar">
                <User size={32} />
              </div>
              <p>Sign in to track your activity</p>
              <button className="btn btn-primary w-full">Sign In</button>
            </div>

            <div className="feed-card glass-panel quick-links">
              <h3>QUICK LINKS</h3>
              <ul>
                <li><Link to="/"><LayoutDashboard size={18} /> Dashboard</Link></li>
                <li><Link to="/"><FileText size={18} /> PYQs</Link></li>
                <li><Link to="/"><Briefcase size={18} /> Job Board</Link></li>
                <li><Link to="/"><MessageSquare size={18} /> Interviews</Link></li>
              </ul>
            </div>
          </div>

          {/* Middle Column: Main Feed */}
          <div className="feed-main-col">
            
            <div className="create-post-bar glass-panel">
              <div className="mock-avatar"><User size={20} /></div>
              <input type="text" placeholder="Sign in to share a tip, question, or achievement..." disabled />
            </div>

            <div className="search-filter-bar glass-panel">
              <div className="search-input-wrapper">
                <Search size={18} />
                <input type="text" placeholder="Search posts..." />
              </div>
              <div className="filter-tags">
                <span className="tag active">All</span>
                <span className="tag">Achievements</span>
                <span className="tag">Discussions</span>
                <span className="tag">Tips</span>
                <span className="tag">PYQs</span>
                <span className="tag">Interviews</span>
              </div>
              <div className="sort-toggles">
                <button className="sort-btn active"><CheckCircle2 size={14} /> Latest</button>
                <button className="sort-btn">Trending</button>
              </div>
            </div>

            {/* Post 1 (Pinned) */}
            <div className="post-card glass-panel">
              <div className="post-pinned-badge">
                <Pin size={12} /> Pinned by admin
              </div>
              <div className="post-header">
                <div className="post-avatar">
                  <img src="https://ui-avatars.com/api/?name=Avinash+Singh&background=0D8ABC&color=fff" alt="Avinash Singh" />
                </div>
                <div className="post-meta">
                  <h4>Avinash Singh <span>Software Engineer at Nagarro</span></h4>
                  <span className="post-time">6h ago</span>
                </div>
                <div className="post-category">
                  <span className="badge-post">Post</span>
                </div>
              </div>
              <div className="post-content">
                <p>Vibe Coding Challenge 🚨<br/><br/>Time to show your creativity.</p>
                <a href="https://www.lets-code.co.in/" className="post-link">https://www.lets-code.co.in/</a>
                <p>Challenge<br/>Explore the website, understand what Let's Code is about, and redesign the landing page in your own style. Use any framework or UI library to build it.</p>
              </div>
              <div className="post-footer">
                <button className="btn-like"><Heart size={18} /> 42</button>
                <button className="btn-comment"><MessageCircle size={18} /> 12</button>
                <button className="btn-share"><Share2 size={18} /> Share</button>
                <span className="post-views"><Eye size={16} /> 1.2k Views</span>
              </div>
            </div>

            {/* Post 2 */}
            <div className="post-card glass-panel">
              <div className="post-header">
                <div className="post-avatar">
                  <img src="https://ui-avatars.com/api/?name=Priya+Sharma&background=14b8a6&color=fff" alt="Priya Sharma" />
                </div>
                <div className="post-meta">
                  <h4>Priya Sharma <span>SDE-1 at Amazon</span></h4>
                  <span className="post-time">12h ago</span>
                </div>
                <div className="post-category">
                  <span className="badge-achievement">Achievement</span>
                </div>
              </div>
              <div className="post-content">
                <p>Just cleared the Amazon technical interview! 🎉</p>
                <p>A huge thanks to the Let's Code community and the DSA roadmaps. The graph problems we discussed last week appeared exactly in my second round.</p>
                <p>Will share my detailed interview experience soon!</p>
              </div>
              <div className="post-footer">
                <button className="btn-like"><Heart size={18} /> 315</button>
                <button className="btn-comment"><MessageCircle size={18} /> 48</button>
                <button className="btn-share"><Share2 size={18} /> Share</button>
                <span className="post-views"><Eye size={16} /> 4.5k Views</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="feed-right-col">
            
            <div className="quiz-card glass-panel">
              <div className="quiz-header">
                <span className="quiz-title">🧠 DAILY QUIZ</span>
                <span className="quiz-badge">DSA concepts</span>
              </div>
              <p className="quiz-question">Which data structure uses LIFO principle?</p>
              <div className="quiz-options">
                <button 
                  className={getQuizClass('A')} 
                  onClick={() => handleQuizClick('A')}
                  disabled={!!selectedAnswer}
                ><strong>A.</strong> Queue</button>
                <button 
                  className={getQuizClass('B')} 
                  onClick={() => handleQuizClick('B')}
                  disabled={!!selectedAnswer}
                ><strong>B.</strong> Stack</button>
                <button 
                  className={getQuizClass('C')} 
                  onClick={() => handleQuizClick('C')}
                  disabled={!!selectedAnswer}
                ><strong>C.</strong> Tree</button>
                <button 
                  className={getQuizClass('D')} 
                  onClick={() => handleQuizClick('D')}
                  disabled={!!selectedAnswer}
                ><strong>D.</strong> Heap</button>
              </div>
            </div>

            <div className="whatsapp-card glass-panel">
              <div className="whatsapp-icon">
                <MessageCircle size={24} />
              </div>
              <div className="whatsapp-content">
                <h4>Join WhatsApp Channel</h4>
                <p>Daily tips & placement news</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Feed;
