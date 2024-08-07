import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { lightTheme, darkTheme } from './theme';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Community from './components/Community';
import MyDreams from './components/MyDreams';
import Profile from './components/Profile';
import './App.css';

initializeIcons();

const App: React.FC = () => {
  const { theme } = useTheme();
  loadTheme(theme === 'light' ? lightTheme : darkTheme);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-content">
          <Sidebar />
          <main className="App-main">
            <Routes>
              <Route path="/community" element={<Community />} />
              <Route path="/my-dreams" element={<MyDreams />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Community />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
