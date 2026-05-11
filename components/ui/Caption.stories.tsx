import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from './Caption';

const meta = {
    title: 'Components/Caption',
    component: Caption,
    tags: ['autodocs'],
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'This is a caption text used for supplementary information.',
    },
};

export const ShortCaption: Story = {
    args: {
        children: 'Last updated 2 min ago',
    },
};

export const FinancialCaption: Story = {
    args: {
        children: 'All transactions are subject to a 1.5% processing fee.',
    },
};

export const LegalCaption: Story = {
    args: {
        children: 'Terms and conditions apply. Subject to approval. Rates may vary based on creditworthiness.',
    },
};
