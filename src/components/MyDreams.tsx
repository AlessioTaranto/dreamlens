import React from 'react';
import { Stack, PrimaryButton, Text, TextField } from '@fluentui/react';
import DreamCarousel from './DreamCarousel';
import AudioRecorder from './AudioRecorder';
import './MyDreams.css';

const MyDreams: React.FC = () => {
  const [dreams, setDreams] = React.useState([
    { key: '1', title: 'Dream 1', dream: 'Dream content...', analysis: 'Analysis of the dream...', imageUrl: 'https://via.placeholder.com/150', comments: [], upvotes: 10 },
    { key: '2', title: 'Dream 2', dream: 'Dream content...', analysis: 'Analysis of the dream...', imageUrl: 'https://via.placeholder.com/150', comments: [], upvotes: 5 },
  ]);

  const [newDream, setNewDream] = React.useState('');
  const [message, setMessage] = React.useState<string>('');

  const handleAddDream = () => {
    if (newDream.trim() !== '') {
      setDreams([...dreams, { key: (dreams.length + 1).toString(), title: `Dream ${dreams.length + 1}`, dream: newDream, analysis: 'Analysis...', imageUrl: 'https://via.placeholder.com/150', comments: [], upvotes: 0 }]);
      setNewDream('');
      setMessage('Dream added successfully.');
    } else {
      setMessage('Please enter a dream description.');
    }
  };

  return (
    <Stack tokens={{ childrenGap: 15 }} className="my-dreams-container">
      <DreamCarousel title="My Dreams" dreams={dreams} />
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
