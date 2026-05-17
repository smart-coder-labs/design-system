# TwoFactorAuth

> **v1.0.27** · stable

A secure two-factor authentication component with OTP input, verification flow, and error handling. Supports SMS, email, and authenticator app methods.

## Installation

```bash
# The component is copied to your project with the add cli command
import { TwoFactorAuth } from '@/components/ui/TwoFactorAuth';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { TwoFactorAuth } from '@/components/ui/TwoFactorAuth';

function AuthScreen() {
  const handleVerify = async (code: string) => {
    // Verify the code with your backend
    const isValid = await verifyCode(code);
    if (!isValid) throw new Error('Invalid code');
  };

  return (
    <TwoFactorAuth
      method="email"
      recipient="user@example.com"
      onVerify={handleVerify}
    />
  );
}
```

## With SMS Method

```tsx
<TwoFactorAuth
  method="sms"
  recipient="+1 (555) 123-4567"
  onVerify={handleVerify}
  onResend={() => resendCode()}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `method` | `'sms' \| 'email' \| 'app'` | `'email'` | Verification method |
| `recipient` | `string` | - | Masked recipient (email/phone) |
| `onVerify` | `(code: string) => void \| Promise<void>` | - | Verification callback |
| `onResend` | `() => void` | - | Resend code callback |
| `isLoading` | `boolean` | `false` | Loading state |
| `error` | `string` | - | Error message to display |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Error State

```tsx
<TwoFactorAuth
  method="app"
  onVerify={handleVerify}
  error="Invalid or expired code. Please try again."
/>
```

### With Resend Option

```tsx
<TwoFactorAuth
  method="email"
  recipient="user@example.com"
  onVerify={handleVerify}
  onResend={handleResend}
/>
```

When the user clicks "Resend Code", the `onResend` callback is fired and the form is cleared for a new code entry.

## Notes

- Uses the OTPInput component for the 6-digit code entry
- Recipient is automatically masked (e.g., `us***@example.com`)
- Shows a success state after verification
- Supports dark mode via CSS tokens
- Accessible with proper ARIA labels