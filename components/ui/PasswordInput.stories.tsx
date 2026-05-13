import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta = {
  title: 'Forms/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    value: 'short',
    error: 'Password must be at least 8 characters',
    placeholder: 'Enter your password',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Use 8+ characters with a mix of letters, numbers & symbols',
    placeholder: 'Enter your password',
  },
};

export const WithStrengthMeter: Story = {
  args: {
    label: 'New Password',
    showStrength: true,
    placeholder: 'Create a strong password',
  },
};

export const StrongPassword: Story = {
  args: {
    label: 'Password',
    value: 'P@ssw0rd!Secure123',
    showStrength: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    value: 'hiddenpassword',
    disabled: true,
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
