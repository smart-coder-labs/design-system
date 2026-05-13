import type { Meta, StoryObj } from '@storybook/react';
import { VoiceCommandOverlay } from './VoiceCommandOverlay';
import { useState } from 'react';

const meta = {
    title: 'Components/VoiceCommandOverlay',
    component: VoiceCommandOverlay,
    tags: ['autodocs'],
} satisfies Meta<typeof VoiceCommandOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isListening: false,
        onResult: (text) => console.log('Voice result:', text),
        onClose: () => console.log('Closed'),
    },
};

export const Listening: Story = {
    args: {
        isListening: true,
        onResult: (text) => console.log('Voice result:', text),
        onClose: () => console.log('Closed'),
    },
};

export const WithTranscript: Story = {
    args: {
        isListening: true,
        transcript: 'Send $500 to Alice...',
        onResult: (text) => console.log('Voice result:', text),
        onClose: () => console.log('Closed'),
    },
};

export const CommandComplete: Story = {
    args: {
        isListening: false,
        transcript: 'Transfer $500 to savings account',
        command: 'Transfer',
        confidence: 0.95,
        onResult: (text) => console.log('Voice result:', text),
        onClose: () => console.log('Closed'),
    },
};

export const LowConfidence: Story = {
    args: {
        isListening: false,
        transcript: 'Pay bills...?',
        confidence: 0.45,
        onResult: (text) => console.log('Voice result:', text),
        onClose: () => console.log('Closed'),
    },
};

export const InteractiveVoiceDemo: Story = {
    render: () => {
        const [transcript, setTranscript] = useState('');
        const [isListening, setIsListening] = useState(false);
        const [history, setHistory] = useState<string[]>([]);
        const simulatedCommands = [
            'Show my balance',
            'Transfer $200 to savings',
            'Buy $500 of Apple stock',
            'What are my recent transactions?',
            'Pay my credit card bill',
        ];
        const handleResult = (text: string) => {
            setHistory(prev => [text, ...prev]);
            setIsListening(false);
            setTranscript('');
        };
        return (
            <div className="space-y-4 max-w-lg">
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => setIsListening(!isListening)}
                        className={`px-4 py-2 text-sm rounded-lg ${isListening ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}
                    >
                        {isListening ? 'Stop Listening' : 'Start Voice Command'}
                    </button>
                </div>
                {isListening && (
                    <div className="flex gap-2 flex-wrap">
                        {simulatedCommands.map((cmd, i) => (
                            <button
                                key={i}
                                onClick={() => setTranscript(cmd)}
                                className={`px-2 py-1 text-xs rounded-lg ${transcript === cmd ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-300' : 'bg-surface-secondary hover:bg-surface-tertiary'}`}
                            >
                                {cmd}
                            </button>
                        ))}
                    </div>
                )}
                <VoiceCommandOverlay
                    isListening={isListening}
                    transcript={transcript}
                    onResult={handleResult}
                    onClose={() => setIsListening(false)}
                />
                {history.length > 0 && (
                    <div className="p-3 bg-surface-secondary rounded-lg">
                        <h4 className="text-xs font-semibold text-text-secondary mb-1">Command History</h4>
                        <div className="space-y-1">
                            {history.map((h, i) => (
                                <p key={i} className="text-xs text-text-secondary">{i + 1}. "{h}"</p>
                            ))}
                        </div>
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
        isListening: true,
        transcript: 'Show my portfolio...',
        onResult: (text) => console.log('Voice result:', text),
        onClose: () => console.log('Closed'),
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
