# InspectorPanel

> **v1.0.26** · stable

A collapsible side panel component with accordion-style sections, commonly used for property inspectors, debugging panels, or configuration menus.

## Installation

```bash
# The component is copied to your project with the add cli command
import { InspectorPanel, InspectorField } from '@/components/ui/InspectorPanel';
```

## Basic Usage

```tsx
import { InspectorPanel } from '@/components/ui/InspectorPanel';

const sections = [
  {
    id: 'properties',
    title: 'Properties',
    defaultExpanded: true,
    content: (
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-text-secondary">Width</span>
          <span className="text-sm font-mono">320px</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-text-secondary">Height</span>
          <span className="text-sm font-mono">480px</span>
        </div>
      </div>
    ),
  },
  {
    id: 'styles',
    title: 'Styles',
    content: <div>Style content here</div>,
  },
];

<InspectorPanel sections={sections} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `InspectorSection[]` | - | Array of section objects |
| `width` | `string` | `'280px'` | Panel width |
| `className` | `string` | - | Additional CSS classes |

### InspectorSection

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique section identifier |
| `title` | `string` | Section header text |
| `content` | `ReactNode` | Section content |
| `defaultExpanded` | `boolean` | Whether section is expanded by default |

### InspectorField Props

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Field label text |
| `children` | `ReactNode` | Field content |

## Examples

### Wide Panel

```tsx
<InspectorPanel
  sections={sections}
  width="380px"
/>
```

### Narrow Panel

```tsx
<InspectorPanel
  sections={sections}
  width="200px"
/>
```

### Many Sections

```tsx
<InspectorPanel
  sections={[
    { id: 's1', title: 'General', defaultExpanded: true, content: <div>General settings</div> },
    { id: 's2', title: 'Appearance', defaultExpanded: true, content: <div>Appearance settings</div> },
    { id: 's3', title: 'Typography', content: <div>Font settings</div> },
    { id: 's4', title: 'Spacing', content: <div>Padding & margin</div> },
    { id: 's5', title: 'Effects', content: <div>Shadows & blur</div> },
    { id: 's6', title: 'Animation', content: <div>Transitions</div> },
  ]}
/>
```

### With InspectorField

```tsx
import { InspectorPanel, InspectorField } from '@/components/ui/InspectorPanel';

<InspectorPanel
  sections={[
    {
      id: 'layout',
      title: 'Layout',
      defaultExpanded: true,
      content: (
        <>
          <InspectorField label="Width">
            <input type="text" className="w-full px-2 py-1 border rounded" />
          </InspectorField>
          <InspectorField label="Height">
            <input type="text" className="w-full px-2 py-1 border rounded" />
          </InspectorField>
        </>
      ),
    },
  ]}
/>
```

### Single Section

```tsx
<InspectorPanel
  sections={[
    { id: 'single', title: 'Settings', defaultExpanded: true, content: <div>Only section</div> },
  ]}
/>
```

## Notes

- Fully controlled expansion state (remembers user toggles)
- Smooth height/opacity animations on expand/collapse
- Chevron rotates to indicate expansion state
- Scrollable panel content when sections exceed height
- Designed to sit alongside a main content area
- Dark mode compatible via design tokens
- Keyboard accessible with proper focus management