import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IdentityVerificationStep } from './IdentityVerificationStep';
import { action } from 'storybook/actions';
import { Upload, Camera, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const meta: Meta<typeof IdentityVerificationStep> = {
  title: 'Fintech/KYC/IdentityVerificationStep',
  component: IdentityVerificationStep,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PendingUpload: Story = {
  args: {
    title: 'Upload your ID',
    description: 'Please upload a clear photo of your government-issued ID.',
    status: 'pending',
    icon: <Upload className="w-5 h-5" />,
    onAction: action('upload-clicked'),
    actionLabel: 'Upload Document',
  },
};

export const Completed: Story = {
  args: {
    title: 'ID Verification',
    description: 'Your ID has been successfully verified.',
    status: 'completed',
    icon: <CheckCircle className="w-5 h-5" />,
  },
};

export const InProgress: Story = {
  args: {
    title: 'Processing Verification',
    description: 'We are reviewing your documents. This usually takes 2-3 minutes.',
    status: 'in-progress',
    icon: <Clock className="w-5 h-5" />,
  },
};

export const Failed: Story = {
  args: {
    title: 'Verification Failed',
    description: 'We couldn\'t verify your identity. Please try again with a clearer photo.',
    status: 'failed',
    icon: <AlertCircle className="w-5 h-5" />,
    onAction: action('retry'),
    actionLabel: 'Try Again',
  },
};

export const SelfieStep: Story = {
  args: {
    title: 'Take a Selfie',
    description: 'Take a clear selfie to match with your ID document.',
    status: 'pending',
    icon: <Camera className="w-5 h-5" />,
    onAction: action('take-photo'),
    actionLabel: 'Take Photo',
  },
};

export const AddressVerification: Story = {
  args: {
    title: 'Proof of Address',
    description: 'Upload a recent utility bill or bank statement (last 3 months).',
    status: 'pending',
    icon: <Upload className="w-5 h-5" />,
    onAction: action('upload-address'),
    actionLabel: 'Upload Document',
  },
};

export const VerificationProgress: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <IdentityVerificationStep
        title="Upload ID"
        description="Upload your government-issued ID"
        status="completed"
        icon={<CheckCircle className="w-5 h-5" />}
      />
      <IdentityVerificationStep
        title="Take Selfie"
        description="Match your face with your ID"
        status="in-progress"
        icon={<Clock className="w-5 h-5" />}
      />
      <IdentityVerificationStep
        title="Proof of Address"
        description="Upload a utility bill or statement"
        status="pending"
        icon={<Upload className="w-5 h-5" />}
        onAction={action('upload')}
        actionLabel="Upload"
      />
    </div>
  ),
};

export const FullOnboardingFlow: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [step, setStep] = React.useState(0);
    const steps = [
      { title: 'Personal Information', desc: 'Enter your full name and date of birth' },
      { title: 'ID Verification', desc: 'Upload a government-issued ID' },
      { title: 'Selfie Verification', desc: 'Take a selfie for facial matching' },
      { title: 'Address Proof', desc: 'Upload a recent utility bill' },
    ];

    return (
      <div className="w-96 space-y-6">
        <div className="flex justify-between">
          {steps.map((s, i) => (
            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold 
              ${i < step ? 'bg-status-success text-white' : i === step ? 'bg-accent-blue text-white' : 'bg-surface-secondary text-text-tertiary'}`}
            >
              {i < step ? '✓' : i + 1}
            </div>
          ))}
        </div>
        <IdentityVerificationStep
          title={steps[step].title}
          description={steps[step].desc}
          status={step === step ? 'pending' : step < step ? 'completed' : 'pending'}
          icon={step === 0 ? <Upload className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
          onAction={() => setStep(s => Math.min(s + 1, 3))}
          actionLabel={step === 3 ? 'Finish' : 'Continue'}
        />
      </div>
    );
  },
};
