import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../components/ui/Progress';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Progress> = {
    title: 'Feedback/Progress',
    component: Progress,
    tags: [],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: {
        value: 60,
    },
};

export const Animated: Story = {
    render: () => {
        const [progress, setProgress] = useState(13);

        useEffect(() => {
            const timer = setTimeout(() => setProgress(66), 500);
            return () => clearTimeout(timer);
        }, []);

        return <Progress value={progress} className="w-[60%]" />;
    },
};
