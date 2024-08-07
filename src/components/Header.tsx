import React from 'react';
import { Stack, Text, Persona, DefaultButton, IconButton } from '@fluentui/react';
import './Header.css';

interface HeaderProps {
  isMobile: boolean;
  toggleCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, toggleCollapse }) => {
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center" className="header">
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 10 }}>
        {isMobile && (
          <IconButton
            iconProps={{ iconName: 'GlobalNavButton' }}
            className="collapse-button"
            onClick={toggleCollapse}
          />
        )}
        <Text variant="xLarge">DreamLens</Text>
      </Stack>
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 10 }}>
        <Persona
          text="User Name"
          secondaryText="user@example.com"
          imageUrl="https://via.placeholder.com/40"
        />
        <DefaultButton text="Profile" href="#/profile" />
        <DefaultButton text="Sign Out" onClick={() => console.log('Sign Out')} />
      </Stack>
    </Stack>
  );
};

export default Header;
