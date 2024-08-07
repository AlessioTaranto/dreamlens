import React from 'react';
import { Stack, Text, Persona, PersonaSize, DefaultButton } from '@fluentui/react';

const Header: React.FC = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center" styles={{ root: { padding: '10px 20px', borderBottom: '1px solid #ddd' } }}>
      <Text variant="xLarge">DreamLens</Text>
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 10 }}>
        <Persona
          size={PersonaSize.size40}
          text="User Name"
          secondaryText="user@example.com"
          imageUrl="https://via.placeholder.com/40"
        />
        <DefaultButton text="Sign Out" onClick={() => console.log('Sign Out')} />
      </Stack>
    </Stack>
  );
};

export default Header;
