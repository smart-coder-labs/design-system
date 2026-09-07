# Footer

> **v1.0.3** · experimental

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
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/docs">Docs</FooterLink>
        </FooterColumn>
        <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
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
| `href` | `string` | Link URL. If missing, empty or `"#"` (and no `as`/`onClick`), renders a non-navigating `<span aria-disabled="true">` |
| `as` | `ElementType` | Custom element type (default: "a") |
| `external` | `boolean` | Adds `target="_blank"` + `rel="noopener noreferrer"` (anchors only) |
| `children` | `ReactNode` | Link text |
| `className` | `string` | Additional classes |
| `...props` | `AnchorHTMLAttributes` | Standard anchor props |

```tsx
{/* Real destinations */}
<FooterLink href="#pricing">Pricing</FooterLink>
<FooterLink href="https://github.com/smart-coder-labs/design-system" external>GitHub</FooterLink>

{/* No destination yet → renders as non-navigating text, not a link */}
<FooterLink href="#">Coming soon</FooterLink>
```

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
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/integrations">Integrations</FooterLink>
        </FooterColumn>
        <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
        </FooterColumn>
        <FooterColumn title="Legal">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
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
        <FooterLink href="/link-1">Link 1</FooterLink>
        <FooterLink href="/link-2">Link 2</FooterLink>
    </FooterColumn>
    <FooterColumn title="Secondary" span={3}>
        <FooterLink href="/link-3">Link 3</FooterLink>
    </FooterColumn>
    <FooterColumn title="Tertiary" span={3}>
        <FooterLink href="/link-4">Link 4</FooterLink>
    </FooterColumn>
</FooterContent>
```

## Notes

- Uses GridSystem internally for layout
- Fully responsive with mobile-first approach
- Supports dark mode via CSS tokens
- FooterLink uses semantic `<a>` by default but supports custom components via `as` prop
- FooterLink never renders a dead `href="#"` anchor: placeholder links degrade to a non-navigating `<span aria-disabled="true">` with identical typography, so they cannot scroll the page to the top
- Use `external` for off-site destinations; caller-provided `target`/`rel` always win
- All hover states use smooth color transitions