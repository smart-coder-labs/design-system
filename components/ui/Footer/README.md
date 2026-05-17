# Footer

> **v1.0.33** · stable

A comprehensive footer component with support for brand info, navigation columns, links, and copyright text. Built with compound components for flexible composition.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Footer, FooterTop, FooterContent, FooterColumn, FooterLink, FooterBottom } from '@/components/ui/Footer';
```

## Basic Usage

```tsx
import { Footer, FooterTop, FooterContent, FooterColumn, FooterLink, FooterBottom } from '@/components/ui/Footer';

<Footer>
    <FooterTop
        title="MyBrand"
        description="Your brand description here"
    />
    <FooterContent>
        <FooterColumn title="Product">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Docs</FooterLink>
        </FooterColumn>
        <FooterColumn title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
        </FooterColumn>
    </FooterContent>
    <FooterBottom>
        <span>© 2026 Company. All rights reserved.</span>
    </FooterBottom>
</Footer>
```

## Compound Components

### Footer

The root container.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Footer content |
| `className` | `string` | Additional classes |
| `...props` | `HTMLAttributes<HTMLElement>` | Standard HTML props |

### FooterTop

Optional header section with brand info.

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Brand/company name (default: "Acme Inc.") |
| `description` | `string` | Short description text |
| `icon` | `ReactNode` | Brand icon or logo |
| `socials` | `ReactNode` | Social media links |
| `className` | `string` | Additional classes |

### FooterContent

Grid wrapper for footer columns.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Footer columns |
| `className` | `string` | Additional classes |

### FooterColumn

A column in the footer grid.

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Column heading |
| `children` | `ReactNode` | Links or content |
| `span` | `number` | Column span (out of 12) |
| `className` | `string` | Additional classes |

### FooterLink

A single link in a column.

| Prop | Type | Description |
|------|------|-------------|
| `href` | `string` | Link URL |
| `as` | `ElementType` | Custom element type (default: "a") |
| `children` | `ReactNode` | Link text |
| `className` | `string` | Additional classes |
| `...props` | `AnchorHTMLAttributes` | Standard anchor props |

### FooterBottom

Bottom section with copyright and additional info.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Content (copyright, etc.) |
| `className` | `string` | Additional classes |

## Examples

### Full Footer

```tsx
<Footer>
    <FooterTop
        title="FinTechApp"
        description="Modern financial tools for everyone."
    />
    <FooterContent>
        <FooterColumn title="Product">
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Integrations</FooterLink>
        </FooterColumn>
        <FooterColumn title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
        </FooterColumn>
        <FooterColumn title="Legal">
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
        </FooterColumn>
    </FooterContent>
    <FooterBottom>
        <span>© 2026 FinTechApp. All rights reserved.</span>
    </FooterBottom>
</Footer>
```

### Minimal Footer

```tsx
<Footer>
    <FooterTop
        title="NeoBank"
        description="Banking for the future."
    />
    <FooterBottom>
        <span>© 2026 NeoBank. All rights reserved.</span>
    </FooterBottom>
</Footer>
```

### With Custom Span

```tsx
<FooterContent>
    <FooterColumn title="Main" span={6}>
        <FooterLink href="#">Link 1</FooterLink>
        <FooterLink href="#">Link 2</FooterLink>
    </FooterColumn>
    <FooterColumn title="Secondary" span={3}>
        <FooterLink href="#">Link 3</FooterLink>
    </FooterColumn>
    <FooterColumn title="Tertiary" span={3}>
        <FooterLink href="#">Link 4</FooterLink>
    </FooterColumn>
</FooterContent>
```

## Notes

- Uses GridSystem internally for layout
- Fully responsive with mobile-first approach
- Supports dark mode via CSS tokens
- FooterLink uses semantic `<a>` by default but supports custom components via `as` prop
- All hover states use smooth color transitions