# Stepper

> **v1.0.25** · stable

Multi-step progress component with 12 visual variants for different use cases.

## Installation

```bash
import { Stepper } from '@/components/ui/Stepper';
```

## Basic Usage

```tsx
const steps = [
  { id: 1, title: 'Personal Info', description: 'Your basic details' },
  { id: 2, title: 'Contact', description: 'How to reach you' },
  { id: 3, title: 'Review', description: 'Confirm your data' },
];

<Stepper
  steps={steps}
  activeStep={1}
  onStepClick={(index) => setStep(index)}
>
  <div>Step 1 content</div>
  <div>Step 2 content</div>
  <div>Step 3 content</div>
</Stepper>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| steps | `Step[]` | - | Array of step definitions |
| activeStep | `number` | - | Current step index (0-based) |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| variant | See below | `'default'` | Visual style variant |
| onStepClick | `(index: number) => void` | - | Step click handler |
| isError | `boolean` | `false` | Error state on current step |
| className | `string` | `''` | Wrapper className |
| contentClassName | `string` | `''` | Content panel className |
| children | `ReactNode` | - | Step content (compound pattern) |

### Step

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | `string \| number` | - | Unique step identifier |
| title | `string` | - | Step title |
| description | `string` | - | Optional description |
| icon | `ReactNode` | - | Optional custom icon |
| content | `ReactNode` | - | Inline step content |

### Variant Options

| Variant | Description |
|---------|-------------|
| `default` | Numbered circles with connector line |
| `simple` | Numbered circles only (no labels) |
| `bullets` | Small dot indicators |
| `panel` | Card with left accent border + breadcrumb pills |
| `tabs` | Horizontal tab strip with animated underline |
| `progress` | Linear progress bar with percentage |
| `accordion` | Collapsible sections |
| `timeline` | Vertical timeline with alternating cards |
| `chevron` | Arrow/chevron shaped steps |
| `cards` | Grid of cards, active elevated |
| `inline` | Ultra-compact single-line indicator |
| `radial` | Circular SVG ring with center info |

## Notes

- Uses React.forwardRef
- Supports dark mode via design tokens
- 12 visual variants for diverse use cases
- Animated transitions between steps
- Error state styling with red accent
- Content can be passed as children or step.content
- Fully accessible with ARIA roles