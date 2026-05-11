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

export const EmptyCaption: Story = {
    args: {
        children: '',
    },
};

export const VeryLongCaption: Story = {
    args: {
        children: 'This is an exceptionally long caption that tests how the component handles text overflow and wrapping behavior when the content is much longer than the typical expected usage. It should wrap gracefully without breaking the layout or causing horizontal scrolling issues in the component container.',
    },
};

export const TransactionCaption: Story = {
    args: {
        children: 'Transferencia de $12,500.00 MXN a la cuenta de ahorros • Comisión: $25.00 MXN • Saldo restante: $45,230.00 MXN',
    },
};

export const ErrorCaption: Story = {
    args: {
        children: 'No se pudo completar la transacción. Fondos insuficientes. Código: ERR-452',
    },
};

export const DarkMode: Story = {
    args: {
        children: 'Last updated 5 minutes ago',
    },
    decorators: [
        (Story) => (
            <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>
        ),
    ],
};
