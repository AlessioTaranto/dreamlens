import React from 'react';
import { Stack, Text, FontIcon, Image } from '@fluentui/react';
import './DreamCard.css';

interface DreamCardProps {
  dream: {
    key: string;
    title: string;
    dream: string;
    imageUrl: string;
    upvotes: number;
  };
}

const DreamCard: React.FC<DreamCardProps> = ({ dream }) => {
  return (
    <Stack className="dream-card">
      <Image src={dream.imageUrl} alt={dream.title} className="dream-image" />
      <Stack tokens={{ childrenGap: 10 }} padding="10px" className="dream-content">
        <Text variant="xLarge">{dream.title}</Text>
        <Text>{`${dream.dream.substring(0, 100)}...`}</Text>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 5 }}>
          <FontIcon iconName="Like" />
          <Text>{dream.upvotes}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DreamCard;
