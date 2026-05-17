# RecoveryCodeDisplay

> **v1.0.32** · stable

A secure recovery code display component for two-factor authentication. Displays a list of one-time recovery codes with reveal, copy, and download functionality.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RecoveryCodeDisplay } from '@/components/ui/RecoveryCodeDisplay';
```

## Basic Usage

```tsx
import { RecoveryCodeDisplay } from '@/components/ui/RecoveryCodeDisplay';

const codes = [
    'A3F9-2K8L-P5Q7-R1M4',
    'B7N2-X4V6-W9Z3-T8Y1',
    'C5H8-J2K4-L6M9-N3P7',
];

<RecoveryCodeDisplay codes={codes} />
```

## With Callbacks

```tsx
<RecoveryCodeDisplay
    codes={codes}
    onCopy={(code) => console.log('Copied:', code)}
    onDownload={() => console.log('Downloaded')}
    title="Backup Codes"
    description="Save these codes securely. Each code can only be used once."
/>
```

## Without Warning

```tsx
<RecoveryCodeDisplay
    codes={codes}
    showWarning={false}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `codes` | `string[]` | - | Array of recovery codes to display |
| `onCopy` | `(code: string) => void` | - | Called when a single code is copied |
| `onDownload` | `() => void` | - | Called when codes are downloaded |
| `title` | `string` | `'Recovery Codes'` | Header title |
| `description` | `string` | - | Descriptive text below title |
| `showWarning` | `boolean` | `true` | Show/hide the security warning |
| `className` | `string` | - | Additional classes |

## Examples

### Custom Title and Description

```tsx
<RecoveryCodeDisplay
    codes={codes}
    title="Emergency Access Codes"
    description="Use these codes if you lose access to your authenticator app."
/>
```

### Few Codes

```tsx
<RecoveryCodeDisplay
    codes={['A3F9-2K8L-P5Q7-R1M4', 'B7N2-X4V6-W9Z3-T8Y1']}
    title="Two-Factor Backup"
    description="Store these in a secure location."
/>
```

### Many Codes

```tsx
<RecoveryCodeDisplay
    codes={codes}
    onCopy={handleCopy}
    onDownload={handleDownload}
/>
```

## Notes

- Uses `React.forwardRef` for the root element
- Fully accessible with ARIA labels and keyboard support
- Supports dark mode via CSS tokens
- Animations use Framer Motion (staggered fade-in)
- Each code can be individually revealed or copied
- Download saves codes as a plain text file
- "Copy All" button copies all codes sequentially