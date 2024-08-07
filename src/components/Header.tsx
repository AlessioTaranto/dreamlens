import React from 'react';
import { Stack, PrimaryButton, Text } from '@fluentui/react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="space-between" styles={{ root: { padding: 10, borderBottom: '1px solid #ddd' } }}>
      <Text variant="xLarge">DreamLens</Text>
      <PrimaryButton onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </PrimaryButton>
    </Stack>
  );
};

export default Header;
