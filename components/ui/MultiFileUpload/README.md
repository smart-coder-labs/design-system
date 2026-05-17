# MultiFileUpload

> **v1.0.14** · stable

A drag-and-drop file upload component with support for multiple files, size validation, type filtering, and file preview with removal capabilities.

## Basic Usage

```tsx
import { MultiFileUpload } from '@/components/ui/MultiFileUpload';

<MultiFileUpload
  label="Upload Files"
  onChange={(files) => console.log('Files:', files)}
/>
```

## With Constraints

```tsx
<MultiFileUpload
  label="Identity Documents"
  accept="image/*,application/pdf"
  maxSize={5242880} // 5MB
  maxFiles={3}
  helperText="Accepted: Images and PDF, max 5MB each"
  onChange={(files) => console.log('Files:', files)}
/>
```

## Controlled Usage

```tsx
const [files, setFiles] = useState<File[]>([]);

<MultiFileUpload
  value={files}
  onChange={setFiles}
  maxFiles={5}
  accept=".pdf,.jpg,.png"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label displayed above the upload area |
| `value` | `File[]` | - | Controlled file array |
| `onChange` | `(files: File[]) => void` | - | Called when files are added or removed |
| `accept` | `string` | - | Accepted file types (e.g., 'image/*,.pdf') |
| `maxSize` | `number` | - | Maximum file size in bytes |
| `maxFiles` | `number` | - | Maximum number of files allowed |
| `disabled` | `boolean` | `false` | Disables the upload component |
| `error` | `string` | - | Custom error message |
| `helperText` | `string` | - | Helper text displayed below |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Existing Files

```tsx
<MultiFileUpload
  value={[new File(['content'], 'document.pdf')]}
  onChange={handleFiles}
  accept="application/pdf"
/>
```

### Drag and Drop Zone

The component provides a full-featured drag-and-drop zone that:
- Highlights on drag over with a blue border
- Shows accepted formats and limits in helper text
- Displays file previews with name and size
- Supports removing individual files

## Notes

- Validates file types using MIME type matching and extension checks
- Checks for duplicates based on name and size
- Auto-formats file sizes to Bytes, KB, MB, or GB
- Supports both click-to-upload and drag-and-drop
- Animations use Framer Motion (200ms transitions)
- Fully accessible with ARIA labels