import React from 'react';
import { Stack, PrimaryButton, Text, List } from '@fluentui/react';
import AudioRecorder from './AudioRecorder';

const MyDreams: React.FC = () => {
  const dreams = [
    { key: '1', name: 'Dream 1', description: 'A detailed dream analysis...' },
    { key: '2', name: 'Dream 2', description: 'Another detailed dream analysis...' },
    // Add more dreams
  ];

  const handleAddDream = () => {
    // Logic to add a new dream
  };

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <Text variant="large">My Dreams</Text>
      <List
        items={dreams}
        onRenderCell={(dream, index) => {
          if (!dream) return null; // Check if dream is undefined
          return (
            <Stack key={dream.key} tokens={{ childrenGap: 5 }}>
              <Text variant="mediumPlus">{dream.name}</Text>
              <Text>{dream.description}</Text>
            </Stack>
          );
        }}
      />
      <PrimaryButton onClick={handleAddDream}>Add New Dream</PrimaryButton>
      <AudioRecorder onAudioRecorded={(audioBlob: Blob) => console.log(audioBlob)} />
    </Stack>
  );
};

export default MyDreams;
