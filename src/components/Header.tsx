import React from 'react';
import { Stack, Text, Persona, DefaultButton } from '@fluentui/react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center" className="header">
      <Text variant="xLarge">DreamLens</Text>
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
