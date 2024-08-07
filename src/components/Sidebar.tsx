import React, { useState } from 'react';
import { Nav, IconButton } from '@fluentui/react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <IconButton
        iconProps={{ iconName: collapsed ? 'GlobalNavButton' : 'Cancel' }}
        className="collapse-button"
        onClick={toggleCollapse}
      />
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
