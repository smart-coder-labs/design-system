# Pending — issue #51 (Mobile nav menu panel is transparent)

## Done
- Investigated: `components/ui/NavBar/NavBar.tsx` has **no** mobile menu at all; consumers
  (landing page) roll their own transparent panel. `HamburgerMenuIcon` exists but only as an icon.
- Identified idiomatic overlay-surface pattern used elsewhere in the DS
  (`Popover`, `Select`, `MenuBar`): `bg-surface-glass backdrop-blur-xl` /
  `bg-surface-primary` + `border-border-primary` + `shadow-lg` + `z-*`.

## Left
- Add an opaque/blurred mobile menu panel to `NavBar` (`NavBarMobileMenu` + trigger).
- Update `LandingPage.stories.tsx` so the mobile nav uses it.
- Type-check / lint.
