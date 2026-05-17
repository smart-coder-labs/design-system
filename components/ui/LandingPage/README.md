# LandingPage

> Note: This component does not have a standalone implementation. It is a composition pattern demonstrated in the Storybook stories.

## Overview

The LandingPage is a full-page composition pattern that combines multiple Apple Design System components to create a complete landing page. It demonstrates how to compose:

- `NavBar` - Navigation with glass effect
- `Footer` - Complete footer with columns
- `Card` - Feature and pricing cards
- `Title`, `Text` - Typography components
- `Badge` - Status badges
- `Button` - Call-to-action buttons
- `Accordion` - FAQ sections
- `Reviews` - Customer testimonials
- `PriceDisplay` - Pricing display
- `SectionHeader` - Section titles

## Usage Pattern

To create a landing page, compose these components:

```tsx
<div className="min-h-screen">
  <NavBar variant="glass" sticky>
    <NavBarBrand>Brand</NavBarBrand>
    <NavBarContent>
      <NavBarItem href="#features">Features</NavBarItem>
    </NavBarContent>
  </NavBar>

  <section className="hero">
    <Title level={1}>Hero Title</Title>
    <Text variant="lead">Hero description</Text>
    <Button>CTA</Button>
  </section>

  <section id="features">
    <SectionHeader title="Features" />
    <div className="grid">
      <Card>Feature 1</Card>
      <Card>Feature 2</Card>
    </div>
  </section>

  <Footer>
    <FooterContent>...</FooterContent>
  </Footer>
</div>
```

## See Also

- [NavBar](../NavBar/README.md)
- [Footer](../Footer/README.md)
- [Card](../Card/README.md)
- [Button](../Button/README.md)
- [SectionHeader](../SectionHeader/README.md)