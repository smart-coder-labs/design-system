# AudioPlayer

> **v1.0.18** · stable

A full-featured audio player component with playback controls, progress bar, volume control, and speed adjustment.

## Installation

```tsx
import { AudioPlayer } from '@/components/ui/AudioPlayer';
```

## Basic Usage

```tsx
<AudioPlayer
  src="/audio/track.mp3"
  title="Song Title"
  artist="Artist Name"
  coverArt="/cover.jpg"
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | - | Audio file URL |
| title | string | - | Track title |
| artist | string | - | Artist name |
| coverArt | string (optional) | - | Album art URL |
| autoPlay | boolean | false | Auto-play on load |
| className | string | - | Additional classes |

## Features

- Play/Pause controls with skip forward/back (10s)
- Seekable progress bar
- Volume control with mute toggle
- Playback speed selection (0.5x, 1x, 1.5x, 2x)
- Download option via dropdown menu

## Notes

- Uses HTML5 `<audio>` element
- Requires Slider and Combobox components
- No React.forwardRef (uses FC)