import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LoginForm } from './LoginForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: action('login-submit'),
  },
};

export const WithError: Story = {
  args: {
    onSubmit: action('login-submit'),
    error: 'Invalid email or password. Please try again.',
  },
};

export const Loading: Story = {
  args: {
    onSubmit: action('login-submit'),
    loading: true,
  },
};

export const WithTwoFactor: Story = {
  args: {
    onSubmit: action('login-submit'),
    showTwoFactor: true,
  },
};

export const BankingLogin: Story = {
  args: {
    onSubmit: action('login-submit'),
    title: 'FinBank Online',
    subtitle: 'Secure access to your accounts',
    showTwoFactor: true,
  },
};

export const ForgotPasswordForm: Story = {
  args: {
    onSubmit: action('login-submit'),
    showForgotPassword: true,
  },
};

export const FullError: Story = {
  args: {
    onSubmit: action('login-submit'),
    error: 'Your account has been locked due to multiple failed attempts. Please contact support.',
    loading: false,
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
