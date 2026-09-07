# Pending — issue #27 ([Footer] Ten footer links are href="#" placeholders)

## Done
- Investigated: landing footer lives in `components/ui/LandingPage/LandingPage.stories.tsx`
  (footer columns + legal row), rendered via the `Footer` compound components in
  `components/ui/Footer/Footer.tsx` (`FooterLink` renders a plain `<a>`).
- Existing landing section anchors: `#features`, `#testimonials`, `#pricing`, `#faq`.
  No routes/pages exist for privacy/terms/about/blog/contact.

## Left
- [ ] Make `FooterLink` not render a navigating anchor for placeholder hrefs (`#` / missing).
- [ ] Point landing footer links at real destinations (existing section anchors / external docs)
      and drop the ones with no destination.
- [ ] Type-check.
