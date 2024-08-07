import React, { useState } from 'react';
import { Stack, TextField, PrimaryButton, MessageBar, MessageBarType, Text } from '@fluentui/react';
import AudioRecorder from './AudioRecorder';

const DreamLens: React.FC = () => {
  const [dreamText, setDreamText] = useState<string>('');
  const [dreamAudio, setDreamAudio] = useState<Blob | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleTextChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setDreamText(newValue || '');
  };

  const handleAudioRecorded = (audioBlob: Blob) => {
    setDreamAudio(audioBlob);
    setMessage('Audio recorded successfully.');
  };

  const handleAnalyzeDream = () => {
    // Logic to analyze the dream
    setMessage('Dream analysis is in progress...');
  };

  return (
    <Stack tokens={{ childrenGap: 15 }} styles={{ root: { width: 300, margin: '0 auto', paddingTop: 50 } }}>
      <Text variant="xxLarge">DreamLens</Text>
      <TextField
        label="Describe your dream"
        multiline
        rows={4}
        value={dreamText}
        onChange={handleTextChange}
      />
      <AudioRecorder onAudioRecorded={handleAudioRecorded} />
      <PrimaryButton text="Analyze Dream" onClick={handleAnalyzeDream} />
      {message && (
        <MessageBar messageBarType={MessageBarType.info}>
          {message}
        </MessageBar>
      )}
    </Stack>
  );
};

export default DreamLens;

