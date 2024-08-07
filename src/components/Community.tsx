import React from 'react';
import { Stack, SearchBox, Text, Pivot, PivotItem, List } from '@fluentui/react';

const Community: React.FC = () => {
  const dreams = [
    { key: '1', title: 'Dream 1', dream: 'Dream content...', analysis: 'Analysis of the dream...' },
    { key: '2', title: 'Dream 2', dream: 'Dream content...', analysis: 'Analysis of the dream...' },
    // Add more dreams
  ];

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <SearchBox placeholder="Search dreams..." />
      <Pivot>
        <PivotItem headerText="Newest">
          <List
            items={dreams}
            onRenderCell={(dream) => {
              if (!dream) return null;
              return (
                <Stack key={dream.key} tokens={{ childrenGap: 5 }}>
                  <Text variant="mediumPlus">{dream.title}</Text>
                  <Text>{dream.dream}</Text>
                  <Text>{dream.analysis}</Text>
                </Stack>
              );
            }}
          />
        </PivotItem>
        <PivotItem headerText="Popular">
          <List
            items={dreams}
            onRenderCell={(dream) => {
              if (!dream) return null;
              return (
                <Stack key={dream.key} tokens={{ childrenGap: 5 }}>
                  <Text variant="mediumPlus">{dream.title}</Text>
                  <Text>{dream.dream}</Text>
                  <Text>{dream.analysis}</Text>
                </Stack>
              );
            }}
          />
        </PivotItem>
        <PivotItem headerText="Suggested">
          <List
            items={dreams}
            onRenderCell={(dream) => {
              if (!dream) return null;
              return (
                <Stack key={dream.key} tokens={{ childrenGap: 5 }}>
                  <Text variant="mediumPlus">{dream.title}</Text>
                  <Text>{dream.dream}</Text>
                  <Text>{dream.analysis}</Text>
                </Stack>
              );
            }}
          />
        </PivotItem>
      </Pivot>
    </Stack>
  );
};

export default Community;
