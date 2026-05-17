# ModalStackManager

> **v1.0.8** · stable

A modal stack manager that allows multiple modals to be stacked on top of each other, similar to iOS/macOS navigation patterns. Each modal can open another modal, creating a cascading experience.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ModalStackManager } from '@/components/ui/ModalStackManager';
```

## Basic Usage

```tsx
import { ModalStackManager } from '@/components/ui/ModalStackManager';
import { Button } from '@/components/ui/Button';

function Example() {
  return (
    <ModalStackManager
      initialStack={[
        {
          title: 'Send Money',
          description: 'Select recipient and amount',
          content: <p>Step 1 content</p>,
          size: 'md',
        },
      ]}
      onCloseAll={() => console.log('All modals closed')}
    />
  );
}
```

## Payment Flow (Three Steps)

```tsx
<ModalStackManager
  initialStack={[
    {
      title: 'Send Money',
      description: 'Select recipient and amount ($250.00 to Alice Johnson)',
      content: <RecipientSelection />,
      size: 'md',
    },
    {
      title: 'Confirm Payment',
      description: 'Review: $250.00 from Checking •••• 4821 to Alice Johnson',
      content: <PaymentConfirmation />,
      size: 'md',
    },
    {
      title: 'Verify with 2FA',
      description: 'Enter the 6-digit code sent to your phone',
      content: <TwoFactorInput />,
      size: 'sm',
    },
  ]}
  onCloseAll={() => navigate('/dashboard')}
/>
```

## Interactive Push/Pop API

```tsx
import { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalCloseButton, ModalClose } from '../Modal';
import { Button } from '@/components/ui/Button';

function CustomModalStack() {
  const [stack, setStack] = useState([
    { id: 1, title: 'Step 1', content: 'First modal' }
  ]);

  const pushModal = (modal) => {
    setStack(prev => [...prev, modal]);
  };

  const popModal = () => {
    setStack(prev => prev.slice(0, -1));
  };

  return (
    <>
      {stack.map((modal, index) => (
        <Modal
          key={index}
          open={index === stack.length - 1}
          onOpenChange={(open) => !open && popModal()}
        >
          <ModalCloseButton />
          <ModalHeader>
            <ModalTitle>{modal.title}</ModalTitle>
          </ModalHeader>
          <ModalContent>{modal.content}</ModalContent>
          <ModalFooter>
            <ModalClose>
              <Button variant="ghost">Close</Button>
            </ModalClose>
            {index < stack.length - 1 && (
              <Button variant="primary" onClick={() => pushModal({ id: index + 2, title: `Step ${index + 2}` })}>
                Next
              </Button>
            )}
          </ModalFooter>
        </Modal>
      ))}
    </>
  );
}
```

## API

### Props

| Prop           | Type               | Default   | Description                                      |
|----------------|-------------------|-----------|--------------------------------------------------|
| `initialStack` | `ModalConfig[]`   | `[]`      | Initial array of modal configurations            |
| `className`    | `string`          | -         | Additional CSS classes                           |
| `open`         | `boolean`         | -         | Controlled open state (optional)                |
| `onCloseAll`   | `() => void`      | -         | Called when the last modal is closed             |

### ModalConfig

| Prop          | Type               | Description                          |
|---------------|-------------------|--------------------------------------|
| `title`       | `string`          | Modal title                          |
| `description` | `string`          | Optional modal description           |
| `content`     | `ReactNode`       | Modal body content                   |
| `footer`      | `ReactNode`       | Optional footer content              |
| `size`        | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | Modal size |

## Stack Behavior

| Action    | Behavior                                    |
|-----------|---------------------------------------------|
| Open      | New modal appears on top of existing stack |
| Close     | Topmost modal closes, revealing previous   |
| Close All | All modals dismissed, triggers `onCloseAll` |

## Examples

### Single Modal

```tsx
<ModalStackManager
  initialStack={[
    {
      title: 'Confirm Transfer',
      description: 'Send $250 to Alice?',
      content: <p>Are you sure you want to proceed?</p>,
      footer: <Button variant="primary">Confirm</Button>,
    },
  ]}
/>
```

### Two Modals (Confirmation + 2FA)

```tsx
<ModalStackManager
  initialStack={[
    {
      title: 'Payment Confirmation',
      content: 'Review your payment details',
      size: 'md',
    },
    {
      title: 'Two-Factor Auth',
      content: 'Enter your verification code',
      size: 'sm',
    },
  ]}
/>
```

### Empty Stack

```tsx
<ModalStackManager initialStack={[]} />
```

### Dark Mode

```tsx
<div className="dark">
  <ModalStackManager
    initialStack={[
      { title: 'Step 1', content: <p>First modal</p> },
    ]}
  />
</div>
```

## Notes

- Built on top of the `Modal` component
- Only the topmost modal is visible at any time
- Closing a modal reveals the previous one in the stack
- Each modal can optionally open another modal via `pushModal`
- Framer Motion animations for smooth transitions
- Supports all Modal sizes: sm, md, lg, xl, full
- Dark mode compatible via design tokens