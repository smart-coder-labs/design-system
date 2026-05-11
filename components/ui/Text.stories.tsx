import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
    args: {
        variant: 'body',
        children: 'This is body text used for standard paragraphs and content areas.',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="space-y-4">
            <Text variant="lead">Lead variant — used for introductory paragraphs.</Text>
            <Text variant="body">Body variant — the standard text for most content.</Text>
            <Text variant="small">Small variant — used for secondary information and captions.</Text>
            <Text variant="tiny">Tiny variant — for fine print, disclaimers, and metadata.</Text>
        </div>
    ),
};

export const Weights: Story = {
    render: () => (
        <div className="space-y-3">
            <Text weight="normal">Normal weight — standard text weight.</Text>
            <Text weight="medium">Medium weight — slightly bolder emphasis.</Text>
            <Text weight="semibold">Semibold weight — stronger emphasis.</Text>
            <Text weight="bold">Bold weight — maximum emphasis.</Text>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="space-y-3">
            <Text color="primary">Primary color — default text color.</Text>
            <Text color="secondary">Secondary color — muted text.</Text>
            <Text color="success">Success color — positive indicators.</Text>
            <Text color="warning">Warning color — cautionary messages.</Text>
            <Text color="error">Error color — error messages.</Text>
            <Text color="accent">Accent color — highlighted information.</Text>
        </div>
    ),
};

export const Truncate: Story = {
    args: {
        truncate: true,
        children: 'This is a very long text that should be truncated when it exceeds the available width of its container to avoid breaking the layout.',
        style: { maxWidth: 250 },
    },
};
