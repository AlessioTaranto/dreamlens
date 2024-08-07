import React, { useRef, useState } from 'react';
import { PrimaryButton, DefaultButton, Stack } from '@fluentui/react';

interface AudioRecorderProps {
  onAudioRecorded: (audioBlob: Blob) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onAudioRecorded }) => {
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    recorder.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
      onAudioRecorded(audioBlob);
      audioChunks.current = [];
    };
    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 10 }}>
      {recording ? (
        <DefaultButton text="Stop Recording" onClick={stopRecording} />
      ) : (
        <PrimaryButton text="Start Recording" onClick={startRecording} />
      )}
    </Stack>
  );
};

export default AudioRecorder;
