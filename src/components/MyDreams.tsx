import React from 'react';
import { Stack, PrimaryButton, Text, TextField, List } from '@fluentui/react';
import AudioRecorder from './AudioRecorder';

const MyDreams: React.FC = () => {
  const [dreams, setDreams] = React.useState([
    { key: '1', title: 'Dream 1', dream: 'Dream content...', analysis: 'Analysis of the dream...' },
    { key: '2', title: 'Dream 2', dream: 'Dream content...', analysis: 'Analysis of the dream...' },
  ]);

  const [newDream, setNewDream] = React.useState('');
  const [message, setMessage] = React.useState<string>('');

  const handleAddDream = () => {
    if (newDream.trim() !== '') {
      setDreams([...dreams, { key: (dreams.length + 1).toString(), title: `Dream ${dreams.length + 1}`, dream: newDream, analysis: 'Analysis...' }]);
      setNewDream('');
      setMessage('Dream added successfully.');
    } else {
      setMessage('Please enter a dream description.');
    }
  };

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <Text variant="large">My Dreams</Text>
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
      <TextField
        label="Describe your dream"
        multiline
        rows={4}
        value={newDream}
        onChange={(e, newValue) => setNewDream(newValue || '')}
      />
      <PrimaryButton text="Add New Dream" onClick={handleAddDream} />
      <AudioRecorder onAudioRecorded={(audioBlob: Blob) => console.log(audioBlob)} />
      {message && (
        <Text>{message}</Text>
      )}
    </Stack>
  );
};

export default MyDreams;
