import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { lightTheme } from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AnimatedSwitch from './components/AnimatedSwitch';
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
            <AnimatedSwitch />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
