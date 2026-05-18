# AccessibleHighContrastMode

> **v1.0.1** · stable

A context-based accessibility component that provides toggle controls for high contrast mode, large text, and dyslexic-friendly fonts. Designed to improve readability for users with visual impairments.

## Installation

```bash
import { AccessibleHighContrastMode, HighContrastControls, HighContrastPreview } from '@/components/ui/AccessibleHighContrastMode';
```

## Basic Usage

The component consists of three parts:

```tsx
<AccessibleHighContrastMode>
  <HighContrastControls />
  <HighContrastPreview>
    <p>Your content here</p>
  </HighContrastPreview>
</AccessibleHighContrastMode>
```

## API

### AccessibleHighContrastMode (Provider)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'default' \| 'high'` | - | Force a specific mode (optional) |
| `highContrastLabel` | `string` | `'High Contrast'` | Label for high contrast button |
| `largeTextLabel` | `string` | `'Large Text'` | Label for large text button |
| `dyslexicFontLabel` | `string` | `'Dyslexic Font'` | Label for dyslexic font button |
| `accessibilityBadgeLabel` | `string` | `'Accessibility'` | Accessibility badge label |
| `className` | `string` | - | Additional CSS classes |

### HighContrastControls

Renders three toggle buttons for accessibility settings.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `highContrastLabel` | `string` | `'High Contrast'` | High contrast button label |
| `largeTextLabel` | `string` | `'Large Text'` | Large text button label |
| `dyslexicFontLabel` | `string` | `'Dyslexic Font'` | Dyslexic font button label |
| `className` | `string` | - | Additional CSS classes |

### HighContrastPreview

Renders content with accessibility styles applied based on context state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render with styles |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Implementation

```tsx
<AccessibleHighContrastMode>
  <div className="space-y-6">
    <HighContrastControls />
    <HighContrastPreview>
      <Card>
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
      </Card>
    </HighContrastPreview>
  </div>
</AccessibleHighContrastMode>
```

### Custom Labels

```tsx
<AccessibleHighContrastMode
  highContrastLabel="High Contrast Mode"
  largeTextLabel="Bigger Text"
  dyslexicFontLabel="OpenDyslexic"
>
  <HighContrastControls />
  <HighContrastPreview>
    <ArticleContent />
  </HighContrastPreview>
</AccessibleHighContrastMode>
```

### Reading Mode Application

```tsx
<AccessibleHighContrastMode>
  <HighContrastControls />
  <HighContrastPreview>
    <article className="prose">
      <h1>Chapter 1</h1>
      <p>Long form content that benefits from accessibility options...</p>
    </article>
  </HighContrastPreview>
</AccessibleHighContrastMode>
```

## Accessibility Notes

- All buttons are keyboard accessible (Enter/Space to toggle)
- Uses proper button roles and states
- Context provides state to all child components
- High contrast mode uses yellow-on-black for maximum visibility
- Large text increases font size by ~30%
- Dyslexic font uses OpenDyslexic-style characteristics (when available)
- Respects system preferences where applicable