import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contests from './components/Contests';
import Challenge100 from './components/Challenge100';
import Feed from './components/Feed';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <Router>
      <div className="app-container">
        
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
