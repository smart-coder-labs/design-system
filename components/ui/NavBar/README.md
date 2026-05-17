# NavBar

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

## API

### NavBar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'glass' \| 'transparent'` | `'default'` | Visual style variant |
| `sticky` | `boolean` | `true` | Makes navbar sticky at top |
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