# FileIntelligencePreview

> **v1.0.7** · stable

A component displaying file information with AI-generated intelligence. Shows file metadata, preview images, extracted text, and summary information with collapsible metadata panel.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FileIntelligencePreview } from '@/components/ui/FileIntelligencePreview';
```

## Basic Usage

```tsx
import { FileIntelligencePreview } from '@/components/ui/FileIntelligencePreview';

<FileIntelligencePreview
  file={{
    name: 'vacation-photo.jpg',
    type: 'image/jpeg',
    url: 'https://example.com/photo.jpg',
  }}
  intelligence={{
    type: 'JPEG Image',
    size: '2.4 MB',
    dimensions: '4032 × 3024',
    preview: 'https://example.com/thumb.jpg',
    summary: 'A beautiful landscape photo taken during vacation',
    metadata: {
      Camera: 'iPhone 15 Pro',
      'Date Taken': 'December 15, 2023',
      Location: 'Yosemite National Park',
    },
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `file` | `{ name: string; url?: string; type: string }` | - | File information |
| `intelligence` | `FileIntelligence` | - | AI-generated file intelligence |
| `onDownload` | `() => void` | - | Custom download handler |
| `onPreview` | `() => void` | - | Custom preview handler |
| `showMetadata` | `boolean` | `true` | Whether to show metadata section |
| `className` | `string` | - | Additional CSS classes |

### FileIntelligence

| Prop | Type | Description |
|------|------|-------------|
| `type` | `string` | File type description |
| `size` | `string` | Human-readable file size |
| `dimensions` | `string` | Image/video dimensions |
| `duration` | `string` | Audio/video duration |
| `metadata` | `Record<string, string>` | Key-value metadata pairs |
| `preview` | `string` | URL to preview image |
| `extractedText` | `string` | Extracted text content |
| `summary` | `string` | AI-generated summary |

## Examples

### Image File with Preview

```tsx
<FileIntelligencePreview
  file={{
    name: 'vacation-photo.jpg',
    type: 'image/jpeg',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  }}
  intelligence={{
    type: 'JPEG Image',
    size: '2.4 MB',
    dimensions: '4032 × 3024',
    preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    summary: 'A beautiful landscape photo',
    metadata: {
      Camera: 'iPhone 15 Pro',
      'Date Taken': 'December 15, 2023',
    },
  }}
/>
```

### PDF Document

```tsx
<FileIntelligencePreview
  file={{
    name: 'annual-report-2023.pdf',
    type: 'application/pdf',
  }}
  intelligence={{
    type: 'PDF Document',
    size: '1.8 MB',
    summary: 'Annual financial report for fiscal year 2023',
    extractedText: 'Executive Summary: This report presents...',
    metadata: {
      Pages: '45',
      Author: 'Finance Department',
    },
  }}
  onDownload={() => console.log('Download PDF')}
  onPreview={() => console.log('Preview PDF')}
/>
```

### Video File

```tsx
<FileIntelligencePreview
  file={{
    name: 'presentation-recording.mp4',
    type: 'video/mp4',
  }}
  intelligence={{
    type: 'MP4 Video',
    size: '125 MB',
    dimensions: '1920 × 1080',
    duration: '15:32',
    summary: 'Quarterly business review presentation',
    metadata: {
      Codec: 'H.264',
      'Frame Rate': '30 fps',
    },
  }}
/>
```

### Code File

```tsx
<FileIntelligencePreview
  file={{
    name: 'app.tsx',
    type: 'text/typescript',
  }}
  intelligence={{
    type: 'TypeScript',
    size: '12 KB',
    summary: 'Main application component with routing',
    extractedText: 'import React from "react";...',
    metadata: {
      Lines: '245',
      Components: '8',
    },
  }}
/>
```

### Without Intelligence Data

```tsx
<FileIntelligencePreview
  file={{
    name: 'document.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  }}
  onDownload={() => console.log('Download file')}
/>
```

### Without Metadata

```tsx
<FileIntelligencePreview
  file={{
    name: 'simple-image.png',
    type: 'image/png',
  }}
  intelligence={{
    type: 'PNG Image',
    size: '450 KB',
    dimensions: '800 × 600',
    preview: 'https://example.com/image.jpg',
  }}
  showMetadata={false}
/>
```

## Notes

- Automatically selects appropriate icon based on file MIME type
- Supports image, video, audio, PDF, archive, and code file types
- Preview image displayed when available
- Collapsible metadata panel with smooth animation
- Download and preview buttons appear based on file URL availability
- Extracted text truncated to 3 lines with ellipsis
- Uses Framer Motion for metadata panel animations
- Supports dark mode via CSS tokens