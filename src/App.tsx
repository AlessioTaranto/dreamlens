import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { lightTheme } from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Community from './components/Community';
import MyDreams from './components/MyDreams';
import './App.css';

initializeIcons();
loadTheme(lightTheme);

const App: React.FC = () => {
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
              <Route path="/" element={<Community />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
