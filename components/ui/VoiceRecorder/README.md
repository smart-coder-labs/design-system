# VoiceRecorder

> **v1.0.2** · experimental

A voice recording component with start/stop controls, playback, and audio blob output. Uses the browser's MediaRecorder API for actual audio capture.

## Installation

```bash
# The component is copied to your project with the add cli command
import { VoiceRecorder } from '@/components/ui/VoiceRecorder';
```

## Basic Usage

```tsx
import { VoiceRecorder } from '@/components/ui/VoiceRecorder';

<VoiceRecorder
  onRecordingComplete={(blob, duration) => {
    console.log('Recorded:', duration, 'seconds');
    // Handle the audio blob
  }}
/>
```

## With Send Function

```tsx
<VoiceRecorder
  onRecordingComplete={handleRecordingComplete}
  onSend={(blob) => {
    // Immediately send the audio
    uploadAudio(blob);
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onRecordingComplete` | `(blob, duration) => void` | - | Called when recording stops |
| `onSend` | `(blob) => void` | - | Called to immediately send recording |
| `maxDuration` | `number` | `60` | Maximum recording duration in seconds |
| `autoSend` | `boolean` | `false` | Automatically send when recording stops |
| `showWaveform` | `boolean` | `true` | Show visual feedback |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Custom Duration

```tsx
<VoiceRecorder
  onRecordingComplete={handleRecording}
  maxDuration={120}  // 2 minutes
/>
```

### With Auto Send

```tsx
<VoiceRecorder
  onRecordingComplete={handleRecording}
  onSend={uploadAudio}
  autoSend
/>
```

When `autoSend` is true, both `onRecordingComplete` and `onSend` are called when recording stops.

## States

The component has three states:

1. **Idle** - Shows "Start Recording" button
2. **Recording** - Shows timer, pause/resume/stop controls, and progress bar
3. **Playback** - Shows play/pause, delete, and optional send buttons

## Notes

- Uses the browser's `navigator.mediaDevices.getUserMedia` API
- Requires microphone permissions
- Records in WebM format
- Automatically stops at `maxDuration`
- Supports dark mode via CSS tokens