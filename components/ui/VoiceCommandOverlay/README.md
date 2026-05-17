# VoiceCommandOverlay

> **v1.0.6** · stable

A voice command interface overlay for hands-free fintech operations. Features listening animation, speech-to-text simulation, and command confirmation.

## Installation

```bash
# The component is copied to your project with the add cli command
import { VoiceCommandOverlay } from '@/components/ui/VoiceCommandOverlay';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { VoiceCommandOverlay } from '@/components/ui/VoiceCommandOverlay';

function VoiceDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Voice Command
      </button>
      <VoiceCommandOverlay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls overlay visibility |
| `onClose` | `() => void` | - | Callback when overlay is closed |

## Flow

The component operates in three phases:

1. **Listening** - Shows microphone animation with audio wave visualization
2. **Processing** - Shows loading spinner while interpreting command
3. **Confirming** - Displays parsed command with confirmation button

## Notes

- The component has internal state simulation for demo purposes
- Click outside or X button to close
- Supports dark mode via CSS tokens
- Mobile-friendly bottom sheet layout on small screens