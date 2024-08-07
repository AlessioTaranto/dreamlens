import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import Community from './Community';
import MyDreams from './MyDreams';
import Profile from './Profile';
import './AnimatedSwitch.css';

const AnimatedSwitch: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/community" element={<Community />} />
          <Route path="/my-dreams" element={<MyDreams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Community />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedSwitch;
