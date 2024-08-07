import React from 'react';
import { Stack, SearchBox, List, Text } from '@fluentui/react';

const Community: React.FC = () => {
  const items = [
    { key: '1', name: 'Dream 1', description: 'A detailed dream analysis...' },
    { key: '2', name: 'Dream 2', description: 'Another detailed dream analysis...' },
    // Add more items
  ];

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <SearchBox placeholder="Search dreams..." />
      <Text variant="large">Newest Shared Dreams</Text>
      <List
        items={items}
        onRenderCell={(item, index) => {
          if (!item) return null; // Check if item is undefined
          return (
            <Stack key={item.key} tokens={{ childrenGap: 5 }}>
              <Text variant="mediumPlus">{item.name}</Text>
              <Text>{item.description}</Text>
            </Stack>
          );
        }}
      />
      {/* Add sections for suggested and popular dreams */}
    </Stack>
  );
};

export default Community;
