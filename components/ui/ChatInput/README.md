# ChatInput

> **v1.0.3** · experimental

A feature-rich chat input component with file attachment support, auto-resizing textarea, and keyboard shortcuts. Supports multiple file types, image previews, and configurable limits.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ChatInput } from '@/components/ui/ChatInput';
```

## Basic Usage

```tsx
import { ChatInput } from '@/components/ui/ChatInput';
import { useState } from 'react';

const [message, setMessage] = useState('');

<ChatInput
  value={message}
  onChange={setMessage}
  onSend={(msg, attachments) => {
    console.log('Send:', msg, attachments);
  }}
  placeholder="Type a message..."
/>
```

## Variants

```tsx
// With attachment button (default)
<ChatInput showAttachmentButton={true} />

// Without attachment button
<ChatInput showAttachmentButton={false} />

// With voice button placeholder
<ChatInput showVoiceButton={true} />

// Disabled state
<ChatInput disabled={true} placeholder="Chat disabled" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Input value (controlled) |
| `onChange` | `(value: string) => void` | - | Called when input changes |
| `onSend` | `(message: string, attachments?: ChatAttachment[]) => void` | - | Called when send button is clicked |
| `placeholder` | `string` | `'Type a message...'` | Placeholder text |
| `attachments` | `ChatAttachment[]` | `[]` | Pre-attached files |
| `onAttachmentsChange` | `(attachments: ChatAttachment[]) => void` | - | Called when attachments change |
| `maxAttachments` | `number` | `5` | Maximum number of attachments |
| `showAttachmentButton` | `boolean` | `true` | Show paperclip button |
| `showVoiceButton` | `boolean` | `false` | Show microphone button placeholder |
| `disabled` | `boolean` | `false` | Disable the input |
| `className` | `string` | - | Additional CSS classes |

### ChatAttachment

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `file` | `File` | The file object |
| `preview` | `string` | Preview URL (for images) |
| `type` | `'image' \| 'file' \| 'audio' \| 'video'` | File type detection |

## Supported File Types

- Images: `image/*`
- Video: `video/*`
- Audio: `audio/*`
- Documents: `.pdf, .doc, .docx, .txt, .csv, .xlsx, .pptx`

## Examples

### Default Input

```tsx
<ChatInput
  onSend={(message) => console.log('Sent:', message)}
/>
```

### With Pre-filled Value

```tsx
<ChatInput
  value="I'd like to check my account balance"
  onChange={setMessage}
  onSend={handleSend}
/>
```

### With Initial Attachments

```tsx
<ChatInput
  attachments={[
    { id: '1', file: new File([''], 'photo.jpg', { type: 'image/jpeg' }), type: 'image', preview: 'https://example.com/photo.jpg' },
    { id: '2', file: new File([''], 'doc.pdf', { type: 'application/pdf' }), type: 'file' },
  ]}
  onSend={handleSend}
/>
```

### Custom Placeholder

```tsx
<ChatInput
  placeholder="Ask about your finances..."
  onSend={handleSend}
/>
```

### With Attachment Tracking

```tsx
const [attachments, setAttachments] = useState([]);

<ChatInput
  onSend={(msg, att) => sendMessage(msg, att)}
  attachments={attachments}
  onAttachmentsChange={setAttachments}
  maxAttachments={3}
/>
```

### Disabled State

```tsx
<ChatInput
  disabled={true}
  placeholder="Chat is unavailable"
/>
```

## Notes

- Uses React.forwardRef for the root element
- Auto-resizing textarea (grows with content, max 120px height)
- Enter sends message, Shift+Enter adds new line
- File upload with type detection (image/video/audio/file)
- Image previews with remove button
- Disabled send button when no content and no attachments
- Hidden file input supports multiple file selection
- Proper cleanup on send (clears input and attachments)
- Full dark mode support via CSS tokens
- ARIA labels for accessibility