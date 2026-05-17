# DocScanOverlay

> **v1.0.31** · stable

A document scanning overlay component for KYC (Know Your Customer) flows. Provides a camera-like interface for capturing ID cards, passports, and selfies with visual guides and status feedback.

## Installation

```bash
# The component is copied to your project with the add cli command
import { DocScanOverlay } from '@/components/ui/DocScanOverlay';
```

## Basic Usage

```tsx
<DocScanOverlay
  documentType="ID"
  scanState="scanning"
  instructionMessage="Alinea tu identificación dentro del recuadro"
/>
```

## Document Types

### ID Card

```tsx
<DocScanOverlay documentType="ID" scanState="scanning" />
```

### Passport

```tsx
<DocScanOverlay
  documentType="PASSPORT"
  instructionMessage="Alinea tu pasaporte dentro del marco"
  scanState="scanning"
/>
```

### Selfie

```tsx
<DocScanOverlay
  documentType="SELFIE"
  instructionMessage="Mueve tu rostro dentro del óvalo"
  scanState="scanning"
/>
```

## API

### Props

| Prop               | Type                                      | Default     | Description                         |
| ----------------- | ----------------------------------------- | ----------- | ----------------------------------- |
| `scanState`       | `'idle' \| 'scanning' \| 'detecting' \| 'success' \| 'error'` | `'scanning'` | Current state |
| `instructionMessage` | `string`                                | -           | Instruction text shown to user     |
| `documentType`    | `'ID' \| 'PASSPORT' \| 'SELFIE'`          | `'ID'`      | Type of document being scanned     |
| `onCapture`       | `() => void`                              | -           | Callback when capture completes    |
| `onRetake`        | `() => void`                              | -           | Callback when user wants to retake  |
| `onCancel`        | `() => void`                              | -           | Callback when user cancels          |

## Scan States

| State       | Description                                    |
| ----------- | ---------------------------------------------- |
| `idle`      | Ready to start scanning                       |
| `scanning`  | Actively scanning with guide overlay          |
| `detecting` | Processing/document detection in progress    |
| `success`   | Document successfully captured               |
| `error`     | Capture failed, user should retry             |

## Visual States

The overlay adapts visually based on `scanState`:

- **Idle/Scanning**: White border, blue scanning line animation
- **Detecting**: Blue border, processing indicator
- **Success**: Green border, checkmark indicator
- **Error**: Red border, error message with retry option

## Examples

### ID Card Scanning

```tsx
<DocScanOverlay
  documentType="ID"
  scanState="scanning"
  instructionMessage="Alinea tu identificación dentro del recuadro"
  onCapture={() => console.log('ID captured')}
  onCancel={() => console.log('Cancelled')}
/>
```

### Selfie with Success

```tsx
<DocScanOverlay
  documentType="SELFIE"
  scanState="success"
  instructionMessage="Rostro verificado correctamente"
/>
```

### Error with Retake

```tsx
<DocScanOverlay
  documentType="ID"
  scanState="error"
  instructionMessage="No pudimos leer tu documento. Intenta de nuevo."
  onRetake={() => {
    // Reset to scanning state
  }}
/>
```

### Passport Detecting

```tsx
<DocScanOverlay
  documentType="PASSPORT"
  scanState="detecting"
  instructionMessage="Procesando datos del pasaporte..."
/>
```

## Notes

- Optimized for mobile-first KYC flows
- Aspect ratio adjusts based on document type (portrait for SELFIE, landscape for ID/PASSPORT)
- Visual corner markers for alignment
- Animated scanning line during scanning state
- Flash effect on capture
- Built-in capture simulation for demo purposes
- Designed for dark backgrounds (camera-like experience)
- The component includes Spanish text by default for Latin American market support

---

## Architecture Decisions

### Why single file?

At ~170 lines, this component is self-contained with minimal external dependencies. The logic is specific to the KYC use case and doesn't warrant splitting.

### Integration Note

In production, you would connect `onCapture` to your document processing API and handle the actual image data. The component provides the UI; the image capture and processing logic is external.

### File Structure

```
DocScanOverlay/
├── DocScanOverlay.tsx       # Main component
├── DocScanOverlay.types.ts  # Types
└── index.ts                # Barrel exports
```