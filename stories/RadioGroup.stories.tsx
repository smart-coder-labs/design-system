import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '../components/RadioGroup';
import { Label } from '../components/Label';

const meta: Meta<typeof RadioGroup> = {
    title: 'Forms/RadioGroup',
    component: RadioGroup,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center gap-3">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
            </div>
        </RadioGroup>
    ),
};
