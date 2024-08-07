import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { lightTheme } from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Community from './components/Community';
import MyDreams from './components/MyDreams';
import Profile from './components/Profile'; 
import Footer from './components/Footer'; // Import Footer component
import './App.css';

initializeIcons();
loadTheme(lightTheme);

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isMobile={isMobile} toggleCollapse={toggleCollapse} />
        <div className="App-content">
          {!isMobile && <Sidebar />}
          {isMobile && !collapsed && <Sidebar />}
          <main className="App-main">
            <Routes>
              <Route path="/community" element={<Community />} />
              <Route path="/my-dreams" element={<MyDreams />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Community />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
