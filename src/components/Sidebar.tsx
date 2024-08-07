import React from 'react';
import { Nav } from '@fluentui/react';

const Sidebar: React.FC = () => {
  return (
    <Nav
      groups={[
        {
          links: [
            { name: 'Community', url: '#/community', key: 'community' },
            { name: 'My Dreams', url: '#/my-dreams', key: 'my-dreams' },
            { name: 'My Profile', url: '#/profile', key: 'profile' },
          ],
        },
      ]}
    />
  );
};

export default Sidebar;
