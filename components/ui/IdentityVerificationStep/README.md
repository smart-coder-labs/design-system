# IdentityVerificationStep

> **v1.0.27** · stable

A document upload component for KYC (Know Your Customer) identity verification flows. Supports drag-and-drop, upload progress, and status tracking for multiple document types.

## Installation

```bash
# The component is copied to your project with the add cli command
import { IdentityVerificationStep } from '@/components/ui/IdentityVerificationStep';
```

## Basic Usage

```tsx
import { IdentityVerificationStep } from '@/components/ui/IdentityVerificationStep';

const documents = [
  { type: 'id_front', label: 'ID Front', status: 'idle' },
  { type: 'id_back', label: 'ID Back', status: 'idle' },
  { type: 'selfie', label: 'Selfie', status: 'idle' },
];

function Example() {
  const handleUpload = (type, file) => {
    // Handle file upload logic
  };

  return (
    <IdentityVerificationStep
      documents={documents}
      onUpload={handleUpload}
    />
  );
}
```

## With Initial Data

```tsx
const documents = [
  { type: 'id_front', label: 'ID Front', status: 'success', fileName: 'id_front.jpg' },
  { type: 'id_back', label: 'ID Back', status: 'uploading', progress: 0.6 },
  { type: 'selfie', label: 'Selfie', status: 'idle' },
];
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `documents` | `DocumentSlot[]` | - | Array of document slots to display |
| `onUpload` | `(type: DocumentType, file: File) => void` | - | Called when a file is selected or dropped |
| `onRetry` | `(type: DocumentType) => void` | - | Called when retry button is clicked |
| `title` | `string` | `'Identity Verification'` | Header title |
| `subtitle` | `string` | `'Upload the required documents to verify your identity'` | Header subtitle |
| `className` | `string` | - | Additional CSS classes |

### DocumentSlot

| Prop | Type | Description |
|------|------|-------------|
| `type` | `DocumentType` | Unique identifier (`id_front`, `id_back`, `passport`, `selfie`, `proof_of_address`) |
| `label` | `string` | Display name for the document |
| `description` | `string` | Optional description text |
| `status` | `VerificationStatus` | Current state (`idle`, `uploading`, `verifying`, `success`, `failed`) |
| `fileName` | `string` | Name of uploaded file |
| `progress` | `number` | Upload progress (0-1) |
| `errorMessage` | `string` | Error message for failed status |

### Types

```typescript
type DocumentType = 'id_front' | 'id_back' | 'passport' | 'selfie' | 'proof_of_address';
type VerificationStatus = 'idle' | 'uploading' | 'verifying' | 'success' | 'failed';
```

## Examples

### Simple Upload

```tsx
<IdentityVerificationStep
  documents={[
    { type: 'id_front', label: 'Government ID (Front)', status: 'idle' },
    { type: 'selfie', label: 'Selfie Photo', status: 'idle' },
  ]}
  onUpload={(type, file) => uploadFile(type, file)}
/>
```

### With Error Handling

```tsx
<IdentityVerificationStep
  documents={[
    { 
      type: 'id_front', 
      label: 'ID Document', 
      status: 'failed',
      errorMessage: 'Image too blurry. Please upload a clearer photo.'
    },
  ]}
  onUpload={handleUpload}
  onRetry={handleRetry}
/>
```

### With Upload Progress

```tsx
<IdentityVerificationStep
  documents={[
    { 
      type: 'passport', 
      label: 'Passport', 
      status: 'uploading',
      progress: 0.65
    },
  ]}
/>
```

### Complete Flow

```tsx
function KYCFlow() {
  const [docs, setDocs] = useState([
    { type: 'id_front', label: 'ID Front', status: 'success', fileName: 'id.jpg' },
    { type: 'selfie', label: 'Selfie', status: 'verifying' },
    { type: 'proof_of_address', label: 'Proof of Address', status: 'idle' },
  ]);

  return (
    <IdentityVerificationStep
      documents={docs}
      onUpload={(type, file) => handleUpload(type, file)}
    />
  );
}
```

## Notes

- Supports drag-and-drop file upload
- Shows upload progress bar during upload
- Animated transitions between states using Framer Motion
- Fully accessible with keyboard navigation and ARIA labels
- Automatic progress calculation based on completed documents
- Dark mode support via design tokens
- Document type icons automatically selected based on type