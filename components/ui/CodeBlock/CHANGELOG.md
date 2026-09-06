# CodeBlock Changelog

## [1.1.1] - Copy feedback

- Copy button now announces "Copied to clipboard" through a visually hidden `aria-live="polite"` region
- Button `aria-label`/`title` switch to "Copied to clipboard" while the copied state is active
- Added a visible "Copied" label and an animated (Framer Motion) Copy/Check icon swap
- `handleCopy` is async, awaits `navigator.clipboard.writeText` in a `try/catch`, guards missing clipboard support, and clears its reset timeout on unmount and repeated clicks

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
