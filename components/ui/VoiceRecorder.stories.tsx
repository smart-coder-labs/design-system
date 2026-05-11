import type { Meta, StoryObj } from '@storybook/react';
import { VoiceRecorder } from './VoiceRecorder';
import { useState } from 'react';

const meta = {
    title: 'Components/VoiceRecorder',
    component: VoiceRecorder,
    tags: ['autodocs'],
} satisfies Meta<typeof VoiceRecorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onRecordingComplete: (blob) => console.log('Recording complete:', blob),
    },
};

export const InteractiveRecorder: Story = {
    render: () => {
        const [recordings, setRecordings] = useState<string[]>([]);
        const [isRecording, setIsRecording] = useState(false);
        const handleRecordingComplete = (blob: Blob) => {
            const url = URL.createObjectURL(blob);
            setRecordings(prev => [...prev, url]);
            setIsRecording(false);
        };
        return (
            <div className="space-y-4 max-w-sm">
                <VoiceRecorder
                    onRecordingComplete={handleRecordingComplete}
                    onRecordingStateChange={setIsRecording}
                />
                {recordings.length > 0 && (
                    <div className="p-3 bg-surface-secondary rounded-lg space-y-3">
                        <h4 className="text-xs font-semibold text-text-secondary">
                            Recordings ({recordings.length})
                        </h4>
                        {recordings.map((url, i) => (
                            <div key={i} className="space-y-1">
                                <p className="text-xs text-text-secondary">Recording #{i + 1}</p>
                                <audio src={url} controls className="w-full h-8" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        onRecordingComplete: (blob) => console.log('Recording complete:', blob),
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: '$f in a loading state, showing placeholder UI while data is being fetched.',
      },
    },
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.',
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
};

export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder used in a fintech context for voice memo transactions or support recording.',
      },
    },
  },
};
