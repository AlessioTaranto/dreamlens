import React from 'react';
import { Stack, SearchBox } from '@fluentui/react';
import DreamCarousel from './DreamCarousel';
import './Community.css';

const Community: React.FC = () => {
  const dreams = [
    { key: '1', title: 'Dream 1', dream: 'Dream content...', analysis: 'Analysis of the dream...' },
    { key: '2', title: 'Dream 2', dream: 'Dream content...', analysis: 'Analysis of the dream...' },
    // Add more dreams
  ];

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <SearchBox placeholder="Search dreams..." />
      <DreamCarousel title="Newest Dreams" dreams={dreams} />
      <DreamCarousel title="Popular Dreams" dreams={dreams} />
      <DreamCarousel title="Suggested Dreams" dreams={dreams} />
    </Stack>
  );
};

export default Community;
