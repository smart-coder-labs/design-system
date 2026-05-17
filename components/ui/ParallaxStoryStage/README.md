# ParallaxStoryStage

> **v1.0.25** · stable

A horizontal scroll-driven storytelling component that reveals content panels progressively as the user scrolls vertically. Combines UnscramblingText, ComicPanel, and FloatingElement components for an immersive narrative experience.

## Installation

```tsx
import { ParallaxStoryStage } from '@/components/ui/ParallaxStoryStage';
```

## Basic Usage

```tsx
<ParallaxStoryStage />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

## How It Works

The component creates a 500vh tall container that enables scroll-based animation:

1. **Sticky positioning** - The content sticks to the viewport while scrolling
2. **Horizontal scroll** - Scroll progress drives horizontal movement left (-60%)
3. **Fade-in panels** - Right panel fades in as scroll begins
4. **Combined with other components**:
   - `UnscramblingText` - Animated text reveal
   - `ComicPanel` - Styled content boxes
   - `FloatingElement` - Decorative animated elements

## Example Structure

The component internally combines three story panels:

1. **Left Panel** - Scene title + ComicPanel with opening text
2. **Center Panel** - Main reveal with FloatingElement decoration
3. **Right Panel** - Closing ComicPanel with call-to-action

## Notes

- The component height is fixed at 500vh for scroll duration
- Uses `position: sticky` for the viewport-locked content
- Horizontal movement is mapped from scroll progress (0 to 1)
- Combined with other components for full effect:
  - UnscramblingText
  - ComicPanel  
  - FloatingElement

See individual component READMEs for more details on those.