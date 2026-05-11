import type { Meta, StoryObj } from '@storybook/react';
import { SecurityOTPInput } from './SecurityOTPInput';

const meta = {
  title: 'Components/SecurityOTPInput',
  component: SecurityOTPInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityOTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 6,
    onChange: (val: string) => console.log('OTP:', val),
  },
};

export const FourDigits: Story = {
  args: {
    length: 4,
    onChange: (val: string) => console.log('OTP:', val),
  },
};

export const WithLabel: Story = {
  args: {
    length: 6,
    label: 'Authentication Code',
    onChange: (val: string) => console.log('OTP:', val),
  },
};

export const WithError: Story = {
  args: {
    length: 6,
    label: '2FA Code',
    error: 'Invalid code. Please try again.',
    onChange: (val: string) => console.log('OTP:', val),
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
    onChange: (val: string) => console.log('OTP:', val),
  },
};

export const WithTimer: Story = {
  args: {
    length: 6,
    label: 'Verification Code',
    timer: 30,
    onResend: () => console.log('Resend code'),
    onChange: (val: string) => console.log('OTP:', val),
  },
};
