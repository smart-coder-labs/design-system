# VideoPlayer

> **v1.0.2** · stable

A custom video player with playback controls, progress bar, volume control, and fullscreen support. Features smooth animations and a modern interface.

## Installation

```bash
# The component is copied to your project with the add cli command
import { VideoPlayer } from '@/components/ui/VideoPlayer';
```

## Basic Usage

```tsx
import { VideoPlayer } from '@/components/ui/VideoPlayer';

<VideoPlayer
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"
/>
```

## With Autoplay

```tsx
<VideoPlayer
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"
  autoPlay
  muted
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Video source URL (required) |
| `poster` | `string` | - | Poster image URL |
| `autoPlay` | `boolean` | `false` | Autoplay video on load |
| `loop` | `boolean` | `false` | Loop video playback |
| `muted` | `boolean` | `false` | Start muted |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Loop

```tsx
<VideoPlayer
  src="https://example.com/background-video.mp4"
  loop
  muted
  autoPlay
/>
```

### Fullscreen Mode

Click the fullscreen button to enter fullscreen mode. The player automatically detects fullscreen state and adjusts the UI accordingly.

```tsx
<VideoPlayer
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"
/>
```

## Controls

The video player includes:

- **Play/Pause** - Toggle playback
- **Volume** - Click icon to mute/unmute, drag slider to adjust
- **Progress Bar** - Click or drag to seek
- **Time Display** - Current time / duration
- **Fullscreen** - Toggle fullscreen mode

## Notes

- Controls auto-hide after 2 seconds of inactivity during playback
- Controls appear on mouse move
- Shows loading spinner during buffering
- Click video to toggle play/pause
- Supports dark mode via CSS tokens
- Uses Slider component for progress and volume