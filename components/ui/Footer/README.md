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
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="https://docs.example.com" target="_blank">Docs</FooterLink>
        </FooterColumn>
        <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            {/* No page yet — renders as plain, non-interactive text */}
            <FooterLink disabled>Careers</FooterLink>
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
| `href` | `string` | Link URL. If missing, empty or `"#"` **and no `as` prop is given**, the link renders as non-interactive plain text |
| `disabled` | `boolean` | Forces the non-interactive (no destination) rendering, whatever `as`/`href` are |
| `as` | `ElementType` | Custom element type (default: `"a"`, or `"span"` when `as` is omitted and there is no destination). Passing `as` opts out of the automatic no-destination rendering |
| `target` | `string` | Anchor target. With `target="_blank"`, `rel` defaults to `"noopener noreferrer"` |
| `children` | `ReactNode` | Link text |
| `className` | `string` | Additional classes |
| `...props` | `AnchorHTMLAttributes` | Standard anchor props |

#### No-destination state

Pages that don't exist should never be presented as links. The rendering rules are:

1. `disabled` is `true` → always renders the inactive element (a `<span>`, or the element given via
   `as`) with `aria-disabled="true"`, muted styling and no focus behaviour.
2. No `as` prop **and** `href` is `undefined`, `""` or `"#"` → renders a muted, non-focusable
   `<span aria-disabled="true">` instead of an `<a>`, keeping the same typography and spacing.
3. `as` is provided and `disabled` is not `true` → renders that element as an active link with all
   props spread through, even without an `href` (e.g. `as="button"` with `onClick`, or a router
   `Link` using `to`).

```tsx
<FooterColumn title="Legal">
    <FooterLink href="/privacy">Privacy Policy</FooterLink>
    {/* All three render as plain text, not links */}
    <FooterLink disabled>Terms of Service</FooterLink>
    <FooterLink>Cookie Policy</FooterLink>
    <FooterLink href="#">Imprint</FooterLink>
</FooterColumn>

<FooterColumn title="More">
    {/* Active: `as` opts out of the no-destination degradation */}
    <FooterLink as="button" type="button" onClick={openCookieSettings}>Cookie settings</FooterLink>
    <FooterLink as={RouterLink} to="/about">About</FooterLink>
    {/* Still inactive: `disabled` wins over `as` */}
    <FooterLink as="button" disabled>Careers</FooterLink>
</FooterColumn>
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
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="/integrations">Integrations</FooterLink>
        </FooterColumn>
        <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink disabled>Careers</FooterLink>
        </FooterColumn>
        <FooterColumn title="Legal">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink disabled>Terms</FooterLink>
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
- FooterLink never renders a dead `href="#"` link: without a destination (and without an explicit `as`) it falls back to a muted, non-focusable `<span aria-disabled="true">`
- External links opened with `target="_blank"` get `rel="noopener noreferrer"` automatically
- All hover states use smooth color transitions