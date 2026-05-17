# Tabs

> **v1.0.14** · stable

Organize content into separate views where only one view is visible at a time. Supports default (underline) and segmented variants with smooth animated transitions.

## Installation

```bash
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
```

## Basic Usage

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for tab 1</TabsContent>
  <TabsContent value="tab2">Content for tab 2</TabsContent>
</Tabs>
```

## API

### Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | string | - | Initial active tab (uncontrolled) |
| value | string | - | Controlled active tab |
| onValueChange | (value: string) => void | - | Callback when tab changes |
| children | ReactNode | - | TabsList and TabsContent children |
| className | string | - | Additional classes |

### TabsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'segmented' | 'default' | Visual style variant |
| children | ReactNode | - | TabsTrigger children |
| className | string | - | Additional classes |

### TabsTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Unique identifier for the tab |
| disabled | boolean | false | Disable the trigger |
| children | ReactNode | - | Tab label |
| className | string | - | Additional classes |

### TabsContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Matching tab identifier |
| children | ReactNode | - | Content to display |
| className | string | - | Additional classes |

## Examples

### Default Variant (Underline)

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="team">Team</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content here</TabsContent>
  <TabsContent value="settings">Settings content here</TabsContent>
  <TabsContent value="team">Team content here</TabsContent>
</Tabs>
```

### Segmented Variant

```tsx
<Tabs defaultValue="day">
  <TabsList variant="segmented">
    <TabsTrigger value="day">Day</TabsTrigger>
    <TabsTrigger value="week">Week</TabsTrigger>
    <TabsTrigger value="month">Month</TabsTrigger>
  </TabsList>
  <TabsContent value="day">Daily view</TabsContent>
  <TabsContent value="week">Weekly view</TabsContent>
  <TabsContent value="month">Monthly view</TabsContent>
</Tabs>
```

### Controlled Tabs

```tsx
const [activeTab, setActiveTab] = useState('overview');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="details">...</TabsContent>
</Tabs>
```

## Notes

- Uses React Context for state management
- Animated transitions using Framer Motion
- Supports keyboard navigation
- Accessible with proper ARIA roles (tablist, tab, tabpanel)