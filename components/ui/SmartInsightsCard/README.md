# SmartInsightsCard

> **v1.0.16** · stable

An AI-powered insight card component that displays contextual financial information with expandable details and actionable buttons.

## Installation

```bash
# The component is copied to your project with the add cli command
import { SmartInsightsCard } from '@/components/ui/SmartInsightsCard';
```

## Basic Usage

```tsx
import { SmartInsightsCard } from '@/components/ui/SmartInsightsCard';

function Example() {
  return (
    <SmartInsightsCard
      title="Spending Analysis"
      summary="You've spent 20% more on restaurants this month compared to last month."
      type="alert"
    />
  );
}
```

## With Actions

```tsx
<SmartInsightsCard
  title="Savings Goal Reached"
  summary="Congratulations! You've successfully saved 10% of your income."
  type="positive"
  actions={[
    { label: 'View Portfolio', onClick: () => {}, primary: true },
    { label: 'Dismiss', onClick: () => {} }
  ]}
/>
```

## With Expandable Details

```tsx
<SmartInsightsCard
  title="Subscription Analysis"
  summary="You have 4 active subscriptions totaling $1,246/month."
  type="alert"
  actions={[
    { label: 'Review', onClick: () => {}, primary: true }
  ]}
  details={
    <div className="text-sm text-gray-600">
      <p><strong>Active subscriptions:</strong></p>
      <ul className="list-disc pl-5">
        <li>NetStream Premium: $299/mo</li>
        <li>AudioMax: $149/mo</li>
        <li>FitPlus: $599/mo</li>
      </ul>
    </div>
  }
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Main title of the insight |
| `summary` | `string` | - | AI-generated detailed summary |
| `type` | `'positive' \| 'negative' \| 'neutral' \| 'alert'` | `'neutral'` | Determines color and icon |
| `actions` | `InsightAction[]` | `[]` | Array of actionable buttons |
| `details` | `ReactNode` | - | Content shown when expanded |
| `icon` | `ReactNode` | - | Custom icon (overrides default) |

### InsightAction

```typescript
interface InsightAction {
  label: string;
  onClick: () => void;
  primary?: boolean;
}
```

## Examples

### Alert Type (Warning)

```tsx
<SmartInsightsCard
  title="AI Spending Analysis"
  summary="You've spent 20% more on restaurants this month."
  type="alert"
  actions={[
    { label: 'Adjust Budget', onClick: handleAdjust, primary: true },
    { label: 'Ignore', onClick: handleIgnore }
  ]}
/>
```

### Negative Type (Error)

```tsx
<SmartInsightsCard
  title="Excessive Entertainment Spending"
  summary="You've exceeded your entertainment budget by 45%."
  type="negative"
  actions={[
    { label: 'Set Limit', onClick: handleSetLimit, primary: true }
  ]}
/>
```

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <SmartInsightsCard title="Weekend Spending" summary="..." type="alert" />
  <SmartInsightsCard title="Goal Near" summary="..." type="positive" />
</div>
```

## Notes

- Auto-generates icon based on `type` prop (TrendingUp, TrendingDown, Lightbulb, Info)
- Supports expandable details with smooth animation
- Primary action button styled prominently
- Uses Framer Motion for entrance animations
- Backdrop blur effect on card background
- Fully accessible with proper ARIA attributes
- Supports dark mode via design tokens