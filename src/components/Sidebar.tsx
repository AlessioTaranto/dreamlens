import React from 'react';
import { Nav } from '@fluentui/react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Nav
        groups={[
          {
            links: [
              { name: 'Community', url: '#/community', key: 'community', icon: 'News' },
              { name: 'My Dreams', url: '#/my-dreams', key: 'my-dreams', icon: 'Dictionary' },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
