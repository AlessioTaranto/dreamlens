import React from 'react';
import { Stack, Text, Persona, DefaultButton } from '@fluentui/react';

const Profile: React.FC = () => {
  return (
    <Stack tokens={{ childrenGap: 15 }} padding={20}>
      <Text variant="xxLarge">Profile</Text>
      <Persona
        text="User Name"
        secondaryText="user@example.com"
        imageUrl="https://via.placeholder.com/100"
      />
      <DefaultButton text="Sign Out" onClick={() => console.log('Sign Out')} />
    </Stack>
  );
};

export default Profile;
