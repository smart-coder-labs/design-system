# PENDING — issue #45: "Copy command" button gives no feedback

## Done
- Investigated: the landing page source (`smart-coder-labs.github.io/landing-ds`) is NOT in this repo.
  Following the precedent of issues #25/#26/#30, the fix is applied to the design-system
  component that backs the pattern: `components/ui/CodeBlock/CodeBlock.tsx` (copy-to-clipboard button).

## Left
- [ ] Add accessible + visible copy feedback to `CodeBlock.tsx` (aria-live announcement, aria-label swap,
      animated Check/Copy icon swap, `type="button"`, awaited clipboard with error handling, timeout cleanup).
- [ ] Update `CodeBlock.stories.tsx` if needed.
- [ ] Type-check.
