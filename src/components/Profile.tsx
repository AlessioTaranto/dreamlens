import React from 'react';
import { Stack, Text, TextField, PrimaryButton, DefaultButton } from '@fluentui/react';

const Profile: React.FC = () => {
  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <Text variant="large">My Profile</Text>
      <TextField label="Name" value="User Name" readOnly />
      <TextField label="Email" value="user@example.com" readOnly />
      <PrimaryButton text="Edit Profile" onClick={() => console.log('Edit Profile')} />
      <DefaultButton text="Sign Out" onClick={() => console.log('Sign Out')} />
    </Stack>
  );
};

export default Profile;
