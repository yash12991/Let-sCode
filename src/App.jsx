import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contests from './components/Contests';
import Challenge100 from './components/Challenge100';
import Feed from './components/Feed';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="mouse-glow" />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contests" element={
            <div style={{ paddingTop: '80px' }}>
              <ScrollReveal delay={0}>
                <Contests />
              </ScrollReveal>
            </div>
          } />
          <Route path="/feed" element={
            <div style={{ paddingTop: '80px' }}>
              <ScrollReveal delay={0}>
                <Feed />
              </ScrollReveal>
            </div>
          } />
          <Route path="/100-dsa-challenge" element={
            <ScrollReveal delay={0}>
              <Challenge100 />
            </ScrollReveal>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
