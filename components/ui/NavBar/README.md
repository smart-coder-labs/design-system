# NavBar

> **v1.0.3** · experimental

Top navigation bar component with brand, content sections, and items. Supports multiple variants including default, glass, and transparent.

## Installation

```bash
import { NavBar, NavBarBrand, NavBarContent, NavBarItem, NavBarSeparator } from '@/components/ui/NavBar';
```

## Basic Usage

```tsx
<NavBar variant="default" sticky>
  <NavBarBrand href="/">
    <Logo />
    <span>MyApp</span>
  </NavBarBrand>
  
  <NavBarContent align="center">
    <NavBarItem active href="/">Home</NavBarItem>
    <NavBarItem href="/about">About</NavBarItem>
    <NavBarItem href="/contact">Contact</NavBarItem>
  </NavBarContent>
  
  <NavBarContent align="right">
    <NavBarSeparator />
    <Button variant="ghost">Sign In</Button>
  </NavBarContent>
</NavBar>
```

## Glass Variant

```tsx
<NavBar variant="glass">
  <NavBarBrand>FinFlow</NavBarBrand>
  <NavBarContent align="center">
    <NavBarItem active>Dashboard</NavBarItem>
    <NavBarItem>Transactions</NavBarItem>
    <NavBarItem>Analytics</NavBarItem>
  </NavBarContent>
</NavBar>
```

## Transparent Variant

```tsx
<div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
  <NavBar variant="transparent" sticky={false}>
    <NavBarBrand><span style={{ color: 'white' }}>MyApp</span></NavBarBrand>
    <NavBarContent align="center">
      <NavBarItem active><span style={{ color: 'white' }}>Home</span></NavBarItem>
      <NavBarItem><span style={{ color: 'rgba(255,255,255,0.7)' }}>About</span></NavBarItem>
    </NavBarContent>
  </NavBar>
</div>
```

## With Actions

```tsx
import { Button } from '@/components/ui/Button';

<NavBar variant="glass">
  <NavBarBrand href="/">MyApp</NavBarBrand>
  <NavBarContent align="center">
    <NavBarItem active>Dashboard</NavBarItem>
    <NavBarItem>Analytics</NavBarItem>
    <NavBarItem>Reports</NavBarItem>
  </NavBarContent>
  <NavBarContent align="right">
    <NavBarSeparator />
    <NavBarItem>Profile</NavBarItem>
  </NavBarContent>
</NavBar>
```

## Mobile Menu

`NavBarMobileToggle` + `NavBarMobileMenu` provide a built-in responsive menu, so
consumers never have to hand-roll a panel (a hand-rolled panel without a
background renders links on top of the page content).

```tsx
<NavBar>
  <NavBarBrand href="/">MyApp</NavBarBrand>

  {/* Desktop links */}
  <NavBarContent align="center" className="hidden md:flex">
    <NavBarItem active href="/">Home</NavBarItem>
    <NavBarItem href="/pricing">Pricing</NavBarItem>
  </NavBarContent>

  {/* Mobile toggle + panel (both hidden from `md` upwards) */}
  <NavBarMobileToggle />
  <NavBarMobileMenu>
    <NavBarMobileMenuItem active href="/">Home</NavBarMobileMenuItem>
    <NavBarMobileMenuItem href="/pricing">Pricing</NavBarMobileMenuItem>
  </NavBarMobileMenu>
</NavBar>
```

Controlled usage:

```tsx
const [open, setOpen] = useState(false);

<NavBar open={open} onOpenChange={setOpen}>
  <NavBarBrand>MyApp</NavBarBrand>
  <NavBarMobileToggle />
  <NavBarMobileMenu>
    <NavBarMobileMenuItem href="/">Home</NavBarMobileMenuItem>
  </NavBarMobileMenu>
</NavBar>
```

## API

### NavBar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'glass' \| 'transparent'` | `'default'` | Visual style variant |
| `sticky` | `boolean` | `true` | Makes navbar sticky at top |
| `open` | `boolean` | - | Controlled mobile menu open state |
| `defaultOpen` | `boolean` | `false` | Initial mobile menu state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | - | Called when the mobile menu opens/closes |
| `mobileMenuId` | `string` | auto | Overrides the generated panel id |
| `className` | `string` | `''` | Optional className |
| `children` | `ReactNode` | - | NavBar content |

### NavBarBrand Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `'/'` | Brand link URL |
| `className` | `string` | `''` | Optional className |
| `children` | `ReactNode` | - | Brand content |

### NavBarContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Content alignment |
| `className` | `string` | `''` | Optional className |
| `children` | `ReactNode` | - | Content items |

### NavBarItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `active` | `boolean` | `false` | Active state with indicator |
| `href` | `string` | - | Item link URL |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | `''` | Optional className |
| `children` | `ReactNode` | - | Item content |

### NavBarMobileToggle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Hamburger icon size |
| `variant` | `'default' \| 'primary' \| 'ghost'` | `'default'` | Icon color variant |
| `aria-label` | `string` | `'Toggle menu'` | Accessible label |
| `className` | `string` | `''` | Optional className |

### NavBarMobileMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showBackdrop` | `boolean` | `true` | Renders a dimmed scrim behind the panel |
| `closeOnBackdropClick` | `boolean` | `true` | Clicking the scrim closes the menu |
| `closeOnEscape` | `boolean` | `true` | Escape closes the menu |
| `lockScroll` | `boolean` | `true` | Locks body scroll while open |
| `className` | `string` | `''` | Optional className |
| `children` | `ReactNode` | - | Menu items |

### NavBarMobileMenuItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `active` | `boolean` | `false` | Active state (sets `aria-current="page"`) |
| `href` | `string` | - | Item link URL (renders `<a>`, otherwise `<button>`) |
| `onClick` | `() => void` | - | Click handler |
| `closeOnClick` | `boolean` | `true` | Closes the menu after activation |
| `className` | `string` | `''` | Optional className |
| `children` | `ReactNode` | - | Item content |

### NavBarSeparator

A vertical separator line between navbar sections.

```tsx
<NavBarContent align="right">
  <NavBarSeparator />
  <NavBarItem>Profile</NavBarItem>
</NavBarContent>
```

## Notes

- Uses Framer Motion for entrance animation (slide down from top)
- Glass variant applies backdrop blur effect
- Active indicator uses layout animation for smooth transitions
- Active item shows a blue indicator bar below using `layoutId`
- Responsive container with max-width (7xl / 1280px)
- Supports dark mode via design tokens
- Supports keyboard navigation and focus states
- Hover and tap animations via Framer Motion
- Mobile panel is opaque (`bg-surface-primary`, `border-b border-border-primary`,
  `shadow-lg`) and sits above page content, so links never overlap the page
- Toggle and panel are hidden from `md` upwards, and the menu closes automatically
  when the viewport reaches the desktop breakpoint
- Escape closes the mobile menu and returns focus to the toggle; the panel is
  unmounted (not just hidden) when closed