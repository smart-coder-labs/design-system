import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';
import { Label } from '../components/Label';

const meta: Meta<typeof Checkbox> = {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled option</Label>
        </div>
    ),
};

export const CheckedDisabled: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="checked-disabled" disabled checked />
            <Label htmlFor="checked-disabled">Checked & Disabled</Label>
        </div>
    ),
};
