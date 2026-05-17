# FileUpload

> **v1.0.6** · stable

A drag-and-drop file upload component with validation, progress display, and error handling. Supports click-to-upload and drag-and-drop interactions.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FileUpload } from '@/components/ui/FileUpload';
```

## Basic Usage

```tsx
import { FileUpload } from '@/components/ui/FileUpload';

<FileUpload 
  label="Upload document"
  onChange={(file) => console.log('File:', file)}
/>
```

## API

### Props

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Label text displayed above the upload area |
| `onChange` | `(file: File \| null) => void` | Called when file is selected or removed |
| `accept` | `string` | Accepted file types (e.g., 'image/*', '.pdf,.doc') |
| `maxSize` | `number` | Maximum file size in bytes |
| `disabled` | `boolean` | Disables the upload component |
| `error` | `string` | Custom error message |
| `helperText` | `string` | Helper text displayed below |
| `className` | `string` | Additional CSS classes |

## Examples

### Default Upload

```tsx
<FileUpload 
  label="Upload document"
  onChange={(file) => console.log(file)}
/>
```

### Image Upload Only

```tsx
<FileUpload 
  label="Upload profile picture"
  accept="image/*"
  onChange={(file) => console.log(file)}
/>
```

### With Size Limit

```tsx
<FileUpload 
  label="Upload file (max 5MB)"
  accept=".pdf,.doc,.docx"
  maxSize={5 * 1024 * 1024}
  onChange={(file) => console.log(file)}
/>
```

### With Helper Text

```tsx
<FileUpload 
  label="Upload ID document"
  helperText="Accepted formats: PDF, JPG, PNG. Max 10MB."
  accept=".pdf,.jpg,.png"
/>
```

### Error State

```tsx
<FileUpload 
  label="Upload file"
  error="Invalid file type. Only PDF files are allowed."
/>
```

### Disabled

```tsx
<FileUpload 
  label="Upload (disabled)"
  disabled
/>
```

## Notes

- Supports both click-to-upload and drag-and-drop
- File validation checks type and size before acceptance
- Shows selected file with name, size, and remove button
- Animated transitions between empty and file selected states
- Error state styling with red border and icon
- Accepts MIME types (e.g., 'image/*') and extensions (e.g., '.pdf')
- Uses Framer Motion for smooth animations
- Supports dark mode via CSS tokens
- Input ref exposed for programmatic triggering