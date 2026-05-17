# BiometricPrompt

> **v1.0.16** · stable

A modal dialog for Face ID / Touch ID authentication with animated states.

## Installation

```tsx
import { BiometricPrompt } from '@/components/ui/BiometricPrompt';
```

## Basic Usage

```tsx
const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');

<BiometricPrompt
  type="faceId"
  status={status}
  onAuthenticate={() => {
    setStatus('scanning');
    // Handle auth logic
  }}
  onCancel={() => setStatus('idle')}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'faceId' \| 'touchId' | 'faceId' | Biometric type |
| status | 'idle' \| 'scanning' \| 'success' \| 'failed' | 'idle' | Current auth state |
| open | boolean | true | Show/hide prompt |
| title | string (optional) | - | Custom title |
| subtitle | string (optional) | - | Custom subtitle |
| onAuthenticate | () => void | - | Auth trigger callback |
| onCancel | () => void | - | Cancel/dismiss callback |
| className | string | - | Additional classes |

## Notes

- No React.forwardRef (uses FC)
- Animated scanning ring with Framer Motion
- Auto-centers on screen with backdrop blur
- Accessible with role="dialog" and aria-label