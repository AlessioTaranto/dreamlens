import React from 'react';
import { Stack, SearchBox } from '@fluentui/react';
import DreamCarousel from './DreamCarousel';
import './Community.css';

const Community: React.FC = () => {
  const dreams = [
    { key: '1', title: 'Dream 1', dream: 'Dream content...', imageUrl: 'https://via.placeholder.com/150', upvotes: 10 },
    { key: '2', title: 'Dream 2', dream: 'Dream content...', imageUrl: 'https://via.placeholder.com/150', upvotes: 5 },
    // Add more dreams
  ];

  return (
    <Stack tokens={{ childrenGap: 15 }} className="community-container">
      <SearchBox placeholder="Search dreams..." />
      <DreamCarousel title="Newest Dreams" dreams={dreams} />
      <DreamCarousel title="Popular Dreams" dreams={dreams} />
      <DreamCarousel title="Suggested Dreams" dreams={dreams} />
    </Stack>
  );
};

export default Community;
