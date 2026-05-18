# MicroCommitmentStepper

> **v1.0.1** · stable

A progressive onboarding stepper component that unlocks features based on user completion. Inspired by progressive disclosure patterns where users only provide information needed for their current use case.

## Installation

```bash
# The component is copied to your project with the add cli command
import { MicroCommitmentStepper } from '@/components/ui/MicroCommitmentStepper';
```

## Basic Usage

```tsx
import { MicroCommitmentStepper } from '@/components/ui/MicroCommitmentStepper';

function Example() {
  return <MicroCommitmentStepper />;
}
```

## Custom Steps

```tsx
import { Shield, Mail, Home, CreditCard } from 'lucide-react';

<MicroCommitmentStepper
  steps={[
    {
      id: 'contact',
      title: 'Basic Info',
      description: 'Create your profile to get started.',
      icon: Mail,
      accessLevel: 'Browse Catalog',
      required: true,
      isComplete: true,
    },
    {
      id: 'identity',
      title: 'Verify Identity',
      description: 'Required by law to process transactions.',
      icon: Shield,
      accessLevel: 'Receive Money (Limit $3,000)',
      required: true,
      isComplete: false,
    },
    {
      id: 'address',
      title: 'Home Address',
      description: 'Enable physical card shipping.',
      icon: Home,
      accessLevel: 'Physical Card & No Limits',
      required: false,
      isComplete: false,
    },
  ]}
/>
```

## API

### Props

| Prop        | Type                    | Description                                      |
|-------------|------------------------|--------------------------------------------------|
| `steps`     | `MicroCommitmentStep[]` | Array of step definitions (optional, has defaults) |

### MicroCommitmentStep

| Prop           | Type           | Description                          |
|----------------|---------------|--------------------------------------|
| `id`           | `string`      | Unique step identifier               |
| `title`        | `string`      | Step title                           |
| `description`  | `string`      | Step description                     |
| `icon`         | `ElementType` | Icon component (from lucide-react)   |
| `accessLevel`  | `string`      | Feature unlocked by completing step  |
| `required`     | `boolean`     | Whether step is mandatory            |
| `isComplete`   | `boolean`     | Whether step is already completed    |

## Default Steps

The component includes three default steps:

1. **Basic Info** (complete) - Unlocks "Browse Catalog"
2. **Verify Identity** (active) - Unlocks "Receive Money (Limit $3,000)"
3. **Home Address** (locked) - Unlocks "Physical Card & No Limits"

## Visual States

| State        | Visual Indicator                              |
|--------------|----------------------------------------------|
| Complete     | Green background with checkmark icon         |
| Active       | Blue border with shadow, "Complete" button   |
| Locked       | Grayscale, reduced opacity                   |

## Examples

### Banking Onboarding Flow

```tsx
<MicroCommitmentStepper
  steps={[
    {
      id: 'email',
      title: 'Email Verification',
      description: 'Verify your email to receive account notifications.',
      icon: Mail,
      accessLevel: 'View Dashboard',
      required: true,
      isComplete: true,
    },
    {
      id: 'identity',
      title: 'Identity Verification',
      description: 'Complete KYC to enable transactions.',
      icon: Shield,
      accessLevel: 'Send & Receive Money',
      required: true,
      isComplete: false,
    },
    {
      id: 'bank',
      title: 'Link Bank Account',
      description: 'Connect your bank for easy transfers.',
      icon: CreditCard,
      accessLevel: 'Instant Transfers',
      required: false,
      isComplete: false,
    },
  ]}
/>
```

### Dark Mode

```tsx
<div className="dark">
  <MicroCommitmentStepper />
</div>
```

## Notes

- Vertical stepper layout with connecting line
- Color-coded states: green (complete), blue (active), gray (locked)
- Badge shows "Obligatorio" (required) or "Opcional"
- "Complete" button on active step
- Lock icon on locked steps, credit card icon on unlocked features
- Framer Motion animations for state transitions
- Dark mode compatible via design tokens