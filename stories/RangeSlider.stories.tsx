import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from '../components/RangeSlider';

const meta: Meta<typeof RangeSlider> = {
    title: 'Forms/RangeSlider',
    component: RangeSlider,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
    render: () => (
        <div className="w-[60%]">
            <RangeSlider defaultValue={[25, 75]} max={100} step={1} />
        </div>
    ),
};
