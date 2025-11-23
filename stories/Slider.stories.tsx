import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/Slider';

const meta: Meta<typeof Slider> = {
    title: 'Forms/Slider',
    component: Slider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    render: () => (
        <div className="w-[60%]">
            <Slider defaultValue={[50]} max={100} step={1} />
        </div>
    ),
};


