# BarcodeGenerator

> **v1.0.34** · stable

A component for generating various barcode formats with download and copy functionality.

## Installation

```tsx
import { BarcodeGenerator } from '@/components/ui/BarcodeGenerator';
```

## Basic Usage

```tsx
<BarcodeGenerator defaultValue="1234567890" format="code128" />
<BarcodeGenerator showInput />
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | string | '1234567890' | Initial barcode value |
| format | BarcodeFormat | 'code128' | Barcode format type |
| scale | number | 3 | Scale factor (1-10) |
| includeText | boolean | true | Show human-readable text |
| showInput | boolean | false | Show input controls |
| className | string | - | Additional classes |

### Supported Formats

- `code128` - Standard (default)
- `ean13` - EAN-13 (Retail)
- `upca` - UPC-A (US Retail)
- `code39` - Code 39
- `itf14` - ITF-14 (Logistics)

## Notes

- Uses bwip-js API for barcode generation
- No React.forwardRef (uses FC)
- Includes download and copy-to-clipboard actions