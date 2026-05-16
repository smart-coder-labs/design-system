import type { Meta, StoryObj } from '@storybook/react';
import { OTPInput } from './OTPInput';

const meta = {
    title: 'Forms/OTPInput',
    component: OTPInput,
    tags: ['autodocs'],
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        length: 6,
    },
};

export const FourDigits: Story = {
    args: {
        length: 4,
    },
};

export const WithValue: Story = {
    args: {
        length: 6,
        value: '123456',
    },
};

export const WithGroupSeparator: Story = {
    args: {
        length: 8,
        groupSize: 4,
    },
};

export const WithError: Story = {
    args: {
        length: 6,
        error: true,
        value: '12',
    },
};

export const Disabled: Story = {
    args: {
        length: 6,
        disabled: true,
        value: '123456',
    },
};

export const AutoFocus: Story = {
    args: {
        length: 6,
        autoFocus: true,
    },
};

export const WithOnComplete: Story = {
    args: {
        length: 6,
        onComplete: (value) => console.log('OTP Complete:', value),
    },
};
