import type { Meta, StoryObj } from '@storybook/react';
import { PromptSuggestionChips } from './PromptSuggestionChips';
import { Sparkles, Lightbulb, Code, Image, FileText, Calculator } from 'lucide-react';

const meta = {
    title: 'Components/PromptSuggestionChips',
    component: PromptSuggestionChips,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PromptSuggestionChips>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSuggestions = [
    {
        id: '1',
        text: 'Explain quantum computing',
        icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
        id: '2',
        text: 'Write a Python function',
        icon: <Code className="w-3.5 h-3.5" />,
    },
    {
        id: '3',
        text: 'Generate an image',
        icon: <Image className="w-3.5 h-3.5" />,
    },
    {
        id: '4',
        text: 'Summarize this document',
        icon: <FileText className="w-3.5 h-3.5" />,
    },
];

export const Default: Story = {
    args: {
        suggestions: defaultSuggestions,
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const Compact: Story = {
    args: {
        suggestions: defaultSuggestions,
        variant: 'compact',
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const WithCustomIcons: Story = {
    args: {
        suggestions: [
            {
                id: '1',
                text: 'Get creative ideas',
                icon: <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />,
            },
            {
                id: '2',
                text: 'Write code',
                icon: <Code className="w-3.5 h-3.5 text-green-500" />,
            },
            {
                id: '3',
                text: 'Create image',
                icon: <Image className="w-3.5 h-3.5 text-purple-500" />,
            },
            {
                id: '4',
                text: 'Calculate',
                icon: <Calculator className="w-3.5 h-3.5 text-blue-500" />,
            },
        ],
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const LimitedVisible: Story = {
    args: {
        suggestions: [
            ...defaultSuggestions,
            {
                id: '5',
                text: 'Translate text',
            },
            {
                id: '6',
                text: 'Analyze data',
            },
        ],
        maxVisible: 3,
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const ManySuggestions: Story = {
    args: {
        suggestions: [
            { id: '1', text: 'Explain quantum computing' },
            { id: '2', text: 'Write a Python function' },
            { id: '3', text: 'Generate an image' },
            { id: '4', text: 'Summarize this document' },
            { id: '5', text: 'Translate to Spanish' },
            { id: '6', text: 'Analyze this data' },
            { id: '7', text: 'Create a presentation' },
            { id: '8', text: 'Debug my code' },
        ],
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const ShortSuggestions: Story = {
    args: {
        suggestions: [
            { id: '1', text: 'Help' },
            { id: '2', text: 'Code' },
            { id: '3', text: 'Write' },
            { id: '4', text: 'Analyze' },
        ],
        variant: 'compact',
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const LongSuggestions: Story = {
    args: {
        suggestions: [
            {
                id: '1',
                text: 'Help me understand the fundamental principles of machine learning',
            },
            {
                id: '2',
                text: 'Write a comprehensive guide to React hooks and their use cases',
            },
            {
                id: '3',
                text: 'Generate a detailed business plan for a tech startup',
            },
        ],
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};

export const Empty: Story = {
    args: {
        suggestions: [],
        onSuggestionClick: (suggestion) => console.log('Clicked:', suggestion),
    },
};
