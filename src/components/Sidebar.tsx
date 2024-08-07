import React from 'react';
import { Nav } from '@fluentui/react';

const Sidebar: React.FC = () => {
  return (
    <Nav
      groups={[
        {
          links: [
            { name: 'Community', url: '#/community', key: 'community', icon: 'News' },
            { name: 'My Dreams', url: '#/my-dreams', key: 'my-dreams', icon: 'Dictionary' },
          ],
        },
      ]}
      styles={{ root: { width: 200, height: '100vh', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', paddingTop: 20 } }}
    />
  );
};

export default Sidebar;
