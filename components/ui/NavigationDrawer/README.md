# NavigationDrawer

> **v1.0.35** · stable

A slide-in navigation drawer component with smooth animations, backdrop support, and keyboard accessibility. Can slide from left or right with configurable width and position.

## Basic Usage

```tsx
import { NavigationDrawer } from '@/components/ui/NavigationDrawer';

const [isOpen, setIsOpen] = useState(false);

<NavigationDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  sections={[
    {
      title: 'Menu',
      items: [
        { label: 'Dashboard', icon: <Home />, active: true },
        { label: 'Transactions', icon: <CreditCard /> },
        { label: 'Analytics', icon: <BarChart /> },
      ]
    }
  ]}
/>
```

## With Header and Footer

```tsx
<NavigationDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  header={<div><h3>FinFlow</h3><p>cesar@email.com</p></div>}
  footer={
    <button onClick={() => console.log('Sign out')}>
      <LogOut /> Sign Out
    </button>
  }
  sections={navSections}
/>
```

## With Badges

```tsx
<NavigationDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  sections={[
    {
      items: [
        { label: 'Dashboard', icon: <Home />, badge: 3 },
        { label: 'Notifications', icon: <Bell />, badge: 7 },
        { label: 'Settings', icon: <Settings /> },
      ]
    }
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | Required | Whether the drawer is open |
| `onClose` | `() => void` | Required | Callback when drawer should close |
| `position` | `'left' \| 'right'` | `'left'` | Drawer slide direction |
| `sections` | `NavigationDrawerSection[]` | `[]` | Navigation sections |
| `header` | `ReactNode` | - | Optional header content |
| `footer` | `ReactNode` | - | Optional footer content |
| `width` | `'sm' \| 'md' \| 'lg'` | `'md'` | Drawer width |
| `showBackdrop` | `boolean` | `true` | Show backdrop overlay |
| `closeOnBackdropClick` | `boolean` | `true` | Close on backdrop click |
| `belowNavBar` | `boolean` | `false` | Position below navbar |
| `navBarHeight` | `number` | `56` | Navbar height when belowNavBar |
| `className` | `string` | - | Additional CSS classes |

### NavigationDrawerSection

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Section header (optional) |
| `items` | `NavigationDrawerItem[]` | List of navigation items |

### NavigationDrawerItem

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Item label text |
| `href` | `string` | Link URL (optional, renders as `<a>`) |
| `icon` | `ReactNode` | Icon element |
| `active` | `boolean` | Active state styling |
| `onClick` | `() => void` | Click handler |
| `badge` | `string \| number` | Badge/count to display |

## Examples

### Right-side Drawer

```tsx
<NavigationDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  width="sm"
  sections={[{ items: notificationItems }]}
/>
```

### Below Navbar

```tsx
<NavBar>...</NavBar>
<NavigationDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  belowNavBar
  navBarHeight={64}
  sections={[{ items: navItems }]}
/>
```

### Without Backdrop

```tsx
<NavigationDrawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  showBackdrop={false}
  sections={[{ items: navItems }]}
/>
```

## Notes

- Uses Framer Motion for slide animations (spring physics)
- Locks body scroll when drawer is open
- Handles Escape key to close
- Has `role="dialog"` and `aria-modal="true"`
- Backdrop has blur effect and click-to-close
- Full height or partial height based on `belowNavBar` prop
- Dark mode support via design tokens