import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AIThinkingIndicator } from '../components/ui/AIThinkingIndicator';
import { ChatBubble } from '../components/ui/ChatBubble';

const meta = {
    title: 'Feedback/AIThinkingIndicator',
    component: AIThinkingIndicator,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Indicador de "pensando" para IA. Muestra diferentes animaciones para indicar que la IA está procesando una respuesta.',
            },
        },
    },
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['dots', 'pulse', 'wave'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof AIThinkingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {
    args: {
        variant: 'dots',
        message: 'Thinking...',
    },
};

export const Pulse: Story = {
    args: {
        variant: 'pulse',
        message: 'Processing...',
    },
};

export const Wave: Story = {
    args: {
        variant: 'wave',
        message: 'Analyzing...',
    },
};

export const WithoutMessage: Story = {
    name: 'Sin Mensaje',
    args: {
        variant: 'dots',
    },
};

export const DifferentSizes: Story = {
    name: 'Diferentes Tamaños',
    render: () => (
        <div className="space-y-6">
            <div>
                <p className="text-sm text-text-secondary mb-2">Small</p>
                <AIThinkingIndicator variant="dots" size="sm" message="Thinking..." />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Medium</p>
                <AIThinkingIndicator variant="dots" size="md" message="Thinking..." />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Large</p>
                <AIThinkingIndicator variant="dots" size="lg" message="Thinking..." />
            </div>
        </div>
    ),
};

export const InChatBubble: Story = {
    name: 'En Chat Bubble',
    render: () => (
        <div className="max-w-md mx-auto space-y-4">
            <ChatBubble
                message="What is the capital of France?"
                isOwn={true}
                timestamp="10:30 AM"
            />
            <ChatBubble
                message=""
                sender="AI Assistant"
                isOwn={false}
                variant="system"
            >
                <div className="p-4">
                    <AIThinkingIndicator variant="dots" message="Thinking..." />
                </div>
            </ChatBubble>
        </div>
    ),
};

export const CustomColor: Story = {
    name: 'Color Personalizado',
    args: {
        variant: 'dots',
        color: 'rgb(52, 199, 89)',
        message: 'Processing...',
    },
};

