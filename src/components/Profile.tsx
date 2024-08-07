import React from 'react';
import { Stack, Text, TextField } from '@fluentui/react';

const Profile: React.FC = () => {
  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <Text variant="large">My Profile</Text>
      <TextField label="Name" />
      <TextField label="Email" />
      {/* Add more profile fields as needed */}
    </Stack>
  );
};

export default Profile;
