# PENDING — issue #58 (footer placeholder `href="#"` links)

## Context
The reported page (`smart-coder-labs.github.io/landing-ds`) lives in a **different repo**
(`landing-ds`). This repo ships the `Footer` / `FooterLink` / `SignupForm` components and the
`LandingPage` story that the landing page is modelled on, and every placeholder `href="#"` in
this repo comes from those. Per the precedent of issues #25/#26/#30, the fix is made at the
component/library level here.

## DONE
- [x] Investigated: located every `href="#"` occurrence and the `FooterLink` API.

## LEFT
- [ ] `components/ui/Footer/Footer.tsx` — add `disabled` support to `FooterLink` so entries with
      no destination render as non-interactive text instead of dead links; auto-add
      `rel="noopener noreferrer"` for `target="_blank"`.
- [ ] `components/ui/SignupForm/SignupForm.tsx` — expose `privacyHref` / `termsHref`; render plain
      text when they are not supplied instead of `href="#"`.
- [ ] Replace placeholder `href="#"` fixtures in `LandingPage.stories.tsx`, `Footer.stories.tsx`
      and `Footer/README.md` with real destinations (in-page anchors / Storybook / GitHub URLs).
- [ ] Run `npm run type-check`, lint and tests.
