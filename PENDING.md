# Pending — issue #52 (ThemeToggle aria-label not synced with active theme)

## Done
- Investigated issue #52. Root cause located in `components/ui/ThemeToggle/ThemeToggle.tsx`:
  - the toggle hydrates only from `localStorage[storageKey]` and never reads the theme already
    applied to `document.documentElement`, so on a fresh load with `html.dark` already set it
    falls back to `defaultMode` and its state disagrees with what the user sees;
  - the rendered `Switch` has no accessible name at all (`SwitchProps` neither declares nor
    forwards `aria-label`), so any label a consumer attaches is static and goes stale.

## Left
- Sync initial state from the applied DOM theme when nothing is persisted.
- Add `aria-label` support to `Switch` and pass a label derived from the current theme on every render.
- Add a regression test + story; update the component README / example docs that repeat the pattern.
- Run type-check / lint / tests.
