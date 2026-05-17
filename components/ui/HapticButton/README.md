# HapticButton

> **v1.0.27** · stable

A button component that provides haptic feedback on user interaction. Uses the Vibration API and fallback methods to trigger tactile feedback on mobile devices.

## Installation

```bash
# The component is copied to your project with the add cli command
import { HapticButton } from '@/components/ui/HapticButton';
```

## Basic Usage

```tsx
import { HapticButton } from '@/components/ui/HapticButton';

<HapticButton onClick={() => console.log('Clicked!')}>
  Send Payment
</HapticButton>
```

## API

### Props

Extends all Button props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hapticFeedback` | `HapticFeedbackType \| boolean` | `'medium'` | Type of feedback to trigger |
| `hapticOnHover` | `boolean` | `false` | Trigger feedback on hover |
| `hapticOnTap` | `boolean` | `true` | Trigger feedback on tap/click |

### HapticFeedbackType

| Type | Description | Pattern (ms) |
|------|-------------|--------------|
| `light` | Light tap | 10ms |
| `medium` | Medium tap | 20ms |
| `heavy` | Heavy tap | 30ms |
| `success` | Success notification | [10, 50, 10] |
| `warning` | Warning notification | [20, 50, 20] |
| `error` | Error notification | [30, 50, 30, 50, 30] |
| `selection` | UI selection feedback | 10ms |
| `impact` | Impact feedback | 20ms |
| `notification` | General notification | [20, 100, 20] |

## Examples

### With Default Haptic Feedback

```tsx
<HapticButton variant="primary">
  Send Payment
</HapticButton>
```

### Different Feedback Types

```tsx
// Light feedback
<HapticButton hapticFeedback="light">Light Tap</HapticButton>

// Heavy feedback
<HapticButton hapticFeedback="heavy">Heavy Tap</HapticButton>

// Success feedback
<HapticButton hapticFeedback="success">Confirm</HapticButton>
```

### Disable Haptic Feedback

```tsx
<HapticButton hapticFeedback={false}>
  No Haptics
</HapticButton>
```

### Enable Haptic on Hover

```tsx
<HapticButton hapticOnHover hapticFeedback="light">
  Hover for feedback
</HapticButton>
```

### Disable Tap Feedback Only

```tsx
<HapticButton hapticOnTap={false} hapticOnHover>
  Only hover feedback
</HapticButton>
```

### With Icon

```tsx
import { Send } from 'lucide-react';

<HapticButton variant="primary" icon={<Send className="w-4 h-4" />}>
  Send Money
</HapticButton>
```

### Full Width Payment Button

```tsx
<HapticButton variant="primary" fullWidth icon={<Check className="w-4 h-4" />}>
  Confirm $250.00 Payment
</HapticButton>
```

### Loading State

```tsx
<HapticButton variant="primary" loading>
  Processing
</HapticButton>
```

## Utility Functions

The component also exports helper functions for custom use:

```tsx
import { isHapticSupported, triggerHaptic, getVibrationPattern } from '@/components/ui/HapticButton';

// Check if device supports haptics
if (isHapticSupported()) {
  triggerHaptic('success');
}

// Get pattern for a type
const pattern = getVibrationPattern('error');
// Returns: [30, 50, 30, 50, 30]
```

## Browser Support

- **Vibration API**: Android Chrome, Samsung Internet, Opera Mobile
- **Fallback**: Attempts WebKit DeviceMotionEvent (iOS limited)
- **Desktop**: No feedback (graceful degradation)

## Notes

- Falls back silently on unsupported devices
- Requires `"use client"` directive for Next.js App Router
- All standard Button variants and props are supported
- Supports dark mode