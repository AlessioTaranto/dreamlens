import React, { useState } from 'react';
import { Stack, Text, DefaultButton, Image, FontIcon } from '@fluentui/react';
import './DreamCard.css';

interface DreamCardProps {
  dream: {
    key: string;
    title: string;
    dream: string;
    analysis: string;
    imageUrl: string;
    comments: string[];
    upvotes: number;
  };
}

const DreamCard: React.FC<DreamCardProps> = ({ dream }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack className="dream-card" tokens={{ childrenGap: 10 }} onClick={handleExpand}>
      <Image src={dream.imageUrl} alt={dream.title} className="dream-image" />
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
        <Text variant="xLarge">{dream.title}</Text>
        <Stack horizontal verticalAlign="center">
          <FontIcon iconName="Like" />
          <Text>{dream.upvotes}</Text>
        </Stack>
      </Stack>
      <Text>{expanded ? dream.dream : `${dream.dream.substring(0, 100)}...`}</Text>
      {expanded && (
        <>
          <Text>{dream.analysis}</Text>
          {dream.comments.length > 0 && (
            <Stack tokens={{ childrenGap: 5 }}>
              <Text variant="large">Comments:</Text>
              {dream.comments.map((comment, index) => (
                <Text key={index} className="comment">
                  {comment}
                </Text>
              ))}
            </Stack>
          )}
        </>
      )}
      <DefaultButton text={expanded ? "Show Less" : "Read More"} onClick={handleExpand} />
    </Stack>
  );
};

export default DreamCard;
