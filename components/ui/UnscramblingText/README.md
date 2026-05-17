# UnscramblingText

> **v1.0.25** · stable

A text animation component that reveals text with a matrix-style character scrambling effect. Characters randomly cycle through a set before settling on the final text. Triggers when the text enters the viewport.

## Installation

```tsx
import { UnscramblingText } from '@/components/ui/UnscramblingText';
```

## Basic Usage

```tsx
<UnscramblingText text="SYSTEM BYPASS INITIATED" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | Required | Text to animate |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Reveal

```tsx
<UnscramblingText text="Loading..." />
```

### Display Text

```tsx
<UnscramblingText 
  text="DATA CORE DISCOVERED" 
  className="text-6xl font-black text-blue-500"
/>
```

### Inline with Other Content

```tsx
<div className="text-2xl">
  <UnscramblingText text="SCENE 01:" />
  <span className="ml-2">THE INFILTRATION</span>
</div>
```

### Different Typography

```tsx
<UnscramblingText 
  text="ACCESS GRANTED"
  className="font-mono text-lg tracking-widest text-green-500"
/>
```

## How It Works

1. Uses Framer Motion's `useInView` to detect when text enters viewport
2. Once in view, starts an interval that cycles through random characters
3. Characters are sampled from: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*`
4. Progressively reveals the actual text from left to right
5. Animation stops when all characters are revealed

## Timing

- Interval: 30ms per iteration
- Speed: ~3 characters revealed per iteration
- Total duration depends on text length

## Notes

- Animation triggers only once (`once: true`)
- Respects reduced motion preferences via `useInView`
- Monospace font by default for that "hacker" aesthetic
- Perfect for cinematic/tech introductions