import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MicroCommitmentStepper } from './MicroCommitmentStepper';

const meta: Meta<typeof MicroCommitmentStepper> = {
  title: 'Fintech/Engagement/MicroCommitmentStepper',
  component: MicroCommitmentStepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { id: '1', title: 'Save $5/day', description: 'Skip one coffee', completed: true },
      { id: '2', title: 'Save $10/day', description: 'Cook dinner at home', completed: false },
      { id: '3', title: 'Save $25/day', description: 'Cancel unused subscription', completed: false },
    ],
    onComplete: (stepId) => console.log('Completed:', stepId),
  },
};

export const FirstStep: Story = {
  args: {
    steps: [
      { id: '1', title: 'Save $5 this week', description: 'Skip 1 takeout coffee', completed: true },
    ],
    onComplete: (stepId) => console.log('Completed:', stepId),
  },
};

export const TwoCompleted: Story = {
  args: {
    steps: [
      { id: '1', title: 'Save $5/day', description: 'Skip 1 coffee per day', completed: true },
      { id: '2', title: 'Save $10/day', description: 'Cook 1 extra meal at home', completed: true },
      { id: '3', title: 'Save $25/day', description: 'Cancel 1 subscription', completed: false },
    ],
    onComplete: (stepId) => console.log('Completed:', stepId),
  },
};

export const FullChallenge: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h3 className="text-sm font-bold text-text-primary">52-Week Savings Challenge</h3>
        <p className="text-xs text-text-tertiary mt-1">Increase your savings by $1 every week</p>
      </div>
      <MicroCommitmentStepper
        steps={[
          { id: 'w1', title: 'Week 1: Save $1', description: 'Start small, build momentum', completed: true },
          { id: 'w2', title: 'Week 2: Save $2', description: 'Double it up', completed: true },
          { id: 'w3', title: 'Week 3: Save $3', description: 'Keep the streak going', completed: true },
          { id: 'w4', title: 'Week 4: Save $4', description: 'You\'re on a roll!', completed: false },
        ]}
        onComplete={(id) => console.log('Completed week:', id)}
      />
      <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary">
        <p className="text-xs text-text-tertiary">Progress: 3/52 weeks</p>
        <p className="text-lg font-bold text-text-primary mt-1">$6 saved so far</p>
      </div>
    </div>
  ),
};

export const DebtFreeChallenge: Story = {
  args: {
    steps: [
      { id: '1', title: 'Pay $50 extra', description: 'Add $50 to your minimum payment', completed: true },
      { id: '2', title: 'Pay $100 extra', description: 'Find $100 in your budget', completed: false },
      { id: '3', title: 'Pay $200 extra', description: 'Cut one dining-out day per week', completed: false },
      { id: '4', title: 'Pay $500 extra', description: 'Sell something unused', completed: false },
    ],
    onComplete: (stepId) => console.log('Completed:', stepId),
  },
};

export const CompletedChallenge: Story = {
  args: {
    steps: [
      { id: '1', title: 'Save $5/day', description: 'Skip one coffee', completed: true },
      { id: '2', title: 'Save $10/day', description: 'Cook dinner at home', completed: true },
    ],
    onComplete: (stepId) => console.log('Completed:', stepId),
  },
};

export const FourSteps: Story = {
    render: () => (
        <div style={{ padding: 20 }}>
            <MicroCommitmentStepper
                steps={[
                    { id: '1', title: 'Create Account', description: 'Set up your profile and preferences', icon: () => null, accessLevel: 'basic', required: true, isComplete: true },
                    { id: '2', title: 'Verify Identity', description: 'Upload your government ID', icon: () => null, accessLevel: 'basic', required: true, isComplete: true },
                    { id: '3', title: 'Fund Account', description: 'Add your first deposit', icon: () => null, accessLevel: 'basic', required: true, isComplete: false },
                    { id: '4', title: 'Start Investing', description: 'Choose your first portfolio', icon: () => null, accessLevel: 'basic', required: true, isComplete: false },
                ]}
            />
        </div>
    ),
};

export const AllComplete: Story = {
    render: () => (
        <div style={{ padding: 20 }}>
            <MicroCommitmentStepper
                steps={[
                    { id: '1', title: 'Sign Up', description: 'Basic registration complete', icon: () => null, accessLevel: 'basic', required: true, isComplete: true },
                    { id: '2', title: 'KYC Verification', description: 'Identity confirmed', icon: () => null, accessLevel: 'basic', required: true, isComplete: true },
                    { id: '3', title: 'Enable 2FA', description: 'Extra security layer active', icon: () => null, accessLevel: 'basic', required: true, isComplete: true },
                ]}
            />
        </div>
    ),
};

export const SingleStepComplete: Story = {
    render: () => (
        <div style={{ padding: 20 }}>
            <MicroCommitmentStepper
                steps={[
                    { id: '1', title: 'Welcome!', description: 'You are one step away from your first investment', icon: () => null, accessLevel: 'basic', required: true, isComplete: true },
                    { id: '2', title: 'Add Funds', description: 'Deposit at least $10 to get started', icon: () => null, accessLevel: 'basic', required: true, isComplete: false },
                ]}
            />
        </div>
    ),
};
