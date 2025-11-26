import type { Meta, StoryObj } from '@storybook/react';
import { VoiceRecorder } from './VoiceRecorder';

const meta = {
    title: 'Components/VoiceRecorder',
    component: VoiceRecorder,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof VoiceRecorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onRecordingComplete: (audioBlob, duration) => {
            console.log('Recording complete:', { audioBlob, duration });
        },
    },
};

export const WithAutoSend: Story = {
    args: {
        autoSend: true,
        onSend: (audioBlob) => {
            console.log('Sending audio:', audioBlob);
            alert('Audio sent!');
        },
        onRecordingComplete: (audioBlob, duration) => {
            console.log('Recording complete:', { audioBlob, duration });
        },
    },
};

export const WithMaxDuration: Story = {
    args: {
        maxDuration: 30, // 30 seconds
        onRecordingComplete: (audioBlob, duration) => {
            console.log('Recording complete:', { audioBlob, duration });
            alert(`Recording stopped at ${duration} seconds`);
        },
    },
};

export const WithoutWaveform: Story = {
    args: {
        showWaveform: false,
        onRecordingComplete: (audioBlob, duration) => {
            console.log('Recording complete:', { audioBlob, duration });
        },
    },
};

export const Interactive: Story = {
    render: () => {
        const handleRecordingComplete = (audioBlob: Blob, duration: number) => {
            console.log('Recording completed:', {
                size: audioBlob.size,
                type: audioBlob.type,
                duration,
            });
            alert(`Recording completed! Duration: ${duration}s, Size: ${(audioBlob.size / 1024).toFixed(2)}KB`);
        };

        const handleSend = (audioBlob: Blob) => {
            console.log('Sending audio:', audioBlob);
            alert('Audio message sent successfully!');
        };

        return (
            <VoiceRecorder
                onRecordingComplete={handleRecordingComplete}
                onSend={handleSend}
                maxDuration={60}
                showWaveform={true}
            />
        );
    },
};

export const ShortRecording: Story = {
    args: {
        maxDuration: 10, // 10 seconds for quick messages
        autoSend: true,
        onSend: (audioBlob) => {
            console.log('Quick message sent:', audioBlob);
        },
        onRecordingComplete: (audioBlob, duration) => {
            console.log('Quick recording:', { audioBlob, duration });
        },
    },
};

export const LongRecording: Story = {
    args: {
        maxDuration: 300, // 5 minutes
        showWaveform: true,
        onRecordingComplete: (audioBlob, duration) => {
            console.log('Long recording complete:', { audioBlob, duration });
        },
    },
};

export const WithSendCallback: Story = {
    render: () => {
        const handleSend = (audioBlob: Blob) => {
            // Simulate upload
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');

            console.log('Uploading audio...', {
                size: audioBlob.size,
                type: audioBlob.type,
            });

            alert('Audio uploaded successfully!');
        };

        return (
            <VoiceRecorder
                onSend={handleSend}
                onRecordingComplete={(blob, duration) => {
                    console.log('Recording ready:', { duration });
                }}
            />
        );
    },
};
