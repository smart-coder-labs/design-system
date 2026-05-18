# QRCodeGenerator

> **v1.0.3** · experimental

A self-contained QR code generator with input field, download functionality, and copy-to-clipboard support. Designed for payment processing, wallet addresses, and sharing URLs.

## Installation

```bash
# The component is copied to your project with the add cli command
import { QRCodeGenerator } from '@/components/ui/QRCodeGenerator';
```

## Basic Usage

```tsx
import { QRCodeGenerator } from '@/components/ui/QRCodeGenerator';

<QRCodeGenerator defaultValue="https://example.com" />
```

## API

### Props

| Prop             | Type      | Default           | Description                                   |
|------------------|-----------|-------------------|----------------------------------------------|
| `defaultValue`   | `string`  | `'https://example.com'` | The QR code content (URL, text, etc.) |
| `size`           | `number`  | `200`             | QR code size in pixels                       |
| `color`          | `string`  | `'#000000'`       | Foreground color (hex)                       |
| `backgroundColor`| `string`  | `'#FFFFFF'`       | Background color (hex)                       |
| `showInput`      | `boolean` | `false`           | Whether to show the input field              |
| `className`      | `string`  | -                 | Additional CSS classes                       |

## Examples

### Default (Read-only)

```tsx
<QRCodeGenerator defaultValue="https://pay.bank.com/scan?code=ABC123" />
```

### With Input Field

```tsx
<QRCodeGenerator
  defaultValue="https://example.com"
  showInput={true}
/>
```

### Custom Colors

```tsx
<QRCodeGenerator
  defaultValue="https://app.profile.com/user/cesar"
  size={180}
  color="#007AFF"
  backgroundColor="#F2F2F7"
  showInput={true}
/>
```

### Large QR Code

```tsx
<QRCodeGenerator
  defaultValue="https://banking.app/referral?code=CESAR2026"
  size={300}
/>
```

### Small QR Code

```tsx
<QRCodeGenerator
  defaultValue="payment-12345"
  size={128}
/>
```

### Bitcoin Address

```tsx
<QRCodeGenerator
  defaultValue="bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh?amount=0.01"
  size={200}
/>
```

## Features

- **Download**: Save QR code as PNG file
- **Copy**: Copy content to clipboard with visual feedback
- **Loading State**: Shows spinner while QR code is generating
- **Customizable**: Adjust size, colors, and show/hide input

## Notes

- Uses QRServer API for QR code generation (https://api.qrserver.com)
- Images are preloaded to ensure proper loading states
- Download falls back to opening in new tab if fetch fails (CORS restrictions)
- Auto-generates unique filename with timestamp on download
- Fully accessible with proper labels and keyboard support
- Supports dark mode via CSS classes