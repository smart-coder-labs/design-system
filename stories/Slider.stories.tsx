import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/Slider';

const meta: Meta<typeof Slider> = {
    title: 'Inputs/Slider',
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

export const Range: Story = {
    render: () => (
        <div className="w-[60%]">
            <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
    ),
};
